/**
 * Best-effort Khan Academy (and reputable educational) YouTube URLs by lesson title / keyword.
 * Fallbacks are subject+grade-band defaults when no title match exists.
 * Prefer leaving null over a clearly wrong video.
 */

export type VideoLookup = {
  subject: string;
  grade: number;
  title: string;
};

/** Exact title → URL */
const EXACT: Record<string, string> = {
  // ELA
  "Analyzing Theme in Short Fiction": "https://www.youtube.com/watch?v=MAu3e5GZo4k",
  "Understanding Theme": "https://www.youtube.com/watch?v=MAu3e5GZo4k",
  "Main Idea and Supporting Details": "https://www.youtube.com/watch?v=3PDnti9X8LR",
  "Claim, Evidence, and Reasoning": "https://www.youtube.com/watch?v=JnNkFMRWbIM",
  "Author's Purpose and Tone": "https://www.youtube.com/watch?v=o85OkeKw1j0",
  "Comparing Texts on the Same Topic": "https://www.youtube.com/watch?v=7Lqr9d1m3dE",
  "Figurative Language: Simile and Metaphor": "https://www.youtube.com/watch?v=OrK9Onk6FfY",
  "Context Clues for Vocabulary": "https://www.youtube.com/watch?v=qgaSnqkwxLw",
  "Narrative Structure: Beginning, Middle, End": "https://www.youtube.com/watch?v=c6I24S72Jps",
  "Summarizing Informational Text": "https://www.youtube.com/watch?v=AfXD9A9v2hM",
  "Opinion Writing with Reasons": "https://www.youtube.com/watch?v=JnNkFMRWbIM",
  "Argumentative Paragraphs": "https://www.youtube.com/watch?v=JnNkFMRWbIM",
  "Media Literacy: Fact vs. Opinion": "https://www.youtube.com/watch?v=bqXne-jGJgU",
  "Poetry Analysis: Imagery and Sound": "https://www.youtube.com/watch?v=J7TqhAVdGXY",
  "Close Reading of Complex Prose": "https://www.youtube.com/watch?v=3PDnti9X8LR",
  "Rhetorical Appeals in Speeches": "https://www.youtube.com/watch?v=o85OkeKw1j0",
  "Literary Criticism: Motif and Symbol": "https://www.youtube.com/watch?v=MAu3e5GZo4k",
  "Satire and Irony": "https://www.youtube.com/watch?v=OrK9Onk6FfY",
  "Evaluating Bias in Media": "https://www.youtube.com/watch?v=bqXne-jGJgU",
  "Retelling a Story in Order": "https://www.youtube.com/watch?v=c6I24S72Jps",
  "Comparing Two Characters": "https://www.youtube.com/watch?v=MAu3e5GZo4k",
  "Short Vowels in CVC Words": "https://www.youtube.com/watch?v=a4lVH2YdQnA",
  "Capital Letters and Periods": "https://www.youtube.com/watch?v=ytVgcQZ9w5A",

  // Math
  "Proportional Relationships": "https://www.youtube.com/watch?v=qYjiVWwefto",
  "Introduction to proportional relationships": "https://www.youtube.com/watch?v=qYjiVWwefto",
  "Percent Increase and Decrease": "https://www.youtube.com/watch?v=uej-8JLYb4k",
  "Ratios and Unit Rates": "https://www.youtube.com/watch?v=LQG-SXJzP8s",
  "Percent Concepts": "https://www.youtube.com/watch?v=uenYu1q2YpA",
  "Integers on the Number Line": "https://www.youtube.com/watch?v=3XOt1fjWKi8",
  "One-Step Equations": "https://www.youtube.com/watch?v=9DxrF6Tt0Aw",
  "Solving Two-Step Equations": "https://www.youtube.com/watch?v=1c5HY3z4k8Y",
  "Simplifying Algebraic Expressions": "https://www.youtube.com/watch?v=3NHSwiv_pRs",
  "Inequalities on the Number Line": "https://www.youtube.com/watch?v=VgDe_DJbwII",
  "Slope and Linear Relationships": "https://www.youtube.com/watch?v=R948Tsyq4dA",
  "Pythagorean Theorem": "https://www.youtube.com/watch?v=AA6RfgP-AHU",
  "Scientific Notation": "https://www.youtube.com/watch?v=Dme-G4srcGU",
  "Integer Exponents": "https://www.youtube.com/watch?v=kmjf7k3S160",
  "Functions: Input and Output": "https://www.youtube.com/watch?v=VhokQhjl5t0",
  "Linear Functions and Graphs": "https://www.youtube.com/watch?v=R948Tsyq4dA",
  "Systems of Linear Equations": "https://www.youtube.com/watch?v=nok99JOhcjo",
  "Factoring Trinomials": "https://www.youtube.com/watch?v=eFdVexzn7Y0",
  "Quadratic Formula and Completing the Square": "https://www.youtube.com/watch?v=i7idZfS8t8w",
  "Place Value: Tens and Ones": "https://www.youtube.com/watch?v=T5Qf0qSSJFI",
  "Addition within 100": "https://www.youtube.com/watch?v=igcoDFokKzU",
  "Multiplication as Equal Groups": "https://www.youtube.com/watch?v=eg591BaGfOw",
  "Fractions on a Number Line": "https://www.youtube.com/watch?v=5juto2DlqAw",
  "Area of Rectangles": "https://www.youtube.com/watch?v=c4G7XG_zYrE",
  "Equivalent Fractions": "https://www.youtube.com/watch?v=U2ovEuEUxXQ",
  "Decimals to Hundredths": "https://www.youtube.com/watch?v=kN3YQZQ0H8w",
  "Volume of Rectangular Prisms": "https://www.youtube.com/watch?v=qhwP2qudC9c",
  "Coordinate Plane Quadrant I": "https://www.youtube.com/watch?v=2SUvWfNJSsM",
  "Counting to 20": "https://www.youtube.com/watch?v=DR-cfDsHCGA",
  "Circles: Circumference and Area": "https://www.youtube.com/watch?v=Y8QT4sB9gqQ",
  "Probability of Simple Events": "https://www.youtube.com/watch?v=uzkc-qNVoOk",
  "Scale Drawings": "https://www.youtube.com/watch?v=UScpuH1Y4Q4",
  "Rational Number Operations": "https://www.youtube.com/watch?v=3XOt1fjWKi8",

  // Science
  "Cells as Building Blocks": "https://www.youtube.com/watch?v=zk3vlhz1b6k",
  "Photosynthesis Overview": "https://www.youtube.com/watch?v=uixA8ZXx0KU",
  "Human Body Systems Intro": "https://www.youtube.com/watch?v=OgSh6XpzqOE",
  "Atoms and Molecules": "https://www.youtube.com/watch?v=1xbHSFnDI64",
  "Chemical vs Physical Changes": "https://www.youtube.com/watch?v=37zarVcXRTE",
  "Forces, Motion, and Newton's Laws": "https://www.youtube.com/watch?v=kKKM8Y-u7ds",
  "Waves: Sound and Light": "https://www.youtube.com/watch?v=Ph3SNsxz9fE",
  "Water Cycle": "https://www.youtube.com/watch?v=al-do-HGuIk",
  "Food Chains and Food Webs": "https://www.youtube.com/watch?v=bueEeAsyZ6w",
  "Matter: Solids, Liquids, Gases": "https://www.youtube.com/watch?v=s-KvoVzukHo",
  "Forms of Energy": "https://www.youtube.com/watch?v=fHIzX0WZJqk",
  "Genetics and Heredity": "https://www.youtube.com/watch?v=CBezq1fFUEA",
  "Evolution and Natural Selection": "https://www.youtube.com/watch?v=aTXtTCodt0M",
  "Chemical Bonding and Reactions": "https://www.youtube.com/watch?v=QqjcCv0e9xE",
  "Ecology and Biodiversity": "https://www.youtube.com/watch?v=bueEeAsyZ6w",
  "Living and Nonliving": "https://www.youtube.com/watch?v=zqikdhM0YTM",
  "Plant Needs: Light and Water": "https://www.youtube.com/watch?v=uixA8ZXx0KU",
  "Weather We Can Observe": "https://www.youtube.com/watch?v=LRP8d7R96FY",
  "Push and Pull Forces": "https://www.youtube.com/watch?v=kKKM8Y-u7ds",
  "Scientific Method and Experimental Design": "https://www.youtube.com/watch?v=ii2m5aYhYbA",

  // Social studies
  "Geography Tools and Spatial Thinking": "https://www.youtube.com/watch?v=0LplHnPEs_I",
  "Ancient River Civilizations": "https://www.youtube.com/watch?v=sohI6vnWZmk",
  "U.S. Constitution Basics": "https://www.youtube.com/watch?v=HsXlKBn9M9o",
  "American Revolution Ideals": "https://www.youtube.com/watch?v=HlUiSBXQHCw",
  "Reading Maps: Keys and Directions": "https://www.youtube.com/watch?v=0LplHnPEs_I",
  "Needs and Wants": "https://www.youtube.com/watch?v=4Cz5Sw0Yo1M",
  "Being a Good Citizen": "https://www.youtube.com/watch?v=24Y8v9xGd0Y",
  "Historical Thinking: Sourcing Documents": "https://www.youtube.com/watch?v=HsXlKBn9M9o",
  "Civil Rights Movements": "https://www.youtube.com/watch?v=URxwe6LPvkM",
  "Civics: Federalism and Citizenship": "https://www.youtube.com/watch?v=HsXlKBn9M9o",
  "Economics: Markets and Policy": "https://www.youtube.com/watch?v=3ez10ADR_gM",
  "World Wars and Global Power": "https://www.youtube.com/watch?v=yQC56gFhDsQ",

  // Specialty — ACT/SAT etc.
  "ACT Overview & Score Strategy": "https://www.youtube.com/watch?v=JnNkFMRWbIM",
  "ACT English: Grammar & Rhetoric": "https://www.youtube.com/watch?v=ytVgcQZ9w5A",
  "ACT Math: Shortcuts & Timing": "https://www.youtube.com/watch?v=9DxrF6Tt0Aw",
  "ACT Reading: Passage Mapping": "https://www.youtube.com/watch?v=3PDnti9X8LR",
};

