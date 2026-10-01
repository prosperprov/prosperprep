import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPrekActivity, prekActivities } from "@/lib/prekActivities";
import { PrekActivityPlayer } from "@/components/prek/PrekActivityPlayer";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return prekActivities.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const activity = getPrekActivity(params.slug);
  if (!activity) return { title: "Pre-K Activity" };
  return {
    title: `${activity.title} · Free Pre-K`,
    description: activity.blurb,
  };
}

export default function PrekPlayPage({ params }: Props) {
  const activity = getPrekActivity(params.slug);
  if (!activity) notFound();
  return <PrekActivityPlayer activity={activity} />;
}
