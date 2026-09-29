-- Grade 6 core lesson body upgrade (ELA, Math, Science, World History).
-- Updates content/description/objectives only; keeps lesson IDs, quizzes, progress.
-- Apply remotely: npx wrangler d1 migrations apply prosperprep-school --remote
-- Or one-shot: npx wrangler d1 execute prosperprep-school --remote --file migrations/0004_grade6_core_content.sql
-- Do NOT run db:setup on production D1.

UPDATE "Lesson" SET "description" = 'Identify theme vs topic in short fiction using evidence → inference → theme statements.', "objectives" = '• Distinguish theme from topic and moral.
• Trace evidence → inference → theme.
• Revise weak theme statements into text-supported claims.', "content" = '# Analyzing Theme in Short Fiction

*Grade 6 English Language Arts · Prosper Prep original teaching text. Topics align with common middle-school literacy progressions (e.g. Core Knowledge Language Arts middle-school emphasis on theme and evidence).*

## Warm-up
Write one sentence: What is the difference between what a story is **about** and what a story **suggests about life**?

## Teach
A **topic** is a one- or two-word label (*loyalty*, *fear*, *competition*). A **theme** is a complete, arguable idea the story develops about that topic. Theme is not a plot summary and not always a tidy moral.

**Path:** evidence (what the text shows) → inference (what that suggests) → theme statement (a generalizable claim the whole text supports).

### Mini-passage — *Bus Stop Bench*
> After tryouts, Malik sat on the bus-stop bench with a cut on his knee and a roster that did not include his name. His little sister waved from across the street. He almost pretended not to see her — he wanted to look “fine” for the older players walking past. Then he remembered how she had waited through every practice with a water bottle and a crooked smile. He waved her over, shared his chips, and told the truth: “I didn’t make it. I’m still proud I tried.” She nodded like that was the real win.

### Model
- **Evidence:** cut knee; not on roster; almost hides from sister; remembers her support; tells truth; shares chips.
- **Inference:** Pride and honesty with family can matter more than looking tough to peers.
- **Theme:** Choosing honesty with people who support you can restore dignity after a public disappointment.

**Weak versions:** “Sports” (topic). “Malik didn’t make the team” (plot). “Never give up” (slogan not rooted in *this* ending).

## Practice
1. Rewrite “This story is about family” into a theme statement.
2. Quote or paraphrase two details that support your statement.
3. Name one detail that would *weaken* a claim that Malik “doesn’t care about making the team.”

## Stretch
Write a 6–8 sentence CER paragraph arguing your theme. Underline claim, evidence, and reasoning.

## Source note
Original Prosper Prep fiction and instruction. Scope aligns with widely taught Grade 6 literary-analysis goals (theme, textual evidence).' WHERE "id" = 'cmuh9bwsd03laedanptmprhap';

UPDATE "Lesson" SET "description" = 'Build CER paragraphs that link precise claims to concrete evidence and clear reasoning.', "objectives" = '• Write debatable claims (not topics).
• Select concrete evidence.
• Explain how evidence supports the claim.', "content" = '# Claim, Evidence, and Reasoning (CER)

*Grade 6 ELA · Prosper Prep original. CER is a widely used science and literacy framework; this lesson adapts the structure for literary and informational writing.*

## Teach
- **Claim:** a debatable statement you will prove — not a topic label and not a quotation alone.
- **Evidence:** quotations, data, or specific details.
- **Reasoning:** the “so what?” bridge — *because / therefore* language that shows *how* evidence supports the claim.

### Worked example
**Claim:** The narrator feels trapped by routine.  
**Evidence:** repeated images of locked doors and clocks.  
**Reasoning:** Doors and clocks suggest blocked exits and endless cycles; therefore the imagery supports the claim that routine feels imprisoning.

## Watch for this mistake
“The quote proves it” is not reasoning. Name the *connection*.

## Practice
1. Which CER part answers “So what?” after a quotation?
2. Fix: Claim: Parks help towns. Evidence: Parks exist. Reasoning: Because parks exist.
3. Is “Friendship” a claim? Why or why not?

## Stretch
Write an 8-sentence CER on a short article or story from class. Label C / E / R in the margin.

## Source note
Original instruction. CER pattern common in NGSS-aligned science writing and middle-school literacy.' WHERE "id" = 'cmuh9bwsg03loedanpivbmdrq';

UPDATE "Lesson" SET "description" = 'Determine author''s purpose and tone; connect diction and structure to persuasion or information.', "objectives" = '• Distinguish purpose (why) from tone (attitude).
• Spot diction clues for persuade vs inform.
• Name rhetorical appeals with line-level evidence.', "content" = '# Author''s Purpose and Tone

## Teach
**Purpose** = why the author wrote (inform, persuade, entertain, or a blend).  
**Tone** = the author''s attitude (urgent, sarcastic, respectful, alarmed).

Clues: diction, imagery, organization. Loaded words often signal persuasion; neutral definitions and data often signal informing.

### Rhetorical appeals (intro)
- **Logos** — logic/data  
- **Pathos** — emotion/story  
- **Ethos** — credibility/trust  

Always tie an appeal back to a specific line.

### Mini-analysis
A speech pairs graduation-rate statistics (logos) with a student''s story (pathos) and the speaker''s years in classrooms (ethos). Annotate each, then judge whether the evidence is fair and sufficient.

## Practice
1. Purpose vs tone: which describes attitude?
2. Name one diction clue that a text may be trying to persuade.
3. Give one logos and one pathos example you might find in an article.

## Stretch
Annotate a one-page opinion piece for purpose, tone, and two rhetorical moves. Evaluate effectiveness in a paragraph.

## Source note
Original Prosper Prep instruction aligned with Grade 6–8 reading standards on purpose, tone, and rhetoric.' WHERE "id" = 'cmuh9bwsk03m2edanpklcsidz';

UPDATE "Lesson" SET "description" = 'Compare how two texts treat the same topic: claims, evidence, structure, and point of view.', "objectives" = '• Identify shared topic and differing claims.
• Compare evidence quality and structure.
• Write a synthesis statement that accounts for both texts.', "content" = '# Comparing Texts on the Same Topic

## Teach
When two articles discuss the same topic (for example, school start times), ask:
1. What claim does each make?
2. What evidence does each use (studies, anecdotes, expert quotes)?
3. How is each organized (problem→solution, cause→effect, compare→contrast)?
4. Whose voices are centered or missing?

