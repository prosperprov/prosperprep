/**
 * Generate Grade 10 Biology & Chemistry full-year content (10 units) + migration SQL.
 * Run: node scripts/gen-grade10-science-year.mjs
 */
import { sci10IndepPractice } from "./lib/grade10-science-practice.mjs";
import { stableId, pick, rotChoices, emitYearSql, writeOutputs, buildTsModule } from "./lib/grade10-sql.mjs";

const COURSE_ID = "cmuh9by5o08znedan0hv8dff0";
const PREFIX = "ppg10s";
const UNIT_TOTAL = 10;
const OLD_STUBS = [
  "cmuh9by5p08zpedanjt5kjf0v","cmuh9by5t0903edanrzg25utm","cmuh9by5w090hedanc4r1mius",
  "cmuh9by5z090vedan63x9909z","cmuh9by630919edand6i9xzrt","cmuh9by66091nedanv21j2is3",
  "cmuh9by690921edan0dyj62lo","cmuh9by6d092fedan8wznoswj","cmuh9by6g092tedanm3vy9bg9",
];
const OLD_QUIZZES = ["cmuh9by6k0937edanu9z4b1kq","cmuh9by6p093tedan1o1kqmp5","cmuh9by6v094fedan7kbpjvsi"];

const UNITS = [
  { n: 1, title: "Scientific Inquiry & Biochemistry", lessons: [
    ["Experimental Design & Variables", "Design fair tests with independent/dependent variables and controls."],
    ["Data Tables, Graphs & Uncertainty", "Display data honestly; distinguish precision talk from overclaiming."],
    ["Atoms to Molecules for Life", "Connect atoms, bonds, and molecules to living systems."],
    ["Water and Carbon Skeletons", "Explain why water and carbon chemistry matter for organisms."],
    ["Carbohydrates & Lipids", "Relate structure of carbs/lipids to energy storage and membranes."],
    ["Proteins & Nucleic Acids", "Connect monomers to polymers for proteins and nucleic acids."],
    ["Enzymes as Biological Catalysts", "Explain enzyme function with specificity and denaturation caution."],
    ["Biochemistry Unit Synthesis", "Use CER to explain a lab observation with macromolecule language."],
  ]},
  { n: 2, title: "Cells", lessons: [
    ["Cell Theory and Scale", "State cell theory and reason about microscopic scale humbly."],
    ["Prokaryotic vs Eukaryotic Cells", "Compare cell types with organelle evidence."],
    ["Organelles and Compartments", "Assign functions to major organelles without mythology."],
    ["Membrane Structure & Transport", "Explain diffusion, osmosis, and active transport with energy notes."],
    ["Cell Cycle and Mitosis", "Sequence mitosis stages; connect to growth and repair."],
    ["Stem Cells and Differentiation Intro", "Describe differentiation as regulated gene expression at intro level."],
    ["Microscopy Habits", "Practice responsible observation: focus, scale bars, honest drawings."],
    ["Cells Unit Review", "Mixed models connecting membranes, organelles, and division."],
  ]},
  { n: 3, title: "Energy in Living Systems", lessons: [
    ["ATP and Energy Currency", "Describe ATP as a usable energy carrier in cells."],
    ["Photosynthesis Overview", "Track light energy to chemical energy in sugars at model level."],
    ["Chloroplasts and Leaf Context", "Connect leaf structure to photosynthetic function."],
    ["Cellular Respiration Overview", "Track sugar + oxygen to usable ATP with inputs/outputs."],
    ["Aerobic vs Anaerobic Paths", "Compare pathways and when cells use fermentation."],
    ["Energy Flow Through Ecosystems Preview", "Link cellular energy to food webs (bridge to ecology)."],
    ["Enzyme Conditions Lab Thinking", "Predict how temperature/pH shifts affect enzyme-catalyzed rates."],
    ["Energy Unit CER Task", "Argue where energy goes in a closed classroom demo using evidence."],
  ]},
  { n: 4, title: "Genetics & Heredity", lessons: [
    ["DNA Structure and Information", "Describe DNA as information storage with base-pairing."],
    ["Replication Fidelity Intro", "Explain why accurate copying matters; name mutation as change."],
    ["Transcription & Translation Overview", "Outline gene → protein central idea at Grade 10 level."],
    ["Mitosis vs Meiosis Purpose", "Contrast purposes: growth/repair vs gametes/variation."],
    ["Mendelian Inheritance", "Use Punnett squares as probability models, not destiny."],
    ["Non-Mendelian Patterns Intro", "Recognize incomplete dominance, codominance, and polygenic hints."],
    ["Pedigrees and Probability", "Read simple pedigrees; compute basic probabilities."],
    ["Genetics Unit Synthesis", "Explain a trait scenario with DNA → protein → phenotype caution."],
  ]},
  { n: 5, title: "Evolution & Diversity", lessons: [
    ["Variation and Heritability", "Separate acquired traits from heritable variation."],
    ["Natural Selection Mechanism", "Explain selection with variation, heritability, and differential survival."],
    ["Evidence for Evolution", "Use fossils, anatomy, and molecular clues as converging evidence."],
    ["Speciation Intro", "Describe how populations can diverge into new species over time."],
    ["Phylogenetic Thinking", "Read a simple tree as a hypothesis of relatedness."],
    ["Antibiotic Resistance Case", "Apply selection to bacterial resistance without fatalism."],
    ["Human Evolution Literacy (Careful)", "Discuss evidence-based paleoanthropology without pseudoscience."],
    ["Evolution Unit Review", "Mixed items separating mechanisms from common misconceptions."],
  ]},
  { n: 6, title: "Ecology & Human Impact", lessons: [
    ["Populations and Carrying Capacity", "Model population limits with resources and competition."],
    ["Community Interactions", "Classify predation, competition, and symbiosis with evidence."],
    ["Energy Pyramids and Matter Cycles", "Distinguish energy flow from matter cycling (carbon/water)."],
    ["Biomes and Climate Patterns", "Connect climate to biome distributions at intro level."],
    ["Biodiversity and Stability", "Argue why diversity can buffer systems — with limits."],
    ["Human Impact Evidence", "Use data (not vibes) to describe human effects on systems."],
    ["Stewardship Tradeoffs", "Propose management choices with explicit tradeoffs."],
    ["Ecology Unit Capstone", "CER on a local/regional ecosystem change scenario."],
  ]},
  { n: 7, title: "Chemistry Foundations", lessons: [
    ["Atomic Structure Review", "Describe protons, neutrons, electrons and what changes in ions/isotopes."],
    ["Periodic Table Patterns", "Use groups/periods to predict broad property trends."],
    ["Ionic and Covalent Bonding", "Contrast electron transfer vs sharing with examples."],
    ["Naming and Formulas Intro", "Write simple ionic formulas and names correctly."],
    ["Mole Concept Intro", "Use the mole as a counting unit for atoms/molecules."],
    ["Conservation of Mass", "Apply conservation in closed-system reaction stories."],
    ["Chemical vs Physical Change", "Classify changes with evidence (not slogans)."],
    ["Chemistry Foundations Review", "Mixed bonding, naming, and conservation practice."],
  ]},
  { n: 8, title: "Chemical Reactions & Quantities", lessons: [
    ["Writing and Balancing Equations", "Balance equations by atom inventory."],
    ["Types of Reactions", "Classify synthesis, decomposition, single/double replacement, combustion."],
    ["Stoichiometry Intro", "Use mole ratios from balanced equations for simple predictions."],
    ["Limiting Reactant Thinking", "Identify limiting reactants conceptually with particle diagrams."],
    ["Concentration and Solutions Intro", "Relate solute/solvent/solution and basic concentration language."],
    ["Acids, Bases & pH Intro", "Use pH as a scale; connect to everyday examples carefully."],
    ["Reaction Rates Factors", "Predict how temperature, concentration, and catalysts affect rates."],
    ["Reactions Unit Lab CER", "Design or analyze a reaction investigation with quantitative claims."],
  ]},
  { n: 9, title: "Human Body Systems & Homeostasis", lessons: [
    ["Hierarchy: Cells to Systems", "Trace cell → tissue → organ → system."],
    ["Digestive & Nutrient Absorption", "Connect digestion to macromolecule breakdown."],
    ["Circulatory & Respiratory Partnership", "Explain gas exchange and transport teamwork."],
    ["Nervous & Endocrine Signals", "Compare fast neural vs chemical hormone signaling."],
    ["Immune Defenses Overview", "Distinguish barriers, innate, and adaptive ideas at intro level."],
    ["Homeostasis Feedback Loops", "Model negative feedback with a concrete example (temperature/glucose)."],
    ["Health Claims Literacy", "Evaluate a health claim with evidence standards."],
    ["Body Systems Unit Synthesis", "Explain a stressor response across two systems."],
  ]},
  { n: 10, title: "Integrated Science Capstone", lessons: [
    ["Systems Thinking Across Bio/Chem", "Map a phenomenon across chemistry and biology models."],
    ["From Atoms to Ecosystems Story", "Tell one coherent story linking bonding → macromolecules → cells → ecosystems."],
    ["Quantitative Reasoning Clinic", "Practice unit conversion, ratios, and graph reading for science."],
    ["Lab Integrity and Notebook Habits", "Record methods/data so another student could repeat the work."],
    ["Science in the News Audit", "Audit a science news claim for evidence and overreach."],
    ["Design an Investigation", "Write a testable question, procedure outline, and data plan."],
    ["Capstone CER Portfolio", "Curate two polished CER paragraphs from earlier units with revision notes."],
    ["Year Defense: Model + Evidence", "Defend one scientific model with evidence and stated limitations."],
  ]},
];

