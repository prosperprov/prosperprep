/**
 * Specialty Prosper Prep tracks: Test Prep, Athletics, Business/Finance, Bible.
 * Educational content only — not legal, recruiting, or investment advice.
 * Original lesson text; structures informed by common classroom skill maps.
 */

import type { LessonSeed } from "./curriculum";
import { actEliteG12Lessons } from "./act-elite-g12";
import { grade7EnterpriseUnitOne } from "./grade7-enterprise";
import { grade10BibleLessons, SHOWCASE_GRADE } from "./showcase-grade10";
import {
  questionsForTopic,
  sectionKeyForLessonOrder,
  type QuestionSeed,
  type TopicLike,
} from "./assessments";
import { resolveVideoUrl } from "./khan-videos";
import { teachPackFor } from "./teach-banks";

export type Topic = TopicLike & {
  example: string;
  stretch: string;
};

function gradeWord(grade: number) {
  return grade === 0 ? "Kindergarten" : `Grade ${grade}`;
}

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

function buildSpecialtyLesson(
  grade: number,
  subjectLabel: string,
  topic: Topic,
  order: number,
  durationMin = 45,
  opts?: { bibleMode?: boolean }
): LessonSeed {
  const g = gradeWord(grade);
  const bibleMode = opts?.bibleMode === true;

  const missionLine = bibleMode
    ? `This course studies Scripture through the **Hallelujah Scriptures** framing, with careful attention to **Paleo-Hebrew letter forms**, **Hebrew roots**, and **original word meanings**. Work reverently and academically.`
    : `Prosper Prep prepares students for **college athletic opportunities** and for **entrepreneurial / financial independence** after high school — whether or not they attend college.`;

  const teachExtra = bibleMode
    ? [
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
      ].join("\n")
    : "";

  const content = [
    `Welcome to **${subjectLabel}** at Prosper Preparatory (${g}).`,
    ``,
    `Today's lesson: **${topic.title}**. ${topic.focus}`,
    ``,
    missionLine,
    ``,
    `## Learning goals`,
    ...topic.keyIdeas.map((k) => `- ${k}`),
    ``,
    `## Teach`,
    ...topic.keyIdeas.map(
      (idea, i) =>
        `### ${bibleMode ? "Study point" : "Concept"} ${i + 1}\n\n${idea}\n\n${
          bibleMode
            ? "In your notebook: record the term, a short gloss, and one contextual observation from the passage."
            : "Write a short note: how does this connect to athletics, college readiness, business, or character?"
        }`
    ),
    teachExtra,
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
    bibleMode
      ? `Summarize the key word(s), root insight, and contextual meaning in 4–6 sentences. Then complete the graded check below.`
      : `Summarize today's lesson in 4–6 sentences. Then complete the graded check below before the lesson can be marked complete.`,
  ].join("\n");

  const questions: QuestionSeed[] = questionsForTopic(topic, subjectLabel);

  // Deepen thin specialty topics with teach-bank paragraphs when available
  const pack = teachPackFor(grade, subjectLabel, topic.title);
  const enrichedContent =
    topic.keyIdeas.join(" ").length < 220
      ? content.replace(
          `## Teach\n`,
          `## Teach\n\n${pack.keyIdeas.map((idea, i) => `### Teaching point ${i + 1}\n\n${idea}`).join("\n\n")}\n\n`
        )
      : content;

  return {
    title: topic.title,
    description: topic.focus,
    objectives: topic.keyIdeas.map((k) => `• ${k}`).join("\n"),
    content: enrichedContent,
    order,
    durationMin,
    sectionKey: sectionKeyForLessonOrder(order),
    questions,
    videoUrl: resolveVideoUrl(subjectLabel, grade, topic.title),
    topicMeta: topic,
  };
}

function pack(
  grade: number,
  subjectLabel: string,
  topics: Topic[],
  durationMin = 45,
  opts?: { bibleMode?: boolean },
  maxLessons = 9
): LessonSeed[] {
  return topics
    .slice(0, maxLessons)
    .map((topic, i) =>
      buildSpecialtyLesson(grade, subjectLabel, topic, i + 1, durationMin, opts)
    );
}

