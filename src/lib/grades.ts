import type { GradeBand } from "@/types/school";

export function gradeLabel(grade: number) {
  if (grade === 0) return "Kindergarten";
  return `Grade ${grade}`;
}

export function gradeBandFor(grade: number): GradeBand {
  if (grade <= 5) return "ELEMENTARY";
  if (grade <= 8) return "MIDDLE";
  return "HIGH";
}

export function bandLabel(band: GradeBand | string) {
  switch (band) {
    case "ELEMENTARY":
      return "Elementary (K–5)";
    case "MIDDLE":
      return "Middle School (6–8)";
    case "HIGH":
      return "High School (9–12)";
    default:
      return String(band);
  }
}

export const ALL_GRADES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
