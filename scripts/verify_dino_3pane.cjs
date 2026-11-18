const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1360, height: 900 } });
  const page = await context.newPage();

  const filePath = 'file:///' + path.resolve(__dirname, '../dino-game-darsi/index.html').replace(/\\/g, '/');
  console.log('Navigating to:', filePath);
  await page.goto(filePath, { waitUntil: 'load' });

  // 1. Initial State: 3-pane layout check
  const topVisible = await page.locator('#top-explanation-card').isVisible();
  const leftVisible = await page.locator('#left-editor-panel').isVisible();
  const rightVisible = await page.locator('#right-preview-panel').isVisible();
  console.log('Panes visible:', { topVisible, leftVisible, rightVisible });

  if (!topVisible || !leftVisible || !rightVisible) {
    throw new Error('Not all 3 panes are visible!');
  }

  // Screenshot 1: 3-pane overview on step 1
  const artDir = 'C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99';
  await page.screenshot({ path: path.join(artDir, 'dino_3pane_step1_overview.png') });
  console.log('Saved dino_3pane_step1_overview.png');

  // 2. Test Hint drawer toggle
  await page.click('.hint-toggle-btn');
  const hintOpen = await page.locator('#hint-drawer.open').isVisible();
  console.log('Hint drawer open:', hintOpen);
  await page.screenshot({ path: path.join(artDir, 'dino_3pane_hint_opened.png') });

  // 3. Test Invalid code execution
  await page.fill('#student-code-editor', '// xato kod');
  await page.click('.run-btn:has-text("Kodni Ishga Tushirish")');
  const errorVisible = await page.locator('.validation-feedback-card.error').isVisible();
  console.log('Error feedback shown on invalid code:', errorVisible);

  // 4. Test Valid code execution
  await page.fill('#student-code-editor', `class Dino {\n  // Skelet\n}\nconst dino = new Dino();`);
  await page.click('.run-btn:has-text("Kodni Ishga Tushirish")');
  const successVisible = await page.locator('.validation-feedback-card.success').isVisible();
  console.log('Success feedback shown on valid code:', successVisible);

  await page.screenshot({ path: path.join(artDir, 'dino_3pane_step1_passed.png') });

  // 5. Test Step 2 transition
  await page.click('#step-nav-2');
  await page.waitForTimeout(300);
  console.log('Switched to Step 2');

  // Verify step 2 starter code and run valid constructor code
  await page.fill('#student-code-editor', `class Dino {\n  constructor() {\n    this.width = 60;\n    this.height = 60;\n    this.x = 60;\n    this.y = 0;\n    this.isJumping = false;\n  }\n}\nconst dino = new Dino();`);
  await page.click('.run-btn:has-text("Kodni Ishga Tushirish")');
  await page.waitForTimeout(300);

  const telHitbox = await page.textContent('#tel-hitbox');
  console.log('Telemetry Hitbox updated to:', telHitbox);

  await page.screenshot({ path: path.join(artDir, 'dino_3pane_step2_hitbox.png') });

  // 6. Test Step 5 (Full game)
  // Unlock remaining steps
  await page.evaluate(() => {
    unlockedSteps[1] = true;
    unlockedSteps[2] = true;
    unlockedSteps[3] = true;
    unlockedSteps[4] = true;
    unlockedSteps[5] = true;
    updateProgressUI();
  });

  await page.click('#step-nav-5');
  await page.waitForTimeout(500);

  // Jump in browser
  await page.click('.jump-btn-action');
  await page.waitForTimeout(300);

  await page.screenshot({ path: path.join(artDir, 'dino_3pane_step5_gameplay.png') });
  console.log('Saved dino_3pane_step5_gameplay.png');

  await browser.close();
  console.log('Verification finished successfully!');
})();
