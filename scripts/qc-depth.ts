import { PrismaClient } from "@prisma/client";
const p = new PrismaClient();
async function main() {
  const courses = await p.course.findMany({
    include: { _count: { select: { lessons: true, quizzes: true } } },
  });
  const lessonCounts = courses.map((c) => c._count.lessons);
  const quizCounts = courses.map((c) => c._count.quizzes);
  const freq = (arr: number[]) =>
    Object.fromEntries(
      [...new Set(arr)]
        .sort((a, b) => a - b)
        .map((n) => [n, arr.filter((x) => x === n).length])
    );
  console.log({ lessonCountFreq: freq(lessonCounts), quizCountFreq: freq(quizCounts) });
  // example IDs for matrix
  for (const [label, where] of [
    ["core-math-g7", { subject: "Mathematics", grade: 7 }],
    ["act-g10", { subject: "ACT Prep", grade: 10 }],
    ["sat-g10", { subject: "SAT Prep", grade: 10 }],
    ["athletic-g10", { subject: "College Athletic Pathway", grade: 10 }],
    ["ent-g10", { subject: "Entrepreneurship & Financial Independence", grade: 10 }],
    ["bible-g10", { subject: "Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study", grade: 10 }],
    ["foundations-g8", { subject: "ACT / SAT Foundations", grade: 8 }],
  ] as const) {
    const c = await p.course.findFirst({ where: where as any });
    console.log(label, c?.id, c?.title);
  }
}
main().finally(() => p.$disconnect());
