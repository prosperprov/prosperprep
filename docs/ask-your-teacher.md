# Ask your teacher and live message alerts

In-app only. Lesson questions and alerts never send email.

## Ask your teacher

Each lesson action row (Grade 6 chrome and the same Watch video / Take quiz / Next row on other grades, phone and desktop) includes **Ask your teacher** for students. It opens the existing direct-message compose, already addressed to that student's teacher. The subject/title carries the course and lesson. The message body is only what the student types — no automatic "I'm on …" line and no debug ping.

Send uses `POST /api/messages/dm`. A lesson question is its own DM (same two people, tagged with that lesson), so a later question about a different lesson does not mix into this thread and a normal Messages DM stays untagged. Replies stay on that thread.

On the teacher thread, a panel beside the conversation shows the course, unit, and lesson, whether the student completed the lesson, the latest lesson-quiz percent if they submitted one, and that time-on-lesson is not tracked. **Open lesson** goes to the staff preview of that lesson. None of that is posted as a student message.

Prosper Prep does not store a separate homeroom teacher or a per-course owner. Teachers are assigned by grade (`TeacherGrade`). A student can only message a teacher assigned to their active enrollment grade, so the button never picks someone the DM rules would reject, and it never invents an email address.

Resolution order (stable: oldest assignment, then name):

1. **Course session teacher** — earliest live class for this course whose teacher is assigned to the student's grade.
2. **Course/grade teacher** — earliest teacher assigned to the lesson's course grade who is also assigned to the student's grade. When the course grade is the enrollment grade, that person is both the course teacher and the homeroom teacher (one grade row, not two fields).
3. **Homeroom fallback** — earliest teacher assigned to the student's enrollment grade, if nobody above can be messaged.
4. **None** — the button still opens and explains that an admin needs to assign a grade teacher. It links to Messages. No email.

## Live notifications

Students, teachers, and admins poll `GET /api/messages/pulse` about every 8 seconds while the tab is visible (also on focus). The response is the unread thread count plus the newest incoming message (last message from someone else, newer than `lastReadAt`).

That pulse:

- updates the header Messages badge and the bottom dock badge (student Dashboard/Messages, teacher Classroom/Messages, admin Dashboard/Messages) without a full reload
- shows a banner: who wrote, the subject, a short preview, and Open
- soft-refreshes the page so an open inbox picks up the new row

An open thread polls itself on the same interval and appends replies in place. The banner is skipped when that thread is already on screen.

WebSockets are not used. Cloudflare Workers with OpenNext keep this request/response poll instead of a long-lived socket.
