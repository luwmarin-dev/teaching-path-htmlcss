import fs from 'fs';

const htmlContent = `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🦖 Chrome Dino Game — JS Class & Sakrash Mexanikasi (Amerikacha Metodika)</title>
  <style>
    /* ==========================================================================
       1. ASOSIY DIZAYN VA SHIFT
       ========================================================================== */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    }

    body {
      background: #080c14;
      color: #f1f5f9;
      padding: 16px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .container {
      width: 100%;
      max-width: 1150px;
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    /* HEADER */
    header {
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 14px;
      padding: 16px 22px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .header-icon {
      font-size: 34px;
      background: rgba(56, 189, 248, 0.12);
      border: 1px solid rgba(56, 189, 248, 0.3);
      border-radius: 12px;
      width: 52px;
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h1 {
      font-size: 20px;
      font-weight: 800;
      color: #ffffff;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .sub-title {
      font-size: 13px;
      color: #94a3b8;
      margin-top: 2px;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .btn-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
      border: 1px solid transparent;
    }

    .btn-primary {
      background: rgba(56, 189, 248, 0.12);
      border-color: rgba(56, 189, 248, 0.3);
      color: #38bdf8;
    }
    .btn-primary:hover {
      background: rgba(56, 189, 248, 0.22);
      border-color: #38bdf8;
      transform: translateY(-1px);
    }

    .btn-success {
      background: rgba(16, 185, 129, 0.12);
      border-color: rgba(16, 185, 129, 0.3);
      color: #34d399;
    }

    /* STEP PROGRESS BAR */
    .progress-bar-card {
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 12px;
      padding: 12px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .progress-track {
      flex: 1;
      height: 8px;
      background: #1e293b;
      border-radius: 999px;
      overflow: hidden;
      position: relative;
    }

    .progress-fill {
      height: 100%;
      width: 20%;
      background: linear-gradient(90deg, #38bdf8, #10b981);
      border-radius: 999px;
      transition: width 0.4s ease;
    }

    .progress-label {
      font-size: 12px;
      font-weight: 800;
      color: #38bdf8;
      white-space: nowrap;
    }

    /* STEP NAVIGATION PILLS */
    .steps-nav {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      gap: 10px;
    }

    .step-btn {
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 10px;
      padding: 12px 14px;
      text-align: left;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      overflow: hidden;
    }

    .step-btn:hover:not(:disabled) {
      border-color: #38bdf8;
      background: #131d35;
    }

    .step-btn.active {
      border-color: #38bdf8;
      background: rgba(56, 189, 248, 0.1);
      box-shadow: 0 0 16px rgba(56, 189, 248, 0.2);
    }

    .step-btn.unlocked {
      border-color: rgba(16, 185, 129, 0.4);
    }

    .step-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .step-num {
      font-size: 11px;
      font-weight: 800;
      color: #94a3b8;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4px;
    }

    .step-btn.active .step-num {
      color: #38bdf8;
    }

    .step-btn.unlocked .step-num {
      color: #34d399;
    }

    .step-name {
      font-size: 13px;
      font-weight: 700;
      color: #f1f5f9;
    }

    /* ==========================================================================
       CANVAS O'YIN MAYDONI (100% CANVAS, ZERO EXTERNAL ASSETS)
       ========================================================================== */
    .game-arena-card {
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 14px;
      padding: 18px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
    }

    .arena-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
    }

    .score-board {
      display: flex;
      align-items: center;
      gap: 16px;
      font-family: monospace;
      font-size: 15px;
      font-weight: 800;
      letter-spacing: 2px;
    }

    .score-val { color: #ffffff; }
    .high-val { color: #f59e0b; }

    .arena-toggles {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .toggle-pill {
      background: #1e293b;
      border: 1px solid #334155;
      color: #cbd5e1;
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
    }

    .toggle-pill:hover {
      border-color: #38bdf8;
      color: #38bdf8;
    }

    .toggle-pill.active {
      background: rgba(56, 189, 248, 0.15);
      border-color: #38bdf8;
      color: #38bdf8;
    }

    /* THE CANVAS */
    .canvas-wrapper {
      width: 100%;
      height: 220px;
      background: #090d16;
      border: 1px solid #1e293b;
      border-radius: 10px;
      position: relative;
      overflow: hidden;
    }

    #gameCanvas {
      width: 100%;
      height: 100%;
      display: block;
      image-rendering: pixelated;
    }

    /* ARENA BOTTOM CONTROLS */
    .arena-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
    }

    .hint-chip {
      font-size: 12px;
      color: #94a3b8;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .kbd {
      background: #1e293b;
      border: 1px solid #475569;
      color: #f1f5f9;
      border-radius: 4px;
      padding: 2px 7px;
      font-family: monospace;
      font-size: 11px;
    }

    .jump-btn-action {
      background: linear-gradient(135deg, #0284c7, #38bdf8);
      color: #080c14;
      font-weight: 800;
      font-size: 13px;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.15s ease;
      box-shadow: 0 4px 12px rgba(56, 189, 248, 0.3);
    }
    .jump-btn-action:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(56, 189, 248, 0.4);
    }
    .jump-btn-action:active {
      transform: scale(0.96);
    }

    /* ==========================================================================
       SPLIT WORKSPACE: SOCRATIC LESSON & LIVE CODE PLAYGROUND
       ========================================================================== */
    .workspace-split {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
    }

    @media (max-width: 900px) {
      .workspace-split {
        grid-template-columns: 1fr;
      }
    }

    .panel-card {
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 14px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .panel-title {
      font-size: 16px;
      font-weight: 800;
      color: #f8fafc;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #1e293b;
      padding-bottom: 12px;
    }

    /* SOCRATIC EXPLANATION */
    .concept-box {
      font-size: 14px;
      line-height: 1.6;
      color: #cbd5e1;
    }

    .analogy-callout {
      background: rgba(56, 189, 248, 0.08);
      border-left: 4px solid #38bdf8;
      padding: 12px 14px;
      border-radius: 0 8px 8px 0;
      font-size: 13px;
      color: #93c5fd;
      line-height: 1.5;
    }

    /* SOCRATIC QUIZ GATE CARD */
    .quiz-gate-box {
      background: #111c33;
      border: 2px dashed rgba(56, 189, 248, 0.4);
      border-radius: 12px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      transition: all 0.3s ease;
    }

    .quiz-gate-box.unlocked {
      border: 2px solid #10b981;
      background: rgba(16, 185, 129, 0.06);
    }

    .quiz-gate-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .quiz-badge {
      font-size: 11px;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: 6px;
      background: rgba(56, 189, 248, 0.15);
      color: #38bdf8;
    }

    .quiz-gate-box.unlocked .quiz-badge {
      background: rgba(16, 185, 129, 0.15);
      color: #34d399;
    }

    .quiz-question {
      font-size: 14px;
      font-weight: 700;
      color: #ffffff;
      line-height: 1.5;
    }

    .quiz-options {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .quiz-opt-btn {
      background: #1e293b;
      border: 1px solid #334155;
      color: #cbd5e1;
      padding: 10px 14px;
      border-radius: 8px;
      font-size: 13px;
      text-align: left;
      cursor: pointer;
      line-height: 1.4;
      transition: all 0.15s ease;
    }

    .quiz-opt-btn:hover:not(:disabled) {
      border-color: #38bdf8;
      background: #25334d;
      color: #ffffff;
    }

    .quiz-opt-btn.correct {
      background: rgba(16, 185, 129, 0.2) !important;
      border-color: #10b981 !important;
      color: #34d399 !important;
      font-weight: bold;
    }

    .quiz-opt-btn.wrong {
      background: rgba(239, 68, 68, 0.2) !important;
      border-color: #ef4444 !important;
      color: #f87171 !important;
    }

    .quiz-feedback {
      padding: 10px 14px;
      border-radius: 8px;
      font-size: 13px;
      line-height: 1.5;
      display: none;
    }
    .quiz-feedback.success {
      display: block;
      background: rgba(16, 185, 129, 0.12);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #34d399;
    }
    .quiz-feedback.error {
      display: block;
      background: rgba(239, 68, 68, 0.12);
      border: 1px solid rgba(239, 68, 68, 0.3);
      color: #f87171;
    }

    /* CODE LOCK & DISPLAY */
    .unlocked-code-section {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .code-locked-placeholder {
      background: #090d16;
      border: 1px dashed #334155;
      border-radius: 10px;
      padding: 24px;
      text-align: center;
      color: #64748b;
      font-size: 13px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .code-locked-placeholder .lock-icon {
      font-size: 28px;
    }

    /* RIGHT PANEL: LIVE CODE EDITOR & RUNNER */
    .editor-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
      flex: 1;
    }

    .editor-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
    }

    .run-btn {
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      font-weight: 800;
      font-size: 13px;
      border: none;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s ease;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
    }
    .run-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
    }

    .secondary-btn {
      background: #1e293b;
      border: 1px solid #334155;
      color: #cbd5e1;
      padding: 7px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      transition: all 0.15s ease;
    }
    .secondary-btn:hover {
      background: #25334d;
      color: #ffffff;
      border-color: #38bdf8;
    }

    .code-textarea {
      width: 100%;
      height: 280px;
      background: #090d16;
      border: 1px solid #1e293b;
      border-radius: 10px;
      padding: 14px;
      font-family: 'Consolas', 'Courier New', monospace;
      font-size: 13px;
      line-height: 1.5;
      color: #38bdf8;
      resize: vertical;
      outline: none;
      tab-size: 2;
    }
    .code-textarea:focus {
      border-color: #38bdf8;
      box-shadow: 0 0 12px rgba(56, 189, 248, 0.2);
    }

    .virtual-console {
      background: #070a10;
      border: 1px solid #1e293b;
      border-radius: 8px;
      padding: 10px 14px;
      font-family: monospace;
      font-size: 12px;
      color: #a3e635;
      max-height: 100px;
      overflow-y: auto;
    }

    /* MODAL FOR VS CODE TEMPLATE */
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(4px);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 20px;
    }
    .modal-overlay.open {
      display: flex;
    }

    .modal-card {
      background: #0f172a;
      border: 1px solid #1e293b;
      border-radius: 16px;
      width: 100%;
      max-width: 800px;
      max-height: 85vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    }

    .modal-header {
      padding: 16px 20px;
      border-bottom: 1px solid #1e293b;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .modal-body {
      padding: 20px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .template-code-box {
      background: #090d16;
      border: 1px solid #1e293b;
      border-radius: 10px;
      padding: 16px;
      font-family: monospace;
      font-size: 12px;
      color: #93c5fd;
      max-height: 380px;
      overflow-y: auto;
      white-space: pre;
    }
  </style>
</head>
<body>

  <div class="container">
    <!-- HEADER -->
    <header>
      <div class="header-left">
        <div class="header-icon">🦖</div>
        <div>
          <h1>Chrome Dino Game — 1-Dars</h1>
          <div class="sub-title">JavaScript Class & Sakrash Mexanikasi (Sokratik Interaktiv Metodika)</div>
        </div>
      </div>
      <div class="header-right">
        <button class="btn-badge btn-primary" onclick="openVsCodeModal()">
          <span>📥 VS Code Uchun To'liq Fayl</span>
        </button>
        <span class="btn-badge btn-success">✅ 100% Oflayn Canvas</span>
      </div>
    </header>

    <!-- STEP PROGRESS BAR -->
    <div class="progress-bar-card">
      <div class="progress-track">
        <div class="progress-fill" id="progress-fill"></div>
      </div>
      <div class="progress-label" id="progress-label">Bosqich: 1 / 5 (20%)</div>
    </div>

    <!-- STEP NAVIGATION PILLS -->
    <nav class="steps-nav">
      <button class="step-btn active" id="step-nav-1" onclick="switchStep(1)">
        <div class="step-num"><span>1-QADAM</span> <span class="lock-status" id="lock-icon-1">🔓</span></div>
        <div class="step-name">Bo'sh Class (Skelet)</div>
      </button>

      <button class="step-btn" id="step-nav-2" disabled onclick="switchStep(2)">
        <div class="step-num"><span>2-QADAM</span> <span class="lock-status" id="lock-icon-2">🔒</span></div>
        <div class="step-name">O'lchamlar & Karobka</div>
      </button>

      <button class="step-btn" id="step-nav-3" disabled onclick="switchStep(3)">
        <div class="step-num"><span>3-QADAM</span> <span class="lock-status" id="lock-icon-3">🔒</span></div>
        <div class="step-name">Klaviaturani Tinglash</div>
      </button>

      <button class="step-btn" id="step-nav-4" disabled onclick="switchStep(4)">
        <div class="step-num"><span>4-QADAM</span> <span class="lock-status" id="lock-icon-4">🔒</span></div>
        <div class="step-name">jump() & Gravitatsiya</div>
      </button>

      <button class="step-btn" id="step-nav-5" disabled onclick="switchStep(5)">
        <div class="step-num"><span>5-QADAM</span> <span class="lock-status" id="lock-icon-5">🔒</span></div>
        <div class="step-name">To'liq O'yin & To'siqlar</div>
      </button>
    </nav>

    <!-- LIVE CANVAS GAME ARENA -->
    <section class="game-arena-card">
      <div class="arena-header">
        <div class="score-board">
          <span>OCHKO: <span id="current-score" class="score-val">00000</span></span>
          <span>REKORD: <span id="high-score" class="high-val">00000</span></span>
        </div>

        <div class="arena-toggles">
          <button class="toggle-pill active" id="btn-mode-pixel" onclick="setVisualMode('pixel')">
            <span>🦖 Haqiqiy Dinozavr (Canvas)</span>
          </button>
          <button class="toggle-pill" id="btn-mode-box" onclick="setVisualMode('box')">
            <span>📦 Hitbox Karobka</span>
          </button>
        </div>
      </div>

      <div class="canvas-wrapper">
        <canvas id="gameCanvas" width="900" height="220"></canvas>
      </div>

      <div class="arena-footer">
        <div class="hint-chip">
          <span>Boshqaruv:</span>
          <span class="kbd">Space</span>
          <span>yoki</span>
          <span class="kbd">⬆️ Yuqoriga</span>
          <span>tugmasi</span>
        </div>

        <button class="jump-btn-action" onclick="handleJumpAction()">
          <span>🚀 SAKRASH (JUMP)</span>
        </button>
      </div>
    </section>

    <!-- SPLIT WORKSPACE: SOCRATIC LESSON & LIVE CODE PLAYGROUND -->
    <div class="workspace-split">
      <!-- LEFT: SOCRATIC STEP EXPLANATION & QUIZ GATE -->
      <div class="panel-card">
        <div class="panel-title">
          <span id="lesson-step-badge">🧩 1-Qadam: Bo'sh Class (Skelet)</span>
          <span style="font-size: 12px; color: #38bdf8;" id="lesson-status-tag">Savolga javob bering</span>
        </div>

        <div class="concept-box" id="lesson-concept-text">
          O'quvchiga avval hech qanday murakkabliksiz, faqat sinf nomini ochish o'rgatiladi. Ichida na konstruktor, na metod bor. Faqat sinfning qobig'i (skeleti) ochiladi va undan ilk obyekt olinadi.
        </div>

        <div class="analogy-callout" id="lesson-analogy-text">
          💡 Hayotiy O'xshatish: Bino qurishdan oldin uning chizmasi chiziladi. Class — bu chizma, new Dino() esa shu chizma asosida qurilgan bino!
        </div>

        <!-- SOCRATIC QUIZ GATE -->
        <div class="quiz-gate-box" id="quiz-gate-box">
          <div class="quiz-gate-header">
            <span class="quiz-badge" id="quiz-gate-badge">❓ SOKRATIK SAVOL (Kodni ochish kaliti)</span>
          </div>
          <div class="quiz-question" id="quiz-question-text">
            Biz o'yinda dinozavrni nima uchun 'class Dino' orqali yaratishimiz kerak?
          </div>
          <div class="quiz-options" id="quiz-options-container">
            <!-- Injected dynamically -->
          </div>
          <div class="quiz-feedback" id="quiz-feedback-box"></div>
        </div>

        <!-- UNLOCKED CODE DISPLAY -->
        <div class="unlocked-code-section" id="unlocked-code-section">
          <div class="code-locked-placeholder" id="code-locked-placeholder">
            <div class="lock-icon">🔒</div>
            <div><strong>KOD QULFLANGAN</strong></div>
            <div>Ushbu bosqich kodini ko'rish uchun yuqoridagi savolga to'g'ri javob bering!</div>
          </div>
        </div>
      </div>

      <!-- RIGHT: LIVE JS CODE EDITOR & RUNNER -->
      <div class="panel-card">
        <div class="panel-title">
          <span>⚡ Interaktiv Kod Maydoni (Playground)</span>
          <button class="run-btn" onclick="executeStudentCode()">
            <span>▶ Kodni Ishga Tushirish</span>
          </button>
        </div>

        <div class="concept-box">
          Quyidagi oynada o'zingiz kodni tahrirlashingiz, dinozavrning sakrash kuchini (<code>jumpForce</code>), gravitatsiyasini yoki o'lchamlarini o'zgartirib darhol sinab ko'rishingiz mumkin!
        </div>

        <div class="editor-wrapper">
          <div class="editor-toolbar">
            <span style="font-size: 11px; color: #94a3b8;">JavaScript (ES6 Class)</span>
            <div style="display: flex; gap: 8px;">
              <button class="secondary-btn" onclick="resetEditorToDefault()">🔄 Qaytarish</button>
              <button class="secondary-btn" onclick="copyEditorCode()">📋 Nusxa Olish</button>
            </div>
          </div>

          <textarea class="code-textarea" id="student-code-editor" spellcheck="false"></textarea>

          <div style="font-size: 11px; font-weight: 700; color: #94a3b8; margin-top: 4px;">KONSOL NATIJASI:</div>
          <div class="virtual-console" id="virtual-console">▶ Tizim tayyor. Kodni o'zgartirib "Kodni Ishga Tushirish" tugmasini bosing!</div>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL: VS CODE COMPLETE TEMPLATE -->
  <div class="modal-overlay" id="vscode-modal">
    <div class="modal-card">
      <div class="modal-header">
        <h3 style="font-size: 16px; font-weight: 800; color: white;">📥 VS Code Uchun To'liq Tayyor Dino Game (HTML+CSS+JS)</h3>
        <button class="secondary-btn" onclick="closeVsCodeModal()">✕</button>
      </div>
      <div class="modal-body">
        <p style="font-size: 13px; color: #cbd5e1; line-height: 1.5;">
          Ushbu kodni kompyuteringizda VS Code'da <code>dino.html</code> nomli fayl ochib ichiga joylang va brauzeringizda 2 marta bosib oching. O'yin hech qanday rasm yoki kutubxonasiz 100% mustaqil ishlaydi!
        </p>
        <div style="display: flex; gap: 10px;">
          <button class="run-btn" onclick="copyTemplateCode()">📋 Nusxa Olish</button>
          <button class="secondary-btn" onclick="downloadTemplateFile()">💾 dino.html Yuklab Olish</button>
        </div>
        <pre class="template-code-box" id="template-code-box"></pre>
      </div>
    </div>
  </div>

  <script>
    /* ==========================================================================
       1. STANDALONE VS CODE FILE CODE (O'quvchi uchun 100% mustaqil fayl)
       ========================================================================== */
    const STANDALONE_HTML_TEMPLATE = \`<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>🦖 Chrome Dino Game — Mening Ilk JS O'yinim</title>
  <style>
    body {
      background: #0b0f19;
      color: #ffffff;
      font-family: system-ui, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px;
    }
    h1 { margin-bottom: 10px; color: #38bdf8; }
    .score-board { font-size: 18px; font-weight: bold; margin-bottom: 12px; font-family: monospace; }
    canvas {
      background: #0f172a;
      border: 2px solid #1e293b;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    .hint { margin-top: 15px; color: #94a3b8; font-size: 14px; }
  </style>
</head>
<body>
  <h1>🦖 Chrome Dino Game</h1>
  <div class="score-board">OCHKO: <span id="score">00000</span></div>
  <canvas id="gameCanvas" width="800" height="200"></canvas>
  <div class="hint">Boshqaruv: <b>Space</b> yoki <b>⬆️ Strelka</b> tugmasi</div>

  <script>
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const scoreEl = document.getElementById('score');

    // 1-Qadam: Dinozavr Klassi
    class Dino {
      constructor() {
        this.width = 44;
        this.height = 48;
        this.x = 50;
        this.y = 0;
        this.velocityY = 0;
        this.isJumping = false;
        this.jumpForce = 12;
        this.gravity = 0.6;
      }

      jump() {
        if (!this.isJumping && this.y === 0) {
          this.isJumping = true;
          this.velocityY = this.jumpForce;
        }
      }

      update() {
        if (this.isJumping) {
          this.y += this.velocityY;
          this.velocityY -= this.gravity;
          if (this.y <= 0) {
            this.y = 0;
            this.isJumping = false;
            this.velocityY = 0;
          }
        }
      }

      draw(ctx) {
        const renderY = canvas.height - 30 - this.height - this.y;
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(this.x, renderY, this.width, this.height);
        // Ko'z
        ctx.fillStyle = '#0b0f19';
        ctx.fillRect(this.x + 30, renderY + 8, 6, 6);
      }
    }

    const dino = new Dino();
    let cactusX = 800;
    let score = 0;
    let isGameOver = false;

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        if (isGameOver) {
          isGameOver = false;
          cactusX = 800;
          score = 0;
          loop();
        } else {
          dino.jump();
        }
      }
    });

    function loop() {
      if (isGameOver) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Yer
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 30);
      ctx.lineTo(canvas.width, canvas.height - 30);
      ctx.stroke();

      // Dinozavr
      dino.update();
      dino.draw(ctx);

      // Kaktus
      cactusX -= 6;
      if (cactusX < -30) {
        cactusX = 800;
        score += 10;
        scoreEl.textContent = String(score).padStart(5, '0');
      }
      ctx.fillStyle = '#10b981';
      ctx.fillRect(cactusX, canvas.height - 30 - 45, 24, 45);

      // To'qnashuv tekshiruvi (AABB)
      const dinoY = canvas.height - 30 - dino.height - dino.y;
      const cactusY = canvas.height - 30 - 45;
      if (
        dino.x < cactusX + 24 &&
        dino.x + dino.width > cactusX &&
        dinoY + dino.height > cactusY
      ) {
        isGameOver = true;
        ctx.fillStyle = '#ef4444';
        ctx.font = '24px sans-serif';
        ctx.fillText('💥 O\\'YIN TUGADI! Qaytadan: Space', 220, 100);
        return;
      }

      requestAnimationFrame(loop);
    }

    loop();
  <\\/script>
</body>
</html>\`;

    /* ==========================================================================
       2. 5 TA BOSQICHNING MAZMUNI VA SOKRATIK SAVOLLARI
       ========================================================================== */
    const STEPS_DATA = {
      1: {
        num: 1,
        title: "Bo'sh Class (Skelet)",
        concept: "O'quvchiga avval hech qanday murakkabliksiz, faqat sinf nomini ochish o'rgatiladi. Ichida na konstruktor, na metod bor. Faqat sinfning qobig'i (skeleti) ochiladi va undan ilk obyekt olinadi.",
        analogy: "💡 Hayotiy O'xshatish: Bino qurishdan oldin uning loyiha chizmasi chiziladi. 'class Dino' — bu chizma, 'new Dino()' esa shu chizma asosida qurilgan jonli bino!",
        quiz: {
          question: "Biz o'yinda dinozavrni nima uchun 'class Dino' orqali yaratishimiz kerak?",
          options: [
            {
              text: "A) 'class' — bu loyiha qolipi (chizma). U orqali xohlagancha dinozavr nusxalarini ('new Dino()') yaratish, ularning xususiyatlari va harakatlarini bitta tartibli tizimga birlashtirish mumkin!",
              correct: true,
              feedback: "🎉 Barakalla! Aynan to'g'ri! 'class' bu qolip, 'new Dino()' esa shu qolip asosida yasalgan haqiqiy jonli dinozavr!"
            },
            {
              text: "B) 'class' so'zi yozilmasa o'yinda ranglar ko'rinmay qoladi.",
              correct: false,
              feedback: "❌ Noto'g'ri: Ranglar CSS va Canvas buyruqlariga bog'liq. Class esa ma'lumotlar va xatti-harakatlar tuzilmasini yaratadi."
            },
            {
              text: "C) Brauzer faqat 'class' so'zini taniydi, boshqa kodlarni tushunmaydi.",
              correct: false,
              feedback: "❌ Noto'g'ri: JavaScript juda ko'p tushunchalarni biladi, lekin OOP (obyektlar bilan ishlash) uchun class eng zamonaviy va tartibli usuldir."
            }
          ]
        },
        code: \`// 1-Qadam: Dinozavr uchun poydevor (bo'sh class)
class Dino {
  // Hozircha ichi bo'sh, bu shunchaki qolip
}

// Sinfdan foydalanib ilk obyektni yaratamiz:
const dino = new Dino();

console.log('🎉 Ilk dinozavr obyekti yaratildi:', dino);\`,
        editableCode: \`class Dino {
  // 1-Qadam: Bo'sh sinf skeleti
}

const dino = new Dino();
console.log('Dinozavr muvaffaqiyatli yaratildi:', dino);\`
      },

      2: {
        num: 2,
        title: "O'lchamlar & Karobka (Hitbox)",
        concept: "Barcha 2D va 3D o'yinlarda (Mario, GTA, Sonic) avval boshidanoq murakkab rasm chizilmaydi! Dastlab personaj oddiy to'rtburchak (hitbox / karobka) sifatida yaratiladi. Konstruktor orqali eni, bo'yi va koordinatalari beriladi.",
        analogy: "💡 Dasturchilar Siri: Har qanday chiroyli qahramonning tagida ko'rinmas to'rtburchak 'karobka' yuradi. To'qnashuvlar aynan shu karobka bo'yicha aniqlanadi!",
        quiz: {
          question: "Dinozavrning eni (width), bo'yi (height) va boshlang'ich o'rnini (x, y) qayerda e'lon qilamiz?",
          options: [
            {
              text: "A) 'constructor()' ichida 'this' so'zi orqali! Chunki yangi obyekt yaratilgan zahoti konstruktor ishga tushib, unga boshlang'ich xususiyatlarni biriktiradi.",
              correct: true,
              feedback: "🎉 Barakalla! Aynan to'g'ri! 'constructor()' — bu har bir yangi dinozavr tug'ilganda unga bo'y, en va koordinatalarni beruvchi markazdir!"
            },
            {
              text: "B) CSS faylning eng pastki qatorida.",
              correct: false,
              feedback: "❌ Noto'g'ri: CSS dizayn uchun xizmat qiladi, lekin o'yin mexanikasi va uning xotiradagi o'lchamlari JavaScript klassi ichida belgilanadi."
            },
            {
              text: "C) Math.random() funksiyasi ichida har gal yangitdan.",
              correct: false,
              feedback: "❌ Noto'g'ri: Boshlang'ich parametrlar tasodifiy emas, aniq va muqim bo'lishi kerak."
            }
          ]
        },
        code: \`// 2-Qadam: O'lchamlar va boshlang'ich xususiyatlar
class Dino {
  constructor() {
    this.width = 50;       // Eni (kengligi) 50px
    this.height = 50;      // Bo'yi (balandligi) 50px
    this.x = 60;           // Chapdan boshlang'ich masofasi
    this.y = 0;            // Yerdan balandligi (0 = yerda)
    this.isJumping = false;// Hozircha sakramayapti
  }
}

const dino = new Dino();
console.log('Hitbox parametrlari:', dino.width, 'x', dino.height);\`,
        editableCode: \`class Dino {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = 60;
    this.y = 0;
    this.isJumping = false;
  }
}

const dino = new Dino();
console.log('Dinozavr karobkasi tayyor:', dino);\`
      },

      3: {
        num: 3,
        title: "Klaviaturani Tinglash (EventListener)",
        concept: "Dinozavr o'z-o'zidan harakatlanmaydi. Foydalanuvchi klaviaturada 'Space' (probel) yoki yuqoriga strelkani bosganda uni aniqlash va 'jump()' metodini chaqirish kerak.",
        analogy: "💡 Hayotiy O'xshatish: Televizor pultidagi tugmani bossangiz, televizor kanali o'zgaradi. 'addEventListener' — bu pult buyruqlarini kutib turuvchi sensor!",
        quiz: {
          question: "O'yinchi klaviaturada probel (Space) bosganini dastur qanday biladi va dinozavr qanday sakraydi?",
          options: [
            {
              text: "A) 'window.addEventListener(\\'keydown\\', ...)' orqali 'Space' tugmasi tekshiriladi va 'dino.jump()' metodi chaqiriladi!",
              correct: true,
              feedback: "🎉 Ajoyib! Aynan to'g'ri! 'keydown' hodisasi har bir tugma bosilishini aniqlaydi va dinozavrga sakrash buyrug'ini uzatadi!"
            },
            {
              text: "B) Kompyuter mikrofoni orqali klaviatura taraqlashini eshitadi.",
              correct: false,
              feedback: "❌ Noto'g'ri: Dastur tovush emas, operatsion tizim bergan raqamli hodisani (key event) o'qiydi."
            },
            {
              text: "C) HTML '<body>' tegi ichidagi oddiy matn orqali.",
              correct: false,
              feedback: "❌ Noto'g'ri: Matn faqat ko'rinish beradi, interaktiv harakat uchun esa hodisa tinglovchisi (event listener) shart."
            }
          ]
        },
        code: \`// 3-Qadam: jump() metodi va hodisalarni tinglash
class Dino {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = 60;
    this.y = 0;
    this.isJumping = false;
  }

  jump() {
    // Agar dinozavr allaqachon havoda bo'lmasa, sakraydi:
    if (!this.isJumping) {
      this.isJumping = true;
      console.log('🚀 SAKRASH ISHGA TUSHDI!');
    }
  }
}

const dino = new Dino();

// Klaviaturani tinglaymiz:
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space' || e.code === 'ArrowUp') {
    dino.jump();
  }
});\`,
        editableCode: \`class Dino {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = 60;
    this.y = 0;
    this.isJumping = false;
  }

  jump() {
    if (!this.isJumping) {
      this.isJumping = true;
      console.log('🚀 Dinozavr sakradi!');
    }
  }
}

const dino = new Dino();
dino.jump();\`
      },

      4: {
        num: 4,
        title: "jump() & Gravitatsiya (Og'irlik Kuchi)",
        concept: "Dinozavr havoga sakragach, koinotga uchib ketmasligi kerak! Real hayotdagi kabi Yerning tortish kuchi (gravitatsiya) har bir kadrda uni pastga tortib, yana yer sathiga (y = 0) qaytarishi shart.",
        analogy: "💡 Fizika Qonuni: To'pni osmonga otsangiz, boshida tez uchadi, eng tepada to'xtaydi va tezlashib pastga tushadi. Biz ham kodda aynan shu formulani yozamiz!",
        quiz: {
          question: "Dinozavr havoga sakragach, doim havoda qolib ketmasdan, yerga qaytib tushishi uchun dasturda nima qilishimiz kerak?",
          options: [
            {
              text: "A) Sakrash tezligi ('velocityY') ga har kadrda gravitatsiya ayirib boriladi va yerdan pastga tushmasligi uchun 'y <= 0' bo'lganda to'xtatiladi!",
              correct: true,
              feedback: "🎉 Qoyilmaqom! Aynan shunday! Bu har qanday professional o'yindagi (Mario, Sonic, Flappy Bird) haqiqiy fizik harakat formulasidir!"
            },
            {
              text: "B) Dinozavr charchab o'zi yerga tushadi.",
              correct: false,
              feedback: "❌ Noto'g'ri: Kompyuterda o'z-o'zidan hech narsa bo'lmaydi, harakatni biz formula bilan yozishimiz shart."
            },
            {
              text: "C) 'setTimeout(1000)' bilan uni to'satdan yerga tashlab qo'yish kerak.",
              correct: false,
              feedback: "❌ Noto'g'ri: 'setTimeout' sakrashni qotirib, uzuk-yuluq qiladi. Mayin harakat uchun har kadrda tezlik va gravitatsiya hisoblanadi."
            }
          ]
        },
        code: \`// 4-Qadam: Gravitatsiya va fizika integratsiyasi
class Dino {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = 60;
    this.y = 0;
    this.isJumping = false;
    this.velocityY = 0;
    this.jumpForce = 12; // Sakrash kuchi (impuls)
    this.gravity = 0.6;   // Tortish kuchi (har kadrda ayiriladi)
  }

  jump() {
    if (!this.isJumping && this.y === 0) {
      this.isJumping = true;
      this.velocityY = this.jumpForce;
    }
  }

  update() {
    if (this.isJumping) {
      this.y += this.velocityY;
      this.velocityY -= this.gravity; // Gravitatsiya pastga tortadi

      // Yerga yetib kelganda to'xtatish:
      if (this.y <= 0) {
        this.y = 0;
        this.isJumping = false;
        this.velocityY = 0;
      }
    }
  }
}\`,
        editableCode: \`class Dino {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = 60;
    this.y = 0;
    this.isJumping = false;
    this.velocityY = 0;
    this.jumpForce = 14; // Sakrash kuchini o'zgartirib ko'ring!
    this.gravity = 0.6;   // Gravitatsiyani o'zgartirib ko'ring!
  }

  jump() {
    if (!this.isJumping && this.y === 0) {
      this.isJumping = true;
      this.velocityY = this.jumpForce;
    }
  }

  update() {
    if (this.isJumping) {
      this.y += this.velocityY;
      this.velocityY -= this.gravity;
      if (this.y <= 0) {
        this.y = 0;
        this.isJumping = false;
        this.velocityY = 0;
      }
    }
  }
}

const dino = new Dino();
console.log('Fizika modeli sozlandi:', dino);\`
      },

      5: {
        num: 5,
        title: "To'liq O'yin & To'siqlar (Hitbox To'qnashuvi)",
        concept: "Endi barcha qismlarni birlashtiramiz! 'requestAnimationFrame' orqali o'yin sekundiga 60 marta yangilanadi. Kaktuslar o'ngdan chapga uchadi va har kadrda dinozavr to'rtburchagi kaktus to'rtburchagiga tegib ketgan-ketmagani (AABB Collision) hisoblanadi.",
        analogy: "💡 Kino Tasmasi: Sekundiga 60 ta kadr tezlikda chizilsa, ko'zimiz uni silliq jonli harakat deb ko'radi. Bizning o'yinimiz ham sekundiga 60 marta chiziladi!",
        quiz: {
          question: "O'yinda to'siqlar qanday harakatlanadi va dinozavr unga urilgani qanday tekshiriladi?",
          options: [
            {
              text: "A) 'requestAnimationFrame' ichida kaktusning X koordinatasi doimiy kamaytiriladi (chapga suriladi) va ikkala to'rtburchak (hitbox) ustma-ust tushganida to'qnashuv qayd etiladi!",
              correct: true,
              feedback: "🎉 MUKAMMAL! Siz to'liq o'yin mexanikasini o'zlashtirdingiz va haqiqiy o'yin dasturchisi bo'ldingiz!"
            },
            {
              text: "B) Kaktus o'rnida qimirlamay turadi, butun o'yin ekrani aylanadi.",
              correct: false,
              feedback: "❌ Noto'g'ri: Endless runner o'yinlarida obyektlar qahramon tomon yugurib keladi."
            },
            {
              text: "C) Faqatgina tovush balandligiga qarab tekshiriladi.",
              correct: false,
              feedback: "❌ Noto'g'ri: To'qnashuv geometrik koordinatalar (AABB) orqali hisoblanadi."
            }
          ]
        },
        code: \`// 5-Qadam: To'liq o'yin sikli va to'qnashuv (AABB)
class Dino {
  constructor() {
    this.width = 44;
    this.height = 48;
    this.x = 60;
    this.y = 0;
    this.velocityY = 0;
    this.isJumping = false;
    this.jumpForce = 12;
    this.gravity = 0.6;
  }

  jump() {
    if (!this.isJumping && this.y === 0) {
      this.isJumping = true;
      this.velocityY = this.jumpForce;
    }
  }

  update() {
    if (this.isJumping) {
      this.y += this.velocityY;
      this.velocityY -= this.gravity;
      if (this.y <= 0) {
        this.y = 0;
        this.isJumping = false;
        this.velocityY = 0;
      }
    }
  }
}

// To'qnashuv formulasini tekshirish (AABB):
function checkCollision(dino, dinoY, cactusX, cactusY, cactusW, cactusH) {
  return (
    dino.x < cactusX + cactusW &&
    dino.x + dino.width > cactusX &&
    dinoY + dino.height > cactusY
  );
}\`,
        editableCode: \`// Barcha 5 ta qadam birlashgan to'liq dastur:
class Dino {
  constructor() {
    this.width = 44;
    this.height = 48;
    this.x = 60;
    this.y = 0;
    this.velocityY = 0;
    this.isJumping = false;
    this.jumpForce = 12;
    this.gravity = 0.6;
  }

  jump() {
    if (!this.isJumping && this.y === 0) {
      this.isJumping = true;
      this.velocityY = this.jumpForce;
      console.log('Dinozavr sakradi!');
    }
  }

  update() {
    if (this.isJumping) {
      this.y += this.velocityY;
      this.velocityY -= this.gravity;
      if (this.y <= 0) {
        this.y = 0;
        this.isJumping = false;
        this.velocityY = 0;
      }
    }
  }
}

const dino = new Dino();
console.log('To\\'liq o\\'yin klassi ishga tayyor!');\`
      }
    };

    /* ==========================================================================
       3. INTERAKTIV O'QITISH STATE & SOKRATIK GATE CONTROLLER
       ========================================================================== */
    let currentStep = 1;
    const unlockedSteps = { 1: false, 2: false, 3: false, 4: false, 5: false };

    function updateProgressUI() {
      let count = 0;
      for (let s = 1; s <= 5; s++) {
        if (unlockedSteps[s]) count++;
      }
      const pct = Math.max(20, (count / 5) * 100);
      document.getElementById('progress-fill').style.width = pct + '%';
      document.getElementById('progress-label').textContent = \`O'zlashtirildi: \${count} / 5 (\${Math.round(pct)}%)\`;

      // Update step nav buttons
      for (let s = 1; s <= 5; s++) {
        const btn = document.getElementById('step-nav-' + s);
        const lockIcon = document.getElementById('lock-icon-' + s);
        if (s === 1 || unlockedSteps[s - 1]) {
          btn.disabled = false;
        } else {
          btn.disabled = true;
        }

        if (unlockedSteps[s]) {
          btn.classList.add('unlocked');
          lockIcon.textContent = '✅';
        } else {
          btn.classList.remove('unlocked');
          lockIcon.textContent = s === 1 || unlockedSteps[s - 1] ? '🔓' : '🔒';
        }
        btn.classList.toggle('active', s === currentStep);
      }
    }

    function switchStep(stepNum) {
      currentStep = stepNum;
      updateProgressUI();

      const data = STEPS_DATA[stepNum];
      document.getElementById('lesson-step-badge').textContent = \`🧩 \${stepNum}-Qadam: \${data.title}\`;
      document.getElementById('lesson-concept-text').textContent = data.concept;
      document.getElementById('lesson-analogy-text').textContent = data.analogy;

      // Quiz Gate
      const gateBox = document.getElementById('quiz-gate-box');
      const badge = document.getElementById('quiz-gate-badge');
      const qText = document.getElementById('quiz-question-text');
      const optsContainer = document.getElementById('quiz-options-container');
      const fbBox = document.getElementById('quiz-feedback-box');
      const statusTag = document.getElementById('lesson-status-tag');

      qText.textContent = data.quiz.question;
      fbBox.className = 'quiz-feedback';
      fbBox.style.display = 'none';
      fbBox.textContent = '';

      optsContainer.innerHTML = '';
      data.quiz.options.forEach((opt, idx) => {
        const b = document.createElement('button');
        b.className = 'quiz-opt-btn';
        if (unlockedSteps[stepNum] && opt.correct) {
          b.classList.add('correct');
        }
        b.innerHTML = opt.text;
        b.onclick = () => handleQuizClick(stepNum, idx);
        optsContainer.appendChild(b);
      });

      if (unlockedSteps[stepNum]) {
        gateBox.classList.add('unlocked');
        badge.textContent = '✅ MANTIQ O\\'ZLASHTIRILDI';
        statusTag.textContent = 'Kod ochiq';
        statusTag.style.color = '#34d399';
        showUnlockedCode(data.code);
      } else {
        gateBox.classList.remove('unlocked');
        badge.textContent = '❓ SOKRATIK SAVOL (Kodni ochish kaliti)';
        statusTag.textContent = 'Savolga javob bering';
        statusTag.style.color = '#38bdf8';
        showLockedCodePlaceholder();
      }

      // Update right editor
      document.getElementById('student-code-editor').value = data.editableCode;
      appendConsoleLog(\`▶ \${stepNum}-qadam yuklandi: \${data.title}\`);
    }

    function handleQuizClick(stepNum, optIdx) {
      const data = STEPS_DATA[stepNum];
      const opt = data.quiz.options[optIdx];
      const fbBox = document.getElementById('quiz-feedback-box');
      const opts = document.querySelectorAll('.quiz-opt-btn');

      if (opt.correct) {
        opts.forEach(b => b.classList.remove('wrong'));
        opts[optIdx].classList.add('correct');
        fbBox.className = 'quiz-feedback success';
        fbBox.style.display = 'block';
        fbBox.textContent = opt.feedback;
        playAudioChime(true);

        unlockedSteps[stepNum] = true;
        updateProgressUI();

        const gateBox = document.getElementById('quiz-gate-box');
        gateBox.classList.add('unlocked');
        document.getElementById('quiz-gate-badge').textContent = '✅ MANTIQ O\\'ZLASHTIRILDI';
        document.getElementById('lesson-status-tag').textContent = 'Kod ochildi!';
        document.getElementById('lesson-status-tag').style.color = '#34d399';

        showUnlockedCode(data.code);
        appendConsoleLog(\`🎉 Barakalla! \${stepNum}-qadam kodi muvaffaqiyatli ochildi!\`);

        // If next step exists, enable it
        if (stepNum < 5) {
          document.getElementById('step-nav-' + (stepNum + 1)).disabled = false;
        }
      } else {
        opts[optIdx].classList.add('wrong');
        fbBox.className = 'quiz-feedback error';
        fbBox.style.display = 'block';
        fbBox.textContent = opt.feedback;
        playAudioChime(false);
      }
    }

    function showLockedCodePlaceholder() {
      const container = document.getElementById('unlocked-code-section');
      container.innerHTML = \`
        <div class="code-locked-placeholder" id="code-locked-placeholder">
          <div class="lock-icon">🔒</div>
          <div><strong>KOD QULFLANGAN</strong></div>
          <div>Ushbu bosqich kodini ko'rish uchun yuqoridagi savolga to'g'ri javob bering!</div>
        </div>
      \`;
    }

    function showUnlockedCode(codeString) {
      const container = document.getElementById('unlocked-code-section');
      container.innerHTML = \`
        <div style="background: #090d16; border: 1px solid #1e293b; border-radius: 10px; overflow: hidden;">
          <div style="background: #111827; padding: 8px 14px; font-size: 11px; font-weight: 800; color: #34d399; display: flex; justify-content: space-between; align-items: center;">
            <span>🔓 OCHILGAN KOD (\${currentStep}-QADAM)</span>
            <button class="secondary-btn" style="padding: 3px 8px; font-size: 11px;" onclick="copyUnlockedCodeText()">📋 Nusxa</button>
          </div>
          <pre id="raw-unlocked-code" style="padding: 14px; font-family: monospace; font-size: 13px; color: #38bdf8; overflow-x: auto; line-height: 1.5; white-space: pre;">\${escapeHtml(codeString)}</pre>
        </div>
      \`;
    }

    function escapeHtml(str) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function copyUnlockedCodeText() {
      const code = document.getElementById('raw-unlocked-code')?.textContent || '';
      navigator.clipboard.writeText(code);
      appendConsoleLog('📋 Ochilgan kod nusxalandi!');
    }

    function copyEditorCode() {
      const code = document.getElementById('student-code-editor').value;
      navigator.clipboard.writeText(code);
      appendConsoleLog('📋 Muharrirdagi kod nusxalandi!');
    }

    function resetEditorToDefault() {
      const data = STEPS_DATA[currentStep];
      document.getElementById('student-code-editor').value = data.editableCode;
      appendConsoleLog('🔄 Kod standart holatga qaytarildi.');
    }

    function appendConsoleLog(msg) {
      const el = document.getElementById('virtual-console');
      el.textContent = msg;
    }

    function executeStudentCode() {
      const code = document.getElementById('student-code-editor').value;
      try {
        // Safe evaluation to extract variables or classes
        const fn = new Function(code + '; return typeof Dino !== "undefined" ? Dino : null;');
        const CustomDino = fn();
        if (CustomDino) {
          const testInstance = new CustomDino();
          if (typeof testInstance.jumpForce !== 'undefined') {
            liveDino.jumpForce = Number(testInstance.jumpForce) || 12;
          }
          if (typeof testInstance.gravity !== 'undefined') {
            liveDino.gravity = Number(testInstance.gravity) || 0.6;
          }
          if (typeof testInstance.width !== 'undefined') {
            liveDino.width = Number(testInstance.width) || 44;
          }
          if (typeof testInstance.height !== 'undefined') {
            liveDino.height = Number(testInstance.height) || 48;
          }
          appendConsoleLog(\`✅ Kod muvaffaqiyatli ishga tushdi! jumpForce: \${liveDino.jumpForce}, gravity: \${liveDino.gravity}\`);
          playAudioChime(true);
        } else {
          appendConsoleLog('✅ Kod bajarildi!');
        }
      } catch (err) {
        appendConsoleLog('⚠️ Xatolik: ' + err.message);
        playAudioChime(false);
      }
    }

    /* ==========================================================================
       4. AUDIO CHIME (100% WEB AUDIO API, NO AUDIO FILES)
       ========================================================================== */
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    function playAudioChime(isSuccess) {
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        if (isSuccess) {
          osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
          osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5
          gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.2);
        } else {
          osc.frequency.setValueAtTime(220, audioCtx.currentTime);
          osc.frequency.setValueAtTime(160, audioCtx.currentTime + 0.1);
          gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.25);
        }
      } catch (_) {}
    }

    function playJumpAudio() {
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.frequency.setValueAtTime(320, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(640, audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.12);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.12);
      } catch (_) {}
    }

    /* ==========================================================================
       5. 100% CANVAS 2D PIXEL ART DINO GAME ENGINE (ZERO EXTERNAL ASSETS)
       ========================================================================== */
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    let visualMode = 'pixel'; // 'pixel' or 'box'
    function setVisualMode(mode) {
      visualMode = mode;
      document.getElementById('btn-mode-pixel').classList.toggle('active', mode === 'pixel');
      document.getElementById('btn-mode-box').classList.toggle('active', mode === 'box');
      appendConsoleLog(\`🎮 Rejim almashtirildi: \${mode === 'pixel' ? 'Haqiqiy Dinozavr (Pixel Art)' : 'Hitbox Karobka'}\`);
    }

    class GameDino {
      constructor() {
        this.width = 44;
        this.height = 48;
        this.x = 70;
        this.y = 0;
        this.velocityY = 0;
        this.isJumping = false;
        this.jumpForce = 12;
        this.gravity = 0.6;
        this.legStep = 0;
      }

      jump() {
        if (!this.isJumping && this.y === 0) {
          this.isJumping = true;
          this.velocityY = this.jumpForce;
          playJumpAudio();
        }
      }

      update() {
        if (this.isJumping) {
          this.y += this.velocityY;
          this.velocityY -= this.gravity;
          if (this.y <= 0) {
            this.y = 0;
            this.isJumping = false;
            this.velocityY = 0;
          }
        } else {
          this.legStep = (this.legStep + 1) % 16;
        }
      }

      draw(ctx) {
        const renderY = canvas.height - 35 - this.height - this.y;

        if (visualMode === 'box') {
          // KAROBKA HITBOX REJIMI
          ctx.fillStyle = 'rgba(16, 185, 129, 0.25)';
          ctx.strokeStyle = '#10b981';
          ctx.lineWidth = 2;
          ctx.fillRect(this.x, renderY, this.width, this.height);
          ctx.strokeRect(this.x, renderY, this.width, this.height);

          ctx.fillStyle = '#34d399';
          ctx.font = 'bold 10px monospace';
          ctx.fillText('HITBOX', this.x + 4, renderY + 20);
          ctx.fillText(\`\${this.width}x\${this.height}\`, this.x + 6, renderY + 34);
        } else {
          // 100% CANVAS PIXEL ART T-REX
          ctx.fillStyle = '#f1f5f9';
          const px = this.x;
          const py = renderY;

          // Bosh & Jag'
          ctx.fillRect(px + 22, py, 20, 18);
          ctx.fillRect(px + 20, py + 18, 14, 8);

          // Ko'z
          ctx.fillStyle = '#090d16';
          ctx.fillRect(px + 26, py + 4, 4, 4);

          // Tana & Bo'yin
          ctx.fillStyle = '#f1f5f9';
          ctx.fillRect(px + 12, py + 16, 16, 20);
          ctx.fillRect(px + 6, py + 22, 14, 14);

          // Dum
          ctx.fillRect(px, py + 22, 8, 8);
          ctx.fillRect(px + 2, py + 30, 6, 6);

          // Qo'l
          ctx.fillRect(px + 30, py + 22, 6, 4);

          // Oyoqlar (Yugurish animatsiyasi)
          if (this.isJumping) {
            ctx.fillRect(px + 14, py + 36, 4, 12);
            ctx.fillRect(px + 22, py + 36, 4, 10);
          } else if (this.legStep < 8) {
            ctx.fillRect(px + 14, py + 36, 4, 12);
            ctx.fillRect(px + 22, py + 36, 4, 8);
          } else {
            ctx.fillRect(px + 14, py + 36, 4, 8);
            ctx.fillRect(px + 22, py + 36, 4, 12);
          }
        }
      }
    }

    const liveDino = new GameDino();
    let cactusX = 900;
    let cactusWidth = 26;
    let cactusHeight = 44;
    let clouds = [
      { x: 200, y: 35, speed: 0.5 },
      { x: 550, y: 55, speed: 0.8 },
      { x: 800, y: 25, speed: 0.6 }
    ];
    let score = 0;
    let highScore = 0;
    let isGameOver = false;

    function handleJumpAction() {
      if (isGameOver) {
        resetGame();
      } else {
        liveDino.jump();
      }
    }

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        handleJumpAction();
      }
    });

    function resetGame() {
      isGameOver = false;
      score = 0;
      cactusX = 900;
      document.getElementById('current-score').textContent = '00000';
      loop();
    }

    function loop() {
      if (isGameOver) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Bulutlar
      ctx.fillStyle = '#1e293b';
      clouds.forEach(c => {
        c.x -= c.speed;
        if (c.x < -60) c.x = canvas.width + 20;
        ctx.beginPath();
        ctx.arc(c.x, c.y, 14, 0, Math.PI * 2);
        ctx.arc(c.x + 14, c.y - 6, 18, 0, Math.PI * 2);
        ctx.arc(c.x + 28, c.y, 14, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Yer chizig'i va qum zarrachalari
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 35);
      ctx.lineTo(canvas.width, canvas.height - 35);
      ctx.stroke();

      // 3. Dinozavr
      liveDino.update();
      liveDino.draw(ctx);

      // 4. Kaktus to'sig'i
      cactusX -= 6.5;
      if (cactusX < -40) {
        cactusX = canvas.width + Math.random() * 200;
        cactusHeight = 38 + Math.floor(Math.random() * 16);
        score += 10;
        document.getElementById('current-score').textContent = String(score).padStart(5, '0');
        if (score > highScore) {
          highScore = score;
          document.getElementById('high-score').textContent = String(highScore).padStart(5, '0');
        }
      }

      const cactusY = canvas.height - 35 - cactusHeight;
      if (visualMode === 'box') {
        ctx.fillStyle = 'rgba(239, 68, 68, 0.25)';
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2;
        ctx.fillRect(cactusX, cactusY, cactusWidth, cactusHeight);
        ctx.strokeRect(cactusX, cactusY, cactusWidth, cactusHeight);

        ctx.fillStyle = '#f87171';
        ctx.font = 'bold 9px monospace';
        ctx.fillText('KAKTUS', cactusX + 2, cactusY + 16);
      } else {
        // 100% Canvas Pixel Kaktus
        ctx.fillStyle = '#10b981';
        ctx.fillRect(cactusX + 8, cactusY, 10, cactusHeight);
        // Chap shox
        ctx.fillRect(cactusX, cactusY + 10, 8, 4);
        ctx.fillRect(cactusX, cactusY + 4, 4, 10);
        // O'ng shox
        ctx.fillRect(cactusX + 18, cactusY + 14, 8, 4);
        ctx.fillRect(cactusX + 22, cactusY + 8, 4, 10);
      }

      // 5. To'qnashuvni hisoblash (AABB Bounding Box)
      const dinoRenderY = canvas.height - 35 - liveDino.height - liveDino.y;
      const isColliding = (
        liveDino.x + 6 < cactusX + cactusWidth &&
        liveDino.x + liveDino.width - 6 > cactusX &&
        dinoRenderY + liveDino.height > cactusY + 6
      );

      if (isColliding) {
        isGameOver = true;
        playAudioChime(false);
        ctx.fillStyle = 'rgba(9, 13, 22, 0.85)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 22px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('💥 TO\\'QNASHUV YUZ BERDI!', canvas.width / 2, canvas.height / 2 - 10);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '14px system-ui, sans-serif';
        ctx.fillText('Dinozavr kaktusga urildi. Qaytadan boshlash uchun Space bosing!', canvas.width / 2, canvas.height / 2 + 20);
        ctx.textAlign = 'left';
        return;
      }

      requestAnimationFrame(loop);
    }

    loop();

    /* ==========================================================================
       6. VS CODE MODAL CONTROLLER
       ========================================================================== */
    function openVsCodeModal() {
      document.getElementById('template-code-box').textContent = STANDALONE_HTML_TEMPLATE;
      document.getElementById('vscode-modal').classList.add('open');
    }

    function closeVsCodeModal() {
      document.getElementById('vscode-modal').classList.remove('open');
    }

    function copyTemplateCode() {
      navigator.clipboard.writeText(STANDALONE_HTML_TEMPLATE);
      alert('✅ To\\'liq HTML+CSS+JS kodi buferga nusxalandi! VS Code ichidagi faylga qo\\'yishingiz mumkin.');
    }

    function downloadTemplateFile() {
      const blob = new Blob([STANDALONE_HTML_TEMPLATE], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'dino.html';
      a.click();
      URL.revokeObjectURL(url);
    }

    // Ilk qadamni yuklaymiz
    switchStep(1);
  </script>
</body>
</html>`;

fs.writeFileSync('dino-game-darsi/index.html', htmlContent, 'utf8');
console.log('Successfully generated complete Socratic dino-game-darsi/index.html');
