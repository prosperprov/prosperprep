/**
 * Build hand-authored teach rewrites for Grade 6 ELA, Science, World History.
 * Sources:
 *   scripts/data/grade6-ela-hand-teach.json
 *   scripts/data/grade6-science-hand-teach.json
 *   scripts/data/grade6-history-hand-teach.json
 * IDs: scripts/data/_g6_{ela,science,history}_ids.json
 * ELA independent practice: scripts/lib/grade6-ela-practice.mjs
 * Science/History independent: pack.independent
 *
 * Run: node scripts/build-esh-hand-rewrites.mjs
 * Do NOT Mad-Lib overwrite via gen-grade6-*-year.mjs without hand merge.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { elaIndepPractice } from "./lib/grade6-ela-practice.mjs";

const COURSES = {
  ela: {
    id: "cmuh9bwsc03l8edangiqeczno",
    label: "English Language Arts",
    unitCount: 16,
    mig: "migrations/0017_grade6_ela_teach_rewrite.sql",
    hand: "scripts/data/grade6-ela-hand-teach.json",
    ids: "scripts/data/_g6_ela_ids.json",
    outline: "content/grade6/ela/outline.json",
    subjectLine: "Grade 6 English Language Arts",
  },
  science: {
    id: "cmuh9bwv803vyedanwfbbyd4j",
    label: "Science",
    unitCount: 10,
    mig: "migrations/0018_grade6_science_teach_rewrite.sql",
    hand: "scripts/data/grade6-science-hand-teach.json",
    ids: "scripts/data/_g6_science_ids.json",
    outline: "content/grade6/science/outline.json",
    subjectLine: "Grade 6 Science",
  },
  history: {
    id: "cmuh9bwwo041bedan1gymikl1",
    label: "World History",
    unitCount: 9,
    mig: "migrations/0019_grade6_history_teach_rewrite.sql",
    hand: "scripts/data/grade6-history-hand-teach.json",
    ids: "scripts/data/_g6_history_ids.json",
    outline: "content/grade6/history/outline.json",
    subjectLine: "Grade 6 World History",
  },
};

function escSql(s) {
  return String(s).replace(/'/g, "''");
}

function formatIndepFromBank(unitMeta, title) {
  const items = elaIndepPractice(unitMeta, title, `u${unitMeta.n}:${title}`);
  let md = `## Independent practice\n\nComplete each item. Show your thinking.\n\n`;
  items.forEach((it, i) => {
    md += `${i + 1}. ${it.q}\n`;
  });
  md += `\n### Answer key (try first)\n\n`;
  items.forEach((it, i) => {
    md += `${i + 1}. ${it.a}\n`;
  });
  return md;
}

function formatIndepFromPack(pack) {
  const items = pack.independent || [];
  let md = `## Independent practice\n\nComplete each item. Show your thinking.\n\n`;
  items.forEach((it, i) => {
    md += `${i + 1}. ${it.q}\n`;
  });
  md += `\n### Answer key (try first)\n\n`;
  items.forEach((it, i) => {
    md += `${i + 1}. ${it.a}\n`;
  });
  return md;
}

const forbidden = [/khan/i, /ckla/i, /ckhg/i, /cksci/i, /\bgay\b/i, /\btrans\b/i, /lgbt/i, /lesbian/i, /bisexual/i, /transgender/i];

const summary = {};

for (const [subj, cfg] of Object.entries(COURSES)) {
  if (!existsSync(cfg.hand) || !existsSync(cfg.ids)) {
    throw new Error(`Missing hand or ids for ${subj}`);
  }
  const raw = JSON.parse(readFileSync(cfg.hand, "utf8"));
  const ids = JSON.parse(readFileSync(cfg.ids, "utf8"));
  const outline = JSON.parse(readFileSync(cfg.outline, "utf8"));
  const unitTitle = Object.fromEntries(outline.units.map((u) => [u.n, u.title]));
  const unitKind = Object.fromEntries(outline.units.map((u) => [u.n, u.kind || null]));

  let sql = `-- Grade 6 ${cfg.label}: hand-authored Teach / Warm-up / Guided / Exit + skill Check MC.
-- Keeps existing lesson IDs and titles. Independent practice from skill banks (ELA) or hand packs (Science/History).
-- UPDATE content + objectives + description + Question rows. Preserve videoUrl.
-- Do NOT run db:setup. Safe for production D1 (prosperprep-school).
-- Source: ${cfg.hand} — do not Mad-Lib overwrite via gen-grade6-${subj}-year.mjs without hand merge.

`;

  let rewritten = 0;
  for (let unitN = 1; unitN <= cfg.unitCount; unitN++) {
    const sk = `unit-${unitN}`;
    const lessonIds = ids[sk] || [];
    lessonIds.forEach((meta, idx) => {
      const key = `${unitN}|${meta.title}`;
      const pack = raw[key];
      if (!pack) throw new Error(`Missing hand pack for ${subj} ${key}`);
      const orderInUnit = idx + 1;
      const metaTitle = unitTitle[unitN] || `Unit ${unitN}`;
      const header = `# ${meta.title}\n\n*${cfg.subjectLine} · Unit ${unitN} of ${cfg.unitCount} · ${metaTitle} · Lesson ${orderInUnit}*\n\n`;
      let independent;
      if (subj === "ela") {
        const unitMeta = { n: unitN, title: metaTitle, kind: unitKind[unitN] || "reading" };
        independent = formatIndepFromBank(unitMeta, meta.title);
      } else {
        independent = formatIndepFromPack(pack);
      }
      const content = `${header}${pack.teach_core.trim()}\n\n${independent.trim()}\n\n${pack.exit.trim()}\n`;
      for (const re of forbidden) {
        if (re.test(content)) console.warn("WARN forbidden", subj, re, meta.title);
      }
      sql += `-- Unit ${unitN} L${orderInUnit}. ${meta.title} (${meta.id})\n`;
      sql += `UPDATE "Lesson" SET "content" = '${escSql(content)}', "objectives" = '${escSql(pack.objectives)}', "description" = '${escSql(pack.description)}' WHERE "id" = '${meta.id}' AND "courseId" = '${cfg.id}';\n\n`;

      const qids = meta.questionIds || [];
      (pack.questions || []).forEach((q, qi) => {
        const qid = qids[qi];
        if (!qid) throw new Error(`Missing question id for ${subj} ${meta.title} Q${qi + 1}`);
        const choicesJson = JSON.stringify(q.choices);
        sql += `INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('${qid}','${meta.id}',NULL,'MULTIPLE_CHOICE','${escSql(q.prompt)}','${escSql(choicesJson)}',${q.correctIndex},'${escSql(q.explanation)}',1,${qi + 1}) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";\n`;
      });
      sql += `\n`;
      rewritten++;
    });
  }

  mkdirSync("migrations", { recursive: true });
  writeFileSync(cfg.mig, sql);
  summary[subj] = { rewritten, sqlBytes: Buffer.byteLength(sql), mig: cfg.mig };
}

mkdirSync("docs/curriculum", { recursive: true });
writeFileSync(
  "docs/curriculum/grade-6-ela-science-history-teach-rewrite.md",
  `# Grade 6 ELA + Science + World History teach rewrite

**Migrations 0017–0019** · Hand-authored Warm-up / Teach / Guided / Exit / skill Check MC.

| Subject | Lessons | Migration |
|---------|---------|-----------|
| ELA | ${summary.ela.rewritten} | 0017 |
| Science | ${summary.science.rewritten} | 0018 |
| World History | ${summary.history.rewritten} | 0019 |

## Pattern
Same as Math Units 1–11 (migrations 0014 / 0016): keep IDs/titles; replace Mad-Libs \`buildLessonBody()\` mush with skill-specific pedagogy.
Independent practice: ELA from \`grade6-ela-practice.mjs\`; Science/History from hand packs.

## Quality bar
\`docs/curriculum/grade-6-ratios-sample-what-is-a-ratio.md\`
Prosper Prep voice only — no Khan/CKLA/CKHG attribution in student text; no LGBTQ themes; original prose.

## Protect
Generators \`gen-grade6-{ela,science,history}-year.mjs\` merge hand JSON when present — do not Mad-Lib overwrite.
`
);

console.log(JSON.stringify(summary, null, 2));
