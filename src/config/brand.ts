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
    "Prosper Preparatory is a nonprofit East Texas school uniting elite academics, athletic development aimed at college scholarships, and entrepreneurship training for financial independence — whether students go to college or build from day one after high school.",
  /** This app fills the gap the marketing site doesn't cover yet. */
  productFocus:
    "School login, enrollment, monthly online K–12 schooling, student and teacher dashboards, and live learning sessions.",
  marketingSite: "https://prosperprep.org",
  cultureLine: "College athletic scholarships · Entrepreneurship · Financial independence",
} as const;

/** Honest MVP / Foundations labeling — do not claim full-year credit map yet. */
export const mvpCatalog = {
  label: "Foundations / MVP modules",
  shortBlurb:
    "Our current catalog is Foundations / MVP modules: teachable lessons you can complete today, with deeper modules expanding first in Grade 10 showcase courses.",
  roadmapTitle: "Published roadmap",
  roadmap: [
    "More lessons per course (beyond the starter module set)",
    "Deeper Grade 10 Math, ELA, and Bible / ACT showcase tracks (20–30 lessons)",
    "Full-year / credit-bearing maps only after depth and assessment quality expand",
    "Live seminar standards, parent deadlines, and advising workflows (next waves)",
  ],
  honestyNote:
    "We are not marketing this portal as a finished full-year elite school until course depth expands. Tuition and brand are live; curriculum depth is growing in public.",
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
      "Core academics plus early entrepreneurship, athlete-scholar habits, and Bible word study — building independence for high school and beyond.",
  },
  high: {
    name: "High School Path",
    grades: "Grades 9–12",
    price: 159,
    blurb:
      "College-prep academics, ACT/SAT prep, athletic recruiting literacy, entrepreneurship & finance, and Bible (Hallelujah Scriptures) — built for scholarships and real-world independence.",
  },
} as const;

/** Static brand image paths under /public (reusable site-wide). */
export const brandAssets = {
  mark: "/assets/branding/prosper-mark.png?v=official1",
  wordmark: "/assets/branding/prosper-wordmark.png?v=official1",
  lessonPosters: {
    g7AnalyzingTheme: "/lesson-posters/g7-analyzing-theme.png?v=title-clear3",
    g7ProportionalRelationships: "/lesson-posters/g7-proportional-relationships.png?v=1",
  },
} as const;
