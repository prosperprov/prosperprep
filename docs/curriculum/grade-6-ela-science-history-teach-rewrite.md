# Grade 6 ELA + Science + World History teach rewrite

**Migrations 0017–0019** · Hand-authored Warm-up / Teach / Guided / Exit / skill Check MC.

| Subject | Lessons | Migration |
|---------|---------|-----------|
| ELA | 101 | 0017 |
| Science | 81 | 0018 |
| World History | 75 | 0019 |

## Pattern
Same as Math Units 1–11 (migrations 0014 / 0016): keep IDs/titles; replace Mad-Libs `buildLessonBody()` mush with skill-specific pedagogy.
Independent practice: ELA from `grade6-ela-practice.mjs`; Science/History from hand packs.

## Quality bar
`docs/curriculum/grade-6-ratios-sample-what-is-a-ratio.md`
Prosper Prep voice only — no Khan/CKLA/CKHG attribution in student text; no LGBTQ themes; original prose.

## Protect
Generators `gen-grade6-{ela,science,history}-year.mjs` merge hand JSON when present — do not Mad-Lib overwrite.
