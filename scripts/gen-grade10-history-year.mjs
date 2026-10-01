/**
 * Generate Grade 10 U.S. & World History full-year content (10 units) + migration SQL.
 * Run: node scripts/gen-grade10-history-year.mjs
 */
import { hist10IndepPractice } from "./lib/grade10-history-practice.mjs";
import { stableId, pick, rotChoices, emitYearSql, writeOutputs, buildTsModule } from "./lib/grade10-sql.mjs";

const COURSE_ID = "cmuh9by700950edanckmkcnvx";
const PREFIX = "ppg10h";
const UNIT_TOTAL = 10;
const OLD_STUBS = [
  "cmuh9by710952edany6agai01","cmuh9by74095gedan0ou8b3ux","cmuh9by78095uedaniii21bdi",
  "cmuh9by7b0968edan93rcpdh1","cmuh9by7g096medansl2t1kp4","cmuh9by7j0970edanr3c3s945",
  "cmuh9by7m097eedan0n3w7mt7","cmuh9by7q097sedanrzqa6hky","cmuh9by7u0986edanp4zr4mof",
];
const OLD_QUIZZES = ["cmuh9by7x098kedantwfn9r9d","cmuh9by820996edanw05c6iwf","cmuh9by88099sedan0sfbukny"];

const UNITS = [
  { n: 1, title: "Historical Thinking & Foundations", lessons: [
    ["Sourcing Documents", "Source who/when/purpose before trusting a claim."],
    ["Contextualization", "Place events in time and place without presentism."],
    ["Corroboration Across Sources", "Compare accounts to strengthen or weaken claims."],
    ["Continuity and Change", "Track what persists and what shifts across periods."],
    ["Cause, Effect & Contingency", "Argue multi-causal explanations; avoid single-cause myths."],
    ["Maps as Arguments", "Read maps as claims about space, power, and movement."],
    ["Timeline Construction", "Build analytical timelines that group turning points."],
    ["Historical Thinking Synthesis", "Write a short sourced paragraph using all four habits."],
  ]},
  { n: 2, title: "Revolutions & New Political Orders", lessons: [
    ["Atlantic World Connections", "Explain exchange networks that set up revolutionary eras."],
    ["Enlightenment Ideas in Politics", "Trace key political ideas into revolutionary documents."],
    ["American Revolution in Global Context", "Place the American Revolution among wider struggles."],
    ["Founding Documents Deep Dive", "Analyze purpose and structure of founding texts as historical sources."],
    ["French Revolution Turning Points", "Sequence major phases; connect causes to consequences."],
    ["Latin American Independence Movements", "Compare independence leaders' goals and constraints."],
    ["Revolutions Compared", "Synthesize similarities/differences across Atlantic revolutions."],
    ["Revolutions Unit Essay Prep", "Outline a comparative essay with document evidence."],
  ]},
  { n: 3, title: "Industrialization & Imperialism", lessons: [
    ["Industrial Revolution Causes", "Explain technological and economic shifts that industrialized production."],
    ["Factories, Cities, and Labor", "Analyze urban growth and labor conditions with evidence."],
    ["Ideas About Markets and Reform", "Compare competing ideas about industrial society."],
    ["Nationalism in the 1800s", "Define nationalism's political force without romanticizing it."],
    ["New Imperialism Motives", "Analyze economic, strategic, and ideological motives for empire."],
    ["Imperial Rule and Resistance", "Examine colonized peoples' strategies of resistance and adaptation."],
    ["Case Study: Partition Maps", "Read partition/colonial maps as power documents."],
    ["Industrial & Imperial Synthesis", "Connect industrial capacity to imperial reach with sourced claims."],
  ]},
  { n: 4, title: "World Wars & Global Upheaval", lessons: [
    ["Road to World War I", "Explain alliance systems, militarism, and spark events."],
    ["Total War Home Fronts", "Analyze how total war reshaped economies and societies."],
    ["Treaty Settlements and Unfinished Business", "Evaluate postwar settlements' intended and unintended effects."],
    ["Interwar Crisis", "Connect depression, extremism, and weak institutions."],
    ["World War II Causes and Theaters", "Map major theaters; track turning points carefully."],
    ["Documenting Mass Atrocity", "Study documented mass atrocity with moral seriousness and historical precision."],
    ["War's End and New Power Balance", "Explain how WWII reshaped global power."],
    ["World Wars Unit Document Seminar", "Corroborate claims across wartime documents and maps."],
  ]},
  { n: 5, title: "Cold War & Decolonization", lessons: [
    ["Origins of the Cold War", "Explain ideological and geopolitical rivalry after 1945."],
    ["Alliances, Proxies, and Nuclear Fear", "Analyze containment, alliances, and deterrence logic."],
    ["Decolonization Waves", "Trace independence movements across Asia and Africa."],
    ["Non-Aligned Choices", "Explain why some states sought paths beyond bipolar camps."],
    ["Cold War Crises Case Studies", "Compare two crises using sourcing and contingency."],
    ["Domestic Effects of Global Rivalry", "Connect foreign policy to domestic politics in major powers."],
    ["End of the Cold War", "Evaluate multiple causes for the Cold War's end."],
    ["Cold War Unit Synthesis", "Argue a thesis on rivalry and decolonization with documents."],
  ]},
  { n: 6, title: "U.S. Turning Points in a Global Age", lessons: [
    ["Reconstruction Legacies (Bridge)", "Connect Reconstruction's unfinished work to later U.S. conflicts."],
    ["Industrial America and Progressivism", "Analyze reform responses to industrial problems."],
    ["World Wars and the American Home Front", "Examine mobilization, rights debates, and social change."],
    ["Civil Rights Movements", "Sequence strategies and landmark changes with primary evidence."],
    ["Late-20th-Century Economy and Society", "Track economic shifts and social debates with data literacy."],
    ["U.S. Foreign Policy After 1945", "Connect U.S. actions abroad to Cold War and post-Cold War aims."],
    ["Constitutional Literacy in Conflict", "Analyze how constitutional arguments appear in major disputes."],
    ["U.S. Unit DBQ Skills", "Practice document-based paragraphing on a U.S. turning point."],
  ]},
  { n: 7, title: "Global Economy & Contemporary Issues", lessons: [
    ["Globalization Networks", "Map trade, migration, and information flows."],
    ["Technology and Daily Life", "Analyze technological change as a historical force."],
    ["Human Rights Frameworks", "Trace post-1945 human rights language and its limits."],
    ["Environmental History Intro", "Connect resource use and environmental consequences historically."],
    ["Conflict and Peacebuilding After 1990", "Examine regional conflicts with multi-causal analysis."],
    ["Media Literacy for Current Events", "Source modern claims with the same rigor as older documents."],
    ["Comparative Government Snapshots", "Compare institutional designs without propaganda tone."],
    ["Contemporary Issues Brief", "Write a sourced brief on one global issue with competing explanations."],
  ]},
  { n: 8, title: "Civics, Law & Civic Reasoning", lessons: [
    ["Rule of Law and Due Process", "Define rule of law; connect to fair procedures."],
    ["Rights and Responsibilities", "Balance rights claims with civic responsibilities using examples."],
    ["Federalism and Separation of Powers", "Explain how power is divided and checked."],
    ["How a Bill Becomes Reality Checks", "Trace lawmaking with veto points and incentives."],
    ["Courts and Landmark Reasoning", "Read judicial reasoning for claims and precedents (intro)."],
    ["Local Government and Civic Action", "Identify local levers of change with evidence."],
    ["Contracts and Everyday Law Literacy", "Introduce contracts/consent ideas at a practical high-school level."],
    ["Civics Unit Performance Task", "Argue a civic recommendation with constitutional and historical evidence."],
  ]},
  { n: 9, title: "Texas & Regional Connections", lessons: [
    ["Texas Geography as One Factor", "Use geography as one factor among many — avoid geographic determinism."],
    ["Borderlands and Cultural Exchange", "Analyze borderland exchange with primary glimpses."],
    ["Texas in National Turning Points", "Connect Texas events to U.S. and world developments."],
    ["Energy, Land, and Economy", "Track resource economies with continuity/change."],
    ["Migration Stories", "Use migration narratives as historical evidence with sourcing care."],
    ["State Institutions Overview", "Map basic Texas government structures for civic literacy."],
    ["Regional Case Study Mini-Research", "Build a short sourced case study on a Texas/regional topic."],
    ["Texas Unit Synthesis", "Write a continuity/change paragraph linking local to global."],
  ]},
  { n: 10, title: "Research Capstone & Historical Argument", lessons: [
    ["Choosing a Researchable Question", "Craft a historical question that evidence can actually answer."],
    ["Archive Habits (Digital & Print)", "Find and source credible historical materials."],
    ["Note Cards to Outline", "Organize evidence under claims before drafting."],
    ["Writing with Documents", "Embed documents with sourcing and warrants."],
    ["Counterevidence and Revision", "Seek disconfirming evidence; revise the thesis honestly."],
    ["Citation Integrity", "Practice honest attribution habits for history writing."],
    ["Capstone Essay Draft", "Draft a multi-paragraph historical argument."],
    ["Year Defense: Thesis + Documents", "Defend a thesis with sourced documents and limitations."],
  ]},
];

