-- Grade 6 Math Units 2–11: hand-authored Teach / Warm-up / Guided / Exit + skill Check MC.
-- Keeps existing lesson IDs and titles. Independent practice from skill banks.
-- UPDATE content + objectives + description + Question rows. Preserve videoUrl.
-- Do NOT run db:setup. Safe for production D1 (prosperprep-school).
-- Source: scripts/data/grade6-math-hand-teach.json — do not Mad-Lib overwrite via gen-grade6-math-year.mjs.

-- Unit 2 L1. Fraction Sense Refresh (ppg6m03a14da27c6ec1ff23b7)
UPDATE "Lesson" SET "content" = '# Fraction Sense Refresh

*Grade 6 Mathematics · Unit 2 of 11 · Arithmetic with Rational Numbers · Lesson 1*

## Objective

**I can** explain a fraction as parts of a whole and locate it on a number line.

## Warm-up (2 minutes)

Shade **3** of **4** equal parts of a rectangle. Say the fraction. Is it closer to 0, 1/2, or 1?

## Teach

### What a fraction means

A fraction `a/b` means **a** equal parts when the whole is split into **b** equal parts.

- Numerator = how many parts you have
- Denominator = how many equal parts make one whole

### Example 1 — number line

Place **3/4** on a number line from 0 to 1.

1. Split the segment into **4** equal lengths.
2. Count **3** marks from 0.
3. That point is **3/4**, between 1/2 and 1.

### Try this

Which is larger: **2/5** or **1/2**?

**Check:** 2/5 = 0.4 and 1/2 = 0.5, so **1/2** is larger.

### Example 2 — equivalent fractions

**2/3** and **4/6** name the same amount: multiply top and bottom by 2 → `(2×2)/(3×2) = 4/6`.

### Common mistake (this lesson only)

Claiming a larger denominator always makes a larger fraction (e.g. 1/8 > 1/3). Fix: with the same numerator, a **smaller** denominator means **larger** pieces.

## Guided practice (we do)

1. Place 1/4, 1/2, and 3/4 on a 0–1 number line.  
   **Answer:** Equally spaced quarters; 1/2 in the middle.

2. Write two fractions equivalent to 3/5.  
   **Answer:** Examples: 6/10, 9/15.

3. True or false: 4/8 equals 1/2.  
   **Answer:** True — divide top and bottom by 4.

## Independent practice

Complete each item. Show your work.

1. Place 2/3 and 3/5 on a 0–1 number line sketch for a Saturday soccer tournament. Which is closer to 1/2? Explain with a benchmark.
2. Place 3/4 and 3/7 on a 0–1 number line sketch for a science-fair supply run. Which is closer to 1/2? Explain with a benchmark.
3. Place 2/5 and 3/6 on a 0–1 number line sketch for a youth-group picnic. Which is closer to 1/2? Explain with a benchmark.
4. Place 2/6 and 1/8 on a 0–1 number line sketch for a library reading challenge. Which is closer to 1/2? Explain with a benchmark.
5. Place 1/2 and 1/5 on a 0–1 number line sketch for Prosper Prep basketball practice. Which is closer to 1/2? Explain with a benchmark.
6. Place 1/3 and 3/4 on a 0–1 number line sketch for an East Texas trail hike. Which is closer to 1/2? Explain with a benchmark.

### Answer key (try first)

1. Compare to 1/2: 2/3 > 1/2; 3/5 > 1/2. Closer to 1/2: distance check — |0.67−0.5| vs |0.60−0.5|.
2. Compare to 1/2: 3/4 > 1/2; 3/7 < 1/2. Closer to 1/2: distance check — |0.75−0.5| vs |0.43−0.5|.
3. Compare to 1/2: 2/5 < 1/2; 3/6 = 1/2. Closer to 1/2: distance check — |0.40−0.5| vs |0.50−0.5|.
4. Compare to 1/2: 2/6 < 1/2; 1/8 < 1/2. Closer to 1/2: distance check — |0.33−0.5| vs |0.13−0.5|.
5. Compare to 1/2: 1/2 = 1/2; 1/5 < 1/2. Closer to 1/2: distance check — |0.50−0.5| vs |0.20−0.5|.
6. Compare to 1/2: 1/3 < 1/2; 3/4 > 1/2. Closer to 1/2: distance check — |0.33−0.5| vs |0.75−0.5|.

## Exit ticket

1. Place 2/3 on a 0–1 number line using a benchmark.
2. Give one fraction equivalent to 5/6.

## Stretch (optional)

Explain why 5/8 > 1/2 without decimals.
', "objectives" = '• Explain a fraction as parts of a whole and locate it on a number line.
• Recognize equivalent fractions.
• Use benchmarks (0, 1/2, 1) to estimate.', "description" = 'Review fraction meaning, equivalence, and benchmarks on a number line.' WHERE "id" = 'ppg6m03a14da27c6ec1ff23b7' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m19ffdb7dc1b2ca9e9c71','ppg6m03a14da27c6ec1ff23b7',NULL,'MULTIPLE_CHOICE','Which fraction is closest to 1 on a 0–1 number line?','["1/8","3/8","1/2","7/8"]',3,'7/8 is one eighth short of a whole.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m1da79c2b9834e285e055','ppg6m03a14da27c6ec1ff23b7',NULL,'MULTIPLE_CHOICE','Which pair is equivalent?','["2/3 and 3/2","2/4 and 1/2","1/3 and 3/1","3/5 and 5/3"]',1,'2/4 simplifies to 1/2.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m4c0b7e80cefc3456ac05','ppg6m03a14da27c6ec1ff23b7',NULL,'MULTIPLE_CHOICE','A pizza has 6 equal slices; you eat 2. What fraction remains?','["2/6","4/6","2/4","6/2"]',1,'4 of 6 left → 4/6.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L2. Adding and Subtracting Fractions (ppg6m6373cc09f86ec44f415d)
UPDATE "Lesson" SET "content" = '# Adding and Subtracting Fractions

*Grade 6 Mathematics · Unit 2 of 11 · Arithmetic with Rational Numbers · Lesson 2*

## Objective

**I can** add and subtract fractions with like and unlike denominators.

## Warm-up (2 minutes)

Without writing: is **1/2 + 1/3** more or less than 1? How do you know?

## Teach

### Like denominators

Add or subtract numerators; keep the denominator.

`3/8 + 2/8 = 5/8`

### Example 1 — unlike denominators

`1/2 + 1/3`

1. Estimate: ≈ 0.5 + 0.33 ≈ 0.83 (less than 1).
2. Common denominator of 2 and 3 is **6**.
3. `1/2 = 3/6`, `1/3 = 2/6`.
4. `3/6 + 2/6 = 5/6`.

### Try this

`3/4 − 1/6`

**Check:** Common denominator 12 → `9/12 − 2/12 = 7/12`.

### Common mistake (this lesson only)

Adding denominators (`1/2 + 1/3 = 2/5`). Fix: make piece sizes match first.

## Guided practice (we do)

1. 2/5 + 1/5  
   **Answer:** 3/5

2. 5/6 − 1/4  
   **Answer:** 10/12 − 3/12 = 7/12

3. Estimate only: 7/8 + 1/9 — over or under 1?  
   **Answer:** Over 1.

## Independent practice

Complete each item. Show your work.

1. At a youth-group picnic, Maya walks 1/3 mile then 2/5 mile. How far did she walk in all? Estimate first, then compute with a common denominator.
2. At a library reading challenge, Maya walks 3/4 mile then 0/7 mile. How far did she walk in all? Estimate first, then compute with a common denominator.
3. At Prosper Prep basketball practice, Maya walks 3/5 mile then 2/6 mile. How far did she walk in all? Estimate first, then compute with a common denominator.
4. At an East Texas trail hike, Maya walks 3/6 mile then 6/8 mile. How far did she walk in all? Estimate first, then compute with a common denominator.
5. At a scholarship bake sale, Maya walks 1/2 mile then 4/5 mile. How far did she walk in all? Estimate first, then compute with a common denominator.
6. At a family trip on I-20, Maya walks 1/3 mile then 2/4 mile. How far did she walk in all? Estimate first, then compute with a common denominator.

### Answer key (try first)

1. Common denominator 15: 5/15 + 6/15 = 11/15.
2. Common denominator 28: 21/28 + 0/28 = 21/28 = 3/4.
3. Common denominator 30: 18/30 + 10/30 = 28/30 = 14/15.
4. Common denominator 24: 12/24 + 18/24 = 30/24 = 5/4.
5. Common denominator 10: 5/10 + 8/10 = 13/10.
6. Common denominator 12: 4/12 + 6/12 = 10/12 = 5/6.

## Exit ticket

1. Compute 1/2 + 2/5.
2. Name the mistake in “1/4 + 1/4 = 2/8.”

## Stretch (optional)

Write a word problem for 3/4 − 1/8 and solve it.
', "objectives" = '• Add and subtract fractions with like and unlike denominators.
• Estimate before computing.
• Rewrite with a common denominator when needed.', "description" = 'Add/subtract with like and unlike denominators; estimate first.' WHERE "id" = 'ppg6m6373cc09f86ec44f415d' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m01a542514e95a939cd72','ppg6m6373cc09f86ec44f415d',NULL,'MULTIPLE_CHOICE','What is 2/7 + 3/7?','["5/14","5/7","6/7","5/49"]',1,'Same denominator → 5/7.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m99b07aa0aa88994c2f87','ppg6m6373cc09f86ec44f415d',NULL,'MULTIPLE_CHOICE','A correct first step for 1/4 + 1/6 is…','["Add to get 2/10","Use common denominator 12","Multiply 1/4 × 1/6","Subtract denominators"]',1,'12 is a common multiple of 4 and 6.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ma7b03af2c1d2d3525b85','ppg6m6373cc09f86ec44f415d',NULL,'MULTIPLE_CHOICE','Compute 5/6 − 1/3.','["4/3","4/6","1/2","1/6"]',2,'1/3=2/6; 5/6−2/6=3/6=1/2.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L3. Multiplying Fractions (ppg6m9264f3f5e0548beb82bb)
UPDATE "Lesson" SET "content" = '# Multiplying Fractions

*Grade 6 Mathematics · Unit 2 of 11 · Arithmetic with Rational Numbers · Lesson 3*

## Objective

**I can** multiply fractions and interpret the product as a portion of a portion.

## Warm-up (2 minutes)

What is half of one-half of a sandwich? Talk it out before writing a fraction.

## Teach

### Rule

`(a/b) × (c/d) = (a×c)/(b×d)`. Then simplify if you can.

### Example 1 — portion of a portion

`1/2 × 3/4` means half of three-fourths.

`(1×3)/(2×4) = 3/8`.

### Try this

`2/3 × 3/5`

**Check:** `(2×3)/(3×5) = 6/15 = 2/5`.

### Example 2 — area model

A 1-by-1 square: shade 2/3 horizontally and 1/2 vertically. The overlap is `2/3 × 1/2 = 1/3` of the square.

### Common mistake (this lesson only)

Finding a common denominator before multiplying (that step is for add/subtract). Fix: multiply straight across, then simplify.

## Guided practice (we do)

1. 1/4 × 2/3  
   **Answer:** 2/12 = 1/6

2. 3/5 × 10/9  
   **Answer:** 30/45 = 2/3

3. True or false: multiplying two fractions each less than 1 can give a result greater than 1.  
   **Answer:** False — product is smaller than each factor when both are between 0 and 1.

## Independent practice

Complete each item. Show your work.

1. A garden plot is 1/3 of a full bed wide and 1/5 of a full bed long. What fraction of a full bed’s area is the plot? Multiply and simplify.
2. A garden plot is 1/4 of a full bed wide and 0/7 of a full bed long. What fraction of a full bed’s area is the plot? Multiply and simplify.
3. A garden plot is 1/5 of a full bed wide and 2/6 of a full bed long. What fraction of a full bed’s area is the plot? Multiply and simplify.
4. A garden plot is 2/6 of a full bed wide and 1/8 of a full bed long. What fraction of a full bed’s area is the plot? Multiply and simplify.
5. A garden plot is 1/2 of a full bed wide and 3/5 of a full bed long. What fraction of a full bed’s area is the plot? Multiply and simplify.
6. A garden plot is 2/3 of a full bed wide and 2/4 of a full bed long. What fraction of a full bed’s area is the plot? Multiply and simplify.

### Answer key (try first)

1. 1/3 × 1/5 = 1/15 = 1/15.
2. 1/4 × 0/7 = 0/28 = 0/1.
3. 1/5 × 2/6 = 2/30 = 1/15.
4. 2/6 × 1/8 = 2/48 = 1/24.
5. 1/2 × 3/5 = 3/10 = 3/10.
6. 2/3 × 2/4 = 4/12 = 1/3.

## Exit ticket

1. Compute 3/4 × 2/5.
2. Explain “half of 2/3” as a multiplication.

## Stretch (optional)

Draw an area model for 1/3 × 3/4.
', "objectives" = '• Multiply fractions and interpret the product as a portion of a portion.
• Multiply numerators and denominators.
• Simplify when helpful.', "description" = 'Multiply fractions and mixed numbers; interpret area models.' WHERE "id" = 'ppg6m9264f3f5e0548beb82bb' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6md15fdfc8a96f034d3153','ppg6m9264f3f5e0548beb82bb',NULL,'MULTIPLE_CHOICE','What is 1/2 × 2/5?','["2/10","3/7","1/5","2/7"]',2,'1/2×2/5=2/10=1/5.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ma7042100b88da9ea8234','ppg6m9264f3f5e0548beb82bb',NULL,'MULTIPLE_CHOICE','Which expression means “one-third of three-fourths”?','["1/3 + 3/4","1/3 × 3/4","3/4 − 1/3","3/4 ÷ 1/3"]',1,'“Of” for fractions usually means multiply.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mea55bffb6845878dfc7c','ppg6m9264f3f5e0548beb82bb',NULL,'MULTIPLE_CHOICE','Simplify 4/9 × 3/8.','["12/72","1/6","7/17","32/27"]',1,'12/72 = 1/6.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L4. Dividing Fractions by Whole Numbers (ppg6m1a9866035e9ffee533b6)
UPDATE "Lesson" SET "content" = '# Dividing Fractions by Whole Numbers

*Grade 6 Mathematics · Unit 2 of 11 · Arithmetic with Rational Numbers · Lesson 4*

## Objective

**I can** interpret dividing a fraction by a whole number as sharing.

## Warm-up (2 minutes)

You have **3/4** of a pan of brownies to share equally among **3** people. About how much does each get?

## Teach

### Meaning

`(a/b) ÷ n` means split the amount `a/b` into **n** equal shares.

### Example 1

`3/4 ÷ 3`

Each person gets one-third of three-fourths: `3/4 × 1/3 = 3/12 = 1/4`.

Or: `3/4 ÷ 3 = 3/(4×3) = 3/12 = 1/4`.

### Try this

`2/5 ÷ 4`

**Check:** `2/(5×4) = 2/20 = 1/10`.

### Check with multiplication

Does `1/4 × 3 = 3/4`? Yes — so the quotient is correct.

### Common mistake (this lesson only)

Dividing the denominator only (`3/4 ÷ 3 = 3/1`). Fix: you are making more, smaller pieces — denominator grows (or multiply by 1/n).

## Guided practice (we do)

1. 1/2 ÷ 2  
   **Answer:** 1/4

2. 4/5 ÷ 2  
   **Answer:** 4/10 = 2/5

3. Check: if 3/8 ÷ 3 = 1/8, does 1/8 × 3 = 3/8?  
   **Answer:** Yes.

## Independent practice

Complete each item. Show your work.

1. Share 2/3 of a pan of brownies equally among 3 students at Prosper Prep basketball practice. How much does each student get?
2. Share 3/4 of a pan of brownies equally among 4 students at an East Texas trail hike. How much does each student get?
3. Share 4/5 of a pan of brownies equally among 5 students at a scholarship bake sale. How much does each student get?
4. Share 5/6 of a pan of brownies equally among 2 students at a family trip on I-20. How much does each student get?
5. Share 1/2 of a pan of brownies equally among 3 students at the school garden. How much does each student get?
6. Share 2/3 of a pan of brownies equally among 4 students at a band concert ticket table. How much does each student get?

### Answer key (try first)

1. 2/3 ÷ 3 = 2/9 = 2/9.
2. 3/4 ÷ 4 = 3/16 = 3/16.
3. 4/5 ÷ 5 = 4/25 = 4/25.
4. 5/6 ÷ 2 = 5/12 = 5/12.
5. 1/2 ÷ 3 = 1/6 = 1/6.
6. 2/3 ÷ 4 = 2/12 = 1/6.

## Exit ticket

1. Compute 5/6 ÷ 5.
2. Write a sharing story for 2/3 ÷ 2.

## Stretch (optional)

Why is 3/4 ÷ 3 equal to 3/4 × 1/3?
', "objectives" = '• Interpret dividing a fraction by a whole number as sharing.
• Use the rule (a/b) ÷ n = a/(b×n).
• Check with multiplication.', "description" = 'Interpret division as sharing and partitioning.' WHERE "id" = 'ppg6m1a9866035e9ffee533b6' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m6043f57fb9ee114d6ecb','ppg6m1a9866035e9ffee533b6',NULL,'MULTIPLE_CHOICE','What is 3/4 ÷ 3?','["1","1/4","9/4","3/12 only (unsimplified)"]',1,'3/4÷3=1/4 (3/12 simplifies to 1/4).',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6md755ff8e926f35138051','ppg6m1a9866035e9ffee533b6',NULL,'MULTIPLE_CHOICE','2/3 ÷ 4 equals…','["8/3","2/12","1/6","6/4"]',2,'2/(3×4)=2/12=1/6.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mcedd686ae4a423d23127','ppg6m1a9866035e9ffee533b6',NULL,'MULTIPLE_CHOICE','Best check for 1/2 ÷ 2 = 1/4?','["1/4 + 2 = 1/2","1/4 × 2 = 1/2","1/4 ÷ 2 = 1/2","2 × 2 = 1/2"]',1,'Quotient × divisor = dividend.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L5. Dividing by a Fraction (ppg6m1346a92b50b1cb896407)
UPDATE "Lesson" SET "content" = '# Dividing by a Fraction

*Grade 6 Mathematics · Unit 2 of 11 · Arithmetic with Rational Numbers · Lesson 5*

## Objective

**I can** divide by a fraction using keep-change-flip with meaning.

## Warm-up (2 minutes)

How many **1/2**-cup servings are in **3** cups of juice? Estimate before computing.

## Teach

### Meaning

`a ÷ (c/d)` asks: how many groups of size `c/d` fit into `a`?

### Keep-change-flip

`a/b ÷ c/d = a/b × d/c` (multiply by the reciprocal).

### Example 1

`3 ÷ 1/2`

How many halves in 3? Keep 3, change to ×, flip 1/2 → 2/1.

`3 × 2 = 6` servings.

### Try this

`2/3 ÷ 1/6`

**Check:** `2/3 × 6/1 = 12/3 = 4`.

### Example 2 — estimate first

`1/2 ÷ 1/4`: half is bigger than one-fourth, so the quotient should be **greater than 1**. Indeed `1/2 × 4/1 = 2`.

### Common mistake (this lesson only)

Flipping the first fraction instead of the second. Fix: only the divisor (the one you divide *by*) becomes its reciprocal.

## Guided practice (we do)

1. 4 ÷ 1/4  
   **Answer:** 16

2. 3/4 ÷ 3/8  
   **Answer:** 3/4 × 8/3 = 2

3. Is 1/3 ÷ 2/3 greater or less than 1?  
   **Answer:** Less than 1 (equals 1/2).

## Independent practice

Complete each item. Show your work.

1. How many 1/3-cup servings are in 9 cups of mix? Use keep-change-flip and check with multiplication.
2. How many 3/4-cup servings are in 9 cups of mix? Use keep-change-flip and check with multiplication.
3. How many 2/5-cup servings are in 11 cups of mix? Use keep-change-flip and check with multiplication.
4. How many 1/6-cup servings are in 13 cups of mix? Use keep-change-flip and check with multiplication.
5. How many 1/2-cup servings are in 14 cups of mix? Use keep-change-flip and check with multiplication.
6. How many 1/3-cup servings are in 14 cups of mix? Use keep-change-flip and check with multiplication.

### Answer key (try first)

1. 9 ÷ 1/3 = 9 × 3/1 = 27. Check: servings × 1/3 = 9.
2. 9 ÷ 3/4 = 9 × 4/3 = 12. Check: servings × 3/4 = 9.
3. 11 ÷ 2/5 = 11 × 5/2 = 27.5. Check: servings × 2/5 = 11.
4. 13 ÷ 1/6 = 13 × 6/1 = 78. Check: servings × 1/6 = 13.
5. 14 ÷ 1/2 = 14 × 2/1 = 28. Check: servings × 1/2 = 14.
6. 14 ÷ 1/3 = 14 × 3/1 = 42. Check: servings × 1/3 = 14.

## Exit ticket

1. Compute 5/6 ÷ 1/3.
2. Why does dividing by 1/2 double the number?

## Stretch (optional)

Write a serving story for 2 ÷ 1/4.
', "objectives" = '• Divide by a fraction using keep-change-flip with meaning.
• Check the quotient with multiplication.
• Estimate whether the quotient should be greater or less than 1.', "description" = 'Use keep-change-flip with meaning; check with multiplication.' WHERE "id" = 'ppg6m1346a92b50b1cb896407' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6me77b9dfb3f5c399ecc27','ppg6m1346a92b50b1cb896407',NULL,'MULTIPLE_CHOICE','What is 2 ÷ 1/4?','["1/2","8","1/8","4"]',1,'2×4=8.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m5469d95efcb1ec6cccbe','ppg6m1346a92b50b1cb896407',NULL,'MULTIPLE_CHOICE','3/5 ÷ 1/5 equals…','["3","3/25","1/3","15"]',0,'3/5×5/1=3.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m973e6751edbad1805cc9','ppg6m1346a92b50b1cb896407',NULL,'MULTIPLE_CHOICE','Which is the reciprocal of 2/7?','["7/2","2/7","−2/7","7/2 only if improper"]',0,'Reciprocal swaps numerator and denominator: 7/2.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L6. Mixed Numbers and Improper Fractions (ppg6me8ff373d3d0a84c1f534)
UPDATE "Lesson" SET "content" = '# Mixed Numbers and Improper Fractions

*Grade 6 Mathematics · Unit 2 of 11 · Arithmetic with Rational Numbers · Lesson 6*

## Objective

**I can** convert mixed numbers to improper fractions and back.

## Warm-up (2 minutes)

Is **2 1/3** closer to 2 or to 3? Rewrite it as a single fraction greater than 1.

## Teach

### Mixed → improper

`a b/c = (a×c + b)/c`.

`2 1/3 = (2×3 + 1)/3 = 7/3`.

### Improper → mixed

Divide numerator by denominator: `11/4 = 2 3/4` because 11 = 2×4 + 3.

### Try this

Convert `3 2/5` to improper form.

**Check:** `(3×5 + 2)/5 = 17/5`.

### When to convert

Multiplying or dividing mixed numbers is often easier after converting to improper fractions first.

### Common mistake (this lesson only)

Writing `2 1/3` as `2/3` (dropping the whole). Fix: the whole number counts full groups of the denominator.

## Guided practice (we do)

1. Convert 4 1/2 to improper.  
   **Answer:** 9/2

2. Convert 17/5 to mixed.  
   **Answer:** 3 2/5

3. Which is greater: 5/3 or 1 1/2?  
   **Answer:** 5/3 = 1 2/3 > 1 1/2.

## Independent practice

Complete each item. Show your work.

1. Convert 2 2/3 to an improper fraction. Convert 11/3 to a mixed number. Context: measuring for a youth-group picnic.
2. Convert 3 2/4 to an improper fraction. Convert 18/4 to a mixed number. Context: measuring for a library reading challenge.
3. Convert 1 2/5 to an improper fraction. Convert 12/5 to a mixed number. Context: measuring for Prosper Prep basketball practice.
4. Convert 2 2/6 to an improper fraction. Convert 20/6 to a mixed number. Context: measuring for an East Texas trail hike.
5. Convert 3 1/2 to an improper fraction. Convert 9/2 to a mixed number. Context: measuring for a scholarship bake sale.
6. Convert 1 2/3 to an improper fraction. Convert 8/3 to a mixed number. Context: measuring for a family trip on I-20.

### Answer key (try first)

1. 2 2/3 = 8/3. 11/3 = 3 2/3 (or 3.6666666666666665 if num1=0).
2. 3 2/4 = 14/4. 18/4 = 4 2/4 (or 4.5 if num1=0).
3. 1 2/5 = 7/5. 12/5 = 2 2/5 (or 2.4 if num1=0).
4. 2 2/6 = 14/6. 20/6 = 3 2/6 (or 3.3333333333333335 if num1=0).
5. 3 1/2 = 7/2. 9/2 = 4 1/2 (or 4.5 if num1=0).
6. 1 2/3 = 5/3. 8/3 = 2 2/3 (or 2.6666666666666665 if num1=0).

## Exit ticket

1. Convert 2 3/4 to improper.
2. Convert 10/3 to mixed.

## Stretch (optional)

Multiply 1 1/2 × 2/3 by converting first.
', "objectives" = '• Convert mixed numbers to improper fractions and back.
• Choose the form that fits the problem.
• Avoid mixing whole and fraction parts incorrectly when computing.', "description" = 'Convert fluently; choose the form that fits the problem.' WHERE "id" = 'ppg6me8ff373d3d0a84c1f534' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m7e788a28a5397867ccbe','ppg6me8ff373d3d0a84c1f534',NULL,'MULTIPLE_CHOICE','2 1/4 as an improper fraction is…','["5/4","9/4","6/4","3/4"]',1,'(2×4+1)/4=9/4.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m08c9b1eafc93bdbd07ed','ppg6me8ff373d3d0a84c1f534',NULL,'MULTIPLE_CHOICE','14/3 as a mixed number is…','["3 5/3","4 2/3","5 1/3","4 1/3"]',1,'14=4×3+2 → 4 2/3.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m68ef7245787ee6e51243','ppg6me8ff373d3d0a84c1f534',NULL,'MULTIPLE_CHOICE','Which equals 7/2?','["3 1/2","2 7/2","3 2/7","2 1/2"]',0,'7/2=3 1/2.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L7. Decimal Place Value (ppg6mc1650dc0c9c50b54e43a)
UPDATE "Lesson" SET "content" = '# Decimal Place Value

*Grade 6 Mathematics · Unit 2 of 11 · Arithmetic with Rational Numbers · Lesson 7*

## Objective

**I can** read, write, and compare decimals through thousandths.

## Warm-up (2 minutes)

Which is larger: **0.45** or **0.5**? Say both aloud with place-value words.

## Teach

### Place values

After the decimal point: tenths, hundredths, thousandths.

`0. sn` → 3 tenths, 5 hundredths, 2 thousandths.

### Example 1 — compare

Compare **0.45** and **0.5**.

Write 0.5 as **0.50**. Compare hundredths: 45 hundredths < 50 hundredths, so **0.45 < 0.5**.

### Try this

Order from least to greatest: 0.8, 0.75, 0.805.

**Check:** 0.75 < 0.8 < 0.805 (compare as 750, 800, 805 thousandths).

### Example 2 — read aloud

`0.06` is **six hundredths**, not “point zero six” only — name the place.

### Common mistake (this lesson only)

Thinking more digits always means larger (claiming 0.399 > 0.4). Fix: line up places; 0.400 > 0.399.

## Guided practice (we do)

1. Which is greater: 0.6 or 0.58?  
   **Answer:** 0.6 = 0.60 > 0.58

2. Write “four hundredths” as a decimal.  
   **Answer:** 0.04

3. True or false: 0.30 = 0.3  
   **Answer:** True — equivalent decimals.

## Independent practice

Complete each item. Show your work.

1. Compare 10.004 and 3.21. Which is greater? Write both to thousandths and explain using place value (for scores at a youth-group picnic).
2. Compare 8.004 and 4.18. Which is greater? Write both to thousandths and explain using place value (for scores at a band concert ticket table).
3. Compare 10.003 and 5.19. Which is greater? Write both to thousandths and explain using place value (for scores at a Saturday soccer tournament).
4. Compare 7.000 and 5.24. Which is greater? Write both to thousandths and explain using place value (for scores at an East Texas trail hike).
5. Compare 9.007 and 5.05. Which is greater? Write both to thousandths and explain using place value (for scores at a scholarship bake sale).
6. Compare 16.007 and 7.22. Which is greater? Write both to thousandths and explain using place value (for scores at a library reading challenge).

### Answer key (try first)

1. 10.004 vs 3.210. Greater: 10.004.
2. 8.004 vs 4.180. Greater: 8.004.
3. 10.003 vs 5.190. Greater: 10.003.
4. 7.000 vs 5.240. Greater: 7.000.
5. 9.007 vs 5.050. Greater: 9.007.
6. 16.007 vs 7.220. Greater: 16.007.

## Exit ticket

1. Compare 0.207 and 0.27.
2. Write 0.008 in words.

## Stretch (optional)

Place 0.3, 0.33, and 0.303 on a number line from 0.3 to 0.34.
', "objectives" = '• Read, write, and compare decimals through thousandths.
• Name place values (tenths, hundredths, thousandths).
• Use a place-value chart or number line to compare.', "description" = 'Read, write, and compare decimals through thousandths.' WHERE "id" = 'ppg6mc1650dc0c9c50b54e43a' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m4bd8f1640b68eae96a91','ppg6mc1650dc0c9c50b54e43a',NULL,'MULTIPLE_CHOICE','Which is greatest?','["0.09","0.9","0.19","0.091"]',1,'0.9 is nine tenths.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mc7582f954e381d670236','ppg6mc1650dc0c9c50b54e43a',NULL,'MULTIPLE_CHOICE','0.045 is…','["45 tenths","45 hundredths","45 thousandths","45 ones"]',2,'Ends in thousandths place.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m5631e9de1778a6cb01e0','ppg6mc1650dc0c9c50b54e43a',NULL,'MULTIPLE_CHOICE','Which shows 0.7 = 0.70?','["Never true","Always true","Only in money","Only if you round"]',1,'Trailing zeros after decimal do not change value.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L8. Adding and Subtracting Decimals (ppg6m20fa95db3030c582a2ec)
UPDATE "Lesson" SET "content" = '# Adding and Subtracting Decimals

*Grade 6 Mathematics · Unit 2 of 11 · Arithmetic with Rational Numbers · Lesson 8*

## Objective

**I can** add and subtract decimals by aligning place values.

## Warm-up (2 minutes)

About how much is **12.6 + 3.45**? Is your estimate closer to 15 or to 16?

## Teach

### Align the decimal points

Write numbers in a column with decimal points lined up. Annex zeros if needed.

### Example 1

`12.6 + 3.45`

```
  12.60
+  3.45
  -----
  16.05
```

Estimate: 13 + 3 = 16 — matches.

### Try this

`5 − 1.28`

**Check:** `5.00 − 1.28 = 3.72`.

### Common mistake (this lesson only)

Lining up the rightmost digits instead of decimal points (`1.2 + 0.35` treated like 12+35). Fix: points in a vertical line first.

## Guided practice (we do)

1. 3.5 + 2.25  
   **Answer:** 5.75

2. 10 − 0.4  
   **Answer:** 9.6

3. Estimate 9.9 + 0.15  
   **Answer:** About 10.

## Independent practice

Complete each item. Show your work.

1. Ticket sales: $11.10 in the morning and $9.20 in the afternoon at a science-fair supply run. What is the total? What is the difference (larger − smaller)? Align place values.
2. Ticket sales: $11.06 in the morning and $11.19 in the afternoon at Prosper Prep basketball practice. What is the total? What is the difference (larger − smaller)? Align place values.
3. Ticket sales: $11.09 in the morning and $12.18 in the afternoon at a library reading challenge. What is the total? What is the difference (larger − smaller)? Align place values.
4. Ticket sales: $10.10 in the morning and $11.05 in the afternoon at a scholarship bake sale. What is the total? What is the difference (larger − smaller)? Align place values.
5. Ticket sales: $10.13 in the morning and $12.24 in the afternoon at an East Texas trail hike. What is the total? What is the difference (larger − smaller)? Align place values.
6. Ticket sales: $10.16 in the morning and $13.23 in the afternoon at the school garden. What is the total? What is the difference (larger − smaller)? Align place values.

### Answer key (try first)

1. Total $20.30. Difference $1.90.
2. Total $22.25. Difference $0.13.
3. Total $23.27. Difference $1.09.
4. Total $21.15. Difference $0.95.
5. Total $22.37. Difference $2.11.
6. Total $23.39. Difference $3.07.

## Exit ticket

1. Compute 4.08 + 2.7.
2. Compute 6 − 2.35.

## Stretch (optional)

Find the error in a fictional student who wrote 1.5 + 0.25 = 0.40.
', "objectives" = '• Add and subtract decimals by aligning place values.
• Estimate to catch errors.
• Annex zeros so place columns match.', "description" = 'Align place values; estimate to catch errors.' WHERE "id" = 'ppg6m20fa95db3030c582a2ec' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mc09f440816073c741501','ppg6m20fa95db3030c582a2ec',NULL,'MULTIPLE_CHOICE','1.2 + 0.35 =','["0.47","1.55","1.37","4.7"]',1,'1.20+0.35=1.55.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m955658915ea1615e751a','ppg6m20fa95db3030c582a2ec',NULL,'MULTIPLE_CHOICE','Best first step for 7 − 0.86?','["Ignore the decimal","Write 7.00 − 0.86","Add instead","Round 0.86 to 1 and stop"]',1,'Annex zeros and align points.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m47ad03c39c9fee897b85','ppg6m20fa95db3030c582a2ec',NULL,'MULTIPLE_CHOICE','3.04 − 1.2 =','["1.84","2.84","1.82","4.24"]',0,'3.04−1.20=1.84.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L9. Multiplying and Dividing Decimals (ppg6mb614de93636ff3a475b0)
UPDATE "Lesson" SET "content" = '# Multiplying and Dividing Decimals

*Grade 6 Mathematics · Unit 2 of 11 · Arithmetic with Rational Numbers · Lesson 9*

## Objective

**I can** multiply and divide decimals with place-value reasoning.

## Warm-up (2 minutes)

About how much is **0.5 × 0.4**? Should the product be less than 0.5?

## Teach

### Multiply

Multiply as whole numbers, then place the decimal so the total number of decimal digits matches the factors.

`0.5 × 0.4` → 5 × 4 = 20, two decimal digits total → **0.20 = 0.2**.

### Example 1

`1.2 × 0.3` → 12 × 3 = 36, two decimal places → **0.36**.

Estimate: a bit more than 1 × 0.3 = 0.3 — yes.

### Divide

`1.8 ÷ 0.3`: rewrite as `18 ÷ 3 = 6` by multiplying both by 10 (same quotient).

### Try this

`2.5 × 0.4`

**Check:** 25×4=100 → **1.00 = 1**.

### Common mistake (this lesson only)

Counting places incorrectly (writing 1.2 × 0.3 = 3.6). Fix: count decimal digits in **both** factors.

## Guided practice (we do)

1. 0.6 × 0.2  
   **Answer:** 0.12

2. 3.6 ÷ 0.4  
   **Answer:** 9

3. Estimate 0.99 × 4  
   **Answer:** About 4.

## Independent practice

Complete each item. Show your work.

1. Unit price $3.04; buy 4 items for Prosper Prep basketball practice. Find the total (estimate first). Then: if 7 feet of ribbon costs $6.08, what is the price per foot?
2. Unit price $4.06; buy 5 items for an East Texas trail hike. Find the total (estimate first). Then: if 8 feet of ribbon costs $8.12, what is the price per foot?
3. Unit price $5.08; buy 3 items for a scholarship bake sale. Find the total (estimate first). Then: if 9 feet of ribbon costs $10.16, what is the price per foot?
4. Unit price $2.10; buy 4 items for a family trip on I-20. Find the total (estimate first). Then: if 10 feet of ribbon costs $4.20, what is the price per foot?
5. Unit price $3.12; buy 5 items for the school garden. Find the total (estimate first). Then: if 11 feet of ribbon costs $6.24, what is the price per foot?
6. Unit price $4.14; buy 3 items for a band concert ticket table. Find the total (estimate first). Then: if 12 feet of ribbon costs $8.28, what is the price per foot?

### Answer key (try first)

1. Total ≈ estimate; exact 12.16. Per foot: $0.8686 (show division).
2. Total ≈ estimate; exact 20.30. Per foot: $1.0150 (show division).
3. Total ≈ estimate; exact 15.24. Per foot: $1.1289 (show division).
4. Total ≈ estimate; exact 8.40. Per foot: $0.4200 (show division).
5. Total ≈ estimate; exact 15.60. Per foot: $0.5673 (show division).
6. Total ≈ estimate; exact 12.42. Per foot: $0.6900 (show division).

## Exit ticket

1. Compute 0.8 × 0.5.
2. Compute 4.2 ÷ 0.7.

## Stretch (optional)

Explain why 0.5 × 0.5 = 0.25 using an area model.
', "objectives" = '• Multiply and divide decimals with place-value reasoning.
• Count decimal places when multiplying.
• Estimate to check reasonableness.', "description" = 'Compute with place-value reasoning and estimation checks.' WHERE "id" = 'ppg6mb614de93636ff3a475b0' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m97b744ee1916bddc988a','ppg6mb614de93636ff3a475b0',NULL,'MULTIPLE_CHOICE','0.4 × 0.2 =','["0.8","0.08","0.6","8"]',1,'8 with two decimal places → 0.08.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m5537367a51eb5acbe441','ppg6mb614de93636ff3a475b0',NULL,'MULTIPLE_CHOICE','1.5 ÷ 0.5 =','["0.3","3","7.5","0.75"]',1,'1.5×2=3; or 15÷5=3.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m570f4d62c5c47558e3f5','ppg6mb614de93636ff3a475b0',NULL,'MULTIPLE_CHOICE','How many decimal places in the product 1.25 × 0.4 before simplifying?','["1","2","3","0"]',2,'2+1=3 decimal digits.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 2 L10. Fraction–Decimal Connections (ppg6mf12b8365acc88a2e9d7e)
UPDATE "Lesson" SET "content" = '# Fraction–Decimal Connections

