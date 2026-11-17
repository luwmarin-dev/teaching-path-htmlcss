const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const pathStr = fs.readFileSync(path.join(__dirname, '../dino_path.txt'), 'utf-8');

const html = `
<!DOCTYPE html>
<html>
<body style="background: #090d16; display:flex; justify-content:center; align-items:center; height:100vh; gap: 40px;">
  <div style="background: #111827; padding: 24px; border-radius: 12px; text-align: center; border: 1px solid #1f2937;">
    <h3 style="color: #38bdf8; font-family: sans-serif; margin-bottom: 12px;">Google Chrome Dino (T-Rex)</h3>
    <div style="width: 88px; height: 94px; margin: 0 auto;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 47" style="width: 100%; height: 100%; fill: #e2e8f0; shape-rendering: crispEdges;">
        <path d="${pathStr}"/>
      </svg>
    </div>
  </div>
</body>
</html>
`;

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(html);
  const artifactDir = 'C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99';
  await page.screenshot({ path: path.join(artifactDir, 'google_chrome_dino_exact.png') });
  await browser.close();
  console.log('Saved google_chrome_dino_exact.png');
}
main();