const TEACH_BANK = {
  1: {"big":"History is an argument about the past grounded in sourced evidence.","why":"College history and civic life both require sourcing before sharing.","vocab":["sourcing","context","corroboration","contingency"],"mistake":"Treating one narrative as the only voice, or judging the past with zero context."},
  2: {"big":"Revolutions remake political orders — with unintended consequences.","why":"Founding documents and revolutionary waves shape civic vocabulary worldwide.","vocab":["sovereignty","rights","revolution","constitution"],"mistake":"Single-cause myths, or treating all revolutions as identical."},
  3: {"big":"Industrial power and imperial power grew together — and met resistance.","why":"Modern inequality and borders still carry industrial/imperial legacies.","vocab":["industrialization","nationalism","imperialism","resistance"],"mistake":"Celebrating technology while erasing labor costs, or erasing colonized agency."},
  4: {"big":"Total war transformed states and societies; atrocity requires precise evidence.","why":"World wars remade the map and moral vocabulary of the 20th century.","vocab":["alliance","total war","armistice","theater"],"mistake":"Reducing world war to a game timeline, or denying documented atrocity."},
  5: {"big":"Cold War rivalry and decolonization remade sovereignty after 1945.","why":"Many current borders and alliances come from this era.","vocab":["containment","proxy","decolonization","deterrence"],"mistake":"Bipolar cartoons that erase local actors, or inevitability narratives."},
  6: {"big":"U.S. turning points sit inside global currents — not in isolation.","why":"American civic literacy needs domestic and foreign threads together.","vocab":["Reconstruction","civil rights","home front","DBQ"],"mistake":"Mythic progress arcs with no conflict, or ignoring primary voices."},
  7: {"big":"Contemporary issues inherit older structures of power, technology, and law.","why":"Citizens must source modern claims like historians source documents.","vocab":["globalization","human rights","tradeoff","institution"],"mistake":"Hot takes without evidence, or treating globalization as only good or only bad."},
  8: {"big":"Civic reasoning applies historical habits to law, rights, and institutions.","why":"Independence requires knowing how power is checked and how laws actually move.","vocab":["rule of law","federalism","due process","precedent"],"mistake":"Confusing viral slogans with constitutional text, or ignoring local government."},
  9: {"big":"Texas and regional history connect local land/economy stories to national and world currents.","why":"Students should see their place without provincial blindness.","vocab":["borderlands","migration","resources","continuity"],"mistake":"Geographic determinism, or isolating Texas from wider U.S./world history."},
  10: {"big":"A historical argument is a thesis tested against documents — including counterevidence.","why":"Capstone writing is the skill colleges actually grade.","vocab":["researchable question","warrant","counterevidence","citation"],"mistake":"Picking quotes that only confirm a hunch, or hiding uncertainty."},
};

