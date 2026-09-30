/**
 * Generate Grade 6 Science full-year content (10 TEKS units) + D1 migration SQL.
 * Original Prosper Prep prose; NASA/USGS PD + CKSci-aligned scope; Khan TX map = sequencing only.
 * Run: node scripts/gen-grade6-science-year.mjs
 *
 * HARD RULE: Teach layers are HAND-AUTHORED in scripts/data/grade6-science-hand-teach.json
 * (built by scripts/build-esh-hand-rewrites.mjs). Merge hand packs; never Mad-Lib overwrite.
 */
import { writeFileSync, mkdirSync, readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";

/** Hand teach packs (migration 0018). Never Mad-Lib overwrite when present. */
const HAND_TEACH = existsSync("scripts/data/grade6-science-hand-teach.json")
  ? JSON.parse(readFileSync("scripts/data/grade6-science-hand-teach.json", "utf8"))
  : {};

const COURSE_ID = "cmuh9bwv803vyedanwfbbyd4j";
const UNIT_TOTAL = 10;

const OLD_STUBS = [
  "cmuh9bwv803w0edanibeburjg",
  "cmuh9bwvc03weedan0apxjkdj",
  "cmuh9bwvg03wsedan9u35jmlp",
  "cmuh9bwvj03x6edan3ay7fjo8",
  "cmuh9bwvn03xkedang1d59hhn",
  "cmuh9bwvr03xyedanbngqho9w",
  "cmuh9bwvu03ycedan5efyq7h9",
  "cmuh9bwvx03yqedanf8fathcl",
  "cmuh9bww003z4edanucjlvyuq",
];

const OLD_QUIZZES = [
  "cmuh9bww403ziedan5tk4qlsh",
  "cmuh9bwwb0404edanlzmcm1t5",
  "cmuh9bwwh040qedanjh9geb5m",
];

function stableId(slug) {
  const h = createHash("sha256").update(`ppg6s:${slug}`).digest("hex").slice(0, 20);
  return `ppg6s${h}`;
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

/** Khan TX TEKS G6 map (skip Teacher resources) → PP brand titles. */
const UNITS = [
  {
    n: 1,
    title: "Properties of Matter",
    sourceNote: "Scope affinity with CKSci matter units and TEKS physical properties; NASA/USGS public-domain contexts used as hooks where relevant",
    khanNote: "Khan TX G6 Science · Properties of matter",
    lessons: [
      ["What Scientists Mean by Matter", "Define matter as anything that has mass and takes up space; separate matter from energy and ideas."],
      ["States of Matter: Solid, Liquid, Gas", "Compare solids, liquids, and gases by shape, volume, and particle motion."],
      ["Particle Model Thinking", "Use a simple particle model to explain freezing, melting, and evaporation."],
      ["Measuring Mass and Volume", "Measure mass and volume carefully; choose tools that match the sample."],
      ["Density as a Physical Property", "Compute and compare density; predict float/sink relative to a fluid."],
      ["Pure Substances vs Mixtures", "Distinguish pure substances from homogeneous and heterogeneous mixtures."],
      ["Physical Properties Lab Habits", "Plan fair tests of physical properties: control variables and record units."],
      ["Physical Changes Around Us", "Identify physical changes that rearrange matter without making a new substance."],
      ["Matter Unit Synthesis", "Connect particle ideas, density, and mixtures in one evidence-based explanation."],
    ],
  },
  {
    n: 2,
    title: "Elements and Chemical Changes",
    sourceNote: "CKSci/TEKS affinity: elements, periodic table groupings, chemical change evidence",
    khanNote: "Khan TX G6 Science · Elements and chemical changes",
    lessons: [
      ["Elements as Building Blocks", "Explain that elements are pure substances made of one kind of atom."],
      ["Reading the Periodic Table", "Locate metals, nonmetals, and metalloids and describe shared physical properties."],
      ["Metals, Nonmetals, and Metalloids", "Compare conductivity, luster, and malleability across element classes."],
      ["Compounds vs Elements", "Distinguish compounds from elements using composition language."],
      ["Evidence of Chemical Change", "List evidence (gas, color, temperature, precipitate) that a new substance may form."],
      ["Physical vs Chemical Change Sort", "Classify everyday changes and justify with evidence, not slogans."],
      ["Conservation of Mass Intro", "Argue that mass is conserved in closed-system chemical changes at intro level."],
      ["Chemical Changes Unit Review", "Synthesize element identity, compounds, and chemical-change evidence."],
    ],
  },
  {
    n: 3,
    title: "Forces",
    sourceNote: "TEKS force & motion; NASA PD examples (rockets, orbits) as optional hooks — original PP instruction",
    khanNote: "Khan TX G6 Science · Forces",
    lessons: [
      ["What Is a Force?", "Define force as a push or pull; measure force conceptually in newtons."],
      ["Contact and Noncontact Forces", "Classify gravity, friction, magnetism, applied, and normal forces."],
      ["Gravity Near Earth", "Describe gravity as an attractive force toward Earth’s center; connect to weight."],
      ["Friction Helps and Hinders", "Explain how friction can start, stop, or slow motion depending on the situation."],
      ["Magnetism Basics", "Describe magnetic poles and attraction/repulsion without treating magnets as magic."],
      ["Balanced and Unbalanced Forces", "Decide whether forces are balanced; predict constant motion vs acceleration."],
      ["Net Force on a Line", "Calculate simple one-dimensional net force from force diagrams."],
      ["Action–Reaction Pairs Intro", "Identify force pairs that are equal and opposite on interacting objects."],
      ["Forces Unit Synthesis", "Explain a real motion story using force types, net force, and evidence."],
    ],
  },
  {
    n: 4,
    title: "Energy",
    sourceNote: "TEKS energy; CKSci energy transfer themes; original PP examples",
    khanNote: "Khan TX G6 Science · Energy",
    lessons: [
      ["Energy as the Ability to Cause Change", "Define energy and distinguish forms without inventing energy from nowhere."],
      ["Kinetic Energy", "Relate kinetic energy to mass and speed qualitatively."],
      ["Gravitational Potential Energy", "Relate GPE to height and mass in everyday contexts."],
      ["Elastic and Chemical Potential Energy", "Identify stored energy in springs, rubber bands, food, and fuels at intro level."],
      ["Energy Transfers and Transformations", "Track energy as it transfers between objects or transforms between forms."],
      ["Conservation of Energy Habit", "Use conservation language: energy changes form; totals stay accountable in a system."],
      ["Waves Transfer Energy", "Describe waves as energy movers that do not permanently transport the medium."],
      ["Energy Unit Review", "Mixed practice connecting KE, PE, transfers, and conservation language."],
    ],
  },
  {
    n: 5,
    title: "Earth-Sun-Moon System",
    sourceNote: "NASA public-domain Earth/Moon/Sun imagery and explanations inform context; PP writes original student text",
    khanNote: "Khan TX G6 Science · Earth-Sun-Moon system",
    lessons: [
      ["Earth’s Place in the Solar System", "Locate Earth among the Sun and planets; scale ideas with humility about distances."],
      ["Day and Night", "Explain day/night using Earth’s rotation — not the Sun “going away.”"],
      ["Seasons and Tilt", "Connect seasons to Earth’s tilt and orbit, not to distance-from-Sun myths."],
      ["Moon Phases from Earth", "Predict moon phase patterns from relative positions of Earth, Moon, and Sun."],
      ["Solar and Lunar Eclipses", "Model why eclipses are rare using shadow geometry."],
      ["Tides Intro", "Connect tidal patterns to the Moon’s gravitational influence at an intro level."],
      ["Scale Models and Limits", "Critique classroom models: what they show well and what they distort."],
      ["Earth-Sun-Moon Unit Synthesis", "Explain one phenomenon (season, phase, or eclipse) with a labeled model + CER."],
    ],
  },
  {
    n: 6,
    title: "Earth’s Systems and Structure",
    sourceNote: "USGS PD geology/earth-system resources + CKSci Earth systems affinity; original PP prose",
    khanNote: "Khan TX G6 Science · Earth’s systems and structure",
    lessons: [
      ["Earth’s Spheres Overview", "Name geosphere, hydrosphere, atmosphere, and biosphere and give one interaction."],
      ["Layers of Earth (Intro)", "Describe crust, mantle, and core at a Grade 6 model level."],
      ["Rocks and the Rock Cycle", "Connect igneous, sedimentary, and metamorphic rocks through processes."],
      ["Plate Tectonics Basics", "Explain that plates move slowly and cause earthquakes, volcanoes, and mountain building."],
      ["Texas Geology Hooks", "Connect East Texas landscapes to sedimentary history and resources without oversimplifying."],
      ["Weathering, Erosion, Deposition", "Distinguish weathering from erosion and deposition with local examples."],
      ["Water Cycle as a System", "Trace water through evaporation, condensation, precipitation, and runoff."],
      ["Earth Systems Unit Review", "Explain a change (flood, landslide, or rock formation) across multiple spheres."],
    ],
  },
  {
    n: 7,
    title: "Managing and Protecting Natural Resources",
    sourceNote: "USGS/EPA public education themes on resources and stewardship; original PP instruction",
    khanNote: "Khan TX G6 Science · Managing and protecting natural resources",
    lessons: [
      ["Natural Resources Inventory", "Classify renewable and nonrenewable resources with Texas-relevant examples."],
      ["Energy Resources Tradeoffs", "Compare resource options using evidence about availability, impact, and cost — not slogans."],
      ["Water as a Precious Resource", "Explain why freshwater management matters in Texas climates."],
      ["Soil and Land Use", "Connect soil health to farming, runoff, and erosion control."],
      ["Human Impact Evidence", "Use data (not vibes) to describe how human activity can help or harm systems."],
      ["Conservation and Stewardship Habits", "Propose practical stewardship actions tied to science explanations."],
      ["Resources Unit Synthesis", "Argue for one management choice using claims, evidence, and tradeoffs."],
    ],
  },
  {
    n: 8,
    title: "Interactions in Ecosystems",
    sourceNote: "CKSci ecosystems affinity; original PP East Texas habitat examples",
    khanNote: "Khan TX G6 Science · Interactions in ecosystems",
    lessons: [
      ["Ecosystem Components", "Distinguish biotic and abiotic factors in a local ecosystem model."],
      ["Habitats and Niches", "Explain habitat vs niche with concrete organism examples."],
      ["Food Chains and Food Webs", "Trace energy flow; prefer webs over single chains for realism."],
      ["Producers, Consumers, Decomposers", "Classify roles and explain why decomposers matter."],
      ["Competition and Predation", "Describe interactions that shape populations without moralizing animals."],
      ["Symbiosis Intro", "Identify mutualism, commensalism, and parasitism with evidence."],
      ["Ecosystem Changes and Stability", "Predict how removing a key species or resource can ripple through a web."],
      ["Ecosystems Unit Review", "Build a mini food web and justify two interaction claims with evidence."],
    ],
  },
  {
    n: 9,
    title: "Cells and Organisms",
    sourceNote: "CKSci cell biology affinity; original PP microscope/model instruction",
    khanNote: "Khan TX G6 Science · Cells and organisms",
    lessons: [
      ["Cells as Building Blocks", "Argue that living things are made of cells; connect structure to function at intro level."],
      ["Plant vs Animal Cells", "Compare key organelles students can map on diagrams (cell wall, chloroplast, etc.)."],
      ["Microscope Habits", "Practice responsible observation: focus, scale, and honest drawings."],
      ["Unicellular and Multicellular Life", "Contrast single-celled organisms with multicellular organization."],
      ["Organization: Cells to Systems", "Sequence cells → tissues → organs → systems with a human or plant example."],
      ["Photosynthesis Overview", "Explain that plants capture light energy to make sugars; write inputs/outputs carefully."],
      ["Human Body Systems Intro", "Map how two systems work together (e.g., respiratory + circulatory)."],
      ["Cells & Organisms Unit Synthesis", "Use a diagram + CER to connect cell structures to organism needs."],
    ],
  },
  {
    n: 10,
    title: "Traits and the Environment",
    sourceNote: "CKSci heredity/variation affinity; original PP examples — no fatalism about ability",
    khanNote: "Khan TX G6 Science · Traits and the environment",
    lessons: [
      ["Traits We Can Observe", "Distinguish inherited traits from learned behaviors and environmental effects."],
      ["Variation Within a Species", "Explain why variation matters for survival in changing conditions."],
      ["Genes as Instructions (Intro)", "Introduce genes as inherited instructions without overclaiming DNA detail."],
      ["Environment Shapes Expression", "Give examples where environment influences how traits appear (height nutrition, etc.)."],
      ["Adaptations Are Not Wishes", "Define adaptations as heritable traits that help survival/reproduction in a habitat."],
      ["Selective Pressures Stories", "Reason about how conditions can favor certain variations over generations (intro)."],
      ["Traits Unit Review", "Sort claim types: inherited, environmental, both — with evidence."],
      ["Year Capstone: Systems Thinking", "Connect matter/energy, Earth systems, ecosystems, and traits in one stewardship CER."],
    ],
  },
];

const CONTEXTS = [
  "a Prosper Prep science lab station",
  "an East Texas piney woods trail near Tyler",
  "a family garden plot after rain",
  "a school recycling audit",
  "a night sky watch from a dark parking lot",
  "a creek-bank soil sample",
  "a basketball on the gym floor",
  "a kitchen density demo with oil and water",
  "a USGS streamflow map for a Texas river",
  "a NASA Moon-phase calendar printout",
];

const MISTAKES = [
  "saying seasons happen because Earth is closer to the Sun in summer",
  "calling every bubbling change a chemical change without other evidence",
  "treating density as the same as mass",
  "drawing force arrows that ignore direction or equal-length action–reaction pairs",
  "saying energy is “used up” instead of transferred or transformed",
  "confusing weathering (breaking down) with erosion (moving material)",
  "drawing a food chain that has energy flowing the wrong direction",
  "calling the Moon’s light “its own fire” instead of reflected sunlight",
  "claiming acquired skills (like riding a bike) are inherited genes",
  "treating models as exact miniature Earths with perfect distances",
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
    1: ["matter", "mass", "volume", "density", "particle", "mixture", "pure substance"],
    2: ["element", "atom", "compound", "metal", "nonmetal", "chemical change", "physical change"],
    3: ["force", "newton", "gravity", "friction", "net force", "balanced", "unbalanced"],
    4: ["kinetic energy", "potential energy", "transfer", "transformation", "conservation", "wave"],
    5: ["rotation", "revolution", "tilt", "phase", "eclipse", "tide", "scale model"],
    6: ["geosphere", "hydrosphere", "atmosphere", "biosphere", "plate", "erosion", "rock cycle"],
    7: ["renewable", "nonrenewable", "stewardship", "tradeoff", "conservation", "runoff"],
    8: ["biotic", "abiotic", "producer", "consumer", "decomposer", "food web", "niche"],
    9: ["cell", "organelle", "tissue", "organ", "system", "photosynthesis", "multicellular"],
    10: ["trait", "inherited", "variation", "gene", "adaptation", "environment", "selective pressure"],
  };

  const bank = vocabBanks[unit.n] || vocabBanks[1];
  const v1 = bank[hash(seed) % bank.length];
  const v2 = bank[(hash(seed + "v") + 1) % bank.length];

  const guided = [
    {
      q: `Guided 1 — In the context of ${ctx}, restate today’s goal (“${lessonTitle}”) in your own words, then list two observations you would collect.`,
      a: `Goal restates ${lessonDesc.slice(0, 60)}… Observations should be measurable or clearly describable with units/labels.`,
    },
    {
      q: `Guided 2 — Use the terms **${v1}** and **${v2}** correctly in two sentences that could appear in a lab notebook.`,
      a: `Sentences show accurate definitions and connect to the lesson phenomenon; no circular “it is what it is.”`,
    },
  ];

  const indep = [];
  for (let i = 1; i <= 6; i++) {
    const nn = nums(seed + ":p" + i, 2 + i);
    indep.push({
      q: `Problem ${i}: Apply “${lessonTitle}” to a short scenario about ${pick(CONTEXTS, seed + i)}. Include a labeled sketch or table and one evidence sentence. (Optional numbers to use if helpful: ${nn.a}, ${nn.b}, ${nn.f}.)`,
      a: `Strong responses define key terms, show a representation, and cite evidence tied to ${lessonDesc.slice(0, 50)}…`,
    });
  }

  const parts = [];
  parts.push(`# ${lessonTitle}`);
  parts.push("");
  parts.push(`*Grade 6 Science · ${unitLabel} · Lesson ${orderInUnit}*`);
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
    `Today’s skill — **${lessonTitle}** — sits inside **${unit.title}**. Grade 6 science is not a pile of trivia; it is a set of models that help us explain patterns in matter, energy, Earth systems, and living things. A correct vocabulary word with no model or evidence is weaker than a clear diagram plus a checked explanation.`
  );
  parts.push("");
  parts.push(`### Why it matters`);
  parts.push("");
  parts.push(
    `Families use these ideas when reading weather maps, judging product claims, understanding local land and water, or talking about health and stewardship. At Prosper Prep we also connect careful science habits to scholarship habits: define terms, show your model, cite evidence, and revise when new data arrives.`
  );
  parts.push("");
  parts.push(`### Language bank`);
  parts.push("");
  parts.push(`- **${v1}** — use this word with a definition in your own sentence, not as decoration.`);
  parts.push(`- **${v2}** — pair it with an example from ${ctx}.`);
  parts.push(
    `- **Evidence** beats slogans. Prefer “I observed… which supports…” over “because science says so.”`
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
    `**Step 2 — Choose a representation.** Particle sketch, force diagram, Earth–Sun–Moon model, food web, data table, or systems map — pick what matches the question.`
  );
  parts.push(
    `**Step 3 — Apply the science idea.** Connect observations to the definition of ${v1}. If numbers help (for example relative amounts ${n.a} and ${n.b}), label units.`
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
      `Physical science ideas about matter and change set up later force, energy, and Earth-system explanations.`
    );
  } else if (unit.n <= 4) {
    parts.push(
      `Forces and energy explain *why* objects move and *how* changes happen without inventing energy from nowhere.`
    );
  } else if (unit.n <= 7) {
    parts.push(
      `Earth and space systems connect models of motion and matter to landscapes, resources, and stewardship.`
    );
  } else {
    parts.push(
      `Life science builds on matter/energy: organisms are systems that transform energy and pass on traits in environments.`
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
    `2. **Error hunt:** A fictional student wrote only “because of science” with no model. What two follow-up questions should you ask before accepting the answer?`
  );
  parts.push("");
  parts.push(`## Independent practice`);
  parts.push("");
  parts.push(`Complete each item with visible work. Aim for clear models + evidence sentences.`);
  parts.push("");
  indep.forEach((p, i) => {
    parts.push(`${i + 1}. ${p.q}`);
  });
  parts.push("");
  parts.push(`### Answer key (try first)`);
  parts.push("");
  parts.push(`*Check your work only after you attempt each item. Show your model and evidence, not only a final word.*`);
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
    explanation: "Grade 6 science evidence includes models + evidence, not guessing.",
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
    prompt: `Which statement is most scientifically responsible for Grade 6 science habits in Unit ${unit.n}?`,
    choices: q3.choices,
    correctIndex: q3.correctIndex,
    explanation: "Responsible habits prioritize accurate definitions, models, and evidence.",
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
      prompt: `Unit ${unit.n} Check (${unit.title}) item ${i + 1}: Thinking about “${title},” which statement is most scientifically responsible?`,
      choices,
      correctIndex,
      explanation: `Unit ${unit.n} emphasizes models and evidence for ${unit.title.toLowerCase()}.`,
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
      const header = `# ${title}\n\n*Grade 6 Science · Unit ${unit.n} of 10 · ${unit.title} · Lesson ${idx + 1}*\n\n`;
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
    description: `Unit check for ${unit.title} (Grade 6 Science). Unlocks after all lessons in Unit ${unit.n} are complete. Section/unit quizzes = 60% of the course grade (lesson checks = 40%).`,
    order: unit.n,
    sectionKey: `unit-${unit.n}`,
    questions: buildUnitQuiz(unit, titles),
  };
});

