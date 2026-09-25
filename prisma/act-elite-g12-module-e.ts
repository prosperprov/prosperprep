/**
 * Elite Grade 12 ACT Prep — Module E (ACT English) lessons + section quizzes/drills.
 * All passages/items original Prosper Prep (not ACT Inc.).
 */
import type { LessonSeed } from "./curriculum";
import type { QuestionSeed } from "./assessments";

export type ActEnglishQuizSeed = {
  title: string;
  description: string;
  sectionKey: string;
  order: number;
  questions: QuestionSeed[];
};

export function actEliteG12ModuleELessons(): LessonSeed[] {
  return [
    lessonE0(),
    lessonE1(),
    lessonE2(),
    lessonE3(),
    lessonE4(),
    lessonE5(),
    lessonE6(),
    lessonE7(),
    lessonE8(),
    lessonE9(),
    lessonE10(),
    lessonE11(),
    lessonE12(),
    lessonE13(),
    lessonE14()
  ];
}

export function actEnglishModuleQuizzes(): ActEnglishQuizSeed[] {
  return [
    {
      title: "ACT English Topic Quiz E1 — Grammar & usage",
      description: "12 original items: agreement, pronouns, tense/mood, parallelism. Not an ACT Inc. form.",
      sectionKey: "module-e1",
      order: 5,
      questions: quizE1Questions(),
    },
    {
      title: "ACT English Topic Quiz E2 — Punctuation & structure",
      description: "11 original items: commas, apostrophes, semicolons/colons/dashes, fragments/run-ons/modifiers.",
      sectionKey: "module-e2",
      order: 6,
      questions: quizE2Questions(),
    },
    {
      title: "ACT English Topic Quiz E3 — Rhetorical skills",
      description: "12 original items: transitions, organization, add/delete/revise, concision.",
      sectionKey: "module-e3",
      order: 7,
      questions: quizE3Questions(),
    },
    {
      title: "ACT English Section Drill 1",
      description: "Timed-style English section drill: 75 original MCQ across 5 PP passages. Target 45 minutes. Not an ACT Inc. form.",
      sectionKey: "module-e-drill-1",
      order: 8,
      questions: englishDrill1Questions(),
    },
    {
      title: "ACT English Section Drill 2",
      description: "Timed-style English section drill: 40 original MCQ across 5 PP passages (second bank). Target ~24 minutes at section pace, or use as focused remediation. Not an ACT Inc. form.",
      sectionKey: "module-e-drill-2",
      order: 9,
      questions: englishDrill2Questions(),
    },
  ];
}

function lessonE0(): LessonSeed {
  return {
    title: "E1.1 Subject–verb agreement",
    description: "Agreement across interrupters, compound subjects, and each/every traps.",
    objectives: "• Match verbs to true subjects across interrupters\n• Handle compound subjects and indefinite pronouns\n• Spot each/every and inverted-order traps on ACT English",
    content: "# E1.1 Subject\u2013verb agreement\n\n## Objectives\n- Match verbs to true subjects across interrupters\n- Handle compound subjects and indefinite pronouns\n- Spot each/every and inverted-order traps on ACT English\n\n## Teach\n### The ACT rule in one line\nFind the **true subject**, ignore the noise between it and the verb, then match number.\n\n### Interrupters\nPrepositional phrases, appositives, and nonessential clauses are decoys:\n- *The collection of rare maps **is** (not are) on display.*\n- *The coach, along with the captains, **reviews** the film.*\n\n### Compound subjects\n- *and* \u2192 usually plural: *The runner and the jumper **compete**.*\n- *or / nor* \u2192 verb agrees with the nearer subject: *Neither the coaches nor the athlete **is** ready.*\n\n### Indefinite pronouns\n*Each, every, either, neither, one, everybody, anyone* take **singular** verbs on the ACT.\n*Few, both, many, several* take plural. *Some / most / all / none* depend on the object of *of*.\n\n### Inverted order\n*There **are** three reasons\u2026* \u2014 subject follows the verb. Mentally flip: *Three reasons are there.*\n\n### Worked example\n*The portfolio of essays from last spring's seminars **reveal / reveals** careful revision.* \u2192 *reveals* (portfolio singular; essays/seminars are interrupters).\n\n### Trap replay\nWrong answers agree with the nearest noun instead of the true subject. Vertical-scan choices for -s endings first.\n\n## Practice\n1. Cross out every prepositional phrase; then choose the verb.\n2. For *or/nor*, underline the nearer subject before picking.\n3. Write one original sentence with *each of the\u2026* and a singular verb.\n\n## Examples\n1. *Neither the medals nor the trophy **was** misplaced.*\n2. *Sitting on the bench **were** two tired sprinters.* (inverted)\n\n## Video script (Prosper Prep original)\n\n*[Spoken narration ~750\u2013900 words \u2014 instructional video authoring script; not a claim that video is filmed.]*\n\n\"Welcome to Prosper Prep ACT English. Today's focus is Subject\u2013verb agreement. I am going to teach the rule, show a worked ACT-style item, give you a pause to try one, then replay the trap so you do not donate easy points under a thirty-six-second average.\n\nFirst, hunt the true subject. Cross out interrupters\u2014prepositional phrases, along-with additions, appositives\u2014with your mental pen. 'The set of rules is clear': set is singular; rules is a decoy. Along with, as well as, and together with do not create compound subjects. 'The head coach, along with the trainers, arrives early.'\n\nCompound subjects with and are usually plural. Or and nor agree with the nearer subject. 'Neither the players nor the captain wants overtime.' Flip the order and the verb flips.\n\nIndefinite pronouns matter: each, every, either, neither, anybody\u2014singular. Both, few, many, several\u2014plural. All, some, most, none\u2014look at the of-phrase.\n\nInverted sentences hide subjects after the verb. 'There are three reasons'\u2014reasons is the subject. Mentally reorder.\n\nWorked item: 'The portfolio of essays from last spring's seminars reveal careful revision.' Portfolio is singular; change reveal to reveals. If a choice says NO CHANGE, ask whether the verb already matches the true subject.\n\nTrap catalog: agreeing with the nearest noun; treating along-with as and; pluralizing each; forgetting inversion.\n\nUnder time pressure your ear will lie. Your pencil should not. Cross out interrupters, name the relationship before you pick a transition, and vertical-scan choice endings before you reread a whole paragraph. Elite English is not fancier vocabulary; it is faster, cleaner decisions with named reasons.\n\nPause the video. Say the rule in one sentence. Then complete the graded check below. Keep an error-log tag ready\u2014content, trap, or timing\u2014so this lesson becomes a lever, not a mood. Remember: Prosper Prep items are original; we do not rehost ACT Incorporated forms. Official practice is link-out or school-licensed only. Train integrity the same way you train grammar.\n\n One last rehearsal: cover the answer choices, predict the edit, uncover, eliminate by named defect, and only then commit. If you cannot name the defect, you are guessing earlier than necessary. Build that naming reflex until it feels automatic\u2014even boring. Boring under practice is calm under the clock. Finally, connect this skill to Module E pacing. A perfect rule that costs you two minutes on one item can still drop your section score if passage five becomes a blank field. Use now/later/guess. Bank clean usage points. Return to sticky rhetoric with a smaller clock and a sharper elimination tree. That combination\u2014content plus strategy\u2014is how composites climb toward the thirty-three-plus stretch band without pretending every item deserves a thesis.\"\n\n\n\n\nBefore you leave this video, rehearse the decision out loud once: name the skill, name the trap, name the fix. That three-beat habit is what survives on test day when adrenaline flattens careful reading. If you miss an item in practice, do not just glance at the key\u2014write the trap name in your error log and schedule a five-item mini-set on that trap within forty-eight hours. Spaced retrieval beats rereading the same explanation. Athletes already periodize training; do the same for English defects. One more practical tip: when two choices both seem grammatical, ask which one better preserves the paragraph's purpose and sheds empty words. That tie-breaker resolves a surprising number of late-section hesitations without burning another thirty seconds of rereading. Keep your pencil moving, keep your reasons named, and keep your composite levers honest.\n\n Repeat the checklist once more with me: find the true subject, mute the interrupter, match the verb, and only then glance at style. If a choice changes meaning while fixing agreement, it is not the elite answer. Protect meaning and number together.\n\n## Wrap-up\nComplete the graded check.\n",
    order: 4,
    durationMin: 35,
    sectionKey: "module-e1",
    questions: [
      {
        prompt: "In 'The set of medals from dual meets ___ on the shelf,' the blank should be…",
        choices: ["are", "is", "were being", "have been"],
        correctIndex: 1,
        explanation: "[EASY] True subject set is singular.",
        order: 1,
        points: 1,
      },
      {
        prompt: "Neither the juniors nor the senior captain ___ ready for warm-ups.",
        choices: ["are", "were", "is", "have"],
        correctIndex: 2,
        explanation: "[MEDIUM] With nor, agree with nearer subject (captain).",
        order: 2,
        points: 1,
      },
      {
        prompt: "Each of the relay teams ___ a different exchange strategy.",
        choices: ["use", "uses", "are using", "have used"],
        correctIndex: 1,
        explanation: "[EASY] Each takes singular verb.",
        order: 3,
        points: 1,
      },
      {
        prompt: "Which choice best fixes agreement? 'There is three reasons the coach delayed practice.'",
        choices: ["NO CHANGE", "There are three reasons the coach delayed practice.", "There is three reason the coach delayed practice.", "Their is three reasons the coach delayed practice."],
        correctIndex: 1,
        explanation: "[MEDIUM] Inverted order: reasons plural → are.",
        order: 4,
        points: 1,
      }
    ],
    topicMeta: {"title": "Subject–verb agreement", "focus": "True subject vs nearest noun", "keyIdeas": ["Ignore interrupters", "Compound subjects", "Indefinite pronouns"], "practice": [{"q": "Ignore phrase between subject and verb?", "a": "Yes"}, {"q": "Each of the players…", "a": "singular verb"}]},
  };
}

function lessonE1(): LessonSeed {
  return {
    title: "E1.2 Pronouns & antecedents",
    description: "Ambiguous antecedents, number/person shifts, who/whom, and its/it's hygiene.",
    objectives: "• Make antecedents unmistakable\n• Keep pronoun number and person consistent\n• Apply who/whom and possessive vs contraction tests",
    content: "# E1.2 Pronouns & antecedents\n\n## Objectives\n- Make antecedents unmistakable\n- Keep pronoun number and person consistent\n- Apply who/whom and possessive vs contraction tests\n\n## Teach\n### Clarity first\nA pronoun must point to **one** clear noun. If two nouns could claim it, replace the pronoun with a noun or rewrite.\n\n### Number & person\nPrefer choices that are **consistent and unambiguous**. Pluralize the frame when needed: *students\u2026their*.\n\n### Who / whom\n- *Who* = subject (*who called*).\n- *Whom* = object (*whom we called*). He/him test.\n\n### Possessive vs contraction\n*Its* = possessive. *It's* = it is / it has.\n\n### Worked example\n*When Jordan spoke to Sam, he seemed nervous.* Fix by naming who seemed nervous.\n\n### Trap replay\nVague *this/which*; *they* with no plural antecedent; *it's* for possession.\n\n## Practice\n1. Circle every pronoun; arrow to antecedent.\n2. Apply he/him test to one who/whom item.\n3. Fix *Every runner must bring their spikes* for ACT-style clarity.\n\n## Examples\n1. *It's clear the program lost its funding.*\n2. *The athlete whom the coach selected finished first.*\n\n\n\n### Elite checklist\n1. Read enough context\u2014usually the full sentence, sometimes the sentence before/after for rhetoric.\n2. Predict the relationship or the grammatical need before looking at choices.\n3. Vertical-scan differences among the four options.\n4. Eliminate by named defect, then choose.\n5. If still torn at your later-trigger, mark, temporary-bubble, move.\n\n### Why this shows up on ACT English\nThe ACT recycles a finite menu of editing decisions. If you can name the decision type in two seconds\u2014agreement, punctuation join, transition logic, relevance, concision\u2014you stop rereading for vibes and start deciding like a copy editor with a stopwatch.\n\n### Common wrong-answer flavors\n- Sounds fancy but breaks grammar\n- True in the real world but off-purpose in the paragraph\n- Shortest but changes meaning\n- Longest because it repeats the same idea twice\n- Transition from the wrong logic family\n\n### Transfer to timed sections\nDrill this skill in untimed sets until the named reason is automatic, then fold it into nine-minute passage budgets. Content speed is strategy.\n\n## Video script (Prosper Prep original)\n\n*[Spoken narration ~750\u2013900 words \u2014 instructional video authoring script; not a claim that video is filmed.]*\n\n\"Welcome to Prosper Prep ACT English. Today's focus is Pronouns & antecedents. I am going to teach the rule, show a worked ACT-style item, give you a pause to try one, then replay the trap so you do not donate easy points under a thirty-six-second average.\n\nPronouns fail when two people share a sentence and then he appears. Ambiguity is an ACT favorite because it feels natural in speech.\n\nRule one: every pronoun needs one unmistakable antecedent. If Jordan and Sam appear, rename instead of guessing vibe.\n\nRule two: number and person stay consistent. Pluralize the whole frame when that is the cleanest repair.\n\nWho versus whom: who is subject; whom is object. Use the he/him swap. 'The athlete whom the coach praised'\u2014praised him\u2014whom.\n\nIts, it's, their, there, they're are automatic points if you expand contractions. It's always expands to it is or it has. Its never takes an apostrophe for possession.\n\nVague this/that/which pointing at a whole idea often need a noun: this decision, that policy.\n\nUnder time pressure your ear will lie. Your pencil should not. Cross out interrupters, name the relationship before you pick a transition, and vertical-scan choice endings before you reread a whole paragraph. Elite English is not fancier vocabulary; it is faster, cleaner decisions with named reasons.\n\nPause the video. Say the rule in one sentence. Then complete the graded check below. Keep an error-log tag ready\u2014content, trap, or timing\u2014so this lesson becomes a lever, not a mood. Remember: Prosper Prep items are original; we do not rehost ACT Incorporated forms. Official practice is link-out or school-licensed only. Train integrity the same way you train grammar.\n\n One last rehearsal: cover the answer choices, predict the edit, uncover, eliminate by named defect, and only then commit. If you cannot name the defect, you are guessing earlier than necessary. Build that naming reflex until it feels automatic\u2014even boring. Boring under practice is calm under the clock. Finally, connect this skill to Module E pacing. A perfect rule that costs you two minutes on one item can still drop your section score if passage five becomes a blank field. Use now/later/guess. Bank clean usage points. Return to sticky rhetoric with a smaller clock and a sharper elimination tree. That combination\u2014content plus strategy\u2014is how composites climb toward the thirty-three-plus stretch band without pretending every item deserves a thesis.\"\n\n\n\n\nOn a real section, you will meet this skill wearing camouflage: a long sentence, a boring topic, and four choices that all look vaguely legal. That is intentional. The test is not checking whether you love the passage topic; it is checking whether you can execute a small editing move while the clock moves. So rehearse the move until it is boring. Boring skills survive adrenaline.\n\nHere is a second worked pattern. Cover the choices. Read the local window. Whisper the need: agreement, join, logic, relevance, or cut fat. Uncover choices and hunt only for that need. If two choices both seem to satisfy it, prefer the one that keeps meaning and sheds empty words\u2014unless the short one creates a new grammar break.\n\nAthletes already understand reps under fatigue. Treat English the same way. Do not wait for inspiration. Run the checklist. Tag misses after every drill. If the same trap appears three times, it is not bad luck; it is a curriculum assignment for your next study block.\n\nSay this out loud: name the decision, eliminate by defect, protect the clock. That sentence is the Module E strategy layer riding on top of the content rules. Content without strategy stalls. Strategy without content guesses. Together they raise raw scores.\n\n\n\nBefore you leave this video, rehearse the decision out loud once: name the skill, name the trap, name the fix. That three-beat habit is what survives on test day when adrenaline flattens careful reading. If you miss an item in practice, do not just glance at the key\u2014write the trap name in your error log and schedule a five-item mini-set on that trap within forty-eight hours. Spaced retrieval beats rereading the same explanation. Athletes already periodize training; do the same for English defects. One more practical tip: when two choices both seem grammatical, ask which one better preserves the paragraph's purpose and sheds empty words. That tie-breaker resolves a surprising number of late-section hesitations without burning another thirty seconds of rereading. Keep your pencil moving, keep your reasons named, and keep your composite levers honest.\n\n## Wrap-up\nComplete the graded check.\n",
    order: 5,
    durationMin: 35,
    sectionKey: "module-e1",
    questions: [
      {
        prompt: "Best repair for ambiguity: 'When the trainer spoke to the athlete, she looked worried.'",
        choices: ["NO CHANGE", "When the trainer spoke to the athlete, the athlete looked worried.", "When the trainer spoke to the athlete, they looked worried.", "When the trainer spoke to the athlete, it looked worried."],
        correctIndex: 1,
        explanation: "[MEDIUM] Name the antecedent.",
        order: 1,
        points: 1,
      },
      {
        prompt: "Which is correct? 'The runner ___ the coach selected finished first.'",
        choices: ["who", "whom", "which", "who's"],
        correctIndex: 1,
        explanation: "[MEDIUM] Object of selected → whom.",
        order: 2,
        points: 1,
      },
      {
        prompt: "'The program lost ___ funding after the grant expired.'",
        choices: ["it's", "its", "its'", "it is"],
        correctIndex: 1,
        explanation: "[EASY] Possessive its has no apostrophe.",
        order: 3,
        points: 1,
      },
      {
        prompt: "Best ACT-style fix: 'A freshman should organize their binder early.'",
        choices: ["Keep as is always", "Freshmen should organize their binders early.", "A freshman should organize you're binder early.", "A freshman should organize its binder early."],
        correctIndex: 1,
        explanation: "[MEDIUM] Pluralize for clear agreement.",
        order: 4,
        points: 1,
      }
    ],
    topicMeta: {"title": "Pronouns & antecedents", "focus": "Clarity and consistency", "keyIdeas": ["One clear antecedent", "No number shifts", "Who vs whom"], "practice": [{"q": "Ambiguous they?", "a": "Replace with noun"}, {"q": "its vs it's", "a": "it's = it is"}]},
  };
}

