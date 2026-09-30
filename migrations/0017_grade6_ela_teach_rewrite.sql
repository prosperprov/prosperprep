-- Grade 6 English Language Arts: hand-authored Teach / Warm-up / Guided / Exit + skill Check MC.
-- Keeps existing lesson IDs and titles. Independent practice from skill banks (ELA) or hand packs (Science/History).
-- UPDATE content + objectives + description + Question rows. Preserve videoUrl.
-- Do NOT run db:setup. Safe for production D1 (prosperprep-school).
-- Source: scripts/data/grade6-ela-hand-teach.json — do not Mad-Lib overwrite via gen-grade6-ela-year.mjs without hand merge.

-- Unit 1 L1. What Context Clues Do (ppg6efae18a1c16daea5dd307)
UPDATE "Lesson" SET "content" = '# What Context Clues Do

*Grade 6 English Language Arts · Unit 1 of 16 · Vocabulary Power · Lesson 1*

## Objective

**I can** use surrounding words to infer meaning of unfamiliar vocabulary.

## Warm-up (2 minutes)

Read: “The ranger’s **concise** warning — short, clear, and urgent — kept hikers safe.” What might *concise* mean?

## Teach

### What context clues do

A **context clue** is a hint in the same sentence (or nearby) that helps you figure out an unfamiliar word. You do not need a dictionary first — you hunt for neighbors.

### Example 1 — definition dash

Sentence: “The **arid** field — dry and cracked — needed rain.”

1. Target word: *arid*
2. Clue: “dry and cracked” (dash definition)
3. Meaning: very dry

### Try this

In “Maya gave a **candid** apology — honest and unpolished,” what does *candid* mean?

**Check:** Honest / frank. Clue: “honest and unpolished.”

### Example 2 — weak vs strong clue

Weak: “He felt **exhausted** after practice.” (almost no clue)
Strong rewrite: “He felt **exhausted**, completely worn out, after practice.”
Add clues on purpose when you write.

### Common mistake (this lesson only)

Guessing from the answer choices without rereading the sentence. Fix: underline the target word, then circle 2–3 neighbor words before you choose.

## Guided practice (we do)

1. “Unlike her **verbose** partner, Nina gave a two-sentence update.” Infer *verbose*.  
   **Answer:** Wordy / talkative — contrast clue with “two-sentence.”

2. Name the clue type in “A **habitat**, or natural home, must provide food.”  
   **Answer:** Definition / restatement (“or natural home”).

3. True or false: Context clues always appear in the same sentence.  
   **Answer:** False — sometimes the next sentence helps.

## Independent practice

Complete each item. Show your thinking.

1. In “The speaker’s **candid** apology — honest and unpolished — surprised the room,” what does *candid* most nearly mean? Underline the clue words.
2. “Unlike her **verbose** partner, Nina gave a two-sentence update.” Infer *verbose* and name the clue type.
3. Write an original sentence using *fragile* with a clear definition clue. Mark the clue.
4. Which clue helps more in “He felt **exhausted** after the double practice”? Nearby synonym or contrast? Invent a stronger rewrite with an explicit clue.
5. Circle the unfamiliar word and list two neighbor words that help: “The **arid** field, dry and cracked, needed rain.”
6. Partner trap: Write a sentence where *bright* could mean “smart” OR “shiny.” Then add one clue that locks the meaning to “smart.”

### Answer key (try first)

1. Honest / frank / straightforward. Clue: “honest and unpolished” (definition/restatement).
2. Wordy / talkative. Contrast clue: “Unlike… two-sentence.”
3. Sample: “The fragile vase — easily broken — sat on a high shelf.” Clue = dash definition.
4. Current sentence has weak context. Stronger: “He felt exhausted, completely worn out, after double practice.”
5. *arid*; clues “dry and cracked.” Meaning: very dry.
6. Sample lock: “Her bright solution — clever and new — fixed the schedule.”

## Exit ticket

1. Infer *fragile* in “The fragile vase — easily broken — sat high.”
2. Underline the clue words.

## Stretch (optional)

Write one original sentence with a dash definition clue for *urgent*.
', "objectives" = '• Use surrounding words to infer meaning of unfamiliar vocabulary.
• Name the clue words that support your guess.
• Check the guess against the whole sentence.', "description" = 'Use surrounding words to infer meaning of unfamiliar vocabulary.' WHERE "id" = 'ppg6efae18a1c16daea5dd307' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e1e961f66a48460b48604','ppg6efae18a1c16daea5dd307',NULL,'MULTIPLE_CHOICE','In “The **brisk** wind — cold and quick — stung her cheeks,” *brisk* most nearly means…','["slow and warm","cold and quick","silent","purple"]',1,'Dash clue: cold and quick.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e37703f22f23a28d47678','ppg6efae18a1c16daea5dd307',NULL,'MULTIPLE_CHOICE','Best first move when you see an unfamiliar word?','["Skip the sentence","Underline the word and hunt neighbor clues","Change the question","Guess from choice A"]',1,'Hunt clues first.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ec405742ed222c25a8bdc','ppg6efae18a1c16daea5dd307',NULL,'MULTIPLE_CHOICE','Which sentence has the strongest context clue for *elated*?','["She was elated.","She was elated, filled with joy, when the letter came.","Elated is a word.","She felt elated somehow."]',1,'Restatement “filled with joy.”',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L2. Definition and Restatement Clues (ppg6ed33df4ed27d6b5592cf5)
UPDATE "Lesson" SET "content" = '# Definition and Restatement Clues

*Grade 6 English Language Arts · Unit 1 of 16 · Vocabulary Power · Lesson 2*

## Objective

**I can** spot definition, restatement, and synonym clues.

## Warm-up (2 minutes)

Find the clue: “A **habitat**, or natural home, must provide food and shelter.”

## Teach

### Definition and restatement

Writers often define a hard word right beside it using *or*, commas, dashes, or parentheses. A **restatement** repeats the idea in simpler words.

### Example 1 — or-definition

“A **habitat**, or natural home, must provide food.” → *habitat* = natural home.

### Try this

Rewrite with a dash definition: “The **itinerary** listed every stop.”

**Check:** Sample: “The itinerary — a planned list of stops — listed every stop.”

### Example 2 — synonym clue

“She was **elated**, filled with joy, when the letter arrived.” → *elated* ≈ filled with joy (synonym/restatement).

### Common mistake (this lesson only)

Treating a nearby word as a clue when it is actually a new unknown. Fix: the clue should be simpler or clearer than the target word.

## Guided practice (we do)

1. Mark target + clue: “An **archive** (a stored collection of records) held the maps.”  
   **Answer:** *archive* = stored collection of records.

2. Is “or” a definition signal? Give one example.  
   **Answer:** Yes — “A delta, or river mouth…”

3. True or false: Restatement always uses the word *means*.  
   **Answer:** False — commas, dashes, and paraphrases also work.

## Independent practice

Complete each item. Show your thinking.

1. Identify the definition clue: “A **habitat**, or natural home, must provide food and shelter.” What does *habitat* mean?
2. Rewrite with a dash definition: “The **itinerary** listed every stop.”
3. Find restatement: “She was **elated**, filled with joy, when the letter arrived.” Mark both the target word and restatement.
4. Which is a synonym clue vs a full definition? “**Rapid** (fast) footsteps” vs “A **polygon** is a closed shape with straight sides.”
5. Invent a school sentence for *deadline* that includes a restatement clue.
6. A student underlines “letter” as the definition of *missive* in “The missive arrived.” Why is that insufficient? Fix the sentence.

### Answer key (try first)

1. Natural home. Clue: “or natural home.”
2. Sample: “The itinerary — a planned list of stops — listed every stop.”
3. *elated* = filled with joy.
4. First: synonym in parentheses. Second: full definition.
5. Sample: “The deadline, the final day to submit, is Friday.”
6. “Letter” isn’t even in the sentence. Fix: “The missive — a formal letter — arrived.”

## Exit ticket

1. Find the definition clue in a sentence with parentheses.
2. Restate the meaning in your own words.

## Stretch (optional)

Invent a sentence defining *scholar* with an *or* clue.
', "objectives" = '• Spot definition, restatement, and synonym clues.
• Mark the target word and the clue.
• State the meaning in your own words.', "description" = 'Spot definition, restatement, and synonym clues in sentences.' WHERE "id" = 'ppg6ed33df4ed27d6b5592cf5' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5a20d5b087074b86b511','ppg6ed33df4ed27d6b5592cf5',NULL,'MULTIPLE_CHOICE','In “A **delta**, or river mouth, floods often,” *delta* means…','["a mountain","a river mouth","a desert","a star"]',1,'Or-definition.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e0bec67dd49eab5d90fc9','ppg6ed33df4ed27d6b5592cf5',NULL,'MULTIPLE_CHOICE','Which signal often introduces a definition clue?','["because","or / dashes / parentheses","however","meanwhile"]',1,'Definition signals.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e640b31399769c917d37d','ppg6ed33df4ed27d6b5592cf5',NULL,'MULTIPLE_CHOICE','Best restatement for *fragile*?','["easily broken","very loud","extremely tall","bright green"]',0,'Fragile ≈ easily broken.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L3. Contrast and Antonym Clues (ppg6efda449cca346a5fdadee)
UPDATE "Lesson" SET "content" = '# Contrast and Antonym Clues

*Grade 6 English Language Arts · Unit 1 of 16 · Vocabulary Power · Lesson 3*

## Objective

**I can** use contrast signals to infer meaning.

## Warm-up (2 minutes)

“Unlike her **verbose** partner, Nina gave a two-sentence update.” What is *verbose*?

## Teach

### Contrast clues

A **contrast clue** uses opposites. Signals include *however, unlike, but, instead, although, on the other hand*. If one side is clear, the other side is the opposite idea.

### Example 1 — unlike

“Unlike the **arid** desert, the marsh stayed wet.” → *arid* contrasts with wet → *arid* means dry.

### Try this

“The trail was **treacherous**; however, the paved path was safe and smooth.” Infer *treacherous*.

**Check:** Dangerous / unsafe — contrasted with safe and smooth.

### Example 2 — antonym pairs

If the sentence says someone is **stingy**, not generous, then *stingy* ≈ unwilling to share. The word *not* plus a clear antonym is a clue.

### Common mistake (this lesson only)

Ignoring the contrast word and guessing from the first half only. Fix: circle *however/unlike/but*, then write the opposite of the clear side.

## Guided practice (we do)

1. Infer *scarce*: “Water was scarce; however, food was plentiful.”  
   **Answer:** Hard to find / not plentiful.

2. Name two contrast signals.  
   **Answer:** Examples: however, unlike, but, although, instead.

3. True or false: Contrast clues always mean the target word is negative.  
   **Answer:** False — they only show opposition.

## Independent practice

Complete each item. Show your thinking.

1. “The trail looked **perilous**; however, the guide said it was safe for beginners.” What does *perilous* suggest, and what signal word helps?
2. Complete with an antonym clue: “Unlike the **____** cafeteria, the library stayed quiet.” Choose a precise word and defend it.
3. Name the contrast signal and meaning: “He expected praise; instead he received a **stern** warning.”
4. Write a sentence with *scarce* using *unlike* or *but* so a reader can infer the meaning.
5. Which pair shows real contrast clues? (A) big/large (B) ancient/modern. Use the better pair in an original sentence with *however*.
6. Explain why “She was happy, and she was **ecstatic**” is a weak contrast clue for *ecstatic*. Improve it.

### Answer key (try first)

1. Dangerous. Signal: however (contrast with “safe”).
2. Sample: *chaotic* / *noisy*. Contrast with “quiet.”
3. Signal: instead. *stern* ≈ serious/harsh (opposite of praise).
4. Sample: “Unlike last year’s plentiful rain, water is scarce this summer.”
5. (B). Sample: “The building looked ancient; however, the wiring was modern.”
6. And-synonym, not contrast. Improve with however/unlike or a definition.

## Exit ticket

1. Infer a word using *unlike*.
2. Underline the contrast signal.

## Stretch (optional)

Write a sentence with *however* that unlocks *timid*.
', "objectives" = '• Use contrast signals to infer meaning.
• Name the opposite idea in the sentence.
• State what the target word must mean.', "description" = 'Use however, unlike, and antonym signals to unlock meaning.' WHERE "id" = 'ppg6efda449cca346a5fdadee' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e75e8ef6078e1093d5c33','ppg6efda449cca346a5fdadee',NULL,'MULTIPLE_CHOICE','“Unlike the noisy cafeteria, the library was **serene**.” *Serene* means…','["loud","calm / peaceful","crowded","broken"]',1,'Contrast with noisy.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e251a17385ad971ab4011','ppg6efda449cca346a5fdadee',NULL,'MULTIPLE_CHOICE','Best contrast signal?','["and","however","also","similarly"]',1,'However signals contrast.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e9d8c3b0a886ae1ec0da1','ppg6efda449cca346a5fdadee',NULL,'MULTIPLE_CHOICE','If A is generous and B is the opposite, B is…','["stingy","identical","taller","louder"]',0,'Antonym of generous.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L4. Example Clues and Lists (ppg6e1331e9464d630653b53d)
UPDATE "Lesson" SET "content" = '# Example Clues and Lists

*Grade 6 English Language Arts · Unit 1 of 16 · Vocabulary Power · Lesson 4*

## Objective

**I can** infer meaning from examples and lists.

## Warm-up (2 minutes)

“**Rodents**, such as mice and squirrels, chewed the feed bags.” What are rodents?

## Teach

### Example clues

An **example clue** shows what a category includes. Signals: *such as, for example, including, like*. The examples are members; the target word is the group name (or the shared trait).

### Example 1 — such as

“**Citrus** fruits, such as oranges and lemons, are rich in vitamin C.” → citrus = a fruit group including oranges and lemons.

### Try this

“The kit held **fasteners** — nails, screws, and bolts.” Infer *fasteners*.

**Check:** Things that join or hold parts together.

### Example 2 — list as clue

When a dash or colon introduces a list, the word before the list is often the category. Test: does your definition cover every item?

### Common mistake (this lesson only)

Using only the first example and ignoring the rest. Fix: check that your meaning fits *all* listed items.

## Guided practice (we do)

1. Infer *precipitation*: “Precipitation — rain, snow, and hail — delayed the game.”  
   **Answer:** Water falling from the sky.

2. Signal word in “sports including soccer and track”?  
   **Answer:** including

3. True or false: Examples must be the same part of speech as the target word’s members.  
   **Answer:** Usually yes — they illustrate the category.

## Independent practice

Complete each item. Show your thinking.

1. “**Percussion** instruments — drums, cymbals, and triangles — kept the beat.” What does *percussion* mean here?
2. Add an example clue list for *renewable resources* in one sentence.
3. Infer *citrus*: “She packed citrus fruit: oranges, lemons, and limes.” What shared trait do the examples reveal?
4. Is “for example” always enough? Critique: “He likes **sports**, for example.” Improve with a clearer list.
5. Write a sentence defining *precipitation* using an example list (not a dictionary dump).
6. Partner task: Hide a target academic word in a sentence with three examples; a partner must name the category word’s meaning.

### Answer key (try first)

1. Instruments played by striking; examples list drums/cymbals/triangles.
2. Sample: “Renewable resources, such as wind, sunlight, and timber grown to replace what is cut, can be replenished.”
3. Acidic/juicy fruits of that family; examples show category membership.
4. Too vague. Better: “He likes sports — for example, soccer, track, and swimming.”
5. Sample: “Precipitation such as rain, snow, and sleet fell overnight.”
6. Accept any clear category+examples sentence; meaning must match examples.

## Exit ticket

1. Infer a category word from a three-item list.
2. Write the meaning in one short sentence.

## Stretch (optional)

Invent an example-clue sentence for *herbivores*.
', "objectives" = '• Infer meaning from examples and lists.
• Spot signals like *such as*, *for example*, *including*.
• Check that your meaning fits every example.', "description" = 'Infer word meaning from examples and illustrative lists.' WHERE "id" = 'ppg6e1331e9464d630653b53d' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ea745ee2c95b305aa9c22','ppg6e1331e9464d630653b53d',NULL,'MULTIPLE_CHOICE','“**Pollinators**, such as bees and butterflies, help plants.” Pollinators are…','["animals that help plants reproduce by moving pollen","only trees","rocks","storms"]',0,'Examples show the job.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e7fc702631dbd30126529','ppg6e1331e9464d630653b53d',NULL,'MULTIPLE_CHOICE','Which is an example-clue signal?','["however","such as","because","although"]',1,'Such as introduces examples.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eedf0b5ba772822870e77','ppg6e1331e9464d630653b53d',NULL,'MULTIPLE_CHOICE','Best meaning for *tools* in “tools: hammer, wrench, pliers”?','["things used to do work","only foods","colors","planets"]',0,'List members are tools.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L5. Greek and Latin Roots I (ppg6eed22f42c47268ae93247)
UPDATE "Lesson" SET "content" = '# Greek and Latin Roots I

*Grade 6 English Language Arts · Unit 1 of 16 · Vocabulary Power · Lesson 5*

## Objective

**I can** decode words using roots spect, port, dict, scrib/script.

## Warm-up (2 minutes)

What do *inspect*, *spectator*, and *respect* share?

## Teach

### Roots carry meaning

A **root** is a word part that carries core meaning. Today: **spect** = look; **port** = carry; **dict** = say; **scrib/script** = write.

### Example 1 — spect = look

*Inspect* = look into. *Spectator* = one who looks. Same root, related meanings.

### Try this

Break *transport* into parts and meaning.

**Check:** trans (across) + port (carry) → carry across.

### Example 2 — dict and scrib

*Dictate* = say aloud for someone to write. *Manuscript* = written by hand (manu = hand, script = write).

### Common mistake (this lesson only)

Memorizing a whole word while ignoring the root you already know. Fix: underline the root first, then add prefixes/suffixes.

## Guided practice (we do)

1. Meaning of *export*?  
   **Answer:** Carry out (ex = out, port = carry).

2. Root in *describe*?  
   **Answer:** scrib = write

3. *Dictionary* connects to which root?  
   **Answer:** dict = say / speak (words)

## Independent practice

Complete each item. Show your thinking.

1. The root *spect* means “look.” Unpack *inspect* and *spectator*. How does each use “look”?
2. Root *port* = carry. What do *transport* and *portable* literally suggest? Use each in a school sentence.
3. Root *dict* = speak/say. Infer *predict* and *contradict* from word parts + a tiny context sentence you invent.
4. Root *scrib/script* = write. Which fits: “The doctor’s ____ was hard to read” — *script* or *spectacle*? Why?
5. Build a new word with *spect* or *port* + a familiar prefix; define it from parts, then check if it is a real word.
6. Sort: *dictionary*, *portrait*, *description*, *import* — which roots (dict/port/scrib/spect) drive each?

### Answer key (try first)

1. Inspect: look into carefully. Spectator: one who looks/watches.
2. Transport: carry across. Portable: able to be carried. Sentences will vary.
3. Predict: say before. Contradict: speak against. Context sentences will vary.
4. *script* (writing). *spectacle* is from spect (look).
5. Samples: *respect* (look back/regard), *export* (carry out). Honesty about real vs invented is fine if parts are explained.
6. dictionary→dict; portrait→port (or trait history—but treat as port “carry image” carefully) / prefer: portrait often taught with trait; accept dict for dictionary, scrib for description, port for import; portrait may be flagged as trick — *portrait*≈depicted likeness (related historically to portray). Prefer scoring: dictionary=dict; description=scrib; import=port; portrait=discuss (not spect).

## Exit ticket

1. Decode *spectacle* using spect.
2. Use *portable* in a sentence that shows “can be carried.”

## Stretch (optional)

List four words with *port* and gloss each.
', "objectives" = '• Decode words using roots spect, port, dict, scrib/script.
• Explain how the root carries meaning across words.
• Use a root to unlock a new word in a sentence.', "description" = 'Decode words with common roots (spect, port, dict, scrib/script).' WHERE "id" = 'ppg6eed22f42c47268ae93247' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ed55a8566f4a194ba7712','ppg6eed22f42c47268ae93247',NULL,'MULTIPLE_CHOICE','*Spectator* most nearly relates to…','["looking / watching","carrying boxes","writing novels","cooking"]',0,'spect = look.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e43134d069d011ea4ad6d','ppg6eed22f42c47268ae93247',NULL,'MULTIPLE_CHOICE','*Transport* literally suggests…','["carry across","look away","write fast","say quietly"]',0,'trans + port.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e4908bad4b7d61dd1f377','ppg6eed22f42c47268ae93247',NULL,'MULTIPLE_CHOICE','Root meaning of *scrib/script*?','["write","jump","eat","sleep"]',0,'Write.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L6. Prefixes That Flip Meaning (ppg6e660ebd03a9b0f44def7c)
UPDATE "Lesson" SET "content" = '# Prefixes That Flip Meaning

*Grade 6 English Language Arts · Unit 1 of 16 · Vocabulary Power · Lesson 6*

## Objective

**I can** apply un-, re-, pre-, dis-, mis- to unlock meaning.

## Warm-up (2 minutes)

How does *unhappy* relate to *happy*?

## Teach

### Prefixes change meaning

A **prefix** attaches to the front of a base word. Today: **un-** = not; **re-** = again; **pre-** = before; **dis-** = opposite/not; **mis-** = wrongly.

### Example 1 — un- and re-

*Unlock* = reverse a lock. *Rewrite* = write again. The base stays visible; the prefix flips or adjusts the meaning.

### Try this

Unpack *misread* and *preview*.

**Check:** misread = read wrongly; preview = see/view before.

### Example 2 — dis- caution

*Disagree* = not agree. Check that *dis-* is a true prefix (not just letters inside a different root).

### Common mistake (this lesson only)

Adding a prefix and inventing a meaning that ignores the base. Fix: define the base first, then apply the prefix.

## Guided practice (we do)

1. *Preseason* means…?  
   **Answer:** Before the season.

2. Build a word: *not* + *fair*  
   **Answer:** unfair

3. *Misplace* suggests…  
   **Answer:** Place wrongly / put in the wrong spot.

## Independent practice

Complete each item. Show your thinking.

1. Add *un-* or *dis-* to flip *fair* and *agree*. Write both new words in sentences about a group project.
2. Explain *reheat* and *preheat* — same root idea “heat,” different prefixes. How do meanings differ?
3. Choose *mis-* or *un-* : “She ____read the schedule and went to the wrong room.” Explain.
4. Build: *view* + *re-* and *view* + *pre-*. Definitions from parts + one original sentence each.
5. Which prefix fits “not possible”: *im-*, *re-*, or *pre-*? Write *impossible* and unpack.
6. Error hunt: A student says *re-* always means “again,” so *respect* means “spect again.” Correct the misconception.

### Answer key (try first)

1. unfair; disagree. Sentences will vary; prefixes reverse meaning.
2. Reheat: heat again. Preheat: heat before (cooking).
3. misread — mis- = wrongly.
4. review=view again; preview=view before.
5. im- + possible; im-/in- often mean not.
6. Prefixes have histories; *respect* isn’t “look again” in modern use the way *replay* is. Teach: check meaning in context, not only parts.

## Exit ticket

1. Unpack *rebuild*.
2. Use *disagree* in a clear sentence.

## Stretch (optional)

Make a three-word family with *re-* and explain each.
', "objectives" = '• Apply un-, re-, pre-, dis-, mis- to unlock meaning.
• Explain how a prefix changes a base word.
• Build a new word and use it correctly.', "description" = 'Apply un-, re-, pre-, dis-, mis- to build and unpack words.' WHERE "id" = 'ppg6e660ebd03a9b0f44def7c' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eba2f076e3701d9c4c6b5','ppg6e660ebd03a9b0f44def7c',NULL,'MULTIPLE_CHOICE','*Unkind* means…','["not kind","very kind","kind again","before kind"]',0,'un- = not.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e0482d8d13f254e31039c','ppg6e660ebd03a9b0f44def7c',NULL,'MULTIPLE_CHOICE','*Reread* means…','["read again","never read","read wrongly","read before birth"]',0,'re- = again.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e205bacb02db976deb3dd','ppg6e660ebd03a9b0f44def7c',NULL,'MULTIPLE_CHOICE','Best unpacking of *miscount*?','["count wrongly","count before","not a number","count kindly"]',0,'mis- = wrongly.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 1 L7. Suffixes and Part of Speech (ppg6e38ce4c2d4001dd1e53a0)
UPDATE "Lesson" SET "content" = '# Suffixes and Part of Speech

*Grade 6 English Language Arts · Unit 1 of 16 · Vocabulary Power · Lesson 7*

## Objective

**I can** use -tion, -able, -ous, -ly to spot part of speech.

## Warm-up (2 minutes)

In “Her **decision** was final,” is *decision* a noun or a verb?

## Teach

### Suffixes change a word’s job

A **suffix** attaches to the end and often changes part of speech. **-tion** → noun; **-able** → adjective (“can be”); **-ous** → adjective (“full of”); **-ly** → adverb.

### Example 1 — -tion noun

*Decide* (verb) → *decision* (noun). “Her decision was final.”

### Try this

Fill in: “The glass is ____ (break + able).”

**Check:** breakable — able to be broken.

### Example 2 — -ly adverb

*Quick* (adjective) → *quickly* (adverb). “She finished quickly.” Not “She finished quick” in formal writing.

### Common mistake (this lesson only)

Keeping the verb form when the sentence needs a noun (*decide* vs *decision*). Fix: ask “Is this naming a thing or doing an action?”

## Guided practice (we do)

1. *Famous* is which part of speech?  
   **Answer:** Adjective (-ous).

2. *Carefully* modifies…  
   **Answer:** Usually a verb (how something is done).

3. *Creation* comes from…  
   **Answer:** create + -tion → noun

## Independent practice

Complete each item. Show your thinking.

1. Change *educate* → noun with *-tion*. Use the noun in a sentence about Prosper Prep.
2. Is *joyful* an adjective or adverb? Use *-ly* to build an adverb from *joyful*’s base pattern (*joyfully*) and modify a verb.
3. Add *-able* to *read* and explain the new part of speech and meaning.
4. Sort by job: *courageous*, *dangerously*, *creation*. Label noun/adjective/adverb.
5. Write two sentences: one with *nervous* (adj) and one with *nervously* (adv). Underline the word each modifies.
6. Why does “She ran quick” need a suffix fix for formal writing? Provide the revision.

### Answer key (try first)

1. education. Sentence will vary.
2. joyful=adjective; joyfully=adverb (e.g., “cheered joyfully”).
3. readable (adjective): able to be read.
4. courageous=adj; dangerously=adv; creation=noun.
5. Adj modifies noun/pronoun; adv modifies verb/adj/adv. Samples will vary.
6. Need adverb *quickly* to modify *ran*.

## Exit ticket

1. Turn *act* into a noun with -tion/-ion.
2. Use *safely* in a sentence.

## Stretch (optional)

Build a chain: verb → noun (-tion) → adjective (-able) if possible.
', "objectives" = '• Use -tion, -able, -ous, -ly to spot part of speech.
• Change a word’s job with a suffix.
• Choose the form that fits the sentence.', "description" = 'Use -tion, -able, -ous, -ly to recognize how words function.' WHERE "id" = 'ppg6e38ce4c2d4001dd1e53a0' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5521fc6065766bd084ed','ppg6e38ce4c2d4001dd1e53a0',NULL,'MULTIPLE_CHOICE','*Celebration* is a…','["noun","verb","adverb","preposition"]',0,'-tion → noun.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e03790118389ea23b6757','ppg6e38ce4c2d4001dd1e53a0',NULL,'MULTIPLE_CHOICE','Best fit: “The puzzle is ____.”','["solvable","solve","solvedly","solutionablely"]',0,'-able adjective.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e6de7992417d63a7f7659','ppg6e38ce4c2d4001dd1e53a0',NULL,'MULTIPLE_CHOICE','*Gracefully* most often functions as…','["an adverb","a noun","a conjunction","a pronoun"]',0,'-ly adverb.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L1. Topic vs Main Idea (ppg6e7a6b8d29a0f007bf37b4)
UPDATE "Lesson" SET "content" = '# Topic vs Main Idea

*Grade 6 English Language Arts · Unit 2 of 16 · Reading: Key Ideas and Details · Lesson 1*

## Objective

**I can** distinguish a topic label from a complete main-idea statement.

## Warm-up (2 minutes)

A passage is about hikers and muddy trails. Is “hiking” a main idea or a topic?

## Teach

### Topic vs main idea

A **topic** is a short label (hiking, sleep, scholarships). A **main idea** is a complete sentence telling what the text says about the topic.

### Example 1 — labels vs sentences

Topic: muddy trails. Main idea: “Hikers who slow down at muddy markers protect the path and stay safer.”

### Try this

Fix this topic into a main idea: “school start times.”

**Check:** Sample: “Early school start times can cut into the deep sleep many middle-school students need.”

### Example 2 — test

If you can ask “What about it?” and the phrase cannot answer, it is still a topic.

### Common mistake (this lesson only)

Calling a one-word title the main idea. Fix: force a subject + verb sentence.

## Guided practice (we do)

1. Topic or main idea: “Sleep matters for learning.”  
   **Answer:** Main idea — complete sentence.

2. Topic or main idea: “sleep.”  
   **Answer:** Topic.

3. Why must a main idea be a sentence?  
   **Answer:** It states what the text claims about the topic.

## Independent practice

Complete each item. Show your thinking.

1. Read: “Maya paused at the mailbox. The envelope was thin, but her name looked official. She did n…” Is “mail” or “nervous hope about an official letter” closer to a main idea for the Maya paragraph? Write a full main-idea sentence.
2. Turn the topic “hiking safety” into a main-idea sentence using the Tyler trail passage ideas (markers, slowing down, injuries).
3. Which is a topic label, not a main idea? (A) Scholarship pressure (B) Jordan relies on study-hall breathing to handle scholarship-night nerves. Explain.
4. Write a weak one-word “main idea” for the Maya passage, then upgrade it to a complete sentence that covers the whole beat (mailbox → letter → heavy hope).
5. A student says the main idea of the trail text is “plants.” Why is that incomplete? Supply a better MI.
6. Compare: topic “school schedules” vs a main idea about biology vs logistics from the start-times text. Write both.

### Answer key (try first)

1. Topic ≠ main idea. Strong MI: Maya’s official letter brings heavy, nervous hope. “Mail” is only a topic label.
2. Sample: Hikers who slow at muddy markers protect the trail and reduce injuries, especially on the last half mile.
3. (A) topic. (B) complete main-idea style claim.
4. Weak: “hope/letter.” Strong: complete sentence covering delay, letter contents, heavy hope.
5. “Plants” is a detail/topic fragment. Better MI includes slowing at markers to protect path/plants and safety.
6. Topic: school schedules. MI sample: Start-time debates pit student sleep biology against family/work logistics.

## Exit ticket

1. Label topic vs main idea for two phrases.
2. Write one main-idea sentence for a trail article.

## Stretch (optional)

Find a news headline that is only a topic; rewrite it as a main idea.
', "objectives" = '• Distinguish a topic label from a complete main-idea statement.
• Write a main idea as a full sentence.
• Reject titles that are only topics.', "description" = 'Distinguish a topic label from a complete main-idea statement.' WHERE "id" = 'ppg6e7a6b8d29a0f007bf37b4' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e018a5fac8a53006f8342','ppg6e7a6b8d29a0f007bf37b4',NULL,'MULTIPLE_CHOICE','Which is a main idea?','["scholarships","Maya opened a thin envelope and felt hope and fear together.","letters","feelings"]',1,'Complete sentence about the topic.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e0441820d12d8fc15ce2e','ppg6e7a6b8d29a0f007bf37b4',NULL,'MULTIPLE_CHOICE','Best definition of topic?','["a short label for what the text is about","the longest sentence","the author''s biography","a random detail"]',0,'Topic = label.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e387ab95ac490aa6781f5','ppg6e7a6b8d29a0f007bf37b4',NULL,'MULTIPLE_CHOICE','“Basketball” in a sports passage is usually…','["a topic","a full main idea","a conclusion","a counterclaim"]',0,'One-word label.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L2. Supporting Details That Matter (ppg6e4c9acfee91da035b56ea)
UPDATE "Lesson" SET "content" = '# Supporting Details That Matter

*Grade 6 English Language Arts · Unit 2 of 16 · Reading: Key Ideas and Details · Lesson 2*

## Objective

**I can** select details that support the main idea.

## Warm-up (2 minutes)

Main idea: Slowing at muddy markers protects trails. Which detail helps: “Most injuries happen when people rush the last half mile” or “The parking lot has twelve spaces”?

## Teach

### Supporting details

A **supporting detail** proves or explains the main idea. Trivia can be true and still useless.

### Example 1 — match test

Main idea: Crews mark muddy sections. Support: “Wooden signs tell hikers where to slow down.” Non-support: “Tyler is a city in Texas.”

### Try this

Does “Rangers say most injuries happen when people rush” support the slow-down main idea?

**Check:** Yes — it explains why slowing matters.

### Example 2 — how to check

Ask: If I remove this detail, does the main idea feel weaker? If yes, it supports.

### Common mistake (this lesson only)

Keeping every sentence because it is in the passage. Fix: keep only details that answer “How do we know?”

## Guided practice (we do)

1. Support or not: “A short pause helps younger walkers notice roots.” (MI: slowing protects hikers)  
   **Answer:** Support.

2. Support or not: “The author''s cousin likes pizza.”  
   **Answer:** Not support.

3. One test for a supporting detail?  
   **Answer:** It strengthens or explains the main idea.

## Independent practice

Complete each item. Show your thinking.

1. List two details from the Maya passage that support “Hope can feel heavy.” Cross out one unrelated invented detail.
2. Write one supporting detail sentence you could add to the trail paragraph that stays on the MI of slowing down for safety.
3. Sort: Detail vs decoration — “most injuries on the last half mile” vs “the parking lot exists.”
4. Main idea: Careful hikers protect trails. Which detail supports it better — wooden signs on muddy sections, or “East Texas is pretty”? Explain.
5. A partner picks “washed her hands” as the key support for “official letter matters.” Help them choose a stronger detail and justify.
6. For MI “Jordan manages pressure with practiced habits,” choose a supporting detail from the scholarship-night excerpt and explain the link.

### Answer key (try first)

1. Thin official envelope; shaking fingers; three sentences + deadline. Cross out anything off-plot.
2. Any on-focus safety/slowing detail; reject random scenery.
3. Injuries detail supports caution MI; parking lot alone is weak decoration.
4. Wooden signs/markers detail supports the MI; “pretty” is off-focus.
5. Stronger: official name/envelope; three sentences and a deadline; heavy hope realization.
6. Study-hall breathing / free-throw routine — connects habit to pressure management.

## Exit ticket

1. Given a main idea, star two supporting details.
2. Cross out one trivia sentence.

## Stretch (optional)

Write a main idea and three details; mark one as a decoy.
', "objectives" = '• Select details that support the main idea.
• Drop interesting but off-topic facts.
• Explain how a detail connects.', "description" = 'Select details that actually support the main idea.' WHERE "id" = 'ppg6e4c9acfee91da035b56ea' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eb56c2ab981efa2d1b5e3','ppg6e4c9acfee91da035b56ea',NULL,'MULTIPLE_CHOICE','Main idea: Sleep loss hurts focus. Best support?','["Students who sleep less often struggle to pay attention in first period.","Texas has many school districts.","Pizza is popular.","Buses are yellow."]',0,'Links sleep loss to focus.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ea6b4323e4c32bc93401b','ppg6e4c9acfee91da035b56ea',NULL,'MULTIPLE_CHOICE','A detail can be true and still…','["fail to support the main idea","become the title automatically","erase the topic","prove every claim"]',0,'Relevance matters.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eb493678135141d980e55','ppg6e4c9acfee91da035b56ea',NULL,'MULTIPLE_CHOICE','Best question to test a detail?','["Does this strengthen the main idea?","Is it the longest sentence?","Does it include a comma?","Was it written first?"]',0,'Support test.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L3. Summarizing Without Spoiling (ppg6ef34b2bd752a3af489ea7)
UPDATE "Lesson" SET "content" = '# Summarizing Without Spoiling

*Grade 6 English Language Arts · Unit 2 of 16 · Reading: Key Ideas and Details · Lesson 3*

## Objective

**I can** write an objective summary in order.

## Warm-up (2 minutes)

In one sentence, summarize: Maya waits to open a thin official letter, then finds three sentences and a deadline.

## Teach

### Objective summary

A **summary** retells the important parts in order using fewer words. Stay objective — no “I think” and no tiny decorations.

### Example 1 — keep order

Story order: pause at mailbox → wash hands → open letter → find deadline. Summary must not shuffle the turning points.

### Try this

Which belongs in a summary: “Hope can be heavy” (theme hint) or “She washed her hands first” (key beat)?

