import { test, describe, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import path from 'node:path';

describe('Playwright E2E Integration Suite (100% Offline via file://)', () => {
  let browser;

  before(async () => {
    browser = await chromium.launch({ headless: true });
  });

  after(async () => {
    if (browser) await browser.close();
  });

  test('Hub (index.html) loads cleanly with real-time shift clock and valid track links', async () => {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const errors = [];
    page.on('pageerror', err => errors.push(err.message));

    const hubPath = 'file:///' + path.resolve('index.html').replace(/\\/g, '/');
    await page.goto(hubPath, { waitUntil: 'load' });

    const title = await page.title();
    assert.match(title, /CodeCraft Academy/i);

    const shiftBadge = await page.$('.badge-shift-live');
    assert.ok(shiftBadge, 'Shift badge exists');
    const badgeText = await shiftBadge.textContent();
    assert.match(badgeText, /Smena/i);

    // Verify track cards
    const htmlCard = await page.$('a[href*="html-css"]');
    const jsCard = await page.$('a[href*="javascript"]');
    assert.ok(htmlCard, 'HTML/CSS track card link exists');
    assert.ok(jsCard, 'JavaScript track card link exists');

    assert.equal(errors.length, 0, 'No console/page errors on Hub');
    await page.close();
  });

  test('HTML/CSS Track (html-css/index.html) interactive lab, cheat sheet, and code check', async () => {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const errors = [];
    page.on('pageerror', err => errors.push(err.message));

    const htmlTrackUrl = 'file:///' + path.resolve('html-css/index.html').replace(/\\/g, '/');
    await page.goto(htmlTrackUrl, { waitUntil: 'load' });
    await page.waitForTimeout(400);

    // Verify Dedicated Action Deck
    const labBtn = await page.$('#btn-topic-lab');
    const tagsBtn = await page.$('#btn-tag-list');
    const practiceBtn = await page.$('#btn-start-practice');
    assert.ok(labBtn, 'Topic Lab button exists');
    assert.ok(tagsBtn, 'Tag List button exists');
    assert.ok(practiceBtn, 'Start Practice button exists');

    // 1. Test Visual Lab Modal
    await labBtn.click();
    await page.waitForTimeout(300);
    const labModal = await page.$('.topic-lab-modal-card');
    assert.ok(labModal, 'Visual lab modal opened');

    // Close modal
    await page.click('#btn-close-topic-lab-modal');
    await page.waitForTimeout(200);

    // 2. Test Tag List Modal
    await tagsBtn.click();
    await page.waitForTimeout(300);
    const tagModal = await page.$('.tag-list-modal-card');
    assert.ok(tagModal, 'Tag cheat sheet modal opened');
    await page.click('#btn-close-tag-modal');
    await page.waitForTimeout(200);

    // 3. Test Student Editor and Code Verification
    // Test Dual IDE Mode: Fullscreen, Swapping, and Resizer
    const fsBtn = await page.$('#btn-fullscreen-ide');
    const swapBtn = await page.$('#btn-swap-panes');
    const resizer = await page.$('#pane-resizer');
    assert.ok(fsBtn, 'Fullscreen Dual IDE button exists');
    assert.ok(swapBtn, 'Swap panes button exists');
    assert.ok(resizer, 'Pane resizer divider exists');

    // 1. Click Fullscreen
    await fsBtn.click();
    await page.waitForTimeout(200);
    const isFsActive = await page.evaluate(() => document.querySelector('.workspace-stage')?.classList.contains('fullscreen-ide-active'));
    assert.equal(isFsActive, true, 'Fullscreen IDE mode is active');

    // 2. Click Swap Panes
    await swapBtn.click();
    await page.waitForTimeout(200);
    const isSwapped = await page.evaluate(() => document.querySelector('.editor-stage-split')?.classList.contains('panes-swapped'));
    assert.equal(isSwapped, true, 'Panes are swapped');

    // 3. Exit Fullscreen
    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);
    const isFsExited = await page.evaluate(() => !document.querySelector('.workspace-stage')?.classList.contains('fullscreen-ide-active'));
    assert.equal(isFsExited, true, 'Exited fullscreen cleanly via Escape key');

    // 4. Test Student Editor and Code Verification for Manifesto
    const editor = await page.$('#code-textarea');
    assert.ok(editor, 'Code input editor exists');
    const validManifestoCode = `<article class="manifesto-doc">
      <header><h1>🌐 Kiber Dasturchilar Tarixiy Manifesti</h1><p><abbr title="O'zKTA">O'zKTA</abbr></p></header>
      <p>Dasturlash <strong>haqiqiy sehrgarlik</strong>dir! Hayotni <em>butunlay o'zgartirish</em> qudratiga ega.</p>
      <blockquote><q>Veb — global tafakkur maydonidir.</q></blockquote>
      <p><mark>Hech qachon xato qilishdan qo'rqmang!</mark></p>
      <p><del>Eski afsona</del> <ins>Yangi haqiqat</ins></p>
      <hr>
      <h3>⚡ Formulalar</h3>
      <p>H<sub>2</sub>O va 10<sup>9</sup></p>
      <p><kbd>Ctrl</kbd> + <kbd>S</kbd> va <code>console.log("Salom!");</code></p>
      <p><u>Qat'iyatli bo'ling</u></p>
    </article>`;
    await editor.fill(validManifestoCode);
    
    // Check code
    const checkBtn = await page.$('#btn-verify-mission');
    assert.ok(checkBtn, 'Verify mission button exists');
    await checkBtn.click();
    await page.waitForTimeout(400);

    // Success celebration modal or completed badge should appear
    const successModal = await page.$('.modal-card');
    assert.ok(successModal, 'Success celebration modal appeared');

    assert.equal(errors.length, 0, 'No console/page errors in HTML/CSS track');
    await page.close();
  });

  test('JavaScript Track (javascript/index.html) sandbox execution, virtual console, and mission validation', async () => {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const errors = [];
    page.on('pageerror', err => errors.push(err.message));

    const jsTrackUrl = 'file:///' + path.resolve('javascript/index.html').replace(/\\/g, '/');
    await page.goto(jsTrackUrl, { waitUntil: 'load' });
    await page.waitForTimeout(400);

    // Verify Action Deck
    const labBtn = await page.$('#btn-topic-lab');
    const tagsBtn = await page.$('#btn-tag-list');
    const practiceBtn = await page.$('#btn-start-practice');
    assert.ok(labBtn, 'JS Visual Lab button exists');
    assert.ok(tagsBtn, 'JS Tag List button exists');
    assert.ok(practiceBtn, 'JS Start Practice button exists');

    // 1. Test Visual Lab Modal
    await labBtn.click();
    await page.waitForTimeout(300);
    const jsLabModal = await page.$('.topic-lab-modal-card');
    assert.ok(jsLabModal, 'JS Visual lab modal opened');
    const stageNextBtn = await page.$('#btn-stage-next');
    if (stageNextBtn) {
      await stageNextBtn.click();
      await page.waitForTimeout(200);
    }
    await page.click('#btn-close-topic-lab');
    await page.waitForTimeout(200);

    // 2. Test Live Virtual Console Execution (zero cross-origin errors under file://)
    const editor = await page.$('#code-editor');
    assert.ok(editor, 'JS code editor exists');
    await editor.fill('console.log("Salom, Dunyo!");');

    const runBtn = await page.$('#btn-run-code');
    assert.ok(runBtn, 'Run code button exists');
    await runBtn.click();
    await page.waitForTimeout(500);

    // Virtual console should contain the message
    const consoleBody = await page.$('#js-console-body');
    const consoleText = await consoleBody.textContent();
    assert.match(consoleText, /Salom, Dunyo!/, 'Console logged the message cleanly');

    // 3. Test Mission Checker
    const checkBtn = await page.$('#btn-check-code');
    assert.ok(checkBtn, 'Check code button exists');
    await checkBtn.click();
    await page.waitForTimeout(400);

    const successModal = await page.$('.modal-card');
    assert.ok(successModal, 'Success celebration modal appeared');

    assert.equal(errors.length, 0, 'Zero cross-origin or script errors in JS track');
    await page.close();
  });

  test('Offline Classroom Shift Management & Student Switcher persists locally', async () => {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const errors = [];
    page.on('pageerror', err => errors.push(err.message));

    const jsTrackUrl = 'file:///' + path.resolve('javascript/index.html').replace(/\\/g, '/');
    await page.goto(jsTrackUrl, { waitUntil: 'load' });
    await page.waitForTimeout(400);

    // Open Student Profile Modal
    const studentPill = await page.$('#btn-student-profile');
    assert.ok(studentPill, 'Student profile pill exists in navbar');
    await studentPill.click();
    await page.waitForTimeout(400);

    const portalCard = await page.$('.student-portal-card');
    assert.ok(portalCard, 'Student portal modal card opened');

    // Switch to Register tab using scoped locator
    const regTabBtn = page.locator('#student-portal-modal #tab-btn-register');
    await regTabBtn.click();
    await page.waitForTimeout(300);

    // Fill registration form
    const nameInput = page.locator('#student-portal-modal #reg-name');
    assert.ok(await nameInput.count() > 0, 'Student name input exists');
    await nameInput.fill('Alisher Test');

    const submitReg = page.locator('#student-portal-modal button[type="submit"]');
    assert.ok(await submitReg.count() > 0, 'Submit register button exists');
    await submitReg.click();
    await page.waitForTimeout(400);

    // Verify localStorage has the new profile
    const profilesJson = await page.evaluate(() => localStorage.getItem('codecraft_js_kids_profiles_index_v2'));
    assert.ok(profilesJson, 'Profiles stored in localStorage');
    assert.match(profilesJson, /Alisher Test/, 'New student saved permanently in localStorage');

    assert.equal(errors.length, 0, 'No console/page errors during student management');
    await page.close();
  });
});
