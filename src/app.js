/**
 * CodeCraft Kids Main Application Controller
 * Orchestrates lessons, live execution, validation, labs, audio, and state.
 */

import { MODULES, LESSONS, getLessonById } from './modules/curriculum.js';
import { validateChallenge } from './modules/validator.js';
import {
  createInitialState,
  completeLesson,
  isLessonCompleted,
  saveStateToStorage,
  loadStateFromStorage,
  setStudentProfile,
  setTheme
} from './modules/state.js';
import { playSound } from './modules/audio.js';
import { triggerConfetti } from './modules/confetti.js';
import { speakText, stopSpeaking, isSpeaking } from './modules/speech.js';
import { renderBoxModelLab } from './labs/boxModelLab.js';
import { renderFlexboxLab } from './labs/flexboxLab.js';
import { renderColorLab } from './labs/colorLab.js';
import { TEMPLATES, downloadHtmlFile } from './modules/sandbox.js';

// Application State
let state = loadStateFromStorage();
let currentView = 'lesson'; // 'lesson' | 'lab-box' | 'lab-flex' | 'lab-color' | 'sandbox'
let activePreviewTab = 'live'; // 'live' | 'target' | 'split'
let currentCode = '';

// DOM Elements Cache
const elements = {};

export function initApp() {
  cacheElements();
  attachGlobalListeners();
  applyStateToUI();
  selectLesson(state.currentLessonId || 'html-bones');
}

function cacheElements() {
  elements.app = document.body;
  elements.studentName = document.getElementById('student-name');
  elements.studentAvatar = document.getElementById('student-avatar');
  elements.starCount = document.getElementById('star-count');
  elements.btnAudio = document.getElementById('btn-audio');
  elements.btnTeacher = document.getElementById('btn-teacher');
  elements.btnTheme = document.getElementById('btn-theme');
  elements.btnSandbox = document.getElementById('btn-sandbox');
  elements.btnLabs = document.getElementById('btn-labs');
  elements.labsDropdown = document.getElementById('labs-dropdown');

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
    renderLessonView();
  });

  // Theme toggle
  elements.btnTheme?.addEventListener('click', () => {
    const themes = ['candy', 'arcade', 'space'];
    const nextIdx = (themes.indexOf(state.theme) + 1) % themes.length;
    state = setTheme(state, themes[nextIdx]);
    saveStateToStorage(state);
    applyTheme();
    playSound('click', state.audioEnabled);
  });

  // Profile avatar/name modal trigger
  document.getElementById('student-badge-btn')?.addEventListener('click', openProfileModal);

  // Sandbox Mode trigger
  elements.btnSandbox?.addEventListener('click', () => {
    currentView = 'sandbox';
    playSound('click', state.audioEnabled);
    renderSandboxView();
  });

  // Labs dropdown trigger
  elements.btnLabs?.addEventListener('click', (e) => {
    e.stopPropagation();
    elements.labsDropdown?.classList.toggle('show');
  });

  document.addEventListener('click', () => {
    elements.labsDropdown?.classList.remove('show');
  });

  document.getElementById('lab-opt-box')?.addEventListener('click', () => {
    currentView = 'lab-box';
    playSound('click', state.audioEnabled);
    renderLabView('box');
  });

  document.getElementById('lab-opt-flex')?.addEventListener('click', () => {
    currentView = 'lab-flex';
    playSound('click', state.audioEnabled);
    renderLabView('flex');
  });

  document.getElementById('lab-opt-color')?.addEventListener('click', () => {
    currentView = 'lab-color';
    playSound('click', state.audioEnabled);
    renderLabView('color');
  });

  // Brand click -> Return to lessons
  document.querySelector('.brand')?.addEventListener('click', () => {
    currentView = 'lesson';
    playSound('click', state.audioEnabled);
    renderLessonView();
  });
}

function applyTheme() {
  elements.app.setAttribute('data-theme', state.theme);
  const themeLabels = {
    candy: '🍬 Theme: Candy',
    arcade: '🕹️ Theme: Arcade',
    space: '🌌 Theme: Space'
  };
  if (elements.btnTheme) {
    elements.btnTheme.textContent = themeLabels[state.theme] || '🎨 Theme';
  }
}

