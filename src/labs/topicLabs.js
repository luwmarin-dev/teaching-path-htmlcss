import { renderBoxModelLab } from './boxModelLab.js';
import { renderFlexboxLab } from './flexboxLab.js';
import { renderColorLab } from './colorLab.js';
import { renderGridLab } from './gridLab.js';

/**
 * Dedicated Topic Visual Laboratories
 * Provides an interactive, parameter-driven visual simulation for each of the 24 themes.
 * Shows kids cause-and-effect: what happens when parameters are missing/removed vs when they are applied!
 */

export function renderTopicLab(container, lesson, lang = 'en') {
  if (!container || !lesson) return;

  const isUz = lang === 'uz';

  // Dispatch to the matching topic lab renderer
  const renderers = {
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
    'theme-24-filters': renderFiltersLab
  };

  const renderer = renderers[lesson.id] || renderDefaultLab;
  renderer(container, lesson, isUz);
}

// Helper to attach standard copy listener
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

// -------------------------------------------------------------
// 1. Tags Lab (b, i, u, s)
// -------------------------------------------------------------
function renderTagsLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>${isUz ? 'Teglarni Yoqish/O\'chirish:' : 'Toggle Tags On / Off:'}</strong></label>
        <div class="btn-pill-group">
          <button class="btn-pill active" id="lab-tag-b"><b>&lt;b&gt; Bold</b></button>
          <button class="btn-pill" id="lab-tag-i"><i>&lt;i&gt; Italic</i></button>
          <button class="btn-pill" id="lab-tag-u"><u>&lt;u&gt; Underline</u></button>
          <button class="btn-pill" id="lab-tag-s"><s>&lt;s&gt; Strike</s></button>
        </div>
        <div class="topic-lab-status" id="lab-status"></div>
        <div class="lab-code-output">
          <div class="code-header"><span>${isUz ? 'Yaratilgan HTML:' : 'Generated HTML:'}</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>
      <div class="topic-lab-stage">
        <div class="lab-box-target" id="lab-target" style="padding: 24px; font-size: 22px; color: white; background: #141722; border-radius: 12px; text-align: center;">
          Hello CodeCraft Explorer!
        </div>
      </div>
    </div>
  `;

  let isB = true, isI = false, isU = false, isS = false;
  const target = container.querySelector('#lab-target');
  const codeEl = container.querySelector('#lab-code');
  const statusEl = container.querySelector('#lab-status');

  function update() {
    target.style.fontWeight = isB ? 'bold' : 'normal';
    target.style.fontStyle = isI ? 'italic' : 'normal';
    const decs = [];
    if (isU) decs.push('underline');
    if (isS) decs.push('line-through');
    target.style.textDecoration = decs.length ? decs.join(' ') : 'none';

    let openTags = '', closeTags = '';
    if (isB) { openTags += '<b>'; closeTags = '</b>' + closeTags; }
    if (isI) { openTags += '<i>'; closeTags = '</i>' + closeTags; }
    if (isU) { openTags += '<u>'; closeTags = '</u>' + closeTags; }
    if (isS) { openTags += '<s>'; closeTags = '</s>' + closeTags; }

    codeEl.textContent = openTags ? `<p>${openTags}Hello CodeCraft Explorer!${closeTags}</p>` : `<p>Hello CodeCraft Explorer!</p>`;
    statusEl.textContent = isUz
      ? (openTags ? `✨ Teglar matnni qalinlashtiradi va bezaydi.` : `⚠️ Hech qanday teg yo'q: Matn oddiy ko'rinishda qoladi.`)
      : (openTags ? `✨ Tags wrap the text and tell the browser to style it.` : `⚠️ No tags applied: Text renders plain without styling.`);
  }

  container.querySelector('#lab-tag-b').addEventListener('click', (e) => { isB = !isB; e.target.classList.toggle('active', isB); update(); });
  container.querySelector('#lab-tag-i').addEventListener('click', (e) => { isI = !isI; e.target.classList.toggle('active', isI); update(); });
  container.querySelector('#lab-tag-u').addEventListener('click', (e) => { isU = !isU; e.target.classList.toggle('active', isU); update(); });
  container.querySelector('#lab-tag-s').addEventListener('click', (e) => { isS = !isS; e.target.classList.toggle('active', isS); update(); });
  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// -------------------------------------------------------------
// 2. Document Structure Lab (doctype, head, title, body)
// -------------------------------------------------------------
function renderStructureLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>${isUz ? '<title> Sahifa Nomi:' : '<title> Browser Tab Title:'}</strong></label>
        <input type="text" id="lab-input-title" value="My Epic Secret Game" class="lab-input-text" />
        <label style="margin-top: 10px;"><strong>${isUz ? '<body> Ichidagi Matn:' : '<body> Visible Content:'}</strong></label>
        <input type="text" id="lab-input-body" value="Welcome to the Space Outpost!" class="lab-input-text" />
        <div class="topic-lab-status" id="lab-status"></div>
        <div class="lab-code-output">
          <div class="code-header"><span>${isUz ? 'To\'liq HTML:' : 'Full Structure:'}</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>
      <div class="topic-lab-stage">
        <!-- Simulated Browser Window -->
        <div class="mock-browser-window">
          <div class="mock-browser-tab">
            <span class="tab-dot"></span>
            <span id="mock-tab-title">My Epic Secret Game</span>
          </div>
          <div class="mock-browser-body" id="mock-body-content">
            Welcome to the Space Outpost!
          </div>
        </div>
      </div>
    </div>
  `;

  const inTitle = container.querySelector('#lab-input-title');
  const inBody = container.querySelector('#lab-input-body');
  const tabTitle = container.querySelector('#mock-tab-title');
  const bodyContent = container.querySelector('#mock-body-content');
  const codeEl = container.querySelector('#lab-code');
  const statusEl = container.querySelector('#lab-status');

  function update() {
    const tVal = inTitle.value || 'Untitled';
    const bVal = inBody.value || '';
    tabTitle.textContent = tVal;
    bodyContent.textContent = bVal;

    codeEl.textContent = `<!DOCTYPE html>\n<html>\n  <head>\n    <title>${tVal}</title>\n  </head>\n  <body>\n    <p>${bVal}</p>\n  </body>\n</html>`;
    statusEl.textContent = isUz
      ? `💡 <title> brauzer vkladkasiga yoziladi, <body> esa ekranning o'zida ko'rinadi!`
      : `💡 <title> sets the browser tab name, while <body> draws on the actual web page canvas!`;
  }

  inTitle.addEventListener('input', update);
  inBody.addEventListener('input', update);
  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// -------------------------------------------------------------
