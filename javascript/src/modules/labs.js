/**
 * Visual Labs Module for CodeCraft JS (All 24 Topics)
 * Interactive 4-stage slider visualizer:
 * Stage 1: Clean canvas / Initial state
 * Stage 2: Command / Keyword injected
 * Stage 3: Data / Parameters configured
 * Stage 4: Live interactive animated execution
 */

import { escapeHtml } from './i18n.js';

export const TOPIC_LABS = {
  'js-1-console': {
    title: { uz: "💬 Konsol & Alert Simulyatori", en: "💬 Console & Alert Simulator" },
    desc: { uz: "console.log() va alert() kompyuter bilan qanday gaplashishini bosqichma-bosqich ko'ring.", en: "See step-by-step how console.log and alert talk to the computer." },
    stages: [
      {
        name: { uz: "1. Sukunat (Bo'sh Konsol)", en: "1. Silence (Empty Console)" },
        code: `// Hali hech narsa yozilmagan\n// Konsol bo'm-bo'sh turibdi`,
        effect: { uz: "Dastur ishga tushmagan, konsolda hech qanday xabar yo'q.", en: "No command sent, console is completely empty." },
        renderVisual: () => `<div style="background:#090d16; border-radius:10px; padding:20px; font-family:monospace; color:#64748b; border:1px solid #1e293b;">&gt; Console is ready and waiting...</div>`
      },
      {
        name: { uz: "2. Buyruq Yozildi", en: "2. Command Typed" },
        code: `console.log; // Buyruq kiritildi, lekin hali chaqirilmadi`,
        effect: { uz: "Kompyuter console.log buyrug'ini tanidi.", en: "Computer recognizes the console.log reference." },
        renderVisual: () => `<div style="background:#090d16; border-radius:10px; padding:20px; font-family:monospace; color:#38bdf8; border:1px solid #0284c7;">&gt; ƒ log() { [native code] }</div>`
      },
      {
        name: { uz: "3. Matn Yuklandi", en: "3. Text Added" },
        code: `console.log("Salom, Dunyo!");`,
        effect: { uz: "Xabar konsolga jo'natildi va chop etildi.", en: "Message dispatched and printed to developer console." },
        renderVisual: () => `<div style="background:#090d16; border-radius:10px; padding:20px; font-family:monospace; color:#4ade80; border:1px solid #22c55e;">&gt; "Salom, Dunyo!" ✨</div>`
      },
      {
        name: { uz: "4. Jonli Alert Qalqib Chiqishi", en: "4. Interactive Alert Popup" },
        code: `alert("Salom, Yosh Dasturchi! 🚀");`,
        effect: { uz: "Ekranda chiroyli qalqib chiquvchi oyna paydo bo'ldi!", en: "A friendly modal alert dialogue pops up on screen!" },
        renderVisual: () => `
          <div style="background:rgba(59,130,246,0.15); border:2px solid #3b82f6; border-radius:14px; padding:24px; text-align:center; box-shadow:0 10px 30px rgba(59,130,246,0.3); animation:pulse 2s infinite;">
            <div style="font-size:36px; margin-bottom:8px;">🔔</div>
            <strong style="color:white; font-size:16px;">Salom, Yosh Dasturchi! 🚀</strong>
            <div style="margin-top:14px;"><button style="background:#3b82f6; color:white; border:none; padding:6px 20px; border-radius:6px; font-weight:bold; cursor:pointer;">OK</button></div>
          </div>
        `
      }
    ]
  },

  'js-2-variables': {
    title: { uz: "📦 Sehrli Qutilar Simulyatori", en: "📦 Magic Storage Boxes Simulator" },
    desc: { uz: "let va const o'zgaruvchilari kompyuter xotirasida qanday joylashishini kuzating.", en: "Watch how let and const store values in computer memory." },
    stages: [
      {
        name: { uz: "1. Bo'sh Xotira", en: "1. Empty Memory" },
        code: `// Xotirada hali o'zgaruvchilar yo'q`,
        effect: { uz: "Kompyuter xotirasida bo'sh joy turibdi.", en: "Memory space is empty." },
        renderVisual: () => `<div style="display:flex; justify-content:center; gap:20px;"><div style="border:2px dashed #475569; border-radius:12px; padding:20px 30px; color:#64748b;">[ Bo'sh Quti ]</div></div>`
      },
      {
        name: { uz: "2. Qutiga Nom Berildi (let score)", en: "2. Box Labeled (let score)" },
        code: `let score; // Qutining nomi bor, lekin ichi bo'sh (undefined)`,
        effect: { uz: "score nomli quti ochildi, uning qiymati hozircha undefined.", en: "Variable box labeled 'score', value is undefined." },
        renderVisual: () => `<div style="display:flex; justify-content:center;"><div style="background:#1e293b; border:2px solid #94a3b8; border-radius:12px; padding:16px 24px; text-align:center;"><span style="color:#94a3b8; font-size:12px;">QUTI NOMI:</span><h4 style="color:#f8fafc; margin:4px 0;">score</h4><span style="color:#64748b;">undefined</span></div></div>`
      },
      {
        name: { uz: "3. Qiymat Solindi (score = 100)", en: "3. Value Inserted (score = 100)" },
        code: `let score = 100; // Qutiga 100 soni solindi`,
        effect: { uz: "score qutisiga 100 solindi.", en: "Score box now contains 100." },
        renderVisual: () => `<div style="display:flex; justify-content:center;"><div style="background:#0f172a; border:2px solid #38bdf8; border-radius:12px; padding:16px 30px; text-align:center; box-shadow:0 0 20px rgba(56,189,248,0.3);"><span style="color:#38bdf8; font-size:12px;">LET: O'ZGARUVCHAN</span><h3 style="color:#38bdf8; margin:4px 0;">score: 100</h3><span style="color:#4ade80;">💎 100 Ball</span></div></div>`
      },
      {
        name: { uz: "4. const Bilan O'zgarmas Quti", en: "4. Sealed Box with const" },
        code: `const playerName = "Ali"; // Qulf solingan doimiy quti`,
        effect: { uz: "playerName qulflangan quti bo'ldi, uni boshqa o'zgartirib bo'lmaydi!", en: "playerName is securely locked and can never be mutated!" },
        renderVisual: () => `
          <div style="display:flex; justify-content:center; gap:20px;">
            <div style="background:#0f172a; border:2px solid #38bdf8; border-radius:12px; padding:14px 20px; text-align:center;"><span style="color:#38bdf8;">📦 let score: 100</span></div>
            <div style="background:#0f172a; border:2px solid #a855f7; border-radius:12px; padding:14px 20px; text-align:center; box-shadow:0 0 20px rgba(168,85,247,0.3);"><span style="color:#c084fc;">🔒 const playerName: "Ali"</span></div>
          </div>
        `
      }
    ]
  },

  'js-15-for-loop': {
    title: { uz: "🔁 for Tsikli Takrorlash Mashinasi", en: "🔁 for Loop Machine" },
    desc: { uz: "for (let i = 1; i <= 5; i++) har bir aylanishda nima qilishini jonli ko'ring.", en: "Watch each iteration of a for loop generate items on the fly." },
    stages: [
      {
        name: { uz: "1. Boshlanish (i = 1)", en: "1. Start (i = 1)" },
        code: `for (let i = 1; i <= 5; i++) { /* 1-qadam */ }`,
        effect: { uz: "Tsikl boshlandi, i = 1.", en: "Loop initiated with i = 1." },
        renderVisual: () => `<div style="display:flex; gap:10px; justify-content:center;"><div style="background:#3b82f6; color:white; padding:12px 18px; border-radius:8px; font-weight:bold;">⭐ #1</div></div>`
      },
      {
        name: { uz: "2. Aylanish (i = 2)", en: "2. Lap (i = 2)" },
        code: `// i++ ishga tushdi, i = 2 bo'ldi`,
        effect: { uz: "Ikkinchi yulduzcha generatsiya qilindi.", en: "Second star generated." },
        renderVisual: () => `<div style="display:flex; gap:10px; justify-content:center;"><div style="background:#3b82f6; color:white; padding:12px 18px; border-radius:8px; font-weight:bold;">⭐ #1</div><div style="background:#3b82f6; color:white; padding:12px 18px; border-radius:8px; font-weight:bold;">⭐ #2</div></div>`
      },
      {
        name: { uz: "3. O'rtasi (i = 3 va 4)", en: "3. Middle (i = 3 & 4)" },
        code: `// i <= 5 sharti hali ham to'g'ri (true)`,
        effect: { uz: "Tsikl jadal aylanmoqda, 4 ta element tayyor.", en: "Loop running swiftly, 4 items produced." },
        renderVisual: () => `<div style="display:flex; gap:10px; justify-content:center;"><div style="background:#3b82f6; color:white; padding:12px 18px; border-radius:8px; font-weight:bold;">⭐ #1</div><div style="background:#3b82f6; color:white; padding:12px 18px; border-radius:8px; font-weight:bold;">⭐ #2</div><div style="background:#3b82f6; color:white; padding:12px 18px; border-radius:8px; font-weight:bold;">⭐ #3</div><div style="background:#3b82f6; color:white; padding:12px 18px; border-radius:8px; font-weight:bold;">⭐ #4</div></div>`
      },
      {
        name: { uz: "4. Marra (i = 5)", en: "4. Finished (i = 5)" },
        code: `// i = 6 bo'lganda shart buziladi va tsikl to'xtaydi`,
        effect: { uz: "Barcha 5 ta yulduzcha bir zumda tayyor bo'ldi!", en: "All 5 stars generated in milliseconds!" },
        renderVisual: () => `<div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;"><div style="background:#10b981; color:white; padding:12px 18px; border-radius:8px; font-weight:bold;">⭐ #1</div><div style="background:#10b981; color:white; padding:12px 18px; border-radius:8px; font-weight:bold;">⭐ #2</div><div style="background:#10b981; color:white; padding:12px 18px; border-radius:8px; font-weight:bold;">⭐ #3</div><div style="background:#10b981; color:white; padding:12px 18px; border-radius:8px; font-weight:bold;">⭐ #4</div><div style="background:#10b981; color:white; padding:12px 18px; border-radius:8px; font-weight:bold; box-shadow:0 0 15px #10b981;">⭐ #5 🎉</div></div>`
      }
    ]
  },

  'js-24-clicker-game': {
    title: { uz: "🏆 Jonli Kliker O'yini Simulyatori", en: "🏆 Live Clicker Game Simulator" },
    desc: { uz: "Tugmani bosganda count oshishi va g'alaba shartini bosqichma-bosqich ko'ring.", en: "See the click counter advance towards victory stage by stage." },
    stages: [
      {
        name: { uz: "1. Boshlang'ich Holat (count = 0)", en: "1. Start State (count = 0)" },
        code: `let count = 0;`,
        effect: { uz: "Hisob nolga teng, o'yin kutmoqda.", en: "Count at 0, ready for user interaction." },
        renderVisual: () => `<div style="text-align:center;"><div style="font-size:36px; font-weight:bold; color:#94a3b8; margin-bottom:10px;">0 / 10</div><button style="background:#475569; color:white; border:none; padding:10px 24px; border-radius:8px; font-weight:bold;">BOSING 👆</button></div>`
      },
      {
        name: { uz: "2. Birinchi Chertishlar (count = 3)", en: "2. First Clicks (count = 3)" },
        code: `count++; countEl.textContent = count;`,
        effect: { uz: "O'yinchi 3 marta bosdi.", en: "Player clicked 3 times." },
        renderVisual: () => `<div style="text-align:center;"><div style="font-size:36px; font-weight:bold; color:#38bdf8; margin-bottom:10px;">3 / 10</div><button style="background:#0284c7; color:white; border:none; padding:10px 24px; border-radius:8px; font-weight:bold;">BOSING 👆</button></div>`
      },
      {
        name: { uz: "3. G'alabaga Yaqin (count = 8)", en: "3. Almost There (count = 8)" },
        code: `if (count === 10) { /* deyarli yetdi */ }`,
        effect: { uz: "Yana 2 ta bosilsa sovrin ochiladi!", en: "Only 2 more clicks until victory!" },
        renderVisual: () => `<div style="text-align:center;"><div style="font-size:42px; font-weight:bold; color:#f59e0b; margin-bottom:10px; animation:bounce 1s infinite;">8 / 10 🔥</div><button style="background:#d97706; color:white; border:none; padding:12px 28px; border-radius:8px; font-weight:bold; font-size:16px;">TEZROQ BOSING! ⚡</button></div>`
      },
      {
        name: { uz: "4. G'ALABA! (count = 10)", en: "4. VICTORY! (count = 10)" },
        code: `alert("G'alaba! 🏆 Siz yutdingiz!");`,
        effect: { uz: "G'alaba sharti bajarildi, kubok topshirildi!", en: "Winning condition satisfied! Trophy awarded!" },
        renderVisual: () => `
          <div style="text-align:center; background:linear-gradient(135deg, rgba(234,179,8,0.2), rgba(168,85,247,0.2)); border:2px solid #eab308; border-radius:14px; padding:20px;">
            <div style="font-size:48px;">🏆</div>
            <h3 style="color:#eab308; margin:8px 0;">G'ALABA! (10 / 10)</h3>
            <p style="color:#cbd5e1; margin:0;">Tabriklaymiz, siz to'liq interaktiv o'yin yaratdingiz!</p>
          </div>
        `
      }
    ]
  }
};

