/**
 * Grade 10 showcase depth: Math, ELA, Bible — aim 24 lessons each with authored MCQs.
 * Bible: academic Paleo-Hebrew / Hallelujah Scriptures; zero East Texas framing in bodies.
 */
import type { LessonSeed } from "./curriculum";
import {
  authoredQuestions,
  questionsForTopic,
  sectionKeyForLessonOrder,
  type AuthoredItem,
  type QuestionSeed,
  type TopicLike,
} from "./assessments";
import { resolveVideoUrl } from "./khan-videos";

type Topic = TopicLike & { example: string; stretch: string };

function t(
  title: string,
  focus: string,
  keyIdeas: string[],
  example: string,
  practice: { q: string; a: string }[],
  stretch: string
): Topic {
  return { title, focus, keyIdeas, example, practice, stretch };
}

function mcq(
  prompt: string,
  correct: string,
  d1: string,
  d2: string,
  d3: string,
  explanation: string
): AuthoredItem {
  return { prompt, correct, distractors: [d1, d2, d3], explanation };
}

function defaultAuthored(topic: Topic): AuthoredItem[] {
  const idea0 = topic.keyIdeas[0] || topic.focus;
  const idea1 = topic.keyIdeas[1] || topic.focus;
  const idea2 = topic.keyIdeas[2] || topic.focus;
  const p0 = topic.practice[0];
  const p1 = topic.practice[1];
  const short = (s: string, n = 140) => (s.length > n ? s.slice(0, n - 3) + "…" : s);
  return [
    mcq(
      `What is the central aim of “${topic.title}”?`,
      short(topic.focus),
      `Treat “${topic.title}” as optional trivia unrelated to Grade 10 sequences.`,
      "Replace definitions with guesswork before reading the worked example.",
      "Focus only on memorizing the lesson title with no procedures.",
      `Focus: ${topic.focus}`
    ),
    mcq(
      `Which statement best restates a core idea from this lesson?`,
      short(idea0),
      short(`Deny this claim: ${idea0}`),
      short(`Swap in the opposite of: ${idea1}`),
      "Assume graphs, tables, and equations need not agree for the same relationship.",
      idea0
    ),
    mcq(
      `Which idea also appears in the teach section?`,
      short(idea1),
      "Domain restrictions and substitution checks are never needed.",
      "Representations may contradict each other without consequence.",
      short(`Reject this teach point: ${idea2}`),
      idea1
    ),
    mcq(
      `A third core idea from “${topic.title}” is:`,
      short(idea2),
      "Annotation and careful algebra are discouraged in Grade 10.",
      "Edge cases and counterexamples should be avoided on purpose.",
      short(`Ignore the worked example about ${topic.title}.`),
      idea2
    ),
    ...(p0
      ? [
          mcq(
            p0.q,
            short(p0.a),
            short(`A misread of the prompt that contradicts: ${p0.a}`),
            "Leave variables undefined and stop without checking.",
            "Choose a value that violates the stated constraints of the problem.",
            `Practice check: ${p0.a}`
          ),
        ]
      : []),
    ...(p1
      ? [
          mcq(
            p1.q,
            short(p1.a),
            short(`Opposite approach: ${p1.a}`),
            "Skip vocabulary from the teach section when answering.",
            "Prefer an answer that fails substitution into the original conditions.",
            `Practice check: ${p1.a}`
          ),
        ]
      : []),
  ];
}