mkdirSync("prisma/grade6-science", { recursive: true });
mkdirSync("content/grade6/science", { recursive: true });

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

writeFileSync("content/grade6/science/outline.json", JSON.stringify(meta, null, 2));

function tsString(s) {
  return JSON.stringify(s);
}

let ts = `/**
 * Auto-generated Grade 6 Science year path (Units 1–${UNIT_TOTAL}).
 * Regenerate: node scripts/gen-grade6-science-year.mjs
 * Prosper Prep Grade 6 Science lesson bodies (no third-party attribution in student text).
 */
import type { LessonSeed } from "../curriculum";
import type { QuestionSeed } from "../assessments";

export const G6_SCIENCE_COURSE_ID = ${tsString(COURSE_ID)};

export const G6_SCIENCE_UNIT_META = ${JSON.stringify(
  UNITS.map((u) => ({
    n: u.n,
    title: u.title,
    sectionKey: `unit-${u.n}`,
    lessonCount: u.lessons.length,
  })),
  null,
  2
)} as const;

export type G6ScienceLessonRow = {
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

export const G6_SCIENCE_LESSONS: G6ScienceLessonRow[] = [\n`;

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

ts += `export type G6ScienceQuizRow = {
  id: string;
  unit: number;
  title: string;
  description: string;
  order: number;
  sectionKey: string;
  questions: QuestionSeed[];
};

export const G6_SCIENCE_UNIT_QUIZZES: G6ScienceQuizRow[] = ${JSON.stringify(unitQuizzes, null, 2)};\n\n`;

