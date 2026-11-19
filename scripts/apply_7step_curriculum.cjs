const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../dino-game-darsi/index.html');
let content = fs.readFileSync(filePath, 'utf8');

console.log('Original content length:', content.length);

// 1. UPDATE STEPS-NAV BUTTONS (lines ~2068 to 2100)
const oldNavRegex = /<nav class="steps-nav">[\s\S]*?<\/nav>/;
const newNav = `<nav class="steps-nav">
      <button class="step-btn active" id="step-nav-1" onclick="switchStep(1)">
        <div class="step-num"><span>1-QADAM</span> <span class="lock-status" id="lock-icon-1">🔓</span></div>
        <div class="step-name">HTML O'yin Sahnasi</div>
      </button>

      <button class="step-btn" id="step-nav-2" disabled onclick="switchStep(2)">
        <div class="step-num"><span>2-QADAM</span> <span class="lock-status" id="lock-icon-2">🔒</span></div>
        <div class="step-name">CSS Arcade Maketi</div>
      </button>

      <button class="step-btn" id="step-nav-3" disabled onclick="switchStep(3)">
        <div class="step-num"><span>3-QADAM</span> <span class="lock-status" id="lock-icon-3">🔒</span></div>
        <div class="step-name">Bo'sh Class (Skelet)</div>
      </button>

      <button class="step-btn" id="step-nav-4" disabled onclick="switchStep(4)">
        <div class="step-num"><span>4-QADAM</span> <span class="lock-status" id="lock-icon-4">🔒</span></div>
        <div class="step-name">O'lchamlar & 'this'</div>
      </button>

      <button class="step-btn" id="step-nav-5" disabled onclick="switchStep(5)">
        <div class="step-num"><span>5-QADAM</span> <span class="lock-status" id="lock-icon-5">🔒</span></div>
        <div class="step-name">Sakrash & Egilish</div>
      </button>

      <button class="step-btn" id="step-nav-6" disabled onclick="switchStep(6)">
        <div class="step-num"><span>6-QADAM</span> <span class="lock-status" id="lock-icon-6">🔒</span></div>
        <div class="step-name">Gravitatsiya Fizikasi</div>
      </button>

      <button class="step-btn" id="step-nav-7" disabled onclick="switchStep(7)">
        <div class="step-num"><span>7-QADAM</span> <span class="lock-status" id="lock-icon-7">🔒</span></div>
        <div class="step-name">Kaktus, Qush & O'yin</div>
      </button>
    </nav>`;

if (!oldNavRegex.test(content)) {
  throw new Error('oldNavRegex did not match!');
}
content = content.replace(oldNavRegex, newNav);
console.log('Nav buttons updated');

// 2. EXTRACT OLD STEPS DATA AND BUILD 7-STEP DATA
const oldStepsDataMatch = content.match(/const STEPS_DATA = (\{[\s\S]*?\n    \};)/);
if (!oldStepsDataMatch) {
  throw new Error('oldStepsDataMatch did not match!');
}

const oldSteps = new Function('return ' + oldStepsDataMatch[1])();

