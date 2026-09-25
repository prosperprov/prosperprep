"use client";

import { useState } from "react";

export type WrittenRow = {
  id: string;
  title: string;
  prompt: string;
  body: string;
  maxScore: number;
  status: string;
  submittedAt: string;
  user: { name: string; email: string };
  course: { title: string; grade: number };
  lesson: { title: string } | null;
};

export function GradeWrittenPanel({ initial }: { initial: WrittenRow[] }) {
  const [rows, setRows] = useState(initial);
  const [scores, setScores] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<Record<string, string>>({});
  const [busyId, setBusyId] = useState<string | null>(null);
  const [msg, setMsg] = useState<Record<string, string>>({});

  async function grade(id: string, status: "GRADED" | "RETURNED") {
    const scoreNum = Number(scores[id]);
    if (!Number.isFinite(scoreNum) || scoreNum < 0) {
      setMsg((m) => ({ ...m, [id]: "Enter a valid score" }));
      return;
    }
    setBusyId(id);
    setMsg((m) => ({ ...m, [id]: "" }));
    try {
      const res = await fetch(`/api/submissions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          score: scoreNum,
          teacherFeedback: feedback[id] || "",
          status,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMsg((m) => ({ ...m, [id]: data.error || "Failed" }));
        return;
      }
      setRows((r) => r.filter((x) => x.id !== id));
      setMsg((m) => ({ ...m, [id]: "Saved to gradebook" }));
    } catch {
      setMsg((m) => ({ ...m, [id]: "Network error" }));
    } finally {
      setBusyId(null);
    }
  }

  if (rows.length === 0) {
    return (
      <p className="mt-3 text-sm text-slate-500">No submitted written work waiting in your grades.</p>
    );
  }

  return (
    <ul className="mt-4 space-y-4">
      {rows.map((row) => (
        <li key={row.id} className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="font-medium text-slate-900">
            {row.user.name} · {row.title}
          </p>
          <p className="text-xs text-slate-500">
            {row.course.title} · {row.lesson?.title ?? "Course-level"} · submitted{" "}
            {new Date(row.submittedAt).toLocaleString("en-US", { timeZone: "America/Chicago" })} CT
          </p>
          <p className="mt-2 text-sm text-slate-600 whitespace-pre-wrap">
            <span className="font-medium text-slate-800">Prompt: </span>
            {row.prompt}
          </p>
          <div className="mt-2 rounded-lg bg-slate-50 p-3 text-sm whitespace-pre-wrap text-slate-800">
            {row.body}
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <label className="text-sm">
              Score ( / {row.maxScore})
              <input
                type="number"
                min={0}
                max={row.maxScore}
                step={0.5}
                value={scores[row.id] ?? ""}
                onChange={(e) => setScores((s) => ({ ...s, [row.id]: e.target.value }))}
                className="ml-2 w-20 rounded border border-slate-300 px-2 py-1"
              />
            </label>
            <label className="flex-1 text-sm min-w-[200px]">
              Feedback
              <textarea
                rows={2}
                value={feedback[row.id] ?? ""}
                onChange={(e) => setFeedback((f) => ({ ...f, [row.id]: e.target.value }))}
                className="mt-1 w-full rounded border border-slate-300 px-2 py-1"
              />
            </label>
          </div>
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              disabled={busyId === row.id}
              onClick={() => grade(row.id, "GRADED")}
              className="rounded-lg bg-emerald-800 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-900 disabled:opacity-50"
            >
              Save grade
            </button>
            <button
              type="button"
              disabled={busyId === row.id}
              onClick={() => grade(row.id, "RETURNED")}
              className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-50 disabled:opacity-50"
            >
              Return for revision
            </button>
          </div>
          {msg[row.id] && <p className="mt-2 text-sm text-slate-600">{msg[row.id]}</p>}
        </li>
      ))}
    </ul>
  );
}
