import { extractTaskCode, mergeTaskIntoFullCode, hasTaskMarkers } from './modules/codeFocusEngine.js';
import { openStudentPortalModal } from './modules/classroom.js';
import { initAmbientCanvas } from './modules/ambientCanvas.js';
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
  toggleLanguage,
  setLanguage,
  setTheme,
  toggleEditorFirstMode,
  toggleFocusIdeMode,
  toggleEditorViewMode,
  saveStateToStorage,
  loadStateFromStorage
} from './modules/state.js';
import { t, UI_TEXT } from './modules/i18n.js';
import { playSound } from './modules/audio.js';
import { triggerConfetti } from './modules/confetti.js';
import { TEMPLATES, downloadHtmlFile } from './modules/sandbox.js';
import { renderBoxModelLab } from './labs/boxModelLab.js';
import { renderFlexboxLab } from './labs/flexboxLab.js';
import { renderColorLab } from './labs/colorLab.js';
import { renderGridLab } from './labs/gridLab.js';
import { renderTopicLab } from './labs/topicLabs.js';
import { speakText, stopSpeaking, isSpeaking } from './modules/speech.js';

// Application State
let state = loadStateFromStorage();
let currentView = 'lesson'; // 'lesson' | 'sandbox' | 'labs'
let currentLab = 'box'; // 'box' | 'flexbox' | 'color' | 'grid'
let activePreviewTab = 'live'; // 'combo' | 'live' | 'elements' | 'target' | 'side'
let currentCode = '';
let currentFullCode = '';
let ambientEngine = null;

// DOM Elements Cache
const elements = {};

