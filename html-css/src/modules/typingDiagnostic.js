/**
 * Typing Speed & Accuracy Diagnostic Engine
 * Comprehensive 10-15 minute diagnostic session for English and Russian keyboards.
 * Evaluates WPM, CPM, Accuracy %, and typing consistency with high-contrast, large text.
 */

export const TYPING_TEXTS = {
  en: {
    langLabel: 'English (10-15 min)',
    title: 'The Great Architecture of Modern Computing & The Web',
    text: "In the modern era, software is the invisible engine powering human civilization. From the smartphones in our pockets to satellites orbiting high above the Earth, every digital system is built on logic, algorithms, and code. Programming is not merely memorizing instructions; it is the creative art of breaking large, intimidating problems into elegant, bite-sized steps that a machine can execute with absolute precision.\n\nThe story of the World Wide Web began in nineteen ninety-one, when a visionary computer scientist named Tim Berners-Lee sought a better way for researchers to share information across different computers. He created the HyperText Markup Language, known as HTML, alongside the HTTP protocol and universal web addresses. For the first time in human history, anyone with a terminal could link thoughts, documents, and discoveries across continents in a fraction of a second. Today, almost two billion websites run on that very same foundation.\n\nTo become an exceptional software engineer, keyboard fluency is an indispensable superpower. When you master touch typing with all ten fingers, the barrier between your human thoughts and the digital screen dissolves. Your mind remains entirely free to focus on system design, database architecture, and debugging complex edge cases, rather than searching across keys with your eyes. Posture and patience are vital: keep your wrists elevated, your back straight, and let muscle memory guide your fingers across the home row.\n\nRemember that every master developer was once an apprentice who wrote their first flawed program. Errors and bugs are not failures; they are the essential clues that teach you how computer systems truly operate under the hood. Dedicate yourself to daily deliberate practice, explore the inner workings of browsers and operating systems, and take pride in building software that makes the world a smarter, more connected place."
  },
  ru: {
    langLabel: 'Русский (10-15 мин)',
    title: 'Великая Архитектура Компьютерных Технологий и Интернета',
    text: "В современную цифровую эпоху программное обеспечение стало невидимым двигателем человеческой цивилизации. От умных телефонов в наших карманах до космических спутников на околоземной орбите — каждая цифровая система создана на фундаменте строгой логики, алгоритмов и чистого кода. Программирование — это не просто механическое заучивание команд, а настоящее творческое искусство разделения сложных задач на простые и понятные шаги, которые компьютер выполняет с абсолютной точностью.\n\nИстория Всемирной Паутины началась в тысяча девятьсот девяносто первом году, когда британский учёный Тим Бернерс-Ли разработал способ быстрого обмена научными документами между исследовательскими центрами. Он создал язык гипертекстовой разметки HTML, сетевой протокол HTTP и систему универсальных адресов URL. Впервые в истории человечества знания, идеи и научные открытия объединились в единую мировую сеть, доступную каждому пользователю за доли секунды. Сегодня более двух миллиардов сайтов работают на этом фундаменте.\n\nДля каждого будущего инженера навык быстрой и точной печати является важнейшей суперсилой. Когда ваши пальцы свободно ориентируются на клавиатуре без необходимости смотреть на клавиши, граница между вашей мыслью и экраном исчезает. Ваш мозг полностью освобождается для проектирования архитектуры, построения баз данных и логики алгоритмов. Сидите прямо, держите пальцы на исходной позиции ФЫВА и ОЛДЖ, и позвольте мышечной памяти переносить идеи прямо в код.\n\nПомните, что каждый великий программист начинал с самых простых ошибок в коде. Ошибки — это естественные ступени профессионального роста. Регулярная практика, настойчивость и любовь к созданию полезных программ откроют перед вами двери в захватывающий мир высоких технологий."
  }
};

/**
 * Calculates typing statistics
 */
