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

    // Model code must now be unlocked
    const unlockedCode = await page.locator('#raw-unlocked-code').isVisible();
    assert.strictEqual(unlockedCode, true, 'Model code should be revealed after passing');
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
