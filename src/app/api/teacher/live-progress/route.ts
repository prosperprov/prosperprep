import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getAssignedTeacherGrades } from "@/lib/teacherGrades";
import { MAX_QUIZ_ATTEMPTS } from "@/lib/quizAttempts";
import { isRetiredSection } from "@/lib/grade6Classroom";

export const dynamic = "force-dynamic";

/**
 * Near-live teacher progression snapshot for assigned grades.
 * Polled by the Teacher Dashboard (~20s).
 */
export async function GET() {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  if (session.user.role !== "TEACHER" && session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Teachers only" }, { status: 403 });
  }

  const assignedGrades = await getAssignedTeacherGrades(
    session.user.id,
    session.user.role
  );
  if (assignedGrades.length === 0) {
    return NextResponse.json({
      generatedAt: new Date().toISOString(),
      maxAttempts: MAX_QUIZ_ATTEMPTS,
      students: [],
    });
  }

  const enrollments = await prisma.enrollment.findMany({
    where: { status: "ACTIVE", grade: { in: assignedGrades } },
    include: {
      user: { select: { id: true, name: true, email: true, grade: true } },
    },
    orderBy: [{ grade: "asc" }, { createdAt: "asc" }],
  });

  const courses = await prisma.course.findMany({
    where: { grade: { in: assignedGrades } },
    orderBy: [{ grade: "asc" }, { order: "asc" }],
    select: {
      id: true,
      title: true,
      subject: true,
      grade: true,
      lessons: {
        orderBy: { order: "asc" },
        select: { id: true, title: true, order: true, sectionKey: true },
      },
    },
  });

  const studentIds = enrollments.map((e) => e.user.id);
  if (studentIds.length === 0) {
    return NextResponse.json({
      generatedAt: new Date().toISOString(),
      maxAttempts: MAX_QUIZ_ATTEMPTS,
      students: [],
    });
  }

  // Relation filters avoid D1's 100 bound-param ceiling on large `in:` lists.
  const [allProgress, attemptRows, lessonAttemptGroups, quizAttemptGroups] =
    await Promise.all([
      prisma.progress.findMany({
        where: {
          userId: { in: studentIds },
          completed: true,
          lesson: { course: { grade: { in: assignedGrades } } },
        },
        select: { userId: true, lessonId: true },
      }),
      prisma.attempt.findMany({
        where: {
          userId: { in: studentIds },
          OR: [
            { lesson: { course: { grade: { in: assignedGrades } } } },
            { quiz: { course: { grade: { in: assignedGrades } } } },
          ],
        },
        orderBy: { submittedAt: "desc" },
        take: 500,
        select: {
          id: true,
          userId: true,
          lessonId: true,
          quizId: true,
          percent: true,
          score: true,
          maxScore: true,
          submittedAt: true,
          lesson: { select: { id: true, title: true, order: true, courseId: true } },
          quiz: { select: { id: true, title: true, courseId: true } },
        },
      }),
      prisma.attempt.groupBy({
        by: ["userId", "lessonId"],
        where: {
          userId: { in: studentIds },
          lessonId: { not: null },
          lesson: { course: { grade: { in: assignedGrades } } },
        },
        _count: { _all: true },
      }),
      prisma.attempt.groupBy({
        by: ["userId", "quizId"],
        where: {
          userId: { in: studentIds },
          quizId: { not: null },
          quiz: { course: { grade: { in: assignedGrades } } },
        },
        _count: { _all: true },
      }),
    ]);

  const progressByUser = new Map<string, Set<string>>();
  for (const row of allProgress) {
    if (!progressByUser.has(row.userId)) progressByUser.set(row.userId, new Set());
    progressByUser.get(row.userId)!.add(row.lessonId);
  }

  const attemptsByUser = new Map<string, typeof attemptRows>();
  for (const a of attemptRows) {
    if (!attemptsByUser.has(a.userId)) attemptsByUser.set(a.userId, []);
    attemptsByUser.get(a.userId)!.push(a);
  }

  const attemptCounts = new Map<string, number>();
  for (const g of lessonAttemptGroups) {
    if (!g.lessonId) continue;
    attemptCounts.set(`${g.userId}:L:${g.lessonId}`, g._count._all);
  }
  for (const g of quizAttemptGroups) {
    if (!g.quizId) continue;
    attemptCounts.set(`${g.userId}:Q:${g.quizId}`, g._count._all);
  }

  const students = enrollments.map((e) => {
    const gradeCourses = courses.filter((c) => c.grade === e.grade);
    const activeLessons = gradeCourses.flatMap((c) =>
      c.lessons
        .filter((l) => !isRetiredSection(l.sectionKey))
        .map((l) => ({ ...l, courseId: c.id }))
    );
    const doneSet = progressByUser.get(e.user.id) ?? new Set();
    const done = activeLessons.filter((l) => doneSet.has(l.id)).length;
    const total = activeLessons.length;
    const nextLesson = activeLessons.find((l) => !doneSet.has(l.id)) ?? null;

    const recent = (attemptsByUser.get(e.user.id) ?? []).slice(0, 5).map((a) => {
      const countKey = a.lessonId
        ? `${a.userId}:L:${a.lessonId}`
        : `${a.userId}:Q:${a.quizId}`;
      const count = attemptCounts.get(countKey) ?? 1;
      return {
        id: a.id,
        percent: a.percent,
        score: a.score,
        maxScore: a.maxScore,
        submittedAt: a.submittedAt.toISOString(),
        attemptsUsed: count,
        maxAttempts: MAX_QUIZ_ATTEMPTS,
        locked: count >= MAX_QUIZ_ATTEMPTS,
        kind: a.lessonId ? ("lesson" as const) : ("quiz" as const),
        title: a.lesson?.title ?? a.quiz?.title ?? "Check",
        href: a.lesson
          ? `/courses/${a.lesson.courseId}/lessons/${a.lesson.id}`
          : a.quiz
            ? `/courses/${a.quiz.courseId}/quizzes/${a.quiz.id}`
            : null,
      };
    });

    return {
      id: e.user.id,
      name: e.user.name,
      email: e.user.email,
      grade: e.grade,
      done,
      total,
      percent: total > 0 ? Math.round((done / total) * 100) : 0,
      nextLesson: nextLesson
        ? {
            id: nextLesson.id,
            title: nextLesson.title,
            order: nextLesson.order,
            href: `/courses/${nextLesson.courseId}/lessons/${nextLesson.id}`,
          }
        : null,
      courses: gradeCourses.map((c) => {
        const lessons = c.lessons.filter((l) => !isRetiredSection(l.sectionKey));
        const cDone = lessons.filter((l) => doneSet.has(l.id)).length;
        return {
          id: c.id,
          title: c.title,
          subject: c.subject,
          done: cDone,
          total: lessons.length,
          href: `/courses/${c.id}`,
        };
      }),
      recentAttempts: recent,
      messageHref: `/dashboard/teacher/messages?compose=1&to=${encodeURIComponent(e.user.id)}`,
    };
  });

  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    maxAttempts: MAX_QUIZ_ATTEMPTS,
    students,
  });
}
