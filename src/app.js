/**
 * CodeCraft Kids Main Application Controller
 * Focused, uncluttered, step-by-step educational interface.
 */

import { MODULES, LESSONS, getLessonById } from './modules/curriculum.js';
import { validateChallenge } from './modules/validator.js';
import {
  createInitialState,
  completeLesson,
  isLessonCompleted,
  saveStateToStorage,
  loadStateFromStorage
} from './modules/state.js';
import { playSound } from './modules/audio.js';
import { triggerConfetti } from './modules/confetti.js';
import { TEMPLATES, downloadHtmlFile } from './modules/sandbox.js';

// Application State
let state = loadStateFromStorage();
let currentView = 'lesson'; // 'lesson' | 'sandbox'
let activePreviewTab = 'live'; // 'live' | 'target' | 'side'
let currentCode = '';

// DOM Elements Cache
const elements = {};

export function initApp() {
  cacheElements();
  attachGlobalListeners();
  applyStateToUI();
  selectLesson(state.currentLessonId || LESSONS[0].id);
}

function cacheElements() {
  elements.app = document.body;
  elements.starCount = document.getElementById('star-count');
  elements.btnAudio = document.getElementById('btn-audio');
  elements.btnTeacher = document.getElementById('btn-teacher');
  elements.btnSandbox = document.getElementById('btn-sandbox');

  elements.sidebarLessonList = document.getElementById('sidebar-lesson-list');
  elements.progressFill = document.getElementById('progress-fill');
  elements.progressText = document.getElementById('progress-text');

  elements.workspaceStage = document.getElementById('workspace-stage');
  elements.confettiCanvas = document.getElementById('confetti-canvas');
}

function attachGlobalListeners() {
  // Audio toggle
  elements.btnAudio?.addEventListener('click', () => {
    state.audioEnabled = !state.audioEnabled;
    saveStateToStorage(state);
    elements.btnAudio.textContent = state.audioEnabled ? '🔊 Sound: ON' : '🔇 Sound: OFF';
    playSound('click', state.audioEnabled);
  });

  // Teacher Mode toggle
  elements.btnTeacher?.addEventListener('click', () => {
    state.teacherMode = !state.teacherMode;
    saveStateToStorage(state);
    elements.btnTeacher.classList.toggle('active', state.teacherMode);
    playSound('click', state.audioEnabled);
    const box = document.getElementById('teacher-playbook-box');
    if (box) {
      box.style.display = state.teacherMode ? 'block' : 'none';
    }
  });

  // Free Sandbox toggle
  elements.btnSandbox?.addEventListener('click', () => {
    currentView = currentView === 'sandbox' ? 'lesson' : 'sandbox';
    elements.btnSandbox.classList.toggle('active', currentView === 'sandbox');
    playSound('click', state.audioEnabled);

    if (currentView === 'sandbox') {
      renderSandboxView();
    } else {
      renderLessonView();
    }
  });

  // Brand click -> Return to lessons
  document.querySelector('.brand')?.addEventListener('click', () => {
    currentView = 'lesson';
    elements.btnSandbox?.classList.remove('active');
    playSound('click', state.audioEnabled);
    selectLesson(LESSONS[0].id);
  });
}

function applyStateToUI() {
  if (elements.starCount) elements.starCount.textContent = `⭐ ${state.stars}`;
  if (elements.btnTeacher) elements.btnTeacher.classList.toggle('active', state.teacherMode);
  if (elements.btnAudio) elements.btnAudio.textContent = state.audioEnabled ? '🔊 Sound: ON' : '🔇 Sound: OFF';
  updateProgressUI();
  renderSidebar();
}

function updateProgressUI() {
  const total = LESSONS.length;
  const completed = state.completedLessons.length;
  const percent = Math.round((completed / total) * 100);

  if (elements.progressFill) elements.progressFill.style.width = `${percent}%`;
  if (elements.progressText) elements.progressText.textContent = `${completed} / ${total} Lessons (${percent}%)`;
}

