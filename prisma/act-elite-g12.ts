/**
 * Elite Grade 12 ACT Prep — Module 0 lessons + Diagnostic Form A item banks.
 * All passages/items original Prosper Prep (not ACT Inc.).
 */
import type { LessonSeed } from "./curriculum";
import type { QuestionSeed } from "./assessments";
import { actEliteG12ModuleELessons } from "./act-elite-g12-module-e";

export type FormAQuizSeed = {
  title: string;
  description: string;
  sectionKey: string;
  order: number;
  questions: QuestionSeed[];
};

export function actEliteG12Lessons(): LessonSeed[] {
  return [lesson01(), lesson02(), lesson03(), ...actEliteG12ModuleELessons()];
}

function lesson01(): LessonSeed {
  return {
    title: "0.1 How the ACT is built",
    description: "Section map, timing table, composite vs section scores, and no-penalty guessing.",
    objectives: [
      "• Map ACT sections, timings, and optional Writing",
      "• Explain composite scoring and superscore basics",
      "• Apply the no wrong-answer penalty rule to pacing",
    ].join("\n"),
    content: "# 0.1 How the ACT is built\n\n## Objectives\n- Map the four required ACT multiple-choice sections and optional Writing\n- Explain composite vs section scores and the \"no wrong-answer penalty\" rule\n- Use a timing table to plan section budgets\n\n## Teach\n\n### The section map\nThe ACT's required battery is **English → Math → Reading → Science**, with **Writing** optional afterward. Colleges care most about the **composite** (average of the four MC sections) and often about specific section floors for majors (STEM vs humanities).\n\n| Section | Questions | Time | Rough pace |\n|---|---|---|---|\n| English | 75 | 45 min | ~36 sec/q; ~9 min/passage |\n| Math | 60 | 60 min | ~60 sec/q; protect early points |\n| Reading | 40 | 35 min | ~8–9 min per passage block |\n| Science | 40 | 35 min | ~5 min per passage/set |\n| Writing (opt.) | 1 essay | 40 min | 5 plan / 30 write / 5 polish |\n\n### Scoring mechanics (what elites actually use)\nRaw correct answers convert to a **1–36 section scale**. The composite averages the four scales. There is **no guessing penalty**—blank bubbles are pure lost opportunity. Superscoring (if a college allows it) combines best section scores across dates; always verify each college's policy on the college site (link-out; we do not rehost ACT Inc. materials).\n\n### Score report literacy\nA useful report is not a single number. Tag misses by **content**, **trap type**, and **timing**. A student at 28 composite with Math 24 and Reading 32 should not \"study everything equally.\"\n\n### Worked example\nPractice raw→scale mindset (illustrative, not official ACT concordance): if English raw is strong but Science raw collapses in the last 10 items, the composite lever is **Science pacing**, not another grammar packet.\n\n## Examples\n1. Student finishes Reading with 4 blanks → those four are expected wrong. Always bubble.\n2. Student spends 15 minutes on Reading passage 1 → even perfect accuracy there can sink passages 3–4.\n\n## Practice\n1. List section order and times from memory.\n2. Compute a simple average: section scales 30, 28, 32, 30 → composite?\n3. Name one reason Writing might still matter for a scholarship athlete.\n\n## Check your work\n1. English, Math, Reading, Science (+ optional Writing).\n2. 30.\n3. Some programs/scholarships still review Writing; many do not require it—Module W is optional.\n\n## Video script (Prosper Prep original)\n\n*[Spoken narration ~950 words — instructional video authoring script; not a claim that video is filmed.]*\n\n\"Welcome to Prosper Prep's Grade 12 ACT Prep. I'm going to walk you through how the ACT is built—not as trivia, but as a map you will use all semester.\n\nFirst, the big picture. The ACT is a timed reasoning exam with four required multiple-choice sections and an optional essay. The four are English, Math, Reading, and Science, always in that order on a standard administration. Writing, if you take it, comes after. Your composite score is the average of the four multiple-choice section scores, each reported on a one-to-thirty-six scale. Writing does not fold into that composite; it is reported separately. That single fact changes how some families allocate prep time—and why our Module W is optional.\n\nLet's put timing on the table. English: seventy-five questions in forty-five minutes. That is roughly thirty-six seconds per question, or about nine minutes per passage if the test feels like five passage blocks. Math: sixty questions in sixty minutes—one minute average—but the early items are where elites bank points, and the late items are where time sinks live. Reading: forty questions in thirty-five minutes, typically four passages, so you are living in eight-to-nine-minute blocks. Science: forty in thirty-five, often closer to five minutes per passage or data set. If you only remember one sentence from this lesson, remember this: pacing is a skill, not a personality trait. We train it.\n\nNow scoring. You get a raw score—number correct—and that converts to a scaled section score. Different forms can have slightly different conversions; that is normal. What never changes for your strategy is the guessing rule: the ACT does not subtract points for wrong answers. A blank is a free gift to the test. If you are running out of time, bubble something. We will teach smarter elimination so those late bubbles are not pure coin flips, but even a coin flip beats a blank.\n\nI want you to think in levers, not vibes. Suppose your practice composite is twenty-eight, with Math at twenty-four and Reading at thirty-two. Another hundred grammar drills will not move the composite as much as repairing Math pacing and content gaps. Top-percentile prep is ruthless about return on time. Our stretch goal as a school is a thirty-three-plus composite band, but your personal target starts from Diagnostic Form A in this module.\n\nLet's tour a score report the way a coach would. Circle section scores. Under each, write three miss tags: content, trap, timing. Content means you did not know the rule or skill. Trap means you knew it but fell for a distractor pattern—extreme language, half-right answers, redundant English choices, and so on. Timing means you would have gotten it with thirty more seconds. Those three tags drive your week-two calendar.\n\nOfficial ACT practice forms from ACT Incorporated are copyrighted. Inside Prosper Prep's paid platform we use original items and public-domain or Creative Commons Attribution materials only. When we point you to official practice, we link out or use school-licensed copies—we do not rehost restricted forms. That is both legal hygiene and integrity.\n\nBefore you go: memorize the section order, the four timings, the no-penalty rule, and the idea of a composite lever. Next lesson we build the elite mindset—triage, energy, and when to guess on purpose. Then we run Diagnostic Form A under real constraints so your skill map is honest.\n\nPause the video and say out loud: English seventy-five in forty-five; Math sixty in sixty; Reading forty in thirty-five; Science forty in thirty-five; no penalty for wrong answers; composite averages four sections. If you can say that cold, you are ready for the graded check.\" Let me also preview how this course uses Module zero.  Lessons zero point one through zero point three give you the map, the mindset, and the diagnostic protocol.  Form A then photographs your current English, Math, Reading, and Science under time.  From there, later modules rebuild skills with strategy layers\u2014not content review alone.  Optional Writing sits as Module W if you need it for a college or scholarship that still asks.  Full Forms B, C, and D arrive near the end of the eighteen-week semester so you can prove the transfer under test-day conditions.  Your job this week is narrower: memorize the section map, internalize the no-penalty rule, and prepare to take Form A honestly.  When the scaled scores appear, we will not celebrate or catastrophize; we will tag misses and choose levers.  That is the Prosper Prep way\u2014calm, specific, and relentless about return on practice time.  If athletics travel interrupts a week, shorten sessions but do not delete them; consistency beats heroic cramming before a score release.  Bring questions about accommodations or calculator policy to your teacher; we follow current ACT rules by reference, updated annually.  Now repeat the map one last time with me, then start the graded check.\"\n\n## Wrap-up\nComplete the lesson check. Keep a one-page \"ACT map\" in your binder for the semester.",
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
    ].join("\n"),
    content: "# 0.2 Elite mindset & pacing\n\n## Objectives\n- Use a triage system: now / later / guess\n- Budget energy across a multi-hour exam\n- Distinguish productive struggle from time-sink stubbornness\n\n## Teach\n\n### Triage beats heroics\nElite scorers are not people who never skip. They are people who **skip on purpose**, mark, and return. Every section has items that are slow for *you* even if they are easy for someone else.\n\n**Now:** clear path in under your average time.  \n**Later:** doable but sticky—mark and move.  \n**Guess:** after eliminating 1–2 choices, or when time is nearly gone.\n\n### Energy management\nThe ACT is an endurance event. Front-loading adrenaline on English can leave Reading foggy. Practice full-length sittings; train nutrition/sleep; use 10-second reset breaths between passages—not between every item.\n\n### Pacing checkpoints\n- English: after passage 2, you should not be behind by more than ~2 minutes.\n- Math: item 30 near the halfway mark.\n- Reading/Science: unfinished last passage is a composite killer—protect the clock.\n\n### Worked example\nMath item 22 looks like a system of equations you *can* solve in three minutes. Your rule: if not clearly under ninety seconds after setup, mark **later**, bubble a temporary guess, continue. Returning with three minutes left beats never seeing items 50–55.\n\n## Practice\n1. Write your personal \"later\" trigger (seconds or frustration signal).\n2. For Reading, decide whether you attack hardest genre first or last—and why.\n3. Explain why leaving 8 Science blanks is usually worse than educated guesses.\n\n## Video script (Prosper Prep original)\n\n*[Spoken narration ~1000 words — instructional video authoring script.]*\n\n\"This lesson is about the elite mindset\u2014and I want to redefine elite for ACT prep at Prosper Preparatory. Elite does not mean never confused. Elite means you manage confusion without letting it steal the rest of the section or the rest of the testing day. Confusion is information. Panic is optional.\n\nWe use a three-bin triage system: now, later, and guess. Now means you see a clean path and you take it with confidence, keeping your average time. Later means the item is solvable but sticky\u2014maybe a dense Reading question with tempting half-right choices, maybe a Math setup that will eat three minutes if you marry it emotionally. You mark it clearly in your booklet or on scratch paper, you bubble a temporary answer so you never leave blanks, and you move to protect downstream points. Guess means time is scarce or the item is outside your current skill ceiling; you eliminate what you can, you commit, and you refuse to leave empty bubbles that donate expected value to the test maker.\n\nStudents aiming for thirty-three and above lose points in two boring ways. First, they stubbornly wrestle a single item while easier points expire behind them. Second, they panic-blank at the end of a section because they ran out of clock and froze. Both are training problems, not intelligence problems. If you leave eight Science blanks, you have donated expected correct answers to chance you never took. Even random guesses beat blanks because the ACT does not penalize wrong answers. Elimination guesses beat random guesses. Our later modules build elimination trees\u2014wrong-reason catalogs in English, plug-in and backsolve in Math, evidence discipline in Reading, and variable charts in Science\u2014but the habit of triage starts today, before content depth arrives.\n\nEnergy is part of pacing. The ACT is an endurance event disguised as four short sections. If you treat English like a frantic sprint full of adrenaline, Reading becomes fog and Science becomes a blur of axes you half-read while your hands shake. Build full-length practice into the semester so your brain learns the shape of the day: the fatigue curve after Math, the bathroom plan, the snack that does not spike and crash you, the water bottle that does not become a distraction. Sleep is a score strategy. So is knowing which calculator keystrokes you trust under stress. This is athletics logic applied to testing, and many of you already live that logic in practice, travel weekends, and game-day routines. Bring the same professionalism here.\n\nInstall checkpoints before you need them, the way a runner hits split times. In Math, glance at the clock when you hit question thirty\u2014you should be near the halfway mark, not discovering you have twenty hard items and eight minutes left. In English, after passage two, check whether you are more than about two minutes behind; if you are, shorten deliberation on rhetoric items and trust concision patterns you already know from class. In Reading, if passage one took twelve minutes, you must cut losses on purpose: shorter map, stricter evidence windows, faster outs on dead-end inference questions that invite outside knowledge. Science rewards the same discipline. Do not marry a conflicting-viewpoints passage when a clean data table is next and still unlocked. Protecting unfinished easy sets is how composites rise.\n\nHere is a worked pattern you can rehearse tonight. You hit a Math item that you could finish with enough algebra if the world gave you unlimited time. Ninety seconds in, you still do not have a clean setup. That is your trigger\u2014write it down now as a personal rule with a number attached. Mark later, bubble something defensible, go. If you return with three minutes left, great. If you do not, you still protected the easy and medium points that raise composite more than one heroic save. Composite math is mercilessly average-based: one stubborn miss that cascades into five unanswered items at the end is a silent composite drop that feels like bad luck but was actually a triage failure.\n\nGuessing is not moral failure. Random guessing beats blanks. Two-choice elimination guessing is a skill you can practice on homework sets by forcing yourself to stop at ninety seconds. When anxiety spikes, calm is a tactic, not a personality trait: box-breathe for ten to twenty seconds, drop your shoulders, then restart on the next clear item\u2014not on the item that triggered you. Restarting on the trigger item often restarts the spiral and burns another minute.\n\nElite mindset also includes honesty after the section. You will keep an error log. You will tag misses as content, trap, or timing. You will not tell yourself comforting stories that hide the lever you need. Stretch goal thinking means you want thirty-three-plus, and that requires ruthless prioritization of the sections that move the average most.\n\nPause this video and write your personal later-trigger in one sentence. Include a time bound or a frustration signal you can notice in your body\u2014jaw tight, rereading the stem a third time, calculator circling without a plan. Then complete the graded check below. Next lesson locks the diagnostic protocol for Form A, and you will write a personal target-score plan your teacher will score into the gradebook as written work.\"\n\n## Wrap-up\nComplete the graded check, then move to the diagnostic protocol.",
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
    ].join("\n"),
    content: "# 0.3 Diagnostic protocol (Form A)\n\n## Objectives\n- Take Diagnostic Form A under realistic constraints\n- Build a personal skill map from results\n- Set a stretch path toward composite **33+** while naming section floors\n\n## Teach\n\n### How to take Form A\n1. Schedule a quiet block roughly matching real section times (plus short breaks if you simulate a full battery).\n2. Use an approved calculator only where Math rules allow; know your device.\n3. No phones, no pausing mid-section in the timed simulation.\n4. Bubble as you go in small batches.\n5. Afterward, grade with the answer key explanations and tag every miss: content / trap / timing.\n\n### Stretch goal vs personal goal\nProsper Prep's **school stretch band is 33+ composite**. Your Form A result sets the **bridge plan**: which two levers move composite fastest in weeks 2–5?\n\n### Skill map instructions\nCreate a four-quadrant map: English / Math / Reading / Science. In each, list:\n- Top 3 miss tags\n- One timing note\n- One practice behavior for the next 7 days\n\n### Official materials reminder\nForm A inside this course is **original Prosper Prep**. For official ACT practice, use link-outs or school-licensed copies—never rehosted copyrighted ACT Inc. forms in our LMS.\n\n<!-- WRITTEN_PROMPT:Personal target-score plan|10 -->\nWrite a personal ACT target-score plan (about 250–400 words) for your teacher to score.\n\nInclude:\n1. Your Form A section scores (or best estimates if still testing) and estimated composite.\n2. A realistic target and a stretch target (school stretch = 33+ composite).\n3. The two section levers you will attack first—and why those move composite most.\n4. A one-week practice schedule that respects sports/work/family constraints.\n5. One mindset/pacing rule from Lesson 0.2 you will measure (e.g., \"no unmarked later items\").\n\nUse clear paragraphs. Specific beats vague.\n<!-- /WRITTEN_PROMPT -->\n\n## Video script (Prosper Prep original)\n\n*[Spoken narration ~900 words — instructional video authoring script.]*\n\n\"Diagnostic day is not about impressing anyone\u2014not your parents, not your coach, not your teacher, and not your teammates. It is about taking an honest photograph of your skills under time so the rest of the semester has a map instead of a mood.\n\nForm A in this Prosper Prep course is a full-length-style battery: English seventy-five questions, Math sixty, Reading forty, and Science forty. Every item is original Prosper Prep content written for this platform. It is not an ACT Incorporated form, and we will never ask you to upload copyrighted official PDFs into our LMS. When you need official practice later, we link out or use school-licensed copies. Integrity is part of college-ready character. Athletes especially cannot afford eligibility or honesty mistakes over a practice file shared in a group chat.\n\nTreat the clock as real. If you only have time for one section today, still honor that section's official time limit exactly. Do not turn a diagnostic into an untimed study session or you will mis-tag pacing misses as content misses and build the wrong bridge plan for weeks two through five. Before you start, stage materials the way you would on test day: number two pencils, an approved calculator you know well, water, scratch paper, and a watch if allowed in your room. Silence the phone in another room. Agree with yourself that mid-section breaks do not happen during a timed simulation. Agree that you will bubble as you go in small batches so you never face a cascading bubble-sheet disaster in the last sixty seconds.\n\nWhile you test, use triage from Lesson 0.2\u2014now, later, guess. The diagnostic is also a pacing rehearsal, not only a content photograph. When a Math item crosses your later trigger, mark it and move. When Reading passage one runs long, cut losses deliberately. When Science conflicting viewpoints feels sticky, skip to a clean table and return if time remains. These behaviors are part of what we are measuring.\n\nWhen you finish a section, do not just glance at percent correct and move on emotionally. Build the skill map on paper. Every miss gets a tag: content, trap, or timing. Content means you did not know the rule or skill and need instruction. Trap means you knew enough but fell for a distractor pattern\u2014extreme wording, half-right answers, redundancy in English, axis mix-ups in Science, or a true statement unsupported by the Reading passage. Timing means you likely would have gotten it with better clock management. Timing misses that you actually knew how to do are some of the cheapest points to recover in the next month, which is why triage practice matters as much as content packets.\n\nOur school stretch goal is a thirty-three-plus composite band. If Form A lands at twenty-six, that does not mean you failed Prosper Prep. It means your bridge is visible and coachable. Maybe Math and Science are the levers because they sit lower than Reading. Maybe English rhetoric timing is the hidden leak even if your grammar feels fine in class. Composite is an average; raising the lowest sections usually moves the number faster than polishing your strongest section from thirty-two to thirty-three while a twenty-four sits untouched.\n\nThe written target-score plan you submit on this lesson is where you coach yourself in paragraphs your teacher can grade. Include estimated section scores and composite, a realistic target and a stretch target aligned to thirty-three-plus, the two levers you will attack first and why those move composite most, a one-week practice schedule that respects sports, work, and family constraints, and one measurable pacing rule from Lesson 0.2 such as no unmarked later items or a ninety-second Math trigger. Specific beats vague. Vague plans do not change composites.\n\nAfter Form A and the skill map, open the course page and confirm the four Form A section quizzes\u2014English, Math, Reading, Science\u2014are complete or scheduled. Then submit the written plan in the written-work box. Bring the skill map to the next live session so discussion time is spent on levers and calendars, not on reconstructing what happened from fuzzy memory.\n\nYou are not behind. You are instrumented. That is how elites train: honest data, sharp priorities, weekly behaviors that move the composite, and teachers who can see your reasoning in writing. Pause now, set your testing block on the calendar, prepare the environment, and begin Form A when you are ready to be honest with the clock. Finally, remember what Form A is for: instrumentation.  A low section score is not a verdict on your future; it is a calendar invitation.  Write the invitation down in your target-score plan, share it with your teacher,  and let Module E through Module S turn the map into weekly reps.  When you sit Form B later in the semester, you should recognize your own pacing rules  in your body before the proctor finishes reading instructions.  That recognition\u2014calm, triage, bubble discipline\u2014is the elite advantage we are building now.\"\n\n## Wrap-up\nComplete Form A sections on the course page. Submit the written plan. Bring your skill map to the next live session.",
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

