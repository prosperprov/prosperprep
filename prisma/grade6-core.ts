/**
 * Grade 6 core academic lessons — Prosper Prep original teaching text.
 * Topics align with open Grade 6 scopes (OUR/IM math CC BY 4.0 outlines,
 * Core Knowledge Sequence / CKHG–CKLA–CKSci free materials, NASA/USGS/LOC
 * public-domain education themes). Bodies are original; cite sources lightly.
 */
import type { LessonSeed } from "./curriculum";
import { questionsForTopic, sectionKeyForLessonOrder, type TopicLike } from "./assessments";
import { resolveVideoUrl } from "./khan-videos";
import { grade6MathYearLessons } from "./grade6-math/year";
import { grade6ElaYearLessons } from "./grade6-ela/year";

export type Grade6Authored = {
  title: string;
  description: string;
  objectives: string;
  content: string;
};

const ELA: Grade6Authored[] = [
  {
    title: "Analyzing Theme in Short Fiction",
    description: "Identify theme vs topic in short fiction using evidence → inference → theme statements.",
    objectives: "• Distinguish theme from topic and moral.\n• Trace evidence → inference → theme.\n• Revise weak theme statements into text-supported claims.",
    content: "# Analyzing Theme in Short Fiction\n\n*Grade 6 English Language Arts · Prosper Prep original teaching text. Topics align with common middle-school literacy progressions (e.g. Core Knowledge Language Arts middle-school emphasis on theme and evidence).*\n\n## Warm-up\nWrite one sentence: What is the difference between what a story is **about** and what a story **suggests about life**?\n\n## Teach\nA **topic** is a one- or two-word label (*loyalty*, *fear*, *competition*). A **theme** is a complete, arguable idea the story develops about that topic. Theme is not a plot summary and not always a tidy moral.\n\n**Path:** evidence (what the text shows) → inference (what that suggests) → theme statement (a generalizable claim the whole text supports).\n\n### Mini-passage — *Bus Stop Bench*\n> After tryouts, Malik sat on the bus-stop bench with a cut on his knee and a roster that did not include his name. His little sister waved from across the street. He almost pretended not to see her — he wanted to look “fine” for the older players walking past. Then he remembered how she had waited through every practice with a water bottle and a crooked smile. He waved her over, shared his chips, and told the truth: “I didn’t make it. I’m still proud I tried.” She nodded like that was the real win.\n\n### Model\n- **Evidence:** cut knee; not on roster; almost hides from sister; remembers her support; tells truth; shares chips.\n- **Inference:** Pride and honesty with family can matter more than looking tough to peers.\n- **Theme:** Choosing honesty with people who support you can restore dignity after a public disappointment.\n\n**Weak versions:** “Sports” (topic). “Malik didn’t make the team” (plot). “Never give up” (slogan not rooted in *this* ending).\n\n## Practice\n1. Rewrite “This story is about family” into a theme statement.\n2. Quote or paraphrase two details that support your statement.\n3. Name one detail that would *weaken* a claim that Malik “doesn’t care about making the team.”\n\n## Stretch\nWrite a 6–8 sentence CER paragraph arguing your theme. Underline claim, evidence, and reasoning.\n\n## Source note\nOriginal Prosper Prep fiction and instruction. Scope aligns with widely taught Grade 6 literary-analysis goals (theme, textual evidence).",
  },
  {
    title: "Claim, Evidence, and Reasoning",
    description: "Build CER paragraphs that link precise claims to concrete evidence and clear reasoning.",
    objectives: "• Write debatable claims (not topics).\n• Select concrete evidence.\n• Explain how evidence supports the claim.",
    content: "# Claim, Evidence, and Reasoning (CER)\n\n*Grade 6 ELA · Prosper Prep original. CER is a widely used science and literacy framework; this lesson adapts the structure for literary and informational writing.*\n\n## Teach\n- **Claim:** a debatable statement you will prove — not a topic label and not a quotation alone.\n- **Evidence:** quotations, data, or specific details.\n- **Reasoning:** the “so what?” bridge — *because / therefore* language that shows *how* evidence supports the claim.\n\n### Worked example\n**Claim:** The narrator feels trapped by routine.  \n**Evidence:** repeated images of locked doors and clocks.  \n**Reasoning:** Doors and clocks suggest blocked exits and endless cycles; therefore the imagery supports the claim that routine feels imprisoning.\n\n## Watch for this mistake\n“The quote proves it” is not reasoning. Name the *connection*.\n\n## Practice\n1. Which CER part answers “So what?” after a quotation?\n2. Fix: Claim: Parks help towns. Evidence: Parks exist. Reasoning: Because parks exist.\n3. Is “Friendship” a claim? Why or why not?\n\n## Stretch\nWrite an 8-sentence CER on a short article or story from class. Label C / E / R in the margin.\n\n## Source note\nOriginal instruction. CER pattern common in NGSS-aligned science writing and middle-school literacy.",
  },
  {
    title: "Author's Purpose and Tone",
    description: "Determine author's purpose and tone; connect diction and structure to persuasion or information.",
    objectives: "• Distinguish purpose (why) from tone (attitude).\n• Spot diction clues for persuade vs inform.\n• Name rhetorical appeals with line-level evidence.",
    content: "# Author's Purpose and Tone\n\n## Teach\n**Purpose** = why the author wrote (inform, persuade, entertain, or a blend).  \n**Tone** = the author's attitude (urgent, sarcastic, respectful, alarmed).\n\nClues: diction, imagery, organization. Loaded words often signal persuasion; neutral definitions and data often signal informing.\n\n### Rhetorical appeals (intro)\n- **Logos** — logic/data  \n- **Pathos** — emotion/story  \n- **Ethos** — credibility/trust  \n\nAlways tie an appeal back to a specific line.\n\n### Mini-analysis\nA speech pairs graduation-rate statistics (logos) with a student's story (pathos) and the speaker's years in classrooms (ethos). Annotate each, then judge whether the evidence is fair and sufficient.\n\n## Practice\n1. Purpose vs tone: which describes attitude?\n2. Name one diction clue that a text may be trying to persuade.\n3. Give one logos and one pathos example you might find in an article.\n\n## Stretch\nAnnotate a one-page opinion piece for purpose, tone, and two rhetorical moves. Evaluate effectiveness in a paragraph.\n\n## Source note\nOriginal Prosper Prep instruction aligned with Grade 6–8 reading standards on purpose, tone, and rhetoric.",
  },
  {
    title: "Comparing Texts on the Same Topic",
    description: "Compare how two texts treat the same topic: claims, evidence, structure, and point of view.",
    objectives: "• Identify shared topic and differing claims.\n• Compare evidence quality and structure.\n• Write a synthesis statement that accounts for both texts.",
    content: "# Comparing Texts on the Same Topic\n\n## Teach\nWhen two articles discuss the same topic (for example, school start times), ask:\n1. What claim does each make?\n2. What evidence does each use (studies, anecdotes, expert quotes)?\n3. How is each organized (problem→solution, cause→effect, compare→contrast)?\n4. Whose voices are centered or missing?\n\n### Worked comparison (original sketches)\n**Text A** argues later start times improve sleep using a sleep-study summary.  \n**Text B** argues earlier starts help working families using parent interview snippets.  \nNeither “wins” until you weigh evidence quality, sample size, and fairness.\n\n**Synthesis move:** “Both texts agree sleep matters, but they disagree about whose schedule should bend — students’ biology or caregivers’ work hours.”\n\n## Practice\n1. List two comparison categories beyond “agree/disagree.”\n2. Why might two true facts support opposite claims?\n3. Write one synthesis sentence for Texts A and B above.\n\n## Stretch\nFind two short online articles on one local issue. Complete a T-chart (claim / evidence / gap) and a 6-sentence comparison.\n\n## Source note\nOriginal Prosper Prep instruction; comparison routines common in Core Knowledge and EngageNY ELA modules.",
  },
  {
    title: "Grammar for Clarity: Clauses",
    description: "Use independent and dependent clauses to write clearer, more precise sentences.",
    objectives: "• Identify independent vs dependent clauses.\n• Fix fragments and run-ons.\n• Combine sentences with subordinators for clarity.",
    content: "# Grammar for Clarity: Clauses\n\n## Teach\nA **clause** has a subject and a verb.  \n- **Independent clause:** can stand alone as a sentence.  \n- **Dependent clause:** needs an independent clause (*because*, *when*, *although*, *if*, *while*…).\n\n**Fragment:** “Because the evidence was incomplete.”  \n**Fixed:** “Because the evidence was incomplete, the jury asked for more time.”\n\n**Run-on:** “The claim was bold it lacked data.”  \n**Fixed:** “The claim was bold, but it lacked data.” / “Although the claim was bold, it lacked data.”\n\n### Clarity tip\nPut the main idea in an independent clause. Use dependent clauses for conditions, time, and contrast — not for burying the point.\n\n## Practice\n1. Label each clause I or D: “When the bell rang, students filed out.”\n2. Fix the fragment: “Although the poem uses soft imagery.”\n3. Combine with a subordinator: “The experiment failed. The hypothesis was still useful.”\n\n## Stretch\nRevise a paragraph of your own writing: mark every clause, fix fragments/run-ons, and combine two choppy sentences.\n\n## Source note\nOriginal Prosper Prep grammar instruction for Grade 6 clarity goals.",
  },
  {
    title: "Poetry Analysis: Imagery and Sound",
    description: "Interpret imagery and sound devices; explain their effect on meaning and mood.",
    objectives: "• Identify imagery and sound devices.\n• Explain effect on mood/meaning.\n• Support interpretations with quoted words.",
    content: "# Poetry Analysis: Imagery and Sound\n\n## Teach\n**Imagery** = language that appeals to the senses.  \n**Sound devices** = rhyme, alliteration, assonance, onomatopoeia, repetition — tools that shape mood and emphasis.\n\nAsk: *What do I see/hear/feel?* then *So what does that do to the poem’s meaning?*\n\n### Mini-poem (original)\n> The gym lights buzz like tired bees.  \n> Sneakers squeak a nervous beat.  \n> My name waits on the clipboard —  \n> a thin line between try and triumph.\n\n**Notice:** “buzz like tired bees” (simile + sound); “squeak a nervous beat” (sound + mood); clipboard line (image of judgment).\n\n## Practice\n1. Name two sensory details in the mini-poem.\n2. What mood do the sound words create?\n3. Write one sentence explaining how the clipboard image connects to pressure.\n\n## Stretch\nAnnotate a short poem from class for imagery and one sound device; write a CER paragraph on mood.\n\n## Source note\nOriginal Prosper Prep poem and instruction; analysis moves common in middle-school poetry units.",
  },
  {
    title: "Argumentative Paragraphs",
    description: "Plan and write argumentative paragraphs with claim, ordered evidence, and rebuttal awareness.",
    objectives: "• Outline claim + 2–3 evidence beats.\n• Order evidence strongest-last or strongest-first on purpose.\n• Acknowledge a reasonable counterpoint briefly.",
    content: "# Argumentative Paragraphs\n\n## Teach\nAn argumentative paragraph is CER with intentional structure:\n1. Claim (precise).\n2. Evidence beat 1 + reasoning.\n3. Evidence beat 2 + reasoning.\n4. Brief counterpoint + reply (optional but powerful in Grade 6).\n5. Closing sentence that restates the claim without copying it.\n\n### Outline example\n**Claim:** Our school should add a quiet homework room after practice.  \n**E1:** Athletes finish late and lack a calm place to work.  \n**E2:** A pilot room at a peer school raised on-time homework rates.  \n**Counter:** Some worry about supervision costs — reply with a rotating teacher duty plan.\n\n## Practice\n1. Why can “strongest evidence last” help a paragraph?\n2. Write a one-sentence counterpoint to the claim above.\n3. Draft a closing sentence that does *not* repeat the claim word-for-word.\n\n## Stretch\nWrite a full argumentative paragraph (8–12 sentences) on a school policy; label claim, evidence, counterpoint.\n\n## Source note\nOriginal Prosper Prep writing instruction aligned with Grade 6 argument writing standards.",
  },
  {
    title: "Media Literacy: Fact vs. Opinion",
    description: "Distinguish facts from opinions in media; spot loaded language and missing context.",
    objectives: "• Classify statements as fact, opinion, or mixed.\n• Detect loaded language.\n• Ask what evidence would verify a claim.",
    content: "# Media Literacy: Fact vs. Opinion\n\n## Teach\n- **Fact:** can be checked against evidence (true or false in principle).  \n- **Opinion:** a judgment or preference.  \n- **Mixed:** a fact framed with loaded opinion words (“The *disastrous* 2% change…”).\n\n### Verification habit\nFor any bold claim, ask: *What would count as evidence? Who measured it? What is missing?*\n\n### Mini-exercise headlines (original)\n1. “City council voted 5–2 to delay the bridge repair.” (fact-checkable)  \n2. “Leaders cowardly delayed the vital bridge repair.” (opinion + loaded diction)  \n3. “Delay endangers hundreds of daily drivers.” (claim needing data)\n\n## Practice\n1. Label each headline F / O / Mixed.\n2. Rewrite #2 as a neutral factual sentence.\n3. What evidence would you need for #3?\n\n## Stretch\nCut a news paragraph from a reliable source. Highlight facts in one color and opinions in another; write three verification questions.\n\n## Source note\nOriginal Prosper Prep media-literacy instruction; complements common digital-citizenship goals.",
  },
  {
    title: "Multi-paragraph Essay Outline",
    description: "Build a multi-paragraph essay outline with thesis, topic sentences, and evidence slots.",
    objectives: "• Write a precise thesis.\n• Plan topic sentences that advance the thesis.\n• Reserve slots for evidence and a conclusion move.",
    content: "# Multi-paragraph Essay Outline\n\n## Teach\n**Thesis** = the essay’s central claim (specific, debatable, previewing the path).  \nEach body paragraph needs a **topic sentence** that advances the thesis — not a random new topic.\n\n### Four-paragraph skeleton\n1. **Intro:** hook + context + thesis  \n2. **Body 1:** topic sentence → evidence → reasoning  \n3. **Body 2:** topic sentence → evidence → reasoning (deeper or contrasting)  \n4. **Conclusion:** restate insight + significance (not brand-new claims)\n\n### Weak vs strong thesis\nWeak: “This essay is about theme.”  \nStrong: “In both mini-passages, characters regain dignity by telling hard truths to people who support them.”\n\n## Practice\n1. Write a strong thesis for a comparison of *Bus Stop Bench* and *Locker 214* (from theme lessons).\n2. Draft two topic sentences that do not merely repeat the thesis.\n3. List two pieces of evidence you would place in Body 1.\n\n## Stretch\nProduce a full outline (thesis + 2 body topic sentences + evidence bullets + conclusion note) for your next written response.\n\n## Source note\nOriginal Prosper Prep writing workshop text for Grade 6 multi-paragraph organization.",
  },
];