**Check:** Both can matter; prefer plot/idea beats over style flourishes unless the question asks for theme.

### Example 2 — length

Aim for a few sentences that a classmate could use as a map — not a new essay.

### Common mistake (this lesson only)

Adding personal opinions (“This was boring”). Fix: stick to what the text does.

## Guided practice (we do)

1. Summary must keep…  
   **Answer:** Order of key ideas/events.

2. Drop from summary?  
   **Answer:** Tiny sensory extras that do not change meaning.

3. Objective means…  
   **Answer:** No personal like/dislike inserted.

## Independent practice

Complete each item. Show your thinking.

1. Write a 2–3 sentence objective summary of this excerpt (no opinions): “Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose r…” Drop trivia; keep order.
2. Write a 2–3 sentence objective summary of this excerpt (no opinions): “Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose r…” Drop trivia; keep order.
3. Write a 2–3 sentence objective summary of this excerpt (no opinions): “Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose r…” Drop trivia; keep order.
4. Write a 2–3 sentence objective summary of this excerpt (no opinions): “Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose r…” Drop trivia; keep order.
5. Write a 2–3 sentence objective summary of this excerpt (no opinions): “Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose r…” Drop trivia; keep order.
6. Write a 2–3 sentence objective summary of this excerpt (no opinions): “Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose r…” Drop trivia; keep order.

### Answer key (try first)

1. Summary must be objective, ordered, cover central beats, omit minor color unless essential.
2. Summary must be objective, ordered, cover central beats, omit minor color unless essential.
3. Summary must be objective, ordered, cover central beats, omit minor color unless essential.
4. Summary must be objective, ordered, cover central beats, omit minor color unless essential.
5. Summary must be objective, ordered, cover central beats, omit minor color unless essential.
6. Summary must be objective, ordered, cover central beats, omit minor color unless essential.

## Exit ticket

1. Summarize a 5-sentence mentor text in 2 sentences.
2. Remove one opinion from a weak summary.

## Stretch (optional)

Write a summary, then cut five more words without losing meaning.
', "objectives" = '• Write an objective summary in order.
• Drop trivia and opinions.
• Keep only key events or ideas.', "description" = 'Write objective summaries that keep order and drop trivia.' WHERE "id" = 'ppg6ef34b2bd752a3af489ea7' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eb5249e64452cf0956e8f','ppg6ef34b2bd752a3af489ea7',NULL,'MULTIPLE_CHOICE','Best summary habit?','["Keep key ideas in order; drop trivia and opinions","Retell every adjective","Start with “I feel”","Shuffle events for suspense"]',0,'Order + essentials.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ea7fee3962274a20bcfd4','ppg6ef34b2bd752a3af489ea7',NULL,'MULTIPLE_CHOICE','Which should you usually drop?','["a side detail about the author''s favorite color","the central conflict","the final outcome","the main claim"]',0,'Trivia.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ebf5b043a5bdb4942bb5b','ppg6ef34b2bd752a3af489ea7',NULL,'MULTIPLE_CHOICE','Objective summary avoids…','["personal judgment","correct order","key events","clear nouns"]',0,'No personal judgment.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L4. Inferring Character Motivation (ppg6e858683802b541c2b9591)
UPDATE "Lesson" SET "content" = '# Inferring Character Motivation

*Grade 6 English Language Arts · Unit 2 of 16 · Reading: Key Ideas and Details · Lesson 4*

## Objective

**I can** infer why a character acts using dialogue and action.

## Warm-up (2 minutes)

Maya washes her hands before opening the letter. Why might she do that?

## Teach

### Motivation = why

An **inference** about motivation combines text clues + reasoning. Ask: What does the character want or fear?

### Example 1 — action clue

Clue: She does not open the letter on the porch. Inference: She wants privacy or needs time to brace herself.

### Try this

Infer from: Coach says, “Breathe like you do in study hall.” Why say that?

**Check:** To calm Jordan / connect sports nerves to a familiar habit.

### Example 2 — dialogue + action

Put both together: words show intent; actions show what they prioritize.

### Common mistake (this lesson only)

Inventing feelings with no clue (“She''s evil”). Fix: point to a line, then explain.

## Guided practice (we do)

1. Motivation clue type in washed hands?  
   **Answer:** Action.

2. What must an inference include?  
   **Answer:** Text clue + reasoning.

3. True or false: Motivation is always stated outright.  
   **Answer:** False — often inferred.

## Independent practice

Complete each item. Show your thinking.

1. Using Maya or Jordan (depending on excerpt), infer a motivation in one sentence and quote/paraphrase one action or line that supports it. Excerpt start: “Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down …”
2. Using Maya or Jordan (depending on excerpt), infer a motivation in one sentence and quote/paraphrase one action or line that supports it. Excerpt start: “Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down …”
3. Using Maya or Jordan (depending on excerpt), infer a motivation in one sentence and quote/paraphrase one action or line that supports it. Excerpt start: “Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down …”
4. Using Maya or Jordan (depending on excerpt), infer a motivation in one sentence and quote/paraphrase one action or line that supports it. Excerpt start: “Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down …”
5. Using Maya or Jordan (depending on excerpt), infer a motivation in one sentence and quote/paraphrase one action or line that supports it. Excerpt start: “Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down …”
6. Using Maya or Jordan (depending on excerpt), infer a motivation in one sentence and quote/paraphrase one action or line that supports it. Excerpt start: “Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down …”

### Answer key (try first)

1. Inference + specific evidence (e.g., Maya delays opening → anxiety/importance; Jordan uses study-hall breath → seeks calm).
2. Inference + specific evidence (e.g., Maya delays opening → anxiety/importance; Jordan uses study-hall breath → seeks calm).
3. Inference + specific evidence (e.g., Maya delays opening → anxiety/importance; Jordan uses study-hall breath → seeks calm).
4. Inference + specific evidence (e.g., Maya delays opening → anxiety/importance; Jordan uses study-hall breath → seeks calm).
5. Inference + specific evidence (e.g., Maya delays opening → anxiety/importance; Jordan uses study-hall breath → seeks calm).
6. Inference + specific evidence (e.g., Maya delays opening → anxiety/importance; Jordan uses study-hall breath → seeks calm).

## Exit ticket

1. Infer motivation for one character action.
2. Quote or paraphrase the clue.

## Stretch (optional)

Write a CER: claim about motivation, evidence, reasoning.
', "objectives" = '• Infer why a character acts using dialogue and action.
• Cite a text clue for the inference.
• Separate what happens from why it happens.', "description" = 'Use dialogue and action to infer why a character acts.' WHERE "id" = 'ppg6e858683802b541c2b9591' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eae656c2429d975c1121b','ppg6e858683802b541c2b9591',NULL,'MULTIPLE_CHOICE','Best evidence for “Maya is nervous”?','["Her fingers shake as she opens the envelope","The envelope is made of paper","Tuesday exists","Mailboxes are metal"]',0,'Shaking supports nerves.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ed563b87f0bbf6935fec2','ppg6e858683802b541c2b9591',NULL,'MULTIPLE_CHOICE','Motivation answers…','["why a character acts","where the setting is","the page number","the font"]',0,'Why.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e1e8694c1ef0c0f9d655c','ppg6e858683802b541c2b9591',NULL,'MULTIPLE_CHOICE','Inference needs…','["clue + reasoning","only a guess","only a dictionary","a new character"]',0,'Clue + reasoning.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L5. Finding Explicit Evidence (ppg6e002b649ecd1c8118b815)
UPDATE "Lesson" SET "content" = '# Finding Explicit Evidence

*Grade 6 English Language Arts · Unit 2 of 16 · Reading: Key Ideas and Details · Lesson 5*

## Objective

**I can** quote or paraphrase exact lines that answer a question.

## Warm-up (2 minutes)

Question: Where do most trail injuries happen? Find the line.

## Teach

### Explicit evidence

**Explicit** means the answer is directly in the text. Quote short; paraphrase fairly; always make it findable.

### Example 1 — pointing

Good: “Rangers say most injuries happen when people rush the last half mile.” Bad: “Somewhere it talks about danger.”

### Try this

Paraphrase the muddy-marker detail without copying every word.

**Check:** Sample: Crews use wooden signs so hikers slow down on muddy sections.

### Example 2 — quote length

Quote the key phrase, not the whole paragraph.

### Common mistake (this lesson only)

Answering from memory of a different text. Fix: reread and underline before you write.

## Guided practice (we do)

1. Explicit means…  
   **Answer:** Stated directly in the text.

2. Why point to a line?  
   **Answer:** So a partner can find it in seconds.

3. Quote or paraphrase both OK?  
   **Answer:** Yes — if accurate and findable.

## Independent practice

Complete each item. Show your thinking.

1. Question: What do rangers say about injuries? Answer with a paraphrase AND a short quotation from the informational trail text ideas.
2. Question: What do rangers say about injuries? Answer with a paraphrase AND a short quotation from the informational trail text ideas.
3. Question: What do rangers say about injuries? Answer with a paraphrase AND a short quotation from the informational trail text ideas.
4. Question: What do rangers say about injuries? Answer with a paraphrase AND a short quotation from the informational trail text ideas.
5. Question: What do rangers say about injuries? Answer with a paraphrase AND a short quotation from the informational trail text ideas.
6. Question: What do rangers say about injuries? Answer with a paraphrase AND a short quotation from the informational trail text ideas.

### Answer key (try first)

1. Paraphrase + quote idea: most injuries happen when people rush the last half mile.
2. Paraphrase + quote idea: most injuries happen when people rush the last half mile.
3. Paraphrase + quote idea: most injuries happen when people rush the last half mile.
4. Paraphrase + quote idea: most injuries happen when people rush the last half mile.
5. Paraphrase + quote idea: most injuries happen when people rush the last half mile.
6. Paraphrase + quote idea: most injuries happen when people rush the last half mile.

## Exit ticket

1. Answer a detail question with a quoted phrase.
2. Paraphrase the same detail.

## Stretch (optional)

Trade papers; can a partner find your evidence in 10 seconds?
', "objectives" = '• Quote or paraphrase exact lines that answer a question.
• Point to where the evidence lives.
• Avoid vague “the text says so.”', "description" = 'Quote or paraphrase the exact lines that answer a question.' WHERE "id" = 'ppg6e002b649ecd1c8118b815' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5a9018da7dc3f35c7b54','ppg6e002b649ecd1c8118b815',NULL,'MULTIPLE_CHOICE','Best explicit evidence habit?','["Underline the exact line that answers the question","Invent a statistic","Use only opinions","Ignore the passage"]',0,'Exact line.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eb42c13d8c6ef1e4f2078','ppg6e002b649ecd1c8118b815',NULL,'MULTIPLE_CHOICE','Vague citation sounds like…','["“The text says so somewhere”","a short quote with a locator","a paraphrase of a clear sentence","a page-anchored note"]',0,'Vague.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e56b33b56986d88727fe3','ppg6e002b649ecd1c8118b815',NULL,'MULTIPLE_CHOICE','Paraphrase must…','["keep the meaning without copying every word","change the meaning","add new facts","delete the claim"]',0,'Same meaning.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L6. Central Idea in Informational Text (ppg6ec820d65b7cf1cf4b5a4c)
UPDATE "Lesson" SET "content" = '# Central Idea in Informational Text

*Grade 6 English Language Arts · Unit 2 of 16 · Reading: Key Ideas and Details · Lesson 6*

## Objective

**I can** state the central idea of a short nonfiction piece.

## Warm-up (2 minutes)

After reading the trail article, finish: “This article is mainly about ___.”

## Teach

### Central idea (info)

In informational text, the **central idea** is the main point the author wants you to understand — a full sentence, not a topic sticker.

### Example 1 — build it

1) Topic: trail safety. 2) Central idea: Marking muddy sections and slowing down protects hikers and plants.

### Try this

Write a central idea for a piece about school start times and sleep.

**Check:** Sample: “Early bells can clash with middle-school sleep needs and family work schedules.”

### Example 2 — details

Pick details that appear in more than one place or that the author emphasizes.

### Common mistake (this lesson only)

Copying the first sentence always. Fix: check whether the opening is hook or thesis.

## Guided practice (we do)

1. Central idea must be…  
   **Answer:** A complete sentence.

2. Topic vs central idea?  
   **Answer:** Label vs what the text says about it.

3. How many supporting details minimum in a solid response?  
   **Answer:** Often two clear ones.

## Independent practice

Complete each item. Show your thinking.

1. State the central idea of the informational excerpt in one complete sentence, then list two key details that develop it.
2. State the central idea of the informational excerpt in one complete sentence, then list two key details that develop it.
3. State the central idea of the informational excerpt in one complete sentence, then list two key details that develop it.
4. State the central idea of the informational excerpt in one complete sentence, then list two key details that develop it.
5. State the central idea of the informational excerpt in one complete sentence, then list two key details that develop it.
6. State the central idea of the informational excerpt in one complete sentence, then list two key details that develop it.

### Answer key (try first)

1. CI + two relevant details (markers/slowing/injuries OR biology vs logistics).
2. CI + two relevant details (markers/slowing/injuries OR biology vs logistics).
3. CI + two relevant details (markers/slowing/injuries OR biology vs logistics).
4. CI + two relevant details (markers/slowing/injuries OR biology vs logistics).
5. CI + two relevant details (markers/slowing/injuries OR biology vs logistics).
6. CI + two relevant details (markers/slowing/injuries OR biology vs logistics).

## Exit ticket

1. Write central idea + two details for a short article.
2. Cross out a detail that does not support.

## Stretch (optional)

Compare your central idea with a partner; merge the best wording.
', "objectives" = '• State the central idea of a short nonfiction piece.
• Support it with two key details.
• Keep the central idea objective.', "description" = 'State the central idea of a short nonfiction piece.' WHERE "id" = 'ppg6ec820d65b7cf1cf4b5a4c' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e33f1f7738640bf213783','ppg6ec820d65b7cf1cf4b5a4c',NULL,'MULTIPLE_CHOICE','Best central idea form?','["a complete sentence stating the text''s main point","one noun","a joke","a list of every fact"]',0,'Full sentence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eab51906c25e1971d5c2b','ppg6ec820d65b7cf1cf4b5a4c',NULL,'MULTIPLE_CHOICE','Informational central idea should be…','["objective","only your opinion","a poem","a setting map"]',0,'Objective.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5ff1516c868f578fde9f','ppg6ec820d65b7cf1cf4b5a4c',NULL,'MULTIPLE_CHOICE','If details disagree with your sentence…','["revise the central idea","ignore the details","delete the article","guess randomly"]',0,'Revise.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L7. Key Ideas Unit Synthesis (ppg6e0d560028a4e6cbc26679)
UPDATE "Lesson" SET "content" = '# Key Ideas Unit Synthesis

*Grade 6 English Language Arts · Unit 2 of 16 · Reading: Key Ideas and Details · Lesson 7*

## Objective

**I can** combine main idea, details, and evidence in one response.

## Warm-up (2 minutes)

In four sentences, explain the trail article''s main idea with two details.

## Teach

### Synthesis

Put the unit skills together: main idea sentence + supporting details + findable evidence. No Mad-Libs fluff.

### Example 1 — mini CER

Claim (main idea). Evidence (detail/quote). Reasoning (how it supports).

### Try this

Draft a 3-sentence synthesis on the scholarship-letter story''s key idea.

**Check:** Sample: Maya delays opening an official letter because hope feels heavy; her shaking hands and careful routine show the stakes.

### Example 2 — checklist

□ Full main-idea sentence □ Two supports □ No trivia □ No unsupported guesses

### Common mistake (this lesson only)

Writing three disconnected facts. Fix: start with one main-idea sentence, then attach details.

## Guided practice (we do)

1. Order for synthesis?  
   **Answer:** Main idea → supports → check.

2. What does reasoning do?  
   **Answer:** Shows how evidence supports the claim.

3. Drop what?  
   **Answer:** Trivia and personal off-topic stories.

## Independent practice

Complete each item. Show your thinking.

1. Long-passage skill (Key Ideas Unit Synthesis), item 1: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose rocks. Rangers say most injuries happen when people rush the last half mile back to the parking lot.
2. Long-passage skill (Key Ideas Unit Synthesis), item 2: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose rocks. Rangers say most injuries happen when people rush the last half mile back to the parking lot.
3. Long-passage skill (Key Ideas Unit Synthesis), item 3: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose rocks. Rangers say most injuries happen when people rush the last half mile back to the parking lot.
4. Long-passage skill (Key Ideas Unit Synthesis), item 4: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose rocks. Rangers say most injuries happen when people rush the last half mile back to the parking lot.
5. Long-passage skill (Key Ideas Unit Synthesis), item 5: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose rocks. Rangers say most injuries happen when people rush the last half mile back to the parking lot.
6. Long-passage skill (Key Ideas Unit Synthesis), item 6: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose rocks. Rangers say most injuries happen when people rush the last half mile back to the parking lot.

### Answer key (try first)

1. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Key Ideas Unit Synthesis.”
2. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Key Ideas Unit Synthesis.”
3. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Key Ideas Unit Synthesis.”
4. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Key Ideas Unit Synthesis.”
5. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Key Ideas Unit Synthesis.”
6. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Key Ideas Unit Synthesis.”

## Exit ticket

1. Write a synthesis paragraph on a mentor text.
2. Label C/E/R in the margin.

## Stretch (optional)

Revise a weak synthesis that is only a topic list.
', "objectives" = '• Combine main idea, details, and evidence in one response.
• Use a clear claim–evidence structure.
• Check that every sentence earns its place.', "description" = 'Combine main idea, details, and evidence in one response.' WHERE "id" = 'ppg6e0d560028a4e6cbc26679' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ee0f3d4b16143534cdd22','ppg6e0d560028a4e6cbc26679',NULL,'MULTIPLE_CHOICE','Strong synthesis begins with…','["a main-idea sentence","a random quote","“I like this”","the glossary"]',0,'Main idea first.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e60a1c4422d5a84992775','ppg6e0d560028a4e6cbc26679',NULL,'MULTIPLE_CHOICE','Evidence must be…','["findable in the text","imagined","from another unit only","a drawing of a cat"]',0,'Findable.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ef5fb59770b7fea5c1fda','ppg6e0d560028a4e6cbc26679',NULL,'MULTIPLE_CHOICE','Best revision move?','["Cut trivia; keep supports that prove the main idea","Add more adjectives only","Delete the claim","Shuffle sentences randomly"]',0,'Cut trivia.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L1. Stamina Strategies for Long Text (ppg6ec1830c6386e89aba2102)
UPDATE "Lesson" SET "content" = '# Stamina Strategies for Long Text

*Grade 6 English Language Arts · Unit 3 of 16 · Reading: Key Ideas — Long Passages · Lesson 1*

## Objective

**I can** chunk, annotate, and track main ideas across paragraphs.

## Warm-up (2 minutes)

You have a two-page article. Do you read every word once with no marks, or chunk and annotate? Why?

## Teach

### Chunk and track

Long text is easier when you **chunk** (stop every paragraph or section), jot a 3–5 word gist, and keep moving. Stamina is a strategy, not speed-reading.

### Example 1 — margin gists

After ¶1 of the sleep article, jot: “biology vs schedules.” After ¶2: “families need early bells.” Those gists become your map.

### Try this

Write a 4-word gist for: “Rangers say most injuries happen when people rush the last half mile.”

**Check:** Sample: rush → more injuries

### Example 2 — annotation marks

Star claims, underline evidence, circle confusing words. Do not highlight entire paragraphs.

### Common mistake (this lesson only)

Reading once with zero marks, then guessing the main idea. Fix: one gist note per chunk before you answer questions.

## Guided practice (we do)

1. Why chunk a long text?  
   **Answer:** To track main ideas without flooding working memory.

2. What belongs in a gist note?  
   **Answer:** A few words naming the chunk’s point.

3. True or false: Highlighting everything counts as annotating.  
   **Answer:** False — selective marks help.

## Independent practice

Complete each item. Show your thinking.

1. Long-passage skill (Stamina Strategies for Long Text), item 1: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
2. Long-passage skill (Stamina Strategies for Long Text), item 2: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
3. Long-passage skill (Stamina Strategies for Long Text), item 3: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
4. Long-passage skill (Stamina Strategies for Long Text), item 4: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
5. Long-passage skill (Stamina Strategies for Long Text), item 5: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
6. Long-passage skill (Stamina Strategies for Long Text), item 6: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.

### Answer key (try first)

1. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Stamina Strategies for Long Text.”
2. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Stamina Strategies for Long Text.”
3. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Stamina Strategies for Long Text.”
4. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Stamina Strategies for Long Text.”
5. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Stamina Strategies for Long Text.”
6. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Stamina Strategies for Long Text.”

## Exit ticket

1. List two stamina strategies.
2. Write one gist for a sample paragraph.

## Stretch (optional)

Time yourself: annotate a 400-word text with gists only; then answer one main-idea question.
', "objectives" = '• Chunk, annotate, and track main ideas across paragraphs.
• Explain with a clear example or annotation.
• Check that your answer matches the skill.', "description" = 'Chunk, annotate, and track main ideas across paragraphs.' WHERE "id" = 'ppg6ec1830c6386e89aba2102' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ea7405d9bbe6d9449e794','ppg6ec1830c6386e89aba2102',NULL,'MULTIPLE_CHOICE','Best stamina move for a long article?','["Chunk and jot short gists","Highlight every sentence","Skip to the last line only","Memorize without notes"]',0,'Chunk + gist.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e56865b119499c2783ee2','ppg6ec1830c6386e89aba2102',NULL,'MULTIPLE_CHOICE','A gist note should be…','["short and about the chunk''s point","a full essay","only emojis","the author''s birthday"]',0,'Short gist.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5de39a212f0b1a517471','ppg6ec1830c6386e89aba2102',NULL,'MULTIPLE_CHOICE','Why annotate?','["to track ideas for later questions","to decorate the page","to avoid reading","to change the author''s claim"]',0,'Track ideas.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L2. Tracking Multiple Characters (ppg6e9eb35bfd2c5b9f5ee8e7)
UPDATE "Lesson" SET "content" = '# Tracking Multiple Characters

*Grade 6 English Language Arts · Unit 3 of 16 · Reading: Key Ideas — Long Passages · Lesson 2*

## Objective

**I can** keep who-did-what straight across a longer narrative.

## Warm-up (2 minutes)

In the gym story, who speaks, and who shoots? Name both.

## Teach

### Who-did-what map

In longer narratives, keep a **who-did-what** list. Update it when a new action or line of dialogue appears.

### Example 1 — two-column tracker

Jordan: practices, shoots, breathes. Coach Reyes: hands ball, gives advice. Mixing them breaks inference questions.

### Try this

Who said “Breathe like you do in study hall”?

**Check:** Coach Reyes

### Example 2 — dialogue tags

When tags are delayed (“…,” she said), still assign the line to the correct speaker before you infer motivation.

### Common mistake (this lesson only)

Blending two characters into one “they.” Fix: write names in the margin at each new action.

## Guided practice (we do)

1. Tracker columns?  
   **Answer:** Character | action/dialogue.

2. Why it matters?  
   **Answer:** Evidence questions ask who did what.

3. Delayed dialogue tag risk?  
   **Answer:** Mis-assigning the speaker.

## Independent practice

Complete each item. Show your thinking.

1. Long-passage skill (Tracking Multiple Characters), item 1: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The second settled through the net.
2. Long-passage skill (Tracking Multiple Characters), item 2: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The second settled through the net.
3. Long-passage skill (Tracking Multiple Characters), item 3: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The second settled through the net.
4. Long-passage skill (Tracking Multiple Characters), item 4: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The second settled through the net.
5. Long-passage skill (Tracking Multiple Characters), item 5: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The second settled through the net.
6. Long-passage skill (Tracking Multiple Characters), item 6: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The second settled through the net.

### Answer key (try first)

1. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Tracking Multiple Characters.”
2. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Tracking Multiple Characters.”
3. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Tracking Multiple Characters.”
4. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Tracking Multiple Characters.”
5. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Tracking Multiple Characters.”
6. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Tracking Multiple Characters.”

## Exit ticket

1. Make a 2-row tracker for a short scene.
2. Correct one mis-assigned line.

## Stretch (optional)

Rewrite a scene with a third character; keep the tracker accurate.
', "objectives" = '• Keep who-did-what straight across a longer narrative.
• Explain with a clear example or annotation.
• Check that your answer matches the skill.', "description" = 'Keep who-did-what straight across a longer narrative.' WHERE "id" = 'ppg6e9eb35bfd2c5b9f5ee8e7' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e730eb95f89795539eeac','ppg6e9eb35bfd2c5b9f5ee8e7',NULL,'MULTIPLE_CHOICE','Best tool for many characters?','["who-did-what tracker","ignoring names","only counting pages","skipping dialogue"]',0,'Tracker.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6efe89b5ef4bf7b51c8b48','ppg6e9eb35bfd2c5b9f5ee8e7',NULL,'MULTIPLE_CHOICE','Coach Reyes in the gym scene…','["gives breathing advice","shoots the free throw","is the referee only","sells tickets"]',0,'Advice.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e03c72a5f69e4899c599c','ppg6e9eb35bfd2c5b9f5ee8e7',NULL,'MULTIPLE_CHOICE','If you mix characters, you often…','["miss evidence questions","improve theme","fix grammar","create a new genre"]',0,'Miss evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L3. Informational Article: East Texas Trail (ppg6e597d5c7935ac8f30eb0b)
UPDATE "Lesson" SET "content" = '# Informational Article: East Texas Trail

*Grade 6 English Language Arts · Unit 3 of 16 · Reading: Key Ideas — Long Passages · Lesson 3*

## Objective

**I can** extract central idea and key details from a longer article.

## Warm-up (2 minutes)

After one read of a trail article, what is the central idea in one sentence?

## Teach

### Central idea from a longer article

Use chunk gists to build one **central idea** sentence, then attach two details from different sections.

### Example 1 — build from gists

Gists: muddy markers; slow down; injuries on last half mile. Central idea: Slowing at marked muddy sections protects hikers and trails.

### Try this

Add a second supporting detail to that central idea.

**Check:** Sample: A short pause helps younger walkers notice roots and rocks.

### Example 2 — drop trivia

“Twelve parking spaces” might be true and still fail the support test.

### Common mistake (this lesson only)

Using only the first paragraph as the whole article. Fix: check a later chunk before you lock the central idea.

## Guided practice (we do)

1. Central idea form?  
   **Answer:** Complete sentence.

2. Why two details from different sections?  
   **Answer:** Shows you tracked the whole piece.

3. Trivia test?  
   **Answer:** Does it strengthen the central idea?

## Independent practice

Complete each item. Show your thinking.

1. State a main takeaway for “Informational Article: East Texas Trail” using this excerpt:

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The secon…

Answer in a complete sentence with evidence.
2. Quote the most important phrase for “Informational Article: East Texas Trail” using this excerpt:

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The secon…

Answer in a complete sentence with evidence.
3. Infer a feeling/motivation for “Informational Article: East Texas Trail” using this excerpt:

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The secon…

Answer in a complete sentence with evidence.
4. Name a craft move for “Informational Article: East Texas Trail” using this excerpt:

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The secon…

Answer in a complete sentence with evidence.
5. Ask a follow-up text-dependent question for “Informational Article: East Texas Trail” using this excerpt:

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The secon…

Answer in a complete sentence with evidence.
6. Write a one-sentence summary of the final beat for “Informational Article: East Texas Trail” using this excerpt:

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The secon…

Answer in a complete sentence with evidence.

### Answer key (try first)

1. Complete sentence + evidence pointer; aligned to state a main takeaway.
2. Complete sentence + evidence pointer; aligned to quote the most important phrase.
3. Complete sentence + evidence pointer; aligned to infer a feeling/motivation.
4. Complete sentence + evidence pointer; aligned to name a craft move.
5. Complete sentence + evidence pointer; aligned to ask a follow-up text-dependent question.
6. Complete sentence + evidence pointer; aligned to write a one-sentence summary of the final beat.

## Exit ticket

1. Central idea sentence.
2. Two supporting details.

## Stretch (optional)

Write a comparison: how would a tourism brochure’s central idea differ?
', "objectives" = '• Extract central idea and key details from a longer article.
• Explain with a clear example or annotation.
• Check that your answer matches the skill.', "description" = 'Extract central idea and key details from a longer article.' WHERE "id" = 'ppg6e597d5c7935ac8f30eb0b' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5296d9d88623ae9d51ec','ppg6e597d5c7935ac8f30eb0b',NULL,'MULTIPLE_CHOICE','Best central idea for the trail article?','["Slowing at muddy markers protects hikers and trails.","Parking lots.","Tyler.","Mud is brown."]',0,'Full idea.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e7aa558e96d44f587c39e','ppg6e597d5c7935ac8f30eb0b',NULL,'MULTIPLE_CHOICE','A detail from a later section matters because…','["it can confirm or refine the central idea","it always is trivia","it replaces evidence","it erases gists"]',0,'Confirm/refine.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e225dc1367dee896175e9','ppg6e597d5c7935ac8f30eb0b',NULL,'MULTIPLE_CHOICE','Drop which detail?','["unrelated parking-space trivia","injury warning on the last half mile","wooden marker signs","slowing protects plants"]',0,'Trivia.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L4. Fiction Passage: The Scholarship Letter (ppg6eb72e8269d2dfeb2c7223)
UPDATE "Lesson" SET "content" = '# Fiction Passage: The Scholarship Letter

*Grade 6 English Language Arts · Unit 3 of 16 · Reading: Key Ideas — Long Passages · Lesson 4*

## Objective

**I can** trace conflict and key turning points in a longer story.

## Warm-up (2 minutes)

What does Maya do before she opens the envelope? Why might that matter?

## Teach

### Conflict and turning points

In longer fiction, track **conflict** (what’s at stake) and **turning points** (moments that change the character’s next move).

### Example 1 — stakes

Thin official envelope + deadline = academic stakes. Her delay and shaking hands are turning-point signals.

### Try this

Name one turning point in the scholarship-letter scene.

**Check:** Sample: She finally opens the letter / reads the deadline.

### Example 2 — theme hint vs plot

“Hope could be heavy” hints theme; the deadline is a plot fact. Keep them labeled separately.

### Common mistake (this lesson only)

Retelling every sensory detail instead of the turning points. Fix: list 3 plot beats max for a summary.

## Guided practice (we do)

1. What is at stake for Maya?  
   **Answer:** An official opportunity with a deadline.

2. Evidence of nerves?  
   **Answer:** Shaking fingers / careful routine.

3. Theme hint phrase?  
   **Answer:** Hope could be heavy.

## Independent practice

Complete each item. Show your thinking.

1. State a main takeaway for “Fiction Passage: The Scholarship Letter” using this excerpt:

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The secon…

Answer in a complete sentence with evidence.
2. Quote the most important phrase for “Fiction Passage: The Scholarship Letter” using this excerpt:

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The secon…

Answer in a complete sentence with evidence.
3. Infer a feeling/motivation for “Fiction Passage: The Scholarship Letter” using this excerpt:

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The secon…

Answer in a complete sentence with evidence.
4. Name a craft move for “Fiction Passage: The Scholarship Letter” using this excerpt:

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The secon…

Answer in a complete sentence with evidence.
5. Ask a follow-up text-dependent question for “Fiction Passage: The Scholarship Letter” using this excerpt:

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The secon…

Answer in a complete sentence with evidence.
6. Write a one-sentence summary of the final beat for “Fiction Passage: The Scholarship Letter” using this excerpt:

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The secon…

Answer in a complete sentence with evidence.

### Answer key (try first)

1. Complete sentence + evidence pointer; aligned to state a main takeaway.
2. Complete sentence + evidence pointer; aligned to quote the most important phrase.
3. Complete sentence + evidence pointer; aligned to infer a feeling/motivation.
4. Complete sentence + evidence pointer; aligned to name a craft move.
5. Complete sentence + evidence pointer; aligned to ask a follow-up text-dependent question.
6. Complete sentence + evidence pointer; aligned to write a one-sentence summary of the final beat.

## Exit ticket

1. State the conflict in one sentence.
2. List two turning points.

## Stretch (optional)

Write an alternate closing sentence that keeps the same conflict.
', "objectives" = '• Trace conflict and key turning points in a longer story.
• Explain with a clear example or annotation.
• Check that your answer matches the skill.', "description" = 'Trace conflict and key turning points in a longer story.' WHERE "id" = 'ppg6eb72e8269d2dfeb2c7223' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e4752bdfaa69b8d5928fb','ppg6eb72e8269d2dfeb2c7223',NULL,'MULTIPLE_CHOICE','Best conflict statement?','["Maya faces an official letter whose news carries high stakes.","There is a mailbox.","Hands can be washed.","Paper is thin."]',0,'Stakes.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e33c49ab13d692a20ef50','ppg6eb72e8269d2dfeb2c7223',NULL,'MULTIPLE_CHOICE','A turning point…','["changes what the character does next","is only setting","must be funny","erases conflict"]',0,'Changes next move.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e698c8d38bb4b1adc8f5e','ppg6eb72e8269d2dfeb2c7223',NULL,'MULTIPLE_CHOICE','“Hope could be heavy” is best labeled as…','["a theme hint","a map key","a stage direction only","a statistic"]',0,'Theme hint.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L5. Comparing Two Short Sections (ppg6e47405ce73854446c994d)
UPDATE "Lesson" SET "content" = '# Comparing Two Short Sections

*Grade 6 English Language Arts · Unit 3 of 16 · Reading: Key Ideas — Long Passages · Lesson 5*

## Objective

**I can** compare how two sections of one text develop the same idea.

## Warm-up (2 minutes)

Section A explains markers; Section B warns about rushing. What idea do both develop?

## Teach

### Same idea, different jobs

Two sections can develop the **same idea** with different jobs (define, warn, exemplify). Compare purpose, not just topic.

### Example 1 — shared idea

Shared idea: careful hiking protects people and trails. Section A: how markers work. Section B: what happens when people rush.

### Try this

Name each section’s job: explain tool vs warn about risk.

**Check:** A explains; B warns (sample).

### Example 2 — evidence from both

A strong compare response cites one detail from each section.

### Common mistake (this lesson only)

Saying “they are both about hiking” and stopping. Fix: name the shared idea *and* each section’s job.

## Guided practice (we do)

1. Shared idea vs topic?  
   **Answer:** Idea is a sentence; topic is a label.

2. Why cite both sections?  
   **Answer:** Proves you compared.

3. Job words?  
   **Answer:** explain, warn, define, exemplify.

## Independent practice

Complete each item. Show your thinking.

1. Compare how the trail text and the start-times text each use a “problem” frame. One similarity, one difference, in complete sentences.
2. Compare how the trail text and the start-times text each use a “problem” frame. One similarity, one difference, in complete sentences.
3. Compare how the trail text and the start-times text each use a “problem” frame. One similarity, one difference, in complete sentences.
4. Compare how the trail text and the start-times text each use a “problem” frame. One similarity, one difference, in complete sentences.
5. Compare how the trail text and the start-times text each use a “problem” frame. One similarity, one difference, in complete sentences.
6. Compare how the trail text and the start-times text each use a “problem” frame. One similarity, one difference, in complete sentences.

### Answer key (try first)

1. Both frame real-world tensions; differ in topic (safety vs schedules) and evidence types.
2. Both frame real-world tensions; differ in topic (safety vs schedules) and evidence types.
3. Both frame real-world tensions; differ in topic (safety vs schedules) and evidence types.
4. Both frame real-world tensions; differ in topic (safety vs schedules) and evidence types.
5. Both frame real-world tensions; differ in topic (safety vs schedules) and evidence types.
6. Both frame real-world tensions; differ in topic (safety vs schedules) and evidence types.

## Exit ticket

1. Shared idea sentence.
2. Job of Section A and Section B.

## Stretch (optional)

Add a hypothetical Section C with a new job (solution).
', "objectives" = '• Compare how two sections of one text develop the same idea.
• Explain with a clear example or annotation.
• Check that your answer matches the skill.', "description" = 'Compare how two sections of one text develop the same idea.' WHERE "id" = 'ppg6e47405ce73854446c994d' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e450cc69984d2378405b1','ppg6e47405ce73854446c994d',NULL,'MULTIPLE_CHOICE','Best compare move?','["Name shared idea + each section''s job + one detail each","Only list topics","Ignore Section B","Copy both sections fully"]',0,'Idea+jobs+details.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e602ccffba20139987d5c','ppg6e47405ce73854446c994d',NULL,'MULTIPLE_CHOICE','If A explains markers and B warns about rushing, shared idea is about…','["careful hiking / safety on trails","pizza","pronouns","fractions"]',0,'Trail safety.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e0135fd67aef43ceacdff','ppg6e47405ce73854446c994d',NULL,'MULTIPLE_CHOICE','Citing only one section usually…','["weakens a compare answer","wins automatically","fixes grammar","creates a poem"]',0,'Weakens.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L6. Long-Passage Key Ideas Check (ppg6e9c602e1d99ac69b558e0)
UPDATE "Lesson" SET "content" = '# Long-Passage Key Ideas Check