### Worked comparison (original sketches)
**Text A** argues later start times improve sleep using a sleep-study summary.  
**Text B** argues earlier starts help working families using parent interview snippets.  
Neither “wins” until you weigh evidence quality, sample size, and fairness.

**Synthesis move:** “Both texts agree sleep matters, but they disagree about whose schedule should bend — students’ biology or caregivers’ work hours.”

## Practice
1. List two comparison categories beyond “agree/disagree.”
2. Why might two true facts support opposite claims?
3. Write one synthesis sentence for Texts A and B above.

## Stretch
Find two short online articles on one local issue. Complete a T-chart (claim / evidence / gap) and a 6-sentence comparison.

## Source note
Original Prosper Prep instruction; comparison routines common in Core Knowledge and EngageNY ELA modules.' WHERE "id" = 'cmuh9bwsn03mgedanfaxrfw8p';

UPDATE "Lesson" SET "description" = 'Use independent and dependent clauses to write clearer, more precise sentences.', "objectives" = '• Identify independent vs dependent clauses.
• Fix fragments and run-ons.
• Combine sentences with subordinators for clarity.', "content" = '# Grammar for Clarity: Clauses

## Teach
A **clause** has a subject and a verb.  
- **Independent clause:** can stand alone as a sentence.  
- **Dependent clause:** needs an independent clause (*because*, *when*, *although*, *if*, *while*…).

**Fragment:** “Because the evidence was incomplete.”  
**Fixed:** “Because the evidence was incomplete, the jury asked for more time.”

**Run-on:** “The claim was bold it lacked data.”  
**Fixed:** “The claim was bold, but it lacked data.” / “Although the claim was bold, it lacked data.”

### Clarity tip
Put the main idea in an independent clause. Use dependent clauses for conditions, time, and contrast — not for burying the point.

## Practice
1. Label each clause I or D: “When the bell rang, students filed out.”
2. Fix the fragment: “Although the poem uses soft imagery.”
3. Combine with a subordinator: “The experiment failed. The hypothesis was still useful.”

## Stretch
Revise a paragraph of your own writing: mark every clause, fix fragments/run-ons, and combine two choppy sentences.

## Source note
Original Prosper Prep grammar instruction for Grade 6 clarity goals.' WHERE "id" = 'cmuh9bwsq03muedana6if5waf';

UPDATE "Lesson" SET "description" = 'Interpret imagery and sound devices; explain their effect on meaning and mood.', "objectives" = '• Identify imagery and sound devices.
• Explain effect on mood/meaning.
• Support interpretations with quoted words.', "content" = '# Poetry Analysis: Imagery and Sound

## Teach
**Imagery** = language that appeals to the senses.  
**Sound devices** = rhyme, alliteration, assonance, onomatopoeia, repetition — tools that shape mood and emphasis.

Ask: *What do I see/hear/feel?* then *So what does that do to the poem’s meaning?*

### Mini-poem (original)
> The gym lights buzz like tired bees.  
> Sneakers squeak a nervous beat.  
> My name waits on the clipboard —  
> a thin line between try and triumph.

**Notice:** “buzz like tired bees” (simile + sound); “squeak a nervous beat” (sound + mood); clipboard line (image of judgment).

## Practice
1. Name two sensory details in the mini-poem.
2. What mood do the sound words create?
3. Write one sentence explaining how the clipboard image connects to pressure.

## Stretch
Annotate a short poem from class for imagery and one sound device; write a CER paragraph on mood.

## Source note
Original Prosper Prep poem and instruction; analysis moves common in middle-school poetry units.' WHERE "id" = 'cmuh9bwst03n8edanp86p80mt';

UPDATE "Lesson" SET "description" = 'Plan and write argumentative paragraphs with claim, ordered evidence, and rebuttal awareness.', "objectives" = '• Outline claim + 2–3 evidence beats.
• Order evidence strongest-last or strongest-first on purpose.
• Acknowledge a reasonable counterpoint briefly.', "content" = '# Argumentative Paragraphs

## Teach
An argumentative paragraph is CER with intentional structure:
1. Claim (precise).
2. Evidence beat 1 + reasoning.
3. Evidence beat 2 + reasoning.
4. Brief counterpoint + reply (optional but powerful in Grade 6).
5. Closing sentence that restates the claim without copying it.

### Outline example
**Claim:** Our school should add a quiet homework room after practice.  
**E1:** Athletes finish late and lack a calm place to work.  
**E2:** A pilot room at a peer school raised on-time homework rates.  
**Counter:** Some worry about supervision costs — reply with a rotating teacher duty plan.

## Practice
1. Why can “strongest evidence last” help a paragraph?
2. Write a one-sentence counterpoint to the claim above.
3. Draft a closing sentence that does *not* repeat the claim word-for-word.

## Stretch
Write a full argumentative paragraph (8–12 sentences) on a school policy; label claim, evidence, counterpoint.

## Source note
Original Prosper Prep writing instruction aligned with Grade 6 argument writing standards.' WHERE "id" = 'cmuh9bwsw03nmedanh0n034gn';

UPDATE "Lesson" SET "description" = 'Distinguish facts from opinions in media; spot loaded language and missing context.', "objectives" = '• Classify statements as fact, opinion, or mixed.
• Detect loaded language.
• Ask what evidence would verify a claim.', "content" = '# Media Literacy: Fact vs. Opinion

## Teach
- **Fact:** can be checked against evidence (true or false in principle).  
- **Opinion:** a judgment or preference.  
- **Mixed:** a fact framed with loaded opinion words (“The *disastrous* 2% change…”).

### Verification habit
For any bold claim, ask: *What would count as evidence? Who measured it? What is missing?*

### Mini-exercise headlines (original)
1. “City council voted 5–2 to delay the bridge repair.” (fact-checkable)  
2. “Leaders cowardly delayed the vital bridge repair.” (opinion + loaded diction)  
3. “Delay endangers hundreds of daily drivers.” (claim needing data)

## Practice
1. Label each headline F / O / Mixed.
2. Rewrite #2 as a neutral factual sentence.
3. What evidence would you need for #3?

## Stretch
Cut a news paragraph from a reliable source. Highlight facts in one color and opinions in another; write three verification questions.

