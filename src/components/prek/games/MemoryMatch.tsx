"use client";

import { useEffect, useState } from "react";

const ICONS = ["🐶", "🐱", "🦁", "🐸", "🦊", "🐻"] as const;

type Card = { id: number; icon: string; matched: boolean };

function deal(): Card[] {
  const pairs = ICONS.flatMap((icon, i) => [
    { id: i * 2, icon, matched: false },
    { id: i * 2 + 1, icon, matched: false },
  ]);
  return pairs.sort(() => Math.random() - 0.5);
}

export function MemoryMatch() {
  const [cards, setCards] = useState<Card[]>(() => deal());
  const [flipped, setFlipped] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  const won = cards.every((c) => c.matched);

  useEffect(() => {
    if (flipped.length !== 2) return;
    const [a, b] = flipped;
    setLocked(true);
    setMoves((m) => m + 1);
    const t = window.setTimeout(() => {
      setCards((list) => {
        const ca = list.find((c) => c.id === a);
        const cb = list.find((c) => c.id === b);
        if (ca && cb && ca.icon === cb.icon) {
          return list.map((c) => (c.icon === ca.icon ? { ...c, matched: true } : c));
        }
        return list;
      });
      setFlipped([]);
      setLocked(false);
    }, 650);
    return () => window.clearTimeout(t);
  }, [flipped]);

  function flip(id: number) {
    if (locked || won) return;
    const card = cards.find((c) => c.id === id);
    if (!card || card.matched || flipped.includes(id) || flipped.length >= 2) return;
    setFlipped((f) => [...f, id]);
  }

  function reset() {
    setCards(deal());
    setFlipped([]);
    setMoves(0);
    setLocked(false);
  }

  return (
    <div className="space-y-5 bg-gradient-to-br from-amber-50 to-yellow-50 p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-semibold text-slate-700">
        <span className="rounded-full bg-white px-3 py-1 shadow-sm">Moves {moves}</span>
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-emerald-700 px-4 py-2 text-white shadow hover:bg-emerald-800"
        >
          New game
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3">
        {cards.map((card) => {
          const show = card.matched || flipped.includes(card.id);
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => flip(card.id)}
              disabled={card.matched}
              className={`flex aspect-square min-h-[72px] items-center justify-center rounded-2xl text-4xl shadow-md transition active:scale-95 ${
                show ? "bg-white ring-2 ring-amber-300" : "bg-gradient-to-br from-emerald-600 to-teal-600 text-white"
              }`}
              aria-label={show ? `Card ${card.icon}` : "Hidden card"}
            >
              {show ? card.icon : "?"}
            </button>
          );
        })}
      </div>
      <p className="min-h-[1.5rem] text-center text-base font-semibold text-amber-900" aria-live="polite">
        {won ? `You matched every pair in ${moves} moves!` : "Flip two cards — find the matching animals"}
      </p>
    </div>
  );
}
