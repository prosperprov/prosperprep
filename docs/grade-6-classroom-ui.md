# Grade 6 classroom UI plan

Immersive, easy-for-kids experience for Prosper Prep middle-schoolers (first focus: Grade 6).

## Goals

- Feel like a friendly online classroom (Connections Academy clarity + kid-friendly energy).
- Large tap targets (min 44–48px), short labels, strong color cues.
- One primary action at a time: “Do this next.”
- Messaging, live class, and lessons live in one calm home base.

## Layout sketch

```
┌──────────────────────────────────────────────┐
│  👋 Hi, [Name]!  ·  Grade 6                  │
│  [Messages •]  [Live class]  [My grades]     │
├─────────────────┬────────────────────────────┤
│ TODAY           │ UP NEXT (big cards)        │
│ • Live Math 3pm │ ① Fractions lesson         │
│ • New message   │ ② Section quiz unlock      │
│                 │ ③ Reply to teacher         │
├─────────────────┴────────────────────────────┤
│ SUBJECT ISLANDS (emoji + color)              │
│ [📖 ELA] [🔢 Math] [🌍 Science] [📜 History] │
│ [💼 Biz] [🏅 Athletics] [✝ Bible]            │
└──────────────────────────────────────────────┘
```

## Subject islands

Each Grade 6 course is a large rounded “island” card:

| Subject | Accent | Icon idea |
|---------|--------|-----------|
| ELA | Emerald | Book |
| Math | Sky | Numbers |
| Life & Earth Science | Lime | Globe |
| World History | Amber | Scroll |
| Entrepreneurship | Violet | Lightbulb |
| College Athletic Pathway | Rose | Medal |
| Bible | Indigo | Cross / scroll |

Tap → course hub: lessons list, video, guided practice, quiz status, **Ask teacher** (opens DM).

## Messaging in the Grade 6 UI

- **Inbox badge** on the home hero (unread count from Notification `message_received` + thread unread).
- **Ask my teacher**: one-tap DM to assigned Grade 6 teachers.
- **Class group**: teacher-created GROUP threads appear as “Classroom chat” cards (sky badge).
- **Announcements**: BLAST threads pinned at top of Messages with amber “Announcement” chip.
- Compose UI: large recipient chips (photos optional later), big Send button, 2–3 sentence gentle prompts (“Need help? Ask your teacher.”).

## Live class strip

Reuse existing LiveSession list:

- Next session card with Join (emerald) when within window.
- Reschedule notices already flow via Notification — show under “Today.”

## Accessibility & safety

- High contrast text; avoid pure gray on gray.
- No student↔student DMs for under-13 without parent toggle (Phase 2 flag); Phase 1 allows same-grade classmate DM — gate behind enrollment ACTIVE.
- Teachers scoped by `TeacherGrade` (Grade 6 only if assigned).
- Report / block deferred to Phase 2.

## Implementation path

1. **Phase 1 (shipped in messaging branch):** shared inbox at `/dashboard/student/messages` + teacher blast/group.
2. **Phase 2 (shipped):** Grade 6 immersive classroom on `/dashboard/student` when `enrollment.grade === 6` (subject islands, progress ring, big Next Lesson CTA, Messages badge, live strip). Course/lesson chrome scales for grade 6 via `course.grade === 6`. Teacher glance when assigned grade 6.
3. **Phase 3:** avatars, reactions in GROUP threads, parent read-only mirror of announcements.

## Copy tone

Short, warm, concrete:

- “You’re doing great — finish Lesson 3 next.”
- “Your teacher sent a note.”
- “Class chat is open — be kind.”