export function calculateTypingStats({ targetText, typedText, elapsedSeconds }) {
  const cleanTarget = (targetText || '').replace(/\r\n/g, '\n');
  const cleanTyped = (typedText || '').replace(/\r\n/g, '\n');
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
  const isFinished = totalTyped >= cleanTarget.length && cleanTarget.length > 0;
  const progressPercent = Math.min(100, Math.round((totalTyped / Math.max(1, cleanTarget.length)) * 100));

  let grade = 'Beginner';
  let feedbackUz = "Boshlang'ich daraja. Ikki qo'l bilan 10 barmoqda yozish mashqlarini ko'paytirish tavsiya etiladi.";
  let feedbackRu = 'Начальный уровень. Рекомендуется больше тренироваться десятипальцевой слепой печати.';
  let feedbackEn = 'Beginner level. Focus on home row finger placement and steady rhythm.';

  if (wpm >= 45 && accuracy >= 95) {
    grade = 'Expert';
    feedbackUz = "A'lo natija! Yuqori tezlik va katta aniqlik — professional dasturlashga to'liq tayyorsiz!";
    feedbackRu = 'Отличный результат! Высокая скорость и точность — вы полностью готовы к программированию!';
    feedbackEn = 'Expert level! Outstanding speed and accuracy, fully ready for professional coding!';
  } else if (wpm >= 25 && accuracy >= 90) {
    grade = 'Intermediate';
    feedbackUz = "Yaxshi daraja! Kod yozish uchun yetarli tezlik va mustahkam aniqlik.";
    feedbackRu = 'Хороший уровень! Достаточная скорость и надежная точность для написания кода.';
    feedbackEn = 'Solid intermediate level! Good typing velocity and precision for daily coding.';
  }

  return {
    correctChars,
    errors,
    totalTyped,
    targetLength: cleanTarget.length,
    progressPercent,
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
          <span>⌨️</span> ${isUz ? 'KLAVIATURA DIAGNOSTIKASI (10-15 DAQIQA — EN / RU)' : 'KEYBOARD DIAGNOSTIC (10-15 MIN — EN / RU)'}
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

      <!-- Live Typing Progress Bar -->
      <div class="typing-progress-strip">
        <div class="typing-progress-info">
          <span id="typing-progress-counter">0 / ${sample.text.length} ${isUz ? 'belgi' : 'chars'}</span>
          <span id="typing-progress-percent">0%</span>
        </div>
        <div class="typing-progress-track">
          <div class="typing-progress-fill" id="typing-progress-fill" style="width: 0%;"></div>
        </div>
      </div>

      <div class="typing-prompt-box">
        <div class="typing-prompt-title">
          <span>📜 ${sample.title}</span>
          <span class="typing-hint-badge">${isUz ? 'Quyidagi matnni klaviaturaga qaramasdan yozing:' : 'Type the following text without looking at keys:'}</span>
        </div>
        <div class="typing-text-display" id="typing-text-display">
          ${sample.text.split('').map((ch, idx) => {
            if (ch === '\n') return '<br>';
            return `<span class="char-span ${idx === 0 ? 'current' : ''}" data-idx="${idx}">${ch === ' ' ? '&nbsp;' : ch}</span>`;
          }).join('')}
        </div>
      </div>

      <div class="typing-input-area">
        <textarea id="typing-input-box" class="typing-input-box" placeholder="${isUz ? 'Yozishni boshlash uchun shu yerga bosing... (Birinchi harfdan vaqt hisoblanadi)' : 'Click here and start typing... (Timer begins on first keystroke)'}" autofocus spellcheck="false"></textarea>
      </div>

      <div class="typing-actions">
        <button id="btn-restart-typing" class="btn-typing-secondary">🔄 ${isUz ? 'Qaytadan boshlash' : 'Restart Test'}</button>
        <button id="btn-finish-typing" class="btn-typing-primary">🏁 ${isUz ? 'Diagnostikani Baholash & Saqlash' : 'Evaluate & Save Report'}</button>
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
  const progCounter = container.querySelector('#typing-progress-counter');
  const progPercent = container.querySelector('#typing-progress-percent');
  const progFill = container.querySelector('#typing-progress-fill');
  const modalHost = container.querySelector('#typing-result-modal-host');

  function renderChars() {
    if (!displayEl) return;
    const text = sample().text;
    const typed = typedText;
    let html = '';
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (ch === '\n') {
        html += '<br>';
        continue;
      }
      let cls = 'char-span';
      if (i < typed.length) {
        cls += typed[i] === ch ? ' correct' : ' incorrect';
      } else if (i === typed.length) {
        cls += ' current';
      }
      html += `<span class="${cls}" data-idx="${i}">${ch === ' ' ? '&nbsp;' : ch}</span>`;
    }
    displayEl.innerHTML = html;

    // Auto-scroll so current character stays smoothly in view
    const currentEl = displayEl.querySelector('.char-span.current');
    if (currentEl) {
      currentEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
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
    if (progCounter) progCounter.textContent = `${stats.totalTyped} / ${stats.targetLength} ${state?.lang === 'uz' ? 'belgi' : 'chars'}`;
    if (progPercent) progPercent.textContent = `${stats.progressPercent}%`;
    if (progFill) progFill.style.width = `${stats.progressPercent}%`;

    if (stats.isFinished) {
      clearInterval(timerInterval);
      showCertificate(stats);
    }
  }

  inputEl?.addEventListener('input', () => {
    if (!startTime && inputEl.value.length > 0) {
      startTime = Date.now();
      timerInterval = setInterval(tick, 250);
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
    if (progCounter) progCounter.textContent = `0 / ${sample().text.length} ${state?.lang === 'uz' ? 'belgi' : 'chars'}`;
    if (progPercent) progPercent.textContent = '0%';
    if (progFill) progFill.style.width = '0%';
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
    const isUz = (state?.lang || 'uz') === 'uz';
    const langName = currentLang === 'en' ? 'English (10-15 min)' : 'Русский (10-15 мин)';
    const feedback = isUz ? stats.feedbackUz : (currentLang === 'ru' ? stats.feedbackRu : stats.feedbackEn);

    if (modalHost) {
      modalHost.innerHTML = `
        <div class="modal-overlay" style="z-index: 99999;">
          <div class="modal-card" style="max-width: 520px; text-align: center;">
            <div class="modal-icon" style="font-size: 48px;">🏆</div>
            <h3 class="modal-title" style="color: #38bdf8;">${isUz ? 'KLAVIATURA DIAGNOSTIKA NATIJASI' : 'KEYBOARD DIAGNOSTIC REPORT'}</h3>
            <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid #1e293b; border-radius: 12px; padding: 18px; margin: 16px 0; text-align: left;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="color: #94a3b8;">${isUz ? "O'quvchi:" : 'Student:'}</span>
                <strong style="color: #ffffff;">${state?.studentName || 'Code Cadet'} (${state?.shift || '1-Smena'})</strong>
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
                <span style="color: #94a3b8;">${isUz ? "Yozilgan hajm:" : 'Typed Volume:'}</span>
                <strong style="color: #38bdf8;">${stats.totalTyped} / ${stats.targetLength} (${stats.progressPercent}%)</strong>
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
              <button id="btn-save-cert" class="btn-modal btn-modal-primary">💾 ${isUz ? 'Natijani Tasdiqlash' : 'Confirm & Save'}</button>
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
