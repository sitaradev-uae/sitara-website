const fs = require("fs");
const path = require("path");
const out = path.join(__dirname, "..", "out");
const index = path.join(out, "index.html");
const notFound = path.join(out, "404.html");
if (fs.existsSync(index)) fs.copyFileSync(index, notFound);
