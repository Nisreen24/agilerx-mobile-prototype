import puppeteer from "puppeteer";
import { mkdir, readdir } from "node:fs/promises";

const url = process.argv[2];
const label = process.argv[3];

if (!url) {
  console.error("Usage: node screenshot.mjs <url> [label]");
  process.exit(1);
}

const dir = "./temporary screenshots";
await mkdir(dir, { recursive: true });

const existing = await readdir(dir);
const nums = existing
  .map((f) => (f.match(/^screenshot-(\d+)/) || [])[1])
  .filter(Boolean)
  .map(Number);
const n = (nums.length ? Math.max(...nums) : 0) + 1;
const out = `${dir}/screenshot-${n}${label ? "-" + label : ""}.png`;

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 950, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log(out);
