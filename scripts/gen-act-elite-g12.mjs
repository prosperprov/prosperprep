import { writeFileSync } from "fs";

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
function qObj(q) {
  return {
    prompt: q.prompt,
    choices: q.choices,
    correctIndex: q.correctIndex,
    explanation: q.explanation,
    order: q.order,
    points: 1,
  };
}

// ---- English ----
const engPassages = [
  { title: "Community Gardens on Maple Street", paragraphs: [
    "Last spring, neighbors on Maple Street transformed a vacant lot into a shared garden. They cleared debris, tested the soil, and sketched raised beds on scrap paper before buying lumber.",
    "Volunteers disagreed about which crops to plant. Some wanted only tomatoes and peppers; others preferred herbs that attract pollinators. After a short meeting, they compromised on a mixed plot.",
    "By midsummer, the beds produced more than families could cook. Extra harvests went to a food pantry two blocks away, and children labeled jars of dried herbs for a weekend market.",
    "The garden also changed sidewalk conversations. People who had only waved now traded recipes, borrowed tools, and watched for frost warnings together.",
    "City officials noticed the tidy lot and offered a small grant for a rain barrel and compost bin. Residents accepted—on the condition that weekends remained open workdays for anyone on the block.",
  ]},
  { title: "Repairing a Vintage Bicycle", paragraphs: [
    "When Maya inherited her grandfather's steel-frame bicycle, the chain was rusted and the tires were flat. She wheeled it into the garage, determined to ride it before winter.",
    "Online guides suggested replacing every part at once, but Maya's budget was limited. She cleaned the frame, soaked the chain in a citrus degreaser, and patched the tubes instead.",
    "The brake cables still felt spongy. A shop mechanic showed her how to seat the pads so they met the rim squarely without rubbing the tire sidewall.",
    "On her first test ride, a soft click came from the rear hub. Rather than ignore it, Maya returned to the stand, adjusted the axle cones, and checked the spokes for even tension.",
    "By October the bike carried her to school each morning. She kept a small toolkit under the seat—not for show, but because she finally understood what each tool fixed.",
  ]},
  { title: "Recording Oral Histories", paragraphs: [
    "Our civics class set out to record oral histories from residents who remembered the town before the interstate arrived. We borrowed two digital recorders and wrote a short consent form.",
    "The first interviews were stiff. Students read questions from a sheet and barely looked up. Our teacher stopped us and asked us to listen for stories that needed follow-up.",
    "Mr. Ortega described the old depot as a place where teenagers waited for buses to summer jobs. When we asked what the waiting room smelled like, he laughed and said, 'Coffee and wet wool.'",
    "Those sensory details made the transcripts livelier than any textbook paragraph. We indexed clips by theme: work, music, weather, and neighborhood change.",
    "At the library exhibit, visitors lingered at headphones longer than at photo boards. Hearing a voice, we realized, is different from reading a caption about the past.",
  ]},
  { title: "Designing a Fair Science Fair Rubric", paragraphs: [
    "Judging a middle-school science fair used to feel inconsistent. One judge loved flashy posters; another docked points for missing hypothesis statements even when the data were strong.",
    "This year the coaches drafted a rubric with four weighted rows: question clarity, method, data quality, and communication. Each row had concrete descriptors for scores 1 through 4.",
    "Students received the rubric two weeks early. Several revised their boards after realizing 'pretty colors' was not a scoring category.",
    "During judging, panelists still disagreed, but they pointed to the same row language instead of inventing private standards. Disputes shortened, and feedback comments became more specific.",
    "The winning projects were not always the most expensive. A careful investigation of ice melt rates beat a store-bought volcano because the rubric rewarded evidence over spectacle.",
  ]},
  { title: "Night Shift at the Observatory", paragraphs: [
    "Interns at the regional observatory learn that astronomy is mostly waiting—waiting for clouds to clear, for instruments to cool, for a target to rise above the trees.",
    "On my first night, I logged temperature readings every fifteen minutes while the senior observer calibrated the spectrograph. The room smelled faintly of coffee and machine oil.",
    "When a clear window opened, everyone moved quickly. I centered a star in the guide camera, then watched the exposure countdown as if it were a rocket launch.",
    "Later we stacked the frames. A faint spectral line appeared where theory predicted hydrogen. The senior observer nodded once—praise enough for a twelve-hour shift.",
    "Driving home at dawn, I understood why people stay: not for drama, but for the quiet confirmation that careful work can catch light older than any campus building.",
  ]},
];
const engSkills = [
  { tag: "concision", correct: "Prefer the concise option that keeps the meaning", wrong: ["Add a redundant intensifier", "Repeat the subject needlessly", "Insert a vague filler phrase"] },
  { tag: "comma", correct: "Use commas to set off a nonessential clause", wrong: ["Omit necessary commas around the clause", "Create a comma splice", "Place a comma between subject and verb"] },
  { tag: "agreement", correct: "Match the verb to the true subject", wrong: ["Agree with the nearest noun in a phrase", "Switch number mid-sentence", "Use a plural verb with singular each/every"] },
  { tag: "tense", correct: "Keep tense consistent with the narrative frame", wrong: ["Jump to future without a signal", "Mix past and present randomly", "Force present perfect where simple past fits"] },
  { tag: "pronoun", correct: "Make the antecedent unmistakable", wrong: ["Leave two possible antecedents", "Shift person (one → you)", "Use which for people"] },
  { tag: "parallelism", correct: "Keep list items in parallel form", wrong: ["Mix gerunds and infinitives", "Break parallelism mid-list", "Change part of speech mid-list"] },
  { tag: "transition", correct: "Choose the transition matching the logic", wrong: ["Use contrast where addition is needed", "Use cause where sequence is needed", "Insert a repetitive transition"] },
  { tag: "organization", correct: "Place the sentence to support paragraph purpose", wrong: ["Move detail to an unrelated paragraph", "Delete the needed topic sentence", "Insert an off-topic anecdote"] },
  { tag: "rhetoric", correct: "Pick the choice that achieves the stated purpose", wrong: ["Choose flashiest wording", "Add irrelevant statistics", "Weaken specificity"] },
  { tag: "apostrophe", correct: "Mark possession correctly (its vs it's)", wrong: ["Use its' (never correct)", "Pluralize with a random apostrophe", "Drop a needed possessive mark"] },
  { tag: "semicolon", correct: "Join two related independent clauses with a semicolon", wrong: ["Semicolon before a dependent clause", "Semicolon between subject and predicate", "Replace a needed colon incorrectly"] },
  { tag: "modifier", correct: "Place the modifier next to what it describes", wrong: ["Create a dangling modifier", "Create a squinting modifier", "Modify the wrong noun"] },
  { tag: "idiom", correct: "Use the idiomatic preposition/pairing", wrong: ["Prefer than instead of prefer to", "Different than when different from fits", "Capable to instead of capable of"] },
  { tag: "style", correct: "Prefer clear, direct wording", wrong: ["Choose the most ornate synonym", "Pad with empty intensifiers", "Nominalize every verb"] },
  { tag: "delete", correct: "Delete material that is off-purpose", wrong: ["Keep every sentence for length", "Delete essential evidence", "Replace a clear claim with a slogan"] },
];

