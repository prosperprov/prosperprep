import { PrismaClient } from "@prisma/client";
import { parseWrittenPrompts } from "../src/lib/writtenPrompts";

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.findFirst({
    where: { grade: 12, subject: { contains: "ACT" } },
    include: {
      lessons: { orderBy: { order: "asc" } },
      quizzes: {
        include: { _count: { select: { questions: true } } },
        orderBy: { order: "asc" },
      },
    },
  });
  if (!course) throw new Error("no course");
  console.log("lessons", course.lessons.length);
  for (const l of course.lessons) {
    const qs = await prisma.question.count({ where: { lessonId: l.id } });
    const { prompts } = parseWrittenPrompts(l.content || "");
    console.log(
      l.order,
      l.title,
      l.sectionKey,
      "mcq",
      qs,
      "written",
      prompts.map((p) => `${p.title}:${p.maxScore}`).join(",") || "-"
    );
  }
  for (const q of course.quizzes) {
    console.log("QUIZ", q.order, q.title, q.sectionKey, q._count.questions);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