function buildLessonBody(unit, title, desc, orderInUnit, indep) {
  const bank = TEACH_BANK[unit.n];
  const unitLabel = `Unit ${unit.n} of ${UNIT_TOTAL} · ${unit.title}`;
  const parts = [`# ${title}`, "", `*Grade 10 U.S. & World History · ${unitLabel} · Lesson ${orderInUnit}*`, "",
    "## Objective", "", `**I can** ${desc.charAt(0).toLowerCase()}${desc.slice(1)}`, "",
    "**Teacher focus:** Students source documents and argue with evidence. Prefer multi-causal explanations.", "",
    "## Warm-up (3–5 minutes)", "",
    "Examine a short primary-source snippet (teacher-provided). Who produced it, when, and for what purpose? Write one sentence.", "",
    `Share: Which historical thinking habit from Unit ${unit.n} helps with “${title}”?`, "",
    "## Teach", "", "### Big idea", "",
    `${bank.big} Today's focus — **${title}** — develops that habit inside **${unit.title}**.`, "",
    "### Why it matters", "",
    `${bank.why} At Prosper Prep we train civic-ready historical reasoning: source first, argue carefully, revise when evidence conflicts.`, "",
    "### Language bank", "",
    ...bank.vocab.slice(0,4).map(v => `- **${v}** — define it; use it in a sourced sentence.`), "",
    "### Worked example A", "",
    `**Step 1 — Source** a document related to “${title}.”`,
    "**Step 2 — Claim** one historical argument (not a slogan).",
    "**Step 3 — Evidence** with a short quotation or concrete paraphrase.",
    "**Step 4 — Limitation** — what can't this source prove?",
    `**Step 5 — Check** against: ${bank.mistake}`, "",
    '**Sample narrative:** “I sourced the author and audience, claimed a multi-causal explanation, corroborated with a second document, and noted what remains uncertain.”', "",
    "### Worked example B", "",
    "Switch genres (map, letter, treaty). Keep sourcing + claim + limitation.", "",
    "### Common mistakes", "",
    `- **Watch for:** ${bank.mistake}`,
    "- **Also watch for:** presentism; single-cause myths; quoting without context.",
    "- **Repair move:** Re-source, then rewrite the claim to match what the documents can actually support.", "",
    "### Connect to prior learning", "",
    unit.n <= 3 ? "Historical thinking tools make revolutions and industrial/imperial change intelligible." :
    unit.n <= 6 ? "World wars, Cold War, and U.S. turning points require corroboration across global and domestic scales." :
    "Civics, regional history, and research capstones convert year-long habits into citizen-ready argument.", "",
    "## Guided practice (we do)", "",
    "1. Source a shared document as a class; write one claim + one limitation.",
    "2. Corroborate with a second source; revise the claim.",
    "3. Error hunt: repair a single-cause paragraph.", "",
    "## Independent practice", "",
    "Complete each item with sourcing and evidence.", "",
  ];
  indep.forEach((p, i) => parts.push(`${i + 1}. ${p.q}`));
  parts.push("", "### Answer key (quality bar)", "");
  indep.forEach((p, i) => parts.push(`${i + 1}. ${p.a}`));
  parts.push("", "## Exit ticket", "",
    "1. One-sentence claim from today's lesson with a source type named.",
    "2. One limitation of your best piece of evidence.",
    "3. One connection to an earlier unit.", "",
    "## Wrap-up", "",
    `History done well is **sourced argument**. Next lesson continues Unit ${unit.n}: ${unit.title}.`, "");
  return parts.join("\n");
}

