"use client";

import { useState } from "react";

type Props = {
  courseId: string;
  lessonId?: string;
  promptKey: string;
  title: string;
  prompt: string;
  maxScore: number;
  prior?: {
    body: string;
    status: string;
    score: number | null;
    percent: number | null;
    teacherFeedback: string | null;
  } | null;
};

export function WrittenResponseForm({
  courseId,
  lessonId,
  promptKey,
  title,
  prompt,
  maxScore,
  prior,
}: Props) {
  const [body, setBody] = useState(prior?.body ?? "");
  const [status, setStatus] = useState(prior?.status ?? null);
  const [score, setScore] = useState(prior?.score ?? null);
  const [percent, setPercent] = useState(prior?.percent ?? null);
  const [feedback, setFeedback] = useState(prior?.teacherFeedback ?? null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const locked = status === "GRADED";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setSaved(false);
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId,
          lessonId,
          promptKey,
          title,
          prompt,
          body,
          maxScore,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Submit failed");
        return;
      }
      setStatus(data.submission.status);
      setScore(data.submission.score);
      setPercent(data.submission.percent);
      setFeedback(data.submission.teacherFeedback);
      setSaved(true);
    } catch {
      setError("Network error");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="mt-8 rounded-2xl border border-indigo-200 bg-indigo-50/40 p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-900">
        Written work · max {maxScore} pts
      </p>
      <h3 className="mt-1 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 whitespace-pre-wrap text-sm text-slate-700">{prompt}</p>

      {status && (
        <p className="mt-3 text-sm text-slate-600">
          Status: <strong>{status}</strong>
          {score != null && percent != null ? ` · ${score}/${maxScore} (${percent}%)` : ""}
        </p>
      )}
      {feedback && (
        <div className="mt-2 rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-700">
          <p className="font-medium text-slate-900">Teacher feedback</p>
          <p className="mt-1 whitespace-pre-wrap">{feedback}</p>
        </div>
      )}

      <form onSubmit={submit} className="mt-4 space-y-3">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={10}
          disabled={locked || busy}
          required
          placeholder="Write your response here…"
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:bg-slate-100"
        />
        {error && <p className="text-sm text-red-700">{error}</p>}
        {saved && !error && (
          <p className="text-sm text-emerald-800">Submitted — your teacher can grade this in the gradebook.</p>
        )}
        {!locked && (
          <button
            type="submit"
            disabled={busy || body.trim().length < 1}
            className="rounded-lg bg-indigo-800 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-900 disabled:opacity-50"
          >
            {busy ? "Submitting…" : status === "RETURNED" ? "Resubmit" : "Submit written work"}
          </button>
        )}
        {locked && (
          <p className="text-xs text-slate-500">This response has been graded and is locked.</p>
        )}
      </form>
    </section>
  );
}