// 3. Tables Lab (table, tr, th, td, border)
// -------------------------------------------------------------
function renderTablesLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>border (${isUz ? 'Jadval Chiziqlari' : 'Grid Border'}):</strong> <span id="val-border">1px</span></label>
        <input type="range" id="slider-border" min="0" max="8" value="1" />
        <label style="margin-top: 10px;"><strong>cellpadding (${isUz ? 'Katak Yostiqchasi' : 'Cell Padding'}):</strong> <span id="val-pad">8px</span></label>
        <input type="range" id="slider-pad" min="0" max="20" value="8" />
        <div class="topic-lab-status" id="lab-status"></div>
        <div class="lab-code-output">
          <div class="code-header"><span>${isUz ? 'HTML Jadval:' : 'HTML Table:'}</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>
      <div class="topic-lab-stage">
        <table id="lab-table" style="background: #141722; color: white; border-collapse: collapse;">
          <thead>
            <tr style="background: rgba(91, 95, 199, 0.3);">
              <th>Rank</th><th>Player</th><th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>🥇 1st</td><td>PixelCat</td><td>9,900</td></tr>
            <tr><td>🥈 2nd</td><td>CyberBot</td><td>8,450</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;

  const sBorder = container.querySelector('#slider-border');
  const sPad = container.querySelector('#slider-pad');
  const table = container.querySelector('#lab-table');
  const codeEl = container.querySelector('#lab-code');
  const statusEl = container.querySelector('#lab-status');

  function update() {
    const b = sBorder.value;
    const p = sPad.value;
    container.querySelector('#val-border').textContent = `${b}px`;
    container.querySelector('#val-pad').textContent = `${p}px`;

    const cells = table.querySelectorAll('th, td');
    cells.forEach(c => {
      c.style.border = b > 0 ? `${b}px solid #5b5fc7` : 'none';
      c.style.padding = `${p}px`;
    });

    codeEl.textContent = `<table border="${b}" cellpadding="${p}">\n  <tr>\n    <th>Rank</th>\n    <th>Player</th>\n    <th>Score</th>\n  </tr>\n  <tr>\n    <td>🥇 1st</td>\n    <td>PixelCat</td>\n    <td>9,900</td>\n  </tr>\n</table>`;
    statusEl.textContent = b == 0
      ? (isUz ? `⚠️ border="0": Kataklar orasida chiziqlar yo'qoldi!` : `⚠️ border="0": Grid lines vanish, table floats invisibly!`)
      : (isUz ? `✨ border="${b}" va cellpadding="${p}px": Kataklar aniq va qulay!` : `✨ border="${b}" & cellpadding="${p}px": Clear visible cells!`);
  }

  sBorder.addEventListener('input', update);
  sPad.addEventListener('input', update);
  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// -------------------------------------------------------------
// 4. Pictures Lab (img, src, alt, width)
// -------------------------------------------------------------
function renderPicturesLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>width (${isUz ? 'Rasm Kengligi' : 'Image Width'}):</strong> <span id="val-width">180px</span></label>
        <input type="range" id="slider-width" min="80" max="320" value="180" />
        <label style="margin-top: 10px;"><strong>alt (${isUz ? 'Yordamchi Matn' : 'Alternative Text'}):</strong></label>
        <input type="text" id="input-alt" value="Cyber Explorer Robot" class="lab-input-text" />
        <div class="topic-lab-status" id="lab-status"></div>
        <div class="lab-code-output">
          <div class="code-header"><span>${isUz ? 'HTML Rasm:' : 'HTML Image:'}</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>
      <div class="topic-lab-stage">
        <img id="lab-img" src="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>" alt="Cyber Explorer Robot" style="width: 180px; transition: width 0.15s ease;" />
      </div>
    </div>
  `;

  const sW = container.querySelector('#slider-width');
  const inAlt = container.querySelector('#input-alt');
  const img = container.querySelector('#lab-img');
  const codeEl = container.querySelector('#lab-code');
  const statusEl = container.querySelector('#lab-status');

  function update() {
    const w = sW.value;
    const a = inAlt.value;
    container.querySelector('#val-width').textContent = `${w}px`;
    img.style.width = `${w}px`;
    img.setAttribute('alt', a);

    codeEl.textContent = `<img src="robot.png" alt="${a}" width="${w}">`;
    statusEl.textContent = isUz
      ? `✨ width="${w}" rasmni proporsional o'lchamda ushlab turadi.`
      : `✨ width="${w}" sizes the picture without stretching or breaking aspect ratio.`;
  }

  sW.addEventListener('input', update);
  inAlt.addEventListener('input', update);
  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// -------------------------------------------------------------
// 5. Basic Divs & Border Style
// -------------------------------------------------------------
function renderDivsLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>border-width:</strong> <span id="val-bwidth">4px</span></label>
        <input type="range" id="slider-bwidth" min="0" max="15" value="4" />

        <label style="margin-top: 8px;"><strong>border-style:</strong></label>
        <div class="btn-pill-group" id="group-bstyle">
          <button class="btn-pill active" data-style="solid">solid</button>
          <button class="btn-pill" data-style="dashed">dashed</button>
          <button class="btn-pill" data-style="dotted">dotted</button>
          <button class="btn-pill" data-style="double">double</button>
        </div>

        <label style="margin-top: 8px;"><strong>box-shadow (${isUz ? '3D Soya va Ko\'tarilish' : '3D Box Shadow & Depth'}):</strong> <span id="val-bshadow">16px</span></label>
        <input type="range" id="slider-bshadow" min="0" max="40" value="16" />

        <div class="topic-lab-status" id="lab-status"></div>
        <div class="lab-code-output">
          <div class="code-header"><span>${isUz ? 'CSS Uslub:' : 'CSS Style:'}</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>
      <div class="topic-lab-stage">
        <div id="lab-box" style="padding: 24px; background: #141722; color: white; border-radius: 12px; text-align: center; width: 220px; transition: all 0.15s ease;">
          📦 Cyber Container Box
        </div>
      </div>
    </div>
  `;

  let bStyle = 'solid';
  const sW = container.querySelector('#slider-bwidth');
  const sSh = container.querySelector('#slider-bshadow');
  const box = container.querySelector('#lab-box');
  const codeEl = container.querySelector('#lab-code');
  const statusEl = container.querySelector('#lab-status');

  function update() {
    const w = sW.value;
    const sh = sSh.value;
    container.querySelector('#val-bwidth').textContent = `${w}px`;
    container.querySelector('#val-bshadow').textContent = `${sh}px`;

    box.style.border = w > 0 ? `${w}px ${bStyle} #38bdf8` : 'none';
    box.style.boxShadow = sh > 0 ? `0 10px ${sh}px rgba(56, 189, 248, 0.4)` : 'none';

    let css = `.box {\n  background: #141722;\n`;
    if (w > 0) css += `  border: ${w}px ${bStyle} #38bdf8;\n`;
    else css += `  border: none;\n`;
    if (sh > 0) css += `  box-shadow: 0 10px ${sh}px rgba(56, 189, 248, 0.4);\n`;
    else css += `  box-shadow: none;\n`;
    css += `}`;

    codeEl.textContent = css;

    if (w == 0 && sh == 0) {
      statusEl.textContent = isUz
        ? "⚠️ border va box-shadow olib tashlandi: quti yassi va chegarasiz bo'lib qoldi!"
        : "⚠️ border and box-shadow removed: box is flat and borderless!";
    } else {
      statusEl.textContent = isUz
        ? `✨ ${w}px ${bStyle} chegara va ${sh}px 3D soya qutini sahnadan chiroyli ajratib ko'rsatmoqda.`
        : `✨ ${w}px ${bStyle} border and ${sh}px shadow lift the container into crisp 3D relief.`;
    }
  }

  sW.addEventListener('input', update);
  sSh.addEventListener('input', update);

  const pills = container.querySelectorAll('#group-bstyle .btn-pill');
  pills.forEach(p => p.addEventListener('click', () => {
    pills.forEach(b => b.classList.remove('active'));
    p.classList.add('active');
    bStyle = p.getAttribute('data-style');
    update();
  }));

  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// -------------------------------------------------------------