*Grade 6 Mathematics · Unit 2 of 11 · Arithmetic with Rational Numbers · Lesson 10*

## Objective

**I can** convert fluently between common fractions and decimals.

## Warm-up (2 minutes)

Write **3/4** as a decimal and as a percent-ready hundredths amount.

## Teach

### Fraction → decimal

Divide numerator by denominator: `3/4 = 3 ÷ 4 = 0.75`.

### Benchmarks to memorize

`1/2 = 0.5`, `1/4 = 0.25`, `3/4 = 0.75`, `1/5 = 0.2`, `1/10 = 0.1`.

### Example 1

`2/5 = 4/10 = 0.4`.

### Try this

Write 0.6 as a fraction in simplest form.

**Check:** `0.6 = 6/10 = 3/5`.

### Common mistake (this lesson only)

Writing 1/4 = 0.4. Fix: 1÷4 = 0.25; 0.4 is 2/5.

## Guided practice (we do)

1. Convert 1/5 to a decimal.  
   **Answer:** 0.2

2. Convert 0.125 to a fraction.  
   **Answer:** 125/1000 = 1/8

3. Which is greater: 2/3 or 0.6?  
   **Answer:** 2/3 ≈ 0.666… > 0.6

## Independent practice

Complete each item. Show your work.

1. Write 1/3 as a decimal (divide) and as a percent. Then write 0.85 as a fraction in simplest form. Context: the school garden.
2. Write 2/4 as a decimal (divide) and as a percent. Then write 0.13 as a fraction in simplest form. Context: a band concert ticket table.
3. Write 1/5 as a decimal (divide) and as a percent. Then write 0.32 as a fraction in simplest form. Context: a Saturday soccer tournament.
4. Write 2/6 as a decimal (divide) and as a percent. Then write 0.63 as a fraction in simplest form. Context: a library reading challenge.
5. Write 1/2 as a decimal (divide) and as a percent. Then write 0.82 as a fraction in simplest form. Context: Prosper Prep basketball practice.
6. Write 1/3 as a decimal (divide) and as a percent. Then write 0.10 as a fraction in simplest form. Context: an East Texas trail hike.

### Answer key (try first)

1. 1/3 = 0.3333 = 33.33%. Convert 0.85 by place value and simplify.
2. 2/4 = 0.5000 = 50.00%. Convert 0.13 by place value and simplify.
3. 1/5 = 0.2000 = 20.00%. Convert 0.32 by place value and simplify.
4. 2/6 = 0.3333 = 33.33%. Convert 0.63 by place value and simplify.
5. 1/2 = 0.5000 = 50.00%. Convert 0.82 by place value and simplify.
6. 1/3 = 0.3333 = 33.33%. Convert 0.10 by place value and simplify.

## Exit ticket

1. Convert 7/10 to a decimal.
2. Convert 0.05 to a fraction in simplest form.

## Stretch (optional)

Explain two ways to show that 3/4 = 0.75.
', "objectives" = '• Convert fluently between common fractions and decimals.
• Recognize benchmarks (1/2=0.5, 1/4=0.25, 3/4=0.75).
• Choose the form that makes the problem easier.', "description" = 'Move fluently between fractions and decimals in context.' WHERE "id" = 'ppg6mf12b8365acc88a2e9d7e' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mfaf8d2c4f5e6bda6d7f4','ppg6mf12b8365acc88a2e9d7e',NULL,'MULTIPLE_CHOICE','3/5 as a decimal is…','["0.35","0.6","0.8","1.5"]',1,'3÷5=0.6.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ma3d5c4b36c5e4251e8be','ppg6mf12b8365acc88a2e9d7e',NULL,'MULTIPLE_CHOICE','0.25 as a fraction in simplest form is…','["25/100","1/4","2/5","1/25"]',1,'25/100=1/4.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mf997994ce1db187f2863','ppg6mf12b8365acc88a2e9d7e',NULL,'MULTIPLE_CHOICE','Which equals 0.2?','["1/2","1/5","2/5","1/4"]',1,'1/5=0.2.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L1. Unit Rates (ppg6mdb21f501137e58a3248c)
UPDATE "Lesson" SET "content" = '# Unit Rates

*Grade 6 Mathematics · Unit 3 of 11 · Rates and Percentages · Lesson 1*

## Objective

**I can** find a unit rate (“how many per one”).

## Warm-up (2 minutes)

A pack of **8** pencils costs **$4**. About how much is one pencil?

## Teach

### Unit rate

A **unit rate** tells the amount for **one** of something (per 1 mile, per 1 item, per 1 hour).

### Example 1

8 pencils for $4 → dollars per pencil: `4 ÷ 8 = 0.5`, so **$0.50 per pencil**.

Also pencils per dollar: `8 ÷ 4 = 2` pencils per dollar.

### Try this

15 miles in 3 hours — miles per hour?

**Check:** `15 ÷ 3 = 5` mph.

### Example 2 — compare

Brand A: 6 oz for $3 → $0.50/oz. Brand B: 10 oz for $4 → $0.40/oz. **B** is the better buy per ounce.

### Common mistake (this lesson only)

Dividing in the wrong order (pencils ÷ dollars when you wanted dollars per pencil). Fix: say the unit words first: “dollars **per** pencil” → dollars ÷ pencils.

## Guided practice (we do)

1. 12 cookies for $3 — price per cookie?  
   **Answer:** $1

2. 180 miles in 3 hours — mph?  
   **Answer:** 60 mph

3. Which is better buy: 4 lb/$8 or 5 lb/$9?  
   **Answer:** 5 lb/$9 → $1.80/lb vs $2/lb

## Independent practice

Complete each item. Show your work.

1. At a science-fair supply run, 30 dollars buys 3 packs. What is the unit price per pack? Which is the better buy: that rate or 11 dollars for 1 pack?
2. At a Saturday soccer tournament, 56 dollars buys 4 packs. What is the unit price per pack? Which is the better buy: that rate or 15 dollars for 1 pack?
3. At a band concert ticket table, 70 dollars buys 5 packs. What is the unit price per pack? Which is the better buy: that rate or 15 dollars for 1 pack?
4. At the school garden, 114 dollars buys 6 packs. What is the unit price per pack? Which is the better buy: that rate or 20 dollars for 1 pack?
5. At a family trip on I-20, 38 dollars buys 2 packs. What is the unit price per pack? Which is the better buy: that rate or 20 dollars for 1 pack?
6. At a scholarship bake sale, 42 dollars buys 3 packs. What is the unit price per pack? Which is the better buy: that rate or 15 dollars for 1 pack?

### Answer key (try first)

1. Unit price = $10 per pack. Compare to $11/pack — the $10 rate is better.
2. Unit price = $14 per pack. Compare to $15/pack — the $14 rate is better.
3. Unit price = $14 per pack. Compare to $15/pack — the $14 rate is better.
4. Unit price = $19 per pack. Compare to $20/pack — the $19 rate is better.
5. Unit price = $19 per pack. Compare to $20/pack — the $19 rate is better.
6. Unit price = $14 per pack. Compare to $15/pack — the $14 rate is better.

## Exit ticket

1. Find the unit price: 5 notebooks for $10.
2. Compare 2 lb/$5 vs 3 lb/$6.

## Stretch (optional)

Create two store offers and decide the better buy using unit rates.
', "objectives" = '• Find a unit rate (“how many per one”).
• Use unit rates to compare options.
• Label units carefully.', "description" = 'Find ''how many per one'' and use unit rates to compare options.' WHERE "id" = 'ppg6mdb21f501137e58a3248c' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m6f32d8ba32cd46372d41','ppg6mdb21f501137e58a3248c',NULL,'MULTIPLE_CHOICE','10 apples for $5. Unit price per apple?','["$2","$0.50","$5","$10"]',1,'5÷10=0.5.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m55ae0aab21b48931b253','ppg6mdb21f501137e58a3248c',NULL,'MULTIPLE_CHOICE','240 miles in 4 hours. Speed?','["60 mph","244 mph","40 mph","960 mph"]',0,'240÷4=60.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m4f198f8d42f8da4b2718','ppg6mdb21f501137e58a3248c',NULL,'MULTIPLE_CHOICE','“Miles per hour” means divide…','["hours ÷ miles","miles ÷ hours","miles × hours","hours − miles"]',1,'Per hour → miles divided by hours.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L2. Speed, Price, and Work Rates (ppg6me204f7ef1e7ae361078c)
UPDATE "Lesson" SET "content" = '# Speed, Price, and Work Rates

*Grade 6 Mathematics · Unit 3 of 11 · Rates and Percentages · Lesson 2*

## Objective

**I can** apply unit rates to speed, unit price, and work contexts.

## Warm-up (2 minutes)

A bus travels **50** miles per hour. How far in **3** hours?

## Teach

### Scaling a rate

If the rate is constant, multiply: distance = speed × time.

### Example 1 — speed

50 mph × 3 h = **150 miles**.

### Example 2 — work

A printer makes 12 posters per hour. In 5 hours: `12 × 5 = 60` posters.

### Try this

Unit price $2.50 per lb. Cost for 4 lb?

**Check:** `2.50 × 4 = $10`.

### Common mistake (this lesson only)

Mixing hours and minutes without converting. Fix: convert to the same time unit before multiplying.

## Guided practice (we do)

1. 40 mph for 2.5 h — distance?  
   **Answer:** 100 miles

2. $1.25/lb for 6 lb?  
   **Answer:** $7.50

3. 15 jobs/hour for 4 hours?  
   **Answer:** 60 jobs

## Independent practice

Complete each item. Show your work.

1. A bus covers 47 miles in 3 hours for a trip near a library reading challenge. What is the unit rate in mph? How far at that rate in 5 hours?
2. A bus covers 30 miles in 4 hours for a trip near a youth-group picnic. What is the unit rate in mph? How far at that rate in 6 hours?
3. A bus covers 49 miles in 2 hours for a trip near a science-fair supply run. What is the unit rate in mph? How far at that rate in 4 hours?
4. A bus covers 64 miles in 3 hours for a trip near a Saturday soccer tournament. What is the unit rate in mph? How far at that rate in 5 hours?
5. A bus covers 43 miles in 4 hours for a trip near a band concert ticket table. What is the unit rate in mph? How far at that rate in 6 hours?
6. A bus covers 66 miles in 2 hours for a trip near the school garden. What is the unit rate in mph? How far at that rate in 4 hours?

### Answer key (try first)

1. 15.67 mph. In 5 h: 78.33 miles.
2. 7.50 mph. In 6 h: 45.00 miles.
3. 24.50 mph. In 4 h: 98.00 miles.
4. 21.33 mph. In 5 h: 106.67 miles.
5. 10.75 mph. In 6 h: 64.50 miles.
6. 33.00 mph. In 4 h: 132.00 miles.

## Exit ticket

1. 60 mph for 1.5 hours — distance?
2. $3 per pack, 7 packs — total?

## Stretch (optional)

A trail is 9 miles; you walk 3 mph. How long does it take?
', "objectives" = '• Apply unit rates to speed, unit price, and work contexts.
• Scale rates with multiplication.
• Keep units visible in every step.', "description" = 'Apply unit rates to speed, unit price, and work contexts.' WHERE "id" = 'ppg6me204f7ef1e7ae361078c' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6md13f244568006cffb50f','ppg6me204f7ef1e7ae361078c',NULL,'MULTIPLE_CHOICE','55 mph for 2 hours. Distance?','["57 miles","110 miles","27.5 miles","550 miles"]',1,'55×2=110.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mca3419e416abf073d0bd','ppg6me204f7ef1e7ae361078c',NULL,'MULTIPLE_CHOICE','$0.80 per ounce for 5 ounces?','["$0.16","$4.00","$5.80","$0.85"]',1,'0.8×5=4.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mb92f6bb5ece986225900','ppg6me204f7ef1e7ae361078c',NULL,'MULTIPLE_CHOICE','Work rate 8 tasks/hour × 3 hours =','["11","24","5","3/8"]',1,'8×3=24.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L3. Complex Rate Tables (ppg6mb6e029ef066c9e42cc35)
UPDATE "Lesson" SET "content" = '# Complex Rate Tables

*Grade 6 Mathematics · Unit 3 of 11 · Rates and Percentages · Lesson 3*

## Objective

**I can** build and extend rate tables for multi-step planning.

## Warm-up (2 minutes)

A table shows 2 hours → 10 miles. What should 4 hours show if the rate stays the same?

## Teach

### Rate tables

Each row scales both quantities by the same factor so the unit rate stays constant.

### Example 1

Hours: 2, Miles: 10 → unit rate 5 mph.

For 4 hours: multiply both by 2 → **20 miles**.
For 1 hour: divide by 2 → **5 miles**.

### Try this

3 packs → $12. Complete for 1 pack and 6 packs.

**Check:** $4 per pack; 6 packs → $24.

### Common mistake (this lesson only)

Adding the same number to both columns instead of multiplying. Fix: ask “What factor scaled the first column?”

## Guided practice (we do)

1. 2→8 extends to 5→?  
   **Answer:** 20

2. Fill: 4 cups mix for 10 cookies; cups for 25 cookies?  
   **Answer:** 10 cups

3. Check unit rate for rows (1,4) and (3,12).  
   **Answer:** Both 4 per 1

## Independent practice

Complete each item. Show your work.

1. A print shop makes 7 posters every 8 minutes. Build a rate table for 1, 2, and 5 “blocks” of 8 minutes. How many posters in 40 minutes?
2. A print shop makes 11 posters every 10 minutes. Build a rate table for 1, 2, and 5 “blocks” of 10 minutes. How many posters in 50 minutes?
3. A print shop makes 11 posters every 13 minutes. Build a rate table for 1, 2, and 5 “blocks” of 13 minutes. How many posters in 65 minutes?
4. A print shop makes 7 posters every 10 minutes. Build a rate table for 1, 2, and 5 “blocks” of 10 minutes. How many posters in 50 minutes?
5. A print shop makes 16 posters every 13 minutes. Build a rate table for 1, 2, and 5 “blocks” of 13 minutes. How many posters in 65 minutes?
6. A print shop makes 11 posters every 15 minutes. Build a rate table for 1, 2, and 5 “blocks” of 15 minutes. How many posters in 75 minutes?

### Answer key (try first)

1. Blocks: (8 min → 7), (16 → 14), (40 → 35). In 40 min: 35 posters.
2. Blocks: (10 min → 11), (20 → 22), (50 → 55). In 50 min: 55 posters.
3. Blocks: (13 min → 11), (26 → 22), (65 → 55). In 65 min: 55 posters.
4. Blocks: (10 min → 7), (20 → 14), (50 → 35). In 50 min: 35 posters.
5. Blocks: (13 min → 16), (26 → 32), (65 → 80). In 65 min: 80 posters.
6. Blocks: (15 min → 11), (30 → 22), (75 → 55). In 75 min: 55 posters.

## Exit ticket

1. Rate table: 5 min → 2 pages. Pages in 20 min?
2. Why must both columns scale by the same factor?

## Stretch (optional)

Build a 4-row rate table for a $3.50 lunch special per student.
', "objectives" = '• Build and extend rate tables for multi-step planning.
• Find missing values with equivalent rates.
• Check that every row keeps the same unit rate.', "description" = 'Extend rate tables for multi-step planning problems.' WHERE "id" = 'ppg6mb6e029ef066c9e42cc35' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m95e5edc044e724d4e5cc','ppg6mb6e029ef066c9e42cc35',NULL,'MULTIPLE_CHOICE','2 hours → 12 miles. At same rate, 5 hours →','["15 miles","30 miles","24 miles","10 miles"]',1,'6 mph × 5 = 30.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m5a6d72f31e79b9642fc1','ppg6mb6e029ef066c9e42cc35',NULL,'MULTIPLE_CHOICE','Best way to find a missing table value?','["Add 1 to both","Keep the unit rate; scale both columns","Guess","Only scale one column"]',1,'Equivalent rates scale both parts.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m16aa71bf48058e0a60c9','ppg6mb6e029ef066c9e42cc35',NULL,'MULTIPLE_CHOICE','3 items cost $9. Unit rate?','["$3/item","$9/item","$12/item","$1/item"]',0,'9÷3=3.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L4. Percent as Per Hundred (ppg6m2f00de398fc7a1f106f9)
UPDATE "Lesson" SET "content" = '# Percent as Per Hundred

*Grade 6 Mathematics · Unit 3 of 11 · Rates and Percentages · Lesson 4*

## Objective

**I can** define percent as parts per hundred.

## Warm-up (2 minutes)

Shade **25** of **100** squares. What percent is shaded? What decimal?

## Teach

### Definition

**Percent** means “per hundred.” `p% = p/100`.

### Example 1

`25% = 25/100 = 0.25 = 1/4`.

### Conversions

- Percent → decimal: divide by 100 (`40% → 0.40`).
- Decimal → percent: multiply by 100 (`0.3 → 30%`).
- Fraction → percent: make denominator 100 or divide then ×100.

### Try this

Write 3/5 as a percent.

**Check:** `3/5 = 0.6 = 60%`.

### Common mistake (this lesson only)

Writing 5% as 0.5. Fix: 5% = 0.05 (five hundredths).

## Guided practice (we do)

1. 40% as decimal  
   **Answer:** 0.4

2. 0.07 as percent  
   **Answer:** 7%

3. 1/4 as percent  
   **Answer:** 25%

## Independent practice

Complete each item. Show your work.

1. Write 20% as a fraction (hundredths) and as a decimal. Then write 9/20 as a percent (round to nearest whole percent).
2. Write 30% as a fraction (hundredths) and as a decimal. Then write 6/7 as a percent (round to nearest whole percent).
3. Write 40% as a fraction (hundredths) and as a decimal. Then write 8/8 as a percent (round to nearest whole percent).
4. Write 50% as a fraction (hundredths) and as a decimal. Then write 10/17 as a percent (round to nearest whole percent).
5. Write 60% as a fraction (hundredths) and as a decimal. Then write 12/17 as a percent (round to nearest whole percent).
6. Write 70% as a fraction (hundredths) and as a decimal. Then write 14/18 as a percent (round to nearest whole percent).

### Answer key (try first)

1. 20% = 20/100 = 0.20. 9/20 ≈ 45%.
2. 30% = 30/100 = 0.30. 6/7 ≈ 86%.
3. 40% = 40/100 = 0.40. 8/8 ≈ 100%.
4. 50% = 50/100 = 0.50. 10/17 ≈ 59%.
5. 60% = 60/100 = 0.60. 12/17 ≈ 71%.
6. 70% = 70/100 = 0.70. 14/18 ≈ 78%.

## Exit ticket

1. Convert 12% to a decimal.
2. Convert 0.8 to a percent.

## Stretch (optional)

Explain why 100% of a quantity equals the whole quantity.
', "objectives" = '• Define percent as parts per hundred.
• Convert among fractions, decimals, and percents.
• Use 100-grids and benchmarks.', "description" = 'Define percent; convert among fractions, decimals, and percents.' WHERE "id" = 'ppg6m2f00de398fc7a1f106f9' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m8f5d3e2e533e4362411b','ppg6m2f00de398fc7a1f106f9',NULL,'MULTIPLE_CHOICE','35% as a decimal?','["3.5","0.35","0.035","35"]',1,'35÷100=0.35.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m4c7b5dbc940247f85fad','ppg6m2f00de398fc7a1f106f9',NULL,'MULTIPLE_CHOICE','0.2 as a percent?','["2%","20%","0.2%","200%"]',1,'0.2×100=20%.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m64a95b89093b84caff00','ppg6m2f00de398fc7a1f106f9',NULL,'MULTIPLE_CHOICE','Which equals 3/4?','["34%","75%","0.34","7.5%"]',1,'3/4=0.75=75%.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L5. Percent of a Number (ppg6m65c6412a156ad3fc69a1)
UPDATE "Lesson" SET "content" = '# Percent of a Number

*Grade 6 Mathematics · Unit 3 of 11 · Rates and Percentages · Lesson 5*

## Objective

**I can** find a percent of a quantity using decimals or benchmarks.

## Warm-up (2 minutes)

About what is **10% of 80**? What about **50% of 80**?

## Teach

### Method

`p% of N = (p/100) × N`.

### Example 1

`30% of 80 = 0.30 × 80 = 24`.

### Benchmarks

10% of 80 = 8; so 30% = 3×8 = 24. 50% of 80 = 40.

### Try this

25% of 60.

**Check:** `0.25 × 60 = 15` (or half of half of 60).

### Common mistake (this lesson only)

Multiplying by p instead of p/100 (30% of 80 → 2400). Fix: convert percent to decimal first.

## Guided practice (we do)

1. 20% of 45  
   **Answer:** 9

2. 5% of 200  
   **Answer:** 10

3. 75% of 40  
   **Answer:** 30

## Independent practice

Complete each item. Show your work.

1. Find 15% of 80 for a discount display at the school garden. Show a decimal method and a benchmark check (10% or 1%).
2. Find 20% of 61 for a discount display at a band concert ticket table. Show a decimal method and a benchmark check (10% or 1%).
3. Find 25% of 82 for a discount display at a Saturday soccer tournament. Show a decimal method and a benchmark check (10% or 1%).
4. Find 30% of 55 for a discount display at a library reading challenge. Show a decimal method and a benchmark check (10% or 1%).
5. Find 35% of 76 for a discount display at Prosper Prep basketball practice. Show a decimal method and a benchmark check (10% or 1%).
6. Find 40% of 57 for a discount display at an East Texas trail hike. Show a decimal method and a benchmark check (10% or 1%).

### Answer key (try first)

1. 15% of 80 = 12. Benchmark: 10% = 8.
2. 20% of 61 = 12.200000000000001. Benchmark: 10% = 6.1.
3. 25% of 82 = 20.5. Benchmark: 10% = 8.2.
4. 30% of 55 = 16.5. Benchmark: 10% = 5.5.
5. 35% of 76 = 26.599999999999998. Benchmark: 10% = 7.6.
6. 40% of 57 = 22.8. Benchmark: 10% = 5.7.

## Exit ticket

1. Find 40% of 50.
2. Find 15% of 80 using 10% + 5%.

## Stretch (optional)

A jacket is $80; sales tax is 8%. Find the tax amount only.
', "objectives" = '• Find a percent of a quantity using decimals or benchmarks.
• Compute p% of N as (p/100)×N.
• Estimate with 10% and 50% benchmarks.', "description" = 'Find a percent of a quantity with decimals or benchmark methods.' WHERE "id" = 'ppg6m65c6412a156ad3fc69a1' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m20be09850bbe53b823fd','ppg6m65c6412a156ad3fc69a1',NULL,'MULTIPLE_CHOICE','10% of 90?','["9","10","81","900"]',0,'0.1×90=9.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m0443e10388eb3a41117a','ppg6m65c6412a156ad3fc69a1',NULL,'MULTIPLE_CHOICE','25% of 80?','["20","25","40","2"]',0,'0.25×80=20.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m9d4fb0e37d900cd71505','ppg6m65c6412a156ad3fc69a1',NULL,'MULTIPLE_CHOICE','Best equation for 12% of 50?','["12×50","0.12×50","50÷12","12÷50"]',1,'Percent of → decimal × number.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L6. Finding the Whole from a Percent (ppg6mc3762076d75a9ae4bb42)
UPDATE "Lesson" SET "content" = '# Finding the Whole from a Percent

*Grade 6 Mathematics · Unit 3 of 11 · Rates and Percentages · Lesson 6*

## Objective

**I can** work backwards from a part and a percent to the whole.

## Warm-up (2 minutes)

**30%** of a number is **15**. About how big is the whole?

## Teach

### Idea

If `p% of W = part`, then `W = part ÷ (p/100)`.

### Example 1

30% of W = 15 → `W = 15 ÷ 0.30 = 50`.

Check: 30% of 50 = 15. ✓

### Try this

20% of a number is 8. Find the number.

**Check:** `8 ÷ 0.20 = 40`.

### Common mistake (this lesson only)

Multiplying the part by the percent (`15 × 0.30`) instead of dividing. Fix: the part is a *slice* of the whole — divide by the decimal percent.

## Guided practice (we do)

1. 25% of W = 10 → W?  
   **Answer:** 40

2. 50% of W = 17 → W?  
   **Answer:** 34

3. 10% of W = 6.5 → W?  
   **Answer:** 65

## Independent practice

Complete each item. Show your work.

1. -24 students are 25% of those who signed up for a family trip on I-20. How many signed up in all? (Solve part = pct% × whole.)
2. 0 students are 30% of those who signed up for a scholarship bake sale. How many signed up in all? (Solve part = pct% × whole.)
3. 21 students are 35% of those who signed up for an East Texas trail hike. How many signed up in all? (Solve part = pct% × whole.)
4. 55 students are 40% of those who signed up for a youth-group picnic. How many signed up in all? (Solve part = pct% × whole.)
5. 99 students are 45% of those who signed up for a science-fair supply run. How many signed up in all? (Solve part = pct% × whole.)
6. 45 students are 20% of those who signed up for a Saturday soccer tournament. How many signed up in all? (Solve part = pct% × whole.)

### Answer key (try first)

1. whole = -24 ÷ (25/100) = -96.00.
2. whole = 0 ÷ (30/100) = 0.00.
3. whole = 21 ÷ (35/100) = 60.00.
4. whole = 55 ÷ (40/100) = 137.50.
5. whole = 99 ÷ (45/100) = 220.00.
6. whole = 45 ÷ (20/100) = 225.00.

## Exit ticket

1. 40% of a number is 20. Find the number.
2. Check your answer by taking 40% of it.

## Stretch (optional)

A tip of $9 is 15% of the bill. Find the bill before tip.
', "objectives" = '• Work backwards from a part and a percent to the whole.
• Solve (p/100)×W = part for W.
• Check by taking the percent of your answer.', "description" = 'Work backwards from a part and a percent to the whole.' WHERE "id" = 'ppg6mc3762076d75a9ae4bb42' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m933f515a02e539741936','ppg6mc3762076d75a9ae4bb42',NULL,'MULTIPLE_CHOICE','20% of a number is 14. The number is…','["2.8","70","28","34"]',1,'14÷0.2=70.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mba63c876ef62249e9f51','ppg6mc3762076d75a9ae4bb42',NULL,'MULTIPLE_CHOICE','5% of W = 3. W =','["15","60","1.5","0.15"]',1,'3÷0.05=60.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m15dadf1b89f1c47fdbb2','ppg6mc3762076d75a9ae4bb42',NULL,'MULTIPLE_CHOICE','Best check for “25% of W = 8 ⇒ W=32”?','["8×25","0.25×32=8","32÷25","8÷32=25"]',1,'Take 25% of 32.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L7. Percent Increase and Decrease (ppg6m366e9f8c273bd53dab0f)
UPDATE "Lesson" SET "content" = '# Percent Increase and Decrease

*Grade 6 Mathematics · Unit 3 of 11 · Rates and Percentages · Lesson 7*

## Objective

**I can** compute and interpret percent change.

## Warm-up (2 minutes)

A price goes from **$40** to **$50**. Did it rise by half? By what percent?

## Teach

### Formula

Percent change = `(new − original) / original × 100%`.

Positive → increase; negative → decrease (or use absolute change and say “decrease”).

### Example 1 — increase

40 → 50: change = 10; `10/40 × 100% = 25%` increase.

### Example 2 — decrease

50 → 40: `|40−50|/50 × 100% = 20%` decrease.

### Try this

From 80 to 100 — percent increase?

**Check:** `20/80 × 100% = 25%`.

### Common mistake (this lesson only)

Dividing by the *new* value instead of the original. Fix: original is always the starting amount in the denominator.

## Guided practice (we do)

1. 20→30 percent increase  
   **Answer:** 50%

2. 90→81 percent decrease  
   **Answer:** 10%

3. 50→50 percent change  
   **Answer:** 0%

## Independent practice

Complete each item. Show your work.

1. A fundraising total goes from $82 to $94 at a scholarship bake sale. What is the percent increase?
2. A fundraising total goes from $63 to $76 at a family trip on I-20. What is the percent increase?
3. A fundraising total goes from $84 to $105 at the school garden. What is the percent increase?
4. A fundraising total goes from $97 to $126 at a science-fair supply run. What is the percent increase?
5. A fundraising total goes from $78 to $86 at a youth-group picnic. What is the percent increase?
6. A fundraising total goes from $99 to $114 at a library reading challenge. What is the percent increase?

### Answer key (try first)

1. Change = $12. Percent increase = 15% (change÷start×100).
2. Change = $13. Percent increase = 20% (change÷start×100).
3. Change = $21. Percent increase = 25% (change÷start×100).
4. Change = $29. Percent increase = 30% (change÷start×100).
5. Change = $8. Percent increase = 10% (change÷start×100).
6. Change = $15. Percent increase = 15% (change÷start×100).

## Exit ticket

1. From $25 to $30 — percent increase?
2. From 60 to 45 — percent decrease?

## Stretch (optional)

A population grows 10% then shrinks 10%. Is it back to the start? Explain.
', "objectives" = '• Compute and interpret percent change.
• Use (change/original)×100%.
• Distinguish increase vs decrease.', "description" = 'Compute and interpret percent change.' WHERE "id" = 'ppg6m366e9f8c273bd53dab0f' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m18fbd0e70713b0cac516','ppg6m366e9f8c273bd53dab0f',NULL,'MULTIPLE_CHOICE','From 40 to 50 is what percent increase?','["10%","20%","25%","125%"]',2,'10/40=25%.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mabb28b6bc113abb6399d','ppg6m366e9f8c273bd53dab0f',NULL,'MULTIPLE_CHOICE','From 50 to 40 is what percent decrease?','["20%","25%","10%","80%"]',0,'10/50=20%.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mb9cbf7760cd512e04d1b','ppg6m366e9f8c273bd53dab0f',NULL,'MULTIPLE_CHOICE','Denominator in percent change is…','["The new value","The original value","The average","Always 100"]',1,'Compare change to the start.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L8. Tax, Tip, and Discount (ppg6mb1429ed880c1d6c986cd)
UPDATE "Lesson" SET "content" = '# Tax, Tip, and Discount

*Grade 6 Mathematics · Unit 3 of 11 · Rates and Percentages · Lesson 8*

## Objective

**I can** solve everyday money percent problems carefully.

## Warm-up (2 minutes)

A $40 meal with **10% tip** — about how much is the tip? The total?

## Teach

### Discount

Sale price = original − (discount% × original).

Or multiply by `(1 − discount decimal)`.

### Example 1 — discount

$80 jacket, 25% off → discount `0.25×80=20` → pay **$60**.

### Example 2 — tax

$50 item, 8% tax → tax `0.08×50=4` → total **$54**.

### Try this

$40 meal, 15% tip. Tip and total?

**Check:** Tip $6; total $46.

### Common mistake (this lesson only)

Taking tax on the discounted price when the problem says tax on original (or the reverse). Fix: read which amount the percent applies to.

## Guided practice (we do)

1. $20 with 10% off → pay?  
   **Answer:** $18

2. $30 + 5% tax → total?  
   **Answer:** $31.50

3. $50 + 20% tip → total?  
   **Answer:** $60

## Independent practice

Complete each item. Show your work.

1. A $62 subtotal gets a 10% tip and 8% tax (tax on subtotal). Find tip, tax, and total for a scholarship bake sale.
2. A $39 subtotal gets a 15% tip and 8% tax (tax on subtotal). Find tip, tax, and total for a library reading challenge.
3. A $60 subtotal gets a 20% tip and 8% tax (tax on subtotal). Find tip, tax, and total for Prosper Prep basketball practice.
4. A $37 subtotal gets a 5% tip and 8% tax (tax on subtotal). Find tip, tax, and total for a science-fair supply run.
5. A $58 subtotal gets a 10% tip and 8% tax (tax on subtotal). Find tip, tax, and total for a youth-group picnic.
6. A $35 subtotal gets a 15% tip and 8% tax (tax on subtotal). Find tip, tax, and total for a band concert ticket table.

### Answer key (try first)

1. Tip $6.20; tax $4.96; total $73.16.
2. Tip $5.85; tax $3.12; total $47.97.
3. Tip $12.00; tax $4.80; total $76.80.
4. Tip $1.85; tax $2.96; total $41.81.
5. Tip $5.80; tax $4.64; total $68.44.
6. Tip $5.25; tax $2.80; total $43.05.

## Exit ticket

1. $70 shoes, 30% off — sale price?
2. $25 lunch, 8% tax — total?

## Stretch (optional)

Stack a 20% discount then 10% off the sale price on $100. Final price?
', "objectives" = '• Solve everyday money percent problems carefully.
• Decide whether to add tax/tip or subtract discount.
• Compute final price in clear steps.', "description" = 'Solve everyday money percent problems carefully.' WHERE "id" = 'ppg6mb1429ed880c1d6c986cd' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m61afa3139cbaecc71066','ppg6mb1429ed880c1d6c986cd',NULL,'MULTIPLE_CHOICE','$40 with 25% off. Sale price?','["$10","$30","$15","$65"]',1,'0.25×40=10; 40−10=30.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m1a3d021a2f95e693971e','ppg6mb1429ed880c1d6c986cd',NULL,'MULTIPLE_CHOICE','$50 + 6% tax. Total?','["$3","$53","$56","$47"]',1,'Tax $3; total $53.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6meeec891d96d0f44118f8','ppg6mb1429ed880c1d6c986cd',NULL,'MULTIPLE_CHOICE','15% tip on $40?','["$6","$15","$25","$4"]',0,'0.15×40=6.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L9. Percent Error and Estimation (ppg6m0c13c70041be208a5ed3)
UPDATE "Lesson" SET "content" = '# Percent Error and Estimation

*Grade 6 Mathematics · Unit 3 of 11 · Rates and Percentages · Lesson 9*

## Objective

**I can** use estimation and percent error to check reasonableness.

## Warm-up (2 minutes)

You estimate **50** but the exact value is **40**. Is that a big miss?

## Teach

### Percent error

`|estimate − actual| / actual × 100%`.

### Example 1

Estimate 50, actual 40: `|50−40|/40 × 100% = 25%` error.

### Try this

Estimate 90, actual 100. Percent error?

**Check:** `10/100 × 100% = 10%`.

### Estimation habit

Before fine calculation, rough numbers catch impossible results (like a 15% tip larger than the bill).

### Common mistake (this lesson only)

Dividing by the estimate instead of the actual. Fix: actual (true value) goes in the denominator.

## Guided practice (we do)

1. Est 25, actual 20 — % error?  
   **Answer:** 25%

2. Est 48, actual 50 — % error?  
   **Answer:** 4%

3. Is 2% error usually smaller than 20%?  
   **Answer:** Yes

## Independent practice

Complete each item. Show your work.

1. Estimate 19% of 71 by using 20%. Then compute the exact percent and the percent error of your estimate (relative to the exact value).
2. Estimate 19% of 54 by using 20%. Then compute the exact percent and the percent error of your estimate (relative to the exact value).
3. Estimate 19% of 73 by using 20%. Then compute the exact percent and the percent error of your estimate (relative to the exact value).
4. Estimate 19% of 56 by using 20%. Then compute the exact percent and the percent error of your estimate (relative to the exact value).
5. Estimate 19% of 75 by using 20%. Then compute the exact percent and the percent error of your estimate (relative to the exact value).
6. Estimate 19% of 58 by using 20%. Then compute the exact percent and the percent error of your estimate (relative to the exact value).

### Answer key (try first)

1. Estimate ≈ 0.2×71 = 14.2. Exact = 0.19×71 = 13.49. Percent error = |est−exact|/exact×100%.
2. Estimate ≈ 0.2×54 = 10.8. Exact = 0.19×54 = 10.26. Percent error = |est−exact|/exact×100%.
3. Estimate ≈ 0.2×73 = 14.6. Exact = 0.19×73 = 13.87. Percent error = |est−exact|/exact×100%.
4. Estimate ≈ 0.2×56 = 11.2. Exact = 0.19×56 = 10.64. Percent error = |est−exact|/exact×100%.
5. Estimate ≈ 0.2×75 = 15.0. Exact = 0.19×75 = 14.25. Percent error = |est−exact|/exact×100%.
6. Estimate ≈ 0.2×58 = 11.6. Exact = 0.19×58 = 11.02. Percent error = |est−exact|/exact×100%.

## Exit ticket

1. Estimate 70, actual 50 — percent error?
2. Why estimate before computing tax?

## Stretch (optional)

Invent a shopping estimate and compute its percent error vs a “receipt” total.
', "objectives" = '• Use estimation and percent error to check reasonableness.
• Compute |estimate−actual|/actual × 100%.
• Decide if an answer is “close enough” for the context.', "description" = 'Use estimation and percent error thinking to check reasonableness.' WHERE "id" = 'ppg6m0c13c70041be208a5ed3' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mbb56090af595e93ca102','ppg6m0c13c70041be208a5ed3',NULL,'MULTIPLE_CHOICE','Estimate 60, actual 50. Percent error?','["10%","20%","16.7% approx","Both B and C"]',3,'10/50=20%.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m7e7af015a57a5aad3664','ppg6m0c13c70041be208a5ed3',NULL,'MULTIPLE_CHOICE','Denominator in percent error is…','["Estimate","Actual","Difference","100 always"]',1,'Compare error to the true value.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m7b6705d96f0a8379be5a','ppg6m0c13c70041be208a5ed3',NULL,'MULTIPLE_CHOICE','Estimate 99, actual 100. Percent error?','["1%","99%","0%","100%"]',0,'1/100=1%.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 3 L10. Rates & Percents Unit Review (ppg6m091444c4041475c9c62c)
UPDATE "Lesson" SET "content" = '# Rates & Percents Unit Review

*Grade 6 Mathematics · Unit 3 of 11 · Rates and Percentages · Lesson 10*

## Objective

**I can** connect unit rates, tables, and percents in mixed practice.

## Warm-up (2 minutes)

Name one tool from this unit (unit rate, table, or percent) you would use to compare two cereal boxes.

## Teach

### Review map

- Unit rate → compare “per one.”
- Tables → scale equivalent rates.
- Percents → parts per hundred; of / change / tax-tip-discount.

### Example mix

12 oz for $3 → $0.25/oz. A coupon takes 20% off $3 → pay $2.40 → new unit price $0.20/oz.

