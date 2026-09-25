import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DashboardShell } from "@/components/DashboardShell";
import { gradeLabel } from "@/lib/grades";
import { brand } from "@/config/brand";
import { stripeConfigured } from "@/lib/stripe";
import { AssignTeacherGrades } from "@/components/AssignTeacherGrades";
import { AdminCreateTeacher } from "@/components/AdminCreateTeacher";
import { AdminCreateStudent } from "@/components/AdminCreateStudent";
import { AdminUsersTable } from "@/components/AdminUsersTable";
import { AdminEnrollmentsTable } from "@/components/AdminEnrollmentsTable";

export const dynamic = "force-dynamic";

function enrollmentMode(e: { scholarship: boolean; demoMode: boolean }) {
  if (e.scholarship) return "scholarship";
  if (e.demoMode) return "demo";
  return "stripe";
}

export default async function AdminDashboard() {
  const session = await getSession();
  if (!session?.user) redirect("/login?callbackUrl=/dashboard/admin");
  if (session.user.role !== "ADMIN") redirect("/dashboard");

  const [users, enrollments, plans, courses, liveCount, teachers] = await Promise.all([
    prisma.user.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.enrollment.findMany({
      include: { user: true, plan: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.plan.findMany({ orderBy: { priceMonthly: "asc" } }),
    prisma.course.count(),
    prisma.liveSession.count(),
    prisma.user.findMany({
      where: { role: "TEACHER" },
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
        email: true,
        teacherGrades: { select: { grade: true }, orderBy: { grade: "asc" } },
      },
    }),
  ]);

  const teacherRows = teachers.map((t) => ({
    id: t.id,
    name: t.name,
    email: t.email,
    grades: t.teacherGrades.map((g) => g.grade),
  }));

  const studentRows = users
    .filter((u) => u.role === "STUDENT")
    .map((u) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      role: u.role,
      gradeLabel: u.grade != null ? gradeLabel(u.grade) : "—",
    }));

  const operatorName = session.user.name || "Jeremy Prosper";

  return (
    <DashboardShell
      title="Super Admin"
      subtitle={`School Ops · ${operatorName} · ${brand.name} · ${brand.domain}`}
      nav={[
        { href: "/dashboard/admin", label: "Overview" },
        { href: "/dashboard/admin#teachers", label: "Teachers" },
        { href: "/dashboard/admin#students", label: "Students" },
        { href: "/dashboard/admin#enrollments", label: "Enrollments" },
        { href: "/courses", label: "Catalog" },
      ]}
    >
      <p className="rounded-xl border border-emerald-100 bg-emerald-50/80 px-4 py-3 text-sm text-emerald-950">
        This Super Admin / School Ops account creates teachers, students, and scholarship (tuition-waived)
        enrollments so learners get ACTIVE curriculum access without Stripe.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Students", value: studentRows.length },
          { label: "Enrollments", value: enrollments.length },
          { label: "Courses", value: courses },
          { label: "Live sessions", value: liveCount },
        ].map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-1 text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm text-slate-600">
        Stripe:{" "}
        <strong>{stripeConfigured() ? "configured" : "not configured (demo enrollments OK)"}</strong>
      </p>

      <section className="mt-10" id="create-accounts">
        <h2 className="text-lg font-semibold text-slate-900">Create accounts</h2>
        <p className="mt-1 text-sm text-slate-500">
          Provision teachers with grade assignments, or students with optional scholarship access.
        </p>
        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <div id="create-teacher">
            <AdminCreateTeacher />
          </div>
          <AdminCreateStudent />
        </div>
      </section>

      <section className="mt-10" id="teachers">
        <h2 className="text-lg font-semibold">Teachers</h2>
        <p className="mt-1 text-sm text-slate-500">
          Assign which grades each teacher can see on roster, catalog, and scheduling.
          Search filters the teacher list by name or email as you type.
        </p>
        <div className="mt-4">
          <AssignTeacherGrades teachers={teacherRows} />
        </div>
      </section>

      <section className="mt-10" id="students">
        <h2 className="text-lg font-semibold">Students</h2>
        <p className="mt-1 mb-3 text-sm text-slate-500">
          Student accounts only (teachers are under Teachers). Search by name or email as you type.
        </p>
        <AdminUsersTable users={studentRows} />
      </section>

      <section className="mt-10" id="enrollments">
        <h2 className="text-lg font-semibold">Enrollments</h2>
        <p className="mt-1 mb-3 text-sm text-slate-500">
          Mode: scholarship (waived), demo (comp), or stripe. Grant scholarship or cancel from Actions.
          Search by student name or email as you type.
        </p>
        <AdminEnrollmentsTable
          rows={enrollments.map((e) => ({
            id: e.id,
            studentName: e.user.name,
            studentEmail: e.user.email,
            planName: e.plan.name,
            gradeLabel: gradeLabel(e.grade),
            status: e.status,
            mode: enrollmentMode(e),
            scholarship: e.scholarship,
            demoMode: e.demoMode,
          }))}
        />
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Plans</h2>
        <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Band</th>
                <th className="px-4 py-2">Monthly</th>
                <th className="px-4 py-2">Stripe price</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((p) => (
                <tr key={p.id} className="border-t border-slate-100">
                  <td className="px-4 py-2 font-medium">{p.name}</td>
                  <td className="px-4 py-2">{p.gradeBand}</td>
                  <td className="px-4 py-2">${(p.priceMonthly / 100).toFixed(0)}</td>
                  <td className="px-4 py-2 font-mono text-xs">{p.stripePriceId || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DashboardShell>
  );
}
