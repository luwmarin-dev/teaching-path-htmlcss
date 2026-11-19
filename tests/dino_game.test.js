import { test } from 'node:test';
import assert from 'node:assert';
import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

test('Dino Game Socratic Progression & Live Canvas Suite (7 Steps)', async (t) => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1366, height: 950 }
  });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  const pageErrors = [];
  page.on('pageerror', err => pageErrors.push(err.message));

  await t.test('dino-game-darsi/index.html loads with strict initial lock', async () => {
    const dinoPath = 'file:///' + path.join(rootDir, 'dino-game-darsi', 'index.html').replace(/\\/g, '/');
    await page.goto(dinoPath, { waitUntil: 'load' });

    // Header and Progress check
    const title = await page.textContent('h1');
    assert.match(title, /Chrome Dino Game/);

    // Initial state: Step 1 code placeholder is locked
    const placeholder = await page.locator('#code-locked-placeholder').isVisible();
    assert.strictEqual(placeholder, true, 'Code should be locked initially');

    // Step 2 button must be disabled initially
    const step2Disabled = await page.locator('#step-nav-2').isDisabled();
    assert.strictEqual(step2Disabled, true, 'Step 2 must be locked before Step 1 is passed');

    // Progress label check: 0 / 7
    const progText = await page.textContent('#progress-label');
    assert.match(progText, /0 \/ 7/);
  });

  await t.test('Clicking run on empty code fails with validation error', async () => {
    // Click run without writing code
    const runBtn = page.locator('.run-btn:has-text("Kodni Ishga Tushirish")');
    await runBtn.click();

    // Check error feedback
    const errorFb = await page.locator('.validation-feedback-card.error').isVisible();
    assert.strictEqual(errorFb, true, 'Empty code must fail validation');

    // Step 2 must STILL be disabled
    const step2Disabled = await page.locator('#step-nav-2').isDisabled();
    assert.strictEqual(step2Disabled, true, 'Step 2 must remain locked');
  });

  await t.test('Answering Socratic quiz gives feedback without auto-passing code', async () => {
    // Click wrong answer first (Option B)
    const wrongBtn = page.locator('.quiz-opt-btn').nth(1);
    await wrongBtn.click();
    const errorFb = await page.locator('.quiz-feedback.error').isVisible();
    assert.strictEqual(errorFb, true, 'Wrong answer must show error feedback');

    // Click correct answer (Option A)
    const correctBtn = page.locator('.quiz-opt-btn').nth(0);
    await correctBtn.click();
    const successFb = await page.locator('.quiz-feedback.success').isVisible();
    assert.strictEqual(successFb, true, 'Correct answer must show success feedback');
  });

  await t.test('Writing valid HTML code passes validation, unlocks Step 2 and updates preview', async () => {
    // Enter required HTML code for Step 1
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
    const runBtn = page.locator('.run-btn:has-text("Kodni Ishga Tushirish")');
    await runBtn.click();

    // Success feedback
    const successFb = await page.locator('.validation-feedback-card.success').isVisible();
    assert.strictEqual(successFb, true, 'Valid Step 1 code must pass validation');

    // Step 2 must now be enabled
    const step2Disabled = await page.locator('#step-nav-2').isDisabled();
    assert.strictEqual(step2Disabled, false, 'Step 2 must be unlocked after valid HTML code');

    // Next step button must now be unlocked with 2-Qadam label
    const nextBtnDisabled = await page.locator('#btn-next-step').isDisabled();
    assert.strictEqual(nextBtnDisabled, false, 'Next step button must be enabled after passing Step 1');
    const nextBtnText = await page.textContent('#btn-next-step');
    assert.match(nextBtnText, /2-Qadamga O'tish/);

    // Model code must now be unlocked
    const unlockedCode = await page.locator('#raw-unlocked-code').isVisible();
    assert.strictEqual(unlockedCode, true, 'Model code should be revealed after passing');
  });

  await t.test('Next step button advances to Step 2 and validates CSS code', async () => {
    // Advance to Step 2
    await page.locator('#btn-next-step').click();

    // Verify current step is Step 2
    const stepTitle = await page.textContent('#top-step-title');
    assert.match(stepTitle, /2-Qadam/);

    // Verify editor badge indicates CSS
    const langBadge = await page.textContent('.editor-lang-badge');
    assert.match(langBadge, /CSS/);

    // Step 3 button must still be disabled
    const step3Disabled = await page.locator('#step-nav-3').isDisabled();
    assert.strictEqual(step3Disabled, true, 'Step 3 must remain disabled before Step 2 passes');

    // Enter valid CSS code for Step 2
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

    // Verify success feedback
    const successFb = await page.locator('.validation-feedback-card.success').isVisible();
    assert.strictEqual(successFb, true, 'Valid CSS must pass validation');

    // Step 3 must now be unlocked
    const step3Unlocked = await page.locator('#step-nav-3').isDisabled();
    assert.strictEqual(step3Unlocked, false, 'Step 3 must be unlocked after Step 2');

    const nextBtnText = await page.textContent('#btn-next-step');
    assert.match(nextBtnText, /3-Qadamga O'tish/);
  });

  await t.test('Advances to Step 3 and validates Class Dino skeleton', async () => {
    // Advance to Step 3
    await page.locator('#btn-next-step').click();

    // Verify current step is Step 3
    const stepTitle = await page.textContent('#top-step-title');
    assert.match(stepTitle, /3-Qadam/);

    // Verify editor badge indicates JS
    const langBadge = await page.textContent('.editor-lang-badge');
    assert.match(langBadge, /JavaScript/);

    // Enter valid Step 3 code
    const step3Code = `class Dino {}
const dino = new Dino();`;
    await page.fill('#student-code-editor', step3Code);
    await page.locator('.run-btn:has-text("Kodni Ishga Tushirish")').click();

    const successFb = await page.locator('.validation-feedback-card.success').isVisible();
    assert.strictEqual(successFb, true, 'Step 3 class skeleton must pass validation');

    // Step 4 must now be unlocked
    const step4Disabled = await page.locator('#step-nav-4').isDisabled();
    assert.strictEqual(step4Disabled, false, 'Step 4 must be unlocked after Step 3');

    const nextBtnText = await page.textContent('#btn-next-step');
    assert.match(nextBtnText, /4-Qadamga O'tish/);
  });

  await t.test('Advances to Step 4 and displays "this" simulator', async () => {
    // Advance to Step 4
    await page.locator('#btn-next-step').click();

    // Verify current step is Step 4
    const stepTitle = await page.textContent('#top-step-title');
    assert.match(stepTitle, /4-Qadam/);

    // Verify 'this' simulator is visible on Step 4
    const simVisible = await page.locator('#this-simulator-box').isVisible();
    assert.strictEqual(simVisible, true, '"this" simulator box must be visible on Step 4');

    // Verify initial note inside simulator
    const initialNote = await page.textContent('#sim-insight-note');
    assert.match(initialNote, /new Dino\(\)/);

    // Click simulator action buttons 2, 3, 4 and verify dynamic behavior
    await page.locator('.sim-action-btn').nth(1).click();
    const note2 = await page.textContent('#sim-insight-note');
    assert.match(note2, /ko'rsatkichi ulandi/);

    await page.locator('.sim-action-btn').nth(2).click();
    const note3 = await page.textContent('#sim-insight-note');
    assert.match(note3, /Parametrlar biriktirildi/);

    await page.locator('.sim-action-btn').nth(3).click();
    const note4 = await page.textContent('#sim-insight-note');
    assert.match(note4, /Nega 'let' emas/);
  });

  await t.test('Mentor diagnostic catches CSS px unit and provides friendly guidance', async () => {
    // Type code with 48px
    const badPxCode = `class Dino {
      constructor() {
        this.width = 44;
        this.height = 48px;
        this.x = 60;
        this.y = 0;
        this.isJumping = false;
        this.isDucking = false;
      }
    }`;
    await page.locator('#student-code-editor').fill(badPxCode);
    await page.locator('.run-btn:has-text("Kodni Ishga Tushirish")').click();

    const valText = await page.textContent('#validation-feedback-box');
    assert.match(valText, /JavaScript CSS emas/);
    assert.match(valText, /48px/);
    assert.match(valText, /this\.height = 48/);
  });

  await t.test('Valid Step 4 code unlocks Step 5', async () => {
    const step4Code = `class Dino {
      constructor() {
        this.width = 44;
        this.height = 48;
        this.x = 60;
        this.y = 0;
        this.isJumping = false;
        this.isDucking = false;
      }
    }
    const dino = new Dino();`;
    await page.locator('#student-code-editor').fill(step4Code);
    await page.locator('.run-btn:has-text("Kodni Ishga Tushirish")').click();

    const successFb = await page.locator('.validation-feedback-card.success').isVisible();
    assert.strictEqual(successFb, true, 'Step 4 dimensions must pass validation');

    const step5Unlocked = await page.locator('#step-nav-5').isDisabled();
    assert.strictEqual(step5Unlocked, false, 'Step 5 must be unlocked');

    const nextBtnText = await page.textContent('#btn-next-step');
    assert.match(nextBtnText, /5-Qadamga O'tish/);
  });

  await t.test('Step 5 renders explicit sub-task criteria checklist with 4 clear tasks', async () => {
    // Advance to Step 5
    await page.locator('#btn-next-step').click();

    const stepTitle = await page.textContent('#top-step-title');
    assert.match(stepTitle, /5-Qadam/);

    // Verify criteria container is visible
    const criteriaVisible = await page.locator('#task-criteria-container').isVisible();
    assert.strictEqual(criteriaVisible, true);

    // Verify 4 subtasks are listed
    const criteriaItems = page.locator('.task-criteria-item');
    const count = await criteriaItems.count();
    assert.strictEqual(count, 4, 'Step 5 must have 4 distinct subtask criteria');

    // Verify content of subtasks: jump, duck, standUp, eventListener
    const item1 = await criteriaItems.nth(0).textContent();
    assert.match(item1, /jump\(\)/);
    const item2 = await criteriaItems.nth(1).textContent();
    assert.match(item2, /duck\(\)/);
    const item3 = await criteriaItems.nth(2).textContent();
    assert.match(item3, /standUp\(\)/);
    const item4 = await criteriaItems.nth(3).textContent();
    assert.match(item4, /addEventListener/);
  });

  await t.test('Step 5 gives precise guidance when subtasks are missing and unlocks Step 6 on completion', async () => {
    // Partial attempt: only jump() implemented
    const partialCode = `class Dino {
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
    }
    const dino = new Dino();`;
    await page.locator('#student-code-editor').fill(partialCode);
    await page.locator('.run-btn:has-text("Kodni Ishga Tushirish")').click();

    let valText = await page.textContent('#validation-feedback-box');
    assert.match(valText, /duck\(\)/, 'Must specifically guide student that duck() is missing');

    // Complete valid Step 5 code
    const completeStep5Code = `class Dino {
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
          this.isDucking = true;
          this.height = 26;
          this.width = 55;
        }
      }
      standUp() {
        this.isDucking = false;
        this.height = 48;
        this.width = 44;
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

    await page.locator('#student-code-editor').fill(completeStep5Code);
    await page.locator('.run-btn:has-text("Kodni Ishga Tushirish")').click();

    // Verify success
    const successFb = await page.locator('.validation-feedback-card.success').isVisible();
    assert.strictEqual(successFb, true, 'Valid Step 5 code must pass validation');

    // Step 6 must now be unlocked
    const step6Unlocked = await page.locator('#step-nav-6').isDisabled();
    assert.strictEqual(step6Unlocked, false, 'Step 6 must now be unlocked');

    const nextBtnText = await page.textContent('#btn-next-step');
    assert.match(nextBtnText, /6-Qadamga O'tish/);
  });

  await t.test('HTML & CSS boilerplate toggle button reveals foundation and hides on demand', async () => {
    // Check that toggle button is visible in editor toolbar
    const toggleBtn = page.locator('#btn-toggle-boilerplate');
    const isBtnVisible = await toggleBtn.isVisible();
    assert.strictEqual(isBtnVisible, true, 'Boilerplate toggle button must be visible in editor toolbar');

    // Drawer must be initially hidden
    let isDrawerVisible = await page.locator('#boilerplate-drawer').isVisible();
    assert.strictEqual(isDrawerVisible, false, 'Boilerplate drawer must be initially hidden');

    // Click toggle button to open
    await toggleBtn.click();
    isDrawerVisible = await page.locator('#boilerplate-drawer').isVisible();
    assert.strictEqual(isDrawerVisible, true, 'Drawer must open when toggle button is clicked');

    // Check Socratic QA content
    const qaText = await page.textContent('.boilerplate-qa-card');
    assert.match(qaText, /Nega Canvas o'lchami CSS'da emas/);

    // Check code view content
    let codeViewText = await page.textContent('#boilerplate-code-view');
    assert.match(codeViewText, /<!DOCTYPE html>/);
    assert.match(codeViewText, /<canvas id="gameCanvas"/);

    // Switch to Full Standalone Merged tab
    await page.locator('#tab-full-btn').click();
    codeViewText = await page.textContent('#boilerplate-code-view');
    assert.match(codeViewText, /dino/i);

    // Click toggle button again to hide drawer
    await toggleBtn.click();
    isDrawerVisible = await page.locator('#boilerplate-drawer').isVisible();
    assert.strictEqual(isDrawerVisible, false, 'Drawer must hide when toggled again');
  });

  await t.test('HTML, CSS & JS Trinity Box is interactive and educates on character box anatomy', async () => {
    // Trinity box must be visible
    const trinityVisible = await page.locator('#trinity-box').isVisible();
    assert.strictEqual(trinityVisible, true, 'Trinity box must be visible');

    // Click Stand mode
    await page.locator('#btn-trinity-stand').click();
    let dimText = await page.textContent('#inspector-dimension-tag');
    assert.match(dimText, /44px.*48px/);

    // Switch to Duck mode
    await page.locator('#btn-trinity-duck').click();
    dimText = await page.textContent('#inspector-dimension-tag');
    assert.match(dimText, /55px.*26px/);
    const cssCode = await page.textContent('#trinity-code-css');
    assert.match(cssCode, /55px/);
    const jsCode = await page.textContent('#trinity-code-js');
    assert.match(jsCode, /this\.height = 26/);

    // Switch to Jump mode
    await page.locator('#btn-trinity-jump').click();
    dimText = await page.textContent('#inspector-dimension-tag');
    assert.match(dimText, /y = \+50px/);

    // Switch back to Stand mode
    await page.locator('#btn-trinity-stand').click();
    dimText = await page.textContent('#inspector-dimension-tag');
    assert.match(dimText, /44px.*48px/);
  });

  await t.test('Target Demo Interactive Physics Sliders Lab allows tuning speed, jump and altitude', async () => {
    // Change custom speed slider to 4.5
    await page.fill('#slider-target-speed', '4.5');
    await page.locator('#slider-target-speed').dispatchEvent('input');
    const speedVal = await page.textContent('#val-target-speed');
    assert.match(speedVal, /4\.5/);

    // Change altitude baseline slider to 15
    await page.fill('#slider-target-y', '15');
    await page.locator('#slider-target-y').dispatchEvent('input');
    const yVal = await page.textContent('#val-target-y');
    assert.match(yVal, /15/);

    // Click reset button
    await page.locator('.sliders-drawer-header button:has-text("Standartga Qaytarish")').click();
    const speedValReset = await page.textContent('#val-target-speed');
    assert.match(speedValReset, /3\.4/);
    const yValReset = await page.textContent('#val-target-y');
    assert.match(yValReset, /0/);
  });

  await t.test('Standalone VS Code template modal opens and contains valid HTML', async () => {
    await page.locator('button:has-text("VS Code")').click();
    const modalVisible = await page.locator('#vscode-modal.open').isVisible();
    assert.strictEqual(modalVisible, true, 'VS Code modal must open');

    const templateContent = await page.textContent('#template-code-box');
    assert.match(templateContent, /<!DOCTYPE html>/, 'Template must be valid HTML');
    assert.match(templateContent, /class Dino/, 'Template must contain Dino class');

    // Close modal
    await page.locator('#vscode-modal [onclick="closeVsCodeModal()"]').click();
    const modalClosed = await page.locator('#vscode-modal.open').isVisible();
    assert.strictEqual(modalClosed, false, 'Modal should close cleanly');
  });

  await t.test('Completes Step 6 (Physics) and Step 7 (Collision) to unlock full-code copy button', async () => {
    // Verify top copy button is NOT visible during early progression
    const topCopyVisibleEarly = await page.locator('#btn-copy-top-completed').isVisible();
    assert.strictEqual(topCopyVisibleEarly, false, 'Top copy button must be hidden before all 7 steps are built');

    // Advance to Step 6:
    await page.locator('#btn-next-step').click();
    const step6Title = await page.textContent('#top-step-title');
    assert.match(step6Title, /6-Qadam/);

    // Implement Step 6 valid code (Gravity & Physics)
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
    await page.locator('#student-code-editor').fill(step6Code);
    await page.locator('.run-btn:has-text("Kodni Ishga Tushirish")').click();

    // Verify Step 6 passed and Step 7 unlocked
    const step6Pass = await page.locator('.validation-feedback-card.success').isVisible();
    assert.strictEqual(step6Pass, true, 'Step 6 physics must pass validation');

    const step7Unlocked = await page.locator('#step-nav-7').isDisabled();
    assert.strictEqual(step7Unlocked, false, 'Step 7 must now be unlocked');

    // Advance to Step 7:
    await page.locator('#btn-next-step').click();
    const step7Title = await page.textContent('#top-step-title');
    assert.match(step7Title, /7-Qadam/);

    // Top copy button should STILL be hidden before Step 7 passes
    const topCopyBeforeStep7 = await page.locator('#btn-copy-top-completed').isVisible();
    assert.strictEqual(topCopyBeforeStep7, false, 'Top copy button must remain hidden until Step 7 passes');

    // Implement Step 7 valid code (AABB Collision)
    const step7Code = `function checkCollision(dinoX, dinoY, dinoW, dinoH, obsX, obsY, obsW, obsH) {
      return (
        dinoX < obsX + obsW &&
        dinoX + dinoW > obsX &&
        dinoY + dinoH > obsY &&
        dinoY < obsY + obsH
      );
    }`;
    await page.locator('#student-code-editor').fill(step7Code);
    await page.locator('.run-btn:has-text("Kodni Ishga Tushirish")').click();

    // Step 7 succeeds
    const successFb = await page.locator('.validation-feedback-card.success').isVisible();
    assert.strictEqual(successFb, true, 'Step 7 must pass validation');

    // Progress label check: 7 / 7 (100%)
    const progText = await page.textContent('#progress-label');
    assert.match(progText, /7 \/ 7.*100%/);

    // NOW top copy button MUST BE VISIBLE on top of the code editor!
    const topCopyAfterCompletion = await page.locator('#btn-copy-top-completed').isVisible();
    assert.strictEqual(topCopyAfterCompletion, true, 'Top copy button must become visible after all 7 steps are built');
    const topCopyText = await page.textContent('#btn-copy-top-completed');
    assert.match(topCopyText, /To'liq O'yin Kodini Nusxalash/);
  });

  await t.test('Zero uncaught exceptions and zero asset loading failures', async () => {
    assert.deepStrictEqual(pageErrors, []);
    assert.deepStrictEqual(consoleErrors, []);
  });

  await browser.close();
});
