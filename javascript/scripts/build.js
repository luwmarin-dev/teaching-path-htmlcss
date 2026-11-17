import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function cleanModule(code) {
  return code
    .replace(/^import\s+[\s\S]*?from\s+['"][^'"]+['"];?/gm, '') // remove imports
    .replace(/^export\s+(const|let|var|function|class)\s+/gm, '$1 ') // unexport declarations
    .replace(/^export\s*\{\s*[\s\S]*?\};?/gm, '') // remove export { ... } blocks
    .replace(/^export\s+default\s+/gm, ''); // remove default exports
}

const curriculumCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/modules/curriculum.js'), 'utf-8'));
const i18nCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/modules/i18n.js'), 'utf-8'));
const stateCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/modules/state.js'), 'utf-8'));
const audioCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/modules/audio.js'), 'utf-8'));
const confettiCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/modules/confetti.js'), 'utf-8'));
const speechCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/modules/speech.js'), 'utf-8'));
const sandboxCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/modules/sandbox.js'), 'utf-8'));
const classroomCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/modules/classroom.js'), 'utf-8'));
const labsCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/modules/labs.js'), 'utf-8'));
const runnerCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/modules/runner.js'), 'utf-8'));
const appCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/app.js'), 'utf-8'));

const cssCode = fs.readFileSync(path.join(rootDir, 'public/css/style.css'), 'utf-8');

const bundledJs = `/**
 * CodeCraft JS (Kids) - Standalone Offline Bundle
 * Runs 100% offline via file:// protocol directly in any browser with ZERO Node.js or web server.
 */
(function() {
  'use strict';

  // --- Curriculum Module ---
  ${curriculumCode}

  // --- i18n Module ---
  ${i18nCode}

  // --- State Module ---
  ${stateCode}

  // --- Audio Module ---
  ${audioCode}

  // --- Confetti Module ---
  ${confettiCode}

  // --- Speech Module ---
  ${speechCode}

  // --- Sandbox Module ---
  ${sandboxCode}

  // --- Classroom Module ---
  ${classroomCode}

  // --- Labs Module ---
  ${labsCode}

  // --- Runner Module ---
  ${runnerCode}

  // --- Main App Controller ---
  ${appCode}

  // Boot on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
`;

// 1. Write public/js/codecraft.js
const jsDir = path.join(rootDir, 'public/js');
if (!fs.existsSync(jsDir)) fs.mkdirSync(jsDir, { recursive: true });
fs.writeFileSync(path.join(jsDir, 'codecraft.js'), bundledJs, 'utf-8');
console.log('✅ Generated public/js/codecraft.js');

// 2. Generate 100% self-contained HTML files from template
const templateHtml = fs.readFileSync(path.join(rootDir, 'index.template.html'), 'utf-8');

function createStandaloneHtml(defaultLang, customTitle) {
  let html = templateHtml.replace(
    '<!-- INLINE_CSS_PLACEHOLDER -->',
    () => `<style>\n/* Inlined Stylesheet */\n${cssCode}\n</style>`
  );

  let langBootCode = '';
  if (defaultLang === 'uz') {
    langBootCode = `
    // Force Uzbek default for this dedicated edition
    state = setLanguage(state, 'uz');
    saveStateToStorage(state);
    `;
    html = html.replace('<html lang="en">', '<html lang="uz">');
  } else if (defaultLang === 'en') {
    langBootCode = `
    // Force English default for this dedicated edition
    state = setLanguage(state, 'en');
    saveStateToStorage(state);
    `;
    html = html.replace('<html lang="en">', '<html lang="en">');
  }

  if (customTitle) {
    html = html.replace(/<title>.*?<\/title>/, `<title>${customTitle}</title>`);
  }

  const customizedJs = bundledJs.replace(
    'function initApp() {',
    `function initApp() {\n    ${langBootCode}`
  );

  html = html.replace(
    '<!-- INLINE_JS_PLACEHOLDER -->',
    () => `<script>\n${customizedJs}\n</script>`
  );

  return html;
}

// A. Main index.html
fs.writeFileSync(path.join(rootDir, 'index.html'), createStandaloneHtml(null), 'utf-8');
console.log('✅ Generated index.html (Main standalone with working dual switcher)');

// B. Dedicated Uzbek Edition: index_uz.html
fs.writeFileSync(path.join(rootDir, 'index_uz.html'), createStandaloneHtml('uz', "CodeCraft JS ⚡ Bolalar uchun JavaScript (O'zbekcha)"), 'utf-8');
console.log("✅ Generated index_uz.html (Dedicated 100% pure Uzbek version)");

// C. Dedicated English Edition: index_en.html
fs.writeFileSync(path.join(rootDir, 'index_en.html'), createStandaloneHtml('en', "CodeCraft JS ⚡ JavaScript for Kids (English)"), 'utf-8');
console.log("✅ Generated index_en.html (Dedicated 100% pure English version)");
