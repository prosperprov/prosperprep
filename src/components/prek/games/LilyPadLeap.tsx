"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const TOTAL_LEVELS = 5;
const ROUNDS_PER_LEVEL = 3;

type LevelConfig = {
  max: number;
  label: string;
  tip: string;
};

const LEVELS: LevelConfig[] = [
  { max: 3, label: "Tiny Pond", tip: "Tap the lily pads from 1 to 3" },
  { max: 5, label: "Sunny Pond", tip: "Tap the lily pads from 1 to 5" },
  { max: 7, label: "Busy Pond", tip: "Tap the lily pads from 1 to 7" },
  { max: 10, label: "Big Pond", tip: "Tap the lily pads from 1 to 10" },
  { max: 10, label: "Frog Challenge", tip: "Tap the lily pads from 10 down to 1" },
];

const PAD_COLORS = [
  "from-emerald-400 to-lime-500",
  "from-teal-400 to-emerald-500",
  "from-green-400 to-teal-500",
  "from-lime-400 to-green-500",
  "from-cyan-400 to-teal-500",
];

function shuffle<T>(arr: T[]): T[] {
  const next = [...arr];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j]!, next[i]!];
  }
  return next;
}

function buildPads(max: number): number[] {
  return shuffle(Array.from({ length: max }, (_, i) => i + 1));
}

function playTone(
  ctx: AudioContext,
  freq: number,
  duration: number,
  type: OscillatorType = "sine",
  gain = 0.08,
) {
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.value = gain;
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.connect(g);
  g.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + duration);
}

type Phase = "ready" | "learning" | "level-clear" | "complete";

