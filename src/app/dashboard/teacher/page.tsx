import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DashboardShell } from "@/components/DashboardShell";
import { CreateSessionForm } from "@/components/CreateSessionForm";
import { RescheduleSessionForm } from "@/components/RescheduleSessionForm";
import { gradeLabel } from "@/lib/grades";
import { gradeSections } from "@/lib/groupByGrade";
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
          liveByGrade={Object.fromEntries(
            assignedGrades.map((g) => [
              g,
              mySessions.filter((s) => s.grade === g).length,
            ])
          )}
          writtenByGrade={Object.fromEntries(
            assignedGrades.map((g) => [
              g,
              writtenToGrade.filter((w) => w.course.grade === g).length,
            ])
          )}
        />
      )}

      <div className="grid min-w-0 gap-8 lg:grid-cols-2">
        <section className="min-w-0 overflow-x-hidden">
          <h2 className="text-lg font-semibold text-white">Active Class Roster</h2>
          <p className="mt-1 text-sm text-emerald-100/80">
            Active enrollments by grade
            {assignedGrades.length ? ` · ${gradeSummary}` : ""}.
          </p>
          {assignedGrades.length === 0 ? (
            <p className="mt-4 text-sm text-emerald-100/80">No grades assigned yet.</p>
          ) : (
            <div className="mt-4 max-h-96 space-y-4 overflow-y-auto overflow-x-hidden pr-1">
              {gradeSections(assignedGrades, enrollments, (e) => e.grade).map((section) => (
                <div key={section.grade} className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-sm font-semibold text-emerald-50">{section.label}</h3>
                    <span className="text-xs font-semibold uppercase tracking-wide text-emerald-200/75">
                      {section.items.length} enrolled
                    </span>
                  </div>
                  {section.items.length === 0 ? (
                    <p className="text-sm text-emerald-100/75">
                      No active enrollments in {section.label} yet.
                    </p>
                  ) : (
                    <ul className="space-y-2">
                      {section.items.map((e) => (
                        <li
                          key={e.id}
                          className="min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
                        >
                          <p className="truncate font-medium text-slate-900">{e.user.name}</p>
                          <p className="truncate text-slate-500">
                            {e.user.email} · {e.plan.name}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        <CreateSessionForm courses={courses} allowedGrades={assignedGrades} />
      </div>

      <section className="mt-10 min-w-0 overflow-x-hidden">
        <h2 className="text-lg font-semibold text-white">Your Live Sessions</h2>
        {assignedGrades.length === 0 ? (
          <p className="mt-4 text-sm text-emerald-100/80">Schedule unlocks after grades are assigned.</p>
        ) : mySessions.length === 0 ? (
          <p className="mt-4 text-sm text-emerald-100/80">Schedule your first session above.</p>
        ) : (
          <div className="mt-4 space-y-6">
            {gradeSections(
              assignedGrades,
              mySessions.filter((s) => s.grade != null),
              (s) => s.grade
            ).map((section) => (
              <div key={section.grade} className="min-w-0">
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-emerald-50">{section.label}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wide text-emerald-200/75">
                    {section.items.length} session{section.items.length === 1 ? "" : "s"}
                  </span>
                </div>
                {section.items.length === 0 ? (
                  <p className="text-sm text-emerald-100/75">
                    No live sessions scheduled for {section.label}.
                  </p>
                ) : (
                  <ul className="space-y-3">
                    {section.items.map((s) => (
                      <li
                        key={s.id}
                        className="flex min-w-0 flex-col gap-2 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div className="min-w-0">
                          <p className="truncate font-medium text-slate-900">{s.title}</p>
                          <p className="break-words text-sm text-slate-600">
                            {s.scheduledAt.toLocaleString("en-US", {
                              timeZone: "America/Chicago",
                            })}{" "}
                            CT
                            {s.course ? ` · ${s.course.title}` : ""}
                          </p>
                          <p className="mt-1 break-words text-xs text-slate-500">
                            {s.description}
                          </p>
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
                          <RescheduleSessionForm
                            sessionId={s.id}
                            initialLocal={toDatetimeLocalValue(s.scheduledAt)}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <TeacherLiveProgress />

      <section id="grades" className="mt-10">
        <h2 className="text-lg font-semibold text-white">Student Grades</h2>
        <div id="written" className="mt-6">
          <h3 className="text-base font-semibold text-emerald-50">Written Work To Grade</h3>
          <GradeWrittenPanel
            assignedGrades={assignedGrades}
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
