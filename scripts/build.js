import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Helper to strip export/import keywords from ES modules so they can live in a single unified script
function cleanModule(code) {
  return code
    .replace(/^import\s+[\s\S]*?from\s+['"][^'"]+['"];?/gm, '') // remove imports
    .replace(/^export\s+(const|let|var|function|class)\s+/gm, '$1 ') // unexport declarations
    .replace(/^export\s*\{\s*[\s\S]*?\};?/gm, '') // remove export { ... } blocks
    .replace(/^export\s+default\s+/gm, ''); // remove default exports
}

const curriculumCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/modules/curriculum.js'), 'utf-8'));
const i18nCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/modules/i18n.js'), 'utf-8'));
const validatorCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/modules/validator.js'), 'utf-8'));
const stateCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/modules/state.js'), 'utf-8'));
const audioCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/modules/audio.js'), 'utf-8'));
const confettiCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/modules/confetti.js'), 'utf-8'));
const speechCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/modules/speech.js'), 'utf-8'));
const sandboxCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/modules/sandbox.js'), 'utf-8'));
const boxModelLabCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/labs/boxModelLab.js'), 'utf-8'));
const flexboxLabCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/labs/flexboxLab.js'), 'utf-8'));
const colorLabCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/labs/colorLab.js'), 'utf-8'));
const appCode = cleanModule(fs.readFileSync(path.join(rootDir, 'src/app.js'), 'utf-8'));

const cssCode = fs.readFileSync(path.join(rootDir, 'public/css/style.css'), 'utf-8');

const bundledJs = `/**
 * CodeCraft Kids - Standalone Offline Bundle
 * Runs 100% offline via file:// protocol directly in any browser with ZERO Node.js or web server.
 */
(function() {
  'use strict';

  // --- Curriculum Module ---
  ${curriculumCode}

  // --- i18n Module ---
  ${i18nCode}

  // --- Validator Module ---
  ${validatorCode}

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

  // --- Box Model Lab Module ---
  ${boxModelLabCode}

  // --- Flexbox Lab Module ---
  ${flexboxLabCode}

  // --- Color Lab Module ---
  ${colorLabCode}

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

// 1. Write public/js/codecraft.js for any script-tag usage
fs.writeFileSync(path.join(rootDir, 'public/js/codecraft.js'), bundledJs, 'utf-8');
console.log('✅ Generated public/js/codecraft.js');

// 2. Generate 100% self-contained index.html from template
const templateHtml = fs.readFileSync(path.join(rootDir, 'index.template.html'), 'utf-8');

let selfContainedHtml = templateHtml.replace(
  '<!-- INLINE_CSS_PLACEHOLDER -->',
  () => `<style>\n/* Inlined Stylesheet */\n${cssCode}\n</style>`
);

selfContainedHtml = selfContainedHtml.replace(
  '<!-- INLINE_JS_PLACEHOLDER -->',
  () => `<script>\n${bundledJs}\n</script>`
);

fs.writeFileSync(path.join(rootDir, 'index.html'), selfContainedHtml, 'utf-8');
console.log('✅ Generated 100% self-contained index.html (runs purely by double-clicking without Node!)');
