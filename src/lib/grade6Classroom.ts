/**
 * Immersive classroom chrome (units accordion, lesson dock, subject islands).
 * Enabled for every grade — same Grade-6-style UI across the school.
 */

export const GRADE_6 = 6 as const;

/** True for immersive classroom UI (all grades). */
export function isGrade6Classroom(grade?: number | null): boolean {
  void grade; // immersive chrome is enabled for every grade
  return true;
}

/** Sequential year-path unit unlock: Grade 6 and Grade 10 full-year cores. */
export function usesSequentialUnitUnlock(grade: number | null | undefined): boolean {
  return grade === GRADE_6 || grade === 10;
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
  // Light elevated mint/teal — never dark (must contrast on emerald-950 shell)
  "Life & Earth Science": {
    shortLabel: "Science",
    emoji: "🌍",
    accent: "border-teal-300 bg-teal-50 hover:border-teal-400",
    ring: "stroke-teal-600",
    badge: "bg-teal-100 text-teal-950",
    cta: "bg-teal-700 hover:bg-teal-800 text-white",
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
  "Bible Study: Hallelujah Scriptures & Paleo-Hebrew": {
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
  if (lower.includes("math") || lower.includes("algebra")) return ISLAND_BY_SUBJECT.Mathematics;
  if (lower.includes("science") || lower.includes("biology") || lower.includes("chemistry")) return ISLAND_BY_SUBJECT["Life & Earth Science"];
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
    return ISLAND_BY_SUBJECT["Bible Study: Hallelujah Scriptures & Paleo-Hebrew"];
  }
  return FALLBACK;
}

export function grade6Encouragement(done: number, total: number): string {
  if (total === 0) return "Your classroom is ready — pick a subject to begin.";
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


const G10_MATH_UNITS: Record<string, string> = {
  "unit-1": "Linear Functions & Systems",
  "unit-2": "Quadratic Functions",
  "unit-3": "Polynomials",
  "unit-4": "Rational Expressions & Equations",
  "unit-5": "Radicals & Rational Exponents",
  "unit-6": "Exponential & Logarithmic Functions",
  "unit-7": "Sequences & Series",
  "unit-8": "Trigonometry Foundations",
  "unit-9": "Probability & Statistics",
  "unit-10": "Functions, Modeling & Capstone",
};
const G10_ELA_UNITS: Record<string, string> = {
  "unit-1": "Close Reading & Annotation",
  "unit-2": "Short Fiction Analysis",
  "unit-3": "Poetry Craft",
  "unit-4": "Drama & Performance Literacy",
  "unit-5": "Argument & Rhetoric",
  "unit-6": "Research & Information Literacy",
  "unit-7": "Extended Literary Study",
  "unit-8": "Grammar & Style for Writers",
  "unit-9": "Media, Satire & Synthesis",
  "unit-10": "Timed Writing & Portfolio Capstone",
};
const G10_SCIENCE_UNITS: Record<string, string> = {
  "unit-1": "Scientific Inquiry & Biochemistry",
  "unit-2": "Cells",
  "unit-3": "Energy in Living Systems",
  "unit-4": "Genetics & Heredity",
  "unit-5": "Evolution & Diversity",
  "unit-6": "Ecology & Human Impact",
  "unit-7": "Chemistry Foundations",
  "unit-8": "Chemical Reactions & Quantities",
  "unit-9": "Human Body Systems & Homeostasis",
  "unit-10": "Integrated Science Capstone",
};
const G10_HISTORY_UNITS: Record<string, string> = {
  "unit-1": "Historical Thinking & Foundations",
  "unit-2": "Revolutions & New Political Orders",
  "unit-3": "Industrialization & Imperialism",
  "unit-4": "World Wars & Global Upheaval",
  "unit-5": "Cold War & Decolonization",
  "unit-6": "U.S. Turning Points in a Global Age",
  "unit-7": "Global Economy & Contemporary Issues",
  "unit-8": "Civics, Law & Civic Reasoning",
  "unit-9": "Texas & Regional Connections",
  "unit-10": "Research Capstone & Historical Argument",
};

function unitTitleMapForSubject(subject?: string | null): Record<string, string> {
  if (!subject) return G6_MATH_UNITS;
  const s = subject.toLowerCase();
  if (s.includes("algebra")) return G10_MATH_UNITS;
  if (s.includes("english literature")) return G10_ELA_UNITS;
  if (s.includes("biology") || s.includes("chemistry")) return G10_SCIENCE_UNITS;
  if (s.includes("u.s.") && s.includes("history")) return G10_HISTORY_UNITS;
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
