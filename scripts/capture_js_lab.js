import { chromium } from 'playwright';
import path from 'path';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  const jsErrors = [];
  page.on('pageerror', err => jsErrors.push(err.message));
  page.on('console', msg => {
    if (msg.type() === 'error') jsErrors.push(msg.text());
  });

  const jsUrl = 'file:///' + path.resolve('javascript/index.html').replace(/\\/g, '/');
  console.log('Navigating to', jsUrl);
  await page.goto(jsUrl, { waitUntil: 'load' });
  await page.waitForTimeout(600);

  const labBtn = await page.$('#btn-open-topic-lab');
  if (labBtn) {
    console.log('Clicking #btn-open-topic-lab...');
    await labBtn.click();
    await page.waitForTimeout(400);

    const artifactDir = 'C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99';
    await page.screenshot({ path: path.join(artifactDir, 'js_visual_lab.png') });
    console.log('Captured js_visual_lab.png');
  } else {
    console.log('Could not find #btn-open-topic-lab');
  }

  console.log('Console errors:', jsErrors);
  await browser.close();
})();
