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
  setTheme,
  toggleEditorFirstMode,
  toggleFocusIdeMode,
  saveStateToStorage,
  loadStateFromStorage
} from './modules/state.js';
import { t } from './modules/i18n.js';
import { playSound } from './modules/audio.js';
import { triggerConfetti } from './modules/confetti.js';
import { initAmbientCanvas } from './modules/ambientCanvas.js';
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
let ambientEngine = null;

// DOM Elements Cache
const elements = {};

export function translateCodeCommentsToUz(codeStr) {
  if (!codeStr || typeof codeStr !== 'string') return codeStr;
  return codeStr
    .replace(/\/\* Step (\d+):/gi, '/* $1-Qadam:')
    .replace(/\/\/ Step (\d+):/gi, '// $1-Qadam:')
    .replace(/\/\* In JavaScript, /gi, '/* JavaScript da, ')
    .replace(/\/\/ Call the function /gi, '// Funksiyani chaqiring ')
    .replace(/\/\/ Define the class /gi, '// Klassni e\'lon qiling ')
    .replace(/\/\/ Declare the variable /gi, '// O\'zgaruvchini e\'lon qiling ');
}

export function localize(val, lang = 'en') {
  if (val === null || val === undefined) return '';
  if (typeof val === 'object' && !Array.isArray(val)) {
    const res = val[lang] || val.en || Object.values(val)[0] || '';
    if (lang === 'uz' && typeof res === 'string') {
      return translateCodeCommentsToUz(res);
    }
    return res;
  }
  const str = String(val);
  if (lang === 'uz') {
    return translateCodeCommentsToUz(str);
  }
  return str;
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
  try {
    ambientEngine = initAmbientCanvas('ambient-canvas');
  } catch (err) {
    console.warn('Ambient background warning:', err);
  }
  attachGlobalListeners();
  applyStateToUI();
  updateEditorModeUI();
  selectLesson(state.currentLessonId || LESSONS[0].id);
}

function cacheElements() {
  elements.app = document.body;
  elements.starCount = document.getElementById('star-count');
  elements.btnLangUz = document.getElementById('btn-lang-uz');
  elements.btnLangEn = document.getElementById('btn-lang-en');
  elements.btnTheme = document.getElementById('btn-theme');
  elements.themeSwitcherDeck = document.getElementById('theme-switcher-deck');
  elements.btnToggleEditorMode = document.getElementById('btn-toggle-editor-mode');
  elements.editorModeLabel = document.getElementById('editor-mode-label');
  elements.editorModeStatus = document.getElementById('editor-mode-status');
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
      if (!currentCode || currentCode.trim() === prevStarter.trim() || currentCode.includes('Step ') || currentCode.includes('Qadam:')) {
        currentCode = newStarter;
      } else if (lang === 'uz') {
        currentCode = translateCodeCommentsToUz(currentCode);
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

  // 4 Creative Themes Segmented Buttons
  document.querySelectorAll('.theme-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedTheme = btn.getAttribute('data-theme');
      if (selectedTheme) {
        state = setTheme(state, selectedTheme);
        saveStateToStorage(state);
        playSound('click', state.audioEnabled);
        applyTheme();
      }
    });
  });

  // Backward compatible Theme Toggle button
  elements.btnTheme?.addEventListener('click', () => {
    const themes = ['dark', 'light', 'synthwave', 'matrix'];
    const currentIdx = themes.indexOf(state.theme || 'dark');
    const nextTheme = themes[(currentIdx + 1) % themes.length];
    state = setTheme(state, nextTheme);
    saveStateToStorage(state);
    applyTheme();
    playSound('click', state.audioEnabled);
  });

  // Direct Code Mode Lock Toggle
  elements.btnToggleEditorMode?.addEventListener('click', () => {
    state = toggleEditorFirstMode(state);
    saveStateToStorage(state);
    playSound('click', state.audioEnabled);
    updateEditorModeUI();
    if (state.editorFirstMode) {
      const editorSplit = document.getElementById('editor-stage-split') || document.querySelector('.editor-preview-split');
      if (editorSplit) {
        editorSplit.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.getElementById('code-editor')?.focus();
      }
    }
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
    } else if (e.data.type === 'TARGET_CONSOLE_LOG') {
      addTargetConsoleLine(e.data.method, e.data.text);
    }
  });
}

