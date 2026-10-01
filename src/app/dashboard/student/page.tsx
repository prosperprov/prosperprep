import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DashboardShell } from "@/components/DashboardShell";
import { gradeLabel } from "@/lib/grades";
import { brand } from "@/config/brand";
import { StudentNotifications } from "@/components/StudentNotifications";
import { studentDashNav } from "@/lib/dashboardNav";
import { isGrade6Classroom, isRetiredSection } from "@/lib/grade6Classroom";
import { Grade6ClassroomHub } from "@/components/grade6/Grade6ClassroomHub";
import { loadInboxForUser } from "@/lib/messageInbox";

export const dynamic = "force-dynamic";

type SessionUser = {
  id: string;
  name: string;
  role: string;
};

type TodoItem =
  | {
      kind: "lesson";
      href: string;
      label: string;
      meta: string;
      order: number;
      courseOrder: number;
    }
  | {
      kind: "quiz";
      href: string;
      label: string;
      meta: string;
      order: number;
      courseOrder: number;
    };

/**
 * D1 allows max 100 bound parameters per query. Never use
 * `lessonId: { in: hundredsOfIds }` — use relation filters instead.
 */
async function loadStudentDashboardData(user: SessionUser) {
  const enrollments = await prisma.enrollment.findMany({
    where: { userId: user.id },
    include: { plan: true },
    orderBy: { createdAt: "desc" },
  });
  const active = enrollments.find((e) => e.status === "ACTIVE");
  // Curriculum lock: only ACTIVE enrollment grade counts (not register-time user.grade alone).
  const grade = active?.grade ?? null;

  // Metadata only — no Lesson.content. Do not filter retired in SQL
  // (avoid startsWith/null quirks on D1); filter in JS with isRetiredSection.
  const rawCourses =
    grade != null
      ? await prisma.course.findMany({
          where: { grade },
          orderBy: { order: "asc" },
          select: {
            id: true,
            subject: true,
            title: true,
            order: true,
            lessons: {
              orderBy: { order: "asc" },
              select: {
                id: true,
                title: true,
                order: true,
                sectionKey: true,
                durationMin: true,
                courseId: true,
              },
            },
            quizzes: {
              orderBy: { order: "asc" },
              select: {
                id: true,
                title: true,
                order: true,
                sectionKey: true,
              },
            },
          },
        })
      : [];

  const courses = rawCourses.map((c) => ({
    ...c,
    lessons: c.lessons.filter((l) => !isRetiredSection(l.sectionKey)),
    quizzes: c.quizzes.filter((q) => !isRetiredSection(q.sectionKey)),
  }));

  // Relation filter — avoids D1 100-bound-param limit on large `in:` lists.
  const progress =
    grade != null
      ? await prisma.progress.findMany({
          where: {
            userId: user.id,
            completed: true,
            lesson: { course: { grade } },
          },
          select: { lessonId: true },
        })
      : [];
  const completedSet = new Set(progress.map((p) => p.lessonId));

  const quizAttempts =
    grade != null
      ? await prisma.attempt.findMany({
          where: {
            userId: user.id,
            quiz: { course: { grade } },
          },
          select: { quizId: true },
        })
      : [];
  const attemptedQuizzes = new Set(
    quizAttempts.map((a) => a.quizId).filter(Boolean) as string[]
  );

  // Cap todos: first incomplete lesson per course + unlocked section quizzes,
  // then sort and take 12. Avoid building 200+ todo objects from every lesson.
  const todos: TodoItem[] = [];
  for (const course of courses) {
    const firstIncomplete = course.lessons.find((l) => !completedSet.has(l.id));
    if (firstIncomplete) {
      todos.push({
        kind: "lesson",
        href: `/courses/${course.id}/lessons/${firstIncomplete.id}`,
        label: firstIncomplete.title,
        meta: `${course.subject} · Lesson ${firstIncomplete.order}`,
        order: firstIncomplete.order,
        courseOrder: course.order,
      });
    }
    for (const quiz of course.quizzes) {
      if (!quiz.sectionKey) continue;
      const sectionLessonIds = course.lessons
        .filter((l) => l.sectionKey === quiz.sectionKey)
        .map((l) => l.id);
      const unlocked =
        sectionLessonIds.length > 0 &&
        sectionLessonIds.every((id) => completedSet.has(id));
      if (!unlocked) continue;
      if (attemptedQuizzes.has(quiz.id)) continue;
      todos.push({
        kind: "quiz",
        href: `/courses/${course.id}/quizzes/${quiz.id}`,
        label: quiz.title,
        meta: `${course.subject} · Unlocked section quiz`,
        order: quiz.order + 1000,
        courseOrder: course.order,
      });
    }
  }

  todos.sort((a, b) => a.courseOrder - b.courseOrder || a.order - b.order);
  const upNext = todos.slice(0, 12);

  const liveSessions = await prisma.liveSession.findMany({
    where: {
      scheduledAt: { gte: new Date(Date.now() - 1000 * 60 * 30) },
      grade: grade == null ? { in: [] } : grade,
    },
    orderBy: { scheduledAt: "asc" },
    take: 8,
    include: { teacher: { select: { name: true } }, course: { select: { title: true } } },
  });

  const notificationRows = await prisma.notification.findMany({
    where: {
      userId: user.id,
      read: false,
      type: { in: ["live_session_created", "live_session_updated"] },
    },
    orderBy: { createdAt: "desc" },
    take: 20,
  });
  const notifications = notificationRows
    .map((n) => {
      let meetingUrl: string | null = null;
      let targetGrade: number | null = null;
      try {
        const meta = JSON.parse(n.meta || "{}") as {
          meetingUrl?: string | null;
          targetGrade?: number | null;
        };
        meetingUrl = meta.meetingUrl ?? null;
        targetGrade = meta.targetGrade ?? null;
      } catch {
        meetingUrl = null;
      }
      return {
        id: n.id,
        title: n.title,
        body: n.body,
        createdAt: n.createdAt.toISOString(),
        meetingUrl,
        kind: n.type,
        targetGrade,
      };
    })
    .filter((notice) => grade != null && notice.targetGrade === grade);

  const lessonIds = courses.flatMap((c) => c.lessons.map((l) => l.id));
  const totalLessons = lessonIds.length;
  const done = lessonIds.filter((id) => completedSet.has(id)).length;

  const grade6 = isGrade6Classroom(grade);

  let unreadMessages = 0;
  try {
    const { inboxThreads } = await loadInboxForUser(user.id);
    unreadMessages = inboxThreads.filter((t) => t.unread).length;
  } catch {
    unreadMessages = 0;
  }

  const todayNotes = notifications
    .filter((n) => n.kind === "live_session_updated")
    .slice(0, 3)
    .map((n) => n.title || "Live class updated");

  return {
    active,
    grade,
    courses,
    upNext,
    todosCount: todos.length,
    liveSessions,
    notifications,
    totalLessons,
    done,
    grade6,
    unreadMessages,
    todayNotes,
    completedSet,
  };
}

