/** User-facing wording. Prosper does not want the word "path" on the site. */
export function publicCopy(text: string): string {
  return text
    .replace(/College Athletic Pathway/g, "College Athletics")
    .replace(/Athletic Pathway/g, "Athletics")
    .replace(/athletic pathway/g, "athletics")
    .replace(/\bPaths\b/g, "Plans")
    .replace(/\bpaths\b/g, "plans")
    .replace(/\bPath\b/g, "Plan")
    .replace(/\bpath\b/g, "plan");
}
