import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { DashboardShell } from "@/components/DashboardShell";
import { ChangePasswordForm } from "@/components/ChangePasswordForm";
import { brand } from "@/config/brand";
import { teacherDashNav } from "@/lib/dashboardNav";

export const dynamic = "force-dynamic";

export default async function TeacherAccountPage() {
  const session = await getSession();
  if (!session?.user) redirect("/login?callbackUrl=/dashboard/teacher/account");
  if (session.user.role !== "TEACHER" && session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  return (
    <DashboardShell
      title="Account"
      subtitle={`${brand.shortName} · sign-in settings`}
      nav={teacherDashNav()}
    >
      <div className="mb-8 max-w-xl">
        <p className="text-sm text-slate-600">
          Signed in as <strong className="text-slate-900">{session.user.name}</strong> (
          {session.user.email}).
        </p>
      </div>

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
