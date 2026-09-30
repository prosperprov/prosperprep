# Grade 6 Math Unit 1 Ratios — pedagogy audit + rewrite plan

**Date:** 2026-09-29 (America/Chicago)  
**Status:** MVP SHIPPED 2026-09-29 — migration 0014 hand-rewrites existing 10 Unit 1 lessons (Teach/Warm-up/Guided/Exit/Check). Independent practice retained. Do not expand to 13 lessons without a new plan.  
**Course ID:** `cmuh9bwto03qledantwv3vsfd` · `sectionKey = unit-1`

---

## 1. Honest answer: curriculum map vs original text

| Layer | What it is | Honest grade |
|-------|------------|--------------|
| **Unit spine** | 11 units from live Khan G6 study (`khan-g6-study-notes.md` § Live UI). Unit 1 = Ratios. | ✅ Intentional map of *topics*, not a clone of KA UI |
| **Lesson titles** | 10 micro-skill-ish titles (What Is a Ratio? → … → Ratio Unit Review) in `scripts/gen-grade6-math-year.mjs` | ⚠️ Reasonable grain; slightly coarser than KA’s tiny blocks |
| **Student-facing Teach / Warm-up / Guided / Exit / Stretch** | **Auto-generated Mad-Libs** from one `buildLessonBody()` template. Same paragraphs every lesson; only title, hashed numbers, and a random “context” / “mistake” swap. | ❌ Feels confusing even to an adult |
| **Independent practice** | Skill-specific banks in `scripts/lib/grade6-math-practice.mjs` (added later; real ratio items) | ✅ Actually on-skill |
| **Check quiz MC** | Also templated — meta prompts (“which approach best matches…”) + “scale by 2” trivia, not skill mastery | ❌ Weak |
| **Videos** | Migration `0013` oEmbed-verified YouTube under Prosper `LessonVideo` cover | ⚠️ Several reused IDs; Double Number Lines has **no** video |

**Bottom line:** We mapped Khan *structure*, wrote *original* Prosper Prep words (no KA text paste — good for BY-NC-SA / paid product), but the Teach layer is **template mush**, not authored pedagogy. Independent practice is the only part that currently teaches the named micro-skill.

Hard rules already observed in student text: no Khan/CKLA attribution; no LGBTQ themes.

---

## 2. What’s wrong (with snippets)

### A. Teach is the same lesson 10 times (~490–500 words of boilerplate)

Every Unit 1 lesson contains the same “Big idea / Why it matters / Language bank / 4 generic steps / Sample narrative”:

> “Today's skill — **What Is a Ratio?** — sits inside ratios. In Grade 6 we build flexible representations: words, tables, diagrams, number lines, and symbols…”

> “Prefer “unit rate,” “equivalent,” **“perpendicular height,” “absolute value,” or “like terms”** when those are the ideas in play.”

An intro-to-ratios student is told about absolute value and like terms before anyone defines a ratio.

### B. “Worked examples” do not work the skill

Lesson 1 never writes `a:b` / “a to b” / `a/b` as a taught procedure. Instead:

> “Step 1 — Restate the question… Step 2 — Choose a representation… Step 3 — Compute… start from 10 and 9. One useful related value is **19**; another is a scaled pair such as 20 to 18…”

Adding 10+9=19 is irrelevant to “what is a ratio,” and equivalence is lesson 2’s skill — dumped into lesson 1.

### C. Random wrong “common mistakes”

Mistakes are `pick(MISTAKES, seed)` from a **whole-year** list:

- Lesson 1 (ratios): *“doing operations left-to-right while ignoring parentheses or exponents”*
- Lesson 2 (equivalent ratios): *“forgetting that height must be perpendicular to the chosen base”*
- Lesson 6 (simplifying): *“calling a non-statistical question 'statistical'…”*
- Lesson 7 (comparing ratios): *“confusing surface area with volume”*

### D. Warm-ups / numbers break Grade 6 sense

- Lesson 1 warm-up: percent estimate (`10/9 of 31` vs `90% of 31`) before ratios exist.
- Lesson 2: **negative** quantities (`9 and -3`) for equivalent ratios.
- Lesson 6: warm-up text includes **`00% of 27`**; Guided uses **`numbers 0 and 27`**.

### E. Guided practice is empty

> “Guided 1 — Use today's idea on numbers 10 and 9. Show each step.”  
> Teacher note: “Work with 10 and 9 using the lesson method…”

There is no method on the page.

### F. Density vs Khan

Khan: ~2–5 min video + short article + tiny practice (“Get 5 of 7”) on **one** micro-skill.  
Prosper Prep: ~6k characters of teacher-meta + scholarship CER Stretch + meta MC, with the actual skill buried in Independent practice at the bottom. Adult readers bounce off Teach before they reach the good problems.

### G. Check quizzes don’t check the skill