*Grade 6 English Language Arts · Unit 3 of 16 · Reading: Key Ideas — Long Passages · Lesson 6*

## Objective

**I can** apply annotation + evidence habits to a culminating passage.

## Warm-up (2 minutes)

Before a culminating passage, list three habits from this unit you will use.

## Teach

### Put the habits together

Combine chunking, trackers, central idea, and findable evidence in one response — the unit check mindset.

### Example 1 — checklist

□ gist per chunk □ main/central idea sentence □ two supports □ quote/paraphrase pointer

### Try this

Which habit stops “I feel” answers?

**Check:** Requiring findable evidence.

### Example 2 — time plan

Spend the first minutes mapping; answer after the map exists.

### Common mistake (this lesson only)

Diving into multiple-choice without a map. Fix: 60-second gist pass first.

## Guided practice (we do)

1. Name three unit habits.  
   **Answer:** Chunk/gist, main idea sentence, evidence pointer (samples).

2. Why map first?  
   **Answer:** Answers become faster and more accurate.

3. Drop trivia — why?  
   **Answer:** It does not support the central idea.

## Independent practice

Complete each item. Show your thinking.

1. Long-passage skill (Long-Passage Key Ideas Check), item 1: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
2. Long-passage skill (Long-Passage Key Ideas Check), item 2: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
3. Long-passage skill (Long-Passage Key Ideas Check), item 3: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
4. Long-passage skill (Long-Passage Key Ideas Check), item 4: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
5. Long-passage skill (Long-Passage Key Ideas Check), item 5: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
6. Long-passage skill (Long-Passage Key Ideas Check), item 6: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.

### Answer key (try first)

1. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Long-Passage Key Ideas Check.”
2. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Long-Passage Key Ideas Check.”
3. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Long-Passage Key Ideas Check.”
4. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Long-Passage Key Ideas Check.”
5. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Long-Passage Key Ideas Check.”
6. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Long-Passage Key Ideas Check.”

## Exit ticket

1. Write your personal 4-box checklist.
2. Apply it to a short paragraph.

## Stretch (optional)

Teach the checklist to a classmate in under one minute.
', "objectives" = '• Apply annotation + evidence habits to a culminating passage.
• Explain with a clear example or annotation.
• Check that your answer matches the skill.', "description" = 'Apply annotation + evidence habits to a culminating passage.' WHERE "id" = 'ppg6e9c602e1d99ac69b558e0' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e98153b34db1d328c2350','ppg6e9c602e1d99ac69b558e0',NULL,'MULTIPLE_CHOICE','First move on a long check passage?','["Quick gist/map pass","Guess all answers","Skip the text","Only read questions"]',0,'Map first.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e1d5e7d3b3acb5f984321','ppg6e9c602e1d99ac69b558e0',NULL,'MULTIPLE_CHOICE','A complete key-ideas response needs…','["central idea + supports + findable evidence","only emojis","only a topic word","a new story with no text"]',0,'Idea+supports+evidence.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5b2f9b51182cb8d49016','ppg6e9c602e1d99ac69b558e0',NULL,'MULTIPLE_CHOICE','“I feel the author is angry” fails when the task asks for…','["text evidence about ideas","your favorite color","a drawing only","a rhyme"]',0,'Needs evidence.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L1. Common and Proper Nouns (ppg6e3623a7b3dc1a82a708f9)
UPDATE "Lesson" SET "content" = '# Common and Proper Nouns

*Grade 6 English Language Arts · Unit 4 of 16 · Grammar: Nouns · Lesson 1*

## Objective

**I can** capitalize proper nouns; keep common nouns clear and specific.

## Warm-up (2 minutes)

Which needs a capital: city or Tyler?

## Teach

### Common vs proper

A **common noun** names a general person, place, thing, or idea (*city, coach*). A **proper noun** names a specific one and takes a capital (*Tyler, Coach Reyes*).

### Example 1 — capitalize specifics

“We drove to the city of Tyler.” *Tyler* is proper; *city* is common.

### Try this

Capitalize correctly: “my school is prosper prep.”

**Check:** My school is Prosper Prep.

### Example 2 — titles as proper

Course names and specific team names are proper when they name one thing: *Grade 6 ELA*, *East Texas Trail Crew*.

### Common mistake (this lesson only)

Capitalizing every important-sounding word. Fix: ask “Is this a specific name?”

## Guided practice (we do)

1. common or proper: river  
   **Answer:** common

2. common or proper: Nile River  
   **Answer:** proper

3. Why capitals on proper nouns?  
   **Answer:** They name one specific thing.

## Independent practice

Complete each item. Show your thinking.

1. Capitalize correctly: “we visited tyler, texas, on a saturday in march.” List each proper noun you capitalize.
2. Which should stay lowercase in running text: *math* or *English*? Why?
3. Fix: “aunt kayla works at prosper preparatory.”
4. Sort: lake, Lake Palestine, school, Prosper Prep — common vs proper.
5. Write two sentences: one with a common noun *coach*, one with a proper name for a coach.
6. Error hunt: “We study Biology and history.” Fix only what Grade 6 school-subject rules need (unless course title).

### Answer key (try first)

1. Tyler, Texas, Saturday, March.
2. *math* common; *English* language name = proper.
3. Aunt Kayla; Prosper Preparatory (as institution name).
4. lake/school common; Lake Palestine / Prosper Prep proper.
5. Samples will vary; proper name capitalized.
6. Usually *biology* and *history* lowercase unless official course titles.

## Exit ticket

1. Fix capitals in a 2-sentence paragraph.
2. List 3 proper nouns from your week.

## Stretch (optional)

Write a sentence with 2 common and 2 proper nouns labeled.
', "objectives" = '• Capitalize proper nouns; keep common nouns clear and specific.
• Explain with a clear example or annotation.
• Check that your answer matches the skill.', "description" = 'Capitalize proper nouns; keep common nouns clear and specific.' WHERE "id" = 'ppg6e3623a7b3dc1a82a708f9' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e25f6cacb0c714d168a4f','ppg6e3623a7b3dc1a82a708f9',NULL,'MULTIPLE_CHOICE','Which is proper?','["Tyler","city","school","coach"]',0,'Specific place.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e7151e216f3012b694dff','ppg6e3623a7b3dc1a82a708f9',NULL,'MULTIPLE_CHOICE','Best rule?','["Capitalize specific names; keep general nouns lowercase unless starting a sentence","Capitalize every noun","Never capitalize","Only capitalize verbs"]',0,'Specific names.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6edb85701004ff3bd2c468','ppg6e3623a7b3dc1a82a708f9',NULL,'MULTIPLE_CHOICE','“coach” vs “Coach Reyes” — difference?','["general role vs specific name","same always","both improper","both verbs"]',0,'General vs specific.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L2. Concrete and Abstract Nouns (ppg6e6cf84e217ca8dbf2dd4c)
UPDATE "Lesson" SET "content" = '# Concrete and Abstract Nouns

*Grade 6 English Language Arts · Unit 4 of 16 · Grammar: Nouns · Lesson 2*

## Objective

**I can** recognize ideas and qualities as nouns you can still name.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Concrete and Abstract Nouns.”

## Teach

### Big idea

**Concrete and Abstract Nouns.** Recognize ideas and qualities as nouns you can still name. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Concrete and Abstract Nouns.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Concrete and Abstract Nouns.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Concrete and Abstract Nouns,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Concrete and Abstract Nouns.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Concrete and Abstract Nouns” control?  
   **Answer:** Recognize ideas and qualities as nouns you can still name.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Label concrete or abstract: courage, backpack, deadline, sneaker, fairness, gym. Then write a sentence using one abstract noun precisely.
2. Label concrete or abstract: courage, backpack, deadline, sneaker, fairness, gym. Then write a sentence using one abstract noun precisely.
3. Label concrete or abstract: courage, backpack, deadline, sneaker, fairness, gym. Then write a sentence using one abstract noun precisely.
4. Label concrete or abstract: courage, backpack, deadline, sneaker, fairness, gym. Then write a sentence using one abstract noun precisely.
5. Label concrete or abstract: courage, backpack, deadline, sneaker, fairness, gym. Then write a sentence using one abstract noun precisely.
6. Label concrete or abstract: courage, backpack, deadline, sneaker, fairness, gym. Then write a sentence using one abstract noun precisely.

### Answer key (try first)

1. Abstract: courage, deadline, fairness. Concrete: backpack, sneaker, gym. Sentence will vary.
2. Abstract: courage, deadline, fairness. Concrete: backpack, sneaker, gym. Sentence will vary.
3. Abstract: courage, deadline, fairness. Concrete: backpack, sneaker, gym. Sentence will vary.
4. Abstract: courage, deadline, fairness. Concrete: backpack, sneaker, gym. Sentence will vary.
5. Abstract: courage, deadline, fairness. Concrete: backpack, sneaker, gym. Sentence will vary.
6. Abstract: courage, deadline, fairness. Concrete: backpack, sneaker, gym. Sentence will vary.

## Exit ticket

1. In one sentence, what does “Concrete and Abstract Nouns” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Concrete and Abstract Nouns” and solve it.
', "objectives" = '• Recognize ideas and qualities as nouns you can still name.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Recognize ideas and qualities as nouns you can still name.' WHERE "id" = 'ppg6e6cf84e217ca8dbf2dd4c' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eb6bd7aa7d9e6e5e0a270','ppg6e6cf84e217ca8dbf2dd4c',NULL,'MULTIPLE_CHOICE','Best habit for “Concrete and Abstract Nouns”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eeb49a2a017323aa5d84d','ppg6e6cf84e217ca8dbf2dd4c',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ec338039281daebae856e','ppg6e6cf84e217ca8dbf2dd4c',NULL,'MULTIPLE_CHOICE','You find an error about “Concrete and Abstract Nouns.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L3. Singular, Plural, and Irregular Plurals (ppg6ee675d1d8b761d380dd30)
UPDATE "Lesson" SET "content" = '# Singular, Plural, and Irregular Plurals

*Grade 6 English Language Arts · Unit 4 of 16 · Grammar: Nouns · Lesson 3*

## Objective

**I can** form regular and irregular plurals accurately.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Singular, Plural, and Irregular Plurals.”

## Teach

### Big idea

**Singular, Plural, and Irregular Plurals.** Form regular and irregular plurals accurately. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Singular, Plural, and Irregular Plurals.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Singular, Plural, and Irregular Plurals.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Singular, Plural, and Irregular Plurals,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Singular, Plural, and Irregular Plurals.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Singular, Plural, and Irregular Plurals” control?  
   **Answer:** Form regular and irregular plurals accurately.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Form plurals: box, child, tomato, deer, thesis (Grade-friendly: use *theses* or rewrite). Then use two in a sentence about school.
2. Form plurals: box, child, tomato, deer, thesis (Grade-friendly: use *theses* or rewrite). Then use two in a sentence about school.
3. Form plurals: box, child, tomato, deer, thesis (Grade-friendly: use *theses* or rewrite). Then use two in a sentence about school.
4. Form plurals: box, child, tomato, deer, thesis (Grade-friendly: use *theses* or rewrite). Then use two in a sentence about school.
5. Form plurals: box, child, tomato, deer, thesis (Grade-friendly: use *theses* or rewrite). Then use two in a sentence about school.
6. Form plurals: box, child, tomato, deer, thesis (Grade-friendly: use *theses* or rewrite). Then use two in a sentence about school.

### Answer key (try first)

1. boxes, children, tomatoes, deer, theses. Sentences will vary.
2. boxes, children, tomatoes, deer, theses. Sentences will vary.
3. boxes, children, tomatoes, deer, theses. Sentences will vary.
4. boxes, children, tomatoes, deer, theses. Sentences will vary.
5. boxes, children, tomatoes, deer, theses. Sentences will vary.
6. boxes, children, tomatoes, deer, theses. Sentences will vary.

## Exit ticket

1. In one sentence, what does “Singular, Plural, and Irregular Plurals” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Singular, Plural, and Irregular Plurals” and solve it.
', "objectives" = '• Form regular and irregular plurals accurately.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Form regular and irregular plurals accurately.' WHERE "id" = 'ppg6ee675d1d8b761d380dd30' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e559a21f646bed83c487a','ppg6ee675d1d8b761d380dd30',NULL,'MULTIPLE_CHOICE','Best habit for “Singular, Plural, and Irregular Plurals”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ed0953cb086034ff56a6a','ppg6ee675d1d8b761d380dd30',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ecb28cae907d8b9067fe1','ppg6ee675d1d8b761d380dd30',NULL,'MULTIPLE_CHOICE','You find an error about “Singular, Plural, and Irregular Plurals.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L4. Possessive Nouns (ppg6e46f1cebfe60df55bdd18)
UPDATE "Lesson" SET "content" = '# Possessive Nouns

*Grade 6 English Language Arts · Unit 4 of 16 · Grammar: Nouns · Lesson 4*

## Objective

**I can** use apostrophes correctly for singular and plural possession.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Possessive Nouns.”

## Teach

### Big idea

**Possessive Nouns.** Use apostrophes correctly for singular and plural possession. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Possessive Nouns.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Possessive Nouns.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Possessive Nouns,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Possessive Nouns.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Possessive Nouns” control?  
   **Answer:** Use apostrophes correctly for singular and plural possession.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Rewrite with correct possessives: “the students essays” (plural owners) and “James book” (singular owner ending in s — choose a clear style and stay consistent).
2. Rewrite with correct possessives: “the students essays” (plural owners) and “James book” (singular owner ending in s — choose a clear style and stay consistent).
3. Rewrite with correct possessives: “the students essays” (plural owners) and “James book” (singular owner ending in s — choose a clear style and stay consistent).
4. Rewrite with correct possessives: “the students essays” (plural owners) and “James book” (singular owner ending in s — choose a clear style and stay consistent).
5. Rewrite with correct possessives: “the students essays” (plural owners) and “James book” (singular owner ending in s — choose a clear style and stay consistent).
6. Rewrite with correct possessives: “the students essays” (plural owners) and “James book” (singular owner ending in s — choose a clear style and stay consistent).

### Answer key (try first)

1. students’ essays; James’s book (or James’ if taught that style — stay consistent).
2. students’ essays; James’s book (or James’ if taught that style — stay consistent).
3. students’ essays; James’s book (or James’ if taught that style — stay consistent).
4. students’ essays; James’s book (or James’ if taught that style — stay consistent).
5. students’ essays; James’s book (or James’ if taught that style — stay consistent).
6. students’ essays; James’s book (or James’ if taught that style — stay consistent).

## Exit ticket

1. In one sentence, what does “Possessive Nouns” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Possessive Nouns” and solve it.
', "objectives" = '• Use apostrophes correctly for singular and plural possession.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Use apostrophes correctly for singular and plural possession.' WHERE "id" = 'ppg6e46f1cebfe60df55bdd18' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e2a62d3e8f00746dec8c4','ppg6e46f1cebfe60df55bdd18',NULL,'MULTIPLE_CHOICE','Best habit for “Possessive Nouns”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5b5fb8c82802d4f2bd85','ppg6e46f1cebfe60df55bdd18',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e475f2d465acecb280cc8','ppg6e46f1cebfe60df55bdd18',NULL,'MULTIPLE_CHOICE','You find an error about “Possessive Nouns.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L5. Collective Nouns and Agreement (ppg6eda8ee172948083172457)
UPDATE "Lesson" SET "content" = '# Collective Nouns and Agreement

*Grade 6 English Language Arts · Unit 4 of 16 · Grammar: Nouns · Lesson 5*

## Objective

**I can** match verbs to collective nouns with student-friendly rules.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Collective Nouns and Agreement.”

## Teach

### Big idea

**Collective Nouns and Agreement.** Match verbs to collective nouns with student-friendly rules. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Collective Nouns and Agreement.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Collective Nouns and Agreement.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Collective Nouns and Agreement,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Collective Nouns and Agreement.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Collective Nouns and Agreement” control?  
   **Answer:** Match verbs to collective nouns with student-friendly rules.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Choose the verb: “The class (is/are) ready” when acting as one unit. Then revise “The team are wearing different jerseys” for meaning.
2. Choose the verb: “The class (is/are) ready” when acting as one unit. Then revise “The team are wearing different jerseys” for meaning.
3. Choose the verb: “The class (is/are) ready” when acting as one unit. Then revise “The team are wearing different jerseys” for meaning.
4. Choose the verb: “The class (is/are) ready” when acting as one unit. Then revise “The team are wearing different jerseys” for meaning.
5. Choose the verb: “The class (is/are) ready” when acting as one unit. Then revise “The team are wearing different jerseys” for meaning.
6. Choose the verb: “The class (is/are) ready” when acting as one unit. Then revise “The team are wearing different jerseys” for meaning.

### Answer key (try first)

1. Unit→ is. Individuals→ are wearing different jerseys is acceptable for individuals acting separately.
2. Unit→ is. Individuals→ are wearing different jerseys is acceptable for individuals acting separately.
3. Unit→ is. Individuals→ are wearing different jerseys is acceptable for individuals acting separately.
4. Unit→ is. Individuals→ are wearing different jerseys is acceptable for individuals acting separately.
5. Unit→ is. Individuals→ are wearing different jerseys is acceptable for individuals acting separately.
6. Unit→ is. Individuals→ are wearing different jerseys is acceptable for individuals acting separately.

## Exit ticket

1. In one sentence, what does “Collective Nouns and Agreement” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Collective Nouns and Agreement” and solve it.
', "objectives" = '• Match verbs to collective nouns with student-friendly rules.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Match verbs to collective nouns with student-friendly rules.' WHERE "id" = 'ppg6eda8ee172948083172457' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e03ca846bf0ef037be8e4','ppg6eda8ee172948083172457',NULL,'MULTIPLE_CHOICE','Best habit for “Collective Nouns and Agreement”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e7c5aa6a901b1370dcd9f','ppg6eda8ee172948083172457',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ecbd9a3266f204512fe0e','ppg6eda8ee172948083172457',NULL,'MULTIPLE_CHOICE','You find an error about “Collective Nouns and Agreement.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L6. Nouns in Strong Sentences (ppg6ef6e52b2af9957611f330)
UPDATE "Lesson" SET "content" = '# Nouns in Strong Sentences

*Grade 6 English Language Arts · Unit 4 of 16 · Grammar: Nouns · Lesson 6*

## Objective

**I can** replace vague nouns with precise ones for clearer writing.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Nouns in Strong Sentences.”

## Teach

### Big idea

**Nouns in Strong Sentences.** Replace vague nouns with precise ones for clearer writing. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Nouns in Strong Sentences.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Nouns in Strong Sentences.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Nouns in Strong Sentences,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Nouns in Strong Sentences.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Nouns in Strong Sentences” control?  
   **Answer:** Replace vague nouns with precise ones for clearer writing.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Replace vague nouns: “The thing about the stuff was good.” Write two precise revisions for a scholarship paragraph.
2. Replace vague nouns: “The thing about the stuff was good.” Write two precise revisions for a scholarship paragraph.
3. Replace vague nouns: “The thing about the stuff was good.” Write two precise revisions for a scholarship paragraph.
4. Replace vague nouns: “The thing about the stuff was good.” Write two precise revisions for a scholarship paragraph.
5. Replace vague nouns: “The thing about the stuff was good.” Write two precise revisions for a scholarship paragraph.
6. Replace vague nouns: “The thing about the stuff was good.” Write two precise revisions for a scholarship paragraph.

### Answer key (try first)

1. Any precise nouns (essay, evidence, mentor feedback, etc.).
2. Any precise nouns (essay, evidence, mentor feedback, etc.).
3. Any precise nouns (essay, evidence, mentor feedback, etc.).
4. Any precise nouns (essay, evidence, mentor feedback, etc.).
5. Any precise nouns (essay, evidence, mentor feedback, etc.).
6. Any precise nouns (essay, evidence, mentor feedback, etc.).

## Exit ticket

1. In one sentence, what does “Nouns in Strong Sentences” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Nouns in Strong Sentences” and solve it.
', "objectives" = '• Replace vague nouns with precise ones for clearer writing.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Replace vague nouns with precise ones for clearer writing.' WHERE "id" = 'ppg6ef6e52b2af9957611f330' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ef01061482b7e280f0754','ppg6ef6e52b2af9957611f330',NULL,'MULTIPLE_CHOICE','Best habit for “Nouns in Strong Sentences”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e6e60c467501b7474c13c','ppg6ef6e52b2af9957611f330',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ec4a04423a2b325afb9be','ppg6ef6e52b2af9957611f330',NULL,'MULTIPLE_CHOICE','You find an error about “Nouns in Strong Sentences.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L1. Subject and Object Pronouns (ppg6e726abc646430035975f7)
UPDATE "Lesson" SET "content" = '# Subject and Object Pronouns

*Grade 6 English Language Arts · Unit 5 of 16 · Grammar: Pronouns · Lesson 1*

## Objective

**I can** choose I/me, we/us, he/him correctly in sentences.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Subject and Object Pronouns.”

## Teach

### Big idea

**Subject and Object Pronouns.** Choose I/me, we/us, he/him correctly in sentences. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Subject and Object Pronouns.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Subject and Object Pronouns.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Subject and Object Pronouns,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Subject and Object Pronouns.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Subject and Object Pronouns” control?  
   **Answer:** Choose I/me, we/us, he/him correctly in sentences.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Fix pronouns: “Him and I went” / “Between you and I” / “Mom called Jordan and I.” Explain each fix.
2. Fix pronouns: “Him and I went” / “Between you and I” / “Mom called Jordan and I.” Explain each fix.
3. Fix pronouns: “Him and I went” / “Between you and I” / “Mom called Jordan and I.” Explain each fix.
4. Fix pronouns: “Him and I went” / “Between you and I” / “Mom called Jordan and I.” Explain each fix.
5. Fix pronouns: “Him and I went” / “Between you and I” / “Mom called Jordan and I.” Explain each fix.
6. Fix pronouns: “Him and I went” / “Between you and I” / “Mom called Jordan and I.” Explain each fix.

### Answer key (try first)

1. He and I; between you and me; Jordan and me. Test by removing the other noun.
2. He and I; between you and me; Jordan and me. Test by removing the other noun.
3. He and I; between you and me; Jordan and me. Test by removing the other noun.
4. He and I; between you and me; Jordan and me. Test by removing the other noun.
5. He and I; between you and me; Jordan and me. Test by removing the other noun.
6. He and I; between you and me; Jordan and me. Test by removing the other noun.

## Exit ticket

1. In one sentence, what does “Subject and Object Pronouns” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Subject and Object Pronouns” and solve it.
', "objectives" = '• Choose I/me, we/us, he/him correctly in sentences.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Choose I/me, we/us, he/him correctly in sentences.' WHERE "id" = 'ppg6e726abc646430035975f7' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e1fae3a9ba89a11aeb792','ppg6e726abc646430035975f7',NULL,'MULTIPLE_CHOICE','Best habit for “Subject and Object Pronouns”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e6921c61c8fd7932b2636','ppg6e726abc646430035975f7',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e7a5cf08e3d6265fdacd6','ppg6e726abc646430035975f7',NULL,'MULTIPLE_CHOICE','You find an error about “Subject and Object Pronouns.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L2. Possessive Pronouns vs Contractions (ppg6eea5d35928da5f6d1fb0c)
UPDATE "Lesson" SET "content" = '# Possessive Pronouns vs Contractions

*Grade 6 English Language Arts · Unit 5 of 16 · Grammar: Pronouns · Lesson 2*

## Objective

**I can** keep its/it''s, your/you''re, their/they''re straight.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Possessive Pronouns vs Contractions.”

## Teach

### Big idea

**Possessive Pronouns vs Contractions.** Keep its/it''s, your/you''re, their/they''re straight. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Possessive Pronouns vs Contractions.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Possessive Pronouns vs Contractions.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Possessive Pronouns vs Contractions,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Possessive Pronouns vs Contractions.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Possessive Pronouns vs Contractions” control?  
   **Answer:** Keep its/it''s, your/you''re, their/they''re straight.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Rewrite with correct possessives: “the students essays” (plural owners) and “James book” (singular owner ending in s — choose a clear style and stay consistent).
2. Rewrite with correct possessives: “the students essays” (plural owners) and “James book” (singular owner ending in s — choose a clear style and stay consistent).
3. Rewrite with correct possessives: “the students essays” (plural owners) and “James book” (singular owner ending in s — choose a clear style and stay consistent).
4. Rewrite with correct possessives: “the students essays” (plural owners) and “James book” (singular owner ending in s — choose a clear style and stay consistent).
5. Rewrite with correct possessives: “the students essays” (plural owners) and “James book” (singular owner ending in s — choose a clear style and stay consistent).
6. Rewrite with correct possessives: “the students essays” (plural owners) and “James book” (singular owner ending in s — choose a clear style and stay consistent).

### Answer key (try first)

1. students’ essays; James’s book (or James’ if taught that style — stay consistent).
2. students’ essays; James’s book (or James’ if taught that style — stay consistent).
3. students’ essays; James’s book (or James’ if taught that style — stay consistent).
4. students’ essays; James’s book (or James’ if taught that style — stay consistent).
5. students’ essays; James’s book (or James’ if taught that style — stay consistent).
6. students’ essays; James’s book (or James’ if taught that style — stay consistent).

## Exit ticket

1. In one sentence, what does “Possessive Pronouns vs Contractions” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Possessive Pronouns vs Contractions” and solve it.
', "objectives" = '• Keep its/it''s, your/you''re, their/they''re straight.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Keep its/it''s, your/you''re, their/they''re straight.' WHERE "id" = 'ppg6eea5d35928da5f6d1fb0c' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e52b04445d278be283d7a','ppg6eea5d35928da5f6d1fb0c',NULL,'MULTIPLE_CHOICE','Best habit for “Possessive Pronouns vs Contractions”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eb1a733d4a855a221ba71','ppg6eea5d35928da5f6d1fb0c',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e08e1ce0e99a63182bc0d','ppg6eea5d35928da5f6d1fb0c',NULL,'MULTIPLE_CHOICE','You find an error about “Possessive Pronouns vs Contractions.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L3. Pronoun-Antecedent Agreement (ppg6e6ef188e49bc6ebd4500a)
UPDATE "Lesson" SET "content" = '# Pronoun-Antecedent Agreement

*Grade 6 English Language Arts · Unit 5 of 16 · Grammar: Pronouns · Lesson 3*

## Objective

**I can** match pronouns to antecedents in number and clarity.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Pronoun-Antecedent Agreement.”

## Teach

### Big idea

**Pronoun-Antecedent Agreement.** Match pronouns to antecedents in number and clarity. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Pronoun-Antecedent Agreement.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Pronoun-Antecedent Agreement.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Pronoun-Antecedent Agreement,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Pronoun-Antecedent Agreement.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Pronoun-Antecedent Agreement” control?  
   **Answer:** Match pronouns to antecedents in number and clarity.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Fix agreement: “Each scholar submitted their outline late.” Offer two acceptable Grade 6 revisions (singular generic vs rephrase plural).
2. Fix agreement: “Each scholar submitted their outline late.” Offer two acceptable Grade 6 revisions (singular generic vs rephrase plural).
3. Fix agreement: “Each scholar submitted their outline late.” Offer two acceptable Grade 6 revisions (singular generic vs rephrase plural).
4. Fix agreement: “Each scholar submitted their outline late.” Offer two acceptable Grade 6 revisions (singular generic vs rephrase plural).
5. Fix agreement: “Each scholar submitted their outline late.” Offer two acceptable Grade 6 revisions (singular generic vs rephrase plural).
6. Fix agreement: “Each scholar submitted their outline late.” Offer two acceptable Grade 6 revisions (singular generic vs rephrase plural).

### Answer key (try first)

1. Each scholar submitted his or her outline / All scholars submitted their outlines / use the student’s name.
2. Each scholar submitted his or her outline / All scholars submitted their outlines / use the student’s name.
3. Each scholar submitted his or her outline / All scholars submitted their outlines / use the student’s name.
4. Each scholar submitted his or her outline / All scholars submitted their outlines / use the student’s name.
5. Each scholar submitted his or her outline / All scholars submitted their outlines / use the student’s name.
6. Each scholar submitted his or her outline / All scholars submitted their outlines / use the student’s name.

## Exit ticket

1. In one sentence, what does “Pronoun-Antecedent Agreement” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Pronoun-Antecedent Agreement” and solve it.
', "objectives" = '• Match pronouns to antecedents in number and clarity.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Match pronouns to antecedents in number and clarity.' WHERE "id" = 'ppg6e6ef188e49bc6ebd4500a' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e9829bf88dd8c1cd98ae0','ppg6e6ef188e49bc6ebd4500a',NULL,'MULTIPLE_CHOICE','Best habit for “Pronoun-Antecedent Agreement”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e20eb6946889cdf90c742','ppg6e6ef188e49bc6ebd4500a',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e879e5295677fe6fe034a','ppg6e6ef188e49bc6ebd4500a',NULL,'MULTIPLE_CHOICE','You find an error about “Pronoun-Antecedent Agreement.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L4. Vague Pronouns and Fixes (ppg6ee2476d353dafb1a27bfa)
UPDATE "Lesson" SET "content" = '# Vague Pronouns and Fixes

*Grade 6 English Language Arts · Unit 5 of 16 · Grammar: Pronouns · Lesson 4*

## Objective

**I can** replace unclear this/that/it with precise nouns or clauses.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Vague Pronouns and Fixes.”

## Teach

### Big idea

**Vague Pronouns and Fixes.** Replace unclear this/that/it with precise nouns or clauses. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Vague Pronouns and Fixes.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Vague Pronouns and Fixes.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Vague Pronouns and Fixes,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Vague Pronouns and Fixes.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Vague Pronouns and Fixes” control?  
   **Answer:** Replace unclear this/that/it with precise nouns or clauses.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Revise for clarity: “Jordan told Malik that he won.” and “This proves it.” Replace vague pronouns with precise nouns/clauses.
2. Revise for clarity: “Jordan told Malik that he won.” and “This proves it.” Replace vague pronouns with precise nouns/clauses.
3. Revise for clarity: “Jordan told Malik that he won.” and “This proves it.” Replace vague pronouns with precise nouns/clauses.
4. Revise for clarity: “Jordan told Malik that he won.” and “This proves it.” Replace vague pronouns with precise nouns/clauses.
5. Revise for clarity: “Jordan told Malik that he won.” and “This proves it.” Replace vague pronouns with precise nouns/clauses.
6. Revise for clarity: “Jordan told Malik that he won.” and “This proves it.” Replace vague pronouns with precise nouns/clauses.

### Answer key (try first)

1. Specify who won; replace This/it with named claim/evidence.
2. Specify who won; replace This/it with named claim/evidence.
3. Specify who won; replace This/it with named claim/evidence.
4. Specify who won; replace This/it with named claim/evidence.
5. Specify who won; replace This/it with named claim/evidence.
6. Specify who won; replace This/it with named claim/evidence.

## Exit ticket

1. In one sentence, what does “Vague Pronouns and Fixes” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Vague Pronouns and Fixes” and solve it.
', "objectives" = '• Replace unclear this/that/it with precise nouns or clauses.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Replace unclear this/that/it with precise nouns or clauses.' WHERE "id" = 'ppg6ee2476d353dafb1a27bfa' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e15e58609d23938ad78d2','ppg6ee2476d353dafb1a27bfa',NULL,'MULTIPLE_CHOICE','Best habit for “Vague Pronouns and Fixes”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e6d6389355b21f2d1c451','ppg6ee2476d353dafb1a27bfa',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e823f0a44cee101035966','ppg6ee2476d353dafb1a27bfa',NULL,'MULTIPLE_CHOICE','You find an error about “Vague Pronouns and Fixes.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L5. Intensive and Reflexive Pronouns (ppg6ec3297deee4ffad1391e5)
UPDATE "Lesson" SET "content" = '# Intensive and Reflexive Pronouns

*Grade 6 English Language Arts · Unit 5 of 16 · Grammar: Pronouns · Lesson 5*

## Objective

**I can** use myself/yourself correctly — not as fake formal subjects.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Intensive and Reflexive Pronouns.”

## Teach

### Big idea

**Intensive and Reflexive Pronouns.** Use myself/yourself correctly — not as fake formal subjects. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Intensive and Reflexive Pronouns.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Intensive and Reflexive Pronouns.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Intensive and Reflexive Pronouns,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Intensive and Reflexive Pronouns.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Intensive and Reflexive Pronouns” control?  
   **Answer:** Use myself/yourself correctly — not as fake formal subjects.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Correct or keep: “Myself will present.” / “I wrote it myself.” / “She bought tickets for Maya and myself.” Explain.
2. Correct or keep: “Myself will present.” / “I wrote it myself.” / “She bought tickets for Maya and myself.” Explain.
3. Correct or keep: “Myself will present.” / “I wrote it myself.” / “She bought tickets for Maya and myself.” Explain.
4. Correct or keep: “Myself will present.” / “I wrote it myself.” / “She bought tickets for Maya and myself.” Explain.
5. Correct or keep: “Myself will present.” / “I wrote it myself.” / “She bought tickets for Maya and myself.” Explain.
6. Correct or keep: “Myself will present.” / “I wrote it myself.” / “She bought tickets for Maya and myself.” Explain.

### Answer key (try first)

1. I will present; myself OK intensive; Maya and me (not myself as object without I subject).
2. I will present; myself OK intensive; Maya and me (not myself as object without I subject).
3. I will present; myself OK intensive; Maya and me (not myself as object without I subject).
4. I will present; myself OK intensive; Maya and me (not myself as object without I subject).
5. I will present; myself OK intensive; Maya and me (not myself as object without I subject).
6. I will present; myself OK intensive; Maya and me (not myself as object without I subject).

## Exit ticket

1. In one sentence, what does “Intensive and Reflexive Pronouns” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Intensive and Reflexive Pronouns” and solve it.
', "objectives" = '• Use myself/yourself correctly — not as fake formal subjects.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Use myself/yourself correctly — not as fake formal subjects.' WHERE "id" = 'ppg6ec3297deee4ffad1391e5' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ecb77816bf7d6f65a2537','ppg6ec3297deee4ffad1391e5',NULL,'MULTIPLE_CHOICE','Best habit for “Intensive and Reflexive Pronouns”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ed13ff750a5472f1c412b','ppg6ec3297deee4ffad1391e5',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ef223043484a024456985','ppg6ec3297deee4ffad1391e5',NULL,'MULTIPLE_CHOICE','You find an error about “Intensive and Reflexive Pronouns.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L6. Pronoun Clarity in Paragraphs (ppg6e387818d589f77b5e925f)
UPDATE "Lesson" SET "content" = '# Pronoun Clarity in Paragraphs

*Grade 6 English Language Arts · Unit 5 of 16 · Grammar: Pronouns · Lesson 6*

## Objective

**I can** revise a paragraph so every pronoun points clearly.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Pronoun Clarity in Paragraphs.”

## Teach

### Big idea

**Pronoun Clarity in Paragraphs.** Revise a paragraph so every pronoun points clearly. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Pronoun Clarity in Paragraphs.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Pronoun Clarity in Paragraphs.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Pronoun Clarity in Paragraphs,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Pronoun Clarity in Paragraphs.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Pronoun Clarity in Paragraphs” control?  
   **Answer:** Revise a paragraph so every pronoun points clearly.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Apply “pronoun clarity in paragraphs” to revise: “everyone brought their laptop to the east texas field trip.” Show before → after and name the grammar job you fixed (item 1).
2. Apply “pronoun clarity in paragraphs” to revise: “the class are debating start times with surprising calm.” Show before → after and name the grammar job you fixed (item 2).
3. Apply “pronoun clarity in paragraphs” to revise: “the team of scholars present their cer paragraphs after advisory.” Show before → after and name the grammar job you fixed (item 3).
4. Apply “pronoun clarity in paragraphs” to revise: “the class are debating start times with surprising calm.” Show before → after and name the grammar job you fixed (item 4).
5. Apply “pronoun clarity in paragraphs” to revise: “the team of scholars present their cer paragraphs after advisory.” Show before → after and name the grammar job you fixed (item 5).
6. Apply “pronoun clarity in paragraphs” to revise: “the news are on the library screen before homeroom.” Show before → after and name the grammar job you fixed (item 6).

### Answer key (try first)

1. Before/after with correct application of the skill; job named precisely.
2. Before/after with correct application of the skill; job named precisely.
3. Before/after with correct application of the skill; job named precisely.
4. Before/after with correct application of the skill; job named precisely.
5. Before/after with correct application of the skill; job named precisely.
6. Before/after with correct application of the skill; job named precisely.

