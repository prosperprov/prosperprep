"use client";

import { useCallback, useMemo, useState } from "react";

const WORDS: { word: string; letter: string; emoji: string }[] = [
  { word: "Apple", letter: "A", emoji: "🍎" },
  { word: "Ball", letter: "B", emoji: "⚽" },
  { word: "Cat", letter: "C", emoji: "🐱" },
  { word: "Dog", letter: "D", emoji: "🐶" },
  { word: "Egg", letter: "E", emoji: "🥚" },
  { word: "Fish", letter: "F", emoji: "🐟" },
  { word: "Grape", letter: "G", emoji: "🍇" },
  { word: "Hat", letter: "H", emoji: "🎩" },
  { word: "Ice", letter: "I", emoji: "🍦" },
  { word: "Jam", letter: "J", emoji: "🫙" },
  { word: "Kite", letter: "K", emoji: "🪁" },
  { word: "Lion", letter: "L", emoji: "🦁" },
  { word: "Moon", letter: "M", emoji: "🌙" },
  { word: "Nest", letter: "N", emoji: "🪺" },
  { word: "Orange", letter: "O", emoji: "🍊" },
  { word: "Pig", letter: "P", emoji: "🐷" },
  { word: "Queen", letter: "Q", emoji: "👑" },
  { word: "Rainbow", letter: "R", emoji: "🌈" },
  { word: "Sun", letter: "S", emoji: "☀️" },
  { word: "Tree", letter: "T", emoji: "🌳" },
  { word: "Umbrella", letter: "U", emoji: "☂️" },
  { word: "Violin", letter: "V", emoji: "🎻" },
  { word: "Watermelon", letter: "W", emoji: "🍉" },
  { word: "Xylophone", letter: "X", emoji: "🎶" },
  { word: "Yo-yo", letter: "Y", emoji: "🪀" },
  { word: "Zebra", letter: "Z", emoji: "🦓" },
];

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

type Round = {
  word: string;
  letter: string;
  emoji: string;
  choices: string[];
};

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function makeRound(exclude?: string): Round {
  const pool = exclude ? WORDS.filter((w) => w.word !== exclude) : WORDS;
  const pick = pool[Math.floor(Math.random() * pool.length)]!;
  const distractors = LETTERS.filter((l) => l !== pick.letter);
  const choices = shuffle([pick.letter, ...shuffle(distractors).slice(0, 3)]);
  return { word: pick.word, letter: pick.letter, emoji: pick.emoji, choices };
}

export function LetterSound() {
  const [round, setRound] = useState<Round>(() => makeRound());
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<"idle" | "yes" | "no">("idle");

  const next = useCallback(() => {
    setRound((r) => makeRound(r.word));
    setFeedback("idle");
  }, []);

  const hint = useMemo(() => `${round.emoji} ${round.word}`, [round]);

  function onPick(letter: string) {
    if (feedback !== "idle") return;
    if (letter === round.letter) {
      setScore((s) => s + 1);
      setFeedback("yes");
      window.setTimeout(next, 700);
    } else {
      setFeedback("no");
      window.setTimeout(() => setFeedback("idle"), 600);
    }
  }

  return (
    <div className="space-y-5 bg-gradient-to-br from-orange-50 to-rose-50 p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-semibold text-slate-700">
        <span className="rounded-full bg-white px-3 py-1 shadow-sm">Score {score}</span>
        <span className="rounded-full bg-white px-3 py-1 shadow-sm">Beginning letter</span>
      </div>

      <div className="flex flex-col items-center gap-2 rounded-3xl bg-white/90 p-6 shadow-inner">
        <span className="text-7xl" aria-hidden>
          {round.emoji}
        </span>
        <p className="text-2xl font-extrabold text-slate-900">{round.word}</p>
        <p className="text-sm text-slate-600">What letter does this word start with?</p>
        <span className="sr-only">{hint}</span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {round.choices.map((letter) => (
          <button
            key={`${round.word}-${letter}`}
            type="button"
            onClick={() => onPick(letter)}
            className="flex min-h-[72px] items-center justify-center rounded-2xl bg-rose-500 text-3xl font-extrabold text-white shadow-lg transition hover:bg-rose-600 active:scale-95"
            aria-label={`Letter ${letter}`}
          >
            {letter}
          </button>
        ))}
      </div>
      <p className="min-h-[1.5rem] text-center text-base font-semibold text-rose-800" aria-live="polite">
        {feedback === "yes" ? `Yes! ${round.word} starts with ${round.letter}!` : feedback === "no" ? "Try another letter" : "Tap the beginning letter"}
      </p>
    </div>
  );
}
