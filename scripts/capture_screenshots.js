import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const artifactsDir = path.resolve('C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99');

async function capture() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // 1. Hub
  await page.goto('file:///' + path.join(rootDir, 'index.html').replace(/\\/g, '/'));
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(artifactsDir, 'before_hub.png') });
  console.log('Saved before_hub.png');

  // 2. HTML/CSS
  await page.goto('file:///' + path.join(rootDir, 'html-css/index.html').replace(/\\/g, '/'));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(artifactsDir, 'before_html_lesson.png') });
  console.log('Saved before_html_lesson.png');

  // 3. Open Visual Lab Modal if button exists
  const labBtn = page.locator('#btn-open-topic-lab');
  if (await labBtn.count() > 0) {
    await labBtn.click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(artifactsDir, 'before_visual_lab.png') });
    console.log('Saved before_visual_lab.png');
  }

  // 4. Open Student Profile Modal
  await page.goto('file:///' + path.join(rootDir, 'html-css/index.html').replace(/\\/g, '/'));
  await page.waitForTimeout(400);
  const profileBtn = page.locator('#btn-student-profile');
  if (await profileBtn.count() > 0) {
    await profileBtn.click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(artifactsDir, 'before_student_modal.png') });
    console.log('Saved before_student_modal.png');
  }

  await browser.close();
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