/** Keyword (lowercase substring of title) → URL. Longer/more specific keys checked first after sort by length. */
const KEYWORDS: Array<[string, string]> = [
  ["theme", "https://www.youtube.com/watch?v=MAu3e5GZo4k"],
  ["main idea", "https://www.youtube.com/watch?v=3PDnti9X8LR"],
  ["claim, evidence", "https://www.youtube.com/watch?v=JnNkFMRWbIM"],
  ["author's purpose", "https://www.youtube.com/watch?v=o85OkeKw1j0"],
  ["figurative", "https://www.youtube.com/watch?v=OrK9Onk6FfY"],
  ["simile", "https://www.youtube.com/watch?v=OrK9Onk6FfY"],
  ["metaphor", "https://www.youtube.com/watch?v=OrK9Onk6FfY"],
  ["context clue", "https://www.youtube.com/watch?v=qgaSnqkwxLw"],
  ["summariz", "https://www.youtube.com/watch?v=AfXD9A9v2hM"],
  ["poetry", "https://www.youtube.com/watch?v=J7TqhAVdGXY"],
  ["rhetoric", "https://www.youtube.com/watch?v=o85OkeKw1j0"],
  ["irony", "https://www.youtube.com/watch?v=OrK9Onk6FfY"],
  ["bias", "https://www.youtube.com/watch?v=bqXne-jGJgU"],
  ["fact vs", "https://www.youtube.com/watch?v=bqXne-jGJgU"],
  ["argument", "https://www.youtube.com/watch?v=JnNkFMRWbIM"],
  ["close reading", "https://www.youtube.com/watch?v=3PDnti9X8LR"],
  ["proportion", "https://www.youtube.com/watch?v=qYjiVWwefto"],
  ["ratio", "https://www.youtube.com/watch?v=LQG-SXJzP8s"],
  ["percent", "https://www.youtube.com/watch?v=uenYu1q2YpA"],
  ["integer", "https://www.youtube.com/watch?v=3XOt1fjWKi8"],
  ["equation", "https://www.youtube.com/watch?v=9DxrF6Tt0Aw"],
  ["inequalit", "https://www.youtube.com/watch?v=VgDe_DJbwII"],
  ["slope", "https://www.youtube.com/watch?v=R948Tsyq4dA"],
  ["linear", "https://www.youtube.com/watch?v=R948Tsyq4dA"],
  ["pythagorean", "https://www.youtube.com/watch?v=AA6RfgP-AHU"],
  ["exponent", "https://www.youtube.com/watch?v=kmjf7k3S160"],
  ["scientific notation", "https://www.youtube.com/watch?v=Dme-G4srcGU"],
  ["function", "https://www.youtube.com/watch?v=VhokQhjl5t0"],
  ["quadratic", "https://www.youtube.com/watch?v=i7idZfS8t8w"],
  ["factoring", "https://www.youtube.com/watch?v=eFdVexzn7Y0"],
  ["fraction", "https://www.youtube.com/watch?v=U2ovEuEUxXQ"],
  ["decimal", "https://www.youtube.com/watch?v=kN3YQZQ0H8w"],
  ["area", "https://www.youtube.com/watch?v=c4G7XG_zYrE"],
  ["volume", "https://www.youtube.com/watch?v=qhwP2qudC9c"],
  ["coordinate", "https://www.youtube.com/watch?v=2SUvWfNJSsM"],
  ["multiplicat", "https://www.youtube.com/watch?v=eg591BaGfOw"],
  ["division", "https://www.youtube.com/watch?v=bcM1Lh8Noxg"],
  ["place value", "https://www.youtube.com/watch?v=T5Qf0qSSJFI"],
  ["probability", "https://www.youtube.com/watch?v=uzkc-qNVoOk"],
  ["circle", "https://www.youtube.com/watch?v=Y8QT4sB9gqQ"],
  ["photosynthesis", "https://www.youtube.com/watch?v=uixA8ZXx0KU"],
  ["cell", "https://www.youtube.com/watch?v=zk3vlhz1b6k"],
  ["atom", "https://www.youtube.com/watch?v=1xbHSFnDI64"],
  ["molecule", "https://www.youtube.com/watch?v=1xbHSFnDI64"],
  ["newton", "https://www.youtube.com/watch?v=kKKM8Y-u7ds"],
  ["force", "https://www.youtube.com/watch?v=kKKM8Y-u7ds"],
  ["wave", "https://www.youtube.com/watch?v=Ph3SNsxz9fE"],
  ["water cycle", "https://www.youtube.com/watch?v=al-do-HGuIk"],
  ["food chain", "https://www.youtube.com/watch?v=bueEeAsyZ6w"],
  ["ecosystem", "https://www.youtube.com/watch?v=bueEeAsyZ6w"],
  ["genetics", "https://www.youtube.com/watch?v=CBezq1fFUEA"],
  ["heredity", "https://www.youtube.com/watch?v=CBezq1fFUEA"],
  ["evolution", "https://www.youtube.com/watch?v=aTXtTCodt0M"],
  ["natural selection", "https://www.youtube.com/watch?v=aTXtTCodt0M"],
  ["chemical", "https://www.youtube.com/watch?v=37zarVcXRTE"],
  ["matter", "https://www.youtube.com/watch?v=s-KvoVzukHo"],
  ["energy", "https://www.youtube.com/watch?v=fHIzX0WZJqk"],
  ["weather", "https://www.youtube.com/watch?v=LRP8d7R96FY"],
  ["climate", "https://www.youtube.com/watch?v=LRP8d7R96FY"],
  ["plate tectonic", "https://www.youtube.com/watch?v=ryrXAGY1dmE"],
  ["constitution", "https://www.youtube.com/watch?v=HsXlKBn9M9o"],
  ["revolution", "https://www.youtube.com/watch?v=HlUiSBXQHCw"],
  ["civil rights", "https://www.youtube.com/watch?v=URxwe6LPvkM"],
  ["map", "https://www.youtube.com/watch?v=0LplHnPEs_I"],
  ["geography", "https://www.youtube.com/watch?v=0LplHnPEs_I"],
  ["civilization", "https://www.youtube.com/watch?v=sohI6vnWZmk"],
  ["citizen", "https://www.youtube.com/watch?v=24Y8v9xGd0Y"],
  ["economics", "https://www.youtube.com/watch?v=3ez10ADR_gM"],
  ["market", "https://www.youtube.com/watch?v=3ez10ADR_gM"],
  ["federalism", "https://www.youtube.com/watch?v=HsXlKBn9M9o"],
  ["war", "https://www.youtube.com/watch?v=yQC56gFhDsQ"],
  ["hebrew", "https://www.youtube.com/watch?v=1A4V2nOQ0pI"],
  ["paleo", "https://www.youtube.com/watch?v=1A4V2nOQ0pI"],
  ["scripture", "https://www.youtube.com/watch?v=1A4V2nOQ0pI"],
  ["bible", "https://www.youtube.com/watch?v=1A4V2nOQ0pI"],
  ["covenant", "https://www.youtube.com/watch?v=1A4V2nOQ0pI"],
  ["athlet", "https://www.youtube.com/watch?v=oqMVx6xMqjE"],
  ["training", "https://www.youtube.com/watch?v=oqMVx6xMqjE"],
  ["entrepreneur", "https://www.youtube.com/watch?v=3ez10ADR_gM"],
  ["budget", "https://www.youtube.com/watch?v=3ez10ADR_gM"],
  ["finance", "https://www.youtube.com/watch?v=3ez10ADR_gM"],
  ["invest", "https://www.youtube.com/watch?v=3ez10ADR_gM"],
  ["sat ", "https://www.youtube.com/watch?v=JnNkFMRWbIM"],
  ["act ", "https://www.youtube.com/watch?v=JnNkFMRWbIM"],
  ["grammar", "https://www.youtube.com/watch?v=ytVgcQZ9w5A"],
  ["clause", "https://www.youtube.com/watch?v=ytVgcQZ9w5A"],
  ["essay", "https://www.youtube.com/watch?v=JnNkFMRWbIM"],
  ["letter sound", "https://www.youtube.com/watch?v=a4lVH2YdQnA"],
  ["rhyming", "https://www.youtube.com/watch?v=a4lVH2YdQnA"],
  ["phon", "https://www.youtube.com/watch?v=a4lVH2YdQnA"],
  ["vowel", "https://www.youtube.com/watch?v=a4lVH2YdQnA"],
  ["counting", "https://www.youtube.com/watch?v=DR-cfDsHCGA"],
  ["shape", "https://www.youtube.com/watch?v=guNdty5R0I0"],
];

