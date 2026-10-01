/**
 * Free public Pre-K learn catalog — Prosper Prep branded activities.
 * First-party HTML5 games are Prosper Prep originals.
 * External embeds require clear iframe / embed rights (never PBS Kids IP).
 */

export type PrekActivityKind = "first-party" | "embed";

export type PrekSkill =
  | "letters"
  | "numbers"
  | "colors"
  | "shapes"
  | "puzzles"
  | "memory"
  | "patterns";

export type PrekActivity = {
  slug: string;
  title: string;
  blurb: string;
  skill: PrekSkill;
  kind: PrekActivityKind;
  accent: string;
  emoji: string;
  /** External iframe src when kind === "embed" */
  embedSrc?: string;
  /** Required attribution HTML text when embedding third-party */
  attribution?: { label: string; href: string; provider: string; providerHref: string };
  minutes: number;
};

export const prekActivities: PrekActivity[] = [
  {
    slug: "letter-pop",
    title: "Letter Pop",
    blurb: "Tap the balloon that shows the letter you hear — bright letter practice for little hands.",
    skill: "letters",
    kind: "first-party",
    accent: "from-rose-400 to-orange-400",
    emoji: "🎈",
    minutes: 5,
  },
  {
    slug: "number-count",
    title: "Number Count",
    blurb: "Count the stars, then tap the matching number. Builds counting confidence from 1 to 10.",
    skill: "numbers",
    kind: "first-party",
    accent: "from-sky-400 to-indigo-500",
    emoji: "⭐",
    minutes: 5,
  },
  {
    slug: "color-match",
    title: "Color Match",
    blurb: "Match each color word to the right paint splash — red, blue, green, and more.",
    skill: "colors",
    kind: "first-party",
    accent: "from-fuchsia-400 to-pink-500",
    emoji: "🎨",
    minutes: 4,
  },
  {
    slug: "shape-sort",
    title: "Shape Sort",
    blurb: "Drag shapes into the matching bins — circles, squares, triangles, and stars.",
    skill: "shapes",
    kind: "first-party",
    accent: "from-emerald-400 to-teal-500",
    emoji: "🔷",
    minutes: 5,
  },
  {
    slug: "memory-match",
    title: "Memory Match",
    blurb: "Flip cards to find matching pairs — a friendly brain puzzle for Pre-K focus.",
    skill: "memory",
    kind: "first-party",
    accent: "from-amber-400 to-yellow-500",
    emoji: "🧠",
    minutes: 6,
  },
  {
    slug: "color-flood",
    title: "Color Flood Puzzle",
    blurb:
      "Flood from the top-left corner by picking colors. Fill the whole board with one color before your turns run out.",
    skill: "puzzles",
    kind: "first-party",
    accent: "from-violet-400 to-purple-600",
    emoji: "🧩",
    minutes: 4,
  },
  {
    slug: "pattern-train",
    title: "Pattern Train",
    blurb: "Look at the color pattern on the train, then tap what comes next — ABAB and ABC practice.",
    skill: "patterns",
    kind: "first-party",
    accent: "from-cyan-400 to-teal-500",
    emoji: "🚂",
    minutes: 5,
  },
  {
    slug: "missing-number",
    title: "Missing Number",
    blurb: "Count along the number line and tap the number that is missing — gentle 1–10 practice.",
    skill: "numbers",
    kind: "first-party",
    accent: "from-blue-400 to-indigo-600",
    emoji: "🔢",
    minutes: 4,
  },
  {
    slug: "letter-sound",
    title: "Letter Sound",
    blurb: "See a picture and word, then tap the letter it starts with — A for Apple and more.",
    skill: "letters",
    kind: "first-party",
    accent: "from-orange-400 to-rose-500",
    emoji: "🔤",
    minutes: 5,
  },
  {
    slug: "lily-pad-leap",
    title: "Lily Pad Leap",
    blurb:
      "Help the frog leap across a bright pond — tap lily pads in number order through five levels with stars and optional sound cues.",
    skill: "numbers",
    kind: "first-party",
    accent: "from-lime-400 to-emerald-600",
    emoji: "🐸",
    minutes: 6,
  },
];

export function getPrekActivity(slug: string): PrekActivity | undefined {
  return prekActivities.find((a) => a.slug === slug);
}

export const skillLabels: Record<PrekSkill, string> = {
  letters: "Letters",
  numbers: "Numbers",
  colors: "Colors",
  shapes: "Shapes",
  puzzles: "Puzzles",
  memory: "Memory",
  patterns: "Patterns",
};
