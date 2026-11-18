import { renderTypingLabHtml, initTypingInteractive } from '../modules/typingDiagnostic.js';
/**
 * Dedicated Multi-Stage Evolutionary Topic Visual Laboratories
 * Implements the Step-by-Step Pedagogical Lifecycle for all 24 themes:
 * 1. Initial / Empty / Problem state
 * 2. Tag / Attribute introduced (e.g. broken image alt fallback, unstyled container)
 * 3. Applied cause-and-effect (e.g. raw oversized src, visible border, unmoving to moving)
 * 4. Master interactive playground with live sliders and real-time code generation!
 */

import { renderBoxModelLab } from './boxModelLab.js';
import { renderFlexboxLab } from './flexboxLab.js';
import { renderColorLab } from './colorLab.js';
import { renderGridLab } from './gridLab.js';

// Setup one-click copy listener
function setupCopyBtn(container, codeSelector, btnSelector) {
  const btn = container.querySelector(btnSelector);
  const codeEl = container.querySelector(codeSelector);
  btn?.addEventListener('click', () => {
    if (codeEl) {
      navigator.clipboard?.writeText(codeEl.textContent);
      const old = btn.textContent;
      btn.textContent = '✅ Copied!';
      setTimeout(() => { btn.textContent = old; }, 1500);
    }
  });
}

