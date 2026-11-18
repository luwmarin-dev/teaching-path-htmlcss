/**
 * Typing Speed & Accuracy Diagnostic Engine
 * Allows teacher to assess student typing speed (WPM, CPM)
 * and accuracy in Russian and English with rich diagnostic metrics.
 */

export const TYPING_TEXTS = {
  en: {
    langLabel: 'English',
    title: 'Technology & Programming Odyssey',
    text: 'Technology is the art of solving problems and turning creative ideas into reality. Every amazing website, computer game, and mobile application started with a curious person typing their very first lines of code. When you practice typing with all your fingers without looking down at the keyboard, your thoughts flow directly into the computer at lightning speed. Keep your posture straight, focus on typing each letter accurately, and enjoy your journey into the world of programming!'
  },
  ru: {
    langLabel: 'Русский',
    title: 'Технологии и Путь Программиста',
    text: 'Технологии — это искусство решать задачи и превращать творческие идеи в реальность. Каждый потрясающий сайт, компьютерная игра и мобильное приложение начинались с того, что увлечённый человек написал свои первые строки кода. Когда вы учитесь печатать всеми пальцами не глядя на клавиатуру, ваши мысли переносятся в компьютер с молниеносной скоростью. Держите осанку прямо, старайтесь нажимать каждую клавишу без ошибок и добро пожаловать в мир программирования!'
  }
};

/**
 * Calculates typing statistics
 */
export function calculateTypingStats({ targetText, typedText, elapsedSeconds }) {
  const cleanTarget = targetText || '';
  const cleanTyped = typedText || '';
  const totalTyped = cleanTyped.length;

  let correctChars = 0;
  let errors = 0;

  for (let i = 0; i < totalTyped; i++) {
    if (i < cleanTarget.length && cleanTyped[i] === cleanTarget[i]) {
      correctChars++;
    } else {
      errors++;
    }
  }

  const minutes = Math.max(elapsedSeconds / 60, 0.0167); // minimum 1 second
  const cpm = Math.round((correctChars / minutes));
  const wpm = Math.round(cpm / 5);
  const accuracy = totalTyped > 0 ? Math.max(0, Math.round((correctChars / totalTyped) * 100)) : 100;
  const isFinished = totalTyped >= cleanTarget.length;

  let grade = 'Beginner';
  let feedbackUz = "Boshlang'ich daraja. Ikki qo'l bilan yozish mashqlarini ko'paytirish tavsiya etiladi.";
  let feedbackRu = 'Начальный уровень. Рекомендуется больше тренироваться десятипальцевой печати.';
  let feedbackEn = 'Beginner level. Focus on home row finger placement and steady rhythm.';

  if (wpm >= 45 && accuracy >= 95) {
    grade = 'Expert';
    feedbackUz = "A'lo natija! Yuqori tezlik va katta aniqlik — professional dasturlashga to'liq tayyorsiz!";
    feedbackRu = 'Отличный результат! Высокая скорость и точность — вы полностью готовы к программированию!';
    feedbackEn = 'Expert level! Outstanding speed and accuracy, fully ready for professional coding!';
  } else if (wpm >= 25 && accuracy >= 90) {
    grade = 'Intermediate';
    feedbackUz = "Yaxshi daraja! Kod yozish uchun yetarli tezlik va yaxshi aniqlik.";
    feedbackRu = 'Хороший уровень! Достаточная скорость и надежная точность для написания кода.';
    feedbackEn = 'Solid intermediate level! Good typing velocity and precision for daily coding.';
  }

  return {
    correctChars,
    errors,
    totalTyped,
    elapsedSeconds: Math.round(elapsedSeconds),
    cpm,
    wpm,
    accuracy,
    isFinished,
    grade,
    feedbackUz,
    feedbackRu,
    feedbackEn
  };
}

/**
 * Generates interactive Typing Diagnostic Lab HTML for the workspace
 */
