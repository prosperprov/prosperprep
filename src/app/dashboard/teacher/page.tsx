import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DashboardShell } from "@/components/DashboardShell";
import { CreateSessionForm } from "@/components/CreateSessionForm";
import { RescheduleSessionForm } from "@/components/RescheduleSessionForm";
import { gradeLabel } from "@/lib/grades";
import { brand } from "@/config/brand";
import { getAssignedTeacherGrades } from "@/lib/teacherGrades";
import { ChangePasswordForm } from "@/components/ChangePasswordForm";
import { GradeWrittenPanel } from "@/components/GradeWrittenPanel";

export const dynamic = "force-dynamic";

/** Browser datetime-local value from a Date (local wall time). */
function toDatetimeLocalValue(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default async function TeacherDashboard() {
  const session = await getSession();
  if (!session?.user) redirect("/login?callbackUrl=/dashboard/teacher");
  if (session.user.role !== "TEACHER" && session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const assignedGrades = await getAssignedTeacherGrades(
    session.user.id,
    session.user.role
  );

  const enrollments =
    assignedGrades.length === 0
      ? []
      : await prisma.enrollment.findMany({
          where: { status: "ACTIVE", grade: { in: assignedGrades } },
          include: {
            user: { select: { id: true, name: true, email: true, grade: true } },
            plan: true,
          },
          orderBy: { grade: "asc" },
        });

  const mySessions = await prisma.liveSession.findMany({
    where: {
      teacherId: session.user.id,
      ...(session.user.role === "TEACHER"
        ? assignedGrades.length > 0
          ? { grade: { in: assignedGrades } }
          : { id: { in: [] } }
        : {}),
    },
    orderBy: { scheduledAt: "desc" },
    take: 20,
    include: { course: { select: { title: true } } },
  });

  const courses =
    assignedGrades.length === 0
      ? []
      : await prisma.course.findMany({
          where: { grade: { in: assignedGrades } },
          orderBy: [{ grade: "asc" }, { order: "asc" }],
          select: { id: true, title: true, grade: true },
        });

  const writtenToGrade =
    assignedGrades.length === 0
      ? []
      : await prisma.writtenSubmission.findMany({
          where: {
            status: "SUBMITTED",
            course: { grade: { in: assignedGrades } },
          },
          orderBy: { submittedAt: "asc" },
          take: 50,
          include: {
            user: { select: { name: true, email: true } },
            course: { select: { title: true, grade: true } },
            lesson: { select: { title: true } },
          },
        });

  const gradeSummary =
    assignedGrades.length === 0
      ? "no grades assigned"
      : assignedGrades.map(gradeLabel).join(", ");

  return (
    <DashboardShell
      title="Teacher dashboard"
      subtitle={`${brand.shortName} · ${gradeSummary}`}
      nav={[
        { href: "/dashboard/teacher", label: "Classroom" },
        { href: "/courses", label: "Catalog" },
        { href: "/dashboard/teacher#grades", label: "Grades" },
        { href: "/dashboard/teacher#account", label: "Account" },
      ]}
    >
      {session.user.role === "TEACHER" && assignedGrades.length === 0 && (
        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
          Your account has no teaching grades yet. An admin must assign grades under{" "}
          <strong>Admin → Teachers</strong> before roster and scheduling unlock.
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-2">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">Active class roster</h2>
          <p className="mt-1 text-sm text-slate-500">
            Students with active enrollment in your assigned grades
            {assignedGrades.length ? ` (${gradeSummary})` : ""}.
          </p>
          <ul className="mt-4 max-h-96 space-y-2 overflow-y-auto">
            {enrollments.map((e) => (
              <li key={e.id} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm">
                <p className="font-medium text-slate-900">{e.user.name}</p>
                <p className="text-slate-500">
                  {e.user.email} · {gradeLabel(e.grade)} · {e.plan.name}
                </p>
              </li>
            ))}
            {enrollments.length === 0 && (
              <p className="text-sm text-slate-500">
                {assignedGrades.length === 0
                  ? "No grades assigned yet."
                  : "No active enrollments in your grades yet."}
              </p>
            )}
          </ul>
        </section>

        <CreateSessionForm courses={courses} allowedGrades={assignedGrades} />
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">Your live sessions</h2>
        <ul className="mt-4 space-y-3">
          {mySessions.map((s) => (
            <li
              key={s.id}
              className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-medium text-slate-900">{s.title}</p>
                <p className="text-sm text-slate-600">
                  {s.scheduledAt.toLocaleString("en-US", { timeZone: "America/Chicago" })} CT
                  {s.grade != null ? ` · ${gradeLabel(s.grade)}` : ""}
                  {s.course ? ` · ${s.course.title}` : ""}
                </p>
                <p className="mt-1 text-xs text-slate-500">{s.description}</p>
              </div>
              <div className="flex flex-col gap-2 sm:items-end">
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
                <RescheduleSessionForm
                  sessionId={s.id}
                  initialLocal={toDatetimeLocalValue(s.scheduledAt)}
                />
              </div>
            </li>
          ))}
          {mySessions.length === 0 && (
            <p className="text-sm text-slate-500">Schedule your first session above.</p>
          )}
        </ul>
      </section>

      <section id="grades" className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">Student grades</h2>
        <p className="mt-1 text-sm text-slate-500">
          Open a student course from the catalog after they submit lesson checks. Course averages use
          lesson checks (40%) and section quizzes (60%); written work blends ~10% when graded.
          Latest attempt counts. Catalog is limited to your assigned grades.
        </p>
      </section>

      <section id="written" className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">Written work to grade</h2>
        <p className="mt-1 text-sm text-slate-500">
          Essays, fix-and-justify, math reasoning, and science write-ups submitted by students in your
          assigned grades. Saving a score creates a WRITTEN gradebook entry.
        </p>
        <GradeWrittenPanel
          initial={writtenToGrade.map((w) => ({
            id: w.id,
            title: w.title,
            prompt: w.prompt,
            body: w.body,
            maxScore: w.maxScore,
            status: w.status,
            submittedAt: w.submittedAt.toISOString(),
            user: w.user,
            course: w.course,
            lesson: w.lesson,
          }))}
        />
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
