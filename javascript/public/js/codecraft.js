/**
 * CodeCraft JS (Kids) - Standalone Offline Bundle
 * Runs 100% offline via file:// protocol directly in any browser with ZERO Node.js or web server.
 */
(function() {
  'use strict';

  // --- Curriculum Module ---
  /**
 * JavaScript for Kids (CodeCraft JS) Curriculum
 * 24 Foundational, Intermediate, and Practical Topics
 * Bilingual (Uzbek & English), 100% Offline, Hands-On
 * Elevated with Pedagogy, Bilingual Code Comments, Target Descriptions,
 * List of Commands, and Simple Big SPA Web Page Practices.
 */

const MODULES = [
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

const LESSONS = [
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
    listOfCommands: [
      { code: 'console.log("...")', name: { uz: "Konsolga chop etish", en: "Print to Console" }, description: { uz: "Xabarlarni dasturchilar konsoliga chiqaradi", en: "Outputs text or variables to developer console" } },
      { code: 'alert("...")', name: { uz: "Ogohlantirish oynasi", en: "Alert Dialog" }, description: { uz: "Ekranda qalqib chiquvchi oyna ochadi", en: "Pops up an interactive modal dialog" } }
    ],
    tagShowcase: [
      { tag: 'console.log()', name: { uz: "Konsolga yozish", en: "Print to console" }, meaning: { uz: "Xabarlarni dasturchilar konsoliga chiqaradi", en: "Outputs message to console" } },
      { tag: 'alert()', name: { uz: "Ogohlantirish oynasi", en: "Alert Popup" }, meaning: { uz: "Ekranda qalqib chiquvchi oyna ochadi", en: "Shows popup window" } }
    ],
    mission: {
      uz: 'Konsolga "Salom, Dunyo!" xabarini console.log() orqali chiqaring.',
      en: 'Print "Salom, Dunyo!" or "Hello, World!" to the console using console.log().'
    },
    targetDescription: {
      uz: 'Dasturchilar konsoliga chiqarilgan "Salom, Dunyo!" xabari.',
      en: 'The friendly greeting "Salom, Dunyo!" or "Hello, World!" printed into the developer console.'
    },
    initialCode: {
      en: '// Theme 1: Hello World\n// Step 1: Type console.log("Salom, Dunyo!"); below:\n',
      uz: '// 1-Mavzu: Salom Dunyo\n// 1-Qadam: Quyiga console.log("Salom, Dunyo!"); deb yozing:\n'
    },
    targetCode: {
      en: '// Theme 1 Solution\nconsole.log("Salom, Dunyo!");',
      uz: '// 1-Mavzu Yechimi\nconsole.log("Salom, Dunyo!");'
    },
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
      en: "let boxName = value; — name the container and put anything inside."
    },
    stepBreakdown: [
      {
        part: "let score = 100;",
        explanation: { uz: "O'zgaruvchan quti yaratib, unga 100 sonini solish", en: "Creates changeable variable with 100" },
        visualResult: { uz: "score qutisi xotirada saqlanadi", en: "score box stored in memory" }
      },
      {
        part: 'const hero = "Knight";',
        explanation: { uz: "O'zgarmas doimiy quti yaratish", en: "Creates locked constant container" },
        visualResult: { uz: "hero qutisi qulflanadi", en: "hero locked in memory" }
      }
    ],
    listOfCommands: [
      { code: 'let name = value;', name: { uz: "O'zgaruvchan quti", en: "Changeable Variable" }, description: { uz: "Keyinchalik qiymati o'zgarishi mumkin bo'lgan o'zgaruvchi", en: "Declares a reassignable variable" } },
      { code: 'const name = value;', name: { uz: "O'zgarmas quti", en: "Constant Variable" }, description: { uz: "Qiymati doimiy qoladigan o'zgaruvchi", en: "Declares a permanent locked constant" } }
    ],
    tagShowcase: [
      { tag: 'let', name: { uz: "O'zgaruvchan", en: "Variable" }, meaning: { uz: "Qiymati o'zgaradigan quti", en: "Value can change" } },
      { tag: 'const', name: { uz: "Doimiy", en: "Constant" }, meaning: { uz: "Qiymati o'zgarmas quti", en: "Value cannot change" } }
    ],
    mission: {
      uz: "let score = 100; va const hero = 'Knight'; deb yozing hamda console.log(score); qiling.",
      en: "Declare let score = 100; and const hero = 'Knight';, then log score with console.log(score);."
    },
    targetDescription: {
      uz: "Xotirada saqlangan o'zgaruvchi (score = 100) va qahramon nomi konsolga chiqariladi.",
      en: "Changeable score variable (100) and constant hero name stored in memory and logged to console."
    },
    initialCode: {
      en: '// Theme 2: Variables\n// Step 1: Declare let score = 100;\n// Step 2: Declare const hero = "Knight";\n// Step 3: Log score to console:\n',
      uz: '// 2-Mavzu: O\'zgaruvchilar\n// 1-Qadam: let score = 100; deb yozing\n// 2-Qadam: const hero = "Knight"; deb yozing\n// 3-Qadam: score ni konsolga chiqaring:\n'
    },
    targetCode: {
      en: '// Theme 2 Solution\nlet score = 100;\nconst hero = "Knight";\nconsole.log(score);',
      uz: '// 2-Mavzu Yechimi\nlet score = 100;\nconst hero = "Knight";\nconsole.log(score);'
    },
    hints: [
      { uz: 'let score = 100; const hero = "Knight"; console.log(score); deb yozing.', en: 'Type let score = 100; const hero = "Knight"; console.log(score);' }
    ],
    validate: (code) => {
      if (!/let\s+score\s*=/.test(code)) return { passed: false, message: "let score = 100; deb e'lon qiling!" };
      if (!/const\s+hero\s*=/.test(code)) return { passed: false, message: "const hero = 'Knight'; deb e'lon qiling!" };
      if (!/console\.log\s*\(\s*score\s*\)/.test(code)) return { passed: false, message: "console.log(score); orqali ballni chiqaring!" };
      return { passed: true, message: "Barakalla! O'zgaruvchilar va doimiylar xotirada saqlandi! 📦⭐" };
    }
  },

  // THEME 3
  {
    id: 'js-3-types',
    module: 'mod-js-basics',
    icon: '🧩',
    title: { uz: "3-Mavzu: Ma'lumot Turlari — String, Number va Boolean", en: "Theme 3: Data Types — String, Number & Boolean" },
    concept: {
      uz: "JavaScriptda har bir qiymat o'z turiga ega: Matnlar (String), Raqamlar (Number) va Rost/Yolg'on (Boolean). typeof operatori turini aytib beradi.",
      en: "Every value has a data type: text (String), numbers (Number), and true/false switches (Boolean). typeof inspects the type."
    },
    humanLanguage: {
      uz: "Raqamlarni qo'shtirnoqsiz yozamiz (10, 25), matnlarni esa qo'shtirnoqqa olamiz ('Salom'). Rost/yolg'on esa faqat true yoki false bo'ladi.",
      en: "Numbers are bare (10, 25), words need quotes ('Hello'). Booleans are binary switches: true or false."
    },
    secretSandwich: {
      uz: "typeof qiymat — masalan: typeof 'Salom' natijasi 'string' bo'ladi.",
      en: "typeof value — e.g. typeof 'Hello' evaluates to 'string'."
    },
    stepBreakdown: [
      {
        part: 'typeof "Dragon"',
        explanation: { uz: "Matn turini tekshirish", en: "Check text string type" },
        visualResult: { uz: '"string" chiqadi', en: 'Outputs "string"' }
      },
      {
        part: "typeof 99",
        explanation: { uz: "Son turini tekshirish", en: "Check number type" },
        visualResult: { uz: '"number" chiqadi', en: 'Outputs "number"' }
      }
    ],
    listOfCommands: [
      { code: 'typeof val', name: { uz: "Tur aniqlovchi", en: "Type Inspector" }, description: { uz: "Qiymatning ma'lumot turini qaytaradi ('string', 'number', 'boolean')", en: "Returns the data type of any variable" } },
      { code: 'true / false', name: { uz: "Mantiqiy qiymat", en: "Boolean" }, description: { uz: "Rost yoki yolg'on holat kaliti", en: "Binary true or false logic values" } }
    ],
    tagShowcase: [
      { tag: 'typeof', name: { uz: "Tur aniqlovchi", en: "Type Operator" }, meaning: { uz: "Qiymat turini bildiradi", en: "Inspects value type" } },
      { tag: 'boolean', name: { uz: "Mantiqiy", en: "Boolean" }, meaning: { uz: "true yoki false", en: "True or false" } }
    ],
    mission: {
      uz: 'const pet = "Dragon"; deb oling va console.log(typeof pet); qiling.',
      en: 'Declare const pet = "Dragon"; and log console.log(typeof pet);.'
    },
    targetDescription: {
      uz: 'Konsolda matn turi ("string") ko\'rinadi.',
      en: 'The console displays "string", proving the variable holds a text string.'
    },
    initialCode: {
      en: '// Theme 3: Data Types\n// Step 1: Declare const pet = "Dragon";\n// Step 2: Log console.log(typeof pet); below:\n',
      uz: '// 3-Mavzu: Ma\'lumot Turlari\n// 1-Qadam: const pet = "Dragon"; deb e\'lon qiling\n// 2-Qadam: console.log(typeof pet); deb konsolga chiqaring:\n'
    },
    targetCode: {
      en: '// Theme 3 Solution\nconst pet = "Dragon";\nconsole.log(typeof pet);',
      uz: '// 3-Mavzu Yechimi\nconst pet = "Dragon";\nconsole.log(typeof pet);'
    },
    hints: [
      { uz: 'const pet = "Dragon"; console.log(typeof pet); deb yozing.', en: 'Type: const pet = "Dragon"; console.log(typeof pet);' }
    ],
    validate: (code) => {
      if (!/typeof/.test(code)) return { passed: false, message: "typeof operatoridan foydalaning!" };
      if (!/pet/.test(code)) return { passed: false, message: "pet o'zgaruvchisidan foydalaning!" };
      return { passed: true, message: "Zo'r! Ma'lumot turlarini aniqlashni o'rgandingiz! 🧩🎉" };
    }
  },

  // THEME 4
  {
    id: 'js-4-math',
    module: 'mod-js-basics',
    icon: '➕',
    title: { uz: "4-Mavzu: Matematika — Qo'shish, Ayirish, Ko'paytirish (+, -, *, /)", en: "Theme 4: Math Operations — Arithmetic (+, -, *, /)" },
    concept: {
      uz: "JavaScript — dunyodagi eng tezkor kalkulyatordir. +, -, *, / va % (qoldiq) yordamida o'yindagi ballarni hisoblaymiz.",
      en: "JavaScript calculates equations in milliseconds using +, -, *, /, and % (modulo remainder)."
    },
    humanLanguage: {
      uz: "O'yinda 10 ta tangangiz bor edi, har biri 2 tadan bo'lgan 5 ta sandiq topdingiz: total = 10 + 5 * 2 = 20!",
      en: "You have 10 coins and found 5 chests with 2 coins each: total = 10 + 5 * 2 = 20 coins!"
    },
    secretSandwich: {
      uz: "let natija = 10 + 5 * 2; — ko'paytirish qo'shishdan oldin bajariladi!",
      en: "let result = 10 + 5 * 2; — multiplication takes priority over addition!"
    },
    stepBreakdown: [
      {
        part: "5 * 2",
        explanation: { uz: "Avval ko'paytirish bajariladi (10)", en: "Multiplication evaluates first to 10" },
        visualResult: { uz: "10 chiqadi", en: "Produces 10" }
      },
      {
        part: "10 + 10",
        explanation: { uz: "So'ngra qo'shish bajariladi", en: "Addition runs next" },
        visualResult: { uz: "Jami 20", en: "Final total 20" }
      }
    ],
    listOfCommands: [
      { code: '+, -, *, /', name: { uz: "Matematik amallar", en: "Arithmetic Operators" }, description: { uz: "Qo'shish, ayirish, ko'paytirish va bo'lish", en: "Add, subtract, multiply, and divide numbers" } },
      { code: '%', name: { uz: "Qoldiq operatori", en: "Modulo Operator" }, description: { uz: "Bo'lishdan qolgan qoldiqni topadi (masalan: 10 % 3 = 1)", en: "Finds the remainder of division (e.g. 10 % 3 = 1)" } }
    ],
    tagShowcase: [
      { tag: '+', name: { uz: "Qo'shish", en: "Add" }, meaning: { uz: "Sonlarni qo'shadi", en: "Adds numbers" } },
      { tag: '*', name: { uz: "Ko'paytirish", en: "Multiply" }, meaning: { uz: "Sonlarni ko'paytiradi", en: "Multiplies numbers" } }
    ],
    mission: {
      uz: "let total = 10 + 5 * 2; deb hisoblang va console.log(total); qiling.",
      en: "Calculate let total = 10 + 5 * 2; and log total with console.log(total);."
    },
    targetDescription: {
      uz: "Konsolda arifmetik amallar natijasi (20) ko'rinadi.",
      en: "The calculated total 20 is printed to the console."
    },
    initialCode: {
      en: '// Theme 4: Math Operators\n// Step 1: Calculate total = 10 + 5 * 2;\n// Step 2: Log total with console.log(total);\n',
      uz: '// 4-Mavzu: Matematika\n// 1-Qadam: let total = 10 + 5 * 2; deb yozing\n// 2-Qadam: console.log(total); deb konsolga chiqaring:\n'
    },
    targetCode: {
      en: '// Theme 4 Solution\nlet total = 10 + 5 * 2;\nconsole.log(total);',
      uz: '// 4-Mavzu Yechimi\nlet total = 10 + 5 * 2;\nconsole.log(total);'
    },
    hints: [
      { uz: "let total = 10 + 5 * 2; console.log(total); deb yozing.", en: "Type: let total = 10 + 5 * 2; console.log(total);" }
    ],
    validate: (code) => {
      if (!/total\s*=/.test(code)) return { passed: false, message: "total o'zgaruvchisini yarating!" };
      if (!/console\.log\s*\(\s*total\s*\)/.test(code)) return { passed: false, message: "console.log(total); orqali natijani chiqaring!" };
      return { passed: true, message: "Ajoyib hisob-kitob! Siz matematikani zabt etdingiz! ➕⚡" };
    }
  },

  // THEME 5
  {
    id: 'js-5-strings',
    module: 'mod-js-basics',
    icon: '✨',
    title: { uz: "5-Mavzu: Matnlar va Sehrli Backtick (`${ism}`)", en: "Theme 5: Strings & Template Literals (`${name}`)" },
    concept: {
      uz: "Zamonaviy JavaScriptda bektik ` belgisi orqali matn ichiga o'zgaruvchilarni ${o'zgaruvchi} ko'rinishida oson joylaymiz.",
      en: "Modern JavaScript uses backticks ` and ${variable} template literals to inject variables cleanly into strings."
    },
    humanLanguage: {
      uz: "Eski usulda 'Salom ' + ism + '!' deb qiynalardik. Endi esa `Salom ${ism}!` deb bitta gap qilib chiroyli yozamiz.",
      en: "Instead of messy concatenation ('Hello ' + name), template literals let you write `Hello ${name}!` like magic."
    },
    secretSandwich: {
      uz: "`Mening ismim ${name}, yoshim ${age} da!`",
      en: "`My name is ${name} and I am ${age} years old!`"
    },
    stepBreakdown: [
      {
        part: "`...`",
        explanation: { uz: "Bektik qavslari (Tab ustidagi tugma)", en: "Backtick string delimiters" },
        visualResult: { uz: "Shablonli matn ochiladi", en: "Enables template string" }
      },
      {
        part: "${name}",
        explanation: { uz: "O'zgaruvchi qiymatini matnga joylash", en: "Injects variable into string" },
        visualResult: { uz: "O'zgaruvchi matn ichida chiqadi", en: "Replaces with variable value" }
      }
    ],
    listOfCommands: [
      { code: '`...`', name: { uz: "Bektik matn", en: "Template Literal" }, description: { uz: "O'zgaruvchilarni matn ichiga joylash imkonini beradi", en: "Allows variable interpolation inside backticks" } },
      { code: '${variable}', name: { uz: "O'zgaruvchi joylovchi", en: "Variable Placeholder" }, description: { uz: "Bektik ichida o'zgaruvchini hisoblab matnga qo'shadi", en: "Evaluates and embeds variable inside backtick string" } }
    ],
    tagShowcase: [
      { tag: '` `', name: { uz: "Bektik", en: "Backtick" }, meaning: { uz: "Yangi shablon matn", en: "Template string" } },
      { tag: '${}', name: { uz: "O'zgaruvchi joyi", en: "Placeholder" }, meaning: { uz: "Matn ichiga o'zgaruvchi qo'yish", en: "Embeds variable" } }
    ],
    mission: {
      uz: "const name = 'Sam'; const age = 11; oling va `Hi, I am ${name} and I am ${age} years old!` xabarini konsolga chiqaring.",
      en: "Declare const name = 'Sam'; const age = 11; and log `Hi, I am ${name} and I am ${age} years old!`."
    },
    targetDescription: {
      uz: "Bektik yordamida o'zgaruvchilar birlashtirilgan jumla konsolga chiqadi: \"Hi, I am Sam and I am 11 years old!\".",
      en: "The interpolated string \"Hi, I am Sam and I am 11 years old!\" printed into the console."
    },
    initialCode: {
      en: '// Theme 5: Template Literals\nconst name = "Sam";\nconst age = 11;\n// Step 1: Create msg = `Hi, I am ${name} and I am ${age} years old!`;\n// Step 2: Log msg using console.log(msg);\n',
      uz: '// 5-Mavzu: Shablonli Matnlar\nconst name = "Sam";\nconst age = 11;\n// 1-Qadam: const msg = `Hi, I am ${name} and I am ${age} years old!`; deb yozing\n// 2-Qadam: console.log(msg); deb konsolga chiqaring:\n'
    },
    targetCode: {
      en: '// Theme 5 Solution\nconst name = "Sam";\nconst age = 11;\nconst msg = `Hi, I am ${name} and I am ${age} years old!`;\nconsole.log(msg);',
      uz: '// 5-Mavzu Yechimi\nconst name = "Sam";\nconst age = 11;\nconst msg = `Hi, I am ${name} and I am ${age} years old!`;\nconsole.log(msg);'
    },
    hints: [
      { uz: "const msg = `Hi, I am ${name} and I am ${age} years old!`; console.log(msg); deb yozing.", en: "Type the template literal sentence and log it." }
    ],
    validate: (code) => {
      if (!/`[\s\S]*\${name}[\s\S]*`/.test(code)) return { passed: false, message: "Bektik ` va ${name} dan foydalaning!" };
      return { passed: true, message: "Sehrli matn tayyor! Bektiklar haqiqiy super kuch! ✨🚀" };
    }
  },

  // THEME 6
  {
    id: 'js-6-prompt',
    module: 'mod-js-basics',
    icon: '🎤',
    title: { uz: "6-Mavzu: Foydalanuvchidan Ma'lumot Olish — prompt()", en: "Theme 6: User Input — prompt()" },
    concept: {
      uz: "prompt() funksiyasi ekranda matn kiritish oynasini ochadi va foydalanuvchi yozgan javobni o'zgaruvchiga saqlaydi.",
      en: "prompt() pops up an input box, listens for the user to type an answer, and returns it to your code."
    },
    humanLanguage: {
      uz: "Kompyuter foydalanuvchidan: 'Isming nima?' deb so'raydi, foydalanuvchi javob yozgach, kompyuter uni eslab qoladi.",
      en: "The computer asks 'What is your name?'. Once the user types an answer, your game greets them by name."
    },
    secretSandwich: {
      uz: "const javob = prompt('Savolingiz');",
      en: "const answer = prompt('Your question');"
    },
    stepBreakdown: [
      {
        part: 'prompt("Ismingiz nima?")',
        explanation: { uz: "Savol oynasini ochish", en: "Opens input dialog" },
        visualResult: { uz: "Ekranda yozish oynasi chiqadi", en: "Shows prompt box" }
      }
    ],
    listOfCommands: [
      { code: 'prompt("Savol")', name: { uz: "Kiritish oynasi", en: "Input Prompt" }, description: { uz: "Foydalanuvchidan klaviatura orqali javob so'raydi", en: "Asks user for keyboard text input" } }
    ],
    tagShowcase: [
      { tag: 'prompt()', name: { uz: "Kiritish so'rovi", en: "Prompt" }, meaning: { uz: "Foydalanuvchidan matn so'raydi", en: "Prompts user for text" } }
    ],
    mission: {
      uz: 'const userName = prompt("Ismingiz nima?"); deb so\'rang va console.log(`Salom, ${userName}!`); qiling.',
      en: 'Ask with const userName = prompt("What is your name?"); and log console.log(`Salom, ${userName}!`);.'
    },
    targetDescription: {
      uz: "Foydalanuvchi kiritgan ism qabul qilinib, konsolga shaxsiy tabrik xabari chiqariladi.",
      en: "User input is captured from prompt() and greeted personally in the console."
    },
    initialCode: {
      en: '// Theme 6: prompt() Input\n// Step 1: const userName = prompt("What is your name?");\n// Step 2: Log console.log(`Salom, ${userName}!`);\n',
      uz: '// 6-Mavzu: prompt() Kiritmasi\n// 1-Qadam: const userName = prompt("Ismingiz nima?"); deb yozing\n// 2-Qadam: console.log(`Salom, ${userName}!`); deb konsolga chiqaring:\n'
    },
    targetCode: {
      en: '// Theme 6 Solution\nconst userName = prompt("What is your name?");\nconsole.log(`Salom, ${userName}!`);',
      uz: '// 6-Mavzu Yechimi\nconst userName = prompt("Ismingiz nima?");\nconsole.log(`Salom, ${userName}!`);'
    },
    hints: [
      { uz: 'const userName = prompt("Ismingiz nima?"); console.log(`Salom, ${userName}!`); deb yozing.', en: 'Write the prompt assignment and log it.' }
    ],
    validate: (code) => {
      if (!/prompt\s*\(/.test(code)) return { passed: false, message: "prompt() dan foydalaning!" };
      if (!/console\.log/.test(code)) return { passed: false, message: "console.log() orqali tabrikni chiqaring!" };
      return { passed: true, message: "Interaktiv dasturchi! Dasturingiz foydalanuvchi bilan muloqot qildi! 🎤🎉" };
    }
  },

  // THEME 7
  {
    id: 'js-7-if-else',
    module: 'mod-js-logic',
    icon: '🔀',
    title: { uz: "7-Mavzu: Shartlar — if va else (Tanlov Yo'li)", en: "Theme 7: Conditions — if & else (Branching)" },
    concept: {
      uz: "if va else kompyuterga qaror qabul qilishni o'rgatadi: Agar ball 50 dan baland bo'lsa — 'Yutdingiz', aks holda — 'Qayta o'ynang'.",
      en: "if/else makes decisions: if score >= 50 you pass, else you try again."
    },
    humanLanguage: {
      uz: "Yo'l ikkiga ajraldi: Agar yomg'ir yog'sa soyabon olamiz (if), aks holda quyoshdan saqlanuvchi ko'zoynak taqamiz (else).",
      en: "A fork in the road: if it rains take an umbrella, else wear sunglasses."
    },
    secretSandwich: {
      uz: "if (shart) { bajariladigan_kod } else { muqobil_kod }",
      en: "if (condition) { code if true } else { code if false }"
    },
    stepBreakdown: [
      {
        part: "if (score >= 50)",
        explanation: { uz: "Shartni tekshirish", en: "Condition test" },
        visualResult: { uz: "Rost bo'lsa ichiga kiradi", en: "Enters branch if true" }
      },
      {
        part: "else { ... }",
        explanation: { uz: "Shart bajarilmagandagi yo'l", en: "Alternative branch" },
        visualResult: { uz: "Yolg'on bo'lsa ishlaydi", en: "Executes if false" }
      }
    ],
    listOfCommands: [
      { code: 'if (shart) {}', name: { uz: "Agar sharti", en: "If Branch" }, description: { uz: "Shart to'g'ri bo'lganda kodni ishga tushiradi", en: "Runs code if condition is true" } },
      { code: 'else {}', name: { uz: "Aks holda", en: "Else Branch" }, description: { uz: "Shart noto'g'ri bo'lganda muqobil kodni ishga tushiradi", en: "Runs fallback code if condition is false" } }
    ],
    tagShowcase: [
      { tag: 'if', name: { uz: "Agar", en: "If" }, meaning: { uz: "Shartni tekshiradi", en: "Tests condition" } },
      { tag: 'else', name: { uz: "Aks holda", en: "Else" }, meaning: { uz: "Muqobil yo'l", en: "Fallback path" } }
    ],
    mission: {
      uz: 'let score = 80; oling. Agar score >= 50 bo\'lsa "O\'tdingiz! 🎉", aks holda "Qayta urinib ko\'ring!" deb chiqaring.',
      en: 'Declare let score = 80;. If score >= 50 log "O\'tdingiz! 🎉", else log "Qayta urinib ko\'ring!".'
    },
    targetDescription: {
      uz: "Shart to'g'ri bo'lgani (80 >= 50) uchun konsolga \"O'tdingiz! 🎉\" chiqadi.",
      en: "Since 80 >= 50 is true, the winning branch executes and logs \"O'tdingiz! 🎉\"."
    },
    initialCode: {
      en: '// Theme 7: if / else\nlet score = 80;\n// Step 1: Write if (score >= 50) { console.log("O\'tdingiz! 🎉"); }\n// Step 2: Add else { console.log("Qayta urinib ko\'ring!"); }\n',
      uz: '// 7-Mavzu: if va else\nlet score = 80;\n// 1-Qadam: if (score >= 50) { console.log("O\'tdingiz! 🎉"); } deb yozing\n// 2-Qadam: else { console.log("Qayta urinib ko\'ring!"); } qo\'shing:\n'
    },
    targetCode: {
      en: '// Theme 7 Solution\nlet score = 80;\nif (score >= 50) {\n  console.log("O\'tdingiz! 🎉");\n} else {\n  console.log("Qayta urinib ko\'ring!");\n}',
      uz: '// 7-Mavzu Yechimi\nlet score = 80;\nif (score >= 50) {\n  console.log("O\'tdingiz! 🎉");\n} else {\n  console.log("Qayta urinib ko\'ring!");\n}'
    },
    hints: [
      { uz: 'if (score >= 50) { console.log("O\'tdingiz! 🎉"); } else { ... } deb yozing.', en: "Write the if/else condition block." }
    ],
    validate: (code) => {
      if (!/if\s*\(/.test(code)) return { passed: false, message: "if shartidan foydalaning!" };
      if (!/else/.test(code)) return { passed: false, message: "else blokini qo'shing!" };
      return { passed: true, message: "Aqlli mantiq! Dasturingiz mustaqil qaror qabul qildi! 🔀⭐" };
    }
  },

  // THEME 8
  {
    id: 'js-8-comparison',
    module: 'mod-js-logic',
    icon: '⚖️',
    title: { uz: "8-Mavzu: Taqqoslash Operatorlari (===, !==, >, <)", en: "Theme 8: Comparison Operators (===, !==, >, <)" },
    concept: {
      uz: "=== (tengmi?), !== (teng emasmi?), > (kattami?), < (kichikmi?) doimo true yoki false qiymat qaytaradi.",
      en: "=== (equal), !== (not equal), > (greater), < (less) evaluate logic to boolean true or false."
    },
    humanLanguage: {
      uz: "Ikki narsani taroziga qo'ydik: 10 === 10 teng bo'lgani uchun tarozi 'true' deb javob beradi.",
      en: "Like a scale: checking if level 10 === 10 evaluates to true."
    },
    secretSandwich: {
      uz: "console.log(10 === 10); // true chiqadi",
      en: "console.log(10 === 10); // logs true"
    },
    stepBreakdown: [
      {
        part: "playerLevel === 10",
        explanation: { uz: "Qat'iy tenglikni tekshirish", en: "Strict equality check" },
        visualResult: { uz: "true bo'ladi", en: "Evaluates to true" }
      }
    ],
    listOfCommands: [
      { code: '===', name: { uz: "Qat'iy tenglik", en: "Strict Equality" }, description: { uz: "Ikkita qiymatning qiymati va turi tengligini tekshiradi", en: "Checks if both value and type are identical" } },
      { code: '!==', name: { uz: "Teng emas", en: "Not Equal" }, description: { uz: "Ikkita qiymat teng bo'lmasa true qaytaradi", en: "Checks if values are not equal" } },
      { code: '> / <', name: { uz: "Katta / Kichik", en: "Greater / Less" }, description: { uz: "Sonlarni o'zaro taqqoslaydi", en: "Compares numerical size" } }
    ],
    tagShowcase: [
      { tag: '===', name: { uz: "Tengmi?", en: "Equal?" }, meaning: { uz: "To'liq tenglik", en: "Strict equality" } },
      { tag: '!==', name: { uz: "Teng emasmi?", en: "Not equal?" }, meaning: { uz: "Teng emaslik", en: "Inequality" } }
    ],
    mission: {
      uz: "const playerLevel = 10; oling va console.log(playerLevel === 10); qilib tenglikni tekshiring.",
      en: "Declare const playerLevel = 10; and log console.log(playerLevel === 10);."
    },
    targetDescription: {
      uz: "Taqqoslash natijasi sifatida konsolda true aks etadi.",
      en: "The boolean comparison result true is logged to the console."
    },
    initialCode: {
      en: '// Theme 8: Comparison\nconst playerLevel = 10;\n// Step 1: Check equality: console.log(playerLevel === 10);\n',
      uz: '// 8-Mavzu: Taqqoslash\nconst playerLevel = 10;\n// 1-Qadam: console.log(playerLevel === 10); deb tenglikni tekshiring:\n'
    },
    targetCode: {
      en: '// Theme 8 Solution\nconst playerLevel = 10;\nconsole.log(playerLevel === 10);',
      uz: '// 8-Mavzu Yechimi\nconst playerLevel = 10;\nconsole.log(playerLevel === 10);'
    },
    hints: [
      { uz: "console.log(playerLevel === 10); deb yozing.", en: "Type: console.log(playerLevel === 10);" }
    ],
    validate: (code) => {
      if (!/===/.test(code)) return { passed: false, message: "=== operatoridan foydalaning!" };
      return { passed: true, message: "Mukammal taqqoslash! Rost va yolg'on sirlari ochildi! ⚖️🎉" };
    }
  },

  // THEME 9
  {
    id: 'js-9-else-if',
    module: 'mod-js-logic',
    icon: '🚦',
    title: { uz: "9-Mavzu: Bir Nechta Shartlar — else if (Baholash Tizimi)", en: "Theme 9: Multiple Conditions — else if (Grading)" },
    concept: {
      uz: "Agar variantlar ikkitadan ko'p bo'lsa (masalan: 90 dan baland = A, 70 dan baland = B, aks holda = C), else if zanjiridan foydalanamiz.",
      en: "When you have 3 or more paths (e.g. 90+ = A, 70+ = B, else = C), chain conditions with else if."
    },
    humanLanguage: {
      uz: "Svetofor: Yashil yonsa — yur (if), sariq yonsa — tayyorlan (else if), qizil yonsa — to'xta (else)!",
      en: "Traffic light: Green = Go (if), Yellow = Ready (else if), Red = Stop (else)!"
    },
    secretSandwich: {
      uz: "if (shart1) { ... } else if (shart2) { ... } else { ... }",
      en: "if (cond1) { ... } else if (cond2) { ... } else { ... }"
    },
    stepBreakdown: [
      {
        part: "else if (grade >= 70)",
        explanation: { uz: "Ikkinchi shartni tekshirish", en: "Secondary condition check" },
        visualResult: { uz: "Birinchisi xato bo'lsa buni tekshiradi", en: "Checked if first fails" }
      }
    ],
    listOfCommands: [
      { code: 'else if (shart) {}', name: { uz: "Aks holda agar", en: "Else If" }, description: { uz: "Oldingi shart bajarilmaganda navbatdagi yangi shartni tekshiradi", en: "Evaluates secondary condition if previous check fails" } }
    ],
    tagShowcase: [
      { tag: 'else if', name: { uz: "Aks holda agar", en: "Else If" }, meaning: { uz: "Qo'shimcha shart", en: "Secondary condition" } }
    ],
    mission: {
      uz: 'let grade = 95; oling. Agar grade >= 90 bo\'lsa "Baho: A+ 🌟", else if (grade >= 70) bo\'lsa "Baho: B 👍", else "Baho: C" chiqaring.',
      en: 'Declare let grade = 95;. If grade >= 90 log "Baho: A+ 🌟", else if grade >= 70 log "Baho: B 👍", else log "Baho: C".'
    },
    targetDescription: {
      uz: "95 ball yuqori bo'lgani uchun konsolga \"Baho: A+ 🌟\" chiqadi.",
      en: "Because 95 >= 90 is met first, the console displays \"Baho: A+ 🌟\"."
    },
    initialCode: {
      en: '// Theme 9: else if\nlet grade = 95;\n// Step 1: if (grade >= 90) { console.log("Baho: A+ 🌟"); }\n// Step 2: else if (grade >= 70) { console.log("Baho: B 👍"); }\n// Step 3: else { console.log("Baho: C"); }\n',
      uz: '// 9-Mavzu: else if\nlet grade = 95;\n// 1-Qadam: if (grade >= 90) { console.log("Baho: A+ 🌟"); }\n// 2-Qadam: else if (grade >= 70) { console.log("Baho: B 👍"); }\n// 3-Qadam: else { console.log("Baho: C"); } deb yozing:\n'
    },
    targetCode: {
      en: '// Theme 9 Solution\nlet grade = 95;\nif (grade >= 90) {\n  console.log("Baho: A+ 🌟");\n} else if (grade >= 70) {\n  console.log("Baho: B 👍");\n} else {\n  console.log("Baho: C");\n}',
      uz: '// 9-Mavzu Yechimi\nlet grade = 95;\nif (grade >= 90) {\n  console.log("Baho: A+ 🌟");\n} else if (grade >= 70) {\n  console.log("Baho: B 👍");\n} else {\n  console.log("Baho: C");\n}'
    },
    hints: [
      { uz: "if (grade >= 90) ... else if (grade >= 70) ... else ... deb yozing.", en: "Write the multi-tier if/else if/else blocks." }
    ],
    validate: (code) => {
      if (!/else\s+if/.test(code)) return { passed: false, message: "else if shartidan foydalaning!" };
      return { passed: true, message: "Qoyilmaqom! Baholash algoritmi benuqson ishladi! 🚦🏆" };
    }
  },

  // THEME 10
  {
    id: 'js-10-functions',
    module: 'mod-js-logic',
    icon: '⚙️',
    title: { uz: "10-Mavzu: Funksiyalar — Sehrli Qayta Ishlatiluvchi Mashina", en: "Theme 10: Functions — Magic Reusable Machines" },
    concept: {
      uz: "Funksiya — bu ma'lum bir vazifani bajaruvchi nomlangan kod blokidir. Uni bir marta yozib, istalgancha qayta chaqirish mumkin.",
      en: "A function packages code into a reusable machine. Define it once and call it whenever you need."
    },
    humanLanguage: {
      uz: "Har kuni 'Salom, do'stim!' deb qayta-qayta yozmaysiz. Bitta sayHello() tugmasi yasab, kerak paytda bosasiz!",
      en: "Instead of repeating code, build a sayHello() robot button you can press anytime."
    },
    secretSandwich: {
      uz: "function nom() { bajariladigan_kod } va chaqirish: nom();",
      en: "function name() { code } and invoke: name();"
    },
    stepBreakdown: [
      {
        part: "function sayHello() { ... }",
        explanation: { uz: "Funksiyani yaratish va nomlash", en: "Define function signature" },
        visualResult: { uz: "Xotirada funksiya saqlanadi", en: "Saved in memory" }
      },
      {
        part: "sayHello();",
        explanation: { uz: "Funksiyani ishga tushirish (chaqirish)", en: "Invoke the function" },
        visualResult: { uz: "Ichidagi kod ishlaydi", en: "Executes inside code" }
      }
    ],
    listOfCommands: [
      { code: 'function name() {}', name: { uz: "Funksiya e'loni", en: "Function Declaration" }, description: { uz: "Qayta ishlatiluvchi buyruqlar blokini yaratadi", en: "Defines a reusable named code block" } },
      { code: 'name()', name: { uz: "Funksiyani chaqirish", en: "Function Invocation" }, description: { uz: "Funksiya ichidagi buyruqlarni ishga tushiradi", en: "Executes the code block" } }
    ],
    tagShowcase: [
      { tag: 'function', name: { uz: "Funksiya", en: "Function" }, meaning: { uz: "Yangi buyruqlar to'plami", en: "Defines reusable block" } }
    ],
    mission: {
      uz: "sayHello() nomli funksiya tuzing: console.log('Salom, Dasturchi! 🤖'); va uni chaqiring: sayHello();",
      en: "Declare function sayHello() logging 'Salom, Dasturchi! 🤖' and invoke it with sayHello();."
    },
    targetDescription: {
      uz: "Chaqirilgan funksiya konsolga \"Salom, Dasturchi! 🤖\" xabarini chiqaradi.",
      en: "The invoked function logs \"Salom, Dasturchi! 🤖\" to the developer console."
    },
    initialCode: {
      en: '// Theme 10: Functions\n// Step 1: Declare function sayHello() { console.log("Salom, Dasturchi! 🤖"); }\n// Step 2: Call sayHello(); below:\n',
      uz: '// 10-Mavzu: Funksiyalar\n// 1-Qadam: function sayHello() { console.log("Salom, Dasturchi! 🤖"); } deb yozing\n// 2-Qadam: sayHello(); deb chaqiring:\n'
    },
    targetCode: {
      en: '// Theme 10 Solution\nfunction sayHello() {\n  console.log("Salom, Dasturchi! 🤖");\n}\nsayHello();',
      uz: '// 10-Mavzu Yechimi\nfunction sayHello() {\n  console.log("Salom, Dasturchi! 🤖");\n}\nsayHello();'
    },
    hints: [
      { uz: 'function sayHello() { console.log("Salom, Dasturchi! 🤖"); } sayHello(); deb yozing.', en: "Declare the function and call sayHello();." }
    ],
    validate: (code) => {
      if (!/function\s+sayHello\s*\(/.test(code)) return { passed: false, message: "sayHello nomli funksiya e'lon qiling!" };
      if (!/sayHello\s*\(\s*\)/.test(code)) return { passed: false, message: "sayHello(); deb funksiyani chaqiring!" };
      return { passed: true, message: "Ofarin! O'z shaxsiy funksiyangizni yaratdingiz! ⚙️🎉" };
    }
  },

  // THEME 11
  {
    id: 'js-11-params-return',
    module: 'mod-js-logic',
    icon: '📥',
    title: { uz: "11-Mavzu: Parametrlar va Return — Kiruvchi va Qaytaruvchi Qiymat", en: "Theme 11: Parameters & Return — Input and Output" },
    concept: {
      uz: "Funksiya qavslari ichiga kiruvchi ma'lumotlar (parametrlar) oladi, return esa hisoblab tayyor natijani orqaga qaytaradi.",
      en: "Functions accept arguments as parameters and send computed results back with return."
    },
    humanLanguage: {
      uz: "Sharbat siquvchi mashina: ichiga olma va apelsin solasiz (parametr), u esa sizga tayyor mevali sharbat qaytaradi (return)!",
      en: "A juicer machine: feed it apples (parameters), and it returns fresh juice (return)!"
    },
    secretSandwich: {
      uz: "function multiply(a, b) { return a * b; }",
      en: "function multiply(a, b) { return a * b; }"
    },
    stepBreakdown: [
      {
        part: "function multiply(a, b)",
        explanation: { uz: "Ikkita parametr qabul qilish", en: "Accepts 2 parameters" },
        visualResult: { uz: "Sonlar funksiyaga kiradi", en: "Inputs enter function" }
      },
      {
        part: "return a * b;",
        explanation: { uz: "Ko'paytma natijasini qaytarish", en: "Returns the multiplied product" },
        visualResult: { uz: "Natija tashqariga chiqadi", en: "Product returned" }
      }
    ],
    listOfCommands: [
      { code: 'function f(a, b) {}', name: { uz: "Parametrlar", en: "Parameters" }, description: { uz: "Funksiyaga uzatiladigan ma'lumotlar qutilari", en: "Variables accepting input into a function" } },
      { code: 'return natija;', name: { uz: "Qiymat qaytarish", en: "Return" }, description: { uz: "Hisoblangan natijani chaqirilgan joyga qaytaradi", en: "Returns computed result back to caller" } }
    ],
    tagShowcase: [
      { tag: 'return', name: { uz: "Qaytarish", en: "Return" }, meaning: { uz: "Natijani qaytaradi", en: "Returns result" } }
    ],
    mission: {
      uz: "multiply(a, b) funksiyasini yozing: return a * b; va console.log(multiply(4, 5)); qiling.",
      en: "Write function multiply(a, b) { return a * b; } and log console.log(multiply(4, 5));."
    },
    targetDescription: {
      uz: "4 va 5 sonlari ko'paytirilib, konsolga 20 natijasi chiqadi.",
      en: "The function multiplies 4 and 5, returning 20 to be printed to the console."
    },
    initialCode: {
      en: '// Theme 11: Parameters and Return\n// Step 1: Declare function multiply(a, b) { return a * b; }\n// Step 2: Log multiply(4, 5) with console.log(multiply(4, 5));\n',
      uz: '// 11-Mavzu: Parametrlar va Return\n// 1-Qadam: function multiply(a, b) { return a * b; } deb yozing\n// 2-Qadam: console.log(multiply(4, 5)); deb konsolga chiqaring:\n'
    },
    targetCode: {
      en: '// Theme 11 Solution\nfunction multiply(a, b) {\n  return a * b;\n}\nconsole.log(multiply(4, 5));',
      uz: '// 11-Mavzu Yechimi\nfunction multiply(a, b) {\n  return a * b;\n}\nconsole.log(multiply(4, 5));'
    },
    hints: [
      { uz: "function multiply(a, b) { return a * b; } console.log(multiply(4, 5)); deb yozing.", en: "Declare multiply(a, b) returning a * b and log multiply(4, 5)." }
    ],
    validate: (code) => {
      if (!/return/.test(code)) return { passed: false, message: "return buyrug'idan foydalaning!" };
      if (!/multiply/.test(code)) return { passed: false, message: "multiply nomli funksiya tuzing!" };
      return { passed: true, message: "Super hisoblagich! Parametrlar va return ustasisiz! 📥💎" };
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
    listOfCommands: [
      { code: 'const f = (x) => x * 2;', name: { uz: "Arrow Funksiya", en: "Arrow Function" }, description: { uz: "Zamonaviy ixcham funksiya sintaksisi", en: "Concise ES6 function syntax" } }
    ],
    tagShowcase: [
      { tag: '=>', name: { uz: "Arrow operatori", en: "Arrow operator" }, meaning: { uz: "Yangi ixcham funksiya sintaksisi", en: "Concise function token" } }
    ],
    mission: {
      uz: "const double = (n) => n * 2; arrow funksiyasini yozing va konsolga double(5) ni chiqaring.",
      en: "Write const double = (n) => n * 2; and log double(5)."
    },
    targetDescription: {
      uz: "Arrow funksiya orqali 5 soni ikkiga ko'paytirilib, konsolga 10 chiqadi.",
      en: "The arrow function multiplies 5 by 2, logging 10 into the console."
    },
    initialCode: {
      en: '// Theme 12: Arrow Functions\n// Step 1: Write const double = (n) => n * 2;\n// Step 2: Log double(5) with console.log(double(5));\n',
      uz: '// 12-Mavzu: Arrow Funksiya\n// 1-Qadam: const double = (n) => n * 2; deb yozing\n// 2-Qadam: console.log(double(5)); deb konsolga chiqaring:\n'
    },
    targetCode: {
      en: '// Theme 12 Solution\nconst double = (n) => n * 2;\nconsole.log(double(5));',
      uz: '// 12-Mavzu Yechimi\nconst double = (n) => n * 2;\nconsole.log(double(5));'
    },
    hints: [
      { uz: "const double = (n) => n * 2; console.log(double(5)); deb yozing.", en: "Type: const double = (n) => n * 2; and log double(5);" }
    ],
    validate: (code) => {
      if (!/=>/.test(code)) return { passed: false, message: "=> arrow belgisidan foydalaning!" };
      if (!/double/.test(code)) return { passed: false, message: "double nomli funksiya yarating!" };
      return { passed: true, message: "Kamon o'qi kabi tezkor! Arrow funksiyalar bo'yicha mutaxassissiz! 🏹⚡" };
    }
  },

  // THEME 13 - BIG TOPIC (RPG HERO INVENTORY SPA)
  {
    id: 'js-13-arrays',
    module: 'mod-js-data',
    icon: '🎒',
    title: { uz: "13-Mavzu: Massivlar — Sehrli Ryukzak va Ro'yxatlar ([])", en: "Theme 13: Arrays — Magic Inventory & Lists ([])" },
    concept: {
      uz: "Massiv (Array) — bu bitta o'zgaruvchi ichida ko'plab buyumlarni ro'yxat qilib saqlash usulidir. Kvadrat qavs [] bilan yoziladi va 0 dan boshlab sanaladi.",
      en: "An array stores a structured list of items inside square brackets []. Each item has a numeric index starting from 0."
    },
    humanLanguage: {
      uz: "O'yindagi qahramon ryukzagida qurollar bor: ['Flame Sword', 'Crystal Shield', 'Elixir']. Birinchi buyumni olish uchun inventory[0] deymiz!",
      en: "In your RPG backpack: ['Flame Sword', 'Crystal Shield', 'Elixir']. To equip the first weapon, call inventory[0]!"
    },
    secretSandwich: {
      uz: "let ro'yxat = ['1-element', '2-element', '3-element']; va chaqirish: ro'yxat[0]",
      en: "let list = ['item1', 'item2', 'item3']; and access: list[0]"
    },
    stepBreakdown: [
      {
        part: '["Flame Sword", "Crystal Shield"]',
        explanation: { uz: "Kvadrat qavs ichidagi ro'yxat", en: "List items inside square brackets" },
        visualResult: { uz: "Xotirada tartiblangan ro'yxat", en: "Ordered list in memory" }
      },
      {
        part: "inventory[0]",
        explanation: { uz: "Nolinchi (birinchi) elementni olish", en: "Access first item at index 0" },
        visualResult: { uz: '"Flame Sword" olinadi', en: 'Retrieves "Flame Sword"' }
      }
    ],
    listOfCommands: [
      { code: 'let arr = [1, 2, 3];', name: { uz: "Massiv yaratish", en: "Array Declaration" }, description: { uz: "Kvadrat qavsda tartiblangan ro'yxat tuzadi", en: "Creates an indexed array of values" } },
      { code: 'arr[0]', name: { uz: "0-Indeks", en: "Zero Index" }, description: { uz: "Massivdagi eng birinchi elementni oladi", en: "Accesses the very first element" } },
      { code: 'arr.length', name: { uz: "Uzunlik xossasi", en: "Array Length" }, description: { uz: "Massivdagi jami elementlar sonini bildiradi", en: "Counts total items in the array" } }
    ],
    tagShowcase: [
      { tag: '[]', name: { uz: "Kvadrat qavslar", en: "Square Brackets" }, meaning: { uz: "Massiv yaratadi va indeks bo'yicha oladi", en: "Defines array and accesses index" } },
      { tag: '.length', name: { uz: "Uzunlik xususiyati", en: "Length property" }, meaning: { uz: "Massivda nechta element borligini aytadi", en: "Counts total elements" } }
    ],
    mission: {
      uz: "inventory nomli massiv tuzing: ['Flame Sword', 'Crystal Shield', 'Elixir'] va birinchi qurolni console.log(inventory[0]); qiling.",
      en: "Create an inventory array with ['Flame Sword', 'Crystal Shield', 'Elixir'] and log inventory[0] using console.log(inventory[0]);."
    },
    targetDescription: {
      uz: "Qahramonning ryukzagi massivda saqlanib, 0-indeksdagi bosh qurol (\"Flame Sword\") konsolga chiqariladi.",
      en: "The RPG Hero backpack array is stored in memory and the primary weapon (\"Flame Sword\") at index 0 is logged."
    },
    initialCode: {
      en: '// Theme 13: RPG Hero Inventory SPA\n// Step 1: Create let inventory = ["Flame Sword", "Crystal Shield", "Elixir"];\n// Step 2: Log the primary weapon (index 0) with console.log(inventory[0]);\n',
      uz: '// 13-Mavzu: Qahramon Ryukzagi SPA\n// 1-Qadam: let inventory = ["Flame Sword", "Crystal Shield", "Elixir"]; deb massiv tuzing\n// 2-Qadam: 0-indeksdagi bosh qurolni console.log(inventory[0]); deb chiqaring:\n'
    },
    targetCode: {
      en: '// Theme 13 Solution\nlet inventory = ["Flame Sword", "Crystal Shield", "Elixir"];\nconsole.log(inventory[0]);',
      uz: '// 13-Mavzu Yechimi\nlet inventory = ["Flame Sword", "Crystal Shield", "Elixir"];\nconsole.log(inventory[0]);'
    },
    hints: [
      { uz: 'let inventory = ["Flame Sword", "Crystal Shield", "Elixir"]; console.log(inventory[0]); deb yozing.', en: 'Declare inventory and log inventory[0].' }
    ],
    validate: (code) => {
      if (!/inventory\s*=\s*\[/.test(code)) return { passed: false, message: "let inventory = [...] massivini e'lon qiling!" };
      if (!/inventory\s*\[\s*0\s*\]/.test(code)) return { passed: false, message: "inventory[0] orqali birinchi elementni oling!" };
      return { passed: true, message: "Zo'r! Birinchi massivingiz va uning 0-indeksini zabt etdingiz! 🎒⭐" };
    }
  },

  // THEME 14 - BIG TOPIC (ARRAY METHODS SPA)
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
      uz: "Ryukzakka yangi qurol topib soldingiz: inventory.push('Dragon Bow'). Massiv uzunligi bittaga ko'payadi!",
      en: "You looted a legendary bow: inventory.push('Dragon Bow'). The inventory expands!"
    },
    secretSandwich: {
      uz: "massiv.push('yangi'); — qo'shish | massiv.pop(); — oxirgisini olish",
      en: "array.push('new'); — append | array.pop(); — remove last"
    },
    stepBreakdown: [
      {
        part: '.push("Dragon Bow")',
        explanation: { uz: "Oxiriga yangi element qo'shadi", en: "Appends item to array end" },
        visualResult: { uz: "Massiv kattalashadi", en: "Array expands" }
      }
    ],
    listOfCommands: [
      { code: 'arr.push(item)', name: { uz: "Oxiriga qo'shish", en: "Push method" }, description: { uz: "Massiv oxiriga yangi element qo'shadi", en: "Adds a new element to array end" } },
      { code: 'arr.pop()', name: { uz: "Oxirgisini olish", en: "Pop method" }, description: { uz: "Massivning oxirgi elementini o'chiradi", en: "Removes and returns last element" } }
    ],
    tagShowcase: [
      { tag: '.push()', name: { uz: "Qo'shish metodi", en: "Push method" }, meaning: { uz: "Oxiriga element qo'shadi", en: "Adds item to end" } },
      { tag: '.pop()', name: { uz: "Olib tashlash metodi", en: "Pop method" }, meaning: { uz: "Oxirgi elementni o'chiradi", en: "Removes last item" } }
    ],
    mission: {
      uz: 'inventory massiviga inventory.push("Dragon Bow"); qilib yangi qurol qo\'shing va console.log(inventory.length); qiling.',
      en: 'Add "Dragon Bow" to inventory using inventory.push("Dragon Bow"); and log console.log(inventory.length);.'
    },
    targetDescription: {
      uz: "Ryukzakka push() orqali \"Dragon Bow\" qo'shiladi va yangi qurollar soni (3) konsolga chiqadi.",
      en: "\"Dragon Bow\" is pushed into the inventory, and the new total count (3) is logged to the console."
    },
    initialCode: {
      en: '// Theme 14: Array push()\nlet inventory = ["Flame Sword", "Crystal Shield"];\n// Step 1: Add "Dragon Bow" with inventory.push("Dragon Bow");\n// Step 2: Log length using console.log(inventory.length);\n',
      uz: '// 14-Mavzu: Massivga push()\nlet inventory = ["Flame Sword", "Crystal Shield"];\n// 1-Qadam: inventory.push("Dragon Bow"); deb yangi qurol qo\'shing\n// 2-Qadam: console.log(inventory.length); deb uzunlikni chiqaring:\n'
    },
    targetCode: {
      en: '// Theme 14 Solution\nlet inventory = ["Flame Sword", "Crystal Shield"];\ninventory.push("Dragon Bow");\nconsole.log(inventory.length);',
      uz: '// 14-Mavzu Yechimi\nlet inventory = ["Flame Sword", "Crystal Shield"];\ninventory.push("Dragon Bow");\nconsole.log(inventory.length);'
    },
    hints: [
      { uz: 'inventory.push("Dragon Bow"); console.log(inventory.length); deb yozing.', en: 'Push "Dragon Bow" and log inventory.length.' }
    ],
    validate: (code) => {
      if (!/inventory\.push\s*\(/.test(code)) return { passed: false, message: "inventory.push() dan foydalaning!" };
      if (!/inventory\.length/.test(code)) return { passed: false, message: "inventory.length orqali sonini chiqaring!" };
      return { passed: true, message: "Ajoyib! Massivga yangi qurol muvaffaqiyatli qo'shildi! 🛠️🎉" };
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
    listOfCommands: [
      { code: 'for (let i = 0; i < N; i++) {}', name: { uz: "For tsikli", en: "For Loop" }, description: { uz: "Belgilangan miqdorda kodni avtomatik takrorlaydi", en: "Repeats a block of code for a set number of iterations" } },
      { code: 'i++', name: { uz: "Inkrement", en: "Increment" }, description: { uz: "O'zgaruvchi qiymatiga har qadamda 1 qo'shadi", en: "Adds 1 to variable each iteration" } }
    ],
    tagShowcase: [
      { tag: 'for', name: { uz: "For tsikli", en: "For loop" }, meaning: { uz: "Belgilangan miqdorda takrorlaydi", en: "Repeats code for set counts" } },
      { tag: 'i++', name: { uz: "Inkrement (1 qo'shish)", en: "Increment operator" }, meaning: { uz: "Sanagichni bittaga oshiradi", en: "Adds 1 to number" } }
    ],
    mission: {
      uz: "for tsikli yordamida 1 dan 5 gacha sonlarni console.log(i); qilib konsolga chiqaring.",
      en: "Use a for loop to log numbers from 1 to 5 with console.log(i);."
    },
    targetDescription: {
      uz: "1 dan 5 gacha bo'lgan barcha sonlar ketma-ketlikda konsolga chiqariladi.",
      en: "Numbers 1, 2, 3, 4, and 5 are logged sequentially by the loop."
    },
    initialCode: {
      en: '// Theme 15: for loop\n// Step 1: Write for (let i = 1; i <= 5; i++) {\n// Step 2: Log each number with console.log(i);\n',
      uz: '// 15-Mavzu: for tsikli\n// 1-Qadam: for (let i = 1; i <= 5; i++) { deb yozing\n// 2-Qadam: console.log(i); deb chiqaring:\n'
    },
    targetCode: {
      en: '// Theme 15 Solution\nfor (let i = 1; i <= 5; i++) {\n  console.log(i);\n}',
      uz: '// 15-Mavzu Yechimi\nfor (let i = 1; i <= 5; i++) {\n  console.log(i);\n}'
    },
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
    listOfCommands: [
      { code: 'while (shart) {}', name: { uz: "While tsikli", en: "While Loop" }, description: { uz: "Shart rost bo'lib turguncha kodni takrorlaydi", en: "Repeats code while condition remains true" } },
      { code: 'energy--', name: { uz: "Dekrement", en: "Decrement" }, description: { uz: "O'zgaruvchi qiymatidan 1 ayiradi", en: "Decreases variable value by 1" } }
    ],
    tagShowcase: [
      { tag: 'while', name: { uz: "While tsikli", en: "While loop" }, meaning: { uz: "Shart rost bo'lguncha aylanadi", en: "Runs while condition is true" } },
      { tag: '--', name: { uz: "Dekrement (1 ayirish)", en: "Decrement operator" }, meaning: { uz: "Sonni bittaga kamaytiradi", en: "Subtracts 1" } }
    ],
    mission: {
      uz: "while (energy > 0) tsiklida console.log(energy); chiqaring va energy--; bilan kamaytiring.",
      en: "In a while (energy > 0) loop log energy and decrease it with energy--;."
    },
    targetDescription: {
      uz: "Energiya 3 dan 1 gacha orqaga sanalib, konsolda aks etadi.",
      en: "Energy counts down from 3 to 1 and logs each remaining unit."
    },
    initialCode: {
      en: '// Theme 16: while loop\nlet energy = 3;\nwhile (energy > 0) {\n  // Step 1: console.log(energy);\n  // Step 2: energy--;\n}\n',
      uz: '// 16-Mavzu: while tsikli\nlet energy = 3;\nwhile (energy > 0) {\n  // 1-Qadam: console.log(energy); deb chiqaring\n  // 2-Qadam: energy--; deb kamaytiring:\n}\n'
    },
    targetCode: {
      en: '// Theme 16 Solution\nlet energy = 3;\nwhile (energy > 0) {\n  console.log(energy);\n  energy--;\n}',
      uz: '// 16-Mavzu Yechimi\nlet energy = 3;\nwhile (energy > 0) {\n  console.log(energy);\n  energy--;\n}'
    },
    hints: [
      { uz: "console.log(energy); energy--; deb yozing.", en: "Write: console.log(energy); energy--;" }
    ],
    validate: (code) => {
      if (!/while\s*\(/.test(code)) return { passed: false, message: "while tsiklidan foydalaning!" };
      if (!/energy--/.test(code) && !/energy\s*-=\s*1/.test(code)) return { passed: false, message: "energy--; bilan qiymatni kamaytiring!" };
      return { passed: true, message: "Vaqt va shartlar bo'yicha mukammal tsikl tuzildi! ⏳🎉" };
    }
  },

  // THEME 17 - BIG TOPIC (HERO CHARACTER SHEET SPA)
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
      en: "Your superhero profile: { name: 'Alpomish', hp: 100, power: 50 }. Access properties with dot notation: hero.name!"
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
    listOfCommands: [
      { code: 'let obj = { k: v };', name: { uz: "Obyekt yaratish", en: "Object Literal" }, description: { uz: "Jingalak qavsda xususiyatlar to'plamini tuzadi", en: "Groups key-value properties inside curly braces" } },
      { code: 'obj.key', name: { uz: "Nuqta bilan olish", en: "Dot Property Access" }, description: { uz: "Obyekt ichidagi xususiyat qiymatini o'qiydi", en: "Accesses a named property on an object" } }
    ],
    tagShowcase: [
      { tag: '{}', name: { uz: "Jingalak qavslar", en: "Curly Braces" }, meaning: { uz: "Yangi obyekt yaratadi", en: "Creates an object literal" } },
      { tag: '.', name: { uz: "Nuqta operatori", en: "Dot operator" }, meaning: { uz: "Obyekt ichidagi xususiyatni chaqiradi", en: "Accesses object properties" } }
    ],
    mission: {
      uz: "hero nomli obyekt tuzing (name: 'Alpomish', hp: 100, power: 50) va console.log(hero.name); qiling.",
      en: "Create a hero object (name: 'Alpomish', hp: 100, power: 50) and log hero.name."
    },
    targetDescription: {
      uz: "Qahramon obyekti xotirada saqlanib, uning nomi (\"Alpomish\") konsolga chiqariladi.",
      en: "The hero profile object is created and its name (\"Alpomish\") is logged using dot notation."
    },
    initialCode: {
      en: '// Theme 17: Hero Profile Object SPA\n// Step 1: Create let hero = { name: "Alpomish", hp: 100, power: 50 };\n// Step 2: Log name with console.log(hero.name);\n',
      uz: '// 17-Mavzu: Qahramon Pasporti Obyekti\n// 1-Qadam: let hero = { name: "Alpomish", hp: 100, power: 50 }; deb obyekt tuzing\n// 2-Qadam: console.log(hero.name); deb konsolga chiqaring:\n'
    },
    targetCode: {
      en: '// Theme 17 Solution\nlet hero = {\n  name: "Alpomish",\n  hp: 100,\n  power: 50\n};\nconsole.log(hero.name);',
      uz: '// 17-Mavzu Yechimi\nlet hero = {\n  name: "Alpomish",\n  hp: 100,\n  power: 50\n};\nconsole.log(hero.name);'
    },
    hints: [
      { uz: 'let hero = { name: "Alpomish", hp: 100, power: 50 }; console.log(hero.name); deb yozing.', en: 'Declare hero object and log hero.name.' }
    ],
    validate: (code) => {
      if (!/hero\s*=\s*\{/.test(code)) return { passed: false, message: "hero obyektini yarating!" };
      if (!/name\s*:\s*["']Alpomish["']/.test(code)) return { passed: false, message: "name: 'Alpomish' xususiyatini kiriting!" };
      if (!/hero\.name/.test(code)) return { passed: false, message: "hero.name orqali nomni chaqiring!" };
      return { passed: true, message: "Super qahramon pasporti tayyor! Obyektlar ajoyib! 👤💎" };
    }
  },

  // THEME 18 - BIG TOPIC (CYBER STORE MARKETPLACE SPA)
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
      uz: "Do'konda ko'plab mahsulotlar bor. Har bir mahsulot bitta obyekt: [{ name: 'Cyber Apple', price: 5 }, { name: 'Plasma Shield', price: 20 }].",
      en: "An inventory of store items: each shop item is an object inside one parent list array."
    },
    secretSandwich: {
      uz: "let shop = [ { name: '...', price: ... }, { name: '...', price: ... } ];",
      en: "let shop = [ { name: '...', price: ... }, { name: '...', price: ... } ];"
    },
    stepBreakdown: [
      {
        part: "shop[0].name",
        explanation: { uz: "Birinchi mahsulotning nomini olish", en: "Access name of first shop item" },
        visualResult: { uz: '"Cyber Apple" olinadi', en: 'Returns "Cyber Apple"' }
      }
    ],
    listOfCommands: [
      { code: 'let db = [{id: 1}, {id: 2}];', name: { uz: "Obyektlar massivi", en: "Array of Objects" }, description: { uz: "Ma'lumotlar bazasi jadvallarini saqlash usuli", en: "Stores a database table of structured records" } },
      { code: 'db[0].prop', name: { uz: "Maydonni o'qish", en: "Field Access" }, description: { uz: "Muayyan yozuv ichidagi maydonni o'qiydi", en: "Accesses specific field of an indexed record" } }
    ],
    tagShowcase: [
      { tag: '[{}]', name: { uz: "Obyektlar massivi", en: "Array of objects" }, meaning: { uz: "Murakkab ma'lumotlar to'plami", en: "Structured record database" } }
    ],
    mission: {
      uz: "shop massividan birinchi mahsulot nomini console.log(shop[0].name); qilib chiqaring.",
      en: "Log the name of the first shop item using console.log(shop[0].name);."
    },
    targetDescription: {
      uz: "Do'kon bazasidan 0-indeksdagi birinchi mahsulot nomi (\"Cyber Apple\") konsolga chiqariladi.",
      en: "The first item name (\"Cyber Apple\") in the shop array is queried and logged."
    },
    initialCode: {
      en: '// Theme 18: CyberStore Database\nlet shop = [\n  { name: "Cyber Apple", price: 5 },\n  { name: "Plasma Shield", price: 20 }\n];\n// Step 1: Log first item name with console.log(shop[0].name);\n',
      uz: '// 18-Mavzu: CyberStore Do\'kon Bazasi\nlet shop = [\n  { name: "Cyber Apple", price: 5 },\n  { name: "Plasma Shield", price: 20 }\n];\n// 1-Qadam: console.log(shop[0].name); deb birinchi mahsulot nomini chiqaring:\n'
    },
    targetCode: {
      en: '// Theme 18 Solution\nlet shop = [\n  { name: "Cyber Apple", price: 5 },\n  { name: "Plasma Shield", price: 20 }\n];\nconsole.log(shop[0].name);',
      uz: '// 18-Mavzu Yechimi\nlet shop = [\n  { name: "Cyber Apple", price: 5 },\n  { name: "Plasma Shield", price: 20 }\n];\nconsole.log(shop[0].name);'
    },
    hints: [
      { uz: "console.log(shop[0].name); deb yozing.", en: "Write: console.log(shop[0].name);" }
    ],
    validate: (code) => {
      if (!/shop\[0\]\.name/.test(code)) return { passed: false, message: "shop[0].name orqali nomni oling!" };
      return { passed: true, message: "Haqiqiy o'yin do'koni ma'lumotlar bazasi tayyor! 🏪⭐" };
    }
  },

  // THEME 19 - BIG TOPIC (DOM SELECTOR)
  {
    id: 'js-19-dom-select',
    module: 'mod-js-dom',
    icon: '🎯',
    title: { uz: "19-Mavzu: Sahifani Boshqarish — querySelector()", en: "Theme 19: Finding Elements — querySelector()" },
    concept: {
      uz: "DOM (Document Object Model) — bu HTML sahifaning JavaScriptdagi ko'rinishi. querySelector('#id') yordamida sahifadagi istalgan sarlavha yoki tugmani ushlab olamiz!",
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
    listOfCommands: [
      { code: 'document.querySelector(sel)', name: { uz: "Element qidiruvchi", en: "Query Selector" }, description: { uz: "CSS selektori bo'yicha sahifadagi elementni topadi", en: "Finds matching element on the page using CSS selector" } },
      { code: 'el.textContent', name: { uz: "Matnni o'qish", en: "Text Content" }, description: { uz: "Element ichidagi matnni o'qiydi yoki almashtiradi", en: "Reads or updates the text inside an element" } }
    ],
    tagShowcase: [
      { tag: 'querySelector', name: { uz: "Elementni topuvchi", en: "Query selector" }, meaning: { uz: "CSS selektori bo'yicha elementni topadi", en: "Selects matching element" } },
      { tag: 'document', name: { uz: "Veb sahifa hujjati", en: "HTML Document" }, meaning: { uz: "Butun sahifaning boshqaruv obyekti", en: "Root document object" } }
    ],
    mission: {
      uz: 'document.querySelector("#title") orqali sarlavhani oling va console.log(title.textContent); qiling.',
      en: 'Select #title with document.querySelector("#title") and log title.textContent.'
    },
    targetDescription: {
      uz: "Sahifadagi #title elementi topilib, uning sarlavha matni (\"CodeCraft JS Sandbox ⚡\") konsolga chiqariladi.",
      en: "The #title element is selected from the DOM and its text content is logged."
    },
    initialCode: {
      en: '// Theme 19: querySelector\n// Step 1: const title = document.querySelector("#title");\n// Step 2: Log console.log(title.textContent);\n',
      uz: '// 19-Mavzu: querySelector\n// 1-Qadam: const title = document.querySelector("#title"); deb sarlavhani ushlang\n// 2-Qadam: console.log(title.textContent); deb konsolga chiqaring:\n'
    },
    targetCode: {
      en: '// Theme 19 Solution\nconst title = document.querySelector("#title");\nconsole.log(title.textContent);',
      uz: '// 19-Mavzu Yechimi\nconst title = document.querySelector("#title");\nconsole.log(title.textContent);'
    },
    hints: [
      { uz: 'const title = document.querySelector("#title"); console.log(title.textContent); deb yozing.', en: 'Select #title and log title.textContent.' }
    ],
    validate: (code) => {
      if (!/document\.querySelector\s*\(\s*["']#title["']\s*\)/.test(code)) return { passed: false, message: 'document.querySelector("#title") orqali elementni oling!' };
      if (!/title\.textContent/.test(code)) return { passed: false, message: 'title.textContent orqali matnni chiqaring!' };
      return { passed: true, message: "Element ushlab olindi! Endi sahifani boshqara olasiz! 🎯🎉" };
    }
  },

  // THEME 20 - BIG TOPIC (DOM MODIFY & STYLES)
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
      uz: "Sehrli tayoqcha bilan tegdingiz: box.textContent = 'Sehrli Quti!'; box.style.backgroundColor = 'gold';",
      en: "Like a wizard spell: box.textContent = 'Magic Box!'; box.style.backgroundColor = 'gold';"
    },
    secretSandwich: {
      uz: "element.textContent = 'yangi matn'; | element.style.xossa = 'qiymat';",
      en: "element.textContent = 'new text'; | element.style.property = 'value';"
    },
    stepBreakdown: [
      {
        part: 'box.textContent = "Sehrli Quti!"',
        explanation: { uz: "Element ichidagi matnni almashtiradi", en: "Updates element text" },
        visualResult: { uz: "Ekranda matn yangilanadi", en: "Screen text updates" }
      },
      {
        part: 'box.style.backgroundColor = "gold"',
        explanation: { uz: "CSS fon rangini o'zgartiradi", en: "Changes CSS background" },
        visualResult: { uz: "Quti oltin rangga kiradi", en: "Turns gold" }
      }
    ],
    listOfCommands: [
      { code: 'el.textContent = "..."', name: { uz: "Matnni o'zgartirish", en: "Set Text Content" }, description: { uz: "Element ichidagi matnni almashtiradi", en: "Sets the text content of an HTML element" } },
      { code: 'el.style.backgroundColor = "..."', name: { uz: "Fon rangini o'zgartirish", en: "Set Background" }, description: { uz: "Elementning CSS fon rangini o'zgartiradi", en: "Mutates the CSS background color" } }
    ],
    tagShowcase: [
      { tag: '.textContent', name: { uz: "Matn tarkibi", en: "Text content" }, meaning: { uz: "Element ichidagi matnni o'zgartiradi", en: "Sets text content" } },
      { tag: '.style', name: { uz: "Uslub xususiyati", en: "Style property" }, meaning: { uz: "CSS dizaynini jonli o'zgartiradi", en: "Mutates CSS styles" } }
    ],
    mission: {
      uz: 'box elementining textContent ini "Sehrli Quti!" va style.backgroundColor ini "gold" qilib o\'zgartiring.',
      en: 'Set box.textContent = "Sehrli Quti!" and box.style.backgroundColor = "gold".'
    },
    targetDescription: {
      uz: "Sahifadagi #box elementi ichidagi matn \"Sehrli Quti!\" ga va uning foni yorqin oltin rangga aylanadi.",
      en: "The #box element dynamically updates its label to \"Sehrli Quti!\" and changes its background color to golden yellow."
    },
    initialCode: {
      en: '// Theme 20: DOM Modification\nconst box = document.querySelector("#box");\n// Step 1: Change text: box.textContent = "Sehrli Quti!";\n// Step 2: Change background: box.style.backgroundColor = "gold";\n',
      uz: '// 20-Mavzu: DOM O\'zgartirish\nconst box = document.querySelector("#box");\n// 1-Qadam: box.textContent = "Sehrli Quti!"; deb yozing\n// 2-Qadam: box.style.backgroundColor = "gold"; deb rang bering:\n'
    },
    targetCode: {
      en: '// Theme 20 Solution\nconst box = document.querySelector("#box");\nbox.textContent = "Sehrli Quti!";\nbox.style.backgroundColor = "gold";',
      uz: '// 20-Mavzu Yechimi\nconst box = document.querySelector("#box");\nbox.textContent = "Sehrli Quti!";\nbox.style.backgroundColor = "gold";'
    },
    hints: [
      { uz: 'box.textContent = "Sehrli Quti!"; box.style.backgroundColor = "gold"; deb yozing.', en: "Set box.textContent and box.style.backgroundColor." }
    ],
    validate: (code) => {
      if (!/box\.textContent\s*=/.test(code)) return { passed: false, message: "box.textContent ni o'zgartiring!" };
      if (!/box\.style\.backgroundColor\s*=/.test(code) && !/box\.style\.background\s*=/.test(code)) return { passed: false, message: "box.style.backgroundColor ni o'zgartiring!" };
      return { passed: true, message: "Sahifadagi quti bir zumda sehrlandi! 🎨✨" };
    }
  },

  // THEME 21 - BIG TOPIC (EVENT LISTENERS & CLICK ACTIONS)
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
      en: "Setting a watcher on a button: 'Whenever someone clicks you, update the UI and celebrate!'"
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
    listOfCommands: [
      { code: 'el.addEventListener("click", () => {})', name: { uz: "Hodisa tinglovchi", en: "Event Listener" }, description: { uz: "Element bosilganda yoki o'zgarganda funksiyani ishga tushiradi", en: "Executes callback function when event occurs" } }
    ],
    tagShowcase: [
      { tag: 'addEventListener', name: { uz: "Hodisani tinglovchi", en: "Event Listener" }, meaning: { uz: "Tugma bosilishini kutib turadi", en: "Attaches trigger listener" } },
      { tag: '"click"', name: { uz: "Chertish hodisasi", en: "Click event" }, meaning: { uz: "Sichqoncha bilan bosilganda yuz beradi", en: "Mouse click trigger" } }
    ],
    mission: {
      uz: 'btn ga "click" hodisasini qo\'shing va bosilganda btn.textContent = "BOSILDI! 🎉"; bo\'lsin.',
      en: 'Add a "click" event listener to btn that sets btn.textContent = "BOSILDI! 🎉".'
    },
    targetDescription: {
      uz: "Jonli #btn tugmasi bosilganda uning yozuvi darhol \"BOSILDI! 🎉\" ga aylanadi.",
      en: "Clicking the interactive #btn immediately updates its text to \"BOSILDI! 🎉\"."
    },
    initialCode: {
      en: '// Theme 21: Click Events\nconst btn = document.querySelector("#btn");\n// Step 1: Add click listener: btn.addEventListener("click", () => {\n// Step 2: Set btn.textContent = "BOSILDI! 🎉";\n// });\n',
      uz: '// 21-Mavzu: Chertish Hodisalari\nconst btn = document.querySelector("#btn");\n// 1-Qadam: btn.addEventListener("click", () => { deb yozing\n// 2-Qadam: btn.textContent = "BOSILDI! 🎉"; deb o\'zgartiring:\n'
    },
    targetCode: {
      en: '// Theme 21 Solution\nconst btn = document.querySelector("#btn");\nbtn.addEventListener("click", () => {\n  btn.textContent = "BOSILDI! 🎉";\n});',
      uz: '// 21-Mavzu Yechimi\nconst btn = document.querySelector("#btn");\nbtn.addEventListener("click", () => {\n  btn.textContent = "BOSILDI! 🎉";\n});'
    },
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
    listOfCommands: [
      { code: 'setTimeout(fn, ms)', name: { uz: "Kechiktiruvchi taymer", en: "Timeout" }, description: { uz: "Belgilangan millisoniya o'tgach funksiyani 1 marta ishlatadi", en: "Runs function once after delay in milliseconds" } },
      { code: 'setInterval(fn, ms)', name: { uz: "Davriy taymer", en: "Interval" }, description: { uz: "Har belgilangan millisoniyada funksiyani takrorlab turadi", en: "Repeats function continuously at regular intervals" } }
    ],
    tagShowcase: [
      { tag: 'setTimeout()', name: { uz: "Kechiktiruvchi taymer", en: "Timeout timer" }, meaning: { uz: "Belgilangan vaqt o'tgach 1 marta ishlaydi", en: "Runs once after delay" } },
      { tag: 'setInterval()', name: { uz: "Davriy taymer", en: "Interval timer" }, meaning: { uz: "Har belgilangan vaqtda takrorlanadi", en: "Repeats every interval" } }
    ],
    mission: {
      uz: 'setTimeout orqali 2000 millisoniyadan so\'ng console.log("Vaqt tugadi! ⏰"); xabarini chiqaring.',
      en: 'Use setTimeout to log "Vaqt tugadi! ⏰" after 2000 ms.'
    },
    targetDescription: {
      uz: "2000 millisoniya (2 soniya) kechikish bilan konsolga \"Vaqt tugadi! ⏰\" xabari chiqariladi.",
      en: "The countdown timer delays 2000ms before logging \"Vaqt tugadi! ⏰\"."
    },
    initialCode: {
      en: '// Theme 22: setTimeout timer\n// Step 1: Write setTimeout(() => { console.log("Vaqt tugadi! ⏰"); }, 2000);\n',
      uz: '// 22-Mavzu: setTimeout taymeri\n// 1-Qadam: setTimeout(() => { console.log("Vaqt tugadi! ⏰"); }, 2000); deb yozing:\n'
    },
    targetCode: {
      en: '// Theme 22 Solution\nsetTimeout(() => {\n  console.log("Vaqt tugadi! ⏰");\n}, 2000);',
      uz: '// 22-Mavzu Yechimi\nsetTimeout(() => {\n  console.log("Vaqt tugadi! ⏰");\n}, 2000);'
    },
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
    listOfCommands: [
      { code: 'Math.random()', name: { uz: "Tasodifiy generator", en: "Random Generator" }, description: { uz: "0 dan 1 gacha bo'lgan tasodifiy o'nli son hosil qiladi", en: "Returns a pseudo-random decimal number between 0 and 1" } },
      { code: 'Math.floor(num)', name: { uz: "Pastga yaxlitlash", en: "Floor Function" }, description: { uz: "O'nli sonni pastki butun songa aylantiradi", en: "Rounds a decimal number down to the nearest integer" } }
    ],
    tagShowcase: [
      { tag: 'Math.random()', name: { uz: "Tasodifiy generator", en: "Random generator" }, meaning: { uz: "Tasodifiy o'nli son qaytaradi", en: "Generates random float" } },
      { tag: 'Math.floor()', name: { uz: "Pastga yaxlitlash", en: "Floor rounding" }, meaning: { uz: "O'nli sonni pastki butunga aylantiradi", en: "Rounds down to integer" } }
    ],
    mission: {
      uz: "dice nomli o'zgaruvchida 1 dan 6 gacha tasodifiy son hosil qiling va console.log(dice); qiling.",
      en: "Generate a random number 1 to 6 in dice and log it."
    },
    targetDescription: {
      uz: "1 dan 6 gacha bo'lgan tasodifiy zar tashlash natijasi konsolda chop etiladi.",
      en: "A randomized integer between 1 and 6 simulating a dice roll is printed to the console."
    },
    initialCode: {
      en: '// Theme 23: Dice Roll\n// Step 1: Generate let dice = Math.floor(Math.random() * 6) + 1;\n// Step 2: Log with console.log(dice);\n',
      uz: '// 23-Mavzu: O\'yin Zari (Dice)\n// 1-Qadam: let dice = Math.floor(Math.random() * 6) + 1; deb yozing\n// 2-Qadam: console.log(dice); deb chiqaring:\n'
    },
    targetCode: {
      en: '// Theme 23 Solution\nlet dice = Math.floor(Math.random() * 6) + 1;\nconsole.log(dice);',
      uz: '// 23-Mavzu Yechimi\nlet dice = Math.floor(Math.random() * 6) + 1;\nconsole.log(dice);'
    },
    hints: [
      { uz: "let dice = Math.floor(Math.random() * 6) + 1; deb yozing.", en: "Write: let dice = Math.floor(Math.random() * 6) + 1;" }
    ],
    validate: (code) => {
      if (!/Math\.random\s*\(\s*\)/.test(code)) return { passed: false, message: "Math.random() dan foydalaning!" };
      if (!/Math\.floor\s*\(/.test(code)) return { passed: false, message: "Math.floor() orqali yaxlitlang!" };
      return { passed: true, message: "Zar tashlandi! Tasodifiy sonlar sizga bo'ysundi! 🎲🎉" };
    }
  },

  // THEME 24 - GRAND CAPSTONE MINI-GAME SPA
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
      uz: "count++; countEl.textContent = count; if (count === 10) alert('G\'alaba!');",
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
    listOfCommands: [
      { code: 'count++', name: { uz: "Hisobni oshirish", en: "Increment" }, description: { uz: "O'yinchi hisobini har bosishda 1 taga oshiradi", en: "Increments player counter by 1 on each click" } },
      { code: 'countEl.textContent = count;', name: { uz: "Hisobni ekranga chiqarish", en: "Update Counter DOM" }, description: { uz: "Yangi ballni ekrandagi katakka joylaydi", en: "Refreshes displayed score in browser DOM" } },
      { code: 'if (count === 10) alert(...)', name: { uz: "Yutuq sharti", en: "Victory Condition" }, description: { uz: "10 ball to'planganda g'alaba tabrigini chiqaradi", en: "Fires celebration alert when score reaches 10" } }
    ],
    tagShowcase: [
      { tag: 'Clicker Game', name: { uz: "Kliker O'yini", en: "Clicker Game" }, meaning: { uz: "To'liq interaktiv brauzer o'yini", en: "Complete browser mini-game" } }
    ],
    mission: {
      uz: 'clickBtn bosilganda count ni oshiring, countEl.textContent ga chiqaring va count === 10 bo\'lsa alert("G\'alaba! 🏆"); qiling.',
      en: 'On clickBtn click, increment count, update countEl.textContent, and alert("G\'alaba! 🏆") when count === 10.'
    },
    targetDescription: {
      uz: "To'liq Kliker o'yini: #click-btn har bosilganda #count soni ortadi va 10 ga yetganda 'G'alaba! 🏆' qalqib chiquvchi oynasi ochiladi.",
      en: "A complete browser Clicker Game: clicking #click-btn updates #count in real-time and triggers a celebration alert at 10 clicks."
    },
    initialCode: {
      en: '// Theme 24: Grand Clicker Game SPA\nlet count = 0;\nconst countEl = document.querySelector("#count");\nconst clickBtn = document.querySelector("#click-btn");\n\nclickBtn.addEventListener("click", () => {\n  // Step 1: count++;\n  // Step 2: countEl.textContent = count;\n  // Step 3: if (count === 10) { alert("G\'alaba! 🏆"); }\n});\n',
      uz: '// 24-Mavzu: Bosh Loyiha — Jonli Kliker O\'yini SPA\nlet count = 0;\nconst countEl = document.querySelector("#count");\nconst clickBtn = document.querySelector("#click-btn");\n\nclickBtn.addEventListener("click", () => {\n  // 1-Qadam: count++; deb hisobni oshiring\n  // 2-Qadam: countEl.textContent = count; deb chiqaring\n  // 3-Qadam: if (count === 10) { alert("G\'alaba! 🏆"); } deb yozing:\n});\n'
    },
    targetCode: {
      en: '// Theme 24 Solution\nlet count = 0;\nconst countEl = document.querySelector("#count");\nconst clickBtn = document.querySelector("#click-btn");\n\nclickBtn.addEventListener("click", () => {\n  count++;\n  countEl.textContent = count;\n  if (count === 10) {\n    alert("G\'alaba! 🏆");\n  }\n});',
      uz: '// 24-Mavzu Yechimi\nlet count = 0;\nconst countEl = document.querySelector("#count");\nconst clickBtn = document.querySelector("#click-btn");\n\nclickBtn.addEventListener("click", () => {\n  count++;\n  countEl.textContent = count;\n  if (count === 10) {\n    alert("G\'alaba! 🏆");\n  }\n});'
    },
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

function getLessonById(id) {
  return LESSONS.find(l => l.id === id) || null;
}

function getLessonsByModule(modId) {
  return LESSONS.filter(l => l.module === modId);
}

// Ensure validators ignore comments so hints/comments in starter code never trigger false passes
LESSONS.forEach(lesson => {
  const originalValidate = lesson.validate;
  lesson.validate = (code) => {
    const codeStr = (typeof code === 'object' && code !== null)
      ? (code.uz || code.en || Object.values(code)[0] || '')
      : code;
    if (!codeStr || typeof codeStr !== 'string') {
      return { passed: false, message: 'Kodingizni yozing!' };
    }
    const cleanCode = codeStr
      .replace(/\/\/.*$/gm, '')
      .replace(/\/\*[\s\S]*?\*\//g, '');
    return originalValidate(cleanCode);
  };
});


  // --- i18n Module ---
  /**
 * Internationalization (i18n) Module: English (EN) & Uzbek (UZ) for CodeCraft JS
 */

const UI_TEXT = {
  en: {
    appTitle: 'CodeCraft JS',
    appSubtitle: 'JavaScript for Kids',
    startPractice: '🚀 Start Practice',
    resetCode: '🔄 Reset to Start',
    listOfTags: '📋 List of Commands',
    teacherTips: '🧑‍🏫 Teacher Tips',
    soundOn: '🔊 Sound: ON',
    soundOff: '🔇 Sound: OFF',
    freeSandbox: '🚀 Free Sandbox',
    lessonPrefix: 'Theme',
    yourProgress: 'Your Progress',
    completedTag: '✅ Completed!',
    humanLanguageHeader: '💡 In Human Language: What is this?',
    tagSandwichHeader: '🥪 The Secret Formula: How to Write It',
    tagShowcaseHeader: '🏷️ Simple Commands & Keywords to Know:',
    stepBreakdownHeader: '🔍 Step-by-Step Breakdown: What Each Part Does to the Result',
    resultCallout: 'Result:',
    codeEditorTitle: 'JS Code (Edit Here)',
    liveConsoleTitle: 'Interactive Console & Output',
    tagsLabel: 'Keywords:',
    browserPreviewTitle: 'Live Preview & Console Output',
    yourResultTab: 'Console & Output',
    targetGoalTab: '🎯 Target Goal',
    compareTab: '⚖️ Compare',
    targetExplanationTitle: '🎯 What the Result Should Look Like:',
    missionTag: '🎯 Mission',
    hintBtn: '💡 Hint',
    checkCodeBtn: '🚀 Check My Code!',
    runCodeBtn: '▶️ Run Code',
    copyBtn: '📋 Copy',
    copiedMsg: '✅ Copied!',
    tidyBtn: '🪄 Tidy',
    clearConsoleBtn: '🧹 Clear Console',
    modalCompleteTitle: 'MISSION COMPLETE!',
    starsEarnedMsg: '+3 STARS EARNED! ⭐⭐⭐',
    stayHereBtn: 'Stay Here',
    nextLessonBtn: 'Next Lesson ➡️',
    tryAgainTitle: 'Almost There!',
    tryAgainBody: 'Take a quick look at your code:',
    retryBtn: 'Let Me Try Again! 💪',
    tagListModalTitle: 'List of Commands & Keywords',
    tagListDesc: 'Here are all the JavaScript commands and keywords in this theme. Click any chip to copy it!',
    colCode: 'Command / Code',
    colName: 'Name',
    colMeaning: 'Meaning (What It Does)',
    doneBtn: 'Got it!',
    langToggleBtn: '🇺🇿 O\'zbekcha',
    labsBtn: '🧪 Visual Labs',
    readAloudBtn: '🔊 Read Aloud',
    stopSpeechBtn: '⏹️ Stop Voice',
    insertTagHint: 'Click to insert at cursor',
    topicLabBtn: '🧪 Visual Lab',
    topicLabModalTitle: 'Interactive JS Visual Lab',
    topicLabEffectLabel: 'Stage Effect on State:',
    topicLabGeneratedCode: 'Live Generated Code'
  },
  uz: {
    appTitle: 'CodeCraft JS',
    appSubtitle: 'Bolalar uchun JavaScript',
    startPractice: '🚀 Mashqni Boshlash',
    resetCode: '🔄 Boshiga Qaytish',
    listOfTags: '📋 Buyruqlar Ro\'yxati',
    teacherTips: '🧑‍🏫 O\'qituvchiga Maslahat',
    soundOn: '🔊 Ovoz: YONIQ',
    soundOff: '🔇 Ovoz: O\'CHIQ',
    freeSandbox: '🚀 Erkin Qumloq (Sandbox)',
    lessonPrefix: 'Mavzu',
    yourProgress: 'Sizning Natijangiz',
    completedTag: '✅ Bajarildi!',
    humanLanguageHeader: '💡 Odam Tilida: Bu nima o\'zi?',
    tagSandwichHeader: '🥪 Sehrli Formula: Qanday yoziladi?',
    tagShowcaseHeader: '🏷️ Bilib olish kerak bo\'lgan buyruqlar va kalit so\'zlar:',
    stepBreakdownHeader: '🔍 Qadamma-qadam tahlil: Har bir belgi natijaga qanday ta\'sir qiladi?',
    resultCallout: 'Natija:',
    codeEditorTitle: 'JS Kod (Shu yerda tahrirlang)',
    liveConsoleTitle: 'Interaktiv Konsol va Natija',
    tagsLabel: 'Kalit so\'zlar:',
    browserPreviewTitle: 'Jonli Natija va Konsol Oynasi',
    yourResultTab: 'Konsol va Natija',
    targetGoalTab: '🎯 Maqsad natijasi',
    compareTab: '⚖️ Taqqoslash',
    targetExplanationTitle: '🎯 Natija qanday ko\'rinishi kerak:',
    missionTag: '🎯 Vazifa',
    hintBtn: '💡 Maslahat',
    checkCodeBtn: '🚀 Kodimni tekshirish!',
    runCodeBtn: '▶️ Ishga tushirish',
    copyBtn: '📋 Nusxalash',
    copiedMsg: '✅ Nusxalandi!',
    tidyBtn: '🪄 Tartiblash',
    clearConsoleBtn: '🧹 Konsolni tozalash',
    modalCompleteTitle: 'VAZIFA BAJARILDI!',
    starsEarnedMsg: '+3 YULDUZCHA YUTIB OLDINGIZ! ⭐⭐⭐',
    stayHereBtn: 'Shu yerda qolish',
    nextLessonBtn: 'Keyingi dars ➡️',
    tryAgainTitle: 'Juda yaqin keldingiz!',
    tryAgainBody: 'Kodingizga yana bir bor e\'tibor bering:',
    retryBtn: 'Qayta urinib ko\'rish! 💪',
    tagListModalTitle: 'Buyruqlar va Kalit So\'zlar Ro\'yxati',
    tagListDesc: 'Ushbu mavzuda o\'rganiladigan barcha buyruqlar. Nusxalash uchun istalgan kod ustiga bosing!',
    colCode: 'Buyruq / Kod',
    colName: 'Nomi',
    colMeaning: 'Vazifasi (Nima ish qiladi)',
    doneBtn: 'Tushundim!',
    langToggleBtn: '🇬🇧 English',
    labsBtn: '🧪 Vizual Laboratoriyalar',
    readAloudBtn: '🔊 Ovozli o\'qish',
    stopSpeechBtn: '⏹️ To\'xtatish',
    insertTagHint: 'Kursorga kiritish uchun bosing',
    topicLabBtn: '🧪 Vizual Laboratoriya',
    topicLabModalTitle: 'Interaktiv JS Vizual Laboratoriya',
    topicLabEffectLabel: 'Holatga ta\'siri:',
    topicLabGeneratedCode: 'Jonli Yaratilgan Kod'
  }
};

function t(key, lang = 'en') {
  const currentLang = (lang === 'uz') ? 'uz' : 'en';
  return UI_TEXT[currentLang]?.[key] || UI_TEXT.en[key] || key;
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}


  // --- State Module ---
  /**
 * State Management Module for CodeCraft JS (Kids)
 * Pure immutable state transitions for progress, badges, preferences,
 * and offline multi-student shift profile management.
 */

const STORAGE_KEY = 'codecraft_js_kids_v1_state';
const PROFILES_INDEX_KEY = 'codecraft_js_kids_profiles_index_v2';
const ACTIVE_PROFILE_ID_KEY = 'codecraft_js_kids_active_profile_id_v2';
const PROFILE_STATE_PREFIX = 'codecraft_js_kids_profile_state_';

const CLASS_SHIFTS = [
  { id: 'shift-1', labelUz: '1-Smena (10:30 – 12:00)', labelEn: 'Shift 1 (10:30 – 12:00)', value: '1-Smena (10:30 - 12:00)', time: '10:30 - 12:00' },
  { id: 'shift-2', labelUz: '2-Smena (14:00 – 15:30)', labelEn: 'Shift 2 (14:00 – 15:30)', value: '2-Smena (14:00 - 15:30)', time: '14:00 - 15:30' },
  { id: 'shift-3', labelUz: '3-Smena (15:30 – 17:00)', labelEn: 'Shift 3 (15:30 – 17:00)', value: '3-Smena (15:30 - 17:00)', time: '15:30 - 17:00' }
];

function createInitialState() {
  return {
    studentName: 'JS Ninja',
    studentAvatar: '⚡',
    shift: '1-Smena (10:30 - 12:00)',
    profileId: 'prof_default',
    stars: 0,
    completedLessons: [],
    badges: [],
    currentLessonId: 'js-1-console',
    teacherMode: false,
    audioEnabled: true,
    editorFirstMode: false,
    focusIdeMode: false,
    lang: 'en', // 'en' | 'uz'
    theme: 'dark',
    customSandboxCode: `// CodeCraft JS Free Sandbox
console.log("Xush kelibsiz!");
let score = 0;
for (let i = 1; i <= 5; i++) {
  console.log("Yulduzcha #" + i + " ⭐");
}
`
  };
}

function completeLesson(state, lessonId, starsEarned = 3) {
  if (state.completedLessons.includes(lessonId)) {
    return state;
  }

  const updatedCompleted = [...state.completedLessons, lessonId];
  const updatedStars = state.stars + starsEarned;
  let updatedBadges = [...state.badges];

  if (updatedCompleted.length >= 1 && !updatedBadges.includes('apprentice')) {
    updatedBadges.push('apprentice');
  }
  if (updatedCompleted.length >= 5 && !updatedBadges.includes('star-coder')) {
    updatedBadges.push('star-coder');
  }
  if (updatedCompleted.length >= 10 && !updatedBadges.includes('master-crafter')) {
    updatedBadges.push('master-crafter');
  }
  if (updatedCompleted.length >= 24 && !updatedBadges.includes('js-wizard')) {
    updatedBadges.push('js-wizard');
  }

  return {
    ...state,
    completedLessons: updatedCompleted,
    stars: updatedStars,
    badges: updatedBadges
  };
}

function isLessonCompleted(state, lessonId) {
  return state.completedLessons.includes(lessonId);
}

function getTotalStars(state) {
  return state.stars;
}

function unlockBadge(state, badgeId) {
  if (state.badges.includes(badgeId)) {
    return state;
  }
  return {
    ...state,
    badges: [...state.badges, badgeId]
  };
}

function toggleTeacherMode(state) {
  return {
    ...state,
    teacherMode: !state.teacherMode
  };
}

function toggleAudio(state) {
  return {
    ...state,
    audioEnabled: !state.audioEnabled
  };
}

function toggleLanguage(state) {
  return {
    ...state,
    lang: state.lang === 'en' ? 'uz' : 'en'
  };
}

function setLanguage(state, lang) {
  return {
    ...state,
    lang: lang === 'uz' ? 'uz' : 'en'
  };
}

function setStudentProfile(state, { name, avatar }) {
  return {
    ...state,
    studentName: name !== undefined ? name : state.studentName,
    studentAvatar: avatar !== undefined ? avatar : state.studentAvatar
  };
}

function toggleEditorFirstMode(state) {
  return {
    ...state,
    editorFirstMode: !state.editorFirstMode
  };
}

function toggleFocusIdeMode(state) {
  return {
    ...state,
    focusIdeMode: !state.focusIdeMode
  };
}

function setTheme(state, theme) {
  return {
    ...state,
    theme: theme || 'dark'
  };
}

/* ==========================================================================
   OFFLINE MULTI-STUDENT PROFILE & SHIFT PERSISTENCE (LocalStorage)
   ========================================================================== */

function listStudentProfiles(storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (!store || !store.getItem) return [];

    const raw = store.getItem(PROFILES_INDEX_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }

    // Auto-migrate from legacy single state if present
    const legacyRaw = store.getItem(STORAGE_KEY);
    if (legacyRaw) {
      try {
        const legacy = JSON.parse(legacyRaw);
        const defaultProfile = {
          id: 'prof_default',
          name: legacy.studentName || 'JS Ninja',
          shift: legacy.shift || '1-Smena (10:30 - 12:00)',
          avatar: legacy.studentAvatar || '⚡',
          pin: '',
          createdAt: Date.now(),
          lastActiveAt: Date.now()
        };
        const profiles = [defaultProfile];
        if (store.setItem) {
          store.setItem(PROFILES_INDEX_KEY, JSON.stringify(profiles));
          store.setItem(ACTIVE_PROFILE_ID_KEY, 'prof_default');
          store.setItem(PROFILE_STATE_PREFIX + 'prof_default', JSON.stringify({
            ...legacy,
            profileId: 'prof_default',
            shift: defaultProfile.shift
          }));
        }
        return profiles;
      } catch (err) {}
    }
  } catch (e) {
    console.warn('Error reading student profiles:', e);
  }
  return [];
}

function getActiveProfileId(storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.getItem) {
      const id = store.getItem(ACTIVE_PROFILE_ID_KEY);
      if (id) return id;
    }
    const profiles = listStudentProfiles(store);
    return profiles.length > 0 ? profiles[0].id : 'prof_default';
  } catch (e) {
    return 'prof_default';
  }
}

function setActiveProfileId(profileId, storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.setItem) {
      store.setItem(ACTIVE_PROFILE_ID_KEY, profileId);
    }
  } catch (e) {}
}

function registerStudentProfile({ name, shift, avatar, pin }, storage = null) {
  const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
  const profiles = listStudentProfiles(store);

  const cleanName = (name || '').trim() || 'JS Ninja';
  const cleanShift = shift || '1-Smena (10:30 - 12:00)';
  const cleanAvatar = avatar || '⚡';
  const cleanPin = (pin || '').trim();

  const id = 'prof_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);
  const newProfile = {
    id,
    name: cleanName,
    shift: cleanShift,
    avatar: cleanAvatar,
    pin: cleanPin,
    createdAt: Date.now(),
    lastActiveAt: Date.now()
  };

  const freshState = {
    ...createInitialState(),
    profileId: id,
    studentName: cleanName,
    studentAvatar: cleanAvatar,
    shift: cleanShift,
    stars: 0,
    completedLessons: [],
    badges: []
  };

  const updatedProfiles = [...profiles, newProfile];

  if (store && store.setItem) {
    store.setItem(PROFILES_INDEX_KEY, JSON.stringify(updatedProfiles));
    store.setItem(ACTIVE_PROFILE_ID_KEY, id);
    store.setItem(PROFILE_STATE_PREFIX + id, JSON.stringify(freshState));
    store.setItem(STORAGE_KEY, JSON.stringify(freshState));
  }

  return { profile: newProfile, state: freshState };
}

function loginStudentProfile(profileId, pin = '', storage = null) {
  const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
  const profiles = listStudentProfiles(store);
  const target = profiles.find(p => p.id === profileId);

  if (!target) {
    return { success: false, error: 'NOT_FOUND' };
  }

  if (target.pin && target.pin !== pin) {
    return { success: false, error: 'INCORRECT_PIN' };
  }

  // Update last active
  const updatedProfiles = profiles.map(p => {
    if (p.id === profileId) {
      return { ...p, lastActiveAt: Date.now() };
    }
    return p;
  });

  if (store && store.setItem) {
    store.setItem(PROFILES_INDEX_KEY, JSON.stringify(updatedProfiles));
    store.setItem(ACTIVE_PROFILE_ID_KEY, profileId);
  }

  const loadedState = loadProfileState(profileId, store);
  if (store && store.setItem) {
    store.setItem(STORAGE_KEY, JSON.stringify(loadedState));
  }

  return { success: true, profile: target, state: loadedState };
}

function loadProfileState(profileId, storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (!store || !store.getItem) return createInitialState();

    const raw = store.getItem(PROFILE_STATE_PREFIX + profileId);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...createInitialState(),
        ...parsed,
        profileId
      };
    }
  } catch (e) {
    console.warn(`Error loading profile state ${profileId}:`, e);
  }
  return createInitialState();
}

function saveProfileState(profileId, state, storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.setItem) {
      const toSave = {
        ...state,
        profileId
      };
      store.setItem(PROFILE_STATE_PREFIX + profileId, JSON.stringify(toSave));
    }
  } catch (e) {
    console.warn(`Error saving profile state ${profileId}:`, e);
  }
}

function deleteStudentProfile(profileId, storage = null) {
  const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
  if (!store) return false;

  const profiles = listStudentProfiles(store);
  const filtered = profiles.filter(p => p.id !== profileId);

  if (store.setItem) {
    store.setItem(PROFILES_INDEX_KEY, JSON.stringify(filtered));
  }
  if (store.removeItem) {
    store.removeItem(PROFILE_STATE_PREFIX + profileId);
  }

  const activeId = getActiveProfileId(store);
  if (activeId === profileId) {
    const fallbackId = filtered.length > 0 ? filtered[0].id : 'prof_default';
    setActiveProfileId(fallbackId, store);
  }
  return true;
}

function exportClassroomBackup(storage = null) {
  const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
  const profiles = listStudentProfiles(store);
  const backup = {
    app: 'CodeCraft_JS_Offline',
    version: '2.0',
    exportedAt: new Date().toISOString(),
    profiles: profiles.map(p => {
      const pState = loadProfileState(p.id, store);
      return {
        profile: p,
        state: pState
      };
    })
  };
  return JSON.stringify(backup, null, 2);
}

function importClassroomBackup(jsonString, storage = null) {
  try {
    const data = JSON.parse(jsonString);
    if (!data || !Array.isArray(data.profiles)) {
      return { success: false, error: 'INVALID_BACKUP_FORMAT' };
    }

    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (!store || !store.setItem) return { success: false, error: 'NO_STORAGE' };

    const existingProfiles = listStudentProfiles(store);
    const existingIds = new Set(existingProfiles.map(p => p.id));

    let importedCount = 0;
    const mergedProfiles = [...existingProfiles];

    for (const item of data.profiles) {
      if (!item.profile || !item.profile.id) continue;
      const p = item.profile;
      const s = item.state || createInitialState();

      if (!existingIds.has(p.id)) {
        mergedProfiles.push(p);
        existingIds.add(p.id);
      }
      store.setItem(PROFILE_STATE_PREFIX + p.id, JSON.stringify(s));
      importedCount++;
    }

    store.setItem(PROFILES_INDEX_KEY, JSON.stringify(mergedProfiles));
    return { success: true, count: importedCount };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

function saveStateToStorage(state, storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.setItem) {
      store.setItem(STORAGE_KEY, JSON.stringify(state));
      if (state.profileId) {
        saveProfileState(state.profileId, state, store);
      }
    }
  } catch (e) {
    console.warn('Could not save state to storage:', e);
  }
}

function loadStateFromStorage(storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (!store || !store.getItem) {
      return createInitialState();
    }

    const activeId = getActiveProfileId(store);
    if (activeId) {
      const pState = loadProfileState(activeId, store);
      if (pState && pState.studentName) {
        return pState;
      }
    }

    const saved = store.getItem(STORAGE_KEY);
    if (!saved) {
      return createInitialState();
    }

    const parsed = JSON.parse(saved);
    return {
      ...createInitialState(),
      ...parsed
    };
  } catch (e) {
    console.warn('Could not load state from storage:', e);
    return createInitialState();
  }
}


  // --- Audio Module ---
  /**
 * Audio Synthesizer Module
 * Uses Web Audio API to create joyful retro game sound effects.
 * 100% offline, zero audio assets required!
 */

