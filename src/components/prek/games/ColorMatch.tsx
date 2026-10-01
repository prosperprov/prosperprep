"use client";

import { useCallback, useMemo, useState } from "react";

const COLORS = [
  { name: "Red", className: "bg-red-500", text: "text-red-700" },
  { name: "Blue", className: "bg-blue-500", text: "text-blue-700" },
  { name: "Green", className: "bg-emerald-500", text: "text-emerald-700" },
  { name: "Yellow", className: "bg-yellow-400", text: "text-yellow-700" },
  { name: "Orange", className: "bg-orange-500", text: "text-orange-700" },
  { name: "Purple", className: "bg-purple-500", text: "text-purple-700" },
] as const;

function pickTarget(exclude?: string) {
  const pool = exclude ? COLORS.filter((c) => c.name !== exclude) : COLORS;
  return pool[Math.floor(Math.random() * pool.length)]!;
}

function buildChoices(targetName: string) {
  const target = COLORS.find((c) => c.name === targetName)!;
  const others = COLORS.filter((c) => c.name !== targetName)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  return [...others, target].sort(() => Math.random() - 0.5);
}

export function ColorMatch() {
  const [target, setTarget] = useState(() => pickTarget());
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<"idle" | "yes" | "no">("idle");
  const choices = useMemo(() => buildChoices(target.name), [target]);

  const next = useCallback(() => {
    setTarget((t) => pickTarget(t.name));
    setFeedback("idle");
  }, []);

  function onPick(name: string) {
    if (feedback !== "idle") return;
    if (name === target.name) {
      setScore((s) => s + 1);
      setFeedback("yes");
      window.setTimeout(next, 700);
    } else {
      setFeedback("no");
      window.setTimeout(() => setFeedback("idle"), 600);
    }
  }

  return (
    <div className="space-y-5 bg-gradient-to-br from-fuchsia-50 to-pink-50 p-4 sm:p-6">
      <div className="flex justify-between text-sm font-semibold text-slate-700">
        <span className="rounded-full bg-white px-3 py-1 shadow-sm">Score {score}</span>
        <span className="rounded-full bg-white px-3 py-1 shadow-sm">Color words</span>
      </div>
      <p className={`text-center text-3xl font-extrabold ${target.text}`}>Find {target.name}</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {choices.map((c) => (
          <button
            key={`${target.name}-${c.name}`}
            type="button"
            onClick={() => onPick(c.name)}
            className={`flex min-h-[96px] items-center justify-center rounded-3xl text-lg font-bold text-white shadow-lg transition hover:scale-105 active:scale-95 ${c.className}`}
            aria-label={c.name}
          >
            <span className="rounded-full bg-black/20 px-3 py-1">{c.name}</span>
          </button>
        ))}
      </div>
      <p className="min-h-[1.5rem] text-center text-base font-semibold text-fuchsia-800" aria-live="polite">
        {feedback === "yes" ? "Bright choice!" : feedback === "no" ? "Look again at the color name" : "Tap the matching color"}
      </p>
    </div>
  );
}