function buildExitQuestions(unit, title, desc) {
  const seed = `exit:${unit.n}:${title}`;
  const bank = TEACH_BANK[unit.n];
  const q1 = rotChoices(`Source the document, then make a claim with evidence and a limitation.`, ["Accept the first narrative you find online.", "Judge the past with zero context.", "Use a single cause for every event."], seed+"1");
  const q2 = rotChoices(bank.vocab[0], [bank.vocab[1], "guesswork", "slogan-only civics"], seed+"2");
  const q3 = rotChoices(`Seek a second source that might complicate your claim, then revise.`, ["Delete conflicting evidence.", "Make the claim louder.", "Replace documents with opinions."], seed+"3");
  return [
    { prompt: `Best historical approach for “${title}”?`, choices: q1.choices, correctIndex: q1.correctIndex, explanation: "Sourcing + evidence + limitation.", order: 1 },
    { prompt: `Central vocabulary for Unit ${unit.n} work on this lesson?`, choices: q2.choices, correctIndex: q2.correctIndex, explanation: `Emphasizes “${bank.vocab[0]}.”`, order: 2 },
    { prompt: `Your first claim is too neat. Best next move?`, choices: q3.choices, correctIndex: q3.correctIndex, explanation: "Corroboration and revision.", order: 3 },
  ];
}

