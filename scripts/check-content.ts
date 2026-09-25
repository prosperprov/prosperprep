import { PrismaClient } from "@prisma/client";

async function main() {
  const p = new PrismaClient();
  const courses = await p.course.count();
  const lessons = await p.lesson.count();
  const withContent = await p.lesson.count({ where: { content: { not: "" } } });
  const c = await p.course.findFirst({
    where: { grade: 7, subject: "Mathematics" },
    include: { lessons: { orderBy: { order: "asc" }, take: 2 } },
  });
  console.log(
    JSON.stringify(
      {
        courses,
        lessons,
        withContent,
        courseId: c?.id,
        lessonId: c?.lessons[0]?.id,
        title: c?.lessons[0]?.title,
        words: c?.lessons[0]?.content.split(/\s+/).length,
        objectives: c?.lessons[0]?.objectives?.slice(0, 120),
      },
      null,
      2
    )
  );
  await p.$disconnect();
}
main();