let audioCtx = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSound(type = 'click', isEnabled = true) {
  if (!isEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;

    switch (type) {
      case 'click': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.06);
        break;
      }

      case 'star': {
        // High sparkling bell chime
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const start = now + (i * 0.06);

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, start);

          gain.gain.setValueAtTime(0.12, start);
          gain.gain.exponentialRampToValueAtTime(0.001, start + 0.3);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(start);
          osc.stop(start + 0.35);
        });
        break;
      }

      case 'success': {
        // Joyful fanfare: C - E - G - high C
        const notes = [
          { f: 523.25, d: 0.1 },  // C5
          { f: 659.25, d: 0.1 },  // E5
          { f: 783.99, d: 0.12 }, // G5
          { f: 1046.5, d: 0.35 }  // C6
        ];
        let offset = 0;
        notes.forEach(({ f, d }) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const t = now + offset;

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, t);

          gain.gain.setValueAtTime(0.2, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + d);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t);
          osc.stop(t + d + 0.05);

          offset += d * 0.85;
        });
        break;
      }

      case 'tryAgain': {
        // Playful cartoon "boing"
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(150, now + 0.25);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.26);
        break;
      }

      case 'badge': {
        // Power-up ascending flourish
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.4);

        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.46);
        break;
      }
    }
  } catch (e) {
    console.debug('Audio error:', e);
  }
}


  // --- Ambient Canvas Module ---
  /**
 * Ambient Canvas Engine
 * 100% offline, lightweight, high-performance canvas backdrop.
 * Living interactive particle field responding to cursor and adapting colors to active theme.
 */

