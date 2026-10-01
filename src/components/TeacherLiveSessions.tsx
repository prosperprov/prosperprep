"use client";

import { useMemo, useState } from "react";
import { GradeCollapsible } from "@/components/GradeCollapsible";
import { RescheduleSessionForm } from "@/components/RescheduleSessionForm";
import { gradeSections } from "@/lib/groupByGrade";
import { gradeLabel } from "@/lib/grades";
import { formatCtDateTime } from "@/lib/formatCt";

export type TeacherLiveSessionCard = {
  id: string;
  title: string;
  description: string;
  scheduledAt: string;
  durationMinutes: number;
  meetingUrl: string | null;
  grade: number | null;
  courseTitle: string | null;
  initialLocal: string;
  /** Roster names for this session's grade (searchable when present). */
  studentNames: string[];
};

function sessionMatchesQuery(s: TeacherLiveSessionCard, q: string): boolean {
  if (!q) return true;
  const hay = [
    s.title,
    s.description,
    s.courseTitle ?? "",
    s.grade != null ? gradeLabel(s.grade) : "",
    s.grade != null ? String(s.grade) : "",
    formatCtDateTime(s.scheduledAt),
    ...s.studentNames,
  ]
    .join(" ")
    .toLowerCase();
  return hay.includes(q);
}

function SessionRow({ s }: { s: TeacherLiveSessionCard }) {
  return (
    <li className="flex min-w-0 flex-col gap-2 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <p className="truncate font-medium text-slate-900">{s.title}</p>
        <p className="break-words text-sm text-slate-600">
          {formatCtDateTime(s.scheduledAt)}
          {s.courseTitle ? ` · ${s.courseTitle}` : ""}
          {s.durationMinutes ? ` · ${s.durationMinutes} min` : ""}
        </p>
        <p className="mt-1 break-words text-xs text-slate-500">{s.description}</p>
      </div>
      <div className="flex shrink-0 flex-col gap-2 sm:items-end">
        {s.meetingUrl && (
          <a
            href={s.meetingUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-emerald-800 px-3 py-2 text-center text-sm font-medium text-white hover:bg-emerald-900"
          >
            Start / join room
          </a>
        )}
        <RescheduleSessionForm sessionId={s.id} initialLocal={s.initialLocal} />
      </div>
    </li>
  );
}

function PastSessionsDisclosure({
  sessions,
  emptyLabel,
}: {
  sessions: TeacherLiveSessionCard[];
  emptyLabel: string;
}) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const filtered = useMemo(
    () => sessions.filter((s) => sessionMatchesQuery(s, q)),
    [sessions, q]
  );

  if (sessions.length === 0) return null;

  return (
    <details className="group mt-1 min-w-0 overflow-x-hidden rounded-xl border border-emerald-400/25 bg-emerald-950/25 open:pb-3">
      <summary className="cursor-pointer list-none px-3 py-2.5 text-sm font-semibold text-emerald-50 marker:content-none [&::-webkit-details-marker]:hidden">
        <span className="flex min-w-0 flex-wrap items-center justify-between gap-2">
          <span className="inline-flex min-w-0 items-center gap-2">
            <span
              aria-hidden
              className="inline-block text-emerald-300 transition-transform group-open:rotate-90"
            >
              ▸
            </span>
            <span className="truncate">Past sessions</span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-emerald-200/75">
            {sessions.length}
          </span>
        </span>
      </summary>
      <div className="min-w-0 space-y-3 px-3 pt-1">
        <label className="block min-w-0">
          <span className="sr-only">Search past sessions</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, date, grade, or student…"
            className="w-full min-w-0 rounded-lg border border-emerald-400/40 bg-emerald-950/60 px-3 py-2 text-sm text-emerald-50 placeholder:text-emerald-200/55"
          />
        </label>
        {filtered.length === 0 ? (
          <p className="text-sm text-emerald-100/75">
            {q ? "No past sessions match that search." : emptyLabel}
          </p>
        ) : (
          <ul className="space-y-3">
            {filtered.map((s) => (
              <SessionRow key={s.id} s={s} />
            ))}
          </ul>
        )}
      </div>
    </details>
  );
}

function LiveGradeSection({
  label,
  upcoming,
  past,
}: {
  label: string;
  upcoming: TeacherLiveSessionCard[];
  past: TeacherLiveSessionCard[];
}) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const filteredUpcoming = useMemo(
    () => upcoming.filter((s) => sessionMatchesQuery(s, q)),
    [upcoming, q]
  );

  return (
    <GradeCollapsible
      label={label}
      summary={`${upcoming.length} upcoming${past.length > 0 ? ` · ${past.length} past` : ""}`}
      searchPlaceholder="Search upcoming by title, date, or student…"
      searchValue={query}
      onSearchChange={setQuery}
    >
      {upcoming.length === 0 ? (
        <p className="text-sm text-emerald-100/75">
          No current or upcoming live sessions for {label}.
        </p>
      ) : filteredUpcoming.length === 0 ? (
        <p className="text-sm text-emerald-100/75">No upcoming sessions match that search.</p>
      ) : (
        <ul className="space-y-3">
          {filteredUpcoming.map((s) => (
            <SessionRow key={s.id} s={s} />
          ))}
        </ul>
      )}
      <PastSessionsDisclosure
        sessions={past}
        emptyLabel={`No past sessions for ${label}.`}
      />
    </GradeCollapsible>
  );
}

export function TeacherLiveSessions({
  assignedGrades,
  upcoming,
  past,
}: {
  assignedGrades: number[];
  upcoming: TeacherLiveSessionCard[];
  past: TeacherLiveSessionCard[];
}) {
  if (assignedGrades.length === 0) {
    return (
      <p className="mt-4 text-sm text-emerald-100/80">
        Schedule unlocks after grades are assigned.
      </p>
    );
  }

  if (upcoming.length === 0 && past.length === 0) {
    return (
      <p className="mt-4 text-sm text-emerald-100/80">Schedule your first session above.</p>
    );
  }

  const upcomingSections = gradeSections(
    assignedGrades,
    upcoming.filter((s) => s.grade != null),
    (s) => s.grade
  );
  const pastSections = gradeSections(
    assignedGrades,
    past.filter((s) => s.grade != null),
    (s) => s.grade
  );
  const pastByGrade = new Map(pastSections.map((s) => [s.grade, s.items]));

  return (
    <div className="mt-4 space-y-3">
      {upcomingSections.map((section) => (
        <LiveGradeSection
          key={section.grade}
          label={section.label}
          upcoming={section.items}
          past={pastByGrade.get(section.grade) ?? []}
        />
      ))}
    </div>
  );
}