const MATH: Grade6Authored[] = [
  {
    title: "Ratios and Unit Rates",
    description: "Represent ratios, find unit rates, and solve with tables and equivalent ratios.",
    objectives: "• Write ratios in multiple forms.\n• Compute unit rates.\n• Use ratio tables to solve problems.",
    content: "# Ratios and Unit Rates\n\n*Grade 6 Mathematics · Prosper Prep original instruction. Topic sequence aligns with Open Up Resources / Illustrative Mathematics Grade 6 Unit 2 (ratios) under CC BY 4.0 conceptual scope — wording is original.*\n\n## Teach\nA **ratio** compares two quantities. We write \\(a:b\\), \\(a\\) to \\(b\\), or \\(\\frac{a}{b}\\) when order matters.\n\nA **unit rate** answers “how many per **one**?” — miles per 1 hour, price per 1 item, words per 1 minute.\n\n### Worked example\nA trail mix uses 6 cups pretzels for 4 cups raisins.\n- Ratio pretzels:raisins = \\(6:4 = 3:2\\).\n- Unit rate: pretzels per 1 cup raisins = \\(6 \\div 4 = 1.5\\) cups.\n\n**Ratio table** (scale by 2):\n\n| Pretzels | 3 | 6 | 9 | 12 |\n| Raisins  | 2 | 4 | 6 | 8  |\n\n### Double number line intuition\nIf 2 hours → 10 miles, then 1 hour → 5 miles (unit rate), 3 hours → 15 miles.\n\n## Practice\n1. Write 8 wins to 12 games as a simplified ratio.\n2. Juice concentrate mixes 3 oz concentrate with 9 oz water. What is the unit rate of water per 1 oz concentrate?\n3. A machine prints 45 posters in 15 minutes. Posters per minute?\n\n## Stretch\nCreate a ratio table for a recipe you choose. Scale it for 1 serving and for a class of 24.\n\n## Source note\nOriginal Prosper Prep examples. Conceptual alignment with OUR/IM Grade 6 ratios (CC BY 4.0).",
  },
  {
    title: "Percent Concepts",
    description: "Interpret percent as per hundred; find percent of a number and percent as a rate.",
    objectives: "• Convert among fractions, decimals, and percents.\n• Find percent of a number.\n• Solve simple percent problems in context.",
    content: "# Percent Concepts\n\n*Grade 6 Math · Prosper Prep original. Aligns with Grade 6 unit-rate/percent ideas in open middle-school math progressions.*\n\n## Teach\n**Percent** means “per hundred.” \\(35\\% = \\frac{35}{100} = 0.35\\).\n\n### Finding a percent of a number\n\\(20\\%\\) of 60: \\(0.20 \\times 60 = 12\\), or \\(\\frac{20}{100} \\times 60 = 12\\).\n\n### Percent as a rate\nIf 18 of 24 students finished early, the percent finished is \\(\\frac{18}{24} = 0.75 = 75\\%\\).\n\n### Benchmark percents\nKnow \\(10\\%\\), \\(25\\%\\), \\(50\\%\\), \\(75\\%\\) mentally: \\(10\\%\\) of 80 is 8; \\(25\\%\\) of 80 is 20.\n\n## Practice\n1. Write \\(\\frac{7}{20}\\) as a percent.\n2. Find \\(15\\%\\) of 80.\n3. A jacket costs \\$40. Sales tax is \\(8\\%\\). Tax amount?\n\n## Stretch\nExplain two methods to find \\(35\\%\\) of 240 (benchmark + residual, or decimal multiplication).\n\n## Source note\nOriginal Prosper Prep instruction.",
  },
  {
    title: "Fraction, Decimal, Percent Fluency",
    description: "Move fluently among fractions, decimals, and percents; compare and order mixed representations.",
    objectives: "• Convert F/D/P in both directions.\n• Compare values in mixed forms.\n• Choose the most useful form for a calculation.",
    content: "# Fraction, Decimal, Percent Fluency\n\n## Teach\nSame quantity, three outfits:\n- Fraction \\(\\frac{3}{4}\\)\n- Decimal \\(0.75\\)\n- Percent \\(75\\%\\)\n\n### Conversion routes\nFraction → decimal: divide.  \nDecimal → percent: multiply by 100 (move two places).  \nPercent → fraction: over 100, then simplify.\n\n### Compare carefully\nWhich is greater: \\(0.6\\), \\(\\frac{2}{3}\\), or \\(65\\%\\)?  \nConvert: \\(0.6 = 60\\%\\), \\(\\frac{2}{3} \\approx 66.7\\%\\), \\(65\\%\\). Order: \\(0.6 < 65\\% < \\frac{2}{3}\\).\n\n## Practice\n1. Convert \\(\\frac{5}{8}\\) to a decimal and a percent.\n2. Order from least to greatest: \\(0.4\\), \\(45\\%\\), \\(\\frac{2}{5}\\).\n3. Which form is friendliest for “tip 20% on \\$35”? Why?\n\n## Stretch\nBuild a conversion card for benchmarks \\(\\frac{1}{8}, \\frac{1}{5}, \\frac{3}{8}, \\frac{5}{8}\\) with decimal and percent.\n\n## Source note\nOriginal Prosper Prep fluency lesson.",
  },
  {
    title: "Integers on the Number Line",
    description: "Place integers on the number line; interpret opposites, absolute value, and real-world signed quantities.",
    objectives: "• Plot integers and opposites.\n• Interpret absolute value as distance from 0.\n• Explain elevation, temperature, and debt with integers.",
    content: "# Integers on the Number Line\n\n*Aligns with Grade 6 rational-number introductions in open curricula (e.g. OUR Grade 6 Unit 7 scope).*\n\n## Teach\n**Integers** are …, −2, −1, 0, 1, 2, …  \nOn a number line, negatives are left of 0; positives are right.\n\n**Opposite** of 4 is −4 (same distance, opposite direction).  \n**Absolute value** \\(|-7| = 7\\) means distance from 0 is 7.\n\n### Contexts\n- Temperature: −3°F is 3 degrees below 0.  \n- Elevation: −40 ft means 40 ft below sea level.  \n- Money: −\\$12 can mean \\$12 owed.\n\n## Practice\n1. Plot −5, 0, 3. What is the opposite of −5?\n2. Which is farther from 0: −8 or 6?\n3. A submarine is at −120 m; it rises 45 m. New depth?\n\n## Stretch\nWrite a story problem whose answer is −9 and explain the zero point you chose.\n\n## Source note\nOriginal Prosper Prep instruction; conceptual scope shares Grade 6 rational-number goals with OUR/IM.",
  },
  {
    title: "Expressions and Variables",
    description: "Translate words to algebraic expressions; evaluate expressions for given values.",
    objectives: "• Use variables to represent unknown quantities.\n• Translate verbal phrases to expressions.\n• Evaluate with substitution.",
    content: "# Expressions and Variables\n\n## Teach\nA **variable** is a letter standing for a number that can change. An **expression** combines numbers, variables, and operations — it does **not** have an equals sign (that would be an equation).\n\n### Translation bank\n- “7 more than \\(n\\)” → \\(n + 7\\)\n- “twice a number \\(x\\)” → \\(2x\\)\n- “5 less than twice \\(y\\)” → \\(2y - 5\\)\n- “the quotient of \\(m\\) and 4” → \\(\\frac{m}{4}\\)\n\n### Evaluate\nFor \\(3x + 2\\) when \\(x = 4\\): \\(3(4) + 2 = 14\\).\n\n## Practice\n1. Translate: “9 less than the product of 4 and \\(k\\).”\n2. Evaluate \\(5a - 3\\) for \\(a = 6\\).\n3. Why is \\(2(x + 3)\\) different from \\(2x + 3\\)? Test \\(x = 1\\).\n\n## Stretch\nWrite two different verbal phrases for \\(4(n - 2)\\) and evaluate for \\(n = 10\\).\n\n## Source note\nOriginal Prosper Prep algebra-readiness instruction for Grade 6.",
  },
  {
    title: "One-Step Equations",
    description: "Solve one-step equations with inverse operations and check solutions.",
    objectives: "• Solve \\(x + a = b\\), \\(x - a = b\\), \\(ax = b\\), \\(x/a = b\\).\n• Check by substitution.\n• Model with balance thinking.",
    content: "# One-Step Equations\n\n## Teach\nAn **equation** states that two expressions are equal. To solve, use **inverse operations** to isolate the variable — keep the balance true on both sides.\n\n### Models\n- \\(x + 7 = 20\\) → subtract 7 → \\(x = 13\\)\n- \\(x - 4 = 9\\) → add 4 → \\(x = 13\\)\n- \\(5x = 45\\) → divide by 5 → \\(x = 9\\)\n- \\(\\frac{x}{6} = 3\\) → multiply by 6 → \\(x = 18\\)\n\n**Always check:** substitute back into the original equation.\n\n## Practice\n1. Solve \\(x + 15 = 42\\) and check.\n2. Solve \\(8x = 56\\).\n3. A number divided by 7 is 9. Write and solve the equation.\n\n## Stretch\nWrite a one-step equation for a sports-stats story (points, yards). Solve and explain the inverse operation you chose.\n\n## Source note\nOriginal Prosper Prep instruction.",
  },
  {
    title: "Area of Triangles and Polygons",
    description: "Find area of triangles and composite polygons using formulas and decomposition.",
    objectives: "• Use \\(A = \\frac{1}{2}bh\\) for triangles.\n• Decompose polygons into rectangles and triangles.\n• Include correct square units.",
    content: "# Area of Triangles and Polygons\n\n*Conceptual alignment with Grade 6 area units in open curricula (OUR Unit 1 / related geometry).*\n\n## Teach\n**Area** measures covering in square units.  \nTriangle: \\(A = \\frac{1}{2} b h\\) where height is perpendicular to the base you chose.\n\n### Why half?\nA parallelogram with base \\(b\\) and height \\(h\\) has area \\(bh\\). A triangle is half of a parallelogram with the same base and height.\n\n### Composite shapes\nA patio shaped like a rectangle with a triangular bay: area = rectangle + triangle. Sketch, label, compute, then add.\n\n## Practice\n1. Triangle with \\(b = 10\\,\\text{cm}\\), \\(h = 7\\,\\text{cm}\\). Area?\n2. Why must height be perpendicular to the base?\n3. An L-shaped region is 8×6 with a 3×2 rectangle cut from a corner. Find the area.\n\n## Stretch\nDesign a triangular garden against an 18-ft fence (base). Choose a height and compute area; explain units.\n\n## Source note\nOriginal Prosper Prep geometry instruction.",
  },
  {
    title: "Surface Area Nets",
    description: "Use nets to find surface area of rectangular prisms and other polyhedra.",
    objectives: "• Match nets to 3D solids.\n• Compute surface area from nets or face sums.\n• Distinguish surface area from volume.",
    content: "# Surface Area Nets\n\n## Teach\nA **net** is a 2D pattern that folds into a 3D solid. **Surface area** is the total area of all faces.\n\n### Rectangular prism\nFaces: 2 of \\(l \\times w\\), 2 of \\(l \\times h\\), 2 of \\(w \\times h\\).  \n\\(SA = 2lw + 2lh + 2wh\\).\n\n### Net check\nIf a “net” overlaps when folded or leaves a face out, it is not a valid net.\n\n**Volume** (space inside) is different from surface area (wrapping).\n\n## Practice\n1. Prism \\(3 \\times 4 \\times 5\\). Find surface area.\n2. Sketch a valid net for a cube.\n3. A gift box needs wrapping paper. Do you need surface area or volume? Why?\n\n## Stretch\nBuild a paper net for a rectangular prism of your dimensions; compute SA two ways (net and formula) and compare.\n\n## Source note\nOriginal Prosper Prep instruction aligned with Grade 6 surface-area goals.",
  },
  {
    title: "Statistical Questions and Distributions",
    description: "Distinguish statistical questions; describe distributions with shape, center, and spread ideas.",
    objectives: "• Identify statistical vs non-statistical questions.\n• Read dot plots / simple histograms.\n• Describe center and spread in words.",
    content: "# Statistical Questions and Distributions\n\n*Aligns with Grade 6 statistics introductions in open middle-school math (e.g. OUR Unit 8 scope).*\n\n## Teach\nA **statistical question** anticipates variability in the data.  \n- Non-statistical: “How tall is our teacher?” (one value)  \n- Statistical: “How tall are Grade 6 students in our school?” (many values)\n\nA **distribution** shows how values are spread. Describe:\n- **Shape** (clustered, skewed, roughly symmetric)\n- **Center** (typical value — median/mean intro)\n- **Spread** (how far values tend to sit from the center)\n\n### Dot plot reading\nIf most dots sit near 7 with a few at 12, say: “Center near 7; slight right skew from high outliers.”\n\n## Practice\n1. Classify: “What is the capital of Texas?” vs “How many minutes do students spend on homework?”\n2. Why does variability matter for a statistical question?\n3. From a class dot plot of siblings (0–5), describe shape and a typical value.\n\n## Stretch\nWrite two statistical questions you could survey at Prosper Prep; predict shape before collecting (hypothetical) data.\n\n## Source note\nOriginal Prosper Prep statistics lesson; scope shares Grade 6 stats goals with OUR/IM.",
  },
];

