/**
 * Original MCQ generators for Prosper Preparatory.
 * Classroom structures adapted; all question wording is original.
 * Showcase courses should prefer authoredQuestions() — no stock distractors.
 */

export type QuestionSeed = {
  prompt: string;
  choices: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  points?: number;
  order: number;
};

export type TopicLike = {
  title: string;
  focus: string;
  keyIdeas: string[];
  practice: { q: string; a: string }[];
};

export type AuthoredItem = {
  prompt: string;
  correct: string;
  distractors: [string, string, string];
  explanation: string;
};

function hashPick(seed: string, n: number) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return n === 0 ? 0 : h % n;
}

function short(s: string, n = 140) {
  const t = s.replace(/\s+/g, " ").trim();
  return t.length > n ? t.slice(0, n - 1) + "…" : t;
}

function distractorsFrom(ideas: string[], correct: string, seed: string): [string, string, string] {
  const pool = [
    ...ideas.map((i) => short(i, 120)),
    "Reverse the relationship taught in the worked example.",
    "Ignore definitions and choose a slogan that sounds related.",
    "Use an answer that fits a different lesson title entirely.",
    "Skip checking units, evidence, or stated constraints.",
    "Treat a counterexample as if it were the main rule.",
  ].filter((d) => d && d !== correct && !correct.startsWith(d.slice(0, 40)));
  const out: string[] = [];
  let i = 0;
  while (out.length < 3 && i < 40) {
    const d = pool[(hashPick(seed + String(i), pool.length) + i) % Math.max(pool.length, 1)];
    if (d && !out.includes(d) && d !== correct) out.push(d);
    i++;
  }
  while (out.length < 3) {
    out.push(`A plausible but incorrect application of “${seed.slice(0, 28)}” (${out.length + 1}).`);
  }
  return out as [string, string, string];
}

function shuffleChoices(
  correct: string,
  wrong: [string, string, string],
  seed: string
): { choices: [string, string, string, string]; correctIndex: number } {
  const items = [correct, ...wrong];
  const rot = hashPick(seed, 4);
  const choices = [...items.slice(rot), ...items.slice(0, rot)] as [
    string,
    string,
    string,
    string,
  ];
  return { choices, correctIndex: choices.indexOf(correct) };
}

/** Author-written MCQs for showcase courses (no stock distractor pool). */
export function authoredQuestions(items: AuthoredItem[], max = 8): QuestionSeed[] {
  return items.slice(0, Math.min(Math.max(max, 1), 12)).map((item, i) => {
    const { choices, correctIndex } = shuffleChoices(
      item.correct,
      item.distractors,
      item.prompt + String(i)
    );
    return {
      prompt: item.prompt,
      choices,
      correctIndex,
      explanation: item.explanation,
      order: i + 1,
      points: 1,
    };
  });
}

/**
 * Build 6 lesson-check MCQs from a topic.
 * Avoids stock prompts like "What is the primary focus of the lesson…"
 * Prefers definition application, worked-example follow-ups, and misconception traps.
 */