function applyTheme() {
  const theme = state.theme || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  document.body.setAttribute('data-theme', theme);
  if (ambientEngine) {
    ambientEngine.setTheme(theme);
  }
  document.querySelectorAll('.theme-pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-theme') === theme);
  });
  if (elements.btnTheme) {
    elements.btnTheme.textContent = theme === 'light' ? '☀️' : (theme === 'matrix' ? '🟢' : (theme === 'synthwave' ? '🌌' : '🌙'));
    elements.btnTheme.title = `Active Theme: ${theme}`;
  }
}

function updateEditorModeUI() {
  const btn = document.getElementById('btn-toggle-editor-mode');
  const label = document.getElementById('editor-mode-label');
  const status = document.getElementById('editor-mode-status');
  const isUz = state.lang === 'uz';
  const isActive = !!state.editorFirstMode;

  if (btn) btn.classList.toggle('active', isActive);
  if (label) label.textContent = isUz ? 'Kod Rejimi' : 'Direct Code';
  if (status) {
    status.textContent = isActive ? (isUz ? 'YOQILGAN' : 'ON') : (isUz ? 'O\'CHIQ' : 'OFF');
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

  // If in Direct Code Mode or Focus IDE Mode, stay anchored at the code editor!
  if (state.editorFirstMode || state.focusIdeMode) {
    setTimeout(() => {
      const editorStage = document.getElementById('editor-stage-split') || document.querySelector('.editor-preview-split');
      if (editorStage) {
        editorStage.scrollIntoView({ behavior: 'auto', block: 'start' });
        document.getElementById('code-editor')?.focus();
      }
    }, 25);
  }
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

function addTargetConsoleLine(type, text) {
  const body = document.getElementById('target-console-body');
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
      <section class="editor-preview-split" id="editor-stage-split">
        <!-- Left: Code Editor Pane -->
        <div class="editor-pane" id="pane-editor-js">
          <div class="pane-header">
            <div class="pane-title">
              <span>💻 ${t('codeEditorTitle', state.lang)}</span>
            </div>
            <div class="pane-actions">
              <button id="btn-toggle-html-boilerplate" class="btn-tool ${state.showHtmlDrawer ? 'active' : ''}" title="${isUz ? 'HTML va CSS qolip kodini ko\'rsatish/yashirish' : 'Show or hide underlying HTML & CSS boilerplate'}">🌐 ${state.showHtmlDrawer ? (isUz ? 'HTML/CSS Yashirish' : 'Hide HTML/CSS') : (isUz ? 'HTML & CSS' : 'HTML & CSS')}</button>
              <button id="btn-fullscreen-ide" class="btn-tool btn-fullscreen ${state.fullscreenIdeMode ? 'active' : ''}" title="${state.fullscreenIdeMode ? (isUz ? 'Kichraytirish (Esc)' : 'Exit Full Screen (Esc)') : (isUz ? 'To\'liq Ekran IDE rejimi' : 'Full Screen Dual IDE Mode')}">${state.fullscreenIdeMode ? '✕ ' + (isUz ? 'Kichraytirish' : 'Exit') : '⛶ ' + (isUz ? 'To\'liq Ekran' : 'Full Screen')}</button>
              <button id="btn-swap-panes" class="btn-tool ${state.panesSwapped ? 'active' : ''}" title="${isUz ? 'O\'ng va chap oynalar o\'rnini almashtirish' : 'Swap Editor and Preview panes'}">⇄ ${isUz ? 'Almashtirish' : 'Swap'}</button>
              <button id="btn-focus-mode" class="btn-tool ${state.focusIdeMode ? 'active' : ''}" title="${isUz ? 'Fokus rejimi' : 'Focus Mode'}">🔍 ${isUz ? 'Fokus' : 'Focus'}</button>
              <button id="btn-copy-code" class="btn-tool" title="Copy code">📋 ${t('copyBtn', state.lang)}</button>
              <button id="btn-tidy-code" class="btn-tool" title="Format code">🪄 ${t('tidyBtn', state.lang)}</button>
              <button id="btn-reset-code" class="btn-tool" title="Reset code">🔄 ${t('resetCode', state.lang)}</button>
            </div>
          </div>

          <!-- Underlying HTML & CSS Sandbox Drawer (Toggleable with 1-click) -->
          <div id="html-css-boilerplate-drawer" class="html-css-boilerplate-drawer ${state.showHtmlDrawer ? 'open' : ''}" style="${state.showHtmlDrawer ? '' : 'display:none;'}">
            <div class="boilerplate-drawer-header">
              <div style="display:flex; align-items:center; gap:8px;">
                <span style="font-weight:700; color:#38bdf8; font-size:12px;">🌐 ${isUz ? 'Laboratoriya HTML & CSS Asosi (Boilerplate)' : 'Sandbox HTML & CSS Boilerplate'}</span>
                <span class="badge-chip" style="font-size:10px; background:rgba(56,189,248,0.15); color:#38bdf8; padding:2px 6px; border-radius:4px; font-weight:700;">HTML5 + CSS3</span>
              </div>
              <div style="display:flex; gap:6px;">
                <button id="btn-copy-boilerplate" class="btn-tool" style="font-size:11px;" title="${isUz ? 'Qolip koddan nusxa olish' : 'Copy boilerplate'}">📋 ${isUz ? 'Nusxalash' : 'Copy'}</button>
                <button id="btn-close-boilerplate" class="btn-tool" style="font-size:11px;" title="${isUz ? 'Yopish' : 'Close'}">✕ ${isUz ? 'Yashirish' : 'Hide'}</button>
              </div>
            </div>
            <div class="boilerplate-drawer-content">
              <div class="boilerplate-pane">
                <div class="boilerplate-title">📄 index.html</div>
                <pre class="boilerplate-code"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="uz"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;JavaScript Sandbox&lt;/title&gt;
  &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1 id="title"&gt;Salom JavaScript!&lt;/h1&gt;
  &lt;div id="box"&gt;Interaktiv Quti&lt;/div&gt;
  &lt;p&gt;Hisob: &lt;span id="count"&gt;0&lt;/span&gt;&lt;/p&gt;
  &lt;button id="btn"&gt;Bosing! 🚀&lt;/button&gt;
  &lt;canvas id="game-canvas" width="400" height="150"&gt;&lt;/canvas&gt;

  &lt;script src="main.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
              </div>
              <div class="boilerplate-pane">
                <div class="boilerplate-title">🎨 style.css</div>
                <pre class="boilerplate-code"><code>body {
  font-family: system-ui, sans-serif;
  padding: 20px;
  background: #0f172a;
  color: #f8fafc;
}
#title {
  color: #38bdf8;
  font-size: 22px;
  margin-bottom: 8px;
}
#box {
  padding: 16px;
  background: #1e293b;
  border: 2px dashed #38bdf8;
  border-radius: 8px;
  margin: 12px 0;
  transition: all 0.3s ease;
}
#btn {
  padding: 8px 16px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}
