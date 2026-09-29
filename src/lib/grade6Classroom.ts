/**
 * Grade 6 immersive classroom — subject islands, accents, and feature flag.
 * Feature-flag by enrollment.grade === 6 or course.grade === 6.
 */

export const GRADE_6 = 6 as const;

export function isGrade6Classroom(grade: number | null | undefined): boolean {
  return grade === GRADE_6;
}

export type SubjectIslandStyle = {
  /** Short kid-friendly label */
  shortLabel: string;
  emoji: string;
  /** Tailwind classes for card border/bg/accent */
  accent: string;
  ring: string;
  badge: string;
  cta: string;
};

/** Match course.subject (seed names) → island styling. */
const ISLAND_BY_SUBJECT: Record<string, SubjectIslandStyle> = {
  "English Language Arts": {
    shortLabel: "ELA",
    emoji: "📖",
    accent: "border-emerald-300 bg-emerald-50 hover:border-emerald-400",
    ring: "stroke-emerald-500",
    badge: "bg-emerald-100 text-emerald-900",
    cta: "bg-emerald-700 hover:bg-emerald-800 text-white",
  },
  Mathematics: {
    shortLabel: "Math",
    emoji: "🔢",
    accent: "border-sky-300 bg-sky-50 hover:border-sky-400",
    ring: "stroke-sky-500",
    badge: "bg-sky-100 text-sky-900",
    cta: "bg-sky-700 hover:bg-sky-800 text-white",
  },
  "Life & Earth Science": {
    shortLabel: "Science",
    emoji: "🌍",
    accent: "border-lime-300 bg-lime-50 hover:border-lime-400",
    ring: "stroke-lime-600",
    badge: "bg-lime-100 text-lime-950",
    cta: "bg-lime-700 hover:bg-lime-800 text-white",
  },
  "World History": {
    shortLabel: "History",
    emoji: "📜",
    accent: "border-amber-300 bg-amber-50 hover:border-amber-400",
    ring: "stroke-amber-500",
    badge: "bg-amber-100 text-amber-950",
    cta: "bg-amber-700 hover:bg-amber-800 text-white",
  },
  "Entrepreneurship & Financial Independence": {
    shortLabel: "Biz",
    emoji: "💡",
    accent: "border-violet-300 bg-violet-50 hover:border-violet-400",
    ring: "stroke-violet-500",
    badge: "bg-violet-100 text-violet-950",
    cta: "bg-violet-700 hover:bg-violet-800 text-white",
  },
  "College Athletic Pathway": {
    shortLabel: "Athletics",
    emoji: "🏅",
    accent: "border-rose-300 bg-rose-50 hover:border-rose-400",
    ring: "stroke-rose-500",
    badge: "bg-rose-100 text-rose-950",
    cta: "bg-rose-700 hover:bg-rose-800 text-white",
  },
  "Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study": {
    shortLabel: "Bible",
    emoji: "✝",
    accent: "border-indigo-300 bg-indigo-50 hover:border-indigo-400",
    ring: "stroke-indigo-500",
    badge: "bg-indigo-100 text-indigo-950",
    cta: "bg-indigo-700 hover:bg-indigo-800 text-white",
  },
};

const FALLBACK: SubjectIslandStyle = {
  shortLabel: "Course",
  emoji: "📚",
  accent: "border-slate-300 bg-white hover:border-emerald-300",
  ring: "stroke-emerald-500",
  badge: "bg-slate-100 text-slate-800",
  cta: "bg-emerald-800 hover:bg-emerald-900 text-white",
};

export function subjectIslandStyle(subject: string): SubjectIslandStyle {
  if (ISLAND_BY_SUBJECT[subject]) return ISLAND_BY_SUBJECT[subject];
  const lower = subject.toLowerCase();
  if (lower.includes("english") || lower.includes("language") || lower.includes("ela")) {
    return ISLAND_BY_SUBJECT["English Language Arts"];
  }
  if (lower.includes("math")) return ISLAND_BY_SUBJECT.Mathematics;
  if (lower.includes("science")) return ISLAND_BY_SUBJECT["Life & Earth Science"];
  if (lower.includes("history") || lower.includes("social")) {
    return ISLAND_BY_SUBJECT["World History"];
  }
  if (lower.includes("entrepreneur") || lower.includes("business") || lower.includes("financ")) {
    return ISLAND_BY_SUBJECT["Entrepreneurship & Financial Independence"];
  }
  if (lower.includes("athletic") || lower.includes("sport")) {
    return ISLAND_BY_SUBJECT["College Athletic Pathway"];
  }
  if (lower.includes("bible") || lower.includes("scripture")) {
    return ISLAND_BY_SUBJECT["Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study"];
  }
  return FALLBACK;
}

