/**
 * Some grades show cores only. Rows stay in the database (published = 0).
 * Do not delete electives — other grades may still offer them.
 */

export const GRADE_10_CORE_SUBJECTS = [
  "English Literature",
  "Algebra & Beyond",
  "Biology & Chemistry",
  "U.S. & World History",
] as const;

export const GRADE_6_CORE_SUBJECTS = [
  "English Language Arts",
  "Mathematics",
  "Life & Earth Science",
  "World History",
  "Spanish",
] as const;

const GRADE_10_CORE_SET = new Set<string>(GRADE_10_CORE_SUBJECTS);
const GRADE_6_CORE_SET = new Set<string>(GRADE_6_CORE_SUBJECTS);

/** True when subject must stay off Grade 10 dashboards / catalog. */
export function isGrade10HiddenElective(subject: string): boolean {
  return !GRADE_10_CORE_SET.has(subject);
}

/** Whether a catalog course should appear for its grade. */
export function isCourseOfferedForGrade(grade: number, subject: string): boolean {
  if (grade === 10) return GRADE_10_CORE_SET.has(subject);
  if (grade === 6) return GRADE_6_CORE_SET.has(subject);
  return true;
}

/** Prisma where fragment: only published courses. */
export const publishedCourseWhere = { published: true as const };

export function filterOfferedCourses<T extends { grade: number; subject: string }>(
  courses: T[]
): T[] {
  return courses.filter((c) => isCourseOfferedForGrade(c.grade, c.subject));
}