### Try this

Speed 40 mph for 2 hours, then what percent of a 100-mile trip is done?

**Check:** 80 miles; 80% of the trip.

### Common mistake (this lesson only)

Mixing “percent of” with “percent change” formulas. Fix: ask whether you already know the whole or are comparing two totals.

## Guided practice (we do)

1. Unit price 5 for $10?  
   **Answer:** $2 each

2. 25% of 80?  
   **Answer:** 20

3. From 40 to 50 % increase?  
   **Answer:** 25%

## Independent practice

Complete each item. Show your work.

1. Mixed rates/percents (Rates & Percents Unit Review): Unit rate for 40 miles in 5 hours; then find 120% of 17. Context: a library reading challenge.
2. Mixed rates/percents (Rates & Percents Unit Review): Unit rate for 8 miles in 1 hours; then find 110% of 36. Context: a scholarship bake sale.
3. Mixed rates/percents (Rates & Percents Unit Review): Unit rate for 32 miles in 4 hours; then find 100% of 15. Context: an East Texas trail hike.
4. Mixed rates/percents (Rates & Percents Unit Review): Unit rate for 35 miles in 5 hours; then find 170% of 42. Context: a Saturday soccer tournament.
5. Mixed rates/percents (Rates & Percents Unit Review): Unit rate for 128 miles in 8 hours; then find 160% of 21. Context: a band concert ticket table.
6. Mixed rates/percents (Rates & Percents Unit Review): Unit rate for 48 miles in 3 hours; then find 150% of 40. Context: a youth-group picnic.

### Answer key (try first)

1. Unit rate 8.00 mph. 120% of 17 = 20.4.
2. Unit rate 8.00 mph. 110% of 36 = 39.6.
3. Unit rate 8.00 mph. 100% of 15 = 15.
4. Unit rate 7.00 mph. 170% of 42 = 71.39999999999999.
5. Unit rate 16.00 mph. 160% of 21 = 33.6.
6. Unit rate 16.00 mph. 150% of 40 = 60.

## Exit ticket

1. Better buy: 8 for $6 vs 12 for $8?
2. 15% tip on $40 — tip amount?

## Stretch (optional)

Write a 3-step problem that uses a rate table and a percent discount.
', "objectives" = '• Connect unit rates, tables, and percents in mixed practice.
• Choose a representation that fits the question.
• Catch common order and percent mistakes.', "description" = 'Mixed practice connecting rates, ratios, and percents.' WHERE "id" = 'ppg6m091444c4041475c9c62c' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m52fe782b05c58642e1e0','ppg6m091444c4041475c9c62c',NULL,'MULTIPLE_CHOICE','6 items for $15. Unit price?','["$2.50","$9","$21","$0.40"]',0,'15÷6=2.5.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6maa4e088b15372de13417','ppg6m091444c4041475c9c62c',NULL,'MULTIPLE_CHOICE','30% of 90?','["27","30","60","3"]',0,'0.3×90=27.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m9a5054fd288b00425459','ppg6m091444c4041475c9c62c',NULL,'MULTIPLE_CHOICE','From 20 to 30 is what % increase?','["10%","50%","33%","150%"]',1,'10/20=50%.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L1. Powers as Repeated Multiplication (ppg6m4bd9fafd983c3446719e)
UPDATE "Lesson" SET "content" = '# Powers as Repeated Multiplication

*Grade 6 Mathematics · Unit 4 of 11 · Exponents and Order of Operations · Lesson 1*

## Objective

**I can** interpret a^n as n factors of a.

## Warm-up (2 minutes)

Write 5×5×5 in a shorter way. How many factors of 5?

## Teach

### Power notation

`a^n` means **n** factors of **a** (base a, exponent n).

### Example 1

`2^5 = 32`. Note `3^2 = 9`, not 6.

### Try this

Write 7×7×7×7 as a power.

**Check:** 7^4

### Example 2

Square side 4: area `4^2 = 16` square units.

### Common mistake (this lesson only)

Reading 3^2 as 3×2. Fix: exponent counts factors.

## Guided practice (we do)

1. Expand 5^3  
   **Answer:** 125

2. 2×2×2×2 as a power  
   **Answer:** 2^4

3. True/false: 4^2=8  
   **Answer:** False; equals 16

## Independent practice

Complete each item. Show your work.

1. Write 3^3 as repeated multiplication and evaluate. Then write a product of 3 factors of 4 in exponent form.
2. Write 4^4 as repeated multiplication and evaluate. Then write a product of 4 factors of 5 in exponent form.
3. Write 5^5 as repeated multiplication and evaluate. Then write a product of 5 factors of 6 in exponent form.
4. Write 6^2 as repeated multiplication and evaluate. Then write a product of 2 factors of 7 in exponent form.
5. Write 2^3 as repeated multiplication and evaluate. Then write a product of 3 factors of 3 in exponent form.
6. Write 3^4 as repeated multiplication and evaluate. Then write a product of 4 factors of 4 in exponent form.

### Answer key (try first)

1. 3^3 = 3×3×3 = 27. Product form: (4)^3.
2. 4^4 = 4×4×4×4 = 256. Product form: (5)^4.
3. 5^5 = 5×5×5×5×5 = 3125. Product form: (6)^5.
4. 6^2 = 6×6 = 36. Product form: (7)^2.
5. 2^3 = 2×2×2 = 8. Product form: (3)^3.
6. 3^4 = 3×3×3×3 = 81. Product form: (4)^4.

## Exit ticket

1. Expand 6^2.
2. Why is 2^3 not equal to 6?

## Stretch (optional)

Explain 10^3 using place value.
', "objectives" = '• Interpret a^n as n factors of a.
• Write products as powers.
• Distinguish a^n from a×n.', "description" = 'Interpret a^n as n factors of a for whole-number exponents.' WHERE "id" = 'ppg6m4bd9fafd983c3446719e' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mfbaa401edfdda6d7208a','ppg6m4bd9fafd983c3446719e',NULL,'MULTIPLE_CHOICE','2^4 =','["8","16","6","24"]',1,'2×2×2×2=16.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m3f4a09bc62140f7ce528','ppg6m4bd9fafd983c3446719e',NULL,'MULTIPLE_CHOICE','3^2 means','["3×2","3+2","3×3","2×2×2"]',2,'Two factors of 3.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m3144fe3b48cb29aa19cd','ppg6m4bd9fafd983c3446719e',NULL,'MULTIPLE_CHOICE','5×5×5 equals','["5^2","5^3","3^5","15"]',1,'Three factors → 5^3.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L2. Evaluating Powers (ppg6mf2388d20892a9f7bc49e)
UPDATE "Lesson" SET "content" = '# Evaluating Powers

*Grade 6 Mathematics · Unit 4 of 11 · Exponents and Order of Operations · Lesson 2*

## Objective

**I can** evaluate numerical powers.

## Warm-up (2 minutes)

Which is larger: 2^5 or 5^2?

## Teach

### Evaluate

Multiply the base by itself according to the exponent.

### Example 1

`2^5=32`, `5^2=25`, so 2^5 is larger.

### Try this

Evaluate 4^3.

**Check:** 64

### Example 2

`10^3=1000`. Raising the exponent by 1 multiplies by another 10.

### Common mistake (this lesson only)

Treating a^n as a×n.

## Guided practice (we do)

1. 3^4  
   **Answer:** 81

2. Larger: 6^2 or 2^6?  
   **Answer:** 2^6=64

3. 10^4  
   **Answer:** 10000

## Independent practice

Complete each item. Show your work.

1. Evaluate 3^3 and 4^2. Which is greater? Estimate before computing.
2. Evaluate 4^4 and 5^2. Which is greater? Estimate before computing.
3. Evaluate 5^5 and 6^2. Which is greater? Estimate before computing.
4. Evaluate 6^2 and 7^2. Which is greater? Estimate before computing.
5. Evaluate 2^3 and 3^2. Which is greater? Estimate before computing.
6. Evaluate 3^4 and 4^2. Which is greater? Estimate before computing.

### Answer key (try first)

1. 3^3 = 27; 4^2 = 16. Greater: 3^3.
2. 4^4 = 256; 5^2 = 25. Greater: 4^4.
3. 5^5 = 3125; 6^2 = 36. Greater: 5^5.
4. 6^2 = 36; 7^2 = 49. Greater: 7^2.
5. 2^3 = 8; 3^2 = 9. Greater: 3^2.
6. 3^4 = 81; 4^2 = 16. Greater: 3^4.

## Exit ticket

1. Evaluate 5^3.
2. Compare 3^3 and 4^2.

## Stretch (optional)

Is 2^10 nearer 500 or 1000?
', "objectives" = '• Evaluate numerical powers.
• Compare powers with different bases or exponents.
• Estimate before computing.', "description" = 'Evaluate numerical powers and compare sizes.' WHERE "id" = 'ppg6mf2388d20892a9f7bc49e' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6me40d650124046b08ef2a','ppg6mf2388d20892a9f7bc49e',NULL,'MULTIPLE_CHOICE','4^3 =','["12","64","16","81"]',1,'64.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mbbe1e11351863e65059d','ppg6mf2388d20892a9f7bc49e',NULL,'MULTIPLE_CHOICE','Which is greater?','["2^3","3^2","Equal","Unknown"]',1,'8 vs 9.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m3b5086275b0d24daa30c','ppg6mf2388d20892a9f7bc49e',NULL,'MULTIPLE_CHOICE','10^2 =','["20","100","1000","12"]',1,'100.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L3. Order of Operations Foundations (ppg6m29c4c4631b0f95037e4a)
UPDATE "Lesson" SET "content" = '# Order of Operations Foundations

*Grade 6 Mathematics · Unit 4 of 11 · Exponents and Order of Operations · Lesson 3*

## Objective

**I can** apply order of operations.

## Warm-up (2 minutes)

Compute 3+4×2. Why is 14 incorrect?

## Teach

### Order

Grouping → exponents → ×÷ left-to-right → +− left-to-right.

### Example 1

`3+4×2 = 3+8 = 11`.

### Try this

10 − 3^2.

**Check:** 1

### Example 2

`20÷4×5 = 5×5 = 25`.

### Common mistake (this lesson only)

Adding before multiplying.

## Guided practice (we do)

1. 5+2×6  
   **Answer:** 17

2. 18÷3×2  
   **Answer:** 12

3. (5+2)×6  
   **Answer:** 42

## Independent practice

Complete each item. Show your work.

1. Evaluate 3 + 10 × 11^2 − 10. Show the order (×/÷ and exponents before +/−).
2. Evaluate 4 + 10 × 6^2 − 12. Show the order (×/÷ and exponents before +/−).
3. Evaluate 5 + 10 × 10^2 − 13. Show the order (×/÷ and exponents before +/−).
4. Evaluate 6 + 10 × 13^2 − 14. Show the order (×/÷ and exponents before +/−).
5. Evaluate 2 + 10 × 8^2 − 9. Show the order (×/÷ and exponents before +/−).
6. Evaluate 3 + 10 × 12^2 − 10. Show the order (×/÷ and exponents before +/−).

### Answer key (try first)

1. Exponents first: 11^2 = 121. Then ×: 1210. Then +/−: 1203.
2. Exponents first: 6^2 = 36. Then ×: 360. Then +/−: 352.
3. Exponents first: 10^2 = 100. Then ×: 1000. Then +/−: 992.
4. Exponents first: 13^2 = 169. Then ×: 1690. Then +/−: 1682.
5. Exponents first: 8^2 = 64. Then ×: 640. Then +/−: 633.
6. Exponents first: 12^2 = 144. Then ×: 1440. Then +/−: 1433.

## Exit ticket

1. Evaluate 8+4÷2.
2. Evaluate 2^3+1.

## Stretch (optional)

Two expressions that differ only by parentheses.
', "objectives" = '• Apply order of operations.
• Work left to right within the same priority.
• Show each step.', "description" = 'Apply parentheses, exponents, multiply/divide, add/subtract consistently.' WHERE "id" = 'ppg6m29c4c4631b0f95037e4a' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m37bf90f5143224533a62','ppg6m29c4c4631b0f95037e4a',NULL,'MULTIPLE_CHOICE','3+4×2 =','["14","11","10","24"]',1,'11.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m3950bf428f559f05e042','ppg6m29c4c4631b0f95037e4a',NULL,'MULTIPLE_CHOICE','10−2^2 =','["64","6","8","16"]',1,'6.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m2e4d6b99c2e501e614bc','ppg6m29c4c4631b0f95037e4a',NULL,'MULTIPLE_CHOICE','16÷4×2 =','["2","8","1","32"]',1,'8.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L4. Expressions with Grouping Symbols (ppg6mf40debd88876a9170582)
UPDATE "Lesson" SET "content" = '# Expressions with Grouping Symbols

*Grade 6 Mathematics · Unit 4 of 11 · Exponents and Order of Operations · Lesson 4*

## Objective

**I can** use grouping symbols to control order.

## Warm-up (2 minutes)

How do (8−3)×2 and 8−3×2 differ?

## Teach

### Grouping first

Finish inside () or [] before outside operations.

### Example 1

`(8−3)×2=10` but `8−3×2=2`.

### Try this

2(7−4)^2.

**Check:** 18

### Example 2

`[12÷(2+4)]+1=3`.

### Common mistake (this lesson only)

Leaving a group unfinished.

## Guided practice (we do)

1. (9−5)^2  
   **Answer:** 16

2. 3(2+5)  
   **Answer:** 21

3. 20÷(2×5)  
   **Answer:** 2

## Independent practice

Complete each item. Show your work.

1. Evaluate (3 + 8) × 4 − 0^2 and compare to 3 + 8 × 4 − 0^2. Why do they differ?
2. Evaluate (4 + 8) × -1 − 1^2 and compare to 4 + 8 × -1 − 1^2. Why do they differ?
3. Evaluate (5 + 8) × 3 − 2^2 and compare to 5 + 8 × 3 − 2^2. Why do they differ?
4. Evaluate (6 + 8) × 6 − 3^2 and compare to 6 + 8 × 6 − 3^2. Why do they differ?
5. Evaluate (2 + 13) × 9 − 12^2 and compare to 2 + 13 × 9 − 12^2. Why do they differ?
6. Evaluate (3 + 13) × 13 − 13^2 and compare to 3 + 13 × 13 − 13^2. Why do they differ?

### Answer key (try first)

1. With grouping: (11)×4 − 0 = 44. Without: 35. Parentheses change order.
2. With grouping: (12)×-1 − 1 = -13. Without: -5. Parentheses change order.
3. With grouping: (13)×3 − 4 = 35. Without: 25. Parentheses change order.
4. With grouping: (14)×6 − 9 = 75. Without: 45. Parentheses change order.
5. With grouping: (15)×9 − 144 = -9. Without: -25. Parentheses change order.
6. With grouping: (16)×13 − 169 = 39. Without: 3. Parentheses change order.

## Exit ticket

1. (6+2)/4.
2. Add parentheses so 8−3×2 becomes 10.

## Stretch (optional)

A story that needs parentheses.
', "objectives" = '• Use grouping symbols to control order.
• Simplify inside groups first.
• Match verbal meaning with parentheses.', "description" = 'Use parentheses and brackets to control evaluation order.' WHERE "id" = 'ppg6mf40debd88876a9170582' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m884ccd5c04be47aa171e','ppg6mf40debd88876a9170582',NULL,'MULTIPLE_CHOICE','(5+3)×2 =','["11","16","13","10"]',1,'16.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m5f85ee20743aae5e1278','ppg6mf40debd88876a9170582',NULL,'MULTIPLE_CHOICE','4+2^2×3 =','["36","16","20","12"]',1,'16.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m1526b945abd1db3784c1','ppg6mf40debd88876a9170582',NULL,'MULTIPLE_CHOICE','First step in 3[8−(2+1)]?','["3×8","2+1","8−2","3×7"]',1,'Innermost first.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L5. Exponents in Area and Volume Contexts (ppg6mb921df72cf2c9d74affd)
UPDATE "Lesson" SET "content" = '# Exponents in Area and Volume Contexts

*Grade 6 Mathematics · Unit 4 of 11 · Exponents and Order of Operations · Lesson 5*

## Objective

**I can** connect a^2 to square area and a^3 to cube volume.

## Warm-up (2 minutes)

A square has side 6 cm. What expression gives its area?

## Teach

### Geometry link

Square area s^2; cube volume s^3.

### Example 1

Side 6 → area 36 square cm.

### Try this

Cube side 3 in — volume?

**Check:** 27 cubic inches

### Example 2

Area 49 ft^2 → side 7 ft.

### Common mistake (this lesson only)

Labeling area with linear units.

## Guided practice (we do)

1. Side 5 → area  
   **Answer:** 25 square units

2. Side 4 → cube volume  
   **Answer:** 64 cubic units

3. Area 81 → side  
   **Answer:** 9

## Independent practice

Complete each item. Show your work.

1. A square patio has side 6 ft. Write area with an exponent and evaluate. A cube display has edge 3 in; write volume with an exponent.
2. A square patio has side 7 ft. Write area with an exponent and evaluate. A cube display has edge 4 in; write volume with an exponent.
3. A square patio has side 8 ft. Write area with an exponent and evaluate. A cube display has edge 5 in; write volume with an exponent.
4. A square patio has side 9 ft. Write area with an exponent and evaluate. A cube display has edge 6 in; write volume with an exponent.
5. A square patio has side 5 ft. Write area with an exponent and evaluate. A cube display has edge 2 in; write volume with an exponent.
6. A square patio has side 6 ft. Write area with an exponent and evaluate. A cube display has edge 3 in; write volume with an exponent.

### Answer key (try first)

1. Area (6)^2 = 36 ft². Volume 3^3 = 27 in³.
2. Area (7)^2 = 49 ft². Volume 4^3 = 64 in³.
3. Area (8)^2 = 64 ft². Volume 5^3 = 125 in³.
4. Area (9)^2 = 81 ft². Volume 6^3 = 216 in³.
5. Area (5)^2 = 25 ft². Volume 2^3 = 8 in³.
6. Area (6)^2 = 36 ft². Volume 3^3 = 27 in³.

## Exit ticket

1. Area of square side 8.
2. Volume of cube side 2.

## Stretch (optional)

Why 4^3 is not the area of a square with side 4.
', "objectives" = '• Connect a^2 to square area and a^3 to cube volume.
• Use square/cubic units.
• Find a side length from area when appropriate.', "description" = 'Connect squares and cubes to geometric meaning.' WHERE "id" = 'ppg6mb921df72cf2c9d74affd' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6me0f2e35dd4256b801a2e','ppg6mb921df72cf2c9d74affd',NULL,'MULTIPLE_CHOICE','Square side 7. Area?','["14","49","21","28"]',1,'49.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m24a9716f1270cf1a090e','ppg6mb921df72cf2c9d74affd',NULL,'MULTIPLE_CHOICE','Cube side 5. Volume?','["15","25","125","75"]',2,'125.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6me2d1bff094ac2c0c24ce','ppg6mb921df72cf2c9d74affd',NULL,'MULTIPLE_CHOICE','Units for s^2 when s is in meters?','["meters","square meters","cubic meters","none"]',1,'Area uses square units.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L6. Writing Expressions with Exponents (ppg6m2f4013547a401c793ec1)
UPDATE "Lesson" SET "content" = '# Writing Expressions with Exponents

*Grade 6 Mathematics · Unit 4 of 11 · Exponents and Order of Operations · Lesson 6*

## Objective

**I can** translate verbal phrases that include powers.

## Warm-up (2 minutes)

Does “the square of a number plus 3” mean (n+3)^2 or n^2+3?

## Teach

### Phrases

Square of n → n^2. Square of (n+3) → (n+3)^2. n squared plus 3 → n^2+3.

### Example 1

“Five squared times 2” → 5^2×2=50.

### Try this

Write: the cube of (x+1).

**Check:** (x+1)^3

### Example 2

“Twice the square of 4” → 2×4^2=32, not (2×4)^2.

### Common mistake (this lesson only)

Dropping parentheses when the base is a sum.

## Guided practice (we do)

1. Square of 9  
   **Answer:** 81

2. Twice 3 squared  
   **Answer:** 18

3. (2+3)^2 vs 2^2+3^2  
   **Answer:** 25 vs 13

## Independent practice

Complete each item. Show your work.

1. Translate: “the square of a number n, plus 4” and “5 times the cube of a side length s.”
2. Translate: “the square of a number n, plus 8” and “7 times the cube of a side length s.”
3. Translate: “the square of a number n, plus 8” and “10 times the cube of a side length s.”
4. Translate: “the square of a number n, plus 13” and “7 times the cube of a side length s.”
5. Translate: “the square of a number n, plus 13” and “10 times the cube of a side length s.”
6. Translate: “the square of a number n, plus 8” and “12 times the cube of a side length s.”

### Answer key (try first)

1. n^2 + 4; 5s^3.
2. n^2 + 8; 7s^3.
3. n^2 + 8; 10s^3.
4. n^2 + 13; 7s^3.
5. n^2 + 13; 10s^3.
6. n^2 + 8; 12s^3.

## Exit ticket

1. Write: square of (y−1).
2. Evaluate twice five squared.

## Stretch (optional)

Two similar phrases needing different parentheses.
', "objectives" = '• Translate verbal phrases that include powers.
• Distinguish square of a sum from sum of squares.
• Use parentheses when the base is a sum.', "description" = 'Translate verbal phrases that include powers.' WHERE "id" = 'ppg6m2f4013547a401c793ec1' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m3450de59d456eb14f6b8','ppg6m2f4013547a401c793ec1',NULL,'MULTIPLE_CHOICE','“Four squared plus 1”','["(4+1)^2","4^2+1","4^(2+1)","16"]',1,'4^2+1.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m56c52b989c61ab3eb39b','ppg6m2f4013547a401c793ec1',NULL,'MULTIPLE_CHOICE','“Square of the sum of 2 and 3”','["2^2+3","(2+3)^2","2+3^2","2^2+3^2"]',1,'(2+3)^2.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m28f5a7a98312e10e61ab','ppg6m2f4013547a401c793ec1',NULL,'MULTIPLE_CHOICE','2×5^2 =','["100","50","14","20"]',1,'50.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L7. Common Order Mistakes (ppg6m9348b8c9470c58440845)
UPDATE "Lesson" SET "content" = '# Common Order Mistakes

*Grade 6 Mathematics · Unit 4 of 11 · Exponents and Order of Operations · Lesson 7*

## Objective

**I can** diagnose classic order-of-operations errors.

## Warm-up (2 minutes)

A student says 8−2+1=5. What went wrong?

## Teach

### Error hunt

Name the broken rule, recompute, state the correct value.

### Example 1

Wrong: 8−2+1→5. Correct left-to-right: **7**.

### Try this

Fix 4+18÷2×3.

**Check:** 31

### Example 2

Wrong: 2+3^2=25. Correct: 2+9=11.

### Common mistake (this lesson only)

Always doing multiplication before division even when division is leftmost.

## Guided practice (we do)

1. Correct value of 10−3−2  
   **Answer:** 5

2. Correct 5×2^2  
   **Answer:** 20

3. 16÷4÷2  
   **Answer:** 2

## Independent practice

Complete each item. Show your work.

1. A student evaluates 8 + 5^2 as (8 + 5)^2 = 169. Correct the work and name the mistake.
2. A student evaluates 6 + 5^2 as (6 + 5)^2 = 121. Correct the work and name the mistake.
3. A student evaluates 8 + 12^2 as (8 + 12)^2 = 400. Correct the work and name the mistake.
4. A student evaluates 14 + 9^2 as (14 + 9)^2 = 529. Correct the work and name the mistake.
5. A student evaluates 7 + 8^2 as (7 + 8)^2 = 225. Correct the work and name the mistake.
6. A student evaluates 14 + 16^2 as (14 + 16)^2 = 900. Correct the work and name the mistake.

### Answer key (try first)

1. Correct: 8 + 25 = 33. Mistake: treating addition as inside the power.
2. Correct: 6 + 25 = 31. Mistake: treating addition as inside the power.
3. Correct: 8 + 144 = 152. Mistake: treating addition as inside the power.
4. Correct: 14 + 81 = 95. Mistake: treating addition as inside the power.
5. Correct: 7 + 64 = 71. Mistake: treating addition as inside the power.
6. Correct: 14 + 256 = 270. Mistake: treating addition as inside the power.

## Exit ticket

1. Repair 9−3×2 if someone got 12.
2. Repair 2^3×2 if someone got 2^6.

## Stretch (optional)

A wrong solution plus a one-sentence coach note.
', "objectives" = '• Diagnose classic order-of-operations errors.
• Repair from the broken step.
• Explain why a wrong path fails.', "description" = 'Diagnose and fix classic PEMDAS/GEMS errors.' WHERE "id" = 'ppg6m9348b8c9470c58440845' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m545a60ba978a4b556064','ppg6m9348b8c9470c58440845',NULL,'MULTIPLE_CHOICE','8−2+1 =','["5","7","9","6"]',1,'7.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m7003efdd789f3fa6a606','ppg6m9348b8c9470c58440845',NULL,'MULTIPLE_CHOICE','Error in 2+3^2=25?','["Forgot exponent","Added before exponent","Multiplied wrong","Used parentheses"]',1,'Added then squared.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mccaf3ad867ebc5c8a784','ppg6m9348b8c9470c58440845',NULL,'MULTIPLE_CHOICE','16÷4×2 =','["2","8","1","32"]',1,'8.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 4 L8. Exponents & Order Unit Review (ppg6ma145b53fec88c95f26e1)
UPDATE "Lesson" SET "content" = '# Exponents & Order Unit Review

*Grade 6 Mathematics · Unit 4 of 11 · Exponents and Order of Operations · Lesson 8*

## Objective

**I can** evaluate mixed expressions with powers.

## Warm-up (2 minutes)

List the order-of-operations steps in your own words.

## Teach

### Checklist

Powers; grouping first; ×÷ then +− left-to-right; s^2 area; s^3 volume.

### Example mix

`2(3+1)^2 − 5 = 32 − 5 = 27`.

### Try this

5^2 − 3^2.

**Check:** 16

### Example 2

Square side 9 → area 81; cube side 3 → volume 27.

### Common mistake (this lesson only)

Stopping after one step while higher-priority ops remain.

## Guided practice (we do)

1. (2+3)^2  
   **Answer:** 25

2. 2^3+2^2  
   **Answer:** 12

3. Cube side 3 volume  
   **Answer:** 27

## Independent practice

Complete each item. Show your work.

1. Review: Evaluate 2^3 × 9 + (3 − 1). Show order of operations.
2. Review: Evaluate 2^4 × 11 + (1 − 2). Show order of operations.
3. Review: Evaluate 2^5 × 13 + (0 − 3). Show order of operations.
4. Review: Evaluate 2^2 × 6 + (7 − 4). Show order of operations.
5. Review: Evaluate 2^3 × 8 + (5 − 5). Show order of operations.
6. Review: Evaluate 2^4 × 10 + (4 − 6). Show order of operations.

### Answer key (try first)

1. 2^3 = 8; × 9 → 72; + (2) → 74.
2. 2^4 = 16; × 11 → 176; + (-1) → 175.
3. 2^5 = 32; × 13 → 416; + (-3) → 413.
4. 2^2 = 4; × 6 → 24; + (3) → 27.
5. 2^3 = 8; × 8 → 64; + (0) → 64.
6. 2^4 = 16; × 10 → 160; + (-2) → 158.

## Exit ticket

1. Evaluate 18÷3^2.
2. Area of square side 9.

## Stretch (optional)

Create a 3-step expression whose value is 10.
', "objectives" = '• Evaluate mixed expressions with powers.
• Translate and compare verbal phrases.
• Catch left-to-right and parentheses errors.', "description" = 'Mixed fluency with powers and multi-step expressions.' WHERE "id" = 'ppg6ma145b53fec88c95f26e1' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m523a140b593970a3dbc1','ppg6ma145b53fec88c95f26e1',NULL,'MULTIPLE_CHOICE','3^2+4^2 =','["49","25","14","24"]',1,'25.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mf63de6cd70383f13c592','ppg6ma145b53fec88c95f26e1',NULL,'MULTIPLE_CHOICE','(8−3)×2^2 =','["20","40","10","13"]',0,'20.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m05fd818792f571939908','ppg6ma145b53fec88c95f26e1',NULL,'MULTIPLE_CHOICE','Side 6 square area?','["12","36","18","216"]',1,'36.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L1. Integers on the Number Line (ppg6m2da5ce75f2249468e4f3)
UPDATE "Lesson" SET "content" = '# Integers on the Number Line

*Grade 6 Mathematics · Unit 5 of 11 · Negative Numbers · Lesson 1*

## Objective

**I can** plot integers on a number line.

## Warm-up (2 minutes)

Where is −3 relative to 0? To 2?

## Teach

### Big idea

Integers sit on a number line; negatives are left of zero on the standard line.

### Example 1

Plot −4: four units left of 0.

### Try this

Plot 3 and −3. What is true?

**Check:** Opposites — same distance from 0.

### Example 2

From −2 move 5 right → land on 3.

### Common mistake (this lesson only)

Putting negatives to the right of zero.

## Guided practice (we do)

1. Rightmost of −5 and −1?  
   **Answer:** −1

2. Distance 0 to −7?  
   **Answer:** 7

3. Is −8 left of −3?  
   **Answer:** Yes

## Independent practice

Complete each item. Show your work.

1. Plot 4, -4, and -3 on a number line. Which is farthest left? Which is closest to zero?
2. Plot 6, -10, and -3 on a number line. Which is farthest left? Which is closest to zero?
3. Plot 8, -9, and -2 on a number line. Which is farthest left? Which is closest to zero?
4. Plot 10, -8, and -1 on a number line. Which is farthest left? Which is closest to zero?
5. Plot 12, -14, and -1 on a number line. Which is farthest left? Which is closest to zero?
6. Plot 14, -13, and 0 on a number line. Which is farthest left? Which is closest to zero?

### Answer key (try first)

1. Farthest left: -4. Closest to zero: among 4, -4, -3 the one with least absolute value (-3).
2. Farthest left: -10. Closest to zero: among 6, -10, -3 the one with least absolute value (-3).
3. Farthest left: -9. Closest to zero: among 8, -9, -2 the one with least absolute value (-2).
4. Farthest left: -8. Closest to zero: among 10, -8, -1 the one with least absolute value (-1).
5. Farthest left: -14. Closest to zero: among 12, -14, -1 the one with least absolute value (-1).
6. Farthest left: -13. Closest to zero: among 14, -13, 0 the one with least absolute value (0).

## Exit ticket

1. Plot −6,0,4.
2. Number 3 left of −1.

## Stretch (optional)

Temperature story with −2 and 5.
', "objectives" = '• Plot integers on a number line.
• Describe positions relative to zero.
• Identify opposites.', "description" = 'Plot integers; interpret left/right of zero.' WHERE "id" = 'ppg6m2da5ce75f2249468e4f3' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6md37c81160d97309e2872','ppg6m2da5ce75f2249468e4f3',NULL,'MULTIPLE_CHOICE','Farthest left?','["−1","0","2","−5"]',3,'−5.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ma50dd597789f893904db','ppg6m2da5ce75f2249468e4f3',NULL,'MULTIPLE_CHOICE','Opposite of −2?','["2","−2","0","1"]',0,'2.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m8c600e9c80d6a234352c','ppg6m2da5ce75f2249468e4f3',NULL,'MULTIPLE_CHOICE','From −1 move 4 left →','["3","−5","5","−3"]',1,'−5.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L2. Opposites and Absolute Value (ppg6m12b746f7d16798dc93b0)
UPDATE "Lesson" SET "content" = '# Opposites and Absolute Value

*Grade 6 Mathematics · Unit 5 of 11 · Negative Numbers · Lesson 2*

## Objective

**I can** name opposites.

## Warm-up (2 minutes)

Opposite of −5? How far is −5 from 0?

## Teach

### Big idea

Opposite of a is −a. Absolute value |a| is distance from 0 (≥0).

### Example 1

|−5|=5; opposite of −5 is 5.

### Try this

|−12| and |7|?

**Check:** 12 and 7

### Example 2

|−3|+|2|=5.

### Common mistake (this lesson only)

Writing |−4|=−4.

## Guided practice (we do)

1. |−9|  
   **Answer:** 9

2. Opposite of 6  
   **Answer:** −6

3. |0|  
   **Answer:** 0

## Independent practice

Complete each item. Show your work.

1. What is the opposite of -3? What is |-3|? What is |-6|? Explain absolute value as distance from 0.
2. What is the opposite of -5? What is |-5|? What is |-5|? Explain absolute value as distance from 0.
3. What is the opposite of 0? What is |0|? What is |-4|? Explain absolute value as distance from 0.
4. What is the opposite of -2? What is |-2|? What is |-4|? Explain absolute value as distance from 0.
5. What is the opposite of -6? What is |-6|? What is |-3|? Explain absolute value as distance from 0.
6. What is the opposite of -8? What is |-8|? What is |-3|? Explain absolute value as distance from 0.

### Answer key (try first)

1. Opposite of -3 is 3. |-3| = 3. |-6| = 6.
2. Opposite of -5 is 5. |-5| = 5. |-5| = 5.
3. Opposite of 0 is 0. |0| = 0. |-4| = 4.
4. Opposite of -2 is 2. |-2| = 2. |-4| = 4.
5. Opposite of -6 is 6. |-6| = 6. |-3| = 3.
6. Opposite of -8 is 8. |-8| = 8. |-3| = 3.

## Exit ticket

1. |−15|.
2. Opposite of −11.

## Stretch (optional)

When is |x|=x?
', "objectives" = '• Name opposites.
• Compute absolute value as distance from zero.
• Use |a| in simple sums.', "description" = 'Define opposite and absolute value as distance from zero.' WHERE "id" = 'ppg6m12b746f7d16798dc93b0' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m1992183b16ca8e7a082f','ppg6m12b746f7d16798dc93b0',NULL,'MULTIPLE_CHOICE','|−8|=','["−8","8","0","16"]',1,'8.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m6229a83025d2608497bc','ppg6m12b746f7d16798dc93b0',NULL,'MULTIPLE_CHOICE','Opposite of 0?','["0","1","−1","undef"]',0,'0.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ma569e7e81a7781460cdf','ppg6m12b746f7d16798dc93b0',NULL,'MULTIPLE_CHOICE','|−3|+2=','["−1","5","1","6"]',1,'5.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L3. Comparing and Ordering Integers (ppg6md01ef2aea19ddca33f3c)
UPDATE "Lesson" SET "content" = '# Comparing and Ordering Integers

*Grade 6 Mathematics · Unit 5 of 11 · Negative Numbers · Lesson 3*

## Objective

**I can** compare integers using a number line.

## Warm-up (2 minutes)

Greater: −2 or −7?

## Teach

### Big idea

Rightmost is greater. −2 > −7.

### Example 1

Order −5,2,−1,0 → −5,−1,0,2.

### Try this

Compare −8 and −3.

**Check:** −3 > −8

### Example 2

Least to greatest: 4,−4,1 → −4,1,4.

### Common mistake (this lesson only)

Thinking more negative means larger.

## Guided practice (we do)

1. Greater: −1 or −10?  
   **Answer:** −1

2. Order 3,−2,0  
   **Answer:** −2,0,3

3. −5 < −4?  
   **Answer:** True

## Independent practice

Complete each item. Show your work.

1. Order 3, -9, 0, and 0 from least to greatest. Justify with a number-line sentence.
2. Order 5, -8, 1, and 0 from least to greatest. Justify with a number-line sentence.
3. Order 7, -7, 2, and 0 from least to greatest. Justify with a number-line sentence.
4. Order 10, -8, -2, and 0 from least to greatest. Justify with a number-line sentence.
5. Order 12, -15, 5, and 0 from least to greatest. Justify with a number-line sentence.
6. Order 14, -13, 6, and 0 from least to greatest. Justify with a number-line sentence.

### Answer key (try first)

1. -9 < 0 < 0 < 3.
2. -8 < 0 < 1 < 5.
3. -7 < 0 < 2 < 7.
4. -8 < -2 < 0 < 10.
5. -15 < 0 < 5 < 12.
6. -13 < 0 < 6 < 14.

## Exit ticket

1. Order −6,−1,2.
2. Fill −9 __ −2.

## Stretch (optional)

Yard-line story with negatives.
', "objectives" = '• Compare integers using a number line.
• Order lists of integers.
• Explain why a more-left integer is smaller.', "description" = 'Order signed numbers using the number line.' WHERE "id" = 'ppg6md01ef2aea19ddca33f3c' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m94211b91f67dbd4c71ae','ppg6md01ef2aea19ddca33f3c',NULL,'MULTIPLE_CHOICE','Least of −3,−7,1?','["−3","−7","1","0"]',1,'−7.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mfb1f7d097394eab99adc','ppg6md01ef2aea19ddca33f3c',NULL,'MULTIPLE_CHOICE','−4 ? −1','["<",">","=",">="]',0,'−4<−1.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mdddd51490381a4a769a6','ppg6md01ef2aea19ddca33f3c',NULL,'MULTIPLE_CHOICE','Greatest of −20,−5,−12?','["−20","−5","−12","0"]',1,'−5.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L4. Real-World Signed Quantities (ppg6m0529e0eac9f4723dcd34)
UPDATE "Lesson" SET "content" = '# Real-World Signed Quantities

*Grade 6 Mathematics · Unit 5 of 11 · Negative Numbers · Lesson 4*

## Objective

**I can** model real situations with signed numbers.

## Warm-up (2 minutes)

Debt of $20 as a signed number — what does 0 mean?

## Teach

### Big idea

Choose zero carefully (sea level, break-even). Below/above → −/+.

### Example 1

Elevation −40 ft = 40 ft below sea level.

### Try this

From −5°F to 3°F — change?

**Check:** +8 degrees

### Example 2

Start 0; +30 deposit; −12 withdraw → balance 18.

### Common mistake (this lesson only)

Using + for debt when credit is defined positive.

## Guided practice (we do)

1. 50 ft below sea level  
   **Answer:** −50

2. Loss of 7 points  
   **Answer:** −7

3. Zero in a bank story?  
   **Answer:** Break-even / empty

## Independent practice

Complete each item. Show your work.