export function questionsForTopic(topic: TopicLike, subjectHint = ""): QuestionSeed[] {
  const qs: QuestionSeed[] = [];
  const ideas = topic.keyIdeas.length ? topic.keyIdeas : [topic.focus];
  const title = topic.title;
  const subj = subjectHint || "this subject";

  // 1) Definition / concept application from first idea
  {
    const idea = ideas[0];
    const correct = short(idea);
    const wrong = distractorsFrom(
      [
        `Deny the teaching point: ${idea}`,
        `Apply the opposite of what “${title}” teaches.`,
        `Memorize the lesson title only and skip examples.`,
        ...ideas.slice(1),
      ],
      correct,
      title + "def"
    );
    const { choices, correctIndex } = shuffleChoices(correct, wrong, title + "def");
    qs.push({
      prompt: `When working on “${title},” which understanding should guide your first steps?`,
      choices,
      correctIndex,
      explanation: `From the teach section: ${idea}`,
      order: 1,
    });
  }

  // 2) Second key idea — misconception trap
  if (ideas[1]) {
    const idea = ideas[1];
    const correct = short(idea);
    const wrong = distractorsFrom(
      [
        short(`A common error is to ignore this: ${idea}`),
        "Skip vocabulary and guess from the answer choices alone.",
        `Treat “${title}” as unrelated to ${subj}.`,
      ],
      correct,
      title + "mis"
    );
    const { choices, correctIndex } = shuffleChoices(correct, wrong, title + "mis");
    qs.push({
      prompt: `Which statement correctly captures a second core idea students must use for “${title}”?`,
      choices,
      correctIndex,
      explanation: idea,
      order: 2,
    });
  }

  // 3) Third idea or focus application
  {
    const idea = ideas[2] || topic.focus;
    const correct = short(idea);
    const wrong = distractorsFrom(ideas, correct, title + "app");
    const { choices, correctIndex } = shuffleChoices(correct, wrong, title + "app");
    qs.push({
      prompt: `A classmate rushes and invents a shortcut that contradicts “${title}.” Which reminder is accurate?`,
      choices,
      correctIndex,
      explanation: `Keep this idea in view: ${idea}`,
      order: 3,
    });
  }

  // 4–5) Practice follow-ups (application)
  topic.practice.slice(0, 2).forEach((p, idx) => {
    const correct = short(p.a);
    const wrongPool = topic.practice
      .filter((x) => x.a !== p.a)
      .map((x) => x.a)
      .concat([
        "There is not enough information — so invent facts not in the lesson.",
        "Do the opposite of the worked example without checking.",
        subjectHint
          ? `Drop all ${subjectHint} vocabulary and pick the longest choice.`
          : "Pick the longest choice without using lesson vocabulary.",
      ]);
    const wrong = distractorsFrom(wrongPool, correct, title + "pr" + idx);
    const { choices, correctIndex } = shuffleChoices(correct, wrong, title + "p" + idx);
    qs.push({
      prompt: p.q,
      choices,
      correctIndex,
      explanation: `Correct response: ${p.a}`,
      order: qs.length + 1,
    });
  });

  // 6) Error-analysis / study application (not "primary focus")
  {
    const correct =
      "Re-work the example, then explain a miss with one sentence naming the broken step.";
    const wrong = distractorsFrom(
      [
        "Only reread the title and stop.",
        "Change answers randomly until one feels lucky.",
        "Skip checking units, evidence, or definitions after a miss.",
      ],
      correct,
      title + "habit"
    );
    const { choices, correctIndex } = shuffleChoices(correct, wrong, title + "habit");
    qs.push({
      prompt: `After missing a practice item on “${title},” what is the most effective next move?`,
      choices,
      correctIndex,
      explanation:
        "Error analysis tied to the worked example builds transferable skill — guessing does not.",
      order: qs.length + 1,
    });
  }

  while (qs.length < 6) {
    const idea = ideas[qs.length % ideas.length];
    const correct = short(idea);
    const wrong = distractorsFrom(ideas, correct, title + "pad" + qs.length);
    const { choices, correctIndex } = shuffleChoices(correct, wrong, title + "pad" + qs.length);
    qs.push({
      prompt: `Which idea belongs in a correct solution path for “${title}”?`,
      choices,
      correctIndex,
      explanation: idea,
      order: qs.length + 1,
    });
  }

  return qs.slice(0, 8).map((q, i) => ({ ...q, order: i + 1, points: 1 }));
}

/** Build 8–12 section-quiz MCQs from several topics. */
export function sectionQuestionsFromTopics(
  topics: TopicLike[],
  sectionLabel: string
): QuestionSeed[] {
  const qs: QuestionSeed[] = [];
  topics.forEach((topic) => {
    questionsForTopic(topic)
      .slice(0, 3)
      .forEach((q) => {
        qs.push({
          ...q,
          prompt: `[${topic.title}] ${q.prompt}`,
          order: qs.length + 1,
        });
      });
  });

  if (topics.length >= 2) {
    const t0 = topics[0];
    const correct = `Use definitions and worked examples from ${t0.title} together with later lessons in the section.`;
    const wrong = distractorsFrom(
      topics.flatMap((t) => t.keyIdeas),
      correct,
      sectionLabel + "syn"
    );
    const { choices, correctIndex } = shuffleChoices(correct, wrong, sectionLabel + "syn");
    qs.push({
      prompt: `For ${sectionLabel}, which approach best shows mastery across the lessons?`,
      choices,
      correctIndex,
      explanation:
        "Section quizzes reward connecting definitions, examples, and practice across lessons.",
      order: qs.length + 1,
    });
  }

  const sliced = qs.slice(0, 12);
  while (sliced.length < 8 && topics[0]) {
    const extra = questionsForTopic(topics[sliced.length % topics.length])[0];
    sliced.push({ ...extra, order: sliced.length + 1 });
  }
  return sliced.map((q, i) => ({ ...q, order: i + 1, points: 1 }));
}

export function sectionKeyForLessonOrder(order: number, sectionSize = 3): string {
  const sectionNum = Math.floor((order - 1) / sectionSize) + 1;
  return `section-${sectionNum}`;
}