const TEACH_BANK = {
  1: { big: "Life runs on chemistry under disciplined inquiry: variables, evidence, and macromolecule structure–function.", why: "College biology assumes you can design fair tests and talk about molecules without myth.", vocab: ["control", "variable", "polymer", "enzyme", "CER"], mistake: "Changing multiple variables at once, or treating macromolecule names as magic words." },
  2: { big: "Cells are systems with membranes and compartments that enable life processes.", why: "Cell models explain health, growth, and later genetics.", vocab: ["organelle", "membrane", "diffusion", "mitosis", "scale"], mistake: "Memorizing organelle lists with no function, or drawing cells with no scale honesty." },
  3: { big: "Energy transforms; it is not created from nowhere in biological systems.", why: "Photosynthesis and respiration are the energy spine of ecology and physiology.", vocab: ["ATP", "input", "output", "aerobic", "fermentation"], mistake: "Saying plants don't respire, or treating energy as a substance that can be used up to zero without transfer." },
  4: { big: "Genes are information; inheritance models are probabilistic.", why: "Genetics literacy prevents superstition about traits and medicine headlines.", vocab: ["DNA", "allele", "Punnett", "meiosis", "phenotype"], mistake: "Treating Punnett squares as guarantees, or confusing mitosis with meiosis purposes." },
  5: { big: "Evolution is a population process driven by selection on heritable variation.", why: "Modern biology is evolutionary; misconceptions block later learning.", vocab: ["variation", "selection", "fitness", "speciation", "phylogeny"], mistake: "Saying individuals evolve on purpose, or treating 'theory' as a wild guess." },
  6: { big: "Ecosystems exchange energy and cycle matter; human choices have measurable effects.", why: "Stewardship requires data and tradeoffs, not slogans.", vocab: ["carrying capacity", "trophic", "carbon cycle", "biodiversity", "tradeoff"], mistake: "Drawing food chains with arrows the wrong way, or claiming energy is recycled like matter." },
  7: { big: "Chemistry foundations explain bonding and conservation that biology depends on.", why: "Bio-chem crossover years need atomic honesty before stoichiometry.", vocab: ["proton", "ion", "covalent", "mole", "conservation"], mistake: "Mixing up ions and isotopes, or balancing equations by changing subscripts." },
  8: { big: "Balanced equations unlock quantitative predictions about reactants and products.", why: "Lab and industry reasoning is stoichiometric at heart.", vocab: ["coefficient", "mole ratio", "limiting reactant", "pH", "rate"], mistake: "Skipping atom inventories, or confusing concentration language with 'strength' slogans." },
  9: { big: "Body systems maintain homeostasis through coordinated feedback.", why: "Health literacy needs systems thinking, not supplement myths.", vocab: ["tissue", "feedback", "hormone", "gas exchange", "claim audit"], mistake: "Isolating one organ as the whole story, or accepting health ads without evidence checks." },
  10: { big: "Integrated science means one phenomenon, multiple models, stated limits.", why: "Capstone habits mirror college lab reports and scientific citizenship.", vocab: ["systems map", "limitation", "repeatability", "overclaim", "portfolio"], mistake: "Cherry-picking one confirming fact, or hiding uncertainty." },
};

