"use client";

import Link from "next/link";
import type { PrekActivity } from "@/lib/prekActivities";
import { skillLabels } from "@/lib/prekActivities";

export function PrekLearnShell({
  activity,
  children,
}: {
  activity: PrekActivity;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[70vh] bg-gradient-to-b from-emerald-50 via-sky-50 to-amber-50">
      <div className="mx-auto max-w-4xl px-4 py-6 md:py-10">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/prek"
            className="inline-flex min-h-[44px] items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-900 shadow-sm ring-1 ring-emerald-200 hover:bg-emerald-50"
          >
            ← Pre-K Learn Hub
          </Link>
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800 ring-1 ring-emerald-100">
            {skillLabels[activity.skill]} · ~{activity.minutes} min
          </span>
        </div>
        <header className="mb-6 text-center">
          <div className="text-5xl" aria-hidden>
            {activity.emoji}
          </div>
          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">{activity.title}</h1>
          <p className="mx-auto mt-2 max-w-xl text-base text-slate-700">{activity.blurb}</p>
        </header>
        <div className="overflow-hidden rounded-3xl border-4 border-white bg-white shadow-xl shadow-emerald-900/10">
          {children}
        </div>
      </div>
    </div>
  );
}
