"use client";

import { useMemo, useState } from "react";
import { AdminEnrollmentActions } from "@/components/AdminEnrollmentActions";

export type AdminEnrollmentRow = {
  id: string;
  studentName: string;
  studentEmail: string;
  planName: string;
  gradeLabel: string;
  status: string;
  mode: "scholarship" | "demo" | "stripe";
  scholarship: boolean;
  demoMode: boolean;
};

export function AdminEnrollmentsTable({ rows }: { rows: AdminEnrollmentRow[] }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!q) return [];
    return rows.filter(
      (e) =>
        e.studentName.toLowerCase().includes(q) ||
        e.studentEmail.toLowerCase().includes(q)
    );
  }, [rows, q]);

  return (
    <div>
      <label className="mb-3 block text-sm">
        <span className="sr-only">Search enrollments</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search enrollments by student name or email…"
          className="w-full max-w-md rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
      </label>
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-2">Student</th>
              <th className="px-4 py-2">Plan</th>
              <th className="px-4 py-2">Grade</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Mode</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!q ? (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-slate-500">
                  Type to search enrollments by student name or email.
                </td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-slate-500">
                  No enrollments match “{query.trim()}”.
                </td>
              </tr>
            ) : (
              filtered.map((e) => (
                <tr key={e.id} className="border-t border-slate-100">
                  <td className="px-4 py-2">
                    <p className="font-medium">{e.studentName}</p>
                    <p className="text-xs text-slate-500">{e.studentEmail}</p>
                  </td>
                  <td className="px-4 py-2">{e.planName}</td>
                  <td className="px-4 py-2">{e.gradeLabel}</td>
                  <td className="px-4 py-2">{e.status}</td>
                  <td className="px-4 py-2">
                    <span
                      className={
                        e.scholarship
                          ? "rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-900"
                          : e.demoMode
                            ? "rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-900"
                            : "rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700"
                      }
                    >
                      {e.mode}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <AdminEnrollmentActions enrollmentId={e.id} status={e.status} />
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
