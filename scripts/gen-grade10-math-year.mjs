/**
 * Generate Grade 10 Algebra & Beyond full-year content (10 units) + migration SQL.
 * Prosper Prep original teaching text — no external curriculum brands in student bodies.
 * Run: node scripts/gen-grade10-math-year.mjs
 */
import { math10IndepPractice } from "./lib/grade10-math-practice.mjs";
import {
  stableId,
  pick,
  rotChoices,
  nums,
  emitYearSql,
  writeOutputs,
  buildTsModule,
} from "./lib/grade10-sql.mjs";

const COURSE_ID = "cmuh9by2508leedan8cb09q8z";
const PREFIX = "ppg10m";
const UNIT_TOTAL = 10;

const OLD_STUBS = [
  "cmuh9by2608lgedanxceuikp2","cmuh9by2908luedano8n4m0fz","cmuh9by2d08m8edanpc2av94m",
  "cmuh9by2h08mmedanb5wbaw6o","cmuh9by2k08n0edanh7b2jnxv","cmuh9by2n08needanie9govpn",
  "cmuh9by2r08nsedans65j97pj","cmuh9by2v08o6edan5unrswt7","cmuh9by2y08okedanynud7g2x",
  "cmuh9by3208oyedannl56jeor","cmuh9by3508pcedan4qdxn34s","cmuh9by3808pqedansof0ehwb",
  "cmuh9by3b08q4edanvvlxv3yh","cmuh9by3e08qiedan0qfgtezc","cmuh9by3h08qwedans9b1u7g4",
  "cmuh9by3l08raedanso8ukr81","cmuh9by3o08roedanxtxv4m96","cmuh9by3r08s2edannec38biz",
  "cmuh9by3u08sgedanvph0tozj","cmuh9by3x08suedandi4h9l0l","cmuh9by4008t8edanizxnsg81",
  "cmuh9by4408tmedancxdnc9uu","cmuh9by4708u0edanq9fpteyu","cmuh9by4b08ueedand8g60jkw",
];
const OLD_QUIZZES = [
  "cmuh9by4e08usedanixerf6f9","cmuh9by4j08veedanhukhwkn4","cmuh9by4q08w0edanrw4637tu",
  "cmuh9by4v08wmedan5wr5x8pj","cmuh9by5108x8edaneuh90srv","cmuh9by5608xuedanlgfgj3e1",
  "cmuh9by5b08ygedan0hignq81","cmuh9by5g08z2edan4nkkxqwp",
];

