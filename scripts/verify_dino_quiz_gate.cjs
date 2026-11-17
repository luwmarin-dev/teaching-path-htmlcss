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

  // 1. Select Step 1
  await page.evaluate(() => selectStep(1));
  await page.waitForTimeout(400);

  // Take screenshot of locked state
  await page.screenshot({
    path: path.resolve('C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99/dino_quiz_gate_locked.png')
  });
  console.log('Saved dino_quiz_gate_locked.png');

  // Click wrong answer (option index 1)
  const optButtons = await page.$$('.quiz-opt-btn');
  console.log('Found quiz option buttons:', optButtons.length);
  if (optButtons.length > 1) {
    await optButtons[1].click();
    await page.waitForTimeout(400);
    await page.screenshot({
      path: path.resolve('C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99/dino_quiz_wrong_feedback.png')
    });
    console.log('Saved dino_quiz_wrong_feedback.png');
  }

  // Click correct answer (option index 0 for step 1)
  if (optButtons.length > 0) {
    await optButtons[0].click();
    await page.waitForTimeout(400);
    await page.screenshot({
      path: path.resolve('C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99/dino_quiz_gate_unlocked.png')
    });
    console.log('Saved dino_quiz_gate_unlocked.png');
  }

  // 2. Test Step 2
  await page.evaluate(() => selectStep(2));
  await page.waitForTimeout(400);
  const step2Opts = await page.$$('.quiz-opt-btn');
  if (step2Opts.length > 0) {
    await step2Opts[0].click();
    await page.waitForTimeout(400);
    await page.screenshot({
      path: path.resolve('C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99/dino_step2_unlocked_prettier.png')
    });
    console.log('Saved dino_step2_unlocked_prettier.png');
  }

  // 3. Test Step 5 (Google Chrome authentic Dino)
  await page.evaluate(() => selectStep(5));
  await page.waitForTimeout(400);
  const step5Opts = await page.$$('.quiz-opt-btn');
  if (step5Opts.length > 0) {
    await step5Opts[0].click();
    await page.waitForTimeout(400);
    await page.screenshot({
      path: path.resolve('C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99/dino_step5_google_sprite.png')
    });
    console.log('Saved dino_step5_google_sprite.png');
  }

  const arenaEl = await page.$('.game-arena-card');
  if (arenaEl) {
    await page.evaluate(() => {
      resetGame();
      // Place cactus far away so no collision
      cactusX = 600;
    });
    await page.waitForTimeout(100);
    await arenaEl.screenshot({
      path: path.resolve('C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99/dino_arena_google_sprite.png')
    });
    console.log('Saved dino_arena_google_sprite.png');
  }

  // Full interactive view
  await page.screenshot({
    path: path.resolve('C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99/dino_game_full_interactive.png')
  });
  console.log('Saved dino_game_full_interactive.png');

  await browser.close();
  console.log('All tests completed successfully!');
})();
