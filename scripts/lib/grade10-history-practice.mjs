/** Independent practice for Grade 10 U.S. & World History. Returns 6 {q,a}. */
const DOCS = [
  "a political cartoon from the era",
  "a treaty excerpt",
  "a diary letter from a civilian",
  "a government proclamation",
  "a newspaper editorial",
  "a map of alliances or trade routes",
];

export function hist10IndepPractice(unitN, lessonTitle, seed) {
  const items = [];
  for (let i = 1; i <= 6; i++) {
    const doc = DOCS[(unitN * 3 + i) % DOCS.length];
    const q = `Practice ${i}: Using ${doc} related to “${lessonTitle},” (1) source it (who/when/purpose), (2) state one claim the document supports, (3) name one limitation or bias, (4) connect to a larger Unit ${unitN} development in 3–5 sentences.`;
    const a = `Sourcing is specific; claim is evidenced; limitation is honest; connection names causes/effects or continuity/change — not a moral slogan alone.`;
    items.push({ q, a });
  }
  return items;
}
