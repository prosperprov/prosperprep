import { specialtyLessonsFor, specialtySubjectsForGrade } from "./tracks";
import { grade10ElaLessons, grade10MathLessons, SHOWCASE_GRADE } from "./showcase-grade10";
import {
  questionsForTopic,
  sectionKeyForLessonOrder,
  type QuestionSeed,
  type TopicLike,
} from "./assessments";
import { resolveVideoUrl } from "./khan-videos";
import { teachPackFor } from "./teach-banks";
import {
  G7_THEME_TITLE,
  G7_THEME_VIDEO,
  g7ThemeContent,
  g7ThemeDescription,
  g7ThemeObjectives,
  g7ThemeQuestions,
} from "./g7-theme-lesson";

/**
 * Prosper Preparatory curriculum outlines + lesson body builders.
 * TEKS-friendly academic topics for K–12 (not claiming official TEKS certification).
 */

export type { QuestionSeed };

export type LessonSeed = {
  title: string;
  description: string;
  objectives: string;
  content: string;
  order: number;
  durationMin: number;
  sectionKey?: string;
  questions?: QuestionSeed[];
  /** Optional YouTube (or equivalent) educational video URL */
  videoUrl?: string | null;
  /** Optional topic metadata for section quiz generation */
  topicMeta?: TopicLike & { example?: string; stretch?: string };
};

type Topic = {
  title: string;
  focus: string;
  keyIdeas: string[];
  example: string;
  practice: { q: string; a: string }[];
  stretch: string;
};

function gradeWord(grade: number) {
  return grade === 0 ? "Kindergarten" : `Grade ${grade}`;
}

function band(grade: number): "early" | "elem" | "middle" | "high" {
  if (grade <= 2) return "early";
  if (grade <= 5) return "elem";
  if (grade <= 8) return "middle";
  return "high";
}

function durationFor(grade: number) {
  if (grade <= 2) return 20;
  if (grade <= 5) return 30;
  if (grade <= 8) return 40;
  return 45;
}

function intro(grade: number, subject: string, title: string, focus: string): string {
  const g = gradeWord(grade);
  const b = band(grade);
  if (b === "early") {
    return `Welcome to today's ${subject} lesson for ${g} at Prosper Preparatory.\n\nToday we will learn about **${title}**. ${focus}\n\nSit somewhere quiet, gather a pencil and paper, and take your time. Ready? Let's begin.`;
  }
  if (b === "elem") {
    return `Welcome, ${g} scholars.\n\nThis lesson focuses on **${title}**. ${focus}\n\nAs you read, underline key words and try each practice item before checking the answers. Careful reading and clear thinking are the habits we build here.`;
  }
  if (b === "middle") {
    return `In this ${g} ${subject} lesson, we study **${title}**.\n\n${focus}\n\nYou will see key ideas, a worked example, practice questions, and a stretch challenge. Work carefully; these skills connect to the next lessons in your course.`;
  }
  return `This ${g} ${subject} lesson develops **${title}** with college-ready rigor.\n\n${focus}\n\nRead actively: annotate definitions, follow the worked example step by step, then complete practice before the stretch problem.`;
}

function teachBlock(grade: number, ideas: string[]): string {
  const b = band(grade);
  const paras = ideas.map((idea, i) => {
    if (b === "early") {
      return `### Idea ${i + 1}\n\n${idea}\n\nLook at the words carefully. Say them out loud. Draw a small picture if it helps you remember.`;
    }
    if (b === "elem") {
      return `### Key idea ${i + 1}\n\n${idea}\n\nWrite one sentence in your notebook that restates this idea in your own words.`;
    }
    if (b === "middle") {
      return `### Concept ${i + 1}\n\n${idea}\n\nPause and ask yourself: *When would I use this?* Note one connection to something you already know.`;
    }
    return `### Core concept ${i + 1}\n\n${idea}\n\nConsider edge cases and counterexamples. Strong reasoning means knowing both when a rule applies and when it does not.`;
  });
  return paras.join("\n\n");
}