function lessonE2(): LessonSeed {
  return {
    title: "E1.3 Verb tense & mood",
    description: "Narrative tense consistency, perfect tenses, and conditional/mood signals.",
    objectives: "• Keep tense consistent with the passage frame\n• Use perfect tenses only when sequence requires them\n• Recognize would/could/might mood signals",
    content: "# E1.3 Verb tense & mood\n\n## Objectives\n- Keep tense consistent with the passage frame\n- Use perfect tenses only when sequence requires them\n- Recognize would/could/might mood signals\n\n## Teach\n### Frame tense\nIf a passage narrates in past, do not jump to present without a clear reason.\n\n### Perfect tenses\n- *had* + past participle = earlier past.\n- *has/have* + past participle = past linked to present.\n\n### Mood\n*If she had slept, she would have raced better.* Avoid *would have* in the if-clause. Never *would of*.\n\n### Worked example\n*The team boarded the bus and **heads / headed** to the venue.* \u2192 *headed*.\n\n### Trap replay\nRandom present inserts; unnecessary perfects; *would of*.\n\n## Practice\n1. Highlight the passage's dominant tense before answering.\n2. Fix: *If I would have known, I would of come.*\n3. Explain when *has risen* beats *rose*.\n\n## Examples\n1. *By the time the starter fired, the sprinters had taken their marks.*\n2. Timeless facts may stay present inside past narrative.\n\n\n\n### Elite checklist\n1. Read enough context\u2014usually the full sentence, sometimes the sentence before/after for rhetoric.\n2. Predict the relationship or the grammatical need before looking at choices.\n3. Vertical-scan differences among the four options.\n4. Eliminate by named defect, then choose.\n5. If still torn at your later-trigger, mark, temporary-bubble, move.\n\n### Why this shows up on ACT English\nThe ACT recycles a finite menu of editing decisions. If you can name the decision type in two seconds\u2014agreement, punctuation join, transition logic, relevance, concision\u2014you stop rereading for vibes and start deciding like a copy editor with a stopwatch.\n\n### Common wrong-answer flavors\n- Sounds fancy but breaks grammar\n- True in the real world but off-purpose in the paragraph\n- Shortest but changes meaning\n- Longest because it repeats the same idea twice\n- Transition from the wrong logic family\n\n### Transfer to timed sections\nDrill this skill in untimed sets until the named reason is automatic, then fold it into nine-minute passage budgets. Content speed is strategy.\n\n## Video script (Prosper Prep original)\n\n*[Spoken narration ~750\u2013900 words \u2014 instructional video authoring script; not a claim that video is filmed.]*\n\n\"Welcome to Prosper Prep ACT English. Today's focus is Verb tense & mood. I am going to teach the rule, show a worked ACT-style item, give you a pause to try one, then replay the trap so you do not donate easy points under a thirty-six-second average.\n\nVerb tense on ACT English is loyalty to the passage time frame. If the story is past, stay past unless you have a signaled reason\u2014timeless fact, dialogue, or explicit shift.\n\nPerfect tenses earn their keep when sequence matters. Had trained means earlier past. Has improved ties past to present. Unnecessary perfects sound fancy and mean the wrong thing.\n\nConditionals: if she had slept, she would have raced better. Do not put would have in the if-clause. Never write would of\u2014that is a hearing error for have.\n\nWorked scan: read two sentences before the underline, name the frame tense, then check loyalty.\n\nUnder time pressure your ear will lie. Your pencil should not. Cross out interrupters, name the relationship before you pick a transition, and vertical-scan choice endings before you reread a whole paragraph. Elite English is not fancier vocabulary; it is faster, cleaner decisions with named reasons.\n\nPause the video. Say the rule in one sentence. Then complete the graded check below. Keep an error-log tag ready\u2014content, trap, or timing\u2014so this lesson becomes a lever, not a mood. Remember: Prosper Prep items are original; we do not rehost ACT Incorporated forms. Official practice is link-out or school-licensed only. Train integrity the same way you train grammar.\n\n One last rehearsal: cover the answer choices, predict the edit, uncover, eliminate by named defect, and only then commit. If you cannot name the defect, you are guessing earlier than necessary. Build that naming reflex until it feels automatic\u2014even boring. Boring under practice is calm under the clock. Finally, connect this skill to Module E pacing. A perfect rule that costs you two minutes on one item can still drop your section score if passage five becomes a blank field. Use now/later/guess. Bank clean usage points. Return to sticky rhetoric with a smaller clock and a sharper elimination tree. That combination\u2014content plus strategy\u2014is how composites climb toward the thirty-three-plus stretch band without pretending every item deserves a thesis.\"\n\n\n\n\nOn a real section, you will meet this skill wearing camouflage: a long sentence, a boring topic, and four choices that all look vaguely legal. That is intentional. The test is not checking whether you love the passage topic; it is checking whether you can execute a small editing move while the clock moves. So rehearse the move until it is boring. Boring skills survive adrenaline.\n\nHere is a second worked pattern. Cover the choices. Read the local window. Whisper the need: agreement, join, logic, relevance, or cut fat. Uncover choices and hunt only for that need. If two choices both seem to satisfy it, prefer the one that keeps meaning and sheds empty words\u2014unless the short one creates a new grammar break.\n\nAthletes already understand reps under fatigue. Treat English the same way. Do not wait for inspiration. Run the checklist. Tag misses after every drill. If the same trap appears three times, it is not bad luck; it is a curriculum assignment for your next study block.\n\nSay this out loud: name the decision, eliminate by defect, protect the clock. That sentence is the Module E strategy layer riding on top of the content rules. Content without strategy stalls. Strategy without content guesses. Together they raise raw scores.\n\n\n\nBefore you leave this video, rehearse the decision out loud once: name the skill, name the trap, name the fix. That three-beat habit is what survives on test day when adrenaline flattens careful reading. If you miss an item in practice, do not just glance at the key\u2014write the trap name in your error log and schedule a five-item mini-set on that trap within forty-eight hours. Spaced retrieval beats rereading the same explanation. Athletes already periodize training; do the same for English defects. One more practical tip: when two choices both seem grammatical, ask which one better preserves the paragraph's purpose and sheds empty words. That tie-breaker resolves a surprising number of late-section hesitations without burning another thirty seconds of rereading. Keep your pencil moving, keep your reasons named, and keep your composite levers honest.\n\n## Wrap-up\nComplete the graded check.\n",
    order: 6,
    durationMin: 35,
    sectionKey: "module-e1",
    questions: [
      {
        prompt: "Passage narrates in past. Best choice for: 'She stretches, then took her mark.'",
        choices: ["stretches", "stretched", "has stretch", "will stretched"],
        correctIndex: 1,
        explanation: "[EASY] Match past frame.",
        order: 1,
        points: 1,
      },
      {
        prompt: "Best for earlier past: 'By kickoff, the band ___ the anthem twice.'",
        choices: ["practices", "had practiced", "will practice", "practice"],
        correctIndex: 1,
        explanation: "[MEDIUM] had practiced.",
        order: 2,
        points: 1,
      },
      {
        prompt: "Which is NOT acceptable on typical ACT English?",
        choices: ["If she had rested, she would have finished stronger.", "If she would have rested, she would have finished stronger.", "She would have finished stronger if she had rested.", "Because she rested, she finished stronger."],
        correctIndex: 1,
        explanation: "[HARD] Avoid would have in the if-clause.",
        order: 3,
        points: 1,
      },
      {
        prompt: "'Would of known' should become…",
        choices: ["would of knew", "would have known", "would knowing", "will of known"],
        correctIndex: 1,
        explanation: "[EASY] Use have, not of.",
        order: 4,
        points: 1,
      }
    ],
    topicMeta: {"title": "Verb tense & mood", "focus": "Consistency and sequence", "keyIdeas": ["Passage frame tense", "Perfect for earlier action", "Mood signals"], "practice": [{"q": "Default on narrative past?", "a": "Stay past"}, {"q": "Had + past participle?", "a": "earlier past"}]},
  };
}

function lessonE3(): LessonSeed {
  return {
    title: "E1.4 Parallelism & comparisons",
    description: "Parallel lists, paired constructions, and than/as comparison traps.",
    objectives: "• Keep list items in matching grammatical form\n• Complete comparisons logically\n• Spot than/as and not only…but also patterns",
    content: "# E1.4 Parallelism & comparisons\n\n## Objectives\n- Keep list items in matching grammatical form\n- Complete comparisons logically\n- Spot than/as and not only\u2026but also patterns\n\n## Teach\n### Lists\nMatch form: *to plan, to train, and to recover*\u2014not mixed with nouns mid-list.\n\n### Paired constructions\n*not only\u2026but also*, *either\u2026or*, *both\u2026and*\u2014structures after each marker should match.\n\n### Comparisons\nCompare like things: *Her time was faster than Jordan's.* Use *any other* when needed.\n\n### Worked example\n*The clinic teaches stretching, hydrating, and **to sleep / sleeping** well.* \u2192 *sleeping*.\n\n### Trap replay\nMixing gerunds and infinitives; comparing a person to a time; incomplete *as\u2026as*.\n\n## Practice\n1. Underline list items; label each form.\n2. Fix: *She likes running more than to bike.*\n3. Fix incomplete *as\u2026as* comparisons.\n\n## Examples\n1. *Not only did they fundraise, but they also volunteered.*\n2. *His mark was better than that of last year's winner.*\n\n\n\n### Elite checklist\n1. Read enough context\u2014usually the full sentence, sometimes the sentence before/after for rhetoric.\n2. Predict the relationship or the grammatical need before looking at choices.\n3. Vertical-scan differences among the four options.\n4. Eliminate by named defect, then choose.\n5. If still torn at your later-trigger, mark, temporary-bubble, move.\n\n### Why this shows up on ACT English\nThe ACT recycles a finite menu of editing decisions. If you can name the decision type in two seconds\u2014agreement, punctuation join, transition logic, relevance, concision\u2014you stop rereading for vibes and start deciding like a copy editor with a stopwatch.\n\n### Common wrong-answer flavors\n- Sounds fancy but breaks grammar\n- True in the real world but off-purpose in the paragraph\n- Shortest but changes meaning\n- Longest because it repeats the same idea twice\n- Transition from the wrong logic family\n\n### Transfer to timed sections\nDrill this skill in untimed sets until the named reason is automatic, then fold it into nine-minute passage budgets. Content speed is strategy.\n\n## Video script (Prosper Prep original)\n\n*[Spoken narration ~750\u2013900 words \u2014 instructional video authoring script; not a claim that video is filmed.]*\n\n\"Welcome to Prosper Prep ACT English. Today's focus is Parallelism & comparisons. I am going to teach the rule, show a worked ACT-style item, give you a pause to try one, then replay the trap so you do not donate easy points under a thirty-six-second average.\n\nParallelism asks whether list items wear the same grammatical uniform. Infinitives with a noun mid-list fail. Gerunds mixed with infinitives fail. Pick one uniform.\n\nPaired conjunctions enforce mirrors: not only\u2026but also, either\u2026or, both\u2026and.\n\nComparisons need logic: her time versus Jordan's time\u2014not a time versus a person. Than any other runner avoids including herself. Complete as\u2026as constructions.\n\nAmong correct parallel options, prefer the concise clear one\u2014preview of E3.4.\n\nUnder time pressure your ear will lie. Your pencil should not. Cross out interrupters, name the relationship before you pick a transition, and vertical-scan choice endings before you reread a whole paragraph. Elite English is not fancier vocabulary; it is faster, cleaner decisions with named reasons.\n\nPause the video. Say the rule in one sentence. Then complete the graded check below. Keep an error-log tag ready\u2014content, trap, or timing\u2014so this lesson becomes a lever, not a mood. Remember: Prosper Prep items are original; we do not rehost ACT Incorporated forms. Official practice is link-out or school-licensed only. Train integrity the same way you train grammar.\n\n One last rehearsal: cover the answer choices, predict the edit, uncover, eliminate by named defect, and only then commit. If you cannot name the defect, you are guessing earlier than necessary. Build that naming reflex until it feels automatic\u2014even boring. Boring under practice is calm under the clock. Finally, connect this skill to Module E pacing. A perfect rule that costs you two minutes on one item can still drop your section score if passage five becomes a blank field. Use now/later/guess. Bank clean usage points. Return to sticky rhetoric with a smaller clock and a sharper elimination tree. That combination\u2014content plus strategy\u2014is how composites climb toward the thirty-three-plus stretch band without pretending every item deserves a thesis.\"\n\n\n\n\nOn a real section, you will meet this skill wearing camouflage: a long sentence, a boring topic, and four choices that all look vaguely legal. That is intentional. The test is not checking whether you love the passage topic; it is checking whether you can execute a small editing move while the clock moves. So rehearse the move until it is boring. Boring skills survive adrenaline.\n\nHere is a second worked pattern. Cover the choices. Read the local window. Whisper the need: agreement, join, logic, relevance, or cut fat. Uncover choices and hunt only for that need. If two choices both seem to satisfy it, prefer the one that keeps meaning and sheds empty words\u2014unless the short one creates a new grammar break.\n\nAthletes already understand reps under fatigue. Treat English the same way. Do not wait for inspiration. Run the checklist. Tag misses after every drill. If the same trap appears three times, it is not bad luck; it is a curriculum assignment for your next study block.\n\nSay this out loud: name the decision, eliminate by defect, protect the clock. That sentence is the Module E strategy layer riding on top of the content rules. Content without strategy stalls. Strategy without content guesses. Together they raise raw scores.\n\n\n\nBefore you leave this video, rehearse the decision out loud once: name the skill, name the trap, name the fix. That three-beat habit is what survives on test day when adrenaline flattens careful reading. If you miss an item in practice, do not just glance at the key\u2014write the trap name in your error log and schedule a five-item mini-set on that trap within forty-eight hours. Spaced retrieval beats rereading the same explanation. Athletes already periodize training; do the same for English defects. One more practical tip: when two choices both seem grammatical, ask which one better preserves the paragraph's purpose and sheds empty words. That tie-breaker resolves a surprising number of late-section hesitations without burning another thirty seconds of rereading. Keep your pencil moving, keep your reasons named, and keep your composite levers honest.\n\n## Wrap-up\nComplete the graded check.\n",
    order: 7,
    durationMin: 35,
    sectionKey: "module-e1",
    questions: [
      {
        prompt: "Best parallel fix: 'She wants to stretch, to hydrate, and sleeping eight hours.'",
        choices: ["NO CHANGE", "to sleep eight hours", "sleep eight hours", "slept eight hours"],
        correctIndex: 1,
        explanation: "[EASY] Match infinitives.",
        order: 1,
        points: 1,
      },
      {
        prompt: "Best comparison: 'Maya's vertical was higher than Jordan.'",
        choices: ["NO CHANGE", "higher than Jordan's", "higher than him", "more high than Jordan"],
        correctIndex: 1,
        explanation: "[MEDIUM] Compare verticals.",
        order: 2,
        points: 1,
      },
      {
        prompt: "'Not only the sprinters but also the ___ cheered.'",
        choices: ["hurdler were", "hurdler was", "hurdler are", "hurdler be"],
        correctIndex: 1,
        explanation: "[MEDIUM] Nearer subject hurdler → was.",
        order: 3,
        points: 1,
      },
      {
        prompt: "Which list is parallel?",
        choices: ["planning, to train, recovery", "to plan, training, and recover", "planning, training, and recovering", "plan, training, and to recover"],
        correctIndex: 2,
        explanation: "[EASY] All gerunds.",
        order: 4,
        points: 1,
      }
    ],
    topicMeta: {"title": "Parallelism & comparisons", "focus": "Matched forms", "keyIdeas": ["Same part of speech in lists", "Complete comparisons", "Paired conjunctions"], "practice": [{"q": "running, jumping, and to swim?", "a": "swimming"}, {"q": "taller than any runner?", "a": "any other runner"}]},
  };
}

function lessonE4(): LessonSeed {
  return {
    title: "E2.1 Commas that matter",
    description: "Essential vs nonessential clauses, lists, and comma splices.",
    objectives: "• Distinguish essential vs nonessential clauses\n• Use list commas without creating splices\n• Avoid commas between subject and verb",
    content: "# E2.1 Commas that matter\n\n## Objectives\n- Distinguish essential vs nonessential clauses\n- Use list commas without creating splices\n- Avoid commas between subject and verb\n\n## Teach\n### Essential vs nonessential\nIf removing the clause changes who/what you mean, it is essential\u2014usually **no** commas.\nExtra info gets comma pairs: *Jordan, who trains at dawn, recovers faster.*\n\n### Forbidden commas\nNo single comma between subject and verb: *The sprinter, won* \u2717.\n\n### Comma splices\nTwo independent clauses joined only by a comma are wrong. Fix with period, semicolon, or comma + FANBOYS.\n\n### Worked example\nDeletion test decides commas around *who/which* clauses.\n\n## Practice\n1. Delete the clause; if noun identity changes, skip commas.\n2. Fix splice: *The gun fired, the field surged.*\n3. Remove illegal comma: *The captain of the team, called practice.*\n\n\n\n### Elite checklist\n1. Read enough context\u2014usually the full sentence, sometimes the sentence before/after for rhetoric.\n2. Predict the relationship or the grammatical need before looking at choices.\n3. Vertical-scan differences among the four options.\n4. Eliminate by named defect, then choose.\n5. If still torn at your later-trigger, mark, temporary-bubble, move.\n\n### Why this shows up on ACT English\nThe ACT recycles a finite menu of editing decisions. If you can name the decision type in two seconds\u2014agreement, punctuation join, transition logic, relevance, concision\u2014you stop rereading for vibes and start deciding like a copy editor with a stopwatch.\n\n### Common wrong-answer flavors\n- Sounds fancy but breaks grammar\n- True in the real world but off-purpose in the paragraph\n- Shortest but changes meaning\n- Longest because it repeats the same idea twice\n- Transition from the wrong logic family\n\n### Transfer to timed sections\nDrill this skill in untimed sets until the named reason is automatic, then fold it into nine-minute passage budgets. Content speed is strategy.\n\n## Video script (Prosper Prep original)\n\n*[Spoken narration ~750\u2013900 words \u2014 instructional video authoring script; not a claim that video is filmed.]*\n\n\"Welcome to Prosper Prep ACT English. Today's focus is Commas that matter. I am going to teach the rule, show a worked ACT-style item, give you a pause to try one, then replay the trap so you do not donate easy points under a thirty-six-second average.\n\nCommas signal whether information identifies a noun or merely adds extras. Use the deletion test. Essential clauses usually take no commas; nonessential clauses take a pair.\n\nNever park a lonely comma between subject and verb. Introductory phrases often take a comma. Lists take commas between items.\n\nComma splices are automatic wrong: two full sentences cannot be glued with only a comma. Fix with period, semicolon, or comma plus coordinating conjunction.\n\nUnder time pressure your ear will lie. Your pencil should not. Cross out interrupters, name the relationship before you pick a transition, and vertical-scan choice endings before you reread a whole paragraph. Elite English is not fancier vocabulary; it is faster, cleaner decisions with named reasons.\n\nPause the video. Say the rule in one sentence. Then complete the graded check below. Keep an error-log tag ready\u2014content, trap, or timing\u2014so this lesson becomes a lever, not a mood. Remember: Prosper Prep items are original; we do not rehost ACT Incorporated forms. Official practice is link-out or school-licensed only. Train integrity the same way you train grammar.\n\n One last rehearsal: cover the answer choices, predict the edit, uncover, eliminate by named defect, and only then commit. If you cannot name the defect, you are guessing earlier than necessary. Build that naming reflex until it feels automatic\u2014even boring. Boring under practice is calm under the clock. Finally, connect this skill to Module E pacing. A perfect rule that costs you two minutes on one item can still drop your section score if passage five becomes a blank field. Use now/later/guess. Bank clean usage points. Return to sticky rhetoric with a smaller clock and a sharper elimination tree. That combination\u2014content plus strategy\u2014is how composites climb toward the thirty-three-plus stretch band without pretending every item deserves a thesis.\"\n\n\n\n\nOn a real section, you will meet this skill wearing camouflage: a long sentence, a boring topic, and four choices that all look vaguely legal. That is intentional. The test is not checking whether you love the passage topic; it is checking whether you can execute a small editing move while the clock moves. So rehearse the move until it is boring. Boring skills survive adrenaline.\n\nHere is a second worked pattern. Cover the choices. Read the local window. Whisper the need: agreement, join, logic, relevance, or cut fat. Uncover choices and hunt only for that need. If two choices both seem to satisfy it, prefer the one that keeps meaning and sheds empty words\u2014unless the short one creates a new grammar break.\n\nAthletes already understand reps under fatigue. Treat English the same way. Do not wait for inspiration. Run the checklist. Tag misses after every drill. If the same trap appears three times, it is not bad luck; it is a curriculum assignment for your next study block.\n\nSay this out loud: name the decision, eliminate by defect, protect the clock. That sentence is the Module E strategy layer riding on top of the content rules. Content without strategy stalls. Strategy without content guesses. Together they raise raw scores.\n\n\n\nBefore you leave this video, rehearse the decision out loud once: name the skill, name the trap, name the fix. That three-beat habit is what survives on test day when adrenaline flattens careful reading. If you miss an item in practice, do not just glance at the key\u2014write the trap name in your error log and schedule a five-item mini-set on that trap within forty-eight hours. Spaced retrieval beats rereading the same explanation. Athletes already periodize training; do the same for English defects. One more practical tip: when two choices both seem grammatical, ask which one better preserves the paragraph's purpose and sheds empty words. That tie-breaker resolves a surprising number of late-section hesitations without burning another thirty seconds of rereading. Keep your pencil moving, keep your reasons named, and keep your composite levers honest.\n\n## Wrap-up\nComplete the graded check.\n",
    order: 8,
    durationMin: 35,
    sectionKey: "module-e2",
    questions: [
      {
        prompt: "Best punctuation: 'Athletes who arrive late ___ miss lane assignments.'",
        choices: [", who arrive late,", "who arrive late", "; who arrive late;", ": who arrive late,"],
        correctIndex: 1,
        explanation: "[EASY] Essential—no commas.",
        order: 1,
        points: 1,
      },
      {
        prompt: "Fix the splice: 'The starter raised a hand, the crowd went quiet.'",
        choices: ["NO CHANGE", "hand the crowd", "hand; the crowd went quiet.", "hand, crowd went"],
        correctIndex: 2,
        explanation: "[MEDIUM] Semicolon (or period / comma+FANBOYS).",
        order: 2,
        points: 1,
      },
      {
        prompt: "Illegal comma?",
        choices: ["After practice, we iced.", "The sprinter of the year, won easily.", "Jordan, who iced carefully, recovered.", "We packed spikes, blocks, and tape."],
        correctIndex: 1,
        explanation: "[EASY] Comma between subject and verb.",
        order: 3,
        points: 1,
      },
      {
        prompt: "'The 4x100, which had struggled in prelims, looked smooth in finals.' Commas are…",
        choices: ["Wrong because all which-clauses are essential", "Appropriate if the clause is extra info about a known relay", "Required only before which always", "Proof of a comma splice"],
        correctIndex: 1,
        explanation: "[MEDIUM] Nonessential setoff.",
        order: 4,
        points: 1,
      }
    ],
    topicMeta: {"title": "Commas that matter", "focus": "Essential vs nonessential", "keyIdeas": ["Deletion test", "No subject-verb comma", "No splices"], "practice": [{"q": "Essential clause commas?", "a": "usually none"}, {"q": "comma splice fix?", "a": "period/semicolon/FANBOYS"}]},
  };
}

