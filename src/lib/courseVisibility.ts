/**
 * Grade 10 is cores-only until Prosper re-enables electives.
 * Do not delete ACT/SAT/Athletic/Bible globally — other grades still offer them.
 */

export const GRADE_10_CORE_SUBJECTS = [
  "English Literature",
  "Algebra & Beyond",
  "Biology & Chemistry",
  "U.S. & World History",
] as const;

const GRADE_10_CORE_SET = new Set<string>(GRADE_10_CORE_SUBJECTS);

/** True when subject must stay off Grade 10 dashboards / catalog. */
export function isGrade10HiddenElective(subject: string): boolean {
  return !GRADE_10_CORE_SET.has(subject);
}

/** Whether a catalog course should appear for its grade. */
export function isCourseOfferedForGrade(grade: number, subject: string): boolean {
  if (grade !== 10) return true;
  return GRADE_10_CORE_SET.has(subject);
}

/** Prisma where fragment: only published courses. */
export const publishedCourseWhere = { published: true as const };

export function filterOfferedCourses<T extends { grade: number; subject: string }>(
  courses: T[]
): T[] {
  return courses.filter((c) => isCourseOfferedForGrade(c.grade, c.subject));
}