const SCIENCE: Grade6Authored[] = [
  {
    title: "Cells as Building Blocks",
    description: "Explain cells as the basic units of life; compare plant and animal cell structures.",
    objectives: "• State the cell theory ideas at Grade 6 level.\n• Identify nucleus, membrane, cytoplasm, chloroplasts, cell wall.\n• Compare plant vs animal cells.",
    content: "# Cells as Building Blocks\n\n*Grade 6 Life Science · Prosper Prep original. Concepts reflect widely taught middle-school cell basics (CKSci / NGSS-aligned life science progressions). U.S. government education pages (NIH, NASA bio) are public domain for factual science concepts.*\n\n## Teach\nLiving things are made of **cells** — the smallest units that carry out life processes. At Grade 6 we use three big ideas:\n1. All living organisms are made of one or more cells.\n2. The cell is the basic unit of structure and function.\n3. New cells come from existing cells.\n\n### Key parts\n- **Cell membrane** — controls what enters/exits.\n- **Nucleus** — contains genetic information (DNA).\n- **Cytoplasm** — jelly-like interior where many reactions occur.\n- **Mitochondria** — release energy from food (introduce as “power stations”).\n- **Chloroplasts** (plants) — capture light energy for photosynthesis.\n- **Cell wall** (plants) — rigid support outside the membrane.\n\n### Compare\nPlant cells typically have cell walls and chloroplasts; animal cells do not. Both have membranes, nuclei, and cytoplasm.\n\n## Practice\n1. Why are viruses not usually called cells in this lesson’s sense?\n2. Name two structures plant cells have that animal cells lack.\n3. If a cell’s membrane failed, what problem would appear first?\n\n## Stretch\nDraw and label a plant cell and an animal cell. Write three sentences comparing them.\n\n## Source note\nOriginal Prosper Prep text. Factual cell concepts are standard public science knowledge; scope aligns with middle-school life science.",
  },
  {
    title: "Photosynthesis Overview",
    description: "Explain photosynthesis as the process plants use to make food from light, water, and carbon dioxide.",
    objectives: "• State inputs and outputs of photosynthesis.\n• Connect chloroplasts to the process.\n• Explain why photosynthesis matters in food webs.",
    content: "# Photosynthesis Overview\n\n## Teach\n**Photosynthesis** is how producers (especially plants and algae) capture light energy to build sugars.\n\n**Word equation (Grade 6):**  \ncarbon dioxide + water → sugar + oxygen (in the presence of light; in chloroplasts)\n\n### Why it matters\n- Plants store chemical energy in sugars.\n- Oxygen released supports many living things.\n- Almost every food web traces energy back to sunlight captured by producers.\n\n### Common misconception\nPlants do **not** “eat soil” as their main food. Soil minerals matter, but the carbon in plant mass largely comes from CO₂ in air.\n\n## Practice\n1. List the inputs and outputs of photosynthesis.\n2. Where in the plant cell does photosynthesis mainly occur?\n3. How would a long drought stress photosynthesis? (Hint: water)\n\n## Stretch\nCreate a comic strip with three panels: light capture → sugar building → oxygen release — with a one-sentence caption each.\n\n## Source note\nOriginal Prosper Prep instruction; public-domain science concepts (NASA/USGS education themes on energy and Earth systems).",
  },
  {
    title: "Human Body Systems Intro",
    description: "Introduce major human body systems and how they interact to maintain life functions.",
    objectives: "• Name major systems and primary jobs.\n• Give one interaction example between systems.\n• Explain levels: cell → tissue → organ → system.",
    content: "# Human Body Systems Intro\n\n## Teach\nThe body is organized: **cells → tissues → organs → systems**.\n\n### Snapshot of systems\n- **Circulatory** — transports blood, nutrients, gases.\n- **Respiratory** — exchanges O₂ and CO₂.\n- **Digestive** — breaks down food; absorbs nutrients.\n- **Nervous** — senses and coordinates responses.\n- **Muscular/Skeletal** — movement and support.\n- **Immune** — defense against pathogens (intro level).\n\n### Interaction example\nRunning: respiratory brings oxygen; circulatory delivers it to muscle cells; muscular system contracts; nervous system coordinates timing.\n\n## Practice\n1. Which system exchanges gases with the environment?\n2. Give one organ in the digestive system and its job.\n3. Why is “systems work alone” a misconception?\n\n## Stretch\nWrite a paragraph tracing oxygen from inhaled air to a muscle cell during exercise.\n\n## Source note\nOriginal Prosper Prep intro text for middle-school human biology.",
  },
  {
    title: "Plate Tectonics and Texas Geology Hooks",
    description: "Explain plate tectonics basics and connect to landforms, earthquakes, and Texas geology hooks.",
    objectives: "• Describe plates and plate boundaries at intro level.\n• Relate boundaries to earthquakes/volcanoes/mountains.\n• Connect one Texas/regional geology idea.",
    content: "# Plate Tectonics and Texas Geology Hooks\n\n*Earth science concepts draw on USGS public-domain education themes (plate tectonics, hazards).*\n\n## Teach\nEarth’s outer shell is broken into **tectonic plates** that move slowly. Boundary types (intro):\n- **Divergent** — plates move apart (new crust, rift/ridge ideas).\n- **Convergent** — plates move together (mountains, subduction, volcanoes).\n- **Transform** — plates slide past (earthquakes).\n\n### Texas hook\nTexas is not on a famous plate boundary like California’s transform system, but students still study sedimentary basins, Gulf Coastal Plain geology, and how ancient seas left limestone and fossils — evidence of changing Earth over deep time.\n\n## Practice\n1. Match boundary type to a likely result (earthquake / rift / mountain building).\n2. Why do many volcanoes appear near convergent boundaries?\n3. Name one Texas geology feature or rock idea from class or this lesson.\n\n## Stretch\nUsing a world map, mark the Ring of Fire and explain in 4 sentences why earthquakes cluster there.\n\n## Source note\nOriginal Prosper Prep text; USGS public-domain tectonics concepts.",
  },
  {
    title: "Atoms and Molecules",
    description: "Introduce atoms as basic units of matter and molecules as bonded atom groups.",
    objectives: "• Define atom and molecule.\n• Use simple particle models.\n• Distinguish elements from compounds at intro level.",
    content: "# Atoms and Molecules\n\n## Teach\n**Atoms** are the basic building blocks of matter. Different **elements** are different types of atoms (hydrogen, oxygen, carbon…).  \n**Molecules** are groups of atoms bonded together (O₂, H₂O, CO₂).\n\n### Particle model habits\n- Matter is made of particles too small to see.\n- Particles are in motion.\n- Spacing and motion help explain solid/liquid/gas (bridge to later lessons).\n\n### Compound vs mixture (intro)\nWater (H₂O) is a **compound** with fixed composition. Salt water is a **mixture** you can separate by physical means.\n\n## Practice\n1. Is O₂ an atom or a molecule? Explain.\n2. Why is “atoms are visible with a school microscope” usually false?\n3. Give one element and one compound from everyday life.\n\n## Stretch\nBuild a key: element / molecule of an element / compound — with one example each.\n\n## Source note\nOriginal Prosper Prep physical science intro.",
  },
  {
    title: "Chemical vs Physical Changes",
    description: "Distinguish physical and chemical changes using evidence of new substances.",
    objectives: "• Define physical vs chemical change.\n• Use evidence (color, gas, temperature, precipitate).\n• Classify everyday examples.",
    content: "# Chemical vs Physical Changes\n\n## Teach\n**Physical change:** identity of the substance stays the same (phase change, breaking, dissolving often taught here with care).  \n**Chemical change:** a new substance forms (rusting, burning, baking reactions).\n\n### Evidence clues (not proof alone)\nColor change, gas production, temperature change, light, precipitate — investigate before concluding.\n\n### Examples\n- Melting ice → physical.  \n- Digestion of starch → chemical.  \n- Tearing paper → physical.  \n- Burning paper → chemical.\n\n## Practice\n1. Classify: freezing water; frying an egg; dissolving sugar (discuss); rusting nail.\n2. Why isn’t bubbles *always* a chemical change?\n3. Design a yes/no test question to distinguish melting butter from burning butter.\n\n## Stretch\nCreate six flashcards (3 physical, 3 chemical) with evidence notes on the back.\n\n## Source note\nOriginal Prosper Prep instruction.",
  },
  {
    title: "Forces, Motion, and Newton's Laws",
    description: "Relate forces to motion changes; introduce Newton’s laws at a Grade 6 conceptual level.",
    objectives: "• Define force and net force.\n• State Newton’s 1–3 ideas in Grade 6 language.\n• Analyze a simple motion scenario.",
    content: "# Forces, Motion, and Newton's Laws\n\n## Teach\nA **force** is a push or pull. **Net force** is the overall force. Balanced forces → no change in motion; unbalanced forces → speeding up, slowing down, or changing direction.\n\n### Newton ideas (Grade 6 wording)\n1. Objects keep doing what they’re doing unless a net force acts (inertia).\n2. Stronger net force → greater acceleration; more mass → less acceleration for the same force.\n3. Forces come in pairs: if A pushes B, B pushes A equally opposite.\n\n### Scenario\nA soccer ball at rest stays at rest until kicked (1). A harder kick changes speed more (2). The ball pushes back on the foot (3).\n\n## Practice\n1. Why does a book on a table not fall through? (Hint: paired forces)\n2. Two equal opposite forces on a box — what happens to motion?\n3. Explain inertia with a bus starting suddenly.\n\n## Stretch\nPhotograph or sketch three forces in your home; label direction and whether they are balanced.\n\n## Source note\nOriginal Prosper Prep physics intro.",
  },
  {
    title: "Waves: Sound and Light",
    description: "Compare sound and light as waves; relate amplitude/frequency to experience.",
    objectives: "• Describe waves as energy transfer.\n• Connect amplitude and frequency to loudness/pitch or brightness/color ideas.\n• Contrast what sound and light need to travel.",
    content: "# Waves: Sound and Light\n\n## Teach\n**Waves** transfer energy without permanently transferring matter.  \n**Amplitude** relates to how “strong” the wave feels (loudness for sound).  \n**Frequency** relates to pitch (sound) and connects to color ideas for light at intro level.\n\n### Sound vs light\n- Sound needs a medium (air, water, solids).  \n- Light can travel through space (vacuum) — how sunlight reaches Earth.\n\n### Model habit\nUse diagrams: crest, trough, wavelength. Avoid claiming students must memorize formulas yet; prioritize relationships.\n\n## Practice\n1. Why can’t astronauts hear each other in space without radios?\n2. If amplitude increases, what happens to loudness?\n3. Name one way light behaves differently from sound.\n\n## Stretch\nMake a two-column chart: Sound | Light — medium needed, speed (qualitative), and one technology that uses each.\n\n## Source note\nOriginal Prosper Prep waves intro; NASA education themes on light/energy are public domain.",
  },
  {
    title: "Climate Factors and Human Impact",
    description: "Distinguish weather vs climate; identify factors that influence climate and human impacts.",
    objectives: "• Contrast weather and climate.\n• Name climate factors (latitude, altitude, proximity to water, ocean currents).\n• Discuss one human impact with evidence habits.",
    content: "# Climate Factors and Human Impact\n\n*Earth systems themes align with USGS/NASA education (public domain) on climate vs weather and human influence.*\n\n## Teach\n**Weather** = short-term conditions. **Climate** = long-term patterns over decades.\n\n### Factors that shape climate\n- Latitude (sun angle)\n- Altitude\n- Distance from large bodies of water\n- Ocean currents and prevailing winds\n- Landforms (rain shadows — intro)\n\n### Human impact (evidence habit)\nHumans burn fuels, change land cover, and emit greenhouse gases. Grade 6 focus: read a simple graph or map, distinguish evidence from opinion, and name one local action (energy use, trees, transport) without overstating certainty.\n\n## Practice\n1. “It snowed today, so climate is changing” — what’s wrong with that reasoning?\n2. Why might a coastal city have milder winters than an inland city at similar latitude?\n3. List one human activity and one evidence type scientists use to study climate.\n\n## Stretch\nWrite a CER paragraph: claim about a climate factor affecting a Texas region; evidence from a map/graph; reasoning.\n\n## Source note\nOriginal Prosper Prep text; NASA/USGS public-domain Earth-system concepts.",
  },
];

