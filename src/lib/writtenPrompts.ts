/**
 * Parse <!-- WRITTEN_PROMPT:title|maxScore --> ... <!-- /WRITTEN_PROMPT -->
 * markers from lesson markdown. HTML comments are stripped from display content.
 */

export type WrittenPromptSpec = {
  promptKey: string;
  title: string;
  maxScore: number;
  prompt: string;
};

const BLOCK_RE =
  /<!--\s*WRITTEN_PROMPT:([^|>]+)\|(\d+(?:\.\d+)?)\s*-->([\s\S]*?)<!--\s*\/WRITTEN_PROMPT\s*-->/gi;

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 64);
}

export function parseWrittenPrompts(content: string): {
  displayContent: string;
  prompts: WrittenPromptSpec[];
} {
  const prompts: WrittenPromptSpec[] = [];
  const displayContent = content.replace(BLOCK_RE, (_m, titleRaw, maxRaw, body) => {
    const title = String(titleRaw).trim();
    const maxScore = Number(maxRaw);
    const prompt = String(body).trim();
    prompts.push({
      promptKey: `wp-${slugify(title)}`,
      title,
      maxScore: Number.isFinite(maxScore) && maxScore > 0 ? maxScore : 10,
      prompt,
    });
    return "";
  });
  return { displayContent: displayContent.trim(), prompts };
}
