// Circle-crops the glossy orb out of each Assets/ icon (black background
// removed by cropping inside the orb), downscales to 240px, and inlines the
// result into index.html as a data URI, replacing __ICON_*__ tokens.
import puppeteer from "puppeteer";
import { readFile, writeFile, mkdir } from "node:fs/promises";

const ICONS = [
  { token: "__ICON_MEDSCHECK__", file: "Assets/meds check icon.png", out: "medscheck" },
  { token: "__ICON_AILMENTS__", file: "Assets/ailments.png", out: "ailments" },
  { token: "__ICON_BILLING__", file: "Assets/billing icon.png", out: "billing" },
  { token: "__ICON_VACCINES__", file: "Assets/vaccins icon.png", out: "vaccines" },
];

// Crop square = 68% of the image's short side, centered — safely inside the
// white orb (~83% of short side) so no black corner or glow ring survives.
const CROP_RATIO = 0.68;
const OUT_SIZE = 240;

const browser = await puppeteer.launch();
const page = await browser.newPage();
await mkdir("Assets/processed", { recursive: true });

let html = await readFile("index.html", "utf8");

for (const icon of ICONS) {
  const b64 = (await readFile(icon.file)).toString("base64");
  const dataUrl = await page.evaluate(
    async (src, cropRatio, outSize) => {
      const img = new Image();
      img.src = src;
      await img.decode();
      const short = Math.min(img.width, img.height);
      const s = short * cropRatio;
      const sx = (img.width - s) / 2;
      const sy = (img.height - s) / 2;
      const canvas = document.createElement("canvas");
      canvas.width = outSize;
      canvas.height = outSize;
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(outSize / 2, outSize / 2, outSize / 2, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(img, sx, sy, s, s, 0, 0, outSize, outSize);
      return canvas.toDataURL("image/png");
    },
    "data:image/png;base64," + b64,
    CROP_RATIO,
    OUT_SIZE
  );

  await writeFile(
    `Assets/processed/${icon.out}.png`,
    Buffer.from(dataUrl.split(",")[1], "base64")
  );

  if (!html.includes(icon.token)) {
    console.error(`Token ${icon.token} not found in index.html — skipped`);
    continue;
  }
  html = html.replace(icon.token, dataUrl);
  console.log(`${icon.out}: ${Math.round(dataUrl.length / 1024)} KB inlined`);
}

await writeFile("index.html", html);
await browser.close();
console.log("done");