function renderSidebar() {
  if (!elements.sidebarLessonList) return;

  let html = '';
  MODULES.forEach(mod => {
    const modLessons = LESSONS.filter(l => l.module === mod.id);
    if (modLessons.length === 0) return;

    html += `<div class="nav-section-title">${mod.title}</div>`;
    html += `<ul class="lesson-list">`;
    modLessons.forEach(lesson => {
      const isCompleted = isLessonCompleted(state, lesson.id);
      const isActive = currentView === 'lesson' && state.currentLessonId === lesson.id;
      html += `
        <li class="lesson-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" data-lesson-id="${lesson.id}">
          <span class="lesson-item-icon">${lesson.icon}</span>
          <span class="lesson-item-text">${lesson.title}</span>
        </li>
      `;
    });
    html += `</ul>`;
  });

  elements.sidebarLessonList.innerHTML = html;

  const items = elements.sidebarLessonList.querySelectorAll('.lesson-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const lessonId = item.getAttribute('data-lesson-id');
      currentView = 'lesson';
      elements.btnSandbox?.classList.remove('active');
      playSound('click', state.audioEnabled);
      selectLesson(lessonId);
    });
  });
}

export function selectLesson(lessonId) {
  const lesson = getLessonById(lessonId) || LESSONS[0];
  state.currentLessonId = lesson.id;
  currentCode = lesson.initialCode;
  saveStateToStorage(state);

  renderSidebar();
  renderLessonView();
}

/**
 * Wraps bare student snippets cleanly so kids never have to write HTML boilerplate!
 */
