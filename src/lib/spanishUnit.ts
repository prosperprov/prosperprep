/**
 * Prosper Prep Spanish — Unit 1 (Greetings).
 * Each new word is taught before it is quizzed. Questions use only words
 * already taught in the lesson, or earlier words after a reminder.
 */

export type TeachStep = {
  id: string;
  kind: "teach";
  en: string;
  es: string;
};

export type RemindStep = {
  id: string;
  kind: "remind";
  items: { en: string; es: string }[];
};

export type ChoiceStep = {
  id: string;
  kind: "choice";
  prompt: string;
  promptText: string;
  promptLang: "en" | "es";
  choices: { text: string; lang: "en" | "es" }[];
  answer: string;
  /** Spanish spoken and shown when the answer is checked. */
  speak: string;
};

export type ListenStep = {
  id: string;
  kind: "listen";
  prompt: string;
  speak: string;
  choices: string[];
  answer: string;
};

export type BuildStep = {
  id: string;
  kind: "build";
  prompt: string;
  meaning: string;
  answer: string[];
  extra: string[];
  speak: string;
};

export type MatchStep = {
  id: string;
  kind: "match";
  prompt: string;
  pairs: { es: string; en: string }[];
};

export type SpanishStep = TeachStep | RemindStep | ChoiceStep | ListenStep | BuildStep | MatchStep;

export type SpanishLesson = {
  slug: string;
  title: string;
  blurb: string;
  steps: SpanishStep[];
};

export const SPANISH_UNIT = {
  id: "unit-1-greetings",
  title: "Prosper Prep Spanish",
  unitLabel: "Unit 1 · Greetings",
  storageKey: "prosperprep-spanish-unit1-v2",
} as const;

function teach(id: string, en: string, es: string): TeachStep {
  return { id, kind: "teach", en, es };
}

function remind(id: string, items: { en: string; es: string }[]): RemindStep {
  return { id, kind: "remind", items };
}

function chooseEs(
  id: string,
  english: string,
  options: string[],
  answer: string,
): ChoiceStep {
  return {
    id,
    kind: "choice",
    prompt: "Choose the Spanish",
    promptText: english,
    promptLang: "en",
    choices: options.map((text) => ({ text, lang: "es" as const })),
    answer,
    speak: answer,
  };
}

function chooseEn(
  id: string,
  spanish: string,
  options: string[],
  answer: string,
): ChoiceStep {
  return {
    id,
    kind: "choice",
    prompt: "What does this mean?",
    promptText: spanish,
    promptLang: "es",
    choices: options.map((text) => ({ text, lang: "en" as const })),
    answer,
    speak: spanish,
  };
}

function listen(id: string, speak: string, options: string[], answer: string): ListenStep {
  return {
    id,
    kind: "listen",
    prompt: "Listen, then choose the English",
    speak,
    choices: options,
    answer,
  };
}

function build(
  id: string,
  meaning: string,
  answer: string[],
  extra: string[],
  speak: string,
): BuildStep {
  return {
    id,
    kind: "build",
    prompt: "Tap the words in order",
    meaning,
    answer,
    extra,
    speak,
  };
}

function match(id: string, pairs: { es: string; en: string }[]): MatchStep {
  return { id, kind: "match", prompt: "Tap a Spanish word, then its English match", pairs };
}

