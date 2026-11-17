const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 960 }
  });
  const page = await context.newPage();

  const filePath = path.resolve(__dirname, '../dino-game-darsi/index.html');
  const html = fs.readFileSync(filePath, 'utf-8');
  console.log('Setting content from index.html (length:', html.length, ')');
  await page.setContent(html, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(600);

  // 1. Step 1: Open code is completely visible from start!
  await page.evaluate(() => selectStep(1));
  await page.waitForTimeout(400);

  // Take screenshot showing openly visible code and the logic challenge below it
  await page.screenshot({
    path: path.resolve('C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99/dino_step1_open_code_and_quiz.png')
  });
  console.log('Saved dino_step1_open_code_and_quiz.png');

  // Click wrong answer (option index 1)
  const optButtons = await page.$$('.quiz-opt-btn');
  console.log('Found quiz option buttons:', optButtons.length);
  if (optButtons.length > 1) {
    await optButtons[1].click();
    await page.waitForTimeout(400);
    await page.screenshot({
      path: path.resolve('C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99/dino_step1_wrong_feedback.png')
    });
    console.log('Saved dino_step1_wrong_feedback.png');
  }

  // Click correct answer (option index 0 for step 1)
  if (optButtons.length > 0) {
    await optButtons[0].click();
    await page.waitForTimeout(400);
    await page.screenshot({
      path: path.resolve('C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99/dino_step1_unlocked_next.png')
    });
    console.log('Saved dino_step1_unlocked_next.png');
  }

  // 2. Test Step 2
  await page.evaluate(() => selectStep(2));
  await page.waitForTimeout(400);
  const step2Opts = await page.$$('.quiz-opt-btn');
  if (step2Opts.length > 0) {
    await step2Opts[0].click(); // Option 0 is correct
    await page.waitForTimeout(400);
    await page.screenshot({
      path: path.resolve('C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99/dino_step2_open_code_solved.png')
    });
    console.log('Saved dino_step2_open_code_solved.png');
  }

  // 3. Test Step 5 (Google Chrome authentic Dino)
  await page.evaluate(() => selectStep(5));
  await page.waitForTimeout(400);
  const step5Opts = await page.$$('.quiz-opt-btn');
  if (step5Opts.length > 0) {
    await step5Opts[0].click();
    await page.waitForTimeout(400);
    await page.screenshot({
      path: path.resolve('C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99/dino_step5_google_sprite_open.png')
    });
    console.log('Saved dino_step5_google_sprite_open.png');
  }

  await browser.close();
  console.log('All tests completed successfully!');
})();
