"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Star, Volume2 } from "lucide-react";
import type { SpanishLesson as SpanishLessonData, SpanishStep } from "@/lib/spanishUnit";
import { markLessonComplete } from "@/lib/spanishProgress";

let speakSerial = 0;

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

function speakSequence(parts: string[], onFail?: () => void) {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    onFail?.();
    return;
  }
  const synth = window.speechSynthesis;
  const queue = parts.map((part) => part.trim()).filter(Boolean);
  if (queue.length === 0) return;
  const serial = ++speakSerial;
  try {
    synth.cancel();
  } catch {
    onFail?.();
    return;
  }
  const playNext = () => {
    if (serial !== speakSerial) return;
    const text = queue.shift();
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-MX";
    utterance.rate = 0.9;
    const voice = pickSpanishVoice();
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    }
    utterance.onend = () => playNext();
    utterance.onerror = (event) => {
      if (event.error === "interrupted" || event.error === "canceled") return;
      onFail?.();
    };
    synth.speak(utterance);
  };
  window.setTimeout(playNext, 60);
}

function speakSpanish(text: string, onFail?: () => void) {
  speakSequence([text], onFail);
}

function enterAudio(step: SpanishStep): string[] | null {
  if (step.kind === "teach") return [step.es];
  if (step.kind === "remind") return step.items.map((item) => item.es);
  if (step.kind === "listen") return [step.speak];
  if (step.kind === "choice" && step.promptLang === "es") return [step.promptText];
  return null;
}

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

function Speaker({
  text,
  large = false,
  onDark = false,
  onFail,
}: {
  text: string;
  large?: boolean;
  onDark?: boolean;
  onFail?: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={`Hear ${text}`}
      className={`flex shrink-0 items-center justify-center rounded-full shadow-md ${
        large ? "h-24 w-24" : "h-14 w-14"
      } ${onDark ? "bg-white text-emerald-800" : "bg-emerald-800 text-white hover:bg-emerald-900"}`}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        speakSpanish(text, onFail);
      }}
    >
      <Volume2 className={large ? "h-11 w-11" : "h-7 w-7"} />
    </button>
  );
}

function useAutoAudio(script: string, enteredWithAudio: boolean, onFail: () => void) {
  useEffect(() => {
    if (enteredWithAudio || !script) return;
    const parts = script.split("\n");
    const timer = window.setTimeout(() => speakSequence(parts, onFail), 180);
    return () => window.clearTimeout(timer);
  }, [enteredWithAudio, script, onFail]);
}

function SoundNote({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <p className="mt-3 text-center text-sm font-semibold text-slate-600">
      Sound is not available on this device. Read the Spanish on the screen.
    </p>
  );
}

const actionClass =
  "flex min-h-[56px] w-full items-center justify-center rounded-2xl px-4 text-lg font-extrabold";

function GradeDock({
  phase,
  playLabel,
  onPlay,
  onContinue,
  spanish,
  detail,
}: {
  phase: "play" | "correct" | "wrong";
  playLabel: string;
  onPlay: () => void;
  onContinue: () => void;
  spanish?: string;
  detail?: string;
}) {
  const graded = phase !== "play";
  const tone = phase === "correct" ? "bg-emerald-600" : "bg-rose-700";
  return (
    <div className={`mt-6 px-4 py-4 sm:px-6 ${graded ? tone : "border-t border-slate-100 bg-slate-50"}`}>
      {graded ? (
        <div className="mb-3 text-white" role="status">
          <p className="text-lg font-extrabold">{phase === "correct" ? "Correct" : "Not quite"}</p>
          {detail ? <p className="mt-1 text-base font-semibold">{detail}</p> : null}
          {spanish ? (
            <div className="mt-2 flex items-center gap-3">
              <Speaker text={spanish} onDark />
              <p className="text-2xl font-extrabold leading-tight">{spanish}</p>
            </div>
          ) : null}
        </div>
      ) : null}
      <button
        type="button"
        className={`${actionClass} ${graded ? "bg-white text-emerald-950" : "bg-emerald-800 text-white hover:bg-emerald-900"}`}
        onClick={graded ? onContinue : onPlay}
      >
        {graded ? "Continue" : playLabel}
      </button>
    </div>
  );
}