// 6. Classes for Divs
// -------------------------------------------------------------
function renderClassesLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>${isUz ? 'Klassni Berish / Olib Tashlash:' : 'Assign / Remove Class:'}</strong></label>
        <div class="btn-pill-group">
          <button class="btn-pill active" id="btn-toggle-c1">Card 1: .hero-glow</button>
          <button class="btn-pill" id="btn-toggle-c2">Card 2: .hero-glow</button>
          <button class="btn-pill active" id="btn-toggle-c3">Card 3: .hero-glow</button>
        </div>
        <div class="topic-lab-status" id="lab-status"></div>
        <div class="lab-code-output">
          <div class="code-header"><span>${isUz ? 'Klass Kuchi:' : 'Class Power:'}</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code">.hero-glow {
  border: 2px solid #2dd4bf;
  box-shadow: 0 0 16px rgba(45, 212, 191, 0.4);
}</code></pre>
        </div>
      </div>
      <div class="topic-lab-stage" style="gap: 12px; display: flex;">
        <div class="lab-card hero-glow" id="card-1" style="padding: 16px; background: #141722; color: white; border-radius: 10px; text-align: center; width: 90px;">Card 1</div>
        <div class="lab-card" id="card-2" style="padding: 16px; background: #141722; color: white; border-radius: 10px; text-align: center; width: 90px;">Card 2</div>
        <div class="lab-card hero-glow" id="card-3" style="padding: 16px; background: #141722; color: white; border-radius: 10px; text-align: center; width: 90px;">Card 3</div>
      </div>
    </div>
  `;

  const glowStyle = 'border: 2px solid #2dd4bf; box-shadow: 0 0 16px rgba(45, 212, 191, 0.4);';
  const defaultStyle = 'border: 1px solid #1e2433; box-shadow: none;';

  function applyCard(id, active) {
    const el = container.querySelector(id);
    if (!el) return;
    el.style.cssText = `padding: 16px; background: #141722; color: white; border-radius: 10px; text-align: center; width: 90px; ${active ? glowStyle : defaultStyle}`;
  }

  let c1 = true, c2 = false, c3 = true;
  const statusEl = container.querySelector('#lab-status');

  function update() {
    applyCard('#card-1', c1);
    applyCard('#card-2', c2);
    applyCard('#card-3', c3);
    const count = (c1?1:0) + (c2?1:0) + (c3?1:0);
    statusEl.textContent = isUz
      ? `✨ .hero-glow klassi ${count} ta qutiga bir vaqtning o'zida bir xil kuchli uslub beradi!`
      : `✨ The .hero-glow class styles ${count} boxes simultaneously with one rule!`;
  }

  container.querySelector('#btn-toggle-c1').addEventListener('click', (e) => { c1 = !c1; e.target.classList.toggle('active', c1); update(); });
  container.querySelector('#btn-toggle-c2').addEventListener('click', (e) => { c2 = !c2; e.target.classList.toggle('active', c2); update(); });
  container.querySelector('#btn-toggle-c3').addEventListener('click', (e) => { c3 = !c3; e.target.classList.toggle('active', c3); update(); });
  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// -------------------------------------------------------------
// 7. Box Model (Margin vs Padding)
// -------------------------------------------------------------
function renderBoxModelTopicLab(container, lesson, isUz) {
  // Use existing interactive box model logic
  renderBoxModelLab(container);
}