export default async function StudentDashboard() {
  const session = await getSession();
  if (!session?.user) redirect("/login?callbackUrl=/dashboard/student");
  if (session.user.role !== "STUDENT" && session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const navFallback = studentDashNav("Overview");

  let data: Awaited<ReturnType<typeof loadStudentDashboardData>>;
  try {
    data = await loadStudentDashboardData({
      id: session.user.id,
      name: session.user.name,
      role: session.user.role,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[student-dashboard]", message, err);
    return (
      <DashboardShell
        title={`Welcome, ${session.user.name}`}
        subtitle={`${brand.shortName} student dashboard`}
        nav={navFallback}
      >
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-5 text-sm text-rose-950">
          <p className="font-semibold">We couldn&apos;t load your classroom just now.</p>
          <p className="mt-2 text-rose-900">
            Please refresh in a moment. If this keeps happening, tell a teacher or admin.
          </p>
          <p className="mt-3 font-mono text-xs text-rose-800/80">Detail: {message.slice(0, 240)}</p>
        </div>
      </DashboardShell>
    );
  }

  const {
    active,
    grade,
    courses,
    upNext,
    todosCount,
    liveSessions,
    notifications,
    totalLessons,
    done,
    grade6,
    unreadMessages,
    todayNotes,
    completedSet,
  } = data;

  const nav = studentDashNav("Classroom");
  const classroomTitle =
    grade != null ? `${gradeLabel(grade)} Classroom` : "Classroom";

  return (
    <DashboardShell
      title={classroomTitle}
      subtitle={`${brand.shortName} · Immersive Home Base`}
      nav={nav}
    >
      <StudentNotifications items={notifications} />

      {!active && (
        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
          No active enrollment yet.{" "}
          <Link href="/enroll" className="font-semibold underline">
            Complete enrollment
          </Link>{" "}
          to unlock your grade path.
        </div>
      )}


      {grade6 ? (
        <Grade6ClassroomHub
          studentName={session.user.name}
          done={done}
          total={totalLessons}
          unreadMessages={unreadMessages}
          gradeLabelText={grade != null ? gradeLabel(grade) : "Classroom"}
          nextItem={upNext[0] ?? null}
          upNext={upNext.map((t) => ({
            kind: t.kind,
            href: t.href,
            label: t.label,
            meta: t.meta,
          }))}
          courses={courses.map((course) => ({
            id: course.id,
            subject: course.subject,
            title: course.title,
            done: course.lessons.filter((l) => completedSet.has(l.id)).length,
            total: course.lessons.length,
          }))}
          liveSessions={liveSessions.map((s) => {
            const msUntil = s.scheduledAt.getTime() - Date.now();
            const joinable = msUntil <= 15 * 60 * 1000 && msUntil >= -30 * 60 * 1000;
            return {
              id: s.id,
              title: s.title,
              scheduledAtLabel: `${s.scheduledAt.toLocaleString("en-US", {
                timeZone: "America/Chicago",
              })} CT`,
              teacherName: s.teacher.name,
              courseTitle: s.course?.title ?? null,
              meetingUrl: s.meetingUrl,
              joinable,
            };
          })}
          todayNotes={todayNotes}
        />
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-800/20 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Grade</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {grade != null ? gradeLabel(grade) : "—"}
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-800/20 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Courses</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">{courses.length}</p>
            </div>
            <div className="rounded-2xl border border-emerald-800/20 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">Lessons completed</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {done}/{totalLessons || 0} lessons
              </p>
            </div>
          </div>

          <section className="mt-10">
            <h2 className="text-lg font-semibold text-white">Up next</h2>
            <p className="mt-1 text-sm text-emerald-100/80">
              Incomplete lessons and unlocked section quizzes — your to-do list.
            </p>
            <ul className="mt-4 space-y-2">
              {upNext.map((item) => (
                <li key={`${item.kind}-${item.href}`}>
                  <Link
                    href={item.href}
                    className="flex min-h-[48px] flex-col justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 hover:border-emerald-300 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="font-medium text-slate-900">{item.label}</p>
                      <p className="text-xs text-slate-500">{item.meta}</p>
                    </div>
                    <span
                      className={`mt-2 inline-flex w-fit rounded-full px-2.5 py-1 text-xs font-semibold sm:mt-0 ${
                        item.kind === "quiz"
                          ? "bg-amber-100 text-amber-900"
                          : "bg-emerald-100 text-emerald-900"
                      }`}
                    >
                      {item.kind === "quiz" ? "Section quiz" : "Lesson"}
                    </span>
                  </Link>
                </li>
              ))}
              {upNext.length === 0 && (
                <p className="text-sm text-emerald-100/80">
                  {grade != null
                    ? "You’re caught up — no incomplete lessons or unlocked quizzes waiting."
                    : "Enroll to see your to-do list here."}
                </p>
              )}
            </ul>
            {todosCount > upNext.length && (
              <p className="mt-3 text-xs text-emerald-200/70">
                Showing {upNext.length} of {todosCount} open items.
              </p>
            )}
          </section>

          <section className="mt-10">
            <h2 className="text-lg font-semibold text-white">Your courses</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {courses.map((course) => {
                const doneCount = course.lessons.filter((l) => completedSet.has(l.id)).length;
                return (
                  <Link
                    key={course.id}
                    href={`/courses/${course.id}`}
                    className="rounded-xl border border-slate-200 bg-white p-4 hover:border-emerald-300"
                  >
                    <p className="text-xs text-emerald-800">{course.subject}</p>
                    <p className="font-semibold text-slate-900">{course.title}</p>
                    <p className="mt-2 text-xs text-slate-500">
                      {doneCount}/{course.lessons.length} lessons marked complete
                    </p>
                  </Link>
                );
              })}
              {courses.length === 0 && (
                <p className="text-sm text-emerald-100/80">Enroll to see grade-level courses here.</p>
              )}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-lg font-semibold text-white">Upcoming live sessions</h2>
            <ul className="mt-4 space-y-3">
              {liveSessions.map((s) => (
                <li
                  key={s.id}
                  className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-medium text-slate-900">{s.title}</p>
                    <p className="text-sm text-slate-600">
                      {s.scheduledAt.toLocaleString("en-US", { timeZone: "America/Chicago" })} CT ·{" "}
                      {s.teacher.name}
                      {s.course ? ` · ${s.course.title}` : ""}
                    </p>
                  </div>
                  {s.meetingUrl && (
                    <a
                      href={s.meetingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-emerald-800 px-3 py-2 text-center text-sm font-medium text-white hover:bg-emerald-900"
                    >
                      Join live room
                    </a>
                  )}
                </li>
              ))}
              {liveSessions.length === 0 && (
                <p className="text-sm text-emerald-100/80">No upcoming sessions scheduled yet.</p>
              )}
            </ul>
          </section>
        </>
      )}
    </DashboardShell>
  );
}
