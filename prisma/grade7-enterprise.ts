import type { LessonSeed } from "./curriculum";
import type { QuestionSeed } from "./assessments";

// Original Prosper Prep unit. The business is fictional; all numbers are examples.
// Students make decisions with evidence and arithmetic rather than memorizing slogans.
const questions = (items: Array<[string, [string, string, string, string], number, string]>): QuestionSeed[] =>
  items.map(([prompt, choices, correctIndex, explanation], index) => ({
    prompt, choices, correctIndex, explanation, order: index + 1, points: 1,
  }));

export function grade7EnterpriseUnitOne(): LessonSeed[] {
  return [
    {
      title: "Unit 1.1 · Find a problem worth solving",
      description: "Use interviews and observations to distinguish a real need from an untested idea.",
      objectives: "Identify a customer and a repeated problem; separate observations from assumptions; plan a respectful interview; make a testable problem statement.",
      order: 1, durationMin: 45, sectionKey: "section-1", videoUrl: null,
      content: `# Find a problem worth solving

## What you will be able to do
Describe one customer's problem with evidence, ask neutral interview questions, and decide what you still need to learn.

## Launch case: the forgotten-folder problem
At a community learning center, students sometimes arrive without a folder for their assignments. Nia wants to sell a $12 "school success kit" with a folder, pens, and a planner. She has seen three students ask for paper this week. Does that prove families want her kit? No. The observation shows a possible problem; the price, contents, and willingness to buy are still guesses.

An **observation** is something you saw or counted. An **assumption** is a claim you have not tested. A **customer** is the person who would choose and pay for the product or service; the person using it may be someone else. A student might use the kit while a caregiver pays for it. A good entrepreneur describes both people.

## Method: observe, ask, record
1. Write down the situation without proposing your solution: "Some students arrive without a way to organize assignments."
2. Talk to at least three potential users and, where appropriate, the adult who pays. Ask: "What do you do when that happens?" and "What does it cost you in time or money?" Do not ask "Would you buy my great kit?" because that invites agreement.
3. Record answers as short, accurate quotes or counts. Do not write names in the class report. Never interview a stranger alone; use a teacher-approved adult or family member.
4. Look for existing solutions. Perhaps the school gives free folders or families already have supplies. An existing free solution changes the opportunity.
5. Write a **problem statement**: "For [specific group], [problem] happens [how often], causing [effect]. We know this from [evidence]." If the evidence is weak, say so.

## Work an example
Suppose Nia interviews five families. Two say their students forgot folders once this term, two already use a school-provided organizer, and one buys replacement folders monthly. Nia cannot claim "most families need a $12 kit." She can investigate the one recurring need, or test a smaller low-cost organizer instead. Changing an idea after evidence is progress, not failure.

## Your turn: evidence log
Create a four-column table: **claim | observation or assumption | evidence | next question**. Enter at least four claims about a school or neighborhood inconvenience. For one claim, write three neutral interview questions. With adult approval, interview three people and summarize patterns without names. If interviews are unavailable, mark all claims untested and design the interview; do not invent responses.

## Self-check before the graded questions
Can you identify the buyer, user, evidence, and largest unknown? If you cannot, reread the case and revise your table. The graded check below uses new situations, not the case's exact wording.
`,
      questions: questions([
        ["Three students asked for paper. Which statement is an observation?", ["Families will pay $12 for a kit", "Three students asked for paper", "Every student needs a planner", "The kit will be profitable"], 1, "A count of witnessed requests is evidence; price and demand claims still require testing."],
        ["A caregiver pays for a folder that a child uses. Who is the buyer?", ["The caregiver", "The child", "The printer", "The teacher"], 0, "The buyer decides to purchase and pays; the user may be different."],
        ["Which interview question is least leading?", ["Isn't my kit useful?", "Would you buy my amazing kit?", "What do you do when a folder is forgotten?", "Don't you wish folders were cheaper?"], 2, "Ask about current behavior before suggesting your solution."],
        ["Two of five families already have free organizers. What should Nia do?", ["Hide those answers", "Claim five families need kits", "Record the finding and revise her idea", "Raise the price"], 2, "Contrary evidence helps refine the problem and prevents unsupported claims."],
        ["Which is the strongest problem statement?", ["Everybody needs my kit", "A kit would make money", "One interviewed family replaces a lost folder monthly; we need more interviews to see how common this is", "Folders are boring"], 2, "It identifies a group, observed frequency, and the limits of the evidence."],
        ["If interviews are unavailable, what is an honest assignment?", ["Invent three positive quotes", "Report the idea as proven", "Mark assumptions untested and design neutral questions", "Skip the evidence log"], 2, "You can plan a valid test without fabricating data."],
      ]),
    },
    {
      title: "Unit 1.2 · Price a small service with math",
      description: "Calculate revenue, variable cost, fixed cost, and break-even before making an offer.",
      objectives: "Compute total revenue and costs; distinguish fixed from per-customer costs; calculate break-even; test a conservative scenario.",
      order: 2, durationMin: 50, sectionKey: "section-1", videoUrl: null,
      content: `# Price a small service with math

## Launch case: bicycle cleaning day
Kai is considering a bicycle cleaning service with an adult supervising. He plans to charge **$15 per bicycle**. Cleaning supplies cost **$3 per bicycle**. A reusable brush kit costs **$24 once**. Ignore taxes for this first model; actual earnings could be lower. Kai must first get permission, choose a safe location, and avoid repairs or chemicals he is not trained to use.

**Revenue** is money customers pay: price × number of jobs. A **variable cost** changes with each job: $3 of supplies per bike. A **fixed cost** stays the same within this small plan: the $24 kit. **Estimated profit** = revenue − variable costs − fixed costs. Profit is not the same as cash in your pocket; taxes, fees, refunds, and unpaid labor may still matter.

## Model it step by step
Let n be the number of bikes cleaned.

- Revenue: 15n dollars.
- Variable costs: 3n dollars.
- Total costs: 3n + 24 dollars.
- Estimated profit: 15n − (3n + 24) = **12n − 24** dollars.

For three bikes, revenue is $45, variable cost $9, fixed cost $24, so estimated profit is **$12**. For one bike, the model gives **−$12**: Kai has not recovered the kit cost. The first time profit reaches zero is when 12n − 24 = 0, or **n = 2 bikes**. This is the **break-even point**. At two bikes, Kai has earned back the modeled costs; he has not yet paid himself for time.

## Challenge the model
Suppose the supplies really cost $5 per bike. Then contribution per job is $15 − $5 = $10; the first whole-number break-even point is **3 bikes**, because two jobs contribute only $20 toward the $24 kit. If Kai lowers the price to $12, contribution falls again. A business plan should show a cautious case, not only the best case.

## Your turn: build and defend a price
Design a safe, adult-approved service that a middle school student could practice, such as organizing books for a family member. State the customer, price per job, variable cost per job, and any one-time equipment cost. Make a table for zero, one, two, and five jobs showing revenue, total cost, and estimated profit. Find the first whole-number break-even quantity. Then change one assumption and explain how the result changes. Show arithmetic; a final number alone is not enough.

## Check your reasoning
If your per-job cost is greater than or equal to your price, more jobs will not recover a positive fixed cost. Rethink the offer or costs rather than promising impossible profit.
`,
      questions: questions([
        ["Kai cleans four bikes at $15 each. What is revenue?", ["$12", "$24", "$48", "$60"], 3, "Revenue = $15 × 4 = $60."],
        ["For four bikes, supplies cost $3 each and the kit costs $24. What is total modeled cost?", ["$12", "$24", "$36", "$60"], 2, "Variable cost is $12; add $24 fixed cost for $36."],
        ["What is estimated profit on four bikes in the original model?", ["$12", "$24", "$36", "$60"], 1, "$60 revenue − $36 total costs = $24."],
        ["Which cost is variable in Kai's original plan?", ["The reusable $24 kit", "The $3 of supplies per bicycle", "The $15 sale price", "The number of customers"], 1, "Supplies rise by $3 for each additional job."],
        ["If the variable cost becomes $5 and price stays $15, what is the first whole-number break-even quantity for a $24 kit?", ["1", "2", "3", "5"], 2, "Each job contributes $10; three jobs cover $24, while two do not."],
        ["A service costs $8 per job and sells for $7, with a positive fixed cost. What happens if it sells more jobs at unchanged prices?", ["It eventually breaks even", "Each job increases the loss", "Fixed cost vanishes", "Revenue is always profit"], 1, "Each additional job loses $1 before even considering fixed cost."],
      ]),
    },
    {
      title: "Unit 1.3 · Test an honest offer",
      description: "Compare a small offer test with a sales promise and decide whether to continue, change, or stop.",
      objectives: "Write a clear offer; measure response and fulfillment; interpret a small test without exaggeration; use a simple decision rule.",
      order: 3, durationMin: 50, sectionKey: "section-1", videoUrl: null,
      content: `# Test an honest offer

## From idea to test
Nia has interviewed families about organizing school papers. With school and caregiver permission, she wants to test a simple folder-labeling service. She will label and sort folders for **$6 per job**; labels cost **$1 per job**. She already owns safe supplies, so her trial has no new fixed equipment cost. She can complete at most four jobs this week without missing schoolwork.

A useful offer states **who**, **what**, **price**, **when**, and **limits**. For example: "With caregiver approval, I'll label and sort up to six school folders for $6 per set this Saturday. Four slots available because I have time for four jobs. You provide the folders." That limit reflects real capacity. An invented deadline such as "last chance forever" would mislead customers.

## Choose measures before testing
Nia asks eight eligible families with permission. Three say yes, two actually schedule, and two jobs are completed. She should record separate numbers:

| Measure | Count | Meaning |
|---|---:|---|
| Families asked | 8 | The people offered the service |
| Families interested | 3 | Expressions of interest, not sales |
| Jobs scheduled | 2 | Promises to book |
| Jobs completed and paid | 2 | Delivered sales |

Actual trial revenue = 2 × $6 = **$12**. Variable cost = 2 × $1 = **$2**. Estimated contribution after those costs is **$10 before accounting for her time and any other expenses**. Calling it $18 because three people expressed interest would be false.

## Interpret carefully
Two completed jobs show that at least two families accepted this version of the offer. Eight conversations are a very small sample; they cannot prove the whole town wants it. Nia can ask what was useful and what was confusing, then run another small test. If families say the labels peel off, she must fix that before advertising quality. If work takes 90 minutes per set, she may need a different price or a narrower scope.

## Ethical practice and student safety
Get adult permission before contacting customers or handling money. Never publish a customer's name, address, school schedule, or photographs without permission. Do not promise results you cannot deliver. Keep a record of what you agreed to do, the price, and whether the job was completed. Adults should review any agreements, online accounts, or payments involving a minor.

## Your turn: mini offer test plan
Write an offer of 40–60 words for a safe service. Make a table with columns for people asked, interested, scheduled, completed, revenue, variable cost, and time spent. Do not invent sales; a simulated test must be labeled **simulation**. Before testing, write a decision rule: "Continue if at least __ of __ invited people book and I can deliver each job in __ minutes; otherwise revise __." Afterward, give a one-paragraph evidence-based decision to continue, change, or stop.

<!-- WRITTEN_PROMPT:Grade 7 venture evidence portfolio|20 -->
Submit a 300–500 word evidence portfolio for a safe, adult-approved service. You may use a clearly labeled simulation if you cannot conduct a real test.

Include (1) a specific customer problem and evidence or explicit untested assumptions, (2) your offer and its limits, (3) a revenue/cost table for zero, one, two, and five jobs, (4) the first whole-number break-even point if fixed costs exist, (5) interest versus completed paid jobs, and (6) a decision to continue, change, or stop supported by your evidence. Do not include names or contact details of interviewees.

Teacher rubric (20 points): problem and evidence 4; accurate arithmetic and cost categories 6; honest offer and student safety 4; interpretation and next test 4; clear organization and source labels 2. Give written feedback on at least one strength and one next step.
<!-- /WRITTEN_PROMPT -->
`,
      questions: questions([
        ["Eight families are asked; three are interested; two pay after completion. How many sales occurred?", ["2", "3", "5", "8"], 0, "A completed paid job is a sale; interest is not revenue."],
        ["For two jobs at $6 with $1 supplies per job, what is contribution after these variable costs?", ["$2", "$6", "$10", "$12"], 2, "$12 revenue minus $2 variable cost = $10 before time and other expenses."],
        ["Which offer is clearest?", ["Best service ever!", "Folders fixed, ask me", "I label up to six folders for $6 per set this Saturday, with caregiver approval", "Guaranteed perfect grades"], 2, "The offer describes scope, price, timing, and adult approval without false claims."],
        ["Nia has two paid jobs from eight conversations. What can she reasonably conclude?", ["The whole town wants the service", "Nobody wants it", "Two families accepted this offer; more testing is needed", "Three sales occurred"], 2, "Small tests reveal something about those participants, not an entire market."],
        ["Why should a student set a capacity limit on the offer?", ["To fake scarcity", "To promise more than possible", "To protect school time and deliver reliably", "To avoid tracking jobs"], 2, "A real limit protects quality and study time."],
        ["If no real sales have occurred, how should a practice table be labeled?", ["Actual sales", "Simulation", "Verified demand", "Customer testimony"], 1, "Simulation and real evidence must be clearly distinguished."],
      ]),
    },
  ];
}

