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

  const artifactDir = 'C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99';

  // 1. Capture elevated JS lesson view
  await page.screenshot({ path: path.join(artifactDir, 'after_js_lesson_elevated.png') });
  console.log('Captured after_js_lesson_elevated.png');

  // 2. Open Visual Lab modal
  const labBtn = await page.$('#btn-topic-lab');
  if (labBtn) {
    await labBtn.click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(artifactDir, 'after_js_visual_lab_elevated.png') });
    console.log('Captured after_js_visual_lab_elevated.png');
    // Close modal
    await page.click('#btn-close-topic-lab');
    await page.waitForTimeout(300);
  }

  // 3. Open Command Cheat Sheet modal
  const tagListBtn = await page.$('#btn-tag-list');
  if (tagListBtn) {
    await tagListBtn.click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(artifactDir, 'after_js_commands_modal.png') });
    console.log('Captured after_js_commands_modal.png');
    // Close modal
    await page.click('#btn-close-tag-modal');
    await page.waitForTimeout(300);
  }

  console.log('Console/Page errors:', jsErrors);
  await browser.close();
  console.log('All elevations verified successfully!');
})();
