/**
 * JavaScript for Kids (CodeCraft JS) Curriculum
 * 24 Comprehensive, Engaging, Hands-on Topics with Strict 3-Step Methodology:
 *   1. Theory (Nazariya): Relatable real-world analogies, formulas, and deep syntax breakdown.
 *   2. Guided Practice (Amaliyot): Multi-step, numbered instructions with live visual outcomes.
 *   3. Exam Challenge (Sinov): Independent, creative missions verifying concept mastery.
 *
 * Covers: console, variables (let/const), data types, operators & math, template literals,
 * prompt/confirm, if/else/else if, comparisons & logic, switch & ternary, function declarations,
 * parameters & return, arrow functions, arrays, push/pop/shift/unshift, for loops,
 * while & do...while, for...of vs for...in, classes & OOP with 'this', DOM selection,
 * DOM modification, click events, keyboard & window keys (e.key vs e.code), timers & Math.random,
 * and a complete capstone interactive game!
 */

export const MODULES = [
  {
    id: "mod-js-basics",
    title: { uz: "1. JS Boshlanishi va O'zgaruvchilar (1 - 6)", en: "1. JS Basics & Variables (Themes 1 - 6)" },
    color: "#3b82f6",
    icon: "🚀"
  },
  {
    id: "mod-js-logic",
    title: { uz: "2. Mantiq, Shartlar va Funksiyalar (7 - 12)", en: "2. Logic, Conditions & Functions (Themes 7 - 12)" },
    color: "#10b981",
    icon: "🧠"
  },
  {
    id: "mod-js-data",
    title: { uz: "3. Massivlar, Tsikllar va Klasslar (13 - 18)", en: "3. Arrays, Loops & Classes (Themes 13 - 18)" },
    color: "#f59e0b",
    icon: "🎒"
  },
  {
    id: "mod-js-dom",
    title: { uz: "4. Jonli DOM, Klaviatura va Mini-O'yin (19 - 24)", en: "4. Interactive DOM & Game (Themes 19 - 24)" },
    color: "#8b5cf6",
    icon: "🎮"
  }
];

