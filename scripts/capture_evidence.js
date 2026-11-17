import { chromium } from 'playwright';
import path from 'path';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const artifactDir = 'C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99';

  // 1. Load JS Track (Uzbek by default or switch to Uzbek)
  const jsTrackPath = 'file:///' + path.resolve('javascript/index.html').replace(/\\/g, '/');
  await page.goto(jsTrackPath, { waitUntil: 'load' });
  await page.waitForTimeout(500);

  // Switch to UZ if not already
  await page.click('#btn-lang-uz');
  await page.waitForTimeout(400);

  // Click Target Goal Tab
  await page.click('#tab-target');
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(artifactDir, 'js_target_goal_uz.png'), fullPage: false });
  console.log('Saved js_target_goal_uz.png');

  // Switch to EN
  await page.click('#btn-lang-en');
  await page.waitForTimeout(400);

  // Verify English comments in code-editor and Target Goal in EN
  await page.click('#tab-target');
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(artifactDir, 'js_target_goal_en.png'), fullPage: false });
  console.log('Saved js_target_goal_en.png');

  // Open Command List Modal in JS
  await page.click('#btn-tag-list');
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(artifactDir, 'js_command_list_modal.png'), fullPage: false });
  console.log('Saved js_command_list_modal.png');

  // Close modal
  await page.click('#btn-close-tag-modal');
  await page.waitForTimeout(300);

  // Switch to Big Topic: Theme 13 (Arrays - RPG Hero Backpack)
  await page.click('li[data-lesson-id="js-13-arrays"]');
  await page.waitForTimeout(500);
  await page.click('#tab-target');
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(artifactDir, 'js_theme13_arrays_spa.png'), fullPage: false });
  console.log('Saved js_theme13_arrays_spa.png');

  // Switch to Theme 24 (Grand Clicker Game)
  await page.click('li[data-lesson-id="js-24-clicker-game"]');
  await page.waitForTimeout(500);
  await page.click('#tab-side');
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(artifactDir, 'js_theme24_clicker_sidebyside.png'), fullPage: false });
  console.log('Saved js_theme24_clicker_sidebyside.png');

  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