// -------------------------------------------------------------
// 8. Transform Lab (rotate, scale, translate)
// -------------------------------------------------------------
function renderTransformLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>${isUz ? 'Qaysi Divni Siljitish kerak?' : 'Select Div to Transform:'}</strong></label>
        <div class="btn-pill-group" id="group-div-target">
          <button class="btn-pill active" data-target="1">🟥 Div 1</button>
          <button class="btn-pill" data-target="2">🟪 Div 2</button>
          <button class="btn-pill" data-target="3">🟩 Div 3</button>
          <button class="btn-pill" data-target="all">⚡ ${isUz ? 'Barchasi (All 3)' : 'All 3'}</button>
        </div>

        <label style="margin-top: 8px;"><strong>translateX (${isUz ? 'Gorizontal Siljish' : 'Horizontal Shift'}):</strong> <span id="val-tx">20px</span></label>
        <input type="range" id="slider-tx" min="-80" max="80" value="20" />

        <label style="margin-top: 8px;"><strong>translateY (${isUz ? 'Vertikal Siljish' : 'Vertical Shift'}):</strong> <span id="val-ty">0px</span></label>
        <input type="range" id="slider-ty" min="-50" max="50" value="0" />

        <label style="margin-top: 8px;"><strong>rotate (${isUz ? 'Aylantirish' : 'Rotation'}):</strong> <span id="val-rot">15deg</span></label>
        <input type="range" id="slider-rot" min="-180" max="180" value="15" />

        <label style="margin-top: 8px;"><strong>scale (${isUz ? 'Kattalashtirish' : 'Scale'}):</strong> <span id="val-scale">1.1x</span></label>
        <input type="range" id="slider-scale" min="5" max="20" value="11" />

        <button id="btn-reset-transform" class="btn-pill" style="align-self: flex-start; margin-top: 4px;">
          🔄 ${isUz ? 'Boshlang\'ich holatga qaytarish' : 'Reset to Starting Position'}
        </button>

        <div class="topic-lab-status" id="lab-status"></div>
        <div class="lab-code-output">
          <div class="code-header"><span>${isUz ? 'CSS Transform Kodi:' : 'CSS Transform Code:'}</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>
      <div class="topic-lab-stage" style="flex-direction: row; gap: 16px; justify-content: center; align-items: center; min-height: 380px;">
        <div id="tbox-1" style="width: 80px; height: 80px; background: linear-gradient(135deg, #ef4444, #b91c1c); color: white; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4); transition: transform 0.15s ease;">
          <span>🟥</span>
          <span>Div 1</span>
        </div>
        <div id="tbox-2" style="width: 80px; height: 80px; background: linear-gradient(135deg, #a855f7, #6b21a8); color: white; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; box-shadow: 0 4px 12px rgba(168, 85, 247, 0.4); transition: transform 0.15s ease;">
          <span>🟪</span>
          <span>Div 2</span>
        </div>
        <div id="tbox-3" style="width: 80px; height: 80px; background: linear-gradient(135deg, #10b981, #047857); color: white; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4); transition: transform 0.15s ease;">
          <span>🟩</span>
          <span>Div 3</span>
        </div>
      </div>
    </div>
  `;

  let selectedDiv = '1';
  const sTx = container.querySelector('#slider-tx');
  const sTy = container.querySelector('#slider-ty');
  const sRot = container.querySelector('#slider-rot');
  const sScale = container.querySelector('#slider-scale');
  const btnReset = container.querySelector('#btn-reset-transform');
  const codeEl = container.querySelector('#lab-code');
  const statusEl = container.querySelector('#lab-status');

  const boxes = {
    '1': container.querySelector('#tbox-1'),
    '2': container.querySelector('#tbox-2'),
    '3': container.querySelector('#tbox-3')
  };

  function update() {
    const tx = sTx.value;
    const ty = sTy.value;
    const r = sRot.value;
    const sc = (sScale.value / 10).toFixed(1);

    container.querySelector('#val-tx').textContent = `${tx}px`;
    container.querySelector('#val-ty').textContent = `${ty}px`;
    container.querySelector('#val-rot').textContent = `${r}deg`;
    container.querySelector('#val-scale').textContent = `${sc}x`;

    const transformStr = (tx == 0 && ty == 0 && r == 0 && sc == 1)
      ? 'none'
      : `translateX(${tx}px) translateY(${ty}px) rotate(${r}deg) scale(${sc})`;

    if (selectedDiv === 'all') {
      ['1', '2', '3'].forEach(id => {
        if (boxes[id]) boxes[id].style.transform = transformStr;
      });
      codeEl.textContent = `.box-1, .box-2, .box-3 {\n  transform: ${transformStr};\n}`;
    } else {
      ['1', '2', '3'].forEach(id => {
        if (boxes[id]) boxes[id].style.transform = (id === selectedDiv) ? transformStr : 'none';
      });
      codeEl.textContent = `.box-${selectedDiv} {\n  transform: ${transformStr};\n}`;
    }

    if (transformStr === 'none') {
      statusEl.textContent = isUz
        ? "⚠️ transform: none: Barcha 3 ta div boshlang'ich joyida tekis turibdi."
        : "⚠️ transform: none: All 3 divs rest flat at their default starting coordinates.";
    } else {
      statusEl.textContent = isUz
        ? `✨ Transform faol! ${selectedDiv === 'all' ? 'Barcha divlar' : 'Div ' + selectedDiv} X bo'yicha ${tx}px, Y bo'yicha ${ty}px surildi, ${r}° burildi va ${sc}x kattalashdi.`
        : `✨ Transform active! ${selectedDiv === 'all' ? 'All divs' : 'Div ' + selectedDiv} shifted by X:${tx}px Y:${ty}px, rotated by ${r}°, and scaled by ${sc}x.`;
    }
  }

  sTx.addEventListener('input', update);
  sTy.addEventListener('input', update);
  sRot.addEventListener('input', update);
  sScale.addEventListener('input', update);

  btnReset.addEventListener('click', () => {
    sTx.value = 0;
    sTy.value = 0;
    sRot.value = 0;
    sScale.value = 10;
    update();
  });

  const pills = container.querySelectorAll('#group-div-target .btn-pill');
  pills.forEach(p => p.addEventListener('click', () => {
    pills.forEach(b => b.classList.remove('active'));
    p.classList.add('active');
    selectedDiv = p.getAttribute('data-target');
    update();
  }));

  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// -------------------------------------------------------------
// 9. Flexbox Lab
// -------------------------------------------------------------
function renderFlexboxTopicLab(container, lesson, isUz) {
  renderFlexboxLab(container);
}

// -------------------------------------------------------------
// 10. Buttons & Hover Glows
// -------------------------------------------------------------
function renderButtonsLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>${isUz ? 'Asosiy Rang:' : 'Base Color:'}</strong></label>
        <input type="color" id="input-btn-color" value="#5b5fc7" class="color-input" />
        <label style="margin-top: 10px;"><strong>${isUz ? ':hover Nuri (Glow):' : ':hover Aura Glow:'}</strong></label>
        <input type="color" id="input-glow-color" value="#2dd4bf" class="color-input" />
        <div class="topic-lab-status" id="lab-status">${isUz ? 'Sichqonchani tugma ustiga olib boring!' : 'Hover your mouse over the button!'}</div>
        <div class="lab-code-output">
          <div class="code-header"><span>CSS:</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>
      <div class="topic-lab-stage">
        <button id="lab-interactive-btn" style="padding: 14px 28px; font-size: 16px; font-weight: bold; border-radius: 10px; cursor: pointer; transition: all 0.2s ease;">
          ⚡ Launch Rocket
        </button>
      </div>
    </div>
  `;

  const btn = container.querySelector('#lab-interactive-btn');
  const inColor = container.querySelector('#input-btn-color');
  const inGlow = container.querySelector('#input-glow-color');
  const codeEl = container.querySelector('#lab-code');

  function update() {
    const c = inColor.value;
    const g = inGlow.value;
    btn.style.background = c;
    btn.style.color = 'white';
    btn.style.border = `2px solid ${c}`;

    btn.onmouseenter = () => {
      btn.style.boxShadow = `0 0 20px ${g}`;
      btn.style.borderColor = g;
      btn.style.transform = 'scale(1.05)';
    };
    btn.onmouseleave = () => {
      btn.style.boxShadow = 'none';
      btn.style.borderColor = c;
      btn.style.transform = 'scale(1)';
    };

    codeEl.textContent = `button {\n  background: ${c};\n  cursor: pointer;\n}\nbutton:hover {\n  box-shadow: 0 0 20px ${g};\n  transform: scale(1.05);\n}`;
  }

  inColor.addEventListener('input', update);
  inGlow.addEventListener('input', update);
  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// -------------------------------------------------------------
// 11. Links & Web Portals
// -------------------------------------------------------------
function renderLinksLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>target (${isUz ? 'Ochilish Joyi' : 'Open Target'}):</strong></label>
        <div class="btn-pill-group" id="group-target">
          <button class="btn-pill active" data-target="_blank">_blank (New Tab 🚀)</button>
          <button class="btn-pill" data-target="_self">_self (Same Page 🔄)</button>
        </div>
        <div class="topic-lab-status" id="lab-status"></div>
        <div class="lab-code-output">
          <div class="code-header"><span>HTML:</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>
      <div class="topic-lab-stage">
        <div style="background: #141722; padding: 24px; border-radius: 12px; text-align: center;">
          <p style="color: white; margin-bottom: 12px;">Web Portal Link:</p>
          <a id="lab-link" href="https://wikipedia.org" target="_blank" style="color: #38bdf8; font-size: 20px; font-weight: bold; text-decoration: underline;">
            🌐 Teleport to Wikipedia
          </a>
        </div>
      </div>
    </div>
  `;

  let targetVal = '_blank';
  const link = container.querySelector('#lab-link');
  const codeEl = container.querySelector('#lab-code');
  const statusEl = container.querySelector('#lab-status');

  function update() {
    link.setAttribute('target', targetVal);
    codeEl.textContent = `<a href="https://wikipedia.org" target="${targetVal}">\n  🌐 Teleport to Wikipedia\n</a>`;
    statusEl.textContent = targetVal === '_blank'
      ? (isUz ? `✨ target="_blank": Yangi vkladka ochadi, o'quvchi o'z sahifasini yo'qotmaydi!` : `✨ target="_blank": Opens in a new tab, student stays safe on their own site!`)
      : (isUz ? `⚠️ target="_self": Hozirgi sahifa ustidan ochilib, uni yopib yuboradi!` : `⚠️ target="_self": Replaces current page, closing the editor!`);
  }

  const pills = container.querySelectorAll('#group-target .btn-pill');
  pills.forEach(p => p.addEventListener('click', () => {
    pills.forEach(b => b.classList.remove('active'));
    p.classList.add('active');
    targetVal = p.getAttribute('data-target');
    update();
  }));

  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// -------------------------------------------------------------
