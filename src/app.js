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
let activePreviewTab = 'live'; // 'live' | 'target' | 'side'
let currentCode = '';

// DOM Elements Cache
const elements = {};

/**
 * Resolves a bilingual string or object: { en: '...', uz: '...' }
 */
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
  attachGlobalListeners();
  applyStateToUI();
  selectLesson(state.currentLessonId || LESSONS[0].id);
}

function cacheElements() {
  elements.app = document.body;
  elements.starCount = document.getElementById('star-count');
  elements.btnLang = document.getElementById('btn-lang');
  elements.btnLangUz = document.getElementById('btn-lang-uz');
  elements.btnLangEn = document.getElementById('btn-lang-en');
  elements.btnTheme = document.getElementById('btn-theme');
  elements.btnAudio = document.getElementById('btn-audio');
  elements.btnTeacher = document.getElementById('btn-teacher');
  elements.btnLabs = document.getElementById('btn-labs');
  elements.btnSandbox = document.getElementById('btn-sandbox');

  elements.sidebarLessonList = document.getElementById('sidebar-lesson-list');
  elements.progressFill = document.getElementById('progress-fill');
  elements.progressText = document.getElementById('progress-text');
  elements.progressTitle = document.getElementById('progress-title');

  elements.workspaceStage = document.getElementById('workspace-stage');
  elements.confettiCanvas = document.getElementById('confetti-canvas');
}

function attachGlobalListeners() {
  function switchLang(lang) {
    stopSpeaking();
    state = setLanguage(state, lang);
    saveStateToStorage(state);
    playSound('click', state.audioEnabled);
    applyStateToUI();
    if (currentView === 'sandbox') {
      renderSandboxView();
    } else if (currentView === 'labs') {
      renderLabsView();
    } else {
      renderLessonView();
    }
  }

  // Dual Segmented Switcher
  elements.btnLangUz?.addEventListener('click', () => switchLang('uz'));
  elements.btnLangEn?.addEventListener('click', () => switchLang('en'));

  // Language Toggle (English <-> Uzbek)
  elements.btnLang?.addEventListener('click', () => {
    state = toggleLanguage(state);
    saveStateToStorage(state);
    playSound('click', state.audioEnabled);
    applyStateToUI();
    if (currentView === 'sandbox') {
      renderSandboxView();
    } else if (currentView === 'labs') {
      renderLabsView();
    } else {
      renderLessonView();
    }
  });

  // Theme Toggle (Calm Dark <-> OLED Black)
  elements.btnTheme?.addEventListener('click', () => {
    state.theme = state.theme === 'oled' ? 'dark' : 'oled';
    saveStateToStorage(state);
    applyTheme();
    playSound('click', state.audioEnabled);
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
  if (elements.btnTheme) {
    elements.btnTheme.textContent = theme === 'oled' ? '🌑' : '🌙';
    elements.btnTheme.title = theme === 'oled' ? 'Switch to Calm Dark Mode' : 'Switch to Deep OLED Night';
  }
}

function applyStateToUI() {
  applyTheme();
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
  currentCode = lesson.initialCode;
  saveStateToStorage(state);

  renderSidebar();
  renderLessonView();
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
          <span class="badge-module">${escapeHtml(lesson.module.toUpperCase())}</span>
          <span class="badge-tags">${escapeHtml(lesson.tag)}</span>
          ${isCompleted ? `<span style="color: var(--accent-green); font-weight: 800; font-size: 12px;">${escapeHtml(t('completedTag', state.lang))}</span>` : ''}
          <button id="btn-topic-lab" class="btn-topic-lab" title="${escapeHtml(t('topicLabBtn', state.lang))}">
            ${escapeHtml(t('topicLabBtn', state.lang))}
          </button>
          <button id="btn-tag-list" class="btn-link-tags" title="${escapeHtml(t('listOfTags', state.lang))}">
            ${escapeHtml(t('listOfTags', state.lang))}
          </button>
        </div>
        <h2 class="banner-title">${lesson.icon} ${escapeHtml(localize(lesson.title, state.lang))}</h2>
        <p class="banner-summary">${formatProse(localize(lesson.summary, state.lang))}</p>
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

    <!-- Editor & Live Preview Split -->
    <div class="editor-stage-split">
      <!-- Left: Code Studio -->
      <div class="pane-card">
        <div class="pane-header">
          <div class="pane-title">
            <span>💻</span> ${escapeHtml(t('codeEditorTitle', state.lang))}
          </div>
          <div class="pane-tools">
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

        <!-- Code Editor -->
        <div class="code-editor-wrapper">
          <div id="line-numbers" class="editor-line-numbers">1</div>
          <textarea id="code-textarea" class="code-textarea" spellcheck="false">${escapeHtml(currentCode)}</textarea>
        </div>
      </div>

      <!-- Right: Preview Stage -->
      <div class="pane-card">
        <div class="pane-header">
          <div class="pane-title">
            <span>👁️</span> ${escapeHtml(t('browserPreviewTitle', state.lang))}
          </div>
          <div class="preview-tabs">
            <button id="tab-live" class="prev-tab-btn active">${escapeHtml(t('yourResultTab', state.lang))}</button>
            <button id="tab-target" class="prev-tab-btn">${escapeHtml(t('targetGoalTab', state.lang))}</button>
          </div>
        </div>

        <div id="preview-container" class="preview-wrapper">
          <iframe id="live-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
        </div>
      </div>
    </div>
  `;

  setupLessonListeners(lesson);
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
        ${lesson.anatomy.map((step, idx) => `
          <div class="step-item">
            <div class="step-top-row">
              <span class="step-num-badge">${escapeHtml(state.lang === 'uz' ? (idx + 1) + '-Qadam' : 'Step ' + (idx + 1))}</span>
              <span class="step-role-badge">${escapeHtml(localize(step.role, state.lang))}</span>
            </div>
            <div class="step-code-focus">
              <code class="step-code-chip">${escapeHtml(step.part)}</code>
            </div>
            <div class="step-explanation">${formatProse(localize(step.explanation, state.lang))}</div>
            <div class="step-result-box">
              <div class="step-result-heading">
                <span>👉</span>
                <strong>${escapeHtml(t('resultCallout', state.lang))}</strong>
                <span>${formatProse(localize(step.effect, state.lang))}</span>
              </div>
              ${step.visualPreview ? `<div class="step-visual-render">${step.visualPreview}</div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
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

  // Start Practice Button: loads starter code, smoothly scrolls to editor, focuses textarea
  document.getElementById('btn-start-practice')?.addEventListener('click', () => {
    textarea.value = lesson.initialCode;
    currentCode = lesson.initialCode;
    updateLivePreview();
    updateLineNumbers();
    playSound('click', state.audioEnabled);
    document.querySelector('.code-editor-wrapper')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    textarea.focus();
  });

  // Reset to initial starter code
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
    btn.textContent = t('copiedMsg', state.lang);
    setTimeout(() => { btn.textContent = t('copyBtn', state.lang); }, 1500);
  });

  // List of Tags Button
  document.getElementById('btn-tag-list')?.addEventListener('click', () => {
    openTagListModal(lesson);
  });

  // Dedicated Per-Topic Visual Lab Button
  document.getElementById('btn-topic-lab')?.addEventListener('click', () => {
    openTopicLabModal(lesson);
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
          <strong>${escapeHtml(t('targetExplanationTitle', state.lang))}</strong>
          <p style="margin: 4px 0 0; white-space: pre-line;">${formatProse(localize(lesson.targetDescription, state.lang))}</p>
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
      targetIframe.srcdoc = wrapForPreview(lesson.targetCode);
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