1. Morning temperature is 0°F; afternoon is 3°F. What is the change from morning to afternoon (use a signed number)? Elevation: -8 feet relative to sea level — interpret the sign.
2. Morning temperature is 2°F; afternoon is 5°F. What is the change from morning to afternoon (use a signed number)? Elevation: -7 feet relative to sea level — interpret the sign.
3. Morning temperature is -5°F; afternoon is 7°F. What is the change from morning to afternoon (use a signed number)? Elevation: -7 feet relative to sea level — interpret the sign.
4. Morning temperature is -4°F; afternoon is 9°F. What is the change from morning to afternoon (use a signed number)? Elevation: -6 feet relative to sea level — interpret the sign.
5. Morning temperature is -2°F; afternoon is 11°F. What is the change from morning to afternoon (use a signed number)? Elevation: -5 feet relative to sea level — interpret the sign.
6. Morning temperature is -9°F; afternoon is 13°F. What is the change from morning to afternoon (use a signed number)? Elevation: -4 feet relative to sea level — interpret the sign.

### Answer key (try first)

1. Change = 3 degrees (afternoon − morning). Elevation -8: below sea level.
2. Change = 3 degrees (afternoon − morning). Elevation -7: below sea level.
3. Change = 12 degrees (afternoon − morning). Elevation -7: below sea level.
4. Change = 13 degrees (afternoon − morning). Elevation -6: below sea level.
5. Change = 13 degrees (afternoon − morning). Elevation -5: below sea level.
6. Change = 22 degrees (afternoon − morning). Elevation -4: below sea level.

## Exit ticket

1. Write 12° below 0.
2. Explain zero for elevator floors.

## Stretch (optional)

Map three elevations with signs.
', "objectives" = '• Model real situations with signed numbers.
• Explain what zero means in context.
• Translate words ↔ signs.', "description" = 'Model temperature, elevation, debt, and sports scores.' WHERE "id" = 'ppg6m0529e0eac9f4723dcd34' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m6b357fcc6b01ba86bdd6','ppg6m0529e0eac9f4723dcd34',NULL,'MULTIPLE_CHOICE','3 below zero as integer','["3","−3","0","1/3"]',1,'−3.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mb64fc7f86d30636fcb0a','ppg6m0529e0eac9f4723dcd34',NULL,'MULTIPLE_CHOICE','Gain of 9','["−9","9","0","90"]',1,'+9.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m43771f592ef2f7268660','ppg6m0529e0eac9f4723dcd34',NULL,'MULTIPLE_CHOICE','0 means for debt?','["Always broke","Break-even if + is credit","Sea level","Noon"]',1,'Break-even.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L5. Rational Numbers Beyond Integers (ppg6m663ee54eb7d0f40abe81)
UPDATE "Lesson" SET "content" = '# Rational Numbers Beyond Integers

*Grade 6 Mathematics · Unit 5 of 11 · Negative Numbers · Lesson 5*

## Objective

**I can** place signed fractions/decimals on a number line.

## Warm-up (2 minutes)

Where does −1/2 sit between −1 and 0?

## Teach

### Big idea

Negatives sit left of zero at matching distance.

### Example 1

−0.5 is halfway from 0 to −1.

### Try this

Order −0.2, −1.5, 0.5.

**Check:** −1.5, −0.2, 0.5

### Example 2

−3/4 is left of −1/2.

### Common mistake (this lesson only)

Placing −1/4 left of −1.

## Guided practice (we do)

1. Plot −2.5 roughly  
   **Answer:** Between −3 and −2

2. Compare −1/3 and −1/2  
   **Answer:** −1/3 > −1/2

3. |−0.75|  
   **Answer:** 0.75

## Independent practice

Complete each item. Show your work.

1. Place −11/11, -10, and 0.8 on a number line sketch. Which is least?
2. Place −9/11, -10, and 0.10 on a number line sketch. Which is least?
3. Place −11/10, -9, and 0.11 on a number line sketch. Which is least?
4. Place −8/15, -14, and 0.10 on a number line sketch. Which is least?
5. Place −10/14, -13, and 0.11 on a number line sketch. Which is least?
6. Place −8/14, -13, and 0.13 on a number line sketch. Which is least?

### Answer key (try first)

1. Compare decimal values: −1.000, -10, 0.8. Least = most negative.
2. Compare decimal values: −0.818, -10, 1.0. Least = most negative.
3. Compare decimal values: −1.100, -9, 1.1. Least = most negative.
4. Compare decimal values: −0.533, -14, 1.0. Least = most negative.
5. Compare decimal values: −0.714, -13, 1.1. Least = most negative.
6. Compare decimal values: −0.571, -13, 1.3. Least = most negative.

## Exit ticket

1. Order −0.8,−0.2,0.1.
2. Place −3/5.

## Stretch (optional)

Why −0.1 > −0.9.
', "objectives" = '• Place signed fractions/decimals on a number line.
• Order mixed signed rationals.
• Compare using equivalent forms.', "description" = 'Place fractions and decimals on both sides of zero.' WHERE "id" = 'ppg6m663ee54eb7d0f40abe81' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m2472210c6224d9ebfdbc','ppg6m663ee54eb7d0f40abe81',NULL,'MULTIPLE_CHOICE','−0.25 is between −1 and 0?','["Yes","No","Only if positive","Undefined"]',0,'Yes.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6me4dd57cec43e332a2c8e','ppg6m663ee54eb7d0f40abe81',NULL,'MULTIPLE_CHOICE','Greater: −0.1 or −0.01?','["−0.1","−0.01","Equal","Neither"]',1,'−0.01 closer to 0.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m5cc01d111d4f7129a433','ppg6m663ee54eb7d0f40abe81',NULL,'MULTIPLE_CHOICE','|−2.5|=','["−2.5","2.5","5","0"]',1,'2.5.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L6. Distance Between Signed Numbers (ppg6me41844ce28e865e2420f)
UPDATE "Lesson" SET "content" = '# Distance Between Signed Numbers

*Grade 6 Mathematics · Unit 5 of 11 · Negative Numbers · Lesson 6*

## Objective

**I can** find distance between signed numbers with |a−b|.

## Warm-up (2 minutes)

How far apart are −2 and 5?

## Teach

### Big idea

Distance = |a−b| ≥ 0.

### Example 1

|5−(−2)|=7.

### Try this

Distance −8 to −3?

**Check:** 5

### Example 2

|−4−6|=10.

### Common mistake (this lesson only)

Keeping a negative after subtraction without absolute value.

## Guided practice (we do)

1. −1 to 4  
   **Answer:** 5

2. −10 to −2  
   **Answer:** 8

3. 3 to −3  
   **Answer:** 6

## Independent practice

Complete each item. Show your work.

1. Find the distance between -5 and 6 on the number line. Then find the distance between 1 and -1.
2. Find the distance between -7 and 10 on the number line. Then find the distance between 1 and -1.
3. Find the distance between -10 and 10 on the number line. Then find the distance between 2 and -2.
4. Find the distance between -12 and 14 on the number line. Then find the distance between 2 and -2.
5. Find the distance between -8 and 14 on the number line. Then find the distance between 4 and -4.
6. Find the distance between -10 and 9 on the number line. Then find the distance between 4 and -4.

### Answer key (try first)

1. |6−(-5)| = 11. |1−(-1)| = 2.
2. |10−(-7)| = 17. |1−(-1)| = 2.
3. |10−(-10)| = 20. |2−(-2)| = 4.
4. |14−(-12)| = 26. |2−(-2)| = 4.
5. |14−(-8)| = 22. |4−(-4)| = 8.
6. |9−(-10)| = 19. |4−(-4)| = 8.

## Exit ticket

1. Distance −6 to 2.
2. Distance −9 to −4.

## Stretch (optional)

Number-line map of two cities.
', "objectives" = '• Find distance between signed numbers with |a−b|.
• Keep distance nonnegative.
• Distinguish distance from signed change.', "description" = 'Compute distances on the number line with absolute value.' WHERE "id" = 'ppg6me41844ce28e865e2420f' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mee31e6181dc0e7084fc3','ppg6me41844ce28e865e2420f',NULL,'MULTIPLE_CHOICE','|7−(−1)|=','["6","8","−8","0"]',1,'8.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m1938b726cab2f5fcd24e','ppg6me41844ce28e865e2420f',NULL,'MULTIPLE_CHOICE','Distance −5 to 0','["−5","5","0","10"]',1,'5.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m678a2aa478ed0260433a','ppg6me41844ce28e865e2420f',NULL,'MULTIPLE_CHOICE','|−2−(−8)|=','["−6","6","10","16"]',1,'6.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L7. Coordinate Thinking Preview (ppg6m0664ce63fdb0fa23b713)
UPDATE "Lesson" SET "content" = '# Coordinate Thinking Preview

*Grade 6 Mathematics · Unit 5 of 11 · Negative Numbers · Lesson 7*

## Objective

**I can** describe moves with signed horizontal/vertical changes.

## Warm-up (2 minutes)

From 0, move 4 right and 3 down — what signs?

## Teach

### Big idea

Right/up often +; left/down often − (preview of coordinates).

### Example 1

Start 0: +4 horizontal, −3 vertical.

### Try this

From −2 move +5 horizontally. Land?

**Check:** 3

### Example 2

Left 2 and up 1 from origin foreshadows (−2,1).

### Common mistake (this lesson only)

Mixing which direction is horizontal.

## Guided practice (we do)

1. Left 6 signed  
   **Answer:** −6

2. Up 4  
   **Answer:** +4

3. From 5 move −7  
   **Answer:** −2

## Independent practice

Complete each item. Show your work.

1. Starting at 0 on a horizontal line, move 4 units right, then 8 units left. Where do you end? Relate to signed numbers.
2. Starting at 0 on a horizontal line, move 6 units right, then 6 units left. Where do you end? Relate to signed numbers.
3. Starting at 0 on a horizontal line, move 8 units right, then 13 units left. Where do you end? Relate to signed numbers.
4. Starting at 0 on a horizontal line, move 10 units right, then 12 units left. Where do you end? Relate to signed numbers.
5. Starting at 0 on a horizontal line, move 12 units right, then 10 units left. Where do you end? Relate to signed numbers.
6. Starting at 0 on a horizontal line, move 14 units right, then 9 units left. Where do you end? Relate to signed numbers.

### Answer key (try first)

1. End at -4. Right = positive; left = negative.
2. End at 0. Right = positive; left = negative.
3. End at -5. Right = positive; left = negative.
4. End at -2. Right = positive; left = negative.
5. End at 2. Right = positive; left = negative.
6. End at 5. Right = positive; left = negative.

## Exit ticket

1. Start 0; −3 horiz, +2 vert.
2. From 4 move −4.

## Stretch (optional)

Arrows for (+3,−2).
', "objectives" = '• Describe moves with signed horizontal/vertical changes.
• Link left/down to negatives.
• Preview ordered-pair thinking.', "description" = 'Connect signed numbers to horizontal/vertical moves.' WHERE "id" = 'ppg6m0664ce63fdb0fa23b713' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m4281088872abd9ad3c48','ppg6m0664ce63fdb0fa23b713',NULL,'MULTIPLE_CHOICE','Down 5 as signed','["5","−5","0","±5"]',1,'−5.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m991a6ed40016200bb5d1','ppg6m0664ce63fdb0fa23b713',NULL,'MULTIPLE_CHOICE','Right 2 then left 5 net','["−3","3","7","−7"]',0,'−3.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mdf0e890937c3fcc4c28f','ppg6m0664ce63fdb0fa23b713',NULL,'MULTIPLE_CHOICE','From −1 + +6','["5","7","−7","6"]',0,'5.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L8. Comparing Rational Numbers (ppg6m0e99124e71fdafdfe51a)
UPDATE "Lesson" SET "content" = '# Comparing Rational Numbers

*Grade 6 Mathematics · Unit 5 of 11 · Negative Numbers · Lesson 8*

## Objective

**I can** compare signed fractions and decimals.

## Warm-up (2 minutes)

Greater: −2/5 or −0.5?

## Teach

### Big idea

Same form or number line; more right = greater.

### Example 1

−2/5=−0.4 > −0.5.

### Try this

Compare −1.25 and −5/4.

**Check:** Equal

### Example 2

−0.03 > −0.3.

### Common mistake (this lesson only)

Comparing absolute values only for two negatives.

## Guided practice (we do)

1. Greater: −3/8 or −0.4?  
   **Answer:** −3/8≈−0.375

2. Order −1,−0.2,−1.1  
   **Answer:** −1.1,−1,−0.2

3. −2/3 ? −0.6  
   **Answer:** −2/3 < −0.6

## Independent practice

Complete each item. Show your work.

1. Compare −5.4 and −5.15. Which is greater? Remember: with negatives, farther right is greater.
2. Compare −7.3 and −5.16. Which is greater? Remember: with negatives, farther right is greater.
3. Compare −9.2 and −6.17. Which is greater? Remember: with negatives, farther right is greater.
4. Compare −12.3 and −2.10. Which is greater? Remember: with negatives, farther right is greater.
5. Compare −14.2 and −3.11. Which is greater? Remember: with negatives, farther right is greater.
6. Compare −16.8 and −10.12. Which is greater? Remember: with negatives, farther right is greater.

### Answer key (try first)

1. Greater (closer to zero / farther right): −5.15.
2. Greater (closer to zero / farther right): −5.16.
3. Greater (closer to zero / farther right): −6.17.
4. Greater (closer to zero / farther right): −2.10.
5. Greater (closer to zero / farther right): −3.11.
6. Greater (closer to zero / farther right): −10.12.

## Exit ticket

1. Compare −7/10 and −0.75.
2. Order −0.5,−1/4,−0.8.

## Stretch (optional)

Explain −0.01 > −0.1.
', "objectives" = '• Compare signed fractions and decimals.
• Convert forms when helpful.
• Use “closer to zero” reasoning for negatives.', "description" = 'Compare mixed signed fractions and decimals.' WHERE "id" = 'ppg6m0e99124e71fdafdfe51a' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m5ac6b40ca1dfda160e14','ppg6m0e99124e71fdafdfe51a',NULL,'MULTIPLE_CHOICE','−1/2 vs −0.49','["−1/2 greater","−0.49 greater","Equal","Unknown"]',1,'−0.49 > −0.5.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mbfeca517799b7ad161c5','ppg6m0e99124e71fdafdfe51a',NULL,'MULTIPLE_CHOICE','Least: −0.2,−0.02,−2','["−0.2","−0.02","−2","0"]',2,'−2.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m44f1d6c1b9ee284ac84a','ppg6m0e99124e71fdafdfe51a',NULL,'MULTIPLE_CHOICE','−3/2 equals −1.5?','["Yes","No","Only positive","Never"]',0,'Yes.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L9. Negative Numbers in Stories (ppg6m4b8fbf459d7df425c13f)
UPDATE "Lesson" SET "content" = '# Negative Numbers in Stories

*Grade 6 Mathematics · Unit 5 of 11 · Negative Numbers · Lesson 9*

## Objective

**I can** write stories for signed numbers.

## Warm-up (2 minutes)

Invent a one-sentence story for −8 that is not about temperature.

## Teach

### Big idea

Translate words ↔ signed numbers; keep units and zero’s meaning.

### Example 1

“8 dollars in debt” → −8 if credit is positive.

### Try this

Story for +12 elevation change.

**Check:** Climbed 12 ft

### Example 2

From −3 to 4 is change +7.

### Common mistake (this lesson only)

Forcing negatives when zero is clearer.

## Guided practice (we do)

1. −15 in sports  
   **Answer:** e.g. −15 yard penalty

2. Interpret +6 bank  
   **Answer:** Deposit/gain 6

3. Change −2 to 5  
   **Answer:** +7

## Independent practice

Complete each item. Show your work.

1. Write a one-sentence story for -3 dollars in an account (debt/credit) and for a temperature of -8°F. Then write a question that requires comparing those signed values.
2. Write a one-sentence story for 2 dollars in an account (debt/credit) and for a temperature of -6°F. Then write a question that requires comparing those signed values.
3. Write a one-sentence story for -2 dollars in an account (debt/credit) and for a temperature of -5°F. Then write a question that requires comparing those signed values.
4. Write a one-sentence story for -5 dollars in an account (debt/credit) and for a temperature of -4°F. Then write a question that requires comparing those signed values.
5. Write a one-sentence story for -8 dollars in an account (debt/credit) and for a temperature of -2°F. Then write a question that requires comparing those signed values.
6. Write a one-sentence story for -4 dollars in an account (debt/credit) and for a temperature of -1°F. Then write a question that requires comparing those signed values.

### Answer key (try first)

1. Sample: “Account balance -3 means overdrawn/debt.” Temperature story for -8°F. Comparison question should ask which is colder/higher/etc.
2. Sample: “Account balance 2 means credit.” Temperature story for -6°F. Comparison question should ask which is colder/higher/etc.
3. Sample: “Account balance -2 means overdrawn/debt.” Temperature story for -5°F. Comparison question should ask which is colder/higher/etc.
4. Sample: “Account balance -5 means overdrawn/debt.” Temperature story for -4°F. Comparison question should ask which is colder/higher/etc.
5. Sample: “Account balance -8 means overdrawn/debt.” Temperature story for -2°F. Comparison question should ask which is colder/higher/etc.
6. Sample: “Account balance -4 means overdrawn/debt.” Temperature story for -1°F. Comparison question should ask which is colder/higher/etc.

## Exit ticket

1. Story for −4.
2. Rose 9° from −2.

## Stretch (optional)

Two different zeros for same numbers.
', "objectives" = '• Write stories for signed numbers.
• Translate words ↔ signs with clear zero.
• Report signed change.', "description" = 'Write and interpret signed-number story problems.' WHERE "id" = 'ppg6m4b8fbf459d7df425c13f' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m01a74bc571921734375f','ppg6m4b8fbf459d7df425c13f',NULL,'MULTIPLE_CHOICE','Debt $25 signed','["25","−25","0","1/25"]',1,'−25.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m14eb977f000c0438eed7','ppg6m4b8fbf459d7df425c13f',NULL,'MULTIPLE_CHOICE','Below sea 30 ft','["30","−30","0","300"]',1,'−30.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mf69b63cbb326393ca389','ppg6m4b8fbf459d7df425c13f',NULL,'MULTIPLE_CHOICE','Net −3 to 1','["−2","4","−4","3"]',1,'+4.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 5 L10. Negative Numbers Unit Review (ppg6m4e8c8e62f95b0b3e4b49)
UPDATE "Lesson" SET "content" = '# Negative Numbers Unit Review

*Grade 6 Mathematics · Unit 5 of 11 · Negative Numbers · Lesson 10*

## Objective

**I can** synthesize plotting, comparing, and absolute value.

## Warm-up (2 minutes)

Name three skills from this unit useful for later graphing.

## Teach

### Big idea

Plot, compare, distance, contexts, signed rationals.

### Example 1

Order −3.5,−1,0,2 and find |−3.5−2|.

### Try this

Distance −4 to 6; compare −1/2 and −0.4.

**Check:** 10; −0.4 > −0.5

### Example 2

Elevation −20 to −5 is rise 15.

### Common mistake (this lesson only)

Mixing distance with signed change.

## Guided practice (we do)

1. Order −8,−2,3  
   **Answer:** −8,−2,3

2. |−11|  
   **Answer:** 11

3. Greater −0.2 or −0.25  
   **Answer:** −0.2

## Independent practice

Complete each item. Show your work.

1. Review: Order -11, -1, 4; compute |-11| + |-1|.
2. Review: Order -6, 1, 4; compute |-6| + |1|.
3. Review: Order -10, 2, 13; compute |-10| + |2|.
4. Review: Order -13, 3, 13; compute |-13| + |3|.
5. Review: Order -8, 5, 13; compute |-8| + |5|.
6. Review: Order -12, 6, 13; compute |-12| + |6|.

### Answer key (try first)

1. Order -11, -1, 4. |-11|+|-1| = 12.
2. Order -6, 1, 4. |-6|+|1| = 7.
3. Order -10, 2, 13. |-10|+|2| = 12.
4. Order -13, 3, 13. |-13|+|3| = 16.
5. Order -8, 5, 13. |-8|+|5| = 13.
6. Order -12, 6, 13. |-12|+|6| = 18.

## Exit ticket

1. Plot −7 and 2; distance.
2. |−9| and opposite of 9.

## Stretch (optional)

Write a 5-item mini quiz.
', "objectives" = '• Synthesize plotting, comparing, and absolute value.
• Use signed rationals in context.
• Separate distance from signed change.', "description" = 'Synthesize plotting, comparing, and absolute value.' WHERE "id" = 'ppg6m4e8c8e62f95b0b3e4b49' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m2abf162e01e43b53c1a4','ppg6m4e8c8e62f95b0b3e4b49',NULL,'MULTIPLE_CHOICE','Least of −1,−6,0','["−1","−6","0","1"]',1,'−6.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m0715d4d5ca06a86843d4','ppg6m4e8c8e62f95b0b3e4b49',NULL,'MULTIPLE_CHOICE','|3−(−5)|=','["−2","8","2","15"]',1,'8.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m4b9eeb32794b0d3dafcd','ppg6m4e8c8e62f95b0b3e4b49',NULL,'MULTIPLE_CHOICE','−2/5 vs −0.5','["−2/5 greater","−0.5 greater","Equal","Unknown"]',0,'−0.4 > −0.5.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L1. What Is a Variable? (ppg6m3a33773b786ac1916dee)
UPDATE "Lesson" SET "content" = '# What Is a Variable?

*Grade 6 Mathematics · Unit 6 of 11 · Variables & Expressions · Lesson 1*

## Objective

**I can** explain what a variable is.

## Warm-up (2 minutes)

If n stands for the number of notebooks you own, what could n be tomorrow?

## Teach

### Big idea

A variable is a letter that stands for a number that can change.

### Example 1

If n=4, then n+3=7.

### Try this

If x=5, value of 2x?

**Check:** 10

### Example 2

Perimeter idea: if s is side of a square, perimeter is 4s.

### Common mistake (this lesson only)

Treating the letter as a word label only (never substituting a number).

## Guided practice (we do)

1. x=3; x+7?  
   **Answer:** 10

2. b=10; b−4?  
   **Answer:** 6

3. Why can n change?  
   **Answer:** It represents a quantity that may vary

## Independent practice

Complete each item. Show your work.

1. Let p = number of posters printed. Write an expression for “10 more than p” and for “-2 times p.” If p = 0, evaluate both.
2. Let p = number of posters printed. Write an expression for “5 more than p” and for “0 times p.” If p = 0, evaluate both.
3. Let p = number of posters printed. Write an expression for “5 more than p” and for “3 times p.” If p = 1, evaluate both.
4. Let p = number of posters printed. Write an expression for “9 more than p” and for “5 times p.” If p = 8, evaluate both.
5. Let p = number of posters printed. Write an expression for “9 more than p” and for “1 times p.” If p = 3, evaluate both.
6. Let p = number of posters printed. Write an expression for “13 more than p” and for “3 times p.” If p = 10, evaluate both.

### Answer key (try first)

1. p+10; -2p. Values: 10; 0.
2. p+5; 0p. Values: 5; 0.
3. p+5; 3p. Values: 6; 3.
4. p+9; 5p. Values: 17; 40.
5. p+9; 1p. Values: 12; 3.
6. p+13; 3p. Values: 23; 30.

## Exit ticket

1. If m=8, find m−2.
2. Invent a variable for your age in years.

## Stretch (optional)

Two stories for the same letter n.
', "objectives" = '• Explain what a variable is.
• Evaluate a simple expression for a given value.
• Distinguish variables from labels.', "description" = 'Use letters to stand for numbers that can change.' WHERE "id" = 'ppg6m3a33773b786ac1916dee' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m2405baf5414d931584ce','ppg6m3a33773b786ac1916dee',NULL,'MULTIPLE_CHOICE','If a=6, a+5=?','["11","65","1","30"]',0,'11.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mb5d7d2c251a228d6e316','ppg6m3a33773b786ac1916dee',NULL,'MULTIPLE_CHOICE','A variable is…','["Always 0","A letter for a number","A unit","An answer key"]',1,'Letter for a number.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m334f0f8ef719ac83f58b','ppg6m3a33773b786ac1916dee',NULL,'MULTIPLE_CHOICE','If t=2, 3t=?','["5","6","32","1"]',1,'6.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L2. Writing Algebraic Expressions (ppg6mc3ecef7d65b45f6a411b)
UPDATE "Lesson" SET "content" = '# Writing Algebraic Expressions

*Grade 6 Mathematics · Unit 6 of 11 · Variables & Expressions · Lesson 2*

## Objective

**I can** translate verbal phrases into expressions.

## Warm-up (2 minutes)

“5 more than a number n” — expression?

## Teach

### Big idea

Words like more than, times, less than → + × −; “a number” → a variable.

### Example 1

5 more than n → n+5. Twice n → 2n.

### Try this

Product of 4 and y.

**Check:** 4y

### Example 2

7 less than x → x−7 (not 7−x unless words say “7 minus x”).

### Common mistake (this lesson only)

Writing 7−x for “7 less than x.”

## Guided practice (we do)

1. Sum of k and 9  
   **Answer:** k+9

2. Triple w  
   **Answer:** 3w

3. n divided by 4  
   **Answer:** n/4

## Independent practice

Complete each item. Show your work.

1. Translate: “8 less than twice a number n” and “the quotient of a number y and 4, plus 10.”
2. Translate: “6 less than twice a number n” and “the quotient of a number y and 12, plus 11.”
3. Translate: “8 less than twice a number n” and “the quotient of a number y and 10, plus 12.”
4. Translate: “6 less than twice a number n” and “the quotient of a number y and 10, plus 14.”
5. Translate: “8 less than twice a number n” and “the quotient of a number y and 9, plus 15.”
6. Translate: “15 less than twice a number n” and “the quotient of a number y and 9, plus 10.”

### Answer key (try first)

1. 2n − 8; y/4 + 10.
2. 2n − 6; y/12 + 11.
3. 2n − 8; y/10 + 12.
4. 2n − 6; y/10 + 14.
5. 2n − 8; y/9 + 15.
6. 2n − 15; y/9 + 10.

## Exit ticket

1. 6 less than p.
2. 3 more than twice m.

## Stretch (optional)

Phrase that needs parentheses.
', "objectives" = '• Translate verbal phrases into expressions.
• Use parentheses when order matters.
• Avoid turning phrases into equations unless “equals” appears.', "description" = 'Translate verbal phrases into expressions.' WHERE "id" = 'ppg6mc3ecef7d65b45f6a411b' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m04b406660cceb5fb9888','ppg6mc3ecef7d65b45f6a411b',NULL,'MULTIPLE_CHOICE','5 more than n','["5n","n+5","5−n","n/5"]',1,'n+5.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m5a97e2b8e7397665ecd3','ppg6mc3ecef7d65b45f6a411b',NULL,'MULTIPLE_CHOICE','Twice a number x','["2+x","2x","x^2","x/2"]',1,'2x.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mcb8bf95ec19633b3ac44','ppg6mc3ecef7d65b45f6a411b',NULL,'MULTIPLE_CHOICE','7 less than x','["7−x","x−7","7x","x/7"]',1,'x−7.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L3. Evaluating Expressions (ppg6m1a9c8954b78e53243b3b)
UPDATE "Lesson" SET "content" = '# Evaluating Expressions

*Grade 6 Mathematics · Unit 6 of 11 · Variables & Expressions · Lesson 3*

## Objective

**I can** substitute a value for each variable.

## Warm-up (2 minutes)

Evaluate 3a+2 for a=4.

## Teach

### Big idea

Replace the letter with the number, then simplify.

### Example 1

3(4)+2=12+2=14.

### Try this

2x−5 for x=6.

**Check:** 7

### Example 2

For x=3, x^2+1=10.

### Common mistake (this lesson only)

Substituting then ignoring order (3+4×2 style errors).

## Guided practice (we do)

1. 5b for b=3  
   **Answer:** 15

2. 10−c for c=4  
   **Answer:** 6

3. 2(n+1) for n=5  
   **Answer:** 12

## Independent practice

Complete each item. Show your work.

1. Evaluate 3x + 8 when x = 3, and 3(y − 2) when y = 46. Show substitution.
2. Evaluate 3x + 6 when x = 3, and 3(y − 4) when y = 23. Show substitution.
3. Evaluate 3x + 8 when x = 2, and 2(y − 5) when y = 44. Show substitution.
4. Evaluate 3x + 14 when x = 7, and 7(y − 5) when y = 29. Show substitution.
5. Evaluate 3x + 7 when x = 6, and 6(y − 5) when y = 10. Show substitution.
6. Evaluate 3x + 14 when x = 6, and 6(y − 7) when y = 27. Show substitution.

### Answer key (try first)

1. 3(3)+8 = 17. 3(46−2) = 132.
2. 3(3)+6 = 15. 3(23−4) = 57.
3. 3(2)+8 = 14. 2(44−5) = 78.
4. 3(7)+14 = 35. 7(29−5) = 168.
5. 3(6)+7 = 25. 6(10−5) = 30.
6. 3(6)+14 = 32. 6(27−7) = 120.

## Exit ticket

1. Evaluate 4m−1 for m=3.
2. Evaluate 2(k+3) for k=2.

## Stretch (optional)

Why substitute before simplifying remaining ops?
', "objectives" = '• Substitute a value for each variable.
• Simplify with order of operations.
• Use parentheses when substituting negatives later.', "description" = 'Substitute values and simplify carefully.' WHERE "id" = 'ppg6m1a9c8954b78e53243b3b' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m337d86c51b361be8cc7e','ppg6m1a9c8954b78e53243b3b',NULL,'MULTIPLE_CHOICE','3a+2 for a=4','["14","9","20","12"]',0,'14.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6md726135382746c56aaef','ppg6m1a9c8954b78e53243b3b',NULL,'MULTIPLE_CHOICE','2x−5 for x=6','["7","17","−3","12"]',0,'7.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m76bf45a158520d2d41df','ppg6m1a9c8954b78e53243b3b',NULL,'MULTIPLE_CHOICE','x^2 for x=3','["6","9","5","1"]',1,'9.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L4. Terms, Coefficients, and Constants (ppg6m77489dca9fb98eef92a9)
UPDATE "Lesson" SET "content" = '# Terms, Coefficients, and Constants

*Grade 6 Mathematics · Unit 6 of 11 · Variables & Expressions · Lesson 4*

## Objective

**I can** identify terms, coefficients, and constants.

## Warm-up (2 minutes)

In 3x+7, what is the coefficient of x? What is the constant?

## Teach

### Big idea

Terms are addends. Coefficient multiplies the variable. Constant has no variable.

### Example 1

In 3x+7: terms 3x and 7; coefficient of x is 3; constant 7.

### Try this

In 5y−2, coefficient of y? Constant?

**Check:** 5; −2

### Example 2

Expression 2a+0.5b+4 has three terms.

### Common mistake (this lesson only)

Calling 3x+7 a single term.

## Guided practice (we do)

1. Terms in 4x+1  
   **Answer:** 2

2. Coefficient in −6n  
   **Answer:** −6

3. Constant in 2x  
   **Answer:** 0 (none written)

## Independent practice

Complete each item. Show your work.

1. In 5x + 3 − 2y, name the terms, the coefficients of x and y, and the constant term.
2. In 5x + 10 − 2y, name the terms, the coefficients of x and y, and the constant term.
3. In 5x + 12 − 2y, name the terms, the coefficients of x and y, and the constant term.
4. In 5x + 10 − 2y, name the terms, the coefficients of x and y, and the constant term.
5. In 5x + 12 − 2y, name the terms, the coefficients of x and y, and the constant term.
6. In 5x + 10 − 2y, name the terms, the coefficients of x and y, and the constant term.

### Answer key (try first)

1. Terms: 5x, 3, −2y. Coeff of x: 5; of y: −2; constant: 3.
2. Terms: 5x, 10, −2y. Coeff of x: 5; of y: −2; constant: 10.
3. Terms: 5x, 12, −2y. Coeff of x: 5; of y: −2; constant: 12.
4. Terms: 5x, 10, −2y. Coeff of x: 5; of y: −2; constant: 10.
5. Terms: 5x, 12, −2y. Coeff of x: 5; of y: −2; constant: 12.
6. Terms: 5x, 10, −2y. Coeff of x: 5; of y: −2; constant: 10.

## Exit ticket

1. Parts of 7x−3.
2. How many terms in a+b+5?

## Stretch (optional)

Why −3 is a constant in 2x−3.
', "objectives" = '• Identify terms, coefficients, and constants.
• Count terms in an expression.
• Name the coefficient of a variable term.', "description" = 'Name parts of an expression precisely.' WHERE "id" = 'ppg6m77489dca9fb98eef92a9' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6md00f80b14ab7776d8971','ppg6m77489dca9fb98eef92a9',NULL,'MULTIPLE_CHOICE','Coefficient of x in 3x+7','["3","7","3x","10"]',0,'3.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mcfb885b47a7c94b9df50','ppg6m77489dca9fb98eef92a9',NULL,'MULTIPLE_CHOICE','Constant in 5y−2','["5","−2","y","0"]',1,'−2.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m2657b964c155cea36a2c','ppg6m77489dca9fb98eef92a9',NULL,'MULTIPLE_CHOICE','Terms in 2a+b+4','["1","2","3","4"]',2,'3.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L5. Like Terms (ppg6ma53f5c90c81993b98b00)
UPDATE "Lesson" SET "content" = '# Like Terms

*Grade 6 Mathematics · Unit 6 of 11 · Variables & Expressions · Lesson 5*

## Objective

**I can** identify like terms.

## Warm-up (2 minutes)

Can you add 3x and 5x? What about 3x and 5?

## Teach

### Big idea

Like terms have the same variable factors. Combine by adding coefficients.

### Example 1

3x+5x=8x. 3x+5 stays 3x+5.

### Try this

Simplify 4a+2+a.

**Check:** 5a+2

### Example 2

2x+3y+5x=7x+3y.

### Common mistake (this lesson only)

Adding 3x+5 to get 8x.

## Guided practice (we do)

1. 7n−2n  
   **Answer:** 5n

2. x+x+x  
   **Answer:** 3x

3. 2b+3+4b  
   **Answer:** 6b+3

## Independent practice

Complete each item. Show your work.

1. In 5x + 4 − 2y, name the terms, the coefficients of x and y, and the constant term.
2. In 5x + 8 − 2y, name the terms, the coefficients of x and y, and the constant term.
3. In 5x + 8 − 2y, name the terms, the coefficients of x and y, and the constant term.
4. In 5x + 13 − 2y, name the terms, the coefficients of x and y, and the constant term.
5. In 5x + 13 − 2y, name the terms, the coefficients of x and y, and the constant term.
6. In 5x + 8 − 2y, name the terms, the coefficients of x and y, and the constant term.

### Answer key (try first)

1. Terms: 5x, 4, −2y. Coeff of x: 5; of y: −2; constant: 4.
2. Terms: 5x, 8, −2y. Coeff of x: 5; of y: −2; constant: 8.
3. Terms: 5x, 8, −2y. Coeff of x: 5; of y: −2; constant: 8.
4. Terms: 5x, 13, −2y. Coeff of x: 5; of y: −2; constant: 13.
5. Terms: 5x, 13, −2y. Coeff of x: 5; of y: −2; constant: 13.
6. Terms: 5x, 8, −2y. Coeff of x: 5; of y: −2; constant: 8.

## Exit ticket

1. Simplify 6y+y−4.
2. Why can’t 2x and 2 combine?

## Stretch (optional)

Area expression with like terms.
', "objectives" = '• Identify like terms.
• Combine like terms by adding coefficients.
• Leave unlike terms separate.', "description" = 'Identify and combine like terms.' WHERE "id" = 'ppg6ma53f5c90c81993b98b00' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mbdf433b48d79990034b7','ppg6ma53f5c90c81993b98b00',NULL,'MULTIPLE_CHOICE','3x+5x=','["8x","15x","8","35x"]',0,'8x.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m001631b05351a6a640d0','ppg6ma53f5c90c81993b98b00',NULL,'MULTIPLE_CHOICE','4a+2+a=','["5a+2","7a","4a+2a","6a"]',0,'5a+2.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mbe4d92e082e2f73a0510','ppg6ma53f5c90c81993b98b00',NULL,'MULTIPLE_CHOICE','2x+3y+5x=','["10xy","7x+3y","10x+3y","2x+8y"]',1,'7x+3y.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L6. The Distributive Property (ppg6mdf30eab94c13fdfafd13)
UPDATE "Lesson" SET "content" = '# The Distributive Property

*Grade 6 Mathematics · Unit 6 of 11 · Variables & Expressions · Lesson 6*

## Objective

**I can** expand a(b+c).

## Warm-up (2 minutes)

What does 3(x+2) mean as area of a rectangle?

## Teach

### Big idea

a(b+c)=ab+ac. Distribute to every term inside.

### Example 1

3(x+2)=3x+6.

### Try this

2(5+y)?

**Check:** 10+2y

### Example 2

Factor 4x+12=4(x+3).

### Common mistake (this lesson only)

Writing 3(x+2)=3x+2.

## Guided practice (we do)

1. 5(n−1)  
   **Answer:** 5n−5

2. −2(x+4) intro if ready  
   **Answer:** −2x−8 or note signs

3. 3(2+a)  
   **Answer:** 6+3a

## Independent practice

Complete each item. Show your work.

1. Expand 11(x + -1) and -1(2y − 11). Then write an equivalent factored form for 6x + 15.
2. Expand 6(x + 1) and 6(2y − 6). Then write an equivalent factored form for 6x + 15.
3. Expand 6(x + 4) and 7(2y − 6). Then write an equivalent factored form for 6x + 15.
4. Expand 11(x + 1) and 3(2y − 11). Then write an equivalent factored form for 6x + 15.
5. Expand 11(x + 4) and 4(2y − 11). Then write an equivalent factored form for 6x + 15.
6. Expand 15(x + 6) and 4(2y − 15). Then write an equivalent factored form for 6x + 15.

### Answer key (try first)

1. 11x + -11; -2y − -11. 6x+15 = 3(2x+5).
2. 6x + 6; 12y − 36. 6x+15 = 3(2x+5).
3. 6x + 24; 14y − 42. 6x+15 = 3(2x+5).
4. 11x + 11; 6y − 33. 6x+15 = 3(2x+5).
5. 11x + 44; 8y − 44. 6x+15 = 3(2x+5).
6. 15x + 90; 8y − 60. 6x+15 = 3(2x+5).