export function grade6Encouragement(done: number, total: number): string {
  if (total === 0) return "Your Grade 6 classroom is ready — pick a subject to begin.";
  if (done === 0) return "You're doing great — finish your first lesson next.";
  if (done >= total) return "Amazing work — you're caught up on lessons!";
  const pct = Math.round((done / total) * 100);
  if (pct < 25) return "Nice start — keep going, one lesson at a time.";
  if (pct < 50) return "You're building momentum — finish the next lesson.";
  if (pct < 75) return "You're doing great — keep finishing lessons.";
  return "Almost there — finish the next lesson to stay ahead.";
}

/** Map sectionKey unit-N → display title (Math). */
const G6_MATH_UNITS: Record<string, string> = {
  "unit-1": "Ratios",
  "unit-2": "Arithmetic with Rational Numbers",
  "unit-3": "Rates and Percentages",
  "unit-4": "Exponents and Order of Operations",
  "unit-5": "Negative Numbers",
  "unit-6": "Variables & Expressions",
  "unit-7": "Equations & Inequalities",
  "unit-8": "Plane Figures",
  "unit-9": "Coordinate Plane",
  "unit-10": "3D Figures",
  "unit-11": "Data and Statistics",
};

/** Map sectionKey unit-N → display title (ELA). */
const G6_ELA_UNITS: Record<string, string> = {
  "unit-1": "Vocabulary Power",
  "unit-2": "Reading: Key Ideas and Details",
  "unit-3": "Reading: Key Ideas — Long Passages",
  "unit-4": "Grammar: Nouns",
  "unit-5": "Grammar: Pronouns",
  "unit-6": "Grammar: Verbs",
  "unit-7": "Reading: Craft and Structure",
  "unit-8": "Reading: Craft — Long Passages",
  "unit-9": "Grammar: Adjectives and Adverbs",
  "unit-10": "Grammar: Prepositions and Interjections",
  "unit-11": "Grammar: Sentences, Clauses, and Phrases",
  "unit-12": "Reading: Integration of Knowledge and Ideas",
  "unit-13": "Reading: Integration — Long Passages",
  "unit-14": "Grammar: Punctuation and Capitalization",
  "unit-15": "Grammar: Word Study",
  "unit-16": "Grammar: Style and Tone",
};


/** Map sectionKey unit-N → display title (Science). */
const G6_SCIENCE_UNITS: Record<string, string> = {
  "unit-1": "Properties of Matter",
  "unit-2": "Elements and Chemical Changes",
  "unit-3": "Forces",
  "unit-4": "Energy",
  "unit-5": "Earth-Sun-Moon System",
  "unit-6": "Earth's Systems and Structure",
  "unit-7": "Managing and Protecting Natural Resources",
  "unit-8": "Interactions in Ecosystems",
  "unit-9": "Cells and Organisms",
  "unit-10": "Traits and the Environment",
};

/** Map sectionKey unit-N → display title (World History). */
const G6_HISTORY_UNITS: Record<string, string> = {
  "unit-1": "Maps and Geographic Thinking",
  "unit-2": "Early Humans and Farming",
  "unit-3": "River Civilizations",
  "unit-4": "Classical Empires and Belief Systems",
  "unit-5": "Medieval Networks",
  "unit-6": "Exploration and the First Global Age",
  "unit-7": "Revolutions and Industry",
  "unit-8": "Texas and American Turning Points",
  "unit-9": "Global Connections Today",
};

function unitTitleMapForSubject(subject?: string | null): Record<string, string> {
  if (!subject) return G6_MATH_UNITS;
  const s = subject.toLowerCase();
  if (s.includes("language") || s.includes("english") || s.includes("reading")) {
    return G6_ELA_UNITS;
  }
  if (s.includes("math")) return G6_MATH_UNITS;
  if (s.includes("science") || s.includes("life") || s.includes("earth")) {
    return G6_SCIENCE_UNITS;
  }
  if (s.includes("history") || s.includes("social") || s.includes("world")) {
    return G6_HISTORY_UNITS;
  }
  return G6_MATH_UNITS;
}

export function isRetiredSection(sectionKey: string | null | undefined): boolean {
  return !sectionKey || sectionKey === "retired" || sectionKey.startsWith("retired");
}

export function grade6UnitLabel(
  sectionKey: string,
  totalUnits = 11,
  subject?: string | null
): string {
  if (isRetiredSection(sectionKey)) return "Archived";
  const m = /^unit-(\d+)$/.exec(sectionKey);
  if (m) {
    const n = Number(m[1]);
    const map = unitTitleMapForSubject(subject);
    const title = map[sectionKey] || sectionKey.replace(/-/g, " ");
    return `Unit ${n} of ${totalUnits} · ${title}`;
  }
  // legacy section-N
  const s = /^section-(\d+)$/.exec(sectionKey);
  if (s) return `Section ${s[1]}`;
  return sectionKey.replace(/-/g, " ");
}

export function grade6UnitNumber(sectionKey: string): number | null {
  const m = /^unit-(\d+)$/.exec(sectionKey);
  return m ? Number(m[1]) : null;
}
