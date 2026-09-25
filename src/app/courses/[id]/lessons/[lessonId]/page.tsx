import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { gradeLabel } from "@/lib/grades";
import { Markdown } from "@/components/Markdown";
import { MarkCompleteButton } from "@/components/MarkCompleteButton";
import { LessonQuiz } from "@/components/LessonQuiz";
import { LessonVideo } from "@/components/LessonVideo";
import { WrittenResponseForm } from "@/components/WrittenResponseForm";
import { parseWrittenPrompts } from "@/lib/writtenPrompts";
import { LESSON_WEIGHT, SECTION_WEIGHT } from "@/lib/grading";
import { brandAssets } from "@/config/brand";
import { canAccessCourseContent } from "@/lib/curriculumAccess";
import { GuidedPractice } from "@/components/GuidedPractice";
import { guidedPracticeForLesson } from "@/lib/guidedPractice";

export const dynamic = "force-dynamic";

/** Branded posters — never fall back to Khan/YouTube thumbs when we have one. */
function lessonPosterUrl(title: string, grade: number): string | null {
  if (grade === 7 && title === "Analyzing Theme in Short Fiction") {
    return brandAssets.lessonPosters.g7AnalyzingTheme;
  }
  if (grade === 7 && title === "Proportional Relationships") {
    return brandAssets.lessonPosters.g7ProportionalRelationships;
  }
  return null;
}


