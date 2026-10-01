import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DashboardShell } from "@/components/DashboardShell";
import { CreateSessionForm } from "@/components/CreateSessionForm";
import { RescheduleSessionForm } from "@/components/RescheduleSessionForm";
import { gradeLabel } from "@/lib/grades";
import { brand } from "@/config/brand";
import { getAssignedTeacherGrades } from "@/lib/teacherGrades";
import { teacherDashNav } from "@/lib/dashboardNav";
import { GradeWrittenPanel } from "@/components/GradeWrittenPanel";
import { Grade6TeacherGlance } from "@/components/grade6/Grade6TeacherGlance";
import { TeacherLiveProgress } from "@/components/TeacherLiveProgress";

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
      title="Teacher Dashboard"
      subtitle={`${brand.shortName} · ${gradeSummary}`}
      nav={teacherDashNav()}
    >
      {session.user.role === "TEACHER" && assignedGrades.length === 0 && (
        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
          Your account has no teaching grades yet. An admin must assign grades under{" "}
          <strong>Admin → Teachers</strong> before roster and scheduling unlock.
        </div>
      )}

      {assignedGrades.length > 0 && (
        <Grade6TeacherGlance
          students={enrollments.map((e) => ({
            id: e.user.id,
            name: e.user.name,
            email: e.user.email,
            planName: e.plan.name,
            grade: e.grade,
          }))}
          liveCount={mySessions.length}
          writtenPending={writtenToGrade.length}
          grades={assignedGrades}
        />
      )}

      <div className="grid gap-8 lg:grid-cols-2">
        <section>
          <h2 className="text-lg font-semibold text-white">Active Class Roster</h2>
          <p className="mt-1 text-sm text-emerald-100/80">
            Active enrollments{assignedGrades.length ? ` · ${gradeSummary}` : ""}.
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
              <p className="text-sm text-emerald-100/80">
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
        <h2 className="text-lg font-semibold text-white">Your Live Sessions</h2>
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
            <p className="text-sm text-emerald-100/80">Schedule your first session above.</p>
          )}
        </ul>
      </section>

      <TeacherLiveProgress />

      <section id="grades" className="mt-10">
        <h2 className="text-lg font-semibold text-white">Student Grades</h2>
        <div id="written" className="mt-6">
          <h3 className="text-base font-semibold text-emerald-50">Written Work To Grade</h3>
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
        </div>
      </section>

    </DashboardShell>
  );
}
