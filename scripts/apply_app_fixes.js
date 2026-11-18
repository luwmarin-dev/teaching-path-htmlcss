import fs from 'fs';

let app = fs.readFileSync('html-css/src/app.js', 'utf8');

// 1. Fix preview-tabs HTML (duplicate id="tab-live" -> id="tab-combo")
app = app.replace(
  `<button id="tab-live" class="prev-tab-btn \${activePreviewTab === 'live' ? 'active' : ''}" title="\${state.lang === 'uz' ? 'Elementlar va Natija birgalikda' : 'Elements & Result together'}">\${escapeHtml(t('comboViewTab', state.lang))}</button>`,
  `<button id="tab-combo" class="prev-tab-btn \${activePreviewTab === 'combo' ? 'active' : ''}" title="\${state.lang === 'uz' ? 'Elementlar va Natija birgalikda' : 'Elements & Result together'}">\${escapeHtml(t('comboViewTab', state.lang))}</button>`
);

// 2. Enhance setupPaneResizer
const oldResizerFunc = `function setupPaneResizer() {
  const resizer = document.getElementById('pane-resizer');
  const split = document.getElementById('editor-stage-split');
  const editorPane = document.getElementById('pane-card-editor');
  const previewPane = document.getElementById('pane-card-preview');
  if (!resizer || !split || !editorPane || !previewPane) return;

  let isDragging = false;

  const onPointerDown = (e) => {
    isDragging = true;
    resizer.classList.add('is-resizing');
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    try {
      resizer.setPointerCapture(e.pointerId);
    } catch (_) {}
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const rect = split.getBoundingClientRect();
    const isSwapped = split.classList.contains('panes-swapped');
    let x = e.clientX - rect.left;
    let pct = (x / rect.width) * 100;
    if (isSwapped) pct = 100 - pct;
    pct = Math.max(15, Math.min(85, pct));
    const otherPct = 100 - pct;

    editorPane.style.flex = \`0 0 calc(\${pct}% - 5px)\`;
    editorPane.style.width = \`calc(\${pct}% - 5px)\`;
    previewPane.style.flex = \`0 0 calc(\${otherPct}% - 5px)\`;
    previewPane.style.width = \`calc(\${otherPct}% - 5px)\`;
  };

  const onPointerUp = (e) => {
    if (!isDragging) return;
    isDragging = false;
    resizer.classList.remove('is-resizing');
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
    try {
      resizer.releasePointerCapture(e.pointerId);
    } catch (_) {}
  };

  resizer.addEventListener('pointerdown', onPointerDown);
  resizer.addEventListener('pointermove', onPointerMove);
  resizer.addEventListener('pointerup', onPointerUp);
  resizer.addEventListener('pointercancel', onPointerUp);
}`;

const newResizerFunc = `function setupPaneResizer() {
  const resizer = document.getElementById('pane-resizer');
  const split = document.getElementById('editor-stage-split');
  const editorPane = document.getElementById('pane-card-editor');
  const previewPane = document.getElementById('pane-card-preview');
  if (!resizer || !split || !editorPane || !previewPane) return;

  let isDragging = false;
  let startX = 0;
  let didMove = false;

  const resetPanes = () => {
    editorPane.style.flex = '1 1 0%';
    editorPane.style.width = '';
    previewPane.style.flex = '1 1 0%';
    previewPane.style.width = '';
    playSound('click', state.audioEnabled);
  };

  const knob = resizer.querySelector('.resizer-knob');
  knob?.addEventListener('click', (e) => {
    e.stopPropagation();
    resetPanes();
  });

  const onPointerDown = (e) => {
    isDragging = true;
    didMove = false;
    startX = e.clientX;
    resizer.classList.add('is-resizing');
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    document.querySelectorAll('iframe').forEach(f => {
      f.style.pointerEvents = 'none';
    });
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    if (Math.abs(e.clientX - startX) > 3) {
      didMove = true;
    }
    const rect = split.getBoundingClientRect();
    const isSwapped = split.classList.contains('panes-swapped');
    let x = e.clientX - rect.left;
    let pct = (x / rect.width) * 100;
    if (isSwapped) pct = 100 - pct;
    pct = Math.max(15, Math.min(85, pct));
    const otherPct = 100 - pct;

    editorPane.style.flex = \`0 0 calc(\${pct}% - 5px)\`;
    editorPane.style.width = \`calc(\${pct}% - 5px)\`;
    previewPane.style.flex = \`0 0 calc(\${otherPct}% - 5px)\`;
    previewPane.style.width = \`calc(\${otherPct}% - 5px)\`;
  };

  const onPointerUp = (e) => {
    if (!isDragging) return;
    isDragging = false;
    resizer.classList.remove('is-resizing');
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
    document.querySelectorAll('iframe').forEach(f => {
      f.style.pointerEvents = '';
    });
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerUp);

    // If clicked without dragging, treat as 50/50 reset
    if (!didMove) {
      resetPanes();
    }
  };

  resizer.addEventListener('pointerdown', onPointerDown);
}`;

app = app.replace(oldResizerFunc, newResizerFunc);

// 3. Fix Direct Code Mode toggle behavior in sidebar:
// When toggled on -> smooth scroll to editor; when toggled off -> scroll to top
app = app.replace(
  `elements.btnToggleEditorMode?.addEventListener('click', () => {
    state = toggleEditorFirstMode(state);
    saveStateToStorage(state);
    playSound('click', state.audioEnabled);
    updateEditorModeUI();
    if (state.editorFirstMode) {
      document.querySelector('.editor-stage-split')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.getElementById('code-textarea')?.focus();
    }
  });`,
  `elements.btnToggleEditorMode?.addEventListener('click', () => {
    state = toggleEditorFirstMode(state);
    saveStateToStorage(state);
    playSound('click', state.audioEnabled);
    updateEditorModeUI();
    if (state.editorFirstMode) {
      document.querySelector('.editor-stage-split')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.getElementById('code-textarea')?.focus();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.querySelector('.lesson-workspace')?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });`
);

fs.writeFileSync('html-css/src/app.js', app, 'utf8');
console.log('Successfully updated html-css/src/app.js');