const UNITS = [
  {
    n: 1,
    title: "Linear Functions & Systems",
    lessons: [
      ["Function Notation & Linear Forms", "Use f(x), slope-intercept, point-slope, and standard form interchangeably."],
      ["Slope as Rate of Change", "Interpret slope in tables, graphs, and real contexts with units."],
      ["Writing Equations of Lines", "Build line equations from two points, a point and slope, or parallel/perpendicular conditions."],
      ["Graphing Linear Inequalities", "Graph half-planes; shade solution sets carefully with solid/dashed boundaries."],
      ["Systems by Graphing & Tables", "Estimate solutions graphically and check with substitution into both equations."],
      ["Systems by Substitution", "Solve 2×2 linear systems by substitution; verify both equations."],
      ["Systems by Elimination", "Solve 2×2 systems by elimination; scale equations when needed."],
      ["Systems Applications", "Model break-even and mixture problems with systems; interpret solutions in context."],
    ],
  },
  {
    n: 2,
    title: "Quadratic Functions",
    lessons: [
      ["Quadratic Forms & Graphs", "Connect standard, vertex, and factored forms to intercepts and vertex."],
      ["Transformations of Parabolas", "Describe shifts, stretches, and reflections of y = x²."],
      ["Factoring Quadratics", "Factor trinomials and special products; connect zeros to factors."],
      ["Solving by Factoring", "Solve ax²+bx+c=0 by factoring; check roots in the original equation."],
      ["Completing the Square", "Rewrite quadratics in vertex form by completing the square."],
      ["Quadratic Formula & Discriminant", "Use the quadratic formula; interpret discriminant for root type."],
      ["Quadratic Inequalities", "Solve quadratic inequalities using roots and sign charts."],
      ["Quadratic Modeling", "Fit a quadratic to a context; interpret vertex as max/min."],
    ],
  },
  {
    n: 3,
    title: "Polynomials",
    lessons: [
      ["Polynomial Vocabulary & Degree", "Identify degree, leading coefficient, and end behavior cues."],
      ["Add, Subtract, Multiply Polynomials", "Operate on polynomials; track like terms and degree."],
      ["Special Products", "Apply (a±b)² and (a+b)(a−b) patterns fluently."],
      ["Factoring Strategies", "Use GCF, grouping, and special patterns systematically."],
      ["Polynomial Division", "Divide polynomials with long division; interpret quotient and remainder."],
      ["Remainder & Factor Theorems", "Evaluate P(a) as remainder when dividing by (x−a); test factors."],
      ["Zeros & Multiplicity Intro", "Relate factors to zeros; sketch multiplicity effects on the graph."],
      ["Polynomial Unit Synthesis", "Solve a mixed set requiring operations, factoring, and zeros."],
    ],
  },
  {
    n: 4,
    title: "Rational Expressions & Equations",
    lessons: [
      ["Domain of Rational Expressions", "State excluded values where denominators are zero."],
      ["Simplify Rational Expressions", "Cancel common factors only; never cancel terms across addition."],
      ["Multiply & Divide Rationals", "Multiply/divide fractions of polynomials with domain notes."],
      ["Add & Subtract Rationals", "Find LCDs; combine carefully and simplify."],
      ["Complex Fractions", "Simplify complex fractions by multiplying by a clear LCD."],
      ["Rational Equations", "Solve rational equations; check extraneous solutions."],
      ["Applications of Rationals", "Model work-rate and density situations with rational equations."],
      ["Rational Unit Review", "Mixed practice: simplify, operate, solve, and check domain."],
    ],
  },
  {
    n: 5,
    title: "Radicals & Rational Exponents",
    lessons: [
      ["Nth Roots & Principal Roots", "Define principal roots; connect √a to solutions of x² = a."],
      ["Simplify Radical Expressions", "Factor perfect powers out of radicals."],
      ["Add & Multiply Radicals", "Combine like radicals; multiply with distribution."],
      ["Rational Exponents", "Rewrite a^(m/n) as radicals and vice versa."],
      ["Radical Equations", "Solve radical equations; check for extraneous roots."],
      ["Rationalize Denominators", "Rationalize monomial and binomial denominators."],
      ["Radical Word Problems", "Apply Pythagorean and distance contexts with radicals."],
      ["Radicals Unit Synthesis", "Mixed radical simplification and equation solving."],
    ],
  },
  {
    n: 6,
    title: "Exponential & Logarithmic Functions",
    lessons: [
      ["Exponential Growth & Decay", "Model A = A0·b^t; interpret growth/decay factors."],
      ["Graphs of Exponential Functions", "Identify asymptotes, intercepts, and transformations."],
      ["Intro to Logarithms", "Define log_b(a) as the exponent; evaluate simple logs."],
      ["Log Laws", "Apply product, quotient, and power rules correctly."],
      ["Solving Exponential Equations", "Solve b^x = c using same-base or logs."],
      ["Solving Logarithmic Equations", "Solve log equations; check domain (arguments > 0)."],
      ["Change of Base & Applications", "Use change of base; model half-life and compound interest intro."],
      ["Exp/Log Unit Capstone", "Choose exponential vs log form and solve a multi-step model."],
    ],
  },
  {
    n: 7,
    title: "Sequences & Series",
    lessons: [
      ["Patterns & Recursive Definitions", "Write recursive rules from patterns; generate terms."],
      ["Arithmetic Sequences", "Use a_n = a1 + (n−1)d; find missing terms."],
      ["Arithmetic Series", "Sum arithmetic series with S_n = n(a1+an)/2."],
      ["Geometric Sequences", "Use a_n = a1·r^(n−1); identify r carefully."],
      ["Geometric Series", "Sum finite geometric series; note |r|≠1 edge cases."],
      ["Sigma Notation", "Read and expand sigma sums; connect to series formulas."],
      ["Applications of Sequences", "Model savings plans and geometric growth with sequences."],
      ["Sequences Unit Review", "Classify arithmetic vs geometric and compute required terms/sums."],
    ],
  },
  {
    n: 8,
    title: "Trigonometry Foundations",
    lessons: [
      ["Similar Right Triangles", "Use similarity to set proportional side relationships."],
      ["Sine, Cosine, Tangent", "Define SOH-CAH-TOA; compute ratios from sides."],
      ["Solving Right Triangles", "Find missing sides/angles with trig ratios."],
      ["Angles of Elevation & Depression", "Model real sight-line problems with right-triangle trig."],
      ["Unit Circle Intro", "Place key angles; read sine/cosine as coordinates."],
      ["Reference Angles", "Reduce angles to acute reference angles in standard position."],
      ["Basic Trig Equations", "Solve simple sin/cos equations on [0, 2π)."],
      ["Trig Unit Synthesis", "Mixed right-triangle and unit-circle practice."],
    ],
  },
  {
    n: 9,
    title: "Probability & Statistics",
    lessons: [
      ["Counting & Sample Spaces", "List outcomes systematically; use fundamental counting."],
      ["Basic Probability Rules", "Use P(A) = favorable/total; complement rule."],
      ["Compound Events", "Distinguish independent vs dependent; compute AND/OR carefully."],
      ["Conditional Probability Intro", "Interpret P(A|B) with two-way tables."],
      ["Measures of Center & Spread", "Compute mean/median; describe spread with range/IQR."],
      ["Data Displays", "Read histograms, box plots, and scatterplots critically."],
      ["Intro to Normal Curves", "Use empirical rule (68–95–99.7) for mound-shaped data."],
      ["Stats Unit Capstone", "Interpret a real data summary with center, spread, and a probability claim."],
    ],
  },
  {
    n: 10,
    title: "Functions, Modeling & Capstone",
    lessons: [
      ["Function Families Overview", "Compare linear, quadratic, exponential, and rational shapes."],
      ["Domain, Range & Inverses", "Find domains; invert simple functions and verify with composition."],
      ["Piecewise Functions", "Evaluate and graph piecewise rules; check boundary points."],
      ["Transformations Mastery", "Describe f(x−h)+k, af(x), and reflections across families."],
      ["Choosing a Model", "Select linear vs quadratic vs exponential from tables/contexts."],
      ["Regression Literacy", "Interpret fit quality without overclaiming causation."],
      ["Error Analysis Clinic", "Diagnose common Algebra II errors; repair with precise language."],
      ["Year Capstone: Multi-Family Modeling", "Solve a multi-part modeling task using at least two function families."],
    ],
  },
];