## Exit ticket

1. Expand 4(y+3).
2. Factor 6x+18.

## Stretch (optional)

Draw a rectangle for 2(x+5).
', "objectives" = '• Expand a(b+c).
• Factor a common factor when easy.
• Avoid distributing only to one term.', "description" = 'Expand a(b+c) and recognize factored forms.' WHERE "id" = 'ppg6mdf30eab94c13fdfafd13' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m4fc0d37bf537dc8fba9c','ppg6mdf30eab94c13fdfafd13',NULL,'MULTIPLE_CHOICE','3(x+2)=','["3x+2","3x+6","x+6","5x"]',1,'3x+6.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m600e11ceee3b80764c22','ppg6mdf30eab94c13fdfafd13',NULL,'MULTIPLE_CHOICE','2(5+y)=','["10+2y","7+y","10+y","2+5y"]',0,'10+2y.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m9a5e5f7250db48f28740','ppg6mdf30eab94c13fdfafd13',NULL,'MULTIPLE_CHOICE','4x+12 factored','["4(x+3)","4(x+12)","x+3","4x+3"]',0,'4(x+3).',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L7. Equivalent Expressions (ppg6m0318d11f0e852d83be91)
UPDATE "Lesson" SET "content" = '# Equivalent Expressions

*Grade 6 Mathematics · Unit 6 of 11 · Variables & Expressions · Lesson 7*

## Objective

**I can** decide if two expressions are equivalent.

## Warm-up (2 minutes)

Are 2(x+3) and 2x+6 the same for every x?

## Teach

### Big idea

Equivalent expressions give the same value for every allowed input.

### Example 1

2(x+3)=2x+6 for all x — expand to match.

### Try this

Are x+x and 2x equivalent?

**Check:** Yes

### Example 2

3x+3 vs 3(x+1) — equivalent.

### Common mistake (this lesson only)

Checking only one value and declaring always equivalent (can miss).

## Guided practice (we do)

1. x+5 and 5+x  
   **Answer:** Yes

2. 2x and x^2  
   **Answer:** No

3. 3(x+2) and 3x+6  
   **Answer:** Yes

## Independent practice

Complete each item. Show your work.

1. Are 2(x + 10) and 2x + 20 equivalent? Test with x = 2. Are 2x + 10 and 2(x + 10) equivalent?
2. Are 2(x + 8) and 2x + 16 equivalent? Test with x = 2. Are 2x + 8 and 2(x + 8) equivalent?
3. Are 2(x + 10) and 2x + 20 equivalent? Test with x = 0. Are 2x + 10 and 2(x + 10) equivalent?
4. Are 2(x + 8) and 2x + 16 equivalent? Test with x = 0. Are 2x + 8 and 2(x + 8) equivalent?
5. Are 2(x + 10) and 2x + 20 equivalent? Test with x = 7. Are 2x + 10 and 2(x + 10) equivalent?
6. Are 2(x + 8) and 2x + 16 equivalent? Test with x = 7. Are 2x + 8 and 2(x + 8) equivalent?

### Answer key (try first)

1. First pair: yes (distributive). Second: no — 2(x+10)=2x+20.
2. First pair: yes (distributive). Second: no — 2(x+8)=2x+16.
3. First pair: yes (distributive). Second: no — 2(x+10)=2x+20.
4. First pair: yes (distributive). Second: no — 2(x+8)=2x+16.
5. First pair: yes (distributive). Second: no — 2(x+10)=2x+20.
6. First pair: yes (distributive). Second: no — 2(x+8)=2x+16.

## Exit ticket

1. Show 4x+2 ≡ 2(2x+1).
2. Test x=0 and x=2 on a candidate pair.

## Stretch (optional)

Find a non-equivalent pair that matches at one value.
', "objectives" = '• Decide if two expressions are equivalent.
• Test with substitution and by simplifying.
• Use distributive property to prove.', "description" = 'Decide when two expressions are equivalent.' WHERE "id" = 'ppg6m0318d11f0e852d83be91' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mdb078b0dfd9f0acd5e6a','ppg6m0318d11f0e852d83be91',NULL,'MULTIPLE_CHOICE','2(x+3) equals 2x+6?','["Always","Never","Only x=0","Only x=3"]',0,'Always.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mb3c3ac9073967d86014b','ppg6m0318d11f0e852d83be91',NULL,'MULTIPLE_CHOICE','x+x and 2x','["Equivalent","Never","Only positives","Only x=1"]',0,'Equivalent.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mb8e810ca71328cfc8e6e','ppg6m0318d11f0e852d83be91',NULL,'MULTIPLE_CHOICE','2x and x^2','["Equivalent","Not equivalent","Only x=2","Always"]',1,'Not equivalent.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L8. Expressions from Diagrams (ppg6m718a5e2ed37022ec76c3)
UPDATE "Lesson" SET "content" = '# Expressions from Diagrams

*Grade 6 Mathematics · Unit 6 of 11 · Variables & Expressions · Lesson 8*

## Objective

**I can** write expressions from diagrams.

## Warm-up (2 minutes)

A rectangle has length L and width 3. Perimeter expression?

## Teach

### Big idea

Translate a figure into an expression; combine like terms.

### Example 1

Perimeter 2L+2·3=2L+6.

### Try this

3 bags cost d each — total?

**Check:** 3d

### Example 2

Pattern: 1,3,5,... step → 2n−1 for nth term (intro).

### Common mistake (this lesson only)

Adding all sides but forgetting a side.

## Guided practice (we do)

1. Square side s perimeter  
   **Answer:** 4s

2. Cost: 5 items at p  
   **Answer:** 5p

3. L+L+W+W  
   **Answer:** 2L+2W

## Independent practice

Complete each item. Show your work.

1. A rectangle has length x+6 and width 7. Write expressions for perimeter and area.
2. A rectangle has length x+8 and width 6. Write expressions for perimeter and area.
3. A rectangle has length x+10 and width 13. Write expressions for perimeter and area.
4. A rectangle has length x+13 and width 14. Write expressions for perimeter and area.
5. A rectangle has length x+15 and width 13. Write expressions for perimeter and area.
6. A rectangle has length x+8 and width 11. Write expressions for perimeter and area.

### Answer key (try first)

1. P = 2(x+6+7) = 2x + 26; A = 7(x+6) = 7x + 42.
2. P = 2(x+8+6) = 2x + 28; A = 6(x+8) = 6x + 48.
3. P = 2(x+10+13) = 2x + 46; A = 13(x+10) = 13x + 130.
4. P = 2(x+13+14) = 2x + 54; A = 14(x+13) = 14x + 182.
5. P = 2(x+15+13) = 2x + 56; A = 13(x+15) = 13x + 195.
6. P = 2(x+8+11) = 2x + 38; A = 11(x+8) = 11x + 88.

## Exit ticket

1. Perimeter for length x width 4.
2. 2 shirts at c dollars.

## Stretch (optional)

Figure needing parentheses.
', "objectives" = '• Write expressions from diagrams.
• Use variables for unknown lengths/prices.
• Simplify when like terms appear.', "description" = 'Write expressions for perimeter, cost, and patterned figures.' WHERE "id" = 'ppg6m718a5e2ed37022ec76c3' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mc001b229fdb456ead381','ppg6m718a5e2ed37022ec76c3',NULL,'MULTIPLE_CHOICE','Square side s perimeter','["2s","4s","s^2","s+4"]',1,'4s.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ma365346944c66516c7c5','ppg6m718a5e2ed37022ec76c3',NULL,'MULTIPLE_CHOICE','5 items at price p','["5+p","5p","p/5","p^5"]',1,'5p.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m0026105b7b24d581d1fe','ppg6m718a5e2ed37022ec76c3',NULL,'MULTIPLE_CHOICE','2L+2W equals','["2(L+W)","L+W","2L+W","L^2+W^2"]',0,'2(L+W).',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L9. From Tables to Expressions (ppg6ma78f87ad965e2dc60064)
UPDATE "Lesson" SET "content" = '# From Tables to Expressions

*Grade 6 Mathematics · Unit 6 of 11 · Variables & Expressions · Lesson 9*

## Objective

**I can** notice patterns in input–output tables.

## Warm-up (2 minutes)

Table: x=1→3, 2→5, 3→7. What expression fits?

## Teach

### Big idea

Look for constant rate of change; write y in terms of x.

### Example 1

Outputs increase by 2; y=2x+1 fits.

### Try this

x:1,2,3 → y:4,7,10. Expression?

**Check:** 3x+1

### Example 2

Check all rows before trusting.

### Common mistake (this lesson only)

Fitting only the first row.

## Guided practice (we do)

1. x→2x  
   **Answer:** Double

2. x:1.. → 5,10,15  
   **Answer:** 5x

3. Verify 2x+1 at x=4  
   **Answer:** 9

## Independent practice

Complete each item. Show your work.

1. A table shows input n: 1,2,3 and output: 9, 12, 15. Write an expression for the output in terms of n.
2. A table shows input n: 1,2,3 and output: 9, 10, 11. Write an expression for the output in terms of n.
3. A table shows input n: 1,2,3 and output: 10, 10, 10. Write an expression for the output in terms of n.
4. A table shows input n: 1,2,3 and output: 19, 26, 33. Write an expression for the output in terms of n.
5. A table shows input n: 1,2,3 and output: 19, 24, 29. Write an expression for the output in terms of n.
6. A table shows input n: 1,2,3 and output: 20, 24, 28. Write an expression for the output in terms of n.

### Answer key (try first)

1. Output = 3n + 6 (check each row).
2. Output = 1n + 8 (check each row).
3. Output = 0n + 10 (check each row).
4. Output = 7n + 12 (check each row).
5. Output = 5n + 14 (check each row).
6. Output = 4n + 16 (check each row).

## Exit ticket

1. Table 1→6,2→7,3→8 — expression?
2. Check your rule at x=5.

## Stretch (optional)

Nonlinear warning: 1,4,9 is x^2.
', "objectives" = '• Notice patterns in input–output tables.
• Write an expression for the nth or input x.
• Check the expression on every row.', "description" = 'Notice patterns in tables and write a matching expression.' WHERE "id" = 'ppg6ma78f87ad965e2dc60064' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m387ebf359f0127bc9ff9','ppg6ma78f87ad965e2dc60064',NULL,'MULTIPLE_CHOICE','1→3,2→5,3→7 rule','["2x+1","x+2","3x","2x"]',0,'2x+1.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m0461365011b8710054bd','ppg6ma78f87ad965e2dc60064',NULL,'MULTIPLE_CHOICE','1→4,2→7,3→10','["3x+1","4x","x+3","2x+2"]',0,'3x+1.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m96b060b8f033ad322b2a','ppg6ma78f87ad965e2dc60064',NULL,'MULTIPLE_CHOICE','Best check?','["One row only","All given rows","Guess","Average"]',1,'All rows.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 6 L10. Variables & Expressions Unit Review (ppg6ma6da85d9265c42b39f2d)
UPDATE "Lesson" SET "content" = '# Variables & Expressions Unit Review

*Grade 6 Mathematics · Unit 6 of 11 · Variables & Expressions · Lesson 10*

## Objective

**I can** write, evaluate, and simplify expressions.

## Warm-up (2 minutes)

Name the steps to evaluate 2(x+3) for x=5.

## Teach

### Big idea

Translate → substitute → simplify; combine like terms; distribute.

### Example 1

2(5+3)=16; 3x+2x+4=5x+4.

### Try this

Expand 4(n−2); then n=3.

**Check:** 4n−8; value 4.

### Example 2

Are 2x+6 and 2(x+3) equivalent? Yes.

### Common mistake (this lesson only)

Skipping distribution on the second term.

## Guided practice (we do)

1. Simplify 7a−a+3  
   **Answer:** 6a+3

2. Evaluate 2x+1 for x=4  
   **Answer:** 9

3. Expand 3(y+5)  
   **Answer:** 3y+15

## Independent practice

Complete each item. Show your work.

1. Review: Simplify 3(x + 6) + 2x and evaluate at x = 4.
2. Review: Simplify 3(x + 6) + 2x and evaluate at x = 7.
3. Review: Simplify 3(x + 6) + 2x and evaluate at x = 11.
4. Review: Simplify 3(x + 6) + 2x and evaluate at x = 14.
5. Review: Simplify 3(x + 15) + 2x and evaluate at x = 9.
6. Review: Simplify 3(x + 15) + 2x and evaluate at x = 13.

### Answer key (try first)

1. 3x + 18 + 2x = 5x + 18; at x=4: 38.
2. 3x + 18 + 2x = 5x + 18; at x=7: 53.
3. 3x + 18 + 2x = 5x + 18; at x=11: 73.
4. 3x + 18 + 2x = 5x + 18; at x=14: 88.
5. 3x + 45 + 2x = 5x + 45; at x=9: 90.
6. 3x + 45 + 2x = 5x + 45; at x=13: 110.

## Exit ticket

1. Simplify 2(x+4)+x.
2. Expression: 5 less than twice n.

## Stretch (optional)

Table + expression challenge.
', "objectives" = '• Write, evaluate, and simplify expressions.
• Combine like terms and distribute.
• Decide equivalence.', "description" = 'Mixed practice on writing, evaluating, and simplifying.' WHERE "id" = 'ppg6ma6da85d9265c42b39f2d' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ma349755cb242fa2d9a2a','ppg6ma6da85d9265c42b39f2d',NULL,'MULTIPLE_CHOICE','2(x+3) for x=5','["13","16","10","11"]',1,'16.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mcc59d6f98e6743fa006d','ppg6ma6da85d9265c42b39f2d',NULL,'MULTIPLE_CHOICE','3x+2x+4','["5x+4","6x","5x","9x"]',0,'5x+4.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m8d83fb3240de38aee000','ppg6ma6da85d9265c42b39f2d',NULL,'MULTIPLE_CHOICE','4(n−2)=','["4n−2","4n−8","n−8","4n+8"]',1,'4n−8.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L1. Equations vs Expressions (ppg6m0c0b35d7e22bbf77d238)
UPDATE "Lesson" SET "content" = '# Equations vs Expressions

*Grade 6 Mathematics · Unit 7 of 11 · Equations & Inequalities · Lesson 1*

## Objective

**I can** distinguish equations from expressions.

## Warm-up (2 minutes)

Is 3x+2 an equation? Is 3x+2=11?

## Teach

### Big idea

Expression: no equals. Equation: states two quantities are equal.

### Example 1

3x+2 is an expression. 3x+2=11 is an equation.

### Try this

Classify 5+4 and 5+4=9.

**Check:** Expression; equation

### Example 2

x=7 is an equation saying x equals 7.

### Common mistake (this lesson only)

Calling every expression an equation.

## Guided practice (we do)

1. 2n+1 type?  
   **Answer:** Expression

2. 2n+1=9 type?  
   **Answer:** Equation

3. Can an equation be false?  
   **Answer:** Yes, e.g. 2=5

## Independent practice

Complete each item. Show your work.

1. Classify each as expression or equation: (1) 3x+9  (2) 3x+9=-2  (3) x/9. Explain the difference in one sentence.
2. Classify each as expression or equation: (1) 3x+7  (2) 3x+7=6  (3) x/7. Explain the difference in one sentence.
3. Classify each as expression or equation: (1) 3x+9  (2) 3x+9=4  (3) x/9. Explain the difference in one sentence.
4. Classify each as expression or equation: (1) 3x+7  (2) 3x+7=4  (3) x/7. Explain the difference in one sentence.
5. Classify each as expression or equation: (1) 3x+9  (2) 3x+9=3  (3) x/9. Explain the difference in one sentence.
6. Classify each as expression or equation: (1) 3x+16  (2) 3x+16=3  (3) x/16. Explain the difference in one sentence.

### Answer key (try first)

1. (1) expression (2) equation (3) expression. Equations assert equality/balance; expressions name a value.
2. (1) expression (2) equation (3) expression. Equations assert equality/balance; expressions name a value.
3. (1) expression (2) equation (3) expression. Equations assert equality/balance; expressions name a value.
4. (1) expression (2) equation (3) expression. Equations assert equality/balance; expressions name a value.
5. (1) expression (2) equation (3) expression. Equations assert equality/balance; expressions name a value.
6. (1) expression (2) equation (3) expression. Equations assert equality/balance; expressions name a value.

## Exit ticket

1. Label three examples.
2. Why does = matter?

## Stretch (optional)

True and false equations with numbers only.
', "objectives" = '• Distinguish equations from expressions.
• Explain that equations can be true or false.
• Identify the equals sign as balance.', "description" = 'Distinguish equations (balance) from expressions.' WHERE "id" = 'ppg6m0c0b35d7e22bbf77d238' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m6beb2083e257c16d04ed','ppg6m0c0b35d7e22bbf77d238',NULL,'MULTIPLE_CHOICE','3x+2 is a…','["Equation","Expression","Inequality","Solution"]',1,'Expression.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mfb9f7c1ba34c0b5fe8c3','ppg6m0c0b35d7e22bbf77d238',NULL,'MULTIPLE_CHOICE','3x+2=11 is a…','["Expression","Equation","Term","Factor"]',1,'Equation.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mc08a91af739514778eab','ppg6m0c0b35d7e22bbf77d238',NULL,'MULTIPLE_CHOICE','Equals sign means…','["Guess","Balance/equality","Multiply","Variable"]',1,'Balance.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L2. One-Step Addition and Subtraction Equations (ppg6m7b6f039067e575845ca3)
UPDATE "Lesson" SET "content" = '# One-Step Addition and Subtraction Equations

*Grade 6 Mathematics · Unit 7 of 11 · Equations & Inequalities · Lesson 2*

## Objective

**I can** solve one-step +/− equations.

## Warm-up (2 minutes)

If x+5=12, what do you do to both sides?

## Teach

### Big idea

Undo addition with subtraction (and vice versa) on both sides.

### Example 1

x+5=12 → x=12−5=7. Check: 7+5=12.

### Try this

x−4=10.

**Check:** x=14

### Example 2

8=y+3 → y=5.

### Common mistake (this lesson only)

Subtracting from only one side.

## Guided practice (we do)

1. n+7=15  
   **Answer:** 8

2. m−9=2  
   **Answer:** 11

3. Check x=6 in x+1=7  
   **Answer:** True

## Independent practice

Complete each item. Show your work.

1. Solve x + 6 = 14 and y − 8 = 6. Check each solution.
2. Solve x + 13 = 21 and y − 8 = 13. Check each solution.
3. Solve x + 6 = 13 and y − 7 = 6. Check each solution.
4. Solve x + 12 = 24 and y − 12 = 12. Check each solution.
5. Solve x + 14 = 25 and y − 11 = 14. Check each solution.
6. Solve x + 12 = 23 and y − 11 = 12. Check each solution.

### Answer key (try first)

1. x = 8; check 8+6=14. y = 14; check 14−8=6.
2. x = 8; check 8+13=21. y = 21; check 21−8=13.
3. x = 7; check 7+6=13. y = 13; check 13−7=6.
4. x = 12; check 12+12=24. y = 24; check 24−12=12.
5. x = 11; check 11+14=25. y = 25; check 25−11=14.
6. x = 11; check 11+12=23. y = 23; check 23−11=12.

## Exit ticket

1. Solve x+9=20.
2. Solve y−6=11.

## Stretch (optional)

Story → equation → solve.
', "objectives" = '• Solve one-step +/− equations.
• Check by substituting.
• Explain inverse operations.', "description" = 'Solve with inverse operations; check solutions.' WHERE "id" = 'ppg6m7b6f039067e575845ca3' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mce4a7acf7637d4c61c5f','ppg6m7b6f039067e575845ca3',NULL,'MULTIPLE_CHOICE','x+5=12 → x=','["7","17","5","12"]',0,'7.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m37e8f5da22ff3fd2baf9','ppg6m7b6f039067e575845ca3',NULL,'MULTIPLE_CHOICE','x−4=10 → x=','["6","14","40","−6"]',1,'14.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m5afbc100514a0c1f4f1c','ppg6m7b6f039067e575845ca3',NULL,'MULTIPLE_CHOICE','Check for x=7 in x+5=12?','["7+5=12","7=12","5=12","12−7=5 only"]',0,'Substitute.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L3. One-Step Multiplication and Division Equations (ppg6m5525e0fd62c6fb37a2f6)
UPDATE "Lesson" SET "content" = '# One-Step Multiplication and Division Equations

*Grade 6 Mathematics · Unit 7 of 11 · Equations & Inequalities · Lesson 3*

## Objective

**I can** solve one-step ×/÷ equations.

## Warm-up (2 minutes)

If 3x=18, how do you find x?

## Teach

### Big idea

Undo × with ÷ and ÷ with × on both sides.

### Example 1

3x=18 → x=6. Check 3·6=18.

### Try this

x/4=5.

**Check:** x=20

### Example 2

2x=−10 → x=−5 (preview ok if negatives known).

### Common mistake (this lesson only)

Dividing only the coefficient and forgetting the variable side.

## Guided practice (we do)

1. 5x=35  
   **Answer:** 7

2. n/3=9  
   **Answer:** 27

3. Check 4x=20 for x=5  
   **Answer:** True

## Independent practice

Complete each item. Show your work.

1. Solve 5x = 20 and x/4 = 5. Show inverse operations.
2. Solve 5x = 0 and x/0 = 5. Show inverse operations.
3. Solve 14x = 42 and x/3 = 14. Show inverse operations.
4. Solve 13x = 52 and x/4 = 13. Show inverse operations.
5. Solve 13x = 91 and x/7 = 13. Show inverse operations.
6. Solve 13x = 130 and x/10 = 13. Show inverse operations.

### Answer key (try first)

1. x = 4; x = 20.
2. x = 0; x = 0.
3. x = 3; x = 42.
4. x = 4; x = 52.
5. x = 7; x = 91.
6. x = 10; x = 130.

## Exit ticket

1. Solve 6x=42.
2. Solve y/5=8.

## Stretch (optional)

Word problem for 2x=16.
', "objectives" = '• Solve one-step ×/÷ equations.
• Check solutions.
• Keep coefficients clear.', "description" = 'Solve ax=b and x/a=b forms.' WHERE "id" = 'ppg6m5525e0fd62c6fb37a2f6' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m798318db816e7c96657f','ppg6m5525e0fd62c6fb37a2f6',NULL,'MULTIPLE_CHOICE','3x=18 → x=','["6","15","21","54"]',0,'6.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m0a54e6743896ba79462e','ppg6m5525e0fd62c6fb37a2f6',NULL,'MULTIPLE_CHOICE','x/4=5 → x=','["1","9","20","4/5"]',2,'20.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mea8c2010f52d35f60ce2','ppg6m5525e0fd62c6fb37a2f6',NULL,'MULTIPLE_CHOICE','5x=35 → x=','["7","30","40","175"]',0,'7.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L4. Modeling with One-Step Equations (ppg6me935d9263c96bdaf1f0e)
UPDATE "Lesson" SET "content" = '# Modeling with One-Step Equations

*Grade 6 Mathematics · Unit 7 of 11 · Equations & Inequalities · Lesson 4*

## Objective

**I can** write one-step equations from stories.

## Warm-up (2 minutes)

“A number plus 8 is 20.” Equation?

## Teach

### Big idea

Define variable → write equation → solve → label units.

### Example 1

n+8=20 → n=12.

### Try this

Thrice a number is 27.

**Check:** 3n=27 → n=9

### Example 2

$5 per ticket times t tickets = $40 → 5t=40 → t=8.

### Common mistake (this lesson only)

Solving without defining what the variable stands for.

## Guided practice (we do)

1. 7 less than x is 10  
   **Answer:** x−7=10 → 17

2. Half of m is 6  
   **Answer:** m/2=6 → 12

3. 4 packs cost $20  
   **Answer:** 4p=20 → $5

## Independent practice

Complete each item. Show your work.

1. A club has some members; after 8 join, there are 18. Write and solve an equation for the starting number. Context: club signup.
2. A club has some members; after 6 join, there are 16. Write and solve an equation for the starting number. Context: club signup.
3. A club has some members; after 8 join, there are 17. Write and solve an equation for the starting number. Context: club signup.
4. A club has some members; after 14 join, there are 28. Write and solve an equation for the starting number. Context: club signup.
5. A club has some members; after 16 join, there are 29. Write and solve an equation for the starting number. Context: club signup.
6. A club has some members; after 14 join, there are 27. Write and solve an equation for the starting number. Context: club signup.

### Answer key (try first)

1. x + 8 = 18 → x = 10.
2. x + 6 = 16 → x = 10.
3. x + 8 = 17 → x = 9.
4. x + 14 = 28 → x = 14.
5. x + 16 = 29 → x = 13.
6. x + 14 = 27 → x = 13.

## Exit ticket

1. 9 more than k is 31.
2. Tickets $3 each total $24.

## Stretch (optional)

Write two stories for 2x=18.
', "objectives" = '• Write one-step equations from stories.
• Solve and interpret the answer with units.
• Check reasonableness.', "description" = 'Write equations from word problems and solve.' WHERE "id" = 'ppg6me935d9263c96bdaf1f0e' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m7d52dd479b78655a8f43','ppg6me935d9263c96bdaf1f0e',NULL,'MULTIPLE_CHOICE','n+8=20 → n=','["12","28","8","20"]',0,'12.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m920257b8171272ede536','ppg6me935d9263c96bdaf1f0e',NULL,'MULTIPLE_CHOICE','3n=27 → n=','["9","24","30","81"]',0,'9.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m0a073b9a0d52d8763b0c','ppg6me935d9263c96bdaf1f0e',NULL,'MULTIPLE_CHOICE','5t=40 → t=','["8","35","45","200"]',0,'8.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L5. What Is an Inequality? (ppg6m8bd9ae6f6baf25fbf369)
UPDATE "Lesson" SET "content" = '# What Is an Inequality?

*Grade 6 Mathematics · Unit 7 of 11 · Equations & Inequalities · Lesson 5*

## Objective

**I can** interpret inequality symbols.

## Warm-up (2 minutes)

Is 3 < 5 true? Is x > 2 an equation?

## Teach

### Big idea

Inequalities compare sizes; many solutions may work.

### Example 1

x > 2 means x is to the right of 2. 5 makes it true; 1 does not.

### Try this

Is 7 ≥ 7 true?

**Check:** Yes

### Example 2

x ≤ −1 includes −1 and all left of −1.

### Common mistake (this lesson only)

Treating > like = and hunting one answer only.

## Guided practice (we do)

1. True? 4 < 9  
   **Answer:** Yes

2. Does x=2 satisfy x>2?  
   **Answer:** No

3. Symbol for at least  
   **Answer:** ≥

## Independent practice

Complete each item. Show your work.

1. Write an inequality for “at least 4 points” and “fewer than 4 fouls.” Which numbers satisfy n > 4 from {3, 4, 5, 6}?
2. Write an inequality for “at least 11 points” and “fewer than 4 fouls.” Which numbers satisfy n > 11 from {10, 11, 12, 13}?
3. Write an inequality for “at least 13 points” and “fewer than 3 fouls.” Which numbers satisfy n > 13 from {12, 13, 14, 15}?
4. Write an inequality for “at least 10 points” and “fewer than 8 fouls.” Which numbers satisfy n > 10 from {9, 10, 11, 12}?
5. Write an inequality for “at least 12 points” and “fewer than 7 fouls.” Which numbers satisfy n > 12 from {11, 12, 13, 14}?
6. Write an inequality for “at least 10 points” and “fewer than 7 fouls.” Which numbers satisfy n > 10 from {9, 10, 11, 12}?

### Answer key (try first)

1. points ≥ 4; fouls < 4. Satisfy n>4: 5, 6.
2. points ≥ 11; fouls < 4. Satisfy n>11: 12, 13.
3. points ≥ 13; fouls < 3. Satisfy n>13: 14, 15.
4. points ≥ 10; fouls < 8. Satisfy n>10: 11, 12.
5. points ≥ 12; fouls < 7. Satisfy n>12: 13, 14.
6. points ≥ 10; fouls < 7. Satisfy n>10: 11, 12.

## Exit ticket

1. Test x=0 in x≥−3.
2. Words for x < 5.

## Stretch (optional)

When is ≤ different from <?
', "objectives" = '• Interpret inequality symbols.
• Decide if a number makes an inequality true.
• Contrast with equations.', "description" = 'Interpret <, >, ≤, ≥ with number-line meaning.' WHERE "id" = 'ppg6m8bd9ae6f6baf25fbf369' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mf429597e8a3eb9a57a75','ppg6m8bd9ae6f6baf25fbf369',NULL,'MULTIPLE_CHOICE','3<5?','["True","False","Sometimes","Equation"]',0,'True.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mb4bde5ea905d6696167a','ppg6m8bd9ae6f6baf25fbf369',NULL,'MULTIPLE_CHOICE','x>2 satisfied by x=2?','["Yes","No","Only if =","Always"]',1,'No.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6md2027715e01695dd98b6','ppg6m8bd9ae6f6baf25fbf369',NULL,'MULTIPLE_CHOICE','“At least 4”','["x<4","x≤4","x≥4","x>4"]',2,'≥.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L6. Graphing Inequalities on a Number Line (ppg6mdc1303414b425f5ce31b)
UPDATE "Lesson" SET "content" = '# Graphing Inequalities on a Number Line

*Grade 6 Mathematics · Unit 7 of 11 · Equations & Inequalities · Lesson 6*

## Objective

**I can** graph inequalities on a number line.

## Warm-up (2 minutes)

How do you show x > 2 vs x ≥ 2?

## Teach

### Big idea

Open circle for < or >; closed for ≤ or ≥. Shade the solution ray.

### Example 1

x>2: open at 2, shade right. x≥2: closed at 2, shade right.

### Try this

Graph x ≤ −1.

**Check:** Closed at −1, shade left

### Example 2

x < 0: open at 0, shade left.

### Common mistake (this lesson only)

Using a closed circle with >.

## Guided practice (we do)

1. Circle for x>3  
   **Answer:** Open

2. Shade for x≤0  
   **Answer:** Left including 0

3. x≥5 circle  
   **Answer:** Closed

## Independent practice

Complete each item. Show your work.

1. Graph x ≥ 8 and x < 5 on a number line (describe open/closed circles and shading direction).
2. Graph x ≥ 12 and x < -1 on a number line (describe open/closed circles and shading direction).
3. Graph x ≥ 12 and x < 2 on a number line (describe open/closed circles and shading direction).
4. Graph x ≥ 8 and x < 7 on a number line (describe open/closed circles and shading direction).
5. Graph x ≥ 8 and x < 2 on a number line (describe open/closed circles and shading direction).
6. Graph x ≥ 12 and x < 4 on a number line (describe open/closed circles and shading direction).

### Answer key (try first)

1. x≥8: closed at 8, shade right. x<5: open at 5, shade left.
2. x≥12: closed at 12, shade right. x<-1: open at -1, shade left.
3. x≥12: closed at 12, shade right. x<2: open at 2, shade left.
4. x≥8: closed at 8, shade right. x<7: open at 7, shade left.
5. x≥8: closed at 8, shade right. x<2: open at 2, shade left.
6. x≥12: closed at 12, shade right. x<4: open at 4, shade left.

## Exit ticket

1. Graph x < 4.
2. Graph x ≥ −2.

## Stretch (optional)

Match four graphs to four inequalities.
', "objectives" = '• Graph inequalities on a number line.
• Use open/closed circles correctly.
• Shade the correct ray.', "description" = 'Graph solution sets with open/closed circles.' WHERE "id" = 'ppg6mdc1303414b425f5ce31b' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m3aea41d96fe33ce1e821','ppg6mdc1303414b425f5ce31b',NULL,'MULTIPLE_CHOICE','Circle for x>2','["Open","Closed","None","Two"]',0,'Open.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m8c48415da817424a7790','ppg6mdc1303414b425f5ce31b',NULL,'MULTIPLE_CHOICE','x≤−1 shade','["Right","Left","Only −1","None"]',1,'Left.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6me36a1dd4907a64c6d428','ppg6mdc1303414b425f5ce31b',NULL,'MULTIPLE_CHOICE','x≥5 circle','["Open","Closed","Square","Dashed"]',1,'Closed.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L7. Writing Inequalities from Stories (ppg6m82a4dc0d2c91e52a561b)
UPDATE "Lesson" SET "content" = '# Writing Inequalities from Stories

*Grade 6 Mathematics · Unit 7 of 11 · Equations & Inequalities · Lesson 7*

## Objective

**I can** translate stories into inequalities.

## Warm-up (2 minutes)

“You must be at least 12 years old” — inequality?

## Teach

### Big idea

At least → ≥; at most → ≤; more than → >; fewer than → <.

### Example 1

Age a ≥ 12.

### Try this

At most 5 tickets t.

**Check:** t ≤ 5

### Example 2

Score s must exceed 70 → s > 70.

### Common mistake (this lesson only)

Using < for “at least.”

## Guided practice (we do)

1. More than 3  
   **Answer:** x>3

2. No more than 10  
   **Answer:** x≤10

3. Under 18  
   **Answer:** x<18

## Independent practice

Complete each item. Show your work.

1. “A ride allows riders under 12 inches tall” and “you need more than 6 tickets.” Write inequalities for height h and tickets t.
2. “A ride allows riders under 14 inches tall” and “you need more than 10 tickets.” Write inequalities for height h and tickets t.
3. “A ride allows riders under 17 inches tall” and “you need more than 10 tickets.” Write inequalities for height h and tickets t.
4. “A ride allows riders under 11 inches tall” and “you need more than 14 tickets.” Write inequalities for height h and tickets t.
5. “A ride allows riders under 15 inches tall” and “you need more than 14 tickets.” Write inequalities for height h and tickets t.
6. “A ride allows riders under 17 inches tall” and “you need more than 9 tickets.” Write inequalities for height h and tickets t.

### Answer key (try first)

1. h < 12; t > 6.
2. h < 14; t > 10.
3. h < 17; t > 10.
4. h < 11; t > 14.
5. h < 15; t > 14.
6. h < 17; t > 9.

## Exit ticket

1. At least $20.
2. Fewer than 8 people.

## Stretch (optional)

Two English phrases for x ≥ 0.
', "objectives" = '• Translate stories into inequalities.
• Choose the correct symbol.
• Define the variable clearly.', "description" = 'Translate constraints into inequalities.' WHERE "id" = 'ppg6m82a4dc0d2c91e52a561b' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ma1bcf546652c7c532acb','ppg6m82a4dc0d2c91e52a561b',NULL,'MULTIPLE_CHOICE','At least 12','["a<12","a≤12","a≥12","a>12"]',2,'≥.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m815d0f615781d8bec9cd','ppg6m82a4dc0d2c91e52a561b',NULL,'MULTIPLE_CHOICE','At most 5','["t<5","t≤5","t≥5","t>5"]',1,'≤.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mc3bb1007310b29629a6c','ppg6m82a4dc0d2c91e52a561b',NULL,'MULTIPLE_CHOICE','Exceeds 70','["s≥70","s>70","s≤70","s<70"]',1,'>.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L8. Checking Solutions in Inequalities (ppg6m0f492051af75d101d7bb)
UPDATE "Lesson" SET "content" = '# Checking Solutions in Inequalities

*Grade 6 Mathematics · Unit 7 of 11 · Equations & Inequalities · Lesson 8*

## Objective

**I can** test candidate values in inequalities.

## Warm-up (2 minutes)

Does x=3 make x ≥ 3 true? Does x=2?

## Teach

### Big idea

Substitute and simplify the comparison.

### Example 1

x≥3: 3≥3 true; 2≥3 false.

### Try this

Does −1 satisfy x < 0?

**Check:** Yes

### Example 2

For x>5, x=5 fails; x=5.1 works.

### Common mistake (this lesson only)

Stopping after one true value and ignoring boundary rules.

## Guided practice (we do)

1. 5 in x>5?  
   **Answer:** No

2. 5 in x≥5?  
   **Answer:** Yes

3. 0 in x≤−1?  
   **Answer:** No

## Independent practice

Complete each item. Show your work.

1. Which of {9, 0, 9} satisfy 2x + 1 ≤ 1? Show tests.
2. Which of {13, 2, 15} satisfy 2x + 1 ≤ 5? Show tests.
3. Which of {13, 5, 18} satisfy 2x + 1 ≤ 11? Show tests.
4. Which of {9, 2, 11} satisfy 2x + 1 ≤ 5? Show tests.
5. Which of {9, 5, 14} satisfy 2x + 1 ≤ 11? Show tests.
6. Which of {13, 7, 20} satisfy 2x + 1 ≤ 15? Show tests.

### Answer key (try first)

1. Test each: solutions are those with 2x+1 ≤ 1 ⇒ x ≤ 0. So values ≤ 0 from the set.
2. Test each: solutions are those with 2x+1 ≤ 5 ⇒ x ≤ 2. So values ≤ 2 from the set.
3. Test each: solutions are those with 2x+1 ≤ 11 ⇒ x ≤ 5. So values ≤ 5 from the set.
4. Test each: solutions are those with 2x+1 ≤ 5 ⇒ x ≤ 2. So values ≤ 2 from the set.
5. Test each: solutions are those with 2x+1 ≤ 11 ⇒ x ≤ 5. So values ≤ 5 from the set.
6. Test each: solutions are those with 2x+1 ≤ 15 ⇒ x ≤ 7. So values ≤ 7 from the set.

## Exit ticket

1. Test 4 and 6 in x>5.
2. Test −2 in x≤−2.

## Stretch (optional)

Find three solutions for x < 1.
', "objectives" = '• Test candidate values in inequalities.
• Explain true/false with substitution.
• Find one solution and one non-solution.', "description" = 'Test candidate values; explain why they work or fail.' WHERE "id" = 'ppg6m0f492051af75d101d7bb' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m6685016e9a83c01c0ec7','ppg6m0f492051af75d101d7bb',NULL,'MULTIPLE_CHOICE','x=3 in x≥3?','["True","False","Unknown","Equation only"]',0,'True.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m6d7ed4f6af36f4a708a4','ppg6m0f492051af75d101d7bb',NULL,'MULTIPLE_CHOICE','x=5 in x>5?','["True","False","Sometimes","Always"]',1,'False.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ma13614112b7ff490515b','ppg6m0f492051af75d101d7bb',NULL,'MULTIPLE_CHOICE','−1 in x<0?','["True","False","Borderline","No"]',0,'True.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L9. Equations & Inequalities Mistakes (ppg6m0623b2b9c74beb35714a)
UPDATE "Lesson" SET "content" = '# Equations & Inequalities Mistakes