/* ========== ACT Prep ========== */
export function actPrepLessons(grade: number): LessonSeed[] {
  const topics: Topic[] = [
    t(
      "ACT Overview & Score Strategy",
      "Learn the ACT structure, scoring, and a personal target-score plan.",
      [
        "The ACT has English, Math, Reading, Science, and an optional Writing section.",
        "Composite scores average the four multiple-choice sections; colleges publish middle-50% ranges.",
        "A paced study plan beats last-minute cramming — especially for student-athletes.",
      ],
      "If your target composite is 24 and practice shows English 22, Math 20, Reading 25, Science 23, prioritize Math timing drills twice weekly while keeping Reading strong with daily passages.",
      [
        { q: "Name the four required ACT multiple-choice sections.", a: "English, Math, Reading, Science" },
        { q: "Why set a target score?", a: "It focuses practice on the sections that move the composite most." },
        { q: "True or false: Optional Writing always changes the composite.", a: "False — Writing is scored separately." },
      ],
      "Look up three colleges you care about and record their ACT middle-50% ranges. Set one realistic target and one stretch target."
    ),
    t(
      "ACT English: Grammar & Rhetoric",
      "Practice common grammar rules and rhetorical skills questions.",
      [
        "ACT English rewards concise, clear writing and standard conventions.",
        "Watch subject-verb agreement, pronouns, commas, and redundancy.",
        "Rhetoric items ask which choice best achieves a stated purpose.",
      ],
      "Sentence: \"The players, who trains daily, improves.\" Error: who/trains should match plural players → \"who train\" and verb \"improve.\" On rhetoric, if the goal is \"add a specific detail,\" pick the choice with concrete information, not a vague claim.",
      [
        { q: "Fix: \"Each of the athletes have a plan.\"", a: "Each … has a plan (each is singular)." },
        { q: "What do rhetoric questions prioritize?", a: "Purpose, audience, clarity, and organization — not just \"sounds fancy.\"" },
        { q: "Name two punctuation issues ACT loves.", a: "Commas with nonessential clauses; apostrophes; run-ons / comma splices." },
      ],
      "Complete a 15-question English timed set (or a released practice chunk). Log every miss by rule type."
    ),
    t(
      "ACT Math: Shortcuts & Timing",
      "Build speed with algebra, geometry, and calculator discipline.",
      [
        "ACT Math increases in difficulty; early items should be quick points.",
        "Translate word problems into equations before computing.",
        "Know when to estimate, plug in answers, or draw a figure.",
      ],
      "A ratio problem: 3:5 parts mix to 40 ounces total. Parts = 8, so one part = 5 oz → 15 and 25. Checking answer choices by plugging often saves algebra time.",
      [
        { q: "Why skip and return on hard mid-test items?", a: "Protect easy points and avoid time traps." },
        { q: "Give one ACT Math strategy besides \"solve fully.\"", a: "Plug in answer choices, pick numbers, estimate, or draw." },
        { q: "What should you bring besides a pencil?", a: "An approved calculator you know well; spare batteries if needed." },
      ],
      "Time yourself on 15 mixed algebra/geometry items. Aim for accuracy first, then shave seconds."
    ),
    t(
      "ACT Reading: Passage Mapping",
      "Use map-and-attack methods for prose fiction, social science, humanities, and natural science.",
      [
        "Skim structure (purpose, tone, paragraph jobs) before detailed questions.",
        "Evidence must come from the passage — not outside knowledge.",
        "Line-reference questions still need full-sentence context.",
      ],
      "After a 2-minute map, label paragraphs: P1 claim, P2 example, P3 counterpoint. When asked \"main purpose,\" choose the option matching the whole passage, not one vivid detail.",
      [
        { q: "What are the four ACT Reading passage types?", a: "Prose Fiction, Social Science, Humanities, Natural Science" },
        { q: "Where must answer evidence live?", a: "In the passage text" },
        { q: "What is a passage map?", a: "Quick notes on structure/purpose before diving into questions" },
      ],
      "Read one dense nonfiction paragraph and write a one-sentence purpose + two supporting evidence quotes."
    ),
    t(
      "ACT Science: Data & Experiments",
      "Read graphs, tables, and experimental setups efficiently.",
      [
        "ACT Science is mostly data interpretation, not memorized facts.",
        "Identify independent vs. dependent variables quickly.",
        "Conflicting viewpoints passages reward careful comparison.",
      ],
      "A table shows plant height vs. fertilizer amount. If height rises then plateaus, the best claim is \"increases up to a point,\" not \"always increases forever.\"",
      [
        { q: "Do you need advanced science classes to score well?", a: "Helpful background helps, but graph/table skills dominate." },
        { q: "Define independent variable.", a: "What the experimenter changes." },
        { q: "First move on a graph question?", a: "Read axes, units, and legend carefully." },
      ],
      "Find any chart in a textbook or reputable source. Write three ACT-style questions about it and answer them."
    ),
    t(
      "Timing Drills & Section Pacing",
      "Practice pacing plans for each ACT section.",
      [
        "Know roughly how many minutes per passage or question cluster.",
        "Mark tough items and move — unfinished easy items hurt more.",
        "Simulate real breaks and seating conditions when possible.",
      ],
      "Reading pacing example: ~8–9 minutes per passage including questions. If one passage eats 12 minutes, cut losses and bank the next passage.",
      [
        { q: "What is a \"banked\" question strategy?", a: "Skip time-sinks early; return if time remains." },
        { q: "Why take full-length practice tests?", a: "Build stamina and realistic pacing under fatigue." },
        { q: "Name one pre-test habit.", a: "Sleep, nutrition, materials checklist, arrival plan." },
      ],
      "Create a one-page pacing card for English/Math/Reading/Science with your personal checkpoints."
    ),
    t(
      "Error Logs & Score Building",
      "Turn mistakes into a study system that raises scores.",
      [
        "An error log tracks miss type, reason, and fix strategy.",
        "Re-do missed items days later to confirm mastery.",
        "Small weekly gains compound across a season.",
      ],
      "Log entry: Math #18 — quadratic — rushed sign error — fix: box the sign, re-check plug-in. Next week: 10 signed-number drills.",
      [
        { q: "What three fields belong in an error log?", a: "Item/topic, why missed, next action" },
        { q: "Why retest old misses?", a: "To verify the fix stuck under timed conditions" },
        { q: "How does athletics schedule affect ACT prep?", a: "Plan short consistent sessions around practice/travel." },
      ],
      "Build an error-log template and fill it after your next practice set."
    ),
    t(
      "Test Day Execution",
      "Execute calmly: materials, mindset, and section starts.",
      [
        "Arrive early with admission ticket, ID, pencils, calculator, snacks if allowed.",
        "Use the first minute of each section to settle pacing.",
        "Guess strategically rather than leaving blanks (ACT has no wrong-answer penalty).",
      ],
      "Bubble as you go in small batches to avoid cascading erase errors. If anxiety spikes, box breathing for 20 seconds, then restart on the next easy item.",
      [
        { q: "Does ACT penalize wrong answers?", a: "No — answer every question." },
        { q: "Name three test-day items.", a: "ID, ticket, pencils, approved calculator, watch if allowed" },
        { q: "What should you do in the last 2 minutes of a section?", a: "Fill remaining blanks and spot-check easy marks." },
      ],
      "Write a personal test-day checklist including travel time and materials."
    ),
    t(
      "ACT Writing (Optional) Essentials",
      "Outline a clear persuasive essay if you take the Writing section.",
      [
        "Understand the prompt's perspectives and stake a clear position.",
        "Organize: thesis, reasons, address a counterpoint, conclusion.",
        "Specific examples beat vague claims.",
      ],
      "Thesis pattern: \"While Perspective A emphasizes X, the stronger approach is Y because…\" Then give two concrete examples (school policy, athletics funding, or a business decision).",
      [
        { q: "Must you agree with a listed perspective?", a: "No — you can blend or propose a nuanced view, but stay clear." },
        { q: "What does a counterpoint paragraph do?", a: "Shows you considered another view, then explains your stance." },
        { q: "How long is ACT Writing?", a: "40 minutes (confirm current timing on official materials)." },
      ],
      "Outline a 4-paragraph response to a sample issue about student-athlete academic balance."
    ),
  ];
  return pack(grade, "ACT Prep", topics);
}

