/**
 * Typing Speed & Accuracy Diagnostic Engine
 * Comprehensive 2-Part (English & Russian) diagnostic session for 10-15 minutes each.
 * Evaluates WPM, CPM, Accuracy %, and typing consistency across Latin and Cyrillic keyboard layouts.
 */

export const TYPING_TEXTS = {
  en: {
    langLabel: 'English (Part 1 / 1-Qism: 10-15 min)',
    title: 'The Great Architecture of Modern Computing & The Web',
    text: "In the modern era, software is the invisible engine powering human civilization. From the smartphones in our pockets to satellites orbiting high above the Earth, every digital system is built on logic, algorithms, and code. Programming is not merely memorizing instructions; it is the creative art of breaking large, intimidating problems into elegant, bite-sized steps that a machine can execute with absolute precision.\n\nThe story of the World Wide Web began in nineteen ninety one, when a visionary computer scientist named Tim Berners-Lee sought a better way for researchers to share information across different computers. He created the HyperText Markup Language, known as HTML, alongside the HTTP protocol and universal web addresses. For the first time in human history, anyone with a computer terminal could link thoughts, documents, and discoveries across continents in a fraction of a second. Today, almost two billion websites run on that very same foundation.\n\nTo become an exceptional software engineer, keyboard fluency is an indispensable superpower. When you master touch typing with all ten fingers, the barrier between your human thoughts and the digital screen dissolves. Your mind remains entirely free to focus on system design, database architecture, and debugging complex edge cases, rather than searching across keys with your eyes. Posture and patience are vital: keep your wrists elevated, your back straight, and let muscle memory guide your fingers across the home row keys.\n\nWriting clean code requires discipline, curiosity, and persistent daily practice. As you type through these paragraphs, observe how each finger naturally finds its assigned key without hesitation. Embrace the rhythm of software development. Every keystroke brings you closer to architecting applications, websites, and artificial intelligence systems that will shape the next generation of digital technology. Keep your concentration sharp, maintain steady breathing, and let your keyboard become a natural extension of your creative mind.\n\nRemember that every master developer was once an apprentice who wrote their first flawed program. Errors and syntax bugs are not failures; they are the essential stepping stones that teach you how computer systems truly operate under the hood. Dedicate yourself to daily deliberate practice, explore the inner workings of browsers and operating systems, and take pride in building software that makes the world a smarter, more connected place. With perseverance, speed and precision will follow naturally."
  },
  ru: {
    langLabel: 'Русский (Part 2 / 2-Qism: 10-15 мин)',
    title: 'Великая Архитектура Компьютерных Технологий и Интернета',
    text: "В современную цифровую эпоху программное обеспечение стало невидимым двигателем человеческой цивилизации. От умных телефонов в наших карманах до космических спутников на околоземной орбите — каждая цифровая система создана на фундаменте строгой логики, алгоритмов и чистого кода. Программирование — это не просто механическое заучивание команд, а настоящее творческое искусство разделения сложных задач на простые и понятные шаги, которые компьютер выполняет с абсолютной точностью.\n\nИстория Всемирной Паутины началась в тысяча девятьсот девяносто первом году, когда британский учёный Тим Бернерс-Ли разработал способ быстрого обмена научными документами между исследовательскими центрами. Он создал язык гипертекстовой разметки HTML, сетевой протокол HTTP и систему универсальных адресов URL. Впервые в истории человечества знания, идеи и научные открытия объединились в единую мировую сеть, доступную каждому пользователю за доли секунды. Сегодня более двух миллиардов сайтов работают на этом фундаменте.\n\nДля каждого будущего инженера навык быстрой и точной печати является важнейшей суперсилой. Когда ваши пальцы свободно ориентируются на клавиатуре без необходимости смотреть на клавиши, граница между вашей мыслью и экраном исчезает. Ваш мозг полностью освобождается для проектирования архитектуры, построения баз данных и логики алгоритмов. Сидите прямо, держите пальцы на исходной позиции ФЫВА и ОЛДЖ, и позвольте мышечной памяти переносить идеи прямо в код.\n\nНаписание чистого и надежного кода требует дисциплины, терпения и постоянной ежедневной практики. По мере того как вы набираете эти строки, почувствуйте уверенность в каждом нажатии клавиши. Ошибки в коде — это не поражение, а естественные ступени роста для каждого настоящего инженера. Сохраняйте высокий уровень концентрации, соблюдайте правильный ритм набора текста и стремитесь к тому, чтобы клавиатура стала продолжением вашей творческой мысли.\n\nПомните, что путь в тысячу строк кода начинается с первого правильного символа. Компьютерная индустрия постоянно развивается, и те, кто умеет быстро и безошибочно воплощать свои идеи в реальный код, ведут за собой технологический прогресс. Тренируйтесь каждый день, развивайте внимание к мельчайшим деталям синтаксиса, и вы обязательно добьетесь блестящих успехов в создании передовых цифровых продуктов будущего."
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
 * Generates full-width interactive 2-Part Typing Diagnostic Lab HTML
 */
export function renderTypingLabHtml(currentStage = 'en', stateLang = 'uz', results = {}) {
  const sample = TYPING_TEXTS[currentStage] || TYPING_TEXTS.en;
  const isUz = stateLang === 'uz';
  const hasEnDone = !!results.en;
  const hasRuDone = !!results.ru;

  return `
    <div class="typing-diagnostic-container" id="typing-diagnostic-container">
      <!-- 2-Part Sequential Stepper Header -->
      <div class="typing-stepper-header">
        <div class="typing-brand-badge">
          <span>⌨️</span> ${isUz ? 'KLAVIATURA DIAGNOSTIKASI (2 BOSQICHLI: INGLIZ VA RUS TILLARI)' : 'KEYBOARD DIAGNOSTIC (2-PART: ENGLISH & RUSSIAN)'}
        </div>
        <div class="typing-stepper">
          <button class="typing-step-pill ${currentStage === 'en' ? 'active' : ''} ${hasEnDone ? 'completed' : ''}" data-stage-target="en">
            <span class="step-num">${hasEnDone ? '✓' : '1'}</span>
            <span class="step-icon">🇬🇧</span>
            <div class="step-meta">
              <span class="step-title">${isUz ? '1-Qism: Ingliz Tili' : 'Part 1: English'}</span>
              <span class="step-status">${hasEnDone ? `${results.en.wpm} WPM • ${results.en.accuracy}%` : (currentStage === 'en' ? (isUz ? 'Faol jarayon' : 'Active') : (isUz ? 'Kutilmoqda' : 'Pending'))}</span>
            </div>
          </button>
          <div class="typing-stepper-divider">➔</div>
          <button class="typing-step-pill ${currentStage === 'ru' ? 'active' : ''} ${hasRuDone ? 'completed' : ''}" data-stage-target="ru">
            <span class="step-num">${hasRuDone ? '✓' : '2'}</span>
            <span class="step-icon">🇷🇺</span>
            <div class="step-meta">
              <span class="step-title">${isUz ? '2-Qism: Rus Tili' : 'Part 2: Russian'}</span>
              <span class="step-status">${hasRuDone ? `${results.ru.wpm} WPM • ${results.ru.accuracy}%` : (currentStage === 'ru' ? (isUz ? 'Faol jarayon' : 'Active') : (isUz ? 'Kutilmoqda' : 'Pending'))}</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Real-Time Metrics Strip -->
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

      <!-- Full-Width Sample Text Canvas with Locked Zero Horizontal Scroll -->
      <div class="typing-prompt-box">
        <div class="typing-prompt-title">
          <span>📜 ${sample.title}</span>
          <span class="typing-hint-badge">${isUz ? 'Klaviaturaga qaramasdan, barmoqlarni asosiy qatorda tutib yozing:' : 'Type without looking at keys, keeping hands on home row:'}</span>
        </div>
        <div class="typing-text-display" id="typing-text-display">
          ${sample.text.split('').map((ch, idx) => {
            if (ch === '\n') return '<br>';
            return `<span class="char-span ${idx === 0 ? 'current' : ''}" data-idx="${idx}">${ch === ' ' ? ' ' : ch}</span>`;
          }).join('')}
        </div>
      </div>

      <!-- Typing Input Box -->
      <div class="typing-input-area">
        <textarea id="typing-input-box" class="typing-input-box" placeholder="${isUz ? (currentStage === 'en' ? '1-Qism (Ingliz tili): Yozishni boshlash uchun shu yerga bosing... (Birinchi harfdan vaqt boshlanadi)' : '2-Qism (Rus tili): Yozishni boshlash uchun shu yerga bosing...') : 'Click here and start typing... (Timer begins on first keystroke)'}" autofocus spellcheck="false"></textarea>
      </div>

      <!-- Stage Navigation and Actions -->
      <div class="typing-actions">
        <button id="btn-restart-typing" class="btn-typing-secondary">🔄 ${isUz ? 'Ushbu qismni qaytadan boshlash' : 'Restart Current Part'}</button>
        ${currentStage === 'en' ? `
          <button id="btn-next-stage" class="btn-typing-primary">➡️ ${isUz ? "2-Qismga O'tish (Rus tili)" : 'Proceed to Part 2 (Russian)'}</button>
        ` : `
          <button id="btn-prev-stage" class="btn-typing-secondary">⬅️ ${isUz ? "1-Qism (Ingliz tili)" : 'Back to Part 1'}</button>
          <button id="btn-finish-typing" class="btn-typing-primary">🏆 ${isUz ? 'Diagnostikani Yakunlash & Natija' : 'Complete Diagnostic & View Report'}</button>
        `}
      </div>

      <!-- Result Modal Placeholder -->
      <div id="typing-result-modal-host"></div>
    </div>
  `;
}

/**
 * Initializes interactive typing event listeners with 2-part flow
 */
export function initTypingInteractive(container, { state, onComplete, playSound }) {
  if (!container) return;
  let currentStage = 'en'; // 'en' | 'ru'
  let startTime = null;
  let timerInterval = null;
  let typedText = '';
  const results = {
    en: state?.typingStats?.en || null,
    ru: state?.typingStats?.ru || null
  };

  function getSample() {
    return TYPING_TEXTS[currentStage];
  }

  function setupElements() {
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
      const text = getSample().text;
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
        html += `<span class="${cls}" data-idx="${i}">${ch === ' ' ? ' ' : ch}</span>`;
      }
      displayEl.innerHTML = html;

      // Safe VERTICAL-ONLY scrolling to keep current character in view without horizontal left-clipping
      if (typed.length === 0) {
        displayEl.scrollTop = 0;
      } else {
        const currentEl = displayEl.querySelector('.char-span.current');
        if (currentEl) {
          const currentRect = currentEl.getBoundingClientRect();
          const displayRect = displayEl.getBoundingClientRect();
          const relativeTop = currentRect.top - displayRect.top;
          if (relativeTop < 25 || relativeTop > displayRect.height - 65) {
            displayEl.scrollTop += Math.round(relativeTop - (displayRect.height / 3));
          }
        }
      }
    }

    function tick() {
      if (!startTime) return;
      const elapsed = (Date.now() - startTime) / 1000;
      const mins = Math.floor(elapsed / 60);
      const secs = Math.floor(elapsed % 60);
      if (timeEl) timeEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

      const stats = calculateTypingStats({
        targetText: getSample().text,
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
        if (currentStage === 'en') {
          results.en = stats;
          showTransitionPrompt();
        } else {
          results.ru = stats;
          showDualCertificate();
        }
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

    function resetCurrentStage() {
      clearInterval(timerInterval);
      startTime = null;
      typedText = '';
      if (inputEl) {
        inputEl.value = '';
        inputEl.focus();
      }
      renderChars();
      if (wpmEl) wpmEl.innerHTML = '0 <small>WPM</small>';
      if (accEl) accEl.innerHTML = '100<small>%</small>';
      if (errEl) errEl.textContent = '0';
      if (cpmEl) cpmEl.innerHTML = '0 <small>CPM</small>';
      if (timeEl) timeEl.textContent = '00:00';
      if (progCounter) progCounter.textContent = `0 / ${getSample().text.length} ${state?.lang === 'uz' ? 'belgi' : 'chars'}`;
      if (progPercent) progPercent.textContent = '0%';
      if (progFill) progFill.style.width = '0%';
      if (modalHost) modalHost.innerHTML = '';
    }

    container.querySelector('#btn-restart-typing')?.addEventListener('click', () => {
      playSound?.('click', true);
      resetCurrentStage();
    });

    // Proceed to Part 2 (Russian)
    container.querySelector('#btn-next-stage')?.addEventListener('click', () => {
      playSound?.('click', true);
      const elapsed = startTime ? (Date.now() - startTime) / 1000 : 1;
      results.en = calculateTypingStats({
        targetText: TYPING_TEXTS.en.text,
        typedText: typedText || (results.en?.typedText || ''),
        elapsedSeconds: elapsed
      });
      switchStage('ru');
    });

    // Back to Part 1 (English)
    container.querySelector('#btn-prev-stage')?.addEventListener('click', () => {
      playSound?.('click', true);
      const elapsed = startTime ? (Date.now() - startTime) / 1000 : 1;
      results.ru = calculateTypingStats({
        targetText: TYPING_TEXTS.ru.text,
        typedText: typedText || (results.ru?.typedText || ''),
        elapsedSeconds: elapsed
      });
      switchStage('en');
    });

    // Finish Diagnostic & Show Dual Certificate
    container.querySelector('#btn-finish-typing')?.addEventListener('click', () => {
      playSound?.('click', true);
      const elapsed = startTime ? (Date.now() - startTime) / 1000 : 1;
      results.ru = calculateTypingStats({
        targetText: TYPING_TEXTS.ru.text,
        typedText: typedText || (results.ru?.typedText || ''),
        elapsedSeconds: elapsed
      });
      showDualCertificate();
    });

    // Direct Stepper Pill Navigation
    container.querySelectorAll('.typing-step-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const target = pill.getAttribute('data-stage-target');
        if (target && target !== currentStage) {
          playSound?.('click', true);
          const elapsed = startTime ? (Date.now() - startTime) / 1000 : 1;
          results[currentStage] = calculateTypingStats({
            targetText: getSample().text,
            typedText,
            elapsedSeconds: elapsed
          });
          switchStage(target);
        }
      });
    });

    function showTransitionPrompt() {
      playSound?.('success', true);
      const isUz = (state?.lang || 'uz') === 'uz';
      if (modalHost) {
        modalHost.innerHTML = `
          <div class="modal-overlay" style="z-index: 99999;">
            <div class="modal-card" style="max-width: 480px; text-align: center; border: 2px solid #38bdf8;">
              <div style="font-size: 48px; margin-bottom: 12px;">🇬🇧 ➔ 🇷🇺</div>
              <h3 style="color: #38bdf8; margin: 0 0 10px 0;">${isUz ? "1-Qism Yakunlandi!" : 'Part 1 Completed!'}</h3>
              <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6;">
                ${isUz 
                  ? `Ingliz tili klaviaturasi sinovi yakunlandi: <strong>${results.en.wpm} WPM</strong> va <strong>${results.en.accuracy}%</strong> aniqlik! Endi 2-Qism: Rus tili klaviaturasi sinoviga o'tamiz.`
                  : `English keyboard test complete: <strong>${results.en.wpm} WPM</strong> and <strong>${results.en.accuracy}%</strong> accuracy! Now proceeding to Part 2: Russian keyboard test.`}
              </p>
              <div class="modal-actions" style="margin-top: 20px; display: flex; justify-content: center; gap: 12px;">
                <button id="btn-modal-start-ru" class="btn-modal btn-modal-primary" style="padding: 12px 24px; font-weight: 700;">
                  ➡️ ${isUz ? "2-Qismga O'tish (Rus tili)" : 'Proceed to Russian Test'}
                </button>
              </div>
            </div>
          </div>
        `;
        modalHost.querySelector('#btn-modal-start-ru')?.addEventListener('click', () => {
          modalHost.innerHTML = '';
          switchStage('ru');
        });
      }
    }

    function showDualCertificate() {
      playSound?.('success', true);
      const isUz = (state?.lang || 'uz') === 'uz';
      const enStats = results.en || { wpm: 0, cpm: 0, accuracy: 0, errors: 0, elapsedSeconds: 0, grade: 'Pending' };
      const ruStats = results.ru || { wpm: 0, cpm: 0, accuracy: 0, errors: 0, elapsedSeconds: 0, grade: 'Pending' };

      const avgWpm = Math.round((enStats.wpm + ruStats.wpm) / 2);
      const avgAcc = Math.round((enStats.accuracy + ruStats.accuracy) / 2);

      let teacherNote = isUz
        ? `O'quvchi har ikki klaviatura (Ingliz va Rus) tartibida testdan o'tdi. O'rtacha tezlik: ${avgWpm} WPM, aniqlik: ${avgAcc}%. Dasturlash kursining HTML/CSS amaliyotiga to'liq tayyor!`
        : `Student completed dual keyboard assessment (EN/RU). Average velocity: ${avgWpm} WPM, accuracy: ${avgAcc}%. Fully prepared for HTML/CSS syntax implementation!`;

      if (modalHost) {
        modalHost.innerHTML = `
          <div class="modal-overlay" style="z-index: 99999;">
            <div class="modal-card" style="max-width: 620px; text-align: center; border: 2px solid #38bdf8; background: #0f172a;">
              <div style="font-size: 48px; margin-bottom: 8px;">🏆</div>
              <h3 style="color: #38bdf8; margin: 0 0 6px 0; font-size: 20px;">${isUz ? 'IKKI TILLI KLAVIATURA DIAGNOSTIKA SERTIFIKATI' : 'DUAL-LANGUAGE KEYBOARD CERTIFICATE'}</h3>
              <p style="color: #94a3b8; font-size: 13px; margin: 0 0 16px 0;">${isUz ? "O'quvchining Ingliz va Rus tillaridagi barmoq tezligi va aniqlik xulosasi" : 'Student typing velocity and accuracy report in English and Russian'}</p>

              <div style="background: rgba(15, 23, 42, 0.9); border: 1px solid #1e293b; border-radius: 12px; padding: 16px; margin-bottom: 16px; text-align: left;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 12px; border-bottom: 1px solid #334155; padding-bottom: 8px;">
                  <span style="color: #94a3b8;">${isUz ? "O'quvchi:" : 'Student:'}</span>
                  <strong style="color: #ffffff; font-size: 15px;">${state?.studentName || 'Code Cadet'} (${state?.shift || '1-Smena'})</strong>
                </div>

                <!-- Dual Columns: EN vs RU -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
                  <!-- English Card -->
                  <div style="background: rgba(30, 41, 59, 0.8); border: 1px solid #38bdf8; border-radius: 10px; padding: 12px;">
                    <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
                      <span style="font-size: 18px;">🇬🇧</span>
                      <strong style="color: #38bdf8; font-size: 13px;">${isUz ? 'Ingliz Tili' : 'English Test'}</strong>
                    </div>
                    <div style="font-size: 22px; font-weight: 800; color: #22c55e;">${enStats.wpm} <small style="font-size: 12px; color: #94a3b8;">WPM</small></div>
                    <div style="font-size: 12px; color: #eab308; margin-top: 2px;">${isUz ? 'Aniqlik:' : 'Accuracy:'} <strong>${enStats.accuracy}%</strong></div>
                    <div style="font-size: 12px; color: #94a3b8; margin-top: 2px;">${isUz ? 'Xatolar:' : 'Errors:'} <strong style="color: #f43f5e;">${enStats.errors}</strong></div>
                    <div style="font-size: 11px; color: #64748b; margin-top: 4px;">${enStats.totalTyped} / ${enStats.targetLength} chars (${enStats.elapsedSeconds}s)</div>
                  </div>

                  <!-- Russian Card -->
                  <div style="background: rgba(30, 41, 59, 0.8); border: 1px solid #a855f7; border-radius: 10px; padding: 12px;">
                    <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
                      <span style="font-size: 18px;">🇷🇺</span>
                      <strong style="color: #c084fc; font-size: 13px;">${isUz ? 'Rus Tili' : 'Russian Test'}</strong>
                    </div>
                    <div style="font-size: 22px; font-weight: 800; color: #22c55e;">${ruStats.wpm} <small style="font-size: 12px; color: #94a3b8;">WPM</small></div>
                    <div style="font-size: 12px; color: #eab308; margin-top: 2px;">${isUz ? 'Aniqlik:' : 'Accuracy:'} <strong>${ruStats.accuracy}%</strong></div>
                    <div style="font-size: 12px; color: #94a3b8; margin-top: 2px;">${isUz ? 'Xatolar:' : 'Errors:'} <strong style="color: #f43f5e;">${ruStats.errors}</strong></div>
                    <div style="font-size: 11px; color: #64748b; margin-top: 4px;">${ruStats.totalTyped} / ${ruStats.targetLength} chars (${ruStats.elapsedSeconds}s)</div>
                  </div>
                </div>

                <div style="border-top: 1px dashed #334155; padding-top: 10px;">
                  <span style="color: #94a3b8; font-size: 12px;">${isUz ? "O'qituvchi xulosasi:" : 'Teacher Assessment:'}</span>
                  <p style="color: #f1f5f9; font-weight: 600; margin: 4px 0 0 0; font-size: 13px; line-height: 1.5;">${teacherNote}</p>
                </div>
              </div>

              <div class="modal-actions" style="display: flex; gap: 12px; justify-content: center;">
                <button id="btn-close-cert" class="btn-modal btn-modal-secondary">${isUz ? 'Qayta topshirish' : 'Retry Test'}</button>
                <button id="btn-save-cert" class="btn-modal btn-modal-primary" style="background: linear-gradient(135deg, #0284c7, #2563eb); font-weight: 700;">💾 ${isUz ? 'Natijani Tasdiqlash & Saqlash' : 'Confirm & Save Report'}</button>
              </div>
            </div>
          </div>
        `;

        modalHost.querySelector('#btn-close-cert')?.addEventListener('click', () => {
          modalHost.innerHTML = '';
        });

        modalHost.querySelector('#btn-save-cert')?.addEventListener('click', () => {
          modalHost.innerHTML = '';
          const combined = {
            en: enStats,
            ru: ruStats,
            avgWpm,
            avgAccuracy: avgAcc,
            passed: true,
            status: 'completed',
            completedAt: new Date().toISOString()
          };
          if (onComplete) onComplete(combined);
        });
      }
    }

    renderChars();
  }

  function switchStage(stage) {
    currentStage = stage;
    clearInterval(timerInterval);
    startTime = null;
    typedText = '';
    container.innerHTML = renderTypingLabHtml(currentStage, state?.lang || 'uz', results);
    setupElements();
  }

  setupElements();
}
