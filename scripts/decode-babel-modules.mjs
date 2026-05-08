import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, "..", "extracted-site.html");
const outDir = path.join(__dirname, "..", "_decoded_jsx");
const h = fs.readFileSync(htmlPath, "utf8");

fs.mkdirSync(outDir, { recursive: true });

const tag = '<script type="text/babel"';
let pos = 0;
let idx = 0;

while (true) {
  const i = h.indexOf(tag, pos);
  if (i === -1) break;
  const gt = h.indexOf(">", i + tag.length);
  const openTag = h.slice(i, gt + 1);
  const srcMatch = openTag.match(/src="data:application\/javascript;base64,([^"]+)"/);
  if (!srcMatch) {
    console.warn("No base64 src for script", idx);
    pos = gt + 1;
    continue;
  }
  const buf = Buffer.from(srcMatch[1], "base64");
  const text = buf.toString("utf8");
  const name = `module_${idx}.jsx`;
  fs.writeFileSync(path.join(outDir, name), text);
  idx += 1;
  pos = h.indexOf("</script>", gt) + 9;
}

console.log("wrote", idx, "files to", outDir);
