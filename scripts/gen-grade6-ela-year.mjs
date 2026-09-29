/**
 * Generate Grade 6 ELA full-year content (16 units) + content UPDATE migration.
 * Combines Reading & Vocabulary + Grammar into one Prosper Prep year path.
 * No competitor attribution or "original" self-branding in student-facing bodies.
 * Run: node scripts/gen-grade6-ela-year.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { elaIndepPractice } from "./lib/grade6-ela-practice.mjs";

const COURSE_ID = "cmuh9bwsc03l8edangiqeczno";

/** Old stub lessons to retire (hide from year path). */
const OLD_STUBS = [
  "cmuh9bwsd03laedanptmprhap", // Analyzing Theme in Short Fiction
  "cmuh9bwsg03loedanpivbmdrq", // Claim, Evidence, and Reasoning
  "cmuh9bwsk03m2edanpklcsidz", // Author's Purpose and Tone
  "cmuh9bwsn03mgedanfaxrfw8p", // Comparing Texts on the Same Topic
  "cmuh9bwsq03muedana6if5waf", // Grammar for Clarity: Clauses
  "cmuh9bwst03n8edanp86p80mt", // Poetry Analysis: Imagery and Sound
  "cmuh9bwsw03nmedanh0n034gn", // Argumentative Paragraphs
  "cmuh9bwt003o0edan1z5ic1c3", // Media Literacy: Fact vs. Opinion
  "cmuh9bwt303oeedanmkfg4kfy", // Multi-paragraph Essay Outline
];

const OLD_QUIZZES = [
  "cmuh9bwt703osedankdnrz7z1", // section-1
  "cmuh9bwtc03peedan6bxjy7o3", // section-2
  "cmuh9bwth03q0edanngm2u3r8", // section-3
];

