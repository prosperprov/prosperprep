"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Star, Volume2 } from "lucide-react";
import type { SpanishExercise, SpanishLesson as SpanishLessonData } from "@/lib/spanishUnit";
import { markLessonComplete } from "@/lib/spanishProgress";

function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const a = next[i]!;
    const b = next[j]!;
    next[i] = b;
    next[j] = a;
  }
  return next;
}

function pickSpanishVoice(): SpeechSynthesisVoice | undefined {
  if (typeof window === "undefined" || !window.speechSynthesis) return undefined;
  const rank = (lang: string) => {
    const value = lang.toLowerCase();
    if (value.startsWith("es-mx")) return 0;
    if (value.startsWith("es-es")) return 1;
    if (value.startsWith("es")) return 2;
    return 9;
  };
  return [...window.speechSynthesis.getVoices()]
    .filter((voice) => rank(voice.lang) < 9)
    .sort((a, b) => rank(a.lang) - rank(b.lang))[0];
}

function speakSpanish(text: string, onFail: () => void) {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    onFail();
    return;
  }
  try {
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-MX";
    utterance.rate = 0.92;
    const voice = pickSpanishVoice();
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    }
    utterance.onerror = () => onFail();
    synth.speak(utterance);
  } catch {
    onFail();
  }
}

const checkClass =
  "mt-4 flex min-h-[56px] w-full items-center justify-center rounded-2xl bg-emerald-800 px-4 text-lg font-extrabold text-white hover:bg-emerald-900";

const choiceClass = (state: "idle" | "selected" | "right" | "wrong") => {
  const base =
    "flex min-h-[56px] w-full items-center justify-center rounded-2xl border-2 px-4 text-lg font-bold transition";
  if (state === "right") return `${base} border-emerald-600 bg-emerald-100 text-emerald-950`;
  if (state === "wrong") return `${base} border-rose-500 bg-rose-50 text-rose-950`;
  if (state === "selected") return `${base} border-emerald-700 bg-emerald-50 text-emerald-950`;
  return `${base} border-slate-200 bg-white text-slate-900 hover:border-emerald-400`;
};

function ResultBanner({
  ok,
  detail,
}: {
  ok: boolean;
  detail?: string;
}) {
  return (
    <div
      className={`mt-4 rounded-2xl px-4 py-3 text-base font-semibold ${
        ok ? "bg-emerald-600 text-white" : "bg-rose-700 text-white"
      }`}
      role="status"
    >
      <p>{ok ? "Correct." : "Not quite."}</p>
      {!ok && detail ? <p className="mt-1 font-bold">{detail}</p> : null}
    </div>
  );
}

function ChoiceExerciseView({
  prompt,
  detail,
  choices,
  answer,
  onNext,
}: {
  prompt: string;
  detail?: string;
  choices: string[];
  answer: string;
  onNext: () => void;
}) {
  const [order, setOrder] = useState<string[] | null>(null);
  const [picked, setPicked] = useState<string | null>(null);
  const [phase, setPhase] = useState<"play" | "correct" | "wrong">("play");
  const [hint, setHint] = useState("");

  useEffect(() => {
    setOrder(shuffle(choices));
  }, [choices]);

  const locked = phase !== "play";

  function grade() {
    if (!picked) {
      setHint("Choose an answer, then tap Check.");
      return;
    }
    setHint("");
    setPhase(picked === answer ? "correct" : "wrong");
  }

  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-wide text-emerald-800">{prompt}</p>
      {detail ? (
        <p className="mt-3 text-center text-3xl font-extrabold text-slate-900">{detail}</p>
      ) : null}
      <div className="mt-5 grid gap-3">
        {(order ?? choices).map((choice) => {
          let state: "idle" | "selected" | "right" | "wrong" = picked === choice ? "selected" : "idle";
          if (locked && choice === answer) state = "right";
          else if (locked && choice === picked && picked !== answer) state = "wrong";
          return (
            <button
              key={choice}
              type="button"
              className={choiceClass(state)}
              onClick={() => {
                if (locked) return;
                setPicked(choice);
                setHint("");
              }}
            >
              {choice}
            </button>
          );
        })}
      </div>
      {hint ? <p className="mt-3 text-sm font-semibold text-amber-800">{hint}</p> : null}
      {phase === "correct" ? <ResultBanner ok /> : null}
      {phase === "wrong" ? <ResultBanner ok={false} detail={`The answer is ${answer}.`} /> : null}
      {locked ? (
        <button type="button" className={checkClass} onClick={onNext}>
          Continue
        </button>
      ) : (
        <button type="button" className={checkClass} onClick={grade}>
          Check
        </button>
      )}
    </div>
  );
}

