/**
 * Title/keyword-keyed teaching banks so generated lessons instruct — not slogan.
 * Each match returns richer keyIdeas, example, and practice for buildContent().
 */

export type TeachPack = {
  focus: string;
  keyIdeas: string[];
  example: string;
  practice: { q: string; a: string }[];
  stretch: string;
};

type Band = "early" | "elem" | "middle" | "high";

function gradeWord(grade: number) {
  return grade === 0 ? "Kindergarten" : `Grade ${grade}`;
}

export function bandOf(grade: number): Band {
  if (grade <= 2) return "early";
  if (grade <= 5) return "elem";
  if (grade <= 8) return "middle";
  return "high";
}

/** Keyword → pack builder. First match wins (list is specific→general). */
const BANKS: Array<{
  test: (title: string, subject: string) => boolean;
  build: (grade: number, title: string, subject: string) => TeachPack;
}> = [
  {
    test: (t) => /theme/i.test(t),
    build: (grade, title) => ({
      focus: `Identify theme in fiction by separating topic from theme and building evidence-based theme statements (${gradeWord(grade)}).`,
      keyIdeas: [
        `Theme is a complete idea a story develops about life or human nature — not a one-word topic and not always a neat moral. Topic might be "friendship"; theme might be "True friendship requires honesty even when it risks comfort."`,
        `Use the path evidence → inference → theme. Quote or paraphrase what characters do and say, infer what those choices suggest, then write a generalizable claim the whole text supports.`,
        `Common mistakes: stopping at the topic, retelling only the plot, forcing a fortune-cookie moral, or ignoring conflicting evidence. Strong theme statements are arguable and text-supported.`,
      ],
      example: `Passage sketch: A runner wants the final (hero) leg but accepts the starting leg so the team can win. Evidence: almost refuses; remembers hurting the team last year; feels proud when the team wins without his name on the loudspeaker. Inference: glory vs. team success. Theme: Putting the team's success ahead of personal spotlight can create a deeper pride.`,
      practice: [
        {
          q: `Rewrite the weak statement "This story is about bravery" into a theme statement.`,
          a: `Example: Bravery can mean telling the truth even when silence would be easier. (Must be a full claim, not one word.)`,
        },
        {
          q: `Why is "Always be nice" often a weak theme?`,
          a: `It is a slogan/moral that may not match the story's specific conflict or evidence.`,
        },
        {
          q: `Name the three steps in the theme analysis path taught here.`,
          a: `Evidence → inference → theme statement.`,
        },
      ],
      stretch: `Find a short story or news narrative. List three evidence beats, write one inference, and craft a theme statement. Then write a one-sentence critique of a weak alternative theme.`,
    }),
  },
  {
    test: (t) => /claim|evidence|reasoning|cer|argument/i.test(t),
    build: (grade, title) => ({
      focus: `Build claim–evidence–reasoning (CER) paragraphs that link textual or factual evidence to a precise claim.`,
      keyIdeas: [
        `A claim is a debatable statement you will prove — not a topic label and not a quotation by itself.`,
        `Evidence is concrete: quotations, data, or specific details. Reasoning explains *how* the evidence supports the claim (use because/therefore language).`,
        `Weak CER skips reasoning ("The quote proves it") or stacks unrelated facts. Strong CER selects the best evidence and connects each piece with analysis.`,
      ],
      example: `Claim: The narrator feels trapped by routine. Evidence: repeated images of locked doors and clocks. Reasoning: Those images show confinement because doors and clocks symbolize blocked exits and endless cycles — therefore the imagery supports the claim that routine feels imprisoning.`,
      practice: [
        {
          q: `Which part of CER answers "So what?" after a quotation?`,
          a: `Reasoning — it explains how the evidence supports the claim.`,
        },
        {
          q: `Fix: "Claim: Parks help towns. Evidence: Parks exist. Reasoning: Because parks exist."`,
          a: `Add specific benefits (shade, play space, gatherings) and explain how each benefit supports the claim.`,
        },
        {
          q: `Is "Friendship" a claim? Why or why not?`,
          a: `No — it is a topic. A claim would assert something about friendship.`,
        },
      ],
      stretch: `Write an 6–8 sentence CER paragraph on a text from class. Underline claim once, evidence twice, and reasoning with a wavy line.`,
    }),
  },
  {
    test: (t) => /purpose|tone|rhetoric|appeal/i.test(t),
    build: (grade) => ({
      focus: `Determine author's purpose and tone; notice how word choice and structure persuade or inform.`,
      keyIdeas: [
        `Purpose is why the author wrote: to inform, persuade, entertain, or a blend. Tone is the author's attitude toward the subject (urgent, sarcastic, respectful, alarmed).`,
        `Diction, imagery, and organization are clues. Loaded words signal persuasion; neutral definitions and data often signal informing.`,
        `Rhetorical appeals (ethos, pathos, logos) help explain *how* a speaker builds trust, emotion, or logic — always tie appeals back to specific lines.`,
      ],
      example: `A speech pairs graduation-rate statistics (logos) with a student's story (pathos) and the speaker's years in classrooms (ethos). Annotate each appeal, then judge whether the evidence is fair and sufficient for the claim.`,
      practice: [
        {
          q: `Purpose vs tone: which describes attitude?`,
          a: `Tone describes attitude; purpose describes why the text was written.`,
        },
        {
          q: `Name one diction clue that a text may be trying to persuade.`,
          a: `Examples: should/must, loaded adjectives, us-vs-them framing, calls to action.`,
        },
        {
          q: `Give one logos example and one pathos example you might find in an article.`,
          a: `Logos: data/statistics; pathos: vivid personal story or emotionally charged imagery.`,
        },
      ],
      stretch: `Annotate a one-page opinion piece for purpose, tone, and at least two rhetorical moves. Write a paragraph evaluating effectiveness.`,
    }),
  },
  {
    test: (t) => /main idea|supporting detail|summar/i.test(t),
    build: (grade) => ({
      focus: `Find the main idea and supporting details; summarize without copying the whole text.`,
      keyIdeas: [
        `Main idea = the central point the paragraph or passage is mostly about. Details explain, prove, or illustrate that point.`,
        `Summaries are shorter restatements in your own words — keep key points, drop examples that only decorate.`,
        `A detail can be interesting yet not central. Ask: If I remove this sentence, does the main idea still stand?`,
      ],
      example: `"Beavers build dams that slow water." Main idea: beavers change their habitat. Supporting detail: dams slow water. A summary might be: Beavers reshape streams by building dams that slow water flow.`,
      practice: [
        {
          q: `Is a title always the main idea?`,
          a: `Not always — use the title as a clue, then confirm with the body sentences.`,
        },
        {
          q: `What should a summary usually avoid?`,
          a: `Long quotations, tiny trivia, and your personal opinions (unless asked).`,
        },
        {
          q: `Give one supporting detail for the main idea "Exercise helps mood."`,
          a: `Any relevant detail (e.g., endorphins, routine, sleep quality) — must support, not contradict.`,
        },
      ],
      stretch: `Read a short informational paragraph. Write the main idea in one sentence and three supporting details as bullets, then a 2–3 sentence summary.`,
    }),
  },
  {
    test: (t) => /figurative|simile|metaphor|imagery|poetry/i.test(t),
    build: () => ({
      focus: `Interpret figurative language and imagery; explain the effect on meaning and mood.`,
      keyIdeas: [
        `Simile compares using like/as; metaphor says one thing *is* another. Both create images that carry meaning beyond the literal.`,
        `Ask: What two things are compared? What quality transfers? How does that shape mood or theme?`,
        `Sound devices (alliteration, repetition) and concrete sensory imagery work with figurative language to make ideas memorable.`,
      ],
      example: `"The classroom was a beehive" (metaphor) transfers busy, buzzing industry — not literal insects. Effect: the room feels energetic and noisy with purposeful motion.`,
      practice: [
        {
          q: `Label: "Her smile was like sunrise."`,
          a: `Simile (like) — compares smile to sunrise, suggesting warmth/hope.`,
        },
        {
          q: `Why might an author prefer metaphor over a plain adjective?`,
          a: `To pack imagery and emotion into a compact comparison readers can picture.`,
        },
        {
          q: `Name one risk when interpreting figurative language.`,
          a: `Over-literal reading, or inventing meanings with no textual support.`,
        },
      ],
      stretch: `Find two figurative phrases in a poem. For each: type, comparison, and effect on mood.`,
    }),
  },
  {
    test: (t) => /proportion|unit rate|ratio/i.test(t),
    build: (grade) => ({
      focus: `Recognize proportional relationships; compute unit rates and solve with tables, equations, and graphs.`,
      keyIdeas: [
        `Two quantities are proportional when their ratio stays constant. The constant of proportionality k satisfies y = kx.`,
        `Unit rate is the amount of one quantity per 1 unit of another (miles per hour, price per item).`,
        `Check proportion with equivalent ratios, a constant k in a table, or a line through the origin on a graph.`,
      ],
      example: `Recipe: 3 cups flour for 12 muffins. Unit rate = 3/12 = 1/4 cup per muffin. For 20 muffins: 20 × 1/4 = 5 cups. Proportion check: 3/12 = x/20 → x = 5.`,
      practice: [
        {
          q: `Is the table (x,y): (2,6), (3,9), (5,15) proportional? What is k?`,
          a: `Yes — y/x = 3 each time, so k = 3 and y = 3x.`,
        },
        {
          q: `A car travels 150 miles in 3 hours at constant speed. Unit rate?`,
          a: `50 miles per hour.`,
        },
        {
          q: `Does a line through (0,2) and (4,6) represent a proportional relationship?`,
          a: `No — proportional graphs must pass through the origin (0,0).`,
        },
      ],
      stretch: `Create two real-world tables — one proportional, one not. Explain how you know using ratios and a sketch graph.`,
    }),
  },
  {
    test: (t) => /percent/i.test(t),
    build: () => ({
      focus: `Compute percent of a number, percent increase/decrease, and interpret percent in real contexts.`,
      keyIdeas: [
        `Percent means "per hundred." To find p% of n, compute (p/100) × n.`,
        `Percent increase: add the change to the original; percent decrease: subtract. Always ask: percent of *what* base?`,
        `Common errors: using the wrong base after multiple changes, or treating percent points the same as percent change.`,
      ],
      example: `A $80 jacket is discounted 25%. Discount = 0.25 × 80 = $20. Sale price = $60. If tax is then 8% of $60, tax = $4.80, total = $64.80.`,
      practice: [
        {
          q: `What is 15% of 240?`,
          a: `36.`,
        },
        {
          q: `A value rises from 50 to 65. Percent increase?`,
          a: `15/50 = 0.30 = 30% increase.`,
        },
        {
          q: `Why is "increase by 10%, then decrease by 10%" not back to the start?`,
          a: `The second 10% uses a new (higher) base, so you lose more than you gained.`,
        },
      ],
      stretch: `Find a store ad with a percent off. Compute the sale price and explain the base you used.`,
    }),
  },
  {
    test: (t) => /equation|express|inequalit|algebra|variable/i.test(t),
    build: () => ({
      focus: `Translate words to expressions/equations; solve with inverse operations and check solutions.`,
      keyIdeas: [
        `Variables stand for unknown numbers. Expressions combine numbers and variables; equations state that two expressions are equal.`,
        `Solve by undoing operations in reverse order (and/or distributing). Always substitute back to verify.`,
        `Inequalities use <, >, ≤, ≥. Graph solutions on a number line; flip the inequality when multiplying/dividing by a negative.`,
      ],
      example: `Solve 2(x − 3) = 10. Divide by 2: x − 3 = 5. Add 3: x = 8. Check: 2(8 − 3) = 10. For x + 4 > 10, subtract 4: x > 6 (open circle at 6, arrow right).`,
      practice: [
        {
          q: `Solve 3x + 5 = 20.`,
          a: `3x = 15 → x = 5. Check: 15 + 5 = 20.`,
        },
        {
          q: `Write an equation: "Five less than twice a number is 11."`,
          a: `2n − 5 = 11.`,
        },
        {
          q: `When solving −2x > 8, what happens to the inequality sign?`,
          a: `It flips when dividing by −2 → x < −4.`,
        },
      ],
      stretch: `Invent a two-step equation from a sports or money story. Solve and justify each inverse step.`,
    }),
  },
  {
    test: (t) => /fraction|decimal|place value|multiplic|division|area|volume|perimeter/i.test(t),
    build: (grade, title) => ({
      focus: `Build fluency with ${title.toLowerCase()} using models, procedures, and unit labels.`,
      keyIdeas: [
        `${title} depends on place value and clear models (number lines, arrays, area models, or base-ten blocks as appropriate).`,
        `Write each step: represent, compute, then interpret the answer with units.`,
        `Estimate first to catch unreasonable results; check with an inverse operation when possible.`,
      ],
      example: `Garden 8 ft by 5 ft: area = 8 × 5 = 40 square feet; perimeter = 2(8+5) = 26 feet. Always label square feet vs feet.`,
      practice: [
        {
          q: `State one model you can draw for today's skill.`,
          a: `Answers vary: array, number line, area model, tape diagram, etc., matched to the skill.`,
        },
        {
          q: `Why label units on the final answer?`,
          a: `Units tell what the number measures and prevent mixing length with area/volume.`,
        },
        {
          q: `Name one check strategy after computing.`,
          a: `Estimate, inverse operation, or re-compute with a different method.`,
        },
      ],
      stretch: `Write an original word problem requiring today's skill. Solve on a separate page with a diagram.`,
    }),
  },
  {
    test: (t) => /cell|photosynthesis|body system|atom|molecule|chemical|physical change|force|newton|wave|genetics|evolution|ecology|water cycle|food chain|matter|energy/i.test(t),
    build: (grade, title) => ({
      focus: `Explain ${title.toLowerCase()} with models, vocabulary, and evidence from observations or diagrams.`,
      keyIdeas: [
        `Science explains patterns with models. For ${title}, name the key parts/processes and how they interact.`,
        `Distinguish observation (what you see/measure) from inference (what you conclude). Controlled comparisons improve investigations.`,
        `Link structure to function: why a part's shape or arrangement enables what it does (cells, molecules, Earth systems, forces).`,
      ],
      example: /photo/i.test(title)
        ? `Photosynthesis: plants use light energy to convert CO₂ and water into sugars and oxygen. Light-dependent reactions capture energy; Calvin cycle builds sugars. Equation idea: carbon dioxide + water + light → sugar + oxygen.`
        : /cell/i.test(title)
          ? `Cell theory: living things are made of cells; the cell is the basic unit of life; cells arise from existing cells. Organelles (nucleus, mitochondria, membrane) have roles that keep the cell alive.`
          : /newton|force/i.test(title)
            ? `Forces can change motion. Inertia (1st law): objects keep velocity unless a net force acts. F = ma (2nd). Action–reaction pairs (3rd) are equal and opposite on different objects.`
            : `Worked model: identify inputs, processes, and outputs for ${title}. Cite one observable piece of evidence and one inference a scientist might make.`,
      practice: [
        {
          q: `Define one key term from today’s science focus in your own words.`,
          a: `Must match the lesson vocabulary (e.g., cell, evaporation, force) with a correct student paraphrase.`,
        },
        {
          q: `Give one observation and one inference related to this topic.`,
          a: `Observation = measurable/sensed; inference = conclusion based on evidence.`,
        },
        {
          q: `Ask one testable question about ${title.toLowerCase()}.`,
          a: `Question should be answerable with observation or experiment, not only opinion.`,
        },
      ],
      stretch: `Draw and label a diagram for today's topic. Add a caption explaining cause–effect in 3–4 sentences.`,
    }),
  },
  {
    test: (t) => /map|geography|civilization|constitution|revolution|citizen|civil rights|history|econom|federal|war|texas|community/i.test(t),
    build: (grade, title) => ({
      focus: `Analyze ${title.toLowerCase()} with maps, timelines, sourcing, and civic vocabulary.`,
      keyIdeas: [
        `Ask who / what / when / where / why. Geography and resources shape settlement, conflict, and culture.`,
        `Sources have authors, audiences, and purposes. Sourcing and corroboration reduce being misled by a single account.`,
        `Civic ideas (rights, responsibilities, constitutions, markets) connect past events to present participation.`,
      ],
      example: /constitution/i.test(title)
        ? `The U.S. Constitution sets rules for government: separation of powers, federalism, and a process for amendments. When analyzing a clause, identify the power granted and any limits.`
        : /map|geography/i.test(title)
          ? `Map skills: legend/key, scale, and compass rose. Absolute location vs relative location. Rivers and coasts often explain why cities grow.`
          : `When reading a historical account, ask: Who wrote this? What was their point of view? What other source could confirm or challenge it?`,
      practice: [
        {
          q: `Name one fact and one opinion related to today’s topic.`,
          a: `Fact = verifiable; opinion = belief/value. Examples will vary but must be correctly typed.`,
        },
        {
          q: `Why does sourcing a document matter?`,
          a: `Author, date, and purpose affect reliability and help you detect bias.`,
        },
        {
          q: `Connect this topic to life in Texas or the U.S. today in one sentence.`,
          a: `Any reasonable civic, geographic, economic, or cultural connection.`,
        },
      ],
      stretch: `Create a mini timeline (4 events) or a sourced paragraph with a thesis and two pieces of evidence.`,
    }),
  },
  {
    test: (t, s) => /hebrew|paleo|scripture|covenant|bible|hallelujah/i.test(t + s),
    build: (grade, title) => ({
      focus: `Study ${title} with careful reading, Hebrew root awareness, and context — not isolated letter games.`,
      keyIdeas: [
        `Begin with the passage in context: surrounding verses, genre, and narrative setting guide meaning.`,
        `Word study: select key terms, note Hebrew roots/glosses available in class tools, and compare related forms.`,
        `Paleo-Hebrew pictographic associations can be memory aids but must submit to grammar and context — they are not freestanding proofs.`,
      ],
      example: `Method: (1) Read the passage. (2) Choose 1–2 key words. (3) Note root and glosses. (4) Check parallelism and setting. (5) Write one paragraph on how the word contributes to the passage's meaning.`,
      practice: [
        {
          q: `Why can't a single letter picture override sentence context?`,
          a: `Meaning arises from grammar and context; pictographs are aids, not proofs.`,
        },
        {
          q: `List the five word-study steps from this course.`,
          a: `Read; select words; note root/gloss; check context; synthesize in a paragraph.`,
        },
        {
          q: `What belongs in a synthesis paragraph?`,
          a: `How the word contributes to passage meaning plus a faithful, text-rooted response.`,
        },
      ],
      stretch: `Complete a full word-study card on one verb from today's passage and share with a parent/teacher.`,
    }),
  },
  {
    test: (t, s) => /athletic|training|sport|recruit|ncaa|fitness/i.test(t + s),
    build: (grade, title) => ({
      focus: `Apply ${title.toLowerCase()} with safe training habits, academic balance, and clear goals.`,
      keyIdeas: [
        `Athletic progress pairs deliberate practice with recovery, nutrition basics, and injury prevention.`,
        `College opportunity depends on film/skills *and* academics, character, and eligibility rules.`,
        `Track measurable goals (times, lifts, skills) weekly; adjust load when form breaks down.`,
      ],
      example: `Weekly plan sketch: 3 skill sessions, 2 strength sessions, 1 recovery/mobility day. Log sleep and soreness. If form fails under fatigue, reduce volume before adding intensity.`,
      practice: [
        {
          q: `Why log recovery as carefully as workouts?`,
          a: `Adaptation happens in recovery; ignoring it raises injury and stalls progress.`,
        },
        {
          q: `Name one academic habit that protects athletic eligibility.`,
          a: `Examples: grade checks, study hall, communicating with teachers before travel.`,
        },
        {
          q: `What should you do when technique breaks at higher intensity?`,
          a: `Reduce load, rebuild form, then progress — don't ego-load through bad mechanics.`,
        },
      ],
      stretch: `Write a 7-day training-and-study calendar with one measurable athletic goal and one academic goal.`,
    }),
  },
  {
    test: (t, s) => /entrepreneur|business|finance|budget|invest|money/i.test(t + s),
    build: (grade, title) => ({
      focus: `Practice ${title.toLowerCase()} with clear definitions, simple models, and ethical decision-making.`,
      keyIdeas: [
        `Separate income, expenses, profit, and cash flow. A busy business can still fail if cash timing is wrong.`,
        `Budgets are plans: list categories, assign amounts, track actuals, and adjust.`,
        `Ethical entrepreneurship tells the truth about products, respects customers, and counts real costs — including your time.`,
      ],
      example: `Lemonade stand: $20 supplies, sell 50 cups at $1. Revenue $50, profit $30 before labor. If you worked 5 hours, note an implicit wage. Next week, budget $10 for better signage and track whether sales rise.`,
      practice: [
        {
          q: `Revenue vs profit?`,
          a: `Revenue is money in from sales; profit is revenue minus costs.`,
        },
        {
          q: `Why track actual spending against a budget?`,
          a: `To spot overspending early and reallocate before cash runs out.`,
        },
        {
          q: `Give one ethical red flag in a young business.`,
          a: `Examples: false advertising, hiding fees, unsafe products, unpaid promises.`,
        },
      ],
      stretch: `Draft a one-page mini business plan: customer, offer, price, costs, and a one-week budget.`,
    }),
  },
  {
    test: (t, s) => /act |sat |test prep|score strategy|passage mapping/i.test(t + " " + s),
    build: (grade, title) => ({
      focus: `Build test-ready strategy for ${title}: timing, evidence habits, and error logs.`,
      keyIdeas: [
        `Know the section structure and scoring. Target scores focus practice on the highest-leverage weaknesses.`,
        `For reading/English: answer from the passage/rules, not outside stories. For math: translate → represent → solve → check.`,
        `Error logs beat random volume: tag each miss by skill and redo a twin item the next day.`,
      ],
      example: `If composite goal is 24 and practice is E22 M20 R25 S23, prioritize Math timing drills twice weekly while maintaining Reading with daily passages.`,
      practice: [
        {
          q: `Why skip and return on a time-trap item?`,
          a: `Protect easier points and return with remaining time.`,
        },
        {
          q: `What belongs in an error log entry?`,
          a: `Item type, mistake cause, correct reasoning, and a follow-up drill tag.`,
        },
        {
          q: `Where must ACT/SAT Reading evidence come from?`,
          a: `The passage itself — not prior knowledge alone.`,
        },
      ],
      stretch: `Complete a timed mini-set (10–15 items). Log every miss by rule/skill and schedule one corrective drill.`,
    }),
  },
];

