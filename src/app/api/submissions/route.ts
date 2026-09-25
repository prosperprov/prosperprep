import { NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { canAccessCourseContent } from "@/lib/curriculumAccess";
import { getAssignedTeacherGrades } from "@/lib/teacherGrades";
import { parseWrittenPrompts } from "@/lib/writtenPrompts";

const postSchema = z.object({
  courseId: z.string().min(1),
  lessonId: z.string().optional().nullable(),
  promptKey: z.string().min(1).max(120),
  title: z.string().min(1).max(200),
  prompt: z.string().min(1),
  body: z.string().min(1).max(50000),
  maxScore: z.number().positive().max(100).optional(),
});

export async function POST(req: Request) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  if (session.user.role !== "STUDENT" && session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Students only" }, { status: 403 });
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = postSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid body", details: parsed.error.flatten() }, { status: 400 });
  }

  const { courseId, lessonId, promptKey, body } = parsed.data;
  const userId = session.user.id;

  const course = await prisma.course.findUnique({ where: { id: courseId } });
  if (!course) return NextResponse.json({ error: "Course not found" }, { status: 404 });

  const access = await canAccessCourseContent({
    userId,
    role: session.user.role,
    courseGrade: course.grade,
  });
  if (!access.ok) {
    return NextResponse.json({ error: access.reason }, { status: 403 });
  }

  let assignedPrompt: ReturnType<typeof parseWrittenPrompts>["prompts"][number];
  if (lessonId) {
    const lesson = await prisma.lesson.findUnique({ where: { id: lessonId } });
    if (!lesson || lesson.courseId !== courseId) {
      return NextResponse.json({ error: "Lesson not found in course" }, { status: 404 });
    }
    const assigned = parseWrittenPrompts(lesson.content).prompts.find((item) => item.promptKey === promptKey);
    if (!assigned) {
      return NextResponse.json({ error: "Written prompt is not part of this lesson" }, { status: 400 });
    }
    // The server owns the rubric and score. Client-supplied text cannot alter it.
    assignedPrompt = assigned;
  } else {
    return NextResponse.json({ error: "Select a lesson for written work" }, { status: 400 });
  }
  const { title, prompt, maxScore } = assignedPrompt;

  const existing = await prisma.writtenSubmission.findFirst({
    where: {
      userId,
      courseId,
      promptKey,
      lessonId: lessonId || null,
      status: { in: ["SUBMITTED", "RETURNED"] },
    },
    orderBy: { submittedAt: "desc" },
  });

  if (existing && existing.status === "SUBMITTED") {
    const updated = await prisma.writtenSubmission.update({
      where: { id: existing.id },
      data: {
        title,
        prompt,
        body,
        maxScore: maxScore ?? existing.maxScore,
        submittedAt: new Date(),
        score: null,
        percent: null,
        teacherFeedback: null,
        gradedById: null,
        gradedAt: null,
      },
    });
    return NextResponse.json({ ok: true, submission: updated, updated: true });
  }

  const created = await prisma.writtenSubmission.create({
    data: {
      userId,
      courseId,
      lessonId: lessonId || null,
      promptKey,
      title,
      prompt,
      body,
      maxScore: maxScore ?? 10,
      status: "SUBMITTED",
    },
  });

  return NextResponse.json({ ok: true, submission: created, updated: false });
}

export async function GET(req: Request) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }

  const url = new URL(req.url);
  const courseId = url.searchParams.get("courseId") || undefined;
  const status = url.searchParams.get("status") || undefined;
  const role = session.user.role;

  if (role === "STUDENT") {
    const rows = await prisma.writtenSubmission.findMany({
      where: {
        userId: session.user.id,
        ...(courseId ? { courseId } : {}),
        ...(status ? { status } : {}),
      },
      orderBy: { submittedAt: "desc" },
      include: {
        course: { select: { id: true, title: true, grade: true } },
        lesson: { select: { id: true, title: true } },
      },
    });
    return NextResponse.json({ submissions: rows });
  }

  if (role === "TEACHER" || role === "ADMIN") {
    const assigned = await getAssignedTeacherGrades(session.user.id, role);
    if (assigned.length === 0) {
      return NextResponse.json({ submissions: [] });
    }
    const rows = await prisma.writtenSubmission.findMany({
      where: {
        ...(courseId ? { courseId } : {}),
        ...(status ? { status } : {}),
        course: { grade: { in: assigned } },
      },
      orderBy: { submittedAt: "desc" },
      include: {
        user: { select: { id: true, name: true, email: true, grade: true } },
        course: { select: { id: true, title: true, grade: true } },
        lesson: { select: { id: true, title: true } },
      },
      take: 200,
    });
    return NextResponse.json({ submissions: rows });
  }

  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}
