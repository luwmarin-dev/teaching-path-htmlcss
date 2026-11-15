/**
 * Interactive CSS Grid Lab
 * A hands-on visual toy where kids can switch columns and gap
 * and see a 2D game inventory or matrix snap into place with live CSS output!
 */

export function renderGridLab(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="lab-container">
      <div class="lab-header">
        <h3>🏁 The CSS Grid 2D World</h3>
        <p>Command your 2D game inventory! Switch columns and slide the gap to watch items snap into place!</p>
      </div>

      <div class="lab-grid">
        <!-- Controls -->
        <div class="lab-controls">
          <div class="control-group">
            <label><strong>grid-template-columns (Columns)</strong></label>
            <div class="btn-pill-group" id="grid-col-group">
              <button class="btn-pill" data-cols="1">1 Column</button>
              <button class="btn-pill" data-cols="2">2 Columns</button>
              <button class="btn-pill active" data-cols="3">3 Columns</button>
              <button class="btn-pill" data-cols="4">4 Columns</button>
            </div>
          </div>

          <div class="control-group">
            <label><strong>gap (Spacing Between Boxes)</strong>: <span id="val-grid-gap">16px</span></label>
            <input type="range" id="slider-grid-gap" min="0" max="40" value="16" />
          </div>

          <div class="control-group">
            <label><strong>Theme Accent Color</strong></label>
            <div class="btn-pill-group" id="grid-theme-group">
              <button class="btn-pill active" data-color="#5b5fc7" style="border-color: #5b5fc7;">Cyber Indigo</button>
              <button class="btn-pill" data-color="#2dd4bf" style="border-color: #2dd4bf;">Emerald Glow</button>
              <button class="btn-pill" data-color="#ff5e7e" style="border-color: #ff5e7e;">Neon Rose</button>
              <button class="btn-pill" data-color="#fbbf24" style="border-color: #fbbf24;">Sun Gold</button>
            </div>
          </div>

          <div class="lab-code-output">
            <div class="code-header">
              <span>Generated CSS</span>
              <button id="btn-copy-grid-css" class="btn-sm">📋 Copy CSS</button>
            </div>
            <pre><code id="grid-css-code">.game-inventory {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}</code></pre>
          </div>
        </div>

        <!-- Stage Preview -->
        <div class="lab-stage">
          <div class="grid-board" id="grid-board">
            <div class="grid-slot"><span class="slot-icon">🗡️</span><span class="slot-label">Sword</span></div>
            <div class="grid-slot"><span class="slot-icon">🛡️</span><span class="slot-label">Shield</span></div>
            <div class="grid-slot"><span class="slot-icon">🧪</span><span class="slot-label">Potion</span></div>
            <div class="grid-slot"><span class="slot-icon">💎</span><span class="slot-label">Diamond</span></div>
            <div class="grid-slot"><span class="slot-icon">🏹</span><span class="slot-label">Bow</span></div>
            <div class="grid-slot"><span class="slot-icon">👑</span><span class="slot-label">Crown</span></div>
            <div class="grid-slot"><span class="slot-icon">🔮</span><span class="slot-label">Crystal</span></div>
            <div class="grid-slot"><span class="slot-icon">🪙</span><span class="slot-label">Coins</span></div>
          </div>
        </div>
      </div>
    </div>
  `;

  let currentCols = 3;
  let currentGap = 16;
  let currentAccent = '#5b5fc7';

  const board = container.querySelector('#grid-board');
  const codeEl = container.querySelector('#grid-css-code');
  const gapVal = container.querySelector('#val-grid-gap');
  const gapSlider = container.querySelector('#slider-grid-gap');
  const copyBtn = container.querySelector('#btn-copy-grid-css');

  function updateGrid() {
    if (!board) return;
    board.style.display = 'grid';
    board.style.gridTemplateColumns = `repeat(${currentCols}, 1fr)`;
    board.style.gap = `${currentGap}px`;

    const slots = board.querySelectorAll('.grid-slot');
    slots.forEach(s => {
      s.style.borderColor = currentAccent;
      s.style.boxShadow = `0 4px 15px ${currentAccent}22`;
    });

    if (codeEl) {
      codeEl.textContent = `.game-inventory {\n  display: grid;\n  grid-template-columns: repeat(${currentCols}, 1fr);\n  gap: ${currentGap}px;\n}`;
    }
  }

  // Column pills
  const colPills = container.querySelectorAll('#grid-col-group .btn-pill');
  colPills.forEach(pill => {
    pill.addEventListener('click', () => {
      colPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCols = parseInt(pill.getAttribute('data-cols'), 10) || 3;
      updateGrid();
    });
  });

  // Gap slider
  gapSlider?.addEventListener('input', (e) => {
    currentGap = e.target.value;
    if (gapVal) gapVal.textContent = `${currentGap}px`;
    updateGrid();
  });

  // Theme accent pills
  const themePills = container.querySelectorAll('#grid-theme-group .btn-pill');
  themePills.forEach(pill => {
    pill.addEventListener('click', () => {
      themePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentAccent = pill.getAttribute('data-color') || '#5b5fc7';
      updateGrid();
    });
  });

  // Copy button
  copyBtn?.addEventListener('click', () => {
    if (codeEl) {
      navigator.clipboard.writeText(codeEl.textContent).then(() => {
        copyBtn.textContent = '✅ Copied!';
        setTimeout(() => { copyBtn.textContent = '📋 Copy CSS'; }, 1800);
      });
    }
  });

  updateGrid();
}
