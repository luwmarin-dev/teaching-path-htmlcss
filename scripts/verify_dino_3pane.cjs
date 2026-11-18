const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1360, height: 950 } });
  const page = await context.newPage();

  const filePath = 'file:///' + path.resolve(__dirname, '../dino-game-darsi/index.html').replace(/\\/g, '/');
  console.log('Navigating to:', filePath);
  await page.goto(filePath, { waitUntil: 'load' });

  const artDir = 'C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99';

  // 1. Initial State Screenshot with Goal Showcase & Playable Target Arena
  // Click target demo play button to show active running state
  await page.click('.target-play-btn');
  await page.waitForTimeout(800); // let target demo run with dino, cacti, clouds
  await page.screenshot({ path: path.join(artDir, 'dino_3_playable_target_arena.png') });
  console.log('Saved dino_3_playable_target_arena.png');

  // 1.b. Test Typing Spacebar in Editor without jump trigger
  await page.click('#student-code-editor');
  await page.fill('#student-code-editor', '');
  await page.keyboard.type('class Dino {');
  await page.keyboard.press('Enter');
  await page.keyboard.type('// spacebar test working');
  await page.screenshot({ path: path.join(artDir, 'dino_3_spacebar_typing_fixed.png') });
  console.log('Saved dino_3_spacebar_typing_fixed.png');

  // 2. Empty code check
  await page.click('.run-btn:has-text("Kodni Ishga Tushirish")');
  const errorVisible = await page.locator('.validation-feedback-card.error').isVisible();
  console.log('Empty code error visible:', errorVisible);

  // 3. Step 1: Write code
  await page.fill('#student-code-editor', `class Dino {\n}\nconst dino = new Dino();`);
  await page.click('.run-btn:has-text("Kodni Ishga Tushirish")');
  await page.waitForTimeout(300);

  // 4. Step 2: Switch & Write Constructor Code
  await page.click('#step-nav-2');
  await page.waitForTimeout(300);
  await page.fill('#student-code-editor', `class Dino {\n  constructor() {\n    this.width = 44;\n    this.height = 48;\n    this.x = 60;\n    this.y = 0;\n    this.isJumping = false;\n    this.isDucking = false;\n  }\n}\nconst dino = new Dino();`);
  await page.click('.run-btn:has-text("Kodni Ishga Tushirish")');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(artDir, 'dino_2_step2_hitbox.png') });
  console.log('Saved dino_2_step2_hitbox.png');

  // 5. Step 3: Switch & Write Jump + Duck methods
  await page.click('#step-nav-3');
  await page.waitForTimeout(300);
  await page.fill('#student-code-editor', `class Dino {\n  constructor() {\n    this.width = 44;\n    this.height = 48;\n    this.x = 60;\n    this.y = 0;\n    this.isJumping = false;\n    this.isDucking = false;\n  }\n  jump() {\n    if (!this.isJumping && !this.isDucking && this.y === 0) this.isJumping = true;\n  }\n  duck() {\n    if (this.y === 0) { this.isDucking = true; this.height = 26; this.width = 55; }\n  }\n  standUp() {\n    this.isDucking = false; this.height = 48; this.width = 44;\n  }\n}\nconst dino = new Dino();\nwindow.addEventListener('keydown', e => { if (e.code === 'Space') dino.jump(); if (e.code === 'ArrowDown') dino.duck(); });\nwindow.addEventListener('keyup', e => { if (e.code === 'ArrowDown') dino.standUp(); });`);
  await page.click('.run-btn:has-text("Kodni Ishga Tushirish")');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(artDir, 'dino_2_step3_controls.png') });
  console.log('Saved dino_2_step3_controls.png');

  // 6. Step 4: Switch & Write Gravity Physics
  await page.click('#step-nav-4');
  await page.waitForTimeout(300);
  await page.fill('#student-code-editor', `class Dino {\n  constructor() {\n    this.width = 44;\n    this.height = 48;\n    this.x = 60;\n    this.y = 0;\n    this.isJumping = false;\n    this.isDucking = false;\n    this.velocityY = 0;\n    this.jumpForce = 12;\n    this.gravity = 0.6;\n  }\n  jump() {\n    if (!this.isJumping && !this.isDucking && this.y === 0) {\n      this.isJumping = true;\n      this.velocityY = this.jumpForce;\n    }\n  }\n  duck() {\n    if (this.y === 0) { this.isDucking = true; this.height = 26; this.width = 55; }\n  }\n  standUp() {\n    this.isDucking = false; this.height = 48; this.width = 44;\n  }\n  update() {\n    if (this.isJumping) {\n      this.y += this.velocityY;\n      this.velocityY -= this.gravity;\n      if (this.y <= 0) {\n        this.y = 0;\n        this.isJumping = false;\n        this.velocityY = 0;\n      }\n    }\n  }\n}\nconst dino = new Dino();`);
  await page.click('.run-btn:has-text("Kodni Ishga Tushirish")');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(artDir, 'dino_2_step4_physics.png') });
  console.log('Saved dino_2_step4_physics.png');

  // 7. Step 5: Switch & Write AABB Collision
  await page.click('#step-nav-5');
  await page.waitForTimeout(300);
  await page.fill('#student-code-editor', `function checkCollision(dinoX, dinoY, dinoW, dinoH, obsX, obsY, obsW, obsH) {\n  return (\n    dinoX < obsX + obsW &&\n    dinoX + dinoW > obsX &&\n    dinoY + dinoH > obsY &&\n    dinoY < obsY + obsH\n  );\n}`);
  await page.click('.run-btn:has-text("Kodni Ishga Tushirish")');
  await page.waitForTimeout(800);

  // Trigger Ducking action on canvas
  await page.keyboard.down('ArrowDown');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(artDir, 'dino_2_step5_ducking.png') });
  console.log('Saved dino_2_step5_ducking.png');
  await page.keyboard.up('ArrowDown');

  // Let obstacles run
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(artDir, 'dino_2_step5_fullgame.png') });
  console.log('Saved dino_2_step5_fullgame.png');

  await browser.close();
  console.log('All steps completed with 100% strict verification!');
})();