const SOCIAL: Grade6Authored[] = [
  {
    title: "Geography Tools and Spatial Thinking",
    description: "Use maps, scale, and spatial thinking to interpret places and patterns.",
    objectives: "• Read map keys, scale, and directions.\n• Distinguish physical vs political maps.\n• Describe a spatial pattern in words.",
    content: "# Geography Tools and Spatial Thinking\n\n*Grade 6 World History / Geography · Prosper Prep original. Map-skills emphasis aligns with Core Knowledge History and Geography (CKHG) geography foundations; Library of Congress map collections are public-domain resources for primary-source map study.*\n\n## Teach\nGeography tools help us answer: *Where? Why there? Why care?*\n\n- **Legend/key** — what symbols mean  \n- **Scale** — distance on map vs Earth  \n- **Compass rose** — cardinal directions  \n- **Latitude/longitude** — absolute location grid\n\n### Map types\nPhysical (landforms/elevation), political (borders), thematic (population, climate, trade).\n\n### Spatial thinking sentence frame\n“____ clusters near ____ because ____.”\n\n## Practice\n1. Why is a map without a scale risky for measuring trip distance?\n2. Give one question a thematic map answers that a political map might not.\n3. Describe a pattern: cities along a river — propose one reason.\n\n## Stretch\nUsing any atlas or online public-domain map (LOC), write five observations and one inference — label which is which.\n\n## Source note\nOriginal instruction; LOC maps are public domain; CKHG free materials available for download with attribution.",
  },
  {
    title: "Ancient River Civilizations",
    description: "Explain why early civilizations rose along rivers and compare Nile, Mesopotamia, Indus, and Huang He hooks.",
    objectives: "• Link rivers to farming, trade, and cities.\n• Compare at least two river civilizations.\n• Use cause→effect language for irrigation and surplus.",
    content: "# Ancient River Civilizations\n\n*Topics align with Core Knowledge Sequence / CKHG ancient history units and common Grade 6 world history scopes. Text is original Prosper Prep authorship.*\n\n## Teach\nEarly complex societies often grew in **river valleys**: Nile (Egypt), Tigris–Euphrates (Mesopotamia), Indus, Huang He (Yellow River).\n\n### Why rivers?\n- Floods deposited fertile soil.\n- Fresh water for drinking and irrigation.\n- Transport and trade corridors.\n- Surpluses → specialization (artisans, scribes, leaders).\n\n### Compare hooks\n- Egypt: predictable Nile floods; pharaoh and monumental building.  \n- Mesopotamia: less predictable floods; city-states; early writing (cuneiform) for records.  \n- Indus: planned cities (e.g. grid-like layouts in archaeological study).  \n- Huang He: fertile loess soils; flood risk; early dynastic traditions.\n\n## Practice\n1. Cause→effect: irrigation → ?\n2. Why might unpredictable floods push communities to organize large projects?\n3. Name one similarity and one difference between Egypt and Mesopotamia from this lesson.\n\n## Stretch\nCreate a four-box comparison chart (Nile / Mesopotamia / Indus / Huang He) with geography + one cultural achievement each.\n\n## Source note\nOriginal Prosper Prep survey text. For deeper free materials see Core Knowledge CKHG downloads (adapt/share with attribution; do not sell adaptations as a commercial curriculum package).",
  },
  {
    title: "Medieval to Early Modern Change",
    description: "Survey major shifts from medieval worlds toward early modern exchange, technology, and states.",
    objectives: "• Define medieval vs early modern as rough eras.\n• Identify continuity and change examples.\n• Connect trade/tech to wider connections.",
    content: "# Medieval to Early Modern Change\n\n## Teach\nHistorians use era labels carefully. Roughly, **medieval** periods feature agrarian societies, religious institutions with huge influence, and regional kingdoms/empires. **Early modern** centuries see expanded long-distance trade, new technologies (printing, navigation tools), and stronger centralized states in many regions.\n\n### Continuity and change\n- Continuity: farming remains central for most people.  \n- Change: information spreads differently after printing; oceans become highways for exchange — with both cultural flowering and conquest/catastrophe.\n\n### Student habit\nAvoid “dark ages” stereotypes. Ask: *For whom? Where? What evidence?*\n\n## Practice\n1. Give one continuity and one change from the teach section.\n2. Why is “everyone suddenly became modern in 1500” a weak claim?\n3. How could printing change religious and scientific debate?\n\n## Stretch\nTimeline of 6 events (student-researched from free encyclopedias/CKHG) spanning medieval→early modern with one sentence significance each.\n\n## Source note\nOriginal Prosper Prep survey; encourages CKHG and OER Project free materials for enrichment.",
  },
  {
    title: "World Religions and Cultures Overview",
    description: "Overview major world religions and cultures with respect, geography, and shared human questions.",
    objectives: "• Locate major traditions on a world map at intro level.\n• Distinguish belief study from stereotyping.\n• Compare a shared human question across two traditions.",
    content: "# World Religions and Cultures Overview\n\n## Teach\nGrade 6 surveys (not devotionals) ask: *What do communities believe? How do beliefs shape art, law, calendar, and charity?* Study with **respect and accuracy**.\n\n### Academic habits\n- Use primary-friendly summaries and trusted encyclopedias.\n- Separate **description** from **judgment**.\n- Notice geography: traditions spread along trade routes and empires.\n\n### Shared questions (examples)\nWhy is there suffering? How should we treat strangers? What is a good life?\n\n## Practice\n1. Why is “all people in X country believe Y” risky?\n2. Name one way religion can appear in art or architecture.\n3. Write one respectful comparison sentence about two traditions’ charity ideals (student research).\n\n## Stretch\nMap three traditions’ historic heartlands; add one arrow showing a major historical spread; cite your free source.\n\n## Source note\nOriginal Prosper Prep academic survey framing.",
  },
  {
    title: "Age of Exploration Impacts",
    description: "Analyze motives and impacts of early modern exploration and contact — including trade, conflict, and cultural change.",
    objectives: "• List motives (wealth, religion, glory/competition, knowledge).\n• Explain Columbian Exchange basics.\n• Weigh benefits and harms with evidence language.",
    content: "# Age of Exploration Impacts\n\n## Teach\nEuropean oceanic exploration (and parallel maritime activity in other regions) reshaped world connections.\n\n### Motives (memory hook)\nWealth, religious goals, state competition, and curiosity — not a single cause.\n\n### Columbian Exchange (intro)\nTransfer of plants, animals, people, and diseases between hemispheres. Outcomes included new foods in many diets **and** catastrophic epidemics for Indigenous peoples — both must be taught.\n\n### Historian habit\nAsk: *Who gained power? Who lost land or life? What evidence survives?*\n\n## Practice\n1. Name two motives for exploration voyages.\n2. Give one food that traveled across oceans (student example) and one tragic impact.\n3. Why is “discovery of empty land” a false frame?\n\n## Stretch\nCER: “The Columbian Exchange transformed diets worldwide” — evidence + acknowledgment of human cost.\n\n## Source note\nOriginal Prosper Prep instruction; Library of Congress and Smithsonian Learning Lab offer free primary sources for enrichment.",
  },
  {
    title: "Revolutions and New Governments",
    description: "Introduce revolutionary ideas and how new governments claimed legitimacy.",
    objectives: "• Define revolution vs reform at intro level.\n• Connect ideas (rights, representation) to institutional change.\n• Compare claims of legitimacy.",
    content: "# Revolutions and New Governments\n\n## Teach\nA **revolution** is a major, often rapid transformation of political power and sometimes social order. Revolutions claim new **legitimacy** — “the right to rule” based on people, law, or ideology rather than only inheritance.\n\n### Idea hooks\nRights language, representation, written constitutions, and citizenship expand in some revolutions — unevenly, and often excluding many people at first.\n\n### Compare questions\nWhat grievances? What new institutions? Who was included/excluded?\n\n## Practice\n1. Difference between protest and revolution (Grade 6 wording)?\n2. Why might a written constitution matter after a revolution?\n3. Name one group often excluded from early “rights” promises in Atlantic revolutions (student knowledge).\n\n## Stretch\nOne-pager: causes / turning point / new government feature / unfinished struggle — for a revolution studied in class.\n\n## Source note\nOriginal Prosper Prep civics-history bridge lesson.",
  },
  {
    title: "Industrialization and Society",
    description: "Explain how industrialization changed work, cities, and daily life.",
    objectives: "• Define industrialization.\n• Link factories to urbanization.\n• Weigh gains (goods, jobs) and costs (labor, pollution).",
    content: "# Industrialization and Society\n\n## Teach\n**Industrialization** shifts production toward machines, factories, and fossil-fuel energy. Effects include:\n- Urban growth\n- New social classes and labor struggles\n- Faster production of goods\n- Pollution and harsh working conditions in many early factories\n\n### Continuity\nRural life continues for many; change is uneven across regions.\n\n## Practice\n1. Cause→effect: factory jobs → city growth. Add one more link.\n2. Why might child labor laws become a reform demand?\n3. Name one benefit and one cost of early industrialization.\n\n## Stretch\nDiary entry (historical fiction, 12 sentences) from a factory worker *or* factory owner — then a 3-sentence historian’s note on bias.\n\n## Source note\nOriginal Prosper Prep survey lesson.",
  },
  {
    title: "Texas in the 19th Century",
    description: "Survey major 19th-century Texas turning points with multiple perspectives.",
    objectives: "• Sequence key 19th-century Texas eras at survey level.\n• Explain why perspective matters (Tejano, Indigenous, Anglo, Mexican, African American).\n• Use cause→effect for annexation/war/frontier change.",
    content: "# Texas in the 19th Century\n\n*TEKS-friendly Texas history survey · Prosper Prep original. Not an official TEA publication.*\n\n## Teach\nNineteenth-century Texas includes Indigenous nations’ homelands, Spanish/Mexican heritage, the Texas Revolution, Republic years, U.S. annexation, the U.S.–Mexico War context, Civil War/Reconstruction impacts, and frontier conflicts — told with **multiple perspectives**.\n\n### Historian habit\nAsk whose voices appear in a textbook image or primary source — and whose are missing. Texas State Library & Archives and Library of Congress host free primary sources.\n\n## Practice\n1. Why is “empty frontier” a misleading phrase?\n2. Give one cause and one effect related to U.S. annexation of Texas (survey level).\n3. Name two groups whose experiences differed sharply in the same decade.\n\n## Stretch\nPrimary source protocol: observe → reflect → question on a free LOC or TSLAC image; write three questions for further research.\n\n## Source note\nOriginal Prosper Prep Texas survey; encourages public archives.",
  },
  {
    title: "U.S. Civil Rights Milestones",
    description: "Survey U.S. civil rights milestones and the difference between law and lived equality.",
    objectives: "• Define civil rights at Grade 6 level.\n• Sequence selected milestones.\n• Explain nonviolent strategies and unfinished work.",
    content: "# U.S. Civil Rights Milestones\n\n## Teach\n**Civil rights** are the rights of citizens to political and social freedom and equality. U.S. history includes slavery’s abolition, Reconstruction amendments, Jim Crow segregation, and the long Black freedom struggle — plus parallel movements for other groups.\n\n### Milestone hooks (survey)\n- Legal landmarks (e.g. brown v. board as a court turning point students will study by name in later grades; introduce as school-segregation case)\n- Public protest, boycotts, voter registration, court cases, legislation\n- The gap between **law on paper** and **equality in daily life**\n\n### Character education link\nCourage, persistence, and coalition-building — without simplifying history into a finished fairy tale.\n\n## Practice\n1. Why might winning a court case not end discrimination overnight?\n2. Name one nonviolent strategy and why it can be powerful.\n3. What does “unfinished work” mean for civil rights today (student-appropriate example)?\n\n## Stretch\nBio card: one civil rights figure — goal, method, obstacle, impact — citing a Smithsonian Learning Lab or LOC free source.\n\n## Source note\nOriginal Prosper Prep civics-history lesson; Smithsonian Learning Lab & LOC for free enrichment.",
  },
];