export function translateCodeCommentsToUz(codeStr) {
  if (!codeStr || typeof codeStr !== 'string') return codeStr;
  return codeStr
    .replace(/\/\* Step (\d+):/gi, '/* $1-Qadam:')
    .replace(/<!-- Step (\d+):/gi, '<!-- $1-Qadam:')
    .replace(/\/\/ Step (\d+):/gi, '// $1-Qadam:')
    .replace(/\/\* In CSS, a dot \. means class \*\//gi, '/* CSS da nuqta . klass belgisidir */')
    .replace(/<!-- Give this span class="badge" -->/gi, '<!-- Ushbu span ga class="badge" bering -->')
    .replace(/\/\* The text is crammed against the walls! \*\//gi, '/* Matn devorlarga siqilib qolgan! */')
    .replace(/<!-- The treasure items are loose on the floor! -->/gi, '<!-- Xazina buyumlari polga sochilib yotibdi! -->')
    .replace(/<!-- Step 1: Wrap the treasure below inside a <div> container -->/gi, '<!-- 1-Qadam: Xazinani <div> ichiga oling -->')
    .replace(/<!-- Step 2: Shape the box with style="border: 4px solid #2dd4bf; padding: 16px;" -->/gi, '<!-- 2-Qadam: Qutiga style="border: 4px solid #2dd4bf; padding: 16px;" bering -->')
    .replace(/<!-- Step 1: Put the picture here using <img src="\.\.\." alt="\.\.\."> -->/gi, '<!-- 1-Qadam: <img> bilan rasmni joylashtiring -->')
    .replace(/<!-- Step 2: Shape its size by setting width="260" so it fits nicely! -->/gi, '<!-- 2-Qadam: width="260" orqali rasmni o\'lchamga keltiring -->')
    .replace(/\/\* Step 1: Use transform: rotate\(15deg\); on Box 1 \*\//gi, '/* 1-Qadam: .box-1 ni transform: rotate(15deg); bilan buring */')
    .replace(/\/\* Step 2: Use transform: scale\(1\.2\); on Box 2 \*\//gi, '/* 2-Qadam: .box-2 ni transform: scale(1.2); bilan kattalashtiring */')
    .replace(/\/\* Step 3: Use transform: translateY\(-15px\); on Box 3 \*\//gi, '/* 3-Qadam: .box-3 ni transform: translateY(-15px); bilan yuqoriga suring */')
    .replace(/\/\* Step 2: Add \.magic-btn:hover power below! \*\//gi, '/* 2-Qadam: .magic-btn:hover uslubini qo\'shing! */')
    .replace(/<!-- Step 1: Put the button here using <button class="magic-btn">✨ Turbo Boost<\/button> -->/gi, '<!-- 1-Qadam: <button class="magic-btn">✨ Turbo Boost</button> tugmasini qo\'ying -->')
    .replace(/\/\* Add gradient background below! \*\//gi, '/* Gradient fonini pastda qo\'shing! */')
    .replace(/\/\* Add glowing text-shadow here! \*\//gi, '/* Tovlanuvchi text-shadow qo\'shing! */')
    .replace(/\/\* Add animation here! \*\//gi, '/* Animatsiyani shu yerda qo\'shing! */')
    .replace(/<!-- Step 1: Open the header row using <tr> and add 4 <th> column titles: -->/gi, '<!-- 1-Qadam: <tr> bilan sarlavha qatorini oching va 4 ta <th> ustun nomini yozing: -->')
    .replace(/<!-- Step 2: Open 1st player row using <tr class="champion"> with 4 <td> cells: -->/gi, '<!-- 2-Qadam: <tr class="champion"> bilan 1-o\'rin qatorini oching va 4 ta <td> yozing: -->')
    .replace(/<!-- Step 3: Open 2nd player row using <tr> with 4 <td> cells: -->/gi, '<!-- 3-Qadam: <tr> bilan 2-o\'rin qatorini oching va 4 ta <td> yozing: -->')
    .replace(/<!-- Step 4: Open 3rd player row using <tr> with 4 <td> cells: -->/gi, '<!-- 4-Qadam: <tr> bilan 3-o\'rin qatorini oching va 4 ta <td> yozing: -->')
    .replace(/<!-- Step 5: Open tournament total row using <tr class="total-row"> with colspan="3": -->/gi, '<!-- 5-Qadam: <tr class="total-row"> bilan colspan="3" umumiy hisob qatorini oching: -->')
    .replace(/<!-- Step 1: Add class="card" to the outer box -->/gi, '<!-- 1-Qadam: Tashqi qutiga class="card" bering -->')
    .replace(/<!-- Step 2: Add class="badge bg-success rounded-pill" to the ONLINE status span -->/gi, '<!-- 2-Qadam: Status span ga class="badge bg-success rounded-pill" bering -->')
    .replace(/<!-- Step 3: Add class="alert alert-primary" to the warp drive notification -->/gi, '<!-- 3-Qadam: Bildirishnomaga class="alert alert-primary" bering -->')
    .replace(/<!-- Step 4: Add class="btn btn-primary" to the launch button! -->/gi, '<!-- 4-Qadam: Tugmaga class="btn btn-primary" bering! -->')
    .replace(/<!-- Step 1: Add class="navbar navbar-dark bg-dark" to the <nav> element -->/gi, '<!-- 1-Qadam: <nav> elementiga class="navbar navbar-dark bg-dark" bering -->')
    .replace(/<!-- Step 2: Add class="navbar-brand" to the logo link -->/gi, '<!-- 2-Qadam: Logotip havolasiga class="navbar-brand" bering -->')
    .replace(/<!-- Step 3: Add class="nav-link active" to the Home link -->/gi, '<!-- 3-Qadam: Bosh sahifa havolasiga class="nav-link active" bering -->')
    .replace(/<!-- Step 4: Add class="btn btn-outline-info btn-sm" to the connect button! -->/gi, '<!-- 4-Qadam: Ulanish tugmasiga class="btn btn-outline-info btn-sm" bering! -->');
}

/**
 * Resolves a bilingual string or object: { en: '...', uz: '...' }
 */
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

/**
 * Formats educational markdown and escapes dangerous HTML to prevent DOM table corruption.
 * Safely converts `code` to <code class="inline-code">, **bold** to <strong>, *italic* to <em>, and newlines to <br>.
 */
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
  elements.btnLang = document.getElementById('btn-lang');
  elements.btnLangUz = document.getElementById('btn-lang-uz');
  elements.btnLangEn = document.getElementById('btn-lang-en');
  elements.btnTheme = document.getElementById('btn-theme');
  elements.themeSwitcherDeck = document.getElementById('theme-switcher-deck');
  elements.btnToggleEditorMode = document.getElementById('btn-toggle-editor-mode');
  elements.editorModeLabel = document.getElementById('editor-mode-label');
  elements.editorModeStatus = document.getElementById('editor-mode-status');
  elements.btnAudio = document.getElementById('btn-audio');
  elements.btnTeacher = document.getElementById('btn-teacher');
  elements.btnLabs = document.getElementById('btn-labs');
  elements.btnSandbox = document.getElementById('btn-sandbox');
  elements.btnStudentProfile = document.getElementById('btn-student-profile');

  elements.sidebarLessonList = document.getElementById('sidebar-lesson-list');
  elements.progressFill = document.getElementById('progress-fill');
  elements.progressText = document.getElementById('progress-text');
  elements.progressTitle = document.getElementById('progress-title');

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
    playSound('click', state.audioEnabled);
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

    if (currentView === 'sandbox') {
      renderSandboxView();
    } else if (currentView === 'labs') {
      renderLabsView();
    } else {
      renderSidebar();
      renderLessonView();
    }
  }

  // Dual Segmented Switcher
  elements.btnLangUz?.addEventListener('click', () => switchLang('uz'));
  elements.btnLangEn?.addEventListener('click', () => switchLang('en'));

  // Language Toggle (English <-> Uzbek)
  elements.btnLang?.addEventListener('click', () => {
    stopSpeaking();
    const prevLang = state.lang;
    state = toggleLanguage(state);
    saveStateToStorage(state);
    playSound('click', state.audioEnabled);
    applyStateToUI();

    const lesson = getLessonById(state.currentLessonId);
    if (lesson) {
      const prevStarter = localize(lesson.initialCode, prevLang);
      const newStarter = localize(lesson.initialCode, state.lang);
      if (!currentCode || currentCode.trim() === prevStarter.trim() || currentCode.includes('Step ') || currentCode.includes('Qadam:')) {
        currentCode = newStarter;
      } else if (state.lang === 'uz') {
        currentCode = translateCodeCommentsToUz(currentCode);
      }
    }

    if (currentView === 'sandbox') {
      renderSandboxView();
    } else if (currentView === 'labs') {
      renderLabsView();
    } else {
      renderSidebar();
      renderLessonView();
    }
  });

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
      document.querySelector('.editor-stage-split')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.getElementById('code-textarea')?.focus();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.querySelector('.lesson-workspace')?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // Audio toggle
  elements.btnAudio?.addEventListener('click', () => {
    state.audioEnabled = !state.audioEnabled;
    saveStateToStorage(state);
    elements.btnAudio.textContent = state.audioEnabled ? '🔊' : '🔇';
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

  // Visual Interactive Labs toggle
  elements.btnLabs?.addEventListener('click', () => {
    stopSpeaking();
    currentView = currentView === 'labs' ? 'lesson' : 'labs';
    elements.btnLabs.classList.toggle('active', currentView === 'labs');
    elements.btnSandbox?.classList.remove('active');
    playSound('click', state.audioEnabled);

    if (currentView === 'labs') {
      renderLabsView();
    } else {
      renderLessonView();
    }
  });

  // Free Sandbox toggle
  elements.btnSandbox?.addEventListener('click', () => {
    stopSpeaking();
    currentView = currentView === 'sandbox' ? 'lesson' : 'sandbox';
    elements.btnSandbox.classList.toggle('active', currentView === 'sandbox');
    elements.btnLabs?.classList.remove('active');
    playSound('click', state.audioEnabled);

    if (currentView === 'sandbox') {
      renderSandboxView();
    } else {
      renderLessonView();
    }
  });

  // Brand click -> Return to lessons
  document.querySelector('.brand')?.addEventListener('click', () => {
    stopSpeaking();
    currentView = 'lesson';
    elements.btnSandbox?.classList.remove('active');
    elements.btnLabs?.classList.remove('active');
    playSound('click', state.audioEnabled);
    selectLesson(LESSONS[0].id);
  });
}

function applyTheme() {
  const theme = state.theme || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
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
  if (avatarEl) avatarEl.textContent = state.studentAvatar || '🚀';
  const nameEl = document.getElementById('header-student-name');
  if (nameEl) nameEl.textContent = state.studentName || 'Code Cadet';
  const shiftEl = document.getElementById('header-student-shift');
  if (shiftEl) shiftEl.textContent = state.shift || '1-Smena';

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
  if (elements.btnLang) {
    elements.btnLang.textContent = state.lang === 'uz' ? '🇬🇧 English' : '🇺🇿 O\'zbekcha';
  }
  if (elements.btnTeacher) {
    elements.btnTeacher.classList.toggle('active', state.teacherMode);
  }
  if (elements.btnAudio) {
    elements.btnAudio.textContent = state.audioEnabled ? '🔊' : '🔇';
  }
  if (elements.btnSandbox) {
    elements.btnSandbox.textContent = '🛠️ Sandbox';
  }
  updateProgressUI();
  renderSidebar();
}

function updateProgressUI() {
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
      elements.btnLabs?.classList.remove('active');
      playSound('click', state.audioEnabled);
      selectLesson(lessonId);
    });
  });
}

export function selectLesson(lessonId) {
  stopSpeaking();
  currentView = 'lesson';
  elements.btnSandbox?.classList.remove('active');
  elements.btnLabs?.classList.remove('active');
  const lesson = getLessonById(lessonId) || LESSONS[0];
  state.currentLessonId = lesson.id;
  currentFullCode = localize(lesson.initialCode, state.lang);
  currentCode = currentFullCode;
  saveStateToStorage(state);

  renderSidebar();
  renderLessonView();

  // If in Direct Code Mode or Focus IDE Mode, keep workspace positioned right at the editor!
  if (state.editorFirstMode || state.focusIdeMode) {
    setTimeout(() => {
      const editorStage = document.getElementById('editor-stage-split') || document.querySelector('.editor-stage-split');
      if (editorStage) {
        editorStage.scrollIntoView({ behavior: 'auto', block: 'start' });
        document.getElementById('code-textarea')?.focus();
      }
    }, 25);
  }
}

/**
 * Wraps bare student snippets cleanly so kids never have to write HTML boilerplate!
 */
export function wrapForPreview(snippet) {
  if (snippet.includes('<!DOCTYPE') || snippet.includes('<html')) {
    // If full document does not specify a background, inject dark canvas style to prevent blinding white flashes
    if (!snippet.includes('background:') && !snippet.includes('background-color:')) {
      if (snippet.includes('<head>')) {
        return snippet.replace('<head>', '<head><style>body { background-color: #0b0d13; color: #cbd5e1; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }</style>');
      }
      return `<style>body { background-color: #0b0d13; color: #cbd5e1; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }</style>${snippet}`;
    }
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
      background: #0b0d13;
      color: #cbd5e1;
      line-height: 1.6;
    }
    h1, h2, h3, h4 { margin-top: 0; color: #f1f5f9; }
    p { margin-bottom: 16px; color: #cbd5e1; }
    button {
      background: #5b5fc7;
      color: #ffffff;
      border: none;
      padding: 10px 18px;
      font-size: 15px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 700;
      margin-right: 8px;
      margin-bottom: 8px;
      transition: background 0.15s;
    }
    button:hover { background: #4e52b3; }
    ul, ol { padding-left: 24px; margin-bottom: 16px; }
    li { margin-bottom: 6px; }
    a { color: #38bdf8; text-decoration: underline; }
    img { max-width: 100%; height: auto; border-radius: 8px; }
    table {
      border-collapse: collapse;
      color: #cbd5e1;
      margin-bottom: 16px;
    }
    th, td {
      border: 1px solid #334155;
      padding: 8px 12px;
    }
    th {
      background: rgba(91, 95, 199, 0.25);
      color: #f1f5f9;
    }
    /* Offline Bootstrap 5 Essentials */
    *, *::before, *::after { box-sizing: border-box; }
    .container, .container-fluid { width: 100%; padding-right: 12px; padding-left: 12px; margin: 0 auto; max-width: 100%; }
    .row { display: flex; flex-wrap: wrap; margin-right: -8px; margin-left: -8px; }
    .row > * { box-sizing: border-box; flex-shrink: 0; width: 100%; max-width: 100%; padding-right: 8px; padding-left: 8px; }
    .col { flex: 1 0 0%; }
    .col-12 { flex: 0 0 auto; width: 100%; }
    .col-6 { flex: 0 0 auto; width: 50%; }
    .col-4 { flex: 0 0 auto; width: 33.333333%; }
    .col-3 { flex: 0 0 auto; width: 25%; }
    @media (min-width: 768px) {
      .col-md-6 { flex: 0 0 auto; width: 50%; }
      .col-md-4 { flex: 0 0 auto; width: 33.333333%; }
      .col-md-3 { flex: 0 0 auto; width: 25%; }
      .col-md-12 { flex: 0 0 auto; width: 100%; }
    }
    .card { position: relative; display: flex; flex-direction: column; background: #1a1e2d; border: 1px solid #2e384d; border-radius: 12px; overflow: hidden; margin-bottom: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
    .card-header { padding: 10px 14px; background: rgba(255,255,255,0.05); border-bottom: 1px solid #2e384d; font-weight: 700; color: #38bdf8; }
    .card-body { padding: 14px; }
    .card-title { margin-top: 0; margin-bottom: 6px; font-size: 17px; font-weight: 700; color: #fff; }
    .card-text { margin-bottom: 10px; color: #cbd5e1; font-size: 14px; }
    .btn { display: inline-block; font-weight: 600; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 8px 14px; font-size: 13px; border-radius: 8px; transition: all 0.2s; }
    .btn-primary { background: #3b82f6; color: #fff; border-color: #3b82f6; }
    .btn-success { background: #10b981; color: #fff; border-color: #10b981; }
    .btn-danger { background: #ef4444; color: #fff; border-color: #ef4444; }
    .btn-warning { background: #f59e0b; color: #000; border-color: #f59e0b; }
    .btn-outline-primary { background: transparent; color: #38bdf8; border-color: #38bdf8; }
    .badge { display: inline-block; padding: 4px 8px; font-size: 11px; font-weight: 700; border-radius: 6px; color: #fff; }
    .rounded-pill { border-radius: 50rem !important; }
    .bg-primary { background: #3b82f6 !important; color: #fff !important; }
    .bg-success { background: #10b981 !important; color: #fff !important; }
    .bg-danger { background: #ef4444 !important; color: #fff !important; }
    .bg-warning { background: #f59e0b !important; color: #000 !important; }
    .alert { padding: 10px 14px; border-radius: 8px; margin-bottom: 12px; font-size: 13px; }
    .alert-primary { background: rgba(59,130,246,0.15); border: 1px solid #3b82f6; color: #93c5fd; }
    .alert-success { background: rgba(16,185,129,0.15); border: 1px solid #10b981; color: #6ee7b7; }
    .alert-warning { background: rgba(245,158,11,0.15); border: 1px solid #f59e0b; color: #fde047; }
    .navbar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; padding: 8px 14px; border-radius: 8px; margin-bottom: 16px; background: #0f172a; border: 1px solid #1e293b; }
    .navbar-brand { font-size: 16px; font-weight: 800; color: #38bdf8; text-decoration: none; display: flex; align-items: center; gap: 6px; }
    .navbar-nav { display: flex; list-style: none; padding: 0; margin: 0; gap: 6px; }
    .nav-link { padding: 5px 10px; color: #94a3b8; text-decoration: none; font-size: 13px; border-radius: 5px; }
    .nav-link.active, .nav-link:hover { color: #fff; background: rgba(255,255,255,0.08); }
    /* Third Party & Animation Helpers */
    .animate__animated { animation-duration: 1s; animation-fill-mode: both; }
    .animate__bounceIn { animation-name: bounceIn; }
    .animate__pulse { animation-name: pulse; animation-iteration-count: infinite; }
    .animate__fadeInUp { animation-name: fadeInUp; }
    @keyframes bounceIn { 0% { opacity: 0; transform: scale3d(0.3,0.3,0.3); } 20% { transform: scale3d(1.1,1.1,1.1); } 40% { transform: scale3d(0.9,0.9,0.9); } 60% { opacity: 1; transform: scale3d(1.03,1.03,1.03); } 80% { transform: scale3d(0.97,0.97,0.97); } 100% { opacity: 1; transform: scale3d(1,1,1); } }
    @keyframes pulse { 0% { transform: scale3d(1,1,1); } 50% { transform: scale3d(1.08,1.08,1.08); } 100% { transform: scale3d(1,1,1); } }
    @keyframes fadeInUp { 0% { opacity: 0; transform: translate3d(0,30px,0); } 100% { opacity: 1; transform: translate3d(0,0,0); } }
    /* Custom Scrollbar for overflow demos */
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: #07090e; border-radius: 4px; }
    ::-webkit-scrollbar-thumb { background: #38bdf8; border-radius: 4px; }
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
      <div class="banner-content-wrap">
        <div class="banner-meta">
          <span class="badge-module">${escapeHtml(lesson.module.toUpperCase())}</span>
          <span class="badge-tags">${escapeHtml(lesson.tag)}</span>
          ${isCompleted ? `<span class="badge-completed">✓ ${escapeHtml(t('completedTag', state.lang))}</span>` : ''}
        </div>
        <h2 class="banner-title">${lesson.icon} ${escapeHtml(localize(lesson.title, state.lang))}</h2>
        <p class="banner-summary">${formatProse(localize(lesson.summary, state.lang))}</p>

        <!-- Dedicated Interactive Study Action Deck -->
        <div class="topic-action-deck">
          <button id="btn-topic-lab" class="btn-deck-item btn-deck-lab" title="${escapeHtml(t('topicLabBtn', state.lang))}">
            <span class="deck-icon">🧪</span>
            <div class="deck-text">
              <span class="deck-label">${escapeHtml(t('topicLabBtn', state.lang))}</span>
              <span class="deck-sub">${state.lang === 'uz' ? 'Evolyutsiya Slayderi' : 'Step-by-Step Evolution Slider'}</span>
            </div>
          </button>
          <button id="btn-tag-list" class="btn-deck-item btn-deck-tags" title="${escapeHtml(t('listOfTags', state.lang))}">
            <span class="deck-icon">📋</span>
            <div class="deck-text">
              <span class="deck-label">${escapeHtml(t('listOfTags', state.lang))}</span>
              <span class="deck-sub">${state.lang === 'uz' ? 'Teglar jadvali va namunalar' : 'Tag Cheat Sheet & Examples'}</span>
            </div>
          </button>
          <button id="btn-start-practice" class="btn-deck-item btn-deck-practice" title="${state.lang === 'uz' ? 'Amaliyotni Boshlash' : 'Start Practice'}">
            <span class="deck-icon">💻</span>
            <div class="deck-text">
              <span class="deck-label">${state.lang === 'uz' ? 'Amaliyotni Boshlash' : 'Start Practice'}</span>
              <span class="deck-sub">${state.lang === 'uz' ? 'Tayyor kod bilan mashq' : 'Jump to Live Editor'}</span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Teacher Coaching Playbook (Toggleable) -->
    <div id="teacher-playbook-box" class="teacher-playbook" style="${state.teacherMode ? 'display:block' : 'display:none'}">
      <h4>${escapeHtml(t('teacherTips', state.lang))}</h4>
      <div class="teacher-playbook-grid">
        <div class="teacher-item">
          <strong>💡 Kid Analogy:</strong>
          <span>${formatProse(localize(lesson.teacherGuide.analogy, state.lang))}</span>
        </div>
        <div class="teacher-item">
          <strong>🗣️ Question to Ask Aloud:</strong>
          <span>${formatProse(localize(lesson.teacherGuide.discussionQuestions?.[0], state.lang))}</span>
        </div>
        <div class="teacher-item">
          <strong>⚠️ Watch Out For:</strong>
          <span>${formatProse(localize(lesson.teacherGuide.commonMistakes?.[0], state.lang))}</span>
        </div>
      </div>
    </div>

    <!-- STEP 1: In Human Language (Plain explanation for kids) -->
    ${renderHumanIntro(lesson)}

    <!-- STEP 2: Step-by-Step Anatomy (Only the pieces of code for this theme & their exact visual results) -->
    ${renderAnatomySection(lesson)}

    <!-- HIGH-VISIBILITY MISSION SPOTLIGHT (Directly Above Code Editor) -->
    <div class="mission-spotlight-card">
      <div class="mission-spotlight-header">
        <div class="mission-spotlight-badge">
          <span class="mission-pulse-dot"></span>
          <span class="mission-badge-text">🎯 ${escapeHtml(t('missionTag', state.lang)).toUpperCase()}</span>
        </div>
        <div class="mission-quick-actions">
          <button id="btn-read-mission" class="btn-mission-read" title="${escapeHtml(t('readAloudBtn', state.lang))}">
            🔊 ${escapeHtml(t('readAloudBtn', state.lang))}
          </button>
          <button id="btn-hint" class="btn-mission-hint" title="${escapeHtml(t('hintBtn', state.lang))}">
            ${escapeHtml(t('hintBtn', state.lang))}
          </button>
          <button id="btn-verify-mission" class="btn-mission-verify" title="${escapeHtml(t('checkCodeBtn', state.lang))}">
            ${escapeHtml(t('checkCodeBtn', state.lang))}
          </button>
        </div>
      </div>
      <div class="mission-spotlight-body">
        <div class="mission-spotlight-text">
          ${formatProse(localize(lesson.challenge.mission, state.lang))}
        </div>
      </div>
    </div>

    <!-- Editor & Live Preview Split with Dual Fullscreen & Resizer -->
    <div class="editor-stage-split ${state.panesSwapped ? 'panes-swapped' : ''}" id="editor-stage-split">
      <!-- Left: Code Studio -->
      <div class="pane-card pane-card-editor" id="pane-card-editor">
        <div class="pane-header">
          <div class="pane-title">
            <span>💻</span> ${escapeHtml(t('codeEditorTitle', state.lang))}
          </div>
          <div class="pane-tools">
            <button id="btn-toggle-task-focus" class="btn-tool btn-focus-toggle ${state.editorViewMode !== 'full' ? 'active' : ''}" title="${state.lang === 'uz' ? 'Faqat vazifa kodi yoki to\'liq kodni ko\'rsatish' : 'Toggle Task Only vs Full Code'}">${state.editorViewMode !== 'full' ? '🎯 ' + (state.lang === 'uz' ? 'Faqat Vazifa' : 'Task Only') : '📄 ' + (state.lang === 'uz' ? 'To\'liq Kod' : 'Full Code')}</button>
            <button id="btn-fullscreen-ide" class="btn-tool btn-fullscreen ${state.fullscreenIdeMode ? 'active' : ''}" title="${state.fullscreenIdeMode ? (state.lang === 'uz' ? 'Kichraytirish (Esc)' : 'Exit Full Screen (Esc)') : (state.lang === 'uz' ? 'To\'liq Ekran IDE rejimi (Kengaytirilgan ikkitalik oyna)' : 'Full Screen Dual IDE Mode')}">${state.fullscreenIdeMode ? '✕ ' + (state.lang === 'uz' ? 'Kichraytirish' : 'Exit') : '⛶ ' + (state.lang === 'uz' ? 'To\'liq Ekran' : 'Full Screen')}</button>
            <button id="btn-swap-panes" class="btn-tool ${state.panesSwapped ? 'active' : ''}" title="${state.lang === 'uz' ? 'O\'ng va chap oynalar o\'rnini almashtirish' : 'Swap Editor and Preview panes'}">⇄ ${state.lang === 'uz' ? 'Almashtirish' : 'Swap'}</button>
            <button id="btn-focus-mode" class="btn-tool ${state.focusIdeMode ? 'active' : ''}" title="${state.lang === 'uz' ? 'Fokus rejimi (Kengaytirilgan IDE)' : 'Focus Mode (Expanded IDE)'}">🔍 ${state.lang === 'uz' ? 'Fokus' : 'Focus'}</button>
            <button id="btn-reset-code" class="btn-tool" title="${escapeHtml(t('resetCode', state.lang))}">${escapeHtml(t('resetCode', state.lang))}</button>
            <button id="btn-copy-code" class="btn-tool" title="${escapeHtml(t('copyBtn', state.lang))}">${escapeHtml(t('copyBtn', state.lang))}</button>
          </div>
        </div>

        <!-- Quick Tag Insertion Bar -->
        ${lesson.quickTags && lesson.quickTags.length > 0 ? `
          <div class="editor-quick-tags-bar">
            <span class="quick-tags-label">🏷️ ${escapeHtml(t('tagsLabel', state.lang))}</span>
            <div class="quick-tags-chips">
              ${lesson.quickTags.map(tag => `
                <button class="tag-insert-chip" data-insert="${escapeHtml(tag)}" title="${escapeHtml(t('insertTagHint', state.lang))}">${escapeHtml(tag)}</button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Code Focus Banner -->
        <div class="code-focus-banner ${hasTaskMarkers(currentFullCode) ? 'is-active' : ''}" id="code-focus-banner">
          <span class="focus-banner-icon">${state.editorViewMode !== 'full' ? '🎯' : '📄'}</span>
          <span class="focus-banner-text">
            ${state.editorViewMode !== 'full' 
              ? (state.lang === 'uz' ? '<strong>Faqat vazifa kodi:</strong> Elementlarning yordamchi fon stillari yashirildi. Barcha stillarni ko\'rish uchun "To\'liq Kod" tugmasini bosing.' : '<strong>Task Focus:</strong> Background framework code hidden. Click "Full Code" to inspect all styles.')
              : (state.lang === 'uz' ? '<strong>To\'liq kod:</strong> Barcha elementlar stillari ochiq. Faqat o\'z vazifangizga qaytish uchun "Faqat Vazifa" tugmasini bosing.' : '<strong>Full Code:</strong> All element properties visible. Click "Task Only" to return to homework.')}
          </span>
        </div>

        <!-- Code Editor -->
        <div class="code-editor-wrapper">
          <div id="line-numbers" class="editor-line-numbers">1</div>
          <textarea id="code-textarea" class="code-textarea" spellcheck="false">${escapeHtml(state.editorViewMode !== 'full' && hasTaskMarkers(currentFullCode) ? extractTaskCode(currentFullCode) : currentFullCode)}</textarea>
        </div>
      </div>

      <!-- Draggable Pane Resizer Divider -->
      <div class="pane-resizer" id="pane-resizer" title="${state.lang === 'uz' ? 'O\'lchamni o\'zgartirish uchun suring (Drag to resize)' : 'Drag to resize panes'}">
        <div class="resizer-knob"></div>
      </div>

      <!-- Right: Preview Stage -->
      <div class="pane-card pane-card-preview" id="pane-card-preview">
        <div class="pane-header">
          <div class="pane-title">
            <span>👁️</span> ${escapeHtml(t('browserPreviewTitle', state.lang))}
          </div>
          <div class="preview-tabs">
            <button id="tab-combo" class="prev-tab-btn ${activePreviewTab === 'combo' ? 'active' : ''}" title="${state.lang === 'uz' ? 'Elementlar va Natija birgalikda' : 'Elements & Result together'}">${escapeHtml(t('comboViewTab', state.lang))}</button>
            <button id="tab-live" class="prev-tab-btn ${activePreviewTab === 'live' ? 'active' : ''}">${escapeHtml(t('yourResultTab', state.lang))}</button>
            <button id="tab-elements" class="prev-tab-btn ${activePreviewTab === 'elements' ? 'active' : ''}" title="${state.lang === 'uz' ? 'Mavzu elementlari va teglari' : 'Lesson elements & tags'}">${escapeHtml(t('elementsGuideTab', state.lang))}</button>
            <button id="tab-target" class="prev-tab-btn ${activePreviewTab === 'target' ? 'active' : ''}">${escapeHtml(t('targetGoalTab', state.lang))}</button>
            <button id="tab-side" class="prev-tab-btn ${activePreviewTab === 'side' ? 'active' : ''}" title="${state.lang === 'uz' ? 'Yonma-yon taqqoslash' : 'Side-by-side comparison'}">${state.lang === 'uz' ? '↔️ Taqqoslash' : '↔️ Compare'}</button>
          </div>
        </div>

        <div id="preview-container" class="preview-wrapper">
          ${activePreviewTab === 'combo' ? renderComboMarkup(lesson) : (activePreviewTab === 'elements' ? renderElementsMarkup(lesson) : `<iframe id="live-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>`)}
        </div>
      </div>
    </div>
  `;

  elements.workspaceStage.classList.toggle('focus-ide-mode', !!state.focusIdeMode);
  elements.workspaceStage.classList.toggle('fullscreen-ide-active', !!state.fullscreenIdeMode);
  document.body.classList.toggle('fullscreen-ide-body', !!state.fullscreenIdeMode);
  setupLessonListeners(lesson);
  if (state.focusIdeMode) {
    const focusBtn = document.getElementById('btn-focus-mode');
    if (focusBtn) {
      focusBtn.classList.add('active');
      focusBtn.style.color = '#38bdf8';
      focusBtn.style.borderColor = '#38bdf8';
    }
  }
  updateLivePreview();
  updateLineNumbers();
}

function renderHumanIntro(lesson) {
  if (!lesson.humanIntro) return '';

  return `
    <div class="human-intro-card">
      <div class="human-intro-item">
        <h4>${escapeHtml(t('humanLanguageHeader', state.lang))}</h4>
        <p>${formatProse(localize(lesson.humanIntro.whatIsIt, state.lang))}</p>
      </div>
      <div class="human-intro-item">
        <h4>${escapeHtml(t('tagSandwichHeader', state.lang))}</h4>
        <p>${formatProse(localize(lesson.humanIntro.whatIsATag, state.lang))}</p>
      </div>
    </div>
  `;
}

function renderTagShowcase(lesson) {
  if (!lesson.tagShowcase || lesson.tagShowcase.length === 0) return '';

  return `
    <div class="tag-showcase-bar">
      <span class="showcase-label">${escapeHtml(t('tagShowcaseHeader', state.lang))}</span>
      <div class="showcase-chips">
        ${lesson.tagShowcase.map(tItem => {
          const meaningStr = formatProse(localize(tItem.meaning, state.lang));
          return `
          <div class="showcase-chip" title="${escapeHtml(localize(tItem.meaning, state.lang))}">
            <code>${escapeHtml(tItem.tag)}</code>
            <span>${meaningStr}</span>
          </div>
        `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderAnatomySection(lesson) {
  if (!lesson.anatomy || lesson.anatomy.length === 0) return '';

  return `
    <div class="step-breakdown-card">
      <div class="step-card-header">
        <div class="step-header-text">
          <span style="font-size: 16px;">🧩</span>
          <h3>${escapeHtml(t('stepBreakdownHeader', state.lang))}</h3>
        </div>
        <span class="step-count-pill">${lesson.anatomy.length} ${escapeHtml(state.lang === 'uz' ? 'qadam' : 'steps')}</span>
      </div>
      <div class="step-grid">
        ${lesson.anatomy.map((step, idx) => {
          const part = step.part || step.code || '';
          const role = step.role || step.name || '';
          const explanation = step.explanation || step.purpose || step.description || '';
          const effect = step.effect || step.purpose || step.description || '';

          return `
          <div class="step-item">
            <div class="step-top-row">
              <span class="step-num-badge">${escapeHtml(state.lang === 'uz' ? (idx + 1) + '-Qadam' : 'Step ' + (idx + 1))}</span>
              <span class="step-role-badge">${escapeHtml(localize(role, state.lang))}</span>
            </div>
            <div class="step-code-focus">
              <code class="step-code-chip">${escapeHtml(part)}</code>
            </div>
            <div class="step-explanation">${formatProse(localize(explanation, state.lang))}</div>
            <div class="step-result-box">
              <div class="step-result-heading">
                <span>👉</span>
                <strong>${escapeHtml(t('resultCallout', state.lang))}</strong>
                <span>${formatProse(localize(effect, state.lang))}</span>
              </div>
              ${step.visualPreview ? `<div class="step-visual-render">${step.visualPreview}</div>` : ''}
            </div>
          </div>
        `;
        }).join('')}
      </div>
    </div>
  `;
}

function setupLessonListeners(lesson) {
  const textarea = document.getElementById('code-textarea');

  textarea?.addEventListener('input', () => {
    if (state.editorViewMode !== 'full' && hasTaskMarkers(currentFullCode)) {
      currentFullCode = mergeTaskIntoFullCode(currentFullCode, textarea.value);
      currentCode = currentFullCode;
    } else {
      currentFullCode = textarea.value;
      currentCode = currentFullCode;
    }
    updateLivePreview();
    updateLineNumbers();
  });

  // Toggle Task Focus vs Full Code
  document.getElementById('btn-toggle-task-focus')?.addEventListener('click', () => {
    state = toggleEditorViewMode(state);
    saveStateToStorage(state);
    const isTaskMode = state.editorViewMode !== 'full';
    const btn = document.getElementById('btn-toggle-task-focus');
    if (btn) {
      btn.classList.toggle('active', isTaskMode);
      btn.innerHTML = isTaskMode ? '🎯 ' + (state.lang === 'uz' ? 'Faqat Vazifa' : 'Task Only') : '📄 ' + (state.lang === 'uz' ? 'To\'liq Kod' : 'Full Code');
    }
    if (isTaskMode && hasTaskMarkers(currentFullCode)) {
      textarea.value = extractTaskCode(currentFullCode);
    } else {
      textarea.value = currentFullCode;
    }
    const banner = document.getElementById('code-focus-banner');
    if (banner) {
      banner.querySelector('.focus-banner-icon').textContent = isTaskMode ? '🎯' : '📄';
      banner.querySelector('.focus-banner-text').innerHTML = isTaskMode 
        ? (state.lang === 'uz' ? '<strong>Faqat vazifa kodi:</strong> Elementlarning yordamchi fon stillari yashirildi. Barcha stillarni ko\'rish uchun "To\'liq Kod" tugmasini bosing.' : '<strong>Task Focus:</strong> Background framework code hidden. Click "Full Code" to inspect all styles.')
        : (state.lang === 'uz' ? '<strong>To\'liq kod:</strong> Barcha elementlar stillari ochiq. Faqat o\'z vazifangizga qaytish uchun "Faqat Vazifa" tugmasini bosing.' : '<strong>Full Code:</strong> All element properties visible. Click "Task Only" to return to homework.');
    }
    updateLivePreview();
    updateLineNumbers();
    playSound('click', state.audioEnabled);
  });

  // Keep line numbers scroll in 1:1 sync with textarea scroll
  textarea?.addEventListener('scroll', () => {
    const lineNumbers = document.getElementById('line-numbers');
    if (lineNumbers) {
      lineNumbers.scrollTop = textarea.scrollTop;
    }
  });

  // Fullscreen Dual IDE Mode Toggle
  setupFullscreenIDE();

  // Panes Swap Toggle
  setupPanesSwap();

  // Draggable Pane Resizer
  setupPaneResizer();

  // Focus Mode toggle: maximizes editor and preview space and persists state
  document.getElementById('btn-focus-mode')?.addEventListener('click', () => {
    const stage = document.querySelector('.workspace-stage');
    if (stage) {
      state.focusIdeMode = !state.focusIdeMode;
      saveStateToStorage(state);
      stage.classList.toggle('focus-ide-mode', state.focusIdeMode);
      const btn = document.getElementById('btn-focus-mode');
      if (btn) {
        btn.classList.toggle('active', state.focusIdeMode);
        btn.style.color = state.focusIdeMode ? '#38bdf8' : '';
        btn.style.borderColor = state.focusIdeMode ? '#38bdf8' : '';
      }
      playSound('click', state.audioEnabled);
    }
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

  // Start Practice Button: loads starter code, turns on editor-first mode, smoothly scrolls to editor, focuses textarea
  document.getElementById('btn-start-practice')?.addEventListener('click', () => {
    const code = localize(lesson.initialCode, state.lang);
    textarea.value = code;
    currentCode = code;
    updateLivePreview();
    updateLineNumbers();
    state.editorFirstMode = true;
    saveStateToStorage(state);
    updateEditorModeUI();
    playSound('click', state.audioEnabled);
    document.querySelector('.editor-stage-split')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    textarea.focus();
  });

  // Reset to initial starter code
  document.getElementById('btn-reset-code')?.addEventListener('click', () => {
    const fullCode = localize(lesson.initialCode, state.lang);
    currentFullCode = fullCode;
    currentCode = fullCode;
    if (state.editorViewMode !== 'full' && hasTaskMarkers(fullCode)) {
      textarea.value = extractTaskCode(fullCode);
    } else {
      textarea.value = fullCode;
    }
    updateLivePreview();
    updateLineNumbers();
    playSound('click', state.audioEnabled);
  });

  // Copy
  document.getElementById('btn-copy-code')?.addEventListener('click', () => {
    navigator.clipboard?.writeText(textarea.value);
    const btn = document.getElementById('btn-copy-code');
    btn.textContent = t('copiedMsg', state.lang);
    setTimeout(() => { btn.textContent = t('copyBtn', state.lang); }, 1500);
  });

  // List of Tags Button
  // Dedicated Per-Topic Action Deck Listeners
  document.getElementById('btn-topic-lab')?.addEventListener('click', () => {
    openTopicLabModal(lesson);
  });

  document.getElementById('btn-tag-list')?.addEventListener('click', () => {
    openTagListModal(lesson);
  });

  document.getElementById('btn-start-practice')?.addEventListener('click', () => {
    playSound('click', state.audioEnabled);
    const missionCard = document.querySelector('.mission-spotlight-card');
    const editor = document.getElementById('code-input');
    if (missionCard) {
      missionCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (editor) {
      editor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setTimeout(() => {
      editor?.focus();
    }, 300);
  });


  // Preview Tabs
  setupPreviewTabs(lesson);

  // Hint
  document.getElementById('btn-hint')?.addEventListener('click', () => {
    playSound('click', state.audioEnabled);
    const hintText = localize(lesson.challenge.hint, state.lang);
    alert(`💡 HINT / MASLAHAT:\n\n${hintText}`);
  });

  // Check code
  document.getElementById('btn-verify-mission')?.addEventListener('click', () => {
    handleChallengeVerification(lesson);
  });

  // Quick Tag Insert Chips (1-click insert directly at cursor)
  const insertChips = document.querySelectorAll('.tag-insert-chip');
  insertChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const tag = chip.getAttribute('data-insert');
      insertTextAtCursor(textarea, tag);
      playSound('click', state.audioEnabled);
    });
  });

  // Read Aloud / Voice Narrator
  const btnRead = document.getElementById('btn-read-mission');
  btnRead?.addEventListener('click', () => {
    playSound('click', state.audioEnabled);
    if (isSpeaking()) {
      stopSpeaking();
      btnRead.classList.remove('speaking');
      btnRead.textContent = `🔊 ${t('readAloudBtn', state.lang)}`;
    } else {
      btnRead.classList.add('speaking');
      btnRead.textContent = `⏹️ ${t('stopSpeechBtn', state.lang)}`;
      speakText(localize(lesson.challenge.mission, state.lang), state.lang, () => {
        btnRead.classList.remove('speaking');
        btnRead.textContent = `🔊 ${t('readAloudBtn', state.lang)}`;
      });
    }
  });
}


function setupFullscreenIDE() {
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
    btn.title = state.fullscreenIdeMode
      ? (state.lang === 'uz' ? 'To\'liq ekrandan chiqish (Esc)' : 'Exit Full Screen (Esc)')
      : (state.lang === 'uz' ? 'To\'liq Ekran IDE rejimi' : 'Full Screen Dual IDE Mode');
    playSound('click', state.audioEnabled);
  };

  btn.addEventListener('click', () => toggle());

  if (!window._htmlFsIdeEscListener) {
    window._htmlFsIdeEscListener = true;
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.fullscreenIdeMode) {
        toggle(false);
      }
    });
  }
}

function setupPanesSwap() {
  const btn = document.getElementById('btn-swap-panes');
  const split = document.getElementById('editor-stage-split');
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

function setupPaneResizer() {
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
}

function insertTextAtCursor(textarea, text) {
  if (!textarea) return;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  textarea.value = textarea.value.substring(0, start) + text + textarea.value.substring(end);
  textarea.selectionStart = textarea.selectionEnd = start + text.length;
  textarea.focus();
  if (state.editorViewMode !== 'full' && hasTaskMarkers(currentFullCode)) {
    currentFullCode = mergeTaskIntoFullCode(currentFullCode, textarea.value);
    currentCode = currentFullCode;
  } else {
    currentFullCode = textarea.value;
    currentCode = currentFullCode;
  }
  updateLivePreview();
  updateLineNumbers();
}

function updateLineNumbers() {
  const textarea = document.getElementById('code-textarea');
  const lineNumbers = document.getElementById('line-numbers');
  if (!textarea || !lineNumbers) return;

  const lines = (textarea.value || '').split('\n').length;
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

function renderComboMarkup(lesson) {
  const tags = lesson.listOfTags || [];
  return `
    <div class="combo-view-container">
      <div class="combo-elements-shelf">
        <div class="combo-shelf-header">
          <span class="combo-shelf-title">📋 ${escapeHtml(t('comboElementsTitle', state.lang))}</span>
          <span class="combo-shelf-badge">${tags.length} ta</span>
        </div>
        <div class="combo-tags-scroll">
          ${tags.map(tItem => `
            <button class="combo-tag-pill" data-insert="${escapeHtml(tItem.tag)}" title="${escapeHtml(localize(tItem.meaning, state.lang))}">
              <code>${escapeHtml(tItem.tag)}</code>
              <span>${escapeHtml(localize(tItem.name, state.lang))}</span>
            </button>
          `).join('')}
        </div>
        ${lesson.challenge?.mission ? `
          <div class="combo-mission-mini">
            <strong style="color: #38bdf8; display: block; margin-bottom: 2px;">${escapeHtml(t('comboMissionTitle', state.lang))}</strong>
            <span style="font-size: 11px; line-height: 16px; color: #cbd5e1;">${formatProse(localize(lesson.challenge.mission, state.lang))}</span>
          </div>
        ` : ''}
      </div>
      <div class="combo-preview-stage">
        <div class="combo-preview-label">
          <span>👁️ ${escapeHtml(t('yourResultTab', state.lang))} (Brauzer chizadigan jonli natija):</span>
        </div>
        <iframe id="live-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
      </div>
    </div>
  `;
}

function renderElementsMarkup(lesson) {
  const tags = lesson.listOfTags || [];
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
            ${tags.map(tItem => `
              <tr>
                <td><button class="modal-tag-chip" data-insert="${escapeHtml(tItem.tag)}" title="${escapeHtml(t('insertTagHint', state.lang))}">${escapeHtml(tItem.tag)}</button></td>
                <td><strong>${escapeHtml(localize(tItem.name, state.lang))}</strong></td>
                <td>${formatProse(localize(tItem.meaning, state.lang))}</td>
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

function setupPreviewTabs(lesson) {
  const tabCombo = document.getElementById('tab-combo');
  const tabLive = document.getElementById('tab-live');
  const tabElements = document.getElementById('tab-elements');
  const tabTarget = document.getElementById('tab-target');
  const tabSide = document.getElementById('tab-side');
  const previewContainer = document.getElementById('preview-container');

  function resetTabs() {
    [tabCombo, tabLive, tabElements, tabTarget, tabSide].forEach(t => t?.classList.remove('active'));
  }

  function attachPillListeners() {
    const pills = previewContainer.querySelectorAll('.combo-tag-pill, .modal-tag-chip');
    pills.forEach(p => {
      p.addEventListener('click', () => {
        const codeToInsert = p.getAttribute('data-insert');
        const textarea = document.getElementById('code-textarea');
        if (textarea && codeToInsert) {
          insertTextAtCursor(textarea, codeToInsert);
          currentCode = textarea.value;
          updateLivePreview();
          updateLineNumbers();
          playSound('click', state.audioEnabled);
        }
      });
    });
  }

  attachPillListeners();

  tabCombo?.addEventListener('click', () => {
    resetTabs();
    tabCombo.classList.add('active');
    activePreviewTab = 'combo';
    previewContainer.innerHTML = renderComboMarkup(lesson);
    attachPillListeners();
    updateLivePreview();
    playSound('click', state.audioEnabled);
  });

  tabLive?.addEventListener('click', () => {
    resetTabs();
    tabLive.classList.add('active');
    activePreviewTab = 'live';
    previewContainer.innerHTML = `<iframe id="live-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>`;
    updateLivePreview();
    playSound('click', state.audioEnabled);
  });

  tabElements?.addEventListener('click', () => {
    resetTabs();
    tabElements.classList.add('active');
    activePreviewTab = 'elements';
    previewContainer.innerHTML = renderElementsMarkup(lesson);
    attachPillListeners();
    playSound('click', state.audioEnabled);
  });

  tabTarget?.addEventListener('click', () => {
    resetTabs();
    tabTarget.classList.add('active');
    activePreviewTab = 'target';
    previewContainer.innerHTML = `
      <div class="target-view-container">
        <div class="target-explanation-box">
          <strong>${escapeHtml(t('targetExplanationTitle', state.lang))}</strong>
          <p style="margin: 4px 0 0; white-space: pre-line;">${formatProse(localize(lesson.targetDescription, state.lang))}</p>
        </div>
        <iframe id="target-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
      </div>
    `;
    const targetIframe = document.getElementById('target-iframe');
    if (targetIframe) {
      targetIframe.srcdoc = wrapForPreview(localize(lesson.targetCode, state.lang));
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
          <div style="background: var(--bg-surface); padding: 4px 10px; font-size: 10px; font-weight: 800; color: var(--text-muted);">${t('yourResultTab', state.lang).toUpperCase()}</div>
          <iframe id="live-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
        </div>
        <div style="display: flex; flex-direction: column;">
          <div style="background: var(--bg-surface); padding: 4px 10px; font-size: 10px; font-weight: 800; color: var(--text-muted);">${t('targetGoalTab', state.lang).toUpperCase()}</div>
          <iframe id="target-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
        </div>
      </div>
    `;
    updateLivePreview();
    const targetIframe = document.getElementById('target-iframe');
    if (targetIframe) {
      targetIframe.srcdoc = wrapForPreview(localize(lesson.targetCode, state.lang));
    }
    playSound('click', state.audioEnabled);
  });
}

function openTagListModal(lesson) {
  if (!lesson.listOfTags || lesson.listOfTags.length === 0) return;
  playSound('click', state.audioEnabled);

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card tag-list-modal-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">
        <h3 style="font-size: 16px; font-weight: 800; color: #ffffff; display: flex; align-items: center; gap: 8px;">
          <span>📋</span> ${escapeHtml(t('tagListModalTitle', state.lang))}: ${escapeHtml(localize(lesson.title, state.lang))}
        </h3>
        <button id="btn-close-tag-modal" style="font-size: 16px; background: transparent; border: none; color: var(--text-muted); cursor: pointer; padding: 4px 8px;">✕</button>
      </div>

      <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px; text-align: left;">
        ${formatProse(t('tagListDesc', state.lang))}
      </p>

      <div class="tag-list-table-wrapper">
        <table class="tag-list-table">
          <thead>
            <tr>
              <th style="width: 32%;">${escapeHtml(t('colCode', state.lang))}</th>
              <th style="width: 25%;">${escapeHtml(t('colName', state.lang))}</th>
              <th>${escapeHtml(t('colMeaning', state.lang))}</th>
            </tr>
          </thead>
          <tbody>
            ${lesson.listOfTags.map(tg => `
              <tr>
                <td>
                  <code class="tag-code-pill" title="Click to copy" data-code="${escapeHtml(tg.code)}">${escapeHtml(tg.code)}</code>
                </td>
                <td style="font-weight: 700; color: var(--accent-amber);">${formatProse(localize(tg.name, state.lang))}</td>
                <td style="color: var(--text-main); font-size: 12px;">${formatProse(localize(tg.description, state.lang))}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div style="margin-top: 14px; display: flex; justify-content: flex-end;">
        <button id="btn-close-tag-modal-bottom" class="btn-modal btn-modal-primary">${escapeHtml(t('doneBtn', state.lang))}</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelectorAll('.tag-code-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const code = pill.getAttribute('data-code');
      navigator.clipboard?.writeText(code);
      const originalText = pill.textContent;
      pill.textContent = t('copiedMsg', state.lang);
      setTimeout(() => { pill.textContent = originalText; }, 1200);
      playSound('click', state.audioEnabled);
    });
  });

  const close = () => modal.remove();
  modal.querySelector('#btn-close-tag-modal')?.addEventListener('click', close);
  modal.querySelector('#btn-close-tag-modal-bottom')?.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });
}

export function openTopicLabModal(lesson) {
  playSound('click', state.audioEnabled);

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card topic-lab-modal-card">
      <div class="topic-lab-modal-header">
        <h3 class="topic-lab-modal-heading">
          <span>🧪</span> ${escapeHtml(t('topicLabModalTitle', state.lang))}: ${escapeHtml(localize(lesson.title, state.lang))}
        </h3>
        <button id="btn-close-topic-lab-modal" class="btn-close-modal" title="Close">✕</button>
      </div>

      <div class="topic-lab-modal-body" id="topic-lab-mount"></div>

      <div class="topic-lab-modal-footer">
        <button id="btn-close-topic-lab-bottom" class="btn-modal btn-modal-primary">
          🚀 ${escapeHtml(t('doneBtn', state.lang))}
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const mountPoint = modal.querySelector('#topic-lab-mount');
  if (mountPoint) {
    renderTopicLab(mountPoint, lesson, state.lang);
  }

  const close = () => modal.remove();
  modal.querySelector('#btn-close-topic-lab-modal')?.addEventListener('click', close);
  modal.querySelector('#btn-close-topic-lab-bottom')?.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
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
      <h3 class="modal-title">${t('modalCompleteTitle', state.lang)}</h3>
      <div class="modal-body">
        <p>${state.lang === 'uz' ? `Ajoyib! Siz <strong>${localize(lesson.title, state.lang)}</strong> mavzusini muvaffaqiyatli o'zlashtirdingiz!` : `Awesome! You mastered <strong>${localize(lesson.title, state.lang)}</strong>!`}</p>
        <p style="margin-top: 8px; font-size: 15px; color: var(--accent-amber); font-weight: 800;">
          ${wasAlreadyCompleted ? (state.lang === 'uz' ? '⭐ Vazifa qayta tasdiqlandi!' : '⭐ Mission verified again!') : t('starsEarnedMsg', state.lang)}
        </p>
      </div>
      <div class="modal-actions">
        <button id="btn-modal-close" class="btn-modal btn-modal-secondary">${t('stayHereBtn', state.lang)}</button>
        ${nextLesson ? `<button id="btn-modal-next" class="btn-modal btn-modal-primary">${t('nextLessonBtn', state.lang)}</button>` : ''}
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
      <h3 class="modal-title" style="color: var(--accent-red);">${t('tryAgainTitle', state.lang)}</h3>
      <div class="modal-body">
        <p>${t('tryAgainBody', state.lang)}</p>
        <div style="background: rgba(248, 113, 113, 0.15); border-radius: 8px; padding: 10px; margin-top: 8px; color: var(--accent-red); text-align: left; font-weight: bold; font-size: 12px;">
          ${feedback.map(f => `<div>• ${f}</div>`).join('')}
        </div>
      </div>
      <div class="modal-actions">
        <button id="btn-modal-retry" class="btn-modal btn-modal-primary">${t('retryBtn', state.lang)}</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.querySelector('#btn-modal-retry')?.addEventListener('click', () => modal.remove());
}

// ===================================================================
// Interactive Visual Labs Hub (Box Model, Flexbox, Color, Grid)
// ===================================================================
function renderLabsView() {
  stopSpeaking();
  elements.workspaceStage.innerHTML = `
    <div class="labs-view-wrapper">
      <div class="lesson-banner">
        <div>
          <div class="banner-meta">
            <span class="badge-module">INTERACTIVE PLAYGROUNDS</span>
          </div>
          <h2 class="banner-title">${escapeHtml(t('labsBtn', state.lang))}</h2>
          <p class="banner-summary">
            ${state.lang === 'uz'
              ? 'Tugmalar va slayderlarni surib, CSS qanday ishlashini jonli tomosha qiling va tayyor kodni bitta bosishda nusxalang!'
              : 'Slide controls, click buttons, and watch CSS physics unfold in real-time! Copy generated code with one click.'}
          </p>
        </div>
      </div>

      <!-- Lab Switcher Navigation -->
      <div class="labs-nav-bar">
        <button class="labs-tab-btn ${currentLab === 'box' ? 'active' : ''}" data-lab="box">
          ${escapeHtml(t('labBoxModelTitle', state.lang))}
        </button>
        <button class="labs-tab-btn ${currentLab === 'flexbox' ? 'active' : ''}" data-lab="flexbox">
          ${escapeHtml(t('labFlexboxTitle', state.lang))}
        </button>
        <button class="labs-tab-btn ${currentLab === 'color' ? 'active' : ''}" data-lab="color">
          ${escapeHtml(t('labColorTitle', state.lang))}
        </button>
        <button class="labs-tab-btn ${currentLab === 'grid' ? 'active' : ''}" data-lab="grid">
          ${escapeHtml(t('labGridTitle', state.lang))}
        </button>
      </div>

      <!-- Active Lab Container -->
      <div id="active-lab-stage"></div>
    </div>
  `;

  const stage = document.getElementById('active-lab-stage');
  function loadActiveLab() {
    if (!stage) return;
    if (currentLab === 'box') renderBoxModelLab(stage);
    else if (currentLab === 'flexbox') renderFlexboxLab(stage);
    else if (currentLab === 'color') renderColorLab(stage);
    else if (currentLab === 'grid') renderGridLab(stage);
  }

  const tabBtns = elements.workspaceStage.querySelectorAll('.labs-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLab = btn.getAttribute('data-lab');
      playSound('click', state.audioEnabled);
      loadActiveLab();
    });
  });

  loadActiveLab();
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
        <h2 class="banner-title">${t('freeSandbox', state.lang)}</h2>
        <p class="banner-summary">${state.lang === 'uz' ? 'Xohlagan narsangizni quring! Ishingiz tugagach haqiqiy .html fayl sifatida yuklab oling.' : 'Build whatever you want! Download your real webpage when you\'re done.'}</p>
      </div>
      <div>
        <button id="btn-download-html" class="btn-header" style="background: var(--accent-green); color: #000; border: none; font-weight: 800;">
          💾 Download .html
        </button>
      </div>
    </div>

    <!-- Template Pills -->
    <div style="background: var(--bg-surface); border-bottom: 1px solid var(--border-color); padding: 8px 24px; display: flex; align-items: center; gap: 8px;">
      <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-muted);">${state.lang === 'uz' ? 'Andozalar:' : 'Templates:'}</span>
      ${TEMPLATES.map(t => `<button class="tag-chip btn-tpl" data-tpl="${t.id}">${t.name}</button>`).join('')}
    </div>

    <!-- Sandbox Split View -->
    <div class="editor-stage-split">
      <div class="pane-card">
        <div class="pane-header">
          <div class="pane-title"><span>💻</span> HTML &amp; CSS Code</div>
          <div class="pane-tools">
            <button id="btn-sb-copy" class="btn-tool">${t('copyBtn', state.lang)}</button>
          </div>
        </div>
        <div class="code-editor-wrapper">
          <div id="sb-line-numbers" class="editor-line-numbers">1</div>
          <textarea id="sb-textarea" class="code-textarea" spellcheck="false">${state.customSandboxCode}</textarea>
        </div>
      </div>

      <div class="pane-card">
        <div class="pane-header">
          <div class="pane-title"><span>👁️</span> ${t('browserPreviewTitle', state.lang)}</div>
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
    btn.textContent = t('copiedMsg', state.lang);
    setTimeout(() => { btn.textContent = t('copyBtn', state.lang); }, 1500);
  });

  updateSbPreview();
}

// Auto-boot on load
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initApp);
}
