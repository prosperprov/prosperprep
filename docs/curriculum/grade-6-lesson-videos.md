# Grade 6 lesson videos (Prosper-branded covers)

## Pattern

`LessonVideo` (`src/components/LessonVideo.tsx`) already implements Prosper rebranding:

- Custom poster when provided (`lessonPosterUrl`), otherwise Prosper gradient cover with school name
- On play: youtube-nocookie embed with chrome stripped + Prosper mark on the bottom bar
- Never treats Khan/YouTube thumbnails as Prosper brand

## What we ship in migration `0011_grade6_lesson_videos.sql`

- Sets `Lesson.videoUrl` for Grade 6 Math / ELA / Science / World History **year-path** lessons only when a **strong** title/keyword match exists in `prisma/khan-videos.ts`
- Leaves `videoUrl` null when no strong match (prefer blank over wrong)

## Licensing / product posture

Khan Academy materials are often **CC BY-NC-SA**. Prosper Prep is a paid school product, so wholesale embedding of KA videos behind login is **product-risky**. We therefore:

1. Do **not** scrape or bulk-import the KA catalog
2. Only attach **curated public YouTube URLs** already used elsewhere in our seed/catalog
3. Always wrap playback in Prosper cover branding (existing `LessonVideo` pattern)
4. Keep student-facing lesson **text** free of Khan/CKLA self-labels (separate scrub migrations)

If legal review later forbids these embeds, null the URLs — the UI already hides the player when `videoUrl` is null.
