import { chromium } from 'playwright';
import path from 'node:path';

async function testScreens() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  // HTML/CSS
  await page.goto('file:///' + path.resolve('html-css/index_uz.html').replace(/\\/g, '/'), { waitUntil: 'load' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'C:/Users/adam/.gemini/antigravity/brain/0054335f-863e-4517-acec-784831aa1ebf/html_css_verified.png' });
  
  // Switch to Matrix theme
  await page.click('.theme-pill-btn[data-theme="matrix"]');
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'C:/Users/adam/.gemini/antigravity/brain/0054335f-863e-4517-acec-784831aa1ebf/html_css_matrix.png' });

  // Switch to Synthwave theme
  await page.click('.theme-pill-btn[data-theme="synthwave"]');
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'C:/Users/adam/.gemini/antigravity/brain/0054335f-863e-4517-acec-784831aa1ebf/html_css_synthwave.png' });

  // Switch to Light theme
  await page.click('.theme-pill-btn[data-theme="light"]');
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'C:/Users/adam/.gemini/antigravity/brain/0054335f-863e-4517-acec-784831aa1ebf/html_css_light.png' });

  await browser.close();
  console.log('Screenshots captured successfully!');
}
testScreens();