ts += `export function grade6ScienceYearLessons(): LessonSeed[] {
  return G6_SCIENCE_LESSONS.map((L) => ({
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
  const meta = G6_SCIENCE_UNIT_META.find((u) => u.n === n);
  if (!meta) return null;
  return \`Unit \${meta.n} of ${UNIT_TOTAL} · \${meta.title}\`;
}
`;

writeFileSync("prisma/grade6-science/year.ts", ts);

const sql = [];
sql.push("-- Grade 6 Science full-year path (10 units). Generated by scripts/gen-grade6-science-year.mjs");
sql.push("-- Safe for production D1: does NOT wipe users/enrollments. Do NOT run db:setup.");
sql.push("-- Retires old 9 science stubs + old section quizzes; INSERTs year lessons + unit checks.");
sql.push("");
sql.push(`UPDATE "Course" SET "title" = 'Life & Earth Science · Grade 6', "description" = '${esc(
  "Full-year Grade 6 Science at Prosper Preparatory (Life & Earth Science): 10 units (Properties of matter through Traits and the environment), with practice and unit checks. Lesson checks = 40%; unit checks = 60%. Latest attempt counts."
)}' WHERE "id" = '${COURSE_ID}';`);
sql.push("");

let retireOrder = 900;
for (const id of OLD_STUBS) {
  sql.push(
    `UPDATE "Lesson" SET "sectionKey" = 'retired', "order" = ${retireOrder}, "title" = '[Archived stub] ' || "title", "description" = 'Archived — replaced by full-year Grade 6 Science path.' WHERE "id" = '${id}' AND "courseId" = '${COURSE_ID}' AND "sectionKey" != 'retired';`
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

writeFileSync("migrations/0009_grade6_science_year.sql", sql.join("\n"));

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