// 12. Lists Lab
// -------------------------------------------------------------
function renderListsLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>${isUz ? 'Ro\'yxat Turi:' : 'List Type:'}</strong></label>
        <div class="btn-pill-group" id="group-list-type">
          <button class="btn-pill active" data-type="ul">&lt;ul&gt; Bullets (●)</button>
          <button class="btn-pill" data-type="ol">&lt;ol&gt; Numbered (1, 2, 3)</button>
        </div>
        <div class="topic-lab-status" id="lab-status"></div>
        <div class="lab-code-output">
          <div class="code-header"><span>HTML:</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>
      <div class="topic-lab-stage">
        <div id="lab-list-container" style="background: #141722; padding: 24px 36px; border-radius: 12px; color: white;">
          <ul>
            <li>Laser Watch</li>
            <li>Invisible Cloak</li>
            <li>Jetpack Shoes</li>
          </ul>
        </div>
      </div>
    </div>
  `;

  let listType = 'ul';
  const stage = container.querySelector('#lab-list-container');
  const codeEl = container.querySelector('#lab-code');
  const statusEl = container.querySelector('#lab-status');

  function update() {
    stage.innerHTML = listType === 'ul'
      ? `<ul><li>Laser Watch</li><li>Invisible Cloak</li><li>Jetpack Shoes</li></ul>`
      : `<ol><li>Laser Watch</li><li>Invisible Cloak</li><li>Jetpack Shoes</li></ol>`;

    codeEl.textContent = `<${listType}>\n  <li>Laser Watch</li>\n  <li>Invisible Cloak</li>\n  <li>Jetpack Shoes</li>\n</${listType}>`;
    statusEl.textContent = listType === 'ul'
      ? (isUz ? `✨ <ul> nuqtali ro'yxat (tartibsiz) yaratadi.` : `✨ <ul> creates an unordered bullet dot list.`)
      : (isUz ? `✨ <ol> raqamlangan ro'yxat (1, 2, 3) yaratadi!` : `✨ <ol> creates an ordered numbered checklist!`);
  }

  const pills = container.querySelectorAll('#group-list-type .btn-pill');
  pills.forEach(p => p.addEventListener('click', () => {
    pills.forEach(b => b.classList.remove('active'));
    p.classList.add('active');
    listType = p.getAttribute('data-type');
    update();
  }));

  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// -------------------------------------------------------------
// 13. Colors & Gradients
// -------------------------------------------------------------
function renderColorsLab(container, lesson, isUz) {
  renderColorLab(container);
}

// -------------------------------------------------------------
// 14. Fonts & Neon Glow
// -------------------------------------------------------------
function renderFontsLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>font-size:</strong> <span id="val-fsize">36px</span></label>
        <input type="range" id="slider-fsize" min="18" max="56" value="36" />
        <label style="margin-top: 10px;"><strong>text-shadow glow (${isUz ? 'Nur Radiusi' : 'Glow Radius'}):</strong> <span id="val-glow">18px</span></label>
        <input type="range" id="slider-glow" min="0" max="40" value="18" />
        <label style="margin-top: 10px;"><strong>${isUz ? 'Neon Rangi:' : 'Neon Color:'}</strong></label>
        <input type="color" id="input-neon" value="#2dd4bf" class="color-input" />
        <div class="topic-lab-status" id="lab-status"></div>
        <div class="lab-code-output">
          <div class="code-header"><span>CSS:</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>
      <div class="topic-lab-stage">
        <h1 id="lab-neon-text" style="color: white; margin: 0; text-align: center; font-weight: 800;">
          ⚡ LEVEL UP! ⚡
        </h1>
      </div>
    </div>
  `;

  const sSize = container.querySelector('#slider-fsize');
  const sGlow = container.querySelector('#slider-glow');
  const inNeon = container.querySelector('#input-neon');
  const title = container.querySelector('#lab-neon-text');
  const codeEl = container.querySelector('#lab-code');
  const statusEl = container.querySelector('#lab-status');

  function update() {
    const size = sSize.value;
    const glow = sGlow.value;
    const c = inNeon.value;
    container.querySelector('#val-fsize').textContent = `${size}px`;
    container.querySelector('#val-glow').textContent = `${glow}px`;

    title.style.fontSize = `${size}px`;
    title.style.textShadow = glow > 0 ? `0 0 ${glow}px ${c}, 0 0 ${glow*1.5}px ${c}` : 'none';

    codeEl.textContent = `h1 {\n  font-size: ${size}px;\n  text-shadow: 0 0 ${glow}px ${c};\n}`;
    statusEl.textContent = glow == 0
      ? (isUz ? `⚠️ text-shadow: none: Neon nuri yo'qoldi!` : `⚠️ text-shadow: none: Neon aura turns off!`)
      : (isUz ? `✨ text-shadow: 0 0 ${glow}px ${c}: Matn porlab yonadi!` : `✨ text-shadow: 0 0 ${glow}px ${c}: Electrifying arcade glow!`);
  }

  sSize.addEventListener('input', update);
  sGlow.addEventListener('input', update);
  inNeon.addEventListener('input', update);
  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// -------------------------------------------------------------
// 15. Rounded Corners & Circles
// -------------------------------------------------------------
function renderShapesLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>border-radius:</strong> <span id="val-rad">16px</span></label>
        <input type="range" id="slider-rad" min="0" max="60" value="16" />
        <div class="btn-pill-group" style="margin-top: 8px;">
          <button class="btn-pill" id="btn-rad-0">0px (${isUz ? 'Kvadrat' : 'Square'})</button>
          <button class="btn-pill" id="btn-rad-16">16px (${isUz ? 'Yumaloq' : 'Rounded'})</button>
          <button class="btn-pill" id="btn-rad-50">50% (${isUz ? 'Aylana' : 'Circle'})</button>
        </div>
        <div class="topic-lab-status" id="lab-status"></div>
        <div class="lab-code-output">
          <div class="code-header"><span>CSS:</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>
      <div class="topic-lab-stage">
        <div id="lab-avatar" style="width: 120px; height: 120px; background: #ff757f; display: flex; align-items: center; justify-content: center; font-size: 50px; transition: border-radius 0.2s ease;">
          🦊
        </div>
      </div>
    </div>
  `;

  const sRad = container.querySelector('#slider-rad');
  const avatar = container.querySelector('#lab-avatar');
  const codeEl = container.querySelector('#lab-code');
  const statusEl = container.querySelector('#lab-status');

  function update(valStr) {
    const val = valStr || `${sRad.value}px`;
    container.querySelector('#val-rad').textContent = val;
    avatar.style.borderRadius = val;

    codeEl.textContent = `.avatar {\n  width: 120px;\n  height: 120px;\n  border-radius: ${val};\n}`;
    statusEl.textContent = val === '50%'
      ? (isUz ? `✨ 50% har qanday to'rtburchakni mukammal aylanaga aylantiradi!` : `✨ 50% morphs any square into a perfect circle avatar!`)
      : (isUz ? `✨ border-radius: ${val} burchaklarni yumshatadi.` : `✨ border-radius: ${val} softens the sharp corners.`);
  }

  sRad.addEventListener('input', () => update());
  container.querySelector('#btn-rad-0').addEventListener('click', () => { sRad.value = 0; update('0px'); });
  container.querySelector('#btn-rad-16').addEventListener('click', () => { sRad.value = 16; update('16px'); });
  container.querySelector('#btn-rad-50').addEventListener('click', () => { sRad.value = 60; update('50%'); });
  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// -------------------------------------------------------------