## Exit ticket

1. In one sentence, what does “Pronoun Clarity in Paragraphs” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Pronoun Clarity in Paragraphs” and solve it.
', "objectives" = '• Revise a paragraph so every pronoun points clearly.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Revise a paragraph so every pronoun points clearly.' WHERE "id" = 'ppg6e387818d589f77b5e925f' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e31de0f75bb55bf45cd63','ppg6e387818d589f77b5e925f',NULL,'MULTIPLE_CHOICE','Best habit for “Pronoun Clarity in Paragraphs”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ec1d6e75d7c40fd098003','ppg6e387818d589f77b5e925f',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e68a568d444c5e398cea5','ppg6e387818d589f77b5e925f',NULL,'MULTIPLE_CHOICE','You find an error about “Pronoun Clarity in Paragraphs.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L1. Action vs Linking Verbs (ppg6edf33b410a6192dc8424f)
UPDATE "Lesson" SET "content" = '# Action vs Linking Verbs

*Grade 6 English Language Arts · Unit 6 of 16 · Grammar: Verbs · Lesson 1*

## Objective

**I can** identify what the verb is doing — action or linking.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Action vs Linking Verbs.”

## Teach

### Big idea

**Action vs Linking Verbs.** Identify what the verb is doing — action or linking. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Action vs Linking Verbs.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Action vs Linking Verbs.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Action vs Linking Verbs,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Action vs Linking Verbs.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Action vs Linking Verbs” control?  
   **Answer:** Identify what the verb is doing — action or linking.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Label action or linking: “The soup smells amazing.” “The ranger smells the smoke.” “They were ready.”
2. Label action or linking: “The soup smells amazing.” “The ranger smells the smoke.” “They were ready.”
3. Label action or linking: “The soup smells amazing.” “The ranger smells the smoke.” “They were ready.”
4. Label action or linking: “The soup smells amazing.” “The ranger smells the smoke.” “They were ready.”
5. Label action or linking: “The soup smells amazing.” “The ranger smells the smoke.” “They were ready.”
6. Label action or linking: “The soup smells amazing.” “The ranger smells the smoke.” “They were ready.”

### Answer key (try first)

1. linking; action; linking (were).
2. linking; action; linking (were).
3. linking; action; linking (were).
4. linking; action; linking (were).
5. linking; action; linking (were).
6. linking; action; linking (were).

## Exit ticket

1. In one sentence, what does “Action vs Linking Verbs” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Action vs Linking Verbs” and solve it.
', "objectives" = '• Identify what the verb is doing — action or linking.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Identify what the verb is doing — action or linking.' WHERE "id" = 'ppg6edf33b410a6192dc8424f' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ed49742ea7747a8873779','ppg6edf33b410a6192dc8424f',NULL,'MULTIPLE_CHOICE','Best habit for “Action vs Linking Verbs”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e9303a34c3c334ee24852','ppg6edf33b410a6192dc8424f',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e8a944b087f5dbe060401','ppg6edf33b410a6192dc8424f',NULL,'MULTIPLE_CHOICE','You find an error about “Action vs Linking Verbs.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L2. Simple Verb Tenses (ppg6e140437d162978e1553c6)
UPDATE "Lesson" SET "content" = '# Simple Verb Tenses

*Grade 6 English Language Arts · Unit 6 of 16 · Grammar: Verbs · Lesson 2*

## Objective

**I can** use past, present, and future tense consistently.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Simple Verb Tenses.”

## Teach

### Big idea

**Simple Verb Tenses.** Use past, present, and future tense consistently. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Simple Verb Tenses.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Simple Verb Tenses.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Simple Verb Tenses,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Simple Verb Tenses.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Simple Verb Tenses” control?  
   **Answer:** Use past, present, and future tense consistently.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Rewrite in past, then future: “The hikers follow the markers.” Keep meaning clear.
2. Rewrite in past, then future: “The hikers follow the markers.” Keep meaning clear.
3. Rewrite in past, then future: “The hikers follow the markers.” Keep meaning clear.
4. Rewrite in past, then future: “The hikers follow the markers.” Keep meaning clear.
5. Rewrite in past, then future: “The hikers follow the markers.” Keep meaning clear.
6. Rewrite in past, then future: “The hikers follow the markers.” Keep meaning clear.

### Answer key (try first)

1. followed; will follow.
2. followed; will follow.
3. followed; will follow.
4. followed; will follow.
5. followed; will follow.
6. followed; will follow.

## Exit ticket

1. In one sentence, what does “Simple Verb Tenses” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Simple Verb Tenses” and solve it.
', "objectives" = '• Use past, present, and future tense consistently.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Use past, present, and future tense consistently.' WHERE "id" = 'ppg6e140437d162978e1553c6' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5bf802770cfc408e65be','ppg6e140437d162978e1553c6',NULL,'MULTIPLE_CHOICE','Best habit for “Simple Verb Tenses”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ee9462c8cefa2b9eb745d','ppg6e140437d162978e1553c6',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e9b2aec7d6d3820cd6626','ppg6e140437d162978e1553c6',NULL,'MULTIPLE_CHOICE','You find an error about “Simple Verb Tenses.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L3. Subject-Verb Agreement (ppg6e23b2f03b4c2911202e41)
UPDATE "Lesson" SET "content" = '# Subject-Verb Agreement

*Grade 6 English Language Arts · Unit 6 of 16 · Grammar: Verbs · Lesson 3*

## Objective

**I can** make verbs agree with subjects, including tricky cases.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Subject-Verb Agreement.”

## Teach

### Big idea

**Subject-Verb Agreement.** Make verbs agree with subjects, including tricky cases. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Subject-Verb Agreement.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Subject-Verb Agreement.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Subject-Verb Agreement,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Subject-Verb Agreement.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Subject-Verb Agreement” control?  
   **Answer:** Make verbs agree with subjects, including tricky cases.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Fix agreement: “Each scholar submitted their outline late.” Offer two acceptable Grade 6 revisions (singular generic vs rephrase plural).
2. Fix agreement: “Each scholar submitted their outline late.” Offer two acceptable Grade 6 revisions (singular generic vs rephrase plural).
3. Fix agreement: “Each scholar submitted their outline late.” Offer two acceptable Grade 6 revisions (singular generic vs rephrase plural).
4. Fix agreement: “Each scholar submitted their outline late.” Offer two acceptable Grade 6 revisions (singular generic vs rephrase plural).
5. Fix agreement: “Each scholar submitted their outline late.” Offer two acceptable Grade 6 revisions (singular generic vs rephrase plural).
6. Fix agreement: “Each scholar submitted their outline late.” Offer two acceptable Grade 6 revisions (singular generic vs rephrase plural).

### Answer key (try first)

1. Each scholar submitted his or her outline / All scholars submitted their outlines / use the student’s name.
2. Each scholar submitted his or her outline / All scholars submitted their outlines / use the student’s name.
3. Each scholar submitted his or her outline / All scholars submitted their outlines / use the student’s name.
4. Each scholar submitted his or her outline / All scholars submitted their outlines / use the student’s name.
5. Each scholar submitted his or her outline / All scholars submitted their outlines / use the student’s name.
6. Each scholar submitted his or her outline / All scholars submitted their outlines / use the student’s name.

## Exit ticket

1. In one sentence, what does “Subject-Verb Agreement” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Subject-Verb Agreement” and solve it.
', "objectives" = '• Make verbs agree with subjects, including tricky cases.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Make verbs agree with subjects, including tricky cases.' WHERE "id" = 'ppg6e23b2f03b4c2911202e41' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e61c679bf6e1d6419cde2','ppg6e23b2f03b4c2911202e41',NULL,'MULTIPLE_CHOICE','Best habit for “Subject-Verb Agreement”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e26c2d638e57b6afc1092','ppg6e23b2f03b4c2911202e41',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ecdcc327d9b786161ceaf','ppg6e23b2f03b4c2911202e41',NULL,'MULTIPLE_CHOICE','You find an error about “Subject-Verb Agreement.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L4. Helping Verbs and Verb Phrases (ppg6ea9e01a12b7555377c74d)
UPDATE "Lesson" SET "content" = '# Helping Verbs and Verb Phrases

*Grade 6 English Language Arts · Unit 6 of 16 · Grammar: Verbs · Lesson 4*

## Objective

**I can** recognize helping verbs inside complete verb phrases.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Helping Verbs and Verb Phrases.”

## Teach

### Big idea

**Helping Verbs and Verb Phrases.** Recognize helping verbs inside complete verb phrases. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Helping Verbs and Verb Phrases.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Helping Verbs and Verb Phrases.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Helping Verbs and Verb Phrases,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Helping Verbs and Verb Phrases.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Helping Verbs and Verb Phrases” control?  
   **Answer:** Recognize helping verbs inside complete verb phrases.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Underline the full verb phrase: “The students have been revising carefully.” Name the helping verbs and main verb.
2. Underline the full verb phrase: “The students have been revising carefully.” Name the helping verbs and main verb.
3. Underline the full verb phrase: “The students have been revising carefully.” Name the helping verbs and main verb.
4. Underline the full verb phrase: “The students have been revising carefully.” Name the helping verbs and main verb.
5. Underline the full verb phrase: “The students have been revising carefully.” Name the helping verbs and main verb.
6. Underline the full verb phrase: “The students have been revising carefully.” Name the helping verbs and main verb.

### Answer key (try first)

1. have been revising — helping have/been; main revising.
2. have been revising — helping have/been; main revising.
3. have been revising — helping have/been; main revising.
4. have been revising — helping have/been; main revising.
5. have been revising — helping have/been; main revising.
6. have been revising — helping have/been; main revising.

## Exit ticket

1. In one sentence, what does “Helping Verbs and Verb Phrases” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Helping Verbs and Verb Phrases” and solve it.
', "objectives" = '• Recognize helping verbs inside complete verb phrases.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Recognize helping verbs inside complete verb phrases.' WHERE "id" = 'ppg6ea9e01a12b7555377c74d' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ebf80dfecb8e4f9fc2633','ppg6ea9e01a12b7555377c74d',NULL,'MULTIPLE_CHOICE','Best habit for “Helping Verbs and Verb Phrases”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e58772c32cf74ec8b16fa','ppg6ea9e01a12b7555377c74d',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5d275d6ccbb4aef41419','ppg6ea9e01a12b7555377c74d',NULL,'MULTIPLE_CHOICE','You find an error about “Helping Verbs and Verb Phrases.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L5. Consistent Tense in Narratives (ppg6ec288faea48fc57072f5e)
UPDATE "Lesson" SET "content" = '# Consistent Tense in Narratives

*Grade 6 English Language Arts · Unit 6 of 16 · Grammar: Verbs · Lesson 5*

## Objective

**I can** keep tense steady unless a time shift is intentional.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Consistent Tense in Narratives.”

## Teach

### Big idea

**Consistent Tense in Narratives.** Keep tense steady unless a time shift is intentional. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Consistent Tense in Narratives.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Consistent Tense in Narratives.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Consistent Tense in Narratives,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Consistent Tense in Narratives.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Consistent Tense in Narratives” control?  
   **Answer:** Keep tense steady unless a time shift is intentional.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Fix tense drift: “Maya opened the letter and washes her hands, then she will scream.” Choose a consistent past narration.
2. Fix tense drift: “Maya opened the letter and washes her hands, then she will scream.” Choose a consistent past narration.
3. Fix tense drift: “Maya opened the letter and washes her hands, then she will scream.” Choose a consistent past narration.
4. Fix tense drift: “Maya opened the letter and washes her hands, then she will scream.” Choose a consistent past narration.
5. Fix tense drift: “Maya opened the letter and washes her hands, then she will scream.” Choose a consistent past narration.
6. Fix tense drift: “Maya opened the letter and washes her hands, then she will scream.” Choose a consistent past narration.

### Answer key (try first)

1. opened… washed… screamed (or consistent future — but prefer past narrative).
2. opened… washed… screamed (or consistent future — but prefer past narrative).
3. opened… washed… screamed (or consistent future — but prefer past narrative).
4. opened… washed… screamed (or consistent future — but prefer past narrative).
5. opened… washed… screamed (or consistent future — but prefer past narrative).
6. opened… washed… screamed (or consistent future — but prefer past narrative).

## Exit ticket

1. In one sentence, what does “Consistent Tense in Narratives” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Consistent Tense in Narratives” and solve it.
', "objectives" = '• Keep tense steady unless a time shift is intentional.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Keep tense steady unless a time shift is intentional.' WHERE "id" = 'ppg6ec288faea48fc57072f5e' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e0f076a9821cb20c7724e','ppg6ec288faea48fc57072f5e',NULL,'MULTIPLE_CHOICE','Best habit for “Consistent Tense in Narratives”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5c2421e216a46bde1391','ppg6ec288faea48fc57072f5e',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6edd7617b0b03fbca372b2','ppg6ec288faea48fc57072f5e',NULL,'MULTIPLE_CHOICE','You find an error about “Consistent Tense in Narratives.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L6. Active Voice Preference (ppg6ebad2ab5ede736fe5679a)
UPDATE "Lesson" SET "content" = '# Active Voice Preference

*Grade 6 English Language Arts · Unit 6 of 16 · Grammar: Verbs · Lesson 6*

## Objective

**I can** prefer clear active voice; know when passive is useful.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Active Voice Preference.”

## Teach

### Big idea

**Active Voice Preference.** Prefer clear active voice; know when passive is useful. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Active Voice Preference.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Active Voice Preference.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Active Voice Preference,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Active Voice Preference.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Active Voice Preference” control?  
   **Answer:** Prefer clear active voice; know when passive is useful.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Rewrite active: “The essay was praised by the teacher.” When might passive still be useful? One sentence.
2. Rewrite active: “The essay was praised by the teacher.” When might passive still be useful? One sentence.
3. Rewrite active: “The essay was praised by the teacher.” When might passive still be useful? One sentence.
4. Rewrite active: “The essay was praised by the teacher.” When might passive still be useful? One sentence.
5. Rewrite active: “The essay was praised by the teacher.” When might passive still be useful? One sentence.
6. Rewrite active: “The essay was praised by the teacher.” When might passive still be useful? One sentence.

### Answer key (try first)

1. The teacher praised the essay. Passive useful when actor unknown/unimportant.
2. The teacher praised the essay. Passive useful when actor unknown/unimportant.
3. The teacher praised the essay. Passive useful when actor unknown/unimportant.
4. The teacher praised the essay. Passive useful when actor unknown/unimportant.
5. The teacher praised the essay. Passive useful when actor unknown/unimportant.
6. The teacher praised the essay. Passive useful when actor unknown/unimportant.

## Exit ticket

1. In one sentence, what does “Active Voice Preference” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Active Voice Preference” and solve it.
', "objectives" = '• Prefer clear active voice; know when passive is useful.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Prefer clear active voice; know when passive is useful.' WHERE "id" = 'ppg6ebad2ab5ede736fe5679a' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e93b9f92c6a10130bc3a8','ppg6ebad2ab5ede736fe5679a',NULL,'MULTIPLE_CHOICE','Best habit for “Active Voice Preference”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5e8ac6a89fddd4457909','ppg6ebad2ab5ede736fe5679a',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e7e8fd1ff5d0db0ad381b','ppg6ebad2ab5ede736fe5679a',NULL,'MULTIPLE_CHOICE','You find an error about “Active Voice Preference.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L7. Verbs Unit Review (ppg6e4efd43ea9b36836ef570)
UPDATE "Lesson" SET "content" = '# Verbs Unit Review

*Grade 6 English Language Arts · Unit 6 of 16 · Grammar: Verbs · Lesson 7*

## Objective

**I can** mixed practice on tense, agreement, and precision.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Verbs Unit Review.”

## Teach

### Big idea

**Verbs Unit Review.** Mixed practice on tense, agreement, and precision. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Verbs Unit Review.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Verbs Unit Review.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Verbs Unit Review,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Verbs Unit Review.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Verbs Unit Review” control?  
   **Answer:** Mixed practice on tense, agreement, and precision.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Workshop item 1 for “verbs unit review”: Revise this sentence for today’s skill and explain the change: “maya and jordan reviews the scholarship checklist on friday.”
2. Workshop item 2 for “verbs unit review”: Revise this sentence for today’s skill and explain the change: “the team of scholars present their cer paragraphs after advisory.”
3. Workshop item 3 for “verbs unit review”: Revise this sentence for today’s skill and explain the change: “the class are debating start times with surprising calm.”
4. Workshop item 4 for “verbs unit review”: Revise this sentence for today’s skill and explain the change: “him and i finished the outline before practice.”
5. Workshop item 5 for “verbs unit review”: Revise this sentence for today’s skill and explain the change: “the news are on the library screen before homeroom.”
6. Workshop item 6 for “verbs unit review”: Revise this sentence for today’s skill and explain the change: “everyone brought their laptop to the east texas field trip.”

### Answer key (try first)

1. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
2. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
3. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
4. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
5. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
6. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.

## Exit ticket

1. In one sentence, what does “Verbs Unit Review” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Verbs Unit Review” and solve it.
', "objectives" = '• Mixed practice on tense, agreement, and precision.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Mixed practice on tense, agreement, and precision.' WHERE "id" = 'ppg6e4efd43ea9b36836ef570' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e2c69cf7f11038c0725e7','ppg6e4efd43ea9b36836ef570',NULL,'MULTIPLE_CHOICE','Best habit for “Verbs Unit Review”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e552c2df719b44471f2a3','ppg6e4efd43ea9b36836ef570',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e9ac6f3c6205a2d7247d0','ppg6e4efd43ea9b36836ef570',NULL,'MULTIPLE_CHOICE','You find an error about “Verbs Unit Review.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L1. Word Choice and Connotation (ppg6e5d165ccc209abb03e3a1)
UPDATE "Lesson" SET "content" = '# Word Choice and Connotation

*Grade 6 English Language Arts · Unit 7 of 16 · Reading: Craft and Structure · Lesson 1*

## Objective

**I can** explain how a word''s feeling changes a sentence''s tone.

## Warm-up (2 minutes)

Skim:

> Trail crews near Tyler mark muddy sections with wooden signs.

One sentence: what is it mostly about?

## Teach

### Big idea

**Word Choice and Connotation.** Explain how a word''s feeling changes a sentence''s tone. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Trail crews near Tyler mark muddy sections with wooden signs. Hikers who slow down protect the path and the plants beside it. Rangers say most injuries happen when people rush the last half mile.

Apply “Word Choice and Connotation”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Word Choice and Connotation” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Zoom on one paragraph: claim vs detail. Connect the marks to “Word Choice and Connotation.”

### Common mistake (this lesson only)

Answering “Word Choice and Connotation” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Word Choice and Connotation”?  
   **Answer:** Explain how a word''s feeling changes a sentence''s tone.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Compare *thin envelope* vs *flimsy envelope* for the Maya opening. Which connotation fits “official but anxiety-inducing,” and why?
2. Compare *thin envelope* vs *flimsy envelope* for the Maya opening. Which connotation fits “official but anxiety-inducing,” and why?
3. Compare *thin envelope* vs *flimsy envelope* for the Maya opening. Which connotation fits “official but anxiety-inducing,” and why?
4. Compare *thin envelope* vs *flimsy envelope* for the Maya opening. Which connotation fits “official but anxiety-inducing,” and why?
5. Compare *thin envelope* vs *flimsy envelope* for the Maya opening. Which connotation fits “official but anxiety-inducing,” and why?
6. Compare *thin envelope* vs *flimsy envelope* for the Maya opening. Which connotation fits “official but anxiety-inducing,” and why?

### Answer key (try first)

1. *Thin* can suggest official lightness; *flimsy* adds weakness/cheapness — shifts tone.
2. *Thin* can suggest official lightness; *flimsy* adds weakness/cheapness — shifts tone.
3. *Thin* can suggest official lightness; *flimsy* adds weakness/cheapness — shifts tone.
4. *Thin* can suggest official lightness; *flimsy* adds weakness/cheapness — shifts tone.
5. *Thin* can suggest official lightness; *flimsy* adds weakness/cheapness — shifts tone.
6. *Thin* can suggest official lightness; *flimsy* adds weakness/cheapness — shifts tone.

## Exit ticket

1. In one sentence, what does “Word Choice and Connotation” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Word Choice and Connotation” and solve it.
', "objectives" = '• Explain how a word''s feeling changes a sentence''s tone.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Explain how a word''s feeling changes a sentence''s tone.' WHERE "id" = 'ppg6e5d165ccc209abb03e3a1' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e87b9744e5e31a50a16dc','ppg6e5d165ccc209abb03e3a1',NULL,'MULTIPLE_CHOICE','Which best shows “Word Choice and Connotation”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e989063acee9281e15856','ppg6e5d165ccc209abb03e3a1',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ecf9c370ef086d5ae525a','ppg6e5d165ccc209abb03e3a1',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L2. Figurative Language That Works (ppg6e9426833b96c55218a446)
UPDATE "Lesson" SET "content" = '# Figurative Language That Works

*Grade 6 English Language Arts · Unit 7 of 16 · Reading: Craft and Structure · Lesson 2*

## Objective

**I can** interpret simile, metaphor, and personification in context.

## Warm-up (2 minutes)

Skim:

> School start times tug between biology and logistics.

One sentence: what is it mostly about?

## Teach

### Big idea

**Figurative Language That Works.** Interpret simile, metaphor, and personification in context. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> School start times tug between biology and logistics. Many middle-school students fall asleep later, so early bells cut into deep sleep. Working families often need earlier schedules to match jobs and buses.

Apply “Figurative Language That Works”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Figurative Language That Works” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Zoom on one paragraph: claim vs detail. Connect the marks to “Figurative Language That Works.”

### Common mistake (this lesson only)

Answering “Figurative Language That Works” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Figurative Language That Works”?  
   **Answer:** Interpret simile, metaphor, and personification in context.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. “Hope… could be heavy” (Maya) and “banners whispered” (Jordan). Name each device (metaphor/personification) and explain the effect in one sentence each.
2. “Hope… could be heavy” (Maya) and “banners whispered” (Jordan). Name each device (metaphor/personification) and explain the effect in one sentence each.
3. “Hope… could be heavy” (Maya) and “banners whispered” (Jordan). Name each device (metaphor/personification) and explain the effect in one sentence each.
4. “Hope… could be heavy” (Maya) and “banners whispered” (Jordan). Name each device (metaphor/personification) and explain the effect in one sentence each.
5. “Hope… could be heavy” (Maya) and “banners whispered” (Jordan). Name each device (metaphor/personification) and explain the effect in one sentence each.
6. “Hope… could be heavy” (Maya) and “banners whispered” (Jordan). Name each device (metaphor/personification) and explain the effect in one sentence each.

### Answer key (try first)

1. Heavy hope ≈ metaphor (weight of feeling). Banners whispered ≈ personification (mood/pressure).
2. Heavy hope ≈ metaphor (weight of feeling). Banners whispered ≈ personification (mood/pressure).
3. Heavy hope ≈ metaphor (weight of feeling). Banners whispered ≈ personification (mood/pressure).
4. Heavy hope ≈ metaphor (weight of feeling). Banners whispered ≈ personification (mood/pressure).
5. Heavy hope ≈ metaphor (weight of feeling). Banners whispered ≈ personification (mood/pressure).
6. Heavy hope ≈ metaphor (weight of feeling). Banners whispered ≈ personification (mood/pressure).

## Exit ticket

1. In one sentence, what does “Figurative Language That Works” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Figurative Language That Works” and solve it.
', "objectives" = '• Interpret simile, metaphor, and personification in context.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Interpret simile, metaphor, and personification in context.' WHERE "id" = 'ppg6e9426833b96c55218a446' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ef05c092ddf5d402a4eb8','ppg6e9426833b96c55218a446',NULL,'MULTIPLE_CHOICE','Which best shows “Figurative Language That Works”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e463182068a5fcc802b95','ppg6e9426833b96c55218a446',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e1cbb1a83fbccdac1e1d2','ppg6e9426833b96c55218a446',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L3. Text Structure Signals (ppg6efc34274a9fc158ee3316)
UPDATE "Lesson" SET "content" = '# Text Structure Signals

*Grade 6 English Language Arts · Unit 7 of 16 · Reading: Craft and Structure · Lesson 3*

## Objective

**I can** identify cause/effect, compare/contrast, and problem/solution.

## Warm-up (2 minutes)

Skim:

> Maya paused at the mailbox.

One sentence: what is it mostly about?

## Teach

### Big idea

**Text Structure Signals.** Identify cause/effect, compare/contrast, and problem/solution. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Maya paused at the mailbox. The thin envelope looked official. She washed her hands, then opened it to find three sentences and a deadline. Hope, she realized, could be heavy.

Apply “Text Structure Signals”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Text Structure Signals” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Zoom on one paragraph: claim vs detail. Connect the marks to “Text Structure Signals.”

### Common mistake (this lesson only)

Answering “Text Structure Signals” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Text Structure Signals”?  
   **Answer:** Identify cause/effect, compare/contrast, and problem/solution.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Does the start-times excerpt lean cause/effect, compare/contrast, or problem/solution? Cite one signal phrase and justify.
2. Does the start-times excerpt lean cause/effect, compare/contrast, or problem/solution? Cite one signal phrase and justify.
3. Does the start-times excerpt lean cause/effect, compare/contrast, or problem/solution? Cite one signal phrase and justify.
4. Does the start-times excerpt lean cause/effect, compare/contrast, or problem/solution? Cite one signal phrase and justify.
5. Does the start-times excerpt lean cause/effect, compare/contrast, or problem/solution? Cite one signal phrase and justify.
6. Does the start-times excerpt lean cause/effect, compare/contrast, or problem/solution? Cite one signal phrase and justify.

### Answer key (try first)

1. Compare/contrast (biology vs logistics) with problem framing; signals like “tug-of-war,” “so,” “often need.”
2. Compare/contrast (biology vs logistics) with problem framing; signals like “tug-of-war,” “so,” “often need.”
3. Compare/contrast (biology vs logistics) with problem framing; signals like “tug-of-war,” “so,” “often need.”
4. Compare/contrast (biology vs logistics) with problem framing; signals like “tug-of-war,” “so,” “often need.”
5. Compare/contrast (biology vs logistics) with problem framing; signals like “tug-of-war,” “so,” “often need.”
6. Compare/contrast (biology vs logistics) with problem framing; signals like “tug-of-war,” “so,” “often need.”

## Exit ticket

1. In one sentence, what does “Text Structure Signals” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Text Structure Signals” and solve it.
', "objectives" = '• Identify cause/effect, compare/contrast, and problem/solution.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Identify cause/effect, compare/contrast, and problem/solution.' WHERE "id" = 'ppg6efc34274a9fc158ee3316' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e4b2aa0949b2c1f26a72c','ppg6efc34274a9fc158ee3316',NULL,'MULTIPLE_CHOICE','Which best shows “Text Structure Signals”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e949e67cfc9349c14fa25','ppg6efc34274a9fc158ee3316',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ec19ba7ef983dc0b4b8b0','ppg6efc34274a9fc158ee3316',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L4. Point of View Basics (ppg6e29b9c8ee10dfef852fed)
UPDATE "Lesson" SET "content" = '# Point of View Basics

*Grade 6 English Language Arts · Unit 7 of 16 · Reading: Craft and Structure · Lesson 4*

## Objective

**I can** distinguish first- and third-person narration and effects.

## Warm-up (2 minutes)

Skim:

> Trail crews near Tyler mark muddy sections with wooden signs.

One sentence: what is it mostly about?

## Teach

### Big idea

**Point of View Basics.** Distinguish first- and third-person narration and effects. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Trail crews near Tyler mark muddy sections with wooden signs. Hikers who slow down protect the path and the plants beside it. Rangers say most injuries happen when people rush the last half mile.

Apply “Point of View Basics”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Point of View Basics” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Zoom on one paragraph: claim vs detail. Connect the marks to “Point of View Basics.”

### Common mistake (this lesson only)

Answering “Point of View Basics” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Point of View Basics”?  
   **Answer:** Distinguish first- and third-person narration and effects.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Is the Maya paragraph first- or third-person? How would a first-person rewrite of the first two sentences change what readers know?
2. Is the Maya paragraph first- or third-person? How would a first-person rewrite of the first two sentences change what readers know?
3. Is the Maya paragraph first- or third-person? How would a first-person rewrite of the first two sentences change what readers know?
4. Is the Maya paragraph first- or third-person? How would a first-person rewrite of the first two sentences change what readers know?
5. Is the Maya paragraph first- or third-person? How would a first-person rewrite of the first two sentences change what readers know?
6. Is the Maya paragraph first- or third-person? How would a first-person rewrite of the first two sentences change what readers know?

### Answer key (try first)

1. Third-person. First-person would filter through Maya’s “I” and possibly hide/show thoughts differently.
2. Third-person. First-person would filter through Maya’s “I” and possibly hide/show thoughts differently.
3. Third-person. First-person would filter through Maya’s “I” and possibly hide/show thoughts differently.
4. Third-person. First-person would filter through Maya’s “I” and possibly hide/show thoughts differently.
5. Third-person. First-person would filter through Maya’s “I” and possibly hide/show thoughts differently.
6. Third-person. First-person would filter through Maya’s “I” and possibly hide/show thoughts differently.

## Exit ticket

1. In one sentence, what does “Point of View Basics” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Point of View Basics” and solve it.
', "objectives" = '• Distinguish first- and third-person narration and effects.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Distinguish first- and third-person narration and effects.' WHERE "id" = 'ppg6e29b9c8ee10dfef852fed' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5e5b71a7406283a27a8f','ppg6e29b9c8ee10dfef852fed',NULL,'MULTIPLE_CHOICE','Which best shows “Point of View Basics”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6edf4c8f3fbd7c0bc3c554','ppg6e29b9c8ee10dfef852fed',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e49e64540346e66b3f2e9','ppg6e29b9c8ee10dfef852fed',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L5. How Structure Builds Meaning (ppg6ee4545e35f513a3ecf10d)
UPDATE "Lesson" SET "content" = '# How Structure Builds Meaning

*Grade 6 English Language Arts · Unit 7 of 16 · Reading: Craft and Structure · Lesson 5*

## Objective

**I can** explain why an author sequences sections a certain way.

## Warm-up (2 minutes)

Skim:

> Trail crews near Tyler mark muddy sections with wooden signs.

One sentence: what is it mostly about?

## Teach

### Big idea

**How Structure Builds Meaning.** Explain why an author sequences sections a certain way. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Trail crews near Tyler mark muddy sections with wooden signs. Hikers who slow down protect the path and the plants beside it. Rangers say most injuries happen when people rush the last half mile.

Apply “How Structure Builds Meaning”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “How Structure Builds Meaning” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Zoom on one paragraph: claim vs detail. Connect the marks to “How Structure Builds Meaning.”

### Common mistake (this lesson only)

Answering “How Structure Builds Meaning” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “How Structure Builds Meaning”?  
   **Answer:** Explain why an author sequences sections a certain way.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. State a main takeaway for “How Structure Builds Meaning” using this excerpt:

> Maya paused at the mailbox. The envelope was thin, but her name looked official. She did not open it on the porch. Inside, she set it on the kitchen table and washed her hands first, as if cleanliness could calm the shaking in her fingers. When she finally sli…

Answer in a complete sentence with evidence.
2. Quote the most important phrase for “How Structure Builds Meaning” using this excerpt:

> Maya paused at the mailbox. The envelope was thin, but her name looked official. She did not open it on the porch. Inside, she set it on the kitchen table and washed her hands first, as if cleanliness could calm the shaking in her fingers. When she finally sli…

Answer in a complete sentence with evidence.
3. Infer a feeling/motivation for “How Structure Builds Meaning” using this excerpt:

> Maya paused at the mailbox. The envelope was thin, but her name looked official. She did not open it on the porch. Inside, she set it on the kitchen table and washed her hands first, as if cleanliness could calm the shaking in her fingers. When she finally sli…

Answer in a complete sentence with evidence.
4. Name a craft move for “How Structure Builds Meaning” using this excerpt:

> Maya paused at the mailbox. The envelope was thin, but her name looked official. She did not open it on the porch. Inside, she set it on the kitchen table and washed her hands first, as if cleanliness could calm the shaking in her fingers. When she finally sli…

Answer in a complete sentence with evidence.
5. Ask a follow-up text-dependent question for “How Structure Builds Meaning” using this excerpt:

> Maya paused at the mailbox. The envelope was thin, but her name looked official. She did not open it on the porch. Inside, she set it on the kitchen table and washed her hands first, as if cleanliness could calm the shaking in her fingers. When she finally sli…

Answer in a complete sentence with evidence.
6. Write a one-sentence summary of the final beat for “How Structure Builds Meaning” using this excerpt:

> Maya paused at the mailbox. The envelope was thin, but her name looked official. She did not open it on the porch. Inside, she set it on the kitchen table and washed her hands first, as if cleanliness could calm the shaking in her fingers. When she finally sli…

Answer in a complete sentence with evidence.

### Answer key (try first)

1. Complete sentence + evidence pointer; aligned to state a main takeaway.
2. Complete sentence + evidence pointer; aligned to quote the most important phrase.
3. Complete sentence + evidence pointer; aligned to infer a feeling/motivation.
4. Complete sentence + evidence pointer; aligned to name a craft move.
5. Complete sentence + evidence pointer; aligned to ask a follow-up text-dependent question.
6. Complete sentence + evidence pointer; aligned to write a one-sentence summary of the final beat.

## Exit ticket

1. In one sentence, what does “How Structure Builds Meaning” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “How Structure Builds Meaning” and solve it.
', "objectives" = '• Explain why an author sequences sections a certain way.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Explain why an author sequences sections a certain way.' WHERE "id" = 'ppg6ee4545e35f513a3ecf10d' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e642b4814324132b81873','ppg6ee4545e35f513a3ecf10d',NULL,'MULTIPLE_CHOICE','Which best shows “How Structure Builds Meaning”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5913f404d8236257336f','ppg6ee4545e35f513a3ecf10d',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e39ca098f2be5b5b385bc','ppg6ee4545e35f513a3ecf10d',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L6. Tone vs Mood (ppg6e13c4733642a97373f69c)
UPDATE "Lesson" SET "content" = '# Tone vs Mood

*Grade 6 English Language Arts · Unit 7 of 16 · Reading: Craft and Structure · Lesson 6*

## Objective

**I can** separate the author''s attitude from the reader''s feeling.

## Warm-up (2 minutes)

Skim:

> School start times tug between biology and logistics.

One sentence: what is it mostly about?

## Teach

### Big idea

**Tone vs Mood.** Separate the author''s attitude from the reader''s feeling. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> School start times tug between biology and logistics. Many middle-school students fall asleep later, so early bells cut into deep sleep. Working families often need earlier schedules to match jobs and buses.

Apply “Tone vs Mood”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Tone vs Mood” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Zoom on one paragraph: claim vs detail. Connect the marks to “Tone vs Mood.”

### Common mistake (this lesson only)

Answering “Tone vs Mood” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Tone vs Mood”?  
   **Answer:** Separate the author''s attitude from the reader''s feeling.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. For the scholarship-night excerpt, suggest a tone word for the narrator’s attitude and a mood word for the reader’s feeling. They must not be identical — explain.
2. For the scholarship-night excerpt, suggest a tone word for the narrator’s attitude and a mood word for the reader’s feeling. They must not be identical — explain.
3. For the scholarship-night excerpt, suggest a tone word for the narrator’s attitude and a mood word for the reader’s feeling. They must not be identical — explain.
4. For the scholarship-night excerpt, suggest a tone word for the narrator’s attitude and a mood word for the reader’s feeling. They must not be identical — explain.
5. For the scholarship-night excerpt, suggest a tone word for the narrator’s attitude and a mood word for the reader’s feeling. They must not be identical — explain.
6. For the scholarship-night excerpt, suggest a tone word for the narrator’s attitude and a mood word for the reader’s feeling. They must not be identical — explain.

### Answer key (try first)

1. Tone (author/narrator attitude) vs mood (reader feeling) — e.g., calm coaching tone vs tense mood.
2. Tone (author/narrator attitude) vs mood (reader feeling) — e.g., calm coaching tone vs tense mood.
3. Tone (author/narrator attitude) vs mood (reader feeling) — e.g., calm coaching tone vs tense mood.
4. Tone (author/narrator attitude) vs mood (reader feeling) — e.g., calm coaching tone vs tense mood.
5. Tone (author/narrator attitude) vs mood (reader feeling) — e.g., calm coaching tone vs tense mood.
6. Tone (author/narrator attitude) vs mood (reader feeling) — e.g., calm coaching tone vs tense mood.

## Exit ticket