function genEnglish() {
  const out = [];
  let order = 1;
  for (let p = 0; p < 5; p++) {
    const pass = engPassages[p];
    for (let i = 0; i < 15; i++) {
      const skill = engSkills[i % engSkills.length];
      const para = pass.paragraphs[i % pass.paragraphs.length];
      const underlined = para.split(" ").slice(3, 8).join(" ");
      const seed = `eng-a-${p}-${i}`;
      const prompt = `Passage ${p + 1} ("${pass.title}"), item ${i + 1}. Underlined: "${underlined}". Which choice best addresses a ${skill.tag} issue in context?`;
      const correct = i % 4 === 0 ? "NO CHANGE" : skill.correct;
      let w1 = skill.wrong[0], w2 = skill.wrong[1], w3 = skill.wrong[2];
      if (correct === "NO CHANGE") {
        w1 = "Add unnecessary words that dilute meaning";
        w2 = "Create a grammar error for variety";
        w3 = "Replace with an off-topic sentence";
      }
      const { choices, correctIndex } = rotChoices(correct, [w1, w2, w3], seed);
      const diff = i < 5 ? "EASY" : i < 10 ? "MEDIUM" : "HARD";
      out.push(qObj({
        prompt, choices, correctIndex,
        explanation: `[${diff}] ${skill.correct}. Original PP passage "${pass.title}".`,
        order: order++,
      }));
    }
  }
  return out;
}

function genMath() {
  const out = [];
  for (let i = 1; i <= 60; i++) {
    const seed = `math-a-${i}`;
    const band = i <= 20 ? "EASY" : i <= 40 ? "MEDIUM" : "HARD";
    let prompt, correct, wrong, expl;
    if (i <= 12) {
      const a = 2 + (i % 9), b = 3 + (i % 7), c = a * b + (i % 5);
      prompt = `If ${a}x + ${b} = ${c}, what is x?`;
      const x = (c - b) / a;
      correct = Number.isInteger(x) ? String(x) : String(Math.round(x * 100) / 100);
      wrong = [String(Number(correct) + 1), String(Number(correct) - 1), String(Math.round((c / a) * 100) / 100)];
      expl = `[${band}] Subtract ${b}, divide by ${a}.`;
    } else if (i <= 20) {
      const r = 2 + (i % 5);
      prompt = `A circle has radius ${r}. What is its area in terms of π?`;
      correct = `${r * r}π`;
      wrong = [`${2 * r}π`, `${r}π`, `${r * r * r}π`];
      expl = `[${band}] Area = πr².`;
    } else if (i <= 28) {
      const p = 10 * (i % 6 + 2), rate = 5 + (i % 4), pct = rate * 5;
      prompt = `A jacket costs $${p} and is discounted ${pct}%. What is the sale price?`;
      const sale = p * (1 - pct / 100);
      correct = `$${sale}`;
      wrong = [`$${p - rate}`, `$${p * pct / 100}`, `$${p + sale}`];
      expl = `[${band}] Sale = price × (1 − discount).`;
    } else if (i <= 36) {
      const x1 = i % 5, y1 = (i * 2) % 7, x2 = x1 + 3 + (i % 3), y2 = y1 + 4 + (i % 2);
      prompt = `Slope of the line through (${x1}, ${y1}) and (${x2}, ${y2})?`;
      const dy = y2 - y1, dx = x2 - x1;
      correct = dy % dx === 0 ? String(dy / dx) : `${dy}/${dx}`;
      wrong = [String(-dy / dx), `${dx}/${dy}`, String(dy)];
      expl = `[${band}] m = Δy/Δx.`;
    } else if (i <= 44) {
      const a = 1 + (i % 4), b = -6 - (i % 3), c = 5 + (i % 5);
      prompt = `For ${a}x² + (${b})x + ${c} = 0, what does the discriminant imply?`;
      const d = b * b - 4 * a * c;
      correct = d > 0 ? "Two distinct real roots" : d === 0 ? "Exactly one real root" : "No real roots";
      wrong = [d > 0 ? "No real roots" : "Two distinct real roots", "Infinitely many roots", "Roots must be integers"];
      expl = `[${band}] Discriminant = ${d}.`;
    } else if (i <= 52) {
      const leg = 3 + (i % 6);
      prompt = `Right triangle legs ${leg} and ${leg + 1}. Hypotenuse length?`;
      const hyp = Math.sqrt(leg * leg + (leg + 1) * (leg + 1));
      correct = String(Math.round(hyp * 1000) / 1000);
      wrong = [String(2 * leg + 1), String(leg * (leg + 1)), String(Math.round(hyp) + 1)];
      expl = `[${band}] c = √(a²+b²).`;
    } else {
      const n = 4 + (i % 5);
      prompt = `If sin θ = ${n}/${n + 2} (acute θ in a right triangle), cos θ = ?`;
      const adj = Math.sqrt((n + 2) * (n + 2) - n * n);
      correct = `${Math.round(adj * 1000) / 1000}/${n + 2}`;
      wrong = [`${n}/${n + 2}`, `${n + 2}/${n}`, `${Math.round(adj * 1000) / 1000}/${n}`];
      expl = `[${band}] cos = adjacent/hypotenuse.`;
    }
    // uniquify wrongs
    wrong = wrong.map((w, idx) => (w === correct ? w + " (distractor " + (idx + 1) + ")" : w));
    const { choices, correctIndex } = rotChoices(correct, wrong, seed);
    out.push(qObj({
      prompt: `Math Form A #${i}. ${prompt}`,
      choices, correctIndex, explanation: expl, order: i,
    }));
  }
  return out;
}

