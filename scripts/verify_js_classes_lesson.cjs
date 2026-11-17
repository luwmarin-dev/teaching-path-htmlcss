const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 960 }
  });
  const page = await context.newPage();

  const filePath = path.resolve(__dirname, '../javascript-classes-darsi/index.html');
  const html = fs.readFileSync(filePath, 'utf-8');
  console.log('Loading javascript-classes-darsi/index.html (length:', html.length, ')');
  await page.setContent(html, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(600);

  // 1. Step 1 View: Open Code & Arena
  await page.evaluate(() => selectStep(1));
  await page.waitForTimeout(300);
  await page.screenshot({
    path: path.resolve('C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99/js_classes_step1_overview.png')
  });
  console.log('Saved js_classes_step1_overview.png');

  // Click Wrong Answer on Step 1
  const step1Opts = await page.$$('.quiz-opt-btn');
  if (step1Opts.length > 1) {
    await step1Opts[1].click();
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.resolve('C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99/js_classes_step1_wrong_opt.png')
    });
    console.log('Saved js_classes_step1_wrong_opt.png');
  }

  // Click Correct Answer on Step 1
  if (step1Opts.length > 0) {
    await step1Opts[0].click();
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.resolve('C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99/js_classes_step1_solved.png')
    });
    console.log('Saved js_classes_step1_solved.png');
  }

  // 2. Test Step 4 (Inheritance - extends & super)
  await page.evaluate(() => selectStep(4));
  await page.waitForTimeout(300);
  const step4Opts = await page.$$('.quiz-opt-btn');
  if (step4Opts.length > 0) {
    await step4Opts[0].click(); // Option 0 is correct
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.resolve('C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99/js_classes_step4_inheritance.png')
    });
    console.log('Saved js_classes_step4_inheritance.png');
  }

  // 3. Test Arena Action: Click 'Attack' and 'Spell'
  await page.evaluate(() => {
    arenaAction('spell');
    arenaAction('attack');
  });
  await page.waitForTimeout(300);
  const arenaEl = await page.$('.arena-card');
  if (arenaEl) {
    await arenaEl.screenshot({
      path: path.resolve('C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99/js_classes_arena_combat.png')
    });
    console.log('Saved js_classes_arena_combat.png');
  }

  // 4. Test Step 7 (Private Fields)
  await page.evaluate(() => selectStep(7));
  await page.waitForTimeout(300);
  const step7Opts = await page.$$('.quiz-opt-btn');
  if (step7Opts.length > 0) {
    await step7Opts[0].click(); // Option 0 is correct
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.resolve('C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99/js_classes_step7_private_fields.png')
    });
    console.log('Saved js_classes_step7_private_fields.png');
  }

  await browser.close();
  console.log('All verification checks completed successfully!');
})();
