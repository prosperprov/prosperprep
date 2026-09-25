/**
 * Gold-standard Grade 7 ELA Lesson 1: Analyzing Theme in Short Fiction.
 * Hand-authored teaching text + MCQs. Used for middle-school ELA when title matches.
 */
import { authoredQuestions, type QuestionSeed } from "./assessments";

export const G7_THEME_TITLE = "Analyzing Theme in Short Fiction";
export const G7_THEME_VIDEO = "https://www.youtube.com/watch?v=MAu3e5GZo4k";

export const g7ThemeObjectives = [
  "• Distinguish theme from topic and from a simple moral.",
  "• Trace evidence → inference → theme statement using a short fiction passage.",
  "• Evaluate weak theme statements and revise them into precise, text-supported claims.",
  "• Practice the process on a second original passage.",
].join("\n");

export const g7ThemeDescription =
  "Learn to identify theme in short fiction by separating topic from theme, gathering evidence, and writing precise theme statements.";

export function g7ThemeContent(): string {
  return `## What is theme?

A **topic** is what a story is *about* in a word or two: friendship, fear, family, competition. A **theme** is a complete idea the story develops about that topic — a statement you could apply beyond this one plot. Theme is not a plot summary ("Maya lost the race and felt sad"), and it is not always a fortune-cookie **moral** ("Always be nice"). Some stories teach a clear lesson; many simply explore a truth about how people act under pressure.

- **Topic** — 1–2 words (example: *belonging*).
- **Theme** — a full sentence or claim (example: *People may hide their true interests to fit in — and pay a cost when they do.*).
- **Moral** (sometimes) — advice or a rule (example: *Always be yourself.*). Themes are broader than morals and must stay text-supported.

Theme statements work best when they:
1. Name a **human idea** (not only a character's name).
2. Are **arguable** — someone could disagree using the same text.
3. Stay **rooted in evidence** from the story.

## Mini-passage 1 — *The Relay*

> Jordan had waited all spring to run the final leg of the seventh-grade relay. On race day, Coach asked him to start instead — "We need your burst off the blocks." Jordan's stomach dropped. Starting meant handing the baton to Maya, the team's steadiest runner, while the crowd watched someone else break the tape. He almost refused. Then he remembered last year's meet, when he had cut off a teammate to stay in the "hero" slot and the team had finished last. He nodded, crouched, and exploded at the gun. When Maya crossed first, Jordan's name was not on the loudspeaker. Still, when the team lifted the ribbon together, he felt taller than he had all season.

*(Original fiction for classroom use · ~150 words)*

## Model: evidence → inference → theme

**Step 1 — Gather evidence (what the text literally shows)**
- Jordan wanted the "hero" final leg.
- Coach moves him to the start; Jordan almost refuses.
- He remembers hurting the team last year by chasing the spotlight.
- He accepts the new role; Maya wins; his name is not announced; he still feels proud with the team.

**Step 2 — Make inferences (what those details suggest)**
- Jordan's conflict is between personal glory and team success.
- His memory of last year shows growth: he can revise a selfish pattern.
- Pride returns through shared success, not the loudspeaker.

**Step 3 — Write a theme statement**
Strong: **Putting the team's success ahead of personal glory can bring a deeper kind of pride.**
Weak: "Sports" (topic, not theme).
Weak: "Jordan ran the first leg" (plot).
Weak: "Teamwork is magical" (slogan; too vague, not tied to the cost Jordan pays).

## Common mistakes

1. **Stopping at the topic.** "This story is about teamwork" is a start, not a theme.
2. **Retelling the plot.** If your sentence only works for these exact events, widen it carefully without inventing ideas the text never supports.
3. **Fortune-cookie morals.** "Be a good friend" may fit some tales; many realistic stories are more complicated (loyalty *and* honesty; courage *and* fear).
4. **Ignoring conflicting evidence.** If a character both helps and harms, your theme should account for that tension.
5. **Forcing a happy lesson.** Some themes are cautionary: pride isolates; silence protects the wrong people.

## Practice — Mini-passage 2 — *Locker 214*

> Every Tuesday, Amira slipped a folded comic strip under the vent of Locker 214 — never signed. The drawings were jokes about cafeteria pizza and impossible math homework. She told herself she was only practicing cartooning. In truth, she watched who opened that locker: Devon, who sat alone at lunch with earbuds in. One afternoon Devon taped a tiny reply on the outside of Amira's own locker: a stick-figure thank-you holding a slice of pizza. Amira's face burned. She could keep pretending the comics were "just practice," or she could say hello in the hallway. She chose the hallway. The next comic they drew together — and signed both names.

*(Original fiction for classroom use · ~140 words)*

**Your turn (write in your notes):**
1. List three pieces of evidence from *Locker 214*.
2. Infer what Amira wants and what she risks.
3. Draft a theme statement in one sentence.
4. Cross-check: Does your statement go beyond "friendship" as a topic? Does evidence support it?

**Sample strong theme (check after you draft):** Kindness offered in secret can open the door to real connection — but only if someone is willing to be seen.

## Before you watch and quiz

In the video, listen for how theme differs from main idea or summary. Then return to *The Relay* and *Locker 214* and revise any theme statement that still sounds like a topic or a slogan.

## Wrap-up

Theme is a **text-supported claim about life or human nature**, built from patterns of evidence — not a one-word label and not always a neat moral. Keep the path **evidence → inference → theme** every time you read short fiction.`;
}

