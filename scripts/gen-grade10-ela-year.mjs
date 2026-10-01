/**
 * Generate Grade 10 English Literature full-year content (10 units) + migration SQL.
 * Prosper Prep original teaching text — no external curriculum brands in student bodies.
 * Run: node scripts/gen-grade10-ela-year.mjs
 */
import { ela10IndepPractice } from "./lib/grade10-ela-practice.mjs";
import {
  stableId, pick, rotChoices, emitYearSql, writeOutputs, buildTsModule,
} from "./lib/grade10-sql.mjs";

const COURSE_ID = "cmuh9bxyp0875edanfk14k3jd";
const PREFIX = "ppg10e";
const UNIT_TOTAL = 10;

const OLD_STUBS = [
  "cmuh9bxyq0877edanpr8ddlvp","cmuh9bxyt087ledana9vqatez","cmuh9bxyw087zedano0ibhjwg",
  "cmuh9bxz0088dedan2pe9g6ka","cmuh9bxz4088redanyngzkb8b","cmuh9bxz70895edan99poeyic",
  "cmuh9bxzc089jedanp7wrzroz","cmuh9bxzf089xedana2krnd30","cmuh9bxzi08abedan5gw5l3xx",
  "cmuh9bxzl08apedan0x3mpp2z","cmuh9bxzo08b3edant6v7extl","cmuh9bxzs08bhedant1tphai4",
  "cmuh9bxzv08bvedan9ii1vro5","cmuh9bxzy08c9edanzobhyk7f","cmuh9by0208cnedanzz6if7ok",
  "cmuh9by0508d1edano6uz75hf","cmuh9by0808dfedanuear4b9x","cmuh9by0b08dtedan7phwfbce",
  "cmuh9by0f08e7edanzze5kb6u","cmuh9by0i08eledanso2owgbs","cmuh9by0l08ezedanmml3c9kr",
  "cmuh9by0p08fdedanpip45lz7","cmuh9by0s08fredanaqq0mgaw","cmuh9by0w08g5edandap0tb0n",
];
const OLD_QUIZZES = [
  "cmuh9by0z08gjedanb1qzroey","cmuh9by1508h5edanhaeoqeno","cmuh9by1a08hredan0s6jnk07",
  "cmuh9by1e08idedang01e1oo8","cmuh9by1j08izedan30dcef7t","cmuh9by1p08jledancs44ssii",
  "cmuh9by1u08k7edanyr48z5yn","cmuh9by1z08ktedanu7yjzab3",
];

