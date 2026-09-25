import { prisma } from "@/lib/prisma";
import { ALL_GRADES } from "@/lib/grades";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { PrismaD1 } from "@prisma/adapter-d1";

type D1Database = ConstructorParameters<typeof PrismaD1>[0];

/** Grades 0–12 a teacher may access. ADMIN = all. Empty list = none assigned. */
export async function getAssignedTeacherGrades(
  userId: string,
  role: string
): Promise<number[]> {
  if (role === "ADMIN") {
    return [...ALL_GRADES];
  }
  if (role !== "TEACHER") return [];

  const rows = await prisma.teacherGrade.findMany({
    where: { teacherId: userId },
    select: { grade: true },
    orderBy: { grade: "asc" },
  });
  return rows.map((r) => r.grade);
}

export function teacherCanAccessGrade(
  assigned: number[],
  grade: number | null | undefined
): boolean {
  if (grade == null) return false;
  return assigned.includes(grade);
}

/** Replace a teacher's grade assignments (sorted unique 0–12). */
export async function setTeacherGrades(teacherId: string, grades: number[]) {
  const cleaned = Array.from(
    new Set(
      grades
        .map((g) => Number(g))
        .filter((g) => Number.isInteger(g) && g >= 0 && g <= 12)
    )
  ).sort((a, b) => a - b);

  let db: D1Database | undefined;
  try {
    db = (getCloudflareContext().env as { DB?: D1Database }).DB;
  } catch {
    // Node development uses Prisma's SQLite transaction below.
  }

  if (db) {
    // D1 batches roll back together; Prisma's D1 driver does not support
    // interactive transactions, which would leave assignments half-written.
    await db.batch([
      db.prepare('DELETE FROM "TeacherGrade" WHERE "teacherId" = ?').bind(teacherId),
      ...cleaned.map((grade) =>
        db.prepare('INSERT INTO "TeacherGrade" ("id", "teacherId", "grade") VALUES (?, ?, ?)')
          .bind(crypto.randomUUID(), teacherId, grade)
      ),
    ]);
  } else {
    await prisma.$transaction(async (tx) => {
      await tx.teacherGrade.deleteMany({ where: { teacherId } });
      if (cleaned.length > 0) {
        await tx.teacherGrade.createMany({
          data: cleaned.map((grade) => ({ teacherId, grade })),
        });
      }
    });
  }

  return cleaned;
}