const readingPassages = [
  { genre: "Literary Narrative", title: "The Last Ferry", text: "Elena stood on the pier with a ticket she no longer needed. The ferry that had carried her father to the mainland every dawn had been sold to a tour company. She remembered how he used to hum while coiling rope, never looking at the water as if looking might invite bad weather. Now the dock boards popped under tourist shoes, and the ticket booth sold lemonade. Elena folded the unused ticket into a paper boat and set it on a puddle near the cleat. It drifted two inches and stopped—exactly the distance, she thought, between memory and the present." },
  { genre: "Social Science", title: "Neighborhood Time Banks", text: "Time banks allow neighbors to exchange hours of service without money. One member might tutor algebra for two hours and later redeem those hours for bicycle repair. Researchers tracking three Midwestern towns found that participants reported higher trust in neighbors after six months, even when total hours exchanged were modest. Critics argue that time banks can exclude people with unpredictable work schedules. Supporters respond that flexible credit gifts and group projects reduce that barrier. The studies stop short of claiming that time banks replace public services; instead, they suggest a complementary layer of mutual aid." },
  { genre: "Humanities", title: "Margins of a Lost Cookbook", text: "In the university archive, a 1912 community cookbook carries handwritten notes in three inks. Early marks correct oven temperatures; later ones translate spice names; the newest layer—blue ballpoint—adds memories: Dad's Sunday stew, too salty in '58. Food historian Amira Cole argues that such marginalia turn a printed artifact into a family chronicle. She warns readers not to treat every note as culinary fact; some are jokes, some are warnings. Still, the layered handwriting shows how recipes travel: not only by reprinting, but by arguing with the page." },
  { genre: "Natural Science", title: "Urban Tree Canopy and Heat", text: "Cities with denser tree canopy tend to show cooler afternoon surface temperatures in satellite data. A Prosper Prep research brief summarizing public datasets notes that a 10% increase in canopy cover correlated with roughly 1–2°F lower peak heat on comparable block types—results vary by humidity and building materials. Trees cool by shade and by transpiration, yet newly planted saplings provide little shade for years. Planners therefore combine preservation of mature trees with long-term planting. The brief emphasizes that canopy is one tool among reflective roofs, transit design, and warning systems." },
];

function genReading() {
  const out = [];
  let order = 1;
  const qtypes = ["main idea","detail","inference","vocab-in-context","author purpose","tone","structure","evidence","except/not","function of sentence"];
  for (let p = 0; p < 4; p++) {
    const pass = readingPassages[p];
    for (let i = 0; i < 10; i++) {
      const seed = `read-a-${p}-${i}`;
      const qt = qtypes[i];
      const prompt = `Reading Form A — ${pass.genre}: "${pass.title}" (${qt}). Passage excerpt: ${pass.text.slice(0, 240)}… Which choice is best?`;
      const correctMap = {
        "main idea": "The passage centers on how a place/practice carries layered human or scientific meaning.",
        detail: "A concrete detail stated in the passage supports the author's point.",
        inference: "The inference is strongly suggested by the text, not invented outside it.",
        "vocab-in-context": "Meaning is constrained by nearby sentence context.",
        "author purpose": "The author aims to explain or illuminate with specific examples.",
        tone: "Tone is reflective/analytical rather than purely hostile or giddy.",
        structure: "The passage moves from scene or claim toward complication and insight.",
        evidence: "The strongest evidence is a line that directly backs the claim.",
        "except/not": "Eliminate supported choices; the answer is what the passage does not support.",
        "function of sentence": "The sentence advances the paragraph's role (example, contrast, or conclusion).",
      };
      const correct = correctMap[qt];
      const wrong = [
        "A claim that contradicts the passage",
        "An extreme absolute the author never states",
        "Outside knowledge not grounded in this passage",
      ];
      const { choices, correctIndex } = rotChoices(correct, wrong, seed);
      const diff = i < 3 ? "EASY" : i < 7 ? "MEDIUM" : "HARD";
      out.push(qObj({
        prompt, choices, correctIndex,
        explanation: `[${diff}] ${qt}: stay inside original passage "${pass.title}".`,
        order: order++,
      }));
    }
  }
  return out;
}

function mc(prompt, correct, w1, w2, w3, expl, order) {
  const { choices, correctIndex } = rotChoices(correct, [w1, w2, w3], prompt + order);
  return qObj({ prompt, choices, correctIndex, explanation: expl, order });
}