/* ========== SAT Prep ========== */
export function satPrepLessons(grade: number): LessonSeed[] {
  const topics: Topic[] = [
    t(
      "SAT Structure & Digital Testing Habits",
      "Know SAT sections, adaptive basics, and score goals.",
      [
        "The SAT emphasizes Reading & Writing and Math modules.",
        "Official practice beats random internet dumps.",
        "Target scores should match scholarship and admission goals.",
      ],
      "If Math is your weaker module, schedule three focused Math blocks weekly and one mixed review, then reassess with an official practice test every 3–4 weeks.",
      [
        { q: "Where should practice tests come from?", a: "Official College Board / trusted aligned practice" },
        { q: "Why set a target score?", a: "To prioritize the skills that move admissions and aid outcomes" },
        { q: "Name one digital-test habit.", a: "Know the on-screen tools; practice on the same device type when possible" },
      ],
      "List three programs (college or scholarship) and their SAT score expectations if published."
    ),
    t(
      "Reading & Writing: Command of Evidence",
      "Link claims to textual evidence efficiently.",
      [
        "Correct answers are supported by specific lines or data.",
        "Eliminate choices that overclaim or contradict the passage.",
        "Vocabulary-in-context depends on surrounding meaning.",
      ],
      "If a question asks what best supports a claim about training load, choose the sentence with measurable detail (hours, intensity), not a motivational slogan.",
      [
        { q: "What makes evidence \"strong\" on SAT?", a: "Specific, relevant support for the exact claim" },
        { q: "How do you handle vocabulary-in-context?", a: "Substitute choices into the sentence; pick best fit" },
        { q: "Common trap?", a: "True statement that doesn't answer the question asked" },
      ],
      "Annotate a short article: underline one claim and two evidence sentences."
    ),
    t(
      "Reading & Writing: Standard English Conventions",
      "Master boundaries, agreement, and clarity.",
      [
        "Sentence boundaries prevent run-ons and fragments.",
        "Pronouns and verbs must agree with antecedents/subjects.",
        "Punctuation follows structure, not \"pause where you breathe.\"",
      ],
      "Two independent clauses joined by a comma alone is a comma splice — fix with period, semicolon, or conjunction.",
      [
        { q: "Fix a comma splice in one way.", a: "Period / semicolon / comma+FANBOYS / restructure" },
        { q: "\"The team lost their\" — issue?", a: "Collective noun agreement depends on context; SAT prefers consistent clear agreement" },
        { q: "What is a sentence fragment?", a: "Incomplete sentence missing subject, verb, or complete thought" },
      ],
      "Write five sentences: two correct, three with deliberate errors; then correct them."
    ),
    t(
      "SAT Math: Algebra Fluency",
      "Solve linear equations, systems, and function basics quickly.",
      [
        "Isolate variables systematically and check with substitution.",
        "Systems can be solved by substitution, elimination, or graphing insight.",
        "Word problems need defined variables before algebra.",
      ],
      "2x + 5 = 17 → 2x = 12 → x = 6. Check: 12 + 5 = 17. For systems, elimination when coefficients align saves time.",
      [
        { q: "First step in many word problems?", a: "Define variables and write equations" },
        { q: "How do you verify a solution?", a: "Substitute back into the original equation(s)" },
        { q: "What does slope represent?", a: "Rate of change between variables" },
      ],
      "Create two athlete-context word problems (distance/time or scoring averages) and solve them."
    ),
    t(
      "SAT Math: Problem-Solving & Data",
      "Interpret ratios, percentages, and statistical displays.",
      [
        "Percent change = difference/original × 100%.",
        "Unit rates unlock proportional reasoning.",
        "Read graph axes and sample notes before concluding.",
      ],
      "Price rises from $40 to $50 → increase $10 → 10/40 = 25% increase. A scatterplot with positive association does not prove causation.",
      [
        { q: "Compute 20% of 85.", a: "17" },
        { q: "Why isn't correlation causation?", a: "A third factor or chance may explain the association" },
        { q: "What is a unit rate?", a: "Amount per one unit (e.g., miles per hour)" },
      ],
      "Find two product sizes and compute unit rates; decide which is better value."
    ),
    t(
      "Advanced Math & Geometry Essentials",
      "Quadratics, exponents, and geometry relationships that appear often.",
      [
        "Factoring and quadratic formula are complementary tools.",
        "Exponent rules simplify before expanding everything.",
        "Right-triangle and circle relationships appear in applied settings.",
      ],
      "x² − 5x + 6 = 0 factors to (x−2)(x−3)=0 → x=2 or 3. For 3-4-5 triangles, scale carefully.",
      [
        { q: "Solutions to (x−4)(x+1)=0?", a: "x=4 or x=−1" },
        { q: "Simplify x³ · x².", a: "x⁵" },
        { q: "In a right triangle, what does Pythagorean theorem state?", a: "a² + b² = c² for legs a,b and hypotenuse c" },
      ],
      "Solve two quadratic practice items two ways (factor and formula) and compare."
    ),
    t(
      "Calculator & No-Calculator Discipline",
      "Know when technology helps — and when it slows you down.",
      [
        "Mental math and structure beat button-mashing.",
        "Estimate to catch calculator typos.",
        "Practice both modes so neither surprises you.",
      ],
      "Before calculating 19.8% of 205, estimate 20% of 200 = 40. If the calculator shows 4.059, you likely missed a decimal.",
      [
        { q: "Name one risk of overusing a calculator.", a: "Slower pace; decimal errors; losing algebraic insight" },
        { q: "Why estimate first?", a: "Sanity-check the result" },
        { q: "What should you practice without a calculator?", a: "Fractions, simple linear equations, arithmetic fluency" },
      ],
      "Do a 10-item mixed set: five with calculator allowed, five without; reflect on timing."
    ),
    t(
      "Full-Length Practice Review",
      "Convert a practice test into a two-week improvement plan.",
      [
        "Score alone is not a plan — categorize misses.",
        "Rebuild weak skills with short daily drills.",
        "Retest to measure real growth.",
      ],
      "After a practice SAT: 12 Reading/Writing misses (6 evidence, 4 conventions, 2 vocab) → schedule evidence drills Mon/Wed, conventions Tue/Thu, vocab daily 10 minutes.",
      [
        { q: "What comes after a practice test?", a: "Error analysis and a scheduled drill plan" },
        { q: "How often should you full-length practice?", a: "Regularly (e.g., every few weeks) without burning out" },
        { q: "What is a \"micro-drill\"?", a: "Short focused practice on one miss type" },
      ],
      "Write a two-week calendar that fits around athletic practice times."
    ),
    t(
      "Admissions Story: Scores + Transcript + Character",
      "Place SAT results in a whole student-athlete profile.",
      [
        "Scores complement GPA, courses, athletics, service, and essays.",
        "Honesty and consistency matter more than last-minute spikes.",
        "Scholarships may have separate athletic and academic criteria.",
      ],
      "A rising score trend plus rigorous courses and verified athletic film tells a coherent story of growth — stronger than one lucky test day.",
      [
        { q: "Are test scores the only admissions factor?", a: "No — holistic review is common" },
        { q: "Why does integrity matter in reporting?", a: "Trust; consequences for misrepresentation" },
        { q: "Name two non-score strengths Prosper Prep builds.", a: "Athletics, leadership, entrepreneurship, academics, faith character" },
      ],
      "Draft a one-paragraph \"student-athlete snapshot\" you could share with a counselor (no private data you shouldn't post publicly)."
    ),
  ];
  return pack(grade, "SAT Prep", topics);
}

