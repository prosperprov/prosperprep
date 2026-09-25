import { PrismaClient } from "@prisma/client";

async function main() {
  const p = new PrismaClient();
  const courses = await p.course.findMany({
    include: { lessons: { orderBy: { order: "asc" }, take: 1 } },
    orderBy: [{ grade: "asc" }, { order: "asc" }],
  });
  const bySubject = new Map<string, number>();
  for (const c of courses) {
    bySubject.set(c.subject, (bySubject.get(c.subject) || 0) + 1);
  }
  console.log("TOTAL_COURSES", courses.length);
  console.log("TOTAL_LESSONS", await p.lesson.count());
  console.log("WITH_CONTENT", await p.lesson.count({ where: { content: { not: "" } } }));
  console.log("\nBY_SUBJECT");
  for (const [s, n] of Array.from(bySubject.entries()).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${n}\t${s}`);
  }
  const examples = [
    "ACT Prep",
    "SAT Prep",
    "College Athletic Pathway",
    "Entrepreneurship & Financial Independence",
    "Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study",
    "Mathematics",
  ];
  console.log("\nEXAMPLE_URLS (grade 10 preferred)");
  for (const sub of examples) {
    const c =
      (await p.course.findFirst({
        where: { subject: sub, grade: 10 },
        include: { lessons: { orderBy: { order: "asc" }, take: 1 } },
      })) ||
      (await p.course.findFirst({
        where: { subject: sub },
        include: { lessons: { orderBy: { order: "asc" }, take: 1 } },
      }));
    if (c?.lessons[0]) {
      console.log(
        `  ${sub} (g${c.grade}): /courses/${c.id}/lessons/${c.lessons[0].id}`
      );
    }
  }
  await p.$disconnect();
}
main();