export function renderTypingLabHtml(currentLang = 'en', stateLang = 'uz') {
  const sample = TYPING_TEXTS[currentLang] || TYPING_TEXTS.en;
  const isUz = stateLang === 'uz';

  return `
    <div class="typing-diagnostic-container" id="typing-diagnostic-container">
      <div class="typing-header">
        <div class="typing-badge">
          <span>⌨️</span> ${isUz ? 'KLAVIATURA DIAGNOSTIKASI (EN / RU)' : 'KEYBOARD DIAGNOSTIC (EN / RU)'}
        </div>
        <div class="typing-lang-switcher">
          <button class="typing-lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">🇬🇧 English</button>
          <button class="typing-lang-btn ${currentLang === 'ru' ? 'active' : ''}" data-lang="ru">🇷🇺 Русский</button>
        </div>
      </div>

      <div class="typing-metrics-bar">
        <div class="metric-chip">
          <span class="metric-label">${isUz ? '⚡ Tezlik' : '⚡ Speed'}</span>
          <span class="metric-value" id="val-wpm">0 <small>WPM</small></span>
        </div>
        <div class="metric-chip">
          <span class="metric-label">${isUz ? '🎯 Aniqlik' : '🎯 Accuracy'}</span>
          <span class="metric-value" id="val-accuracy">100<small>%</small></span>
        </div>
        <div class="metric-chip">
          <span class="metric-label">${isUz ? '❌ Xatolar' : '❌ Errors'}</span>
          <span class="metric-value" id="val-errors">0</span>
        </div>
        <div class="metric-chip">
          <span class="metric-label">${isUz ? '⌨️ Belgilar' : '⌨️ Characters'}</span>
          <span class="metric-value" id="val-cpm">0 <small>CPM</small></span>
        </div>
        <div class="metric-chip">
          <span class="metric-label">${isUz ? '⏱️ Vaqt' : '⏱️ Time'}</span>
          <span class="metric-value" id="val-time">00:00</span>
        </div>
      </div>

      <div class="typing-prompt-box">
        <div class="typing-prompt-title">
          <span>📜 ${sample.title}</span>
          <span class="typing-hint-badge">${isUz ? 'Quyidagi matnni qaramasdan tez va aniq tering:' : 'Type the following text swiftly and accurately:'}</span>
        </div>
        <div class="typing-text-display" id="typing-text-display">
          ${sample.text.split('').map((ch, idx) => `<span class="char-span ${idx === 0 ? 'current' : ''}" data-idx="${idx}">${ch === ' ' ? '&nbsp;' : ch}</span>`).join('')}
        </div>
      </div>

      <div class="typing-input-area">
        <textarea id="typing-input-box" class="typing-input-box" placeholder="${isUz ? 'Yozishni boshlash uchun shu yerga bosing... (Birinchi harfdan vaqt hisoblanadi)' : 'Click here and start typing... (Timer starts on first keystroke)'}" autofocus spellcheck="false"></textarea>
      </div>

      <div class="typing-actions">
        <button id="btn-restart-typing" class="btn-typing-secondary">🔄 ${isUz ? 'Qaytadan boshlash' : 'Restart Test'}</button>
        <button id="btn-finish-typing" class="btn-typing-primary">🏁 ${isUz ? 'Natijani tekshirish' : 'Check Results'}</button>
      </div>

      <!-- Result Modal Placeholder -->
      <div id="typing-result-modal-host"></div>
    </div>
  `;
}

/**
 * Initializes interactive typing event listeners
 */
