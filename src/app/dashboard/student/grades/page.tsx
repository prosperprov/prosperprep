import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DashboardShell } from "@/components/DashboardShell";
import { courseAverage, letterGrade, LESSON_WEIGHT, SECTION_WEIGHT } from "@/lib/grading";
import { brand } from "@/config/brand";

export const dynamic = "force-dynamic";

export default async function StudentGradesPage({
  searchParams,
}: {
  searchParams?: { childId?: string };
}) {
  const session = await getSession();
  if (!session?.user) redirect("/login?callbackUrl=/dashboard/student/grades");

  let userId = session.user.id;
  let title = "Grades";
  let subtitle = `${brand.shortName} · course averages (latest attempts)`;

  if (session.user.role === "PARENT") {
    const childId = searchParams?.childId;
    if (!childId) redirect("/dashboard/parent");
    const link = await prisma.parentChild.findFirst({
      where: { parentId: session.user.id, childId },
      include: { child: true },
    });
    if (!link) redirect("/dashboard/parent");
    userId = link.childId;
    title = `${link.child.name}'s grades`;
    subtitle = "Parent view · latest attempts";
  } else if (session.user.role !== "STUDENT" && session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const enrollment = await prisma.enrollment.findFirst({
    where: { userId, status: "ACTIVE" },
    orderBy: { createdAt: "desc" },
  });
  // Curriculum lock: grades view only for ACTIVE enrollment grade.
  const grade = enrollment?.grade ?? null;

  const courses =
    grade != null
      ? await prisma.course.findMany({
          where: { grade },
          orderBy: { order: "asc" },
        })
      : [];

  const entries = await prisma.gradeEntry.findMany({
    where: { userId },
    orderBy: { gradedAt: "desc" },
  });
  const attempts = await prisma.attempt.findMany({
    where: { userId },
    orderBy: { submittedAt: "desc" },
    take: 12,
    include: {
      lesson: { select: { title: true } },
      quiz: { select: { title: true } },
    },
  });

  const rows = courses.map((c) => {
    const courseEntries = entries.filter((e) => e.courseId === c.id);
    const avg = courseAverage(
      courseEntries.map((e) => ({
        source: e.source,
        percent: e.percent,
        score: e.score,
        maxScore: e.maxScore,
      }))
    );
    return {
      course: c,
      avg,
      letter: avg != null ? letterGrade(avg) : null,
      lessonCount: courseEntries.filter((e) => e.source === "LESSON_QUIZ").length,
      sectionCount: courseEntries.filter((e) => e.source === "SECTION_QUIZ").length,
    };
  });

  return (
    <DashboardShell
      title={title}
      subtitle={subtitle}
      nav={[
        { href: "/dashboard/student", label: "Overview" },
        { href: "/dashboard/student/grades", label: "Grades" },
        { href: "/dashboard/student/report-cards", label: "Report cards" },
        { href: "/courses", label: "Catalog" },
      ]}
    >
      <p className="mb-6 text-sm text-slate-600">
        Weights: lesson checks {Math.round(LESSON_WEIGHT * 100)}% · section quizzes{" "}
        {Math.round(SECTION_WEIGHT * 100)}%. Policy: <strong>latest attempt</strong> counts (retries
        allowed).
      </p>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-medium">Course</th>
              <th className="px-4 py-3 font-medium">Average</th>
              <th className="px-4 py-3 font-medium">Letter</th>
              <th className="px-4 py-3 font-medium">Lesson checks</th>
              <th className="px-4 py-3 font-medium">Section quizzes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ course, avg, letter, lessonCount, sectionCount }) => (
              <tr key={course.id} className="border-b last:border-0">
                <td className="px-4 py-3">
                  <Link
                    href={`/courses/${course.id}`}
                    className="font-medium text-emerald-900 hover:underline"
                  >
                    {course.title}
                  </Link>
                  <p className="text-xs text-slate-500">{course.subject}</p>
                </td>
                <td className="px-4 py-3">{avg != null ? `${avg}%` : "—"}</td>
                <td className="px-4 py-3 font-semibold">{letter ?? "—"}</td>
                <td className="px-4 py-3">{lessonCount}</td>
                <td className="px-4 py-3">{sectionCount}</td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-slate-500">
                  No courses for this grade yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-lg font-semibold text-slate-900">Recent attempts</h2>
      <ul className="mt-3 space-y-2">
        {attempts.map((a) => (
          <li key={a.id} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm">
            <span className="font-medium text-slate-900">
              {a.lesson?.title || a.quiz?.title || "Attempt"}
            </span>
            <span className="ml-2 text-slate-600">
              {a.percent}% ({a.score}/{a.maxScore}) ·{" "}
              {a.submittedAt.toLocaleString("en-US", { timeZone: "America/Chicago" })} CT
            </span>
          </li>
        ))}
        {attempts.length === 0 && (
          <p className="text-sm text-slate-500">
            No graded attempts yet. Open a lesson and submit the check.
          </p>
        )}
      </ul>
    </DashboardShell>
  );
}
