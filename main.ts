// Make the Judge Smile — one line about a small good thing that happened today.
// The program writes exactly one line (<=200 chars) to $OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "A stranger paid for my coffee and left before I could thank her; the barista just smiled and said, 'She does that every Tuesday.'";

const outDir = process.env.OUTPUT_DIR || "/output";
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