## Source note
Original Prosper Prep media-literacy instruction; complements common digital-citizenship goals.' WHERE "id" = 'cmuh9bwt003o0edan1z5ic1c3';

UPDATE "Lesson" SET "description" = 'Build a multi-paragraph essay outline with thesis, topic sentences, and evidence slots.', "objectives" = '• Write a precise thesis.
• Plan topic sentences that advance the thesis.
• Reserve slots for evidence and a conclusion move.', "content" = '# Multi-paragraph Essay Outline

## Teach
**Thesis** = the essay’s central claim (specific, debatable, previewing the path).  
Each body paragraph needs a **topic sentence** that advances the thesis — not a random new topic.

### Four-paragraph skeleton
1. **Intro:** hook + context + thesis  
2. **Body 1:** topic sentence → evidence → reasoning  
3. **Body 2:** topic sentence → evidence → reasoning (deeper or contrasting)  
4. **Conclusion:** restate insight + significance (not brand-new claims)

### Weak vs strong thesis
Weak: “This essay is about theme.”  
Strong: “In both mini-passages, characters regain dignity by telling hard truths to people who support them.”

## Practice
1. Write a strong thesis for a comparison of *Bus Stop Bench* and *Locker 214* (from theme lessons).
2. Draft two topic sentences that do not merely repeat the thesis.
3. List two pieces of evidence you would place in Body 1.

## Stretch
Produce a full outline (thesis + 2 body topic sentences + evidence bullets + conclusion note) for your next written response.

## Source note
Original Prosper Prep writing workshop text for Grade 6 multi-paragraph organization.' WHERE "id" = 'cmuh9bwt303oeedanmkfg4kfy';

UPDATE "Lesson" SET "description" = 'Represent ratios, find unit rates, and solve with tables and equivalent ratios.', "objectives" = '• Write ratios in multiple forms.
• Compute unit rates.
• Use ratio tables to solve problems.', "content" = '# Ratios and Unit Rates

*Grade 6 Mathematics · Prosper Prep original instruction. Topic sequence aligns with Open Up Resources / Illustrative Mathematics Grade 6 Unit 2 (ratios) under CC BY 4.0 conceptual scope — wording is original.*

## Teach
A **ratio** compares two quantities. We write \(a:b\), \(a\) to \(b\), or \(\frac{a}{b}\) when order matters.

A **unit rate** answers “how many per **one**?” — miles per 1 hour, price per 1 item, words per 1 minute.

### Worked example
A trail mix uses 6 cups pretzels for 4 cups raisins.
- Ratio pretzels:raisins = \(6:4 = 3:2\).
- Unit rate: pretzels per 1 cup raisins = \(6 \div 4 = 1.5\) cups.

**Ratio table** (scale by 2):

| Pretzels | 3 | 6 | 9 | 12 |
| Raisins  | 2 | 4 | 6 | 8  |

### Double number line intuition
If 2 hours → 10 miles, then 1 hour → 5 miles (unit rate), 3 hours → 15 miles.

## Practice
1. Write 8 wins to 12 games as a simplified ratio.
2. Juice concentrate mixes 3 oz concentrate with 9 oz water. What is the unit rate of water per 1 oz concentrate?
3. A machine prints 45 posters in 15 minutes. Posters per minute?

## Stretch
Create a ratio table for a recipe you choose. Scale it for 1 serving and for a class of 24.

## Source note
Original Prosper Prep examples. Conceptual alignment with OUR/IM Grade 6 ratios (CC BY 4.0).' WHERE "id" = 'cmuh9bwto03qnedanvih6z14d';

UPDATE "Lesson" SET "description" = 'Interpret percent as per hundred; find percent of a number and percent as a rate.', "objectives" = '• Convert among fractions, decimals, and percents.
• Find percent of a number.
• Solve simple percent problems in context.', "content" = '# Percent Concepts

*Grade 6 Math · Prosper Prep original. Aligns with Grade 6 unit-rate/percent ideas in open middle-school math progressions.*

## Teach
**Percent** means “per hundred.” \(35\% = \frac{35}{100} = 0.35\).

### Finding a percent of a number
\(20\%\) of 60: \(0.20 \times 60 = 12\), or \(\frac{20}{100} \times 60 = 12\).

### Percent as a rate
If 18 of 24 students finished early, the percent finished is \(\frac{18}{24} = 0.75 = 75\%\).

### Benchmark percents
Know \(10\%\), \(25\%\), \(50\%\), \(75\%\) mentally: \(10\%\) of 80 is 8; \(25\%\) of 80 is 20.

## Practice
1. Write \(\frac{7}{20}\) as a percent.
2. Find \(15\%\) of 80.
3. A jacket costs \$40. Sales tax is \(8\%\). Tax amount?

## Stretch
Explain two methods to find \(35\%\) of 240 (benchmark + residual, or decimal multiplication).

## Source note
Original Prosper Prep instruction.' WHERE "id" = 'cmuh9bwtr03r1edan8kg5e9r2';

UPDATE "Lesson" SET "description" = 'Move fluently among fractions, decimals, and percents; compare and order mixed representations.', "objectives" = '• Convert F/D/P in both directions.
• Compare values in mixed forms.
• Choose the most useful form for a calculation.', "content" = '# Fraction, Decimal, Percent Fluency

## Teach
Same quantity, three outfits:
- Fraction \(\frac{3}{4}\)
- Decimal \(0.75\)
- Percent \(75\%\)

### Conversion routes
Fraction → decimal: divide.  
Decimal → percent: multiply by 100 (move two places).  
Percent → fraction: over 100, then simplify.

### Compare carefully
Which is greater: \(0.6\), \(\frac{2}{3}\), or \(65\%\)?  
Convert: \(0.6 = 60\%\), \(\frac{2}{3} \approx 66.7\%\), \(65\%\). Order: \(0.6 < 65\% < \frac{2}{3}\).

## Practice
1. Convert \(\frac{5}{8}\) to a decimal and a percent.
2. Order from least to greatest: \(0.4\), \(45\%\), \(\frac{2}{5}\).
3. Which form is friendliest for “tip 20% on \$35”? Why?

## Stretch
Build a conversion card for benchmarks \(\frac{1}{8}, \frac{1}{5}, \frac{3}{8}, \frac{5}{8}\) with decimal and percent.

## Source note
Original Prosper Prep fluency lesson.' WHERE "id" = 'cmuh9bwtv03rfedancwrbm2nn';

