import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { LessonQuiz } from "@/components/LessonQuiz";
import { SECTION_WEIGHT } from "@/lib/grading";
import { canAccessCourseContent } from "@/lib/curriculumAccess";
import { isRetiredSection } from "@/lib/grade6Classroom";

export const dynamic = "force-dynamic";

export default async function SectionQuizPage({
  params,
}: {
  params: { id: string; quizId: string };
}) {
  const session = await getSession();
  if (!session?.user) redirect(`/login?callbackUrl=/courses/${params.id}/quizzes/${params.quizId}`);

  const quiz = await prisma.quiz.findUnique({
    where: { id: params.quizId },
    include: {
      questions: { orderBy: { order: "asc" } },
      course: {
        include: {
          lessons: {
            orderBy: { order: "asc" },
            select: { id: true, sectionKey: true, order: true, title: true },
          },
        },
      },
    },
  });
  if (!quiz || quiz.courseId !== params.id) notFound();

  const access = await canAccessCourseContent({
    userId: session.user.id,
    role: session.user.role,
    courseGrade: quiz.course.grade,
    courseSubject: quiz.course.subject,
    coursePublished: quiz.course.published,
  });
  if (!access.ok) notFound();

  const activeLessons = quiz.course.lessons.filter((l) => !isRetiredSection(l.sectionKey));
  const sectionLessons = quiz.sectionKey
    ? activeLessons.filter((l) => l.sectionKey === quiz.sectionKey)
    : activeLessons;

  // Relation filter — avoid D1 100-bound-param limit when section spans many lessons.
  const progress = await prisma.progress.findMany({
    where: {
      userId: session.user.id,
      completed: true,
      lesson: quiz.sectionKey
        ? { courseId: quiz.courseId, sectionKey: quiz.sectionKey }
        : { courseId: quiz.courseId },
    },
    select: { lessonId: true },
  });
  const doneSet = new Set(progress.map((p) => p.lessonId));
  const unlocked =
    sectionLessons.length > 0 &&
    sectionLessons.every((l) => doneSet.has(l.id));

  const prior = await prisma.attempt.findFirst({
    where: { userId: session.user.id, quizId: quiz.id },
    orderBy: { submittedAt: "desc" },
  });
  const attemptsUsed = await prisma.attempt.count({
    where: { userId: session.user.id, quizId: quiz.id },
  });

  const questions = quiz.questions.map((q) => ({
    id: q.id,
    prompt: q.prompt,
    choices: JSON.parse(q.choices) as string[],
    order: q.order,
    points: q.points,
  }));

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
        <Link href={`/courses/${quiz.courseId}`} className="text-emerald-800 hover:underline">
          {quiz.course.title}
        </Link>
        <span>/</span>
        <span>{quiz.title}</span>
      </div>

      <h1 className="mt-4 text-3xl font-bold text-slate-900">{quiz.title}</h1>
      <p className="mt-2 text-slate-600">{quiz.description}</p>
      <p className="mt-2 text-xs text-slate-500">
        Section Quizzes are {Math.round(SECTION_WEIGHT * 100)}% of the course grade. Latest attempt
        counts ({attemptsUsed} used). {questions.length} questions.
      </p>

      {!unlocked ? (
        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950">
          <p className="font-semibold">Section quiz locked</p>
          <p className="mt-1">
            Complete all {sectionLessons.length} lessons in this section first (
            {progress.length}/{sectionLessons.length} done).
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            {sectionLessons.map((l) => (
              <li key={l.id}>
                <Link href={`/courses/${quiz.courseId}/lessons/${l.id}`} className="underline">
                  {l.order}. {l.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mt-8">
          <LessonQuiz quizId={quiz.id} questions={questions} priorPercent={prior?.percent ?? null} attemptsUsed={attemptsUsed} />
        </div>
      )}
    </div>
  );
}
