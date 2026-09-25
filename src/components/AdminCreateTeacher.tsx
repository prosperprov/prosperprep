"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { gradeLabel } from "@/lib/grades";

const ALL = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function AdminCreateTeacher() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [grades, setGrades] = useState<number[]>([]);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function toggle(grade: number) {
    setGrades((prev) => {
      const set = new Set(prev);
      if (set.has(grade)) set.delete(grade);
      else set.add(grade);
      return Array.from(set).sort((a, b) => a - b);
    });
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMessage("");
    setError("");
    const res = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: "TEACHER", name, email, password, grades }),
    });
    const data = await res.json();
    setBusy(false);
    if (!res.ok) {
      setError(data.error || "Could not create teacher");
      return;
    }
    setMessage(`Created teacher ${data.user.name}`);
    setName("");
    setEmail("");
    setPassword("");
    setGrades([]);
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">Create teacher</h3>
      <p className="mt-1 text-sm text-slate-500">
        New teacher account with grades they are cleared to teach.
      </p>
      {error && <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
      {message && (
        <p className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-900">{message}</p>
      )}
      <div className="mt-4 space-y-3">
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Password</span>
          <input
            type="password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
        <div>
          <p className="text-sm font-medium text-slate-700">Teaching grades</p>
          <p className="text-xs text-slate-500">Select at least one so the teacher has a classroom.</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {ALL.map((g) => {
              const on = grades.includes(g);
              return (
                <button
                  key={g}
                  type="button"
                  onClick={() => toggle(g)}
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
        </div>
        <button
          type="submit"
          disabled={busy}
          className="rounded-lg bg-emerald-800 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-900 disabled:opacity-60"
        >
          {busy ? "Creating…" : "Create teacher"}
        </button>
      </div>
    </form>
  );
}
