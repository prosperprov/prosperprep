/**
 * Unique Independent-practice banks for Grade 6 ELA year path.
 * Returns 6 {q,a} items keyed by unit kind + lesson title.
 */

function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function pick(arr, seed) {
  return arr[hash(String(seed)) % arr.length];
}

const MENTORS = {
  lit: `Maya paused at the mailbox. The envelope was thin, but her name looked official. She did not open it on the porch. Inside, she set it on the kitchen table and washed her hands first, as if cleanliness could calm the shaking in her fingers. When she finally slid a thumb under the flap, she found three sentences and a deadline. Hope, she realized, could be heavy.`,
  info: `Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose rocks. Rangers say most injuries happen when people rush the last half mile back to the parking lot.`,
  longLit: `Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The second settled through the net.`,
  longInfo: `School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.`,
};

/** @returns {{q:string,a:string}[]} */
export function elaIndepPractice(unit, lessonTitle, seed) {
  const kind = unit.kind;
  if (kind === "vocab") return vocabPractice(lessonTitle, seed);
  if (kind === "grammar") return grammarPractice(lessonTitle, seed, unit.n);
  if (kind === "reading-long") return readingPractice(lessonTitle, seed, true);
  return readingPractice(lessonTitle, seed, false);
}

function six(gen) {
  const out = [];
  for (let i = 1; i <= 6; i++) out.push(gen(i));
  return out;
}