export function g7ThemeQuestions(): QuestionSeed[] {
  return authoredQuestions(
    [
      {
        prompt:
          'In literary analysis, which option correctly distinguishes theme from topic?',
        correct:
          "Topic is a short subject label (e.g., belonging); theme is a full claim the story develops about that subject.",
        distractors: [
          "Theme is always the first sentence of the story; topic is the last sentence.",
          "Topic and theme are identical — both are one-word labels for the plot.",
          "Theme is only the author's biography; topic is the setting.",
        ],
        explanation:
          "Topic names the subject area; theme states what the story suggests about it.",
      },
      {
        prompt:
          'Based on "The Relay," which statement is the strongest theme (not a topic or plot summary)?',
        correct:
          "Choosing the team's success over personal spotlight can create a more lasting pride.",
        distractors: [
          "Jordan ran track in seventh grade.",
          "Sports.",
          "Maya is faster than Jordan, so starters never matter.",
        ],
        explanation:
          "The strong option is a generalizable claim supported by Jordan's choice and response; the others are plot, topic, or unsupported.",
      },
      {
        prompt:
          "Which piece of evidence from \"The Relay\" best supports a theme about prioritizing the team over personal glory?",
        correct:
          "Jordan remembers hurting the team last year by chasing the hero slot, then accepts the starting leg.",
        distractors: [
          "The story mentions spring weather.",
          "Coach owns a stopwatch.",
          "Maya's name is easier to pronounce than Jordan's.",
        ],
        explanation:
          "The memory-plus-decision shows growth toward team-first values; weather and names are irrelevant.",
      },
      {
        prompt: "Why is \"Teamwork is magical\" a weak theme statement for \"The Relay\"?",
        correct:
          "It is a vague slogan that ignores Jordan's specific conflict and the cost of giving up the spotlight.",
        distractors: [
          "It uses too many syllables for Grade 7.",
          "Themes may never mention people or feelings.",
          "It is weak because stories cannot be about teamwork.",
        ],
        explanation:
          "Weak themes are fuzzy cheerleading; strong ones reflect the story's particular tension and evidence.",
      },
      {
        prompt:
          'In "Locker 214," Amira draws anonymous comics and later greets Devon in the hallway. Which theme is best supported?',
        correct:
          "Hidden kindness can start a connection, but friendship grows when someone risks being known.",
        distractors: [
          "Lockers are made of metal.",
          "Cafeteria pizza is unhealthy, so students should never joke about food.",
          "Amira should never sign her work if she wants to be a real artist.",
        ],
        explanation:
          "The move from anonymous gifts to a signed, shared comic supports a theme about risking visibility.",
      },
      {
        prompt:
          "A classmate says the theme of any story is whatever lesson makes readers feel good. What is the best critique?",
        correct:
          "Theme must be grounded in textual evidence; some stories develop cautionary or complicated ideas, not only cheerful morals.",
        distractors: [
          "Theme is only found in poems, never in short fiction.",
          "Readers should ignore characters' choices when naming theme.",
          "If a theme is not a fortune-cookie moral, the story has no theme.",
        ],
        explanation:
          "Theme is evidence-based and need not be a feel-good rule.",
      },
    ],
    6
  );
}

export function isG7ThemeLesson(grade: number, subject: string, title: string): boolean {
  const s = subject.toLowerCase();
  const isEla =
    s.includes("english") ||
    s.includes("language") ||
    s.includes("reading") ||
    s.includes("literature");
  return grade >= 6 && grade <= 8 && isEla && title === G7_THEME_TITLE;
}