const TEACH_BANK = {
  1: {
    big: "Linear relationships are constant-rate stories. Tables, graphs, and equations must agree.",
    why: "Budgets, break-even points, and training plans are linear models before they become curves.",
    vocab: ["slope", "intercept", "solution set", "consistent system", "substitution", "elimination"],
    mistake: "Treating slope as rise/run with flipped coordinates, or declaring a system has no solution after one arithmetic slip.",
  },
  2: {
    big: "Quadratics encode acceleration and max/min. Forms trade which features are visible.",
    why: "Projectile height, profit near a peak, and arched designs all need vertex and roots.",
    vocab: ["vertex", "discriminant", "axis of symmetry", "factored form", "completing the square"],
    mistake: "Forgetting ± when taking square roots, or stopping at the quadratic formula without checking.",
  },
  3: {
    big: "Polynomials are finite sums of power terms. Degree and leading coefficient drive end behavior.",
    why: "Volume formulas, expanded products, and curve sketching start with clean polynomial algebra.",
    vocab: ["degree", "leading coefficient", "multiplicity", "remainder", "factor theorem"],
    mistake: "Canceling terms instead of factors, or dropping signs when distributing negatives.",
  },
  4: {
    big: "Rational expressions are polynomial ratios. Domain exclusions are part of the answer.",
    why: "Rates, densities, and average-cost models naturally produce rational equations.",
    vocab: ["excluded value", "LCD", "extraneous solution", "complex fraction"],
    mistake: "Canceling addends across a fraction bar, or keeping a root that zeros a denominator.",
  },
  5: {
    big: "Radicals and rational exponents are two spellings of the same idea — with domain care.",
    why: "Distance, geometry, and scaled roots appear constantly in science and design.",
    vocab: ["principal root", "index", "rationalize", "extraneous root"],
    mistake: "Writing √(a²)=a for all real a without absolute value thinking, or skipping the check step.",
  },
  6: {
    big: "Exponentials multiply by a constant factor; logs undo that multiplication as exponents.",
    why: "Interest, population, and half-life are exponential stories — logs solve for time.",
    vocab: ["growth factor", "asymptote", "logarithm", "change of base", "domain of log"],
    mistake: "Applying log laws to sums incorrectly, or forgetting arguments of logs must be positive.",
  },
  7: {
    big: "Sequences list terms; series add them. Arithmetic adds a constant; geometric multiplies.",
    why: "Savings plans, repeating patterns, and geometric growth are sequence models.",
    vocab: ["recursive", "explicit", "common difference", "common ratio", "partial sum"],
    mistake: "Mixing a_n formulas for arithmetic vs geometric, or off-by-one errors on n.",
  },
  8: {
    big: "Trig ratios compare sides in right triangles; the unit circle extends those ratios to angles.",
    why: "Surveying, ramps, navigation, and periodic motion start with right-triangle trig.",
    vocab: ["opposite", "adjacent", "hypotenuse", "reference angle", "unit circle"],
    mistake: "Swapping opposite/adjacent, or using degrees in a calculator set to radians (or vice versa).",
  },
  9: {
    big: "Probability quantifies uncertainty; statistics summarizes data. Both demand careful definitions.",
    why: "College-ready citizens read polls, sports stats, and risk claims without being fooled.",
    vocab: ["sample space", "independent", "conditional", "IQR", "empirical rule"],
    mistake: "Adding probabilities that are not mutually exclusive without inclusion, or confusing mean with median.",
  },
  10: {
    big: "Modeling means choosing a function family that matches the story — then checking residual sense.",
    why: "ACT/SAT and real work reward flexible function sense more than isolated tricks.",
    vocab: ["domain", "inverse", "piecewise", "regression", "residual"],
    mistake: "Forcing a linear fit on clearly curved data, or claiming causation from correlation.",
  },
};

