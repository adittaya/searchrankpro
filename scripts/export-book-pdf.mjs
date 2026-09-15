import http from "http";
import { createReadStream, existsSync, statSync } from "fs";
import { execSync } from "child_process";
import path from "path";

import puppeteer from "puppeteer";

const OUT_DIR = "out";
const HOST = "127.0.0.1";
const PORT = 4299;
const PDF_PATH = process.env.BOOK_PDF ?? "The_Google_Search_Ranking_System_Playbook.pdf";
const BOOK_ROUTE = process.env.BOOK_ROUTE ?? "/book";
const TMP_PDF = "/tmp/opencode/book-pass1.pdf";

const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
  ".pdf": "application/pdf",
  ".webp": "image/webp",
};

/* Minimal static server for the exported out/ directory. */
const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);
  let filePath = path.join(process.cwd(), OUT_DIR, urlPath === "/" ? "index.html" : urlPath);
  if (!filePath.startsWith(path.join(process.cwd(), OUT_DIR))) {
    res.writeHead(403);
    res.end("forbidden");
    return;
  }
  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    const withHtml = path.join(process.cwd(), OUT_DIR, `${urlPath}.html`);
    if (urlPath !== "/" && existsSync(withHtml) && !statSync(withHtml).isDirectory()) {
      filePath = withHtml;
    } else {
      res.writeHead(404);
      res.end("not found");
      return;
    }
  }
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, { "Content-Type": MIME[ext] ?? "application/octet-stream" });
  createReadStream(filePath).pipe(res);
});

const norm = (s) => s.replace(/\s+/g, " ").trim();

/* Each physical page of the pass-1 PDF, as normalized text. */
function pageTexts(pdfPath) {
  execSync(`pdftotext ${pdfPath} /tmp/opencode/pass1.txt`, { stdio: "inherit" });
  const raw = execSync(`pdftotext -layout ${pdfPath} -`, {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  const pages = raw.split("\f").map(norm).filter(Boolean);
  return pages;
}

/* Find the first page whose layout text contains a distinctive prefix of the
   chapter heading text. Scanning starts after the TOC ends (located by the
   TOC-END-MARKER), because the TOC repeats each chapter title. */
function pageOf(pages, heading, startIdx = 2) {
  const probe = norm(heading.replace(/^[0-9A-F]+\.\s*/, "")).slice(0, 34);
  if (!probe) return -1;
  for (let i = startIdx; i < pages.length; i++) {
    if (pages[i].includes(probe)) return i + 1;
  }
  return -1;
}

await new Promise((resolve) => server.listen(PORT, HOST, resolve));
console.log(`serving ${path.join(process.cwd(), OUT_DIR)} at http://${HOST}:${PORT}`);

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--font-render-hinting=none"],
});

try {
  const page = await browser.newPage();
  await page.setCacheEnabled(false);
  await page.goto(`http://${HOST}:${PORT}${BOOK_ROUTE}`, { waitUntil: "networkidle0", timeout: 90000 });
  await page.waitForSelector(".book-chapter", { timeout: 30000 });
  await page.evaluate(() => document.fonts?.ready);
  await new Promise((r) => setTimeout(r, 1500));

  const headings = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".book-chapter > h2")).map((h) =>
      h.textContent?.replace(/\s+/g, " ").trim() ?? ""
    )
  );
  const ids = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".book-chapter")).map((c) => c.id)
  );
  console.log(`chapters: ${headings.length} (${ids.join(", ")})`);

  /* pass 1: print without TOC page numbers */
  await page.pdf({ path: TMP_PDF, format: "A4", printBackground: true, preferCSSPageSize: true });

  const pages = pageTexts(TMP_PDF);
  const tocEndIdx = pages.findIndex((p) => p.includes("TOC-END-MARKER"));
  const contentStartIdx = tocEndIdx >= 0 ? tocEndIdx + 1 : 2;
  const pageOfSection = {};
  ids.forEach((id, i) => {
    const p = pageOf(pages, headings[i], contentStartIdx);
    pageOfSection[id] = p;
    console.log(`  ${String(i + 1).padStart(2)}. ${ids[i]} -> page ${p}`);
  });

  /* inject measured page numbers into the TOC rows */
  await page.evaluate((map) => {
    document.querySelectorAll("[data-page-for]").forEach((el) => {
      const got = map[el.dataset.pageFor];
      if (got != null) el.textContent = String(got);
    });
  }, pageOfSection);

  await page.pdf({
    path: PDF_PATH,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
  });

  const total = await page.evaluate(() => document.querySelectorAll(".book-chapter").length);
  console.log(`PDF written: ${PDF_PATH} (${total} chapters)`);
} finally {
  await browser.close();
  server.close();
}