const newStepsData = {
  1: {
    num: 1,
    title: "HTML O'yin Sahnasi: Canvas va Ochko Doskasi (index.html)",
    concept: "Web dasturlashda personaj va o'yin shunchaki havoda paydo bo'lmaydi! Avval HTML'da uning 'uy'i va poydevori quriladi. <canvas> tegi — bu brauzerdagi bo'sh rasm chizish matosi (holst). Unga JavaScript orqali to'rtburchaklar, personajlar va kaktuslarni chizamiz. <div class='score-board'> esa o'yinchining to'plagan ochkosini ko'rsatib turadi.",
    analogy: "💡 Hayotiy O'xshatish: HTML — bu xonaning bo'sh devorlari va stol-stullari. Agar xona (HTML) bo'lmasa, siz chizgan suratlarni (JavaScript) ilib qo'yadigan joyning o'zi bo'lmaydi!",
    algorithm: [
      {
        title: "1. <!DOCTYPE html> va <html> qobig'i",
        desc: "Brauzerga sahifaning zamonaviy HTML5 standarti ekanligini bildirish."
      },
      {
        title: "2. Ochko doskasi: <div class='score-board'>",
        desc: "O'yinchining natijasi doimiy ko'rinib turishi uchun <span id='score'>00000</span> elementini joylashtirish."
      },
      {
        title: "3. O'yin matosi: <canvas id='gameCanvas'>",
        desc: "Haqiqiy 800x250 piksel o'lchamdagi chizish maydonini o'rnatish."
      },
      {
        title: "4. JavaScript faylini ulash: <script src='game.js'>",
        desc: "O'yin mantiqiy kodini sahifaga ulash."
      }
    ],
    taskTitle: "1-Topshiriq: HTML'da o'yin arenasi, ochko doskasi va 'gameCanvas' matosini yarating",
    taskInstruction: "Quyidagi HTML skeletini yozing: score id'li ochko elementi, gameCanvas id'li 800x250 o'lchamli canvas va game.js skriptini ulang:",
    criteria: [
      {
        title: "1. gameCanvas id'li <canvas> tegi",
        desc: "Aniq 800x250 o'lchamdagi rasm chizish maydonini e'lon qiling.",
        codeSnippet: "<canvas id=\"gameCanvas\" width=\"800\" height=\"250\"></canvas>"
      },
      {
        title: "2. score id'li ochko ko'rsatkichi",
        desc: "O'yinda ochkolarni ko'rsatuvchi elementni joylashtiring.",
        codeSnippet: "<div class=\"score-board\">OCHKO: <span id=\"score\">00000</span></div>"
      },
      {
        title: "3. game.js skriptini ulash",
        desc: "HTML fayl oxirida JavaScript faylini ulovchi tegni yozing.",
        codeSnippet: "<script src=\"game.js\"><\\/script>"
      }
    ],
    hintLogic: "💡 1-Qadam Mantiq: HTML faylingizda <canvas id='gameCanvas' width='800' height='250'></canvas> tegi o'yin maydoni bo'lib xizmat qiladi. Ochko uchun esa <span id='score'>00000</span> qo'yiladi.",
    hintTemplate: "📐 Sintaksis qolipi:<br><pre style='color:#38bdf8;'>&lt;div class=\"score-board\"&gt;OCHKO: &lt;span id=\"score\"&gt;00000&lt;/span&gt;&lt;/div&gt;\n&lt;canvas id=\"gameCanvas\" width=\"800\" height=\"250\"&gt;&lt;/canvas&gt;\n&lt;script src=\"game.js\"&gt;&lt;/script&gt;</pre>",
    hintScaffolding: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Dino Game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- 1-Talab: Ochko doskasi -->
  <div class="score-board">OCHKO: <span id="score">00000</span></div>

  <!-- 2-Talab: O'yin matosi (800x250 ichki o'lcham) -->
  <canvas id="gameCanvas" width="800" height="250"></canvas>

  <!-- 3-Talab: JavaScript mantiq faylini ulash -->
  <script src="game.js"><\\/script>
</body>
</html>`,
    starterCode: `<!-- 1-Qadam: HTML Sahnasi va Canvas Matosi (index.html) -->
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Chrome Dino Game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- 1-Topshiriq: score id'li ochko doskasini, gameCanvas id'li canvasni (width="800" height="250") va game.js skriptini yozing -->

</body>
</html>`,
    modelCode: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Chrome Dino Game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="score-board">OCHKO: <span id="score">00000</span></div>
  <canvas id="gameCanvas" width="800" height="250"></canvas>
  <script src="game.js"><\\/script>
</body>
</html>`,
    quiz: {
      question: "Nima uchun <canvas width='800' height='250'> o'lchami CSS'da emas, bevosita HTML atributi sifatida berilishi kerak?",
      options: [
        { text: "CSS'da berilsa, brauzer rasmni optik cho'zib, piksellarni xiralashtirib (blur) yuboradi; HTML atributi esa haqiqiy chizish piksellarini belgilaydi.", correct: true },
        { text: "Chunki CSS canvas tegini umuman tanimaydi va ishlamaydi.", correct: false },
        { text: "Faqat dizayn chiroyli ko'rinishi uchun shunday qilinadi.", correct: false }
      ],
      explanation: "Aynan shunday! Canvas o'lchami HTML atributida berilganda brauzer uning haqiqiy ichki koordinatalari to'rini (800x250) yaratadi. CSS'da berilsa, u shunchaki kattalashtiruvchi oyna kabi cho'zilib piksellar buziladi."
    }
  },

  2: {
    num: 2,
    title: "CSS Maketi: Retro Arkada Dizayni va Markazlashtirish (style.css)",
    concept: "HTML suyaklarni yaratdi, ammo hozir o'yin ekranning chap tepasida oq fonda xunuk turibdi! CSS yordamida biz butun sahifani qorong'i arkada zaliga aylantiramiz (#0b0f19), canvasni ekranning qoq o'rtasiga joylaymiz va ochko yozuvini retro pikselli monospace shriftiga o'tkazamiz.",
    analogy: "💡 Hayotiy O'xshatish: CSS — bu binoning bo'yog'i, pardalari, chiroqlari va dizayni! U bo'lmasa, eng qimmat bino ham beton g'ishtlar uyumi bo'lib ko'rinadi.",
    algorithm: [
      {
        title: "1. body markazlashtirish",
        desc: "display: flex; flex-direction: column; align-items: center; orqali o'yinni ekran markaziga tekislash."
      },
      {
        title: "2. Qorong'i arkada foni",
        desc: "background: #0b0f19; color: #ffffff; bilan qorong'i atmosferani berish."
      },
      {
        title: "3. Canvas ramkasi va chuqurligi",
        desc: "canvas maydoniga qorong'i fon (#0f172a) va neon chegarasi (border: 2px solid #1e293b)."
      },
      {
        title: "4. Monospace ochko doskasi",
        desc: ".score-board uchun font-family: monospace; shriftini o'rnatish."
      }
    ],
    taskTitle: "2-Topshiriq: 'style.css' faylida body, canvas va .score-board uchun arkada dizaynini yozing",
    taskInstruction: "O'yinni markazlashtiruvchi body, qorong'i ramkali canvas va monospace shriftli .score-board qoidalarini yozing:",
    criteria: [
      {
        title: "1. body markazlashtirish va qorong'i fon",
        desc: "display: flex; align-items: center; va background: #0b0f19; bering.",
        codeSnippet: "body { display: flex; flex-direction: column; align-items: center; background: #0b0f19; }"
      },
      {
        title: "2. canvas arkada ramkasi",
        desc: "border: 2px solid #1e293b; va fon rangi qo'ying.",
        codeSnippet: "canvas { background: #0f172a; border: 2px solid #1e293b; border-radius: 12px; }"
      },
      {
        title: "3. .score-board monospace shrifti",
        desc: "Ochko sakramasligi uchun monospace shriftini tanlang.",
        codeSnippet: ".score-board { font-family: monospace; font-size: 20px; }"
      }
    ],
    hintLogic: "💡 2-Qadam Mantiq: body ga flexbox berib markazlashtiring, canvas ga border va qorong'i fon qo'ying, .score-board ga esa monospace shrift bering.",
    hintTemplate: "📐 Sintaksis qolipi:<br><pre style='color:#38bdf8;'>body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #0b0f19;\n}\ncanvas {\n  background: #0f172a;\n  border: 2px solid #1e293b;\n}\n.score-board {\n  font-family: monospace;\n}</pre>",
    hintScaffolding: `/* 1-Talab: Butun sahna va body markazlashtirish */
body {
  margin: 0;
  padding: 30px;
  background: #0b0f19;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 2-Talab: Ochko doskasi shrifti */
.score-board {
  font-family: monospace;
  font-size: 20px;
  color: #38bdf8;
  margin-bottom: 12px;
}

/* 3-Talab: Canvas o'yin maydoni ramkasi */
canvas {
  background: #0f172a;
  border: 2px solid #1e293b;
  border-radius: 12px;
}`,
    starterCode: `/* 2-Qadam: CSS Retro Arkada Maketi (style.css) */
/* 1-Topshiriq: body markazlashtirish va qorong'i fon (#0b0f19) */
body {

}

/* 2-Topshiriq: .score-board uchun monospace shrift */
.score-board {

}

/* 3-Topshiriq: canvas uchun qorong'i fon (#0f172a) va ramka (border: 2px solid #1e293b) */
canvas {

}`,
    modelCode: `body {
  margin: 0;
  padding: 30px;
  background: #0b0f19;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.score-board {
  font-family: monospace;
  font-size: 20px;
  color: #38bdf8;
  margin-bottom: 12px;
}

canvas {
  background: #0f172a;
  border: 2px solid #1e293b;
  border-radius: 12px;
}`,
    quiz: {
      question: "Nima uchun o'yin ochkosi (.score-board) uchun monospace shrifti ishlatiladi?",
      options: [
        { text: "Monospace shriftda har bir raqam (0, 1, 8) teng kenglikka ega bo'lib, ochko tez o'sganda matn chapga-o'ngga sakramaydi.", correct: true },
        { text: "Chunki boshqa shriftlar raqamlarni ko'rsata olmaydi.", correct: false },
        { text: "Faqat shrift nomi yoqqanligi uchun.", correct: false }
      ],
      explanation: "Barakalla! Monospace (teng kenglikli) shriftlarda 1 raqami ham, 8 raqami ham bir xil kenglikda joy oladi. Natijada ochko hisoblagich raqamlari o'zgarganda matn qaltiramaydi va sakramaydi."
    }
  },

  // Steps 3 through 7 are former steps 1 through 5:
  3: Object.assign({}, oldSteps[1], {
    num: 3,
    title: "Bo'sh Class (Skelet & new Dino())",
    taskTitle: "3-Topshiriq: 'Dino' sinfini va 'dino' nusxasini yarating",
    taskInstruction: "JavaScript'da o'yin personajining qolipini yaratish uchun 'class Dino' e'lon qiling va undan 'new Dino()' nusxasini oling:",
    starterCode: `// 3-Qadam: 'class Dino' va 'new Dino()'
// 1-Topshiriq: 'Dino' nomli bo'sh sinf qolipini e'lon qiling


// 2-Topshiriq: 'new Dino()' orqali birinchi dinozavr obyektini o'zgaruvchiga tenglang
`
  }),

  4: Object.assign({}, oldSteps[2], {
    num: 4,
    title: "O'lchamlar, Hitbox & 'this' Xotira Mantiqi",
    taskTitle: "4-Topshiriq: 'constructor()' ichida o'lchamlar va 'this' xususiyatlarini yozing",
    taskInstruction: "Dinozavrning o'lchamlari va holatlarini xotiraga mixlash uchun constructor() ichida this.width = 44, this.height = 48, this.x = 60, this.y = 0, this.isJumping = false, this.isDucking = false qiymatlarini belgilang:",
    starterCode: `// 4-Qadam: 'constructor()' va 'this' xususiyatlari
class Dino {
  // Topshiriq: constructor() ichida x, y, width, height, isJumping, isDucking xususiyatlarini yozing

}

const dino = new Dino();`
  }),

  5: Object.assign({}, oldSteps[3], {
    num: 5,
    title: "Boshqaruv: Sakrash (Jump) va Egilish (Duck)",
    taskTitle: "5-Topshiriq: 'jump()', 'duck()', 'standUp()' metodlari va hodisalarni yozing",
    starterCode: `// 5-Qadam: jump(), duck(), standUp() va klaviatura hodisalari
class Dino {
  constructor() {
    this.x = 60;
    this.y = 0;
    this.width = 44;
    this.height = 48;
    this.isJumping = false;
    this.isDucking = false;
  }

  // 1-Topshiriq: jump() metodini yozing (faqat y === 0 va sakramayotgan bo'lsa)

  // 2-Topshiriq: duck() metodini yozing (isDucking = true, height = 26, width = 55)

  // 3-Topshiriq: standUp() metodini yozing (isDucking = false, height = 48, width = 44)

}

const dino = new Dino();

// 4-Topshiriq: window ga 'keydown' (Space, ArrowDown) va 'keyup' (ArrowDown) hodisalarini ulang
`
  }),

  6: Object.assign({}, oldSteps[4], {
    num: 6,
    title: "Fizika & Gravitatsiya ('update()' metodi)",
    taskTitle: "6-Topshiriq: 'update()' metodi va gravitatsiya fizikasini yozing"
  }),

  7: Object.assign({}, oldSteps[5], {
    num: 7,
    title: "Kaktus, Qush & To'liq O'yin (AABB To'qnashuvi)",
    taskTitle: "7-Topshiriq: AABB to'qnashuvi va to'liq o'yinni yakunlang"
  })
};

