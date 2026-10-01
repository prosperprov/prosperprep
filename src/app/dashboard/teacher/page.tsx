import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DashboardShell } from "@/components/DashboardShell";
import { CreateSessionForm } from "@/components/CreateSessionForm";
import { ActiveClassRoster } from "@/components/ActiveClassRoster";
import {
  TeacherLiveSessions,
  type TeacherLiveSessionCard,
} from "@/components/TeacherLiveSessions";
import { gradeLabel } from "@/lib/grades";
import { partitionLiveSessions } from "@/lib/liveSessionTime";
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
    take: 100,
    include: { course: { select: { title: true } } },
  });

  const { upcoming: upcomingSessions, past: pastSessions } =
    partitionLiveSessions(mySessions);

  const studentsByGrade = new Map<number, string[]>();
  for (const e of enrollments) {
    const list = studentsByGrade.get(e.grade) ?? [];
    list.push(e.user.name);
    studentsByGrade.set(e.grade, list);
  }

  function toSessionCard(
    s: (typeof mySessions)[number]
  ): TeacherLiveSessionCard {
    return {
      id: s.id,
      title: s.title,
      description: s.description,
      scheduledAt: s.scheduledAt.toISOString(),
      durationMinutes: s.durationMinutes,
      meetingUrl: s.meetingUrl,
      grade: s.grade,
      courseTitle: s.course?.title ?? null,
      initialLocal: toDatetimeLocalValue(s.scheduledAt),
      studentNames:
        s.grade != null ? studentsByGrade.get(s.grade) ?? [] : [],
    };
  }

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
          liveCount={upcomingSessions.length}
          writtenPending={writtenToGrade.length}
          grades={assignedGrades}
          liveByGrade={Object.fromEntries(
            assignedGrades.map((g) => [
              g,
              upcomingSessions.filter((s) => s.grade === g).length,
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
            {assignedGrades.length ? ` · ${gradeSummary}` : ""} · tap a grade to expand.
          </p>
          {assignedGrades.length === 0 ? (
            <p className="mt-4 text-sm text-emerald-100/80">No grades assigned yet.</p>
          ) : (
            <ActiveClassRoster
              assignedGrades={assignedGrades}
              enrollments={enrollments.map((e) => ({
                id: e.id,
                grade: e.grade,
                user: { name: e.user.name, email: e.user.email },
                plan: { name: e.plan.name },
              }))}
            />
          )}
        </section>

        <CreateSessionForm courses={courses} allowedGrades={assignedGrades} />
      </div>

      <section className="mt-10 min-w-0 overflow-x-hidden">
        <h2 className="text-lg font-semibold text-white">Your Live Sessions</h2>
        <TeacherLiveSessions
          assignedGrades={assignedGrades}
          upcoming={upcomingSessions.map(toSessionCard)}
          past={pastSessions.map(toSessionCard)}
        />
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
