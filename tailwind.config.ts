import type { Config } from "tailwindcss";

/** Subject-island surfaces — must stay in the CSS bundle (used via lib strings). */
const subjectIslandSafelist = [
  // ELA
  "border-emerald-300",
  "bg-emerald-50",
  "hover:border-emerald-400",
  "bg-emerald-100",
  "text-emerald-900",
  // Math
  "border-sky-300",
  "bg-sky-50",
  "hover:border-sky-400",
  "bg-sky-100",
  "text-sky-900",
  // Science (light teal — contrasts on emerald-950 shell)
  "border-teal-300",
  "bg-teal-50",
  "hover:border-teal-400",
  "bg-teal-100",
  "text-teal-950",
  "bg-teal-700",
  "hover:bg-teal-800",
  "stroke-teal-600",
  // History
  "border-amber-300",
  "bg-amber-50",
  "hover:border-amber-400",
  "bg-amber-100",
  "text-amber-950",
  // Biz
  "border-violet-300",
  "bg-violet-50",
  "hover:border-violet-400",
  "bg-violet-100",
  "text-violet-950",
  // Athletics
  "border-rose-300",
  "bg-rose-50",
  "hover:border-rose-400",
  "bg-rose-100",
  "text-rose-950",
  // Bible
  "border-indigo-300",
  "bg-indigo-50",
  "hover:border-indigo-400",
  "bg-indigo-100",
  "text-indigo-950",
];

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Subject-island accents and other utility class strings live in lib/
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/config/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: subjectIslandSafelist,
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
