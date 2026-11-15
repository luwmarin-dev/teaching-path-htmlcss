/**
 * Interactive Flexbox Lab
 * Kids can click buttons to align cute emoji characters and understand
 * justify-content, align-items, flex-direction, and gap visually!
 */

export function renderFlexboxLab(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="lab-container">
      <div class="lab-header">
        <h3>🧩 The Flexbox LEGO Playground</h3>
        <p>Click the buttons below to command your team of cyber-buddies to snap into place!</p>
      </div>

      <div class="lab-grid">
        <!-- Controls -->
        <div class="lab-controls">
          <div class="control-group">
            <label><strong>justify-content (Horizontal Lineup)</strong></label>
            <div class="btn-pill-group" id="group-justify">
              <button class="btn-pill active" data-val="center">center</button>
              <button class="btn-pill" data-val="space-between">space-between</button>
              <button class="btn-pill" data-val="space-around">space-around</button>
              <button class="btn-pill" data-val="flex-start">flex-start</button>
              <button class="btn-pill" data-val="flex-end">flex-end</button>
            </div>
          </div>

          <div class="control-group">
            <label><strong>align-items (Vertical Alignment)</strong></label>
            <div class="btn-pill-group" id="group-align">
              <button class="btn-pill active" data-val="center">center</button>
              <button class="btn-pill" data-val="flex-start">flex-start (top)</button>
              <button class="btn-pill" data-val="flex-end">flex-end (bottom)</button>
            </div>
          </div>

          <div class="control-group">
            <label><strong>flex-direction (Row or Column)</strong></label>
            <div class="btn-pill-group" id="group-dir">
              <button class="btn-pill active" data-val="row">row (horizontal 👉)</button>
              <button class="btn-pill" data-val="column">column (vertical 👇)</button>
              <button class="btn-pill" data-val="row-reverse">row-reverse (👈)</button>
            </div>
          </div>

          <div class="control-group">
            <label><strong>gap (Air Space Between)</strong>: <span id="val-gap">20px</span></label>
            <input type="range" id="slider-gap" min="0" max="50" value="20" />
          </div>

          <div class="lab-code-output">
            <div class="code-header">
              <span>Generated CSS</span>
              <button id="btn-copy-flex-css" class="btn-sm">📋 Copy CSS</button>
            </div>
            <pre><code id="flex-css-code">.parent-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
}</code></pre>
          </div>
        </div>

        <!-- Visual Stage -->
        <div class="lab-stage flex-stage-wrapper">
          <div class="flex-stage" id="flex-stage">
            <div class="flex-creature" style="background: #ff4757;">
              <span class="creature-icon">🤖</span>
              <span class="creature-name">Bot</span>
            </div>
            <div class="flex-creature" style="background: #2ed573;">
              <span class="creature-icon">🐱</span>
              <span class="creature-name">Kitten</span>
            </div>
            <div class="flex-creature" style="background: #1e90ff;">
              <span class="creature-icon">🚀</span>
              <span class="creature-name">Rocket</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  let justify = 'center';
  let align = 'center';
  let direction = 'row';
  let gap = '20px';

  const stage = container.querySelector('#flex-stage');
  const codeEl = container.querySelector('#flex-css-code');
  const sGap = container.querySelector('#slider-gap');
  const vGap = container.querySelector('#val-gap');
  const btnCopy = container.querySelector('#btn-copy-flex-css');

  function update() {
    stage.style.justifyContent = justify;
    stage.style.alignItems = align;
    stage.style.flexDirection = direction;
    stage.style.gap = gap;

    codeEl.textContent = `.parent-container {\n  display: flex;\n  justify-content: ${justify};\n  align-items: ${align};\n  flex-direction: ${direction};\n  gap: ${gap};\n}`;
  }

  function handlePillGroup(groupId, onChange) {
    const pills = container.querySelectorAll(`#${groupId} .btn-pill`);
    pills.forEach(btn => {
      btn.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        onChange(btn.getAttribute('data-val'));
        update();
      });
    });
  }

  handlePillGroup('group-justify', val => { justify = val; });
  handlePillGroup('group-align', val => { align = val; });
  handlePillGroup('group-dir', val => { direction = val; });

  sGap.addEventListener('input', () => {
    gap = `${sGap.value}px`;
    vGap.textContent = gap;
    update();
  });

  btnCopy.addEventListener('click', () => {
    navigator.clipboard?.writeText(codeEl.textContent);
    btnCopy.textContent = '✅ Copied!';
    setTimeout(() => {
      btnCopy.textContent = '📋 Copy CSS';
    }, 1500);
  });

  update();
}