function initAmbientCanvas(canvasId = 'ambient-canvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return null;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  const mouse = { x: -9999, y: -9999 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  // 40 Ambient living particles
  const PARTICLE_COUNT = 42;
  const particles = [];
  const matrixChars = ['0', '1', 'λ', 'π', '{', '}', ';', '>', '<', '⚡', '★', '◆', '▲'];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2.2 + 1.2,
      baseAlpha: Math.random() * 0.4 + 0.3,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.02,
      char: matrixChars[Math.floor(Math.random() * matrixChars.length)]
    });
  }

  let currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';

  function getPalette(theme) {
    switch (theme) {
      case 'light':
        return {
          particle: 'rgba(37, 99, 235, 0.45)',
          glow: 'rgba(59, 130, 246, 0.25)',
          line: 'rgba(37, 99, 235, 0.12)',
          accent: 'rgba(16, 185, 129, 0.4)'
        };
      case 'synthwave':
        return {
          particle: 'rgba(192, 132, 252, 0.65)',
          glow: 'rgba(244, 63, 94, 0.35)',
          line: 'rgba(168, 85, 247, 0.18)',
          accent: 'rgba(56, 189, 248, 0.6)'
        };
      case 'matrix':
        return {
          particle: 'rgba(34, 197, 94, 0.75)',
          glow: 'rgba(16, 185, 129, 0.4)',
          line: 'rgba(34, 197, 94, 0.22)',
          accent: 'rgba(74, 222, 128, 0.85)'
        };
      case 'dark':
      default:
        return {
          particle: 'rgba(56, 189, 248, 0.55)',
          glow: 'rgba(99, 102, 241, 0.35)',
          line: 'rgba(56, 189, 248, 0.14)',
          accent: 'rgba(129, 140, 248, 0.55)'
        };
    }
  }

  let animFrameId = null;

  function render() {
    ctx.clearRect(0, 0, width, height);
    const colors = getPalette(currentTheme);

    if (currentTheme === 'matrix') {
      ctx.font = '12px "Fira Code", monospace';
    }

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.pulse += p.pulseSpeed;
      p.x += p.vx;
      p.y += p.vy;

      // Wrap-around viewport edges smoothly
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;

      // Cursor proximity interaction
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.hypot(dx, dy);

      if (dist < 130 && dist > 0) {
        const force = (130 - dist) / 130;
        p.x -= (dx / dist) * force * 1.8;
        p.y -= (dy / dist) * force * 1.8;

        // Draw laser connector to cursor
        ctx.strokeStyle = colors.glow;
        ctx.lineWidth = 1.2 * force;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }

      // Draw particle or matrix glyph
      const dynamicSize = p.size + Math.sin(p.pulse) * 0.6;
      ctx.fillStyle = (i % 3 === 0) ? colors.accent : colors.particle;

      if (currentTheme === 'matrix') {
        ctx.fillText(p.char, p.x, p.y);
        if (Math.random() < 0.015) {
          p.char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        }
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.6, dynamicSize), 0, Math.PI * 2);
        ctx.fill();
      }

      // Constellation connectors
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const pDist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (pDist < 100) {
          ctx.strokeStyle = colors.line;
          ctx.lineWidth = 0.8 * (1 - pDist / 100);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    animFrameId = requestAnimationFrame(render);
  }

  animFrameId = requestAnimationFrame(render);

  return {
    setTheme: (newTheme) => {
      currentTheme = newTheme;
    },
    destroy: () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
    }
  };
}


  // --- Confetti Module ---
  /**
 * Confetti Celebration Engine
 * Renders colorful stars, confetti ribbons, and sparkles on canvas.
 */