export const spanishLessons: SpanishLesson[] = [
  {
    slug: "hello-goodbye",
    title: "Hello and goodbye",
    blurb: "Hola, adiós, and hasta luego.",
    steps: [
      teach("hg-t1", "Hello", "Hola"),
      chooseEn("hg-c1", "Hola", ["Hello", "Goodbye", "See you later", "Good morning"], "Hello"),
      listen("hg-l1", "Hola", ["Hello", "Goodbye", "See you later", "Good morning"], "Hello"),
      teach("hg-t2", "Goodbye", "Adiós"),
      chooseEs("hg-c2", "Goodbye", ["Hola", "Adiós"], "Adiós"),
      listen("hg-l2", "Adiós", ["Hello", "Goodbye", "See you later", "Good night"], "Goodbye"),
      chooseEn("hg-c3", "Adiós", ["Hello", "Goodbye", "See you later", "Please"], "Goodbye"),
      teach("hg-t3", "See you later", "Hasta luego"),
      build("hg-b1", "See you later", ["Hasta", "luego"], ["Hola", "Adiós"], "Hasta luego"),
      chooseEs("hg-c4", "See you later", ["Hola", "Adiós", "Hasta luego"], "Hasta luego"),
      listen("hg-l3", "Hasta luego", ["Hello", "Goodbye", "See you later", "Good morning"], "See you later"),
      match("hg-m1", [
        { es: "Hola", en: "Hello" },
        { es: "Adiós", en: "Goodbye" },
        { es: "Hasta luego", en: "See you later" },
      ]),
    ],
  },
  {
    slug: "morning-and-night",
    title: "Morning and night",
    blurb: "Good morning, good afternoon, and good night.",
    steps: [
      teach("mn-t1", "Good morning", "Buenos días"),
      chooseEn("mn-c1", "Buenos días", ["Good morning", "Good afternoon", "Good night", "Hello"], "Good morning"),
      listen("mn-l1", "Buenos días", ["Good morning", "Good afternoon", "Good night", "Goodbye"], "Good morning"),
      teach("mn-t2", "Good afternoon", "Buenas tardes"),
      chooseEs("mn-c2", "Good afternoon", ["Buenos días", "Buenas tardes"], "Buenas tardes"),
      listen("mn-l2", "Buenas tardes", ["Good morning", "Good afternoon", "Good night", "Hello"], "Good afternoon"),
      teach("mn-t3", "Good night", "Buenas noches"),
      chooseEs("mn-c3", "Good night", ["Buenos días", "Buenas tardes", "Buenas noches"], "Buenas noches"),
      build("mn-b1", "Good morning", ["Buenos", "días"], ["Buenas", "tardes", "noches"], "Buenos días"),
      match("mn-m1", [
        { es: "Buenos días", en: "Good morning" },
        { es: "Buenas tardes", en: "Good afternoon" },
        { es: "Buenas noches", en: "Good night" },
      ]),
      remind("mn-r1", [{ en: "Hello", es: "Hola" }]),
      chooseEs("mn-c4", "Hello", ["Hola", "Buenos días", "Buenas noches"], "Hola"),
    ],
  },
  {
    slug: "please-and-thanks",
    title: "Please and thank you",
    blurb: "Por favor, gracias, and de nada.",
    steps: [
      teach("pt-t1", "Please", "Por favor"),
      chooseEn("pt-c1", "Por favor", ["Please", "Thank you", "You are welcome", "Hello"], "Please"),
      listen("pt-l1", "Por favor", ["Please", "Thank you", "You are welcome", "Goodbye"], "Please"),
      teach("pt-t2", "Thank you", "Gracias"),
      chooseEs("pt-c2", "Thank you", ["Por favor", "Gracias"], "Gracias"),
      listen("pt-l2", "Gracias", ["Please", "Thank you", "You are welcome", "Good night"], "Thank you"),
      teach("pt-t3", "You are welcome", "De nada"),
      build("pt-b1", "You are welcome", ["De", "nada"], ["Por", "favor", "Gracias"], "De nada"),
      chooseEs("pt-c3", "Please", ["Por favor", "Gracias", "De nada"], "Por favor"),
      match("pt-m1", [
        { es: "Por favor", en: "Please" },
        { es: "Gracias", en: "Thank you" },
        { es: "De nada", en: "You are welcome" },
      ]),
      remind("pt-r1", [{ en: "Good morning", es: "Buenos días" }]),
      chooseEn("pt-c4", "Buenos días", ["Good morning", "Please", "Thank you", "You are welcome"], "Good morning"),
    ],
  },
  {
    slug: "yes-and-no",
    title: "Yes and no",
    blurb: "Sí, no, and short polite replies.",
    steps: [
      teach("yn-t1", "Yes", "Sí"),
      chooseEn("yn-c1", "Sí", ["Yes", "No", "Please", "Thank you"], "Yes"),
      listen("yn-l1", "Sí", ["Yes", "No", "Of course", "Please"], "Yes"),
      teach("yn-t2", "No", "No"),
      chooseEs("yn-c2", "No", ["Sí", "No"], "No"),
      listen("yn-l2", "No", ["Yes", "No", "Of course", "Thank you"], "No"),
      teach("yn-t3", "Of course", "Claro"),
      chooseEs("yn-c3", "Of course", ["Sí", "No", "Claro"], "Claro"),
      match("yn-m1", [
        { es: "Sí", en: "Yes" },
        { es: "No", en: "No" },
        { es: "Claro", en: "Of course" },
      ]),
      remind("yn-r1", [
        { en: "Please", es: "Por favor" },
        { en: "Thank you", es: "Gracias" },
      ]),
      build("yn-b1", "Yes, please", ["Sí,", "por", "favor"], ["No,", "gracias"], "Sí, por favor"),
      build("yn-b2", "No, thank you", ["No,", "gracias"], ["Sí,", "por", "favor"], "No, gracias"),
    ],
  },
  {
    slug: "numbers-1-5",
    title: "Numbers 1 to 5",
    blurb: "Uno, dos, tres, cuatro, and cinco.",
    steps: [
      teach("n1-t1", "1", "uno"),
      chooseEn("n1-c1", "uno", ["1", "2", "3", "5"], "1"),
      teach("n1-t2", "2", "dos"),
      listen("n1-l1", "dos", ["1", "2", "3", "4"], "2"),
      teach("n1-t3", "3", "tres"),
      chooseEs("n1-c2", "3", ["uno", "dos", "tres"], "tres"),
      teach("n1-t4", "4", "cuatro"),
      chooseEn("n1-c3", "cuatro", ["2", "3", "4", "5"], "4"),
      teach("n1-t5", "5", "cinco"),
      listen("n1-l2", "cinco", ["3", "4", "5", "1"], "5"),
      match("n1-m1", [
        { es: "uno", en: "1" },
        { es: "dos", en: "2" },
        { es: "tres", en: "3" },
      ]),
      teach("n1-t6", "number", "número"),
      build("n1-b1", "number five", ["número", "cinco"], ["uno", "dos", "tres", "cuatro"], "número cinco"),
      chooseEs("n1-c4", "1", ["uno", "dos", "tres", "cinco"], "uno"),
    ],
  },
  {
    slug: "numbers-6-10",
    title: "Numbers 6 to 10",
    blurb: "Seis, siete, ocho, nueve, and diez.",
    steps: [
      teach("n2-t1", "6", "seis"),
      chooseEn("n2-c1", "seis", ["6", "7", "8", "10"], "6"),
      teach("n2-t2", "7", "siete"),
      listen("n2-l1", "siete", ["6", "7", "8", "9"], "7"),
      teach("n2-t3", "8", "ocho"),
      chooseEs("n2-c2", "8", ["seis", "siete", "ocho"], "ocho"),
      teach("n2-t4", "9", "nueve"),
      chooseEn("n2-c3", "nueve", ["7", "8", "9", "10"], "9"),
      teach("n2-t5", "10", "diez"),
      listen("n2-l2", "diez", ["8", "9", "10", "6"], "10"),
      match("n2-m1", [
        { es: "seis", en: "6" },
        { es: "nueve", en: "9" },
        { es: "diez", en: "10" },
      ]),
      remind("n2-r1", [{ en: "number", es: "número" }]),
      build("n2-b1", "number eight", ["número", "ocho"], ["seis", "siete", "nueve", "diez"], "número ocho"),
      remind("n2-r2", [{ en: "5", es: "cinco" }]),
      listen("n2-l3", "cinco", ["5", "6", "8", "10"], "5"),
    ],
  },
  {
    slug: "colors",
    title: "Colors",
    blurb: "Red, blue, green, yellow, white, and black.",
    steps: [
      teach("co-t1", "red", "rojo"),
      chooseEn("co-c1", "rojo", ["red", "blue", "green", "yellow"], "red"),
      teach("co-t2", "blue", "azul"),
      chooseEs("co-c2", "blue", ["rojo", "azul"], "azul"),
      teach("co-t3", "green", "verde"),
      listen("co-l1", "verde", ["red", "blue", "green", "yellow"], "green"),
      teach("co-t4", "yellow", "amarillo"),
      chooseEs("co-c3", "yellow", ["rojo", "azul", "verde", "amarillo"], "amarillo"),
      match("co-m1", [
        { es: "rojo", en: "red" },
        { es: "azul", en: "blue" },
        { es: "verde", en: "green" },
      ]),
      teach("co-t5", "white", "blanco"),
      chooseEn("co-c4", "blanco", ["white", "black", "red", "yellow"], "white"),
      teach("co-t6", "black", "negro"),
      listen("co-l2", "negro", ["white", "black", "green", "blue"], "black"),
      chooseEs("co-c5", "white", ["amarillo", "blanco", "negro", "rojo"], "blanco"),
      match("co-m2", [
        { es: "amarillo", en: "yellow" },
        { es: "blanco", en: "white" },
        { es: "negro", en: "black" },
      ]),
    ],
  },
  {
    slug: "my-name",
    title: "My name",
    blurb: "Me llamo, soy, and how to ask a name.",
    steps: [
      teach("na-t1", "My name is", "Me llamo"),
      chooseEn("na-c1", "Me llamo", ["My name is", "I am", "Hello", "Thank you"], "My name is"),
      listen("na-l1", "Me llamo", ["My name is", "I am", "What is your name?", "Hello"], "My name is"),
      teach("na-t2", "I am", "Soy"),
      chooseEs("na-c2", "I am", ["Me llamo", "Soy"], "Soy"),
      teach("na-t3", "My name is Alex", "Me llamo Alex"),
      build("na-b1", "My name is Alex", ["Me", "llamo", "Alex"], ["Soy"], "Me llamo Alex"),
      teach("na-t4", "What is your name?", "¿Cómo te llamas?"),
      listen("na-l2", "¿Cómo te llamas?", ["What is your name?", "My name is Alex", "I am Alex", "Hello"], "What is your name?"),
      chooseEs("na-c3", "What is your name?", ["Me llamo", "Soy", "¿Cómo te llamas?", "Me llamo Alex"], "¿Cómo te llamas?"),
      teach("na-t5", "I am Alex", "Soy Alex"),
      build("na-b2", "I am Alex", ["Soy", "Alex"], ["Me", "llamo"], "Soy Alex"),
      remind("na-r1", [{ en: "Hello", es: "Hola" }]),
      teach("na-t6", "Hello, my name is Alex", "Hola, me llamo Alex"),
      build(
        "na-b3",
        "Hello, my name is Alex",
        ["Hola,", "me", "llamo", "Alex"],
        ["Soy"],
        "Hola, me llamo Alex",
      ),
    ],
  },
];