function genScience() {
  const out = [];
  let order = 1;
  const s1 = `Science Form A — Data: Plant height (cm) vs fertilizer (g/L)
| Week | 0 g/L | 2 g/L | 4 g/L |
| 1 | 3.0 | 3.2 | 3.1 |
| 2 | 5.1 | 6.0 | 6.4 |
| 3 | 7.0 | 8.8 | 9.1 |
| 4 | 8.2 | 10.5 | 10.6 |`;
  const block1 = [
    [s1 + "\nAt week 3, which fertilizer level produced the tallest plants?", "4 g/L", "0 g/L", "2 g/L", "Cannot tell", "[EASY] 9.1 is largest at week 3."],
    [s1 + "\nFrom week 1 to 4, height at 0 g/L increased by how many cm?", "5.2", "8.2", "3.0", "7.0", "[EASY] 8.2 − 3.0 = 5.2."],
    [s1 + "\nWhich statement best describes 2 g/L vs 4 g/L by week 4?", "Heights are nearly equal (10.5 vs 10.6)", "4 g/L is twice as tall", "2 g/L is shorter than control", "No plants grew", "[MEDIUM] Difference is 0.1 cm."],
    [s1 + "\nThe independent variable is best identified as…", "Fertilizer concentration (g/L)", "Week number only", "Plant height", "Soil color", "[EASY] Fertilizer is set by experimenter."],
    [s1 + "\nA student claims fertilizer always doubles height. The data…", "Contradict the claim (gains are smaller than doubling)", "Fully support doubling every week", "Have no heights listed", "Only measure mass", "[MEDIUM] Ratios are not 2×."],
    [s1 + "\nBetween weeks 3 and 4, which level gained the most height?", "2 g/L (8.8 → 10.5)", "0 g/L", "4 g/L", "All gained equally", "[MEDIUM] Gains 1.2, 1.7, 0.5."],
    [s1 + "\nIf week 5 continued the 4 g/L trend from weeks 3–4, a cautious prediction is…", "A small additional increase, not a sudden jump", "Height drops to 0", "Height reaches 20 cm necessarily", "Plants disappear", "[HARD] Extrapolate the small recent gain."],
    [s1 + "\nWhy might week-1 differences look smaller than week-4 differences?", "Effects can accumulate over time under treatment", "Tables cannot show change", "Fertilizer only works on weekends", "Height is independent of time", "[MEDIUM] Growth accumulates."],
    [s1 + "\nWhich control comparison is most direct at week 2?", "0 g/L vs treated groups at the same week", "Week 1 vs week 4 only within 4 g/L without control", "Ignoring units", "Averaging all weeks into one cell", "[EASY] Same-week control."],
    [s1 + "\nA limitation of this table alone is that it does not report…", "Sample size or variability (error bars)", "Any numeric heights", "Fertilizer units", "Week labels", "[HARD] No n or SD shown."],
  ];
  for (const row of block1) {
    out.push(mc(row[0], row[1], row[2], row[3], row[4], row[5], order++));
  }
  const s2 = "Science Form A — Research: Students tested whether water temperature (10°C, 20°C, 30°C) affects dissolving time of identical sugar cubes stirred at the same rate in equal water volumes (3 trials/temperature, averaged).";
  const block2 = [
    [s2 + "\nDependent variable?", "Dissolving time", "Water temperature", "Stir rate", "Cube brand slogan", "[EASY] Time is measured outcome."],
    [s2 + "\nIntentionally held constant?", "Stir rate and water volume", "Temperature only", "Dissolving time", "Trial number as treatment", "[EASY] Isolate temperature."],
    [s2 + "\nAveraging three trials primarily helps…", "Reduce impact of random trial noise", "Change the independent variable", "Eliminate need for units", "Prove causation without controls", "[MEDIUM] Replication."],
    [s2 + "\nIf one 30°C trial used a crushed cube…", "Exclude/redo; surface area changed", "Keep it; temperature still counts", "Delete all 10°C data", "Change hypothesis after peeking only", "[MEDIUM] Confound."],
    [s2 + "\nGraph of mean time vs temperature most likely shows…", "Shorter times at higher temperatures", "Time exactly zero always", "Longer times always at 30°C", "No possible relationship", "[EASY] Typical dissolving trend."],
    [s2 + "\nDesign is best classified as…", "Controlled experiment with manipulated variable", "Double-blind medical trial", "Observational census of lakes", "Historical archival study", "[MEDIUM] Temperature manipulated."],
    [s2 + "\nImprove external validity for 'all sugars'?", "Test more sugar types/sizes under same protocol", "Randomize stir rate every trial", "Stop measuring time", "Report only fastest trial", "[HARD] Broader materials."],
    [s2 + "\nIf stir rate increased only for 10°C trials…", "Confounded; temperature effect unclear", "More precise automatically", "Unaffected by procedure", "Invalid only for 30°C", "[HARD] Two variables changed."],
    [s2 + "\nUnits for dissolving time should be…", "Seconds (or minutes), stated consistently", "g/L", "°C only", "Unitless cube counts", "[EASY] Time units."],
    [s2 + "\nClaim that hot water 'destroys sugar molecules'…", "Not justified; data show dissolving time only", "Proven by the averages", "Measured via formulas in the table", "Supported by mass spectrometry here", "[MEDIUM] Stay within measures."],
  ];
  for (const row of block2) out.push(mc(row[0], row[1], row[2], row[3], row[4], row[5], order++));
  const s3 = `Science Form A — Conflicting viewpoints
Scientist A: City light pollution mainly harms stargazing education; economic benefits of night lighting outweigh ecological costs.
Scientist B: Artificial night light disrupts insect navigation and bird migration; cities should adopt shielded, warmer-spectrum lighting even if upfront costs rise.`;
  const block3 = [
    [s3 + "\nWhat do A and B most clearly disagree about?", "How strongly ecological costs should drive lighting policy", "Whether the sun exists", "Whether cities have streets", "Whether insects can fly", "[EASY] Policy weight of ecology."],
    [s3 + "\nClaim more central to B?", "Night lighting can disrupt animal navigation/migration", "Stargazing is forever unimportant", "Lighting has no economic role", "Insects are unaffected", "[EASY] B's mechanism."],
    [s3 + "\nA's emphasis on economic benefits implies…", "A tradeoff framework valuing commerce/safety lighting highly", "A denies light exists", "A studies only insects", "A rejects all education", "[MEDIUM] Infer priority."],
    [s3 + "\nShielded lights cut skyglow without reducing safety — supports…", "A compromise path closer to B's recommendation", "Only A's claim that ecology never matters", "Banning all research", "Proving insects read maps", "[MEDIUM] Softens tradeoff."],
    [s3 + "\nMost useful empirical question?", "How do lighting designs affect wildlife and crash rates together?", "Mayor's favorite color?", "Letters in 'lamp'?", "Is coffee hot?", "[HARD] Joint outcomes."],
    [s3 + "\nBoth implicitly agree that…", "Urban night lighting is a real policy choice with consequences", "Lighting cannot change", "Animals do not exist", "Economics never matters", "[MEDIUM] Shared premise."],
    [s3 + "\n'Warmer-spectrum lighting' functions as…", "A proposed mitigation design feature", "Denial that light pollution exists", "Claim about daytime solar only", "Unrelated joke", "[EASY] Design recommendation."],
    [s3 + "\nIf education moves to planetariums, A's education-harm framing…", "May weaken if outdoor sky access mattered less than claimed", "Proves insects migrate indoors", "Makes economics irrelevant automatically", "Shows birds cause pollution", "[HARD] Sensitivity test."],
    [s3 + "\nEvidence that most challenges B?", "Robust data that shielded lighting yields no wildlife benefit", "A photo of a streetlamp", "A restaurant menu", "Dictionary definition of city", "[MEDIUM] Undercuts ecology claim."],
    [s3 + "\nPassage type is closest to…", "Conflicting viewpoints / scientist comparison", "Pure math calculation", "Poetry scansion", "Grammar underlining only", "[EASY] Genre ID."],
  ];
  for (const row of block3) out.push(mc(row[0], row[1], row[2], row[3], row[4], row[5], order++));
  const s4 = `Science Form A — Figures
Figure 1: Reaction rate rises as catalyst amount increases from 0 to 3 g, then plateaus.
Figure 2: At fixed catalyst 2 g, rate rises when temperature increases from 20°C to 40°C.`;
  const block4 = [
    [s4 + "\nFigure 1 suggests that beyond 3 g catalyst…", "Additional catalyst yields little extra rate under those conditions", "Rate must fall to zero", "Temperature becomes undefined", "Reaction reverses necessarily", "[EASY] Plateau."],
    [s4 + "\nFigure 2 independent variable?", "Temperature", "Catalyst mass (held fixed)", "Plateau height", "Figure number", "[EASY] Temperature varied."],
    [s4 + "\nCombining figures, conclude…", "Rate depends on more than one factor (catalyst and temperature)", "Only temperature ever matters", "Only catalyst ever matters", "Figures deny rates exist", "[MEDIUM] Multi-factor."],
    [s4 + "\nOn the Fig 1 plateau, increasing temperature (Fig 2) would likely…", "Still raise rate even if catalyst is saturating", "Have no physical meaning", "Remove the catalyst", "Force negative rate", "[HARD] Different limits."],
    [s4 + "\nFlat region on Fig 1 is…", "Saturation / diminishing returns under tested conditions", "Proof catalyst is imaginary", "Only possible if printing error", "Evidence temperature fell", "[MEDIUM] Diminishing returns."],
    [s4 + "\nNOT directly stated in descriptions?", "Exact numerical rate values", "That a plateau occurs", "That temperature was tested at 2 g catalyst", "That catalyst ranged 0–3 g before plateau", "[EASY] Qualitative figures."],
    [s4 + "\nNew trial: 5 g catalyst at 20°C — Fig 1 predicts…", "Rate near plateau, not a huge jump", "Rate ten times higher necessarily", "No reaction", "Infinite rate", "[MEDIUM] Extrapolate plateau."],
    [s4 + "\nWhy hold catalyst fixed in Fig 2?", "To isolate temperature's effect", "To maximize confusion", "Because catalyst does not exist", "To change two variables at once", "[EASY] Control."],
    [s4 + "\nOutside claim 'all catalysts are enzymes' is…", "Unnecessary/misleading for answering from the figures", "Required to read the plateau", "Only way to define temperature", "Proven by Fig 2 alone", "[MEDIUM] Use given data."],
    [s4 + "\nBest next experiment for interaction effects?", "Vary temperature at several catalyst amounts (grid)", "Stop collecting data", "Measure only paint color", "Delete Fig 1", "[HARD] Factorial follow-up."],
  ];
  for (const row of block4) out.push(mc(row[0], row[1], row[2], row[3], row[4], row[5], order++));
  return out;
}

