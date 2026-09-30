import { prisma } from "@/lib/prisma";
import { isGrade6Classroom } from "@/lib/grade6Classroom";
import {
  maxUnlockedUnitNumber,
  parseUnitKeys,
  UNIT_CHECK_PASS_PERCENT,
  isUnitUnlocked,
} from "@/lib/unitUnlock";

/**
 * Resolve sequential unit unlock ceiling for a user on a Grade 6 course.
 * Staff (ADMIN/TEACHER) get all units open for browsing.
 */
export async function resolveMaxUnlockedUnit(opts: {
  userId: string;
  role: string;
  courseId: string;
  courseGrade: number;
  lessons: { id: string; sectionKey: string }[];
  quizzes: { id: string; sectionKey: string | null }[];
  completedLessonIds: Set<string>;
}): Promise<number> {
  if (!isGrade6Classroom(opts.courseGrade)) return 99;
  if (opts.role === "ADMIN" || opts.role === "TEACHER") return 99;

  const unitKeys = parseUnitKeys(opts.lessons);
  if (unitKeys.length === 0) return 99;

  const unitQuizIds = opts.quizzes
    .filter((q) => q.sectionKey && /^unit-\d+$/.test(q.sectionKey))
    .map((q) => q.id);

  const passedAttempts =
    unitQuizIds.length > 0
      ? await prisma.attempt.findMany({
          where: {
            userId: opts.userId,
            quizId: { in: unitQuizIds },
            percent: { gte: UNIT_CHECK_PASS_PERCENT },
          },
          select: { quizId: true },
        })
      : [];

  const passedQuizIds = new Set(
    passedAttempts.map((a) => a.quizId).filter((id): id is string => Boolean(id))
  );

  const override = await prisma.unitUnlockOverride.findUnique({
    where: {
      userId_courseId: { userId: opts.userId, courseId: opts.courseId },
    },
    select: { maxUnlockedUnit: true },
  });

  return maxUnlockedUnitNumber({
    unitKeys,
    lessons: opts.lessons,
    completedLessonIds: opts.completedLessonIds,
    quizzes: opts.quizzes,
    passedQuizIds,
    overrideMaxUnit: override?.maxUnlockedUnit ?? null,
  });
}

export { isUnitUnlocked };
