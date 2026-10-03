import { spanishLessons } from "./spanishUnit";

export const G6_SPANISH_COURSE_ID = "g6-spanish";
export const G6_SPANISH_SUBJECT = "Spanish";

export function spanishLessonId(slug: string): string {
  return `g6-es-${slug}`;
}

export function spanishSlugFromLessonId(id: string): string | null {
  if (!id.startsWith("g6-es-")) return null;
  const slug = id.slice("g6-es-".length);
  return spanishLessons.some((lesson) => lesson.slug === slug) ? slug : null;
}

export function isGrade6SpanishCourse(course: { id?: string; grade: number; subject: string }): boolean {
  return course.grade === 6 && (course.id === G6_SPANISH_COURSE_ID || course.subject === G6_SPANISH_SUBJECT);
}

export function grade6SpanishLessonSeeds() {
  return spanishLessons.map((lesson, index) => ({
    id: spanishLessonId(lesson.slug),
    title: lesson.title,
    description: lesson.blurb,
    order: index + 1,
  }));
}