Typical Q1: “Which approach best matches the goal of this lesson…?” with choices about diagrams vs guessing — process praise, not ratio writing.

---

## 3. Proposed Unit 1 lesson list (Prosper Prep titles)

Keep Prosper Prep accordion UI (`sectionKey=unit-1`). Align grain to Khan-like micro-skills. Prefer **hand-authored** bodies; do **not** re-run the Mad-Libs generator for Unit 1.

| # | Prosper Prep title | Micro-skill (one idea) | Notes |
|---|--------------------|------------------------|-------|
| 1 | What Is a Ratio? | Compare two quantities; order matters | Model sample below |
| 2 | Writing Ratios Three Ways | a:b, “a to b”, a/b — same meaning | Split from current L1 mush |
| 3 | Seeing Ratios (Pictures) | Match ratio language to simple drawings / groups | New micro; optional if time |
| 4 | Part-to-Part and Part-to-Whole | Distinguish the two comparisons | Keep; rewrite Teach |
| 5 | Equivalent Ratios | Same relationship by multiplying both parts | Rewrite; **no negatives** |
| 6 | Ratio Tables | Build / read tables; missing values | Rewrite with a real filled table |
| 7 | Double Number Lines | Model equivalents on two aligned lines | Rewrite; **need video ID** |
| 8 | Tape Diagrams for Ratios | Bar model for parts / wholes | New; KA-adjacent micro |
| 9 | Simplifying Ratios | Divide both parts by GCF | Rewrite |
| 10 | Comparing Ratios | Unit rate or common second term | Rewrite |
| 11 | Ratio Word Problems | Multi-step stories with one representation | Rewrite |
| 12 | Mixing and Recipes | Scale mixtures; same taste = same ratio | Rewrite |
| 13 | Ratio Unit Review | Mixed micro-skills + error hunts | Rewrite |
| — | Unit 1 Check quiz | 10 MC, **skill items only** | Replace templated quiz |

**Minimum viable rewrite (faster):** keep current **10 titles**, only replace Teach/Warm-up/Guided/Exit/MC; keep Independent practice banks (already decent). Still ships huge clarity gains.

**Writing standards (every lesson):**

1. Short sentences; **one idea per paragraph**.  
2. Define the word, then **one fully worked numeric example** (every arithmetic step visible) **before** “Try this.”  
3. Mid-teach **Try this** (1–2 items) with answer immediately below (collapsed or labeled “check”).  
4. Guided = we-do on the **same** micro-skill.  
5. Independent = 5–7 items **only** that skill.  
6. Check quiz = 3–5 MC on that skill (not meta).  
7. Student-facing: Prosper Prep voice only — **no Khan/CKLA**.  
8. Grade 6–friendly numbers first (small positives); stretch can harden later.

---

## 4. Effort estimate

| Scope | Authoring | Eng (regen seed + D1 UPDATE migration + PR) | Total |
|-------|-----------|-----------------------------------------------|-------|
| **MVP:** rewrite Teach+Guided+Exit+MC for existing 10 Unit 1 lessons; keep practice banks | ~6–10 focused hours | ~2–3 hours | **~1–1.5 days** |
| **Full micro-skill list (12–13 lessons + new quiz + tape/pictures)** | ~12–18 hours | ~3–4 hours (new IDs, order, videos, accordion counts) | **~2.5–3.5 days** |
| Then apply pattern to Units 2–11 | ×10 more units (template same disease) | regen pipeline must change so Mad-Libs cannot overwrite | **multi-week** if all hand-authored |

**Do not** run `node scripts/gen-grade6-math-year.mjs` after hand edits unless Unit 1 is carved out of the generator.

Ship path (when Paul greenlights): hand-edit `prisma/grade6-math/year.ts` (or new `prisma/grade6-math/unit1.ts`) → new migration `00xx_grade6_math_unit1_rewrite.sql` (UPDATE content/objectives/questions only) → PR → `db:migrate:cloudflare`.

---

## 5. Blockers

1. **License:** Keep original PP text (already correct posture). Do not paste KA articles. Videos = curated public YT under Prosper cover; legal risk documented in `grade-6-lesson-videos.md`.  
2. **Missing video:** Double Number Lines (`ppg6mbc0ad0d6f452f560caac`) has **no** `videoUrl` in `0013`.  
3. **Reused videos:** Comparing / Mixing / Equivalent share `4S3Mbl0JrdY`; Word Problems shares tables ID; Review shares intro ID — rematch when rewriting.  
4. **Generator overwrite** if someone re-runs `gen-grade6-math-year.mjs`.  
5. **GitHub MCP** was `needsAuth` in this session; local clone `/workspace/prosperprep` used instead.  
6. No LGBTQ / competitor attribution issues found in Unit 1 bodies.

---

## 6. Sample rewritten lesson

See sibling file: `grade-6-ratios-sample-what-is-a-ratio.md`.