function triggerConfetti(canvasElement) {
  if (!canvasElement) return;

  const ctx = canvasElement.getContext('2d');
  if (!ctx) return;

  const width = (canvasElement.width = window.innerWidth);
  const height = (canvasElement.height = window.innerHeight);

  const colors = ['#ff4757', '#2ed573', '#1e90ff', '#ffa502', '#9b59b6', '#e056fd', '#00d2d3'];
  const particles = [];
  const particleCount = 120;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: width / 2,
      y: height / 2 + 50,
      vx: (Math.random() - 0.5) * 18,
      vy: (Math.random() - 0.8) * 22,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      opacity: 1,
      shape: Math.random() > 0.4 ? 'rect' : 'star'
    });
  }

  let animationFrameId;

  function render() {
    ctx.clearRect(0, 0, width, height);

    let activeCount = 0;

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45; // gravity
      p.vx *= 0.98; // air resistance
      p.rotation += p.vRot;
      p.opacity -= 0.009; // fade out

      if (p.opacity > 0 && p.y < height + 50) {
        activeCount++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;

        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.6);
        } else {
          // Draw mini star
          ctx.beginPath();
          for (let s = 0; s < 5; s++) {
            ctx.lineTo(
              Math.cos(((18 + s * 72) * Math.PI) / 180) * p.size,
              -Math.sin(((18 + s * 72) * Math.PI) / 180) * p.size
            );
            ctx.lineTo(
              Math.cos(((54 + s * 72) * Math.PI) / 180) * (p.size / 2),
              -Math.sin(((54 + s * 72) * Math.PI) / 180) * (p.size / 2)
            );
          }
          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();
      }
    }

    if (activeCount > 0) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, width, height);
      cancelAnimationFrame(animationFrameId);
    }
  }

  render();
}


  // --- Speech Module ---
  /**
 * Speech Narrator Module
 * Uses Web Speech API to read lessons and challenge missions aloud to kids.
 */

