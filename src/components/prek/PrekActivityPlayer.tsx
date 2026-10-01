"use client";

import type { PrekActivity } from "@/lib/prekActivities";
import { EmbedFrame } from "./EmbedFrame";
import { PrekLearnShell } from "./PrekLearnShell";
import { LetterPop } from "./games/LetterPop";
import { NumberCount } from "./games/NumberCount";
import { ColorMatch } from "./games/ColorMatch";
import { ShapeSort } from "./games/ShapeSort";
import { MemoryMatch } from "./games/MemoryMatch";
import { ColorFlood } from "./games/ColorFlood";

export function PrekActivityPlayer({ activity }: { activity: PrekActivity }) {
  let body: React.ReactNode = null;

  if (activity.kind === "embed" && activity.embedSrc && activity.attribution) {
    body = (
      <EmbedFrame src={activity.embedSrc} title={activity.title} attribution={activity.attribution} />
    );
  } else {
    switch (activity.slug) {
      case "letter-pop":
        body = <LetterPop />;
        break;
      case "number-count":
        body = <NumberCount />;
        break;
      case "color-match":
        body = <ColorMatch />;
        break;
      case "shape-sort":
        body = <ShapeSort />;
        break;
      case "memory-match":
        body = <MemoryMatch />;
        break;
      case "color-flood":
        body = <ColorFlood />;
        break;
      default:
        body = <p className="p-6 text-center text-slate-600">Activity coming soon.</p>;
    }
  }

  return <PrekLearnShell activity={activity}>{body}</PrekLearnShell>;
}