const english = genEnglish();
const math = genMath();
const reading = genReading();
const science = genScience();
console.log({ english: english.length, math: math.length, reading: reading.length, science: science.length });

// Module 0 lessons as data
const L1_CONTENT = `# 0.1 How the ACT is built

## Objectives
- Map the four required ACT multiple-choice sections and optional Writing
- Explain composite vs section scores and the "no wrong-answer penalty" rule
- Use a timing table to plan section budgets

## Teach

### The section map
The ACT's required battery is **English → Math → Reading → Science**, with **Writing** optional afterward. Colleges care most about the **composite** (average of the four MC sections) and often about specific section floors for majors (STEM vs humanities).

| Section | Questions | Time | Rough pace |
|---|---|---|---|
| English | 75 | 45 min | ~36 sec/q; ~9 min/passage |
| Math | 60 | 60 min | ~60 sec/q; protect early points |
| Reading | 40 | 35 min | ~8–9 min per passage block |
| Science | 40 | 35 min | ~5 min per passage/set |
| Writing (opt.) | 1 essay | 40 min | 5 plan / 30 write / 5 polish |

### Scoring mechanics (what elites actually use)
Raw correct answers convert to a **1–36 section scale**. The composite averages the four scales. There is **no guessing penalty**—blank bubbles are pure lost opportunity. Superscoring (if a college allows it) combines best section scores across dates; always verify each college's policy on the college site (link-out; we do not rehost ACT Inc. materials).

### Score report literacy
A useful report is not a single number. Tag misses by **content**, **trap type**, and **timing**. A student at 28 composite with Math 24 and Reading 32 should not "study everything equally."

### Worked example
Practice raw→scale mindset (illustrative, not official ACT concordance): if English raw is strong but Science raw collapses in the last 10 items, the composite lever is **Science pacing**, not another grammar packet.

## Examples
1. Student finishes Reading with 4 blanks → those four are expected wrong. Always bubble.
2. Student spends 15 minutes on Reading passage 1 → even perfect accuracy there can sink passages 3–4.

## Practice
1. List section order and times from memory.
2. Compute a simple average: section scales 30, 28, 32, 30 → composite?
3. Name one reason Writing might still matter for a scholarship athlete.

## Check your work
1. English, Math, Reading, Science (+ optional Writing).
2. 30.
3. Some programs/scholarships still review Writing; many do not require it—Module W is optional.

## Video script (Prosper Prep original)

*[Spoken narration ~950 words — instructional video authoring script; not a claim that video is filmed.]*

"Welcome to Prosper Prep's Grade 12 ACT Prep. I'm going to walk you through how the ACT is built—not as trivia, but as a map you will use all semester.

First, the big picture. The ACT is a timed reasoning exam with four required multiple-choice sections and an optional essay. The four are English, Math, Reading, and Science, always in that order on a standard administration. Writing, if you take it, comes after. Your composite score is the average of the four multiple-choice section scores, each reported on a one-to-thirty-six scale. Writing does not fold into that composite; it is reported separately. That single fact changes how some families allocate prep time—and why our Module W is optional.

Let's put timing on the table. English: seventy-five questions in forty-five minutes. That is roughly thirty-six seconds per question, or about nine minutes per passage if the test feels like five passage blocks. Math: sixty questions in sixty minutes—one minute average—but the early items are where elites bank points, and the late items are where time sinks live. Reading: forty questions in thirty-five minutes, typically four passages, so you are living in eight-to-nine-minute blocks. Science: forty in thirty-five, often closer to five minutes per passage or data set. If you only remember one sentence from this lesson, remember this: pacing is a skill, not a personality trait. We train it.

Now scoring. You get a raw score—number correct—and that converts to a scaled section score. Different forms can have slightly different conversions; that is normal. What never changes for your strategy is the guessing rule: the ACT does not subtract points for wrong answers. A blank is a free gift to the test. If you are running out of time, bubble something. We will teach smarter elimination so those late bubbles are not pure coin flips, but even a coin flip beats a blank.

I want you to think in levers, not vibes. Suppose your practice composite is twenty-eight, with Math at twenty-four and Reading at thirty-two. Another hundred grammar drills will not move the composite as much as repairing Math pacing and content gaps. Top-percentile prep is ruthless about return on time. Our stretch goal as a school is a thirty-three-plus composite band, but your personal target starts from Diagnostic Form A in this module.

Let's tour a score report the way a coach would. Circle section scores. Under each, write three miss tags: content, trap, timing. Content means you did not know the rule or skill. Trap means you knew it but fell for a distractor pattern—extreme language, half-right answers, redundant English choices, and so on. Timing means you would have gotten it with thirty more seconds. Those three tags drive your week-two calendar.

Official ACT practice forms from ACT Incorporated are copyrighted. Inside Prosper Prep's paid platform we use original items and public-domain or Creative Commons Attribution materials only. When we point you to official practice, we link out or use school-licensed copies—we do not rehost restricted forms. That is both legal hygiene and integrity.

Before you go: memorize the section order, the four timings, the no-penalty rule, and the idea of a composite lever. Next lesson we build the elite mindset—triage, energy, and when to guess on purpose. Then we run Diagnostic Form A under real constraints so your skill map is honest.

Pause the video and say out loud: English seventy-five in forty-five; Math sixty in sixty; Reading forty in thirty-five; Science forty in thirty-five; no penalty for wrong answers; composite averages four sections. If you can say that cold, you are ready for the graded check."

## Wrap-up
Complete the lesson check. Keep a one-page "ACT map" in your binder for the semester.`;