/* ——— Vocabulary (Unit 1) ——— */
const VOCAB_ITEMS = {
  "What Context Clues Do": [
    {
      q: `In “The speaker’s **candid** apology — honest and unpolished — surprised the room,” what does *candid* most nearly mean? Underline the clue words.`,
      a: `Honest / frank / straightforward. Clue: “honest and unpolished” (definition/restatement).`,
    },
    {
      q: `“Unlike her **verbose** partner, Nina gave a two-sentence update.” Infer *verbose* and name the clue type.`,
      a: `Wordy / talkative. Contrast clue: “Unlike… two-sentence.”`,
    },
    {
      q: `Write an original sentence using *fragile* with a clear definition clue. Mark the clue.`,
      a: `Sample: “The fragile vase — easily broken — sat on a high shelf.” Clue = dash definition.`,
    },
    {
      q: `Which clue helps more in “He felt **exhausted** after the double practice”? Nearby synonym or contrast? Invent a stronger rewrite with an explicit clue.`,
      a: `Current sentence has weak context. Stronger: “He felt exhausted, completely worn out, after double practice.”`,
    },
    {
      q: `Circle the unfamiliar word and list two neighbor words that help: “The **arid** field, dry and cracked, needed rain.”`,
      a: `*arid*; clues “dry and cracked.” Meaning: very dry.`,
    },
    {
      q: `Partner trap: Write a sentence where *bright* could mean “smart” OR “shiny.” Then add one clue that locks the meaning to “smart.”`,
      a: `Sample lock: “Her bright solution — clever and new — fixed the schedule.”`,
    },
  ],
  "Definition and Restatement Clues": [
    {
      q: `Identify the definition clue: “A **habitat**, or natural home, must provide food and shelter.” What does *habitat* mean?`,
      a: `Natural home. Clue: “or natural home.”`,
    },
    {
      q: `Rewrite with a dash definition: “The **itinerary** listed every stop.”`,
      a: `Sample: “The itinerary — a planned list of stops — listed every stop.”`,
    },
    {
      q: `Find restatement: “She was **elated**, filled with joy, when the letter arrived.” Mark both the target word and restatement.`,
      a: `*elated* = filled with joy.`,
    },
    {
      q: `Which is a synonym clue vs a full definition? “**Rapid** (fast) footsteps” vs “A **polygon** is a closed shape with straight sides.”`,
      a: `First: synonym in parentheses. Second: full definition.`,
    },
    {
      q: `Invent a school sentence for *deadline* that includes a restatement clue.`,
      a: `Sample: “The deadline, the final day to submit, is Friday.”`,
    },
    {
      q: `A student underlines “letter” as the definition of *missive* in “The missive arrived.” Why is that insufficient? Fix the sentence.`,
      a: `“Letter” isn’t even in the sentence. Fix: “The missive — a formal letter — arrived.”`,
    },
  ],
  "Contrast and Antonym Clues": [
    {
      q: `“The trail looked **perilous**; however, the guide said it was safe for beginners.” What does *perilous* suggest, and what signal word helps?`,
      a: `Dangerous. Signal: however (contrast with “safe”).`,
    },
    {
      q: `Complete with an antonym clue: “Unlike the **____** cafeteria, the library stayed quiet.” Choose a precise word and defend it.`,
      a: `Sample: *chaotic* / *noisy*. Contrast with “quiet.”`,
    },
    {
      q: `Name the contrast signal and meaning: “He expected praise; instead he received a **stern** warning.”`,
      a: `Signal: instead. *stern* ≈ serious/harsh (opposite of praise).`,
    },
    {
      q: `Write a sentence with *scarce* using *unlike* or *but* so a reader can infer the meaning.`,
      a: `Sample: “Unlike last year’s plentiful rain, water is scarce this summer.”`,
    },
    {
      q: `Which pair shows real contrast clues? (A) big/large (B) ancient/modern. Use the better pair in an original sentence with *however*.`,
      a: `(B). Sample: “The building looked ancient; however, the wiring was modern.”`,
    },
    {
      q: `Explain why “She was happy, and she was **ecstatic**” is a weak contrast clue for *ecstatic*. Improve it.`,
      a: `And-synonym, not contrast. Improve with however/unlike or a definition.`,
    },
  ],
  "Example Clues and Lists": [
    {
      q: `“**Percussion** instruments — drums, cymbals, and triangles — kept the beat.” What does *percussion* mean here?`,
      a: `Instruments played by striking; examples list drums/cymbals/triangles.`,
    },
    {
      q: `Add an example clue list for *renewable resources* in one sentence.`,
      a: `Sample: “Renewable resources, such as wind, sunlight, and timber grown to replace what is cut, can be replenished.”`,
    },
    {
      q: `Infer *citrus*: “She packed citrus fruit: oranges, lemons, and limes.” What shared trait do the examples reveal?`,
      a: `Acidic/juicy fruits of that family; examples show category membership.`,
    },
    {
      q: `Is “for example” always enough? Critique: “He likes **sports**, for example.” Improve with a clearer list.`,
      a: `Too vague. Better: “He likes sports — for example, soccer, track, and swimming.”`,
    },
    {
      q: `Write a sentence defining *precipitation* using an example list (not a dictionary dump).`,
      a: `Sample: “Precipitation such as rain, snow, and sleet fell overnight.”`,
    },
    {
      q: `Partner task: Hide a target academic word in a sentence with three examples; a partner must name the category word’s meaning.`,
      a: `Accept any clear category+examples sentence; meaning must match examples.`,
    },
  ],
  "Greek and Latin Roots I": [
    {
      q: `The root *spect* means “look.” Unpack *inspect* and *spectator*. How does each use “look”?`,
      a: `Inspect: look into carefully. Spectator: one who looks/watches.`,
    },
    {
      q: `Root *port* = carry. What do *transport* and *portable* literally suggest? Use each in a school sentence.`,
      a: `Transport: carry across. Portable: able to be carried. Sentences will vary.`,
    },
    {
      q: `Root *dict* = speak/say. Infer *predict* and *contradict* from word parts + a tiny context sentence you invent.`,
      a: `Predict: say before. Contradict: speak against. Context sentences will vary.`,
    },
    {
      q: `Root *scrib/script* = write. Which fits: “The doctor’s ____ was hard to read” — *script* or *spectacle*? Why?`,
      a: `*script* (writing). *spectacle* is from spect (look).`,
    },
    {
      q: `Build a new word with *spect* or *port* + a familiar prefix; define it from parts, then check if it is a real word.`,
      a: `Samples: *respect* (look back/regard), *export* (carry out). Honesty about real vs invented is fine if parts are explained.`,
    },
    {
      q: `Sort: *dictionary*, *portrait*, *description*, *import* — which roots (dict/port/scrib/spect) drive each?`,
      a: `dictionary→dict; portrait→port (or trait history—but treat as port “carry image” carefully) / prefer: portrait often taught with trait; accept dict for dictionary, scrib for description, port for import; portrait may be flagged as trick — *portrait*≈depicted likeness (related historically to portray). Prefer scoring: dictionary=dict; description=scrib; import=port; portrait=discuss (not spect).`,
    },
  ],
  "Prefixes That Flip Meaning": [
    {
      q: `Add *un-* or *dis-* to flip *fair* and *agree*. Write both new words in sentences about a group project.`,
      a: `unfair; disagree. Sentences will vary; prefixes reverse meaning.`,
    },
    {
      q: `Explain *reheat* and *preheat* — same root idea “heat,” different prefixes. How do meanings differ?`,
      a: `Reheat: heat again. Preheat: heat before (cooking).`,
    },
    {
      q: `Choose *mis-* or *un-* : “She ____read the schedule and went to the wrong room.” Explain.`,
      a: `misread — mis- = wrongly.`,
    },
    {
      q: `Build: *view* + *re-* and *view* + *pre-*. Definitions from parts + one original sentence each.`,
      a: `review=view again; preview=view before.`,
    },
    {
      q: `Which prefix fits “not possible”: *im-*, *re-*, or *pre-*? Write *impossible* and unpack.`,
      a: `im- + possible; im-/in- often mean not.`,
    },
    {
      q: `Error hunt: A student says *re-* always means “again,” so *respect* means “spect again.” Correct the misconception.`,
      a: `Prefixes have histories; *respect* isn’t “look again” in modern use the way *replay* is. Teach: check meaning in context, not only parts.`,
    },
  ],
  "Suffixes and Part of Speech": [
    {
      q: `Change *educate* → noun with *-tion*. Use the noun in a sentence about Prosper Prep.`,
      a: `education. Sentence will vary.`,
    },
    {
      q: `Is *joyful* an adjective or adverb? Use *-ly* to build an adverb from *joyful*’s base pattern (*joyfully*) and modify a verb.`,
      a: `joyful=adjective; joyfully=adverb (e.g., “cheered joyfully”).`,
    },
    {
      q: `Add *-able* to *read* and explain the new part of speech and meaning.`,
      a: `readable (adjective): able to be read.`,
    },
    {
      q: `Sort by job: *courageous*, *dangerously*, *creation*. Label noun/adjective/adverb.`,
      a: `courageous=adj; dangerously=adv; creation=noun.`,
    },
    {
      q: `Write two sentences: one with *nervous* (adj) and one with *nervously* (adv). Underline the word each modifies.`,
      a: `Adj modifies noun/pronoun; adv modifies verb/adj/adv. Samples will vary.`,
    },
    {
      q: `Why does “She ran quick” need a suffix fix for formal writing? Provide the revision.`,
      a: `Need adverb *quickly* to modify *ran*.`,
    },
  ],
};