function lessonE5(): LessonSeed {
  return {
    title: "E2.2 Apostrophes & possessives",
    description: "Singular/plural possessives, joint possession, and contraction traps.",
    objectives: "• Form singular and plural possessives correctly\n• Distinguish contractions from possessives\n• Handle joint vs separate possession",
    content: "# E2.2 Apostrophes & possessives\n\n## Objectives\n- Form singular and plural possessives correctly\n- Distinguish contractions from possessives\n- Handle joint vs separate possession\n\n## Teach\n### Basic forms\nSingular: *coach's*. Plural ending in s: *coaches'*. Irregular plural: *women's*.\n\n### Joint vs separate\n*Jordan and Sam's relay* (shared) vs *Jordan's and Sam's spikes* (each).\n\n### Never possessive with apostrophe\n*its, hers, ours, yours*. *It's* = it is.\n\n### Worked example\n*womens race* \u2192 *women's race*; *athletes's lounge* \u2192 *athletes' lounge*.\n\n## Practice\n1. Rewrite three nouns as plural possessives.\n2. Expand every *it's*; if expansion fails, use *its*.\n3. Choose joint vs separate possession for a shared project.\n\n\n\n### Elite checklist\n1. Read enough context\u2014usually the full sentence, sometimes the sentence before/after for rhetoric.\n2. Predict the relationship or the grammatical need before looking at choices.\n3. Vertical-scan differences among the four options.\n4. Eliminate by named defect, then choose.\n5. If still torn at your later-trigger, mark, temporary-bubble, move.\n\n### Why this shows up on ACT English\nThe ACT recycles a finite menu of editing decisions. If you can name the decision type in two seconds\u2014agreement, punctuation join, transition logic, relevance, concision\u2014you stop rereading for vibes and start deciding like a copy editor with a stopwatch.\n\n### Common wrong-answer flavors\n- Sounds fancy but breaks grammar\n- True in the real world but off-purpose in the paragraph\n- Shortest but changes meaning\n- Longest because it repeats the same idea twice\n- Transition from the wrong logic family\n\n### Transfer to timed sections\nDrill this skill in untimed sets until the named reason is automatic, then fold it into nine-minute passage budgets. Content speed is strategy.\n\n## Video script (Prosper Prep original)\n\n*[Spoken narration ~750\u2013900 words \u2014 instructional video authoring script; not a claim that video is filmed.]*\n\n\"Welcome to Prosper Prep ACT English. Today's focus is Apostrophes & possessives. I am going to teach the rule, show a worked ACT-style item, give you a pause to try one, then replay the trap so you do not donate easy points under a thirty-six-second average.\n\nApostrophes look small and cost big. Singular possession adds apostrophe-s. Plurals ending in s put the apostrophe after s. Irregular plurals like women take apostrophe-s.\n\nJoint possession marks the final name once. Separate possession marks both. Pronoun possessives never take apostrophes. Expand it's every time\u2014if you cannot, you want its. its' is never correct.\n\nUnder time pressure your ear will lie. Your pencil should not. Cross out interrupters, name the relationship before you pick a transition, and vertical-scan choice endings before you reread a whole paragraph. Elite English is not fancier vocabulary; it is faster, cleaner decisions with named reasons.\n\nPause the video. Say the rule in one sentence. Then complete the graded check below. Keep an error-log tag ready\u2014content, trap, or timing\u2014so this lesson becomes a lever, not a mood. Remember: Prosper Prep items are original; we do not rehost ACT Incorporated forms. Official practice is link-out or school-licensed only. Train integrity the same way you train grammar.\n\n One last rehearsal: cover the answer choices, predict the edit, uncover, eliminate by named defect, and only then commit. If you cannot name the defect, you are guessing earlier than necessary. Build that naming reflex until it feels automatic\u2014even boring. Boring under practice is calm under the clock. Finally, connect this skill to Module E pacing. A perfect rule that costs you two minutes on one item can still drop your section score if passage five becomes a blank field. Use now/later/guess. Bank clean usage points. Return to sticky rhetoric with a smaller clock and a sharper elimination tree. That combination\u2014content plus strategy\u2014is how composites climb toward the thirty-three-plus stretch band without pretending every item deserves a thesis.\"\n\n\n\n\nOn a real section, you will meet this skill wearing camouflage: a long sentence, a boring topic, and four choices that all look vaguely legal. That is intentional. The test is not checking whether you love the passage topic; it is checking whether you can execute a small editing move while the clock moves. So rehearse the move until it is boring. Boring skills survive adrenaline.\n\nHere is a second worked pattern. Cover the choices. Read the local window. Whisper the need: agreement, join, logic, relevance, or cut fat. Uncover choices and hunt only for that need. If two choices both seem to satisfy it, prefer the one that keeps meaning and sheds empty words\u2014unless the short one creates a new grammar break.\n\nAthletes already understand reps under fatigue. Treat English the same way. Do not wait for inspiration. Run the checklist. Tag misses after every drill. If the same trap appears three times, it is not bad luck; it is a curriculum assignment for your next study block.\n\nSay this out loud: name the decision, eliminate by defect, protect the clock. That sentence is the Module E strategy layer riding on top of the content rules. Content without strategy stalls. Strategy without content guesses. Together they raise raw scores.\n\n\n\nBefore you leave this video, rehearse the decision out loud once: name the skill, name the trap, name the fix. That three-beat habit is what survives on test day when adrenaline flattens careful reading. If you miss an item in practice, do not just glance at the key\u2014write the trap name in your error log and schedule a five-item mini-set on that trap within forty-eight hours. Spaced retrieval beats rereading the same explanation. Athletes already periodize training; do the same for English defects. One more practical tip: when two choices both seem grammatical, ask which one better preserves the paragraph's purpose and sheds empty words. That tie-breaker resolves a surprising number of late-section hesitations without burning another thirty seconds of rereading. Keep your pencil moving, keep your reasons named, and keep your composite levers honest.\n\n## Wrap-up\nComplete the graded check.\n",
    order: 9,
    durationMin: 30,
    sectionKey: "module-e2",
    questions: [
      {
        prompt: "Correct form: 'the ___ locker room' (belonging to several athletes)",
        choices: ["athlete's", "athletes", "athletes'", "athletes's"],
        correctIndex: 2,
        explanation: "[EASY] Plural possessive athletes'.",
        order: 1,
        points: 1,
      },
      {
        prompt: "'___ going to be a late bus; the team packed ___ bags.'",
        choices: ["Its / it's", "It's / its", "Its' / it's", "It's / it's"],
        correctIndex: 1,
        explanation: "[EASY] It's = it is; its = possessive.",
        order: 2,
        points: 1,
      },
      {
        prompt: "Shared ownership: '___ science fair project won.' (Maya and Priya together)",
        choices: ["Maya's and Priya's", "Maya and Priya's", "Maya and Priyas", "Maya' and Priya's"],
        correctIndex: 1,
        explanation: "[MEDIUM] Joint possession on second name.",
        order: 3,
        points: 1,
      },
      {
        prompt: "Which is never correct?",
        choices: ["women's", "its", "coaches'", "its'"],
        correctIndex: 3,
        explanation: "[EASY] its' is not a word.",
        order: 4,
        points: 1,
      }
    ],
    topicMeta: {"title": "Apostrophes & possessives", "focus": "Possession vs contraction", "keyIdeas": ["'s vs s'", "its/it's", "Joint possession"], "practice": [{"q": "runners' lanes", "a": "plural possessive"}, {"q": "it's", "a": "it is"}]},
  };
}

function lessonE6(): LessonSeed {
  return {
    title: "E2.3 Semicolons, colons, & dashes",
    description: "Join related independents, introduce lists/explanations, and dash for emphasis.",
    objectives: "• Use semicolons between related independent clauses\n• Use colons after a complete stem\n• Use dashes for nonessential emphasis",
    content: "# E2.3 Semicolons, colons, & dashes\n\n## Objectives\n- Use semicolons between related independent clauses\n- Use colons after a complete stem\n- Use dashes for nonessential emphasis\n\n## Teach\n### Semicolon\nLinks two related independent clauses without FANBOYS: *The prelim was messy; the final was clean.*\n\n### Colon\nFollows a complete independent clause, then introduces a list/explanation: *She packed three things: spikes, tape, water.*\n\n### Dash\nSets off nonessential material with punch: *The plan\u2014simple but strict\u2014worked.*\n\n### Worked example\nComma splice \u2192 period / semicolon / comma+FANBOYS. Colon needs a full stem.\n\n## Practice\n1. Label each side of punctuation as IC or not.\n2. Fix: *The rule is simple, arrive early.*\n3. Choose comma vs dash for a nonessential appositive.\n\n\n\n### Elite checklist\n1. Read enough context\u2014usually the full sentence, sometimes the sentence before/after for rhetoric.\n2. Predict the relationship or the grammatical need before looking at choices.\n3. Vertical-scan differences among the four options.\n4. Eliminate by named defect, then choose.\n5. If still torn at your later-trigger, mark, temporary-bubble, move.\n\n### Why this shows up on ACT English\nThe ACT recycles a finite menu of editing decisions. If you can name the decision type in two seconds\u2014agreement, punctuation join, transition logic, relevance, concision\u2014you stop rereading for vibes and start deciding like a copy editor with a stopwatch.\n\n### Common wrong-answer flavors\n- Sounds fancy but breaks grammar\n- True in the real world but off-purpose in the paragraph\n- Shortest but changes meaning\n- Longest because it repeats the same idea twice\n- Transition from the wrong logic family\n\n### Transfer to timed sections\nDrill this skill in untimed sets until the named reason is automatic, then fold it into nine-minute passage budgets. Content speed is strategy.\n\n## Video script (Prosper Prep original)\n\n*[Spoken narration ~750\u2013900 words \u2014 instructional video authoring script; not a claim that video is filmed.]*\n\n\"Welcome to Prosper Prep ACT English. Today's focus is Semicolons, colons, dashes. I am going to teach the rule, show a worked ACT-style item, give you a pause to try one, then replay the trap so you do not donate easy points under a thirty-six-second average.\n\nSemicolons, colons, and dashes are joining tools. Semicolon: two independent clauses, closely related. If a period would not work, a semicolon will not either.\n\nColon: complete stem first, then list or explanation. Colon after a fragment is a common wrong answer. Dashes set off extras with emphasis or mark a sharp break\u2014do not sprinkle them for style.\n\nUnder time pressure your ear will lie. Your pencil should not. Cross out interrupters, name the relationship before you pick a transition, and vertical-scan choice endings before you reread a whole paragraph. Elite English is not fancier vocabulary; it is faster, cleaner decisions with named reasons.\n\nPause the video. Say the rule in one sentence. Then complete the graded check below. Keep an error-log tag ready\u2014content, trap, or timing\u2014so this lesson becomes a lever, not a mood. Remember: Prosper Prep items are original; we do not rehost ACT Incorporated forms. Official practice is link-out or school-licensed only. Train integrity the same way you train grammar.\n\n One last rehearsal: cover the answer choices, predict the edit, uncover, eliminate by named defect, and only then commit. If you cannot name the defect, you are guessing earlier than necessary. Build that naming reflex until it feels automatic\u2014even boring. Boring under practice is calm under the clock. Finally, connect this skill to Module E pacing. A perfect rule that costs you two minutes on one item can still drop your section score if passage five becomes a blank field. Use now/later/guess. Bank clean usage points. Return to sticky rhetoric with a smaller clock and a sharper elimination tree. That combination\u2014content plus strategy\u2014is how composites climb toward the thirty-three-plus stretch band without pretending every item deserves a thesis.\"\n\n\n\n\nOn a real section, you will meet this skill wearing camouflage: a long sentence, a boring topic, and four choices that all look vaguely legal. That is intentional. The test is not checking whether you love the passage topic; it is checking whether you can execute a small editing move while the clock moves. So rehearse the move until it is boring. Boring skills survive adrenaline.\n\nHere is a second worked pattern. Cover the choices. Read the local window. Whisper the need: agreement, join, logic, relevance, or cut fat. Uncover choices and hunt only for that need. If two choices both seem to satisfy it, prefer the one that keeps meaning and sheds empty words\u2014unless the short one creates a new grammar break.\n\nAthletes already understand reps under fatigue. Treat English the same way. Do not wait for inspiration. Run the checklist. Tag misses after every drill. If the same trap appears three times, it is not bad luck; it is a curriculum assignment for your next study block.\n\nSay this out loud: name the decision, eliminate by defect, protect the clock. That sentence is the Module E strategy layer riding on top of the content rules. Content without strategy stalls. Strategy without content guesses. Together they raise raw scores.\n\n\n\nBefore you leave this video, rehearse the decision out loud once: name the skill, name the trap, name the fix. That three-beat habit is what survives on test day when adrenaline flattens careful reading. If you miss an item in practice, do not just glance at the key\u2014write the trap name in your error log and schedule a five-item mini-set on that trap within forty-eight hours. Spaced retrieval beats rereading the same explanation. Athletes already periodize training; do the same for English defects. One more practical tip: when two choices both seem grammatical, ask which one better preserves the paragraph's purpose and sheds empty words. That tie-breaker resolves a surprising number of late-section hesitations without burning another thirty seconds of rereading. Keep your pencil moving, keep your reasons named, and keep your composite levers honest.\n\n## Wrap-up\nComplete the graded check.\n",
    order: 10,
    durationMin: 35,
    sectionKey: "module-e2",
    questions: [
      {
        prompt: "Best join: 'The handoff was late ___ the team still advanced.'",
        choices: [",", "; ", ": ", "—"],
        correctIndex: 1,
        explanation: "[MEDIUM] Two ICs → semicolon (or comma+but).",
        order: 1,
        points: 1,
      },
      {
        prompt: "Correct colon use?",
        choices: ["She packed: spikes and water.", "She packed the essentials: spikes and water.", ": Spikes and water she packed.", "Packed she: spikes."],
        correctIndex: 1,
        explanation: "[EASY] Complete stem before colon.",
        order: 2,
        points: 1,
      },
      {
        prompt: "Dashes most appropriately…",
        choices: ["Join two ICs like a semicolon always", "Replace all periods", "Set off a nonessential break with emphasis", "Pluralize nouns"],
        correctIndex: 2,
        explanation: "[EASY] Emphasis / nonessential setoff.",
        order: 3,
        points: 1,
      },
      {
        prompt: "Which is a comma splice?",
        choices: ["She ran, and she won.", "She ran; she won.", "She ran, she won.", "She ran. She won."],
        correctIndex: 2,
        explanation: "[EASY] Comma alone between ICs.",
        order: 4,
        points: 1,
      }
    ],
    topicMeta: {"title": "Semicolons, colons, dashes", "focus": "Clause joining", "keyIdeas": ["Semicolon = related ICs", "Colon needs complete stem", "Dash for emphasis"], "practice": [{"q": "IC; IC?", "a": "semicolon OK"}, {"q": "Colon after fragment?", "a": "usually no"}]},
  };
}

