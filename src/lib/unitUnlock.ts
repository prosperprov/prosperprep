/**
 * Sequential unit unlock for Grade 6 and Grade 10 year-path courses (sectionKey = unit-N).
 *
 * ## Unlock rule (chosen 2026-09-29)
 *
 * Units open in order. Unit 1 is always unlocked.
 * Unit N+1 unlocks when Unit N is **cleared**.
 *
 * A unit is **cleared** when either:
 *   (A) every lesson in that unit has Progress.completed = true, OR
 *   (B) the student has a Unit Check attempt on that unit with percent >= UNIT_CHECK_PASS_PERCENT (60).
 *
 * Lessons *inside* an unlocked unit stay freely open (no per-lesson lock).
 * Unit Check quizzes still require all lessons in *that* unit (existing gate).
 *
 * Admins and teachers may set UnitUnlockOverride.maxUnlockedUnit = N to open units 1..N
 * ahead of the sequential gate for one student+course.
 *
 * Applies to Grade 6 and Grade 10 courses that use sectionKey unit-N (Math first; ELA/Science/History reuse).
 */

import { grade6UnitNumber, isRetiredSection } from "@/lib/grade6Classroom";

/** Passing threshold for path (B): Unit Check clears the unit for sequential unlock. */
export const UNIT_CHECK_PASS_PERCENT = 60;

export const UNIT_UNLOCK_RULE_SUMMARY =
  "Finish all lessons in Unit N (or pass the Unit N Check at 60%+) to unlock Unit N+1. Lessons inside an open unit stay free. Admins/teachers can unlock ahead.";

export type UnitLessonRef = { id: string; sectionKey: string };
export type UnitQuizRef = { id: string; sectionKey: string | null };

export function parseUnitKeys(lessons: UnitLessonRef[]): string[] {
  const keys: string[] = [];
  const seen = new Set<string>();
  for (const l of lessons) {
    if (isRetiredSection(l.sectionKey)) continue;
    if (!/^unit-\d+$/.test(l.sectionKey)) continue;
    if (!seen.has(l.sectionKey)) {
      seen.add(l.sectionKey);
      keys.push(l.sectionKey);
    }
  }
  return keys.sort((a, b) => (grade6UnitNumber(a) ?? 0) - (grade6UnitNumber(b) ?? 0));
}

/** Whether unit N is cleared by lessons-complete OR unit-check pass. */
export function isUnitCleared(opts: {
  sectionKey: string;
  lessons: UnitLessonRef[];
  completedLessonIds: Set<string>;
  quizBySection: Map<string, string>; // sectionKey → quizId
  passedQuizIds: Set<string>;
}): boolean {
  const unitLessons = opts.lessons.filter((l) => l.sectionKey === opts.sectionKey);
  if (unitLessons.length === 0) return true;
  const allLessonsDone = unitLessons.every((l) => opts.completedLessonIds.has(l.id));
  if (allLessonsDone) return true;
  const quizId = opts.quizBySection.get(opts.sectionKey);
  if (quizId && opts.passedQuizIds.has(quizId)) return true;
  return false;
}

/**
 * Highest unit number the student may enter (1-based).
 * Unit 1 always allowed. Override can raise the ceiling.
 */
export function maxUnlockedUnitNumber(opts: {
  unitKeys: string[];
  lessons: UnitLessonRef[];
  completedLessonIds: Set<string>;
  quizzes: UnitQuizRef[];
  passedQuizIds: Set<string>;
  overrideMaxUnit: number | null;
}): number {
  const nums = opts.unitKeys
    .map((k) => grade6UnitNumber(k))
    .filter((n): n is number => n != null);
  if (nums.length === 0) return 1;

  const quizBySection = new Map<string, string>();
  for (const q of opts.quizzes) {
    if (q.sectionKey) quizBySection.set(q.sectionKey, q.id);
  }

  let unlocked = 1;
  const maxN = Math.max(...nums);
  for (let n = 1; n < maxN; n++) {
    const key = `unit-${n}`;
    if (!opts.unitKeys.includes(key)) {
      // Skip missing unit numbers in sequence
      unlocked = n + 1;
      continue;
    }
    const cleared = isUnitCleared({
      sectionKey: key,
      lessons: opts.lessons,
      completedLessonIds: opts.completedLessonIds,
      quizBySection,
      passedQuizIds: opts.passedQuizIds,
    });
    if (!cleared) break;
    unlocked = n + 1;
  }

  if (opts.overrideMaxUnit != null && opts.overrideMaxUnit > unlocked) {
    unlocked = opts.overrideMaxUnit;
  }
  return Math.min(unlocked, maxN);
}

export function isUnitUnlocked(sectionKey: string, maxUnlocked: number): boolean {
  const n = grade6UnitNumber(sectionKey);
  if (n == null) return true; // non unit-N sections stay open
  return n <= maxUnlocked;
}

export function unitLockMessage(sectionKey: string): string {
  const n = grade6UnitNumber(sectionKey);
  if (n == null || n <= 1) return "";
  return `Finish Unit ${n - 1} to unlock`;
}