/** Subject-family fallbacks by grade band */
const FALLBACKS: Record<string, { early: string; elem: string; middle: string; high: string }> = {
  ela: {
    early: "https://www.youtube.com/watch?v=a4lVH2YdQnA",
    elem: "https://www.youtube.com/watch?v=3PDnti9X8LR",
    middle: "https://www.youtube.com/watch?v=MAu3e5GZo4k",
    high: "https://www.youtube.com/watch?v=o85OkeKw1j0",
  },
  math: {
    early: "https://www.youtube.com/watch?v=DR-cfDsHCGA",
    elem: "https://www.youtube.com/watch?v=eg591BaGfOw",
    middle: "https://www.youtube.com/watch?v=qYjiVWwefto",
    high: "https://www.youtube.com/watch?v=R948Tsyq4dA",
  },
  science: {
    early: "https://www.youtube.com/watch?v=zqikdhM0YTM",
    elem: "https://www.youtube.com/watch?v=al-do-HGuIk",
    middle: "https://www.youtube.com/watch?v=zk3vlhz1b6k",
    high: "https://www.youtube.com/watch?v=uixA8ZXx0KU",
  },
  ss: {
    early: "https://www.youtube.com/watch?v=24Y8v9xGd0Y",
    elem: "https://www.youtube.com/watch?v=0LplHnPEs_I",
    middle: "https://www.youtube.com/watch?v=sohI6vnWZmk",
    high: "https://www.youtube.com/watch?v=HsXlKBn9M9o",
  },
  bible: {
    early: "https://www.youtube.com/watch?v=1A4V2nOQ0pI",
    elem: "https://www.youtube.com/watch?v=1A4V2nOQ0pI",
    middle: "https://www.youtube.com/watch?v=1A4V2nOQ0pI",
    high: "https://www.youtube.com/watch?v=1A4V2nOQ0pI",
  },
  athletics: {
    early: "https://www.youtube.com/watch?v=oqMVx6xMqjE",
    elem: "https://www.youtube.com/watch?v=oqMVx6xMqjE",
    middle: "https://www.youtube.com/watch?v=oqMVx6xMqjE",
    high: "https://www.youtube.com/watch?v=oqMVx6xMqjE",
  },
  business: {
    early: "https://www.youtube.com/watch?v=3ez10ADR_gM",
    elem: "https://www.youtube.com/watch?v=3ez10ADR_gM",
    middle: "https://www.youtube.com/watch?v=3ez10ADR_gM",
    high: "https://www.youtube.com/watch?v=3ez10ADR_gM",
  },
  testprep: {
    early: "https://www.youtube.com/watch?v=JnNkFMRWbIM",
    elem: "https://www.youtube.com/watch?v=JnNkFMRWbIM",
    middle: "https://www.youtube.com/watch?v=JnNkFMRWbIM",
    high: "https://www.youtube.com/watch?v=JnNkFMRWbIM",
  },
};

