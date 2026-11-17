const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const filePath = 'file:///' + path.resolve(__dirname, '../html-css/index_uz.html').replace(/\\/g, '/');
  await page.goto(filePath);
  await page.waitForTimeout(1000);

  // Click on theme 3 in the sidebar
  const theme3Link = await page.$('[data-lesson-id="theme-3-tables"]');
  if (theme3Link) {
    await theme3Link.click();
    await page.waitForTimeout(1000);
  }

  // Click on Target tab
  const targetTab = await page.$('#tab-target');
  if (targetTab) {
    await targetTab.click();
    await page.waitForTimeout(500);
  }

  const dest = 'C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99/table_from_scratch_uz.png';
  await page.screenshot({ path: dest, fullPage: true });
  console.log('Saved table_from_scratch_uz.png');

  await browser.close();
})();
