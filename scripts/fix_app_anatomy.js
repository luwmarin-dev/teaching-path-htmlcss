import fs from 'fs';

// 1. Update html-css/src/app.js: renderAnatomySection resilience
let app = fs.readFileSync('html-css/src/app.js', 'utf8');

const oldAnatomyRender = `function renderAnatomySection(lesson) {
  if (!lesson.anatomy || lesson.anatomy.length === 0) return '';

  return \`
    <div class="step-breakdown-card">
      <div class="step-card-header">
        <div class="step-header-text">
          <span style="font-size: 16px;">🧩</span>
          <h3>\${escapeHtml(t('stepBreakdownHeader', state.lang))}</h3>
        </div>
        <span class="step-count-pill">\${lesson.anatomy.length} \${escapeHtml(state.lang === 'uz' ? 'qadam' : 'steps')}</span>
      </div>
      <div class="step-grid">
        \${lesson.anatomy.map((step, idx) => \`
          <div class="step-item">
            <div class="step-top-row">
              <span class="step-num-badge">\${escapeHtml(state.lang === 'uz' ? (idx + 1) + '-Qadam' : 'Step ' + (idx + 1))}</span>
              <span class="step-role-badge">\${escapeHtml(localize(step.role, state.lang))}</span>
            </div>
            <div class="step-code-focus">
              <code class="step-code-chip">\${escapeHtml(step.part)}</code>
            </div>
            <div class="step-explanation">\${formatProse(localize(step.explanation, state.lang))}</div>
            <div class="step-result-box">
              <div class="step-result-heading">
                <span>👉</span>
                <strong>\${escapeHtml(t('resultCallout', state.lang))}</strong>
                <span>\${formatProse(localize(step.effect, state.lang))}</span>
              </div>
              \${step.visualPreview ? \`<div class="step-visual-render">\${step.visualPreview}</div>\` : ''}
            </div>
          </div>
        \`).join('')}
      </div>
    </div>
  \`;
}`;

const newAnatomyRender = `function renderAnatomySection(lesson) {
  if (!lesson.anatomy || lesson.anatomy.length === 0) return '';

  return \`
    <div class="step-breakdown-card">
      <div class="step-card-header">
        <div class="step-header-text">
          <span style="font-size: 16px;">🧩</span>
          <h3>\${escapeHtml(t('stepBreakdownHeader', state.lang))}</h3>
        </div>
        <span class="step-count-pill">\${lesson.anatomy.length} \${escapeHtml(state.lang === 'uz' ? 'qadam' : 'steps')}</span>
      </div>
      <div class="step-grid">
        \${lesson.anatomy.map((step, idx) => {
          const part = step.part || step.code || '';
          const role = step.role || step.name || '';
          const explanation = step.explanation || step.purpose || step.description || '';
          const effect = step.effect || step.purpose || step.description || '';

          return \`
          <div class="step-item">
            <div class="step-top-row">
              <span class="step-num-badge">\${escapeHtml(state.lang === 'uz' ? (idx + 1) + '-Qadam' : 'Step ' + (idx + 1))}</span>
              <span class="step-role-badge">\${escapeHtml(localize(role, state.lang))}</span>
            </div>
            <div class="step-code-focus">
              <code class="step-code-chip">\${escapeHtml(part)}</code>
            </div>
            <div class="step-explanation">\${formatProse(localize(explanation, state.lang))}</div>
            <div class="step-result-box">
              <div class="step-result-heading">
                <span>👉</span>
                <strong>\${escapeHtml(t('resultCallout', state.lang))}</strong>
                <span>\${formatProse(localize(effect, state.lang))}</span>
              </div>
              \${step.visualPreview ? \`<div class="step-visual-render">\${step.visualPreview}</div>\` : ''}
            </div>
          </div>
        \`;
        }).join('')}
      </div>
    </div>
  \`;
}`;

app = app.replace(oldAnatomyRender, newAnatomyRender);
fs.writeFileSync('html-css/src/app.js', app, 'utf8');
console.log('Updated app.js renderAnatomySection!');