function ListenExerciseView({
  prompt,
  speak,
  choices,
  answer,
  onNext,
}: {
  prompt: string;
  speak: string;
  choices: string[];
  answer: string;
  onNext: () => void;
}) {
  const [fallback, setFallback] = useState(false);
  const [heard, setHeard] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) setFallback(true);
  }, []);

  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-wide text-emerald-800">{prompt}</p>
      <button
        type="button"
        className="mx-auto mt-4 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-800 text-white shadow-lg hover:bg-emerald-900"
        onClick={() => {
          setHeard(true);
          speakSpanish(speak, () => setFallback(true));
        }}
        aria-label="Play the Spanish phrase"
      >
        <Volume2 className="h-10 w-10" />
      </button>
      <p className="mt-2 text-center text-sm font-semibold text-slate-600">
        {heard ? "Tap to hear it again" : "Tap to listen"}
      </p>
      {fallback ? (
        <p className="mt-3 rounded-2xl bg-amber-50 px-4 py-3 text-center text-base text-slate-800 ring-1 ring-amber-200">
          Sound is not available on this device. The phrase is{" "}
          <span className="font-extrabold text-emerald-950">{speak}</span>.
        </p>
      ) : null}
      <div className="mt-4">
        <ChoiceExerciseView prompt="Choose the English." choices={choices} answer={answer} onNext={onNext} />
      </div>
    </div>
  );
}

function BuildExerciseView({
  prompt,
  meaning,
  answer,
  extra,
  onNext,
}: {
  prompt: string;
  meaning: string;
  answer: string[];
  extra: string[];
  onNext: () => void;
}) {
  const [bank, setBank] = useState<string[] | null>(null);
  const [built, setBuilt] = useState<string[]>([]);
  const [phase, setPhase] = useState<"play" | "correct" | "wrong">("play");
  const [hint, setHint] = useState("");

  useEffect(() => {
    setBank(shuffle([...answer, ...extra]));
    setBuilt([]);
  }, [answer, extra]);

  const locked = phase !== "play";

  function take(word: string) {
    if (locked || !bank) return;
    const index = bank.indexOf(word);
    if (index < 0) return;
    setBank([...bank.slice(0, index), ...bank.slice(index + 1)]);
    setBuilt((prev) => [...prev, word]);
    setHint("");
  }

  function putBack(index: number) {
    if (locked) return;
    const word = built[index];
    if (!word) return;
    setBuilt(built.filter((_, i) => i !== index));
    setBank((prev) => (prev ? [...prev, word] : [word]));
  }

  function grade() {
    if (built.length === 0) {
      setHint("Tap words into the answer, then tap Check.");
      return;
    }
    setHint("");
    setPhase(built.join(" ") === answer.join(" ") ? "correct" : "wrong");
  }

  const chip =
    "min-h-[48px] rounded-xl px-4 py-2 text-lg font-bold";

  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-wide text-emerald-800">{prompt}</p>
      <p className="mt-3 text-center text-2xl font-extrabold text-slate-900">{meaning}</p>
      <div className="mt-4 flex min-h-[72px] flex-wrap gap-2 rounded-2xl border-2 border-dashed border-emerald-300 bg-emerald-50/60 p-3">
        {built.length === 0 ? (
          <span className="self-center text-sm text-slate-500">Your sentence</span>
        ) : (
          built.map((word, index) => (
            <button
              key={`${word}-${index}`}
              type="button"
              className={`${chip} bg-white text-emerald-950 ring-2 ring-emerald-600`}
              onClick={() => putBack(index)}
            >
              {word}
            </button>
          ))
        )}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {(bank ?? []).map((word, index) => (
          <button
            key={`${word}-${index}`}
            type="button"
            className={`${chip} bg-slate-100 text-slate-900 ring-1 ring-slate-200 hover:bg-white`}
            onClick={() => take(word)}
          >
            {word}
          </button>
        ))}
      </div>
      {hint ? <p className="mt-3 text-sm font-semibold text-amber-800">{hint}</p> : null}
      {phase === "correct" ? <ResultBanner ok /> : null}
      {phase === "wrong" ? (
        <ResultBanner ok={false} detail={`The answer is ${answer.join(" ")}.`} />
      ) : null}
      {locked ? (
        <button type="button" className={checkClass} onClick={onNext}>
          Continue
        </button>
      ) : (
        <button type="button" className={checkClass} onClick={grade}>
          Check
        </button>
      )}
    </div>
  );
}