// 16. Keyframe Animations
// -------------------------------------------------------------
function renderAnimationsLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>animation-duration (${isUz ? 'Tezlik' : 'Speed'}):</strong> <span id="val-speed">1.0s</span></label>
        <input type="range" id="slider-speed" min="2" max="30" value="10" />
        <div class="btn-pill-group" style="margin-top: 10px;">
          <button class="btn-pill active" id="btn-anim-play">▶ Play / Pause</button>
        </div>
        <div class="topic-lab-status" id="lab-status"></div>
        <div class="lab-code-output">
          <div class="code-header"><span>CSS @keyframes:</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>
      <div class="topic-lab-stage">
        <div id="lab-alien" style="font-size: 64px; display: inline-block;">
          👾
        </div>
      </div>
    </div>
  `;

  let isPlaying = true;
  const sSp = container.querySelector('#slider-speed');
  const alien = container.querySelector('#lab-alien');
  const codeEl = container.querySelector('#lab-code');
  const statusEl = container.querySelector('#lab-status');

  function update() {
    const s = (sSp.value / 10).toFixed(1);
    container.querySelector('#val-speed').textContent = `${s}s`;

    if (isPlaying) {
      alien.style.animation = `alien-bounce ${s}s infinite alternate ease-in-out`;
    } else {
      alien.style.animation = 'none';
    }

    codeEl.textContent = `@keyframes bounce {\n  0% { transform: translateY(0); }\n  100% { transform: translateY(-30px); }\n}\n.alien {\n  animation: bounce ${s}s infinite alternate ease-in-out;\n}`;
    statusEl.textContent = isUz
      ? `✨ ${s}s davomiylikda o'zga sayyoralik sakrab harakat qilmoqda!`
      : `✨ Alien bounces infinitely with a ${s}s cycle duration!`;
  }

  sSp.addEventListener('input', update);
  container.querySelector('#btn-anim-play').addEventListener('click', (e) => {
    isPlaying = !isPlaying;
    e.target.classList.toggle('active', isPlaying);
    update();
  });

  // Inject keyframes if not present
  if (!document.getElementById('alien-keyframes-style')) {
    const st = document.createElement('style');
    st.id = 'alien-keyframes-style';
    st.textContent = `@keyframes alien-bounce { 0% { transform: translateY(0); } 100% { transform: translateY(-30px); } }`;
    document.head.appendChild(st);
  }

  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// -------------------------------------------------------------
// 17. Inputs Lab
// -------------------------------------------------------------
function renderInputsLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>type (${isUz ? 'Input Turi' : 'Input Type'}):</strong></label>
        <div class="btn-pill-group" id="group-inp-type">
          <button class="btn-pill active" data-type="text">text</button>
          <button class="btn-pill" data-type="color">color</button>
          <button class="btn-pill" data-type="checkbox">checkbox</button>
          <button class="btn-pill" data-type="range">range</button>
        </div>
        <div class="topic-lab-status" id="lab-status"></div>
        <div class="lab-code-output">
          <div class="code-header"><span>HTML:</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>
      <div class="topic-lab-stage">
        <div style="background: #141722; padding: 24px; border-radius: 12px; color: white; width: 260px; text-align: center;">
          <h4 style="margin: 0 0 12px;">🎮 Hero Registry</h4>
          <div id="lab-input-mount">
            <input type="text" placeholder="Enter Hero Name" style="padding: 10px; border-radius: 8px; border: 1px solid #5b5fc7; background: #0b0d13; color: white; width: 90%;">
          </div>
        </div>
      </div>
    </div>
  `;

  let inType = 'text';
  const mount = container.querySelector('#lab-input-mount');
  const codeEl = container.querySelector('#lab-code');
  const statusEl = container.querySelector('#lab-status');

  function update() {
    if (inType === 'text') {
      mount.innerHTML = `<input type="text" placeholder="Enter Hero Name" style="padding: 10px; border-radius: 8px; border: 1px solid #5b5fc7; background: #0b0d13; color: white; width: 90%;">`;
    } else if (inType === 'color') {
      mount.innerHTML = `<input type="color" value="#5b5fc7" style="width: 60px; height: 50px; cursor: pointer; border-radius: 8px;">`;
    } else if (inType === 'checkbox') {
      mount.innerHTML = `<label style="display: flex; align-items: center; justify-content: center; gap: 8px; font-weight: bold;"><input type="checkbox" checked style="transform: scale(1.5);"> Ready for Battle?</label>`;
    } else if (inType === 'range') {
      mount.innerHTML = `<input type="range" min="0" max="100" value="75" style="width: 90%;">`;
    }

    codeEl.textContent = `<input type="${inType}">`;
    statusEl.textContent = isUz
      ? `✨ type="${inType}": Brauzer mos keluvchi interaktiv kiritish maydonchasini ochadi!`
      : `✨ type="${inType}": Browser draws the corresponding interactive widget!`;
  }

  const pills = container.querySelectorAll('#group-inp-type .btn-pill');
  pills.forEach(p => p.addEventListener('click', () => {
    pills.forEach(b => b.classList.remove('active'));
    p.classList.add('active');
    inType = p.getAttribute('data-type');
    update();
  }));

  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// -------------------------------------------------------------
// 18. Audio Lab
// -------------------------------------------------------------
function renderAudioLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>controls (${isUz ? 'Boshqaruv Tugmalari' : 'Controls Flag'}):</strong></label>
        <div class="btn-pill-group">
          <button class="btn-pill active" id="btn-toggle-audio-ctrl">controls (ON / OFF)</button>
        </div>
        <div class="topic-lab-status" id="lab-status"></div>
        <div class="lab-code-output">
          <div class="code-header"><span>HTML:</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>
      <div class="topic-lab-stage">
        <div id="lab-audio-box" style="text-align: center; padding: 24px; background: #141722; border-radius: 12px; color: white;">
          <h4 style="margin: 0 0 12px;">🚀 Space SFX Player</h4>
          <audio id="lab-audio-el" controls style="max-width: 260px;"></audio>
        </div>
      </div>
    </div>
  `;

  let hasCtrl = true;
  const audioEl = container.querySelector('#lab-audio-el');
  const codeEl = container.querySelector('#lab-code');
  const statusEl = container.querySelector('#lab-status');

  function update() {
    if (hasCtrl) {
      audioEl.style.display = 'block';
      audioEl.setAttribute('controls', '');
      codeEl.textContent = `<audio controls src="hum.ogg">\n</audio>`;
      statusEl.textContent = isUz
        ? `✨ controls bor: Tinglovchiga Play/Pause va ovoz balandligi tugmalari ko'rinadi!`
        : `✨ controls active: Listener gets Play/Pause and volume bar!`;
    } else {
      audioEl.style.display = 'none';
      audioEl.removeAttribute('controls');
      codeEl.textContent = `<audio src="hum.ogg">\n</audio>`;
      statusEl.textContent = isUz
        ? `⚠️ controls yo'q: Audio pleyer ko'rinmas bo'lib qoldi va uni yoqib bo'lmaydi!`
        : `⚠️ controls missing: The player is completely invisible and cannot be played!`;
    }
  }

  container.querySelector('#btn-toggle-audio-ctrl').addEventListener('click', (e) => {
    hasCtrl = !hasCtrl;
    e.target.classList.toggle('active', hasCtrl);
    update();
  });

  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// -------------------------------------------------------------