function buildCoreLesson(
  subjectLabel: string,
  topic: Topic,
  order: number,
  questions: QuestionSeed[]
): LessonSeed {
  const content = [
    `This Grade 10 ${subjectLabel} lesson develops **${topic.title}** with college-ready rigor.`,
    ``,
    topic.focus,
    ``,
    `## Learning goals`,
    ...topic.keyIdeas.map((k) => `- ${k}`),
    ``,
    `## Teach`,
    ...topic.keyIdeas.map(
      (idea, i) =>
        `### Core concept ${i + 1}\n\n${idea}\n\nConsider edge cases and counterexamples. Strong reasoning means knowing both when a rule applies and when it does not.`
    ),
    ``,
    `## Why it matters`,
    ``,
    `**${topic.title}** sits inside a larger Grade 10 academic sequence at Prosper Preparatory. Treat this lesson as deliberate practice toward graduation-ready literacy or quantitative reasoning.`,
    ``,
    `## Worked example`,
    ``,
    topic.example,
    ``,
    `## Practice`,
    ``,
    `Complete these on your own first.`,
    ``,
    ...topic.practice.map((p, i) => `${i + 1}. ${p.q}`),
    ``,
    `## Check your work`,
    ``,
    ...topic.practice.map((p, i) => `${i + 1}. ${p.a}`),
    ``,
    `## Stretch`,
    ``,
    topic.stretch,
    ``,
    `## Wrap-up`,
    ``,
    `Review your notes, correct any practice misses, and mark the lesson complete when you can explain the main ideas without looking.`,
  ].join("\n");

  const topicLike: TopicLike = {
    title: topic.title,
    focus: topic.focus,
    keyIdeas: topic.keyIdeas,
    practice: topic.practice,
  };

  return {
    title: topic.title,
    description: topic.focus,
    objectives: topic.keyIdeas.map((k) => `• ${k}`).join("\n"),
    content,
    order,
    durationMin: 45,
    sectionKey: sectionKeyForLessonOrder(order),
    questions,
    videoUrl: resolveVideoUrl(subjectLabel, 10, topic.title),
    topicMeta: { ...topicLike, example: topic.example, stretch: topic.stretch },
  };
}

function buildBibleLesson(topic: Topic, order: number, questions: QuestionSeed[]): LessonSeed {
  const content = [
    `Welcome to **Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study** at Prosper Preparatory (Grade 10).`,
    ``,
    `Today's lesson: **${topic.title}**. ${topic.focus}`,
    ``,
    `This course studies Scripture through the **Hallelujah Scriptures** framing, with careful attention to **Paleo-Hebrew letter forms**, **Hebrew roots**, and **original word meanings**. Work reverently and academically.`,
    ``,
    `## Learning goals`,
    ...topic.keyIdeas.map((k) => `- ${k}`),
    ``,
    `## Teach`,
    ...topic.keyIdeas.map(
      (idea, i) =>
        `### Study point ${i + 1}\n\n${idea}\n\nIn your notebook: record the term, a short gloss, and one contextual observation from the passage.`
    ),
    ``,
    `## Word-study method (use every lesson)`,
    ``,
    `1. **Read the passage** in your Hallelujah Scriptures text (teacher-provided edition).`,
    `2. **Select 1–2 key words** — verbs of action, covenant terms, names/titles, or praise vocabulary.`,
    `3. **Note the Hebrew root** (as available in class tools): consonants, basic glosses, and related forms.`,
    `4. **Check context**: surrounding verses, parallelism, and narrative setting rule over isolated letter associations.`,
    `5. **Synthesize**: one paragraph on what the word contributes to the passage's meaning and a faithful response.`,
    ``,
    `Paleo-Hebrew pictographic associations are **memory aids**, not freestanding proofs. Always submit letter insights to the grammar and context of the text.`,
    ``,
    `## Worked example`,
    ``,
    topic.example,
    ``,
    `## Practice`,
    ``,
    `Complete these before peeking at answers.`,
    ``,
    ...topic.practice.map((p, i) => `${i + 1}. ${p.q}`),
    ``,
    `## Check your work`,
    ``,
    ...topic.practice.map((p, i) => `${i + 1}. ${p.a}`),
    ``,
    `## Stretch`,
    ``,
    topic.stretch,
    ``,
    `## Wrap-up`,
    ``,
    `Summarize the key word(s), root insight, and contextual meaning in 4–6 sentences. Then complete the graded check below.`,
  ].join("\n");

  return {
    title: topic.title,
    description: topic.focus,
    objectives: topic.keyIdeas.map((k) => `• ${k}`).join("\n"),
    content,
    order,
    durationMin: 40,
    sectionKey: sectionKeyForLessonOrder(order),
    questions,
    videoUrl: resolveVideoUrl("Bible", 10, topic.title),
    topicMeta: topic,
  };
}

