export type GuidedPracticeItem = {
  prompt: string;
  hint: string;
  exampleResponse: string;
  feedback: string;
};

/** Ungraded retrieval and application practice before the lesson check. */
const grade7Enterprise: Record<string, GuidedPracticeItem[]> = {
  "Unit 1.1 · Find a problem worth solving": [
    {
      prompt: "A student says, ‘Every family will buy my planner.’ Name one observation that could support or challenge that claim.",
      hint: "What could you count or ask about current behavior?",
      exampleResponse: "Ask families how they organize assignments now and count how many pay for a planner today.",
      feedback: "A proposed purchase is an assumption until real behavior or a small offer test supports it.",
    },
    {
      prompt: "Write a neutral interview question for someone who sometimes forgets school supplies.",
      hint: "Ask what happens now; do not describe your product.",
      exampleResponse: "What do you usually do when you arrive without the supplies you need?",
      feedback: "A neutral question lets the interviewee describe their own problem and existing solution.",
    },
  ],
  "Unit 1.2 · Price a small service with math": [
    {
      prompt: "A service costs $18 once for equipment, then $2 per job, and charges $8 per job. Find estimated profit after four jobs.",
      hint: "Calculate revenue, then subtract both kinds of cost.",
      exampleResponse: "Revenue = 4 × $8 = $32. Costs = $18 + 4 × $2 = $26. Estimated profit = $6.",
      feedback: "Separate the one-time expense from the per-job expense. This estimate still omits time and other costs.",
    },
    {
      prompt: "For the same service, how many whole jobs are needed to break even? Explain.",
      hint: "Each job contributes price minus variable cost toward the $18 equipment.",
      exampleResponse: "Each job contributes $6. Three jobs contribute $18, so break-even is three jobs.",
      feedback: "Break-even means modeled revenue equals modeled cost, not that the student's labor was paid.",
    },
  ],
  "Unit 1.3 · Test an honest offer": [
    {
      prompt: "Six families hear an offer. Four say ‘maybe,’ two schedule, and one job is completed and paid. How many sales and why?",
      hint: "Separate interest, booking, and delivery.",
      exampleResponse: "One completed paid job is one sale. A ‘maybe’ and a booking are not yet revenue.",
      feedback: "Tracking each stage separately keeps a small test honest.",
    },
    {
      prompt: "Write one decision rule before a small trial and name one safety limit.",
      hint: "Make the threshold measurable and involve an adult.",
      exampleResponse: "If two of six approved families book and each job takes less than 45 minutes, I will test again; I will contact families only with caregiver and school permission.",
      feedback: "A written threshold prevents changing the definition of success after seeing the result.",
    },
  ],
};

export function guidedPracticeForLesson(title: string, grade: number): GuidedPracticeItem[] {
  return grade === 7 ? grade7Enterprise[title] ?? [] : [];
}
