import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const artifactDir = 'C:/Users/adam/.gemini/antigravity/brain/0054335f-863e-4517-acec-784831aa1ebf';

async function capture() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  // 1. Capture Dino Game Initial State
  const dinoPath = 'file:///' + path.join(rootDir, 'dino-game-darsi', 'index.html').replace(/\\/g, '/');
  await page.goto(dinoPath, { waitUntil: 'load' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(artifactDir, 'dino_game_socratic_locked.png'), fullPage: false });

  // 2. Answer Quiz on Dino Game and Capture Unlocked State
  await page.locator('.quiz-opt-btn').nth(0).click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(artifactDir, 'dino_game_socratic_unlocked.png'), fullPage: false });

  // 3. Capture HTML/CSS Theme 9 Flexbox
  const htmlCssPath = 'file:///' + path.join(rootDir, 'html-css', 'index.html').replace(/\\/g, '/');
  await page.goto(htmlCssPath, { waitUntil: 'load' });
  await page.evaluate(() => {
    window.location.hash = '#theme-9-flexbox';
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(artifactDir, 'html_css_theme9_flexbox_fixed.png'), fullPage: false });

  await browser.close();
  console.log('Screenshots captured successfully!');
}

capture().catch(console.error);