export default async function LessonPage({
  params,
}: {
  params: { id: string; lessonId: string };
}) {
  const course = await prisma.course.findUnique({
    where: { id: params.id },
    include: {
      lessons: { orderBy: { order: "asc" } },
      quizzes: { orderBy: { order: "asc" } },
    },
  });
  if (!course) notFound();

  const lesson = await prisma.lesson.findUnique({
    where: { id: params.lessonId },
    include: { questions: { orderBy: { order: "asc" } } },
  });
  if (!lesson || lesson.courseId !== course.id) notFound();

  const session = await getSession();
  if (session?.user?.id && (session.user.role === "STUDENT" || session.user.role === "TEACHER")) {
    const access = await canAccessCourseContent({
      userId: session.user.id,
      role: session.user.role,
      courseGrade: course.grade,
    });
    if (!access.ok) notFound();
  }

  const idx = course.lessons.findIndex((l) => l.id === lesson.id);
  const prev = idx > 0 ? course.lessons[idx - 1] : null;
  const next = idx < course.lessons.length - 1 ? course.lessons[idx + 1] : null;

  const canGrade =
    session?.user &&
    (session.user.role === "STUDENT" || session.user.role === "ADMIN");

  let completed = false;
  let priorPercent: number | null = null;
  if (canGrade && session?.user?.id) {
    const progress = await prisma.progress.findUnique({
      where: {
        userId_lessonId: { userId: session.user.id, lessonId: lesson.id },
      },
    });
    completed = Boolean(progress?.completed);
    const last = await prisma.attempt.findFirst({
      where: { userId: session.user.id, lessonId: lesson.id },
      orderBy: { submittedAt: "desc" },
    });
    priorPercent = last?.percent ?? null;
  }

  const { displayContent, prompts: writtenPrompts } = parseWrittenPrompts(lesson.content || "");

  const writtenPriors: Record<
    string,
    {
      body: string;
      status: string;
      score: number | null;
      percent: number | null;
      teacherFeedback: string | null;
    } | null
  > = {};
  if (canGrade && session?.user?.id && writtenPrompts.length > 0) {
    const subs = await prisma.writtenSubmission.findMany({
      where: {
        userId: session.user.id,
        courseId: course.id,
        lessonId: lesson.id,
        promptKey: { in: writtenPrompts.map((w) => w.promptKey) },
      },
      orderBy: { submittedAt: "desc" },
    });
    for (const wp of writtenPrompts) {
      const hit = subs.find((s) => s.promptKey === wp.promptKey);
      writtenPriors[wp.promptKey] = hit
        ? {
            body: hit.body,
            status: hit.status,
            score: hit.score,
            percent: hit.percent,
            teacherFeedback: hit.teacherFeedback,
          }
        : null;
    }
  }

  const sectionQuiz = course.quizzes.find((q) => q.sectionKey === lesson.sectionKey);
  const sectionLessons = course.lessons.filter((l) => l.sectionKey === lesson.sectionKey);

  const questions = lesson.questions.map((q) => ({
    id: q.id,
    prompt: q.prompt,
    choices: JSON.parse(q.choices) as string[],
    order: q.order,
    points: q.points,
  }));

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
        <Link href="/courses" className="text-emerald-800 hover:underline">
          Catalog
        </Link>
        <span>/</span>
        <Link href={`/courses/${course.id}`} className="text-emerald-800 hover:underline">
          {course.title}
        </Link>
        <span>/</span>
        <span className="text-slate-500">Lesson {lesson.order}</span>
      </div>

      <p className="mt-4 text-sm font-medium text-emerald-800">
        {course.subject} · {gradeLabel(course.grade)} · {lesson.durationMin} min ·{" "}
        {lesson.sectionKey}
      </p>
      <h1 className="mt-1 text-3xl font-bold text-slate-900">{lesson.title}</h1>
      <p className="mt-2 text-slate-600">{lesson.description}</p>

      <p className="mt-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
        Course grade weights: lesson checks {Math.round(LESSON_WEIGHT * 100)}% · section quizzes{" "}
        {Math.round(SECTION_WEIGHT * 100)}%. Latest attempt counts.
      </p>

      {lesson.objectives && (
        <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-900">
            Objectives
          </h2>
          <pre className="mt-2 whitespace-pre-wrap font-sans text-sm text-slate-800">
            {lesson.objectives}
          </pre>
        </div>
      )}

      <article className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <Markdown content={displayContent || "_Lesson content coming soon._"} />
      </article>

      {lesson.videoUrl ? (
        <LessonVideo
          videoUrl={lesson.videoUrl}
          title={lesson.title}
          posterUrl={lessonPosterUrl(lesson.title, course.grade)}
        />
      ) : null}

      <GuidedPractice items={guidedPracticeForLesson(lesson.title, course.grade)} />

      {canGrade &&
        writtenPrompts.map((wp) => (
          <WrittenResponseForm
            key={wp.promptKey}
            courseId={course.id}
            lessonId={lesson.id}
            promptKey={wp.promptKey}
            title={wp.title}
            prompt={wp.prompt}
            maxScore={wp.maxScore}
            prior={writtenPriors[wp.promptKey]}
          />
        ))}

      <div className="mt-8">
        {canGrade ? (
          questions.length > 0 ? (
            <LessonQuiz
              lessonId={lesson.id}
              questions={questions}
              priorPercent={priorPercent}
            />
          ) : (
            <MarkCompleteButton lessonId={lesson.id} initiallyCompleted={completed} />
          )
        ) : (
          <p className="text-sm text-slate-500">
            <Link href="/login" className="font-medium text-emerald-800 underline">
              Sign in as a student
            </Link>{" "}
            to complete the graded check and track progress.
          </p>
        )}
      </div>

      {completed && sectionQuiz && (
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
          Lesson complete. This lesson is part of{" "}
          <strong>{sectionQuiz.title}</strong> ({sectionLessons.length} lessons in section).{" "}
          <Link
            href={`/courses/${course.id}/quizzes/${sectionQuiz.id}`}
            className="font-semibold underline"
          >
            Open section quiz
          </Link>{" "}
          after all section lessons are done.
        </div>
      )}

      <nav className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {prev ? (
          <Link
            href={`/courses/${course.id}/lessons/${prev.id}`}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:border-emerald-300"
          >
            ← Prev: {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/courses/${course.id}/lessons/${next.id}`}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:border-emerald-300 sm:text-right"
          >
            Next: {next.title} →
          </Link>
        ) : (
          <Link
            href={`/courses/${course.id}`}
            className="rounded-lg bg-emerald-800 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-900 sm:text-right"
          >
            Back to course
          </Link>
        )}
      </nav>
    </div>
  );
}