const UNITS = [
  { n: 1, title: "Close Reading & Annotation", lessons: [
    ["Annotation Systems That Scale", "Build a repeatable annotation system for complex Grade 10 prose."],
    ["Reading for Claim vs Summary", "Distinguish what a text says from what a reader claims about it."],
    ["Diction and Connotation Tracking", "Trace how word choice builds tone across a passage."],
    ["Syntax as Meaning", "Explain how sentence length and structure create emphasis."],
    ["Narrative Point of View Effects", "Explain how POV shapes reliability and reader knowledge."],
    ["Irony Signals in Prose", "Identify verbal, situational, and dramatic irony with evidence."],
    ["From Annotation to Paragraph", "Turn marginal notes into a claim-evidence-warrant paragraph."],
    ["Close Reading Unit Synthesis", "Produce a polished close-reading paragraph from a fresh passage."],
  ]},
  { n: 2, title: "Short Fiction Analysis", lessons: [
    ["Plot vs Structure", "Separate what happens from how the author sequences revelation."],
    ["Character Motivation Evidence", "Argue motivation using dialogue, action, and omission."],
    ["Setting as Pressure", "Show how setting constrains choices rather than decorating scenes."],
    ["Conflict Types That Matter", "Classify conflict only when it clarifies theme."],
    ["Motif and Symbol Tracking", "Track recurring images and argue their contribution to theme."],
    ["Theme Statements That Work", "Write theme as an arguable insight, not a single-word topic."],
    ["Comparing Two Short Stories", "Synthesize craft similarities/differences across paired stories."],
    ["Short Fiction Mini-Essay", "Draft a multi-paragraph literary analysis with revised thesis."],
  ]},
  { n: 3, title: "Poetry Craft", lessons: [
    ["Imagery That Earns Its Keep", "Analyze concrete imagery and its conceptual payoff."],
    ["Sound Devices and Meaning", "Connect alliteration, assonance, and rhyme to effect — not checklisting."],
    ["Line Breaks and Stanza Logic", "Explain how breaks control pace and emphasis."],
    ["Speaker vs Poet", "Separate speaker persona from author biography claims."],
    ["Figurative Language Precision", "Interpret metaphor/simile/personification with disciplined warrants."],
    ["Form Awareness (Sonnet & Free Verse)", "Note how form constraints shape choices in public-domain poems."],
    ["Poetry Comparison Lens", "Compare two poems on one theme with craft-focused claims."],
    ["Poetry Unit Performance Task", "Write a close-reading of a poem with one polished analytical paragraph and one creative response note."],
  ]},
  { n: 4, title: "Drama & Performance Literacy", lessons: [
    ["Reading Stage Directions as Evidence", "Use stage directions as analytical evidence, not optional fluff."],
    ["Subtext in Dialogue", "Infer what characters mean beyond literal lines."],
    ["Dramatic Irony and Audience Knowledge", "Explain how audience knowledge creates tension."],
    ["Character Foils in Scenes", "Argue how a foil clarifies another character's values."],
    ["Monologue Analysis", "Track shifts in a monologue's purpose and tone."],
    ["Blocking and Meaning (Table Work)", "Propose blocking choices that support an interpretation."],
    ["Drama to Essay Move", "Convert scene analysis into a formal paragraph with citations to line numbers."],
    ["Drama Unit Synthesis", "Analyze a short scene for subtext, irony, and theme."],
  ]},
  { n: 5, title: "Argument & Rhetoric", lessons: [
    ["Claim, Evidence, Warrant", "Write analytical paragraphs with explicit warrants."],
    ["Thesis Precision Under Pressure", "Craft debatable, specific theses for timed and process writing."],
    ["Rhetorical Appeals in Speeches", "Identify ethos, pathos, and logos and evaluate sufficiency of evidence."],
    ["Counterclaim and Rebuttal", "Steel-man an opposing view before rebutting it."],
    ["Logical Fallacies to Avoid", "Name common fallacies and revise faulty reasoning."],
    ["Audience and Purpose Shifts", "Adjust tone and evidence for different audiences without losing honesty."],
    ["Op-Ed Structure Workshop", "Outline a civic op-ed with claim, evidence ladder, and call to think — not hype."],
    ["Argument Unit Timed Write", "Produce a timed argument essay with planning marks visible."],
  ]},
  { n: 6, title: "Research & Information Literacy", lessons: [
    ["Question to Working Thesis", "Move from inquiry question to a provisional research thesis."],
    ["Source Types and Credibility", "Assess purpose, expertise, and corroboration."],
    ["Note-Taking Without Plagiarism", "Paraphrase accurately; track citations from first note."],
    ["Quote Sandwiches and Synthesis", "Integrate sources without patchwork quoting."],
    ["MLA Habits for Integrity", "Practice in-text citation and Works Cited accuracy (format literacy)."],
    ["Bias and Framing in Media", "Evaluate framing, selection, and omission in informational texts."],
    ["Annotated Bibliography Sprint", "Build three annotated entries with usefulness notes."],
    ["Research Brief", "Write a short research brief that synthesizes at least two sources."],
  ]},
  { n: 7, title: "Extended Literary Study", lessons: [
    ["Choosing a Throughline", "Select a trackable theme/motif for a longer work study."],
    ["Chapter/Act Mapping", "Map structure across a longer arc without retelling everything."],
    ["Character Arc Evidence Log", "Keep an evidence log of change over time."],
    ["Author Craft Across Distance", "Track a craft move that recurs across chapters/acts."],
    ["Historical Context — Cautious Use", "Use context to illuminate, not replace, textual evidence."],
    ["Scholarly Conversation Intro", "Respond to a secondary claim about the work with your own evidence."],
    ["Literary Analysis Essay Draft", "Draft a multi-paragraph analysis with global revision notes."],
    ["Extended Study Revision Lab", "Revise argument structure before line-editing."],
  ]},
  { n: 8, title: "Grammar & Style for Writers", lessons: [
    ["Clauses for Clarity", "Use subordination and coordination to control emphasis."],
    ["Modifier Placement", "Repair dangling and misplaced modifiers."],
    ["Pronoun Precision", "Fix agreement and ambiguous reference."],
    ["Parallel Structure", "Build parallel lists and paired constructions."],
    ["Punctuation as Rhetoric", "Use dashes, colons, and semicolons deliberately."],
    ["Advanced Syntax and Style", "Vary sentence openings and lengths for rhetorical effect."],
    ["Concision Edits", "Cut empty intensifiers and nominalizations that hide the verb."],
    ["Style Unit Editing Pass", "Edit a paragraph for clarity, emphasis, and academic tone."],
  ]},
  { n: 9, title: "Media, Satire & Synthesis", lessons: [
    ["Satire and Irony Across Media", "Distinguish satire's target from its surface jokes."],
    ["Evaluating Multimodal Messages", "Analyze image + text arguments for implied claims."],
    ["Comparing Two Texts on One Issue", "Synthesize agreements/disagreements across paired texts."],
    ["Synthesizing Three+ Sources", "Integrate multiple sources without losing your thesis."],
    ["Credibility Under Pressure", "Stress-test a viral claim with sourcing habits."],
    ["Synthesis Essay Structure", "Organize a synthesis essay that puts sources in conversation."],
    ["Oral Presentation of a Close Reading", "Present a close-reading argument with textual slides/notes."],
    ["Media Unit Capstone Brief", "Deliver a synthesis brief with a clear recommendation for readers."],
  ]},
  { n: 10, title: "Timed Writing & Portfolio Capstone", lessons: [
    ["Timed Writing Strategies", "Plan, draft, and check under exam timing constraints."],
    ["ACT/SAT Reading Habits (School Practice)", "Practice passage mapping and evidence questions without brand hype."],
    ["ACT/SAT Writing Craft Habits", "Practice concise revision and precision under time."],
    ["Peer Review Protocols", "Give actionable feedback using evidence-based comments."],
    ["Global Then Local Revision", "Revise argument structure before line-editing."],
    ["Portfolio Curation", "Select pieces that show growth in analysis and craft."],
    ["Reflective Cover Letter", "Write a reflection that cites specific revisions as evidence of growth."],
    ["ELA Year Capstone Defense", "Defend one analytical claim orally/in writing with text evidence and a revision story."],
  ]},
];