function buildLessonBody(unit, title, desc, orderInUnit, indep) {
  const bank = TEACH_BANK[unit.n];
  const unitLabel = `Unit ${unit.n} of ${UNIT_TOTAL} · ${unit.title}`;
  const parts = [`# ${title}`, "", `*Grade 10 Biology & Chemistry · ${unitLabel} · Lesson ${orderInUnit}*`, "",
    "## Objective", "", `**I can** ${desc.charAt(0).toLowerCase()}${desc.slice(1)}`, "",
    "**Teacher focus:** Students use models + evidence (CER). Prefer labeled diagrams over one-word answers.", "",
    "## Warm-up (3–5 minutes)", "",
    `Write one question a scientist could ask that today's idea (“${title}”) might help answer. Star what you are least sure about.`, "",
    `Share: What prior idea from Unit ${unit.n} (or earlier) might help?`, "",
    "## Teach", "", "### Big idea", "",
    `${bank.big} Today's skill — **${title}** — sits inside **${unit.title}**.`, "",
    "### Why it matters", "",
    `${bank.why} At Prosper Prep we connect science habits to scholarship habits: define terms, show a model, cite evidence, revise when data conflicts.`, "",
    "### Language bank", "",
    ...bank.vocab.slice(0,4).map(v => `- **${v}** — define it and attach an example.`), "",
    "### Worked example A", "",
    `**Step 1 — Restate** the question for “${title}.”`,
    "**Step 2 — Choose a representation** (particle sketch, organelle map, Punnett, food web, balanced equation, feedback loop).",
    "**Step 3 — Apply the science idea** with labeled evidence.",
    `**Step 4 — Check** against common mistakes such as: ${bank.mistake}`, "",
    "**Sample narrative:** “I defined key terms, drew a labeled model, cited an observation, and revised when my first explanation contradicted conservation/selection/evidence rules.”", "",
    "### Worked example B", "",
    "Change the context but keep the scientific structure. Write a claim a skeptic could test.", "",
    "### Common mistakes", "",
    `- **Watch for:** ${bank.mistake}`,
    "- **Also watch for:** unlabeled diagrams; treating models as perfect miniatures; slogan explanations.",
    "- **Repair move:** Name the broken step; redo from there.", "",
    "### Connect to prior learning", "",
    unit.n <= 3 ? "Inquiry, cells, and energy set up genetics and ecology." :
    unit.n <= 6 ? "Genetics and evolution explain diversity; ecology places organisms in systems." :
    "Chemistry quantitative tools and body systems integrate the living/nonliving interface.", "",
    "## Guided practice (we do)", "",
    `1. Restate today's goal and list two measurable observations you would collect.`,
    `2. Use two language-bank terms correctly in lab-notebook sentences.`,
    `3. Error hunt: rewrite a slogan-only explanation into a CER.`, "",
    "## Independent practice", "",
    "Complete each item with models + evidence.", "",
  ];
  indep.forEach((p, i) => parts.push(`${i + 1}. ${p.q}`));
  parts.push("", "### Answer key (quality bar)", "", "*Criteria for strong responses:*", "");
  indep.forEach((p, i) => parts.push(`${i + 1}. ${p.a}`));
  parts.push("", "## Exit ticket", "",
    `1. What does “${title}” help you explain more clearly now?`,
    "2. Name one misconception and the repair.",
    "3. Sketch a tiny model (even stick-figure science) that belongs in your notes.", "",
    "## Wrap-up", "",
    `Strong Grade 10 science is **model + evidence + revision**. Next up in Unit ${unit.n}: ${unit.title}.`, "");
  return parts.join("\n");
}

