"use client";

import { useState } from "react";

const G6_MATH_COURSE_ID = "cmuh9bwto03qledantwv3vsfd";

type StudentOpt = { id: string; name: string; email: string; gradeLabel: string };

export function AdminUnitUnlock({ students }: { students: StudentOpt[] }) {
  const [userId, setUserId] = useState(students[0]?.id ?? "");
  const [courseId, setCourseId] = useState(G6_MATH_COURSE_ID);
  const [maxUnlockedUnit, setMaxUnlockedUnit] = useState(2);
  const [note, setNote] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function save() {
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch("/api/admin/unit-unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, courseId, maxUnlockedUnit, note }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setMsg(`Unlocked units 1–${maxUnlockedUnit} for student.`);
    } catch (e) {
      setMsg(e instanceof Error ? e.message : "Failed");
    } finally {
      setBusy(false);
    }
  }

  async function clear() {
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch(
        `/api/admin/unit-unlock?userId=${encodeURIComponent(userId)}&courseId=${encodeURIComponent(courseId)}`,
        { method: "DELETE" }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setMsg("Override cleared — sequential unlock restored.");
    } catch (e) {
      setMsg(e instanceof Error ? e.message : "Failed");
    } finally {
      setBusy(false);
    }
  }

  if (students.length === 0) {
    return <p className="text-sm text-emerald-100">No students yet.</p>;
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-semibold text-slate-900">Sequential unit unlock override</h3>
      <p className="mt-1 text-sm text-slate-500">
        Open units 1–N ahead for a student (Grade 6 Math default). Teachers and admins can unlock
        ahead when a learner needs to skip or catch up.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Student</span>
          <select
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-600"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          >
            {students.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.gradeLabel}) — {s.email}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Course ID</span>
          <input
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 font-mono text-xs text-slate-900 placeholder:text-slate-600"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Max unlocked unit (1–N open)</span>
          <input
            type="number"
            min={1}
            max={20}
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-600"
            value={maxUnlockedUnit}
            onChange={(e) => setMaxUnlockedUnit(Number(e.target.value))}
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Note (optional)</span>
          <input
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-600"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="e.g. placement into Unit 3"
          />
        </label>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          disabled={busy}
          onClick={save}
          className="rounded-xl bg-emerald-700 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-800 disabled:opacity-50"
        >
          Save override
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={clear}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 disabled:opacity-50"
        >
          Clear override
        </button>
      </div>
      {msg && <p className="mt-3 text-sm text-slate-700">{msg}</p>}
    </div>
  );
}