function exampleBlock(grade: number, example: string): string {
  const b = band(grade);
  const label = b === "early" ? "Let's try one together" : b === "high" ? "Worked example" : "Worked example";
  return `## ${label}\n\n${example}`;
}

function practiceBlock(practice: { q: string; a: string }[]): string {
  const qs = practice.map((p, i) => `${i + 1}. ${p.q}`).join("\n");
  const as = practice.map((p, i) => `${i + 1}. ${p.a}`).join("\n");
  return `## Practice\n\nComplete these on your own first.\n\n${qs}\n\n## Check your work\n\nCompare your answers only after you finish.\n\n${as}`;
}

function stretchBlock(stretch: string): string {
  return `## Stretch\n\n${stretch}\n\nShare your stretch work with a parent, teacher, or classmate if you can. Growth happens when we explain our thinking.`;
}

function closing(grade: number): string {
  const b = band(grade);
  if (b === "early") {
    return `## You did it\n\nGreat work today. Rest your eyes, then mark this lesson complete when you are ready. Tomorrow we will build on what you learned.`;
  }
  return `## Wrap-up\n\nReview your notes, correct any practice misses, and mark the lesson complete when you can explain the main ideas without looking.`;
}

function deepen(grade: number, subject: string, topic: Topic): string {
  const b = band(grade);
  const g = gradeWord(grade);
  if (b === "early") {
    return `## Try it with me\n\nThink about **${topic.title}** in your own home or neighborhood. Talk with a grown-up about what you notice. Look for everyday examples of today's idea around you.\n\nUse crayons or a pencil to make a quick drawing that shows today's idea. Label one part of your drawing. Then tell someone one new word you learned.\n\nIf you finish early, teach a stuffed animal or sibling the same idea in your own words. Teaching others helps your brain remember.`;
  }
  if (b === "elem") {
    return `## Guided practice notes\n\nFor ${g} ${subject}, strong habits matter as much as correct answers. Read each section twice. First, get the big idea. Second, hunt for details you can use in practice.\n\nTexas classrooms often ask students to *show their work* and *explain their thinking*. Do the same here: write complete sentences when the question asks for explanation, and label diagrams clearly.\n\nCommon pitfall: rushing to the answer key. Cover the "Check your work" section until you have tried every item. Then correct in a different color so you can see growth.`;
  }
  if (b === "middle") {
    return `## Why it matters\n\nMastering **${topic.title}** supports later coursework and everyday problem-solving. Students use these skills when they read news, manage money, evaluate claims, and participate as informed citizens.\n\nKeep a short glossary of new terms from this lesson. Revisit it before your next live session.\n\n## Study strategy\n\n1. Preview headings.\n2. Read actively (annotate).\n3. Re-work the example without looking.\n4. Complete practice, then check.\n5. Attempt the stretch for depth.\n\nIf an item is wrong, write a one-sentence error analysis: what went wrong and how you will fix it next time.`;
  }
  return `## Why it matters\n\n**${topic.title}** sits inside a larger academic sequence. Treat this lesson as deliberate practice toward graduation-ready literacy, quantitative reasoning, scientific literacy, or civic competence.\n\nStudents compete nationally when they can write clearly, model quantitatively, evaluate evidence, and participate knowledgeably in civic life. Online learning at Prosper Preparatory expects the same seriousness as a strong brick-and-mortar classroom.\n\n## Academic habits\n\n- Paraphrase definitions before memorizing them.\n- Connect today's example to a second original example you invent.\n- Track misconceptions in a running "error log."\n- Bring one precise question to your next live session or office hours.\n\n## Transfer task\n\nWrite a short reflection (6–10 sentences): How does **${topic.title}** appear outside school — in work, media, family decisions, or local issues? Cite at least one concrete scenario.`;
}

