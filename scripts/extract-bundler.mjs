import fs from "node:fs";

const htmlPath = new URL("../Vivid Capital _standalone_ (3).html", import.meta.url);
const html = fs.readFileSync(htmlPath, "utf8");

function sliceBetween(openMarker, closeMarker, startFrom = 0) {
  const i = html.indexOf(openMarker, startFrom);
  if (i < 0) throw new Error(`Missing open: ${openMarker}`);
  const contentStart = i + openMarker.length;
  const j = html.indexOf(closeMarker, contentStart);
  if (j < 0) throw new Error(`Missing close after ${openMarker}`);
  return html.slice(contentStart, j);
}

const manifestRaw = sliceBetween('<script type="__bundler/manifest">', "</script>");
const manifest = JSON.parse(manifestRaw.trim());

const templateMarker = '<script type="__bundler/template">';
const templateJsonRaw = sliceBetween(templateMarker, "</script>");
const templateStr = JSON.parse(templateJsonRaw);

const uuids = Object.keys(manifest);
console.error("assets:", uuids.length, "template chars:", templateStr.length);

async function decodeEntry(entry) {
  const binaryStr = Buffer.from(entry.data, "base64");
  let finalBytes = binaryStr;
  if (entry.compressed && typeof DecompressionStream !== "undefined") {
    const ds = new DecompressionStream("gzip");
    const writer = ds.writable.getWriter();
    const reader = ds.readable.getReader();
    writer.write(binaryStr);
    writer.close();
    const chunks = [];
    let totalLen = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      totalLen += value.length;
    }
    finalBytes = new Uint8Array(totalLen);
    let offset = 0;
    for (const chunk of chunks) {
      finalBytes.set(chunk, offset);
      offset += chunk.length;
    }
  }
  return finalBytes;
}

const replacements = {};
await Promise.all(
  uuids.map(async (uuid) => {
    const entry = manifest[uuid];
    const bytes = await decodeEntry(entry);
    const b64 = Buffer.from(bytes).toString("base64");
    replacements[uuid] = `data:${entry.mime};base64,${b64}`;
  }),
);

let out = templateStr;
for (const uuid of uuids) {
  out = out.split(uuid).join(replacements[uuid]);
}
out = out.replace(/\s+integrity="[^"]*"/gi, "").replace(/\s+crossorigin="[^"]*"/gi, "");

const outPath = new URL("../extracted-site.html", import.meta.url);
fs.writeFileSync(outPath, out, "utf8");
console.error("wrote", outPath.pathname, "bytes", out.length);
