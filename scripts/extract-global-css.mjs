import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, "..", "extracted-site.html");
const outPath = path.join(__dirname, "..", "src", "app", "vivid-source.css");

const html = fs.readFileSync(htmlPath, "utf8");

function stripFontFaces(css) {
  return css.replace(/@font-face\s*\{[\s\S]*?\}\s*/g, "");
}

let combined = "";
let pos = 0;
while (true) {
  const start = html.indexOf("<style", pos);
  if (start === -1) break;
  const gt = html.indexOf(">", start);
  const end = html.indexOf("</style>", gt);
  if (end === -1) break;
  const chunk = html.slice(gt + 1, end);
  combined += `\n/* ---- extracted style block ---- */\n` + stripFontFaces(chunk);
  pos = end + 8;
}

const header = `/* Extracted from standalone export; @font-face removed — use next/font in layout.tsx */\n`;

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, header + combined);
console.log("wrote", outPath, "bytes", Buffer.byteLength(header + combined));