const TEACH_BANK = {
  1: { big: "Close reading is disciplined noticing: marks must turn into claims with warrants.", why: "College courses assume you can annotate complex prose and explain craft, not only plot.", vocab: ["annotation", "warrant", "connotation", "point of view", "irony"], mistake: "Highlighting everything, or summarizing plot instead of analyzing craft." },
  2: { big: "Short fiction is a laboratory for structure, character pressure, and theme statements that argue.", why: "Analytical essays for high school and college start with short, teachable arcs.", vocab: ["structure", "motif", "theme statement", "foil", "omission"], mistake: "Writing a book report synopsis, or stating theme as a single abstract noun." },
  3: { big: "Poetry compresses meaning through image, sound, and line — analysis must show payoff.", why: "Precise reading of poetry trains attention that transfers to any dense text.", vocab: ["imagery", "speaker", "line break", "figurative language", "form"], mistake: "Checklisting devices without explaining effect on meaning." },
  4: { big: "Drama lives in speech + silence + staging. Subtext is evidence.", why: "Performance literacy sharpens inference — a core ACT/SAT and college skill.", vocab: ["subtext", "stage direction", "dramatic irony", "blocking", "monologue"], mistake: "Ignoring stage directions, or treating dialogue as transparent truth." },
  5: { big: "Argument is claim + evidence + warrant, tested against a fair counterclaim.", why: "Civic and academic writing both demand steel-manning before rebuttal.", vocab: ["thesis", "ethos", "pathos", "logos", "rebuttal", "fallacy"], mistake: "Stacking quotes without warrants, or attacking a straw-man version of the opposition." },
  6: { big: "Research integrity starts in the notes: paraphrase, attribute, synthesize.", why: "Plagiarism is usually a process failure before it is a morals speech.", vocab: ["working thesis", "corroboration", "paraphrase", "citation", "framing"], mistake: "Patchwriting, orphan quotations, or treating one source as sufficient." },
  7: { big: "Longer works reward throughlines tracked with an evidence log over time.", why: "Sustained analysis is the bridge from short responses to real literary essays.", vocab: ["throughline", "arc", "context caution", "secondary claim", "global revision"], mistake: "Retelling chapter-by-chapter, or using history to replace textual proof." },
  8: { big: "Grammar is rhetorical control: clauses and punctuation steer emphasis.", why: "Clear academic prose is a scholarship and workplace advantage.", vocab: ["subordination", "modifier", "parallelism", "semicolon", "concision"], mistake: "Memorizing rules without revising real sentences for clarity." },
  9: { big: "Synthesis puts sources in conversation; satire and media require target-awareness.", why: "Modern literacy includes multimodal and multi-source reasoning.", vocab: ["satire target", "synthesis", "framing", "corroboration", "implied claim"], mistake: "Summarizing sources in isolation, or laughing at satire without naming its target." },
  10: { big: "Timed writing and portfolios prove transferable skill under constraints.", why: "Exams and applications reward planning, evidence, and revision stories.", vocab: ["plan-draft-check", "evidence question", "peer protocol", "portfolio", "reflection"], mistake: "Starting to write with no plan, or reflecting with vague claims and no revision evidence." },
};

