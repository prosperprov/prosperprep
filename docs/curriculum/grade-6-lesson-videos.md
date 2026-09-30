# Grade 6 lesson videos (Prosper-branded covers)

## Pattern

`LessonVideo` (`src/components/LessonVideo.tsx`) already implements Prosper rebranding:

- Custom poster when provided (`lessonPosterUrl`), otherwise Prosper gradient cover with school name
- On play: youtube-nocookie embed with chrome stripped + Prosper mark on the bottom bar
- Never treats Khan/YouTube thumbnails as Prosper brand

## Migrations

### `0011_grade6_lesson_videos.sql` (superseded for broken IDs)

Initial curated map from `prisma/khan-videos.ts`. Many IDs were placeholders and returned YouTube "unavailable".

### `0013_grade6_fix_lesson_videos.sql`

1. **Cleared** every Grade 6 `videoUrl` whose YouTube ID failed oEmbed (404/400) — prefer null over "unavailable".
2. **Cleared** Math G6 mismatched-but-reachable IDs (wrong topic) and archived stubs.
3. **Set** Math G6 year-path lessons to **oEmbed-verified** public YouTube URLs (Khan Academy channel preferred).
4. Non-Math subjects: broken URLs cleared; many left null for later mapping.

### `0020_grade6_lesson_videos_ka_map.sql`

Maps **all four** Grade 6 year-path subjects (Math, ELA, Life & Earth Science, World History) to oEmbed-verified YouTube URLs:

1. Prefer **Khan Academy** (and KA Praxis / KA India English) channel videos whose titles match the lesson micro-skill.
2. **Clear** archived stubs and any lesson without a verified match (do not leave broken IDs).
3. Math: keep 0013 matches; fill remaining year-path gaps (double number lines, composite figures, perimeter).
4. ELA: strong coverage on grammar/syntax/punctuation + reading evidence/main idea; vocab context-clues/roots left **null** (no strong official KA YouTube match).
5. Science: matter, forces, energy, Earth/space, ecosystems, cells, traits — KA middle-school / chemistry / biology videos.
6. World History: early humans through 20th century themes via KA World History; **geography map-skills unit left null** (no strong KA YT map-skills catalog).

## Licensing / product posture

Khan Academy materials are often **CC BY-NC-SA**. Prosper Prep is a paid school product, so wholesale embedding of KA videos behind login is **product-risky**. We therefore:

1. Do **not** scrape or bulk-import the KA catalog
2. Only attach **curated public YouTube URLs** verified live via oEmbed (HTTP 200)
3. Always wrap playback in Prosper cover branding (existing `LessonVideo` pattern — no Khan branding in UI)
4. Keep student-facing lesson **text** free of Khan/CKLA self-labels (separate scrub migrations)

If legal review later forbids these embeds, null the URLs — the UI already hides the player when `videoUrl` is null.

### `0021_grade6_ela_wh_unit1_videos.sql`

Fills the **16** year-path gaps left null by 0020 so phone students see a video at the top of every Unit 1 ELA and World History lesson (same chrome as Math):

1. **ELA Unit 1 (7):** KA Reading “Using context clues…” (`CiNggzdWkIo`, `k_vfm81eYD0`), “Latin and Greek roots and affixes” (`fiaPqgwJFo4`), “What are affixes?” (`WYSnf6qy4WA`).
2. **World History Unit 1 (9):** Crash Course Geography map/geo intros, TED-Ed-used latitude/longitude (`swKBi6hHHMA`), kids physical/political maps, KA Early Silk Road for trade routes, Homeschool Pop Texas for Kids, Crash Course “What is Geography?” for unit synthesis.
3. **Science / Math:** no change (already 100% video coverage on active year-path lessons).

All IDs oEmbed-verified HTTP 200 at ship. Code path unchanged: `Grade6LessonChrome` + `LessonVideo` already mount for every G6 subject when `videoUrl` is set.
