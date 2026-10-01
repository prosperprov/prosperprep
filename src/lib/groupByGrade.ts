import { gradeLabel } from "@/lib/grades";

/** Stable grade sections for teacher roster UIs (assigned order preserved). */
export function gradeSections<T>(
  assignedGrades: number[],
  items: T[],
  gradeOf: (item: T) => number | null | undefined
): { grade: number; label: string; items: T[] }[] {
  const buckets = new Map<number, T[]>();
  for (const g of assignedGrades) {
    buckets.set(g, []);
  }
  for (const item of items) {
    const g = gradeOf(item);
    if (g == null || !buckets.has(g)) continue;
    buckets.get(g)!.push(item);
  }
  return assignedGrades.map((grade) => ({
    grade,
    label: gradeLabel(grade),
    items: buckets.get(grade) ?? [],
  }));
}