let currentUtterance = null;

function speakText(text, lang = 'en', onEndCallback = null) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this environment');
    if (onEndCallback) onEndCallback();
    return;
  }

  // Stop any ongoing speech
  window.speechSynthesis.cancel();

  if (!text) {
    if (onEndCallback) onEndCallback();
    return;
  }

  // Clean HTML tags or markdown formatting
  const plainText = text.replace(/<[^>]+>/g, '').replace(/[#*`_]/g, '');

  const utterance = new SpeechSynthesisUtterance(plainText);
  utterance.rate = 0.95; // slightly slower, clear for kids
  utterance.pitch = 1.05; // friendly, upbeat
  utterance.lang = lang === 'uz' ? 'uz-UZ' : 'en-US';

  // Find best matching voice
  const voices = window.speechSynthesis.getVoices() || [];
  if (voices.length > 0) {
    let bestVoice = null;
    if (lang === 'uz') {
      bestVoice = voices.find(v => v.lang.startsWith('uz')) || voices.find(v => v.lang.startsWith('ru'));
    }
    if (!bestVoice) {
      bestVoice = voices.find(
        v => (v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Natural') || v.name.includes('Zira')) && v.lang.startsWith('en')
      ) || voices.find(v => v.lang.startsWith('en'));
    }
    if (bestVoice) {
      utterance.voice = bestVoice;
    }
  }

  utterance.onend = () => {
    currentUtterance = null;
    if (onEndCallback) onEndCallback();
  };

  utterance.onerror = () => {
    currentUtterance = null;
    if (onEndCallback) onEndCallback();
  };

  currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

function stopSpeaking() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    currentUtterance = null;
  }
}

function isSpeaking() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return false;
  return window.speechSynthesis.speaking;
}


  // --- Sandbox Module ---
  /**
 * JavaScript Free Sandbox Starter Templates for Kids
 * 100% Offline, ready-to-play mini-games and experiments.
 */

