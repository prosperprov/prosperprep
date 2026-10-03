import type { Metadata } from "next";
import { SpanishPath } from "@/components/spanish/SpanishPath";

export const metadata: Metadata = {
  title: "Spanish · Unit 1 Greetings",
  description:
    "Prosper Prep Spanish, Unit 1 (Greetings). Short lessons for hello, please and thank you, yes and no, numbers, colors, and names.",
};

export default function SpanishHubPage() {
  return <SpanishPath />;
}