function band(grade: number): "early" | "elem" | "middle" | "high" {
  if (grade <= 2) return "early";
  if (grade <= 5) return "elem";
  if (grade <= 8) return "middle";
  return "high";
}

function family(subject: string): keyof typeof FALLBACKS {
  const s = subject.toLowerCase();
  if (s.includes("bible") || s.includes("scripture") || s.includes("hebrew") || s.includes("faith"))
    return "bible";
  if (s.includes("athletic") || s.includes("sport") || s.includes("fitness")) return "athletics";
  if (s.includes("business") || s.includes("entrepreneur") || s.includes("finance") || s.includes("money"))
    return "business";
  if (s.includes("act") || s.includes("sat") || s.includes("test prep") || s.includes("college prep"))
    return "testprep";
  if (s.includes("math") || s.includes("algebra") || s.includes("geometry") || s.includes("calculus"))
    return "math";
  if (
    s.includes("science") ||
    s.includes("biology") ||
    s.includes("chemistry") ||
    s.includes("physics") ||
    s.includes("life") ||
    s.includes("earth")
  )
    return "science";
  if (
    s.includes("social") ||
    s.includes("history") ||
    s.includes("civics") ||
    s.includes("geography") ||
    s.includes("world") ||
    s.includes("u.s.")
  )
    return "ss";
  return "ela";
}

export function resolveVideoUrl(subject: string, grade: number, title: string): string | null {
  if (EXACT[title]) return EXACT[title];

  const lower = title.toLowerCase();
  const sorted = [...KEYWORDS].sort((a, b) => b[0].length - a[0].length);
  for (const [kw, url] of sorted) {
    if (lower.includes(kw)) return url;
  }

  const fam = family(subject);
  const fb = FALLBACKS[fam];
  return fb[band(grade)] || null;
}

/** Count of curated exact + keyword entries (for reporting). */
export function videoMapStats() {
  return { exact: Object.keys(EXACT).length, keywords: KEYWORDS.length };
}