function applyStateToUI() {
  applyTheme();
  if (elements.studentName) elements.studentName.textContent = state.studentName;
  if (elements.studentAvatar) elements.studentAvatar.textContent = state.studentAvatar;
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
  if (elements.progressText) elements.progressText.textContent = `${completed} / ${total} Finished (${percent}%)`;
}

function renderSidebar() {
  if (!elements.sidebarLessonList) return;

  let html = '';
  MODULES.forEach(mod => {
    html += `<div class="nav-section-title">${mod.title}</div>`;
    const modLessons = LESSONS.filter(l => l.module === mod.id);
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

  // Attach click listeners to sidebar items
  const items = elements.sidebarLessonList.querySelectorAll('.lesson-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const lessonId = item.getAttribute('data-lesson-id');
      currentView = 'lesson';
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
      <div class="banner-main">
        <div class="banner-meta">
          <span class="badge-module">${lesson.module.toUpperCase()}</span>
          <span class="badge-tags">${lesson.tag}</span>
          ${isCompleted ? '<span style="color: #2ed573; font-weight: 800; font-size: 13px;">✅ Completed!</span>' : ''}
        </div>
        <h2 class="banner-title">${lesson.icon} ${lesson.title}</h2>
        <p class="banner-summary">${lesson.summary}</p>
      </div>
      <div class="banner-controls">
        <button id="btn-read-aloud" class="btn-pill-action">
          🔊 Read Aloud
        </button>
        <button id="btn-toggle-teacher-box" class="btn-pill-action ${state.teacherMode ? 'active' : ''}">
          🧑‍🏫 Teacher Tips
        </button>
      </div>
    </div>

    <!-- Teacher / Parent Playbook (Shown if Teacher Mode is active) -->
    <div id="teacher-playbook-box" class="teacher-playbook" style="${state.teacherMode ? 'display:block' : 'display:none'}">
      <h4>🧑‍🏫 Teacher & Parent Secret Playbook</h4>
      <div class="teacher-playbook-grid">
        <div class="teacher-item">
          <strong>💡 Kid-Friendly Analogy:</strong>
          <span>${lesson.teacherGuide.analogy}</span>
        </div>
        <div class="teacher-item">
          <strong>🗣️ Questions to Ask Aloud:</strong>
          <ul>
            ${lesson.teacherGuide.discussionQuestions.map(q => `<li>${q}</li>`).join('')}
          </ul>
        </div>
        <div class="teacher-item">
          <strong>⚠️ Watch Out For:</strong>
          <ul>
            ${lesson.teacherGuide.commonMistakes.map(m => `<li>${m}</li>`).join('')}
          </ul>
        </div>
        <div class="teacher-item">
          <strong>🎉 Fun Real-World Activity:</strong>
          <span>${lesson.teacherGuide.funActivity}</span>
        </div>
      </div>
    </div>

    <!-- Story Card -->
    <div class="lesson-story-card">
      <div class="story-icon">${lesson.icon}</div>
      <div class="story-body">
        <h3>The Story & How It Works</h3>
        <p>${lesson.story}</p>
      </div>
    </div>

    <!-- Editor & Dual Preview Split View -->
    <div class="editor-stage-split">
      <!-- Left: Code Studio -->
      <div class="pane-card">
        <div class="pane-header">
          <div class="pane-title">
            <span>💻</span> Code Studio
          </div>
          <div class="pane-tools">
            <button id="btn-format-code" class="btn-tool" title="Format indentation">🪄 Tidy</button>
            <button id="btn-reset-code" class="btn-tool" title="Reset to starter code">🔄 Reset</button>
            <button id="btn-copy-code" class="btn-tool" title="Copy code">📋 Copy</button>
          </div>
        </div>

        <!-- Quick Tags Chips -->
        <div class="quick-tags-bar">
          <span class="quick-tag-label">Quick Tags:</span>
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
            <span>👁️</span> Result Preview
          </div>
          <div class="preview-tabs">
            <button id="tab-live" class="prev-tab-btn active">Live Result</button>
            <button id="tab-target" class="prev-tab-btn">🎯 Target Goal</button>
            <button id="tab-side" class="prev-tab-btn">⚖️ Compare</button>
          </div>
        </div>

        <div id="preview-container" class="preview-wrapper">
          <iframe id="live-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
        </div>
      </div>
    </div>

    <!-- Bottom Sticky Mission Dock -->
    <div class="mission-dock">
      <div class="mission-info">
        <div class="mission-tag">🎯 Mission Challenge</div>
        <div class="mission-text">${lesson.challenge.mission}</div>
      </div>
      <div class="mission-actions">
        <button id="btn-hint" class="btn-hint">💡 Need a Hint?</button>
        <button id="btn-verify-mission" class="btn-verify">🚀 Check My Code!</button>
      </div>
    </div>
  `;

  setupLessonListeners(lesson);
  updateLivePreview();
  updateLineNumbers();
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function setupLessonListeners(lesson) {
  const textarea = document.getElementById('code-textarea');
  const lineNumbers = document.getElementById('line-numbers');

  // Input & Code updates
  textarea?.addEventListener('input', () => {
    currentCode = textarea.value;
    updateLivePreview();
    updateLineNumbers();
  });

  // Tab key indent support
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

  // Quick Tag insert chips
  const tagChips = document.querySelectorAll('.tag-chip');
  tagChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const tag = chip.getAttribute('data-tag');
      insertTextAtCursor(textarea, tag);
      playSound('click', state.audioEnabled);
    });
  });

  // Reset Button
  document.getElementById('btn-reset-code')?.addEventListener('click', () => {
    if (confirm('Reset your code back to the starting example?')) {
      textarea.value = lesson.initialCode;
      currentCode = lesson.initialCode;
      updateLivePreview();
      updateLineNumbers();
      playSound('click', state.audioEnabled);
    }
  });

  // Copy Button
  document.getElementById('btn-copy-code')?.addEventListener('click', () => {
    navigator.clipboard?.writeText(textarea.value);
    const btn = document.getElementById('btn-copy-code');
    btn.textContent = '✅ Copied!';
    setTimeout(() => { btn.textContent = '📋 Copy'; }, 1500);
  });

  // Format Code Button
  document.getElementById('btn-format-code')?.addEventListener('click', () => {
    textarea.value = tidyHtml(textarea.value);
    currentCode = textarea.value;
    updateLivePreview();
    updateLineNumbers();
    playSound('click', state.audioEnabled);
  });

  // Read Aloud Button
  const btnRead = document.getElementById('btn-read-aloud');
  btnRead?.addEventListener('click', () => {
    if (isSpeaking()) {
      stopSpeaking();
      btnRead.textContent = '🔊 Read Aloud';
    } else {
      btnRead.textContent = '⏹️ Stop Voice';
      speakText(`${lesson.title}. ${lesson.summary}. ${lesson.story}. Mission: ${lesson.challenge.mission}`, () => {
        btnRead.textContent = '🔊 Read Aloud';
      });
    }
  });

  // Teacher Box Toggle
  document.getElementById('btn-toggle-teacher-box')?.addEventListener('click', () => {
    const box = document.getElementById('teacher-playbook-box');
    const isVisible = box.style.display !== 'none';
    box.style.display = isVisible ? 'none' : 'block';
  });

  // Preview Tabs: Live vs Target Goal vs Side-by-Side
  setupPreviewTabs(lesson);

  // Hint Button
  document.getElementById('btn-hint')?.addEventListener('click', () => {
    playSound('click', state.audioEnabled);
    alert(`💡 MISSION HINT:\n\n${lesson.challenge.hint}`);
  });

  // Check My Code Button
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

  // Use srcdoc for 100% reliable local file:// execution without cross-origin errors
  iframe.srcdoc = currentCode;
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
          <p>${lesson.targetDescription}</p>
        </div>
        <iframe id="target-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
      </div>
    `;
    const targetIframe = document.getElementById('target-iframe');
    if (targetIframe) {
      targetIframe.srcdoc = lesson.targetCode;
    }
    playSound('click', state.audioEnabled);
  });

  tabSide?.addEventListener('click', () => {
    resetTabs();
    tabSide.classList.add('active');
    activePreviewTab = 'side';
    previewContainer.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; width: 100%; height: 100%;">
        <div style="border-right: 2px solid var(--border-color); display: flex; flex-direction: column;">
          <div style="background: #eef2f7; padding: 6px 12px; font-size: 11px; font-weight: 800; color: #475569;">YOUR LIVE CODE</div>
          <iframe id="live-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
        </div>
        <div style="display: flex; flex-direction: column;">
          <div style="background: #eef2f7; padding: 6px 12px; font-size: 11px; font-weight: 800; color: #475569;">TARGET GOAL</div>
          <iframe id="target-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
        </div>
      </div>
    `;
    updateLivePreview();
    const targetIframe = document.getElementById('target-iframe');
    if (targetIframe) {
      targetIframe.srcdoc = lesson.targetCode;
    }
    playSound('click', state.audioEnabled);
  });
}

function handleChallengeVerification(lesson) {
  const result = validateChallenge(currentCode, lesson.challenge.rules);

  if (result.passed) {
    playSound('success', state.audioEnabled);
    triggerConfetti(elements.confettiCanvas);

    // Update state with completion and award stars
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
        <p>Awesome job, <strong>${state.studentName}</strong>! You mastered <strong>${lesson.title}</strong>!</p>
        <p style="margin-top: 10px; font-size: 16px; color: #f59f00; font-weight: 800;">
          ${wasAlreadyCompleted ? '⭐ Mission verified again!' : '+3 STARS EARNED! ⭐⭐⭐'}
        </p>
      </div>
      <div class="modal-actions">
        <button id="btn-modal-close" class="btn-modal btn-modal-secondary">Stay Here & Play</button>
        ${nextLesson ? `<button id="btn-modal-next" class="btn-modal btn-modal-primary">Next Quest ➡️</button>` : ''}
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector('#btn-modal-close')?.addEventListener('click', () => {
    modal.remove();
  });

  modal.querySelector('#btn-modal-next')?.addEventListener('click', () => {
    modal.remove();
    if (nextLesson) {
      selectLesson(nextLesson.id);
    }
  });
}

function showTryAgainModal(feedback) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card">
      <div class="modal-icon">🧐</div>
      <h3 class="modal-title" style="color: #ff4757;">Almost There!</h3>
      <div class="modal-body">
        <p>Your code is so close! Here is what your robot needs:</p>
        <div style="background: #ffe3e3; border-radius: 8px; padding: 12px; margin-top: 10px; color: #c92a2a; text-align: left; font-weight: bold;">
          ${feedback.map(f => `<div>• ${f}</div>`).join('')}
        </div>
      </div>
      <div class="modal-actions">
        <button id="btn-modal-retry" class="btn-modal btn-modal-primary">Let Me Try Again! 💪</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector('#btn-modal-retry')?.addEventListener('click', () => {
    modal.remove();
  });
}

// ===================================================================
// Interactive Labs Views
// ===================================================================
function renderLabView(type) {
  elements.workspaceStage.innerHTML = `<div id="lab-mount-point"></div>`;
  const mount = document.getElementById('lab-mount-point');

  if (type === 'box') {
    renderBoxModelLab(mount);
  } else if (type === 'flex') {
    renderFlexboxLab(mount);
  } else if (type === 'color') {
    renderColorLab(mount);
  }
}

// ===================================================================
// Free Sandbox Scratchpad View
// ===================================================================
function renderSandboxView() {
  elements.workspaceStage.innerHTML = `
    <div class="lesson-banner">
      <div class="banner-main">
        <div class="banner-meta">
          <span class="badge-module" style="background: #ffd32a; color: #1e272e;">CREATIVE MODE</span>
        </div>
        <h2 class="banner-title">🚀 Free Coding Sandbox</h2>
        <p class="banner-summary">Build anything you can imagine! Pick a starter template or start from scratch, then download your real website file!</p>
      </div>
      <div class="banner-controls">
        <button id="btn-download-html" class="btn-pill-action active" style="background: #2ed573; border-color: #2ed573;">
          💾 Download My Website (.html)
        </button>
      </div>
    </div>

    <!-- Template Selector Bar -->
    <div style="background: var(--bg-card); border-bottom: 2px solid var(--border-color); padding: 12px 28px; display: flex; align-items: center; gap: 12px; overflow-x: auto;">
      <span style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: var(--text-muted); white-space: nowrap;">Starter Templates:</span>
      ${TEMPLATES.map(t => `<button class="btn-pill btn-tpl" data-tpl="${t.id}">${t.name}</button>`).join('')}
    </div>

    <!-- Sandbox Split View -->
    <div class="editor-stage-split">
      <div class="pane-card">
        <div class="pane-header">
          <div class="pane-title"><span>💻</span> Sandbox Code</div>
          <div class="pane-tools">
            <button id="btn-sb-format" class="btn-tool">🪄 Tidy</button>
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
    iframe.srcdoc = textarea.value;

    // Update lines
    const lines = textarea.value.split('\n').length;
    let numHtml = '';
    for (let i = 1; i <= Math.max(lines, 1); i++) numHtml += `${i}<br>`;
    lineNumbers.innerHTML = numHtml;

    // Auto save
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
    downloadHtmlFile('my-awesome-site.html', textarea.value);
    playSound('badge', state.audioEnabled);
  });

  document.getElementById('btn-sb-copy')?.addEventListener('click', () => {
    navigator.clipboard?.writeText(textarea.value);
    const btn = document.getElementById('btn-sb-copy');
    btn.textContent = '✅ Copied!';
    setTimeout(() => { btn.textContent = '📋 Copy'; }, 1500);
  });

  document.getElementById('btn-sb-format')?.addEventListener('click', () => {
    textarea.value = tidyHtml(textarea.value);
    updateSbPreview();
    playSound('click', state.audioEnabled);
  });

  updateSbPreview();
}

// ===================================================================
// Student Profile Avatar / Name Modal
// ===================================================================
function openProfileModal() {
  const avatars = ['🚀', '🐱', '🤖', '🦖', '🦄', '⚡', '👾', '🍕', '👑', '🦸'];

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card">
      <h3 class="modal-title">Student Profile</h3>
      <div class="modal-body">
        <p style="margin-bottom: 12px;">Pick your avatar:</p>
        <div style="display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
          ${avatars.map(a => `<button class="btn-avatar-choice" style="font-size: 30px; background: none; border: 2px solid var(--border-color); border-radius: 12px; cursor: pointer; padding: 6px 10px;">${a}</button>`).join('')}
        </div>
        <p style="margin-bottom: 6px;">Your Coder Name:</p>
        <input type="text" id="input-cadet-name" value="${state.studentName}" style="padding: 10px 14px; font-size: 16px; border-radius: 8px; border: 2px solid var(--border-color); width: 80%; text-align: center; font-weight: bold;" />
      </div>
      <div class="modal-actions">
        <button id="btn-save-profile" class="btn-modal btn-modal-primary">Save Profile</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  let selectedAvatar = state.studentAvatar;
  const avatarBtns = modal.querySelectorAll('.btn-avatar-choice');
  avatarBtns.forEach(btn => {
    if (btn.textContent === selectedAvatar) btn.style.borderColor = 'var(--primary)';
    btn.addEventListener('click', () => {
      avatarBtns.forEach(b => b.style.borderColor = 'var(--border-color)');
      btn.style.borderColor = 'var(--primary)';
      selectedAvatar = btn.textContent;
    });
  });

  modal.querySelector('#btn-save-profile')?.addEventListener('click', () => {
    const input = modal.querySelector('#input-cadet-name');
    const newName = input.value.trim() || 'Code Cadet';
    state = setStudentProfile(state, { name: newName, avatar: selectedAvatar });
    saveStateToStorage(state);
    applyStateToUI();
    modal.remove();
    playSound('badge', state.audioEnabled);
  });
}

function tidyHtml(html) {
  let formatted = '';
  let indent = 0;
  const lines = html.replace(/>\s*</g, '>\n<').split('\n');

  lines.forEach(line => {
    line = line.trim();
    if (!line) return;

    if (line.match(/^<\/\w/) || line.match(/^<\/style>/)) {
      indent = Math.max(0, indent - 1);
    }

    formatted += '  '.repeat(indent) + line + '\n';

    if (
      line.match(/^<[a-z0-9]+/i) &&
      !line.match(/^<(img|input|br|hr|meta|link)/i) &&
      !line.match(/<\/[a-z0-9]+>/i) &&
      !line.endsWith('/>')
    ) {
      indent++;
    }
  });

  return formatted.trim();
}

// Auto-boot on load
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initApp);
}