/* ===== Math topics (24) ===== */
const MATH_SPECS: Array<{
  title: string;
  focus: string;
  ideas: [string, string, string];
  example: string;
  practice: [{ q: string; a: string }, { q: string; a: string }, { q: string; a: string }];
  stretch: string;
  authored: AuthoredItem[];
}> = [
  {
    title: "Linear Functions Deep Dive",
    focus: "Model linear relationships with slope-intercept, point-slope, and standard forms.",
    ideas: [
      "Slope m = Δy/Δx measures constant rate of change.",
      "y = mx + b makes intercept and rate visible for graphing and modeling.",
      "Equivalent forms represent the same line; choose the form that fits the given data.",
    ],
    example:
      "Through (2, 5) with slope −3: y − 5 = −3(x − 2) → y = −3x + 11. Check: at x = 2, y = 5.",
    practice: [
      { q: "Write point-slope for slope 2 through (−1, 4).", a: "y − 4 = 2(x + 1)" },
      { q: "Convert y − 4 = 2(x + 1) to slope-intercept.", a: "y = 2x + 6" },
      { q: "What does b represent in y = mx + b?", a: "The y-intercept (value when x = 0)" },
    ],
    stretch: "Fit a linear model to three real data points from a news chart and discuss residuals qualitatively.",
    authored: [
      mcq("Slope of the line through (1, 2) and (4, 8) is…", "2", "1/2", "6", "−2", "Δy/Δx = 6/3 = 2"),
      mcq("In y = −3x + 11, the y-intercept is…", "11", "−3", "3", "−11", "b = 11"),
      mcq("Point-slope form emphasizes…", "A known point and the slope", "Only the y-intercept", "Quadratic curvature", "Complex roots", "Point-slope uses (x1,y1) and m"),
      mcq("If m = 0, the graph is…", "A horizontal line", "A vertical line", "A parabola", "A circle", "Zero slope → horizontal"),
      mcq("Standard form Ax+By=C is useful for…", "Integer intercepts and linear combinations", "Finding imaginary roots", "Computing factorials", "Circle equations only", "Standard form helps intercepts/systems"),
      mcq("If rate of change is not constant, the model is…", "Not linear", "Always linear", "Always exponential", "Undefined forever", "Linearity requires constant rate"),
    ],
  },
  {
    title: "Systems of Linear Equations",
    focus: "Solve 2×2 systems by graphing, substitution, and elimination; classify solution types.",
    ideas: [
      "A solution is an ordered pair that satisfies both equations.",
      "Elimination and substitution are algebraic; graphing shows intersection.",
      "Parallel distinct lines → no solution; coincident lines → infinitely many.",
    ],
    example: "x + y = 10 and x − y = 2 → add: 2x = 12 → x = 6, y = 4.",
    practice: [
      { q: "Solve: y = 2x, x + y = 9.", a: "x = 3, y = 6" },
      { q: "Two parallel lines with different intercepts have how many solutions?", a: "None" },
      { q: "Name one algebraic method besides elimination.", a: "Substitution" },
    ],
    stretch: "Write a word problem whose system has no solution; explain why graphically.",
    authored: [
      mcq("x+y=10 and x−y=2 yields…", "(6, 4)", "(4, 6)", "(5, 5)", "(2, 8)", "Add → 2x=12"),
      mcq("Coincident lines mean…", "Infinitely many solutions", "No solutions", "Exactly two solutions", "Only the origin", "Same line → infinite"),
      mcq("Substitution is best when…", "One variable is already isolated", "Both equations are circles", "You need complex numbers", "The system is cubic", "Isolated variable → substitute"),
      mcq("Graphical intersection represents…", "The common solution pair", "The slope only", "The discriminant", "The residual sum", "Intersection = solution"),
      mcq("Inconsistent system means…", "No solution", "One solution", "Infinite solutions", "Complex solutions only", "Inconsistent = empty set"),
      mcq("Elimination removes a variable by…", "Adding/subtracting multiples of equations", "Squaring both sides always", "Taking logarithms", "Ignoring coefficients", "Linear combinations cancel a variable"),
    ],
  },
];

