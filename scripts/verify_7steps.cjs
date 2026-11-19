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

  // 1. Screenshot Step 1: HTML Sahnasi (7 navigation pills, HTML badge, criteria)
  await page.screenshot({ path: path.join(artDir, 'dino_8_step1_html.png'), fullPage: false });
  console.log('Saved dino_8_step1_html.png');

  // Submit valid Step 1 code
  const step1Html = `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Chrome Dino Game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="score-board">OCHKO: <span id="score">00000</span></div>
  <canvas id="gameCanvas" width="800" height="250"></canvas>
  <script src="game.js"></script>
</body>
</html>`;
  await page.fill('#student-code-editor', step1Html);
  await page.locator('.run-btn:has-text("Kodni Ishga Tushirish")').click();

  // Advance to Step 2: CSS Arcade Maketi
  await page.locator('#btn-next-step').click();
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(artDir, 'dino_8_step2_css.png'), fullPage: false });
  console.log('Saved dino_8_step2_css.png');

  // Submit valid Step 2 code
  const step2Css = `body {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #0b0f19;
  }
  .score-board {
    font-family: monospace;
    font-size: 20px;
  }
  canvas {
    background: #0f172a;
    border: 2px solid #1e293b;
    border-radius: 12px;
  }`;
  await page.fill('#student-code-editor', step2Css);
  await page.locator('.run-btn:has-text("Kodni Ishga Tushirish")').click();

  // Advance to Step 3: Class Dino
  await page.locator('#btn-next-step').click();
  await page.fill('#student-code-editor', 'class Dino {}\nconst dino = new Dino();');
  await page.locator('.run-btn:has-text("Kodni Ishga Tushirish")').click();

  // Advance to Step 4: Dimensions & 'this' Simulator
  await page.locator('#btn-next-step').click();
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(artDir, 'dino_8_step4_this_sim.png'), fullPage: false });
  console.log('Saved dino_8_step4_this_sim.png');

  // Complete Step 4
  const step4Code = `class Dino {
    constructor() {
      this.width = 44; this.height = 48;
      this.x = 60; this.y = 0;
      this.isJumping = false; this.isDucking = false;
    }
  }
  const dino = new Dino();`;
  await page.fill('#student-code-editor', step4Code);
  await page.locator('.run-btn:has-text("Kodni Ishga Tushirish")').click();

  // Advance to Step 5: Controls
  await page.locator('#btn-next-step').click();
  const step5Code = `class Dino {
    constructor() {
      this.width = 44; this.height = 48;
      this.x = 60; this.y = 0;
      this.isJumping = false; this.isDucking = false;
    }
    jump() {
      if (!this.isJumping && !this.isDucking && this.y === 0) {
        this.isJumping = true;
      }
    }
    duck() {
      if (this.y === 0 && !this.isJumping) {
        this.isDucking = true; this.height = 26; this.width = 55;
      }
    }
    standUp() {
      this.isDucking = false; this.height = 48; this.width = 44;
    }
  }
  const dino = new Dino();
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp') dino.jump();
    if (e.code === 'ArrowDown') dino.duck();
  });
  window.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowDown') dino.standUp();
  });`;
  await page.fill('#student-code-editor', step5Code);
  await page.locator('.run-btn:has-text("Kodni Ishga Tushirish")').click();

  // Advance to Step 6: Physics
  await page.locator('#btn-next-step').click();
  const step6Code = `class Dino {
    constructor() {
      this.width = 44; this.height = 48;
      this.x = 60; this.y = 0;
      this.isJumping = false; this.isDucking = false;
      this.velocityY = 0;
      this.jumpForce = 12;
      this.gravity = 0.6;
    }
    jump() {
      if (!this.isJumping && !this.isDucking && this.y === 0) {
        this.isJumping = true;
        this.velocityY = this.jumpForce;
      }
    }
    duck() {
      if (this.y === 0 && !this.isJumping) {
        this.isDucking = true; this.height = 26; this.width = 55;
      }
    }
    standUp() {
      this.isDucking = false; this.height = 48; this.width = 44;
    }
    update() {
      if (this.isJumping) {
        this.y += this.velocityY;
        this.velocityY -= this.gravity;
        if (this.y <= 0) {
          this.y = 0;
          this.isJumping = false;
          this.velocityY = 0;
        }
      }
    }
  }
  const dino = new Dino();`;
  await page.fill('#student-code-editor', step6Code);
  await page.locator('.run-btn:has-text("Kodni Ishga Tushirish")').click();

  // Advance to Step 7: Obstacles & Collision
  await page.locator('#btn-next-step').click();
  const step7Code = `function checkCollision(dinoX, dinoY, dinoW, dinoH, obsX, obsY, obsW, obsH) {
    return (
      dinoX < obsX + obsW &&
      dinoX + dinoW > obsX &&
      dinoY + dinoH > obsY &&
      dinoY < obsY + obsH
    );
  }`;
  await page.fill('#student-code-editor', step7Code);
  await page.locator('.run-btn:has-text("Kodni Ishga Tushirish")').click();
  await page.waitForTimeout(300);

  // Screenshot Step 7: Completed State with Top Full-Code Copy Button
  await page.screenshot({ path: path.join(artDir, 'dino_8_step7_completed.png'), fullPage: false });
  console.log('Saved dino_8_step7_completed.png');

  await browser.close();
  console.log('Verification finished successfully!');
})();
