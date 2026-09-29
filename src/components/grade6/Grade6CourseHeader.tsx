import Link from "next/link";
import { subjectIslandStyle } from "@/lib/grade6Classroom";
import { gradeLabel } from "@/lib/grades";

export function Grade6CourseHeader({
  subject,
  title,
  description,
  grade,
  done,
  total,
  coursePct,
  courseLetter,
  askTeacherHref,
}: {
  subject: string;
  title: string;
  description: string;
  grade: number;
  done: number;
  total: number;
  coursePct: number | null;
  courseLetter: string | null;
  askTeacherHref?: string;
}) {
  const style = subjectIslandStyle(subject);
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <header
      className={`mb-8 overflow-hidden rounded-3xl border-2 p-6 shadow-sm sm:p-8 ${style.accent}`}
    >
      <Link
        href="/dashboard/student"
        className="text-sm font-semibold text-slate-800 underline-offset-2 hover:underline"
      >
        ← Back to Grade 6 classroom
      </Link>
      <div className="mt-4 flex flex-wrap items-start gap-4">
        <span
          className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-3xl shadow-sm"
          aria-hidden
        >
          {style.emoji}
        </span>
        <div className="min-w-0 flex-1">
          <p className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${style.badge}`}>
            {style.shortLabel} · {gradeLabel(grade)}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 max-w-2xl text-base text-slate-700">{description}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
          <p className="text-sm font-medium text-slate-600">Lessons done</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">
            {done}/{total}
          </p>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-slate-800" style={{ width: `${pct}%` }} />
          </div>
        </div>
        <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
          <p className="text-sm font-medium text-slate-600">Your average</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">
            {coursePct != null ? `${coursePct}%` : "—"}
            {courseLetter ? ` (${courseLetter})` : ""}
          </p>
        </div>
        <div className="flex flex-col justify-center gap-2 rounded-2xl bg-white/80 p-4 shadow-sm">
          {askTeacherHref ? (
            <Link
              href={askTeacherHref}
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-sky-700 px-4 py-2 text-base font-bold text-white hover:bg-sky-800"
            >
              Ask my teacher
            </Link>
          ) : (
            <Link
              href="/dashboard/student/messages"
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-sky-700 px-4 py-2 text-base font-bold text-white hover:bg-sky-800"
            >
              Messages
            </Link>
          )}
          <Link
            href="/dashboard/student"
            className="inline-flex min-h-[44px] items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-800 hover:border-emerald-300"
          >
            Classroom home
          </Link>
        </div>
      </div>
    </header>
  );
}
