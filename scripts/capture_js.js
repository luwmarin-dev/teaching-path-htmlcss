import { chromium } from 'playwright';
import path from 'path';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  const jsErrors = [];
  page.on('pageerror', err => jsErrors.push(err.message));
  page.on('console', msg => {
    if (msg.type() === 'error') jsErrors.push(msg.text());
  });

  const jsUrl = 'file:///' + path.resolve('javascript/index.html').replace(/\\/g, '/');
  console.log('Navigating to', jsUrl);
  await page.goto(jsUrl, { waitUntil: 'load' });
  await page.waitForTimeout(600);

  const artifactDir = 'C:/Users/adam/.gemini/antigravity/brain/4ebe4416-8efa-4418-917d-b02799c6ed99';
  await page.screenshot({ path: path.join(artifactDir, 'after_js_lesson.png') });

  // Open student modal
  const studentBtn = await page.$('#btn-student-profile');
  if (studentBtn) {
    console.log('Clicking student profile button...');
    await studentBtn.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(artifactDir, 'after_student_modal.png') });
    console.log('Captured after_student_modal.png');
  } else {
    console.log('Could not find #btn-student-profile');
  }

  console.log('Console/Page errors:', jsErrors);
  await browser.close();
  console.log('Done!');
})();
