"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { gradeLabel } from "@/lib/grades";

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
  messageHref: string;
};

type Payload = {
  generatedAt: string;
  maxAttempts: number;
  students: StudentRow[];
};

const POLL_MS = 20_000;

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
      const t = new Date((json as Payload).generatedAt);
      setUpdatedLabel(
        t.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    } catch (e) {
      setError(e instanceof Error ? e.message : "Load failed");
    }
  }, []);

  useEffect(() => {
    load();
    const id = window.setInterval(load, POLL_MS);
    return () => window.clearInterval(id);
  }, [load]);

  return (
    <section className="mt-10">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Live Student Progression</h2>
        </div>
        <div className="flex items-center gap-2">
          {updatedLabel ? (
            <span className="text-xs text-slate-500">Updated {updatedLabel} CT</span>
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
        <p className="mt-4 text-sm text-slate-500">Loading live progression…</p>
      )}

      {data && data.students.length === 0 && (
        <p className="mt-4 text-sm text-slate-500">No active students in your grades yet.</p>
      )}

      {data && data.students.length > 0 && (
        <ul className="mt-4 space-y-3">
          {data.students.map((s) => {
            const open = openId === s.id;
            return (
              <li
                key={s.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : s.id)}
                  className="flex w-full flex-wrap items-center justify-between gap-3 px-4 py-3 text-left hover:bg-slate-50"
                >
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-900">{s.name}</p>
                    <p className="truncate text-sm text-slate-500">
                      {s.email} · {gradeLabel(s.grade)}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="min-w-[8rem]">
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
                  <div className="border-t border-slate-100 bg-slate-50/80 px-4 py-4">
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
                      <p className="mt-3 text-sm text-slate-700">
                        Next: Lesson {s.nextLesson.order} — {s.nextLesson.title}
                      </p>
                    )}

                    <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-slate-600">
                      Course Progress
                    </h3>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                      {s.courses.map((c) => (
                        <li key={c.id}>
                          <Link
                            href={c.href}
                            className="block rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm hover:border-emerald-300"
                          >
                            <p className="font-semibold text-slate-900">{c.title}</p>
                            <p className="text-slate-500">
                              {c.subject} · {c.done}/{c.total} done
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-slate-600">
                      Recent Quiz / Check Attempts
                    </h3>
                    {s.recentAttempts.length === 0 ? (
                      <p className="mt-2 text-sm text-slate-500">No attempts yet.</p>
                    ) : (
                      <ul className="mt-2 space-y-2">
                        {s.recentAttempts.map((a) => (
                          <li
                            key={a.id}
                            className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
                          >
                            <div>
                              <p className="font-semibold text-slate-900">
                                {a.kind === "lesson" ? "Lesson Check" : "Section Quiz"} · {a.title}
                              </p>
                              <p className="text-slate-500">
                                {a.percent}% ({a.score}/{a.maxScore}) · {a.attemptsUsed}/
                                {a.maxAttempts} attempts
                                {a.locked ? " · locked" : ""}
                              </p>
                            </div>
                            {a.href ? (
                              <Link
                                href={a.href}
                                className="font-semibold text-emerald-800 hover:underline"
                              >
                                Open
                              </Link>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
