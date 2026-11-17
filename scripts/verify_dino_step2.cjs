const { chromium } = require('playwright');
const path = require('path');

async function run() {
  const artifactDir = 'C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99';
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  const dinoPath = path.resolve(__dirname, '../dino-game-darsi/index.html');
  await page.goto('file:///' + dinoPath.replace(/\\/g, '/'));
  await page.waitForLoadState('networkidle');

  // Select Step 2
  await page.evaluate(() => {
    selectStep(2);
  });
  await page.waitForTimeout(500);

  const codeText = await page.evaluate(() => document.getElementById('display-step-code').innerText);
  console.log('Step 2 Rendered Code Text:\n', codeText);

  await page.screenshot({ path: path.join(artifactDir, 'dino_step2_prettier_fixed.png') });
  console.log('Saved dino_step2_prettier_fixed.png');

  await browser.close();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
