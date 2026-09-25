import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { gradeLabel } from "@/lib/grades";
import { LESSON_WEIGHT, SECTION_WEIGHT, courseAverage, letterGrade } from "@/lib/grading";
import { canAccessCourseContent } from "@/lib/curriculumAccess";

export const dynamic = "force-dynamic";

export default async function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = await prisma.course.findUnique({
    where: { id: params.id },
    include: {
      lessons: { orderBy: { order: "asc" } },
      quizzes: { orderBy: { order: "asc" }, include: { questions: { select: { id: true } } } },
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
    const progress = await prisma.progress.findMany({
      where: {
        userId: session.user.id,
        lessonId: { in: course.lessons.map((l) => l.id) },
        completed: true,
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

  const sections = Array.from(new Set(course.lessons.map((l) => l.sectionKey)));

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
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
            {completedIds.size}/{course.lessons.length}
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

      <h2 className="mt-10 text-lg font-semibold text-slate-900">Lesson plan</h2>
      {sections.map((sectionKey) => {
        const lessons = course.lessons.filter((l) => l.sectionKey === sectionKey);
        const sectionQuizzes = course.quizzes.filter((q) => q.sectionKey === sectionKey);
        return (
          <div key={sectionKey} className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {sectionKey.replace(/-/g, " ")}
            </h3>
            <ol className="mt-3 space-y-3">
              {lessons.map((lesson) => {
                const done = completedIds.has(lesson.id);
                return (
                  <li key={lesson.id}>
                    <Link
                      href={`/courses/${course.id}/lessons/${lesson.id}`}
                      className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-medium text-slate-900">
                            {lesson.order}. {lesson.title}
                            {done && (
                              <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-900">
                                Done
                              </span>
                            )}
                          </p>
                          <p className="mt-1 text-sm text-slate-600">{lesson.description}</p>
                        </div>
                        <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                          {lesson.durationMin} min
                        </span>
                      </div>
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
                      className="block rounded-xl border border-emerald-300 bg-emerald-50 p-4 hover:bg-emerald-100"
                    >
                      <p className="font-semibold text-emerald-950">{quiz.title}</p>
                      <p className="mt-1 text-sm text-emerald-900">
                        {quiz.questions.length} questions · unlocked · section weight{" "}
                        {Math.round(SECTION_WEIGHT * 100)}%
                      </p>
                    </Link>
                  ) : (
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                      <p className="font-semibold text-slate-800">{quiz.title} · locked</p>
                      <p className="mt-1">
                        Complete all lessons in this section to unlock ({quiz.questions.length}{" "}
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

      {(() => {
        const orphanQuizzes = course.quizzes.filter(
          (q) => !q.sectionKey || !sections.includes(q.sectionKey)
        );
        if (orphanQuizzes.length === 0) return null;
        return (
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-slate-900">Practice tests & diagnostics</h2>
            <ul className="mt-4 space-y-3">
              {orphanQuizzes.map((quiz) => {
                const unlocked = quizUnlocked.get(quiz.id) ?? true;
                return (
                  <li key={quiz.id}>
                    {unlocked ? (
                      <Link
                        href={`/courses/${course.id}/quizzes/${quiz.id}`}
                        className="block rounded-xl border border-indigo-300 bg-indigo-50 p-4 hover:bg-indigo-100"
                      >
                        <p className="font-semibold text-indigo-950">{quiz.title}</p>
                        <p className="mt-1 text-sm text-indigo-900">
                          {quiz.questions.length} questions · diagnostic / practice
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
          <h2 className="mt-10 text-lg font-semibold text-slate-900">Upcoming live sessions</h2>
          <ul className="mt-4 space-y-3">
            {course.sessions.map((s) => (
              <li key={s.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
                <p className="font-medium">{s.title}</p>
                <p className="text-slate-600">
                  {s.scheduledAt.toLocaleString("en-US", { timeZone: "America/Chicago" })} CT ·{" "}
                  {s.teacher.name}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
