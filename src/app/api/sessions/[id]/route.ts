import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { notifyStudentsOfLiveSession, effectiveSessionGrade } from "@/lib/sessionNotify";
import { getAssignedTeacherGrades } from "@/lib/teacherGrades";

const updateSchema = z.object({
  title: z.string().min(3).optional(),
  description: z.string().min(3).optional(),
  scheduledAt: z.string().datetime().optional(),
  durationMinutes: z.number().int().min(15).max(180).optional(),
  grade: z.number().int().min(0).max(12).optional().nullable(),
  courseId: z.string().optional().nullable(),
  meetingUrl: z.string().url().optional().nullable().or(z.literal("")),
});

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getSession();
  if (!session?.user || (session.user.role !== "TEACHER" && session.user.role !== "ADMIN")) {
    return NextResponse.json({ error: "Teachers only" }, { status: 403 });
  }

  const existing = await prisma.liveSession.findUnique({ where: { id: params.id } });
  if (!existing) return NextResponse.json({ error: "Session not found" }, { status: 404 });
  if (session.user.role === "TEACHER" && existing.teacherId !== session.user.id) {
    return NextResponse.json({ error: "Not your session" }, { status: 403 });
  }

  try {
    const body = await req.json();
    const data = updateSchema.parse(body);

    const meetingUrl =
      data.meetingUrl === undefined
        ? undefined
        : data.meetingUrl && data.meetingUrl.length > 0
          ? data.meetingUrl
          : existing.meetingUrl;

    const nextCourseId =
      data.courseId !== undefined ? data.courseId || null : existing.courseId;
    const nextGradeRaw =
      data.grade !== undefined ? data.grade : existing.grade;
    const nextGrade = await effectiveSessionGrade(nextGradeRaw, nextCourseId);
    if (nextGrade == null || !nextCourseId) {
      return NextResponse.json({ error: "A grade and matching course are required." }, { status: 400 });
    }
    const course = await prisma.course.findUnique({
      where: { id: nextCourseId },
      select: { grade: true },
    });
    if (!course || course.grade !== nextGrade) {
      return NextResponse.json({ error: "Course must match the session grade." }, { status: 400 });
    }
    if (session.user.role === "TEACHER") {
      const allowed = await getAssignedTeacherGrades(session.user.id, session.user.role);
      if (!allowed.includes(nextGrade)) {
        return NextResponse.json({ error: "That grade is not on your teaching assignment." }, { status: 403 });
      }
    }

    const live = await prisma.liveSession.update({
      where: { id: params.id },
      data: {
        ...(data.title != null ? { title: data.title } : {}),
        ...(data.description != null ? { description: data.description } : {}),
        ...(data.scheduledAt != null ? { scheduledAt: new Date(data.scheduledAt) } : {}),
        ...(data.durationMinutes != null ? { durationMinutes: data.durationMinutes } : {}),
        grade: nextGrade,
        courseId: nextCourseId,
        ...(meetingUrl !== undefined ? { meetingUrl } : {}),
      },
    });

    let notify = { notified: 0, recipientIds: [] as string[] };
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
        "updated"
      );
    } catch (err) {
      console.error("[sessions] student notify on update failed", err);
    }

    return NextResponse.json({ ...live, notifiedStudents: notify.notified });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ error: e.issues[0]?.message || "Invalid input" }, { status: 400 });
    }
    console.error(e);
    return NextResponse.json({ error: "Could not update session" }, { status: 500 });
  }
}
