import Link from "next/link";
import { ProgressRing } from "@/components/grade6/ProgressRing";
import { SubjectIsland } from "@/components/grade6/SubjectIsland";
import { grade6Encouragement } from "@/lib/grade6Classroom";
import { brand } from "@/config/brand";

export type Grade6Todo =
  | {
      kind: "lesson" | "quiz";
      href: string;
      label: string;
      meta: string;
    };

export type Grade6CourseCard = {
  id: string;
  subject: string;
  title: string;
  done: number;
  total: number;
};

export type Grade6LiveSession = {
  id: string;
  title: string;
  scheduledAtLabel: string;
  teacherName: string;
  courseTitle: string | null;
  meetingUrl: string | null;
  joinable: boolean;
};

export function Grade6ClassroomHub({
  studentName,
  done,
  total,
  unreadMessages,
  nextItem,
  upNext,
  courses,
  liveSessions,
  todayNotes,
  gradeLabelText = "Grade 6",
}: {
  studentName: string;
  done: number;
  total: number;
  unreadMessages: number;
  nextItem: Grade6Todo | null;
  upNext: Grade6Todo[];
  courses: Grade6CourseCard[];
  liveSessions: Grade6LiveSession[];
  todayNotes: string[];
  /** e.g. "Grade 7" — shown in the classroom hero. */
  gradeLabelText?: string;
}) {
  const firstName = studentName.split(" ")[0] || studentName;
  const encouragement = grade6Encouragement(done, total);
  const nextLive = liveSessions[0] ?? null;

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="overflow-hidden rounded-3xl border border-emerald-400/35 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 p-6 text-white shadow-lg shadow-black/30 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
              {brand.shortName} · {gradeLabelText} Classroom
            </p>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Hi, {firstName}
            </h2>
            <p className="mt-2 max-w-xl text-base text-emerald-50/90">{encouragement}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/dashboard/student/messages"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-2xl border border-white/40 bg-white/10 px-4 py-2 text-base font-semibold text-white shadow-sm backdrop-blur-sm hover:bg-white/15"
              >
                Messages
                {unreadMessages > 0 && (
                  <span className="inline-flex min-w-[1.5rem] items-center justify-center rounded-full bg-rose-500 px-1.5 py-0.5 text-xs font-bold text-white">
                    {unreadMessages > 9 ? "9+" : unreadMessages}
                  </span>
                )}
              </Link>
              <Link
                href="/dashboard/student/grades"
                className="inline-flex min-h-[48px] items-center rounded-2xl bg-white px-4 py-2 text-base font-semibold text-emerald-950 shadow-sm hover:bg-emerald-50"
              >
                My grades
              </Link>
              {nextLive?.meetingUrl && nextLive.joinable ? (
                <a
                  href={nextLive.meetingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[48px] items-center rounded-2xl bg-emerald-500 px-4 py-2 text-base font-semibold text-emerald-950 shadow-sm hover:bg-emerald-400"
                >
                  Join live class
                </a>
              ) : (
                <a
                  href="#live-sessions"
                  className="inline-flex min-h-[48px] items-center rounded-2xl border border-emerald-300/60 bg-emerald-950/40 px-4 py-2 text-base font-semibold text-emerald-100 shadow-sm hover:bg-emerald-900/60"
                >
                  Live class
                </a>
              )}
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-2 rounded-3xl border border-white/90 bg-white p-4 shadow-md">
            <ProgressRing done={done} total={total} />
            <p className="text-sm font-medium text-slate-700">
              {done}/{total || 0} lessons
            </p>
          </div>
        </div>
      </section>

      <div className="grid min-w-0 gap-6 lg:grid-cols-3">
        {/* Today strip */}
        <aside className="min-w-0 rounded-3xl border-2 border-emerald-800/15 bg-white p-5 shadow-sm lg:col-span-1">
          <h3 className="text-lg font-bold text-slate-900">Today</h3>
          <ul className="mt-3 space-y-3">
            {nextLive && (
              <li className="rounded-2xl border border-emerald-200 bg-emerald-50 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-800">
                  Live class
                </p>
                <p className="mt-1 font-semibold text-slate-900">{nextLive.title}</p>
                <p className="text-sm text-slate-600">{nextLive.scheduledAtLabel}</p>
                {nextLive.meetingUrl && (
                  <a
                    href={nextLive.meetingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex min-h-[44px] items-center rounded-xl bg-emerald-700 px-3 py-2 text-sm font-bold text-white hover:bg-emerald-800"
                  >
                    {nextLive.joinable ? "Join now" : "Open room"}
                  </a>
                )}
              </li>
            )}
            {unreadMessages > 0 && (
              <li className="rounded-2xl border border-sky-200 bg-sky-50 p-3">
                <p className="font-semibold text-sky-950">
                  {unreadMessages === 1
                    ? "Your teacher sent a note."
                    : `You have ${unreadMessages} new messages.`}
                </p>
                <Link
                  href="/dashboard/student/messages"
                  className="mt-2 inline-flex min-h-[44px] items-center text-sm font-bold text-sky-800 underline"
                >
                  Open inbox
                </Link>
              </li>
            )}
            {todayNotes.map((note) => (
              <li
                key={note}
                className="rounded-2xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-950"
              >
                {note}
              </li>
            ))}
            {!nextLive && unreadMessages === 0 && todayNotes.length === 0 && (
              <li className="text-sm text-slate-600">
                Quiet day so far — pick your next lesson when you&apos;re ready.
              </li>
            )}
          </ul>
        </aside>

        {/* Up next — big cards */}
        <section className="min-w-0 lg:col-span-2">
          {nextItem ? (
            <Link
              href={nextItem.href}
              className="mt-4 flex min-h-[96px] min-w-0 w-full flex-col justify-center rounded-3xl border-2 border-emerald-400 bg-emerald-600 p-6 text-white shadow-md transition hover:bg-emerald-700 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <p className="text-sm font-bold uppercase tracking-wide text-emerald-100">
                  Continue learning
                </p>
                <p className="mt-1 text-2xl font-bold leading-snug break-words">{nextItem.label}</p>
                <p className="mt-1 text-sm text-emerald-100">{nextItem.meta}</p>
              </div>
              <span className="mt-4 inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-2xl bg-white px-5 py-2 text-base font-bold text-emerald-900 sm:mt-0">
                {nextItem.kind === "quiz" ? "Take quiz →" : "Start lesson →"}
              </span>
            </Link>
          ) : (
            <div className="mt-4 rounded-3xl border-2 border-emerald-200 bg-emerald-50 p-6 text-base font-medium text-emerald-950">
              You&apos;re caught up — no incomplete lessons or unlocked quizzes waiting. Great job!
            </div>
          )}

          {upNext.length > 1 && (
            <ol className="mt-4 min-w-0 space-y-2">
              {upNext.slice(1, 4).map((item, i) => (
                <li key={`${item.kind}-${item.href}`} className="min-w-0">
                  <Link
                    href={item.href}
                    className="flex min-h-[56px] min-w-0 w-full items-center gap-3 overflow-hidden rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 hover:border-emerald-300"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-700">
                      {i + 2}
                    </span>
                    <div className="flex min-w-0 flex-1 flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-slate-900">{item.label}</p>
                        <p className="truncate text-xs text-slate-500">{item.meta}</p>
                      </div>
                      <span
                        className={`inline-flex w-fit shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${
                          item.kind === "quiz"
                            ? "bg-amber-100 text-amber-900"
                            : "bg-emerald-100 text-emerald-900"
                        }`}
                      >
                        {item.kind === "quiz" ? "Quiz" : "Lesson"}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          )}
        </section>
      </div>

      {/* Subject islands */}
      <section>
        <h3 className="text-lg font-bold text-white">Subjects</h3>
        <p className="mt-1 text-sm text-emerald-100/80">tap to open a subject.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((c) => (
            <SubjectIsland
              key={c.id}
              href={`/courses/${c.id}`}
              subject={c.subject}
              title={c.title}
              done={c.done}
              total={c.total}
            />
          ))}
          {courses.length === 0 && (
            <p className="text-sm text-emerald-100/80">Enroll to unlock Grade 6 subjects.</p>
          )}
        </div>
      </section>

      {/* Live sessions */}
      <section id="live-sessions">
        <h3 className="text-lg font-bold text-white">Upcoming live sessions</h3>
        <ul className="mt-4 space-y-3">
          {liveSessions.map((s) => (
            <li
              key={s.id}
              className="flex flex-col gap-3 rounded-2xl border-2 border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-base font-bold text-slate-900">{s.title}</p>
                <p className="text-sm text-slate-600">
                  {s.scheduledAtLabel} · {s.teacherName}
                  {s.courseTitle ? ` · ${s.courseTitle}` : ""}
                </p>
              </div>
              {s.meetingUrl && (
                <a
                  href={s.meetingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-700 px-5 py-2 text-base font-bold text-white hover:bg-emerald-800"
                >
                  {s.joinable ? "Join live" : "Open room"}
                </a>
              )}
            </li>
          ))}
          {liveSessions.length === 0 && (
            <p className="text-sm text-emerald-100/80">No upcoming sessions scheduled yet.</p>
          )}
        </ul>
      </section>
    </div>
  );
}