const JS_STARTER_TEMPLATES = [
  {
    id: 'template-clicker',
    name: { uz: "🏆 Kliker Mini-O'yini", en: "🏆 Clicker Mini-Game" },
    desc: { uz: "Tugmani bosib ochko to'plash va 20 ballga yetganda g'alaba qilish!", en: "Click to gain points and win at 20 clicks!" },
    code: `// 🏆 Super Kliker O'yini
let score = 0;
const countEl = document.querySelector("#count");
const clickBtn = document.querySelector("#click-btn");
const box = document.querySelector("#box");

box.textContent = "O'yinni Boshlang! 🚀";

clickBtn.addEventListener("click", () => {
  score++;
  countEl.textContent = score;
  
  if (score % 2 === 0) {
    box.style.backgroundColor = "#10b981";
    box.textContent = "Super! +1 ⭐";
  } else {
    box.style.backgroundColor = "#8b5cf6";
    box.textContent = "Davom eting! 🔥";
  }

  if (score === 20) {
    alert("G'ALABA! SIZ 20 BALL TO'PLADINGIZ! 🏆🎉");
    box.style.backgroundColor = "gold";
    box.textContent = "CHEMPION! 👑";
  }
});
`
  },
  {
    id: 'template-dice',
    name: { uz: "🎲 O'yin Kubigi (Dice Roller)", en: "🎲 Dice Roller Simulator" },
    desc: { uz: "Tugmani bosib 1 dan 6 gacha tasodifiy son chiqaruvchi zar!", en: "Roll a random die 1 to 6 every time you click!" },
    code: `// 🎲 O'yin Kubigi (Zar) Simulyatori
const btn = document.querySelector("#btn");
const box = document.querySelector("#box");

btn.textContent = "Zar Tashlash 🎲";
box.textContent = "Kubik tayyor!";

btn.addEventListener("click", () => {
  let dice = Math.floor(Math.random() * 6) + 1;
  const diceIcons = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  
  box.textContent = \`\${diceIcons[dice - 1]} Son: \${dice}\`;
  box.style.fontSize = "22px";
  box.style.backgroundColor = dice === 6 ? "gold" : "#3b82f6";
  
  console.log("Tushgan zar:", dice);
});
`
  },
  {
    id: 'template-disco',
    name: { uz: "🌈 Rangli Disko Chiroqlar", en: "🌈 Color Disco Light Show" },
    desc: { uz: "setInterval taymeri orqali fon ranglarini har soniyada o'zgartirish!", en: "Automatic color changing light show using setInterval!" },
    code: `// 🌈 Rangli Disko Chiroqlar
const box = document.querySelector("#box");
const colors = ["#ef4444", "#f97316", "#eab308", "#10b981", "#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"];
let index = 0;

box.textContent = "DISKO! 🪩";
box.style.color = "white";

setInterval(() => {
  box.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}, 500);

console.log("Disko chiroqlar yoqildi! 🎶");
`
  }
];

