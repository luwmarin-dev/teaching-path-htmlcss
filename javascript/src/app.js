/**
 * CodeCraft JS (JavaScript for Kids) Main Application Controller
 * Step-by-step interactive JavaScript learning environment.
 * 100% Offline with Live Virtual Console, 4-Stage Labs, and Shift Management.
 */

import { MODULES, LESSONS, getLessonById } from './modules/curriculum.js';
import {
  createInitialState,
  completeLesson,
  isLessonCompleted,
  setLanguage,
  saveStateToStorage,
  loadStateFromStorage
} from './modules/state.js';
import { t } from './modules/i18n.js';
import { playSound } from './modules/audio.js';
import { triggerConfetti } from './modules/confetti.js';
import { openStudentPortalModal } from './modules/classroom.js';
import { openTopicLabModal } from './modules/labs.js';
import { executeJsInSandbox } from './modules/runner.js';
import { JS_STARTER_TEMPLATES } from './modules/sandbox.js';
import { speakText, stopSpeaking, isSpeaking } from './modules/speech.js';

// Application State
let state = loadStateFromStorage();
let currentView = 'lesson'; // 'lesson' | 'sandbox'
let currentCode = '';
let consoleLogs = [];

// DOM Elements Cache
const elements = {};

export function localize(val, lang = 'en') {
  if (val === null || val === undefined) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'object') {
    return val[lang] || val.en || Object.values(val)[0] || '';
  }
  return String(val);
}

export function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function formatProse(str) {
  if (str === null || str === undefined) return '';
  const text = String(str);
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');
}

export function initApp() {
  cacheElements();
  attachGlobalListeners();
  applyStateToUI();
  selectLesson(state.currentLessonId || LESSONS[0].id);
}

function cacheElements() {
  elements.app = document.body;
  elements.starCount = document.getElementById('star-count');
  elements.btnLangUz = document.getElementById('btn-lang-uz');
  elements.btnLangEn = document.getElementById('btn-lang-en');
  elements.btnTheme = document.getElementById('btn-theme');
  elements.btnAudio = document.getElementById('btn-audio');
  elements.btnTeacher = document.getElementById('btn-teacher');
  elements.btnSandbox = document.getElementById('btn-sandbox');
  elements.btnStudentProfile = document.getElementById('btn-student-profile');

  elements.sidebarLessonList = document.getElementById('sidebar-lesson-list');
  elements.progressFill = document.getElementById('progress-fill');
  elements.progressText = document.getElementById('progress-text');
  elements.workspaceStage = document.getElementById('workspace-stage');
  elements.confettiCanvas = document.getElementById('confetti-canvas');
}