1. In one sentence, what does “Tone vs Mood” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Tone vs Mood” and solve it.
', "objectives" = '• Separate the author''s attitude from the reader''s feeling.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Separate the author''s attitude from the reader''s feeling.' WHERE "id" = 'ppg6e13c4733642a97373f69c' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eafda8e47fa2c446d551d','ppg6e13c4733642a97373f69c',NULL,'MULTIPLE_CHOICE','Which best shows “Tone vs Mood”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ea2d7c303ab535a9acd9e','ppg6e13c4733642a97373f69c',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e071ac4f2c1bbda65e12f','ppg6e13c4733642a97373f69c',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L7. Craft Moves Mini-Analysis (ppg6e922615c10e90e8d547a3)
UPDATE "Lesson" SET "content" = '# Craft Moves Mini-Analysis

*Grade 6 English Language Arts · Unit 7 of 16 · Reading: Craft and Structure · Lesson 7*

## Objective

**I can** annotate craft moves and explain their effect in CER form.

## Warm-up (2 minutes)

Skim:

> Trail crews near Tyler mark muddy sections with wooden signs.

One sentence: what is it mostly about?

## Teach

### Big idea

**Craft Moves Mini-Analysis.** Annotate craft moves and explain their effect in CER form. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Trail crews near Tyler mark muddy sections with wooden signs. Hikers who slow down protect the path and the plants beside it. Rangers say most injuries happen when people rush the last half mile.

Apply “Craft Moves Mini-Analysis”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Craft Moves Mini-Analysis” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Zoom on one paragraph: claim vs detail. Connect the marks to “Craft Moves Mini-Analysis.”

### Common mistake (this lesson only)

Answering “Craft Moves Mini-Analysis” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Craft Moves Mini-Analysis”?  
   **Answer:** Annotate craft moves and explain their effect in CER form.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Long-passage skill (Craft Moves Mini-Analysis), item 1: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose rocks. Rangers say most injuries happen when people rush the last half mile back to the parking lot.
2. Long-passage skill (Craft Moves Mini-Analysis), item 2: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose rocks. Rangers say most injuries happen when people rush the last half mile back to the parking lot.
3. Long-passage skill (Craft Moves Mini-Analysis), item 3: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose rocks. Rangers say most injuries happen when people rush the last half mile back to the parking lot.
4. Long-passage skill (Craft Moves Mini-Analysis), item 4: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose rocks. Rangers say most injuries happen when people rush the last half mile back to the parking lot.
5. Long-passage skill (Craft Moves Mini-Analysis), item 5: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose rocks. Rangers say most injuries happen when people rush the last half mile back to the parking lot.
6. Long-passage skill (Craft Moves Mini-Analysis), item 6: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Trail crews near Tyler mark muddy sections with simple wooden signs. Hikers who slow down at those markers protect both the path and the plants beside it. A short pause also helps younger walkers notice roots and loose rocks. Rangers say most injuries happen when people rush the last half mile back to the parking lot.

### Answer key (try first)

1. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Craft Moves Mini-Analysis.”
2. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Craft Moves Mini-Analysis.”
3. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Craft Moves Mini-Analysis.”
4. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Craft Moves Mini-Analysis.”
5. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Craft Moves Mini-Analysis.”
6. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Craft Moves Mini-Analysis.”

## Exit ticket

1. In one sentence, what does “Craft Moves Mini-Analysis” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Craft Moves Mini-Analysis” and solve it.
', "objectives" = '• Annotate craft moves and explain their effect in CER form.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Annotate craft moves and explain their effect in CER form.' WHERE "id" = 'ppg6e922615c10e90e8d547a3' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ecd1e09922e37be14e643','ppg6e922615c10e90e8d547a3',NULL,'MULTIPLE_CHOICE','Which best shows “Craft Moves Mini-Analysis”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eba0904de3061d047827a','ppg6e922615c10e90e8d547a3',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e624ad47b6b1af2a71abb','ppg6e922615c10e90e8d547a3',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L1. Annotating Craft Across Pages (ppg6ed7150a34efe9b3f7b97b)
UPDATE "Lesson" SET "content" = '# Annotating Craft Across Pages

*Grade 6 English Language Arts · Unit 8 of 16 · Reading: Craft — Long Passages · Lesson 1*

## Objective

**I can** track diction, structure, and POV through a longer text.

## Warm-up (2 minutes)

Skim:

> Trail crews near Tyler mark muddy sections with wooden signs.

One sentence: what is it mostly about?

## Teach

### Big idea

**Annotating Craft Across Pages.** Track diction, structure, and POV through a longer text. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Trail crews near Tyler mark muddy sections with wooden signs. Hikers who slow down protect the path and the plants beside it. Rangers say most injuries happen when people rush the last half mile.

Apply “Annotating Craft Across Pages”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Annotating Craft Across Pages” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Across chunks, keep a gist list; then synthesize. Connect the marks to “Annotating Craft Across Pages.”

### Common mistake (this lesson only)

Answering “Annotating Craft Across Pages” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Annotating Craft Across Pages”?  
   **Answer:** Track diction, structure, and POV through a longer text.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Long-passage skill (Annotating Craft Across Pages), item 1: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The second settled through the net.
2. Long-passage skill (Annotating Craft Across Pages), item 2: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The second settled through the net.
3. Long-passage skill (Annotating Craft Across Pages), item 3: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The second settled through the net.
4. Long-passage skill (Annotating Craft Across Pages), item 4: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The second settled through the net.
5. Long-passage skill (Annotating Craft Across Pages), item 5: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The second settled through the net.
6. Long-passage skill (Annotating Craft Across Pages), item 6: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The second settled through the net.

### Answer key (try first)

1. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Annotating Craft Across Pages.”
2. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Annotating Craft Across Pages.”
3. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Annotating Craft Across Pages.”
4. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Annotating Craft Across Pages.”
5. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Annotating Craft Across Pages.”
6. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Annotating Craft Across Pages.”

## Exit ticket

1. In one sentence, what does “Annotating Craft Across Pages” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Annotating Craft Across Pages” and solve it.
', "objectives" = '• Track diction, structure, and POV through a longer text.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Track diction, structure, and POV through a longer text.' WHERE "id" = 'ppg6ed7150a34efe9b3f7b97b' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e3c33d4ae7efca1378de2','ppg6ed7150a34efe9b3f7b97b',NULL,'MULTIPLE_CHOICE','Which best shows “Annotating Craft Across Pages”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e673c47408ac90ab4c166','ppg6ed7150a34efe9b3f7b97b',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e3d51e66b1412108fdc11','ppg6ed7150a34efe9b3f7b97b',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L2. Poetry Craft Close Read (ppg6e9af8e9dbc7f9d9a8f82c)
UPDATE "Lesson" SET "content" = '# Poetry Craft Close Read

*Grade 6 English Language Arts · Unit 8 of 16 · Reading: Craft — Long Passages · Lesson 2*

## Objective

**I can** analyze imagery and sound devices in an original short poem.

## Warm-up (2 minutes)

Skim:

> School start times tug between biology and logistics.

One sentence: what is it mostly about?

## Teach

### Big idea

**Poetry Craft Close Read.** Analyze imagery and sound devices in an original short poem. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> School start times tug between biology and logistics. Many middle-school students fall asleep later, so early bells cut into deep sleep. Working families often need earlier schedules to match jobs and buses.

Apply “Poetry Craft Close Read”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Poetry Craft Close Read” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Across chunks, keep a gist list; then synthesize. Connect the marks to “Poetry Craft Close Read.”

### Common mistake (this lesson only)

Answering “Poetry Craft Close Read” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Poetry Craft Close Read”?  
   **Answer:** Analyze imagery and sound devices in an original short poem.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Long-passage skill (Poetry Craft Close Read), item 1: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
2. Long-passage skill (Poetry Craft Close Read), item 2: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
3. Long-passage skill (Poetry Craft Close Read), item 3: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
4. Long-passage skill (Poetry Craft Close Read), item 4: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
5. Long-passage skill (Poetry Craft Close Read), item 5: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
6. Long-passage skill (Poetry Craft Close Read), item 6: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.

### Answer key (try first)

1. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Poetry Craft Close Read.”
2. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Poetry Craft Close Read.”
3. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Poetry Craft Close Read.”
4. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Poetry Craft Close Read.”
5. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Poetry Craft Close Read.”
6. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Poetry Craft Close Read.”

## Exit ticket

1. In one sentence, what does “Poetry Craft Close Read” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Poetry Craft Close Read” and solve it.
', "objectives" = '• Analyze imagery and sound devices in an original short poem.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Analyze imagery and sound devices in an original short poem.' WHERE "id" = 'ppg6e9af8e9dbc7f9d9a8f82c' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e7ebb7b7e04e006a47c56','ppg6e9af8e9dbc7f9d9a8f82c',NULL,'MULTIPLE_CHOICE','Which best shows “Poetry Craft Close Read”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e24d5bd4a556fbc9f167e','ppg6e9af8e9dbc7f9d9a8f82c',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e16f0af8c4f909db5318d','ppg6e9af8e9dbc7f9d9a8f82c',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L3. Speech Excerpt: Purpose and Tone (ppg6e14950fa82c1250c354e1)
UPDATE "Lesson" SET "content" = '# Speech Excerpt: Purpose and Tone

*Grade 6 English Language Arts · Unit 8 of 16 · Reading: Craft — Long Passages · Lesson 3*

## Objective

**I can** explain how craft supports purpose in a speech-like text.

## Warm-up (2 minutes)

Skim:

> Maya paused at the mailbox.

One sentence: what is it mostly about?

## Teach

### Big idea

**Speech Excerpt: Purpose and Tone.** Explain how craft supports purpose in a speech-like text. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Maya paused at the mailbox. The thin envelope looked official. She washed her hands, then opened it to find three sentences and a deadline. Hope, she realized, could be heavy.

Apply “Speech Excerpt: Purpose and Tone”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Speech Excerpt: Purpose and Tone” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Across chunks, keep a gist list; then synthesize. Connect the marks to “Speech Excerpt: Purpose and Tone.”

### Common mistake (this lesson only)

Answering “Speech Excerpt: Purpose and Tone” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Speech Excerpt: Purpose and Tone”?  
   **Answer:** Explain how craft supports purpose in a speech-like text.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Write a mini-CER: Claim about why Maya waits to open the letter. Evidence (detail). Reasoning (so what?).
2. Write a mini-CER: Claim about why Maya waits to open the letter. Evidence (detail). Reasoning (so what?).
3. Write a mini-CER: Claim about why Maya waits to open the letter. Evidence (detail). Reasoning (so what?).
4. Write a mini-CER: Claim about why Maya waits to open the letter. Evidence (detail). Reasoning (so what?).
5. Write a mini-CER: Claim about why Maya waits to open the letter. Evidence (detail). Reasoning (so what?).
6. Write a mini-CER: Claim about why Maya waits to open the letter. Evidence (detail). Reasoning (so what?).

### Answer key (try first)

1. C+E+R all present; reasoning bridges evidence to claim.
2. C+E+R all present; reasoning bridges evidence to claim.
3. C+E+R all present; reasoning bridges evidence to claim.
4. C+E+R all present; reasoning bridges evidence to claim.
5. C+E+R all present; reasoning bridges evidence to claim.
6. C+E+R all present; reasoning bridges evidence to claim.

## Exit ticket

1. In one sentence, what does “Speech Excerpt: Purpose and Tone” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Speech Excerpt: Purpose and Tone” and solve it.
', "objectives" = '• Explain how craft supports purpose in a speech-like text.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Explain how craft supports purpose in a speech-like text.' WHERE "id" = 'ppg6e14950fa82c1250c354e1' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ed8b74e74b24f98ab243a','ppg6e14950fa82c1250c354e1',NULL,'MULTIPLE_CHOICE','Which best shows “Speech Excerpt: Purpose and Tone”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e961a1cb647e307dfbf78','ppg6e14950fa82c1250c354e1',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eae2827471f4a0599a80c','ppg6e14950fa82c1250c354e1',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L4. Narrative Craft Case Study (ppg6efe1a658f04288681cd86)
UPDATE "Lesson" SET "content" = '# Narrative Craft Case Study

*Grade 6 English Language Arts · Unit 8 of 16 · Reading: Craft — Long Passages · Lesson 4*

## Objective

**I can** trace how flashback or foreshadowing shapes meaning.

## Warm-up (2 minutes)

Skim:

> Maya paused at the mailbox.

One sentence: what is it mostly about?

## Teach

### Big idea

**Narrative Craft Case Study.** Trace how flashback or foreshadowing shapes meaning. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Maya paused at the mailbox. The thin envelope looked official. She washed her hands, then opened it to find three sentences and a deadline. Hope, she realized, could be heavy.

Apply “Narrative Craft Case Study”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Narrative Craft Case Study” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Across chunks, keep a gist list; then synthesize. Connect the marks to “Narrative Craft Case Study.”

### Common mistake (this lesson only)

Answering “Narrative Craft Case Study” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Narrative Craft Case Study”?  
   **Answer:** Trace how flashback or foreshadowing shapes meaning.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Long-passage skill (Narrative Craft Case Study), item 1: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
2. Long-passage skill (Narrative Craft Case Study), item 2: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
3. Long-passage skill (Narrative Craft Case Study), item 3: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
4. Long-passage skill (Narrative Craft Case Study), item 4: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
5. Long-passage skill (Narrative Craft Case Study), item 5: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
6. Long-passage skill (Narrative Craft Case Study), item 6: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.

### Answer key (try first)

1. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Narrative Craft Case Study.”
2. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Narrative Craft Case Study.”
3. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Narrative Craft Case Study.”
4. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Narrative Craft Case Study.”
5. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Narrative Craft Case Study.”
6. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Narrative Craft Case Study.”

## Exit ticket

1. In one sentence, what does “Narrative Craft Case Study” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Narrative Craft Case Study” and solve it.
', "objectives" = '• Trace how flashback or foreshadowing shapes meaning.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Trace how flashback or foreshadowing shapes meaning.' WHERE "id" = 'ppg6efe1a658f04288681cd86' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eb51454b2cabb6ae7370d','ppg6efe1a658f04288681cd86',NULL,'MULTIPLE_CHOICE','Which best shows “Narrative Craft Case Study”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e015b359cfafc8c38696e','ppg6efe1a658f04288681cd86',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e514d5340092c6bd689f0','ppg6efe1a658f04288681cd86',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L5. Structure Map of a Feature Article (ppg6e70c53506121193b33f1d)
UPDATE "Lesson" SET "content" = '# Structure Map of a Feature Article

*Grade 6 English Language Arts · Unit 8 of 16 · Reading: Craft — Long Passages · Lesson 5*

## Objective

**I can** map sections and justify the author''s organization.

## Warm-up (2 minutes)

Skim:

> Trail crews near Tyler mark muddy sections with wooden signs.

One sentence: what is it mostly about?

## Teach

### Big idea

**Structure Map of a Feature Article.** Map sections and justify the author''s organization. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Trail crews near Tyler mark muddy sections with wooden signs. Hikers who slow down protect the path and the plants beside it. Rangers say most injuries happen when people rush the last half mile.

Apply “Structure Map of a Feature Article”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Structure Map of a Feature Article” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Across chunks, keep a gist list; then synthesize. Connect the marks to “Structure Map of a Feature Article.”

### Common mistake (this lesson only)

Answering “Structure Map of a Feature Article” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Structure Map of a Feature Article”?  
   **Answer:** Map sections and justify the author''s organization.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Long-passage skill (Structure Map of a Feature Article), item 1: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
2. Long-passage skill (Structure Map of a Feature Article), item 2: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
3. Long-passage skill (Structure Map of a Feature Article), item 3: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
4. Long-passage skill (Structure Map of a Feature Article), item 4: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
5. Long-passage skill (Structure Map of a Feature Article), item 5: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
6. Long-passage skill (Structure Map of a Feature Article), item 6: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.

### Answer key (try first)

1. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Structure Map of a Feature Article.”
2. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Structure Map of a Feature Article.”
3. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Structure Map of a Feature Article.”
4. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Structure Map of a Feature Article.”
5. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Structure Map of a Feature Article.”
6. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Structure Map of a Feature Article.”

## Exit ticket

1. In one sentence, what does “Structure Map of a Feature Article” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Structure Map of a Feature Article” and solve it.
', "objectives" = '• Map sections and justify the author''s organization.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Map sections and justify the author''s organization.' WHERE "id" = 'ppg6e70c53506121193b33f1d' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eb625b2cc63c16e2b8fe8','ppg6e70c53506121193b33f1d',NULL,'MULTIPLE_CHOICE','Which best shows “Structure Map of a Feature Article”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e14ff2970ba3f4af91385','ppg6e70c53506121193b33f1d',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e37416d12c38d9ab3d7b0','ppg6e70c53506121193b33f1d',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L6. Long-Passage Craft Synthesis (ppg6e99b6bef949d92c6cdbc5)
UPDATE "Lesson" SET "content" = '# Long-Passage Craft Synthesis

*Grade 6 English Language Arts · Unit 8 of 16 · Reading: Craft — Long Passages · Lesson 6*

## Objective

**I can** write a craft-focused CER on a culminating long passage.

## Warm-up (2 minutes)

Skim:

> Jordan had practiced free throws so often his sneakers knew the floorboards.

One sentence: what is it mostly about?

## Teach

### Big idea

**Long-Passage Craft Synthesis.** Write a craft-focused CER on a culminating long passage. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Jordan had practiced free throws so often his sneakers knew the floorboards. On scholarship night the gym felt different. Coach said, "Breathe like you do in study hall." The first shot rimmed out; the second fell through.

Apply “Long-Passage Craft Synthesis”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Long-Passage Craft Synthesis” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Across chunks, keep a gist list; then synthesize. Connect the marks to “Long-Passage Craft Synthesis.”

### Common mistake (this lesson only)

Answering “Long-Passage Craft Synthesis” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Long-Passage Craft Synthesis”?  
   **Answer:** Write a craft-focused CER on a culminating long passage.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Long-passage skill (Long-Passage Craft Synthesis), item 1: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
2. Long-passage skill (Long-Passage Craft Synthesis), item 2: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
3. Long-passage skill (Long-Passage Craft Synthesis), item 3: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
4. Long-passage skill (Long-Passage Craft Synthesis), item 4: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
5. Long-passage skill (Long-Passage Craft Synthesis), item 5: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.
6. Long-passage skill (Long-Passage Craft Synthesis), item 6: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.

### Answer key (try first)

1. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Long-Passage Craft Synthesis.”
2. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Long-Passage Craft Synthesis.”
3. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Long-Passage Craft Synthesis.”
4. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Long-Passage Craft Synthesis.”
5. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Long-Passage Craft Synthesis.”
6. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Long-Passage Craft Synthesis.”

## Exit ticket

1. In one sentence, what does “Long-Passage Craft Synthesis” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Long-Passage Craft Synthesis” and solve it.
', "objectives" = '• Write a craft-focused CER on a culminating long passage.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Write a craft-focused CER on a culminating long passage.' WHERE "id" = 'ppg6e99b6bef949d92c6cdbc5' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e0c983ac68d2ea361835f','ppg6e99b6bef949d92c6cdbc5',NULL,'MULTIPLE_CHOICE','Which best shows “Long-Passage Craft Synthesis”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e4a6df07e9b410a9dfc65','ppg6e99b6bef949d92c6cdbc5',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e050ffd71c61aac5e5dc1','ppg6e99b6bef949d92c6cdbc5',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L1. What Adjectives Modify (ppg6e2ad3137b3fe2eb0c595c)
UPDATE "Lesson" SET "content" = '# What Adjectives Modify

*Grade 6 English Language Arts · Unit 9 of 16 · Grammar: Adjectives and Adverbs · Lesson 1*

## Objective

**I can** place adjectives clearly to describe nouns and pronouns.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “What Adjectives Modify.”

## Teach

### Big idea

**What Adjectives Modify.** Place adjectives clearly to describe nouns and pronouns. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “What Adjectives Modify.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “What Adjectives Modify.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “What Adjectives Modify,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “What Adjectives Modify.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “What Adjectives Modify” control?  
   **Answer:** Place adjectives clearly to describe nouns and pronouns.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Add two precise adjectives to “The envelope sat on the table” without stacking more than two before a noun.
2. Add two precise adjectives to “The envelope sat on the table” without stacking more than two before a noun.
3. Add two precise adjectives to “The envelope sat on the table” without stacking more than two before a noun.
4. Add two precise adjectives to “The envelope sat on the table” without stacking more than two before a noun.
5. Add two precise adjectives to “The envelope sat on the table” without stacking more than two before a noun.
6. Add two precise adjectives to “The envelope sat on the table” without stacking more than two before a noun.

### Answer key (try first)

1. Samples: thin official envelope / sealed cream envelope — avoid overloaded stacks.
2. Samples: thin official envelope / sealed cream envelope — avoid overloaded stacks.
3. Samples: thin official envelope / sealed cream envelope — avoid overloaded stacks.
4. Samples: thin official envelope / sealed cream envelope — avoid overloaded stacks.
5. Samples: thin official envelope / sealed cream envelope — avoid overloaded stacks.
6. Samples: thin official envelope / sealed cream envelope — avoid overloaded stacks.

## Exit ticket

1. In one sentence, what does “What Adjectives Modify” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “What Adjectives Modify” and solve it.
', "objectives" = '• Place adjectives clearly to describe nouns and pronouns.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Place adjectives clearly to describe nouns and pronouns.' WHERE "id" = 'ppg6e2ad3137b3fe2eb0c595c' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ecb561395ebeec92dd419','ppg6e2ad3137b3fe2eb0c595c',NULL,'MULTIPLE_CHOICE','Best habit for “What Adjectives Modify”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ea7bf02c83facd1b9ec66','ppg6e2ad3137b3fe2eb0c595c',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e6bf9b5d01f3b8cc745ee','ppg6e2ad3137b3fe2eb0c595c',NULL,'MULTIPLE_CHOICE','You find an error about “What Adjectives Modify.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L2. What Adverbs Modify (ppg6e2b69e77ebe72d5cd26c8)
UPDATE "Lesson" SET "content" = '# What Adverbs Modify

*Grade 6 English Language Arts · Unit 9 of 16 · Grammar: Adjectives and Adverbs · Lesson 2*

## Objective

**I can** use adverbs for verbs, adjectives, and other adverbs.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “What Adverbs Modify.”

## Teach

### Big idea

**What Adverbs Modify.** Use adverbs for verbs, adjectives, and other adverbs. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “What Adverbs Modify.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “What Adverbs Modify.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “What Adverbs Modify,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “What Adverbs Modify.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “What Adverbs Modify” control?  
   **Answer:** Use adverbs for verbs, adjectives, and other adverbs.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Modify the verb and an adjective: “Jordan breathed.” → add an adverb; then modify *nervous* in “a nervous smile” carefully (adverb before adjective).
2. Modify the verb and an adjective: “Jordan breathed.” → add an adverb; then modify *nervous* in “a nervous smile” carefully (adverb before adjective).
3. Modify the verb and an adjective: “Jordan breathed.” → add an adverb; then modify *nervous* in “a nervous smile” carefully (adverb before adjective).
4. Modify the verb and an adjective: “Jordan breathed.” → add an adverb; then modify *nervous* in “a nervous smile” carefully (adverb before adjective).
5. Modify the verb and an adjective: “Jordan breathed.” → add an adverb; then modify *nervous* in “a nervous smile” carefully (adverb before adjective).
6. Modify the verb and an adjective: “Jordan breathed.” → add an adverb; then modify *nervous* in “a nervous smile” carefully (adverb before adjective).

### Answer key (try first)

1. breathed slowly; a surprisingly nervous smile (etc.).
2. breathed slowly; a surprisingly nervous smile (etc.).
3. breathed slowly; a surprisingly nervous smile (etc.).
4. breathed slowly; a surprisingly nervous smile (etc.).
5. breathed slowly; a surprisingly nervous smile (etc.).
6. breathed slowly; a surprisingly nervous smile (etc.).

## Exit ticket

1. In one sentence, what does “What Adverbs Modify” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “What Adverbs Modify” and solve it.
', "objectives" = '• Use adverbs for verbs, adjectives, and other adverbs.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Use adverbs for verbs, adjectives, and other adverbs.' WHERE "id" = 'ppg6e2b69e77ebe72d5cd26c8' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e83c13b2351164eb9e2fa','ppg6e2b69e77ebe72d5cd26c8',NULL,'MULTIPLE_CHOICE','Best habit for “What Adverbs Modify”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ee98ed56ee9540bb5c85c','ppg6e2b69e77ebe72d5cd26c8',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e55298c81f67305262263','ppg6e2b69e77ebe72d5cd26c8',NULL,'MULTIPLE_CHOICE','You find an error about “What Adverbs Modify.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L3. Comparative and Superlative Forms (ppg6ed3edfadfb5288bd5ebc6)
UPDATE "Lesson" SET "content" = '# Comparative and Superlative Forms

*Grade 6 English Language Arts · Unit 9 of 16 · Grammar: Adjectives and Adverbs · Lesson 3*

## Objective

**I can** form -er/-est and more/most comparisons correctly.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Comparative and Superlative Forms.”

## Teach

### Big idea

**Comparative and Superlative Forms.** Form -er/-est and more/most comparisons correctly. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Comparative and Superlative Forms.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Comparative and Superlative Forms.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Comparative and Superlative Forms,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Comparative and Superlative Forms.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Comparative and Superlative Forms” control?  
   **Answer:** Form -er/-est and more/most comparisons correctly.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Form comparative/superlative: sharp, careful, good. Use one in a sentence comparing two trails.
2. Form comparative/superlative: sharp, careful, good. Use one in a sentence comparing two trails.
3. Form comparative/superlative: sharp, careful, good. Use one in a sentence comparing two trails.
4. Form comparative/superlative: sharp, careful, good. Use one in a sentence comparing two trails.
5. Form comparative/superlative: sharp, careful, good. Use one in a sentence comparing two trails.
6. Form comparative/superlative: sharp, careful, good. Use one in a sentence comparing two trails.

### Answer key (try first)

1. sharper/sharpest; more/most careful; better/best.
2. sharper/sharpest; more/most careful; better/best.
3. sharper/sharpest; more/most careful; better/best.
4. sharper/sharpest; more/most careful; better/best.
5. sharper/sharpest; more/most careful; better/best.
6. sharper/sharpest; more/most careful; better/best.

## Exit ticket

1. In one sentence, what does “Comparative and Superlative Forms” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Comparative and Superlative Forms” and solve it.
', "objectives" = '• Form -er/-est and more/most comparisons correctly.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Form -er/-est and more/most comparisons correctly.' WHERE "id" = 'ppg6ed3edfadfb5288bd5ebc6' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ebb1cb8caaaadaee4d445','ppg6ed3edfadfb5288bd5ebc6',NULL,'MULTIPLE_CHOICE','Best habit for “Comparative and Superlative Forms”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e8226867bfc2eadeebcd4','ppg6ed3edfadfb5288bd5ebc6',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ebf15f2841042eea896ef','ppg6ed3edfadfb5288bd5ebc6',NULL,'MULTIPLE_CHOICE','You find an error about “Comparative and Superlative Forms.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L4. Avoiding Double Negatives (ppg6ed8415f23724202886395)
UPDATE "Lesson" SET "content" = '# Avoiding Double Negatives

*Grade 6 English Language Arts · Unit 9 of 16 · Grammar: Adjectives and Adverbs · Lesson 4*

## Objective

**I can** revise double negatives and unclear modifier placement.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Avoiding Double Negatives.”

## Teach

### Big idea

**Avoiding Double Negatives.** Revise double negatives and unclear modifier placement. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Avoiding Double Negatives.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Avoiding Double Negatives.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Avoiding Double Negatives,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Avoiding Double Negatives.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Avoiding Double Negatives” control?  
   **Answer:** Revise double negatives and unclear modifier placement.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Fix: “I don’t need no pencil.” and “Hardly nobody noticed.” Explain the repair.
2. Fix: “I don’t need no pencil.” and “Hardly nobody noticed.” Explain the repair.
3. Fix: “I don’t need no pencil.” and “Hardly nobody noticed.” Explain the repair.
4. Fix: “I don’t need no pencil.” and “Hardly nobody noticed.” Explain the repair.
5. Fix: “I don’t need no pencil.” and “Hardly nobody noticed.” Explain the repair.
6. Fix: “I don’t need no pencil.” and “Hardly nobody noticed.” Explain the repair.

### Answer key (try first)

1. don’t need a pencil / don’t need any; Hardly anybody noticed.
2. don’t need a pencil / don’t need any; Hardly anybody noticed.
3. don’t need a pencil / don’t need any; Hardly anybody noticed.
4. don’t need a pencil / don’t need any; Hardly anybody noticed.
5. don’t need a pencil / don’t need any; Hardly anybody noticed.
6. don’t need a pencil / don’t need any; Hardly anybody noticed.

## Exit ticket

1. In one sentence, what does “Avoiding Double Negatives” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Avoiding Double Negatives” and solve it.
', "objectives" = '• Revise double negatives and unclear modifier placement.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Revise double negatives and unclear modifier placement.' WHERE "id" = 'ppg6ed8415f23724202886395' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eb431fb11c69ff8166386','ppg6ed8415f23724202886395',NULL,'MULTIPLE_CHOICE','Best habit for “Avoiding Double Negatives”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e9f0e3238d5196ad4b211','ppg6ed8415f23724202886395',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5c676f25b72705fcfc77','ppg6ed8415f23724202886395',NULL,'MULTIPLE_CHOICE','You find an error about “Avoiding Double Negatives.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L5. Adjective vs Adverb Choices (ppg6ef2389350d4fb68f5c535)
UPDATE "Lesson" SET "content" = '# Adjective vs Adverb Choices

*Grade 6 English Language Arts · Unit 9 of 16 · Grammar: Adjectives and Adverbs · Lesson 5*

## Objective

**I can** choose good/well, bad/badly, and similar pairs carefully.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Adjective vs Adverb Choices.”

## Teach

### Big idea

**Adjective vs Adverb Choices.** Choose good/well, bad/badly, and similar pairs carefully. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Adjective vs Adverb Choices.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Adjective vs Adverb Choices.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Adjective vs Adverb Choices,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Adjective vs Adverb Choices.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Adjective vs Adverb Choices” control?  
   **Answer:** Choose good/well, bad/badly, and similar pairs carefully.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Choose: “She did (good/well) on the quiz.” “The soup tastes (good/well).” Explain linking-verb pattern.
2. Choose: “She did (good/well) on the quiz.” “The soup tastes (good/well).” Explain linking-verb pattern.
3. Choose: “She did (good/well) on the quiz.” “The soup tastes (good/well).” Explain linking-verb pattern.
4. Choose: “She did (good/well) on the quiz.” “The soup tastes (good/well).” Explain linking-verb pattern.
5. Choose: “She did (good/well) on the quiz.” “The soup tastes (good/well).” Explain linking-verb pattern.
6. Choose: “She did (good/well) on the quiz.” “The soup tastes (good/well).” Explain linking-verb pattern.

### Answer key (try first)

1. well (adverb after action did); good (adjective after linking tastes).
2. well (adverb after action did); good (adjective after linking tastes).
3. well (adverb after action did); good (adjective after linking tastes).
4. well (adverb after action did); good (adjective after linking tastes).
5. well (adverb after action did); good (adjective after linking tastes).
6. well (adverb after action did); good (adjective after linking tastes).

## Exit ticket

1. In one sentence, what does “Adjective vs Adverb Choices” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Adjective vs Adverb Choices” and solve it.
', "objectives" = '• Choose good/well, bad/badly, and similar pairs carefully.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Choose good/well, bad/badly, and similar pairs carefully.' WHERE "id" = 'ppg6ef2389350d4fb68f5c535' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ece517981e36b577a276d','ppg6ef2389350d4fb68f5c535',NULL,'MULTIPLE_CHOICE','Best habit for “Adjective vs Adverb Choices”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e4bae729de0cee93f2f07','ppg6ef2389350d4fb68f5c535',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ea8a7a63f5a3d1a575d27','ppg6ef2389350d4fb68f5c535',NULL,'MULTIPLE_CHOICE','You find an error about “Adjective vs Adverb Choices.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L6. Modifiers for Stronger Writing (ppg6e95b49c7676172e47c5cc)
UPDATE "Lesson" SET "content" = '# Modifiers for Stronger Writing

*Grade 6 English Language Arts · Unit 9 of 16 · Grammar: Adjectives and Adverbs · Lesson 6*

## Objective

**I can** add precise modifiers without stuffing sentences.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Modifiers for Stronger Writing.”

## Teach

### Big idea

**Modifiers for Stronger Writing.** Add precise modifiers without stuffing sentences. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Modifiers for Stronger Writing.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Modifiers for Stronger Writing.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Modifiers for Stronger Writing,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Modifiers for Stronger Writing.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Modifiers for Stronger Writing” control?  
   **Answer:** Add precise modifiers without stuffing sentences.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Apply “modifiers for stronger writing” to revise: “him and i finished the outline before practice.” Show before → after and name the grammar job you fixed (item 1).
2. Apply “modifiers for stronger writing” to revise: “the class are debating start times with surprising calm.” Show before → after and name the grammar job you fixed (item 2).
3. Apply “modifiers for stronger writing” to revise: “the team of scholars present their cer paragraphs after advisory.” Show before → after and name the grammar job you fixed (item 3).
4. Apply “modifiers for stronger writing” to revise: “the class are debating start times with surprising calm.” Show before → after and name the grammar job you fixed (item 4).
5. Apply “modifiers for stronger writing” to revise: “the team of scholars present their cer paragraphs after advisory.” Show before → after and name the grammar job you fixed (item 5).
6. Apply “modifiers for stronger writing” to revise: “maya and jordan reviews the scholarship checklist on friday.” Show before → after and name the grammar job you fixed (item 6).

### Answer key (try first)

1. Before/after with correct application of the skill; job named precisely.
2. Before/after with correct application of the skill; job named precisely.
3. Before/after with correct application of the skill; job named precisely.
4. Before/after with correct application of the skill; job named precisely.
5. Before/after with correct application of the skill; job named precisely.
6. Before/after with correct application of the skill; job named precisely.

## Exit ticket

1. In one sentence, what does “Modifiers for Stronger Writing” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Modifiers for Stronger Writing” and solve it.
', "objectives" = '• Add precise modifiers without stuffing sentences.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Add precise modifiers without stuffing sentences.' WHERE "id" = 'ppg6e95b49c7676172e47c5cc' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e2ef8cae6d9c0af4d3190','ppg6e95b49c7676172e47c5cc',NULL,'MULTIPLE_CHOICE','Best habit for “Modifiers for Stronger Writing”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ed9535e51ea6d1125bd40','ppg6e95b49c7676172e47c5cc',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e118d08eb1cbf3a06cd6a','ppg6e95b49c7676172e47c5cc',NULL,'MULTIPLE_CHOICE','You find an error about “Modifiers for Stronger Writing.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L1. Prepositions and Their Objects (ppg6e25ddfded204973af8861)
UPDATE "Lesson" SET "content" = '# Prepositions and Their Objects

*Grade 6 English Language Arts · Unit 10 of 16 · Grammar: Prepositions and Interjections · Lesson 1*

## Objective

**I can** identify prepositions and the objects they connect.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Prepositions and Their Objects.”

## Teach

### Big idea

**Prepositions and Their Objects.** Identify prepositions and the objects they connect. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Prepositions and Their Objects.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Prepositions and Their Objects.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Prepositions and Their Objects,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Prepositions and Their Objects.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Prepositions and Their Objects” control?  
   **Answer:** Identify prepositions and the objects they connect.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Circle prepositions and objects: “The letter on the table near Maya arrived from the office.”
2. Circle prepositions and objects: “The letter on the table near Maya arrived from the office.”
3. Circle prepositions and objects: “The letter on the table near Maya arrived from the office.”
4. Circle prepositions and objects: “The letter on the table near Maya arrived from the office.”
5. Circle prepositions and objects: “The letter on the table near Maya arrived from the office.”
6. Circle prepositions and objects: “The letter on the table near Maya arrived from the office.”

### Answer key (try first)

1. on→table; near→Maya; from→office.
2. on→table; near→Maya; from→office.
3. on→table; near→Maya; from→office.
4. on→table; near→Maya; from→office.
5. on→table; near→Maya; from→office.
6. on→table; near→Maya; from→office.

## Exit ticket