function buildContent(
  grade: number,
  subject: string,
  topic: Topic
): string {
  const goals = topic.keyIdeas.map((k) => {
    const first = k.split(".")[0].trim();
    return `- ${first}${first.endsWith(".") ? "" : "."}`;
  }).join("\n");
  const parts = [
    intro(grade, subject, topic.title, topic.focus),
    `## Learning goals\n\n${goals}`,
    `## Teach\n\n${teachBlock(grade, topic.keyIdeas)}`,
    deepen(grade, subject, topic),
    exampleBlock(grade, topic.example),
    `## Watch for this mistake\n\nA frequent error in **${topic.title}** is treating a slogan or a one-word label as mastery. Instead, restate the definition, show the worked example from memory, then complete practice with labeled steps or cited evidence.`,
    practiceBlock(topic.practice),
    stretchBlock(topic.stretch),
    closing(grade),
  ];
  return parts.join("\n\n");
}

function objectivesFrom(topic: Topic): string {
  return topic.keyIdeas.map((k) => `• ${k}`).join("\n");
}

function toLesson(grade: number, subject: string, topic: Topic, order: number): LessonSeed {
  // Gold standard: middle-school ELA theme lesson
  if (
    topic.title === G7_THEME_TITLE &&
    grade >= 6 &&
    grade <= 8 &&
    (subject.toLowerCase().includes("language") ||
      subject.toLowerCase().includes("english") ||
      subject.toLowerCase().includes("reading") ||
      subject === "Language Arts")
  ) {
    const topicLike: TopicLike = {
      title: G7_THEME_TITLE,
      focus: g7ThemeDescription,
      keyIdeas: [
        "Theme is a full claim about life/human nature — not a one-word topic.",
        "Use evidence → inference → theme statement.",
        "Avoid plot summaries and fortune-cookie morals without textual support.",
      ],
      practice: [
        { q: "Rewrite a one-word topic into a theme statement.", a: "Must be a full claim supported by evidence." },
        { q: "Name the three analysis steps.", a: "Evidence → inference → theme." },
      ],
    };
    return {
      title: G7_THEME_TITLE,
      description: g7ThemeDescription,
      objectives: g7ThemeObjectives,
      content: g7ThemeContent(),
      order,
      durationMin: durationFor(grade),
      sectionKey: sectionKeyForLessonOrder(order),
      questions: g7ThemeQuestions(),
      videoUrl: G7_THEME_VIDEO,
      topicMeta: { ...topicLike, example: topic.example, stretch: topic.stretch },
    };
  }

  const topicLike: TopicLike = {
    title: topic.title,
    focus: topic.focus,
    keyIdeas: topic.keyIdeas,
    practice: topic.practice,
  };
  return {
    title: topic.title,
    description: topic.focus,
    objectives: objectivesFrom(topic),
    content: buildContent(grade, subject, topic),
    order,
    durationMin: durationFor(grade),
    sectionKey: sectionKeyForLessonOrder(order),
    questions: questionsForTopic(topicLike, subject),
    videoUrl: resolveVideoUrl(subject, grade, topic.title),
    topicMeta: { ...topicLike, example: topic.example, stretch: topic.stretch },
  };
}

/* ========== Topic catalogs by subject key ========== */

