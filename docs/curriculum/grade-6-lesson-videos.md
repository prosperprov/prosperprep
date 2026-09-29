# Grade 6 lesson videos (Prosper-branded covers)

## Pattern

`LessonVideo` (`src/components/LessonVideo.tsx`) already implements Prosper rebranding:

- Custom poster when provided (`lessonPosterUrl`), otherwise Prosper gradient cover with school name
- On play: youtube-nocookie embed with chrome stripped + Prosper mark on the bottom bar
- Never treats Khan/YouTube thumbnails as Prosper brand

## Migrations

### `0011_grade6_lesson_videos.sql` (superseded for broken IDs)

Initial curated map from `prisma/khan-videos.ts`. Many IDs were placeholders and returned YouTube "unavailable".

### `0013_grade6_fix_lesson_videos.sql` (current)

1. **Clears** every Grade 6 `videoUrl` whose YouTube ID fails oEmbed (404/400) — prefer null over "unavailable".
2. **Clears** Math G6 mismatched-but-reachable IDs (wrong topic) and archived stubs.
3. **Sets** Math G6 year-path lessons to **oEmbed-verified** public YouTube URLs (Khan Academy channel preferred). Only SET when oEmbed returns 200. Do not invent IDs.
4. Non-Math subjects: broken URLs cleared; already-working good matches left alone.

## Licensing / product posture

Khan Academy materials are often **CC BY-NC-SA**. Prosper Prep is a paid school product, so wholesale embedding of KA videos behind login is **product-risky**. We therefore:

1. Do **not** scrape or bulk-import the KA catalog
2. Only attach **curated public YouTube URLs** verified live via oEmbed
3. Always wrap playback in Prosper cover branding (existing `LessonVideo` pattern — no Khan branding in UI)
4. Keep student-facing lesson **text** free of Khan/CKLA self-labels (separate scrub migrations)

If legal review later forbids these embeds, null the URLs — the UI already hides the player when `videoUrl` is null.
