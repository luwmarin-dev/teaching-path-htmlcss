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

  const htmlCssPath = 'file:///' + path.join(rootDir, 'html-css', 'index_uz.html').replace(/\\/g, '/');
  await page.goto(htmlCssPath, { waitUntil: 'load' });
  await page.waitForTimeout(500);

  // Click on Theme 25 in the sidebar
  await page.click('li[data-lesson-id="theme-25-overflow"]');
  await page.waitForTimeout(600);

  // Scroll to anatomy section & mission spotlight
  const anatomy = page.locator('.step-breakdown-card');
  await anatomy.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);

  await page.screenshot({ path: path.join(artifactDir, 'theme25_overflow_fixed_anatomy_vazifa.png'), fullPage: false });
  await browser.close();
  console.log('Theme 25 screenshot captured!');
}

capture().catch(console.error);