*Grade 6 Mathematics · Unit 7 of 11 · Equations & Inequalities · Lesson 9*

## Objective

**I can** catch common equation/inequality mistakes.

## Warm-up (2 minutes)

Student solves x+4=10 as x=14. Name the error.

## Teach

### Big idea

Error hunt: wrong inverse, one-sided change, symbol swap.

### Example 1

Should subtract 4 → x=6, not add.

### Try this

Fix: student graphs x>2 with closed circle.

**Check:** Use open circle

### Example 2

Writing “at least” as <. Repair to ≥.

### Common mistake (this lesson only)

Flipping inequality without multiplying/dividing by a negative (Grade 7 preview note: we avoid that here).

## Guided practice (we do)

1. Repair x−3=7 → student got 4  
   **Answer:** Should be 10

2. Repair 2x=10 → x=20  
   **Answer:** Should be 5

3. At least as symbol  
   **Answer:** ≥

## Independent practice

Complete each item. Show your work.

1. A student solves x − 11 = 10 by writing x = 10 − 11. Correct and name the inverse-operation error.
2. A student solves x − 13 = 9 by writing x = 9 − 13. Correct and name the inverse-operation error.
3. A student solves x − 6 = 8 by writing x = 8 − 6. Correct and name the inverse-operation error.
4. A student solves x − 9 = 9 by writing x = 9 − 9. Correct and name the inverse-operation error.
5. A student solves x − 11 = 16 by writing x = 16 − 11. Correct and name the inverse-operation error.
6. A student solves x − 13 = 14 by writing x = 14 − 13. Correct and name the inverse-operation error.

### Answer key (try first)

1. Correct: x = 21. Error: subtracted instead of adding 11 to both sides.
2. Correct: x = 22. Error: subtracted instead of adding 13 to both sides.
3. Correct: x = 14. Error: subtracted instead of adding 6 to both sides.
4. Correct: x = 18. Error: subtracted instead of adding 9 to both sides.
5. Correct: x = 27. Error: subtracted instead of adding 11 to both sides.
6. Correct: x = 27. Error: subtracted instead of adding 13 to both sides.

## Exit ticket

1. Repair x+8=5 → student got 13.
2. Repair open/closed mix-up for ≤.

## Stretch (optional)

Coach note for a wrong balance step.
', "objectives" = '• Catch common equation/inequality mistakes.
• Repair balance errors.
• Fix symbol mix-ups.', "description" = 'Catch sign errors and balance mistakes.' WHERE "id" = 'ppg6m0623b2b9c74beb35714a' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m9f1e129bfaa313a2fb58','ppg6m0623b2b9c74beb35714a',NULL,'MULTIPLE_CHOICE','x+4=10 → x=','["14","6","4","10"]',1,'6.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m33b44fd0d3cd039784b0','ppg6m0623b2b9c74beb35714a',NULL,'MULTIPLE_CHOICE','Graph x>2 needs','["Closed","Open","Dot only","Arrow left"]',1,'Open.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m99abbe15aa5b692b7c3a','ppg6m0623b2b9c74beb35714a',NULL,'MULTIPLE_CHOICE','At least symbol','["<","≤",">","≥"]',3,'≥.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 7 L10. Equations & Inequalities Unit Review (ppg6mf4954f28e595448920b1)
UPDATE "Lesson" SET "content" = '# Equations & Inequalities Unit Review

*Grade 6 Mathematics · Unit 7 of 11 · Equations & Inequalities · Lesson 10*

## Objective

**I can** solve one-step equations.

## Warm-up (2 minutes)

Solve 2x=16 and graph x ≥ 3 — different tools, same course unit.

## Teach

### Big idea

Equation → one/few solutions; inequality → a set. Check everything.

### Example 1

x−5=2 → x=7; x<1 open circle shade left.

### Try this

Write and solve: 4 more than n is 19.

**Check:** n+4=19 → 15

### Example 2

At most 8 → x≤8 closed shade left.

### Common mistake (this lesson only)

Treating inequality graphs like single-point equation marks only.

## Guided practice (we do)

1. Solve 5x=45  
   **Answer:** 9

2. Graph x>0 key features  
   **Answer:** Open at 0, right

3. Check 2 in x≤2  
   **Answer:** True

## Independent practice

Complete each item. Show your work.

1. Review: Solve 7x = 35 and graph x > 4 (describe).
2. Review: Solve 11x = 77 and graph x > 6 (describe).
3. Review: Solve 11x = 22 and graph x > 1 (describe).
4. Review: Solve 15x = 60 and graph x > 3 (describe).
5. Review: Solve 15x = 120 and graph x > 7 (describe).
6. Review: Solve 10x = 100 and graph x > 9 (describe).

### Answer key (try first)

1. x = 5. Graph: open circle at 4, shade right.
2. x = 7. Graph: open circle at 6, shade right.
3. x = 2. Graph: open circle at 1, shade right.
4. x = 4. Graph: open circle at 3, shade right.
5. x = 8. Graph: open circle at 7, shade right.
6. x = 10. Graph: open circle at 9, shade right.

## Exit ticket

1. Solve y/3=6.
2. Graph x ≤ −1.

## Stretch (optional)

Story requiring an inequality and an equation.
', "objectives" = '• Solve one-step equations.
• Graph and write inequalities.
• Check solutions.', "description" = 'Mixed one-step equations and inequality practice.' WHERE "id" = 'ppg6mf4954f28e595448920b1' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mb7282493b53e42f9c1bc','ppg6mf4954f28e595448920b1',NULL,'MULTIPLE_CHOICE','2x=16 → x=','["8","14","18","32"]',0,'8.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m8eb59d556de6d8e778ff','ppg6mf4954f28e595448920b1',NULL,'MULTIPLE_CHOICE','x≥3 circle','["Open","Closed","None","Two"]',1,'Closed.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m1e2457729defa950314d','ppg6mf4954f28e595448920b1',NULL,'MULTIPLE_CHOICE','n+4=19 → n=','["15","23","4","19"]',0,'15.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L1. Area Meaning and Square Units (ppg6m6ee0346723044865a8c8)
UPDATE "Lesson" SET "content" = '# Area Meaning and Square Units

*Grade 6 Mathematics · Unit 8 of 11 · Plane Figures · Lesson 1*

## Objective

**I can** define area as covering with square units.

## Warm-up (2 minutes)

How many 1×1 squares cover a 3-by-4 rectangle?

## Teach

### Big idea

Area measures covering of a 2D region; unit is square (cm^2, in^2).

### Example 1

3-by-4 grid → 12 square units.

### Try this

Why not label area with cm only?

**Check:** Need cm^2 for covering

### Example 2

A region of 7 unit squares has area 7 square units.

### Common mistake (this lesson only)

Using perimeter units for area.

## Guided practice (we do)

1. 2×5 grid area  
   **Answer:** 10

2. Units for area  
   **Answer:** Square units

3. Covering vs fencing  
   **Answer:** Area vs perimeter

## Independent practice

Complete each item. Show your work.

1. A rectangle is covered by 7 rows of 10 unit squares. What is the area? Why are units “square ft”?
2. A rectangle is covered by 11 rows of 12 unit squares. What is the area? Why are units “square cm”?
3. A rectangle is covered by 11 rows of 15 unit squares. What is the area? Why are units “square in”?
4. A rectangle is covered by 15 rows of 9 unit squares. What is the area? Why are units “square cm”?
5. A rectangle is covered by 15 rows of 13 unit squares. What is the area? Why are units “square in”?
6. A rectangle is covered by 19 rows of 15 unit squares. What is the area? Why are units “square ft”?

### Answer key (try first)

1. Area = 70 square units. Square units measure covering/filling a 2D region.
2. Area = 132 square units. Square units measure covering/filling a 2D region.
3. Area = 165 square units. Square units measure covering/filling a 2D region.
4. Area = 135 square units. Square units measure covering/filling a 2D region.
5. Area = 195 square units. Square units measure covering/filling a 2D region.
6. Area = 285 square units. Square units measure covering/filling a 2D region.

## Exit ticket

1. Area of 6×2 grid.
2. Name a square unit.

## Stretch (optional)

Draw two shapes with area 8.
', "objectives" = '• Define area as covering with square units.
• Choose square units.
• Count unit squares on a grid.', "description" = 'Define area as covering; choose correct square units.' WHERE "id" = 'ppg6m6ee0346723044865a8c8' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6madd4a2dd33b4c677628e','ppg6m6ee0346723044865a8c8',NULL,'MULTIPLE_CHOICE','3×4 grid area','["7","12","14","24"]',1,'12.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ma2782da9550ab261ec29','ppg6m6ee0346723044865a8c8',NULL,'MULTIPLE_CHOICE','Area units','["cm","cm^2","cm^3","none"]',1,'Square.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m57c0fb7b77bb6fdf99c2','ppg6m6ee0346723044865a8c8',NULL,'MULTIPLE_CHOICE','Area measures','["Length","Covering","Temperature","Speed"]',1,'Covering.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L2. Area of Rectangles and Parallelograms (ppg6m52705b5ecd9b4a0bf4cc)
UPDATE "Lesson" SET "content" = '# Area of Rectangles and Parallelograms

*Grade 6 Mathematics · Unit 8 of 11 · Plane Figures · Lesson 2*

## Objective

**I can** compute rectangle/parallelogram area as base×height.

## Warm-up (2 minutes)

Rectangle 5 by 3 — area? Why multiply?

## Teach

### Big idea

A=b×h with h perpendicular to the chosen base.

### Example 1

Rectangle 5×3 → 15 square units.

### Try this

Parallelogram base 8, height 4.

**Check:** 32

### Example 2

Tilted parallelogram uses perpendicular height, not slant side.

### Common mistake (this lesson only)

Using slant side as height.

## Guided practice (we do)

1. 6×9 rectangle  
   **Answer:** 54

2. Base 10 height 2.5  
   **Answer:** 25

3. Why perpendicular?  
   **Answer:** Height is perpendicular distance

## Independent practice

Complete each item. Show your work.

1. Find the area of a parallelogram with base 8 cm and perpendicular height 10 cm. Why must height be perpendicular?
2. Find the area of a parallelogram with base 8 cm and perpendicular height 14 cm. Why must height be perpendicular?
3. Find the area of a parallelogram with base 8 cm and perpendicular height 9 cm. Why must height be perpendicular?
4. Find the area of a parallelogram with base 16 cm and perpendicular height 10 cm. Why must height be perpendicular?
5. Find the area of a parallelogram with base 16 cm and perpendicular height 13 cm. Why must height be perpendicular?
6. Find the area of a parallelogram with base 16 cm and perpendicular height 16 cm. Why must height be perpendicular?

### Answer key (try first)

1. A = 80 cm². Slanted side is not height; perpendicular distance is.
2. A = 112 cm². Slanted side is not height; perpendicular distance is.
3. A = 72 cm². Slanted side is not height; perpendicular distance is.
4. A = 160 cm². Slanted side is not height; perpendicular distance is.
5. A = 208 cm². Slanted side is not height; perpendicular distance is.
6. A = 256 cm². Slanted side is not height; perpendicular distance is.

## Exit ticket

1. Area base 7 height 4.
2. Sketch height on a tilted parallelogram.

## Stretch (optional)

Explain why slant ≠ height.
', "objectives" = '• Compute rectangle/parallelogram area as base×height.
• Use perpendicular height.
• Include units.', "description" = 'Use base × height with perpendicular height.' WHERE "id" = 'ppg6m52705b5ecd9b4a0bf4cc' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6md668f9207f743066bcec','ppg6m52705b5ecd9b4a0bf4cc',NULL,'MULTIPLE_CHOICE','5×3 rectangle area','["8","15","16","30"]',1,'15.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m5541573f13a24948198f','ppg6m52705b5ecd9b4a0bf4cc',NULL,'MULTIPLE_CHOICE','Para base 8 height 4','["12","32","16","24"]',1,'32.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m7e7d129f9d099b1094dc','ppg6m52705b5ecd9b4a0bf4cc',NULL,'MULTIPLE_CHOICE','Height must be','["Slant","Perimeter","Perpendicular to base","Diagonal"]',2,'Perpendicular.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L3. Area of Triangles (ppg6m7087550782430b112f0d)
UPDATE "Lesson" SET "content" = '# Area of Triangles

*Grade 6 Mathematics · Unit 8 of 11 · Plane Figures · Lesson 3*

## Objective

**I can** compute triangle area with ½bh.

## Warm-up (2 minutes)

Parallelogram area 20 splits into two equal triangles — each?

## Teach

### Big idea

Triangle area is half a parallelogram with same base and height: A=½bh.

### Example 1

b=6,h=4 → A=12.

### Try this

b=10,h=5.

**Check:** 25

### Example 2

Right triangle legs 3 and 4 → area 6.

### Common mistake (this lesson only)

Forgetting the 1/2.

## Guided practice (we do)

1. b=8 h=3  
   **Answer:** 12

2. Half of parallelogram 18  
   **Answer:** 9

3. Legs 5 and 6  
   **Answer:** 15

## Independent practice

Complete each item. Show your work.

1. A triangle has base 11 in and height 11 in. Find the area. How does it relate to a parallelogram with the same base and height?
2. A triangle has base 11 in and height 14 in. Find the area. How does it relate to a parallelogram with the same base and height?
3. A triangle has base 11 in and height 10 in. Find the area. How does it relate to a parallelogram with the same base and height?
4. A triangle has base 11 in and height 13 in. Find the area. How does it relate to a parallelogram with the same base and height?
5. A triangle has base 11 in and height 16 in. Find the area. How does it relate to a parallelogram with the same base and height?
6. A triangle has base 11 in and height 12 in. Find the area. How does it relate to a parallelogram with the same base and height?

### Answer key (try first)

1. A = ½×11×11 = 60.5 in². Triangle is half that parallelogram.
2. A = ½×11×14 = 77 in². Triangle is half that parallelogram.
3. A = ½×11×10 = 55 in². Triangle is half that parallelogram.
4. A = ½×11×13 = 71.5 in². Triangle is half that parallelogram.
5. A = ½×11×16 = 88 in². Triangle is half that parallelogram.
6. A = ½×11×12 = 66 in². Triangle is half that parallelogram.

## Exit ticket

1. Area b=9 h=4.
2. Why 1/2 appears.

## Stretch (optional)

Two base/height pairs same triangle.
', "objectives" = '• Compute triangle area with ½bh.
• Relate a triangle to a parallelogram.
• Identify base/height pairs.', "description" = 'Use A = ½bh; connect triangles to parallelograms.' WHERE "id" = 'ppg6m7087550782430b112f0d' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m8e282102874b964b1bc1','ppg6m7087550782430b112f0d',NULL,'MULTIPLE_CHOICE','½·6·4=','["24","12","10","48"]',1,'12.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m4369dfea603716c3960c','ppg6m7087550782430b112f0d',NULL,'MULTIPLE_CHOICE','b=10 h=5 area','["50","25","15","2"]',1,'25.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ma515782dc9f89e8754ac','ppg6m7087550782430b112f0d',NULL,'MULTIPLE_CHOICE','Forget 1/2 on 8×3','["24","12","11","5"]',0,'Wrong 24.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L4. Choosing Base and Height (ppg6m908b3758565a96ce2ebe)
UPDATE "Lesson" SET "content" = '# Choosing Base and Height

*Grade 6 Mathematics · Unit 8 of 11 · Plane Figures · Lesson 4*

## Objective

**I can** choose a valid base–height pair.

## Warm-up (2 minutes)

On a tilted triangle, which segment is height to the bottom base?

## Teach

### Big idea

Height is perpendicular distance from opposite vertex to the base line.

### Example 1

Base=10 and perpendicular height=3 → triangle area 15.

### Try this

Slant 5 and height 3, base 8 — which multiply?

**Check:** Use 8 and 3, not 5

### Example 2

Same area with a different base if matching height is used.

### Common mistake (this lesson only)

Always using the longest side as height.

## Guided practice (we do)

1. Valid height?  
   **Answer:** Perpendicular

2. Base 12 height 2 triangle  
   **Answer:** 12

3. Reject slant when h shown  
   **Answer:** Use perpendicular h

## Independent practice

Complete each item. Show your work.

1. A triangle is drawn with a horizontal side 6 and a tilted side 8. A dashed perpendicular to the horizontal side has length 12. Which length is a valid height for base 6?
2. A triangle is drawn with a horizontal side 10 and a tilted side 12. A dashed perpendicular to the horizontal side has length 14. Which length is a valid height for base 10?
3. A triangle is drawn with a horizontal side 10 and a tilted side 12. A dashed perpendicular to the horizontal side has length 9. Which length is a valid height for base 10?
4. A triangle is drawn with a horizontal side 14 and a tilted side 16. A dashed perpendicular to the horizontal side has length 11. Which length is a valid height for base 14?
5. A triangle is drawn with a horizontal side 14 and a tilted side 16. A dashed perpendicular to the horizontal side has length 15. Which length is a valid height for base 14?
6. A triangle is drawn with a horizontal side 18 and a tilted side 20. A dashed perpendicular to the horizontal side has length 17. Which length is a valid height for base 18?

### Answer key (try first)

1. Height = 12 (perpendicular to the chosen base 6). 8 is a side, not necessarily height.
2. Height = 14 (perpendicular to the chosen base 10). 12 is a side, not necessarily height.
3. Height = 9 (perpendicular to the chosen base 10). 12 is a side, not necessarily height.
4. Height = 11 (perpendicular to the chosen base 14). 16 is a side, not necessarily height.
5. Height = 15 (perpendicular to the chosen base 14). 16 is a side, not necessarily height.
6. Height = 17 (perpendicular to the chosen base 18). 20 is a side, not necessarily height.

## Exit ticket

1. Mark height to a chosen base.
2. Compute with that pair.

## Stretch (optional)

Height outside the triangle.
', "objectives" = '• Choose a valid base–height pair.
• Reject slant sides as height.
• Compute area with a correct pair.', "description" = 'Identify valid base–height pairs on tilted figures.' WHERE "id" = 'ppg6m908b3758565a96ce2ebe' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m76e6c721b7e8e7304892','ppg6m908b3758565a96ce2ebe',NULL,'MULTIPLE_CHOICE','Height to a base is','["Any side","Perpendicular distance","Perimeter/3","Diagonal"]',1,'Perpendicular.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mc7b33565b0f34f7b9d6d','ppg6m908b3758565a96ce2ebe',NULL,'MULTIPLE_CHOICE','Triangle base 10 height 3','["30","15","13","7"]',1,'15.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m75b24a6b4ac9f0f6ae69','ppg6m908b3758565a96ce2ebe',NULL,'MULTIPLE_CHOICE','Slant as height?','["Always OK","Only if perpendicular","Required","Never ever"]',1,'Only if perpendicular.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L5. Area of Trapezoids (Intro) (ppg6m0ae6df4b211402904b25)
UPDATE "Lesson" SET "content" = '# Area of Trapezoids (Intro)

*Grade 6 Mathematics · Unit 8 of 11 · Plane Figures · Lesson 5*

## Objective

**I can** find trapezoid area by decomposition or average bases.

## Warm-up (2 minutes)

Trapezoid bases 6 and 10, height 4 — estimate area.

## Teach

### Big idea

A=½(b1+b2)h.

### Example 1

½(6+10)·4=32.

### Try this

Bases 5 and 9, h=3.

**Check:** 21

### Example 2

Decompose into rectangle + triangle to verify.

### Common mistake (this lesson only)

Averaging all four sides instead of the two bases.

## Guided practice (we do)

1. ½(4+8)·5  
   **Answer:** 30

2. Need height?  
   **Answer:** Yes

3. Bases means  
   **Answer:** Parallel sides

## Independent practice

Complete each item. Show your work.

1. A trapezoid has parallel sides 14 and 18 and height 2. Find area using average of bases × height.
2. A trapezoid has parallel sides 12 and 16 and height 2. Find area using average of bases × height.
3. A trapezoid has parallel sides 14 and 18 and height 1. Find area using average of bases × height.
4. A trapezoid has parallel sides 11 and 15 and height 6. Find area using average of bases × height.
5. A trapezoid has parallel sides 13 and 17 and height 5. Find area using average of bases × height.
6. A trapezoid has parallel sides 11 and 15 and height 5. Find area using average of bases × height.

### Answer key (try first)

1. A = ½(14+18)×2 = 32.
2. A = ½(12+16)×2 = 28.
3. A = ½(14+18)×1 = 16.
4. A = ½(11+15)×6 = 78.
5. A = ½(13+17)×5 = 75.
6. A = ½(11+15)×5 = 65.

## Exit ticket

1. Bases 7 and 11, h=2.
2. Sketch decomposition.

## Stretch (optional)

Why average bases?
', "objectives" = '• Find trapezoid area by decomposition or average bases.
• Identify the two bases.
• Use height perpendicular to bases.', "description" = 'Decompose or use average-bases thinking.' WHERE "id" = 'ppg6m0ae6df4b211402904b25' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mf923149c6cdf67b661cb','ppg6m0ae6df4b211402904b25',NULL,'MULTIPLE_CHOICE','½(6+10)·4=','["40","32","20","64"]',1,'32.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mb145b6bbfc9c4d86c0df','ppg6m0ae6df4b211402904b25',NULL,'MULTIPLE_CHOICE','Bases 5 and 9, h=3','["27","21","14","45"]',1,'21.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m1008bc6fa5a364d72970','ppg6m0ae6df4b211402904b25',NULL,'MULTIPLE_CHOICE','Bases are','["All sides","Parallel sides","Diagonals","Heights"]',1,'Parallel.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L6. Composite Plane Figures (ppg6mc6c1081aedfd13ec77f9)
UPDATE "Lesson" SET "content" = '# Composite Plane Figures

*Grade 6 Mathematics · Unit 8 of 11 · Plane Figures · Lesson 6*

## Objective

**I can** decompose composites into rectangles/triangles.

## Warm-up (2 minutes)

L-shape: how can you split it into rectangles?

## Teach

### Big idea

Add piece areas or subtract a cutout from a whole.

### Example 1

Whole 8×6 rectangle minus 3×2 cutout → 48−6=42.

### Try this

Two rectangles 4×3 and 5×2. Total?

**Check:** 22

### Example 2

House shape: rectangle + triangle roof.

### Common mistake (this lesson only)

Missing a shared length when labeling.

## Guided practice (we do)

1. Add 10+7  
   **Answer:** 17

2. Subtract cutout 5 from 20  
   **Answer:** 15

3. Need all lengths  
   **Answer:** Yes

## Independent practice

Complete each item. Show your work.

1. An L-shaped patio is a 12×17 rectangle with a 6×13 rectangle cut from a corner. Find the remaining area.
2. An L-shaped patio is a 14×15 rectangle with a 8×11 rectangle cut from a corner. Find the remaining area.
3. An L-shaped patio is a 16×14 rectangle with a 10×10 rectangle cut from a corner. Find the remaining area.
4. An L-shaped patio is a 18×13 rectangle with a 12×9 rectangle cut from a corner. Find the remaining area.
5. An L-shaped patio is a 20×19 rectangle with a 14×15 rectangle cut from a corner. Find the remaining area.
6. An L-shaped patio is a 22×18 rectangle with a 16×14 rectangle cut from a corner. Find the remaining area.

### Answer key (try first)

1. Big − cut = 126.
2. Big − cut = 122.
3. Big − cut = 124.
4. Big − cut = 126.
5. Big − cut = 170.
6. Big − cut = 172.

## Exit ticket

1. Split an L and find area.
2. Subtract a square cutout.

## Stretch (optional)

Composite with area 50.
', "objectives" = '• Decompose composites into rectangles/triangles.
• Add or subtract areas.
• Label dimensions on each piece.', "description" = 'Decompose complex shapes into rectangles and triangles.' WHERE "id" = 'ppg6mc6c1081aedfd13ec77f9' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m06f84eab45cef8709b08','ppg6mc6c1081aedfd13ec77f9',NULL,'MULTIPLE_CHOICE','8×6 minus 3×2','["42","48","36","54"]',0,'42.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m75a302373499dfacb241','ppg6mc6c1081aedfd13ec77f9',NULL,'MULTIPLE_CHOICE','4×3 + 5×2','["14","22","20","9"]',1,'22.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mc383cb5ae9cb81f9c879','ppg6mc6c1081aedfd13ec77f9',NULL,'MULTIPLE_CHOICE','Strategy','["Only perimeter","Decompose/add/subtract","Guess","Slant only"]',1,'Decompose.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L7. Polygons and Perimeter Connections (ppg6m1a0739ca70c3a33763ec)
UPDATE "Lesson" SET "content" = '# Polygons and Perimeter Connections

*Grade 6 Mathematics · Unit 8 of 11 · Plane Figures · Lesson 7*

## Objective

**I can** compute perimeter of polygons.

## Warm-up (2 minutes)

Fence around a garden vs sod covering — which is perimeter?

## Teach

### Big idea

Perimeter = distance around (linear). Area = covering (square).

### Example 1

Rectangle 5 by 3: P=16, A=15.

### Try this

Equilateral triangle side 4 — perimeter?

**Check:** 12

### Example 2

Same perimeter can wrap different areas.

### Common mistake (this lesson only)

Reporting area with the perimeter number.

## Guided practice (we do)

1. P of 2×7 rectangle  
   **Answer:** 18

2. Units for P  
   **Answer:** Linear

3. A vs P for 5×3  
   **Answer:** 15 vs 16

## Independent practice

Complete each item. Show your work.

1. A rectangle is 14 by 0. Find perimeter and area. A student says “area is 28.” What did they confuse?
2. A rectangle is 7 by 6. Find perimeter and area. A student says “area is 26.” What did they confuse?
3. A rectangle is 9 by 5. Find perimeter and area. A student says “area is 28.” What did they confuse?
4. A rectangle is 11 by 4. Find perimeter and area. A student says “area is 30.” What did they confuse?
5. A rectangle is 13 by 10. Find perimeter and area. A student says “area is 46.” What did they confuse?
6. A rectangle is 15 by 9. Find perimeter and area. A student says “area is 48.” What did they confuse?

### Answer key (try first)

1. P = 28; A = 0. Student reported perimeter as area.
2. P = 26; A = 42. Student reported perimeter as area.
3. P = 28; A = 45. Student reported perimeter as area.
4. P = 30; A = 44. Student reported perimeter as area.
5. P = 46; A = 130. Student reported perimeter as area.
6. P = 48; A = 135. Student reported perimeter as area.

## Exit ticket

1. Perimeter of square side 6.
2. Area of same square.

## Stretch (optional)

Two rectangles same P different A.
', "objectives" = '• Compute perimeter of polygons.
• Contrast perimeter with area.
• Avoid mixing linear and square units.', "description" = 'Relate perimeter and area; avoid mixing them up.' WHERE "id" = 'ppg6m1a0739ca70c3a33763ec' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mae005ebdde7d3ed7c10c','ppg6m1a0739ca70c3a33763ec',NULL,'MULTIPLE_CHOICE','5×3 perimeter','["15","16","8","30"]',1,'16.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m2c2fa13b446b2fff43db','ppg6m1a0739ca70c3a33763ec',NULL,'MULTIPLE_CHOICE','Perimeter units','["Square","Linear","Cubic","None"]',1,'Linear.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m003c6dfd9c1ee7f8f3a6','ppg6m1a0739ca70c3a33763ec',NULL,'MULTIPLE_CHOICE','Area of 5×3','["16","15","8","30"]',1,'15.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 8 L8. Plane Figures Unit Review (ppg6mace69e232ee8c0c6f8d8)
UPDATE "Lesson" SET "content" = '# Plane Figures Unit Review

*Grade 6 Mathematics · Unit 8 of 11 · Plane Figures · Lesson 8*

## Objective

**I can** compute areas of rectangles, triangles, parallelograms, trapezoids.

## Warm-up (2 minutes)

List formulas you need for this unit in 20 seconds.

## Teach

### Big idea

A=bh, ½bh, ½(b1+b2)h; decompose; perimeter ≠ area.

### Example 1

Triangle b=8 h=5 → 20; composite 12+9=21.

### Try this

Para base 7 height 3 + rectangle 4×2.

**Check:** 21+8=29

### Example 2

Trapezoid bases 4 and 6 h=5 → 25.

### Common mistake (this lesson only)

Using slant as height on review items.

## Guided practice (we do)

1. ½·10·6  
   **Answer:** 30

2. P vs A  
   **Answer:** Around vs cover

3. Trap ½(3+7)·4  
   **Answer:** 20

## Independent practice

Complete each item. Show your work.

1. Review: Area of triangle base 10 height 5; area of rectangle 10 by 7.
2. Review: Area of triangle base 14 height 7; area of rectangle 14 by 9.
3. Review: Area of triangle base 14 height 2; area of rectangle 14 by 4.
4. Review: Area of triangle base 9 height 4; area of rectangle 9 by 6.
5. Review: Area of triangle base 18 height 8; area of rectangle 18 by 10.
6. Review: Area of triangle base 13 height 10; area of rectangle 13 by 12.

### Answer key (try first)

1. Triangle 25; rectangle 70.
2. Triangle 49; rectangle 126.
3. Triangle 14; rectangle 56.
4. Triangle 18; rectangle 54.
5. Triangle 72; rectangle 180.
6. Triangle 65; rectangle 156.

## Exit ticket

1. Area triangle b=12 h=3.
2. L-shape area.

## Stretch (optional)

Error hunt on a composite.
', "objectives" = '• Compute areas of rectangles, triangles, parallelograms, trapezoids.
• Decompose composites.
• Keep units straight.', "description" = 'Mixed area problems with units and decomposition.' WHERE "id" = 'ppg6mace69e232ee8c0c6f8d8' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m665586b1f163bd330ba1','ppg6mace69e232ee8c0c6f8d8',NULL,'MULTIPLE_CHOICE','Triangle ½·8·5','["40","20","13","80"]',1,'20.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m6dc722f6776c6be70a45','ppg6mace69e232ee8c0c6f8d8',NULL,'MULTIPLE_CHOICE','Trap ½(4+6)·5','["25","50","15","20"]',0,'25.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mc5c54340ea3d454f0753','ppg6mace69e232ee8c0c6f8d8',NULL,'MULTIPLE_CHOICE','Height must be','["Slant","Perpendicular","Perimeter","Area"]',1,'Perpendicular.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L1. Axes, Origin, and Ordered Pairs (ppg6me3259123214f02f847e0)
UPDATE "Lesson" SET "content" = '# Axes, Origin, and Ordered Pairs

*Grade 6 Mathematics · Unit 9 of 11 · Coordinate Plane · Lesson 1*

## Objective

**I can** plot and read ordered pairs (x,y).

## Warm-up (2 minutes)

Where is (0,0)? Which number moves first in (3,2)?

## Teach

### Big idea

Origin (0,0). Pair (x,y): x right/left, y up/down.

### Example 1

Plot (3,2): 3 right, 2 up.

### Try this

Point 2 left, 4 up from origin?

**Check:** (−2,4)

### Example 2

Read plotted points by counting grid marks.

### Common mistake (this lesson only)

Swapping x and y.

## Guided practice (we do)

1. (0,5)  
   **Answer:** On y-axis

2. (4,0)  
   **Answer:** On x-axis

3. Plot (−1,3)  
   **Answer:** 1 left, 3 up

## Independent practice

Complete each item. Show your work.

1. Plot (5, -4) and (-4, 5). Are they the same point? Name the x- and y-coordinates of each.
2. Plot (0, -2) and (-2, 0). Are they the same point? Name the x- and y-coordinates of each.
3. Plot (0, 1) and (1, 0). Are they the same point? Name the x- and y-coordinates of each.
4. Plot (5, -2) and (-2, 5). Are they the same point? Name the x- and y-coordinates of each.
5. Plot (5, 1) and (1, 5). Are they the same point? Name the x- and y-coordinates of each.
6. Plot (9, 3) and (3, 9). Are they the same point? Name the x- and y-coordinates of each.

### Answer key (try first)

1. Different unless x=y. First: x=5, y=-4. Second: x=-4, y=5.
2. Different unless x=y. First: x=0, y=-2. Second: x=-2, y=0.
3. Different unless x=y. First: x=0, y=1. Second: x=1, y=0.
4. Different unless x=y. First: x=5, y=-2. Second: x=-2, y=5.
5. Different unless x=y. First: x=5, y=1. Second: x=1, y=5.
6. Different unless x=y. First: x=9, y=3. Second: x=3, y=9.

## Exit ticket

1. Plot (2,−3).
2. Read a drawn point.

## Stretch (optional)

Why order in (x,y) matters.
', "objectives" = '• Plot and read ordered pairs (x,y).
• Name axes and origin.
• Keep x horizontal, y vertical.', "description" = 'Plot (x,y) and read coordinates accurately.' WHERE "id" = 'ppg6me3259123214f02f847e0' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m0f73acc00afa31718c39','ppg6me3259123214f02f847e0',NULL,'MULTIPLE_CHOICE','Origin','["(1,1)","(0,0)","(0,1)","(1,0)"]',1,'(0,0).',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6me8fa6a4b798761011e1c','ppg6me3259123214f02f847e0',NULL,'MULTIPLE_CHOICE','(3,2) means','["3 up 2 right","3 right 2 up","3 left 2 down","2 right 3 up"]',1,'x then y.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m4e6fe61e132a4b5352b9','ppg6me3259123214f02f847e0',NULL,'MULTIPLE_CHOICE','Swap of (2,5)','["(5,2)","(2,5)","(0,0)","(2,0)"]',0,'(5,2).',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L2. Four Quadrants (ppg6m0138fd960bd762307913)
UPDATE "Lesson" SET "content" = '# Four Quadrants

*Grade 6 Mathematics · Unit 9 of 11 · Coordinate Plane · Lesson 2*

## Objective

**I can** identify the four quadrants.

## Warm-up (2 minutes)

In which quadrant is (−3,4)?

## Teach

### Big idea

I (+,+), II (−,+), III (−,−), IV (+,−).

### Example 1

(−3,4) is Quadrant II.

### Try this

(2,−5) quadrant?

**Check:** IV

### Example 2

Points on axes are not in a quadrant.

### Common mistake (this lesson only)

Calling (0,4) Quadrant I.

## Guided practice (we do)

1. (−1,−2)  
   **Answer:** III

2. (5,1)  
   **Answer:** I

3. (0,−3)  
   **Answer:** On axis

## Independent practice

Complete each item. Show your work.

1. Name the quadrant (or axis) for (9, -10), (-9, 10), (-9, -10), and (9, 0).
2. Name the quadrant (or axis) for (7, -10), (-7, 10), (-7, -10), and (7, 0).
3. Name the quadrant (or axis) for (9, -8), (-9, 8), (-9, -8), and (9, 0).
4. Name the quadrant (or axis) for (7, -8), (-7, 8), (-7, -8), and (7, 0).
5. Name the quadrant (or axis) for (9, -15), (-9, 15), (-9, -15), and (9, 0).
6. Name the quadrant (or axis) for (16, -15), (-16, 15), (-16, -15), and (16, 0).

### Answer key (try first)

1. QIV; QII; QIII; on x-axis (not a quadrant).
2. QIV; QII; QIII; on x-axis (not a quadrant).
3. QIV; QII; QIII; on x-axis (not a quadrant).
4. QIV; QII; QIII; on x-axis (not a quadrant).
5. QIV; QII; QIII; on x-axis (not a quadrant).
6. QIV; QII; QIII; on x-axis (not a quadrant).

## Exit ticket

1. Quadrant of (−4,−1).
2. Sign pattern for II.

## Stretch (optional)

One point in each quadrant.
', "objectives" = '• Identify the four quadrants.
• Connect sign pairs to quadrants.
• Note axis points are not in a quadrant.', "description" = 'Identify quadrants and signs of coordinates.' WHERE "id" = 'ppg6m0138fd960bd762307913' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mdb53a9b9a56c28afc3e3','ppg6m0138fd960bd762307913',NULL,'MULTIPLE_CHOICE','(−3,4) quadrant','["I","II","III","IV"]',1,'II.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m8a284d9b5fb9f1b6c2c7','ppg6m0138fd960bd762307913',NULL,'MULTIPLE_CHOICE','(2,−5) quadrant','["I","II","III","IV"]',3,'IV.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m515de819a581fa8f6f13','ppg6m0138fd960bd762307913',NULL,'MULTIPLE_CHOICE','(0,4) is','["QI","QII","On axis","QIII"]',2,'On axis.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L3. Reflecting Points (ppg6me06345b63e08242eadae)
UPDATE "Lesson" SET "content" = '# Reflecting Points

*Grade 6 Mathematics · Unit 9 of 11 · Coordinate Plane · Lesson 3*

## Objective

**I can** reflect points across axes.

## Warm-up (2 minutes)

Reflect (3,2) across the y-axis — new point?

## Teach

### Big idea

Across y: (x,y)→(−x,y). Across x: (x,y)→(x,−y).

### Example 1

(3,2) across y → (−3,2).

### Try this

(4,−1) across x-axis?

**Check:** (4,1)

### Example 2

Across origin: (x,y)→(−x,−y).

### Common mistake (this lesson only)

Reflecting across y by changing y’s sign.

## Guided practice (we do)

1. (2,5) across y  
   **Answer:** (−2,5)

2. (−3,4) across x  
   **Answer:** (−3,−4)

3. (1,1) across origin  
   **Answer:** (−1,−1)

## Independent practice

Complete each item. Show your work.

1. Reflect (1, 6) across the x-axis and across the y-axis. Give both image coordinates.
2. Reflect (1, 2) across the x-axis and across the y-axis. Give both image coordinates.
3. Reflect (1, 5) across the x-axis and across the y-axis. Give both image coordinates.
4. Reflect (9, 6) across the x-axis and across the y-axis. Give both image coordinates.
5. Reflect (9, 9) across the x-axis and across the y-axis. Give both image coordinates.
6. Reflect (9, 12) across the x-axis and across the y-axis. Give both image coordinates.

