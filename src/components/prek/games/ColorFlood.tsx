"use client";

import { useCallback, useMemo, useState } from "react";

const SIZE = 8;
const COLOR_COUNT = 5;
const MAX_TURNS = 16;

const PALETTE = [
  { id: 0, name: "Red", className: "bg-rose-500", ring: "ring-rose-600" },
  { id: 1, name: "Blue", className: "bg-sky-500", ring: "ring-sky-600" },
  { id: 2, name: "Green", className: "bg-emerald-500", ring: "ring-emerald-600" },
  { id: 3, name: "Yellow", className: "bg-amber-400", ring: "ring-amber-500" },
  { id: 4, name: "Purple", className: "bg-violet-500", ring: "ring-violet-600" },
] as const;

type Cell = number;

function makeBoard(): Cell[] {
  const cells: Cell[] = [];
  for (let i = 0; i < SIZE * SIZE; i++) {
    cells.push(Math.floor(Math.random() * COLOR_COUNT));
  }
  return cells;
}

function floodFromOrigin(board: Cell[], newColor: number): Cell[] {
  const start = board[0]!;
  if (start === newColor) return board;
  const next = board.slice();
  const stack = [0];
  const seen = new Set<number>([0]);

  while (stack.length) {
    const i = stack.pop()!;
    if (next[i] !== start) continue;
    next[i] = newColor;
    const r = Math.floor(i / SIZE);
    const c = i % SIZE;
    const neighbors = [
      r > 0 ? i - SIZE : -1,
      r < SIZE - 1 ? i + SIZE : -1,
      c > 0 ? i - 1 : -1,
      c < SIZE - 1 ? i + 1 : -1,
    ];
    for (const n of neighbors) {
      if (n >= 0 && !seen.has(n) && board[n] === start) {
        seen.add(n);
        stack.push(n);
      }
    }
  }
  return next;
}

function isWon(board: Cell[]) {
  const first = board[0]!;
  return board.every((c) => c === first);
}

export function ColorFlood() {
  const [board, setBoard] = useState<Cell[]>(() => makeBoard());
  const [turnsLeft, setTurnsLeft] = useState(MAX_TURNS);
  const [message, setMessage] = useState("Tap a color to flood from the top-left corner");

  const won = useMemo(() => isWon(board), [board]);
  const lost = !won && turnsLeft <= 0;
  const originColor = board[0]!;

  const reset = useCallback(() => {
    setBoard(makeBoard());
    setTurnsLeft(MAX_TURNS);
    setMessage("Tap a color to flood from the top-left corner");
  }, []);

  function pickColor(colorId: number) {
    if (won || lost) return;
    if (colorId === originColor) {
      setMessage("Pick a different color — that one already fills the start");
      return;
    }
    const flooded = floodFromOrigin(board, colorId);
    const remaining = turnsLeft - 1;
    setBoard(flooded);
    setTurnsLeft(remaining);
    if (isWon(flooded)) {
      setMessage(`You flooded the whole board with ${remaining} turn${remaining === 1 ? "" : "s"} left!`);
    } else if (remaining <= 0) {
      setMessage("Out of turns — try a new puzzle!");
    } else {
      setMessage(`${remaining} turn${remaining === 1 ? "" : "s"} left — keep flooding!`);
    }
  }

  return (
    <div className="space-y-5 bg-gradient-to-br from-violet-50 to-purple-50 p-4 sm:p-6">
      <div className="rounded-2xl bg-white/95 p-4 text-left shadow-sm ring-1 ring-violet-100">
        <h2 className="text-base font-extrabold text-violet-900 sm:text-lg">How to learn Color Flood</h2>
        <p className="mt-1 text-sm text-slate-600">For kids and parents — read together, then tap colors.</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm font-medium text-slate-800 sm:text-base">
          <li>
            Find the <strong>top-left</strong> square (it has a dark ring). That is where your flood starts.
          </li>
          <li>
            Tap a <strong>color button</strong> below the board. Matching squares connected to the start change to that color.
          </li>
          <li>
            Keep tapping colors to grow your flood across the board.
          </li>
          <li>
            Goal: make the <strong>whole board one color</strong> before you run out of turns.
          </li>
        </ol>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-semibold text-slate-700">
        <span className="rounded-full bg-white px-3 py-1 shadow-sm">
          Turns {Math.max(turnsLeft, 0)}/{MAX_TURNS}
        </span>
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-violet-700 px-4 py-2 text-white shadow hover:bg-violet-800"
        >
          New puzzle
        </button>
      </div>

      <div
        className="mx-auto grid max-w-md gap-1 rounded-2xl bg-white p-2 shadow-inner ring-1 ring-violet-100 sm:gap-1.5 sm:p-3"
        style={{ gridTemplateColumns: `repeat(${SIZE}, minmax(0, 1fr))` }}
        role="img"
        aria-label="Color flood board. Start corner is the top-left square with a ring."
      >
        {board.map((colorId, i) => {
          const swatch = PALETTE[colorId]!;
          const isOrigin = i === 0;
          return (
            <div
              key={i}
              className={`aspect-square rounded-md sm:rounded-lg ${swatch.className} ${
                isOrigin ? "ring-2 ring-offset-1 ring-slate-900/40" : ""
              }`}
              title={isOrigin ? "Start corner — flood begins here" : swatch.name}
            />
          );
        })}
      </div>

      <p className="text-center text-sm font-semibold text-violet-800">
        Pick a color to flood from the top-left corner ↓
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {PALETTE.map((swatch) => (
          <button
            key={swatch.id}
            type="button"
            disabled={won || lost}
            onClick={() => pickColor(swatch.id)}
            className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xs font-bold text-white shadow-lg transition hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 ${swatch.className} ${
              originColor === swatch.id ? `ring-4 ${swatch.ring}` : ""
            }`}
            aria-label={`Flood with ${swatch.name}`}
          >
            {swatch.name}
          </button>
        ))}
      </div>

      <p className="min-h-[1.5rem] text-center text-base font-semibold text-violet-900" aria-live="polite">
        {won ? `🎉 ${message}` : message}
      </p>
    </div>
  );
}