// 19. Video Lab
// -------------------------------------------------------------
function renderVideoLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>width (${isUz ? 'Video Kengligi' : 'Video Width'}):</strong> <span id="val-vid-w">260px</span></label>
        <input type="range" id="slider-vid-w" min="140" max="340" value="260" />
        <label style="margin-top: 10px;"><strong>controls:</strong></label>
        <div class="btn-pill-group">
          <button class="btn-pill active" id="btn-toggle-vid-ctrl">controls (ON / OFF)</button>
        </div>
        <div class="topic-lab-status" id="lab-status"></div>
        <div class="lab-code-output">
          <div class="code-header"><span>HTML:</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>
      <div class="topic-lab-stage">
        <div style="background: #000; border-radius: 12px; overflow: hidden; padding: 12px; text-align: center; border: 2px solid #5b5fc7;">
          <div id="vid-screen" style="width: 260px; height: 160px; background: #141722; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white;">
            <span style="font-size: 40px;">🎬</span>
            <span style="font-size: 11px; margin-top: 6px;">Cinema Movie Screen</span>
          </div>
          <div id="vid-bar" style="background: #1e2433; padding: 6px; display: flex; justify-content: space-between; font-size: 11px; color: white; margin-top: 6px; border-radius: 4px;">
            <span>▶ Play</span><span>🔊 100%</span><span>⛶ Fullscreen</span>
          </div>
        </div>
      </div>
    </div>
  `;

  let hasCtrl = true;
  const sW = container.querySelector('#slider-vid-w');
  const screen = container.querySelector('#vid-screen');
  const bar = container.querySelector('#vid-bar');
  const codeEl = container.querySelector('#lab-code');
  const statusEl = container.querySelector('#lab-status');

  function update() {
    const w = sW.value;
    container.querySelector('#val-vid-w').textContent = `${w}px`;
    screen.style.width = `${w}px`;
    bar.style.display = hasCtrl ? 'flex' : 'none';

    codeEl.textContent = hasCtrl ? `<video controls width="${w}" src="movie.mp4">\n</video>` : `<video width="${w}" src="movie.mp4">\n</video>`;
    statusEl.textContent = hasCtrl
      ? (isUz ? `✨ controls va width="${w}": Tomoshabin uchun to'liq kino pleyer!` : `✨ controls and width="${w}": Complete playable cinema screen!`)
      : (isUz ? `⚠️ controls yo'q: Boshqaruv paneli yo'qoldi!` : `⚠️ controls missing: Video has no play or volume buttons!`);
  }

  sW.addEventListener('input', update);
  container.querySelector('#btn-toggle-vid-ctrl').addEventListener('click', (e) => {
    hasCtrl = !hasCtrl;
    e.target.classList.toggle('active', hasCtrl);
    update();
  });

  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// -------------------------------------------------------------
// 20. Details / Summary Lab
// -------------------------------------------------------------
function renderDetailsLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>&lt;summary&gt; (${isUz ? 'Sarlavha' : 'Heading'}):</strong></label>
        <input type="text" id="input-summary" value="Click to Reveal Secret Code" class="lab-input-text" />
        <label style="margin-top: 10px;"><strong>${isUz ? 'Yashirin Matn:' : 'Hidden Secret Content:'}</strong></label>
        <input type="text" id="input-secret" value="🔑 Golden Key: STAR-9999" class="lab-input-text" />
        <div class="topic-lab-status" id="lab-status">${isUz ? 'Sahnadagi sarlavha ustiga bosing va ochilishini ko\'ring!' : 'Click the heading on the right stage to pop it open!'}</div>
        <div class="lab-code-output">
          <div class="code-header"><span>HTML:</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>
      <div class="topic-lab-stage">
        <details id="lab-details" style="background: #1a1f2e; color: white; padding: 16px; border-radius: 10px; cursor: pointer; border: 1px solid #5b5fc7; min-width: 240px;">
          <summary id="lab-sum-text" style="font-weight: bold; color: #fbbf24;">Click to Reveal Secret Code</summary>
          <p id="lab-sec-text" style="margin-top: 10px; color: #34d399;">🔑 Golden Key: STAR-9999</p>
        </details>
      </div>
    </div>
  `;

  const inSum = container.querySelector('#input-summary');
  const inSec = container.querySelector('#input-secret');
  const sumText = container.querySelector('#lab-sum-text');
  const secText = container.querySelector('#lab-sec-text');
  const codeEl = container.querySelector('#lab-code');

  function update() {
    const s = inSum.value || 'Click to open';
    const h = inSec.value || '';
    sumText.textContent = s;
    secText.textContent = h;

    codeEl.textContent = `<details>\n  <summary>${s}</summary>\n  <p>${h}</p>\n</details>`;
  }

  inSum.addEventListener('input', update);
  inSec.addEventListener('input', update);
  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// -------------------------------------------------------------
// 21. CSS Grid Lab
// -------------------------------------------------------------
function renderGridTopicLab(container, lesson, isUz) {
  renderGridLab(container);
}

// -------------------------------------------------------------
// 22. Positioning Lab (relative / absolute)
// -------------------------------------------------------------
function renderPositionLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>position (${isUz ? 'Nishon Joylashuvi' : 'Badge Position'}):</strong></label>
        <div class="btn-pill-group" id="group-pos">
          <button class="btn-pill active" data-pos="absolute">absolute (Free Pin 📍)</button>
          <button class="btn-pill" data-pos="static">static (In Flow ⏹️)</button>
        </div>
        <label style="margin-top: 10px;"><strong>top:</strong> <span id="val-top">-10px</span></label>
        <input type="range" id="slider-top" min="-25" max="40" value="-10" />
        <label style="margin-top: 10px;"><strong>right:</strong> <span id="val-right">-10px</span></label>
        <input type="range" id="slider-right" min="-25" max="40" value="-10" />
        <div class="topic-lab-status" id="lab-status"></div>
        <div class="lab-code-output">
          <div class="code-header"><span>CSS:</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>
      <div class="topic-lab-stage">
        <!-- Relative Container Card -->
        <div style="position: relative; background: #141722; border: 2px solid #5b5fc7; border-radius: 12px; padding: 24px; color: white; width: 200px;">
          <span id="lab-badge" style="background: #ef4444; color: white; font-weight: bold; padding: 4px 8px; border-radius: 999px; font-size: 11px;">NEW!</span>
          <h4 style="margin: 8px 0 4px;">Cyber Armor</h4>
          <p style="margin: 0; font-size: 12px; color: #94a3b8;">Shield level 100%</p>
        </div>
      </div>
    </div>
  `;

  let posMode = 'absolute';
  const sTop = container.querySelector('#slider-top');
  const sRight = container.querySelector('#slider-right');
  const badge = container.querySelector('#lab-badge');
  const codeEl = container.querySelector('#lab-code');
  const statusEl = container.querySelector('#lab-status');

  function update() {
    const t = sTop.value;
    const r = sRight.value;
    container.querySelector('#val-top').textContent = `${t}px`;
    container.querySelector('#val-right').textContent = `${r}px`;

    badge.style.position = posMode;
    if (posMode === 'absolute') {
      badge.style.top = `${t}px`;
      badge.style.right = `${r}px`;
      codeEl.textContent = `.card {\n  position: relative;\n}\n.badge {\n  position: absolute;\n  top: ${t}px;\n  right: ${r}px;\n}`;
      statusEl.textContent = isUz
        ? `✨ position: absolute nishonni kartaning o'ng yuqori burchagiga aniq mixlaydi!`
        : `✨ position: absolute pins the badge right at the corner coordinates!`;
    } else {
      badge.style.top = 'auto';
      badge.style.right = 'auto';
      codeEl.textContent = `.badge {\n  position: static;\n}`;
      statusEl.textContent = isUz
        ? `⚠️ position: static: Nishon erkin burchakka chiqa olmaydi, matn ichida qolib ketadi!`
        : `⚠️ position: static: Badge cannot fly to the corner and stays stuck in line!`;
    }
  }

  sTop.addEventListener('input', update);
  sRight.addEventListener('input', update);

  const pills = container.querySelectorAll('#group-pos .btn-pill');
  pills.forEach(p => p.addEventListener('click', () => {
    pills.forEach(b => b.classList.remove('active'));
    p.classList.add('active');
    posMode = p.getAttribute('data-pos');
    update();
  }));

  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// -------------------------------------------------------------
