"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { gradeLabel } from "@/lib/grades";

const ALL = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function AdminCreateStudent() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [grade, setGrade] = useState(7);
  const [scholarship, setScholarship] = useState(true);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMessage("");
    setError("");
    const res = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        role: "STUDENT",
        name,
        email,
        password,
        grade,
        scholarship,
      }),
    });
    const data = await res.json();
    setBusy(false);
    if (!res.ok) {
      setError(data.error || "Could not create student");
      return;
    }
    setMessage(
      scholarship
        ? `Created student ${data.user.name} with scholarship access`
        : `Created student ${data.user.name} (no enrollment yet)`
    );
    setName("");
    setEmail("");
    setPassword("");
    setGrade(7);
    setScholarship(true);
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">Create student</h3>
      <p className="mt-1 text-sm text-slate-500">
        New student account; optionally grant scholarship (ACTIVE, no Stripe).
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
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Grade</span>
          <select
            value={grade}
            onChange={(e) => setGrade(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          >
            {ALL.map((g) => (
              <option key={g} value={g}>
                {gradeLabel(g)}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-start gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={scholarship}
            onChange={(e) => setScholarship(e.target.checked)}
            className="mt-1 rounded border-slate-300"
          />
          <span>
            <span className="font-medium">Scholarship / waive tuition (no Stripe)</span>
            <span className="block text-xs text-slate-500">
              Creates an ACTIVE enrollment so curriculum unlocks immediately.
            </span>
          </span>
        </label>
        <button
          type="submit"
          disabled={busy}
          className="rounded-lg bg-emerald-800 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-900 disabled:opacity-60"
        >
          {busy ? "Creating…" : "Create student"}
        </button>
      </div>
    </form>
  );
}