function stableId(slug) {
  const h = createHash("sha256").update(`ppg6e:${slug}`).digest("hex").slice(0, 20);
  return `ppg6e${h}`;
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

/** Full-year outline: Reading+Vocab + Grammar spine. */
const UNITS = [
  {
    n: 1,
    title: "Vocabulary Power",
    kind: "vocab",
    lessons: [
      ["What Context Clues Do", "Use surrounding words to infer meaning of unfamiliar vocabulary."],
      ["Definition and Restatement Clues", "Spot definition, restatement, and synonym clues in sentences."],
      ["Contrast and Antonym Clues", "Use however, unlike, and antonym signals to unlock meaning."],
      ["Example Clues and Lists", "Infer word meaning from examples and illustrative lists."],
      ["Greek and Latin Roots I", "Decode words with common roots (spect, port, dict, scrib/script)."],
      ["Prefixes That Flip Meaning", "Apply un-, re-, pre-, dis-, mis- to build and unpack words."],
      ["Suffixes and Part of Speech", "Use -tion, -able, -ous, -ly to recognize how words function."],
    ],
  },
  {
    n: 2,
    title: "Reading: Key Ideas and Details",
    kind: "reading",
    lessons: [
      ["Topic vs Main Idea", "Distinguish a topic label from a complete main-idea statement."],
      ["Supporting Details That Matter", "Select details that actually support the main idea."],
      ["Summarizing Without Spoiling", "Write objective summaries that keep order and drop trivia."],
      ["Inferring Character Motivation", "Use dialogue and action to infer why a character acts."],
      ["Finding Explicit Evidence", "Quote or paraphrase the exact lines that answer a question."],
      ["Central Idea in Informational Text", "State the central idea of a short nonfiction piece."],
      ["Key Ideas Unit Synthesis", "Combine main idea, details, and evidence in one response."],
    ],
  },
  {
    n: 3,
    title: "Reading: Key Ideas — Long Passages",
    kind: "reading-long",
    lessons: [
      ["Stamina Strategies for Long Text", "Chunk, annotate, and track main ideas across paragraphs."],
      ["Tracking Multiple Characters", "Keep who-did-what straight across a longer narrative."],
      ["Informational Article: East Texas Trail", "Extract central idea and key details from a longer article."],
      ["Fiction Passage: The Scholarship Letter", "Trace conflict and key turning points in a longer story."],
      ["Comparing Two Short Sections", "Compare how two sections of one text develop the same idea."],
      ["Long-Passage Key Ideas Check", "Apply annotation + evidence habits to a culminating passage."],
    ],
  },
  {
    n: 4,
    title: "Grammar: Nouns",
    kind: "grammar",
    lessons: [
      ["Common and Proper Nouns", "Capitalize proper nouns; keep common nouns clear and specific."],
      ["Concrete and Abstract Nouns", "Recognize ideas and qualities as nouns you can still name."],
      ["Singular, Plural, and Irregular Plurals", "Form regular and irregular plurals accurately."],
      ["Possessive Nouns", "Use apostrophes correctly for singular and plural possession."],
      ["Collective Nouns and Agreement", "Match verbs to collective nouns with student-friendly rules."],
      ["Nouns in Strong Sentences", "Replace vague nouns with precise ones for clearer writing."],
    ],
  },
  {
    n: 5,
    title: "Grammar: Pronouns",
    kind: "grammar",
    lessons: [
      ["Subject and Object Pronouns", "Choose I/me, we/us, he/him correctly in sentences."],
      ["Possessive Pronouns vs Contractions", "Keep its/it's, your/you're, their/they're straight."],
      ["Pronoun-Antecedent Agreement", "Match pronouns to antecedents in number and clarity."],
      ["Vague Pronouns and Fixes", "Replace unclear this/that/it with precise nouns or clauses."],
      ["Intensive and Reflexive Pronouns", "Use myself/yourself correctly — not as fake formal subjects."],
      ["Pronoun Clarity in Paragraphs", "Revise a paragraph so every pronoun points clearly."],
    ],
  },
  {
    n: 6,
    title: "Grammar: Verbs",
    kind: "grammar",
    lessons: [
      ["Action vs Linking Verbs", "Identify what the verb is doing — action or linking."],
      ["Simple Verb Tenses", "Use past, present, and future tense consistently."],
      ["Subject-Verb Agreement", "Make verbs agree with subjects, including tricky cases."],
      ["Helping Verbs and Verb Phrases", "Recognize helping verbs inside complete verb phrases."],
      ["Consistent Tense in Narratives", "Keep tense steady unless a time shift is intentional."],
      ["Active Voice Preference", "Prefer clear active voice; know when passive is useful."],
      ["Verbs Unit Review", "Mixed practice on tense, agreement, and precision."],
    ],
  },
  {
    n: 7,
    title: "Reading: Craft and Structure",
    kind: "reading",
    lessons: [
      ["Word Choice and Connotation", "Explain how a word's feeling changes a sentence's tone."],
      ["Figurative Language That Works", "Interpret simile, metaphor, and personification in context."],
      ["Text Structure Signals", "Identify cause/effect, compare/contrast, and problem/solution."],
      ["Point of View Basics", "Distinguish first- and third-person narration and effects."],
      ["How Structure Builds Meaning", "Explain why an author sequences sections a certain way."],
      ["Tone vs Mood", "Separate the author's attitude from the reader's feeling."],
      ["Craft Moves Mini-Analysis", "Annotate craft moves and explain their effect in CER form."],
    ],
  },
  {
    n: 8,
    title: "Reading: Craft — Long Passages",
    kind: "reading-long",
    lessons: [
      ["Annotating Craft Across Pages", "Track diction, structure, and POV through a longer text."],
      ["Poetry Craft Close Read", "Analyze imagery and sound devices in a short poem."],
      ["Speech Excerpt: Purpose and Tone", "Explain how craft supports purpose in a speech-like text."],
      ["Narrative Craft Case Study", "Trace how flashback or foreshadowing shapes meaning."],
      ["Structure Map of a Feature Article", "Map sections and justify the author's organization."],
      ["Long-Passage Craft Synthesis", "Write a craft-focused CER on a culminating long passage."],
    ],
  },
  {
    n: 9,
    title: "Grammar: Adjectives and Adverbs",
    kind: "grammar",
    lessons: [
      ["What Adjectives Modify", "Place adjectives clearly to describe nouns and pronouns."],
      ["What Adverbs Modify", "Use adverbs for verbs, adjectives, and other adverbs."],
      ["Comparative and Superlative Forms", "Form -er/-est and more/most comparisons correctly."],
      ["Avoiding Double Negatives", "Revise double negatives and unclear modifier placement."],
      ["Adjective vs Adverb Choices", "Choose good/well, bad/badly, and similar pairs carefully."],
      ["Modifiers for Stronger Writing", "Add precise modifiers without stuffing sentences."],
    ],
  },
  {
    n: 10,
    title: "Grammar: Prepositions and Interjections",
    kind: "grammar",
    lessons: [
      ["Prepositions and Their Objects", "Identify prepositions and the objects they connect."],
      ["Prepositional Phrases as Modifiers", "See how phrases act like adjectives or adverbs."],
      ["Ending with a Preposition (Myths)", "Revise awkward endings without fake 'rules' panic."],
      ["Interjections and Tone", "Use interjections sparingly and punctuate them well."],
      ["Phrase Clarity Revision", "Rewrite sentences so prepositional phrases attach cleanly."],
    ],
  },
  {
    n: 11,
    title: "Grammar: Sentences, Clauses, and Phrases",
    kind: "grammar",
    lessons: [
      ["Subjects and Predicates", "Find complete subjects and predicates in sentences."],
      ["Independent vs Dependent Clauses", "Label clauses and explain what each can do alone."],
      ["Fixing Fragments", "Repair fragments by completing the thought."],
      ["Fixing Run-Ons and Comma Splices", "Separate or join clauses with correct punctuation."],
      ["Simple, Compound, and Complex", "Build varied sentence types on purpose."],
      ["Combining Sentences for Flow", "Combine choppy sentences without creating monsters."],
      ["Sentence Craft Unit Review", "Mixed clause and sentence-type revision practice."],
    ],
  },
  {
    n: 12,
    title: "Reading: Integration of Knowledge and Ideas",
    kind: "reading",
    lessons: [
      ["Claim, Evidence, Reasoning (CER)", "Build CER paragraphs that link evidence to a precise claim."],
      ["Comparing Two Texts on One Topic", "Compare claims, evidence, and organization across texts."],
      ["Evaluating an Argument", "Judge whether reasons and evidence are sufficient and fair."],
      ["Fact, Opinion, and Loaded Language", "Separate checkable facts from judgment words."],
      ["Visuals That Support a Text", "Explain how a chart, map, or image adds to meaning."],
      ["Synthesizing Across Sources", "Write a synthesis that notes agreement and tension."],
      ["Integration Habits Review", "Apply CER + comparison moves in a short performance task."],
    ],
  },
  {
    n: 13,
    title: "Reading: Integration — Long Passages",
    kind: "reading-long",
    lessons: [
      ["Paired Passages: Sleep and Schedules", "Compare two longer texts on the same issue."],
      ["Argument + Counterargument Practice", "Track a claim and the opposing view across pages."],
      ["Media + Text Pairing", "Integrate a news-style text with a data table."],
      ["Literature and Informational Pair", "Connect a story theme to a related nonfiction idea."],
      ["Building a Mini DBQ-Lite", "Use two sources to answer one compelling question."],
      ["Integration Capstone Response", "Write a multi-paragraph integration CER with citations."],
    ],
  },
  {
    n: 14,
    title: "Grammar: Punctuation and Capitalization",
    kind: "grammar",
    lessons: [
      ["Capitalization That Signals Importance", "Capitalize proper nouns, titles, and sentence starts."],
      ["Commas in a Series and Introductory Elements", "Place commas for lists and openers."],
      ["Commas with Coordinating Conjunctions", "Join independent clauses with comma + FANBOYS."],
      ["Apostrophes for Possession and Contractions", "Use apostrophes without confusing plurals."],
      ["Quotation Marks in Dialogue", "Punctuate dialogue and quoted evidence cleanly."],
      ["Punctuation Polish Workshop", "Edit a paragraph for capitalization and punctuation."],
    ],
  },
  {
    n: 15,
    title: "Grammar: Word Study",
    kind: "grammar",
    lessons: [
      ["Homophones That Trick Writers", "Master there/their/they're, to/too/two, and kin."],
      ["Affect vs Effect and Similar Pairs", "Choose among commonly confused academic words."],
      ["Formal vs Informal Word Choice", "Match register to school writing tasks."],
      ["Precise Verbs Beat Vague Ones", "Replace got/did/things with sharper vocabulary."],
      ["Morphology Review Lab", "Combine roots, prefixes, and suffixes to unlock meaning."],
      ["Word Study Editing Pass", "Edit a student paragraph for word-choice accuracy."],
    ],
  },
  {
    n: 16,
    title: "Grammar: Style and Tone",
    kind: "grammar",
    lessons: [
      ["What Style Means in Writing", "Notice sentence length, diction, and patterning choices."],
      ["Keeping Tone Consistent", "Revise shifts that accidentally sound sarcastic or stiff."],
      ["Avoiding Wordiness", "Cut empty phrases while keeping meaning."],
      ["Parallel Structure Basics", "Balance lists and paired ideas for smoother rhythm."],
      ["Voice That Fits the Audience", "Adjust style for teacher, peer, or public audiences."],
      ["Style & Tone Portfolio Polish", "Revise one paragraph for clarity, tone, and craft."],
    ],
  },
];

const CONTEXTS = [
  "a Prosper Prep morning advisory",
  "an East Texas library quiet hour",
  "a scholarship essay workshop",
  "a Friday athletic study hall",
  "a family dinner conversation about school",
  "a student newspaper deadline",
  "a church youth reading circle",
  "a Tyler-area nature walk journaling stop",
  "a Grade 6 book-club meeting",
  "a practice for the spring showcase",
];

const PASSAGES = {
  shortLit: `Maya paused at the mailbox. The envelope was thin, but her name looked official. She did not open it on the porch. Inside, she set it on the kitchen table and washed her hands first, as if cleanliness could calm the shaking in her fingers. When she finally slid a thumb under the flap, she found three sentences and a deadline. Hope, she realized, could be heavy.`,
  shortInfo: `Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose rocks. Rangers say most injuries happen when people rush the last half mile back to the parking lot.`,
  longLit: `Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Banners whispered overhead. His little sister waved from the bleachers with a poster that misspelled his name and somehow made him braver.

Coach Reyes did not give a dramatic speech. She handed him the ball and said, "Breathe like you do in study hall." Jordan almost laughed. Study hall was where he had rewritten his personal statement six times, crossing out every sentence that sounded fake.

The first shot rimmed out. The second settled through the net with a soft, trustworthy sound. He did not look at the scoreboard. He looked at the door where his dad stood holding a folder of transcripts — another kind of free throw, another kind of aim.`,
  longInfo: `School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Sleep researchers argue that even modest delays can improve alertness and mood.

Working families often need earlier schedules to match jobs, bus routes, and childcare. A later bell can shift costs onto caregivers who cannot move their shifts.

Neither side is inventing problems. The better question is whose schedule should bend, how far, and what evidence would prove a change is working. A fair pilot study tracks attendance, tardies, and student-reported sleep for several months — not just one dramatic week.`,
};

const MISTAKES = [
  "calling a topic (friendship) a theme or main idea",
  "quoting a line without explaining how it supports the claim",
  "using it's when you mean the possessive its",
  "switching verb tense mid-paragraph for no reason",
  "leaving a dependent clause stranded as a fragment",
  "stuffing a sentence with adjectives instead of choosing one precise noun",
  "assuming the narrator's feelings are always the author's opinion",
  "treating two true facts as if they automatically support the same claim",
  "using a vague pronoun (this/that/it) with no clear antecedent",
  "capitalizing school subjects that are not proper nouns (except languages)",
];

function nums(seed, base = 3) {
  const h = hash(seed);
  const a = base + (h % 9);
  const b = base + 1 + ((h >> 3) % 8);
  const c = base + 2 + ((h >> 6) % 7);
  return { a, b, c, d: a + b, e: a * b, f: 10 + (h % 40), g: 5 + (h % 20) };
}

function passageFor(unit, seed) {
  if (unit.kind === "reading-long") {
    return pick([PASSAGES.longLit, PASSAGES.longInfo], seed + "p");
  }
  if (unit.kind === "reading" || unit.kind === "vocab") {
    return pick([PASSAGES.shortLit, PASSAGES.shortInfo], seed + "p");
  }
  return PASSAGES.shortInfo;
}

function buildLessonBody(unit, lessonTitle, lessonDesc, orderInUnit) {
  const seed = `${unit.n}:${lessonTitle}`;
  const n = nums(seed);
  const ctx = pick(CONTEXTS, seed + "ctx");
  const mistake = pick(MISTAKES, seed + "mis");
  const unitLabel = `Unit ${unit.n} of 16 · ${unit.title}`;
  const passage = passageFor(unit, seed);
  const isGrammar = unit.kind === "grammar";
  const isVocab = unit.kind === "vocab";

  const warm = isGrammar
    ? `In one minute, write two sentences about ${ctx}. Underline every word that might be doing the job taught in “${lessonTitle}.”`
    : isVocab
      ? `Circle any unfamiliar word in this sentence and guess its meaning from neighbors: “The ranger’s concise warning — short, clear, and urgent — kept hikers from cutting the muddy switchback.”`
      : `Skim this mini-passage once, then write one sentence naming what it seems to be mostly about:\n\n> ${passage.split("\n")[0] || passage.slice(0, 160)}…`;

  const parts = [];
  parts.push(`# ${lessonTitle}`);
  parts.push("");
  parts.push(`*Grade 6 English Language Arts · ${unitLabel} · Lesson ${orderInUnit}*`);
  parts.push("");
  parts.push(`## Objective`);
  parts.push("");
  parts.push(`**I can** ${lessonDesc.charAt(0).toLowerCase()}${lessonDesc.slice(1)}`);
  parts.push("");
  parts.push(
    `**Teacher focus:** Students explain *why* a choice works (a word, a sentence, a piece of evidence), not only label it. Prefer complete sentences on exit tickets.`
  );
  parts.push("");
  parts.push(`## Warm-up (3–5 minutes)`);
  parts.push("");
  parts.push(warm);
  parts.push("");
  parts.push(
    `Turn and talk: Which earlier habit from Unit ${Math.max(1, unit.n - 1)} might help today?`
  );
  parts.push("");
  parts.push(`## Teach`);
  parts.push("");
  parts.push(`### Big idea`);
  parts.push("");
  if (isGrammar) {
    parts.push(
      `Grammar is a clarity toolkit. Today’s focus — **${lessonTitle}** — helps readers trust your meaning. In Grade 6 we practice noticing patterns, naming them precisely, and revising for a real audience (a teacher, a scholarship reader, a teammate).`
    );
  } else if (isVocab) {
    parts.push(
      `Strong readers do not stop at “I don’t know that word.” They hunt for **context clues** and **word parts** (roots, prefixes, suffixes). Today’s skill — **${lessonTitle}** — builds that detective habit.`
    );
  } else {
    parts.push(
      `Reading is thinking with a text. Today’s skill — **${lessonTitle}** — sits inside ${unit.title}. We will slow down, annotate, and back every claim with evidence a classmate could find.`
    );
  }
  parts.push("");
  parts.push(`### Why it matters`);
  parts.push("");
  parts.push(
    `At Prosper Prep, clear reading and writing support scholarship habits: follow directions, cite evidence, and revise until a stranger can follow your thinking. Families use these skills when reading news, contracts, team emails, and faith or community texts. East Texas students deserve elite literacy tools — not tricks.`
  );
  parts.push("");
  parts.push(`### Language bank`);
  parts.push("");
  if (isGrammar) {
    parts.push(`- **Name the job** of a word (noun, pronoun, verb, modifier) before you argue about taste.`);
    parts.push(`- **Agreement** means forms match in number and person.`);
    parts.push(`- **Revision** beats guessing: change one broken piece, then re-read aloud.`);
  } else if (isVocab) {
    parts.push(`- **Context clue** = hints in the same sentence or nearby sentences.`);
    parts.push(`- **Root / affix** = word parts that carry meaning across many words.`);
    parts.push(`- **Connotation** = the feeling a word carries beyond its dictionary sense.`);
  } else {
    parts.push(`- **Main idea / central idea** = what the text is mostly saying (complete sentence).`);
    parts.push(`- **Evidence** = quotation or paraphrase you can point to.`);
    parts.push(`- **Inference** = a conclusion backed by text + reasoning (not a random guess).`);
  }
  parts.push("");
  parts.push(`### Worked example A`);
  parts.push("");
  parts.push(`Imagine ${ctx}. Related practice numbers/labels you may see in items: set ${n.a}, set ${n.b}.`);
  parts.push("");
  if (isGrammar) {
    parts.push(`**Mentor sentence:** “Because the evidence was incomplete, the jury asked for more time.”`);
    parts.push("");
    parts.push(`**Step 1 — Find the structure.** Dependent clause + comma + independent clause.`);
    parts.push(`**Step 2 — Apply today’s rule for “${lessonTitle}.”** Mark the words doing that job.`);
    parts.push(`**Step 3 — Test a broken version.** What happens if we delete a key word or change agreement?`);
    parts.push(`**Step 4 — Revise a weak student sentence** so it follows the rule and still sounds natural.`);
    parts.push("");
    parts.push(
      `**Model talk:** “I checked the subject and the verb. They match. Then I read the sentence aloud to catch any leftover awkwardness.”`
    );
  } else {
    parts.push(`**Mentor passage:**`);
    parts.push("");
    parts.push(`> ${passage}`);
    parts.push("");
    parts.push(`**Step 1 — Restate the task** in your own words (main idea? craft? integration?).`);
    parts.push(`**Step 2 — Annotate:** underline claims, circle key words, star evidence.`);
    parts.push(`**Step 3 — Answer with a complete sentence** that includes a pointer to the text.`);
    parts.push(`**Step 4 — Check:** Could a partner find your evidence in under 10 seconds?`);
    parts.push("");
    parts.push(
      `**Sample response quality:** “The central idea is that careful hikers protect trails by slowing down at muddy markers, which is supported by the detail that most injuries happen when people rush the last half mile.”`
    );
  }
  parts.push("");
  parts.push(`### Worked example B (different structure)`);
  parts.push("");
  parts.push(
    `Keep the skill of “${lessonTitle},” but switch the context to ${pick(CONTEXTS, seed + "b")}. Use a fresh short example (numbers ${n.c} and ${n.g} if you invent a list or ranking).`
  );
  parts.push("");
  parts.push(`1. Write a one-sentence goal.`);
  parts.push(`2. Show the markings (parts of speech, clues, or annotations).`);
  parts.push(`3. Produce the answer or revision.`);
  parts.push(`4. Add a concluding sentence that names the skill.`);
  parts.push("");
  parts.push(`Teachers: freeze after step 2 in live sessions so students cannot hide behind premature answers.`);
  parts.push("");
  parts.push(`### Common mistakes`);
  parts.push("");
  parts.push(`- **Watch for:** ${mistake}.`);
  parts.push(
    `- **Also watch for:** copying a whole paragraph as “evidence” instead of selecting the precise line, or fixing grammar by making sentences longer and muddier.`
  );
  parts.push(
    `- **Repair move:** Name the broken step in one sentence, then revise only from that step.`
  );
  parts.push("");
  parts.push(`### Connect to prior learning`);
  parts.push("");
  if (unit.n <= 3) {
    parts.push(`Vocabulary and key-idea reading feed each other: you cannot summarize well if key words stay foggy.`);
  } else if (unit.n <= 6) {
    parts.push(`Grammar clarity supports reading claims — pronouns and verbs often carry who did what.`);
  } else if (unit.n <= 8) {
    parts.push(`Craft and structure explain *how* authors shape the key ideas you practiced earlier.`);
  } else if (unit.n <= 11) {
    parts.push(`Modifiers and clause control make your own writing match the craft you admire in mentors.`);
  } else if (unit.n <= 13) {
    parts.push(`Integration asks you to use key ideas + craft across more than one source — CER is the glue.`);
  } else {
    parts.push(`Conventions, word study, and style are the final polish that makes scholarship-ready writing readable.`);
  }
  parts.push("");
  parts.push(`## Guided practice (we do)`);
  parts.push("");
  if (isGrammar) {
    parts.push(
      `1. **Guided 1 —** Label or revise for “${lessonTitle}” in: “The team of scholars present their CER paragraphs after advisory.” Show each step.`
    );
    parts.push(`   - *Teacher/self-check note:* Focus on the exact grammar job; explain the choice in a phrase.`);
    parts.push("");
    parts.push(
      `2. **Guided 2 —** Same skill, new sentence about ${ctx}. Explain why your revision is clearer.`
    );
    parts.push(`   - *Teacher/self-check note:* Clarity + correctness beat ornamental wording.`);
  } else {
    parts.push(`1. **Guided 1 —** Using the mentor passage above, apply “${lessonTitle}.” Underline evidence.`);
    parts.push(`   - *Teacher/self-check note:* Answer must point to a specific line or phrase.`);
    parts.push("");
    parts.push(
      `2. **Guided 2 —** Partner challenge: write one wrong answer that looks tempting, then explain the trap.`
    );
    parts.push(`   - *Teacher/self-check note:* Naming traps builds metacognition.`);
  }
  parts.push("");
  parts.push(
    `3. **Error hunt:** A fictional student wrote only “Because it says so.” What follow-up question should you ask before accepting that response?`
  );
  parts.push("");
  parts.push(`## Independent practice`);
  parts.push("");
  parts.push(`Complete each item with visible thinking (annotations, labels, or revisions).`);
  parts.push("");

  const indep = elaIndepPractice(unit, lessonTitle, seed);
  indep.forEach((p, i) => {
    parts.push(`${i + 1}. ${p.q}`);
  });
  parts.push("");
  parts.push(`### Answer key (try first)`);
  parts.push("");
  parts.push(`*Check your work only after you attempt each item. Prefer complete sentences and marked evidence or revisions.*`);
  parts.push("");
  indep.forEach((p, i) => {
    parts.push(`${i + 1}. ${p.a}`);
  });
  parts.push("");
  parts.push(`## Exit ticket`);
  parts.push("");
  parts.push(`1. In one sentence, what does “${lessonTitle}” help a reader or writer do?`);
  parts.push(
    `2. Name the common mistake to avoid today (hint: related to ${mistake.split(" ").slice(0, 6).join(" ")}…).`
  );
  parts.push(`3. Create one new practice item (with answer) a classmate could try in 2 minutes.`);
  parts.push("");
  parts.push(`*(Scored exit items also appear as multiple-choice checks below the lesson in Prosper Prep.)*`);
  parts.push("");
  parts.push(`## Stretch (optional)`);
  parts.push("");
  if (isGrammar) {
    parts.push(
      `Find a paragraph in your own writing (or invent 6–8 sentences about ${ctx}). Annotate today’s grammar target, revise two places, and write a 3-sentence reflection on how clarity improved.`
    );
  } else {
    parts.push(
      `Write a short CER paragraph (4–6 sentences) about the mentor passage that depends on “${lessonTitle}.” Label C / E / R in the margin. Then invent a harder follow-up question for a classmate.`
    );
  }
  parts.push("");
  return parts.join("\n");
}

function buildExitQuestions(unit, lessonTitle, lessonDesc) {
  const seed = `exit:${unit.n}:${lessonTitle}`;
  const items = [];

  const q1 = rotChoices(
    `Explain the idea with a clear example and check that it matches “${lessonTitle}.”`,
    [
      "Guess from the answer choices without rereading.",
      "Copy a long paragraph and call it evidence.",
      "Change the question until it feels easier.",
    ],
    seed + "1"
  );
  items.push({
    prompt: `Which approach best matches the goal of this lesson (${lessonDesc.slice(0, 80)}…)?`,
    choices: q1.choices,
    correctIndex: q1.correctIndex,
    explanation: "Grade 6 literacy evidence includes a clear explanation plus a check against the skill.",
    order: 1,
  });

  const q2correct =
    unit.kind === "grammar"
      ? "Name the grammar job, then revise the broken part only."
      : unit.kind === "vocab"
        ? "Use context clues or word parts, then verify with the whole sentence."
        : "Point to specific evidence and explain how it supports the answer.";
  const q2 = rotChoices(
    q2correct,
    [
      "Memorize a trick and ignore the text.",
      "Assume the first sentence is always the answer.",
      "Replace every word with a synonym at random.",
    ],
    seed + "2"
  );
  items.push({
    prompt: `You are stuck on a practice item for “${lessonTitle}.” What is the best next move?`,
    choices: q2.choices,
    correctIndex: q2.correctIndex,
    explanation: "Skill-aligned repair beats random rewriting.",
    order: 2,
  });

  const q3 = rotChoices(
    "Name the broken step, then repair from there with a complete sentence.",
    [
      "Erase everything and pick a new random method.",
      "Assume the answer key is wrong and stop.",
      "Only change the final word until it looks familiar.",
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
    const correct = pick(
      [
        `Apply the core idea of “${title}” with a clear example and a check.`,
        `Evidence should be specific enough that a partner can find it quickly.`,
        `Revise the broken piece instead of rewriting everything blindly.`,
        `A complete sentence answer beats a one-word label for Grade 6 tasks.`,
      ],
      seed + "c"
    );
    const { choices, correctIndex } = rotChoices(
      correct,
      [
        "Skip examples and rely on memorized tricks only.",
        "Change the question until an easier word appears.",
        "Treat annotations as optional decoration.",
      ],
      seed
    );
    qs.push({
      prompt: `Unit ${unit.n} Check (${unit.title}) item ${i + 1}: Thinking about “${title},” which statement is most responsible?`,
      choices,
      correctIndex,
      explanation: `Unit ${unit.n} emphasizes clear reasoning and checked work for ${unit.title}.`,
      order: i + 1,
    });
  }
  for (let i = 8; i < 10; i++) {
    const seed = `uquizn:${unit.n}:${i}`;
    const promptBank =
      unit.kind === "grammar"
        ? [
            {
              q: `Which sentence best shows clear grammar habits for Unit ${unit.n}?`,
              c: "The scholars revise their pronouns so every antecedent is obvious.",
              w: [
                "The scholars revises their pronouns so every antecedent are obvious.",
                "Scholars pronoun revise antecedent obvious.",
                "Because the scholars. Revising pronouns.",
              ],
            },
            {
              q: `Choose the clearest revision for a Grade 6 reader.`,
              c: "Maya opened the thin envelope after she washed her hands.",
              w: [
                "Maya opened it after she washed them.",
                "Opening the envelope, hands were washed by Maya.",
                "Maya open the thin envelope after she wash her hands.",
              ],
            },
          ]
        : [
            {
              q: `Which response best shows strong reading evidence habits?`,
              c: "The central idea is that rushing increases injuries, shown by the detail about the last half mile.",
              w: [
                "Injuries are bad.",
                "The text mentions hikers and therefore everything is dangerous.",
                "I feel like the author is angry.",
              ],
            },
            {
              q: `Which move best supports a CER claim about a passage?`,
              c: "Quote a precise line, then explain how it connects to the claim.",
              w: [
                "Restate the claim three times in louder words.",
                "Ignore the passage and use a personal story only.",
                "Paste the entire passage as the evidence block.",
              ],
            },
          ];
    const item = pick(promptBank, seed);
    const { choices, correctIndex } = rotChoices(item.c, item.w, seed);
    qs.push({
      prompt: item.q,
      choices,
      correctIndex,
      explanation: `Unit ${unit.n} check focuses on clear, evidence-aligned literacy moves.`,
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
    const content = buildLessonBody(unit, title, desc, idx + 1);
    const objectives = [
      `• ${desc}`,
      `• Explain the idea with a clear example, annotation, or revision.`,
      `• Check work: evidence pointer, agreement/clarity, or context-clue verification.`,
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
    description: `Unit check for ${unit.title} (Grade 6 ELA). Unlocks after all lessons in Unit ${unit.n} are complete. Section/unit quizzes = 60% of the course grade (lesson checks = 40%).`,
    order: unit.n,
    sectionKey: `unit-${unit.n}`,
    questions: buildUnitQuiz(unit, titles),
  };
});

mkdirSync("prisma/grade6-ela", { recursive: true });
mkdirSync("content/grade6/ela", { recursive: true });

const meta = {
  courseId: COURSE_ID,
  units: UNITS.map((u) => ({
    n: u.n,
    title: u.title,
    sectionKey: `unit-${u.n}`,
    lessonCount: u.lessons.length,
    kind: u.kind,
  })),
  lessonCount: allLessons.length,
  quizCount: unitQuizzes.length,
  generatedAt: "2026-09-29",
};

writeFileSync("content/grade6/ela/outline.json", JSON.stringify(meta, null, 2));

function tsString(s) {
  return JSON.stringify(s);
}

let ts = `/**
 * Auto-generated Grade 6 ELA year path (Units 1–16).
 * Regenerate: node scripts/gen-grade6-ela-year.mjs
 * Prosper Prep Grade 6 ELA lesson bodies (no third-party attribution in student text).
 */
import type { LessonSeed } from "../curriculum";
import type { QuestionSeed } from "../assessments";

export const G6_ELA_COURSE_ID = ${tsString(COURSE_ID)};

export const G6_ELA_UNIT_META = ${JSON.stringify(
  UNITS.map((u) => ({
    n: u.n,
    title: u.title,
    sectionKey: `unit-${u.n}`,
    lessonCount: u.lessons.length,
  })),
  null,
  2
)} as const;

export type G6ElaLessonRow = {
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

export const G6_ELA_LESSONS: G6ElaLessonRow[] = [
`;

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

ts += `export type G6ElaQuizRow = {
  id: string;
  unit: number;
  title: string;
  description: string;
  order: number;
  sectionKey: string;
  questions: QuestionSeed[];
};

export const G6_ELA_UNIT_QUIZZES: G6ElaQuizRow[] = ${JSON.stringify(unitQuizzes, null, 2)};

export function grade6ElaYearLessons(): LessonSeed[] {
  return G6_ELA_LESSONS.map((L) => ({
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
        { q: "What should a strong response include?", a: "A clear explanation, specific evidence or revision, and a check." },
      ],
    },
  }));
}

export function grade6ElaUnitLabel(sectionKey: string): string | null {
  const m = /^unit-(\\d+)$/.exec(sectionKey);
  if (!m) return null;
  const n = Number(m[1]);
  const meta = G6_ELA_UNIT_META.find((u) => u.n === n);
  if (!meta) return null;
  return \`Unit \${meta.n} of 16 · \${meta.title}\`;
}
`;

writeFileSync("prisma/grade6-ela/year.ts", ts);

// ——— Content UPDATE fragment (do not overwrite applied 0006) ———
const sql = [];
sql.push("-- Grade 6 ELA year: real unique practice + Markdown answer keys (no raw HTML). Generated by scripts/gen-grade6-ela-year.mjs");
sql.push("-- UPDATE content + course description only. Do NOT run db:setup.");
sql.push("");
sql.push(`UPDATE "Course" SET "description" = '${esc(
  "Full-year Grade 6 ELA at Prosper Preparatory: 16 units combining Reading & Vocabulary with Grammar (Vocabulary Power through Style and Tone), with practice and unit checks. Lesson checks = 40%; unit checks = 60%. Latest attempt counts."
)}' WHERE "id" = '${COURSE_ID}';`);
sql.push("");
for (const L of allLessons) {
  sql.push(
    `UPDATE "Lesson" SET "content" = '${esc(L.content)}', "description" = '${esc(L.description)}', "objectives" = '${esc(L.objectives)}', "title" = '${esc(L.title)}' WHERE "id" = '${L.id}';`
  );
}
mkdirSync("scripts/generated", { recursive: true });
writeFileSync("scripts/generated/_fragment_grade6_ela_content_update.sql", sql.join("\n"));

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
