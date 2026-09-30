import { prisma } from "@/lib/prisma";
import { gradeLabel } from "@/lib/grades";
import { grade6UnitLabel } from "@/lib/grade6Classroom";

/** What a teacher needs beside a lesson DM. Not stored as a student message. */
export type LessonAskContext = {
  studentName: string;
  courseTitle: string;
  subject: string;
  gradeLabel: string;
  unitLabel: string;
  lessonOrder: number;
  lessonTitle: string;
  lessonHref: string;
  completed: boolean;
  completedAt: string | null;
  quizPercent: number | null;
  quizAt: string | null;
  hasQuiz: boolean;
  /** No per-lesson timer is stored. Null means "not tracked". */
  timeSpent: null;
};

export async function loadLessonAskContextForThread(
  threadId: string
): Promise<LessonAskContext | null> {
  const thread = await prisma.messageThread.findUnique({
    where: { id: threadId },
    select: {
      lessonId: true,
      participants: {
        select: { user: { select: { id: true, name: true, role: true } } },
      },
      lesson: {
        select: {
          id: true,
          title: true,
          order: true,
          sectionKey: true,
          course: {
            select: { id: true, title: true, subject: true, grade: true },
          },
          _count: { select: { questions: true } },
        },
      },
    },
  });
  if (!thread?.lesson) return null;
  const lesson = thread.lesson;
  const student = thread.participants.find((p) => p.user.role === "STUDENT")?.user;
  if (!student) return null;

  const [progress, attempt] = await Promise.all([
    prisma.progress.findUnique({
      where: { userId_lessonId: { userId: student.id, lessonId: lesson.id } },
      select: { completed: true, completedAt: true },
    }),
    prisma.attempt.findFirst({
      where: { userId: student.id, lessonId: lesson.id },
      orderBy: { submittedAt: "desc" },
      select: { percent: true, submittedAt: true },
    }),
  ]);

  return {
    studentName: student.name,
    courseTitle: lesson.course.title,
    subject: lesson.course.subject,
    gradeLabel: gradeLabel(lesson.course.grade),
    unitLabel: grade6UnitLabel(lesson.sectionKey, undefined, lesson.course.subject),
    lessonOrder: lesson.order,
    lessonTitle: lesson.title,
    lessonHref: `/courses/${lesson.course.id}/lessons/${lesson.id}`,
    completed: Boolean(progress?.completed),
    completedAt: progress?.completedAt ? progress.completedAt.toISOString() : null,
    quizPercent: attempt ? Math.round(attempt.percent) : null,
    quizAt: attempt ? attempt.submittedAt.toISOString() : null,
    hasQuiz: lesson._count.questions > 0,
    timeSpent: null,
  };
}
