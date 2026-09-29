import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DashboardShell } from "@/components/DashboardShell";
import { ChangePasswordForm } from "@/components/ChangePasswordForm";
import { ManageBillingButton } from "@/components/ManageBillingButton";
import { brand } from "@/config/brand";
import { isGrade6Classroom } from "@/lib/grade6Classroom";
import { studentDashNav } from "@/lib/dashboardNav";

export const dynamic = "force-dynamic";

export default async function StudentAccountPage() {
  const session = await getSession();
  if (!session?.user) redirect("/login?callbackUrl=/dashboard/student/account");
  if (session.user.role !== "STUDENT" && session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const enrollments = await prisma.enrollment.findMany({
    where: { userId: session.user.id },
    include: { plan: true },
    orderBy: { createdAt: "desc" },
  });
  const active = enrollments.find((e) => e.status === "ACTIVE");
  const grade = active?.grade ?? null;
  const overviewLabel = isGrade6Classroom(grade) ? "Classroom" : "Overview";

  return (
    <DashboardShell
      title="Account"
      subtitle={`${brand.shortName} · sign-in and billing`}
      nav={studentDashNav(overviewLabel)}
    >
      <div className="mb-8 max-w-xl space-y-2">
        <p className="text-sm text-slate-600">
          Signed in as <strong className="text-slate-900">{session.user.name}</strong> (
          {session.user.email}).
        </p>
        {active && (
          <p className="text-sm text-slate-600">
            Active plan: <strong className="text-slate-900">{active.plan.name}</strong>
            {active.demoMode ? " (demo mode)" : ""}
            {active.scholarship ? " · scholarship" : ""}.
          </p>
        )}
      </div>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-slate-900">Billing</h2>
        <p className="mt-1 mb-4 text-sm text-slate-500">
          Open the Stripe customer portal to update payment methods or cancel (when available).
        </p>
        <ManageBillingButton
          hasStripeCustomer={Boolean(
            enrollments.some((e) => e.stripeCustomerId && !e.demoMode)
          )}
          demoOnly={Boolean(active?.demoMode) && !enrollments.some((e) => e.stripeCustomerId)}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-900">Change password</h2>
        <p className="mt-1 mb-4 text-sm text-slate-500">
          Change the password you use to sign in to Prosper Prep.
        </p>
        <ChangePasswordForm />
      </section>
    </DashboardShell>
  );
}