/* ========== College Athletic Pathway ========== */
export function athleticPathwayLessons(grade: number): LessonSeed[] {
  const intro = grade <= 8;
  const topics: Topic[] = [
    t(
      intro ? "Athlete-Scholar Identity" : "Eligibility Basics (Educational Overview)",
      intro
        ? "Define what it means to be a student first and an athlete with purpose."
        : "Learn high-level eligibility concepts (NCAA/NAIA awareness) — educational overview, not official advice.",
      intro
        ? [
            "Grades and character open doors that talent alone cannot.",
            "Time management keeps training and academics compatible.",
            "Ask coaches and counselors early when you have questions.",
          ]
        : [
            "College athletic pathways include NCAA divisions, NAIA, and other associations — rules differ.",
            "Core-course planning, GPA, and amateurism concepts matter years before signing anything.",
            "This course is educational awareness only — always verify with official sources and school counselors.",
          ],
      intro
        ? "Sample weekly plan: practice 90 minutes, homework block before dinner, reading 20 minutes, lights-out goal. Protect sleep like training."
        : "Example: a student maps graduation requirements + likely core courses by sophomore year, then checks an official eligibility center checklist with a counselor — never relying on rumors from social media.",
      [
        {
          q: intro ? "Why do grades matter for athletes?" : "Is this class official NCAA legal advice?",
          a: intro
            ? "Eligibility, scholarships, and life options after sport"
            : "No — educational overview only; verify with official sources/counselors",
        },
        {
          q: "Name one association athletes may hear about.",
          a: "NCAA, NAIA, NJCAA, or similar — rules vary",
        },
        {
          q: "Who should you ask about your personal plan?",
          a: "Counselor, coach, family — and official published requirements",
        },
      ],
      intro
        ? "Write your athlete-scholar mission in 5 sentences."
        : "With a counselor or coach, list three official resources (sites/handbooks) you will use for eligibility questions."
    ),
    t(
      "Time Management for Training + School",
      "Build calendars that protect practice, film, homework, and rest.",
      [
        "Put fixed commitments first (school, practice, travel).",
        "Use short deep-work blocks for hard academics.",
        "Recovery (sleep, nutrition, mental rest) is part of performance.",
      ],
      "Sunday 20-minute planning: color-code practice, lifts, SAT/ACT blocks, and project due dates. If a tournament weekend hits, shift academic deep work earlier in the week.",
      [
        { q: "What goes on the calendar first?", a: "Fixed obligations" },
        { q: "Why protect sleep?", a: "Learning, injury resilience, mood, and performance" },
        { q: "What is a deep-work block?", a: "Distraction-free time for hard cognitive tasks" },
      ],
      "Build a one-week calendar including training and two academic priorities."
    ),
    t(
      "Highlight & Recruiting Literacy",
      "Understand what coaches look for in film and communication — without hype or scams.",
      [
        "Clear game film with readable jersey numbers beats flashy edits that hide decisions.",
        "Recruiting messages should be truthful, courteous, and specific.",
        "Be cautious of pay-to-play \"guarantees\"; ask trusted adults to review offers.",
      ],
      "Email structure: greeting, graduation year, position, GPA/test context (honest), athletic link, polite ask. Keep it short. Never invent stats.",
      [
        { q: "What should highlight film show?", a: "Real game decisions and skills, clearly visible" },
        { q: "Red flag in recruiting?", a: "Guaranteed scholarships for upfront fees / pressure tactics" },
        { q: "Why honesty matters?", a: "Trust; coaches verify; integrity is character" },
      ],
      "Draft a 120-word coach-introduction email (do not send until a trusted adult reviews)."
    ),
    t(
      "Amateurism & Character (High-Level)",
      "Protect your future by understanding amateurism concepts and digital reputation.",
      [
        "Accepting improper benefits can jeopardize eligibility — rules are detailed and official.",
        "Social media is part of your reputation for coaches and admissions.",
        "When unsure, pause and ask before posting or accepting gifts.",
      ],
      "Scenario: a local business offers expensive free gear tied to promoting them as a \"signed athlete.\" Pause. Ask coach/counselor. Do not assume it is fine.",
      [
        { q: "What should you do if an offer feels unclear?", a: "Pause; ask coach/counselor; check official guidance" },
        { q: "Why does social media matter?", a: "Coaches and schools review character and judgment" },
        { q: "Is rumor a reliable rules source?", a: "No" },
      ],
      "Write five social-media rules for yourself as a student-athlete."
    ),
    t(
      "Academics That Unlock Opportunities",
      "Connect course rigor, GPA, and study skills to athletic pathways.",
      [
        "Hard classes + support beats easy classes with empty transcripts.",
        "Teachers and counselors are allies — communicate early.",
        "Tutoring and study halls are strength training for the mind.",
      ],
      "If travel causes absences, email teachers beforehand with a plan to submit work. Bring readings on the bus. Protect GPA like you protect an injured joint — early intervention.",
      [
        { q: "Who helps with academic planning?", a: "Counselors, teachers, family, tutors" },
        { q: "What is one travel-week academic tactic?", a: "Communicate early; schedule work blocks; use downtime" },
        { q: "Why does course rigor matter?", a: "College readiness and competitive applications" },
      ],
      "List your current courses and one improvement action for the hardest class."
    ),
    t(
      "Communication with Coaches & Counselors",
      "Practice professional communication and advocacy.",
      [
        "Clear questions get better answers.",
        "Track conversations and next steps in a simple log.",
        "Respect chains of communication at school and clubs.",
      ],
      "Agenda for a 10-minute counselor meeting: (1) goal schools, (2) transcript check, (3) test dates, (4) next appointment. Bring a notebook.",
      [
        { q: "What belongs in a meeting agenda?", a: "Goals, questions, documents, next steps" },
        { q: "Why keep a contact log?", a: "Follow-up and accuracy" },
        { q: "Tone for emails?", a: "Respectful, concise, truthful" },
      ],
      "Write three questions you would ask a counselor about your pathway."
    ),
    t(
      "Nutrition, Injury Awareness & Recovery Habits",
      "Support performance with basic health literacy (not medical advice).",
      [
        "Fuel training with regular meals and hydration habits.",
        "Report injuries honestly; playing through serious pain can worsen outcomes.",
        "This is general education — see qualified professionals for medical care.",
      ],
      "Simple habit stack: water bottle at school, protein+carb after practice, bedtime routine. Pain that changes movement patterns → tell a trusted adult/trainer.",
      [
        { q: "Is this lesson medical advice?", a: "No — general education only" },
        { q: "Why report injuries?", a: "Safety and long-term health" },
        { q: "Name one recovery habit.", a: "Sleep, nutrition, hydration, rest days as coached" },
      ],
      "Design a simple post-practice recovery checklist with adult input if needed."
    ),
    t(
      "Campus Visits & Fit Questions",
      "Evaluate athletic, academic, financial, and cultural fit.",
      [
        "Fit includes major options, coaching style, and campus life — not logos alone.",
        "Prepare questions about academics and support services.",
        "Include family in major decisions.",
      ],
      "Ask: How do athletes get academic support? What is a typical day in-season? How are walk-ons evaluated? What degree outcomes look like for your program?",
      [
        { q: "Name two non-sport fit factors.", a: "Majors, cost, culture, location, support services" },
        { q: "Why bring questions to a visit?", a: "To compare schools clearly" },
        { q: "Who should help weigh offers?", a: "Family and trusted school adults" },
      ],
      "Draft a 10-question campus-visit list balanced across academics and athletics."
    ),
    t(
      "Backup Plans & Entrepreneurship Mindset",
      "Build skills that last beyond a sports career.",
      [
        "Most athletes will not go pro — and that can still be a win with a plan.",
        "Transferable skills: leadership, discipline, communication, sales of your own effort.",
        "Prosper Prep pairs athletic goals with financial independence skills.",
      ],
      "Example plan B/C: certifications, small service business, internships, dual credit, or trade pathways alongside sport. Identity is wider than a jersey number.",
      [
        { q: "Why have a plan beyond pro sports?", a: "Statistical reality + dignity of multiple pathways" },
        { q: "Name a transferable athlete skill.", a: "Discipline, teamwork, coachability, time management" },
        { q: "How does entrepreneurship connect?", a: "Creates income skills independent of a roster spot" },
      ],
      "Write a one-page \"life beyond the game\" sketch with education and income skills you will build this year."
    ),
  ];
  return pack(grade, "College Athletic Pathway", topics, intro ? 35 : 45);
}