1. In one sentence, what does “Prepositions and Their Objects” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Prepositions and Their Objects” and solve it.
', "objectives" = '• Identify prepositions and the objects they connect.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Identify prepositions and the objects they connect.' WHERE "id" = 'ppg6e25ddfded204973af8861' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e28eaf54f5586bcb115d7','ppg6e25ddfded204973af8861',NULL,'MULTIPLE_CHOICE','Best habit for “Prepositions and Their Objects”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e0b308114192d90c9ddc0','ppg6e25ddfded204973af8861',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e1b02802255590595ca9d','ppg6e25ddfded204973af8861',NULL,'MULTIPLE_CHOICE','You find an error about “Prepositions and Their Objects.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L2. Prepositional Phrases as Modifiers (ppg6e76cadba022469b08b070)
UPDATE "Lesson" SET "content" = '# Prepositional Phrases as Modifiers

*Grade 6 English Language Arts · Unit 10 of 16 · Grammar: Prepositions and Interjections · Lesson 2*

## Objective

**I can** see how phrases act like adjectives or adverbs.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Prepositional Phrases as Modifiers.”

## Teach

### Big idea

**Prepositional Phrases as Modifiers.** See how phrases act like adjectives or adverbs. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Prepositional Phrases as Modifiers.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Prepositional Phrases as Modifiers.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Prepositional Phrases as Modifiers,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Prepositional Phrases as Modifiers.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Prepositional Phrases as Modifiers” control?  
   **Answer:** See how phrases act like adjectives or adverbs.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Label each phrase adj/adv: “The keys in the drawer vanished before dawn.”
2. Label each phrase adj/adv: “The keys in the drawer vanished before dawn.”
3. Label each phrase adj/adv: “The keys in the drawer vanished before dawn.”
4. Label each phrase adj/adv: “The keys in the drawer vanished before dawn.”
5. Label each phrase adj/adv: “The keys in the drawer vanished before dawn.”
6. Label each phrase adj/adv: “The keys in the drawer vanished before dawn.”

### Answer key (try first)

1. in the drawer (adj—which keys); before dawn (adv—when).
2. in the drawer (adj—which keys); before dawn (adv—when).
3. in the drawer (adj—which keys); before dawn (adv—when).
4. in the drawer (adj—which keys); before dawn (adv—when).
5. in the drawer (adj—which keys); before dawn (adv—when).
6. in the drawer (adj—which keys); before dawn (adv—when).

## Exit ticket

1. In one sentence, what does “Prepositional Phrases as Modifiers” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Prepositional Phrases as Modifiers” and solve it.
', "objectives" = '• See how phrases act like adjectives or adverbs.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'See how phrases act like adjectives or adverbs.' WHERE "id" = 'ppg6e76cadba022469b08b070' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6efc5e859584b4e96757b8','ppg6e76cadba022469b08b070',NULL,'MULTIPLE_CHOICE','Best habit for “Prepositional Phrases as Modifiers”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e078882ad52551addacc2','ppg6e76cadba022469b08b070',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e1ec0f92c97e3b1941794','ppg6e76cadba022469b08b070',NULL,'MULTIPLE_CHOICE','You find an error about “Prepositional Phrases as Modifiers.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L3. Ending with a Preposition (Myths) (ppg6edffa38987ebd3e27f6d7)
UPDATE "Lesson" SET "content" = '# Ending with a Preposition (Myths)

*Grade 6 English Language Arts · Unit 10 of 16 · Grammar: Prepositions and Interjections · Lesson 3*

## Objective

**I can** revise awkward endings without fake ''rules'' panic.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Ending with a Preposition (Myths).”

## Teach

### Big idea

**Ending with a Preposition (Myths).** Revise awkward endings without fake ''rules'' panic. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Ending with a Preposition (Myths).” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Ending with a Preposition (Myths).”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Ending with a Preposition (Myths),” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Ending with a Preposition (Myths).” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Ending with a Preposition (Myths)” control?  
   **Answer:** Revise awkward endings without fake ''rules'' panic.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Revise awkwardly formal: “With whom are you going to the game with?” Produce a clear natural sentence.
2. Revise awkwardly formal: “With whom are you going to the game with?” Produce a clear natural sentence.
3. Revise awkwardly formal: “With whom are you going to the game with?” Produce a clear natural sentence.
4. Revise awkwardly formal: “With whom are you going to the game with?” Produce a clear natural sentence.
5. Revise awkwardly formal: “With whom are you going to the game with?” Produce a clear natural sentence.
6. Revise awkwardly formal: “With whom are you going to the game with?” Produce a clear natural sentence.

### Answer key (try first)

1. Who are you going to the game with? / With whom are you going to the game?
2. Who are you going to the game with? / With whom are you going to the game?
3. Who are you going to the game with? / With whom are you going to the game?
4. Who are you going to the game with? / With whom are you going to the game?
5. Who are you going to the game with? / With whom are you going to the game?
6. Who are you going to the game with? / With whom are you going to the game?

## Exit ticket

1. In one sentence, what does “Ending with a Preposition (Myths)” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Ending with a Preposition (Myths)” and solve it.
', "objectives" = '• Revise awkward endings without fake ''rules'' panic.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Revise awkward endings without fake ''rules'' panic.' WHERE "id" = 'ppg6edffa38987ebd3e27f6d7' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e0689e63e651cc3333cdb','ppg6edffa38987ebd3e27f6d7',NULL,'MULTIPLE_CHOICE','Best habit for “Ending with a Preposition (Myths)”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ebb5b79de0ce355c42544','ppg6edffa38987ebd3e27f6d7',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e335cae0a59d545909704','ppg6edffa38987ebd3e27f6d7',NULL,'MULTIPLE_CHOICE','You find an error about “Ending with a Preposition (Myths).” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L4. Interjections and Tone (ppg6ea2ddb3e232a17482da91)
UPDATE "Lesson" SET "content" = '# Interjections and Tone

*Grade 6 English Language Arts · Unit 10 of 16 · Grammar: Prepositions and Interjections · Lesson 4*

## Objective

**I can** use interjections sparingly and punctuate them well.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Interjections and Tone.”

## Teach

### Big idea

**Interjections and Tone.** Use interjections sparingly and punctuate them well. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Interjections and Tone.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Interjections and Tone.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Interjections and Tone,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Interjections and Tone.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Interjections and Tone” control?  
   **Answer:** Use interjections sparingly and punctuate them well.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Punctuate: “wow the free throw went in” two ways (comma vs exclamation) and explain tone difference.
2. Punctuate: “wow the free throw went in” two ways (comma vs exclamation) and explain tone difference.
3. Punctuate: “wow the free throw went in” two ways (comma vs exclamation) and explain tone difference.
4. Punctuate: “wow the free throw went in” two ways (comma vs exclamation) and explain tone difference.
5. Punctuate: “wow the free throw went in” two ways (comma vs exclamation) and explain tone difference.
6. Punctuate: “wow the free throw went in” two ways (comma vs exclamation) and explain tone difference.

### Answer key (try first)

1. Wow, the free throw went in. / Wow! The free throw went in. Stronger emotion with !
2. Wow, the free throw went in. / Wow! The free throw went in. Stronger emotion with !
3. Wow, the free throw went in. / Wow! The free throw went in. Stronger emotion with !
4. Wow, the free throw went in. / Wow! The free throw went in. Stronger emotion with !
5. Wow, the free throw went in. / Wow! The free throw went in. Stronger emotion with !
6. Wow, the free throw went in. / Wow! The free throw went in. Stronger emotion with !

## Exit ticket

1. In one sentence, what does “Interjections and Tone” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Interjections and Tone” and solve it.
', "objectives" = '• Use interjections sparingly and punctuate them well.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Use interjections sparingly and punctuate them well.' WHERE "id" = 'ppg6ea2ddb3e232a17482da91' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5acdcd2459344ea09fa8','ppg6ea2ddb3e232a17482da91',NULL,'MULTIPLE_CHOICE','Best habit for “Interjections and Tone”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eb21d958563a8cfd47fd4','ppg6ea2ddb3e232a17482da91',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e1df5d7dcd9255f8f9830','ppg6ea2ddb3e232a17482da91',NULL,'MULTIPLE_CHOICE','You find an error about “Interjections and Tone.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L5. Phrase Clarity Revision (ppg6ebdf9f3541760fb0301fe)
UPDATE "Lesson" SET "content" = '# Phrase Clarity Revision

*Grade 6 English Language Arts · Unit 10 of 16 · Grammar: Prepositions and Interjections · Lesson 5*

## Objective

**I can** rewrite sentences so prepositional phrases attach cleanly.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Phrase Clarity Revision.”

## Teach

### Big idea

**Phrase Clarity Revision.** Rewrite sentences so prepositional phrases attach cleanly. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Phrase Clarity Revision.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Phrase Clarity Revision.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Phrase Clarity Revision,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Phrase Clarity Revision.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Phrase Clarity Revision” control?  
   **Answer:** Rewrite sentences so prepositional phrases attach cleanly.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Apply “phrase clarity revision” to revise: “the team of scholars present their cer paragraphs after advisory.” Show before → after and name the grammar job you fixed (item 1).
2. Apply “phrase clarity revision” to revise: “the news are on the library screen before homeroom.” Show before → after and name the grammar job you fixed (item 2).
3. Apply “phrase clarity revision” to revise: “him and i finished the outline before practice.” Show before → after and name the grammar job you fixed (item 3).
4. Apply “phrase clarity revision” to revise: “maya and jordan reviews the scholarship checklist on friday.” Show before → after and name the grammar job you fixed (item 4).
5. Apply “phrase clarity revision” to revise: “everyone brought their laptop to the east texas field trip.” Show before → after and name the grammar job you fixed (item 5).
6. Apply “phrase clarity revision” to revise: “the class are debating start times with surprising calm.” Show before → after and name the grammar job you fixed (item 6).

### Answer key (try first)

1. Before/after with correct application of the skill; job named precisely.
2. Before/after with correct application of the skill; job named precisely.
3. Before/after with correct application of the skill; job named precisely.
4. Before/after with correct application of the skill; job named precisely.
5. Before/after with correct application of the skill; job named precisely.
6. Before/after with correct application of the skill; job named precisely.

## Exit ticket

1. In one sentence, what does “Phrase Clarity Revision” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Phrase Clarity Revision” and solve it.
', "objectives" = '• Rewrite sentences so prepositional phrases attach cleanly.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Rewrite sentences so prepositional phrases attach cleanly.' WHERE "id" = 'ppg6ebdf9f3541760fb0301fe' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6efe58786183a01b3746ba','ppg6ebdf9f3541760fb0301fe',NULL,'MULTIPLE_CHOICE','Best habit for “Phrase Clarity Revision”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e52aeacae95edca7fc4ac','ppg6ebdf9f3541760fb0301fe',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e0d122b1efe335554456c','ppg6ebdf9f3541760fb0301fe',NULL,'MULTIPLE_CHOICE','You find an error about “Phrase Clarity Revision.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 11 L1. Subjects and Predicates (ppg6e79bafa98e7dcc30e213e)
UPDATE "Lesson" SET "content" = '# Subjects and Predicates

*Grade 6 English Language Arts · Unit 11 of 16 · Grammar: Sentences, Clauses, and Phrases · Lesson 1*

## Objective

**I can** find complete subjects and predicates in sentences.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Subjects and Predicates.”

## Teach

### Big idea

**Subjects and Predicates.** Find complete subjects and predicates in sentences. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Subjects and Predicates.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Subjects and Predicates.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Subjects and Predicates,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Subjects and Predicates.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Subjects and Predicates” control?  
   **Answer:** Find complete subjects and predicates in sentences.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Draw a line between complete subject and predicate: “The tired hikers near Tyler reached the muddy marker.”
2. Draw a line between complete subject and predicate: “The tired hikers near Tyler reached the muddy marker.”
3. Draw a line between complete subject and predicate: “The tired hikers near Tyler reached the muddy marker.”
4. Draw a line between complete subject and predicate: “The tired hikers near Tyler reached the muddy marker.”
5. Draw a line between complete subject and predicate: “The tired hikers near Tyler reached the muddy marker.”
6. Draw a line between complete subject and predicate: “The tired hikers near Tyler reached the muddy marker.”

### Answer key (try first)

1. Subject: The tired hikers near Tyler | Predicate: reached the muddy marker.
2. Subject: The tired hikers near Tyler | Predicate: reached the muddy marker.
3. Subject: The tired hikers near Tyler | Predicate: reached the muddy marker.
4. Subject: The tired hikers near Tyler | Predicate: reached the muddy marker.
5. Subject: The tired hikers near Tyler | Predicate: reached the muddy marker.
6. Subject: The tired hikers near Tyler | Predicate: reached the muddy marker.

## Exit ticket

1. In one sentence, what does “Subjects and Predicates” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Subjects and Predicates” and solve it.
', "objectives" = '• Find complete subjects and predicates in sentences.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Find complete subjects and predicates in sentences.' WHERE "id" = 'ppg6e79bafa98e7dcc30e213e' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6efeab7b06a298e57cc276','ppg6e79bafa98e7dcc30e213e',NULL,'MULTIPLE_CHOICE','Best habit for “Subjects and Predicates”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e371a20335d03e374da3e','ppg6e79bafa98e7dcc30e213e',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e4f676833d0d39731c7d2','ppg6e79bafa98e7dcc30e213e',NULL,'MULTIPLE_CHOICE','You find an error about “Subjects and Predicates.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 11 L2. Independent vs Dependent Clauses (ppg6ee82612253b1d5def035b)
UPDATE "Lesson" SET "content" = '# Independent vs Dependent Clauses

*Grade 6 English Language Arts · Unit 11 of 16 · Grammar: Sentences, Clauses, and Phrases · Lesson 2*

## Objective

**I can** label clauses and explain what each can do alone.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Independent vs Dependent Clauses.”

## Teach

### Big idea

**Independent vs Dependent Clauses.** Label clauses and explain what each can do alone. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Independent vs Dependent Clauses.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Independent vs Dependent Clauses.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Independent vs Dependent Clauses,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Independent vs Dependent Clauses.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Independent vs Dependent Clauses” control?  
   **Answer:** Label clauses and explain what each can do alone.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Label Ind/Dep: “when the letter arrived” / “Maya washed her hands” / “because hope felt heavy.” Make one complex sentence.
2. Label Ind/Dep: “when the letter arrived” / “Maya washed her hands” / “because hope felt heavy.” Make one complex sentence.
3. Label Ind/Dep: “when the letter arrived” / “Maya washed her hands” / “because hope felt heavy.” Make one complex sentence.
4. Label Ind/Dep: “when the letter arrived” / “Maya washed her hands” / “because hope felt heavy.” Make one complex sentence.
5. Label Ind/Dep: “when the letter arrived” / “Maya washed her hands” / “because hope felt heavy.” Make one complex sentence.
6. Label Ind/Dep: “when the letter arrived” / “Maya washed her hands” / “because hope felt heavy.” Make one complex sentence.

### Answer key (try first)

1. Dep; Ind; Dep. Complex sample combines dep+ind with comma if needed.
2. Dep; Ind; Dep. Complex sample combines dep+ind with comma if needed.
3. Dep; Ind; Dep. Complex sample combines dep+ind with comma if needed.
4. Dep; Ind; Dep. Complex sample combines dep+ind with comma if needed.
5. Dep; Ind; Dep. Complex sample combines dep+ind with comma if needed.
6. Dep; Ind; Dep. Complex sample combines dep+ind with comma if needed.

## Exit ticket

1. In one sentence, what does “Independent vs Dependent Clauses” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Independent vs Dependent Clauses” and solve it.
', "objectives" = '• Label clauses and explain what each can do alone.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Label clauses and explain what each can do alone.' WHERE "id" = 'ppg6ee82612253b1d5def035b' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e775283f6c106e4720ef2','ppg6ee82612253b1d5def035b',NULL,'MULTIPLE_CHOICE','Best habit for “Independent vs Dependent Clauses”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ec9cb53bcfd65f221ba93','ppg6ee82612253b1d5def035b',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e10ae9e2e2d8e16722950','ppg6ee82612253b1d5def035b',NULL,'MULTIPLE_CHOICE','You find an error about “Independent vs Dependent Clauses.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 11 L3. Fixing Fragments (ppg6eefcd27a92d9bbd33a139)
UPDATE "Lesson" SET "content" = '# Fixing Fragments

*Grade 6 English Language Arts · Unit 11 of 16 · Grammar: Sentences, Clauses, and Phrases · Lesson 3*

## Objective

**I can** repair fragments by completing the thought.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Fixing Fragments.”

## Teach

### Big idea

**Fixing Fragments.** Repair fragments by completing the thought. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Fixing Fragments.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Fixing Fragments.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Fixing Fragments,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Fixing Fragments.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Fixing Fragments” control?  
   **Answer:** Repair fragments by completing the thought.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Fix fragments: “Because the envelope was thin.” “Waiting on the porch.”
2. Fix fragments: “Because the envelope was thin.” “Waiting on the porch.”
3. Fix fragments: “Because the envelope was thin.” “Waiting on the porch.”
4. Fix fragments: “Because the envelope was thin.” “Waiting on the porch.”
5. Fix fragments: “Because the envelope was thin.” “Waiting on the porch.”
6. Fix fragments: “Because the envelope was thin.” “Waiting on the porch.”

### Answer key (try first)

1. Add independent clauses — e.g., Because the envelope was thin, Maya paused.
2. Add independent clauses — e.g., Because the envelope was thin, Maya paused.
3. Add independent clauses — e.g., Because the envelope was thin, Maya paused.
4. Add independent clauses — e.g., Because the envelope was thin, Maya paused.
5. Add independent clauses — e.g., Because the envelope was thin, Maya paused.
6. Add independent clauses — e.g., Because the envelope was thin, Maya paused.

## Exit ticket

1. In one sentence, what does “Fixing Fragments” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Fixing Fragments” and solve it.
', "objectives" = '• Repair fragments by completing the thought.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Repair fragments by completing the thought.' WHERE "id" = 'ppg6eefcd27a92d9bbd33a139' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ed1134ef7415bf2ec8894','ppg6eefcd27a92d9bbd33a139',NULL,'MULTIPLE_CHOICE','Best habit for “Fixing Fragments”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e719c0b23fb7b2100d433','ppg6eefcd27a92d9bbd33a139',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5e74f934d9e546be5eaa','ppg6eefcd27a92d9bbd33a139',NULL,'MULTIPLE_CHOICE','You find an error about “Fixing Fragments.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 11 L4. Fixing Run-Ons and Comma Splices (ppg6e5bf829068c238e27aa44)
UPDATE "Lesson" SET "content" = '# Fixing Run-Ons and Comma Splices

*Grade 6 English Language Arts · Unit 11 of 16 · Grammar: Sentences, Clauses, and Phrases · Lesson 4*

## Objective

**I can** separate or join clauses with correct punctuation.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Fixing Run-Ons and Comma Splices.”

## Teach

### Big idea

**Fixing Run-Ons and Comma Splices.** Separate or join clauses with correct punctuation. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Fixing Run-Ons and Comma Splices.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Fixing Run-Ons and Comma Splices.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Fixing Run-Ons and Comma Splices,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Fixing Run-Ons and Comma Splices.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Fixing Run-Ons and Comma Splices” control?  
   **Answer:** Separate or join clauses with correct punctuation.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Fix two ways: “Maya paused, she washed her hands.” (comma splice)
2. Fix two ways: “Maya paused, she washed her hands.” (comma splice)
3. Fix two ways: “Maya paused, she washed her hands.” (comma splice)
4. Fix two ways: “Maya paused, she washed her hands.” (comma splice)
5. Fix two ways: “Maya paused, she washed her hands.” (comma splice)
6. Fix two ways: “Maya paused, she washed her hands.” (comma splice)

### Answer key (try first)

1. Period/semicolon/comma+FANBOYS / because subordination — any two correct fixes.
2. Period/semicolon/comma+FANBOYS / because subordination — any two correct fixes.
3. Period/semicolon/comma+FANBOYS / because subordination — any two correct fixes.
4. Period/semicolon/comma+FANBOYS / because subordination — any two correct fixes.
5. Period/semicolon/comma+FANBOYS / because subordination — any two correct fixes.
6. Period/semicolon/comma+FANBOYS / because subordination — any two correct fixes.

## Exit ticket

1. In one sentence, what does “Fixing Run-Ons and Comma Splices” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Fixing Run-Ons and Comma Splices” and solve it.
', "objectives" = '• Separate or join clauses with correct punctuation.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Separate or join clauses with correct punctuation.' WHERE "id" = 'ppg6e5bf829068c238e27aa44' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ea2b9af4c168d91687b79','ppg6e5bf829068c238e27aa44',NULL,'MULTIPLE_CHOICE','Best habit for “Fixing Run-Ons and Comma Splices”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e8ae1cf4912fa5428f4e1','ppg6e5bf829068c238e27aa44',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ef0778dfd55fa5e9e6bbe','ppg6e5bf829068c238e27aa44',NULL,'MULTIPLE_CHOICE','You find an error about “Fixing Run-Ons and Comma Splices.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 11 L5. Simple, Compound, and Complex (ppg6e0929399b0ebbce4e2821)
UPDATE "Lesson" SET "content" = '# Simple, Compound, and Complex

*Grade 6 English Language Arts · Unit 11 of 16 · Grammar: Sentences, Clauses, and Phrases · Lesson 5*

## Objective

**I can** build varied sentence types on purpose.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Simple, Compound, and Complex.”

## Teach

### Big idea

**Simple, Compound, and Complex.** Build varied sentence types on purpose. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Simple, Compound, and Complex.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Simple, Compound, and Complex.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Simple, Compound, and Complex,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Simple, Compound, and Complex.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Simple, Compound, and Complex” control?  
   **Answer:** Build varied sentence types on purpose.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Write one simple, one compound (FANBOYS), and one complex sentence about the trail markers.
2. Write one simple, one compound (FANBOYS), and one complex sentence about the trail markers.
3. Write one simple, one compound (FANBOYS), and one complex sentence about the trail markers.
4. Write one simple, one compound (FANBOYS), and one complex sentence about the trail markers.
5. Write one simple, one compound (FANBOYS), and one complex sentence about the trail markers.
6. Write one simple, one compound (FANBOYS), and one complex sentence about the trail markers.

### Answer key (try first)

1. Three correct sentence types; complex needs dependent clause.
2. Three correct sentence types; complex needs dependent clause.
3. Three correct sentence types; complex needs dependent clause.
4. Three correct sentence types; complex needs dependent clause.
5. Three correct sentence types; complex needs dependent clause.
6. Three correct sentence types; complex needs dependent clause.

## Exit ticket

1. In one sentence, what does “Simple, Compound, and Complex” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Simple, Compound, and Complex” and solve it.
', "objectives" = '• Build varied sentence types on purpose.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Build varied sentence types on purpose.' WHERE "id" = 'ppg6e0929399b0ebbce4e2821' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e4613873521eff2e96f96','ppg6e0929399b0ebbce4e2821',NULL,'MULTIPLE_CHOICE','Best habit for “Simple, Compound, and Complex”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e2a5a88bfcd04dc7be4ba','ppg6e0929399b0ebbce4e2821',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e2e54de4a805b7a89acf5','ppg6e0929399b0ebbce4e2821',NULL,'MULTIPLE_CHOICE','You find an error about “Simple, Compound, and Complex.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 11 L6. Combining Sentences for Flow (ppg6e809d246aba2c7777f570)
UPDATE "Lesson" SET "content" = '# Combining Sentences for Flow

*Grade 6 English Language Arts · Unit 11 of 16 · Grammar: Sentences, Clauses, and Phrases · Lesson 6*

## Objective

**I can** combine choppy sentences without creating monsters.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Combining Sentences for Flow.”

## Teach

### Big idea

**Combining Sentences for Flow.** Combine choppy sentences without creating monsters. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Combining Sentences for Flow.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Combining Sentences for Flow.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Combining Sentences for Flow,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Combining Sentences for Flow.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Combining Sentences for Flow” control?  
   **Answer:** Combine choppy sentences without creating monsters.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Combine without a monster sentence: “Jordan breathed. Jordan shot. The ball went in.”
2. Combine without a monster sentence: “Jordan breathed. Jordan shot. The ball went in.”
3. Combine without a monster sentence: “Jordan breathed. Jordan shot. The ball went in.”
4. Combine without a monster sentence: “Jordan breathed. Jordan shot. The ball went in.”
5. Combine without a monster sentence: “Jordan breathed. Jordan shot. The ball went in.”
6. Combine without a monster sentence: “Jordan breathed. Jordan shot. The ball went in.”

### Answer key (try first)

1. E.g., After Jordan breathed, he shot, and the ball went in.
2. E.g., After Jordan breathed, he shot, and the ball went in.
3. E.g., After Jordan breathed, he shot, and the ball went in.
4. E.g., After Jordan breathed, he shot, and the ball went in.
5. E.g., After Jordan breathed, he shot, and the ball went in.
6. E.g., After Jordan breathed, he shot, and the ball went in.

## Exit ticket

1. In one sentence, what does “Combining Sentences for Flow” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Combining Sentences for Flow” and solve it.
', "objectives" = '• Combine choppy sentences without creating monsters.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Combine choppy sentences without creating monsters.' WHERE "id" = 'ppg6e809d246aba2c7777f570' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e271b551de4fdfdeb98d1','ppg6e809d246aba2c7777f570',NULL,'MULTIPLE_CHOICE','Best habit for “Combining Sentences for Flow”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ec06ab4502861dd9a9613','ppg6e809d246aba2c7777f570',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ef3da67cd3f2bedbccbd0','ppg6e809d246aba2c7777f570',NULL,'MULTIPLE_CHOICE','You find an error about “Combining Sentences for Flow.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 11 L7. Sentence Craft Unit Review (ppg6eb7d951ade3eac875dae1)
UPDATE "Lesson" SET "content" = '# Sentence Craft Unit Review

*Grade 6 English Language Arts · Unit 11 of 16 · Grammar: Sentences, Clauses, and Phrases · Lesson 7*

## Objective

**I can** mixed clause and sentence-type revision practice.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Sentence Craft Unit Review.”

## Teach

### Big idea

**Sentence Craft Unit Review.** Mixed clause and sentence-type revision practice. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Sentence Craft Unit Review.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Sentence Craft Unit Review.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Sentence Craft Unit Review,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Sentence Craft Unit Review.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Sentence Craft Unit Review” control?  
   **Answer:** Mixed clause and sentence-type revision practice.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Workshop item 1 for “sentence craft unit review”: Revise this sentence for today’s skill and explain the change: “maya and jordan reviews the scholarship checklist on friday.”
2. Workshop item 2 for “sentence craft unit review”: Revise this sentence for today’s skill and explain the change: “the team of scholars present their cer paragraphs after advisory.”
3. Workshop item 3 for “sentence craft unit review”: Revise this sentence for today’s skill and explain the change: “the class are debating start times with surprising calm.”
4. Workshop item 4 for “sentence craft unit review”: Revise this sentence for today’s skill and explain the change: “the team of scholars present their cer paragraphs after advisory.”
5. Workshop item 5 for “sentence craft unit review”: Revise this sentence for today’s skill and explain the change: “the class are debating start times with surprising calm.”
6. Workshop item 6 for “sentence craft unit review”: Revise this sentence for today’s skill and explain the change: “him and i finished the outline before practice.”

### Answer key (try first)

1. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
2. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
3. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
4. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
5. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
6. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.

## Exit ticket

1. In one sentence, what does “Sentence Craft Unit Review” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Sentence Craft Unit Review” and solve it.
', "objectives" = '• Mixed clause and sentence-type revision practice.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Mixed clause and sentence-type revision practice.' WHERE "id" = 'ppg6eb7d951ade3eac875dae1' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e2f0df23d9696f52ea931','ppg6eb7d951ade3eac875dae1',NULL,'MULTIPLE_CHOICE','Best habit for “Sentence Craft Unit Review”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ee94d54a1e4efca987ce8','ppg6eb7d951ade3eac875dae1',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ec61eba3583bef9100d40','ppg6eb7d951ade3eac875dae1',NULL,'MULTIPLE_CHOICE','You find an error about “Sentence Craft Unit Review.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 12 L1. Claim, Evidence, Reasoning (CER) (ppg6e6fd1be4ad82baf95155e)
UPDATE "Lesson" SET "content" = '# Claim, Evidence, Reasoning (CER)

*Grade 6 English Language Arts · Unit 12 of 16 · Reading: Integration of Knowledge and Ideas · Lesson 1*

## Objective

**I can** build CER paragraphs that link evidence to a precise claim.

## Warm-up (2 minutes)

Skim:

> Maya paused at the mailbox.

One sentence: what is it mostly about?

## Teach

### Big idea

**Claim, Evidence, Reasoning (CER).** Build CER paragraphs that link evidence to a precise claim. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Maya paused at the mailbox. The thin envelope looked official. She washed her hands, then opened it to find three sentences and a deadline. Hope, she realized, could be heavy.

Apply “Claim, Evidence, Reasoning (CER)”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Claim, Evidence, Reasoning (CER)” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Zoom on one paragraph: claim vs detail. Connect the marks to “Claim, Evidence, Reasoning (CER).”

### Common mistake (this lesson only)

Answering “Claim, Evidence, Reasoning (CER)” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Claim, Evidence, Reasoning (CER)”?  
   **Answer:** Build CER paragraphs that link evidence to a precise claim.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Write a mini-CER: Claim about why Maya waits to open the letter. Evidence (detail). Reasoning (so what?).
2. Write a mini-CER: Claim about why Maya waits to open the letter. Evidence (detail). Reasoning (so what?).
3. Write a mini-CER: Claim about why Maya waits to open the letter. Evidence (detail). Reasoning (so what?).
4. Write a mini-CER: Claim about why Maya waits to open the letter. Evidence (detail). Reasoning (so what?).
5. Write a mini-CER: Claim about why Maya waits to open the letter. Evidence (detail). Reasoning (so what?).
6. Write a mini-CER: Claim about why Maya waits to open the letter. Evidence (detail). Reasoning (so what?).

### Answer key (try first)

1. C+E+R all present; reasoning bridges evidence to claim.
2. C+E+R all present; reasoning bridges evidence to claim.
3. C+E+R all present; reasoning bridges evidence to claim.
4. C+E+R all present; reasoning bridges evidence to claim.
5. C+E+R all present; reasoning bridges evidence to claim.
6. C+E+R all present; reasoning bridges evidence to claim.

## Exit ticket

1. In one sentence, what does “Claim, Evidence, Reasoning (CER)” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Claim, Evidence, Reasoning (CER)” and solve it.
', "objectives" = '• Build CER paragraphs that link evidence to a precise claim.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Build CER paragraphs that link evidence to a precise claim.' WHERE "id" = 'ppg6e6fd1be4ad82baf95155e' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eeaaf0441e2a97262dfd9','ppg6e6fd1be4ad82baf95155e',NULL,'MULTIPLE_CHOICE','Which best shows “Claim, Evidence, Reasoning (CER)”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e1d413386e0e9ddd0a00c','ppg6e6fd1be4ad82baf95155e',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e4c457e342dbe6081c0eb','ppg6e6fd1be4ad82baf95155e',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 12 L2. Comparing Two Texts on One Topic (ppg6e42afb40731f1d332dd3b)
UPDATE "Lesson" SET "content" = '# Comparing Two Texts on One Topic

*Grade 6 English Language Arts · Unit 12 of 16 · Reading: Integration of Knowledge and Ideas · Lesson 2*

## Objective

**I can** compare claims, evidence, and organization across texts.

## Warm-up (2 minutes)

Skim:

> School start times tug between biology and logistics.

One sentence: what is it mostly about?

## Teach

### Big idea

**Comparing Two Texts on One Topic.** Compare claims, evidence, and organization across texts. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> School start times tug between biology and logistics. Many middle-school students fall asleep later, so early bells cut into deep sleep. Working families often need earlier schedules to match jobs and buses.

Apply “Comparing Two Texts on One Topic”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Comparing Two Texts on One Topic” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Zoom on one paragraph: claim vs detail. Connect the marks to “Comparing Two Texts on One Topic.”

### Common mistake (this lesson only)

Answering “Comparing Two Texts on One Topic” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Comparing Two Texts on One Topic”?  
   **Answer:** Compare claims, evidence, and organization across texts.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Compare how the trail text and the start-times text each use a “problem” frame. One similarity, one difference, in complete sentences.
2. Compare how the trail text and the start-times text each use a “problem” frame. One similarity, one difference, in complete sentences.
3. Compare how the trail text and the start-times text each use a “problem” frame. One similarity, one difference, in complete sentences.
4. Compare how the trail text and the start-times text each use a “problem” frame. One similarity, one difference, in complete sentences.
5. Compare how the trail text and the start-times text each use a “problem” frame. One similarity, one difference, in complete sentences.
6. Compare how the trail text and the start-times text each use a “problem” frame. One similarity, one difference, in complete sentences.

### Answer key (try first)

1. Both frame real-world tensions; differ in topic (safety vs schedules) and evidence types.
2. Both frame real-world tensions; differ in topic (safety vs schedules) and evidence types.
3. Both frame real-world tensions; differ in topic (safety vs schedules) and evidence types.
4. Both frame real-world tensions; differ in topic (safety vs schedules) and evidence types.
5. Both frame real-world tensions; differ in topic (safety vs schedules) and evidence types.
6. Both frame real-world tensions; differ in topic (safety vs schedules) and evidence types.

## Exit ticket

1. In one sentence, what does “Comparing Two Texts on One Topic” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Comparing Two Texts on One Topic” and solve it.
', "objectives" = '• Compare claims, evidence, and organization across texts.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Compare claims, evidence, and organization across texts.' WHERE "id" = 'ppg6e42afb40731f1d332dd3b' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ec8ae4ac28958e3cba551','ppg6e42afb40731f1d332dd3b',NULL,'MULTIPLE_CHOICE','Which best shows “Comparing Two Texts on One Topic”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e075445b604a26ae005c6','ppg6e42afb40731f1d332dd3b',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5f6e9bb4302fc932f5f1','ppg6e42afb40731f1d332dd3b',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 12 L3. Evaluating an Argument (ppg6e5022b4a7e99240c59ef5)
UPDATE "Lesson" SET "content" = '# Evaluating an Argument

*Grade 6 English Language Arts · Unit 12 of 16 · Reading: Integration of Knowledge and Ideas · Lesson 3*

## Objective

**I can** judge whether reasons and evidence are sufficient and fair.

## Warm-up (2 minutes)

Skim:

> Jordan had practiced free throws so often his sneakers knew the floorboards.

One sentence: what is it mostly about?

## Teach

### Big idea

**Evaluating an Argument.** Judge whether reasons and evidence are sufficient and fair. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Jordan had practiced free throws so often his sneakers knew the floorboards. On scholarship night the gym felt different. Coach said, "Breathe like you do in study hall." The first shot rimmed out; the second fell through.

Apply “Evaluating an Argument”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Evaluating an Argument” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Zoom on one paragraph: claim vs detail. Connect the marks to “Evaluating an Argument.”

### Common mistake (this lesson only)

Answering “Evaluating an Argument” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Evaluating an Argument”?  
   **Answer:** Judge whether reasons and evidence are sufficient and fair.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Label fact vs opinion: (1) “Many middle-school students naturally fall asleep later.” (2) “Early bells are unfair.” Then rewrite (2) as a checkable claim.
2. Label fact vs opinion: (1) “Many middle-school students naturally fall asleep later.” (2) “Early bells are unfair.” Then rewrite (2) as a checkable claim.
3. Label fact vs opinion: (1) “Many middle-school students naturally fall asleep later.” (2) “Early bells are unfair.” Then rewrite (2) as a checkable claim.
4. Label fact vs opinion: (1) “Many middle-school students naturally fall asleep later.” (2) “Early bells are unfair.” Then rewrite (2) as a checkable claim.
5. Label fact vs opinion: (1) “Many middle-school students naturally fall asleep later.” (2) “Early bells are unfair.” Then rewrite (2) as a checkable claim.
6. Label fact vs opinion: (1) “Many middle-school students naturally fall asleep later.” (2) “Early bells are unfair.” Then rewrite (2) as a checkable claim.

### Answer key (try first)

1. (1) factual claim needing evidence; (2) opinion/loaded. Rewrite: measurable effects on sleep/attendance.
2. (1) factual claim needing evidence; (2) opinion/loaded. Rewrite: measurable effects on sleep/attendance.
3. (1) factual claim needing evidence; (2) opinion/loaded. Rewrite: measurable effects on sleep/attendance.
4. (1) factual claim needing evidence; (2) opinion/loaded. Rewrite: measurable effects on sleep/attendance.
5. (1) factual claim needing evidence; (2) opinion/loaded. Rewrite: measurable effects on sleep/attendance.
6. (1) factual claim needing evidence; (2) opinion/loaded. Rewrite: measurable effects on sleep/attendance.

## Exit ticket

