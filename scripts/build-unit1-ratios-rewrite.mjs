/**
 * Build Unit 1 Ratios teach rewrite:
 * - docs/curriculum/ratios/*.md
 * - migrations/0014_grade6_ratios_teach_rewrite.sql
 * - patch prisma/grade6-math/year.ts content/objectives/questions for unit-1
 *
 * Run: node scripts/build-unit1-ratios-rewrite.mjs
 * Do NOT run gen-grade6-math-year.mjs afterward for unit-1 (it is carved out).
 */
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { UNIT1_LESSONS, buildFullContent, COURSE_ID } from "./data/grade6-unit1-ratios.mjs";

function escSql(s) {
  return String(s).replace(/'/g, "''");
}

function escTsString(s) {
  return JSON.stringify(s).slice(1, -1); // escape as content of "..."
}

const docsDir = "docs/curriculum/ratios";
mkdirSync(docsDir, { recursive: true });

const slug = (title, i) =>
  `${String(i).padStart(2, "0")}-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;

let sql = `-- Grade 6 Math Unit 1 Ratios: hand-authored Teach / Warm-up / Guided / Exit + skill Check MC.
-- Keeps existing lesson IDs and titles (10 lessons). Independent practice from skill banks (light polish).
-- UPDATE content + objectives + Question rows only. Preserve videoUrl.
-- Do NOT run db:setup. Safe for production D1 (prosperprep-school).
-- Source: scripts/data/grade6-unit1-ratios.mjs — do not re-run gen-grade6-math-year.mjs for unit-1.

`;

for (let i = 0; i < UNIT1_LESSONS.length; i++) {
  const L = UNIT1_LESSONS[i];
  const content = buildFullContent(L);
  const mdPath = `${docsDir}/${slug(L.title, i + 1)}.md`;
  writeFileSync(
    mdPath,
    `# ${L.title}\n\n*Grade 6 Mathematics · Unit 1 · Ratios · Lesson ${L.order}*\n*Prosper Prep hand rewrite · shipped via migration 0014*\n\n${content}`
  );

  sql += `-- ${L.order}. ${L.title} (${L.id})\n`;
  sql += `UPDATE "Lesson" SET "content" = '${escSql(content)}', "objectives" = '${escSql(L.objectives)}', "description" = '${escSql(L.description)}' WHERE "id" = '${L.id}' AND "courseId" = '${COURSE_ID}';\n\n`;

  for (const q of L.questions) {
    const choicesJson = JSON.stringify(q.choices);
    sql += `INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('${q.id}','${L.id}',NULL,'MULTIPLE_CHOICE','${escSql(q.prompt)}','${escSql(choicesJson)}',${q.correctIndex},'${escSql(q.explanation)}',1,${q.order}) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";\n`;
  }
  sql += `\n`;
}

writeFileSync("migrations/0014_grade6_ratios_teach_rewrite.sql", sql);
console.log("Wrote migrations/0014_grade6_ratios_teach_rewrite.sql", Buffer.byteLength(sql), "bytes");

// Patch year.ts — replace content, objectives, description, questions for each unit-1 id
let year = readFileSync("prisma/grade6-math/year.ts", "utf8");

for (const L of UNIT1_LESSONS) {
  const content = buildFullContent(L);
  const idNeedle = `id: "${L.id}"`;
  const start = year.indexOf(idNeedle);
  if (start < 0) throw new Error(`Lesson id not found in year.ts: ${L.id}`);
  // Find the object bounds: from the `{` before id to the matching `},` after questions
  let objStart = year.lastIndexOf("{", start);
  // Find end: "questions: [...]," then closing
  const after = year.slice(start);
  const qIdx = after.indexOf("questions: ");
  if (qIdx < 0) throw new Error(`questions not found for ${L.id}`);
  const qAbs = start + qIdx;
  // Find end of questions array — first `],\n  }` pattern after questions
  const qEndRel = after.slice(qIdx).search(/\],\n  \}/);
  if (qEndRel < 0) throw new Error(`questions end not found for ${L.id}`);
  const objEnd = start + qIdx + qEndRel + "],\n  }".length; // points after }

  // Rebuild fields inside object: keep id/title/order/duration/section/unit/unitTitle; replace description, objectives, content, questions
  const oldObj = year.slice(objStart, objEnd);
  const title = oldObj.match(/title: "([^"]+)"/)?.[1];
  const order = oldObj.match(/order: (\d+)/)?.[1];
  const durationMin = oldObj.match(/durationMin: (\d+)/)?.[1];
  const sectionKey = oldObj.match(/sectionKey: "([^"]+)"/)?.[1];
  const unit = oldObj.match(/unit: (\d+)/)?.[1];
  const unitTitle = oldObj.match(/unitTitle: "([^"]+)"/)?.[1];

  const newObj = `{
    id: "${L.id}",
    title: ${JSON.stringify(title || L.title)},
    description: ${JSON.stringify(L.description)},
    objectives: ${JSON.stringify(L.objectives)},
    content: ${JSON.stringify(content)},
    order: ${order || L.order},
    durationMin: ${durationMin || 35},
    sectionKey: ${JSON.stringify(sectionKey || "unit-1")},
    unit: ${unit || 1},
    unitTitle: ${JSON.stringify(unitTitle || "Ratios")},
    questions: ${JSON.stringify(
      L.questions.map(({ prompt, choices, correctIndex, explanation, order }) => ({
        prompt,
        choices,
        correctIndex,
        explanation,
        order,
      }))
    )},
  }`;

  year = year.slice(0, objStart) + newObj + year.slice(objEnd);
  console.log("Patched year.ts", L.title);
}

// Banner comment near top if missing
if (!year.includes("UNIT-1 HAND-AUTHORED")) {
  year = year.replace(
    `export const G6_MATH_LESSONS: G6MathLessonRow[] = [`,
    `// UNIT-1 HAND-AUTHORED: lessons with sectionKey "unit-1" are maintained in scripts/data/grade6-unit1-ratios.mjs.\n// Do NOT overwrite them by re-running scripts/gen-grade6-math-year.mjs (generator skips unit-1).\nexport const G6_MATH_LESSONS: G6MathLessonRow[] = [`
  );
}

writeFileSync("prisma/grade6-math/year.ts", year);
console.log("Updated prisma/grade6-math/year.ts");

// QC: no forbidden themes / competitor names in student content
const forbidden = [/khan/i, /ckla/i, /ckhg/i, /\bgay\b/i, /\btrans\b/i, /lgbt/i, /lesbian/i, /bisexual/i];
for (const L of UNIT1_LESSONS) {
  const text = buildFullContent(L);
  for (const re of forbidden) {
    if (re.test(text)) console.warn("WARN forbidden pattern", re, "in", L.title);
  }
  for (const q of L.questions) {
    const blob = q.prompt + q.choices.join(" ") + q.explanation;
    for (const re of forbidden) {
      if (re.test(blob)) console.warn("WARN forbidden in Q", re, L.title);
    }
  }
}
console.log("Done. Lessons:", UNIT1_LESSONS.length);