function vocabPractice(title, seed) {
  const bank = VOCAB_ITEMS[title];
  if (bank && bank.length >= 6) return bank.slice(0, 6);
  // fallback unique-ish from title words
  return six((i) => {
    const word = pick(
      ["precise", "reluctant", "abundant", "sparse", "solemn", "brisk", "vivid", "scarce"],
      seed + title + i
    );
    const clue = pick(["definition dash", "however-contrast", "such as examples", "synonym in commas"], seed + i);
    return {
      q: `Problem ${i} (${title}): Invent a Grade 6 sentence that teaches the word *${word}* using a ${clue} clue. Underline the clue and write the meaning.`,
      a: `Meaning of *${word}* must match the clue type (${clue}); sentence grammatical and school-appropriate.`,
    };
  });
}

/* ——— Reading ——— */
function readingPractice(title, seed, longForm) {
  const t = title.toLowerCase();
  const passage = longForm
    ? pick([MENTORS.longLit, MENTORS.longInfo], seed + "p")
    : pick([MENTORS.lit, MENTORS.info], seed + "p");
  const shortCite = passage.slice(0, 90).replace(/\n/g, " ") + "…";

  return six((i) => {
    if (t.includes("topic vs main") || t.includes("main idea")) {
      const prompts = [
        {
          q: `Read: “${shortCite}” Is “mail” or “nervous hope about an official letter” closer to a main idea for the Maya paragraph? Write a full main-idea sentence.`,
          a: `Topic ≠ main idea. Strong MI: Maya’s official letter brings heavy, nervous hope. “Mail” is only a topic label.`,
        },
        {
          q: `Turn the topic “hiking safety” into a main-idea sentence using the Tyler trail passage ideas (markers, slowing down, injuries).`,
          a: `Sample: Hikers who slow at muddy markers protect the trail and reduce injuries, especially on the last half mile.`,
        },
        {
          q: `Which is a topic label, not a main idea? (A) Scholarship pressure (B) Jordan relies on study-hall breathing to handle scholarship-night nerves. Explain.`,
          a: `(A) topic. (B) complete main-idea style claim.`,
        },
        {
          q: `Write a weak one-word “main idea” for the Maya passage, then upgrade it to a complete sentence that covers the whole beat (mailbox → letter → heavy hope).`,
          a: `Weak: “hope/letter.” Strong: complete sentence covering delay, letter contents, heavy hope.`,
        },
        {
          q: `A student says the main idea of the trail text is “plants.” Why is that incomplete? Supply a better MI.`,
          a: `“Plants” is a detail/topic fragment. Better MI includes slowing at markers to protect path/plants and safety.`,
        },
        {
          q: `Compare: topic “school schedules” vs a main idea about biology vs logistics from the start-times text. Write both.`,
          a: `Topic: school schedules. MI sample: Start-time debates pit student sleep biology against family/work logistics.`,
        },
      ];
      return prompts[i - 1];
    }

    if (t.includes("supporting details")) {
      return pick(
        [
          {
            q: `Main idea: Careful hikers protect trails. Which detail supports it better — wooden signs on muddy sections, or “East Texas is pretty”? Explain.`,
            a: `Wooden signs/markers detail supports the MI; “pretty” is off-focus.`,
          },
          {
            q: `List two details from the Maya passage that support “Hope can feel heavy.” Cross out one unrelated invented detail.`,
            a: `Thin official envelope; shaking fingers; three sentences + deadline. Cross out anything off-plot.`,
          },
          {
            q: `For MI “Jordan manages pressure with practiced habits,” choose a supporting detail from the scholarship-night excerpt and explain the link.`,
            a: `Study-hall breathing / free-throw routine — connects habit to pressure management.`,
          },
          {
            q: `Sort: Detail vs decoration — “most injuries on the last half mile” vs “the parking lot exists.”`,
            a: `Injuries detail supports caution MI; parking lot alone is weak decoration.`,
          },
          {
            q: `Write one supporting detail sentence you could add to the trail paragraph that stays on the MI of slowing down for safety.`,
            a: `Any on-focus safety/slowing detail; reject random scenery.`,
          },
          {
            q: `A partner picks “washed her hands” as the key support for “official letter matters.” Help them choose a stronger detail and justify.`,
            a: `Stronger: official name/envelope; three sentences and a deadline; heavy hope realization.`,
          },
        ],
        seed + "sd" + i
      );
    }

    if (t.includes("summar")) {
      return {
        q: `Write a 2–3 sentence objective summary of this excerpt (no opinions): “${passage.slice(0, 220).replace(/\n/g, " ")}…” Drop trivia; keep order.`,
        a: `Summary must be objective, ordered, cover central beats, omit minor color unless essential.`,
      };
    }

    if (t.includes("inferring character") || t.includes("motivation")) {
      return {
        q: `Using Maya or Jordan (depending on excerpt), infer a motivation in one sentence and quote/paraphrase one action or line that supports it. Excerpt start: “${shortCite}”`,
        a: `Inference + specific evidence (e.g., Maya delays opening → anxiety/importance; Jordan uses study-hall breath → seeks calm).`,
      };
    }

    if (t.includes("explicit evidence") || t.includes("finding explicit")) {
      return {
        q: `Question: What do rangers say about injuries? Answer with a paraphrase AND a short quotation from the informational trail text ideas.`,
        a: `Paraphrase + quote idea: most injuries happen when people rush the last half mile.`,
      };
    }

    if (t.includes("central idea")) {
      return {
        q: `State the central idea of the informational excerpt in one complete sentence, then list two key details that develop it.`,
        a: `CI + two relevant details (markers/slowing/injuries OR biology vs logistics).`,
      };
    }

    if (t.includes("word choice") || t.includes("connotation")) {
      return {
        q: `Compare *thin envelope* vs *flimsy envelope* for the Maya opening. Which connotation fits “official but anxiety-inducing,” and why?`,
        a: `*Thin* can suggest official lightness; *flimsy* adds weakness/cheapness — shifts tone.`,
      };
    }

    if (t.includes("figurative")) {
      return {
        q: `“Hope… could be heavy” (Maya) and “banners whispered” (Jordan). Name each device (metaphor/personification) and explain the effect in one sentence each.`,
        a: `Heavy hope ≈ metaphor (weight of feeling). Banners whispered ≈ personification (mood/pressure).`,
      };
    }

    if (t.includes("text structure") || t.includes("structure signals")) {
      return {
        q: `Does the start-times excerpt lean cause/effect, compare/contrast, or problem/solution? Cite one signal phrase and justify.`,
        a: `Compare/contrast (biology vs logistics) with problem framing; signals like “tug-of-war,” “so,” “often need.”`,
      };
    }

    if (t.includes("point of view")) {
      return {
        q: `Is the Maya paragraph first- or third-person? How would a first-person rewrite of the first two sentences change what readers know?`,
        a: `Third-person. First-person would filter through Maya’s “I” and possibly hide/show thoughts differently.`,
      };
    }

    if (t.includes("tone vs mood")) {
      return {
        q: `For the scholarship-night excerpt, suggest a tone word for the narrator’s attitude and a mood word for the reader’s feeling. They must not be identical — explain.`,
        a: `Tone (author/narrator attitude) vs mood (reader feeling) — e.g., calm coaching tone vs tense mood.`,
      };
    }

    if (t.includes("cer") || t.includes("claim, evidence")) {
      return {
        q: `Write a mini-CER: Claim about why Maya waits to open the letter. Evidence (detail). Reasoning (so what?).`,
        a: `C+E+R all present; reasoning bridges evidence to claim.`,
      };
    }

    if (t.includes("comparing two texts") || t.includes("paired") || t.includes("comparing")) {
      return {
        q: `Compare how the trail text and the start-times text each use a “problem” frame. One similarity, one difference, in complete sentences.`,
        a: `Both frame real-world tensions; differ in topic (safety vs schedules) and evidence types.`,
      };
    }

    if (t.includes("evaluating an argument") || t.includes("fact, opinion") || t.includes("loaded")) {
      return {
        q: `Label fact vs opinion: (1) “Many middle-school students naturally fall asleep later.” (2) “Early bells are unfair.” Then rewrite (2) as a checkable claim.`,
        a: `(1) factual claim needing evidence; (2) opinion/loaded. Rewrite: measurable effects on sleep/attendance.`,
      };
    }

    if (t.includes("visuals") || t.includes("synthesizing") || t.includes("integration") || t.includes("media")) {
      return {
        q: `Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.`,
        a: `Visual would quantify “last half mile” risk and support the slow-down claim with data.`,
      };
    }

    if (t.includes("stamina") || t.includes("tracking multiple") || t.includes("annotation") || t.includes("long-passage") || t.includes("craft") || t.includes("structure map") || t.includes("capstone") || t.includes("dbq") || t.includes("case study") || t.includes("poetry") || t.includes("speech") || t.includes("feature") || t.includes("synthesis") || t.includes("check")) {
      return {
        q: `Long-passage skill (${title}), item ${i}: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.\n\n> ${passage.slice(0, 320)}${passage.length > 320 ? "…" : ""}`,
        a: `Annotation marks + sentence answer with specific phrase/line pointer aligned to “${title}.”`,
      };
    }

    // generic but still passage-tied unique per i
    const angles = [
      `State a main takeaway`,
      `Quote the most important phrase`,
      `Infer a feeling/motivation`,
      `Name a craft move`,
      `Ask a follow-up text-dependent question`,
      `Write a one-sentence summary of the final beat`,
    ];
    return {
      q: `${angles[i - 1]} for “${title}” using this excerpt:\n\n> ${passage.slice(0, 260)}${passage.length > 260 ? "…" : ""}\n\nAnswer in a complete sentence with evidence.`,
      a: `Complete sentence + evidence pointer; aligned to ${angles[i - 1].toLowerCase()}.`,
    };
  });
}

