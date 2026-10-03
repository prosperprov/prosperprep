import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getSpanishLesson } from "@/lib/spanishUnit";
import { G6_SPANISH_COURSE_ID, spanishLessonId } from "@/lib/spanishCourse";

export default async function SpanishLessonRedirectPage({ params }: { params: { slug: string } }) {
  if (!getSpanishLesson(params.slug)) notFound();
  const session = await getSession();
  const dest = `/courses/${G6_SPANISH_COURSE_ID}/lessons/${spanishLessonId(params.slug)}`;
  if (!session?.user) {
    redirect(`/login?callbackUrl=${encodeURIComponent(dest)}`);
  }
  redirect(dest);
}
