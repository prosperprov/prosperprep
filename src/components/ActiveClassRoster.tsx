"use client";

import { useMemo, useState } from "react";
import {
  GradeCollapsible,
  matchesStudentQuery,
} from "@/components/GradeCollapsible";
import { gradeSections } from "@/lib/groupByGrade";

export type RosterEnrollment = {
  id: string;
  grade: number;
  user: { name: string; email: string };
  plan: { name: string };
};

export function ActiveClassRoster({
  assignedGrades,
  enrollments,
}: {
  assignedGrades: number[];
  enrollments: RosterEnrollment[];
}) {
  const sections = useMemo(
    () => gradeSections(assignedGrades, enrollments, (e) => e.grade),
    [assignedGrades, enrollments]
  );
  const [queries, setQueries] = useState<Record<number, string>>({});

  return (
    <div className="mt-4 max-h-[28rem] space-y-3 overflow-y-auto overflow-x-hidden pr-1">
      {sections.map((section) => {
        const q = queries[section.grade] ?? "";
        const filtered = section.items.filter((e) =>
          matchesStudentQuery(q, e.user.name, e.user.email, e.plan.name)
        );
        return (
          <GradeCollapsible
            key={section.grade}
            label={section.label}
            summary={`${section.items.length} enrolled`}
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
              <ul className="space-y-2">
                {filtered.map((e) => (
                  <li
                    key={e.id}
                    className="min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
                  >
                    <p className="truncate font-medium text-slate-900">{e.user.name}</p>
                    <p className="truncate text-slate-500">
                      {e.user.email} · {e.plan.name}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </GradeCollapsible>
        );
      })}
    </div>
  );
}