export function grade7EnterpriseUnitOneQuiz(): QuestionSeed[] {
  return questions([
    ["A student notices four classmates borrowing pens. What remains an assumption?", ["Four classmates borrowed pens", "There may be a supply problem", "Families will pay $20 for a supply box", "The student observed borrowing"], 2, "Willingness to pay a specific amount has not been tested."],
    ["Which question best tests a recurring need without leading the customer?", ["You love my idea, right?", "How often do you replace lost supplies?", "Wouldn't this be perfect?", "Can I count you as a sale?"], 1, "Frequency of actual behavior provides useful evidence."],
    ["A service sells for $14; supplies cost $4 per job; equipment costs $30. What is estimated profit after five jobs?", ["$10", "$20", "$30", "$50"], 1, "Five jobs contribute 5 × ($14 − $4) = $50; subtract $30 equipment = $20."],
    ["For that same service, what is the first whole-number break-even quantity?", ["2", "3", "4", "5"], 1, "$10 contribution per job covers the $30 equipment after three jobs."],
    ["A parent says they are interested but never books. How should a student count this?", ["Paid sale", "Completed job", "Interest, not revenue", "Profit"], 2, "Interest is a useful signal but is not a completed sale."],
    ["Which is a variable cost?", ["One-time $30 tool", "$4 in supplies per completed job", "A customer's compliment", "A weekly capacity limit"], 1, "Per-job supplies rise with each job."],
    ["Three of five interviewees already have a free solution. What is the best next step?", ["Ignore them", "Claim all five are customers", "Revise the offer or find a narrower problem", "Raise the price automatically"], 2, "Evidence should change your assumptions."],
    ["Which report is most accurate after two paid jobs at $6 with $1 supplies each?", ["$12 pure profit", "$10 after these supplies, before time and other costs", "$18 revenue because three were interested", "$2 total revenue"], 1, "Compute revenue and named costs precisely, and state what was omitted."],
    ["A seventh grader is writing an offer for families. Which step comes first?", ["Publish addresses online", "Promise guaranteed outcomes", "Get adult and school permission for outreach", "Open a payment account alone"], 2, "Adult oversight and permission protect students and families."],
    ["A test has no real customers yet. Which claim is honest?", ["Verified sales increased", "We simulated five jobs and plan to test demand", "Five families paid", "Profit is guaranteed"], 1, "Simulated results must be labeled and demand remains untested."],
    ["Price is $8 and variable cost is $9. What should the student do?", ["Sell more at the same price", "Ignore costs", "Change the offer, cost, or price before selling", "Call revenue profit"], 2, "Each sale would lose $1 before fixed costs."],
    ["Which evidence most directly helps decide whether to continue a trial?", ["A catchy business name", "Completed paid jobs, time per job, and customer feedback", "The founder's enthusiasm alone", "One unverified social-media comment"], 1, "Use delivery, economics, and feedback together."],
  ]);
}