function getStarterTemplateById(id) {
  return JS_STARTER_TEMPLATES.find(t => t.id === id) || JS_STARTER_TEMPLATES[0];
}


  // --- Classroom Module ---
  /**
 * Classroom Multi-Student & Shift Portal Module for CodeCraft JS
 * 100% Offline LocalStorage student management for computer labs with shifts.
 * Runs on Windows 7, 8, 10 with ZERO internet, servers, or database installations.
 */





function openStudentPortalModal({ state, onProfileSwitched, playSound, defaultTab = 'login' }) {
  playSound?.('click', state.audioEnabled);

  const existing = document.getElementById('student-portal-modal');
  if (existing) existing.remove();

  const isUz = state.lang === 'uz';
  let activeTab = defaultTab;
  let selectedAvatar = '⚡';
  let selectedShiftFilter = 'all';
  let defaultRegShift = '1-Smena (10:30 - 12:00)';

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'student-portal-modal';

  function renderModalContent() {
    const profiles = listStudentProfiles();
    const activeId = getActiveProfileId();

    modal.innerHTML = `
      <div class="modal-card student-portal-card">
        <div class="student-portal-header">
          <div class="portal-header-left">
            <span class="portal-icon">⚡</span>
            <div>
              <h3 class="portal-title">${isUz ? "CodeCraft JS: O'quvchilar & Smenalar Portali" : "CodeCraft JS: Student Profiles & Shifts"}</h3>
              <p class="portal-subtitle">${isUz ? "100% Oflayn: Ma'lumotlar ushbu kompyuterda xavfsiz saqlanadi" : "100% Offline: Data stored permanently on this PC"}</p>
            </div>
          </div>
          <button id="btn-close-portal" class="btn-close-modal" title="Close">✕</button>
        </div>

        <div class="portal-tabs-nav">
          <button class="portal-tab-btn ${activeTab === 'login' ? 'active' : ''}" id="tab-btn-login">
            👤 ${isUz ? "O'quvchini Tanlash (Kirish)" : "Login / Select Student"} (${profiles.length})
          </button>
          <button class="portal-tab-btn ${activeTab === 'register' ? 'active' : ''}" id="tab-btn-register">
            ➕ ${isUz ? "Yangi O'quvchi (Ro'yxatdan o'tish)" : "New Student (Register)"}
          </button>
          <button class="portal-tab-btn ${activeTab === 'backup' ? 'active' : ''}" id="tab-btn-backup">
            💾 ${isUz ? "Fleshka & O'qituvchi Boshqaruvi" : "USB Backup & Teacher Tools"}
          </button>
        </div>

        <div class="portal-body" id="portal-tab-body">
          ${renderTabBody(profiles, activeId)}
        </div>
      </div>
    `;

    attachEvents();
  }

  function renderTabBody(profiles, activeId) {
    if (activeTab === 'login') {
      if (profiles.length === 0) {
        return `
          <div class="portal-empty-state">
            <span style="font-size: 48px;">🎒</span>
            <h4>${isUz ? "Hali hech qanday o'quvchi ro'yxatdan o'tmagan" : "No students registered on this computer yet"}</h4>
            <p>${isUz ? "Darsni boshlash uchun yangi o'quvchini ro'yxatdan o'tkazing." : "Register a new student to start tracking their progress."}</p>
            <button id="btn-go-to-reg" class="btn-modal btn-modal-primary" style="margin-top: 12px;">
              ➕ ${isUz ? "Yangi O'quvchi Qo'shish" : "Add First Student"}
            </button>
          </div>
        `;
      }

      const countAll = profiles.length;
      const count1 = profiles.filter(p => (p.shift || '').includes('1-Smena') || (p.shift || '').includes('10:30')).length;
      const count2 = profiles.filter(p => (p.shift || '').includes('2-Smena') || (p.shift || '').includes('14:00')).length;
      const count3 = profiles.filter(p => (p.shift || '').includes('3-Smena') || (p.shift || '').includes('15:30')).length;

      let filteredProfiles = profiles;
      if (selectedShiftFilter === '1') {
        filteredProfiles = profiles.filter(p => (p.shift || '').includes('1-Smena') || (p.shift || '').includes('10:30'));
      } else if (selectedShiftFilter === '2') {
        filteredProfiles = profiles.filter(p => (p.shift || '').includes('2-Smena') || (p.shift || '').includes('14:00'));
      } else if (selectedShiftFilter === '3') {
        filteredProfiles = profiles.filter(p => (p.shift || '').includes('3-Smena') || (p.shift || '').includes('15:30'));
      }

      return `
        <div class="portal-shift-pills-bar">
          <button type="button" class="portal-shift-pill ${selectedShiftFilter === 'all' ? 'active' : ''}" data-filter-shift="all">
            👥 ${isUz ? "Barcha Smenalar" : "All Shifts"} (${countAll})
          </button>
          <button type="button" class="portal-shift-pill ${selectedShiftFilter === '1' ? 'active' : ''}" data-filter-shift="1">
            🕒 1-Smena (10:30 – 12:00) (${count1})
          </button>
          <button type="button" class="portal-shift-pill ${selectedShiftFilter === '2' ? 'active' : ''}" data-filter-shift="2">
            🕒 2-Smena (14:00 – 15:30) (${count2})
          </button>
          <button type="button" class="portal-shift-pill ${selectedShiftFilter === '3' ? 'active' : ''}" data-filter-shift="3">
            🕒 3-Smena (15:30 – 17:00) (${count3})
          </button>
        </div>

        ${filteredProfiles.length === 0 ? `
          <div class="portal-empty-state" style="padding: 24px;">
            <span style="font-size: 36px;">🕒</span>
            <h4>${isUz ? "Ushbu smenada hozircha o'quvchilar yo'q" : "No students found in this shift"}</h4>
            <p>${isUz ? "Ushbu smenadagi o'quvchini ro'yxatdan o'tkazish uchun quyidagi tugmani bosing." : "Click below to register a new student for this shift schedule."}</p>
            <button class="btn-modal btn-modal-primary" id="btn-add-to-shift" style="margin-top: 10px;">
              ➕ ${isUz ? "Shu smenaga o'quvchi qo'shish" : "Add Student to this Shift"}
            </button>
          </div>
        ` : `
          <div class="student-cards-grid">
            ${filteredProfiles.map(p => {
              const pState = loadProfileState(p.id);
              const total = LESSONS.length;
              const completed = pState.completedLessons ? pState.completedLessons.length : 0;
              const pct = Math.round((completed / total) * 100);
              const isActive = p.id === activeId;

              return `
                <div class="student-profile-card ${isActive ? 'active-card' : ''}" data-profile-id="${p.id}">
                  <div class="card-avatar-col">
                    <span class="card-avatar">${escapeHtml(p.avatar || '⚡')}</span>
                    ${p.pin ? '<span class="pin-protected-badge" title="PIN bilan himoyalangan">🔒 PIN</span>' : ''}
                  </div>
                  <div class="card-info-col">
                    <div class="card-name-row">
                      <strong class="card-student-name">${escapeHtml(p.name)}</strong>
                      ${isActive ? `<span class="badge-active-tag">${isUz ? 'Faol' : 'Active'}</span>` : ''}
                    </div>
                    <div class="card-shift-tag">🕒 ${escapeHtml(p.shift || '1-Smena (10:30 - 12:00)')}</div>
                    <div class="card-progress-bar-wrap">
                      <div class="card-progress-bar-fill" style="width: ${pct}%;"></div>
                    </div>
                    <div class="card-stats-row">
                      <span>📚 ${completed}/${total} (${pct}%)</span>
                      <span>⭐ ${pState.stars || 0}</span>
                      <span>🏆 ${pState.badges ? pState.badges.length : 0}</span>
                    </div>
                  </div>
                  <div class="card-action-col">
                    <button class="btn-card-select ${isActive ? 'btn-selected' : ''}" data-id="${p.id}">
                      ${isActive ? (isUz ? '✅ Tanlangan' : '✅ Active') : (isUz ? '👉 Kirish' : '👉 Login')}
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `}
      `;
    }

    if (activeTab === 'register') {
      const avatars = ['⚡', '🤖', '🚀', '🦊', '🦁', '🐼', '💎', '⭐', '🎮', '🦄'];
      return `
        <form class="portal-form" id="form-register-student">
          <div class="form-row">
            <label for="reg-name"><strong>${isUz ? "O'quvchi Ismi va Familiyasi:" : "Student Full Name:"}</strong></label>
            <input type="text" id="reg-name" class="lab-input-text" placeholder="${isUz ? 'Masalan: Ali Karimov' : 'e.g. Alex Johnson'}" required autofocus />
          </div>

          <div class="form-row">
            <label for="reg-shift"><strong>${isUz ? "Dars Smenasi / Vaqti:" : "Class Shift Schedule:"}</strong></label>
            <select id="reg-shift" class="lab-select">
              <option value="1-Smena (10:30 - 12:00)" ${defaultRegShift.includes('10:30') ? 'selected' : ''}>1-Smena (10:30 – 12:00)</option>
              <option value="2-Smena (14:00 - 15:30)" ${defaultRegShift.includes('14:00') ? 'selected' : ''}>2-Smena (14:00 – 15:30)</option>
              <option value="3-Smena (15:30 - 17:00)" ${defaultRegShift.includes('15:30') ? 'selected' : ''}>3-Smena (15:30 – 17:00)</option>
            </select>
          </div>

          <div class="form-row">
            <label><strong>${isUz ? "Qahramoningizni Tanlang (Avatar):" : "Choose Your Avatar:"}</strong></label>
            <div class="avatar-picker-row">
              ${avatars.map(av => `
                <button type="button" class="avatar-pick-btn ${av === selectedAvatar ? 'selected' : ''}" data-avatar="${av}">
                  ${av}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="form-row">
            <label for="reg-pin"><strong>${isUz ? "Maxfiy PIN-kod (Ixtiyoriy 4 ta raqam):" : "Secret PIN (Optional 4 digits):"}</strong></label>
            <input type="password" id="reg-pin" class="lab-input-text" maxlength="4" placeholder="${isUz ? 'Boshqalar kirmasligi uchun (ixtiyoriy)' : 'Prevent others from accessing (optional)'}" />
            <small style="color: var(--text-muted); font-size: 11px;">
              ${isUz ? "Agar kiritmasangiz, o'quvchi 1 ta bosishda erkin kira oladi." : "If empty, student can log in instantly with 1 click."}
            </small>
          </div>

          <div class="form-submit-row">
            <button type="submit" class="btn-modal btn-modal-primary" style="padding: 12px 24px; font-size: 14px;">
              🚀 ${isUz ? "Ro'yxatdan O'tish va Boshlash" : "Register & Start Practice"}
            </button>
          </div>
        </form>
      `;
    }

    if (activeTab === 'backup') {
      return `
        <div class="portal-backup-panel">
          <div class="backup-info-card">
            <h4>💾 ${isUz ? "O'qituvchi Uchun: Fleshkaga Saqlash & O'tkazish" : "Teacher Tools: USB Backup & Transfer"}</h4>
            <p>${isUz ? "Ushbu kompyuterdagi barcha JavaScript o'quvchilari ro'yxati va ularning yulduzchalarini fleshkaga fayl qilib saqlab oling. Boshqa kompyuterga bir zumda yuklashingiz mumkin." : "Export all student accounts and their progress into a single file to keep backups on USB or transfer students between offline lab PCs."}</p>
          </div>

          <div class="backup-actions-grid">
            <div class="backup-action-box">
              <span style="font-size: 32px;">💾</span>
              <strong>${isUz ? "Fleshkaga Saqlash" : "Export to USB"}</strong>
              <p style="font-size: 11px; color: var(--text-muted);">${isUz ? "Barcha o'quvchilar progressini bitta .json faylga yuklab oladi." : "Downloads a complete .json file with all student profiles & stars."}</p>
              <button id="btn-export-backup" class="btn-modal btn-modal-primary">
                💾 ${isUz ? "Faylni Yuklab Olish (.json)" : "Download Backup (.json)"}
              </button>
            </div>

            <div class="backup-action-box">
              <span style="font-size: 32px;">📂</span>
              <strong>${isUz ? "Fleshkadan Yuklash" : "Import from USB"}</strong>
              <p style="font-size: 11px; color: var(--text-muted);">${isUz ? "Boshqa kompyuterdan saqlangan .json faylni ushbu kompyuterga qo'shadi." : "Restores or merges students from a .json backup file into this PC."}</p>
              <input type="file" id="file-import-backup" accept=".json" style="display: none;" />
              <button id="btn-trigger-import" class="btn-modal" style="background: var(--bg-surface); border: 1px solid var(--border-color); color: white;">
                📂 ${isUz ? "Faylni Tanlash..." : "Choose File..."}
              </button>
            </div>
          </div>

          <div style="margin-top: 20px;">
            <h4 style="font-size: 13px; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">
              ${isUz ? "Ushbu Kompyuterdagi O'quvchilar Ro'yxati:" : "Registered Students on this PC:"}
            </h4>
            <div class="backup-students-table-wrap">
              <table class="tag-list-table">
                <thead>
                  <tr>
                    <th>${isUz ? "O'quvchi" : "Student"}</th>
                    <th>${isUz ? "Smena" : "Shift"}</th>
                    <th>${isUz ? "Bajarilgan" : "Completed"}</th>
                    <th>⭐</th>
                    <th>${isUz ? "Amal" : "Action"}</th>
                  </tr>
                </thead>
                <tbody>
                  ${profiles.map(p => {
                    const pState = loadProfileState(p.id);
                    return `
                      <tr>
                        <td><strong>${escapeHtml(p.avatar || '⚡')} ${escapeHtml(p.name)}</strong></td>
                        <td>${escapeHtml(p.shift || '1-Smena (10:30 - 12:00)')}</td>
                        <td>${pState.completedLessons ? pState.completedLessons.length : 0} / ${LESSONS.length}</td>
                        <td>⭐ ${pState.stars || 0}</td>
                        <td>
                          <button class="btn-delete-student" data-del-id="${p.id}" title="${isUz ? 'Profilni o\'chirish' : 'Delete profile'}">
                            🗑️
                          </button>
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    }

    return '';
  }

  function attachEvents() {
    // Close button
    modal.querySelector('#btn-close-portal')?.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });

    // Tab buttons
    modal.querySelector('#tab-btn-login')?.addEventListener('click', () => { activeTab = 'login'; renderModalContent(); });
    modal.querySelector('#tab-btn-register')?.addEventListener('click', () => { activeTab = 'register'; renderModalContent(); });
    modal.querySelector('#tab-btn-backup')?.addEventListener('click', () => { activeTab = 'backup'; renderModalContent(); });
    modal.querySelector('#btn-go-to-reg')?.addEventListener('click', () => { activeTab = 'register'; renderModalContent(); });

    // Shift filter pills
    modal.querySelectorAll('.portal-shift-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedShiftFilter = btn.getAttribute('data-filter-shift') || 'all';
        renderModalContent();
      });
    });

    // Add student to specific shift button
    modal.querySelector('#btn-add-to-shift')?.addEventListener('click', () => {
      if (selectedShiftFilter === '1') defaultRegShift = '1-Smena (10:30 - 12:00)';
      else if (selectedShiftFilter === '2') defaultRegShift = '2-Smena (14:00 - 15:30)';
      else if (selectedShiftFilter === '3') defaultRegShift = '3-Smena (15:30 - 17:00)';
      activeTab = 'register';
      renderModalContent();
    });

    // Select student in login tab
    modal.querySelectorAll('.btn-card-select').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const profiles = listStudentProfiles();
        const p = profiles.find(x => x.id === id);
        if (!p) return;

        let pin = '';
        if (p.pin) {
          pin = prompt(isUz ? "Maxfiy 4 xonali PIN-kodni kiriting:" : "Enter your 4-digit secret PIN:");
          if (pin === null) return;
        }

        const res = loginStudentProfile(id, pin);
        if (res.success) {
          playSound?.('success', true);
          onProfileSwitched?.(res.state, res.profile);
          modal.remove();
        } else {
          playSound?.('tryAgain', true);
          alert(isUz ? "❌ PIN-kod noto'g'ri kiritildi!" : "❌ Incorrect PIN!");
        }
      });
    });

    // Avatar pickers in register tab
    modal.querySelectorAll('.avatar-pick-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedAvatar = btn.getAttribute('data-avatar');
        modal.querySelectorAll('.avatar-pick-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    // Form submit for registration
    modal.querySelector('#form-register-student')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = modal.querySelector('#reg-name')?.value;
      const shift = modal.querySelector('#reg-shift')?.value;
      const pin = modal.querySelector('#reg-pin')?.value;

      const { profile, state: freshState } = registerStudentProfile({
        name,
        shift,
        avatar: selectedAvatar,
        pin
      });

      playSound?.('success', true);
      onProfileSwitched?.(freshState, profile);
      modal.remove();
    });

    // Export to USB JSON file
    modal.querySelector('#btn-export-backup')?.addEventListener('click', () => {
      const backupJson = exportClassroomBackup();
      const dateStr = new Date().toISOString().slice(0, 10);
      const filename = `codecraft_js_backup_${dateStr}.json`;

      const blob = new Blob([backupJson], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      playSound?.('click', true);
    });

    // Trigger Import file input
    const fileInput = modal.querySelector('#file-import-backup');
    modal.querySelector('#btn-trigger-import')?.addEventListener('click', () => {
      fileInput?.click();
    });

    fileInput?.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (evt) => {
        const text = evt.target?.result;
        const res = importClassroomBackup(text);
        if (res.success) {
          playSound?.('success', true);
          alert(isUz ? `✅ ${res.count} ta o'quvchi ma'lumotlari muvaffaqiyatli yuklandi!` : `✅ ${res.count} student profiles imported successfully!`);
          renderModalContent();
        } else {
          playSound?.('tryAgain', true);
          alert(isUz ? "❌ Faylni o'qishda xatolik yuz berdi." : "❌ Failed to parse backup file.");
        }
      };
      reader.readAsText(file);
    });

    // Delete student profile in backup tab
    modal.querySelectorAll('.btn-delete-student').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-del-id');
        const confirmMsg = isUz ? "Haqiqatan ham ushbu o'quvchi profilini o'chirmoqchimisiz?" : "Are you sure you want to delete this student profile?";
        if (confirm(confirmMsg)) {
          deleteStudentProfile(id);
          playSound?.('click', true);
          renderModalContent();
        }
      });
    });
  }

  renderModalContent();
  document.body.appendChild(modal);
}


  // --- Labs Module ---
  /**
 * Visual Labs Module for CodeCraft JS (All 24 Topics)
 * Interactive 4-stage slider visualizer:
 * Stage 1: Clean canvas / Initial state
 * Stage 2: Command / Keyword injected
 * Stage 3: Data / Parameters configured
 * Stage 4: Live interactive animated execution
 */