export const LESSONS = [
  // THEME 1: console.log() & alert()
  {
    id: "js-1-console",
    module: "mod-js-basics",
    icon: "💬",
    title: {
      uz: "1-Mavzu: console.log() va alert() — Salom Dunyo!",
      en: "Theme 1: console.log() & alert() — Hello World!"
    },
    concept: {
      uz: "JavaScript kompyuter bilan gaplashish tilidir. console.log() dasturchining maxfiy konsol daftariga xabarlar yozadi, alert() esa ekranda foydalanuvchiga qalqib chiquvchi ogohlantirish oynasini ko'rsatadi.",
      en: "JavaScript is the action language of the web. console.log() writes messages to the developer console, while alert() pops up a dialog window on screen."
    },
    humanLanguage: {
      uz: "Tasavvur qiling, kompyuter sizning buyruqlaringizni bajaruvchi sodiq robot. console.log('Salom!') desangiz, u o'z daftariga 'Salom!' deb yozib qo'yadi. alert('Diqqat!') desangiz esa, ekranga chiqib ovoz beradi!",
      en: "Imagine the computer is a helpful robot. Saying console.log('Hello!') writes a note in its log book. Calling alert('Attention!') makes it pop up an announcement dialog directly on screen!"
    },
    secretSandwich: {
      uz: "Sehrli formula: console.log('Sizning matningiz', son); — qavs () ichiga vergul bilan istalgancha xabar solishingiz mumkin va oxiriga nuqta-vergul ; qo'yasiz!",
      en: "Magic formula: console.log('Your text', number); — pass text inside quotes and separate multiple values with commas, ending with semicolon ;!"
    },
    stepBreakdown: [
      {
        part: "console.log()",
        explanation: { uz: "Dasturchilar konsoliga chop etish buyrug'i", en: "Command to print to developer console" },
        visualResult: { uz: "Brauzer konsolida ko'rinadi", en: "Prints line in the console" }
      },
      {
        part: "\"Salom, Dunyo!\"",
        explanation: { uz: "Chiqarmoqchi bo'lgan matn (String)", en: "The message text string to output" },
        visualResult: { uz: "Ekranda matn paydo bo'ladi", en: "Text displays in output" }
      },
      {
        part: "alert()",
        explanation: { uz: "Qalqib chiquvchi ogohlantirish oynasi", en: "Pops up an interactive modal dialog" },
        visualResult: { uz: "Foydalanuvchi ekranda oynani ko'radi", en: "User sees popup window" }
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
      uz: "Robotni tanishtiring: console.log() bilan \"Robot faollashdi!\" va alert() bilan \"Tizim tayyor!\" xabarlarini chiqaring.",
      en: "Introduce the robot: use console.log() to print \"Robot faollashdi!\" and alert() with \"Tizim tayyor!\"."
    },
    targetDescription: {
      uz: "Konsolga chiqarilgan robot xabari va ekranda paydo bo'lgan alert oynasi.",
      en: "System activation logged to console and interactive alert displayed."
    },
    initialCode: {
      en: "// Theme 1: Hello World & Console\n// Step 1: Log system startup to the console:\n// console.log(\"Robot faollashdi!\");\n\n// Step 2: Show popup alert to user:\n// alert(\"Tizim tayyor!\");\n",
      uz: "// 1-Mavzu: Salom Dunyo va Konsol\n// 1-QADAM: Robot faollashganini konsolga chiqaring:\n// console.log(\"Robot faollashdi!\");\n\n// 2-QADAM: Foydalanuvchiga alert oynasini ko'rsating:\n// alert(\"Tizim tayyor!\");\n"
    },
    targetCode: {
      en: "// Theme 1 Solution\nconsole.log(\"Robot faollashdi!\");\nalert(\"Tizim tayyor!\");",
      uz: "// 1-Mavzu Yechimi\nconsole.log(\"Robot faollashdi!\");\nalert(\"Tizim tayyor!\");"
    },
    hints: [
      { uz: "console.log(\"Robot faollashdi!\"); va alert(\"Tizim tayyor!\"); deb yozing.", en: "Type console.log(\"Robot faollashdi!\"); and alert(\"Tizim tayyor!\");" }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/console\.log\s*\(/.test(clean)) return { passed: false, message: "console.log() buyrug'idan foydalaning!" };
      if (!/alert\s*\(/.test(clean)) return { passed: false, message: "alert() buyrug'idan ham foydalaning!" };
      if (!/["'].+["']/.test(clean)) return { passed: false, message: "Qo'shtirnoq ichiga matn kiriting!" };
      return { passed: true, message: "Ajoyib! Birinchi JavaScript dasturingiz muvaffaqiyatli ishladi! 🎉" };
    }
  },

  // THEME 2: let & const
  {
    id: "js-2-variables",
    module: "mod-js-basics",
    icon: "📦",
    title: {
      uz: "2-Mavzu: let va const — Sehrli Xotira Qutilari",
      en: "Theme 2: let & const — Magic Storage Boxes"
    },
    concept: {
      uz: "O'zgaruvchi — bu kompyuter xotirasidagi nomlangan quti. let o'zgaruvchan quti (ballar, tangalar, vaqt), const esa qulflangan o'zgarmas quti (ism, tug'ilgan yil, doimiy qoidalar).",
      en: "A variable is a labeled storage box in memory. Use let for values that change (score, coins), and const for locked constants (name, ID)."
    },
    humanLanguage: {
      uz: "O'yindagi tangalar soni doim o'zgaradi, shuning uchun let coins = 10; deymiz va coins = coins + 5; deb yangilaymiz. Qahramon nomi esa o'zgarmas doimiy bo'lgani uchun const hero = 'Temur'; deb qulflaymiz!",
      en: "In a game your coins change constantly so you use let coins = 10; and update it with coins += 5;. Your hero name stays fixed forever so you lock it with const hero = 'Temur'!"
    },
    secretSandwich: {
      uz: "let qutiNomi = qiymat; (o'zgartirish mumkin) | const qutiNomi = qiymat; (qulflangan, o'zgartirib bo'lmaydi!)",
      en: "let name = val; (reassignable) | const name = val; (locked constant!)"
    },
    stepBreakdown: [
      {
        part: "let score = 50;",
        explanation: { uz: "O'zgaruvchan quti yaratib, unga 50 sonini solish", en: "Creates changeable variable with 50" },
        visualResult: { uz: "score qutisi xotirada saqlanadi", en: "score box stored in memory" }
      },
      {
        part: "score = score + 25;",
        explanation: { uz: "Qutidagi eski qiymatga 25 qo'shib yangilash", en: "Updates score box value to 75" },
        visualResult: { uz: "score qiymati 75 ga aylanadi", en: "score updates to 75" }
      },
      {
        part: "const hero = \"Temur\";",
        explanation: { uz: "O'zgarmas doimiy quti yaratish", en: "Creates locked constant container" },
        visualResult: { uz: "hero qutisi qulflanadi", en: "hero locked in memory" }
      }
    ],
    listOfCommands: [
      { code: 'let name = value;', name: { uz: "O'zgaruvchan quti", en: "Changeable Variable" }, description: { uz: "Keyinchalik qiymati o'zgarishi mumkin bo'lgan o'zgaruvchi", en: "Declares a reassignable variable" } },
      { code: 'const name = value;', name: { uz: "O'zgarmas quti", en: "Constant Variable" }, description: { uz: "Qiymati doimiy qoladigan qulflangan o'zgaruvchi", en: "Declares a permanent locked constant" } }
    ],
    tagShowcase: [
      { tag: 'let', name: { uz: "O'zgaruvchan", en: "Variable" }, meaning: { uz: "Qiymati o'zgaradigan quti", en: "Value can change" } },
      { tag: 'const', name: { uz: "Doimiy", en: "Constant" }, meaning: { uz: "Qiymati o'zgarmas quti", en: "Value cannot change" } }
    ],
    mission: {
      uz: "const heroName = 'Temur'; va let coins = 50; e'lon qiling. Tangalarni coins = coins + 25; qilib oshiring va console.log(heroName, coins); chiqaring.",
      en: "Declare const heroName = 'Temur'; and let coins = 50;. Increase coins with coins = coins + 25; and log with console.log(heroName, coins);."
    },
    targetDescription: {
      uz: "Qahramon nomi va 75 ga tenglashgan tangalar konsolga chiqariladi.",
      en: "Hero name and updated coins (75) logged to console."
    },
    initialCode: {
      en: "// Theme 2: Variables (let vs const)\n// Step 1: Declare locked hero name with const:\n// const heroName = \"Temur\";\n\n// Step 2: Declare changeable coins with let:\n// let coins = 50;\n\n// Step 3: Increase coins by 25:\n// coins = coins + 25;\n\n// Step 4: Log heroName and coins:\n// console.log(heroName, coins);\n",
      uz: "// 2-Mavzu: O'zgaruvchilar (let va const)\n// 1-QADAM: const bilan o'zgarmas qahramon ismini e'lon qiling:\n// const heroName = \"Temur\";\n\n// 2-QADAM: let bilan o'zgaruvchan tangalarni e'lon qiling:\n// let coins = 50;\n\n// 3-QADAM: Tangalarga 25 qo'shib yangilang:\n// coins = coins + 25;\n\n// 4-QADAM: Qahramon va tangalarni konsolga chiqaring:\n// console.log(heroName, coins);\n"
    },
    targetCode: {
      en: "// Theme 2 Solution\nconst heroName = \"Temur\";\nlet coins = 50;\ncoins = coins + 25;\nconsole.log(heroName, coins);",
      uz: "// 2-Mavzu Yechimi\nconst heroName = \"Temur\";\nlet coins = 50;\ncoins = coins + 25;\nconsole.log(heroName, coins);"
    },
    hints: [
      { uz: "const heroName = \"Temur\"; let coins = 50; coins = coins + 25; console.log(heroName, coins);", en: "Declare heroName with const, coins with let, add 25 and log." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/const\s+\w+/.test(clean)) return { passed: false, message: "const kalit so'zi bilan o'zgarmas yarating!" };
      if (!/let\s+\w+/.test(clean)) return { passed: false, message: "let kalit so'zi bilan o'zgaruvchi yarating!" };
      if (!/\+\s*25|coins\s*\+=\s*25/.test(clean)) return { passed: false, message: "Tangalarni 25 ga oshiring (coins = coins + 25)!" };
      if (!/console\.log/.test(clean)) return { passed: false, message: "Natijani console.log() bilan chiqaring!" };
      return { passed: true, message: "Barakalla! let va const qoidalarini mukammal o'zlashtirdingiz! 💎" };
    }
  },

  // THEME 3: Data Types & typeof
  {
    id: "js-3-types",
    module: "mod-js-basics",
    icon: "🏷️",
    title: {
      uz: "3-Mavzu: Ma'lumot Turlari — String, Number, Boolean va typeof",
      en: "Theme 3: Data Types — String, Number, Boolean & typeof"
    },
    concept: {
      uz: "JavaScript-da har bir qiymat o'z turiga ega: String (qo'shtirnoqdagi matn), Number (oddiy son), Boolean (faqat true yoki false). typeof operatori esa qiymatning turini tekshiradi.",
      en: "Every value has a data type: String (text in quotes), Number (numeric value), Boolean (true or false). The typeof operator detects the type of any value."
    },
    humanLanguage: {
      uz: "'Ali' bu matn (String), 15 bu son (Number), true bu haqiqat (Boolean). Kompyuterdan typeof 15 deb so'rasangiz, u darhol 'number' deb javob beradi!",
      en: "'Ali' is text (String), 15 is a number, true is a boolean. Asking typeof 15 tells the computer to report 'number'!"
    },
    secretSandwich: {
      uz: "typeof o'zgaruvchi — o'zgaruvchi turini aniqlaydi. console.log(typeof 'salom') => 'string'.",
      en: "typeof variable — checks and returns the data type string."
    },
    stepBreakdown: [
      {
        part: "const name = \"Ninja\";",
        explanation: { uz: "Matn turi (String) — qo'shtirnoqda yoziladi", en: "String type in quotes" },
        visualResult: { uz: "Xotirada matn saqlanadi", en: "Text stored in memory" }
      },
      {
        part: "const level = 10;",
        explanation: { uz: "Son turi (Number) — qo'shtirnoqsiz sof raqam", en: "Number type without quotes" },
        visualResult: { uz: "Xotirada son saqlanadi", en: "Number stored in memory" }
      },
      {
        part: "const isAlive = true;",
        explanation: { uz: "Mantiqiy tur (Boolean) — faqat true yoki false", en: "Boolean type: true or false" },
        visualResult: { uz: "Mantiqiy holat saqlanadi", en: "Boolean state stored" }
      }
    ],
    listOfCommands: [
      { code: 'typeof x', name: { uz: "Turni aniqlash", en: "Check Data Type" }, description: { uz: "Qiymat turini matn ko'rinishida qaytaradi ('string', 'number', 'boolean')", en: "Returns the data type of an operand" } }
    ],
    tagShowcase: [
      { tag: 'String', name: { uz: "Matn", en: "String" }, meaning: { uz: "Qo'shtirnoq ichidagi matn", en: "Text inside quotes" } },
      { tag: 'Number', name: { uz: "Son", en: "Number" }, meaning: { uz: "Sof raqamli qiymat", en: "Numeric value" } },
      { tag: 'Boolean', name: { uz: "Mantiqiy", en: "Boolean" }, meaning: { uz: "Rost (true) yoki yolg'on (false)", en: "True or false" } }
    ],
    mission: {
      uz: "Uch xil o'zgaruvchi yarating: const title = 'Dino'; const speed = 25; const isActive = true; va ularning typeof turlarini console.log() bilan chiqaring.",
      en: "Create 3 variables: const title = 'Dino'; const speed = 25; const isActive = true; and log their typeof values."
    },
    targetDescription: {
      uz: "String, Number va Boolean turlarining typeof natijalari konsolga chiqadi.",
      en: "The types 'string', 'number', and 'boolean' logged to console."
    },
    initialCode: {
      en: "// Theme 3: Data Types & typeof\n// Step 1: Create a string, number, and boolean:\n// const title = \"Dino\";\n// const speed = 25;\n// const isActive = true;\n\n// Step 2: Log their data types using typeof:\n// console.log(typeof title, typeof speed, typeof isActive);\n",
      uz: "// 3-Mavzu: Ma'lumot Turlari va typeof\n// 1-QADAM: Matn, son va mantiqiy o'zgaruvchilarni e'lon qiling:\n// const title = \"Dino\";\n// const speed = 25;\n// const isActive = true;\n\n// 2-QADAM: Ularning turlarini typeof orqali konsolga chiqaring:\n// console.log(typeof title, typeof speed, typeof isActive);\n"
    },
    targetCode: {
      en: "// Theme 3 Solution\nconst title = \"Dino\";\nconst speed = 25;\nconst isActive = true;\nconsole.log(typeof title, typeof speed, typeof isActive);",
      uz: "// 3-Mavzu Yechimi\nconst title = \"Dino\";\nconst speed = 25;\nconst isActive = true;\nconsole.log(typeof title, typeof speed, typeof isActive);"
    },
    hints: [
      { uz: "console.log(typeof title, typeof speed, typeof isActive); deb yozing.", en: "Use typeof operator on all three variables." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/typeof/.test(clean)) return { passed: false, message: "typeof operatoridan foydalaning!" };
      if (!/true|false/.test(clean)) return { passed: false, message: "Boolean (true yoki false) o'zgaruvchi kiriting!" };
      if (!/\d+/.test(clean)) return { passed: false, message: "Number (sonli) o'zgaruvchi kiriting!" };
      return { passed: true, message: "Ajoyib! Barcha asosiy ma'lumot turlarini to'g'ri ajratdingiz! 🌟" };
    }
  },

  // THEME 4: Math & Arithmetic
  {
    id: "js-4-math",
    module: "mod-js-basics",
    icon: "➕",
    title: {
      uz: "4-Mavzu: Arifmetika va Operatorlar (+, -, *, /, %, +=, -=)",
      en: "Theme 4: Math & Arithmetic (+, -, *, /, %, +=, -=)"
    },
    concept: {
      uz: "JavaScript mukammal kalkulyatordir. Asosiy amallar: +, -, *, /. Muhim qoidalar: % (qoldiq bo'lish) va tezkor o'zgartirish operatorlari: +=, -=, ++.",
      en: "JavaScript is a full calculator. Standard operators: +, -, *, /. Crucial programming operators: % (modulo remainder), and shorthand assignments: +=, -=, ++."
    },
    humanLanguage: {
      uz: "10 ta shokoladni 3 ta bolaga teng taqsimlasak, har biriga 3 tadan tegadi va 1 ta ortib qoladi. Aynan shu ortib qolgan sonni 10 % 3 = 1 beradi! O'yinda har safar jon kamayganda health -= 15; deb yozamiz.",
      en: "Sharing 10 candies between 3 kids gives 3 each with 1 left over. 10 % 3 gives exactly that remainder 1! When hit by an enemy we write health -= 15;."
    },
    secretSandwich: {
      uz: "health -= zarar; (ayirib yangilaydi) | qoldiq = a % b; (bo'lishdan qolgan qoldiqni hisoblaydi)",
      en: "health -= damage; (subtracts and assigns) | rem = a % b; (modulo remainder)"
    },
    stepBreakdown: [
      {
        part: "let hp = 100;",
        explanation: { uz: "Boshlang'ich 100 jon", en: "Starting health points" },
        visualResult: { uz: "hp = 100", en: "hp = 100" }
      },
      {
        part: "hp -= 30;",
        explanation: { uz: "30 jon ayirish (tezkor -= operatori)", en: "Subtract 30 health shorthand" },
        visualResult: { uz: "hp = 70", en: "hp = 70" }
      },
      {
        part: "const rem = 17 % 5;",
        explanation: { uz: "17 ni 5 ga bo'lgandagi qoldiq (2)", en: "Remainder of 17 divided by 5" },
        visualResult: { uz: "rem = 2", en: "rem = 2" }
      }
    ],
    listOfCommands: [
      { code: 'a % b', name: { uz: "Qoldiq olish (Modulo)", en: "Modulo Remainder" }, description: { uz: "Bo'lish natijasidagi qoldiqni hisoblaydi", en: "Returns the integer remainder of division" } },
      { code: 'x += y', name: { uz: "Qo'shib tayinlash", en: "Add Assignment" }, description: { uz: "O'zgaruvchiga qiymat qo'shadi (x = x + y)", en: "Adds value to variable and reassigns" } },
      { code: 'x -= y', name: { uz: "Ayirib tayinlash", en: "Subtract Assignment" }, description: { uz: "O'zgaruvchidan qiymat ayiradi (x = x - y)", en: "Subtracts value from variable and reassigns" } }
    ],
    tagShowcase: [
      { tag: '%', name: { uz: "Qoldiq", en: "Modulo" }, meaning: { uz: "Bo'lishdan qolgan qoldiq", en: "Remainder of division" } },
      { tag: '+=', name: { uz: "Qo'shish", en: "Add Assign" }, meaning: { uz: "Qiymatni oshirib yozish", en: "Add and assign" } },
      { tag: '-=', name: { uz: "Ayirish", en: "Sub Assign" }, meaning: { uz: "Qiymatni kamaytirib yozish", en: "Subtract and assign" } }
    ],
    mission: {
      uz: "let hp = 100; e'lon qiling. hp -= 30; qiling va const rem = 17 % 5; ni hisoblab, console.log(hp, rem); qiling.",
      en: "Declare let hp = 100;, apply hp -= 30;, calculate const rem = 17 % 5;, and log console.log(hp, rem);."
    },
    targetDescription: {
      uz: "Hisoblangan 70 jon va 2 ga teng qoldiq konsolga chiqadi.",
      en: "Calculated 70 hp and remainder 2 logged to console."
    },
    initialCode: {
      en: "// Theme 4: Arithmetic & Modulo\n// Step 1: Declare starting health with let:\n// let hp = 100;\n\n// Step 2: Subtract 30 using -= operator:\n// hp -= 30;\n\n// Step 3: Calculate remainder of 17 divided by 5:\n// const rem = 17 % 5;\n\n// Step 4: Log hp and rem:\n// console.log(hp, rem);\n",
      uz: "// 4-Mavzu: Arifmetika va Qoldiq Operatorlari\n// 1-QADAM: let bilan boshlang'ich jonni e'lon qiling:\n// let hp = 100;\n\n// 2-QADAM: -= operatori yordamida 30 jon ayiring:\n// hp -= 30;\n\n// 3-QADAM: 17 ni 5 ga bo'lgandagi qoldiqni hisoblang (%):\n// const rem = 17 % 5;\n\n// 4-QADAM: hp va rem ni konsolga chiqaring:\n// console.log(hp, rem);\n"
    },
    targetCode: {
      en: "// Theme 4 Solution\nlet hp = 100;\nhp -= 30;\nconst rem = 17 % 5;\nconsole.log(hp, rem);",
      uz: "// 4-Mavzu Yechimi\nlet hp = 100;\nhp -= 30;\nconst rem = 17 % 5;\nconsole.log(hp, rem);"
    },
    hints: [
      { uz: "let hp = 100; hp -= 30; const rem = 17 % 5; console.log(hp, rem); deb yozing.", en: "Use -= and % operators." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/hp\s*-=\s*30|hp\s*=\s*hp\s*-\s*30/.test(clean)) return { passed: false, message: "hp dan 30 ni ayiring (hp -= 30)!" };
      if (!/%\s*5/.test(clean)) return { passed: false, message: "17 % 5 qoldiq amalini kiriting!" };
      if (!/console\.log/.test(clean)) return { passed: false, message: "Natijani console.log() bilan chiqaring!" };
      return { passed: true, message: "Qoyilmaqom! Dasturchilarning arifmetik sirlarini to'liq o'rgandingiz! 🧮" };
    }
  },

  // THEME 5: Strings & Template Literals
  {
    id: "js-5-strings",
    module: "mod-js-basics",
    icon: "✨",
    title: {
      uz: "5-Mavzu: Matnlar va Sehrli Backtick (\`\${...}\`)",
      en: "Theme 5: Strings & Magic Backticks (\`\${...}\`)"
    },
    concept: {
      uz: "Matnlarni birlashtirishning eng zamonaviy va qulay usuli — bu Backtick (\`\`) belgisi va uning ichidagi \${o'zgaruvchi} formulasidir (Template Literals). Shuningdek .length matn uzunligini ko'rsatadi.",
      en: "Template literals with backticks (\`\`) and \${variable} are the cleanest way to embed expressions in strings. .length returns the string length."
    },
    humanLanguage: {
      uz: "Eski usulda 'Salom ' + ism + ', sizda ' + ball + ' bor' deb qiynalib plyus qo'yardik. Yangi sehrli Backtick bilan esa xuddi she'rdek \`Salom \${ism}, sizda \${ball} bor\` deb yozamiz!",
      en: "Instead of messy string concatenation with plus signs ('Hello ' + name), template literals let us write clean sentences: \`Hello \${name}, you have \${score} points!\`."
    },
    secretSandwich: {
      uz: "\`Matn \${o'zgaruvchi} matn\` — Esc tugmasi tagidagi backtick belgisi bilan matn yaratiladi va ichiga \${} qo'yiladi.",
      en: "\`Text \${expression} text\` — wrap string in backticks and embed variables with \${}."
    },
    stepBreakdown: [
      {
        part: "const hero = \"Batman\";",
        explanation: { uz: "Qahramon ismi matni", en: "Hero name string" },
        visualResult: { uz: "hero = 'Batman'", en: "hero = 'Batman'" }
      },
      {
        part: "const power = 95;",
        explanation: { uz: "Quvvat darajasi soni", en: "Power level number" },
        visualResult: { uz: "power = 95", en: "power = 95" }
      },
      {
        part: "\`Qahramon: \${hero}, Quvvat: \${power}!\`",
        explanation: { uz: "Backtick orqali o'zgaruvchilarni matnga joylash", en: "Template literal string embedding" },
        visualResult: { uz: "'Qahramon: Batman, Quvvat: 95!'", en: "'Qahramon: Batman, Quvvat: 95!'" }
      }
    ],
    listOfCommands: [
      { code: '`...${x}...`', name: { uz: "Template Literal (Backtick)", en: "Template Literal" }, description: { uz: "O'zgaruvchilarni matn ichiga qulay joylash", en: "Embeds expressions inside strings using backticks" } },
      { code: 'str.length', name: { uz: "Matn uzunligi", en: "String Length" }, description: { uz: "Matndagi harflar va belgilar sonini qaytaradi", en: "Returns total number of characters in string" } }
    ],
    tagShowcase: [
      { tag: '`...`', name: { uz: "Backtick", en: "Backtick" }, meaning: { uz: "Zamonaviy matn qolipi", en: "Template string container" } },
      { tag: '${...}', name: { uz: "Interpolyatsiya", en: "Interpolation" }, meaning: { uz: "Matn ichidagi jonli o'zgaruvchi", en: "Live variable inside text" } }
    ],
    mission: {
      uz: "const hero = 'Batman'; va const power = 95; e'lon qiling. Backtick bilan: const card = \`Qahramon: \${hero}, Quvvati: \${power}!\`; yasang va console.log(card, hero.length); chiqaring.",
      en: "Declare const hero = 'Batman'; and const power = 95;. Create const card = \`Qahramon: \${hero}, Quvvati: \${power}!\`; with backticks and log card and hero.length."
    },
    targetDescription: {
      uz: "Chiroyli birlashgan qahramon kartochkasi va harflar soni (6) konsolga chiqadi.",
      en: "Template literal sentence and hero name length (6) logged to console."
    },
    initialCode: {
      en: "// Theme 5: Template Literals & Backticks\n// Step 1: Declare hero and power:\n// const hero = \"Batman\";\n// const power = 95;\n\n// Step 2: Build card string using backticks:\n// const card = `Qahramon: ${hero}, Quvvati: ${power}!`;\n\n// Step 3: Log card and hero length:\n// console.log(card, hero.length);\n",
      uz: "// 5-Mavzu: Matnlar va Backtick (\${...})\n// 1-QADAM: Qahramon va quvvatni e'lon qiling:\n// const hero = \"Batman\";\n// const power = 95;\n\n// 2-QADAM: Backtick bilan matn kartochkasini yasang:\n// const card = `Qahramon: ${hero}, Quvvati: ${power}!`;\n\n// 3-QADAM: Kartochka va qahramon ismining uzunligini konsolga chiqaring:\n// console.log(card, hero.length);\n"
    },
    targetCode: {
      en: "// Theme 5 Solution\nconst hero = \"Batman\";\nconst power = 95;\nconst card = `Qahramon: ${hero}, Quvvati: ${power}!`;\nconsole.log(card, hero.length);",
      uz: "// 5-Mavzu Yechimi\nconst hero = \"Batman\";\nconst power = 95;\nconst card = `Qahramon: ${hero}, Quvvati: ${power}!`;\nconsole.log(card, hero.length);"
    },
    hints: [
      { uz: "Backtick (\` \`) belgisini klaviaturada Esc ostidagi tugmadan topishingiz mumkin.", en: "Use backticks \`\` around the card text and embed with \${hero}." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/`[^`]*\$\{[^}]+\}[^`]*`/.test(clean)) return { passed: false, message: "Backtick (\`\`) va \${...} interpolyatsiyasidan foydalaning!" };
      if (!/\.length/.test(clean)) return { passed: false, message: "hero.length yordamida matn uzunligini o'qing!" };
      if (!/console\.log/.test(clean)) return { passed: false, message: "Natijani console.log() bilan chiqaring!" };
      return { passed: true, message: "Ajoyib! Sehrli Backtick matnlarini professional darajada o'rgandingiz! 🖋️" };
    }
  },

  // THEME 6: prompt() & Number()
  {
    id: "js-6-prompt",
    module: "mod-js-basics",
    icon: "🙋",
    title: {
      uz: "6-Mavzu: Foydalanuvchidan Ma'lumot Olish — prompt() va Number()",
      en: "Theme 6: User Input — prompt() & Number() Conversion"
    },
    concept: {
      uz: "prompt() foydalanuvchiga savol berib, u yozgan javobni qabul qiladi. Muhim qoida: prompt() doimo javobni MATN (String) sifatida qaytaradi! Matematika qilish uchun uni Number() bilan songa aylantirish shart.",
      en: "prompt() asks the user for input. Crucial rule: prompt() always returns a String! Wrap it in Number() to convert it into a real number for math."
    },
    humanLanguage: {
      uz: "Agar prompt('Yoshingiz?') deb 10 yozsangiz, u '10' matnini oladi. Agar '10' + 5 qilsangiz, '105' bo'lib qoladi! Shuning uchun Number('10') + 5 = 15 deb songa aylantirishimiz kerak.",
      en: "prompt() gives text. '10' + 5 produces '105'! Wrapping it with Number(prompt(...)) turns it into a real number so 10 + 5 = 15."
    },
    secretSandwich: {
      uz: "const son = Number(prompt('Savol')) || 0; — foydalanuvchi kiritgan javobni toza songa aylantirish formulasi.",
      en: "const num = Number(prompt('Question')) || 0; — converts input to a pure number."
    },
    stepBreakdown: [
      {
        part: "prompt(\"Ismingiz?\")",
        explanation: { uz: "Foydalanuvchiga savol berish oynasi", en: "Input dialog window" },
        visualResult: { uz: "Ekranda kiritish maydoni ochiladi", en: "Opens input modal" }
      },
      {
        part: "Number(\"12\")",
        explanation: { uz: "Matnni matematik songa aylantirish", en: "Converts string to number" },
        visualResult: { uz: "12 soni hosil bo'ladi", en: "Produces number 12" }
      }
    ],
    listOfCommands: [
      { code: 'prompt("...")', name: { uz: "Foydalanuvchidan so'rash", en: "Prompt Input" }, description: { uz: "Ekranda matn kiritish darchasini ochadi", en: "Displays dialog prompting user for input" } },
      { code: 'Number(x)', name: { uz: "Songa aylantirish", en: "To Number" }, description: { uz: "Matn yoki boshqa qiymatni matematik songa o'tkazadi", en: "Converts value to a numeric type" } }
    ],
    tagShowcase: [
      { tag: 'prompt()', name: { uz: "Kiritish oynasi", en: "Prompt" }, meaning: { uz: "Foydalanuvchidan ma'lumot olish", en: "Get input from user" } },
      { tag: 'Number()', name: { uz: "Songa o'tkazish", en: "To Number" }, meaning: { uz: "Matndan son yasash", en: "Convert to numeric" } }
    ],
    mission: {
      uz: "Foydalanuvchidan ismini: const name = prompt('Ismingiz?') || 'Ali'; va yoshini: const age = Number(prompt('Yoshingiz?') || 10); oling. const nextAge = age + 1; hisoblab, console.log(name, nextAge); chiqaring.",
      en: "Ask name with prompt() and age with Number(prompt()). Calculate const nextAge = age + 1; and log name and nextAge."
    },
    targetDescription: {
      uz: "Foydalanuvchi ismi va 1 yilga kattargan yoshi konsolga chiqariladi.",
      en: "User name and incremented age logged to console."
    },
    initialCode: {
      en: "// Theme 6: prompt() & Number() Conversion\n// Step 1: Ask for user name:\n// const name = prompt(\"Ismingiz?\") || \"Ali\";\n\n// Step 2: Ask for age and convert to Number:\n// const age = Number(prompt(\"Yoshingiz?\") || 10);\n\n// Step 3: Calculate next year age:\n// const nextAge = age + 1;\n\n// Step 4: Log name and nextAge:\n// console.log(name, nextAge);\n",
      uz: "// 6-Mavzu: prompt() va Number() Konvertatsiyasi\n// 1-QADAM: Foydalanuvchidan ismini so'rang:\n// const name = prompt(\"Ismingiz?\") || \"Ali\";\n\n// 2-QADAM: Yoshini so'rab, Number() bilan songa aylantiring:\n// const age = Number(prompt(\"Yoshingiz?\") || 10);\n\n// 3-QADAM: Kelasi yilgi yoshini hisoblang (age + 1):\n// const nextAge = age + 1;\n\n// 4-QADAM: Ism va kelasi yilgi yoshni konsolga chiqaring:\n// console.log(name, nextAge);\n"
    },
    targetCode: {
      en: "// Theme 6 Solution\nconst name = prompt(\"Ismingiz?\") || \"Ali\";\nconst age = Number(prompt(\"Yoshingiz?\") || 10);\nconst nextAge = age + 1;\nconsole.log(name, nextAge);",
      uz: "// 6-Mavzu Yechimi\nconst name = prompt(\"Ismingiz?\") || \"Ali\";\nconst age = Number(prompt(\"Yoshingiz?\") || 10);\nconst nextAge = age + 1;\nconsole.log(name, nextAge);"
    },
    hints: [
      { uz: "Number(prompt(...)) orqali kiritilgan yoshni songa aylantiring.", en: "Use Number(prompt(...)) to parse the numeric input." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/prompt\s*\(/.test(clean)) return { passed: false, message: "prompt() buyrug'idan foydalaning!" };
      if (!/Number\s*\(/.test(clean)) return { passed: false, message: "Yoshni Number() bilan songa aylantiring!" };
      if (!/\+\s*1/.test(clean)) return { passed: false, message: "Kelasi yilgi yoshni hisoblash uchun + 1 qo'shing!" };
      return { passed: true, message: "Ofarin! Foydalanuvchilar bilan muloqot qilishni o'rgandingiz! 💬" };
    }
  },

  // THEME 7: if, else if, else
  {
    id: "js-7-if-else",
    module: "mod-js-logic",
    icon: "🚦",
    title: {
      uz: "7-Mavzu: Shartlar — if, else if va else (Qarorlar Daraxti)",
      en: "Theme 7: Conditions — if, else if & else (Decision Trees)"
    },
    concept: {
      uz: "Dasturlar aqlli qarorlar qabul qilishi shart. if (shart) { ... } shart to'g'ri bo'lsa ishlaydi, else if boshqa shartni tekshiradi, else esa hech qaysi shart bajarilmaganda ishga tushadi.",
      en: "Programs make intelligent choices using conditions. if (cond) runs when true, else if checks alternate branches, and else is the default fallback."
    },
    humanLanguage: {
      uz: "Svetofor qoidasi: Agar (if) yashil bo'lsa — yur! Bo'lmasa agar (else if) sariq bo'lsa — tayyorlan! Aks holda (else) — to'xta!",
      en: "Traffic light logic: if light is green — go! Else if yellow — get ready! Else — stop!"
    },
    secretSandwich: {
      uz: "if (shart1) { ... } else if (shart2) { ... } else { ... }",
      en: "if (cond1) { ... } else if (cond2) { ... } else { ... }"
    },
    stepBreakdown: [
      {
        part: "if (score >= 90)",
        explanation: { uz: "Birinchi va eng yuqori shartni tekshirish", en: "Checks top condition" },
        visualResult: { uz: "90 dan oshsa 'A' beriladi", en: "Assigns 'A' if 90+" }
      },
      {
        part: "else if (score >= 70)",
        explanation: { uz: "Ikkinchi oraliq shart", en: "Checks mid range condition" },
        visualResult: { uz: "70 dan oshsa 'B' beriladi", en: "Assigns 'B' if 70+" }
      },
      {
        part: "else",
        explanation: { uz: "Qolgan barcha holatlar", en: "Default catch-all fallback" },
        visualResult: { uz: "Aks holda 'C' beriladi", en: "Assigns 'C' otherwise" }
      }
    ],
    listOfCommands: [
      { code: 'if (cond) { }', name: { uz: "Agar (if)", en: "If Branch" }, description: { uz: "Shart rost (true) bo'lganda kodni bajaradi", en: "Executes block when condition is true" } },
      { code: 'else if (c) { }', name: { uz: "Aks holda agar", en: "Else If Branch" }, description: { uz: "Oldingi shart yolg'on bo'lsa yangi shartni tekshiradi", en: "Tests secondary condition" } },
      { code: 'else { }', name: { uz: "Aks holda", en: "Else Fallback" }, description: { uz: "Hech bir shart bajarilmaganda ishga tushadi", en: "Executes when all conditions fail" } }
    ],
    tagShowcase: [
      { tag: 'if', name: { uz: "Agar", en: "If" }, meaning: { uz: "Boshlang'ich shart", en: "Initial check" } },
      { tag: 'else if', name: { uz: "Aks holda agar", en: "Else if" }, meaning: { uz: "Qo'shimcha shart", en: "Alternate check" } },
      { tag: 'else', name: { uz: "Aks holda", en: "Else" }, meaning: { uz: "Zaxira yo'l", en: "Fallback" } }
    ],
    mission: {
      uz: "const score = 85; e'lon qiling. let grade = ''; qiling. if (score >= 90) { grade = 'A'; } else if (score >= 70) { grade = 'B'; } else { grade = 'C'; } deb yozing va console.log(grade); chiqaring.",
      en: "Declare const score = 85; let grade = '';. Write if (score >= 90) { grade = 'A'; } else if (score >= 70) { grade = 'B'; } else { grade = 'C'; } and log grade."
    },
    targetDescription: {
      uz: "Shart tekshirilib, konsolga 'B' bahosi chiqariladi.",
      en: "Grade 'B' evaluated by condition and logged to console."
    },
    initialCode: {
      en: "// Theme 7: Conditions (if, else if, else)\n// Step 1: Declare score and empty grade:\n// const score = 85;\n// let grade = \"\";\n\n// Step 2: Implement decision tree:\n// if (score >= 90) {\n//   grade = \"A\";\n// } else if (score >= 70) {\n//   grade = \"B\";\n// } else {\n//   grade = \"C\";\n// }\n\n// Step 3: Log grade to console:\n// console.log(grade);\n",
      uz: "// 7-Mavzu: Shartlar (if, else if, else)\n// 1-QADAM: Ball va bo'sh baho o'zgaruvchisini e'lon qiling:\n// const score = 85;\n// let grade = \"\";\n\n// 2-QADAM: Shartlar daraxtini yozing:\n// if (score >= 90) {\n//   grade = \"A\";\n// } else if (score >= 70) {\n//   grade = \"B\";\n// } else {\n//   grade = \"C\";\n// }\n\n// 3-QADAM: Bahoni konsolga chiqaring:\n// console.log(grade);\n"
    },
    targetCode: {
      en: "// Theme 7 Solution\nconst score = 85;\nlet grade = \"\";\nif (score >= 90) {\n  grade = \"A\";\n} else if (score >= 70) {\n  grade = \"B\";\n} else {\n  grade = \"C\";\n}\nconsole.log(grade);",
      uz: "// 7-Mavzu Yechimi\nconst score = 85;\nlet grade = \"\";\nif (score >= 90) {\n  grade = \"A\";\n} else if (score >= 70) {\n  grade = \"B\";\n} else {\n  grade = \"C\";\n}\nconsole.log(grade);"
    },
    hints: [
      { uz: "if (score >= 90) { grade = \"A\"; } else if (score >= 70) { grade = \"B\"; } else { grade = \"C\"; }", en: "Use if / else if / else structure." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/if\s*\(/.test(clean)) return { passed: false, message: "if shart operatoridan foydalaning!" };
      if (!/else\s+if\s*\(/.test(clean)) return { passed: false, message: "else if oraliq shartidan foydalaning!" };
      if (!/else\s*\{/.test(clean)) return { passed: false, message: "else zaxira blokini yozing!" };
      return { passed: true, message: "Ajoyib! Shartlar daraxtini xatosiz qurasiz! 🚦" };
    }
  },

  // THEME 8: Comparisons & Logic
  {
    id: "js-8-comparison",
    module: "mod-js-logic",
    icon: "⚖️",
    title: {
      uz: "8-Mavzu: Taqqoslash va Mantiqiy Operatorlar (===, !==, &&, ||, !)",
      en: "Theme 8: Comparisons & Logic (===, !==, &&, ||, !)"
    },
    concept: {
      uz: "Taqqoslashlar: === (qat'iy tenglik), !== (teng emas), > va <. Mantiqiy operatorlar: && (VA — ikkala shart ham true bo'lishi shart), || (YOKI — kamida bittasi true bo'lsa kifoya), ! (INKOR — teskarisiga o'girish).",
      en: "Strict comparisons: === and !==. Logical operators: && (AND — both must be true), || (OR — at least one must be true), and ! (NOT — inverts boolean)."
    },
    humanLanguage: {
      uz: "Sehrli qasrga kirish uchun: daraja kamida 10 bo'lishi VA (&&) kalit bo'lishi shart: (level >= 10 && hasKey === true). Agar bittasi yo'q bo'lsa, eshik ochilmaydi!",
      en: "Entering the secret castle requires level >= 10 AND (&&) having the key: (level >= 10 && hasKey === true). Both must hold true!"
    },
    secretSandwich: {
      uz: "(shart1 && shart2) => ikkalasi ham to'g'ri bo'lsin | (shart1 || shart2) => bittasi to'g'ri bo'lsa ham yetarli",
      en: "(c1 && c2) => both required | (c1 || c2) => either is enough"
    },
    stepBreakdown: [
      {
        part: "level >= 10 && hasKey === true",
        explanation: { uz: "Ikkala talab ham bajarilishi shart (VA)", en: "Both conditions required (AND)" },
        visualResult: { uz: "Ikkisi ham true bo'lsagina eshik ochiladi", en: "Passes only if both are true" }
      },
      {
        part: "!isLocked",
        explanation: { uz: "Qulf yo'qligini tekshirish (INKOR)", en: "Negates condition (NOT)" },
        visualResult: { uz: "Qulf ochilgan bo'lsa true", en: "True if not locked" }
      }
    ],
    listOfCommands: [
      { code: 'a === b', name: { uz: "Qat'iy tenglik", en: "Strict Equality" }, description: { uz: "Qiymati va turi bir xilligini tekshiradi", en: "Checks equal value and equal type" } },
      { code: 'a && b', name: { uz: "Mantiqiy VA (AND)", en: "Logical AND" }, description: { uz: "Ikkala tomon ham true bo'lsagina true qaytaradi", en: "True only if both sides are true" } },
      { code: 'a || b', name: { uz: "Mantiqiy YOKI (OR)", en: "Logical OR" }, description: { uz: "Kamida bitta tomoni true bo'lsa true qaytaradi", en: "True if at least one side is true" } }
    ],
    tagShowcase: [
      { tag: '===', name: { uz: "Teng", en: "Strict Equal" }, meaning: { uz: "To'liq tenglik", en: "Exact equality" } },
      { tag: '&&', name: { uz: "VA", en: "AND" }, meaning: { uz: "Ikkalasi ham", en: "Both required" } },
      { tag: '||', name: { uz: "YOKI", en: "OR" }, meaning: { uz: "Biri bo'lsa ham", en: "Either is enough" } }
    ],
    mission: {
      uz: "const level = 12; const hasKey = true; e'lon qiling. if (level >= 10 && hasKey === true) { console.log('Eshik ochildi! 🏰'); } else { console.log('Ruxsat yoq!'); } deb yozing.",
      en: "Declare const level = 12; const hasKey = true;. Check if (level >= 10 && hasKey === true) and log 'Eshik ochildi! 🏰'."
    },
    targetDescription: {
      uz: "Mantiqiy shart to'g'ri chiqib, 'Eshik ochildi! 🏰' xabari konsolga chiqadi.",
      en: "'Eshik ochildi! 🏰' logged to console upon passing compound condition."
    },
    initialCode: {
      en: "// Theme 8: Comparisons & Logical Operators\n// Step 1: Declare level and hasKey:\n// const level = 12;\n// const hasKey = true;\n\n// Step 2: Test compound condition using &&:\n// if (level >= 10 && hasKey === true) {\n//   console.log(\"Eshik ochildi! 🏰\");\n// } else {\n//   console.log(\"Ruxsat yo'q!\");\n// }\n",
      uz: "// 8-Mavzu: Taqqoslash va Mantiqiy Operatorlar\n// 1-QADAM: level va hasKey ni e'lon qiling:\n// const level = 12;\n// const hasKey = true;\n\n// 2-QADAM: && mantiqiy operatori bilan ikkala shartni tekshiring:\n// if (level >= 10 && hasKey === true) {\n//   console.log(\"Eshik ochildi! 🏰\");\n// } else {\n//   console.log(\"Ruxsat yo'q!\");\n// }\n"
    },
    targetCode: {
      en: "// Theme 8 Solution\nconst level = 12;\nconst hasKey = true;\nif (level >= 10 && hasKey === true) {\n  console.log(\"Eshik ochildi! 🏰\");\n} else {\n  console.log(\"Ruxsat yo'q!\");\n}",
      uz: "// 8-Mavzu Yechimi\nconst level = 12;\nconst hasKey = true;\nif (level >= 10 && hasKey === true) {\n  console.log(\"Eshik ochildi! 🏰\");\n} else {\n  console.log(\"Ruxsat yo'q!\");\n}"
    },
    hints: [
      { uz: "level >= 10 && hasKey === true shartidan foydalaning.", en: "Use && to combine both checks." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/&&/.test(clean)) return { passed: false, message: "&& mantiqiy operatoridan foydalaning!" };
      if (!/===|==/.test(clean)) return { passed: false, message: "=== taqqoslash operatoridan foydalaning!" };
      if (!/console\.log/.test(clean)) return { passed: false, message: "Natijani console.log() bilan chiqaring!" };
      return { passed: true, message: "Zo'r! Murakkab mantiqiy shartlarni osonlik bilan hal qildingiz! 🛡️" };
    }
  },

  // THEME 9: switch...case & Ternary Operator
  {
    id: "js-9-else-if",
    module: "mod-js-logic",
    icon: "🎛️",
    title: {
      uz: "9-Mavzu: Ko'p Tarmoqli Tanlov — switch...case va Ternary Operator (? :)",
      en: "Theme 9: Multi-branch — switch...case & Ternary Operator (? :)"
    },
    concept: {
      uz: "Bitta o'zgaruvchining juda ko'p aniq qiymatlarini tekshirishda if/else o'rniga switch...case juda tartibli ko'rinadi. Qisqa 1 qatorli if/else uchun esa Ternary operatori (shart ? rost : yolg'on) ishlatiladi.",
      en: "When testing one variable against many exact values, switch...case is much cleaner than stacked if/else. For concise 1-line conditions, the Ternary operator (cond ? trueVal : falseVal) is ideal."
    },
    humanLanguage: {
      uz: "Hafta kuni raqami bo'yicha nom tanlashda switch (kun) { case 1: ... } qulay. Yosh 18 dan oshganmi? const ruxsat = (yosh >= 18) ? 'Ha' : 'Yo\\'q'; deymiz!",
      en: "Switch is like a multi-way track switch. Ternary operator compresses an if/else into one neat line: const pass = score >= 50 ? 'Pass' : 'Fail';"
    },
    secretSandwich: {
      uz: "switch (x) { case 1: ... break; default: ... } | const res = shart ? 'rost' : 'yolgon';",
      en: "switch (val) { case x: ... break; } | const ans = cond ? 'yes' : 'no';"
    },
    stepBreakdown: [
      {
        part: "switch (mode) { case 'easy': ... }",
        explanation: { uz: "O'yin rejimiga qarab shoxlanish", en: "Switches on game mode" },
        visualResult: { uz: "Mos rejim kodi ishlaydi", en: "Executes matching case" }
      },
      {
        part: "const status = isWin ? 'G'alaba!' : 'Mag'lubiyat';",
        explanation: { uz: "1 qatorli tezkor ternary tanlov", en: "1-line concise ternary choice" },
        visualResult: { uz: "status qiymati aniqlanadi", en: "Assigns status" }
      }
    ],
    listOfCommands: [
      { code: 'switch (x) { case a: ... break; }', name: { uz: "Switch tanlash", en: "Switch Statement" }, description: { uz: "O'zgaruvchi qiymatiga qarab mos case blokini ishga tushiradi", en: "Evaluates expression and matches against cases" } },
      { code: 'c ? a : b', name: { uz: "Ternary operator", en: "Ternary Operator" }, description: { uz: "3 ta qismli 1 qatorli shartli if/else ifodasi", en: "Shorthand conditional expression" } }
    ],
    tagShowcase: [
      { tag: 'switch', name: { uz: "Ulagich", en: "Switch" }, meaning: { uz: "Variantlar bo'yicha tanlash", en: "Branching statement" } },
      { tag: 'case', name: { uz: "Holat", en: "Case" }, meaning: { uz: "Aniq bir holat qiymati", en: "Specific case match" } },
      { tag: '? :', name: { uz: "Ternary", en: "Ternary" }, meaning: { uz: "1 qatorli if-else", en: "Inline conditional" } }
    ],
    mission: {
      uz: "const day = 2; let name = ''; switch (day) { case 1: name = 'Dushanba'; break; case 2: name = 'Seshanba'; break; default: name = 'Boshqa'; } const isWeekday = (day <= 5) ? 'Ish kuni' : 'Dam olish'; console.log(name, isWeekday); deb yozing.",
      en: "Implement switch on const day = 2; and use ternary operator for isWeekday, then log results."
    },
    targetDescription: {
      uz: "'Seshanba' va 'Ish kuni' qiymatlari konsolga chiqariladi.",
      en: "'Seshanba' and 'Ish kuni' logged to console."
    },
    initialCode: {
      en: "// Theme 9: switch...case & Ternary Operator\n// Step 1: Declare day number:\n// const day = 2;\n// let name = \"\";\n\n// Step 2: Implement switch statement:\n// switch (day) {\n//   case 1: name = \"Dushanba\"; break;\n//   case 2: name = \"Seshanba\"; break;\n//   default: name = \"Boshqa\";\n// }\n\n// Step 3: Implement ternary operator:\n// const isWeekday = (day <= 5) ? \"Ish kuni\" : \"Dam olish\";\n\n// Step 4: Log name and isWeekday:\n// console.log(name, isWeekday);\n",
      uz: "// 9-Mavzu: switch...case va Ternary Operator (? :)\n// 1-QADAM: Kun raqamini e'lon qiling:\n// const day = 2;\n// let name = \"\";\n\n// 2-QADAM: switch orqali kun nomini aniqlang:\n// switch (day) {\n//   case 1: name = \"Dushanba\"; break;\n//   case 2: name = \"Seshanba\"; break;\n//   default: name = \"Boshqa\";\n// }\n\n// 3-QADAM: Ternary operatori bilan ish kuni yoki dam olish ekanini toping:\n// const isWeekday = (day <= 5) ? \"Ish kuni\" : \"Dam olish\";\n\n// 4-QADAM: Natijalarni konsolga chiqaring:\n// console.log(name, isWeekday);\n"
    },
    targetCode: {
      en: "// Theme 9 Solution\nconst day = 2;\nlet name = \"\";\nswitch (day) {\n  case 1: name = \"Dushanba\"; break;\n  case 2: name = \"Seshanba\"; break;\n  default: name = \"Boshqa\";\n}\nconst isWeekday = (day <= 5) ? \"Ish kuni\" : \"Dam olish\";\nconsole.log(name, isWeekday);",
      uz: "// 9-Mavzu Yechimi\nconst day = 2;\nlet name = \"\";\nswitch (day) {\n  case 1: name = \"Dushanba\"; break;\n  case 2: name = \"Seshanba\"; break;\n  default: name = \"Boshqa\";\n}\nconst isWeekday = (day <= 5) ? \"Ish kuni\" : \"Dam olish\";\nconsole.log(name, isWeekday);"
    },
    hints: [
      { uz: "switch (day) va (day <= 5) ? \"Ish kuni\" : \"Dam olish\" dan foydalaning.", en: "Combine switch and ternary operator." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/switch\s*\(/.test(clean)) return { passed: false, message: "switch operatoridan foydalaning!" };
      if (!/case\s+2:/.test(clean)) return { passed: false, message: "case 2: holatini yozing!" };
      if (!/\?\s*["'].+["']\s*:\s*["'].+["']/.test(clean)) return { passed: false, message: "Ternary (? :) operatoridan foydalaning!" };
      return { passed: true, message: "Mukammal! switch va ternary operatorini ajoyib o'zlashtirdingiz! 🎛️" };
    }
  },

  // THEME 10: Functions
  {
    id: "js-10-functions",
    module: "mod-js-logic",
    icon: "⚙️",
    title: {
      uz: "10-Mavzu: Funksiyalar — Sehrli Qayta Ishlatiluvchi Mashina",
      en: "Theme 10: Functions — Magic Reusable Code Machines"
    },
    concept: {
      uz: "Funksiya — bu ma'lum bir vazifani bajaruvchi kodlar bloki. Bir marta yozib, istalgancha qayta-qayta chaqirish mumkin (DRY qoidasi: Don't Repeat Yourself).",
      en: "A function is a reusable block of code designed to perform a specific task. Write once and call it thousands of times with different inputs."
    },
    humanLanguage: {
      uz: "Tasavvur qiling, qahva tayyorlaydigan sehrli apparat bor. Siz faqat tugmasini bosasiz (funksiyani chaqirasiz), u esa barcha bosqichlarni o'zi bajarib beradi!",
      en: "A function is like a vending machine. You press the button (call it) and it executes its internal steps to deliver the result!"
    },
    secretSandwich: {
      uz: "function nom() { ... } (yaratish) | nom(); (ishga tushirish / chaqirish)",
      en: "function name() { ... } (declare) | name(); (call/invoke)"
    },
    stepBreakdown: [
      {
        part: "function greetHero(name) { ... }",
        explanation: { uz: "Yangi funksiya mashinasini yaratish", en: "Declares function" },
        visualResult: { uz: "greetHero xotirada saqlanadi", en: "Saved in memory" }
      },
      {
        part: "greetHero('Temur')",
        explanation: { uz: "Funksiyani 'Temur' ismi bilan ishga tushirish", en: "Calls function with argument" },
        visualResult: { uz: "Natija xabar hosil bo'ladi", en: "Executes logic" }
      }
    ],
    listOfCommands: [
      { code: 'function name(p) { }', name: { uz: "Funksiya e'lon qilish", en: "Function Declaration" }, description: { uz: "Qayta ishlatiluvchi mustaqil funksiya yaratadi", en: "Defines a named callable function" } }
    ],
    tagShowcase: [
      { tag: 'function', name: { uz: "Funksiya", en: "Function" }, meaning: { uz: "Sehrli mashina kalit so'zi", en: "Function keyword" } },
      { tag: '()', name: { uz: "Qavslar", en: "Parentheses" }, meaning: { uz: "Chaqirish va parametrlar joyi", en: "Call and parameter container" } }
    ],
    mission: {
      uz: "Qahramonni olqishlovchi funksiya yarating: function praiseHero(name) { return 'Ofarin, jasur ' + name + '! ⚔️'; } va console.log(praiseHero('Alpomish')); qiling.",
      en: "Create function praiseHero(name) returning a greeting, then log praiseHero('Alpomish')."
    },
    targetDescription: {
      uz: "'Ofarin, jasur Alpomish! ⚔️' xabari funksiya orqali chiqariladi.",
      en: "'Ofarin, jasur Alpomish! ⚔️' returned by function and logged."
    },
    initialCode: {
      en: "// Theme 10: Functions\n// Step 1: Define praiseHero function:\n// function praiseHero(name) {\n//   return \"Ofarin, jasur \" + name + \"! ⚔️\";\n// }\n\n// Step 2: Call function and log result:\n// console.log(praiseHero(\"Alpomish\"));\n",
      uz: "// 10-Mavzu: Funksiyalar\n// 1-QADAM: praiseHero nomli funksiya e'lon qiling:\n// function praiseHero(name) {\n//   return \"Ofarin, jasur \" + name + \"! ⚔️\";\n// }\n\n// 2-QADAM: Funksiyani \"Alpomish\" bilan chaqirib, konsolga chiqaring:\n// console.log(praiseHero(\"Alpomish\"));\n"
    },
    targetCode: {
      en: "// Theme 10 Solution\nfunction praiseHero(name) {\n  return \"Ofarin, jasur \" + name + \"! ⚔️\";\n}\nconsole.log(praiseHero(\"Alpomish\"));",
      uz: "// 10-Mavzu Yechimi\nfunction praiseHero(name) {\n  return \"Ofarin, jasur \" + name + \"! ⚔️\";\n}\nconsole.log(praiseHero(\"Alpomish\"));"
    },
    hints: [
      { uz: "function praiseHero(name) { return \"Ofarin, jasur \" + name + \"! ⚔️\"; } deb yozing.", en: "Define function praiseHero with parameter name and return." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/function\s+\w+\s*\(/.test(clean)) return { passed: false, message: "function kalit so'zi bilan funksiya e'lon qiling!" };
      if (!/return/.test(clean)) return { passed: false, message: "Funksiya ichida return yordamida qiymat qaytaring!" };
      if (!/praiseHero\s*\(/.test(clean)) return { passed: false, message: "praiseHero() funksiyasini chaqiring!" };
      return { passed: true, message: "Ajoyib! O'z funksiyangizni muvaffaqiyatli qurdingiz! ⚙️" };
    }
  },

  // THEME 11: Parameters & Return
  {
    id: "js-11-params-return",
    module: "mod-js-logic",
    icon: "📥",
    title: {
      uz: "11-Mavzu: Parametrlar va Return — Kiruvchi va Qaytaruvchi Qiymat",
      en: "Theme 11: Parameters, Return & Default Values"
    },
    concept: {
      uz: "Parametrlar — funksiya ishlashi uchun beriladigan xomashyo (kiruvchi ma'lumotlar). return esa tayyor natijani dasturga chiqarib berish kalitidir. Agar parametr berilmasa, default qiymat (masalan: mult = 2) ishlaydi.",
      en: "Parameters are the inputs fed into a function. return sends the computed result back to the caller. Default parameters supply fallbacks when omitted."
    },
    humanLanguage: {
      uz: "Sharbat siquvchi mashinaga 2 ta meva solasiz (parametrlar: olma, apelsin), u esa tayyor vitaminli sharbatni qaytaradi (return). Agar meva aytmasangiz, sukut bo'yicha olmali sharbat qiladi!",
      en: "A blender takes ingredients (parameters: apple, orange) and delivers delicious juice (return). Default params ensure juice even if you forget to specify!"
    },
    secretSandwich: {
      uz: "function hisobla(a, b = 2) { return a * b; }",
      en: "function calc(a, b = 2) { return a * b; }"
    },
    stepBreakdown: [
      {
        part: "function calcDamage(base, mult = 2)",
        explanation: { uz: "Asosiy zarba va karrali ko'paytuvchi (default: 2)", en: "Base damage with default multiplier 2" },
        visualResult: { uz: "Funksiya parametrlarni qabul qiladi", en: "Accepts inputs" }
      },
      {
        part: "return base * mult;",
        explanation: { uz: "Ko'paytirilgan yakuniy zararni qaytarish", en: "Returns total calculated damage" },
        visualResult: { uz: "Natija chaqiruvchiga qaytadi", en: "Returns computed number" }
      }
    ],
    listOfCommands: [
      { code: 'return value;', name: { uz: "Natijani qaytarish", en: "Return Statement" }, description: { uz: "Funksiya ishini tugatadi va natijani qaytaradi", en: "Specifies value returned from function call" } }
    ],
    tagShowcase: [
      { tag: 'param', name: { uz: "Parametr", en: "Parameter" }, meaning: { uz: "Kiruvchi ma'lumot", en: "Input argument" } },
      { tag: 'return', name: { uz: "Qaytarish", en: "Return" }, meaning: { uz: "Chiquvchi natija", en: "Output result" } }
    ],
    mission: {
      uz: "function calculateDamage(base, mult = 2) { return base * mult; } yarating. const total = calculateDamage(35, 3); hisoblab, console.log(total); qiling.",
      en: "Create function calculateDamage(base, mult = 2) returning base * mult, calculate total with (35, 3), and log."
    },
    targetDescription: {
      uz: "Hisoblangan 105 umumiy zarar konsolga chiqariladi.",
      en: "Calculated damage 105 logged to console."
    },
    initialCode: {
      en: "// Theme 11: Parameters & Return\n// Step 1: Create damage calculator function with default parameter:\n// function calculateDamage(base, mult = 2) {\n//   return base * mult;\n// }\n\n// Step 2: Call with base 35 and mult 3:\n// const total = calculateDamage(35, 3);\n\n// Step 3: Log total damage:\n// console.log(total);\n",
      uz: "// 11-Mavzu: Parametrlar va Return\n// 1-QADAM: Default parametrli zarar hisoblash funksiyasini yozing:\n// function calculateDamage(base, mult = 2) {\n//   return base * mult;\n// }\n\n// 2-QADAM: Funksiyani 35 va 3 qiymatlari bilan chaqirib, total ga saqlang:\n// const total = calculateDamage(35, 3);\n\n// 3-QADAM: Umumiy zararni konsolga chiqaring:\n// console.log(total);\n"
    },
    targetCode: {
      en: "// Theme 11 Solution\nfunction calculateDamage(base, mult = 2) {\n  return base * mult;\n}\nconst total = calculateDamage(35, 3);\nconsole.log(total);",
      uz: "// 11-Mavzu Yechimi\nfunction calculateDamage(base, mult = 2) {\n  return base * mult;\n}\nconst total = calculateDamage(35, 3);\nconsole.log(total);"
    },
    hints: [
      { uz: "function calculateDamage(base, mult = 2) { return base * mult; }", en: "Define function with default parameter." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/mult\s*=\s*2/.test(clean)) return { passed: false, message: "mult = 2 default parametrini belgilang!" };
      if (!/return\s+base\s*\*\s*mult/.test(clean)) return { passed: false, message: "return base * mult; bilan qiymatni qaytaring!" };
      if (!/console\.log/.test(clean)) return { passed: false, message: "Natijani console.log() bilan chiqaring!" };
      return { passed: true, message: "Ofarin! Parametrlar va return formulalarini to'liq egalladingiz! 🎯" };
    }
  },

  // THEME 12: Arrow Functions
  {
    id: "js-12-arrow-functions",
    module: "mod-js-logic",
    icon: "🏹",
    title: {
      uz: "12-Mavzu: Arrow Funksiyalar — Zamonaviy Qisqa Yozuv (() => {})",
      en: "Theme 12: Arrow Functions — Modern Concise Syntax (() => {})"
    },
    concept: {
      uz: "Arrow funksiyalar (strelka funksiyalar) ES6 da paydo bo'lgan zamonaviy usul. Oddiy function so'zi o'rniga => belgisi ishlatiladi. Agar funksiya 1 qatordan iborat bo'lsa, qavslar {} va return so'zini yozmaslik ham mumkin!",
      en: "Arrow functions provide a clean, modern shorthand using => instead of the function keyword. Single-line arrow functions offer implicit return without curly braces."
    },
    humanLanguage: {
      uz: "Eski usul: const add = function(a, b) { return a + b; };\\nYangi zamonaviy arrow usul: const add = (a, b) => a + b;\\nKo'rdingizmi, qanchalik qisqa, go'zal va tez yoziladi!",
      en: "Traditional: const add = function(a, b) { return a + b; };\\nModern Arrow: const add = (a, b) => a + b;\\nMuch shorter, cleaner, and faster to write!"
    },
    secretSandwich: {
      uz: "const nom = (parametrlar) => ifoda; (1 qatorli avtomatik return!)",
      en: "const name = (params) => expression; (implicit return)"
    },
    stepBreakdown: [
      {
        part: "const square = n => n * n;",
        explanation: { uz: "1 ta parametrli, 1 qatorda kvadrat hisoblovchi arrow funksiya", en: "Single-param concise arrow function" },
        visualResult: { uz: "Tezkor kvadrat hisoblagich", en: "Computes square instantly" }
      },
      {
        part: "const add = (a, b) => a + b;",
        explanation: { uz: "2 ta parametrni qo'shuvchi ixcham arrow funksiya", en: "2-param concise arrow function" },
        visualResult: { uz: "Tezkor qo'shuvchi funksiya", en: "Adds two numbers" }
      }
    ],
    listOfCommands: [
      { code: '(a, b) => a + b', name: { uz: "Arrow funksiya", en: "Arrow Function" }, description: { uz: "Qisqa sintaksisli zamonaviy funksiya", en: "Concise anonymous function syntax with lexical this" } }
    ],
    tagShowcase: [
      { tag: '=>', name: { uz: "Strelka (Arrow)", en: "Fat Arrow" }, meaning: { uz: "Funksiya tanasini bildiradi", en: "Points to function body" } }
    ],
    mission: {
      uz: "Ikkita sonni qo'shuvchi arrow funksiya: const add = (a, b) => a + b; va kvadrat hisoblovchi: const square = x => x * x; yarating hamda console.log(add(8, 12), square(5)); chiqaring.",
      en: "Create const add = (a, b) => a + b; and const square = x => x * x; arrow functions, then log their results."
    },
    targetDescription: {
      uz: "Arrow funksiyalar natijalari (20 va 25) konsolga chiqariladi.",
      en: "Computed arrow function values (20 and 25) logged to console."
    },
    initialCode: {
      en: "// Theme 12: Arrow Functions\n// Step 1: Create arrow function to add two numbers:\n// const add = (a, b) => a + b;\n\n// Step 2: Create arrow function to square a number:\n// const square = x => x * x;\n\n// Step 3: Log add(8, 12) and square(5):\n// console.log(add(8, 12), square(5));\n",
      uz: "// 12-Mavzu: Arrow Funksiyalar (() => {})\n// 1-QADAM: Ikkita sonni qo'shuvchi arrow funksiya yozing:\n// const add = (a, b) => a + b;\n\n// 2-QADAM: Sonning kvadratini hisoblovchi arrow funksiya yozing:\n// const square = x => x * x;\n\n// 3-QADAM: add(8, 12) va square(5) natijalarini konsolga chiqaring:\n// console.log(add(8, 12), square(5));\n"
    },
    targetCode: {
      en: "// Theme 12 Solution\nconst add = (a, b) => a + b;\nconst square = x => x * x;\nconsole.log(add(8, 12), square(5));",
      uz: "// 12-Mavzu Yechimi\nconst add = (a, b) => a + b;\nconst square = x => x * x;\nconsole.log(add(8, 12), square(5));"
    },
    hints: [
      { uz: "const add = (a, b) => a + b; va const square = x => x * x;", en: "Use concise arrow function syntax without curly braces." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/=>/.test(clean)) return { passed: false, message: "=> arrow (strelka) belgisidan foydalaning!" };
      if (!/square/.test(clean) || !/add/.test(clean)) return { passed: false, message: "add va square arrow funksiyalarini yarating!" };
      if (!/console\.log/.test(clean)) return { passed: false, message: "Natijani console.log() bilan chiqaring!" };
      return { passed: true, message: "Qoyilmaqom! Zamonaviy Arrow funksiyalarni mahorat bilan ishlatdingiz! 🏹" };
    }
  },

  // THEME 13: Arrays Basics
  {
    id: "js-13-arrays",
    module: "mod-js-data",
    icon: "🎒",
    title: {
      uz: "13-Mavzu: Massivlar — Sehrli Ryukzak va Ro'yxatlar ([])",
      en: "Theme 13: Arrays — Magic Inventory Backpacks ([])"
    },
    concept: {
      uz: "Massiv (Array) — bu bitta o'zgaruvchida bir nechta qiymatlarni tartib bilan saqlash usuli. Massivdagi elementlar 0 dan boshlab raqamlanadi (0-indeks). .length uning uzunligini ko'rsatadi.",
      en: "An Array stores an ordered list of values inside square brackets []. Elements are indexed starting from 0. .length returns item count."
    },
    humanLanguage: {
      uz: "O'yinchi ryukzagida qilich, qalqon va dori bor: const inv = ['Qilich', 'Qalqon', 'Dori'];. 1-buyumni olish uchun inv[0] deymiz, chunki dasturchilar sanashni 0 dan boshlaydi!",
      en: "An inventory backpack holds items: ['Sword', 'Shield', 'Potion']. First item is at index 0 (inv[0]) because computer counting begins at 0!"
    },
    secretSandwich: {
      uz: "const massiv = [a, b, c]; — to'rtburchak qavs ichida vergul bilan ajratilgan ro'yxat.",
      en: "const arr = [a, b, c]; — comma-separated elements in square brackets."
    },
    stepBreakdown: [
      {
        part: "const heroes = ['Ninja', 'Mage', 'Warrior'];",
        explanation: { uz: "3 ta qahramondan iborat massiv yaratish", en: "Creates array with 3 heroes" },
        visualResult: { uz: "3 ta elementli ro'yxat hosil bo'ladi", en: "List of 3 items" }
      },
      {
        part: "heroes[0]",
        explanation: { uz: "0-indeksdagi birinchi element ('Ninja')", en: "First element at index 0" },
        visualResult: { uz: "'Ninja'", en: "'Ninja'" }
      },
      {
        part: "heroes[1] = 'CyberMage';",
        explanation: { uz: "2-elementni yangisiga almashtirish", en: "Updates element at index 1" },
        visualResult: { uz: "Massiv yangilanadi", en: "Array updated" }
      }
    ],
    listOfCommands: [
      { code: '[a, b, c]', name: { uz: "Massiv", en: "Array Bracket" }, description: { uz: "Bir nechta elementlar ro'yxatini yaratadi", en: "Creates an ordered array" } },
      { code: 'arr[i]', name: { uz: "Indeks orqali murojaat", en: "Index Access" }, description: { uz: "i-o'rindagi elementni o'qiydi yoki o'zgartiradi", en: "Accesses element at index i" } }
    ],
    tagShowcase: [
      { tag: '[]', name: { uz: "Qavs", en: "Bracket" }, meaning: { uz: "Massiv belgisi", en: "Array container" } },
      { tag: '[0]', name: { uz: "0-indeks", en: "Index 0" }, meaning: { uz: "Birinchi element", en: "First element" } }
    ],
    mission: {
      uz: "const tools = ['Qilich', 'Qalqon', 'Kamon']; e'lon qiling. Ikkinchi elementni tools[1] = 'Plazma Qalqon'; qilib o'zgartiring va console.log(tools[0], tools[1], tools.length); chiqaring.",
      en: "Declare const tools = ['Qilich', 'Qalqon', 'Kamon'];, update tools[1] = 'Plazma Qalqon';, and log tools[0], tools[1], and tools.length."
    },
    targetDescription: {
      uz: "Birinchi element, yangilangan ikkinchi element va jami uzunlik (3) konsolga chiqadi.",
      en: "First item, updated second item, and length 3 logged."
    },
    initialCode: {
      en: "// Theme 13: Arrays\n// Step 1: Create array of tools:\n// const tools = [\"Qilich\", \"Qalqon\", \"Kamon\"];\n\n// Step 2: Update second item at index 1:\n// tools[1] = \"Plazma Qalqon\";\n\n// Step 3: Log first item, second item, and total length:\n// console.log(tools[0], tools[1], tools.length);\n",
      uz: "// 13-Mavzu: Massivlar Asoslari\n// 1-QADAM: tools nomli 3 ta buyumdan iborat massiv yarating:\n// const tools = [\"Qilich\", \"Qalqon\", \"Kamon\"];\n\n// 2-QADAM: 1-indeksdagi elementni \"Plazma Qalqon\" ga almashtiring:\n// tools[1] = \"Plazma Qalqon\";\n\n// 3-QADAM: 0-element, 1-element va massiv uzunligini konsolga chiqaring:\n// console.log(tools[0], tools[1], tools.length);\n"
    },
    targetCode: {
      en: "// Theme 13 Solution\nconst tools = [\"Qilich\", \"Qalqon\", \"Kamon\"];\ntools[1] = \"Plazma Qalqon\";\nconsole.log(tools[0], tools[1], tools.length);",
      uz: "// 13-Mavzu Yechimi\nconst tools = [\"Qilich\", \"Qalqon\", \"Kamon\"];\ntools[1] = \"Plazma Qalqon\";\nconsole.log(tools[0], tools[1], tools.length);"
    },
    hints: [
      { uz: "tools[1] = \"Plazma Qalqon\"; va console.log(tools[0], tools[1], tools.length);", en: "Modify index 1 and check length." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/\[.*\]/.test(clean)) return { passed: false, message: "Massiv yaratish uchun [] to'rtburchak qavslardan foydalaning!" };
      if (!/tools\[1\]\s*=/.test(clean)) return { passed: false, message: "tools[1] elementini yangilang!" };
      if (!/\.length/.test(clean)) return { passed: false, message: "tools.length orqali massiv uzunligini tekshiring!" };
      return { passed: true, message: "Zo'r! Massivlar va indekslar bilan ishlashni to'liq o'rgandingiz! 🎒" };
    }
  },

  // THEME 14: push, pop, shift, unshift
  {
    id: "js-14-array-methods",
    module: "mod-js-data",
    icon: "🥞",
    title: {
      uz: "14-Mavzu: Massiv Metodlari — push(), pop(), shift() va unshift()",
      en: "Theme 14: Adding & Removing — push(), pop(), shift(), unshift()"
    },
    concept: {
      uz: "Massivning boshidan va oxiridan element qo'shish va olib tashlash uchun maxsus 4 ta asosiy metod mavjud:\\n1. push() — OXIRIGA yangi element qo'shadi\\n2. pop() — OXIRIDAN bitta elementni olib tashlaydi\\n3. unshift() — BOSHIGA yangi element qo'shadi\\n4. shift() — BOSHIDAN bitta elementni sug'urib oladi",
      en: "The four core array mutator methods:\\n1. push() adds to END\\n2. pop() removes from END\\n3. unshift() adds to FRONT\\n4. shift() removes from FRONT."
    },
    humanLanguage: {
      uz: "Tarelka taxlami (stack): yangi tarelka tepasiga qo'yiladi (push) va eng tepasidagisi olinadi (pop).\\nNavbat (queue): yangi odam navbat boshiga nohaq o'tishi (unshift) va navbat boshidagi odam birinchi ketishi (shift)!",
      en: "Stack of plates: push adds to the top/end, pop removes from the top/end.\\nStore queue: unshift adds to the front of the line, shift removes the first person served from the front!"
    },
    secretSandwich: {
      uz: "arr.push(x) [oxiriga] | arr.pop() [oxiridan] | arr.unshift(x) [boshiga] | arr.shift() [boshidan]",
      en: "push/pop (at end) | unshift/shift (at start)"
    },
    stepBreakdown: [
      {
        part: "squad.push('Warrior')",
        explanation: { uz: "Massivning eng oxiriga 'Warrior' qo'shiladi", en: "Appends 'Warrior' to end" },
        visualResult: { uz: "Oxiriga yangi qahramon qo'shiladi", en: "Added to end" }
      },
      {
        part: "squad.unshift('Leader')",
        explanation: { uz: "Massivning eng boshiga (0-indeksga) 'Leader' qo'shiladi", en: "Prepends 'Leader' to front" },
        visualResult: { uz: "Boshiga yangi qahramon qo'shiladi", en: "Added to start" }
      },
      {
        part: "squad.pop()",
        explanation: { uz: "Eng oxirgi element o'chirib olinadi", en: "Pops last item" },
        visualResult: { uz: "Oxirgi element chiqib ketadi", en: "Removes from end" }
      },
      {
        part: "squad.shift()",
        explanation: { uz: "Eng birinchi element o'chirib olinadi", en: "Shifts first item" },
        visualResult: { uz: "Birinchi element chiqib ketadi", en: "Removes from start" }
      }
    ],
    listOfCommands: [
      { code: 'arr.push(item)', name: { uz: "Oxiriga qo'shish", en: "Push to End" }, description: { uz: "Massivning oxiriga yangi element qo'shadi", en: "Appends one or more elements to end of array" } },
      { code: 'arr.pop()', name: { uz: "Oxiridan olish", en: "Pop from End" }, description: { uz: "Massivning oxirgi elementini sug'urib oladi", en: "Removes and returns last element" } },
      { code: 'arr.unshift(item)', name: { uz: "Boshiga qo'shish", en: "Unshift to Start" }, description: { uz: "Massivning boshiga yangi element qo'shadi", en: "Inserts one or more elements at start" } },
      { code: 'arr.shift()', name: { uz: "Boshidan olish", en: "Shift from Start" }, description: { uz: "Massivning birinchi elementini olib tashlaydi", en: "Removes and returns first element" } }
    ],
    tagShowcase: [
      { tag: 'push()', name: { uz: "Oxiriga qo'shish", en: "Push" }, meaning: { uz: "Oxiriga yangi qiymat", en: "Append to end" } },
      { tag: 'pop()', name: { uz: "Oxiridan olish", en: "Pop" }, meaning: { uz: "Oxirgisini sug'urish", en: "Remove from end" } },
      { tag: 'unshift()', name: { uz: "Boshiga qo'shish", en: "Unshift" }, meaning: { uz: "Boshiga yangi qiymat", en: "Insert at front" } },
      { tag: 'shift()', name: { uz: "Boshidan olish", en: "Shift" }, meaning: { uz: "Birinchisini olish", en: "Remove from front" } }
    ],
    mission: {
      uz: "let squad = ['Ninja', 'Mage']; e'lon qiling. squad.push('Warrior'); qiling. squad.unshift('Leader'); qiling. const removed = squad.pop(); qiling va console.log(squad, removed); chiqaring.",
      en: "Declare let squad = ['Ninja', 'Mage'];. Apply push('Warrior'), unshift('Leader'), pop(), and log the squad and removed item."
    },
    targetDescription: {
      uz: "O'zgartirilgan massiv (['Leader', 'Ninja', 'Mage']) va olingan 'Warrior' konsolga chiqadi.",
      en: "Updated squad array and popped 'Warrior' item logged."
    },
    initialCode: {
      en: "// Theme 14: push, pop, shift, unshift\n// Step 1: Declare squad array:\n// let squad = [\"Ninja\", \"Mage\"];\n\n// Step 2: Push \"Warrior\" to the end:\n// squad.push(\"Warrior\");\n\n// Step 3: Unshift \"Leader\" to the front:\n// squad.unshift(\"Leader\");\n\n// Step 4: Pop the last item from the end:\n// const removed = squad.pop();\n\n// Step 5: Log squad and removed:\n// console.log(squad, removed);\n",
      uz: "// 14-Mavzu: push, pop, shift, unshift Metodlari\n// 1-QADAM: squad nomli massiv e'lon qiling:\n// let squad = [\"Ninja\", \"Mage\"];\n\n// 2-QADAM: push() bilan massiv oxiriga \"Warrior\" qo'shing:\n// squad.push(\"Warrior\");\n\n// 3-QADAM: unshift() bilan massiv boshiga \"Leader\" qo'shing:\n// squad.unshift(\"Leader\");\n\n// 4-QADAM: pop() yordamida eng oxirgi elementni sug'urib olib removed ga saqlang:\n// const removed = squad.pop();\n\n// 5-QADAM: Jamoa va olingan elementni konsolga chiqaring:\n// console.log(squad, removed);\n"
    },
    targetCode: {
      en: "// Theme 14 Solution\nlet squad = [\"Ninja\", \"Mage\"];\nsquad.push(\"Warrior\");\nsquad.unshift(\"Leader\");\nconst removed = squad.pop();\nconsole.log(squad, removed);",
      uz: "// 14-Mavzu Yechimi\nlet squad = [\"Ninja\", \"Mage\"];\nsquad.push(\"Warrior\");\nsquad.unshift(\"Leader\");\nconst removed = squad.pop();\nconsole.log(squad, removed);"
    },
    hints: [
      { uz: "squad.push(\"Warrior\"); squad.unshift(\"Leader\"); squad.pop(); metodlarini ketma-ket qo'llang.", en: "Use push to add to end, unshift to add to front, and pop to remove from end." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/\.push\s*\(/.test(clean)) return { passed: false, message: ".push() metodidan foydalaning!" };
      if (!/\.unshift\s*\(/.test(clean)) return { passed: false, message: ".unshift() metodidan foydalaning!" };
      if (!/\.pop\s*\(/.test(clean)) return { passed: false, message: ".pop() metodidan foydalaning!" };
      if (!/console\.log/.test(clean)) return { passed: false, message: "Natijani console.log() bilan chiqaring!" };
      return { passed: true, message: "Mukammal! push, pop, shift va unshift sirlarini to'liq o'zlashtirdingiz! 🥞" };
    }
  },

  // THEME 15: for loop
  {
    id: "js-15-for-loop",
    module: "mod-js-data",
    icon: "🔁",
    title: {
      uz: "15-Mavzu: Takrorlash Mashinasi — for Tsikli va Indekslar",
      en: "Theme 15: Loop Machine — for Loop & Iteration"
    },
    concept: {
      uz: "for tsikli kompyuterga bir xil ishni yuzlab marta soniyalarda bajartirish imkonini beradi. U 3 ta qismdan iborat: boshlanish (let i = 0), shart (i < n) va har bir qadam (i++).",
      en: "The classic for loop repeats instructions precisely a given number of times. It has 3 parts: initializer (let i = 0), condition (i < n), and increment (i++)."
    },
    humanLanguage: {
      uz: "Xuddi stadionda 5 davra yugurishdek: 1-davradan boshlaysiz (i = 1), har safar 1 davra qo'shiladi (i++), va 5 ta bo'lguncha davom etadi (i <= 5)!",
      en: "Like running laps on a track: start at lap 1 (i = 1), add one each time (i++), and stop once you finish 5 laps (i <= 5)!"
    },
    secretSandwich: {
      uz: "for (let i = 0; i < n; i++) { ... qayta-qayta ishlaydigan kod ... }",
      en: "for (let i = 0; i < n; i++) { ... repeated code ... }"
    },
    stepBreakdown: [
      {
        part: "let i = 1; i <= 5; i++",
        explanation: { uz: "1 dan 5 gacha bittalab hisoblovchi for formulasi", en: "Counts 1 through 5 step by step" },
        visualResult: { uz: "Tsikl 5 marta aylanadi", en: "Executes 5 iterations" }
      },
      {
        part: "console.log('Yulduzcha: ' + i + ' ⭐')",
        explanation: { uz: "Har bir aylanishda raqamni chiqarish", en: "Logs lap index each step" },
        visualResult: { uz: "Konsolda 1, 2, 3, 4, 5 chiqadi", en: "Prints 1 through 5" }
      }
    ],
    listOfCommands: [
      { code: 'for (let i=0; i<n; i++)', name: { uz: "for tsikli", en: "For Loop" }, description: { uz: "Hisoblagich orqali kodni belgilangan marta takrorlaydi", en: "Loops through block of code a specified number of times" } }
    ],
    tagShowcase: [
      { tag: 'for', name: { uz: "Takrorlash", en: "For" }, meaning: { uz: "Tsikl kalit so'zi", en: "Loop keyword" } },
      { tag: 'i++', name: { uz: "1 qadam", en: "Increment" }, meaning: { uz: "Har aylanishda 1 ga oshirish", en: "Increase i by 1" } }
    ],
    mission: {
      uz: "for tsikli yordamida 1 dan 5 gacha sanang: for (let i = 1; i <= 5; i++) { console.log('Yulduzcha: ' + i + ' ⭐'); }",
      en: "Use a for loop to count from 1 to 5 and log 'Yulduzcha: ' + i + ' ⭐'."
    },
    targetDescription: {
      uz: "1 dan 5 gacha yulduzcha raqamlari qatorma-qator konsolga chiqadi.",
      en: "Stars 1 through 5 logged sequentially to console."
    },
    initialCode: {
      en: "// Theme 15: for Loop\n// Step 1: Write a for loop counting from 1 to 5:\n// for (let i = 1; i <= 5; i++) {\n//   console.log(\"Yulduzcha: \" + i + \" ⭐\");\n// }\n",
      uz: "// 15-Mavzu: for Tsikli\n// 1-QADAM: 1 dan 5 gacha hisoblovchi for tsiklini yozing:\n// for (let i = 1; i <= 5; i++) {\n//   console.log(\"Yulduzcha: \" + i + \" ⭐\");\n// }\n"
    },
    targetCode: {
      en: "// Theme 15 Solution\nfor (let i = 1; i <= 5; i++) {\n  console.log(\"Yulduzcha: \" + i + \" ⭐\");\n}",
      uz: "// 15-Mavzu Yechimi\nfor (let i = 1; i <= 5; i++) {\n  console.log(\"Yulduzcha: \" + i + \" ⭐\");\n}"
    },
    hints: [
      { uz: "for (let i = 1; i <= 5; i++) { console.log(\"Yulduzcha: \" + i + \" ⭐\"); }", en: "Write for loop with i initialized to 1 up to 5." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/for\s*\(\s*let\s+i\s*=\s*1;\s*i\s*<=\s*5;\s*i\+\+\s*\)/.test(clean)) return { passed: false, message: "for (let i = 1; i <= 5; i++) tsiklini to'g'ri yozing!" };
      if (!/console\.log/.test(clean)) return { passed: false, message: "Tsikl ichida console.log() bilan natijani chiqaring!" };
      return { passed: true, message: "Barakalla! for takrorlash mashinasini to'liq egalladingiz! 🔁" };
    }
  },

  // THEME 16: while & do...while
  {
    id: "js-16-while-loop",
    module: "mod-js-data",
    icon: "⏳",
    title: {
      uz: "16-Mavzu: while va do...while Tsikllari va Ularning Nozik Farqi!",
      en: "Theme 16: while & do...while Loops — Critical Differences!"
    },
    concept: {
      uz: "while va do...while shartli takrorlash tsikllaridir. Nozik va eng muhim farqi:\\n1. while (shart) — shartni AVVAL tekshiradi. Agar shart boshidayoq false bo'lsa, kod 0 marta (umuman) ishlamaydi!\\n2. do { ... } while (shart) — AVVAL kodni kamida 1 marta bajaradi, so'ngra shartni tekshiradi!",
      en: "while vs do...while: while evaluates the condition FIRST. If false, it never executes! do...while executes the block AT LEAST ONCE before evaluating the condition."
    },
    humanLanguage: {
      uz: "Tasavvur qiling: while — bu chiptachi eshik oldida turgan attraksion (chiptang bo'lmasa kiritmaydi). do...while — bu xonaga kirib o'tirasan, keyin chiptangni so'rashadi (kamida 1 marta kirgan bo'lasan)!",
      en: "while checks your ticket before entering the ride. do...while lets you board the ride once before asking for the ticket!"
    },
    secretSandwich: {
      uz: "while (shart) { ... } [0 yoki ko'p marta] | do { ... } while (shart); [kamida 1 marta!]",
      en: "while (cond) { } (0+ times) | do { } while (cond); (at least 1 time guaranteed!)"
    },
    stepBreakdown: [
      {
        part: "while (battery > 0) { battery--; }",
        explanation: { uz: "Quvvat borligini avval tekshirib keyin sarflash", en: "Checks battery before each discharge" },
        visualResult: { uz: "Quvvat 0 bo'lganda to'xtaydi", en: "Stops when battery reaches 0" }
      },
      {
        part: "do { roll = 6; } while (false);",
        explanation: { uz: "Shart false bo'lsa ham kamida bir marta zar tashlash", en: "Runs body at least once even if condition is false" },
        visualResult: { uz: "Bir marta bajariladi", en: "Executes exactly once" }
      }
    ],
    listOfCommands: [
      { code: 'while (cond) { }', name: { uz: "while tsikli", en: "While Loop" }, description: { uz: "Shart rost bo'lib turganda kodni takrorlaydi (avval tekshiradi)", en: "Repeats block while condition evaluates to true" } },
      { code: 'do { } while (cond);', name: { uz: "do...while tsikli", en: "Do While Loop" }, description: { uz: "Kodni kamida bir marta bajarib, so'ngra shartni tekshiradi", en: "Executes block once before condition is evaluated" } }
    ],
    tagShowcase: [
      { tag: 'while', name: { uz: "Shartli tsikl", en: "While" }, meaning: { uz: "Shart avval tekshiriladi", en: "Condition checked first" } },
      { tag: 'do...while', name: { uz: "Kamida 1 marta", en: "Do while" }, meaning: { uz: "Oldin bajarib keyin tekshirish", en: "Execute once, then check" } }
    ],
    mission: {
      uz: "let battery = 3; while (battery > 0) { console.log('Dron parvozi:', battery); battery--; } do...while bilan: let roll = 1; do { console.log('Zar otildi:', roll); roll++; } while (roll <= 1); yozing.",
      en: "Implement while countdown loop with battery, and do...while loop with roll."
    },
    targetDescription: {
      uz: "while va do...while ishlashi konsolga chiqariladi.",
      en: "While loop iterations and do...while execution logged to console."
    },
    initialCode: {
      en: "// Theme 16: while vs do...while\n// Step 1: while loop checks condition first:\n// let battery = 3;\n// while (battery > 0) {\n//   console.log(\"Dron parvozi:\", battery);\n//   battery--;\n// }\n\n// Step 2: do...while executes at least once:\n// let roll = 1;\n// do {\n//   console.log(\"Zar otildi:\", roll);\n//   roll++;\n// } while (roll <= 1);\n",
      uz: "// 16-Mavzu: while va do...while Tsikllari\n// 1-QADAM: while tsikli bilan dron quvvatini kamaytirib boring:\n// let battery = 3;\n// while (battery > 0) {\n//   console.log(\"Dron parvozi:\", battery);\n//   battery--;\n// }\n\n// 2-QADAM: do...while tsikli bilan kamida 1 marta zar tashlang:\n// let roll = 1;\n// do {\n//   console.log(\"Zar otildi:\", roll);\n//   roll++;\n// } while (roll <= 1);\n"
    },
    targetCode: {
      en: "// Theme 16 Solution\nlet battery = 3;\nwhile (battery > 0) {\n  console.log(\"Dron parvozi:\", battery);\n  battery--;\n}\nlet roll = 1;\ndo {\n  console.log(\"Zar otildi:\", roll);\n  roll++;\n} while (roll <= 1);",
      uz: "// 16-Mavzu Yechimi\nlet battery = 3;\nwhile (battery > 0) {\n  console.log(\"Dron parvozi:\", battery);\n  battery--;\n}\nlet roll = 1;\ndo {\n  console.log(\"Zar otildi:\", roll);\n  roll++;\n} while (roll <= 1);"
    },
    hints: [
      { uz: "while (battery > 0) { ... battery--; } va do { ... } while (roll <= 1); yozing.", en: "Write both while and do...while blocks." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/while\s*\(\s*battery\s*>\s*0\s*\)/.test(clean)) return { passed: false, message: "while (battery > 0) tsiklini yozing!" };
      if (!/do\s*\{[\s\S]*\}\s*while/.test(clean)) return { passed: false, message: "do { ... } while (...); tsiklidan foydalaning!" };
      if (!/battery--/.test(clean)) return { passed: false, message: "battery-- qadamini unutmang!" };
      return { passed: true, message: "Ajoyib! while va do...while orasidagi farqni mukammal tushundingiz! ⏳" };
    }
  },

  // THEME 17: for...of vs for...in & Objects
  {
    id: "js-17-objects",
    module: "mod-js-data",
    icon: "💎",
    title: {
      uz: "17-Mavzu: for...of va for...in Farqi hamda Obyektlar Asoslari ({})",
      en: "Theme 17: for...of vs for...in & Objects Foundations ({})"
    },
    concept: {
      uz: "Obyekt (Object) — kalit-qiymat (key-value) juftliklaridan iborat bo'lib, narsalarning xususiyatlarini saqlaydi: { name: 'Dino', speed: 50 }.\\nTsikllarning tub farqi:\\n1. for...of — Massivdagi QIYMATLAR (values) bo'yicha aylanadi\\n2. for...in — Obyektdagi KALITLAR (keys) bo'yicha aylanadi!",
      en: "Objects store key-value properties inside curly braces {}. Fundamental loop contrast:\\n1. for...of iterates over array VALUES\\n2. for...in iterates over object KEYS!"
    },
    humanLanguage: {
      uz: "Massivda [10, 20, 30] bo'lsa, for (const val of arr) aynan 10, 20, 30 qiymatlarini beradi. Obyektda { name: 'Dino', speed: 50 } bo'lsa, for (const key in obj) aynan 'name', 'speed' kalit nomlarini aylanadi!",
      en: "for...of gets the actual values of an array. for...in loops through the property keys of an object!"
    },
    secretSandwich: {
      uz: "for (const val of massiv) [qiymatlar] | for (const key in obyekt) [kalitlar]",
      en: "for...of (array values) | for...in (object keys)"
    },
    stepBreakdown: [
      {
        part: "for (const score of [10, 20, 30])",
        explanation: { uz: "Massiv qiymatlari bo'yicha aylanish (for...of)", en: "Iterates array values (for...of)" },
        visualResult: { uz: "10, 20, 30 qiymatlari chiqadi", en: "Prints 10, 20, 30" }
      },
      {
        part: "for (const key in hero)",
        explanation: { uz: "Obyekt kalitlari bo'yicha aylanish (for...in)", en: "Iterates object keys (for...in)" },
        visualResult: { uz: "Obyekt xususiyat nomlari chiqadi", en: "Prints keys" }
      }
    ],
    listOfCommands: [
      { code: 'for (const v of arr)', name: { uz: "for...of tsikli", en: "For Of Loop" }, description: { uz: "Massiv qiymatlarini ketma-ket aylanadi", en: "Iterates iterable array values directly" } },
      { code: 'for (const k in obj)', name: { uz: "for...in tsikli", en: "For In Loop" }, description: { uz: "Obyektning barcha kalitlarini aylanadi", en: "Iterates enumerable keys of an object" } }
    ],
    tagShowcase: [
      { tag: 'for...of', name: { uz: "Qiymatlar tsikli", en: "For Of" }, meaning: { uz: "Massiv elementlari uchun", en: "For array values" } },
      { tag: 'for...in', name: { uz: "Kalitlar tsikli", en: "For In" }, meaning: { uz: "Obyekt xususiyatlari uchun", en: "For object keys" } }
    ],
    mission: {
      uz: "const scores = [10, 20, 30]; for (const s of scores) { console.log('Ball:', s); } va const hero = { name: 'Dino', level: 5 }; for (const key in hero) { console.log(key, hero[key]); } deb yozing.",
      en: "Iterate const scores with for...of and const hero object with for...in."
    },
    targetDescription: {
      uz: "Massiv ballari va obyektning kalit-qiymatlari konsolga chiqariladi.",
      en: "Array scores from for...of and object properties from for...in logged."
    },
    initialCode: {
      en: "// Theme 17: for...of vs for...in & Objects\n// Step 1: Loop array values using for...of:\n// const scores = [10, 20, 30];\n// for (const s of scores) {\n//   console.log(\"Ball:\", s);\n// }\n\n// Step 2: Loop object keys using for...in:\n// const hero = { name: \"Dino\", level: 5 };\n// for (const key in hero) {\n//   console.log(key, hero[key]);\n// }\n",
      uz: "// 17-Mavzu: for...of va for...in Farqi hamda Obyektlar\n// 1-QADAM: for...of bilan massiv qiymatlarini aylaning:\n// const scores = [10, 20, 30];\n// for (const s of scores) {\n//   console.log(\"Ball:\", s);\n// }\n\n// 2-QADAM: for...in bilan obyekt kalitlarini aylaning:\n// const hero = { name: \"Dino\", level: 5 };\n// for (const key in hero) {\n//   console.log(key, hero[key]);\n// }\n"
    },
    targetCode: {
      en: "// Theme 17 Solution\nconst scores = [10, 20, 30];\nfor (const s of scores) {\n  console.log(\"Ball:\", s);\n}\nconst hero = { name: \"Dino\", level: 5 };\nfor (const key in hero) {\n  console.log(key, hero[key]);\n}",
      uz: "// 17-Mavzu Yechimi\nconst scores = [10, 20, 30];\nfor (const s of scores) {\n  console.log(\"Ball:\", s);\n}\nconst hero = { name: \"Dino\", level: 5 };\nfor (const key in hero) {\n  console.log(key, hero[key]);\n}"
    },
    hints: [
      { uz: "for (const s of scores) va for (const key in hero) qoliplaridan foydalaning.", en: "Use for...of for array and for...in for object." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/for\s*\(\s*const\s+\w+\s+of\s+/.test(clean)) return { passed: false, message: "Massiv qiymatlari uchun for...of tsiklidan foydalaning!" };
      if (!/for\s*\(\s*const\s+\w+\s+in\s+/.test(clean)) return { passed: false, message: "Obyekt kalitlari uchun for...in tsiklidan foydalaning!" };
      if (!/console\.log/.test(clean)) return { passed: false, message: "Natijani console.log() bilan chiqaring!" };
      return { passed: true, message: "Barakalla! for...of va for...in farqini aniq tushundingiz! 💎" };
    }
  },

  // THEME 18: Classes & OOP
  {
    id: "js-18-array-objects",
    module: "mod-js-data",
    icon: "🏛️",
    title: {
      uz: "18-Mavzu: Klasslar (Classes), constructor, Metodlar va 'this' — OOP!",
      en: "Theme 18: Classes, constructor, Methods & 'this' — OOP!"
    },
    concept: {
      uz: "Klass (Class) — bu obyektlar ishlab chiqaruvchi chizma yoki qolipdir. constructor() yangi obyekt yaratilganda xususiyatlarni (this.name, this.hp) o'rnatadi. 'this' so'zi esa yaratilgan aynan o'sha nusxani bildiradi. Metodlar — klass ichidagi funksiyalardir.",
      en: "A Class is a blueprint for producing multiple objects. The constructor() initializes properties using 'this', while methods define behavior."
    },
    humanLanguage: {
      uz: "Klass bu g'isht qolipi kabi: bitta class Hero { ... } qolipini yasab olamiz va new Hero('Alpomish', 100); deb minglab bir xil xususiyatli, lekin o'z nomiga ega qahramonlarni yaratamiz!",
      en: "A class is like a hero cookie cutter: define class Hero once, then stamp out individual hero instances with new Hero('Alpomish', 100)!"
    },
    secretSandwich: {
      uz: "class Qolip { constructor(p) { this.x = p; } metod() { ... } } | const obj = new Qolip(qiymat);",
      en: "class Blueprint { constructor(p) { this.p = p; } act() { } } | const x = new Blueprint(v);"
    },
    stepBreakdown: [
      {
        part: "class Hero { constructor(name, hp) { this.name = name; this.hp = hp; } }",
        explanation: { uz: "Qahramon chizmasini yaratish va xususiyatlarini this ga yuklash", en: "Defines class with constructor assigning properties to this" },
        visualResult: { uz: "Hero qolipi tayyor", en: "Hero class defined" }
      },
      {
        part: "attack() { return this.name + ' zarba berdi! HP: ' + this.hp; }",
        explanation: { uz: "Klass ichidagi metod (harakat)", en: "Method attached to class" },
        visualResult: { uz: "Har bir qahramon hujum qila oladi", en: "Instances can attack" }
      },
      {
        part: "const hero1 = new Hero('Alpomish', 100);",
        explanation: { uz: "new kalit so'zi bilan chizmadan jonli obyekt yasash", en: "Instantiates new Hero instance" },
        visualResult: { uz: "Yangi Alpomish qahramoni hosil bo'ladi", en: "hero1 created" }
      }
    ],
    listOfCommands: [
      { code: 'class Name { }', name: { uz: "Klass e'lon qilish", en: "Class Declaration" }, description: { uz: "Obyektlar yaratuvchi shablon qolipini e'lon qiladi", en: "Defines a class template for objects" } },
      { code: 'constructor()', name: { uz: "Konstruktor", en: "Constructor Method" }, description: { uz: "Yangi obyekt yaratilganda avtomatik ishga tushadigan sozlovchi funksiya", en: "Special method initializing new instances" } },
      { code: 'this', name: { uz: "O'ziga ishora (this)", en: "This Keyword" }, description: { uz: "Aynan joriy obyekt nusxasining o'zini bildiradi", en: "Refers to current instance object" } },
      { code: 'new ClassName()', name: { uz: "Yangi nusxa yaratish", en: "New Instance" }, description: { uz: "Klassdan yangi jonli obyekt ishlab chiqaradi", en: "Instantiates a class" } }
    ],
    tagShowcase: [
      { tag: 'class', name: { uz: "Klass", en: "Class" }, meaning: { uz: "Obyekt qolipi", en: "Blueprint" } },
      { tag: 'constructor', name: { uz: "Konstruktor", en: "Constructor" }, meaning: { uz: "Boshlang'ich sozlovchi", en: "Initializer" } },
      { tag: 'this', name: { uz: "O'zi", en: "This" }, meaning: { uz: "Joriy nusxaga murojaat", en: "Current instance" } },
      { tag: 'new', name: { uz: "Yangi", en: "New" }, meaning: { uz: "Obyekt yasash", en: "Instantiate" } }
    ],
    mission: {
      uz: "class Hero { constructor(name, hp) { this.name = name; this.hp = hp; } attack() { return this.name + ' zarba berdi! HP: ' + this.hp; } } yarating. const hero1 = new Hero('Alpomish', 100); qilib, console.log(hero1.attack()); chiqaring.",
      en: "Define class Hero with constructor, this.name, this.hp, and attack() method. Instantiate hero1 with new Hero('Alpomish', 100) and log attack()."
    },
    targetDescription: {
      uz: "'Alpomish zarba berdi! HP: 100' xabari klass metodi orqali konsolga chiqadi.",
      en: "'Alpomish zarba berdi! HP: 100' returned by class instance method and logged."
    },
    initialCode: {
      en: "// Theme 18: Classes & OOP\n// Step 1: Define class Hero with constructor and this:\n// class Hero {\n//   constructor(name, hp) {\n//     this.name = name;\n//     this.hp = hp;\n//   }\n//   attack() {\n//     return this.name + \" zarba berdi! HP: \" + this.hp;\n//   }\n// }\n\n// Step 2: Instantiate new hero using new keyword:\n// const hero1 = new Hero(\"Alpomish\", 100);\n\n// Step 3: Call attack method and log:\n// console.log(hero1.attack());\n",
      uz: "// 18-Mavzu: Klasslar, constructor va this (OOP)\n// 1-QADAM: Hero nomli klass va uning konstruktorini yozing:\n// class Hero {\n//   constructor(name, hp) {\n//     this.name = name;\n//     this.hp = hp;\n//   }\n//   attack() {\n//     return this.name + \" zarba berdi! HP: \" + this.hp;\n//   }\n// }\n\n// 2-QADAM: new kalit so'zi orqali yangi qahramon nusxasini yarating:\n// const hero1 = new Hero(\"Alpomish\", 100);\n\n// 3-QADAM: attack metodini chaqirib, konsolga chiqaring:\n// console.log(hero1.attack());\n"
    },
    targetCode: {
      en: "// Theme 18 Solution\nclass Hero {\n  constructor(name, hp) {\n    this.name = name;\n    this.hp = hp;\n  }\n  attack() {\n    return this.name + \" zarba berdi! HP: \" + this.hp;\n  }\n}\nconst hero1 = new Hero(\"Alpomish\", 100);\nconsole.log(hero1.attack());",
      uz: "// 18-Mavzu Yechimi\nclass Hero {\n  constructor(name, hp) {\n    this.name = name;\n    this.hp = hp;\n  }\n  attack() {\n    return this.name + \" zarba berdi! HP: \" + this.hp;\n  }\n}\nconst hero1 = new Hero(\"Alpomish\", 100);\nconsole.log(hero1.attack());"
    },
    hints: [
      { uz: "class Hero { constructor(name, hp) { this.name = name; this.hp = hp; } attack() { return this.name + \" zarba berdi! HP: \" + this.hp; } }", en: "Define class with constructor, this, and method." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/class\s+Hero/.test(clean)) return { passed: false, message: "class Hero { ... } kalit so'zi bilan klass yarating!" };
      if (!/constructor\s*\(/.test(clean)) return { passed: false, message: "constructor() funksiyasini yozing!" };
      if (!/this\.name|this\.hp/.test(clean)) return { passed: false, message: "this kalit so'zi orqali xususiyatlarni sozlang!" };
      if (!/new\s+Hero/.test(clean)) return { passed: false, message: "new Hero(...) bilan yangi nusxa yarating!" };
      return { passed: true, message: "Qoyilmaqom! Obyektga yo'naltirilgan dasturlash (OOP) sirlarini egalladingiz! 🏛️" };
    }
  },

  // THEME 19: DOM Selection
  {
    id: "js-19-dom-select",
    module: "mod-js-dom",
    icon: "🎯",
    title: {
      uz: "19-Mavzu: Sahifani Boshqarish — document.querySelector()",
      en: "Theme 19: Selecting Elements — document.querySelector()"
    },
    concept: {
      uz: "DOM (Document Object Model) — veb sahifadagi barcha HTML elementlarni JavaScript bilan boshqarish imkoniyatidir. document.querySelector('#id') yordamida sahifadagi istalgan elementni (sarlavha, tugma, quti) lazer nuri kabi topib olamiz.",
      en: "DOM selection allows JavaScript to target HTML elements. document.querySelector() finds elements using CSS selectors by ID (#id), class (.class), or tag name."
    },
    humanLanguage: {
      uz: "querySelector xuddi do'kondagi lazerli skanerga o'xshaydi: '#box' deb yozsangiz, u HTML ichidan id='box' bo'lgan qutini topib keladi va sizga beradi!",
      en: "querySelector is like a laser pointer. Asking for '#box' locates the exact element with id='box' in HTML!"
    },
    secretSandwich: {
      uz: "const el = document.querySelector('#elementId'); — elementni topib o'zgaruvchiga saqlash.",
      en: "const el = document.querySelector('#selector'); — grabs matching DOM element."
    },
    stepBreakdown: [
      {
        part: "document.querySelector('#title')",
        explanation: { uz: "id='title' bo'lgan sarlavhani topish", en: "Selects #title heading" },
        visualResult: { uz: "title elementi o'zgaruvchiga o'tadi", en: "Heading stored in variable" }
      },
      {
        part: "document.querySelector('#box')",
        explanation: { uz: "id='box' bo'lgan qutini topish", en: "Selects #box container" },
        visualResult: { uz: "box elementi o'zgaruvchiga o'tadi", en: "Box element stored" }
      }
    ],
    listOfCommands: [
      { code: 'document.querySelector("#id")', name: { uz: "Elementni tanlash", en: "Query Selector" }, description: { uz: "CSS selektori bo'yicha birinchi mos kelgan HTML elementni qaytaradi", en: "Returns first element matching CSS selector" } }
    ],
    tagShowcase: [
      { tag: 'document', name: { uz: "Hujjat", en: "Document" }, meaning: { uz: "Butun veb-sahifa", en: "Root web page" } },
      { tag: 'querySelector', name: { uz: "Topuvchi", en: "QuerySelector" }, meaning: { uz: "Element qidiruvchi", en: "Selector finder" } }
    ],
    mission: {
      uz: "const title = document.querySelector('#title'); va const box = document.querySelector('#box'); qilib elementlarni toping hamda console.log(title.textContent, box.id); chiqaring.",
      en: "Select title (#title) and box (#box) with document.querySelector, then log title.textContent and box.id."
    },
    targetDescription: {
      uz: "Topilgan sarlavha matni va qutining id si konsolga chiqariladi.",
      en: "Selected title textContent and box id logged to console."
    },
    initialCode: {
      en: "// Theme 19: DOM Selection\n// Step 1: Select title using querySelector:\n// const title = document.querySelector(\"#title\");\n\n// Step 2: Select box using querySelector:\n// const box = document.querySelector(\"#box\");\n\n// Step 3: Log title text and box id:\n// console.log(title.textContent, box.id);\n",
      uz: "// 19-Mavzu: DOM Elementlarini Tanlash\n// 1-QADAM: #title elementini querySelector bilan tanlang:\n// const title = document.querySelector(\"#title\");\n\n// 2-QADAM: #box elementini querySelector bilan tanlang:\n// const box = document.querySelector(\"#box\");\n\n// 3-QADAM: Sarlavha matni va quti id sini konsolga chiqaring:\n// console.log(title.textContent, box.id);\n"
    },
    targetCode: {
      en: "// Theme 19 Solution\nconst title = document.querySelector(\"#title\");\nconst box = document.querySelector(\"#box\");\nconsole.log(title.textContent, box.id);",
      uz: "// 19-Mavzu Yechimi\nconst title = document.querySelector(\"#title\");\nconst box = document.querySelector(\"#box\");\nconsole.log(title.textContent, box.id);"
    },
    hints: [
      { uz: "document.querySelector(\"#title\") va document.querySelector(\"#box\")", en: "Use document.querySelector with ID selectors." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/document\.querySelector\s*\(\s*["']#title["']\s*\)/.test(clean)) return { passed: false, message: "document.querySelector('#title') bilan sarlavhani toping!" };
      if (!/document\.querySelector\s*\(\s*["']#box["']\s*\)/.test(clean)) return { passed: false, message: "document.querySelector('#box') bilan qutini toping!" };
      if (!/console\.log/.test(clean)) return { passed: false, message: "Natijani console.log() bilan chiqaring!" };
      return { passed: true, message: "Zo'r! Veb sahifa elementlarini topishni o'rgandingiz! 🎯" };
    }
  },

  // THEME 20: DOM Modification
  {
    id: "js-20-dom-modify",
    module: "mod-js-dom",
    icon: "🎨",
    title: {
      uz: "20-Mavzu: Sahifani O'zgartirish — textContent va style",
      en: "Theme 20: Modifying DOM — textContent & style Properties"
    },
    concept: {
      uz: "Elementni topgach, uning matnini .textContent orqali o'zgartirishimiz, .style orqali esa CSS ranglari va o'lchamlarini jonli o'zgartirishimiz mumkin.",
      en: "Once selected, an element's text is changed via .textContent, and visual styles (colors, sizing, transforms) are manipulated dynamically through .style."
    },
    humanLanguage: {
      uz: "Sehrli qalam bilan sahifadagi qutiga yangi so'z yozish (box.textContent = 'Salom!') va uning rangini bo'yash (box.style.backgroundColor = '#10b981') kabi!",
      en: "Like painting directly on the webpage: box.textContent changes the text inside, and box.style.backgroundColor changes its color instantly!"
    },
    secretSandwich: {
      uz: "el.textContent = 'yangi matn'; | el.style.backgroundColor = 'rang';",
      en: "el.textContent = 'text'; | el.style.color = 'color';"
    },
    stepBreakdown: [
      {
        part: "box.textContent = '⚡ Super Quti!';",
        explanation: { uz: "Quti ichidagi matnni almashtirish", en: "Replaces text content of box" },
        visualResult: { uz: "Qutida 'Super Quti!' paydo bo'ladi", en: "Text updates on page" }
      },
      {
        part: "box.style.backgroundColor = '#10b981';",
        explanation: { uz: "Quti fon rangini zumrad yashil qilish", en: "Changes box background color to emerald green" },
        visualResult: { uz: "Quti yashil rangga kiradi", en: "Box becomes green" }
      }
    ],
    listOfCommands: [
      { code: 'el.textContent = "..."', name: { uz: "Matnni o'zgartirish", en: "Text Content" }, description: { uz: "Element ichidagi matnni xavfsiz o'zgartiradi", en: "Sets text content of node" } },
      { code: 'el.style.prop = "..."', name: { uz: "Stil berish", en: "Inline Style" }, description: { uz: "Elementga to'g'ridan-to'g'ri CSS stillarini o'rnatadi", en: "Applies inline CSS styling property" } }
    ],
    tagShowcase: [
      { tag: '.textContent', name: { uz: "Matn", en: "TextContent" }, meaning: { uz: "Element matni", en: "Element text" } },
      { tag: '.style', name: { uz: "Stil", en: "Style" }, meaning: { uz: "Element ko'rinishi", en: "Element style" } }
    ],
    mission: {
      uz: "const box = document.querySelector('#box'); oling. box.textContent = '⚡ Super Quti!'; qiling va box.style.backgroundColor = '#10b981'; deb yozing.",
      en: "Select #box, update box.textContent = '⚡ Super Quti!';, and set box.style.backgroundColor = '#10b981'."
    },
    targetDescription: {
      uz: "Qutining matni '⚡ Super Quti!' ga va fon rangi zumrad yashilga aylanadi.",
      en: "Box displays '⚡ Super Quti!' on emerald green background."
    },
    initialCode: {
      en: "// Theme 20: Modifying DOM\n// Step 1: Select the box element:\n// const box = document.querySelector(\"#box\");\n\n// Step 2: Change its text content:\n// box.textContent = \"⚡ Super Quti!\";\n\n// Step 3: Change its background color:\n// box.style.backgroundColor = \"#10b981\";\n",
      uz: "// 20-Mavzu: Sahifa Elementlarini O'zgartirish\n// 1-QADAM: #box elementini tanlang:\n// const box = document.querySelector(\"#box\");\n\n// 2-QADAM: Quti matnini o'zgartiring:\n// box.textContent = \"⚡ Super Quti!\";\n\n// 3-QADAM: Quti fon rangini zumrad yashil qiling:\n// box.style.backgroundColor = \"#10b981\";\n"
    },
    targetCode: {
      en: "// Theme 20 Solution\nconst box = document.querySelector(\"#box\");\nbox.textContent = \"⚡ Super Quti!\";\nbox.style.backgroundColor = \"#10b981\";",
      uz: "// 20-Mavzu Yechimi\nconst box = document.querySelector(\"#box\");\nbox.textContent = \"⚡ Super Quti!\";\nbox.style.backgroundColor = \"#10b981\";"
    },
    hints: [
      { uz: "box.textContent = \"⚡ Super Quti!\"; va box.style.backgroundColor = \"#10b981\";", en: "Update textContent and style.backgroundColor." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/box\.textContent\s*=/.test(clean)) return { passed: false, message: "box.textContent orqali quti matnini o'zgartiring!" };
      if (!/backgroundColor/.test(clean)) return { passed: false, message: "box.style.backgroundColor orqali quti rangini o'zgartiring!" };
      return { passed: true, message: "Barakalla! Brauzer sahifasini JavaScript orqali bo'yadingiz! 🎨" };
    }
  },

  // THEME 21: Click Events
  {
    id: "js-21-events",
    module: "mod-js-dom",
    icon: "⚡",
    title: {
      uz: "21-Mavzu: Hodisalar — addEventListener('click') (Jonli Tugma)",
      en: "Theme 21: Events — addEventListener('click') (Interactive Button)"
    },
    concept: {
      uz: "Hodisalar (Events) — foydalanuvchining har bir harakati (sichqonchani bosishi, harakatlantirishi). addEventListener('click', handler) orqali tugma bosilganda aynan qaysi kod bajarilishi kerakligini belgilaymiz.",
      en: "Events detect user interactions. addEventListener('click', callback) binds a listener function that executes immediately whenever the target element is clicked."
    },
    humanLanguage: {
      uz: "Eshik qo'ng'irog'i kabi: qo'ng'iroq tugmasi bosilganda (click hodisasi), ichkarida musiqa yangrashi kerak!",
      en: "Like a doorbell: when someone presses the button (click event), the chime rings (event handler callback)!"
    },
    secretSandwich: {
      uz: "tugma.addEventListener('click', () => { ... bosilganda bajariladigan ishlar ... });",
      en: "btn.addEventListener('click', () => { ... actions ... });"
    },
    stepBreakdown: [
      {
        part: "btn.addEventListener('click', () => { ... })",
        explanation: { uz: "Tugmaga sichqoncha bosilishini tinglovchi quloq o'rnatish", en: "Attaches click event listener" },
        visualResult: { uz: "Tugma bosishni kuta boshlaydi", en: "Listens for user clicks" }
      },
      {
        part: "box.style.backgroundColor = '#f59e0b';",
        explanation: { uz: "Tugma bosilganda qutini sariq rangga bo'yash", en: "Changes box color on click" },
        visualResult: { uz: "Tugma bosilishi bilan rang o'zgaradi", en: "Color transforms upon click" }
      }
    ],
    listOfCommands: [
      { code: 'el.addEventListener("click", fn)', name: { uz: "Tinglovchi qo'shish", en: "Add Event Listener" }, description: { uz: "Elementda hodisa (bosish) yuz berganda funksiyani chaqiradi", en: "Registers event handler on element" } }
    ],
    tagShowcase: [
      { tag: 'addEventListener', name: { uz: "Hodisa tinglovchi", en: "Event Listener" }, meaning: { uz: "Tugma bosilishini kutish", en: "Listen for interaction" } },
      { tag: "'click'", name: { uz: "Bosish", en: "Click" }, meaning: { uz: "Sichqoncha bosilishi", en: "Mouse click event" } }
    ],
    mission: {
      uz: "const btn = document.querySelector('#btn'); va const box = document.querySelector('#box'); oling. btn.addEventListener('click', () => { box.textContent = 'Bosildi! 🎉'; box.style.backgroundColor = '#f59e0b'; }); qiling.",
      en: "Attach click listener to #btn that updates #box text and background color."
    },
    targetDescription: {
      uz: "Tugma bosilganda quti matni 'Bosildi! 🎉' ga va rangi sariqqa o'zgaradi.",
      en: "Clicking button updates box text and changes color to amber."
    },
    initialCode: {
      en: "// Theme 21: Click Events\n// Step 1: Select button and box:\n// const btn = document.querySelector(\"#btn\");\n// const box = document.querySelector(\"#box\");\n\n// Step 2: Attach click listener:\n// btn.addEventListener(\"click\", () => {\n//   box.textContent = \"Bosildi! 🎉\";\n//   box.style.backgroundColor = \"#f59e0b\";\n// });\n",
      uz: "// 21-Mavzu: Sichqoncha Hodisalari (click)\n// 1-QADAM: Tugma va qutini tanlang:\n// const btn = document.querySelector(\"#btn\");\n// const box = document.querySelector(\"#box\");\n\n// 2-QADAM: Tugmaga click hodisasini ulang:\n// btn.addEventListener(\"click\", () => {\n//   box.textContent = \"Bosildi! 🎉\";\n//   box.style.backgroundColor = \"#f59e0b\";\n// });\n"
    },
    targetCode: {
      en: "// Theme 21 Solution\nconst btn = document.querySelector(\"#btn\");\nconst box = document.querySelector(\"#box\");\nbtn.addEventListener(\"click\", () => {\n  box.textContent = \"Bosildi! 🎉\";\n  box.style.backgroundColor = \"#f59e0b\";\n});",
      uz: "// 21-Mavzu Yechimi\nconst btn = document.querySelector(\"#btn\");\nconst box = document.querySelector(\"#box\");\nbtn.addEventListener(\"click\", () => {\n  box.textContent = \"Bosildi! 🎉\";\n  box.style.backgroundColor = \"#f59e0b\";\n});"
    },
    hints: [
      { uz: "btn.addEventListener(\"click\", () => { box.textContent = \"Bosildi! 🎉\"; box.style.backgroundColor = \"#f59e0b\"; });", en: "Attach click event listener to btn." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/addEventListener\s*\(\s*["']click["']/.test(clean)) return { passed: false, message: "addEventListener('click', ...) dan foydalaning!" };
      if (!/box\.textContent/.test(clean)) return { passed: false, message: "Tugma bosilganda quti matnini o'zgartiring!" };
      return { passed: true, message: "Ajoyib! Jonli interaktiv tugma yaratdingiz! ⚡" };
    }
  },

  // THEME 22: Keyboard & Window Keys
  {
    id: "js-22-timers",
    module: "mod-js-dom",
    icon: "⌨️",
    title: {
      uz: "22-Mavzu: Klaviatura & Window Keys — window.addEventListener('keydown') va e.key / e.code",
      en: "Theme 22: Keyboard & Window Keys — window 'keydown' (e.key vs e.code)"
    },
    concept: {
      uz: "O'yinlarda boshqaruv butun brauzer oynasiga bog'lanadi: window.addEventListener('keydown', (e) => { ... }).\\nNozik va muhim farq:\\n1. e.key — bosilgan belgining ma'nosi ('ArrowUp', ' ', 'a', 'A')\\n2. e.code — klaviaturadagi jismoniy tugma kodi ('Space', 'ArrowUp', 'KeyW') — til ruscha yoki o'zbekchaga o'zgarsa ham 'KeyW' o'zgarmaydi!",
      en: "Games use window-level keyboard listeners: window.addEventListener('keydown', (e) => { ... }).\\nKey difference:\\n1. e.key is the character value ('ArrowUp', 'Space', 'w')\\n2. e.code is the physical key code ('Space', 'KeyW') regardless of keyboard language layout!"
    },
    humanLanguage: {
      uz: "O'yinda sakrash uchun probel (Space) bosilganda: if (e.code === 'Space') qahramon sakraydi. Window tinglovchi bo'lgani uchun fokus qayerda bo'lishidan qat'i nazar har doim tugmani taniydi!",
      en: "Listening on window ensures game controls catch keypresses everywhere on page. Checking e.code === 'Space' detects the physical spacebar reliably across all languages!"
    },
    secretSandwich: {
      uz: "window.addEventListener('keydown', (e) => { if (e.code === 'Space' || e.key === 'ArrowUp') { ... } });",
      en: "window.addEventListener('keydown', (e) => { if (e.code === 'Space') { ... } });"
    },
    stepBreakdown: [
      {
        part: "window.addEventListener('keydown', (e) => { ... })",
        explanation: { uz: "Butun oyna bo'ylab klaviatura tugmalari bosilishini tinglash", en: "Listens to all keyboard presses window-wide" },
        visualResult: { uz: "Istalgan tugma bosilganda xabar oladi", en: "Triggers on any key press" }
      },
      {
        part: "e.key === 'ArrowUp' || e.code === 'Space'",
        explanation: { uz: "Tugmaning nomi va kodini tekshirish", en: "Checks key identity" },
        visualResult: { uz: "Yuqoriga yoki probel bosilganda sakraydi", en: "Detects up/space actions" }
      }
    ],
    listOfCommands: [
      { code: 'window.addEventListener("keydown", fn)', name: { uz: "Klaviatura tinglash", en: "Window Keydown" }, description: { uz: "Butun oyna bo'ylab tugma bosilishini qabul qiladi", en: "Listens for physical keystrokes globally" } },
      { code: 'e.key', name: { uz: "Tugma belgisi", en: "Event Key" }, description: { uz: "Bosilgan harf yoki belgi matni ('ArrowUp', 'a')", en: "The value of the key pressed" } },
      { code: 'e.code', name: { uz: "Jismoniy tugma kodi", en: "Event Code" }, description: { uz: "Klaviaturadagi tugma kodi ('Space', 'KeyW')", en: "The physical key code string" } }
    ],
    tagShowcase: [
      { tag: 'keydown', name: { uz: "Tugma bosilishi", en: "Keydown" }, meaning: { uz: "Klaviaturadagi hodisa", en: "Keyboard event" } },
      { tag: 'e.key', name: { uz: "Belgi", en: "e.key" }, meaning: { uz: "Tugma qiymati", en: "Character value" } },
      { tag: 'e.code', name: { uz: "Kodi", en: "e.code" }, meaning: { uz: "Jismoniy tugma", en: "Physical key" } }
    ],
    mission: {
      uz: "window.addEventListener('keydown', (e) => { const box = document.querySelector('#box'); if (e.key === 'ArrowUp' || e.code === 'Space') { box.textContent = 'Sakradi! 🚀'; box.style.backgroundColor = '#ec4899'; console.log('Bosildi:', e.key, e.code); } }); deb yozing.",
      en: "Add window keydown listener checking e.key === 'ArrowUp' or e.code === 'Space' that updates box text and color."
    },
    targetDescription: {
      uz: "Klaviatura orqali boshqariluvchi sakrash reaksiyasi konsolga chiqariladi.",
      en: "Keyboard arrow/space control updates box and logs key & code."
    },
    initialCode: {
      en: "// Theme 22: Keyboard & Window Keys (e.key vs e.code)\n// Step 1: Add global keydown listener to window:\n// window.addEventListener(\"keydown\", (e) => {\n//   const box = document.querySelector(\"#box\");\n//   if (e.key === \"ArrowUp\" || e.code === \"Space\") {\n//     box.textContent = \"Sakradi! 🚀\";\n//     box.style.backgroundColor = \"#ec4899\";\n//     console.log(\"Bosildi:\", e.key, e.code);\n//   }\n// });\n",
      uz: "// 22-Mavzu: Klaviatura va Window Hodisalari (e.key va e.code)\n// 1-QADAM: window obyektiga keydown hodisasini ulang:\n// window.addEventListener(\"keydown\", (e) => {\n//   const box = document.querySelector(\"#box\");\n//   if (e.key === \"ArrowUp\" || e.code === \"Space\") {\n//     box.textContent = \"Sakradi! 🚀\";\n//     box.style.backgroundColor = \"#ec4899\";\n//     console.log(\"Bosildi:\", e.key, e.code);\n//   }\n// });\n"
    },
    targetCode: {
      en: "// Theme 22 Solution\nwindow.addEventListener(\"keydown\", (e) => {\n  const box = document.querySelector(\"#box\");\n  if (e.key === \"ArrowUp\" || e.code === \"Space\") {\n    box.textContent = \"Sakradi! 🚀\";\n    box.style.backgroundColor = \"#ec4899\";\n    console.log(\"Bosildi:\", e.key, e.code);\n  }\n});",
      uz: "// 22-Mavzu Yechimi\nwindow.addEventListener(\"keydown\", (e) => {\n  const box = document.querySelector(\"#box\");\n  if (e.key === \"ArrowUp\" || e.code === \"Space\") {\n    box.textContent = \"Sakradi! 🚀\";\n    box.style.backgroundColor = \"#ec4899\";\n    console.log(\"Bosildi:\", e.key, e.code);\n  }\n});"
    },
    hints: [
      { uz: "window.addEventListener(\"keydown\", (e) => { if (e.key === \"ArrowUp\" || e.code === \"Space\") { ... } });", en: "Listen on window for keydown events." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/window\.addEventListener\s*\(\s*["']keydown["']/.test(clean)) return { passed: false, message: "window.addEventListener('keydown', ...) dan foydalaning!" };
      if (!/e\.key|e\.code/.test(clean)) return { passed: false, message: "e.key yoki e.code xususiyatlarini tekshiring!" };
      return { passed: true, message: "Ofarin! O'yinlarni klaviatura orqali boshqarish sirlarini egalladingiz! ⌨️" };
    }
  },

  // THEME 23: Timers & Math.random
  {
    id: "js-23-math-random",
    module: "mod-js-dom",
    icon: "🎲",
    title: {
      uz: "23-Mavzu: Taymerlar va Tasodifiylik — setTimeout() va Math.random()",
      en: "Theme 23: Timers & Randomness — setTimeout() & Math.random()"
    },
    concept: {
      uz: "O'yinlarda kutilmagan hodisalar kerak. Math.random() 0 dan 1 gacha tasodifiy o'nlik son beradi. Math.floor(Math.random() * 6) + 1 esa 1 dan 6 gacha zar tashlaydi! setTimeout(fn, ms) esa ma'lum millisekunddan so'ng kodni ishga tushiradi.",
      en: "Math.random() generates pseudo-random numbers. Multiplying and using Math.floor produces integer rolls like dice (1-6). setTimeout() runs a callback after delay."
    },
    humanLanguage: {
      uz: "O'yin boshlanganda 3 soniya sanab (setTimeout) 'GO!' deb start beriladi, o'ljalar esa tasodifiy joylarda (Math.random) paydo bo'ladi!",
      en: "Countdowns use setTimeout (delaying start), while dice and random item spawns use Math.random()!"
    },
    secretSandwich: {
      uz: "const zar = Math.floor(Math.random() * 6) + 1; | setTimeout(() => { ... }, 1000);",
      en: "const dice = Math.floor(Math.random() * 6) + 1; | setTimeout(() => { }, ms);"
    },
    stepBreakdown: [
      {
        part: "Math.floor(Math.random() * 6) + 1",
        explanation: { uz: "1 dan 6 gacha tasodifiy butun son yasash", en: "Generates random integer 1 to 6" },
        visualResult: { uz: "1, 2, 3, 4, 5 yoki 6 chiqadi", en: "Produces dice roll" }
      },
      {
        part: "setTimeout(() => { ... }, 1000)",
        explanation: { uz: "1000 millisekund (1 soniya) kutilgach ishga tushish", en: "Executes callback after 1 second delay" },
        visualResult: { uz: "1 soniyadan keyin xabar chiqadi", en: "Runs after 1 second" }
      }
    ],
    listOfCommands: [
      { code: 'Math.random()', name: { uz: "Tasodifiy son", en: "Random Number" }, description: { uz: "0 va 1 oralig'ida tasodifiy son hosil qiladi", en: "Generates pseudo-random float between 0 and 1" } },
      { code: 'setTimeout(fn, ms)', name: { uz: "Kechiktirilgan taymer", en: "Set Timeout" }, description: { uz: "Kodni belgilangan vaqtdan keyin bir marta bajaradi", en: "Executes function after specified milliseconds" } }
    ],
    tagShowcase: [
      { tag: 'Math.random()', name: { uz: "Tasodif", en: "Random" }, meaning: { uz: "Tasodifiy sonlar", en: "Random float" } },
      { tag: 'setTimeout()', name: { uz: "Taymer", en: "Timeout" }, meaning: { uz: "Vaqt o'tib ishlash", en: "Delayed run" } }
    ],
    mission: {
      uz: "const dice = Math.floor(Math.random() * 6) + 1; console.log('Zar:', dice); qiling va setTimeout(() => { console.log('BOMBA PORTLADI! 💥'); }, 1000); deb yozing.",
      en: "Roll dice using Math.random() and set 1-second timeout logging bomb explosion."
    },
    targetDescription: {
      uz: "Tasodifiy zar raqami va 1 soniyadan so'ng bomba portlashi konsolga chiqadi.",
      en: "Dice roll and 1-second delayed explosion message logged."
    },
    initialCode: {
      en: "// Theme 23: Timers & Math.random\n// Step 1: Roll a 6-sided dice:\n// const dice = Math.floor(Math.random() * 6) + 1;\n// console.log(\"Zar:\", dice);\n\n// Step 2: Set 1-second delayed timer:\n// setTimeout(() => {\n//   console.log(\"BOMBA PORTLADI! 💥\");\n// }, 1000);\n",
      uz: "// 23-Mavzu: Taymerlar va Tasodifiy Sonlar\n// 1-QADAM: 1 dan 6 gacha tasodifiy zar tashlang:\n// const dice = Math.floor(Math.random() * 6) + 1;\n// console.log(\"Zar:\", dice);\n\n// 2-QADAM: 1 soniya (1000ms) kechikuvchi taymer o'rnating:\n// setTimeout(() => {\n//   console.log(\"BOMBA PORTLADI! 💥\");\n// }, 1000);\n"
    },
    targetCode: {
      en: "// Theme 23 Solution\nconst dice = Math.floor(Math.random() * 6) + 1;\nconsole.log(\"Zar:\", dice);\nsetTimeout(() => {\n  console.log(\"BOMBA PORTLADI! 💥\");\n}, 1000);",
      uz: "// 23-Mavzu Yechimi\nconst dice = Math.floor(Math.random() * 6) + 1;\nconsole.log(\"Zar:\", dice);\nsetTimeout(() => {\n  console.log(\"BOMBA PORTLADI! 💥\");\n}, 1000);"
    },
    hints: [
      { uz: "Math.floor(Math.random() * 6) + 1 va setTimeout(() => { ... }, 1000); dan foydalaning.", en: "Use Math.random and setTimeout." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/Math\.random/.test(clean)) return { passed: false, message: "Math.random() dan foydalaning!" };
      if (!/setTimeout/.test(clean)) return { passed: false, message: "setTimeout() taymeridan foydalaning!" };
      if (!/console\.log/.test(clean)) return { passed: false, message: "Natijani console.log() bilan chiqaring!" };
      return { passed: true, message: "Qoyilmaqom! Taymerlar va tasodifiy sonlarni to'liq o'rgandingiz! 🎲" };
    }
  },

  // THEME 24: Capstone Game
  {
    id: "js-24-clicker-game",
    module: "mod-js-dom",
    icon: "🏆",
    title: {
      uz: "24-Mavzu: Yakuniy Super Mini-Loyiha — Jonli Interaktiv Kliker va Klaviatura O'yini",
      en: "Theme 24: Capstone Project — Live Interactive Clicker & Keyboard Game"
    },
    concept: {
      uz: "Barcha o'rganganlarimizni bitta to'liq o'yinda birlashtiramiz: Klass (Game), konstruktor, 'this', DOM tanlash (#count, #click-btn), sichqoncha hodisasi va klaviatura Space tugmasi bilan hisobni oshirish!",
      en: "Combines everything learned into one full game: Class (Game), constructor, 'this', DOM selection (#count, #click-btn), click events, and keyboard Space bar to increase score!"
    },
    humanLanguage: {
      uz: "Siz haqiqiy o'yin dasturchisiz! Tugma bosilganda ham, klaviaturada Probel (Space) bosilganda ham ball oshadi va ekrandagi hisob (#count) yangilanadi!",
      en: "You are a real game developer! Clicking the button or pressing Space increases score and updates the DOM display live on screen!"
    },
    secretSandwich: {
      uz: "class Game { constructor() { this.score = 0; } addPoint() { this.score++; el.textContent = this.score; } }",
      en: "Full object-oriented game state with UI synchronization."
    },
    stepBreakdown: [
      {
        part: "class ClickerGame { constructor() { this.score = 0; ... } }",
        explanation: { uz: "O'yin holati va hisobini boshqaruvchi klass", en: "Class managing game score and state" },
        visualResult: { uz: "O'yin mexanikasi tayyor", en: "Game engine initialized" }
      },
      {
        part: "this.countEl.textContent = this.score;",
        explanation: { uz: "Sahifadagi hisob ko'rsatkichini jonli yangilash", en: "Updates live score element" },
        visualResult: { uz: "Ekranda hisob oshadi", en: "Score number increases on screen" }
      }
    ],
    listOfCommands: [
      { code: 'class Game { }', name: { uz: "O'yin klassi", en: "Game Class" }, description: { uz: "Butun o'yin holatini bitta tizimga jamlaydi", en: "Encapsulates entire game system" } },
      { code: 'game.addPoint()', name: { uz: "Ball qo'shish", en: "Add Point" }, description: { uz: "Ballni 1 ga oshirib ekranni yangilaydi", en: "Increments score and synchronizes UI" } }
    ],
    tagShowcase: [
      { tag: 'Game', name: { uz: "O'yin", en: "Game" }, meaning: { uz: "O'yin klassi", en: "Game class" } },
      { tag: 'click', name: { uz: "Klik", en: "Click" }, meaning: { uz: "Tugma bosilishi", en: "Button click" } },
      { tag: 'Space', name: { uz: "Probel", en: "Space" }, meaning: { uz: "Klaviatura boshqaruvi", en: "Keyboard control" } }
    ],
    mission: {
      uz: "O'yin klassini yarating: class Game { constructor() { this.score = 0; this.el = document.querySelector('#count'); } add() { this.score++; this.el.textContent = this.score; console.log('Ball:', this.score); } } const g = new Game(); document.querySelector('#click-btn').addEventListener('click', () => g.add()); window.addEventListener('keydown', (e) => { if (e.code === 'Space') g.add(); });",
      en: "Build full Game class with score counter, wire to #click-btn and window Space key."
    },
    targetDescription: {
      uz: "O'yin ishga tushib, tugma yoki Probel bosilganda ball oshadi va konsolga chiqadi.",
      en: "Interactive game running: click or Space increments score on screen and in console."
    },
    initialCode: {
      en: "// Theme 24: Capstone Game (Classes + DOM + Events + Keyboard)\n// Step 1: Define Game class:\n// class Game {\n//   constructor() {\n//     this.score = 0;\n//     this.el = document.querySelector(\"#count\");\n//   }\n//   add() {\n//     this.score++;\n//     this.el.textContent = this.score;\n//     console.log(\"Ball:\", this.score);\n//   }\n// }\n\n// Step 2: Instantiate game:\n// const g = new Game();\n\n// Step 3: Wire click event on #click-btn:\n// document.querySelector(\"#click-btn\").addEventListener(\"click\", () => g.add());\n\n// Step 4: Wire keyboard Space bar on window:\n// window.addEventListener(\"keydown\", (e) => {\n//   if (e.code === \"Space\") g.add();\n// });\n",
      uz: "// 24-Mavzu: Yakuniy Loyiha (Klasslar, DOM, Hodisalar va Klaviatura)\n// 1-QADAM: O'yin mexanikasini boshqaruvchi Game klassini yozing:\n// class Game {\n//   constructor() {\n//     this.score = 0;\n//     this.el = document.querySelector(\"#count\");\n//   }\n//   add() {\n//     this.score++;\n//     this.el.textContent = this.score;\n//     console.log(\"Ball:\", this.score);\n//   }\n// }\n\n// 2-QADAM: new Game() orqali o'yinni yarating:\n// const g = new Game();\n\n// 3-QADAM: #click-btn tugmasiga click hodisasini ulang:\n// document.querySelector(\"#click-btn\").addEventListener(\"click\", () => g.add());\n\n// 4-QADAM: window obyektiga Probel (Space) tugmasini ulang:\n// window.addEventListener(\"keydown\", (e) => {\n//   if (e.code === \"Space\") g.add();\n// });\n"
    },
    targetCode: {
      en: "// Theme 24 Solution\nclass Game {\n  constructor() {\n    this.score = 0;\n    this.el = document.querySelector(\"#count\");\n  }\n  add() {\n    this.score++;\n    this.el.textContent = this.score;\n    console.log(\"Ball:\", this.score);\n  }\n}\nconst g = new Game();\ndocument.querySelector(\"#click-btn\").addEventListener(\"click\", () => g.add());\nwindow.addEventListener(\"keydown\", (e) => {\n  if (e.code === \"Space\") g.add();\n});",
      uz: "// 24-Mavzu Yechimi\nclass Game {\n  constructor() {\n    this.score = 0;\n    this.el = document.querySelector(\"#count\");\n  }\n  add() {\n    this.score++;\n    this.el.textContent = this.score;\n    console.log(\"Ball:\", this.score);\n  }\n}\nconst g = new Game();\ndocument.querySelector(\"#click-btn\").addEventListener(\"click\", () => g.add());\nwindow.addEventListener(\"keydown\", (e) => {\n  if (e.code === \"Space\") g.add();\n});"
    },
    hints: [
      { uz: "Game klassini yarating, add metodini #click-btn va window keydown Space hodisalariga ulang.", en: "Build Game class and bind to both click and Space keydown." }
    ],
    validate: (code) => {
      const clean = (code || '').replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
      if (!/class\s+Game/.test(clean)) return { passed: false, message: "class Game { ... } klassini e'lon qiling!" };
      if (!/this\.score\+\+|this\.score\s*\+=\s*1/.test(clean)) return { passed: false, message: "add() metodida hisobni oshiring!" };
      if (!/addEventListener\s*\(\s*["']click["']/.test(clean)) return { passed: false, message: "Tugmaga click hodisasini ulang!" };
      if (!/addEventListener\s*\(\s*["']keydown["']/.test(clean)) return { passed: false, message: "Klaviaturaga keydown hodisasini ulang!" };
      return { passed: true, message: "TABRIKLAYMIZ! Siz to'liq JavaScript o'yin dasturchisi bo'ldingiz! 🏆⭐⭐⭐" };
    }
  }
];

export function getLessonById(id) {
  return LESSONS.find(l => l.id === id) || null;
}

export function getLessonsByModule(modId) {
  return LESSONS.filter(l => l.module === modId);
}