UPDATE "Lesson" SET "description" = 'Place integers on the number line; interpret opposites, absolute value, and real-world signed quantities.', "objectives" = '• Plot integers and opposites.
• Interpret absolute value as distance from 0.
• Explain elevation, temperature, and debt with integers.', "content" = '# Integers on the Number Line

*Aligns with Grade 6 rational-number introductions in open curricula (e.g. OUR Grade 6 Unit 7 scope).*

## Teach
**Integers** are …, −2, −1, 0, 1, 2, …  
On a number line, negatives are left of 0; positives are right.

**Opposite** of 4 is −4 (same distance, opposite direction).  
**Absolute value** \(|-7| = 7\) means distance from 0 is 7.

### Contexts
- Temperature: −3°F is 3 degrees below 0.  
- Elevation: −40 ft means 40 ft below sea level.  
- Money: −\$12 can mean \$12 owed.

## Practice
1. Plot −5, 0, 3. What is the opposite of −5?
2. Which is farther from 0: −8 or 6?
3. A submarine is at −120 m; it rises 45 m. New depth?

## Stretch
Write a story problem whose answer is −9 and explain the zero point you chose.

## Source note
Original Prosper Prep instruction; conceptual scope shares Grade 6 rational-number goals with OUR/IM.' WHERE "id" = 'cmuh9bwtz03rtedansyz477gk';

UPDATE "Lesson" SET "description" = 'Translate words to algebraic expressions; evaluate expressions for given values.', "objectives" = '• Use variables to represent unknown quantities.
• Translate verbal phrases to expressions.
• Evaluate with substitution.', "content" = '# Expressions and Variables

## Teach
A **variable** is a letter standing for a number that can change. An **expression** combines numbers, variables, and operations — it does **not** have an equals sign (that would be an equation).

### Translation bank
- “7 more than \(n\)” → \(n + 7\)
- “twice a number \(x\)” → \(2x\)
- “5 less than twice \(y\)” → \(2y - 5\)
- “the quotient of \(m\) and 4” → \(\frac{m}{4}\)

### Evaluate
For \(3x + 2\) when \(x = 4\): \(3(4) + 2 = 14\).

## Practice
1. Translate: “9 less than the product of 4 and \(k\).”
2. Evaluate \(5a - 3\) for \(a = 6\).
3. Why is \(2(x + 3)\) different from \(2x + 3\)? Test \(x = 1\).

## Stretch
Write two different verbal phrases for \(4(n - 2)\) and evaluate for \(n = 10\).

## Source note
Original Prosper Prep algebra-readiness instruction for Grade 6.' WHERE "id" = 'cmuh9bwu203s7edanr21u7izr';

UPDATE "Lesson" SET "description" = 'Solve one-step equations with inverse operations and check solutions.', "objectives" = '• Solve \(x + a = b\), \(x - a = b\), \(ax = b\), \(x/a = b\).
• Check by substitution.
• Model with balance thinking.', "content" = '# One-Step Equations

## Teach
An **equation** states that two expressions are equal. To solve, use **inverse operations** to isolate the variable — keep the balance true on both sides.

### Models
- \(x + 7 = 20\) → subtract 7 → \(x = 13\)
- \(x - 4 = 9\) → add 4 → \(x = 13\)
- \(5x = 45\) → divide by 5 → \(x = 9\)
- \(\frac{x}{6} = 3\) → multiply by 6 → \(x = 18\)

**Always check:** substitute back into the original equation.

## Practice
1. Solve \(x + 15 = 42\) and check.
2. Solve \(8x = 56\).
3. A number divided by 7 is 9. Write and solve the equation.

## Stretch
Write a one-step equation for a sports-stats story (points, yards). Solve and explain the inverse operation you chose.

## Source note
Original Prosper Prep instruction.' WHERE "id" = 'cmuh9bwua03sledan9lf6ng8h';

UPDATE "Lesson" SET "description" = 'Find area of triangles and composite polygons using formulas and decomposition.', "objectives" = '• Use \(A = \frac{1}{2}bh\) for triangles.
• Decompose polygons into rectangles and triangles.
• Include correct square units.', "content" = '# Area of Triangles and Polygons

*Conceptual alignment with Grade 6 area units in open curricula (OUR Unit 1 / related geometry).*

## Teach
**Area** measures covering in square units.  
Triangle: \(A = \frac{1}{2} b h\) where height is perpendicular to the base you chose.

### Why half?
A parallelogram with base \(b\) and height \(h\) has area \(bh\). A triangle is half of a parallelogram with the same base and height.

### Composite shapes
A patio shaped like a rectangle with a triangular bay: area = rectangle + triangle. Sketch, label, compute, then add.

## Practice
1. Triangle with \(b = 10\,\text{cm}\), \(h = 7\,\text{cm}\). Area?
2. Why must height be perpendicular to the base?
3. An L-shaped region is 8×6 with a 3×2 rectangle cut from a corner. Find the area.

## Stretch
Design a triangular garden against an 18-ft fence (base). Choose a height and compute area; explain units.

## Source note
Original Prosper Prep geometry instruction.' WHERE "id" = 'cmuh9bwud03szedandz6bpqqp';

UPDATE "Lesson" SET "description" = 'Use nets to find surface area of rectangular prisms and other polyhedra.', "objectives" = '• Match nets to 3D solids.
• Compute surface area from nets or face sums.
• Distinguish surface area from volume.', "content" = '# Surface Area Nets

## Teach
A **net** is a 2D pattern that folds into a 3D solid. **Surface area** is the total area of all faces.

### Rectangular prism
Faces: 2 of \(l \times w\), 2 of \(l \times h\), 2 of \(w \times h\).  
\(SA = 2lw + 2lh + 2wh\).

### Net check
If a “net” overlaps when folded or leaves a face out, it is not a valid net.

**Volume** (space inside) is different from surface area (wrapping).

## Practice
1. Prism \(3 \times 4 \times 5\). Find surface area.
2. Sketch a valid net for a cube.
3. A gift box needs wrapping paper. Do you need surface area or volume? Why?

## Stretch
Build a paper net for a rectangular prism of your dimensions; compute SA two ways (net and formula) and compare.

## Source note
Original Prosper Prep instruction aligned with Grade 6 surface-area goals.' WHERE "id" = 'cmuh9bwuh03tdedanc453vboy';