// Generates fallback 4-stage visual lab for any theme not individually customized
export function getTopicLab(lessonId, lesson) {
  if (TOPIC_LABS[lessonId]) return TOPIC_LABS[lessonId];

  const titleText = lesson ? (lesson.title.uz || lesson.title.en) : lessonId;
  const targetCode = lesson ? lesson.targetCode : '// code';

  return {
    title: { uz: `🧪 ${titleText} Laboratoriyasi`, en: `🧪 ${titleText} Visual Lab` },
    desc: { uz: "Ushbu JavaScript mavzusining 4 bosqichli evolyutsiyasi.", en: "4-stage evolutionary progression of this JavaScript topic." },
    stages: [
      {
        name: { uz: "1. Boshlang'ich Holat", en: "1. Initial State" },
        code: `// 1-Bosqich: Boshlang'ich holat\n// O'zgaruvchilar va kod tayyorlanmoqda...`,
        effect: { uz: "Dastlabki bo'sh maydon.", en: "Clean starting state before execution." },
        renderVisual: () => `<div style="background:#0b0f19; border:1px solid #1e293b; border-radius:10px; padding:24px; text-align:center; color:#64748b;">⏳ Tayyorgarlik holati...</div>`
      },
      {
        name: { uz: "2. Sintaksis Kiritildi", en: "2. Syntax Declared" },
        code: `// 2-Bosqich: Kalit so'z va qoidalar e'lon qilindi\n${targetCode.split('\\n')[0]}`,
        effect: { uz: "Asosiy buyruq kompyuter xotirasiga kiritildi.", en: "Primary keyword loaded into memory." },
        renderVisual: () => `<div style="background:#0b0f19; border:1px solid #0284c7; border-radius:10px; padding:24px; text-align:center; color:#38bdf8;">⚙️ Buyruq tanildi va kutmoqda...</div>`
      },
      {
        name: { uz: "3. Mantiq & Ma'lumot Birlashtirildi", en: "3. Data & Logic Injected" },
        code: `// 3-Bosqich: Barcha parametrlar to'liq berildi\n${targetCode}`,
        effect: { uz: "Barcha parametrlar va mantiqiy hisob-kitoblar ulandi.", en: "All parameters connected to memory." },
        renderVisual: () => `<div style="background:#0b0f19; border:1px solid #a855f7; border-radius:10px; padding:24px; text-align:center; color:#c084fc;">⚡ Natija hisoblanmoqda...</div>`
      },
      {
        name: { uz: "4. Jonli Natija & Bajarilish", en: "4. Live Execution" },
        code: targetCode,
        effect: { uz: "Kod to'liq ishga tushdi va kutilgan natija berildi!", en: "Code executed successfully with verified outcome!" },
        renderVisual: () => `<div style="background:rgba(16,185,129,0.1); border:1px solid #10b981; border-radius:10px; padding:24px; text-align:center; color:#4ade80;"><span style="font-size:28px;">✨</span><br/><strong>Muvaffaqiyatli Bajarildi!</strong></div>`
      }
    ]
  };
}