const CTX = [
  "a school fundraiser spreadsheet",
  "a robotics build schedule",
  "a track practice pacing plan",
  "a small business break-even table",
  "a science lab data set",
  "a savings plan for college costs",
  "a construction slope measurement",
  "a music festival ticket model",
];

function buildLessonBody(unit, title, desc, orderInUnit, indep) {
  const bank = TEACH_BANK[unit.n];
  const seed = `${unit.n}:${title}`;
  const n = nums(seed);
  const ctx = pick(CTX, seed + "ctx");
  const unitLabel = `Unit ${unit.n} of ${UNIT_TOTAL} · ${unit.title}`;
  const v1 = bank.vocab[0], v2 = bank.vocab[1 % bank.vocab.length], v3 = bank.vocab[2 % bank.vocab.length];

  const parts = [];
  parts.push(`# ${title}`);
  parts.push("");
  parts.push(`*Grade 10 Algebra & Beyond · ${unitLabel} · Lesson ${orderInUnit}*`);
  parts.push("");
  parts.push(`## Objective`);
  parts.push("");
  parts.push(`**I can** ${desc.charAt(0).toLowerCase()}${desc.slice(1)}`);
  parts.push("");
  parts.push(`**Teacher focus:** Students show algebraic structure, not only final answers. Prefer labeled steps and a check.`);
  parts.push("");
  parts.push(`## Warm-up (3–5 minutes)`);
  parts.push("");
  parts.push(`Without a calculator first, estimate a reasonable answer for a problem about ${ctx} that might use **${title}**. Jot one sentence explaining your estimate.`);
  parts.push("");
  parts.push(`Share: Which idea from earlier in Unit ${unit.n} (or a previous unit) might help?`);
  parts.push("");
  parts.push(`## Teach`);
  parts.push("");
  parts.push(`### Big idea`);
  parts.push("");
  parts.push(`${bank.big} Today's skill — **${title}** — builds that habit inside **${unit.title}**.`);
  parts.push("");
  parts.push(`### Why it matters`);
  parts.push("");
  parts.push(`${bank.why} At Prosper Prep we treat careful algebra as a college-ready habit: define variables, show structure, and verify.`);
  parts.push("");
  parts.push(`### Language bank`);
  parts.push("");
  parts.push(`- **${v1}** — define it in your own words before computing.`);
  parts.push(`- **${v2}** — connect it to a representation (table, graph, or equation).`);
  parts.push(`- **${v3}** — use it when you explain a check or a restriction.`);
  parts.push("");
  parts.push(`### Worked example A`);
  parts.push("");
  parts.push(`Context: ${ctx}. Goal aligned to “${title}.”`);
  parts.push("");
  parts.push(`**Step 1 — Restate.** What are we finding, and in what units or form?`);
  parts.push(`**Step 2 — Structure.** Identify the algebraic form (linear, quadratic, rational, exponential, etc.). Sample anchors: ${n.a}, ${n.b}, ${n.c}.`);
  parts.push(`**Step 3 — Compute.** Carry each step with reasons (distribute, combine, isolate, factor, or apply a formula).`);
  parts.push(`**Step 4 — Check.** Substitute back, use an inverse operation, or compare to an estimate. Watch for: ${bank.mistake}`);
  parts.push("");
  parts.push(`**Sample narrative:** “I defined the variable, named the structure for ${title}, computed with visible steps using ${n.a} and ${n.b}, then checked by substitution. The result matched my estimate from the warm-up closely enough to trust.”`);
  parts.push("");
  parts.push(`### Worked example B`);
  parts.push("");
  parts.push(`Keep the structure of “${title}” but change the story to ${pick(CTX, seed + "b")}. Write a one-sentence goal, show the algebra, and conclude with units.`);
  parts.push("");
  parts.push(`### Common mistakes`);
  parts.push("");
  parts.push(`- **Watch for:** ${bank.mistake}`);
  parts.push(`- **Also watch for:** dropping negative signs; skipping domain restrictions; reporting an unsimplified expression as “done.”`);
  parts.push(`- **Repair move:** Name the broken step, then redo only from that step.`);
  parts.push("");
  parts.push(`### Connect to prior learning`);
  parts.push("");
  parts.push(unit.n === 1
    ? `Linear fluency is the launch pad for systems, inequalities, and later function comparisons.`
    : unit.n <= 3
    ? `Quadratics and polynomials reuse linear factor and distribution habits with higher degree.`
    : unit.n <= 6
    ? `Rationals, radicals, and exponentials extend equation-solving with domain and inverse awareness.`
    : `Sequences, trig, and stats connect algebraic fluency to modeling and data claims.`);
  parts.push("");
  parts.push(`## Guided practice (we do)`);
  parts.push("");
  parts.push(`1. **Guided 1 —** Restate the goal of “${title}” in one sentence, then solve a mini-version using numbers ${n.a} and ${n.b}. Show every step.`);
  parts.push(`   - *Check:* Structure named; arithmetic checked; answer labeled.`);
  parts.push("");
  parts.push(`2. **Guided 2 —** Same structure, new context (${pick(CTX, seed + "g")}). Explain why your representation matches the situation.`);
  parts.push(`   - *Check:* Units and domain notes appear when needed.`);
  parts.push("");
  parts.push(`3. **Error hunt —** A fictional student skipped the check and kept an extraneous root / wrong sign. What two questions would you ask before accepting the work?`);
  parts.push("");
  parts.push(`## Independent practice`);
  parts.push("");
  parts.push(`Complete each item with visible work. Try first; then use the answer key.`);
  parts.push("");
  indep.forEach((p, i) => parts.push(`${i + 1}. ${p.q}`));
  parts.push("");
  parts.push(`### Answer key (try first)`);
  parts.push("");
  parts.push(`*Check only after you attempt each item.*`);
  parts.push("");
  indep.forEach((p, i) => parts.push(`${i + 1}. ${p.a}`));
  parts.push("");
  parts.push(`## Exit ticket`);
  parts.push("");
  parts.push(`1. In one sentence, what does “${title}” let you do that you could not do as clearly before?`);
  parts.push(`2. Write one common mistake for this lesson and how you would repair it.`);
  parts.push(`3. Create a 2-step practice item for a classmate on this skill (you do not need to solve it here).`);
  parts.push("");
  parts.push(`## Wrap-up`);
  parts.push("");
  parts.push(`Strong Grade 10 algebra shows **structure + check**. Tomorrow’s lesson continues Unit ${unit.n}: ${unit.title}.`);
  parts.push("");
  return parts.join("\n");
}