function TeachCard({
  kicker,
  en,
  es,
  enteredWithAudio,
  onContinue,
}: {
  kicker: string;
  en: string;
  es: string;
  enteredWithAudio: boolean;
  onContinue: () => void;
}) {
  const [failed, setFailed] = useState(false);
  const fail = useRef(() => setFailed(true)).current;
  useAutoAudio(es, enteredWithAudio, fail);
  return (
    <>
      <div className="px-4 py-6 text-center sm:px-6 sm:py-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">{kicker}</p>
        <p className="mt-6 text-3xl font-extrabold text-slate-900">{en}</p>
        <p className="my-3 text-2xl font-bold text-slate-400" aria-hidden>
          =
        </p>
        <p className="text-5xl font-extrabold leading-tight text-emerald-800">{es}</p>
        <div className="mt-6 flex justify-center">
          <Speaker text={es} large onFail={fail} />
        </div>
        <SoundNote show={failed} />
      </div>
      <div className="border-t border-slate-100 bg-slate-50 px-4 py-4 sm:px-6">
        <button type="button" className={`${actionClass} bg-emerald-800 text-white hover:bg-emerald-900`} onClick={onContinue}>
          Continue
        </button>
      </div>
    </>
  );
}

function RemindCard({
  items,
  enteredWithAudio,
  onContinue,
}: {
  items: { en: string; es: string }[];
  enteredWithAudio: boolean;
  onContinue: () => void;
}) {
  const [failed, setFailed] = useState(false);
  const fail = useRef(() => setFailed(true)).current;
  useAutoAudio(items.map((item) => item.es).join("\n"), enteredWithAudio, fail);
  return (
    <>
      <div className="px-4 py-6 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Remember</p>
        <div className="mt-5 grid gap-3">
          {items.map((item) => (
            <div key={item.es} className="flex items-center gap-3 rounded-2xl bg-emerald-50 px-4 py-3">
              <Speaker text={item.es} onFail={fail} />
              <p className="text-xl font-extrabold leading-tight text-emerald-950">
                {item.en} = {item.es}
              </p>
            </div>
          ))}
        </div>
        <SoundNote show={failed} />
      </div>
      <div className="border-t border-slate-100 bg-slate-50 px-4 py-4 sm:px-6">
        <button type="button" className={`${actionClass} bg-emerald-800 text-white hover:bg-emerald-900`} onClick={onContinue}>
          Continue
        </button>
      </div>
    </>
  );
}

const choiceClass = (state: "idle" | "selected" | "right" | "wrong") => {
  const base = "flex min-h-[56px] flex-1 items-center justify-center rounded-2xl border-2 px-3 text-lg font-bold";
  if (state === "right") return `${base} border-emerald-600 bg-emerald-100 text-emerald-950`;
  if (state === "wrong") return `${base} border-rose-500 bg-rose-50 text-rose-950`;
  if (state === "selected") return `${base} border-emerald-700 bg-emerald-50 text-emerald-950`;
  return `${base} border-slate-200 bg-white text-slate-900`;
};