function buildExitQuestions(unit, title, desc) {
  const seed = `exit:${unit.n}:${title}`;
  const bank = TEACH_BANK[unit.n];
  const q1 = rotChoices(`Use a labeled model and evidence to apply “${title}.”`, ["Memorize the title only.", "Change multiple variables at once and call it proof.", "Replace evidence with a slogan."], seed+"1");
  const q2 = rotChoices(bank.vocab[0], [bank.vocab[1], "random guessing", "ignoring units/labels"], seed+"2");
  const q3 = rotChoices("Name the broken step, revise the model, and re-check against evidence.", ["Erase everything and invent a new story.", "Keep the slogan if it sounds confident.", "Hide conflicting data."], seed+"3");
  return [
    { prompt: `Best scientific approach for this lesson (${desc.slice(0,70)}…)?`, choices: q1.choices, correctIndex: q1.correctIndex, explanation: "Models + evidence beat slogans.", order: 1 },
    { prompt: `Which term is most central in Unit ${unit.n} for “${title}”?`, choices: q2.choices, correctIndex: q2.correctIndex, explanation: `Emphasizes “${bank.vocab[0]}.”`, order: 2 },
    { prompt: "You find a contradiction with your first explanation. Best next move?", choices: q3.choices, correctIndex: q3.correctIndex, explanation: "Revision is a scientific virtue.", order: 3 },
  ];
}

