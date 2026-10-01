"use client";

import { useCallback, useMemo, useState } from "react";

type ShapeId = "circle" | "square" | "triangle" | "star";

const SHAPES: { id: ShapeId; label: string; glyph: string; bin: string }[] = [
  { id: "circle", label: "Circle", glyph: "●", bin: "bg-sky-100 text-sky-800 ring-sky-300" },
  { id: "square", label: "Square", glyph: "■", bin: "bg-amber-100 text-amber-900 ring-amber-300" },
  { id: "triangle", label: "Triangle", glyph: "▲", bin: "bg-emerald-100 text-emerald-900 ring-emerald-300" },
  { id: "star", label: "Star", glyph: "★", bin: "bg-rose-100 text-rose-900 ring-rose-300" },
];

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function ShapeSort() {
  const [queue, setQueue] = useState(() => shuffle(SHAPES.map((s) => s.id)));
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<"idle" | "yes" | "no">("idle");

  const current = queue[0];
  const currentMeta = useMemo(() => SHAPES.find((s) => s.id === current)!, [current]);

  const advance = useCallback(() => {
    setQueue((q) => {
      const rest = q.slice(1);
      return rest.length ? rest : shuffle(SHAPES.map((s) => s.id));
    });
    setFeedback("idle");
  }, []);

  function onBin(id: ShapeId) {
    if (!current || feedback !== "idle") return;
    if (id === current) {
      setScore((s) => s + 1);
      setFeedback("yes");
      window.setTimeout(advance, 650);
    } else {
      setFeedback("no");
      window.setTimeout(() => setFeedback("idle"), 550);
    }
  }

  return (
    <div className="space-y-5 bg-gradient-to-br from-teal-50 to-emerald-50 p-4 sm:p-6">
      <div className="flex justify-between text-sm font-semibold text-slate-700">
        <span className="rounded-full bg-white px-3 py-1 shadow-sm">Score {score}</span>
        <span className="rounded-full bg-white px-3 py-1 shadow-sm">Sort the shape</span>
      </div>
      <div className="flex flex-col items-center gap-2 rounded-3xl bg-white/90 p-6 shadow-inner">
        <span className="text-7xl text-emerald-700" aria-hidden>
          {currentMeta.glyph}
        </span>
        <p className="text-lg font-bold text-slate-900">This is a {currentMeta.label}</p>
        <p className="text-sm text-slate-600">Tap the matching bin below</p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {SHAPES.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onBin(s.id)}
            className={`flex min-h-[88px] flex-col items-center justify-center rounded-2xl ring-2 transition hover:scale-105 active:scale-95 ${s.bin}`}
          >
            <span className="text-3xl" aria-hidden>
              {s.glyph}
            </span>
            <span className="mt-1 text-sm font-bold">{s.label}</span>
          </button>
        ))}
      </div>
      <p className="min-h-[1.5rem] text-center text-base font-semibold text-teal-800" aria-live="polite">
        {feedback === "yes" ? "Sorted!" : feedback === "no" ? "Wrong bin — try another" : "Match shape to bin"}
      </p>
    </div>
  );
}
