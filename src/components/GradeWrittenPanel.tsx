"use client";

import { useMemo, useState, type Dispatch, type SetStateAction } from "react";
import { formatCtDateTime } from "@/lib/formatCt";
import { gradeLabel } from "@/lib/grades";
import { gradeSections } from "@/lib/groupByGrade";

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

function WrittenCard({
  row,
  scores,
  feedback,
  busyId,
  msg,
  setScores,
  setFeedback,
  onGrade,
}: {
  row: WrittenRow;
  scores: Record<string, string>;
  feedback: Record<string, string>;
  busyId: string | null;
  msg: Record<string, string>;
  setScores: Dispatch<SetStateAction<Record<string, string>>>;
  setFeedback: Dispatch<SetStateAction<Record<string, string>>>;
  onGrade: (id: string, status: "GRADED" | "RETURNED") => void;
}) {
  return (
    <li className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-4">
      <p className="break-words font-medium text-slate-900">
        {row.user.name} · {row.title}
      </p>
      <p className="break-words text-xs text-slate-500">
        {row.course.title} · {row.lesson?.title ?? "Course-level"} · submitted{" "}
        {formatCtDateTime(row.submittedAt)}
      </p>
      <p className="mt-2 whitespace-pre-wrap break-words text-sm text-slate-600">
        <span className="font-medium text-slate-800">Prompt: </span>
        {row.prompt}
      </p>
      <div className="mt-2 whitespace-pre-wrap break-words rounded-lg bg-slate-50 p-3 text-sm text-slate-800">
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
        <label className="min-w-[200px] flex-1 text-sm">
          Feedback
          <textarea
            rows={2}
            value={feedback[row.id] ?? ""}
            onChange={(e) => setFeedback((f) => ({ ...f, [row.id]: e.target.value }))}
            className="mt-1 w-full rounded border border-slate-300 px-2 py-1"
          />
        </label>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <button
          type="button"
          disabled={busyId === row.id}
          onClick={() => onGrade(row.id, "GRADED")}
          className="rounded-lg bg-emerald-800 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-900 disabled:opacity-50"
        >
          Save grade
        </button>
        <button
          type="button"
          disabled={busyId === row.id}
          onClick={() => onGrade(row.id, "RETURNED")}
          className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-50 disabled:opacity-50"
        >
          Return for revision
        </button>
      </div>
      {msg[row.id] && <p className="mt-2 text-sm text-slate-600">{msg[row.id]}</p>}
    </li>
  );
}

export function GradeWrittenPanel({
  initial,
  assignedGrades,
}: {
  initial: WrittenRow[];
  /** When provided, show a section per assigned grade (including empty). */
  assignedGrades?: number[];
}) {
  const [rows, setRows] = useState(initial);
  const [scores, setScores] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<Record<string, string>>({});
  const [busyId, setBusyId] = useState<string | null>(null);
  const [msg, setMsg] = useState<Record<string, string>>({});

  const sections = useMemo(() => {
    const grades =
      assignedGrades && assignedGrades.length > 0
        ? assignedGrades
        : Array.from(new Set(rows.map((r) => r.course.grade))).sort((a, b) => a - b);
    if (grades.length === 0) return [];
    return gradeSections(grades, rows, (r) => r.course.grade);
  }, [assignedGrades, rows]);

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

  if (rows.length === 0 && sections.length === 0) {
    return (
      <p className="mt-3 text-sm text-emerald-100/80">No written work to grade.</p>
    );
  }

  if (sections.length === 0) {
    return (
      <p className="mt-3 text-sm text-emerald-100/80">No written work to grade.</p>
    );
  }

  const allEmpty = sections.every((s) => s.items.length === 0);
  if (allEmpty) {
    return (
      <p className="mt-3 text-sm text-emerald-100/80">No written work to grade.</p>
    );
  }

  return (
    <div className="mt-4 min-w-0 space-y-6 overflow-x-hidden">
      {sections.map((section) => (
        <div key={section.grade} className="min-w-0">
          <div className="mb-2 flex min-w-0 flex-wrap items-baseline justify-between gap-2">
            <h4 className="text-sm font-semibold text-emerald-50">
              {gradeLabel(section.grade)}
            </h4>
            <span className="text-xs font-semibold uppercase tracking-wide text-emerald-200/75">
              {section.items.length} pending
            </span>
          </div>
          {section.items.length === 0 ? (
            <p className="text-sm text-emerald-100/75">
              No written work pending for {gradeLabel(section.grade)}.
            </p>
          ) : (
            <ul className="space-y-4">
              {section.items.map((row) => (
                <WrittenCard
                  key={row.id}
                  row={row}
                  scores={scores}
                  feedback={feedback}
                  busyId={busyId}
                  msg={msg}
                  setScores={setScores}
                  setFeedback={setFeedback}
                  onGrade={grade}
                />
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