function buildExitQuestions(unit, title, desc) {
  const seed = `exit:${unit.n}:${title}`;
  const bank = TEACH_BANK[unit.n];
  const n = nums(seed);
  const items = [];

  const q1 = rotChoices(
    `Apply “${title}” with clear structure and a checked result.`,
    [
      "Guess from memory of the lesson title only.",
      "Skip checks because the first answer looks neat.",
      "Ignore domain restrictions and sign errors.",
    ],
    seed + "1"
  );
  items.push({
    prompt: `Which approach best matches the goal of this lesson (${desc.slice(0, 80)}${desc.length > 80 ? "…" : ""})?`,
    choices: q1.choices,
    correctIndex: q1.correctIndex,
    explanation: "College-ready algebra shows structure and verification, not guessing.",
    order: 1,
  });

  // Numeric check tied to unit
  let prompt2, correct2, wrong2, expl2;
  if (unit.n === 1) {
    prompt2 = `A line has slope ${n.f} and y-intercept ${n.a}. What is y when x = 2?`;
    correct2 = String(n.f * 2 + n.a);
    wrong2 = [String(n.f * 2 - n.a), String(n.f + n.a), String(n.f * 2)];
    expl2 = `y = ${n.f}(2) + ${n.a} = ${n.f * 2 + n.a}.`;
  } else if (unit.n === 2) {
    prompt2 = `The solutions of (x − ${n.a})(x − ${n.b}) = 0 are:`;
    correct2 = `x = ${n.a} and x = ${n.b}`;
    wrong2 = [`x = ${-n.a} and x = ${-n.b}`, `x = ${n.a + n.b} only`, `x = ${n.a * n.b} only`];
    expl2 = "Zero product property: each factor can be zero.";
  } else if (unit.n === 6) {
    prompt2 = `If log_${n.f}(${n.f ** 2}) = ?`;
    correct2 = "2";
    wrong2 = [String(n.f), String(n.f ** 2), "1"];
    expl2 = `Because ${n.f}^2 = ${n.f ** 2}.`;
  } else {
    prompt2 = `Which habit best prevents the common mistake: ${bank.mistake.slice(0, 70)}…?`;
    correct2 = "Name the structure, compute carefully, then check with substitution or an inverse.";
    wrong2 = [
      "Change the problem until an easier number appears.",
      "Erase all work whenever unsure.",
      "Trust the first answer if it is an integer.",
    ];
    expl2 = "Error prevention is structural, not cosmetic.";
  }
  const q2 = rotChoices(correct2, wrong2, seed + "2");
  items.push({
    prompt: prompt2,
    choices: q2.choices,
    correctIndex: q2.correctIndex,
    explanation: expl2,
    order: 2,
  });

  const q3 = rotChoices(
    bank.vocab[0],
    [bank.vocab[1], "random guessing", "skipping the diagram"],
    seed + "3"
  );
  items.push({
    prompt: `Which vocabulary idea is most central to Unit ${unit.n} (${unit.title}) as used in “${title}”?`,
    choices: q3.choices,
    correctIndex: q3.correctIndex,
    explanation: `Unit ${unit.n} leans on precise use of “${bank.vocab[0]}.”`,
    order: 3,
  });

  return items;
}