function attachGlobalListeners() {
  // Student Shift Profile & Classroom Portal
  elements.btnStudentProfile?.addEventListener('click', () => {
    openStudentPortalModal({
      state,
      onProfileSwitched: (newState, profile) => {
        state = newState;
        currentCode = state.customSandboxCode || localize(LESSONS[0].initialCode, state.lang);
        saveStateToStorage(state);
        applyStateToUI();
        selectLesson(state.currentLessonId || LESSONS[0].id);
      },
      playSound
    });
  });

  function switchLang(lang) {
    stopSpeaking();
    const prevLang = state.lang;
    state = setLanguage(state, lang);
    saveStateToStorage(state);
    applyStateToUI();

    const lesson = getLessonById(state.currentLessonId);
    if (lesson) {
      const prevStarter = localize(lesson.initialCode, prevLang);
      const newStarter = localize(lesson.initialCode, lang);
      if (!currentCode || currentCode.trim() === prevStarter.trim()) {
        currentCode = newStarter;
      }
    }

    if (currentView === 'lesson') {
      selectLesson(state.currentLessonId);
    } else {
      renderSandboxWorkspace();
    }
  }

  elements.btnLangUz?.addEventListener('click', () => switchLang('uz'));
  elements.btnLangEn?.addEventListener('click', () => switchLang('en'));

  elements.btnTheme?.addEventListener('click', () => {
    const isOled = document.body.getAttribute('data-theme') === 'oled';
    state.theme = isOled ? 'dark' : 'oled';
    saveStateToStorage(state);
    applyTheme();
    playSound('click', state.audioEnabled);
  });

  elements.btnAudio?.addEventListener('click', () => {
    state.audioEnabled = !state.audioEnabled;
    saveStateToStorage(state);
    applyStateToUI();
    playSound('click', state.audioEnabled);
  });

  elements.btnTeacher?.addEventListener('click', () => {
    state.teacherMode = !state.teacherMode;
    saveStateToStorage(state);
    applyStateToUI();
    playSound('click', state.audioEnabled);
  });

  elements.btnSandbox?.addEventListener('click', () => {
    stopSpeaking();
    currentView = 'sandbox';
    elements.btnSandbox.classList.add('active');
    playSound('click', state.audioEnabled);
    renderSandboxWorkspace();
  });

  // Global listener for messages from iframe sandbox
  window.addEventListener('message', (e) => {
    if (!e.data) return;
    if (e.data.type === 'CONSOLE_LOG') {
      addConsoleLine(e.data.method, e.data.text);
    } else if (e.data.type === 'CONSOLE_ALERT') {
      addConsoleLine('alert', '🔔 ALERT: ' + e.data.text);
      playSound('star', state.audioEnabled);
    }
  });
}

function applyTheme() {
  if (state.theme === 'oled') {
    document.body.setAttribute('data-theme', 'oled');
    if (elements.btnTheme) elements.btnTheme.textContent = '☀️';
  } else {
    document.body.removeAttribute('data-theme');
    if (elements.btnTheme) elements.btnTheme.textContent = '🌙';
  }
}

function applyStateToUI() {
  applyTheme();

  const avatarEl = document.getElementById('header-student-avatar');
  if (avatarEl) avatarEl.textContent = state.studentAvatar || '⚡';
  const nameEl = document.getElementById('header-student-name');
  if (nameEl) nameEl.textContent = state.studentName || 'JS Ninja';
  const shiftEl = document.getElementById('header-student-shift');
  if (shiftEl) shiftEl.textContent = state.shift || '1-Smena (10:30 - 12:00)';

  const totalLessonsCount = LESSONS.length;
  const completedCount = state.completedLessons ? state.completedLessons.length : 0;
  const pPct = Math.round((completedCount / totalLessonsCount) * 100);
  const fillEl = document.getElementById('header-student-progress-fill');
  if (fillEl) fillEl.style.width = `${pPct}%`;
  const pctEl = document.getElementById('header-student-progress-pct');
  if (pctEl) pctEl.textContent = `${completedCount}/${totalLessonsCount}`;

  if (elements.starCount) elements.starCount.textContent = `⭐ ${state.stars}`;
  if (elements.btnLangUz) elements.btnLangUz.classList.toggle('active', state.lang === 'uz');
  if (elements.btnLangEn) elements.btnLangEn.classList.toggle('active', state.lang === 'en');
  if (elements.btnAudio) elements.btnAudio.textContent = state.audioEnabled ? '🔊' : '🔇';
  if (elements.btnTeacher) elements.btnTeacher.classList.toggle('active', state.teacherMode);

  renderSidebar();
  updateProgressSummary();
}

function updateProgressSummary() {
  const total = LESSONS.length;
  const completed = state.completedLessons.length;
  const percent = Math.round((completed / total) * 100);

  if (elements.progressFill) elements.progressFill.style.width = `${percent}%`;
  const unitName = state.lang === 'uz' ? 'Mavzular' : 'Lessons';
  if (elements.progressText) elements.progressText.textContent = `${completed} / ${total} ${unitName} (${percent}%)`;
}