function elaTopics(grade: number): Topic[] {
  const g = grade;
  if (g === 0) {
    return [
      t("Letter Sounds We Know", "Connect letters to the sounds they make.", ["Letters stand for sounds we hear in words.", "Saying sounds slowly helps us blend.", "Pictures can help us remember letter sounds."], "The letter Mm says /m/, like in *mom* and *map*. Point to Mm and say /m/.", [{ q: "What sound does Ss make?", a: "/s/ as in sun" }, { q: "Name something that starts with Bb.", a: "Examples: ball, book, bear" }, { q: "Clap the sounds in *cat*. How many?", a: "3 sounds: /c/ /a/ /t/" }], "Find three objects at home that start with the same letter."),
      t("Rhyming Words", "Hear and make rhymes.", ["Rhyming words share the same ending sound.", "Songs and poems use rhyme.", "We can invent new rhymes for fun."], "Cat / hat / bat rhyme. Dog / log rhyme. Say each pair aloud.", [{ q: "Which rhymes with *sun*: run or sit?", a: "run" }, { q: "Name a rhyme for *bee*.", a: "Examples: me, see, tree" }, { q: "Do *cup* and *cap* rhyme?", a: "No — endings differ" }], "Make a silly rhyme about your favorite animal."),
      t("Story Time: Characters", "Notice who is in a story.", ["Characters are the people or animals in a story.", "We learn about characters by what they do and say.", "Pictures give clues about characters."], "In *The Three Bears*, Goldilocks and the bears are characters. Goldilocks tries the porridge.", [{ q: "Who is a character in your favorite story?", a: "Any named person/animal from the story" }, { q: "How can pictures help?", a: "They show looks, feelings, and actions" }, { q: "True or false: The setting is a character.", a: "False — setting is where/when" }], "Draw your favorite story character and tell one thing they did."),
      t("Story Time: Setting", "Tell where and when a story happens.", ["Setting is the place and time of a story.", "Words and pictures show the setting.", "Settings can change in a story."], "A story in a forest at night has a different setting than one at school in the morning.", [{ q: "Where does a farm story happen?", a: "On a farm / countryside" }, { q: "Name a time word (day, night…).", a: "Examples: morning, night, winter" }, { q: "Can a story have more than one setting?", a: "Yes" }], "Describe the setting of a book you heard today."),
      t("Listening for Details", "Listen carefully and remember important parts.", ["Good listeners look and stay quiet while someone reads.", "Details are small important facts.", "We can retell details in order."], "If a story says the puppy hid under the porch, that detail helps us picture the scene.", [{ q: "Name one good listening habit.", a: "Eyes on speaker / quiet body / think about words" }, { q: "What is a detail?", a: "A small important fact from the story" }, { q: "Retell: Who? What?", a: "Answers vary — should include character + action" }], "Listen to a short paragraph and draw one detail you heard."),
      t("Writing Our Names", "Write letters of our names carefully.", ["Our names begin with a capital letter.", "We write left to right.", "Practice makes our writing clearer."], "Sam starts with capital S, then a, m. Trace slowly on lined paper.", [{ q: "What kind of letter starts a name?", a: "A capital letter" }, { q: "Which way do we write?", a: "Left to right" }, { q: "Write your first name once.", a: "Student produces name" }], "Write your name three times, each neater than the last."),
      t("Asking Questions About Books", "Ask who, what, where, why.", ["Questions help us understand stories.", "Who/what/where/why are useful question words.", "We can ask questions before and after reading."], "Before reading: What do I see on the cover? After: Why did the character feel sad?", [{ q: "Name three question words.", a: "who, what, where, why, when, how" }, { q: "Ask a *where* question about a park story.", a: "Where did they play?" }, { q: "Why ask questions?", a: "To understand better" }], "Ask two questions about tonight's bedtime story."),
      t("Opposites and Describing Words", "Use words that describe and opposite pairs.", ["Describing words tell how things look or feel.", "Opposites are words with opposite meanings.", "Good writers choose clear describing words."], "Big / little are opposites. Soft, red, and loud are describing words.", [{ q: "What is the opposite of *hot*?", a: "cold" }, { q: "Name a describing word for a kitten.", a: "soft, small, fluffy…" }, { q: "Are *up* and *down* opposites?", a: "Yes" }], "List five describing words for Texas weather."),
      t("Sharing Our Ideas", "Speak in complete thoughts about books.", ["We take turns when we share.", "We use full sentences.", "We listen to friends' ideas."], "Instead of saying \"dog,\" say \"The dog ran to the barn.\"", [{ q: "Finish: The bird ___ .", a: "Any complete idea, e.g. flew away" }, { q: "Why take turns?", a: "So everyone can share and listen" }, { q: "Say one sentence about school.", a: "Complete sentence from student" }], "Tell a partner three sentences about your day."),
    ];
  }
  // Generic grade-scaled ELA topics for 1–12
  return scaledEla(g);
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

function scaledEla(grade: number): Topic[] {
  const titles =
    grade <= 2
      ? [
          "Short Vowels in CVC Words",
          "Blending Onsets and Rimes",
          "Retelling a Story in Order",
          "Nouns: People, Places, Things",
          "Verbs Show Action",
          "Capital Letters and Periods",
          "Comparing Two Characters",
          "Informative Sentences About Animals",
          "Poetry: Rhythm and Feeling",
        ]
      : grade <= 5
        ? [
            "Main Idea and Supporting Details",
            "Context Clues for Vocabulary",
            "Narrative Structure: Beginning, Middle, End",
            "Summarizing Informational Text",
            "Figurative Language: Simile and Metaphor",
            "Opinion Writing with Reasons",
            "Dialogue and Quotation Marks",
            "Research Notes from Two Sources",
            "Revising for Clarity",
          ]
        : grade <= 8
          ? [
              "Analyzing Theme in Short Fiction",
              "Claim, Evidence, and Reasoning",
              "Author's Purpose and Tone",
              "Comparing Texts on the Same Topic",
              "Grammar for Clarity: Clauses",
              "Poetry Analysis: Imagery and Sound",
              "Argumentative Paragraphs",
              "Media Literacy: Fact vs. Opinion",
              "Multi-paragraph Essay Outline",
            ]
          : [
              "Close Reading of Complex Prose",
              "Rhetorical Appeals in Speeches",
              "Literary Criticism: Motif and Symbol",
              "Synthesizing Multiple Sources",
              "Advanced Syntax and Style",
              "Satire and Irony",
              "Research Paper: Thesis and Outline",
              "Evaluating Bias in Media",
              "College-Ready Revision Strategies",
            ];

  return titles.map((title, i) =>
    elaTopicFor(grade, title, i + 1)
  );
}

function elaTopicFor(grade: number, title: string, _n: number): Topic {
  const pack = teachPackFor(grade, "Language Arts", title);
  return t(title, pack.focus, pack.keyIdeas, pack.example, pack.practice, pack.stretch);
}

function mathTopics(grade: number): Topic[] {
  const titles =
    grade === 0
      ? [
          "Counting to 20",
          "Comparing More and Less",
          "Shapes Around Us",
          "Patterns: Color and Size",
          "Combining Groups (Adding Stories)",
          "Taking Away (Subtracting Stories)",
          "Measuring with Cubes",
          "Sorting by Attributes",
          "Number Writing 0–10",
        ]
      : grade <= 2
        ? [
            "Place Value: Tens and Ones",
            "Addition within 100",
            "Subtraction within 100",
            "Even and Odd Numbers",
            "Measuring Length",
            "Telling Time to the Hour and Half Hour",
            "Arrays and Equal Groups",
            "Simple Word Problems",
            "Data: Picture Graphs",
          ]
        : grade === 3
          ? [
              "Multiplication as Equal Groups",
              "Division as Sharing",
              "Fractions on a Number Line",
              "Area of Rectangles",
              "Perimeter",
              "Two-Step Word Problems",
              "Rounding to Tens and Hundreds",
              "Elapsed Time",
              "Bar Graphs and Scaled Picture Graphs",
            ]
          : grade === 4
            ? [
                "Multi-digit Multiplication",
                "Long Division Concepts",
                "Equivalent Fractions",
                "Adding and Subtracting Fractions",
                "Decimals to Hundredths",
                "Angles and Degrees",
                "Factors and Multiples",
                "Measurement Conversions",
                "Line Plots with Fractions",
              ]
            : grade === 5
              ? [
                  "Place Value Patterns and Powers of Ten",
                  "Multi-digit Division",
                  "Adding and Subtracting Unlike Fractions",
                  "Multiplying Fractions",
                  "Dividing Unit Fractions",
                  "Decimal Operations",
                  "Volume of Rectangular Prisms",
                  "Coordinate Plane Quadrant I",
                  "Numerical Expressions and Order",
                ]
              : grade === 6
                ? [
                    "Ratios and Unit Rates",
                    "Percent Concepts",
                    "Fraction, Decimal, Percent Fluency",
                    "Integers on the Number Line",
                    "Expressions and Variables",
                    "One-Step Equations",
                    "Area of Triangles and Polygons",
                    "Surface Area Nets",
                    "Statistical Questions and Distributions",
                  ]
                : grade === 7
                  ? [
                      "Proportional Relationships",
                      "Percent Increase and Decrease",
                      "Rational Number Operations",
                      "Simplifying Algebraic Expressions",
                      "Solving Two-Step Equations",
                      "Inequalities on the Number Line",
                      "Scale Drawings",
                      "Probability of Simple Events",
                      "Circles: Circumference and Area",
                    ]
                  : grade === 8
                    ? [
                        "Integer Exponents",
                        "Scientific Notation",
                        "Slope and Linear Relationships",
                        "Solving Linear Equations",
                        "Systems of Equations (Intro)",
                        "Functions: Input and Output",
                        "Pythagorean Theorem",
                        "Transformations on the Plane",
                        "Bivariate Data and Scatter Plots",
                      ]
                    : grade === 9
                      ? [
                          "Linear Functions and Graphs",
                          "Solving Inequalities in One Variable",
                          "Systems of Linear Equations",
                          "Exponential Growth Intro",
                          "Quadratic Expressions",
                          "Factoring Trinomials",
                          "Domain and Range",
                          "Modeling with Functions",
                          "Data Displays and Residual Ideas",
                        ]
                      : grade <= 11
                        ? [
                            "Function Families Review",
                            "Quadratic Formula and Completing the Square",
                            "Complex Numbers Intro",
                            "Polynomial Operations",
                            "Rational Expressions",
                            "Trigonometric Ratios",
                            "Exponential and Logarithmic Forms",
                            "Sequences and Series Basics",
                            "Probability Distributions Overview",
                          ]
                        : [
                            "Limits Intuition for Continuity",
                            "Average vs Instantaneous Rate of Change",
                            "Derivatives as Slope Functions",
                            "Applications: Optimization Sketch",
                            "Integrals as Accumulation",
                            "Statistics: Sampling Variability",
                            "Normal Models and z-scores",
                            "Financial Math: Interest Models",
                            "Mathematical Modeling Capstone",
                          ];

  return titles.map((title, i) => mathTopicFor(grade, title, i + 1));
}

function mathTopicFor(grade: number, title: string, _n: number): Topic {
  const pack = teachPackFor(grade, "Mathematics", title);
  return t(title, pack.focus, pack.keyIdeas, pack.example, pack.practice, pack.stretch);
}

function scienceTopics(grade: number): Topic[] {
  const titles =
    grade <= 2
      ? [
          "Living and Nonliving",
          "Plant Needs: Light and Water",
          "Animal Homes",
          "Weather We Can Observe",
          "Push and Pull Forces",
          "Objects in the Day and Night Sky",
          "Properties: Hard, Soft, Sink, Float",
          "Five Senses as Science Tools",
          "Caring for Our Environment",
        ]
      : grade <= 5
        ? [
            "Food Chains and Food Webs",
            "Water Cycle",
            "Earth's Resources",
            "Weather vs Climate",
            "Matter: Solids, Liquids, Gases",
            "Forms of Energy",
            "Ecosystems in Texas",
            "Earth, Moon, and Sun Patterns",
            "Engineering Design: Ask and Improve",
          ]
        : grade <= 8
          ? [
              "Cells as Building Blocks",
              "Photosynthesis Overview",
              "Human Body Systems Intro",
              "Plate Tectonics and Texas Geology Hooks",
              "Atoms and Molecules",
              "Chemical vs Physical Changes",
              "Forces, Motion, and Newton's Laws",
              "Waves: Sound and Light",
              "Climate Factors and Human Impact",
            ]
          : [
              "Scientific Method and Experimental Design",
              "Biochemistry of Macromolecules",
              "Genetics and Heredity",
              "Evolution and Natural Selection",
              "Chemical Bonding and Reactions",
              "Stoichiometry Foundations",
              "Energy Transfer and Thermodynamics Intro",
              "Ecology and Biodiversity",
              "Earth Systems and Sustainability",
            ];

  return titles.map((title) => scienceTopicFor(grade, title));
}

function scienceTopicFor(grade: number, title: string): Topic {
  const pack = teachPackFor(grade, "Science", title);
  return t(title, pack.focus, pack.keyIdeas, pack.example, pack.practice, pack.stretch);
}

function ssTopics(grade: number): Topic[] {
  const titles =
    grade <= 2
      ? [
          "Our Classroom Community Rules",
          "Maps: Near and Far",
          "Family and Community Helpers",
          "Needs and Wants",
          "Celebrating American Symbols",
          "Then and Now: How Life Changes",
          "Texas Pride: State Symbols Intro",
          "Being a Good Citizen",
          "Seasons and Holidays in Our Year",
        ]
      : grade <= 5
        ? [
            "Reading Maps: Keys and Directions",
            "Native Peoples of Texas Regions",
            "Explorers and Early Settlements",
            "American Revolution Ideals",
            "U.S. Constitution Basics",
            "Texas History Highlights",
            "Regions of the United States",
            "Goods, Services, and Markets",
            "Civic Participation in Local Communities",
          ]
        : grade <= 8
          ? [
              "Geography Tools and Spatial Thinking",
              "Ancient River Civilizations",
              "Medieval to Early Modern Change",
              "World Religions and Cultures Overview",
              "Age of Exploration Impacts",
              "Revolutions and New Governments",
              "Industrialization and Society",
              "Texas in the 19th Century",
              "U.S. Civil Rights Milestones",
            ]
          : [
              "Historical Thinking: Sourcing Documents",
              "Founding Documents Deep Dive",
              "Westward Expansion and Consequences",
              "Industrialization, Labor, and Cities",
              "World Wars and Global Power",
              "Cold War and Decolonization",
              "Civil Rights Movements",
              "Economics: Markets and Policy",
              "Civics: Federalism and Citizenship",
            ];

  return titles.map((title) => ssTopicFor(grade, title));
}

function ssTopicFor(grade: number, title: string): Topic {
  const pack = teachPackFor(grade, "Social Studies", title);
  return t(title, pack.focus, pack.keyIdeas, pack.example, pack.practice, pack.stretch);
}

/** Map band subject display names to topic generators */
export function lessonsForCourse(subject: string, grade: number): LessonSeed[] {
  const specialty = specialtyLessonsFor(subject, grade);
  if (specialty) return specialty;

  const lower = subject.toLowerCase();
  let topics: Topic[];
  let subjectLabel: string;

  if (lower.includes("math") || lower.includes("algebra")) {
    topics = mathTopics(grade);
    subjectLabel = "Mathematics";
  } else if (lower.includes("science") || lower.includes("biology") || lower.includes("chemistry") || lower.includes("life")) {
    topics = scienceTopics(grade);
    subjectLabel = "Science";
  } else if (
    lower.includes("social") ||
    lower.includes("history") ||
    lower.includes("world history") ||
    lower.includes("u.s.")
  ) {
    topics = ssTopics(grade);
    subjectLabel = "Social Studies";
  } else {
    topics = elaTopics(grade);
    subjectLabel = "Language Arts";
  }

  // Grade 10 showcase: deeper Math / ELA modules
  if (grade === SHOWCASE_GRADE) {
    if (subjectLabel === "Mathematics") return grade10MathLessons();
    if (subjectLabel === "Language Arts") return grade10ElaLessons();
  }

  // Default starter modules: 8–10 lessons
  const selected = topics.slice(0, Math.min(10, Math.max(8, topics.length)));
  return selected.map((topic, i) => toLesson(grade, subjectLabel, topic, i + 1));
}

export function subjectNamesForBand(bandName: "ELEMENTARY" | "MIDDLE" | "HIGH"): string[] {
  if (bandName === "ELEMENTARY") {
    return ["Reading & Language Arts", "Mathematics", "Science", "Social Studies"];
  }
  if (bandName === "MIDDLE") {
    return ["English Language Arts", "Mathematics", "Life & Earth Science", "World History"];
  }
  return ["English Literature", "Algebra & Beyond", "Biology & Chemistry", "U.S. & World History"];
}

/** Core + specialty subjects for a specific grade */
export function subjectsForGrade(grade: number): string[] {
  const band = grade <= 5 ? "ELEMENTARY" : grade <= 8 ? "MIDDLE" : "HIGH";
  return [...subjectNamesForBand(band), ...specialtySubjectsForGrade(grade)];
}