/* ========== Entrepreneurship & Business ========== */
export function entrepreneurshipLessons(grade: number): LessonSeed[] {
  const topics: Topic[] = [
    t(
      "What Entrepreneurs Actually Do",
      "Define entrepreneurship as solving problems for customers — ethically.",
      [
        "Businesses create value by serving real needs.",
        "Ideas are cheap; tested offers and execution matter.",
        "Character and honesty are competitive advantages.",
      ],
      "A student notices families need reliable lawn care before winter. They price a simple package, flyer the neighborhood with permission, and track jobs in a notebook — a micro business loop: offer → deliver → get feedback → improve.",
      [
        { q: "What is a customer problem?", a: "A need or pain someone will pay to solve" },
        { q: "Why test an offer?", a: "To learn before spending big" },
        { q: "Name one ethical rule.", a: "Honest advertising; deliver what you promise" },
      ],
      "Interview one adult about a problem they pay to solve; write five sentences."
    ),
    t(
      "Business Model Basics",
      "Map value proposition, customers, revenue, and costs.",
      [
        "Know who you serve and why they choose you.",
        "Revenue − costs ≈ profit (simplified).",
        "Write assumptions down so you can test them.",
      ],
      "Canvas mini: Customer = busy parents; Offer = 60-minute skills clinic; Revenue = $20/athlete; Costs = facility + balls + flyers. If 10 athletes attend, revenue $200; if costs are $80, profit $120 before taxes/other realities.",
      [
        { q: "What is a value proposition?", a: "Why a customer chooses your offer" },
        { q: "Simple profit idea?", a: "Revenue minus costs" },
        { q: "Why list assumptions?", a: "So you can validate or revise them" },
      ],
      "Fill a one-page model for a student-run service business you could run with adult permission."
    ),
    t(
      "Marketing Without Hype",
      "Practice clear offers, testimonials, and respectful outreach.",
      [
        "Clarity beats cleverness in marketing.",
        "Permission and respect matter in community outreach.",
        "Track what messaging actually brings customers.",
      ],
      "Flyer: who it's for, what you do, price or \"from $X,\" how to contact, when. Avoid fake scarcity. Ask a satisfied customer for a short honest testimonial.",
      [
        { q: "What belongs on a simple offer flyer?", a: "Who/what/price/contact/when" },
        { q: "Why avoid fake scarcity?", a: "Trust and ethics" },
        { q: "What should you track?", a: "Which channel brought paying customers" },
      ],
      "Draft a 50-word offer for a real skill you could deliver safely and legally as a student."
    ),
    t(
      "Sales Conversations & Service",
      "Listen first, then propose a fit — never pressure.",
      [
        "Questions uncover needs.",
        "Saying no to a bad-fit customer protects reputation.",
        "After-sale follow-up creates referrals.",
      ],
      "Script: \"What are you hoping to improve?\" → restate need → offer options → confirm price/time → thank them. If you cannot deliver quality, decline politely.",
      [
        { q: "First job in a sales talk?", a: "Listen / understand the need" },
        { q: "When should you decline?", a: "When you cannot deliver well or it is unsafe/unethical" },
        { q: "Why follow up?", a: "Service quality and referrals" },
      ],
      "Role-play a 3-minute discovery conversation with a family member."
    ),
    t(
      "Personal Finance Foundations",
      "Build banking, budgeting, and saving habits for independence.",
      [
        "Know the difference between needs, wants, and goals.",
        "A simple budget tracks income and giving/saving/spending.",
        "Avoid high-interest debt traps; read terms before signing anything.",
      ],
      "50/30/20 is one model (needs/wants/savings) — adapt to reality. Example: $100 from jobs → $50 needs/transport, $20 giving/savings, $30 skill tools. Automate savings when possible.",
      [
        { q: "What is a budget?", a: "A plan for income and spending/saving" },
        { q: "Why emergency savings?", a: "Absorb shocks without destructive debt" },
        { q: "Before signing a financial agreement?", a: "Read terms; ask a trusted adult" },
      ],
      "Make a one-month budget using real or realistic numbers for a student."
    ),
    t(
      "Real Estate Fundamentals (Intro)",
      "Learn vocabulary of property, renting vs buying, and due diligence — not investment advice.",
      [
        "Real estate involves property rights, costs beyond price, and long timelines.",
        "Renting and buying have different tradeoffs.",
        "This is educational literacy — not a recommendation to buy property.",
      ],
      "Costs beyond purchase price can include taxes, insurance, maintenance, and interest if financed. A \"cheap\" house with huge repairs may be expensive. Always research with professionals before any real transaction.",
      [
        { q: "Is this lesson telling you to buy property?", a: "No — literacy only" },
        { q: "Name costs beyond purchase price.", a: "Taxes, insurance, maintenance, financing costs, etc." },
        { q: "Why due diligence?", a: "To uncover risks before committing" },
      ],
      "Define: deed, lease, equity, mortgage (one sentence each) using a reputable glossary."
    ),
    t(
      "Contracts Literacy for Life",
      "Understand offer, acceptance, consideration, and reading before signing.",
      [
        "Contracts are agreements the law may enforce — details matter.",
        "Read cancellation, payment, and liability sections carefully.",
        "Minors often need adult involvement; this is not legal advice.",
      ],
      "Before a phone plan or competition entry, read: length of term, fees, what happens if you cancel, and what you promise. Highlight unclear words and ask.",
      [
        { q: "What should you do before signing?", a: "Read fully; ask questions; involve a trusted adult when needed" },
        { q: "Name one section to find in many consumer contracts.", a: "Cancellation, fees, dispute process, liability" },
        { q: "Is this legal advice?", a: "No — educational literacy" },
      ],
      "Annotate a sample terms-of-service (school-safe example) for three obligations you would take on."
    ),
    t(
      "Intro to Law & Consumer Rights (Civics-for-Life)",
      "Know practical civic tools: receipts, warranties, complaints, and respectful advocacy.",
      [
        "Keep records (receipts, messages, contracts).",
        "Consumer rights vary by situation — learn principles and ask for help.",
        "Courteous, documented communication solves many disputes.",
      ],
      "If a product fails under warranty, gather proof of purchase, describe the issue factually, and contact the seller in writing. Escalate calmly if needed with adult help.",
      [
        { q: "Why keep receipts?", a: "Proof for returns, warranties, taxes, disputes" },
        { q: "Tone for a complaint?", a: "Factual, respectful, specific" },
        { q: "Who can help with complex issues?", a: "Parents/guardians, counselors, legitimate consumer resources" },
      ],
      "Write a model complaint email for a defective product (fiction)."
    ),
    t(
      "Capstone: Micro-Business Plan",
      "Assemble a one-page plan you could actually run with adult guidance.",
      [
        "A usable plan beats a fancy deck.",
        "Include offer, customers, pricing, startup costs, and first 10 customer actions.",
        "Safety, legality, and family rules come first.",
      ],
      "One-pager sections: Problem, Offer, Customer, Price, Costs, Marketing, Risks, First 10 Actions, Adults who approve. Example first actions: permission, pricing, 20 conversations, 5 booked jobs.",
      [
        { q: "What belongs on a one-page plan?", a: "Offer, customer, price, costs, actions, risks" },
        { q: "Why adult approval?", a: "Safety, legality, and support" },
        { q: "What is a first-10-actions list?", a: "Concrete next steps to get real feedback/customers" },
      ],
      "Complete the one-page plan and share it with a parent/guardian or mentor for feedback."
    ),
  ];
  return pack(grade, "Entrepreneurship & Financial Independence", topics, grade <= 8 ? 35 : 45);
}