1. In one sentence, what does “Evaluating an Argument” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Evaluating an Argument” and solve it.
', "objectives" = '• Judge whether reasons and evidence are sufficient and fair.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Judge whether reasons and evidence are sufficient and fair.' WHERE "id" = 'ppg6e5022b4a7e99240c59ef5' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eecf001250b22ba1303e4','ppg6e5022b4a7e99240c59ef5',NULL,'MULTIPLE_CHOICE','Which best shows “Evaluating an Argument”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6edd1f2f6c283650227af5','ppg6e5022b4a7e99240c59ef5',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eb7ea6ac6b7fcd3d2ddd9','ppg6e5022b4a7e99240c59ef5',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 12 L4. Fact, Opinion, and Loaded Language (ppg6e37c85b3762478bdb7929)
UPDATE "Lesson" SET "content" = '# Fact, Opinion, and Loaded Language

*Grade 6 English Language Arts · Unit 12 of 16 · Reading: Integration of Knowledge and Ideas · Lesson 4*

## Objective

**I can** separate checkable facts from judgment words.

## Warm-up (2 minutes)

Skim:

> Jordan had practiced free throws so often his sneakers knew the floorboards.

One sentence: what is it mostly about?

## Teach

### Big idea

**Fact, Opinion, and Loaded Language.** Separate checkable facts from judgment words. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Jordan had practiced free throws so often his sneakers knew the floorboards. On scholarship night the gym felt different. Coach said, "Breathe like you do in study hall." The first shot rimmed out; the second fell through.

Apply “Fact, Opinion, and Loaded Language”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Fact, Opinion, and Loaded Language” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Zoom on one paragraph: claim vs detail. Connect the marks to “Fact, Opinion, and Loaded Language.”

### Common mistake (this lesson only)

Answering “Fact, Opinion, and Loaded Language” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Fact, Opinion, and Loaded Language”?  
   **Answer:** Separate checkable facts from judgment words.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Label fact vs opinion: (1) “Many middle-school students naturally fall asleep later.” (2) “Early bells are unfair.” Then rewrite (2) as a checkable claim.
2. Label fact vs opinion: (1) “Many middle-school students naturally fall asleep later.” (2) “Early bells are unfair.” Then rewrite (2) as a checkable claim.
3. Label fact vs opinion: (1) “Many middle-school students naturally fall asleep later.” (2) “Early bells are unfair.” Then rewrite (2) as a checkable claim.
4. Label fact vs opinion: (1) “Many middle-school students naturally fall asleep later.” (2) “Early bells are unfair.” Then rewrite (2) as a checkable claim.
5. Label fact vs opinion: (1) “Many middle-school students naturally fall asleep later.” (2) “Early bells are unfair.” Then rewrite (2) as a checkable claim.
6. Label fact vs opinion: (1) “Many middle-school students naturally fall asleep later.” (2) “Early bells are unfair.” Then rewrite (2) as a checkable claim.

### Answer key (try first)

1. (1) factual claim needing evidence; (2) opinion/loaded. Rewrite: measurable effects on sleep/attendance.
2. (1) factual claim needing evidence; (2) opinion/loaded. Rewrite: measurable effects on sleep/attendance.
3. (1) factual claim needing evidence; (2) opinion/loaded. Rewrite: measurable effects on sleep/attendance.
4. (1) factual claim needing evidence; (2) opinion/loaded. Rewrite: measurable effects on sleep/attendance.
5. (1) factual claim needing evidence; (2) opinion/loaded. Rewrite: measurable effects on sleep/attendance.
6. (1) factual claim needing evidence; (2) opinion/loaded. Rewrite: measurable effects on sleep/attendance.

## Exit ticket

1. In one sentence, what does “Fact, Opinion, and Loaded Language” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Fact, Opinion, and Loaded Language” and solve it.
', "objectives" = '• Separate checkable facts from judgment words.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Separate checkable facts from judgment words.' WHERE "id" = 'ppg6e37c85b3762478bdb7929' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ed76e7002dae597566971','ppg6e37c85b3762478bdb7929',NULL,'MULTIPLE_CHOICE','Which best shows “Fact, Opinion, and Loaded Language”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e7a754be9589378f17da0','ppg6e37c85b3762478bdb7929',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e60b8c441123db017efbf','ppg6e37c85b3762478bdb7929',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 12 L5. Visuals That Support a Text (ppg6ec60160e81599e566c653)
UPDATE "Lesson" SET "content" = '# Visuals That Support a Text

*Grade 6 English Language Arts · Unit 12 of 16 · Reading: Integration of Knowledge and Ideas · Lesson 5*

## Objective

**I can** explain how a chart, map, or image adds to meaning.

## Warm-up (2 minutes)

Skim:

> Trail crews near Tyler mark muddy sections with wooden signs.

One sentence: what is it mostly about?

## Teach

### Big idea

**Visuals That Support a Text.** Explain how a chart, map, or image adds to meaning. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Trail crews near Tyler mark muddy sections with wooden signs. Hikers who slow down protect the path and the plants beside it. Rangers say most injuries happen when people rush the last half mile.

Apply “Visuals That Support a Text”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Visuals That Support a Text” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Zoom on one paragraph: claim vs detail. Connect the marks to “Visuals That Support a Text.”

### Common mistake (this lesson only)

Answering “Visuals That Support a Text” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Visuals That Support a Text”?  
   **Answer:** Explain how a chart, map, or image adds to meaning.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
2. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
3. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
4. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
5. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
6. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.

### Answer key (try first)

1. Visual would quantify “last half mile” risk and support the slow-down claim with data.
2. Visual would quantify “last half mile” risk and support the slow-down claim with data.
3. Visual would quantify “last half mile” risk and support the slow-down claim with data.
4. Visual would quantify “last half mile” risk and support the slow-down claim with data.
5. Visual would quantify “last half mile” risk and support the slow-down claim with data.
6. Visual would quantify “last half mile” risk and support the slow-down claim with data.

## Exit ticket

1. In one sentence, what does “Visuals That Support a Text” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Visuals That Support a Text” and solve it.
', "objectives" = '• Explain how a chart, map, or image adds to meaning.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Explain how a chart, map, or image adds to meaning.' WHERE "id" = 'ppg6ec60160e81599e566c653' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e62ce58185eaee1d3f7df','ppg6ec60160e81599e566c653',NULL,'MULTIPLE_CHOICE','Which best shows “Visuals That Support a Text”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ed051e7bc2e9e33717de7','ppg6ec60160e81599e566c653',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ecce3185527dfe58e5957','ppg6ec60160e81599e566c653',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 12 L6. Synthesizing Across Sources (ppg6eb29abb271d135e78833c)
UPDATE "Lesson" SET "content" = '# Synthesizing Across Sources

*Grade 6 English Language Arts · Unit 12 of 16 · Reading: Integration of Knowledge and Ideas · Lesson 6*

## Objective

**I can** write a synthesis that notes agreement and tension.

## Warm-up (2 minutes)

Skim:

> Jordan had practiced free throws so often his sneakers knew the floorboards.

One sentence: what is it mostly about?

## Teach

### Big idea

**Synthesizing Across Sources.** Write a synthesis that notes agreement and tension. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Jordan had practiced free throws so often his sneakers knew the floorboards. On scholarship night the gym felt different. Coach said, "Breathe like you do in study hall." The first shot rimmed out; the second fell through.

Apply “Synthesizing Across Sources”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Synthesizing Across Sources” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Zoom on one paragraph: claim vs detail. Connect the marks to “Synthesizing Across Sources.”

### Common mistake (this lesson only)

Answering “Synthesizing Across Sources” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Synthesizing Across Sources”?  
   **Answer:** Write a synthesis that notes agreement and tension.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
2. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
3. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
4. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
5. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
6. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.

### Answer key (try first)

1. Visual would quantify “last half mile” risk and support the slow-down claim with data.
2. Visual would quantify “last half mile” risk and support the slow-down claim with data.
3. Visual would quantify “last half mile” risk and support the slow-down claim with data.
4. Visual would quantify “last half mile” risk and support the slow-down claim with data.
5. Visual would quantify “last half mile” risk and support the slow-down claim with data.
6. Visual would quantify “last half mile” risk and support the slow-down claim with data.

## Exit ticket

1. In one sentence, what does “Synthesizing Across Sources” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Synthesizing Across Sources” and solve it.
', "objectives" = '• Write a synthesis that notes agreement and tension.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Write a synthesis that notes agreement and tension.' WHERE "id" = 'ppg6eb29abb271d135e78833c' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ea96727ea7c573b1ec55d','ppg6eb29abb271d135e78833c',NULL,'MULTIPLE_CHOICE','Which best shows “Synthesizing Across Sources”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5abe0bbd46f660bc5e9f','ppg6eb29abb271d135e78833c',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e977b56ab3c23501b180e','ppg6eb29abb271d135e78833c',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 12 L7. Integration Habits Review (ppg6e8dcf78f940ab78c69679)
UPDATE "Lesson" SET "content" = '# Integration Habits Review

*Grade 6 English Language Arts · Unit 12 of 16 · Reading: Integration of Knowledge and Ideas · Lesson 7*

## Objective

**I can** apply CER + comparison moves in a short performance task.

## Warm-up (2 minutes)

Skim:

> School start times tug between biology and logistics.

One sentence: what is it mostly about?

## Teach

### Big idea

**Integration Habits Review.** Apply CER + comparison moves in a short performance task. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> School start times tug between biology and logistics. Many middle-school students fall asleep later, so early bells cut into deep sleep. Working families often need earlier schedules to match jobs and buses.

Apply “Integration Habits Review”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Integration Habits Review” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Zoom on one paragraph: claim vs detail. Connect the marks to “Integration Habits Review.”

### Common mistake (this lesson only)

Answering “Integration Habits Review” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Integration Habits Review”?  
   **Answer:** Apply CER + comparison moves in a short performance task.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
2. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
3. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
4. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
5. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
6. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.

### Answer key (try first)

1. Visual would quantify “last half mile” risk and support the slow-down claim with data.
2. Visual would quantify “last half mile” risk and support the slow-down claim with data.
3. Visual would quantify “last half mile” risk and support the slow-down claim with data.
4. Visual would quantify “last half mile” risk and support the slow-down claim with data.
5. Visual would quantify “last half mile” risk and support the slow-down claim with data.
6. Visual would quantify “last half mile” risk and support the slow-down claim with data.

## Exit ticket

1. In one sentence, what does “Integration Habits Review” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Integration Habits Review” and solve it.
', "objectives" = '• Apply CER + comparison moves in a short performance task.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Apply CER + comparison moves in a short performance task.' WHERE "id" = 'ppg6e8dcf78f940ab78c69679' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e54cd37b6270aa1232bdb','ppg6e8dcf78f940ab78c69679',NULL,'MULTIPLE_CHOICE','Which best shows “Integration Habits Review”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6efb445a5c40ee52c5c148','ppg6e8dcf78f940ab78c69679',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e2e021fdc83c93ef1f4f5','ppg6e8dcf78f940ab78c69679',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 13 L1. Paired Passages: Sleep and Schedules (ppg6e6d760f610843272a67f6)
UPDATE "Lesson" SET "content" = '# Paired Passages: Sleep and Schedules

*Grade 6 English Language Arts · Unit 13 of 16 · Reading: Integration — Long Passages · Lesson 1*

## Objective

**I can** compare two longer texts on the same issue.

## Warm-up (2 minutes)

Skim:

> Maya paused at the mailbox.

One sentence: what is it mostly about?

## Teach

### Big idea

**Paired Passages: Sleep and Schedules.** Compare two longer texts on the same issue. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Maya paused at the mailbox. The thin envelope looked official. She washed her hands, then opened it to find three sentences and a deadline. Hope, she realized, could be heavy.

Apply “Paired Passages: Sleep and Schedules”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Paired Passages: Sleep and Schedules” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Across chunks, keep a gist list; then synthesize. Connect the marks to “Paired Passages: Sleep and Schedules.”

### Common mistake (this lesson only)

Answering “Paired Passages: Sleep and Schedules” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Paired Passages: Sleep and Schedules”?  
   **Answer:** Compare two longer texts on the same issue.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Compare how the trail text and the start-times text each use a “problem” frame. One similarity, one difference, in complete sentences.
2. Compare how the trail text and the start-times text each use a “problem” frame. One similarity, one difference, in complete sentences.
3. Compare how the trail text and the start-times text each use a “problem” frame. One similarity, one difference, in complete sentences.
4. Compare how the trail text and the start-times text each use a “problem” frame. One similarity, one difference, in complete sentences.
5. Compare how the trail text and the start-times text each use a “problem” frame. One similarity, one difference, in complete sentences.
6. Compare how the trail text and the start-times text each use a “problem” frame. One similarity, one difference, in complete sentences.

### Answer key (try first)

1. Both frame real-world tensions; differ in topic (safety vs schedules) and evidence types.
2. Both frame real-world tensions; differ in topic (safety vs schedules) and evidence types.
3. Both frame real-world tensions; differ in topic (safety vs schedules) and evidence types.
4. Both frame real-world tensions; differ in topic (safety vs schedules) and evidence types.
5. Both frame real-world tensions; differ in topic (safety vs schedules) and evidence types.
6. Both frame real-world tensions; differ in topic (safety vs schedules) and evidence types.

## Exit ticket

1. In one sentence, what does “Paired Passages: Sleep and Schedules” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Paired Passages: Sleep and Schedules” and solve it.
', "objectives" = '• Compare two longer texts on the same issue.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Compare two longer texts on the same issue.' WHERE "id" = 'ppg6e6d760f610843272a67f6' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e29479658fb44d45d5448','ppg6e6d760f610843272a67f6',NULL,'MULTIPLE_CHOICE','Which best shows “Paired Passages: Sleep and Schedules”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e436866dac80bdf0f3310','ppg6e6d760f610843272a67f6',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ef23ccc179aad3a9fd929','ppg6e6d760f610843272a67f6',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 13 L2. Argument + Counterargument Practice (ppg6e3ad018e191c39795ce61)
UPDATE "Lesson" SET "content" = '# Argument + Counterargument Practice

*Grade 6 English Language Arts · Unit 13 of 16 · Reading: Integration — Long Passages · Lesson 2*

## Objective

**I can** track a claim and the opposing view across pages.

## Warm-up (2 minutes)

Skim:

> Trail crews near Tyler mark muddy sections with wooden signs.

One sentence: what is it mostly about?

## Teach

### Big idea

**Argument + Counterargument Practice.** Track a claim and the opposing view across pages. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Trail crews near Tyler mark muddy sections with wooden signs. Hikers who slow down protect the path and the plants beside it. Rangers say most injuries happen when people rush the last half mile.

Apply “Argument + Counterargument Practice”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Argument + Counterargument Practice” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Across chunks, keep a gist list; then synthesize. Connect the marks to “Argument + Counterargument Practice.”

### Common mistake (this lesson only)

Answering “Argument + Counterargument Practice” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Argument + Counterargument Practice”?  
   **Answer:** Track a claim and the opposing view across pages.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. State a main takeaway for “Argument + Counterargument Practice” using this excerpt:

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The secon…

Answer in a complete sentence with evidence.
2. Quote the most important phrase for “Argument + Counterargument Practice” using this excerpt:

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The secon…

Answer in a complete sentence with evidence.
3. Infer a feeling/motivation for “Argument + Counterargument Practice” using this excerpt:

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The secon…

Answer in a complete sentence with evidence.
4. Name a craft move for “Argument + Counterargument Practice” using this excerpt:

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The secon…

Answer in a complete sentence with evidence.
5. Ask a follow-up text-dependent question for “Argument + Counterargument Practice” using this excerpt:

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The secon…

Answer in a complete sentence with evidence.
6. Write a one-sentence summary of the final beat for “Argument + Counterargument Practice” using this excerpt:

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The secon…

Answer in a complete sentence with evidence.

### Answer key (try first)

1. Complete sentence + evidence pointer; aligned to state a main takeaway.
2. Complete sentence + evidence pointer; aligned to quote the most important phrase.
3. Complete sentence + evidence pointer; aligned to infer a feeling/motivation.
4. Complete sentence + evidence pointer; aligned to name a craft move.
5. Complete sentence + evidence pointer; aligned to ask a follow-up text-dependent question.
6. Complete sentence + evidence pointer; aligned to write a one-sentence summary of the final beat.

## Exit ticket

1. In one sentence, what does “Argument + Counterargument Practice” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Argument + Counterargument Practice” and solve it.
', "objectives" = '• Track a claim and the opposing view across pages.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Track a claim and the opposing view across pages.' WHERE "id" = 'ppg6e3ad018e191c39795ce61' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e18b78f510381e8f5040e','ppg6e3ad018e191c39795ce61',NULL,'MULTIPLE_CHOICE','Which best shows “Argument + Counterargument Practice”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e3adcf563f1d3317625e0','ppg6e3ad018e191c39795ce61',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6edfd69c2fbd7c1c3ed71a','ppg6e3ad018e191c39795ce61',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 13 L3. Media + Text Pairing (ppg6e86cad969844995868743)
UPDATE "Lesson" SET "content" = '# Media + Text Pairing

*Grade 6 English Language Arts · Unit 13 of 16 · Reading: Integration — Long Passages · Lesson 3*

## Objective

**I can** integrate a news-style text with a data table (original).

## Warm-up (2 minutes)

Skim:

> Maya paused at the mailbox.

One sentence: what is it mostly about?

## Teach

### Big idea

**Media + Text Pairing.** Integrate a news-style text with a data table (original). Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Maya paused at the mailbox. The thin envelope looked official. She washed her hands, then opened it to find three sentences and a deadline. Hope, she realized, could be heavy.

Apply “Media + Text Pairing”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Media + Text Pairing” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Across chunks, keep a gist list; then synthesize. Connect the marks to “Media + Text Pairing.”

### Common mistake (this lesson only)

Answering “Media + Text Pairing” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Media + Text Pairing”?  
   **Answer:** Integrate a news-style text with a data table (original).

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
2. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
3. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
4. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
5. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
6. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.

### Answer key (try first)

1. Visual would quantify “last half mile” risk and support the slow-down claim with data.
2. Visual would quantify “last half mile” risk and support the slow-down claim with data.
3. Visual would quantify “last half mile” risk and support the slow-down claim with data.
4. Visual would quantify “last half mile” risk and support the slow-down claim with data.
5. Visual would quantify “last half mile” risk and support the slow-down claim with data.
6. Visual would quantify “last half mile” risk and support the slow-down claim with data.

## Exit ticket

1. In one sentence, what does “Media + Text Pairing” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Media + Text Pairing” and solve it.
', "objectives" = '• Integrate a news-style text with a data table (original).
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Integrate a news-style text with a data table (original).' WHERE "id" = 'ppg6e86cad969844995868743' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e5fcb7ae82a8a8920a550','ppg6e86cad969844995868743',NULL,'MULTIPLE_CHOICE','Which best shows “Media + Text Pairing”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ea7aec32ec342c299055b','ppg6e86cad969844995868743',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e135315d6a6cb1d525fee','ppg6e86cad969844995868743',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 13 L4. Literature and Informational Pair (ppg6e5187bc8f86adc13a56c8)
UPDATE "Lesson" SET "content" = '# Literature and Informational Pair

*Grade 6 English Language Arts · Unit 13 of 16 · Reading: Integration — Long Passages · Lesson 4*

## Objective

**I can** connect a story theme to a related nonfiction idea.

## Warm-up (2 minutes)

Skim:

> Jordan had practiced free throws so often his sneakers knew the floorboards.

One sentence: what is it mostly about?

## Teach

### Big idea

**Literature and Informational Pair.** Connect a story theme to a related nonfiction idea. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Jordan had practiced free throws so often his sneakers knew the floorboards. On scholarship night the gym felt different. Coach said, "Breathe like you do in study hall." The first shot rimmed out; the second fell through.

Apply “Literature and Informational Pair”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Literature and Informational Pair” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Across chunks, keep a gist list; then synthesize. Connect the marks to “Literature and Informational Pair.”

### Common mistake (this lesson only)

Answering “Literature and Informational Pair” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Literature and Informational Pair”?  
   **Answer:** Connect a story theme to a related nonfiction idea.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. State a main takeaway for “Literature and Informational Pair” using this excerpt:

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.

Answer in a complete sentence with evidence.
2. Quote the most important phrase for “Literature and Informational Pair” using this excerpt:

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.

Answer in a complete sentence with evidence.
3. Infer a feeling/motivation for “Literature and Informational Pair” using this excerpt:

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.

Answer in a complete sentence with evidence.
4. Name a craft move for “Literature and Informational Pair” using this excerpt:

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.

Answer in a complete sentence with evidence.
5. Ask a follow-up text-dependent question for “Literature and Informational Pair” using this excerpt:

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.

Answer in a complete sentence with evidence.
6. Write a one-sentence summary of the final beat for “Literature and Informational Pair” using this excerpt:

> School start times are a tug-of-war between biology and logistics. Many middle-school students naturally fall asleep later, so early bells can cut into deep sleep. Working families often need earlier schedules to match jobs and bus routes.

Answer in a complete sentence with evidence.

### Answer key (try first)

1. Complete sentence + evidence pointer; aligned to state a main takeaway.
2. Complete sentence + evidence pointer; aligned to quote the most important phrase.
3. Complete sentence + evidence pointer; aligned to infer a feeling/motivation.
4. Complete sentence + evidence pointer; aligned to name a craft move.
5. Complete sentence + evidence pointer; aligned to ask a follow-up text-dependent question.
6. Complete sentence + evidence pointer; aligned to write a one-sentence summary of the final beat.

## Exit ticket

1. In one sentence, what does “Literature and Informational Pair” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Literature and Informational Pair” and solve it.
', "objectives" = '• Connect a story theme to a related nonfiction idea.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Connect a story theme to a related nonfiction idea.' WHERE "id" = 'ppg6e5187bc8f86adc13a56c8' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e2f53e18d8b8504b755a1','ppg6e5187bc8f86adc13a56c8',NULL,'MULTIPLE_CHOICE','Which best shows “Literature and Informational Pair”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e37e898c4290dfefd89b2','ppg6e5187bc8f86adc13a56c8',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e7df6417db5456746d4d4','ppg6e5187bc8f86adc13a56c8',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 13 L5. Building a Mini DBQ-Lite (ppg6e24844d9d1b8a55b0ff31)
UPDATE "Lesson" SET "content" = '# Building a Mini DBQ-Lite

*Grade 6 English Language Arts · Unit 13 of 16 · Reading: Integration — Long Passages · Lesson 5*

## Objective

**I can** use two sources to answer one compelling question.

## Warm-up (2 minutes)

Skim:

> Trail crews near Tyler mark muddy sections with wooden signs.

One sentence: what is it mostly about?

## Teach

### Big idea

**Building a Mini DBQ-Lite.** Use two sources to answer one compelling question. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Trail crews near Tyler mark muddy sections with wooden signs. Hikers who slow down protect the path and the plants beside it. Rangers say most injuries happen when people rush the last half mile.

Apply “Building a Mini DBQ-Lite”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Building a Mini DBQ-Lite” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Across chunks, keep a gist list; then synthesize. Connect the marks to “Building a Mini DBQ-Lite.”

### Common mistake (this lesson only)

Answering “Building a Mini DBQ-Lite” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Building a Mini DBQ-Lite”?  
   **Answer:** Use two sources to answer one compelling question.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Long-passage skill (Building a Mini DBQ-Lite), item 1: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The second settled through the net.
2. Long-passage skill (Building a Mini DBQ-Lite), item 2: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The second settled through the net.
3. Long-passage skill (Building a Mini DBQ-Lite), item 3: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The second settled through the net.
4. Long-passage skill (Building a Mini DBQ-Lite), item 4: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The second settled through the net.
5. Long-passage skill (Building a Mini DBQ-Lite), item 5: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The second settled through the net.
6. Long-passage skill (Building a Mini DBQ-Lite), item 6: Annotate this excerpt for today’s focus, then answer in a complete sentence with an evidence pointer.

> Jordan had practiced the free-throw routine so often that his sneakers knew the floorboards. Still, the gym felt different on scholarship night. Coach Reyes handed him the ball and said, "Breathe like you do in study hall." The first shot rimmed out. The second settled through the net.

### Answer key (try first)

1. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Building a Mini DBQ-Lite.”
2. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Building a Mini DBQ-Lite.”
3. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Building a Mini DBQ-Lite.”
4. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Building a Mini DBQ-Lite.”
5. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Building a Mini DBQ-Lite.”
6. Annotation marks + sentence answer with specific phrase/line pointer aligned to “Building a Mini DBQ-Lite.”

## Exit ticket

1. In one sentence, what does “Building a Mini DBQ-Lite” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Building a Mini DBQ-Lite” and solve it.
', "objectives" = '• Use two sources to answer one compelling question.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Use two sources to answer one compelling question.' WHERE "id" = 'ppg6e24844d9d1b8a55b0ff31' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e061ebf7db5811be93c18','ppg6e24844d9d1b8a55b0ff31',NULL,'MULTIPLE_CHOICE','Which best shows “Building a Mini DBQ-Lite”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e4c1037817d1ea5dd1ff7','ppg6e24844d9d1b8a55b0ff31',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e9b32773849fa753ac8f7','ppg6e24844d9d1b8a55b0ff31',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 13 L6. Integration Capstone Response (ppg6ec1d099d0f987c85689ee)
UPDATE "Lesson" SET "content" = '# Integration Capstone Response

*Grade 6 English Language Arts · Unit 13 of 16 · Reading: Integration — Long Passages · Lesson 6*

## Objective

**I can** write a multi-paragraph integration CER with citations.

## Warm-up (2 minutes)

Skim:

> Trail crews near Tyler mark muddy sections with wooden signs.

One sentence: what is it mostly about?

## Teach

### Big idea

**Integration Capstone Response.** Write a multi-paragraph integration CER with citations. Annotate, then answer with **findable evidence** — not vibes alone.

### Example 1 — Worked example

Mentor passage:

> Trail crews near Tyler mark muddy sections with wooden signs. Hikers who slow down protect the path and the plants beside it. Rangers say most injuries happen when people rush the last half mile.

Apply “Integration Capstone Response”: restate the task, mark the text, answer in a complete sentence with a pointer.

### Try this

Give a one-sentence response that shows “Integration Capstone Response” using the mentor ideas.

**Check:** Sample includes a clear claim plus a concrete detail (markers, injuries, letter, sleep, or free throws).

### Example 2 — Second example

Across chunks, keep a gist list; then synthesize. Connect the marks to “Integration Capstone Response.”

### Common mistake (this lesson only)

Answering “Integration Capstone Response” with “I feel…” and no text pointer. Fix: quote or paraphrase a line a partner can find in 10 seconds.

## Guided practice (we do)

1. Goal of “Integration Capstone Response”?  
   **Answer:** Write a multi-paragraph integration CER with citations.

2. Findable evidence means?  
   **Answer:** A partner can locate it quickly.

3. Topic vs main idea?  
   **Answer:** Label vs complete sentence.

## Independent practice

Complete each item. Show your thinking.

1. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
2. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
3. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
4. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
5. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.
6. Imagine a bar chart of injuries by trail mile. Write two sentences explaining how that visual would strengthen the Tyler trail paragraph’s central idea.

### Answer key (try first)

1. Visual would quantify “last half mile” risk and support the slow-down claim with data.
2. Visual would quantify “last half mile” risk and support the slow-down claim with data.
3. Visual would quantify “last half mile” risk and support the slow-down claim with data.
4. Visual would quantify “last half mile” risk and support the slow-down claim with data.
5. Visual would quantify “last half mile” risk and support the slow-down claim with data.
6. Visual would quantify “last half mile” risk and support the slow-down claim with data.

## Exit ticket

1. In one sentence, what does “Integration Capstone Response” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Integration Capstone Response” and solve it.
', "objectives" = '• Write a multi-paragraph integration CER with citations.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Write a multi-paragraph integration CER with citations.' WHERE "id" = 'ppg6ec1d099d0f987c85689ee' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6efe3e2e557650bb154050','ppg6ec1d099d0f987c85689ee',NULL,'MULTIPLE_CHOICE','Which best shows “Integration Capstone Response”?','["Complete sentence + findable evidence","One-word feeling only","Guess without rereading","Paste the whole passage with no claim"]',0,'Evidence.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ec8a6968738de84e5dfb1','ppg6ec1d099d0f987c85689ee',NULL,'MULTIPLE_CHOICE','Best annotation?','["Underline claims; star evidence","Highlight everything","Only doodle","Skip reading"]',0,'Selective marks.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e67343d09712297a3f08d','ppg6ec1d099d0f987c85689ee',NULL,'MULTIPLE_CHOICE','When stuck…','["Reread the relevant chunk and revise","Invent a new text","Always pick C","Ignore question words"]',0,'Reread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 14 L1. Capitalization That Signals Importance (ppg6eaab3c31080ea0736b2b3)
UPDATE "Lesson" SET "content" = '# Capitalization That Signals Importance

*Grade 6 English Language Arts · Unit 14 of 16 · Grammar: Punctuation and Capitalization · Lesson 1*

## Objective

**I can** capitalize proper nouns, titles, and sentence starts.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Capitalization That Signals Importance.”

## Teach

### Big idea

**Capitalization That Signals Importance.** Capitalize proper nouns, titles, and sentence starts. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Capitalization That Signals Importance.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Capitalization That Signals Importance.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Capitalization That Signals Importance,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Capitalization That Signals Importance.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Capitalization That Signals Importance” control?  
   **Answer:** Capitalize proper nouns, titles, and sentence starts.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Fix capitalization: “on monday we read about east texas trails in english class.”
2. Fix capitalization: “on monday we read about east texas trails in english class.”
3. Fix capitalization: “on monday we read about east texas trails in english class.”
4. Fix capitalization: “on monday we read about east texas trails in english class.”
5. Fix capitalization: “on monday we read about east texas trails in english class.”
6. Fix capitalization: “on monday we read about east texas trails in english class.”

### Answer key (try first)

1. Monday; East Texas; English.
2. Monday; East Texas; English.
3. Monday; East Texas; English.
4. Monday; East Texas; English.
5. Monday; East Texas; English.
6. Monday; East Texas; English.

## Exit ticket

1. In one sentence, what does “Capitalization That Signals Importance” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Capitalization That Signals Importance” and solve it.
', "objectives" = '• Capitalize proper nouns, titles, and sentence starts.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Capitalize proper nouns, titles, and sentence starts.' WHERE "id" = 'ppg6eaab3c31080ea0736b2b3' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e72b582d9d4462e8ec94c','ppg6eaab3c31080ea0736b2b3',NULL,'MULTIPLE_CHOICE','Best habit for “Capitalization That Signals Importance”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eeea02a11ea4db78fb5d2','ppg6eaab3c31080ea0736b2b3',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e17a98cc18032c1df00b4','ppg6eaab3c31080ea0736b2b3',NULL,'MULTIPLE_CHOICE','You find an error about “Capitalization That Signals Importance.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 14 L2. Commas in a Series and Introductory Elements (ppg6edc79de69654b8a75eb13)
UPDATE "Lesson" SET "content" = '# Commas in a Series and Introductory Elements

*Grade 6 English Language Arts · Unit 14 of 16 · Grammar: Punctuation and Capitalization · Lesson 2*

## Objective

**I can** place commas for lists and openers.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Commas in a Series and Introductory Elements.”

## Teach

### Big idea

**Commas in a Series and Introductory Elements.** Place commas for lists and openers. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Commas in a Series and Introductory Elements.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Commas in a Series and Introductory Elements.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Commas in a Series and Introductory Elements,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Commas in a Series and Introductory Elements.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Commas in a Series and Introductory Elements” control?  
   **Answer:** Place commas for lists and openers.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Punctuate: “After advisory Maya packed pencils notebooks and erasers.”
2. Punctuate: “After advisory Maya packed pencils notebooks and erasers.”
3. Punctuate: “After advisory Maya packed pencils notebooks and erasers.”
4. Punctuate: “After advisory Maya packed pencils notebooks and erasers.”
5. Punctuate: “After advisory Maya packed pencils notebooks and erasers.”
6. Punctuate: “After advisory Maya packed pencils notebooks and erasers.”

### Answer key (try first)

1. After advisory, Maya packed pencils, notebooks, and erasers.
2. After advisory, Maya packed pencils, notebooks, and erasers.
3. After advisory, Maya packed pencils, notebooks, and erasers.
4. After advisory, Maya packed pencils, notebooks, and erasers.
5. After advisory, Maya packed pencils, notebooks, and erasers.
6. After advisory, Maya packed pencils, notebooks, and erasers.

## Exit ticket

1. In one sentence, what does “Commas in a Series and Introductory Elements” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Commas in a Series and Introductory Elements” and solve it.
', "objectives" = '• Place commas for lists and openers.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Place commas for lists and openers.' WHERE "id" = 'ppg6edc79de69654b8a75eb13' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e603262f8d42d68078ea0','ppg6edc79de69654b8a75eb13',NULL,'MULTIPLE_CHOICE','Best habit for “Commas in a Series and Introductory Elements”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e6e7c7d4f9033ce5d7f86','ppg6edc79de69654b8a75eb13',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ec7ac3fd3ea8dc3038e97','ppg6edc79de69654b8a75eb13',NULL,'MULTIPLE_CHOICE','You find an error about “Commas in a Series and Introductory Elements.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 14 L3. Commas with Coordinating Conjunctions (ppg6e25b36a0d352ccf30b40c)
UPDATE "Lesson" SET "content" = '# Commas with Coordinating Conjunctions

*Grade 6 English Language Arts · Unit 14 of 16 · Grammar: Punctuation and Capitalization · Lesson 3*

## Objective

**I can** join independent clauses with comma + FANBOYS.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Commas with Coordinating Conjunctions.”

## Teach

### Big idea

**Commas with Coordinating Conjunctions.** Join independent clauses with comma + FANBOYS. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Commas with Coordinating Conjunctions.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Commas with Coordinating Conjunctions.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Commas with Coordinating Conjunctions,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Commas with Coordinating Conjunctions.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Commas with Coordinating Conjunctions” control?  
   **Answer:** Join independent clauses with comma + FANBOYS.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Join correctly: “The shot rimmed out. The second shot settled.” Use comma + FANBOYS.
2. Join correctly: “The shot rimmed out. The second shot settled.” Use comma + FANBOYS.
3. Join correctly: “The shot rimmed out. The second shot settled.” Use comma + FANBOYS.
4. Join correctly: “The shot rimmed out. The second shot settled.” Use comma + FANBOYS.
5. Join correctly: “The shot rimmed out. The second shot settled.” Use comma + FANBOYS.
6. Join correctly: “The shot rimmed out. The second shot settled.” Use comma + FANBOYS.

### Answer key (try first)

1. …out, but/yet the second…
2. …out, but/yet the second…
3. …out, but/yet the second…
4. …out, but/yet the second…
5. …out, but/yet the second…
6. …out, but/yet the second…

## Exit ticket

1. In one sentence, what does “Commas with Coordinating Conjunctions” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Commas with Coordinating Conjunctions” and solve it.
', "objectives" = '• Join independent clauses with comma + FANBOYS.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Join independent clauses with comma + FANBOYS.' WHERE "id" = 'ppg6e25b36a0d352ccf30b40c' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e276ecf356f7fbe5f7ddc','ppg6e25b36a0d352ccf30b40c',NULL,'MULTIPLE_CHOICE','Best habit for “Commas with Coordinating Conjunctions”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e7803be0409a85775e3f0','ppg6e25b36a0d352ccf30b40c',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e983627a283e889825a77','ppg6e25b36a0d352ccf30b40c',NULL,'MULTIPLE_CHOICE','You find an error about “Commas with Coordinating Conjunctions.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 14 L4. Apostrophes for Possession and Contractions (ppg6e1e5bb139d0bd2d8bb0b8)
UPDATE "Lesson" SET "content" = '# Apostrophes for Possession and Contractions

*Grade 6 English Language Arts · Unit 14 of 16 · Grammar: Punctuation and Capitalization · Lesson 4*

## Objective

**I can** use apostrophes without confusing plurals.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Apostrophes for Possession and Contractions.”

## Teach

### Big idea

**Apostrophes for Possession and Contractions.** Use apostrophes without confusing plurals. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Apostrophes for Possession and Contractions.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Apostrophes for Possession and Contractions.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Apostrophes for Possession and Contractions,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Apostrophes for Possession and Contractions.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Apostrophes for Possession and Contractions” control?  
   **Answer:** Use apostrophes without confusing plurals.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Fill: ____ going to rain / the dog wagged ____ tail / ____ project is due (your/you’re). Then fix: “Its’ okay.”
2. Fill: ____ going to rain / the dog wagged ____ tail / ____ project is due (your/you’re). Then fix: “Its’ okay.”
3. Fill: ____ going to rain / the dog wagged ____ tail / ____ project is due (your/you’re). Then fix: “Its’ okay.”
4. Fill: ____ going to rain / the dog wagged ____ tail / ____ project is due (your/you’re). Then fix: “Its’ okay.”
5. Fill: ____ going to rain / the dog wagged ____ tail / ____ project is due (your/you’re). Then fix: “Its’ okay.”
6. Fill: ____ going to rain / the dog wagged ____ tail / ____ project is due (your/you’re). Then fix: “Its’ okay.”