function toSeed(subject: string, rows: Grade6Authored[]): LessonSeed[] {
  return rows.map((row, i) => {
    const order = i + 1;
    const topicLike: TopicLike = {
      title: row.title,
      focus: row.description,
      keyIdeas: row.objectives
        .split("\n")
        .map((s) => s.replace(/^•\s*/, "").trim())
        .filter(Boolean),
      practice: [
        { q: `What is the central aim of “${row.title}”?`, a: row.description },
        { q: "Name one practice or stretch move from this lesson.", a: "See Practice / Stretch sections." },
      ],
    };
    return {
      title: row.title,
      description: row.description,
      objectives: row.objectives,
      content: row.content,
      order,
      durationMin: 40,
      sectionKey: sectionKeyForLessonOrder(order),
      questions: questionsForTopic(topicLike, subject),
      videoUrl: resolveVideoUrl(subject, 6, row.title),
      topicMeta: { ...topicLike, example: row.description, stretch: "Complete the stretch task in the lesson body." },
    };
  });
}

/** Return authored Grade 6 core lessons, or null if subject is not a core academic course. */
export function grade6CoreLessons(subjectLabel: string): LessonSeed[] | null {
  const s = subjectLabel.toLowerCase();
  if (s.includes("language") || s.includes("english") || s.includes("reading")) {
    return grade6ElaYearLessons();
  }
  if (s.includes("math")) return grade6MathYearLessons();
  if (s.includes("science") || s.includes("life")) return toSeed("Science", SCIENCE);
  if (s.includes("social") || s.includes("history") || s.includes("world")) {
    return toSeed("Social Studies", SOCIAL);
  }
  return null;
}

