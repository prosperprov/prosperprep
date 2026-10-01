"use client";

import { useCallback, useMemo, useState } from "react";

function randCount() {
  return 1 + Math.floor(Math.random() * 10);
}

function buildChoices(n: number) {
  const set = new Set<number>([n]);
  while (set.size < 4) {
    set.add(1 + Math.floor(Math.random() * 10));
  }
  return Array.from(set).sort(() => Math.random() - 0.5);
}

export function NumberCount() {
  const [count, setCount] = useState(() => randCount());
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<"idle" | "yes" | "no">("idle");
  const choices = useMemo(() => buildChoices(count), [count]);

  const next = useCallback(() => {
    setCount(randCount());
    setFeedback("idle");
  }, []);

  function onPick(n: number) {
    if (feedback !== "idle") return;
    if (n === count) {
      setScore((s) => s + 1);
      setFeedback("yes");
      window.setTimeout(next, 700);
    } else {
      setFeedback("no");
      window.setTimeout(() => setFeedback("idle"), 600);
    }
  }

  return (
    <div className="space-y-5 bg-gradient-to-br from-sky-50 to-indigo-50 p-4 sm:p-6">
      <div className="flex justify-between text-sm font-semibold text-slate-700">
        <span className="rounded-full bg-white px-3 py-1 shadow-sm">Score {score}</span>
        <span className="rounded-full bg-white px-3 py-1 shadow-sm">Count the stars</span>
      </div>
      <div
        className="flex min-h-[120px] flex-wrap content-center justify-center gap-2 rounded-3xl bg-white/80 p-4 shadow-inner"
        aria-label={`${count} stars`}
      >
        {Array.from({ length: count }).map((_, i) => (
          <span key={i} className="text-3xl sm:text-4xl" aria-hidden>
            ⭐
          </span>
        ))}
      </div>
      <p className="text-center text-lg font-bold text-slate-900">How many stars?</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {choices.map((n) => (
          <button
            key={`${count}-${n}`}
            type="button"
            onClick={() => onPick(n)}
            className="flex min-h-[72px] items-center justify-center rounded-2xl bg-indigo-600 text-3xl font-extrabold text-white shadow-lg transition hover:bg-indigo-700 active:scale-95"
          >
            {n}
          </button>
        ))}
      </div>
      <p className="min-h-[1.5rem] text-center text-base font-semibold text-indigo-800" aria-live="polite">
        {feedback === "yes" ? "Perfect counting!" : feedback === "no" ? "Count again carefully" : "Tap the number"}
      </p>
    </div>
  );
}
