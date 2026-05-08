import fs from "node:fs";

const htmlPath = new URL("../Vivid Capital _standalone_ (3).html", import.meta.url);
const html = fs.readFileSync(htmlPath, "utf8");
const marker = '<script type="__bundler/template">';
const start = html.indexOf(marker);
if (start === -1) {
  console.error("template script not found");
  process.exit(1);
}
const after = html.indexOf("</script>", start + marker.length);
const jsonStr = html.slice(start + marker.length, after).trim();
const tpl = JSON.parse(jsonStr);
console.log("template length", tpl.length);
console.log(tpl.slice(0, 15000));
