"use client";

import { useCallback, useMemo, useState } from "react";

type Round = {
  sequence: (number | null)[];
  answer: number;
  choices: number[];
};

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function makeRound(): Round {
  const start = 1 + Math.floor(Math.random() * 6); // 1..6
  const len = 5;
  const nums = Array.from({ length: len }, (_, i) => start + i);
  const hideAt = 1 + Math.floor(Math.random() * (len - 2)); // not first/last
  const answer = nums[hideAt]!;
  const sequence: (number | null)[] = nums.map((n, i) => (i === hideAt ? null : n));
  const distractors: number[] = [];
  while (distractors.length < 3) {
    const n = 1 + Math.floor(Math.random() * 10);
    if (n !== answer && !distractors.includes(n)) distractors.push(n);
  }
  return { sequence, answer, choices: shuffle([answer, ...distractors]) };
}

export function MissingNumber() {
  const [round, setRound] = useState<Round>(() => makeRound());
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<"idle" | "yes" | "no">("idle");

  const next = useCallback(() => {
    setRound(makeRound());
    setFeedback("idle");
  }, []);

  const prompt = useMemo(
    () => round.sequence.map((n) => (n === null ? "?" : String(n))).join("  "),
    [round],
  );

  function onPick(n: number) {
    if (feedback !== "idle") return;
    if (n === round.answer) {
      setScore((s) => s + 1);
      setFeedback("yes");
      window.setTimeout(next, 700);
    } else {
      setFeedback("no");
      window.setTimeout(() => setFeedback("idle"), 600);
    }
  }

  return (
    <div className="space-y-5 bg-gradient-to-br from-indigo-50 to-blue-50 p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-semibold text-slate-700">
        <span className="rounded-full bg-white px-3 py-1 shadow-sm">Score {score}</span>
        <span className="rounded-full bg-white px-3 py-1 shadow-sm">Find the missing number</span>
      </div>

      <div className="rounded-3xl bg-white/90 p-5 shadow-inner">
        <p className="mb-4 text-center text-sm font-semibold text-slate-600">Count along the line</p>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3" aria-label={`Number line ${prompt}`}>
          {round.sequence.map((n, i) =>
            n === null ? (
              <div
                key={`gap-${i}`}
                className="flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-dashed border-indigo-400 bg-indigo-50 text-2xl font-extrabold text-indigo-700 sm:h-20 sm:w-20"
              >
                ?
              </div>
            ) : (
              <div
                key={`${n}-${i}`}
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-3xl font-extrabold text-white shadow-lg sm:h-20 sm:w-20"
              >
                {n}
              </div>
            ),
          )}
        </div>
      </div>

      <p className="text-center text-lg font-bold text-slate-900">Which number is missing?</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {round.choices.map((n) => (
          <button
            key={`${round.answer}-${n}`}
            type="button"
            onClick={() => onPick(n)}
            className="flex min-h-[72px] items-center justify-center rounded-2xl bg-sky-600 text-3xl font-extrabold text-white shadow-lg transition hover:bg-sky-700 active:scale-95"
          >
            {n}
          </button>
        ))}
      </div>
      <p className="min-h-[1.5rem] text-center text-base font-semibold text-indigo-800" aria-live="polite">
        {feedback === "yes" ? "Yes! You found it!" : feedback === "no" ? "Count again carefully" : "Tap the missing number"}
      </p>
    </div>
  );
}