function lessonE7(): LessonSeed {
  return {
    title: "E2.4 Fragments, run-ons, & modifiers",
    description: "Complete sentences, fix run-ons by structure, place modifiers next to what they modify.",
    objectives: "• Identify fragments lacking completeness\n• Repair run-ons structurally\n• Place modifiers next to the intended word",
    content: "# E2.4 Fragments, run-ons, & modifiers\n\n## Objectives\n- Identify fragments lacking completeness\n- Repair run-ons structurally\n- Place modifiers next to the intended word\n\n## Teach\n### Fragments\nDependent clauses alone (*Because she tapered.*) are not sentences.\n\n### Run-ons\nFused sentences and comma splices\u2014fix with punctuation, conjunction, or subordination.\n\n### Modifiers\nDangling: *Running to the bus, the bag ripped.* Misplaced *only/almost* change meaning.\n\n### Worked example\nAttach *Although the forecast threatened rain* to an independent clause.\n\n## Practice\n1. Mark subject and verb; flag dependents alone.\n2. Repair three splices three different ways.\n3. Rewrite a dangling modifier so the logical subject matches.\n\n\n\n### Elite checklist\n1. Read enough context\u2014usually the full sentence, sometimes the sentence before/after for rhetoric.\n2. Predict the relationship or the grammatical need before looking at choices.\n3. Vertical-scan differences among the four options.\n4. Eliminate by named defect, then choose.\n5. If still torn at your later-trigger, mark, temporary-bubble, move.\n\n### Why this shows up on ACT English\nThe ACT recycles a finite menu of editing decisions. If you can name the decision type in two seconds\u2014agreement, punctuation join, transition logic, relevance, concision\u2014you stop rereading for vibes and start deciding like a copy editor with a stopwatch.\n\n### Common wrong-answer flavors\n- Sounds fancy but breaks grammar\n- True in the real world but off-purpose in the paragraph\n- Shortest but changes meaning\n- Longest because it repeats the same idea twice\n- Transition from the wrong logic family\n\n### Transfer to timed sections\nDrill this skill in untimed sets until the named reason is automatic, then fold it into nine-minute passage budgets. Content speed is strategy.\n\n## Video script (Prosper Prep original)\n\n*[Spoken narration ~750\u2013900 words \u2014 instructional video authoring script; not a claim that video is filmed.]*\n\n\"Welcome to Prosper Prep ACT English. Today's focus is Fragments, run-ons, modifiers. I am going to teach the rule, show a worked ACT-style item, give you a pause to try one, then replay the trap so you do not donate easy points under a thirty-six-second average.\n\nFragments and run-ons are structure problems\u2014do not trust 'sound.' A complete sentence needs an independent clause. Although-clauses alone are fragments. Opening -ing phrases need a main clause whose subject matches the implied actor.\n\nRun-ons fuse two independents with nothing or only a comma. Fix structurally. Modifiers must sit next to what they describe; otherwise you create danglers and meaning shifts.\n\nUnder time pressure your ear will lie. Your pencil should not. Cross out interrupters, name the relationship before you pick a transition, and vertical-scan choice endings before you reread a whole paragraph. Elite English is not fancier vocabulary; it is faster, cleaner decisions with named reasons.\n\nPause the video. Say the rule in one sentence. Then complete the graded check below. Keep an error-log tag ready\u2014content, trap, or timing\u2014so this lesson becomes a lever, not a mood. Remember: Prosper Prep items are original; we do not rehost ACT Incorporated forms. Official practice is link-out or school-licensed only. Train integrity the same way you train grammar.\n\n One last rehearsal: cover the answer choices, predict the edit, uncover, eliminate by named defect, and only then commit. If you cannot name the defect, you are guessing earlier than necessary. Build that naming reflex until it feels automatic\u2014even boring. Boring under practice is calm under the clock. Finally, connect this skill to Module E pacing. A perfect rule that costs you two minutes on one item can still drop your section score if passage five becomes a blank field. Use now/later/guess. Bank clean usage points. Return to sticky rhetoric with a smaller clock and a sharper elimination tree. That combination\u2014content plus strategy\u2014is how composites climb toward the thirty-three-plus stretch band without pretending every item deserves a thesis.\"\n\n\n\n\nOn a real section, you will meet this skill wearing camouflage: a long sentence, a boring topic, and four choices that all look vaguely legal. That is intentional. The test is not checking whether you love the passage topic; it is checking whether you can execute a small editing move while the clock moves. So rehearse the move until it is boring. Boring skills survive adrenaline.\n\nHere is a second worked pattern. Cover the choices. Read the local window. Whisper the need: agreement, join, logic, relevance, or cut fat. Uncover choices and hunt only for that need. If two choices both seem to satisfy it, prefer the one that keeps meaning and sheds empty words\u2014unless the short one creates a new grammar break.\n\nAthletes already understand reps under fatigue. Treat English the same way. Do not wait for inspiration. Run the checklist. Tag misses after every drill. If the same trap appears three times, it is not bad luck; it is a curriculum assignment for your next study block.\n\nSay this out loud: name the decision, eliminate by defect, protect the clock. That sentence is the Module E strategy layer riding on top of the content rules. Content without strategy stalls. Strategy without content guesses. Together they raise raw scores.\n\n\n\nBefore you leave this video, rehearse the decision out loud once: name the skill, name the trap, name the fix. That three-beat habit is what survives on test day when adrenaline flattens careful reading. If you miss an item in practice, do not just glance at the key\u2014write the trap name in your error log and schedule a five-item mini-set on that trap within forty-eight hours. Spaced retrieval beats rereading the same explanation. Athletes already periodize training; do the same for English defects. One more practical tip: when two choices both seem grammatical, ask which one better preserves the paragraph's purpose and sheds empty words. That tie-breaker resolves a surprising number of late-section hesitations without burning another thirty seconds of rereading. Keep your pencil moving, keep your reasons named, and keep your composite levers honest.\n\n## Wrap-up\nComplete the graded check.\n",
    order: 11,
    durationMin: 35,
    sectionKey: "module-e2",
    questions: [
      {
        prompt: "Which is a fragment?",
        choices: ["The hurdles began on time.", "Because the forecast threatened rain.", "Maya blocked out the crowd.", "Spikes still worked."],
        correctIndex: 1,
        explanation: "[EASY] Dependent clause alone.",
        order: 1,
        points: 1,
      },
      {
        prompt: "Best dangler fix: 'Waiting in lane four, the starter's pistol fired.'",
        choices: ["NO CHANGE", "Waiting in lane four, Maya heard the starter's pistol fire.", "Waiting in lane four; the starter's pistol fired.", "Waiting in lane four the starter's pistol fired."],
        correctIndex: 1,
        explanation: "[MEDIUM] Make Maya the one waiting.",
        order: 2,
        points: 1,
      },
      {
        prompt: "Fused run-on?",
        choices: ["She arrived early she claimed lane one.", "She arrived early; she claimed lane one.", "She arrived early, and she claimed lane one.", "She arrived early. She claimed lane one."],
        correctIndex: 0,
        explanation: "[EASY] No punctuation between ICs.",
        order: 3,
        points: 1,
      },
      {
        prompt: "'She only ran three intervals of eight' most clearly means…",
        choices: ["She ran three and did nothing else involving intervals of eight", "She ran almost eight", "Grammar is impossible", "She never ran"],
        correctIndex: 0,
        explanation: "[HARD] only placement matters.",
        order: 4,
        points: 1,
      }
    ],
    topicMeta: {"title": "Fragments, run-ons, modifiers", "focus": "Sentence completeness", "keyIdeas": ["IC needed", "Structure fixes", "Modifier placement"], "practice": [{"q": "Although she won.", "a": "fragment"}, {"q": "Running…, the bag split", "a": "dangler"}]},
  };
}

function lessonE8(): LessonSeed {
  return {
    title: "E3.1 Transitions & logic",
    description: "Pick connectors that match contrast, cause, addition, or sequence.",
    objectives: "• Match transition to logical relationship\n• Reject repetitive connectors\n• Vertical-scan transition families",
    content: "# E3.1 Transitions & logic\n\n## Objectives\n- Match transition to logical relationship\n- Reject repetitive connectors\n- Vertical-scan transition families\n\n## Teach\n### Relationship first\nRead before and after. Contrast, cause/effect, addition, example, or sequence?\n\n### Families\nhowever/but (contrast); therefore/thus (cause); furthermore/also (addition); for example; next/then.\n\n### Worked example\nContext decides *However* vs *Therefore*. Deletion can win if sentences already link.\n\n## Practice\n1. Label relationships without looking at choices.\n2. Cross out transitions; see if deletion is cleaner.\n3. Sort connectors into five families.\n\n\n\n### Elite checklist\n1. Read enough context\u2014usually the full sentence, sometimes the sentence before/after for rhetoric.\n2. Predict the relationship or the grammatical need before looking at choices.\n3. Vertical-scan differences among the four options.\n4. Eliminate by named defect, then choose.\n5. If still torn at your later-trigger, mark, temporary-bubble, move.\n\n### Why this shows up on ACT English\nThe ACT recycles a finite menu of editing decisions. If you can name the decision type in two seconds\u2014agreement, punctuation join, transition logic, relevance, concision\u2014you stop rereading for vibes and start deciding like a copy editor with a stopwatch.\n\n### Common wrong-answer flavors\n- Sounds fancy but breaks grammar\n- True in the real world but off-purpose in the paragraph\n- Shortest but changes meaning\n- Longest because it repeats the same idea twice\n- Transition from the wrong logic family\n\n### Transfer to timed sections\nDrill this skill in untimed sets until the named reason is automatic, then fold it into nine-minute passage budgets. Content speed is strategy.\n\n## Video script (Prosper Prep original)\n\n*[Spoken narration ~750\u2013900 words \u2014 instructional video authoring script; not a claim that video is filmed.]*\n\n\"Welcome to Prosper Prep ACT English. Today's focus is Transitions & logic. I am going to teach the rule, show a worked ACT-style item, give you a pause to try one, then replay the trap so you do not donate easy points under a thirty-six-second average.\n\nTransitions are logic under a grammar costume. Name the relationship in plain English before you look at choices. Vertical-scan families and kill wrong-family options fast. Sometimes the best answer deletes the transition because the sentences already connect.\n\nUnder time pressure your ear will lie. Your pencil should not. Cross out interrupters, name the relationship before you pick a transition, and vertical-scan choice endings before you reread a whole paragraph. Elite English is not fancier vocabulary; it is faster, cleaner decisions with named reasons.\n\nPause the video. Say the rule in one sentence. Then complete the graded check below. Keep an error-log tag ready\u2014content, trap, or timing\u2014so this lesson becomes a lever, not a mood. Remember: Prosper Prep items are original; we do not rehost ACT Incorporated forms. Official practice is link-out or school-licensed only. Train integrity the same way you train grammar.\n\n One last rehearsal: cover the answer choices, predict the edit, uncover, eliminate by named defect, and only then commit. If you cannot name the defect, you are guessing earlier than necessary. Build that naming reflex until it feels automatic\u2014even boring. Boring under practice is calm under the clock. Finally, connect this skill to Module E pacing. A perfect rule that costs you two minutes on one item can still drop your section score if passage five becomes a blank field. Use now/later/guess. Bank clean usage points. Return to sticky rhetoric with a smaller clock and a sharper elimination tree. That combination\u2014content plus strategy\u2014is how composites climb toward the thirty-three-plus stretch band without pretending every item deserves a thesis.\"\n\n\n\n\nOn a real section, you will meet this skill wearing camouflage: a long sentence, a boring topic, and four choices that all look vaguely legal. That is intentional. The test is not checking whether you love the passage topic; it is checking whether you can execute a small editing move while the clock moves. So rehearse the move until it is boring. Boring skills survive adrenaline.\n\nHere is a second worked pattern. Cover the choices. Read the local window. Whisper the need: agreement, join, logic, relevance, or cut fat. Uncover choices and hunt only for that need. If two choices both seem to satisfy it, prefer the one that keeps meaning and sheds empty words\u2014unless the short one creates a new grammar break.\n\nAthletes already understand reps under fatigue. Treat English the same way. Do not wait for inspiration. Run the checklist. Tag misses after every drill. If the same trap appears three times, it is not bad luck; it is a curriculum assignment for your next study block.\n\nSay this out loud: name the decision, eliminate by defect, protect the clock. That sentence is the Module E strategy layer riding on top of the content rules. Content without strategy stalls. Strategy without content guesses. Together they raise raw scores.\n\n\n\nBefore you leave this video, rehearse the decision out loud once: name the skill, name the trap, name the fix. That three-beat habit is what survives on test day when adrenaline flattens careful reading. If you miss an item in practice, do not just glance at the key\u2014write the trap name in your error log and schedule a five-item mini-set on that trap within forty-eight hours. Spaced retrieval beats rereading the same explanation. Athletes already periodize training; do the same for English defects. One more practical tip: when two choices both seem grammatical, ask which one better preserves the paragraph's purpose and sheds empty words. That tie-breaker resolves a surprising number of late-section hesitations without burning another thirty seconds of rereading. Keep your pencil moving, keep your reasons named, and keep your composite levers honest.\n\n## Wrap-up\nComplete the graded check.\n",
    order: 12,
    durationMin: 35,
    sectionKey: "module-e3",
    questions: [
      {
        prompt: "Best transition: 'Rain flooded the track. ___, officials delayed the 200.' (cause)",
        choices: ["However", "Nevertheless", "Therefore", "Meanwhile"],
        correctIndex: 2,
        explanation: "[EASY] Cause → therefore.",
        order: 1,
        points: 1,
      },
      {
        prompt: "Best transition: 'She PR'd in the long jump. ___, her discus throws were uneven.' (contrast)",
        choices: ["Accordingly", "However", "Likewise", "For instance"],
        correctIndex: 1,
        explanation: "[EASY] Contrast → however.",
        order: 2,
        points: 1,
      },
      {
        prompt: "When should you delete a transition?",
        choices: ["Never; ACT always wants one", "When sentences already link clearly and the transition is redundant", "Only on Math", "When it is however"],
        correctIndex: 1,
        explanation: "[MEDIUM] Redundant connectors lose.",
        order: 3,
        points: 1,
      },
      {
        prompt: "'For example' is wrong when the next sentence…",
        choices: ["Gives a specific illustration", "States a contrasting claim instead of an illustration", "Is a list of instances", "Begins with a concrete case"],
        correctIndex: 1,
        explanation: "[MEDIUM] Example marker needs an example.",
        order: 4,
        points: 1,
      }
    ],
    topicMeta: {"title": "Transitions & logic", "focus": "Logic match", "keyIdeas": ["Contrast vs cause", "Addition vs example", "Delete fluff"], "practice": [{"q": "however vs therefore", "a": "contrast vs cause"}, {"q": "redundant indeed?", "a": "often delete"}]},
  };
}

function lessonE9(): LessonSeed {
  return {
    title: "E3.2 Organization & placement",
    description: "Where sentences and paragraphs belong for purpose and flow.",
    objectives: "• Place sentences to support paragraph purpose\n• Order for narrative or argument flow\n• Spot sentences that break focus",
    content: "# E3.2 Organization & placement\n\n## Objectives\n- Place sentences to support paragraph purpose\n- Order for narrative or argument flow\n- Spot sentences that break focus\n\n## Teach\n### Paragraph purpose\nAsk what the paragraph is doing; place the sentence where it advances that job.\n\n### Order cues\nTime order, cause before effect, general before specific\u2014unless signaled otherwise.\n\n### Worked example\nA result sentence belongs after the method is introduced. Pronouns like *this approach* need a prior referent.\n\n## Practice\n1. Write each paragraph's purpose in five words.\n2. Number sentences; propose one better order.\n3. Flag one sentence that should move or be deleted.\n\n\n\n### Elite checklist\n1. Read enough context\u2014usually the full sentence, sometimes the sentence before/after for rhetoric.\n2. Predict the relationship or the grammatical need before looking at choices.\n3. Vertical-scan differences among the four options.\n4. Eliminate by named defect, then choose.\n5. If still torn at your later-trigger, mark, temporary-bubble, move.\n\n### Why this shows up on ACT English\nThe ACT recycles a finite menu of editing decisions. If you can name the decision type in two seconds\u2014agreement, punctuation join, transition logic, relevance, concision\u2014you stop rereading for vibes and start deciding like a copy editor with a stopwatch.\n\n### Common wrong-answer flavors\n- Sounds fancy but breaks grammar\n- True in the real world but off-purpose in the paragraph\n- Shortest but changes meaning\n- Longest because it repeats the same idea twice\n- Transition from the wrong logic family\n\n### Transfer to timed sections\nDrill this skill in untimed sets until the named reason is automatic, then fold it into nine-minute passage budgets. Content speed is strategy.\n\n## Video script (Prosper Prep original)\n\n*[Spoken narration ~750\u2013900 words \u2014 instructional video authoring script; not a claim that video is filmed.]*\n\n\"Welcome to Prosper Prep ACT English. Today's focus is Organization & placement. I am going to teach the rule, show a worked ACT-style item, give you a pause to try one, then replay the trap so you do not donate easy points under a thirty-six-second average.\n\nOrganization questions ask where a sentence lives. Name the paragraph's job first. Plug placement options mentally and check pronouns and definite articles. Delete witty off-topic lines\u2014interesting is not the criterion; purpose is.\n\nUnder time pressure your ear will lie. Your pencil should not. Cross out interrupters, name the relationship before you pick a transition, and vertical-scan choice endings before you reread a whole paragraph. Elite English is not fancier vocabulary; it is faster, cleaner decisions with named reasons.\n\nPause the video. Say the rule in one sentence. Then complete the graded check below. Keep an error-log tag ready\u2014content, trap, or timing\u2014so this lesson becomes a lever, not a mood. Remember: Prosper Prep items are original; we do not rehost ACT Incorporated forms. Official practice is link-out or school-licensed only. Train integrity the same way you train grammar.\n\n One last rehearsal: cover the answer choices, predict the edit, uncover, eliminate by named defect, and only then commit. If you cannot name the defect, you are guessing earlier than necessary. Build that naming reflex until it feels automatic\u2014even boring. Boring under practice is calm under the clock. Finally, connect this skill to Module E pacing. A perfect rule that costs you two minutes on one item can still drop your section score if passage five becomes a blank field. Use now/later/guess. Bank clean usage points. Return to sticky rhetoric with a smaller clock and a sharper elimination tree. That combination\u2014content plus strategy\u2014is how composites climb toward the thirty-three-plus stretch band without pretending every item deserves a thesis.\"\n\n\n\n\nOn a real section, you will meet this skill wearing camouflage: a long sentence, a boring topic, and four choices that all look vaguely legal. That is intentional. The test is not checking whether you love the passage topic; it is checking whether you can execute a small editing move while the clock moves. So rehearse the move until it is boring. Boring skills survive adrenaline.\n\nHere is a second worked pattern. Cover the choices. Read the local window. Whisper the need: agreement, join, logic, relevance, or cut fat. Uncover choices and hunt only for that need. If two choices both seem to satisfy it, prefer the one that keeps meaning and sheds empty words\u2014unless the short one creates a new grammar break.\n\nAthletes already understand reps under fatigue. Treat English the same way. Do not wait for inspiration. Run the checklist. Tag misses after every drill. If the same trap appears three times, it is not bad luck; it is a curriculum assignment for your next study block.\n\nSay this out loud: name the decision, eliminate by defect, protect the clock. That sentence is the Module E strategy layer riding on top of the content rules. Content without strategy stalls. Strategy without content guesses. Together they raise raw scores.\n\n\n\nBefore you leave this video, rehearse the decision out loud once: name the skill, name the trap, name the fix. That three-beat habit is what survives on test day when adrenaline flattens careful reading. If you miss an item in practice, do not just glance at the key\u2014write the trap name in your error log and schedule a five-item mini-set on that trap within forty-eight hours. Spaced retrieval beats rereading the same explanation. Athletes already periodize training; do the same for English defects. One more practical tip: when two choices both seem grammatical, ask which one better preserves the paragraph's purpose and sheds empty words. That tie-breaker resolves a surprising number of late-section hesitations without burning another thirty seconds of rereading. Keep your pencil moving, keep your reasons named, and keep your composite levers honest.\n\n## Wrap-up\nComplete the graded check.\n",
    order: 13,
    durationMin: 35,
    sectionKey: "module-e3",
    questions: [
      {
        prompt: "A paragraph explains a new handoff drill. Where does a sentence about improved prelim times usually go?",
        choices: ["Before the drill is introduced", "After the drill is described, as a result", "In a paragraph about cafeteria food", "As the essay title only"],
        correctIndex: 1,
        explanation: "[EASY] Result after method.",
        order: 1,
        points: 1,
      },
      {
        prompt: "Best reason to delete a sentence?",
        choices: ["It is short", "It is grammatical", "It is off the paragraph's purpose", "It uses a comma"],
        correctIndex: 2,
        explanation: "[EASY] Relevance.",
        order: 2,
        points: 1,
      },
      {
        prompt: "Pronoun 'this approach' appears in a sentence to place. You should…",
        choices: ["Put it before any approach is named", "Ensure an approach has already been named", "Always put it first", "Replace all nouns with this"],
        correctIndex: 1,
        explanation: "[MEDIUM] Old-to-new flow.",
        order: 3,
        points: 1,
      },
      {
        prompt: "Narrative order most often follows…",
        choices: ["Random shuffle", "Alphabetical order", "Time sequence unless signaled otherwise", "Longest sentence first"],
        correctIndex: 2,
        explanation: "[EASY] Default chronology.",
        order: 4,
        points: 1,
      }
    ],
    topicMeta: {"title": "Organization & placement", "focus": "Placement & flow", "keyIdeas": ["Purpose first", "Old→new info", "Delete off-focus"], "practice": [{"q": "Lunch sentence in training paragraph?", "a": "delete/move"}, {"q": "Topic sentence?", "a": "usually open"}]},
  };
}