#btn:hover { background: #2563eb; }
#game-canvas {
  background: #090d16;
  border: 1px solid #334155;
  border-radius: 6px;
  margin-top: 12px;
  display: block;
}</code></pre>
              </div>
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

        <!-- Draggable Pane Resizer Divider -->
        <div class="pane-resizer" id="pane-resizer" title="${isUz ? 'O\'lchamni o\'zgartirish uchun suring (Drag to resize)' : 'Drag to resize panes'}">
          <div class="resizer-knob"></div>
        </div>

        <!-- Right: Live Output & Virtual Console Pane with Preview Tabs -->
        <div class="preview-pane" id="pane-preview-js">
          <div class="pane-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding: 8px 12px; background:var(--bg-surface);">
            <div class="preview-tabs" style="display:flex; gap:6px;">
              <button id="tab-combo" class="prev-tab-btn ${activePreviewTab === 'combo' ? 'active' : ''}">⚡ ${escapeHtml(t('comboViewTab', state.lang))}</button>
              <button id="tab-live" class="prev-tab-btn ${activePreviewTab === 'live' ? 'active' : ''}">💻 ${escapeHtml(t('yourResultTab', state.lang))}</button>
              <button id="tab-elements" class="prev-tab-btn ${activePreviewTab === 'elements' ? 'active' : ''}">📋 ${escapeHtml(t('elementsGuideTab', state.lang))}</button>
              <button id="tab-target" class="prev-tab-btn ${activePreviewTab === 'target' ? 'active' : ''}">🎯 ${escapeHtml(t('targetGoalTab', state.lang))}</button>
              <button id="tab-side" class="prev-tab-btn ${activePreviewTab === 'side' ? 'active' : ''}">⚡ ${isUz ? 'Yonma-yon' : 'Side-by-Side'}</button>
            </div>
            <button id="btn-clear-console" class="btn-tool" style="font-size:11px;">🧹 ${t('clearConsoleBtn', state.lang)}</button>
          </div>

          <div id="js-preview-stage-container" style="flex:1; display:flex; flex-direction:column; overflow:hidden; position:relative; min-height:420px;">
            <div id="live-view-box" style="flex:1; display:flex; flex-direction:column; overflow:hidden;">
              <div class="js-console-header" style="background:#0f172a; padding:6px 12px; font-size:11px; color:#94a3b8; font-weight:700; border-bottom:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center;">
                <span class="js-console-title">🖥️ ${t('liveConsoleTitle', state.lang)}</span>
                <span style="font-size:10px; color:#38bdf8;">LIVE JS VIRTUAL MACHINE</span>
              </div>

              <div class="js-console-body" id="js-console-body" style="flex:1; overflow-y:auto; padding:10px; font-family:monospace; font-size:12px; background:#050811;">
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
        </div>
      </section>
    </div>
  `;

  elements.workspaceStage.classList.toggle('focus-ide-mode', !!state.focusIdeMode);
  elements.workspaceStage.classList.toggle('fullscreen-ide-active', !!state.fullscreenIdeMode);
  document.body.classList.toggle('fullscreen-ide-body', !!state.fullscreenIdeMode);
  if (state.focusIdeMode) {
    const focusBtn = document.getElementById('btn-focus-mode');
    if (focusBtn) {
      focusBtn.classList.add('active');
      focusBtn.style.color = '#f59e0b';
      focusBtn.style.borderColor = '#f59e0b';
    }
  }

  attachLessonEvents(lesson);
  setupPreviewTabs(lesson);
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

  // Focus Mode toggle: maximizes editor and preview space and persists state
  document.getElementById('btn-focus-mode')?.addEventListener('click', () => {
    state.focusIdeMode = !state.focusIdeMode;
    saveStateToStorage(state);
    elements.workspaceStage.classList.toggle('focus-ide-mode', state.focusIdeMode);
    const btn = document.getElementById('btn-focus-mode');
    if (btn) {
      btn.classList.toggle('active', state.focusIdeMode);
      btn.style.color = state.focusIdeMode ? '#f59e0b' : '';
      btn.style.borderColor = state.focusIdeMode ? '#f59e0b' : '';
    }
    playSound('click', state.audioEnabled);
  });

  // HTML & CSS Sandbox Boilerplate Drawer toggle
  const btnToggleHtml = document.getElementById('btn-toggle-html-boilerplate');
  const drawerEl = document.getElementById('html-css-boilerplate-drawer');
  const btnCloseDrawer = document.getElementById('btn-close-boilerplate');
  const btnCopyBoilerplate = document.getElementById('btn-copy-boilerplate');

  function toggleHtmlDrawer() {
    state.showHtmlDrawer = !state.showHtmlDrawer;
    if (drawerEl) {
      drawerEl.style.display = state.showHtmlDrawer ? 'flex' : 'none';
      drawerEl.classList.toggle('open', state.showHtmlDrawer);
    }
    if (btnToggleHtml) {
      btnToggleHtml.classList.toggle('active', state.showHtmlDrawer);
      btnToggleHtml.innerHTML = state.showHtmlDrawer
        ? `👁️ ${isUz ? 'HTML/CSS Yashirish' : 'Hide HTML/CSS'}`
        : `🌐 ${isUz ? 'HTML & CSS' : 'HTML & CSS'}`;
      btnToggleHtml.style.color = state.showHtmlDrawer ? '#38bdf8' : '';
      btnToggleHtml.style.borderColor = state.showHtmlDrawer ? '#38bdf8' : '';
    }
    playSound('click', state.audioEnabled);
  }

  btnToggleHtml?.addEventListener('click', toggleHtmlDrawer);
  btnCloseDrawer?.addEventListener('click', toggleHtmlDrawer);

  btnCopyBoilerplate?.addEventListener('click', () => {
    const fullBoilerplate = `<!-- index.html -->
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>JavaScript Sandbox</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1 id="title">Salom JavaScript!</h1>
  <div id="box">Interaktiv Quti</div>
  <p>Hisob: <span id="count">0</span></p>
  <button id="btn">Bosing! 🚀</button>
  <canvas id="game-canvas" width="400" height="150"></canvas>

  <script src="main.js"></script>
