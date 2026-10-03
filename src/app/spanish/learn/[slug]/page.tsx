import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSpanishLesson, spanishLessons } from "@/lib/spanishUnit";
import { SpanishLesson } from "@/components/spanish/SpanishLesson";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return spanishLessons.map((lesson) => ({ slug: lesson.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const lesson = getSpanishLesson(params.slug);
  if (!lesson) return { title: "Spanish" };
  return {
    title: `${lesson.title} · Spanish Unit 1`,
    description: lesson.blurb,
  };
}

export default function SpanishLearnPage({ params }: Props) {
  const lesson = getSpanishLesson(params.slug);
  if (!lesson) notFound();
  return <SpanishLesson lesson={lesson} />;
}
