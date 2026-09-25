"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { gradeLabel } from "@/lib/grades";

const ALL = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function AssignTeacherGrades({
  teachers,
}: {
  teachers: { id: string; name: string; email: string; grades: number[] }[];
}) {
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState("");
  const [local, setLocal] = useState<Record<string, number[]>>(() =>
    Object.fromEntries(teachers.map((t) => [t.id, [...t.grades]]))
  );

  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!q) return [];
    return teachers.filter(
      (t) =>
        t.name.toLowerCase().includes(q) || t.email.toLowerCase().includes(q)
    );
  }, [teachers, q]);

  function toggle(teacherId: string, grade: number) {
    setLocal((prev) => {
      const cur = new Set(prev[teacherId] || []);
      if (cur.has(grade)) cur.delete(grade);
      else cur.add(grade);
      return { ...prev, [teacherId]: Array.from(cur).sort((a, b) => a - b) };
    });
  }

  async function save(teacherId: string) {
    setBusy(teacherId);
    setMessage("");
    const res = await fetch("/api/admin/teacher-grades", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ teacherId, grades: local[teacherId] || [] }),
    });
    const data = await res.json();
    setBusy(null);
    if (!res.ok) {
      setMessage(data.error || "Save failed");
      return;
    }
    setMessage(`Saved grades for teacher.`);
    router.refresh();
  }

  if (teachers.length === 0) {
    return <p className="text-sm text-slate-500">No teacher accounts yet.</p>;
  }

  return (
    <div className="space-y-4">
      <label className="block text-sm">
        <span className="sr-only">Search teachers</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search teachers by name or email…"
          className="w-full max-w-md rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
      </label>
      {message && (
        <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-900">{message}</p>
      )}
      {!q ? (
        <p className="text-sm text-slate-500">Type to search teachers by name or email.</p>
      ) : filtered.length === 0 ? (
        <p className="text-sm text-slate-500">No teachers match “{query.trim()}”.</p>
      ) : (
        <div className="space-y-6">
          {filtered.map((t) => (
            <div key={t.id} className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.email}</p>
                </div>
                <button
                  type="button"
                  disabled={busy === t.id}
                  onClick={() => save(t.id)}
                  className="rounded-lg bg-emerald-800 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-900 disabled:opacity-60"
                >
                  {busy === t.id ? "Saving…" : "Save grades"}
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {ALL.map((g) => {
                  const on = (local[t.id] || []).includes(g);
                  return (
                    <button
                      key={g}
                      type="button"
                      onClick={() => toggle(t.id, g)}
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${
                        on
                          ? "border-emerald-700 bg-emerald-800 text-white"
                          : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {gradeLabel(g)}
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Assigned:{" "}
                {(local[t.id] || []).length
                  ? (local[t.id] || []).map(gradeLabel).join(", ")
                  : "none — teacher sees an empty classroom until grades are assigned"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