export function openTopicLabModal(lessonId, lesson, state, playSound) {
  playSound?.('click', state.audioEnabled);

  const lab = getTopicLab(lessonId, lesson);
  const isUz = state.lang === 'uz';
  let currentStageIndex = 0;

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'topic-lab-modal';

  function renderContent() {
    const stage = lab.stages[currentStageIndex];

    modal.innerHTML = `
      <div class="modal-card topic-lab-modal-card">
        <div class="topic-lab-header">
          <div class="topic-lab-header-left">
            <span class="topic-lab-icon">🧪</span>
            <div>
              <h3 class="topic-lab-title">${escapeHtml(isUz ? lab.title.uz : lab.title.en)}</h3>
              <p class="topic-lab-subtitle">${escapeHtml(isUz ? lab.desc.uz : lab.desc.en)}</p>
            </div>
          </div>
          <button id="btn-close-topic-lab" class="btn-close-modal" title="Close">✕</button>
        </div>

        <div class="topic-lab-body">
          <div class="lab-stage-slider-wrap">
            <div class="lab-slider-labels">
              ${lab.stages.map((st, i) => `
                <button type="button" class="lab-stage-label-btn ${i === currentStageIndex ? 'active' : ''}" data-stage-idx="${i}">
                  <span class="step-num">${i + 1}</span>
                  <span class="step-txt">${escapeHtml(isUz ? st.name.uz : st.name.en)}</span>
                </button>
              `).join('')}
            </div>

            <div class="lab-slider-track-container">
              <input type="range" id="lab-stage-slider" class="lab-stage-range" min="0" max="${lab.stages.length - 1}" step="1" value="${currentStageIndex}" />
            </div>
          </div>

          <div class="topic-lab-split">
            <div class="topic-lab-preview-pane">
              <div class="topic-lab-pane-title">⚡ ${isUz ? "Jonli Vizual Sahna" : "Live Visual Stage"}</div>
              <div class="topic-lab-scene-container" id="topic-lab-scene">
                ${stage.renderVisual()}
              </div>
              <div class="stage-effect-callout">
                <strong>${isUz ? "Holatga ta'siri:" : "Effect on State:"}</strong>
                <span>${escapeHtml(isUz ? stage.effect.uz : stage.effect.en)}</span>
              </div>
            </div>

            <div class="topic-lab-code-pane">
              <div class="topic-lab-pane-title">💻 ${isUz ? "Ushbu Bosqichdagi Kod" : "Code at this Stage"}</div>
              <pre class="topic-lab-code-block"><code>${escapeHtml(stage.code)}</code></pre>
            </div>
          </div>
        </div>

        <div class="topic-lab-footer">
          <button id="btn-stage-prev" class="btn-modal" ${currentStageIndex === 0 ? 'disabled' : ''} style="background:var(--bg-surface); border:1px solid var(--border-color); color:white;">
            ⬅️ ${isUz ? "Oldingi Bosqich" : "Previous Stage"}
          </button>
          <span style="font-size:13px; font-weight:700; color:var(--text-muted);">
            ${isUz ? "Bosqich" : "Stage"} ${currentStageIndex + 1} / ${lab.stages.length}
          </span>
          <button id="btn-stage-next" class="btn-modal btn-modal-primary" ${currentStageIndex === lab.stages.length - 1 ? 'disabled' : ''}>
            ${isUz ? "Keyingi Bosqich" : "Next Stage"} ➡️
          </button>
        </div>
      </div>
    `;

    attachEvents();
  }

  function attachEvents() {
    modal.querySelector('#btn-close-topic-lab')?.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });

    const slider = modal.querySelector('#lab-stage-slider');
    slider?.addEventListener('input', (e) => {
      currentStageIndex = parseInt(e.target.value, 10);
      playSound?.('click', state.audioEnabled);
      renderContent();
    });

    modal.querySelectorAll('.lab-stage-label-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-stage-idx'), 10);
        currentStageIndex = idx;
        playSound?.('click', state.audioEnabled);
        renderContent();
      });
    });

    modal.querySelector('#btn-stage-prev')?.addEventListener('click', () => {
      if (currentStageIndex > 0) {
        currentStageIndex--;
        playSound?.('click', state.audioEnabled);
        renderContent();
      }
    });

    modal.querySelector('#btn-stage-next')?.addEventListener('click', () => {
      if (currentStageIndex < lab.stages.length - 1) {
        currentStageIndex++;
        playSound?.('click', state.audioEnabled);
        renderContent();
      }
    });
  }

  renderContent();
  document.body.appendChild(modal);
}