function ChoiceCard({
  prompt,
  promptText,
  promptLang,
  choices,
  answer,
  speak,
  enteredWithAudio,
  onContinue,
}: {
  prompt: string;
  promptText: string;
  promptLang: "en" | "es";
  choices: { text: string; lang: "en" | "es" }[];
  answer: string;
  speak: string;
  enteredWithAudio: boolean;
  onContinue: () => void;
}) {
  const [order, setOrder] = useState(choices);
  const [picked, setPicked] = useState<string | null>(null);
  const [phase, setPhase] = useState<"play" | "correct" | "wrong">("play");
  const [hint, setHint] = useState("");
  const [failed, setFailed] = useState(false);
  const fail = useRef(() => setFailed(true)).current;
  useAutoAudio(promptLang === "es" ? promptText : "", enteredWithAudio, fail);

  useEffect(() => {
    setOrder(shuffle(choices));
  }, [choices]);

  const locked = phase !== "play";

  function grade() {
    if (!picked) {
      setHint("Choose an answer, then tap Check.");
      return;
    }
    const ok = picked === answer;
    setPhase(ok ? "correct" : "wrong");
    setHint("");
    speakSpanish(speak, fail);
  }

  return (
    <>
      <div className="px-4 py-6 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Your turn</p>
        <p className="mt-3 text-center text-base font-bold text-slate-600">{prompt}</p>
        <div className="mt-4 flex items-center justify-center gap-3">
          {promptLang === "es" ? <Speaker text={promptText} large onFail={fail} /> : null}
          <p className="text-center text-4xl font-extrabold leading-tight text-slate-900">{promptText}</p>
        </div>
        <SoundNote show={failed && promptLang === "es"} />
        <div className="mt-6 grid gap-3">
          {order.map((choice) => {
            let state: "idle" | "selected" | "right" | "wrong" = picked === choice.text ? "selected" : "idle";
            if (locked && choice.text === answer) state = "right";
            else if (locked && choice.text === picked && picked !== answer) state = "wrong";
            return (
              <div key={choice.text} className="flex items-center gap-2">
                {choice.lang === "es" ? <Speaker text={choice.text} onFail={fail} /> : null}
                <button
                  type="button"
                  className={choiceClass(state)}
                  onClick={() => {
                    if (locked) return;
                    setPicked(choice.text);
                    setHint("");
                    if (choice.lang === "es") speakSpanish(choice.text, fail);
                  }}
                >
                  {choice.text}
                </button>
              </div>
            );
          })}
        </div>
        {hint ? <p className="mt-3 text-center text-sm font-semibold text-amber-800">{hint}</p> : null}
      </div>
      <GradeDock
        phase={phase}
        playLabel="Check"
        onPlay={grade}
        onContinue={onContinue}
        spanish={speak}
        detail={phase === "wrong" ? `The answer is ${answer}.` : undefined}
      />
    </>
  );
}

function ListenCard({
  prompt,
  speak,
  choices,
  answer,
  enteredWithAudio,
  onContinue,
}: {
  prompt: string;
  speak: string;
  choices: string[];
  answer: string;
  enteredWithAudio: boolean;
  onContinue: () => void;
}) {
  const [order, setOrder] = useState(choices);
  const [picked, setPicked] = useState<string | null>(null);
  const [phase, setPhase] = useState<"play" | "correct" | "wrong">("play");
  const [hint, setHint] = useState("");
  const [failed, setFailed] = useState(false);
  const fail = useRef(() => setFailed(true)).current;
useAutoAudio(speak, enteredWithAudio, fail);

  useEffect(() => {
    setOrder(shuffle(choices));
  }, [choices]);

  const locked = phase !== "play";

  function grade() {
    if (!picked) {
      setHint("Choose an answer, then tap Check.");
      return;
    }
    const ok = picked === answer;
    setPhase(ok ? "correct" : "wrong");
    setHint("");
    speakSpanish(speak, fail);
  }

  return (
    <>
      <div className="px-4 py-6 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Your turn</p>
        <p className="mt-3 text-base font-bold text-slate-600">{prompt}</p>
        <div className="mt-5 flex justify-center">
          <Speaker text={speak} large onFail={fail} />
        </div>
        <p className="mt-2 text-sm font-semibold text-slate-500">Tap the speaker to hear it again</p>
        {failed ? (
          <p className="mt-3 rounded-2xl bg-amber-50 px-4 py-3 text-base text-slate-800 ring-1 ring-amber-200">
            Sound is not available on this device. The phrase is{" "}
            <span className="font-extrabold text-emerald-950">{speak}</span>.
          </p>
        ) : null}
        <div className="mt-6 grid gap-3">
          {order.map((choice) => {
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
      </div>
      <GradeDock
        phase={phase}
        playLabel="Check"
        onPlay={grade}
        onContinue={onContinue}
        spanish={speak}
        detail={phase === "wrong" ? `The answer is ${answer}.` : undefined}
      />
    </>
  );
}

function BuildCard({
  prompt,
  meaning,
  answer,
  extra,
  speak,
  onContinue,
}: {
  prompt: string;
  meaning: string;
  answer: string[];
  extra: string[];
  speak: string;
  onContinue: () => void;
}) {
  const [bank, setBank] = useState<string[] | null>(null);
  const [built, setBuilt] = useState<string[]>([]);
  const [phase, setPhase] = useState<"play" | "correct" | "wrong">("play");
  const [hint, setHint] = useState("");
  const [failed, setFailed] = useState(false);
  const fail = useRef(() => setFailed(true)).current;

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
    speakSpanish(word, fail);
  }

  function putBack(index: number) {
    if (locked) return;
    const word = built[index];
    if (!word) return;
    setBuilt(built.filter((_, i) => i !== index));
    setBank((prev) => (prev ? [...prev, word] : [word]));
    speakSpanish(word, fail);
  }

  function grade() {
    if (built.length === 0) {
      setHint("Tap words into the answer, then tap Check.");
      return;
    }
    const ok = built.join(" ") === answer.join(" ");
    setPhase(ok ? "correct" : "wrong");
    setHint("");
    speakSpanish(speak, fail);
  }

  const chip = "min-h-[48px] rounded-xl px-4 py-2 text-lg font-bold";

  return (
    <>
      <div className="px-4 py-6 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Your turn</p>
        <p className="mt-3 text-center text-base font-bold text-slate-600">{prompt}</p>
        <p className="mt-3 text-center text-3xl font-extrabold text-slate-900">{meaning}</p>
        <div className="mt-4 flex min-h-[76px] flex-wrap gap-2 rounded-2xl border-2 border-dashed border-emerald-300 bg-emerald-50 p-3">
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
              key={`${word}-bank-${index}`}
              type="button"
              className={`${chip} bg-slate-100 text-slate-900 ring-1 ring-slate-200`}
              onClick={() => take(word)}
            >
              {word}
            </button>
          ))}
        </div>
        <SoundNote show={failed} />
        {hint ? <p className="mt-3 text-center text-sm font-semibold text-amber-800">{hint}</p> : null}
      </div>
      <GradeDock
        phase={phase}
        playLabel="Check"
        onPlay={grade}
        onContinue={onContinue}
        spanish={speak}
        detail={phase === "wrong" ? `The answer is ${answer.join(" ")}.` : undefined}
      />
    </>
  );
}

