import { promises as fs } from "fs";
import path from "path";
import { brand } from "@/config/brand";

export type EmailPayload = {
  to: string;
  subject: string;
  text: string;
  html?: string;
};

/**
 * Send transactional email.
 * Prefer Resend when RESEND_API_KEY is set; otherwise write an outbox file + log
 * so demo/localhost still proves the notification path.
 */
export async function sendEmail(payload: EmailPayload): Promise<{
  ok: boolean;
  mode: "resend" | "outbox";
  id?: string;
}> {
  const from =
    process.env.EMAIL_FROM?.trim() ||
    `${brand.shortName} <noreply@${brand.domain}>`;

  const key = process.env.RESEND_API_KEY?.trim();
  if (key) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [payload.to],
        subject: payload.subject,
        text: payload.text,
        html: payload.html || undefined,
      }),
    });
    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error("[email] Resend failed", res.status, errText);
      await writeOutbox(payload, from, `resend_error_${res.status}`);
      return { ok: false, mode: "outbox" };
    }
    const data = (await res.json()) as { id?: string };
    return { ok: true, mode: "resend", id: data.id };
  }

  const id = await writeOutbox(payload, from, "queued");
  console.info("[email] outbox (no RESEND_API_KEY)", {
    to: payload.to,
    subject: payload.subject,
    id,
  });
  return { ok: true, mode: "outbox", id };
}

async function writeOutbox(
  payload: EmailPayload,
  from: string,
  status: string
): Promise<string> {
  const id = `mail_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const dir = path.join(process.cwd(), ".data", "outbox");
  await fs.mkdir(dir, { recursive: true });
  const file = path.join(dir, `${id}.json`);
  await fs.writeFile(
    file,
    JSON.stringify(
      {
        id,
        status,
        from,
        to: payload.to,
        subject: payload.subject,
        text: payload.text,
        html: payload.html ?? null,
        at: new Date().toISOString(),
      },
      null,
      2
    ),
    "utf8"
  );
  return id;
}
