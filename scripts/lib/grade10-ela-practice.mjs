/** Independent practice for Grade 10 English Literature. Returns 6 {q,a}. */
function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < String(s).length; i++) {
    h ^= String(s).charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
const PASSAGES = [
  { label: "a public-domain speech excerpt", claim: "duty requires courage under pressure" },
  { label: "a short fiction scene at dusk", claim: "the narrator's certainty is incomplete" },
  { label: "a poem about a river crossing", claim: "movement signals a moral choice" },
  { label: "an editorial on local civic life", claim: "evidence must outweigh slogans" },
  { label: "a drama scene with stage directions", claim: "silence carries meaning" },
  { label: "a paired set of letters on the same event", claim: "perspective reshapes fact selection" },
];

export function ela10IndepPractice(unitN, lessonTitle, seed) {
  const items = [];
  for (let i = 1; i <= 6; i++) {
    const p = PASSAGES[hash(seed + i) % PASSAGES.length];
    const t = lessonTitle.toLowerCase();
    let q, a;
    if (/annotat|close reading/.test(t)) {
      q = `On ${p.label}, mark (1) a claim-bearing sentence, (2) one charged word, (3) one structural move. Write a 2-sentence warrant linking mark #2 to meaning.`;
      a = `Strong work names exact text, explains the charged word's effect, and connects structure to ${p.claim}.`;
    } else if (/claim|thesis|warrant|argument/.test(t)) {
      q = `Write a debatable one-sentence thesis about ${p.label} that a skeptic could challenge. Then list two evidence bullets and one warrant sentence.`;
      a = `Thesis is specific and arguable; evidence is textual; warrant explains how evidence supports the claim (not a summary).`;
    } else if (/rhetoric|ethos|pathos|logos|appeals/.test(t)) {
      q = `Identify one ethos, one pathos, and one logos move in ${p.label}. Rank which is strongest for a Grade 10 academic audience and why (3–4 sentences).`;
      a = `Labels are accurate; ranking uses audience + sufficiency of evidence, not “I liked it.”`;
    } else if (/poetry|imagery|sound|motif|symbol/.test(t)) {
      q = `Track one recurring image or sound pattern in ${p.label}. Argue in 4–6 sentences how it contributes to theme (not plot summary).`;
      a = `Pattern is located with quotes; analysis shows contribution to meaning beyond decoration.`;
    } else if (/drama|subtext|dialogue/.test(t)) {
      q = `Quote two consecutive lines from ${p.label} (or invent plausible PD-style lines). Explain the subtext and how a stage direction would change the reading.`;
      a = `Subtext differs from literal wording; stage direction is used as evidence, not fluff.`;
    } else if (/research|source|citation|plagiarism|note/.test(t)) {
      q = `From ${p.label} as Source A, write (1) a paraphrase with citation placeholder, (2) a quote sandwich, (3) one sentence distinguishing your idea from the source.`;
      a = `Paraphrase is accurate and attributed; quote has lead-in + explanation; writer voice is distinct.`;
    } else if (/grammar|syntax|clause|punctuation|style/.test(t)) {
      q = `Revise this muddy sentence into two clearer academic sentences about ${p.claim}: “The thing is that it kind of shows how stuff matters when people do things.” Label one clause type you used.`;
      a = `Revision is precise, academic, and names a real clause/punctuation choice that improves clarity.`;
    } else if (/bias|media|credibility|satire|irony/.test(t)) {
      q = `Evaluate credibility risks in ${p.label}: purpose, selection of evidence, and framing. Write a 5-sentence critique that steel-mans before rebutting.`;
      a = `Critique addresses purpose/funding/framing; steel-man appears; tone stays analytical.`;
    } else {
      q = `Using ${p.label}, write a short analytical paragraph (6–8 sentences) that advances a claim related to “${lessonTitle}” with one embedded quotation and a warrant.`;
      a = `Claim is clear; quotation is explained (not orphaned); paragraph ends without pure summary. Theme link: ${p.claim}.`;
    }
    items.push({ q: `Practice ${i}: ${q}`, a });
  }
  return items;
}