function buildLessonBody(unit, title, desc, orderInUnit, indep) {
  const bank = TEACH_BANK[unit.n];
  const unitLabel = `Unit ${unit.n} of ${UNIT_TOTAL} · ${unit.title}`;
  const v = bank.vocab;
  const parts = [];
  parts.push(`# ${title}`);
  parts.push("");
  parts.push(`*Grade 10 English Literature · ${unitLabel} · Lesson ${orderInUnit}*`);
  parts.push("");
  parts.push(`## Objective`);
  parts.push("");
  parts.push(`**I can** ${desc.charAt(0).toLowerCase()}${desc.slice(1)}`);
  parts.push("");
  parts.push(`**Teacher focus:** Students ground every claim in text evidence and a warrant. Prefer precise verbs over vague praise.`);
  parts.push("");
  parts.push(`## Warm-up (3–5 minutes)`);
  parts.push("");
  parts.push(`Read a short public-domain excerpt your teacher provides (or a familiar Prosper Prep practice passage). In 3 minutes, write one observation about craft — not plot.`);
  parts.push("");
  parts.push(`Share: Which habit from earlier in Unit ${unit.n} might help today's skill (“${title}”)?`);
  parts.push("");
  parts.push(`## Teach`);
  parts.push("");
  parts.push(`### Big idea`);
  parts.push("");
  parts.push(`${bank.big} Today's focus — **${title}** — lives inside **${unit.title}**.`);
  parts.push("");
  parts.push(`### Why it matters`);
  parts.push("");
  parts.push(`${bank.why} At Prosper Prep we train college-ready literacy: specific claims, sufficient evidence, and honest revision.`);
  parts.push("");
  parts.push(`### Language bank`);
  parts.push("");
  for (const term of v.slice(0, 4)) {
    parts.push(`- **${term}** — use it with a definition in your own sentence, tied to an example.`);
  }
  parts.push("");
  parts.push(`### Worked example A`);
  parts.push("");
  parts.push(`Imagine a short public-domain passage. We will practice “${title}.”`);
  parts.push("");
  parts.push(`**Step 1 — Notice.** Mark 2–3 moments worth arguing about (diction, structure, omission, or appeal).`);
  parts.push(`**Step 2 — Claim.** Write one debatable sentence (not a theme word alone).`);
  parts.push(`**Step 3 — Evidence.** Select a short quotation or concrete paraphrase.`);
  parts.push(`**Step 4 — Warrant.** Explain *how* the evidence supports the claim. Then check: did you slip into summary?`);
  parts.push("");
  parts.push(`**Sample narrative:** “I claimed the speaker's certainty cracks under pressure. My evidence was a charged verb and a sentence that withholds the object. The warrant: withholding keeps the reader uncertain, which mirrors the speaker's incomplete knowledge. I revised a vague theme noun into a full insight sentence.”`);
  parts.push("");
  parts.push(`### Worked example B`);
  parts.push("");
  parts.push(`Repeat the same skill on a different genre (poem ↔ prose ↔ speech). Keep the claim-evidence-warrant spine.`);
  parts.push("");
  parts.push(`### Common mistakes`);
  parts.push("");
  parts.push(`- **Watch for:** ${bank.mistake}`);
  parts.push(`- **Also watch for:** orphan quotations; moralizing instead of analyzing; confusing author and speaker.`);
  parts.push(`- **Repair move:** Underline your claim, box your evidence, and rewrite the warrant until a skeptic could follow it.`);
  parts.push("");
  parts.push(`### Connect to prior learning`);
  parts.push("");
  parts.push(unit.n <= 4
    ? `Literary reading skills (annotation, fiction, poetry, drama) feed argument and research writing later.`
    : unit.n <= 7
    ? `Argument and research habits make extended literary study more honest and less summary-heavy.`
    : `Style, media synthesis, and timed writing convert year-long craft into exam- and portfolio-ready performance.`);
  parts.push("");
  parts.push(`## Guided practice (we do)`);
  parts.push("");
  parts.push(`1. **Guided 1 —** As a class, annotate 8–12 lines and draft one claim + warrant for “${title}.”`);
  parts.push(`2. **Guided 2 —** Swap claims with a partner; steal one improvement without copying sentences wholesale.`);
  parts.push(`3. **Error hunt —** Diagnose a sample paragraph that only summarizes. Rewrite its last three sentences into analysis.`);
  parts.push("");
  parts.push(`## Independent practice`);
  parts.push("");
  parts.push(`Complete each item. Use complete sentences and text evidence where asked.`);
  parts.push("");
  indep.forEach((p, i) => parts.push(`${i + 1}. ${p.q}`));
  parts.push("");
  parts.push(`### Answer key (quality bar)`);
  parts.push("");
  parts.push(`*These keys describe strong responses — exact wording will vary.*`);
  parts.push("");
  indep.forEach((p, i) => parts.push(`${i + 1}. ${p.a}`));
  parts.push("");
  parts.push(`## Exit ticket`);
  parts.push("");
  parts.push(`1. One-sentence definition of today's skill in your own words.`);
  parts.push(`2. One mistake you will refuse to make on the next timed task.`);
  parts.push(`3. One text evidence habit you will keep from this lesson.`);
  parts.push("");
  parts.push(`## Wrap-up`);
  parts.push("");
  parts.push(`College-ready ELA is **claim + evidence + warrant**, revised. Next lesson continues Unit ${unit.n}: ${unit.title}.`);
  parts.push("");
  return parts.join("\n");
}

