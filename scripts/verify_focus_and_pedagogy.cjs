const { chromium } = require('playwright');
const path = require('path');

async function verify() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const fileUrl = 'file:///' + path.resolve(__dirname, '../html-css/index_uz.html').replace(/\\/g, '/');
  console.log('Navigating to:', fileUrl);
  await page.goto(fileUrl);
  await page.waitForTimeout(1000);

  // Click on Theme 4
  console.log('Clicking on Theme 4 with data-lesson-id...');
  await page.click('.lesson-item[data-lesson-id="theme-4-pictures"]');
  await page.waitForTimeout(600);

  // Check mission text
  const missionText = await page.textContent('.mission-spotlight-text');
  console.log('Theme 4 Mission Text:\n', missionText?.trim());

  // Check quick tags
  const quickTags = await page.$$eval('.tag-insert-chip', chips => chips.map(c => c.textContent?.trim()));
  console.log('Theme 4 Quick Tags:', quickTags);

  // Check code focus toggle button
  const toggleBtnText = await page.textContent('#btn-toggle-task-focus');
  console.log('Toggle Button Text:', toggleBtnText?.trim());

  // Check editor content in Task Focus Mode
  const editorCodeTask = await page.$eval('#code-textarea', el => el.value);
  console.log(`Task Focus Mode Line Count: ${editorCodeTask.split('\n').length}`);
  console.log('First 5 lines of editor code:\n', editorCodeTask.split('\n').slice(0, 5).join('\n'));

  // Take screenshot in Task Focus Mode
  const artifactDir = path.resolve('C:/Users/adam/.gemini/antigravity/brain/0054335f-863e-4517-acec-784831aa1ebf');
  await page.screenshot({ path: path.join(artifactDir, 'theme4_task_focus_mode.png') });
  console.log('Captured theme4_task_focus_mode.png');

  // Click Toggle to Full Code
  console.log('Clicking toggle button to switch to Full Code Mode...');
  await page.click('#btn-toggle-task-focus');
  await page.waitForTimeout(400);

  const toggleBtnTextFull = await page.textContent('#btn-toggle-task-focus');
  console.log('Toggle Button Text now:', toggleBtnTextFull?.trim());

  const editorCodeFull = await page.$eval('#code-textarea', el => el.value);
  console.log(`Full Code Mode Line Count: ${editorCodeFull.split('\n').length}`);

  await page.screenshot({ path: path.join(artifactDir, 'theme4_full_code_mode.png') });
  console.log('Captured theme4_full_code_mode.png');

  // Toggle back to Task Focus Mode
  console.log('Toggling back to Task Focus Mode...');
  await page.click('#btn-toggle-task-focus');
  await page.waitForTimeout(400);

  // Enter solution in Task Focus Mode and verify
  console.log('Entering solution in Task Focus Mode...');
  let solutionCode = editorCodeTask
    .replace('/* 1-QADAM: Rover rasmini 16:9 proporsiyada cho\'zilib buzilmasdan ramkaga toza sig\'adigan (cover) qilib moslang */', 'aspect-ratio: 16/9; object-fit: cover;')
    .replace('/* 3-QADAM: Ekipaj avatarlarining to\'rtburchak qirralarini to\'liq yum-yumaloq aylanaga aylantiring */', 'border-radius: 50%;')
    .replace('<!-- 2-Qadam: <figcaption class="gallery-caption">...</figcaption> qo\'shing -->', '<figcaption class="gallery-caption">🚀 Mars Rover MK-IV</figcaption>');

  await page.fill('#code-textarea', solutionCode);
  await page.waitForTimeout(500);

  // Click Check Code
  console.log('Clicking verify button...');
  await page.click('#btn-verify-mission');
  await page.waitForTimeout(600);

  const modalTitle = await page.textContent('.modal-title');
  console.log('Verification Modal Title:', modalTitle);

  await page.screenshot({ path: path.join(artifactDir, 'theme4_verified_modal.png') });
  console.log('Captured theme4_verified_modal.png');

  await browser.close();
  console.log('Verification completed successfully!');
}

verify().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});
