/**
 * Shared helpers for Grade 10 full-year SQL/TS generation.
 * Pattern matches Grade 6 year migrations (retire stubs → INSERT year path).
 */
import { createHash } from "node:crypto";
import { writeFileSync, mkdirSync } from "node:fs";

export function stableId(prefix, slug) {
  const h = createHash("sha256").update(`${prefix}:${slug}`).digest("hex").slice(0, 20);
  return `${prefix}${h}`;
}

export function esc(s) {
  return String(s).replace(/'/g, "''");
}

export function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < String(s).length; i++) {
    h ^= String(s).charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function pick(arr, seed) {
  return arr[hash(String(seed)) % arr.length];
}

export function rotChoices(correct, wrong, seed) {
  const items = [correct, ...wrong];
  const rot = hash(String(seed)) % 4;
  const choices = [...items.slice(rot), ...items.slice(0, rot)];
  return { choices, correctIndex: choices.indexOf(correct) };
}

export function nums(seed, base = 3) {
  const h = hash(String(seed));
  const a = base + (h % 9);
  const b = base + 1 + ((h >> 3) % 8);
  const c = base + 2 + ((h >> 6) % 7);
  return { a, b, c, d: a + b, e: a * b, f: 10 + (h % 40), g: 5 + (h % 20), h: 2 + (h % 6) };
}

export function emitYearSql({
  headerLines,
  courseId,
  courseTitle,
  courseDescription,
  oldStubs,
  oldQuizzes,
  lessons,
  unitQuizzes,
  prefix,
}) {
  const sql = [];
  for (const line of headerLines) sql.push(line);
  sql.push("");
  sql.push(
    `UPDATE "Course" SET "title" = '${esc(courseTitle)}', "description" = '${esc(
      courseDescription
    )}' WHERE "id" = '${courseId}';`
  );
  sql.push("");

  let retireOrder = 900;
  for (const id of oldStubs) {
    sql.push(
      `UPDATE "Lesson" SET "sectionKey" = 'retired', "order" = ${retireOrder}, "title" = '[Archived stub] ' || "title", "description" = 'Archived — replaced by full-year Grade 10 path.' WHERE "id" = '${id}' AND "courseId" = '${courseId}' AND "sectionKey" != 'retired';`
    );
    retireOrder += 1;
  }
  sql.push("");

  for (const qid of oldQuizzes) {
    sql.push(`DELETE FROM "Question" WHERE "quizId" = '${qid}';`);
    sql.push(`DELETE FROM "Attempt" WHERE "quizId" = '${qid}';`);
    sql.push(`DELETE FROM "Quiz" WHERE "id" = '${qid}';`);
  }
  sql.push("");

  for (const L of lessons) {
    sql.push(
      `INSERT INTO "Lesson" ("id","courseId","title","description","content","objectives","order","durationMin","sectionKey","videoUrl") VALUES ('${L.id}','${courseId}','${esc(
        L.title
      )}','${esc(L.description)}','${esc(L.content)}','${esc(L.objectives)}',${L.order},${
        L.durationMin
      },'${esc(L.sectionKey)}',${
        L.videoUrl ? `'${esc(L.videoUrl)}'` : "NULL"
      }) ON CONFLICT("id") DO UPDATE SET "title"=excluded."title","description"=excluded."description","content"=excluded."content","objectives"=excluded."objectives","order"=excluded."order","durationMin"=excluded."durationMin","sectionKey"=excluded."sectionKey","courseId"=excluded."courseId","videoUrl"=excluded."videoUrl";`
    );
    for (const q of L.questions) {
      const qid = stableId(prefix, `lq:${L.id}:${q.order}`);
      sql.push(
        `INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('${qid}','${L.id}',NULL,'MULTIPLE_CHOICE','${esc(
          q.prompt
        )}','${esc(JSON.stringify(q.choices))}',${q.correctIndex},'${esc(q.explanation)}',1,${
          q.order
        }) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";`
      );
    }
  }
  sql.push("");

  for (const U of unitQuizzes) {
    sql.push(
      `INSERT INTO "Quiz" ("id","courseId","title","description","order","sectionKey") VALUES ('${U.id}','${courseId}','${esc(
        U.title
      )}','${esc(U.description)}',${U.order},'${esc(
        U.sectionKey
      )}') ON CONFLICT("id") DO UPDATE SET "title"=excluded."title","description"=excluded."description","order"=excluded."order","sectionKey"=excluded."sectionKey","courseId"=excluded."courseId";`
    );
    for (const q of U.questions) {
      const qid = stableId(prefix, `uq:${U.id}:${q.order}`);
      sql.push(
        `INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('${qid}',NULL,'${U.id}','MULTIPLE_CHOICE','${esc(
          q.prompt
        )}','${esc(JSON.stringify(q.choices))}',${q.correctIndex},'${esc(q.explanation)}',1,${
          q.order
        }) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";`
      );
    }
  }

  return sql.join("\n") + "\n";
}

export function writeOutputs({ dirs = [], outlinePath, outline, sqlPath, sql, tsPath, tsBody }) {
  for (const d of dirs) mkdirSync(d, { recursive: true });
  if (outlinePath) writeFileSync(outlinePath, JSON.stringify(outline, null, 2));
  if (sqlPath) writeFileSync(sqlPath, sql);
  if (tsPath && tsBody) writeFileSync(tsPath, tsBody);
}

export function buildTsModule({
  fileComment,
  exportPrefix,
  courseIdConst,
  courseId,
  unitMeta,
  lessons,
  unitQuizzes,
  unitTotal,
  habitLine,
}) {
  const tsString = (s) => JSON.stringify(s);
  let ts = `${fileComment}
import type { LessonSeed } from "../curriculum";
import type { QuestionSeed } from "../assessments";

export const ${courseIdConst} = ${tsString(courseId)};

export const ${exportPrefix}_UNIT_META = ${JSON.stringify(unitMeta, null, 2)} as const;

export type ${exportPrefix}LessonRow = {
  id: string;
  title: string;
  description: string;
  objectives: string;
  content: string;
  order: number;
  durationMin: number;
  sectionKey: string;
  unit: number;
  unitTitle: string;
  questions: QuestionSeed[];
};

export const ${exportPrefix}_LESSONS: ${exportPrefix}LessonRow[] = [
`;
  for (const L of lessons) {
    ts += `  {\n`;
    ts += `    id: ${tsString(L.id)},\n`;
    ts += `    title: ${tsString(L.title)},\n`;
    ts += `    description: ${tsString(L.description)},\n`;
    ts += `    objectives: ${tsString(L.objectives)},\n`;
    ts += `    content: ${tsString(L.content)},\n`;
    ts += `    order: ${L.order},\n`;
    ts += `    durationMin: ${L.durationMin},\n`;
    ts += `    sectionKey: ${tsString(L.sectionKey)},\n`;
    ts += `    unit: ${L.unit},\n`;
    ts += `    unitTitle: ${tsString(L.unitTitle)},\n`;
    ts += `    questions: ${JSON.stringify(L.questions)},\n`;
    ts += `  },\n`;
  }
  ts += `];\n\n`;
  ts += `export type ${exportPrefix}QuizRow = {
  id: string;
  unit: number;
  title: string;
  description: string;
  order: number;
  sectionKey: string;
  questions: QuestionSeed[];
};

export const ${exportPrefix}_UNIT_QUIZZES: ${exportPrefix}QuizRow[] = ${JSON.stringify(
    unitQuizzes,
    null,
    2
  )};

export function ${camel(exportPrefix)}YearLessons(): LessonSeed[] {
  return ${exportPrefix}_LESSONS.map((L) => ({
    title: L.title,
    description: L.description,
    objectives: L.objectives,
    content: L.content,
    order: L.order,
    durationMin: L.durationMin,
    sectionKey: L.sectionKey,
    questions: L.questions,
    topicMeta: {
      title: L.title,
      focus: L.description,
      keyIdeas: L.objectives.split("\\n").map((s) => s.replace(/^•\\s*/, "").trim()).filter(Boolean),
      practice: [
        { q: "Central aim of this lesson?", a: L.description },
        { q: "What should a strong solution include?", a: ${tsString(habitLine)} },
      ],
    },
  }));
}

export function ${camel(exportPrefix)}UnitLabel(sectionKey: string): string | null {
  const m = /^unit-(\\d+)$/.exec(sectionKey);
  if (!m) return null;
  const n = Number(m[1]);
  const meta = ${exportPrefix}_UNIT_META.find((u) => u.n === n);
  if (!meta) return null;
  return \`Unit \${meta.n} of ${unitTotal} · \${meta.title}\`;
}
`;
  return ts;
}

function camel(prefix) {
  // G10_MATH -> g10Math
  return prefix
    .toLowerCase()
    .split("_")
    .map((p, i) => (i === 0 ? p : p.charAt(0).toUpperCase() + p.slice(1)))
    .join("");
}