/** Generic instructional pack when no keyword bank matches — still teaches, not slogan-only. */
export function genericTeachPack(
  grade: number,
  subject: string,
  title: string
): TeachPack {
  const g = gradeWord(grade);
  const b = bandOf(grade);
  const focus = `Learn ${title} through definitions, a worked example, guided practice, and a quick error check for ${g} ${subject}.`;

  const keyIdeas =
    b === "early"
      ? [
          `Today we learn about ${title}. We will look carefully, say ideas out loud, and try a small example together.`,
          `Good learners go slowly: point, think, then answer. If you are stuck, look back at the example.`,
          `When you finish, tell someone one new thing you can do because of today's lesson.`,
        ]
      : b === "elem"
        ? [
            `${title} means you can explain the idea in your own words and show it with an example.`,
            `Strong ${subject.toLowerCase()} work shows steps: define → try a model → solve → check.`,
            `A common mistake is rushing to an answer without using the definition. Slow down and label your work.`,
          ]
        : b === "middle"
          ? [
              `For ${title}, start by defining key terms precisely, then apply them to a concrete example before generalizing.`,
              `Represent the idea in more than one way when possible (words, diagram, table, or equation) and check that representations agree.`,
              `After practice, write a one-sentence error analysis for any miss: what broke, and what you will do differently.`,
            ]
          : [
              `${title} requires precise definitions, justified procedures, and attention to edge cases or counterexamples.`,
              `College-ready work cites evidence or shows algebraic/scientific reasoning — not slogans.`,
              `Transfer the skill: invent a second original example and explain why the same method works.`,
            ];

  const example =
    b === "early"
      ? `Let's try one together for ${title}. First we look. Next we say what we notice. Then we try a tiny practice item and check it.`
      : `Worked example for ${title}: (1) Restate the problem. (2) Identify the rule or definition that applies. (3) Carry out the steps with labels. (4) Check with an estimate, inverse operation, or evidence citation.`;

  const practice = [
    {
      q: `In your own words, what does someone need to understand to succeed at “${title}”?`,
      a: `A clear paraphrase of the skill/definition — not only repeating the title.`,
    },
    {
      q: `Solve or explain one small item using today's method. What is your result?`,
      a: `Answers vary; must show correct use of the lesson method.`,
    },
    {
      q: `Name one mistake to avoid when practicing ${title.toLowerCase()}.`,
      a: `Examples: skipping definitions, unlabeled work, unsupported claims, or not checking.`,
    },
  ];

  const stretch =
    b === "early"
      ? `Teach today's idea to a stuffed animal or family member in your own words.`
      : b === "elem"
        ? `Write 4–5 sentences or show a diagram that uses today's skill, then revise one part for clarity.`
        : `Create an original problem or short analysis using ${title.toLowerCase()}. Solve it and explain your reasoning in 6–8 sentences.`;

  return { focus, keyIdeas, example, practice, stretch };
}

export function teachPackFor(grade: number, subject: string, title: string): TeachPack {
  const lowerTitle = title;
  const lowerSubject = subject;
  for (const bank of BANKS) {
    if (bank.test(lowerTitle, lowerSubject)) {
      return bank.build(grade, title, subject);
    }
  }
  return genericTeachPack(grade, subject, title);
}
