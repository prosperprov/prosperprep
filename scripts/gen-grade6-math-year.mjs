/**
 * Generate Grade 6 Math full-year content (11 units) + content UPDATE migration.
 * Prosper Prep teaching text — no competitor attribution in student-facing bodies.
 * Run: node scripts/gen-grade6-math-year.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";

const COURSE_ID = "cmuh9bwto03qledantwv3vsfd";

/** Old stub lessons to retire (hide from year path). */
const OLD_STUBS = [
  "cmuh9bwto03qnedanvih6z14d",
  "cmuh9bwtr03r1edan8kg5e9r2",
  "cmuh9bwtv03rfedancwrbm2nn",
  "cmuh9bwtz03rtedansyz477gk",
  "cmuh9bwu203s7edanr21u7izr",
  "cmuh9bwua03sledan9lf6ng8h",
  "cmuh9bwud03szedandz6bpqqp",
  "cmuh9bwuh03tdedanc453vboy",
  "cmuh9bwul03tredan7mfjaneg",
];

const OLD_QUIZZES = [
  "cmuh9bwuq03u5edan5n56ytbx", // section-1
  "cmuh9bwuv03uredanjc8x364s", // section-2
  "cmuh9bwv203vdedanwg669pu2", // section-3
];

function stableId(slug) {
  const h = createHash("sha256").update(`ppg6m:${slug}`).digest("hex").slice(0, 20);
  return `ppg6m${h}`;
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

/** Full-year outline: 11 units, Grade 6 skill progression. */
const UNITS = [
  {
    n: 1,
    title: "Ratios",
    lessons: [
      ["What Is a Ratio?", "Compare two quantities with order that matters; write a:b, a to b, and a/b."],
      ["Equivalent Ratios", "Scale ratios up and down; recognize equivalent ratios in tables."],
      ["Ratio Tables", "Build and read ratio tables to solve missing-value problems."],
      ["Double Number Lines", "Model equivalent ratios on double number lines."],
      ["Part-to-Part and Part-to-Whole", "Distinguish part-to-part from part-to-whole comparisons."],
      ["Simplifying Ratios", "Rewrite ratios in simplest whole-number form."],
      ["Comparing Ratios", "Decide which ratio is greater using equivalent forms or unit thinking."],
      ["Ratio Word Problems", "Solve multi-step ratio stories with tables and diagrams."],
      ["Mixing and Recipes", "Scale recipes and mixtures while keeping ratios constant."],
      ["Ratio Unit Review", "Synthesize ratio representations and catch common mistakes."],
    ],
  },
  {
    n: 2,
    title: "Arithmetic with Rational Numbers",
    lessons: [
      ["Fraction Sense Refresh", "Review fraction meaning, equivalence, and benchmarks on a number line."],
      ["Adding and Subtracting Fractions", "Add/subtract with like and unlike denominators; estimate first."],
      ["Multiplying Fractions", "Multiply fractions and mixed numbers; interpret area models."],
      ["Dividing Fractions by Whole Numbers", "Interpret division as sharing and partitioning."],
      ["Dividing by a Fraction", "Use keep-change-flip with meaning; check with multiplication."],
      ["Mixed Numbers and Improper Fractions", "Convert fluently; choose the form that fits the problem."],
      ["Decimal Place Value", "Read, write, and compare decimals through thousandths."],
      ["Adding and Subtracting Decimals", "Align place values; estimate to catch errors."],
      ["Multiplying and Dividing Decimals", "Compute with place-value reasoning and estimation checks."],
      ["Fraction–Decimal Connections", "Move fluently between fractions and decimals in context."],
    ],
  },
  {
    n: 3,
    title: "Rates and Percentages",
    lessons: [
      ["Unit Rates", "Find 'how many per one' and use unit rates to compare options."],
      ["Speed, Price, and Work Rates", "Apply unit rates to speed, unit price, and work contexts."],
      ["Complex Rate Tables", "Extend rate tables for multi-step planning problems."],
      ["Percent as Per Hundred", "Define percent; convert among fractions, decimals, and percents."],
      ["Percent of a Number", "Find a percent of a quantity with decimals or benchmark methods."],
      ["Finding the Whole from a Percent", "Work backwards from a part and a percent to the whole."],
      ["Percent Increase and Decrease", "Compute and interpret percent change."],
      ["Tax, Tip, and Discount", "Solve everyday money percent problems carefully."],
      ["Percent Error and Estimation", "Use estimation and percent error thinking to check reasonableness."],
      ["Rates & Percents Unit Review", "Mixed practice connecting rates, ratios, and percents."],
    ],
  },
  {
    n: 4,
    title: "Exponents and Order of Operations",
    lessons: [
      ["Powers as Repeated Multiplication", "Interpret a^n as n factors of a for whole-number exponents."],
      ["Evaluating Powers", "Evaluate numerical powers and compare sizes."],
      ["Order of Operations Foundations", "Apply parentheses, exponents, multiply/divide, add/subtract consistently."],
      ["Expressions with Grouping Symbols", "Use parentheses and brackets to control evaluation order."],
      ["Exponents in Area and Volume Contexts", "Connect squares and cubes to geometric meaning."],
      ["Writing Expressions with Exponents", "Translate verbal phrases that include powers."],
      ["Common Order Mistakes", "Diagnose and fix classic PEMDAS/GEMS errors."],
      ["Exponents & Order Unit Review", "Mixed fluency with powers and multi-step expressions."],
    ],
  },
  {
    n: 5,
    title: "Negative Numbers",
    lessons: [
      ["Integers on the Number Line", "Plot integers; interpret left/right of zero."],
      ["Opposites and Absolute Value", "Define opposite and absolute value as distance from zero."],
      ["Comparing and Ordering Integers", "Order signed numbers using the number line."],
      ["Real-World Signed Quantities", "Model temperature, elevation, debt, and sports scores."],
      ["Rational Numbers Beyond Integers", "Place fractions and decimals on both sides of zero."],
      ["Distance Between Signed Numbers", "Compute distances on the number line with absolute value."],
      ["Coordinate Thinking Preview", "Connect signed numbers to horizontal/vertical moves."],
      ["Comparing Rational Numbers", "Compare mixed signed fractions and decimals."],
      ["Negative Numbers in Stories", "Write and interpret signed-number story problems."],
      ["Negative Numbers Unit Review", "Synthesize plotting, comparing, and absolute value."],
    ],
  },
  {
    n: 6,
    title: "Variables & Expressions",
    lessons: [
      ["What Is a Variable?", "Use letters to stand for numbers that can change."],
      ["Writing Algebraic Expressions", "Translate verbal phrases into expressions."],
      ["Evaluating Expressions", "Substitute values and simplify carefully."],
      ["Terms, Coefficients, and Constants", "Name parts of an expression precisely."],
      ["Like Terms", "Identify and combine like terms."],
      ["The Distributive Property", "Expand a(b+c) and recognize factored forms."],
      ["Equivalent Expressions", "Decide when two expressions are equivalent."],
      ["Expressions from Diagrams", "Write expressions for perimeter, cost, and patterned figures."],
      ["From Tables to Expressions", "Notice patterns in tables and write a matching expression."],
      ["Variables & Expressions Unit Review", "Mixed practice on writing, evaluating, and simplifying."],
    ],
  },
  {
    n: 7,
    title: "Equations & Inequalities",
    lessons: [
      ["Equations vs Expressions", "Distinguish equations (balance) from expressions."],
      ["One-Step Addition and Subtraction Equations", "Solve with inverse operations; check solutions."],
      ["One-Step Multiplication and Division Equations", "Solve ax=b and x/a=b forms."],
      ["Modeling with One-Step Equations", "Write equations from word problems and solve."],
      ["What Is an Inequality?", "Interpret <, >, ≤, ≥ with number-line meaning."],
      ["Graphing Inequalities on a Number Line", "Graph solution sets with open/closed circles."],
      ["Writing Inequalities from Stories", "Translate constraints into inequalities."],
      ["Checking Solutions in Inequalities", "Test candidate values; explain why they work or fail."],
      ["Equations & Inequalities Mistakes", "Catch sign errors and balance mistakes."],
      ["Equations & Inequalities Unit Review", "Mixed one-step equations and inequality practice."],
    ],
  },
  {
    n: 8,
    title: "Plane Figures",
    lessons: [
      ["Area Meaning and Square Units", "Define area as covering; choose correct square units."],
      ["Area of Rectangles and Parallelograms", "Use base × height with perpendicular height."],
      ["Area of Triangles", "Use A = ½bh; connect triangles to parallelograms."],
      ["Choosing Base and Height", "Identify valid base–height pairs on tilted figures."],
      ["Area of Trapezoids (Intro)", "Decompose or use average-bases thinking."],
      ["Composite Plane Figures", "Decompose complex shapes into rectangles and triangles."],
      ["Polygons and Perimeter Connections", "Relate perimeter and area; avoid mixing them up."],
      ["Plane Figures Unit Review", "Mixed area problems with units and decomposition."],
    ],
  },
  {
    n: 9,
    title: "Coordinate Plane",
    lessons: [
      ["Axes, Origin, and Ordered Pairs", "Plot (x,y) and read coordinates accurately."],
      ["Four Quadrants", "Identify quadrants and signs of coordinates."],
      ["Reflecting Points", "Reflect across axes; describe coordinate changes."],
      ["Distances on Horizontal and Vertical Segments", "Find lengths of axis-aligned segments."],
      ["Polygons on the Coordinate Plane", "Plot vertices and compute side lengths/areas when aligned."],
      ["Coordinate Plane Stories", "Model maps and simple journeys with coordinates."],
      ["From Tables to Graphs", "Plot ratio/relationship tables on the plane."],
      ["Coordinate Plane Unit Review", "Mixed plotting, distance, and quadrant practice."],
    ],
  },
  {
    n: 10,
    title: "3D Figures",
    lessons: [
      ["Prisms and Pyramids Overview", "Name 3D figures; count faces, edges, vertices."],
      ["Nets of Rectangular Prisms", "Match nets to solids; sketch valid nets."],
      ["Surface Area from Nets", "Compute surface area by summing face areas."],
      ["Surface Area Formula for Rectangular Prisms", "Use SA = 2lw + 2lh + 2wh with meaning."],
      ["Volume as Filling Space", "Define volume with cubic units; pack unit cubes."],
      ["Volume of Rectangular Prisms", "Use V = lwh and V = Bh."],
      ["Surface Area vs Volume", "Choose the right measure for wrapping vs filling."],
      ["3D Figures Unit Review", "Mixed nets, SA, and volume problems."],
    ],
  },
  {
    n: 11,
    title: "Data and Statistics",
    lessons: [
      ["Statistical Questions", "Distinguish questions that anticipate variability."],
      ["Collecting and Organizing Data", "Use tables and tallies; discuss fair samples at intro level."],
      ["Dot Plots", "Build and read dot plots; describe clusters."],
      ["Histograms Intro", "Read histograms; choose bin awareness."],
      ["Measures of Center: Mean", "Compute and interpret the mean."],
      ["Measures of Center: Median", "Find medians; compare mean vs median briefly."],
      ["Spread: Range and MAD Intro", "Describe spread with range and intro MAD ideas."],
      ["Shape of a Distribution", "Describe symmetric, skewed, and clustered shapes."],
      ["Comparing Distributions", "Compare two simple data sets with center and spread language."],
      ["Data & Statistics Unit Review", "Mixed statistical reasoning and display reading."],
    ],
  },
];

const CONTEXTS = [
  "a Prosper Prep basketball practice",
  "an East Texas trail hike near Tyler",
  "a scholarship fundraising bake sale",
  "a family road trip on I-20",
  "a school garden plot",
  "a band concert ticket table",
  "a Saturday soccer tournament",
  "a science fair supply run",
  "a church youth group picnic",
  "a library reading challenge",
];

const MISTAKES = [
  "switching the order of a ratio (comparing B to A when the question asked A to B)",
  "forgetting that height must be perpendicular to the chosen base",
  "adding denominators when multiplying fractions",
  "treating percent as 'per ten' instead of 'per hundred'",
  "dropping a negative sign when comparing signed numbers",
  "combining unlike terms (for example, 3x + 2 becomes 5x)",
  "doing operations left-to-right while ignoring parentheses or exponents",
  "confusing surface area (wrapping) with volume (filling)",
  "calling a non-statistical question 'statistical' because it uses a number",
  "plotting (y, x) instead of (x, y) on the coordinate plane",
];

function nums(seed, base = 3) {
  const h = hash(seed);
  const a = base + (h % 9);
  const b = base + 1 + ((h >> 3) % 8);
  const c = base + 2 + ((h >> 6) % 7);
  return { a, b, c, d: a + b, e: a * b, f: 10 + (h % 40), g: 5 + (h % 20) };
}

function buildLessonBody(unit, lessonTitle, lessonDesc, orderInUnit, globalOrder) {
  const seed = `${unit.n}:${lessonTitle}`;
  const n = nums(seed);
  const ctx = pick(CONTEXTS, seed + "ctx");
  const mistake = pick(MISTAKES, seed + "mis");
  const unitLabel = `Unit ${unit.n} of 11 · ${unit.title}`;

  const warm = [
    `Look at these two quantities from ${ctx}: ${n.a} and ${n.b}. What is one mathematical question you could ask about how they relate?`,
    `Without calculating yet, estimate which is greater: ${n.a}/${n.b} of ${n.f}, or ${n.c}0% of ${n.f}? Jot a one-sentence guess.`,
    `Sketch a tiny diagram (table, number line, or shape) that might help with: "${lessonDesc}"`,
  ];

  const guided = [
    {
      q: `Guided 1 — Use today's idea on numbers ${n.a} and ${n.b}. Show each step.`,
      a: `Work with ${n.a} and ${n.b} using the lesson method; check with an inverse operation or equivalent representation.`,
    },
    {
      q: `Guided 2 — Same structure, new numbers ${n.c} and ${n.f}. Explain why your representation matches the situation (${ctx}).`,
      a: `Scale or operate consistently; label units; verify with a second method (table, line, or estimate).`,
    },
  ];

  const indep = [];
  for (let i = 1; i <= 6; i++) {
    const nn = nums(seed + ":p" + i, 2 + i);
    indep.push({
      q: `Problem ${i}: Apply “${lessonTitle}” with quantities ${nn.a}, ${nn.b}, and ${nn.f} in a short story about ${pick(CONTEXTS, seed + i)}. Show work.`,
      a: `Use the taught procedure; expect a reasoned numeric or simplified-ratio/expression answer involving ${nn.a}, ${nn.b}, or ${nn.f}. Teacher checks method + units.`,
    });
  }

  const exit = [
    `In one sentence, what does “${lessonTitle}” let you do that you could not do as clearly before?`,
    `Name the common mistake to avoid today (hint: related to ${mistake.split(" ").slice(0, 6).join(" ")}…).`,
    `Create one new practice item (with answer) a classmate could try in 2 minutes.`,
  ];

  const parts = [];
  parts.push(`# ${lessonTitle}`);
  parts.push("");
  parts.push(`*Grade 6 Mathematics · ${unitLabel} · Lesson ${orderInUnit}*`);
  parts.push("");
  parts.push(`## Objective`);
  parts.push("");
  parts.push(`**I can** ${lessonDesc.charAt(0).toLowerCase()}${lessonDesc.slice(1)}`);
  parts.push("");
  parts.push(`**Teacher focus:** Students explain *why* a representation works, not only how to compute. Prefer labeled diagrams and complete sentences on exit tickets.`);
  parts.push("");
  parts.push(`## Warm-up (3–5 minutes)`);
  parts.push("");
  parts.push(pick(warm, seed + "w"));
  parts.push("");
  parts.push(`Share with a partner: What prior skill from earlier in Unit ${unit.n} (or a previous unit) might help?`);
  parts.push("");
  parts.push(`## Teach`);
  parts.push("");
  parts.push(`### Big idea`);
  parts.push("");
  parts.push(
    `Today's skill — **${lessonTitle}** — sits inside ${unit.title.toLowerCase()}. In Grade 6 we build flexible representations: words, tables, diagrams, number lines, and symbols. A correct answer with no representation is weaker evidence of understanding than a clear diagram plus a checked result.`
  );
  parts.push("");
  parts.push(`### Why it matters`);
  parts.push("");
  parts.push(
    `Families use these ideas when comparing prices, reading sports stats, planning travel time, scaling recipes, or tracking fundraising goals. Connect careful quantitative reasoning to scholarship habits: check units, estimate first, and explain your thinking so a teacher (or future you) can follow it.`
  );
  parts.push("");
  parts.push(`### Language bank`);
  parts.push("");
  parts.push(`- **Precise words beat vague words.** Prefer “unit rate,” “equivalent,” “perpendicular height,” “absolute value,” or “like terms” when those are the ideas in play.`);
  parts.push(`- **Order matters** in ratios and ordered pairs; **operation order** matters in numerical expressions.`);
  parts.push(`- **Units tell a story.** “3” is incomplete; “3 miles per hour” or “3 square feet” carries meaning.`);
  parts.push("");
  parts.push(`### Worked example A`);
  parts.push("");
  parts.push(
    `Imagine ${ctx}. Related quantities show up as ${n.a} and ${n.b} (and sometimes a third measure ${n.f}).`
  );
  parts.push("");
  parts.push(`**Step 1 — Restate the question.** What are we finding, and in what units?`);
  parts.push(
    `**Step 2 — Choose a representation.** For ratios/rates: table or double number line. For signed numbers: number line. For area: labeled sketch. For expressions: define the variable in a sentence.`
  );
  parts.push(
    `**Step 3 — Compute with the representation visible.** Example scaffold numbers: start from ${n.a} and ${n.b}. One useful related value is ${n.a + n.b}; another is a scaled pair such as ${n.a * 2} to ${n.b * 2} when equivalence is the goal.`
  );
  parts.push(
    `**Step 4 — Check.** Use an inverse operation, an estimate, or a second representation. Ask: Is the answer reasonable for ${ctx}?`
  );
  parts.push("");
  parts.push(`**Sample narrative solution (model quality, not the only path):**`);
  parts.push(
    `“I compared ${n.a} to ${n.b}. I built a small table by scaling both numbers by 2 and by 3. The equivalent pairs stayed in the same relationship. My estimate using friendly numbers was near ${Math.round((n.a / n.b) * n.f) || n.a}, which matched my more precise result closely enough that I trust the work.”`
  );
  parts.push("");
  parts.push(`### Worked example B (different structure)`);
  parts.push("");
  parts.push(
    `Now change the story: keep the mathematical structure of “${lessonTitle}” but switch the context to ${pick(CONTEXTS, seed + "b")}. Use numbers ${n.c}, ${n.g}, and ${n.f}.`
  );
  parts.push("");
  parts.push(`1. Write a one-sentence goal.`);
  parts.push(`2. Draw the representation.`);
  parts.push(`3. Compute.`);
  parts.push(`4. Write a concluding sentence that includes units.`);
  parts.push("");
  parts.push(
    `Teachers: freeze after step 2 in live sessions so students cannot hide behind premature arithmetic.`
  );
  parts.push("");
  parts.push(`### Common mistakes`);
  parts.push("");
  parts.push(`- **Watch for:** ${mistake}.`);
  parts.push(
    `- **Also watch for:** skipping the estimate, then accepting an impossible result (negative lengths, percents over 100% when the story forbids it, or areas labeled with linear units).`
  );
  parts.push(
    `- **Repair move:** Name the broken step in one sentence, then re-do only from that step — do not erase the entire solution blindly.`
  );
  parts.push("");
  parts.push(`### Connect to prior learning`);
  parts.push("");
  if (unit.n === 1) {
    parts.push(`Ratios grow from earlier fraction sense: comparing parts and wholes, and noticing multiplicative (not only additive) relationships.`);
  } else if (unit.n === 2) {
    parts.push(`Fraction and decimal arithmetic must stay connected to meaning — area models and place-value charts prevent “calculator-only” habits.`);
  } else if (unit.n === 3) {
    parts.push(`Percents are rates “per 100.” Unit rates from earlier lessons transfer directly.`);
  } else if (unit.n === 5) {
    parts.push(`Negatives extend the number line; absolute value is distance, not a magic “drop the sign” button.`);
  } else if (unit.n === 6 || unit.n === 7) {
    parts.push(`Expressions name patterns; equations assert balance. Keep that distinction sharp.`);
  } else if (unit.n >= 8 && unit.n <= 10) {
    parts.push(`Geometry measures need correct units and clear diagrams. Algebraic expressions often summarize geometric patterns.`);
  } else {
    parts.push(`Statistics begins with questions that anticipate variability — displays and measures of center come after the question is clear.`);
  }
  parts.push("");
  parts.push(`## Guided practice (we do)`);
  parts.push("");
  for (const g of guided) {
    parts.push(`1. **${g.q}**`);
    parts.push(`   - *Teacher/self-check note:* ${g.a}`);
    parts.push("");
  }
  parts.push(`2. **Error hunt:** A fictional student forgot a label and wrote only “${n.e}.” What question should you ask them before accepting the number?`);
  parts.push("");
  parts.push(`## Independent practice`);
  parts.push("");
  parts.push(`Complete each item with visible work. Aim for clear diagrams + checked answers.`);
  parts.push("");
  indep.forEach((p, i) => {
    parts.push(`${i + 1}. ${p.q}`);
  });
  parts.push("");
  parts.push(`<details>`);
  parts.push(`<summary>Answer key (teacher / self-check — try first before expanding)</summary>`);
  parts.push("");
  indep.forEach((p, i) => {
    parts.push(`${i + 1}. ${p.a}`);
  });
  parts.push("");
  parts.push(`</details>`);
  parts.push("");
  parts.push(`## Exit ticket`);
  parts.push("");
  exit.forEach((e, i) => {
    parts.push(`${i + 1}. ${e}`);
  });
  parts.push("");
  parts.push(`*(Scored exit items also appear as multiple-choice checks below the lesson in Prosper Prep.)*`);
  parts.push("");
  parts.push(`## Stretch (optional)`);
  parts.push("");
  parts.push(
    `Write a short CER paragraph (4–6 sentences) arguing that a clear representation improves trust in an answer for “${lessonTitle}.” Use one concrete numeric example with ${n.a} and ${n.b}. Then invent a harder variant that would challenge a classmate who already finished the independent set.`
  );
  parts.push("");
  return parts.join("\n");
}

function buildExitQuestions(unit, lessonTitle, lessonDesc) {
  const seed = `exit:${unit.n}:${lessonTitle}`;
  const n = nums(seed);
  const items = [];

  const q1 = rotChoices(
    `Use a clear representation and checked calculation for “${lessonTitle}.”`,
    [
      "Guess from the answer choices without a diagram.",
      "Ignore units because numbers alone are enough.",
      "Switch the order of compared quantities randomly.",
    ],
    seed + "1"
  );
  items.push({
    prompt: `Which approach best matches the goal of this lesson (${lessonDesc.slice(0, 80)}…)?`,
    choices: q1.choices,
    correctIndex: q1.correctIndex,
    explanation: "Grade 6 evidence of learning includes representation + checked work, not guessing.",
    order: 1,
  });

  const q2 = rotChoices(
    String(n.a * 2),
    [String(n.a + 2), String(n.a * 2 + 1), String(Math.max(1, n.a - 1))],
    seed + "2"
  );
  items.push({
    prompt: `Quick check: If a related quantity starts at ${n.a} and is scaled by a factor of 2 (as in an equivalent-ratio / doubling move), what is the new amount?`,
    choices: q2.choices,
    correctIndex: q2.correctIndex,
    explanation: `Scaling by 2 multiplies: ${n.a} × 2 = ${n.a * 2}.`,
    order: 2,
  });

  const q3 = rotChoices(
    "Name the broken step, then repair from there with units labeled.",
    [
      "Erase everything and pick a new random method.",
      "Assume the answer key is wrong and stop.",
      "Only change the final number until it looks familiar.",
    ],
    seed + "3"
  );
  items.push({
    prompt: `You notice a mistake related to this topic. What is the best next move?`,
    choices: q3.choices,
    correctIndex: q3.correctIndex,
    explanation: "Error analysis targets the broken step; random rewriting hides the misconception.",
    order: 3,
  });

  return items;
}

function buildUnitQuiz(unit, lessonTitles) {
  const qs = [];
  for (let i = 0; i < 8; i++) {
    const title = lessonTitles[i % lessonTitles.length];
    const seed = `uquiz:${unit.n}:${i}:${title}`;
    const n = nums(seed, 4);
    const correct = pick(
      [
        `Apply the core idea of “${title}” with labeled units and a check.`,
        `An equivalent relationship preserves the ratio when both quantities scale by the same factor.`,
        `Estimate first, then compute; reject impossible units or signs.`,
        `A representation (table, number line, net, or expression) should match the question asked.`,
      ],
      seed + "c"
    );
    const { choices, correctIndex } = rotChoices(
      correct,
      [
        "Skip representations and rely on memorized tricks only.",
        "Change the question until an easier number appears.",
        "Treat every diagram as optional decoration.",
      ],
      seed
    );
    qs.push({
      prompt: `Unit ${unit.n} Check (${unit.title}) item ${i + 1}: Thinking about “${title},” which statement is most mathematically responsible?`,
      choices,
      correctIndex,
      explanation: `Unit ${unit.n} emphasizes clear representations and checked reasoning for ${unit.title.toLowerCase()}.`,
      order: i + 1,
    });
  }
  // two numeric items
  for (let i = 8; i < 10; i++) {
    const seed = `uquizn:${unit.n}:${i}`;
    const n = nums(seed, 5);
    const ans = n.a * n.b;
    const { choices, correctIndex } = rotChoices(
      String(ans),
      [String(ans + n.a), String(Math.max(1, ans - n.b)), String(n.a + n.b)],
      seed
    );
    qs.push({
      prompt: `Numeric fluency item: What is ${n.a} × ${n.b}? (Used here as a quick arithmetic checkpoint inside Unit ${unit.n}.)`,
      choices,
      correctIndex,
      explanation: `${n.a} × ${n.b} = ${ans}.`,
      order: i + 1,
    });
  }
  return qs;
}

// ——— Generate all content ———
const allLessons = [];
let globalOrder = 0;
for (const unit of UNITS) {
  unit.lessons.forEach(([title, desc], idx) => {
    globalOrder += 1;
    const sectionKey = `unit-${unit.n}`;
    const id = stableId(`u${String(unit.n).padStart(2, "0")}-l${String(idx + 1).padStart(2, "0")}-${title}`);
    const content = buildLessonBody(unit, title, desc, idx + 1, globalOrder);
    const objectives = [
      `• ${desc}`,
      `• Explain the idea with a representation (table, diagram, number line, or expression).`,
      `• Check work with an estimate, inverse operation, or second representation.`,
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
    description: `Unit check for ${unit.title} (Grade 6 Math). Unlocks after all lessons in Unit ${unit.n} are complete. Section/unit quizzes = 60% of the course grade (lesson checks = 40%).`,
    order: unit.n,
    sectionKey: `unit-${unit.n}`,
    questions: buildUnitQuiz(unit, titles),
  };
});

// ——— Write TypeScript module ———
mkdirSync("prisma/grade6-math", { recursive: true });
mkdirSync("content/grade6/math", { recursive: true });

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

writeFileSync("content/grade6/math/outline.json", JSON.stringify(meta, null, 2));

function tsString(s) {
  return JSON.stringify(s);
}

let ts = `/**
 * Auto-generated Grade 6 Math year path (Units 1–11).
 * Regenerate: node scripts/gen-grade6-math-year.mjs
 * Prosper Prep Grade 6 Math lesson bodies (no third-party attribution in student text).
 */
import type { LessonSeed } from "../curriculum";
import type { QuestionSeed } from "../assessments";

export const G6_MATH_COURSE_ID = ${tsString(COURSE_ID)};

export const G6_MATH_UNIT_META = ${JSON.stringify(
  UNITS.map((u) => ({
    n: u.n,
    title: u.title,
    sectionKey: `unit-${u.n}`,
    lessonCount: u.lessons.length,
  })),
  null,
  2
)} as const;

export type G6MathLessonRow = {
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

export const G6_MATH_LESSONS: G6MathLessonRow[] = [\n`;

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

ts += `export type G6MathQuizRow = {
  id: string;
  unit: number;
  title: string;
  description: string;
  order: number;
  sectionKey: string;
  questions: QuestionSeed[];
};

export const G6_MATH_UNIT_QUIZZES: G6MathQuizRow[] = ${JSON.stringify(unitQuizzes, null, 2)};\n\n`;

ts += `export function grade6MathYearLessons(): LessonSeed[] {
  return G6_MATH_LESSONS.map((L) => ({
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
        { q: "What should a strong solution include?", a: "A representation, a checked calculation, and units." },
      ],
    },
  }));
}

export function grade6MathUnitLabel(sectionKey: string): string | null {
  const m = /^unit-(\\d+)$/.exec(sectionKey);
  if (!m) return null;
  const n = Number(m[1]);
  const meta = G6_MATH_UNIT_META.find((u) => u.n === n);
  if (!meta) return null;
  return \`Unit \${meta.n} of 11 · \${meta.title}\`;
}
`;

writeFileSync("prisma/grade6-math/year.ts", ts);

// ——— Content UPDATE fragment (do not overwrite applied 0005) ———
const sql = [];
sql.push("-- Grade 6 Math year: strip attribution / clean lesson bodies. Generated by scripts/gen-grade6-math-year.mjs");
sql.push("-- UPDATE content + course description only. Do NOT run db:setup.");
sql.push("");
sql.push(`UPDATE "Course" SET "description" = '${esc(
  "Full-year Grade 6 Mathematics at Prosper Preparatory: 11 units (Ratios through Data and statistics), with practice and unit checks. Lesson checks = 40%; unit checks = 60%. Latest attempt counts."
)}' WHERE "id" = '${COURSE_ID}';`);
sql.push("");
for (const L of allLessons) {
  sql.push(
    `UPDATE "Lesson" SET "content" = '${esc(L.content)}', "description" = '${esc(L.description)}', "objectives" = '${esc(L.objectives)}', "title" = '${esc(L.title)}' WHERE "id" = '${L.id}';`
  );
}
mkdirSync("scripts/generated", { recursive: true });
writeFileSync("scripts/generated/_fragment_grade6_math_content_update.sql", sql.join("\n"));

// Stats
const avgLen =
  allLessons.reduce((s, L) => s + L.content.length, 0) / allLessons.length;
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