function buildUnitQuiz(unit, lessonTitles) {
  const qs = [];
  for (let i = 0; i < 10; i++) {
    const title = lessonTitles[i % lessonTitles.length];
    const seed = `uquiz:${unit.n}:${i}:${title}`;
    const bank = TEACH_BANK[unit.n];
    const correct = pick(
      [
        `Use the core method of “${title}” with a check for domain and signs.`,
        `Represent the relationship, compute with structure, verify by substitution.`,
        `Reject answers that violate domain restrictions or fail a substitution check.`,
        `Name ${bank.vocab[i % bank.vocab.length]} correctly before computing.`,
      ],
      seed + "c"
    );
    const { choices, correctIndex } = rotChoices(
      correct,
      [
        "Skip structure and copy a memorized final number.",
        "Ignore extraneous roots and excluded values.",
        "Treat graphs, tables, and equations as unrelated.",
      ],
      seed
    );
    qs.push({
      prompt: `Unit ${unit.n} Check (${unit.title}) item ${i + 1}: Thinking about “${title},” which statement is most mathematically responsible?`,
      choices,
      correctIndex,
      explanation: `Unit ${unit.n} emphasizes structure and verification for ${unit.title.toLowerCase()}.`,
      order: i + 1,
    });
  }
  return qs;
}