function safeText(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Universal Stepful Lab Controller
 * Renders the multi-stage stepper and wires previous/next and step clicking.
 */
function createStepfulLab(container, def, isUz) {
  const totalSteps = def.steps.length;
  let currentStep = 0;
  let customState = { ...(def.initialState || {}) };

  // Render outer shell once:
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <div class="evolution-slider-panel">
          <div class="slider-meta-row">
            <div class="slider-title-tag">
              <span>🎚️</span>
              <span>${isUz ? "Evolyutsiya Slayderi" : "Evolution Slider"}</span>
            </div>
            <div class="slider-current-stage">
              <span class="stage-num-badge" id="badge-stage-num">1 / ${totalSteps}</span>
              <strong class="stage-name" id="badge-stage-name">${safeText(isUz ? def.steps[0].title.uz : def.steps[0].title.en)}</strong>
            </div>
          </div>

          <div class="slider-track-container">
            <input 
              type="range" 
              id="evolution-range-slider" 
              class="evolution-range-input" 
              min="0" 
              max="${totalSteps - 1}" 
              value="0" 
              step="1"
            />
            <div class="slider-stops-bar" id="slider-stops-bar">
              ${def.steps.map((s, idx) => `
                <div class="slider-stop-point ${idx === 0 ? 'active' : ''}" data-step="${idx}">
                  <div class="stop-dot">${idx + 1}</div>
                  <div class="stop-title" title="${safeText(isUz ? s.title.uz : s.title.en)}">${safeText(isUz ? s.title.uz : s.title.en)}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="topic-lab-status" id="lab-status"></div>

        <div id="step-custom-controls"></div>

        <div class="lab-code-output">
          <div class="code-header">
            <span>${isUz ? 'Jonli Kod:' : 'Live Code:'}</span>
            <button id="btn-copy-lab" class="btn-sm">📋 Copy</button>
          </div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>

      <div class="topic-lab-stage" id="lab-stage"></div>
    </div>
  `;

  const slider = container.querySelector('#evolution-range-slider');
  const badgeNum = container.querySelector('#badge-stage-num');
  const badgeName = container.querySelector('#badge-stage-name');
  const stopsBar = container.querySelector('#slider-stops-bar');
  const statusEl = container.querySelector('#lab-status');
  const controlsMount = container.querySelector('#step-custom-controls');
  const codeEl = container.querySelector('#lab-code');
  const stageEl = container.querySelector('#lab-stage');

  function update() {
    const step = def.steps[currentStep];

    // 1. Update slider & badges
    slider.value = currentStep;
    badgeNum.textContent = `${currentStep + 1} / ${totalSteps}`;
    badgeName.textContent = isUz ? step.title.uz : step.title.en;

    // 2. Update stop dots
    stopsBar.querySelectorAll('.slider-stop-point').forEach((pt, idx) => {
      pt.classList.toggle('active', idx === currentStep);
      pt.classList.toggle('passed', idx < currentStep);
    });

    // 3. Update status explanation
    statusEl.innerHTML = isUz ? step.explanation.uz : step.explanation.en;

    // 4. Update custom controls if any on this step
    controlsMount.innerHTML = '';
    if (step.renderControls) {
      step.renderControls(controlsMount, customState, updateCodeAndStage, isUz);
    }

    // 5. Update code and stage
    updateCodeAndStage();
  }

  function syncControlClasses() {
    if (!controlsMount) return;
    controlsMount.querySelectorAll('.btn-pill, .btn-sm').forEach(btn => {
      // 1. data-* attributes
      if (btn.hasAttribute('data-val')) {
        const val = btn.getAttribute('data-val');
        if (customState.jc !== undefined) btn.classList.toggle('active', customState.jc === val);
        else if (customState.align !== undefined) btn.classList.toggle('active', customState.align === val);
        else if (customState.dir !== undefined) btn.classList.toggle('active', customState.dir === val);
      }
      if (btn.hasAttribute('data-cols')) btn.classList.toggle('active', customState.cols === parseInt(btn.getAttribute('data-cols'), 10));
      if (btn.hasAttribute('data-n')) btn.classList.toggle('active', customState.cols === parseInt(btn.getAttribute('data-n'), 10));
      if (btn.hasAttribute('data-color')) btn.classList.toggle('active', customState.color === btn.getAttribute('data-color'));
      if (btn.hasAttribute('data-font')) btn.classList.toggle('active', customState.font === btn.getAttribute('data-font'));
      if (btn.hasAttribute('data-fx')) btn.classList.toggle('active', customState.effect === btn.getAttribute('data-fx'));
      if (btn.hasAttribute('data-mode')) btn.classList.toggle('active', customState.overflowType === btn.getAttribute('data-mode'));
      if (btn.hasAttribute('data-status')) btn.classList.toggle('active', customState.badgeStatus === btn.getAttribute('data-status'));
      if (btn.hasAttribute('data-type')) btn.classList.toggle('active', customState.alertType === btn.getAttribute('data-type'));
      if (btn.hasAttribute('data-tab')) btn.classList.toggle('active', customState.activeTab === btn.getAttribute('data-tab'));

      // 2. ID-based mappings (Theme 8 Transform, Theme 9 Flexbox, Theme 11 Links, Theme 12 Lists, Theme 23 Transitions, Theme 26 Gradients)
      if (btn.id === 't-d1') btn.classList.toggle('active', customState.target === '1');
      if (btn.id === 't-d2') btn.classList.toggle('active', customState.target === '2');
      if (btn.id === 't-d3') btn.classList.toggle('active', customState.target === '3');
      if (btn.id === 't-da') btn.classList.toggle('active', customState.target === 'all');

      if (btn.id === 'fl-s') btn.classList.toggle('active', customState.jc === 'flex-start');
      if (btn.id === 'fl-c') btn.classList.toggle('active', customState.jc === 'center');
      if (btn.id === 'fl-sb') btn.classList.toggle('active', customState.jc === 'space-between');
      if (btn.id === 'fl-sa') btn.classList.toggle('active', customState.jc === 'space-around');

      if (btn.id === 'l-b') btn.classList.toggle('active', customState.target === '_blank');
      if (btn.id === 'l-s') btn.classList.toggle('active', customState.target === '_self');

      if (btn.id === 'lst-u') btn.classList.toggle('active', customState.type === 'ul');
      if (btn.id === 'lst-o') btn.classList.toggle('active', customState.type === 'ol');

      if (btn.id === 'g-c2') btn.classList.toggle('active', customState.cols === 2);
      if (btn.id === 'g-c3') btn.classList.toggle('active', customState.cols === 3);
      if (btn.id === 'g-c4') btn.classList.toggle('active', customState.cols === 4);

      if (btn.id === 'tr-0') btn.classList.toggle('active', customState.dur === 0);
      if (btn.id === 'tr-3') btn.classList.toggle('active', customState.dur === 3);
      if (btn.id === 'tr-15') btn.classList.toggle('active', customState.dur === 15);

      if (btn.id === 'btn-linear') btn.classList.toggle('active', customState.type === 'linear');
      if (btn.id === 'btn-radial') btn.classList.toggle('active', customState.type === 'radial');

      if (btn.id === 'i-t') btn.classList.toggle('active', customState.type === 'text');
      if (btn.id === 'i-c') btn.classList.toggle('active', customState.type === 'color');
      if (btn.id === 'i-cb') btn.classList.toggle('active', customState.type === 'checkbox');
      if (btn.id === 'i-r') btn.classList.toggle('active', customState.type === 'range');
    });
  }

  function updateCodeAndStage(patch) {
    if (patch && typeof patch === 'object') {
      Object.assign(customState, patch);
    }
    const step = def.steps[currentStep];
    const codeStr = typeof step.code === 'function' ? step.code(customState, isUz) : step.code;
    codeEl.textContent = codeStr;
    step.renderStage(stageEl, customState, isUz);
    syncControlClasses();
  }

  // Slider input listener (scrubbing)
  slider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val !== currentStep) {
      currentStep = val;
      update();
    }
  });

  // Click on stop point
  stopsBar.querySelectorAll('.slider-stop-point').forEach(pt => {
    pt.addEventListener('click', () => {
      const target = parseInt(pt.getAttribute('data-step'), 10);
      if (!isNaN(target) && target !== currentStep) {
        currentStep = target;
        update();
      }
    });
  });

  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// ===================================================================
// 1. Text Tags (b, i, u, s)
// ===================================================================

function renderTypingDiagnosticTopicLab(container, lesson, isUz) {
  container.innerHTML = renderTypingLabHtml('en', isUz ? 'uz' : 'en');
  initTypingInteractive(container, {
    state: { lang: isUz ? 'uz' : 'en', studentName: 'Cadet', shift: '1-Smena' },
    playSound: () => {},
    onComplete: (stats) => {
      alert((isUz ? "Diagnostika muvaffaqiyatli saqlandi! Tezlik: " : "Diagnostic saved! Speed: ") + stats.wpm + " WPM");
    }
  });
}

function renderTagsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { bold: true, italic: false, underline: false, strike: false },
    steps: [
      {
        title: { en: '1. Plain Text', uz: '1. Oddiy Matn' },
        code: 'Salom Kiber Qahramon!',
        explanation: {
          en: 'Step 1: Raw text has no tags. The browser renders it with standard weight and no styling.',
          uz: "1-Qadam: Oddiy matnda hech qanday teg yo'q. Brauzer uni standart oddiy shriftda ko'rsatadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 22px; color: white;">Salom Kiber Qahramon!</div>`;
        }
      },
      {
        title: { en: '2. Bold <b>', uz: '2. Qalin <b>' },
        code: '<b>Salom Kiber Qahramon!</b>',
        explanation: {
          en: 'Step 2: The <b> tag makes the text heavy and bold so important words stand out.',
          uz: "2-Qadam: <b> tegi matnni qalin (bold) qiladi va muhim so'zlarni ajratib ko'rsatadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 22px; font-weight: bold; color: white;">Salom Kiber Qahramon!</div>`;
        }
      },
      {
        title: { en: '3. Italic & Strike', uz: '3. Qiya va Chiziq' },
        code: '<b><i><s>Salom Kiber Qahramon!</s></i></b>',
        explanation: {
          en: 'Step 3: Tags can be nested inside each other! Here <b>, <i> and <s> combine their effects.',
          uz: "3-Qadam: Teglar bir-birining ichiga joylashishi mumkin! <b>, <i> va <s> effektlari birlashdi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 22px; font-weight: bold; font-style: italic; text-decoration: line-through; color: white;">Salom Kiber Qahramon!</div>`;
        }
      },
      {
        title: { en: '4. Interactive Studio', uz: '4. Interaktiv Studiya' },
        code(s) {
          let open = '', close = '';
          if (s.bold) { open += '<b>'; close = '</b>' + close; }
          if (s.italic) { open += '<i>'; close = '</i>' + close; }
          if (s.underline) { open += '<u>'; close = '</u>' + close; }
          if (s.strike) { open += '<s>'; close = '</s>' + close; }
          return `${open}Salom Kiber Qahramon!${close}`;
        },
        explanation: {
          en: 'Step 4: Interactive Master Studio! Toggle the tags below to design your own custom combination.',
          uz: "4-Qadam: Interaktiv Studiya! Tugmalarni bosib, istalgan teglar birikmasini erkin sinab ko'ring."
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group">
              <button class="btn-pill ${s.bold ? 'active' : ''}" id="p-b"><b>&lt;b&gt; Bold</b></button>
              <button class="btn-pill ${s.italic ? 'active' : ''}" id="p-i"><i>&lt;i&gt; Italic</i></button>
              <button class="btn-pill ${s.underline ? 'active' : ''}" id="p-u"><u>&lt;u&gt; Underline</u></button>
              <button class="btn-pill ${s.strike ? 'active' : ''}" id="p-s"><s>&lt;s&gt; Strike</s></button>
            </div>
          `;
          mount.querySelector('#p-b').onclick = (e) => { s.bold = !s.bold; e.target.classList.toggle('active', s.bold); update(); };
          mount.querySelector('#p-i').onclick = (e) => { s.italic = !s.italic; e.target.classList.toggle('active', s.italic); update(); };
          mount.querySelector('#p-u').onclick = (e) => { s.underline = !s.underline; e.target.classList.toggle('active', s.underline); update(); };
          mount.querySelector('#p-s').onclick = (e) => { s.strike = !s.strike; e.target.classList.toggle('active', s.strike); update(); };
        },
        renderStage(stage, s) {
          const decs = [];
          if (s.underline) decs.push('underline');
          if (s.strike) decs.push('line-through');
          stage.innerHTML = `
            <div style="font-size: 22px; font-weight: ${s.bold ? 'bold' : 'normal'}; font-style: ${s.italic ? 'italic' : 'normal'}; text-decoration: ${decs.length ? decs.join(' ') : 'none'}; color: white; padding: 20px; background: #141722; border-radius: 12px; text-align: center;">
              Salom Kiber Qahramon!
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 2. HTML Structure
// ===================================================================
function renderStructureLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { title: 'Mening Saytim', body: 'Salom Dunyo!' },
    steps: [
      {
        title: { en: '1. No Structure', uz: '1. Strukturatsiz' },
        code: 'Salom Dunyo!',
        explanation: {
          en: 'Step 1: Raw text without HTML tags has no document frame or browser tab title.',
          uz: "1-Qadam: Tegi yo'q matnning brauzer sarlavhasi ham, hujjat doirasi ham bo'lmaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="color: #94a3b8; font-family: monospace;">(Untitled Blank Document) Salom Dunyo!</div>`;
        }
      },
      {
        title: { en: '2. <head> & <title>', uz: '2. <head> va <title>' },
        code: '<head>\n  <title>Kiber Sayyoram</title>\n</head>',
        explanation: {
          en: 'Step 2: The <head> holds metadata. <title> sets the name on the browser window tab!',
          uz: "2-Qadam: <head> metama'lumotlarni saqlaydi. <title> brauzer vkladkasi nomini o'rnatadi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div class="mock-browser-window">
              <div class="mock-browser-tab"><span>🌐</span> <strong>Kiber Sayyoram</strong></div>
              <div class="mock-browser-body" style="color: #64748b; font-style: italic;">(Body hali bo'sh / Empty body)</div>
            </div>
          `;
        }
      },
      {
        title: { en: '3. <body> Content', uz: '3. <body> Tarkibi' },
        code: '<html>\n  <head><title>Kiber Sayyoram</title></head>\n  <body>\n    <h1>Salom Dunyo!</h1>\n  </body>\n</html>',
        explanation: {
          en: 'Step 3: Everything visible to users lives inside <body>. Now tab title and page content unite!',
          uz: "3-Qadam: Foydalanuvchi ko'radigan hamma narsa <body> ichida yashaydi. Sahifa to'liq bo'ldi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div class="mock-browser-window">
              <div class="mock-browser-tab"><span>🌐</span> <strong>Kiber Sayyoram</strong></div>
              <div class="mock-browser-body"><h2 style="color: white; margin: 0;">Salom Dunyo!</h2></div>
            </div>
          `;
        }
      },
      {
        title: { en: '4. Interactive Mockup', uz: '4. Interaktiv Brauzer' },
        code(s) {
          return `<!DOCTYPE html>\n<html>\n  <head>\n    <title>${s.title}</title>\n  </head>\n  <body>\n    <h1>${s.body}</h1>\n  </body>\n</html>`;
        },
        explanation: {
          en: 'Step 4: Type below to see your tab title and body canvas update live in the mock browser!',
          uz: "4-Qadam: Quyidagi maydonlarni o'zgartiring va vkladka hamda sahifa qanday jonlanishini ko'ring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <label style="font-size: 11px; color: var(--text-muted);">&lt;title&gt; (Vkladka Nomi):</label>
            <input type="text" id="in-title" value="${s.title}" class="lab-input-text" style="margin-bottom: 8px;" />
            <label style="font-size: 11px; color: var(--text-muted);">&lt;body&gt; (Sahifa Matni):</label>
            <input type="text" id="in-body" value="${s.body}" class="lab-input-text" />
          `;
          mount.querySelector('#in-title').oninput = (e) => { s.title = e.target.value; update(); };
          mount.querySelector('#in-body').oninput = (e) => { s.body = e.target.value; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div class="mock-browser-window">
              <div class="mock-browser-tab"><span>🌐</span> <strong>${s.title || 'Untitled'}</strong></div>
              <div class="mock-browser-body"><h2 style="color: white; margin: 0;">${s.body || '...'}</h2></div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 3. Tables (table, tr, td, th)
// ===================================================================
function renderTablesLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { border: 1, padding: 8 },
    steps: [
      {
        title: { en: '1. Unstructured', uz: '1. Tartibsiz' },
        code: '1st PixelCat 9900 2nd CyberBot 8450',
        explanation: {
          en: 'Step 1: Without a table, rows and columns collapse into a chaotic line of text.',
          uz: "1-Qadam: Jadvallarsiz ma'lumotlar chalkash bitta qatorga aylanib qoladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="color: #94a3b8; font-family: monospace;">1st PixelCat 9900 2nd CyberBot 8450</div>`;
        }
      },
      {
        title: { en: '2. Invisible Grid', uz: '2. Ko\'rinmas Kataklar' },
        code: '<table border="0">\n  <tr><th>Player</th><th>Score</th></tr>\n  <tr><td>PixelCat</td><td>9,900</td></tr>\n</table>',
        explanation: {
          en: 'Step 2: Table rows and data cells organize content, but border="0" leaves grid lines invisible!',
          uz: "2-Qadam: Jadval elementlari saflandi, lekin border='0' bo'lgani uchun chiziqlar ko'rinmaydi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <table style="border-collapse: collapse; color: white;">
              <tr><th style="padding: 4px 12px; color: #38bdf8;">Player</th><th style="padding: 4px 12px; color: #38bdf8;">Score</th></tr>
              <tr><td style="padding: 4px 12px;">PixelCat</td><td style="padding: 4px 12px;">9,900</td></tr>
            </table>
          `;
        }
      },
      {
        title: { en: '3. Visible Border', uz: '3. Chegarali Jadval' },
        code: '<table border="1">\n  <tr><th>Player</th><th>Score</th></tr>\n  <tr><td>PixelCat</td><td>9,900</td></tr>\n</table>',
        explanation: {
          en: 'Step 3: border="1" draws lines around every cell so the table structure becomes crystal clear.',
          uz: "3-Qadam: border='1' barcha kataklarni chiziq bilan o'rab, jadvalni aniq ko'rsatadi."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <table style="border-collapse: collapse; border: 1px solid #5b5fc7; color: white;">
              <tr><th style="border: 1px solid #5b5fc7; padding: 4px 12px; color: #38bdf8;">Player</th><th style="border: 1px solid #5b5fc7; padding: 4px 12px; color: #38bdf8;">Score</th></tr>
              <tr><td style="border: 1px solid #5b5fc7; padding: 4px 12px;">PixelCat</td><td style="border: 1px solid #5b5fc7; padding: 4px 12px;">9,900</td></tr>
            </table>
          `;
        }
      },
      {
        title: { en: '4. Padding & Spacing', uz: '4. Hajm va Bo\'shliq' },
        code(s) {
          return `<table border="${s.border}" cellpadding="${s.padding}">\n  <tr><th>Player</th><th>Score</th></tr>\n  <tr><td>PixelCat</td><td>9,900</td></tr>\n</table>`;
        },
        explanation: {
          en: 'Step 4: Use cellpadding to give text comfortable breathing room inside each box!',
          uz: "4-Qadam: cellpadding yordamida kataklar ichida qulay bo'shliq hosil qiling!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>border:</label><input type="range" id="t-b" min="0" max="6" value="${s.border}"><span class="slider-val" id="t-bv">${s.border}</span></div>
            <div class="slider-row"><label>cellpadding:</label><input type="range" id="t-p" min="2" max="20" value="${s.padding}"><span class="slider-val" id="t-pv">${s.padding}px</span></div>
          `;
          mount.querySelector('#t-b').oninput = (e) => { s.border = e.target.value; mount.querySelector('#t-bv').textContent = s.border; update(); };
          mount.querySelector('#t-p').oninput = (e) => { s.padding = e.target.value; mount.querySelector('#t-pv').textContent = s.padding + 'px'; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <table style="border-collapse: collapse; border: ${s.border}px solid #5b5fc7; color: white;">
              <tr><th style="border: ${s.border}px solid #5b5fc7; padding: ${s.padding}px; color: #38bdf8;">Player</th><th style="border: ${s.border}px solid #5b5fc7; padding: ${s.padding}px; color: #38bdf8;">Score</th></tr>
              <tr><td style="border: ${s.border}px solid #5b5fc7; padding: ${s.padding}px;">PixelCat</td><td style="border: ${s.border}px solid #5b5fc7; padding: ${s.padding}px;">9,900</td></tr>
            </table>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 4. Pictures & Images (Step-by-Step as user explicitly requested!)
// ===================================================================
function renderPicturesLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { width: 180, alt: 'Kiber Explorer Robot' },
    steps: [
      {
        title: { en: '1. Empty State', uz: '1. Bo\'sh Sahifa' },
        code: '<!-- Hali hech qanday rasm tegi yo\'q / No image tag yet -->',
        explanation: {
          en: 'Step 1: There is nothing on stage yet. The browser has not been instructed to render any image.',
          uz: "1-Qadam: Dastlab sahnada hech narsa yo'q. Brauzer hali rasm chizish buyrug'ini olmagan."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="border: 2px dashed rgba(255, 255, 255, 0.2); border-radius: 12px; padding: 40px; color: #64748b; text-align: center;">
              <span>📭</span><br>
              <strong>Sahnada hech qanday rasm yo'q</strong><br>
              <small>Stage is completely empty</small>
            </div>
          `;
        }
      },
      {
        title: { en: '2. Broken + Alt Text', uz: '2. Xato & Alt Matni' },
        code: '<img src="xato_manzil.png" alt="Kiber Explorer Robot">',
        explanation: {
          en: 'Step 2: When the image URL is wrong or missing, the browser displays a broken image icon and displays the alt text! This explains why alt is vital for accessibility and error fallbacks.',
          uz: "2-Qadam: Manzil noto'g'ri bo'lsa yoki rasm yuklanmasa, brauzer xato belgisini va alt matnini chiqaradi! Bu alt matnining xatolik va ko'zi ojizlar uchun nima sababdan o'ta muhimligini ko'rsatadi."
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div class="broken-img-box">
              <span class="broken-img-icon">🖼️❌</span>
              <div>
                <strong style="color: #f87171; display: block; font-size: 11px;">BROKEN IMAGE / XATOLIK</strong>
                <span class="broken-img-text">${s.alt}</span>
              </div>
            </div>
          `;
        }
      },
      {
        title: { en: '3. Raw Oversized src', uz: '3. Cheklovsiz Rasm' },
        code: '<img src="robot.png" alt="Kiber Explorer Robot">',
        explanation: {
          en: 'Step 3: The src URL is connected! But without width/height, the image renders at raw camera resolution, overflowing and breaking the entire page layout!',
          uz: "3-Qadam: Rasm manzili (src) ulandi! Lekin width/height bo'lmagani uchun rasm gigant o'lchamda ochilib, sahifani buzib yubordi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="position: relative; overflow: hidden; width: 100%; height: 260px; border: 2px solid #ef4444; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
              <span class="overflow-badge">⚠️ OVERFLOW / CHIQIB KETDI</span>
              <img src="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>" style="width: 480px; transform: scale(1.4); opacity: 0.9;" />
            </div>
          `;
        }
      },
      {
        title: { en: '4. Fixed Dimension', uz: '4. Aniq O\'lcham' },
        code(s) {
          return `<img src="robot.png" alt="${s.alt}" width="${s.width}">`;
        },
        explanation: {
          en: 'Step 4: Providing width locks the image into an exact, crisp size! Test the slider below to resize responsibly.',
          uz: "4-Qadam: width atributi berilgach, rasm aniq va chiroyli o'lchamga qotirildi! Quyidagi slayder orqali o'lchamni sinab ko'ring."
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>width:</label><input type="range" id="img-w" min="80" max="320" value="${s.width}"><span class="slider-val" id="img-wv">${s.width}px</span></div>
            <label style="font-size: 11px; color: var(--text-muted); margin-top: 6px; display: block;">alt (Yordamchi Matn):</label>
            <input type="text" id="img-a" value="${s.alt}" class="lab-input-text" />
          `;
          mount.querySelector('#img-w').oninput = (e) => { s.width = e.target.value; mount.querySelector('#img-wv').textContent = s.width + 'px'; update(); };
          mount.querySelector('#img-a').oninput = (e) => { s.alt = e.target.value; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="text-align: center;">
              <img src="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>" alt="${s.alt}" style="width: ${s.width}px; transition: width 0.15s ease;" />
              <div style="font-size: 11px; color: #38bdf8; margin-top: 8px;">width="${s.width}" (Fixed & Safe)</div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 5. Basic Divs & 3D Shadow
// ===================================================================
function renderDivsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { border: 4, style: 'solid', shadow: 16 },
    steps: [
      {
        title: { en: '1. Invisible Box', uz: '1. Ko\'rinmas Quti' },
        code: '<div>Cyber Container Box</div>',
        explanation: {
          en: 'Step 1: Without CSS, a div is completely transparent and has no visible borders or depth.',
          uz: "1-Qadam: CSS uslubisiz div mutlaqo ko'rinmas bo'ladi, chegarasi ham yo'q."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="color: #94a3b8; font-size: 14px;">📦 Cyber Container Box (No borders)</div>`;
        }
      },
      {
        title: { en: '2. Background', uz: '2. Orqa Fon' },
        code: 'div {\n  background: #141722;\n  color: white;\n}',
        explanation: {
          en: 'Step 2: Adding background color reveals the rectangular boundaries of the div container.',
          uz: "2-Qadam: Orqa fon rangi qo'shilgach, divning to'rtburchak shakli namoyon bo'ladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="background: #141722; color: white; padding: 20px 24px; border-radius: 8px;">📦 Cyber Container Box</div>`;
        }
      },
      {
        title: { en: '3. Border Outline', uz: '3. Chegara Chizig\'i' },
        code: 'div {\n  background: #141722;\n  border: 4px solid #38bdf8;\n}',
        explanation: {
          en: 'Step 3: A border creates a crisp frame defining the physical perimeter of the element.',
          uz: "3-Qadam: Chegara (border) blok atrofida aniq ramka hosil qilib, uni ajratadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="background: #141722; border: 4px solid #38bdf8; color: white; padding: 20px 24px; border-radius: 8px;">📦 Cyber Container Box</div>`;
        }
      },
      {
        title: { en: '4. 3D Shadow Lift', uz: '4. 3D Soya & Ko\'tarilish' },
        code(s) {
          return `div {\n  background: #141722;\n  border: ${s.border}px ${s.style} #38bdf8;\n  box-shadow: 0 10px ${s.shadow}px rgba(56, 189, 248, 0.4);\n}`;
        },
        explanation: {
          en: 'Step 4: box-shadow lifts the element off the screen in rich 3D space! Adjust sliders below.',
          uz: "4-Qadam: box-shadow blokni ekrandan ko'tarib, 3D hajm bag'ishlaydi! Slayderlarni sinab ko'ring."
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>border:</label><input type="range" id="d-b" min="0" max="12" value="${s.border}"><span class="slider-val" id="d-bv">${s.border}px</span></div>
            <div class="slider-row"><label>box-shadow:</label><input type="range" id="d-sh" min="0" max="40" value="${s.shadow}"><span class="slider-val" id="d-shv">${s.shadow}px</span></div>
          `;
          mount.querySelector('#d-b').oninput = (e) => { s.border = e.target.value; mount.querySelector('#d-bv').textContent = s.border + 'px'; update(); };
          mount.querySelector('#d-sh').oninput = (e) => { s.shadow = e.target.value; mount.querySelector('#d-shv').textContent = s.shadow + 'px'; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="background: #141722; border: ${s.border}px ${s.style} #38bdf8; box-shadow: 0 10px ${s.shadow}px rgba(56, 189, 248, 0.45); color: white; padding: 24px; border-radius: 12px; transition: all 0.15s ease;">
              📦 Cyber Container Box
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 6. Classes
// ===================================================================
function renderClassesLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { c1: true, c2: true, c3: true },
    steps: [
      {
        title: { en: '1. Repeated Styles', uz: '1. Takroriy Kod' },
        code: '<div style="...">1</div>\n<div style="...">2</div>\n<div style="...">3</div>',
        explanation: {
          en: 'Step 1: Without classes, you have to duplicate inline CSS over and over on every element.',
          uz: "1-Qadam: Klasslarsiz har bir elementga bir xil CSS kodini qayta-qayta yozishga to'g'ri keladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: flex; gap: 12px;"><div style="padding: 16px; background: #1e293b; color: white; border-radius: 8px;">Card 1</div><div style="padding: 16px; background: #1e293b; color: white; border-radius: 8px;">Card 2</div><div style="padding: 16px; background: #1e293b; color: white; border-radius: 8px;">Card 3</div></div>`;
        }
      },
      {
        title: { en: '2. Only One Card', uz: '2. Faqat 1-Karta' },
        code: '<div class="hero-glow">1</div>\n<div>2</div>\n<div>3</div>',
        explanation: {
          en: 'Step 2: Giving .hero-glow to just one card leaves the other two unstyled.',
          uz: "2-Qadam: .hero-glow faqat bitta kartaga berilganda, qolgan ikkitasi oddiy qoladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: flex; gap: 12px;"><div style="padding: 16px; background: #1e293b; color: white; border-radius: 8px; border: 2px solid #38bdf8; box-shadow: 0 0 20px rgba(56, 189, 248, 0.5);">Card 1 (Glow)</div><div style="padding: 16px; background: #1e293b; color: white; border-radius: 8px;">Card 2</div><div style="padding: 16px; background: #1e293b; color: white; border-radius: 8px;">Card 3</div></div>`;
        }
      },
      {
        title: { en: '3. Reused Class', uz: '3. Umumiy Klass' },
        code: '<div class="hero-glow">1</div>\n<div class="hero-glow">2</div>\n<div class="hero-glow">3</div>',
        explanation: {
          en: 'Step 3: A single class styles all 3 cards simultaneously! Change the class once to update all.',
          uz: "3-Qadam: Bitta klass bir vaqtning o'zida barcha kartalarni bir xil bezatadi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: flex; gap: 12px;">${[1, 2, 3].map(n => `<div style="padding: 16px; background: #1e293b; color: white; border-radius: 8px; border: 2px solid #38bdf8; box-shadow: 0 0 20px rgba(56, 189, 248, 0.5);">Card ${n}</div>`).join('')}</div>`;
        }
      },
      {
        title: { en: '4. Interactive Toggles', uz: '4. Interaktiv Klasslar' },
        code(s) {
          return `/* .hero-glow ulanishi */\n${s.c1 ? '<div class="hero-glow">Card 1</div>\n' : '<div>Card 1</div>\n'}${s.c2 ? '<div class="hero-glow">Card 2</div>\n' : '<div>Card 2</div>\n'}${s.c3 ? '<div class="hero-glow">Card 3</div>' : '<div>Card 3</div>'}`;
        },
        explanation: {
          en: 'Step 4: Click any card to attach or detach the class and see instant reusability!',
          uz: "4-Qadam: Istalgan kartani bosing va klass ulanishini jonli sinab ko'ring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group">
              <button class="btn-pill ${s.c1 ? 'active' : ''}" id="p-c1">Card 1</button>
              <button class="btn-pill ${s.c2 ? 'active' : ''}" id="p-c2">Card 2</button>
              <button class="btn-pill ${s.c3 ? 'active' : ''}" id="p-c3">Card 3</button>
            </div>
          `;
          mount.querySelector('#p-c1').onclick = () => { s.c1 = !s.c1; update(); };
          mount.querySelector('#p-c2').onclick = () => { s.c2 = !s.c2; update(); };
          mount.querySelector('#p-c3').onclick = () => { s.c3 = !s.c3; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="display: flex; gap: 14px;">
              ${[1, 2, 3].map(n => {
                const active = s['c' + n];
                return `<div style="padding: 18px; background: #1e293b; color: white; border-radius: 10px; cursor: pointer; transition: all 0.2s ease; ${active ? 'border: 2px solid #38bdf8; box-shadow: 0 0 24px rgba(56, 189, 248, 0.6); transform: scale(1.05);' : 'border: 2px solid transparent; opacity: 0.6;'}">Card ${n}</div>`;
              }).join('')}
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 7. Box Model
// ===================================================================
function renderBoxModelTopicLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { margin: 20, border: 6, padding: 24 },
    steps: [
      {
        title: { en: '1. Raw Content', uz: '1. Yassi Matn' },
        code: 'div { margin: 0; border: none; padding: 0; }',
        explanation: {
          en: 'Step 1: Content has 0 padding, 0 border, and 0 margin. Text suffocates against the boundaries.',
          uz: "1-Qadam: Ichki va tashqi bo'shliqlar yo'q. Matn chekkaga yopishib qoladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="background: #3b82f6; color: white; padding: 2px; font-weight: bold;">Content Box</div>`;
        }
      },
      {
        title: { en: '2. Inner Padding', uz: '2. Ichki Padding' },
        code: 'div { padding: 24px; }',
        explanation: {
          en: 'Step 2: Padding adds inner cushion inside the box around the text content.',
          uz: "2-Qadam: Padding quti ichida matn atrofida qulay nafas oladigan masofa ochadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="background: #10b981; padding: 24px;"><div style="background: #3b82f6; color: white; padding: 8px;">Content + Padding</div></div>`;
        }
      },
      {
        title: { en: '3. Border Layer', uz: '3. Chegara Devori' },
        code: 'div { padding: 24px; border: 6px solid #fbbf24; }',
        explanation: {
          en: 'Step 3: Border wraps around the padding, creating the physical perimeter wall.',
          uz: "3-Qadam: Border padding ustidan ramka tortib, tashqi va ichki qavatni ajratadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="border: 6px solid #fbbf24; background: #10b981; padding: 24px;"><div style="background: #3b82f6; color: white; padding: 8px;">Content + Padding + Border</div></div>`;
        }
      },
      {
        title: { en: '4. Outer Margin', uz: '4. Tashqi Masofa' },
        code(s) {
          return `div {\n  margin: ${s.margin}px;\n  border: ${s.border}px solid #fbbf24;\n  padding: ${s.padding}px;\n}`;
        },
        explanation: {
          en: 'Step 4: Margin pushes surrounding elements away! Test the 3 distinct layers below.',
          uz: "4-Qadam: Margin qo'shni bloklarni tashqariga itaradi! 3 ta qavatni slayderda sinab ko'ring."
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>margin:</label><input type="range" id="bm-m" min="0" max="40" value="${s.margin}"><span class="slider-val" id="bm-mv">${s.margin}px</span></div>
            <div class="slider-row"><label>border:</label><input type="range" id="bm-b" min="0" max="15" value="${s.border}"><span class="slider-val" id="bm-bv">${s.border}px</span></div>
            <div class="slider-row"><label>padding:</label><input type="range" id="bm-p" min="4" max="40" value="${s.padding}"><span class="slider-val" id="bm-pv">${s.padding}px</span></div>
          `;
          mount.querySelector('#bm-m').oninput = (e) => { s.margin = e.target.value; mount.querySelector('#bm-mv').textContent = s.margin + 'px'; update(); };
          mount.querySelector('#bm-b').oninput = (e) => { s.border = e.target.value; mount.querySelector('#bm-bv').textContent = s.border + 'px'; update(); };
          mount.querySelector('#bm-p').oninput = (e) => { s.padding = e.target.value; mount.querySelector('#bm-pv').textContent = s.padding + 'px'; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="background: rgba(249, 115, 22, 0.2); border: 2px dashed #f97316; padding: ${s.margin}px; border-radius: 8px;">
              <div style="border: ${s.border}px solid #fbbf24; background: rgba(16, 185, 129, 0.25); padding: ${s.padding}px; border-radius: 6px;">
                <div style="background: #3b82f6; color: white; padding: 12px; border-radius: 4px; text-align: center; font-weight: bold;">
                  CONTENT
                </div>
              </div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 8. Transform (translate, rotate, scale with 3 divs!)
// ===================================================================
function renderTransformLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { target: '1', tx: 30, ty: 0, rot: 20, sc: 1.2 },
    steps: [
      {
        title: { en: '1. 3 Static Divs', uz: '1. 3 Ta Harakatsiz Div' },
        code: '.box-1, .box-2, .box-3 {\n  transform: none;\n}',
        explanation: {
          en: 'Step 1: All 3 divs sit motionless in normal document flow with zero transformation.',
          uz: "1-Qadam: Barcha 3 ta div hech qanday transformsiz o'z joyida tekis turibdi."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="display: flex; gap: 16px;">
              <div style="width: 70px; height: 70px; background: #ef4444; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Div 1</div>
              <div style="width: 70px; height: 70px; background: #a855f7; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Div 2</div>
              <div style="width: 70px; height: 70px; background: #10b981; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Div 3</div>
            </div>
          `;
        }
      },
      {
        title: { en: '2. translateX Shift', uz: '2. Gorizontal Siljish' },
        code: '.box-1 {\n  transform: translateX(45px);\n}',
        explanation: {
          en: 'Step 2: translateX slides Div 1 horizontally across without pushing the other elements out of place!',
          uz: "2-Qadam: translateX Div 1 ni o'ngga suradi, lekin boshqa elementlar joylashuvini buzmaydi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="display: flex; gap: 16px;">
              <div style="width: 70px; height: 70px; background: #ef4444; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; transform: translateX(45px); box-shadow: 0 4px 14px rgba(239, 68, 68, 0.5);">Div 1</div>
              <div style="width: 70px; height: 70px; background: #a855f7; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Div 2</div>
              <div style="width: 70px; height: 70px; background: #10b981; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Div 3</div>
            </div>
          `;
        }
      },
      {
        title: { en: '3. Rotate & Scale', uz: '3. Burish va Masshtab' },
        code: '.box-1 {\n  transform: translateX(45px) rotate(25deg) scale(1.2);\n}',
        explanation: {
          en: 'Step 3: Chaining transforms allows rotating and scaling simultaneously in a single CSS rule!',
          uz: "3-Qadam: Transformlarni birlashtirish orqali bir vaqtning o'zida ham surish, ham burish, ham masshtab beriladi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="display: flex; gap: 16px;">
              <div style="width: 70px; height: 70px; background: #ef4444; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; transform: translateX(45px) rotate(25deg) scale(1.2); box-shadow: 0 6px 18px rgba(239, 68, 68, 0.6); z-index: 2;">Div 1 ⭐</div>
              <div style="width: 70px; height: 70px; background: #a855f7; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Div 2</div>
              <div style="width: 70px; height: 70px; background: #10b981; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Div 3</div>
            </div>
          `;
        }
      },
      {
        title: { en: '4. Master 3-Div Studio', uz: '4. Master Studiya' },
        code(s) {
          const tStr = `translateX(${s.tx}px) translateY(${s.ty}px) rotate(${s.rot}deg) scale(${s.sc})`;
          return s.target === 'all'
            ? `.box-1, .box-2, .box-3 {\n  transform: ${tStr};\n}`
            : `.box-${s.target} {\n  transform: ${tStr};\n}`;
        },
        explanation: {
          en: 'Step 4: Pick which div to move (or all 3) and test translations, rotations, and scales live!',
          uz: "4-Qadam: Qaysi divni siljitishni tanlang (yoki barchasini) va erkin harakatlantiring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group" style="margin-bottom: 8px;">
              <button class="btn-pill ${s.target === '1' ? 'active' : ''}" id="t-d1">🟥 Div 1</button>
              <button class="btn-pill ${s.target === '2' ? 'active' : ''}" id="t-d2">🟪 Div 2</button>
              <button class="btn-pill ${s.target === '3' ? 'active' : ''}" id="t-d3">🟩 Div 3</button>
              <button class="btn-pill ${s.target === 'all' ? 'active' : ''}" id="t-da">⚡ All 3</button>
            </div>
            <div class="slider-row"><label>translateX:</label><input type="range" id="t-tx" min="-80" max="80" value="${s.tx}"><span class="slider-val" id="t-txv">${s.tx}px</span></div>
            <div class="slider-row"><label>translateY:</label><input type="range" id="t-ty" min="-50" max="50" value="${s.ty}"><span class="slider-val" id="t-tyv">${s.ty}px</span></div>
            <div class="slider-row"><label>rotate:</label><input type="range" id="t-r" min="-180" max="180" value="${s.rot}"><span class="slider-val" id="t-rv">${s.rot}°</span></div>
            <div class="slider-row"><label>scale:</label><input type="range" id="t-sc" min="5" max="20" value="${Math.round(s.sc * 10)}"><span class="slider-val" id="t-scv">${s.sc}x</span></div>
            <button class="btn-pill" id="t-reset" style="margin-top: 6px;">🔄 Reset Position</button>
          `;
          mount.querySelector('#t-d1').onclick = () => { s.target = '1'; update({ target: '1' }); };
          mount.querySelector('#t-d2').onclick = () => { s.target = '2'; update({ target: '2' }); };
          mount.querySelector('#t-d3').onclick = () => { s.target = '3'; update({ target: '3' }); };
          mount.querySelector('#t-da').onclick = () => { s.target = 'all'; update({ target: 'all' }); };
          mount.querySelector('#t-tx').oninput = (e) => { s.tx = e.target.value; mount.querySelector('#t-txv').textContent = s.tx + 'px'; update(); };
          mount.querySelector('#t-ty').oninput = (e) => { s.ty = e.target.value; mount.querySelector('#t-tyv').textContent = s.ty + 'px'; update(); };
          mount.querySelector('#t-r').oninput = (e) => { s.rot = e.target.value; mount.querySelector('#t-rv').textContent = s.rot + '°'; update(); };
          mount.querySelector('#t-sc').oninput = (e) => { s.sc = (e.target.value / 10).toFixed(1); mount.querySelector('#t-scv').textContent = s.sc + 'x'; update(); };
          mount.querySelector('#t-reset').onclick = () => { s.tx = 0; s.ty = 0; s.rot = 0; s.sc = 1.0; update(); };
        },
        renderStage(stage, s) {
          const tStr = `translateX(${s.tx}px) translateY(${s.ty}px) rotate(${s.rot}deg) scale(${s.sc})`;
          stage.innerHTML = `
            <div style="display: flex; gap: 16px;">
              <div style="width: 70px; height: 70px; background: #ef4444; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; transition: transform 0.1s ease; transform: ${(s.target === '1' || s.target === 'all') ? tStr : 'none'};">Div 1</div>
              <div style="width: 70px; height: 70px; background: #a855f7; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; transition: transform 0.1s ease; transform: ${(s.target === '2' || s.target === 'all') ? tStr : 'none'};">Div 2</div>
              <div style="width: 70px; height: 70px; background: #10b981; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; transition: transform 0.1s ease; transform: ${(s.target === '3' || s.target === 'all') ? tStr : 'none'};">Div 3</div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 9. Flexbox
// ===================================================================
function renderFlexboxTopicLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { jc: 'center', gap: 16 },
    steps: [
      {
        title: { en: '1. Default Stack', uz: '1. Vertikal Qator' },
        code: 'div { display: block; }',
        explanation: {
          en: 'Step 1: Standard block elements stack vertically on top of each other.',
          uz: "1-Qadam: Standart blok elementlari bir-birining ostiga vertikal teriladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: block;"><div style="padding: 10px; background: #6366f1; color: white; margin-bottom: 6px; border-radius: 6px;">Item 1</div><div style="padding: 10px; background: #a855f7; color: white; border-radius: 6px;">Item 2</div></div>`;
        }
      },
      {
        title: { en: '2. Flex Row', uz: '2. Flex Qatori' },
        code: '.container { display: flex; }',
        explanation: {
          en: 'Step 2: display: flex aligns children side-by-side into a responsive horizontal track.',
          uz: "2-Qadam: display: flex bolalarni yonma-yon bitta qatorga joylashtiradi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: flex; gap: 8px;"><div style="padding: 12px 18px; background: #6366f1; color: white; border-radius: 6px;">Item 1</div><div style="padding: 12px 18px; background: #a855f7; color: white; border-radius: 6px;">Item 2</div></div>`;
        }
      },
      {
        title: { en: '3. Centered & Gap', uz: '3. Markaz va Gap' },
        code: '.container {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n}',
        explanation: {
          en: 'Step 3: justify-content: center centers items, and gap adds breathing space without margin hacks!',
          uz: "3-Qadam: justify-content markazga tekislaydi, gap esa oraliq masofani o'rnatadi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: flex; justify-content: center; gap: 16px; width: 100%;"><div style="padding: 12px 20px; background: #6366f1; color: white; border-radius: 8px;">Item 1</div><div style="padding: 12px 20px; background: #a855f7; color: white; border-radius: 8px;">Item 2</div><div style="padding: 12px 20px; background: #10b981; color: white; border-radius: 8px;">Item 3</div></div>`;
        }
      },
      {
        title: { en: '4. Interactive Flexbox', uz: '4. Interaktiv Flex' },
        code(s) {
          return `.container {\n  display: flex;\n  justify-content: ${s.jc};\n  gap: ${s.gap}px;\n}`;
        },
        explanation: {
          en: 'Step 4: Switch alignment presets below to see dynamic layout power.',
          uz: "4-Qadam: Quyidagi tugmalar orqali joylashuv tartibini sinab ko'ring."
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group" style="margin-bottom: 8px;">
              <button class="btn-pill ${s.jc === 'flex-start' ? 'active' : ''}" id="fl-s">start</button>
              <button class="btn-pill ${s.jc === 'center' ? 'active' : ''}" id="fl-c">center</button>
              <button class="btn-pill ${s.jc === 'space-between' ? 'active' : ''}" id="fl-sb">space-between</button>
              <button class="btn-pill ${s.jc === 'space-around' ? 'active' : ''}" id="fl-sa">space-around</button>
            </div>
            <div class="slider-row"><label>gap:</label><input type="range" id="fl-g" min="4" max="40" value="${s.gap}"><span class="slider-val" id="fl-gv">${s.gap}px</span></div>
          `;
          mount.querySelector('#fl-s').onclick = () => { s.jc = 'flex-start'; update({ jc: 'flex-start' }); };
          mount.querySelector('#fl-c').onclick = () => { s.jc = 'center'; update({ jc: 'center' }); };
          mount.querySelector('#fl-sb').onclick = () => { s.jc = 'space-between'; update({ jc: 'space-between' }); };
          mount.querySelector('#fl-sa').onclick = () => { s.jc = 'space-around'; update({ jc: 'space-around' }); };
          mount.querySelector('#fl-g').oninput = (e) => { s.gap = e.target.value; mount.querySelector('#fl-gv').textContent = s.gap + 'px'; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="display: flex; justify-content: ${s.jc}; gap: ${s.gap}px; width: 100%; border: 2px dashed rgba(255, 255, 255, 0.2); padding: 16px; border-radius: 10px;">
              <div style="padding: 14px 18px; background: #6366f1; color: white; border-radius: 8px;">🚀 1</div>
              <div style="padding: 14px 18px; background: #a855f7; color: white; border-radius: 8px;">⭐ 2</div>
              <div style="padding: 14px 18px; background: #10b981; color: white; border-radius: 8px;">💎 3</div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 10. Buttons & Hover
// ===================================================================
function renderButtonsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { bg: '#6366f1', glow: '#2dd4bf' },
    steps: [
      {
        title: { en: '1. 1995 Gray Button', uz: '1. Eski Kulrang Tugma' },
        code: '<button>Bosing</button>',
        explanation: {
          en: 'Step 1: Default HTML buttons look unstyled, flat, and lack interactivity.',
          uz: "1-Qadam: Standart brauzer tugmasi oddiy va xira ko'rinadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<button style="padding: 4px 10px; font-size: 13px;">Bosing</button>`;
        }
      },
      {
        title: { en: '2. Modern Styled', uz: '2. Zamonaviy Uslub' },
        code: 'button {\n  background: #6366f1;\n  color: white;\n  border-radius: 8px;\n  padding: 12px 24px;\n}',
        explanation: {
          en: 'Step 2: Rich background color, padding, and rounded corners give it modern punch.',
          uz: "2-Qadam: Chiroyli orqa fon, qulay padding va yumaloq burchaklar zamonaviy ko'rk beradi."
        },
        renderStage(stage) {
          stage.innerHTML = `<button style="background: #6366f1; color: white; border-radius: 8px; padding: 12px 24px; border: none; font-weight: bold; cursor: default;">Bosing</button>`;
        }
      },
      {
        title: { en: '3. :hover Glow', uz: '3. :hover Nuri' },
        code: 'button:hover {\n  cursor: pointer;\n  box-shadow: 0 0 20px #2dd4bf;\n  transform: scale(1.05);\n}',
        explanation: {
          en: 'Step 3: :hover and cursor: pointer inform the user that this element is alive and ready to click!',
          uz: "3-Qadam: :hover holati foydalanuvchiga tugma tirik va bosishga tayyor ekanligini bildiradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <button id="btn-glow-demo" style="background: #6366f1; color: white; border-radius: 8px; padding: 12px 24px; border: 2px solid transparent; font-weight: bold; cursor: pointer; transition: all 0.2s ease;">
              ✨ Hover Over Me!
            </button>
          `;
          const btn = stage.querySelector('#btn-glow-demo');
          btn.onmouseenter = () => { btn.style.boxShadow = '0 0 24px #2dd4bf'; btn.style.borderColor = '#2dd4bf'; btn.style.transform = 'scale(1.08)'; };
          btn.onmouseleave = () => { btn.style.boxShadow = 'none'; btn.style.borderColor = 'transparent'; btn.style.transform = 'scale(1)'; };
        }
      },
      {
        title: { en: '4. Interactive Studio', uz: '4. Interaktiv Tugma' },
        code(s) {
          return `button {\n  background: ${s.bg};\n  cursor: pointer;\n}\nbutton:hover {\n  box-shadow: 0 0 24px ${s.glow};\n  transform: scale(1.08);\n}`;
        },
        explanation: {
          en: 'Step 4: Pick your custom palette below and hover over the button to test live physics!',
          uz: "4-Qadam: Ranglarni tanlang va sichqonchani tugma ustiga olib borib sinab ko'ring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>Background:</label><input type="color" id="b-bg" value="${s.bg}" class="color-input"></div>
            <div class="slider-row"><label>Hover Glow:</label><input type="color" id="b-gl" value="${s.glow}" class="color-input"></div>
          `;
          mount.querySelector('#b-bg').oninput = (e) => { s.bg = e.target.value; update(); };
          mount.querySelector('#b-gl').oninput = (e) => { s.glow = e.target.value; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <button id="btn-interactive" style="background: ${s.bg}; color: white; border-radius: 10px; padding: 14px 28px; border: 2px solid transparent; font-size: 16px; font-weight: 800; cursor: pointer; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);">
              🚀 Teleport Launch
            </button>
          `;
          const b = stage.querySelector('#btn-interactive');
          b.onmouseenter = () => { b.style.boxShadow = `0 0 28px ${s.glow}`; b.style.borderColor = s.glow; b.style.transform = 'scale(1.08)'; };
          b.onmouseleave = () => { b.style.boxShadow = 'none'; b.style.borderColor = 'transparent'; b.style.transform = 'scale(1)'; };
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 11. Links (target="_blank" vs target="_self")
// ===================================================================
function renderLinksLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { target: '_blank' },
    steps: [
      {
        title: { en: '1. Plain Text', uz: '1. Oddiy Matn' },
        code: '<span>Teleport to Wikipedia</span>',
        explanation: {
          en: 'Step 1: Text without an <a> tag is not clickable and cannot navigate anywhere.',
          uz: "1-Qadam: <a> tegisiz matn havola bo'la olmaydi va hech qayerga o'tmaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="color: white; font-size: 16px;">Teleport to Wikipedia (Unclickable)</div>`;
        }
      },
      {
        title: { en: '2. href Connected', uz: '2. Havola Ulandi' },
        code: '<a href="https://wikipedia.org">Teleport to Wikipedia</a>',
        explanation: {
          en: 'Step 2: Adding href turns the text into an active portal with underline and pointer cursor.',
          uz: "2-Qadam: href matnni bosiladigan faol havolaga aylantiradi."
        },
        renderStage(stage) {
          stage.innerHTML = `<a href="#" style="color: #38bdf8; font-size: 16px; text-decoration: underline; cursor: pointer;">🌐 Teleport to Wikipedia</a>`;
        }
      },
      {
        title: { en: '3. target="_self"', uz: '3. Xavfli _self' },
        code: '<a href="https://wikipedia.org" target="_self">...</a>',
        explanation: {
          en: 'Step 3: target="_self" replaces your current website, closing your workspace and unsaved progress!',
          uz: "3-Qadam: target='_self' sizning saytingiz o'rniga ochilib, ishingizni yopib yuboradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="border: 2px solid #ef4444; padding: 16px; border-radius: 8px; color: #f87171; text-align: center;">⚠️ target="_self": Hozirgi sahifani yopadi!</div>`;
        }
      },
      {
        title: { en: '4. Safe _blank', uz: '4. Xavfsiz _blank' },
        code(s) {
          return `<a href="https://wikipedia.org" target="${s.target}">\n  🌐 Teleport to Wikipedia\n</a>`;
        },
        explanation: {
          en: 'Step 4: target="_blank" opens a brand new tab, keeping your original site completely safe!',
          uz: "4-Qadam: target='_blank' yangi vkladka ochib, o'quvchi sahifasini xavfsiz saqlaydi!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group">
              <button class="btn-pill ${s.target === '_blank' ? 'active' : ''}" id="l-b">_blank (New Tab 🚀)</button>
              <button class="btn-pill ${s.target === '_self' ? 'active' : ''}" id="l-s">_self (Same Page 🔄)</button>
            </div>
          `;
          mount.querySelector('#l-b').onclick = () => { s.target = '_blank'; update({ target: '_blank' }); };
          mount.querySelector('#l-s').onclick = () => { s.target = '_self'; update({ target: '_self' }); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="text-align: center;">
              <a href="#" style="color: #38bdf8; font-size: 18px; font-weight: bold; text-decoration: underline;">🌐 Teleport to Wikipedia</a>
              <div style="font-size: 11px; margin-top: 8px; color: ${s.target === '_blank' ? '#10b981' : '#f87171'};">
                ${s.target === '_blank' ? '✅ Opens in safe new browser tab' : '⚠️ Overwrites current page!'}
              </div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 12. Lists (ul vs ol)
// ===================================================================
function renderListsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { type: 'ul' },
    steps: [
      {
        title: { en: '1. Unlisted Words', uz: '1. Tartibsiz Matn' },
        code: 'Olma Nok Banan Shaftoli',
        explanation: {
          en: 'Step 1: Without list markup, grocery items bleed together into an unorganized string.',
          uz: "1-Qadam: Ro'yxat tegisiz so'zlar bir qatorga tartibsiz yig'ilib qoladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="color: #94a3b8;">Olma Nok Banan Shaftoli</div>`;
        }
      },
      {
        title: { en: '2. Bullets <ul>', uz: '2. Belgili <ul>' },
        code: '<ul>\n  <li>Olma</li>\n  <li>Nok</li>\n  <li>Banan</li>\n</ul>',
        explanation: {
          en: 'Step 2: <ul> renders bullet dots (•) where exact ranking sequence does not matter.',
          uz: "2-Qadam: <ul> tartib muhim bo'lmagan belgili (bullet) ro'yxat hosil qiladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<ul style="color: white; padding-left: 20px;"><li>Olma</li><li>Nok</li><li>Banan</li></ul>`;
        }
      },
      {
        title: { en: '3. Numbered <ol>', uz: '3. Raqamli <ol>' },
        code: '<ol>\n  <li>1-O\'rin: Olma</li>\n  <li>2-O\'rin: Nok</li>\n  <li>3-O\'rin: Banan</li>\n</ol>',
        explanation: {
          en: 'Step 3: <ol> automatically computes numbers (1, 2, 3...) for ordered rankings and steps.',
          uz: "3-Qadam: <ol> brauzer orqali avtomatik 1, 2, 3 tartib raqamlarini hisoblab beradi."
        },
        renderStage(stage) {
          stage.innerHTML = `<ol style="color: white; padding-left: 20px;"><li>Olma</li><li>Nok</li><li>Banan</li></ol>`;
        }
      },
      {
        title: { en: '4. Interactive Switcher', uz: '4. Interaktiv Ro\'yxat' },
        code(s) {
          return `<${s.type}>\n  <li>Olma</li>\n  <li>Nok</li>\n  <li>Banan</li>\n</${s.type}>`;
        },
        explanation: {
          en: 'Step 4: Toggle between unordered and ordered lists to watch the browser transform the layout.',
          uz: "4-Qadam: <ul> va <ol> o'rtasida almashib, natijani jonli kuzating."
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group">
              <button class="btn-pill ${s.type === 'ul' ? 'active' : ''}" id="lst-u">&lt;ul&gt; (Bullets •)</button>
              <button class="btn-pill ${s.type === 'ol' ? 'active' : ''}" id="lst-o">&lt;ol&gt; (Numbered 1,2,3)</button>
            </div>
          `;
          mount.querySelector('#lst-u').onclick = () => { s.type = 'ul'; update({ type: 'ul' }); };
          mount.querySelector('#lst-o').onclick = () => { s.type = 'ol'; update({ type: 'ol' }); };
        },
        renderStage(stage, s) {
          stage.innerHTML = s.type === 'ul'
            ? `<ul style="color: white; padding-left: 24px; font-size: 16px;"><li>🍏 Olma</li><li>🍐 Nok</li><li>🍌 Banan</li></ul>`
            : `<ol style="color: white; padding-left: 24px; font-size: 16px;"><li>🍏 Olma</li><li>🍐 Nok</li><li>🍌 Banan</li></ol>`;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 13. Colors & Gradients
// ===================================================================
function renderColorsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { c1: '#6366f1', c2: '#ec4899', deg: 135 },
    steps: [
      {
        title: { en: '1. Flat Grey', uz: '1. Yassi Kulrang' },
        code: 'div { background: #334155; }',
        explanation: {
          en: 'Step 1: Solid flat colors lack lighting dynamics and visual depth.',
          uz: "1-Qadam: Yassi bir xil ranglar yorug'lik va jonli jilo bermaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 140px; height: 140px; background: #334155; border-radius: 12px;"></div>`;
        }
      },
      {
        title: { en: '2. Solid Brand Color', uz: '2. Sof Rang' },
        code: 'div { background: #6366f1; }',
        explanation: {
          en: 'Step 2: Vibrant single colors improve personality, but lack gradient motion.',
          uz: "2-Qadam: Sof yorqin rang brendni tanitadi, lekin gradientdek jilolanmaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 140px; height: 140px; background: #6366f1; border-radius: 12px;"></div>`;
        }
      },
      {
        title: { en: '3. 2-Color Gradient', uz: '3. Ikki Rangli Gradient' },
        code: 'div {\n  background: linear-gradient(135deg, #6366f1, #ec4899);\n}',
        explanation: {
          en: 'Step 3: linear-gradient smoothly blends between two vibrant colors across a diagonal vector.',
          uz: "3-Qadam: linear-gradient ikkita rangni diagonal bo'yicha silliq bir-biriga ulaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 140px; height: 140px; background: linear-gradient(135deg, #6366f1, #ec4899); border-radius: 12px; box-shadow: 0 10px 25px rgba(236, 72, 153, 0.4);"></div>`;
        }
      },
      {
        title: { en: '4. Interactive Studio', uz: '4. Gradient Studiyasi' },
        code(s) {
          return `div {\n  background: linear-gradient(${s.deg}deg, ${s.c1}, ${s.c2});\n}`;
        },
        explanation: {
          en: 'Step 4: Pick any two colors and adjust the rotation angle slider below live!',
          uz: "4-Qadam: Ikkita rangni tanlang va burchak slayderini o'zgartiring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>Color 1:</label><input type="color" id="g-c1" value="${s.c1}" class="color-input"></div>
            <div class="slider-row"><label>Color 2:</label><input type="color" id="g-c2" value="${s.c2}" class="color-input"></div>
            <div class="slider-row"><label>Angle:</label><input type="range" id="g-d" min="0" max="360" value="${s.deg}"><span class="slider-val" id="g-dv">${s.deg}°</span></div>
          `;
          mount.querySelector('#g-c1').oninput = (e) => { s.c1 = e.target.value; update(); };
          mount.querySelector('#g-c2').oninput = (e) => { s.c2 = e.target.value; update(); };
          mount.querySelector('#g-d').oninput = (e) => { s.deg = e.target.value; mount.querySelector('#g-dv').textContent = s.deg + '°'; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="width: 160px; height: 160px; background: linear-gradient(${s.deg}deg, ${s.c1}, ${s.c2}); border-radius: 16px; box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5); transition: background 0.1s ease;"></div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 14. Fonts & Glow
// ===================================================================
function renderFontsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { size: 36, glow: 18, color: '#2dd4bf' },
    steps: [
      {
        title: { en: '1. Small Text', uz: '1. Kichik Matn' },
        code: 'h1 { font-size: 14px; text-shadow: none; }',
        explanation: {
          en: 'Step 1: Small unstyled text has no visual authority or headline impact.',
          uz: "1-Qadam: Kichik oddiy matn sarlavha vazifasini bajara olmaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 14px; color: white;">CodeCraft Title</div>`;
        }
      },
      {
        title: { en: '2. Big Headline', uz: '2. Katta Sarlavha' },
        code: 'h1 { font-size: 36px; font-weight: 800; }',
        explanation: {
          en: 'Step 2: font-size: 36px establishes bold hierarchy so visitors instantly notice the title.',
          uz: "2-Qadam: font-size: 36px kuchli iyerarxiya hosil qiladi va e'tiborni tortadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 36px; font-weight: 800; color: white;">CodeCraft Title</div>`;
        }
      },
      {
        title: { en: '3. Neon Aura Glow', uz: '3. Neon Nur' },
        code: 'h1 {\n  font-size: 36px;\n  text-shadow: 0 0 18px #2dd4bf;\n}',
        explanation: {
          en: 'Step 3: text-shadow projects a glowing halo radiating behind every character contour!',
          uz: "3-Qadam: text-shadow har bir harf ortidan charaqlab nur taratuvchi neon aura hosil qiladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 36px; font-weight: 800; color: white; text-shadow: 0 0 18px #2dd4bf;">CodeCraft Title</div>`;
        }
      },
      {
        title: { en: '4. Interactive Fonts', uz: '4. Interaktiv Shrift' },
        code(s) {
          return `h1 {\n  font-size: ${s.size}px;\n  text-shadow: 0 0 ${s.glow}px ${s.color};\n}`;
        },
        explanation: {
          en: 'Step 4: Scale the font-size and fine-tune your glowing neon radius below!',
          uz: "4-Qadam: Shrift o'lchamini va neon nur radiusi hamda rangini sozlang!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>font-size:</label><input type="range" id="f-sz" min="18" max="56" value="${s.size}"><span class="slider-val" id="f-szv">${s.size}px</span></div>
            <div class="slider-row"><label>glow radius:</label><input type="range" id="f-gl" min="0" max="40" value="${s.glow}"><span class="slider-val" id="f-glv">${s.glow}px</span></div>
            <div class="slider-row"><label>neon color:</label><input type="color" id="f-c" value="${s.color}" class="color-input"></div>
          `;
          mount.querySelector('#f-sz').oninput = (e) => { s.size = e.target.value; mount.querySelector('#f-szv').textContent = s.size + 'px'; update(); };
          mount.querySelector('#f-gl').oninput = (e) => { s.glow = e.target.value; mount.querySelector('#f-glv').textContent = s.glow + 'px'; update(); };
          mount.querySelector('#f-c').oninput = (e) => { s.color = e.target.value; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="font-size: ${s.size}px; font-weight: 800; color: white; text-shadow: 0 0 ${s.glow}px ${s.color}; transition: all 0.1s ease; text-align: center;">
              ⚡ CodeCraft ⚡
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 15. Shapes (border-radius)
// ===================================================================
function renderShapesLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { radius: 16 },
    steps: [
      {
        title: { en: '1. Sharp Square', uz: '1. O\'tkir Kvadrat' },
        code: 'div { border-radius: 0px; }',
        explanation: {
          en: 'Step 1: border-radius: 0px produces rigid 90-degree industrial corners.',
          uz: "1-Qadam: border-radius: 0px qat'iy o'tkir 90 gradusli burchaklarni hosil qiladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 130px; height: 130px; background: #6366f1; border-radius: 0px;"></div>`;
        }
      },
      {
        title: { en: '2. Rounded Card', uz: '2. Yumshoq Karta' },
        code: 'div { border-radius: 16px; }',
        explanation: {
          en: 'Step 2: 12px to 20px curves harsh corners into smooth, modern, friendly cards.',
          uz: "2-Qadam: 16px radius burchaklarni zamonaviy mobil ilovalardek yumshatadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 130px; height: 130px; background: #6366f1; border-radius: 16px;"></div>`;
        }
      },
      {
        title: { en: '3. Perfect Circle', uz: '3. Mukammal Doira' },
        code: 'div { border-radius: 50%; }',
        explanation: {
          en: 'Step 3: border-radius: 50% turns any square element into a flawless circular avatar!',
          uz: "3-Qadam: border-radius: 50% istalgan kvadrat blokni mukammal doira avatariga aylantiradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 130px; height: 130px; background: #6366f1; border-radius: 50%;"></div>`;
        }
      },
      {
        title: { en: '4. Interactive Morph', uz: '4. Interaktiv Shakl' },
        code(s) {
          return `div {\n  border-radius: ${s.radius}px;\n}`;
        },
        explanation: {
          en: 'Step 4: Slide continuously from 0px (sharp square) to 70px (circle) below!',
          uz: "4-Qadam: Slayderni surib, o'tkir kvadratdan doiragacha bo'lgan shakl evolyutsiyasini boshqaring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>border-radius:</label><input type="range" id="sh-r" min="0" max="70" value="${s.radius}"><span class="slider-val" id="sh-rv">${s.radius}px</span></div>
          `;
          mount.querySelector('#sh-r').oninput = (e) => { s.radius = e.target.value; mount.querySelector('#sh-rv').textContent = s.radius + 'px'; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="width: 140px; height: 140px; background: linear-gradient(135deg, #6366f1, #a855f7); border-radius: ${s.radius}px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 24px; box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4); transition: border-radius 0.1s ease;">
              💎
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 16. Keyframe Animations
// ===================================================================
function renderAnimationsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { dur: 10, running: true },
    steps: [
      {
        title: { en: '1. Stationary Ball', uz: '1. Harakatsiz Koptok' },
        code: '.ball { animation: none; }',
        explanation: {
          en: 'Step 1: Without an animation property, elements remain completely stationary.',
          uz: "1-Qadam: Animatsiyasiz elementlar sahnada harakatsiz to'xtab turadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 48px;">⚽</div>`;
        }
      },
      {
        title: { en: '2. @keyframes Path', uz: '2. @keyframes Yo\'li' },
        code: '@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-70px); }\n}',
        explanation: {
          en: 'Step 2: @keyframes defines the motion path: jumping 70px upwards at the halfway point.',
          uz: "2-Qadam: @keyframes harakat yo'lini belgilaydi: o'rtada 70px yuqoriga sakraydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="border: 2px dashed rgba(255, 255, 255, 0.2); border-radius: 8px; padding: 20px; color: #38bdf8;">Trajectory: 0px ➔ -70px ➔ 0px</div>`;
        }
      },
      {
        title: { en: '3. infinite Loop', uz: '3. Cheksiz Sikl' },
        code: '.ball {\n  animation: bounce 1s infinite ease-in-out;\n}',
        explanation: {
          en: 'Step 3: Attaching the animation with infinite keeps the ball bouncing continuously in rhythm!',
          uz: "3-Qadam: infinite kaliti animatsiyani cheksiz ravishda bir tekis takrorlaydi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <style>@keyframes b1 { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-60px);} }</style>
            <div style="font-size: 48px; animation: b1 1s infinite ease-in-out;">⚽</div>
          `;
        }
      },
      {
        title: { en: '4. Speed Studio', uz: '4. Tezlik Studiyasi' },
        code(s) {
          const d = (s.dur / 10).toFixed(1);
          return `.ball {\n  animation: bounce ${d}s ${s.running ? 'infinite' : 'paused'} ease-in-out;\n}`;
        },
        explanation: {
          en: 'Step 4: Control animation speed and pause/play the bounce physics live!',
          uz: "4-Qadam: Tezlikni o'zgartiring va animatsiyani to'xtatib/yoqib sinab ko'ring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>duration:</label><input type="range" id="an-d" min="3" max="30" value="${s.dur}"><span class="slider-val" id="an-dv">${(s.dur / 10).toFixed(1)}s</span></div>
            <button class="btn-pill" id="an-p" style="margin-top: 6px;">${s.running ? '⏸️ Pause' : '▶️ Play'}</button>
          `;
          mount.querySelector('#an-d').oninput = (e) => { s.dur = e.target.value; mount.querySelector('#an-dv').textContent = (s.dur / 10).toFixed(1) + 's'; update(); };
          mount.querySelector('#an-p').onclick = () => { s.running = !s.running; update(); };
        },
        renderStage(stage, s) {
          const d = (s.dur / 10).toFixed(1);
          stage.innerHTML = `
            <style>@keyframes b2 { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-70px);} }</style>
            <div style="font-size: 54px; animation: b2 ${d}s infinite ease-in-out; animation-play-state: ${s.running ? 'running' : 'paused'};">
              ⚽
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 17. Form Inputs
// ===================================================================
function renderInputsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { type: 'text' },
    steps: [
      {
        title: { en: '1. Plain Text Input', uz: '1. Oddiy Matn Maydoni' },
        code: '<input type="text" placeholder="Ismingizni yozing">',
        explanation: {
          en: 'Step 1: type="text" accepts letters, but cannot pick colors or toggle settings cleanly.',
          uz: "1-Qadam: type='text' so'zlarni qabul qiladi, lekin rang tanlash yoki tugma uchun noqulay."
        },
        renderStage(stage) {
          stage.innerHTML = `<input type="text" placeholder="Ismingizni yozing..." class="lab-input-text" style="max-width: 240px;" />`;
        }
      },
      {
        title: { en: '2. Color Picker', uz: '2. Rang Tanlagich' },
        code: '<input type="color" value="#6366f1">',
        explanation: {
          en: 'Step 2: type="color" invokes the system\'s native palette picker without complex JavaScript!',
          uz: "2-Qadam: type='color' tizimning o'rnatilgan rang tanlash g'ildiragini avtomatik ochadi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<input type="color" value="#6366f1" class="color-input" />`;
        }
      },
      {
        title: { en: '3. Range & Checkbox', uz: '3. Slayder & Belgilash' },
        code: '<input type="range" min="0" max="100">\n<input type="checkbox" checked>',
        explanation: {
          en: 'Step 3: HTML5 input types provide specialized native touch and click widgets.',
          uz: "3-Qadam: HTML5 input turlari qulay boshqaruv moslamalarini beradi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: flex; gap: 14px; align-items: center;"><input type="range" min="0" max="100" value="70"><label style="color: white; display: flex; align-items: center; gap: 6px;"><input type="checkbox" checked> Qabul qilaman</label></div>`;
        }
      },
      {
        title: { en: '4. Interactive Switcher', uz: '4. Interaktiv Forma' },
        code(s) {
          return `<input type="${s.type}">`;
        },
        explanation: {
          en: 'Step 4: Toggle input types below to experience native browser interface diversity!',
          uz: "4-Qadam: Tugmalarni bosib, turli xil input turlarini bevosita sinab ko'ring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group">
              <button class="btn-pill ${s.type === 'text' ? 'active' : ''}" id="i-t">type="text"</button>
              <button class="btn-pill ${s.type === 'color' ? 'active' : ''}" id="i-c">type="color"</button>
              <button class="btn-pill ${s.type === 'checkbox' ? 'active' : ''}" id="i-cb">type="checkbox"</button>
              <button class="btn-pill ${s.type === 'range' ? 'active' : ''}" id="i-r">type="range"</button>
            </div>
          `;
          mount.querySelector('#i-t').onclick = () => { s.type = 'text'; update({ type: 'text' }); };
          mount.querySelector('#i-c').onclick = () => { s.type = 'color'; update({ type: 'color' }); };
          mount.querySelector('#i-cb').onclick = () => { s.type = 'checkbox'; update({ type: 'checkbox' }); };
          mount.querySelector('#i-r').onclick = () => { s.type = 'range'; update({ type: 'range' }); };
        },
        renderStage(stage, s) {
          let inner = '';
          if (s.type === 'text') inner = '<input type="text" placeholder="Type here..." class="lab-input-text" style="max-width: 240px;">';
          else if (s.type === 'color') inner = '<input type="color" value="#2dd4bf" class="color-input">';
          else if (s.type === 'checkbox') inner = '<label style="color: white; font-size: 16px; display: flex; align-items: center; gap: 8px;"><input type="checkbox" checked style="width: 20px; height: 20px;"> Cyber Explorer</label>';
          else if (s.type === 'range') inner = '<input type="range" min="0" max="100" value="65" style="width: 220px;">';
          stage.innerHTML = `<div style="text-align: center;">${inner}</div>`;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 18. Audio Players
// ===================================================================
function renderAudioLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { controls: true },
    steps: [
      {
        title: { en: '1. Invisible Audio', uz: '1. Ko\'rinmas Audio' },
        code: '<audio src="music.mp3"></audio>',
        explanation: {
          en: 'Step 1: Without the controls attribute, the audio element is completely hidden and invisible!',
          uz: "1-Qadam: controls atributisiz audio elementi sahifada mutlaqo ko'rinmaydi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="border: 2px dashed rgba(255, 255, 255, 0.2); padding: 24px; border-radius: 8px; color: #64748b; text-align: center;">🔇 Audio player is invisible (controls missing)</div>`;
        }
      },
      {
        title: { en: '2. Adding controls', uz: '2. controls Qo\'shildi' },
        code: '<audio src="music.mp3" controls></audio>',
        explanation: {
          en: 'Step 2: Adding controls summons the browser\'s built-in playback widget with play/pause bar!',
          uz: "2-Qadam: controls qo'shilishi bilan brauzerning ijro paneli namoyon bo'ladi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="background: #1e293b; padding: 12px 20px; border-radius: 24px; display: flex; align-items: center; gap: 12px; color: white;"><span>▶️</span><div style="flex:1; height: 4px; background: #64748b; border-radius: 2px;"></div><span>🔊</span></div>`;
        }
      },
      {
        title: { en: '3. Sound Equalizer', uz: '3. Ovoz To\'lqini' },
        code: '<!-- Playing retro synth beats -->',
        explanation: {
          en: 'Step 3: Web Audio synthesizers bring code to life with retro music beats.',
          uz: "3-Qadam: Ovoz to'lqinlari kodni jonlantirib, musiqiy ritm bag'ishlaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: flex; gap: 6px; align-items: flex-end; height: 50px;"><div style="width: 8px; height: 40px; background: #2dd4bf; border-radius: 4px;"></div><div style="width: 8px; height: 25px; background: #38bdf8; border-radius: 4px;"></div><div style="width: 8px; height: 50px; background: #a855f7; border-radius: 4px;"></div><div style="width: 8px; height: 35px; background: #ec4899; border-radius: 4px;"></div></div>`;
        }
      },
      {
        title: { en: '4. Interactive Player', uz: '4. Interaktiv Audio' },
        code(s) {
          return s.controls ? '<audio src="music.mp3" controls></audio>' : '<audio src="music.mp3"></audio>';
        },
        explanation: {
          en: 'Step 4: Toggle the controls flag to see the player appear and disappear!',
          uz: "4-Qadam: controls bayrog'ini yoqib/o'chirib, pleyer paydo bo'lishi va yo'qolishini tekshiring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group">
              <button class="btn-pill ${s.controls ? 'active' : ''}" id="au-t">controls="${s.controls}"</button>
            </div>
          `;
          mount.querySelector('#au-t').onclick = () => { s.controls = !s.controls; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = s.controls
            ? `<div style="background: #1e293b; padding: 12px 20px; border-radius: 24px; display: flex; align-items: center; gap: 12px; color: white; width: 260px;"><span>▶️</span><div style="flex:1; height: 4px; background: #38bdf8; border-radius: 2px;"></div><span>0:42</span></div>`
            : `<div style="color: #f87171; font-size: 13px;">⚠️ controls yo'q: Pleyer yashirindi!</div>`;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 19. Video Players
// ===================================================================
function renderVideoLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { width: 280, controls: true },
    steps: [
      {
        title: { en: '1. No Controls', uz: '1. Boshqaruvsiz' },
        code: '<video src="space.mp4"></video>',
        explanation: {
          en: 'Step 1: Without controls, the user cannot play, pause, or adjust volume.',
          uz: "1-Qadam: controls tegisiz foydalanuvchi videoni yoqa olmaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 220px; height: 130px; background: #0f172a; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #64748b;">(Frozen Video Frame)</div>`;
        }
      },
      {
        title: { en: '2. Controls Added', uz: '2. Boshqaruvli' },
        code: '<video src="space.mp4" controls></video>',
        explanation: {
          en: 'Step 2: controls adds the native playhead, volume, and fullscreen icons.',
          uz: "2-Qadam: controls ijro, ovoz va butun ekran tugmalarini ochadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 220px; height: 130px; background: #0f172a; border-radius: 8px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;"><span style="font-size: 40px;">🎬</span><div style="position: absolute; bottom: 0; inset-inline: 0; height: 24px; background: rgba(0,0,0,0.8); display: flex; align-items: center; padding: 0 8px; gap: 8px; font-size: 10px; color: white;"><span>▶</span><div style="flex:1; height: 2px; background: #38bdf8;"></div><span>⛶</span></div></div>`;
        }
      },
      {
        title: { en: '3. Constrained Size', uz: '3. O\'lcham Berish' },
        code: '<video src="space.mp4" controls width="280"></video>',
        explanation: {
          en: 'Step 3: Setting width prevents the video from exploding across high-res displays.',
          uz: "3-Qadam: width atributi video ekrandan chiqib ketishining oldini oladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 280px; height: 160px; background: #0f172a; border: 2px solid #5b5fc7; border-radius: 10px; display: flex; align-items: center; justify-content: center;"><span style="font-size: 48px;">🚀</span></div>`;
        }
      },
      {
        title: { en: '4. Interactive Video', uz: '4. Interaktiv Video' },
        code(s) {
          return `<video src="space.mp4"${s.controls ? ' controls' : ''} width="${s.width}"></video>`;
        },
        explanation: {
          en: 'Step 4: Resize the video width live to ensure responsive viewport scaling!',
          uz: "4-Qadam: Slayder orqali video kengligini o'zgartirib ko'ring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>width:</label><input type="range" id="vd-w" min="160" max="360" value="${s.width}"><span class="slider-val" id="vd-wv">${s.width}px</span></div>
            <label style="color: white; font-size: 12px; margin-top: 6px; display: flex; align-items: center; gap: 6px;"><input type="checkbox" id="vd-c" ${s.controls ? 'checked' : ''}> controls</label>
          `;
          mount.querySelector('#vd-w').oninput = (e) => { s.width = e.target.value; mount.querySelector('#vd-wv').textContent = s.width + 'px'; update(); };
          mount.querySelector('#vd-c').onchange = (e) => { s.controls = e.target.checked; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="width: ${s.width}px; height: ${Math.round(s.width * 0.58)}px; background: #0f172a; border: 2px solid #5b5fc7; border-radius: 10px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; transition: all 0.15s ease;">
              <span style="font-size: 40px;">🛸</span>
              ${s.controls ? '<div style="position: absolute; bottom: 0; inset-inline: 0; height: 26px; background: rgba(0,0,0,0.85); display: flex; align-items: center; padding: 0 10px; gap: 8px; font-size: 11px; color: white;"><span>▶</span><div style="flex:1; height: 3px; background: #2dd4bf;"></div><span>⛶</span></div>' : ''}
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 20. Secrets & Details (<details>, <summary>)
// ===================================================================
function renderDetailsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { label: '🔍 Maxfiy Javob', secret: 'Kiber xazina paroli: 777-KOD' },
    steps: [
      {
        title: { en: '1. Exposed Spoiler', uz: '1. Ochiq Sir' },
        code: '<p>Maxfiy kod: 777-KOD</p>',
        explanation: {
          en: 'Step 1: Without a spoiler widget, answers are exposed openly to everyone immediately.',
          uz: "1-Qadam: Maxfiylik vidjetisiz javoblar va sirlar darhol hammaga ko'rinib qoladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="background: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; padding: 12px; border-radius: 8px; color: #fca5a5;">⚠️ Ochiq sir: 777-KOD (Spoiler buzildi!)</div>`;
        }
      },
      {
        title: { en: '2. Wrapped in <details>', uz: '2. <details> Pardasi' },
        code: '<details>\n  <p>Maxfiy kod: 777-KOD</p>\n</details>',
        explanation: {
          en: 'Step 2: <details> collapses the secret behind a native clickable arrow disclosure triangle.',
          uz: "2-Qadam: <details> maxfiy javobni bosiladigan uchburchak parda ortiga yashiradi."
        },
        renderStage(stage) {
          stage.innerHTML = `<details style="color: white; background: #1e293b; padding: 12px; border-radius: 8px;"><summary style="cursor: pointer;">Details</summary><p style="margin: 8px 0 0; color: #38bdf8;">Maxfiy kod: 777-KOD</p></details>`;
        }
      },
      {
        title: { en: '3. Custom <summary>', uz: '3. Aniq <summary>' },
        code: '<details>\n  <summary>🔍 Maxfiy Javobni Ko\'rish</summary>\n  <p>777-KOD</p>\n</details>',
        explanation: {
          en: 'Step 3: <summary> replaces the boring generic label with your own enticing trigger prompt!',
          uz: "3-Qadam: <summary> zerikarli nom o'rniga o'zingiz xohlagan qiziqarli yozuvni qo'yadi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<details style="color: white; background: #1e293b; padding: 12px; border-radius: 8px;"><summary style="cursor: pointer; font-weight: bold; color: #fbbf24;">🔍 Maxfiy Javobni Ko'rish</summary><p style="margin: 8px 0 0; color: #2dd4bf;">777-KOD</p></details>`;
        }
      },
      {
        title: { en: '4. Interactive Accordion', uz: '4. Interaktiv Sir' },
        code(s) {
          return `<details>\n  <summary>${s.label}</summary>\n  <p>${s.secret}</p>\n</details>`;
        },
        explanation: {
          en: 'Step 4: Type your own question and hidden answer below, then click to toggle the accordion!',
          uz: "4-Qadam: Savol va yashirin javobni yozing va qutini bosib ochib-yoping!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <label style="font-size: 11px; color: var(--text-muted);">&lt;summary&gt; Tugmasi:</label>
            <input type="text" id="dt-l" value="${s.label}" class="lab-input-text" style="margin-bottom: 6px;">
            <label style="font-size: 11px; color: var(--text-muted);">Yashirin Matn:</label>
            <input type="text" id="dt-s" value="${s.secret}" class="lab-input-text">
          `;
          mount.querySelector('#dt-l').oninput = (e) => { s.label = e.target.value; update(); };
          mount.querySelector('#dt-s').oninput = (e) => { s.secret = e.target.value; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <details style="color: white; background: #141722; border: 1px solid #5b5fc7; padding: 16px; border-radius: 10px; width: 280px;" open>
              <summary style="cursor: pointer; font-weight: bold; color: #fbbf24;">${s.label || 'Details'}</summary>
              <div style="margin-top: 10px; padding: 10px; background: rgba(45, 212, 191, 0.15); border-radius: 6px; color: #2dd4bf;">${s.secret || 'Secret'}</div>
            </details>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 21. CSS Grid (2D Matrix & Gap)
// ===================================================================
function renderGridTopicLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { cols: 3, gap: 12 },
    steps: [
      {
        title: { en: '1. 1-Column Stack', uz: '1. 1 Ustunli Qator' },
        code: '.inventory { display: block; }',
        explanation: {
          en: 'Step 1: Without CSS Grid, inventory items collapse into one clumsy vertical column.',
          uz: "1-Qadam: Gridsiz o'yin inventari noqulay bitta vertikal ustunga aylanadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: flex; flex-direction: column; gap: 4px;"><div style="padding: 6px 14px; background: #1e293b; color: white;">Slot 1</div><div style="padding: 6px 14px; background: #1e293b; color: white;">Slot 2</div></div>`;
        }
      },
      {
        title: { en: '2. 3x2 Grid Matrix', uz: '2. 3x2 Grid Matritsa' },
        code: '.inventory {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}',
        explanation: {
          en: 'Step 2: display: grid snaps elements into clean 2-dimensional rows and columns!',
          uz: "2-Qadam: display: grid elementlarni to'liq 2 o'lchamli matritsaga terib beradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; width: 180px;"><div style="padding: 12px; background: #6366f1; color: white; text-align: center;">🗡️</div><div style="padding: 12px; background: #6366f1; color: white; text-align: center;">🛡️</div><div style="padding: 12px; background: #6366f1; color: white; text-align: center;">🧪</div></div>`;
        }
      },
      {
        title: { en: '3. Adding gap', uz: '3. gap Oralig\'i' },
        code: '.inventory {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}',
        explanation: {
          en: 'Step 3: gap separates every slot with clean breathing space without colliding.',
          uz: "3-Qadam: gap har bir katak orasiga bir xil chiroyli masofa qo'yadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; width: 200px;"><div style="padding: 14px; background: #6366f1; color: white; text-align: center; border-radius: 8px;">🗡️</div><div style="padding: 14px; background: #6366f1; color: white; text-align: center; border-radius: 8px;">🛡️</div><div style="padding: 14px; background: #6366f1; color: white; text-align: center; border-radius: 8px;">🧪</div></div>`;
        }
      },
      {
        title: { en: '4. Interactive Grid', uz: '4. Interaktiv Grid' },
        code(s) {
          return `.inventory {\n  display: grid;\n  grid-template-columns: repeat(${s.cols}, 1fr);\n  gap: ${s.gap}px;\n}`;
        },
        explanation: {
          en: 'Step 4: Switch column counts (1 to 4) and adjust gap slider live!',
          uz: "4-Qadam: Ustunlar soni (1 dan 4 gacha) va oraliq masofani sinab ko'ring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group" style="margin-bottom: 8px;">
              <button class="btn-pill ${s.cols === 2 ? 'active' : ''}" id="g-c2">2 Cols</button>
              <button class="btn-pill ${s.cols === 3 ? 'active' : ''}" id="g-c3">3 Cols</button>
              <button class="btn-pill ${s.cols === 4 ? 'active' : ''}" id="g-c4">4 Cols</button>
            </div>
            <div class="slider-row"><label>gap:</label><input type="range" id="gr-g" min="4" max="24" value="${s.gap}"><span class="slider-val" id="gr-gv">${s.gap}px</span></div>
          `;
          mount.querySelector('#g-c2').onclick = () => { s.cols = 2; update({ cols: 2 }); };
          mount.querySelector('#g-c3').onclick = () => { s.cols = 3; update({ cols: 3 }); };
          mount.querySelector('#g-c4').onclick = () => { s.cols = 4; update({ cols: 4 }); };
          mount.querySelector('#gr-g').oninput = (e) => { s.gap = e.target.value; mount.querySelector('#gr-gv').textContent = s.gap + 'px'; update(); };
        },
        renderStage(stage, s) {
          const items = ['🗡️', '🛡️', '🧪', '💎', '🏹', '📜'];
          stage.innerHTML = `
            <div style="display: grid; grid-template-columns: repeat(${s.cols}, 1fr); gap: ${s.gap}px; width: 100%; max-width: 280px;">
              ${items.map(it => `<div style="padding: 16px; background: #141722; border: 2px solid #5b5fc7; border-radius: 10px; font-size: 24px; text-align: center;">${it}</div>`).join('')}
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 22. Positioning (relative vs absolute)
// ===================================================================
function renderPositionLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { top: 12, right: 12 },
    steps: [
      {
        title: { en: '1. position: static', uz: '1. Oqimda Qadalgan' },
        code: '.badge { position: static; top: 10px; right: 10px; }',
        explanation: {
          en: 'Step 1: With static position, top and right properties are completely ignored by the browser!',
          uz: "1-Qadam: static bo'lganda, top va right buyruqlari brauzer tomonidan mutlaqo inobatga olinmaydi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="background: #1e293b; padding: 20px; border-radius: 8px; color: white; width: 220px;">Card Title <span style="background: #ef4444; padding: 2px 6px; border-radius: 4px; font-size: 11px;">NEW</span></div>`;
        }
      },
      {
        title: { en: '2. Parent: relative', uz: '2. Ota Boshlang\'ich' },
        code: '.card { position: relative; }',
        explanation: {
          en: 'Step 2: Giving position: relative to the parent creates the coordinate anchor frame (0,0).',
          uz: "2-Qadam: Ota blokga position: relative berish (0,0) koordinata chegarasini o'rnatadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="position: relative; border: 2px dashed #38bdf8; padding: 20px; border-radius: 8px; color: white; width: 220px;">Card (Anchor Frame)</div>`;
        }
      },
      {
        title: { en: '3. absolute Snapped', uz: '3. Erkin Qadalgan' },
        code: '.badge {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}',
        explanation: {
          en: 'Step 3: position: absolute lifts the badge and pins it to the exact corner coordinates!',
          uz: "3-Qadam: position: absolute nishonni burchak koordinatasiga erkin va aniq qadab qo'yadi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="position: relative; background: #1e293b; padding: 20px; border-radius: 8px; color: white; width: 220px;">Card Title<span style="position: absolute; top: 10px; right: 10px; background: #ef4444; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: bold;">NEW</span></div>`;
        }
      },
      {
        title: { en: '4. Interactive Pin', uz: '4. Interaktiv Nishon' },
        code(s) {
          return `.card { position: relative; }\n.badge {\n  position: absolute;\n  top: ${s.top}px;\n  right: ${s.right}px;\n}`;
        },
        explanation: {
          en: 'Step 4: Slide top and right coordinates live to watch the pin fly around the card frame!',
          uz: "4-Qadam: top va right koordinatalarini slayderda o'zgartirib, nishon parvozini kuzating!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>top:</label><input type="range" id="pos-t" min="0" max="80" value="${s.top}"><span class="slider-val" id="pos-tv">${s.top}px</span></div>
            <div class="slider-row"><label>right:</label><input type="range" id="pos-r" min="0" max="140" value="${s.right}"><span class="slider-val" id="pos-rv">${s.right}px</span></div>
          `;
          mount.querySelector('#pos-t').oninput = (e) => { s.top = e.target.value; mount.querySelector('#pos-tv').textContent = s.top + 'px'; update(); };
          mount.querySelector('#pos-r').oninput = (e) => { s.right = e.target.value; mount.querySelector('#pos-rv').textContent = s.right + 'px'; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="position: relative; width: 240px; height: 140px; background: #1e293b; border: 2px solid #5b5fc7; border-radius: 12px; padding: 16px; color: white;">
              <strong>🎮 Player Card</strong>
              <div style="position: absolute; top: ${s.top}px; right: ${s.right}px; background: #ef4444; color: white; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: bold; box-shadow: 0 4px 10px rgba(239, 68, 68, 0.5); transition: all 0.1s ease;">
                📍 PIN
              </div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 23. Transitions (0s snap vs 0.3s butter smooth)
// ===================================================================
function renderTransitionsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { dur: 3 },
    steps: [
      {
        title: { en: '1. 0s Jarring Snap', uz: '1. 0s Qo\'pol Sakrash' },
        code: '.card { transition: 0s; }\n.card:hover { transform: translateY(-12px); }',
        explanation: {
          en: 'Step 1: Without transition, styling changes teleport abruptly with zero physical motion.',
          uz: "1-Qadam: transitionsiz holat o'zgarishi bir zumda qo'pol sakrab o'tadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div id="t-card-snap" style="padding: 24px; background: #1e293b; border: 2px solid #64748b; border-radius: 10px; color: white; cursor: pointer;">Hover: 0s Abrupt Snap</div>`;
          const c = stage.querySelector('#t-card-snap');
          c.onmouseenter = () => { c.style.transform = 'translateY(-14px)'; c.style.borderColor = '#2dd4bf'; };
          c.onmouseleave = () => { c.style.transform = 'translateY(0)'; c.style.borderColor = '#64748b'; };
        }
      },
      {
        title: { en: '2. The Eye-Strain Problem', uz: '2. Ko\'zni Charchatish' },
        code: '/* Sudden flashes break user immersion */',
        explanation: {
          en: 'Step 2: Abrupt jumps cause visual jarring. Smooth physics make UI feel organic and tactile.',
          uz: "2-Qadam: Birdaniga sakrash foydalanuvchi ko'zini charchatadi. Mayin fizika esa qulaylik beradi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="color: #f87171; border: 2px dashed #ef4444; padding: 20px; border-radius: 8px; text-align: center;">⚠️ 0s Transition feels broken and unnatural</div>`;
        }
      },
      {
        title: { en: '3. 0.3s Butter Smooth', uz: '3. 0.3s Mayin Suzilish' },
        code: '.card {\n  transition: all 0.3s ease;\n}\n.card:hover {\n  transform: translateY(-12px);\n}',
        explanation: {
          en: 'Step 3: transition: all 0.3s ease interpolates intermediate frames like warm butter!',
          uz: "3-Qadam: transition: all 0.3s ease oraliq kadrlarni xuddi asaldek mayin suzdiradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div id="t-card-smooth" style="padding: 24px; background: #1e293b; border: 2px solid #5b5fc7; border-radius: 10px; color: white; cursor: pointer; transition: all 0.3s ease;">✨ Hover Me (0.3s Smooth)</div>`;
          const c = stage.querySelector('#t-card-smooth');
          c.onmouseenter = () => { c.style.transform = 'translateY(-14px)'; c.style.borderColor = '#2dd4bf'; c.style.boxShadow = '0 12px 24px rgba(45, 212, 191, 0.4)'; };
          c.onmouseleave = () => { c.style.transform = 'translateY(0)'; c.style.borderColor = '#5b5fc7'; c.style.boxShadow = 'none'; };
        }
      },
      {
        title: { en: '4. Speed Studio', uz: '4. Vaqt Studiyasi' },
        code(s) {
          const d = (s.dur / 10).toFixed(1);
          return `.card {\n  transition: all ${d}s ease;\n}\n.card:hover {\n  transform: translateY(-14px);\n}`;
        },
        explanation: {
          en: 'Step 4: Test 0s snap vs 0.3s butter smooth vs 1.5s slow-motion below!',
          uz: "4-Qadam: 0s sakrash, 0.3s mayinlik va 1.5s sekin harakatni quyidagi tugmalarda sinab ko'ring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group">
              <button class="btn-pill ${s.dur === 0 ? 'active' : ''}" id="tr-0">0s (Snap)</button>
              <button class="btn-pill ${s.dur === 3 ? 'active' : ''}" id="tr-3">0.3s (Smooth)</button>
              <button class="btn-pill ${s.dur === 15 ? 'active' : ''}" id="tr-15">1.5s (Slow-mo)</button>
            </div>
          `;
          mount.querySelector('#tr-0').onclick = () => { s.dur = 0; update({ dur: 0 }); };
          mount.querySelector('#tr-3').onclick = () => { s.dur = 3; update({ dur: 3 }); };
          mount.querySelector('#tr-15').onclick = () => { s.dur = 15; update({ dur: 15 }); };
        },
        renderStage(stage, s) {
          const d = (s.dur / 10).toFixed(1);
          stage.innerHTML = `<div id="t-card-live" style="padding: 24px; background: #1e293b; border: 2px solid #5b5fc7; border-radius: 12px; color: white; cursor: pointer; transition: all ${d}s ease; text-align: center;">🎯 Hover Here (${d}s Physics)</div>`;
          const c = stage.querySelector('#t-card-live');
          c.onmouseenter = () => { c.style.transform = 'translateY(-14px)'; c.style.borderColor = '#2dd4bf'; c.style.boxShadow = '0 14px 28px rgba(45, 212, 191, 0.4)'; };
          c.onmouseleave = () => { c.style.transform = 'translateY(0)'; c.style.borderColor = '#5b5fc7'; c.style.boxShadow = 'none'; };
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 24. Filters & Neon Auras
// ===================================================================
function renderFiltersLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { shadow: 20, color: '#2dd4bf', blur: 0 },
    steps: [
      {
        title: { en: '1. Sleeping Crystal', uz: '1. Uxlayotgan Olmos' },
        code: '.crystal { filter: none; }',
        explanation: {
          en: 'Step 1: Without filters, the graphic emits no illumination or aura.',
          uz: "1-Qadam: Filtrlarsiz grafik qorong'i va hech qanday nur taratmaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 70px; opacity: 0.6;">💎</div>`;
        }
      },
      {
        title: { en: '2. Neon drop-shadow', uz: '2. Neon drop-shadow' },
        code: '.crystal {\n  filter: drop-shadow(0 0 20px #2dd4bf);\n}',
        explanation: {
          en: 'Step 2: drop-shadow hugs transparent pixel contours, wrapping a radiant neon aura around the crystal!',
          uz: "2-Qadam: drop-shadow shaffof konturlarni taniydi va olmos atrofida charaqlab turuvchi neon aura hosil qiladi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 70px; filter: drop-shadow(0 0 20px #2dd4bf);">💎</div>`;
        }
      },
      {
        title: { en: '3. Frosted blur', uz: '3. Muzdek blur' },
        code: '.crystal {\n  filter: drop-shadow(0 0 20px #2dd4bf) blur(3px);\n}',
        explanation: {
          en: 'Step 3: Combining blur with drop-shadow diffuses light like magical frosted glass.',
          uz: "3-Qadam: blur qo'shilgach, yorug'lik xuddi muzli sehrli oynadek tarqaladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 70px; filter: drop-shadow(0 0 20px #2dd4bf) blur(3px);">💎</div>`;
        }
      },
      {
        title: { en: '4. Interactive VFX', uz: '4. Interaktiv VFX' },
        code(s) {
          const parts = [];
          if (s.shadow > 0) parts.push(`drop-shadow(0 0 ${s.shadow}px ${s.color})`);
          if (s.blur > 0) parts.push(`blur(${s.blur}px)`);
          return `.crystal {\n  filter: ${parts.length ? parts.join(' ') : 'none'};\n}`;
        },
        explanation: {
          en: 'Step 4: Fine-tune aura radius, pick custom neon colors, and adjust blur live!',
          uz: "4-Qadam: Neon aura radiusi, rangi va xiralashtirish darajasini o'zingiz sozlang!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>glow radius:</label><input type="range" id="fl-sh" min="0" max="40" value="${s.shadow}"><span class="slider-val" id="fl-shv">${s.shadow}px</span></div>
            <div class="slider-row"><label>aura color:</label><input type="color" id="fl-c" value="${s.color}" class="color-input"></div>
            <div class="slider-row"><label>blur:</label><input type="range" id="fl-b" min="0" max="10" value="${s.blur}"><span class="slider-val" id="fl-bv">${s.blur}px</span></div>
          `;
          mount.querySelector('#fl-sh').oninput = (e) => { s.shadow = e.target.value; mount.querySelector('#fl-shv').textContent = s.shadow + 'px'; update(); };
          mount.querySelector('#fl-c').oninput = (e) => { s.color = e.target.value; update(); };
          mount.querySelector('#fl-b').oninput = (e) => { s.blur = e.target.value; mount.querySelector('#fl-bv').textContent = s.blur + 'px'; update(); };
        },
        renderStage(stage, s) {
          const parts = [];
          if (s.shadow > 0) parts.push(`drop-shadow(0 0 ${s.shadow}px ${s.color})`);
          if (s.blur > 0) parts.push(`blur(${s.blur}px)`);
          const filterStr = parts.length ? parts.join(' ') : 'none';
          stage.innerHTML = `
            <div style="font-size: 80px; text-align: center; filter: ${filterStr}; transition: filter 0.1s ease;">
              💎
            </div>
          `;
        }
      }
    ]
  }, isUz);
}


// ==========================================
// THEME 25: Overflow Lab
// ==========================================
function renderOverflowLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { overflowType: 'auto', boxHeight: 140 },
    steps: [
      {
        title: { en: '1. overflow: visible (Spilling Spillover)', uz: '1. overflow: visible (Toshib Ketish)' },
        code: '.terminal-box {\n  height: 100px;\n  overflow: visible;\n}',
        explanation: {
          en: 'Step 1: With overflow: visible, content that is larger than the container spills over and covers other page elements!',
          uz: "1-Qadam: overflow: visible bo'lganda, qutiga sig'magan matn toshib chiqadi va boshqa elementlarni to'sib qo'yadi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="background: #090d16; border: 2px solid #ef4444; border-radius: 10px; width: 260px; height: 90px; padding: 12px; color: #38bdf8; font-family: monospace; font-size: 11px; overflow: visible; position: relative;">
              <div>🛰️ [SYS] Satellite Link: Online</div>
              <div>⚡ [PWR] Reactor Core: 99%</div>
              <div style="color: #ef4444; font-weight: bold;">👾 [SPILL] Alien Signal detected outside!</div>
              <div style="color: #ef4444; font-weight: bold;">🚨 [SPILL] Words exploding across screen!</div>
              <div style="color: #ef4444; font-weight: bold;">🏁 [SPILL] Uncontained telemetry logs!</div>
            </div>
            <div style="margin-top: 50px; background: rgba(239, 68, 68, 0.15); border: 1px dashed #ef4444; padding: 6px 12px; border-radius: 6px; font-size: 11px; color: #fca5a5;">
              ⚠️ Next element is covered by spilled text!
            </div>
          `;
        }
      },
      {
        title: { en: '2. overflow: hidden (Laser Cut)', uz: '2. overflow: hidden (Lazer Qirqish)' },
        code: '.terminal-box {\n  height: 100px;\n  overflow: hidden;\n}',
        explanation: {
          en: 'Step 2: overflow: hidden cleanly chops off anything poking beyond the rounded borders like a laser razor!',
          uz: "2-Qadam: overflow: hidden chegaradan toshgan har qanday narsani lazerdek toza qirqib yashiradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="background: #090d16; border: 2px solid #38bdf8; border-radius: 10px; width: 260px; height: 90px; padding: 12px; color: #38bdf8; font-family: monospace; font-size: 11px; overflow: hidden;">
              <div>🛰️ [SYS] Satellite Link: Online</div>
              <div>⚡ [PWR] Reactor Core: 99%</div>
              <div>👾 [WARN] Alien Signal Detected!</div>
              <div>🛡️ [DEF] Shield Matrix: Active</div>
              <div>🚀 [NAV] Warp Coordinates Locked</div>
            </div>
            <div style="margin-top: 15px; color: #94a3b8; font-size: 11px;">
              ✂️ Extra items are clipped off safely.
            </div>
          `;
        }
      },
      {
        title: { en: '3. overflow-y: scroll (Elevator)', uz: '3. overflow-y: scroll (Skroll Lifti)' },
        code: '.terminal-box {\n  height: 130px;\n  overflow-y: scroll;\n}',
        explanation: {
          en: 'Step 3: overflow-y: scroll adds a vertical scrollbar so users can easily read through all 100+ telemetry logs!',
          uz: "3-Qadam: overflow-y: scroll vertikal skrollbar qo'shib, 100+ xabarlarni erkin o'qish imkonini beradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="background: #090d16; border: 2px solid #38bdf8; border-radius: 10px; width: 260px; height: 130px; padding: 10px; color: #38bdf8; font-family: monospace; font-size: 11px; overflow-y: scroll;" class="custom-cyber-scrollbar">
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">🛰️ [SYS] Sat Link Online</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">⚡ [PWR] Reactor Core 99%</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">👾 [WARN] Signal Detected</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">🛡️ [DEF] Shield Active</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">🚀 [NAV] Warp Locked</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">🏁 [SYS] Ready to Jump!</div>
            </div>
          `;
        }
      },
      {
        title: { en: '4. Interactive Cyber Terminal', uz: '4. Interaktiv Kiber Terminal' },
        code: (s) => `.terminal-box {\n  height: ${s.boxHeight}px;\n  overflow: ${s.overflowType};\n}`,
        explanation: {
          en: 'Step 4: Interactive Master Lab! Change overflow modes and adjust the terminal box height to watch live physics.',
          uz: "4-Qadam: Interaktiv master laboratoriya! Overflow turlarini va balandlikni o'zgartirib jonli fizikani kuzating."
        },
        renderControls(mount, s, onUpdate) {
          mount.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                ${['visible', 'hidden', 'scroll', 'auto'].map(m => `
                  <button class="btn-sm btn-pill ${s.overflowType === m ? 'active' : ''}" data-mode="${m}">
                    overflow: ${m}
                  </button>
                `).join('')}
              </div>
              <div>
                <label style="font-size: 11px; color: #94a3b8; display: flex; justify-content: space-between;">
                  <span>Height:</span>
                  <strong>${s.boxHeight}px</strong>
                </label>
                <input type="range" class="evolution-range-input" min="70" max="200" value="${s.boxHeight}" id="input-height" />
              </div>
            </div>
          `;
          mount.querySelectorAll('[data-mode]').forEach(btn => {
            btn.addEventListener('click', () => {
              onUpdate({ overflowType: btn.getAttribute('data-mode') });
            });
          });
          mount.querySelector('#input-height')?.addEventListener('input', (e) => {
            onUpdate({ boxHeight: parseInt(e.target.value) });
          });
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="background: #090d16; border: 2px solid #38bdf8; border-radius: 12px; width: 280px; height: ${s.boxHeight}px; padding: 12px; color: #38bdf8; font-family: monospace; font-size: 11px; overflow: ${s.overflowType}; transition: height 0.15s ease;" class="custom-cyber-scrollbar">
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">🛰️ [SYS] Sat Link Online</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">⚡ [PWR] Reactor Core 99%</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">👾 [WARN] Alien Signal Detected</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">🛡️ [DEF] Shield Active</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">🚀 [NAV] Warp Locked</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">🏁 [SYS] Ready to Jump!</div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ==========================================
// THEME 26: Gradients Lab
// ==========================================
function renderGradientsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { angle: 135, type: 'linear', c1: '#ff007a', c2: '#7928ca' },
    steps: [
      {
        title: { en: '1. Flat Solid Color', uz: '1. Oddiy Yagona Rang' },
        code: '.box { background: #ff007a; }',
        explanation: {
          en: 'Step 1: A flat solid color has zero transition or depth.',
          uz: "1-Qadam: Oddiy yagona rangda chuqurlik yoki o'tishlar yo'q."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 130px; height: 130px; background: #ff007a; border-radius: 12px; box-shadow: 0 4px 14px rgba(0,0,0,0.4);"></div>`;
        }
      },
      {
        title: { en: '2. Linear Gradient (Angle)', uz: '2. Chiziqli Gradient (Burchak)' },
        code: '.box {\n  background: linear-gradient(135deg, #ff007a, #7928ca);\n}',
        explanation: {
          en: 'Step 2: linear-gradient blends colors smoothly along a directional angle (135 degrees)!',
          uz: "2-Qadam: linear-gradient ranglarni diagonal burchak (135 gradus) bo'ylab silliq qorishtiradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 130px; height: 130px; background: linear-gradient(135deg, #ff007a, #7928ca); border-radius: 12px; box-shadow: 0 8px 24px rgba(255,0,122,0.4); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">NEBULA</div>`;
        }
      },
      {
        title: { en: '3. Radial Cosmic Sphere', uz: '3. Radial Kosmik Shar' },
        code: '.orb {\n  background: radial-gradient(circle at 35% 35%, #00f2fe 0%, #0b0d13 80%);\n  border-radius: 50%;\n}',
        explanation: {
          en: 'Step 3: radial-gradient radiates colors outward from a focal point, turning a 2D circle into a glowing 3D energy orb!',
          uz: "3-Qadam: radial-gradient markazdan tashqariga nur sochib, oddiy aylanani 3D energiya shariga aylantiradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 130px; height: 130px; background: radial-gradient(circle at 35% 35%, #00f2fe 0%, #0b0d13 80%); border-radius: 50%; box-shadow: 0 0 30px #00f2fe; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">ORB</div>`;
        }
      },
      {
        title: { en: '4. Master Gradient Mixer', uz: '4. Master Gradient Mikser' },
        code: (s) => s.type === 'linear' 
          ? `.nebula {\n  background: linear-gradient(${s.angle}deg, ${s.c1}, ${s.c2});\n}`
          : `.nebula {\n  background: radial-gradient(circle, ${s.c1} 0%, ${s.c2} 80%);\n}`,
        explanation: {
          en: 'Step 4: Rotate the angle slider and change color shades to discover infinite cosmic palettes!',
          uz: "4-Qadam: Burchak slayderini aylantiring va ranglarni almashtirib cheksiz kosmik palitralarni kashf eting!"
        },
        renderControls(mount, s, onUpdate) {
          mount.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div style="display: flex; gap: 6px;">
                <button class="btn-sm btn-pill ${s.type === 'linear' ? 'active' : ''}" id="btn-linear">Linear</button>
                <button class="btn-sm btn-pill ${s.type === 'radial' ? 'active' : ''}" id="btn-radial">Radial</button>
              </div>
              ${s.type === 'linear' ? `
                <div>
                  <label style="font-size: 11px; color: #94a3b8; display: flex; justify-content: space-between;">
                    <span>Angle:</span>
                    <strong>${s.angle}°</strong>
                  </label>
                  <input type="range" class="evolution-range-input" min="0" max="360" value="${s.angle}" id="input-angle" />
                </div>
              ` : ''}
              <div style="display: flex; gap: 10px;">
                <label style="font-size: 11px; color: #94a3b8;">C1: <input type="color" value="${s.c1}" id="input-c1" style="background: none; border: none; cursor: pointer;" /></label>
                <label style="font-size: 11px; color: #94a3b8;">C2: <input type="color" value="${s.c2}" id="input-c2" style="background: none; border: none; cursor: pointer;" /></label>
              </div>
            </div>
          `;
          mount.querySelector('#btn-linear')?.addEventListener('click', () => onUpdate({ type: 'linear' }));
          mount.querySelector('#btn-radial')?.addEventListener('click', () => onUpdate({ type: 'radial' }));
          mount.querySelector('#input-angle')?.addEventListener('input', (e) => onUpdate({ angle: parseInt(e.target.value) }));
          mount.querySelector('#input-c1')?.addEventListener('input', (e) => onUpdate({ c1: e.target.value }));
          mount.querySelector('#input-c2')?.addEventListener('input', (e) => onUpdate({ c2: e.target.value }));
        },
        renderStage(stage, s) {
          const bg = s.type === 'linear'
            ? `linear-gradient(${s.angle}deg, ${s.c1}, ${s.c2})`
            : `radial-gradient(circle at 35% 35%, ${s.c1} 0%, ${s.c2} 80%)`;
          stage.innerHTML = `
            <div style="width: 140px; height: 140px; background: ${bg}; border-radius: ${s.type === 'radial' ? '50%' : '16px'}; box-shadow: 0 0 35px ${s.c1}; display: flex; align-items: center; justify-content: center; color: white; font-weight: 800; font-size: 13px; letter-spacing: 1px;">
              ${s.type.toUpperCase()}
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ==========================================
// THEME 27: Media Queries Lab
// ==========================================
function renderMediaQueriesLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { simulatedWidth: 850 },
    steps: [
      {
        title: { en: '1. Wide Desktop (3 Columns)', uz: '1. Kompyuter (3 Ustun)' },
        code: '.squad { display: flex; gap: 12px; }',
        explanation: {
          en: 'Step 1: On wide laptop screens, 3 hero cards fit side-by-side with ease.',
          uz: "1-Qadam: Keng kompyuter ekranlarida 3 ta qahramon yonma-yon a'lo darajada sig'adi."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="display: flex; gap: 8px; width: 300px; padding: 10px; background: #0f172a; border-radius: 8px;">
              <div style="flex: 1; background: #1e293b; padding: 8px; text-align: center; border-radius: 6px; font-size: 10px; color: white;">🥷 Ninja</div>
              <div style="flex: 1; background: #1e293b; padding: 8px; text-align: center; border-radius: 6px; font-size: 10px; color: white;">⚡ Mage</div>
              <div style="flex: 1; background: #1e293b; padding: 8px; text-align: center; border-radius: 6px; font-size: 10px; color: white;">🤖 Mech</div>
            </div>
          `;
        }
      },
      {
        title: { en: '2. Squished Phone View', uz: "2. Siqilgan Telefon Ko'rinishi" },
        code: '/* Squeezed on mobile without media queries! */',
        explanation: {
          en: 'Step 2: Without media queries, cards get tiny and unreadable on pocket smartphones!',
          uz: "2-Qadam: Media query bo'lmasa, telefonlarda kartalar siqilib kichiklashib ketadi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="display: flex; gap: 4px; width: 140px; padding: 6px; background: #0f172a; border: 1px dashed #ef4444; border-radius: 8px;">
              <div style="flex: 1; background: #1e293b; padding: 4px; text-align: center; font-size: 7px; color: white;">🥷 Nin</div>
              <div style="flex: 1; background: #1e293b; padding: 4px; text-align: center; font-size: 7px; color: white;">⚡ Mag</div>
              <div style="flex: 1; background: #1e293b; padding: 4px; text-align: center; font-size: 7px; color: white;">🤖 Mec</div>
            </div>
            <div style="margin-top: 8px; font-size: 10px; color: #fca5a5;">⚠️ Text squashed and unreadable!</div>
          `;
        }
      },
      {
        title: { en: '3. @media (max-width: 768px)', uz: '3. @media (max-width: 768px)' },
        code: '@media (max-width: 768px) {\n  .squad { flex-direction: column; }\n}',
        explanation: {
          en: 'Step 3: The media query detects mobile screens and stacks cards vertically for easy scrolling!',
          uz: "3-Qadam: Media query mobil ekranni aniqlaydi va qulay o'qish uchun kartalarni vertikal terib beradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 6px; width: 150px; padding: 10px; background: #0f172a; border-radius: 8px; border: 2px solid #38bdf8;">
              <div style="background: #1e293b; padding: 6px; text-align: center; border-radius: 4px; font-size: 10px; color: white;">🥷 Shadow Ninja</div>
              <div style="background: #1e293b; padding: 6px; text-align: center; border-radius: 4px; font-size: 10px; color: white;">⚡ Thunder Mage</div>
              <div style="background: #1e293b; padding: 6px; text-align: center; border-radius: 4px; font-size: 10px; color: white;">🤖 Mech Knight</div>
            </div>
          `;
        }
      },
      {
        title: { en: '4. Live Screen Width Simulator', uz: '4. Jonli Ekran Kengligi Simulyatori' },
        code: (s) => `/* Simulated Width: ${s.simulatedWidth}px */\n@media (max-width: 768px) {\n  .squad { flex-direction: column; }\n}`,
        explanation: {
          en: 'Step 4: Slide the viewport width below 768px to watch the layout magically transform in real-time!',
          uz: "4-Qadam: Slayderni 768px dan pastga tushiring va kartalar qanday qilib darhol vertikal o'tishini ko'ring!"
        },
        renderControls(mount, s, onUpdate) {
          mount.innerHTML = `
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 4px;">
                <span style="color: #94a3b8;">Screen Width:</span>
                <span style="color: ${s.simulatedWidth < 768 ? '#38bdf8' : '#10b981'}; font-weight: bold;">
                  ${s.simulatedWidth}px ${s.simulatedWidth < 768 ? '📱 MOBILE' : '💻 DESKTOP'}
                </span>
              </div>
              <input type="range" class="evolution-range-input" min="360" max="1100" value="${s.simulatedWidth}" id="sim-width" />
            </div>
          `;
          mount.querySelector('#sim-width')?.addEventListener('input', (e) => onUpdate({ simulatedWidth: parseInt(e.target.value) }));
        },
        renderStage(stage, s) {
          const isMobile = s.simulatedWidth < 768;
          stage.innerHTML = `
            <div style="display: flex; flex-direction: ${isMobile ? 'column' : 'row'}; gap: 8px; width: ${isMobile ? '160px' : '290px'}; padding: 12px; background: #0f172a; border-radius: 10px; border: 2px solid ${isMobile ? '#38bdf8' : '#10b981'}; transition: all 0.2s ease;">
              <div style="flex: 1; background: #1e293b; padding: 8px; text-align: center; border-radius: 6px; font-size: 11px; color: white;">
                <div>🥷</div>
                <strong>Ninja</strong>
              </div>
              <div style="flex: 1; background: #1e293b; padding: 8px; text-align: center; border-radius: 6px; font-size: 11px; color: white;">
                <div>⚡</div>
                <strong>Mage</strong>
              </div>
              <div style="flex: 1; background: #1e293b; padding: 8px; text-align: center; border-radius: 6px; font-size: 11px; color: white;">
                <div>🤖</div>
                <strong>Mech</strong>
              </div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ==========================================
// THEME 28: Web Fonts & SVG Icons Lab
// ==========================================
function renderWebFontsIconsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { font: 'Orbitron', spacing: 3, iconColor: '#f59e0b' },
    steps: [
      {
        title: { en: '1. Default System Font', uz: '1. Standart Shrift' },
        code: '.title { font-family: serif; }',
        explanation: {
          en: 'Step 1: Plain generic browser fonts look ordinary and lack personality.',
          uz: "1-Qadam: Standart brauzer shriftlari oddiy va zerikarli ko'rinadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-family: serif; font-size: 20px; color: white; padding: 20px; background: #0f172a; border-radius: 8px;">CYBER GUILD</div>`;
        }
      },
      {
        title: { en: '2. Google Font (Orbitron)', uz: '2. Google Font (Orbitron)' },
        code: '.title {\n  font-family: \'Orbitron\', monospace;\n  letter-spacing: 3px;\n}',
        explanation: {
          en: 'Step 2: Connecting a cyber web font gives instant cinematic gaming prestige!',
          uz: "2-Qadam: Kiber veb shrift ulash sarlavhaga video o'yinlardek nufuzli ko'rinish beradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-family: 'Orbitron', monospace, sans-serif; letter-spacing: 3px; font-size: 18px; color: #38bdf8; padding: 20px; background: #0f172a; border-radius: 8px;">CYBER GUILD</div>`;
        }
      },
      {
        title: { en: '3. Vector SVG Badge', uz: '3. Vektor SVG Nishon' },
        code: '<svg viewBox="0 0 24 24">\n  <polygon points="12,2 15,8 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,8" />\n</svg>',
        explanation: {
          en: 'Step 3: SVG draws infinite-resolution vector art that never gets blurry.',
          uz: "3-Qadam: SVG cheksiz tiniqlikdagi vektor tasvirlarni chizadi va xiralashmaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="text-align: center; padding: 20px; background: #0f172a; border: 2px solid #38bdf8; border-radius: 12px; width: 220px;">
              <svg style="width: 44px; height: 44px; fill: #f59e0b; filter: drop-shadow(0 0 10px rgba(245,158,11,0.6));" viewBox="0 0 24 24">
                <polygon points="12,2 15,8 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,8" />
              </svg>
              <div style="font-family: 'Orbitron', monospace; letter-spacing: 2px; color: #38bdf8; font-weight: bold; margin-top: 6px;">CYBER GUILD</div>
            </div>
          `;
        }
      },
      {
        title: { en: '4. Interactive Typography & Icon Studio', uz: '4. Tipografiya va Ikonka Studiyasi' },
        code: (s) => `.guild-title {\n  font-family: '${s.font}', monospace;\n  letter-spacing: ${s.spacing}px;\n}\n.svg-star { fill: ${s.iconColor}; }`,
        explanation: {
          en: 'Step 4: Switch fonts, adjust letter spacing, and repaint the vector crest live!',
          uz: "4-Qadam: Shriftlarni almashtiring, harflar oralig'ini sozlang va vektor nishonni qayta bo'yang!"
        },
        renderControls(mount, s, onUpdate) {
          mount.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                ${['Orbitron', 'Press Start 2P', 'Courier New', 'sans-serif'].map(f => `
                  <button class="btn-sm btn-pill ${s.font === f ? 'active' : ''}" data-font="${f}">${f}</button>
                `).join('')}
              </div>
              <div>
                <label style="font-size: 11px; color: #94a3b8; display: flex; justify-content: space-between;">
                  <span>Spacing:</span>
                  <strong>${s.spacing}px</strong>
                </label>
                <input type="range" class="evolution-range-input" min="0" max="8" value="${s.spacing}" id="input-spacing" />
              </div>
            </div>
          `;
          mount.querySelectorAll('[data-font]').forEach(btn => {
            btn.addEventListener('click', () => onUpdate({ font: btn.getAttribute('data-font') }));
          });
          mount.querySelector('#input-spacing')?.addEventListener('input', (e) => onUpdate({ spacing: parseInt(e.target.value) }));
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="text-align: center; padding: 20px; background: #0f172a; border: 2px solid #38bdf8; border-radius: 14px; width: 240px; box-shadow: 0 0 25px rgba(56,189,248,0.25);">
              <svg style="width: 44px; height: 44px; fill: ${s.iconColor}; filter: drop-shadow(0 0 10px ${s.iconColor});" viewBox="0 0 24 24">
                <polygon points="12,2 15,8 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,8" />
              </svg>
              <div style="font-family: '${s.font}', monospace, sans-serif; letter-spacing: ${s.spacing}px; color: #38bdf8; font-weight: 800; font-size: 15px; margin-top: 8px;">
                CYBER GUILD
              </div>
              <p style="color: #94a3b8; font-size: 11px; margin: 4px 0 0;">Rank: Grand Champion ⭐</p>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ==========================================
// THEME 29: Third-Party Animations Lab
// ==========================================
function renderThirdPartyAnimationsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { effect: 'animate__bounceIn' },
    steps: [
      {
        title: { en: '1. Static Card', uz: '1. Qimirlamaydigan Karta' },
        code: '<div class="chest">💎 REWARD</div>',
        explanation: {
          en: 'Step 1: Without animation classes, elements appear abruptly without fanfare.',
          uz: "1-Qadam: Animatsiya klasslarisiz elementlar birdaniga jonsiz paydo bo'ladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="background: #1e293b; padding: 18px 24px; border-radius: 12px; border: 1px solid #334155; text-align: center; color: white;">💎 REWARD</div>`;
        }
      },
      {
        title: { en: '2. animate__bounceIn', uz: '2. animate__bounceIn (Sakrash)' },
        code: '<div class="chest animate__animated animate__bounceIn">\n  💎 REWARD\n</div>',
        explanation: {
          en: 'Step 2: Adding animate__bounceIn gives an elastic superhero pop celebration!',
          uz: "2-Qadam: animate__bounceIn qo'shilsa, element elastik superqahramondek sakrab sahnaga chiqadi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div class="animate__animated animate__bounceIn" style="background: linear-gradient(135deg, #1e293b, #0f172a); border: 2px solid #f59e0b; padding: 18px 24px; border-radius: 12px; text-align: center; color: white; box-shadow: 0 0 25px rgba(245,158,11,0.4);">💎 VICTORY REWARD!</div>`;
        }
      },
      {
        title: { en: '3. animate__pulse (Loop)', uz: '3. animate__pulse (Puls Takrori)' },
        code: '<div class="chest animate__animated animate__pulse">\n  💎 REWARD\n</div>',
        explanation: {
          en: 'Step 3: animate__pulse keeps the element throbbing like a beating power core!',
          uz: "3-Qadam: animate__pulse elementni quvvat o'zagidek to'xtovsiz urib turishga majbur qiladi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div class="animate__animated animate__pulse" style="background: linear-gradient(135deg, #1e293b, #0f172a); border: 2px solid #f59e0b; padding: 18px 24px; border-radius: 12px; text-align: center; color: white; box-shadow: 0 0 25px rgba(245,158,11,0.4);">💎 +500 CYBER CRYSTALS</div>`;
        }
      },
      {
        title: { en: '4. Interactive Trigger Board', uz: '4. Interaktiv Effekt Doskasi' },
        code: (s) => `<div class="chest animate__animated ${s.effect}">\n  💎 VICTORY!\n</div>`,
        explanation: {
          en: 'Step 4: Click any animation trigger button to test battle-tested Animate.css effects live!',
          uz: "4-Qadam: Istalgan animatsiya tugmasini bosing va Animate.css effektlarini jonli sinab ko'ring!"
        },
        renderControls(mount, s, onUpdate) {
          mount.innerHTML = `
            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
              ${['animate__bounceIn', 'animate__pulse', 'animate__fadeInUp', 'animate__zoomIn', 'animate__glow'].map(fx => `
                <button class="btn-sm btn-pill ${s.effect === fx ? 'active' : ''}" data-fx="${fx}">
                  ${fx.replace('animate__', '')}
                </button>
              `).join('')}
            </div>
          `;
          mount.querySelectorAll('[data-fx]').forEach(btn => {
            btn.addEventListener('click', () => onUpdate({ effect: btn.getAttribute('data-fx') }));
          });
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div key="${Date.now()}" class="animate__animated ${s.effect}" style="background: linear-gradient(135deg, #1e293b, #0f172a); border: 2px solid #f59e0b; border-radius: 14px; padding: 20px 30px; text-align: center; color: white; box-shadow: 0 0 30px rgba(245,158,11,0.4);">
              <span style="font-size: 40px; display: block; margin-bottom: 6px;">💎</span>
              <strong style="font-size: 15px;">VICTORY REWARD!</strong>
              <div style="color: #cbd5e1; font-size: 12px; margin-top: 4px;">+500 Cyber Crystals</div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ==========================================
// THEME 30: Bootstrap Grid Lab
// ==========================================
function renderBootstrapGridLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { cols: 3 },
    steps: [
      {
        title: { en: '1. Raw Unaligned Divs', uz: '1. Setkasiz Oddiy Divlar' },
        code: '<div>Card 1</div><div>Card 2</div><div>Card 3</div>',
        explanation: {
          en: 'Step 1: Normal divs stack vertically taking 100% width each without columns.',
          uz: "1-Qadam: Oddiy divlar har biri 100% kenglik olib faqat ustma-ust tushadi."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 6px; width: 240px;">
              <div style="background: #334155; padding: 6px; text-align: center; color: white; border-radius: 4px; font-size: 11px;">Box 1</div>
              <div style="background: #334155; padding: 6px; text-align: center; color: white; border-radius: 4px; font-size: 11px;">Box 2</div>
              <div style="background: #334155; padding: 6px; text-align: center; color: white; border-radius: 4px; font-size: 11px;">Box 3</div>
            </div>
          `;
        }
      },
      {
        title: { en: '2. Bootstrap .container & .row', uz: '2. .container va .row' },
        code: '<div class="container">\n  <div class="row">...</div>\n</div>',
        explanation: {
          en: 'Step 2: .container centers the content and .row creates the 12-unit horizontal flex track.',
          uz: "2-Qadam: .container kontentni markazga oladi, .row esa 12 birlikli gorizontal yo'lni ochadi."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="border: 2px dashed #38bdf8; padding: 12px; border-radius: 8px; width: 280px; text-align: center; color: #38bdf8; font-size: 11px;">
              📦 .container > .row (12 units available)
            </div>
          `;
        }
      },
      {
        title: { en: '3. Three .col-md-4 Columns', uz: '3. Uchta .col-md-4 Ustun' },
        code: '<div class="row">\n  <div class="col-12 col-md-4">Card 1</div>\n  <div class="col-12 col-md-4">Card 2</div>\n  <div class="col-12 col-md-4">Card 3</div>\n</div>',
        explanation: {
          en: 'Step 3: 4 + 4 + 4 = 12! Three columns fit perfectly side-by-side on desktop screens.',
          uz: "3-Qadam: 4 + 4 + 4 = 12! Uchta ustun kompyuter ekranida yonma-yon a'lo darajada joylashadi."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div class="container" style="max-width: 300px;">
              <div class="row g-2">
                <div class="col-4"><div style="background: #3b82f6; padding: 10px; border-radius: 6px; text-align: center; color: white; font-size: 11px; font-weight: bold;">Col 4</div></div>
                <div class="col-4"><div style="background: #10b981; padding: 10px; border-radius: 6px; text-align: center; color: white; font-size: 11px; font-weight: bold;">Col 4</div></div>
                <div class="col-4"><div style="background: #a855f7; padding: 10px; border-radius: 6px; text-align: center; color: white; font-size: 11px; font-weight: bold;">Col 4</div></div>
              </div>
            </div>
          `;
        }
      },
      {
        title: { en: '4. Dynamic 12-Column Calculator', uz: '4. Dinamik 12 Ustunli Kalkulyator' },
        code: (s) => `<div class="row">\n  <!-- Each column takes ${12 / s.cols} of 12 units (${s.cols} columns total) -->\n  <div class="col-${12 / s.cols}">...</div>\n</div>`,
        explanation: {
          en: 'Step 4: Switch column configurations to see how Bootstrap mathematically divides the 12-unit row!',
          uz: "4-Qadam: Ustunlar sonini o'zgartiring va Bootstrap 12 birlikni qanday matematik bo'lishini ko'ring!"
        },
        renderControls(mount, s, onUpdate) {
          mount.innerHTML = `
            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
              ${[2, 3, 4, 6].map(n => `
                <button class="btn-sm btn-pill ${s.cols === n ? 'active' : ''}" data-n="${n}">
                  ${n} Columns (col-${12/n})
                </button>
              `).join('')}
            </div>
          `;
          mount.querySelectorAll('[data-n]').forEach(btn => {
            btn.addEventListener('click', () => onUpdate({ cols: parseInt(btn.getAttribute('data-n')) }));
          });
        },
        renderStage(stage, s) {
          const colors = ['#3b82f6', '#10b981', '#a855f7', '#f59e0b', '#ec4899', '#06b6d4'];
          const items = Array.from({ length: s.cols }, (_, i) => `
            <div class="col-${12 / s.cols}">
              <div style="background: ${colors[i % colors.length]}; padding: 10px 4px; border-radius: 6px; text-align: center; color: white; font-size: 10px; font-weight: bold;">
                col-${12 / s.cols}
              </div>
            </div>
          `).join('');
          stage.innerHTML = `
            <div class="container" style="max-width: 320px;">
              <div class="row g-2">
                ${items}
              </div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ==========================================
// THEME 31: Bootstrap Components Lab
// ==========================================
function renderBootstrapComponentsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { badgeStatus: 'ONLINE', alertType: 'primary' },
    steps: [
      {
        title: { en: '1. Unstyled Box', uz: '1. Bezaklarsiz Quti' },
        code: '<div>Commander Nova</div>',
        explanation: {
          en: 'Step 1: Without UI components, content is just raw text without visual hierarchy.',
          uz: "1-Qadam: UI komponentlarsiz matn shunchaki jonsiz va tekis ko'rinadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="color: white; padding: 15px; background: #0f172a; border-radius: 6px; width: 220px;">Commander Nova - Captain</div>`;
        }
      },
      {
        title: { en: '2. .card & .card-body', uz: '2. .card va .card-body' },
        code: '<div class="card">\n  <div class="card-body">...</div>\n</div>',
        explanation: {
          en: 'Step 2: Bootstrap card adds shadow depth, clean borders, and organized spacing.',
          uz: "2-Qadam: Bootstrap card qutiga soya, chiroyli chegara va toza masofalar qo'shadi."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div class="card" style="width: 240px; margin: 0 auto;">
              <div class="card-body">
                <h5 class="card-title">Commander Nova</h5>
                <p class="card-text">Flagship captain with 100% clearance.</p>
              </div>
            </div>
          `;
        }
      },
      {
        title: { en: '3. Badges, Alerts & Buttons', uz: '3. Nishonlar, Ogohlantirish va Tugma' },
        code: '<span class="badge bg-success rounded-pill">ONLINE</span>\n<div class="alert alert-primary">Ready!</div>\n<button class="btn btn-primary">Launch</button>',
        explanation: {
          en: 'Step 3: Combine status badges, colored alert banners, and action buttons!',
          uz: "3-Qadam: Status nishonlari, rangli ogohlantirish qutilari va start tugmasini birlashtiring!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div class="card" style="width: 250px; margin: 0 auto;">
              <div class="card-header d-flex justify-content-between" style="display: flex; justify-content: space-between;">
                <span>🛡️ STATUS</span>
                <span class="badge bg-success rounded-pill">ONLINE</span>
              </div>
              <div class="card-body">
                <h5 class="card-title" style="margin-top: 0;">Commander Nova</h5>
                <div class="alert alert-primary" style="padding: 6px 10px; font-size: 11px; margin-bottom: 10px;">⚡ Warp Core Ready!</div>
                <button class="btn btn-primary btn-sm">Launch Shuttle 🚀</button>
              </div>
            </div>
          `;
        }
      },
      {
        title: { en: '4. Interactive Component Studio', uz: '4. Interaktiv Komponent Studiyasi' },
        code: (s) => `<div class="card">\n  <div class="card-header">\n    <span class="badge bg-success rounded-pill">${s.badgeStatus}</span>\n  </div>\n  <div class="card-body">\n    <div class="alert alert-${s.alertType}">Alert Active</div>\n  </div>\n</div>`,
        explanation: {
          en: 'Step 4: Customize component badges and alert styles live with one click!',
          uz: "4-Qadam: Nishon va ogohlantirish uslublarini bir bosish bilan jonli o'zgartiring!"
        },
        renderControls(mount, s, onUpdate) {
          mount.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div style="display: flex; gap: 6px;">
                ${['ONLINE', 'AWAY', 'IN BATTLE'].map(status => `
                  <button class="btn-sm btn-pill ${s.badgeStatus === status ? 'active' : ''}" data-status="${status}">${status}</button>
                `).join('')}
              </div>
              <div style="display: flex; gap: 6px;">
                ${['primary', 'success', 'warning', 'danger'].map(type => `
                  <button class="btn-sm btn-pill ${s.alertType === type ? 'active' : ''}" data-type="${type}">alert-${type}</button>
                `).join('')}
              </div>
            </div>
          `;
          mount.querySelectorAll('[data-status]').forEach(btn => {
            btn.addEventListener('click', () => onUpdate({ badgeStatus: btn.getAttribute('data-status') }));
          });
          mount.querySelectorAll('[data-type]').forEach(btn => {
            btn.addEventListener('click', () => onUpdate({ alertType: btn.getAttribute('data-type') }));
          });
        },
        renderStage(stage, s) {
          const badgeClass = s.badgeStatus === 'ONLINE' ? 'bg-success' : s.badgeStatus === 'AWAY' ? 'bg-warning' : 'bg-danger';
          stage.innerHTML = `
            <div class="card" style="width: 250px; margin: 0 auto;">
              <div class="card-header" style="display: flex; justify-content: space-between;">
                <span>🛡️ NOVA</span>
                <span class="badge ${badgeClass} rounded-pill">${s.badgeStatus}</span>
              </div>
              <div class="card-body">
                <h5 class="card-title" style="margin-top: 0; font-size: 15px;">Starship Captain</h5>
                <div class="alert alert-${s.alertType}" style="padding: 6px 10px; font-size: 11px; margin-bottom: 10px;">
                  Status: ${s.alertType.toUpperCase()} mode
                </div>
                <button class="btn btn-${s.alertType === 'warning' ? 'warning' : 'primary'} btn-sm">Take Action 🚀</button>
              </div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ==========================================
// THEME 32: Bootstrap UI / Navbar Lab
// ==========================================
function renderBootstrapUiLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { brand: 'CodeCraft OS', activeTab: 'Home' },
    steps: [
      {
        title: { en: '1. Raw Bullet List', uz: "1. Oddiy Nuqtali Ro'yxat" },
        code: '<ul><li>Home</li><li>Missions</li><li>Scores</li></ul>',
        explanation: {
          en: 'Step 1: Standard lists look like documents rather than modern app navigation.',
          uz: "1-Qadam: Oddiy ro'yxatlar ilova menyusiga emas, hujjatga o'xshaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<ul style="color: white; font-size: 12px; padding-left: 20px;"><li>Home</li><li>Missions</li><li>Scores</li></ul>`;
        }
      },
      {
        title: { en: '2. .navbar .navbar-dark .bg-dark', uz: "2. Qorong'u Navbar Konteyneri" },
        code: '<nav class="navbar navbar-dark bg-dark">\n  ...\n</nav>',
        explanation: {
          en: 'Step 2: .navbar wraps the header in a sleek dark container with built-in flex alignment.',
          uz: "2-Qadam: .navbar sarlavhani zamonaviy qorong'u flex konteyneriga o'raydi."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="background: #0f172a; border: 1px solid #1e293b; padding: 10px 16px; border-radius: 8px; width: 280px; color: #38bdf8; font-weight: bold; font-size: 12px;">
              🧭 Navigation Container (Ready for Links)
            </div>
          `;
        }
      },
      {
        title: { en: '3. Brand & Nav Links', uz: '3. Brend va Menyu Havolalari' },
        code: '<a class="navbar-brand">👾 OS</a>\n<ul class="navbar-nav">\n  <li><a class="nav-link active">Home</a></li>\n</ul>',
        explanation: {
          en: 'Step 3: Brand logo on the left, pill menu links in the middle, and status buttons on the right!',
          uz: "3-Qadam: Chapda logotip, o'rtada menyu havolalari va o'ngda tugma!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <nav class="navbar navbar-dark bg-dark" style="width: 290px; padding: 8px 12px; margin: 0 auto;">
              <a class="navbar-brand" style="font-size: 13px;" href="#"><span>👾</span> CodeCraft</a>
              <ul class="navbar-nav" style="gap: 4px;">
                <li><a class="nav-link active" style="font-size: 11px;" href="#">Home</a></li>
                <li><a class="nav-link" style="font-size: 11px;" href="#">Quests</a></li>
              </ul>
              <button class="btn btn-outline-info btn-sm" style="font-size: 10px; padding: 2px 6px;">Connect</button>
            </nav>
          `;
        }
      },
      {
        title: { en: '4. Interactive Header Simulator', uz: '4. Interaktiv Sarlavha Simulyatori' },
        code: (s) => `<nav class="navbar navbar-dark bg-dark">\n  <a class="navbar-brand">${s.brand}</a>\n  <a class="nav-link ${s.activeTab === 'Home' ? 'active' : ''}">Home</a>\n  <a class="nav-link ${s.activeTab === 'Quests' ? 'active' : ''}">Quests</a>\n</nav>`,
        explanation: {
          en: 'Step 4: Click nav tabs in the preview to test active state transitions live!',
          uz: "4-Qadam: Prevyudagi menyu tugmalarini bosib faol holat o'tishlarini jonli sinab ko'ring!"
        },
        renderControls(mount, s, onUpdate) {
          mount.innerHTML = `
            <div style="display: flex; gap: 6px;">
              ${['Home', 'Quests', 'Rankings', 'Vault'].map(tab => `
                <button class="btn-sm btn-pill ${s.activeTab === tab ? 'active' : ''}" data-tab="${tab}">${tab}</button>
              `).join('')}
            </div>
          `;
          mount.querySelectorAll('[data-tab]').forEach(btn => {
            btn.addEventListener('click', () => onUpdate({ activeTab: btn.getAttribute('data-tab') }));
          });
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <nav class="navbar navbar-dark bg-dark" style="width: 300px; padding: 8px 12px; margin: 0 auto;">
              <a class="navbar-brand" style="font-size: 13px;" href="#"><span>👾</span> ${s.brand}</a>
              <ul class="navbar-nav" style="gap: 4px;">
                ${['Home', 'Quests', 'Rankings'].map(tab => `
                  <li>
                    <a class="nav-link ${s.activeTab === tab ? 'active' : ''}" style="font-size: 11px; cursor: pointer;" href="#">
                      ${tab}
                    </a>
                  </li>
                `).join('')}
              </ul>
              <button class="btn btn-outline-info btn-sm" style="font-size: 10px; padding: 2px 6px;">💳</button>
            </nav>
          `;
        }
      }
    ]
  }, isUz);
}

// Fallback Default Lab
function renderDefaultLab(container, lesson, isUz) {
  container.innerHTML = `
    <div style="padding: 20px; color: white;">
      <h4>${isUz ? 'Laboratoriya Tayyorlanmoqda' : 'Lab Initializing'}</h4>
      <p>${isUz ? 'Ushbu mavzu uchun parametrlar yuklanmoqda...' : 'Loading parameters for this theme...'}</p>
    </div>
  `;
}

// Master Dispatcher
export function renderTopicLab(container, lesson, lang = 'en') {
  if (!container || !lesson) return;
  const isUz = lang === 'uz';

  const renderers = {
    'theme-0-typing': renderTypingDiagnosticTopicLab,
    'theme-1-tags': renderTagsLab,
    'theme-2-structure': renderStructureLab,
    'theme-3-tables': renderTablesLab,
    'theme-4-pictures': renderPicturesLab,
    'theme-5-divs': renderDivsLab,
    'theme-6-classes': renderClassesLab,
    'theme-7-box-model': renderBoxModelTopicLab,
    'theme-8-transform': renderTransformLab,
    'theme-9-flexbox': renderFlexboxTopicLab,
    'theme-10-buttons': renderButtonsLab,
    'theme-11-links': renderLinksLab,
    'theme-12-lists': renderListsLab,
    'theme-13-colors': renderColorsLab,
    'theme-14-fonts': renderFontsLab,
    'theme-15-shapes': renderShapesLab,
    'theme-16-animations': renderAnimationsLab,
    'theme-17-inputs': renderInputsLab,
    'theme-18-audio': renderAudioLab,
    'theme-19-video': renderVideoLab,
    'theme-20-details': renderDetailsLab,
    'theme-21-grid': renderGridTopicLab,
    'theme-22-position': renderPositionLab,
    'theme-23-transitions': renderTransitionsLab,
    'theme-24-filters': renderFiltersLab,
    'theme-25-overflow': renderOverflowLab,
    'theme-26-gradients': renderGradientsLab,
    'theme-27-media-queries': renderMediaQueriesLab,
    'theme-28-web-fonts-icons': renderWebFontsIconsLab,
    'theme-29-third-party-animations': renderThirdPartyAnimationsLab,
    'theme-30-bootstrap-grid': renderBootstrapGridLab,
    'theme-31-bootstrap-components': renderBootstrapComponentsLab,
    'theme-32-bootstrap-ui': renderBootstrapUiLab
  };

  const renderer = renderers[lesson.id] || renderDefaultLab;
  renderer(container, lesson, isUz);
}
