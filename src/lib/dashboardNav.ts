/**
 * Shared dashboard pill nav for student and teacher shells.
 */

export type DashNavItem = { href: string; label: string };

/** Student dashboard pills. Pass overviewLabel "Classroom" for Grade 6 immersive hub. */
export function studentDashNav(overviewLabel: string = "Overview"): DashNavItem[] {
  return [
    { href: "/dashboard/student", label: overviewLabel },
    { href: "/dashboard/student/messages", label: "Messages" },
    { href: "/dashboard/student/grades", label: "Grades" },
    { href: "/dashboard/student/report-cards", label: "Report cards" },
    { href: "/courses", label: "Catalog" },
    { href: "/enroll", label: "Enrollment" },
    { href: "/dashboard/student/account", label: "Account" },
  ];
}

/** Compact student nav for subpages that omit Enrollment. */
export function studentDashNavCompact(overviewLabel: string = "Overview"): DashNavItem[] {
  return [
    { href: "/dashboard/student", label: overviewLabel },
    { href: "/dashboard/student/messages", label: "Messages" },
    { href: "/dashboard/student/grades", label: "Grades" },
    { href: "/dashboard/student/report-cards", label: "Report cards" },
    { href: "/courses", label: "Catalog" },
    { href: "/dashboard/student/account", label: "Account" },
  ];
}

export function teacherDashNav(): DashNavItem[] {
  return [
    { href: "/dashboard/teacher", label: "Classroom" },
    { href: "/dashboard/teacher/messages", label: "Messages" },
    { href: "/courses", label: "Catalog" },
    { href: "/dashboard/teacher#grades", label: "Grades" },
    { href: "/dashboard/teacher/account", label: "Account" },
  ];
}
