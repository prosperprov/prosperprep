/**
 * Ask your teacher used to prefill a location line ("I'm on Mathematics…")
 * and verification runs sometimes posted live-check pings. Those are not
 * student messages. Keep only what the student actually wrote.
 */
const AUTO_LOCATION =
  /^I'm on [^\n]*?,\s*Lesson \d+:[^\n]*\.\s*/i;

const DEBUG_PING =
  /^(live[-\s]?check|test ping)(\s*[#.:-]?\s*\d*)?$/i;

export function studentMessageBody(raw: string): string {
  let body = raw.replace(/\r\n/g, "\n").trim();
  if (AUTO_LOCATION.test(body)) {
    body = body.replace(AUTO_LOCATION, "").trim();
  }
  if (DEBUG_PING.test(body)) return "";
  return body;
}