type Chip = { pairId: string; label: string };

function MatchExerciseView({
  prompt,
  pairs,
  onNext,
}: {
  prompt: string;
  pairs: { es: string; en: string }[];
  onNext: () => void;
}) {
  const [left, setLeft] = useState<Chip[] | null>(null);
  const [right, setRight] = useState<Chip[] | null>(null);
  const [selLeft, setSelLeft] = useState<number | null>(null);
  const [selRight, setSelRight] = useState<number | null>(null);
  const [links, setLinks] = useState<Record<number, number>>({});
  const [phase, setPhase] = useState<"play" | "correct" | "wrong">("play");
  const [hint, setHint] = useState("");

  useEffect(() => {
    setLeft(shuffle(pairs.map((pair, index) => ({ pairId: String(index), label: pair.es }))));
    setRight(shuffle(pairs.map((pair, index) => ({ pairId: String(index), label: pair.en }))));
    setLinks({});
    setSelLeft(null);
    setSelRight(null);
  }, [pairs]);

  const locked = phase !== "play";

  function commit(li: number, ri: number) {
    setLinks((prev) => {
      const next: Record<number, number> = {};
      for (const [key, value] of Object.entries(prev)) {
        if (value !== ri) next[Number(key)] = value;
      }
      next[li] = ri;
      return next;
    });
    setSelLeft(null);
    setSelRight(null);
    setHint("");
  }

  function tapLeft(index: number) {
    if (locked) return;
    if (links[index] !== undefined && selLeft === null && selRight === null) {
      setLinks((prev) => {
        const next = { ...prev };
        delete next[index];
        return next;
      });
      return;
    }
    if (selRight !== null) commit(index, selRight);
    else setSelLeft(index);
  }

  function tapRight(index: number) {
    if (locked) return;
    const owner = Object.entries(links).find(([, value]) => value === index)?.[0];
    if (owner !== undefined && selLeft === null && selRight === null) {
      setLinks((prev) => {
        const next = { ...prev };
        delete next[Number(owner)];
        return next;
      });
      return;
    }
    if (selLeft !== null) commit(selLeft, index);
    else setSelRight(index);
  }

  function grade() {
    if (!left || !right || Object.keys(links).length < left.length) {
      setHint("Match every pair, then tap Check.");
      return;
    }
    const ok = left.every((chip, index) => right[links[index]!]?.pairId === chip.pairId);
    setHint("");
    setPhase(ok ? "correct" : "wrong");
  }

  function tone(active: boolean, linked: boolean) {
    if (active) return "border-amber-400 bg-amber-50 text-emerald-950";
    if (linked) return "border-emerald-600 bg-emerald-50 text-emerald-950";
    return "border-slate-200 bg-white text-slate-900";
  }

  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-wide text-emerald-800">{prompt}</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="grid gap-3">
          {(left ?? []).map((chip, index) => (
            <button
              key={`l-${chip.pairId}`}
              type="button"
              className={`min-h-[56px] rounded-2xl border-2 px-2 text-base font-bold ${tone(
                selLeft === index,
                links[index] !== undefined,
              )}`}
              onClick={() => tapLeft(index)}
            >
              {chip.label}
            </button>
          ))}
        </div>
        <div className="grid gap-3">
          {(right ?? []).map((chip, index) => {
            const linked = Object.values(links).includes(index);
            return (
              <button
                key={`r-${chip.pairId}`}
                type="button"
                className={`min-h-[56px] rounded-2xl border-2 px-2 text-base font-bold ${tone(
                  selRight === index,
                  linked,
                )}`}
                onClick={() => tapRight(index)}
              >
                {chip.label}
              </button>
            );
          })}
        </div>
      </div>
      {hint ? <p className="mt-3 text-sm font-semibold text-amber-800">{hint}</p> : null}
      {phase === "correct" ? <ResultBanner ok /> : null}
      {phase === "wrong" ? (
        <div className="mt-4 rounded-2xl bg-rose-700 px-4 py-3 text-white" role="status">
          <p className="font-semibold">Not quite. The matches are:</p>
          <ul className="mt-2 space-y-1 font-bold">
            {pairs.map((pair) => (
              <li key={pair.es}>
                {pair.es} — {pair.en}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {locked ? (
        <button type="button" className={checkClass} onClick={onNext}>
          Continue
        </button>
      ) : (
        <button type="button" className={checkClass} onClick={grade}>
          Check
        </button>
      )}
    </div>
  );
}

function ExerciseBody({ exercise, onNext }: { exercise: SpanishExercise; onNext: () => void }) {
  if (exercise.kind === "choice") {
    return (
      <ChoiceExerciseView
        prompt={exercise.prompt}
        detail={exercise.detail}
        choices={exercise.choices}
        answer={exercise.answer}
        onNext={onNext}
      />
    );
  }
  if (exercise.kind === "listen") {
    return (
      <ListenExerciseView
        prompt={exercise.prompt}
        speak={exercise.speak}
        choices={exercise.choices}
        answer={exercise.answer}
        onNext={onNext}
      />
    );
  }
  if (exercise.kind === "build") {
    return (
      <BuildExerciseView
        prompt={exercise.prompt}
        meaning={exercise.meaning}
        answer={exercise.answer}
        extra={exercise.extra}
        onNext={onNext}
      />
    );
  }
  return <MatchExerciseView prompt={exercise.prompt} pairs={exercise.pairs} onNext={onNext} />;
}

export function SpanishLesson({ lesson }: { lesson: SpanishLessonData }) {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const total = lesson.exercises.length;
  const exercise = lesson.exercises[index];

  useEffect(() => {
    if (finished) markLessonComplete(lesson.slug);
  }, [finished, lesson.slug]);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, []);

  const progress = finished ? 100 : Math.round((index / total) * 100);

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-emerald-950 via-emerald-900 to-slate-950">
      <div className="mx-auto max-w-lg px-4 py-5 md:py-8">
        <Link
          href="/spanish"
          className="inline-flex min-h-[44px] items-center rounded-full bg-white/10 px-4 text-sm font-bold text-white ring-1 ring-white/20 hover:bg-white/20"
        >
          ← Unit 1
        </Link>
        <div className="mt-4 flex items-center gap-3">
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-emerald-800" aria-hidden>
            <div className="h-full rounded-full bg-amber-300 transition-all" style={{ width: `${progress}%` }} />
          </div>
          <span className="text-sm font-bold text-emerald-50">
            {finished ? total : index + 1}/{total}
          </span>
        </div>
        <h1 className="mt-4 text-center text-2xl font-extrabold text-white">{lesson.title}</h1>
        <div className="mt-4 rounded-3xl bg-white p-4 shadow-xl shadow-black/20 sm:p-6">
          {finished || !exercise ? (
            <div className="py-6 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-300 text-emerald-950">
                <Star className="h-10 w-10 fill-emerald-800 text-emerald-800" />
              </div>
              <p className="mt-4 text-2xl font-extrabold text-slate-900">You finished</p>
              <p className="mt-1 text-lg text-slate-700">{lesson.title}</p>
              <Link href="/spanish" className={`${checkClass} mt-6`}>
                Back to the path
              </Link>
            </div>
          ) : (
            <ExerciseBody
              key={exercise.id}
              exercise={exercise}
              onNext={() => {
                if (index + 1 >= total) setFinished(true);
                else setIndex((value) => value + 1);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