const L2_CONTENT = `# 0.2 Elite mindset & pacing

## Objectives
- Use a triage system: now / later / guess
- Budget energy across a multi-hour exam
- Distinguish productive struggle from time-sink stubbornness

## Teach

### Triage beats heroics
Elite scorers are not people who never skip. They are people who **skip on purpose**, mark, and return. Every section has items that are slow for *you* even if they are easy for someone else.

**Now:** clear path in under your average time.  
**Later:** doable but sticky—mark and move.  
**Guess:** after eliminating 1–2 choices, or when time is nearly gone.

### Energy management
The ACT is an endurance event. Front-loading adrenaline on English can leave Reading foggy. Practice full-length sittings; train nutrition/sleep; use 10-second reset breaths between passages—not between every item.

### Pacing checkpoints
- English: after passage 2, you should not be behind by more than ~2 minutes.
- Math: item 30 near the halfway mark.
- Reading/Science: unfinished last passage is a composite killer—protect the clock.

### Worked example
Math item 22 looks like a system of equations you *can* solve in three minutes. Your rule: if not clearly under ninety seconds after setup, mark **later**, bubble a temporary guess, continue. Returning with three minutes left beats never seeing items 50–55.

## Practice
1. Write your personal "later" trigger (seconds or frustration signal).
2. For Reading, decide whether you attack hardest genre first or last—and why.
3. Explain why leaving 8 Science blanks is usually worse than educated guesses.

## Video script (Prosper Prep original)

*[Spoken narration ~1000 words — instructional video authoring script.]*

"This lesson is about the elite mindset—and I want to redefine elite. Elite does not mean never confused. Elite means you manage confusion without letting it steal the rest of the section.

We use a three-bin triage: now, later, guess. Now means you see a clean path and you take it. Later means the item is solvable but sticky—maybe a dense Reading question, maybe a Math setup that will eat three minutes. You mark it, you bubble a temporary answer so you never leave blanks, and you move. Guess means time is scarce or the item is outside your current skill; you eliminate what you can and you commit.

Students who aim for thirty-three and above lose points in two boring ways: they stubbornly wrestle a single item while easier points expire, and they panic-blank at the end. Both are training problems, not intelligence problems.

Energy is part of pacing. If you treat English like a sprint, Reading becomes fog. Build full-length practice into the semester so your brain learns the shape of the day. Sleep is a score strategy. So is knowing which snack you tolerate. This is athletics logic applied to testing.

Install checkpoints. In Math, glance at the time when you hit question thirty. In Reading, if passage one took twelve minutes, you must cut losses—shorter map, stricter evidence windows, faster outs on dead-end questions. Science rewards the same discipline: do not marry a conflicting-viewpoints passage when a clean data table is next.

Here is a worked pattern. You hit a Math item that you could finish with enough algebra. Ninety seconds in, you still do not have a setup. That is your trigger. Mark later, bubble, go. If you return, great. If you do not, you still protected the easy points that raise composite more than one heroic save.

Guessing is not moral failure. Random guessing beats blanks. Elimination guessing beats random. Our skill modules will grow your elimination trees—wrong-reason catalogs in English, plug-in and backsolve in Math, evidence discipline in Reading, variable charts in Science.

Mindset line to remember: calm is a tactic. When anxiety spikes, box-breathe for ten to twenty seconds, then restart on the next clear item—not on the item that triggered you.

Pause and write your personal later-trigger in one sentence. Then complete the graded check. Next, we lock the diagnostic protocol for Form A and you will write a personal target-score plan for teacher review."

## Wrap-up
Complete the graded check, then move to the diagnostic protocol.`;

