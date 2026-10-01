"use client";

import { useCallback, useMemo, useState } from "react";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const BALLOON_COLORS = [
  "bg-rose-400",
  "bg-sky-400",
  "bg-amber-400",
  "bg-emerald-400",
  "bg-fuchsia-400",
  "bg-orange-400",
];

function pickTarget(exclude?: string) {
  const pool = exclude ? LETTERS.filter((l) => l !== exclude) : LETTERS;
  return pool[Math.floor(Math.random() * pool.length)]!;
}

function buildRound(target: string) {
  const others = LETTERS.filter((l) => l !== target)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
  return [...others, target].sort(() => Math.random() - 0.5);
}

export function LetterPop() {
  const [target, setTarget] = useState(() => pickTarget());
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState<"idle" | "yes" | "no">("idle");
  const balloons = useMemo(() => buildRound(target), [target]);

  const next = useCallback(() => {
    setTarget((t) => pickTarget(t));
    setFeedback("idle");
  }, []);

  function onPick(letter: string) {
    if (feedback !== "idle") return;
    if (letter === target) {
      setScore((s) => s + 1);
      setStreak((s) => s + 1);
      setFeedback("yes");
      window.setTimeout(next, 700);
    } else {
      setStreak(0);
      setFeedback("no");
      window.setTimeout(() => setFeedback("idle"), 600);
    }
  }

  return (
    <div className="space-y-5 bg-gradient-to-br from-rose-50 to-orange-50 p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-semibold text-slate-700">
        <span className="rounded-full bg-white px-3 py-1 shadow-sm">Score {score}</span>
        <span className="rounded-full bg-white px-3 py-1 shadow-sm">Streak {streak}</span>
      </div>
      <p className="text-center text-lg font-bold text-slate-900 sm:text-xl">
        Find the letter{" "}
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-2xl text-white shadow-lg">
          {target}
        </span>
      </p>
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {balloons.map((letter, i) => (
          <button
            key={`${target}-${letter}-${i}`}
            type="button"
            onClick={() => onPick(letter)}
            className={`flex min-h-[88px] flex-col items-center justify-center rounded-[2rem] text-3xl font-extrabold text-white shadow-lg transition hover:scale-105 active:scale-95 ${BALLOON_COLORS[i % BALLOON_COLORS.length]} ${
              feedback === "yes" && letter === target ? "ring-4 ring-emerald-500" : ""
            } ${feedback === "no" && letter !== target ? "opacity-80" : ""}`}
            aria-label={`Letter ${letter}`}
          >
            <span aria-hidden>🎈</span>
            {letter}
          </button>
        ))}
      </div>
      <p className="min-h-[1.5rem] text-center text-base font-semibold text-emerald-800" aria-live="polite">
        {feedback === "yes" ? "Yes! Great letter find!" : feedback === "no" ? "Try again — you can do it!" : "Tap the matching balloon"}
      </p>
    </div>
  );
}
