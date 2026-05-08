import fs from "node:fs";

const htmlPath = new URL("../extracted-site.html", import.meta.url);
const h = fs.readFileSync(htmlPath, "utf8");

const needles = [
  'type="text/babel"',
  "type='text/babel'",
  'type="text/jsx"',
  "createRoot",
  "ReactDOM.render",
  "Vivid Capital",
];
for (const n of needles) {
  console.log(n, h.includes(n));
}

const babelIdx = h.indexOf('type="text/babel"');
console.log("babel double quote idx", babelIdx);