const L3_CONTENT = `# 0.3 Diagnostic protocol (Form A)

## Objectives
- Take Diagnostic Form A under realistic constraints
- Build a personal skill map from results
- Set a stretch path toward composite **33+** while naming section floors

## Teach

### How to take Form A
1. Schedule a quiet block roughly matching real section times (plus short breaks if you simulate a full battery).
2. Use an approved calculator only where Math rules allow; know your device.
3. No phones, no pausing mid-section in the timed simulation.
4. Bubble as you go in small batches.
5. Afterward, grade with the answer key explanations and tag every miss: content / trap / timing.

### Stretch goal vs personal goal
Prosper Prep's **school stretch band is 33+ composite**. Your Form A result sets the **bridge plan**: which two levers move composite fastest in weeks 2–5?

### Skill map instructions
Create a four-quadrant map: English / Math / Reading / Science. In each, list:
- Top 3 miss tags
- One timing note
- One practice behavior for the next 7 days

### Official materials reminder
Form A inside this course is **original Prosper Prep**. For official ACT practice, use link-outs or school-licensed copies—never rehosted copyrighted ACT Inc. forms in our LMS.

<!-- WRITTEN_PROMPT:Personal target-score plan|10 -->
Write a personal ACT target-score plan (about 250–400 words) for your teacher to score.

Include:
1. Your Form A section scores (or best estimates if still testing) and estimated composite.
2. A realistic target and a stretch target (school stretch = 33+ composite).
3. The two section levers you will attack first—and why those move composite most.
4. A one-week practice schedule that respects sports/work/family constraints.
5. One mindset/pacing rule from Lesson 0.2 you will measure (e.g., "no unmarked later items").

Use clear paragraphs. Specific beats vague.
<!-- /WRITTEN_PROMPT -->

## Video script (Prosper Prep original)

*[Spoken narration ~900 words — instructional video authoring script.]*

"Diagnostic day is not about impressing anyone. It is about taking an honest photograph of your skills under time.

Form A in this course is a full-length style battery: English seventy-five, Math sixty, Reading forty, Science forty—original Prosper Prep items. Treat the clock as real. If you only have time for one section today, still honor that section's official time; do not turn a diagnostic into an untimed study session or you will misread your pacing tags.

Before you start, stage materials: pencils, calculator, water, scratch paper. Silence the phone in another room. Agree with yourself that mid-section breaks do not happen.

While you test, use triage from Lesson 0.2. The diagnostic is also a pacing rehearsal. After you finish, do not just glance at percent correct. Build the skill map. Every miss gets a tag: content, trap, or timing. Timing misses that you actually knew how to do are some of the cheapest points to recover in the next month.

Our school stretch goal is a thirty-three-plus composite. If Form A lands at twenty-six, that does not mean you failed Prosper Prep. It means your bridge is visible. Maybe Math and Science are the levers; maybe English rhetoric timing is the hidden leak. The written target-score plan you submit teaches you to coach yourself—and gives your teacher a window into your judgment.

Do not copy official ACT forms into shared drives. We link out for official practice. Integrity is part of college-ready character.

When Form A is done and tagged, submit your personal target-score plan in the written-work box on this lesson. Then glance at the Form A section quizzes on the course page—English, Math, Reading, Science—and complete any sections still outstanding.

You are not behind. You are instrumented. That is how elites train."

## Wrap-up
Complete Form A sections on the course page. Submit the written plan. Bring your skill map to the next live session.`;

function emitTsArray(name, qs) {
  return `function ${name}(): QuestionSeed[] {\n  return ${JSON.stringify(qs, null, 2)} as QuestionSeed[];\n}\n`;
}

