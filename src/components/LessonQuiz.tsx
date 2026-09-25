"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export type QuizQuestion = {
  id: string;
  prompt: string;
  choices: string[];
  order: number;
  points: number;
};

type ResultMap = Record<
  string,
  { selected: number; correct: number; isCorrect: boolean; explanation: string; points: number }
>;

export function LessonQuiz({
  lessonId,
  quizId,
  questions,
  priorPercent,
}: {
  lessonId?: string;
  quizId?: string;
  questions: QuizQuestion[];
  priorPercent?: number | null;
}) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [score, setScore] = useState<{ score: number; maxScore: number; percent: number } | null>(
    null
  );
  const [results, setResults] = useState<ResultMap | null>(null);

  const allAnswered = useMemo(
    () => questions.every((q) => typeof answers[q.id] === "number"),
    [answers, questions]
  );

  async function submit() {
    setPending(true);
    setError(null);
    try {
      const res = await fetch("/api/attempts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId, quizId, answers }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Submit failed");
      setScore({ score: data.score, maxScore: data.maxScore, percent: data.percent });
      setResults(data.results);
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setPending(false);
    }
  }

  function retry() {
    setScore(null);
    setResults(null);
    setAnswers({});
    setError(null);
  }

  if (questions.length === 0) {
    return (
      <p className="text-sm text-slate-500">No graded questions are attached to this item yet.</p>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            {quizId ? "Section quiz" : "Lesson check"}
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Multiple choice · {questions.length} questions · latest attempt counts toward your course
            grade
            {priorPercent != null ? ` · prior score ${priorPercent}%` : ""}
          </p>
        </div>
        {score && (
          <div className="rounded-xl bg-emerald-50 px-4 py-2 text-right">
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-800">Score</p>
            <p className="text-2xl font-bold text-emerald-900">
              {score.percent}%
              <span className="ml-2 text-sm font-medium text-emerald-700">
                ({score.score}/{score.maxScore})
              </span>
            </p>
          </div>
        )}
      </div>

      <ol className="mt-6 space-y-6">
        {questions.map((q, idx) => {
          const result = results?.[q.id];
          return (
            <li key={q.id} className="rounded-xl border border-slate-100 p-4">
              <p className="font-medium text-slate-900">
                {idx + 1}. {q.prompt}
              </p>
              <div className="mt-3 space-y-2">
                {q.choices.map((choice, ci) => {
                  const selected = answers[q.id] === ci;
                  let style =
                    "border-slate-200 hover:border-emerald-300 " +
                    (selected ? "border-emerald-600 bg-emerald-50" : "bg-white");
                  if (result) {
                    if (ci === result.correct) style = "border-emerald-600 bg-emerald-50";
                    else if (ci === result.selected && !result.isCorrect)
                      style = "border-red-400 bg-red-50";
                    else style = "border-slate-100 bg-slate-50 text-slate-500";
                  }
                  return (
                    <label
                      key={ci}
                      className={`flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-2 text-sm ${style}`}
                    >
                      <input
                        type="radio"
                        className="mt-1"
                        name={q.id}
                        disabled={Boolean(results) || pending}
                        checked={selected}
                        onChange={() => setAnswers((a) => ({ ...a, [q.id]: ci }))}
                      />
                      <span>
                        <span className="mr-2 font-semibold text-slate-500">
                          {String.fromCharCode(65 + ci)}.
                        </span>
                        {choice}
                      </span>
                    </label>
                  );
                })}
              </div>
              {result && (
                <p
                  className={`mt-3 text-sm ${result.isCorrect ? "text-emerald-800" : "text-red-800"}`}
                >
                  {result.isCorrect ? "Correct. " : "Incorrect. "}
                  {result.explanation}
                </p>
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {!results ? (
          <button
            type="button"
            disabled={!allAnswered || pending}
            onClick={submit}
            className="rounded-lg bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-900 disabled:opacity-50"
          >
            {pending ? "Scoring…" : "Submit answers"}
          </button>
        ) : (
          <button
            type="button"
            onClick={retry}
            className="rounded-lg border border-emerald-700 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-900 hover:bg-emerald-100"
          >
            Retry (latest score counts)
          </button>
        )}
        {!allAnswered && !results && (
          <p className="text-sm text-slate-500">Answer every question to submit.</p>
        )}
        {error && <p className="text-sm text-red-700">{error}</p>}
      </div>
    </div>
  );
}