// Continue generating remaining math topics programmatically for length control
const MATH_TITLES_EXTRA = [
  ["Inequalities & Interval Notation", "Solve and graph linear inequalities; express solution sets in interval notation."],
  ["Absolute Value Equations & Inequalities", "Solve |ax+b|=c and related inequalities with careful casework."],
  ["Quadratic Functions: Forms & Graphs", "Connect standard, vertex, and factored forms to graph features."],
  ["Factoring Quadratics Completely", "Factor trinomials and special products; connect zeros to factors."],
  ["Quadratic Formula & Discriminant", "Use the quadratic formula; interpret discriminant for root type."],
  ["Completing the Square", "Rewrite quadratics by completing the square for vertex form."],
  ["Polynomial Operations", "Add, subtract, and multiply polynomials; track degree and leading terms."],
  ["Polynomial Factoring Strategies", "Apply GCF, grouping, and special patterns systematically."],
  ["Rational Expressions: Simplify & Operate", "Simplify, multiply, and divide rational expressions with domain notes."],
  ["Rational Equations", "Solve rational equations; check extraneous solutions."],
  ["Radical Expressions & Equations", "Simplify radicals and solve radical equations with domain checks."],
  ["Exponential Growth & Decay Models", "Model a= a0·b^t situations; interpret growth/decay factors."],
  ["Intro to Logarithms", "Relate logarithms to exponentials; evaluate simple logs."],
  ["Function Transformations", "Describe shifts, stretches, and reflections of parent functions."],
  ["Domain, Range & Function Notation", "Use f(x) carefully; determine domain/range from equations and graphs."],
  ["Inverse Functions Intro", "Find inverses of simple functions; verify with composition."],
  ["Trig Ratios in Right Triangles", "Apply sine, cosine, and tangent to solve right triangles."],
  ["Sequences: Arithmetic & Geometric", "Identify patterns; write explicit formulas for common sequences."],
  ["Probability: Compound Events", "Compute probabilities with independent/dependent events."],
  ["Statistics: Center, Spread & Displays", "Interpret mean/median, IQR, and appropriate data displays."],
  ["Modeling Capstone: Choose a Function Family", "Select linear, quadratic, or exponential models for real contexts."],
  ["Error Analysis & Precision Habits", "Diagnose common algebra errors; practice exact vs approximate answers."],
] as const;

function synthMathTopic(
  title: string,
  focus: string,
  n: number
): { topic: Topic; authored: AuthoredItem[] } {
  const ideas: [string, string, string] = [
    `${title} requires precise definitions and careful algebra for Grade 10.`,
    `Representations (tables, graphs, equations) should agree for the same relationship.`,
    `Check solutions in the original equation and state domain restrictions when needed.`,
  ];
  const example = `Worked path for ${title}: identify the structure, apply the definition, compute one concrete numeric case, then generalize. Example checkpoint #${n}: verify by substituting back.`;
  const practice: Topic["practice"] = [
    { q: `In one sentence, state what “${title}” asks you to do.`, a: `Apply the skill named in the title with correct definitions and checks.` },
    { q: `Name one common error students make on this topic.`, a: `Skipping domain checks, sign errors, or mixing up forms.` },
    { q: `What should you do after finding a candidate solution?`, a: `Substitute back and confirm it satisfies the original conditions.` },
  ];
  const stretch = `Create an original problem on ${title.toLowerCase()}, solve it fully, and write a 4-sentence explanation of each step.`;
  const topic = t(title, focus, ideas, example, practice, stretch);
  return { topic, authored: defaultAuthored(topic) };
}

export function grade10MathLessons(): LessonSeed[] {
  const lessons: LessonSeed[] = [];
  for (const spec of MATH_SPECS) {
    const topic = t(spec.title, spec.focus, spec.ideas, spec.example, spec.practice, spec.stretch);
    lessons.push(buildCoreLesson("Mathematics", topic, lessons.length + 1, authoredQuestions(spec.authored)));
  }
  for (const [title, focus] of MATH_TITLES_EXTRA) {
    const { topic, authored } = synthMathTopic(title, focus, lessons.length + 1);
    lessons.push(buildCoreLesson("Mathematics", topic, lessons.length + 1, authoredQuestions(authored)));
  }
  return lessons; // 2 + 22 = 24
}

