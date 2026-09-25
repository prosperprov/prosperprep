import { PrismaClient } from "@prisma/client";
import { actEliteG12Lessons } from "../prisma/act-elite-g12";

async function main() {
  const prisma = new PrismaClient();
  const lessons = actEliteG12Lessons();
  for (const l of lessons) {
    const m = l.content.match(/"([\s\S]*?)"\s*\n\n## Wrap-up/);
    console.log(l.title, "spoken", m ? m[1].split(/\s+/).filter(Boolean).length : "?");
  }
  const course = await prisma.course.findFirst({
    where: { grade: 12, subject: { contains: "ACT" } },
  });
  if (!course) throw new Error("no course");
  for (const l of lessons) {
    const row = await prisma.lesson.findFirst({
      where: { courseId: course.id, title: l.title },
    });
    if (!row) throw new Error("missing " + l.title);
    await prisma.lesson.update({
      where: { id: row.id },
      data: {
        content: l.content,
        description: l.description,
        objectives: l.objectives,
        durationMin: l.durationMin,
      },
    });
    console.log("db updated", l.title);
  }
  await prisma.$disconnect();
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
