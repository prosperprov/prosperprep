import { prisma } from "@/lib/prisma";
import { getAssignedTeacherGrades } from "@/lib/teacherGrades";

export type AccessRole = string;

/**
 * Active enrollment for curriculum gating.
 * Prefer newest ACTIVE row (a student should have one paid path at a time).
 */
export async function getActiveEnrollment(userId: string) {
  return prisma.enrollment.findFirst({
    where: { userId, status: "ACTIVE" },
    include: { plan: true },
    orderBy: { createdAt: "desc" },
  });
}

/**
 * Hard lock: STUDENT with ACTIVE enrollment may only use courses for that exact grade.
 * TEACHER limited to assigned grades. ADMIN bypass.
 */
export async function canAccessCourseContent(opts: {
  userId: string;
  role: AccessRole;
  courseGrade: number;
}): Promise<{ ok: true; enrolledGrade: number | null } | { ok: false; reason: string }> {
  if (opts.role === "ADMIN") {
    return { ok: true, enrolledGrade: null };
  }
  if (opts.role === "TEACHER") {
    const grades = await getAssignedTeacherGrades(opts.userId, opts.role);
    if (!grades.includes(opts.courseGrade)) {
      return { ok: false, reason: "This course is outside your assigned teaching grades." };
    }
    return { ok: true, enrolledGrade: null };
  }
  if (opts.role !== "STUDENT") {
    return { ok: false, reason: "Curriculum access is for enrolled students." };
  }

  const enrollment = await getActiveEnrollment(opts.userId);
  if (!enrollment) {
    return { ok: false, reason: "Active enrollment required." };
  }
  if (enrollment.grade !== opts.courseGrade) {
    return {
      ok: false,
      reason: "This course is outside your enrolled grade.",
    };
  }
  return { ok: true, enrolledGrade: enrollment.grade };
}

export type CatalogGradeFilter =
  | { mode: "all" }
  | { mode: "none" }
  | { mode: "grades"; grades: number[] };

/** Catalog filter by role. */
export async function catalogGradeFilter(opts: {
  userId?: string | null;
  role?: AccessRole | null;
}): Promise<CatalogGradeFilter> {
  if (!opts.userId || !opts.role) return { mode: "all" };
  if (opts.role === "ADMIN") return { mode: "all" };
  if (opts.role === "TEACHER") {
    const grades = await getAssignedTeacherGrades(opts.userId, opts.role);
    if (grades.length === 0) return { mode: "none" };
    return { mode: "grades", grades };
  }
  if (opts.role !== "STUDENT") return { mode: "all" };

  const enrollment = await getActiveEnrollment(opts.userId);
  if (!enrollment) return { mode: "none" };
  return { mode: "grades", grades: [enrollment.grade] };
}
