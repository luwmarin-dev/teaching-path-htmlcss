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

  await t.test('Step 3 is protected by guard until Step 2 code is correctly implemented', async () => {
    // Direct button click on step 3 should remain disabled
    const step3Disabled = await page.locator('#step-nav-3').isDisabled();
    assert.strictEqual(step3Disabled, true, 'Step 3 must remain disabled');

    // Next step button on Step 2 must be locked
    const nextBtnDisabled = await page.locator('#btn-next-step').isDisabled();
    assert.strictEqual(nextBtnDisabled, true, 'Next step button must be locked on Step 2 before passing');

    // Submitting valid Step 2 code
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
  });

  await t.test('Zero uncaught exceptions and zero asset loading failures', async () => {
    assert.deepStrictEqual(pageErrors, []);
    assert.deepStrictEqual(consoleErrors, []);
  });

  await browser.close();
});