export function LilyPadLeap() {
  const [level, setLevel] = useState(0);
  const [round, setRound] = useState(0);
  const [pads, setPads] = useState<number[]>(() => buildPads(LEVELS[0]!.max));
  const [nextNeeded, setNextNeeded] = useState(1);
  const [cleared, setCleared] = useState<Set<number>>(() => new Set());
  const [stars, setStars] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [feedback, setFeedback] = useState<"idle" | "yes" | "no" | "level">("idle");
  const [phase, setPhase] = useState<Phase>("ready");
  const [soundOn, setSoundOn] = useState(true);
  const [shakePad, setShakePad] = useState<number | null>(null);
  const audioRef = useRef<AudioContext | null>(null);

  const config = LEVELS[level]!;
  const descending = level === TOTAL_LEVELS - 1;
  const progressPct = Math.round(
    ((level * ROUNDS_PER_LEVEL + round) / (TOTAL_LEVELS * ROUNDS_PER_LEVEL)) * 100,
  );

  const ensureAudio = useCallback(() => {
    if (!audioRef.current) {
      const AC =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioRef.current = new AC();
    }
    if (audioRef.current.state === "suspended") {
      void audioRef.current.resume();
    }
    return audioRef.current;
  }, []);

  const cue = useCallback(
    (kind: "ok" | "no" | "level" | "win" | "start") => {
      if (!soundOn) return;
      try {
        const ctx = ensureAudio();
        if (kind === "ok") {
          playTone(ctx, 523.25, 0.12);
          window.setTimeout(() => playTone(ctx, 659.25, 0.14), 70);
        } else if (kind === "no") {
          playTone(ctx, 196, 0.18, "triangle", 0.06);
        } else if (kind === "level") {
          [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
            window.setTimeout(() => playTone(ctx, f, 0.16), i * 90);
          });
        } else if (kind === "win") {
          [392, 523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
            window.setTimeout(() => playTone(ctx, f, 0.2), i * 110);
          });
        } else {
          playTone(ctx, 440, 0.1);
        }
      } catch {
        /* audio optional */
      }
    },
    [ensureAudio, soundOn],
  );

  const startRound = useCallback(
    (lvl: number, rnd: number) => {
      const cfg = LEVELS[lvl]!;
      setPads(buildPads(cfg.max));
      setNextNeeded(lvl === TOTAL_LEVELS - 1 ? cfg.max : 1);
      setCleared(new Set());
      setFeedback("idle");
      setShakePad(null);
      setLevel(lvl);
      setRound(rnd);
      setPhase("learning");
    },
    [],
  );

  const begin = useCallback(() => {
    cue("start");
    setStars(0);
    setStreak(0);
    setBestStreak(0);
    startRound(0, 0);
  }, [cue, startRound]);

  const advanceAfterClear = useCallback(() => {
    const nextRound = round + 1;
    if (nextRound < ROUNDS_PER_LEVEL) {
      startRound(level, nextRound);
      return;
    }
    if (level + 1 < TOTAL_LEVELS) {
      setPhase("level-clear");
      setFeedback("level");
      cue("level");
    } else {
      setPhase("complete");
      cue("win");
    }
  }, [cue, level, round, startRound]);

  function onPad(n: number) {
    if (phase !== "learning" || feedback === "yes" || feedback === "level") return;
    if (cleared.has(n)) return;

    const correct = n === nextNeeded;
    if (!correct) {
      setFeedback("no");
      setStreak(0);
      setShakePad(n);
      cue("no");
      window.setTimeout(() => {
        setFeedback("idle");
        setShakePad(null);
      }, 450);
      return;
    }

    const nextCleared = new Set(cleared);
    nextCleared.add(n);
    setCleared(nextCleared);
    setFeedback("yes");
    setStreak((s) => {
      const next = s + 1;
      setBestStreak((b) => Math.max(b, next));
      return next;
    });
    setStars((s) => s + 1);
    cue("ok");

    const done = descending ? n === 1 : n === config.max;
    if (done) {
      window.setTimeout(() => {
        advanceAfterClear();
      }, 550);
      return;
    }

    const following = descending ? n - 1 : n + 1;
    setNextNeeded(following);
    window.setTimeout(() => setFeedback("idle"), 280);
  }

  function goNextLevel() {
    startRound(level + 1, 0);
  }

  const frogHint = useMemo(() => {
    if (phase !== "learning") return "";
    if (descending) return `Next: ${nextNeeded} (counting down)`;
    return `Next: ${nextNeeded}`;
  }, [descending, nextNeeded, phase]);

  useEffect(() => {
    return () => {
      void audioRef.current?.close();
    };
  }, []);

  if (phase === "ready") {
    return (
      <div className="relative overflow-hidden bg-gradient-to-b from-sky-300 via-cyan-200 to-emerald-300 p-5 sm:p-8">
        <StageDecor />
        <div className="relative z-10 mx-auto max-w-lg space-y-5 text-center">
          <div className="text-6xl" aria-hidden>
            🐸
          </div>
          <h2 className="text-2xl font-extrabold text-emerald-950 sm:text-3xl">Lily Pad Leap</h2>
          <p className="text-base font-medium text-emerald-900/90 sm:text-lg">
            Help the frog leap across the pond! Tap lily pads in number order through{" "}
            {TOTAL_LEVELS} bright levels.
          </p>
          <ul className="mx-auto max-w-sm space-y-2 rounded-2xl bg-white/80 p-4 text-left text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-emerald-100">
            <li>• Levels get longer — up to 1 through 10</li>
            <li>• Earn a star for every correct pad</li>
            <li>• Optional soft sound cues while you learn</li>
          </ul>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setSoundOn((v) => !v)}
              className="min-h-[44px] rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-emerald-900 shadow ring-1 ring-emerald-200"
              aria-pressed={soundOn}
            >
              Sound {soundOn ? "On" : "Off"}
            </button>
            <button
              type="button"
              onClick={begin}
              className="min-h-[52px] rounded-2xl bg-emerald-800 px-8 py-3 text-lg font-extrabold text-white shadow-lg hover:bg-emerald-900"
            >
              Start learning
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "level-clear") {
    return (
      <div className="relative overflow-hidden bg-gradient-to-b from-amber-200 via-lime-200 to-emerald-300 p-6 sm:p-10">
        <StageDecor />
        <div className="relative z-10 mx-auto max-w-md space-y-4 text-center">
          <div className="text-6xl" aria-hidden>
            ⭐
          </div>
          <h2 className="text-2xl font-extrabold text-emerald-950">Level {level + 1} clear!</h2>
          <p className="text-lg font-semibold text-emerald-900">
            You finished {config.label}. Stars so far: {stars}
          </p>
          <button
            type="button"
            onClick={goNextLevel}
            className="min-h-[52px] rounded-2xl bg-emerald-800 px-8 py-3 text-lg font-extrabold text-white shadow-lg hover:bg-emerald-900"
          >
            Learn level {level + 2}
          </button>
        </div>
      </div>
    );
  }

  if (phase === "complete") {
    return (
      <div className="relative overflow-hidden bg-gradient-to-b from-violet-300 via-fuchsia-200 to-amber-200 p-6 sm:p-10">
        <StageDecor />
        <div className="relative z-10 mx-auto max-w-md space-y-4 text-center">
          <div className="text-6xl" aria-hidden>
            🏆
          </div>
          <h2 className="text-3xl font-extrabold text-violet-950">Pond complete!</h2>
          <p className="text-lg font-semibold text-violet-900">
            You leaped through all {TOTAL_LEVELS} levels and earned {stars} stars.
          </p>
          <p className="text-sm font-medium text-violet-800">Best streak: {bestStreak} correct in a row</p>
          <button
            type="button"
            onClick={begin}
            className="min-h-[52px] rounded-2xl bg-violet-800 px-8 py-3 text-lg font-extrabold text-white shadow-lg hover:bg-violet-900"
          >
            Learn again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-sky-300 via-cyan-200 to-emerald-400 p-4 sm:p-6">
      <StageDecor />
      <div className="relative z-10 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-emerald-950">
            <span className="rounded-full bg-white/90 px-3 py-1 shadow-sm ring-1 ring-emerald-100">
              Level {level + 1}/{TOTAL_LEVELS}
            </span>
            <span className="rounded-full bg-white/90 px-3 py-1 shadow-sm ring-1 ring-emerald-100">
              {config.label}
            </span>
            <span className="rounded-full bg-amber-100 px-3 py-1 shadow-sm ring-1 ring-amber-200">
              ⭐ {stars}
            </span>
            <span className="rounded-full bg-white/90 px-3 py-1 shadow-sm ring-1 ring-emerald-100">
              Streak {streak}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setSoundOn((v) => !v)}
            className="min-h-[40px] rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-emerald-900 shadow ring-1 ring-emerald-200"
            aria-pressed={soundOn}
          >
            Sound {soundOn ? "On" : "Off"}
          </button>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs font-bold uppercase tracking-wide text-emerald-900/80">
            <span>Progress</span>
            <span>
              Round {round + 1}/{ROUNDS_PER_LEVEL} · {progressPct}%
            </span>
          </div>
          <div
            className="h-3 overflow-hidden rounded-full bg-white/60 ring-1 ring-emerald-200/80"
            role="progressbar"
            aria-valuenow={progressPct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Learning progress"
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-lime-400 to-amber-400 transition-all duration-500"
              style={{ width: `${Math.max(progressPct, 4)}%` }}
            />
          </div>
          <div className="flex justify-center gap-1 pt-1" aria-hidden>
            {Array.from({ length: TOTAL_LEVELS }, (_, i) => (
              <span
                key={i}
                className={`inline-block h-2.5 w-2.5 rounded-full ${
                  i < level ? "bg-amber-400" : i === level ? "bg-emerald-600" : "bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white/85 p-4 text-center shadow-inner ring-1 ring-emerald-100 sm:p-5">
          <p className="text-base font-extrabold text-emerald-950 sm:text-lg">{config.tip}</p>
          <p className="mt-1 text-sm font-semibold text-teal-800" aria-live="polite">
            {frogHint}
          </p>
          <div className="mt-2 text-4xl" aria-hidden>
            🐸
          </div>
        </div>

        <div
          className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4"
          role="group"
          aria-label="Lily pads"
        >
          {pads.map((n, i) => {
            const isCleared = cleared.has(n);
            const isTarget = n === nextNeeded && !isCleared;
            const shaking = shakePad === n;
            return (
              <button
                key={`${level}-${round}-${n}`}
                type="button"
                disabled={isCleared}
                onClick={() => onPad(n)}
                className={`relative flex min-h-[76px] flex-col items-center justify-center rounded-[2rem] bg-gradient-to-br text-2xl font-extrabold text-white shadow-lg transition sm:min-h-[88px] sm:text-3xl ${
                  PAD_COLORS[i % PAD_COLORS.length]
                } ${isCleared ? "scale-95 opacity-40 grayscale" : "hover:scale-105 active:scale-95"} ${
                  isTarget ? "ring-4 ring-amber-300 ring-offset-2 ring-offset-cyan-200" : ""
                } ${shaking ? "animate-pulse" : ""}`}
                aria-label={
                  isCleared ? `Lily pad ${n}, already leaped` : `Lily pad ${n}`
                }
              >
                <span className="absolute -top-1 text-lg opacity-80" aria-hidden>
                  🍃
                </span>
                {n}
              </button>
            );
          })}
        </div>

        <p
          className="min-h-[1.75rem] text-center text-base font-bold text-emerald-950"
          aria-live="polite"
        >
          {feedback === "yes"
            ? "Great leap!"
            : feedback === "no"
              ? "Try the next number in order"
              : "Tap the next lily pad in order"}
        </p>
      </div>
    </div>
  );
}

function StageDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-white/40 blur-xl" />
      <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-yellow-200/70 blur-md" />
      <div className="absolute bottom-6 left-1/4 h-20 w-32 rounded-full bg-emerald-600/20 blur-2xl" />
      <div className="absolute bottom-10 right-8 text-3xl opacity-40">🌸</div>
      <div className="absolute left-6 top-1/3 text-2xl opacity-30">✨</div>
      <div className="absolute bottom-16 left-8 text-2xl opacity-35">🌿</div>
    </div>
  );
}