function lessonE10(): LessonSeed {
  return {
    title: "E3.3 Add / delete / revise",
    description: "Keep what serves purpose; cut redundancy and distraction.",
    objectives: "• Judge additions by relevance to purpose\n• Delete redundant or distracting material\n• Revise to match tone and audience",
    content: "# E3.3 Add / delete / revise\n\n## Objectives\n- Judge additions by relevance to purpose\n- Delete redundant or distracting material\n- Revise to match tone and audience\n\n## Teach\n### Purpose test\nWould adding the sentence help the paragraph's goal? If not, do not add.\n\n### Delete\nCut repeats (*past history*), off-topic asides, and extra examples when one suffices.\n\n### Revise\nMatch formality; prefer precise verbs; keep voice consistent.\n\n### Worked example\nTrue-but-irrelevant facts fail the purpose test.\n\n## Practice\n1. Write the paragraph goal in \u22648 words before choosing.\n2. Find two redundant pairs in a sample paragraph.\n3. Revise a slangy sentence into passage-appropriate tone.\n\n\n\n### Elite checklist\n1. Read enough context\u2014usually the full sentence, sometimes the sentence before/after for rhetoric.\n2. Predict the relationship or the grammatical need before looking at choices.\n3. Vertical-scan differences among the four options.\n4. Eliminate by named defect, then choose.\n5. If still torn at your later-trigger, mark, temporary-bubble, move.\n\n### Why this shows up on ACT English\nThe ACT recycles a finite menu of editing decisions. If you can name the decision type in two seconds\u2014agreement, punctuation join, transition logic, relevance, concision\u2014you stop rereading for vibes and start deciding like a copy editor with a stopwatch.\n\n### Common wrong-answer flavors\n- Sounds fancy but breaks grammar\n- True in the real world but off-purpose in the paragraph\n- Shortest but changes meaning\n- Longest because it repeats the same idea twice\n- Transition from the wrong logic family\n\n### Transfer to timed sections\nDrill this skill in untimed sets until the named reason is automatic, then fold it into nine-minute passage budgets. Content speed is strategy.\n\n## Video script (Prosper Prep original)\n\n*[Spoken narration ~750\u2013900 words \u2014 instructional video authoring script; not a claim that video is filmed.]*\n\n\"Welcome to Prosper Prep ACT English. Today's focus is Add / delete / revise. I am going to teach the rule, show a worked ACT-style item, give you a pause to try one, then replay the trap so you do not donate easy points under a thirty-six-second average.\n\nAdd/delete/revise items are relevance exams. Correct addition reasons cite relevant example, needed context, or useful transition\u2014not mere vividness. Deletion targets redundancy and off-purpose asides. Revision keeps tone consistent.\n\nUnder time pressure your ear will lie. Your pencil should not. Cross out interrupters, name the relationship before you pick a transition, and vertical-scan choice endings before you reread a whole paragraph. Elite English is not fancier vocabulary; it is faster, cleaner decisions with named reasons.\n\nPause the video. Say the rule in one sentence. Then complete the graded check below. Keep an error-log tag ready\u2014content, trap, or timing\u2014so this lesson becomes a lever, not a mood. Remember: Prosper Prep items are original; we do not rehost ACT Incorporated forms. Official practice is link-out or school-licensed only. Train integrity the same way you train grammar.\n\n One last rehearsal: cover the answer choices, predict the edit, uncover, eliminate by named defect, and only then commit. If you cannot name the defect, you are guessing earlier than necessary. Build that naming reflex until it feels automatic\u2014even boring. Boring under practice is calm under the clock. Finally, connect this skill to Module E pacing. A perfect rule that costs you two minutes on one item can still drop your section score if passage five becomes a blank field. Use now/later/guess. Bank clean usage points. Return to sticky rhetoric with a smaller clock and a sharper elimination tree. That combination\u2014content plus strategy\u2014is how composites climb toward the thirty-three-plus stretch band without pretending every item deserves a thesis.\"\n\n\n\n\nOn a real section, you will meet this skill wearing camouflage: a long sentence, a boring topic, and four choices that all look vaguely legal. That is intentional. The test is not checking whether you love the passage topic; it is checking whether you can execute a small editing move while the clock moves. So rehearse the move until it is boring. Boring skills survive adrenaline.\n\nHere is a second worked pattern. Cover the choices. Read the local window. Whisper the need: agreement, join, logic, relevance, or cut fat. Uncover choices and hunt only for that need. If two choices both seem to satisfy it, prefer the one that keeps meaning and sheds empty words\u2014unless the short one creates a new grammar break.\n\nAthletes already understand reps under fatigue. Treat English the same way. Do not wait for inspiration. Run the checklist. Tag misses after every drill. If the same trap appears three times, it is not bad luck; it is a curriculum assignment for your next study block.\n\nSay this out loud: name the decision, eliminate by defect, protect the clock. That sentence is the Module E strategy layer riding on top of the content rules. Content without strategy stalls. Strategy without content guesses. Together they raise raw scores.\n\n\n\nBefore you leave this video, rehearse the decision out loud once: name the skill, name the trap, name the fix. That three-beat habit is what survives on test day when adrenaline flattens careful reading. If you miss an item in practice, do not just glance at the key\u2014write the trap name in your error log and schedule a five-item mini-set on that trap within forty-eight hours. Spaced retrieval beats rereading the same explanation. Athletes already periodize training; do the same for English defects. One more practical tip: when two choices both seem grammatical, ask which one better preserves the paragraph's purpose and sheds empty words. That tie-breaker resolves a surprising number of late-section hesitations without burning another thirty seconds of rereading. Keep your pencil moving, keep your reasons named, and keep your composite levers honest.\n\n## Wrap-up\nComplete the graded check.\n",
    order: 14,
    durationMin: 35,
    sectionKey: "module-e3",
    questions: [
      {
        prompt: "Writer adds a sentence about cafeteria pizza in a paragraph on baton technique. Best decision?",
        choices: ["Add because food is interesting", "Do not add; irrelevant to purpose", "Add for humor always", "Add and delete the topic sentence"],
        correctIndex: 1,
        explanation: "[EASY] Relevance fails.",
        order: 1,
        points: 1,
      },
      {
        prompt: "Best deletion target?",
        choices: ["A necessary definition of a key term", "The phrase 'past history' where history suffices", "The thesis", "The only example"],
        correctIndex: 1,
        explanation: "[EASY] Redundancy.",
        order: 2,
        points: 1,
      },
      {
        prompt: "A good reason to ADD a sentence is that it…",
        choices: ["Mentions a celebrity", "Provides a relevant example supporting the paragraph goal", "Repeats the previous sentence", "Contradicts the thesis without purpose"],
        correctIndex: 1,
        explanation: "[MEDIUM] Relevant support.",
        order: 3,
        points: 1,
      },
      {
        prompt: "Tone revise: technical passage on reaction time. Worst choice?",
        choices: ["'Reaction time decreased by 40 milliseconds.'", "'The data were totally bananas.'", "'Athletes responded faster after sleep education.'", "'Mean response latency fell.'"],
        correctIndex: 1,
        explanation: "[EASY] Slang breaks tone.",
        order: 4,
        points: 1,
      }
    ],
    topicMeta: {"title": "Add / delete / revise", "focus": "Relevance", "keyIdeas": ["Purpose test", "Redundancy out", "Tone match"], "practice": [{"q": "Add unrelated fact?", "a": "no"}, {"q": "Two synonyms stacked?", "a": "delete one"}]},
  };
}

function lessonE11(): LessonSeed {
  return {
    title: "E3.4 Concision & style",
    description: "Shortest clear answer often wins; keep meaning; know when short loses.",
    objectives: "• Prefer concise wording that preserves meaning\n• Cut empty intensifiers\n• Know when a longer choice is required",
    content: "# E3.4 Concision & style\n\n## Objectives\n- Prefer concise wording that preserves meaning\n- Cut empty intensifiers\n- Know when a longer choice is required\n\n## Teach\n### Default\nAmong grammatical choices that keep meaning, pick the **most concise**.\n\n### Cut list\n*due to the fact that \u2192 because*; *in order to \u2192 to*; *completely finish \u2192 finish*.\n\n### When short loses\nIf shortest breaks grammar, drops a needed word, or changes meaning, it loses.\n\n### Worked example\n*She won due to the fact that she tapered* \u2192 *because she tapered*.\n\n## Practice\n1. Trim five wordy phrases without changing meaning.\n2. Find one item where shortest choice is wrong\u2014explain why.\n3. Replace empty intensifiers when useless.\n\n\n\n### Elite checklist\n1. Read enough context\u2014usually the full sentence, sometimes the sentence before/after for rhetoric.\n2. Predict the relationship or the grammatical need before looking at choices.\n3. Vertical-scan differences among the four options.\n4. Eliminate by named defect, then choose.\n5. If still torn at your later-trigger, mark, temporary-bubble, move.\n\n### Why this shows up on ACT English\nThe ACT recycles a finite menu of editing decisions. If you can name the decision type in two seconds\u2014agreement, punctuation join, transition logic, relevance, concision\u2014you stop rereading for vibes and start deciding like a copy editor with a stopwatch.\n\n### Common wrong-answer flavors\n- Sounds fancy but breaks grammar\n- True in the real world but off-purpose in the paragraph\n- Shortest but changes meaning\n- Longest because it repeats the same idea twice\n- Transition from the wrong logic family\n\n### Transfer to timed sections\nDrill this skill in untimed sets until the named reason is automatic, then fold it into nine-minute passage budgets. Content speed is strategy.\n\n## Video script (Prosper Prep original)\n\n*[Spoken narration ~750\u2013900 words \u2014 instructional video authoring script; not a claim that video is filmed.]*\n\n\"Welcome to Prosper Prep ACT English. Today's focus is Concision & style. I am going to teach the rule, show a worked ACT-style item, give you a pause to try one, then replay the trap so you do not donate easy points under a thirty-six-second average.\n\nConcision is the elite default: if choices are grammatical and mean the same, shortest usually wins. Cut due-to-the-fact-that and empty intensifiers. But shortest is not a religion\u2014if the brief choice is ungrammatical or unclear, keep the needed words. Ask: why is the shortest wrong this time?\n\nUnder time pressure your ear will lie. Your pencil should not. Cross out interrupters, name the relationship before you pick a transition, and vertical-scan choice endings before you reread a whole paragraph. Elite English is not fancier vocabulary; it is faster, cleaner decisions with named reasons.\n\nPause the video. Say the rule in one sentence. Then complete the graded check below. Keep an error-log tag ready\u2014content, trap, or timing\u2014so this lesson becomes a lever, not a mood. Remember: Prosper Prep items are original; we do not rehost ACT Incorporated forms. Official practice is link-out or school-licensed only. Train integrity the same way you train grammar.\n\n One last rehearsal: cover the answer choices, predict the edit, uncover, eliminate by named defect, and only then commit. If you cannot name the defect, you are guessing earlier than necessary. Build that naming reflex until it feels automatic\u2014even boring. Boring under practice is calm under the clock. Finally, connect this skill to Module E pacing. A perfect rule that costs you two minutes on one item can still drop your section score if passage five becomes a blank field. Use now/later/guess. Bank clean usage points. Return to sticky rhetoric with a smaller clock and a sharper elimination tree. That combination\u2014content plus strategy\u2014is how composites climb toward the thirty-three-plus stretch band without pretending every item deserves a thesis.\"\n\n\n\n\nOn a real section, you will meet this skill wearing camouflage: a long sentence, a boring topic, and four choices that all look vaguely legal. That is intentional. The test is not checking whether you love the passage topic; it is checking whether you can execute a small editing move while the clock moves. So rehearse the move until it is boring. Boring skills survive adrenaline.\n\nHere is a second worked pattern. Cover the choices. Read the local window. Whisper the need: agreement, join, logic, relevance, or cut fat. Uncover choices and hunt only for that need. If two choices both seem to satisfy it, prefer the one that keeps meaning and sheds empty words\u2014unless the short one creates a new grammar break.\n\nAthletes already understand reps under fatigue. Treat English the same way. Do not wait for inspiration. Run the checklist. Tag misses after every drill. If the same trap appears three times, it is not bad luck; it is a curriculum assignment for your next study block.\n\nSay this out loud: name the decision, eliminate by defect, protect the clock. That sentence is the Module E strategy layer riding on top of the content rules. Content without strategy stalls. Strategy without content guesses. Together they raise raw scores.\n\n\n\nBefore you leave this video, rehearse the decision out loud once: name the skill, name the trap, name the fix. That three-beat habit is what survives on test day when adrenaline flattens careful reading. If you miss an item in practice, do not just glance at the key\u2014write the trap name in your error log and schedule a five-item mini-set on that trap within forty-eight hours. Spaced retrieval beats rereading the same explanation. Athletes already periodize training; do the same for English defects. One more practical tip: when two choices both seem grammatical, ask which one better preserves the paragraph's purpose and sheds empty words. That tie-breaker resolves a surprising number of late-section hesitations without burning another thirty seconds of rereading. Keep your pencil moving, keep your reasons named, and keep your composite levers honest.\n\n## Wrap-up\nComplete the graded check.\n",
    order: 15,
    durationMin: 35,
    sectionKey: "module-e3",
    questions: [
      {
        prompt: "Most concise correct replacement for 'due to the fact that'?",
        choices: ["owing to the reason that", "because", "based on the fact of", "in light of the reality that"],
        correctIndex: 1,
        explanation: "[EASY] because.",
        order: 1,
        points: 1,
      },
      {
        prompt: "When is the shortest choice wrong?",
        choices: ["Never on ACT English", "When it breaks grammar or changes needed meaning", "When it is three words", "When it uses because"],
        correctIndex: 1,
        explanation: "[MEDIUM] Concision cannot excuse errors.",
        order: 2,
        points: 1,
      },
      {
        prompt: "Best concise edit: 'She completely finished the warm-up routine.'",
        choices: ["She finished the warm-up routine.", "She completely totally finished the warm-up routine.", "She did finish completely the warm-up routine.", "She finished completely totally the warm-up."],
        correctIndex: 0,
        explanation: "[EASY] Drop empty intensifier.",
        order: 3,
        points: 1,
      },
      {
        prompt: "'In order to improve, she slept' → best?",
        choices: ["In order that she improve, she slept", "To improve, she slept", "For the purpose of improving improvement, she slept", "So as to be able to improve, she slept"],
        correctIndex: 1,
        explanation: "[EASY] to improve.",
        order: 4,
        points: 1,
      }
    ],
    topicMeta: {"title": "Concision & style", "focus": "Shortest clear", "keyIdeas": ["Omit needless words", "Keep meaning", "Longer if clearer/correct"], "practice": [{"q": "due to the fact that →", "a": "because"}, {"q": "shortest always?", "a": "no if grammar breaks"}]},
  };
}

function lessonE12(): LessonSeed {
  return {
    title: "E4.1 Passage triage & pacing",
    description: "Nine-minute passage budgets, attack order, and when to skip inside English.",
    objectives: "• Budget ~9 minutes per English passage block\n• Protect easy grammar points under time\n• Apply now/later/guess inside a passage",
    content: "# E4.1 Passage triage & pacing\n\n## Objectives\n- Budget ~9 minutes per English passage block\n- Protect easy grammar points under time\n- Apply now/later/guess inside a passage\n\n## Teach\n### The clock\n75 questions / 45 minutes \u2248 36 seconds each; about **9 minutes** per passage block.\n\n### Attack\nRead enough local context; vertical-scan choice differences for underlined grammar; do not reread the whole essay for every rhetoric item.\n\n### Triage\nMark sticky add/delete rationales as later; bank clean agreement/punctuation first.\n\n### Checkpoint\nAfter passage 2, if >~2 minutes behind, shorten rhetoric deliberation.\n\n## Practice\n1. Time a 15-item set in 9 minutes.\n2. Write your personal later-trigger for rhetoric.\n3. Plan bubble batches (every 5 items).\n\n\n\n\n\n### Elite checklist\n1. Read enough context\u2014usually the full sentence, sometimes the sentence before/after for rhetoric.\n2. Predict the relationship or the grammatical need before looking at choices.\n3. Vertical-scan differences among the four options.\n4. Eliminate by named defect, then choose.\n5. If still torn at your later-trigger, mark, temporary-bubble, move.\n\n### Why this shows up on ACT English\nThe ACT recycles a finite menu of editing decisions. If you can name the decision type in two seconds\u2014agreement, punctuation join, transition logic, relevance, concision\u2014you stop rereading for vibes and start deciding like a copy editor with a stopwatch.\n\n### Common wrong-answer flavors\n- Sounds fancy but breaks grammar\n- True in the real world but off-purpose in the paragraph\n- Shortest but changes meaning\n- Longest because it repeats the same idea twice\n- Transition from the wrong logic family\n\n### Transfer to timed sections\nDrill this skill in untimed sets until the named reason is automatic, then fold it into nine-minute passage budgets. Content speed is strategy.\n\n## Video script (Prosper Prep original)\n\n*[Spoken narration ~750\u2013900 words \u2014 instructional video authoring script; not a claim that video is filmed.]*\n\n\"Welcome to Prosper Prep ACT English. Today's focus is Passage triage & pacing. I am going to teach the rule, show a worked ACT-style item, give you a pause to try one, then replay the trap so you do not donate easy points under a thirty-six-second average.\n\nEnglish strategy starts with arithmetic: seventy-five in forty-five, about thirty-six seconds each, five blocks near nine minutes. Treat nine minutes as a budget. Vertical-scan grammar differences. Window the local paragraph for rhetoric. If a deletion rationale eats ninety seconds, mark later and bank the next clean subject-verb item. Checkpoint after passage two. Protect passage five. Blanks at the end are composite poison.\n\nUnder time pressure your ear will lie. Your pencil should not. Cross out interrupters, name the relationship before you pick a transition, and vertical-scan choice endings before you reread a whole paragraph. Elite English is not fancier vocabulary; it is faster, cleaner decisions with named reasons.\n\nPause the video. Say the rule in one sentence. Then complete the graded check below. Keep an error-log tag ready\u2014content, trap, or timing\u2014so this lesson becomes a lever, not a mood. Remember: Prosper Prep items are original; we do not rehost ACT Incorporated forms. Official practice is link-out or school-licensed only. Train integrity the same way you train grammar.\n\n One last rehearsal: cover the answer choices, predict the edit, uncover, eliminate by named defect, and only then commit. If you cannot name the defect, you are guessing earlier than necessary. Build that naming reflex until it feels automatic\u2014even boring. Boring under practice is calm under the clock. Finally, connect this skill to Module E pacing. A perfect rule that costs you two minutes on one item can still drop your section score if passage five becomes a blank field. Use now/later/guess. Bank clean usage points. Return to sticky rhetoric with a smaller clock and a sharper elimination tree. That combination\u2014content plus strategy\u2014is how composites climb toward the thirty-three-plus stretch band without pretending every item deserves a thesis.\"\n\n\n\n\nOn a real section, you will meet this skill wearing camouflage: a long sentence, a boring topic, and four choices that all look vaguely legal. That is intentional. The test is not checking whether you love the passage topic; it is checking whether you can execute a small editing move while the clock moves. So rehearse the move until it is boring. Boring skills survive adrenaline.\n\nHere is a second worked pattern. Cover the choices. Read the local window. Whisper the need: agreement, join, logic, relevance, or cut fat. Uncover choices and hunt only for that need. If two choices both seem to satisfy it, prefer the one that keeps meaning and sheds empty words\u2014unless the short one creates a new grammar break.\n\nAthletes already understand reps under fatigue. Treat English the same way. Do not wait for inspiration. Run the checklist. Tag misses after every drill. If the same trap appears three times, it is not bad luck; it is a curriculum assignment for your next study block.\n\nSay this out loud: name the decision, eliminate by defect, protect the clock. That sentence is the Module E strategy layer riding on top of the content rules. Content without strategy stalls. Strategy without content guesses. Together they raise raw scores.\n\n\n\nBefore you leave this video, rehearse the decision out loud once: name the skill, name the trap, name the fix. That three-beat habit is what survives on test day when adrenaline flattens careful reading. If you miss an item in practice, do not just glance at the key\u2014write the trap name in your error log and schedule a five-item mini-set on that trap within forty-eight hours. Spaced retrieval beats rereading the same explanation. Athletes already periodize training; do the same for English defects. One more practical tip: when two choices both seem grammatical, ask which one better preserves the paragraph's purpose and sheds empty words. That tie-breaker resolves a surprising number of late-section hesitations without burning another thirty seconds of rereading. Keep your pencil moving, keep your reasons named, and keep your composite levers honest.\n\n## Wrap-up\nComplete the graded check.\n",
    order: 16,
    durationMin: 35,
    sectionKey: "module-e4",
    questions: [
      {
        prompt: "Approximate English pace?",
        choices: ["75 questions / 45 minutes", "60 / 60", "40 / 35", "1 essay / 40"],
        correctIndex: 0,
        explanation: "[EASY] English 75/45.",
        order: 1,
        points: 1,
      },
      {
        prompt: "Best response if behind after passage 2?",
        choices: ["Quit the section", "Shorten rhetoric deliberation and protect later passages", "Skip bubbling forever", "Restart passage 1"],
        correctIndex: 1,
        explanation: "[MEDIUM] Cut losses; protect clock.",
        order: 2,
        points: 1,
      },
      {
        prompt: "For many underlined grammar items, elites often…",
        choices: ["Reread the entire passage from line 1", "Vertical-scan choice differences first", "Ignore the sentence", "Always pick NO CHANGE"],
        correctIndex: 1,
        explanation: "[EASY] Vertical scan.",
        order: 3,
        points: 1,
      },
      {
        prompt: "Why triage sticky rhetoric items?",
        choices: ["Rhetoric never appears", "They can steal time from easier usage points", "Grammar is unscored", "Bubbling is optional"],
        correctIndex: 1,
        explanation: "[MEDIUM] Time sinks vs bankable points.",
        order: 4,
        points: 1,
      }
    ],
    topicMeta: {"title": "Passage triage & pacing", "focus": "9-minute budgets", "keyIdeas": ["75/45 pace", "Bank easy grammar", "Checkpoint after P2"], "practice": [{"q": "English timing?", "a": "75/45"}, {"q": "Behind after P2?", "a": "shorten deliberation"}]},
  };
}

