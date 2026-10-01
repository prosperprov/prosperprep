"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  GradeCollapsible,
  matchesStudentQuery,
} from "@/components/GradeCollapsible";
import { gradeSections } from "@/lib/groupByGrade";

export type Grade6RosterRow = {
  id: string;
  name: string;
  email: string;
  planName: string;
  grade?: number;
};

/**
 * Immersive classroom glance for teachers — one collapsible section per grade.
 */
export function Grade6TeacherGlance({
  students,
  liveCount,
  writtenPending,
  grades = [6],
  liveByGrade = {},
  writtenByGrade = {},
}: {
  students: Grade6RosterRow[];
  liveCount: number;
  writtenPending: number;
  grades?: number[];
  /** Per-grade live session counts (assigned grade key). */
  liveByGrade?: Record<number, number>;
  /** Per-grade written-to-grade counts. */
  writtenByGrade?: Record<number, number>;
}) {
  const sections = useMemo(
    () => gradeSections(grades, students, (s) => s.grade),
    [grades, students]
  );
  const [queries, setQueries] = useState<Record<number, string>>({});

  return (
    <section className="mb-8 overflow-x-hidden rounded-3xl border border-emerald-400/35 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 p-4 text-white shadow-lg shadow-black/30 sm:p-6">
      <div className="flex min-w-0 flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-300">
            Classroom Glance
          </p>
          <h2 className="mt-1 text-2xl font-bold text-white">Immersive Roster</h2>
          <p className="mt-1 text-sm text-emerald-100/85">
            Organized by grade · {students.length} active student
            {students.length === 1 ? "" : "s"} · tap a grade to expand
          </p>
        </div>
        <Link
          href="/dashboard/teacher/messages"
          className="inline-flex min-h-[48px] shrink-0 items-center rounded-2xl bg-white px-4 py-2 text-base font-bold text-emerald-950 hover:bg-emerald-50"
        >
          Message Class
        </Link>
      </div>

      <div className="mt-5 grid min-w-0 gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-emerald-200 bg-white p-4">
          <p className="text-sm text-slate-500">Active Students</p>
          <p className="text-3xl font-bold text-slate-900">{students.length}</p>
        </div>
        <div className="rounded-2xl border border-sky-200 bg-white p-4">
          <p className="text-sm text-slate-500">Your Live Sessions</p>
          <p className="text-3xl font-bold text-slate-900">{liveCount}</p>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-white p-4">
          <p className="text-sm text-slate-500">Written To Grade</p>
          <p className="text-3xl font-bold text-slate-900">{writtenPending}</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {sections.map((section) => {
          const live = liveByGrade[section.grade] ?? 0;
          const written = writtenByGrade[section.grade] ?? 0;
          const q = queries[section.grade] ?? "";
          const filtered = section.items.filter((s) =>
            matchesStudentQuery(q, s.name, s.email, s.planName)
          );
          return (
            <GradeCollapsible
              key={section.grade}
              label={section.label}
              summary={`${section.items.length} student${section.items.length === 1 ? "" : "s"} · ${live} live · ${written} written`}
              className="border-emerald-400/25 bg-emerald-950/40"
              searchPlaceholder="Search by name or email…"
              searchValue={q}
              onSearchChange={(v) =>
                setQueries((prev) => ({ ...prev, [section.grade]: v }))
              }
            >
              {section.items.length === 0 ? (
                <p className="text-sm text-emerald-100/75">
                  No active enrollments in {section.label} yet.
                </p>
              ) : filtered.length === 0 ? (
                <p className="text-sm text-emerald-100/75">No students match that search.</p>
              ) : (
                <ul className="grid min-w-0 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((s) => (
                    <li
                      key={s.id}
                      className="min-w-0 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm"
                    >
                      <p className="truncate font-semibold text-slate-900">{s.name}</p>
                      <p className="truncate text-slate-500">{s.email}</p>
                      <p className="mt-0.5 truncate text-xs text-slate-400">{s.planName}</p>
                    </li>
                  ))}
                </ul>
              )}
            </GradeCollapsible>
          );
        })}
      </div>
    </section>
  );
}
