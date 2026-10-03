"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { SPANISH_UNIT, spanishLessons } from "@/lib/spanishUnit";
import { loadCompletedLessons } from "@/lib/spanishProgress";

export function SpanishPath() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const read = () => setCompleted(loadCompletedLessons());
    read();
    setReady(true);
    window.addEventListener("focus", read);
    window.addEventListener("storage", read);
    return () => {
      window.removeEventListener("focus", read);
      window.removeEventListener("storage", read);
    };
  }, []);

  const current =
    spanishLessons.find((lesson) => !completed.includes(lesson.slug)) ?? spanishLessons[0]!;
  const doneCount = spanishLessons.filter((lesson) => completed.includes(lesson.slug)).length;
  const allDone = doneCount === spanishLessons.length;

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-slate-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(253,230,138,0.35) 0, transparent 26%), radial-gradient(circle at 90% 30%, rgba(16,185,129,0.35) 0, transparent 28%)",
        }}
      />
      <div className="relative mx-auto max-w-lg px-4 py-10 md:py-14">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
          Prosper Preparatory
        </p>
        <h1 className="mt-2 text-balance text-center text-4xl font-extrabold leading-tight">
          {SPANISH_UNIT.title}
        </h1>
        <p className="mt-2 text-center text-lg font-semibold text-amber-200">{SPANISH_UNIT.unitLabel}</p>
        <p className="mx-auto mt-3 max-w-sm text-center text-base text-emerald-100">
          Greetings, polite words, numbers, colors, and how to say your name. Eight short lessons.
          Your place is saved on this device.
        </p>

        <div className="mx-auto mt-6 max-w-sm">
          <div className="mb-2 flex items-center justify-between text-sm font-semibold text-emerald-100">
            <span>{ready ? `${doneCount} of ${spanishLessons.length} done` : "Unit progress"}</span>
            <span>{ready ? `${Math.round((doneCount / spanishLessons.length) * 100)}%` : ""}</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-emerald-800">
            <div
              className="h-full rounded-full bg-amber-300 transition-all"
              style={{ width: ready ? `${(doneCount / spanishLessons.length) * 100}%` : "0%" }}
            />
          </div>
        </div>

        <Link
          href={`/spanish/learn/${current.slug}`}
          className="mx-auto mt-6 flex min-h-[56px] max-w-sm items-center justify-center rounded-2xl bg-amber-300 px-5 text-lg font-extrabold text-emerald-950 shadow-lg hover:bg-amber-200"
        >
          {allDone ? "Practice again" : doneCount === 0 ? "Start lesson 1" : "Continue"}
        </Link>

        <ol className="relative mx-auto mt-10 max-w-sm space-y-3">
          <div className="absolute bottom-8 left-8 top-8 w-1 rounded-full bg-emerald-700/70" aria-hidden />
          {spanishLessons.map((lesson, index) => {
            const done = completed.includes(lesson.slug);
            const isCurrent = lesson.slug === current.slug && !allDone;
            return (
              <li key={lesson.slug} className="relative">
                <Link
                  href={`/spanish/learn/${lesson.slug}`}
                  className={`flex min-h-[76px] items-center gap-4 rounded-2xl px-3 py-3 ring-1 transition ${
                    isCurrent
                      ? "bg-white text-emerald-950 shadow-lg ring-amber-300"
                      : "bg-emerald-950/40 text-white ring-emerald-700 hover:bg-emerald-900/70"
                  }`}
                >
                  <span
                    className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-extrabold ${
                      done
                        ? "bg-emerald-400 text-emerald-950"
                        : isCurrent
                          ? "bg-amber-300 text-emerald-950 ring-4 ring-amber-100"
                          : "bg-emerald-800 text-emerald-50 ring-2 ring-emerald-600"
                    }`}
                    aria-hidden
                  >
                    {done ? <Check className="h-7 w-7" strokeWidth={3} /> : index + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-lg font-extrabold leading-tight">{lesson.title}</span>
                    <span className={`mt-0.5 block text-sm ${isCurrent ? "text-emerald-800" : "text-emerald-200"}`}>
                      {done ? "Done" : isCurrent ? "Up next" : lesson.blurb}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