function buildUnitQuiz(unit, lessonTitles) {
  return Array.from({ length: 10 }, (_, i) => {
    const title = lessonTitles[i % lessonTitles.length];
    const seed = `uquiz:${unit.n}:${i}:${title}`;
    const correct = pick([`Source first, then argue about “${title}” with evidence.`, `Corroborate claims about “${title}” across documents.`, `Reject single-cause myths related to “${title}.”`, `Name a limitation of the best source on “${title}.”`], seed+"c");
    const { choices, correctIndex } = rotChoices(correct, ["Treat one textbook sentence as sufficient proof.", "Ignore author and audience.", "Replace evidence with slogans."], seed);
    return { prompt: `Unit ${unit.n} Check (${unit.title}) item ${i+1}: Thinking about “${title},” which is most historically responsible?`, choices, correctIndex, explanation: `Unit ${unit.n} emphasizes sourced argument.`, order: i+1 };
  });
}

const allLessons = [];
let globalOrder = 0;
for (const unit of UNITS) {
  unit.lessons.forEach(([title, desc], idx) => {
    globalOrder += 1;
    const id = stableId(PREFIX, `u${String(unit.n).padStart(2,"0")}-l${String(idx+1).padStart(2,"0")}-${title}`);
    const indep = hist10IndepPractice(unit.n, title, `${unit.n}:${title}`);
    allLessons.push({
      id, unit: unit.n, unitTitle: unit.title, title, description: desc,
      objectives: [`• ${desc}`, `• Source documents before claiming.`, `• Argue with evidence and name limitations.`].join("\n"),
      content: buildLessonBody(unit, title, desc, idx+1, indep),
      order: globalOrder, durationMin: 45, sectionKey: `unit-${unit.n}`, videoUrl: null,
      questions: buildExitQuestions(unit, title, desc),
    });
  });
}
const unitQuizzes = UNITS.map((unit) => ({
  id: stableId(PREFIX, `u${String(unit.n).padStart(2,"0")}-quiz`),
  unit: unit.n, title: `Unit ${unit.n} Check · ${unit.title}`,
  description: `Unit check for ${unit.title} (Grade 10 U.S. & World History). Unlocks after all lessons in Unit ${unit.n} are complete. Unit checks = 60% of the course grade (lesson checks = 40%).`,
  order: unit.n, sectionKey: `unit-${unit.n}`, questions: buildUnitQuiz(unit, unit.lessons.map(l => l[0])),
}));
const unitMeta = UNITS.map((u) => ({ n: u.n, title: u.title, sectionKey: `unit-${u.n}`, lessonCount: u.lessons.length }));
const sql = emitYearSql({
  headerLines: [
    "-- Grade 10 U.S. & World History full-year path (10 units). Generated by scripts/gen-grade10-history-year.mjs",
    "-- Safe for production D1: does NOT wipe users/enrollments. Do NOT run db:setup.",
    "-- Retires old 9 history stubs + old section quizzes; INSERTs year lessons + unit checks.",
  ],
  courseId: COURSE_ID, courseTitle: "U.S. & World History · Grade 10",
  courseDescription: "Full-year Grade 10 U.S. & World History at Prosper Preparatory: 10 units (Historical thinking through Research capstone), original Prosper Prep lessons with practice and unit checks. Lesson checks = 40%; unit checks = 60%. Latest attempt counts. College-prep historical and civic reasoning.",
  oldStubs: OLD_STUBS, oldQuizzes: OLD_QUIZZES, lessons: allLessons, unitQuizzes, prefix: PREFIX,
});
const tsBody = buildTsModule({
  fileComment: `/**\n * Auto-generated Grade 10 U.S. & World History year path (Units 1–${UNIT_TOTAL}).\n * Regenerate: node scripts/gen-grade10-history-year.mjs\n */`,
  exportPrefix: "G10_HISTORY", courseIdConst: "G10_HISTORY_COURSE_ID", courseId: COURSE_ID,
  unitMeta, lessons: allLessons, unitQuizzes, unitTotal: UNIT_TOTAL,
  habitLine: "A sourced claim with evidence and an honest limitation.",
});
writeOutputs({
  dirs: ["prisma/grade10-history", "content/grade10/history", "migrations"],
  outlinePath: "content/grade10/history/outline.json",
  outline: { courseId: COURSE_ID, units: unitMeta, lessonCount: allLessons.length, quizCount: unitQuizzes.length, generatedAt: "2026-10-01" },
  sqlPath: "migrations/0029_grade10_history_year.sql", sql,
  tsPath: "prisma/grade10-history/year.ts", tsBody,
});
console.log(`G10 History: ${allLessons.length} lessons → migrations/0029_grade10_history_year.sql`);