### Answer key (try first)

1. Across x-axis: (1, -6). Across y-axis: (-1, 6).
2. Across x-axis: (1, -2). Across y-axis: (-1, 2).
3. Across x-axis: (1, -5). Across y-axis: (-1, 5).
4. Across x-axis: (9, -6). Across y-axis: (-9, 6).
5. Across x-axis: (9, -9). Across y-axis: (-9, 9).
6. Across x-axis: (9, -12). Across y-axis: (-9, 12).

## Exit ticket

1. Reflect (6,−2) across y.
2. Reflect (−5,3) across x.

## Stretch (optional)

3-step reflection path.
', "objectives" = '• Reflect points across axes.
• Describe coordinate changes.
• Reflect across origin as extension.', "description" = 'Reflect across axes; describe coordinate changes.' WHERE "id" = 'ppg6me06345b63e08242eadae' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m2fb5190a7e0b85e23547','ppg6me06345b63e08242eadae',NULL,'MULTIPLE_CHOICE','(3,2) across y','["(3,−2)","(−3,2)","(−3,−2)","(2,3)"]',1,'(−3,2).',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mb2944d5110054e73bb0e','ppg6me06345b63e08242eadae',NULL,'MULTIPLE_CHOICE','(4,−1) across x','["(−4,−1)","(4,1)","(−4,1)","(1,4)"]',1,'(4,1).',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m42923bab8820654225d0','ppg6me06345b63e08242eadae',NULL,'MULTIPLE_CHOICE','Origin reflect (1,1)','["(1,−1)","(−1,1)","(−1,−1)","(0,0)"]',2,'(−1,−1).',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L4. Distances on Horizontal and Vertical Segments (ppg6m09397d5abb407b02330e)
UPDATE "Lesson" SET "content" = '# Distances on Horizontal and Vertical Segments

*Grade 6 Mathematics · Unit 9 of 11 · Coordinate Plane · Lesson 4*

## Objective

**I can** find lengths of horizontal/vertical segments.

## Warm-up (2 minutes)

From (1,2) to (1,7) — how long?

## Teach

### Big idea

Vertical |y2−y1|; horizontal |x2−x1|.

### Example 1

|7−2|=5.

### Try this

(3,4) to (9,4)?

**Check:** 6

### Example 2

(−2,5) to (−2,−1) → 6.

### Common mistake (this lesson only)

Reporting negative length.

## Guided practice (we do)

1. (0,0) to (0,4)  
   **Answer:** 4

2. (2,3) to (2,−2)  
   **Answer:** 5

3. (−1,0) to (4,0)  
   **Answer:** 5

## Independent practice

Complete each item. Show your work.

1. Find the distance between (3, 6) and (3, 13) (vertical). Then between (3, 6) and (11, 6) (horizontal).
2. Find the distance between (3, 1) and (3, 10) (vertical). Then between (3, 1) and (11, 1) (horizontal).
3. Find the distance between (3, 5) and (3, 15) (vertical). Then between (3, 5) and (11, 5) (horizontal).
4. Find the distance between (3, 8) and (3, 19) (vertical). Then between (3, 8) and (11, 8) (horizontal).
5. Find the distance between (3, 11) and (3, 23) (vertical). Then between (3, 11) and (11, 11) (horizontal).
6. Find the distance between (3, 7) and (3, 21) (vertical). Then between (3, 7) and (11, 7) (horizontal).

### Answer key (try first)

1. Vertical distance 7; horizontal 8.
2. Vertical distance 9; horizontal 8.
3. Vertical distance 10; horizontal 8.
4. Vertical distance 11; horizontal 8.
5. Vertical distance 12; horizontal 8.
6. Vertical distance 14; horizontal 8.

## Exit ticket

1. Distance (5,1) to (5,8).
2. Distance (−3,2) to (6,2).

## Stretch (optional)

Why diagonals need other tools.
', "objectives" = '• Find lengths of horizontal/vertical segments.
• Use absolute difference of coordinates.
• Avoid diagonal distance (later).', "description" = 'Find lengths of axis-aligned segments.' WHERE "id" = 'ppg6m09397d5abb407b02330e' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m214e19fb4927dc598b04','ppg6m09397d5abb407b02330e',NULL,'MULTIPLE_CHOICE','(1,2) to (1,7)','["5","6","3","9"]',0,'5.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m6ce50bbc11be64e88a37','ppg6m09397d5abb407b02330e',NULL,'MULTIPLE_CHOICE','(3,4) to (9,4)','["6","12","5","7"]',0,'6.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mb5db2ef8dfbd4052d89d','ppg6m09397d5abb407b02330e',NULL,'MULTIPLE_CHOICE','Axis-aligned length','["x+y","|difference|","Product","Always 1"]',1,'Abs diff.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L5. Polygons on the Coordinate Plane (ppg6m88e4bd6991286bf4d150)
UPDATE "Lesson" SET "content" = '# Polygons on the Coordinate Plane

*Grade 6 Mathematics · Unit 9 of 11 · Coordinate Plane · Lesson 5*

## Objective

**I can** plot polygons from vertices.

## Warm-up (2 minutes)

Vertices (0,0),(4,0),(4,3),(0,3) — shape and area?

## Teach

### Big idea

Connect vertices; use Δx/Δy; rectangle area L×W.

### Example 1

Rectangle 4 by 3 → area 12.

### Try this

Triangle (0,0),(6,0),(0,4) area?

**Check:** 12

### Example 2

Check sides before calling a figure a square.

### Common mistake (this lesson only)

Assuming every quadrilateral is a rectangle.

## Guided practice (we do)

1. Rectangle 5×2 area  
   **Answer:** 10

2. Perimeter 4×3 rectangle  
   **Answer:** 14

3. List vertices carefully  
   **Answer:** Yes

## Independent practice

Complete each item. Show your work.

1. Vertices (0,0), (5,0), (5,7), (0,7) form a rectangle. Find side lengths and area.
2. Vertices (0,0), (12,0), (12,7), (0,7) form a rectangle. Find side lengths and area.
3. Vertices (0,0), (5,0), (5,6), (0,6) form a rectangle. Find side lengths and area.
4. Vertices (0,0), (11,0), (11,11), (0,11) form a rectangle. Find side lengths and area.
5. Vertices (0,0), (13,0), (13,10), (0,10) form a rectangle. Find side lengths and area.
6. Vertices (0,0), (11,0), (11,10), (0,10) form a rectangle. Find side lengths and area.

### Answer key (try first)

1. Sides 5 and 7; area 35.
2. Sides 12 and 7; area 84.
3. Sides 5 and 6; area 30.
4. Sides 11 and 11; area 121.
5. Sides 13 and 10; area 130.
6. Sides 11 and 10; area 110.

## Exit ticket

1. Area (1,1),(5,1),(5,4),(1,4).
2. Perimeter same.

## Stretch (optional)

Non-aligned side warning.
', "objectives" = '• Plot polygons from vertices.
• Find axis-aligned side lengths.
• Compute area of axis-aligned rectangles.', "description" = 'Plot vertices and compute side lengths/areas when aligned.' WHERE "id" = 'ppg6m88e4bd6991286bf4d150' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mce478d50009b0507f125','ppg6m88e4bd6991286bf4d150',NULL,'MULTIPLE_CHOICE','4×3 rectangle area','["12","7","14","24"]',0,'12.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m3ba6d7346b7a34b63ae1','ppg6m88e4bd6991286bf4d150',NULL,'MULTIPLE_CHOICE','Triangle legs 6 and 4','["24","12","10","5"]',1,'12.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m3367b1f811f78ca3b563','ppg6m88e4bd6991286bf4d150',NULL,'MULTIPLE_CHOICE','Sides from','["Diagonals only","Δx and Δy","Angles","Circumference"]',1,'Δx, Δy.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L6. Coordinate Plane Stories (ppg6m2590efebb35ec9d6ab17)
UPDATE "Lesson" SET "content" = '# Coordinate Plane Stories

*Grade 6 Mathematics · Unit 9 of 11 · Coordinate Plane · Lesson 6*

## Objective

**I can** interpret points in context.

## Warm-up (2 minutes)

A map uses (0,0) as the school. What could (−2,3) mean?

## Teach

### Big idea

Context turns coordinates into locations and moves.

### Example 1

School at (0,0); library at (2,1) is 2 east, 1 north if +x east +y north.

### Try this

Path from (0,0) to (3,0) to (3,2) — describe.

**Check:** 3 east, then 2 north

### Example 2

A treasure at (−4,−1) is west and south of school.

### Common mistake (this lesson only)

Ignoring the story’s direction agreement.

## Guided practice (we do)

1.  (0,0) meaning   
   **Answer:** Origin/start

2. East 4 if +x east  
   **Answer:** (4,y)

3. South 2 if +y north  
   **Answer:** negative y

## Independent practice

Complete each item. Show your work.

1. A map uses (0,0) at school. The library is (10, 0) and the park is (10, -3). How far is library to park (vertical path)?
2. A map uses (0,0) at school. The library is (8, 0) and the park is (8, -5). How far is library to park (vertical path)?
3. A map uses (0,0) at school. The library is (10, 6) and the park is (10, -6). How far is library to park (vertical path)?
4. A map uses (0,0) at school. The library is (8, 6) and the park is (8, -7). How far is library to park (vertical path)?
5. A map uses (0,0) at school. The library is (10, 5) and the park is (10, -8). How far is library to park (vertical path)?
6. A map uses (0,0) at school. The library is (8, 5) and the park is (8, -10). How far is library to park (vertical path)?

### Answer key (try first)

1. Distance |0−(-3)| = 3 blocks (same x).
2. Distance |0−(-5)| = 5 blocks (same x).
3. Distance |6−(-6)| = 12 blocks (same x).
4. Distance |6−(-7)| = 13 blocks (same x).
5. Distance |5−(-8)| = 13 blocks (same x).
6. Distance |5−(-10)| = 15 blocks (same x).

## Exit ticket

1. Story for (5,−2).
2. Path of three points.

## Stretch (optional)

Make a campus map with 4 landmarks.
', "objectives" = '• Interpret points in context.
• Describe paths with ordered pairs.
• Connect signs to directions in a story.', "description" = 'Interpret points and paths in real contexts on the plane.' WHERE "id" = 'ppg6m2590efebb35ec9d6ab17' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m477ebca60e4014fb1147','ppg6m2590efebb35ec9d6ab17',NULL,'MULTIPLE_CHOICE','If +x is east, (3,0) is','["3 west","3 east","3 north","Origin"]',1,'East.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m786bc5032390dd5683cb','ppg6m2590efebb35ec9d6ab17',NULL,'MULTIPLE_CHOICE','Path (0,0)→(0,4)','["4 east","4 north if +y north","4 south","4 west"]',1,'North.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m4d9b1545f071b90aa4e7','ppg6m2590efebb35ec9d6ab17',NULL,'MULTIPLE_CHOICE','(−2,3) from school','["West and north","East and south","Only west","Only south"]',0,'West+north.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L7. From Tables to Graphs (ppg6mb5451b90490780f01a06)
UPDATE "Lesson" SET "content" = '# From Tables to Graphs

*Grade 6 Mathematics · Unit 9 of 11 · Coordinate Plane · Lesson 7*

## Objective

**I can** plot (x,y) pairs from a table.

## Warm-up (2 minutes)

Table x:1,2,3 y:2,4,6 — what do you expect for x=4?

## Teach

### Big idea

Each row becomes a point; patterns may form lines.

### Example 1

Points (1,2),(2,4),(3,6) lie on a line; y=2x.

### Try this

Plot (0,1),(1,3),(2,5). Pattern?

**Check:** y=2x+1

### Example 2

Read y when x=2 from the graph.

### Common mistake (this lesson only)

Connecting points randomly without checking the table order.

## Guided practice (we do)

1. Next in 2,4,6  
   **Answer:** 8

2. Point for x=0 y=5  
   **Answer:** (0,5)

3. Collinear meaning  
   **Answer:** On one line

## Independent practice

Complete each item. Show your work.

1. Ratio table x: 1,2,3 and y: 7,14,21. Plot the three points. What pattern do you see?
2. Ratio table x: 1,2,3 and y: 5,10,15. Plot the three points. What pattern do you see?
3. Ratio table x: 1,2,3 and y: 7,14,21. Plot the three points. What pattern do you see?
4. Ratio table x: 1,2,3 and y: 14,28,42. Plot the three points. What pattern do you see?
5. Ratio table x: 1,2,3 and y: 7,14,21. Plot the three points. What pattern do you see?
6. Ratio table x: 1,2,3 and y: 14,28,42. Plot the three points. What pattern do you see?

### Answer key (try first)

1. Points (1,7), (2,14), (3,21); y = 7x (line through origin).
2. Points (1,5), (2,10), (3,15); y = 5x (line through origin).
3. Points (1,7), (2,14), (3,21); y = 7x (line through origin).
4. Points (1,14), (2,28), (3,42); y = 14x (line through origin).
5. Points (1,7), (2,14), (3,21); y = 7x (line through origin).
6. Points (1,14), (2,28), (3,42); y = 14x (line through origin).

## Exit ticket

1. Plot a 4-row table.
2. Predict one more point.

## Stretch (optional)

Table that is not linear.
', "objectives" = '• Plot (x,y) pairs from a table.
• Notice linear patterns when points align.
• Read a value from a graph.', "description" = 'Plot table pairs and notice patterns on the plane.' WHERE "id" = 'ppg6mb5451b90490780f01a06' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6me0432c232c6370e0d51b','ppg6mb5451b90490780f01a06',NULL,'MULTIPLE_CHOICE','For y=2x, x=4 →','["6","8","4","2"]',1,'8.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6md83bf7780fa0cace3a7c','ppg6mb5451b90490780f01a06',NULL,'MULTIPLE_CHOICE','Table row x=2 y=5 → point','["(5,2)","(2,5)","(0,5)","(2,0)"]',1,'(2,5).',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m15bab4932626cef20057','ppg6mb5451b90490780f01a06',NULL,'MULTIPLE_CHOICE','Points of y=2x+1 include','["(0,1)","(1,1)","(2,2)","(0,0)"]',0,'(0,1).',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 9 L8. Coordinate Plane Unit Review (ppg6m2a3fe367839fe1dfff68)
UPDATE "Lesson" SET "content" = '# Coordinate Plane Unit Review

*Grade 6 Mathematics · Unit 9 of 11 · Coordinate Plane · Lesson 8*

## Objective

**I can** plot/read points and name quadrants.

## Warm-up (2 minutes)

Plot (2,−3), name its quadrant, reflect across x.

## Teach

### Big idea

Quadrants, reflections, distances, simple areas, tables→graphs.

### Example 1

(2,−3) is IV; across x → (2,3); distance to (2,0) is 3.

### Try this

Area of rectangle (0,0),(5,0),(5,2),(0,2).

**Check:** 10

### Example 2

Quadrant of (−4,1) is II.

### Common mistake (this lesson only)

Swapping coordinates on review plots.

## Guided practice (we do)

1. (−2,−5) quadrant  
   **Answer:** III

2. Reflect (3,4) across y  
   **Answer:** (−3,4)

3. Vertical (0,1) to (0,6)  
   **Answer:** 5

## Independent practice

Complete each item. Show your work.

1. Review: Quadrant of (-5,6); distance from (0,6) to (0,-7).
2. Review: Quadrant of (-9,8); distance from (0,8) to (0,-7).
3. Review: Quadrant of (-9,11); distance from (0,11) to (0,-8).
4. Review: Quadrant of (-8,5); distance from (0,5) to (0,-8).
5. Review: Quadrant of (-8,1); distance from (0,1) to (0,-3).
6. Review: Quadrant of (-12,3); distance from (0,3) to (0,-10).

### Answer key (try first)

1. QII; distance 13.
2. QII; distance 15.
3. QII; distance 19.
4. QII; distance 13.
5. QII; distance 4.
6. QII; distance 13.

## Exit ticket

1. Plot (−3,2); quadrant; distance to (−3,−2).
2. Rectangle area from vertices.

## Stretch (optional)

4-point polygon challenge.
', "objectives" = '• Plot/read points and name quadrants.
• Reflect and measure axis-aligned distances.
• Find simple polygon areas on the grid.', "description" = 'Mixed plotting, reflecting, and segment work.' WHERE "id" = 'ppg6m2a3fe367839fe1dfff68' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m98b98da34221c75b7d44','ppg6m2a3fe367839fe1dfff68',NULL,'MULTIPLE_CHOICE','(2,−3) quadrant','["I","II","III","IV"]',3,'IV.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m40a6fe866c4a906e954a','ppg6m2a3fe367839fe1dfff68',NULL,'MULTIPLE_CHOICE','(2,−3) across x','["(−2,−3)","(2,3)","(−2,3)","(3,2)"]',1,'(2,3).',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m8a367942a4770f6da5c5','ppg6m2a3fe367839fe1dfff68',NULL,'MULTIPLE_CHOICE','5×2 rectangle area','["10","7","14","25"]',0,'10.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L1. Prisms and Pyramids Overview (ppg6mcf6a3bf283f77ee6d893)
UPDATE "Lesson" SET "content" = '# Prisms and Pyramids Overview

*Grade 6 Mathematics · Unit 10 of 11 · 3D Figures · Lesson 1*

## Objective

**I can** distinguish prisms from pyramids.

## Warm-up (2 minutes)

How is a triangular prism different from a triangular pyramid?

## Teach

### Big idea

Prism: two parallel congruent bases. Pyramid: one base; lateral faces meet at an apex.

### Example 1

Rectangular prism has 6 faces, 12 edges, 8 vertices.

### Try this

Pyramid with square base — lateral faces?

**Check:** 4 triangles

### Example 2

A cube is a special rectangular prism.

### Common mistake (this lesson only)

Calling any 3D figure a prism.

## Guided practice (we do)

1. Prism bases  
   **Answer:** 2 parallel congruent

2. Pyramid apex  
   **Answer:** Yes

3. Cube faces  
   **Answer:** 6

## Independent practice

Complete each item. Show your work.

1. A rectangular prism has how many faces, edges, and vertices? A square pyramid has how many faces? (Count carefully.)
2. A rectangular prism has how many faces, edges, and vertices? A square pyramid has how many faces? (Count carefully.)
3. A rectangular prism has how many faces, edges, and vertices? A square pyramid has how many faces? (Count carefully.)
4. A rectangular prism has how many faces, edges, and vertices? A square pyramid has how many faces? (Count carefully.)
5. A rectangular prism has how many faces, edges, and vertices? A square pyramid has how many faces? (Count carefully.)
6. A rectangular prism has how many faces, edges, and vertices? A square pyramid has how many faces? (Count carefully.)

### Answer key (try first)

1. Prism: 6 faces, 12 edges, 8 vertices. Square pyramid: 5 faces (4 triangles + 1 square).
2. Prism: 6 faces, 12 edges, 8 vertices. Square pyramid: 5 faces (4 triangles + 1 square).
3. Prism: 6 faces, 12 edges, 8 vertices. Square pyramid: 5 faces (4 triangles + 1 square).
4. Prism: 6 faces, 12 edges, 8 vertices. Square pyramid: 5 faces (4 triangles + 1 square).
5. Prism: 6 faces, 12 edges, 8 vertices. Square pyramid: 5 faces (4 triangles + 1 square).
6. Prism: 6 faces, 12 edges, 8 vertices. Square pyramid: 5 faces (4 triangles + 1 square).

## Exit ticket

1. Name prism vs pyramid in pictures.
2. Cube edges count.

## Stretch (optional)

Net preview: unfold a prism.
', "objectives" = '• Distinguish prisms from pyramids.
• Name bases and lateral faces.
• Count faces/edges/vertices for rectangular prisms.', "description" = 'Identify prisms vs pyramids and name bases/faces.' WHERE "id" = 'ppg6mcf6a3bf283f77ee6d893' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m69bbd96f51e015736f7d','ppg6mcf6a3bf283f77ee6d893',NULL,'MULTIPLE_CHOICE','Rectangular prism faces','["4","5","6","8"]',2,'6.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m353010e811df1c129f19','ppg6mcf6a3bf283f77ee6d893',NULL,'MULTIPLE_CHOICE','Pyramid has how many bases?','["0","1","2","3"]',1,'1.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m5b975137028d8328f7d7','ppg6mcf6a3bf283f77ee6d893',NULL,'MULTIPLE_CHOICE','Cube is a','["Pyramid","Cylinder","Rectangular prism","Cone"]',2,'Prism.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L2. Nets of Rectangular Prisms (ppg6m9afc3cc6f153e1d58e43)
UPDATE "Lesson" SET "content" = '# Nets of Rectangular Prisms

*Grade 6 Mathematics · Unit 10 of 11 · 3D Figures · Lesson 2*

## Objective

**I can** recognize nets of rectangular prisms.

## Warm-up (2 minutes)

Can six identical squares fold to a cube? Which arrangements fail?

## Teach

### Big idea

A net is a 2D unfolding that folds to the solid without overlap.

### Example 1

Cube nets: 11 hexomino types work; a straight chain of 6 does not.

### Try this

Net with a cross of 5 squares +1 — valid cube?

**Check:** Often yes if arranged properly

### Example 2

Rectangular prism net uses rectangles matching face dimensions.

### Common mistake (this lesson only)

Drawing a net that overlaps when folded.

## Guided practice (we do)

1. Cube faces in net  
   **Answer:** 6 squares

2. Valid net test  
   **Answer:** Folds without overlap

3. Long chain of 6  
   **Answer:** Invalid for cube

## Independent practice

Complete each item. Show your work.

1. For a 9×-1×3 rectangular prism, describe a valid net (list face sizes). Name one arrangement that would NOT fold into the prism.
2. For a 11×-2×4 rectangular prism, describe a valid net (list face sizes). Name one arrangement that would NOT fold into the prism.
3. For a 13×5×4 rectangular prism, describe a valid net (list face sizes). Name one arrangement that would NOT fold into the prism.
4. For a 12×14×14 rectangular prism, describe a valid net (list face sizes). Name one arrangement that would NOT fold into the prism.
5. For a 14×13×15 rectangular prism, describe a valid net (list face sizes). Name one arrangement that would NOT fold into the prism.
6. For a 16×11×16 rectangular prism, describe a valid net (list face sizes). Name one arrangement that would NOT fold into the prism.

### Answer key (try first)

1. Valid net uses faces: two 9×-1, two 9×3, two -1×3 without overlapping when folded. Invalid: e.g. more than 4 faces in a row that overlap when folded.
2. Valid net uses faces: two 11×-2, two 11×4, two -2×4 without overlapping when folded. Invalid: e.g. more than 4 faces in a row that overlap when folded.
3. Valid net uses faces: two 13×5, two 13×4, two 5×4 without overlapping when folded. Invalid: e.g. more than 4 faces in a row that overlap when folded.
4. Valid net uses faces: two 12×14, two 12×14, two 14×14 without overlapping when folded. Invalid: e.g. more than 4 faces in a row that overlap when folded.
5. Valid net uses faces: two 14×13, two 14×15, two 13×15 without overlapping when folded. Invalid: e.g. more than 4 faces in a row that overlap when folded.
6. Valid net uses faces: two 16×11, two 16×16, two 11×16 without overlapping when folded. Invalid: e.g. more than 4 faces in a row that overlap when folded.

## Exit ticket

1. Sketch a cube net.
2. Mark which face is opposite.

## Stretch (optional)

Design a rectangular (non-cube) prism net.
', "objectives" = '• Recognize nets of rectangular prisms.
• Draw a valid net.
• Reject nets that leave gaps/overlaps when folded.', "description" = 'Recognize and draw nets that fold to a rectangular prism.' WHERE "id" = 'ppg6m9afc3cc6f153e1d58e43' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m6359eb2b3ddc8cfccad0','ppg6m9afc3cc6f153e1d58e43',NULL,'MULTIPLE_CHOICE','Cube net needs','["4 squares","6 squares","8 squares","1 square"]',1,'6.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mfa3d643f87278ca66e93','ppg6m9afc3cc6f153e1d58e43',NULL,'MULTIPLE_CHOICE','Chain of 6 squares for cube?','["Always valid","Invalid","Only if colored","Only 3D"]',1,'Invalid.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mced1678806360e764161','ppg6m9afc3cc6f153e1d58e43',NULL,'MULTIPLE_CHOICE','Net means','["Perspective drawing","2D unfolding","Volume","Diagonal"]',1,'Unfolding.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L3. Surface Area from Nets (ppg6maff3ce219a86bd886c61)
UPDATE "Lesson" SET "content" = '# Surface Area from Nets

*Grade 6 Mathematics · Unit 10 of 11 · 3D Figures · Lesson 3*

## Objective

**I can** find surface area from a net.

## Warm-up (2 minutes)

Net shows faces 4×3, 4×3, 5×3 twice, 5×4 twice — total area?

## Teach

### Big idea

Surface area = sum of areas of all faces (net makes them visible).

### Example 1

2(4×3)+2(5×3)+2(5×4)=24+30+40=94.

### Try this

Cube edge 2 — SA from net?

**Check:** 6×4=24

### Example 2

Count each face once.

### Common mistake (this lesson only)

Forgetting a face that is behind in a 3D sketch (nets help avoid that).

## Guided practice (we do)

1. Cube edge 3 SA  
   **Answer:** 54

2. Sum faces carefully  
   **Answer:** Yes

3. Units  
   **Answer:** Square

## Independent practice

Complete each item. Show your work.

1. For a 4×8×7 rectangular prism, describe a valid net (list face sizes). Name one arrangement that would NOT fold into the prism.
2. For a 8×10×7 rectangular prism, describe a valid net (list face sizes). Name one arrangement that would NOT fold into the prism.
3. For a 8×13×8 rectangular prism, describe a valid net (list face sizes). Name one arrangement that would NOT fold into the prism.
4. For a 12×7×9 rectangular prism, describe a valid net (list face sizes). Name one arrangement that would NOT fold into the prism.
5. For a 12×11×10 rectangular prism, describe a valid net (list face sizes). Name one arrangement that would NOT fold into the prism.
6. For a 16×13×10 rectangular prism, describe a valid net (list face sizes). Name one arrangement that would NOT fold into the prism.

### Answer key (try first)

1. Valid net uses faces: two 4×8, two 4×7, two 8×7 without overlapping when folded. Invalid: e.g. more than 4 faces in a row that overlap when folded.
2. Valid net uses faces: two 8×10, two 8×7, two 10×7 without overlapping when folded. Invalid: e.g. more than 4 faces in a row that overlap when folded.
3. Valid net uses faces: two 8×13, two 8×8, two 13×8 without overlapping when folded. Invalid: e.g. more than 4 faces in a row that overlap when folded.
4. Valid net uses faces: two 12×7, two 12×9, two 7×9 without overlapping when folded. Invalid: e.g. more than 4 faces in a row that overlap when folded.
5. Valid net uses faces: two 12×11, two 12×10, two 11×10 without overlapping when folded. Invalid: e.g. more than 4 faces in a row that overlap when folded.
6. Valid net uses faces: two 16×13, two 16×10, two 13×10 without overlapping when folded. Invalid: e.g. more than 4 faces in a row that overlap when folded.

## Exit ticket

1. SA from a labeled net.
2. Cube edge 5 SA.

## Stretch (optional)

Explain why nets prevent missing faces.
', "objectives" = '• Find surface area from a net.
• Sum all face areas.
• Use square units.', "description" = 'Compute surface area by summing net face areas.' WHERE "id" = 'ppg6maff3ce219a86bd886c61' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m300aaf69fdbfaefa68b8','ppg6maff3ce219a86bd886c61',NULL,'MULTIPLE_CHOICE','Cube edge 2 SA','["8","24","12","16"]',1,'24.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6me3f3630349bc488304b0','ppg6maff3ce219a86bd886c61',NULL,'MULTIPLE_CHOICE','SA means','["Volume","Sum of face areas","Perimeter","Diagonal"]',1,'Face areas.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mec91bc67c874aa512a53','ppg6maff3ce219a86bd886c61',NULL,'MULTIPLE_CHOICE','2(4×3)+2(5×3)+2(5×4)','["94","47","60","80"]',0,'94.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L4. Surface Area Formula for Rectangular Prisms (ppg6m40167e8bbe452abbef29)
UPDATE "Lesson" SET "content" = '# Surface Area Formula for Rectangular Prisms

*Grade 6 Mathematics · Unit 10 of 11 · 3D Figures · Lesson 4*

## Objective

**I can** use SA=2(lw+lh+wh) for rectangular prisms.

## Warm-up (2 minutes)

Prism 5×3×2 — compute SA two ways.

## Teach

### Big idea

Opposite faces match: SA=2(lw+lh+wh).

### Example 1

2(5·3+5·2+3·2)=2(15+10+6)=62.

### Try this

4×4×4 cube with formula.

**Check:** 2(16+16+16)=96

### Example 2

Verify by net for small numbers.

### Common mistake (this lesson only)

Adding lw+lh+wh without multiplying by 2.

## Guided practice (we do)

1. 3×2×1 SA  
   **Answer:** 2(6+3+2)=22

2. Missing ×2 error  
   **Answer:** Halves SA

3. Cube s SA  
   **Answer:** 6s^2

## Independent practice

Complete each item. Show your work.

1. Use SA = 2lw+2lh+2wh for l=6, w=6, h=11. Show each pair of faces.
2. Use SA = 2lw+2lh+2wh for l=13, w=6, h=6. Show each pair of faces.
3. Use SA = 2lw+2lh+2wh for l=6, w=12, h=13. Show each pair of faces.
4. Use SA = 2lw+2lh+2wh for l=13, w=12, h=8. Show each pair of faces.
5. Use SA = 2lw+2lh+2wh for l=15, w=11, h=9. Show each pair of faces.
6. Use SA = 2lw+2lh+2wh for l=13, w=11, h=11. Show each pair of faces.

### Answer key (try first)

1. 2(6*6)+2(6*11)+2(6*11) = 336.
2. 2(13*6)+2(13*6)+2(6*6) = 384.
3. 2(6*12)+2(6*13)+2(12*13) = 612.
4. 2(13*12)+2(13*8)+2(12*8) = 712.
5. 2(15*11)+2(15*9)+2(11*9) = 798.
6. 2(13*11)+2(13*11)+2(11*11) = 814.

## Exit ticket

1. SA 6×4×2.
2. Check with face list.

## Stretch (optional)

When is cube formula faster?
', "objectives" = '• Use SA=2(lw+lh+wh) for rectangular prisms.
• Match l,w,h to faces.
• Check with a net sum.', "description" = 'Use SA = 2(lw+lh+wh).' WHERE "id" = 'ppg6m40167e8bbe452abbef29' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m75454384f5a3926315c2','ppg6m40167e8bbe452abbef29',NULL,'MULTIPLE_CHOICE','5×3×2 SA','["30","62","31","60"]',1,'62.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m5b11f0cc3f168bd69fd8','ppg6m40167e8bbe452abbef29',NULL,'MULTIPLE_CHOICE','Formula SA=','["lwh","2(lw+lh+wh)","lw+lh+wh","6lw"]',1,'2(lw+lh+wh).',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mdc43697c786207c20977','ppg6m40167e8bbe452abbef29',NULL,'MULTIPLE_CHOICE','Cube edge 4 SA','["64","96","48","16"]',1,'96.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L5. Volume as Filling Space (ppg6m8f690218cd5b1c458efb)
UPDATE "Lesson" SET "content" = '# Volume as Filling Space

*Grade 6 Mathematics · Unit 10 of 11 · 3D Figures · Lesson 5*

## Objective

**I can** define volume as filling space.

## Warm-up (2 minutes)

How many 1×1×1 cubes pack a 2×3×4 box?

## Teach

### Big idea

Volume measures space inside; unit cubes fill it.

### Example 1

2×3×4=24 unit cubes.

### Try this

Layers: 3 layers of 2×4. Volume?

**Check:** 24

### Example 2

Cubic units: cm^3, in^3.

### Common mistake (this lesson only)

Using square units for volume.

## Guided practice (we do)

1. 1×1×5 volume  
   **Answer:** 5

2. Packing meaning  
   **Answer:** Fill

3. Units  
   **Answer:** Cubic

## Independent practice

Complete each item. Show your work.

1. How many 1×1×1 cubes pack a 7×-3×4 box? Why are units cubic?
2. How many 1×1×1 cubes pack a 9×4×4 box? Why are units cubic?
3. How many 1×1×1 cubes pack a 11×3×5 box? Why are units cubic?
4. How many 1×1×1 cubes pack a 14×4×8 box? Why are units cubic?
5. How many 1×1×1 cubes pack a 16×3×9 box? Why are units cubic?
6. How many 1×1×1 cubes pack a 9×9×10 box? Why are units cubic?

### Answer key (try first)

1. -84 unit cubes. Cubic units measure 3D space/filling.
2. 144 unit cubes. Cubic units measure 3D space/filling.
3. 165 unit cubes. Cubic units measure 3D space/filling.
4. 448 unit cubes. Cubic units measure 3D space/filling.
5. 432 unit cubes. Cubic units measure 3D space/filling.
6. 810 unit cubes. Cubic units measure 3D space/filling.

## Exit ticket

1. Cubes in 3×3×3.
2. Why volume ≠ surface area.

## Stretch (optional)

Build a 12-cube rectangular solid two ways.
', "objectives" = '• Define volume as filling space.
• Count unit cubes.
• Use cubic units.', "description" = 'Interpret volume as filling with unit cubes.' WHERE "id" = 'ppg6m8f690218cd5b1c458efb' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m5e1c80df0810a038febc','ppg6m8f690218cd5b1c458efb',NULL,'MULTIPLE_CHOICE','2×3×4 cubes','["9","24","14","48"]',1,'24.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m9a6995d273b538086b08','ppg6m8f690218cd5b1c458efb',NULL,'MULTIPLE_CHOICE','Volume units','["cm","cm^2","cm^3","no units"]',2,'Cubic.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6ma5f911128ecd100472c4','ppg6m8f690218cd5b1c458efb',NULL,'MULTIPLE_CHOICE','Volume measures','["Covering","Around","Filling space","Angle"]',2,'Filling.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L6. Volume of Rectangular Prisms (ppg6m77731119cf4abb32a696)
UPDATE "Lesson" SET "content" = '# Volume of Rectangular Prisms

*Grade 6 Mathematics · Unit 10 of 11 · 3D Figures · Lesson 6*

## Objective

**I can** compute V=lwh.

## Warm-up (2 minutes)

Base 5×3 and height 2 — volume?

## Teach

### Big idea

V=lwh = (base area)×height.

### Example 1

5×3×2=30.

### Try this

Base area 12, height 4.

**Check:** 48

### Example 2

Cube edge 5 → V=125.

### Common mistake (this lesson only)

Multiplying only two dimensions.

## Guided practice (we do)

1. 6×2×3  
   **Answer:** 36

2. Base 10 height 5  
   **Answer:** 50

3. Cube 3  
   **Answer:** 27

## Independent practice

Complete each item. Show your work.

1. Find volume of a prism with base area 55 square cm and height 9 cm. Also compute l·w·h with l=11, w=5, h=9.
2. Find volume of a prism with base area 45 square cm and height 11 cm. Also compute l·w·h with l=9, w=5, h=11.
3. Find volume of a prism with base area 121 square cm and height 11 cm. Also compute l·w·h with l=11, w=11, h=11.
4. Find volume of a prism with base area 99 square cm and height 13 cm. Also compute l·w·h with l=9, w=11, h=13.
5. Find volume of a prism with base area 110 square cm and height 14 cm. Also compute l·w·h with l=11, w=10, h=14.
6. Find volume of a prism with base area 90 square cm and height 16 cm. Also compute l·w·h with l=9, w=10, h=16.

### Answer key (try first)

1. V = Bh = 495 cm³. Same as 11×5×9.
2. V = Bh = 495 cm³. Same as 9×5×11.
3. V = Bh = 1331 cm³. Same as 11×11×11.
4. V = Bh = 1287 cm³. Same as 9×11×13.
5. V = Bh = 1540 cm³. Same as 11×10×14.
6. V = Bh = 1440 cm³. Same as 9×10×16.

## Exit ticket

1. V of 4×5×6.
2. Base 8 height 3.

## Stretch (optional)

Same volume different dimensions.
', "objectives" = '• Compute V=lwh.
• Use base area × height.
• Include cubic units.', "description" = 'Compute V = lwh and relate to base area × height.' WHERE "id" = 'ppg6m77731119cf4abb32a696' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6meba20fbfa59ccc525d9a','ppg6m77731119cf4abb32a696',NULL,'MULTIPLE_CHOICE','5×3×2 V','["10","30","15","60"]',1,'30.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m2e979577998b505a7e8d','ppg6m77731119cf4abb32a696',NULL,'MULTIPLE_CHOICE','Base 12 height 4 V','["16","48","3","48 only if cube"]',1,'48.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m6bd5156b5a460eb41be7','ppg6m77731119cf4abb32a696',NULL,'MULTIPLE_CHOICE','Cube edge 5 V','["25","15","125","75"]',2,'125.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L7. Surface Area vs Volume (ppg6md86ed4bc4b47fcb6672e)
UPDATE "Lesson" SET "content" = '# Surface Area vs Volume

*Grade 6 Mathematics · Unit 10 of 11 · 3D Figures · Lesson 7*

## Objective

**I can** contrast surface area and volume.

## Warm-up (2 minutes)

Paint for a box vs packing peanuts inside — SA or volume?

## Teach

### Big idea

SA = wrapping/paint (square units). Volume = filling (cubic units).

### Example 1

Prism 2×3×4: V=24, SA=2(6+8+12)=52.

### Try this

Which for gift wrap?

**Check:** Surface area

### Example 2

Which for water in a tank? Volume.

### Common mistake (this lesson only)

Reporting V with cm^2.

## Guided practice (we do)

1. Paint →  
   **Answer:** SA

2. Fill →  
   **Answer:** Volume

3. 2×3×4 V and SA  
   **Answer:** 24 and 52

## Independent practice

Complete each item. Show your work.

