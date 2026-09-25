/**
 * Verify Grade 10 showcase section quizzes have no stock distractor pool phrasing.
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const STOCK = [
  "Unrelated option",
  "Treat the topic as optional enrichment",
  "best study habit",
  "Rely on slogans instead of working examples",
  "Reverse the relationship described in the lesson",
  "Skip the definition and guess from context alone",
  "Ignore units, definitions, and stated constraints",
  "This claim is not supported by the lesson material",
  "A plausible but incorrect reading",
  "Apply the lesson definitions carefully before choosing",
  "Section quizzes reward connecting definitions",
  "Integrate ideas from",
];

async function main() {
  const courses = await prisma.course.findMany({
    where: {
      grade: 10,
      OR: [
        { subject: { contains: "Algebra" } },
        { subject: { contains: "English" } },
        { subject: { contains: "Bible" } },
      ],
    },
    include: {
      quizzes: {
        include: { questions: true },
        orderBy: { order: "asc" },
      },
      lessons: { select: { id: true } },
    },
    orderBy: { title: "asc" },
  });

  let failed = false;
  for (const c of courses) {
    const quizQCount = c.quizzes.reduce((n, q) => n + q.questions.length, 0);
    console.log(`\n=== ${c.title} ===`);
    console.log(`id: ${c.id}`);
    console.log(`lessons: ${c.lessons.length}, section quizzes: ${c.quizzes.length}, quiz questions: ${quizQCount}`);

    const hits: { quiz: string; pattern: string; snippet: string }[] = [];
    for (const quiz of c.quizzes) {
      if (quiz.questions.length < 8 || quiz.questions.length > 12) {
        console.log(`  WARN ${quiz.title}: ${quiz.questions.length} questions (want 8–12)`);
      }
      for (const q of quiz.questions) {
        const blob = [q.prompt, q.choices, q.explanation || ""].join("\n");
        for (const pat of STOCK) {
          if (blob.includes(pat)) {
            hits.push({ quiz: quiz.title, pattern: pat, snippet: q.prompt.slice(0, 80) });
          }
        }
        if (/East Texas|\bTexas\b/i.test(blob) && c.subject.includes("Bible")) {
          hits.push({ quiz: quiz.title, pattern: "Texas/East Texas", snippet: q.prompt.slice(0, 80) });
        }
      }
    }
    if (hits.length) {
      failed = true;
      console.log(`  STOCK HITS: ${hits.length}`);
      for (const h of hits.slice(0, 20)) {
        console.log(`    [${h.pattern}] ${h.quiz}: ${h.snippet}`);
      }
    } else {
      console.log(`  stock-pattern hits in quiz questions: 0`);
    }
  }

  // grep-style proof across all quiz question text for these courses
  const ids = courses.map((c) => c.id);
  const allQuizQs = await prisma.question.findMany({
    where: { quiz: { courseId: { in: ids } } },
  });
  console.log(`\nTotal quiz questions across 3 showcase courses: ${allQuizQs.length}`);
  for (const pat of STOCK) {
    const n = allQuizQs.filter((q) =>
      [q.prompt, q.choices, q.explanation || ""].join("\n").includes(pat)
    ).length;
    console.log(`  grep "${pat.slice(0, 40)}${pat.length > 40 ? "…" : ""}": ${n}`);
  }

  if (failed) {
    process.exitCode = 1;
    console.error("\nFAIL: stock patterns still present");
  } else {
    console.log("\nPASS: no known stock distractor strings in showcase section quizzes");
  }
}

main()
  .finally(() => prisma.$disconnect());
