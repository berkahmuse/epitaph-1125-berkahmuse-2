// Famous Last Words: The Funniest Epitaph
// Entry program for @berkahmuse-2 — writes a single one-line epitaph
// (at most 150 characters) to /output/entry.txt, deterministically.
//
// Anchor quoted before the first write of entry files:
//   makefun anchor 4d475beba5d5e34097c90ad6d827b3c862e432b3 round 34271123

import { mkdirSync, writeFileSync } from "node:fs";

const EPITAPH =
  "Nobody believed I was dying until they carved it in stone.";

// Gate the line the way the sealed scorer does: UTF-8 text of 1 to 150
// characters, not only whitespace, a single line. Fail loudly instead of
// ever writing an invalid entry.
if (
  EPITAPH.length < 1 ||
  EPITAPH.length > 150 ||
  EPITAPH.trim().length === 0 ||
  EPITAPH.includes("\n")
) {
  throw new Error("epitaph fails the 1-150 character single-line gate");
}

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, EPITAPH, "utf8");
