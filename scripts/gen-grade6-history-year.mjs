/**
 * Generate Grade 6 World History full-year content (9 units) + D1 migration SQL.
 * Original Prosper Prep prose; age-trimmed world + Texas spine; open-curriculum map = sequencing only.
 * Family/faith-compatible: academically neutral; no LGBTQ/transgender themes in examples or framing.
 * Run: node scripts/gen-grade6-history-year.mjs
 *
 * HARD RULE: Teach layers are HAND-AUTHORED in scripts/data/grade6-history-hand-teach.json
 * (built by scripts/build-esh-hand-rewrites.mjs). Merge hand packs; never Mad-Lib overwrite.
 */
import { writeFileSync, mkdirSync, readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";

/** Hand teach packs (migration 0019). Never Mad-Lib overwrite when present. */
const HAND_TEACH = existsSync("scripts/data/grade6-history-hand-teach.json")
  ? JSON.parse(readFileSync("scripts/data/grade6-history-hand-teach.json", "utf8"))
  : {};

const COURSE_ID = "cmuh9bwwo041bedan1gymikl1";
const UNIT_TOTAL = 9;

const OLD_STUBS = [
  "cmuh9bwwo041dedan54hc5an6",
  "cmuh9bwwt041redanhvtpg264",
  "cmuh9bwwy0425edanrj5x4cdu",
  "cmuh9bwx3042jedan608muevz",
  "cmuh9bwx7042xedank9f9wih1",
  "cmuh9bwxa043bedanz58djl70",
  "cmuh9bwxe043pedan9swonk0o",
  "cmuh9bwxh0443edanpe7c2a6w",
  "cmuh9bwxl044hedan01esbnx4",
];

const OLD_QUIZZES = [
  "cmuh9bwxp044vedan0veu3a38",
  "cmuh9bwxv045hedano8as9oq1",
  "cmuh9bwy10463edan06unm8w1",
];

function stableId(slug) {
  const h = createHash("sha256").update(`ppg6h:${slug}`).digest("hex").slice(0, 20);
  return `ppg6h${h}`;
}

function esc(s) {
  return String(s).replace(/'/g, "''");
}

function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pick(arr, seed) {
  return arr[hash(seed) % arr.length];
}

function rotChoices(correct, wrong, seed) {
  const items = [correct, ...wrong];
  const rot = hash(seed) % 4;
  const choices = [...items.slice(rot), ...items.slice(0, rot)];
  return { choices, correctIndex: choices.indexOf(correct) };
}

/** Age-trimmed World History spine (9 units). OER/KA map = sequencing only — original PP prose. */
const UNITS = [
  {
    n: 1,
    title: "Maps and Geographic Thinking",
    sourceNote: "Geographic literacy; map skills",
    khanNote: "Coverage map only",
    lessons: [
      ["Reading Maps: Keys and Directions", "Use map keys, compass directions, and scale to locate places accurately."],
      ["Latitude, Longitude, and Globes", "Explain how latitude and longitude form a grid for locating places on Earth."],
      ["Physical vs Political Maps", "Compare what physical and political maps emphasize and when to choose each."],
      ["Regions and Human Geography", "Define regions by physical and human characteristics with clear examples."],
      ["Climate, Landforms, and Settlement", "Connect climate and landforms to where communities historically settle."],
      ["Trade Routes on a Map", "Trace a historic trade route and explain why geography shaped its path."],
      ["Primary Sources: Maps as Evidence", "Treat historic maps as sources: what they show, omit, and why that matters."],
      ["Texas on the Map", "Locate Texas relative to continents, oceans, and neighboring regions."],
      ["Geography Unit Synthesis", "Explain one historical pattern using maps, regions, and geographic vocabulary."],
    ],
  },
  {
    n: 2,
    title: "Early Humans and Farming",
    sourceNote: "Early humans to Agricultural Revolution",
    khanNote: "Coverage map only",
    lessons: [
      ["What Historians Can Know About Deep Time", "Distinguish evidence-based claims from guesses about early human history."],
      ["Foraging Lifeways", "Describe foraging communities and the skills they needed to survive."],
      ["The Agricultural Revolution", "Explain how farming changed food supply, settlement, and daily work."],
      ["Domestication of Plants and Animals", "Define domestication and give examples that reshaped human societies."],
      ["From Camps to Villages", "Trace how surplus food supported larger, more permanent settlements."],
      ["Specialization and New Jobs", "Connect farming surplus to specialized roles (craft, trade, leadership)."],
      ["Technology and Tools Over Time", "Interpret simple tool changes as evidence of problem-solving, not “smarter vs less smart.”"],
      ["Early Humans Unit Review", "Argue with evidence how farming transformed human communities."],
    ],
  },
  {
    n: 3,
    title: "River Civilizations",
    sourceNote: "Ancient river valley civilizations",
    khanNote: "Coverage map only",
    lessons: [
      ["Why Rivers Matter", "Explain why major early civilizations clustered along fertile river valleys."],
      ["Mesopotamia: Cities and Writing", "Describe city life, irrigation, and early writing in Mesopotamia."],
      ["Ancient Egypt Along the Nile", "Connect Nile flooding, farming, and centralized authority in Egypt."],
      ["Indus Valley Patterns", "Use archaeological evidence carefully to describe Indus Valley cities."],
      ["Ancient China: Rivers and Dynasties Intro", "Introduce early Chinese river civilizations and continuity themes."],
      ["Laws, Leaders, and Order", "Compare how early states used laws and leaders to organize large populations."],
      ["Trade and Cultural Exchange", "Show how goods and ideas moved between early civilizations."],
      ["Achievements and Daily Life", "Balance famous monuments with ordinary people’s work and family life."],
      ["River Civilizations Synthesis", "Compare two river civilizations on geography, governance, and culture."],
    ],
  },
  {
    n: 4,
    title: "Classical Empires and Belief Systems",
    sourceNote: "Classical empires and major belief systems survey",
    khanNote: "Coverage map only",
    lessons: [
      ["What Makes an Empire?", "Define empire and list challenges of ruling diverse lands."],
      ["Classical Mediterranean Snapshot", "Outline key features of classical Mediterranean political life at Grade 6 depth."],
      ["Classical Asia Snapshot", "Outline key features of classical Asian empires students should recognize."],
      ["Belief Systems: Judaism", "Summarize core beliefs and historical significance of Judaism respectfully."],
      ["Belief Systems: Christianity", "Summarize origins and spread of Christianity in historical context."],
      ["Belief Systems: Islam", "Summarize origins and early spread of Islam in historical context."],
      ["Belief Systems: Hinduism and Buddhism Intro", "Introduce core ideas of Hinduism and Buddhism as historical belief systems."],
      ["How Beliefs Travel", "Explain how trade, conquest, and teaching carried belief systems across regions."],
      ["Empires and Beliefs Synthesis", "Connect one empire’s governance to how belief communities lived within it."],
    ],
  },
  {
    n: 5,
    title: "Medieval Networks",
    sourceNote: "Post-classical regional webs and exchange",
    khanNote: "Coverage map only",
    lessons: [
      ["After Classical Empires", "Describe continuity and change after major classical empires restructured."],
      ["Medieval Europe Snapshot", "Outline feudal relationships, manors, and church influence at intro level."],
      ["Islamic Golden Age Contributions", "Identify scholarship, trade, and preservation of knowledge in Islamic societies."],
      ["African Kingdoms and Trade", "Explain how African kingdoms participated in long-distance trade networks."],
      ["Asian Networks and Exchange", "Trace goods and ideas along Asian trade routes in the medieval era."],
      ["The Silk Roads Idea", "Explain the Silk Roads as a web of routes, not a single highway."],
      ["Cities as Crossroads", "Show how medieval cities concentrated trade, crafts, and learning."],
      ["Medieval Networks Unit Review", "Argue how networks (trade + belief + cities) reshaped regions."],
    ],
  },
  {
    n: 6,
    title: "Exploration and the First Global Age",
    sourceNote: "Exploration and Columbian Exchange era",
    khanNote: "Coverage map only",
    lessons: [
      ["Motivations to Explore", "Explain God, gold, and glory-style motives without reducing history to slogans."],
      ["Navigation Tools and Knowledge", "Connect maps, ships, and navigational knowledge to longer voyages."],
      ["Contact in the Americas", "Describe early contact between Europeans and Indigenous peoples with care and evidence."],
      ["The Columbian Exchange", "Trace plants, animals, and diseases moving between hemispheres and their effects."],
      ["Empires Expand", "Explain how maritime empires projected power across oceans."],
      ["Labor Systems and Human Cost", "Describe forced labor and enslavement as historical realities with seriousness."],
      ["Global Trade Goods", "Follow one commodity (sugar, silver, or spices) through a global network."],
      ["First Global Age Synthesis", "Weigh benefits and harms of early global exchange using evidence."],
    ],
  },
  {
    n: 7,
    title: "Revolutions and Industry",
    sourceNote: "Political revolutions and industrialization survey",
    khanNote: "Coverage map only",
    lessons: [
      ["Ideas That Challenged Kings", "Identify Enlightenment-era ideas about rights and government at intro level."],
      ["Atlantic Revolutions Snapshot", "Compare causes of major Atlantic-world revolutions in broad strokes."],
      ["New Governments, New Questions", "Explain that writing a constitution does not automatically create a just society."],
      ["Industrial Revolution Begins", "Describe how new machines and energy sources changed work and cities."],
      ["Factory Life and Families", "Examine how industrial work changed family schedules and child labor debates."],
      ["Reform and Response", "Identify reform movements that responded to industrial problems."],
      ["Nation, Empire, and Power", "Connect industrial power to imperialism in a Grade 6-appropriate survey."],
      ["Revolutions & Industry Review", "Link political revolutions and industrial change in one evidence paragraph."],
    ],
  },
  {
    n: 8,
    title: "Texas and American Turning Points",
    sourceNote: "Texas 19th century and U.S. civil rights milestones",
    khanNote: "Coverage map only",
    lessons: [
      ["Texas Before Statehood", "Outline major peoples and powers in Texas before U.S. statehood."],
      ["Revolution and Republic in Texas", "Explain key events leading to the Texas Republic with a timeline habit."],
      ["Statehood and the Civil War Era", "Place Texas within U.S. Civil War and Reconstruction themes carefully."],
      ["Cattle, Cotton, and Railroads", "Connect Texas economic changes to national markets in the late 1800s."],
      ["Constitutional Promises", "Explain equal protection and voting rights as constitutional claims people fought to realize."],
      ["Civil Rights Milestones", "Identify major U.S. civil rights milestones (abolition to mid-20th-century legal victories) with causes and effects."],
      ["Leaders and Ordinary Courage", "Show how both famous leaders and ordinary families advanced justice under law."],
      ["Texas & Turning Points Synthesis", "Write a CER on one Texas or U.S. turning point using two pieces of evidence."],
    ],
  },
  {
    n: 9,
    title: "Global Connections Today",
    sourceNote: "20th–21st century connections and stewardship of civic habits",
    khanNote: "Coverage map only",
    lessons: [
      ["The 20th Century in Broad Strokes", "Outline world wars and major 20th-century conflicts as global turning points."],
      ["Cold War Ideas (Intro)", "Explain the Cold War as a rivalry of alliances and ideas without caricature."],
      ["Decolonization Snapshot", "Describe how many nations gained independence in the mid-20th century."],
      ["Globalization: Goods and Information", "Define globalization through trade, travel, and communication examples."],
      ["Human Rights Language", "Explain human rights as claims about dignity and justice grounded in documents and law."],
      ["Texas in a Global Economy", "Connect East Texas families and industries to wider markets and stewardship."],
      ["Media Literacy for Citizens", "Evaluate a news claim with sourcing questions appropriate for Grade 6."],
      ["Year Capstone: Continuity and Change", "Argue what changed and what endured from early farming to today’s connected world."],
    ],
  },
];

const CONTEXTS = [
  "a Prosper Prep history seminar table",
  "an East Texas family road trip past historic markers",
  "a museum map wall",
  "a library primary-source folder",
  "a timeline poster in the classroom",
  "a cattle-drive history display",
  "a courthouse square monument",
  "a Sunday afternoon conversation about heritage",
  "a scholarship essay about civic responsibility",
  "a world atlas open on the kitchen table",
];

const MISTAKES = [
  "treating a single map as the whole truth about a region",
  "saying ancient people were simply “dumb” because their tools looked different",
  "confusing a religion’s core teachings with every political action done by rulers",
  "claiming one empire was purely good or purely evil with no evidence",
  "mixing up BC/AD (BCE/CE) dates when building a timeline",
  "using modern country borders as if they always existed",
  "reducing the Columbian Exchange to “new foods only” and ignoring disease and forced labor",
  "assuming industrialization helped everyone equally at the same speed",
  "leaving Texas out of U.S. and world connections as if it floated alone",
  "accepting a social media claim about history without asking for a source",
];

function nums(seed, base = 3) {
  const h = hash(seed);
  const a = base + (h % 9);
  const b = base + 1 + ((h >> 3) % 8);
  const c = base + 2 + ((h >> 6) % 7);
  return { a, b, c, d: a + b, e: a * b, f: 10 + (h % 40), g: 5 + (h % 20) };
}

function buildLessonBody(unit, lessonTitle, lessonDesc, orderInUnit) {
  const seed = `${unit.n}:${lessonTitle}`;
  const n = nums(seed);
  const ctx = pick(CONTEXTS, seed + "ctx");
  const mistake = pick(MISTAKES, seed + "mis");
  const unitLabel = `Unit ${unit.n} of ${UNIT_TOTAL} · ${unit.title}`;

  const vocabBanks = {
    1: ["map key", "scale", "region", "latitude", "longitude", "physical map", "political map"],
    2: ["foraging", "domestication", "surplus", "settlement", "specialization", "agriculture", "artifact"],
    3: ["irrigation", "city-state", "dynasty", "scribe", "trade", "monument", "law code"],
    4: ["empire", "belief system", "monotheism", "polytheism", "tolerance", "citizen", "province"],
    5: ["network", "manor", "caravan", "scholarship", "crossroads", "continuity", "exchange"],
    6: ["navigation", "Columbian Exchange", "colony", "commodity", "forced labor", "maritime", "contact"],
    7: ["rights", "constitution", "industrialization", "reform", "imperialism", "factory", "revolution"],
    8: ["statehood", "Reconstruction", "equal protection", "civil rights", "timeline", "primary source", "citizenship"],
    9: ["globalization", "alliance", "decolonization", "human rights", "sourcing", "continuity", "change"],
  };

  const bank = vocabBanks[unit.n] || vocabBanks[1];
  const v1 = bank[hash(seed) % bank.length];
  const v2 = bank[(hash(seed + "v") + 1) % bank.length];

  const guided = [
    {
      q: `Guided 1 — In the context of ${ctx}, restate today’s goal (“${lessonTitle}”) in your own words, then list two pieces of evidence you would collect.`,
      a: `Goal restates ${lessonDesc.slice(0, 60)}… Evidence should be specific or clearly describable with units/labels.`,
    },
    {
      q: `Guided 2 — Use the terms **${v1}** and **${v2}** correctly in two sentences that could appear in a history notebook.`,
      a: `Sentences show accurate definitions and connect to the lesson phenomenon; no circular “it is what it is.”`,
    },
  ];

  const indep = [];
  for (let i = 1; i <= 6; i++) {
    const nn = nums(seed + ":p" + i, 2 + i);
    indep.push({
      q: `Problem ${i}: Apply “${lessonTitle}” to a short scenario about ${pick(CONTEXTS, seed + i)}. Include a labeled map, timeline, or T-chart and one evidence sentence. (Optional dates/numbers if helpful: ${nn.a}, ${nn.b}, ${nn.f}.)`,
      a: `Strong responses define key terms, show a map/timeline/chart, and cite evidence tied to ${lessonDesc.slice(0, 50)}…`,
    });
  }

  const parts = [];
  parts.push(`# ${lessonTitle}`);
  parts.push("");
  parts.push(`*Grade 6 World History · ${unitLabel} · Lesson ${orderInUnit}*`);
  parts.push("");
  parts.push(`## Objective`);
  parts.push("");
  parts.push(`**I can** ${lessonDesc.charAt(0).toLowerCase()}${lessonDesc.slice(1)}`);
  parts.push("");
  parts.push(
    `**Teacher focus:** Students use models, vocabulary, and evidence. Prefer labeled diagrams and CER sentences over one-word answers.`
  );
  parts.push("");
  parts.push(`## Warm-up (3–5 minutes)`);
  parts.push("");
  parts.push(
    pick(
      [
        `Look at ${ctx}. Write one question a scientist could ask that today’s idea (“${lessonTitle}”) might help answer.`,
        `Without looking anything up, sketch what you think “${v1}” means. Then star one part you are least sure about.`,
        `True or false (guess OK): “${mistake}” — write why you agree or disagree in one sentence.`,
      ],
      seed + "w"
    )
  );
  parts.push("");
  parts.push(
    `Share with a partner: What prior idea from earlier in Unit ${unit.n} (or a previous unit) might help?`
  );
  parts.push("");
  parts.push(`## Teach`);
  parts.push("");
  parts.push(`### Big idea`);
  parts.push("");
  parts.push(
    `Today’s skill — **${lessonTitle}** — sits inside **${unit.title}**. Grade 6 history is not a pile of trivia dates; it is a set of habits for explaining change over time with evidence. A correct vocabulary word with no map, timeline, or source is weaker than a clear explanation a classmate can follow.`
  );
  parts.push("");
  parts.push(`### Why it matters`);
  parts.push("");
  parts.push(
    `Families use these ideas when reading news, visiting historic sites, talking about citizenship, or understanding how Texas connects to the wider world. At Prosper Prep we connect careful historical thinking to scholarship habits: define terms, use maps and timelines, cite evidence, and revise when better sources appear.`
  );
  parts.push("");
  parts.push(`### Language bank`);
  parts.push("");
  parts.push(`- **${v1}** — use this word with a definition in your own sentence, not as decoration.`);
  parts.push(`- **${v2}** — pair it with an example from ${ctx}.`);
  parts.push(
    `- **Evidence** beats slogans. Prefer “The source shows… which supports…” over “because history says so.”`
  );
  parts.push("");
  parts.push(`### Worked example A`);
  parts.push("");
  parts.push(
    `Imagine ${ctx}. We want to understand something connected to “${lessonTitle}.”`
  );
  parts.push("");
  parts.push(`**Step 1 — Restate the question.** What are we trying to explain or decide?`);
  parts.push(
    `**Step 2 — Choose a representation.** Map, timeline, cause/effect chart, T-chart, or primary-source quote + paraphrase — pick what matches the question.`
  );
  parts.push(
    `**Step 3 — Apply the science idea.** Connect evidence to the definition of ${v1}. If dates or quantities help (for example ${n.a} and ${n.b}), label them clearly.`
  );
  parts.push(
    `**Step 4 — Check.** Ask: Does this contradict a known pattern? Did we confuse a common mistake like: ${mistake}?`
  );
  parts.push("");
  parts.push(`**Sample narrative solution (model quality, not the only path):**`);
  parts.push(
    `“I defined the key terms first. I drew a quick model of ${ctx} and labeled ${v1} and ${v2}. My evidence was that when conditions changed, the pattern matched the lesson prediction. I checked for the common mix-up (${mistake.split(" ").slice(0, 8).join(" ")}…) and revised my labels so a classmate could follow the reasoning.”`
  );
  parts.push("");
  parts.push(`### Worked example B (different structure)`);
  parts.push("");
  parts.push(
    `Keep the mathematical/scientific structure of “${lessonTitle}” but switch the context to ${pick(CONTEXTS, seed + "b")}.`
  );
  parts.push("");
  parts.push(`1. Write a one-sentence goal.`);
  parts.push(`2. Draw the representation.`);
  parts.push(`3. Write two evidence sentences.`);
  parts.push(`4. Write a concluding claim that a skeptic could test.`);
  parts.push("");
  parts.push(
    `Teachers: freeze after step 2 in live sessions so students cannot hide behind premature vocabulary.`
  );
  parts.push("");
  parts.push(`### Common mistakes`);
  parts.push("");
  parts.push(`- **Watch for:** ${mistake}.`);
  parts.push(
    `- **Also watch for:** copying a diagram without labels; treating a model as reality; confusing correlation with a full causal explanation.`
  );
  parts.push(
    `- **Repair move:** Name the broken step in one sentence, then re-do only from that step — do not erase the entire explanation blindly.`
  );
  parts.push("");
  parts.push(`### Connect to prior learning`);
  parts.push("");
  if (unit.n <= 2) {
    parts.push(
      `Map skills and geographic vocabulary set up every later unit’s place-based explanations.`
    );
  } else if (unit.n <= 4) {
    parts.push(
      `Early humans and river civilizations show how environment and innovation shaped complex societies.`
    );
  } else if (unit.n <= 7) {
    parts.push(
      `Empires, belief systems, and medieval networks show how ideas and goods traveled — and how power was organized.`
    );
  } else {
    parts.push(
      `Exploration, revolutions, Texas turning points, and global connections help students practice continuity and change.`
    );
  }
  parts.push("");
  parts.push(`## Guided practice (we do)`);
  parts.push("");
  for (const g of guided) {
    parts.push(`1. **${g.q}**`);
    parts.push(`   - *Teacher/self-check note:* ${g.a}`);
    parts.push("");
  }
  parts.push(
    `2. **Error hunt:** A fictional student wrote only “because history” with no source or map. What two follow-up questions should you ask before accepting the answer?`
  );
  parts.push("");
  parts.push(`## Independent practice`);
  parts.push("");
  parts.push(`Complete each item with visible work. Aim for clear maps/timelines + evidence sentences.`);
  parts.push("");
  indep.forEach((p, i) => {
    parts.push(`${i + 1}. ${p.q}`);
  });
  parts.push("");
  parts.push(`### Answer key (try first)`);
  parts.push("");
  parts.push(`*Check your work only after you attempt each item. Show your map/timeline and evidence, not only a final word.*`);
  parts.push("");
  indep.forEach((p, i) => {
    parts.push(`${i + 1}. ${p.a}`);
  });
  parts.push("");
  parts.push(`## Exit ticket`);
  parts.push("");
  parts.push(
    `1. In one sentence, what does “${lessonTitle}” let you explain that you could not explain as clearly before?`
  );
  parts.push(
    `2. Name the common mistake to avoid today (hint related to: ${mistake.split(" ").slice(0, 6).join(" ")}…).`
  );
  parts.push(
    `3. Create one new practice item (with answer) a classmate could try in 2 minutes.`
  );
  parts.push("");
  parts.push(`*(Scored exit items also appear as multiple-choice checks below the lesson in Prosper Prep.)*`);
  parts.push("");
  parts.push(`## Stretch (optional)`);
  parts.push("");
  parts.push(
    `Write a short CER paragraph (4–6 sentences) about “${lessonTitle}” using ${ctx}. Then invent a harder variant that would challenge a classmate who already finished the independent set.`
  );
  parts.push("");

  return parts.join("\n");
}

function buildExitQuestions(unit, lessonTitle, lessonDesc) {
  const seed = `exit:${unit.n}:${lessonTitle}`;
  const items = [];

  const q1 = rotChoices(
    `Use a clear model and evidence sentences for “${lessonTitle}.”`,
    [
      "Guess from the answer choices without a diagram.",
      "Memorize the title only and skip definitions.",
      "Treat every lab as optional decoration.",
    ],
    seed + "1"
  );
  items.push({
    prompt: `Which approach best matches the goal of this lesson (${lessonDesc.slice(0, 80)}…)?`,
    choices: q1.choices,
    correctIndex: q1.correctIndex,
    explanation: "Grade 6 history evidence includes maps, timelines, and sources — not guessing.",
    order: 1,
  });

  const q2 = rotChoices(
    "Name the broken step, then repair the model or definition from there.",
    [
      "Erase everything and pick a new random slogan.",
      "Assume the answer key is wrong and stop.",
      "Only change the final sentence until it looks familiar.",
    ],
    seed + "2"
  );
  items.push({
    prompt: `You notice a mistake related to this topic. What is the best next move?`,
    choices: q2.choices,
    correctIndex: q2.correctIndex,
    explanation: "Error analysis targets the broken step; random rewriting hides the misconception.",
    order: 2,
  });

  const q3 = rotChoices(
    pick(
      [
        "Matter has mass and takes up space.",
        "Energy can transfer or transform; it is not simply “used up.”",
        "Models need labels and limits; they are not perfect miniature Earths.",
        "Evidence beats slogans when classifying changes or interactions.",
      ],
      seed + "3c"
    ),
    [
      "Seasons happen only because Earth gets closer to the Sun in summer.",
      "If a change looks dramatic, it must be chemical — no other evidence needed.",
      "Inherited skills like bike-riding are stored as genes you can switch on.",
    ],
    seed + "3"
  );
  items.push({
    prompt: `Which statement is most historically responsible for Grade 6 history habits in Unit ${unit.n}?`,
    choices: q3.choices,
    correctIndex: q3.correctIndex,
    explanation: "Responsible habits prioritize accurate definitions, sourcing, and evidence.",
    order: 3,
  });

  return items;
}

function buildUnitQuiz(unit, lessonTitles) {
  const qs = [];
  for (let i = 0; i < 10; i++) {
    const title = lessonTitles[i % lessonTitles.length];
    const seed = `uquiz:${unit.n}:${i}:${title}`;
    const correct = pick(
      [
        `Apply the core idea of “${title}” with a labeled model and evidence.`,
        `Define key terms, then test the idea against an observation from a real context.`,
        `Reject explanations that rely on slogans without a diagram or data.`,
        `Revise a model when new evidence conflicts with the first draft.`,
      ],
      seed + "c"
    );
    const { choices, correctIndex } = rotChoices(
      correct,
      [
        "Skip models and rely on memorized catchphrases only.",
        "Change the question until an easier story appears.",
        "Treat every diagram as optional decoration.",
      ],
      seed
    );
    qs.push({
      prompt: `Unit ${unit.n} Check (${unit.title}) item ${i + 1}: Thinking about “${title},” which statement is most historically responsible?`,
      choices,
      correctIndex,
      explanation: `Unit ${unit.n} emphasizes evidence and clear explanations for ${unit.title.toLowerCase()}.`,
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
    const sectionKey = `unit-${unit.n}`;
    const id = stableId(`u${String(unit.n).padStart(2, "0")}-l${String(idx + 1).padStart(2, "0")}-${title}`);
    const handKey = `${unit.n}|${title}`;
    if (HAND_TEACH[handKey]) {
      const pack = HAND_TEACH[handKey];
      const items = pack.independent || [];
      let indep = `## Independent practice\n\nComplete each item. Show your thinking.\n\n`;
      items.forEach((it, i) => {
        indep += `${i + 1}. ${it.q}\n`;
      });
      indep += `\n### Answer key (try first)\n\n`;
      items.forEach((it, i) => {
        indep += `${i + 1}. ${it.a}\n`;
      });
      const header = `# ${title}\n\n*Grade 6 World History · Unit ${unit.n} of 9 · ${unit.title} · Lesson ${idx + 1}*\n\n`;
      const content = `${header}${pack.teach_core.trim()}\n\n${indep.trim()}\n\n${pack.exit.trim()}\n`;
      allLessons.push({
        id,
        unit: unit.n,
        unitTitle: unit.title,
        title,
        description: pack.description || desc,
        objectives: pack.objectives,
        content,
        order: globalOrder,
        durationMin: 40,
        sectionKey,
        questions: (pack.questions || []).map((q, qi) => ({
          prompt: q.prompt,
          choices: q.choices,
          correctIndex: q.correctIndex,
          explanation: q.explanation,
          order: qi + 1,
        })),
      });
      return;
    }
    const content = buildLessonBody(unit, title, desc, idx + 1);
    const objectives = [
      `• ${desc}`,
      `• Explain the idea with a labeled model, diagram, or data table.`,
      `• Cite evidence and revise when a check reveals a misconception.`,
    ].join("\n");
    allLessons.push({
      id,
      unit: unit.n,
      unitTitle: unit.title,
      title,
      description: desc,
      objectives,
      content,
      order: globalOrder,
      durationMin: 40,
      sectionKey,
      questions: buildExitQuestions(unit, title, desc),
    });
  });
}

const unitQuizzes = UNITS.map((unit) => {
  const titles = unit.lessons.map((l) => l[0]);
  return {
    id: stableId(`u${String(unit.n).padStart(2, "0")}-quiz`),
    unit: unit.n,
    title: `Unit ${unit.n} Check · ${unit.title}`,
    description: `Unit check for ${unit.title} (Grade 6 World History). Unlocks after all lessons in Unit ${unit.n} are complete. Section/unit quizzes = 60% of the course grade (lesson checks = 40%).`,
    order: unit.n,
    sectionKey: `unit-${unit.n}`,
    questions: buildUnitQuiz(unit, titles),
  };
});

mkdirSync("prisma/grade6-history", { recursive: true });
mkdirSync("content/grade6/history", { recursive: true });

const meta = {
  courseId: COURSE_ID,
  units: UNITS.map((u) => ({
    n: u.n,
    title: u.title,
    sectionKey: `unit-${u.n}`,
    lessonCount: u.lessons.length,
  })),
  lessonCount: allLessons.length,
  quizCount: unitQuizzes.length,
  generatedAt: "2026-09-29",
};

writeFileSync("content/grade6/history/outline.json", JSON.stringify(meta, null, 2));

function tsString(s) {
  return JSON.stringify(s);
}

let ts = `/**
 * Auto-generated Grade 6 World History year path (Units 1–${UNIT_TOTAL}).
 * Regenerate: node scripts/gen-grade6-history-year.mjs
 * Original Prosper Prep lesson bodies; Age-trimmed world + Texas spine; open-curriculum sequencing only.
 */
import type { LessonSeed } from "../curriculum";
import type { QuestionSeed } from "../assessments";

export const G6_HISTORY_COURSE_ID = ${tsString(COURSE_ID)};

export const G6_HISTORY_UNIT_META = ${JSON.stringify(
  UNITS.map((u) => ({
    n: u.n,
    title: u.title,
    sectionKey: `unit-${u.n}`,
    lessonCount: u.lessons.length,
  })),
  null,
  2
)} as const;

export type G6HistoryLessonRow = {
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

export const G6_HISTORY_LESSONS: G6HistoryLessonRow[] = [\n`;

for (const L of allLessons) {
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

ts += `export type G6HistoryQuizRow = {
  id: string;
  unit: number;
  title: string;
  description: string;
  order: number;
  sectionKey: string;
  questions: QuestionSeed[];
};

export const G6_HISTORY_UNIT_QUIZZES: G6HistoryQuizRow[] = ${JSON.stringify(unitQuizzes, null, 2)};\n\n`;

ts += `export function grade6ScienceYearLessons(): LessonSeed[] {
  return G6_HISTORY_LESSONS.map((L) => ({
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
        { q: \`Central aim of “\${L.title}”?\`, a: L.description },
        { q: "What should a strong science solution include?", a: "A labeled model, evidence, and a checked explanation." },
      ],
    },
  }));
}

export function grade6ScienceUnitLabel(sectionKey: string): string | null {
  const m = /^unit-(\\d+)$/.exec(sectionKey);
  if (!m) return null;
  const n = Number(m[1]);
  const meta = G6_HISTORY_UNIT_META.find((u) => u.n === n);
  if (!meta) return null;
  return \`Unit \${meta.n} of ${UNIT_TOTAL} · \${meta.title}\`;
}
`;

writeFileSync("prisma/grade6-history/year.ts", ts);

const sql = [];
sql.push("-- Grade 6 World History full-year path (9 units). Generated by scripts/gen-grade6-history-year.mjs");
sql.push("-- Safe for production D1: does NOT wipe users/enrollments. Do NOT run db:setup.");
sql.push("-- Retires old 9 science stubs + old section quizzes; INSERTs year lessons + unit checks.");
sql.push("");
sql.push(`UPDATE "Course" SET "title" = 'World History · Grade 6', "description" = '${esc(
  "Full-year Grade 6 World History at Prosper Preparatory (World History): 9 units (Properties of matter through Traits and the environment), with practice and unit checks. Lesson checks = 40%; unit checks = 60%. Latest attempt counts."
)}' WHERE "id" = '${COURSE_ID}';`);
sql.push("");

let retireOrder = 900;
for (const id of OLD_STUBS) {
  sql.push(
    `UPDATE "Lesson" SET "sectionKey" = 'retired', "order" = ${retireOrder}, "title" = '[Archived stub] ' || "title", "description" = 'Archived — replaced by full-year Grade 6 World History path.' WHERE "id" = '${id}' AND "courseId" = '${COURSE_ID}' AND "sectionKey" != 'retired';`
  );
  retireOrder += 1;
}
sql.push("");

for (const qid of OLD_QUIZZES) {
  sql.push(`DELETE FROM "Question" WHERE "quizId" = '${qid}';`);
  sql.push(`DELETE FROM "Attempt" WHERE "quizId" = '${qid}';`);
  sql.push(`DELETE FROM "Quiz" WHERE "id" = '${qid}';`);
}
sql.push("");

for (const L of allLessons) {
  sql.push(
    `INSERT INTO "Lesson" ("id","courseId","title","description","content","objectives","order","durationMin","sectionKey","videoUrl") VALUES ('${L.id}','${COURSE_ID}','${esc(L.title)}','${esc(L.description)}','${esc(L.content)}','${esc(L.objectives)}',${L.order},${L.durationMin},'${L.sectionKey}',NULL) ON CONFLICT("id") DO UPDATE SET "title"=excluded."title","description"=excluded."description","content"=excluded."content","objectives"=excluded."objectives","order"=excluded."order","durationMin"=excluded."durationMin","sectionKey"=excluded."sectionKey","courseId"=excluded."courseId";`
  );
  sql.push(`DELETE FROM "Question" WHERE "lessonId" = '${L.id}';`);
  for (const q of L.questions) {
    const qid = stableId(`q-${L.id}-${q.order}`);
    sql.push(
      `INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('${qid}','${L.id}',NULL,'MULTIPLE_CHOICE','${esc(q.prompt)}','${esc(JSON.stringify(q.choices))}',${q.correctIndex},'${esc(q.explanation)}',1,${q.order}) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";`
    );
  }
  sql.push("");
}

for (const Q of unitQuizzes) {
  sql.push(
    `INSERT INTO "Quiz" ("id","courseId","title","description","order","sectionKey") VALUES ('${Q.id}','${COURSE_ID}','${esc(Q.title)}','${esc(Q.description)}',${Q.order},'${Q.sectionKey}') ON CONFLICT("id") DO UPDATE SET "title"=excluded."title","description"=excluded."description","order"=excluded."order","sectionKey"=excluded."sectionKey","courseId"=excluded."courseId";`
  );
  sql.push(`DELETE FROM "Question" WHERE "quizId" = '${Q.id}';`);
  for (const q of Q.questions) {
    const qid = stableId(`qq-${Q.id}-${q.order}`);
    sql.push(
      `INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('${qid}',NULL,'${Q.id}','MULTIPLE_CHOICE','${esc(q.prompt)}','${esc(JSON.stringify(q.choices))}',${q.correctIndex},'${esc(q.explanation)}',1,${q.order}) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";`
    );
  }
  sql.push("");
}

writeFileSync("migrations/0010_grade6_history_year.sql", sql.join("\n"));

const avgLen = allLessons.reduce((s, L) => s + L.content.length, 0) / allLessons.length;
console.log(
  JSON.stringify(
    {
      lessons: allLessons.length,
      units: UNITS.length,
      unitQuizzes: unitQuizzes.length,
      avgContentChars: Math.round(avgLen),
      minContentChars: Math.min(...allLessons.map((L) => L.content.length)),
      maxContentChars: Math.max(...allLessons.map((L) => L.content.length)),
      sqlBytes: Buffer.byteLength(sql.join("\n")),
    },
    null,
    2
  )
);