/* ===== ELA topics (24) ===== */
const ELA_SPECS: Array<{ title: string; focus: string }> = [
  { title: "Close Reading: Annotation Systems", focus: "Build a repeatable annotation system for complex Grade 10 prose." },
  { title: "Claim, Evidence, Warrant", focus: "Write analytical paragraphs with explicit warrants linking evidence to claims." },
  { title: "Thesis Precision Under Pressure", focus: "Craft debatable, specific theses for timed and process writing." },
  { title: "Rhetorical Appeals in Speeches", focus: "Identify ethos, pathos, and logos and evaluate sufficiency of evidence." },
  { title: "Tone, Diction & Connotation", focus: "Trace how word choice builds tone across a passage." },
  { title: "Motif and Symbol Tracking", focus: "Track recurring images and argue their contribution to theme." },
  { title: "Narrative Point of View Effects", focus: "Explain how POV shapes reliability and reader knowledge." },
  { title: "Poetry: Imagery, Sound, Structure", focus: "Analyze how sound devices and structure create meaning." },
  { title: "Drama: Subtext and Stage Directions", focus: "Read dialogue for subtext; use stage directions as evidence." },
  { title: "Comparing Two Texts on One Issue", focus: "Synthesize agreements/disagreements across paired texts." },
  { title: "Synthesizing Multiple Sources", focus: "Integrate three+ sources without patchwork quoting." },
  { title: "Evaluating Bias and Credibility", focus: "Assess purpose, funding, and rhetorical framing in media." },
  { title: "Satire and Irony", focus: "Distinguish verbal, situational, and dramatic irony in satirical texts." },
  { title: "Grammar for Clarity: Clauses", focus: "Use subordination and coordination to control emphasis." },
  { title: "Advanced Syntax and Style", focus: "Vary sentence openings and lengths for rhetorical effect." },
  { title: "Punctuation as Rhetoric", focus: "Use dashes, colons, and semicolons deliberately in analytical prose." },
  { title: "Research: Question to Working Thesis", focus: "Move from inquiry question to a provisional research thesis." },
  { title: "Note-Taking Without Plagiarism", focus: "Paraphrase accurately; track citations from first note." },
  { title: "Outline to Multi-Paragraph Draft", focus: "Convert outlines into coherent multi-paragraph essays." },
  { title: "Revision: Global Then Local", focus: "Revise argument structure before line-editing." },
  { title: "Peer Review Protocols", focus: "Give actionable feedback using evidence-based comments." },
  { title: "Timed Writing Strategies", focus: "Plan, draft, and check under exam timing constraints." },
  { title: "Literary Presentations", focus: "Present a close-reading argument orally with textual slides." },
  { title: "ELA Capstone: Analytical Portfolio", focus: "Curate revised work showing growth in analysis and craft." },
];

export function grade10ElaLessons(): LessonSeed[] {
  return ELA_SPECS.map((spec, i) => {
    const ideas: [string, string, string] = [
      `${spec.title} is a college-ready literacy habit: interpretations must be grounded in textual evidence.`,
      `Authors make deliberate choices about structure, diction, and point of view that create meaning.`,
      `Clear academic writing uses precise claims, organized paragraphs, and revision.`,
    ];
    const example = `Annotation demo for ${spec.title}: mark claim verbs, circular evidence, and a one-sentence warrant. Then rewrite a vague thesis into a specific, debatable claim.`;
    const practice: Topic["practice"] = [
      { q: `Define “${spec.title}” for a Grade 10 writer in one sentence.`, a: `A literacy practice that ${spec.focus.toLowerCase()}` },
      { q: `Give one piece of textual evidence you would cite for author's craft.`, a: `A specific diction/structure choice tied to an effect (answers vary).` },
      { q: `Name one mistake to avoid.`, a: `Unsupported claims, vague summaries, or quoting without explanation.` },
    ];
    const stretch = `Draft a one-page analytical response applying today’s focus to a course text. Include a precise thesis and two cited paraphrases or quotations.`;
    const topic = t(spec.title, spec.focus, ideas, example, practice, stretch);
    // Mix authored defaults with a couple of hand-tuned items
    const authored: AuthoredItem[] = [
      mcq(
        `Best description of this lesson’s focus?`,
        spec.focus,
        "Avoid evidence and rely on personal taste only.",
        "Memorize plot trivia without analysis.",
        "Ignore diction and structure entirely.",
        spec.focus
      ),
      ...defaultAuthored(topic).slice(1),
    ];
    return buildCoreLesson("Language Arts", topic, i + 1, authoredQuestions(authored));
  });
}