/* ========== Bible: Hallelujah Scriptures & Paleo-Hebrew ========== */
export function bibleLessons(grade: number): LessonSeed[] {
  if (grade === SHOWCASE_GRADE) return grade10BibleLessons();
  const topics: Topic[] = [
    t(
      "Why Word Study Matters",
      "Approach Scripture with reverence, careful reading, and attention to original words.",
      [
        "Hallelujah Scriptures emphasize the Name and a return to Hebraic understanding of the text.",
        "Word study slows reading so meaning is not skipped; roots and usage clarify English renderings.",
        "We study academically and faithfully — seeking understanding for obedience, not for arguments.",
      ],
      "Method demo: take a familiar verse, isolate one verb or noun, note how Hallelujah Scriptures renders it, then ask what the underlying Hebrew root typically conveys (action, state, covenant relation, praise, etc.). Record discoveries in a dedicated journal: passage, word, gloss, context, question.",
      [
        { q: "What is the posture of this course?", a: "Reverent, careful, academic, and respectful" },
        { q: "Why study original words?", a: "To grasp fuller meaning and avoid shallow reading" },
        { q: "What translation framing do we engage?", a: "Hallelujah Scriptures / Hebraic emphasis" },
      ],
      "Start a Word Study Journal: date, passage, word, observations, questions."
    ),
    t(
      "Paleo-Hebrew Letters: Form and Meaning Intro",
      "Learn Paleo-Hebrew letter forms and traditional pictographic associations as study aids — with humility.",
      [
        "Paleo-Hebrew (early Hebrew script related to Phoenician) uses letter forms often taught with concrete picture associations (e.g., house, hand, water) as memory hooks.",
        "A letter association may illuminate a root's imagery, but **context and usage control meaning** — never force a pictograph against the passage.",
        "Practice drawing forms carefully; pair each letter with one association and one caution (\"aid, not absolute proof\").",
      ],
      "Worked approach for a root with two or three letters: (1) name each Paleo-Hebrew form, (2) note common pictographic associations used in class charts, (3) list standard lexicon glosses for the root, (4) read the word in its verse — ask whether the imagery genuinely fits or must be set aside. Humility protects accuracy.",
      [
        { q: "Are letter pictures a replacement for context?", a: "No — context and usage rule" },
        { q: "What attitude do we keep?", a: "Humility and carefulness" },
        { q: "What script are we introducing?", a: "Paleo-Hebrew letter forms" },
      ],
      "Draw 5 Paleo-Hebrew letters from a reputable class chart; for each write one association and one caution note."
    ),
    t(
      "The Name and Praise: Hallelujah Word Study",
      "Study praise vocabulary and the call to exalt the Name.",
      [
        "\"Hallelujah\" joins praise language (related to *halal*, to praise/boast) with the Name — a summons to praise.",
        "In Scripture, praise is often public, obedient, and wholehearted; verbs of praise repay slow reading.",
        "Word study should deepen worshipful understanding, not performance or debate.",
      ],
      "Break the components as presented in your Hallelujah Scriptures notes: identify the praise element and the Name element. Select a psalm of praise; list verbs of praise, the reasons given, and who is addressed. Write how the Hebrew framing sharpens the English sense without adding claims the text does not make.",
      [
        { q: "What should word study on praise produce?", a: "Clearer worship and obedience, not showing off" },
        { q: "Where might you read praise themes?", a: "Psalms and many passages of Scripture" },
        { q: "How should we treat the Name?", a: "With reverence" },
      ],
      "Copy one praise passage from Hallelujah Scriptures (as provided by your teacher) and underline verbs of praise."
    ),
    t(
      "Covenant Words: Loyalty and Promise",
      "Explore Hebrew terms related to covenant faithfulness (e.g., fields around *ḥesed* / loyal love).",
      [
        "Covenant language emphasizes relationship, loyalty, and promise-keeping across Torah and Prophets.",
        "English words like lovingkindness, mercy, or steadfast love may map to rich Hebrew terms — compare glosses carefully.",
        "Cross-references reveal patterns: the same root in different settings still serves the passage's own argument.",
      ],
      "Choose a covenant-rich passage. List repeated words. Look up one key Hebrew term in a teacher-approved lexicon or interlinear. Summarize in plain English what faithfulness looks like **in that text**, citing verse references — not generic slogans.",
      [
        { q: "What is a covenant emphasis?", a: "Committed relationship and promise" },
        { q: "Why compare passages?", a: "To see consistent themes under textual control" },
        { q: "What tool helps word study?", a: "Lexicon / interlinear / teacher-approved study aid" },
      ],
      "Write a paragraph: how covenant faithfulness should shape student character in academics, athletics, and work."
    ),
    t(
      "Hear and Obey: Shema-Oriented Reading",
      "Practice reading aimed at obedient response (*shema* as hear/heed), not information only.",
      [
        "Biblical \"hearing\" often implies heeding — listening that leads to doing.",
        "Study asks: what does this passage require, forbid, or reveal?",
        "Community accountability (family, mentors, congregation) helps application stick.",
      ],
      "Read a short Torah instruction passage (teacher-selected). Outline: (1) what is commanded or shown, (2) what it reveals about the Almighty, (3) one obedient response for this week. Keep the Name reverent in speech and writing.",
      [
        { q: "What does Shema-oriented reading seek?", a: "Hearing that leads to doing" },
        { q: "Name the three outline parts used above.", a: "Command/content; revelation; response" },
        { q: "Why community?", a: "Encouragement and accountability" },
      ],
      "Share one application with a parent/guardian or mentor and ask them to check in next week."
    ),
    t(
      "Names and Character in Scripture",
      "Study how names and titles communicate character and role.",
      [
        "Names in Scripture often carry meaning tied to story, calling, or remembrance.",
        "Titles reveal how people relate to the Almighty; sacred names require reverence.",
        "Always prioritize the meaning the text itself gives before optional etymology.",
      ],
      "Select a narrative where a name is explained or highlighted. Note the meaning given **in the text first**. Only then add optional root study. Keep speculation labeled as speculation.",
      [
        { q: "What has priority — text or speculation?", a: "The text" },
        { q: "How do we treat sacred names?", a: "Reverently" },
        { q: "What can a name communicate?", a: "Character, role, memory of an event" },
      ],
      "Journal: one name/title from this week's reading and what it teaches."
    ),
    t(
      "Poetry and Parallelism in Hebrew Thought",
      "Recognize parallelism and imagery to read Psalms and prophets with precision.",
      [
        "Hebrew poetry often \"rhymes\" ideas more than sounds: synonymous, antithetic, and synthetic parallelism.",
        "Parallel lines may repeat, contrast, or advance a thought — label the relationship before interpreting imagery.",
        "Symbols and metaphors must be read in literary and covenant context.",
      ],
      "In a psalm couplet, label whether the second line echoes, contrasts, or intensifies the first. Then explain the combined meaning in one sentence. Optionally note one Hebrew word that anchors the image.",
      [
        { q: "What is parallelism?", a: "Related lines working together in meaning" },
        { q: "Do Hebrew poems always rhyme sound?", a: "Not like English rhyme — idea patterns matter" },
        { q: "Why context matters for imagery?", a: "Symbols can be misread if isolated" },
      ],
      "Mark parallelism in 6 lines of a psalm and paraphrase them."
    ),
    t(
      "From Word Study to Life: Integrity and Work",
      "Connect Scripture study to athletics, schoolwork, and entrepreneurship ethics.",
      [
        "Faithfulness in small tasks is spiritual formation — roots about truth and diligence apply to homework and training.",
        "Honest business and clean competition honor truth; word study that never changes life is incomplete.",
        "Choose one wisdom saying; track concrete obedience for seven days.",
      ],
      "Apply a wisdom saying about diligence/honesty to (a) film-room or practice habits, (b) homework integrity, (c) a customer interaction in a micro-business. Cite the verse and the Hebrew key word if studied.",
      [
        { q: "Name one arena of application at Prosper Prep.", a: "Athletics, academics, business, family, congregation" },
        { q: "What is integrity in competition?", a: "Fair play, honesty, respect" },
        { q: "Why connect study to work?", a: "Scripture aims at lived obedience" },
      ],
      "Write three concrete integrity goals for the next 7 days."
    ),
    t(
      "Capstone Word Study Project",
      "Complete a guided word study and share findings respectfully.",
      [
        "Select a word that appears multiple times in a passage; prefer verbs or covenant nouns.",
        "Use approved tools; cite sources; avoid overclaiming from pictographs alone.",
        "Present how the word deepens understanding and obedience within Hallelujah Scriptures framing.",
      ],
      "Project steps: pick passage → list occurrences → note Hebrew form (as available) → Paleo-Hebrew letter notes (labeled as aids) → lexicon glosses → context synthesis → personal application → bibliography of tools used.",
      [
        { q: "What must you avoid in word study?", a: "Forcing meanings; ignoring context; unsourced sensational claims" },
        { q: "What belongs in a capstone?", a: "Text, word data, synthesis, application, sources" },
        { q: "How should findings be shared?", a: "Respectfully and clearly" },
      ],
      "Deliver a one-page word study (or oral presentation outline) on your chosen word."
    ),
  ];
  return pack(grade, "Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study", topics, 40, {
    bibleMode: true,
  });
}

