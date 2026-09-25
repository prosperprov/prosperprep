import { PrismaClient } from "@prisma/client";
import type { GradeBand } from "../src/types/school";
import bcrypt from "bcryptjs";
import { jitsiRoomUrl, makeSessionSlug } from "../src/lib/jitsi";
import { lessonsForCourse, subjectsForGrade } from "./curriculum";
import { sectionQuestionsFromTopics, type TopicLike } from "./assessments";
import { getShowcaseSectionQuiz } from "./showcase-grade10-quizzes";
import { actFormAQuizzes } from "./act-elite-g12";
import { actEnglishModuleQuizzes } from "./act-elite-g12-module-e";
import { grade7EnterpriseUnitOneQuiz } from "./grade7-enterprise";

const prisma = new PrismaClient();

async function main() {
  await prisma.writtenSubmission.deleteMany();
  await prisma.attempt.deleteMany();
  await prisma.gradeEntry.deleteMany();
  await prisma.reportCard.deleteMany();
  await prisma.question.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.progress.deleteMany();
  await prisma.liveSession.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.course.deleteMany();
  await prisma.enrollment.deleteMany();
  await prisma.parentChild.deleteMany();
  await prisma.teacherGrade.deleteMany();
  await prisma.plan.deleteMany();
  await prisma.user.deleteMany();

  const passwordHash = await bcrypt.hash("demo1234", 10);

  const admin = await prisma.user.create({
    data: {
      email: "admin@prosperprep.org",
      name: "Jeremy Prosper",
      role: "ADMIN",
      passwordHash,
    },
  });

  const teacher = await prisma.user.create({
    data: {
      email: "teacher@prosperprep.org",
      name: "Jordan Lee",
      role: "TEACHER",
      passwordHash,
    },
  });

  const teacher2 = await prisma.user.create({
    data: {
      email: "ms.chen@prosperprep.org",
      name: "Priya Chen",
      role: "TEACHER",
      passwordHash,
    },
  });

  const student = await prisma.user.create({
    data: {
      email: "student@prosperprep.org",
      name: "Sam Taylor",
      role: "STUDENT",
      grade: 7,
      passwordHash,
    },
  });

  const parent = await prisma.user.create({
    data: {
      email: "parent@prosperprep.org",
      name: "Morgan Taylor",
      role: "PARENT",
      passwordHash,
    },
  });

  await prisma.parentChild.create({
    data: { parentId: parent.id, childId: student.id },
  });

  // Jordan Lee: middle-school classroom (6–7). Priya Chen: high-school (9–10).
  const student12 = await prisma.user.create({
    data: {
      email: "student12@prosperprep.org",
      name: "Alex Rivera",
      role: "STUDENT",
      grade: 12,
      passwordHash,
    },
  });

  await prisma.teacherGrade.createMany({
    data: [
      { teacherId: teacher.id, grade: 6 },
      { teacherId: teacher.id, grade: 7 },
      { teacherId: teacher2.id, grade: 9 },
      { teacherId: teacher2.id, grade: 10 },
      { teacherId: teacher2.id, grade: 12 },
    ],
  });

  const plans = await Promise.all([
    prisma.plan.create({
      data: {
        name: "Elementary Path",
        description: "Full K–5 curriculum with weekly live check-ins.",
        priceMonthly: 9900,
        gradeBand: "ELEMENTARY",
        stripePriceId: process.env.STRIPE_PRICE_ELEMENTARY || null,
      },
    }),
    prisma.plan.create({
      data: {
        name: "Middle School Path",
        description: "Grades 6–8 with live seminars and study skills support.",
        priceMonthly: 12900,
        gradeBand: "MIDDLE",
        stripePriceId: process.env.STRIPE_PRICE_MIDDLE || null,
      },
    }),
    prisma.plan.create({
      data: {
        name: "High School Path",
        description: "Grades 9–12 credit-ready coursework and office hours.",
        priceMonthly: 15900,
        gradeBand: "HIGH",
        stripePriceId: process.env.STRIPE_PRICE_HIGH || null,
      },
    }),
  ]);

  const middlePlan = plans.find((p) => p.gradeBand === "MIDDLE")!;

  await prisma.enrollment.create({
    data: {
      userId: student.id,
      planId: middlePlan.id,
      grade: 7,
      status: "ACTIVE",
      demoMode: true,
      startedAt: new Date(),
    },
  });

  const highPlan = plans.find((p) => p.gradeBand === "HIGH")!;
  await prisma.enrollment.create({
    data: {
      userId: student12.id,
      planId: highPlan.id,
      grade: 12,
      status: "ACTIVE",
      demoMode: true,
      startedAt: new Date(),
    },
  });

  let courseCount = 0;
  let lessonCount = 0;
  let questionCount = 0;
  let quizCount = 0;

  for (let grade = 0; grade <= 12; grade++) {
    const band: GradeBand = grade <= 5 ? "ELEMENTARY" : grade <= 8 ? "MIDDLE" : "HIGH";
    const subjects = subjectsForGrade(grade);
    for (let i = 0; i < subjects.length; i++) {
      const subject = subjects[i];
      const gradeName = grade === 0 ? "Kindergarten" : `Grade ${grade}`;
      const lessons = lessonsForCourse(subject, grade);

      const course = await prisma.course.create({
        data: {
          title: `${subject} · ${gradeName}`,
          description: `Foundations/MVP graded ${subject} course for ${gradeName} at Prosper Preparatory${grade === 10 && (subject.includes("Algebra") || subject.includes("English") || subject.includes("Bible")) ? " (Grade 10 showcase — expanded modules)" : ""}. Lesson checks = 40% of the course grade; section quizzes (every 3 lessons) = 60%. Latest attempt counts. Not yet a full-year credit map.`,
          subject,
          grade,
          gradeBand: band,
          order: i + 1,
        },
      });
      courseCount += 1;

      type CreatedLesson = {
        id: string;
        order: number;
        sectionKey: string;
        topicMeta?: TopicLike;
      };
      const createdLessons: CreatedLesson[] = [];

      for (const l of lessons) {
        const sectionKey = l.sectionKey || `section-${Math.floor((l.order - 1) / 3) + 1}`;
        const lesson = await prisma.lesson.create({
          data: {
            courseId: course.id,
            title: l.title,
            description: l.description,
            objectives: l.objectives,
            content: l.content,
            order: l.order,
            durationMin: l.durationMin,
            sectionKey,
            videoUrl: l.videoUrl || null,
          },
        });
        lessonCount += 1;
        createdLessons.push({
          id: lesson.id,
          order: l.order,
          sectionKey,
          topicMeta: l.topicMeta,
        });

        for (const q of l.questions || []) {
          await prisma.question.create({
            data: {
              lessonId: lesson.id,
              type: "MULTIPLE_CHOICE",
              prompt: q.prompt,
              choices: JSON.stringify(q.choices),
              correctIndex: q.correctIndex,
              explanation: q.explanation,
              points: q.points ?? 1,
              order: q.order,
            },
          });
          questionCount += 1;
        }
      }

      const bySection = new Map<string, CreatedLesson[]>();
      for (const les of createdLessons) {
        const arr = bySection.get(les.sectionKey) || [];
        arr.push(les);
        bySection.set(les.sectionKey, arr);
      }

      const isActEliteG12 =
        grade === 12 && subject.toLowerCase().startsWith("act");

      let quizOrder = 1;
      if (isActEliteG12) {
        // Module 0 has no auto section quiz — Form A diagnostics are seeded below.
      } else for (const [sectionKey, sectionLessons] of Array.from(bySection.entries())) {
        const topics: TopicLike[] = sectionLessons
          .map((sl) => sl.topicMeta)
          .filter((t): t is TopicLike => Boolean(t));

        const topicSource: TopicLike[] =
          topics.length > 0
            ? topics
            : sectionLessons.map((sl) => ({
                title: `Lesson ${sl.order}`,
                focus: `Mastery of lesson ${sl.order} in ${subject}`,
                keyIdeas: [
                  `Apply definitions from lesson ${sl.order}`,
                  `Use examples from lesson ${sl.order}`,
                  `Check work carefully`,
                ],
                practice: [
                  {
                    q: `Before answering section items for lesson ${sl.order}, you should…`,
                    a: "Review definitions and examples from the lesson.",
                  },
                  {
                    q: `Best evidence of mastery for lesson ${sl.order}?`,
                    a: "Correct use of key terms in new problems.",
                  },
                ],
              }));

        const sectionNum = sectionKey.replace("section-", "");
        const sectionLabel = `Section ${sectionNum}`;
        const isShowcaseAssessment =
          grade === 10 &&
          (subject.includes("Algebra") ||
            subject.includes("English") ||
            subject.includes("Bible"));
        const showcaseQs = getShowcaseSectionQuiz(subject, grade, sectionKey);
        if (isShowcaseAssessment && !showcaseQs) {
          throw new Error(
            `Showcase course missing authored section quiz: ${subject} ${sectionKey}`
          );
        }
        const quizQs = grade === 7 && subject === "Entrepreneurship & Financial Independence" && sectionKey === "section-1"
          ? grade7EnterpriseUnitOneQuiz()
          : isShowcaseAssessment
            ? showcaseQs!
            : sectionQuestionsFromTopics(topicSource, sectionLabel);

        const quiz = await prisma.quiz.create({
          data: {
            courseId: course.id,
            title: `${sectionLabel} Quiz`,
            description: `Covers lessons in ${sectionKey.replace("-", " ")}. Unlocks after all lessons in this section are complete. Section quizzes = 60% of the course grade (lesson checks = 40%).`,
            order: quizOrder++,
            sectionKey,
          },
        });
        quizCount += 1;

        for (const q of quizQs) {
          await prisma.question.create({
            data: {
              quizId: quiz.id,
              type: "MULTIPLE_CHOICE",
              prompt: q.prompt,
              choices: JSON.stringify(q.choices),
              correctIndex: q.correctIndex,
              explanation: q.explanation,
              points: q.points ?? 1,
              order: q.order,
            },
          });
          questionCount += 1;
        }
      }

      if (isActEliteG12) {
        const actQuizzes = [...actFormAQuizzes(), ...actEnglishModuleQuizzes()];
        for (const fq of actQuizzes) {
          const quiz = await prisma.quiz.create({
            data: {
              courseId: course.id,
              title: fq.title,
              description: fq.description,
              order: quizOrder++,
              sectionKey: fq.sectionKey,
            },
          });
          quizCount += 1;
          for (const q of fq.questions) {
            await prisma.question.create({
              data: {
                quizId: quiz.id,
                type: "MULTIPLE_CHOICE",
                prompt: q.prompt,
                choices: JSON.stringify(q.choices),
                correctIndex: q.correctIndex,
                explanation: q.explanation,
                points: q.points ?? 1,
                order: q.order,
              },
            });
            questionCount += 1;
          }
        }
      }

      if (grade === 7 && i === 0) {
        const firstLessons = await prisma.lesson.findMany({
          where: { courseId: course.id },
          orderBy: { order: "asc" },
          take: 2,
        });
        for (const lesson of firstLessons) {
          await prisma.progress.create({
            data: {
              userId: student.id,
              lessonId: lesson.id,
              completed: true,
              completedAt: new Date(),
            },
          });
        }
      }
    }
  }

  const grade7Math = await prisma.course.findFirst({
    where: { grade: 7, subject: "Mathematics" },
  });

  const slug1 = makeSessionSlug("Grade 7 Math Live Lab");
  const slug2 = makeSessionSlug("Middle School Office Hours");
  const soon = new Date();
  soon.setDate(soon.getDate() + 2);
  soon.setHours(15, 0, 0, 0);
  const later = new Date();
  later.setDate(later.getDate() + 5);
  later.setHours(16, 30, 0, 0);

  await prisma.liveSession.create({
    data: {
      title: "Grade 7 Math Live Lab",
      description: "Work through ratios and proportional reasoning with Ms. Chen.",
      teacherId: teacher2.id,
      courseId: grade7Math?.id,
      grade: 7,
      scheduledAt: soon,
      durationMinutes: 45,
      jitsiRoomSlug: slug1,
      meetingUrl: jitsiRoomUrl(slug1),
    },
  });

  await prisma.liveSession.create({
    data: {
      title: "Middle School Office Hours",
      description: "Drop-in support for ELA, science, and study skills.",
      teacherId: teacher.id,
      grade: 7,
      scheduledAt: later,
      durationMinutes: 60,
      jitsiRoomSlug: slug2,
      meetingUrl: jitsiRoomUrl(slug2),
    },
  });

  const sample = await prisma.lesson.findFirst({
    where: {
      content: { not: "" },
      course: { subject: { contains: "Bible" } },
    },
    include: { course: { select: { id: true, title: true } }, questions: true },
  });

  console.log("Seed complete");
  console.log(
    `Courses: ${courseCount}, Lessons: ${lessonCount}, Questions: ${questionCount}, Quizzes: ${quizCount}`
  );
  console.log("Demo logins (password: demo1234):");
  console.log("  admin@prosperprep.org");
  console.log("  teacher@prosperprep.org");
  console.log("  student@prosperprep.org");
  console.log("  student12@prosperprep.org (Grade 12 ACT demo)");
  console.log("  parent@prosperprep.org");
  console.log(`Users: admin=${admin.id}, teacher=${teacher.id}`);
  if (sample) {
    console.log(`Sample Bible lesson: /courses/${sample.course.id}/lessons/${sample.id}`);
    console.log(`Sample questions: ${sample.questions.length}`);
    console.log(`Sample content words: ${sample.content.split(/\s+/).length}`);
  }

  const act12 = await prisma.course.findFirst({
    where: { grade: 12, subject: { contains: "ACT" } },
    include: {
      lessons: { orderBy: { order: "asc" }, select: { title: true, sectionKey: true } },
      quizzes: { include: { _count: { select: { questions: true } } }, orderBy: { order: "asc" } },
    },
  });
  if (act12) {
    console.log(`G12 ACT course: ${act12.title} id=${act12.id}`);
    console.log(`  Lessons: ${act12.lessons.map((l) => l.title).join(" | ")}`);
    for (const qz of act12.quizzes) {
      console.log(`  Quiz: ${qz.title} (${qz.sectionKey}) questions=${qz._count.questions}`);
    }
  }
}

if (process.env.NODE_ENV === "production") {
  throw new Error("Demo seed is disabled in production. Provision accounts through School Ops.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