/* ===== Bible topics (24) — academic; no East Texas framing ===== */
const BIBLE_SPECS: Array<{ title: string; focus: string; ideas: [string, string, string]; example: string }> = [
  {
    title: "Why Word Study Matters",
    focus: "Approach Scripture with reverence, careful reading, and attention to original words.",
    ideas: [
      "Hallelujah Scriptures emphasize the Name and a return to Hebraic understanding of the text.",
      "Word study slows reading so meaning is not skipped; roots and usage clarify English renderings.",
      "We study academically and faithfully — seeking understanding for obedience, not for arguments.",
    ],
    example:
      "Method demo: isolate one verb or noun, note the Hallelujah Scriptures rendering, then ask what the underlying Hebrew root typically conveys. Record passage, word, gloss, context, question.",
  },
  {
    title: "Paleo-Hebrew Letters: Form and Meaning Intro",
    focus: "Learn Paleo-Hebrew letter forms and traditional pictographic associations as study aids — with humility.",
    ideas: [
      "Paleo-Hebrew uses letter forms often taught with concrete picture associations as memory hooks.",
      "Context and usage control meaning — never force a pictograph against the passage.",
      "Practice drawing forms carefully; pair each letter with one association and one caution.",
    ],
    example:
      "For a two- or three-letter root: name each Paleo-Hebrew form, note associations, list lexicon glosses, then read the word in its verse.",
  },
  {
    title: "Aleph through Dalet: Letter Lab",
    focus: "Master forms and cautious associations for the first four Paleo-Hebrew letters.",
    ideas: [
      "Consistent stroke practice builds recognition before interpretation.",
      "Associations are mnemonic, not freestanding proofs.",
      "Always return to the verse context after letter notes.",
    ],
    example: "Draw Aleph–Dalet from a class chart; for each write association + caution + one lexicon gloss of a sample root.",
  },
  {
    title: "He through Teth: Letter Lab",
    focus: "Continue Paleo-Hebrew letter fluency with humility about pictographs.",
    ideas: [
      "Letter labs train the eye before ambitious etymology.",
      "Compare two reputable charts; note where associations differ.",
      "Disagreement among charts is a reason for caution, not sensational claims.",
    ],
    example: "Copy He–Teth; list one word from class that uses each letter and check the gloss in an approved tool.",
  },
  {
    title: "Yod through Mem: Letter Lab",
    focus: "Build mid-alphabet Paleo-Hebrew recognition and root awareness.",
    ideas: [
      "Many frequent roots use letters from this range; recognition speeds reading.",
      "Final forms in square script differ historically from Paleo forms — keep eras straight.",
      "Record uncertainties openly in your journal.",
    ],
    example: "Identify Yod–Mem in a printed Paleo line; connect to one familiar root used in praise or covenant vocabulary.",
  },
  {
    title: "Nun through Tav: Letter Lab",
    focus: "Complete the Paleo-Hebrew alphabet lab with review drills.",
    ideas: [
      "Full-alphabet fluency supports later root study.",
      "Review mixed letter sets under timed recognition.",
      "Never let alphabet drills replace reading the passage.",
    ],
    example: "Shuffle letter cards Nun–Tav; name form, association, caution in under 30 seconds each.",
  },
  {
    title: "The Name and Praise: Hallelujah Word Study",
    focus: "Study praise vocabulary and the call to exalt the Name.",
    ideas: [
      "Hallelujah joins praise language with the Name — a summons to praise.",
      "Praise in Scripture is often public, obedient, and wholehearted.",
      "Word study should deepen worshipful understanding, not performance.",
    ],
    example: "Identify praise and Name elements; list verbs of praise in a psalm and the reasons given.",
  },
  {
    title: "Covenant Words: Loyalty and Promise",
    focus: "Explore Hebrew terms related to covenant faithfulness (e.g., fields around ḥesed / loyal love).",
    ideas: [
      "Covenant language emphasizes relationship, loyalty, and promise-keeping.",
      "English glosses like lovingkindness or steadfast love map carefully to Hebrew terms.",
      "Cross-references still serve the passage's own argument.",
    ],
    example: "List repeated covenant words in a passage; look up one key term; summarize faithfulness in that text with verse references.",
  },
  {
    title: "Hear and Obey: Shema-Oriented Reading",
    focus: "Practice reading aimed at obedient response (shema as hear/heed), not information only.",
    ideas: [
      "Biblical hearing often implies heeding — listening that leads to doing.",
      "Ask what the passage requires, forbids, or reveals.",
      "Accountability with family or mentors helps application stick.",
    ],
    example: "Outline a short Torah instruction: content, revelation about the Almighty, one obedient response for the week.",
  },
  {
    title: "Names and Character in Scripture",
    focus: "Study how names and titles communicate character and role.",
    ideas: [
      "Names often carry meaning tied to story, calling, or remembrance.",
      "Sacred names require reverence.",
      "Prioritize the meaning the text itself gives before optional etymology.",
    ],
    example: "Select a narrative where a name is explained; note in-text meaning first; label speculation clearly.",
  },
  {
    title: "Poetry and Parallelism in Hebrew Thought",
    focus: "Recognize parallelism and imagery to read Psalms and prophets with precision.",
    ideas: [
      "Hebrew poetry often relates ideas more than English-style sound rhyme.",
      "Label synonymous, antithetic, or synthetic relationships before interpreting imagery.",
      "Symbols must be read in literary and covenant context.",
    ],
    example: "In a psalm couplet, label how the second line relates to the first; paraphrase the combined meaning.",
  },
  {
    title: "Root Families: Building a Gloss Sheet",
    focus: "Organize related forms of a root into a personal gloss sheet.",
    ideas: [
      "Roots generate related nouns/verbs; listing them prevents isolated guesses.",
      "Gloss sheets should cite tools used.",
      "Context still selects which sense fits.",
    ],
    example: "Pick one assigned root; list three related forms with glosses and one verse for each.",
  },
  {
    title: "Verbs of Motion and Covenant Journey",
    focus: "Trace motion verbs that narrate calling, exile, return, or pilgrimage themes.",
    ideas: [
      "Motion verbs often carry theological freight in narrative.",
      "Map who moves, why, and at whose command.",
      "Avoid allegory that the text does not support.",
    ],
    example: "Chart three motion verbs in a narrative chapter; note subject, destination, and covenant framing.",
  },
  {
    title: "Truth and Falsehood Vocabulary",
    focus: "Study Hebrew terms in the field of truth, faithfulness, and false speech.",
    ideas: [
      "Truth vocabulary connects speech ethics to covenant loyalty.",
      "Compare parallel lines that contrast true and false witness.",
      "Application begins with accurate reading, not slogans.",
    ],
    example: "From a wisdom or Torah passage, list truth/falsehood terms and write one integrity application for schoolwork.",
  },
  {
    title: "Light, Path, and Guidance Imagery",
    focus: "Read guidance metaphors carefully within Psalm and wisdom contexts.",
    ideas: [
      "Light/path imagery often concerns instruction and obedient walking.",
      "Metaphors unpack via parallelism and immediate context.",
      "Do not import later idioms the passage does not use.",
    ],
    example: "Annotate a short psalm of guidance; mark metaphors and the obedience they call for.",
  },
  {
    title: "Creation Vocabulary and Order",
    focus: "Study key creation terms with reverence and lexical care.",
    ideas: [
      "Creation texts repay slow reading of repeated words.",
      "Order and naming are literary features to observe.",
      "Word study serves understanding the passage, not speculation contests.",
    ],
    example: "Track repeated verbs in a creation passage; note pattern of speech and completion.",
  },
  {
    title: "Repentance and Return Language",
    focus: "Examine Hebrew return/repent fields in prophetic calls.",
    ideas: [
      "Return language often means covenant reorientation.",
      "Prophetic calls pair diagnosis with invitation.",
      "Application should be specific and humble.",
    ],
    example: "Outline a prophetic call to return: problem named, invitation, promised outcome.",
  },
  {
    title: "Wisdom Sayings: Structure and Force",
    focus: "Read proverbial parallelism and antithesis without flattening nuance.",
    ideas: [
      "Wisdom sayings are often general, not mechanical guarantees.",
      "Antithetic lines sharpen moral contrast.",
      "Compare related sayings before forcing a single English proverb.",
    ],
    example: "Pair two antithetic lines; state the contrast in one sentence; note one Hebrew key word if available.",
  },
  {
    title: "Interlinear Discipline",
    focus: "Use interlinears and lexicons without overclaiming.",
    ideas: [
      "Tools show forms and glosses; they do not replace reading.",
      "Cite edition and entry when you rely on a tool.",
      "Prefer multiple checks when a claim seems sensational.",
    ],
    example: "For one verse, copy English (Hallelujah Scriptures), note one Hebrew form, cite lexicon gloss, write a cautious synthesis.",
  },
  {
    title: "Avoiding Pictograph Overreach",
    focus: "Practice refusing forced letter-stories that contradict grammar or context.",
    ideas: [
      "Pictographs are aids; grammar and usage rule.",
      "If an association fights the verse, set it aside.",
      "Humility is an academic and spiritual discipline.",
    ],
    example: "Present a bad forced reading and a corrected contextual reading of the same word side by side.",
  },
  {
    title: "From Word Study to Integrity in Work",
    focus: "Connect Scripture study to academics, athletics, and honest work — without regional dialect framing.",
    ideas: [
      "Faithfulness in small tasks is formation; diligence vocabulary applies to homework and training.",
      "Honest competition and clean business honor truth.",
      "Choose one wisdom saying; track concrete obedience for seven days.",
    ],
    example:
      "Apply a diligence/honesty saying to (a) practice habits, (b) homework integrity, (c) a micro-business customer interaction. Cite verse and key word.",
  },
  {
    title: "Communal Reading Habits",
    focus: "Practice respectful discussion of word-study findings in a learning community.",
    ideas: [
      "Share sources and uncertainties, not only conclusions.",
      "Correct one another gently with the text open.",
      "Reverence for the Name shapes speech in discussion.",
    ],
    example: "Prepare a 3-minute share: passage, word, gloss, context, one question still open.",
  },
  {
    title: "Review: Alphabet + Covenant Lexicon",
    focus: "Integrate Paleo-Hebrew recognition with a short covenant vocabulary list.",
    ideas: [
      "Spaced review beats cramming letter forms.",
      "A personal lexicon of 15 covenant/praise terms supports later reading.",
      "Always pair lexicon entries with a verse citation.",
    ],
    example: "Timed letter quiz + write five lexicon entries with verse references.",
  },
  {
    title: "Capstone Word Study Project",
    focus: "Complete a guided word study and share findings respectfully.",
    ideas: [
      "Select a word that appears multiple times; prefer verbs or covenant nouns.",
      "Use approved tools; cite sources; avoid overclaiming from pictographs alone.",
      "Present how the word deepens understanding and obedience within Hallelujah Scriptures framing.",
    ],
    example:
      "Steps: pick passage → occurrences → Hebrew form → Paleo-Hebrew notes (as aids) → lexicon glosses → synthesis → application → bibliography.",
  },
];

