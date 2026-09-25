# P0 QC must-fixes — shipped report (Sep 22, 2026 CT)

## Done
1. Honest MVP labeling — landing, pricing, courses, enroll (+ `mvpCatalog` in brand.ts, `MvpBanner`)
2. Mobile primary nav — hamburger in `MobileNav.tsx` / `Nav.tsx` (≥44px targets)
3. `/pricing` intro finished (no mid-sentence “aligned with …”)
4. `/privacy` + `/terms` (COPPA under-13 parental consent; FERPA-aware; nonprofit East Texas) + Footer links
5. Stale demo-shots quarantined → `demo-shots/_archived_stale/` (+ README notes)
6. Student dashboard **Up next** — incomplete lessons + unlocked section quizzes
7. `/courses` filter chips: All / Core / Test Prep / Athletic Pathway / Entrepreneurship / Bible
8. `npm run qc:content` + `qc:courses` (+ qc:counts, qc:depth)
9. Grade 10 showcase curriculum started (Math, ELA, Bible @ 24 lessons each; authored MCQs)
10. `npm run build` OK; `next dev` on :3000 restarted after cache clear

## Grade 10 showcase lesson counts
| Course | Lessons | Section quizzes |
| --- | --- | --- |
| English Literature · Grade 10 | **24** | 8 |
| Algebra & Beyond · Grade 10 | **24** | 8 |
| Bible: Hallelujah Scriptures & Paleo-Hebrew · Grade 10 | **24** | 8 |
| ACT Prep · Grade 10 (not expanded this pass) | 9 | 3 |

Specialty showcase choice: **Bible** (academic Paleo-Hebrew / Hallelujah Scriptures; 0 East Texas hits in lesson bodies).

DB after reseed: 82 courses · 783 lessons · 7300 questions · 260 section quizzes.

## Deferred (not blockers for this pass)
- Expand remaining courses beyond 9-lesson starters; ACT Grade 10 to 20–30
- Full human rewrite of all non-showcase assessment banks
- Live seminar policy / attendance / recordings
- Parent deadlines / messages / planner
- AP/honors, advising role, accreditation page
- Regenerate fresh publishable demo-shots
- Stripe keys / deploy (explicitly out of scope)

## Brand preserved
Prosper Preparatory · prosperprep.org · $99 / $129 / $159 · no “One Team, One Standard”