/** Stable catalog lesson IDs from migrations/0002_catalog.sql for remote UPDATE. */
export const GRADE6_CATALOG_IDS: Record<string, string> = {
  "Analyzing Theme in Short Fiction": "cmuh9bwsd03laedanptmprhap",
  "Claim, Evidence, and Reasoning": "cmuh9bwsg03loedanpivbmdrq",
  "Author's Purpose and Tone": "cmuh9bwsk03m2edanpklcsidz",
  "Comparing Texts on the Same Topic": "cmuh9bwsn03mgedanfaxrfw8p",
  "Grammar for Clarity: Clauses": "cmuh9bwsq03muedana6if5waf",
  "Poetry Analysis: Imagery and Sound": "cmuh9bwst03n8edanp86p80mt",
  "Argumentative Paragraphs": "cmuh9bwsw03nmedanh0n034gn",
  "Media Literacy: Fact vs. Opinion": "cmuh9bwt003o0edan1z5ic1c3",
  "Multi-paragraph Essay Outline": "cmuh9bwt303oeedanmkfg4kfy",
  "Ratios and Unit Rates": "cmuh9bwto03qnedanvih6z14d",
  "Percent Concepts": "cmuh9bwtr03r1edan8kg5e9r2",
  "Fraction, Decimal, Percent Fluency": "cmuh9bwtv03rfedancwrbm2nn",
  "Integers on the Number Line": "cmuh9bwtz03rtedansyz477gk",
  "Expressions and Variables": "cmuh9bwu203s7edanr21u7izr",
  "One-Step Equations": "cmuh9bwua03sledan9lf6ng8h",
  "Area of Triangles and Polygons": "cmuh9bwud03szedandz6bpqqp",
  "Surface Area Nets": "cmuh9bwuh03tdedanc453vboy",
  "Statistical Questions and Distributions": "cmuh9bwul03tredan7mfjaneg",
  "Cells as Building Blocks": "cmuh9bwv803w0edanibeburjg",
  "Photosynthesis Overview": "cmuh9bwvc03weedan0apxjkdj",
  "Human Body Systems Intro": "cmuh9bwvg03wsedan9u35jmlp",
  "Plate Tectonics and Texas Geology Hooks": "cmuh9bwvj03x6edan3ay7fjo8",
  "Atoms and Molecules": "cmuh9bwvn03xkedang1d59hhn",
  "Chemical vs Physical Changes": "cmuh9bwvr03xyedanbngqho9w",
  "Forces, Motion, and Newton's Laws": "cmuh9bwvu03ycedan5efyq7h9",
  "Waves: Sound and Light": "cmuh9bwvx03yqedanf8fathcl",
  "Climate Factors and Human Impact": "cmuh9bww003z4edanucjlvyuq",
  "Geography Tools and Spatial Thinking": "cmuh9bwwo041dedan54hc5an6",
  "Ancient River Civilizations": "cmuh9bwwt041redanhvtpg264",
  "Medieval to Early Modern Change": "cmuh9bwwy0425edanrj5x4cdu",
  "World Religions and Cultures Overview": "cmuh9bwx3042jedan608muevz",
  "Age of Exploration Impacts": "cmuh9bwx7042xedank9f9wih1",
  "Revolutions and New Governments": "cmuh9bwxa043bedanz58djl70",
  "Industrialization and Society": "cmuh9bwxe043pedan9swonk0o",
  "Texas in the 19th Century": "cmuh9bwxh0443edanpe7c2a6w",
  "U.S. Civil Rights Milestones": "cmuh9bwxl044hedan01esbnx4",
};

export function allGrade6Authored(): { subject: string; lesson: Grade6Authored; id: string }[] {
  const rows: { subject: string; lesson: Grade6Authored; id: string }[] = [];
  for (const lesson of ELA) {
    const id = GRADE6_CATALOG_IDS[lesson.title];
    if (id) rows.push({ subject: "Language Arts", lesson, id });
  }
  for (const lesson of MATH) {
    const id = GRADE6_CATALOG_IDS[lesson.title];
    if (id) rows.push({ subject: "Mathematics", lesson, id });
  }
  for (const lesson of SCIENCE) {
    const id = GRADE6_CATALOG_IDS[lesson.title];
    if (id) rows.push({ subject: "Science", lesson, id });
  }
  for (const lesson of SOCIAL) {
    const id = GRADE6_CATALOG_IDS[lesson.title];
    if (id) rows.push({ subject: "Social Studies", lesson, id });
  }
  return rows;
}
