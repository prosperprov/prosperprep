import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { jitsiRoomUrl, makeSessionSlug } from "@/lib/jitsi";
import { notifyStudentsOfLiveSession } from "@/lib/sessionNotify";
import { getAssignedTeacherGrades } from "@/lib/teacherGrades";

const createSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(3),
  scheduledAt: z.string().datetime(),
  durationMinutes: z.number().int().min(15).max(180).default(45),
  grade: z.number().int().min(0).max(12),
  courseId: z.string().min(1, "Course is required"),
});

export async function GET() {
  const session = await getSession();
  if (!session?.user) return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  let allowedGrades: number[] | null = null;
  if (session.user.role === "STUDENT") {
    const enrollments = await prisma.enrollment.findMany({
      where: { userId: session.user.id, status: "ACTIVE" },
      select: { grade: true },
    });
    allowedGrades = enrollments.map((enrollment) => enrollment.grade);
  } else if (session.user.role === "TEACHER") {
    allowedGrades = await getAssignedTeacherGrades(session.user.id, session.user.role);
  } else if (session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }
  const sessions = await prisma.liveSession.findMany({
    where: {
      scheduledAt: { gte: new Date(Date.now() - 1000 * 60 * 60 * 2) },
      ...(allowedGrades ? { grade: { in: allowedGrades } } : {}),
    },
    orderBy: { scheduledAt: "asc" },
    include: {
      teacher: { select: { id: true, name: true } },
      course: { select: { id: true, title: true } },
    },
    take: 50,
  });
  return NextResponse.json(sessions);
}

export async function POST(req: Request) {
  const session = await getSession();
  if (!session?.user || (session.user.role !== "TEACHER" && session.user.role !== "ADMIN")) {
    return NextResponse.json({ error: "Teachers only" }, { status: 403 });
  }

  try {
    const body = await req.json();
    const data = createSchema.parse(body);
    const course = await prisma.course.findUnique({
      where: { id: data.courseId },
      select: { id: true, grade: true, title: true },
    });
    if (!course) {
      return NextResponse.json({ error: "Select a valid course." }, { status: 400 });
    }
    if (course.grade !== data.grade) {
      return NextResponse.json(
        { error: "Course must match the selected grade." },
        { status: 400 }
      );
    }
    if (session.user.role === "TEACHER") {
      const allowed = await getAssignedTeacherGrades(session.user.id, session.user.role);
      if (!allowed.includes(data.grade)) {
        return NextResponse.json(
          { error: "That grade is not on your teaching assignment." },
          { status: 403 }
        );
      }
    }
    const slug = makeSessionSlug(data.title);
    const meetingUrl = jitsiRoomUrl(slug);
    const courseId = course.id;
    const grade = data.grade;

    const live = await prisma.liveSession.create({
      data: {
        title: data.title,
        description: data.description,
        scheduledAt: new Date(data.scheduledAt),
        durationMinutes: data.durationMinutes,
        grade,
        courseId,
        teacherId: session.user.id,
        jitsiRoomSlug: slug,
        meetingUrl,
      },
    });

    // Student-facing layer only — does not change teacher scheduling UX.
    let notify = { notified: 0 as number, recipientIds: [] as string[] };
    try {
      notify = await notifyStudentsOfLiveSession(
        {
          id: live.id,
          title: live.title,
          description: live.description,
          scheduledAt: live.scheduledAt,
          grade: live.grade,
          courseId: live.courseId,
          meetingUrl: live.meetingUrl,
        },
        "created"
      );
    } catch (err) {
      console.error("[sessions] student notify failed", err);
    }

    return NextResponse.json({ ...live, notifiedStudents: notify.notified });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ error: e.issues[0]?.message || "Invalid input" }, { status: 400 });
    }
    console.error(e);
    return NextResponse.json({ error: "Could not create session" }, { status: 500 });
  }
}
