/**
 * Course grading rules for Prosper Preparatory.
 *
 * Weight model (documented in UI):
 * - Lesson checks (after each lesson): 40% of course average
 * - Section quizzes (after each 3-lesson section): 60% of course average
 * - Written submissions (essays, fix-and-justify, reasoning): ~10% blend when present
 * - OTHER (misc): light 5% blend when present (legacy)
 *
 * When WRITTEN entries exist, lesson+section are scaled to 90% and written is 10%.
 * Attempt policy: LATEST attempt counts for each lesson check / section quiz.
 * Students may retry; the most recent submission replaces the grade entry.
 */

export const LESSON_WEIGHT = 0.4;
export const SECTION_WEIGHT = 0.6;
/** Blend weight for WRITTEN grade entries when any exist. */
export const WRITTEN_WEIGHT = 0.1;

export function letterGrade(percent: number): string {
  if (percent >= 97) return "A+";
  if (percent >= 93) return "A";
  if (percent >= 90) return "A-";
  if (percent >= 87) return "B+";
  if (percent >= 83) return "B";
  if (percent >= 80) return "B-";
  if (percent >= 77) return "C+";
  if (percent >= 73) return "C";
  if (percent >= 70) return "C-";
  if (percent >= 67) return "D+";
  if (percent >= 63) return "D";
  if (percent >= 60) return "D-";
  return "F";
}

export type GradeRow = {
  source: string;
  percent: number;
  score: number;
  maxScore: number;
};

/** Weighted course percent from grade entries. */
export function courseAverage(entries: GradeRow[]): number | null {
  const lessons = entries.filter((e) => e.source === "LESSON_QUIZ");
  const sections = entries.filter((e) => e.source === "SECTION_QUIZ");
  const written = entries.filter((e) => e.source === "WRITTEN");
  const other = entries.filter((e) => e.source === "OTHER");

  if (
    lessons.length === 0 &&
    sections.length === 0 &&
    written.length === 0 &&
    other.length === 0
  ) {
    return null;
  }

  const avg = (rows: GradeRow[]) =>
    rows.length ? rows.reduce((s, r) => s + r.percent, 0) / rows.length : null;

  const lessonAvg = avg(lessons);
  const sectionAvg = avg(sections);
  const writtenAvg = avg(written);
  const otherAvg = avg(other);

  // Pure written / other fallbacks when no MCQ yet
  if (lessonAvg == null && sectionAvg == null) {
    if (writtenAvg != null && otherAvg != null) {
      return Math.round(((writtenAvg + otherAvg) / 2) * 10) / 10;
    }
    return writtenAvg ?? otherAvg;
  }

  let core: number;
  if (lessonAvg == null) core = sectionAvg!;
  else if (sectionAvg == null) core = lessonAvg;
  else core = lessonAvg * LESSON_WEIGHT + sectionAvg * SECTION_WEIGHT;

  let total = core;
  if (writtenAvg != null) {
    total = core * (1 - WRITTEN_WEIGHT) + writtenAvg * WRITTEN_WEIGHT;
  } else if (otherAvg != null) {
    total = total * 0.95 + otherAvg * 0.05;
  }
  return Math.round(total * 10) / 10;
}

export function monthBounds(d = new Date()): { start: Date; end: Date } {
  const start = new Date(d.getFullYear(), d.getMonth(), 1, 0, 0, 0, 0);
  const end = new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59, 999);
  return { start, end };
}

export function previousMonthBounds(d = new Date()): { start: Date; end: Date } {
  const start = new Date(d.getFullYear(), d.getMonth() - 1, 1, 0, 0, 0, 0);
  const end = new Date(d.getFullYear(), d.getMonth(), 0, 23, 59, 59, 999);
  return { start, end };
}

export function periodLabel(start: Date, end: Date): string {
  const fmt = (x: Date) =>
    x.toLocaleString("en-US", { month: "long", year: "numeric", timeZone: "America/Chicago" });
  const a = fmt(start);
  const b = fmt(end);
  return a === b ? a : `${a} – ${b}`;
}
