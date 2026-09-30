# Grade 6 sequential unit unlock

**Shipped:** 2026-09-29 (America/Chicago) · migration `0015_unit_unlock_override.sql`

## Rule (chosen)

Units unlock **in order**. Unit 1 is always open.

**Unit N+1 opens when Unit N is cleared.** A unit is cleared when **either**:

1. **All lessons** in that unit are marked complete (`Progress.completed`), **or**
2. The student has a **Unit Check** attempt on that unit with **percent ≥ 60** (`UNIT_CHECK_PASS_PERCENT`).

Lessons **inside** an unlocked unit stay freely open (no per-lesson gate).  
Unit Check quizzes still require all lessons in *that* unit (unchanged).

Locked units stay **visible** on the year map (grayed) with: “Finish Unit N to unlock.”

## Overrides

Admins and teachers can set `UnitUnlockOverride.maxUnlockedUnit = N` for a student+course so units `1..N` open ahead of the sequential gate. UI: Super Admin → Unit unlock. API: `POST /api/admin/unit-unlock`.

## Scope

Any Grade 6 course using `sectionKey = unit-N` (Math first; ELA / Science / History reuse the same helpers).

## Code

- `src/lib/unitUnlock.ts` — pure rule
- `src/lib/resolveUnitUnlock.ts` — DB resolution
- `src/components/grade6/Grade6UnitAccordion.tsx` — locked UI
- Course + lesson pages gate students; staff bypass for browsing
