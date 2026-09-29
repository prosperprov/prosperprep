/**
 * Assemble migrations/0008_grade6_real_practice_no_html.sql from generated fragments.
 * Run after gen-grade6-math-year / gen-grade6-ela-year / gen-grade6-content-sql.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

mkdirSync("scripts/generated", { recursive: true });
const fragments = [
  "scripts/generated/_fragment_grade6_math_content_update.sql",
  "scripts/generated/_fragment_grade6_ela_content_update.sql",
  "scripts/generated/_fragment_grade6_core_content_update.sql",
];
const header = `-- Grade 6 Math+ELA: replace stub Independent practice with unique skill items;
-- replace raw <details>/<summary> answer keys with Markdown ### Answer key (try first).
-- UPDATE lesson content (and Math/ELA course descriptions) only. Safe for production D1.
-- Do NOT run db:setup.
-- Regenerated via: node scripts/gen-grade6-math-year.mjs && node scripts/gen-grade6-ela-year.mjs && npx tsx scripts/gen-grade6-content-sql.ts && node scripts/assemble-grade6-practice-sql.mjs

`;
const body = fragments.map((f) => readFileSync(f, "utf8").trimEnd()).join("\n\n") + "\n";
writeFileSync("migrations/0008_grade6_real_practice_no_html.sql", header + body);
console.log("Wrote migrations/0008_grade6_real_practice_no_html.sql");
