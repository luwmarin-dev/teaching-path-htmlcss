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

  await t.test('dino-game-darsi/index.html loads with Socratic lock', async () => {
    const dinoPath = 'file:///' + path.join(rootDir, 'dino-game-darsi', 'index.html').replace(/\\/g, '/');
    await page.goto(dinoPath, { waitUntil: 'load' });

    // Header and Progress check
    const title = await page.textContent('h1');
    assert.match(title, /Chrome Dino Game/);

    // Initial state: Step 1 code is locked
    const placeholder = await page.locator('#code-locked-placeholder').isVisible();
    assert.strictEqual(placeholder, true, 'Code should be locked initially');

    // Step 2 button must be disabled initially
    const step2Disabled = await page.locator('#step-nav-2').isDisabled();
    assert.strictEqual(step2Disabled, true, 'Step 2 must be locked before Step 1 is passed');
  });

  await t.test('Answering Socratic quiz unlocks code and Step 2', async () => {
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

    // Verify code unlocked
    const unlockedCode = await page.locator('#raw-unlocked-code').isVisible();
    assert.strictEqual(unlockedCode, true, 'Code must unlock after correct answer');

    // Step 2 must now be enabled
    const step2Disabled = await page.locator('#step-nav-2').isDisabled();
    assert.strictEqual(step2Disabled, false, 'Step 2 must be unlocked');
  });

  await t.test('Live code runner updates virtual console', async () => {
    const runBtn = page.locator('.run-btn:has-text("Kodni Ishga Tushirish")');
    await runBtn.click();
    const consoleText = await page.textContent('#virtual-console');
    assert.match(consoleText, /Kod muvaffaqiyatli ishga tushdi/);
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
