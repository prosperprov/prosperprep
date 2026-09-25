import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DashboardShell } from "@/components/DashboardShell";
import { getOrCreateReportCard } from "@/lib/reportCards";
import { previousMonthBounds } from "@/lib/grading";
import { brand } from "@/config/brand";

export const dynamic = "force-dynamic";

export default async function ReportCardsPage({
  searchParams,
}: {
  searchParams?: { which?: string; childId?: string };
}) {
  const session = await getSession();
  if (!session?.user) redirect("/login?callbackUrl=/dashboard/student/report-cards");

  let userId = session.user.id;
  let heading = "Report cards";

  if (session.user.role === "PARENT") {
    const childId = searchParams?.childId;
    if (!childId) redirect("/dashboard/parent");
    const link = await prisma.parentChild.findFirst({
      where: { parentId: session.user.id, childId },
      include: { child: true },
    });
    if (!link) redirect("/dashboard/parent");
    userId = link.childId;
    heading = `${link.child.name}'s report cards`;
  } else if (session.user.role !== "STUDENT" && session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const which = searchParams?.which === "previous" ? "previous" : "current";
  const when = which === "previous" ? previousMonthBounds().start : new Date();
  const { summary } = await getOrCreateReportCard(userId, when);
  const childQ = searchParams?.childId ? `&childId=${searchParams.childId}` : "";

  return (
    <DashboardShell
      title={heading}
      subtitle={`${brand.shortName} · monthly academic summary`}
      nav={[
        { href: "/dashboard/student", label: "Overview" },
        { href: "/dashboard/student/grades", label: "Grades" },
        { href: "/dashboard/student/report-cards", label: "Report cards" },
        { href: "/courses", label: "Catalog" },
      ]}
    >
      <div className="mb-6 flex flex-wrap gap-2">
        <Link
          href={`?which=current${childQ}`}
          className={`rounded-full px-3 py-1 text-sm ${which === "current" ? "bg-emerald-800 text-white" : "border border-slate-200 bg-white"}`}
        >
          Current month
        </Link>
        <Link
          href={`?which=previous${childQ}`}
          className={`rounded-full px-3 py-1 text-sm ${which === "previous" ? "bg-emerald-800 text-white" : "border border-slate-200 bg-white"}`}
        >
          Previous month
        </Link>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-emerald-800">{summary.periodLabel}</p>
        <h2 className="mt-1 text-2xl font-bold text-slate-900">
          Overall:{" "}
          {summary.overallPercent != null
            ? `${summary.overallPercent}% (${summary.overallLetter})`
            : "Not enough graded work yet"}
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Progress proxy: {summary.lessonsCompleted}/{summary.lessonsTotal} lessons completed
        </p>
        <p className="mt-4 rounded-lg bg-slate-50 p-3 text-sm text-slate-700">
          <strong>Teacher comment:</strong> {summary.teacherComment}
        </p>

        <table className="mt-6 min-w-full text-left text-sm">
          <thead className="border-b text-slate-600">
            <tr>
              <th className="py-2 font-medium">Course</th>
              <th className="py-2 font-medium">Average</th>
              <th className="py-2 font-medium">Letter</th>
              <th className="py-2 font-medium">Lessons</th>
            </tr>
          </thead>
          <tbody>
            {summary.courses.map((c) => (
              <tr key={c.courseId} className="border-b last:border-0">
                <td className="py-2">
                  <p className="font-medium">{c.title}</p>
                  <p className="text-xs text-slate-500">{c.subject}</p>
                </td>
                <td className="py-2">{c.average != null ? `${c.average}%` : "—"}</td>
                <td className="py-2 font-semibold">{c.letter ?? "—"}</td>
                <td className="py-2">
                  {c.lessonsCompleted}/{c.lessonsTotal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardShell>
  );
}