function norm(value: string): string {
  return value
    .normalize("NFC")
    .replace(/^[¿¡]+/, "")
    .replace(/[.,!?¿¡]+$/, "")
    .trim()
    .toLowerCase();
}

function remember(known: Set<string>, phrase: string) {
  known.add(norm(phrase));
  for (const part of phrase.split(/\s+/)) {
    const token = norm(part);
    if (token) known.add(token);
  }
}

function requirePhrase(known: Set<string>, phrase: string, where: string) {
  const token = norm(phrase);
  if (!token || !known.has(token)) {
    throw new Error(`${where} uses the phrase "${phrase}" before it is taught`);
  }
}

function requireToken(known: Set<string>, token: string, where: string) {
  const key = norm(token);
  if (!key || !known.has(key)) {
    throw new Error(`${where} uses "${token}" before it is taught`);
  }
}

function assertLessons(lessons: SpanishLesson[]) {
  for (const lesson of lessons) {
    const known = new Set<string>();
    for (const step of lesson.steps) {
      const where = `${lesson.slug}/${step.id}`;
      if (step.kind === "teach") {
        remember(known, step.es);
        continue;
      }
      if (step.kind === "remind") {
        for (const item of step.items) remember(known, item.es);
        continue;
      }
      if (step.kind === "choice") {
        if (step.promptLang === "es") requirePhrase(known, step.promptText, where);
        for (const choice of step.choices) {
          if (choice.lang === "es") requirePhrase(known, choice.text, where);
        }
        requirePhrase(known, step.speak, where);
        continue;
      }
      if (step.kind === "listen") {
        requirePhrase(known, step.speak, where);
        continue;
      }
      if (step.kind === "build") {
        for (const token of [...step.answer, ...step.extra]) requireToken(known, token, where);
        for (const token of step.speak.split(/\s+/)) requireToken(known, token, where);
        continue;
      }
      for (const pair of step.pairs) requirePhrase(known, pair.es, where);
    }
  }
}

assertLessons(spanishLessons);

export function getSpanishLesson(slug: string): SpanishLesson | undefined {
  return spanishLessons.find((lesson) => lesson.slug === slug);
}
