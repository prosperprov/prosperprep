"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  GradeCollapsible,
  matchesStudentQuery,
} from "@/components/GradeCollapsible";
import { gradeLabel } from "@/lib/grades";
import { formatCtDateTime, formatCtTime } from "@/lib/formatCt";
import { gradeSections } from "@/lib/groupByGrade";

type RecentAttempt = {
  id: string;
  percent: number;
  score: number;
  maxScore: number;
  submittedAt: string;
  attemptsUsed: number;
  maxAttempts: number;
  locked: boolean;
  kind: "lesson" | "quiz";
  title: string;
  href: string | null;
};

type RecentCompletion = {
  id: string;
  title: string;
  order: number;
  completedAt: string | null;
  href: string;
};

type StudentRow = {
  id: string;
  name: string;
  email: string;
  grade: number;
  done: number;
  total: number;
  percent: number;
  nextLesson: { id: string; title: string; order: number; href: string } | null;
  courses: {
    id: string;
    title: string;
    subject: string;
    done: number;
    total: number;
    href: string;
  }[];
  recentAttempts: RecentAttempt[];
  recentCompletions?: RecentCompletion[];
  messageHref: string;
};

type Payload = {
  generatedAt: string;
  maxAttempts: number;
  assignedGrades?: number[];
  students: StudentRow[];
};

const POLL_MS = 20_000;

