/**
 * Hand-authored Grade 6 Math Unit 1 (Ratios) — Prosper Prep teach layer.
 * Do NOT overwrite by re-running gen-grade6-math-year.mjs for unit-1.
 * Independent practice kept from skill banks (light polish only).
 */
export const COURSE_ID = "cmuh9bwto03qledantwv3vsfd";
export const SECTION_KEY = "unit-1";

/** @typedef {{ prompt: string, choices: string[], correctIndex: number, explanation: string, order: number, id: string }} Q */

/**
 * @type {Array<{
 *   id: string,
 *   title: string,
 *   description: string,
 *   objectives: string,
 *   order: number,
 *   questionIds: [string, string, string],
 *   teachBody: string,
 *   independent: string,
 *   exitStretch: string,
 *   questions: Q[]
 * }>}
 */
export const UNIT1_LESSONS = [
  {
    id: "ppg6m905332d7d5edce2a5397",
    title: "What Is a Ratio?",
    description: "Compare two quantities with order that matters; write a:b, a to b, and a/b.",
    objectives: "• Tell what a ratio is and write a comparison of two quantities three ways: a:b, “a to b”, and a/b.\n• Keep the order named in the question.\n• Spot order-switch mistakes.",
    order: 1,
    questionIds: ["ppg6ma99da1d4a049a71216ff", "ppg6m12e94422d22d1f934af2", "ppg6ma59ebdf61d2036ffdd27"],
    teachBody: `# What Is a Ratio?

*Grade 6 Mathematics · Unit 1 of 11 · Ratios · Lesson 1*

## Objective

**I can** tell what a ratio is and write a comparison of two quantities three ways: \`a:b\`, “a to b”, and \`a/b\`.

## Warm-up (2 minutes)

A team has **4** blue jerseys and **2** red jerseys.

Without calculating anything hard: which color has more jerseys? How do you know?

## Teach

### What is a ratio?

A **ratio** compares two quantities.

The order in the words matters. “Blue to red” is not the same comparison as “red to blue.”

### Example 1 — write one ratio three ways

Blue jerseys: **4**  
Red jerseys: **2**

We want **blue to red**.

- Colon form: **4:2**
- Words: **4 to 2**
- Fraction form: **4/2**

All three mean the same comparison: blue compared with red.

If the question asked **red to blue**, we would write **2:4**, **2 to 4**, and **2/4**. Same jerseys — different order — different ratio.

### Try this

A snack table has **5** apples and **3** oranges. Write **apples to oranges** in all three forms.

**Check:** 5:3 · 5 to 3 · 5/3

### Example 2 — order mistake

A student hears “8 water bottles to 2 towels” and writes **2:8** because “2 is smaller.”

That is wrong. The words name the order: **bottles first, towels second** → **8:2** (also 8 to 2, 8/2).

### Common mistake (this lesson only)

Switching the order so the “nicer” number comes first. Fix: underline the first word in the question, then put that quantity first in the ratio.

## Guided practice (we do)

1. Coaches count **6** basketballs and **4** cones. Write **basketballs to cones** three ways.  
   **Answer:** 6:4 · 6 to 4 · 6/4

2. Same counts. Write **cones to basketballs** three ways.  
   **Answer:** 4:6 · 4 to 6 · 4/6

3. True or false: 6:4 is the same ratio as 4:6.  
   **Answer:** False — order names which quantity comes first.
`,
    independent: `## Independent practice

Complete each item. Show the three forms when asked.

1. At a bake sale there are **8** water bottles and **2** towels. Write bottles to towels three ways. Does order matter?
2. A recipe uses **6** cups flour to **4** cups milk. Write **milk to flour** in two forms. Why is that different from flour to milk?
3. True or false: The ratio **10:7** is the same as **7:10**. Defend with one sentence about jersey colors.
4. “17 sixth-graders to 5 seventh-graders” → write the ratio. Then write seventh to sixth.
5. Packs to ribbons starts as **8** packs and **5** ribbons. Write packs:ribbons three ways.
6. Error hunt: A student writes “ratio of 18 to 21” as **21/18** because “bigger goes on bottom.” Correct it and name the mistake.

### Answer key (try first)

1. 8:2; 8 to 2; 8/2. Yes — order matters (2:8 is different).
2. 4:6 or 4 to 6 (or 4/6). Order swaps which quantity is named first.
3. False — 10:7 ≠ 7:10 unless the amounts are equal.
4. 17:5; reciprocal 5:17.
5. 8:5; 8 to 5; 8/5.
6. Correct 18:21, 18 to 21, 18/21. Mistake: inventing a “bigger on bottom” rule.
`,
    exitStretch: `## Exit ticket

1. Write **9 notebooks to 3 pencils** three ways.
2. Why is 9:3 different from 3:9?

## Stretch (optional)

Invent a sports or bake-sale scene with two counts. Write both orders (A to B and B to A) three ways each, and explain in one sentence why they are different.
`,
    questions: [
      {
        id: "ppg6ma99da1d4a049a71216ff",
        prompt: "A shelf has 9 notebooks and 3 pencils. Which shows notebooks to pencils?",
        choices: ["3:9", "9:3", "9:9", "3:3"],
        correctIndex: 1,
        explanation: "Notebooks first, pencils second → 9:3.",
        order: 1,
      },
      {
        id: "ppg6m12e94422d22d1f934af2",
        prompt: "Which statement is true?",
        choices: [
          "5:2 always equals 2:5",
          "Order in a ratio does not matter",
          "5:2, “5 to 2”, and 5/2 name the same comparison",
          "Ratios only use colon form",
        ],
        correctIndex: 2,
        explanation: "Colon, words, and fraction forms name the same ordered comparison.",
        order: 2,
      },
      {
        id: "ppg6ma59ebdf61d2036ffdd27",
        prompt: "The phrase “4 coaches to 20 players” as a fraction form is…",
        choices: ["20/4", "4/20", "24/4", "4/4"],
        correctIndex: 1,
        explanation: "Coaches first → 4/20.",
        order: 3,
      },
    ],
  },
  {
    id: "ppg6mdbf2a1264b34d23c27d3",
    title: "Equivalent Ratios",
    description: "Scale ratios up and down; recognize equivalent ratios in tables.",
    objectives: "• Scale a ratio up or down by multiplying (or dividing) both parts by the same positive number.\n• Recognize equivalent ratios.\n• Avoid adding the same amount to both parts.",
    order: 2,
    questionIds: ["ppg6m7f6db87ef56d9c11dc8b", "ppg6m9988a3637721fea547b2", "ppg6me6e219db3429dbb55d0e"],
    teachBody: `# Equivalent Ratios

*Grade 6 Mathematics · Unit 1 of 11 · Ratios · Lesson 2*

## Objective

**I can** make equivalent ratios by multiplying or dividing both parts by the same positive number.

## Warm-up (2 minutes)

A juice mix uses **2** cups concentrate and **3** cups water.

If you double the batch, how much concentrate and how much water do you need? Talk it out before writing.

## Teach

### Same relationship, bigger or smaller batch

**Equivalent ratios** name the same relationship with different totals.

To keep the taste (or the relationship) the same, multiply **both** parts by the same positive number — or divide both by the same positive number.

### Example 1 — scale up

Start with concentrate:water = **2:3**.

Multiply both by **4**:

- Concentrate: 2 × 4 = **8**
- Water: 3 × 4 = **12**

So **2:3** and **8:12** are equivalent.

### Try this

Scale **3:5** by a factor of **2**. Write the new ratio.

**Check:** 6:10

### Example 2 — adding is not scaling

A student starts with **2:3** and adds 4 to both parts → **6:7**.

That is **not** equivalent. Adding changes the relationship. Multiplying both by 4 would give **8:12**, which stays equivalent.

### Common mistake (this lesson only)

Adding the same number to both parts instead of multiplying. Fix: ask “What factor did I use on *both* numbers?”

## Guided practice (we do)

1. Scale **4:5** by 3.  
   **Answer:** 12:15

2. Is **10:15** equivalent to **2:3**? Show why.  
   **Answer:** Yes — divide both parts of 10:15 by 5 → 2:3.

3. A student writes 5:7 from 3:5 by “adding 2 to each.” Correct it with a true equivalent.  
   **Answer:** Adding fails. True equivalent examples: 6:10 (×2) or 9:15 (×3).
`,
    independent: `## Independent practice

Complete each item with visible work. Aim for clear diagrams + checked answers.

1. Ratio snacks:napkins = 8:7 at a library reading challenge. Write equivalents scaled by 3 and by 5.
2. Is 52:37 equivalent to 13:9? Show a test (table or simplify).
3. Complete: 12:10 = ____:50 = 24:____.
4. At a Saturday soccer tournament, a mix is 8 parts juice to 15 parts water. Give two different batch sizes with the same taste (equivalent ratios).
5. Explain why adding 16 to both parts of 16:12 does NOT make an equivalent ratio (use numbers).
6. Simplify 24:24, then scale the simplified ratio by 7. Are all three ratios equivalent?

### Answer key (try first)

*Check your work only after you attempt each item. Show your representation, not only the final number.*

1. 24:21 and 40:35.
2. No — only one quantity scaled correctly. Equivalent would be 52:36.
3. 60:50; 24:20.
4. Any same-scale pairs, e.g. 16:30 and 24:45.
5. Additive change breaks multiplicative relationship; e.g. 16:12 vs 32:28 are not equivalent in general.
6. Simplified 1:1; ×7 → 7:7. Yes — all equivalent.
`,
    exitStretch: `## Exit ticket

1. Write two ratios equivalent to **5:2**.
2. Why is **7:4** (from adding 2 to each part of 5:2) *not* equivalent?

## Stretch (optional)

Build a 4-row table of equivalents for **3:4**. Circle the row that uses factor 5.
`,
    questions: [
      {
        id: "ppg6m7f6db87ef56d9c11dc8b",
        prompt: "Which ratio is equivalent to 3:4?",
        choices: ["6:8", "4:3", "3:8", "5:6"],
        correctIndex: 0,
        explanation: "Multiply both parts by 2: 3×2=6 and 4×2=8.",
        order: 1,
      },
      {
        id: "ppg6m9988a3637721fea547b2",
        prompt: "A student turns 2:5 into 4:7 by adding 2 to each part. What should they do instead to keep an equivalent ratio?",
        choices: [
          "Add 2 only to the first number",
          "Multiply both parts by the same positive number",
          "Swap the order to 5:2",
          "Subtract 2 from both parts",
        ],
        correctIndex: 1,
        explanation: "Equivalence comes from multiplying or dividing both parts by the same positive factor.",
        order: 2,
      },
      {
        id: "ppg6me6e219db3429dbb55d0e",
        prompt: "Scale 5:9 by a factor of 3. What is the new ratio?",
        choices: ["8:12", "15:27", "5:27", "15:9"],
        correctIndex: 1,
        explanation: "5×3=15 and 9×3=27 → 15:27.",
        order: 3,
      },
    ],
  },
  {
    id: "ppg6m552a25fb0026764b04e9",
    title: "Ratio Tables",
    description: "Build and read ratio tables to solve missing-value problems.",
    objectives: "• Build a ratio table by scaling both quantities with the same factors.\n• Find a missing value using a table row.\n• Avoid adding unrelated amounts down a column.",
    order: 3,
    questionIds: ["ppg6m14e99cc309db3d7c1626", "ppg6m1c6c6749665c63e658da", "ppg6mc0cdfd89af7f7496aa1a"],
    teachBody: `# Ratio Tables

*Grade 6 Mathematics · Unit 1 of 11 · Ratios · Lesson 3*

## Objective

**I can** build and read a ratio table to find missing values.

## Warm-up (2 minutes)

A snack pack uses **2** crackers for every **3** cheese cubes.

If you make **3** packs, how many crackers and cubes? Sketch a tiny table if it helps.

## Teach

### What a ratio table shows

A **ratio table** lists equivalent pairs in columns (or rows). Each new column multiplies **both** quantities by the same factor.

### Example 1 — fill a table

Ratio crackers:cubes = **2:3**.

| Factor | ×1 | ×2 | ×3 | ×5 |
|--------|----|----|----|----|
| Crackers | 2 | 4 | 6 | 10 |
| Cubes | 3 | 6 | 9 | 15 |

To find cubes for **10** crackers, read the ×5 column: **15** cubes.

### Try this

Using 2:3, what crackers match **9** cubes?

**Check:** 6 crackers (×3 column).

### Example 2 — missing value with a jump

A table starts 4 tickets for $6. Find cost for **20** tickets.

Factor from 4 to 20 is **5**. Cost: 6 × 5 = **$30**.

### Common mistake (this lesson only)

Adding different amounts down each column (for example +4 tickets and +5 dollars) instead of multiplying by one shared factor.

## Guided practice (we do)

1. Build a table for **3:5** with factors ×1, ×2, ×4.  
   **Answer:** (3,5), (6,10), (12,20)

2. From 5 miles in 2 hours, find hours for **15** miles.  
   **Answer:** Factor 3 → 2 × 3 = **6** hours.

3. A student fills packs 2,4,6 with ribbons 5,7,9. Why is that wrong for ratio 2:5?  
   **Answer:** They added 2 each time on ribbons instead of scaling; correct ribbons are 5,10,15.
`,
    independent: `## Independent practice

Complete each item with visible work. Aim for clear diagrams + checked answers.

1. Build a ratio table for 7 cups mix : 6 cups water with columns ×1, ×2, ×3, ×5. What water matches 35 mix?
2. A table shows packs 2,4,6 with ribbons 9, ____, ____ if the ratio is 2:9. Fill blanks.
3. Missing value: 11/□ = 33/33. Find the box and explain with a table row.
4. At Prosper Prep basketball practice, tickets sell at 17 tickets for $13. Use a table to find cost for 68 tickets and tickets for $39.
5. A student fills a table by adding 15 to the first column and 11 to the second. Why can that break equivalence when the ratio is 15:10?
6. Create your own 4-column ratio table for 11:21, then write one word problem that uses the ×4 column.

### Answer key (try first)

*Check your work only after you attempt each item. Show your representation, not only the final number.*

1. Rows (7,6), (14,12), (21,18), (35,30). Water for 35 mix = 30.
2. Ribbons 9, 18, 27 for packs 2,4,6.
3. □ = 11 (×3 on both: 11→33 and 11→33).
4. 68 tickets = ×4 → $52; $39 = ×3 → 51 tickets.
5. Must scale by the same factor (multiply), not add unrelated amounts.
6. Table includes (11,21)…(44,84); word problem must match that pair.
`,
    exitStretch: `## Exit ticket

A ratio table for **4:7** has a column with first number **20**. What is the second number?

## Stretch (optional)

Make a table for **5:8** through ×6. Write one store-price story that uses the ×6 column.
`,
    questions: [
      {
        id: "ppg6m14e99cc309db3d7c1626",
        prompt: "A ratio table for 2:5 includes the pair (2,5) and (6,?). What belongs in the box?",
        choices: ["7", "10", "15", "3"],
        correctIndex: 2,
        explanation: "Factor from 2 to 6 is 3; 5×3=15.",
        order: 1,
      },
      {
        id: "ppg6m1c6c6749665c63e658da",
        prompt: "Which move correctly builds the next equivalent column from 3:4?",
        choices: [
          "Add 2 to both → 5:6",
          "Multiply both by 2 → 6:8",
          "Add 2 to the first only → 5:4",
          "Swap to 4:3",
        ],
        correctIndex: 1,
        explanation: "Same factor on both parts keeps the ratio.",
        order: 2,
      },
      {
        id: "ppg6mc0cdfd89af7f7496aa1a",
        prompt: "Tickets are 5 for $8. Using a table, cost for 20 tickets is…",
        choices: ["$16", "$24", "$32", "$40"],
        correctIndex: 2,
        explanation: "20 = 5×4, so cost 8×4 = $32.",
        order: 3,
      },
    ],
  },
  {
    id: "ppg6mbc0ad0d6f452f560caac",
    title: "Double Number Lines",
    description: "Model equivalent ratios on double number lines.",
    objectives: "• Model equivalent ratios on two aligned number lines.\n• Read a missing value from matching marks.\n• Keep even spacing that matches the shared scale factor.",
    order: 4,
    questionIds: ["ppg6m8886446413f2d5a09dc6", "ppg6m43a37d4d35a6c951768c", "ppg6mf14fa4e531b6a02f4e44"],
    teachBody: `# Double Number Lines

*Grade 6 Mathematics · Unit 1 of 11 · Ratios · Lesson 4*

## Objective

**I can** show equivalent ratios on a double number line and read missing values.

## Warm-up (2 minutes)

Packs of stickers come **3** packs for **6** ribbons.

What would **2** packs “line up with” if the relationship stays the same? Estimate before drawing.

## Teach

### Two lines, one relationship

A **double number line** puts one quantity on the top line and the other on the bottom line. Marks that line up are equivalent pairs.

Spacing must stay even on each line so the scale factor stays honest.

### Example 1 — label matching marks

Ratio packs:ribbons = **3:6** (same as 1:2).

Top (packs): 0 · 3 · 6 · 9  
Bottom (ribbons): 0 · 6 · 12 · 18

So **9** packs line up with **18** ribbons.

### Try this

Using packs:ribbons = **4:10**, what ribbons line up with **8** packs?

**Check:** 20 ribbons (×2).

### Example 2 — find the unknown above a mark

Bottom shows ribbons **15**. Ratio packs:ribbons = **3:5**.

Factor from 5 to 15 is **3**, so packs = 3 × 3 = **9**.

### Common mistake (this lesson only)

Putting uneven gaps (for example jumping +3, then +5) so marks no longer share one scale.

## Guided practice (we do)

1. Double number line for **5:2** (miles:hours). Label miles 5,10,15 and matching hours.  
   **Answer:** Hours 2,4,6 under those marks.

2. Ratio 4:6. Ribbons hit **18**. Packs above that mark?  
   **Answer:** 12 packs (×3).

3. A student labels packs 2,4,8 with ribbons 3,6,9. What went wrong?  
   **Answer:** Packs jumped unevenly (×2 then ×2 again from start would be 2,4,8 only if start factor pattern matches; ribbons should be 3,6,12 for factors 1,2,4).
`,
    independent: `## Independent practice

Complete each item with visible work. Aim for clear diagrams + checked answers.

1. Double number line: top shows 8, 16, 24 packs. Ratio packs:ribbons = 8:6. Label ribbons under each mark.
2. On a double number line for an East Texas trail hike, ribbons hit 42 under an unknown pack mark. If ratio is 11:14, what pack amount is above 42?
3. Sketch (describe) a double number line for 12 miles in 10 hours. Mark one more equivalent pair.
4. Why must tick marks stay evenly spaced in the same ratio scale on both lines? Give a wrong labeling example using 17:13.
5. Use a double number line to find ribbons when packs = 45 if 9:14 is packs:ribbons.
6. Compare methods: solve “packs 40 → ribbons?” with a table AND a double number line for 10:20. Do answers match?

### Answer key (try first)

*Check your work only after you attempt each item. Show your representation, not only the final number.*

1. Ribbons 6, 12, 18.
2. 33 packs (42÷14=3; 11×3=33).
3. e.g. also 24 miles in 20 hours (×2).
4. Uneven spacing breaks the constant rate; e.g. labeling 26 under 51 would be wrong for 17:13.
5. Factor 5 → ribbons 70.
6. Both give 80 ribbons; methods should match.
`,
    exitStretch: `## Exit ticket

On a double number line for **6:9**, what bottom mark lines up with top **18**?

## Stretch (optional)

Draw (or carefully describe) a double number line for **7:4**. Mark the pair for factor 3 and write one sentence about what the marks mean.
`,
    questions: [
      {
        id: "ppg6m8886446413f2d5a09dc6",
        prompt: "Double number line for packs:ribbons = 5:8. What ribbons line up with 15 packs?",
        choices: ["16", "24", "40", "8"],
        correctIndex: 1,
        explanation: "15 = 5×3, so ribbons 8×3 = 24.",
        order: 1,
      },
      {
        id: "ppg6m43a37d4d35a6c951768c",
        prompt: "Why must marks stay evenly spaced on a double number line for a ratio?",
        choices: [
          "So addition works instead of multiplication",
          "So each jump uses the same scale factor on both lines",
          "So the top line can use negatives",
          "So order in the ratio no longer matters",
        ],
        correctIndex: 1,
        explanation: "Even spacing keeps one shared multiplicative scale.",
        order: 2,
      },
      {
        id: "ppg6mf14fa4e531b6a02f4e44",
        prompt: "Ratio miles:hours = 4:2. Hours under the mark for 12 miles?",
        choices: ["3", "6", "8", "10"],
        correctIndex: 1,
        explanation: "12 = 4×3 → hours 2×3 = 6.",
        order: 3,
      },
    ],
  },
  {
    id: "ppg6mb17d9d3e6d765a6605aa",
    title: "Part-to-Part and Part-to-Whole",
    description: "Distinguish part-to-part from part-to-whole comparisons.",
    objectives: "• Tell part-to-part comparisons from part-to-whole comparisons.\n• Write both forms from the same counts.\n• Match the question to the correct comparison type.",
    order: 5,
    questionIds: ["ppg6meda99bb99e4df2a1ed4d", "ppg6m24e3b7b946f2584b5d91", "ppg6m7c06db7b589a74a12d1e"],
    teachBody: `# Part-to-Part and Part-to-Whole

*Grade 6 Mathematics · Unit 1 of 11 · Ratios · Lesson 5*

## Objective

**I can** tell the difference between part-to-part and part-to-whole ratios and write both.

## Warm-up (2 minutes)

A club has **5** sixth-graders and **3** seventh-graders.

How many students are in the club altogether?

## Teach

### Two kinds of comparison

**Part-to-part** compares one part with another part (sixth to seventh).

**Part-to-whole** compares one part with the total (sixth to all students).

Same counts — different questions — different ratios.

### Example 1

Sixth: **5**, seventh: **3**, total: **8**.

- Part-to-part sixth:seventh → **5:3**
- Part-to-whole sixth:all → **5:8**
- Part-to-whole seventh:all → **3:8**

### Try this

Apples **6**, oranges **4**, fruit total **10**. Write apples:oranges and apples:fruit.

**Check:** 6:4 (part-to-part) and 6:10 (part-to-whole)

### Example 2 — match the question

“What fraction of the fruit is apples?” needs **part-to-whole** (6/10), not apples:oranges.

### Common mistake (this lesson only)

Answering a whole-group question with a part-to-part ratio. Fix: ask “Did they ask about the total?”

## Guided practice (we do)

1. Team: 8 blue shirts, 2 red shirts. Write blue:red and blue:all.  
   **Answer:** 8:2 and 8:10

2. Which comparison answers “What fraction of the team wears red?”  
   **Answer:** Part-to-whole red:all = 2:10 (or 2/10)

3. True or false: 8:2 equals 8:10.  
   **Answer:** False — different comparisons.
`,
    independent: `## Independent practice

Complete each item with visible work. Aim for clear diagrams + checked answers.

1. Team: 7 sixth + 12 seventh (19 total). Write part-to-part sixth:seventh and part-to-whole sixth:all.
2. Which comparison answers “What fraction of the team is sixth grade?” for 13 sixth and 14 seventh?
3. A fruit bowl has 7 apples and 10 oranges. Write apples:oranges and apples:fruit. Context: Prosper Prep basketball practice.
4. True/false: part-to-part 14:9 equals part-to-whole 14:23. Explain.
5. If part-to-whole sixth:all = 14:32, how many are not sixth grade?
6. Write a question that requires part-to-part and another that requires part-to-whole using 13 and 14 athletes.

### Answer key (try first)

*Check your work only after you attempt each item. Show your representation, not only the final number.*

1. 7:12 and 7:19.
2. Part-to-whole 13:27 (13 sixth out of 27 total).
3. 7:10 and 7:17.
4. False — one compares parts; the other compares a part to the whole.
5. 32 − 14 = 18 not sixth grade.
6. e.g. “13 to 14 athletes” (part-to-part) vs “13 out of 27 athletes” (part-to-whole).
`,
    exitStretch: `## Exit ticket

A bowl has **9** grapes and **6** berries. Write grape:berry and grape:fruit.

## Stretch (optional)

Write one survey question that needs part-to-part and one that needs part-to-whole for a class with 11 girls and 10 boys. (Use those counts only — no other themes.)
`,
    questions: [
      {
        id: "ppg6meda99bb99e4df2a1ed4d",
        prompt: "A team has 6 sixth-graders and 4 seventh-graders. Which is the part-to-whole ratio sixth:all?",
        choices: ["6:4", "4:6", "6:10", "4:10"],
        correctIndex: 2,
        explanation: "Whole is 10; sixth to all is 6:10.",
        order: 1,
      },
      {
        id: "ppg6m24e3b7b946f2584b5d91",
        prompt: "Which question needs a part-to-part ratio?",
        choices: [
          "What fraction of the fruit is apples?",
          "How do apples compare with oranges?",
          "What fraction of the fruit is oranges?",
          "How many pieces of fruit are there?",
        ],
        correctIndex: 1,
        explanation: "Comparing apples with oranges is part-to-part.",
        order: 2,
      },
      {
        id: "ppg6m7c06db7b589a74a12d1e",
        prompt: "Apples 5, oranges 7. Apples:fruit is…",
        choices: ["5:7", "5:12", "7:5", "7:12"],
        correctIndex: 1,
        explanation: "Fruit total 12 → apples:fruit = 5:12.",
        order: 3,
      },
    ],
  },
  {
    id: "ppg6m58ce71646e98365cbc7c",
    title: "Simplifying Ratios",
    description: "Rewrite ratios in simplest whole-number form.",
    objectives: "• Simplify a ratio by dividing both parts by their greatest common factor (GCF).\n• Recognize when a ratio is already simplest.\n• Avoid dividing only one part.",
    order: 6,
    questionIds: ["ppg6m8656d8ff99878286ecdf", "ppg6me2c372bf24cb100f27ee", "ppg6mdfd42c74f5f7650242c2"],
    teachBody: `# Simplifying Ratios

*Grade 6 Mathematics · Unit 1 of 11 · Ratios · Lesson 6*

## Objective

**I can** rewrite a ratio in simplest whole-number form by dividing both parts by the GCF.

## Warm-up (2 minutes)

Look at **8:12**. Name any common factor of 8 and 12 (a number that divides both).

## Teach

### Simplest form

A ratio is in **simplest form** when both parts are whole numbers that share no common factor greater than 1.

Divide **both** parts by the **greatest common factor (GCF)**.

### Example 1

Simplify **8:12**.

GCF(8,12) = **4**.

8 ÷ 4 = 2, 12 ÷ 4 = 3 → **2:3**.

### Try this

Simplify **10:15**.

**Check:** GCF 5 → **2:3**

### Example 2 — already simplest?

Is **7:9** already simplest? GCF(7,9) = 1, so **yes**.

### Common mistake (this lesson only)

Dividing only one part (for example 32:28 → 32:14). Fix: whatever you divide on the left, divide on the right.

## Guided practice (we do)

1. Simplify **18:24**. Show the GCF.  
   **Answer:** GCF 6 → **3:4**

2. Is **14:8** simplest? If not, simplify.  
   **Answer:** No; GCF 2 → **7:4**

3. Error hunt: 20:30 → 20:15. Correct it.  
   **Answer:** Must divide both by 10 (or by 5 then 2) → **2:3**, not 20:15.
`,
    independent: `## Independent practice

Complete each item with visible work. Aim for clear diagrams + checked answers.

1. Simplify 24:28. Show the GCF you divide by. Context: a scholarship bake sale.
2. Is 14:8 already simplest? If not, simplify. If yes, explain using GCF.
3. A banner ratio 36:48 should be reported in simplest form for a poster. Write it.
4. Simplify stepwise: 60:52 → ÷2 → ____ → ÷2 → ____.
5. Error hunt: Student simplifies 32:28 to 32:14. Correct and name the error.
6. Give an unsimplified ratio equivalent to 13:6 that uses a factor of 3, then simplify back.

### Answer key (try first)

*Check your work only after you attempt each item. Show your representation, not only the final number.*

1. Divide by 4; simplified 6:7.
2. GCF(14,8)=2; simplest 7:4.
3. 3:4.
4. 30:26 then 15:13.
5. Correct 8:7 (divide both by 4). Error: divided only the second number.
6. 39:18 → 13:6.
`,
    exitStretch: `## Exit ticket

Simplify **16:20**. Show the GCF.

## Stretch (optional)

Write three ratios equivalent to **5:6** that are *not* simplest, then simplify each back.
`,
    questions: [
      {
        id: "ppg6m8656d8ff99878286ecdf",
        prompt: "Simplify 12:18.",
        choices: ["6:9", "2:3", "12:18", "3:2"],
        correctIndex: 1,
        explanation: "GCF 6 → 2:3. (6:9 is not fully simplified.)",
        order: 1,
      },
      {
        id: "ppg6me2c372bf24cb100f27ee",
        prompt: "A student simplifies 24:36 to 24:18. What went wrong?",
        choices: [
          "They should have swapped to 36:24",
          "They divided only one part instead of both by the same factor",
          "24:36 is already simplest",
          "They needed to add 12 to both parts",
        ],
        correctIndex: 1,
        explanation: "Both parts must be divided by the same factor; correct is 2:3.",
        order: 2,
      },
      {
        id: "ppg6mdfd42c74f5f7650242c2",
        prompt: "Which ratio is already in simplest form?",
        choices: ["8:12", "9:12", "7:10", "15:25"],
        correctIndex: 2,
        explanation: "GCF(7,10)=1.",
        order: 3,
      },
    ],
  },
  {
    id: "ppg6m5802c985106e3c77d660",
    title: "Comparing Ratios",
    description: "Decide which ratio is greater using equivalent forms or unit thinking.",
    objectives: "• Compare two ratios using unit rates or equivalent forms.\n• Decide which ratio is greater with clear arithmetic.\n• Avoid comparing only the first numbers.",
    order: 7,
    questionIds: ["ppg6m12da1eae6f728e2b5d7d", "ppg6m7b5cca735f4b027a1f81", "ppg6m9175fed345a54f1f83e6"],
    teachBody: `# Comparing Ratios

*Grade 6 Mathematics · Unit 1 of 11 · Ratios · Lesson 7*

## Objective

**I can** decide which ratio is greater using unit rates or equivalent forms.

## Warm-up (2 minutes)

Team A scores **4** points in **2** games. Team B scores **9** points in **3** games.

Which team is scoring faster? Make a quick guess, then be ready to check with math.

## Teach

### Fair comparisons

To compare ratios, make the second terms the same, **or** compare **unit rates** (first ÷ second).

### Example 1 — unit rates

Compare **4:2** and **9:3**.

- 4 ÷ 2 = **2** points per game
- 9 ÷ 3 = **3** points per game

Team B’s ratio is greater.

### Try this

Which is greater, **6:4** or **8:6**? Use unit rates (first÷second).

**Check:** 6÷4 = 1.5; 8÷6 ≈ 1.33 → **6:4** is greater.

### Example 2 — same second term

Compare **3:5** and **4:5**. Same second term **5**, so compare first terms: **4:5** is greater.

### Common mistake (this lesson only)

Saying “14:5 > 15:6 because 14 is… wait, because the first number looks big” without a fair test. Fix: compute both unit rates.

## Guided practice (we do)

1. Which is greater, **10:4** or **12:6**?  
   **Answer:** 10÷4 = 2.5; 12÷6 = 2 → **10:4**

2. Compare **5:8** and **5:7**.  
   **Answer:** Same first term; larger second means smaller unit rate → **5:7** is greater (5/7 > 5/8).

3. Error hunt: “11:13 > 12:16 because 11 < 12 is false so first is bigger…?” Repair the reasoning.  
   **Answer:** Compare 11/13 ≈ 0.85 vs 12/16 = 0.75 → **11:13** is greater; you need the rates, not a story about which first number is bigger alone.
`,
    independent: `## Independent practice

Complete each item with visible work. Aim for clear diagrams + checked answers.

1. Which is greater, 11:13 or 12:16? Compare unit rates (first÷second).
2. At a scholarship bake sale, Team A scores 5 points in 6 games; Team B 7 in 8. Who has the higher points-per-game ratio?
3. Make an equivalent form of 16:9 with second term 10× larger, then compare to 17:90.
4. Explain a fair comparison method when denominators differ, using 10:11 vs 12:14.
5. Without a calculator narrative: estimate which is larger, 9:18 or 1:2, and justify.
6. Error hunt: Student says 14:5 > 15:6 “because 14 > nothing needed — first number bigger.” Correct the reasoning.

### Answer key (try first)

*Check your work only after you attempt each item. Show your representation, not only the final number.*

1. 11/13 ≈ 0.846; 12/16 = 0.75 → 11:13 greater.
2. A: 5/6 ≈ 0.833; B: 7/8 = 0.875 → Team B.
3. 16:9 → 160:90; compare 160/90 ≈ 1.778 vs 17/90 ≈ 0.189 → 16:9 much greater.
4. Use unit rates or scale to a common second term.
5. 9:18 = 1:2; they are equal.
6. Compare 14/5 = 2.8 vs 15/6 = 2.5 → 14:5 is greater, but because of unit rates — not “first number bigger” alone.
`,
    exitStretch: `## Exit ticket

Which is greater, **8:5** or **9:6**? Show unit rates.

## Stretch (optional)

Invent two sports ratios with different second terms. Prove which is greater two ways (unit rate and equivalent forms).
`,
    questions: [
      {
        id: "ppg6m12da1eae6f728e2b5d7d",
        prompt: "Which ratio is greater, 6:4 or 8:6?",
        choices: ["6:4", "8:6", "They are equal", "Cannot tell"],
        correctIndex: 0,
        explanation: "6÷4=1.5 and 8÷6≈1.33, so 6:4 is greater.",
        order: 1,
      },
      {
        id: "ppg6m7b5cca735f4b027a1f81",
        prompt: "A fair way to compare 3:5 and 4:7 is to…",
        choices: [
          "Compare only 3 and 4",
          "Compare unit rates 3÷5 and 4÷7",
          "Add 5+7 and compare totals",
          "Always pick the ratio with the larger second number",
        ],
        correctIndex: 1,
        explanation: "Unit rates (or equivalent forms) make the comparison fair.",
        order: 2,
      },
      {
        id: "ppg6m9175fed345a54f1f83e6",
        prompt: "Team A: 10 points in 4 games. Team B: 12 points in 6 games. Who has the higher points-per-game ratio?",
        choices: ["Team A", "Team B", "Tie", "Not enough information"],
        correctIndex: 0,
        explanation: "A: 10/4=2.5; B: 12/6=2 → Team A.",
        order: 3,
      },
    ],
  },
  {
    id: "ppg6m43653926b886ad6e2c3d",
    title: "Ratio Word Problems",
    description: "Solve multi-step ratio stories with tables and diagrams.",
    objectives: "• Solve multi-step ratio stories with a table or diagram.\n• Find missing values that keep the ratio constant.\n• Check that both quantities scale by the same factor.",
    order: 8,
    questionIds: ["ppg6mb46a581075ecbdfb9530", "ppg6m5f2f16e8add59176c0b7", "ppg6mbd13593e9694ee82e0c2"],
    teachBody: `# Ratio Word Problems

*Grade 6 Mathematics · Unit 1 of 11 · Ratios · Lesson 8*

## Objective

**I can** solve multi-step ratio stories by finding the scale factor and missing values.

## Warm-up (2 minutes)

A paint mix is **2** cups blue to **3** cups white.

You want **6** cups blue at the same shade. How much white do you need? Say the factor you used.

## Teach

### Story → ratio → factor → answer

1. Write the ratio from the story.  
2. Find the scale factor that matches the new amount.  
3. Multiply the other part by that same factor.  
4. Check: both parts should grow (or shrink) together.

### Example 1

Juice mix concentrate:water = **2:5**. How much water for **8** cups concentrate?

Factor from 2 to 8 is **4**. Water: 5 × 4 = **20** cups.

### Try this

Chaperones:students = **3:15**. How many chaperones for **45** students?

**Check:** Factor 3 → **9** chaperones.

### Example 2 — two asks

Map scale **2 cm : 5 km**. A road is **8 cm** on the map. How many km?

Factor 4 → 5 × 4 = **20 km**.

### Common mistake (this lesson only)

Scaling only the mentioned quantity and leaving the other unchanged. Fix: circle both parts and multiply both by the factor.

## Guided practice (we do)

1. Mix 4:7 oil:vinegar. Vinegar for **12** oil?  
   **Answer:** Factor 3 → **21** vinegar.

2. 5 coaches for 40 players. Players for **15** coaches?  
   **Answer:** Factor 3 → **120** players.

3. A student keeps water at 5 when concentrate goes from 2 to 8. Repair.  
   **Answer:** Water must become 20 (×4), not stay 5.
`,
    independent: `## Independent practice

Complete each item with visible work. Aim for clear diagrams + checked answers.

1. Juice mix 11 concentrate : 6 water. Water needed for 44 concentrate? Concentrate for 18 water?
2. At a family trip on I-20, 10 chaperones for 13 students. How many chaperones for 65 students at the same ratio?
3. A paint mix is 11 blue to 10 white. How much white with 22 blue? How much blue with 50 white?
4. Two-step: Start with 10:10 ribbon:bows. You need 30 bows. Find ribbons, then cost if ribbon is $2 per unit.
5. A map scale is 11 cm : 18 km. A road measures 44 cm on the map. How many km?
6. Write and solve your own multi-step ratio story using 17:14 about a science-fair supply run. Include a missing-value ask.

### Answer key (try first)

*Check your work only after you attempt each item. Show your representation, not only the final number.*

1. Water 24 for 44 concentrate (×4); concentrate 33 for 18 water (×3).
2. 50 chaperones (×5).
3. White 20 with 22 blue (×2); blue 55 with 50 white (×5).
4. Ribbons 30; cost $60.
5. 72 km (×4).
6. Story must use ratio 17:14 with a correct missing-value solution.
`,
    exitStretch: `## Exit ticket

Ribbon:bows = **4:6**. How many ribbons for **18** bows?

## Stretch (optional)

Write a two-step story (find a missing amount, then a cost) using ratio **5:8**. Solve it.
`,
    questions: [
      {
        id: "ppg6mb46a581075ecbdfb9530",
        prompt: "Mix 3 cups syrup to 5 cups water. How much water for 9 cups syrup?",
        choices: ["10", "15", "12", "8"],
        correctIndex: 1,
        explanation: "Factor 3 → water 5×3=15.",
        order: 1,
      },
      {
        id: "ppg6m5f2f16e8add59176c0b7",
        prompt: "4 chaperones for 28 students. Chaperones needed for 56 students?",
        choices: ["6", "7", "8", "14"],
        correctIndex: 2,
        explanation: "Factor 2 → chaperones 4×2=8.",
        order: 2,
      },
      {
        id: "ppg6mbd13593e9694ee82e0c2",
        prompt: "Map scale 2 cm : 7 km. A path is 10 cm on the map. Length in km?",
        choices: ["14", "28", "35", "70"],
        correctIndex: 2,
        explanation: "Factor 5 → 7×5=35 km.",
        order: 3,
      },
    ],
  },
  {
    id: "ppg6m86a8c44ded99194d4324",
    title: "Mixing and Recipes",
    description: "Scale recipes and mixtures while keeping ratios constant.",
    objectives: "• Scale recipes and mixtures by the same factor on every ingredient.\n• Keep taste (ratio) constant when batch size changes.\n• Spot batches that break the ratio by changing only one part.",
    order: 9,
    questionIds: ["ppg6m29677f8f5f78a81b7a50", "ppg6m22ef16c633fb92e2624c", "ppg6m041e00c190d0598226b0"],
    teachBody: `# Mixing and Recipes

*Grade 6 Mathematics · Unit 1 of 11 · Ratios · Lesson 9*

## Objective

**I can** scale a recipe or mixture so every ingredient grows by the same factor and the ratio stays the same.

## Warm-up (2 minutes)

A cookie recipe for **2** servings uses **4** cups flour and **2** eggs.

What flour and eggs do you need for **4** servings?

## Teach

### Same taste means same ratio

When you double servings, double **every** ingredient. When you triple, triple every ingredient.

Changing only flour (and not sugar) changes the taste — the ratio breaks.

### Example 1 — scale up

Recipe for 2 servings: flour **4**, sugar **1**.

For **6** servings, factor = 3.

- Flour: 4 × 3 = **12**
- Sugar: 1 × 3 = **3**

Ratio stays **4:1**.

### Try this

Oil:vinegar = **6:2** for 4 people. Halve for 2 people.

**Check:** **3:1**

### Example 2 — broken batch

Start **8:4** juice:soda. Add 8 more juice only → **16:4**. That is a different drink.

To keep the ratio, juice and soda must both scale (for example ×2 → **16:8**).

### Common mistake (this lesson only)

Scaling one ingredient and leaving the others fixed. Fix: multiply the whole recipe by one factor.

## Guided practice (we do)

1. Recipe 5 cups oats : 2 cups raisins for 1 batch. Scale to 3 batches.  
   **Answer:** 15 oats, 6 raisins.

2. Trail mix 4 nuts : 3 fruit. You have **12** nuts. Fruit needed?  
   **Answer:** Factor 3 → **9** fruit.

3. Punch 10:5 juice:soda. Name one equivalent batch and one “oops” batch.  
   **Answer:** Equivalent e.g. 20:10; oops e.g. 20:5 (only juice doubled).
`,
    independent: `## Independent practice

Complete each item with visible work. Aim for clear diagrams + checked answers.

1. Recipe for 2 servings: 6 cups flour, 5 tbsp sugar. Scale to 6 servings.
2. Trail mix 11 cups nuts : 7 cups fruit. You only have 22 cups nuts. How much fruit to keep the ratio?
3. A batch for 4 people uses 10:2 oil:vinegar. Halve the recipe for 2 people.
4. Why can’t you add 17 cups flour alone to a 17:7 flour:sugar dough and keep the same taste?
5. Scale 16 eggs : 4 cups milk to use exactly 48 eggs. Milk needed?
6. At Prosper Prep basketball practice, punch is 10 juice : 5 soda. Make 2 equivalent batches (different sizes) and one non-equivalent “oops” batch.

### Answer key (try first)

*Check your work only after you attempt each item. Show your representation, not only the final number.*

1. Flour 18 cups; sugar 15 tbsp.
2. 14 cups fruit (×2).
3. 5:1.
4. Must scale both ingredients by the same factor.
5. 12 cups milk.
6. Equivalent e.g. 20:10, 30:15; oops changes only one part.
`,
    exitStretch: `## Exit ticket

Sauce is **3** tomatoes : **1** garlic for 2 servings. Scale to **6** servings.

## Stretch (optional)

Create a 3-ingredient snack ratio. Scale it to a party size and show the factor on each ingredient.
`,
    questions: [
      {
        id: "ppg6m29677f8f5f78a81b7a50",
        prompt: "Recipe 2 cups rice : 3 cups water for 2 servings. For 6 servings, rice and water are…",
        choices: ["4 rice, 6 water", "6 rice, 9 water", "2 rice, 9 water", "6 rice, 3 water"],
        correctIndex: 1,
        explanation: "Factor 3 → 2×3=6 rice and 3×3=9 water.",
        order: 1,
      },
      {
        id: "ppg6m22ef16c633fb92e2624c",
        prompt: "Mix 5:2 juice:soda. Which batch keeps the same taste?",
        choices: ["10:2", "10:4", "5:4", "15:2"],
        correctIndex: 1,
        explanation: "10:4 is ×2 on both parts.",
        order: 2,
      },
      {
        id: "ppg6m041e00c190d0598226b0",
        prompt: "Trail mix 4 nuts : 3 fruit. Fruit needed for 12 nuts?",
        choices: ["6", "9", "12", "3"],
        correctIndex: 1,
        explanation: "Factor 3 → fruit 3×3=9.",
        order: 3,
      },
    ],
  },
  {
    id: "ppg6m940b80d7538891c1577c",
    title: "Ratio Unit Review",
    description: "Synthesize ratio representations and catch common mistakes.",
    objectives: "• Use ratio forms, equivalents, tables, simplifying, and comparisons together.\n• Catch common Unit 1 mistakes (order, adding instead of scaling, part vs whole).\n• Explain answers with a short reason.",
    order: 10,
    questionIds: ["ppg6m0081fe6f83ccbbf6ac97", "ppg6mcb418a6fde0fb72ce8e6", "ppg6m4438c615e09f6d59309a"],
    teachBody: `# Ratio Unit Review

*Grade 6 Mathematics · Unit 1 of 11 · Ratios · Lesson 10*

## Objective

**I can** use Unit 1 ratio skills together and catch common mistakes.

## Warm-up (2 minutes)

Write **6:4** three ways. Then simplify it. Two skills, one ratio.

## Teach

### Skills to keep ready

1. **Order matters** — write the comparison the words ask for.  
2. **Equivalent ratios** — multiply or divide both parts by the same factor.  
3. **Tables / double number lines** — shared scale factor.  
4. **Part-to-part vs part-to-whole** — match the question.  
5. **Simplify** — divide by the GCF.  
6. **Compare** — use unit rates or matching terms.

### Example 1 — mixed check

Ratio blue:red jerseys = **8:4**.

- Three forms: 8:4, 8 to 4, 8/4  
- Simplified: **2:1**  
- Equivalent ×3: **24:12**  
- Part-to-whole blue:all if only those jerseys: **8:12**

### Try this

Is **9:12** equivalent to **3:4**? Simplify to check.

**Check:** Yes — divide by 3 → 3:4.

### Example 2 — error hunt

Student compares 6:8 and 9:12 by saying “6 < 9 so first is smaller.”  

Repair: both simplify to **3:4** — they are equal, not “first smaller.”

### Common mistake (this lesson only)

Mixing skills: using part-to-part when the question asked part-to-whole, or adding to “scale.” Name the skill before you compute.

## Guided practice (we do)

1. Write 10:15 three ways; simplify; scale by 2.  
   **Answer:** 10:15, 10 to 15, 10/15; simplest **2:3**; ×2 → **4:6** (from simplest) or 20:30 from original.

2. Part-to-part vs part-to-whole for 5 apples and 5 oranges.  
   **Answer:** 5:5 part-to-part; 5:10 apples:fruit.

3. Which is greater, 8:6 or 10:9?  
   **Answer:** 8/6 ≈ 1.33; 10/9 ≈ 1.11 → **8:6**
`,
    independent: `## Independent practice

Complete each item with visible work. Aim for clear diagrams + checked answers.

1. Review: Write 11:2 three ways; simplify 22:4.
2. Review: Scale 14:1 by 5; is 70:6 equivalent?
3. Review: Part-to-part vs part-to-whole for 6 and 3 (whole 9).
4. Review: Compare 10:2 to 11:5 with unit rates.
5. Review: Table missing value 11:□ = 33:30.
6. Review: Recipe scale — 14 flour : 12 sugar to 4× batch.

### Answer key (try first)

*Check your work only after you attempt each item. Show your representation, not only the final number.*

1. 11:2, 11 to 2, 11/2; simplified 11:2 (from 22:4 → 11:2).
2. 70:5; no for 70:6.
3. 6:3 vs 6:9.
4. 5.0 vs 2.2 → 10:2 greater.
5. □ = 10.
6. 56 flour, 48 sugar.
`,
    exitStretch: `## Exit ticket

1. Simplify **18:24**, then compare the result to **2:3**.
2. Name one Unit 1 mistake you will watch for next time.

## Stretch (optional)

Write a short error-hunt item for a classmate that mixes two Unit 1 skills. Include the correct repair.
`,
    questions: [
      {
        id: "ppg6m0081fe6f83ccbbf6ac97",
        prompt: "Which shows 8:12 correctly simplified?",
        choices: ["4:6", "2:3", "8:3", "16:24"],
        correctIndex: 1,
        explanation: "GCF 4 → 2:3. 4:6 is not fully simplified.",
        order: 1,
      },
      {
        id: "ppg6mcb418a6fde0fb72ce8e6",
        prompt: "A bowl has 4 apples and 6 oranges. Which is apples:fruit (part-to-whole)?",
        choices: ["4:6", "4:10", "6:4", "6:10"],
        correctIndex: 1,
        explanation: "Fruit total 10 → 4:10.",
        order: 2,
      },
      {
        id: "ppg6m4438c615e09f6d59309a",
        prompt: "Scale recipe 3:5 by a factor of 4. New ratio?",
        choices: ["7:9", "12:20", "3:20", "12:5"],
        correctIndex: 1,
        explanation: "3×4=12 and 5×4=20.",
        order: 3,
      },
    ],
  },
];

export function buildFullContent(lesson) {
  return `${lesson.teachBody.trim()}\n\n${lesson.independent.trim()}\n\n${lesson.exitStretch.trim()}\n`;
}