function buildExitQuestions(unit, title, desc) {
  const seed = `exit:${unit.n}:${title}`;
  const bank = TEACH_BANK[unit.n];
  const q1 = rotChoices(
    `Ground a specific claim about craft in evidence and a clear warrant.`,
    ["Retell the plot in order with no claim.", "Highlight every line and stop.", "Replace analysis with a moral slogan."],
    seed + "1"
  );
  const q2 = rotChoices(
    bank.vocab[0],
    [bank.vocab[Math.min(1, bank.vocab.length - 1)], "guessing the author's biography", "listing devices with no effect"],
    seed + "2"
  );
  const q3 = rotChoices(
    `Revise summary sentences into warrant sentences that explain how evidence supports the claim.`,
    ["Add more plot detail until the paragraph is longer.", "Delete the quotation so the claim stands alone.", "Replace the thesis with a single theme word."],
    seed + "3"
  );
  return [
    { prompt: `Best approach for “${title}” (${desc.slice(0, 70)}…)?`, choices: q1.choices, correctIndex: q1.correctIndex, explanation: "Analysis requires claim, evidence, and warrant.", order: 1 },
    { prompt: `Which term is most central to Unit ${unit.n} work on “${title}”?`, choices: q2.choices, correctIndex: q2.correctIndex, explanation: `Unit ${unit.n} emphasizes precise use of “${bank.vocab[0]}.”`, order: 2 },
    { prompt: `A draft only summarizes. What is the best next move?`, choices: q3.choices, correctIndex: q3.correctIndex, explanation: "Warrants convert evidence into argument.", order: 3 },
  ];
}

function buildUnitQuiz(unit, lessonTitles) {
  const qs = [];
  for (let i = 0; i < 10; i++) {
    const title = lessonTitles[i % lessonTitles.length];
    const seed = `uquiz:${unit.n}:${i}:${title}`;
    const correct = pick([
      `Use “${title}” to produce a claim grounded in evidence with an explicit warrant.`,
      `Prefer craft analysis over plot summary when writing about “${title}.”`,
      `Revise vague theme words into full insight sentences.`,
      `Steel-man opposing views before rebutting when argument is involved.`,
    ], seed + "c");
    const { choices, correctIndex } = rotChoices(correct, [
      "Summarize the entire text instead of arguing.",
      "Stack quotations without explanation.",
      "Treat annotation marks as the final product.",
    ], seed);
    qs.push({
      prompt: `Unit ${unit.n} Check (${unit.title}) item ${i + 1}: Thinking about “${title},” which statement is most literarily responsible?`,
      choices, correctIndex,
      explanation: `Unit ${unit.n} emphasizes evidence-based analysis for ${unit.title.toLowerCase()}.`,
      order: i + 1,
    });
  }
  return qs;
}