1. You wrap a 6×-3×2 gift (ignore overlap). Do you need surface area or volume? You fill the same box with packing peanuts — which measure?
2. You wrap a 13×5×4 gift (ignore overlap). Do you need surface area or volume? You fill the same box with packing peanuts — which measure?
3. You wrap a 6×4×4 gift (ignore overlap). Do you need surface area or volume? You fill the same box with packing peanuts — which measure?
4. You wrap a 12×1×4 gift (ignore overlap). Do you need surface area or volume? You fill the same box with packing peanuts — which measure?
5. You wrap a 14×8×5 gift (ignore overlap). Do you need surface area or volume? You fill the same box with packing peanuts — which measure?
6. You wrap a 12×8×6 gift (ignore overlap). Do you need surface area or volume? You fill the same box with packing peanuts — which measure?

### Answer key (try first)

1. Wrapping → surface area -24. Filling → volume -36.
2. Wrapping → surface area 274. Filling → volume 260.
3. Wrapping → surface area 128. Filling → volume 96.
4. Wrapping → surface area 128. Filling → volume 48.
5. Wrapping → surface area 444. Filling → volume 560.
6. Wrapping → surface area 432. Filling → volume 576.

## Exit ticket

1. Compute both for 3×3×3.
2. Context: shipping fill.

## Stretch (optional)

Two prisms same V different SA.
', "objectives" = '• Contrast surface area and volume.
• Choose the correct measure for a context.
• Compute both for one prism.', "description" = 'Compare what SA and volume measure; avoid mix-ups.' WHERE "id" = 'ppg6md86ed4bc4b47fcb6672e' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m5b6ee9f415d7033beecf','ppg6md86ed4bc4b47fcb6672e',NULL,'MULTIPLE_CHOICE','Gift wrap needs','["Volume","Surface area","Mass","Speed"]',1,'SA.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m2f058e9a11927609ba07','ppg6md86ed4bc4b47fcb6672e',NULL,'MULTIPLE_CHOICE','Tank water needs','["SA","Volume","Perimeter","Net only"]',1,'Volume.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m9151648cd2d7d3ca581a','ppg6md86ed4bc4b47fcb6672e',NULL,'MULTIPLE_CHOICE','2×3×4 volume','["24","52","9","48"]',0,'24.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 10 L8. 3D Figures Unit Review (ppg6m98e42397aa625b8a287b)
UPDATE "Lesson" SET "content" = '# 3D Figures Unit Review

*Grade 6 Mathematics · Unit 10 of 11 · 3D Figures · Lesson 8*

## Objective

**I can** identify prisms and use nets.

## Warm-up (2 minutes)

Name one SA formula and one volume formula from this unit.

## Teach

### Big idea

Nets; SA=2(lw+lh+wh); V=lwh; units matter.

### Example 1

Cube edge 3: V=27, SA=54.

### Try this

Prism 5×2×2 — V and SA.

**Check:** 20; 2(10+10+4)=48

### Example 2

Paint vs fill decision.

### Common mistake (this lesson only)

Mixing SA and V numbers.

## Guided practice (we do)

1. Cube edge 2 V  
   **Answer:** 8

2. Cube edge 2 SA  
   **Answer:** 24

3. Net purpose  
   **Answer:** Show faces

## Independent practice

Complete each item. Show your work.

1. Review: SA and volume for 6×9×7 prism.
2. Review: SA and volume for 10×11×7 prism.
3. Review: SA and volume for 10×6×9 prism.
4. Review: SA and volume for 14×8×9 prism.
5. Review: SA and volume for 14×12×10 prism.
6. Review: SA and volume for 9×14×10 prism.

### Answer key (try first)

1. SA=318; V=378.
2. SA=514; V=770.
3. SA=408; V=540.
4. SA=620; V=1008.
5. SA=856; V=1680.
6. SA=712; V=1260.

## Exit ticket

1. SA and V for 4×3×2.
2. Valid cube net sketch.

## Stretch (optional)

Error hunt: student used slant as height in 3D.
', "objectives" = '• Identify prisms and use nets.
• Compute SA and volume.
• Match measures to contexts.', "description" = 'Mixed nets, surface area, and volume practice.' WHERE "id" = 'ppg6m98e42397aa625b8a287b' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m7a384c76b0b94ebb5aab','ppg6m98e42397aa625b8a287b',NULL,'MULTIPLE_CHOICE','Cube edge 3 V','["9","27","18","54"]',1,'27.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m23e8b5cbc61ca35be5d5','ppg6m98e42397aa625b8a287b',NULL,'MULTIPLE_CHOICE','Cube edge 3 SA','["27","54","36","9"]',1,'54.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m0b63a99413a6533d163d','ppg6m98e42397aa625b8a287b',NULL,'MULTIPLE_CHOICE','V formula rectangular prism','["2(lw+lh+wh)","lwh","lw+lh+wh","6lw"]',1,'lwh.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 11 L1. Statistical Questions (ppg6mc645921c33a365114282)
UPDATE "Lesson" SET "content" = '# Statistical Questions

*Grade 6 Mathematics · Unit 11 of 11 · Data and Statistics · Lesson 1*

## Objective

**I can** distinguish statistical vs non-statistical questions.

## Warm-up (2 minutes)

Which anticipates variability: “How tall is Ms. Lee?” vs “How tall are Grade 6 students?”

## Teach

### Big idea

Statistical questions anticipate varied answers in a data set.

### Example 1

“How tall are Grade 6 students?” is statistical; one person’s height is not.

### Try this

Is “What is 7+5?” statistical?

**Check:** No

### Example 2

“How many pets do students have?” — statistical.

### Common mistake (this lesson only)

Thinking any question with a number is statistical.

## Guided practice (we do)

1. Varying answers?  
   **Answer:** Statistical

2. Exact one fact?  
   **Answer:** Often not statistical

3. Rewrite “How old is Jordan?”  
   **Answer:** Ages of students in class

## Independent practice

Complete each item. Show your work.

1. Which is statistical (anticipates variability)? (A) “How tall is our flagpole?” (B) “How tall are the Grade 6 students in advisory?” Explain.
2. Which is statistical (anticipates variability)? (A) “How tall is our flagpole?” (B) “How tall are the Grade 6 students in advisory?” Explain.
3. Which is statistical (anticipates variability)? (A) “How tall is our flagpole?” (B) “How tall are the Grade 6 students in advisory?” Explain.
4. Which is statistical (anticipates variability)? (A) “How tall is our flagpole?” (B) “How tall are the Grade 6 students in advisory?” Explain.
5. Which is statistical (anticipates variability)? (A) “How tall is our flagpole?” (B) “How tall are the Grade 6 students in advisory?” Explain.
6. Which is statistical (anticipates variability)? (A) “How tall is our flagpole?” (B) “How tall are the Grade 6 students in advisory?” Explain.

### Answer key (try first)

1. (B) is statistical — heights vary across students. (A) has a single measured answer.
2. (B) is statistical — heights vary across students. (A) has a single measured answer.
3. (B) is statistical — heights vary across students. (A) has a single measured answer.
4. (B) is statistical — heights vary across students. (A) has a single measured answer.
5. (B) is statistical — heights vary across students. (A) has a single measured answer.
6. (B) is statistical — heights vary across students. (A) has a single measured answer.

## Exit ticket

1. Label 4 questions.
2. Rewrite one to be statistical.

## Stretch (optional)

Survey topic for your class.
', "objectives" = '• Distinguish statistical vs non-statistical questions.
• Explain variability.
• Rewrite a non-statistical question to make it statistical.', "description" = 'Distinguish questions that anticipate variability.' WHERE "id" = 'ppg6mc645921c33a365114282' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mddc34bad1e138fc60394','ppg6mc645921c33a365114282',NULL,'MULTIPLE_CHOICE','Grade 6 heights question','["Not statistical","Statistical","Equation","Net"]',1,'Statistical.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6me0b124a627895078c1cf','ppg6mc645921c33a365114282',NULL,'MULTIPLE_CHOICE','7+5 statistical?','["Yes","No","Sometimes","Only odd"]',1,'No.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m68222dfe0f275934a9ec','ppg6mc645921c33a365114282',NULL,'MULTIPLE_CHOICE','Pets students have','["Statistical","Never","Formula","Area"]',0,'Statistical.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 11 L2. Collecting and Organizing Data (ppg6m2727b74190c2f0e0799f)
UPDATE "Lesson" SET "content" = '# Collecting and Organizing Data

*Grade 6 Mathematics · Unit 11 of 11 · Data and Statistics · Lesson 2*

## Objective

**I can** plan data collection.

## Warm-up (2 minutes)

How would you record favorite lunch options for 20 students?

## Teach

### Big idea

Decide the question, collect consistently, organize (tally → frequency table).

### Example 1

Tallies for pizza, salad, sandwich → frequencies.

### Try this

Frequency of a category with |||| =?

**Check:** 4

### Example 2

Categories should not overlap.

### Common mistake (this lesson only)

Changing categories mid-collection.

## Guided practice (we do)

1. Tally ||||- =5  
   **Answer:** 5

2. Frequency table purpose  
   **Answer:** Counts by category

3. Clear categories  
   **Answer:** Non-overlapping

## Independent practice

Complete each item. Show your work.

1. Make a tally table idea for favorite lunch among {pizza, salad, sandwich} after surveying 9 classmates. Why might surveying only the basketball team be unfair?
2. Make a tally table idea for favorite lunch among {pizza, salad, sandwich} after surveying 10 classmates. Why might surveying only the basketball team be unfair?
3. Make a tally table idea for favorite lunch among {pizza, salad, sandwich} after surveying 11 classmates. Why might surveying only the basketball team be unfair?
4. Make a tally table idea for favorite lunch among {pizza, salad, sandwich} after surveying 12 classmates. Why might surveying only the basketball team be unfair?
5. Make a tally table idea for favorite lunch among {pizza, salad, sandwich} after surveying 13 classmates. Why might surveying only the basketball team be unfair?
6. Make a tally table idea for favorite lunch among {pizza, salad, sandwich} after surveying 14 classmates. Why might surveying only the basketball team be unfair?

### Answer key (try first)

1. Tallies count each choice. Basketball-only sample may skew toward certain preferences — not representative of all Grade 6.
2. Tallies count each choice. Basketball-only sample may skew toward certain preferences — not representative of all Grade 6.
3. Tallies count each choice. Basketball-only sample may skew toward certain preferences — not representative of all Grade 6.
4. Tallies count each choice. Basketball-only sample may skew toward certain preferences — not representative of all Grade 6.
5. Tallies count each choice. Basketball-only sample may skew toward certain preferences — not representative of all Grade 6.
6. Tallies count each choice. Basketball-only sample may skew toward certain preferences — not representative of all Grade 6.

## Exit ticket

1. Make a tally for a mini data set.
2. Convert to frequencies.

## Stretch (optional)

Bias warning: who you ask matters.
', "objectives" = '• Plan data collection.
• Organize with tallies/tables.
• Keep categories clear.', "description" = 'Collect data and organize in tables/tally charts.' WHERE "id" = 'ppg6m2727b74190c2f0e0799f' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m133600e00700bef5bb5f','ppg6m2727b74190c2f0e0799f',NULL,'MULTIPLE_CHOICE','|||| tallies','["3","4","5","10"]',1,'4.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m50d7b48b309f2ea0af05','ppg6m2727b74190c2f0e0799f',NULL,'MULTIPLE_CHOICE','Frequency means','["Average","Count in category","Area","Slope"]',1,'Count.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m54a857ef98cf191d4f4f','ppg6m2727b74190c2f0e0799f',NULL,'MULTIPLE_CHOICE','Overlapping categories?','["Good","Confusing/bad","Required","Only for dots"]',1,'Bad.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 11 L3. Dot Plots (ppg6m6a9960090eee0e9a83d0)
UPDATE "Lesson" SET "content" = '# Dot Plots

*Grade 6 Mathematics · Unit 11 of 11 · Data and Statistics · Lesson 3*

## Objective

**I can** build a dot plot.

## Warm-up (2 minutes)

Data 2,3,3,4,5 — sketch dots above a number line.

## Teach

### Big idea

Each value gets a stack of dots; height = frequency.

### Example 1

Two dots above 3 means frequency 2.

### Try this

Mode on a dot plot?

**Check:** Tallest stack

### Example 2

Gaps show values with no data.

### Common mistake (this lesson only)

Spacing dots unevenly on the scale.

## Guided practice (we do)

1. Dots above 4:3 → freq  
   **Answer:** 3

2. Cluster meaning  
   **Answer:** Values bunched

3. Gap meaning  
   **Answer:** Missing values

## Independent practice

Complete each item. Show your work.

1. Data (hours of homework): 10, 4, 1, 11, 3, 21. Sketch a letter-style dot plot description (list stack heights per value). Where is a cluster?
2. Data (hours of homework): 8, 4, 2, 9, 3, 18. Sketch a letter-style dot plot description (list stack heights per value). Where is a cluster?
3. Data (hours of homework): 10, 2, 3, 11, 1, 19. Sketch a letter-style dot plot description (list stack heights per value). Where is a cluster?
4. Data (hours of homework): 8, 2, 5, 9, 1, 16. Sketch a letter-style dot plot description (list stack heights per value). Where is a cluster?
5. Data (hours of homework): 10, 1, 6, 11, 1, 17. Sketch a letter-style dot plot description (list stack heights per value). Where is a cluster?
6. Data (hours of homework): 8, 9, 8, 9, 8, 14. Sketch a letter-style dot plot description (list stack heights per value). Where is a cluster?

### Answer key (try first)

1. Count frequency per distinct value in [10, 4, 1, 11, 3, 21]; cluster = values with most dots.
2. Count frequency per distinct value in [8, 4, 2, 9, 3, 18]; cluster = values with most dots.
3. Count frequency per distinct value in [10, 2, 3, 11, 1, 19]; cluster = values with most dots.
4. Count frequency per distinct value in [8, 2, 5, 9, 1, 16]; cluster = values with most dots.
5. Count frequency per distinct value in [10, 1, 6, 11, 1, 17]; cluster = values with most dots.
6. Count frequency per distinct value in [8, 9, 8, 9, 8, 14]; cluster = values with most dots.

## Exit ticket

1. Dot plot for 1,1,2,4,4,4.
2. Read the mode.

## Stretch (optional)

Compare two tiny dot plots.
', "objectives" = '• Build a dot plot.
• Read frequencies from dots.
• Describe a simple cluster/gap.', "description" = 'Build and read dot plots.' WHERE "id" = 'ppg6m6a9960090eee0e9a83d0' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m09ca657b8214f55f0ae4','ppg6m6a9960090eee0e9a83d0',NULL,'MULTIPLE_CHOICE','Two dots above 3 → freq','["1","2","3","5"]',1,'2.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m5885cd69cd17d6e0c054','ppg6m6a9960090eee0e9a83d0',NULL,'MULTIPLE_CHOICE','Tallest stack is','["Mean","Mode oft","Range","MAD"]',1,'Mode.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m8a6795df4b20187393dd','ppg6m6a9960090eee0e9a83d0',NULL,'MULTIPLE_CHOICE','Dot plots use','["Bars only","Dots on scale","Pies","Nets"]',1,'Dots.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 11 L4. Histograms Intro (ppg6m148ea3e46108e96e1c49)
UPDATE "Lesson" SET "content" = '# Histograms Intro

*Grade 6 Mathematics · Unit 11 of 11 · Data and Statistics · Lesson 4*

## Objective

**I can** read a histogram.

## Warm-up (2 minutes)

A bar from 10–20 reaches height 5 — what does that mean?

## Teach

### Big idea

Histograms show frequencies for numeric intervals (bins).

### Example 1

Bin 10–20 with height 5 → five data values in that interval.

### Try this

Why bins matter?

**Check:** Different bins can change the look

### Example 2

Bars touch for continuous numeric data.

### Common mistake (this lesson only)

Treating histogram bars as unrelated categories like favorite color.

## Guided practice (we do)

1. Bin height =  
   **Answer:** Frequency

2. Bars touch?  
   **Answer:** Often yes

3. Numeric data?  
   **Answer:** Yes

## Independent practice

Complete each item. Show your work.

1. For data 4, 1, 3, 5, 1, 15, suggest bins of width 2 starting at 1. Which bin would hold the most points (estimate by listing)?
2. For data 6, 5, 4, 7, 4, 16, suggest bins of width 2 starting at 4. Which bin would hold the most points (estimate by listing)?
3. For data 8, 4, 4, 9, 3, 17, suggest bins of width 2 starting at 3. Which bin would hold the most points (estimate by listing)?
4. For data 10, 3, 5, 11, 2, 18, suggest bins of width 2 starting at 2. Which bin would hold the most points (estimate by listing)?
5. For data 12, 1, 6, 13, 1, 19, suggest bins of width 2 starting at 1. Which bin would hold the most points (estimate by listing)?
6. For data 14, 8, 6, 15, 7, 20, suggest bins of width 2 starting at 6. Which bin would hold the most points (estimate by listing)?

### Answer key (try first)

1. Assign each value to bins [min,min+2), etc.; the fullest bin depends on the list 4, 1, 3, 5, 1, 15.
2. Assign each value to bins [min,min+2), etc.; the fullest bin depends on the list 6, 5, 4, 7, 4, 16.
3. Assign each value to bins [min,min+2), etc.; the fullest bin depends on the list 8, 4, 4, 9, 3, 17.
4. Assign each value to bins [min,min+2), etc.; the fullest bin depends on the list 10, 3, 5, 11, 2, 18.
5. Assign each value to bins [min,min+2), etc.; the fullest bin depends on the list 12, 1, 6, 13, 1, 19.
6. Assign each value to bins [min,min+2), etc.; the fullest bin depends on the list 14, 8, 6, 15, 7, 20.

## Exit ticket

1. Read a histogram’s tallest bin.
2. Explain one bin in words.

## Stretch (optional)

Bad bin width example.
', "objectives" = '• Read a histogram.
• Understand bins/intervals.
• Contrast with bar graphs for categories.', "description" = 'Read histograms and choose bins carefully.' WHERE "id" = 'ppg6m148ea3e46108e96e1c49' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m9e5bcc04af061d958021','ppg6m148ea3e46108e96e1c49',NULL,'MULTIPLE_CHOICE','Bin height 5 means','["Value 5 only","5 data in bin","Width 5","Area 5 always"]',1,'Frequency 5.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mce3be090b751dfe592f3','ppg6m148ea3e46108e96e1c49',NULL,'MULTIPLE_CHOICE','Histograms best for','["Favorite color","Numeric intervals","Names","Nets"]',1,'Numeric.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m387478ad3cd9c09c8c1f','ppg6m148ea3e46108e96e1c49',NULL,'MULTIPLE_CHOICE','Bars usually','["Separated always","Touch for numeric bins","3D","Circular"]',1,'Touch.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 11 L5. Measures of Center: Mean (ppg6mae324e56b222c950f2e7)
UPDATE "Lesson" SET "content" = '# Measures of Center: Mean

*Grade 6 Mathematics · Unit 11 of 11 · Data and Statistics · Lesson 5*

## Objective

**I can** compute the mean.

## Warm-up (2 minutes)

Mean of 2,4,6,8?

## Teach

### Big idea

Mean = sum ÷ count.

### Example 1

(2+4+6+8)/4=5.

### Try this

Mean of 10,10,40.

**Check:** 20

### Example 2

Outlier 40 pulls mean up vs median.

### Common mistake (this lesson only)

Dividing by the wrong count.

## Guided practice (we do)

1. 1,3,5 mean  
   **Answer:** 3

2. Sum 30 count 5  
   **Answer:** 6

3. Fair share idea  
   **Answer:** Mean

## Independent practice

Complete each item. Show your work.

1. Find the mean of 5, 4, 5, 6, 3, 10. Show sum ÷ count. What does the mean represent?
2. Find the mean of 9, 1, 5, 10, 1, 13. Show sum ÷ count. What does the mean represent?
3. Find the mean of 9, 1, 6, 10, 1, 12. Show sum ÷ count. What does the mean represent?
4. Find the mean of 13, 3, 6, 14, 2, 15. Show sum ÷ count. What does the mean represent?
5. Find the mean of 13, 7, 7, 14, 6, 14. Show sum ÷ count. What does the mean represent?
6. Find the mean of 8, 9, 8, 9, 8, 17. Show sum ÷ count. What does the mean represent?

### Answer key (try first)

1. Mean = 33/6 = 5.50. Fair-share / balance point.
2. Mean = 39/6 = 6.50. Fair-share / balance point.
3. Mean = 39/6 = 6.50. Fair-share / balance point.
4. Mean = 53/6 = 8.83. Fair-share / balance point.
5. Mean = 61/6 = 10.17. Fair-share / balance point.
6. Mean = 59/6 = 9.83. Fair-share / balance point.

## Exit ticket

1. Mean of 4,5,6,9.
2. Effect of changing 9 to 29.

## Stretch (optional)

When mean misleads.
', "objectives" = '• Compute the mean.
• Interpret mean as fair share/balance.
• Notice outliers can pull the mean.', "description" = 'Compute and interpret the mean.' WHERE "id" = 'ppg6mae324e56b222c950f2e7' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m129102e5a95d8eca2083','ppg6mae324e56b222c950f2e7',NULL,'MULTIPLE_CHOICE','Mean of 2,4,6,8','["5","4","6","20"]',0,'5.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m1346eed488325fce3af4','ppg6mae324e56b222c950f2e7',NULL,'MULTIPLE_CHOICE','Mean of 10,10,40','["10","20","40","60"]',1,'20.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m840944d862ea3a5e531e','ppg6mae324e56b222c950f2e7',NULL,'MULTIPLE_CHOICE','Mean formula','["Max−min","Sum÷count","Middle value","Most frequent"]',1,'Sum÷count.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 11 L6. Measures of Center: Median (ppg6m2c7aa57361785bf5b246)
UPDATE "Lesson" SET "content" = '# Measures of Center: Median

*Grade 6 Mathematics · Unit 11 of 11 · Data and Statistics · Lesson 6*

## Objective

**I can** find the median of odd/even data sets.

## Warm-up (2 minutes)

Median of 3,1,7?

## Teach

### Big idea

Order data; median is middle (or average of two middle for even count).

### Example 1

Ordered 1,3,7 → median 3.

### Try this

Median of 2,4,6,8.

**Check:** (4+6)/2=5

### Example 2

For skewed data, median may better represent a typical value.

### Common mistake (this lesson only)

Forgetting to sort before finding the middle.

## Guided practice (we do)

1. 5,1,3 median  
   **Answer:** 3

2. Even set two middles  
   **Answer:** Average them

3. Sort first  
   **Answer:** Yes

## Independent practice

Complete each item. Show your work.

1. Find the median of 10, 1, 5, 11, 1, 21. Order first. When would median be more helpful than mean?
2. Find the median of 8, 1, 1, 9, 1, 18. Order first. When would median be more helpful than mean?
3. Find the median of 10, 1, 1, 11, 1, 19. Order first. When would median be more helpful than mean?
4. Find the median of 7, 4, 7, 8, 3, 24. Order first. When would median be more helpful than mean?
5. Find the median of 9, 3, 8, 10, 2, 5. Order first. When would median be more helpful than mean?
6. Find the median of 16, 3, 10, 17, 2, 22. Order first. When would median be more helpful than mean?

### Answer key (try first)

1. Ordered 1, 1, 5, 10, 11, 21; median 7.5. Median resists extreme outliers better than mean.
2. Ordered 1, 1, 1, 8, 9, 18; median 4.5. Median resists extreme outliers better than mean.
3. Ordered 1, 1, 1, 10, 11, 19; median 5.5. Median resists extreme outliers better than mean.
4. Ordered 3, 4, 7, 7, 8, 24; median 7. Median resists extreme outliers better than mean.
5. Ordered 2, 3, 5, 8, 9, 10; median 6.5. Median resists extreme outliers better than mean.
6. Ordered 2, 3, 10, 16, 17, 22; median 13. Median resists extreme outliers better than mean.

## Exit ticket

1. Median of 9,2,7,4,6.
2. Median of 1,2,3,100.

## Stretch (optional)

Mean vs median for 1,2,3,100.
', "objectives" = '• Find the median of odd/even data sets.
• Order data first.
• Compare median to mean.', "description" = 'Find the median; compare to mean.' WHERE "id" = 'ppg6m2c7aa57361785bf5b246' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m3907f248c0989b556e14','ppg6m2c7aa57361785bf5b246',NULL,'MULTIPLE_CHOICE','Median of 1,3,7','["1","3","7","4"]',1,'3.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6md679d3b1d64772b04fed','ppg6m2c7aa57361785bf5b246',NULL,'MULTIPLE_CHOICE','Median 2,4,6,8','["4","5","6","8"]',1,'5.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m86f091e58d2b0bcde3f5','ppg6m2c7aa57361785bf5b246',NULL,'MULTIPLE_CHOICE','Before median','["Sort","Multiply","Square","Ignore order"]',0,'Sort.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 11 L7. Spread: Range and MAD Intro (ppg6m7a09f683820796530761)
UPDATE "Lesson" SET "content" = '# Spread: Range and MAD Intro

*Grade 6 Mathematics · Unit 11 of 11 · Data and Statistics · Lesson 7*

## Objective

**I can** compute range.

## Warm-up (2 minutes)

Data 2,5,9 — range? Is the data tightly clustered?

## Teach

### Big idea

Range = max − min. MAD ≈ mean of absolute deviations from the mean (intro).

### Example 1

Range 9−2=7.

### Try this

Mean of 2,4,6 is 4; MAD = (|2−4|+|4−4|+|6−4|)/3=4/3.

**Check:** 4/3

### Example 2

Larger spread → values more scattered.

### Common mistake (this lesson only)

Calling range the same as mean.

## Guided practice (we do)

1. Range 3 to 10  
   **Answer:** 7

2. Small range →  
   **Answer:** More clustered often

3. MAD uses  
   **Answer:** Absolute deviations

## Independent practice

Complete each item. Show your work.

1. For 11, 10, 9, 12, 9, 9, find the range. Then find each deviation from the mean ≈ 10.0 and describe spread in words.
2. For 9, 10, 11, 10, 9, 6, find the range. Then find each deviation from the mean ≈ 9.2 and describe spread in words.
3. For 11, 8, 12, 12, 7, 7, find the range. Then find each deviation from the mean ≈ 9.5 and describe spread in words.
4. For 9, 1, 3, 10, 1, 24, find the range. Then find each deviation from the mean ≈ 8.0 and describe spread in words.
5. For 11, 15, 14, 12, 14, 5, find the range. Then find each deviation from the mean ≈ 11.8 and describe spread in words.
6. For 9, 7, 5, 10, 6, 22, find the range. Then find each deviation from the mean ≈ 9.8 and describe spread in words.

### Answer key (try first)

1. Range = 3. Larger range → more spread; MAD averages absolute deviations from the mean.
2. Range = 5. Larger range → more spread; MAD averages absolute deviations from the mean.
3. Range = 5. Larger range → more spread; MAD averages absolute deviations from the mean.
4. Range = 23. Larger range → more spread; MAD averages absolute deviations from the mean.
5. Range = 10. Larger range → more spread; MAD averages absolute deviations from the mean.
6. Range = 17. Larger range → more spread; MAD averages absolute deviations from the mean.

## Exit ticket

1. Range of 4,4,4,10.
2. MAD of 1,3,5 (mean 3).

## Stretch (optional)

When range misleads (one outlier).
', "objectives" = '• Compute range.
• Interpret spread.
• Compute a simple MAD intro example.', "description" = 'Describe spread with range and intro MAD.' WHERE "id" = 'ppg6m7a09f683820796530761' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m15715b28ea8c931b8ff5','ppg6m7a09f683820796530761',NULL,'MULTIPLE_CHOICE','Range 2 to 9','["5","7","11","18"]',1,'7.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mb2a297a7535e6f5d5bb5','ppg6m7a09f683820796530761',NULL,'MULTIPLE_CHOICE','Range means','["Average","Max−min","Mode","Median"]',1,'Max−min.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m85c52e5f953b9636938f','ppg6m7a09f683820796530761',NULL,'MULTIPLE_CHOICE','MAD intro uses','["Only max","Abs deviations from mean","Area","Slope"]',1,'Abs deviations.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 11 L8. Shape of a Distribution (ppg6mccc067b760e93ac03bd3)
UPDATE "Lesson" SET "content" = '# Shape of a Distribution

*Grade 6 Mathematics · Unit 11 of 11 · Data and Statistics · Lesson 8*

## Objective

**I can** describe shape: symmetric/skewed, peaks, gaps.

## Warm-up (2 minutes)

A dot plot piled on the left with a long right tail — skewed which way?

## Teach

### Big idea

Right-skewed has a long right tail; left-skewed long left tail; symmetric mirrors.

### Example 1

Peak = mode region; gaps = empty stretches.

### Try this

Symmetric about mean roughly?

**Check:** Mirror left/right

### Example 2

Two peaks → bimodal.

### Common mistake (this lesson only)

Calling every uneven plot “skewed right” without looking at the tail.

## Guided practice (we do)

1. Long right tail  
   **Answer:** Right-skewed

2. Two peaks  
   **Answer:** Bimodal

3. Gap  
   **Answer:** Empty values

## Independent practice

Complete each item. Show your work.

1. If a dot plot piles on the left with a long tail right, is it left-skewed, right-skewed, or symmetric? Sketch what symmetric would look like for 6 points.
2. If a dot plot piles on the left with a long tail right, is it left-skewed, right-skewed, or symmetric? Sketch what symmetric would look like for 6 points.
3. If a dot plot piles on the left with a long tail right, is it left-skewed, right-skewed, or symmetric? Sketch what symmetric would look like for 6 points.
4. If a dot plot piles on the left with a long tail right, is it left-skewed, right-skewed, or symmetric? Sketch what symmetric would look like for 6 points.
5. If a dot plot piles on the left with a long tail right, is it left-skewed, right-skewed, or symmetric? Sketch what symmetric would look like for 6 points.
6. If a dot plot piles on the left with a long tail right, is it left-skewed, right-skewed, or symmetric? Sketch what symmetric would look like for 6 points.

### Answer key (try first)

1. Long tail right → right-skewed. Symmetric: balanced piles on both sides of center.
2. Long tail right → right-skewed. Symmetric: balanced piles on both sides of center.
3. Long tail right → right-skewed. Symmetric: balanced piles on both sides of center.
4. Long tail right → right-skewed. Symmetric: balanced piles on both sides of center.
5. Long tail right → right-skewed. Symmetric: balanced piles on both sides of center.
6. Long tail right → right-skewed. Symmetric: balanced piles on both sides of center.

## Exit ticket

1. Describe a given sketch.
2. Sketch a left-skewed set.

## Stretch (optional)

Why sample size matters for shape talk.
', "objectives" = '• Describe shape: symmetric/skewed, peaks, gaps.
• Connect shape language to displays.
• Avoid overclaiming from tiny samples.', "description" = 'Describe symmetric, skewed, peaks, and gaps.' WHERE "id" = 'ppg6mccc067b760e93ac03bd3' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m62304739d5625adc850c','ppg6mccc067b760e93ac03bd3',NULL,'MULTIPLE_CHOICE','Long right tail','["Left-skewed","Right-skewed","Symmetric","Uniform only"]',1,'Right-skewed.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m57edea683021c105d1b8','ppg6mccc067b760e93ac03bd3',NULL,'MULTIPLE_CHOICE','Two peaks','["Gap","Bimodal","Range","MAD"]',1,'Bimodal.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m8d10cc79be92c7afd2b6','ppg6mccc067b760e93ac03bd3',NULL,'MULTIPLE_CHOICE','Symmetric roughly','["Mirror sides","Always skewed","No peak","Only circles"]',0,'Mirror.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 11 L9. Comparing Distributions (ppg6mf003643af48a4daf1a56)
UPDATE "Lesson" SET "content" = '# Comparing Distributions

*Grade 6 Mathematics · Unit 11 of 11 · Data and Statistics · Lesson 9*

## Objective

**I can** compare two distributions’ centers.

## Warm-up (2 minutes)

Two classes’ score dot plots — which is typically higher? More spread?

## Teach

### Big idea

Compare medians/means and ranges/MAD visually and numerically.

### Example 1

Class A median 80, Class B median 70 → A typically higher.

### Try this

Larger range usually means…

**Check:** More spread

### Example 2

Write: “Class A is centered higher; Class B is more spread out.”

### Common mistake (this lesson only)

Comparing only the highest single score.

## Guided practice (we do)

1. Higher median →  
   **Answer:** Typically higher center

2. Compare spreads with  
   **Answer:** Range/MAD

3. Evidence  
   **Answer:** Use the display

## Independent practice

Complete each item. Show your work.

1. Class A scores: 10, 5, 8, 11. Class B: 8, 11, 4, 13. Compare centers (means) in one sentence and spreads (ranges) in one sentence.
2. Class A scores: 8, 5, 10, 9. Class B: 10, 9, 4, 10. Compare centers (means) in one sentence and spreads (ranges) in one sentence.
3. Class A scores: 10, 11, 10, 11. Class B: 10, 11, 10, 11. Compare centers (means) in one sentence and spreads (ranges) in one sentence.
4. Class A scores: 8, 11, 12, 9. Class B: 12, 9, 10, 8. Compare centers (means) in one sentence and spreads (ranges) in one sentence.
5. Class A scores: 10, 10, 13, 11. Class B: 13, 11, 9, 9. Compare centers (means) in one sentence and spreads (ranges) in one sentence.
6. Class A scores: 8, 10, 15, 9. Class B: 15, 9, 9, 6. Compare centers (means) in one sentence and spreads (ranges) in one sentence.

### Answer key (try first)

1. Compute means and ranges for each subset; state which class has higher center and which has larger spread.
2. Compute means and ranges for each subset; state which class has higher center and which has larger spread.
3. Compute means and ranges for each subset; state which class has higher center and which has larger spread.
4. Compute means and ranges for each subset; state which class has higher center and which has larger spread.
5. Compute means and ranges for each subset; state which class has higher center and which has larger spread.
6. Compute means and ranges for each subset; state which class has higher center and which has larger spread.

## Exit ticket

1. Compare two tiny data sets’ medians and ranges.
2. One-sentence comparison.

## Stretch (optional)

Fairness: same scale on both plots.
', "objectives" = '• Compare two distributions’ centers.
• Compare spreads.
• Use display evidence in a sentence.', "description" = 'Compare centers and spreads of two displays.' WHERE "id" = 'ppg6mf003643af48a4daf1a56' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mee55a33cac9639a7fc02','ppg6mf003643af48a4daf1a56',NULL,'MULTIPLE_CHOICE','Higher median suggests','["Lower center","Higher typical center","No center","Only mode"]',1,'Higher center.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mf178b2572752814d19ec','ppg6mf003643af48a4daf1a56',NULL,'MULTIPLE_CHOICE','More spread often','["Smaller range","Larger range","Mean 0","No dots"]',1,'Larger range.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m5062ff699a4b0bbdd465','ppg6mf003643af48a4daf1a56',NULL,'MULTIPLE_CHOICE','Best comparison uses','["One max only","Center and spread","Colors only","Volume"]',1,'Center+spread.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

-- Unit 11 L10. Data & Statistics Unit Review (ppg6m0ad31c7bb9247b85ff62)
UPDATE "Lesson" SET "content" = '# Data & Statistics Unit Review

*Grade 6 Mathematics · Unit 11 of 11 · Data and Statistics · Lesson 10*

## Objective

**I can** choose statistical questions.

## Warm-up (2 minutes)

For data 2,2,3,7 — find mean, median, range.

## Teach

### Big idea

Statistical questions → organize → display → center/spread → compare.

### Example 1

Mean=3.5, median=2.5, range=5.

### Try this

Is “favorite sport” statistical?

**Check:** Yes, varies

### Example 2

Compare two classes with median and range.

### Common mistake (this lesson only)

Computing median without sorting.

## Guided practice (we do)

1. Mean of 1,2,3  
   **Answer:** 2

2. Median of 1,2,3,4  
   **Answer:** 2.5

3. Range 1 to 9  
   **Answer:** 8

## Independent practice

Complete each item. Show your work.

1. Review: Mean and range of 7, 2, 1, 8, 1, 9.
2. Review: Mean and range of 5, 2, 2, 6, 1, 6.
3. Review: Mean and range of 7, 1, 3, 8, 1, 7.
4. Review: Mean and range of 14, 1, 5, 15, 1, 24.
5. Review: Mean and range of 7, 7, 5, 8, 6, 5.
6. Review: Mean and range of 14, 7, 7, 15, 6, 22.

### Answer key (try first)

1. Mean 4.67; range 8.
2. Mean 3.67; range 5.
3. Mean 4.50; range 7.
4. Mean 10.00; range 23.
5. Mean 6.33; range 3.
6. Mean 11.83; range 16.

## Exit ticket

1. Stats for 4,5,5,6,10.
2. Write a statistical question.

## Stretch (optional)

Build a dot plot and describe shape.
', "objectives" = '• Choose statistical questions.
• Read dot plots/histograms.
• Compute mean, median, range and compare sets.', "description" = 'Synthesize questions, displays, center, and spread.' WHERE "id" = 'ppg6m0ad31c7bb9247b85ff62' AND "courseId" = 'cmuh9bwto03qledantwv3vsfd';

INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m8b9f8571cee2dbeda151','ppg6m0ad31c7bb9247b85ff62',NULL,'MULTIPLE_CHOICE','Mean of 2,2,3,7','["3.5","2","7","14"]',0,'3.5.',1,1) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6mb705539b0396f482a681','ppg6m0ad31c7bb9247b85ff62',NULL,'MULTIPLE_CHOICE','Median of 2,2,3,7','["2","2.5","3","7"]',1,'2.5.',1,2) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";
INSERT INTO "Question" ("id","lessonId","quizId","type","prompt","choices","correctIndex","explanation","points","order") VALUES ('ppg6m6564ab7b47ac0dadff18','ppg6m0ad31c7bb9247b85ff62',NULL,'MULTIPLE_CHOICE','Range 2 to 7','["5","9","3.5","2"]',0,'5.',1,3) ON CONFLICT("id") DO UPDATE SET "prompt"=excluded."prompt","choices"=excluded."choices","correctIndex"=excluded."correctIndex","explanation"=excluded."explanation","points"=excluded."points","order"=excluded."order","lessonId"=excluded."lessonId","quizId"=excluded."quizId";