function buildUnitQuiz(unit, lessonTitles) {
  return lessonTitles.slice(0,10).map((title, i) => {
    const seed = `uquiz:${unit.n}:${i}:${title}`;
    const correct = pick([`Apply “${title}” with a labeled model and evidence.`, `Reject slogan-only explanations about “${title}.”`, `Revise when new data conflicts with the first model.`, `Define key terms before claiming results for “${title}.”`], seed+"c");
    const { choices, correctIndex } = rotChoices(correct, ["Skip models and memorize catchphrases.", "Hide uncertainty.", "Treat diagrams as optional decoration."], seed);
    return { prompt: `Unit ${unit.n} Check (${unit.title}) item ${i+1}: Thinking about “${title},” which is most scientifically responsible?`, choices, correctIndex, explanation: `Unit ${unit.n} emphasizes models and evidence.`, order: i+1 };
  });
}

const allLessons = [];
let globalOrder = 0;
for (const unit of UNITS) {
  unit.lessons.forEach(([title, desc], idx) => {
    globalOrder += 1;
    const id = stableId(PREFIX, `u${String(unit.n).padStart(2,"0")}-l${String(idx+1).padStart(2,"0")}-${title}`);
    const indep = sci10IndepPractice(unit.n, title, `${unit.n}:${title}`);
    allLessons.push({
      id, unit: unit.n, unitTitle: unit.title, title, description: desc,
      objectives: [`• ${desc}`, `• Explain with a labeled model or data table.`, `• Cite evidence and revise misconceptions.`].join("\n"),
      content: buildLessonBody(unit, title, desc, idx+1, indep),
      order: globalOrder, durationMin: 45, sectionKey: `unit-${unit.n}`, videoUrl: null,
      questions: buildExitQuestions(unit, title, desc),
    });
  });
}
const unitQuizzes = UNITS.map((unit) => ({
  id: stableId(PREFIX, `u${String(unit.n).padStart(2,"0")}-quiz`),
  unit: unit.n, title: `Unit ${unit.n} Check · ${unit.title}`,
  description: `Unit check for ${unit.title} (Grade 10 Biology & Chemistry). Unlocks after all lessons in Unit ${unit.n} are complete. Unit checks = 60% of the course grade (lesson checks = 40%).`,
  order: unit.n, sectionKey: `unit-${unit.n}`, questions: buildUnitQuiz(unit, unit.lessons.map(l => l[0])),
}));
const unitMeta = UNITS.map((u) => ({ n: u.n, title: u.title, sectionKey: `unit-${u.n}`, lessonCount: u.lessons.length }));
const sql = emitYearSql({
  headerLines: [
    "-- Grade 10 Biology & Chemistry full-year path (10 units). Generated by scripts/gen-grade10-science-year.mjs",
    "-- Safe for production D1: does NOT wipe users/enrollments. Do NOT run db:setup.",
    "-- Retires old 9 science stubs + old section quizzes; INSERTs year lessons + unit checks.",
  ],
  courseId: COURSE_ID, courseTitle: "Biology & Chemistry · Grade 10",
  courseDescription: "Full-year Grade 10 Biology & Chemistry at Prosper Preparatory: 10 units (Inquiry & biochemistry through Integrated science capstone), original Prosper Prep lessons with practice and unit checks. Lesson checks = 40%; unit checks = 60%. Latest attempt counts. College-prep life science with chemistry foundations.",
  oldStubs: OLD_STUBS, oldQuizzes: OLD_QUIZZES, lessons: allLessons, unitQuizzes, prefix: PREFIX,
});
const tsBody = buildTsModule({
  fileComment: `/**\n * Auto-generated Grade 10 Biology & Chemistry year path (Units 1–${UNIT_TOTAL}).\n * Regenerate: node scripts/gen-grade10-science-year.mjs\n */`,
  exportPrefix: "G10_SCIENCE", courseIdConst: "G10_SCIENCE_COURSE_ID", courseId: COURSE_ID,
  unitMeta, lessons: allLessons, unitQuizzes, unitTotal: UNIT_TOTAL,
  habitLine: "A labeled model, evidence, and a revised explanation when needed.",
});
writeOutputs({
  dirs: ["prisma/grade10-science", "content/grade10/science", "migrations"],
  outlinePath: "content/grade10/science/outline.json",
  outline: { courseId: COURSE_ID, units: unitMeta, lessonCount: allLessons.length, quizCount: unitQuizzes.length, generatedAt: "2026-10-01" },
  sqlPath: "migrations/0028_grade10_science_year.sql", sql,
  tsPath: "prisma/grade10-science/year.ts", tsBody,
});
console.log(`G10 Science: ${allLessons.length} lessons → migrations/0028_grade10_science_year.sql`);