// 23. Transitions Lab
// -------------------------------------------------------------
function renderTransitionsLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>transition-duration:</strong> <span id="val-dur">0.3s</span></label>
        <input type="range" id="slider-dur" min="0" max="20" value="3" />
        <div class="btn-pill-group" style="margin-top: 10px;">
          <button class="btn-pill" id="btn-trans-0">0s (${isUz ? 'Transitionsiz / Sakrash' : 'None / Snap'})</button>
          <button class="btn-pill active" id="btn-trans-3">0.3s (${isUz ? 'Mayin / Asaldek' : 'Smooth / Butter'})</button>
          <button class="btn-pill" id="btn-trans-15">1.5s (${isUz ? 'Sekin Harakat' : 'Slow Motion'})</button>
        </div>
        <div class="topic-lab-status" id="lab-status">${isUz ? 'Sichqonchani karta ustiga olib boring!' : 'Hover mouse over the magic card!'}</div>
        <div class="lab-code-output">
          <div class="code-header"><span>CSS:</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>
      <div class="topic-lab-stage">
        <div id="lab-card" style="padding: 28px; background: #141722; border: 2px solid #5b5fc7; border-radius: 12px; color: white; text-align: center; cursor: pointer;">
          <h4 style="margin: 0 0 6px;">✨ Hover Over Me!</h4>
          <p style="margin: 0; font-size: 12px; color: #94a3b8;">Feel the buttery smooth physics</p>
        </div>
      </div>
    </div>
  `;

  const sDur = container.querySelector('#slider-dur');
  const card = container.querySelector('#lab-card');
  const codeEl = container.querySelector('#lab-code');
  const statusEl = container.querySelector('#lab-status');

  function update() {
    const d = (sDur.value / 10).toFixed(1);
    container.querySelector('#val-dur').textContent = `${d}s`;

    card.style.transition = `all ${d}s ease`;

    card.onmouseenter = () => {
      card.style.transform = 'translateY(-14px)';
      card.style.borderColor = '#2dd4bf';
      card.style.boxShadow = '0 15px 30px rgba(45, 212, 191, 0.35)';
    };
    card.onmouseleave = () => {
      card.style.transform = 'translateY(0)';
      card.style.borderColor = '#5b5fc7';
      card.style.boxShadow = 'none';
    };

    codeEl.textContent = `.card {\n  transition: all ${d}s ease;\n}\n.card:hover {\n  transform: translateY(-14px);\n  border-color: #2dd4bf;\n}`;
    statusEl.textContent = d == 0
      ? (isUz ? `⚠️ transition: 0s: O'zgarishlar bir zumda qo'pol sakrab o'tadi!` : `⚠️ transition: 0s: Snaps abruptly with zero physics!`)
      : (isUz ? `✨ transition: all ${d}s ease: Karta xuddi asaldek mayin suzadi!` : `✨ transition: all ${d}s ease: Buttery smooth hover elevation!`);
  }

  sDur.addEventListener('input', update);
  container.querySelector('#btn-trans-0').addEventListener('click', () => { sDur.value = 0; update(); });
  container.querySelector('#btn-trans-3').addEventListener('click', () => { sDur.value = 3; update(); });
  container.querySelector('#btn-trans-15').addEventListener('click', () => { sDur.value = 15; update(); });
  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// -------------------------------------------------------------
// 24. Filters & Neon Auras Lab
// -------------------------------------------------------------
function renderFiltersLab(container, lesson, isUz) {
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <label><strong>drop-shadow (${isUz ? 'Neon Nuri Radiusi' : 'Neon Aura Glow'}):</strong> <span id="val-shadow">20px</span></label>
        <input type="range" id="slider-shadow" min="0" max="40" value="20" />
        <label style="margin-top: 10px;"><strong>${isUz ? 'Neon Nuri Rangi:' : 'Aura Color:'}</strong></label>
        <input type="color" id="input-shadow-color" value="#2dd4bf" class="color-input" />
        <label style="margin-top: 10px;"><strong>blur (${isUz ? 'Xiralashtirish' : 'Frosted Blur'}):</strong> <span id="val-blur">0px</span></label>
        <input type="range" id="slider-blur" min="0" max="15" value="0" />
        <div class="topic-lab-status" id="lab-status"></div>
        <div class="lab-code-output">
          <div class="code-header"><span>CSS Filter:</span><button id="btn-copy-lab" class="btn-sm">📋 Copy</button></div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>
      <div class="topic-lab-stage">
        <div id="lab-crystal" style="font-size: 80px; text-align: center; transition: filter 0.15s ease;">
          💎
        </div>
      </div>
    </div>
  `;

  const sShadow = container.querySelector('#slider-shadow');
  const inColor = container.querySelector('#input-shadow-color');
  const sBlur = container.querySelector('#slider-blur');
  const crystal = container.querySelector('#lab-crystal');
  const codeEl = container.querySelector('#lab-code');
  const statusEl = container.querySelector('#lab-status');

  function update() {
    const s = sShadow.value;
    const c = inColor.value;
    const b = sBlur.value;
    container.querySelector('#val-shadow').textContent = `${s}px`;
    container.querySelector('#val-blur').textContent = `${b}px`;

    const filters = [];
    if (s > 0) filters.push(`drop-shadow(0 0 ${s}px ${c})`);
    if (b > 0) filters.push(`blur(${b}px)`);

    const filterStr = filters.length > 0 ? filters.join(' ') : 'none';
    crystal.style.filter = filterStr;

    codeEl.textContent = `.crystal {\n  filter: ${filterStr};\n}`;
    statusEl.textContent = s == 0 && b == 0
      ? (isUz ? `⚠️ filter: none: Olmos oddiy ko'rinishda, hech qanday nur taratmayapti.` : `⚠️ filter: none: Crystal is sleeping with no light radiating.`)
      : (isUz ? `✨ filter: ${filterStr}: Olmos atrofida ajoyib neon aura charaqlamoqda!` : `✨ filter: ${filterStr}: Neon halo aura perfectly wraps the crystal!`);
  }

  sShadow.addEventListener('input', update);
  inColor.addEventListener('input', update);
  sBlur.addEventListener('input', update);
  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
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
