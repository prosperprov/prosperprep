"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { grade6UnitLabel, grade6UnitNumber, isRetiredSection } from "@/lib/grade6Classroom";
import { SECTION_WEIGHT } from "@/lib/grading";
import { unitLockMessage } from "@/lib/unitUnlock";

type LessonRow = {
  id: string;
  title: string;
  description: string;
  order: number;
  durationMin: number;
  sectionKey: string;
};

type QuizRow = {
  id: string;
  title: string;
  sectionKey: string | null;
  questionCount: number;
};

export function Grade6UnitAccordion({
  courseId,
  lessons,
  quizzes,
  completedIds,
  quizUnlocked,
  defaultOpenUnit,
  subject,
  maxUnlockedUnit,
}: {
  courseId: string;
  lessons: LessonRow[];
  quizzes: QuizRow[];
  completedIds: string[];
  quizUnlocked: Record<string, boolean>;
  defaultOpenUnit?: string | null;
  subject?: string | null;
  /** Highest unit number the student may enter (1-based). Defaults to all open. */
  maxUnlockedUnit?: number;
}) {
  const done = useMemo(() => new Set(completedIds), [completedIds]);

  const units = useMemo(() => {
    const keys: string[] = [];
    const seen = new Set<string>();
    for (const l of lessons) {
      if (isRetiredSection(l.sectionKey)) continue;
      if (!seen.has(l.sectionKey)) {
        seen.add(l.sectionKey);
        keys.push(l.sectionKey);
      }
    }
    return keys;
  }, [lessons]);

  const ceiling = maxUnlockedUnit ?? Math.max(units.length, 99);

  const [open, setOpen] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    for (const k of units) {
      const n = grade6UnitNumber(k);
      const unitLocked = n != null && n > ceiling;
      if (unitLocked) {
        init[k] = false;
        continue;
      }
      init[k] = defaultOpenUnit ? k === defaultOpenUnit : k === units[0];
    }
    return init;
  });

  if (units.length === 0) {
    return <p className="mt-4 text-slate-600">No active lessons yet.</p>;
  }

  return (
    <div className="mt-4 space-y-4">
      {units.map((sectionKey, idx) => {
        const unitLessons = lessons.filter((l) => l.sectionKey === sectionKey);
        const unitQuizzes = quizzes.filter((q) => q.sectionKey === sectionKey);
        const completedCount = unitLessons.filter((l) => done.has(l.id)).length;
        const isOpen = open[sectionKey] ?? false;
        const label = grade6UnitLabel(sectionKey, units.length, subject);
        const unitN = grade6UnitNumber(sectionKey);
        const locked = unitN != null && unitN > ceiling;
        const lockMsg = locked ? unitLockMessage(sectionKey) : "";

        return (
          <div
            key={sectionKey}
            className={
              locked
                ? "overflow-hidden rounded-3xl border-2 border-slate-200 bg-slate-100 opacity-75 shadow-sm"
                : "overflow-hidden rounded-3xl border-2 border-slate-200 bg-white shadow-sm"
            }
          >
            <button
              type="button"
              className={
                locked
                  ? "flex w-full cursor-not-allowed items-center justify-between gap-3 bg-slate-200/80 px-5 py-4 text-left"
                  : "flex w-full items-center justify-between gap-3 bg-slate-50 px-5 py-4 text-left hover:bg-sky-50"
              }
              aria-expanded={locked ? false : isOpen}
              aria-disabled={locked}
              disabled={locked}
              onClick={() => {
                if (locked) return;
                setOpen((s) => ({ ...s, [sectionKey]: !isOpen }));
              }}
            >
              <div className="min-w-0">
                <p
                  className={
                    locked
                      ? "text-xs font-bold uppercase tracking-wide text-slate-500"
                      : "text-xs font-bold uppercase tracking-wide text-sky-800"
                  }
                >
                  Year path · {idx + 1}/{units.length}
                  {locked ? " · Locked" : ""}
                </p>
                <h3
                  className={
                    locked
                      ? "mt-0.5 text-lg font-bold text-slate-500 sm:text-xl"
                      : "mt-0.5 text-lg font-bold text-slate-900 sm:text-xl"
                  }
                >
                  {label}
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  {locked ? (
                    <span className="font-semibold text-slate-700">{lockMsg}</span>
                  ) : (
                    <>
                      {completedCount}/{unitLessons.length} lessons complete
                      {unitQuizzes.length > 0 ? " · ends with Unit Check" : ""}
                    </>
                  )}
                </p>
              </div>
              <span
                className={
                  locked
                    ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-300 text-lg font-bold text-slate-600 shadow-sm"
                    : "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold text-slate-700 shadow-sm"
                }
                aria-hidden
              >
                {locked ? "🔒" : isOpen ? "−" : "+"}
              </span>
            </button>

            {!locked && isOpen && (
              <div className="border-t border-slate-200 px-4 py-4 sm:px-5">
                    <ol className="space-y-3">
                      {unitLessons.map((lesson) => {
                        const finished = done.has(lesson.id);
                        return (
                          <li key={lesson.id}>
                            <Link
                              href={`/courses/${courseId}/lessons/${lesson.id}`}
                              className="block rounded-2xl border-2 border-slate-200 bg-white p-4 transition hover:border-sky-400 hover:shadow-md sm:p-5"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <p className="text-lg font-medium text-slate-900">
                                    {lesson.order}. {lesson.title}
                                    {finished && (
                                      <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-900">
                                        Done
                                      </span>
                                    )}
                                  </p>
                                  <p className="mt-1 text-base text-slate-600">{lesson.description}</p>
                                </div>
                                <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                                  {lesson.durationMin} min
                                </span>
                              </div>
                              <span className="mt-3 inline-flex min-h-[40px] items-center rounded-xl bg-sky-50 px-3 text-sm font-bold text-sky-950">
                                {finished ? "Review lesson" : "Open lesson →"}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ol>

                    {unitQuizzes.map((quiz) => {
                      const unlocked = quizUnlocked[quiz.id] ?? false;
                      return (
                        <div key={quiz.id} className="mt-3">
                          {unlocked ? (
                            <Link
                              href={`/courses/${courseId}/quizzes/${quiz.id}`}
                              className="block rounded-2xl border-2 border-emerald-400 bg-emerald-50 p-5 hover:bg-emerald-100"
                            >
                              <p className="text-lg font-semibold text-emerald-950">{quiz.title}</p>
                              <p className="mt-1 text-sm text-emerald-900">
                                {quiz.questionCount} questions · unlocked · unit weight{" "}
                                {Math.round(SECTION_WEIGHT * 100)}%
                              </p>
                              <span className="mt-3 inline-flex min-h-[44px] items-center rounded-xl bg-emerald-700 px-4 text-sm font-bold text-white">
                                Take unit check →
                              </span>
                            </Link>
                          ) : (
                            <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-5 text-base text-slate-600">
                              <p className="font-semibold text-slate-800">{quiz.title} · locked</p>
                              <p className="mt-1">
                                Complete all {unitLessons.length} lessons in this unit to unlock (
                                {quiz.questionCount} questions).
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
