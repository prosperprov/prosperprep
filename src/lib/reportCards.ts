import { prisma } from "@/lib/prisma";
import { courseAverage, letterGrade, monthBounds, periodLabel } from "@/lib/grading";

export type ReportSummary = {
  periodLabel: string;
  overallPercent: number | null;
  overallLetter: string | null;
  courses: {
    courseId: string;
    title: string;
    subject: string;
    average: number | null;
    letter: string | null;
    lessonsCompleted: number;
    lessonsTotal: number;
  }[];
  lessonsCompleted: number;
  lessonsTotal: number;
  teacherComment: string;
};

export async function getOrCreateReportCard(userId: string, when = new Date()) {
  const { start, end } = monthBounds(when);
  const existing = await prisma.reportCard.findUnique({
    where: {
      userId_periodStart_periodEnd: {
        userId,
        periodStart: start,
        periodEnd: end,
      },
    },
  });
  if (existing) {
    return { report: existing, summary: JSON.parse(existing.summary) as ReportSummary };
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  const grade = user?.grade;
  const courses =
    grade != null
      ? await prisma.course.findMany({
          where: { grade },
          orderBy: { order: "asc" },
          include: { lessons: { select: { id: true } } },
        })
      : [];

  const entries = await prisma.gradeEntry.findMany({ where: { userId } });
  const progress = await prisma.progress.findMany({
    where: { userId, completed: true },
    select: { lessonId: true },
  });
  const completedSet = new Set(progress.map((p) => p.lessonId));

  const courseRows = courses.map((c) => {
    const courseEntries = entries.filter((e) => e.courseId === c.id);
    const average = courseAverage(
      courseEntries.map((e) => ({
        source: e.source,
        percent: e.percent,
        score: e.score,
        maxScore: e.maxScore,
      }))
    );
    const lessonsCompleted = c.lessons.filter((l) => completedSet.has(l.id)).length;
    return {
      courseId: c.id,
      title: c.title,
      subject: c.subject,
      average,
      letter: average != null ? letterGrade(average) : null,
      lessonsCompleted,
      lessonsTotal: c.lessons.length,
    };
  });

  const graded = courseRows.filter((c) => c.average != null);
  const overallPercent =
    graded.length > 0
      ? Math.round(
          (graded.reduce((s, c) => s + (c.average as number), 0) / graded.length) * 10
        ) / 10
      : null;

  const lessonsTotal = courseRows.reduce((s, c) => s + c.lessonsTotal, 0);
  const lessonsCompleted = courseRows.reduce((s, c) => s + c.lessonsCompleted, 0);

  const summary: ReportSummary = {
    periodLabel: periodLabel(start, end),
    overallPercent,
    overallLetter: overallPercent != null ? letterGrade(overallPercent) : null,
    courses: courseRows,
    lessonsCompleted,
    lessonsTotal,
    teacherComment:
      "Teacher comments will appear here after monthly review. Keep completing lesson checks and section quizzes.",
  };

  const report = await prisma.reportCard.create({
    data: {
      userId,
      periodStart: start,
      periodEnd: end,
      summary: JSON.stringify(summary),
    },
  });

  return { report, summary };
}
