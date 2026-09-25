"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { bandLabel, gradeLabel } from "@/lib/grades";

export type CatalogCourse = {
  id: string;
  title: string;
  subject: string;
  grade: number;
  gradeBand: string;
  lessonCount: number;
};

const FILTERS = [
  { id: "all", label: "All" },
  { id: "core", label: "Core" },
  { id: "test", label: "Test Prep" },
  { id: "athletic", label: "Athletic Pathway" },
  { id: "entrepreneur", label: "Entrepreneurship" },
  { id: "bible", label: "Bible" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

function matchesFilter(subject: string, filter: FilterId): boolean {
  const s = subject.toLowerCase();
  if (filter === "all") return true;
  if (filter === "test") {
    return s.includes("act") || s.includes("sat");
  }
  if (filter === "athletic") return s.includes("athletic");
  if (filter === "entrepreneur") {
    return s.includes("entrepreneur") || s.includes("financial independence");
  }
  if (filter === "bible") {
    return s.includes("bible") || s.includes("hallelujah") || s.includes("paleo");
  }
  // Core = not specialty
  return !(
    s.includes("act") ||
    s.includes("sat") ||
    s.includes("athletic") ||
    s.includes("entrepreneur") ||
    s.includes("financial independence") ||
    s.includes("bible") ||
    s.includes("hallelujah") ||
    s.includes("paleo")
  );
}

export function CourseCatalog({ courses }: { courses: CatalogCourse[] }) {
  const [filter, setFilter] = useState<FilterId>("all");

  const filtered = useMemo(
    () => courses.filter((c) => matchesFilter(c.subject, filter)),
    [courses, filter]
  );

  const bands = [
    { key: "ELEMENTARY", title: "Elementary · K–5" },
    { key: "MIDDLE", title: "Middle School · 6–8" },
    { key: "HIGH", title: "High School · 9–12" },
  ];

  return (
    <div>
      <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Catalog filters">
        {FILTERS.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.id)}
              className={`min-h-[40px] rounded-full border px-4 py-2 text-sm font-medium transition ${
                active
                  ? "border-emerald-800 bg-emerald-800 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-emerald-300"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-slate-500">
        Showing {filtered.length} of {courses.length} courses
      </p>

      {bands.map((band) => {
        const list = filtered.filter((c) => c.gradeBand === band.key);
        if (list.length === 0) return null;
        const byGrade = new Map<number, CatalogCourse[]>();
        for (const c of list) {
          const arr = byGrade.get(c.grade) || [];
          arr.push(c);
          byGrade.set(c.grade, arr);
        }
        return (
          <section key={band.key} className="mt-12">
            <h2 className="text-xl font-bold text-emerald-900">{band.title}</h2>
            <div className="mt-4 space-y-6">
              {Array.from(byGrade.entries()).map(([grade, gradeCourses]) => (
                <div key={grade}>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {gradeLabel(grade)}
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {gradeCourses.map((course) => (
                      <Link
                        key={course.id}
                        href={`/courses/${course.id}`}
                        className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-emerald-300 hover:shadow"
                      >
                        <p className="text-xs text-emerald-800">{course.subject}</p>
                        <p className="mt-1 font-semibold text-slate-900">{course.title}</p>
                        <p className="mt-2 text-xs text-slate-500">
                          {course.lessonCount} lessons · {bandLabel(course.gradeBand)}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {filtered.length === 0 && (
        <p className="mt-10 text-sm text-slate-500">No courses match this filter.</p>
      )}
    </div>
  );
}
