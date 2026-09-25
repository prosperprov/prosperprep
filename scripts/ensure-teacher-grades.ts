
import { prisma } from "../src/lib/prisma";

async function main() {
  const jordan = await prisma.user.findUnique({ where: { email: "teacher@prosperprep.org" } });
  const priya = await prisma.user.findUnique({ where: { email: "ms.chen@prosperprep.org" } });
  if (jordan) {
    await prisma.teacherGrade.deleteMany({ where: { teacherId: jordan.id } });
    await prisma.teacherGrade.createMany({
      data: [
        { teacherId: jordan.id, grade: 6 },
        { teacherId: jordan.id, grade: 7 },
      ],
    });
    console.log("Jordan Lee -> grades 6, 7");
  }
  if (priya) {
    await prisma.teacherGrade.deleteMany({ where: { teacherId: priya.id } });
    await prisma.teacherGrade.createMany({
      data: [
        { teacherId: priya.id, grade: 9 },
        { teacherId: priya.id, grade: 10 },
      ],
    });
    console.log("Priya Chen -> grades 9, 10");
  }
}
main().then(() => prisma.$disconnect());
