import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { gradeLabel } from "@/lib/grades";
import { LESSON_WEIGHT, SECTION_WEIGHT, courseAverage, letterGrade } from "@/lib/grading";
import { canAccessCourseContent } from "@/lib/curriculumAccess";
import { isGrade6Classroom } from "@/lib/grade6Classroom";
import { Grade6CourseHeader } from "@/components/grade6/Grade6CourseHeader";
import { Grade6UnitAccordion } from "@/components/grade6/Grade6UnitAccordion";
import { isRetiredSection } from "@/lib/grade6Classroom";

export const dynamic = "force-dynamic";

export default async function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = await prisma.course.findUnique({
    where: { id: params.id },
    include: {
      // No SQL retired filter — D1 startsWith/null quirks; filter with isRetiredSection in JS.
      lessons: {
        orderBy: { order: "asc" },
        select: {
          id: true,
          title: true,
          description: true,
          order: true,
          durationMin: true,
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
          _count: { select: { questions: true } },
        },
      },
      sessions: {
        where: { scheduledAt: { gte: new Date() } },
        orderBy: { scheduledAt: "asc" },
        take: 5,
        include: { teacher: { select: { name: true } } },
      },
    },
  });
  if (!course) notFound();

  const session = await getSession();
  if (session?.user?.id && (session.user.role === "STUDENT" || session.user.role === "TEACHER")) {
    const access = await canAccessCourseContent({
      userId: session.user.id,
      role: session.user.role,
      courseGrade: course.grade,
    });
    if (!access.ok) notFound();
  }
  let completedIds = new Set<string>();
  let coursePct: number | null = null;
  let courseLetter: string | null = null;
  const quizUnlocked = new Map<string, boolean>();

  if (session?.user?.id) {
    // Relation filter — Grade 6 Math alone has 100+ lessons; D1 caps bound params at 100.
    const progress = await prisma.progress.findMany({
      where: {
        userId: session.user.id,
        completed: true,
        lesson: { courseId: course.id },
      },
      select: { lessonId: true },
    });
    completedIds = new Set(progress.map((p) => p.lessonId));

    const entries = await prisma.gradeEntry.findMany({
      where: { userId: session.user.id, courseId: course.id },
    });
    coursePct = courseAverage(
      entries.map((e) => ({
        source: e.source,
        percent: e.percent,
        score: e.score,
        maxScore: e.maxScore,
      }))
    );
    courseLetter = coursePct != null ? letterGrade(coursePct) : null;

    for (const quiz of course.quizzes) {
      if (isRetiredSection(quiz.sectionKey)) continue;
      if (!quiz.sectionKey) {
        quizUnlocked.set(quiz.id, true);
        continue;
      }
      const sectionLessonIds = course.lessons
        .filter((l) => l.sectionKey === quiz.sectionKey)
        .map((l) => l.id);
      // No lessons for this sectionKey (e.g. Form A diagnostics) → unlocked
      const unlocked =
        sectionLessonIds.length === 0 ||
        sectionLessonIds.every((id) => completedIds.has(id));
      quizUnlocked.set(quiz.id, unlocked);
    }
  }

  const activeLessons = course.lessons.filter((l) => !isRetiredSection(l.sectionKey));
  const sections = Array.from(new Set(activeLessons.map((l) => l.sectionKey)));
  const g6 = isGrade6Classroom(course.grade);
  const nextIncomplete = activeLessons.find((l) => !completedIds.has(l.id));
  const quizUnlockedRecord: Record<string, boolean> = Object.fromEntries(
    Array.from(quizUnlocked.entries())
  );

  return (
    <div className={`mx-auto px-4 py-12 ${g6 ? "max-w-4xl" : "max-w-3xl"}`}>
      {g6 ? (
        <Grade6CourseHeader
          subject={course.subject}
          title={course.title}
          description={course.description}
          grade={course.grade}
          done={activeLessons.filter((l) => completedIds.has(l.id)).length}
          total={activeLessons.length}
          coursePct={coursePct}
          courseLetter={courseLetter}
          askTeacherHref="/dashboard/student/messages"
        />
      ) : (
        <>
          <Link href="/courses" className="text-sm text-emerald-800 hover:underline">
            ← Course catalog
          </Link>
          <p className="mt-4 text-sm font-medium text-emerald-800">
            {course.subject} · {gradeLabel(course.grade)}
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900">{course.title}</h1>
          <p className="mt-3 text-slate-600">{course.description}</p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">
              <p className="text-slate-500">Lessons</p>
              <p className="text-xl font-bold text-slate-900">
                {completedIds.size}/{activeLessons.length}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">
              <p className="text-slate-500">Your course average</p>
              <p className="text-xl font-bold text-slate-900">
                {coursePct != null ? `${coursePct}% (${courseLetter})` : "—"}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">
              <p className="text-slate-500">Grade weights</p>
              <p className="mt-1 font-medium text-slate-900">
                Lessons {Math.round(LESSON_WEIGHT * 100)}% · Sections{" "}
                {Math.round(SECTION_WEIGHT * 100)}%
              </p>
              <p className="mt-1 text-xs text-slate-500">Latest attempt counts</p>
            </div>
          </div>
        </>
      )}

      {g6 && nextIncomplete && (
        <Link
          href={`/courses/${course.id}/lessons/${nextIncomplete.id}`}
          className="mb-8 flex min-h-[72px] flex-col justify-center rounded-3xl border-2 border-emerald-400 bg-emerald-600 p-5 text-white shadow-md hover:bg-emerald-700 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-100">
              Continue learning
            </p>
            <p className="mt-1 text-xl font-bold">{nextIncomplete.title}</p>
            <p className="text-sm text-emerald-100">Lesson {nextIncomplete.order}</p>
          </div>
          <span className="mt-3 inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-white px-5 py-2 text-base font-bold text-emerald-900 sm:mt-0">
            Start lesson →
          </span>
        </Link>
      )}

      <h2 className={`font-semibold text-slate-900 ${g6 ? "text-xl" : "text-lg"}`}>
        {g6 ? "Year path · Units" : "Lesson plan"}
      </h2>
      {g6 ? (
        <Grade6UnitAccordion
          courseId={course.id}
          subject={course.subject}
          lessons={activeLessons.map((l) => ({
            id: l.id,
            title: l.title,
            description: l.description,
            order: l.order,
            durationMin: l.durationMin,
            sectionKey: l.sectionKey,
          }))}
          quizzes={course.quizzes
            .filter((q) => q.sectionKey && !isRetiredSection(q.sectionKey))
            .map((q) => ({
              id: q.id,
              title: q.title,
              sectionKey: q.sectionKey,
              questionCount: q._count.questions,
            }))}
          completedIds={Array.from(completedIds)}
          quizUnlocked={quizUnlockedRecord}
          defaultOpenUnit={nextIncomplete?.sectionKey ?? sections[0] ?? null}
        />
      ) : (
        <>
      {sections.map((sectionKey) => {
        const lessons = course.lessons.filter((l) => l.sectionKey === sectionKey);
        const sectionQuizzes = course.quizzes.filter((q) => q.sectionKey === sectionKey);
        return (
          <div key={sectionKey} className="mt-6">
            <h3
              className={`font-semibold uppercase tracking-wide text-slate-500 ${
                g6 ? "text-sm" : "text-sm"
              }`}
            >
              {sectionKey.replace(/-/g, " ")}
            </h3>
            <ol className="mt-3 space-y-3">
              {lessons.map((lesson) => {
                const done = completedIds.has(lesson.id);
                return (
                  <li key={lesson.id}>
                    <Link
                      href={`/courses/${course.id}/lessons/${lesson.id}`}
                      className={
                        g6
                          ? "block rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-400 hover:shadow-md"
                          : "block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
                      }
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className={`font-medium text-slate-900 ${g6 ? "text-lg" : ""}`}>
                            {lesson.order}. {lesson.title}
                            {done && (
                              <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-900">
                                Done
                              </span>
                            )}
                          </p>
                          <p className={`mt-1 text-slate-600 ${g6 ? "text-base" : "text-sm"}`}>
                            {lesson.description}
                          </p>
                        </div>
                        <span
                          className={`shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 ${
                            g6 ? "px-3 py-1 text-sm font-semibold" : ""
                          }`}
                        >
                          {lesson.durationMin} min
                        </span>
                      </div>
                      {g6 && (
                        <span className="mt-3 inline-flex min-h-[40px] items-center rounded-xl bg-emerald-50 px-3 text-sm font-bold text-emerald-900">
                          {done ? "Review lesson" : "Open lesson →"}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ol>
            {sectionQuizzes.map((quiz) => {
              const unlocked = quizUnlocked.get(quiz.id) ?? false;
              return (
                <div key={quiz.id} className="mt-3">
                  {unlocked ? (
                    <Link
                      href={`/courses/${course.id}/quizzes/${quiz.id}`}
                      className={
                        g6
                          ? "block rounded-2xl border-2 border-emerald-400 bg-emerald-50 p-5 hover:bg-emerald-100"
                          : "block rounded-xl border border-emerald-300 bg-emerald-50 p-4 hover:bg-emerald-100"
                      }
                    >
                      <p className={`font-semibold text-emerald-950 ${g6 ? "text-lg" : ""}`}>
                        {quiz.title}
                      </p>
                      <p className="mt-1 text-sm text-emerald-900">
                        {quiz._count.questions} questions · unlocked · section weight{" "}
                        {Math.round(SECTION_WEIGHT * 100)}%
                      </p>
                      {g6 && (
                        <span className="mt-3 inline-flex min-h-[44px] items-center rounded-xl bg-emerald-700 px-4 text-sm font-bold text-white">
                          Take quiz →
                        </span>
                      )}
                    </Link>
                  ) : (
                    <div
                      className={
                        g6
                          ? "rounded-2xl border-2 border-slate-200 bg-slate-50 p-5 text-base text-slate-600"
                          : "rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600"
                      }
                    >
                      <p className="font-semibold text-slate-800">{quiz.title} · locked</p>
                      <p className="mt-1">
                        Complete all lessons in this section to unlock ({quiz._count.questions}{" "}
                        questions).
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}

        </>
      )}

      {(() => {
        const orphanQuizzes = course.quizzes.filter(
          (q) => !q.sectionKey || !sections.includes(q.sectionKey)
        );
        if (orphanQuizzes.length === 0) return null;
        return (
          <div className="mt-10">
            <h2 className={`font-semibold text-slate-900 ${g6 ? "text-xl" : "text-lg"}`}>
              Practice tests & diagnostics
            </h2>
            <ul className="mt-4 space-y-3">
              {orphanQuizzes.map((quiz) => {
                const unlocked = quizUnlocked.get(quiz.id) ?? true;
                return (
                  <li key={quiz.id}>
                    {unlocked ? (
                      <Link
                        href={`/courses/${course.id}/quizzes/${quiz.id}`}
                        className={
                          g6
                            ? "block rounded-2xl border-2 border-indigo-300 bg-indigo-50 p-5 hover:bg-indigo-100"
                            : "block rounded-xl border border-indigo-300 bg-indigo-50 p-4 hover:bg-indigo-100"
                        }
                      >
                        <p className={`font-semibold text-indigo-950 ${g6 ? "text-lg" : ""}`}>
                          {quiz.title}
                        </p>
                        <p className="mt-1 text-sm text-indigo-900">
                          {quiz._count.questions} questions · diagnostic / practice
                        </p>
                      </Link>
                    ) : (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                        <p className="font-semibold text-slate-800">{quiz.title} · locked</p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })()}

      {course.sessions.length > 0 && (
        <>
          <h2 className={`mt-10 font-semibold text-slate-900 ${g6 ? "text-xl" : "text-lg"}`}>
            Upcoming live sessions
          </h2>
          <ul className="mt-4 space-y-3">
            {course.sessions.map((s) => (
              <li
                key={s.id}
                className={
                  g6
                    ? "rounded-2xl border-2 border-slate-200 bg-slate-50 p-5 text-base"
                    : "rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm"
                }
              >
                <p className="font-medium">{s.title}</p>
                <p className="text-slate-600">
                  {s.scheduledAt.toLocaleString("en-US", { timeZone: "America/Chicago" })} CT ·{" "}
                  {s.teacher.name}
                </p>
                {g6 && s.meetingUrl && (
                  <a
                    href={s.meetingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex min-h-[48px] items-center rounded-2xl bg-emerald-700 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-800"
                  >
                    Join live
                  </a>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
