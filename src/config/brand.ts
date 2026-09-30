/**
 * Single place to rename/rebrand the school.
 * Current: Prosper Preparatory — prosperprep.org
 */
export const brand = {
  name: "Prosper Preparatory",
  shortName: "Prosper Prep",
  tagline: "Online K–12 School",
  domain: "prosperprep.org",
  supportEmail: "contact@prosperprep.org",
  location: "East Texas, USA",
  nonprofit: true,
  description:
    "Prosper Preparatory is a nonprofit East Texas school uniting elite academics, athletics, and entrepreneurship training for financial independence — whether students go to college or build from day one after high school.",
  /** This app fills the gap the marketing site doesn't cover yet. */
  productFocus:
    "School login, enrollment, monthly online K–12 schooling, student and teacher dashboards, and live learning sessions.",
  marketingSite: "https://prosperprep.org",
  cultureLine: "Elite academics · Entrepreneurship · Financial independence",
} as const;

export const pricingCopy = {
  elementary: {
    name: "Elementary Path",
    grades: "Grades K–5",
    price: 99,
    blurb:
      "Foundational literacy, math, science, and social studies — with parent-friendly progress views and optional live check-ins that fit family schedules.",
  },
  middle: {
    name: "Middle School Path",
    grades: "Grades 6–8",
    price: 129,
    blurb:
      "Core academics plus early entrepreneurship, athlete-scholar habits, and Bible study — building independence for high school and beyond.",
  },
  high: {
    name: "High School Path",
    grades: "Grades 9–12",
    price: 159,
    blurb:
      "College-prep academics, ACT/SAT prep, athletics, entrepreneurship & finance, and Bible study (Hallelujah Scriptures) — built for real-world independence.",
  },
} as const;

/** Static brand image paths under /public (reusable site-wide). */
export const brandAssets = {
  mark: "/assets/branding/prosper-mark.png?v=nocircle1",
  wordmark: "/assets/branding/prosper-wordmark.png?v=nocircle1",
  lessonPosters: {
    g7AnalyzingTheme: "/lesson-posters/g7-analyzing-theme.png?v=title-clear3",
    g7ProportionalRelationships: "/lesson-posters/g7-proportional-relationships.png?v=1",
  },
} as const;
