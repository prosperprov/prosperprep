import { NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { canAccessCourseContent } from "@/lib/curriculumAccess";
import { MAX_QUIZ_ATTEMPTS, isAttemptLocked } from "@/lib/quizAttempts";


/** Collapse rapid duplicate POSTs (double-click / edge retry) into one attempt. */
async function findRecentDuplicate(args: {
  userId: string;
  lessonId?: string;
  quizId?: string;
  answersJson: string;
}) {
  const since = new Date(Date.now() - 15_000);
  const recent = await prisma.attempt.findFirst({
    where: {
      userId: args.userId,
      lessonId: args.lessonId ?? null,
      quizId: args.quizId ?? null,
      submittedAt: { gte: since },
    },
    orderBy: { submittedAt: "desc" },
  });
  if (recent && recent.answers === args.answersJson) return recent;
  return null;
}

const bodySchema = z.object({
  lessonId: z.string().optional(),
  quizId: z.string().optional(),
  answers: z.record(z.string(), z.number().int().min(0).max(3)),
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

  const { lessonId, quizId, answers } = parsed.data;
  if (!lessonId && !quizId) {
    return NextResponse.json({ error: "lessonId or quizId required" }, { status: 400 });
  }
  if (lessonId && quizId) {
    return NextResponse.json({ error: "Provide only one of lessonId or quizId" }, { status: 400 });
  }

  const userId = session.user.id;

  if (lessonId) {
    const lesson = await prisma.lesson.findUnique({
      where: { id: lessonId },
      include: { questions: { orderBy: { order: "asc" } }, course: true },
    });
    if (!lesson) return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
    {
      const access = await canAccessCourseContent({
        userId,
        role: session.user.role,
        courseGrade: lesson.course.grade,
        courseSubject: lesson.course.subject,
        coursePublished: lesson.course.published,
      });
      if (!access.ok) {
        return NextResponse.json({ error: access.reason }, { status: 403 });
      }
    }
    if (lesson.questions.length === 0) {
      return NextResponse.json({ error: "No questions on this lesson" }, { status: 400 });
    }

    const priorLessonAttempts = await prisma.attempt.count({
      where: { userId, lessonId },
    });
    if (isAttemptLocked(priorLessonAttempts)) {
      return NextResponse.json(
        {
          error: `Attempt limit reached (${MAX_QUIZ_ATTEMPTS}). Further tries are locked.`,
          attemptsUsed: priorLessonAttempts,
          maxAttempts: MAX_QUIZ_ATTEMPTS,
        },
        { status: 403 }
      );
    }

    const answersJsonLesson = JSON.stringify(answers);
    const dupLesson = await findRecentDuplicate({
      userId,
      lessonId,
      answersJson: answersJsonLesson,
    });
    if (dupLesson) {
      const results: Record<
        string,
        { selected: number; correct: number; isCorrect: boolean; explanation: string; points: number }
      > = {};
      for (const q of lesson.questions) {
        const selected = answers[q.id];
        const isCorrect = selected === q.correctIndex;
        results[q.id] = {
          selected: selected ?? -1,
          correct: q.correctIndex,
          isCorrect,
          explanation: q.explanation,
          points: q.points,
        };
      }
      return NextResponse.json({
        ok: true,
        attemptId: dupLesson.id,
        score: dupLesson.score,
        maxScore: dupLesson.maxScore,
        percent: dupLesson.percent,
        results,
        policy: "latest",
        attemptsUsed: priorLessonAttempts,
        maxAttempts: MAX_QUIZ_ATTEMPTS,
        deduped: true,
      });
    }

    let score = 0;
    let maxScore = 0;
    const results: Record<
      string,
      { selected: number; correct: number; isCorrect: boolean; explanation: string; points: number }
    > = {};

    for (const q of lesson.questions) {
      maxScore += q.points;
      const selected = answers[q.id];
      const isCorrect = selected === q.correctIndex;
      if (isCorrect) score += q.points;
      results[q.id] = {
        selected: selected ?? -1,
        correct: q.correctIndex,
        isCorrect,
        explanation: q.explanation,
        points: q.points,
      };
    }

    const percent = maxScore > 0 ? Math.round((score / maxScore) * 1000) / 10 : 0;

    const attempt = await prisma.attempt.create({
      data: {
        userId,
        lessonId,
        score,
        maxScore,
        percent,
        answers: answersJsonLesson,
      },
    });

    await prisma.gradeEntry.upsert({
      where: {
        userId_courseId_source_refId: {
          userId,
          courseId: lesson.courseId,
          source: "LESSON_QUIZ",
          refId: lessonId,
        },
      },
      create: {
        userId,
        courseId: lesson.courseId,
        source: "LESSON_QUIZ",
        refId: lessonId,
        score,
        maxScore,
        percent,
        weight: 1,
      },
      update: {
        score,
        maxScore,
        percent,
        gradedAt: new Date(),
      },
    });

    // Auto-complete lesson on submit (latest attempt policy)
    await prisma.progress.upsert({
      where: { userId_lessonId: { userId, lessonId } },
      create: {
        userId,
        lessonId,
        completed: true,
        completedAt: new Date(),
      },
      update: {
        completed: true,
        completedAt: new Date(),
      },
    });

    return NextResponse.json({
      ok: true,
      attemptId: attempt.id,
      score,
      maxScore,
      percent,
      results,
      policy: "latest",
      attemptsUsed: priorLessonAttempts + 1,
      maxAttempts: MAX_QUIZ_ATTEMPTS,
    });
  }

  // Section quiz
  const quiz = await prisma.quiz.findUnique({
    where: { id: quizId! },
    include: {
      questions: { orderBy: { order: "asc" } },
      course: { include: { lessons: { select: { id: true, sectionKey: true } } } },
    },
  });
  if (!quiz) return NextResponse.json({ error: "Quiz not found" }, { status: 404 });
  {
    const access = await canAccessCourseContent({
      userId,
      role: session.user.role,
      courseGrade: quiz.course.grade,
      courseSubject: quiz.course.subject,
      coursePublished: quiz.course.published,
    });
    if (!access.ok) {
      return NextResponse.json({ error: access.reason }, { status: 403 });
    }
  }

  const priorQuizAttempts = await prisma.attempt.count({
    where: { userId, quizId: quiz.id },
  });
  if (isAttemptLocked(priorQuizAttempts)) {
    return NextResponse.json(
      {
        error: `Attempt limit reached (${MAX_QUIZ_ATTEMPTS}). Further tries are locked.`,
        attemptsUsed: priorQuizAttempts,
        maxAttempts: MAX_QUIZ_ATTEMPTS,
      },
      { status: 403 }
    );
  }

  const answersJsonQuiz = JSON.stringify(answers);
  const dupQuiz = await findRecentDuplicate({
    userId,
    quizId: quiz.id,
    answersJson: answersJsonQuiz,
  });
  if (dupQuiz) {
    const results: Record<
      string,
      { selected: number; correct: number; isCorrect: boolean; explanation: string; points: number }
    > = {};
    for (const q of quiz.questions) {
      const selected = answers[q.id];
      const isCorrect = selected === q.correctIndex;
      results[q.id] = {
        selected: selected ?? -1,
        correct: q.correctIndex,
        isCorrect,
        explanation: q.explanation,
        points: q.points,
      };
    }
    return NextResponse.json({
      ok: true,
      attemptId: dupQuiz.id,
      score: dupQuiz.score,
      maxScore: dupQuiz.maxScore,
      percent: dupQuiz.percent,
      results,
      policy: "latest",
      attemptsUsed: priorQuizAttempts,
      maxAttempts: MAX_QUIZ_ATTEMPTS,
      deduped: true,
    });
  }

  if (quiz.sectionKey) {
    const sectionLessonIds = quiz.course.lessons
      .filter((l) => l.sectionKey === quiz.sectionKey)
      .map((l) => l.id);
    // Diagnostic/practice quizzes with no lessons for their sectionKey stay open
    if (sectionLessonIds.length > 0) {
      // Relation filter — D1 caps bound params at 100 (large units can exceed `in:`).
      const done = await prisma.progress.findMany({
        where: {
          userId,
          completed: true,
          lesson: { courseId: quiz.courseId, sectionKey: quiz.sectionKey },
        },
        select: { lessonId: true },
      });
      const doneSet = new Set(done.map((d) => d.lessonId));
      if (!sectionLessonIds.every((id) => doneSet.has(id))) {
        return NextResponse.json(
          { error: "Complete all lessons in this section before taking the section quiz." },
          { status: 403 }
        );
      }
    }
  }

  let score = 0;
  let maxScore = 0;
  const results: Record<
    string,
    { selected: number; correct: number; isCorrect: boolean; explanation: string; points: number }
  > = {};

  for (const q of quiz.questions) {
    maxScore += q.points;
    const selected = answers[q.id];
    const isCorrect = selected === q.correctIndex;
    if (isCorrect) score += q.points;
    results[q.id] = {
      selected: selected ?? -1,
      correct: q.correctIndex,
      isCorrect,
      explanation: q.explanation,
      points: q.points,
    };
  }

  const percent = maxScore > 0 ? Math.round((score / maxScore) * 1000) / 10 : 0;

  const attempt = await prisma.attempt.create({
    data: {
      userId,
      quizId: quiz.id,
      score,
      maxScore,
      percent,
      answers: answersJsonQuiz,
    },
  });

  await prisma.gradeEntry.upsert({
    where: {
      userId_courseId_source_refId: {
        userId,
        courseId: quiz.courseId,
        source: "SECTION_QUIZ",
        refId: quiz.id,
      },
    },
    create: {
      userId,
      courseId: quiz.courseId,
      source: "SECTION_QUIZ",
      refId: quiz.id,
      score,
      maxScore,
      percent,
      weight: 1.5,
    },
    update: {
      score,
      maxScore,
      percent,
      gradedAt: new Date(),
    },
  });

  return NextResponse.json({
    ok: true,
    attemptId: attempt.id,
    score,
    maxScore,
    percent,
    results,
    policy: "latest",
    attemptsUsed: priorQuizAttempts + 1,
    maxAttempts: MAX_QUIZ_ATTEMPTS,
  });
}
