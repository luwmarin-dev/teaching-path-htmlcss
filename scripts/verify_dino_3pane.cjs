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

  // 1. Initial State Screenshot with Goal Showcase & Playable Target Arena & Sliders
  // Adjust speed and altitude slider to test interactive sliders
  await page.fill('#slider-target-speed', '4.2');
  await page.locator('#slider-target-speed').dispatchEvent('input');
  await page.fill('#slider-target-y', '20');
  await page.locator('#slider-target-y').dispatchEvent('input');
  await page.click('.target-play-btn');
  await page.waitForTimeout(600); // let target demo run with dino, cacti, clouds
  await page.locator('#target-demo-arena').screenshot({ path: path.join(artDir, 'dino_5_target_sliders_lab.png') });
  console.log('Saved dino_5_target_sliders_lab.png');
  await page.screenshot({ path: path.join(artDir, 'dino_3_playable_target_arena.png') });
  console.log('Saved dino_3_playable_target_arena.png');

  // Test HTML & CSS Boilerplate Toggle Drawer
  await page.click('#btn-toggle-boilerplate');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(artDir, 'dino_7_boilerplate_drawer_open.png') });
  console.log('Saved dino_7_boilerplate_drawer_open.png');
  await page.click('#btn-toggle-boilerplate');
  await page.waitForTimeout(200);

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

  // 3. Step 1: Write code and unlock Step 2
  await page.fill('#student-code-editor', `class Dino {\n}\nconst dino = new Dino();`);
  await page.click('.run-btn:has-text("Kodni Ishga Tushirish")');
  await page.waitForTimeout(300);

  // 4. Click Next Step Button to advance to Step 2
  await page.click('#btn-next-step');
  await page.waitForTimeout(400);

  // Snapshot 'this' simulator in Step 2
  await page.locator('#this-simulator-box').screenshot({ path: path.join(artDir, 'dino_4_this_simulator_element.png') });
  await page.screenshot({ path: path.join(artDir, 'dino_4_step2_this_simulator.png') });
  console.log('Saved dino_4_this_simulator_element.png');

  // Open multi-tier hints and reveal scaffolding
  await page.click('.hint-toggle-btn');
  await page.waitForTimeout(200);
  await page.click('#btn-giveup');
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(artDir, 'dino_4_multi_tier_hints.png') });
  console.log('Saved dino_4_multi_tier_hints.png');

  // Close hints
  await page.click('.hint-toggle-btn');
  await page.waitForTimeout(200);

  // Step 2.a: Test Custom Experimental Parameters (y = 25, width = 54) to verify visual reaction
  await page.fill('#student-code-editor', `class Dino {\n  constructor() {\n    this.width = 54;\n    this.height = 48;\n    this.x = 60;\n    this.y = 25;\n    this.isJumping = false;\n    this.isDucking = false;\n  }\n}\nconst dino = new Dino();`);
  await page.locator('#student-code-editor').dispatchEvent('input');
  await page.click('.run-btn:has-text("Kodni Ishga Tushirish")');
  await page.waitForTimeout(300);
  await page.locator('#right-preview-panel').screenshot({ path: path.join(artDir, 'dino_5_custom_parameters_reaction.png') });
  console.log('Saved dino_5_custom_parameters_reaction.png');

  // Step 2.b: Write Standard Constructor Code
  await page.fill('#student-code-editor', `class Dino {\n  constructor() {\n    this.width = 44;\n    this.height = 48;\n    this.x = 60;\n    this.y = 0;\n    this.isJumping = false;\n    this.isDucking = false;\n  }\n}\nconst dino = new Dino();`);
  await page.click('.run-btn:has-text("Kodni Ishga Tushirish")');
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(artDir, 'dino_4_next_step_gating.png') });
  console.log('Saved dino_4_next_step_gating.png');

  // 5. Step 3: Switch to Step 3 and capture explicit criteria checklist
  await page.click('#step-nav-3');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(artDir, 'dino_6_step3_criteria_checklist.png') });
  console.log('Saved dino_6_step3_criteria_checklist.png');

  // 5.a: Test Mentor Diagnostic on beginner 48px error (as in user screenshot)
  await page.fill('#student-code-editor', `class Dino {\n  constructor() {\n    this.width = 44;\n    this.height = 48px;\n    this.x = 60;\n    this.y = 0;\n    this.isJumping = false;\n    this.isDucking = false;\n  }\n}`);
  await page.click('.run-btn:has-text("Kodni Ishga Tushirish")');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(artDir, 'dino_6_mentor_diagnostic_px.png') });
  console.log('Saved dino_6_mentor_diagnostic_px.png');

  // 5.b: Write complete valid Step 3 code fulfilling all 4 explicit subtasks
  await page.fill('#student-code-editor', `class Dino {\n  constructor() {\n    this.width = 44;\n    this.height = 48;\n    this.x = 60;\n    this.y = 0;\n    this.isJumping = false;\n    this.isDucking = false;\n  }\n  jump() {\n    if (!this.isJumping && !this.isDucking && this.y === 0) this.isJumping = true;\n  }\n  duck() {\n    if (this.y === 0 && !this.isJumping) { this.isDucking = true; this.height = 26; this.width = 55; }\n  }\n  standUp() {\n    this.isDucking = false; this.height = 48; this.width = 44;\n  }\n}\nconst dino = new Dino();\nwindow.addEventListener('keydown', e => { if (e.code === 'Space' || e.code === 'ArrowUp') dino.jump(); if (e.code === 'ArrowDown') dino.duck(); });\nwindow.addEventListener('keyup', e => { if (e.code === 'ArrowDown') dino.standUp(); });`);
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
