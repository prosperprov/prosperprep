/**
 * Prosper Prep Spanish — Unit 1 (Greetings).
 * Original beginner lessons. Mechanics only; not a third-party course.
 */

export type ChoiceExercise = {
  id: string;
  kind: "choice";
  prompt: string;
  detail: string;
  choices: string[];
  answer: string;
};

export type ListenExercise = {
  id: string;
  kind: "listen";
  prompt: string;
  /** Spoken with the browser Spanish voice. */
  speak: string;
  choices: string[];
  answer: string;
};

export type BuildExercise = {
  id: string;
  kind: "build";
  prompt: string;
  meaning: string;
  answer: string[];
  extra: string[];
};

export type MatchExercise = {
  id: string;
  kind: "match";
  prompt: string;
  pairs: { es: string; en: string }[];
};

export type SpanishExercise = ChoiceExercise | ListenExercise | BuildExercise | MatchExercise;

export type SpanishLesson = {
  slug: string;
  title: string;
  blurb: string;
  exercises: SpanishExercise[];
};

export const SPANISH_UNIT = {
  id: "unit-1-greetings",
  title: "Prosper Prep Spanish",
  unitLabel: "Unit 1 · Greetings",
  storageKey: "prosperprep-spanish-unit1",
} as const;

export const spanishLessons: SpanishLesson[] = [
  {
    slug: "hello-goodbye",
    title: "Hello and goodbye",
    blurb: "Hola, adiós, and hasta luego.",
    exercises: [
      {
        id: "hg-c1",
        kind: "choice",
        prompt: "Choose the Spanish.",
        detail: "Hello",
        choices: ["Hola", "Adiós", "Gracias", "Por favor"],
        answer: "Hola",
      },
      {
        id: "hg-c2",
        kind: "choice",
        prompt: "Choose the English.",
        detail: "Adiós",
        choices: ["Hello", "Goodbye", "Please", "Thank you"],
        answer: "Goodbye",
      },
      {
        id: "hg-l1",
        kind: "listen",
        prompt: "Listen, then choose the English.",
        speak: "Hola",
        choices: ["Hello", "Goodbye", "See you later", "Good morning"],
        answer: "Hello",
      },
      {
        id: "hg-m1",
        kind: "match",
        prompt: "Tap a Spanish word, then its English match.",
        pairs: [
          { es: "Hola", en: "Hello" },
          { es: "Adiós", en: "Goodbye" },
          { es: "Hasta luego", en: "See you later" },
        ],
      },
      {
        id: "hg-b1",
        kind: "build",
        prompt: "Tap the words in order.",
        meaning: "See you later",
        answer: ["Hasta", "luego"],
        extra: ["Hola", "Adiós"],
      },
      {
        id: "hg-c3",
        kind: "choice",
        prompt: "Choose the Spanish.",
        detail: "See you later",
        choices: ["Hasta luego", "Buenos días", "Hola", "Adiós"],
        answer: "Hasta luego",
      },
    ],
  },
  {
    slug: "morning-and-night",
    title: "Morning and night",
    blurb: "Good morning, good afternoon, and good night.",
    exercises: [
      {
        id: "mn-c1",
        kind: "choice",
        prompt: "Choose the Spanish.",
        detail: "Good morning",
        choices: ["Buenos días", "Buenas tardes", "Buenas noches", "Hasta luego"],
        answer: "Buenos días",
      },
      {
        id: "mn-c2",
        kind: "choice",
        prompt: "Choose the English.",
        detail: "Buenas noches",
        choices: ["Good morning", "Good afternoon", "Good night", "Hello"],
        answer: "Good night",
      },
      {
        id: "mn-l1",
        kind: "listen",
        prompt: "Listen, then choose the English.",
        speak: "Buenos días",
        choices: ["Good morning", "Good night", "Good afternoon", "Goodbye"],
        answer: "Good morning",
      },
      {
        id: "mn-m1",
        kind: "match",
        prompt: "Tap a Spanish phrase, then its English match.",
        pairs: [
          { es: "Buenos días", en: "Good morning" },
          { es: "Buenas tardes", en: "Good afternoon" },
          { es: "Buenas noches", en: "Good night" },
        ],
      },
      {
        id: "mn-b1",
        kind: "build",
        prompt: "Tap the words in order.",
        meaning: "Good morning",
        answer: ["Buenos", "días"],
        extra: ["Buenas", "noches"],
      },
      {
        id: "mn-c3",
        kind: "choice",
        prompt: "Choose the Spanish.",
        detail: "Good afternoon",
        choices: ["Buenas tardes", "Buenos días", "Buenas noches", "Hola"],
        answer: "Buenas tardes",
      },
    ],
  },
  {
    slug: "please-and-thanks",
    title: "Please and thank you",
    blurb: "Por favor, gracias, and de nada.",
    exercises: [
      {
        id: "pt-c1",
        kind: "choice",
        prompt: "Choose the Spanish.",
        detail: "Please",
        choices: ["Por favor", "Gracias", "De nada", "Adiós"],
        answer: "Por favor",
      },
      {
        id: "pt-c2",
        kind: "choice",
        prompt: "Choose the English.",
        detail: "Gracias",
        choices: ["Please", "Thank you", "You are welcome", "Hello"],
        answer: "Thank you",
      },
      {
        id: "pt-l1",
        kind: "listen",
        prompt: "Listen, then choose the English.",
        speak: "Gracias",
        choices: ["Thank you", "Please", "You are welcome", "Goodbye"],
        answer: "Thank you",
      },
      {
        id: "pt-m1",
        kind: "match",
        prompt: "Tap a Spanish phrase, then its English match.",
        pairs: [
          { es: "Por favor", en: "Please" },
          { es: "Gracias", en: "Thank you" },
          { es: "De nada", en: "You are welcome" },
        ],
      },
      {
        id: "pt-b1",
        kind: "build",
        prompt: "Tap the words in order.",
        meaning: "You are welcome",
        answer: ["De", "nada"],
        extra: ["Por", "favor"],
      },
      {
        id: "pt-l2",
        kind: "listen",
        prompt: "Listen, then choose the English.",
        speak: "Por favor",
        choices: ["Please", "Thank you", "You are welcome", "Good night"],
        answer: "Please",
      },
    ],
  },
  {
    slug: "yes-and-no",
    title: "Yes and no",
    blurb: "Sí, no, and short polite replies.",
    exercises: [
      {
        id: "yn-c1",
        kind: "choice",
        prompt: "Choose the Spanish.",
        detail: "Yes",
        choices: ["Sí", "No", "Hola", "Gracias"],
        answer: "Sí",
      },
      {
        id: "yn-c2",
        kind: "choice",
        prompt: "Choose the English.",
        detail: "No",
        choices: ["Yes", "No", "Please", "Hello"],
        answer: "No",
      },
      {
        id: "yn-l1",
        kind: "listen",
        prompt: "Listen, then choose the English.",
        speak: "Sí",
        choices: ["Yes", "No", "Please", "Thank you"],
        answer: "Yes",
      },
      {
        id: "yn-m1",
        kind: "match",
        prompt: "Tap a Spanish phrase, then its English match.",
        pairs: [
          { es: "Sí", en: "Yes" },
          { es: "No", en: "No" },
          { es: "Claro", en: "Of course" },
        ],
      },
      {
        id: "yn-b1",
        kind: "build",
        prompt: "Tap the words in order.",
        meaning: "Yes, please",
        answer: ["Sí,", "por", "favor"],
        extra: ["No,", "gracias"],
      },
      {
        id: "yn-b2",
        kind: "build",
        prompt: "Tap the words in order.",
        meaning: "No, thank you",
        answer: ["No,", "gracias"],
        extra: ["Sí,", "por", "favor"],
      },
    ],
  },
  {
    slug: "numbers-1-5",
    title: "Numbers 1 to 5",
    blurb: "Uno, dos, tres, cuatro, and cinco.",
    exercises: [
      {
        id: "n1-c1",
        kind: "choice",
        prompt: "Choose the Spanish.",
        detail: "3",
        choices: ["uno", "dos", "tres", "cuatro"],
        answer: "tres",
      },
      {
        id: "n1-c2",
        kind: "choice",
        prompt: "Choose the number.",
        detail: "cinco",
        choices: ["3", "4", "5", "2"],
        answer: "5",
      },
      {
        id: "n1-l1",
        kind: "listen",
        prompt: "Listen, then choose the number.",
        speak: "dos",
        choices: ["1", "2", "3", "4"],
        answer: "2",
      },
      {
        id: "n1-m1",
        kind: "match",
        prompt: "Tap a Spanish number, then its match.",
        pairs: [
          { es: "uno", en: "1" },
          { es: "dos", en: "2" },
          { es: "tres", en: "3" },
        ],
      },
      {
        id: "n1-b1",
        kind: "build",
        prompt: "Tap the words in order.",
        meaning: "number four",
        answer: ["número", "cuatro"],
        extra: ["cinco", "uno"],
      },
      {
        id: "n1-l2",
        kind: "listen",
        prompt: "Listen, then choose the number.",
        speak: "cinco",
        choices: ["3", "4", "5", "1"],
        answer: "5",
      },
    ],
  },
  {
    slug: "numbers-6-10",
    title: "Numbers 6 to 10",
    blurb: "Seis, siete, ocho, nueve, and diez.",
    exercises: [
      {
        id: "n2-c1",
        kind: "choice",
        prompt: "Choose the Spanish.",
        detail: "7",
        choices: ["seis", "siete", "ocho", "nueve"],
        answer: "siete",
      },
      {
        id: "n2-c2",
        kind: "choice",
        prompt: "Choose the number.",
        detail: "diez",
        choices: ["8", "9", "10", "6"],
        answer: "10",
      },
      {
        id: "n2-l1",
        kind: "listen",
        prompt: "Listen, then choose the number.",
        speak: "ocho",
        choices: ["6", "8", "9", "10"],
        answer: "8",
      },
      {
        id: "n2-m1",
        kind: "match",
        prompt: "Tap a Spanish number, then its match.",
        pairs: [
          { es: "seis", en: "6" },
          { es: "nueve", en: "9" },
          { es: "diez", en: "10" },
        ],
      },
      {
        id: "n2-b1",
        kind: "build",
        prompt: "Tap the words in order.",
        meaning: "number eight",
        answer: ["número", "ocho"],
        extra: ["siete", "diez"],
      },
      {
        id: "n2-c3",
        kind: "choice",
        prompt: "Choose the Spanish.",
        detail: "6",
        choices: ["seis", "siete", "ocho", "diez"],
        answer: "seis",
      },
    ],
  },
  {
    slug: "colors",
    title: "Colors",
    blurb: "Red, blue, green, yellow, white, and black.",
    exercises: [
      {
        id: "co-c1",
        kind: "choice",
        prompt: "Choose the Spanish.",
        detail: "red",
        choices: ["rojo", "azul", "verde", "amarillo"],
        answer: "rojo",
      },
      {
        id: "co-c2",
        kind: "choice",
        prompt: "Choose the English.",
        detail: "azul",
        choices: ["red", "blue", "green", "yellow"],
        answer: "blue",
      },
      {
        id: "co-l1",
        kind: "listen",
        prompt: "Listen, then choose the English.",
        speak: "verde",
        choices: ["green", "red", "white", "black"],
        answer: "green",
      },
      {
        id: "co-m1",
        kind: "match",
        prompt: "Tap a Spanish color, then its English match.",
        pairs: [
          { es: "rojo", en: "red" },
          { es: "azul", en: "blue" },
          { es: "amarillo", en: "yellow" },
        ],
      },
      {
        id: "co-b1",
        kind: "build",
        prompt: "Tap the words in order.",
        meaning: "the color white",
        answer: ["color", "blanco"],
        extra: ["negro", "verde"],
      },
      {
        id: "co-l2",
        kind: "listen",
        prompt: "Listen, then choose the English.",
        speak: "negro",
        choices: ["black", "white", "green", "yellow"],
        answer: "black",
      },
    ],
  },
  {
    slug: "my-name",
    title: "My name",
    blurb: "Me llamo, soy, and how to ask a name.",
    exercises: [
      {
        id: "na-c1",
        kind: "choice",
        prompt: "Choose the Spanish.",
        detail: "My name is",
        choices: ["Me llamo", "Soy", "Hola", "Gracias"],
        answer: "Me llamo",
      },
      {
        id: "na-c2",
        kind: "choice",
        prompt: "Choose the English.",
        detail: "Soy Alex",
        choices: ["My name is Alex", "I am Alex", "Hello Alex", "Thank you, Alex"],
        answer: "I am Alex",
      },
      {
        id: "na-l1",
        kind: "listen",
        prompt: "Listen, then choose the English.",
        speak: "Me llamo Alex",
        choices: ["My name is Alex", "I am Alex", "Hello, Alex", "See you, Alex"],
        answer: "My name is Alex",
      },
      {
        id: "na-b1",
        kind: "build",
        prompt: "Tap the words in order.",
        meaning: "My name is Alex",
        answer: ["Me", "llamo", "Alex"],
        extra: ["Soy", "Hola"],
      },
      {
        id: "na-b2",
        kind: "build",
        prompt: "Tap the words in order.",
        meaning: "I am Alex",
        answer: ["Soy", "Alex"],
        extra: ["Me", "llamo"],
      },
      {
        id: "na-l2",
        kind: "listen",
        prompt: "Listen, then choose the English.",
        speak: "¿Cómo te llamas?",
        choices: ["What is your name?", "My name is Alex", "I am Alex", "See you later"],
        answer: "What is your name?",
      },
      {
        id: "na-c3",
        kind: "choice",
        prompt: "Choose the Spanish.",
        detail: "What is your name?",
        choices: ["¿Cómo te llamas?", "Me llamo Alex", "Soy Alex", "Buenos días"],
        answer: "¿Cómo te llamas?",
      },
    ],
  },
];

export function getSpanishLesson(slug: string): SpanishLesson | undefined {
  return spanishLessons.find((lesson) => lesson.slug === slug);
}
