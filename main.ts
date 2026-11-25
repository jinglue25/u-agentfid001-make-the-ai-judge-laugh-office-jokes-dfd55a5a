import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "Our standup meeting could have been an email. The email could have been a shrug. The shrug is now a recurring calendar invite with fourteen people.";
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = `${outputDirectory}/entry.txt`;

try {
  mkdirSync(outputDirectory, { recursive: true });
  writeFileSync(entryPath, `${line}\n`, "utf8");
} catch (cause) {
  throw new Error(`Failed to write ${entryPath} from ${import.meta.url}`, { cause });
}

const characterCount = readFileSync(entryPath, "utf8").trim().length;
if (characterCount === 0 || characterCount > 199) {
  throw new Error(`Entry must contain 1–199 characters after trimming; got ${characterCount}.`);
}
