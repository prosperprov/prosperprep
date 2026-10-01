import Link from "next/link";
import { gradeLabel } from "@/lib/grades";

export type Grade6RosterRow = {
  id: string;
  name: string;
  email: string;
  planName: string;
  grade?: number;
};

/**
 * Immersive classroom glance for teachers — all assigned grades.
 */
export function Grade6TeacherGlance({
  students,
  liveCount,
  writtenPending,
  grades = [6],
}: {
  students: Grade6RosterRow[];
  liveCount: number;
  writtenPending: number;
  grades?: number[];
}) {
  const rosterTitle =
    grades.length === 1
      ? `${gradeLabel(grades[0])} Immersive Roster`
      : "Immersive Roster";
  const gradeList = grades.map(gradeLabel).join(", ");

  return (
    <section className="mb-8 overflow-hidden rounded-3xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-800">
            Classroom Glance
          </p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">{rosterTitle}</h2>
          {grades.length > 0 ? (
            <p className="mt-1 text-sm text-slate-600">{gradeList}</p>
          ) : null}
        </div>
        <Link
          href="/dashboard/teacher/messages"
          className="inline-flex min-h-[48px] items-center rounded-2xl bg-sky-700 px-4 py-2 text-base font-bold text-white hover:bg-sky-800"
        >
          Message Class
        </Link>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
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

      {students.length > 0 && (
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {students.slice(0, 9).map((s) => (
            <li
              key={s.id}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm"
            >
              <p className="font-semibold text-slate-900">{s.name}</p>
              <p className="truncate text-slate-500">
                {s.email}
                {s.grade != null ? ` · ${gradeLabel(s.grade)}` : ""}
              </p>
            </li>
          ))}
        </ul>
      )}
      {students.length > 9 && (
        <p className="mt-2 text-xs text-slate-500">
          Showing 9 of {students.length} students — full roster below.
        </p>
      )}
    </section>
  );
}
