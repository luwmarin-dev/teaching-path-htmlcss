/**
 * Interactive Color & Gradient Lab
 * Kids can mix colors, pick vibrant presets, create gradients,
 * and copy the exact CSS color codes directly into their code editor!
 */

export function renderColorLab(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="lab-container">
      <div class="lab-header">
        <h3>🎨 The Magical Color & Gradient Mixer</h3>
        <p>Pick a superhero color preset or mix your own custom gradient with the sliders!</p>
      </div>

      <div class="lab-grid">
        <!-- Controls -->
        <div class="lab-controls">
          <div class="control-group">
            <label><strong>Quick Superhero Color Palettes</strong></label>
            <div class="color-preset-grid" id="preset-grid">
              <button class="preset-btn" data-c1="#ff007f" data-c2="#00f2fe" style="background: linear-gradient(135deg, #ff007f, #00f2fe)">Cyberpunk</button>
              <button class="preset-btn" data-c1="#ff9f43" data-c2="#ee5253" style="background: linear-gradient(135deg, #ff9f43, #ee5253)">Solar Flare</button>
              <button class="preset-btn" data-c1="#10ac84" data-c2="#1dd1a1" style="background: linear-gradient(135deg, #10ac84, #1dd1a1)">Alien Slime</button>
              <button class="preset-btn" data-c1="#5f27cd" data-c2="#341f97" style="background: linear-gradient(135deg, #5f27cd, #341f97)">Cosmic Night</button>
              <button class="preset-btn" data-c1="#ff9ff3" data-c2="#54a0ff" style="background: linear-gradient(135deg, #ff9ff3, #54a0ff)">Cotton Candy</button>
              <button class="preset-btn" data-c1="#feca57" data-c2="#ff6b6b" style="background: linear-gradient(135deg, #feca57, #ff6b6b)">Golden Flame</button>
            </div>
          </div>

          <div class="control-group">
            <label><strong>Color 1 (Start)</strong>: <span id="val-c1">#ff007f</span></label>
            <input type="color" id="input-c1" value="#ff007f" class="color-input" />
          </div>

          <div class="control-group">
            <label><strong>Color 2 (Finish)</strong>: <span id="val-c2">#00f2fe</span></label>
            <input type="color" id="input-c2" value="#00f2fe" class="color-input" />
          </div>

          <div class="control-group">
            <label><strong>Gradient Angle</strong>: <span id="val-angle">135deg</span></label>
            <input type="range" id="slider-angle" min="0" max="360" value="135" />
          </div>

          <div class="lab-code-output">
            <div class="code-header">
              <span>Generated CSS</span>
              <button id="btn-copy-color-css" class="btn-sm">📋 Copy CSS</button>
            </div>
            <pre><code id="color-css-code">background: linear-gradient(135deg, #ff007f, #00f2fe);
color: white;</code></pre>
          </div>
        </div>

        <!-- Preview Card -->
        <div class="lab-stage flex-stage-wrapper">
          <div class="color-preview-card" id="color-card">
            <div class="color-card-badge">SUPER POWER</div>
            <div style="font-size: 55px; margin: 15px 0;">🦄</div>
            <h2 style="margin: 0;">Rainbow Sparkle</h2>
            <p style="opacity: 0.9; margin: 8px 0 0;">This card uses your custom gradient colors!</p>
          </div>
        </div>
      </div>
    </div>
  `;

  let c1 = '#ff007f';
  let c2 = '#00f2fe';
  let angle = 135;

  const inC1 = container.querySelector('#input-c1');
  const inC2 = container.querySelector('#input-c2');
  const sAngle = container.querySelector('#slider-angle');
  const vC1 = container.querySelector('#val-c1');
  const vC2 = container.querySelector('#val-c2');
  const vAngle = container.querySelector('#val-angle');
  const card = container.querySelector('#color-card');
  const codeEl = container.querySelector('#color-css-code');
  const btnCopy = container.querySelector('#btn-copy-color-css');

  function update() {
    vC1.textContent = c1;
    vC2.textContent = c2;
    vAngle.textContent = `${angle}deg`;
    inC1.value = c1;
    inC2.value = c2;
    sAngle.value = angle;

    const grad = `linear-gradient(${angle}deg, ${c1}, ${c2})`;
    card.style.background = grad;
    card.style.boxShadow = `0 15px 35px rgba(0,0,0,0.3), 0 0 25px ${c1}66`;

    codeEl.textContent = `background: ${grad};\ncolor: #ffffff;\nborder-radius: 20px;`;
  }

  inC1.addEventListener('input', (e) => {
    c1 = e.target.value;
    update();
  });

  inC2.addEventListener('input', (e) => {
    c2 = e.target.value;
    update();
  });

  sAngle.addEventListener('input', (e) => {
    angle = e.target.value;
    update();
  });

  const presetBtns = container.querySelectorAll('.preset-btn');
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      c1 = btn.getAttribute('data-c1');
      c2 = btn.getAttribute('data-c2');
      update();
    });
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