UPDATE "Lesson" SET "description" = 'Distinguish statistical questions; describe distributions with shape, center, and spread ideas.', "objectives" = '• Identify statistical vs non-statistical questions.
• Read dot plots / simple histograms.
• Describe center and spread in words.', "content" = '# Statistical Questions and Distributions

*Aligns with Grade 6 statistics introductions in open middle-school math (e.g. OUR Unit 8 scope).*

## Teach
A **statistical question** anticipates variability in the data.  
- Non-statistical: “How tall is our teacher?” (one value)  
- Statistical: “How tall are Grade 6 students in our school?” (many values)

A **distribution** shows how values are spread. Describe:
- **Shape** (clustered, skewed, roughly symmetric)
- **Center** (typical value — median/mean intro)
- **Spread** (how far values tend to sit from the center)

### Dot plot reading
If most dots sit near 7 with a few at 12, say: “Center near 7; slight right skew from high outliers.”

## Practice
1. Classify: “What is the capital of Texas?” vs “How many minutes do students spend on homework?”
2. Why does variability matter for a statistical question?
3. From a class dot plot of siblings (0–5), describe shape and a typical value.

## Stretch
Write two statistical questions you could survey at Prosper Prep; predict shape before collecting (hypothetical) data.

## Source note
Original Prosper Prep statistics lesson; scope shares Grade 6 stats goals with OUR/IM.' WHERE "id" = 'cmuh9bwul03tredan7mfjaneg';

UPDATE "Lesson" SET "description" = 'Explain cells as the basic units of life; compare plant and animal cell structures.', "objectives" = '• State the cell theory ideas at Grade 6 level.
• Identify nucleus, membrane, cytoplasm, chloroplasts, cell wall.
• Compare plant vs animal cells.', "content" = '# Cells as Building Blocks

*Grade 6 Life Science · Prosper Prep original. Concepts reflect widely taught middle-school cell basics (CKSci / NGSS-aligned life science progressions). U.S. government education pages (NIH, NASA bio) are public domain for factual science concepts.*

## Teach
Living things are made of **cells** — the smallest units that carry out life processes. At Grade 6 we use three big ideas:
1. All living organisms are made of one or more cells.
2. The cell is the basic unit of structure and function.
3. New cells come from existing cells.

### Key parts
- **Cell membrane** — controls what enters/exits.
- **Nucleus** — contains genetic information (DNA).
- **Cytoplasm** — jelly-like interior where many reactions occur.
- **Mitochondria** — release energy from food (introduce as “power stations”).
- **Chloroplasts** (plants) — capture light energy for photosynthesis.
- **Cell wall** (plants) — rigid support outside the membrane.

### Compare
Plant cells typically have cell walls and chloroplasts; animal cells do not. Both have membranes, nuclei, and cytoplasm.

## Practice
1. Why are viruses not usually called cells in this lesson’s sense?
2. Name two structures plant cells have that animal cells lack.
3. If a cell’s membrane failed, what problem would appear first?

## Stretch
Draw and label a plant cell and an animal cell. Write three sentences comparing them.

## Source note
Original Prosper Prep text. Factual cell concepts are standard public science knowledge; scope aligns with middle-school life science.' WHERE "id" = 'cmuh9bwv803w0edanibeburjg';

UPDATE "Lesson" SET "description" = 'Explain photosynthesis as the process plants use to make food from light, water, and carbon dioxide.', "objectives" = '• State inputs and outputs of photosynthesis.
• Connect chloroplasts to the process.
• Explain why photosynthesis matters in food webs.', "content" = '# Photosynthesis Overview

## Teach
**Photosynthesis** is how producers (especially plants and algae) capture light energy to build sugars.

**Word equation (Grade 6):**  
carbon dioxide + water → sugar + oxygen (in the presence of light; in chloroplasts)

### Why it matters
- Plants store chemical energy in sugars.
- Oxygen released supports many living things.
- Almost every food web traces energy back to sunlight captured by producers.

### Common misconception
Plants do **not** “eat soil” as their main food. Soil minerals matter, but the carbon in plant mass largely comes from CO₂ in air.

## Practice
1. List the inputs and outputs of photosynthesis.
2. Where in the plant cell does photosynthesis mainly occur?
3. How would a long drought stress photosynthesis? (Hint: water)

## Stretch
Create a comic strip with three panels: light capture → sugar building → oxygen release — with a one-sentence caption each.

## Source note
Original Prosper Prep instruction; public-domain science concepts (NASA/USGS education themes on energy and Earth systems).' WHERE "id" = 'cmuh9bwvc03weedan0apxjkdj';

UPDATE "Lesson" SET "description" = 'Introduce major human body systems and how they interact to maintain life functions.', "objectives" = '• Name major systems and primary jobs.
• Give one interaction example between systems.
• Explain levels: cell → tissue → organ → system.', "content" = '# Human Body Systems Intro

## Teach
The body is organized: **cells → tissues → organs → systems**.

### Snapshot of systems
- **Circulatory** — transports blood, nutrients, gases.
- **Respiratory** — exchanges O₂ and CO₂.
- **Digestive** — breaks down food; absorbs nutrients.
- **Nervous** — senses and coordinates responses.
- **Muscular/Skeletal** — movement and support.
- **Immune** — defense against pathogens (intro level).

### Interaction example
Running: respiratory brings oxygen; circulatory delivers it to muscle cells; muscular system contracts; nervous system coordinates timing.

## Practice
1. Which system exchanges gases with the environment?
2. Give one organ in the digestive system and its job.
3. Why is “systems work alone” a misconception?

## Stretch
Write a paragraph tracing oxygen from inhaled air to a muscle cell during exercise.

## Source note
Original Prosper Prep intro text for middle-school human biology.' WHERE "id" = 'cmuh9bwvg03wsedan9u35jmlp';

UPDATE "Lesson" SET "description" = 'Explain plate tectonics basics and connect to landforms, earthquakes, and Texas geology hooks.', "objectives" = '• Describe plates and plate boundaries at intro level.
• Relate boundaries to earthquakes/volcanoes/mountains.
• Connect one Texas/regional geology idea.', "content" = '# Plate Tectonics and Texas Geology Hooks

*Earth science concepts draw on USGS public-domain education themes (plate tectonics, hazards).*