/* ——— Grammar ——— */
function grammarPractice(title, seed, unitN) {
  const t = title.toLowerCase();
  return six((i) => {
    const bank = grammarBank(t, i, seed, unitN);
    return bank;
  });
}

function grammarBank(t, i, seed, unitN) {
  const sentences = [
    "the team of scholars present their cer paragraphs after advisory",
    "maya and jordan reviews the scholarship checklist on friday",
    "everyone brought their laptop to the east texas field trip",
    "the news are on the library screen before homeroom",
    "him and i finished the outline before practice",
    "the class are debating start times with surprising calm",
  ];
  const s = pick(sentences, seed + t + i);

  if (t.includes("common and proper")) {
    const items = [
      { q: `Capitalize correctly: “we visited tyler, texas, on a saturday in march.” List each proper noun you capitalize.`, a: `Tyler, Texas, Saturday, March.` },
      { q: `Which should stay lowercase in running text: *math* or *English*? Why?`, a: `*math* common; *English* language name = proper.` },
      { q: `Fix: “aunt kayla works at prosper preparatory.”`, a: `Aunt Kayla; Prosper Preparatory (as institution name).` },
      { q: `Sort: lake, Lake Palestine, school, Prosper Prep — common vs proper.`, a: `lake/school common; Lake Palestine / Prosper Prep proper.` },
      { q: `Write two sentences: one with a common noun *coach*, one with a proper name for a coach.`, a: `Samples will vary; proper name capitalized.` },
      { q: `Error hunt: “We study Biology and history.” Fix only what Grade 6 school-subject rules need (unless course title).`, a: `Usually *biology* and *history* lowercase unless official course titles.` },
    ];
    return items[i - 1];
  }
  if (t.includes("concrete and abstract")) {
    return {
      q: `Label concrete or abstract: courage, backpack, deadline, sneaker, fairness, gym. Then write a sentence using one abstract noun precisely.`,
      a: `Abstract: courage, deadline, fairness. Concrete: backpack, sneaker, gym. Sentence will vary.`,
    };
  }
  if (t.includes("plural") || t.includes("irregular")) {
    return {
      q: `Form plurals: box, child, tomato, deer, thesis (Grade-friendly: use *theses* or rewrite). Then use two in a sentence about school.`,
      a: `boxes, children, tomatoes, deer, theses. Sentences will vary.`,
    };
  }
  if (t.includes("possessive")) {
    return {
      q: `Rewrite with correct possessives: “the students essays” (plural owners) and “James book” (singular owner ending in s — choose a clear style and stay consistent).`,
      a: `students’ essays; James’s book (or James’ if taught that style — stay consistent).`,
    };
  }
  if (t.includes("collective")) {
    return {
      q: `Choose the verb: “The class (is/are) ready” when acting as one unit. Then revise “The team are wearing different jerseys” for meaning.`,
      a: `Unit→ is. Individuals→ are wearing different jerseys is acceptable for individuals acting separately.`,
    };
  }
  if (t.includes("nouns in strong") || t.includes("precise")) {
    return {
      q: `Replace vague nouns: “The thing about the stuff was good.” Write two precise revisions for a scholarship paragraph.`,
      a: `Any precise nouns (essay, evidence, mentor feedback, etc.).`,
    };
  }
  if (t.includes("subject and object pronoun")) {
    return {
      q: `Fix pronouns: “Him and I went” / “Between you and I” / “Mom called Jordan and I.” Explain each fix.`,
      a: `He and I; between you and me; Jordan and me. Test by removing the other noun.`,
    };
  }
  if (t.includes("possessive pronouns vs") || t.includes("its/it's") || t.includes("contractions")) {
    return {
      q: `Fill: ____ going to rain / the dog wagged ____ tail / ____ project is due (your/you’re). Then fix: “Its’ okay.”`,
      a: `It’s; its; Your. “It’s okay” (no its’).`,
    };
  }
  if (t.includes("pronoun-antecedent") || t.includes("agreement")) {
    return {
      q: `Fix agreement: “Each scholar submitted their outline late.” Offer two acceptable Grade 6 revisions (singular generic vs rephrase plural).`,
      a: `Each scholar submitted his or her outline / All scholars submitted their outlines / use the student’s name.`,
    };
  }
  if (t.includes("vague pronoun")) {
    return {
      q: `Revise for clarity: “Jordan told Malik that he won.” and “This proves it.” Replace vague pronouns with precise nouns/clauses.`,
      a: `Specify who won; replace This/it with named claim/evidence.`,
    };
  }
  if (t.includes("intensive") || t.includes("reflexive")) {
    return {
      q: `Correct or keep: “Myself will present.” / “I wrote it myself.” / “She bought tickets for Maya and myself.” Explain.`,
      a: `I will present; myself OK intensive; Maya and me (not myself as object without I subject).`,
    };
  }
  if (t.includes("action vs linking")) {
    return {
      q: `Label action or linking: “The soup smells amazing.” “The ranger smells the smoke.” “They were ready.”`,
      a: `linking; action; linking (were).`,
    };
  }
  if (t.includes("simple verb tenses") || (t.includes("tense") && t.includes("simple"))) {
    return {
      q: `Rewrite in past, then future: “The hikers follow the markers.” Keep meaning clear.`,
      a: `followed; will follow.`,
    };
  }
  if (t.includes("subject-verb agreement")) {
    return {
      q: `Choose verbs: “The list of rules (is/are) long.” “Maya and Jordan (run/runs).” “Everybody (want/wants) a turn.”`,
      a: `is; run; wants.`,
    };
  }
  if (t.includes("helping verbs")) {
    return {
      q: `Underline the full verb phrase: “The students have been revising carefully.” Name the helping verbs and main verb.`,
      a: `have been revising — helping have/been; main revising.`,
    };
  }
  if (t.includes("consistent tense")) {
    return {
      q: `Fix tense drift: “Maya opened the letter and washes her hands, then she will scream.” Choose a consistent past narration.`,
      a: `opened… washed… screamed (or consistent future — but prefer past narrative).`,
    };
  }
  if (t.includes("active voice")) {
    return {
      q: `Rewrite active: “The essay was praised by the teacher.” When might passive still be useful? One sentence.`,
      a: `The teacher praised the essay. Passive useful when actor unknown/unimportant.`,
    };
  }
  if (t.includes("adjectives modify") || (t.includes("what adjectives") && !t.includes("adverb"))) {
    return {
      q: `Add two precise adjectives to “The envelope sat on the table” without stacking more than two before a noun.`,
      a: `Samples: thin official envelope / sealed cream envelope — avoid overloaded stacks.`,
    };
  }
  if (t.includes("what adverbs") || t.includes("adverbs modify")) {
    return {
      q: `Modify the verb and an adjective: “Jordan breathed.” → add an adverb; then modify *nervous* in “a nervous smile” carefully (adverb before adjective).`,
      a: `breathed slowly; a surprisingly nervous smile (etc.).`,
    };
  }
  if (t.includes("comparative") || t.includes("superlative")) {
    return {
      q: `Form comparative/superlative: sharp, careful, good. Use one in a sentence comparing two trails.`,
      a: `sharper/sharpest; more/most careful; better/best.`,
    };
  }
  if (t.includes("double negative")) {
    return {
      q: `Fix: “I don’t need no pencil.” and “Hardly nobody noticed.” Explain the repair.`,
      a: `don’t need a pencil / don’t need any; Hardly anybody noticed.`,
    };
  }
  if (t.includes("adjective vs adverb") || t.includes("good/well")) {
    return {
      q: `Choose: “She did (good/well) on the quiz.” “The soup tastes (good/well).” Explain linking-verb pattern.`,
      a: `well (adverb after action did); good (adjective after linking tastes).`,
    };
  }
  if (t.includes("prepositions and their objects")) {
    return {
      q: `Circle prepositions and objects: “The letter on the table near Maya arrived from the office.”`,
      a: `on→table; near→Maya; from→office.`,
    };
  }
  if (t.includes("prepositional phrases as")) {
    return {
      q: `Label each phrase adj/adv: “The keys in the drawer vanished before dawn.”`,
      a: `in the drawer (adj—which keys); before dawn (adv—when).`,
    };
  }
  if (t.includes("ending with a preposition")) {
    return {
      q: `Revise awkwardly formal: “With whom are you going to the game with?” Produce a clear natural sentence.`,
      a: `Who are you going to the game with? / With whom are you going to the game?`,
    };
  }
  if (t.includes("interjections")) {
    return {
      q: `Punctuate: “wow the free throw went in” two ways (comma vs exclamation) and explain tone difference.`,
      a: `Wow, the free throw went in. / Wow! The free throw went in. Stronger emotion with !`,
    };
  }
  if (t.includes("subjects and predicates")) {
    return {
      q: `Draw a line between complete subject and predicate: “The tired hikers near Tyler reached the muddy marker.”`,
      a: `Subject: The tired hikers near Tyler | Predicate: reached the muddy marker.`,
    };
  }
  if (t.includes("independent vs dependent")) {
    return {
      q: `Label Ind/Dep: “when the letter arrived” / “Maya washed her hands” / “because hope felt heavy.” Make one complex sentence.`,
      a: `Dep; Ind; Dep. Complex sample combines dep+ind with comma if needed.`,
    };
  }
  if (t.includes("fragments")) {
    return {
      q: `Fix fragments: “Because the envelope was thin.” “Waiting on the porch.”`,
      a: `Add independent clauses — e.g., Because the envelope was thin, Maya paused.`,
    };
  }
  if (t.includes("run-on") || t.includes("comma splice")) {
    return {
      q: `Fix two ways: “Maya paused, she washed her hands.” (comma splice)`,
      a: `Period/semicolon/comma+FANBOYS / because subordination — any two correct fixes.`,
    };
  }
  if (t.includes("simple, compound, and complex") || t.includes("sentence types")) {
    return {
      q: `Write one simple, one compound (FANBOYS), and one complex sentence about the trail markers.`,
      a: `Three correct sentence types; complex needs dependent clause.`,
    };
  }
  if (t.includes("combining sentences")) {
    return {
      q: `Combine without a monster sentence: “Jordan breathed. Jordan shot. The ball went in.”`,
      a: `E.g., After Jordan breathed, he shot, and the ball went in.`,
    };
  }
  if (t.includes("capitalization")) {
    return {
      q: `Fix capitalization: “on monday we read about east texas trails in english class.”`,
      a: `Monday; East Texas; English.`,
    };
  }
  if (t.includes("commas in a series") || t.includes("introductory")) {
    return {
      q: `Punctuate: “After advisory Maya packed pencils notebooks and erasers.”`,
      a: `After advisory, Maya packed pencils, notebooks, and erasers.`,
    };
  }
  if (t.includes("coordinating conjunctions") || t.includes("fanboys")) {
    return {
      q: `Join correctly: “The shot rimmed out. The second shot settled.” Use comma + FANBOYS.`,
      a: `…out, but/yet the second…`,
    };
  }
  if (t.includes("apostrophes")) {
    return {
      q: `Fix: “the dogs bowl” (one dog) / “the dogs bowls” (two dogs) / “its’ time.”`,
      a: `dog’s bowl; dogs’ bowls; it’s time.`,
    };
  }
  if (t.includes("quotation marks") || t.includes("dialogue")) {
    return {
      q: `Punctuate: Coach Reyes said breathe like you do in study hall.`,
      a: `Coach Reyes said, “Breathe like you do in study hall.”`,
    };
  }
  if (t.includes("homophones")) {
    return {
      q: `Choose: There/Their/They’re packing to/too/two bags for the trip.`,
      a: `They’re packing two bags… (or Their bags / too if meaning also).`,
    };
  }
  if (t.includes("affect vs effect")) {
    return {
      q: `Fill: The early bell can ____ sleep. The ____ is more tardies. (affect/effect)`,
      a: `affect (verb); effect (noun).`,
    };
  }
  if (t.includes("formal vs informal")) {
    return {
      q: `Revise informal → school formal: “The letter was kinda a big deal, ngl.”`,
      a: `The letter was a significant moment / mattered a great deal.`,
    };
  }
  if (t.includes("precise verbs")) {
    return {
      q: `Replace *got* and *did*: “Maya got the letter and did her hands.”`,
      a: `received/opened; washed.`,
    };
  }
  if (t.includes("morphology")) {
    return {
      q: `Unpack *unpredictable* by parts (prefix/root/suffix) and define from parts; then check against context: “The weather was unpredictable.”`,
      a: `un + predict + able → not able to be predicted.`,
    };
  }
  if (t.includes("word study editing") || t.includes("editing pass")) {
    return {
      q: `Edit: “Their going too the library too return there books before there due.”`,
      a: `They’re going to the library to return their books before they’re due.`,
    };
  }
  if (t.includes("style means") || t.includes("what style")) {
    return {
      q: `Compare style: short punchy sentences vs one long sentence about Maya’s letter. Write both; say which fits suspense.`,
      a: `Short sentences often heighten suspense; answer should show both versions.`,
    };
  }
  if (t.includes("tone consistent") || t.includes("keeping tone")) {
    return {
      q: `Revise tone shift: “Maya’s hands shook with fear. Lol she was fine though.”`,
      a: `Remove lol; keep consistent serious/reflective tone.`,
    };
  }
  if (t.includes("wordiness")) {
    return {
      q: `Cut wordiness: “Due to the fact that the envelope was thin in nature, Maya was sort of nervous.”`,
      a: `Because the envelope was thin, Maya was nervous.`,
    };
  }
  if (t.includes("parallel structure")) {
    return {
      q: `Fix parallelism: “Jordan likes breathing drills, to practice free throws, and study hall.”`,
      a: `breathing drills, practicing free throws, and studying in study hall (match -ing or match nouns).`,
    };
  }
  if (t.includes("voice that fits") || t.includes("audience")) {
    return {
      q: `Write one sentence about the letter for a teacher (formal) and one for a close friend (casual but kind).`,
      a: `Register shifts appropriately; school-appropriate.`,
    };
  }
  if (t.includes("portfolio") || t.includes("polish") || t.includes("review") || t.includes("workshop") || t.includes("lab")) {
    return {
      q: `Workshop item ${i} for “${t}”: Revise this sentence for today’s skill and explain the change: “${s}.”`,
      a: `Correct capitalization/agreement/clarity per skill; explanation names the grammar job.`,
    };
  }

  // default grammar item unique per title+i
  return {
    q: `Apply “${t}” to revise: “${s}.” Show before → after and name the grammar job you fixed (item ${i}).`,
    a: `Before/after with correct application of the skill; job named precisely.`,
  };
}
