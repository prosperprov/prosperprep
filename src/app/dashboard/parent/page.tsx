import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DashboardShell } from "@/components/DashboardShell";
import { gradeLabel } from "@/lib/grades";
import { brand } from "@/config/brand";
import { ManageBillingButton } from "@/components/ManageBillingButton";

export const dynamic = "force-dynamic";

export default async function ParentDashboard() {
  const session = await getSession();
  if (!session?.user) redirect("/login?callbackUrl=/dashboard/parent");
  if (session.user.role !== "PARENT" && session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const links = await prisma.parentChild.findMany({
    where: { parentId: session.user.id },
    include: {
      child: {
        include: {
          enrollments: { include: { plan: true }, orderBy: { createdAt: "desc" } },
          progress: true,
        },
      },
    },
  });

  const sessions = await prisma.liveSession.findMany({
    where: { scheduledAt: { gte: new Date() } },
    orderBy: { scheduledAt: "asc" },
    take: 6,
    include: { teacher: { select: { name: true } } },
  });

  const childEnrollments = links.flatMap((l) => l.child.enrollments);
  const hasStripeCustomer = childEnrollments.some((e) => e.stripeCustomerId && !e.demoMode);
  const demoOnly =
    childEnrollments.some((e) => e.demoMode && e.status === "ACTIVE") && !hasStripeCustomer;

  return (
    <DashboardShell
      title="Parent dashboard"
      subtitle={`Monitor enrollment, schedule, and progress · ${brand.shortName}`}
      nav={[
        { href: "/dashboard/parent", label: "Family" },
        { href: "/enroll", label: "Enroll a student" },
        { href: "/courses", label: "Catalog" },
      ]}
    >
      <div className="mb-6">
        <ManageBillingButton hasStripeCustomer={hasStripeCustomer} demoOnly={demoOnly} />
      </div>

      <section>
        <h2 className="text-lg font-semibold text-slate-900">Linked students</h2>
        <div className="mt-4 space-y-4">
          {links.map(({ child }) => {
            const active = child.enrollments.find((e) => e.status === "ACTIVE");
            return (
              <div key={child.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="font-semibold text-slate-900">{child.name}</p>
                <p className="text-sm text-slate-600">{child.email}</p>
                <p className="mt-2 text-sm">
                  Grade:{" "}
                  <strong>{child.grade != null ? gradeLabel(child.grade) : "Not set"}</strong>
                  {" · "}
                  Enrollment:{" "}
                  <strong>{active ? `Active (${active.plan.name})` : "None active"}</strong>
                  {active?.demoMode ? " · demo mode" : ""}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Progress markers: {child.progress.filter((p) => p.completed).length} lessons
                </p>
                <p className="mt-3 flex flex-wrap gap-3 text-sm">
                  <Link href={`/dashboard/student/grades?childId=${child.id}`} className="font-medium text-emerald-800 underline">
                    View grades
                  </Link>
                  <Link href={`/dashboard/student/report-cards?childId=${child.id}`} className="font-medium text-emerald-800 underline">
                    Report cards
                  </Link>
                </p>
              </div>
            );
          })}
          {links.length === 0 && (
            <p className="text-sm text-slate-500">
              No linked students yet. Demo parent is linked to the demo student after seed.
            </p>
          )}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">Upcoming live sessions</h2>
        <ul className="mt-4 space-y-3">
          {sessions.map((s) => (
            <li key={s.id} className="rounded-xl border border-slate-200 bg-white p-4 text-sm">
              <p className="font-medium">{s.title}</p>
              <p className="text-slate-600">
                {s.scheduledAt.toLocaleString("en-US", { timeZone: "America/Chicago" })} CT ·{" "}
                {s.teacher.name}
              </p>
              {s.meetingUrl && (
                <a href={s.meetingUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block text-emerald-800 underline">
                  Join link
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-8 text-sm text-slate-500">
        Need help?{" "}
        <a href={`mailto:${brand.supportEmail}`} className="text-emerald-800 underline">
          {brand.supportEmail}
        </a>
      </p>
    </DashboardShell>
  );
}