## Teach
Earth’s outer shell is broken into **tectonic plates** that move slowly. Boundary types (intro):
- **Divergent** — plates move apart (new crust, rift/ridge ideas).
- **Convergent** — plates move together (mountains, subduction, volcanoes).
- **Transform** — plates slide past (earthquakes).

### Texas hook
Texas is not on a famous plate boundary like California’s transform system, but students still study sedimentary basins, Gulf Coastal Plain geology, and how ancient seas left limestone and fossils — evidence of changing Earth over deep time.

## Practice
1. Match boundary type to a likely result (earthquake / rift / mountain building).
2. Why do many volcanoes appear near convergent boundaries?
3. Name one Texas geology feature or rock idea from class or this lesson.

## Stretch
Using a world map, mark the Ring of Fire and explain in 4 sentences why earthquakes cluster there.

## Source note
Original Prosper Prep text; USGS public-domain tectonics concepts.' WHERE "id" = 'cmuh9bwvj03x6edan3ay7fjo8';

UPDATE "Lesson" SET "description" = 'Introduce atoms as basic units of matter and molecules as bonded atom groups.', "objectives" = '• Define atom and molecule.
• Use simple particle models.
• Distinguish elements from compounds at intro level.', "content" = '# Atoms and Molecules

## Teach
**Atoms** are the basic building blocks of matter. Different **elements** are different types of atoms (hydrogen, oxygen, carbon…).  
**Molecules** are groups of atoms bonded together (O₂, H₂O, CO₂).

### Particle model habits
- Matter is made of particles too small to see.
- Particles are in motion.
- Spacing and motion help explain solid/liquid/gas (bridge to later lessons).

### Compound vs mixture (intro)
Water (H₂O) is a **compound** with fixed composition. Salt water is a **mixture** you can separate by physical means.

## Practice
1. Is O₂ an atom or a molecule? Explain.
2. Why is “atoms are visible with a school microscope” usually false?
3. Give one element and one compound from everyday life.

## Stretch
Build a key: element / molecule of an element / compound — with one example each.

## Source note
Original Prosper Prep physical science intro.' WHERE "id" = 'cmuh9bwvn03xkedang1d59hhn';

UPDATE "Lesson" SET "description" = 'Distinguish physical and chemical changes using evidence of new substances.', "objectives" = '• Define physical vs chemical change.
• Use evidence (color, gas, temperature, precipitate).
• Classify everyday examples.', "content" = '# Chemical vs Physical Changes

## Teach
**Physical change:** identity of the substance stays the same (phase change, breaking, dissolving often taught here with care).  
**Chemical change:** a new substance forms (rusting, burning, baking reactions).

### Evidence clues (not proof alone)
Color change, gas production, temperature change, light, precipitate — investigate before concluding.

### Examples
- Melting ice → physical.  
- Digestion of starch → chemical.  
- Tearing paper → physical.  
- Burning paper → chemical.

## Practice
1. Classify: freezing water; frying an egg; dissolving sugar (discuss); rusting nail.
2. Why isn’t bubbles *always* a chemical change?
3. Design a yes/no test question to distinguish melting butter from burning butter.

## Stretch
Create six flashcards (3 physical, 3 chemical) with evidence notes on the back.

## Source note
Original Prosper Prep instruction.' WHERE "id" = 'cmuh9bwvr03xyedanbngqho9w';

UPDATE "Lesson" SET "description" = 'Relate forces to motion changes; introduce Newton’s laws at a Grade 6 conceptual level.', "objectives" = '• Define force and net force.
• State Newton’s 1–3 ideas in Grade 6 language.
• Analyze a simple motion scenario.', "content" = '# Forces, Motion, and Newton''s Laws

## Teach
A **force** is a push or pull. **Net force** is the overall force. Balanced forces → no change in motion; unbalanced forces → speeding up, slowing down, or changing direction.

### Newton ideas (Grade 6 wording)
1. Objects keep doing what they’re doing unless a net force acts (inertia).
2. Stronger net force → greater acceleration; more mass → less acceleration for the same force.
3. Forces come in pairs: if A pushes B, B pushes A equally opposite.

### Scenario
A soccer ball at rest stays at rest until kicked (1). A harder kick changes speed more (2). The ball pushes back on the foot (3).

## Practice
1. Why does a book on a table not fall through? (Hint: paired forces)
2. Two equal opposite forces on a box — what happens to motion?
3. Explain inertia with a bus starting suddenly.

## Stretch
Photograph or sketch three forces in your home; label direction and whether they are balanced.

## Source note
Original Prosper Prep physics intro.' WHERE "id" = 'cmuh9bwvu03ycedan5efyq7h9';

UPDATE "Lesson" SET "description" = 'Compare sound and light as waves; relate amplitude/frequency to experience.', "objectives" = '• Describe waves as energy transfer.
• Connect amplitude and frequency to loudness/pitch or brightness/color ideas.
• Contrast what sound and light need to travel.', "content" = '# Waves: Sound and Light

## Teach
**Waves** transfer energy without permanently transferring matter.  
**Amplitude** relates to how “strong” the wave feels (loudness for sound).  
**Frequency** relates to pitch (sound) and connects to color ideas for light at intro level.

### Sound vs light
- Sound needs a medium (air, water, solids).  
- Light can travel through space (vacuum) — how sunlight reaches Earth.

### Model habit
Use diagrams: crest, trough, wavelength. Avoid claiming students must memorize formulas yet; prioritize relationships.

## Practice
1. Why can’t astronauts hear each other in space without radios?
2. If amplitude increases, what happens to loudness?
3. Name one way light behaves differently from sound.

## Stretch
Make a two-column chart: Sound | Light — medium needed, speed (qualitative), and one technology that uses each.

## Source note
Original Prosper Prep waves intro; NASA education themes on light/energy are public domain.' WHERE "id" = 'cmuh9bwvx03yqedanf8fathcl';

UPDATE "Lesson" SET "description" = 'Distinguish weather vs climate; identify factors that influence climate and human impacts.', "objectives" = '• Contrast weather and climate.
• Name climate factors (latitude, altitude, proximity to water, ocean currents).
• Discuss one human impact with evidence habits.', "content" = '# Climate Factors and Human Impact

*Earth systems themes align with USGS/NASA education (public domain) on climate vs weather and human influence.*

## Teach
**Weather** = short-term conditions. **Climate** = long-term patterns over decades.