function StudentCard({
  s,
  open,
  onToggle,
}: {
  s: StudentRow;
  open: boolean;
  onToggle: () => void;
}) {
  const completions = s.recentCompletions ?? [];
  return (
    <li className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full min-w-0 flex-wrap items-center justify-between gap-3 px-4 py-3 text-left hover:bg-slate-50"
      >
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-slate-900">{s.name}</p>
          <p className="truncate text-sm text-slate-500">{s.email}</p>
        </div>
        <div className="flex min-w-0 flex-wrap items-center gap-3">
          <div className="w-32 min-w-0 sm:w-40">
            <div className="mb-1 flex justify-between text-xs font-semibold text-slate-600">
              <span>
                {s.done}/{s.total} lessons
              </span>
              <span>{s.percent}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-emerald-600"
                style={{ width: `${s.percent}%` }}
              />
            </div>
          </div>
          <span className="text-sm font-bold text-slate-500">{open ? "▲" : "▼"}</span>
        </div>
      </button>

      {open && (
        <div className="min-w-0 overflow-x-hidden border-t border-slate-100 bg-slate-50/80 px-4 py-4">
          <div className="flex flex-wrap gap-2">
            {s.nextLesson?.href ? (
              <Link
                href={s.nextLesson.href}
                className="inline-flex min-h-[40px] items-center rounded-xl bg-emerald-700 px-3 py-1.5 text-sm font-bold text-white hover:bg-emerald-800"
              >
                Jump To Next Lesson
              </Link>
            ) : (
              <span className="inline-flex min-h-[40px] items-center rounded-xl bg-emerald-100 px-3 py-1.5 text-sm font-semibold text-emerald-900">
                Caught Up On Lessons
              </span>
            )}
            <Link
              href={s.messageHref}
              className="inline-flex min-h-[40px] items-center rounded-xl border-2 border-sky-300 bg-white px-3 py-1.5 text-sm font-bold text-sky-950 hover:bg-sky-50"
            >
              Message Student
            </Link>
          </div>

          {s.nextLesson && (
            <p className="mt-3 break-words text-sm text-slate-700">
              Next: Lesson {s.nextLesson.order} — {s.nextLesson.title}
            </p>
          )}

          <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-slate-600">
            Course Progress
          </h3>
          <ul className="mt-2 grid min-w-0 gap-2 sm:grid-cols-2">
            {s.courses.map((c) => (
              <li key={c.id} className="min-w-0">
                <Link
                  href={c.href}
                  className="block min-w-0 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm hover:border-emerald-300"
                >
                  <p className="truncate font-semibold text-slate-900">{c.title}</p>
                  <p className="truncate text-slate-500">
                    {c.subject} · {c.done}/{c.total} done
                  </p>
                </Link>
              </li>
            ))}
            {s.courses.length === 0 && (
              <li className="text-sm text-slate-500">No courses for this grade.</li>
            )}
          </ul>

          <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-slate-600">
            Recent Lesson Completions
          </h3>
          {completions.length === 0 ? (
            <p className="mt-2 text-sm text-slate-500">No lesson completions yet.</p>
          ) : (
            <ul className="mt-2 space-y-2">
              {completions.map((c) => {
                const when = formatCtDateTime(c.completedAt);
                return (
                  <li
                    key={c.id}
                    className="flex min-w-0 flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
                  >
                    <div className="min-w-0">
                      <p className="break-words font-semibold text-slate-900">
                        Lesson {c.order} — {c.title}
                      </p>
                      {when ? (
                        <p className="text-slate-500">Completed {when}</p>
                      ) : (
                        <p className="text-slate-500">Completed</p>
                      )}
                    </div>
                    <Link
                      href={c.href}
                      className="shrink-0 font-semibold text-emerald-800 hover:underline"
                    >
                      Open
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}

          <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-slate-600">
            Recent Quiz / Check Attempts
          </h3>
          {s.recentAttempts.length === 0 ? (
            <p className="mt-2 text-sm text-slate-500">No attempts yet.</p>
          ) : (
            <ul className="mt-2 space-y-2">
              {s.recentAttempts.map((a) => {
                const when = formatCtDateTime(a.submittedAt);
                return (
                  <li
                    key={a.id}
                    className="flex min-w-0 flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
                  >
                    <div className="min-w-0">
                      <p className="break-words font-semibold text-slate-900">
                        {a.kind === "lesson" ? "Lesson Check" : "Section Quiz"} · {a.title}
                      </p>
                      <p className="break-words text-slate-500">
                        {a.percent}% ({a.score}/{a.maxScore}) · {a.attemptsUsed}/
                        {a.maxAttempts} attempts
                        {a.locked ? " · locked" : ""}
                        {when ? ` · submitted ${when}` : ""}
                      </p>
                    </div>
                    {a.href ? (
                      <Link
                        href={a.href}
                        className="shrink-0 font-semibold text-emerald-800 hover:underline"
                      >
                        Open
                      </Link>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </li>
  );
}

function GradeProgressSection({
  grade,
  label,
  students,
  openId,
  setOpenId,
}: {
  grade: number;
  label: string;
  students: StudentRow[];
  openId: string | null;
  setOpenId: (id: string | null) => void;
}) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () => students.filter((s) => matchesStudentQuery(query, s.name, s.email)),
    [students, query]
  );

  return (
    <GradeCollapsible
      label={label}
      summary={`${students.length} student${students.length === 1 ? "" : "s"}`}
      searchPlaceholder="Search by name or email…"
      searchValue={query}
      onSearchChange={setQuery}
    >
      {students.length === 0 ? (
        <p className="text-sm text-emerald-100/75">
          No active students in {gradeLabel(grade)} yet.
        </p>
      ) : filtered.length === 0 ? (
        <p className="text-sm text-emerald-100/75">No students match that search.</p>
      ) : (
        <ul className="space-y-3">
          {filtered.map((s) => (
            <StudentCard
              key={s.id}
              s={s}
              open={openId === s.id}
              onToggle={() => setOpenId(openId === s.id ? null : s.id)}
            />
          ))}
        </ul>
      )}
    </GradeCollapsible>
  );
}

export function TeacherLiveProgress() {
  const [data, setData] = useState<Payload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [updatedLabel, setUpdatedLabel] = useState("");

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/teacher/live-progress", { cache: "no-store" });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Could not load progress");
      setData(json as Payload);
      setError(null);
      setUpdatedLabel(formatCtTime((json as Payload).generatedAt));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Load failed");
    }
  }, []);

  useEffect(() => {
    load();
    const id = window.setInterval(load, POLL_MS);
    return () => window.clearInterval(id);
  }, [load]);

  const sections = useMemo(() => {
    if (!data) return [];
    const grades =
      data.assignedGrades && data.assignedGrades.length > 0
        ? data.assignedGrades
        : Array.from(new Set(data.students.map((s) => s.grade))).sort((a, b) => a - b);
    return gradeSections(grades, data.students, (s) => s.grade);
  }, [data]);

  return (
    <section className="mt-10 min-w-0 overflow-x-hidden">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-white">Live Student Progression</h2>
          <p className="mt-1 text-sm text-emerald-100/80">
            Grouped by grade · tap a grade to expand · lesson progress in CT
          </p>
        </div>
        <div className="flex items-center gap-2">
          {updatedLabel ? (
            <span className="text-xs text-emerald-200/80">Updated {updatedLabel}</span>
          ) : null}
          <button
            type="button"
            onClick={load}
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Refresh Now
          </button>
        </div>
      </div>

      {error && (
        <p className="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-900">
          {error}
        </p>
      )}

      {!data && !error && (
        <p className="mt-4 text-sm text-emerald-100/80">Loading live progression…</p>
      )}

      {data && data.students.length === 0 && sections.length === 0 && (
        <p className="mt-4 text-sm text-emerald-100/80">No active students in your grades yet.</p>
      )}

      {sections.length > 0 && (
        <div className="mt-4 space-y-3">
          {sections.map((section) => (
            <GradeProgressSection
              key={section.grade}
              grade={section.grade}
              label={section.label}
              students={section.items}
              openId={openId}
              setOpenId={setOpenId}
            />
          ))}
        </div>
      )}
    </section>
  );
}
