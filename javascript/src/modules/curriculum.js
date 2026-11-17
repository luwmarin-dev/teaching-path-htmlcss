/**
 * JavaScript for Kids (CodeCraft JS) Curriculum
 * 24 Foundational, Intermediate, and Practical Topics
 * Bilingual (Uzbek & English), 100% Offline, Hands-On
 * Elevated with Pedagogy, Bilingual Code Comments, Target Descriptions,
 * List of Commands, and Simple Big SPA Web Page Practices.
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

export function getLessonById(id) {
  return LESSONS.find(l => l.id === id) || null;
}

export function getLessonsByModule(modId) {
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
