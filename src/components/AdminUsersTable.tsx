"use client";

import { useMemo, useState } from "react";

export type AdminUserRow = {
  id: string;
  name: string;
  email: string;
  role: string;
  gradeLabel: string;
};

export function AdminUsersTable({ users }: { users: AdminUserRow[] }) {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!q) return [];
    return users.filter(
      (u) =>
        u.role === "STUDENT" &&
        (u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q))
    );
  }, [users, q]);

  return (
    <div>
      <label className="mb-3 block text-sm">
        <span className="sr-only">Search students</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search students by name or email…"
          className="w-full max-w-md rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
      </label>
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Grade / teaching</th>
            </tr>
          </thead>
          <tbody>
            {!q ? (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-slate-500">
                  Type to search students by name or email.
                </td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-slate-500">
                  No students match “{query.trim()}”.
                </td>
              </tr>
            ) : (
              filtered.map((u) => (
                <tr key={u.id} className="border-t border-slate-100">
                  <td className="px-4 py-2 font-medium">{u.name}</td>
                  <td className="px-4 py-2">{u.email}</td>
                  <td className="px-4 py-2">
                    {u.role === "ADMIN" ? (
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-900">
                        Super Admin
                      </span>
                    ) : (
                      u.role
                    )}
                  </td>
                  <td className="px-4 py-2">{u.gradeLabel}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