function lessonE13(): LessonSeed {
  return {
    title: "E4.2 Elimination trees",
    description: "Wrong-reason catalog: redundancy, agreement decoys, logic-mismatch transitions.",
    objectives: "• Eliminate by named wrong reasons\n• Use two-pass elimination under time\n• Catalog personal frequent traps",
    content: "# E4.2 Elimination trees\n\n## Objectives\n- Eliminate by named wrong reasons\n- Use two-pass elimination under time\n- Catalog personal frequent traps\n\n## Teach\n### Named defects\nGrammar breakers; redundancy; wrong logic; off-purpose; meaning change; ambiguous pronoun/dangler.\n\n### Two-pass\nPass 1: kill illegal grammar. Pass 2: among survivors, apply concision and purpose.\n\n### Worked tree\nTransition item, relationship = contrast \u2192 kill therefore/furthermore; kill wordy stacks; keep however.\n\n## Practice\n1. Build a one-page wrong-reason catalog from Form A English misses.\n2. Force elimination of two choices before selecting on 10 items.\n3. Teach a partner one trap with an original example.\n\n\n\n\n\n### Elite checklist\n1. Read enough context\u2014usually the full sentence, sometimes the sentence before/after for rhetoric.\n2. Predict the relationship or the grammatical need before looking at choices.\n3. Vertical-scan differences among the four options.\n4. Eliminate by named defect, then choose.\n5. If still torn at your later-trigger, mark, temporary-bubble, move.\n\n### Why this shows up on ACT English\nThe ACT recycles a finite menu of editing decisions. If you can name the decision type in two seconds\u2014agreement, punctuation join, transition logic, relevance, concision\u2014you stop rereading for vibes and start deciding like a copy editor with a stopwatch.\n\n### Common wrong-answer flavors\n- Sounds fancy but breaks grammar\n- True in the real world but off-purpose in the paragraph\n- Shortest but changes meaning\n- Longest because it repeats the same idea twice\n- Transition from the wrong logic family\n\n### Transfer to timed sections\nDrill this skill in untimed sets until the named reason is automatic, then fold it into nine-minute passage budgets. Content speed is strategy.\n\n## Video script (Prosper Prep original)\n\n*[Spoken narration ~750\u2013900 words \u2014 instructional video authoring script; not a claim that video is filmed.]*\n\n\"Welcome to Prosper Prep ACT English. Today's focus is Elimination trees. I am going to teach the rule, show a worked ACT-style item, give you a pause to try one, then replay the trap so you do not donate easy points under a thirty-six-second average.\n\nElimination trees turn English from vibes into engineering. Name the defect: agreement break, splice, redundancy, wrong-family transition, off-purpose addition. Pass one kills illegal grammar. Pass two compares survivors on concision and purpose. Your Form A miss log becomes a personal catalog\u2014study defects, not 'English' as a fog.\n\nUnder time pressure your ear will lie. Your pencil should not. Cross out interrupters, name the relationship before you pick a transition, and vertical-scan choice endings before you reread a whole paragraph. Elite English is not fancier vocabulary; it is faster, cleaner decisions with named reasons.\n\nPause the video. Say the rule in one sentence. Then complete the graded check below. Keep an error-log tag ready\u2014content, trap, or timing\u2014so this lesson becomes a lever, not a mood. Remember: Prosper Prep items are original; we do not rehost ACT Incorporated forms. Official practice is link-out or school-licensed only. Train integrity the same way you train grammar.\n\n One last rehearsal: cover the answer choices, predict the edit, uncover, eliminate by named defect, and only then commit. If you cannot name the defect, you are guessing earlier than necessary. Build that naming reflex until it feels automatic\u2014even boring. Boring under practice is calm under the clock. Finally, connect this skill to Module E pacing. A perfect rule that costs you two minutes on one item can still drop your section score if passage five becomes a blank field. Use now/later/guess. Bank clean usage points. Return to sticky rhetoric with a smaller clock and a sharper elimination tree. That combination\u2014content plus strategy\u2014is how composites climb toward the thirty-three-plus stretch band without pretending every item deserves a thesis.\"\n\n\n\n\nOn a real section, you will meet this skill wearing camouflage: a long sentence, a boring topic, and four choices that all look vaguely legal. That is intentional. The test is not checking whether you love the passage topic; it is checking whether you can execute a small editing move while the clock moves. So rehearse the move until it is boring. Boring skills survive adrenaline.\n\nHere is a second worked pattern. Cover the choices. Read the local window. Whisper the need: agreement, join, logic, relevance, or cut fat. Uncover choices and hunt only for that need. If two choices both seem to satisfy it, prefer the one that keeps meaning and sheds empty words\u2014unless the short one creates a new grammar break.\n\nAthletes already understand reps under fatigue. Treat English the same way. Do not wait for inspiration. Run the checklist. Tag misses after every drill. If the same trap appears three times, it is not bad luck; it is a curriculum assignment for your next study block.\n\nSay this out loud: name the decision, eliminate by defect, protect the clock. That sentence is the Module E strategy layer riding on top of the content rules. Content without strategy stalls. Strategy without content guesses. Together they raise raw scores.\n\n\n\nBefore you leave this video, rehearse the decision out loud once: name the skill, name the trap, name the fix. That three-beat habit is what survives on test day when adrenaline flattens careful reading. If you miss an item in practice, do not just glance at the key\u2014write the trap name in your error log and schedule a five-item mini-set on that trap within forty-eight hours. Spaced retrieval beats rereading the same explanation. Athletes already periodize training; do the same for English defects. One more practical tip: when two choices both seem grammatical, ask which one better preserves the paragraph's purpose and sheds empty words. That tie-breaker resolves a surprising number of late-section hesitations without burning another thirty seconds of rereading. Keep your pencil moving, keep your reasons named, and keep your composite levers honest.\n\n## Wrap-up\nComplete the graded check.\n",
    order: 17,
    durationMin: 35,
    sectionKey: "module-e4",
    questions: [
      {
        prompt: "First elimination pass should prioritize…",
        choices: ["Tone opinions only", "Clear grammar breakers", "Longest choices only", "Deleting all NO CHANGE"],
        correctIndex: 1,
        explanation: "[EASY] Kill illegal grammar first.",
        order: 1,
        points: 1,
      },
      {
        prompt: "A choice with 'due to the fact that however' is likely wrong because it is…",
        choices: ["Always official", "Wordy / stacked nonsense", "Required for score", "A Math formula"],
        correctIndex: 1,
        explanation: "[EASY] Redundancy/stacking.",
        order: 2,
        points: 1,
      },
      {
        prompt: "If relationship is contrast, eliminate…",
        choices: ["however", "nevertheless", "therefore", "yet"],
        correctIndex: 2,
        explanation: "[MEDIUM] therefore is cause/effect.",
        order: 3,
        points: 1,
      },
      {
        prompt: "Best use of your Form A English miss log?",
        choices: ["Ignore it", "Build a personal wrong-reason catalog and drill those defects", "Only study Science", "Memorize answer letters"],
        correctIndex: 1,
        explanation: "[EASY] Personalize traps.",
        order: 4,
        points: 1,
      }
    ],
    topicMeta: {"title": "Elimination trees", "focus": "Wrong-reason catalog", "keyIdeas": ["Name the defect", "Kill two fast", "Guess among survivors"], "practice": [{"q": "Redundant choice?", "a": "eliminate"}, {"q": "Wrong logic transition?", "a": "eliminate"}]},
  };
}

function lessonE14(): LessonSeed {
  return {
    title: "E4.3 Timed English section drill",
    description: "Full-section pacing callouts, error logging, and written fix-and-justify.",
    objectives: "• Complete a timed English section drill with checkpoints\n• Log misses by content/trap/timing\n• Rewrite a sentence and justify the rule in writing",
    content: "# E4.3 Timed English section drill\n\n## Objectives\n- Complete a timed English section drill with checkpoints\n- Log misses by content/trap/timing\n- Rewrite a sentence and justify the rule in writing\n\n## Teach\n### How to run the drill\n1. Use **ACT English Section Drill 1** (or 2) on the course page under timed conditions (45 minutes if full 75).\n2. Callouts: check clock at items ~15, 30, 45, 60.\n3. Bubble as you go; no mid-section phone breaks.\n4. Afterward, tag every miss: **content / trap / timing**.\n\n### Live pacing callouts\n- Behind at item 30? Shorten deliberation now.\n- Last 3 minutes: ensure no blanks; return to marked rhetoric.\n\n### Written fix-and-justify\nRewrite one flawed sentence correctly and explain the governing rules for teacher scoring.\n\n### Worked mindset\nA drill without an error log is entertainment. A drill with tags is training.\n\n<!-- WRITTEN_PROMPT:English fix-and-justify|10 -->\nFix-and-justify (teacher-scored, max 10 points).\n\nSentence to repair:\n\"Waiting for the starter's pistol, the track was silent, the sprinters whom was in lane three almost false started due to the fact that they was nervous.\"\n\nYour task (about 150\u2013250 words):\n1. Rewrite the sentence (or split into two) so it is clear, grammatical, and concise.\n2. Name at least three distinct rules/issues you fixed (e.g., dangling modifier, comma splice, who/whom, agreement, concision).\n3. For each issue, explain in one or two sentences why your revision is correct on ACT English terms.\n4. End with one pacing note: how you would triage a messy sentence like this under a 36-second average.\n\nWrite in paragraphs. Specific beats vague.\n<!-- /WRITTEN_PROMPT -->\n\n\n## Practice\n1. Complete Drill 1 timed; tag misses the same day.\n2. Re-do only tagged timing misses untimed\u2014confirm they were pacing, not content.\n3. Submit the written fix-and-justify.\n\n\n\n## Video script (Prosper Prep original)\n\n*[Spoken narration ~750\u2013900 words \u2014 instructional video authoring script; not a claim that video is filmed.]*\n\n\"Welcome to Prosper Prep ACT English. Today's focus is Timed English wrap-up. I am going to teach the rule, show a worked ACT-style item, give you a pause to try one, then replay the trap so you do not donate easy points under a thirty-six-second average.\n\nThis lesson wraps Module E with a timed English section drill and a written fix-and-justify. Set up like test day. Forty-five minutes for a full seventy-five-item drill. Hit callouts near items fifteen, thirty, forty-five, and sixty. When the timer ends, stop. Tag every miss as content, trap, or timing. The written assignment stacks defects\u2014dangling modifier, splice, who/whom, agreement, wordiness\u2014and asks you to justify each fix with a named rule. Teachers score clarity of rewrite and accuracy of justification. After Drill 1, schedule Drill 2 later so improvement is measured.\n\nUnder time pressure your ear will lie. Your pencil should not. Cross out interrupters, name the relationship before you pick a transition, and vertical-scan choice endings before you reread a whole paragraph. Elite English is not fancier vocabulary; it is faster, cleaner decisions with named reasons.\n\nPause the video. Say the rule in one sentence. Then complete the graded check below. Keep an error-log tag ready\u2014content, trap, or timing\u2014so this lesson becomes a lever, not a mood. Remember: Prosper Prep items are original; we do not rehost ACT Incorporated forms. Official practice is link-out or school-licensed only. Train integrity the same way you train grammar.\n\n One last rehearsal: cover the answer choices, predict the edit, uncover, eliminate by named defect, and only then commit. If you cannot name the defect, you are guessing earlier than necessary. Build that naming reflex until it feels automatic\u2014even boring. Boring under practice is calm under the clock. Finally, connect this skill to Module E pacing. A perfect rule that costs you two minutes on one item can still drop your section score if passage five becomes a blank field. Use now/later/guess. Bank clean usage points. Return to sticky rhetoric with a smaller clock and a sharper elimination tree. That combination\u2014content plus strategy\u2014is how composites climb toward the thirty-three-plus stretch band without pretending every item deserves a thesis.\"\n\n\n\n\n### Pacing callout script (say aloud during Drill 1)\n- Item 15: \"Am I near nine minutes used?\"\n- Item 30: \"Halfway map\u2014if behind, shorten rhetoric now.\"\n- Item 45: \"Protect the last two passages.\"\n- Item 60: \"No blanks left behind; guess with elimination.\"\n- Final 3 minutes: bubble remaining, then return to marked items only.\n\n### After-action review template\n| Item # | Skill tag | Miss type (content/trap/timing) | Next drill |\n|---|---|---|---|\n|  |  |  |  |\n\nFill at least eight rows the same day. Same-day tags beat weekend mythology.\n\n### Why written fix-and-justify belongs here\nConscious competence is the bridge between knowing a rule in a lesson and applying it at second thirty-four of a messy sentence. Writing the repair and naming the rules forces retrieval under mild pressure\u2014closer to test day than silent nodding at an answer key.\n\n\n\nBefore you leave this video, rehearse the decision out loud once: name the skill, name the trap, name the fix. That three-beat habit is what survives on test day when adrenaline flattens careful reading. If you miss an item in practice, do not just glance at the key\u2014write the trap name in your error log and schedule a five-item mini-set on that trap within forty-eight hours. Spaced retrieval beats rereading the same explanation. Athletes already periodize training; do the same for English defects. One more practical tip: when two choices both seem grammatical, ask which one better preserves the paragraph's purpose and sheds empty words. That tie-breaker resolves a surprising number of late-section hesitations without burning another thirty seconds of rereading. Keep your pencil moving, keep your reasons named, and keep your composite levers honest.\n\n## Wrap-up\nComplete the graded check , run a timed English drill, and submit the fix-and-justify.\n",
    order: 18,
    durationMin: 50,
    sectionKey: "module-e4",
    questions: [
      {
        prompt: "After a timed English drill, the highest-value next step is…",
        choices: ["Delete your answers", "Tag misses as content/trap/timing and act on the tags", "Only check the percent", "Retake immediately without review"],
        correctIndex: 1,
        explanation: "[EASY] Error log drives improvement.",
        order: 1,
        points: 1,
      },
      {
        prompt: "In the last 3 minutes of English, first priority is usually…",
        choices: ["Rewrite the essay for fun", "Ensure no blanks remain, then revisit marked items", "Erase all answers", "Start Math early"],
        correctIndex: 1,
        explanation: "[MEDIUM] No blanks; then marked returns.",
        order: 2,
        points: 1,
      },
      {
        prompt: "The written fix-and-justify asks you to…",
        choices: ["Only circle letters", "Rewrite a flawed sentence and explain rules used", "Ignore grammar", "Memorize ACT Inc. forms"],
        correctIndex: 1,
        explanation: "[EASY] Rewrite + justify.",
        order: 3,
        points: 1,
      },
      {
        prompt: "A 'timing' tag means…",
        choices: ["You should never practice pacing", "You likely knew it but clock management failed", "The item is invalid", "English has a guessing penalty"],
        correctIndex: 1,
        explanation: "[EASY] Timing = recoverable with pacing.",
        order: 4,
        points: 1,
      }
    ],
    topicMeta: {"title": "Timed English wrap-up", "focus": "75/45 simulation + written justification", "keyIdeas": ["Checkpoints", "Error log", "Fix & justify"], "practice": [{"q": "After drill?", "a": "tag misses"}, {"q": "Written task?", "a": "rewrite + rule"}]},
  };
}

function quizE1Questions(): QuestionSeed[] {
  return [
  {
    prompt: "The set of medals from dual meets ___ displayed in the lobby.",
    choices: ["are", "is", "were", "have been"],
    correctIndex: 1,
    explanation: "[EASY] Set is singular.",
    order: 1,
    points: 1
  },
  {
    prompt: "Neither the juniors nor the senior captain ___ late.",
    choices: ["are", "were", "is", "have"],
    correctIndex: 2,
    explanation: "[MEDIUM] Nearer subject captain → is.",
    order: 2,
    points: 1
  },
  {
    prompt: "Each of the relay teams ___ a written exchange plan.",
    choices: ["submit", "submits", "are submitting", "have submit"],
    correctIndex: 1,
    explanation: "[EASY] Each → singular.",
    order: 3,
    points: 1
  },
  {
    prompt: "Best repair: 'When the trainer spoke to Maya, she looked worried.' (ambiguous)",
    choices: ["NO CHANGE", "When the trainer spoke to Maya, Maya looked worried.", "…they looked worried.", "…it looked worried."],
    correctIndex: 1,
    explanation: "[MEDIUM] Clear antecedent.",
    order: 4,
    points: 1
  },
  {
    prompt: "The athlete ___ the coach praised finished first.",
    choices: ["who", "whom", "which", "who's"],
    correctIndex: 1,
    explanation: "[MEDIUM] Object → whom.",
    order: 5,
    points: 1
  },
  {
    prompt: "The program lost ___ funding.",
    choices: ["it's", "its", "its'", "it"],
    correctIndex: 1,
    explanation: "[EASY] Possessive its.",
    order: 6,
    points: 1
  },
  {
    prompt: "Past narrative: 'She boards the bus and ___ to the venue.'",
    choices: ["heads", "headed", "will head", "heading"],
    correctIndex: 1,
    explanation: "[EASY] Tense consistency.",
    order: 7,
    points: 1
  },
  {
    prompt: "By the time the gun fired, they ___ their marks.",
    choices: ["take", "had taken", "takes", "taking"],
    correctIndex: 1,
    explanation: "[MEDIUM] Earlier past.",
    order: 8,
    points: 1
  },
  {
    prompt: "She wants to stretch, to hydrate, and ___ eight hours.",
    choices: ["sleeping", "to sleep", "slept", "sleep"],
    correctIndex: 1,
    explanation: "[EASY] Parallel infinitives.",
    order: 9,
    points: 1
  },
  {
    prompt: "Maya's vertical was higher than ___.",
    choices: ["Jordan", "Jordan's", "him", "he"],
    correctIndex: 1,
    explanation: "[MEDIUM] Compare like things.",
    order: 10,
    points: 1
  },
  {
    prompt: "There ___ three reasons the coach delayed practice.",
    choices: ["is", "are", "was being", "has"],
    correctIndex: 1,
    explanation: "[EASY] Inverted plural subject.",
    order: 11,
    points: 1
  },
  {
    prompt: "If she ___ rested, she would have finished stronger.",
    choices: ["would have", "had", "will have", "have"],
    correctIndex: 1,
    explanation: "[HARD] If-clause uses had.",
    order: 12,
    points: 1
  }
] as QuestionSeed[];
}

