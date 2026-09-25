import { rmSync } from "node:fs";

// OpenNext 1.15 appends generated environment exports on repeated builds.
// Removing only its generated output keeps Workers Builds repeatable.
rmSync(".open-next", { recursive: true, force: true });