### Factors that shape climate
- Latitude (sun angle)
- Altitude
- Distance from large bodies of water
- Ocean currents and prevailing winds
- Landforms (rain shadows — intro)

### Human impact (evidence habit)
Humans burn fuels, change land cover, and emit greenhouse gases. Grade 6 focus: read a simple graph or map, distinguish evidence from opinion, and name one local action (energy use, trees, transport) without overstating certainty.

## Practice
1. “It snowed today, so climate is changing” — what’s wrong with that reasoning?
2. Why might a coastal city have milder winters than an inland city at similar latitude?
3. List one human activity and one evidence type scientists use to study climate.

## Stretch
Write a CER paragraph: claim about a climate factor affecting a Texas region; evidence from a map/graph; reasoning.

## Source note
Original Prosper Prep text; NASA/USGS public-domain Earth-system concepts.' WHERE "id" = 'cmuh9bww003z4edanucjlvyuq';

UPDATE "Lesson" SET "description" = 'Use maps, scale, and spatial thinking to interpret places and patterns.', "objectives" = '• Read map keys, scale, and directions.
• Distinguish physical vs political maps.
• Describe a spatial pattern in words.', "content" = '# Geography Tools and Spatial Thinking

*Grade 6 World History / Geography · Prosper Prep original. Map-skills emphasis aligns with Core Knowledge History and Geography (CKHG) geography foundations; Library of Congress map collections are public-domain resources for primary-source map study.*

## Teach
Geography tools help us answer: *Where? Why there? Why care?*

- **Legend/key** — what symbols mean  
- **Scale** — distance on map vs Earth  
- **Compass rose** — cardinal directions  
- **Latitude/longitude** — absolute location grid

### Map types
Physical (landforms/elevation), political (borders), thematic (population, climate, trade).

### Spatial thinking sentence frame
“____ clusters near ____ because ____.”

## Practice
1. Why is a map without a scale risky for measuring trip distance?
2. Give one question a thematic map answers that a political map might not.
3. Describe a pattern: cities along a river — propose one reason.

## Stretch
Using any atlas or online public-domain map (LOC), write five observations and one inference — label which is which.

## Source note
Original instruction; LOC maps are public domain; CKHG free materials available for download with attribution.' WHERE "id" = 'cmuh9bwwo041dedan54hc5an6';

UPDATE "Lesson" SET "description" = 'Explain why early civilizations rose along rivers and compare Nile, Mesopotamia, Indus, and Huang He hooks.', "objectives" = '• Link rivers to farming, trade, and cities.
• Compare at least two river civilizations.
• Use cause→effect language for irrigation and surplus.', "content" = '# Ancient River Civilizations

*Topics align with Core Knowledge Sequence / CKHG ancient history units and common Grade 6 world history scopes. Text is original Prosper Prep authorship.*

## Teach
Early complex societies often grew in **river valleys**: Nile (Egypt), Tigris–Euphrates (Mesopotamia), Indus, Huang He (Yellow River).

### Why rivers?
- Floods deposited fertile soil.
- Fresh water for drinking and irrigation.
- Transport and trade corridors.
- Surpluses → specialization (artisans, scribes, leaders).

### Compare hooks
- Egypt: predictable Nile floods; pharaoh and monumental building.  
- Mesopotamia: less predictable floods; city-states; early writing (cuneiform) for records.  
- Indus: planned cities (e.g. grid-like layouts in archaeological study).  
- Huang He: fertile loess soils; flood risk; early dynastic traditions.

## Practice
1. Cause→effect: irrigation → ?
2. Why might unpredictable floods push communities to organize large projects?
3. Name one similarity and one difference between Egypt and Mesopotamia from this lesson.

## Stretch
Create a four-box comparison chart (Nile / Mesopotamia / Indus / Huang He) with geography + one cultural achievement each.

## Source note
Original Prosper Prep survey text. For deeper free materials see Core Knowledge CKHG downloads (adapt/share with attribution; do not sell adaptations as a commercial curriculum package).' WHERE "id" = 'cmuh9bwwt041redanhvtpg264';

UPDATE "Lesson" SET "description" = 'Survey major shifts from medieval worlds toward early modern exchange, technology, and states.', "objectives" = '• Define medieval vs early modern as rough eras.
• Identify continuity and change examples.
• Connect trade/tech to wider connections.', "content" = '# Medieval to Early Modern Change

## Teach
Historians use era labels carefully. Roughly, **medieval** periods feature agrarian societies, religious institutions with huge influence, and regional kingdoms/empires. **Early modern** centuries see expanded long-distance trade, new technologies (printing, navigation tools), and stronger centralized states in many regions.

### Continuity and change
- Continuity: farming remains central for most people.  
- Change: information spreads differently after printing; oceans become highways for exchange — with both cultural flowering and conquest/catastrophe.

### Student habit
Avoid “dark ages” stereotypes. Ask: *For whom? Where? What evidence?*

## Practice
1. Give one continuity and one change from the teach section.
2. Why is “everyone suddenly became modern in 1500” a weak claim?
3. How could printing change religious and scientific debate?

## Stretch
Timeline of 6 events (student-researched from free encyclopedias/CKHG) spanning medieval→early modern with one sentence significance each.

## Source note
Original Prosper Prep survey; encourages CKHG and OER Project free materials for enrichment.' WHERE "id" = 'cmuh9bwwy0425edanrj5x4cdu';

UPDATE "Lesson" SET "description" = 'Overview major world religions and cultures with respect, geography, and shared human questions.', "objectives" = '• Locate major traditions on a world map at intro level.
• Distinguish belief study from stereotyping.
• Compare a shared human question across two traditions.', "content" = '# World Religions and Cultures Overview

## Teach
Grade 6 surveys (not devotionals) ask: *What do communities believe? How do beliefs shape art, law, calendar, and charity?* Study with **respect and accuracy**.

### Academic habits
- Use primary-friendly summaries and trusted encyclopedias.
- Separate **description** from **judgment**.
- Notice geography: traditions spread along trade routes and empires.

### Shared questions (examples)
Why is there suffering? How should we treat strangers? What is a good life?

## Practice
1. Why is “all people in X country believe Y” risky?
2. Name one way religion can appear in art or architecture.
3. Write one respectful comparison sentence about two traditions’ charity ideals (student research).

## Stretch
Map three traditions’ historic heartlands; add one arrow showing a major historical spread; cite your free source.

