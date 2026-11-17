const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });

  const errors = [];
  page.on('pageerror', err => errors.push(err.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  // 1. DINO GAME VERIFICATION
  const dinoPath = path.resolve(__dirname, '../dino-game-darsi/index.html');
  await page.goto('file:///' + dinoPath.replace(/\\/g, '/'));
  await page.waitForTimeout(500);

  // Box mode screenshot
  const artifactDir = 'C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99';
  await page.screenshot({ path: path.join(artifactDir, 'dino_step_box_mode.png') });
  console.log('Saved dino_step_box_mode.png');

  // Switch to Real Dino Sprite Mode via evaluating click or clicking .slider
  await page.evaluate(() => {
    const cb = document.getElementById('mode-checkbox');
    cb.checked = true;
    toggleDinoMode(true);
  });
  await page.waitForTimeout(300);

  // Trigger jump
  await page.evaluate(() => triggerDinoJump());
  await page.waitForTimeout(150);

  // Sprite mode jumping screenshot
  await page.screenshot({ path: path.join(artifactDir, 'dino_step_sprite_jumping.png') });
  console.log('Saved dino_step_sprite_jumping.png');

  // 2. ERTANGI LOYIHA VERIFICATION
  const arenaPath = path.resolve(__dirname, '../ertangi-loyiha/index.html');
  await page.goto('file:///' + arenaPath.replace(/\\/g, '/'));
  await page.waitForTimeout(500);

  // Arena view screenshot
  await page.screenshot({ path: path.join(artifactDir, 'arena_full_view.png') });
  console.log('Saved arena_full_view.png');

  // Switch to Lab view
  await page.click('#btn-mode-lab');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(artifactDir, 'lab_5steps_flex.png') });
  console.log('Saved lab_5steps_flex.png');

  // Switch to JS Class Lab
  await page.click('button:has-text("3. JS Class Metodikasi")');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(artifactDir, 'lab_5steps_class.png') });
  console.log('Saved lab_5steps_class.png');

  await browser.close();

  if (errors.length > 0) {
    console.error('Page errors encountered:', errors);
    process.exit(1);
  } else {
    console.log('All pages verified with 0 console errors!');
  }
})();