function quizE2Questions(): QuestionSeed[] {
  return [
  {
    prompt: "Athletes ___ arrive late miss lane assignments. (essential)",
    choices: [", who arrive late,", "who arrive late", "; who arrive late", ": who arrive late,"],
    correctIndex: 1,
    explanation: "[EASY] Essential—no commas.",
    order: 1,
    points: 1
  },
  {
    prompt: "Fix splice: 'The starter raised his hand___ the crowd went quiet.'",
    choices: [",", "; ", " — ", ", and crowd"],
    correctIndex: 1,
    explanation: "[MEDIUM] Semicolon between ICs.",
    order: 2,
    points: 1
  },
  {
    prompt: "Illegal comma?",
    choices: ["After practice, we iced.", "The sprinter of the year, won easily.", "Jordan, who iced, recovered.", "Spikes, blocks, and tape."],
    correctIndex: 1,
    explanation: "[EASY] Subject-verb comma.",
    order: 3,
    points: 1
  },
  {
    prompt: "the ___ lounge (many athletes)",
    choices: ["athlete's", "athletes'", "athletes's", "athletes"],
    correctIndex: 1,
    explanation: "[EASY] Plural possessive.",
    order: 4,
    points: 1
  },
  {
    prompt: "___ clear the team lost ___ edge.",
    choices: ["Its / it's", "It's / its", "Its' / its", "It's / it's"],
    correctIndex: 1,
    explanation: "[EASY] It's + its.",
    order: 5,
    points: 1
  },
  {
    prompt: "Shared project: ___ experiment won.",
    choices: ["Maya's and Priya's", "Maya and Priya's", "Maya and Priyas", "Mayas and Priya"],
    correctIndex: 1,
    explanation: "[MEDIUM] Joint possession.",
    order: 6,
    points: 1
  },
  {
    prompt: "She packed the essentials___ spikes and water.",
    choices: [",", ":", ";", "—:"],
    correctIndex: 1,
    explanation: "[EASY] Colon after complete stem.",
    order: 7,
    points: 1
  },
  {
    prompt: "Comma splice?",
    choices: ["She ran, and she won.", "She ran; she won.", "She ran, she won.", "She ran. She won."],
    correctIndex: 2,
    explanation: "[EASY] Comma alone.",
    order: 8,
    points: 1
  },
  {
    prompt: "Fragment?",
    choices: ["The hurdles began.", "Because the forecast threatened rain.", "Maya blocked crowd noise.", "Spikes worked."],
    correctIndex: 1,
    explanation: "[EASY] Dependent only.",
    order: 9,
    points: 1
  },
  {
    prompt: "Dangler fix: 'Waiting in lane four, the pistol fired.'",
    choices: ["NO CHANGE", "Waiting in lane four, Maya heard the pistol fire.", "Waiting in lane four; pistol fired.", "Waiting, pistol."],
    correctIndex: 1,
    explanation: "[MEDIUM] Logical subject.",
    order: 10,
    points: 1
  },
  {
    prompt: "Never correct?",
    choices: ["women's", "its", "coaches'", "its'"],
    correctIndex: 3,
    explanation: "[EASY] its' invalid.",
    order: 11,
    points: 1
  }
] as QuestionSeed[];
}

function quizE3Questions(): QuestionSeed[] {
  return [
  {
    prompt: "Rain flooded the track. ___, officials delayed the 200. (cause)",
    choices: ["However", "Nevertheless", "Therefore", "Meanwhile"],
    correctIndex: 2,
    explanation: "[EASY] Cause → therefore.",
    order: 1,
    points: 1
  },
  {
    prompt: "She PR'd in long jump. ___, discus was uneven. (contrast)",
    choices: ["Accordingly", "However", "Likewise", "For instance"],
    correctIndex: 1,
    explanation: "[EASY] Contrast.",
    order: 2,
    points: 1
  },
  {
    prompt: "Delete a transition when…",
    choices: ["ACT forbids deletion", "Sentences already link and the transition is redundant", "It is therefore", "Never"],
    correctIndex: 1,
    explanation: "[MEDIUM] Redundancy.",
    order: 3,
    points: 1
  },
  {
    prompt: "Result sentence about improved times belongs…",
    choices: ["Before the drill is explained", "After the drill is described", "In the lunch paragraph", "Only in the title"],
    correctIndex: 1,
    explanation: "[EASY] Method then result.",
    order: 4,
    points: 1
  },
  {
    prompt: "Best reason to delete a sentence?",
    choices: ["It is short", "It is off purpose", "It is grammatical", "It has a comma"],
    correctIndex: 1,
    explanation: "[EASY] Purpose.",
    order: 5,
    points: 1
  },
  {
    prompt: "'This approach' requires…",
    choices: ["Placement before any approach is named", "An approach already named", "Deletion of all nouns", "Always paragraph one"],
    correctIndex: 1,
    explanation: "[MEDIUM] Old→new.",
    order: 6,
    points: 1
  },
  {
    prompt: "Add cafeteria pizza to a baton-technique paragraph?",
    choices: ["Yes—interesting", "No—irrelevant", "Yes—humor required", "Yes—always add food"],
    correctIndex: 1,
    explanation: "[EASY] Relevance.",
    order: 7,
    points: 1
  },
  {
    prompt: "Best deletion: redundant pair",
    choices: ["necessary definition", "'past history'", "thesis", "only example"],
    correctIndex: 1,
    explanation: "[EASY] Redundancy.",
    order: 8,
    points: 1
  },
  {
    prompt: "'due to the fact that' →",
    choices: ["owing to the reason that", "because", "based on the fact of", "in light of the reality that"],
    correctIndex: 1,
    explanation: "[EASY] Concision.",
    order: 9,
    points: 1
  },
  {
    prompt: "Shortest choice is wrong when…",
    choices: ["It is short", "It breaks grammar or needed meaning", "It uses because", "It is three words"],
    correctIndex: 1,
    explanation: "[MEDIUM] Concision exception.",
    order: 10,
    points: 1
  },
  {
    prompt: "Tone fail in technical passage?",
    choices: ["'Latency fell 40 ms.'", "'The data were totally bananas.'", "'Athletes responded faster.'", "'Mean latency decreased.'"],
    correctIndex: 1,
    explanation: "[EASY] Slang.",
    order: 11,
    points: 1
  },
  {
    prompt: "'In order to improve' → best concise?",
    choices: ["In order that improve", "To improve", "For the purpose of improving improvement", "So as to be able to improve"],
    correctIndex: 1,
    explanation: "[EASY] to improve.",
    order: 12,
    points: 1
  }
] as QuestionSeed[];
}

