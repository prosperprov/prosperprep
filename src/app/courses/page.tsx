import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import { brand } from "@/config/brand";
import { MvpBanner } from "@/components/MvpBanner";
import { CourseCatalog } from "@/components/CourseCatalog";
import { getSession } from "@/lib/auth";
import { catalogGradeFilter } from "@/lib/curriculumAccess";
import Link from "next/link";

export const metadata: Metadata = { title: "Course catalog" };

export const dynamic = "force-dynamic";

export default async function CoursesPage() {
  const session = await getSession();
  const gradeFilter = await catalogGradeFilter({
    userId: session?.user?.id,
    role: session?.user?.role,
  });

  const courses = await prisma.course.findMany({
    where:
      gradeFilter.mode === "all"
        ? undefined
        : gradeFilter.mode === "none"
          ? { id: { in: [] } }
          : { grade: { in: gradeFilter.grades } },
    orderBy: [{ grade: "asc" }, { order: "asc" }],
    include: { _count: { select: { lessons: true } } },
  });

  const catalog = courses.map((c) => ({
    id: c.id,
    title: c.title,
    subject: c.subject,
    grade: c.grade,
    gradeBand: c.gradeBand,
    lessonCount: c._count.lessons,
  }));

  const studentLockedOut =
    session?.user?.role === "STUDENT" && gradeFilter.mode === "none";

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Course catalog</h1>
      <p className="mt-2 max-w-2xl text-slate-600">
        {brand.name} Foundations / MVP modules: core K–12 subjects plus ACT/SAT, college athletic
        pathway, entrepreneurship & financial independence, and Bible (Hallelujah Scriptures &
        Paleo-Hebrew). Grade 10 showcase courses are expanding toward deeper modules; most courses
        still ship as starter modules — not yet a full-year credit map.
      </p>
      {session?.user?.role === "STUDENT" && gradeFilter.mode === "grades" && (
        <p className="mt-3 text-sm text-emerald-900">
          Showing curriculum for your enrolled grade only. Other grades stay locked to your
          subscription.
        </p>
      )}
      {studentLockedOut && (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
          No active enrollment — curriculum is locked.{" "}
          <Link href="/enroll" className="font-semibold underline">
            Complete enrollment
          </Link>{" "}
          for your grade to unlock courses.
        </div>
      )}
      <div className="mt-6">
        <MvpBanner />
      </div>
      <CourseCatalog courses={catalog} />
    </div>
  );
}