function renderSidebar() {
  if (!elements.sidebarLessonList) return;

  let html = '';
  MODULES.forEach(mod => {
    const modLessons = LESSONS.filter(l => l.module === mod.id);
    if (modLessons.length === 0) return;

    html += `<div class="nav-section-title">${escapeHtml(localize(mod.title, state.lang))}</div>`;
    html += `<ul class="lesson-list">`;
    modLessons.forEach(lesson => {
      const isCompleted = isLessonCompleted(state, lesson.id);
      const isActive = currentView === 'lesson' && state.currentLessonId === lesson.id;
      html += `
        <li class="lesson-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" data-lesson-id="${lesson.id}">
          <span class="lesson-item-icon">${lesson.icon}</span>
          <span class="lesson-item-text">${escapeHtml(localize(lesson.title, state.lang))}</span>
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
      stopSpeaking();
      currentView = 'lesson';
      elements.btnSandbox?.classList.remove('active');
      playSound('click', state.audioEnabled);
      selectLesson(lessonId);
    });
  });
}

export function selectLesson(lessonId) {
  stopSpeaking();
  currentView = 'lesson';
  elements.btnSandbox?.classList.remove('active');
  const lesson = getLessonById(lessonId) || LESSONS[0];
  state.currentLessonId = lesson.id;
  currentCode = localize(lesson.initialCode, state.lang);
  consoleLogs = [];
  saveStateToStorage(state);

  renderSidebar();
  renderLessonWorkspace(lesson);
}

function addConsoleLine(type, text) {
  consoleLogs.push({ type, text, time: new Date().toLocaleTimeString() });
  const body = document.getElementById('js-console-body');
  if (!body) return;

  const line = document.createElement('div');
  line.className = `console-line console-line-${type}`;
  line.innerHTML = `
    <span class="console-line-time">${new Date().toLocaleTimeString()}</span>
    <span class="console-line-text">${escapeHtml(text)}</span>
  `;
  body.appendChild(line);
  body.scrollTop = body.scrollHeight;
}

function renderLessonWorkspace(lesson) {
  if (!elements.workspaceStage) return;

  const isUz = state.lang === 'uz';
  const isCompleted = isLessonCompleted(state, lesson.id);

  elements.workspaceStage.innerHTML = `
    <div class="lesson-workspace">
      <!-- Top Educational Brief (Pedagogy) -->
      <section class="pedagogy-brief-card" id="pedagogy-card">
        <div class="brief-header-row">
          <div class="brief-title-wrap">
            <span class="brief-icon">${lesson.icon}</span>
            <div>
              <h2 class="brief-title">${escapeHtml(localize(lesson.title, state.lang))}</h2>
              <span class="badge-tag">${isCompleted ? t('completedTag', state.lang) : t('missionTag', state.lang)}</span>
            </div>
          </div>
        </div>

        <!-- Dedicated Interactive Study Action Deck -->
        <div class="topic-action-deck">
          <button id="btn-topic-lab" class="btn-deck-item btn-deck-lab" title="${escapeHtml(t('topicLabBtn', state.lang))}">
            <span class="deck-icon">🧪</span>
            <div class="deck-text">
              <span class="deck-label">${escapeHtml(t('topicLabBtn', state.lang))}</span>
              <span class="deck-sub">${isUz ? 'Evolyutsiya Slayderi' : 'Step-by-Step Evolution Slider'}</span>
            </div>
          </button>
          <button id="btn-tag-list" class="btn-deck-item btn-deck-tags" title="${escapeHtml(t('listOfTags', state.lang))}">
            <span class="deck-icon">📋</span>
            <div class="deck-text">
              <span class="deck-label">${escapeHtml(t('listOfTags', state.lang))}</span>
              <span class="deck-sub">${isUz ? 'Buyruqlar jadvali va namunalar' : 'Command Cheat Sheet'}</span>
            </div>
          </button>
          <button id="btn-start-practice" class="btn-deck-item btn-deck-practice" title="${isUz ? 'Amaliyotni Boshlash' : 'Start Practice'}">
            <span class="deck-icon">💻</span>
            <div class="deck-text">
              <span class="deck-label">${isUz ? 'Amaliyotni Boshlash' : 'Start Practice'}</span>
              <span class="deck-sub">${isUz ? 'Tayyor kod bilan mashq' : 'Jump to Live Editor'}</span>
            </div>
          </button>
          <button id="btn-read-aloud" class="btn-deck-item btn-deck-read" title="${isUz ? 'Ovozli o\'qish' : 'Read Aloud'}">
            <span class="deck-icon">🔊</span>
            <div class="deck-text">
              <span class="deck-label">${escapeHtml(t('readAloudBtn', state.lang))}</span>
              <span class="deck-sub">${isUz ? 'Ovozli eshitish' : 'Listen with Speech'}</span>
            </div>
          </button>
        </div>

        <!-- 1. In Human Language -->
        <div class="brief-section human-language-box">
          <div class="section-badge">💡 ${t('humanLanguageHeader', state.lang)}</div>
          <p class="section-body">${formatProse(localize(lesson.humanLanguage, state.lang))}</p>
        </div>

        <!-- 2. Secret Formula -->
        <div class="brief-section formula-box">
          <div class="section-badge">🥪 ${t('tagSandwichHeader', state.lang)}</div>
          <p class="section-body">${formatProse(localize(lesson.secretSandwich, state.lang))}</p>
        </div>

        <!-- 3. Step Breakdown Table -->
        <div class="brief-section breakdown-box">
          <div class="section-badge">🔍 ${t('stepBreakdownHeader', state.lang)}</div>
          <div class="breakdown-table-wrapper">
            <table class="breakdown-table">
              <thead>
                <tr>
                  <th>${isUz ? "Qism / Buyruq" : "Part / Code"}</th>
                  <th>${isUz ? "Nimani anglatadi?" : "What does it do?"}</th>
                  <th>${isUz ? "Natijaga ta'siri" : "Visual Effect on Result"}</th>
                </tr>
              </thead>
              <tbody>
                ${lesson.stepBreakdown.map(step => `
                  <tr>
                    <td><code class="code-chip insertable" data-insert="${escapeHtml(step.part)}">${escapeHtml(step.part)}</code></td>
                    <td>${formatProse(localize(step.explanation, state.lang))}</td>
                    <td><span class="step-res-tag">${escapeHtml(localize(step.visualResult, state.lang))}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- 4. Quick Keywords Row -->
        <div class="brief-section quick-tags-box">
          <div class="quick-tags-header">
            <span>${t('tagShowcaseHeader', state.lang)}</span>
            <small style="color:var(--text-muted); font-size:11px;">(${t('insertTagHint', state.lang)})</small>
          </div>
          <div class="quick-tags-chips">
            ${lesson.tagShowcase.map(item => `
              <button type="button" class="tag-chip-btn insertable" data-insert="${escapeHtml(item.tag)}" title="${escapeHtml(localize(item.meaning, state.lang))}">
                <code>${escapeHtml(item.tag)}</code>
                <span>${escapeHtml(localize(item.name, state.lang))}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Mission Prompt -->
        <div class="mission-callout">
          <strong>🎯 ${t('missionTag', state.lang)}:</strong>
          <span>${formatProse(localize(lesson.mission, state.lang))}</span>
        </div>
      </section>

      <!-- Bottom Interactive Code Editor & Live Console Workspace -->
      <section class="editor-preview-split">
        <!-- Left: Code Editor Pane -->
        <div class="editor-pane">
          <div class="pane-header">
            <div class="pane-title">
              <span>💻 ${t('codeEditorTitle', state.lang)}</span>
            </div>
            <div class="pane-actions">
              <button id="btn-copy-code" class="btn-tool" title="Copy code">📋 ${t('copyBtn', state.lang)}</button>
              <button id="btn-tidy-code" class="btn-tool" title="Format code">🪄 ${t('tidyBtn', state.lang)}</button>
              <button id="btn-reset-code" class="btn-tool" title="Reset code">🔄 ${t('resetCode', state.lang)}</button>
            </div>
          </div>

          <div class="editor-wrapper">
            <textarea id="code-editor" class="code-editor" spellcheck="false" autocomplete="off" autofocus>${escapeHtml(currentCode)}</textarea>
          </div>

          <div class="editor-footer">
            <button id="btn-hint" class="btn-action btn-hint">💡 ${t('hintBtn', state.lang)}</button>
            <div style="display:flex; gap:8px;">
              <button id="btn-run-code" class="btn-run-code">▶️ ${t('runCodeBtn', state.lang)}</button>
              <button id="btn-check-code" class="btn-action btn-primary">🚀 ${t('checkCodeBtn', state.lang)}</button>
            </div>
          </div>
        </div>

        <!-- Right: Live Output & Virtual Console Pane -->
        <div class="preview-pane">
          <div class="js-console-container">
            <div class="js-console-header">
              <div class="js-console-title">🖥️ ${t('liveConsoleTitle', state.lang)}</div>
              <button id="btn-clear-console" class="btn-tool">${t('clearConsoleBtn', state.lang)}</button>
            </div>

            <div class="js-console-body" id="js-console-body">
              <div class="console-line console-line-log">
                <span class="console-line-time">System</span>
                <span class="console-line-text">&gt; CodeCraft JS Sandbox Ready ⚡</span>
              </div>
            </div>

            <!-- Bottom Iframe for Interactive DOM elements -->
            <div style="height: 160px; border-top: 1px solid var(--border-color); background: #000;">
              <iframe id="live-preview-frame" sandbox="allow-scripts" style="width:100%; height:100%; border:none;"></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  attachLessonEvents(lesson);
  // Auto-run initial preview
  runCurrentCode();
}

function attachLessonEvents(lesson) {
  const editor = document.getElementById('code-editor');
  const btnRun = document.getElementById('btn-run-code');
  const btnCheck = document.getElementById('btn-check-code');
  const btnHint = document.getElementById('btn-hint');
  const btnReset = document.getElementById('btn-reset-code');
  const btnTidy = document.getElementById('btn-tidy-code');
  const btnCopy = document.getElementById('btn-copy-code');
  const btnClearConsole = document.getElementById('btn-clear-console');
  const btnTopicLab = document.getElementById('btn-topic-lab');
  const btnTagList = document.getElementById('btn-tag-list');
  const btnStartPractice = document.getElementById('btn-start-practice');
  const btnReadAloud = document.getElementById('btn-read-aloud');

  // Editor typing
  editor?.addEventListener('input', (e) => {
    currentCode = e.target.value;
  });

  // Tab key indentation support in textarea
  editor?.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      editor.value = editor.value.substring(0, start) + '  ' + editor.value.substring(end);
      editor.selectionStart = editor.selectionEnd = start + 2;
      currentCode = editor.value;
    }
  });

  // Run Code
  btnRun?.addEventListener('click', () => {
    playSound('click', state.audioEnabled);
    runCurrentCode();
  });

  // Check Code
  btnCheck?.addEventListener('click', () => {
    if (editor) currentCode = editor.value;
    runCurrentCode();
    const result = lesson.validate(currentCode);
    if (result.passed) {
      playSound('success', state.audioEnabled);
      triggerConfetti(elements.confettiCanvas);
      state = completeLesson(state, lesson.id, 3);
      saveStateToStorage(state);
      applyStateToUI();
      showSuccessModal(lesson);
    } else {
      playSound('tryAgain', state.audioEnabled);
      showTryAgainModal(lesson, result.message);
    }
  });

  // Clear console
  btnClearConsole?.addEventListener('click', () => {
    const body = document.getElementById('js-console-body');
    if (body) body.innerHTML = '';
  });

  // Hint
  btnHint?.addEventListener('click', () => {
    playSound('click', state.audioEnabled);
    const hintText = localize(lesson.hints[0], state.lang);
    alert('💡 Maslahat / Hint:\n\n' + hintText);
  });

  // Reset
  btnReset?.addEventListener('click', () => {
    if (confirm(state.lang === 'uz' ? 'Kodingizni boshiga qaytarmoqchimisiz?' : 'Reset code to start?')) {
      playSound('click', state.audioEnabled);
      currentCode = localize(lesson.initialCode, state.lang);
      if (editor) editor.value = currentCode;
      runCurrentCode();
    }
  });

  // Tidy
  btnTidy?.addEventListener('click', () => {
    playSound('click', state.audioEnabled);
    currentCode = currentCode.trim();
    if (editor) editor.value = currentCode;
  });

  // Copy
  btnCopy?.addEventListener('click', () => {
    navigator.clipboard?.writeText(currentCode);
    playSound('click', state.audioEnabled);
    btnCopy.textContent = '✅ ' + t('copiedMsg', state.lang);
    setTimeout(() => {
      btnCopy.textContent = '📋 ' + t('copyBtn', state.lang);
    }, 1500);
  });

  // Open Topic Visual Lab Modal
  btnTopicLab?.addEventListener('click', () => {
    openTopicLabModal(lesson.id, lesson, state, playSound);
  });

  // Open Tag / Command Cheat Sheet Modal
  btnTagList?.addEventListener('click', () => {
    openTagListModal(lesson);
  });

  // Start Practice Action (Jump to Code Editor)
  btnStartPractice?.addEventListener('click', () => {
    playSound('click', state.audioEnabled);
    const missionCallout = document.querySelector('.mission-callout');
    const editor = document.getElementById('code-editor');
    if (missionCallout) {
      missionCallout.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (editor) {
      editor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (editor) {
      editor.focus();
      editor.setSelectionRange(editor.value.length, editor.value.length);
    }
  });

  // Speech narrator
  btnReadAloud?.addEventListener('click', () => {
    if (isSpeaking()) {
      stopSpeaking();
      btnReadAloud.textContent = '🔊 ' + t('readAloudBtn', state.lang);
    } else {
      const speechNarrative = `${localize(lesson.title, state.lang)}. ${localize(lesson.concept, state.lang)}. ${localize(lesson.humanLanguage, state.lang)}. ${localize(lesson.mission, state.lang)}`;
      btnReadAloud.textContent = '⏹️ ' + t('stopSpeechBtn', state.lang);
      speakText(speechNarrative, state.lang, () => {
        btnReadAloud.textContent = '🔊 ' + t('readAloudBtn', state.lang);
      });
    }
  });

  // Insertable tag chips
  document.querySelectorAll('.insertable').forEach(chip => {
    chip.addEventListener('click', () => {
      const textToInsert = chip.getAttribute('data-insert');
      if (!editor || !textToInsert) return;

      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      editor.value = editor.value.substring(0, start) + textToInsert + editor.value.substring(end);
      editor.selectionStart = editor.selectionEnd = start + textToInsert.length;
      editor.focus();
      currentCode = editor.value;
      playSound('click', state.audioEnabled);
    });
  });
}

function runCurrentCode() {
  const editor = document.getElementById('code-editor') || document.getElementById('sandbox-editor');
  if (editor) currentCode = editor.value;
  const frame = document.getElementById('live-preview-frame');
  const consoleBody = document.getElementById('js-console-body');
  if (frame) {
    executeJsInSandbox(currentCode, consoleBody, frame).then(res => {
      if (!res.success && res.error) {
        addConsoleLine('error', '❌ Xatolik (Error): ' + res.error);
        playSound('tryAgain', state.audioEnabled);
      }
    });
  }
}

function showSuccessModal(lesson) {
  const isUz = state.lang === 'uz';
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card">
      <span class="modal-icon">🎉</span>
      <h3 class="modal-title">${t('modalCompleteTitle', state.lang)}</h3>
      <p class="modal-body">${t('starsEarnedMsg', state.lang)}</p>
      <div class="modal-actions">
        <button id="btn-stay" class="btn-modal" style="background:var(--bg-surface); border:1px solid var(--border-color); color:white;">${t('stayHereBtn', state.lang)}</button>
        <button id="btn-next" class="btn-modal btn-modal-primary">${t('nextLessonBtn', state.lang)}</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector('#btn-stay')?.addEventListener('click', () => modal.remove());
  modal.querySelector('#btn-next')?.addEventListener('click', () => {
    modal.remove();
    const currIdx = LESSONS.findIndex(l => l.id === lesson.id);
    if (currIdx < LESSONS.length - 1) {
      selectLesson(LESSONS[currIdx + 1].id);
    }
  });
}

function showTryAgainModal(lesson, errorMsg) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card">
      <span class="modal-icon">💡</span>
      <h3 class="modal-title">${t('tryAgainTitle', state.lang)}</h3>
      <p class="modal-body" style="color:#f87171; font-weight:bold;">${escapeHtml(errorMsg)}</p>
      <div class="modal-actions">
        <button id="btn-retry" class="btn-modal btn-modal-primary">${t('retryBtn', state.lang)}</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelector('#btn-retry')?.addEventListener('click', () => modal.remove());
}

function openTagListModal(lesson) {
  if (!lesson.tagShowcase || lesson.tagShowcase.length === 0) return;
  playSound('click', state.audioEnabled);

  const isUz = state.lang === 'uz';
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card tag-list-modal-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">
        <h3 style="font-size: 16px; font-weight: 800; color: #ffffff; display: flex; align-items: center; gap: 8px; margin: 0;">
          <span>📋</span> ${escapeHtml(t('tagListModalTitle', state.lang))}: ${escapeHtml(localize(lesson.title, state.lang))}
        </h3>
        <button id="btn-close-tag-modal" class="btn-close-modal" title="Close">✕</button>
      </div>

      <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px; text-align: left;">
        ${escapeHtml(t('tagListDesc', state.lang))}
      </p>

      <div style="overflow-x: auto; max-height: 380px; margin-bottom: 16px; border: 1px solid var(--border-color); border-radius: 12px;">
        <table class="tag-list-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13px;">
          <thead>
            <tr style="background: var(--bg-surface); border-bottom: 1px solid var(--border-color);">
              <th style="padding: 10px 12px; color: var(--text-muted); font-size: 11px; text-transform: uppercase;">${escapeHtml(t('colCode', state.lang))}</th>
              <th style="padding: 10px 12px; color: var(--text-muted); font-size: 11px; text-transform: uppercase;">${escapeHtml(t('colName', state.lang))}</th>
              <th style="padding: 10px 12px; color: var(--text-muted); font-size: 11px; text-transform: uppercase;">${escapeHtml(t('colMeaning', state.lang))}</th>
            </tr>
          </thead>
          <tbody>
            ${lesson.tagShowcase.map(item => `
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 10px 12px;">
                  <code class="code-chip insertable" data-insert="${escapeHtml(item.tag)}" style="cursor: pointer;" title="${escapeHtml(t('insertTagHint', state.lang))}">${escapeHtml(item.tag)}</code>
                </td>
                <td style="padding: 10px 12px; font-weight: 600; color: #f8fafc;">${escapeHtml(localize(item.name, state.lang))}</td>
                <td style="padding: 10px 12px; color: #cbd5e1; font-size: 12px;">${escapeHtml(localize(item.meaning, state.lang))}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div style="display: flex; justify-content: flex-end;">
        <button id="btn-done-tag-modal" class="btn-modal btn-modal-primary">${escapeHtml(t('doneBtn', state.lang))}</button>
      </div>
    </div>
  `;

  modal.querySelectorAll('.insertable').forEach(chip => {
    chip.addEventListener('click', () => {
      const tag = chip.getAttribute('data-insert');
      const editor = document.getElementById('code-editor');
      if (editor && tag) {
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        editor.value = editor.value.substring(0, start) + tag + editor.value.substring(end);
        editor.selectionStart = editor.selectionEnd = start + tag.length;
        currentCode = editor.value;
        playSound('click', state.audioEnabled);
        modal.remove();
        editor.focus();
      }
    });
  });

  modal.querySelector('#btn-close-tag-modal')?.addEventListener('click', () => modal.remove());
  modal.querySelector('#btn-done-tag-modal')?.addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });

  document.body.appendChild(modal);
}

function renderSandboxWorkspace() {
  if (!elements.workspaceStage) return;
  const isUz = state.lang === 'uz';

  elements.workspaceStage.innerHTML = `
    <div class="sandbox-workspace">
      <div class="sandbox-toolbar">
        <div>
          <h3>🚀 ${t('freeSandbox', state.lang)}</h3>
          <p style="color:var(--text-muted); font-size:12px; margin:2px 0 0;">${isUz ? "Erkin kod yozing yoki quyidagi tayyor shablonlarni tanlang" : "Write free code or select starter templates"}</p>
        </div>
        <div style="display:flex; gap:8px;">
          ${JS_STARTER_TEMPLATES.map(tpl => `
            <button class="btn-tool btn-template-pick" data-tpl="${tpl.id}">
              ${escapeHtml(localize(tpl.name, state.lang))}
            </button>
          `).join('')}
        </div>
      </div>

      <div class="editor-preview-split" style="margin-top:16px;">
        <div class="editor-pane">
          <div class="pane-header">
            <span>💻 Sandbox Editor</span>
            <button id="btn-run-sandbox" class="btn-run-code">▶️ ${t('runCodeBtn', state.lang)}</button>
          </div>
          <div class="editor-wrapper">
            <textarea id="sandbox-editor" class="code-editor">${escapeHtml(state.customSandboxCode)}</textarea>
          </div>
        </div>

        <div class="preview-pane">
          <div class="js-console-container">
            <div class="js-console-header">
              <div class="js-console-title">🖥️ ${t('liveConsoleTitle', state.lang)}</div>
            </div>
            <div class="js-console-body" id="js-console-body">
              <div class="console-line console-line-log">
                <span class="console-line-time">System</span>
                <span class="console-line-text">&gt; Free Sandbox Ready ⚡</span>
              </div>
            </div>
            <div style="height: 180px; border-top: 1px solid var(--border-color); background: #000;">
              <iframe id="live-preview-frame" sandbox="allow-scripts" style="width:100%; height:100%; border:none;"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const sbEditor = document.getElementById('sandbox-editor');
  sbEditor?.addEventListener('input', (e) => {
    state.customSandboxCode = e.target.value;
    saveStateToStorage(state);
  });

  document.getElementById('btn-run-sandbox')?.addEventListener('click', () => {
    currentCode = state.customSandboxCode;
    runCurrentCode();
  });

  document.querySelectorAll('.btn-template-pick').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-tpl');
      const tpl = JS_STARTER_TEMPLATES.find(x => x.id === id);
      if (tpl && confirm(isUz ? "Ushbu shablonni yuklamoqchimisiz?" : "Load this template?")) {
        state.customSandboxCode = tpl.code;
        saveStateToStorage(state);
        if (sbEditor) sbEditor.value = tpl.code;
        currentCode = tpl.code;
        runCurrentCode();
      }
    });
  });

  currentCode = state.customSandboxCode;
  runCurrentCode();
}

// Auto-boot if running in browser
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    initApp();
  });
}