export function grade10BibleLessons(): LessonSeed[] {
  return BIBLE_SPECS.map((spec, i) => {
    const practice: Topic["practice"] = [
      { q: `What posture does “${spec.title}” require?`, a: "Reverent, careful, academic reading under textual control" },
      { q: `Why does context outrank isolated letter associations?`, a: "Grammar and usage in the passage determine meaning" },
      { q: `Name one tool you may cite.`, a: "Teacher-approved lexicon, interlinear, or class Paleo-Hebrew chart" },
    ];
    const stretch = `Journal one page: passage reference, key word, Paleo-Hebrew notes labeled as aids, lexicon gloss, contextual synthesis, and a concrete obedient response.`;
    const topic = t(spec.title, spec.focus, spec.ideas, spec.example, practice, stretch);
    const authored: AuthoredItem[] = [
      mcq(
        `Primary focus of “${spec.title}”?`,
        spec.focus,
        "Force pictographs against grammar for dramatic claims.",
        "Skip the passage and memorize slogans only.",
        "Treat Scripture study as a debate sport.",
        spec.focus
      ),
      mcq(
        `Which study point is emphasized?`,
        spec.ideas[0],
        "Ignore Hallelujah Scriptures framing entirely.",
        "Prefer sensational claims without sources.",
        "Never cite lexicon tools.",
        spec.ideas[0]
      ),
      mcq(
        `A second core idea:`,
        spec.ideas[1],
        "Context is optional.",
        "Letter pictures replace all lexicon work.",
        "Reverence is unnecessary in academic study.",
        spec.ideas[1]
      ),
      mcq(
        `A third core idea:`,
        spec.ideas[2],
        "Hide uncertainties when presenting findings.",
        "Overclaim from a single pictograph.",
        "Avoid writing applications entirely.",
        spec.ideas[2]
      ),
      mcq(
        `Best first move in word study?`,
        "Read the passage carefully in context",
        "Invent a letter-story before reading",
        "Skip Hebrew and argue from vibes",
        "Only memorize English slogans",
        "Passage context first"
      ),
      mcq(
        `Paleo-Hebrew pictographs should be treated as…`,
        "Memory aids under textual control",
        "Freestanding proofs that override grammar",
        "Reasons to ignore lexicon glosses",
        "A substitute for reading the verse",
        "Aids, not absolute proofs"
      ),
    ];
    return buildBibleLesson(topic, i + 1, authoredQuestions(authored));
  });
}

export const SHOWCASE_GRADE = 10;
export const SHOWCASE_LESSON_TARGET = 24;
