import { NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { canAccessCourseContent } from "@/lib/curriculumAccess";

const bodySchema = z.object({
  lessonId: z.string().min(1),
  completed: z.boolean(),
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

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const { lessonId, completed } = parsed.data;
  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: { _count: { select: { questions: true } }, course: { select: { grade: true } } },
  });
  if (!lesson) {
    return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
  }

  {
    const access = await canAccessCourseContent({
      userId: session.user.id,
      role: session.user.role,
      courseGrade: lesson.course.grade,
    });
    if (!access.ok) {
      return NextResponse.json({ error: access.reason }, { status: 403 });
    }
  }

  if (completed && lesson._count.questions > 0) {
    const attempt = await prisma.attempt.findFirst({
      where: { userId: session.user.id, lessonId },
    });
    if (!attempt) {
      return NextResponse.json(
        { error: "Submit the lesson check before marking complete." },
        { status: 400 }
      );
    }
  }

  const progress = await prisma.progress.upsert({
    where: { userId_lessonId: { userId: session.user.id, lessonId } },
    create: {
      userId: session.user.id,
      lessonId,
      completed,
      completedAt: completed ? new Date() : null,
    },
    update: {
      completed,
      completedAt: completed ? new Date() : null,
    },
  });

  return NextResponse.json({ ok: true, progress });
}
