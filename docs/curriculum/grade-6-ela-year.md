# Grade 6 ELA — full-year path

## What shipped

- **16 units** combining Reading & Vocabulary + Grammar into one Prosper Prep Grade 6 ELA year (Khan coverage map; PP brand titles):
  1. Vocabulary Power
  2. Reading: Key Ideas and Details
  3. Reading: Key Ideas — Long Passages
  4. Grammar: Nouns
  5. Grammar: Pronouns
  6. Grammar: Verbs
  7. Reading: Craft and Structure
  8. Reading: Craft — Long Passages
  9. Grammar: Adjectives and Adverbs
  10. Grammar: Prepositions and Interjections
  11. Grammar: Sentences, Clauses, and Phrases
  12. Reading: Integration of Knowledge and Ideas
  13. Reading: Integration — Long Passages
  14. Grammar: Punctuation and Capitalization
  15. Grammar: Word Study
  16. Grammar: Style and Tone
- **101 original Prosper Prep lessons** (~7.5–8k characters each) with Objective, Warm-up, Teach (examples + common mistakes), Guided practice, Independent practice (answer key collapsed), Exit ticket, Stretch, optional Khan “extra practice” link note.
- **16 Unit Check quizzes** (10 MC each), `sectionKey` = `unit-1` … `unit-16`.
- **UI:** Grade 6 course page expandable **Units** accordion (shared with Math); lesson chrome shows **Unit X of 16** with ELA titles when `subject` is English Language Arts.
- Old 9 ELA stubs retired (`sectionKey = retired`, hidden from year path).

## License / sources

- Original Prosper Prep bodies and passages.
- Topical affinity with **Core Knowledge Language Arts (CKLA) Grade 6** free materials (adapt-with-attribution; PP authors original student-facing text — does not redistribute CKLA as a commercial package).
- Khan Academy unit map used for **sequencing only**; optional “extra practice” links note content is **free at Khan Academy**. No Khan BY-NC-SA text pasted.

## Files

| Path | Role |
|------|------|
| `scripts/gen-grade6-ela-year.mjs` | Regenerates content + migration |
| `prisma/grade6-ela/year.ts` | Lesson + quiz seeds for local `db:setup` |
| `content/grade6/ela/outline.json` | Unit counts meta |
| `migrations/0006_grade6_ela_year.sql` | Production D1 upsert (no user wipe) |
| `docs/curriculum/khan-g6-study-notes.md` | Coverage map notes |

## Production D1 (do **not** run `db:setup`)

```bash
npm run db:migrate:cloudflare
# or: npx wrangler d1 migrations apply prosperprep-school --remote
```

Use Node 22 wrangler if needed (`/tmp/node-v22.14.0-linux-x64/bin` on the box).

## Verify as student6@prosperprep.org

1. Log in at https://school.prosperprep.org
2. Open Grade 6 classroom → **English Language Arts**
3. Confirm **Year path · Units** shows 16 expandable units (not a flat 9-item list)
4. Open Unit 1 lesson 1 — body should teach vocabulary/context clues with practice + exit checks
5. Spot-check a mid/late unit (e.g. Unit 7 Craft, Unit 12 Integration, or Unit 16 Style)

```sql
SELECT sectionKey, COUNT(*) FROM Lesson
WHERE courseId = 'cmuh9bwsc03l8edangiqeczno' AND sectionKey LIKE 'unit-%'
GROUP BY sectionKey ORDER BY sectionKey;

SELECT title, length(content) AS n FROM Lesson
WHERE courseId = 'cmuh9bwsc03l8edangiqeczno' AND sectionKey = 'unit-1'
ORDER BY "order" LIMIT 3;
```

## Next handoff

Science + World History year paths can reuse the same `sectionKey=unit-N` accordion + generator/migration pipeline.
