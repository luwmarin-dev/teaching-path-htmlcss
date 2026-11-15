/**
 * JavaScript for Kids (CodeCraft JS) Curriculum
 * 24 Foundational, Intermediate, and Practical Topics
 * Bilingual (Uzbek & English), 100% Offline, Hands-On
 */

export const MODULES = [
  {
    id: 'mod-js-basics',
    title: { uz: "1. JS Boshlanishi va O'zgaruvchilar (1 - 6)", en: "1. JS Basics & Variables (Themes 1 - 6)" },
    color: '#3b82f6',
    icon: '🚀'
  },
  {
    id: 'mod-js-logic',
    title: { uz: "2. Mantiq, Shartlar va Funksiyalar (7 - 12)", en: "2. Logic, Conditions & Functions (Themes 7 - 12)" },
    color: '#10b981',
    icon: '🧠'
  },
  {
    id: 'mod-js-data',
    title: { uz: "3. Massivlar, Tsikllar va Obyektlar (13 - 18)", en: "3. Arrays, Loops & Objects (Themes 13 - 18)" },
    color: '#f59e0b',
    icon: '🎒'
  },
  {
    id: 'mod-js-dom',
    title: { uz: "4. Jonli Veb Sahifa va Mini-O'yinlar (19 - 24)", en: "4. Interactive DOM & Mini-Games (Themes 19 - 24)" },
    color: '#8b5cf6',
    icon: '🎮'
  }
];