const allLessons = [];
let globalOrder = 0;
for (const unit of UNITS) {
  unit.lessons.forEach(([title, desc], idx) => {
    globalOrder += 1;
    const id = stableId(PREFIX, `u${String(unit.n).padStart(2, "0")}-l${String(idx + 1).padStart(2, "0")}-${title}`);
    const indep = ela10IndepPractice(unit.n, title, `${unit.n}:${title}`);
    allLessons.push({
      id, unit: unit.n, unitTitle: unit.title, title, description: desc,
      objectives: [`• ${desc}`, `• Support claims with textual evidence and warrants.`, `• Revise summary into analysis.`].join("\n"),
      content: buildLessonBody(unit, title, desc, idx + 1, indep),
      order: globalOrder, durationMin: 45, sectionKey: `unit-${unit.n}`, videoUrl: null,
      questions: buildExitQuestions(unit, title, desc),
    });
  });
}

const unitQuizzes = UNITS.map((unit) => ({
  id: stableId(PREFIX, `u${String(unit.n).padStart(2, "0")}-quiz`),
  unit: unit.n,
  title: `Unit ${unit.n} Check · ${unit.title}`,
  description: `Unit check for ${unit.title} (Grade 10 English Literature). Unlocks after all lessons in Unit ${unit.n} are complete. Unit checks = 60% of the course grade (lesson checks = 40%).`,
  order: unit.n, sectionKey: `unit-${unit.n}`,
  questions: buildUnitQuiz(unit, unit.lessons.map((l) => l[0])),
}));

const unitMeta = UNITS.map((u) => ({ n: u.n, title: u.title, sectionKey: `unit-${u.n}`, lessonCount: u.lessons.length }));

const sql = emitYearSql({
  headerLines: [
    "-- Grade 10 English Literature full-year path (10 units). Generated by scripts/gen-grade10-ela-year.mjs",
    "-- Safe for production D1: does NOT wipe users/enrollments. Do NOT run db:setup.",
    "-- Retires old 24 ELA showcase stubs + old section quizzes; INSERTs year lessons + unit checks.",
  ],
  courseId: COURSE_ID,
  courseTitle: "English Literature · Grade 10",
  courseDescription: "Full-year Grade 10 English Literature at Prosper Preparatory: 10 units (Close reading through Timed writing & portfolio), original Prosper Prep lessons with practice and unit checks. Lesson checks = 40%; unit checks = 60%. Latest attempt counts. College-prep literacy and composition.",
  oldStubs: OLD_STUBS, oldQuizzes: OLD_QUIZZES, lessons: allLessons, unitQuizzes, prefix: PREFIX,
});

const tsBody = buildTsModule({
  fileComment: `/**\n * Auto-generated Grade 10 English Literature year path (Units 1–${UNIT_TOTAL}).\n * Regenerate: node scripts/gen-grade10-ela-year.mjs\n */`,
  exportPrefix: "G10_ELA", courseIdConst: "G10_ELA_COURSE_ID", courseId: COURSE_ID,
  unitMeta, lessons: allLessons, unitQuizzes, unitTotal: UNIT_TOTAL,
  habitLine: "A specific claim, textual evidence, and an explicit warrant.",
});

writeOutputs({
  dirs: ["prisma/grade10-ela", "content/grade10/ela", "migrations"],
  outlinePath: "content/grade10/ela/outline.json",
  outline: { courseId: COURSE_ID, units: unitMeta, lessonCount: allLessons.length, quizCount: unitQuizzes.length, generatedAt: "2026-10-01" },
  sqlPath: "migrations/0027_grade10_ela_year.sql", sql,
  tsPath: "prisma/grade10-ela/year.ts", tsBody,
});

console.log(`G10 ELA: ${allLessons.length} lessons, ${unitQuizzes.length} unit quizzes → migrations/0027_grade10_ela_year.sql`);
