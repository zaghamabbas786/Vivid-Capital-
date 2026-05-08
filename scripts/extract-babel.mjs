import fs from "node:fs";

const htmlPath = new URL("../extracted-site.html", import.meta.url);
const h = fs.readFileSync(htmlPath, "utf8");

const tag = '<script type="text/babel"';
let pos = 0;
let count = 0;
while (true) {
  const i = h.indexOf(tag, pos);
  if (i === -1) break;
  count += 1;
  const gt = h.indexOf(">", i + tag.length);
  const close = h.indexOf("</script>", gt + 1);
  const srcAttrStart = h.indexOf('src="', i);
  const hasSrc = srcAttrStart !== -1 && srcAttrStart < gt;

  console.log("\n--- script", count, "---");
  console.log("offset", i, "hasSrc", hasSrc);

  if (hasSrc) {
    console.log(h.slice(i, Math.min(i + 200, gt + 1)));
  } else {
    const body = h.slice(gt + 1, close);
    console.log("inline length", body.length);
    console.log(body.slice(0, 4000));
    console.log("...\n", body.slice(-800));
  }

  pos = close + 1;
}

console.log("\ntotal babel scripts:", count);