function wrapForPreview(snippet) {
  if (snippet.includes('<!DOCTYPE') || snippet.includes('<html')) {
    return snippet;
  }

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 24px;
      background: #0f1019;
      color: #f1f5f9;
      line-height: 1.6;
    }
    h1, h2, h3, h4 { margin-top: 0; color: #ffffff; }
    p { margin-bottom: 16px; color: #cbd5e1; }
    button {
      background: #7c6cf7;
      color: #ffffff;
      border: none;
      padding: 10px 18px;
      font-size: 15px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 700;
      margin-right: 8px;
      margin-bottom: 8px;
    }
    button:hover { background: #6957ea; }
    ul, ol { padding-left: 24px; margin-bottom: 16px; }
    li { margin-bottom: 6px; }
    a { color: #38bdf8; text-decoration: underline; }
    img { max-width: 100%; height: auto; border-radius: 8px; }
  </style>
</head>
<body>
  ${snippet}
</body>
</html>`;
}

// ===================================================================
// Lesson View Rendering
// ===================================================================
function renderLessonView() {
  const lesson = getLessonById(state.currentLessonId);
  if (!lesson) return;

  const isCompleted = isLessonCompleted(state, lesson.id);

  elements.workspaceStage.innerHTML = `
    <!-- Lesson Header Banner -->
    <div class="lesson-banner">
      <div>
        <div class="banner-meta">
          <span class="badge-module">${lesson.module.toUpperCase()}</span>
          <span class="badge-tags">${lesson.tag}</span>
          ${isCompleted ? '<span style="color: var(--accent-green); font-weight: 800; font-size: 12px;">✅ Completed!</span>' : ''}
        </div>
        <h2 class="banner-title">${lesson.icon} ${lesson.title}</h2>
        <p class="banner-summary">${lesson.summary}</p>
      </div>
    </div>

    <!-- Teacher Coaching Playbook (Toggleable) -->
    <div id="teacher-playbook-box" class="teacher-playbook" style="${state.teacherMode ? 'display:block' : 'display:none'}">
      <h4>🧑‍🏫 Teacher Coaching Guide</h4>
      <div class="teacher-playbook-grid">
        <div class="teacher-item">
          <strong>💡 Kid Analogy:</strong>
          <span>${lesson.teacherGuide.analogy}</span>
        </div>
        <div class="teacher-item">
          <strong>🗣️ Question to Ask Aloud:</strong>
          <span>${lesson.teacherGuide.discussionQuestions[0] || ''}</span>
        </div>
        <div class="teacher-item">
          <strong>⚠️ Watch Out For:</strong>
          <span>${lesson.teacherGuide.commonMistakes[0] || ''}</span>
        </div>
      </div>
    </div>

    <!-- STEP-BY-STEP CODE BREAKDOWN: What Every Part Does to the Result -->
    ${renderAnatomySection(lesson)}

    <!-- Editor & Live Preview Split -->
    <div class="editor-stage-split">
      <!-- Left: Code Studio -->
      <div class="pane-card">
        <div class="pane-header">
          <div class="pane-title">
            <span>💻</span> Code (Edit Here)
          </div>
          <div class="pane-tools">
            <button id="btn-reset-code" class="btn-tool" title="Reset back to example">🔄 Reset</button>
            <button id="btn-copy-code" class="btn-tool" title="Copy code">📋 Copy</button>
          </div>
        </div>

        <!-- Quick Tag Shortcuts -->
        <div class="quick-tags-bar">
          <span class="quick-tag-label">Tags:</span>
          ${lesson.quickTags.map(t => `<button class="tag-chip" data-tag="${t}">${escapeHtml(t)}</button>`).join('')}
        </div>

        <!-- Code Editor -->
        <div class="code-editor-wrapper">
          <div id="line-numbers" class="editor-line-numbers">1</div>
          <textarea id="code-textarea" class="code-textarea" spellcheck="false">${currentCode}</textarea>
        </div>
      </div>

      <!-- Right: Preview Stage -->
      <div class="pane-card">
        <div class="pane-header">
          <div class="pane-title">
            <span>👁️</span> What the Browser Draws
          </div>
          <div class="preview-tabs">
            <button id="tab-live" class="prev-tab-btn active">Your Result</button>
            <button id="tab-target" class="prev-tab-btn">🎯 Target Goal</button>
            <button id="tab-side" class="prev-tab-btn">⚖️ Compare</button>
          </div>
        </div>

        <div id="preview-container" class="preview-wrapper">
          <iframe id="live-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
        </div>
      </div>
    </div>

    <!-- Bottom Action Dock -->
    <div class="mission-dock">
      <div>
        <div class="mission-tag">🎯 Mission</div>
        <div class="mission-text">${lesson.challenge.mission}</div>
      </div>
      <div class="mission-actions">
        <button id="btn-hint" class="btn-hint">💡 Hint</button>
        <button id="btn-verify-mission" class="btn-verify">🚀 Check My Code!</button>
      </div>
    </div>
  `;

  setupLessonListeners(lesson);
  updateLivePreview();
  updateLineNumbers();
}

function renderAnatomySection(lesson) {
  if (!lesson.anatomy || lesson.anatomy.length === 0) return '';

  return `
    <div class="step-breakdown-card">
      <div class="step-card-header">
        <h3>🔍 Step-by-Step Breakdown: What Each Part Does to the Result</h3>
      </div>
      <div class="step-grid">
        ${lesson.anatomy.map(step => `
          <div class="step-item">
            <div class="step-part-row">
              <span class="step-code-chip">${escapeHtml(step.part)}</span>
              <span class="step-role-badge">${step.role}</span>
            </div>
            <div class="step-explanation">${step.explanation}</div>
            <div class="step-effect">
              <span>👉</span>
              <span><strong>Result:</strong> ${step.effect}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function setupLessonListeners(lesson) {
  const textarea = document.getElementById('code-textarea');

  textarea?.addEventListener('input', () => {
    currentCode = textarea.value;
    updateLivePreview();
    updateLineNumbers();
  });

  // Tab indent
  textarea?.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, start) + '  ' + textarea.value.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + 2;
      currentCode = textarea.value;
      updateLivePreview();
      updateLineNumbers();
    }
  });

  // Quick Tag chips
  const tagChips = document.querySelectorAll('.tag-chip');
  tagChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const tag = chip.getAttribute('data-tag');
      insertTextAtCursor(textarea, tag);
      playSound('click', state.audioEnabled);
    });
  });

  // Reset
  document.getElementById('btn-reset-code')?.addEventListener('click', () => {
    textarea.value = lesson.initialCode;
    currentCode = lesson.initialCode;
    updateLivePreview();
    updateLineNumbers();
    playSound('click', state.audioEnabled);
  });

  // Copy
  document.getElementById('btn-copy-code')?.addEventListener('click', () => {
    navigator.clipboard?.writeText(textarea.value);
    const btn = document.getElementById('btn-copy-code');
    btn.textContent = '✅ Copied!';
    setTimeout(() => { btn.textContent = '📋 Copy'; }, 1500);
  });

  // Preview Tabs
  setupPreviewTabs(lesson);

  // Hint
  document.getElementById('btn-hint')?.addEventListener('click', () => {
    playSound('click', state.audioEnabled);
    alert(`💡 HINT:\n\n${lesson.challenge.hint}`);
  });

  // Check code
  document.getElementById('btn-verify-mission')?.addEventListener('click', () => {
    handleChallengeVerification(lesson);
  });
}

function insertTextAtCursor(textarea, text) {
  if (!textarea) return;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  textarea.value = textarea.value.substring(0, start) + text + textarea.value.substring(end);
  textarea.selectionStart = textarea.selectionEnd = start + text.length;
  textarea.focus();
  currentCode = textarea.value;
  updateLivePreview();
  updateLineNumbers();
}

function updateLineNumbers() {
  const textarea = document.getElementById('code-textarea');
  const lineNumbers = document.getElementById('line-numbers');
  if (!textarea || !lineNumbers) return;

  const lines = textarea.value.split('\n').length;
  let numbersHtml = '';
  for (let i = 1; i <= Math.max(lines, 1); i++) {
    numbersHtml += `${i}<br>`;
  }
  lineNumbers.innerHTML = numbersHtml;
}

function updateLivePreview() {
  const iframe = document.getElementById('live-iframe');
  if (!iframe) return;

  iframe.srcdoc = wrapForPreview(currentCode);
}

function setupPreviewTabs(lesson) {
  const tabLive = document.getElementById('tab-live');
  const tabTarget = document.getElementById('tab-target');
  const tabSide = document.getElementById('tab-side');
  const previewContainer = document.getElementById('preview-container');

  function resetTabs() {
    [tabLive, tabTarget, tabSide].forEach(t => t?.classList.remove('active'));
  }

  tabLive?.addEventListener('click', () => {
    resetTabs();
    tabLive.classList.add('active');
    activePreviewTab = 'live';
    previewContainer.innerHTML = `<iframe id="live-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>`;
    updateLivePreview();
    playSound('click', state.audioEnabled);
  });

  tabTarget?.addEventListener('click', () => {
    resetTabs();
    tabTarget.classList.add('active');
    activePreviewTab = 'target';
    previewContainer.innerHTML = `
      <div class="target-view-container">
        <div class="target-explanation-box">
          <strong>🎯 What the Result Should Look Like:</strong>
          <p style="margin: 4px 0 0; white-space: pre-line;">${lesson.targetDescription}</p>
        </div>
        <iframe id="target-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
      </div>
    `;
    const targetIframe = document.getElementById('target-iframe');
    if (targetIframe) {
      targetIframe.srcdoc = wrapForPreview(lesson.targetCode);
    }
    playSound('click', state.audioEnabled);
  });

  tabSide?.addEventListener('click', () => {
    resetTabs();
    tabSide.classList.add('active');
    activePreviewTab = 'side';
    previewContainer.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; width: 100%; height: 100%;">
        <div style="border-right: 1px solid var(--border-color); display: flex; flex-direction: column;">
          <div style="background: var(--bg-surface); padding: 4px 10px; font-size: 10px; font-weight: 800; color: var(--text-muted);">YOUR RESULT</div>
          <iframe id="live-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
        </div>
        <div style="display: flex; flex-direction: column;">
          <div style="background: var(--bg-surface); padding: 4px 10px; font-size: 10px; font-weight: 800; color: var(--text-muted);">TARGET GOAL</div>
          <iframe id="target-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
        </div>
      </div>
    `;
    updateLivePreview();
    const targetIframe = document.getElementById('target-iframe');
    if (targetIframe) {
      targetIframe.srcdoc = wrapForPreview(lesson.targetCode);
    }
    playSound('click', state.audioEnabled);
  });
}

function handleChallengeVerification(lesson) {
  const result = validateChallenge(currentCode, lesson.challenge.rules);

  if (result.passed) {
    playSound('success', state.audioEnabled);
    triggerConfetti(elements.confettiCanvas);

    const previousCompleted = isLessonCompleted(state, lesson.id);
    state = completeLesson(state, lesson.id, 3);
    saveStateToStorage(state);
    applyStateToUI();

    showCelebrationModal(lesson, previousCompleted);
  } else {
    playSound('tryAgain', state.audioEnabled);
    showTryAgainModal(result.feedback);
  }
}

function showCelebrationModal(lesson, wasAlreadyCompleted) {
  const currentIdx = LESSONS.findIndex(l => l.id === lesson.id);
  const nextLesson = LESSONS[currentIdx + 1];

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card">
      <div class="modal-icon">🎉</div>
      <h3 class="modal-title">MISSION COMPLETE!</h3>
      <div class="modal-body">
        <p>Awesome! You mastered <strong>${lesson.title}</strong>!</p>
        <p style="margin-top: 8px; font-size: 15px; color: var(--accent-amber); font-weight: 800;">
          ${wasAlreadyCompleted ? '⭐ Mission verified again!' : '+3 STARS EARNED! ⭐⭐⭐'}
        </p>
      </div>
      <div class="modal-actions">
        <button id="btn-modal-close" class="btn-modal btn-modal-secondary">Stay Here</button>
        ${nextLesson ? `<button id="btn-modal-next" class="btn-modal btn-modal-primary">Next Lesson ➡️</button>` : ''}
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector('#btn-modal-close')?.addEventListener('click', () => modal.remove());
  modal.querySelector('#btn-modal-next')?.addEventListener('click', () => {
    modal.remove();
    if (nextLesson) selectLesson(nextLesson.id);
  });
}

function showTryAgainModal(feedback) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card">
      <div class="modal-icon">🧐</div>
      <h3 class="modal-title" style="color: var(--accent-red);">Almost There!</h3>
      <div class="modal-body">
        <p>Take a quick look at your code:</p>
        <div style="background: rgba(248, 113, 113, 0.15); border-radius: 8px; padding: 10px; margin-top: 8px; color: var(--accent-red); text-align: left; font-weight: bold; font-size: 12px;">
          ${feedback.map(f => `<div>• ${f}</div>`).join('')}
        </div>
      </div>
      <div class="modal-actions">
        <button id="btn-modal-retry" class="btn-modal btn-modal-primary">Let Me Try Again! 💪</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.querySelector('#btn-modal-retry')?.addEventListener('click', () => modal.remove());
}

// ===================================================================
// Free Sandbox Scratchpad View
// ===================================================================
function renderSandboxView() {
  elements.workspaceStage.innerHTML = `
    <div class="lesson-banner">
      <div>
        <div class="banner-meta">
          <span class="badge-module">FREE PLAY</span>
        </div>
        <h2 class="banner-title">🚀 Free Coding Sandbox</h2>
        <p class="banner-summary">Build whatever you want! Download your real webpage when you're done.</p>
      </div>
      <div>
        <button id="btn-download-html" class="btn-header" style="background: var(--accent-green); color: #000; border: none; font-weight: 800;">
          💾 Download .html
        </button>
      </div>
    </div>

    <!-- Template Pills -->
    <div style="background: var(--bg-surface); border-bottom: 1px solid var(--border-color); padding: 8px 24px; display: flex; align-items: center; gap: 8px;">
      <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-muted);">Templates:</span>
      ${TEMPLATES.map(t => `<button class="tag-chip btn-tpl" data-tpl="${t.id}">${t.name}</button>`).join('')}
    </div>

    <!-- Sandbox Split View -->
    <div class="editor-stage-split">
      <div class="pane-card">
        <div class="pane-header">
          <div class="pane-title"><span>💻</span> HTML &amp; CSS Code</div>
          <div class="pane-tools">
            <button id="btn-sb-copy" class="btn-tool">📋 Copy</button>
          </div>
        </div>
        <div class="code-editor-wrapper">
          <div id="sb-line-numbers" class="editor-line-numbers">1</div>
          <textarea id="sb-textarea" class="code-textarea" spellcheck="false">${state.customSandboxCode}</textarea>
        </div>
      </div>

      <div class="pane-card">
        <div class="pane-header">
          <div class="pane-title"><span>👁️</span> Live Webpage Preview</div>
        </div>
        <div class="preview-wrapper">
          <iframe id="sb-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
        </div>
      </div>
    </div>
  `;

  const textarea = document.getElementById('sb-textarea');
  const iframe = document.getElementById('sb-iframe');
  const lineNumbers = document.getElementById('sb-line-numbers');

  function updateSbPreview() {
    iframe.srcdoc = wrapForPreview(textarea.value);

    const lines = textarea.value.split('\n').length;
    let numHtml = '';
    for (let i = 1; i <= Math.max(lines, 1); i++) numHtml += `${i}<br>`;
    lineNumbers.innerHTML = numHtml;

    state.customSandboxCode = textarea.value;
    saveStateToStorage(state);
  }

  textarea.addEventListener('input', updateSbPreview);
  textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, start) + '  ' + textarea.value.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + 2;
      updateSbPreview();
    }
  });

  const tplBtns = document.querySelectorAll('.btn-tpl');
  tplBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tplId = btn.getAttribute('data-tpl');
      const tpl = TEMPLATES.find(t => t.id === tplId);
      if (tpl && confirm(`Load the ${tpl.name} template?`)) {
        textarea.value = tpl.code;
        updateSbPreview();
        playSound('click', state.audioEnabled);
      }
    });
  });

  document.getElementById('btn-download-html')?.addEventListener('click', () => {
    downloadHtmlFile('my-creation.html', wrapForPreview(textarea.value));
    playSound('badge', state.audioEnabled);
  });

  document.getElementById('btn-sb-copy')?.addEventListener('click', () => {
    navigator.clipboard?.writeText(textarea.value);
    const btn = document.getElementById('btn-sb-copy');
    btn.textContent = '✅ Copied!';
    setTimeout(() => { btn.textContent = '📋 Copy'; }, 1500);
  });

  updateSbPreview();
}

// Auto-boot on load
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initApp);
}