// ---- assemble ----
const allLessons = [];
let globalOrder = 0;
for (const unit of UNITS) {
  unit.lessons.forEach(([title, desc], idx) => {
    globalOrder += 1;
    const sectionKey = `unit-${unit.n}`;
    const id = stableId(PREFIX, `u${String(unit.n).padStart(2, "0")}-l${String(idx + 1).padStart(2, "0")}-${title}`);
    const indep = math10IndepPractice(unit.n, title, `${unit.n}:${title}`);
    const content = buildLessonBody(unit, title, desc, idx + 1, indep);
    const objectives = [
      `• ${desc}`,
      `• Show algebraic structure with labeled steps.`,
      `• Check solutions (substitution, estimate, or domain).`,
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
      durationMin: 45,
      sectionKey,
      videoUrl: null,
      questions: buildExitQuestions(unit, title, desc),
    });
  });
}

const unitQuizzes = UNITS.map((unit) => ({
  id: stableId(PREFIX, `u${String(unit.n).padStart(2, "0")}-quiz`),
  unit: unit.n,
  title: `Unit ${unit.n} Check · ${unit.title}`,
  description: `Unit check for ${unit.title} (Grade 10 Algebra & Beyond). Unlocks after all lessons in Unit ${unit.n} are complete. Unit checks = 60% of the course grade (lesson checks = 40%).`,
  order: unit.n,
  sectionKey: `unit-${unit.n}`,
  questions: buildUnitQuiz(unit, unit.lessons.map((l) => l[0])),
}));

const unitMeta = UNITS.map((u) => ({
  n: u.n,
  title: u.title,
  sectionKey: `unit-${u.n}`,
  lessonCount: u.lessons.length,
}));

const sql = emitYearSql({
  headerLines: [
    "-- Grade 10 Algebra & Beyond full-year path (10 units). Generated by scripts/gen-grade10-math-year.mjs",
    "-- Safe for production D1: does NOT wipe users/enrollments. Do NOT run db:setup.",
    "-- Retires old 24 math showcase stubs + old section quizzes; INSERTs year lessons + unit checks.",
  ],
  courseId: COURSE_ID,
  courseTitle: "Algebra & Beyond · Grade 10",
  courseDescription:
    "Full-year Grade 10 Algebra & Beyond at Prosper Preparatory: 10 units (Linear functions & systems through Functions, modeling & capstone), original Prosper Prep lessons with practice and unit checks. Lesson checks = 40%; unit checks = 60%. Latest attempt counts. College-prep Algebra II sequence.",
  oldStubs: OLD_STUBS,
  oldQuizzes: OLD_QUIZZES,
  lessons: allLessons,
  unitQuizzes,
  prefix: PREFIX,
});

const tsBody = buildTsModule({
  fileComment: `/**
 * Auto-generated Grade 10 Algebra & Beyond year path (Units 1–${UNIT_TOTAL}).
 * Regenerate: node scripts/gen-grade10-math-year.mjs
 * Prosper Prep Grade 10 Math lesson bodies (no third-party attribution in student text).
 */`,
  exportPrefix: "G10_MATH",
  courseIdConst: "G10_MATH_COURSE_ID",
  courseId: COURSE_ID,
  unitMeta,
  lessons: allLessons,
  unitQuizzes,
  unitTotal: UNIT_TOTAL,
  habitLine: "Clear algebraic structure, labeled steps, and a checked result.",
});

writeOutputs({
  dirs: ["prisma/grade10-math", "content/grade10/math", "migrations"],
  outlinePath: "content/grade10/math/outline.json",
  outline: {
    courseId: COURSE_ID,
    units: unitMeta,
    lessonCount: allLessons.length,
    quizCount: unitQuizzes.length,
    generatedAt: "2026-10-01",
  },
  sqlPath: "migrations/0026_grade10_math_year.sql",
  sql,
  tsPath: "prisma/grade10-math/year.ts",
  tsBody,
});

console.log(
  `G10 Math: ${allLessons.length} lessons, ${unitQuizzes.length} unit quizzes → migrations/0026_grade10_math_year.sql`
);