function englishDrill1Questions(): QuestionSeed[] {
  return [
  {
    prompt: "Drill 1 — Passage (\"Dawn Lane Clinics\"), Q1. The set of medals from dual meets ___ displayed in the lobby.",
    choices: ["are", "is", "were", "have been"],
    correctIndex: 1,
    explanation: "[EASY] Set is singular. Drill 1.",
    order: 1,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Trail Restoration Saturday\"), Q2. Neither the juniors nor the senior captain ___ late.",
    choices: ["are", "were", "is", "have"],
    correctIndex: 2,
    explanation: "[MEDIUM] Nearer subject captain → is. Drill 1.",
    order: 2,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Period-4 Baking Lab\"), Q3. Each of the relay teams ___ a written exchange plan.",
    choices: ["submit", "submits", "are submitting", "have submit"],
    correctIndex: 1,
    explanation: "[EASY] Each → singular. Drill 1.",
    order: 3,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Quiet Library Sensors\"), Q4. Best repair: 'When the trainer spoke to Maya, she looked worried.' (ambiguous)",
    choices: ["NO CHANGE", "When the trainer spoke to Maya, Maya looked worried.", "…they looked worried.", "…it looked worried."],
    correctIndex: 1,
    explanation: "[MEDIUM] Clear antecedent. Drill 1.",
    order: 4,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Budget Robotics Invite\"), Q5. The athlete ___ the coach praised finished first.",
    choices: ["who", "whom", "which", "who's"],
    correctIndex: 1,
    explanation: "[MEDIUM] Object → whom. Drill 1.",
    order: 5,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Dawn Lane Clinics\"), Q6. The program lost ___ funding.",
    choices: ["it's", "its", "its'", "it"],
    correctIndex: 1,
    explanation: "[EASY] Possessive its. Drill 1.",
    order: 6,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Trail Restoration Saturday\"), Q7. Past narrative: 'She boards the bus and ___ to the venue.'",
    choices: ["heads", "headed", "will head", "heading"],
    correctIndex: 1,
    explanation: "[EASY] Tense consistency. Drill 1.",
    order: 7,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Period-4 Baking Lab\"), Q8. By the time the gun fired, they ___ their marks.",
    choices: ["take", "had taken", "takes", "taking"],
    correctIndex: 1,
    explanation: "[MEDIUM] Earlier past. Drill 1.",
    order: 8,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Quiet Library Sensors\"), Q9. She wants to stretch, to hydrate, and ___ eight hours.",
    choices: ["sleeping", "to sleep", "slept", "sleep"],
    correctIndex: 1,
    explanation: "[EASY] Parallel infinitives. Drill 1.",
    order: 9,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Budget Robotics Invite\"), Q10. Maya's vertical was higher than ___.",
    choices: ["Jordan", "Jordan's", "him", "he"],
    correctIndex: 1,
    explanation: "[MEDIUM] Compare like things. Drill 1.",
    order: 10,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Dawn Lane Clinics\"), Q11. There ___ three reasons the coach delayed practice.",
    choices: ["is", "are", "was being", "has"],
    correctIndex: 1,
    explanation: "[EASY] Inverted plural subject. Drill 1.",
    order: 11,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Trail Restoration Saturday\"), Q12. If she ___ rested, she would have finished stronger.",
    choices: ["would have", "had", "will have", "have"],
    correctIndex: 1,
    explanation: "[HARD] If-clause uses had. Drill 1.",
    order: 12,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Period-4 Baking Lab\"), Q13. Athletes ___ arrive late miss lane assignments. (essential)",
    choices: [", who arrive late,", "who arrive late", "; who arrive late", ": who arrive late,"],
    correctIndex: 1,
    explanation: "[EASY] Essential—no commas. Drill 1.",
    order: 13,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Quiet Library Sensors\"), Q14. Fix splice: 'The starter raised his hand___ the crowd went quiet.'",
    choices: [",", "; ", " — ", ", and crowd"],
    correctIndex: 1,
    explanation: "[MEDIUM] Semicolon between ICs. Drill 1.",
    order: 14,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Budget Robotics Invite\"), Q15. Illegal comma?",
    choices: ["After practice, we iced.", "The sprinter of the year, won easily.", "Jordan, who iced, recovered.", "Spikes, blocks, and tape."],
    correctIndex: 1,
    explanation: "[EASY] Subject-verb comma. Drill 1.",
    order: 15,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Dawn Lane Clinics\"), Q16. the ___ lounge (many athletes)",
    choices: ["athlete's", "athletes'", "athletes's", "athletes"],
    correctIndex: 1,
    explanation: "[EASY] Plural possessive. Drill 1.",
    order: 16,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Trail Restoration Saturday\"), Q17. ___ clear the team lost ___ edge.",
    choices: ["Its / it's", "It's / its", "Its' / its", "It's / it's"],
    correctIndex: 1,
    explanation: "[EASY] It's + its. Drill 1.",
    order: 17,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Period-4 Baking Lab\"), Q18. Shared project: ___ experiment won.",
    choices: ["Maya's and Priya's", "Maya and Priya's", "Maya and Priyas", "Mayas and Priya"],
    correctIndex: 1,
    explanation: "[MEDIUM] Joint possession. Drill 1.",
    order: 18,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Quiet Library Sensors\"), Q19. She packed the essentials___ spikes and water.",
    choices: [",", ":", ";", "—:"],
    correctIndex: 1,
    explanation: "[EASY] Colon after complete stem. Drill 1.",
    order: 19,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Budget Robotics Invite\"), Q20. Comma splice?",
    choices: ["She ran, and she won.", "She ran; she won.", "She ran, she won.", "She ran. She won."],
    correctIndex: 2,
    explanation: "[EASY] Comma alone. Drill 1.",
    order: 20,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Dawn Lane Clinics\"), Q21. Fragment?",
    choices: ["The hurdles began.", "Because the forecast threatened rain.", "Maya blocked crowd noise.", "Spikes worked."],
    correctIndex: 1,
    explanation: "[EASY] Dependent only. Drill 1.",
    order: 21,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Trail Restoration Saturday\"), Q22. Dangler fix: 'Waiting in lane four, the pistol fired.'",
    choices: ["NO CHANGE", "Waiting in lane four, Maya heard the pistol fire.", "Waiting in lane four; pistol fired.", "Waiting, pistol."],
    correctIndex: 1,
    explanation: "[MEDIUM] Logical subject. Drill 1.",
    order: 22,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Period-4 Baking Lab\"), Q23. Never correct?",
    choices: ["women's", "its", "coaches'", "its'"],
    correctIndex: 3,
    explanation: "[EASY] its' invalid. Drill 1.",
    order: 23,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Quiet Library Sensors\"), Q24. Rain flooded the track. ___, officials delayed the 200. (cause)",
    choices: ["However", "Nevertheless", "Therefore", "Meanwhile"],
    correctIndex: 2,
    explanation: "[EASY] Cause → therefore. Drill 1.",
    order: 24,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Budget Robotics Invite\"), Q25. She PR'd in long jump. ___, discus was uneven. (contrast)",
    choices: ["Accordingly", "However", "Likewise", "For instance"],
    correctIndex: 1,
    explanation: "[EASY] Contrast. Drill 1.",
    order: 25,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Dawn Lane Clinics\"), Q26. Delete a transition when…",
    choices: ["ACT forbids deletion", "Sentences already link and the transition is redundant", "It is therefore", "Never"],
    correctIndex: 1,
    explanation: "[MEDIUM] Redundancy. Drill 1.",
    order: 26,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Trail Restoration Saturday\"), Q27. Result sentence about improved times belongs…",
    choices: ["Before the drill is explained", "After the drill is described", "In the lunch paragraph", "Only in the title"],
    correctIndex: 1,
    explanation: "[EASY] Method then result. Drill 1.",
    order: 27,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Period-4 Baking Lab\"), Q28. Best reason to delete a sentence?",
    choices: ["It is short", "It is off purpose", "It is grammatical", "It has a comma"],
    correctIndex: 1,
    explanation: "[EASY] Purpose. Drill 1.",
    order: 28,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Quiet Library Sensors\"), Q29. 'This approach' requires…",
    choices: ["Placement before any approach is named", "An approach already named", "Deletion of all nouns", "Always paragraph one"],
    correctIndex: 1,
    explanation: "[MEDIUM] Old→new. Drill 1.",
    order: 29,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Budget Robotics Invite\"), Q30. Add cafeteria pizza to a baton-technique paragraph?",
    choices: ["Yes—interesting", "No—irrelevant", "Yes—humor required", "Yes—always add food"],
    correctIndex: 1,
    explanation: "[EASY] Relevance. Drill 1.",
    order: 30,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Dawn Lane Clinics\"), Q31. Best deletion: redundant pair",
    choices: ["necessary definition", "'past history'", "thesis", "only example"],
    correctIndex: 1,
    explanation: "[EASY] Redundancy. Drill 1.",
    order: 31,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Trail Restoration Saturday\"), Q32. 'due to the fact that' →",
    choices: ["owing to the reason that", "because", "based on the fact of", "in light of the reality that"],
    correctIndex: 1,
    explanation: "[EASY] Concision. Drill 1.",
    order: 32,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Period-4 Baking Lab\"), Q33. Shortest choice is wrong when…",
    choices: ["It is short", "It breaks grammar or needed meaning", "It uses because", "It is three words"],
    correctIndex: 1,
    explanation: "[MEDIUM] Concision exception. Drill 1.",
    order: 33,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Quiet Library Sensors\"), Q34. Tone fail in technical passage?",
    choices: ["'Latency fell 40 ms.'", "'The data were totally bananas.'", "'Athletes responded faster.'", "'Mean latency decreased.'"],
    correctIndex: 1,
    explanation: "[EASY] Slang. Drill 1.",
    order: 34,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Budget Robotics Invite\"), Q35. 'In order to improve' → best concise?",
    choices: ["In order that improve", "To improve", "For the purpose of improving improvement", "So as to be able to improve"],
    correctIndex: 1,
    explanation: "[EASY] to improve. Drill 1.",
    order: 35,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Dawn Lane Clinics\"), Q36. Variant: The set of medals from dual meets ___ displayed in the lobby.",
    choices: ["are", "is", "were", "have been"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Set is singular. Variant in Drill 1.",
    order: 36,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Trail Restoration Saturday\"), Q37. Variant: Neither the juniors nor the senior captain ___ late.",
    choices: ["are", "were", "is", "have"],
    correctIndex: 2,
    explanation: "[MEDIUM] [MEDIUM] Nearer subject captain → is. Variant in Drill 1.",
    order: 37,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Period-4 Baking Lab\"), Q38. Variant: Each of the relay teams ___ a written exchange plan.",
    choices: ["submit", "submits", "are submitting", "have submit"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Each → singular. Variant in Drill 1.",
    order: 38,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Quiet Library Sensors\"), Q39. Variant: Best repair: 'When the trainer spoke to Maya, she looked worried.' (ambiguous)",
    choices: ["NO CHANGE", "When the trainer spoke to Maya, Maya looked worried.", "…they looked worried.", "…it looked worried."],
    correctIndex: 1,
    explanation: "[MEDIUM] [MEDIUM] Clear antecedent. Variant in Drill 1.",
    order: 39,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Budget Robotics Invite\"), Q40. Variant: The athlete ___ the coach praised finished first.",
    choices: ["who", "whom", "which", "who's"],
    correctIndex: 1,
    explanation: "[MEDIUM] [MEDIUM] Object → whom. Variant in Drill 1.",
    order: 40,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Dawn Lane Clinics\"), Q41. Variant: The program lost ___ funding.",
    choices: ["it's", "its", "its'", "it"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Possessive its. Variant in Drill 1.",
    order: 41,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Trail Restoration Saturday\"), Q42. Variant: Past narrative: 'She boards the bus and ___ to the venue.'",
    choices: ["heads", "headed", "will head", "heading"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Tense consistency. Variant in Drill 1.",
    order: 42,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Period-4 Baking Lab\"), Q43. Variant: By the time the gun fired, they ___ their marks.",
    choices: ["take", "had taken", "takes", "taking"],
    correctIndex: 1,
    explanation: "[MEDIUM] [MEDIUM] Earlier past. Variant in Drill 1.",
    order: 43,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Quiet Library Sensors\"), Q44. Variant: She wants to stretch, to hydrate, and ___ eight hours.",
    choices: ["sleeping", "to sleep", "slept", "sleep"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Parallel infinitives. Variant in Drill 1.",
    order: 44,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Budget Robotics Invite\"), Q45. Variant: Maya's vertical was higher than ___.",
    choices: ["Jordan", "Jordan's", "him", "he"],
    correctIndex: 1,
    explanation: "[MEDIUM] [MEDIUM] Compare like things. Variant in Drill 1.",
    order: 45,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Dawn Lane Clinics\"), Q46. Variant: There ___ three reasons the coach delayed practice.",
    choices: ["is", "are", "was being", "has"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Inverted plural subject. Variant in Drill 1.",
    order: 46,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Trail Restoration Saturday\"), Q47. Variant: If she ___ rested, she would have finished stronger.",
    choices: ["would have", "had", "will have", "have"],
    correctIndex: 1,
    explanation: "[MEDIUM] [HARD] If-clause uses had. Variant in Drill 1.",
    order: 47,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Period-4 Baking Lab\"), Q48. Variant: Athletes ___ arrive late miss lane assignments. (essential)",
    choices: [", who arrive late,", "who arrive late", "; who arrive late", ": who arrive late,"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Essential—no commas. Variant in Drill 1.",
    order: 48,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Quiet Library Sensors\"), Q49. Variant: Fix splice: 'The starter raised his hand___ the crowd went quiet.'",
    choices: [",", "; ", " — ", ", and crowd"],
    correctIndex: 1,
    explanation: "[MEDIUM] [MEDIUM] Semicolon between ICs. Variant in Drill 1.",
    order: 49,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Budget Robotics Invite\"), Q50. Variant: Illegal comma?",
    choices: ["After practice, we iced.", "The sprinter of the year, won easily.", "Jordan, who iced, recovered.", "Spikes, blocks, and tape."],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Subject-verb comma. Variant in Drill 1.",
    order: 50,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Dawn Lane Clinics\"), Q51. Variant: the ___ lounge (many athletes)",
    choices: ["athlete's", "athletes'", "athletes's", "athletes"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Plural possessive. Variant in Drill 1.",
    order: 51,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Trail Restoration Saturday\"), Q52. Variant: ___ clear the team lost ___ edge.",
    choices: ["Its / it's", "It's / its", "Its' / its", "It's / it's"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] It's + its. Variant in Drill 1.",
    order: 52,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Period-4 Baking Lab\"), Q53. Variant: Shared project: ___ experiment won.",
    choices: ["Maya's and Priya's", "Maya and Priya's", "Maya and Priyas", "Mayas and Priya"],
    correctIndex: 1,
    explanation: "[MEDIUM] [MEDIUM] Joint possession. Variant in Drill 1.",
    order: 53,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Quiet Library Sensors\"), Q54. Variant: She packed the essentials___ spikes and water.",
    choices: [",", ":", ";", "—:"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Colon after complete stem. Variant in Drill 1.",
    order: 54,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Budget Robotics Invite\"), Q55. Variant: Comma splice?",
    choices: ["She ran, and she won.", "She ran; she won.", "She ran, she won.", "She ran. She won."],
    correctIndex: 2,
    explanation: "[MEDIUM] [EASY] Comma alone. Variant in Drill 1.",
    order: 55,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Dawn Lane Clinics\"), Q56. Variant: Fragment?",
    choices: ["The hurdles began.", "Because the forecast threatened rain.", "Maya blocked crowd noise.", "Spikes worked."],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Dependent only. Variant in Drill 1.",
    order: 56,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Trail Restoration Saturday\"), Q57. Variant: Dangler fix: 'Waiting in lane four, the pistol fired.'",
    choices: ["NO CHANGE", "Waiting in lane four, Maya heard the pistol fire.", "Waiting in lane four; pistol fired.", "Waiting, pistol."],
    correctIndex: 1,
    explanation: "[MEDIUM] [MEDIUM] Logical subject. Variant in Drill 1.",
    order: 57,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Period-4 Baking Lab\"), Q58. Variant: Never correct?",
    choices: ["women's", "its", "coaches'", "its'"],
    correctIndex: 3,
    explanation: "[MEDIUM] [EASY] its' invalid. Variant in Drill 1.",
    order: 58,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Quiet Library Sensors\"), Q59. Variant: Rain flooded the track. ___, officials delayed the 200. (cause)",
    choices: ["However", "Nevertheless", "Therefore", "Meanwhile"],
    correctIndex: 2,
    explanation: "[MEDIUM] [EASY] Cause → therefore. Variant in Drill 1.",
    order: 59,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Budget Robotics Invite\"), Q60. Variant: She PR'd in long jump. ___, discus was uneven. (contrast)",
    choices: ["Accordingly", "However", "Likewise", "For instance"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Contrast. Variant in Drill 1.",
    order: 60,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Dawn Lane Clinics\"), Q61. Variant: Delete a transition when…",
    choices: ["ACT forbids deletion", "Sentences already link and the transition is redundant", "It is therefore", "Never"],
    correctIndex: 1,
    explanation: "[MEDIUM] [MEDIUM] Redundancy. Variant in Drill 1.",
    order: 61,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Trail Restoration Saturday\"), Q62. Variant: Result sentence about improved times belongs…",
    choices: ["Before the drill is explained", "After the drill is described", "In the lunch paragraph", "Only in the title"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Method then result. Variant in Drill 1.",
    order: 62,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Period-4 Baking Lab\"), Q63. Variant: Best reason to delete a sentence?",
    choices: ["It is short", "It is off purpose", "It is grammatical", "It has a comma"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Purpose. Variant in Drill 1.",
    order: 63,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Quiet Library Sensors\"), Q64. Variant: 'This approach' requires…",
    choices: ["Placement before any approach is named", "An approach already named", "Deletion of all nouns", "Always paragraph one"],
    correctIndex: 1,
    explanation: "[MEDIUM] [MEDIUM] Old→new. Variant in Drill 1.",
    order: 64,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Budget Robotics Invite\"), Q65. Variant: Add cafeteria pizza to a baton-technique paragraph?",
    choices: ["Yes—interesting", "No—irrelevant", "Yes—humor required", "Yes—always add food"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Relevance. Variant in Drill 1.",
    order: 65,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Dawn Lane Clinics\"), Q66. Variant: Best deletion: redundant pair",
    choices: ["necessary definition", "'past history'", "thesis", "only example"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Redundancy. Variant in Drill 1.",
    order: 66,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Trail Restoration Saturday\"), Q67. Variant: 'due to the fact that' →",
    choices: ["owing to the reason that", "because", "based on the fact of", "in light of the reality that"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Concision. Variant in Drill 1.",
    order: 67,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Period-4 Baking Lab\"), Q68. Variant: Shortest choice is wrong when…",
    choices: ["It is short", "It breaks grammar or needed meaning", "It uses because", "It is three words"],
    correctIndex: 1,
    explanation: "[MEDIUM] [MEDIUM] Concision exception. Variant in Drill 1.",
    order: 68,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Quiet Library Sensors\"), Q69. Variant: Tone fail in technical passage?",
    choices: ["'Latency fell 40 ms.'", "'The data were totally bananas.'", "'Athletes responded faster.'", "'Mean latency decreased.'"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Slang. Variant in Drill 1.",
    order: 69,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Budget Robotics Invite\"), Q70. Variant: 'In order to improve' → best concise?",
    choices: ["In order that improve", "To improve", "For the purpose of improving improvement", "So as to be able to improve"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] to improve. Variant in Drill 1.",
    order: 70,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Dawn Lane Clinics\"), item 71. Underlined: \"due to the fact that she tapered\". Which choice best addresses a adddelete issue in context?",
    choices: ["Delete material irrelevant to purpose", "Add true but off-purpose sentence", "Keep redundant past history", "Revise into slang breaking tone"],
    correctIndex: 0,
    explanation: "[EASY] Delete material irrelevant to purpose. Original PP passage \"Dawn Lane Clinics\".",
    order: 71,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Trail Restoration Saturday\"), item 72. Underlined: \"each of the runners have\". Which choice best addresses a concision issue in context?",
    choices: ["Prefer concise option keeping meaning", "Add unnecessary words", "Choose shortest even if ungrammatical", "Stack synonyms"],
    correctIndex: 0,
    explanation: "[MEDIUM] Prefer concise option keeping meaning. Original PP passage \"Trail Restoration Saturday\".",
    order: 72,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Period-4 Baking Lab\"), item 73. Underlined: \"the set of results from trials were\". Which choice best addresses a agreement issue in context?",
    choices: ["Match the verb to the true subject", "Agree with the nearest noun in a phrase", "Pluralize each", "Switch number mid-sentence"],
    correctIndex: 0,
    explanation: "[EASY] Match the verb to the true subject. Original PP passage \"Period-4 Baking Lab\".",
    order: 73,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Quiet Library Sensors\"), item 74. Underlined: \"when Jordan spoke to Sam, he\". Which choice best addresses a pronoun issue in context?",
    choices: ["Make the antecedent unmistakable", "Keep ambiguous they", "Shift person mid-sentence", "Use its' as possessive"],
    correctIndex: 0,
    explanation: "[MEDIUM] Make the antecedent unmistakable. Original PP passage \"Quiet Library Sensors\".",
    order: 74,
    points: 1
  },
  {
    prompt: "Drill 1 — Passage (\"Budget Robotics Invite\"), item 75. Underlined: \"boards the bus and heads\". Which choice best addresses a tense issue in context?",
    choices: ["Keep tense consistent with the narrative frame", "Jump tense without signal", "Mix past/present randomly", "Use would of"],
    correctIndex: 0,
    explanation: "[HARD] Keep tense consistent with the narrative frame. Original PP passage \"Budget Robotics Invite\".",
    order: 75,
    points: 1
  }
] as QuestionSeed[];
}

function englishDrill2Questions(): QuestionSeed[] {
  return [
  {
    prompt: "Drill 2 — Passage (\"Indoor Track Notebook\"), Q1. The set of medals from dual meets ___ displayed in the lobby.",
    choices: ["are", "is", "were", "have been"],
    correctIndex: 1,
    explanation: "[EASY] Set is singular. Drill 2.",
    order: 1,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Watershed Cleanup Crew\"), Q2. Neither the juniors nor the senior captain ___ late.",
    choices: ["are", "were", "is", "have"],
    correctIndex: 2,
    explanation: "[MEDIUM] Nearer subject captain → is. Drill 2.",
    order: 2,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Marching Band Away Day\"), Q3. Each of the relay teams ___ a written exchange plan.",
    choices: ["submit", "submits", "are submitting", "have submit"],
    correctIndex: 1,
    explanation: "[EASY] Each → singular. Drill 2.",
    order: 3,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"School App Sprint\"), Q4. Best repair: 'When the trainer spoke to Maya, she looked worried.' (ambiguous)",
    choices: ["NO CHANGE", "When the trainer spoke to Maya, Maya looked worried.", "…they looked worried.", "…it looked worried."],
    correctIndex: 1,
    explanation: "[MEDIUM] Clear antecedent. Drill 2.",
    order: 4,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Streetlight Shield Pilot\"), Q5. The athlete ___ the coach praised finished first.",
    choices: ["who", "whom", "which", "who's"],
    correctIndex: 1,
    explanation: "[MEDIUM] Object → whom. Drill 2.",
    order: 5,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Indoor Track Notebook\"), Q6. The program lost ___ funding.",
    choices: ["it's", "its", "its'", "it"],
    correctIndex: 1,
    explanation: "[EASY] Possessive its. Drill 2.",
    order: 6,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Watershed Cleanup Crew\"), Q7. Past narrative: 'She boards the bus and ___ to the venue.'",
    choices: ["heads", "headed", "will head", "heading"],
    correctIndex: 1,
    explanation: "[EASY] Tense consistency. Drill 2.",
    order: 7,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Marching Band Away Day\"), Q8. By the time the gun fired, they ___ their marks.",
    choices: ["take", "had taken", "takes", "taking"],
    correctIndex: 1,
    explanation: "[MEDIUM] Earlier past. Drill 2.",
    order: 8,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"School App Sprint\"), Q9. She wants to stretch, to hydrate, and ___ eight hours.",
    choices: ["sleeping", "to sleep", "slept", "sleep"],
    correctIndex: 1,
    explanation: "[EASY] Parallel infinitives. Drill 2.",
    order: 9,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Streetlight Shield Pilot\"), Q10. Maya's vertical was higher than ___.",
    choices: ["Jordan", "Jordan's", "him", "he"],
    correctIndex: 1,
    explanation: "[MEDIUM] Compare like things. Drill 2.",
    order: 10,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Indoor Track Notebook\"), Q11. There ___ three reasons the coach delayed practice.",
    choices: ["is", "are", "was being", "has"],
    correctIndex: 1,
    explanation: "[EASY] Inverted plural subject. Drill 2.",
    order: 11,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Watershed Cleanup Crew\"), Q12. If she ___ rested, she would have finished stronger.",
    choices: ["would have", "had", "will have", "have"],
    correctIndex: 1,
    explanation: "[HARD] If-clause uses had. Drill 2.",
    order: 12,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Marching Band Away Day\"), Q13. Athletes ___ arrive late miss lane assignments. (essential)",
    choices: [", who arrive late,", "who arrive late", "; who arrive late", ": who arrive late,"],
    correctIndex: 1,
    explanation: "[EASY] Essential—no commas. Drill 2.",
    order: 13,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"School App Sprint\"), Q14. Fix splice: 'The starter raised his hand___ the crowd went quiet.'",
    choices: [",", "; ", " — ", ", and crowd"],
    correctIndex: 1,
    explanation: "[MEDIUM] Semicolon between ICs. Drill 2.",
    order: 14,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Streetlight Shield Pilot\"), Q15. Illegal comma?",
    choices: ["After practice, we iced.", "The sprinter of the year, won easily.", "Jordan, who iced, recovered.", "Spikes, blocks, and tape."],
    correctIndex: 1,
    explanation: "[EASY] Subject-verb comma. Drill 2.",
    order: 15,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Indoor Track Notebook\"), Q16. the ___ lounge (many athletes)",
    choices: ["athlete's", "athletes'", "athletes's", "athletes"],
    correctIndex: 1,
    explanation: "[EASY] Plural possessive. Drill 2.",
    order: 16,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Watershed Cleanup Crew\"), Q17. ___ clear the team lost ___ edge.",
    choices: ["Its / it's", "It's / its", "Its' / its", "It's / it's"],
    correctIndex: 1,
    explanation: "[EASY] It's + its. Drill 2.",
    order: 17,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Marching Band Away Day\"), Q18. Shared project: ___ experiment won.",
    choices: ["Maya's and Priya's", "Maya and Priya's", "Maya and Priyas", "Mayas and Priya"],
    correctIndex: 1,
    explanation: "[MEDIUM] Joint possession. Drill 2.",
    order: 18,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"School App Sprint\"), Q19. She packed the essentials___ spikes and water.",
    choices: [",", ":", ";", "—:"],
    correctIndex: 1,
    explanation: "[EASY] Colon after complete stem. Drill 2.",
    order: 19,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Streetlight Shield Pilot\"), Q20. Comma splice?",
    choices: ["She ran, and she won.", "She ran; she won.", "She ran, she won.", "She ran. She won."],
    correctIndex: 2,
    explanation: "[EASY] Comma alone. Drill 2.",
    order: 20,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Indoor Track Notebook\"), Q21. Fragment?",
    choices: ["The hurdles began.", "Because the forecast threatened rain.", "Maya blocked crowd noise.", "Spikes worked."],
    correctIndex: 1,
    explanation: "[EASY] Dependent only. Drill 2.",
    order: 21,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Watershed Cleanup Crew\"), Q22. Dangler fix: 'Waiting in lane four, the pistol fired.'",
    choices: ["NO CHANGE", "Waiting in lane four, Maya heard the pistol fire.", "Waiting in lane four; pistol fired.", "Waiting, pistol."],
    correctIndex: 1,
    explanation: "[MEDIUM] Logical subject. Drill 2.",
    order: 22,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Marching Band Away Day\"), Q23. Never correct?",
    choices: ["women's", "its", "coaches'", "its'"],
    correctIndex: 3,
    explanation: "[EASY] its' invalid. Drill 2.",
    order: 23,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"School App Sprint\"), Q24. Rain flooded the track. ___, officials delayed the 200. (cause)",
    choices: ["However", "Nevertheless", "Therefore", "Meanwhile"],
    correctIndex: 2,
    explanation: "[EASY] Cause → therefore. Drill 2.",
    order: 24,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Streetlight Shield Pilot\"), Q25. She PR'd in long jump. ___, discus was uneven. (contrast)",
    choices: ["Accordingly", "However", "Likewise", "For instance"],
    correctIndex: 1,
    explanation: "[EASY] Contrast. Drill 2.",
    order: 25,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Indoor Track Notebook\"), Q26. Delete a transition when…",
    choices: ["ACT forbids deletion", "Sentences already link and the transition is redundant", "It is therefore", "Never"],
    correctIndex: 1,
    explanation: "[MEDIUM] Redundancy. Drill 2.",
    order: 26,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Watershed Cleanup Crew\"), Q27. Result sentence about improved times belongs…",
    choices: ["Before the drill is explained", "After the drill is described", "In the lunch paragraph", "Only in the title"],
    correctIndex: 1,
    explanation: "[EASY] Method then result. Drill 2.",
    order: 27,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Marching Band Away Day\"), Q28. Best reason to delete a sentence?",
    choices: ["It is short", "It is off purpose", "It is grammatical", "It has a comma"],
    correctIndex: 1,
    explanation: "[EASY] Purpose. Drill 2.",
    order: 28,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"School App Sprint\"), Q29. 'This approach' requires…",
    choices: ["Placement before any approach is named", "An approach already named", "Deletion of all nouns", "Always paragraph one"],
    correctIndex: 1,
    explanation: "[MEDIUM] Old→new. Drill 2.",
    order: 29,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Streetlight Shield Pilot\"), Q30. Add cafeteria pizza to a baton-technique paragraph?",
    choices: ["Yes—interesting", "No—irrelevant", "Yes—humor required", "Yes—always add food"],
    correctIndex: 1,
    explanation: "[EASY] Relevance. Drill 2.",
    order: 30,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Indoor Track Notebook\"), Q31. Best deletion: redundant pair",
    choices: ["necessary definition", "'past history'", "thesis", "only example"],
    correctIndex: 1,
    explanation: "[EASY] Redundancy. Drill 2.",
    order: 31,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Watershed Cleanup Crew\"), Q32. 'due to the fact that' →",
    choices: ["owing to the reason that", "because", "based on the fact of", "in light of the reality that"],
    correctIndex: 1,
    explanation: "[EASY] Concision. Drill 2.",
    order: 32,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Marching Band Away Day\"), Q33. Shortest choice is wrong when…",
    choices: ["It is short", "It breaks grammar or needed meaning", "It uses because", "It is three words"],
    correctIndex: 1,
    explanation: "[MEDIUM] Concision exception. Drill 2.",
    order: 33,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"School App Sprint\"), Q34. Tone fail in technical passage?",
    choices: ["'Latency fell 40 ms.'", "'The data were totally bananas.'", "'Athletes responded faster.'", "'Mean latency decreased.'"],
    correctIndex: 1,
    explanation: "[EASY] Slang. Drill 2.",
    order: 34,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Streetlight Shield Pilot\"), Q35. 'In order to improve' → best concise?",
    choices: ["In order that improve", "To improve", "For the purpose of improving improvement", "So as to be able to improve"],
    correctIndex: 1,
    explanation: "[EASY] to improve. Drill 2.",
    order: 35,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Indoor Track Notebook\"), Q36. Variant: The set of medals from dual meets ___ displayed in the lobby.",
    choices: ["are", "is", "were", "have been"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Set is singular. Variant in Drill 2.",
    order: 36,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Watershed Cleanup Crew\"), Q37. Variant: Neither the juniors nor the senior captain ___ late.",
    choices: ["are", "were", "is", "have"],
    correctIndex: 2,
    explanation: "[MEDIUM] [MEDIUM] Nearer subject captain → is. Variant in Drill 2.",
    order: 37,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Marching Band Away Day\"), Q38. Variant: Each of the relay teams ___ a written exchange plan.",
    choices: ["submit", "submits", "are submitting", "have submit"],
    correctIndex: 1,
    explanation: "[MEDIUM] [EASY] Each → singular. Variant in Drill 2.",
    order: 38,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"School App Sprint\"), Q39. Variant: Best repair: 'When the trainer spoke to Maya, she looked worried.' (ambiguous)",
    choices: ["NO CHANGE", "When the trainer spoke to Maya, Maya looked worried.", "…they looked worried.", "…it looked worried."],
    correctIndex: 1,
    explanation: "[MEDIUM] [MEDIUM] Clear antecedent. Variant in Drill 2.",
    order: 39,
    points: 1
  },
  {
    prompt: "Drill 2 — Passage (\"Streetlight Shield Pilot\"), Q40. Variant: The athlete ___ the coach praised finished first.",
    choices: ["who", "whom", "which", "who's"],
    correctIndex: 1,
    explanation: "[MEDIUM] [MEDIUM] Object → whom. Variant in Drill 2.",
    order: 40,
    points: 1
  }
] as QuestionSeed[];
}