</body>
</html>

/* style.css */
body { font-family: system-ui, sans-serif; padding: 20px; background: #0f172a; color: #f8fafc; }
#title { color: #38bdf8; font-size: 22px; margin-bottom: 8px; }
#box { padding: 16px; background: #1e293b; border: 2px dashed #38bdf8; border-radius: 8px; margin: 12px 0; transition: all 0.3s ease; }
#btn { padding: 8px 16px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }
#btn:hover { background: #2563eb; }
#game-canvas { background: #090d16; border: 1px solid #334155; border-radius: 6px; margin-top: 12px; display: block; }`;

    navigator.clipboard?.writeText(fullBoilerplate).then(() => {
      btnCopyBoilerplate.textContent = isUz ? '✓ Nusxalandi!' : '✓ Copied!';
      setTimeout(() => {
        btnCopyBoilerplate.textContent = isUz ? '📋 Nusxalash' : '📋 Copy';
      }, 1500);
    });
  });

  // Start Practice Action (Jump to Code Editor & turn on Direct Code mode)
  btnStartPractice?.addEventListener('click', () => {
    playSound('click', state.audioEnabled);
    state.editorFirstMode = true;
    saveStateToStorage(state);
    updateEditorModeUI();
    const editorEl = document.getElementById('editor-stage-split') || document.querySelector('.editor-preview-split');
    if (editorEl) {
      editorEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
  const lesson = getLessonById(state.currentLessonId);
  if (frame) {
    executeJsInSandbox(currentCode, consoleBody, frame, lesson?.sandboxHtml, false).then(res => {
      if (!res.success && res.error) {
        addConsoleLine('error', '❌ Xatolik (Error): ' + res.error);
        playSound('tryAgain', state.audioEnabled);
      }
    });
  }
}

function runTargetPreview(lesson) {
  const targetConsole = document.getElementById('target-console-body');
  const targetFrame = document.getElementById('target-preview-frame');
  if (!targetFrame || !lesson) return;

  const targetCodeStr = localize(lesson.targetCode, state.lang);
  executeJsInSandbox(targetCodeStr, targetConsole, targetFrame, lesson.sandboxHtml, true).then(res => {
    if (res && res.logs && targetConsole) {
      targetConsole.innerHTML = '';
      res.logs.forEach(logItem => {
        const line = document.createElement('div');
        line.className = `console-line console-line-${logItem.method || 'log'}`;
        line.innerHTML = `
          <span class="console-line-time">Target</span>
          <span class="console-line-text">${escapeHtml(logItem.args.join(' '))}</span>
        `;
        targetConsole.appendChild(line);
      });
      targetConsole.scrollTop = targetConsole.scrollHeight;
    }
  });
}

let activePreviewTab = 'live';

function setupPreviewTabs(lesson) {
  const tabCombo = document.getElementById('tab-combo');
  const tabLive = document.getElementById('tab-live');
  const tabElements = document.getElementById('tab-elements');
  const tabTarget = document.getElementById('tab-target');
  const tabSide = document.getElementById('tab-side');
  const stage = document.getElementById('js-preview-stage-container');
  if (!stage) return;

  const isUz = state.lang === 'uz';

  function resetTabs() {
    [tabCombo, tabLive, tabElements, tabTarget, tabSide].forEach(t => t?.classList.remove('active'));
  }

  function attachPillListeners() {
    const pills = stage.querySelectorAll('.combo-tag-pill, .modal-tag-chip');
    pills.forEach(p => {
      p.addEventListener('click', () => {
        const codeToInsert = p.getAttribute('data-insert');
        const textarea = document.getElementById('js-code-textarea');
        if (textarea && codeToInsert) {
          const start = textarea.selectionStart || 0;
          const end = textarea.selectionEnd || 0;
          textarea.value = textarea.value.substring(0, start) + codeToInsert + textarea.value.substring(end);
          textarea.selectionStart = textarea.selectionEnd = start + codeToInsert.length;
          textarea.focus();
          currentCode = textarea.value;
          runCurrentCode();
          updateLineNumbers();
          playSound('click', state.audioEnabled);
        }
      });
    });
  }

  function renderComboView() {
    const cmds = lesson.listOfCommands || [];
    return `
      <div class="combo-view-container">
        <div class="combo-elements-shelf">
          <div class="combo-shelf-header">
            <span class="combo-shelf-title">📋 ${escapeHtml(t('comboElementsTitle', state.lang))}</span>
            <span class="combo-shelf-badge">${cmds.length} ta buyruq</span>
          </div>
          <div class="combo-tags-scroll">
            ${cmds.map(c => `
              <button class="combo-tag-pill" data-insert="${escapeHtml(c.code)}" title="${escapeHtml(localize(c.description, state.lang))}">
                <code>${escapeHtml(c.code)}</code>
                <span>${escapeHtml(localize(c.name, state.lang))}</span>
              </button>
            `).join('')}
          </div>
          ${lesson.targetDescription ? `
            <div class="combo-mission-mini">
              <strong style="color: #38bdf8; display: block; margin-bottom: 2px;">${escapeHtml(t('comboMissionTitle', state.lang))}</strong>
              <span style="font-size: 11px; line-height: 16px; color: #cbd5e1;">${formatProse(localize(lesson.targetDescription, state.lang))}</span>
            </div>
          ` : ''}
        </div>
        <div class="combo-preview-stage">
          <div class="combo-preview-label">
            <span>🖥️ ${escapeHtml(t('liveConsoleTitle', state.lang))} & Brauzer:</span>
          </div>
          <div class="js-console-body" id="js-console-body" style="flex:1; overflow-y:auto; padding:8px; font-family:monospace; font-size:11px; background:#050811;">
            <div class="console-line console-line-log">
              <span class="console-line-time">System</span>
              <span class="console-line-text">&gt; CodeCraft JS Sandbox Ready ⚡</span>
            </div>
          </div>
          <div style="height: 120px; border-top: 1px solid var(--border-color); background: #000;">
            <iframe id="live-preview-frame" sandbox="allow-scripts" style="width:100%; height:100%; border:none;"></iframe>
          </div>
        </div>
      </div>
    `;
  }

  function renderElementsView() {
    const cmds = lesson.listOfCommands || [];
    return `
      <div class="elements-tab-container">
        <div class="elements-tab-header">
          <h3 style="margin: 0 0 6px; font-size: 14px; color: #38bdf8;">📋 ${escapeHtml(localize(lesson.title, state.lang))} — ${escapeHtml(t('listOfTags', state.lang))}</h3>
          <p style="margin: 0; font-size: 12px; color: #94a3b8;">${escapeHtml(t('tagListDesc', state.lang))}</p>
        </div>
        <div class="elements-tab-table-wrap">
          <table class="tag-list-table">
            <thead>
              <tr>
                <th>${escapeHtml(t('colCode', state.lang))}</th>
                <th>${escapeHtml(t('colName', state.lang))}</th>
                <th>${escapeHtml(t('colMeaning', state.lang))}</th>
              </tr>
            </thead>
            <tbody>
              ${cmds.map(c => `
                <tr>
                  <td><button class="modal-tag-chip" data-insert="${escapeHtml(c.code)}" title="${escapeHtml(t('insertTagHint', state.lang))}">${escapeHtml(c.code)}</button></td>
                  <td><strong>${escapeHtml(localize(c.name, state.lang))}</strong></td>
                  <td>${formatProse(localize(c.description, state.lang))}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        ${lesson.stepBreakdown ? `
          <div class="elements-steps-box" style="margin-top: 14px; padding: 12px; background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color);">
            <h4 style="margin: 0 0 8px; font-size: 13px; color: #fbbf24;">🔍 ${escapeHtml(t('stepBreakdownHeader', state.lang))}</h4>
            <ol style="margin: 0; padding-left: 20px; font-size: 12px; line-height: 20px; color: #e2e8f0;">
              ${lesson.stepBreakdown.map(s => `<li>${formatProse(localize(s, state.lang))}</li>`).join('')}
            </ol>
          </div>
        ` : ''}
      </div>
    `;
  }

  function renderLiveView() {
    return `
      <div id="live-view-box" style="flex:1; display:flex; flex-direction:column; overflow:hidden;">
        <div class="js-console-header" style="background:#0f172a; padding:6px 12px; font-size:11px; color:#94a3b8; font-weight:700; border-bottom:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center;">
          <span class="js-console-title">🖥️ ${t('liveConsoleTitle', state.lang)}</span>
          <span style="font-size:10px; color:#38bdf8;">LIVE JS VIRTUAL MACHINE</span>
        </div>
        <div class="js-console-body" id="js-console-body" style="flex:1; overflow-y:auto; padding:10px; font-family:monospace; font-size:12px; background:#050811;">
          <div class="console-line console-line-log">
            <span class="console-line-time">System</span>
            <span class="console-line-text">&gt; CodeCraft JS Sandbox Ready ⚡</span>
          </div>
        </div>
        <div style="height: 160px; border-top: 1px solid var(--border-color); background: #000;">
          <iframe id="live-preview-frame" sandbox="allow-scripts" style="width:100%; height:100%; border:none;"></iframe>
        </div>
      </div>
    `;
  }

  // Initial load
  if (activePreviewTab === 'combo') {
    stage.innerHTML = renderComboView();
    attachPillListeners();
    runCurrentCode();
  }

  tabCombo?.addEventListener('click', () => {
    resetTabs();
    tabCombo.classList.add('active');
    activePreviewTab = 'combo';
    stage.innerHTML = renderComboView();
    attachPillListeners();
    runCurrentCode();
    playSound('click', state.audioEnabled);
  });

  tabElements?.addEventListener('click', () => {
    resetTabs();
    tabElements.classList.add('active');
    activePreviewTab = 'elements';
    stage.innerHTML = renderElementsView();
    attachPillListeners();
    playSound('click', state.audioEnabled);
  });

  function renderTargetView() {
    return `
      <div class="target-view-container" style="flex:1; display:flex; flex-direction:column; overflow:hidden;">
        <div class="target-explanation-box">
          <strong>🎯 ${escapeHtml(t('targetExplanationTitle', state.lang))}</strong>
          <p style="margin: 4px 0 0; white-space: pre-line;">${formatProse(localize(lesson.targetDescription, state.lang))}</p>
        </div>
        <div style="flex:1; display:flex; flex-direction:column; overflow:hidden;">
          <div class="js-console-header" style="background:#0f172a; padding:6px 12px; font-size:11px; color:#94a3b8; font-weight:700; border-bottom:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center;">
            <span>📋 ${isUz ? "Kutilayotgan Konsol va Dastur Natijasi" : "Expected Console & Application Result"}</span>
            <span style="font-size:10px; color:#10b981;">TARGET GOAL</span>
          </div>
          <div id="target-console-body" class="js-console-body" style="flex:1; overflow-y:auto; padding:10px; font-family:monospace; font-size:12px; background:#050811;">
            <div class="console-line console-line-log">
              <span class="console-line-time">Target</span>
              <span class="console-line-text">&gt; Executing Target Goal...</span>
            </div>
          </div>
          <div style="height: 160px; border-top: 1px solid var(--border-color); background: #000;">
            <iframe id="target-preview-frame" sandbox="allow-scripts" style="width:100%; height:100%; border:none;"></iframe>
          </div>
        </div>
      </div>
    `;
  }

  function renderSideBySideView() {
    return `
      <div style="display:grid; grid-template-columns:1fr 1fr; width:100%; height:100%; overflow:hidden;">
        <div style="border-right:1px solid var(--border-color); display:flex; flex-direction:column; overflow:hidden;">
          <div style="background:var(--bg-surface); padding:4px 10px; font-size:10px; font-weight:800; color:#38bdf8; border-bottom:1px solid var(--border-color);">${t('yourResultTab', state.lang).toUpperCase()}</div>
          <div class="js-console-body" id="js-console-body" style="flex:1; overflow-y:auto; padding:8px; font-family:monospace; font-size:11px; background:#050811;"></div>
          <div style="height:140px; border-top:1px solid var(--border-color); background:#000;">
            <iframe id="live-preview-frame" sandbox="allow-scripts" style="width:100%; height:100%; border:none;"></iframe>
          </div>
        </div>
        <div style="display:flex; flex-direction:column; overflow:hidden;">
          <div style="background:var(--bg-surface); padding:4px 10px; font-size:10px; font-weight:800; color:#10b981; border-bottom:1px solid var(--border-color);">${t('targetGoalTab', state.lang).toUpperCase()}</div>
          <div class="target-explanation-box" style="padding:8px; font-size:11px; max-height:80px; overflow-y:auto;">
            <strong>🎯 ${escapeHtml(t('targetExplanationTitle', state.lang))}</strong>
            <p style="margin:2px 0 0; white-space:pre-line;">${formatProse(localize(lesson.targetDescription, state.lang))}</p>
          </div>
          <div id="target-console-body" class="js-console-body" style="flex:1; overflow-y:auto; padding:8px; font-family:monospace; font-size:11px; background:#050811;"></div>
          <div style="height:140px; border-top:1px solid var(--border-color); background:#000;">
            <iframe id="target-preview-frame" sandbox="allow-scripts" style="width:100%; height:100%; border:none;"></iframe>
          </div>
        </div>
      </div>
    `;
  }

  tabLive?.addEventListener('click', () => {
    resetTabs();
    tabLive.classList.add('active');
    activePreviewTab = 'live';
    stage.innerHTML = renderLiveView();
    runCurrentCode();
    playSound('click', state.audioEnabled);
  });

  tabTarget?.addEventListener('click', () => {
    resetTabs();
    tabTarget.classList.add('active');
    activePreviewTab = 'target';
    stage.innerHTML = renderTargetView();
    runTargetPreview(lesson);
    playSound('click', state.audioEnabled);
  });

  tabSide?.addEventListener('click', () => {
    resetTabs();
    tabSide.classList.add('active');
    activePreviewTab = 'side';
    stage.innerHTML = renderSideBySideView();
    runCurrentCode();
    runTargetPreview(lesson);
    playSound('click', state.audioEnabled);
  });
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
  const commands = lesson.listOfCommands || lesson.tagShowcase || [];
  if (commands.length === 0) return;
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
            ${commands.map(item => {
              const codeVal = item.code || item.tag;
              const nameVal = item.name ? localize(item.name, state.lang) : codeVal;
              const descVal = item.description ? localize(item.description, state.lang) : (item.meaning ? localize(item.meaning, state.lang) : '');
              return `
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 10px 12px;">
                  <code class="code-chip insertable" data-insert="${escapeHtml(codeVal)}" style="cursor: pointer;" title="${escapeHtml(t('insertTagHint', state.lang))}">${escapeHtml(codeVal)}</code>
                </td>
                <td style="padding: 10px 12px; font-weight: 600; color: #f8fafc;">${escapeHtml(nameVal)}</td>
                <td style="padding: 10px 12px; color: #cbd5e1; font-size: 12px;">${escapeHtml(descVal)}</td>
              </tr>
            `;
            }).join('')}
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


function setupJsFullscreenIDE() {
  const btn = document.getElementById('btn-fullscreen-ide');
  const stage = document.querySelector('.workspace-stage');
  if (!btn || !stage) return;

  const toggle = (force) => {
    state.fullscreenIdeMode = typeof force === 'boolean' ? force : !state.fullscreenIdeMode;
    stage.classList.toggle('fullscreen-ide-active', !!state.fullscreenIdeMode);
    document.body.classList.toggle('fullscreen-ide-body', !!state.fullscreenIdeMode);
    btn.classList.toggle('active', !!state.fullscreenIdeMode);
    btn.innerHTML = state.fullscreenIdeMode
      ? `✕ ${state.lang === 'uz' ? 'Kichraytirish' : 'Exit'}`
      : `⛶ ${state.lang === 'uz' ? 'To\'liq Ekran' : 'Full Screen'}`;
    playSound('click', state.audioEnabled);
  };

  btn.addEventListener('click', () => toggle());

  if (!window._jsFsIdeEscListener) {
    window._jsFsIdeEscListener = true;
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.fullscreenIdeMode) {
        toggle(false);
      }
    });
  }
}

function setupJsPanesSwap() {
  const btn = document.getElementById('btn-swap-panes');
  const split = document.getElementById('editor-stage-split') || document.querySelector('.editor-preview-split');
  if (!btn || !split) return;

  if (state.panesSwapped) {
    split.classList.add('panes-swapped');
    btn.classList.add('active');
  }

  btn.addEventListener('click', () => {
    split.classList.toggle('panes-swapped');
    state.panesSwapped = split.classList.contains('panes-swapped');
    btn.classList.toggle('active', state.panesSwapped);
    saveStateToStorage(state);
    playSound('click', state.audioEnabled);
  });
}

function setupJsPaneResizer() {
  const resizer = document.getElementById('pane-resizer');
  const split = document.getElementById('editor-stage-split') || document.querySelector('.editor-preview-split');
  const editorPane = document.getElementById('pane-editor-js') || document.querySelector('.editor-pane');
  const previewPane = document.getElementById('pane-preview-js') || document.querySelector('.preview-pane');
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

    editorPane.style.flex = `0 0 calc(${pct}% - 5px)`;
    editorPane.style.width = `calc(${pct}% - 5px)`;
    previewPane.style.flex = `0 0 calc(${otherPct}% - 5px)`;
    previewPane.style.width = `calc(${otherPct}% - 5px)`;
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
}