const TOPIC_LABS = {
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
function getTopicLab(lessonId, lesson) {
  if (TOPIC_LABS[lessonId]) return TOPIC_LABS[lessonId];

  const titleText = lesson ? (lesson.title.uz || lesson.title.en) : lessonId;
  const targetCodeRaw = lesson ? lesson.targetCode : '// code';
  const targetCode = typeof targetCodeRaw === 'object' && targetCodeRaw !== null
    ? (targetCodeRaw.uz || targetCodeRaw.en || Object.values(targetCodeRaw)[0] || '')
    : String(targetCodeRaw || '');

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

function openTopicLabModal(lessonId, lesson, state, playSound) {
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


  // --- Runner Module ---
  /**
 * JavaScript Code Runner & Virtual Console
 * Safely executes kid JavaScript inside an iframe sandbox, captures console logs,
 * intercepts alerts/prompts gracefully, and returns outputs.
 */

function executeJsInSandbox(code, outputContainer, livePreviewFrame, customHtml = null, isTarget = false) {
  const logs = [];

  function appendLog(type, args) {
    const text = args.map(arg => {
      if (typeof arg === 'object' && arg !== null) {
        try { return JSON.stringify(arg); } catch (e) { return String(arg); }
      }
      return String(arg);
    }).join(' ');
    logs.push({ type, text, time: new Date().toLocaleTimeString() });
  }

  const tagOpen = '<' + 'script>';
  const tagClose = '<' + '/script>';
  const logMsgType = isTarget ? 'TARGET_CONSOLE_LOG' : 'CONSOLE_LOG';
  const alertMsgType = isTarget ? 'TARGET_CONSOLE_ALERT' : 'CONSOLE_ALERT';

  const defaultBody = `
  <h2 id="title">CodeCraft JS Sandbox ⚡</h2>
  <div id="box">Sehrli Quti</div>
  <div class="hud-row">
    <button id="btn">Meni Bosing!</button>
    <button id="click-btn">O'yin Tugmasi (Clicker)</button>
    <span>Hisob: <span id="count">0</span></span>
  </div>
`;

  // Pre-configured mini HTML environment inside iframe so DOM tasks (querySelector, etc.) work!
  const sandboxHtml = `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #090d16;
      color: #f8fafc;
      padding: 16px;
      margin: 0;
      box-sizing: border-box;
    }
    #box {
      width: 140px;
      height: 70px;
      background: #3b82f6;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      margin: 12px 0;
      transition: all 0.3s ease;
      color: #0f172a;
    }
    button {
      background: #8b5cf6;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
    }
    #count {
      font-size: 28px;
      font-weight: 800;
      color: #38bdf8;
      margin-left: 10px;
    }
    .hud-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  ${customHtml || defaultBody}

  ${tagOpen}
    // Console interceptor
    window._capturedLogs = [];
    ['log', 'warn', 'error', 'info'].forEach(method => {
      const orig = console[method];
      console[method] = function(...args) {
        window._capturedLogs.push({ method, args: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)) });
        window.parent.postMessage({ type: '${logMsgType}', method, text: args.join(' ') }, '*');
        if (orig) orig.apply(console, args);
      };
    });

    // Alert & Prompt interceptors
    window.alert = function(msg) {
      window._capturedLogs.push({ method: 'alert', args: [msg] });
      window.parent.postMessage({ type: '${alertMsgType}', text: String(msg) }, '*');
    };

    window.prompt = function(msg, def) {
      const res = window.parent.prompt ? window.parent.prompt(msg, def || '') : (def || 'Ali');
      window._capturedLogs.push({ method: 'prompt', args: [msg, '->', res] });
      return res;
    };
  ${tagClose}

  ${tagOpen}
    try {
      ${String(code || '').replace(/<\/script>/gi, '<\\/script>')}
    } catch (err) {
      window._capturedLogs.push({ method: 'error', args: [err.message] });
      try {
        window.parent.postMessage({ type: '${logMsgType}', method: 'error', text: '❌ Xatolik (Error): ' + err.message }, '*');
      } catch (e) {}
    }
  ${tagClose}
</body>
</html>`;

  return new Promise((resolve) => {
    if (!livePreviewFrame) {
      // Node or headless test fallback
      try {
        const consoleCapture = [];
        const mockConsole = {
          log: (...a) => consoleCapture.push(a.join(' ')),
          warn: (...a) => consoleCapture.push('[WARN] ' + a.join(' ')),
          error: (...a) => consoleCapture.push('[ERROR] ' + a.join(' '))
        };
        const mockDocument = {
          querySelector: (sel) => ({
            textContent: 'Sample Text',
            style: {},
            addEventListener: () => {}
          })
        };
        const fn = new Function('console', 'document', 'alert', 'prompt', code);
        fn(mockConsole, mockDocument, (m) => consoleCapture.push('[ALERT] ' + m), () => 'Ali');
        return resolve({ success: true, logs: consoleCapture });
      } catch (err) {
        return resolve({ success: false, error: err.message, logs: [] });
      }
    }

    // 100% Offline file:// protocol compatible iframe execution
    livePreviewFrame.srcdoc = sandboxHtml;
    livePreviewFrame.onload = () => {
      setTimeout(() => {
        let captured = [];
        try {
          captured = livePreviewFrame.contentWindow._capturedLogs || [];
        } catch (e) {
          // If cross-origin prevented direct property read, messages were received via postMessage
        }
        resolve({
          success: true,
          logs: captured
        });
      }, 50);
    };
  });
}


  // --- Main App Controller ---
  /**
 * CodeCraft JS (JavaScript for Kids) Main Application Controller
 * Step-by-step interactive JavaScript learning environment.
 * 100% Offline with Live Virtual Console, 4-Stage Labs, and Shift Management.
 */













// Application State
let state = loadStateFromStorage();
let currentView = 'lesson'; // 'lesson' | 'sandbox'
let currentCode = '';
let consoleLogs = [];
let ambientEngine = null;

// DOM Elements Cache
const elements = {};

function translateCodeCommentsToUz(codeStr) {
  if (!codeStr || typeof codeStr !== 'string') return codeStr;
  return codeStr
    .replace(/\/\* Step (\d+):/gi, '/* $1-Qadam:')
    .replace(/\/\/ Step (\d+):/gi, '// $1-Qadam:')
    .replace(/\/\* In JavaScript, /gi, '/* JavaScript da, ')
    .replace(/\/\/ Call the function /gi, '// Funksiyani chaqiring ')
    .replace(/\/\/ Define the class /gi, '// Klassni e\'lon qiling ')
    .replace(/\/\/ Declare the variable /gi, '// O\'zgaruvchini e\'lon qiling ');
}

function localize(val, lang = 'en') {
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

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatProse(str) {
  if (str === null || str === undefined) return '';
  const text = String(str);
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');
}

function initApp() {
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

function selectLesson(lessonId) {
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
        <div class="editor-pane">
          <div class="pane-header">
            <div class="pane-title">
              <span>💻 ${t('codeEditorTitle', state.lang)}</span>
            </div>
            <div class="pane-actions">
              <button id="btn-focus-mode" class="btn-tool" title="${isUz ? 'Fokus rejimi' : 'Focus Mode'}">🔍 ${isUz ? 'Fokus' : 'Focus'}</button>
              <button id="btn-copy-code" class="btn-tool" title="Copy code">📋 ${t('copyBtn', state.lang)}</button>
              <button id="btn-tidy-code" class="btn-tool" title="Format code">🪄 ${t('tidyBtn', state.lang)}</button>
              <button id="btn-reset-code" class="btn-tool" title="Reset code">🔄 ${t('resetCode', state.lang)}</button>
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

        <!-- Right: Live Output & Virtual Console Pane with Preview Tabs -->
        <div class="preview-pane">
          <div class="pane-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding: 8px 12px; background:var(--bg-surface);">
            <div class="preview-tabs" style="display:flex; gap:6px;">
              <button id="tab-live" class="prev-tab-btn active">💻 ${escapeHtml(t('yourResultTab', state.lang))}</button>
              <button id="tab-target" class="prev-tab-btn">🎯 ${escapeHtml(t('targetGoalTab', state.lang))}</button>
              <button id="tab-side" class="prev-tab-btn">⚡ ${isUz ? 'Yonma-yon' : 'Side-by-Side'}</button>
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
  const tabLive = document.getElementById('tab-live');
  const tabTarget = document.getElementById('tab-target');
  const tabSide = document.getElementById('tab-side');
  const stage = document.getElementById('js-preview-stage-container');
  if (!stage) return;

  const isUz = state.lang === 'uz';

  function resetTabs() {
    [tabLive, tabTarget, tabSide].forEach(t => t?.classList.remove('active'));
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


  // Boot on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
