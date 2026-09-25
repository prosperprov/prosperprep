import { PrismaClient } from "@prisma/client";
const p = new PrismaClient();
async function main() {
  const courses = await p.course.count();
  const lessons = await p.lesson.count();
  const questions = await p.question.count();
  const quizzes = await p.quiz.count();
  const withContent = await p.lesson.count({ where: { content: { not: "" } } });
  const withObj = await p.lesson.count({ where: { NOT: { objectives: "" } } });
  const plans = await p.plan.findMany();
  const users = await p.user.findMany({ select: { email: true, role: true } });
  const sessions = await p.liveSession.count();
  const byBand = await p.course.groupBy({ by: ["gradeBand"], _count: true });
  const bySubject = await p.course.groupBy({ by: ["subject"], _count: true });
  const lessonQs = await p.question.count({ where: { lessonId: { not: null } } });
  const quizQs = await p.question.count({ where: { quizId: { not: null } } });
  const allLessons = await p.lesson.findMany({ select: { content: true, objectives: true, title: true, course: { select: { subject: true, grade: true } } } });
  const lengths = allLessons.map((l) => l.content.split(/\s+/).filter(Boolean).length);
  lengths.sort((a, b) => a - b);
  const pct = (n: number) => lengths[Math.floor((lengths.length - 1) * n)];
  console.log(JSON.stringify({
    courses, lessons, questions, quizzes, withContent, withObj, lessonQs, quizQs, sessions,
    plans: plans.map(x => ({ name: x.name, priceMonthly: x.priceMonthly, band: x.gradeBand })),
    users, byBand, bySubject: bySubject.sort((a,b)=>b._count-a._count),
    words: { min: lengths[0], p25: pct(0.25), median: pct(0.5), p75: pct(0.75), max: lengths[lengths.length-1], avg: Math.round(lengths.reduce((a,b)=>a+b,0)/lengths.length), lt150: lengths.filter(n=>n<150).length, lt300: lengths.filter(n=>n<300).length }
  }, null, 2));

  for (const sub of [
    "Bible: Hallelujah Scriptures & Paleo-Hebrew Word Study",
    "ACT Prep",
    "SAT Prep",
    "College Athletic Pathway",
    "Entrepreneurship & Financial Independence",
    "Mathematics",
    "ACT / SAT Foundations",
  ]) {
    const list = await p.course.findMany({
      where: { subject: sub },
      include: {
        lessons: { take: 1, orderBy: { order: "asc" }, include: { questions: true } },
        _count: { select: { lessons: true, quizzes: true } },
      },
      orderBy: { grade: "asc" },
    });
    if (!list.length) { console.log("MISSING", sub); continue; }
    const L = list[0].lessons[0];
    console.log(
      "SPOT",
      sub,
      "nCourses",
      list.length,
      "grades",
      list.map((c) => c.grade).join(","),
      "lessonsPer",
      list[0]._count.lessons,
      "quizzesPer",
      list[0]._count.quizzes,
      "sampleWords",
      L?.content.split(/\s+/).length,
      "sampleLQs",
      L?.questions.length,
      "id0",
      list[0].id,
      "title0",
      list[0].title
    );
  }

  // MCQ quality spot: first bible question
  const bq = await p.question.findFirst({
    where: { lesson: { course: { subject: { contains: "Bible" } } } },
  });
  console.log("SAMPLE_Q", bq ? { prompt: bq.prompt.slice(0, 120), choices: bq.choices.slice(0, 200), explanation: bq.explanation.slice(0, 100) } : null);

  // East Texas framing check in bible content
  const bibleLessons = await p.lesson.findMany({
    where: { course: { subject: { contains: "Bible" } } },
    select: { content: true, title: true },
  });
  const eastHits = bibleLessons.filter((l) => /East Texas|Texas/i.test(l.content));
  console.log("BIBLE_TEXAS_HITS", eastHits.length, "of", bibleLessons.length, eastHits.slice(0, 3).map((x) => x.title));

  // Real estate / contracts / law in entrepreneur
  const ent = await p.lesson.findMany({
    where: { course: { subject: { contains: "Entrepreneur" } } },
    select: { title: true, content: true },
  });
  const re = ent.filter((l) => /real estate|contract|law|LLC|liability/i.test(l.title + l.content));
  console.log("ENT_LAWISH", re.map((x) => x.title));
}
main().finally(() => p.$disconnect());
