/**
 * Interactive Box Model Lab
 * A hands-on visual toy where kids can drag sliders for Margin, Border, and Padding
 * and see the layers expand and contract with live CSS output!
 */

export function renderBoxModelLab(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="lab-container">
      <div class="lab-header">
        <h3>📦 The Box Model Playground</h3>
        <p>Drag the sliders below to see how Margin, Border, and Padding change the box!</p>
      </div>

      <div class="lab-grid">
        <!-- Controls -->
        <div class="lab-controls">
          <div class="control-group margin-ctrl">
            <label>
              <span class="ctrl-dot dot-margin"></span>
              <strong>Margin (Personal Space)</strong>: <span id="val-margin">24px</span>
            </label>
            <input type="range" id="slider-margin" min="0" max="50" value="24" />
          </div>

          <div class="control-group border-ctrl">
            <label>
              <span class="ctrl-dot dot-border"></span>
              <strong>Border (Cardboard Wall)</strong>: <span id="val-border">6px</span>
            </label>
            <input type="range" id="slider-border" min="0" max="20" value="6" />
          </div>

          <div class="control-group padding-ctrl">
            <label>
              <span class="ctrl-dot dot-padding"></span>
              <strong>Padding (Bubble Wrap)</strong>: <span id="val-padding">24px</span>
            </label>
            <input type="range" id="slider-padding" min="4" max="50" value="24" />
          </div>

          <div class="control-group radius-ctrl">
            <label>
              <span class="ctrl-dot dot-radius"></span>
              <strong>Corner Curve (Radius)</strong>: <span id="val-radius">16px</span>
            </label>
            <input type="range" id="slider-radius" min="0" max="40" value="16" />
          </div>

          <div class="lab-code-output">
            <div class="code-header">
              <span>Generated CSS</span>
              <button id="btn-copy-box-css" class="btn-sm">📋 Copy CSS</button>
            </div>
            <pre><code id="box-css-code">.my-box {
  margin: 24px;
  border: 6px solid #fbc531;
  padding: 24px;
  border-radius: 16px;
}</code></pre>
          </div>
        </div>

        <!-- Visual Box Diagram -->
        <div class="lab-stage">
          <div class="box-layer layer-margin" id="box-margin">
            <span class="layer-tag tag-margin">Margin</span>
            <div class="box-layer layer-border" id="box-border">
              <span class="layer-tag tag-border">Border</span>
              <div class="box-layer layer-padding" id="box-padding">
                <span class="layer-tag tag-padding">Padding</span>
                <div class="box-layer layer-content" id="box-content">
                  <span class="layer-tag tag-content">Content</span>
                  <div class="content-preview">
                    <span style="font-size: 32px;">🎁</span>
                    <p style="margin: 4px 0 0; font-weight: bold;">Super Gift Box</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach interactive listeners
  const sMargin = container.querySelector('#slider-margin');
  const sBorder = container.querySelector('#slider-border');
  const sPadding = container.querySelector('#slider-padding');
  const sRadius = container.querySelector('#slider-radius');

  const vMargin = container.querySelector('#val-margin');
  const vBorder = container.querySelector('#val-border');
  const vPadding = container.querySelector('#val-padding');
  const vRadius = container.querySelector('#val-radius');

  const bMargin = container.querySelector('#box-margin');
  const bBorder = container.querySelector('#box-border');
  const bPadding = container.querySelector('#box-padding');
  const bCode = container.querySelector('#box-css-code');
  const btnCopy = container.querySelector('#btn-copy-box-css');

  function update() {
    const m = sMargin.value;
    const b = sBorder.value;
    const p = sPadding.value;
    const r = sRadius.value;

    vMargin.textContent = `${m}px`;
    vBorder.textContent = `${b}px`;
    vPadding.textContent = `${p}px`;
    vRadius.textContent = `${r}px`;

    bMargin.style.padding = `${m}px`;
    bBorder.style.padding = `${b}px`;
    bPadding.style.padding = `${p}px`;
    bBorder.style.borderRadius = `${r}px`;

    const cssText = `.my-box {\n  margin: ${m}px;\n  border: ${b}px solid #fbc531;\n  padding: ${p}px;\n  border-radius: ${r}px;\n}`;
    bCode.textContent = cssText;
  }

  [sMargin, sBorder, sPadding, sRadius].forEach(slider => {
    slider.addEventListener('input', update);
  });

  btnCopy.addEventListener('click', () => {
    navigator.clipboard?.writeText(bCode.textContent);
    btnCopy.textContent = '✅ Copied!';
    setTimeout(() => {
      btnCopy.textContent = '📋 Copy CSS';
    }, 1500);
  });

  update();
}
