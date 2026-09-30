import Link from "next/link";
import { notFound, redirect } from "next/navigation";
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
import { isGrade6Classroom } from "@/lib/grade6Classroom";
import { Grade6LessonChrome } from "@/components/grade6/Grade6LessonChrome";
import { AskYourTeacher } from "@/components/AskYourTeacher";
import { resolveLessonTeacher } from "@/lib/resolveLessonTeacher";
import { grade6UnitLabel, isRetiredSection } from "@/lib/grade6Classroom";
import { unitLockMessage } from "@/lib/unitUnlock";
import { resolveMaxUnlockedUnit, isUnitUnlocked } from "@/lib/resolveUnitUnlock";

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
  const session = await getSession();
  if (!session?.user?.id) {
    redirect(`/login?callbackUrl=/courses/${params.id}/lessons/${params.lessonId}`);
  }
  const course = await prisma.course.findUnique({
    where: { id: params.id },
    include: {
      lessons: {
        orderBy: { order: "asc" },
        select: {
          id: true,
          title: true,
          order: true,
          sectionKey: true,
        },
      },
      quizzes: {
        orderBy: { order: "asc" },
        select: {
          id: true,
          title: true,
          order: true,
          sectionKey: true,
        },
      },
    },
  });
  if (!course) notFound();
  const access = await canAccessCourseContent({
    userId: session.user.id,
    role: session.user.role,
    courseGrade: course.grade,
  });
  if (!access.ok) notFound();

  const lesson = await prisma.lesson.findUnique({
    where: { id: params.lessonId },
    include: { questions: { orderBy: { order: "asc" } } },
  });
  if (!lesson || lesson.courseId !== course.id) notFound();

  const teacherResolution =
    session.user.role === "STUDENT"
      ? await resolveLessonTeacher({
          studentId: session.user.id,
          courseId: course.id,
          courseGrade: course.grade,
        })
      : null;
  const askTeacher = teacherResolution ? (
    <AskYourTeacher
      resolution={teacherResolution}
      courseId={course.id}
      courseTitle={course.title}
      lessonId={lesson.id}
      lessonOrder={lesson.order}
      lessonTitle={lesson.title}
    />
  ) : null;

  const pathLessons = course.lessons.filter((l) => !isRetiredSection(l.sectionKey));
  const idx = pathLessons.findIndex((l) => l.id === lesson.id);
  const prev = idx > 0 ? pathLessons[idx - 1] : null;
  const next = idx >= 0 && idx < pathLessons.length - 1 ? pathLessons[idx + 1] : null;

  const g6Early = isGrade6Classroom(course.grade);
  let unitLocked = false;
  let lockMsg = "";
  if (g6Early && session.user.role === "STUDENT") {
    const progressRows = await prisma.progress.findMany({
      where: { userId: session.user.id, completed: true, lesson: { courseId: course.id } },
      select: { lessonId: true },
    });
    const completedLessonIds = new Set(progressRows.map((r) => r.lessonId));
    const maxUnlocked = await resolveMaxUnlockedUnit({
      userId: session.user.id,
      role: session.user.role,
      courseId: course.id,
      courseGrade: course.grade,
      lessons: pathLessons,
      quizzes: course.quizzes,
      completedLessonIds,
    });
    unitLocked = !isUnitUnlocked(lesson.sectionKey, maxUnlocked);
    if (unitLocked) lockMsg = unitLockMessage(lesson.sectionKey);
  }

  const canGrade =
    session?.user &&
    (session.user.role === "STUDENT" || session.user.role === "ADMIN");

  let completed = false;
  let priorPercent: number | null = null;
  let attemptsUsed = 0;
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
    attemptsUsed = await prisma.attempt.count({
      where: { userId: session.user.id, lessonId: lesson.id },
    });
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

  let sectionQuizUnlocked = false;
  if (sectionQuiz && canGrade && session?.user?.id) {
    const sectionProgress = await prisma.progress.findMany({
      where: {
        userId: session.user.id,
        completed: true,
        lesson: {
          courseId: course.id,
          sectionKey: lesson.sectionKey,
        },
      },
      select: { lessonId: true },
    });
    const doneSection = new Set(sectionProgress.map((p) => p.lessonId));
    sectionQuizUnlocked =
      sectionLessons.length > 0 &&
      sectionLessons.every((l) => doneSection.has(l.id));
  }

  const questions = lesson.questions.map((q) => ({
    id: q.id,
    prompt: q.prompt,
    choices: JSON.parse(q.choices) as string[],
    order: q.order,
    points: q.points,
  }));

  const g6 = isGrade6Classroom(course.grade);
  const g6UnitKeys = Array.from(
    new Set(
      course.lessons
        .map((l) => l.sectionKey)
        .filter((k) => k && !isRetiredSection(k) && /^unit-\d+$/.test(k))
    )
  );
  const g6UnitTotal = g6UnitKeys.length || 11;


  if (unitLocked) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <Link href={`/courses/${course.id}`} className="text-sm text-emerald-800 hover:underline">
          ← Back to year path
        </Link>
        <div className="mt-6 rounded-3xl border-2 border-slate-300 bg-slate-100 p-8 text-center">
          <p className="text-4xl" aria-hidden>
            🔒
          </p>
          <h1 className="mt-3 text-2xl font-bold text-slate-800">{lesson.title}</h1>
          <p className="mt-2 text-lg font-semibold text-slate-700">{lockMsg}</p>
          <p className="mt-3 text-slate-600">
            Units unlock in order. Finish the previous unit&apos;s lessons (or pass its Unit Check) to
            open this one. Your teacher or an admin can unlock ahead if needed.
          </p>
          <Link
            href={`/courses/${course.id}`}
            className="mt-6 inline-flex min-h-[48px] items-center rounded-2xl bg-emerald-700 px-5 text-sm font-bold text-white hover:bg-emerald-800"
          >
            View year map
          </Link>
          {askTeacher ? <div className="mt-4 flex justify-center">{askTeacher}</div> : null}
        </div>
      </div>
    );
  }


  return (
    <div className={`mx-auto px-4 py-10 ${g6 ? "max-w-4xl" : "max-w-3xl"}`}>
      {g6 ? (
        <Grade6LessonChrome
          courseId={course.id}
          courseTitle={course.title}
          subject={course.subject}
          lessonTitle={lesson.title}
          lessonOrder={lesson.order}
          lessonIndex={idx}
          lessonCount={pathLessons.length}
          completed={completed}
          hasVideo={Boolean(lesson.videoUrl)}
          hasQuizQuestions={questions.length > 0}
          nextHref={
            next
              ? `/courses/${course.id}/lessons/${next.id}`
              : sectionQuiz && sectionQuizUnlocked
                ? `/courses/${course.id}/quizzes/${sectionQuiz.id}`
                : null
          }
          nextLabel={
            next
              ? next.title
              : sectionQuiz && sectionQuizUnlocked
                ? sectionQuiz.title
                : null
          }
          sectionQuizHref={
            sectionQuiz ? `/courses/${course.id}/quizzes/${sectionQuiz.id}` : null
          }
          sectionQuizUnlocked={sectionQuizUnlocked}
          unitLabel={grade6UnitLabel(lesson.sectionKey, g6UnitTotal, course.subject)}
          askTeacher={askTeacher}
        />
      ) : (
        <>
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
            {grade6UnitLabel(lesson.sectionKey, g6UnitTotal, course.subject)}
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900">{lesson.title}</h1>
          <p className="mt-2 text-slate-600">{lesson.description}</p>
          <nav className="mt-4 flex flex-wrap gap-2" aria-label="Lesson actions">
            {lesson.videoUrl ? (
              <a
                href="#lesson-video"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border-2 border-sky-400 bg-sky-600 px-4 py-2 text-base font-bold text-white shadow-sm hover:bg-sky-700"
              >
                ▶ Watch video
              </a>
            ) : null}
            <a
              href="#lesson-check"
              className="inline-flex min-h-[48px] items-center rounded-2xl border-2 border-amber-300 bg-amber-50 px-4 py-2 text-base font-bold text-amber-950 hover:bg-amber-100"
            >
              {questions.length > 0 ? "Take quiz" : "Mark complete"}
            </a>
            {askTeacher}
            {next ? (
              <Link
                href={`/courses/${course.id}/lessons/${next.id}`}
                className="inline-flex min-h-[48px] items-center rounded-2xl bg-emerald-700 px-4 py-2 text-base font-bold text-white hover:bg-emerald-800"
              >
                Next: {next.title.length > 28 ? `${next.title.slice(0, 28)}…` : next.title} →
              </Link>
            ) : null}
          </nav>
        </>
      )}

      {!g6 && (
        <p className="mt-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
          Course grade weights: lesson checks {Math.round(LESSON_WEIGHT * 100)}% · section quizzes{" "}
          {Math.round(SECTION_WEIGHT * 100)}%. Latest attempt counts.
        </p>
      )}

      {g6 && (
        <>
          <p className="text-base text-slate-700">{lesson.description}</p>
          <p className="mt-2 text-sm font-medium text-slate-500">
            {lesson.durationMin} min · {grade6UnitLabel(lesson.sectionKey, g6UnitTotal, course.subject)}
          </p>
        </>
      )}

      {/* Grade 6: video right after chrome/description so phones see play without scrolling the article */}
      {g6 && lesson.videoUrl ? (
        <div
          id="lesson-video"
          className="scroll-mt-[calc(7.5rem+env(safe-area-inset-top,0px))]"
        >
          <LessonVideo
            videoUrl={lesson.videoUrl}
            title={lesson.title}
            posterUrl={lessonPosterUrl(lesson.title, course.grade)}
            durationMin={lesson.durationMin}
          />
        </div>
      ) : null}

      {lesson.objectives && (
        <div
          className={`mt-6 rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 ${
            g6 ? "rounded-2xl p-5" : ""
          }`}
        >
          <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-900">
            Objectives
          </h2>
          <pre
            className={`mt-2 whitespace-pre-wrap font-sans text-slate-800 ${
              g6 ? "text-base" : "text-sm"
            }`}
          >
            {lesson.objectives}
          </pre>
        </div>
      )}

      <article
        className={`mt-8 rounded-2xl border border-slate-200 bg-white shadow-sm ${
          g6 ? "border-2 p-6 text-base sm:p-8" : "p-6 sm:p-8"
        }`}
      >
        <Markdown content={displayContent || "_Lesson content coming soon._"} />
      </article>

      {/* Non–Grade 6: keep video after the article */}
      {!g6 && lesson.videoUrl ? (
        <div
          id="lesson-video"
          className="scroll-mt-[calc(6rem+env(safe-area-inset-top,0px))]"
        >
          <LessonVideo
            videoUrl={lesson.videoUrl}
            title={lesson.title}
            posterUrl={lessonPosterUrl(lesson.title, course.grade)}
            durationMin={lesson.durationMin}
          />
        </div>
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

      <div id="lesson-check" className="mt-8 scroll-mt-24">
        {canGrade ? (
          questions.length > 0 ? (
            <LessonQuiz
              lessonId={lesson.id}
              questions={questions}
              priorPercent={priorPercent}
              attemptsUsed={attemptsUsed}
            />
          ) : (
            <MarkCompleteButton
              lessonId={lesson.id}
              initiallyCompleted={completed}
              size={g6 ? "large" : "default"}
            />
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
        <div
          className={`mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-950 ${
            g6 ? "rounded-2xl border-2 p-5 text-base" : "text-sm"
          }`}
        >
          Lesson complete. This lesson is part of{" "}
          <strong>{sectionQuiz.title}</strong> ({sectionLessons.length} lessons in section).{" "}
          {sectionQuizUnlocked ? (
            <Link
              href={`/courses/${course.id}/quizzes/${sectionQuiz.id}`}
              className="font-semibold underline"
            >
              Take section quiz →
            </Link>
          ) : (
            <>
              <Link
                href={`/courses/${course.id}/quizzes/${sectionQuiz.id}`}
                className="font-semibold underline"
              >
                Open section quiz
              </Link>{" "}
              after all section lessons are done.
            </>
          )}
        </div>
      )}

      <nav
        className={`mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ${
          g6 ? "gap-4" : ""
        }`}
      >
        {prev ? (
          <Link
            href={`/courses/${course.id}/lessons/${prev.id}`}
            className={
              g6
                ? "inline-flex min-h-[48px] items-center rounded-2xl border-2 border-slate-200 bg-white px-5 py-3 text-base font-bold text-slate-800 hover:border-emerald-300"
                : "rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:border-emerald-300"
            }
          >
            ← Prev: {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/courses/${course.id}/lessons/${next.id}`}
            className={
              g6
                ? "inline-flex min-h-[48px] items-center rounded-2xl bg-emerald-700 px-5 py-3 text-base font-bold text-white hover:bg-emerald-800 sm:text-right"
                : "rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:border-emerald-300 sm:text-right"
            }
          >
            Next: {next.title} →
          </Link>
        ) : (
          <Link
            href={`/courses/${course.id}`}
            className={
              g6
                ? "inline-flex min-h-[48px] items-center rounded-2xl bg-emerald-700 px-5 py-3 text-base font-bold text-white hover:bg-emerald-800 sm:text-right"
                : "rounded-lg bg-emerald-800 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-900 sm:text-right"
            }
          >
            Back to course
          </Link>
        )}
      </nav>
    </div>
  );
}