export const LESSONS = [
  // THEME 1
  {
    id: 'js-1-console',
    module: 'mod-js-basics',
    icon: '💬',
    title: { uz: "1-Mavzu: console.log() va alert() — Salom Dunyo!", en: "Theme 1: console.log() & alert() — Hello World!" },
    concept: {
      uz: "JavaScript kompyuter bilan gaplashish tilidir. console.log() orqali maxfiy konsol oynasiga xabar chiqaramiz, alert() esa ekranda chiroyli xabar oynachasini ochadi.",
      en: "JavaScript is the language of computer action. console.log() prints messages to the secret developer console, while alert() pops up a friendly dialog."
    },
    humanLanguage: {
      uz: "Tasavvur qiling, kompyuter sizning buyruqlaringizni bajaruvchi robot. console.log('Salom!') desangiz, u o'z daftariga 'Salom!' deb yozadi.",
      en: "Imagine your computer is a robot eager to speak. Saying console.log('Hello!') tells the robot to write 'Hello!' in its developer notebook."
    },
    secretSandwich: {
      uz: "Sehrli formula: console.log('Sizning matningiz'); — doimo qavs () ichiga qo'shtirnoq '' bilan matn solasiz va oxiriga nuqta-vergul ; qo'yasiz!",
      en: "Magic formula: console.log('Your text'); — always wrap strings inside quotes '' and parentheses (), ending with a semicolon ;!"
    },
    stepBreakdown: [
      {
        part: "console.log()",
        explanation: { uz: "Konsolga chop etish buyrug'i", en: "Command to print to developer console" },
        visualResult: { uz: "Brauzer konsolida ko'rinadi", en: "Prints line in the console" }
      },
      {
        part: '"Salom, Dunyo!"',
        explanation: { uz: "Chiqarmoqchi bo'lgan matn (String)", en: "The message text string to output" },
        visualResult: { uz: "Ekranda matn paydo bo'ladi", en: "Text displays in output" }
      }
    ],
    tagShowcase: [
      { tag: 'console.log()', name: { uz: "Konsolga yozish", en: "Print to console" }, meaning: { uz: "Xabarlarni dasturchilar konsoliga chiqaradi", en: "Outputs message to console" } },
      { tag: 'alert()', name: { uz: "Ogohlantirish oynasi", en: "Alert Popup" }, meaning: { uz: "Ekranda qalqib chiquvchi oyna ochadi", en: "Shows popup window" } }
    ],
    mission: {
      uz: 'Konsolga "Salom, Dunyo!" xabarini console.log() orqali chiqaring.',
      en: 'Print "Salom, Dunyo!" or "Hello, World!" to the console using console.log().'
    },
    initialCode: '// 1-Mavzu: Salom Dunyo\n// Quyiga kodingizni yozing:\n',
    targetCode: 'console.log("Salom, Dunyo!");',
    hints: [
      { uz: 'console.log("Salom, Dunyo!"); deb yozing.', en: 'Type: console.log("Salom, Dunyo!");' }
    ],
    validate: (code) => {
      if (!/console\.log\s*\(/.test(code)) return { passed: false, message: "console.log() buyrug'idan foydalaning!" };
      if (!/["'`].+["'`]/.test(code)) return { passed: false, message: "Qo'shtirnoq ichiga matn kiriting!" };
      return { passed: true, message: "Ajoyib! Birinchi JavaScript kodingiz muvaffaqiyatli ishladi! 🎉" };
    }
  },

  // THEME 2
  {
    id: 'js-2-variables',
    module: 'mod-js-basics',
    icon: '📦',
    title: { uz: "2-Mavzu: let va const — Sehrli Qutilar (O'zgaruvchilar)", en: "Theme 2: let & const — Magic Boxes (Variables)" },
    concept: {
      uz: "O'zgaruvchi — bu kompyuter xotirasidagi nomlangan quti. let o'zgaruvchan quti (ballar, tangalar), const esa o'zgarmas quti (ism, tug'ilgan yil).",
      en: "A variable is a labeled storage box in memory. Use let for values that change (score, coins), and const for fixed constants (name, ID)."
    },
    humanLanguage: {
      uz: "O'yindagi tangalar soni o'zgarib turadi, shuning uchun let coins = 10; deymiz. O'yinchi ismi esa o'zgarmaydi: const name = 'Ali';",
      en: "Your score keeps increasing so you use let score = 100;. Your player hero name stays fixed so you use const hero = 'Knight';"
    },
    secretSandwich: {
      uz: "let qutiNomi = qiymat; — qutiga nom bering va unga istalgan narsani joylang.",
      en: "let boxName = value; — name your box and assign something into it."
    },
    stepBreakdown: [
      {
        part: "let score = 100;",
        explanation: { uz: "score nomli o'zgaruvchiga 100 sonini saqlash", en: "Storing number 100 in box named score" },
        visualResult: { uz: "Xotirada score: 100 paydo bo'ladi", en: "Memory holds score = 100" }
      },
      {
        part: 'const playerName = "Ali";',
        explanation: { uz: "O'zgarmas doimiy ism yaratish", en: "Creating a permanent constant string" },
        visualResult: { uz: 'playerName: "Ali" saqlanadi', en: "Memory holds fixed playerName" }
      }
    ],
    tagShowcase: [
      { tag: 'let', name: { uz: "O'zgaruvchan quti", en: "Mutable variable" }, meaning: { uz: "Qiymatini keyinroq o'zgartirish mumkin", en: "Value can change later" } },
      { tag: 'const', name: { uz: "Doimiy quti", en: "Constant variable" }, meaning: { uz: "Bir marta beriladi va o'zgarmaydi", en: "Fixed value that never changes" } }
    ],
    mission: {
      uz: "score nomli let o'zgaruvchi (100) va playerName nomli const o'zgaruvchi ('Ali') yarating.",
      en: "Create a let variable named score set to 100, and a const named playerName set to 'Ali'."
    },
    initialCode: '// 2-Mavzu: O\'zgaruvchilar\nlet score = 100;\n// playerName nomli const yarating:\n',
    targetCode: 'let score = 100;\nconst playerName = "Ali";\nconsole.log(playerName, score);',
    hints: [
      { uz: 'const playerName = "Ali"; deb yozing.', en: 'Write: const playerName = "Ali";' }
    ],
    validate: (code) => {
      if (!/let\s+score\s*=/.test(code)) return { passed: false, message: "let score = 100; yarating!" };
      if (!/const\s+playerName\s*=/.test(code)) return { passed: false, message: "const playerName = 'Ali'; yarating!" };
      return { passed: true, message: "Qoyil! O'zgaruvchi qutilar bilan ishlashni o'rgandingiz! 📦⭐" };
    }
  },

  // THEME 3
  {
    id: 'js-3-types',
    module: 'mod-js-basics',
    icon: '🏷️',
    title: { uz: "3-Mavzu: Ma'lumot Turlari — String, Number, Boolean", en: "Theme 3: Data Types — String, Number, Boolean" },
    concept: {
      uz: "JavaScriptda qutilar ichida har xil narsalar bo'lishi mumkin: Matn (String), Son (Number) va Rost/Yolg'on (Boolean: true/false).",
      en: "Variables can store different types of data: Text strings, numbers, and booleans (true/false switches)."
    },
    humanLanguage: {
      uz: "O'yinchi ismi matn: 'Super Ali'. O'yinchi bosqichi son: 5. O'yinchi tirikmi? Ha yoki yo'q: true yoki false.",
      en: "A hero name is text: 'Mega Knight'. Hero level is a number: 5. Is hero alive? Yes or No: true or false."
    },
    secretSandwich: {
      uz: "String: 'matn' | Number: 42 | Boolean: true yoki false",
      en: "String: 'text' | Number: 42 | Boolean: true or false"
    },
    stepBreakdown: [
      {
        part: 'let hero = "Botir";',
        explanation: { uz: "String (matnli ma'lumot)", en: "String type text" },
        visualResult: { uz: "Matn saqlanadi", en: "Text stored" }
      },
      {
        part: "let level = 5;",
        explanation: { uz: "Number (sonli ma'lumot)", en: "Number type integer" },
        visualResult: { uz: "Son saqlanadi", en: "Number stored" }
      },
      {
        part: "let isAlive = true;",
        explanation: { uz: "Boolean (ha/yo'q bayrog'i)", en: "Boolean flag true/false" },
        visualResult: { uz: "Mantiqiy holat saqlanadi", en: "Boolean state stored" }
      }
    ],
    tagShowcase: [
      { tag: 'String', name: { uz: "Matn turi", en: "String type" }, meaning: { uz: "Qo'shtirnoq ichidagi belgilar", en: "Characters inside quotes" } },
      { tag: 'Number', name: { uz: "Son turi", en: "Number type" }, meaning: { uz: "Butun yoki o'nli sonlar", en: "Integers or floating numbers" } },
      { tag: 'Boolean', name: { uz: "Mantiq turi", en: "Boolean type" }, meaning: { uz: "Faqat true yoki false bo'ladi", en: "Either true or false" } }
    ],
    mission: {
      uz: "hero (matn), level (son), va isAlive (true) o'zgaruvchilarini yarating.",
      en: "Create variables hero (string), level (number), and isAlive (boolean true)."
    },
    initialCode: 'let hero = "Botir";\nlet level = 5;\n// isAlive o\'zgaruvchisini true qilib qo\'shing:\n',
    targetCode: 'let hero = "Botir";\nlet level = 5;\nlet isAlive = true;\nconsole.log(hero, level, isAlive);',
    hints: [
      { uz: "let isAlive = true; deb yozing.", en: "Type: let isAlive = true;" }
    ],
    validate: (code) => {
      if (!/isAlive\s*=\s*true/.test(code)) return { passed: false, message: "isAlive = true deb yozing!" };
      return { passed: true, message: "Zo'r! Barcha ma'lumot turlarini to'g'ri qo'lladingiz! 🏷️✨" };
    }
  },

  // THEME 4
  {
    id: 'js-4-math',
    module: 'mod-js-basics',
    icon: '➕',
    title: { uz: "4-Mavzu: Matematik Amallar — Hisob-Kitob (+, -, *, /, %)", en: "Theme 4: Math Operators — Calculations (+, -, *, /, %)" },
    concept: {
      uz: "JavaScript ajoyib kalkulyatordir. + qo'shadi, - ayiradi, * ko'paytiradi, / bo'ladi va % qoldiqni topadi.",
      en: "JavaScript is a super calculator: + adds, - subtracts, * multiplies, / divides, and % gives remainder."
    },
    humanLanguage: {
      uz: "10 ta tangangiz bor edi, ajdahodan 5 ta yutib oldingiz: coins = coins + 5; Endi jami tangalarni 2 ga ko'paytiring!",
      en: "You had 10 coins, won 5 from a dragon: coins = coins + 5; Now multiply the total by 2!"
    },
    secretSandwich: {
      uz: "+ qo'shish | - ayirish | * ko'paytirish | / bo'lish | % qoldiq",
      en: "+ add | - subtract | * multiply | / divide | % modulo remainder"
    },
    stepBreakdown: [
      {
        part: "coins + 5",
        explanation: { uz: "Tangalarga 5 qo'shish", en: "Add 5 coins" },
        visualResult: { uz: "15 bo'ladi", en: "Becomes 15" }
      },
      {
        part: "coins * 2",
        explanation: { uz: "2 barobar ko'paytirish", en: "Double the coins" },
        visualResult: { uz: "30 bo'ladi", en: "Becomes 30" }
      }
    ],
    tagShowcase: [
      { tag: '+', name: { uz: "Qo'shish", en: "Addition" }, meaning: { uz: "Sonlarni qo'shadi", en: "Adds numbers" } },
      { tag: '*', name: { uz: "Ko'paytirish", en: "Multiplication" }, meaning: { uz: "Sonlarni ko'paytiradi", en: "Multiplies numbers" } }
    ],
    mission: {
      uz: "coins o'zgaruvchisiga 5 qo'shing va let total = coins * 2; hisoblang.",
      en: "Add 5 to coins, then calculate let total = coins * 2;."
    },
    initialCode: 'let coins = 10;\n// 5 ta tanga qo\'shing:\ncoins = coins + 5;\n// total ni coins * 2 deb hisoblang:\n',
    targetCode: 'let coins = 10;\ncoins = coins + 5;\nlet total = coins * 2;\nconsole.log(total);',
    hints: [
      { uz: "let total = coins * 2; deb yozing.", en: "Type: let total = coins * 2;" }
    ],
    validate: (code) => {
      if (!/total\s*=\s*coins\s*\*\s*2/.test(code)) return { passed: false, message: "let total = coins * 2; hisoblang!" };
      return { passed: true, message: "Mukammal! Hisob-kitoblar to'g'ri bajarildi! ➕⭐" };
    }
  },

  // THEME 5
  {
    id: 'js-5-strings',
    module: 'mod-js-basics',
    icon: '✨',
    title: { uz: "5-Mavzu: Sehrli Matnlar — Template Literals (`${}`)", en: "Theme 5: Template Literals — Magic Text (`${}`)" },
    concept: {
      uz: "Backtick (`) belgilari va ${o'zgaruvchi} yordamida matnlar ichiga o'zgaruvchilarni osonlik bilan joylashtirish mumkin.",
      en: "Using backticks (`) and ${variable}, you can embed variables cleanly inside any sentence."
    },
    humanLanguage: {
      uz: "Oldin 'Salom ' + name + '!' deb yozish qiyin edi. Endi esa: `Salom ${name}! Ball: ${score}` deb juda chiroyli yozamiz.",
      en: "Instead of clunky string concatenation, simply use: `Hello ${name}! You have ${score} stars!`."
    },
    secretSandwich: {
      uz: "`Matn ${o'zgaruvchi} davomi` — klaviaturadagi Esc tugmasi ostidagi ` belgisi.",
      en: "`Sentence ${variable} goes here` — use backticks ` below the Esc key."
    },
    stepBreakdown: [
      {
        part: "`...`",
        explanation: { uz: "Backtick matn chegarasi", en: "Backtick string wrapper" },
        visualResult: { uz: "Yagona matn yaratadi", en: "Creates interpolated string" }
      },
      {
        part: "${player}",
        explanation: { uz: "O'zgaruvchi qiymatini matn ichiga quyish", en: "Injects variable into string" },
        visualResult: { uz: "O'yinchining haqiqiy ismi chiqadi", en: "Outputs actual player name" }
      }
    ],
    tagShowcase: [
      { tag: '` `', name: { uz: "Backtick", en: "Backtick" }, meaning: { uz: "Ko'p qatorli va sehrli matn", en: "Template string literal" } },
      { tag: '${}', name: { uz: "Interpolatsiya", en: "Interpolation" }, meaning: { uz: "Matn ichiga o'zgaruvchini joylaydi", en: "Injects JS expression" } }
    ],
    mission: {
      uz: 'message o\'zgaruvchisiga `Salom, ${player}!` ko\'rinishida matn tuzing va konsolga chiqaring.',
      en: 'Create message = `Salom, ${player}!` using backticks and log it.'
    },
    initialCode: 'let player = "Sherzod";\n// message o\'zgaruvchisini backtick bilan tuzing:\n',
    targetCode: 'let player = "Sherzod";\nlet message = `Salom, ${player}!`;\nconsole.log(message);',
    hints: [
      { uz: 'let message = `Salom, ${player}!`; deb yozing.', en: 'Write: let message = `Salom, ${player}!`;' }
    ],
    validate: (code) => {
      if (!code.includes('`') || !code.includes('${player}')) return { passed: false, message: "Backtick (`) va ${player} dan foydalaning!" };
      return { passed: true, message: "Ajoyib sehrli matn! Buni bilish juda muhim! ✨" };
    }
  },

  // THEME 6
  {
    id: 'js-6-prompt',
    module: 'mod-js-basics',
    icon: '❓',
    title: { uz: "6-Mavzu: Foydalanuvchidan Ma'lumot Olish — prompt() va confirm()", en: "Theme 6: User Input — prompt() & confirm()" },
    concept: {
      uz: "prompt() foydalanuvchidan klaviatura orqali matn so'raydi, confirm() esa Ha/Yo'q (Ok/Cancel) tugmasini chiqaradi.",
      en: "prompt() asks the user to type in an answer, while confirm() asks a Yes/No question."
    },
    humanLanguage: {
      uz: "O'yin boshida qahramon nomini so'rash uchun prompt('Isming nima?') buyrug'i ishlatiladi.",
      en: "Ask the player's name at the start of a quest with prompt('What is your name?')."
    },
    secretSandwich: {
      uz: "let javob = prompt('Savol matni'); — olingan javob o'zgaruvchida saqlanadi.",
      en: "let answer = prompt('Question'); — store their answer in a variable."
    },
    stepBreakdown: [
      {
        part: 'prompt("Ismingiz?")',
        explanation: { uz: "Savol oynasini chiqarish", en: "Show question prompt" },
        visualResult: { uz: "Kiritish maydoni paydo bo'ladi", en: "Input box appears" }
      },
      {
        part: 'alert("Xush kelibsiz!")',
        explanation: { uz: "Salomlashish xabari", en: "Welcome popup" },
        visualResult: { uz: "Ekranda xabar chiqadi", en: "Displays popup alert" }
      }
    ],
    tagShowcase: [
      { tag: 'prompt()', name: { uz: "Matn kiritish oynasi", en: "Text Input Prompt" }, meaning: { uz: "Foydalanuvchidan javob oladi", en: "Gets input string" } },
      { tag: 'confirm()', name: { uz: "Tasdiqlash oynasi", en: "Confirm Dialog" }, meaning: { uz: "Ok yoki Cancel qaytaradi (true/false)", en: "Returns true or false" } }
    ],
    mission: {
      uz: 'userName o\'zgaruvchisiga prompt("Ismingiz?") natijasini oling va alert("Xush kelibsiz!") chiqaring.',
      en: 'Store prompt("Ismingiz?") in userName and call alert("Xush kelibsiz!").'
    },
    initialCode: '// 6-Mavzu: prompt va alert\nlet userName = prompt("Ismingiz nima?");\n// alert bilan salom bering:\n',
    targetCode: 'let userName = prompt("Ismingiz nima?");\nalert("Xush kelibsiz!");',
    hints: [
      { uz: 'alert("Xush kelibsiz!"); deb yozing.', en: 'Type: alert("Xush kelibsiz!");' }
    ],
    validate: (code) => {
      if (!/prompt\s*\(/.test(code)) return { passed: false, message: "prompt() dan foydalaning!" };
      if (!/alert\s*\(/.test(code)) return { passed: false, message: "alert() dan foydalaning!" };
      return { passed: true, message: "Super! Foydalanuvchi bilan muloqot qilishni o'rgandingiz! ❓🎉" };
    }
  },

  // THEME 7
  {
    id: 'js-7-if-else',
    module: 'mod-js-logic',
    icon: '🔀',
    title: { uz: "7-Mavzu: Shartlar — if va else (Qarorlar Qabul Qilish)", en: "Theme 7: Conditions — if & else (Decision Making)" },
    concept: {
      uz: "Kompyuter ham xuddi biz kabi qaror qabul qiladi. Agar (if) shart to'g'ri bo'lsa bitta ishni, aks holda (else) boshqa ishni bajaradi.",
      en: "The if statement lets your code branch: if a condition is true do this, else do that."
    },
    humanLanguage: {
      uz: "Agar yomg'ir yog'sa — soyabon ol. Aks holda — ko'zoynak taq. Dasturlashda bu if va else dir!",
      en: "If score >= 10: Winner! Else: Try again! This is the foundation of game logic."
    },
    secretSandwich: {
      uz: "if (shart) { ... } else { ... } — shart doimo qavs () ichida, harakatlar esa jingalak qavs {} ichida bo'ladi.",
      en: "if (condition) { ... } else { ... } — conditions in (), action block in {}."
    },
    stepBreakdown: [
      {
        part: "if (score >= 10)",
        explanation: { uz: "Shartni tekshirish", en: "Evaluate condition" },
        visualResult: { uz: "Rost bo'lsa if bloki ishlaydi", en: "Executes block if true" }
      },
      {
        part: "else { ... }",
        explanation: { uz: "Aks holda ishlovchi blok", en: "Fallback block" },
        visualResult: { uz: "Yolg'on bo'lsa else bloki ishlaydi", en: "Executes if false" }
      }
    ],
    tagShowcase: [
      { tag: 'if', name: { uz: "Agar sharti", en: "If statement" }, meaning: { uz: "Shart rost bo'lsa kodni yurgizadi", en: "Runs if true" } },
      { tag: 'else', name: { uz: "Aks holda", en: "Else statement" }, meaning: { uz: "Shart yolg'on bo'lsa yurgizadi", en: "Runs if false" } }
    ],
    mission: {
      uz: 'if (score >= 10) bo\'lsa "G\'alaba!", aks holda "Davom eting!" deb konsolga chiqaring.',
      en: 'If score >= 10 log "G\'alaba!", else log "Davom eting!".'
    },
    initialCode: 'let score = 12;\nif (score >= 10) {\n  console.log("G\'alaba!");\n} else {\n  // else qismiga yozing:\n}\n',
    targetCode: 'let score = 12;\nif (score >= 10) {\n  console.log("G\'alaba!");\n} else {\n  console.log("Davom eting!");\n}',
    hints: [
      { uz: 'else blokiga console.log("Davom eting!"); deb yozing.', en: 'Inside else write: console.log("Davom eting!");' }
    ],
    validate: (code) => {
      if (!/if\s*\([^)]+\)/.test(code)) return { passed: false, message: "if shartini yozing!" };
      if (!/else\s*\{/.test(code)) return { passed: false, message: "else blokini yozing!" };
      return { passed: true, message: "Qaror qabul qilish mexanizmi tayyor! 🔀⭐" };
    }
  },

  // THEME 8
  {
    id: 'js-8-comparison',
    module: 'mod-js-logic',
    icon: '⚖️',
    title: { uz: "8-Mavzu: Taqqoslash va Mantiq — ===, >, <, &&, ||", en: "Theme 8: Comparisons & Logic — ===, >, <, &&, ||" },
    concept: {
      uz: "=== aynan tenglikni tekshiradi. && (VA) ikkala shart ham to'g'ri bo'lishini talab qiladi, || (YOKI) esa kamida bittasi to'g'ri bo'lsa kifoya.",
      en: "=== checks strict equality. && (AND) requires both sides to be true, while || (OR) requires at least one."
    },
    humanLanguage: {
      uz: "Xazinani ochish uchun: kalit bor bo'lishi kerak VA daraja 2 dan katta bo'lishi kerak (hasKey && level >= 2).",
      en: "To unlock the vault: must have key AND level >= 2 (hasKey && level >= 2)."
    },
    secretSandwich: {
      uz: "&& = Ikkalasi ham rost bo'lsin | || = Bittasi rost bo'lsa yetadi | === = Tengmi?",
      en: "&& = Both must be true | || = Either can be true | === = Exactly equal"
    },
    stepBreakdown: [
      {
        part: "hasKey === true",
        explanation: { uz: "Kalit borligini tekshirish", en: "Check if key is held" },
        visualResult: { uz: "true yoki false beradi", en: "Yields boolean" }
      },
      {
        part: "&& level >= 2",
        explanation: { uz: "VA daraja kamida 2 bo'lsin", en: "AND level is at least 2" },
        visualResult: { uz: "Ikkala shart tekshiriladi", en: "Both verified" }
      }
    ],
    tagShowcase: [
      { tag: '&&', name: { uz: "Mantiqiy VA", en: "Logical AND" }, meaning: { uz: "Har ikki shart ham rost bo'lishi shart", en: "Both conditions required" } },
      { tag: '||', name: { uz: "Mantiqiy YOKI", en: "Logical OR" }, meaning: { uz: "Kamida bitta shart rost bo'lsa kifoya", en: "Either condition suffices" } }
    ],
    mission: {
      uz: 'hasKey === true && level >= 2 shartini if orqali tekshirib "Eshik ochildi!" deb chiqaring.',
      en: 'Check if (hasKey === true && level >= 2) and log "Eshik ochildi!".'
    },
    initialCode: 'let hasKey = true;\nlet level = 3;\n// if da && operatoridan foydalaning:\n',
    targetCode: 'let hasKey = true;\nlet level = 3;\nif (hasKey === true && level >= 2) {\n  console.log("Eshik ochildi!");\n}',
    hints: [
      { uz: 'if (hasKey === true && level >= 2) deb yozing.', en: 'Write: if (hasKey === true && level >= 2)' }
    ],
    validate: (code) => {
      if (!/&&/.test(code)) return { passed: false, message: "&& (VA) operatoridan foydalaning!" };
      return { passed: true, message: "Mantiqiy taqqoslash to'g'ri ishlamoqda! ⚖️🚪" };
    }
  },

  // THEME 9
  {
    id: 'js-9-else-if',
    module: 'mod-js-logic',
    icon: '🚥',
    title: { uz: "9-Mavzu: Ko'p Shartli Tanlov — else if (Baholash Tizimi)", en: "Theme 9: Multiple Branches — else if (Grading System)" },
    concept: {
      uz: "Agar tanlovlar 2 tadan ko'p bo'lsa, else if yordamida zanjirli shartlar tuzamiz: 90 dan oshsa A'lo, 70 dan oshsa Yaxshi, aks holda Harakat qiling.",
      en: "When you have three or more outcomes, chain them with else if: >90 Great, >70 Good, else Keep Trying."
    },
    humanLanguage: {
      uz: "Svetafor: Qizil bo'lsa — to'xta. Sariq bo'lsa — tayyorlan. Yashil bo'lsa — yur. Buni else if bilan kodlaymiz!",
      en: "Traffic light: If red stop, else if yellow wait, else if green go."
    },
    secretSandwich: {
      uz: "if (...) { } else if (...) { } else { }",
      en: "if (...) { } else if (...) { } else { }"
    },
    stepBreakdown: [
      {
        part: "else if (grade >= 70)",
        explanation: { uz: "Ikkinchi ehtimoliy shart", en: "Second possible branch" },
        visualResult: { uz: "Birinchi shart bajarilmasa tekshiradi", en: "Checked if first fails" }
      }
    ],
    tagShowcase: [
      { tag: 'else if', name: { uz: "Yana bir shart", en: "Else If" }, meaning: { uz: "Qo'shimcha shartlarni tekshiradi", en: "Additional branch condition" } }
    ],
    mission: {
      uz: 'grade 90 dan katta bo\'lsa "A\'lo!", 70 dan katta bo\'lsa "Yaxshi!" deb else if yordamida yozing.',
      en: 'Use else if to check if grade >= 90 log "A\'lo!", else if grade >= 70 log "Yaxshi!".'
    },
    initialCode: 'let grade = 85;\nif (grade >= 90) {\n  console.log("A\'lo!");\n} else if (grade >= 70) {\n  // Shu yerga yozing:\n}\n',
    targetCode: 'let grade = 85;\nif (grade >= 90) {\n  console.log("A\'lo!");\n} else if (grade >= 70) {\n  console.log("Yaxshi!");\n}',
    hints: [
      { uz: 'else if ichiga console.log("Yaxshi!"); yozing.', en: 'Inside else if write: console.log("Yaxshi!");' }
    ],
    validate: (code) => {
      if (!/else\s+if/.test(code)) return { passed: false, message: "else if operatoridan foydalaning!" };
      return { passed: true, message: "Ko'p shartli zanjir bekamu-ko'st ishlamoqda! 🚥🎉" };
    }
  },

  // THEME 10
  {
    id: 'js-10-functions',
    module: 'mod-js-logic',
    icon: '🪄',
    title: { uz: "10-Mavzu: Funksiyalar — Qayta Ishlatiluvchi Sehrli Buyruqlar", en: "Theme 10: Functions — Reusable Magic Spells" },
    concept: {
      uz: "Funksiya — bu bitta nom ostida saqlangan buyruqlar to'plami. Uni bir marta yozib, ming marta chaqirib ishlatish mumkin!",
      en: "A function is a packaged magic spell. Write the steps once, then cast it whenever you need by name!"
    },
    humanLanguage: {
      uz: "Har safar sakrash uchun 10 qator kod yozmaysiz. jump() degan bitta funksiya tuzib, kerak bo'lganda chaqirasiz.",
      en: "Instead of re-writing 10 lines to jump, create function jump() and call it anytime."
    },
    secretSandwich: {
      uz: "function nom() { buyruqlar } va chaqirish: nom();",
      en: "function name() { code } and invoke: name();"
    },
    stepBreakdown: [
      {
        part: "function sayHello()",
        explanation: { uz: "Funksiya nomini e'lon qilish", en: "Declare function name" },
        visualResult: { uz: "Sehrli buyruq xotiraga kiritiladi", en: "Function defined in memory" }
      },
      {
        part: "sayHello();",
        explanation: { uz: "Funksiyani chaqirish va ishga tushirish", en: "Invoke and execute function" },
        visualResult: { uz: "Ichidagi barcha kodlar bajariladi", en: "Runs the function body" }
      }
    ],
    tagShowcase: [
      { tag: 'function', name: { uz: "Funksiya kalit so'zi", en: "Function Keyword" }, meaning: { uz: "Yangi funksiya e'lon qiladi", en: "Declares a reusable function" } },
      { tag: '()', name: { uz: "Chaqirish qavslari", en: "Invocation Parentheses" }, meaning: { uz: "Funksiyani darhol ishga tushiradi", en: "Triggers the function execution" } }
    ],
    mission: {
      uz: "sayHello nomli funksiya yarating va uni sayHello(); deb chaqiring.",
      en: "Declare function sayHello() that logs a message, and call it."
    },
    initialCode: '// 10-Mavzu: Funksiya\nfunction sayHello() {\n  console.log("Salom, Dasturchi!");\n}\n// Funksiyani chaqiring:\n',
    targetCode: 'function sayHello() {\n  console.log("Salom, Dasturchi!");\n}\nsayHello();',
    hints: [
      { uz: "sayHello(); deb yozing.", en: "Write: sayHello();" }
    ],
    validate: (code) => {
      if (!/function\s+sayHello\s*\(/.test(code)) return { passed: false, message: "function sayHello() yarating!" };
      if (!/sayHello\s*\(\s*\)/.test(code)) return { passed: false, message: "sayHello() deb chaqiring!" };
      return { passed: true, message: "Sehrli funksiyangiz muvaffaqiyatli ishga tushdi! 🪄⭐" };
    }
  },

  // THEME 11
  {
    id: 'js-11-params-return',
    module: 'mod-js-logic',
    icon: '📥',
    title: { uz: "11-Mavzu: Parametrlar va Natija Qaytarish (return)", en: "Theme 11: Parameters & Return Values" },
    concept: {
      uz: "Funksiyaga ma'lumot berib yuborish mumkin (parametrlar: a, b), va funksiya natijani orqaga qaytarishi mumkin (return).",
      en: "Functions can take input ingredients (parameters) and return a cooked result back using return."
    },
    humanLanguage: {
      uz: "Sharbat chiqargichga olma solsangiz (parametr), u sizga olma sharbati qaytaradi (return).",
      en: "A juice maker takes oranges (input parameters) and returns fresh orange juice (return)."
    },
    secretSandwich: {
      uz: "function add(a, b) { return a + b; }",
      en: "function add(a, b) { return a + b; }"
    },
    stepBreakdown: [
      {
        part: "(a, b)",
        explanation: { uz: "Funksiya qabul qiladigan parametrlar", en: "Input parameters" },
        visualResult: { uz: "Ichkariga uzatiladi", en: "Passed into function" }
      },
      {
        part: "return a + b;",
        explanation: { uz: "Natijani chaqiruvchiga qaytarish", en: "Return the computed sum" },
        visualResult: { uz: "Natija hosil bo'ladi", en: "Returns the value" }
      }
    ],
    tagShowcase: [
      { tag: 'return', name: { uz: "Qaytarish buyrug'i", en: "Return statement" }, meaning: { uz: "Funksiyadan natija qaytaradi va uni tugatadi", en: "Sends value back to caller" } }
    ],
    mission: {
      uz: "add(a, b) funksiyasi ichida return a + b; qiling va let result = add(10, 20); deb chaqiring.",
      en: "Return a + b in function add(a, b) and assign let result = add(10, 20);."
    },
    initialCode: 'function add(a, b) {\n  // Natijani qaytaring:\n}\nlet result = add(10, 20);\nconsole.log(result);',
    targetCode: 'function add(a, b) {\n  return a + b;\n}\nlet result = add(10, 20);\nconsole.log(result);',
    hints: [
      { uz: "return a + b; deb yozing.", en: "Write: return a + b;" }
    ],
    validate: (code) => {
      if (!/return\s+a\s*\+\s*b/.test(code)) return { passed: false, message: "return a + b; deb yozing!" };
      return { passed: true, message: "Juda puxta! Parametr va return bilan ishlashni o'zlashtirdingiz! 📥💎" };
    }
  },

  // THEME 12
  {
    id: 'js-12-arrow-functions',
    module: 'mod-js-logic',
    icon: '🏹',
    title: { uz: "12-Mavzu: Arrow Funksiyalar — Zamonaviy Qisqa Yozuv (() => {})", en: "Theme 12: Arrow Functions — Modern Syntax (() => {})" },
    concept: {
      uz: "Zamonaviy JavaScriptda funksiyalarni kamon o'qi ko'rinishida => qisqa va chiroyli yozish mumkin.",
      en: "Arrow functions give you a sleek, concise syntax using the fat arrow operator =>."
    },
    humanLanguage: {
      uz: "function so'zini yozish o'rniga (n) => n * 2 deb juda tez va chiroyli yozamiz.",
      en: "Instead of typing the long word function, write (n) => n * 2 like a ninja."
    },
    secretSandwich: {
      uz: "const nom = (parametr) => natija;",
      en: "const name = (param) => result;"
    },
    stepBreakdown: [
      {
        part: "=>",
        explanation: { uz: "Arrow (kamon o'qi) operatori", en: "Fat arrow operator" },
        visualResult: { uz: "Qisqa funksiya hosil qiladi", en: "Produces concise function" }
      }
    ],
    tagShowcase: [
      { tag: '=>', name: { uz: "Arrow operatori", en: "Arrow operator" }, meaning: { uz: "Yangi ixcham funksiya sintaksisi", en: "Concise function token" } }
    ],
    mission: {
      uz: "const double = (n) => n * 2; arrow funksiyasini yozing va konsolga double(5) ni chiqaring.",
      en: "Write const double = (n) => n * 2; and log double(5)."
    },
    initialCode: '// 12-Mavzu: Arrow Funksiya\n// double nomli arrow funksiya yozing:\n',
    targetCode: 'const double = (n) => n * 2;\nconsole.log(double(5));',
    hints: [
      { uz: "const double = (n) => n * 2; deb yozing.", en: "Type: const double = (n) => n * 2;" }
    ],
    validate: (code) => {
      if (!/=>/.test(code)) return { passed: false, message: "=> arrow belgisidan foydalaning!" };
      if (!/double/.test(code)) return { passed: false, message: "double nomli funksiya yarating!" };
      return { passed: true, message: "Kamon o'qi kabi tezkor! Arrow funksiyalar bo'yicha mutaxassissiz! 🏹⚡" };
    }
  },

  // THEME 13
  {
    id: 'js-13-arrays',
    module: 'mod-js-data',
    icon: '🎒',
    title: { uz: "13-Mavzu: Massivlar — Sehrli Ryukzak va Ro'yxatlar ([])", en: "Theme 13: Arrays — Magic Inventory & Lists ([])" },
    concept: {
      uz: "Massiv (Array) — bu bitta o'zgaruvchi ichida ko'plab buyumlarni ro'yxat qilib saqlash usulidir. Kvadrat qavs [] bilan yoziladi.",
      en: "An array stores a list of items inside square brackets []. Each item has a position index starting from 0."
    },
    humanLanguage: {
      uz: "O'yindagi ryukzagingizda: ['Qilich', 'Qalqon', 'Sehrli Idish'] bor. Birinchisi doimo 0-raqamdan boshlanadi: ryukzak[0] = 'Qilich'!",
      en: "In your gamer backpack: ['Sword', 'Shield', 'Potion']. Arrays count starting at 0: backpack[0] is 'Sword'!"
    },
    secretSandwich: {
      uz: "let ro'yxat = [1-element, 2-element, 3-element]; va chaqirish: ro'yxat[0]",
      en: "let list = ['item1', 'item2', 'item3']; and access: list[0]"
    },
    stepBreakdown: [
      {
        part: '["Qilich", "Qalqon"]',
        explanation: { uz: "Kvadrat qavs ichidagi ro'yxat", en: "List elements inside brackets" },
        visualResult: { uz: "Xotirada tartiblangan ro'yxat", en: "Ordered list in memory" }
      },
      {
        part: "inventory[0]",
        explanation: { uz: "Nolinchi (birinchi) elementni olish", en: "Get first element at index 0" },
        visualResult: { uz: '"Qilich" qiymati olinadi', en: 'Retrieves "Qilich"' }
      }
    ],
    tagShowcase: [
      { tag: '[]', name: { uz: "Kvadrat qavslar", en: "Square Brackets" }, meaning: { uz: "Massiv yaratadi va indeks bo'yicha oladi", en: "Defines array and accesses index" } },
      { tag: '.length', name: { uz: "Uzunlik xususiyati", en: "Length property" }, meaning: { uz: "Massivda nechta element borligini aytadi", en: "Counts total elements" } }
    ],
    mission: {
      uz: "inventory nomli massiv tuzing va console.log(inventory[0]); qilib birinchi buyumni chiqaring.",
      en: "Create an inventory array with 3 items and log inventory[0]."
    },
    initialCode: 'let inventory = ["Qilich", "Qalqon", "Sehrli Idish"];\n// Birinchi elementni konsolga chiqaring:\n',
    targetCode: 'let inventory = ["Qilich", "Qalqon", "Sehrli Idish"];\nconsole.log(inventory[0]);',
    hints: [
      { uz: "console.log(inventory[0]); deb yozing.", en: "Write: console.log(inventory[0]);" }
    ],
    validate: (code) => {
      if (!/\[.*?\]/.test(code)) return { passed: false, message: "[] massiv qavslarini yozing!" };
      if (!/inventory\s*\[\s*0\s*\]/.test(code)) return { passed: false, message: "inventory[0] orqali birinchi elementni oling!" };
      return { passed: true, message: "Zo'r! Birinchi massivingiz va uning 0-indeksini zabt etdingiz! 🎒⭐" };
    }
  },

  // THEME 14
  {
    id: 'js-14-array-methods',
    module: 'mod-js-data',
    icon: '🛠️',
    title: { uz: "14-Mavzu: Massiv Metodlari — push() va pop() (Qo'shish va Olish)", en: "Theme 14: Array Methods — push() & pop()" },
    concept: {
      uz: "push() massivning oxiriga yangi buyum qo'shadi, pop() esa oxirgi buyumni sug'urib oladi.",
      en: "push() adds a new item to the end of your list, while pop() removes the last item."
    },
    humanLanguage: {
      uz: "Ryukzakka yangi qurol topib soldingiz: inventory.push('Kamon'). Bitta o'q ishlatdingiz: inventory.pop().",
      en: "You looted a bow: inventory.push('Bow'). You fired your last arrow: arrows.pop()."
    },
    secretSandwich: {
      uz: "massiv.push('yangi'); — qo'shish | massiv.pop(); — oxirgisini olish",
      en: "array.push('new'); — append | array.pop(); — remove last"
    },
    stepBreakdown: [
      {
        part: '.push("Robot")',
        explanation: { uz: "Oxiriga yangi element qo'shadi", en: "Appends item to array end" },
        visualResult: { uz: "Massiv kattalashadi", en: "Array size expands" }
      }
    ],
    tagShowcase: [
      { tag: '.push()', name: { uz: "Qo'shish metodi", en: "Push method" }, meaning: { uz: "Oxiriga element qo'shadi", en: "Adds item to end" } },
      { tag: '.pop()', name: { uz: "Olib tashlash metodi", en: "Pop method" }, meaning: { uz: "Oxirgi elementni o'chiradi", en: "Removes last item" } }
    ],
    mission: {
      uz: 'toys massiviga toys.push("Robot"); qilib yangi o\'yinchoq qo\'shing va toys.length ni chiqaring.',
      en: 'Add "Robot" to toys using toys.push("Robot"); and log toys.length.'
    },
    initialCode: 'let toys = ["Mashina", "Koptok"];\n// push yordamida "Robot" qo\'shing:\n',
    targetCode: 'let toys = ["Mashina", "Koptok"];\ntoys.push("Robot");\nconsole.log(toys.length);',
    hints: [
      { uz: 'toys.push("Robot"); deb yozing.', en: 'Write: toys.push("Robot");' }
    ],
    validate: (code) => {
      if (!/toys\.push\s*\(/.test(code)) return { passed: false, message: "toys.push() dan foydalaning!" };
      return { passed: true, message: "Ajoyib! Massivga yangi element qo'shildi! 🛠️🎉" };
    }
  },

  // THEME 15
  {
    id: 'js-15-for-loop',
    module: 'mod-js-data',
    icon: '🔁',
    title: { uz: "15-Mavzu: Takrorlash Mashinasi — for Tsikli", en: "Theme 15: Repetition Machine — The for Loop" },
    concept: {
      uz: "Bir xil ishni 100 marta qo'lda yozmaysiz. for tsikli kompyuterga bir necha qator kodni kerakli martagacha chaqmoqdek tez takrorlatadi.",
      en: "Never write repetitive code by hand. The for loop repeats code as many times as you command in milliseconds."
    },
    humanLanguage: {
      uz: "Stadionda 5 marta yugurish: 1-aylana, 2-aylana, 3-aylana... for (let i = 1; i <= 5; i++) xuddi shu sanagichdir!",
      en: "Running 5 laps around the track: 1, 2, 3, 4, 5. for (let i = 1; i <= 5; i++) does the exact lap counting!"
    },
    secretSandwich: {
      uz: "for (boshlanish; shart; qadam) { takrorlanuvchi kod }",
      en: "for (start; condition; step) { code to repeat }"
    },
    stepBreakdown: [
      {
        part: "let i = 1;",
        explanation: { uz: "Sanagichning boshlanishi", en: "Loop counter starting point" },
        visualResult: { uz: "i = 1 bo'ladi", en: "i begins at 1" }
      },
      {
        part: "i <= 5;",
        explanation: { uz: "Takrorlanish chegarasi", en: "Loop limit condition" },
        visualResult: { uz: "5 ga yetguncha aylanadi", en: "Runs until 5" }
      },
      {
        part: "i++",
        explanation: { uz: "Har aylanganda i ga 1 qo'shish", en: "Increment i by 1 each lap" },
        visualResult: { uz: "1, 2, 3, 4, 5 bo'lib oshadi", en: "Steps forward" }
      }
    ],
    tagShowcase: [
      { tag: 'for', name: { uz: "For tsikli", en: "For loop" }, meaning: { uz: "Belgilangan miqdorda takrorlaydi", en: "Repeats code for set counts" } },
      { tag: 'i++', name: { uz: "Inkrement (1 qo'shish)", en: "Increment operator" }, meaning: { uz: "Sanagichni bittaga oshiradi", en: "Adds 1 to number" } }
    ],
    mission: {
      uz: "for tsikli yordamida 1 dan 5 gacha sonlarni console.log(i); qilib konsolga chiqaring.",
      en: "Use a for loop to log numbers from 1 to 5."
    },
    initialCode: '// 15-Mavzu: for tsikli\n// 1 dan 5 gacha sanang:\n',
    targetCode: 'for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}',
    hints: [
      { uz: "for (let i = 1; i <= 5; i++) { console.log(i); } deb yozing.", en: "Type: for (let i = 1; i <= 5; i++) { console.log(i); }" }
    ],
    validate: (code) => {
      if (!/for\s*\(/.test(code)) return { passed: false, message: "for tsiklini yozing!" };
      if (!/i\+\+/.test(code) && !/i\s*\+=\s*1/.test(code)) return { passed: false, message: "i++ inkrementidan foydalaning!" };
      return { passed: true, message: "Ajoyib takrorlash mashinasi! 5 ta qadam sanaldi! 🔁⭐" };
    }
  },

  // THEME 16
  {
    id: 'js-16-while-loop',
    module: 'mod-js-data',
    icon: '⏳',
    title: { uz: "16-Mavzu: Shartli Takrorlash — while Tsikli", en: "Theme 16: Conditional Repetition — The while Loop" },
    concept: {
      uz: "while tsikli 'modomiki shart to'g'ri ekan, takrorla' degan ma'noni beradi. Masalan, energiyamiz bor ekan, yuguramiz.",
      en: "The while loop runs as long as its condition holds true: while (energy > 0) keep running!"
    },
    humanLanguage: {
      uz: "Telefon quvvati 0 dan katta ekan, o'yin o'ynayverasiz. Har daqiqada quvvat 1 taga kamayadi: battery--.",
      en: "As long as battery > 0, your game continues. Each round battery decreases by 1."
    },
    secretSandwich: {
      uz: "while (shart) { kod; shartni_o'zgartirish; } — diqqat: o'zgaruvchini kamaytirishni unutmang!",
      en: "while (condition) { code; update; } — always change state to avoid infinite freezes!"
    },
    stepBreakdown: [
      {
        part: "while (energy > 0)",
        explanation: { uz: "Energiya borligini tekshirish", en: "Check remaining energy" },
        visualResult: { uz: "0 bo'lganda to'xtaydi", en: "Stops when 0" }
      },
      {
        part: "energy--;",
        explanation: { uz: "Energiyani 1 taga kamaytirish", en: "Decrease energy by 1" },
        visualResult: { uz: "Energiya kamayib boradi", en: "Counts down" }
      }
    ],
    tagShowcase: [
      { tag: 'while', name: { uz: "While tsikli", en: "While loop" }, meaning: { uz: "Shart rost bo'lguncha aylanadi", en: "Runs while condition is true" } },
      { tag: '--', name: { uz: "Dekrement (1 ayirish)", en: "Decrement operator" }, meaning: { uz: "Sonni bittaga kamaytiradi", en: "Subtracts 1" } }
    ],
    mission: {
      uz: "while (energy > 0) tsiklida console.log(energy); chiqaring va energy--; bilan kamaytiring.",
      en: "In a while loop log energy and decrease it with energy--;."
    },
    initialCode: 'let energy = 3;\nwhile (energy > 0) {\n  // energy ni chiqaring va kamaytiring:\n}\n',
    targetCode: 'let energy = 3;\nwhile (energy > 0) {\n  console.log(energy);\n  energy--;\n}',
    hints: [
      { uz: "console.log(energy); energy--; deb yozing.", en: "Write: console.log(energy); energy--;" }
    ],
    validate: (code) => {
      if (!/while\s*\(/.test(code)) return { passed: false, message: "while tsiklidan foydalaning!" };
      if (!/energy--/.test(code) && !/energy\s*-=\s*1/.test(code)) return { passed: false, message: "energy--; bilan qiymatni kamaytiring!" };
      return { passed: true, message: "Vaqt va shartlar bo'yicha mukammal tsikl tuzildi! ⏳🎉" };
    }
  },

  // THEME 17
  {
    id: 'js-17-objects',
    module: 'mod-js-data',
    icon: '👤',
    title: { uz: "17-Mavzu: Obyektlar — Qahramon Xususiyatlari ({})", en: "Theme 17: Objects — Hero Character Sheets ({})" },
    concept: {
      uz: "Obyekt — bu bitta narsaning barcha xususiyatlarini (nomi, kuchi, joni) bitta joyda jingalak qavs {} ichida saqlashdir.",
      en: "An object packs key-value properties describing a real-world entity inside curly braces {}."
    },
    humanLanguage: {
      uz: "RPG o'yindagi qahramoningiz: { name: 'Alpomish', hp: 100, power: 50 }. Jonini bilmoqchimisiz? hero.hp deysiz!",
      en: "Your superhero profile: { name: 'Flash', speed: 999, hp: 100 }. Access speed with hero.speed!"
    },
    secretSandwich: {
      uz: "let obyekt = { kalit: 'qiymat', son: 10 }; va chaqirish: obyekt.kalit",
      en: "let obj = { key: 'value', num: 10 }; and access: obj.key"
    },
    stepBreakdown: [
      {
        part: '{ name: "Alpomish" }',
        explanation: { uz: "Kalit va qiymat juftligi", en: "Key-value property" },
        visualResult: { uz: "Obyekt xossasi saqlanadi", en: "Property saved" }
      },
      {
        part: "hero.name",
        explanation: { uz: "Nuqta orqali xususiyatni o'qish", en: "Dot notation property access" },
        visualResult: { uz: '"Alpomish" chiqadi', en: 'Reads "Alpomish"' }
      }
    ],
    tagShowcase: [
      { tag: '{}', name: { uz: "Jingalak qavslar", en: "Curly Braces" }, meaning: { uz: "Yangi obyekt yaratadi", en: "Creates an object literal" } },
      { tag: '.', name: { uz: "Nuqta operatori", en: "Dot operator" }, meaning: { uz: "Obyekt ichidagi xususiyatni chaqiradi", en: "Accesses object properties" } }
    ],
    mission: {
      uz: "hero obyektida name, hp (100), va power (50) xususiyatlarini yarating va console.log(hero.name); qiling.",
      en: "Create a hero object with name, hp, power properties and log hero.name."
    },
    initialCode: 'let hero = {\n  name: "Alpomish",\n  hp: 100,\n  power: 50\n};\n// Qahramon nomini konsolga chiqaring:\n',
    targetCode: 'let hero = {\n  name: "Alpomish",\n  hp: 100,\n  power: 50\n};\nconsole.log(hero.name);',
    hints: [
      { uz: "console.log(hero.name); deb yozing.", en: "Type: console.log(hero.name);" }
    ],
    validate: (code) => {
      if (!/hero\s*=\s*\{/.test(code)) return { passed: false, message: "hero obyektini yarating!" };
      if (!/hero\.name/.test(code)) return { passed: false, message: "hero.name orqali nomni chaqiring!" };
      return { passed: true, message: "Super qahramon pasporti tayyor! Obyektlar ajoyib! 👤💎" };
    }
  },

  // THEME 18
  {
    id: 'js-18-array-objects',
    module: 'mod-js-data',
    icon: '🏪',
    title: { uz: "18-Mavzu: O'yin Do'koni — Obyektlar Massivi", en: "Theme 18: Game Shop — Array of Objects" },
    concept: {
      uz: "Massiv va Obyektlarni birlashtirsak, butun boshli o'yin do'koni yoki maktab o'quvchilari bazasini yaratishimiz mumkin!",
      en: "Combining arrays and objects lets you build real databases like a Game Shop or Student Directory."
    },
    humanLanguage: {
      uz: "Do'konda ko'plab mahsulotlar bor. Har bir mahsulot bitta obyekt: [{ name: 'Olma', price: 5 }, { name: 'Suv', price: 2 }].",
      en: "An inventory of items: each shop item is an object inside one parent list array."
    },
    secretSandwich: {
      uz: "let shop = [ { name: '...', price: ... }, { name: '...', price: ... } ];",
      en: "let shop = [ { name: '...', price: ... }, { name: '...', price: ... } ];"
    },
    stepBreakdown: [
      {
        part: "shop[0].name",
        explanation: { uz: "Birinchi mahsulotning nomini olish", en: "Access name of first shop item" },
        visualResult: { uz: '"Olma" qiymati olinadi', en: 'Returns "Olma"' }
      }
    ],
    tagShowcase: [
      { tag: '[{}]', name: { uz: "Obyektlar massivi", en: "Array of objects" }, meaning: { uz: "Murakkab ma'lumotlar to'plami", en: "Structured record database" } }
    ],
    mission: {
      uz: "shop massividan birinchi mahsulot nomini console.log(shop[0].name); qilib chiqaring.",
      en: "Log the name of the first shop item using console.log(shop[0].name);."
    },
    initialCode: 'let shop = [\n  { name: "Olma", price: 5 },\n  { name: "Sehrli Suv", price: 20 }\n];\n// Birinchi mahsulot nomini chiqaring:\n',
    targetCode: 'let shop = [\n  { name: "Olma", price: 5 },\n  { name: "Sehrli Suv", price: 20 }\n];\nconsole.log(shop[0].name);',
    hints: [
      { uz: "console.log(shop[0].name); deb yozing.", en: "Write: console.log(shop[0].name);" }
    ],
    validate: (code) => {
      if (!/shop\[0\]\.name/.test(code)) return { passed: false, message: "shop[0].name orqali nomni oling!" };
      return { passed: true, message: "Haqiqiy o'yin do'koni ma'lumotlar bazasi tayyor! 🏪⭐" };
    }
  },

  // THEME 19
  {
    id: 'js-19-dom-select',
    module: 'mod-js-dom',
    icon: '🎯',
    title: { uz: "19-Mavzu: Sahifani Boshqarish — querySelector()", en: "Theme 19: Finding Elements — querySelector()" },
    concept: {
      uz: "DOM (Document Object Model) — bu HTML sahifaning JavaScriptdagi ko'rinishi. querySelector('#id') yordamida sahifadagi istalgan tugma yoki matnni ushlab olamiz!",
      en: "The DOM lets JavaScript talk to HTML. document.querySelector('#id') grabs any element on screen so you can control it."
    },
    humanLanguage: {
      uz: "HTML — bu skelet. JavaScript — bu miya. Miya skeletning qo'lini qimirlatish uchun avval uni ushlab olishi (querySelector) kerak!",
      en: "HTML is the body, JS is the brain. Before the brain can move a hand, it locates it with querySelector."
    },
    secretSandwich: {
      uz: "const element = document.querySelector('#elementId');",
      en: "const element = document.querySelector('#elementId');"
    },
    stepBreakdown: [
      {
        part: 'document.querySelector("#title")',
        explanation: { uz: "id si title bo'lgan elementni topish", en: "Find element with id='title'" },
        visualResult: { uz: "HTML elementi o'zgaruvchiga olinadi", en: "Grabs HTML element" }
      }
    ],
    tagShowcase: [
      { tag: 'querySelector', name: { uz: "Elementni topuvchi", en: "Query selector" }, meaning: { uz: "CSS selektori bo'yicha elementni topadi", en: "Selects matching element" } },
      { tag: 'document', name: { uz: "Veb sahifa hujjati", en: "HTML Document" }, meaning: { uz: "Butun sahifaning boshqaruv obyekti", en: "Root document object" } }
    ],
    mission: {
      uz: 'document.querySelector("#title") orqali sarlavhani oling va console.log(title.textContent); qiling.',
      en: 'Select #title with document.querySelector and log title.textContent.'
    },
    initialCode: '// 19-Mavzu: querySelector\nconst title = document.querySelector("#title");\n// title ning textContent xususiyatini chiqaring:\n',
    targetCode: 'const title = document.querySelector("#title");\nconsole.log(title.textContent);',
    hints: [
      { uz: "console.log(title.textContent); deb yozing.", en: "Write: console.log(title.textContent);" }
    ],
    validate: (code) => {
      if (!/querySelector\s*\(/.test(code)) return { passed: false, message: "document.querySelector() dan foydalaning!" };
      return { passed: true, message: "Element ushlab olindi! Endi sahifani boshqara olasiz! 🎯🎉" };
    }
  },

  // THEME 20
  {
    id: 'js-20-dom-modify',
    module: 'mod-js-dom',
    icon: '🎨',
    title: { uz: "20-Mavzu: Matn va Rangni O'zgartirish — textContent va style", en: "Theme 20: Changing Text & Colors — textContent & style" },
    concept: {
      uz: "Ushlab olingan elementning yozuvini .textContent orqali, ko'rinishini esa .style.color yoki .style.backgroundColor orqali o'zgartiramiz!",
      en: "Modify what the element says using .textContent, and change its visual CSS using .style properties."
    },
    humanLanguage: {
      uz: "Sehrli tayoqcha bilan tegdingiz: box.textContent = 'Sehrlandi!'; box.style.backgroundColor = 'gold';",
      en: "Like a wizard spell: box.textContent = 'Magical!'; box.style.backgroundColor = 'gold';"
    },
    secretSandwich: {
      uz: "element.textContent = 'yangi matn'; | element.style.xossa = 'qiymat';",
      en: "element.textContent = 'new text'; | element.style.property = 'value';"
    },
    stepBreakdown: [
      {
        part: 'box.textContent = "Yangi Matn"',
        explanation: { uz: "Element ichidagi matnni almashtiradi", en: "Updates element text" },
        visualResult: { uz: "Ekranda matn yangilanadi", en: "Screen text updates" }
      },
      {
        part: 'box.style.color = "gold"',
        explanation: { uz: "CSS matn rangini o'zgartiradi", en: "Changes CSS text color" },
        visualResult: { uz: "Yozuv oltin rangga kiradi", en: "Text turns gold" }
      }
    ],
    tagShowcase: [
      { tag: '.textContent', name: { uz: "Matn tarkibi", en: "Text content" }, meaning: { uz: "Element ichidagi matnni o'zgartiradi", en: "Sets text content" } },
      { tag: '.style', name: { uz: "Uslub xususiyati", en: "Style property" }, meaning: { uz: "CSS dizaynini jonli o'zgartiradi", en: "Mutates CSS styles" } }
    ],
    mission: {
      uz: 'box elementining textContent ini "Sehrli Quti!" va style.backgroundColor ini "gold" qilib o\'zgartiring.',
      en: 'Set box.textContent = "Sehrli Quti!" and box.style.backgroundColor = "gold".'
    },
    initialCode: 'const box = document.querySelector("#box");\n// box ning textContent va style.backgroundColor ini o\'zgartiring:\n',
    targetCode: 'const box = document.querySelector("#box");\nbox.textContent = "Sehrli Quti!";\nbox.style.backgroundColor = "gold";',
    hints: [
      { uz: 'box.textContent = "Sehrli Quti!"; box.style.backgroundColor = "gold"; deb yozing.', en: "Set box.textContent and box.style.backgroundColor." }
    ],
    validate: (code) => {
      if (!/box\.textContent\s*=/.test(code)) return { passed: false, message: "box.textContent ni o'zgartiring!" };
      if (!/box\.style\.backgroundColor\s*=/.test(code) && !/box\.style\.background\s*=/.test(code)) return { passed: false, message: "box.style.backgroundColor ni o'zgartiring!" };
      return { passed: true, message: "Sahifadagi quti bir zumda sehrlandi! 🎨✨" };
    }
  },

  // THEME 21
  {
    id: 'js-21-events',
    module: 'mod-js-dom',
    icon: '⚡',
    title: { uz: "21-Mavzu: Hodisalar — addEventListener('click') (Jonli Tugma)", en: "Theme 21: Events — addEventListener('click') (Live Button)" },
    concept: {
      uz: "Foydalanuvchi tugmani bosganda, sichqonchani yurgizganda yoki klaviaturani bosganda hodisa (Event) sodir bo'ladi. addEventListener shu hodisani poylaydi!",
      en: "When a user clicks, moves the mouse, or presses a key, an event fires. addEventListener listens for it and acts!"
    },
    humanLanguage: {
      uz: "Tugmaga qo'riqchi qo'ydik: 'Qachonki seni bossalar (click), darhol ovoz chiqar yoki rangni o'zgartir!'",
      en: "Setting a watcher on a button: 'Whenever someone clicks you, celebrate and update the game!'"
    },
    secretSandwich: {
      uz: "element.addEventListener('click', () => { bajariladigan ish });",
      en: "element.addEventListener('click', () => { action to do });"
    },
    stepBreakdown: [
      {
        part: '.addEventListener("click", ...)',
        explanation: { uz: "Bosilish hodisasini eshitish", en: "Listen for user click" },
        visualResult: { uz: "Foydalanuvchi bosganda ishlaydi", en: "Fires when clicked" }
      }
    ],
    tagShowcase: [
      { tag: 'addEventListener', name: { uz: "Hodisani tinglovchi", en: "Event Listener" }, meaning: { uz: "Tugma bosilishini kutib turadi", en: "Attaches trigger listener" } },
      { tag: '"click"', name: { uz: "Chertish hodisasi", en: "Click event" }, meaning: { uz: "Sichqoncha bilan bosilganda yuz beradi", en: "Mouse click trigger" } }
    ],
    mission: {
      uz: 'btn ga "click" hodisasini qo\'shing va bosilganda btn.textContent = "BOSILDI! 🎉"; bo\'lsin.',
      en: 'Add a "click" event listener to btn that sets btn.textContent = "BOSILDI! 🎉".'
    },
    initialCode: 'const btn = document.querySelector("#btn");\n// addEventListener orqali "click" hodisasini poylang:\n',
    targetCode: 'const btn = document.querySelector("#btn");\nbtn.addEventListener("click", () => {\n  btn.textContent = "BOSILDI! 🎉";\n});',
    hints: [
      { uz: 'btn.addEventListener("click", () => { btn.textContent = "BOSILDI! 🎉"; }); deb yozing.', en: "Type the click event listener." }
    ],
    validate: (code) => {
      if (!/addEventListener\s*\(\s*["']click["']/.test(code)) return { passed: false, message: "addEventListener('click', ...) dan foydalaning!" };
      return { passed: true, message: "Interaktivlik cho'qqisi! Tugma jonlandi! ⚡🎉" };
    }
  },

  // THEME 22
  {
    id: 'js-22-timers',
    module: 'mod-js-dom',
    icon: '⏰',
    title: { uz: "22-Mavzu: Taymerlar — setTimeout() va setInterval()", en: "Theme 22: Timers — setTimeout() & setInterval()" },
    concept: {
      uz: "setTimeout(funksiya, ms) ma'lum vaqt kutib bir marta ishlaydi. setInterval(funksiya, ms) esa har belgilangan vaqtda tinimsiz qaytariladi.",
      en: "setTimeout runs once after a delay in milliseconds. setInterval repeats continuously every set interval."
    },
    humanLanguage: {
      uz: "1 soniya = 1000 millisoniya (ms). setTimeout bilan 2000 ms (2 soniya) kutib o'yinni boshlash mumkin!",
      en: "1000 milliseconds = 1 second. Use setTimeout to wait 2 seconds before launching fireworks!"
    },
    secretSandwich: {
      uz: "setTimeout(() => { ... }, 2000); — 2 soniyadan keyin ishlaydi.",
      en: "setTimeout(() => { ... }, 2000); — runs after 2000 ms."
    },
    stepBreakdown: [
      {
        part: "setTimeout(..., 2000)",
        explanation: { uz: "2 soniya (2000 ms) kechiktirish", en: "Delay by 2000 ms" },
        visualResult: { uz: "Vaqt o'tib xabar chiqadi", en: "Triggers after delay" }
      }
    ],
    tagShowcase: [
      { tag: 'setTimeout()', name: { uz: "Kechiktiruvchi taymer", en: "Timeout timer" }, meaning: { uz: "Belgilangan vaqt o'tgach 1 marta ishlaydi", en: "Runs once after delay" } },
      { tag: 'setInterval()', name: { uz: "Davriy taymer", en: "Interval timer" }, meaning: { uz: "Har belgilangan vaqtda takrorlanadi", en: "Repeats every interval" } }
    ],
    mission: {
      uz: 'setTimeout orqali 2000 millisoniyadan so\'ng console.log("Vaqt tugadi! ⏰"); xabarini chiqaring.',
      en: 'Use setTimeout to log "Vaqt tugadi! ⏰" after 2000 ms.'
    },
    initialCode: '// 22-Mavzu: setTimeout taymer\n// 2 soniya (2000 ms) kutuvchi taymer yozing:\n',
    targetCode: 'setTimeout(() => {\n  console.log("Vaqt tugadi! ⏰");\n}, 2000);',
    hints: [
      { uz: 'setTimeout(() => { console.log("Vaqt tugadi! ⏰"); }, 2000); deb yozing.', en: "Type the setTimeout statement." }
    ],
    validate: (code) => {
      if (!/setTimeout\s*\(/.test(code)) return { passed: false, message: "setTimeout() dan foydalaning!" };
      if (!/2000/.test(code)) return { passed: false, message: "2000 ms (2 soniya) kiriting!" };
      return { passed: true, message: "Vaqt nazoratchisi! Taymer ajoyib ishladi! ⏰⭐" };
    }
  },

  // THEME 23
  {
    id: 'js-23-math-random',
    module: 'mod-js-dom',
    icon: '🎲',
    title: { uz: "23-Mavzu: Tasodifiy Sonlar va O'yin Oshiqlari — Math.random()", en: "Theme 23: Random Numbers & Dice — Math.random()" },
    concept: {
      uz: "Math.random() 0 dan 1 gacha tasodifiy son beradi. Math.floor() esa uni yaxlitlaydi. Bu o'yinlarda zar tashlash, dushmanni tasodifiy joylashtirish uchun kerak!",
      en: "Math.random() generates random floats. Multiplied and rounded with Math.floor(), it rolls dice from 1 to 6!"
    },
    humanLanguage: {
      uz: "Nardadagi oshiqni tashladingiz: 1 dan 6 gacha son chiqadi! Math.floor(Math.random() * 6) + 1 xuddi shu zar toshidir.",
      en: "Rolling a 6-sided die: Math.floor(Math.random() * 6) + 1 picks a random number from 1 to 6."
    },
    secretSandwich: {
      uz: "let dice = Math.floor(Math.random() * 6) + 1;",
      en: "let dice = Math.floor(Math.random() * 6) + 1;"
    },
    stepBreakdown: [
      {
        part: "Math.random() * 6",
        explanation: { uz: "0 dan 5.99 gacha tasodifiy son", en: "Random float between 0 and 5.99" },
        visualResult: { uz: "Tasodifiy qiymat", en: "Random multiplier" }
      },
      {
        part: "Math.floor(...) + 1",
        explanation: { uz: "Pastga yaxlitlab 1 qo'shish", en: "Round down and shift +1" },
        visualResult: { uz: "1 dan 6 gacha butun son", en: "Integer between 1 and 6" }
      }
    ],
    tagShowcase: [
      { tag: 'Math.random()', name: { uz: "Tasodifiy generator", en: "Random generator" }, meaning: { uz: "Tasodifiy o'nli son qaytaradi", en: "Generates random float" } },
      { tag: 'Math.floor()', name: { uz: "Pastga yaxlitlash", en: "Floor rounding" }, meaning: { uz: "O'nli sonni pastki butunga aylantiradi", en: "Rounds down to integer" } }
    ],
    mission: {
      uz: "dice nomli o'zgaruvchida 1 dan 6 gacha tasodifiy son hosil qiling va console.log(dice); qiling.",
      en: "Generate a random number 1 to 6 in dice and log it."
    },
    initialCode: '// 23-Mavzu: O\'yin Zari (Dice)\n// 1 dan 6 gacha tasodifiy son hosil qiling:\n',
    targetCode: 'let dice = Math.floor(Math.random() * 6) + 1;\nconsole.log(dice);',
    hints: [
      { uz: "let dice = Math.floor(Math.random() * 6) + 1; deb yozing.", en: "Write: let dice = Math.floor(Math.random() * 6) + 1;" }
    ],
    validate: (code) => {
      if (!/Math\.random\s*\(\s*\)/.test(code)) return { passed: false, message: "Math.random() dan foydalaning!" };
      if (!/Math\.floor\s*\(/.test(code)) return { passed: false, message: "Math.floor() orqali yaxlitlang!" };
      return { passed: true, message: "Zar tashlandi! Tasodifiy sonlar sizga bo'ysundi! 🎲🎉" };
    }
  },

  // THEME 24
  {
    id: 'js-24-clicker-game',
    module: 'mod-js-dom',
    icon: '🏆',
    title: { uz: "24-Mavzu: Super Mini-Loyiha — Jonli Kliker O'yini (Clicker Game)", en: "Theme 24: Grand Project — Interactive Clicker Game" },
    concept: {
      uz: "Barcha o'rganganlarimizni birlashtiramiz: o'zgaruvchi (count), querySelector, addEventListener, textContent va shart (if)!",
      en: "Bring it all together: variables (count), DOM selectors, click listeners, text updates, and winning conditions!"
    },
    humanLanguage: {
      uz: "Tugmani bosganda hisob oshadi. Agar hisob 10 ga yetsa — 'Siz g'olib bo'ldingiz!' deb tabriklaymiz!",
      en: "Every click increments your score. Reach 10 clicks to win the championship trophy!"
    },
    secretSandwich: {
      uz: "count++; countEl.textContent = count; if (count === 10) alert('Yutdingiz!');",
      en: "count++; countEl.textContent = count; if (count === 10) alert('Winner!');"
    },
    stepBreakdown: [
      {
        part: "count++;",
        explanation: { uz: "Hisobni 1 taga oshirish", en: "Increment score" },
        visualResult: { uz: "1, 2, 3... bo'lib o'sadi", en: "Score goes up" }
      },
      {
        part: "countEl.textContent = count;",
        explanation: { uz: "Ekranda hisobni yangilash", en: "Update DOM score" },
        visualResult: { uz: "Ekranda ko'rinadi", en: "Displayed on page" }
      },
      {
        part: "if (count === 10)",
        explanation: { uz: "G'alaba shartini tekshirish", en: "Check victory condition" },
        visualResult: { uz: "10 bo'lganda sovrin beradi", en: "Triggers victory" }
      }
    ],
    tagShowcase: [
      { tag: 'Clicker Game', name: { uz: "Kliker O'yini", en: "Clicker Game" }, meaning: { uz: "To'liq interaktiv brauzer o'yini", en: "Complete browser mini-game" } }
    ],
    mission: {
      uz: 'clickBtn bosilganda count ni oshiring, countEl.textContent ga chiqaring va count === 10 bo\'lsa alert("G\'alaba!"); qiling.',
      en: 'On clickBtn click, increment count, update countEl.textContent, and alert("G\'alaba!") when count === 10.'
    },
    initialCode: 'let count = 0;\nconst countEl = document.querySelector("#count");\nconst clickBtn = document.querySelector("#click-btn");\n\nclickBtn.addEventListener("click", () => {\n  // count ni oshiring, ekranga chiqaring va 10 bo\'lsa alert qiling:\n});',
    targetCode: 'let count = 0;\nconst countEl = document.querySelector("#count");\nconst clickBtn = document.querySelector("#click-btn");\n\nclickBtn.addEventListener("click", () => {\n  count++;\n  countEl.textContent = count;\n  if (count === 10) {\n    alert("G\'alaba! 🏆");\n  }\n});',
    hints: [
      { uz: 'count++; countEl.textContent = count; if (count === 10) alert("G\'alaba! 🏆"); deb yozing.', en: "Increment count, set countEl.textContent, and check if count === 10." }
    ],
    validate: (code) => {
      if (!/count\+\+/.test(code) && !/count\s*\+=\s*1/.test(code)) return { passed: false, message: "count++ bilan hisobni oshiring!" };
      if (!/countEl\.textContent\s*=/.test(code)) return { passed: false, message: "countEl.textContent ga hisobni chiqaring!" };
      if (!/if\s*\(\s*count/.test(code)) return { passed: false, message: "if (count === 10) shartini tekshiring!" };
      return { passed: true, message: "MUBORAKBOD ETAMIZ! SIZ JAVASCRIPT KURSINI TO'LIQ BITIRIB, O'Z O'YININGIZNI YARATDINGIZ! 🏆🎉🚀" };
    }
  }
];

export function getLessonById(id) {
  return LESSONS.find(l => l.id === id) || null;
}

export function getLessonsByModule(modId) {
  return LESSONS.filter(l => l.module === modId);
}
