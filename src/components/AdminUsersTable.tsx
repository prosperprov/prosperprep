"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { gradeLabel } from "@/lib/grades";

const ALL_GRADES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const ENROLLMENT_STATUSES = [
  "ACTIVE",
  "PENDING",
  "PAUSED",
  "PAST_DUE",
  "UNPAID",
  "CANCELED",
] as const;

const fieldClass =
  "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-600";

export type AdminUserRow = {
  id: string;
  name: string;
  email: string;
  role: string;
  grade: number | null;
  gradeLabel: string;
  enrollmentStatus: string | null;
  enrollmentId: string | null;
};

export function AdminUsersTable({ users }: { users: AdminUserRow[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState<AdminUserRow | null>(null);
  const [deleting, setDeleting] = useState<AdminUserRow | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState(7);
  const [enrollmentStatus, setEnrollmentStatus] = useState<string>("ACTIVE");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!q) return [];
    return users.filter(
      (u) =>
        u.role === "STUDENT" &&
        (u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q))
    );
  }, [users, q]);

  function openEdit(u: AdminUserRow) {
    setEditing(u);
    setDeleting(null);
    setName(u.name);
    setEmail(u.email);
    setGrade(u.grade ?? 7);
    setEnrollmentStatus(u.enrollmentStatus || "ACTIVE");
    setPassword("");
    setError("");
    setMessage("");
  }

  function openDelete(u: AdminUserRow) {
    setDeleting(u);
    setEditing(null);
    setError("");
    setMessage("");
  }

  function closePanels() {
    setEditing(null);
    setDeleting(null);
    setPassword("");
    setError("");
  }

  async function onSave(e: FormEvent) {
    e.preventDefault();
    if (!editing) return;
    setBusy(true);
    setError("");
    setMessage("");
    const res = await fetch("/api/admin/users", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: editing.id,
        name,
        email,
        grade,
        enrollmentStatus: editing.enrollmentId ? enrollmentStatus : undefined,
        enrollmentId: editing.enrollmentId || undefined,
        password: password.trim() || undefined,
      }),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) {
      setError(data.error || "Could not update student");
      return;
    }
    setMessage(`Updated ${data.user?.name || name}`);
    setEditing(null);
    setPassword("");
    router.refresh();
  }

  async function onConfirmDelete() {
    if (!deleting) return;
    setBusy(true);
    setError("");
    setMessage("");
    const res = await fetch(`/api/admin/users?id=${encodeURIComponent(deleting.id)}`, {
      method: "DELETE",
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) {
      setError(data.error || "Could not delete student");
      return;
    }
    setMessage(`Deleted ${deleting.name}`);
    setDeleting(null);
    router.refresh();
  }

  return (
    <div>
      <label className="mb-3 block text-sm">
        <span className="sr-only">Search students</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search students by name or email…"
          className="w-full max-w-md rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-600"
        />
      </label>

      {message && !editing && !deleting && (
        <p className="mb-3 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-900">{message}</p>
      )}
      {error && !editing && !deleting && (
        <p className="mb-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
      )}

      {editing && (
        <form
          onSubmit={onSave}
          className="mb-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="text-base font-semibold text-slate-900">Edit student</h3>
              <p className="mt-1 text-sm text-slate-500">
                Update account details for {editing.name}. Leave password blank to keep the current
                one.
              </p>
            </div>
            <button
              type="button"
              onClick={closePanels}
              className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
          </div>
          {error && (
            <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
          )}
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <label className="block text-sm sm:col-span-2">
              <span className="font-medium text-slate-700">Name</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={fieldClass}
              />
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="font-medium text-slate-700">Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={fieldClass}
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-slate-700">Grade</span>
              <select
                value={grade}
                onChange={(e) => setGrade(Number(e.target.value))}
                className={fieldClass}
              >
                {ALL_GRADES.map((g) => (
                  <option key={g} value={g}>
                    {gradeLabel(g)}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="font-medium text-slate-700">Enrollment status</span>
              {editing.enrollmentId ? (
                <select
                  value={enrollmentStatus}
                  onChange={(e) => setEnrollmentStatus(e.target.value)}
                  className={fieldClass}
                >
                  {ENROLLMENT_STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              ) : (
                <p className="mt-2 text-sm text-slate-500">No enrollment on file</p>
              )}
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="font-medium text-slate-700">
                New password <span className="font-normal text-slate-500">(optional)</span>
              </span>
              <input
                type="password"
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Leave blank to keep current password"
                className={fieldClass}
                autoComplete="new-password"
              />
            </label>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="submit"
              disabled={busy}
              className="rounded-lg bg-emerald-800 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-900 disabled:opacity-60"
            >
              {busy ? "Saving…" : "Save changes"}
            </button>
            <button
              type="button"
              onClick={closePanels}
              disabled={busy}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-60"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {deleting && (
        <div
          role="alertdialog"
          aria-labelledby="delete-student-title"
          aria-describedby="delete-student-desc"
          className="mb-4 rounded-xl border border-red-300 bg-red-50 p-5 shadow-sm"
        >
          <h3 id="delete-student-title" className="text-base font-semibold text-red-950">
            Delete student?
          </h3>
          <p id="delete-student-desc" className="mt-2 text-sm text-red-900">
            Permanently remove <strong>{deleting.name}</strong> ({deleting.email}). Enrollments,
            progress, grades, and messages for this account are removed. This cannot be undone.
          </p>
          {error && (
            <p className="mt-3 rounded-lg bg-white px-3 py-2 text-sm text-red-700">{error}</p>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              disabled={busy}
              onClick={onConfirmDelete}
              className="rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-800 disabled:opacity-60"
            >
              {busy ? "Deleting…" : "Delete student"}
            </button>
            <button
              type="button"
              disabled={busy}
              onClick={closePanels}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 disabled:opacity-60"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm text-slate-900">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Grade</th>
              <th className="px-4 py-2">Enrollment</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!q ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-slate-500">
                  Type to search students by name or email.
                </td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-slate-500">
                  No students match “{query.trim()}”.
                </td>
              </tr>
            ) : (
              filtered.map((u) => (
                <tr key={u.id} className="border-t border-slate-100">
                  <td className="px-4 py-2 font-medium">{u.name}</td>
                  <td className="px-4 py-2">{u.email}</td>
                  <td className="px-4 py-2">{u.gradeLabel}</td>
                  <td className="px-4 py-2">{u.enrollmentStatus || "—"}</td>
                  <td className="px-4 py-2">
                    <div className="flex flex-wrap gap-1">
                      <button
                        type="button"
                        onClick={() => openEdit(u)}
                        className="rounded-lg border border-emerald-700 bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-900 hover:bg-emerald-100"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => openDelete(u)}
                        className="rounded-lg border border-red-300 bg-white px-2 py-1 text-xs font-medium text-red-800 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