function formAEnglishQuestions(): QuestionSeed[] {
  return [
  {
    "prompt": "Passage 1 (\"Community Gardens on Maple Street\"), item 1. Underlined: \"on Maple Street transformed a\". Which choice best addresses a concision issue in context?",
    "choices": [
      "Add unnecessary words that dilute meaning",
      "Create a grammar error for variety",
      "Replace with an off-topic sentence",
      "NO CHANGE"
    ],
    "correctIndex": 3,
    "explanation": "[EASY] Prefer the concise option that keeps the meaning. Original PP passage \"Community Gardens on Maple Street\".",
    "order": 1,
    "points": 1
  },
  {
    "prompt": "Passage 1 (\"Community Gardens on Maple Street\"), item 2. Underlined: \"which crops to plant. Some\". Which choice best addresses a comma issue in context?",
    "choices": [
      "Create a comma splice",
      "Place a comma between subject and verb",
      "Use commas to set off a nonessential clause",
      "Omit necessary commas around the clause"
    ],
    "correctIndex": 2,
    "explanation": "[EASY] Use commas to set off a nonessential clause. Original PP passage \"Community Gardens on Maple Street\".",
    "order": 2,
    "points": 1
  },
  {
    "prompt": "Passage 1 (\"Community Gardens on Maple Street\"), item 3. Underlined: \"beds produced more than families\". Which choice best addresses a agreement issue in context?",
    "choices": [
      "Use a plural verb with singular each/every",
      "Match the verb to the true subject",
      "Agree with the nearest noun in a phrase",
      "Switch number mid-sentence"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] Match the verb to the true subject. Original PP passage \"Community Gardens on Maple Street\".",
    "order": 3,
    "points": 1
  },
  {
    "prompt": "Passage 1 (\"Community Gardens on Maple Street\"), item 4. Underlined: \"changed sidewalk conversations. People who\". Which choice best addresses a tense issue in context?",
    "choices": [
      "Keep tense consistent with the narrative frame",
      "Jump to future without a signal",
      "Mix past and present randomly",
      "Force present perfect where simple past fits"
    ],
    "correctIndex": 0,
    "explanation": "[EASY] Keep tense consistent with the narrative frame. Original PP passage \"Community Gardens on Maple Street\".",
    "order": 4,
    "points": 1
  },
  {
    "prompt": "Passage 1 (\"Community Gardens on Maple Street\"), item 5. Underlined: \"the tidy lot and offered\". Which choice best addresses a pronoun issue in context?",
    "choices": [
      "Add unnecessary words that dilute meaning",
      "Create a grammar error for variety",
      "Replace with an off-topic sentence",
      "NO CHANGE"
    ],
    "correctIndex": 3,
    "explanation": "[EASY] Make the antecedent unmistakable. Original PP passage \"Community Gardens on Maple Street\".",
    "order": 5,
    "points": 1
  },
  {
    "prompt": "Passage 1 (\"Community Gardens on Maple Street\"), item 6. Underlined: \"on Maple Street transformed a\". Which choice best addresses a parallelism issue in context?",
    "choices": [
      "Break parallelism mid-list",
      "Change part of speech mid-list",
      "Keep list items in parallel form",
      "Mix gerunds and infinitives"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] Keep list items in parallel form. Original PP passage \"Community Gardens on Maple Street\".",
    "order": 6,
    "points": 1
  },
  {
    "prompt": "Passage 1 (\"Community Gardens on Maple Street\"), item 7. Underlined: \"which crops to plant. Some\". Which choice best addresses a transition issue in context?",
    "choices": [
      "Insert a repetitive transition",
      "Choose the transition matching the logic",
      "Use contrast where addition is needed",
      "Use cause where sequence is needed"
    ],
    "correctIndex": 1,
    "explanation": "[MEDIUM] Choose the transition matching the logic. Original PP passage \"Community Gardens on Maple Street\".",
    "order": 7,
    "points": 1
  },
  {
    "prompt": "Passage 1 (\"Community Gardens on Maple Street\"), item 8. Underlined: \"beds produced more than families\". Which choice best addresses a organization issue in context?",
    "choices": [
      "Place the sentence to support paragraph purpose",
      "Move detail to an unrelated paragraph",
      "Delete the needed topic sentence",
      "Insert an off-topic anecdote"
    ],
    "correctIndex": 0,
    "explanation": "[MEDIUM] Place the sentence to support paragraph purpose. Original PP passage \"Community Gardens on Maple Street\".",
    "order": 8,
    "points": 1
  },
  {
    "prompt": "Passage 1 (\"Community Gardens on Maple Street\"), item 9. Underlined: \"changed sidewalk conversations. People who\". Which choice best addresses a rhetoric issue in context?",
    "choices": [
      "Add unnecessary words that dilute meaning",
      "Create a grammar error for variety",
      "Replace with an off-topic sentence",
      "NO CHANGE"
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] Pick the choice that achieves the stated purpose. Original PP passage \"Community Gardens on Maple Street\".",
    "order": 9,
    "points": 1
  },
  {
    "prompt": "Passage 1 (\"Community Gardens on Maple Street\"), item 10. Underlined: \"the tidy lot and offered\". Which choice best addresses a apostrophe issue in context?",
    "choices": [
      "Pluralize with a random apostrophe",
      "Drop a needed possessive mark",
      "Mark possession correctly (its vs it's)",
      "Use its' (never correct)"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] Mark possession correctly (its vs it's). Original PP passage \"Community Gardens on Maple Street\".",
    "order": 10,
    "points": 1
  },
  {
    "prompt": "Passage 1 (\"Community Gardens on Maple Street\"), item 11. Underlined: \"on Maple Street transformed a\". Which choice best addresses a semicolon issue in context?",
    "choices": [
      "Semicolon between subject and predicate",
      "Replace a needed colon incorrectly",
      "Join two related independent clauses with a semicolon",
      "Semicolon before a dependent clause"
    ],
    "correctIndex": 2,
    "explanation": "[HARD] Join two related independent clauses with a semicolon. Original PP passage \"Community Gardens on Maple Street\".",
    "order": 11,
    "points": 1
  },
  {
    "prompt": "Passage 1 (\"Community Gardens on Maple Street\"), item 12. Underlined: \"which crops to plant. Some\". Which choice best addresses a modifier issue in context?",
    "choices": [
      "Create a dangling modifier",
      "Create a squinting modifier",
      "Modify the wrong noun",
      "Place the modifier next to what it describes"
    ],
    "correctIndex": 3,
    "explanation": "[HARD] Place the modifier next to what it describes. Original PP passage \"Community Gardens on Maple Street\".",
    "order": 12,
    "points": 1
  },
  {
    "prompt": "Passage 1 (\"Community Gardens on Maple Street\"), item 13. Underlined: \"beds produced more than families\". Which choice best addresses a idiom issue in context?",
    "choices": [
      "NO CHANGE",
      "Add unnecessary words that dilute meaning",
      "Create a grammar error for variety",
      "Replace with an off-topic sentence"
    ],
    "correctIndex": 0,
    "explanation": "[HARD] Use the idiomatic preposition/pairing. Original PP passage \"Community Gardens on Maple Street\".",
    "order": 13,
    "points": 1
  },
  {
    "prompt": "Passage 1 (\"Community Gardens on Maple Street\"), item 14. Underlined: \"changed sidewalk conversations. People who\". Which choice best addresses a style issue in context?",
    "choices": [
      "Nominalize every verb",
      "Prefer clear, direct wording",
      "Choose the most ornate synonym",
      "Pad with empty intensifiers"
    ],
    "correctIndex": 1,
    "explanation": "[HARD] Prefer clear, direct wording. Original PP passage \"Community Gardens on Maple Street\".",
    "order": 14,
    "points": 1
  },
  {
    "prompt": "Passage 1 (\"Community Gardens on Maple Street\"), item 15. Underlined: \"the tidy lot and offered\". Which choice best addresses a delete issue in context?",
    "choices": [
      "Delete essential evidence",
      "Replace a clear claim with a slogan",
      "Delete material that is off-purpose",
      "Keep every sentence for length"
    ],
    "correctIndex": 2,
    "explanation": "[HARD] Delete material that is off-purpose. Original PP passage \"Community Gardens on Maple Street\".",
    "order": 15,
    "points": 1
  },
  {
    "prompt": "Passage 2 (\"Repairing a Vintage Bicycle\"), item 1. Underlined: \"her grandfather's steel-frame bicycle, the\". Which choice best addresses a concision issue in context?",
    "choices": [
      "Create a grammar error for variety",
      "Replace with an off-topic sentence",
      "NO CHANGE",
      "Add unnecessary words that dilute meaning"
    ],
    "correctIndex": 2,
    "explanation": "[EASY] Prefer the concise option that keeps the meaning. Original PP passage \"Repairing a Vintage Bicycle\".",
    "order": 16,
    "points": 1
  },
  {
    "prompt": "Passage 2 (\"Repairing a Vintage Bicycle\"), item 2. Underlined: \"replacing every part at once,\". Which choice best addresses a comma issue in context?",
    "choices": [
      "Omit necessary commas around the clause",
      "Create a comma splice",
      "Place a comma between subject and verb",
      "Use commas to set off a nonessential clause"
    ],
    "correctIndex": 3,
    "explanation": "[EASY] Use commas to set off a nonessential clause. Original PP passage \"Repairing a Vintage Bicycle\".",
    "order": 17,
    "points": 1
  },
  {
    "prompt": "Passage 2 (\"Repairing a Vintage Bicycle\"), item 3. Underlined: \"still felt spongy. A shop\". Which choice best addresses a agreement issue in context?",
    "choices": [
      "Match the verb to the true subject",
      "Agree with the nearest noun in a phrase",
      "Switch number mid-sentence",
      "Use a plural verb with singular each/every"
    ],
    "correctIndex": 0,
    "explanation": "[EASY] Match the verb to the true subject. Original PP passage \"Repairing a Vintage Bicycle\".",
    "order": 18,
    "points": 1
  },
  {
    "prompt": "Passage 2 (\"Repairing a Vintage Bicycle\"), item 4. Underlined: \"test ride, a soft click\". Which choice best addresses a tense issue in context?",
    "choices": [
      "Force present perfect where simple past fits",
      "Keep tense consistent with the narrative frame",
      "Jump to future without a signal",
      "Mix past and present randomly"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] Keep tense consistent with the narrative frame. Original PP passage \"Repairing a Vintage Bicycle\".",
    "order": 19,
    "points": 1
  },
  {
    "prompt": "Passage 2 (\"Repairing a Vintage Bicycle\"), item 5. Underlined: \"bike carried her to school\". Which choice best addresses a pronoun issue in context?",
    "choices": [
      "Create a grammar error for variety",
      "Replace with an off-topic sentence",
      "NO CHANGE",
      "Add unnecessary words that dilute meaning"
    ],
    "correctIndex": 2,
    "explanation": "[EASY] Make the antecedent unmistakable. Original PP passage \"Repairing a Vintage Bicycle\".",
    "order": 20,
    "points": 1
  },
  {
    "prompt": "Passage 2 (\"Repairing a Vintage Bicycle\"), item 6. Underlined: \"her grandfather's steel-frame bicycle, the\". Which choice best addresses a parallelism issue in context?",
    "choices": [
      "Mix gerunds and infinitives",
      "Break parallelism mid-list",
      "Change part of speech mid-list",
      "Keep list items in parallel form"
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] Keep list items in parallel form. Original PP passage \"Repairing a Vintage Bicycle\".",
    "order": 21,
    "points": 1
  },
  {
    "prompt": "Passage 2 (\"Repairing a Vintage Bicycle\"), item 7. Underlined: \"replacing every part at once,\". Which choice best addresses a transition issue in context?",
    "choices": [
      "Choose the transition matching the logic",
      "Use contrast where addition is needed",
      "Use cause where sequence is needed",
      "Insert a repetitive transition"
    ],
    "correctIndex": 0,
    "explanation": "[MEDIUM] Choose the transition matching the logic. Original PP passage \"Repairing a Vintage Bicycle\".",
    "order": 22,
    "points": 1
  },
  {
    "prompt": "Passage 2 (\"Repairing a Vintage Bicycle\"), item 8. Underlined: \"still felt spongy. A shop\". Which choice best addresses a organization issue in context?",
    "choices": [
      "Insert an off-topic anecdote",
      "Place the sentence to support paragraph purpose",
      "Move detail to an unrelated paragraph",
      "Delete the needed topic sentence"
    ],
    "correctIndex": 1,
    "explanation": "[MEDIUM] Place the sentence to support paragraph purpose. Original PP passage \"Repairing a Vintage Bicycle\".",
    "order": 23,
    "points": 1
  },
  {
    "prompt": "Passage 2 (\"Repairing a Vintage Bicycle\"), item 9. Underlined: \"test ride, a soft click\". Which choice best addresses a rhetoric issue in context?",
    "choices": [
      "Create a grammar error for variety",
      "Replace with an off-topic sentence",
      "NO CHANGE",
      "Add unnecessary words that dilute meaning"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] Pick the choice that achieves the stated purpose. Original PP passage \"Repairing a Vintage Bicycle\".",
    "order": 24,
    "points": 1
  },
  {
    "prompt": "Passage 2 (\"Repairing a Vintage Bicycle\"), item 10. Underlined: \"bike carried her to school\". Which choice best addresses a apostrophe issue in context?",
    "choices": [
      "Use its' (never correct)",
      "Pluralize with a random apostrophe",
      "Drop a needed possessive mark",
      "Mark possession correctly (its vs it's)"
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] Mark possession correctly (its vs it's). Original PP passage \"Repairing a Vintage Bicycle\".",
    "order": 25,
    "points": 1
  },
  {
    "prompt": "Passage 2 (\"Repairing a Vintage Bicycle\"), item 11. Underlined: \"her grandfather's steel-frame bicycle, the\". Which choice best addresses a semicolon issue in context?",
    "choices": [
      "Replace a needed colon incorrectly",
      "Join two related independent clauses with a semicolon",
      "Semicolon before a dependent clause",
      "Semicolon between subject and predicate"
    ],
    "correctIndex": 1,
    "explanation": "[HARD] Join two related independent clauses with a semicolon. Original PP passage \"Repairing a Vintage Bicycle\".",
    "order": 26,
    "points": 1
  },
  {
    "prompt": "Passage 2 (\"Repairing a Vintage Bicycle\"), item 12. Underlined: \"replacing every part at once,\". Which choice best addresses a modifier issue in context?",
    "choices": [
      "Place the modifier next to what it describes",
      "Create a dangling modifier",
      "Create a squinting modifier",
      "Modify the wrong noun"
    ],
    "correctIndex": 0,
    "explanation": "[HARD] Place the modifier next to what it describes. Original PP passage \"Repairing a Vintage Bicycle\".",
    "order": 27,
    "points": 1
  },
  {
    "prompt": "Passage 2 (\"Repairing a Vintage Bicycle\"), item 13. Underlined: \"still felt spongy. A shop\". Which choice best addresses a idiom issue in context?",
    "choices": [
      "Add unnecessary words that dilute meaning",
      "Create a grammar error for variety",
      "Replace with an off-topic sentence",
      "NO CHANGE"
    ],
    "correctIndex": 3,
    "explanation": "[HARD] Use the idiomatic preposition/pairing. Original PP passage \"Repairing a Vintage Bicycle\".",
    "order": 28,
    "points": 1
  },
  {
    "prompt": "Passage 2 (\"Repairing a Vintage Bicycle\"), item 14. Underlined: \"test ride, a soft click\". Which choice best addresses a style issue in context?",
    "choices": [
      "Pad with empty intensifiers",
      "Nominalize every verb",
      "Prefer clear, direct wording",
      "Choose the most ornate synonym"
    ],
    "correctIndex": 2,
    "explanation": "[HARD] Prefer clear, direct wording. Original PP passage \"Repairing a Vintage Bicycle\".",
    "order": 29,
    "points": 1
  },
  {
    "prompt": "Passage 2 (\"Repairing a Vintage Bicycle\"), item 15. Underlined: \"bike carried her to school\". Which choice best addresses a delete issue in context?",
    "choices": [
      "Replace a clear claim with a slogan",
      "Delete material that is off-purpose",
      "Keep every sentence for length",
      "Delete essential evidence"
    ],
    "correctIndex": 1,
    "explanation": "[HARD] Delete material that is off-purpose. Original PP passage \"Repairing a Vintage Bicycle\".",
    "order": 30,
    "points": 1
  },
  {
    "prompt": "Passage 3 (\"Recording Oral Histories\"), item 1. Underlined: \"set out to record oral\". Which choice best addresses a concision issue in context?",
    "choices": [
      "Replace with an off-topic sentence",
      "NO CHANGE",
      "Add unnecessary words that dilute meaning",
      "Create a grammar error for variety"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] Prefer the concise option that keeps the meaning. Original PP passage \"Recording Oral Histories\".",
    "order": 31,
    "points": 1
  },
  {
    "prompt": "Passage 3 (\"Recording Oral Histories\"), item 2. Underlined: \"were stiff. Students read questions\". Which choice best addresses a comma issue in context?",
    "choices": [
      "Use commas to set off a nonessential clause",
      "Omit necessary commas around the clause",
      "Create a comma splice",
      "Place a comma between subject and verb"
    ],
    "correctIndex": 0,
    "explanation": "[EASY] Use commas to set off a nonessential clause. Original PP passage \"Recording Oral Histories\".",
    "order": 32,
    "points": 1
  },
  {
    "prompt": "Passage 3 (\"Recording Oral Histories\"), item 3. Underlined: \"the old depot as a\". Which choice best addresses a agreement issue in context?",
    "choices": [
      "Agree with the nearest noun in a phrase",
      "Switch number mid-sentence",
      "Use a plural verb with singular each/every",
      "Match the verb to the true subject"
    ],
    "correctIndex": 3,
    "explanation": "[EASY] Match the verb to the true subject. Original PP passage \"Recording Oral Histories\".",
    "order": 33,
    "points": 1
  },
  {
    "prompt": "Passage 3 (\"Recording Oral Histories\"), item 4. Underlined: \"made the transcripts livelier than\". Which choice best addresses a tense issue in context?",
    "choices": [
      "Mix past and present randomly",
      "Force present perfect where simple past fits",
      "Keep tense consistent with the narrative frame",
      "Jump to future without a signal"
    ],
    "correctIndex": 2,
    "explanation": "[EASY] Keep tense consistent with the narrative frame. Original PP passage \"Recording Oral Histories\".",
    "order": 34,
    "points": 1
  },
  {
    "prompt": "Passage 3 (\"Recording Oral Histories\"), item 5. Underlined: \"exhibit, visitors lingered at headphones\". Which choice best addresses a pronoun issue in context?",
    "choices": [
      "Replace with an off-topic sentence",
      "NO CHANGE",
      "Add unnecessary words that dilute meaning",
      "Create a grammar error for variety"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] Make the antecedent unmistakable. Original PP passage \"Recording Oral Histories\".",
    "order": 35,
    "points": 1
  },
  {
    "prompt": "Passage 3 (\"Recording Oral Histories\"), item 6. Underlined: \"set out to record oral\". Which choice best addresses a parallelism issue in context?",
    "choices": [
      "Keep list items in parallel form",
      "Mix gerunds and infinitives",
      "Break parallelism mid-list",
      "Change part of speech mid-list"
    ],
    "correctIndex": 0,
    "explanation": "[MEDIUM] Keep list items in parallel form. Original PP passage \"Recording Oral Histories\".",
    "order": 36,
    "points": 1
  },
  {
    "prompt": "Passage 3 (\"Recording Oral Histories\"), item 7. Underlined: \"were stiff. Students read questions\". Which choice best addresses a transition issue in context?",
    "choices": [
      "Use contrast where addition is needed",
      "Use cause where sequence is needed",
      "Insert a repetitive transition",
      "Choose the transition matching the logic"
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] Choose the transition matching the logic. Original PP passage \"Recording Oral Histories\".",
    "order": 37,
    "points": 1
  },
  {
    "prompt": "Passage 3 (\"Recording Oral Histories\"), item 8. Underlined: \"the old depot as a\". Which choice best addresses a organization issue in context?",
    "choices": [
      "Delete the needed topic sentence",
      "Insert an off-topic anecdote",
      "Place the sentence to support paragraph purpose",
      "Move detail to an unrelated paragraph"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] Place the sentence to support paragraph purpose. Original PP passage \"Recording Oral Histories\".",
    "order": 38,
    "points": 1
  },
  {
    "prompt": "Passage 3 (\"Recording Oral Histories\"), item 9. Underlined: \"made the transcripts livelier than\". Which choice best addresses a rhetoric issue in context?",
    "choices": [
      "Replace with an off-topic sentence",
      "NO CHANGE",
      "Add unnecessary words that dilute meaning",
      "Create a grammar error for variety"
    ],
    "correctIndex": 1,
    "explanation": "[MEDIUM] Pick the choice that achieves the stated purpose. Original PP passage \"Recording Oral Histories\".",
    "order": 39,
    "points": 1
  },
  {
    "prompt": "Passage 3 (\"Recording Oral Histories\"), item 10. Underlined: \"exhibit, visitors lingered at headphones\". Which choice best addresses a apostrophe issue in context?",
    "choices": [
      "Mark possession correctly (its vs it's)",
      "Use its' (never correct)",
      "Pluralize with a random apostrophe",
      "Drop a needed possessive mark"
    ],
    "correctIndex": 0,
    "explanation": "[MEDIUM] Mark possession correctly (its vs it's). Original PP passage \"Recording Oral Histories\".",
    "order": 40,
    "points": 1
  },
  {
    "prompt": "Passage 3 (\"Recording Oral Histories\"), item 11. Underlined: \"set out to record oral\". Which choice best addresses a semicolon issue in context?",
    "choices": [
      "Join two related independent clauses with a semicolon",
      "Semicolon before a dependent clause",
      "Semicolon between subject and predicate",
      "Replace a needed colon incorrectly"
    ],
    "correctIndex": 0,
    "explanation": "[HARD] Join two related independent clauses with a semicolon. Original PP passage \"Recording Oral Histories\".",
    "order": 41,
    "points": 1
  },
  {
    "prompt": "Passage 3 (\"Recording Oral Histories\"), item 12. Underlined: \"were stiff. Students read questions\". Which choice best addresses a modifier issue in context?",
    "choices": [
      "Modify the wrong noun",
      "Place the modifier next to what it describes",
      "Create a dangling modifier",
      "Create a squinting modifier"
    ],
    "correctIndex": 1,
    "explanation": "[HARD] Place the modifier next to what it describes. Original PP passage \"Recording Oral Histories\".",
    "order": 42,
    "points": 1
  },
  {
    "prompt": "Passage 3 (\"Recording Oral Histories\"), item 13. Underlined: \"the old depot as a\". Which choice best addresses a idiom issue in context?",
    "choices": [
      "Create a grammar error for variety",
      "Replace with an off-topic sentence",
      "NO CHANGE",
      "Add unnecessary words that dilute meaning"
    ],
    "correctIndex": 2,
    "explanation": "[HARD] Use the idiomatic preposition/pairing. Original PP passage \"Recording Oral Histories\".",
    "order": 43,
    "points": 1
  },
  {
    "prompt": "Passage 3 (\"Recording Oral Histories\"), item 14. Underlined: \"made the transcripts livelier than\". Which choice best addresses a style issue in context?",
    "choices": [
      "Choose the most ornate synonym",
      "Pad with empty intensifiers",
      "Nominalize every verb",
      "Prefer clear, direct wording"
    ],
    "correctIndex": 3,
    "explanation": "[HARD] Prefer clear, direct wording. Original PP passage \"Recording Oral Histories\".",
    "order": 44,
    "points": 1
  },
  {
    "prompt": "Passage 3 (\"Recording Oral Histories\"), item 15. Underlined: \"exhibit, visitors lingered at headphones\". Which choice best addresses a delete issue in context?",
    "choices": [
      "Delete material that is off-purpose",
      "Keep every sentence for length",
      "Delete essential evidence",
      "Replace a clear claim with a slogan"
    ],
    "correctIndex": 0,
    "explanation": "[HARD] Delete material that is off-purpose. Original PP passage \"Recording Oral Histories\".",
    "order": 45,
    "points": 1
  },
  {
    "prompt": "Passage 4 (\"Designing a Fair Science Fair Rubric\"), item 1. Underlined: \"science fair used to feel\". Which choice best addresses a concision issue in context?",
    "choices": [
      "NO CHANGE",
      "Add unnecessary words that dilute meaning",
      "Create a grammar error for variety",
      "Replace with an off-topic sentence"
    ],
    "correctIndex": 0,
    "explanation": "[EASY] Prefer the concise option that keeps the meaning. Original PP passage \"Designing a Fair Science Fair Rubric\".",
    "order": 46,
    "points": 1
  },
  {
    "prompt": "Passage 4 (\"Designing a Fair Science Fair Rubric\"), item 2. Underlined: \"coaches drafted a rubric with\". Which choice best addresses a comma issue in context?",
    "choices": [
      "Place a comma between subject and verb",
      "Use commas to set off a nonessential clause",
      "Omit necessary commas around the clause",
      "Create a comma splice"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] Use commas to set off a nonessential clause. Original PP passage \"Designing a Fair Science Fair Rubric\".",
    "order": 47,
    "points": 1
  },
  {
    "prompt": "Passage 4 (\"Designing a Fair Science Fair Rubric\"), item 3. Underlined: \"rubric two weeks early. Several\". Which choice best addresses a agreement issue in context?",
    "choices": [
      "Switch number mid-sentence",
      "Use a plural verb with singular each/every",
      "Match the verb to the true subject",
      "Agree with the nearest noun in a phrase"
    ],
    "correctIndex": 2,
    "explanation": "[EASY] Match the verb to the true subject. Original PP passage \"Designing a Fair Science Fair Rubric\".",
    "order": 48,
    "points": 1
  },
  {
    "prompt": "Passage 4 (\"Designing a Fair Science Fair Rubric\"), item 4. Underlined: \"still disagreed, but they pointed\". Which choice best addresses a tense issue in context?",
    "choices": [
      "Jump to future without a signal",
      "Mix past and present randomly",
      "Force present perfect where simple past fits",
      "Keep tense consistent with the narrative frame"
    ],
    "correctIndex": 3,
    "explanation": "[EASY] Keep tense consistent with the narrative frame. Original PP passage \"Designing a Fair Science Fair Rubric\".",
    "order": 49,
    "points": 1
  },
  {
    "prompt": "Passage 4 (\"Designing a Fair Science Fair Rubric\"), item 5. Underlined: \"were not always the most\". Which choice best addresses a pronoun issue in context?",
    "choices": [
      "NO CHANGE",
      "Add unnecessary words that dilute meaning",
      "Create a grammar error for variety",
      "Replace with an off-topic sentence"
    ],
    "correctIndex": 0,
    "explanation": "[EASY] Make the antecedent unmistakable. Original PP passage \"Designing a Fair Science Fair Rubric\".",
    "order": 50,
    "points": 1
  },
  {
    "prompt": "Passage 4 (\"Designing a Fair Science Fair Rubric\"), item 6. Underlined: \"science fair used to feel\". Which choice best addresses a parallelism issue in context?",
    "choices": [
      "Change part of speech mid-list",
      "Keep list items in parallel form",
      "Mix gerunds and infinitives",
      "Break parallelism mid-list"
    ],
    "correctIndex": 1,
    "explanation": "[MEDIUM] Keep list items in parallel form. Original PP passage \"Designing a Fair Science Fair Rubric\".",
    "order": 51,
    "points": 1
  },
  {
    "prompt": "Passage 4 (\"Designing a Fair Science Fair Rubric\"), item 7. Underlined: \"coaches drafted a rubric with\". Which choice best addresses a transition issue in context?",
    "choices": [
      "Use cause where sequence is needed",
      "Insert a repetitive transition",
      "Choose the transition matching the logic",
      "Use contrast where addition is needed"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] Choose the transition matching the logic. Original PP passage \"Designing a Fair Science Fair Rubric\".",
    "order": 52,
    "points": 1
  },
  {
    "prompt": "Passage 4 (\"Designing a Fair Science Fair Rubric\"), item 8. Underlined: \"rubric two weeks early. Several\". Which choice best addresses a organization issue in context?",
    "choices": [
      "Move detail to an unrelated paragraph",
      "Delete the needed topic sentence",
      "Insert an off-topic anecdote",
      "Place the sentence to support paragraph purpose"
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] Place the sentence to support paragraph purpose. Original PP passage \"Designing a Fair Science Fair Rubric\".",
    "order": 53,
    "points": 1
  },
  {
    "prompt": "Passage 4 (\"Designing a Fair Science Fair Rubric\"), item 9. Underlined: \"still disagreed, but they pointed\". Which choice best addresses a rhetoric issue in context?",
    "choices": [
      "NO CHANGE",
      "Add unnecessary words that dilute meaning",
      "Create a grammar error for variety",
      "Replace with an off-topic sentence"
    ],
    "correctIndex": 0,
    "explanation": "[MEDIUM] Pick the choice that achieves the stated purpose. Original PP passage \"Designing a Fair Science Fair Rubric\".",
    "order": 54,
    "points": 1
  },
  {
    "prompt": "Passage 4 (\"Designing a Fair Science Fair Rubric\"), item 10. Underlined: \"were not always the most\". Which choice best addresses a apostrophe issue in context?",
    "choices": [
      "Drop a needed possessive mark",
      "Mark possession correctly (its vs it's)",
      "Use its' (never correct)",
      "Pluralize with a random apostrophe"
    ],
    "correctIndex": 1,
    "explanation": "[MEDIUM] Mark possession correctly (its vs it's). Original PP passage \"Designing a Fair Science Fair Rubric\".",
    "order": 55,
    "points": 1
  },
  {
    "prompt": "Passage 4 (\"Designing a Fair Science Fair Rubric\"), item 11. Underlined: \"science fair used to feel\". Which choice best addresses a semicolon issue in context?",
    "choices": [
      "Semicolon before a dependent clause",
      "Semicolon between subject and predicate",
      "Replace a needed colon incorrectly",
      "Join two related independent clauses with a semicolon"
    ],
    "correctIndex": 3,
    "explanation": "[HARD] Join two related independent clauses with a semicolon. Original PP passage \"Designing a Fair Science Fair Rubric\".",
    "order": 56,
    "points": 1
  },
  {
    "prompt": "Passage 4 (\"Designing a Fair Science Fair Rubric\"), item 12. Underlined: \"coaches drafted a rubric with\". Which choice best addresses a modifier issue in context?",
    "choices": [
      "Create a squinting modifier",
      "Modify the wrong noun",
      "Place the modifier next to what it describes",
      "Create a dangling modifier"
    ],
    "correctIndex": 2,
    "explanation": "[HARD] Place the modifier next to what it describes. Original PP passage \"Designing a Fair Science Fair Rubric\".",
    "order": 57,
    "points": 1
  },
  {
    "prompt": "Passage 4 (\"Designing a Fair Science Fair Rubric\"), item 13. Underlined: \"rubric two weeks early. Several\". Which choice best addresses a idiom issue in context?",
    "choices": [
      "Replace with an off-topic sentence",
      "NO CHANGE",
      "Add unnecessary words that dilute meaning",
      "Create a grammar error for variety"
    ],
    "correctIndex": 1,
    "explanation": "[HARD] Use the idiomatic preposition/pairing. Original PP passage \"Designing a Fair Science Fair Rubric\".",
    "order": 58,
    "points": 1
  },
  {
    "prompt": "Passage 4 (\"Designing a Fair Science Fair Rubric\"), item 14. Underlined: \"still disagreed, but they pointed\". Which choice best addresses a style issue in context?",
    "choices": [
      "Prefer clear, direct wording",
      "Choose the most ornate synonym",
      "Pad with empty intensifiers",
      "Nominalize every verb"
    ],
    "correctIndex": 0,
    "explanation": "[HARD] Prefer clear, direct wording. Original PP passage \"Designing a Fair Science Fair Rubric\".",
    "order": 59,
    "points": 1
  },
  {
    "prompt": "Passage 4 (\"Designing a Fair Science Fair Rubric\"), item 15. Underlined: \"were not always the most\". Which choice best addresses a delete issue in context?",
    "choices": [
      "Keep every sentence for length",
      "Delete essential evidence",
      "Replace a clear claim with a slogan",
      "Delete material that is off-purpose"
    ],
    "correctIndex": 3,
    "explanation": "[HARD] Delete material that is off-purpose. Original PP passage \"Designing a Fair Science Fair Rubric\".",
    "order": 60,
    "points": 1
  },
  {
    "prompt": "Passage 5 (\"Night Shift at the Observatory\"), item 1. Underlined: \"regional observatory learn that astronomy\". Which choice best addresses a concision issue in context?",
    "choices": [
      "Add unnecessary words that dilute meaning",
      "Create a grammar error for variety",
      "Replace with an off-topic sentence",
      "NO CHANGE"
    ],
    "correctIndex": 3,
    "explanation": "[EASY] Prefer the concise option that keeps the meaning. Original PP passage \"Night Shift at the Observatory\".",
    "order": 61,
    "points": 1
  },
  {
    "prompt": "Passage 5 (\"Night Shift at the Observatory\"), item 2. Underlined: \"night, I logged temperature readings\". Which choice best addresses a comma issue in context?",
    "choices": [
      "Create a comma splice",
      "Place a comma between subject and verb",
      "Use commas to set off a nonessential clause",
      "Omit necessary commas around the clause"
    ],
    "correctIndex": 2,
    "explanation": "[EASY] Use commas to set off a nonessential clause. Original PP passage \"Night Shift at the Observatory\".",
    "order": 62,
    "points": 1
  },
  {
    "prompt": "Passage 5 (\"Night Shift at the Observatory\"), item 3. Underlined: \"window opened, everyone moved quickly.\". Which choice best addresses a agreement issue in context?",
    "choices": [
      "Use a plural verb with singular each/every",
      "Match the verb to the true subject",
      "Agree with the nearest noun in a phrase",
      "Switch number mid-sentence"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] Match the verb to the true subject. Original PP passage \"Night Shift at the Observatory\".",
    "order": 63,
    "points": 1
  },
  {
    "prompt": "Passage 5 (\"Night Shift at the Observatory\"), item 4. Underlined: \"the frames. A faint spectral\". Which choice best addresses a tense issue in context?",
    "choices": [
      "Keep tense consistent with the narrative frame",
      "Jump to future without a signal",
      "Mix past and present randomly",
      "Force present perfect where simple past fits"
    ],
    "correctIndex": 0,
    "explanation": "[EASY] Keep tense consistent with the narrative frame. Original PP passage \"Night Shift at the Observatory\".",
    "order": 64,
    "points": 1
  },
  {
    "prompt": "Passage 5 (\"Night Shift at the Observatory\"), item 5. Underlined: \"dawn, I understood why people\". Which choice best addresses a pronoun issue in context?",
    "choices": [
      "Add unnecessary words that dilute meaning",
      "Create a grammar error for variety",
      "Replace with an off-topic sentence",
      "NO CHANGE"
    ],
    "correctIndex": 3,
    "explanation": "[EASY] Make the antecedent unmistakable. Original PP passage \"Night Shift at the Observatory\".",
    "order": 65,
    "points": 1
  },
  {
    "prompt": "Passage 5 (\"Night Shift at the Observatory\"), item 6. Underlined: \"regional observatory learn that astronomy\". Which choice best addresses a parallelism issue in context?",
    "choices": [
      "Break parallelism mid-list",
      "Change part of speech mid-list",
      "Keep list items in parallel form",
      "Mix gerunds and infinitives"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] Keep list items in parallel form. Original PP passage \"Night Shift at the Observatory\".",
    "order": 66,
    "points": 1
  },
  {
    "prompt": "Passage 5 (\"Night Shift at the Observatory\"), item 7. Underlined: \"night, I logged temperature readings\". Which choice best addresses a transition issue in context?",
    "choices": [
      "Insert a repetitive transition",
      "Choose the transition matching the logic",
      "Use contrast where addition is needed",
      "Use cause where sequence is needed"
    ],
    "correctIndex": 1,
    "explanation": "[MEDIUM] Choose the transition matching the logic. Original PP passage \"Night Shift at the Observatory\".",
    "order": 67,
    "points": 1
  },
  {
    "prompt": "Passage 5 (\"Night Shift at the Observatory\"), item 8. Underlined: \"window opened, everyone moved quickly.\". Which choice best addresses a organization issue in context?",
    "choices": [
      "Place the sentence to support paragraph purpose",
      "Move detail to an unrelated paragraph",
      "Delete the needed topic sentence",
      "Insert an off-topic anecdote"
    ],
    "correctIndex": 0,
    "explanation": "[MEDIUM] Place the sentence to support paragraph purpose. Original PP passage \"Night Shift at the Observatory\".",
    "order": 68,
    "points": 1
  },
  {
    "prompt": "Passage 5 (\"Night Shift at the Observatory\"), item 9. Underlined: \"the frames. A faint spectral\". Which choice best addresses a rhetoric issue in context?",
    "choices": [
      "Add unnecessary words that dilute meaning",
      "Create a grammar error for variety",
      "Replace with an off-topic sentence",
      "NO CHANGE"
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] Pick the choice that achieves the stated purpose. Original PP passage \"Night Shift at the Observatory\".",
    "order": 69,
    "points": 1
  },
  {
    "prompt": "Passage 5 (\"Night Shift at the Observatory\"), item 10. Underlined: \"dawn, I understood why people\". Which choice best addresses a apostrophe issue in context?",
    "choices": [
      "Pluralize with a random apostrophe",
      "Drop a needed possessive mark",
      "Mark possession correctly (its vs it's)",
      "Use its' (never correct)"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] Mark possession correctly (its vs it's). Original PP passage \"Night Shift at the Observatory\".",
    "order": 70,
    "points": 1
  },
  {
    "prompt": "Passage 5 (\"Night Shift at the Observatory\"), item 11. Underlined: \"regional observatory learn that astronomy\". Which choice best addresses a semicolon issue in context?",
    "choices": [
      "Semicolon between subject and predicate",
      "Replace a needed colon incorrectly",
      "Join two related independent clauses with a semicolon",
      "Semicolon before a dependent clause"
    ],
    "correctIndex": 2,
    "explanation": "[HARD] Join two related independent clauses with a semicolon. Original PP passage \"Night Shift at the Observatory\".",
    "order": 71,
    "points": 1
  },
  {
    "prompt": "Passage 5 (\"Night Shift at the Observatory\"), item 12. Underlined: \"night, I logged temperature readings\". Which choice best addresses a modifier issue in context?",
    "choices": [
      "Create a dangling modifier",
      "Create a squinting modifier",
      "Modify the wrong noun",
      "Place the modifier next to what it describes"
    ],
    "correctIndex": 3,
    "explanation": "[HARD] Place the modifier next to what it describes. Original PP passage \"Night Shift at the Observatory\".",
    "order": 72,
    "points": 1
  },
  {
    "prompt": "Passage 5 (\"Night Shift at the Observatory\"), item 13. Underlined: \"window opened, everyone moved quickly.\". Which choice best addresses a idiom issue in context?",
    "choices": [
      "NO CHANGE",
      "Add unnecessary words that dilute meaning",
      "Create a grammar error for variety",
      "Replace with an off-topic sentence"
    ],
    "correctIndex": 0,
    "explanation": "[HARD] Use the idiomatic preposition/pairing. Original PP passage \"Night Shift at the Observatory\".",
    "order": 73,
    "points": 1
  },
  {
    "prompt": "Passage 5 (\"Night Shift at the Observatory\"), item 14. Underlined: \"the frames. A faint spectral\". Which choice best addresses a style issue in context?",
    "choices": [
      "Nominalize every verb",
      "Prefer clear, direct wording",
      "Choose the most ornate synonym",
      "Pad with empty intensifiers"
    ],
    "correctIndex": 1,
    "explanation": "[HARD] Prefer clear, direct wording. Original PP passage \"Night Shift at the Observatory\".",
    "order": 74,
    "points": 1
  },
  {
    "prompt": "Passage 5 (\"Night Shift at the Observatory\"), item 15. Underlined: \"dawn, I understood why people\". Which choice best addresses a delete issue in context?",
    "choices": [
      "Delete essential evidence",
      "Replace a clear claim with a slogan",
      "Delete material that is off-purpose",
      "Keep every sentence for length"
    ],
    "correctIndex": 2,
    "explanation": "[HARD] Delete material that is off-purpose. Original PP passage \"Night Shift at the Observatory\".",
    "order": 75,
    "points": 1
  }
] as QuestionSeed[];
}

function formAMathQuestions(): QuestionSeed[] {
  return [
  {
    "prompt": "Math Form A #1. If 3x + 4 = 13, what is x?",
    "choices": [
      "4.33",
      "3",
      "4",
      "2"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] Subtract 4, divide by 3.",
    "order": 1,
    "points": 1
  },
  {
    "prompt": "Math Form A #2. If 4x + 5 = 22, what is x?",
    "choices": [
      "3.25",
      "5.5",
      "4.25",
      "5.25"
    ],
    "correctIndex": 2,
    "explanation": "[EASY] Subtract 5, divide by 4.",
    "order": 2,
    "points": 1
  },
  {
    "prompt": "Math Form A #3. If 5x + 6 = 33, what is x?",
    "choices": [
      "6.4",
      "4.4",
      "6.6",
      "5.4"
    ],
    "correctIndex": 3,
    "explanation": "[EASY] Subtract 6, divide by 5.",
    "order": 3,
    "points": 1
  },
  {
    "prompt": "Math Form A #4. If 6x + 7 = 46, what is x?",
    "choices": [
      "6.5",
      "7.5",
      "5.5",
      "7.67"
    ],
    "correctIndex": 0,
    "explanation": "[EASY] Subtract 7, divide by 6.",
    "order": 4,
    "points": 1
  },
  {
    "prompt": "Math Form A #5. If 7x + 8 = 56, what is x?",
    "choices": [
      "8",
      "6.86",
      "7.86",
      "5.86"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] Subtract 8, divide by 7.",
    "order": 5,
    "points": 1
  },
  {
    "prompt": "Math Form A #6. If 8x + 9 = 73, what is x?",
    "choices": [
      "7",
      "9.13",
      "8",
      "9"
    ],
    "correctIndex": 2,
    "explanation": "[EASY] Subtract 9, divide by 8.",
    "order": 6,
    "points": 1
  },
  {
    "prompt": "Math Form A #7. If 9x + 3 = 29, what is x?",
    "choices": [
      "3.89",
      "1.8900000000000001",
      "3.22",
      "2.89"
    ],
    "correctIndex": 3,
    "explanation": "[EASY] Subtract 3, divide by 9.",
    "order": 7,
    "points": 1
  },
  {
    "prompt": "Math Form A #8. If 10x + 4 = 43, what is x?",
    "choices": [
      "3.9",
      "4.9",
      "2.9",
      "4.3"
    ],
    "correctIndex": 0,
    "explanation": "[EASY] Subtract 4, divide by 10.",
    "order": 8,
    "points": 1
  },
  {
    "prompt": "Math Form A #9. If 2x + 5 = 14, what is x?",
    "choices": [
      "7",
      "4.5",
      "5.5",
      "3.5"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] Subtract 5, divide by 2.",
    "order": 9,
    "points": 1
  },
  {
    "prompt": "Math Form A #10. If 3x + 6 = 18, what is x?",
    "choices": [
      "5",
      "3",
      "6",
      "4"
    ],
    "correctIndex": 3,
    "explanation": "[EASY] Subtract 6, divide by 3.",
    "order": 10,
    "points": 1
  },
  {
    "prompt": "Math Form A #11. If 4x + 7 = 29, what is x?",
    "choices": [
      "4.5",
      "7.25",
      "5.5",
      "6.5"
    ],
    "correctIndex": 2,
    "explanation": "[EASY] Subtract 7, divide by 4.",
    "order": 11,
    "points": 1
  },
  {
    "prompt": "Math Form A #12. If 5x + 8 = 42, what is x?",
    "choices": [
      "8.4",
      "6.8",
      "7.8",
      "5.8"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] Subtract 8, divide by 5.",
    "order": 12,
    "points": 1
  },
  {
    "prompt": "Math Form A #13. A circle has radius 5. What is its area in terms of π?",
    "choices": [
      "25π",
      "10π",
      "5π",
      "125π"
    ],
    "correctIndex": 0,
    "explanation": "[EASY] Area = πr².",
    "order": 13,
    "points": 1
  },
  {
    "prompt": "Math Form A #14. A circle has radius 6. What is its area in terms of π?",
    "choices": [
      "12π",
      "6π",
      "216π",
      "36π"
    ],
    "correctIndex": 3,
    "explanation": "[EASY] Area = πr².",
    "order": 14,
    "points": 1
  },
  {
    "prompt": "Math Form A #15. A circle has radius 2. What is its area in terms of π?",
    "choices": [
      "2π",
      "8π",
      "4π",
      "4π (distractor 1)"
    ],
    "correctIndex": 2,
    "explanation": "[EASY] Area = πr².",
    "order": 15,
    "points": 1
  },
  {
    "prompt": "Math Form A #16. A circle has radius 3. What is its area in terms of π?",
    "choices": [
      "27π",
      "9π",
      "6π",
      "3π"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] Area = πr².",
    "order": 16,
    "points": 1
  },
  {
    "prompt": "Math Form A #17. A circle has radius 4. What is its area in terms of π?",
    "choices": [
      "16π",
      "8π",
      "4π",
      "64π"
    ],
    "correctIndex": 0,
    "explanation": "[EASY] Area = πr².",
    "order": 17,
    "points": 1
  },
  {
    "prompt": "Math Form A #18. A circle has radius 5. What is its area in terms of π?",
    "choices": [
      "10π",
      "5π",
      "125π",
      "25π"
    ],
    "correctIndex": 3,
    "explanation": "[EASY] Area = πr².",
    "order": 18,
    "points": 1
  },
  {
    "prompt": "Math Form A #19. A circle has radius 6. What is its area in terms of π?",
    "choices": [
      "6π",
      "216π",
      "36π",
      "12π"
    ],
    "correctIndex": 2,
    "explanation": "[EASY] Area = πr².",
    "order": 19,
    "points": 1
  },
  {
    "prompt": "Math Form A #20. A circle has radius 2. What is its area in terms of π?",
    "choices": [
      "2π",
      "8π",
      "4π",
      "4π (distractor 1)"
    ],
    "correctIndex": 2,
    "explanation": "[EASY] Area = πr².",
    "order": 20,
    "points": 1
  },
  {
    "prompt": "Math Form A #21. A jacket costs $50 and is discounted 30%. What is the sale price?",
    "choices": [
      "$44",
      "$15",
      "$85",
      "$35"
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] Sale = price × (1 − discount).",
    "order": 21,
    "points": 1
  },
  {
    "prompt": "Math Form A #22. A jacket costs $60 and is discounted 35%. What is the sale price?",
    "choices": [
      "$39",
      "$53",
      "$21",
      "$99"
    ],
    "correctIndex": 0,
    "explanation": "[MEDIUM] Sale = price × (1 − discount).",
    "order": 22,
    "points": 1
  },
  {
    "prompt": "Math Form A #23. A jacket costs $70 and is discounted 40%. What is the sale price?",
    "choices": [
      "$112",
      "$42",
      "$62",
      "$28"
    ],
    "correctIndex": 1,
    "explanation": "[MEDIUM] Sale = price × (1 − discount).",
    "order": 23,
    "points": 1
  },
  {
    "prompt": "Math Form A #24. A jacket costs $20 and is discounted 25%. What is the sale price?",
    "choices": [
      "$5",
      "$35",
      "$15",
      "$15 (distractor 1)"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] Sale = price × (1 − discount).",
    "order": 24,
    "points": 1
  },
  {
    "prompt": "Math Form A #25. A jacket costs $30 and is discounted 30%. What is the sale price?",
    "choices": [
      "$24",
      "$9",
      "$51",
      "$21"
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] Sale = price × (1 − discount).",
    "order": 25,
    "points": 1
  },
  {
    "prompt": "Math Form A #26. A jacket costs $40 and is discounted 35%. What is the sale price?",
    "choices": [
      "$26",
      "$33",
      "$14",
      "$66"
    ],
    "correctIndex": 0,
    "explanation": "[MEDIUM] Sale = price × (1 − discount).",
    "order": 26,
    "points": 1
  },
  {
    "prompt": "Math Form A #27. A jacket costs $50 and is discounted 40%. What is the sale price?",
    "choices": [
      "$80",
      "$30",
      "$42",
      "$20"
    ],
    "correctIndex": 1,
    "explanation": "[MEDIUM] Sale = price × (1 − discount).",
    "order": 27,
    "points": 1
  },
  {
    "prompt": "Math Form A #28. A jacket costs $60 and is discounted 25%. What is the sale price?",
    "choices": [
      "$15",
      "$105",
      "$45",
      "$55"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] Sale = price × (1 − discount).",
    "order": 28,
    "points": 1
  },
  {
    "prompt": "Math Form A #29. Slope of the line through (4, 2) and (9, 7)?",
    "choices": [
      "-1",
      "5/5",
      "5",
      "1"
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] m = Δy/Δx.",
    "order": 29,
    "points": 1
  },
  {
    "prompt": "Math Form A #30. Slope of the line through (0, 4) and (3, 8)?",
    "choices": [
      "4",
      "4/3",
      "-1.3333333333333333",
      "3/4"
    ],
    "correctIndex": 1,
    "explanation": "[MEDIUM] m = Δy/Δx.",
    "order": 30,
    "points": 1
  },
  {
    "prompt": "Math Form A #31. Slope of the line through (1, 6) and (5, 11)?",
    "choices": [
      "5/4",
      "-1.25",
      "4/5",
      "5"
    ],
    "correctIndex": 0,
    "explanation": "[MEDIUM] m = Δy/Δx.",
    "order": 31,
    "points": 1
  },
  {
    "prompt": "Math Form A #32. Slope of the line through (2, 1) and (7, 5)?",
    "choices": [
      "-0.8",
      "5/4",
      "4",
      "4/5"
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] m = Δy/Δx.",
    "order": 32,
    "points": 1
  },
  {
    "prompt": "Math Form A #33. Slope of the line through (3, 3) and (6, 8)?",
    "choices": [
      "3/5",
      "5",
      "5/3",
      "-1.6666666666666667"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] m = Δy/Δx.",
    "order": 33,
    "points": 1
  },
  {
    "prompt": "Math Form A #34. Slope of the line through (4, 5) and (8, 9)?",
    "choices": [
      "4",
      "1",
      "-1",
      "4/4"
    ],
    "correctIndex": 1,
    "explanation": "[MEDIUM] m = Δy/Δx.",
    "order": 34,
    "points": 1
  },
  {
    "prompt": "Math Form A #35. Slope of the line through (0, 0) and (5, 5)?",
    "choices": [
      "1",
      "-1",
      "5/5",
      "5"
    ],
    "correctIndex": 0,
    "explanation": "[MEDIUM] m = Δy/Δx.",
    "order": 35,
    "points": 1
  },
  {
    "prompt": "Math Form A #36. Slope of the line through (1, 2) and (4, 6)?",
    "choices": [
      "-1.3333333333333333",
      "3/4",
      "4",
      "4/3"
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] m = Δy/Δx.",
    "order": 36,
    "points": 1
  },
  {
    "prompt": "Math Form A #37. For 2x² + (-7)x + 7 = 0, what does the discriminant imply?",
    "choices": [
      "Infinitely many roots",
      "Roots must be integers",
      "No real roots",
      "Two distinct real roots"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] Discriminant = -7.",
    "order": 37,
    "points": 1
  },
  {
    "prompt": "Math Form A #38. For 3x² + (-8)x + 8 = 0, what does the discriminant imply?",
    "choices": [
      "Roots must be integers",
      "No real roots",
      "Two distinct real roots",
      "Infinitely many roots"
    ],
    "correctIndex": 1,
    "explanation": "[MEDIUM] Discriminant = -32.",
    "order": 38,
    "points": 1
  },
  {
    "prompt": "Math Form A #39. For 4x² + (-6)x + 9 = 0, what does the discriminant imply?",
    "choices": [
      "No real roots",
      "Two distinct real roots",
      "Infinitely many roots",
      "Roots must be integers"
    ],
    "correctIndex": 0,
    "explanation": "[MEDIUM] Discriminant = -108.",
    "order": 39,
    "points": 1
  },
  {
    "prompt": "Math Form A #40. For 1x² + (-7)x + 5 = 0, what does the discriminant imply?",
    "choices": [
      "Two distinct real roots",
      "No real roots",
      "Infinitely many roots",
      "Roots must be integers"
    ],
    "correctIndex": 0,
    "explanation": "[MEDIUM] Discriminant = 29.",
    "order": 40,
    "points": 1
  },
  {
    "prompt": "Math Form A #41. For 2x² + (-8)x + 6 = 0, what does the discriminant imply?",
    "choices": [
      "Roots must be integers",
      "Two distinct real roots",
      "No real roots",
      "Infinitely many roots"
    ],
    "correctIndex": 1,
    "explanation": "[HARD] Discriminant = 16.",
    "order": 41,
    "points": 1
  },
  {
    "prompt": "Math Form A #42. For 3x² + (-6)x + 7 = 0, what does the discriminant imply?",
    "choices": [
      "Infinitely many roots",
      "Roots must be integers",
      "No real roots",
      "Two distinct real roots"
    ],
    "correctIndex": 2,
    "explanation": "[HARD] Discriminant = -48.",
    "order": 42,
    "points": 1
  },
  {
    "prompt": "Math Form A #43. For 4x² + (-7)x + 8 = 0, what does the discriminant imply?",
    "choices": [
      "Two distinct real roots",
      "Infinitely many roots",
      "Roots must be integers",
      "No real roots"
    ],
    "correctIndex": 3,
    "explanation": "[HARD] Discriminant = -79.",
    "order": 43,
    "points": 1
  },
  {
    "prompt": "Math Form A #44. For 1x² + (-8)x + 9 = 0, what does the discriminant imply?",
    "choices": [
      "Two distinct real roots",
      "No real roots",
      "Infinitely many roots",
      "Roots must be integers"
    ],
    "correctIndex": 0,
    "explanation": "[HARD] Discriminant = 28.",
    "order": 44,
    "points": 1
  },
  {
    "prompt": "Math Form A #45. Right triangle legs 6 and 7. Hypotenuse length?",
    "choices": [
      "10",
      "9.22",
      "13",
      "42"
    ],
    "correctIndex": 1,
    "explanation": "[HARD] c = √(a²+b²).",
    "order": 45,
    "points": 1
  },
  {
    "prompt": "Math Form A #46. Right triangle legs 7 and 8. Hypotenuse length?",
    "choices": [
      "56",
      "12",
      "10.63",
      "15"
    ],
    "correctIndex": 2,
    "explanation": "[HARD] c = √(a²+b²).",
    "order": 46,
    "points": 1
  },
  {
    "prompt": "Math Form A #47. Right triangle legs 8 and 9. Hypotenuse length?",
    "choices": [
      "17",
      "72",
      "13",
      "12.042"
    ],
    "correctIndex": 3,
    "explanation": "[HARD] c = √(a²+b²).",
    "order": 47,
    "points": 1
  },
  {
    "prompt": "Math Form A #48. Right triangle legs 3 and 4. Hypotenuse length?",
    "choices": [
      "5",
      "7",
      "12",
      "6"
    ],
    "correctIndex": 0,
    "explanation": "[HARD] c = √(a²+b²).",
    "order": 48,
    "points": 1
  },
  {
    "prompt": "Math Form A #49. Right triangle legs 4 and 5. Hypotenuse length?",
    "choices": [
      "7",
      "6.403",
      "9",
      "20"
    ],
    "correctIndex": 1,
    "explanation": "[HARD] c = √(a²+b²).",
    "order": 49,
    "points": 1
  },
  {
    "prompt": "Math Form A #50. Right triangle legs 5 and 6. Hypotenuse length?",
    "choices": [
      "11",
      "30",
      "9",
      "7.81"
    ],
    "correctIndex": 3,
    "explanation": "[HARD] c = √(a²+b²).",
    "order": 50,
    "points": 1
  },
  {
    "prompt": "Math Form A #51. Right triangle legs 6 and 7. Hypotenuse length?",
    "choices": [
      "42",
      "10",
      "9.22",
      "13"
    ],
    "correctIndex": 2,
    "explanation": "[HARD] c = √(a²+b²).",
    "order": 51,
    "points": 1
  },
  {
    "prompt": "Math Form A #52. Right triangle legs 7 and 8. Hypotenuse length?",
    "choices": [
      "12",
      "10.63",
      "15",
      "56"
    ],
    "correctIndex": 1,
    "explanation": "[HARD] c = √(a²+b²).",
    "order": 52,
    "points": 1
  },
  {
    "prompt": "Math Form A #53. If sin θ = 7/9 (acute θ in a right triangle), cos θ = ?",
    "choices": [
      "5.657/9",
      "7/9",
      "9/7",
      "5.657/7"
    ],
    "correctIndex": 0,
    "explanation": "[HARD] cos = adjacent/hypotenuse.",
    "order": 53,
    "points": 1
  },
  {
    "prompt": "Math Form A #54. If sin θ = 8/10 (acute θ in a right triangle), cos θ = ?",
    "choices": [
      "8/10",
      "10/8",
      "6/8",
      "6/10"
    ],
    "correctIndex": 3,
    "explanation": "[HARD] cos = adjacent/hypotenuse.",
    "order": 54,
    "points": 1
  },
  {
    "prompt": "Math Form A #55. If sin θ = 4/6 (acute θ in a right triangle), cos θ = ?",
    "choices": [
      "6/4",
      "4.472/4",
      "4.472/6",
      "4/6"
    ],
    "correctIndex": 2,
    "explanation": "[HARD] cos = adjacent/hypotenuse.",
    "order": 55,
    "points": 1
  },
  {
    "prompt": "Math Form A #56. If sin θ = 5/7 (acute θ in a right triangle), cos θ = ?",
    "choices": [
      "4.899/5",
      "4.899/7",
      "5/7",
      "7/5"
    ],
    "correctIndex": 1,
    "explanation": "[HARD] cos = adjacent/hypotenuse.",
    "order": 56,
    "points": 1
  },
  {
    "prompt": "Math Form A #57. If sin θ = 6/8 (acute θ in a right triangle), cos θ = ?",
    "choices": [
      "5.292/8",
      "6/8",
      "8/6",
      "5.292/6"
    ],
    "correctIndex": 0,
    "explanation": "[HARD] cos = adjacent/hypotenuse.",
    "order": 57,
    "points": 1
  },
  {
    "prompt": "Math Form A #58. If sin θ = 7/9 (acute θ in a right triangle), cos θ = ?",
    "choices": [
      "7/9",
      "9/7",
      "5.657/7",
      "5.657/9"
    ],
    "correctIndex": 3,
    "explanation": "[HARD] cos = adjacent/hypotenuse.",
    "order": 58,
    "points": 1
  },
  {
    "prompt": "Math Form A #59. If sin θ = 8/10 (acute θ in a right triangle), cos θ = ?",
    "choices": [
      "10/8",
      "6/8",
      "6/10",
      "8/10"
    ],
    "correctIndex": 2,
    "explanation": "[HARD] cos = adjacent/hypotenuse.",
    "order": 59,
    "points": 1
  },
  {
    "prompt": "Math Form A #60. If sin θ = 4/6 (acute θ in a right triangle), cos θ = ?",
    "choices": [
      "6/4",
      "4.472/4",
      "4.472/6",
      "4/6"
    ],
    "correctIndex": 2,
    "explanation": "[HARD] cos = adjacent/hypotenuse.",
    "order": 60,
    "points": 1
  }
] as QuestionSeed[];
}

function formAReadingQuestions(): QuestionSeed[] {
  return [
  {
    "prompt": "Reading Form A — Literary Narrative: \"The Last Ferry\" (main idea). Passage excerpt: Elena stood on the pier with a ticket she no longer needed. The ferry that had carried her father to the mainland every dawn had been sold to a tour company. She remembered how he used to hum while coiling rope, never looking at the water a… Which choice is best?",
    "choices": [
      "Outside knowledge not grounded in this passage",
      "The passage centers on how a place/practice carries layered human or scientific meaning.",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] main idea: stay inside original passage \"The Last Ferry\".",
    "order": 1,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Literary Narrative: \"The Last Ferry\" (detail). Passage excerpt: Elena stood on the pier with a ticket she no longer needed. The ferry that had carried her father to the mainland every dawn had been sold to a tour company. She remembered how he used to hum while coiling rope, never looking at the water a… Which choice is best?",
    "choices": [
      "A concrete detail stated in the passage supports the author's point.",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage"
    ],
    "correctIndex": 0,
    "explanation": "[EASY] detail: stay inside original passage \"The Last Ferry\".",
    "order": 2,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Literary Narrative: \"The Last Ferry\" (inference). Passage excerpt: Elena stood on the pier with a ticket she no longer needed. The ferry that had carried her father to the mainland every dawn had been sold to a tour company. She remembered how he used to hum while coiling rope, never looking at the water a… Which choice is best?",
    "choices": [
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "The inference is strongly suggested by the text, not invented outside it."
    ],
    "correctIndex": 3,
    "explanation": "[EASY] inference: stay inside original passage \"The Last Ferry\".",
    "order": 3,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Literary Narrative: \"The Last Ferry\" (vocab-in-context). Passage excerpt: Elena stood on the pier with a ticket she no longer needed. The ferry that had carried her father to the mainland every dawn had been sold to a tour company. She remembered how he used to hum while coiling rope, never looking at the water a… Which choice is best?",
    "choices": [
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "Meaning is constrained by nearby sentence context.",
      "A claim that contradicts the passage"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] vocab-in-context: stay inside original passage \"The Last Ferry\".",
    "order": 4,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Literary Narrative: \"The Last Ferry\" (author purpose). Passage excerpt: Elena stood on the pier with a ticket she no longer needed. The ferry that had carried her father to the mainland every dawn had been sold to a tour company. She remembered how he used to hum while coiling rope, never looking at the water a… Which choice is best?",
    "choices": [
      "Outside knowledge not grounded in this passage",
      "The author aims to explain or illuminate with specific examples.",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states"
    ],
    "correctIndex": 1,
    "explanation": "[MEDIUM] author purpose: stay inside original passage \"The Last Ferry\".",
    "order": 5,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Literary Narrative: \"The Last Ferry\" (tone). Passage excerpt: Elena stood on the pier with a ticket she no longer needed. The ferry that had carried her father to the mainland every dawn had been sold to a tour company. She remembered how he used to hum while coiling rope, never looking at the water a… Which choice is best?",
    "choices": [
      "Tone is reflective/analytical rather than purely hostile or giddy.",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage"
    ],
    "correctIndex": 0,
    "explanation": "[MEDIUM] tone: stay inside original passage \"The Last Ferry\".",
    "order": 6,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Literary Narrative: \"The Last Ferry\" (structure). Passage excerpt: Elena stood on the pier with a ticket she no longer needed. The ferry that had carried her father to the mainland every dawn had been sold to a tour company. She remembered how he used to hum while coiling rope, never looking at the water a… Which choice is best?",
    "choices": [
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "The passage moves from scene or claim toward complication and insight."
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] structure: stay inside original passage \"The Last Ferry\".",
    "order": 7,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Literary Narrative: \"The Last Ferry\" (evidence). Passage excerpt: Elena stood on the pier with a ticket she no longer needed. The ferry that had carried her father to the mainland every dawn had been sold to a tour company. She remembered how he used to hum while coiling rope, never looking at the water a… Which choice is best?",
    "choices": [
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "The strongest evidence is a line that directly backs the claim.",
      "A claim that contradicts the passage"
    ],
    "correctIndex": 2,
    "explanation": "[HARD] evidence: stay inside original passage \"The Last Ferry\".",
    "order": 8,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Literary Narrative: \"The Last Ferry\" (except/not). Passage excerpt: Elena stood on the pier with a ticket she no longer needed. The ferry that had carried her father to the mainland every dawn had been sold to a tour company. She remembered how he used to hum while coiling rope, never looking at the water a… Which choice is best?",
    "choices": [
      "Outside knowledge not grounded in this passage",
      "Eliminate supported choices; the answer is what the passage does not support.",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states"
    ],
    "correctIndex": 1,
    "explanation": "[HARD] except/not: stay inside original passage \"The Last Ferry\".",
    "order": 9,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Literary Narrative: \"The Last Ferry\" (function of sentence). Passage excerpt: Elena stood on the pier with a ticket she no longer needed. The ferry that had carried her father to the mainland every dawn had been sold to a tour company. She remembered how he used to hum while coiling rope, never looking at the water a… Which choice is best?",
    "choices": [
      "The sentence advances the paragraph's role (example, contrast, or conclusion).",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage"
    ],
    "correctIndex": 0,
    "explanation": "[HARD] function of sentence: stay inside original passage \"The Last Ferry\".",
    "order": 10,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Social Science: \"Neighborhood Time Banks\" (main idea). Passage excerpt: Time banks allow neighbors to exchange hours of service without money. One member might tutor algebra for two hours and later redeem those hours for bicycle repair. Researchers tracking three Midwestern towns found that participants reporte… Which choice is best?",
    "choices": [
      "The passage centers on how a place/practice carries layered human or scientific meaning.",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage"
    ],
    "correctIndex": 0,
    "explanation": "[EASY] main idea: stay inside original passage \"Neighborhood Time Banks\".",
    "order": 11,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Social Science: \"Neighborhood Time Banks\" (detail). Passage excerpt: Time banks allow neighbors to exchange hours of service without money. One member might tutor algebra for two hours and later redeem those hours for bicycle repair. Researchers tracking three Midwestern towns found that participants reporte… Which choice is best?",
    "choices": [
      "Outside knowledge not grounded in this passage",
      "A concrete detail stated in the passage supports the author's point.",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] detail: stay inside original passage \"Neighborhood Time Banks\".",
    "order": 12,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Social Science: \"Neighborhood Time Banks\" (inference). Passage excerpt: Time banks allow neighbors to exchange hours of service without money. One member might tutor algebra for two hours and later redeem those hours for bicycle repair. Researchers tracking three Midwestern towns found that participants reporte… Which choice is best?",
    "choices": [
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "The inference is strongly suggested by the text, not invented outside it.",
      "A claim that contradicts the passage"
    ],
    "correctIndex": 2,
    "explanation": "[EASY] inference: stay inside original passage \"Neighborhood Time Banks\".",
    "order": 13,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Social Science: \"Neighborhood Time Banks\" (vocab-in-context). Passage excerpt: Time banks allow neighbors to exchange hours of service without money. One member might tutor algebra for two hours and later redeem those hours for bicycle repair. Researchers tracking three Midwestern towns found that participants reporte… Which choice is best?",
    "choices": [
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "Meaning is constrained by nearby sentence context."
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] vocab-in-context: stay inside original passage \"Neighborhood Time Banks\".",
    "order": 14,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Social Science: \"Neighborhood Time Banks\" (author purpose). Passage excerpt: Time banks allow neighbors to exchange hours of service without money. One member might tutor algebra for two hours and later redeem those hours for bicycle repair. Researchers tracking three Midwestern towns found that participants reporte… Which choice is best?",
    "choices": [
      "The author aims to explain or illuminate with specific examples.",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage"
    ],
    "correctIndex": 0,
    "explanation": "[MEDIUM] author purpose: stay inside original passage \"Neighborhood Time Banks\".",
    "order": 15,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Social Science: \"Neighborhood Time Banks\" (tone). Passage excerpt: Time banks allow neighbors to exchange hours of service without money. One member might tutor algebra for two hours and later redeem those hours for bicycle repair. Researchers tracking three Midwestern towns found that participants reporte… Which choice is best?",
    "choices": [
      "Outside knowledge not grounded in this passage",
      "Tone is reflective/analytical rather than purely hostile or giddy.",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states"
    ],
    "correctIndex": 1,
    "explanation": "[MEDIUM] tone: stay inside original passage \"Neighborhood Time Banks\".",
    "order": 16,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Social Science: \"Neighborhood Time Banks\" (structure). Passage excerpt: Time banks allow neighbors to exchange hours of service without money. One member might tutor algebra for two hours and later redeem those hours for bicycle repair. Researchers tracking three Midwestern towns found that participants reporte… Which choice is best?",
    "choices": [
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "The passage moves from scene or claim toward complication and insight.",
      "A claim that contradicts the passage"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] structure: stay inside original passage \"Neighborhood Time Banks\".",
    "order": 17,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Social Science: \"Neighborhood Time Banks\" (evidence). Passage excerpt: Time banks allow neighbors to exchange hours of service without money. One member might tutor algebra for two hours and later redeem those hours for bicycle repair. Researchers tracking three Midwestern towns found that participants reporte… Which choice is best?",
    "choices": [
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "The strongest evidence is a line that directly backs the claim."
    ],
    "correctIndex": 3,
    "explanation": "[HARD] evidence: stay inside original passage \"Neighborhood Time Banks\".",
    "order": 18,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Social Science: \"Neighborhood Time Banks\" (except/not). Passage excerpt: Time banks allow neighbors to exchange hours of service without money. One member might tutor algebra for two hours and later redeem those hours for bicycle repair. Researchers tracking three Midwestern towns found that participants reporte… Which choice is best?",
    "choices": [
      "Eliminate supported choices; the answer is what the passage does not support.",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage"
    ],
    "correctIndex": 0,
    "explanation": "[HARD] except/not: stay inside original passage \"Neighborhood Time Banks\".",
    "order": 19,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Social Science: \"Neighborhood Time Banks\" (function of sentence). Passage excerpt: Time banks allow neighbors to exchange hours of service without money. One member might tutor algebra for two hours and later redeem those hours for bicycle repair. Researchers tracking three Midwestern towns found that participants reporte… Which choice is best?",
    "choices": [
      "Outside knowledge not grounded in this passage",
      "The sentence advances the paragraph's role (example, contrast, or conclusion).",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states"
    ],
    "correctIndex": 1,
    "explanation": "[HARD] function of sentence: stay inside original passage \"Neighborhood Time Banks\".",
    "order": 20,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Humanities: \"Margins of a Lost Cookbook\" (main idea). Passage excerpt: In the university archive, a 1912 community cookbook carries handwritten notes in three inks. Early marks correct oven temperatures; later ones translate spice names; the newest layer—blue ballpoint—adds memories: Dad's Sunday stew, too sal… Which choice is best?",
    "choices": [
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "The passage centers on how a place/practice carries layered human or scientific meaning."
    ],
    "correctIndex": 3,
    "explanation": "[EASY] main idea: stay inside original passage \"Margins of a Lost Cookbook\".",
    "order": 21,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Humanities: \"Margins of a Lost Cookbook\" (detail). Passage excerpt: In the university archive, a 1912 community cookbook carries handwritten notes in three inks. Early marks correct oven temperatures; later ones translate spice names; the newest layer—blue ballpoint—adds memories: Dad's Sunday stew, too sal… Which choice is best?",
    "choices": [
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "A concrete detail stated in the passage supports the author's point.",
      "A claim that contradicts the passage"
    ],
    "correctIndex": 2,
    "explanation": "[EASY] detail: stay inside original passage \"Margins of a Lost Cookbook\".",
    "order": 22,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Humanities: \"Margins of a Lost Cookbook\" (inference). Passage excerpt: In the university archive, a 1912 community cookbook carries handwritten notes in three inks. Early marks correct oven temperatures; later ones translate spice names; the newest layer—blue ballpoint—adds memories: Dad's Sunday stew, too sal… Which choice is best?",
    "choices": [
      "Outside knowledge not grounded in this passage",
      "The inference is strongly suggested by the text, not invented outside it.",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] inference: stay inside original passage \"Margins of a Lost Cookbook\".",
    "order": 23,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Humanities: \"Margins of a Lost Cookbook\" (vocab-in-context). Passage excerpt: In the university archive, a 1912 community cookbook carries handwritten notes in three inks. Early marks correct oven temperatures; later ones translate spice names; the newest layer—blue ballpoint—adds memories: Dad's Sunday stew, too sal… Which choice is best?",
    "choices": [
      "Meaning is constrained by nearby sentence context.",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage"
    ],
    "correctIndex": 0,
    "explanation": "[MEDIUM] vocab-in-context: stay inside original passage \"Margins of a Lost Cookbook\".",
    "order": 24,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Humanities: \"Margins of a Lost Cookbook\" (author purpose). Passage excerpt: In the university archive, a 1912 community cookbook carries handwritten notes in three inks. Early marks correct oven temperatures; later ones translate spice names; the newest layer—blue ballpoint—adds memories: Dad's Sunday stew, too sal… Which choice is best?",
    "choices": [
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "The author aims to explain or illuminate with specific examples."
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] author purpose: stay inside original passage \"Margins of a Lost Cookbook\".",
    "order": 25,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Humanities: \"Margins of a Lost Cookbook\" (tone). Passage excerpt: In the university archive, a 1912 community cookbook carries handwritten notes in three inks. Early marks correct oven temperatures; later ones translate spice names; the newest layer—blue ballpoint—adds memories: Dad's Sunday stew, too sal… Which choice is best?",
    "choices": [
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "Tone is reflective/analytical rather than purely hostile or giddy.",
      "A claim that contradicts the passage"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] tone: stay inside original passage \"Margins of a Lost Cookbook\".",
    "order": 26,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Humanities: \"Margins of a Lost Cookbook\" (structure). Passage excerpt: In the university archive, a 1912 community cookbook carries handwritten notes in three inks. Early marks correct oven temperatures; later ones translate spice names; the newest layer—blue ballpoint—adds memories: Dad's Sunday stew, too sal… Which choice is best?",
    "choices": [
      "Outside knowledge not grounded in this passage",
      "The passage moves from scene or claim toward complication and insight.",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states"
    ],
    "correctIndex": 1,
    "explanation": "[MEDIUM] structure: stay inside original passage \"Margins of a Lost Cookbook\".",
    "order": 27,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Humanities: \"Margins of a Lost Cookbook\" (evidence). Passage excerpt: In the university archive, a 1912 community cookbook carries handwritten notes in three inks. Early marks correct oven temperatures; later ones translate spice names; the newest layer—blue ballpoint—adds memories: Dad's Sunday stew, too sal… Which choice is best?",
    "choices": [
      "The strongest evidence is a line that directly backs the claim.",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage"
    ],
    "correctIndex": 0,
    "explanation": "[HARD] evidence: stay inside original passage \"Margins of a Lost Cookbook\".",
    "order": 28,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Humanities: \"Margins of a Lost Cookbook\" (except/not). Passage excerpt: In the university archive, a 1912 community cookbook carries handwritten notes in three inks. Early marks correct oven temperatures; later ones translate spice names; the newest layer—blue ballpoint—adds memories: Dad's Sunday stew, too sal… Which choice is best?",
    "choices": [
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "Eliminate supported choices; the answer is what the passage does not support."
    ],
    "correctIndex": 3,
    "explanation": "[HARD] except/not: stay inside original passage \"Margins of a Lost Cookbook\".",
    "order": 29,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Humanities: \"Margins of a Lost Cookbook\" (function of sentence). Passage excerpt: In the university archive, a 1912 community cookbook carries handwritten notes in three inks. Early marks correct oven temperatures; later ones translate spice names; the newest layer—blue ballpoint—adds memories: Dad's Sunday stew, too sal… Which choice is best?",
    "choices": [
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "The sentence advances the paragraph's role (example, contrast, or conclusion).",
      "A claim that contradicts the passage"
    ],
    "correctIndex": 2,
    "explanation": "[HARD] function of sentence: stay inside original passage \"Margins of a Lost Cookbook\".",
    "order": 30,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Natural Science: \"Urban Tree Canopy and Heat\" (main idea). Passage excerpt: Cities with denser tree canopy tend to show cooler afternoon surface temperatures in satellite data. A Prosper Prep research brief summarizing public datasets notes that a 10% increase in canopy cover correlated with roughly 1–2°F lower pea… Which choice is best?",
    "choices": [
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "The passage centers on how a place/practice carries layered human or scientific meaning.",
      "A claim that contradicts the passage"
    ],
    "correctIndex": 2,
    "explanation": "[EASY] main idea: stay inside original passage \"Urban Tree Canopy and Heat\".",
    "order": 31,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Natural Science: \"Urban Tree Canopy and Heat\" (detail). Passage excerpt: Cities with denser tree canopy tend to show cooler afternoon surface temperatures in satellite data. A Prosper Prep research brief summarizing public datasets notes that a 10% increase in canopy cover correlated with roughly 1–2°F lower pea… Which choice is best?",
    "choices": [
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "A concrete detail stated in the passage supports the author's point."
    ],
    "correctIndex": 3,
    "explanation": "[EASY] detail: stay inside original passage \"Urban Tree Canopy and Heat\".",
    "order": 32,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Natural Science: \"Urban Tree Canopy and Heat\" (inference). Passage excerpt: Cities with denser tree canopy tend to show cooler afternoon surface temperatures in satellite data. A Prosper Prep research brief summarizing public datasets notes that a 10% increase in canopy cover correlated with roughly 1–2°F lower pea… Which choice is best?",
    "choices": [
      "The inference is strongly suggested by the text, not invented outside it.",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage"
    ],
    "correctIndex": 0,
    "explanation": "[EASY] inference: stay inside original passage \"Urban Tree Canopy and Heat\".",
    "order": 33,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Natural Science: \"Urban Tree Canopy and Heat\" (vocab-in-context). Passage excerpt: Cities with denser tree canopy tend to show cooler afternoon surface temperatures in satellite data. A Prosper Prep research brief summarizing public datasets notes that a 10% increase in canopy cover correlated with roughly 1–2°F lower pea… Which choice is best?",
    "choices": [
      "Outside knowledge not grounded in this passage",
      "Meaning is constrained by nearby sentence context.",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states"
    ],
    "correctIndex": 1,
    "explanation": "[MEDIUM] vocab-in-context: stay inside original passage \"Urban Tree Canopy and Heat\".",
    "order": 34,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Natural Science: \"Urban Tree Canopy and Heat\" (author purpose). Passage excerpt: Cities with denser tree canopy tend to show cooler afternoon surface temperatures in satellite data. A Prosper Prep research brief summarizing public datasets notes that a 10% increase in canopy cover correlated with roughly 1–2°F lower pea… Which choice is best?",
    "choices": [
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "The author aims to explain or illuminate with specific examples.",
      "A claim that contradicts the passage"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] author purpose: stay inside original passage \"Urban Tree Canopy and Heat\".",
    "order": 35,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Natural Science: \"Urban Tree Canopy and Heat\" (tone). Passage excerpt: Cities with denser tree canopy tend to show cooler afternoon surface temperatures in satellite data. A Prosper Prep research brief summarizing public datasets notes that a 10% increase in canopy cover correlated with roughly 1–2°F lower pea… Which choice is best?",
    "choices": [
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "Tone is reflective/analytical rather than purely hostile or giddy."
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] tone: stay inside original passage \"Urban Tree Canopy and Heat\".",
    "order": 36,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Natural Science: \"Urban Tree Canopy and Heat\" (structure). Passage excerpt: Cities with denser tree canopy tend to show cooler afternoon surface temperatures in satellite data. A Prosper Prep research brief summarizing public datasets notes that a 10% increase in canopy cover correlated with roughly 1–2°F lower pea… Which choice is best?",
    "choices": [
      "The passage moves from scene or claim toward complication and insight.",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage"
    ],
    "correctIndex": 0,
    "explanation": "[MEDIUM] structure: stay inside original passage \"Urban Tree Canopy and Heat\".",
    "order": 37,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Natural Science: \"Urban Tree Canopy and Heat\" (evidence). Passage excerpt: Cities with denser tree canopy tend to show cooler afternoon surface temperatures in satellite data. A Prosper Prep research brief summarizing public datasets notes that a 10% increase in canopy cover correlated with roughly 1–2°F lower pea… Which choice is best?",
    "choices": [
      "Outside knowledge not grounded in this passage",
      "The strongest evidence is a line that directly backs the claim.",
      "A claim that contradicts the passage",
      "An extreme absolute the author never states"
    ],
    "correctIndex": 1,
    "explanation": "[HARD] evidence: stay inside original passage \"Urban Tree Canopy and Heat\".",
    "order": 38,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Natural Science: \"Urban Tree Canopy and Heat\" (except/not). Passage excerpt: Cities with denser tree canopy tend to show cooler afternoon surface temperatures in satellite data. A Prosper Prep research brief summarizing public datasets notes that a 10% increase in canopy cover correlated with roughly 1–2°F lower pea… Which choice is best?",
    "choices": [
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "Eliminate supported choices; the answer is what the passage does not support.",
      "A claim that contradicts the passage"
    ],
    "correctIndex": 2,
    "explanation": "[HARD] except/not: stay inside original passage \"Urban Tree Canopy and Heat\".",
    "order": 39,
    "points": 1
  },
  {
    "prompt": "Reading Form A — Natural Science: \"Urban Tree Canopy and Heat\" (function of sentence). Passage excerpt: Cities with denser tree canopy tend to show cooler afternoon surface temperatures in satellite data. A Prosper Prep research brief summarizing public datasets notes that a 10% increase in canopy cover correlated with roughly 1–2°F lower pea… Which choice is best?",
    "choices": [
      "A claim that contradicts the passage",
      "An extreme absolute the author never states",
      "Outside knowledge not grounded in this passage",
      "The sentence advances the paragraph's role (example, contrast, or conclusion)."
    ],
    "correctIndex": 3,
    "explanation": "[HARD] function of sentence: stay inside original passage \"Urban Tree Canopy and Heat\".",
    "order": 40,
    "points": 1
  }
] as QuestionSeed[];
}

function formAScienceQuestions(): QuestionSeed[] {
  return [
  {
    "prompt": "Science Form A — Data: Plant height (cm) vs fertilizer (g/L)\n| Week | 0 g/L | 2 g/L | 4 g/L |\n| 1 | 3.0 | 3.2 | 3.1 |\n| 2 | 5.1 | 6.0 | 6.4 |\n| 3 | 7.0 | 8.8 | 9.1 |\n| 4 | 8.2 | 10.5 | 10.6 |\nAt week 3, which fertilizer level produced the tallest plants?",
    "choices": [
      "4 g/L",
      "0 g/L",
      "2 g/L",
      "Cannot tell"
    ],
    "correctIndex": 0,
    "explanation": "[EASY] 9.1 is largest at week 3.",
    "order": 1,
    "points": 1
  },
  {
    "prompt": "Science Form A — Data: Plant height (cm) vs fertilizer (g/L)\n| Week | 0 g/L | 2 g/L | 4 g/L |\n| 1 | 3.0 | 3.2 | 3.1 |\n| 2 | 5.1 | 6.0 | 6.4 |\n| 3 | 7.0 | 8.8 | 9.1 |\n| 4 | 8.2 | 10.5 | 10.6 |\nFrom week 1 to 4, height at 0 g/L increased by how many cm?",
    "choices": [
      "3.0",
      "7.0",
      "5.2",
      "8.2"
    ],
    "correctIndex": 2,
    "explanation": "[EASY] 8.2 − 3.0 = 5.2.",
    "order": 2,
    "points": 1
  },
  {
    "prompt": "Science Form A — Data: Plant height (cm) vs fertilizer (g/L)\n| Week | 0 g/L | 2 g/L | 4 g/L |\n| 1 | 3.0 | 3.2 | 3.1 |\n| 2 | 5.1 | 6.0 | 6.4 |\n| 3 | 7.0 | 8.8 | 9.1 |\n| 4 | 8.2 | 10.5 | 10.6 |\nWhich statement best describes 2 g/L vs 4 g/L by week 4?",
    "choices": [
      "4 g/L is twice as tall",
      "2 g/L is shorter than control",
      "No plants grew",
      "Heights are nearly equal (10.5 vs 10.6)"
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] Difference is 0.1 cm.",
    "order": 3,
    "points": 1
  },
  {
    "prompt": "Science Form A — Data: Plant height (cm) vs fertilizer (g/L)\n| Week | 0 g/L | 2 g/L | 4 g/L |\n| 1 | 3.0 | 3.2 | 3.1 |\n| 2 | 5.1 | 6.0 | 6.4 |\n| 3 | 7.0 | 8.8 | 9.1 |\n| 4 | 8.2 | 10.5 | 10.6 |\nThe independent variable is best identified as…",
    "choices": [
      "Soil color",
      "Fertilizer concentration (g/L)",
      "Week number only",
      "Plant height"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] Fertilizer is set by experimenter.",
    "order": 4,
    "points": 1
  },
  {
    "prompt": "Science Form A — Data: Plant height (cm) vs fertilizer (g/L)\n| Week | 0 g/L | 2 g/L | 4 g/L |\n| 1 | 3.0 | 3.2 | 3.1 |\n| 2 | 5.1 | 6.0 | 6.4 |\n| 3 | 7.0 | 8.8 | 9.1 |\n| 4 | 8.2 | 10.5 | 10.6 |\nA student claims fertilizer always doubles height. The data…",
    "choices": [
      "Contradict the claim (gains are smaller than doubling)",
      "Fully support doubling every week",
      "Have no heights listed",
      "Only measure mass"
    ],
    "correctIndex": 0,
    "explanation": "[MEDIUM] Ratios are not 2×.",
    "order": 5,
    "points": 1
  },
  {
    "prompt": "Science Form A — Data: Plant height (cm) vs fertilizer (g/L)\n| Week | 0 g/L | 2 g/L | 4 g/L |\n| 1 | 3.0 | 3.2 | 3.1 |\n| 2 | 5.1 | 6.0 | 6.4 |\n| 3 | 7.0 | 8.8 | 9.1 |\n| 4 | 8.2 | 10.5 | 10.6 |\nBetween weeks 3 and 4, which level gained the most height?",
    "choices": [
      "All gained equally",
      "2 g/L (8.8 → 10.5)",
      "0 g/L",
      "4 g/L"
    ],
    "correctIndex": 1,
    "explanation": "[MEDIUM] Gains 1.2, 1.7, 0.5.",
    "order": 6,
    "points": 1
  },
  {
    "prompt": "Science Form A — Data: Plant height (cm) vs fertilizer (g/L)\n| Week | 0 g/L | 2 g/L | 4 g/L |\n| 1 | 3.0 | 3.2 | 3.1 |\n| 2 | 5.1 | 6.0 | 6.4 |\n| 3 | 7.0 | 8.8 | 9.1 |\n| 4 | 8.2 | 10.5 | 10.6 |\nIf week 5 continued the 4 g/L trend from weeks 3–4, a cautious prediction is…",
    "choices": [
      "Height drops to 0",
      "Height reaches 20 cm necessarily",
      "Plants disappear",
      "A small additional increase, not a sudden jump"
    ],
    "correctIndex": 3,
    "explanation": "[HARD] Extrapolate the small recent gain.",
    "order": 7,
    "points": 1
  },
  {
    "prompt": "Science Form A — Data: Plant height (cm) vs fertilizer (g/L)\n| Week | 0 g/L | 2 g/L | 4 g/L |\n| 1 | 3.0 | 3.2 | 3.1 |\n| 2 | 5.1 | 6.0 | 6.4 |\n| 3 | 7.0 | 8.8 | 9.1 |\n| 4 | 8.2 | 10.5 | 10.6 |\nWhy might week-1 differences look smaller than week-4 differences?",
    "choices": [
      "Fertilizer only works on weekends",
      "Height is independent of time",
      "Effects can accumulate over time under treatment",
      "Tables cannot show change"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] Growth accumulates.",
    "order": 8,
    "points": 1
  },
  {
    "prompt": "Science Form A — Data: Plant height (cm) vs fertilizer (g/L)\n| Week | 0 g/L | 2 g/L | 4 g/L |\n| 1 | 3.0 | 3.2 | 3.1 |\n| 2 | 5.1 | 6.0 | 6.4 |\n| 3 | 7.0 | 8.8 | 9.1 |\n| 4 | 8.2 | 10.5 | 10.6 |\nWhich control comparison is most direct at week 2?",
    "choices": [
      "Averaging all weeks into one cell",
      "0 g/L vs treated groups at the same week",
      "Week 1 vs week 4 only within 4 g/L without control",
      "Ignoring units"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] Same-week control.",
    "order": 9,
    "points": 1
  },
  {
    "prompt": "Science Form A — Data: Plant height (cm) vs fertilizer (g/L)\n| Week | 0 g/L | 2 g/L | 4 g/L |\n| 1 | 3.0 | 3.2 | 3.1 |\n| 2 | 5.1 | 6.0 | 6.4 |\n| 3 | 7.0 | 8.8 | 9.1 |\n| 4 | 8.2 | 10.5 | 10.6 |\nA limitation of this table alone is that it does not report…",
    "choices": [
      "Any numeric heights",
      "Fertilizer units",
      "Week labels",
      "Sample size or variability (error bars)"
    ],
    "correctIndex": 3,
    "explanation": "[HARD] No n or SD shown.",
    "order": 10,
    "points": 1
  },
  {
    "prompt": "Science Form A — Research: Students tested whether water temperature (10°C, 20°C, 30°C) affects dissolving time of identical sugar cubes stirred at the same rate in equal water volumes (3 trials/temperature, averaged).\nDependent variable?",
    "choices": [
      "Dissolving time",
      "Water temperature",
      "Stir rate",
      "Cube brand slogan"
    ],
    "correctIndex": 0,
    "explanation": "[EASY] Time is measured outcome.",
    "order": 11,
    "points": 1
  },
  {
    "prompt": "Science Form A — Research: Students tested whether water temperature (10°C, 20°C, 30°C) affects dissolving time of identical sugar cubes stirred at the same rate in equal water volumes (3 trials/temperature, averaged).\nIntentionally held constant?",
    "choices": [
      "Trial number as treatment",
      "Stir rate and water volume",
      "Temperature only",
      "Dissolving time"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] Isolate temperature.",
    "order": 12,
    "points": 1
  },
  {
    "prompt": "Science Form A — Research: Students tested whether water temperature (10°C, 20°C, 30°C) affects dissolving time of identical sugar cubes stirred at the same rate in equal water volumes (3 trials/temperature, averaged).\nAveraging three trials primarily helps…",
    "choices": [
      "Eliminate need for units",
      "Prove causation without controls",
      "Reduce impact of random trial noise",
      "Change the independent variable"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] Replication.",
    "order": 13,
    "points": 1
  },
  {
    "prompt": "Science Form A — Research: Students tested whether water temperature (10°C, 20°C, 30°C) affects dissolving time of identical sugar cubes stirred at the same rate in equal water volumes (3 trials/temperature, averaged).\nIf one 30°C trial used a crushed cube…",
    "choices": [
      "Keep it; temperature still counts",
      "Delete all 10°C data",
      "Change hypothesis after peeking only",
      "Exclude/redo; surface area changed"
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] Confound.",
    "order": 14,
    "points": 1
  },
  {
    "prompt": "Science Form A — Research: Students tested whether water temperature (10°C, 20°C, 30°C) affects dissolving time of identical sugar cubes stirred at the same rate in equal water volumes (3 trials/temperature, averaged).\nGraph of mean time vs temperature most likely shows…",
    "choices": [
      "Time exactly zero always",
      "Longer times always at 30°C",
      "No possible relationship",
      "Shorter times at higher temperatures"
    ],
    "correctIndex": 3,
    "explanation": "[EASY] Typical dissolving trend.",
    "order": 15,
    "points": 1
  },
  {
    "prompt": "Science Form A — Research: Students tested whether water temperature (10°C, 20°C, 30°C) affects dissolving time of identical sugar cubes stirred at the same rate in equal water volumes (3 trials/temperature, averaged).\nDesign is best classified as…",
    "choices": [
      "Observational census of lakes",
      "Historical archival study",
      "Controlled experiment with manipulated variable",
      "Double-blind medical trial"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] Temperature manipulated.",
    "order": 16,
    "points": 1
  },
  {
    "prompt": "Science Form A — Research: Students tested whether water temperature (10°C, 20°C, 30°C) affects dissolving time of identical sugar cubes stirred at the same rate in equal water volumes (3 trials/temperature, averaged).\nImprove external validity for 'all sugars'?",
    "choices": [
      "Randomize stir rate every trial",
      "Stop measuring time",
      "Report only fastest trial",
      "Test more sugar types/sizes under same protocol"
    ],
    "correctIndex": 3,
    "explanation": "[HARD] Broader materials.",
    "order": 17,
    "points": 1
  },
  {
    "prompt": "Science Form A — Research: Students tested whether water temperature (10°C, 20°C, 30°C) affects dissolving time of identical sugar cubes stirred at the same rate in equal water volumes (3 trials/temperature, averaged).\nIf stir rate increased only for 10°C trials…",
    "choices": [
      "Unaffected by procedure",
      "Invalid only for 30°C",
      "Confounded; temperature effect unclear",
      "More precise automatically"
    ],
    "correctIndex": 2,
    "explanation": "[HARD] Two variables changed.",
    "order": 18,
    "points": 1
  },
  {
    "prompt": "Science Form A — Research: Students tested whether water temperature (10°C, 20°C, 30°C) affects dissolving time of identical sugar cubes stirred at the same rate in equal water volumes (3 trials/temperature, averaged).\nUnits for dissolving time should be…",
    "choices": [
      "Unitless cube counts",
      "Seconds (or minutes), stated consistently",
      "g/L",
      "°C only"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] Time units.",
    "order": 19,
    "points": 1
  },
  {
    "prompt": "Science Form A — Research: Students tested whether water temperature (10°C, 20°C, 30°C) affects dissolving time of identical sugar cubes stirred at the same rate in equal water volumes (3 trials/temperature, averaged).\nClaim that hot water 'destroys sugar molecules'…",
    "choices": [
      "Supported by mass spectrometry here",
      "Not justified; data show dissolving time only",
      "Proven by the averages",
      "Measured via formulas in the table"
    ],
    "correctIndex": 1,
    "explanation": "[MEDIUM] Stay within measures.",
    "order": 20,
    "points": 1
  },
  {
    "prompt": "Science Form A — Conflicting viewpoints\nScientist A: City light pollution mainly harms stargazing education; economic benefits of night lighting outweigh ecological costs.\nScientist B: Artificial night light disrupts insect navigation and bird migration; cities should adopt shielded, warmer-spectrum lighting even if upfront costs rise.\nWhat do A and B most clearly disagree about?",
    "choices": [
      "How strongly ecological costs should drive lighting policy",
      "Whether the sun exists",
      "Whether cities have streets",
      "Whether insects can fly"
    ],
    "correctIndex": 0,
    "explanation": "[EASY] Policy weight of ecology.",
    "order": 21,
    "points": 1
  },
  {
    "prompt": "Science Form A — Conflicting viewpoints\nScientist A: City light pollution mainly harms stargazing education; economic benefits of night lighting outweigh ecological costs.\nScientist B: Artificial night light disrupts insect navigation and bird migration; cities should adopt shielded, warmer-spectrum lighting even if upfront costs rise.\nClaim more central to B?",
    "choices": [
      "Insects are unaffected",
      "Night lighting can disrupt animal navigation/migration",
      "Stargazing is forever unimportant",
      "Lighting has no economic role"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] B's mechanism.",
    "order": 22,
    "points": 1
  },
  {
    "prompt": "Science Form A — Conflicting viewpoints\nScientist A: City light pollution mainly harms stargazing education; economic benefits of night lighting outweigh ecological costs.\nScientist B: Artificial night light disrupts insect navigation and bird migration; cities should adopt shielded, warmer-spectrum lighting even if upfront costs rise.\nA's emphasis on economic benefits implies…",
    "choices": [
      "A studies only insects",
      "A rejects all education",
      "A tradeoff framework valuing commerce/safety lighting highly",
      "A denies light exists"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] Infer priority.",
    "order": 23,
    "points": 1
  },
  {
    "prompt": "Science Form A — Conflicting viewpoints\nScientist A: City light pollution mainly harms stargazing education; economic benefits of night lighting outweigh ecological costs.\nScientist B: Artificial night light disrupts insect navigation and bird migration; cities should adopt shielded, warmer-spectrum lighting even if upfront costs rise.\nShielded lights cut skyglow without reducing safety — supports…",
    "choices": [
      "Only A's claim that ecology never matters",
      "Banning all research",
      "Proving insects read maps",
      "A compromise path closer to B's recommendation"
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] Softens tradeoff.",
    "order": 24,
    "points": 1
  },
  {
    "prompt": "Science Form A — Conflicting viewpoints\nScientist A: City light pollution mainly harms stargazing education; economic benefits of night lighting outweigh ecological costs.\nScientist B: Artificial night light disrupts insect navigation and bird migration; cities should adopt shielded, warmer-spectrum lighting even if upfront costs rise.\nMost useful empirical question?",
    "choices": [
      "Letters in 'lamp'?",
      "Is coffee hot?",
      "How do lighting designs affect wildlife and crash rates together?",
      "Mayor's favorite color?"
    ],
    "correctIndex": 2,
    "explanation": "[HARD] Joint outcomes.",
    "order": 25,
    "points": 1
  },
  {
    "prompt": "Science Form A — Conflicting viewpoints\nScientist A: City light pollution mainly harms stargazing education; economic benefits of night lighting outweigh ecological costs.\nScientist B: Artificial night light disrupts insect navigation and bird migration; cities should adopt shielded, warmer-spectrum lighting even if upfront costs rise.\nBoth implicitly agree that…",
    "choices": [
      "Lighting cannot change",
      "Animals do not exist",
      "Economics never matters",
      "Urban night lighting is a real policy choice with consequences"
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] Shared premise.",
    "order": 26,
    "points": 1
  },
  {
    "prompt": "Science Form A — Conflicting viewpoints\nScientist A: City light pollution mainly harms stargazing education; economic benefits of night lighting outweigh ecological costs.\nScientist B: Artificial night light disrupts insect navigation and bird migration; cities should adopt shielded, warmer-spectrum lighting even if upfront costs rise.\n'Warmer-spectrum lighting' functions as…",
    "choices": [
      "Unrelated joke",
      "A proposed mitigation design feature",
      "Denial that light pollution exists",
      "Claim about daytime solar only"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] Design recommendation.",
    "order": 27,
    "points": 1
  },
  {
    "prompt": "Science Form A — Conflicting viewpoints\nScientist A: City light pollution mainly harms stargazing education; economic benefits of night lighting outweigh ecological costs.\nScientist B: Artificial night light disrupts insect navigation and bird migration; cities should adopt shielded, warmer-spectrum lighting even if upfront costs rise.\nIf education moves to planetariums, A's education-harm framing…",
    "choices": [
      "Makes economics irrelevant automatically",
      "Shows birds cause pollution",
      "May weaken if outdoor sky access mattered less than claimed",
      "Proves insects migrate indoors"
    ],
    "correctIndex": 2,
    "explanation": "[HARD] Sensitivity test.",
    "order": 28,
    "points": 1
  },
  {
    "prompt": "Science Form A — Conflicting viewpoints\nScientist A: City light pollution mainly harms stargazing education; economic benefits of night lighting outweigh ecological costs.\nScientist B: Artificial night light disrupts insect navigation and bird migration; cities should adopt shielded, warmer-spectrum lighting even if upfront costs rise.\nEvidence that most challenges B?",
    "choices": [
      "A restaurant menu",
      "Dictionary definition of city",
      "Robust data that shielded lighting yields no wildlife benefit",
      "A photo of a streetlamp"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] Undercuts ecology claim.",
    "order": 29,
    "points": 1
  },
  {
    "prompt": "Science Form A — Conflicting viewpoints\nScientist A: City light pollution mainly harms stargazing education; economic benefits of night lighting outweigh ecological costs.\nScientist B: Artificial night light disrupts insect navigation and bird migration; cities should adopt shielded, warmer-spectrum lighting even if upfront costs rise.\nPassage type is closest to…",
    "choices": [
      "Conflicting viewpoints / scientist comparison",
      "Pure math calculation",
      "Poetry scansion",
      "Grammar underlining only"
    ],
    "correctIndex": 0,
    "explanation": "[EASY] Genre ID.",
    "order": 30,
    "points": 1
  },
  {
    "prompt": "Science Form A — Figures\nFigure 1: Reaction rate rises as catalyst amount increases from 0 to 3 g, then plateaus.\nFigure 2: At fixed catalyst 2 g, rate rises when temperature increases from 20°C to 40°C.\nFigure 1 suggests that beyond 3 g catalyst…",
    "choices": [
      "Additional catalyst yields little extra rate under those conditions",
      "Rate must fall to zero",
      "Temperature becomes undefined",
      "Reaction reverses necessarily"
    ],
    "correctIndex": 0,
    "explanation": "[EASY] Plateau.",
    "order": 31,
    "points": 1
  },
  {
    "prompt": "Science Form A — Figures\nFigure 1: Reaction rate rises as catalyst amount increases from 0 to 3 g, then plateaus.\nFigure 2: At fixed catalyst 2 g, rate rises when temperature increases from 20°C to 40°C.\nFigure 2 independent variable?",
    "choices": [
      "Figure number",
      "Temperature",
      "Catalyst mass (held fixed)",
      "Plateau height"
    ],
    "correctIndex": 1,
    "explanation": "[EASY] Temperature varied.",
    "order": 32,
    "points": 1
  },
  {
    "prompt": "Science Form A — Figures\nFigure 1: Reaction rate rises as catalyst amount increases from 0 to 3 g, then plateaus.\nFigure 2: At fixed catalyst 2 g, rate rises when temperature increases from 20°C to 40°C.\nCombining figures, conclude…",
    "choices": [
      "Only temperature ever matters",
      "Only catalyst ever matters",
      "Figures deny rates exist",
      "Rate depends on more than one factor (catalyst and temperature)"
    ],
    "correctIndex": 3,
    "explanation": "[MEDIUM] Multi-factor.",
    "order": 33,
    "points": 1
  },
  {
    "prompt": "Science Form A — Figures\nFigure 1: Reaction rate rises as catalyst amount increases from 0 to 3 g, then plateaus.\nFigure 2: At fixed catalyst 2 g, rate rises when temperature increases from 20°C to 40°C.\nOn the Fig 1 plateau, increasing temperature (Fig 2) would likely…",
    "choices": [
      "Still raise rate even if catalyst is saturating",
      "Have no physical meaning",
      "Remove the catalyst",
      "Force negative rate"
    ],
    "correctIndex": 0,
    "explanation": "[HARD] Different limits.",
    "order": 34,
    "points": 1
  },
  {
    "prompt": "Science Form A — Figures\nFigure 1: Reaction rate rises as catalyst amount increases from 0 to 3 g, then plateaus.\nFigure 2: At fixed catalyst 2 g, rate rises when temperature increases from 20°C to 40°C.\nFlat region on Fig 1 is…",
    "choices": [
      "Only possible if printing error",
      "Evidence temperature fell",
      "Saturation / diminishing returns under tested conditions",
      "Proof catalyst is imaginary"
    ],
    "correctIndex": 2,
    "explanation": "[MEDIUM] Diminishing returns.",
    "order": 35,
    "points": 1
  },
  {
    "prompt": "Science Form A — Figures\nFigure 1: Reaction rate rises as catalyst amount increases from 0 to 3 g, then plateaus.\nFigure 2: At fixed catalyst 2 g, rate rises when temperature increases from 20°C to 40°C.\nNOT directly stated in descriptions?",
    "choices": [
      "That a plateau occurs",
      "That temperature was tested at 2 g catalyst",
      "That catalyst ranged 0–3 g before plateau",
      "Exact numerical rate values"
    ],
    "correctIndex": 3,
    "explanation": "[EASY] Qualitative figures.",
    "order": 36,
    "points": 1
  },
  {
    "prompt": "Science Form A — Figures\nFigure 1: Reaction rate rises as catalyst amount increases from 0 to 3 g, then plateaus.\nFigure 2: At fixed catalyst 2 g, rate rises when temperature increases from 20°C to 40°C.\nNew trial: 5 g catalyst at 20°C — Fig 1 predicts…",
    "choices": [
      "Infinite rate",
      "Rate near plateau, not a huge jump",
      "Rate ten times higher necessarily",
      "No reaction"
    ],
    "correctIndex": 1,
    "explanation": "[MEDIUM] Extrapolate plateau.",
    "order": 37,
    "points": 1
  },
  {
    "prompt": "Science Form A — Figures\nFigure 1: Reaction rate rises as catalyst amount increases from 0 to 3 g, then plateaus.\nFigure 2: At fixed catalyst 2 g, rate rises when temperature increases from 20°C to 40°C.\nWhy hold catalyst fixed in Fig 2?",
    "choices": [
      "Because catalyst does not exist",
      "To change two variables at once",
      "To isolate temperature's effect",
      "To maximize confusion"
    ],
    "correctIndex": 2,
    "explanation": "[EASY] Control.",
    "order": 38,
    "points": 1
  },
  {
    "prompt": "Science Form A — Figures\nFigure 1: Reaction rate rises as catalyst amount increases from 0 to 3 g, then plateaus.\nFigure 2: At fixed catalyst 2 g, rate rises when temperature increases from 20°C to 40°C.\nOutside claim 'all catalysts are enzymes' is…",
    "choices": [
      "Unnecessary/misleading for answering from the figures",
      "Required to read the plateau",
      "Only way to define temperature",
      "Proven by Fig 2 alone"
    ],
    "correctIndex": 0,
    "explanation": "[MEDIUM] Use given data.",
    "order": 39,
    "points": 1
  },
  {
    "prompt": "Science Form A — Figures\nFigure 1: Reaction rate rises as catalyst amount increases from 0 to 3 g, then plateaus.\nFigure 2: At fixed catalyst 2 g, rate rises when temperature increases from 20°C to 40°C.\nBest next experiment for interaction effects?",
    "choices": [
      "Stop collecting data",
      "Measure only paint color",
      "Delete Fig 1",
      "Vary temperature at several catalyst amounts (grid)"
    ],
    "correctIndex": 3,
    "explanation": "[HARD] Factorial follow-up.",
    "order": 40,
    "points": 1
  }
] as QuestionSeed[];
}

