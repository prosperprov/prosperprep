"use client";

import { useCallback, useMemo, useState } from "react";

const COLORS = [
  { id: "rose", emoji: "🔴", label: "Red", btn: "bg-rose-500" },
  { id: "sky", emoji: "🔵", label: "Blue", btn: "bg-sky-500" },
  { id: "lime", emoji: "🟢", label: "Green", btn: "bg-emerald-500" },
  { id: "amber", emoji: "🟡", label: "Yellow", btn: "bg-amber-400" },
] as const;

type ColorId = (typeof COLORS)[number]["id"];

type Round = {
  sequence: ColorId[];
  answer: ColorId;
  choices: ColorId[];
};

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function makeRound(): Round {
  const palette = shuffle([...COLORS]).slice(0, 3);
  const a = palette[0]!.id;
  const b = palette[1]!.id;
  const c = palette[2]?.id ?? a;
  const kind = Math.floor(Math.random() * 3);
  let sequence: ColorId[];
  let answer: ColorId;
  if (kind === 0) {
    // ABAB → next is A
    sequence = [a, b, a, b];
    answer = a;
  } else if (kind === 1) {
    // AABB → next is A (after showing AABB start as AA BB first of next A)
    sequence = [a, a, b, b];
    answer = a;
  } else {
    // ABCABC → next is A after ABC A B C shown partially
    sequence = [a, b, c, a, b];
    answer = c;
  }
  const distractors = COLORS.map((x) => x.id).filter((id) => id !== answer);
  const choices = shuffle([answer, ...shuffle(distractors).slice(0, 2)]);
  return { sequence, answer, choices };
}

function meta(id: ColorId) {
  return COLORS.find((c) => c.id === id)!;
}

export function PatternTrain() {
  const [round, setRound] = useState<Round>(() => makeRound());
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<"idle" | "yes" | "no">("idle");

  const next = useCallback(() => {
    setRound(makeRound());
    setFeedback("idle");
  }, []);

  const cars = useMemo(() => round.sequence.map((id) => meta(id)), [round]);

  function onPick(id: ColorId) {
    if (feedback !== "idle") return;
    if (id === round.answer) {
      setScore((s) => s + 1);
      setFeedback("yes");
      window.setTimeout(next, 700);
    } else {
      setFeedback("no");
      window.setTimeout(() => setFeedback("idle"), 600);
    }
  }

  return (
    <div className="space-y-5 bg-gradient-to-br from-cyan-50 to-teal-50 p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-semibold text-slate-700">
        <span className="rounded-full bg-white px-3 py-1 shadow-sm">Score {score}</span>
        <span className="rounded-full bg-white px-3 py-1 shadow-sm">What comes next?</span>
      </div>

      <div className="rounded-3xl bg-white/90 p-4 shadow-inner">
        <p className="mb-3 text-center text-sm font-semibold text-slate-600">Look at the pattern train</p>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3" aria-label="Pattern sequence">
          {cars.map((car, i) => (
            <div
              key={`${car.id}-${i}`}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-3xl shadow ring-1 ring-slate-200 sm:h-16 sm:w-16"
              title={car.label}
            >
              <span aria-hidden>{car.emoji}</span>
              <span className="sr-only">{car.label}</span>
            </div>
          ))}
          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-dashed border-teal-400 bg-teal-50 text-2xl font-extrabold text-teal-700 sm:h-16 sm:w-16"
            aria-label="Missing next color"
          >
            ?
          </div>
        </div>
      </div>

      <p className="text-center text-lg font-bold text-slate-900">Tap the color that comes next</p>
      <div className="flex flex-wrap justify-center gap-3">
        {round.choices.map((id) => {
          const swatch = meta(id);
          return (
            <button
              key={`${round.answer}-${id}`}
              type="button"
              onClick={() => onPick(id)}
              className={`flex min-h-[72px] min-w-[88px] flex-col items-center justify-center rounded-2xl text-white shadow-lg transition hover:scale-105 active:scale-95 ${swatch.btn}`}
              aria-label={swatch.label}
            >
              <span className="text-2xl" aria-hidden>
                {swatch.emoji}
              </span>
              <span className="text-sm font-bold">{swatch.label}</span>
            </button>
          );
        })}
      </div>
      <p className="min-h-[1.5rem] text-center text-base font-semibold text-teal-800" aria-live="polite">
        {feedback === "yes" ? "Yes! Great pattern!" : feedback === "no" ? "Look again at the pattern" : "Find what comes next"}
      </p>
    </div>
  );
}