/** Specialty courses offered at a given grade */
export function specialtySubjectsForGrade(grade: number): string[] {
  if (grade >= 9) {
    return [
      "ACT Prep",
      "SAT Prep",
      "College Athletic Pathway",
      "Entrepreneurship & Financial Independence",
      "Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study",
    ];
  }
  if (grade === 8) {
    return [
      "ACT / SAT Foundations",
      "College Athletic Pathway",
      "Entrepreneurship & Financial Independence",
      "Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study",
    ];
  }
  if (grade >= 6) {
    return [
      "Entrepreneurship & Financial Independence",
      "College Athletic Pathway",
      "Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study",
    ];
  }
  return [];
}

export function specialtyLessonsFor(subject: string, grade: number): LessonSeed[] | null {
  const lower = subject.toLowerCase();
  if (lower.includes("act / sat") || lower === "act / sat foundations") {
    const act = actPrepLessons(grade).slice(0, 5);
    const sat = satPrepLessons(grade).slice(0, 4).map((l, i) => ({ ...l, order: i + 6 }));
    return [...act.map((l, i) => ({ ...l, order: i + 1 })), ...sat].slice(0, 9);
  }
  if (lower.startsWith("act")) {
    if (grade === 12) return actEliteG12Lessons();
    return actPrepLessons(grade);
  }
  if (lower.startsWith("sat")) return satPrepLessons(grade);
  if (lower.includes("athletic")) return athleticPathwayLessons(grade);
  if (lower.includes("entrepreneur") || lower.includes("financial independence") || lower.includes("business")) {
    if (grade === 7) {
      return [...grade7EnterpriseUnitOne(), ...entrepreneurshipLessons(grade).slice(3)];
    }
    return entrepreneurshipLessons(grade);
  }
  if (lower.includes("bible") || lower.includes("hallelujah") || lower.includes("paleo")) {
    return bibleLessons(grade);
  }
  return null;
}