type Chip = { pairId: string; label: string };

function MatchCard({
  prompt,
  pairs,
  onContinue,
}: {
  prompt: string;
  pairs: { es: string; en: string }[];
  onContinue: () => void;
}) {
  const [left, setLeft] = useState<Chip[] | null>(null);
  const [right, setRight] = useState<Chip[] | null>(null);
  const [selLeft, setSelLeft] = useState<number | null>(null);
  const [selRight, setSelRight] = useState<number | null>(null);
  const [links, setLinks] = useState<Record<number, number>>({});
  const [phase, setPhase] = useState<"play" | "correct" | "wrong">("play");
  const [hint, setHint] = useState("");
  const [failed, setFailed] = useState(false);
  const fail = useRef(() => setFailed(true)).current;
  const spanishLine = pairs.map((pair) => pair.es).join(". ");

  useEffect(() => {
    setLeft(shuffle(pairs.map((pair, index) => ({ pairId: String(index), label: pair.es }))));
    setRight(shuffle(pairs.map((pair, index) => ({ pairId: String(index), label: pair.en }))));
    setLinks({});
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
    if (locked || !left) return;
    const word = left[index]?.label;
    if (word) speakSpanish(word, fail);
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
    setPhase(ok ? "correct" : "wrong");
    setHint("");
    speakSequence(pairs.map((pair) => pair.es), fail);
  }

  function tone(active: boolean, linked: boolean) {
    if (active) return "border-amber-400 bg-amber-50 text-emerald-950";
    if (linked) return "border-emerald-600 bg-emerald-50 text-emerald-950";
    return "border-slate-200 bg-white text-slate-900";
  }

  return (
    <>
      <div className="px-4 py-6 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Your turn</p>
        <p className="mt-3 text-center text-base font-bold text-slate-600">{prompt}</p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="grid content-start gap-3">
            {(left ?? []).map((chip, index) => (
              <div key={`l-${chip.pairId}`} className="flex items-stretch gap-2">
                <Speaker text={chip.label} onFail={fail} />
                <button
                  type="button"
                  className={`min-h-[56px] flex-1 rounded-2xl border-2 px-2 text-base font-bold ${tone(
                    selLeft === index,
                    links[index] !== undefined,
                  )}`}
                  onClick={() => tapLeft(index)}
                >
                  {chip.label}
                </button>
              </div>
            ))}
          </div>
          <div className="grid content-start gap-3">
            {(right ?? []).map((chip, index) => (
              <button
                key={`r-${chip.pairId}`}
                type="button"
                className={`min-h-[56px] rounded-2xl border-2 px-2 text-base font-bold ${tone(
                  selRight === index,
                  Object.values(links).includes(index),
                )}`}
                onClick={() => tapRight(index)}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>
        <SoundNote show={failed} />
        {hint ? <p className="mt-3 text-center text-sm font-semibold text-amber-800">{hint}</p> : null}
        {phase === "wrong" ? (
          <ul className="mt-4 space-y-1 text-base font-bold text-rose-800">
            {pairs.map((pair) => (
              <li key={pair.es}>
                {pair.es} — {pair.en}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <GradeDock
        phase={phase}
        playLabel="Check"
        onPlay={grade}
        onContinue={onContinue}
        spanish={spanishLine}
        detail={phase === "wrong" ? "The matches are listed above." : undefined}
      />
    </>
  );
}

function StepBody({
  step,
  enteredWithAudio,
  onContinue,
}: {
  step: SpanishStep;
  enteredWithAudio: boolean;
  onContinue: () => void;
}) {
  if (step.kind === "teach") {
    return (
      <TeachCard
        kicker="New word"
        en={step.en}
        es={step.es}
        enteredWithAudio={enteredWithAudio}
        onContinue={onContinue}
      />
    );
  }
  if (step.kind === "remind") {
    return <RemindCard items={step.items} enteredWithAudio={enteredWithAudio} onContinue={onContinue} />;
  }
  if (step.kind === "choice") {
    return (
      <ChoiceCard
        prompt={step.prompt}
        promptText={step.promptText}
        promptLang={step.promptLang}
        choices={step.choices}
        answer={step.answer}
        speak={step.speak}
        enteredWithAudio={enteredWithAudio}
        onContinue={onContinue}
      />
    );
  }
  if (step.kind === "listen") {
    return (
      <ListenCard
        prompt={step.prompt}
        speak={step.speak}
        choices={step.choices}
        answer={step.answer}
        enteredWithAudio={enteredWithAudio}
        onContinue={onContinue}
      />
    );
  }
  if (step.kind === "build") {
    return (
      <BuildCard
        prompt={step.prompt}
        meaning={step.meaning}
        answer={step.answer}
        extra={step.extra}
        speak={step.speak}
        onContinue={onContinue}
      />
    );
  }
  return <MatchCard prompt={step.prompt} pairs={step.pairs} onContinue={onContinue} />;
}

export function SpanishLesson({ lesson }: { lesson: SpanishLessonData }) {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [enteredWithAudio, setEnteredWithAudio] = useState(false);
  const total = lesson.steps.length;
  const step = lesson.steps[index];

  useEffect(() => {
    if (finished) markLessonComplete(lesson.slug);
  }, [finished, lesson.slug]);

  useEffect(() => {
    return () => {
      speakSerial += 1;
      if (typeof window !== "undefined" && window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, []);

  function continueLesson() {
    if (!step || index + 1 >= total) {
      setFinished(true);
      return;
    }
    const next = lesson.steps[index + 1]!;
    const audio = enterAudio(next);
    if (audio) {
      setEnteredWithAudio(true);
      speakSequence(audio);
    } else {
      setEnteredWithAudio(false);
    }
    setIndex(index + 1);
  }

  const progress = finished ? 100 : Math.round((index / total) * 100);

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-emerald-950 via-emerald-900 to-slate-950">
      <div className="mx-auto flex max-w-lg flex-col px-4 py-5 md:py-8">
        <Link
          href="/spanish"
          className="inline-flex min-h-[44px] items-center self-start rounded-full bg-white/10 px-4 text-sm font-bold text-white ring-1 ring-white/20 hover:bg-white/20"
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
        <div className="mt-4 overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/20">
          {finished || !step ? (
            <div className="px-4 py-10 text-center sm:px-6">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-300 text-emerald-950">
                <Star className="h-10 w-10 fill-emerald-800 text-emerald-800" />
              </div>
              <p className="mt-4 text-2xl font-extrabold text-slate-900">You finished</p>
              <p className="mt-1 text-lg text-slate-700">{lesson.title}</p>
              <Link href="/spanish" className={`${actionClass} mt-6 bg-emerald-800 text-white hover:bg-emerald-900`}>
                Back to the path
              </Link>
            </div>
          ) : (
            <StepBody
              key={step.id}
              step={step}
              enteredWithAudio={enteredWithAudio}
              onContinue={continueLesson}
            />
          )}
        </div>
      </div>
    </div>
  );
}