const newStepsDataString = 'const STEPS_DATA = ' + JSON.stringify(newStepsData, null, 2) + ';';
content = content.replace(/const STEPS_DATA = \{[\s\S]*?\n    \};/, newStepsDataString);
console.log('STEPS_DATA updated to 7 steps');

// 3. UPDATE UNLOCKEDSTEPS AND ALLBUILT
content = content.replace(
  /const unlockedSteps = \{ 1: false, 2: false, 3: false, 4: false, 5: false \};/,
  'const unlockedSteps = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false };'
);

content = content.replace(
  /const allBuilt = unlockedSteps\[1\] && unlockedSteps\[2\] && unlockedSteps\[3\] && unlockedSteps\[4\] && unlockedSteps\[5\];/g,
  'const allBuilt = unlockedSteps[1] && unlockedSteps[2] && unlockedSteps[3] && unlockedSteps[4] && unlockedSteps[5] && unlockedSteps[6] && unlockedSteps[7];'
);

// 4. UPDATE PROGRESS CALCULATION (for s = 1; s <= 7; s++)
content = content.replace(
  /for \(let s = 1; s <= 5; s\+\+\) \{[\s\S]*?const pct = \(count \/ 5\) \* 100;[\s\S]*?O'zlashtirildi: \$\{count\} \/ 5 \(\$\{Math\.round\(pct\)\\}%\)/,
  `for (let s = 1; s <= 7; s++) {
        if (unlockedSteps[s]) count++;
      }
      const pct = (count / 7) * 100;
      document.getElementById('progress-fill').style.width = pct + '%';
      document.getElementById('progress-label').textContent = \`O'zlashtirildi: \${count} / 7 (\${Math.round(pct)}%)\``
);

content = content.replace(
  /for \(let s = 1; s <= 5; s\+\+\) \{\s*const btn = document\.getElementById\('step-nav-' \+ s\);/g,
  'for (let s = 1; s <= 7; s++) {\n        const btn = document.getElementById(\'step-nav-\' + s);'
);

// 5. UPDATE SWITCHSTEP
// Editor language badge:
content = content.replace(
  /currentStep = stepNum;\s*updateProgressUI\(\);/,
  `currentStep = stepNum;
      updateProgressUI();

      const langBadge = document.querySelector('.editor-lang-badge');
      if (langBadge) {
        if (stepNum === 1) langBadge.textContent = 'HTML5 (Skelet & Arena)';
        else if (stepNum === 2) langBadge.textContent = 'CSS3 (Arcade Dizayn)';
        else langBadge.textContent = 'JavaScript (ES6)';
      }`
);

// 'this' simulator: displayed on stepNum === 4:
content = content.replace(
  /simBox\.style\.display = \(stepNum === 2\) \? 'flex' : 'none';\s*if \(stepNum === 2\) \{\s*simStep\(1\);/g,
  "simBox.style.display = (stepNum === 4) ? 'flex' : 'none';\n        if (stepNum === 4) {\n          simStep(1);"
);

// updateNextStepButton:
content = content.replace(
  /if \(currentStep < 5\) \{\s*btn\.disabled = false;\s*btn\.className = 'next-step-btn unlocked';\s*if \(icon\) icon\.textContent = '🚀';\s*if \(text\) text\.textContent = `\$\{currentStep \+ 1\}-Qadamga O'tish \(\$\{STEPS_DATA\[currentStep \+ 1\]\.title\}\) →`;\s*\} else \{\s*btn\.disabled = true;\s*btn\.className = 'next-step-btn unlocked';\s*if \(icon\) icon\.textContent = '🏆';\s*if \(text\) text\.textContent = "Barcha 5 ta Qadam Muvaffaqiyatli O'zlashtirildi!";\s*\}/,
  `if (currentStep < 7) {
          btn.disabled = false;
          btn.className = 'next-step-btn unlocked';
          if (icon) icon.textContent = '🚀';
          if (text) text.textContent = \`\${currentStep + 1}-Qadamga O'tish (\${STEPS_DATA[currentStep + 1].title}) →\`;
        } else {
          btn.disabled = true;
          btn.className = 'next-step-btn unlocked';
          if (icon) icon.textContent = '🏆';
          if (text) text.textContent = "Barcha 7 ta Qadam Muvaffaqiyatli O'zlashtirildi!";
        }`
);

// goToNextStep:
content = content.replace(
  /if \(unlockedSteps\[currentStep\] && currentStep < 5\)/g,
  'if (unlockedSteps[currentStep] && currentStep < 7)'
);

// 6. UPDATE ANALYZESYNTAXANDSTUDENTERRORS
const oldSyntaxAnalyzerRegex = /function analyzeSyntaxAndStudentErrors\(rawCode, currentStep\) \{[\s\S]*?return null;\s*\}/;
const newSyntaxAnalyzer = `function analyzeSyntaxAndStudentErrors(rawCode, currentStep) {
      // 1- va 2-bosqichlar HTML va CSS bo'lgani uchun JavaScript sintaksis tekshiruvlari o'tkazilmaydi:
      if (currentStep <= 2) return null;

      // 1. CSS o'lchov birliklari (48px, 26px, 12px, etc.) - JS ichida xato
      const pxMatch = rawCode.match(/\\b(\\d+)\\s*(px|rem|em|pt|vh|vw)\\b/i);
      if (pxMatch) {
        return {
          title: "💡 Sintaksis Maslahati: JavaScript CSS emas!",
          message: \`Siz kodda <code>\${pxMatch[0]}</code> deb yozgansiz. JavaScript dasturlash tilida o'lchamlar birliksiz, oddiy son sifatida yoziladi!<br>\` +
                   \`❌ Noto'g'ri: <code>\${pxMatch[0]}</code><br>\` +
                   \`✅ To'g'ri: <code>\${pxMatch[1]}</code> (masalan: <code>this.height = \${pxMatch[1]};</code>)\`
        };
      }

      // 2. Class ichida 'function' kalit so'zi
      const funcMatch = rawCode.match(/\\bclass\\s+\\w+[\\s\\S]*?\\bfunction\\s+([a-zA-Z0-9_$]+)\\s*\\(/);
      if (funcMatch) {
        return {
          title: "💡 Metod Sintaksisi Maslahati:",
          message: \`Sinf (class) ichida metodlar <code>function</code> so'zisiz e'lon qilinadi!<br>\` +
                   \`❌ Noto'g'ri: <code>function \${funcMatch[1]}() { ... }</code><br>\` +
                   \`✅ To'g'ri: <code>\${funcMatch[1]}() { ... }</code>\`
        };
      }

      // 3. 'this.' kalit so'zini tushirib qoldirish (4-bosqichdan boshlab)
      if (currentStep >= 4) {
        const nakedPropMatch = rawCode.match(/(?:^|\\n|\\{|\\;)\\s*(?<!this\\.)\\b(width|height|isJumping|isDucking|velocityY|jumpForce|gravity)\\s*=\\s*([^;\\n]+)/);
        if (nakedPropMatch) {
          const prop = nakedPropMatch[1];
          const val = nakedPropMatch[2].trim();
          return {
            title: "💡 'this' Kalit So'zi Maslahati:",
            message: \`Sinf ichida xususiyatlarni biriktirishda <code>this.</code> kalit so'zi shart!<br>\` +
                     \`❌ Noto'g'ri: <code>\${prop} = \${val};</code><br>\` +
                     \`✅ To'g'ri: <code>this.\${prop} = \${val};</code> (Aynan shu dinozavr xotirasiga yozilishi uchun)\`
          };
        }
      }

      return null;
    }`;

content = content.replace(oldSyntaxAnalyzerRegex, newSyntaxAnalyzer);
console.log('analyzeSyntaxAndStudentErrors updated');

// 7. UPDATE EXECUTESTUDENTCODE VALIDATION LOGIC FOR 7 STEPS
const oldValidationBlockRegex = /try \{\s*let isValid = false;\s*let message = '';[\s\S]*?else if \(currentStep === 5\) \{[\s\S]*?\}\s*\}\s*\}\s*\n\s*\/\/ QAT'IY NATIJA:\s*\n\s*if \(isValid\) \{/m;

const newValidationBlock = `try {
        let isValid = false;
        let message = '';

        if (currentStep === 1) {
          // HTML BOSQICHI: <canvas id="gameCanvas", id="score", <script
          const hasCanvas = /<canvas[\\s\\S]*?id=["']gameCanvas["']/i.test(rawCode);
          const hasScore = /id=["']score["']/i.test(rawCode);
          const hasScript = /<script[\\s\\S]*?(src=["']game\\.js["']|>)/i.test(rawCode);

          if (!hasCanvas) {
            message = "❌ 1-Talab: '&lt;canvas id=\\'gameCanvas\\' width=\\'800\\' height=\\'250\\'&gt;&lt;/canvas&gt;' tegi topilmadi! O'yin chiziladigan sahna bo'lishi shart.";
          } else if (!hasScore) {
            message = "❌ 2-Talab: Ochko ko'rsatuvchi '&lt;span id=\\'score\\'&gt;00000&lt;/span&gt;' elementi yozilmadi!";
          } else if (!hasScript) {
            message = "❌ 3-Talab: '&lt;script src=\\'game.js\\'&gt;&lt;/script&gt;' tegi yozilmadi! JavaScript mantiq fayli ulanishi zarur.";
          } else {
            isValid = true;
            message = "🎉 BARAKALLA! HTML o'yin sahnasi va 'gameCanvas' matosi to'g'ri yaratildi! Endi 2-Qadamga o'ting va unga CSS arkada dizaynini bering!";
            appendConsoleLog("✅ 1-Qadam muvaffaqiyatli: HTML o'yin sahnasi yaratildi!");
          }
        }
        else if (currentStep === 2) {
          // CSS BOSQICHI: body, canvas, score-board, monospace
          const hasBody = /body\\s*\\{[\\s\\S]*?\\}/i.test(rawCode);
          const hasCanvasCss = /canvas\\s*\\{[\\s\\S]*?\\}/i.test(rawCode);
          const hasScoreCss = /\\.score-board\\s*\\{[\\s\\S]*?\\}/i.test(rawCode) || /#score\\s*\\{[\\s\\S]*?\\}/i.test(rawCode);
          const hasMonospace = /monospace/i.test(rawCode);
          const hasBorder = /border/i.test(rawCode);

          if (!hasBody) {
            message = "❌ 1-Talab: 'body { display: flex; flex-direction: column; align-items: center; background: #0b0f19; }' markazlashtirish qoidasi yozilmadi!";
          } else if (!hasCanvasCss || !hasBorder) {
            message = "❌ 2-Talab: 'canvas { background: #0f172a; border: 2px solid #1e293b; border-radius: 12px; }' arkada ramkasi berilmadi!";
          } else if (!hasScoreCss || !hasMonospace) {
            message = "❌ 3-Talab: '.score-board { font-family: monospace; }' qoidasi yozilmadi! Ochko sakrab ketmasligi uchun monospace shrifti zarur.";
          } else {
            isValid = true;
            message = "🎉 AJOYIB! Retro arkada CSS dizayni muvaffaqiyatli qo'llandi! Endi 3-Qadamda o'yin miyasi — 'class Dino'ni boshlaymiz!";
            appendConsoleLog("✅ 2-Qadam muvaffaqiyatli: CSS arkada dizayni o'rnatildi!");
          }
        }
        else {
          // JAVASCRIPT BOSQICHLARI: 3..7
          const evalSandbox = new Function(rawCode + '; return { Dino: typeof Dino !== "undefined" ? Dino : null, checkCollision: typeof checkCollision !== "undefined" ? checkCollision : null };');
          const exports = evalSandbox();

          if (currentStep === 3) {
            // 3-Qadam: class Dino va new Dino()
            if (!exports.Dino || typeof exports.Dino !== 'function') {
              message = "❌ 1-Talab bajarilmadi: 'class Dino { }' sinfi yaratilmadi! Iltimos, sinf qolipini e'lon qiling.";
            } else if (!rawCode.includes('new Dino')) {
              message = "❌ 2-Talab bajarilmadi: 'new Dino()' orqali obyekt olinmadi! Masalan: 'const dino = new Dino();' deb yozing.";
            } else {
              isValid = true;
              message = "🎉 BARAKALLA! 'class Dino' va 'new Dino()' ni o'zingiz to'g'ri yozdingiz! O'ngdagi brauzerda ilk dinozavr skelet obyekti xotirada faollashdi!";
            }
          }
          else if (currentStep === 4) {
            // 4-Qadam: constructor, width, height, x, y, isJumping, isDucking
            if (!exports.Dino) {
              message = "❌ 'class Dino' topilmadi.";
            } else if (!rawCode.includes('constructor')) {
              message = "❌ 4-Qadam bajarilmadi: Dino klassi ichida 'constructor()' metodi ochilmadi!";
            } else {
              const inst = new exports.Dino();

              if (typeof inst.width === 'number') liveDino.width = inst.width;
              if (typeof inst.height === 'number') liveDino.height = inst.height;
              if (typeof inst.x === 'number') liveDino.x = inst.x;
              if (typeof inst.y === 'number') {
                liveDino.y = inst.y;
                liveDino.baseY = inst.y;
              }
              updateTelemetry();

              if (typeof inst.width !== 'number' || inst.width <= 0) {
                message = "❌ 1-Talab: 'this.width = 44;' eni musbat son bo'lishi shart!";
              } else if (typeof inst.height !== 'number' || inst.height <= 0) {
                message = "❌ 1-Talab: 'this.height = 48;' bo'yi musbat son bo'lishi shart!";
              } else if (typeof inst.x !== 'number') {
                message = "❌ 2-Talab: 'this.x = 60;' chap koordinatasi belgilanmadi!";
              } else if (typeof inst.y !== 'number') {
                message = "❌ 2-Talab: 'this.y = 0;' yerdagi boshlang'ich pozitsiyasi belgilanmadi!";
              } else if (typeof inst.isJumping !== 'boolean') {
                message = "❌ 3-Talab: 'this.isJumping = false;' sakrash holati mantiqiy bayrog'i (boolean) belgilanmadi!";
              } else if (typeof inst.isDucking !== 'boolean') {
                message = "❌ 3-Talab: 'this.isDucking = false;' egilish holati mantiqiy bayrog'i (boolean) belgilanmadi!";
              } else {
                isValid = true;
                message = \`🎉 AJOYIB! Dino o'lchamlari va 'this' xususiyatlari to'g'ri o'rnatildi! O'ngdagi brauzerda dinozavrning aniq hitbox qutisi (\${inst.width}x\${inst.height}) paydo bo'ldi!\`;
              }
            }
          }
          else if (currentStep === 5) {
            // 5-Qadam: jump, duck, standUp, keydown, keyup
            if (!exports.Dino) {
              message = "❌ 'class Dino' topilmadi.";
            } else {
              const inst = new exports.Dino();
              const hasJump = typeof inst.jump === 'function';
              const hasDuck = typeof inst.duck === 'function';
              const hasStandUp = typeof inst.standUp === 'function';
              const hasKeydown = rawCode.includes('addEventListener') && rawCode.includes('keydown');
              const hasKeyup = rawCode.includes('addEventListener') && rawCode.includes('keyup');

              if (!hasJump) {
                message = "❌ 1-Talab: Dino klassi ichida 'jump()' metodi yozilmadi!";
              } else if (!hasDuck) {
                message = "❌ 2-Talab: Dino klassi ichida 'duck()' metodi yozilmadi!";
              } else if (!hasStandUp) {
                message = "❌ 3-Talab: Dino klassi ichida 'standUp()' metodi yozilmadi!";
              } else if (!hasKeydown || !hasKeyup) {
                message = "❌ 4-Talab: 'window.addEventListener(\\'keydown\\', ...)' va 'keyup' hodisalari to'liq ulanmadi!";
              } else {
                isValid = true;
                message = "🎉 MUKAMMAL! jump(), duck(), standUp() va klaviatura hodisalarini o'zingiz yozdingiz! Endi Space va ArrowDown tugmalari bilan o'ngdagi dinoni boshqarishingiz mumkin!";
              }
            }
          }
          else if (currentStep === 6) {
            // 6-Qadam: update, velocityY, gravity, jumpForce
            if (!exports.Dino) {
              message = "❌ 'class Dino' topilmadi.";
            } else {
              const inst = new exports.Dino();
              const hasUpdate = typeof inst.update === 'function';
              const hasVelocityY = typeof inst.velocityY === 'number';
              const hasGravity = typeof inst.gravity === 'number';
              const hasJumpForce = typeof inst.jumpForce === 'number';

              if (!hasVelocityY || !hasGravity || !hasJumpForce) {
                message = "❌ 1-Talab: 'constructor()' ichida 'this.velocityY = 0;', 'this.gravity = 0.6;' va 'this.jumpForce = 12;' parametrlari e'lon qilinmadi!";
              } else if (!hasUpdate) {
                message = "❌ 2-Talab: Dino klassi ichida 'update()' metodi yozilmadi!";
              } else {
                isValid = true;
                message = "🎉 QOYILMAQOM! 60 FPS gravitatsiya fizikasi to'g'ri hisoblandi! Endi sakraganingizda dinozavr havoda haqiqiy parabola chizib yerga qaytadi!";
              }
            }
          }
          else if (currentStep === 7) {
            // 7-Qadam: checkCollision
            if (typeof exports.checkCollision !== 'function') {
              message = "❌ 2-Talab: 'checkCollision(dino, obstacle)' to'qnashuv funksiyasi topilmadi!";
            } else {
              const dummyDino = { x: 60, y: 0, width: 44, height: 48 };
              const hitObstacle = { x: 70, y: 0, width: 25, height: 46 };
              const missObstacle = { x: 300, y: 0, width: 25, height: 46 };

              const collidesWhenHit = exports.checkCollision(dummyDino, hitObstacle);
              const collidesWhenMiss = exports.checkCollision(dummyDino, missObstacle);

              if (collidesWhenHit !== true || collidesWhenMiss !== false) {
                message = "❌ AABB to'qnashuv matematikasi noto'g'ri ishlamoqda. 4 ta chegarani tekshiring: (dino.x < obs.x + obs.width && dino.x + dino.width > obs.x && dino.y < obs.y + obs.height && dino.y + dino.height > obs.y)";
              } else {
                isValid = true;
                message = "🏆 TABRIKLAYMIZ! Siz butun Chrome Dino o'yinini HTML, CSS va JavaScript Sinflari bilan NOLDAN O'Z QO'LINGIZ BILAN QURDINGIZ! Barcha to'siqlar va o'yin to'liq ishga tushdi!";
              }
            }
          }
        }

        // QAT'IY NATIJA:
        if (isValid) {`;

content = content.replace(oldValidationBlockRegex, newValidationBlock);
console.log('executeStudentCode validation block updated for 7 steps');

// Also update step-nav unlock condition inside if (isValid)
content = content.replace(
  /if \(currentStep < 5\) \{\s*document\.getElementById\('step-nav-' \+ \(currentStep \+ 1\)\)\.disabled = false;\s*\}/g,
  'if (currentStep < 7) {\n            document.getElementById(\'step-nav-\' + (currentStep + 1)).disabled = false;\n          }'
);

// 8. UPDATE JUMP, DUCK & OBSTACLES CHECKS (now in steps 5, 6, 7)
// In liveDino.jump:
content = content.replace(
  /if \(currentStep < 3 && !unlockedSteps\[currentStep\]\) return;/g,
  'if (currentStep < 5 && !unlockedSteps[currentStep]) return;'
);
// In liveDino.update:
content = content.replace(
  /if \(currentStep < 3\) return;/g,
  'if (currentStep < 5) return;'
);
// In obstacle spawn:
content = content.replace(
  /if \(currentStep >= 5 \|\| unlockedSteps\[4\]\) \{/g,
  'if (currentStep >= 7 || unlockedSteps[6]) {'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully wrote updated dino-game-darsi/index.html! New length:', content.length);
