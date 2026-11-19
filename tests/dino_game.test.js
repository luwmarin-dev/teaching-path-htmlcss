import { test } from 'node:test';
import assert from 'node:assert';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

test('Dino Game Socratic Progression & Live Canvas Suite', async (t) => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
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

  await t.test('Writing valid code passes validation, unlocks Step 2 and updates preview', async () => {
    // Enter required code for Step 1
    await page.fill('#student-code-editor', 'class Dino {}\nconst dino = new Dino();');
    const runBtn = page.locator('.run-btn:has-text("Kodni Ishga Tushirish")');
    await runBtn.click();

    // Success feedback
    const successFb = await page.locator('.validation-feedback-card.success').isVisible();
    assert.strictEqual(successFb, true, 'Valid code must pass validation');

    // Step 2 must now be enabled
    const step2Disabled = await page.locator('#step-nav-2').isDisabled();
    assert.strictEqual(step2Disabled, false, 'Step 2 must be unlocked after valid code');

    // Next step button must now be unlocked with 2-Qadam label
    const nextBtnDisabled = await page.locator('#btn-next-step').isDisabled();
    assert.strictEqual(nextBtnDisabled, false, 'Next step button must be enabled after passing Step 1');
    const nextBtnText = await page.textContent('#btn-next-step');
    assert.match(nextBtnText, /2-Qadamga O'tish/);

    // Model code must now be unlocked
    const unlockedCode = await page.locator('#raw-unlocked-code').isVisible();
    assert.strictEqual(unlockedCode, true, 'Model code should be revealed after passing');
  });

  await t.test('Next step button advances to Step 2 and displays "this" simulator', async () => {
    // Click Next Step button to advance to Step 2
    await page.locator('#btn-next-step').click();

    // Verify current step title is Step 2
    const stepTitle = await page.textContent('#top-step-title');
    assert.match(stepTitle, /2-Qadam/);

    // Verify 'this' simulator is visible on Step 2
    const simVisible = await page.locator('#this-simulator-box').isVisible();
    assert.strictEqual(simVisible, true, '"this" simulator box must be visible on Step 2');

    // Verify initial note inside simulator
    const initialNote = await page.textContent('#sim-insight-note');
    assert.match(initialNote, /new Dino\(\)/);

    // Click simulator action buttons 2, 3, 4 and verify dynamic behavior
    const simButtons = page.locator('.sim-action-btn');
    
    // Step 2: pointer attached
    await simButtons.nth(1).click();
    let noteText = await page.textContent('#sim-insight-note');
    assert.match(noteText, /'this' ko'rsatkichi ulandi/);

    // Step 3: properties attached
    await simButtons.nth(2).click();
    noteText = await page.textContent('#sim-insight-note');
    assert.match(noteText, /Parametrlar biriktirildi/);
    const props1Text = await page.textContent('#sim-props-1');
    assert.match(props1Text, /width: 44/);

    // Step 4: why not let explanation
    await simButtons.nth(3).click();
    noteText = await page.textContent('#sim-insight-note');
    assert.match(noteText, /Nega 'let' emas, 'this'/);
  });

  await t.test('Multi-tier hints display conceptual logic and scaffolding on demand', async () => {
    // Open hint drawer
    await page.locator('.hint-toggle-btn').click();
    const isDrawerOpen = await page.locator('#hint-drawer.open').isVisible();
    assert.strictEqual(isDrawerOpen, true, 'Hint drawer must open');

    // Check Tier 1 (Logic) and Tier 2 (Syntax template)
    const hintLogicText = await page.textContent('#hint-logic-content');
    assert.match(hintLogicText, /constructor/);

    // Scaffolding box must NOT be visible initially
    const scaffoldVisibleInit = await page.locator('#scaffolding-box.revealed').isVisible();
    assert.strictEqual(scaffoldVisibleInit, false, 'Scaffolding box must be hidden initially');

    // Click "Qila olmadim" button to reveal scaffolding
    await page.locator('#btn-giveup').click();
    const scaffoldVisibleRevealed = await page.locator('#scaffolding-box.revealed').isVisible();
    assert.strictEqual(scaffoldVisibleRevealed, true, 'Scaffolding box must be revealed on give-up');
    const scaffoldCode = await page.textContent('#scaffolding-code-text');
    assert.match(scaffoldCode, /this\.width = 44/);

    // Click again to hide
    await page.locator('#btn-giveup').click();
    const scaffoldVisibleClosed = await page.locator('#scaffolding-box.revealed').isVisible();
    assert.strictEqual(scaffoldVisibleClosed, false, 'Scaffolding box should collapse when toggled again');
  });

  await t.test('Target Demo Interactive Physics Sliders Lab allows tuning speed, jump and altitude', async () => {
    // Check that sliders are visible in Target Demo
    const slidersDrawer = await page.locator('#target-sliders-drawer').isVisible();
    assert.strictEqual(slidersDrawer, true, 'Physics sliders drawer must be visible');

    // Change speed slider
    await page.fill('#slider-target-speed', '5.2');
    await page.locator('#slider-target-speed').dispatchEvent('input');
    const speedVal = await page.textContent('#val-target-speed');
    assert.match(speedVal, /5\.2/);

    // Change Y elevation slider (Dino floats)
    await page.fill('#slider-target-y', '35');
    await page.locator('#slider-target-y').dispatchEvent('input');
    const yVal = await page.textContent('#val-target-y');
    assert.match(yVal, /35/);

    // Reset sliders
    await page.locator('.target-sliders-drawer button:has-text("Standartga Qaytarish")').click();
    const speedValReset = await page.textContent('#val-target-speed');
    assert.match(speedValReset, /3\.4/);
    const yValReset = await page.textContent('#val-target-y');
    assert.match(yValReset, /0/);
  });

  await t.test('Step 3 is protected by guard until Step 2 code is correctly implemented', async () => {
    // Direct button click on step 3 should remain disabled
    const step3Disabled = await page.locator('#step-nav-3').isDisabled();
    assert.strictEqual(step3Disabled, true, 'Step 3 must remain disabled');

    // Next step button on Step 2 must be locked
    const nextBtnDisabled = await page.locator('#btn-next-step').isDisabled();
    assert.strictEqual(nextBtnDisabled, true, 'Next step button must be locked on Step 2 before passing');

    // Test custom experimental values (e.g., this.y = 20, this.width = 49)
    const experimentalCode = `class Dino {
      constructor() {
        this.width = 49;
        this.height = 48;
        this.x = 60;
        this.y = 20;
        this.isJumping = false;
        this.isDucking = false;
      }
    }`;
    await page.locator('#student-code-editor').fill(experimentalCode);
    await page.locator('#student-code-editor').dispatchEvent('input');

    // Verify HUD telemetry immediately reflects custom values:
    const hitboxHud = await page.textContent('#tel-hitbox');
    assert.match(hitboxHud, /49 x 48/);
    const statusHud = await page.textContent('#tel-status');
    assert.match(statusHud, /Havoda.*20px/);

    // Running code with y = 20 shows helpful diagnostic feedback without passing Step 2
    await page.locator('.run-btn:has-text("Kodni Ishga Tushirish")').click();
    const errorFb = await page.locator('.validation-feedback-card.error').isVisible();
    assert.strictEqual(errorFb, true, 'Custom experimental y must show test diagnostic without unlocking step');
    const fbText = await page.textContent('.validation-feedback-card.error');
    assert.match(fbText, /SINAYOTGANINGIZ AJOYIB/);

    // Now submitting standard valid Step 2 code
    const step2Code = `class Dino {
      constructor() {
        this.width = 44;
        this.height = 48;
        this.x = 60;
        this.y = 0;
        this.isJumping = false;
        this.isDucking = false;
      }
    }`;
    await page.locator('#student-code-editor').fill(step2Code);
    await page.locator('.run-btn:has-text("Kodni Ishga Tushirish")').click();

    // Check validation passed
    const successFb = await page.locator('.validation-feedback-card.success').isVisible();
    assert.strictEqual(successFb, true, 'Step 2 code must pass validation');

    // Step 3 button must now be unlocked
    const step3Unlocked = await page.locator('#step-nav-3').isDisabled();
    assert.strictEqual(step3Unlocked, false, 'Step 3 must now be unlocked');

    // Next step button must now offer advancement to Step 3
    const nextBtnStep2Unlocked = await page.locator('#btn-next-step').isDisabled();
    assert.strictEqual(nextBtnStep2Unlocked, false);
    const nextBtnStep2Text = await page.textContent('#btn-next-step');
    assert.match(nextBtnStep2Text, /3-Qadamga O'tish/);
  });

  await t.test('Live code runner updates virtual console', async () => {
    const consoleText = await page.textContent('#virtual-console');
    assert.match(consoleText, /Kod tasdiqlandi/);
  });

  await t.test('Typing in student editor preserves spacebar and supports tab indentation', async () => {
    // Focus the editor and clear it
    await page.locator('#student-code-editor').fill('');
    await page.locator('#student-code-editor').focus();

    // Type with keyboard to verify spacebar is NOT intercepted by game jump listener
    await page.keyboard.type('class Dino');
    let val = await page.inputValue('#student-code-editor');
    assert.strictEqual(val, 'class Dino', 'Spacebar must be inserted into code editor without being swallowed');

    // Press Tab to verify indentation
    await page.keyboard.press('Tab');
    val = await page.inputValue('#student-code-editor');
    assert.strictEqual(val, 'class Dino  ', 'Tab must insert 2 spaces for indentation');
  });

  await t.test('Target Goal Playable Demo is interactive and responds to controls', async () => {
    // Verify target canvas is visible
    const targetCanvas = await page.locator('#targetGameCanvas').isVisible();
    assert.strictEqual(targetCanvas, true, 'Target demo canvas must be visible');

    // Verify overlay prompt exists
    const promptVisible = await page.locator('#target-overlay-prompt').isVisible();
    assert.strictEqual(promptVisible, true, 'Start prompt must be visible initially');

    // Click play button to start demo
    await page.locator('.target-play-btn').click();
    const promptVisibleAfter = await page.locator('#target-overlay-prompt').isVisible();
    assert.strictEqual(promptVisibleAfter, false, 'Prompt should hide when game starts');

    // Click jump and duck buttons
    await page.locator('.target-buttons-group .jump-btn-action').click();
    await page.locator('.target-buttons-group .duck-btn-action').dispatchEvent('mousedown');
    await page.locator('.target-buttons-group .duck-btn-action').dispatchEvent('mouseup');

    // Toggle collapse/expand
    const toggleBtn = page.locator('#btn-toggle-demo');
    await toggleBtn.click();
    const isVisibleCollapsed = await page.locator('#target-demo-arena').isVisible();
    assert.strictEqual(isVisibleCollapsed, false, 'Arena should be hidden when collapsed');

    await toggleBtn.click();
    const isReopened = await page.locator('#target-demo-arena').isVisible();
    assert.strictEqual(isReopened, true, 'Arena should reopen when clicked again');
  });

  await t.test('Standalone VS Code template modal opens and contains valid HTML', async () => {
    const modalBtn = page.locator('.btn-badge:has-text("VS Code Uchun To\'liq Fayl")');
    await modalBtn.click();
    const modalVisible = await page.locator('#vscode-modal.open').isVisible();
    assert.strictEqual(modalVisible, true);
    const codeBoxText = await page.textContent('#template-code-box');
    assert.match(codeBoxText, /<!DOCTYPE html>/);
    assert.match(codeBoxText, /class Dino/);

    // Close modal so it does not intercept subsequent pointer events
    await page.locator('#vscode-modal button:has-text("✕")').click();
    const modalClosed = await page.locator('#vscode-modal.open').isVisible();
    assert.strictEqual(modalClosed, false, 'Modal should close cleanly');
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

  await t.test('Step 3 renders explicit sub-task criteria checklist with 4 clear tasks', async () => {
    // We already unlocked Step 3 in previous test, let us advance to Step 3:
    await page.locator('#btn-next-step').click();

    // Verify current step is Step 3
    const stepTitle = await page.textContent('#top-step-title');
    assert.match(stepTitle, /3-Qadam/);

    // Verify criteria container is visible
    const criteriaVisible = await page.locator('#task-criteria-container').isVisible();
    assert.strictEqual(criteriaVisible, true);

    // Verify 4 subtasks are listed
    const criteriaItems = page.locator('.task-criteria-item');
    const count = await criteriaItems.count();
    assert.strictEqual(count, 4, 'Step 3 must have 4 distinct subtask criteria');

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

  await t.test('Step 3 gives precise guidance when subtasks are missing and unlocks Step 4 on completion', async () => {
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

    // Complete valid Step 3 code according to the taught criteria
    const completeStep3Code = `class Dino {
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

    await page.locator('#student-code-editor').fill(completeStep3Code);
    await page.locator('.run-btn:has-text("Kodni Ishga Tushirish")').click();

    // Verify success
    const successFb = await page.locator('.validation-feedback-card.success').isVisible();
    assert.strictEqual(successFb, true, 'Valid Step 3 code must pass validation');

    // Step 4 must now be unlocked
    const step4Unlocked = await page.locator('#step-nav-4').isDisabled();
    assert.strictEqual(step4Unlocked, false, 'Step 4 must now be unlocked');

    const nextBtnText = await page.textContent('#btn-next-step');
    assert.match(nextBtnText, /4-Qadamga O'tish/);
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

  await t.test('Top full-code copy button is locked initially and only reveals after all 5 steps are built', async () => {
    // Verify top copy button is NOT visible during early progression
    const topCopyVisibleEarly = await page.locator('#btn-copy-top-completed').isVisible();
    assert.strictEqual(topCopyVisibleEarly, false, 'Top copy button must be hidden before all 5 steps are built');

    // Verify premature copy button is completely removed from boilerplate drawer
    const prematureBtnCount = await page.locator('.mini-action-btn:has-text("Notepad Uchun To\'liq Kodni Nusxalash")').count();
    assert.strictEqual(prematureBtnCount, 0, 'Premature full-code copy button must be removed from drawer');

    // Now advance through Step 4 and Step 5 to complete the full curriculum:
    // Advance to Step 4:
    await page.locator('#btn-next-step').click();
    const step4Title = await page.textContent('#top-step-title');
    assert.match(step4Title, /4-Qadam/);

    // Implement Step 4 valid code
    const step4Code = `class Dino {
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
    await page.locator('#student-code-editor').fill(step4Code);
    await page.locator('.run-btn:has-text("Kodni Ishga Tushirish")').click();

    // Advance to Step 5:
    await page.locator('#btn-next-step').click();
    const step5Title = await page.textContent('#top-step-title');
    assert.match(step5Title, /5-Qadam/);

    // Top copy button should STILL be hidden
    const topCopyBeforeStep5 = await page.locator('#btn-copy-top-completed').isVisible();
    assert.strictEqual(topCopyBeforeStep5, false, 'Top copy button must remain hidden until Step 5 passes');

    // Implement Step 5 valid code
    const step5Code = `function checkCollision(dinoX, dinoY, dinoW, dinoH, obsX, obsY, obsW, obsH) {
      return (
        dinoX < obsX + obsW &&
        dinoX + dinoW > obsX &&
        dinoY + dinoH > obsY &&
        dinoY < obsY + obsH
      );
    }`;
    await page.locator('#student-code-editor').fill(step5Code);
    await page.locator('.run-btn:has-text("Kodni Ishga Tushirish")').click();

    // Step 5 succeeds
    const successFb = await page.locator('.validation-feedback-card.success').isVisible();
    assert.strictEqual(successFb, true, 'Step 5 must pass validation');

    // NOW top copy button MUST BE VISIBLE on top of the code editor!
    const topCopyAfterCompletion = await page.locator('#btn-copy-top-completed').isVisible();
    assert.strictEqual(topCopyAfterCompletion, true, 'Top copy button must become visible after all 5 steps are built');
    const topCopyText = await page.textContent('#btn-copy-top-completed');
    assert.match(topCopyText, /To'liq O'yin Kodini Nusxalash/);
  });

  await t.test('Zero uncaught exceptions and zero asset loading failures', async () => {
    assert.deepStrictEqual(pageErrors, []);
    assert.deepStrictEqual(consoleErrors, []);
  });

  await browser.close();
});