### Answer key (try first)

1. It’s; its; Your. “It’s okay” (no its’).
2. It’s; its; Your. “It’s okay” (no its’).
3. It’s; its; Your. “It’s okay” (no its’).
4. It’s; its; Your. “It’s okay” (no its’).
5. It’s; its; Your. “It’s okay” (no its’).
6. It’s; its; Your. “It’s okay” (no its’).

## Exit ticket

1. In one sentence, what does “Apostrophes for Possession and Contractions” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Apostrophes for Possession and Contractions” and solve it.
', "objectives" = '• Use apostrophes without confusing plurals.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Use apostrophes without confusing plurals.' WHERE "id" = 'ppg6e1e5bb139d0bd2d8bb0b8' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ec5154654582331f39066','ppg6e1e5bb139d0bd2d8bb0b8',NULL,'MULTIPLE_CHOICE','Best habit for “Apostrophes for Possession and Contractions”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e82036d604eef661d10b9','ppg6e1e5bb139d0bd2d8bb0b8',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e6c45f4eb649cd68154aa','ppg6e1e5bb139d0bd2d8bb0b8',NULL,'MULTIPLE_CHOICE','You find an error about “Apostrophes for Possession and Contractions.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 14 L5. Quotation Marks in Dialogue (ppg6e324ee83d23716f22d22e)
UPDATE "Lesson" SET "content" = '# Quotation Marks in Dialogue

*Grade 6 English Language Arts · Unit 14 of 16 · Grammar: Punctuation and Capitalization · Lesson 5*

## Objective

**I can** punctuate dialogue and quoted evidence cleanly.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Quotation Marks in Dialogue.”

## Teach

### Big idea

**Quotation Marks in Dialogue.** Punctuate dialogue and quoted evidence cleanly. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Quotation Marks in Dialogue.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Quotation Marks in Dialogue.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Quotation Marks in Dialogue,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Quotation Marks in Dialogue.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Quotation Marks in Dialogue” control?  
   **Answer:** Punctuate dialogue and quoted evidence cleanly.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Punctuate: Coach Reyes said breathe like you do in study hall.
2. Punctuate: Coach Reyes said breathe like you do in study hall.
3. Punctuate: Coach Reyes said breathe like you do in study hall.
4. Punctuate: Coach Reyes said breathe like you do in study hall.
5. Punctuate: Coach Reyes said breathe like you do in study hall.
6. Punctuate: Coach Reyes said breathe like you do in study hall.

### Answer key (try first)

1. Coach Reyes said, “Breathe like you do in study hall.”
2. Coach Reyes said, “Breathe like you do in study hall.”
3. Coach Reyes said, “Breathe like you do in study hall.”
4. Coach Reyes said, “Breathe like you do in study hall.”
5. Coach Reyes said, “Breathe like you do in study hall.”
6. Coach Reyes said, “Breathe like you do in study hall.”

## Exit ticket

1. In one sentence, what does “Quotation Marks in Dialogue” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Quotation Marks in Dialogue” and solve it.
', "objectives" = '• Punctuate dialogue and quoted evidence cleanly.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Punctuate dialogue and quoted evidence cleanly.' WHERE "id" = 'ppg6e324ee83d23716f22d22e' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e1e3eb21e95991d232756','ppg6e324ee83d23716f22d22e',NULL,'MULTIPLE_CHOICE','Best habit for “Quotation Marks in Dialogue”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eb4b83ca46baadefe270b','ppg6e324ee83d23716f22d22e',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e7c77cee9f3499e246433','ppg6e324ee83d23716f22d22e',NULL,'MULTIPLE_CHOICE','You find an error about “Quotation Marks in Dialogue.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 14 L6. Punctuation Polish Workshop (ppg6ec19f6a3870a266bc11dc)
UPDATE "Lesson" SET "content" = '# Punctuation Polish Workshop

*Grade 6 English Language Arts · Unit 14 of 16 · Grammar: Punctuation and Capitalization · Lesson 6*

## Objective

**I can** edit a paragraph for capitalization and punctuation.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Punctuation Polish Workshop.”

## Teach

### Big idea

**Punctuation Polish Workshop.** Edit a paragraph for capitalization and punctuation. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Punctuation Polish Workshop.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Punctuation Polish Workshop.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Punctuation Polish Workshop,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Punctuation Polish Workshop.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Punctuation Polish Workshop” control?  
   **Answer:** Edit a paragraph for capitalization and punctuation.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Workshop item 1 for “punctuation polish workshop”: Revise this sentence for today’s skill and explain the change: “him and i finished the outline before practice.”
2. Workshop item 2 for “punctuation polish workshop”: Revise this sentence for today’s skill and explain the change: “maya and jordan reviews the scholarship checklist on friday.”
3. Workshop item 3 for “punctuation polish workshop”: Revise this sentence for today’s skill and explain the change: “everyone brought their laptop to the east texas field trip.”
4. Workshop item 4 for “punctuation polish workshop”: Revise this sentence for today’s skill and explain the change: “maya and jordan reviews the scholarship checklist on friday.”
5. Workshop item 5 for “punctuation polish workshop”: Revise this sentence for today’s skill and explain the change: “everyone brought their laptop to the east texas field trip.”
6. Workshop item 6 for “punctuation polish workshop”: Revise this sentence for today’s skill and explain the change: “the class are debating start times with surprising calm.”

### Answer key (try first)

1. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
2. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
3. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
4. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
5. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
6. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.

## Exit ticket

1. In one sentence, what does “Punctuation Polish Workshop” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Punctuation Polish Workshop” and solve it.
', "objectives" = '• Edit a paragraph for capitalization and punctuation.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Edit a paragraph for capitalization and punctuation.' WHERE "id" = 'ppg6ec19f6a3870a266bc11dc' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e4f97883b1d44816bdf09','ppg6ec19f6a3870a266bc11dc',NULL,'MULTIPLE_CHOICE','Best habit for “Punctuation Polish Workshop”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e4c2edad0ae319bb643fa','ppg6ec19f6a3870a266bc11dc',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ebf715c49c9ed17f2ce52','ppg6ec19f6a3870a266bc11dc',NULL,'MULTIPLE_CHOICE','You find an error about “Punctuation Polish Workshop.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 15 L1. Homophones That Trick Writers (ppg6e0d91a344b39b92e3c6c1)
UPDATE "Lesson" SET "content" = '# Homophones That Trick Writers

*Grade 6 English Language Arts · Unit 15 of 16 · Grammar: Word Study · Lesson 1*

## Objective

**I can** master there/their/they''re, to/too/two, and kin.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Homophones That Trick Writers.”

## Teach

### Big idea

**Homophones That Trick Writers.** Master there/their/they''re, to/too/two, and kin. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Homophones That Trick Writers.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Homophones That Trick Writers.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Homophones That Trick Writers,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Homophones That Trick Writers.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Homophones That Trick Writers” control?  
   **Answer:** Master there/their/they''re, to/too/two, and kin.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Choose: There/Their/They’re packing to/too/two bags for the trip.
2. Choose: There/Their/They’re packing to/too/two bags for the trip.
3. Choose: There/Their/They’re packing to/too/two bags for the trip.
4. Choose: There/Their/They’re packing to/too/two bags for the trip.
5. Choose: There/Their/They’re packing to/too/two bags for the trip.
6. Choose: There/Their/They’re packing to/too/two bags for the trip.

### Answer key (try first)

1. They’re packing two bags… (or Their bags / too if meaning also).
2. They’re packing two bags… (or Their bags / too if meaning also).
3. They’re packing two bags… (or Their bags / too if meaning also).
4. They’re packing two bags… (or Their bags / too if meaning also).
5. They’re packing two bags… (or Their bags / too if meaning also).
6. They’re packing two bags… (or Their bags / too if meaning also).

## Exit ticket

1. In one sentence, what does “Homophones That Trick Writers” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Homophones That Trick Writers” and solve it.
', "objectives" = '• Master there/their/they''re, to/too/two, and kin.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Master there/their/they''re, to/too/two, and kin.' WHERE "id" = 'ppg6e0d91a344b39b92e3c6c1' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e3babeb828943e70d1f8b','ppg6e0d91a344b39b92e3c6c1',NULL,'MULTIPLE_CHOICE','Best habit for “Homophones That Trick Writers”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e4f28d6b9b4880f62b27f','ppg6e0d91a344b39b92e3c6c1',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e4e12a85575deb8eb96bf','ppg6e0d91a344b39b92e3c6c1',NULL,'MULTIPLE_CHOICE','You find an error about “Homophones That Trick Writers.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 15 L2. Affect vs Effect and Similar Pairs (ppg6ebec8f547a744f5942dfb)
UPDATE "Lesson" SET "content" = '# Affect vs Effect and Similar Pairs

*Grade 6 English Language Arts · Unit 15 of 16 · Grammar: Word Study · Lesson 2*

## Objective

**I can** choose among commonly confused academic words.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Affect vs Effect and Similar Pairs.”

## Teach

### Big idea

**Affect vs Effect and Similar Pairs.** Choose among commonly confused academic words. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Affect vs Effect and Similar Pairs.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Affect vs Effect and Similar Pairs.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Affect vs Effect and Similar Pairs,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Affect vs Effect and Similar Pairs.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Affect vs Effect and Similar Pairs” control?  
   **Answer:** Choose among commonly confused academic words.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Fill: The early bell can ____ sleep. The ____ is more tardies. (affect/effect)
2. Fill: The early bell can ____ sleep. The ____ is more tardies. (affect/effect)
3. Fill: The early bell can ____ sleep. The ____ is more tardies. (affect/effect)
4. Fill: The early bell can ____ sleep. The ____ is more tardies. (affect/effect)
5. Fill: The early bell can ____ sleep. The ____ is more tardies. (affect/effect)
6. Fill: The early bell can ____ sleep. The ____ is more tardies. (affect/effect)

### Answer key (try first)

1. affect (verb); effect (noun).
2. affect (verb); effect (noun).
3. affect (verb); effect (noun).
4. affect (verb); effect (noun).
5. affect (verb); effect (noun).
6. affect (verb); effect (noun).

## Exit ticket

1. In one sentence, what does “Affect vs Effect and Similar Pairs” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Affect vs Effect and Similar Pairs” and solve it.
', "objectives" = '• Choose among commonly confused academic words.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Choose among commonly confused academic words.' WHERE "id" = 'ppg6ebec8f547a744f5942dfb' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e81b33a3d2f2d0095b873','ppg6ebec8f547a744f5942dfb',NULL,'MULTIPLE_CHOICE','Best habit for “Affect vs Effect and Similar Pairs”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e3008c239936cbcd62f47','ppg6ebec8f547a744f5942dfb',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e991101c775fd5cfd740d','ppg6ebec8f547a744f5942dfb',NULL,'MULTIPLE_CHOICE','You find an error about “Affect vs Effect and Similar Pairs.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 15 L3. Formal vs Informal Word Choice (ppg6e88df412c5eb07c6c9e48)
UPDATE "Lesson" SET "content" = '# Formal vs Informal Word Choice

*Grade 6 English Language Arts · Unit 15 of 16 · Grammar: Word Study · Lesson 3*

## Objective

**I can** match register to school writing tasks.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Formal vs Informal Word Choice.”

## Teach

### Big idea

**Formal vs Informal Word Choice.** Match register to school writing tasks. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Formal vs Informal Word Choice.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Formal vs Informal Word Choice.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Formal vs Informal Word Choice,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Formal vs Informal Word Choice.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Formal vs Informal Word Choice” control?  
   **Answer:** Match register to school writing tasks.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Revise informal → school formal: “The letter was kinda a big deal, ngl.”
2. Revise informal → school formal: “The letter was kinda a big deal, ngl.”
3. Revise informal → school formal: “The letter was kinda a big deal, ngl.”
4. Revise informal → school formal: “The letter was kinda a big deal, ngl.”
5. Revise informal → school formal: “The letter was kinda a big deal, ngl.”
6. Revise informal → school formal: “The letter was kinda a big deal, ngl.”

### Answer key (try first)

1. The letter was a significant moment / mattered a great deal.
2. The letter was a significant moment / mattered a great deal.
3. The letter was a significant moment / mattered a great deal.
4. The letter was a significant moment / mattered a great deal.
5. The letter was a significant moment / mattered a great deal.
6. The letter was a significant moment / mattered a great deal.

## Exit ticket

1. In one sentence, what does “Formal vs Informal Word Choice” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Formal vs Informal Word Choice” and solve it.
', "objectives" = '• Match register to school writing tasks.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Match register to school writing tasks.' WHERE "id" = 'ppg6e88df412c5eb07c6c9e48' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e56ad290adf6d40ec4265','ppg6e88df412c5eb07c6c9e48',NULL,'MULTIPLE_CHOICE','Best habit for “Formal vs Informal Word Choice”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e7c933c61699e0c130d25','ppg6e88df412c5eb07c6c9e48',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ea09ae538836f29d635c6','ppg6e88df412c5eb07c6c9e48',NULL,'MULTIPLE_CHOICE','You find an error about “Formal vs Informal Word Choice.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 15 L4. Precise Verbs Beat Vague Ones (ppg6ea57187ce1473bfa7e706)
UPDATE "Lesson" SET "content" = '# Precise Verbs Beat Vague Ones

*Grade 6 English Language Arts · Unit 15 of 16 · Grammar: Word Study · Lesson 4*

## Objective

**I can** replace got/did/things with sharper vocabulary.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Precise Verbs Beat Vague Ones.”

## Teach

### Big idea

**Precise Verbs Beat Vague Ones.** Replace got/did/things with sharper vocabulary. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Precise Verbs Beat Vague Ones.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Precise Verbs Beat Vague Ones.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Precise Verbs Beat Vague Ones,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Precise Verbs Beat Vague Ones.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Precise Verbs Beat Vague Ones” control?  
   **Answer:** Replace got/did/things with sharper vocabulary.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Replace vague nouns: “The thing about the stuff was good.” Write two precise revisions for a scholarship paragraph.
2. Replace vague nouns: “The thing about the stuff was good.” Write two precise revisions for a scholarship paragraph.
3. Replace vague nouns: “The thing about the stuff was good.” Write two precise revisions for a scholarship paragraph.
4. Replace vague nouns: “The thing about the stuff was good.” Write two precise revisions for a scholarship paragraph.
5. Replace vague nouns: “The thing about the stuff was good.” Write two precise revisions for a scholarship paragraph.
6. Replace vague nouns: “The thing about the stuff was good.” Write two precise revisions for a scholarship paragraph.

### Answer key (try first)

1. Any precise nouns (essay, evidence, mentor feedback, etc.).
2. Any precise nouns (essay, evidence, mentor feedback, etc.).
3. Any precise nouns (essay, evidence, mentor feedback, etc.).
4. Any precise nouns (essay, evidence, mentor feedback, etc.).
5. Any precise nouns (essay, evidence, mentor feedback, etc.).
6. Any precise nouns (essay, evidence, mentor feedback, etc.).

## Exit ticket

1. In one sentence, what does “Precise Verbs Beat Vague Ones” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Precise Verbs Beat Vague Ones” and solve it.
', "objectives" = '• Replace got/did/things with sharper vocabulary.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Replace got/did/things with sharper vocabulary.' WHERE "id" = 'ppg6ea57187ce1473bfa7e706' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e1c4deb33161f7f44a384','ppg6ea57187ce1473bfa7e706',NULL,'MULTIPLE_CHOICE','Best habit for “Precise Verbs Beat Vague Ones”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e6de92b91e74b5f7847d8','ppg6ea57187ce1473bfa7e706',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ee837eab91107a80fddab','ppg6ea57187ce1473bfa7e706',NULL,'MULTIPLE_CHOICE','You find an error about “Precise Verbs Beat Vague Ones.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 15 L5. Morphology Review Lab (ppg6ed60fca7821386995e8ab)
UPDATE "Lesson" SET "content" = '# Morphology Review Lab

*Grade 6 English Language Arts · Unit 15 of 16 · Grammar: Word Study · Lesson 5*

## Objective

**I can** combine roots, prefixes, and suffixes to unlock meaning.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Morphology Review Lab.”

## Teach

### Big idea

**Morphology Review Lab.** Combine roots, prefixes, and suffixes to unlock meaning. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Morphology Review Lab.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Morphology Review Lab.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Morphology Review Lab,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Morphology Review Lab.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Morphology Review Lab” control?  
   **Answer:** Combine roots, prefixes, and suffixes to unlock meaning.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Unpack *unpredictable* by parts (prefix/root/suffix) and define from parts; then check against context: “The weather was unpredictable.”
2. Unpack *unpredictable* by parts (prefix/root/suffix) and define from parts; then check against context: “The weather was unpredictable.”
3. Unpack *unpredictable* by parts (prefix/root/suffix) and define from parts; then check against context: “The weather was unpredictable.”
4. Unpack *unpredictable* by parts (prefix/root/suffix) and define from parts; then check against context: “The weather was unpredictable.”
5. Unpack *unpredictable* by parts (prefix/root/suffix) and define from parts; then check against context: “The weather was unpredictable.”
6. Unpack *unpredictable* by parts (prefix/root/suffix) and define from parts; then check against context: “The weather was unpredictable.”

### Answer key (try first)

1. un + predict + able → not able to be predicted.
2. un + predict + able → not able to be predicted.
3. un + predict + able → not able to be predicted.
4. un + predict + able → not able to be predicted.
5. un + predict + able → not able to be predicted.
6. un + predict + able → not able to be predicted.

## Exit ticket

1. In one sentence, what does “Morphology Review Lab” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Morphology Review Lab” and solve it.
', "objectives" = '• Combine roots, prefixes, and suffixes to unlock meaning.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Combine roots, prefixes, and suffixes to unlock meaning.' WHERE "id" = 'ppg6ed60fca7821386995e8ab' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6eaee0f7da92bd00b622ac','ppg6ed60fca7821386995e8ab',NULL,'MULTIPLE_CHOICE','Best habit for “Morphology Review Lab”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e160fef580db7578a6dad','ppg6ed60fca7821386995e8ab',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ea3029572f95221263514','ppg6ed60fca7821386995e8ab',NULL,'MULTIPLE_CHOICE','You find an error about “Morphology Review Lab.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 15 L6. Word Study Editing Pass (ppg6ea635fde7cdb4cd49195c)
UPDATE "Lesson" SET "content" = '# Word Study Editing Pass

*Grade 6 English Language Arts · Unit 15 of 16 · Grammar: Word Study · Lesson 6*

## Objective

**I can** edit a student paragraph for word-choice accuracy.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Word Study Editing Pass.”

## Teach

### Big idea

**Word Study Editing Pass.** Edit a student paragraph for word-choice accuracy. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Word Study Editing Pass.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Word Study Editing Pass.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Word Study Editing Pass,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Word Study Editing Pass.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Word Study Editing Pass” control?  
   **Answer:** Edit a student paragraph for word-choice accuracy.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Edit: “Their going too the library too return there books before there due.”
2. Edit: “Their going too the library too return there books before there due.”
3. Edit: “Their going too the library too return there books before there due.”
4. Edit: “Their going too the library too return there books before there due.”
5. Edit: “Their going too the library too return there books before there due.”
6. Edit: “Their going too the library too return there books before there due.”

### Answer key (try first)

1. They’re going to the library to return their books before they’re due.
2. They’re going to the library to return their books before they’re due.
3. They’re going to the library to return their books before they’re due.
4. They’re going to the library to return their books before they’re due.
5. They’re going to the library to return their books before they’re due.
6. They’re going to the library to return their books before they’re due.

## Exit ticket

1. In one sentence, what does “Word Study Editing Pass” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Word Study Editing Pass” and solve it.
', "objectives" = '• Edit a student paragraph for word-choice accuracy.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Edit a student paragraph for word-choice accuracy.' WHERE "id" = 'ppg6ea635fde7cdb4cd49195c' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e339ecb6c41e408dfc195','ppg6ea635fde7cdb4cd49195c',NULL,'MULTIPLE_CHOICE','Best habit for “Word Study Editing Pass”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e70ab3b931ea88f966c72','ppg6ea635fde7cdb4cd49195c',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ed1aee21e9a66b632396a','ppg6ea635fde7cdb4cd49195c',NULL,'MULTIPLE_CHOICE','You find an error about “Word Study Editing Pass.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 16 L1. What Style Means in Writing (ppg6e1b469e92bee002737d68)
UPDATE "Lesson" SET "content" = '# What Style Means in Writing

*Grade 6 English Language Arts · Unit 16 of 16 · Grammar: Style and Tone · Lesson 1*

## Objective

**I can** notice sentence length, diction, and patterning choices.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “What Style Means in Writing.”

## Teach

### Big idea

**What Style Means in Writing.** Notice sentence length, diction, and patterning choices. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “What Style Means in Writing.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “What Style Means in Writing.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “What Style Means in Writing,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “What Style Means in Writing.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “What Style Means in Writing” control?  
   **Answer:** Notice sentence length, diction, and patterning choices.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Compare style: short punchy sentences vs one long sentence about Maya’s letter. Write both; say which fits suspense.
2. Compare style: short punchy sentences vs one long sentence about Maya’s letter. Write both; say which fits suspense.
3. Compare style: short punchy sentences vs one long sentence about Maya’s letter. Write both; say which fits suspense.
4. Compare style: short punchy sentences vs one long sentence about Maya’s letter. Write both; say which fits suspense.
5. Compare style: short punchy sentences vs one long sentence about Maya’s letter. Write both; say which fits suspense.
6. Compare style: short punchy sentences vs one long sentence about Maya’s letter. Write both; say which fits suspense.

### Answer key (try first)

1. Short sentences often heighten suspense; answer should show both versions.
2. Short sentences often heighten suspense; answer should show both versions.
3. Short sentences often heighten suspense; answer should show both versions.
4. Short sentences often heighten suspense; answer should show both versions.
5. Short sentences often heighten suspense; answer should show both versions.
6. Short sentences often heighten suspense; answer should show both versions.

## Exit ticket

1. In one sentence, what does “What Style Means in Writing” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “What Style Means in Writing” and solve it.
', "objectives" = '• Notice sentence length, diction, and patterning choices.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Notice sentence length, diction, and patterning choices.' WHERE "id" = 'ppg6e1b469e92bee002737d68' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ec5aa59ab741796914287','ppg6e1b469e92bee002737d68',NULL,'MULTIPLE_CHOICE','Best habit for “What Style Means in Writing”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e1211ba36e864e503a06d','ppg6e1b469e92bee002737d68',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ea6996ec221f3c815313a','ppg6e1b469e92bee002737d68',NULL,'MULTIPLE_CHOICE','You find an error about “What Style Means in Writing.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 16 L2. Keeping Tone Consistent (ppg6e1d93a4963fe418a4ef08)
UPDATE "Lesson" SET "content" = '# Keeping Tone Consistent

*Grade 6 English Language Arts · Unit 16 of 16 · Grammar: Style and Tone · Lesson 2*

## Objective

**I can** revise shifts that accidentally sound sarcastic or stiff.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Keeping Tone Consistent.”

## Teach

### Big idea

**Keeping Tone Consistent.** Revise shifts that accidentally sound sarcastic or stiff. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Keeping Tone Consistent.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Keeping Tone Consistent.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Keeping Tone Consistent,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Keeping Tone Consistent.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Keeping Tone Consistent” control?  
   **Answer:** Revise shifts that accidentally sound sarcastic or stiff.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Revise tone shift: “Maya’s hands shook with fear. Lol she was fine though.”
2. Revise tone shift: “Maya’s hands shook with fear. Lol she was fine though.”
3. Revise tone shift: “Maya’s hands shook with fear. Lol she was fine though.”
4. Revise tone shift: “Maya’s hands shook with fear. Lol she was fine though.”
5. Revise tone shift: “Maya’s hands shook with fear. Lol she was fine though.”
6. Revise tone shift: “Maya’s hands shook with fear. Lol she was fine though.”

### Answer key (try first)

1. Remove lol; keep consistent serious/reflective tone.
2. Remove lol; keep consistent serious/reflective tone.
3. Remove lol; keep consistent serious/reflective tone.
4. Remove lol; keep consistent serious/reflective tone.
5. Remove lol; keep consistent serious/reflective tone.
6. Remove lol; keep consistent serious/reflective tone.

## Exit ticket

1. In one sentence, what does “Keeping Tone Consistent” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Keeping Tone Consistent” and solve it.
', "objectives" = '• Revise shifts that accidentally sound sarcastic or stiff.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Revise shifts that accidentally sound sarcastic or stiff.' WHERE "id" = 'ppg6e1d93a4963fe418a4ef08' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ecc59e6ff326e0e44476e','ppg6e1d93a4963fe418a4ef08',NULL,'MULTIPLE_CHOICE','Best habit for “Keeping Tone Consistent”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e7c9202bf850ee95b9186','ppg6e1d93a4963fe418a4ef08',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6edfd0c245245c4b37472a','ppg6e1d93a4963fe418a4ef08',NULL,'MULTIPLE_CHOICE','You find an error about “Keeping Tone Consistent.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 16 L3. Avoiding Wordiness (ppg6e0925fcf7e70087dc1a1f)
UPDATE "Lesson" SET "content" = '# Avoiding Wordiness

*Grade 6 English Language Arts · Unit 16 of 16 · Grammar: Style and Tone · Lesson 3*

## Objective

**I can** cut empty phrases while keeping meaning.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Avoiding Wordiness.”

## Teach

### Big idea

**Avoiding Wordiness.** Cut empty phrases while keeping meaning. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Avoiding Wordiness.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Avoiding Wordiness.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Avoiding Wordiness,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Avoiding Wordiness.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Avoiding Wordiness” control?  
   **Answer:** Cut empty phrases while keeping meaning.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Cut wordiness: “Due to the fact that the envelope was thin in nature, Maya was sort of nervous.”
2. Cut wordiness: “Due to the fact that the envelope was thin in nature, Maya was sort of nervous.”
3. Cut wordiness: “Due to the fact that the envelope was thin in nature, Maya was sort of nervous.”
4. Cut wordiness: “Due to the fact that the envelope was thin in nature, Maya was sort of nervous.”
5. Cut wordiness: “Due to the fact that the envelope was thin in nature, Maya was sort of nervous.”
6. Cut wordiness: “Due to the fact that the envelope was thin in nature, Maya was sort of nervous.”

### Answer key (try first)

1. Because the envelope was thin, Maya was nervous.
2. Because the envelope was thin, Maya was nervous.
3. Because the envelope was thin, Maya was nervous.
4. Because the envelope was thin, Maya was nervous.
5. Because the envelope was thin, Maya was nervous.
6. Because the envelope was thin, Maya was nervous.

## Exit ticket

1. In one sentence, what does “Avoiding Wordiness” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Avoiding Wordiness” and solve it.
', "objectives" = '• Cut empty phrases while keeping meaning.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Cut empty phrases while keeping meaning.' WHERE "id" = 'ppg6e0925fcf7e70087dc1a1f' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e88eb6878f605d8f09b9a','ppg6e0925fcf7e70087dc1a1f',NULL,'MULTIPLE_CHOICE','Best habit for “Avoiding Wordiness”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ef8c2a92db7be3a93ed69','ppg6e0925fcf7e70087dc1a1f',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e07cc98ed1cd45f021434','ppg6e0925fcf7e70087dc1a1f',NULL,'MULTIPLE_CHOICE','You find an error about “Avoiding Wordiness.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 16 L4. Parallel Structure Basics (ppg6eef480617a5af39c193e4)
UPDATE "Lesson" SET "content" = '# Parallel Structure Basics

*Grade 6 English Language Arts · Unit 16 of 16 · Grammar: Style and Tone · Lesson 4*

## Objective

**I can** balance lists and paired ideas for smoother rhythm.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Parallel Structure Basics.”

## Teach

### Big idea

**Parallel Structure Basics.** Balance lists and paired ideas for smoother rhythm. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Parallel Structure Basics.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Parallel Structure Basics.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Parallel Structure Basics,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Parallel Structure Basics.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Parallel Structure Basics” control?  
   **Answer:** Balance lists and paired ideas for smoother rhythm.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Fix parallelism: “Jordan likes breathing drills, to practice free throws, and study hall.”
2. Fix parallelism: “Jordan likes breathing drills, to practice free throws, and study hall.”
3. Fix parallelism: “Jordan likes breathing drills, to practice free throws, and study hall.”
4. Fix parallelism: “Jordan likes breathing drills, to practice free throws, and study hall.”
5. Fix parallelism: “Jordan likes breathing drills, to practice free throws, and study hall.”
6. Fix parallelism: “Jordan likes breathing drills, to practice free throws, and study hall.”

### Answer key (try first)

1. breathing drills, practicing free throws, and studying in study hall (match -ing or match nouns).
2. breathing drills, practicing free throws, and studying in study hall (match -ing or match nouns).
3. breathing drills, practicing free throws, and studying in study hall (match -ing or match nouns).
4. breathing drills, practicing free throws, and studying in study hall (match -ing or match nouns).
5. breathing drills, practicing free throws, and studying in study hall (match -ing or match nouns).
6. breathing drills, practicing free throws, and studying in study hall (match -ing or match nouns).

## Exit ticket

1. In one sentence, what does “Parallel Structure Basics” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Parallel Structure Basics” and solve it.
', "objectives" = '• Balance lists and paired ideas for smoother rhythm.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Balance lists and paired ideas for smoother rhythm.' WHERE "id" = 'ppg6eef480617a5af39c193e4' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e00159ceadb944ca4e448','ppg6eef480617a5af39c193e4',NULL,'MULTIPLE_CHOICE','Best habit for “Parallel Structure Basics”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e3870da9df9f51f18236f','ppg6eef480617a5af39c193e4',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ee931fe07c75e6c7d1c3e','ppg6eef480617a5af39c193e4',NULL,'MULTIPLE_CHOICE','You find an error about “Parallel Structure Basics.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 16 L5. Voice That Fits the Audience (ppg6e926119999f0f1ba9dfc9)
UPDATE "Lesson" SET "content" = '# Voice That Fits the Audience

*Grade 6 English Language Arts · Unit 16 of 16 · Grammar: Style and Tone · Lesson 5*

## Objective

**I can** adjust style for teacher, peer, or public audiences.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Voice That Fits the Audience.”

## Teach

### Big idea

**Voice That Fits the Audience.** Adjust style for teacher, peer, or public audiences. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Voice That Fits the Audience.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Voice That Fits the Audience.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Voice That Fits the Audience,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Voice That Fits the Audience.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Voice That Fits the Audience” control?  
   **Answer:** Adjust style for teacher, peer, or public audiences.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Write one sentence about the letter for a teacher (formal) and one for a close friend (casual but kind).
2. Write one sentence about the letter for a teacher (formal) and one for a close friend (casual but kind).
3. Write one sentence about the letter for a teacher (formal) and one for a close friend (casual but kind).
4. Write one sentence about the letter for a teacher (formal) and one for a close friend (casual but kind).
5. Write one sentence about the letter for a teacher (formal) and one for a close friend (casual but kind).
6. Write one sentence about the letter for a teacher (formal) and one for a close friend (casual but kind).

### Answer key (try first)

1. Register shifts appropriately; school-appropriate.
2. Register shifts appropriately; school-appropriate.
3. Register shifts appropriately; school-appropriate.
4. Register shifts appropriately; school-appropriate.
5. Register shifts appropriately; school-appropriate.
6. Register shifts appropriately; school-appropriate.

## Exit ticket

1. In one sentence, what does “Voice That Fits the Audience” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Voice That Fits the Audience” and solve it.
', "objectives" = '• Adjust style for teacher, peer, or public audiences.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Adjust style for teacher, peer, or public audiences.' WHERE "id" = 'ppg6e926119999f0f1ba9dfc9' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6e028228d67e6cfcccf8c2','ppg6e926119999f0f1ba9dfc9',NULL,'MULTIPLE_CHOICE','Best habit for “Voice That Fits the Audience”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ec67d853ebdc3fea4321d','ppg6e926119999f0f1ba9dfc9',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ea62b5381e7e401653ec9','ppg6e926119999f0f1ba9dfc9',NULL,'MULTIPLE_CHOICE','You find an error about “Voice That Fits the Audience.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 16 L6. Style & Tone Portfolio Polish (ppg6e35ba62b458313d7b4d29)
UPDATE "Lesson" SET "content" = '# Style & Tone Portfolio Polish

*Grade 6 English Language Arts · Unit 16 of 16 · Grammar: Style and Tone · Lesson 6*

## Objective

**I can** revise one paragraph for clarity, tone, and craft.

## Warm-up (2 minutes)

Write two sentences about practice. Mark anything related to “Style & Tone Portfolio Polish.”

## Teach

### Big idea

**Style & Tone Portfolio Polish.** Revise one paragraph for clarity, tone, and craft. Name the job of each word, then revise for a real reader.

### Example 1 — Worked example

Mentor: “The scholars revise their pronouns so every antecedent is obvious.” Spot how clarity connects to “Style & Tone Portfolio Polish.” Then fix: “Them goes to the trail.”

### Try this

Write one correct sentence that shows “Style & Tone Portfolio Polish.”

**Check:** Answers vary; must follow today’s rule and sound natural aloud.

### Example 2 — Second example

Broken twin: invent a sentence that violates “Style & Tone Portfolio Polish,” then repair only the broken piece.

### Common mistake (this lesson only)

Rewriting the whole paragraph when only one piece breaks “Style & Tone Portfolio Polish.” Fix: name the error, change that piece, re-read.

## Guided practice (we do)

1. What does “Style & Tone Portfolio Polish” control?  
   **Answer:** Revise one paragraph for clarity, tone, and craft.

2. Why read aloud?  
   **Answer:** Your ear catches agreement, tense, and awkward spots.

3. Revision vs rewrite-all?  
   **Answer:** Change the broken piece first.

## Independent practice

Complete each item. Show your thinking.

1. Workshop item 1 for “style & tone portfolio polish”: Revise this sentence for today’s skill and explain the change: “the team of scholars present their cer paragraphs after advisory.”
2. Workshop item 2 for “style & tone portfolio polish”: Revise this sentence for today’s skill and explain the change: “maya and jordan reviews the scholarship checklist on friday.”
3. Workshop item 3 for “style & tone portfolio polish”: Revise this sentence for today’s skill and explain the change: “everyone brought their laptop to the east texas field trip.”
4. Workshop item 4 for “style & tone portfolio polish”: Revise this sentence for today’s skill and explain the change: “the news are on the library screen before homeroom.”
5. Workshop item 5 for “style & tone portfolio polish”: Revise this sentence for today’s skill and explain the change: “him and i finished the outline before practice.”
6. Workshop item 6 for “style & tone portfolio polish”: Revise this sentence for today’s skill and explain the change: “the class are debating start times with surprising calm.”

### Answer key (try first)

1. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
2. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
3. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
4. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
5. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.
6. Correct capitalization/agreement/clarity per skill; explanation names the grammar job.

## Exit ticket

1. In one sentence, what does “Style & Tone Portfolio Polish” help you do?
2. Give one on-skill example.

## Stretch (optional)

Invent a harder Prosper Prep item for “Style & Tone Portfolio Polish” and solve it.
', "objectives" = '• Revise one paragraph for clarity, tone, and craft.
• Explain the idea with a clear example, annotation, or revision.
• Check work against the skill.', "description" = 'Revise one paragraph for clarity, tone, and craft.' WHERE "id" = 'ppg6e35ba62b458313d7b4d29' AND "courseId" = 'cmuh9bwsc03l8edangiqeczno';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ec6f549e2984a504cc320','ppg6e35ba62b458313d7b4d29',NULL,'MULTIPLE_CHOICE','Best habit for “Style & Tone Portfolio Polish”?','["Name the job, revise the broken piece, re-read","Guess by sentence length","Delete all punctuation","Ignore the subject"]',0,'Targeted revise.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6edc1c798ee6093aa1578c','ppg6e35ba62b458313d7b4d29',NULL,'MULTIPLE_CHOICE','Clearer sentence?','["Maya opened the thin envelope after she washed her hands.","Maya opened it after she washed them.","Opening the envelope, hands were washed.","Maya open the envelope after she wash her hands."]',0,'Clear antecedents/tense.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6edac57d40c9c7355250cf','ppg6e35ba62b458313d7b4d29',NULL,'MULTIPLE_CHOICE','You find an error about “Style & Tone Portfolio Polish.” Next?','["Name the broken step, then repair it","Erase everything","Assume the key is wrong","Only change fonts"]',0,'Repair.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