## Source note
Original Prosper Prep academic survey framing.' WHERE "id" = 'cmuh9bwx3042jedan608muevz';

UPDATE "Lesson" SET "description" = 'Analyze motives and impacts of early modern exploration and contact — including trade, conflict, and cultural change.', "objectives" = '• List motives (wealth, religion, glory/competition, knowledge).
• Explain Columbian Exchange basics.
• Weigh benefits and harms with evidence language.', "content" = '# Age of Exploration Impacts

## Teach
European oceanic exploration (and parallel maritime activity in other regions) reshaped world connections.

### Motives (memory hook)
Wealth, religious goals, state competition, and curiosity — not a single cause.

### Columbian Exchange (intro)
Transfer of plants, animals, people, and diseases between hemispheres. Outcomes included new foods in many diets **and** catastrophic epidemics for Indigenous peoples — both must be taught.

### Historian habit
Ask: *Who gained power? Who lost land or life? What evidence survives?*

## Practice
1. Name two motives for exploration voyages.
2. Give one food that traveled across oceans (student example) and one tragic impact.
3. Why is “discovery of empty land” a false frame?

## Stretch
CER: “The Columbian Exchange transformed diets worldwide” — evidence + acknowledgment of human cost.

## Source note
Original Prosper Prep instruction; Library of Congress and Smithsonian Learning Lab offer free primary sources for enrichment.' WHERE "id" = 'cmuh9bwx7042xedank9f9wih1';

UPDATE "Lesson" SET "description" = 'Introduce revolutionary ideas and how new governments claimed legitimacy.', "objectives" = '• Define revolution vs reform at intro level.
• Connect ideas (rights, representation) to institutional change.
• Compare claims of legitimacy.', "content" = '# Revolutions and New Governments

## Teach
A **revolution** is a major, often rapid transformation of political power and sometimes social order. Revolutions claim new **legitimacy** — “the right to rule” based on people, law, or ideology rather than only inheritance.

### Idea hooks
Rights language, representation, written constitutions, and citizenship expand in some revolutions — unevenly, and often excluding many people at first.

### Compare questions
What grievances? What new institutions? Who was included/excluded?

## Practice
1. Difference between protest and revolution (Grade 6 wording)?
2. Why might a written constitution matter after a revolution?
3. Name one group often excluded from early “rights” promises in Atlantic revolutions (student knowledge).

## Stretch
One-pager: causes / turning point / new government feature / unfinished struggle — for a revolution studied in class.

## Source note
Original Prosper Prep civics-history bridge lesson.' WHERE "id" = 'cmuh9bwxa043bedanz58djl70';

UPDATE "Lesson" SET "description" = 'Explain how industrialization changed work, cities, and daily life.', "objectives" = '• Define industrialization.
• Link factories to urbanization.
• Weigh gains (goods, jobs) and costs (labor, pollution).', "content" = '# Industrialization and Society

## Teach
**Industrialization** shifts production toward machines, factories, and fossil-fuel energy. Effects include:
- Urban growth
- New social classes and labor struggles
- Faster production of goods
- Pollution and harsh working conditions in many early factories

### Continuity
Rural life continues for many; change is uneven across regions.

## Practice
1. Cause→effect: factory jobs → city growth. Add one more link.
2. Why might child labor laws become a reform demand?
3. Name one benefit and one cost of early industrialization.

## Stretch
Diary entry (historical fiction, 12 sentences) from a factory worker *or* factory owner — then a 3-sentence historian’s note on bias.

## Source note
Original Prosper Prep survey lesson.' WHERE "id" = 'cmuh9bwxe043pedan9swonk0o';

UPDATE "Lesson" SET "description" = 'Survey major 19th-century Texas turning points with multiple perspectives.', "objectives" = '• Sequence key 19th-century Texas eras at survey level.
• Explain why perspective matters (Tejano, Indigenous, Anglo, Mexican, African American).
• Use cause→effect for annexation/war/frontier change.', "content" = '# Texas in the 19th Century

*TEKS-friendly Texas history survey · Prosper Prep original. Not an official TEA publication.*

## Teach
Nineteenth-century Texas includes Indigenous nations’ homelands, Spanish/Mexican heritage, the Texas Revolution, Republic years, U.S. annexation, the U.S.–Mexico War context, Civil War/Reconstruction impacts, and frontier conflicts — told with **multiple perspectives**.

### Historian habit
Ask whose voices appear in a textbook image or primary source — and whose are missing. Texas State Library & Archives and Library of Congress host free primary sources.

## Practice
1. Why is “empty frontier” a misleading phrase?
2. Give one cause and one effect related to U.S. annexation of Texas (survey level).
3. Name two groups whose experiences differed sharply in the same decade.

## Stretch
Primary source protocol: observe → reflect → question on a free LOC or TSLAC image; write three questions for further research.

## Source note
Original Prosper Prep Texas survey; encourages public archives.' WHERE "id" = 'cmuh9bwxh0443edanpe7c2a6w';

UPDATE "Lesson" SET "description" = 'Survey U.S. civil rights milestones and the difference between law and lived equality.', "objectives" = '• Define civil rights at Grade 6 level.
• Sequence selected milestones.
• Explain nonviolent strategies and unfinished work.', "content" = '# U.S. Civil Rights Milestones

## Teach
**Civil rights** are the rights of citizens to political and social freedom and equality. U.S. history includes slavery’s abolition, Reconstruction amendments, Jim Crow segregation, and the long Black freedom struggle — plus parallel movements for other groups.

### Milestone hooks (survey)
- Legal landmarks (e.g. brown v. board as a court turning point students will study by name in later grades; introduce as school-segregation case)
- Public protest, boycotts, voter registration, court cases, legislation
- The gap between **law on paper** and **equality in daily life**

### Character education link
Courage, persistence, and coalition-building — without simplifying history into a finished fairy tale.

## Practice
1. Why might winning a court case not end discrimination overnight?
2. Name one nonviolent strategy and why it can be powerful.
3. What does “unfinished work” mean for civil rights today (student-appropriate example)?

## Stretch
Bio card: one civil rights figure — goal, method, obstacle, impact — citing a Smithsonian Learning Lab or LOC free source.

## Source note
Original Prosper Prep civics-history lesson; Smithsonian Learning Lab & LOC for free enrichment.' WHERE "id" = 'cmuh9bwxl044hedan01esbnx4';
