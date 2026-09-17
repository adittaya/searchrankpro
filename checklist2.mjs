import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer";
const root = path.resolve("out");
const server = http.createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (p.endsWith("/")) p += "index.html";
    let fp = path.join(root, p);
    try { await stat(fp); } catch { fp = path.join(root, p + ".html"); }
    res.setHeader("Content-Type", { ".html":"text/html", ".css":"text/css", ".js":"text/javascript", ".png":"image/png", ".jpg":"image/jpeg", ".webp":"image/webp" }[path.extname(fp)] || "application/octet-stream");
    res.end(await readFile(fp));
  } catch { res.statusCode = 404; res.end("nf"); }
});
await new Promise(r => server.listen(8799, r));
const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
await page.goto("http://localhost:8799/", { waitUntil: "networkidle0" });
await page.evaluate(() => document.getElementById("free")?.scrollIntoView({ block: "start" }));
await new Promise(r => setTimeout(r, 1500));

const d = await page.evaluate(() => {
  const sec = document.getElementById("free");
  const list = [];
  const walk = (parent, depth) => {
    if (depth > 4) return;
    for (const el of parent.children) {
      const r = el.getBoundingClientRect();
      const tag = el.tagName;
      const cls = String(el.className||"");
      const meaningful = cls && (cls.includes("bg-") || cls.includes("max-w") || cls.includes("grid") || cls.includes("flex") || /text-|font-/.test(cls));
      if (meaningful && r.height > 4) {
        list.push({ depth, d: " ".repeat(depth), tag, cls: cls.slice(0,52), t: Math.round(r.top - sec.getBoundingClientRect().top), w: Math.round(r.width), h: Math.round(r.height) });
      }
      walk(el, depth + 1);
    }
  };
  walk(sec, 0);
  return list.slice(0, 40);
});
console.log(JSON.stringify(d, null, 2));
await browser.close(); server.close();
