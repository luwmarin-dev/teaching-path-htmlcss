const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function run() {
  const artifactDir = 'C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99';
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  // 1. Check html-css/index_uz.html - Theme 8 Transform Lab
  const htmlCssUzPath = path.resolve(__dirname, '../html-css/index_uz.html');
  await page.goto('file:///' + htmlCssUzPath.replace(/\\/g, '/'));
  await page.waitForLoadState('networkidle');

  // Select Theme 8
  await page.click('[data-lesson-id="theme-8-transform"]');
  await page.waitForTimeout(500);

  // Click Per-Topic Visual Lab button
  await page.click('#btn-topic-lab');
  await page.waitForTimeout(500);

  // In the Visual Lab modal, slide to step 3 (0-indexed: 4th step "4. Master Studiya")
  await page.evaluate(() => {
    const slider = document.querySelector('#evolution-range-slider');
    if (slider) {
      slider.value = 3;
      slider.dispatchEvent(new Event('input', { bubbles: true }));
    }
  });
  await page.waitForTimeout(500);

  // Click Div 2 button (#t-d2)
  await page.click('#t-d2');
  await page.waitForTimeout(300);

  const isD2Active = await page.evaluate(() => document.querySelector('#t-d2')?.classList.contains('active'));
  const isD1Inactive = await page.evaluate(() => !document.querySelector('#t-d1')?.classList.contains('active'));
  console.log('Theme 8 Transform Lab: Div 2 active?', isD2Active, 'Div 1 inactive?', isD1Inactive);

  await page.screenshot({ path: path.join(artifactDir, 'transform_lab_div2_selected.png') });
  console.log('Saved transform_lab_div2_selected.png');

  // Click Div 3 button (#t-d3)
  await page.click('#t-d3');
  await page.waitForTimeout(300);

  const isD3Active = await page.evaluate(() => document.querySelector('#t-d3')?.classList.contains('active'));
  console.log('Theme 8 Transform Lab: Div 3 active?', isD3Active);
  await page.screenshot({ path: path.join(artifactDir, 'transform_lab_div3_selected.png') });
  console.log('Saved transform_lab_div3_selected.png');

  // Close lab modal
  await page.click('#btn-close-topic-lab-modal');
  await page.waitForTimeout(500);

  // 2. Check Theme 1 (Clean Uzbek comments and larger Cyber Pet Card)
  await page.click('[data-lesson-id="theme-1-tags"]');
  await page.waitForTimeout(500);

  const editorText = await page.evaluate(() => document.querySelector('#code-textarea')?.value);
  console.log('Theme 1 Editor text:\n', editorText);

  await page.screenshot({ path: path.join(artifactDir, 'theme1_clean_code_uz.png') });
  console.log('Saved theme1_clean_code_uz.png');

  await browser.close();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