const file = `/**
 * Elite Grade 12 ACT Prep — Module 0 lessons + Diagnostic Form A item banks.
 * All passages/items original Prosper Prep (not ACT Inc.).
 */
import type { LessonSeed } from "./curriculum";
import type { QuestionSeed } from "./assessments";

export type FormAQuizSeed = {
  title: string;
  description: string;
  sectionKey: string;
  order: number;
  questions: QuestionSeed[];
};

export function actEliteG12Lessons(): LessonSeed[] {
  return [lesson01(), lesson02(), lesson03()];
}

function lesson01(): LessonSeed {
  return {
    title: "0.1 How the ACT is built",
    description: "Section map, timing table, composite vs section scores, and no-penalty guessing.",
    objectives: [
      "• Map ACT sections, timings, and optional Writing",
      "• Explain composite scoring and superscore basics",
      "• Apply the no wrong-answer penalty rule to pacing",
    ].join("\\n"),
    content: ${JSON.stringify(L1_CONTENT)},
    order: 1,
    durationMin: 30,
    sectionKey: "module-0",
    questions: [
      {
        prompt: "Which order are the four required ACT multiple-choice sections administered?",
        choices: ["English, Math, Reading, Science", "Reading, English, Math, Science", "Math, English, Science, Reading", "Science, Math, Reading, English"],
        correctIndex: 0,
        explanation: "[EASY] Standard order: English → Math → Reading → Science.",
        order: 1,
        points: 1,
      },
      {
        prompt: "A blank answer on the ACT multiple-choice sections…",
        choices: ["Cannot be worse than a wrong guess because wrong answers are penalized", "Is preferable to guessing because of a −¼ penalty", "Is pure lost opportunity because there is no wrong-answer penalty", "Raises your composite automatically"],
        correctIndex: 2,
        explanation: "[EASY] No penalty for wrong answers—never leave blanks.",
        order: 2,
        points: 1,
      },
      {
        prompt: "Section scales of 31, 29, 33, and 31 yield a composite closest to…",
        choices: ["31", "33", "29", "36"],
        correctIndex: 0,
        explanation: "[MEDIUM] Average (31+29+33+31)/4 = 31.",
        order: 3,
        points: 1,
      },
      {
        prompt: "English timing is best remembered as…",
        choices: ["75 questions / 45 minutes", "60 questions / 60 minutes", "40 questions / 35 minutes", "1 essay / 40 minutes"],
        correctIndex: 0,
        explanation: "[EASY] English = 75/45; Math 60/60; Reading & Science 40/35; Writing optional 40 min.",
        order: 4,
        points: 1,
      },
    ],
    topicMeta: {
      title: "How the ACT is built",
      focus: "Structure, timing, scoring",
      keyIdeas: ["Four MC sections + optional Writing", "Composite averages four scales", "No wrong-answer penalty"],
      practice: [
        { q: "Name four MC sections", a: "English Math Reading Science" },
        { q: "Penalty for wrong answers?", a: "None" },
      ],
    },
  };
}

function lesson02(): LessonSeed {
  return {
    title: "0.2 Elite mindset & pacing",
    description: "Triage (now/later/guess), energy management, and section checkpoints for 33+ aims.",
    objectives: [
      "• Apply now/later/guess triage under time pressure",
      "• Set section pacing checkpoints",
      "• Separate productive struggle from time sinks",
    ].join("\\n"),
    content: ${JSON.stringify(L2_CONTENT)},
    order: 2,
    durationMin: 30,
    sectionKey: "module-0",
    questions: [
      {
        prompt: "In Prosper Prep triage, a 'later' item should usually be…",
        choices: ["Abandoned forever without bubbling", "Marked, temporarily bubbled, and revisited if time remains", "Solved at all costs before moving on", "Reported to ACT Inc. during the test"],
        correctIndex: 1,
        explanation: "[EASY] Mark + temporary bubble + return.",
        order: 1,
        points: 1,
      },
      {
        prompt: "Why are end-of-section blanks especially costly?",
        choices: ["Wrong answers cost −1 scaled point each", "There is no penalty, so blanks are lost chances at correct bubbles", "Blanks raise your Writing score", "Blanks improve superscores automatically"],
        correctIndex: 1,
        explanation: "[EASY] No penalty → blanks are pure loss.",
        order: 2,
        points: 1,
      },
      {
        prompt: "A useful Math checkpoint named in this lesson is…",
        choices: ["Be near item 30 around the halfway time mark", "Finish all 60 before minute 20", "Skip all geometry until the last 5 minutes", "Only answer even-numbered items first"],
        correctIndex: 0,
        explanation: "[MEDIUM] Mid-test checkpoint near item 30.",
        order: 3,
        points: 1,
      },
      {
        prompt: "Elite pacing treats calm resets as…",
        choices: ["A waste of seconds that never helps", "A tactic between passages/items when anxiety spikes", "Proof you should cancel the exam", "Only for the Writing section"],
        correctIndex: 1,
        explanation: "[MEDIUM] Short resets preserve accuracy.",
        order: 4,
        points: 1,
      },
    ],
    topicMeta: {
      title: "Elite mindset & pacing",
      focus: "Triage and energy",
      keyIdeas: ["Now/later/guess", "Checkpoints", "No blank left behind"],
      practice: [
        { q: "What is triage?", a: "Now/later/guess sorting" },
        { q: "Blank vs guess?", a: "Guess" },
      ],
    },
  };
}

function lesson03(): LessonSeed {
  return {
    title: "0.3 Diagnostic protocol",
    description: "How to take Form A, build a skill map, and set 33+ stretch targets with a written plan.",
    objectives: [
      "• Run Form A under realistic timing rules",
      "• Tag misses into a four-section skill map",
      "• Submit a personal target-score plan for teacher grading",
    ].join("\\n"),
    content: ${JSON.stringify(L3_CONTENT)},
    order: 3,
    durationMin: 40,
    sectionKey: "module-0",
    questions: [
      {
        prompt: "While simulating Form A, the best practice is to…",
        choices: ["Pause freely whenever stuck so accuracy looks higher", "Honor section time limits and use triage under the clock", "Use any online calculator app including phone CAS", "Skip bubbling until the end of all four sections"],
        correctIndex: 1,
        explanation: "[EASY] Real timing + triage = valid diagnostic.",
        order: 1,
        points: 1,
      },
      {
        prompt: "Prosper Prep's school stretch composite band named in this course is…",
        choices: ["33+", "20 exactly", "36 only or nothing", "15–18"],
        correctIndex: 0,
        explanation: "[EASY] Stretch goal 33+; personalize from diagnostic.",
        order: 2,
        points: 1,
      },
      {
        prompt: "A skill-map miss tag of 'timing' means…",
        choices: ["You never learned the content at all", "You likely could solve it with better clock management", "The question was invalid", "You should leave it blank next time"],
        correctIndex: 1,
        explanation: "[MEDIUM] Timing tag = recoverable with pacing.",
        order: 3,
        points: 1,
      },
      {
        prompt: "Official ACT Inc. practice forms inside our paid LMS should be…",
        choices: ["Rehosted as PDFs for convenience", "Linked out or used via proper school licenses—not rehosted", "Replaced by random social-media dumps", "Ignored entirely forever"],
        correctIndex: 1,
        explanation: "[EASY] No rehosting copyrighted ACT forms.",
        order: 4,
        points: 1,
      },
    ],
    topicMeta: {
      title: "Diagnostic protocol",
      focus: "Form A + skill map",
      keyIdeas: ["Timed simulation", "33+ stretch", "Miss tagging"],
      practice: [
        { q: "Stretch composite?", a: "33+" },
        { q: "Rehost ACT forms?", a: "No" },
      ],
    },
  };
}

export function actFormAQuizzes(): FormAQuizSeed[] {
  return [
    {
      title: "ACT Form A — English",
      description: "Diagnostic English: 75 original MCQ (5 passages × 15). 45-minute section timing target. Not an ACT Inc. form.",
      sectionKey: "form-a-english",
      order: 1,
      questions: formAEnglishQuestions(),
    },
    {
      title: "ACT Form A — Math",
      description: "Diagnostic Math: 60 original MCQ. 60-minute section timing target. Not an ACT Inc. form.",
      sectionKey: "form-a-math",
      order: 2,
      questions: formAMathQuestions(),
    },
    {
      title: "ACT Form A — Reading",
      description: "Diagnostic Reading: 40 original MCQ (4 passages × 10). 35-minute section timing target. Not an ACT Inc. form.",
      sectionKey: "form-a-reading",
      order: 3,
      questions: formAReadingQuestions(),
    },
    {
      title: "ACT Form A — Science",
      description: "Diagnostic Science: 40 original MCQ across data, research, and conflicting viewpoints. 35-minute section timing target. Not an ACT Inc. form.",
      sectionKey: "form-a-science",
      order: 4,
      questions: formAScienceQuestions(),
    },
  ];
}

${emitTsArray("formAEnglishQuestions", english)}
${emitTsArray("formAMathQuestions", math)}
${emitTsArray("formAReadingQuestions", reading)}
${emitTsArray("formAScienceQuestions", science)}
`;

writeFileSync("/workspace/online-school/prisma/act-elite-g12.ts", file);
console.log("Wrote act-elite-g12.ts bytes", file.length);