export function initTypingInteractive(container, { state, onComplete, playSound }) {
  if (!container) return;
  let currentLang = 'en';
  let startTime = null;
  let timerInterval = null;
  let typedText = '';

  const sample = () => TYPING_TEXTS[currentLang];
  const inputEl = container.querySelector('#typing-input-box');
  const displayEl = container.querySelector('#typing-text-display');
  const wpmEl = container.querySelector('#val-wpm');
  const accEl = container.querySelector('#val-accuracy');
  const errEl = container.querySelector('#val-errors');
  const cpmEl = container.querySelector('#val-cpm');
  const timeEl = container.querySelector('#val-time');
  const modalHost = container.querySelector('#typing-result-modal-host');

  function renderChars() {
    if (!displayEl) return;
    const text = sample().text;
    const typed = typedText;
    let html = '';
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      let cls = 'char-span';
      if (i < typed.length) {
        cls += typed[i] === ch ? ' correct' : ' incorrect';
      } else if (i === typed.length) {
        cls += ' current';
      }
      html += `<span class="${cls}" data-idx="${i}">${ch === ' ' ? '&nbsp;' : ch}</span>`;
    }
    displayEl.innerHTML = html;
  }

  function tick() {
    if (!startTime) return;
    const elapsed = (Date.now() - startTime) / 1000;
    const mins = Math.floor(elapsed / 60);
    const secs = Math.floor(elapsed % 60);
    if (timeEl) timeEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    const stats = calculateTypingStats({
      targetText: sample().text,
      typedText,
      elapsedSeconds: elapsed
    });

    if (wpmEl) wpmEl.innerHTML = `${stats.wpm} <small>WPM</small>`;
    if (accEl) accEl.innerHTML = `${stats.accuracy}<small>%</small>`;
    if (errEl) errEl.textContent = stats.errors;
    if (cpmEl) cpmEl.innerHTML = `${stats.cpm} <small>CPM</small>`;

    if (stats.isFinished) {
      clearInterval(timerInterval);
      showCertificate(stats);
    }
  }

  inputEl?.addEventListener('input', () => {
    if (!startTime && inputEl.value.length > 0) {
      startTime = Date.now();
      timerInterval = setInterval(tick, 200);
    }
    typedText = inputEl.value;
    renderChars();
    tick();
  });

  // Switch languages
  container.querySelectorAll('.typing-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      currentLang = lang;
      container.querySelectorAll('.typing-lang-btn').forEach(b => b.classList.toggle('active', b === btn));
      reset();
    });
  });

  function reset() {
    clearInterval(timerInterval);
    startTime = null;
    typedText = '';
    if (inputEl) inputEl.value = '';
    renderChars();
    if (wpmEl) wpmEl.innerHTML = '0 <small>WPM</small>';
    if (accEl) accEl.innerHTML = '100<small>%</small>';
    if (errEl) errEl.textContent = '0';
    if (cpmEl) cpmEl.innerHTML = '0 <small>CPM</small>';
    if (timeEl) timeEl.textContent = '00:00';
    if (modalHost) modalHost.innerHTML = '';
  }

  container.querySelector('#btn-restart-typing')?.addEventListener('click', reset);

  container.querySelector('#btn-finish-typing')?.addEventListener('click', () => {
    const elapsed = startTime ? (Date.now() - startTime) / 1000 : 1;
    clearInterval(timerInterval);
    const stats = calculateTypingStats({
      targetText: sample().text,
      typedText,
      elapsedSeconds: elapsed
    });
    showCertificate(stats);
  });

  function showCertificate(stats) {
    if (playSound) playSound('success', true);
    const isUz = state.lang === 'uz';
    const langName = currentLang === 'en' ? 'English' : 'Русский';
    const feedback = isUz ? stats.feedbackUz : (currentLang === 'ru' ? stats.feedbackRu : stats.feedbackEn);

    if (modalHost) {
      modalHost.innerHTML = `
        <div class="modal-overlay" style="z-index: 99999;">
          <div class="modal-card" style="max-width: 500px; text-align: center;">
            <div class="modal-icon" style="font-size: 48px;">🏆</div>
            <h3 class="modal-title" style="color: #38bdf8;">${isUz ? 'KLAVIATURA DIAGNOSTIKA NATIJASI' : 'KEYBOARD DIAGNOSTIC REPORT'}</h3>
            <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid #1e293b; border-radius: 12px; padding: 18px; margin: 16px 0; text-align: left;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="color: #94a3b8;">${isUz ? "O'quvchi:" : 'Student:'}</span>
                <strong style="color: #ffffff;">${state.studentName} (${state.shift})</strong>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="color: #94a3b8;">${isUz ? "Sinov tili:" : 'Language:'}</span>
                <strong style="color: #38bdf8;">${langName}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="color: #94a3b8;">${isUz ? "Yozish tezligi:" : 'Speed:'}</span>
                <strong style="color: #22c55e; font-size: 18px;">${stats.wpm} WPM (${stats.cpm} CPM)</strong>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="color: #94a3b8;">${isUz ? "Aniqlik darajasi:" : 'Accuracy:'}</span>
                <strong style="color: #eab308; font-size: 18px;">${stats.accuracy}%</strong>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="color: #94a3b8;">${isUz ? "Xatolar:" : 'Errors:'}</span>
                <strong style="color: #f43f5e;">${stats.errors} ta</strong>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="color: #94a3b8;">${isUz ? "Sarflangan vaqt:" : 'Time:'}</span>
                <strong style="color: #ffffff;">${stats.elapsedSeconds}s</strong>
              </div>
              <div style="border-top: 1px dashed #334155; margin-top: 10px; padding-top: 10px;">
                <span style="color: #94a3b8; font-size: 12px;">${isUz ? "O'qituvchi xulosasi:" : 'Teacher Assessment:'}</span>
                <p style="color: #f1f5f9; font-weight: 700; margin: 4px 0 0 0; font-size: 13px;">${feedback}</p>
              </div>
            </div>
            <div class="modal-actions" style="display: flex; gap: 12px; justify-content: center;">
              <button id="btn-close-cert" class="btn-modal btn-modal-secondary">${isUz ? 'Yopish' : 'Close'}</button>
              <button id="btn-save-cert" class="btn-modal btn-modal-primary">💾 ${isUz ? 'Natijani Saqlash' : 'Save Report'}</button>
            </div>
          </div>
        </div>
      `;

      modalHost.querySelector('#btn-close-cert')?.addEventListener('click', () => {
        modalHost.innerHTML = '';
      });

      modalHost.querySelector('#btn-save-cert')?.addEventListener('click', () => {
        modalHost.innerHTML = '';
        if (onComplete) onComplete(stats);
      });
    }
  }

  renderChars();
}
