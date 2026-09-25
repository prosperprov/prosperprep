import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DashboardShell } from "@/components/DashboardShell";
import { gradeLabel } from "@/lib/grades";
import { brand } from "@/config/brand";
import { ManageBillingButton } from "@/components/ManageBillingButton";
import { StudentNotifications } from "@/components/StudentNotifications";
import { ChangePasswordForm } from "@/components/ChangePasswordForm";

export const dynamic = "force-dynamic";

export default async function StudentDashboard() {
  const session = await getSession();
  if (!session?.user) redirect("/login?callbackUrl=/dashboard/student");
  if (session.user.role !== "STUDENT" && session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const enrollments = await prisma.enrollment.findMany({
    where: { userId: session.user.id },
    include: { plan: true },
    orderBy: { createdAt: "desc" },
  });
  const active = enrollments.find((e) => e.status === "ACTIVE");
  // Curriculum lock: only ACTIVE enrollment grade counts (not register-time user.grade alone).
  const grade = active?.grade ?? null;

  const courses = grade != null
    ? await prisma.course.findMany({
        where: { grade },
        orderBy: { order: "asc" },
        include: {
          lessons: { orderBy: { order: "asc" } },
          quizzes: { orderBy: { order: "asc" } },
          _count: { select: { lessons: true } },
        },
      })
    : [];

  const lessonIds = courses.flatMap((c) => c.lessons.map((l) => l.id));
  const progress = lessonIds.length
    ? await prisma.progress.findMany({
        where: { userId: session.user.id, lessonId: { in: lessonIds } },
      })
    : [];
  const completedSet = new Set(progress.filter((p) => p.completed).map((p) => p.lessonId));

  const quizIds = courses.flatMap((c) => c.quizzes.map((q) => q.id));
  const quizAttempts = quizIds.length
    ? await prisma.attempt.findMany({
        where: { userId: session.user.id, quizId: { in: quizIds } },
        select: { quizId: true },
      })
    : [];
  const attemptedQuizzes = new Set(quizAttempts.map((a) => a.quizId).filter(Boolean) as string[]);

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

  const todos: TodoItem[] = [];
  for (const course of courses) {
    for (const lesson of course.lessons) {
      if (!completedSet.has(lesson.id)) {
        todos.push({
          kind: "lesson",
          href: `/courses/${course.id}/lessons/${lesson.id}`,
          label: lesson.title,
          meta: `${course.subject} · Lesson ${lesson.order}`,
          order: lesson.order,
          courseOrder: course.order,
        });
      }
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
      userId: session.user.id,
      read: false,
      type: { in: ["live_session_created", "live_session_updated"] },
    },
    orderBy: { createdAt: "desc" },
    take: 20,
  });
  const notifications = notificationRows.map((n) => {
    let meetingUrl: string | null = null;
    let targetGrade: number | null = null;
    try {
      const meta = JSON.parse(n.meta || "{}") as { meetingUrl?: string | null; targetGrade?: number | null };
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
  }).filter((notice) => grade != null && notice.targetGrade === grade);

  const totalLessons = lessonIds.length;
  const done = completedSet.size;

  return (
    <DashboardShell
      title={`Welcome, ${session.user.name}`}
      subtitle={`${brand.shortName} student dashboard`}
      nav={[
        { href: "/dashboard/student", label: "Overview" },
        { href: "/dashboard/student/grades", label: "Grades" },
        { href: "/dashboard/student/report-cards", label: "Report cards" },
        { href: "/courses", label: "Catalog" },
        { href: "/enroll", label: "Enrollment" },
        { href: "/dashboard/student#account", label: "Account" },
      ]}
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

      {active?.demoMode && (
        <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          Enrollment is <strong>active in demo mode</strong> (no Stripe charge). Plan: {active.plan.name}.
        </div>
      )}

      <div className="mb-6">
        <ManageBillingButton
          hasStripeCustomer={Boolean(
            enrollments.some((e) => e.stripeCustomerId && !e.demoMode)
          )}
          demoOnly={Boolean(active?.demoMode) && !enrollments.some((e) => e.stripeCustomerId)}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Grade</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">
            {grade != null ? gradeLabel(grade) : "—"}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Courses</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">{courses.length}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Lessons completed</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">
            {done}/{totalLessons || 0} lessons
          </p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">Up next</h2>
        <p className="mt-1 text-sm text-slate-500">
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
            <p className="text-sm text-slate-500">
              {grade != null
                ? "You’re caught up — no incomplete lessons or unlocked quizzes waiting."
                : "Enroll to see your to-do list here."}
            </p>
          )}
        </ul>
        {todos.length > upNext.length && (
          <p className="mt-3 text-xs text-slate-500">
            Showing {upNext.length} of {todos.length} open items.
          </p>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">Your courses</h2>
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
                  {doneCount}/{course._count.lessons} lessons marked complete
                </p>
              </Link>
            );
          })}
          {courses.length === 0 && (
            <p className="text-sm text-slate-500">Enroll to see grade-level courses here.</p>
          )}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">Upcoming live sessions</h2>
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
            <p className="text-sm text-slate-500">No upcoming sessions scheduled yet.</p>
          )}
        </ul>
      </section>

      <section id="account" className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">Account</h2>
        <p className="mt-1 mb-4 text-sm text-slate-500">
          Change the password you use to sign in to Prosper Prep.
        </p>
        <ChangePasswordForm />
      </section>
    </DashboardShell>
  );
}
