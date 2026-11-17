/**
 * CodeCraft Kids - Standalone Offline Bundle
 * Runs 100% offline via file:// protocol directly in any browser with ZERO Node.js or web server.
 */
(function() {
  'use strict';

  // --- Curriculum Module ---
  /**
 * CodeCraft Kids Curriculum Data
 * Comprehensive HTML & CSS sequence:
 * Theme 1: HTML Tags (Entry, Opening vs Closing, simple tags)
 * Theme 2: Document Structure (DocType, Head, Body, HTML)
 * Theme 3: Tables (table, tr, th, td)
 * Theme 4: Pictures (img, src, alt, width)
 * Theme 5: Basic Divs & Borders (div, border, entry to styling)
 * Theme 6: Classes for Divs (class="", .name, styling power)
 * Theme 7: Margin and Padding (cushion vs outside space)
 * Theme 8: Basic Transform (rotate, scale, translate)
 * Theme 9: Flexbox (display: flex, justify-content, gap)
 * Theme 10: Buttons & Clicks (button, onclick)
 * Theme 11: Links & Portals (a, href, target="_blank")
 * Theme 12: Lists (ul, ol, li)
 * Theme 13: Colors & Gradients (color, background-color, hex)
 * Theme 14: Fonts & Glows (font-size, text-shadow)
 * Theme 15: Rounded Corners & Circles (border-radius: 50%)
 * Theme 16: Keyframe Animations (@keyframes, infinite bounce)
 */

const MODULES = [
  {
    id: 'html-core',
    title: {
      en: '🦴 Pure HTML Core & Media (Themes 1 - 5, 10 - 12, 17 - 20)',
      uz: '🦴 Asosiy HTML & Media (1 - 5, 10 - 12, 17 - 20 Mavzular)'
    },
    tagline: {
      en: 'Tags, document structure, tables, images, buttons, links, lists, inputs, and audio/video',
      uz: "Teglar, hujjat tuzilishi, jadvallar, rasmlar, tugmalar, havolalar, ro'yxatlar, inputlar va audio/video"
    }
  },
  {
    id: 'css-core',
    title: {
      en: '🎨 CSS Styling, Box Model & Overflow (Themes 6 - 8, 13 - 15, 25)',
      uz: '🎨 CSS Bezaklari, Box Model va Overflow (6 - 8, 13 - 15, 25 Mavzular)'
    },
    tagline: {
      en: 'Classes, margin vs padding, transforms, colors, fonts, shapes, and overflow clipping',
      uz: "Klasslar, margin va padding, transform, ranglar, shriftlar, shakllar va overflow nazorati"
    }
  },
  {
    id: 'full-powers',
    title: {
      en: '⚡ Advanced Layout & Positioning (Themes 9, 21 - 22)',
      uz: '⚡ Murakkab Joylashuv & Tartib (9, 21 - 22 Mavzular)'
    },
    tagline: {
      en: 'Flexbox alignment, CSS Grid 2D worlds, and Deep CSS Positions (relative, absolute, fixed, sticky)',
      uz: "Flexbox tartibi, CSS Grid 2D dunyosi va Chuqur CSS Position (relative, absolute, fixed, sticky)"
    }
  },
  {
    id: 'modern-mastery',
    title: {
      en: '🚀 Visual Effects & Responsive Design (Themes 16, 23 - 24, 26 - 27)',
      uz: '🚀 Maxsus Vizual Effektlar & Responsive (16, 23 - 24, 26 - 27 Mavzular)'
    },
    tagline: {
      en: 'Keyframe animations, smooth hover physics, gradients, filters, and media queries',
      uz: "Animatsiyalar, silliq o'tishlar, gradientlar, filtrlar va media queries"
    }
  },
  {
    id: 'third-party',
    title: {
      en: '🌐 Third-Party Web Technologies (Themes 28 - 29)',
      uz: '🌐 Tashqi Kutubxonalar & Resurslar (28 - 29 Mavzular)'
    },
    tagline: {
      en: 'Linked Web Fonts, Scalable SVG Icon Systems, and Animate.css / AOS Scroll Animation triggers',
      uz: "Web Shriftlar (Google Fonts), SVG Ikonkalar va Animate.css / AOS animatsiyalari"
    }
  },
  {
    id: 'bootstrap',
    title: {
      en: '🅱️ Bootstrap 5 Framework (Themes 30 - 32)',
      uz: '🅱️ Bootstrap 5 Freymvorki (30 - 32 Mavzular)'
    },
    tagline: {
      en: 'Bootstrap responsive 12-column grid, modern UI cards/badges/alerts, and responsive navbar',
      uz: "Bootstrap 12 ustunli moslashuvchan setka, zamonaviy UI kartalar/nishonlar va responsiv navbar"
    }
  }
];

const LESSONS = [
  // ==========================================
  // THEME 1: HTML Tags
  // ==========================================
  {
    id: 'theme-1-tags',
    module: 'html-core',
    title: {
      en: 'Theme 1: HTML Tags & The Sandwich Secret',
      uz: '1-Mavzu: HTML Teglar va Sehrli Sendvich'
    },
    icon: '🏷️',
    tag: '<tag> ... </tag>',
    humanIntro: {
      whatIsIt: {
        en: 'HTML stands for "HyperText Markup Language", but in human language, it is simply the **secret language of web pages**! Web pages are built using little instructions called **Tags**.',
        uz: 'HTML oddiy inson tilida — **veb-sahifalarning maxfiy tilidir**! Veb-sahifalar **Teglar** deb ataluvchi kichik ko\'rsatmalar yordamida quriladi.'
      },
      whatIsATag: {
        en: 'A **Tag** is a special magic sticker that tells the computer how to treat words. Tags almost always come in pairs like a sandwich: an **Opening Tag** at the start (<tag>), and a **Closing Tag** at the end with a secret slash (</tag>)!',
        uz: '**Teg** — bu so\'zlarni qanday ko\'rsatishni kompyuterga aytadigan sehrli stikerdir. Teglar xuddi sendvich kabi deyarli doim juft bo\'lib keladi: boshida **Ochuvchi teg** (<tag>) va oxirida sirli slesh belgili **Yopuvchi teg** (</tag>)!'
      }
    },
    summary: {
      en: 'Discover what HTML is in human language, how opening and closing tags work, and explore simple everyday tags.',
      uz: 'HTML nima ekanligini oddiy tilda bilib oling, ochuvchi va yopuvchi teglar qanday ishlashini o\'rganing.'
    },
    story: {
      en: 'Think of tags like sandwich buns. The opening bun <tag> says "Start the effect!", your words go in the middle, and the closing bun </tag> with a slash / says "Stop the effect!"',
      uz: 'Teglarni sendvich nonlariga o\'xshating. Boshidagi <tag> noni "Sehrni boshla!" deydi, so\'zlar o\'rtada turadi, oxiridagi sleshli </tag> noni esa "Sehrni to\'xtat!" deydi.'
    },
    initialCode: `<p>
  My pet robot is <b>super strong</b>, <i>lightning fast</i>, and <u>waterproof</u>!
</p>`,
    targetCode: `<p>
  My pet robot is <b>super strong</b>, <i>lightning fast</i>, <u>waterproof</u>, and loves <mark>golden pizza</mark>!
</p>`,
    targetDescription: {
      en: 'A sentence where:\n• "super strong" is bolded with <b>\n• "lightning fast" is slanted with <i>\n• "waterproof" is underlined with <u>\n• "golden pizza" is highlighted with <mark>',
      uz: '"super strong" qalin <b>, "lightning fast" yotiq <i>, "waterproof" tagiga chizilgan <u> va "golden pizza" sariq rangda <mark> bilan yoritilgan jumla.'
    },
    anatomy: [
      {
        part: '<b>',
        role: { en: 'Opening Tag', uz: 'Ochuvchi teg' },
        explanation: {
          en: 'Notice the angle brackets < >. Tells the browser: "Start making words BOLD right now!"',
          uz: 'Burchakli qavslarga e\'tibor bering. Brauzerga: "Hozirdan boshlab so\'zlarni QALIN qil!" deydi.'
        },
        effect: {
          en: 'Starts bold text',
          uz: 'Qalin matnni boshlaydi'
        },
        visualPreview: '<div class="mini-canvas">Normal ➔ <strong style="color:#ffffff; font-weight:800;">Bold Text</strong></div>'
      },
      {
        part: 'super strong',
        role: { en: 'Content', uz: 'Matn qismi' },
        explanation: {
          en: 'The actual words sitting inside the tag sandwich.',
          uz: 'Teg sendvichining o\'rtasida joylashgan haqiqiy so\'zlar.'
        },
        effect: {
          en: 'Appears as the text',
          uz: 'Matn sifatida ko\'rinadi'
        },
        visualPreview: '<div class="mini-canvas">📝 "super strong"</div>'
      },
      {
        part: '</b>',
        role: { en: 'Closing Tag', uz: 'Yopuvchi teg' },
        explanation: {
          en: 'The secret slash / means STOP! Tells the browser: "Stop making text bold; go back to normal."',
          uz: 'Maxfiy slesh / belgisi TO\'XTAT degani! Brauzerga: "Qalinlashtirishni to\'xtat, odatiy holatga qayt" deydi.'
        },
        effect: {
          en: 'Stops bolding from spreading',
          uz: 'Qalinlik tarqalishini to\'xtatadi'
        },
        visualPreview: '<div class="mini-canvas">🛑 / Stop Command</div>'
      },
      {
        part: '<i> ... </i>',
        role: { en: 'Italic Tag', uz: 'Kursiv teg' },
        explanation: {
          en: 'Slants words to make them stylish or emphasize speed.',
          uz: 'So\'zlarni chiroyli yoki tezkor ko\'rsatish uchun yotiq qiladi.'
        },
        effect: {
          en: 'Slanted italic text',
          uz: 'Yotiq matn'
        },
        visualPreview: '<div class="mini-canvas">Normal ➔ <em style="color:#38bdf8;">Slanted Italic</em></div>'
      },
      {
        part: '<u> ... </u>',
        role: { en: 'Underline Tag', uz: 'Tagiga chizish tegi' },
        explanation: {
          en: 'Draws a neat line directly underneath the words.',
          uz: 'So\'zlarning tagiga toza chiziq tortadi.'
        },
        effect: {
          en: 'Underlined text',
          uz: 'Tagiga chizilgan matn'
        },
        visualPreview: '<div class="mini-canvas">Normal ➔ <u style="text-decoration: underline wavy #2dd4bf;">Underlined Text</u></div>'
      },
      {
        part: '<mark> ... </mark>',
        role: { en: 'Highlighter Tag', uz: 'Marker tegi' },
        explanation: {
          en: 'Like swiping a neon yellow highlighter marker across your words.',
          uz: 'So\'zlar ustidan yorqin sariq marker yurgazganga o\'xshaydi.'
        },
        effect: {
          en: 'Yellow highlight background',
          uz: 'Sariq fonli yorqin matn'
        },
        visualPreview: '<div class="mini-canvas">Normal ➔ <mark style="background:#fbbf24; color:#0f1117; font-weight:bold; padding:2px 6px; border-radius:4px;">Highlighted</mark></div>'
      }
    ],
    listOfTags: [
      { code: '<b> ... </b>', name: 'Bold Tag', description: 'Makes words thick, heavy, and bold', exampleHtml: '<b>Super Strong</b>' },
      { code: '<i> ... </i>', name: 'Italic Tag', description: 'Slants words to make them stylish or emphasize them', exampleHtml: '<i>Lightning Fast</i>' },
      { code: '<u> ... </u>', name: 'Underline Tag', description: 'Draws a clean line directly underneath words', exampleHtml: '<u>Waterproof</u>' },
      { code: '<mark> ... </mark>', name: 'Highlighter Tag', description: 'Swipes a bright neon-yellow highlighter marker behind text', exampleHtml: '<mark>Golden Pizza</mark>' },
      { code: '<s> ... </s>', name: 'Strikethrough Tag', description: 'Crosses words out with a horizontal strike line', exampleHtml: '<s>Old Secret</s>' },
      { code: '<small> ... </small>', name: 'Small Tag', description: 'Shrinks words down like a tiny whisper', exampleHtml: '<small>tiny secret</small>' },
      { code: '<strong> ... </strong>', name: 'Strong Tag', description: 'Shows strong importance (displays in bold)', exampleHtml: '<strong>Warning!</strong>' },
      { code: '<em> ... </em>', name: 'Emphasis Tag', description: 'Emphasizes words in reading voice (displays slanted)', exampleHtml: '<em>Listen carefully</em>' },
      { code: '<p> ... </p>', name: 'Paragraph Tag', description: 'Groups normal sentences with comfortable reading space', exampleHtml: '<p>A simple story sentence.</p>' }
    ],
    tagShowcase: [
      { tag: '<b>word</b>', meaning: 'Bold (heavy and strong)' },
      { tag: '<i>word</i>', meaning: 'Italic (slanted and fast)' },
      { tag: '<u>word</u>', meaning: 'Underline (line drawn underneath)' },
      { tag: '<mark>word</mark>', meaning: 'Highlighter (bright yellow marker)' },
      { tag: '<s>word</s>', meaning: 'Strikethrough (line crossing through)' }
    ],
    quickTags: ['<b>', '</b>', '<i>', '</i>', '<u>', '</u>', '<mark>', '</mark>', '<s>', '</s>'],
    challenge: {
      mission: {
        en: 'Add <mark>golden pizza</mark> to the sentence so "golden pizza" is highlighted in bright yellow!',
        uz: 'Jumlaga <mark>golden pizza</mark> tegi qo\'shing, shunda "golden pizza" yorqin sariq rangda yorishadi!'
      },
      hint: { en: 'Wrap the words "golden pizza" between an opening <mark> tag and closing </mark> tag!', uz: '"golden pizza" so\'zlarini ochuvchi <mark> va yopuvchi </mark> teglari orasiga oling!' },
      rules: [
        {
          type: 'hasTag',
          tag: 'mark',
          message: 'Add the <mark> highlighter tag!'
        },
        {
          type: 'tagContainsText',
          tag: 'mark',
          pattern: /pizza/i,
          message: 'The <mark> tag should highlight "golden pizza"!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Tags are like sandwich buns. Opening `<tag>` is the top bun, your words are the cheese/patty, closing `</tag>` is the bottom bun. If you forget the bottom bun, the whole page gets messy!',
      discussionQuestions: [
        'What is the only difference between an opening tag and a closing tag? (The forward slash /!)',
        'What happens if you forget to close a `<b>` tag? (Everything on the whole page turns bold!)'
      ],
      commonMistakes: [
        'Using backslash \\ instead of forward slash / in closing tags',
        'Forgetting the closing tag entirely'
      ],
      funActivity: 'Have the child hold up their left hand for <opening> and right hand with a crossed finger / for </closing>!'
    }
  },

  // ==========================================
  // THEME 2: Document Structure
  // ==========================================
  {
    id: 'theme-2-structure',
    module: 'html-core',
    title: {
      en: 'Theme 2: Document Structure (DocType, Head, Body)',
      uz: '2-Mavzu: Hujjat Tuzilishi (DocType, Head, Body)'
    },
    icon: '🏛️',
    tag: '<!DOCTYPE>, <html>, <head>, <body>',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, every full web page is like a **Human Body or Robot Blueprint**! It has a declaration of what it is, a head for its brain, and a body for everything you can see.',
        uz: 'Oddiy tilda aytganda, har bir to\'liq veb-sahifa **Odam tanasi yoki Robot chizmasiga** o\'xshaydi! Unda pasport, bosh (miya) va hamma ko\'radigan tana qismlari mavjud.'
      },
      whatIsATag: {
        en: '1. `<!DOCTYPE html>` tells the browser: "I am a modern HTML5 document!"\n2. `<html>` is the outer container wrapping the whole document.\n3. `<head>` is the brain: stores invisible info like the browser tab `<title>`.\n4. `<body>` is the physical body: holds all visible headings, paragraphs, buttons, and pictures!',
        uz: '1. `<!DOCTYPE html>` — brauzerga: "Men zamonaviy HTML5 hujjatiman!" deydi.\n2. `<html>` — butun sahifani o\'rab turuvchi bosh qobiq.\n3. `<head>` — miya qismi: brauzer yorlig\'idagi sarlavha (<title>) va sozlamalarni saqlaydi.\n4. `<body>` — ko\'rinadigan tana: barcha sarlavhalar, matnlar, tugmalar va rasmlar shu yerda yashaydi!'
      }
    },
    summary: {
      en: 'Learn the master skeleton of every real web page: DocType, <html>, <head>, and <body>.',
      uz: 'Har qanday haqiqiy veb-sahifaning bosh skeletini o\'rganing: DocType, <html>, <head> va <body>.'
    },
    story: {
      en: 'Think of <!DOCTYPE html> as your passport. <html> is your house. <head> is the address plaque on the front door (for title and settings). <body> is the living room where your furniture and guests actually sit!',
      uz: '<!DOCTYPE html> — sizning pasportingiz. <html> — uyingiz. <head> — eshikdagi manzil lavhasi. <body> — mehmonlar o\'tiradigan xona!'
    },
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>My Secret Base</title>
  </head>
  <body>
    <h1>🚀 Welcome to Space Base!</h1>
    <p>All astronauts report to the cockpit.</p>
  </body>
</html>`,
    targetCode: `<!DOCTYPE html>
<html>
  <head>
    <title>My Secret Base</title>
  </head>
  <body>
    <h1>🚀 Welcome to Space Base!</h1>
    <p>All astronauts report to the cockpit.</p>
    <p>Mission Status: <b>Ready for Launch</b></p>
  </body>
</html>`,
    targetDescription: 'A complete, well-formed HTML document:\n• Browser tab title set to "My Secret Base"\n• <h1> title inside <body>: "🚀 Welcome to Space Base!"\n• Two paragraphs, with "Ready for Launch" bolded inside the body.',
    anatomy: [
      {
        part: '<!DOCTYPE html>',
        role: { en: 'DocType Declaration', uz: 'DocType e\'loni' },
        explanation: {
          en: 'Tells the browser: "Attention! This document is written in modern HTML5."',
          uz: 'Brauzerga: "Diqqat! Ushbu hujjat zamonaviy HTML5 da yozilgan" deydi.'
        },
        effect: {
          en: 'Ensures modern standards mode',
          uz: 'Zamonaviy standartlar rejimini faollashtiradi'
        },
        visualPreview: '<div class="mini-canvas">📄 Modern HTML5 Passport</div>'
      },
      {
        part: '<html> ... </html>',
        role: { en: 'Root Container', uz: 'Asosiy qobiq' },
        explanation: {
          en: 'The master container. Every single tag on the page lives inside this shell.',
          uz: 'Bosh qobiq. Sahifadagi barcha teglar ushbu qobiq ichida yashaydi.'
        },
        effect: {
          en: 'Wraps the entire webpage',
          uz: 'Butun sahifani o\'rab turadi'
        },
        visualPreview: '<div class="mini-canvas">🌐 Master Root Shell</div>'
      },
      {
        part: '<head> ... </head>',
        role: { en: 'Brain / Metadata', uz: 'Miya / Sozlamalar' },
        explanation: {
          en: 'Invisible head of the page. Holds the page title, fonts, and settings.',
          uz: 'Sahifaning ko\'rinmas miya qismi: sarlavha va sozlamalarni saqlaydi.'
        },
        effect: {
          en: 'Sets browser tab title & settings',
          uz: 'Brauzer yorlig\'i va sozlamalarini belgilaydi'
        },
        visualPreview: '<div class="mini-canvas">🧠 Invisible Brain (Tab Title & Settings)</div>'
      },
      {
        part: '<title> ... </title>',
        role: { en: 'Tab Title', uz: 'Yorliq sarlavhasi' },
        explanation: {
          en: 'The name that appears on the browser tab at the very top of your screen.',
          uz: 'Brauzerning eng yuqori qismidagi yorliqda ko\'rinadigan nom.'
        },
        effect: {
          en: 'Shows title in browser tab',
          uz: 'Yorliqda sarlavhani ko\'rsatadi'
        },
        visualPreview: '<div class="mini-canvas">🏷️ [ Tab: My Secret Base ]</div>'
      },
      {
        part: '<body> ... </body>',
        role: { en: 'Visible Body', uz: 'Ko\'rinadigan tana' },
        explanation: {
          en: 'The visible page! Whatever you put between <body> and </body> appears on the screen.',
          uz: 'Ko\'rinadigan sahifa! <body> ichiga nima qo\'ysangiz, ekranda paydo bo\'ladi.'
        },
        effect: {
          en: 'Renders all visible content on screen',
          uz: 'Ekranda barcha ko\'rinadigan narsalarni chizadi'
        },
        visualPreview: '<div class="mini-canvas">🖥️ Visible Canvas on Screen</div>'
      }
    ],
    listOfTags: [
      { code: '<!DOCTYPE html>', name: 'DocType', description: 'Tells browser this is modern HTML5 (goes on line 1)', exampleHtml: '<!DOCTYPE html>' },
      { code: '<html> ... </html>', name: 'HTML Shell', description: 'The outer root container wrapping the entire document', exampleHtml: '<html>...</html>' },
      { code: '<head> ... </head>', name: 'Head (Brain)', description: 'Stores invisible page information, tab title, and meta tags', exampleHtml: '<head><title>Tab</title></head>' },
      { code: '<title> ... </title>', name: 'Page Title', description: 'The text that displays on the browser\'s top tab', exampleHtml: '<title>My Cool Page</title>' },
      { code: '<body> ... </body>', name: 'Body', description: 'The container for EVERYTHING visible to the user on the screen', exampleHtml: '<body><h1>Visible</h1></body>' }
    ],
    tagShowcase: [
      { tag: '<!DOCTYPE html>', meaning: 'Passport: Modern HTML5' },
      { tag: '<html>', meaning: 'The big outer shell' },
      { tag: '<head>', meaning: 'Brain: Tab title & settings' },
      { tag: '<body>', meaning: 'Body: Everything you see' }
    ],
    quickTags: ['<!DOCTYPE html>', '<html>', '</html>', '<head>', '</head>', '<title>', '</title>', '<body>', '</body>'],
    challenge: {
      mission: {
        en: 'Add a new paragraph inside the <body> that says: "Mission Status: <b>Ready for Launch</b>"!',
        uz: '<body> ichiga "Mission Status: <b>Ready for Launch</b>" degan yangi paragraf qo\'shing!'
      },
      hint: { en: 'Inside <body>, create a new <p> tag and wrap "Ready for Launch" in <b> and </b>.', uz: '<body> ichida yangi <p> oching va "Ready for Launch" ni <b> va </b> teglari orasiga oling.' },
      rules: [
        {
          type: 'hasTag',
          tag: 'body',
          message: 'Keep the <body> container!'
        },
        {
          type: 'custom',
          check: (code) => /Ready for Launch/i.test(code),
          message: 'Add "Mission Status: Ready for Launch" inside the body!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Human anatomy: `<!DOCTYPE>` is your birth certificate. `<html>` is your skin. `<head>` is your brain (thoughts inside). `<body>` is your arms and legs (what people see).',
      discussionQuestions: [
        'Why doesn\'t text inside the <head> show up on the white page?',
        'What would happen if you wrote words outside the `<body>` tags?'
      ],
      commonMistakes: [
        'Putting visible words inside `<head>` instead of `<body>`',
        'Forgetting the closing `</body>` or `</html>` tags'
      ],
      funActivity: 'Touch your head for <head> and touch your chest for <body>!'
    }
  },

  // ==========================================
  // THEME 3: Tables
  // ==========================================
  {
    id: 'theme-3-tables',
    module: 'html-core',
    title: {
      en: 'Theme 3: Tables & Grids (Esports Championship Arena SPA)',
      uz: '3-Mavzu: Jadvallar va Kataklar (Kibersport Chempionati SPA Sahifasi)'
    },
    icon: '📊',
    tag: '<table>, <tr>, <th>, <td>',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, a **Table** is a high-tech data grid! Inside real Single Page Applications (SPAs), tables power esports leaderboards, flight schedules, and financial analytics.',
        uz: 'Oddiy tilda aytganda, **Jadval** — bu yuqori texnologiyali ma\'lumotlar panjarasi! Haqiqiy bitta sahifali ilovalarda (SPA) jadvallar kibersport reytinglari, parvoz jadvallari va moliyaviy hisobotlarni tuzadi.'
      },
      whatIsATag: {
        en: 'HTML tables structure complex web applications floor-by-floor:\n1. `<table>` is the outer grid container.\n2. `<tr>` (Table Row) is each horizontal row.\n3. `<th>` (Table Header) is the bold roof sign labeling each column.\n4. `<td>` (Table Data) is each cell holding facts, player names, and medals!',
        uz: 'HTML jadvallari veb-ilovalarni qavatma-qavat quradi:\n1. `<table>` — jadvalning tashqi ramkasi.\n2. `<tr>` (Table Row) — har bir gorizontal qator.\n3. `<th>` (Table Header) — ustun nomini bildiruvchi qalin sarlavha.\n4. `<td>` (Table Data) — ma\'lumot, o\'yinchi nomi va medallar saqlanuvchi xonalar!'
      }
    },
    summary: {
      en: 'Construct a full Esports Championship SPA with live metrics and a pro leaderboard using <table>, <tr>, <th>, and <td>.',
      uz: '<table>, <tr>, <th> va <td> yordamida jonli ko\'rsatkichlarga ega haqiqiy Kibersport SPA reytingini quring.'
    },
    story: {
      en: 'The Grand Cyber Championship needs its #1 Champion crowned in the tournament SPA with 🥇 1st place and a golden CHAMPION badge!',
      uz: 'Katta Kiber Chempionat SPA sahifasida 1-o\'rin va oltin CHAMPION nishoniga ega bosh chempionni e\'lon qilish kerak!'
    },
    initialCode: {
      en: "<style>\n  * { box-sizing: border-box; }\n  .spa-esports {\n    background: #0b0f19;\n    border: 1px solid #1e293b;\n    border-radius: 16px;\n    padding: 20px;\n    color: #e2e8f0;\n    font-family: system-ui, sans-serif;\n  }\n  .spa-banner {\n    background: linear-gradient(135deg, #1e1b4b, #312e81);\n    border: 1px solid #4338ca;\n    border-radius: 12px;\n    padding: 16px 20px;\n    margin-bottom: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .spa-banner h2 { margin: 0; color: #a5b4fc; font-size: 18px; }\n  .spa-banner span { background: #38bdf8; color: #0b0f19; font-weight: bold; font-size: 11px; padding: 4px 10px; border-radius: 6px; }\n\n  .stats-row {\n    display: flex;\n    gap: 12px;\n    margin-bottom: 20px;\n  }\n  .stat-card {\n    flex: 1;\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 10px;\n    padding: 12px;\n    text-align: center;\n  }\n  .stat-card b { display: block; font-size: 16px; color: #38bdf8; }\n  .stat-card span { font-size: 11px; color: #94a3b8; }\n\n  /* Leaderboard Grid Table */\n  table {\n    width: 100%;\n    border-collapse: collapse;\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    overflow: hidden;\n  }\n  th {\n    background: #1e2438;\n    color: #38bdf8;\n    padding: 14px;\n    text-align: left;\n    font-size: 12px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n  }\n  td {\n    padding: 12px 14px;\n    border-top: 1px solid #1f2937;\n    font-size: 13px;\n  }\n  .champion {\n    background: rgba(234, 179, 8, 0.18);\n    font-weight: bold;\n  }\n  .badge {\n    display: inline-block;\n    padding: 3px 8px;\n    border-radius: 6px;\n    font-size: 11px;\n    font-weight: bold;\n  }\n  .gold { background: #eab308; color: #000; }\n  .silver { background: #94a3b8; color: #000; }\n  .bronze { background: #f97316; color: #fff; }\n</style>\n\n<div class=\"spa-esports\">\n  <!-- Championship Header -->\n  <div class=\"spa-banner\">\n    <div>\n      <h2>🏆 Global Cyber Championship 2099</h2>\n      <p style=\"margin: 4px 0 0 0; font-size: 12px; color: #cbd5e1;\">Live Arena Standings • Prize Pool: $100,000</p>\n    </div>\n    <span>🔴 LIVE ARENA</span>\n  </div>\n\n  <!-- Metric Ribbon -->\n  <div class=\"stats-row\">\n    <div class=\"stat-card\"><b>32</b><span>Pro Teams</span></div>\n    <div class=\"stat-card\"><b>128</b><span>Matches Played</span></div>\n    <div class=\"stat-card\"><b>1.4M</b><span>Global Viewers</span></div>\n  </div>\n\n  <!-- Standings Table -->\n  <table>\n    <tr>\n      <th>Rank</th>\n      <th>Player</th>\n      <th>Badge</th>\n      <th>Score</th>\n    </tr>\n\n    <!-- Step 1: Put the 1st Place Champion row here using <tr class=\"champion\"> -->\n    <!-- Step 2: Add 4 <td> cells: 🥇 1st | ApexDragon | <span class=\"badge gold\">CHAMPION</span> | 15,400 -->\n\n    <tr>\n      <td>🥈 2nd</td>\n      <td>PixelCat</td>\n      <td><span class=\"badge silver\">MASTER</span></td>\n      <td>12,850</td>\n    </tr>\n    <tr>\n      <td>🥉 3rd</td>\n      <td>CyberBot</td>\n      <td><span class=\"badge bronze\">PRO</span></td>\n      <td>10,200</td>\n    </tr>\n  </table>\n</div>",
      uz: "<style>\n  * { box-sizing: border-box; }\n  .spa-esports {\n    background: #0b0f19;\n    border: 1px solid #1e293b;\n    border-radius: 16px;\n    padding: 20px;\n    color: #e2e8f0;\n    font-family: system-ui, sans-serif;\n  }\n  .spa-banner {\n    background: linear-gradient(135deg, #1e1b4b, #312e81);\n    border: 1px solid #4338ca;\n    border-radius: 12px;\n    padding: 16px 20px;\n    margin-bottom: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .spa-banner h2 { margin: 0; color: #a5b4fc; font-size: 18px; }\n  .spa-banner span { background: #38bdf8; color: #0b0f19; font-weight: bold; font-size: 11px; padding: 4px 10px; border-radius: 6px; }\n\n  .stats-row {\n    display: flex;\n    gap: 12px;\n    margin-bottom: 20px;\n  }\n  .stat-card {\n    flex: 1;\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 10px;\n    padding: 12px;\n    text-align: center;\n  }\n  .stat-card b { display: block; font-size: 16px; color: #38bdf8; }\n  .stat-card span { font-size: 11px; color: #94a3b8; }\n\n  /* Leaderboard Grid Table */\n  table {\n    width: 100%;\n    border-collapse: collapse;\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    overflow: hidden;\n  }\n  th {\n    background: #1e2438;\n    color: #38bdf8;\n    padding: 14px;\n    text-align: left;\n    font-size: 12px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n  }\n  td {\n    padding: 12px 14px;\n    border-top: 1px solid #1f2937;\n    font-size: 13px;\n  }\n  .champion {\n    background: rgba(234, 179, 8, 0.18);\n    font-weight: bold;\n  }\n  .badge {\n    display: inline-block;\n    padding: 3px 8px;\n    border-radius: 6px;\n    font-size: 11px;\n    font-weight: bold;\n  }\n  .gold { background: #eab308; color: #000; }\n  .silver { background: #94a3b8; color: #000; }\n  .bronze { background: #f97316; color: #fff; }\n</style>\n\n<div class=\"spa-esports\">\n  <!-- Championship Header -->\n  <div class=\"spa-banner\">\n    <div>\n      <h2>🏆 Global Cyber Championship 2099</h2>\n      <p style=\"margin: 4px 0 0 0; font-size: 12px; color: #cbd5e1;\">Live Arena Standings • Prize Pool: $100,000</p>\n    </div>\n    <span>🔴 LIVE ARENA</span>\n  </div>\n\n  <!-- Metric Ribbon -->\n  <div class=\"stats-row\">\n    <div class=\"stat-card\"><b>32</b><span>Pro Teams</span></div>\n    <div class=\"stat-card\"><b>128</b><span>Matches Played</span></div>\n    <div class=\"stat-card\"><b>1.4M</b><span>Global Viewers</span></div>\n  </div>\n\n  <!-- Standings Table -->\n  <table>\n    <tr>\n      <th>Rank</th>\n      <th>Player</th>\n      <th>Badge</th>\n      <th>Score</th>\n    </tr>\n\n    <!-- 1-Qadam: <tr class=\"champion\"> yordamida 1-o'rin Chempion qatorini shu yerga qo'ying -->\n    <!-- 2-Qadam: 4 ta <td> katak qo'shing: 🥇 1st | ApexDragon | <span class=\"badge gold\">CHAMPION</span> | 15,400 -->\n\n    <tr>\n      <td>🥈 2nd</td>\n      <td>PixelCat</td>\n      <td><span class=\"badge silver\">MASTER</span></td>\n      <td>12,850</td>\n    </tr>\n    <tr>\n      <td>🥉 3rd</td>\n      <td>CyberBot</td>\n      <td><span class=\"badge bronze\">PRO</span></td>\n      <td>10,200</td>\n    </tr>\n  </table>\n</div>"
    },
    targetCode: {
      en: "<style>\n  * { box-sizing: border-box; }\n  .spa-esports {\n    background: #0b0f19;\n    border: 1px solid #1e293b;\n    border-radius: 16px;\n    padding: 20px;\n    color: #e2e8f0;\n    font-family: system-ui, sans-serif;\n  }\n  .spa-banner {\n    background: linear-gradient(135deg, #1e1b4b, #312e81);\n    border: 1px solid #4338ca;\n    border-radius: 12px;\n    padding: 16px 20px;\n    margin-bottom: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .spa-banner h2 { margin: 0; color: #a5b4fc; font-size: 18px; }\n  .spa-banner span { background: #38bdf8; color: #0b0f19; font-weight: bold; font-size: 11px; padding: 4px 10px; border-radius: 6px; }\n\n  .stats-row {\n    display: flex;\n    gap: 12px;\n    margin-bottom: 20px;\n  }\n  .stat-card {\n    flex: 1;\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 10px;\n    padding: 12px;\n    text-align: center;\n  }\n  .stat-card b { display: block; font-size: 16px; color: #38bdf8; }\n  .stat-card span { font-size: 11px; color: #94a3b8; }\n\n  /* Leaderboard Grid Table */\n  table {\n    width: 100%;\n    border-collapse: collapse;\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    overflow: hidden;\n  }\n  th {\n    background: #1e2438;\n    color: #38bdf8;\n    padding: 14px;\n    text-align: left;\n    font-size: 12px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n  }\n  td {\n    padding: 12px 14px;\n    border-top: 1px solid #1f2937;\n    font-size: 13px;\n  }\n  .champion {\n    background: rgba(234, 179, 8, 0.18);\n    font-weight: bold;\n  }\n  .badge {\n    display: inline-block;\n    padding: 3px 8px;\n    border-radius: 6px;\n    font-size: 11px;\n    font-weight: bold;\n  }\n  .gold { background: #eab308; color: #000; }\n  .silver { background: #94a3b8; color: #000; }\n  .bronze { background: #f97316; color: #fff; }\n</style>\n\n<div class=\"spa-esports\">\n  <!-- Championship Header -->\n  <div class=\"spa-banner\">\n    <div>\n      <h2>🏆 Global Cyber Championship 2099</h2>\n      <p style=\"margin: 4px 0 0 0; font-size: 12px; color: #cbd5e1;\">Live Arena Standings • Prize Pool: $100,000</p>\n    </div>\n    <span>🔴 LIVE ARENA</span>\n  </div>\n\n  <!-- Metric Ribbon -->\n  <div class=\"stats-row\">\n    <div class=\"stat-card\"><b>32</b><span>Pro Teams</span></div>\n    <div class=\"stat-card\"><b>128</b><span>Matches Played</span></div>\n    <div class=\"stat-card\"><b>1.4M</b><span>Global Viewers</span></div>\n  </div>\n\n  <!-- Standings Table -->\n  <table>\n    <tr>\n      <th>Rank</th>\n      <th>Player</th>\n      <th>Badge</th>\n      <th>Score</th>\n    </tr>\n\n    <tr class=\"champion\">\n      <td>🥇 1st</td>\n      <td>ApexDragon</td>\n      <td><span class=\"badge gold\">CHAMPION</span></td>\n      <td>15,400</td>\n    </tr>\n\n    <tr>\n      <td>🥈 2nd</td>\n      <td>PixelCat</td>\n      <td><span class=\"badge silver\">MASTER</span></td>\n      <td>12,850</td>\n    </tr>\n    <tr>\n      <td>🥉 3rd</td>\n      <td>CyberBot</td>\n      <td><span class=\"badge bronze\">PRO</span></td>\n      <td>10,200</td>\n    </tr>\n  </table>\n</div>",
      uz: "<style>\n  * { box-sizing: border-box; }\n  .spa-esports {\n    background: #0b0f19;\n    border: 1px solid #1e293b;\n    border-radius: 16px;\n    padding: 20px;\n    color: #e2e8f0;\n    font-family: system-ui, sans-serif;\n  }\n  .spa-banner {\n    background: linear-gradient(135deg, #1e1b4b, #312e81);\n    border: 1px solid #4338ca;\n    border-radius: 12px;\n    padding: 16px 20px;\n    margin-bottom: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .spa-banner h2 { margin: 0; color: #a5b4fc; font-size: 18px; }\n  .spa-banner span { background: #38bdf8; color: #0b0f19; font-weight: bold; font-size: 11px; padding: 4px 10px; border-radius: 6px; }\n\n  .stats-row {\n    display: flex;\n    gap: 12px;\n    margin-bottom: 20px;\n  }\n  .stat-card {\n    flex: 1;\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 10px;\n    padding: 12px;\n    text-align: center;\n  }\n  .stat-card b { display: block; font-size: 16px; color: #38bdf8; }\n  .stat-card span { font-size: 11px; color: #94a3b8; }\n\n  /* Leaderboard Grid Table */\n  table {\n    width: 100%;\n    border-collapse: collapse;\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    overflow: hidden;\n  }\n  th {\n    background: #1e2438;\n    color: #38bdf8;\n    padding: 14px;\n    text-align: left;\n    font-size: 12px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n  }\n  td {\n    padding: 12px 14px;\n    border-top: 1px solid #1f2937;\n    font-size: 13px;\n  }\n  .champion {\n    background: rgba(234, 179, 8, 0.18);\n    font-weight: bold;\n  }\n  .badge {\n    display: inline-block;\n    padding: 3px 8px;\n    border-radius: 6px;\n    font-size: 11px;\n    font-weight: bold;\n  }\n  .gold { background: #eab308; color: #000; }\n  .silver { background: #94a3b8; color: #000; }\n  .bronze { background: #f97316; color: #fff; }\n</style>\n\n<div class=\"spa-esports\">\n  <!-- Championship Header -->\n  <div class=\"spa-banner\">\n    <div>\n      <h2>🏆 Global Cyber Championship 2099</h2>\n      <p style=\"margin: 4px 0 0 0; font-size: 12px; color: #cbd5e1;\">Live Arena Standings • Prize Pool: $100,000</p>\n    </div>\n    <span>🔴 LIVE ARENA</span>\n  </div>\n\n  <!-- Metric Ribbon -->\n  <div class=\"stats-row\">\n    <div class=\"stat-card\"><b>32</b><span>Pro Teams</span></div>\n    <div class=\"stat-card\"><b>128</b><span>Matches Played</span></div>\n    <div class=\"stat-card\"><b>1.4M</b><span>Global Viewers</span></div>\n  </div>\n\n  <!-- Standings Table -->\n  <table>\n    <tr>\n      <th>Rank</th>\n      <th>Player</th>\n      <th>Badge</th>\n      <th>Score</th>\n    </tr>\n\n    <tr class=\"champion\">\n      <td>🥇 1st</td>\n      <td>ApexDragon</td>\n      <td><span class=\"badge gold\">CHAMPION</span></td>\n      <td>15,400</td>\n    </tr>\n\n    <tr>\n      <td>🥈 2nd</td>\n      <td>PixelCat</td>\n      <td><span class=\"badge silver\">MASTER</span></td>\n      <td>12,850</td>\n    </tr>\n    <tr>\n      <td>🥉 3rd</td>\n      <td>CyberBot</td>\n      <td><span class=\"badge bronze\">PRO</span></td>\n      <td>10,200</td>\n    </tr>\n  </table>\n</div>"
    },
    targetDescription: {
      en: 'An Esports Championship SPA featuring metric cards and the #1 Champion ApexDragon row with a golden badge.',
      uz: 'Ko\'rsatkichlar kartalari va oltin nishonli 1-o\'rin Chempioni ApexDragon qatoriga ega Kibersport SPA sahifasi.'
    },
    anatomy: [
      {
        part: '<table>',
        role: { en: 'Table Foundation', uz: 'Jadval poydevori' },
        explanation: { en: 'Creates the outer structured grid container.', uz: 'Tashqi jadval panjarasini yaratadi.' },
        effect: { en: 'Initializes the table grid', uz: 'Jadval panjarasini boshlaydi' },
        visualPreview: '<div class="mini-canvas">⊞ Outer Grid Table Frame</div>'
      },
      {
        part: '<tr>',
        role: { en: 'Table Row', uz: 'Jadval qatori' },
        explanation: { en: 'Short for Table Row. Creates one horizontal row of boxes from left to right.', uz: 'Table Row (Jadval qatori). Chapdan o\'ngga bitta gorizontal qator hosil qiladi.' },
        effect: { en: 'Starts a horizontal row', uz: 'Gorizontal qatorni boshlaydi' },
        visualPreview: '<div class="mini-canvas">➔ Horizontal Row (Left to Right) ➔</div>'
      },
      {
        part: '<th>',
        role: { en: 'Table Header Cell', uz: 'Sarlavha katagi' },
        explanation: { en: 'Creates a bold label cell for column titles.', uz: 'Ustun nomlari uchun qalin sarlavha katagi hosil qiladi.' },
        effect: { en: 'Bold column header', uz: 'Qalin sarlavha katagi' },
        visualPreview: '<div class="mini-canvas"><b>Header: Name | Score</b></div>'
      },
      {
        part: '<td>',
        role: { en: 'Table Data Cell', uz: 'Ma\'lumot katagi' },
        explanation: { en: 'A regular grid box holding values or text.', uz: 'Matn yoki raqamni saqlovchi oddiy katak.' },
        effect: { en: 'Standard data cell box', uz: 'Oddiy ma\'lumot katagi' },
        visualPreview: '<div class="mini-canvas">📦 Standard Data Cell Box</div>'
      }
    ],
    listOfTags: [
      { code: '<table> ... </table>', name: 'Table', description: 'The outer container frame for a grid/table', exampleHtml: '<table><tr><td>Cell</td></tr></table>' },
      { code: '<tr> ... </tr>', name: 'Table Row', description: 'Creates one horizontal line of cells across the table', exampleHtml: '<tr><td>A</td><td>B</td></tr>' },
      { code: '<th> ... </th>', name: 'Table Header', description: 'Bold title cell at the top of a column', exampleHtml: '<th>Player</th>' },
      { code: '<td> ... </td>', name: 'Table Data', description: 'Standard data cell box holding facts or numbers', exampleHtml: '<td>15,400</td>' }
    ],
    tagShowcase: [
      { tag: '<table>', meaning: 'The whole grid' },
      { tag: '<tr>', meaning: 'One horizontal row' },
      { tag: '<th>', meaning: 'Bold column title' },
      { tag: '<td>', meaning: 'Data box inside a row' }
    ],
    quickTags: ['<table>', '</table>', '<tr>', '</tr>', '<th>', '</th>', '<td>', '</td>'],
    challenge: {
      mission: {
        en: 'Crown the #1 Champion in the Esports SPA! Add a new <tr class="champion"> with 4 <td> cells: "🥇 1st", "ApexDragon", `<span class="badge gold">CHAMPION</span>`, and score "15,400"!',
        uz: 'Kibersport SPA sahifasida 1-o\'rin Chempionini e\'lon qiling! Yangi <tr class="champion"> qatori ochib, ichiga 4 ta <td> katak yozing: "🥇 1st", "ApexDragon", `<span class="badge gold">CHAMPION</span>` va "15,400" ochko!'
      },
      hint: {
        en: 'Right below the header <tr>, write <tr class="champion"> and place the four <td> cells inside it.',
        uz: 'Sarlavha <tr> qatoridan keyin <tr class="champion"> oching va ichiga to\'rtta <td> katak joylashtiring.'
      },
      rules: [
        {
          type: 'hasTag',
          tag: 'table',
          message: 'Keep the <table> grid!'
        },
        {
          type: 'custom',
          check: (code) => (code.match(/<tr/gi) || []).length >= 4,
          message: 'You need at least 4 rows (1 header row + 3 player rows)!'
        },
        {
          type: 'custom',
          check: (code) => /ApexDragon/i.test(code),
          message: 'Add ApexDragon as the 1st place champion in the table!'
        },
        {
          type: 'custom',
          check: (code) => /CHAMPION/i.test(code),
          message: 'Give ApexDragon the CHAMPION badge!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'A table in an SPA is like an apartment building: <table> is the building, <tr> is each floor, <th> is the roof penthouse sign, and <td> is each apartment room.',
      discussionQuestions: [
        'How do web apps like ESPN, Steam, and Discord use tables for rankings and match histories?',
        'Why do all <td> and <th> cells have to be wrapped inside a <tr> row?'
      ],
      commonMistakes: [
        'Putting <td> directly inside <table> without wrapping it in a <tr> row',
        'Having a different number of <td> cells in different rows'
      ],
      funActivity: 'Design a championship leaderboard for your classroom with student avatars and stars!'
    }
  },

  // ==========================================
  // THEME 4: Pictures
  // ==========================================
  {
    id: 'theme-4-pictures',
    module: 'html-core',
    title: {
      en: 'Theme 4: Pictures & Void Tags',
      uz: '4-Mavzu: Rasmlar va Yopilmas Teglar'
    },
    icon: '🖼️',
    tag: '<img src="" alt="" width="">',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, an **Image** tag is like sticking a sticker onto a poster. Instead of writing text, you show a photo or drawing.',
        uz: 'Oddiy tilda aytganda, **Rasm** tegi plakatga stiker yopishtirishga o\'xshaydi. Matn yozish o\'rniga fotosurat yoki chizilgan rasm ko\'rsatasiz.'
      },
      whatIsATag: {
        en: 'Fun secret: `<img>` is a **Void Tag**! It has NO closing `</img>`! Why? Because you cannot put words inside a picture — the picture stands by itself! You tell it where the picture lives using `src` (source).',
        uz: 'Qiziqarli sir: `<img>` — bu **Bo\'sh (Void) teg**! Uning yopiluvchi `</img>` jufti YO\'Q! Nega? Chunki rasmning ichiga matn joylay olmaysiz — rasm o\'zi alohida turadi! Rasm qayerdaligini `src` (manba) atributi orqali aytasiz.'
      }
    },
    summary: {
      en: 'Learn how to show pictures on a page and discover why <img> is a self-closing void tag.',
      uz: 'Sahifada rasmlar ko\'rsatishni va nima uchun <img> tegi yopiluvchi juftga ega emasligini o\'rganing.'
    },
    story: {
      en: 'Pictures need an address (src) to find the image file, and width to decide how big or small to draw it.',
      uz: 'Rasmlarga manzil (src) va uni qanchalik katta yoki kichik chizish uchun kenglik (width) kerak bo\'ladi.'
    },
    initialCode: `<div class="pet-card">
  <h2>🐾 Cyber Pet Adoption</h2>
  <p>Our shelter has a super cute puppy ready for a home!</p>
  <!-- Step 1: Put the picture here using <img src="..." alt="..."> -->
  <!-- Step 2: Shape its size by setting width="260" so it fits nicely! -->

</div>`,
    targetCode: `<div class="pet-card">
  <h2>🐾 Cyber Pet Adoption</h2>
  <p>Our shelter has a super cute puppy ready for a home!</p>
  <img 
    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300" 
    alt="Cute fluffy puppy wearing glasses" 
    width="260"
  >
</div>`,
    targetDescription: 'A handsome pet card with a puppy photo placed from scratch and resized to width="260".',
    anatomy: [
      {
        part: '<img',
        role: 'Image Tag (Void)',
        explanation: 'Tells the browser to display an image. It is self-closing — no </img> needed!',
        effect: 'Places an image on the page'
      },
      {
        part: 'src="..."',
        role: 'Source URL',
        explanation: 'Short for Source. The web link or file path where the picture lives.',
        effect: 'Loads the picture from the link'
      },
      {
        part: 'alt="..."',
        role: 'Alternative Text',
        explanation: 'Describes the photo in case internet is slow or for screen readers.',
        effect: 'Helpful text description'
      },
      {
        part: 'width="260"',
        role: 'Width in Pixels',
        explanation: 'Controls how wide the picture looks on screen.',
        effect: 'Resizes the image'
      }
    ],
    listOfTags: [
      { code: '<img src="...">', name: 'Image', description: 'Displays a picture or photo on screen (self-closing)', exampleHtml: '<img src="cat.png" alt="Cat" width="80">' },
      { code: 'src="..."', name: 'Source Attribute', description: 'The web address or file path where the image is stored', exampleHtml: 'src="https://example.com/pet.jpg"' },
      { code: 'alt="..."', name: 'Alt Description', description: 'Explains what the image shows if it fails to load', exampleHtml: 'alt="Happy Puppy"' },
      { code: 'width="..."', name: 'Width', description: 'Sets the width of the image in pixels (e.g. 200)', exampleHtml: 'width="200"' },
      { code: 'height="..."', name: 'Height', description: 'Sets the height of the image in pixels', exampleHtml: 'height="150"' }
    ],
    tagShowcase: [
      { tag: '<img src="..." alt="...">', meaning: 'Image sticker (no closing tag)' },
      { tag: 'src="link"', meaning: 'Where the photo lives' },
      { tag: 'width="200"', meaning: 'Sets size in pixels' }
    ],
    quickTags: ['<img src="" alt="" width="200">', 'src=""', 'alt=""', 'width="260"'],
    challenge: {
      mission: {
        en: 'Put a puppy photo onto the pet card using the <img> tag with src, alt, and size it by adding width="260"!',
        uz: '<img> tegi, src va alt yordamida uy hayvoni kartochkasiga kuchukcha rasmini joylashtiring va width="260" bilan o\'lchamini moslang!'
      },
      hint: {
        en: 'Write: <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300" alt="Puppy" width="260"> (Remember: <img> is a void tag, no closing tag needed!)',
        uz: 'Yozing: <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300" alt="Kuchukcha" width="260"> (Esda tuting: <img> yopiluvchi tegga ega emas!)'
      },
      rules: [
        {
          type: 'hasTag',
          tag: 'img',
          message: 'Place an <img> tag on the page!'
        },
        {
          type: 'hasAttribute',
          tag: 'img',
          attribute: 'src',
          message: 'Give your <img> tag a src attribute with the photo link!'
        },
        {
          type: 'hasAttribute',
          tag: 'img',
          attribute: 'alt',
          message: 'Add an alt attribute describing the puppy!'
        },
        {
          type: 'custom',
          check: (code) => code.includes('260'),
          message: 'Shape the image size by adding width="260"!'
        }
      ]
    },
    teacherGuide: {
      analogy: '<img> is like a photo sticker on a poster: you stick it on, but you don\'t need to wrap it with anything.',
      discussionQuestions: [
        'Why does <img> NOT have a closing </img> tag like <p> does?',
        'What does src stand for? (Source)'
      ],
      commonMistakes: [
        'Spelling src as "scr" (the #1 kid typo!)'
      ],
      funActivity: 'Try setting width to 400 and watch the puppy get huge!'
    }
  },

  // ==========================================
  // THEME 5: Basic Divs & Borders
  // ==========================================
  {
    id: 'theme-5-divs',
    module: 'html-core',
    title: {
      en: 'Theme 5: Basic Divs & Border Style',
      uz: '5-Mavzu: Asosiy Divlar va Chegara Uslubi'
    },
    icon: '📦',
    tag: '<div>, style="border: ..."',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, a `<div>` is an **invisible cardboard box**! It lets you pack words, buttons, and pictures together into one package.',
        uz: 'Oddiy tilda aytganda, `<div>` — bu **ko\'rinmas karton quti**! U so\'zlar, tugmalar va rasmlarni bitta qutiga joylash imkonini beradi.'
      },
      whatIsATag: {
        en: 'By itself, a `<div>` is completely invisible. But when you give it basic styling like `style="border: 3px solid cyan;"`, it draws a sturdy box wall around everything inside!',
        uz: 'O\'z holicha `<div>` butunlay ko\'rinmas. Lekin unga `style="border: 3px solid cyan;"` kabi bezak bersangiz, u ichidagi narsalar atrofida chiroyli devor chizadi!'
      }
    },
    summary: {
      en: 'Group things together using <div> and draw solid borders to create real cards.',
      uz: '<div> yordamida elementlarni guruhlang va mustahkam chegaralar chizib haqiqiy kartochkalar yasang.'
    },
    story: {
      en: 'Think of <div> like a lunchbox or bento box. You can pack a sandwich, juice, and fruit inside. When you move the lunchbox, everything inside moves together!',
      uz: '<div> ni tushlik qutisiga o\'xshating: sendvich, sharbat va mevani ichiga solasiz. Qutini ko\'chirganingizda, ichidagi hamma narsa birga ko\'chadi!'
    },
    initialCode: `<!-- The treasure items are loose on the floor! -->
<!-- Step 1: Wrap the treasure below inside a <div> container -->
<!-- Step 2: Shape the box with style="border: 4px solid #2dd4bf; padding: 16px;" -->

<h3>Secret Chest</h3>
<p>Contains 100 gold coins and a magical crystal!</p>`,
    targetCode: `<div style="border: 4px solid #2dd4bf; padding: 16px;">
  <h3>Secret Chest</h3>
  <p>Contains 100 gold coins and a magical crystal!</p>
</div>`,
    targetDescription: 'A solid card with a bright mint cyan (4px solid #2dd4bf) border wall neatly wrapping the title and text.',
    anatomy: [
      {
        part: '<div>',
        role: { en: 'Divider Box', uz: 'Bo\'linma qutisi' },
        explanation: {
          en: 'Short for Division. Creates an invisible container box.',
          uz: 'Division so\'zining qisqartmasi. Ko\'rinmas quti konteyner yasaydi.'
        },
        effect: {
          en: 'Groups items together',
          uz: 'Elementlarni birga guruhlaydi'
        },
        visualPreview: '<div class="mini-canvas">📦 Card Container Box</div>'
      },
      {
        part: 'style="..."',
        role: { en: 'Style Attribute', uz: 'Uslub atributi' },
        explanation: {
          en: 'Allows you to write quick CSS styling rules right on the tag.',
          uz: 'Tegning o\'zida tezkor CSS bezak qoidalarini yozish imkonini beradi.'
        },
        effect: {
          en: 'Applies inline design',
          uz: 'Ichki bezakni qo\'llaydi'
        },
        visualPreview: '<div class="mini-canvas">🎨 Applies CSS Properties Directly</div>'
      },
      {
        part: 'border: 4px solid #2dd4bf;',
        role: { en: 'Border Wall', uz: 'Chegara devori' },
        explanation: {
          en: 'Thickness (4px), line type (solid), and color (#2dd4bf).',
          uz: 'Qalinlik (4px), chiziq turi (solid - tekis) va rang (#2dd4bf - och ko\'k).'
        },
        effect: {
          en: 'Draws a solid cyan box wall',
          uz: 'Quti atrofida tekis och ko\'k devor chizadi'
        },
        visualPreview: '<div class="mini-canvas"><span style="border: 2px solid #2dd4bf; padding: 2px 8px; border-radius: 4px;">Solid Border Wall</span></div>'
      },
      {
        part: '</div>',
        role: { en: 'Closing Box', uz: 'Qutini yopish' },
        explanation: {
          en: 'Closes the cardboard box.',
          uz: 'Karton qutining qopqog\'ini yopadi.'
        },
        effect: {
          en: 'Finishes the container',
          uz: 'Konteynerni tugatadi'
        },
        visualPreview: '<div class="mini-canvas">🔒 Closes Container Shell</div>'
      }
    ],
    listOfTags: [
      { code: '<div> ... </div>', name: 'Div Box', description: 'An empty container box to group items together', exampleHtml: '<div style="border: 1px solid white;">Box</div>' },
      { code: 'border: 2px solid cyan;', name: 'Solid Border', description: 'Draws a solid colored wall around the box', exampleHtml: '<div style="border: 2px solid #2dd4bf;">Wall</div>' },
      { code: 'border: 2px dashed red;', name: 'Dashed Border', description: 'Draws a dashed treasure-map line around the box', exampleHtml: '<div style="border: 2px dashed red;">Dashed</div>' },
      { code: 'style="..."', name: 'Style Attribute', description: 'Attaches CSS styles directly onto an HTML element', exampleHtml: 'style="color: red;"' }
    ],
    tagShowcase: [
      { tag: '<div> ... </div>', meaning: 'The cardboard box' },
      { tag: 'border: 3px solid cyan;', meaning: 'Solid wall line' },
      { tag: 'border: 3px dashed gold;', meaning: 'Dashed line' }
    ],
    quickTags: ['<div>', '</div>', 'style="border: 4px solid #2dd4bf;"', 'border: 4px solid #2dd4bf;'],
    challenge: {
      mission: {
        en: 'Wrap the secret chest inside a <div> container and style it with border: 4px solid #2dd4bf; padding: 16px;!',
        uz: 'Maxfiy xazinani <div> qutisiga o\'rang va unga style="border: 4px solid #2dd4bf; padding: 16px;" bezagini bering!'
      },
      hint: {
        en: 'Put <div style="border: 4px solid #2dd4bf; padding: 16px;"> before the h3, and </div> after the paragraph.',
        uz: 'h3 dan oldin <div style="border: 4px solid #2dd4bf; padding: 16px;"> yozing va paragrafdan keyin </div> bilan yoping.'
      },
      rules: [
        {
          type: 'hasTag',
          tag: 'div',
          message: 'Wrap the secret chest in a <div> container!'
        },
        {
          type: 'hasCssProperty',
          property: 'border',
          valuePattern: '4px solid #2dd4bf',
          message: 'Set border to 4px solid #2dd4bf!'
        },
        {
          type: 'custom',
          check: (code) => code.includes('</div>'),
          message: 'Remember to close your container box with </div>!'
        }
      ]
    },
    teacherGuide: {
      analogy: '<div> is like a bento box: you put food in compartments. The border is the hard plastic rim.',
      discussionQuestions: [
        'What would happen if you removed </div> at the end?',
        'Can you put an image and a button inside the same <div> box?'
      ],
      commonMistakes: [
        'Forgetting "solid" in the border style (border: 4px cyan won\'t draw without a style keyword like solid!)'
      ],
      funActivity: 'Try border: 8px double #2dd4bf to see a castle double-wall!'
    }
  },

  // ==========================================
  // THEME 6: Classes for Divs
  // ==========================================
  {
    id: 'theme-6-classes',
    module: 'css-core',
    title: {
      en: 'Theme 6: Classes for Divs (The Power of .class)',
      uz: '6-Mavzu: Divlar uchun Klasslar (.nom kuchi)'
    },
    icon: '⚡',
    tag: 'class="card", .card { ... }',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, a **Class** is a nickname or superpower badge you give to elements! Instead of re-typing styles 100 times, you name your style `.card` and give `class="card"` to any box.',
        uz: 'Oddiy inson tilida, **Klass** — bu elementlarga beriladigan laqab yoki nishondir! Uslublarni 100 marta qayta yozish o\'rniga, `.card` deb nomlaysiz va istalgan qutiga `class="card"` berasiz.'
      },
      whatIsATag: {
        en: 'In HTML, you write `class="super-box"`. In CSS, you target it with a period dot: `.super-box { ... }`. The dot `.` stands for class!',
        uz: 'HTML da: `class="super-box"` deb yozasiz. CSS da: nom oldiga nuqta qo\'yasiz: `.super-box { ... }`. Nuqta `.` klass belgisidir!'
      }
    },
    summary: 'Give nicknames to your boxes with class="..." and style multiple cards at once using CSS classes.',
    story: 'Imagine uniforms in a soccer team. Instead of telling each player what jersey to wear, you say: "Team Blue wears blue jerseys!" That is what a class does.',
    initialCode: `<style>
  /* In CSS, a dot . means class */
  .badge {
    background: #7c6cf7;
    color: white;
    padding: 6px 12px;
    border-radius: 8px;
    display: inline-block;
  }
</style>

<div>
  <h3>Player Profile</h3>
  <!-- Give this span class="badge" -->
  <span>Level: 99</span>
</div>`,
    targetCode: `<style>
  .badge {
    background: #7c6cf7;
    color: white;
    padding: 6px 12px;
    border-radius: 8px;
    display: inline-block;
  }
</style>

<div>
  <h3>Player Profile</h3>
  <span class="badge">Level: 99</span>
  <span class="badge">Rank: Master</span>
</div>`,
    targetDescription: 'A player profile containing two purple badge pills ("Level: 99" and "Rank: Master") both sharing the exact same `.badge` class styling.',
    anatomy: [
      {
        part: 'class="badge"',
        role: { en: 'Class Name', uz: 'Klass nomi' },
        explanation: {
          en: 'Labels this element with the "badge" nickname.',
          uz: 'Ushbu elementga "badge" laqabli klass yorlig\'ini yopishtiradi.'
        },
        effect: {
          en: 'Attaches the class nickname',
          uz: 'Klass laqabini biriktiradi'
        },
        visualPreview: '<div class="mini-canvas">🏷️ [ class="badge" ]</div>'
      },
      {
        part: '.badge { ... }',
        role: { en: 'Class Selector', uz: 'Klass selektori' },
        explanation: {
          en: 'In CSS, the period . tells the browser: "Find every element with class=\'badge\' and paint it!"',
          uz: 'CSS da nuqta . belgisi brauzerga: "class=\'badge\' bo\'lgan har bir elementni top va bo\'ya!" deydi.'
        },
        effect: {
          en: 'Selects all elements with that class',
          uz: 'Shu klassga ega barcha elementlarni tanlaydi'
        },
        visualPreview: '<div class="mini-canvas">🎯 Targets All Elements With That Class</div>'
      },
      {
        part: 'background: #7c6cf7;',
        role: { en: 'Shared Color', uz: 'Umumiy rang' },
        explanation: {
          en: 'Paints all badge elements bright purple at once.',
          uz: 'Barcha nishon elementlarini birdaniga yorqin binafsharang qiladi.'
        },
        effect: {
          en: 'Styles all badges simultaneously',
          uz: 'Barcha nishonlarni bir vaqtda bezatadi'
        },
        visualPreview: '<div class="mini-canvas"><span style="background: #5b5fc7; color: white; padding: 2px 8px; border-radius: 6px; font-size: 11px;">Level: 99</span> <span style="background: #5b5fc7; color: white; padding: 2px 8px; border-radius: 6px; font-size: 11px;">Rank: Master</span></div>'
      }
    ],
    listOfTags: [
      { code: 'class="name"', name: 'Class Attribute', description: 'Gives a reusable nickname to any HTML tag', exampleHtml: '<div class="card">Card</div>' },
      { code: '.name { ... }', name: 'Class Selector', description: 'CSS selector starting with a dot . targeting that class', exampleHtml: '.card { color: red; }' },
      { code: 'id="name"', name: 'ID Attribute', description: 'A unique name for a single unique element (# in CSS)', exampleHtml: '<div id="main-boss">Boss</div>' }
    ],
    tagShowcase: [
      { tag: 'class="hero"', meaning: 'HTML nickname' },
      { tag: '.hero { ... }', meaning: 'CSS rule for that nickname (dot .)' }
    ],
    quickTags: ['class="badge"', '<span class="badge">', '</span>', '.badge {'],
    challenge: {
      mission: {
        en: 'Add class="badge" to the Level 99 span, and add a second span for "Rank: Master" with class="badge"!',
        uz: 'Level 99 span tegiga class="badge" qo\'shing va "Rank: Master" uchun ham xuddi shu klassli ikkinchi span yarating!'
      },
      hint: { en: 'Add class="badge" to the span, and create a second span using the same class.', uz: 'span tegiga class="badge" qo\'shing va xuddi shu klass bilan ikkinchi span yarating.' },
      rules: [
        {
          type: 'custom',
          check: (code) => (code.match(/class\s*=\s*["']badge["']/gi) || []).length >= 2,
          message: 'Give class="badge" to at least TWO elements!'
        },
        {
          type: 'custom',
          check: (code) => /Rank/i.test(code),
          message: 'Add the Rank: Master badge!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'A class is like a team uniform. You give 11 players the "Lions" uniform, and they all wear the same yellow jersey.',
      discussionQuestions: [
        'Why does CSS use a dot . before class names? (To tell the browser it\'s a class and not a tag name)',
        'Can one page have 50 elements with the same class? (Yes, that\'s the superpower!)'
      ],
      commonMistakes: [
        'Putting a dot inside the HTML attribute (e.g. class=".badge" is wrong, write class="badge")'
      ],
      funActivity: 'Add a 3rd badge with your favorite superhero stat!'
    }
  },

  // ==========================================
  // THEME 7: Margin and Padding
  // ==========================================
  {
    id: 'theme-7-box-model',
    module: 'css-core',
    title: {
      en: 'Theme 7: Margin & Padding (Cushion vs Space)',
      uz: '7-Mavzu: Margin va Padding (Ichki yostiqcha va Tashqi masofa)'
    },
    icon: '📦',
    tag: 'padding: 24px;, margin: 30px;',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, **Padding** is bubble wrap on the INSIDE of your box, and **Margin** is personal space on the OUTSIDE!',
        uz: 'Oddiy inson tilida, **Padding** — bu quti ICHIDAGI yumshoq paxta, **Margin** esa qutidan TASHQARIDAGI shaxsiy masofadir!'
      },
      whatIsATag: {
        en: '1. `padding: 24px;` gives words breathing room inside their colored container.\n2. `margin: 30px;` pushes neighboring elements away so they do not crowd you.',
        uz: '1. `padding: 24px;` so\'zlarga quti ichida erkin nafas olish masofasini beradi.\n2. `margin: 30px;` tashqaridagi qo\'shni elementlarni itaradi.'
      }
    },
    summary: {
      en: 'Master the box model: create breathing room inside with padding, and push outside with margin.',
      uz: 'Box modelni egallang: padding bilan ichki yostiqcha, margin bilan tashqi masofa yarating.'
    },
    story: {
      en: 'The secret alert card feels claustrophobic! Add 24px padding so the text breathes, and 30px margin so it floats freely.',
      uz: 'Maxfiy xabar kartochkasi devorlarga siqilib qolgan! Matn erkin turishi uchun 24px padding va 30px margin bering.'
    },
    initialCode: `<style>
  .box {
    background-color: #1e2030;
    color: #ffffff;
    border: 3px solid #2dd4bf;
    /* The text is crammed against the walls! */
    padding: 0px;
    margin: 0px;
  }
</style>

<div class="box">
  <h3>I am in a box!</h3>
  <p>Give me 24px of inside cushion (padding) and 30px of personal space (margin)!</p>
</div>`,
    targetCode: `<style>
  .box {
    background-color: #1e2030;
    color: #ffffff;
    border: 3px solid #2dd4bf;
    padding: 24px;
    margin: 30px;
  }
</style>

<div class="box">
  <h3>I am in a box!</h3>
  <p>Give me 24px of inside cushion (padding) and 30px of personal space (margin)!</p>
</div>`,
    targetDescription: 'A spacious navy card with cozy 24px padding giving the text room to breathe inside, and generous 30px margin pushing it away from the edges.',
    anatomy: [
      {
        part: 'padding: 24px;',
        role: { en: 'Inside Cushion', uz: 'Ichki yostiqcha' },
        explanation: {
          en: 'Bubble wrap inside the box so text does not bump against the border walls.',
          uz: 'Quti ichidagi yostiqcha, shunda matn chegara devorlariga urilmaydi.'
        },
        effect: {
          en: 'Expands breathing room inside box',
          uz: 'Quti ichidagi nafas olish masofasini kengaytiradi'
        },
        visualPreview: '<div class="mini-canvas"><span style="background: rgba(45,212,191,0.15); border: 1px dashed #2dd4bf; padding: 4px 12px; border-radius: 4px;">🛋️ 24px Inside Cushion</span></div>'
      },
      {
        part: 'border: 3px solid #2dd4bf;',
        role: { en: 'The Wall', uz: 'Chegara devori' },
        explanation: {
          en: 'Draws a solid cyan wall around the box.',
          uz: 'Quti atrofida mustahkam och ko\'k devor chizadi.'
        },
        effect: {
          en: 'Visible box boundary',
          uz: 'Qutining ko\'rinuvchi chegarasi'
        },
        visualPreview: '<div class="mini-canvas"><span style="border: 2px solid #2dd4bf; padding: 2px 8px; border-radius: 4px;">🧱 Solid Boundary Wall</span></div>'
      },
      {
        part: 'margin: 30px;',
        role: { en: 'Outside Space', uz: 'Tashqi shaxsiy masofa' },
        explanation: {
          en: 'Personal space outside the box pushing other elements away.',
          uz: 'Qutidan tashqaridagi shaxsiy masofa, boshqa elementlarni itaradi.'
        },
        effect: {
          en: 'Pushes neighboring elements away',
          uz: 'Qo\'shni elementlarni tashqaridan itaradi'
        },
        visualPreview: '<div class="mini-canvas">↔️ 30px Outside Personal Space ↔️</div>'
      }
    ],
    listOfTags: [
      { code: 'padding: 24px;', name: 'Padding', description: 'Inside bubble wrap cushioning between text and the border', exampleHtml: '<div style="padding: 15px; border: 1px solid white;">Cushioned</div>' },
      { code: 'margin: 30px;', name: 'Margin', description: 'Personal space outside pushing neighboring elements away', exampleHtml: '<div style="margin: 10px; background: #2dd4bf; color: black; padding: 4px;">Spaced</div>' },
      { code: 'margin: 0 auto;', name: 'Margin Auto', description: 'Automatically centers a box horizontally in the middle of the screen', exampleHtml: 'margin: 0 auto;' }
    ],
    tagShowcase: [
      { tag: 'padding: 20px;', meaning: 'Inside cushion (bubble wrap)' },
      { tag: 'margin: 20px;', meaning: 'Outside breathing space' }
    ],
    quickTags: ['padding: 24px;', 'margin: 30px;', 'margin: 0 auto;'],
    challenge: {
      mission: {
        en: 'Set padding to "24px" and margin to "30px" on .box!',
        uz: '.box klassida padding ni "24px" va margin ni "30px" qilib belgilang!'
      },
      hint: { en: 'Update padding on .box to create inside cushion, and margin to create outside space.', uz: '.box klassida ichki masofani padding, tashqi masofani margin bilan oshiring.' },
      rules: [
        {
          type: 'hasCssProperty',
          property: 'padding',
          valuePattern: /24px/i,
          message: 'Set padding to 24px!'
        },
        {
          type: 'hasCssProperty',
          property: 'margin',
          valuePattern: /30px/i,
          message: 'Set margin to 30px!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Padding is thick stuffing inside your coat. Margin is your arms stretched out asking friends for personal space.',
      discussionQuestions: [
        'If you want a button to be bigger and easier to tap, do you increase padding or margin?',
        'What happens if you remove padding: 0?'
      ],
      commonMistakes: [
        'Confusing padding (inside) with margin (outside)'
      ],
      funActivity: 'Set padding: 60px to watch the box puff up like a marshmallow!'
    }
  },

  // ==========================================
  // THEME 8: Basic Transform
  // ==========================================
  {
    id: 'theme-8-transform',
    module: 'css-core',
    title: {
      en: 'Theme 8: Basic Transform (Rotate, Scale, Move)',
      uz: '8-Mavzu: Asosiy Transform (Aylantirish, Kattalashtirish, Surish)'
    },
    icon: '🌀',
    tag: 'transform: rotate(), scale(), translateY()',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, **Transform** is the acrobatics spell of CSS! It lets you spin elements like a wheel, tilt them like a ramp, zoom them like a magnifying glass, or make them jump.',
        uz: 'Oddiy tilda aytganda, **Transform** bu CSS ning akrobatika sehridir! U elementlarni g\'ildirakdek aylantirish, kattalashtirish yoki sakratish imkonini beradi.'
      },
      whatIsATag: {
        en: '1. `rotate(15deg)` spins an element by degrees.\n2. `scale(1.2)` zooms an element (1.2 is 20% bigger!).\n3. `translateY(-15px)` lifts an element upward into the air.',
        uz: '1. `rotate(15deg)` elementni burchak bo\'yicha aylantiradi.\n2. `scale(1.2)` elementni 20% ga kattalashtiradi.\n3. `translateY(-15px)` elementni havoga ko\'taradi.'
      }
    },
    summary: {
      en: 'Make elements spin, zoom, and tilt with CSS transform powers.',
      uz: 'CSS transform yordamida elementlarni aylantiring, kattalashtiring va suring.'
    },
    story: {
      en: 'You have three ready boxes waiting on your screen. Use transform to move each one with a different acrobatics spell!',
      uz: 'Ekranda uchta tayyor quti kutib turibdi. Har biriga alohida transform sehrini qo\'llang!'
    },
    initialCode: `<style>
  .box-container {
    display: flex;
    gap: 24px;
    justify-content: center;
    padding: 30px;
  }
  .box {
    width: 70px;
    height: 70px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    color: white;
  }
  .box-1 {
    background: #ff5e7e;
    /* Step 1: Use transform: rotate(15deg); on Box 1 */
    transform: rotate(0deg);
  }
  .box-2 {
    background: #4facfe;
    /* Step 2: Use transform: scale(1.2); on Box 2 */
    transform: scale(1);
  }
  .box-3 {
    background: #43e97b;
    /* Step 3: Use transform: translateY(-15px); on Box 3 */
    transform: translateY(0px);
  }
</style>

<div class="box-container">
  <div class="box box-1">1</div>
  <div class="box box-2">2</div>
  <div class="box box-3">3</div>
</div>`,
    targetCode: `<style>
  .box-container {
    display: flex;
    gap: 24px;
    justify-content: center;
    padding: 30px;
  }
  .box {
    width: 70px;
    height: 70px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    color: white;
  }
  .box-1 {
    background: #ff5e7e;
    transform: rotate(15deg);
  }
  .box-2 {
    background: #4facfe;
    transform: scale(1.2);
  }
  .box-3 {
    background: #43e97b;
    transform: translateY(-15px);
  }
</style>

<div class="box-container">
  <div class="box box-1">1</div>
  <div class="box box-2">2</div>
  <div class="box box-3">3</div>
</div>`,
    targetDescription: {
      en: 'Three colorful boxes side-by-side: Box 1 tilted 15 degrees, Box 2 zoomed 20% larger, and Box 3 floating 15px upward.',
      uz: 'Yonma-yon uchta rangli quti: 1-quti 15 darajaga burilgan, 2-quti 20% ga kattalashgan va 3-quti 15px yuqoriga ko\'tarilgan.'
    },
    anatomy: [
      {
        part: 'transform: rotate(15deg);',
        role: { en: 'Rotation Angle', uz: 'Burish burchagi' },
        explanation: {
          en: 'Spins the element clockwise around its center by 15 degrees.',
          uz: 'Elementni o\'z markazi atrofida soat strelkasi bo\'yicha 15 darajaga aylantiradi.'
        },
        effect: {
          en: 'Tilts the box diagonally by 15°',
          uz: 'Qutini diagonaliga 15° buradi'
        },
        visualPreview: '<div class="mini-canvas"><div style="display:inline-block; transform: rotate(15deg); background:#ff5e7e; color:#fff; padding:4px 10px; border-radius:6px; font-weight:bold; font-size:12px;">🔄 Box 1: Tilted 15°</div></div>'
      },
      {
        part: 'transform: scale(1.2);',
        role: { en: 'Zoom Multiplier', uz: 'Kattalashtirish koeffitsienti' },
        explanation: {
          en: 'Scales the element up to 1.2x (20% bigger than normal size).',
          uz: 'Elementni 1.2 barobar (20% ga) kattalashtiradi.'
        },
        effect: {
          en: 'Enlarges the box by 20%',
          uz: 'Qutini 20% ga kattalashtiradi'
        },
        visualPreview: '<div class="mini-canvas"><div style="display:inline-block; transform: scale(1.15); background:#4facfe; color:#fff; padding:4px 10px; border-radius:6px; font-weight:bold; font-size:12px;">🔍 Box 2: 20% Bigger</div></div>'
      },
      {
        part: 'transform: translateY(-15px);',
        role: { en: 'Vertical Move', uz: 'Vertikal surish' },
        explanation: {
          en: 'Shifts the element up (negative) or down (positive) along the Y axis.',
          uz: 'Elementni Y o\'qi bo\'ylab yuqoriga (manfiy) yoki pastga (musbat) suradi.'
        },
        effect: {
          en: 'Floats the box 15px upward',
          uz: 'Qutini 15px yuqoriga ko\'taradi'
        },
        visualPreview: '<div class="mini-canvas"><div style="display:inline-block; transform: translateY(-4px); background:#43e97b; color:#fff; padding:4px 10px; border-radius:6px; font-weight:bold; font-size:12px;">⬆️ Box 3: Floated Up</div></div>'
      }
    ],
    listOfTags: [
      { code: 'transform: rotate(15deg);', name: { en: 'Rotate', uz: 'Aylantirish' }, description: { en: 'Spins an element clockwise by specified degrees', uz: 'Elementni berilgan darajaga aylantiradi' }, exampleHtml: '<div style="transform: rotate(15deg); background: #ff5e7e; color: white; display: inline-block; padding: 4px;">Rotated</div>' },
      { code: 'transform: scale(1.2);', name: { en: 'Scale (Zoom)', uz: 'Kattalashtirish' }, description: { en: 'Multiplies size (1.2 is 20% larger, 0.8 is 20% smaller)', uz: 'Hajmini ko\'paytiradi (1.2 kattaroq, 0.8 kichikroq)' }, exampleHtml: '<div style="transform: scale(1.2); background: #4facfe; color: white; display: inline-block; padding: 4px;">Zoomed</div>' },
      { code: 'transform: translateY(-15px);', name: { en: 'Translate Y', uz: 'Vertikal ko\'chirish' }, description: { en: 'Shifts an element up (-15px) or down (+15px)', uz: 'Elementni yuqoriga yoki pastga siljitadi' }, exampleHtml: 'transform: translateY(-15px);' }
    ],
    tagShowcase: [
      { tag: 'transform: rotate(15deg);', meaning: { en: 'Tilt like a badge', uz: 'Nishon kabi qiyalatish' } },
      { tag: 'transform: scale(1.2);', meaning: { en: 'Zoom 20% larger', uz: '20% kattalashtirish' } },
      { tag: 'transform: translateY(-15px);', meaning: { en: 'Jump into the air', uz: 'Havoga sakrash' } }
    ],
    quickTags: ['transform: rotate(15deg);', 'transform: scale(1.2);', 'transform: translateY(-15px);'],
    challenge: {
      mission: {
        en: 'Move the 3 ready boxes! Rotate .box-1 by 15deg, zoom .box-2 with scale(1.2), and float .box-3 with translateY(-15px)!',
        uz: 'Tayyor 3 ta qutini harakatlantiring! .box-1 ni rotate(15deg) bilan buring, .box-2 ni scale(1.2) bilan kattalashtiring, .box-3 ni translateY(-15px) bilan suring!'
      },
      hint: {
        en: 'In each CSS class, set transform with the specific acrobatic move: rotate(15deg) for .box-1, scale(1.2) for .box-2, and translateY(-15px) for .box-3.',
        uz: 'Har bir CSS klass ichida transform xususiyatini o\'rnating: .box-1 uchun rotate(15deg), .box-2 uchun scale(1.2) va .box-3 uchun translateY(-15px).'
      },
      rules: [
        {
          type: 'custom',
          check: (code) => /rotate\s*\(\s*15deg\s*\)/i.test(code),
          message: 'Tilt .box-1 with transform: rotate(15deg);'
        },
        {
          type: 'custom',
          check: (code) => /scale\s*\(\s*1\.2\s*\)/i.test(code),
          message: 'Zoom .box-2 with transform: scale(1.2);'
        },
        {
          type: 'custom',
          check: (code) => /translateY\s*\(\s*-15px\s*\)/i.test(code),
          message: 'Float .box-3 with transform: translateY(-15px);'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'Transform is like holding three toy blocks: you tilt the first, hold a magnifying glass to the second, and lift the third off the table.',
        uz: 'Transform uchta o\'yinchoq qutiga o\'xshaydi: birinchisini burasiz, ikkinchisini kattalashtirasiz, uchinchisini esa stoldan yuqoriga ko\'tarasiz.'
      },
      discussionQuestions: [
        'What does a negative degree do? (Rotates counter-clockwise!)',
        'What happens if you scale by 2? (It doubles in size!)'
      ],
      commonMistakes: [
        'Writing 15 instead of 15deg (degrees must have deg!)'
      ],
      funActivity: 'Try rotate(180deg) on Box 1 to see the number 1 turn completely upside down!'
    }
  },

  // ==========================================
// ==========================================
  // THEME 9: Flexbox Superpowers
  // ==========================================
  {
    id: 'theme-9-flexbox',
    module: 'full-powers',
    title: {
      en: 'Theme 9: Flexbox (CyberPulse Music Media SPA)',
      uz: '9-Mavzu: Flexbox (CyberPulse Musiqiy Media SPA)'
    },
    icon: '🧩',
    tag: 'display: flex, justify-content, align-items',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, **Flexbox** is the master 1D layout engine of real Single Page Applications! Without it, navbars, sidebars, cards, and player controls collapse into a clumsy vertical pile.',
        uz: 'Oddiy tilda **Flexbox** — bu haqiqiy SPA ilovalarning 1D terish dvigatelidir! Usiz navigatsiya panellari, yon menyular, kartochkalar va pleyer boshqaruvi bir-birining ustiga yig\'ilib qoladi.'
      },
      whatIsATag: {
        en: '1. `display: flex;` activates the 1D snapping power.\n2. `justify-content: space-between;` pushes the logo to the left and profile controls to the right.\n3. `align-items: center;` centers all navbar items vertically on the same horizon!',
        uz: '1. `display: flex;` bir o\'lchovli qator kuchini yoqadi.\n2. `justify-content: space-between;` logotipni chapga, tugmalarni esa eng o\'ng chetga suradi.\n3. `align-items: center;` barcha elementlarni vertikal bo\'yicha bir tekis o\'rtaga tekislaydi!'
      }
    },
    summary: {
      en: 'Assemble a complete Spotify-style Music SPA layout using display: flex, justify-content: space-between, and align-items: center.',
      uz: 'display: flex, justify-content: space-between va align-items: center yordamida to\'liq Spotify uslubidagi Musiqa SPA sahifasini quring.'
    },
    story: {
      en: 'The CyberPulse Music SPA header is collapsed into a messy vertical pile. Snap the topbar into place using Flexbox to power the entire web app!',
      uz: 'CyberPulse Musiqa SPA sahifasining sarlavhasi ustma-ust tushib buzilib yotibdi. Flexbox yordamida uni haqiqiy musiqiy ilova kabi terib chiqing!'
    },
    initialCode: {
      en: "<style>\n  * { box-sizing: border-box; }\n  .spa-app {\n    background: #0b0f19;\n    border: 1px solid #1e293b;\n    border-radius: 16px;\n    padding: 16px;\n    color: #e2e8f0;\n    font-family: system-ui, sans-serif;\n  }\n  .spa-navbar {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 14px 20px;\n    margin-bottom: 16px;\n    /* Step 1: Turn on flexbox power with display: flex; */\n    /* Step 2: Push brand to left and user deck to right with justify-content: space-between; */\n    /* Step 3: Align all navbar items vertically with align-items: center; */\n  }\n  .brand { font-size: 16px; font-weight: 800; color: #38bdf8; }\n  .nav-menu { display: flex; gap: 16px; font-size: 13px; color: #94a3b8; }\n  .nav-menu span:hover { color: #38bdf8; cursor: pointer; }\n  .user-deck { display: flex; align-items: center; gap: 10px; font-size: 12px; }\n  .vip-pill { background: #38bdf8; color: #0b0f19; font-weight: bold; padding: 4px 10px; border-radius: 6px; }\n\n  .spa-body {\n    display: flex;\n    gap: 16px;\n    margin-bottom: 16px;\n  }\n  .spa-sidebar {\n    width: 170px;\n    background: #111827;\n    border-radius: 12px;\n    padding: 14px;\n    font-size: 12px;\n  }\n  .spa-sidebar h4 { margin: 0 0 10px 0; color: #38bdf8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }\n  .spa-sidebar div { padding: 6px 0; color: #94a3b8; cursor: pointer; }\n  .spa-sidebar div:hover { color: white; }\n\n  .spa-content {\n    flex: 1;\n    background: #111827;\n    border-radius: 12px;\n    padding: 16px;\n  }\n  .hero-banner {\n    background: linear-gradient(135deg, #1e1b4b, #312e81);\n    border: 1px solid #4338ca;\n    border-radius: 10px;\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n  .hero-banner h3 { margin: 0 0 6px 0; color: #a5b4fc; }\n  .hero-banner p { margin: 0; font-size: 12px; color: #cbd5e1; }\n\n  .track-row {\n    display: flex;\n    gap: 12px;\n  }\n  .track-card {\n    flex: 1;\n    background: #1e293b;\n    border-radius: 8px;\n    padding: 12px;\n    font-size: 12px;\n  }\n  .track-card span { display: block; color: #94a3b8; font-size: 10px; margin-top: 4px; }\n\n  .spa-player {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 12px 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 12px;\n  }\n  .player-track { color: #38bdf8; font-weight: bold; }\n  .player-controls { display: flex; gap: 14px; font-size: 14px; cursor: pointer; }\n</style>\n\n<div class=\"spa-app\">\n  <header class=\"spa-navbar\">\n    <div class=\"brand\">🎵 CyberPulse SPA</div>\n    <div class=\"nav-menu\">\n      <span>Home</span>\n      <span>Discover</span>\n      <span>Radio</span>\n      <span>Library</span>\n    </div>\n    <div class=\"user-deck\">\n      <span class=\"vip-pill\">⭐ VIP PASS</span>\n      <span>🎧 Alex</span>\n    </div>\n  </header>\n\n  <div class=\"spa-body\">\n    <aside class=\"spa-sidebar\">\n      <h4>Playlists</h4>\n      <div>⚡ Synthwave</div>\n      <div>🚀 Lo-Fi Chill</div>\n      <div>🎮 Gaming OST</div>\n      <div>💎 Cyber Beats</div>\n    </aside>\n\n    <main class=\"spa-content\">\n      <div class=\"hero-banner\">\n        <h3>⚡ Live Cyber Station</h3>\n        <p>Streaming high-tempo coding synth to 12,400 listeners worldwide.</p>\n      </div>\n\n      <div class=\"track-row\">\n        <div class=\"track-card\"><b>Neon Horizon</b><span>3:42 • CyberBoy</span></div>\n        <div class=\"track-card\"><b>Laser Grid</b><span>4:15 • PixelQueen</span></div>\n        <div class=\"track-card\"><b>Dark Orbit</b><span>2:58 • SynthLord</span></div>\n      </div>\n    </main>\n  </div>\n\n  <footer class=\"spa-player\">\n    <div class=\"player-track\">▶ Now Playing: Neon Horizon (3:42)</div>\n    <div class=\"player-controls\">\n      <span>⏮️</span>\n      <span>⏯️</span>\n      <span>⏭️</span>\n    </div>\n    <div class=\"player-vol\">🔊 85%</div>\n  </footer>\n</div>",
      uz: "<style>\n  * { box-sizing: border-box; }\n  .spa-app {\n    background: #0b0f19;\n    border: 1px solid #1e293b;\n    border-radius: 16px;\n    padding: 16px;\n    color: #e2e8f0;\n    font-family: system-ui, sans-serif;\n  }\n  .spa-navbar {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 14px 20px;\n    margin-bottom: 16px;\n    /* 1-Qadam: display: flex; yordamida flexboxni yoqing */\n    /* 2-Qadam: justify-content: space-between; orqali brendni chapga, profilni o'ngga suring */\n    /* 3-Qadam: align-items: center; orqali barcha elementlarni vertikal markazga tekislang */\n  }\n  .brand { font-size: 16px; font-weight: 800; color: #38bdf8; }\n  .nav-menu { display: flex; gap: 16px; font-size: 13px; color: #94a3b8; }\n  .nav-menu span:hover { color: #38bdf8; cursor: pointer; }\n  .user-deck { display: flex; align-items: center; gap: 10px; font-size: 12px; }\n  .vip-pill { background: #38bdf8; color: #0b0f19; font-weight: bold; padding: 4px 10px; border-radius: 6px; }\n\n  .spa-body {\n    display: flex;\n    gap: 16px;\n    margin-bottom: 16px;\n  }\n  .spa-sidebar {\n    width: 170px;\n    background: #111827;\n    border-radius: 12px;\n    padding: 14px;\n    font-size: 12px;\n  }\n  .spa-sidebar h4 { margin: 0 0 10px 0; color: #38bdf8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }\n  .spa-sidebar div { padding: 6px 0; color: #94a3b8; cursor: pointer; }\n  .spa-sidebar div:hover { color: white; }\n\n  .spa-content {\n    flex: 1;\n    background: #111827;\n    border-radius: 12px;\n    padding: 16px;\n  }\n  .hero-banner {\n    background: linear-gradient(135deg, #1e1b4b, #312e81);\n    border: 1px solid #4338ca;\n    border-radius: 10px;\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n  .hero-banner h3 { margin: 0 0 6px 0; color: #a5b4fc; }\n  .hero-banner p { margin: 0; font-size: 12px; color: #cbd5e1; }\n\n  .track-row {\n    display: flex;\n    gap: 12px;\n  }\n  .track-card {\n    flex: 1;\n    background: #1e293b;\n    border-radius: 8px;\n    padding: 12px;\n    font-size: 12px;\n  }\n  .track-card span { display: block; color: #94a3b8; font-size: 10px; margin-top: 4px; }\n\n  .spa-player {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 12px 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 12px;\n  }\n  .player-track { color: #38bdf8; font-weight: bold; }\n  .player-controls { display: flex; gap: 14px; font-size: 14px; cursor: pointer; }\n</style>\n\n<div class=\"spa-app\">\n  <header class=\"spa-navbar\">\n    <div class=\"brand\">🎵 CyberPulse SPA</div>\n    <div class=\"nav-menu\">\n      <span>Home</span>\n      <span>Discover</span>\n      <span>Radio</span>\n      <span>Library</span>\n    </div>\n    <div class=\"user-deck\">\n      <span class=\"vip-pill\">⭐ VIP PASS</span>\n      <span>🎧 Alex</span>\n    </div>\n  </header>\n\n  <div class=\"spa-body\">\n    <aside class=\"spa-sidebar\">\n      <h4>Playlists</h4>\n      <div>⚡ Synthwave</div>\n      <div>🚀 Lo-Fi Chill</div>\n      <div>🎮 Gaming OST</div>\n      <div>💎 Cyber Beats</div>\n    </aside>\n\n    <main class=\"spa-content\">\n      <div class=\"hero-banner\">\n        <h3>⚡ Live Cyber Station</h3>\n        <p>Streaming high-tempo coding synth to 12,400 listeners worldwide.</p>\n      </div>\n\n      <div class=\"track-row\">\n        <div class=\"track-card\"><b>Neon Horizon</b><span>3:42 • CyberBoy</span></div>\n        <div class=\"track-card\"><b>Laser Grid</b><span>4:15 • PixelQueen</span></div>\n        <div class=\"track-card\"><b>Dark Orbit</b><span>2:58 • SynthLord</span></div>\n      </div>\n    </main>\n  </div>\n\n  <footer class=\"spa-player\">\n    <div class=\"player-track\">▶ Now Playing: Neon Horizon (3:42)</div>\n    <div class=\"player-controls\">\n      <span>⏮️</span>\n      <span>⏯️</span>\n      <span>⏭️</span>\n    </div>\n    <div class=\"player-vol\">🔊 85%</div>\n  </footer>\n</div>"
    },
    targetCode: {
      en: "<style>\n  * { box-sizing: border-box; }\n  .spa-app {\n    background: #0b0f19;\n    border: 1px solid #1e293b;\n    border-radius: 16px;\n    padding: 16px;\n    color: #e2e8f0;\n    font-family: system-ui, sans-serif;\n  }\n  .spa-navbar {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 14px 20px;\n    margin-bottom: 16px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .brand { font-size: 16px; font-weight: 800; color: #38bdf8; }\n  .nav-menu { display: flex; gap: 16px; font-size: 13px; color: #94a3b8; }\n  .nav-menu span:hover { color: #38bdf8; cursor: pointer; }\n  .user-deck { display: flex; align-items: center; gap: 10px; font-size: 12px; }\n  .vip-pill { background: #38bdf8; color: #0b0f19; font-weight: bold; padding: 4px 10px; border-radius: 6px; }\n\n  .spa-body {\n    display: flex;\n    gap: 16px;\n    margin-bottom: 16px;\n  }\n  .spa-sidebar {\n    width: 170px;\n    background: #111827;\n    border-radius: 12px;\n    padding: 14px;\n    font-size: 12px;\n  }\n  .spa-sidebar h4 { margin: 0 0 10px 0; color: #38bdf8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }\n  .spa-sidebar div { padding: 6px 0; color: #94a3b8; cursor: pointer; }\n  .spa-sidebar div:hover { color: white; }\n\n  .spa-content {\n    flex: 1;\n    background: #111827;\n    border-radius: 12px;\n    padding: 16px;\n  }\n  .hero-banner {\n    background: linear-gradient(135deg, #1e1b4b, #312e81);\n    border: 1px solid #4338ca;\n    border-radius: 10px;\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n  .hero-banner h3 { margin: 0 0 6px 0; color: #a5b4fc; }\n  .hero-banner p { margin: 0; font-size: 12px; color: #cbd5e1; }\n\n  .track-row {\n    display: flex;\n    gap: 12px;\n  }\n  .track-card {\n    flex: 1;\n    background: #1e293b;\n    border-radius: 8px;\n    padding: 12px;\n    font-size: 12px;\n  }\n  .track-card span { display: block; color: #94a3b8; font-size: 10px; margin-top: 4px; }\n\n  .spa-player {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 12px 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 12px;\n  }\n  .player-track { color: #38bdf8; font-weight: bold; }\n  .player-controls { display: flex; gap: 14px; font-size: 14px; cursor: pointer; }\n</style>\n\n<div class=\"spa-app\">\n  <header class=\"spa-navbar\">\n    <div class=\"brand\">🎵 CyberPulse SPA</div>\n    <div class=\"nav-menu\">\n      <span>Home</span>\n      <span>Discover</span>\n      <span>Radio</span>\n      <span>Library</span>\n    </div>\n    <div class=\"user-deck\">\n      <span class=\"vip-pill\">⭐ VIP PASS</span>\n      <span>🎧 Alex</span>\n    </div>\n  </header>\n\n  <div class=\"spa-body\">\n    <aside class=\"spa-sidebar\">\n      <h4>Playlists</h4>\n      <div>⚡ Synthwave</div>\n      <div>🚀 Lo-Fi Chill</div>\n      <div>🎮 Gaming OST</div>\n      <div>💎 Cyber Beats</div>\n    </aside>\n\n    <main class=\"spa-content\">\n      <div class=\"hero-banner\">\n        <h3>⚡ Live Cyber Station</h3>\n        <p>Streaming high-tempo coding synth to 12,400 listeners worldwide.</p>\n      </div>\n\n      <div class=\"track-row\">\n        <div class=\"track-card\"><b>Neon Horizon</b><span>3:42 • CyberBoy</span></div>\n        <div class=\"track-card\"><b>Laser Grid</b><span>4:15 • PixelQueen</span></div>\n        <div class=\"track-card\"><b>Dark Orbit</b><span>2:58 • SynthLord</span></div>\n      </div>\n    </main>\n  </div>\n\n  <footer class=\"spa-player\">\n    <div class=\"player-track\">▶ Now Playing: Neon Horizon (3:42)</div>\n    <div class=\"player-controls\">\n      <span>⏮️</span>\n      <span>⏯️</span>\n      <span>⏭️</span>\n    </div>\n    <div class=\"player-vol\">🔊 85%</div>\n  </footer>\n</div>",
      uz: "<style>\n  * { box-sizing: border-box; }\n  .spa-app {\n    background: #0b0f19;\n    border: 1px solid #1e293b;\n    border-radius: 16px;\n    padding: 16px;\n    color: #e2e8f0;\n    font-family: system-ui, sans-serif;\n  }\n  .spa-navbar {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 14px 20px;\n    margin-bottom: 16px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .brand { font-size: 16px; font-weight: 800; color: #38bdf8; }\n  .nav-menu { display: flex; gap: 16px; font-size: 13px; color: #94a3b8; }\n  .nav-menu span:hover { color: #38bdf8; cursor: pointer; }\n  .user-deck { display: flex; align-items: center; gap: 10px; font-size: 12px; }\n  .vip-pill { background: #38bdf8; color: #0b0f19; font-weight: bold; padding: 4px 10px; border-radius: 6px; }\n\n  .spa-body {\n    display: flex;\n    gap: 16px;\n    margin-bottom: 16px;\n  }\n  .spa-sidebar {\n    width: 170px;\n    background: #111827;\n    border-radius: 12px;\n    padding: 14px;\n    font-size: 12px;\n  }\n  .spa-sidebar h4 { margin: 0 0 10px 0; color: #38bdf8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }\n  .spa-sidebar div { padding: 6px 0; color: #94a3b8; cursor: pointer; }\n  .spa-sidebar div:hover { color: white; }\n\n  .spa-content {\n    flex: 1;\n    background: #111827;\n    border-radius: 12px;\n    padding: 16px;\n  }\n  .hero-banner {\n    background: linear-gradient(135deg, #1e1b4b, #312e81);\n    border: 1px solid #4338ca;\n    border-radius: 10px;\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n  .hero-banner h3 { margin: 0 0 6px 0; color: #a5b4fc; }\n  .hero-banner p { margin: 0; font-size: 12px; color: #cbd5e1; }\n\n  .track-row {\n    display: flex;\n    gap: 12px;\n  }\n  .track-card {\n    flex: 1;\n    background: #1e293b;\n    border-radius: 8px;\n    padding: 12px;\n    font-size: 12px;\n  }\n  .track-card span { display: block; color: #94a3b8; font-size: 10px; margin-top: 4px; }\n\n  .spa-player {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 12px 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 12px;\n  }\n  .player-track { color: #38bdf8; font-weight: bold; }\n  .player-controls { display: flex; gap: 14px; font-size: 14px; cursor: pointer; }\n</style>\n\n<div class=\"spa-app\">\n  <header class=\"spa-navbar\">\n    <div class=\"brand\">🎵 CyberPulse SPA</div>\n    <div class=\"nav-menu\">\n      <span>Home</span>\n      <span>Discover</span>\n      <span>Radio</span>\n      <span>Library</span>\n    </div>\n    <div class=\"user-deck\">\n      <span class=\"vip-pill\">⭐ VIP PASS</span>\n      <span>🎧 Alex</span>\n    </div>\n  </header>\n\n  <div class=\"spa-body\">\n    <aside class=\"spa-sidebar\">\n      <h4>Playlists</h4>\n      <div>⚡ Synthwave</div>\n      <div>🚀 Lo-Fi Chill</div>\n      <div>🎮 Gaming OST</div>\n      <div>💎 Cyber Beats</div>\n    </aside>\n\n    <main class=\"spa-content\">\n      <div class=\"hero-banner\">\n        <h3>⚡ Live Cyber Station</h3>\n        <p>Streaming high-tempo coding synth to 12,400 listeners worldwide.</p>\n      </div>\n\n      <div class=\"track-row\">\n        <div class=\"track-card\"><b>Neon Horizon</b><span>3:42 • CyberBoy</span></div>\n        <div class=\"track-card\"><b>Laser Grid</b><span>4:15 • PixelQueen</span></div>\n        <div class=\"track-card\"><b>Dark Orbit</b><span>2:58 • SynthLord</span></div>\n      </div>\n    </main>\n  </div>\n\n  <footer class=\"spa-player\">\n    <div class=\"player-track\">▶ Now Playing: Neon Horizon (3:42)</div>\n    <div class=\"player-controls\">\n      <span>⏮️</span>\n      <span>⏯️</span>\n      <span>⏭️</span>\n    </div>\n    <div class=\"player-vol\">🔊 85%</div>\n  </footer>\n</div>"
    },
    targetDescription: {
      en: 'A complete CyberPulse Music SPA with an organized topbar, navigation links, sidebar playlists, track cards, and bottom player deck.',
      uz: 'Tartibli navigatsiya paneli, yon menyu, qo\'shiqlar qatori va pastki pleyerga ega to\'liq CyberPulse Musiqiy SPA sahifasi.'
    },
    anatomy: [
      {
        part: 'display: flex;',
        role: { en: 'Flex Activation', uz: 'Flexni faollashtirish' },
        explanation: { en: 'Tells the parent container: "Snap all children into a horizontal row!"', uz: 'Ona qutiga: "Barcha bolalarni gorizontal qatorga tiz!" deb buyuradi.' },
        effect: { en: 'Snaps items side-by-side', uz: 'Elementlarni yonma-yon teradi' }
      },
      {
        part: 'justify-content: space-between;',
        role: { en: 'Distribute Across Width', uz: 'Kenglik bo\'yicha taqsimlash' },
        explanation: { en: 'Pushes the first item to the start edge and the last item to the end edge with even space between.', uz: 'Birinchi elementni chap chetga, oxirgisini o\'ng chetga suradi.' },
        effect: { en: 'Max separation across horizontal axis', uz: 'Chetlarga surib o\'rtani bo\'shatadi' }
      },
      {
        part: 'align-items: center;',
        role: { en: 'Vertical Centering', uz: 'Vertikal tekislash' },
        explanation: { en: 'Centers all children along the cross-axis so tall buttons and short text align smoothly.', uz: 'Barcha elementlarni vertikal markaz chizig\'iga tekislaydi.' },
        effect: { en: 'Perfect vertical alignment', uz: 'Mukammal vertikal tekislanish' }
      }
    ],
    listOfTags: [
      { code: 'display: flex;', name: { en: 'Flex Container', uz: 'Flex Idish' }, description: { en: 'Lines up child items horizontally in one unified row', uz: 'Ichidagi bolalarni bir qatorga yonma-yon teradi' } },
      { code: 'justify-content: space-between;', name: { en: 'Space Between', uz: 'Chetlarga surish' }, description: { en: 'Distributes items with maximum space between edges', uz: 'Elementlarni chetlarga tarqatadi' } },
      { code: 'align-items: center;', name: { en: 'Center Alignment', uz: 'Markazga tekislash' }, description: { en: 'Vertically aligns items in the exact center line', uz: 'Elementlarni balandlik bo\'yicha markazga suradi' } }
    ],
    tagShowcase: [
      { tag: 'display: flex;', meaning: { en: 'Snap into row', uz: 'Qatorga tizish' } },
      { tag: 'justify-content: space-between;', meaning: { en: 'Push to opposite edges', uz: 'Chetlarga surish' } },
      { tag: 'align-items: center;', meaning: { en: 'Center vertically', uz: 'Vertikal markazlash' } }
    ],
    quickTags: ['display: flex;', 'justify-content: space-between;', 'align-items: center;'],
    challenge: {
      mission: {
        en: 'Build the CyberPulse Music SPA! Add display: flex;, justify-content: space-between;, and align-items: center; to .spa-navbar to assemble the web app topbar!',
        uz: 'CyberPulse Musiqa SPA ilovasini quring! .spa-navbar ga display: flex;, justify-content: space-between; va align-items: center; berib navigatsiya panelini terib chiqing!'
      },
      hint: {
        en: 'Inside .spa-navbar { ... }, add display: flex;, justify-content: space-between;, and align-items: center;',
        uz: '.spa-navbar { ... } ichiga display: flex;, justify-content: space-between; va align-items: center; yozing.'
      },
      rules: [
        {
          type: 'custom',
          check: (code) => /\.spa-navbar\s*\{[^}]*display\s*:\s*flex/i.test(code),
          message: 'Add display: flex; to .spa-navbar!'
        },
        {
          type: 'custom',
          check: (code) => /\.spa-navbar\s*\{[^}]*justify-content\s*:\s*space-between/i.test(code),
          message: 'Add justify-content: space-between; to .spa-navbar!'
        },
        {
          type: 'custom',
          check: (code) => /\.spa-navbar\s*\{[^}]*align-items\s*:\s*center/i.test(code),
          message: 'Add align-items: center; to .spa-navbar!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'A music app navbar is like a dashboard in a spaceship: logo on the left, radio stations in the center, and commander status on the right.',
        uz: 'Musiqa ilovasi paneli kosmik kema asboblar paneliga o\'xshaydi: chapda logotip, o\'rtada kanallar, o\'ngda esa komandir ma\'lumotlari.'
      },
      discussionQuestions: [
        'Why do modern SPAs (Spotify, Netflix, YouTube) use Flexbox for topbars and player rows?',
        'How does align-items: center prevent buttons and logos from looking crooked?'
      ],
      commonMistakes: [
        'Writing display: flex on individual buttons instead of the parent navbar container',
        'Confusing justify-content (horizontal) with align-items (vertical)'
      ],
      funActivity: 'Inspect Spotify or YouTube Web: open DevTools and toggle display: flex on the header!'
    }
  },

  // ==========================================
  // THEME 10: Buttons
  // ==========================================
  {
    id: 'theme-10-buttons',
    module: 'html-core',
    title: {
      en: 'Theme 10: Buttons & Hover Glows (:hover)',
      uz: '10-Mavzu: Tugmalar va Sichqoncha Effekti (:hover)'
    },
    icon: '🔘',
    tag: '<button>, :hover, cursor: pointer',
    humanIntro: {
      whatIsIt: {
        en: 'Buttons are the steering wheel of the internet! When kids press a button, games launch and rockets blast off.',
        uz: 'Tugmalar — butun internetning boshqaruv rulidir! Tugma bosilganda o\'yinlar ochiladi va raketalar uchadi.'
      },
      whatIsATag: {
        en: '`<button>` creates the clickable surface, and `:hover` adds magic visual feedback when your mouse glides over it!',
        uz: '`<button>` bosiladigan tugma yasaydi, `:hover` esa sichqoncha ustiga kelganda rangini porlatadi!'
      }
    },
    summary: {
      en: 'Build interactive buttons that light up and lift off when hovered over.',
      uz: 'Sichqoncha borganda yorishib ko\'tariladigan interaktiv tugmalar yarating.'
    },
    story: {
      en: 'A plain button is okay, but a button with :hover feels alive like a real video game control!',
      uz: 'Oddiy tugma ham yaxshi, lekin :hover bilan u haqiqiy video o\'yindagidek jonlanadi!'
    },
    initialCode: `<style>
  .magic-btn {
    background: #7c6cf7;
    color: white;
    border: none;
    padding: 14px 28px;
    font-size: 18px;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
  }
  /* Step 2: Add .magic-btn:hover power below! */
</style>

<div style="text-align: center; padding: 40px;">
  <!-- Step 1: Put the button here using <button class="magic-btn">✨ Turbo Boost</button> -->

</div>`,
    targetCode: `<style>
  .magic-btn {
    background: #7c6cf7;
    color: white;
    border: none;
    padding: 14px 28px;
    font-size: 18px;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .magic-btn:hover {
    background: #2dd4bf;
    transform: scale(1.1);
  }
</style>

<div style="text-align: center; padding: 40px;">
  <button class="magic-btn">✨ Turbo Boost</button>
</div>`,
    targetDescription: {
      en: 'A stylish button placed from scratch that turns teal (#2dd4bf) and pops 10% larger (scale(1.1)) on hover.',
      uz: 'Noldan qo\'yilgan va hover bo\'lganda yashil-ko\'k (#2dd4bf) rangga kirib, 10% kattalashadigan ajoyib tugma.'
    },
    anatomy: [
      {
        part: '<button> ... </button>',
        role: { en: 'Button Element', uz: 'Tugma elementi' },
        explanation: { en: 'Creates an interactive clickable button in HTML.', uz: 'HTML da bosiladigan tugma yaratadi.' },
        effect: { en: 'Clickable button', uz: 'Bosiladigan tugma' }
      },
      {
        part: '.magic-btn:hover',
        role: { en: 'Hover State', uz: 'Hover holati' },
        explanation: { en: 'The colon :hover applies special styles ONLY when the mouse pointer is hovering.', uz: 'Faqat sichqoncha ustiga kelganda qo\'llanadigan maxsus stil.' },
        effect: { en: 'Styles on mouseover', uz: 'Sichqoncha kelganda o\'zgaradi' }
      }
    ],
    listOfTags: [
      { code: '<button> ... </button>', name: 'Button', description: 'Creates an interactive clickable button', exampleHtml: '<button>Press Me</button>' },
      { code: ':hover', name: 'Hover State', description: 'Triggers animation or color shifts when hovering over an element', exampleHtml: '.btn:hover { background: cyan; }' },
      { code: 'cursor: pointer;', name: 'Pointer Cursor', description: 'Changes mouse arrow into a clicking hand', exampleHtml: 'cursor: pointer;' }
    ],
    tagShowcase: [
      { tag: '<button>', meaning: 'Clickable button' },
      { tag: ':hover', meaning: 'Mouse hover trigger' },
      { tag: 'scale(1.1)', meaning: '10% zoom pop' }
    ],
    quickTags: ['<button class="magic-btn">', '</button>', ':hover { background: #2dd4bf; }', 'transform: scale(1.1);'],
    challenge: {
      mission: {
        en: 'Put a <button class="magic-btn">✨ Turbo Boost</button> in the card, and add a .magic-btn:hover rule with background: #2dd4bf; and transform: scale(1.1);!',
        uz: 'Kartochkaga <button class="magic-btn">✨ Turbo Boost</button> tugmasini qo\'ying va CSS da .magic-btn:hover uchun background: #2dd4bf; hamda transform: scale(1.1); yozing!'
      },
      hint: {
        en: 'Put <button class="magic-btn">✨ Turbo Boost</button> in the div, then in CSS write .magic-btn:hover { background: #2dd4bf; transform: scale(1.1); }',
        uz: 'div ichiga <button class="magic-btn">✨ Turbo Boost</button> qo\'ying va CSS da .magic-btn:hover { background: #2dd4bf; transform: scale(1.1); } yozing.'
      },
      rules: [
        {
          type: 'hasTag',
          tag: 'button',
          message: 'Put a <button> tag on the page!'
        },
        {
          type: 'hasAttribute',
          tag: 'button',
          attribute: 'class',
          message: 'Give the button class="magic-btn"!'
        },
        {
          type: 'hasCssProperty',
          property: 'background',
          valuePattern: '#2dd4bf',
          message: 'Set background: #2dd4bf on hover!'
        },
        {
          type: 'hasCssProperty',
          property: 'transform',
          valuePattern: 'scale(1.1)',
          message: 'Set transform: scale(1.1) on hover!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'An arcade button that lights up when you touch it.',
        uz: 'Barmoq bilan teginganda yorishuvchi o\'yin avtomati tugmasi.'
      },
      discussionQuestions: [
        { en: 'Why is :hover called a pseudo-class? (Because it only exists when the user does something!)', uz: 'Nega :hover soxta-klass deyiladi? (Chunki u faqat foydalanuvchi sichqonchani olib borganda ishlaydi!)' }
      ],
      commonMistakes: [
        { en: 'Writing hover without the colon (must be :hover)', uz: 'Ikki nuqtasiz shunchaki hover deb yozish (:hover bo\'lishi shart)' }
      ],
      funActivity: {
        en: 'Change scale(1.1) to scale(1.3) to watch the button jump huge!',
        uz: 'scale(1.1) ni scale(1.3) ga o\'zgartirib, tugma sakrab chiqishini tomosha qiling!'
      }
    }
  },

  // ==========================================
  // THEME 11: Links & Web Portals
  // ==========================================
  {
    id: 'theme-11-links',
    module: 'html-core',
    title: {
      en: 'Theme 11: Links & Web Portals (Portals)',
      uz: '11-Mavzu: Havolalar va Sayt Portallari (Portallar)'
    },
    icon: '🌐',
    tag: '<a href="...">, target="_blank"',
    humanIntro: {
      whatIsIt: {
        en: 'A link is a secret portal that teleports you to another universe on the web with a single click!',
        uz: 'Havola (link) — bu bir marta bosish bilan sizni butunlay boshqa veb-sahifaga teleportatsiya qiluvchi sehrli portal!'
      },
      whatIsATag: {
        en: '`<a>` stands for Anchor. The `href` attribute tells the browser the exact destination URL to visit.',
        uz: '`<a>` tegi Anchor (Langar) so\'zidan olingan. `href` xususiyati esa boriladigan manzilni bildiradi.'
      }
    },
    summary: {
      en: 'Turn words and buttons into teleportation links that open web pages in new tabs.',
      uz: 'So\'zlar va tugmalarni boshqa sahifalarga eltuvchi havolalarga aylantiring.'
    },
    story: {
      en: 'The entire World Wide Web is woven together by millions of anchor tags linking every site!',
      uz: 'Butun jahon o\'rgimchak to\'ri aynan millionlab <a> teglari orqali bir-biriga bog\'langan!'
    },
    initialCode: `<p>
  Welcome to my coding realm! Check out my favorite website:
</p>
<p>
  <!-- Turn this text into a link! -->
  Visit Wikipedia to learn anything!
</p>`,
    targetCode: `<p>
  Welcome to my coding realm! Check out my favorite website:
</p>
<p>
  Visit <a href="https://wikipedia.org" target="_blank">Wikipedia</a> to learn anything!
</p>`,
    targetDescription: {
      en: 'The word "Wikipedia" wrapped in an <a> tag pointing to https://wikipedia.org that opens in a new tab.',
      uz: '"Wikipedia" so\'zi <a> tegi bilan https://wikipedia.org manziliga yo\'naltirilgan havola.'
    },
    anatomy: [
      {
        part: '<a href="...">',
        role: { en: 'Opening Anchor', uz: 'Ochuvchi Langar tegi' },
        explanation: { en: 'href means "Hypertext Reference" - the address you are teleporting to.', uz: 'href — bu boriladigan saytning aniq manzili.' },
        effect: { en: 'Makes text clickable', uz: 'Matnni bosiladigan havola qiladi' }
      },
      {
        part: 'target="_blank"',
        role: { en: 'New Tab Flag', uz: 'Yangi vkladka buyrug\'i' },
        explanation: { en: 'Opens the webpage in a brand new tab so kids never lose their current page.', uz: 'Saytni yangi vkladkada ochadi, asosiy sahifa yopilib ketmaydi.' },
        effect: { en: 'Opens in new tab', uz: 'Yangi tabda ochadi' }
      }
    ],
    listOfTags: [
      { code: '<a href="URL"> ... </a>', name: { en: 'Anchor Tag', uz: 'Havola tegi' }, description: { en: 'Creates a hyperlink to another webpage or file', uz: 'Boshqa veb-sahifaga havola yaratadi' } },
      { code: 'target="_blank"', name: { en: 'Blank Target', uz: 'Yangi vkladka' }, description: { en: 'Instructs the browser to open the link in a fresh new tab', uz: 'Havolani yangi toza tabda ochadi' } }
    ],
    tagShowcase: [
      { tag: '<a href="...">', meaning: { en: 'Web portal', uz: 'Sayt portali' } },
      { tag: 'target="_blank"', meaning: { en: 'New tab', uz: 'Yangi oyna' } }
    ],
    quickTags: ['<a href="https://wikipedia.org" target="_blank">', '</a>'],
    challenge: {
      mission: {
        en: 'Wrap the word "Wikipedia" in an <a href="https://wikipedia.org" target="_blank"> tag!',
        uz: '"Wikipedia" so\'zini <a href="https://wikipedia.org" target="_blank"> tegi bilan o\'rab oling!'
      },
      hint: {
        en: 'Use the <a> tag with href pointing to the website URL and target="_blank".',
        uz: '<a href="https://wikipedia.org" target="_blank">Wikipedia</a> deb yozing.'
      },
      rules: [
        {
          type: 'hasTag',
          tag: 'a',
          message: 'Add an <a> tag!'
        },
        {
          type: 'hasAttribute',
          tag: 'a',
          attribute: 'href',
          valuePattern: /wikipedia/i,
          message: 'Set href to https://wikipedia.org!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'A portal door like in Minecraft or Monsters Inc.',
        uz: 'Minecraft yoki multfilmlardagi boshqa dunyoga ochiluvchi sehrli eshik.'
      },
      discussionQuestions: [
        { en: 'What does href stand for? (Hypertext Reference)', uz: 'href nima degani? (Hypertext Reference - gipermatn manzili)' }
      ],
      commonMistakes: [
        { en: 'Forgetting https:// in the address', uz: 'Manzilda https:// ni unutib qoldirish' }
      ],
      funActivity: {
        en: 'Make an emoji link like 🚀 that teleports to NASA!',
        uz: '🚀 emojisini NASA saytiga eltuvchi havolaga aylantiring!'
      }
    }
  },

  // ==========================================
  // THEME 12: Bullet & Numbered Lists
  // ==========================================
  {
    id: 'theme-12-lists',
    module: 'html-core',
    title: {
      en: 'Theme 12: Bullet & Numbered Lists (Lists)',
      uz: '12-Mavzu: Ro\'yxatlar (Tartibli va Tartibsiz)'
    },
    icon: '📝',
    tag: '<ul>, <ol>, <li>',
    humanIntro: {
      whatIsIt: {
        en: 'Lists keep your thoughts organized like an adventurer quest checklist or recipe!',
        uz: 'Ro\'yxatlar vazifalaringizni xuddi o\'yindagi kvestlar kabi chiroyli tartibga soladi!'
      },
      whatIsATag: {
        en: '`<ul>` gives bullet dots, `<ol>` gives numbers (1, 2, 3), and every single item inside is wrapped in `<li>`!',
        uz: '`<ul>` nuqtali ro\'yxat, `<ol>` raqamli ro\'yxat (1, 2, 3) beradi, har bir qator esa `<li>` ichiga olinadi!'
      }
    },
    summary: {
      en: 'Organize items neatly into bullet point or numbered lists using ul, ol, and li tags.',
      uz: 'Elementlarni ul, ol va li teglari yordamida nuqtali yoki raqamli qilib tartiblang.'
    },
    story: {
      en: 'Every great video game has an inventory list. HTML lists make clean inventories!',
      uz: 'Har qanday sarguzasht o\'yinida xaltadagi narsalar ro\'yxati bo\'ladi. HTML ro\'yxatlari buni oson qiladi!'
    },
    initialCode: `<p>My Secret Spy Gear:</p>
<!-- Turn into a bullet list using <ul> and <li>! -->
Laser Watch
Invisible Cloak
Jetpack Shoes`,
    targetCode: `<p>My Secret Spy Gear:</p>
<ul>
  <li>Laser Watch</li>
  <li>Invisible Cloak</li>
  <li>Jetpack Shoes</li>
</ul>`,
    targetDescription: {
      en: 'A neat bullet-point list containing the 3 spy items wrapped in <li> inside <ul>.',
      uz: '<ul> ichida 3 ta <li> tegi bilan chiroyli nuqtali ro\'yxat qilingan ayg\'oqchi jihozlari.'
    },
    anatomy: [
      {
        part: '<ul> ... </ul>',
        role: { en: 'Unordered List', uz: 'Tartibsiz ro\'yxat' },
        explanation: { en: 'Creates a bullet-point list container.', uz: 'Nuqtali ro\'yxat idishini yaratadi.' },
        effect: { en: 'Bullet list container', uz: 'Nuqtali ro\'yxat' }
      },
      {
        part: '<li>Item</li>',
        role: { en: 'List Item', uz: 'Ro\'yxat elementi' },
        explanation: { en: 'Defines each individual line item inside the list.', uz: 'Ro\'yxat ichidagi har bir qatorni bildiradi.' },
        effect: { en: 'One bullet line', uz: 'Bitta ro\'yxat qatori' }
      }
    ],
    listOfTags: [
      { code: '<ul> ... </ul>', name: { en: 'Unordered List', uz: 'Nuqtali Ro\'yxat' }, description: { en: 'Container for bullet-point list items', uz: 'Nuqtali ro\'yxat yaratuvchi ona teg' } },
      { code: '<ol> ... </ol>', name: { en: 'Ordered List', uz: 'Raqamli Ro\'yxat' }, description: { en: 'Container for automatically numbered (1, 2, 3) list items', uz: 'Avtomatik raqamlanuvchi ro\'yxat ona tegi' } },
      { code: '<li> ... </li>', name: { en: 'List Item', uz: 'Ro\'yxat qatori' }, description: { en: 'Each individual bullet or numbered item inside ul or ol', uz: 'ul yoki ol ichidagi har bir alohida qator' } }
    ],
    tagShowcase: [
      { tag: '<ul>', meaning: { en: 'Bullet list', uz: 'Nuqtali ro\'yxat' } },
      { tag: '<ol>', meaning: { en: 'Numbered 1, 2, 3', uz: 'Raqamli ro\'yxat' } },
      { tag: '<li>', meaning: { en: 'Single item line', uz: 'Alohida qator' } }
    ],
    quickTags: ['<ul>', '<li>', '</li>', '</ul>'],
    challenge: {
      mission: {
        en: 'Wrap the 3 items in <li> and put them inside a <ul> list container!',
        uz: '3 ta jihozni <li> bilan o\'rab, ularni <ul> ichiga joylashtiring!'
      },
      hint: {
        en: 'Start an unordered list with <ul>, and place each secret item inside its own <li> tag.',
        uz: '<ul> ichiga 3 ta <li> yozing.'
      },
      rules: [
        {
          type: 'hasTag',
          tag: 'ul',
          message: 'Add an <ul> tag!'
        },
        {
          type: 'hasTag',
          tag: 'li',
          message: 'Add <li> items!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'A grocery shopping list or recipe ingredient list.',
        uz: 'Bozorlik ro\'yxati yoki taom tayyorlash retsepti.'
      },
      discussionQuestions: [
        { en: 'What is the difference between ul (bullets) and ol (numbers)?', uz: 'ul (nuqtali) va ol (raqamli) ning farqi nimada?' }
      ],
      commonMistakes: [
        { en: 'Putting text inside ul without an li tag', uz: 'ul ichiga li tegini qo\'ymasdan matn yozish' }
      ],
      funActivity: {
        en: 'Change ul to ol and watch the numbers 1, 2, 3 appear automatically!',
        uz: 'ul ni ol ga almashtiring va raqamlar avtomatik chiqishini ko\'ring!'
      }
    }
  },

  // ==========================================
  // THEME 13: Colors & Gradients
  // ==========================================
  {
    id: 'theme-13-colors',
    module: 'css-core',
    title: {
      en: 'Theme 13: Colors & Gradients (HEX & Linear)',
      uz: '13-Mavzu: Ranglar va Gradientlar (HEX va Chiziqli)'
    },
    icon: '🌈',
    tag: 'color, background: linear-gradient()',
    humanIntro: {
      whatIsIt: {
        en: 'Colors bring emotion to the web! You can use common names, HEX codes with hashtags (#ff757f), or smooth color gradients.',
        uz: 'Ranglar sahifaga joziba bag\'ishlaydi! Oddiy nomlar, panjara (#) bilan HEX kodlari yoki silliq gradientlardan foydalanishingiz mumkin.'
      },
      whatIsATag: {
        en: '`linear-gradient(45deg, #7c6cf7, #ff757f)` blends two colors smoothly across the screen like a tropical sunset!',
        uz: '`linear-gradient(45deg, #7c6cf7, #ff757f)` ikki rangni xuddi quyosh botishi kabi bir-biriga silliq qo\'shadi!'
      }
    },
    summary: {
      en: 'Master hex color codes and create breathtaking multi-color gradient backgrounds.',
      uz: 'HEX rang kodlarini o\'rganing va chiroyli gradient fonlar yarating.'
    },
    story: {
      en: 'Gradients make cards and banners feel modern, vibrant, and futuristic!',
      uz: 'Gradientlar kartochkalarni zamonaviy va yorqin ko\'rsatadi!'
    },
    initialCode: `<style>
  .sunset-card {
    width: 260px;
    height: 160px;
    border-radius: 16px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    /* Add gradient background below! */
    background: gray;
  }
</style>

<div style="display: flex; justify-content: center; padding: 20px;">
  <div class="sunset-card">🌅 Sunset Vibe</div>
</div>`,
    targetCode: `<style>
  .sunset-card {
    width: 260px;
    height: 160px;
    border-radius: 16px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    background: linear-gradient(135deg, #ff757f, #7c6cf7);
  }
</style>

<div style="display: flex; justify-content: center; padding: 20px;">
  <div class="sunset-card">🌅 Sunset Vibe</div>
</div>`,
    targetDescription: {
      en: 'A card painted with a gorgeous diagonal gradient from coral pink (#ff757f) into purple (#7c6cf7).',
      uz: 'Qizil-pushtidan (#ff757f) binafsha (#7c6cf7) rangga silliq o\'tuvchi diagonal gradientli kartochka.'
    },
    anatomy: [
      {
        part: 'linear-gradient(135deg, ...)',
        role: { en: 'Gradient Angle', uz: 'Gradient burchagi' },
        explanation: { en: 'The angle (135deg) dictates which corner the colors blend across.', uz: 'Ranglar qaysi burchakka qarab oqishini belgilaydi.' },
        effect: { en: 'Diagonal blend', uz: 'Diagonal rang o\'tishi' }
      },
      {
        part: '#ff757f, #7c6cf7',
        role: { en: 'Color Stops', uz: 'Rang nuqtalari' },
        explanation: { en: 'The starting and ending colors in HEX format.', uz: 'Boshlang\'ich va yakuniy ranglarning HEX kodlari.' },
        effect: { en: 'Smooth blend between colors', uz: 'Ikki rangning silliq uyg\'unligi' }
      }
    ],
    listOfTags: [
      { code: 'background: linear-gradient(...)', name: { en: 'Linear Gradient', uz: 'Chiziqli Gradient' }, description: { en: 'Blends two or more colors smoothly across an angle', uz: 'Ikki yoki undan ko\'p rangni bir-biriga silliq qorishtiradi' } },
      { code: 'color: #hexCode;', name: { en: 'Text Color', uz: 'Matn rangi' }, description: { en: 'Changes the foreground color of letters', uz: 'Harflarning rangini o\'zgartiradi' } }
    ],
    tagShowcase: [
      { tag: 'linear-gradient(...)', meaning: { en: 'Multi-color blend', uz: 'Ranglar uyg\'unligi' } },
      { tag: '#ff757f', meaning: { en: 'Coral HEX', uz: 'Pushti-qizil HEX' } }
    ],
    quickTags: ['background: linear-gradient(135deg, #ff757f, #7c6cf7);'],
    challenge: {
      mission: {
        en: 'Replace background: gray; with a linear-gradient from #ff757f to #7c6cf7!',
        uz: 'background: gray; ni linear-gradient(135deg, #ff757f, #7c6cf7) ga almashtiring!'
      },
      hint: {
        en: 'Use linear-gradient(...) inside the background property with an angle and two colors.',
        uz: 'background: linear-gradient(135deg, #ff757f, #7c6cf7); deb yozing.'
      },
      rules: [
        {
          type: 'hasCssProperty',
          property: 'background',
          valuePattern: /linear-gradient/i,
          message: 'Apply linear-gradient to background!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'Mixing two colors of watercolor paint on paper until they blend.',
        uz: 'Qog\'ozda ikki xil akvarel bo\'yog\'ini bir-biriga qo\'shib yuvish.'
      },
      discussionQuestions: [
        { en: 'What does the deg in 135deg mean? (Degrees of rotation!)', uz: '135deg dagi deg nimani bildiradi? (Aylanish burchagi gradusi!)' }
      ],
      commonMistakes: [
        { en: 'Forgetting the closing parenthesis after linear-gradient', uz: 'linear-gradient dan keyin qavsni yopishni unutish' }
      ],
      funActivity: {
        en: 'Try adding a 3rd color stop like #2dd4bf for a 3-color rainbow!',
        uz: '3-rang sifatida #2dd4bf ni ham qo\'shib ko\'ring va kamalak hosil qiling!'
      }
    }
  },

  // ==========================================
  // THEME 14: Fonts & Neon Glows
  // ==========================================
  {
    id: 'theme-14-fonts',
    module: 'css-core',
    title: {
      en: 'Theme 14: Fonts & Neon Glows (text-shadow)',
      uz: '14-Mavzu: Shriftlar va Neon Nurlari (text-shadow)'
    },
    icon: '✨',
    tag: 'font-family, text-shadow',
    humanIntro: {
      whatIsIt: {
        en: 'Typography lets your web page speak with power, and neon glows make it look like a futuristic arcade game!',
        uz: 'Shriftlar sahifangizga salobat beradi, neon nurlari esa uni kelajak o\'yinlari kabi yoritadi!'
      },
      whatIsATag: {
        en: '`text-shadow: 0 0 10px #2dd4bf;` casts a glowing aura of light directly behind each letter.',
        uz: '`text-shadow: 0 0 10px #2dd4bf;` har bir harf ortidan porloq neon nurini taratadi.'
      }
    },
    summary: {
      en: 'Change font sizing and project radiant neon glow effects behind your headings.',
      uz: 'Shrift o\'lchamini o\'zgartiring va sarlavhalar ortiga porloq neon nurlari bering.'
    },
    story: {
      en: 'Arcade games and cyberpunk posters use glowing text to pop off dark screens!',
      uz: 'O\'yin zallari va kiberpank plakatlarida matnlar qorong\'i ekranda porlab turadi!'
    },
    initialCode: `<style>
  .arcade-title {
    color: #ffffff;
    font-size: 32px;
    text-align: center;
    font-family: sans-serif;
    /* Add glowing text-shadow here! */
  }
</style>

<div style="background: #0f1019; padding: 40px; border-radius: 12px;">
  <h1 class="arcade-title">⚡ LEVEL UP! ⚡</h1>
</div>`,
    targetCode: `<style>
  .arcade-title {
    color: #ffffff;
    font-size: 32px;
    text-align: center;
    font-family: sans-serif;
    text-shadow: 0 0 15px #2dd4bf;
  }
</style>

<div style="background: #0f1019; padding: 40px; border-radius: 12px;">
  <h1 class="arcade-title">⚡ LEVEL UP! ⚡</h1>
</div>`,
    targetDescription: {
      en: 'The title "LEVEL UP!" glowing with a vivid neon teal aura behind the letters.',
      uz: '"LEVEL UP!" sarlavhasi ortidan taralayotgan yorqin firuza neon nuri.'
    },
    anatomy: [
      {
        part: 'text-shadow: 0 0 15px #2dd4bf;',
        role: { en: 'Neon Shadow', uz: 'Neon soyasi' },
        explanation: { en: '0 X-offset, 0 Y-offset, 15px blur blur-radius, and #2dd4bf glow color.', uz: '0 siljish, 15px xiralashtirish va #2dd4bf nur rangi.' },
        effect: { en: 'Glowing light halo', uz: 'Porloq nur doirasi' }
      }
    ],
    listOfTags: [
      { code: 'text-shadow: X Y blur color;', name: { en: 'Text Shadow', uz: 'Matn soyasi' }, description: { en: 'Casts a shadow or luminous glow behind text letters', uz: 'Harflar ortidan soya yoki nur hosil qiladi' } },
      { code: 'font-size: 32px;', name: { en: 'Font Size', uz: 'Shrift hajmi' }, description: { en: 'Sets how big or small words appear on the screen', uz: 'So\'zlarning ekrandagi kattaligini belgilaydi' } }
    ],
    tagShowcase: [
      { tag: 'text-shadow', meaning: { en: 'Neon letter glow', uz: 'Neon harf nurlari' } },
      { tag: 'font-size', meaning: { en: 'Letter size', uz: 'Harf kattaligi' } }
    ],
    quickTags: ['text-shadow: 0 0 15px #2dd4bf;', 'font-size: 36px;'],
    challenge: {
      mission: {
        en: 'Add text-shadow: 0 0 15px #2dd4bf; to .arcade-title to make it glow neon teal!',
        uz: '.arcade-title ga text-shadow: 0 0 15px #2dd4bf; qo\'shib uni neon rangida porlating!'
      },
      hint: {
        en: 'Add the text-shadow property with horizontal offset, vertical offset, blur radius, and color.',
        uz: '.arcade-title { ... } ichiga text-shadow: 0 0 15px #2dd4bf; deb yozing.'
      },
      rules: [
        {
          type: 'hasCssProperty',
          property: 'text-shadow',
          valuePattern: /#2dd4bf|2dd4bf|15px/i,
          message: 'Add a text-shadow with 15px blur and #2dd4bf!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'A bright neon sign outside a restaurant at midnight.',
        uz: 'Tundagi shaharda porlab turgan neon yozuvi.'
      },
      discussionQuestions: [
        { en: 'Why did we set 0 0 for X and Y? (So the glow radiates evenly in all directions!)', uz: 'Nega X va Y ga 0 berdik? (Nur har tomonga teng taralsin deb!)' }
      ],
      commonMistakes: [
        { en: 'Putting too small a blur number like 1px which looks like a hard outline', uz: '1px kabi juda kichik raqam yozib xiralashtirmaslik' }
      ],
      funActivity: {
        en: 'Change the color to #ff757f for hot pink lasers!',
        uz: 'Rangni #ff757f ga o\'zgartirib pushti lazer hosil qiling!'
      }
    }
  },

  // ==========================================
  // THEME 15: Rounded Corners & Circles
  // ==========================================
  {
    id: 'theme-15-shapes',
    module: 'css-core',
    title: {
      en: 'Theme 15: Rounded Corners & Circles (50%)',
      uz: '15-Mavzu: Yumaloq Burchaklar va Aylana (50%)'
    },
    icon: '⭕',
    tag: 'border-radius: 12px;, border-radius: 50%;',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, **border-radius** is the sandpaper of web design! It sands away sharp 90-degree corners into smooth rounded edges or even perfect circles.',
        uz: 'Oddiy inson tilida **border-radius** bu veb dizayn jilviridir! U o\'tkir burchaklarni mayin yumaloqlaydi yoki butunlay dumaloq aylanaga aylantiradi.'
      },
      whatIsATag: {
        en: 'Setting `border-radius: 50%;` on any square box magically bends all corners until it becomes a 100% round ball or circular avatar!',
        uz: 'Istalgan kvadrat qutiga `border-radius: 50%;` bersangiz, barcha burchaklar egilib, mukammal 100% dumaloq avatar hosil bo\'ladi!'
      }
    },
    summary: {
      en: 'Smooth sharp corners into modern app cards and turn square elements into perfect circles with border-radius: 50%.',
      uz: 'O\'tkir burchaklarni zamonaviy kartochkalarga aylantiring va border-radius: 50% bilan mukammal aylana yasang.'
    },
    story: {
      en: 'The superhero team needs round gamer badges! Place the avatar div and apply border-radius: 50% to turn the square into a circular badge.',
      uz: 'Superqahramonlar jamoasiga yumaloq nishon kerak! Avatar divini joylashtiring va border-radius: 50% bilan uni aylanaga aylantiring.'
    },
    initialCode: `<style>
  .profile-badge {
    background: #141722;
    border: 1px solid #1e2433;
    padding: 24px;
    text-align: center;
    border-radius: 16px;
    max-width: 260px;
    margin: 20px auto;
  }
  .avatar {
    width: 120px;
    height: 120px;
    background: #ff757f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    margin: 0 auto 12px;
    /* Step 2: Shape the square avatar into a perfect circle using border-radius: 50%; */
  }
</style>

<div class="profile-badge">
  <!-- Step 1: Put the avatar element here using <div class="avatar">🦊</div> -->

  <h3 style="color: white; margin: 0;">Fox Champion</h3>
  <p style="color: #94a3b8; font-size: 13px;">Level 50 Master</p>
</div>`,
    targetCode: `<style>
  .profile-badge {
    background: #141722;
    border: 1px solid #1e2433;
    padding: 24px;
    text-align: center;
    border-radius: 16px;
    max-width: 260px;
    margin: 20px auto;
  }
  .avatar {
    width: 120px;
    height: 120px;
    background: #ff757f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    margin: 0 auto 12px;
    border-radius: 50%;
  }
</style>

<div class="profile-badge">
  <div class="avatar">🦊</div>
  <h3 style="color: white; margin: 0;">Fox Champion</h3>
  <p style="color: #94a3b8; font-size: 13px;">Level 50 Master</p>
</div>`,
    targetDescription: {
      en: 'The fox avatar placed from scratch and transformed into a 100% round circular gamer badge.',
      uz: 'Noldan qo\'yilgan va border-radius: 50% yordamida mukammal aylanaga aylantirilgan tulki nishoni.'
    },
    anatomy: [
      {
        part: 'border-radius: 50%;',
        role: { en: 'Circle Transformer', uz: 'Aylana o\'zgartiruvchi' },
        explanation: { en: 'Bends the corners halfway across each side, creating an exact circle.', uz: 'Burchaklarni tomonlarning qoq o\'rtasigacha yumaloqlab, mukammal aylana yasaydi.' },
        effect: { en: 'Turns square into circle', uz: 'Kvadratni aylanaga aylantiradi' }
      }
    ],
    listOfTags: [
      { code: 'border-radius: 12px;', name: { en: 'Rounded Corners', uz: 'Yumaloq burchak' }, description: { en: 'Softens sharp corners into smooth rounded edges', uz: 'O\'tkir burchaklarni silliq qilib yumaloqlaydi' } },
      { code: 'border-radius: 50%;', name: { en: 'Perfect Circle', uz: 'Mukammal aylana' }, description: { en: 'Turns any square element into a 100% round circular shape', uz: 'Istalgan kvadrat elementni 100% dumaloq aylanaga aylantiradi' } }
    ],
    tagShowcase: [
      { tag: 'border-radius: 12px;', meaning: { en: 'Smooth corners', uz: 'Yumaloq burchak' } },
      { tag: 'border-radius: 50%;', meaning: { en: 'Round circle', uz: 'Aylana' } }
    ],
    quickTags: ['border-radius: 50%;', 'border-radius: 16px;'],
    challenge: {
      mission: {
        en: 'Put the avatar <div class="avatar">🦊</div> inside the profile badge, and shape it into a circle with border-radius: 50%;!',
        uz: 'Profil kartochkasiga <div class="avatar">🦊</div> avatarsini qo\'ying va border-radius: 50%; bilan uni aylanaga aylantiring!'
      },
      hint: {
        en: 'Add <div class="avatar">🦊</div> inside .profile-badge, then in .avatar set border-radius: 50%;',
        uz: '.profile-badge ichiga <div class="avatar">🦊</div> qo\'ying va .avatar ichida border-radius: 50%; deb yozing.'
      },
      rules: [
        {
          type: 'custom',
          check: (code) => /class=["'][^"']*avatar[^"']*["']/i.test(code) && /🦊/.test(code),
          message: 'Put <div class="avatar">🦊</div> inside the profile badge!'
        },
        {
          type: 'hasCssProperty',
          property: 'border-radius',
          valuePattern: /50%/i,
          message: 'Set border-radius: 50% on .avatar!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'Sanding down sharp wooden corners until the wood block is round like a ball.',
        uz: 'Yog\'och blok burchaklarini jilvirlab to\'p kabi yumaloqlash.'
      },
      discussionQuestions: [
        { en: 'Why does 50% turn a square into a circle? (Each corner curve reaches the exact center!)', uz: 'Nega 50% kvadratni aylanaga aylantiradi? (Egrilik tomonning qoq o\'rtasigacha yetib boradi!)' }
      ],
      commonMistakes: [
        { en: 'Typing 50px instead of 50% (50px only rounds the edges a bit!)', uz: '50% o\'rniga 50px yozib qo\'yish' }
      ],
      funActivity: {
        en: 'Change to border-radius: 20px to see an iPhone app icon shape!',
        uz: 'border-radius: 20px qilib, iPhone ilovasi ikonkasiga o\'xshatib ko\'ring!'
      }
    }
  },

  // ==========================================
  // THEME 16: Keyframe Animations
  // ==========================================
  {
    id: 'theme-16-animations',
    module: 'modern-mastery',
    title: {
      en: 'Theme 16: Keyframe Animations (Alive & Bouncing)',
      uz: '16-Mavzu: Jonli Animatsiyalar (@keyframes)'
    },
    icon: '🎈',
    tag: '@keyframes, animation: bounce infinite',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, `@keyframes` turns you into a cartoon animator like at Disney or Pixar! You set the start (0%) and end (100%), and the browser brings it to life.',
        uz: 'Oddiy inson tilida `@keyframes` sizni Pixar yoki Disney animatoriga aylantiradi! Boshlanishi (0%) va tugashini (100%) chizasiz, brauzer esa uni jonlantiradi.'
      },
      whatIsATag: {
        en: '`@keyframes bounce` writes the dance choreography, and `animation: bounce 1s infinite alternate;` keeps the alien floating in space forever!',
        uz: '`@keyframes bounce` raqs harakatlarini belgilaydi, `animation: bounce 1s infinite alternate;` esa o\'zga sayyoralikni koinotda to\'xtovsiz uchiradi!'
      }
    },
    summary: {
      en: 'Make characters and buttons bounce, float, and pulse continuously on their own.',
      uz: 'Qahramonlar va tugmalarni o\'z-o\'zidan sakraydigan, uchadigan va nafas oladigan qilib jonlantiring.'
    },
    story: {
      en: 'Keyframes are like flipbook drawings: rapid frames that create smooth motion.',
      uz: 'Keyframelar xuddi tez varaqlanadigan rasm daftarchasidek silliq harakat yaratadi.'
    },
    initialCode: `<style>
  .alien {
    font-size: 60px;
    display: inline-block;
    /* Add animation here! */
  }
  @keyframes bounce {
    0% { transform: translateY(0px); }
    100% { transform: translateY(-25px); }
  }
</style>

<div style="text-align: center; padding: 40px;">
  <div class="alien">👾</div>
</div>`,
    targetCode: `<style>
  .alien {
    font-size: 60px;
    display: inline-block;
    animation: bounce 1s infinite alternate ease-in-out;
  }
  @keyframes bounce {
    0% { transform: translateY(0px); }
    100% { transform: translateY(-25px); }
  }
</style>

<div style="text-align: center; padding: 40px;">
  <div class="alien">👾</div>
</div>`,
    targetDescription: {
      en: 'A purple alien invader 👾 continuously floating up and down smoothly in zero gravity.',
      uz: 'Binafsharang fazogir 👾 vaznsizlikda yuqoriga va pastga to\'xtovsiz ravishda bir tekis suzib harakatlanmoqda.'
    },
    anatomy: [
      {
        part: '@keyframes bounce { ... }',
        role: { en: 'Choreography Timeline', uz: 'Harakat xaritasi' },
        explanation: { en: 'Defines positions from 0% (start) to 100% (finish).', uz: '0% dan 100% gacha bo\'lgan harakat yo\'lini belgilaydi.' },
        effect: { en: 'Defines motion path', uz: 'Harakat yo\'nalishi' }
      },
      {
        part: 'animation: bounce 1s infinite alternate;',
        role: { en: 'Animation Engine', uz: 'Animatsiya motori' },
        explanation: { en: 'Connects the bounce timeline with 1-second speed, looping forever.', uz: 'Harakatni 1 soniyali tezlikda to\'xtovsiz takrorlaydi.' },
        effect: { en: 'Runs motion forever', uz: 'Harakatni to\'xtovsiz aylantiradi' }
      }
    ],
    listOfTags: [
      { code: '@keyframes name { ... }', name: { en: 'Keyframe Rule', uz: 'Keyframe Qoidasi' }, description: { en: 'Defines the movement timeline for an animation', uz: 'Animatsiyaning harakat bosqichlarini belgilaydi' } },
      { code: 'animation: name 1s infinite;', name: { en: 'Animation Property', uz: 'Animatsiya xususiyati' }, description: { en: 'Attaches the keyframe timeline to any element', uz: 'Harakatni elementga bog\'lab uni jonlantiradi' } }
    ],
    tagShowcase: [
      { tag: '@keyframes name', meaning: { en: 'Dance choreography', uz: 'Harakat xaritasi' } },
      { tag: 'animation: name 1s infinite;', meaning: { en: 'Loop forever', uz: 'Cheksiz takrorlash' } }
    ],
    quickTags: ['animation: bounce 1s infinite alternate;', '@keyframes bounce {'],
    challenge: {
      mission: {
        en: 'Add animation: bounce 1s infinite alternate; to the .alien to bring it to life!',
        uz: '.alien ga animation: bounce 1s infinite alternate; qo\'shib uni jonlantiring!'
      },
      hint: {
        en: 'Assign your @keyframes animation using the animation property with duration and infinite loop.',
        uz: '.alien { ... } ichiga animation: bounce 1s infinite alternate; deb yozing.'
      },
      rules: [
        {
          type: 'hasCssProperty',
          property: 'animation',
          valuePattern: /bounce/i,
          message: 'Attach the bounce animation!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'Flipbook drawings flipped fast with your thumb creating motion.',
        uz: 'Burchaklariga rasm chizilgan daftarni barmoq bilan tez varaqlaganda hosil bo\'ladigan multfilm.'
      },
      discussionQuestions: [
        { en: 'What does "infinite" mean? (Loops forever without stopping!)', uz: '"infinite" so\'zi nimani anglatadi? (To\'xtamasdan mangu davom etadi!)' }
      ],
      commonMistakes: [
        { en: 'Mismatched animation name in @keyframes and animation property', uz: '@keyframes dagi nom bilan animation dagi nomni har xil yozib qo\'yish' }
      ],
      funActivity: {
        en: 'Change 1s to 0.1s to watch the alien vibrate furiously like a bee!',
        uz: '1s ni 0.1s ga almashtiring va o\'zga sayyoralik asalari kabi pirpirashini ko\'ring!'
      }
    }
  },

  // ==========================================
  // THEME 17: Theme 17: Interactive Inputs (Player Name & Color)
  // ==========================================
  {
    id: 'theme-17-inputs',
    module: 'html-core',
    title: {
      en: 'Theme 17: Interactive Inputs (Player Name & Color)',
      uz: '17-Mavzu: Interaktiv Kiritish (Ism va Rang Tanlash)'
    },
    icon: '📝',
    tag: '<input type="text">, <input type="color">',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, an **Input** is a little slot where visitors can type, pick colors, or enter secret passwords!',
        uz: 'Oddiy inson tilida, **Input** — bu foydalanuvchilar o\'z ismlarini yozishi, rang tanlashi yoki maxfiy parollarni kiritishi mumkin bo\'lgan maydonchadir!'
      },
      whatIsATag: {
        en: `1. \`<input type="text">\` creates a blank typing box.\\n2. \`<input type="color">\` pops open a rainbow color palette.\\n3. Notice: \`<input>\` is a void tag with NO closing tag!`,
        uz: `1. \`<input type="text">\` matn yozish qutisini yaratadi.\\n2. \`<input type="color">\` kamalak rang palitrasini ochadi.\\n3. E'tibor bering: \`<input>\` bo'sh teg bo'lib, yopiluvchi juftga ega emas!`
      }
    },
    summary: {
      en: 'Let users type their player name and choose colors with interactive input fields.',
      uz: 'Interaktiv input maydonchalari orqali foydalanuvchilarga o\'z ismlarini yozish va ranglarni tanlash imkonini bering.'
    },
    story: {
      en: 'Every game starts with entering your hero nickname. Build the input box for the player!',
      uz: 'Har qanday o\'yin qahramon laqabini kiritishdan boshlanadi. O\'yinchi uchun kiritish qutisini yarating!'
    },
    initialCode: `<div style="padding: 24px; background: #141722; border-radius: 12px; color: white;">
  <h3>🎮 Hero Registration</h3>
  <p>Type your player nickname below:</p>
  <!-- Step: Add text input here! -->
</div>`,
    targetCode: `<div style="padding: 24px; background: #141722; border-radius: 12px; color: white;">
  <h3>🎮 Hero Registration</h3>
  <p>Type your player nickname below:</p>
  <input type="text" placeholder="Enter Hero Name" style="padding: 10px 14px; border-radius: 8px; border: 1px solid #5b5fc7; background: #0b0d13; color: white;">
</div>`,
    targetDescription: {
      en: 'A hero registration card with a stylish dark text input ready for players to type their nickname.',
      uz: 'O\'yinchilar o\'z laqablarini yozishlari uchun chiroyli qora matn kiritish maydonchasiga ega ro\'yxatdan o\'tish kartochkasi.'
    },
    anatomy: [
      {
        part: '<input',
        role: {
          en: 'Input Field (Void)',
          uz: 'Kiritish maydoni (Bo\'sh)'
        },
        explanation: {
          en: 'Creates an interactive entry field for the visitor.',
          uz: 'Foydalanuvchi ma\'lumot kiritishi uchun interaktiv maydoncha ochadi.'
        },
        effect: {
          en: 'Displays interactive entry box',
          uz: 'Interaktiv kiritish qutisini ko\'rsatadi'
        },
        visualPreview: '<div class="mini-canvas"><input type="text" placeholder="Type here..." style="padding: 4px 8px; border-radius: 4px; border: 1px solid #5b5fc7; background: #0b0d13; color: white; font-size: 11px;"></div>'
      },
      {
        part: 'type="text"',
        role: {
          en: 'Field Type Attribute',
          uz: 'Maydon turi atributi'
        },
        explanation: {
          en: 'Tells the browser to accept normal words and numbers.',
          uz: 'Brauzerga oddiy so\'zlar va raqamlarni qabul qilishni aytadi.'
        },
        effect: {
          en: 'Accepts keyboard typing',
          uz: 'Klaviatura matnini qabul qiladi'
        },
        visualPreview: '<div class="mini-canvas">⌨️ Text Input Mode</div>'
      },
      {
        part: 'placeholder="..."',
        role: {
          en: 'Ghost Hint Text',
          uz: 'Yordamchi fon matni'
        },
        explanation: {
          en: 'Gray hint text that disappears as soon as the user starts typing.',
          uz: 'Foydalanuvchi yozishni boshlashi bilanoq yo\'qoladigan kulrang yordamchi matn.'
        },
        effect: {
          en: 'Shows helpful hint in empty box',
          uz: 'Bo\'sh qutida yo\'riqnoma ko\'rsatadi'
        },
        visualPreview: '<div class="mini-canvas">💭 Gray Hint: "Enter name..."</div>'
      }
    ],
    listOfTags: [
      {
        code: '<input type="text">',
        name: {
          en: 'Text Input',
          uz: 'Matn kiritish'
        },
        description: {
          en: 'Single-line text box for names, emails, and words',
          uz: 'Ism va so\'zlar uchun bir qatorli matn qutisi'
        },
        exampleHtml: '<input type="text" placeholder="Name">'
      },
      {
        code: '<input type="color">',
        name: {
          en: 'Color Picker',
          uz: 'Rang tanlagich'
        },
        description: {
          en: 'Interactive popup palette to pick any hex color',
          uz: 'Istalgan rangni tanlash uchun interaktiv palitra'
        },
        exampleHtml: '<input type="color">'
      },
      {
        code: '<input type="checkbox">',
        name: {
          en: 'Checkbox',
          uz: 'Belgilash katagi'
        },
        description: {
          en: 'Clickable toggle box for YES / NO options',
          uz: 'HA / YO\'Q variantlari uchun bosiladigan katakcha'
        },
        exampleHtml: '<input type="checkbox">'
      }
    ],
    tagShowcase: [
      {
        tag: '<input type="text">',
        meaning: {
          en: 'Text box',
          uz: 'Matn qutisi'
        }
      },
      {
        tag: '<input type="color">',
        meaning: {
          en: 'Color picker',
          uz: 'Rang tanlagich'
        }
      },
      {
        tag: '<input type="checkbox">',
        meaning: {
          en: 'Checkmark box',
          uz: 'Belgilash katagi'
        }
      }
    ],
    quickTags: [
      '<input type="text">',
      '<input type="color">',
      '<input type="checkbox">'
    ],
    challenge: {
      mission: {
        en: 'Add a text input with type="text" inside the card so players can type their name!',
        uz: 'Kartochka ichiga type="text" bo\'lgan input qo\'shing, shunda o\'yinchilar o\'z ismlarini yoza oladilar!'
      },
      hint: {
        en: 'Use the self-closing <input> tag with the type="text" attribute inside the card.',
        uz: 'Karta ichiga type="text" atributiga ega <input> tegini yozing.'
      },
      rules: [
        {
          type: 'hasTag',
          tag: 'input',
          message: 'Add the <input> tag!'
        },
        {
          type: 'hasAttribute',
          tag: 'input',
          attribute: 'type',
          valuePattern: /text/i,
          message: 'Set type="text" on the input tag!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'Input is like a mail slot in a door: visitors slip their letters and names through the slot.',
        uz: 'Input eshikdagi xat tirqishiga o\'xshaydi: tashrif buyuruvchilar o\'z ismlari va xabarlarini shu tirqish orqali kiritadilar.'
      },
      discussionQuestions: [
        {
          en: 'Why does <input> have no closing tag? (Because you type into it, you don\'t put HTML tags inside it!)',
          uz: 'Nega <input> da yopiluvchi teg yo\'q? (Chunki uning ichiga matn kiritiladi, unga boshqa HTML teglari solinmaydi!)'
        }
      ],
      commonMistakes: [
        {
          en: 'Trying to write </input> (it is a void tag!)',
          uz: '</input> deb yopuvchi teg yozishga urinish (u bo\'sh teg hisoblanadi!)'
        }
      ],
      funActivity: {
        en: 'Try changing type to "color" or "date" to see the browser pop open a calendar or rainbow picker!',
        uz: 'type ni "color" yoki "date" ga almashtirib, brauzerda kamalak rang tanlagichi yoki taqvim ochilishini ko\'ring!'
      }
    }
  },

  // ==========================================
  // THEME 18: Theme 18: Audio Player (Sound FX & Music)
  // ==========================================
  {
    id: 'theme-18-audio',
    module: 'html-core',
    title: {
      en: 'Theme 18: Audio Player (Sound FX & Music)',
      uz: '18-Mavzu: Audio Pleyer (Ovoz va Musiqa)'
    },
    icon: '🎵',
    tag: '<audio controls src="...">',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, the **Audio** tag brings your web page to life with sound effects, background music, or podcast voices!',
        uz: 'Oddiy inson tilida, **Audio** tegi veb-sahifangizga ovoz effektlari, fon musiqasi yoki podkastlar qo\'shib jon bag\'ishlaydi!'
      },
      whatIsATag: {
        en: `1. \`<audio>\` is the sound player container.\\n2. The \`controls\` attribute draws the play/pause button and volume bar.\\n3. \`src="..."\` tells the browser where the sound file lives.`,
        uz: `1. \`<audio>\` — ovoz pleyerining qobig'i.\\n2. \`controls\` atributi tinglash/to'xtatish tugmasi va ovoz balandligini chiqaradi.\\n3. \`src="..."\` ovoz fayli manzilini ko'rsatadi.`
      }
    },
    summary: {
      en: 'Embed sound effects and music players directly into your web pages.',
      uz: 'Veb-sahifalaringizga ovoz effektlari va musiqa pleyerlarini to\'g\'ridan-to\'g\'ri joylashtiring.'
    },
    story: {
      en: 'The spaceship launched into hyperdrive, but the cockpit is silent! Add an audio player with controls so the pilot can hear the hum.',
      uz: 'Kema fazoga uchdi, lekin kabina jim-jit! Uchuvchi ovozni eshitishi uchun audio pleyer joylashtiring.'
    },
    initialCode: `<div style="padding: 24px; text-align: center; color: white; background: #141722; border-radius: 12px;">
  <h3>🎧 Cyber DJ Sound Deck</h3>
  <p>The cockpit is dead silent! Place an audio player below with controls so the pilot can play the soundtrack!</p>
  <!-- Step 1: Put the <audio> player here with src="https://actions.google.com/sounds/v1/science_fiction/alien_hum.ogg" -->
  <!-- Step 2: Add controls attribute so the Play and Pause buttons appear! -->

</div>`,
    targetCode: `<div style="padding: 24px; text-align: center; color: white; background: #141722; border-radius: 12px;">
  <h3>🎧 Cyber DJ Sound Deck</h3>
  <p>The cockpit is dead silent! Place an audio player below with controls so the pilot can play the soundtrack!</p>
  <audio controls src="https://actions.google.com/sounds/v1/science_fiction/alien_hum.ogg">
  </audio>
</div>`,
    targetDescription: {
      en: 'An audio player placed from scratch with visible play, pause, and volume controls in the space mission card.',
      uz: 'Fazoviy missiya kartochkasida noldan qo\'yilgan tinglash, to\'xtatish va ovoz boshqaruvi tugmalariga ega audio pleyer.'
    },
    anatomy: [
      {
        part: '<audio',
        role: { en: 'Audio Container', uz: 'Audio qobig\'i' },
        explanation: { en: 'Initializes the sound player in HTML.', uz: 'HTML da ovoz pleyerini boshlaydi.' },
        effect: { en: 'Audio player element', uz: 'Audio pleyer elementi' },
        visualPreview: '<div class="mini-canvas">🎵 Sound Player Container</div>'
      },
      {
        part: 'controls',
        role: { en: 'Player Controls', uz: 'Boshqaruv tugmalari' },
        explanation: { en: 'Displays Play/Pause, scrubber, and volume buttons.', uz: 'Play/Pause, vaqt chizig\'i va ovoz tugmalarini ko\'rsatadi.' },
        effect: { en: 'Reveals UI controls', uz: 'Tugmalarni ko\'rsatadi' },
        visualPreview: '<div class="mini-canvas">▶️ ⏸️ 🔊 Player Bar</div>'
      }
    ],
    listOfTags: [
      { code: '<audio controls src="...">', name: 'Audio Player', description: 'Embeds sound clips or background music with user controls', exampleHtml: '<audio controls src="song.mp3"></audio>' },
      { code: 'autoplay', name: 'Autoplay', description: 'Starts playing audio automatically on page load', exampleHtml: '<audio autoplay src="ambient.mp3"></audio>' }
    ],
    tagShowcase: [
      { tag: '<audio controls>', meaning: 'Music player' },
      { tag: 'src="song.mp3"', meaning: 'Sound link' }
    ],
    quickTags: ['<audio controls src="...">', '</audio>', 'controls'],
    challenge: {
      mission: {
        en: 'Add an <audio controls src="..."> player inside the sound deck so astronauts can play the track!',
        uz: 'Kosmonavtlar musiqa tinglashi uchun ovoz paneliga <audio controls src="..."> pleyerini joylashtiring!'
      },
      hint: {
        en: 'Write: <audio controls src="https://actions.google.com/sounds/v1/science_fiction/alien_hum.ogg"></audio>',
        uz: 'Yozing: <audio controls src="https://actions.google.com/sounds/v1/science_fiction/alien_hum.ogg"></audio>'
      },
      rules: [
        {
          type: 'hasTag',
          tag: 'audio',
          message: 'Add the <audio> player tag!'
        },
        {
          type: 'hasAttribute',
          tag: 'audio',
          attribute: 'controls',
          message: 'Add the controls attribute to the audio tag!'
        },
        {
          type: 'hasAttribute',
          tag: 'audio',
          attribute: 'src',
          message: 'Add the src attribute to the audio track link!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'A cassette boombox: without batteries (controls) you cannot press play!',
        uz: 'Kasseta magnitofoni: tugmalarsiz (controls) uni eshitib bo\'lmaydi!'
      },
      discussionQuestions: [
        { en: 'Why is controls necessary on <audio>? (Otherwise the player is invisible!)', uz: 'Nega <audio> da controls kerak? (Aks holda pleyer ko\'rinmas bo\'lib qoladi!)' }
      ],
      commonMistakes: [
        { en: 'Omitting controls so the audio player stays invisible on screen', uz: 'controls ni unutib qo\'yish' }
      ],
      funActivity: {
        en: 'Press play and listen to the sci-fi alien hum in the live preview!',
        uz: 'Play tugmasini bosing va fantastik koinot tovushini tinglang!'
      }
    }
  },

  // ==========================================
  // THEME 19: Video Player
  // ==========================================
  {
    id: 'theme-19-video',
    module: 'html-core',
    title: {
      en: 'Theme 19: Video Player (Cinema on the Web)',
      uz: '19-Mavzu: Video Pleyer (Vebda Kino)'
    },
    icon: '🎬',
    tag: '<video controls width="320">',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, the **Video** tag embeds movies, game animations, or recordings right inside your web page!',
        uz: 'Oddiy inson tilida, **Video** tegi veb-sahifangizga filmlar, o\'yin videolari yoki animatsiyalarni joylashtirish imkonini beradi!'
      },
      whatIsATag: {
        en: `1. \`<video>\` creates the cinema screen.\\n2. \`controls\` enables play, pause, and full-screen buttons.\\n3. \`width="320"\` sizes the movie screen.`,
        uz: `1. \`<video>\` — kino ekranini yaratadi.\\n2. \`controls\` — ijro etish, to'xtatish va butun ekranga ochish tugmalarini faollashtiradi.\\n3. \`width="320"\` — video ekranining kengligini belgilaydi.`
      }
    },
    summary: {
      en: 'Embed and control video clips directly on your web pages.',
      uz: 'Veb-sahifalaringizda videolarni to\'g\'ridan-to\'g\'ri joylashtiring va boshqaring.'
    },
    story: {
      en: 'Build a movie cinema card for your space exploration mission film with video playback controls.',
      uz: 'Fazoviy tadqiqot filmi uchun video pleyerli kino kartochkasini yarating.'
    },
    initialCode: `<div style="padding: 20px; text-align: center; color: white; background: #141722; border-radius: 12px;">
  <h3>🌌 Space Exploration Movie</h3>
  <!-- Add a video player with controls and width="320" -->
</div>`,
    targetCode: `<div style="padding: 20px; text-align: center; color: white; background: #141722; border-radius: 12px;">
  <h3>🌌 Space Exploration Movie</h3>
  <video controls width="320" src="https://www.w3schools.com/html/mov_bbb.mp4">
  </video>
</div>`,
    targetDescription: {
      en: 'A video movie player with visible playback controls and a width of 320 pixels.',
      uz: 'Ko\'rinadigan boshqaruv tugmalariga va 320 piksel kenglikka ega video pleyer.'
    },
    anatomy: [
      {
        part: '<video',
        role: {
          en: 'Video Element',
          uz: 'Video elementi'
        },
        explanation: {
          en: 'Initializes the video display canvas in the browser.',
          uz: 'Brauzerda video ko\'rsatish ekranini boshlaydi.'
        },
        effect: {
          en: 'Places video screen',
          uz: 'Video ekranini joylashtiradi'
        },
        visualPreview: '<div class="mini-canvas">🎬 Cinema Screen Placed</div>'
      },
      {
        part: 'controls',
        role: {
          en: 'Video Controls',
          uz: 'Video boshqaruvi'
        },
        explanation: {
          en: 'Provides play/pause, time seeker, and fullscreen options.',
          uz: 'Ijro etish, to\'xtatish va to\'liq ekranga ochish imkoniyatlarini beradi.'
        },
        effect: {
          en: 'Enables video controls',
          uz: 'Video boshqaruv tugmalarini chiqaradi'
        },
        visualPreview: '<div class="mini-canvas">▶️ Fullscreen &amp; Play Controls</div>'
      }
    ],
    listOfTags: [
      {
        code: '<video controls src="...">',
        name: {
          en: 'Video Tag',
          uz: 'Video tegi'
        },
        description: {
          en: 'Embeds playable video files (.mp4, .webm)',
          uz: 'Ijro etiluvchi video fayllarni joylashtiradi'
        },
        exampleHtml: '<video controls width="320" src="movie.mp4"></video>'
      },
      {
        code: 'width="320"',
        name: {
          en: 'Video Width',
          uz: 'Video kengligi'
        },
        description: {
          en: 'Sets the width of the movie screen in pixels',
          uz: 'Video ekranining kengligini pikselda belgilaydi'
        },
        exampleHtml: 'width="320"'
      }
    ],
    tagShowcase: [
      {
        tag: '<video controls>',
        meaning: {
          en: 'Playable video screen',
          uz: 'Video ekrani'
        }
      },
      {
        tag: 'width="320"',
        meaning: {
          en: '320px wide',
          uz: '320px kenglik'
        }
      }
    ],
    quickTags: [
      '<video controls width="320">',
      '</video>',
      'controls'
    ],
    challenge: {
      mission: {
        en: 'Add a <video controls width="320" src="..."> player inside the movie card!',
        uz: 'Kino kartasi ichiga <video controls width="320" src="..."> pleyerini qo\'shing!'
      },
      hint: {
        en: 'Create a <video> tag with controls and width="320" attributes, then close it with </video>.',
        uz: 'controls va width="320" atributlariga ega <video> tegini yarating va </video> bilan yoping.'
      },
      rules: [
        {
          type: 'hasTag',
          tag: 'video',
          message: 'Add the <video> tag!'
        },
        {
          type: 'custom',
          check: (code) => /<video[^>]*\bcontrols\b/i.test(code),
          message: 'Add the controls attribute to <video>!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'A video tag is like hanging a miniature TV screen on your web page wall.',
        uz: '<video> tegi veb-sahifa devoriga kichik televizor ekranni ilib qo\'yishga o\'xshaydi.'
      },
      discussionQuestions: [
        {
          en: 'Why should you always set a width on video tags? (So the page doesn\'t jump around while loading!)',
          uz: 'Nega doim videoga width (kenglik) o\'lchami berish kerak? (Yuklanayotganda sahifa sakrab ketmasligi uchun!)'
        }
      ],
      commonMistakes: [
        {
          en: 'Forgetting controls so the video stays frozen with no way to press play',
          uz: 'controls atributini unutish — video muzlab turadi va ijro etish tugmasi bo\'lmaydi'
        }
      ],
      funActivity: {
        en: 'Press full screen to watch Big Buck Bunny on the entire monitor!',
        uz: 'Butun ekranda videoni tomosha qilish uchun to\'liq ekran tugmasini bosing!'
      }
    }
  },

  // ==========================================
  // THEME 20: Theme 20: Accordion Secrets (<details> & <summary>)
  // ==========================================
  {
    id: 'theme-20-details',
    module: 'html-core',
    title: {
      en: 'Theme 20: Accordion Secrets (Details & Summary)',
      uz: '20-Mavzu: Ochiluvchi Sirli Quti (Details va Summary)'
    },
    icon: '🗝️',
    tag: '<details>, <summary>',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, **<details>** is a magical secret envelope! It stays closed until a visitor clicks on its title (**<summary>**) to pop it open — with zero JavaScript!',
        uz: 'Oddiy inson tilida, **<details>** — bu sehrli maxfiy konvert! Foydalanuvchi uning sarlavhasi (**<summary>**) ustiga bosmaguncha yopiq turadi va hech qanday JavaScriptsiz ochiladi!'
      },
      whatIsATag: {
        en: `1. \`<details>\` is the expandable secret box.\\n2. \`<summary>\` is the clickable question or title.\\n3. Whatever you write below \`<summary>\` is kept hidden until clicked!`,
        uz: `1. \`<details>\` — ochiluvchi maxfiy quti.\\n2. \`<summary>\` — bosiladigan sarlavha yoki savol.\\n3. \`<summary>\` dan pastda yozgan hamma narsangiz bosilmaguncha yashirin turadi!`
      }
    },
    summary: {
      en: 'Build zero-JS interactive accordions, secret answers, and FAQ dropdowns with <details> and <summary>.',
      uz: '<details> va <summary> yordamida JavaScriptsiz ochiluvchi sirlar, savol-javoblar va yashirin xabarlar yarating.'
    },
    story: {
      en: 'Create a treasure vault clue box where the golden secret code is revealed only when clicked!',
      uz: 'Faqat bosilganda oltin maxfiy kodni ochib beradigan xazina qutisini yarating!'
    },
    initialCode: `<div style="padding: 24px; color: white; background: #141722; border-radius: 12px;">
  <h3>🏆 Secret Treasure Vault</h3>
  <!-- Step: Add details accordion and summary tag to hide the secret code -->
</div>`,
    targetCode: `<div style="padding: 24px; color: white; background: #141722; border-radius: 12px;">
  <h3>🏆 Secret Treasure Vault</h3>
  <details style="cursor: pointer; padding: 12px; background: #1a1f2e; border-radius: 8px;">
    <summary style="font-weight: bold; color: #fbbf24;">Click to Reveal Secret Code</summary>
    <p style="margin-top: 10px; color: #34d399;">🔑 Golden Key: STAR-9999</p>
  </details>
</div>`,
    targetDescription: {
      en: 'An interactive secret accordion that reveals the Golden Key code when clicked.',
      uz: 'Bosilganda "Golden Key" maxfiy kodini ochib beradigan interaktiv sirli quti.'
    },
    anatomy: [
      {
        part: '<details>',
        role: {
          en: 'Disclosure Container',
          uz: 'Ochiluvchi quti'
        },
        explanation: {
          en: 'Creates a collapsible box that opens and closes natively.',
          uz: 'O\'z-o\'zidan ochilib-yopiladigan quti konteynerini yaratadi.'
        },
        effect: {
          en: 'Creates interactive toggle box',
          uz: 'Ochilib-yopiluvchi quti hosil qiladi'
        },
        visualPreview: '<div class="mini-canvas">📁 Closed / Openable Envelope</div>'
      },
      {
        part: '<summary>',
        role: {
          en: 'Clickable Title',
          uz: 'Bosiladigan sarlavha'
        },
        explanation: {
          en: 'The visible header with an arrow you click to toggle the content.',
          uz: 'Kontentni ochish uchun ustiga bosiladigan strelkali sarlavha.'
        },
        effect: {
          en: 'Shows clickable title',
          uz: 'Bosiladigan sarlavhani ko\'rsatadi'
        },
        visualPreview: '<div class="mini-canvas">▶ Click to Reveal Secret Code</div>'
      }
    ],
    listOfTags: [
      {
        code: '<details> ... </details>',
        name: {
          en: 'Details Container',
          uz: 'Details qobig\'i'
        },
        description: {
          en: 'Interactive widget that toggles open/closed without JS',
          uz: 'JS siz ochilib yopiladigan interaktiv vidjet'
        },
        exampleHtml: '<details><summary>Title</summary><p>Secret</p></details>'
      },
      {
        code: '<summary> ... </summary>',
        name: {
          en: 'Summary Label',
          uz: 'Sarlavha qismi'
        },
        description: {
          en: 'The permanent visible heading of the <details> box',
          uz: '<details> qutisining doim ko\'rinib turuvchi sarlavhasi'
        },
        exampleHtml: '<summary>Open Me</summary>'
      }
    ],
    tagShowcase: [
      {
        tag: '<details>',
        meaning: {
          en: 'Expandable box',
          uz: 'Ochiluvchi quti'
        }
      },
      {
        tag: '<summary>',
        meaning: {
          en: 'Clickable title',
          uz: 'Bosiladigan sarlavha'
        }
      }
    ],
    quickTags: [
      '<details>',
      '</details>',
      '<summary>',
      '</summary>'
    ],
    challenge: {
      mission: {
        en: 'Add a <details> element with a <summary> inside the card to hide the secret code!',
        uz: 'Kartochka ichiga maxfiy kodni yashirish uchun <summary> sarlavhali <details> tegi qo\'shing!'
      },
      hint: {
        en: 'Wrap your clickable heading in <summary>...</summary> inside the <details>...</details> block.',
        uz: '<details> ichida bosiladigan sarlavhani <summary> teglari orasiga oling.'
      },
      rules: [
        {
          type: 'hasTag',
          tag: 'details',
          message: 'Add the <details> tag!'
        },
        {
          type: 'hasTag',
          tag: 'summary',
          message: 'Add the <summary> tag inside details!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: '<details> is like an advent calendar door: you knock on <summary> and the surprise pops open!',
        uz: '<details> syurprizli qutichaga o\'xshaydi: <summary> eshigini bossangiz, ichidagi sir ochiladi!'
      },
      discussionQuestions: [
        {
          en: 'Why is <details> so awesome? (It works without writing any JavaScript code!)',
          uz: 'Nega <details> ajoyib? (Chunki u hech qanday JavaScript yozmasdan ochilib-yopiladi!)'
        }
      ],
      commonMistakes: [
        {
          en: 'Putting <summary> outside of <details>',
          uz: '<summary> tegini <details> dan tashqariga chiqarib qo\'yish'
        }
      ],
      funActivity: {
        en: 'Click the summary to see the secret key appear!',
        uz: 'Maxfiy kalitni ko\'rish uchun sarlavha ustiga bosing!'
      }
    }
  },

  // ==========================================
  // THEME 21: Theme 21: CSS Grid (2D Game Inventory)
  // ==========================================
  {
    id: 'theme-21-grid',
    module: 'full-powers',
    title: {
      en: 'Theme 21: CSS Grid (CyberStore 2D Launcher SPA)',
      uz: '21-Mavzu: CSS Grid (CyberStore 2D O\'yinlar Do\'koni SPA)'
    },
    icon: '⊞',
    tag: 'display: grid, grid-template-columns, gap, grid-column',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, **CSS Grid** is the master 2D blueprint of modern web design! While Flexbox lines things up in one direction, Grid orchestrates entire Single Page Application (SPA) dashboards controlling both columns and rows at the same time.',
        uz: 'Oddiy inson tilida, **CSS Grid** — bu zamonaviy veb-dizaynning 2D bosh chizmasidir! Flexbox bir yo\'nalishda ishlasa, Grid bir vaqtning o\'zida qatorlar va ustunlarni boshqarib to\'liq SPA boshqaruv panellarini quradi.'
      },
      whatIsATag: {
        en: `1. \`display: grid;\` activates the 2D layout matrix.\n2. \`grid-template-columns: 200px 1fr 1fr;\` creates a dedicated sidebar column and two responsive content columns.\n3. \`gap: 16px;\` leaves clean breathing room between all cards.\n4. \`grid-column: span 2;\` lets a featured hero card expand across 2 columns!`,
        uz: `1. \`display: grid;\` — 2D panjara rejimini yoqadi.\n2. \`grid-template-columns: 200px 1fr 1fr;\` — 200px yon panel va 2 ta teng moslashuvchan ustun hosil qiladi.\n3. \`gap: 16px;\` — barcha panellar orasida oraliq qoldiradi.\n4. \`grid-column: span 2;\` — asosiy o'yin kartasiga 2 ta ustunni egallash imkonini beradi!`
      }
    },
    summary: {
      en: 'Build a full 2D game store launcher SPA with display: grid, multi-column template, and hero card column spanning.',
      uz: 'display: grid, ko\'p ustunli shablon va asosiy kartani kengaytirish orqali to\'liq 2D o\'yin do\'koni SPA sahifasini quring.'
    },
    story: {
      en: 'The CyberStore Gaming SPA needs a complete dashboard: structure the sidebar, featured hero game, and trending cards into a 2D matrix!',
      uz: 'CyberStore O\'yinlar SPA ilovasiga to\'liq boshqaruv paneli kerak: yon menyu, asosiy o\'yin banneri va boshqa kartochkalarni 2D panjara tizimiga tering!'
    },
    initialCode: {
      en: "<style>\n  * { box-sizing: border-box; }\n  .spa-grid {\n    /* Step 1: Turn this entire application into a 2D matrix using display: grid; */\n    /* Step 2: Create a 200px sidebar column and two equal content columns with grid-template-columns: 200px 1fr 1fr; */\n    /* Step 3: Add gap: 16px; between all panels */\n    background: #0b0f19;\n    padding: 18px;\n    border-radius: 16px;\n    border: 1px solid #1e293b;\n    color: white;\n    font-family: system-ui, sans-serif;\n  }\n  .spa-header {\n    grid-column: 1 / -1;\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 14px 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .spa-sidebar {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 16px;\n  }\n  .featured-card {\n    /* Step 4: Expand this hero banner across 2 columns with grid-column: span 2; */\n    background: linear-gradient(135deg, #1e1b4b, #3730a3);\n    border: 1px solid #6366f1;\n    border-radius: 12px;\n    padding: 20px;\n  }\n  .game-card {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 16px;\n  }\n  .spa-footer {\n    grid-column: 1 / -1;\n    background: #111827;\n    border-radius: 10px;\n    padding: 10px 16px;\n    display: flex;\n    justify-content: space-between;\n    font-size: 12px;\n    color: #94a3b8;\n  }\n</style>\n\n<div class=\"spa-grid\">\n  <header class=\"spa-header\">\n    <div style=\"font-weight: 800; color: #38bdf8;\">🎮 CyberStore Launcher SPA</div>\n    <div style=\"font-size: 13px; color: #94a3b8;\">Commander Alex • 💎 1,450 XP</div>\n  </header>\n\n  <aside class=\"spa-sidebar\">\n    <h4 style=\"margin: 0 0 10px 0; color: #38bdf8; font-size: 12px;\">CATEGORIES</h4>\n    <div style=\"padding: 4px 0; color: #cbd5e1; font-size: 12px;\">🔥 Action RPG</div>\n    <div style=\"padding: 4px 0; color: #cbd5e1; font-size: 12px;\">🏎️ Sci-Fi Racing</div>\n    <div style=\"padding: 4px 0; color: #cbd5e1; font-size: 12px;\">🧪 Strategy Lab</div>\n    <div style=\"padding: 4px 0; color: #cbd5e1; font-size: 12px;\">🛡️ Tower Defense</div>\n  </aside>\n\n  <div class=\"featured-card\">\n    <span style=\"background: #ec4899; color: white; font-size: 10px; padding: 2px 8px; border-radius: 4px; font-weight: bold;\">FEATURED RELEASE</span>\n    <h2 style=\"margin: 8px 0 4px 0; color: #ffffff;\">Cyber Odyssey 2099</h2>\n    <p style=\"margin: 0 0 12px 0; font-size: 12px; color: #c7d2fe;\">Lead your starfleet across infinite procedurally generated galactic frontiers.</p>\n    <button style=\"background: #6366f1; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;\">🚀 PLAY NOW</button>\n  </div>\n\n  <div class=\"game-card\">\n    <h3 style=\"margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;\">🗡️ Shadow Blade</h3>\n    <p style=\"margin: 0; font-size: 12px; color: #94a3b8;\">Cyber Ninja Action</p>\n  </div>\n\n  <div class=\"game-card\">\n    <h3 style=\"margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;\">🏎️ Turbo Horizon</h3>\n    <p style=\"margin: 0; font-size: 12px; color: #94a3b8;\">Neon Street Racing</p>\n  </div>\n\n  <footer class=\"spa-footer\">\n    <span>🟢 Online Players: 14,820</span>\n    <span>⚡ Ping: 18ms (Tashkent Central)</span>\n    <span>Version 2.4.0 SPA</span>\n  </footer>\n</div>",
      uz: "<style>\n  * { box-sizing: border-box; }\n  .spa-grid {\n    /* 1-Qadam: display: grid; yordamida butun ilovani 2D panjara tizimiga aylantiring */\n    /* 2-Qadam: grid-template-columns: 200px 1fr 1fr; orqali 200px yon panel va 2 ta teng ustun yarating */\n    /* 3-Qadam: gap: 16px; orqali barcha panellar orasida oraliq qoldiring */\n    background: #0b0f19;\n    padding: 18px;\n    border-radius: 16px;\n    border: 1px solid #1e293b;\n    color: white;\n    font-family: system-ui, sans-serif;\n  }\n  .spa-header {\n    grid-column: 1 / -1;\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 14px 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .spa-sidebar {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 16px;\n  }\n  .featured-card {\n    /* 4-Qadam: grid-column: span 2; yordamida ushbu bosh o'yin kartasini 2 ta ustunga cho'zing */\n    background: linear-gradient(135deg, #1e1b4b, #3730a3);\n    border: 1px solid #6366f1;\n    border-radius: 12px;\n    padding: 20px;\n  }\n  .game-card {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 16px;\n  }\n  .spa-footer {\n    grid-column: 1 / -1;\n    background: #111827;\n    border-radius: 10px;\n    padding: 10px 16px;\n    display: flex;\n    justify-content: space-between;\n    font-size: 12px;\n    color: #94a3b8;\n  }\n</style>\n\n<div class=\"spa-grid\">\n  <header class=\"spa-header\">\n    <div style=\"font-weight: 800; color: #38bdf8;\">🎮 CyberStore Launcher SPA</div>\n    <div style=\"font-size: 13px; color: #94a3b8;\">Commander Alex • 💎 1,450 XP</div>\n  </header>\n\n  <aside class=\"spa-sidebar\">\n    <h4 style=\"margin: 0 0 10px 0; color: #38bdf8; font-size: 12px;\">CATEGORIES</h4>\n    <div style=\"padding: 4px 0; color: #cbd5e1; font-size: 12px;\">🔥 Action RPG</div>\n    <div style=\"padding: 4px 0; color: #cbd5e1; font-size: 12px;\">🏎️ Sci-Fi Racing</div>\n    <div style=\"padding: 4px 0; color: #cbd5e1; font-size: 12px;\">🧪 Strategy Lab</div>\n    <div style=\"padding: 4px 0; color: #cbd5e1; font-size: 12px;\">🛡️ Tower Defense</div>\n  </aside>\n\n  <div class=\"featured-card\">\n    <span style=\"background: #ec4899; color: white; font-size: 10px; padding: 2px 8px; border-radius: 4px; font-weight: bold;\">FEATURED RELEASE</span>\n    <h2 style=\"margin: 8px 0 4px 0; color: #ffffff;\">Cyber Odyssey 2099</h2>\n    <p style=\"margin: 0 0 12px 0; font-size: 12px; color: #c7d2fe;\">Lead your starfleet across infinite procedurally generated galactic frontiers.</p>\n    <button style=\"background: #6366f1; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;\">🚀 PLAY NOW</button>\n  </div>\n\n  <div class=\"game-card\">\n    <h3 style=\"margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;\">🗡️ Shadow Blade</h3>\n    <p style=\"margin: 0; font-size: 12px; color: #94a3b8;\">Cyber Ninja Action</p>\n  </div>\n\n  <div class=\"game-card\">\n    <h3 style=\"margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;\">🏎️ Turbo Horizon</h3>\n    <p style=\"margin: 0; font-size: 12px; color: #94a3b8;\">Neon Street Racing</p>\n  </div>\n\n  <footer class=\"spa-footer\">\n    <span>🟢 Online Players: 14,820</span>\n    <span>⚡ Ping: 18ms (Tashkent Central)</span>\n    <span>Version 2.4.0 SPA</span>\n  </footer>\n</div>"
    },
    targetCode: {
      en: "<style>\n  * { box-sizing: border-box; }\n  .spa-grid {\n    display: grid;\n    grid-template-columns: 200px 1fr 1fr;\n    gap: 16px;\n    background: #0b0f19;\n    padding: 18px;\n    border-radius: 16px;\n    border: 1px solid #1e293b;\n    color: white;\n    font-family: system-ui, sans-serif;\n  }\n  .spa-header {\n    grid-column: 1 / -1;\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 14px 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .spa-sidebar {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 16px;\n  }\n  .featured-card {\n    grid-column: span 2;\n    background: linear-gradient(135deg, #1e1b4b, #3730a3);\n    border: 1px solid #6366f1;\n    border-radius: 12px;\n    padding: 20px;\n  }\n  .game-card {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 16px;\n  }\n  .spa-footer {\n    grid-column: 1 / -1;\n    background: #111827;\n    border-radius: 10px;\n    padding: 10px 16px;\n    display: flex;\n    justify-content: space-between;\n    font-size: 12px;\n    color: #94a3b8;\n  }\n</style>\n\n<div class=\"spa-grid\">\n  <header class=\"spa-header\">\n    <div style=\"font-weight: 800; color: #38bdf8;\">🎮 CyberStore Launcher SPA</div>\n    <div style=\"font-size: 13px; color: #94a3b8;\">Commander Alex • 💎 1,450 XP</div>\n  </header>\n\n  <aside class=\"spa-sidebar\">\n    <h4 style=\"margin: 0 0 10px 0; color: #38bdf8; font-size: 12px;\">CATEGORIES</h4>\n    <div style=\"padding: 4px 0; color: #cbd5e1; font-size: 12px;\">🔥 Action RPG</div>\n    <div style=\"padding: 4px 0; color: #cbd5e1; font-size: 12px;\">🏎️ Sci-Fi Racing</div>\n    <div style=\"padding: 4px 0; color: #cbd5e1; font-size: 12px;\">🧪 Strategy Lab</div>\n    <div style=\"padding: 4px 0; color: #cbd5e1; font-size: 12px;\">🛡️ Tower Defense</div>\n  </aside>\n\n  <div class=\"featured-card\">\n    <span style=\"background: #ec4899; color: white; font-size: 10px; padding: 2px 8px; border-radius: 4px; font-weight: bold;\">FEATURED RELEASE</span>\n    <h2 style=\"margin: 8px 0 4px 0; color: #ffffff;\">Cyber Odyssey 2099</h2>\n    <p style=\"margin: 0 0 12px 0; font-size: 12px; color: #c7d2fe;\">Lead your starfleet across infinite procedurally generated galactic frontiers.</p>\n    <button style=\"background: #6366f1; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;\">🚀 PLAY NOW</button>\n  </div>\n\n  <div class=\"game-card\">\n    <h3 style=\"margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;\">🗡️ Shadow Blade</h3>\n    <p style=\"margin: 0; font-size: 12px; color: #94a3b8;\">Cyber Ninja Action</p>\n  </div>\n\n  <div class=\"game-card\">\n    <h3 style=\"margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;\">🏎️ Turbo Horizon</h3>\n    <p style=\"margin: 0; font-size: 12px; color: #94a3b8;\">Neon Street Racing</p>\n  </div>\n\n  <footer class=\"spa-footer\">\n    <span>🟢 Online Players: 14,820</span>\n    <span>⚡ Ping: 18ms (Tashkent Central)</span>\n    <span>Version 2.4.0 SPA</span>\n  </footer>\n</div>",
      uz: "<style>\n  * { box-sizing: border-box; }\n  .spa-grid {\n    display: grid;\n    grid-template-columns: 200px 1fr 1fr;\n    gap: 16px;\n    background: #0b0f19;\n    padding: 18px;\n    border-radius: 16px;\n    border: 1px solid #1e293b;\n    color: white;\n    font-family: system-ui, sans-serif;\n  }\n  .spa-header {\n    grid-column: 1 / -1;\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 14px 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .spa-sidebar {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 16px;\n  }\n  .featured-card {\n    grid-column: span 2;\n    background: linear-gradient(135deg, #1e1b4b, #3730a3);\n    border: 1px solid #6366f1;\n    border-radius: 12px;\n    padding: 20px;\n  }\n  .game-card {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 16px;\n  }\n  .spa-footer {\n    grid-column: 1 / -1;\n    background: #111827;\n    border-radius: 10px;\n    padding: 10px 16px;\n    display: flex;\n    justify-content: space-between;\n    font-size: 12px;\n    color: #94a3b8;\n  }\n</style>\n\n<div class=\"spa-grid\">\n  <header class=\"spa-header\">\n    <div style=\"font-weight: 800; color: #38bdf8;\">🎮 CyberStore Launcher SPA</div>\n    <div style=\"font-size: 13px; color: #94a3b8;\">Commander Alex • 💎 1,450 XP</div>\n  </header>\n\n  <aside class=\"spa-sidebar\">\n    <h4 style=\"margin: 0 0 10px 0; color: #38bdf8; font-size: 12px;\">CATEGORIES</h4>\n    <div style=\"padding: 4px 0; color: #cbd5e1; font-size: 12px;\">🔥 Action RPG</div>\n    <div style=\"padding: 4px 0; color: #cbd5e1; font-size: 12px;\">🏎️ Sci-Fi Racing</div>\n    <div style=\"padding: 4px 0; color: #cbd5e1; font-size: 12px;\">🧪 Strategy Lab</div>\n    <div style=\"padding: 4px 0; color: #cbd5e1; font-size: 12px;\">🛡️ Tower Defense</div>\n  </aside>\n\n  <div class=\"featured-card\">\n    <span style=\"background: #ec4899; color: white; font-size: 10px; padding: 2px 8px; border-radius: 4px; font-weight: bold;\">FEATURED RELEASE</span>\n    <h2 style=\"margin: 8px 0 4px 0; color: #ffffff;\">Cyber Odyssey 2099</h2>\n    <p style=\"margin: 0 0 12px 0; font-size: 12px; color: #c7d2fe;\">Lead your starfleet across infinite procedurally generated galactic frontiers.</p>\n    <button style=\"background: #6366f1; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;\">🚀 PLAY NOW</button>\n  </div>\n\n  <div class=\"game-card\">\n    <h3 style=\"margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;\">🗡️ Shadow Blade</h3>\n    <p style=\"margin: 0; font-size: 12px; color: #94a3b8;\">Cyber Ninja Action</p>\n  </div>\n\n  <div class=\"game-card\">\n    <h3 style=\"margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;\">🏎️ Turbo Horizon</h3>\n    <p style=\"margin: 0; font-size: 12px; color: #94a3b8;\">Neon Street Racing</p>\n  </div>\n\n  <footer class=\"spa-footer\">\n    <span>🟢 Online Players: 14,820</span>\n    <span>⚡ Ping: 18ms (Tashkent Central)</span>\n    <span>Version 2.4.0 SPA</span>\n  </footer>\n</div>"
    },
    targetDescription: {
      en: 'A full-scale CyberStore launcher SPA featuring a sidebar category panel, wide 2-column hero game banner, and responsive cards.',
      uz: 'Kategoriya paneli, 2 ta ustunni egallagan keng banner va o\'yin kartalaridan iborat to\'liq CyberStore o\'yin do\'koni SPA sahifasi.'
    },
    anatomy: [
      {
        part: 'display: grid;',
        role: { en: 'Grid Mode', uz: 'Grid rejimi' },
        explanation: { en: 'Transforms the container into a two-dimensional grid system.', uz: 'Konteynerni ikki o\'lchovli panjara tizimiga aylantiradi.' },
        effect: { en: 'Enables 2D grid rules', uz: '2D panjara qoidalarini yoqadi' }
      },
      {
        part: 'grid-template-columns: 200px 1fr 1fr;',
        role: { en: 'Sidebar + Content Columns', uz: 'Yon panel + Tarkib ustunlari' },
        explanation: { en: 'Creates a fixed 200px sidebar track and two flexible content tracks.', uz: '200px o\'lchamli yon panel va 2 ta teng moslashuvchan ustun yaratadi.' },
        effect: { en: 'Splits width into 3 columns', uz: 'Enini 3 ta ustunga bo\'ladi' }
      },
      {
        part: 'gap: 16px;',
        role: { en: 'Grid Gutter', uz: 'Kataklar oralig\'i' },
        explanation: { en: 'Leaves consistent spacing between rows and columns simultaneously.', uz: 'Bir vaqtning o\'zida qator va ustunlar orasida bo\'shliq qoldiradi.' },
        effect: { en: 'Clean gutters between tiles', uz: 'Kataklar orasidagi toza masofa' }
      },
      {
        part: 'grid-column: span 2;',
        role: { en: 'Column Span', uz: 'Ustunlarni birlashtirish' },
        explanation: { en: 'Allows a featured card to stretch across 2 columns.', uz: 'Asosiy kartaga 2 ta ustun bo\'ylab cho\'zilish imkonini beradi.' },
        effect: { en: 'Wide hero banner expansion', uz: 'Keng banner ko\'rinishi' }
      }
    ],
    listOfTags: [
      { code: 'display: grid;', name: { en: 'Grid Activation', uz: 'Grid Faollashtirish' }, description: { en: 'Turns on two-dimensional grid layout on a parent container', uz: 'Ota elementda ikki o\'lchovli panjara rejimini yoqadi' } },
      { code: 'grid-template-columns: 200px 1fr 1fr;', name: { en: 'Column Template', uz: 'Ustunlar Qolipi' }, description: { en: 'Defines sidebar and content columns with responsive fractional units', uz: 'Yon panel va asosiy qism uchun moslashuvchan ustunlar yaratadi' } },
      { code: 'gap: 16px;', name: { en: 'Grid Gap', uz: 'Panjara Oralig\'i' }, description: { en: 'Even space between all rows and columns', uz: 'Barcha qator va ustunlar orasidagi bir xil masofa' } },
      { code: 'grid-column: span 2;', name: { en: 'Column Spanning', uz: 'Ustun Cho\'zish' }, description: { en: 'Causes an element to stretch across multiple columns', uz: 'Elementni bir nechta ustun bo\'ylab cho\'zadi' } }
    ],
    tagShowcase: [
      { tag: 'display: grid;', meaning: { en: 'Enable 2D Grid', uz: '2D panjarani yoqish' } },
      { tag: 'grid-template-columns: 200px 1fr 1fr;', meaning: { en: 'Sidebar + 2 Columns', uz: 'Yon panel + 2 ta ustun' } },
      { tag: 'grid-column: span 2;', meaning: { en: 'Span 2 Columns', uz: '2 ta ustunni egallash' } }
    ],
    quickTags: ['display: grid;', 'grid-template-columns: 200px 1fr 1fr;', 'gap: 16px;', 'grid-column: span 2;'],
    challenge: {
      mission: {
        en: 'Build the CyberStore Launcher SPA! Add display: grid;, grid-template-columns: 200px 1fr 1fr;, and gap: 16px; to .spa-grid, then expand .featured-card across 2 columns with grid-column: span 2;!',
        uz: 'CyberStore O\'yinlar Do\'koni SPA sahifasini quring! .spa-grid ga display: grid;, grid-template-columns: 200px 1fr 1fr; va gap: 16px; bering, so\'ng .featured-card ga grid-column: span 2; yozing!'
      },
      hint: {
        en: 'Add display: grid;, grid-template-columns: 200px 1fr 1fr;, and gap: 16px; in .spa-grid, and grid-column: span 2; inside .featured-card.',
        uz: '.spa-grid ichiga display: grid;, grid-template-columns: 200px 1fr 1fr;, gap: 16px; yozing va .featured-card ichiga grid-column: span 2; qo\'shing.'
      },
      rules: [
        {
          type: 'hasCssProperty',
          property: 'display',
          valuePattern: /grid/i,
          message: 'Add display: grid; to .spa-grid!'
        },
        {
          type: 'hasCssProperty',
          property: 'grid-template-columns',
          valuePattern: '200px',
          message: 'Add grid-template-columns: 200px 1fr 1fr; to .spa-grid!'
        },
        {
          type: 'hasCssProperty',
          property: 'gap',
          valuePattern: '16px',
          message: 'Add gap: 16px; to .spa-grid!'
        },
        {
          type: 'hasCssProperty',
          property: 'grid-column',
          valuePattern: 'span 2',
          message: 'Add grid-column: span 2; to .featured-card!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'CSS Grid turns a web app into a master architectural blueprint: header covers the roof, sidebar guards the entrance, and hero cards span across the living room.',
        uz: 'CSS Grid veb-ilovani me\'moriy chizmaga aylantiradi: tom qismini sarlavha, kirishni yon panel, mehmonxonani esa keng banner egallaydi.'
      },
      discussionQuestions: [
        'How do gaming dashboards like Discord, Steam, and Xbox Web use 2D Grid systems?',
        'What is the advantage of grid-column: span 2 for hero promotional banners?'
      ],
      commonMistakes: [
        'Confusing grid-column with grid-row',
        'Forgetting display: grid on the outer container before defining column tracks'
      ],
      funActivity: 'Sketch a multi-section dashboard on paper and plan which sections should span 2 columns!'
    }
  },

  // ==========================================
  // THEME 22: Positioning
  // ==========================================
  {
    id: 'theme-22-position',
    module: 'full-powers',
    title: {
      en: 'Theme 22: CSS Positioning (Mission Defense SPA & The 5 Positions)',
      uz: '22-Mavzu: CSS Joylashuvi (Mudofaa SPA & 5 Xil Position Turlari)'
    },
    icon: '📍',
    tag: 'static, relative, absolute, fixed, sticky',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, **CSS Position** is the GPS coordinate system of web design! Real Single Page Applications coordinate **all 5 positions** together:\n\n• **static**: The natural default flow. Elements stack normally; top, left, and z-index are ignored.\n• **relative**: Remains in normal flow, but unlocks top/left offsets and acts as the **GPS fence (anchor)** for child elements.\n• **absolute**: Lifted completely out of document flow. Flies to exact top/right coordinates inside its nearest relative parent!\n• **fixed**: Ripped from the page and glued directly to the **screen viewport**. Stays frozen in place even when you scroll!\n• **sticky**: A magical hybrid! Behaves like relative until you scroll past it, then locks to the screen edge like fixed!',
        uz: 'Oddiy inson tilida, **CSS Position** — bu vebning GPS koordinata tizimidir! Haqiqiy SPA ilovalar **barcha 5 ta joylashuv turini** birgalikda ishlatadi:\n\n• **static**: Standart oqim. Elementlar odatdagidek joylashadi; top, left va z-index ishlamaydi.\n• **relative**: O\'z o\'rnida qoladi, lekin siljishlarni yoqadi va ichki bolalar uchun **GPS boshlang\'ich nuqtasi (devor)** bo\'ladi.\n• **absolute**: Oqimdan butunlay chiqadi. Eng yaqin relative ota element burchaklariga aniq top/right bilan mixlanadi!\n• **fixed**: Sahifadan ajralib, to\'g\'ridan-to\'g\'ri **ekran oynasiga** mixlanadi. Sahifani pastga aylantirsangiz ham joyidan qimirlamaydi!\n• **sticky**: Ajoyib gibrid! Odatda o\'z o\'rnida turadi, lekin sahifa surilganda ekran chetiga fixed kabi yopishib qoladi!'
      },
      whatIsATag: {
        en: `1. \`position: static;\` = Default reading order.\n2. \`position: relative;\` = Parent anchor fence.\n3. \`position: absolute;\` = Corner GPS coordinates (top, right).\n4. \`position: fixed;\` = Glued to screen window.\n5. \`position: sticky;\` = Scrolls then sticks to top!`,
        uz: `1. \`position: static;\` = Odatiy tartib.\n2. \`position: relative;\` = Ota chegara devori.\n3. \`position: absolute;\` = Burchak GPS koordinatasi.\n4. \`position: fixed;\` = Ekranga mixlangan.\n5. \`position: sticky;\` = Suriladi va tepaga yopishadi!`
      }
    },
    summary: {
      en: 'Master all 5 CSS positions (static, relative, absolute, fixed, sticky) by building a complete Mission Defense SPA with sticky header, relative cards, absolute badges, and fixed beacons.',
      uz: 'Barcha 5 ta CSS position turlarini (static, relative, absolute, fixed, sticky) o\'rganing va yopishqoq panel, nisbiy karta, mutlaq nishon va qadalgan dronli to\'liq Mudofaa SPA ilovasini quring.'
    },
    story: {
      en: 'The Mission Control Defense SPA needs its alert system completed: place the alarm badge on the shield card and anchor it directly to the top-right corner!',
      uz: 'Mudofaa SPA ilovasining signal tizimini tugatish kerak: qizil nishonni qalqon kartasiga qo\'ying va uni yuqori o\'ng burchakka mixlab qo\'ying!'
    },
    initialCode: {
      en: "<style>\n  * { box-sizing: border-box; }\n  .spa-command {\n    background: #0b0f19;\n    border: 1px solid #1e293b;\n    border-radius: 16px;\n    padding: 20px;\n    color: white;\n    font-family: system-ui, sans-serif;\n    min-height: 400px;\n    position: relative;\n  }\n  /* Sticky Topbar: Sticks to top edge during scroll */\n  .sticky-navbar {\n    position: sticky;\n    top: 0;\n    z-index: 50;\n    background: rgba(17, 24, 39, 0.95);\n    border: 1px solid #1f2937;\n    border-radius: 10px;\n    padding: 12px 18px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 24px;\n    backdrop-filter: blur(8px);\n  }\n  .spa-dashboard-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n    margin-bottom: 20px;\n  }\n  .panel {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 20px;\n  }\n  .shield-card {\n    /* Step 2: Make this card the GPS anchor boundary using position: relative; */\n    background: #1e1b4b;\n    border: 2px solid #6366f1;\n    border-radius: 12px;\n    padding: 24px;\n    text-align: center;\n  }\n  .alarm-badge {\n    /* Step 3: Pin this badge to the top-right corner using position: absolute; top: -10px; right: -10px; */\n    background: #ef4444;\n    color: white;\n    font-weight: 800;\n    padding: 4px 12px;\n    border-radius: 999px;\n    font-size: 11px;\n    box-shadow: 0 0 12px rgba(239, 68, 68, 0.8);\n  }\n  /* Fixed Drone: Glued to the viewport screen corner */\n  .fixed-drone {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    z-index: 100;\n    background: #38bdf8;\n    color: #0b0f19;\n    font-weight: 800;\n    font-size: 12px;\n    padding: 10px 18px;\n    border-radius: 999px;\n    box-shadow: 0 4px 16px rgba(56, 189, 248, 0.5);\n  }\n</style>\n\n<div class=\"spa-command\">\n  <!-- Sticky Navigation Header -->\n  <nav class=\"sticky-navbar\">\n    <div style=\"font-weight: 800; color: #38bdf8;\">🛰️ CyberCommand Defense SPA</div>\n    <div style=\"font-size: 12px; color: #10b981;\">● ALL SYSTEMS OPERATIONAL</div>\n  </nav>\n\n  <div class=\"spa-dashboard-grid\">\n    <div class=\"shield-card\">\n      <!-- Step 1: Put the alarm badge here: <span class=\"alarm-badge\">🔥 ALERT</span> -->\n\n      <h3 style=\"margin: 0 0 6px 0; color: #a5b4fc;\">Plasma Shield Matrix</h3>\n      <p style=\"margin: 0; font-size: 13px; color: #cbd5e1;\">Deflector barrier active at 98.4% capacity.</p>\n    </div>\n\n    <div class=\"panel\">\n      <h3 style=\"margin: 0 0 6px 0; color: #38bdf8;\">Tactical Sensor Log</h3>\n      <p style=\"margin: 0; font-size: 13px; color: #94a3b8;\">Scanning sector 7G. Zero hostile anomalies detected.</p>\n    </div>\n  </div>\n\n  <!-- Fixed Floating Drone Beacon -->\n  <div class=\"fixed-drone\">🛸 DRONE SUPPORT</div>\n</div>",
      uz: "<style>\n  * { box-sizing: border-box; }\n  .spa-command {\n    background: #0b0f19;\n    border: 1px solid #1e293b;\n    border-radius: 16px;\n    padding: 20px;\n    color: white;\n    font-family: system-ui, sans-serif;\n    min-height: 400px;\n    position: relative;\n  }\n  /* Sticky Topbar: Sticks to top edge during scroll */\n  .sticky-navbar {\n    position: sticky;\n    top: 0;\n    z-index: 50;\n    background: rgba(17, 24, 39, 0.95);\n    border: 1px solid #1f2937;\n    border-radius: 10px;\n    padding: 12px 18px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 24px;\n    backdrop-filter: blur(8px);\n  }\n  .spa-dashboard-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n    margin-bottom: 20px;\n  }\n  .panel {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 20px;\n  }\n  .shield-card {\n    /* 2-Qadam: position: relative; yordamida bu kartani GPS chegara devori qiling */\n    background: #1e1b4b;\n    border: 2px solid #6366f1;\n    border-radius: 12px;\n    padding: 24px;\n    text-align: center;\n  }\n  .alarm-badge {\n    /* 3-Qadam: position: absolute; top: -10px; right: -10px; yordamida bu nishonni yuqori o'ng burchakka mixlang */\n    background: #ef4444;\n    color: white;\n    font-weight: 800;\n    padding: 4px 12px;\n    border-radius: 999px;\n    font-size: 11px;\n    box-shadow: 0 0 12px rgba(239, 68, 68, 0.8);\n  }\n  /* Fixed Drone: Glued to the viewport screen corner */\n  .fixed-drone {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    z-index: 100;\n    background: #38bdf8;\n    color: #0b0f19;\n    font-weight: 800;\n    font-size: 12px;\n    padding: 10px 18px;\n    border-radius: 999px;\n    box-shadow: 0 4px 16px rgba(56, 189, 248, 0.5);\n  }\n</style>\n\n<div class=\"spa-command\">\n  <!-- Sticky Navigation Header -->\n  <nav class=\"sticky-navbar\">\n    <div style=\"font-weight: 800; color: #38bdf8;\">🛰️ CyberCommand Defense SPA</div>\n    <div style=\"font-size: 12px; color: #10b981;\">● ALL SYSTEMS OPERATIONAL</div>\n  </nav>\n\n  <div class=\"spa-dashboard-grid\">\n    <div class=\"shield-card\">\n      <!-- 1-Qadam: Nishon elementini shu yerga qo'ying: <span class=\"alarm-badge\">🔥 ALERT</span> -->\n\n      <h3 style=\"margin: 0 0 6px 0; color: #a5b4fc;\">Plasma Shield Matrix</h3>\n      <p style=\"margin: 0; font-size: 13px; color: #cbd5e1;\">Deflector barrier active at 98.4% capacity.</p>\n    </div>\n\n    <div class=\"panel\">\n      <h3 style=\"margin: 0 0 6px 0; color: #38bdf8;\">Tactical Sensor Log</h3>\n      <p style=\"margin: 0; font-size: 13px; color: #94a3b8;\">Scanning sector 7G. Zero hostile anomalies detected.</p>\n    </div>\n  </div>\n\n  <!-- Fixed Floating Drone Beacon -->\n  <div class=\"fixed-drone\">🛸 DRONE SUPPORT</div>\n</div>"
    },
    targetCode: {
      en: "<style>\n  * { box-sizing: border-box; }\n  .spa-command {\n    background: #0b0f19;\n    border: 1px solid #1e293b;\n    border-radius: 16px;\n    padding: 20px;\n    color: white;\n    font-family: system-ui, sans-serif;\n    min-height: 400px;\n    position: relative;\n  }\n  /* Sticky Topbar: Sticks to top edge during scroll */\n  .sticky-navbar {\n    position: sticky;\n    top: 0;\n    z-index: 50;\n    background: rgba(17, 24, 39, 0.95);\n    border: 1px solid #1f2937;\n    border-radius: 10px;\n    padding: 12px 18px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 24px;\n    backdrop-filter: blur(8px);\n  }\n  .spa-dashboard-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n    margin-bottom: 20px;\n  }\n  .panel {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 20px;\n  }\n  .shield-card {\n    position: relative;\n    background: #1e1b4b;\n    border: 2px solid #6366f1;\n    border-radius: 12px;\n    padding: 24px;\n    text-align: center;\n  }\n  .alarm-badge {\n    position: absolute;\n    top: -10px;\n    right: -10px;\n    background: #ef4444;\n    color: white;\n    font-weight: 800;\n    padding: 4px 12px;\n    border-radius: 999px;\n    font-size: 11px;\n    box-shadow: 0 0 12px rgba(239, 68, 68, 0.8);\n  }\n  /* Fixed Drone: Glued to the viewport screen corner */\n  .fixed-drone {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    z-index: 100;\n    background: #38bdf8;\n    color: #0b0f19;\n    font-weight: 800;\n    font-size: 12px;\n    padding: 10px 18px;\n    border-radius: 999px;\n    box-shadow: 0 4px 16px rgba(56, 189, 248, 0.5);\n  }\n</style>\n\n<div class=\"spa-command\">\n  <!-- Sticky Navigation Header -->\n  <nav class=\"sticky-navbar\">\n    <div style=\"font-weight: 800; color: #38bdf8;\">🛰️ CyberCommand Defense SPA</div>\n    <div style=\"font-size: 12px; color: #10b981;\">● ALL SYSTEMS OPERATIONAL</div>\n  </nav>\n\n  <div class=\"spa-dashboard-grid\">\n    <div class=\"shield-card\">\n      <span class=\"alarm-badge\">🔥 ALERT</span>\n\n      <h3 style=\"margin: 0 0 6px 0; color: #a5b4fc;\">Plasma Shield Matrix</h3>\n      <p style=\"margin: 0; font-size: 13px; color: #cbd5e1;\">Deflector barrier active at 98.4% capacity.</p>\n    </div>\n\n    <div class=\"panel\">\n      <h3 style=\"margin: 0 0 6px 0; color: #38bdf8;\">Tactical Sensor Log</h3>\n      <p style=\"margin: 0; font-size: 13px; color: #94a3b8;\">Scanning sector 7G. Zero hostile anomalies detected.</p>\n    </div>\n  </div>\n\n  <!-- Fixed Floating Drone Beacon -->\n  <div class=\"fixed-drone\">🛸 DRONE SUPPORT</div>\n</div>",
      uz: "<style>\n  * { box-sizing: border-box; }\n  .spa-command {\n    background: #0b0f19;\n    border: 1px solid #1e293b;\n    border-radius: 16px;\n    padding: 20px;\n    color: white;\n    font-family: system-ui, sans-serif;\n    min-height: 400px;\n    position: relative;\n  }\n  /* Sticky Topbar: Sticks to top edge during scroll */\n  .sticky-navbar {\n    position: sticky;\n    top: 0;\n    z-index: 50;\n    background: rgba(17, 24, 39, 0.95);\n    border: 1px solid #1f2937;\n    border-radius: 10px;\n    padding: 12px 18px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 24px;\n    backdrop-filter: blur(8px);\n  }\n  .spa-dashboard-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n    margin-bottom: 20px;\n  }\n  .panel {\n    background: #111827;\n    border: 1px solid #1f2937;\n    border-radius: 12px;\n    padding: 20px;\n  }\n  .shield-card {\n    position: relative;\n    background: #1e1b4b;\n    border: 2px solid #6366f1;\n    border-radius: 12px;\n    padding: 24px;\n    text-align: center;\n  }\n  .alarm-badge {\n    position: absolute;\n    top: -10px;\n    right: -10px;\n    background: #ef4444;\n    color: white;\n    font-weight: 800;\n    padding: 4px 12px;\n    border-radius: 999px;\n    font-size: 11px;\n    box-shadow: 0 0 12px rgba(239, 68, 68, 0.8);\n  }\n  /* Fixed Drone: Glued to the viewport screen corner */\n  .fixed-drone {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    z-index: 100;\n    background: #38bdf8;\n    color: #0b0f19;\n    font-weight: 800;\n    font-size: 12px;\n    padding: 10px 18px;\n    border-radius: 999px;\n    box-shadow: 0 4px 16px rgba(56, 189, 248, 0.5);\n  }\n</style>\n\n<div class=\"spa-command\">\n  <!-- Sticky Navigation Header -->\n  <nav class=\"sticky-navbar\">\n    <div style=\"font-weight: 800; color: #38bdf8;\">🛰️ CyberCommand Defense SPA</div>\n    <div style=\"font-size: 12px; color: #10b981;\">● ALL SYSTEMS OPERATIONAL</div>\n  </nav>\n\n  <div class=\"spa-dashboard-grid\">\n    <div class=\"shield-card\">\n      <span class=\"alarm-badge\">🔥 ALERT</span>\n\n      <h3 style=\"margin: 0 0 6px 0; color: #a5b4fc;\">Plasma Shield Matrix</h3>\n      <p style=\"margin: 0; font-size: 13px; color: #cbd5e1;\">Deflector barrier active at 98.4% capacity.</p>\n    </div>\n\n    <div class=\"panel\">\n      <h3 style=\"margin: 0 0 6px 0; color: #38bdf8;\">Tactical Sensor Log</h3>\n      <p style=\"margin: 0; font-size: 13px; color: #94a3b8;\">Scanning sector 7G. Zero hostile anomalies detected.</p>\n    </div>\n  </div>\n\n  <!-- Fixed Floating Drone Beacon -->\n  <div class=\"fixed-drone\">🛸 DRONE SUPPORT</div>\n</div>"
    },
    targetDescription: {
      en: 'A Mission Defense SPA featuring a sticky topbar, fixed drone beacon, and a plasma shield card with an absolute alert badge pinned to the top-right corner.',
      uz: 'Yopishqoq sarlavha, ekranga mixlangan dron va yuqori o\'ng burchagiga qizil nishon qadalgan plazma qalqoni kartasidan iborat Mudofaa SPA sahifasi.'
    },
    anatomy: [
      {
        part: 'position: static;',
        role: { en: 'Default Flow', uz: 'Odatiy Oqim' },
        explanation: { en: 'The natural browser default. Top and left coordinates are ignored.', uz: 'Brauzerning odatiy holati. Top va left koordinatalari ishlamaydi.' },
        effect: { en: 'Normal document layout flow', uz: 'Matn kabi ketma-ket joylashadi' }
      },
      {
        part: 'position: relative;',
        role: { en: 'Boundary Fence', uz: 'Chegara devori' },
        explanation: { en: 'Tells children elements: "Your GPS coordinates are measured relative to ME!"', uz: 'Bola elementlarga: "Sizning koordinatalaringiz MENGA nisbatan o\'lchanadi!" deydi.' },
        effect: { en: 'Sets boundary reference for child', uz: 'Ichki elementlar uchun boshlang\'ich nuqta bo\'ladi' },
        visualPreview: '<div class="mini-canvas">📦 Parent Fence (relative)</div>'
      },
      {
        part: 'position: absolute;',
        role: { en: 'Corner Anchor', uz: 'Burchakka mixlash' },
        explanation: { en: 'Lifts the element off the page and flies it to exact top/right coordinates of its relative parent.', uz: 'Elementni matndan chiqarib, ota blokning aniq burchagiga uchirib olib boradi.' },
        effect: { en: 'Pins badge precisely over corner', uz: 'Nishonni burchakka aniq mixlaydi' },
        visualPreview: '<div class="mini-canvas">📌 Free-floating GPS Pin (absolute)</div>'
      },
      {
        part: 'position: fixed;',
        role: { en: 'Screen Lock', uz: 'Ekranga Mixlash' },
        explanation: { en: 'Glues the element directly to the browser screen. Does not move even when scrolling.', uz: 'Elementni brauzer ekraniga mixlaydi. Sahifa aylantirilganda ham qimirlamaydi.' },
        effect: { en: 'Frozen viewport position', uz: 'Ekran burchagida qotib turadi' }
      },
      {
        part: 'position: sticky;',
        role: { en: 'Scroll & Lock', uz: 'Surilish va Qotish' },
        explanation: { en: 'Scrolls naturally with content, then sticks to top edge when reaching the threshold.', uz: 'Matn bilan birga suriladi, lekin chegara kelganda tepaga yopishib qoladi.' },
        effect: { en: 'Sticky navigation bars', uz: 'Tepaga yopishuvchi menyu paneli' }
      }
    ],
    listOfTags: [
      { code: 'position: static;', name: { en: 'Static Position', uz: 'Statik Joylashuv' }, description: { en: 'Default document flow; top/left properties are ignored', uz: 'Odatiy oqim; top va left buyruqlari ishlamaydi' } },
      { code: 'position: relative;', name: { en: 'Relative Anchor', uz: 'Nisbiy Boshlang\'ich' }, description: { en: 'Normal flow, creates coordinate anchor frame for absolute children', uz: 'O\'z o\'rnida turadi va absolute bolalari uchun GPS ramka bo\'ladi' } },
      { code: 'position: absolute;', name: { en: 'Absolute Pin', uz: 'Mutlaq Joylashuv' }, description: { en: 'Flies freely to top/right coordinates inside nearest relative parent', uz: 'Eng yaqin relative ota blok ichida erkin koordinatada turadi' } },
      { code: 'position: fixed;', name: { en: 'Fixed Viewport', uz: 'Ekranga Qadalgan' }, description: { en: 'Locked to the screen window regardless of page scrolling', uz: 'Sahifa surilishidan qat\'i nazar ekran oynasiga mixlanadi' } },
      { code: 'position: sticky;', name: { en: 'Sticky Header', uz: 'Yopishqoq Joylashuv' }, description: { en: 'Scrolls naturally, then sticks to screen edge at threshold', uz: 'Oddiy suriladi va ma\'lum nuqtaga yetganda ekranga yopishadi' } }
    ],
    tagShowcase: [
      { tag: 'static', meaning: { en: 'Default natural flow', uz: 'Odatiy oqim' } },
      { tag: 'relative', meaning: { en: 'Parent anchor fence', uz: 'Ota chegara devori' } },
      { tag: 'absolute', meaning: { en: 'Exact corner pin', uz: 'Aniq burchak koordinatasi' } },
      { tag: 'fixed', meaning: { en: 'Glued to screen window', uz: 'Ekranga mixlangan' } },
      { tag: 'sticky', meaning: { en: 'Scrolls then sticks', uz: 'Suriladi va yopishadi' } }
    ],
    quickTags: ['position: relative;', 'position: absolute;', 'top: -10px;', 'right: -10px;', 'position: fixed;', 'position: sticky;'],
    challenge: {
      mission: {
        en: 'Complete the Mission Defense SPA! Step 1: Put <span class="alarm-badge">🔥 ALERT</span> inside .shield-card. Step 2: Add position: relative; to .shield-card. Step 3: Add position: absolute; top: -10px; right: -10px; to .alarm-badge!',
        uz: 'Mudofaa SPA sahifasini yakunlang! 1-Qadam: .shield-card ichiga <span class="alarm-badge">🔥 ALERT</span> qo\'ying. 2-Qadam: .shield-card ga position: relative; bering. 3-Qadam: .alarm-badge ga position: absolute; top: -10px; right: -10px; yozing!'
      },
      hint: {
        en: 'Place <span class="alarm-badge">🔥 ALERT</span> inside .shield-card. Give .shield-card position: relative; and give .alarm-badge position: absolute; top: -10px; right: -10px;',
        uz: '.shield-card ichiga <span class="alarm-badge">🔥 ALERT</span> yozing. .shield-card ga position: relative;, .alarm-badge ga esa position: absolute; top: -10px; right: -10px; bering.'
      },
      rules: [
        {
          type: 'hasTag',
          tag: 'span',
          message: 'Place the <span class="alarm-badge"> inside the card!'
        },
        {
          type: 'hasCssProperty',
          property: 'position',
          valuePattern: /relative/i,
          message: 'Add position: relative; to .shield-card to make it the anchor boundary!'
        },
        {
          type: 'hasCssProperty',
          property: 'position',
          valuePattern: /absolute/i,
          message: 'Add position: absolute; to .alarm-badge!'
        },
        {
          type: 'hasCssProperty',
          property: 'top',
          valuePattern: /-10px/i,
          message: 'Add top: -10px; to .alarm-badge!'
        },
        {
          type: 'hasCssProperty',
          property: 'right',
          valuePattern: /-10px/i,
          message: 'Add right: -10px; to .alarm-badge!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'A bulletin board: the wooden frame is "relative". The sticky memo note you pushpin onto the corner is "absolute". The wall clock you stare at regardless of where you walk is "fixed".',
        uz: 'E\'lonlar taxtasi: yog\'och ramka bu "relative". Burchakka tugmacha bilan qadalgan qog\'oz nishon esa "absolute". Devordagi har doim bir joyda turuvchi soat esa "fixed".'
      },
      discussionQuestions: [
        'What disaster happens to position: absolute if you forget position: relative on the parent container?',
        'How do modern SPA websites use position: sticky for top navigation bars?'
      ],
      commonMistakes: [
        'Forgetting position: relative on the parent, causing the badge to fly to the very top corner of the entire screen',
        'Confusing position: fixed (locks to viewport) with position: absolute (locks to relative parent)'
      ],
      funActivity: 'Simulate sticky: hold your hand at eye level. As you squat down, keep your hand pinned to eye level!'
    }
  },

  // ==========================================
  // THEME 23: Transitions
  // ==========================================
  {
    id: 'theme-23-transitions',
    module: 'modern-mastery',
    title: {
      en: 'Theme 23: Smooth Transitions (Buttery Hover Physics)',
      uz: '23-Mavzu: Yumshoq O\'tishlar (Smooth Transition Fizikasi)'
    },
    icon: '🧈',
    tag: 'transition: all 0.3s ease;',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, **Transition** is the magic butter of CSS! Without it, color and movement changes snap instantly like a light switch. With transition, everything glides smoothly like warm honey.',
        uz: 'Oddiy inson tilida, **Transition** — bu CSS ning yumshoq moyidir! Usiz rang va harakatlar chiroqni o\'chirgandek bir zumda sakraydi. Transition bilan esa hamma narsa xuddi asaldek mayin sirpanadi.'
      },
      whatIsATag: {
        en: `1. \`transition: all 0.3s ease;\` tells the browser: "When any style changes, glide it over 0.3 seconds!"\\n2. \`0.3s\` is the duration (a third of a second).\\n3. \`ease\` makes the start and stop feel natural and soft.`,
        uz: `1. \`transition: all 0.3s ease;\` — brauzerga: "Har qanday uslub o'zgarganda, uni 0.3 soniya davomida mayin o'zgartir!" deydi.\\n2. \`0.3s\` — davomiylik vaqti.\\n3. \`ease\` — harakatni tabiiy va yumshoq qiladi.`
      }
    },
    summary: {
      en: 'Transform abrupt visual changes into buttery-smooth hover animations with CSS transitions.',
      uz: 'CSS transition yordamida qo\'pol sakrashlarni mayin va chiroyli sichqoncha animatsiyalariga aylantiring.'
    },
    story: {
      en: 'The magic card currently jumps abruptly when hovered. Add transition physics so it glides upwards softly!',
      uz: 'Sehrli kartochka sichqoncha kelganda qo\'pol sakramoqda. U mayin ko\'tarilishi uchun transition fizikasini qo\'shing!'
    },
    initialCode: `<style>
  .magic-card {
    background: #141722;
    border: 2px solid #5b5fc7;
    border-radius: 12px;
    padding: 24px;
    color: white;
    text-align: center;
    /* Step: Add smooth transition physics here! */
    transition: none;
  }
  .magic-card:hover {
    transform: translateY(-10px);
    border-color: #2dd4bf;
    box-shadow: 0 10px 25px rgba(45, 212, 191, 0.3);
  }
</style>

<div class="magic-card">
  <h3>✨ Hover Over Me!</h3>
  <p>Make me float like butter!</p>
</div>`,
    targetCode: `<style>
  .magic-card {
    background: #141722;
    border: 2px solid #5b5fc7;
    border-radius: 12px;
    padding: 24px;
    color: white;
    text-align: center;
    transition: all 0.3s ease;
  }
  .magic-card:hover {
    transform: translateY(-10px);
    border-color: #2dd4bf;
    box-shadow: 0 10px 25px rgba(45, 212, 191, 0.3);
  }
</style>

<div class="magic-card">
  <h3>✨ Hover Over Me!</h3>
  <p>Make me float like butter!</p>
</div>`,
    targetDescription: {
      en: 'A card that glides up smoothly with a cyan border and glow when the mouse glides over it.',
      uz: 'Sichqoncha ustiga kelganda mayin yuqoriga ko\'tariladigan va ko\'k nur taratadigan kartochka.'
    },
    anatomy: [
      {
        part: 'transition:',
        role: {
          en: 'Physics Engine',
          uz: 'Fizika mexanizmi'
        },
        explanation: {
          en: 'Activates smooth animation between CSS state changes.',
          uz: 'CSS holatlari o\'zgarishi orasida mayin animatsiyani yoqadi.'
        },
        effect: {
          en: 'Glides changes smoothly',
          uz: 'O\'zgarishlarni mayin siljitadi'
        },
        visualPreview: '<div class="mini-canvas">🧈 Smooth Gliding Physics Active</div>'
      },
      {
        part: '0.3s ease',
        role: {
          en: 'Timing & Easing',
          uz: 'Vaqt va tezlanish'
        },
        explanation: {
          en: 'Completes in 0.3 seconds with natural deceleration.',
          uz: '0.3 soniyada tabiiy yumshoq tormozlanish bilan yakunlanadi.'
        },
        effect: {
          en: 'Natural organic motion curve',
          uz: 'Tabiiy organik harakat egri chizig\'i'
        },
        visualPreview: '<div class="mini-canvas">⏱️ 0.3 Seconds Duration</div>'
      }
    ],
    listOfTags: [
      {
        code: 'transition: all 0.3s ease;',
        name: {
          en: 'All Transitions',
          uz: 'Barcha o\'tishlar'
        },
        description: {
          en: 'Smooths every property change over 0.3 seconds',
          uz: 'Barcha o\'zgarishlarni 0.3 soniyada mayinlashtiradi'
        },
        exampleHtml: 'transition: all 0.3s ease;'
      },
      {
        code: 'transition: transform 0.2s;',
        name: {
          en: 'Transform Transition',
          uz: 'Transform o\'tishi'
        },
        description: {
          en: 'Smooths only transform movements',
          uz: 'Faqatgina harakat o\'zgarishlarini mayin qiladi'
        },
        exampleHtml: 'transition: transform 0.2s;'
      }
    ],
    tagShowcase: [
      {
        tag: 'transition: all 0.3s ease;',
        meaning: {
          en: 'Smooth physics',
          uz: 'Mayin harakat'
        }
      }
    ],
    quickTags: [
      'transition: all 0.3s ease;'
    ],
    challenge: {
      mission: {
        en: 'Set transition: all 0.3s ease; on .magic-card so it glides smoothly on hover!',
        uz: '.magic-card ga transition: all 0.3s ease; qo\'shing, shunda u hover bo\'lganda mayin suzadi!'
      },
      hint: {
        en: 'Change transition: none; to transition: all 0.3s ease; inside .magic-card.',
        uz: '.magic-card klassidagi transition qiymatini all 0.3s ease qiling.'
      },
      rules: [
        {
          type: 'hasCssProperty',
          property: 'transition',
          valuePattern: /all.*0\.3s|0\.3s.*ease/i,
          message: 'Set transition: all 0.3s ease; on .magic-card!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'Without transition is teleporting. With transition is walking smoothly from point A to point B.',
        uz: 'Transitionsiz bu teleportatsiya (bir zumda sakrash). Transition bilan esa A nuqtadan B nuqtaga mayin harakatlanish.'
      },
      discussionQuestions: [
        {
          en: 'What happens if you set transition to 2s? (It moves in slow motion!)',
          uz: 'Agar transition ni 2s qilsangiz nima bo\'ladi? (U sekinlashtirilgan kadrdek mayin suzadi!)'
        }
      ],
      commonMistakes: [
        {
          en: 'Putting the transition inside :hover instead of the base class',
          uz: 'transition ni asosiy klass o\'rniga :hover ichiga yozib qo\'yish'
        }
      ],
      funActivity: {
        en: 'Hover your mouse over the card to see it lift off the ground!',
        uz: 'Sichqonchani karta ustiga olib boring va uning yerga suzib ko\'tarilishini ko\'ring!'
      }
    }
  },

  // ==========================================
  // THEME 24: Theme 24: Filters & Neon Auras (drop-shadow & blur)
  // ==========================================
  {
    id: 'theme-24-filters',
    module: 'modern-mastery',
    title: {
      en: 'Theme 24: Filters & Neon Auras (drop-shadow & blur)',
      uz: '24-Mavzu: Filtrlari va Neon Aura (drop-shadow va blur)'
    },
    icon: '🔮',
    tag: 'filter: drop-shadow(), blur()',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, **CSS Filters** are photo magic effects! You can blur elements, turn them black-and-white, or give shapes glowing neon halo auras.',
        uz: 'Oddiy inson tilida, **CSS Filtrlari** — bu fotosuratlarning sehrli effektlaridir! Ular yordamida shakllarni xiralashtirish, oq-qora qilish yoki atrofida porlovchi neon auralar hosil qilish mumkin.'
      },
      whatIsATag: {
        en: `1. \`filter: drop-shadow(0 0 20px #2dd4bf);\` creates a glowing colored halo that perfectly outlines emojis and transparent PNGs!\\n2. \`filter: blur(4px);\` softens things like frosted glass.\\n3. \`filter: grayscale(100%);\` turns everything black & white.`,
        uz: `1. \`filter: drop-shadow(0 0 20px #2dd4bf);\` — emoji yoki shaffof rasmlar atrofida neon nur taratadi!\\n2. \`filter: blur(4px);\` — xuddi muzlagan oynadek xiralashtiradi.\\n3. \`filter: grayscale(100%);\` — hamma ranglarni oq-qora qiladi.`
      }
    },
    summary: {
      en: 'Create glowing neon auras, photo blurs, and glassmorphism with CSS filter powers.',
      uz: 'CSS filter yordamida porlovchi neon auralar, xiralashgan rasmlar va shaffof oyna effektlari yarating.'
    },
    story: {
      en: 'This legendary diamond crystal is asleep! Add a glowing cyan drop-shadow filter to awaken its magic power.',
      uz: 'Ushbu afsonaviy olmos uxlamoqda! Uning sehrli kuchini uyg\'otish uchun unga porlovchi ko\'k drop-shadow filtrini qo\'shing.'
    },
    initialCode: `<style>
  .crystal {
    font-size: 64px;
    text-align: center;
    padding: 30px;
    /* Step: Add a neon drop-shadow filter to make it glow! */
    filter: none;
  }
</style>

<div class="crystal">
  💎
</div>`,
    targetCode: `<style>
  .crystal {
    font-size: 64px;
    text-align: center;
    padding: 30px;
    filter: drop-shadow(0 0 20px #2dd4bf);
  }
</style>

<div class="crystal">
  💎
</div>`,
    targetDescription: {
      en: 'A legendary crystal diamond radiating a radiant cyan neon light halo.',
      uz: 'Atrofida yorqin och ko\'k neon nur taratayotgan afsonaviy olmos.'
    },
    anatomy: [
      {
        part: 'filter:',
        role: {
          en: 'Photo Filter Engine',
          uz: 'Foto filtr mexanizmi'
        },
        explanation: {
          en: 'Applies visual graphics processing to the rendered element.',
          uz: 'Chizilgan elementga vizual grafik ishlov berishni qo\'llaydi.'
        },
        effect: {
          en: 'Enables visual graphics filters',
          uz: 'Vizual grafik filtrlarni yoqadi'
        },
        visualPreview: '<div class="mini-canvas">🔮 Graphic Filter Active</div>'
      },
      {
        part: 'drop-shadow(0 0 20px #2dd4bf)',
        role: {
          en: 'Neon Contour Glow',
          uz: 'Neon kontur nuri'
        },
        explanation: {
          en: 'Casts a soft 20px colored light halo wrapping the exact shape of the emoji.',
          uz: 'Emoji shaklini aniq o\'rab turuvchi 20px lik mayin rangli nur halqasini taratadi.'
        },
        effect: {
          en: 'Radiates glowing neon aura',
          uz: 'Porlovchi neon nur taratadi'
        },
        visualPreview: '<div class="mini-canvas"><span style="filter: drop-shadow(0 0 12px #2dd4bf); font-size: 20px;">💎</span> Glow</div>'
      }
    ],
    listOfTags: [
      {
        code: 'filter: drop-shadow(0 0 15px cyan);',
        name: {
          en: 'Drop Shadow Glow',
          uz: 'Konturli nur'
        },
        description: {
          en: 'Wraps the exact shape in a glowing colored light halo',
          uz: 'Shaklni porlovchi rangli nur halqasi bilan o\'raydi'
        },
        exampleHtml: 'filter: drop-shadow(0 0 10px #2dd4bf);'
      },
      {
        code: 'filter: blur(4px);',
        name: {
          en: 'Blur Filter',
          uz: 'Xiralashtirish filtri'
        },
        description: {
          en: 'Softens the element like frosted glass',
          uz: 'Elementni xira muzlagan oynadek ko\'rsatadi'
        },
        exampleHtml: 'filter: blur(4px);'
      },
      {
        code: 'filter: grayscale(100%);',
        name: {
          en: 'Grayscale',
          uz: 'Oq-qora rejim'
        },
        description: {
          en: 'Turns any photo into vintage black & white',
          uz: 'Har qanday rangli fotosuratni oq-qora qiladi'
        },
        exampleHtml: 'filter: grayscale(100%);'
      }
    ],
    tagShowcase: [
      {
        tag: 'drop-shadow(0 0 15px cyan)',
        meaning: {
          en: 'Neon aura',
          uz: 'Neon aura'
        }
      },
      {
        tag: 'blur(4px)',
        meaning: {
          en: 'Frosted glass',
          uz: 'Xiralashtirish'
        }
      }
    ],
    quickTags: [
      'filter: drop-shadow(0 0 20px #2dd4bf);',
      'filter: blur(4px);'
    ],
    challenge: {
      mission: {
        en: 'Add filter: drop-shadow(0 0 20px #2dd4bf); to .crystal so the diamond radiates a neon glow!',
        uz: '.crystal ga filter: drop-shadow(0 0 20px #2dd4bf); qo\'shing, shunda olmos neon nur taratadi!'
      },
      hint: {
        en: 'Set filter to drop-shadow(0 0 20px #2dd4bf); inside the .crystal class.',
        uz: '.crystal klassidagi filter qiymatini drop-shadow(0 0 20px #2dd4bf); qiling.'
      },
      rules: [
        {
          type: 'hasCssProperty',
          property: 'filter',
          valuePattern: /drop-shadow/i,
          message: 'Add the drop-shadow filter to .crystal!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'drop-shadow is like turning on a colored light bulb directly behind your object so it glows like a neon sign.',
        uz: 'drop-shadow buyumning orqasida rangli lampochkani yoqib, uni neon reklama belgisidek porlatishga o\'xshaydi.'
      },
      discussionQuestions: [
        {
          en: 'How is drop-shadow different from box-shadow? (drop-shadow outlines transparent shapes and emojis, box-shadow only shadows the square box!)',
          uz: 'drop-shadow bilan box-shadow farqi nima? (drop-shadow shaffof emoji shaklini o\'rab nur sochadi, box-shadow esa faqat to\'rtburchak qutini!)'
        }
      ],
      commonMistakes: [
        {
          en: 'Writing box-shadow instead of filter: drop-shadow',
          uz: 'filter: drop-shadow o\'rniga box-shadow yozib qo\'yish'
        }
      ],
      funActivity: {
        en: 'Change #2dd4bf to #ff5e7e to make the crystal glow hot pink!',
        uz: '#2dd4bf rangini #ff5e7e ga almashtirib, olmosni yorqin pushti rangda porlating!'
      }
    }
  },
  // ==========================================
  // THEME 25: CSS Overflow
  // ==========================================
  {
    id: 'theme-25-overflow',
    module: 'css-core',
    title: {
      en: 'Theme 25: CSS Overflow (Clipping & Cyber Scrollbars)',
      uz: '25-Mavzu: CSS Overflow (Qirqish va Kiber Skrollbar)'
    },
    icon: '🌊',
    tag: 'overflow: hidden | scroll | auto',
    humanIntro: {
      whatIsIt: {
        en: 'Imagine packing 10 soccer balls into a tiny shoe box — they spill out all over the floor! In CSS, when words or images are too big for their container, this is called **Overflow**. With the **overflow** property, you can decide whether content spills out, gets laser-cut cleanly, or creates a sleek cyber scrollbar!',
        uz: "Kichik poyabzal qutisiga 10 ta futbol to'pini tiqsangiz nima bo'ladi? Polga toshib tushadi! CSS da matn yoki rasm o'z qutisiga sig'may qolsa, bu **Overflow** deyiladi. Siz overflow yordamida toshib chiqishni, lazerdek toza qirqib yashirishni yoki kiber skrollbar qo'shishni boshqarasiz!"
      },
      whatIsATag: {
        en: '**overflow: hidden** slices away anything poking out of the borders like magic. **overflow-y: auto** adds a scrollbar only when needed so long hacker logs stay neat!',
        uz: "**overflow: hidden** qutidan chiqib ketgan narsalarni lazerdek qirqib yashiradi. **overflow-y: auto** esa kerak bo'lgandagina zamonaviy skrollbar chiqaradi!"
      }
    },
    summary: {
      en: 'Master container overflow, crop messy spills with hidden, and build high-tech scrollable terminals.',
      uz: "Konteyner toshishini boshqaring, hidden bilan tozalang va skroll bo'ladigan kiber terminallar quring."
    },
    story: {
      en: 'The Starship Cyber Terminal is overflowing with thousands of incoming cosmic telemetry logs! Use overflow-y: auto to keep the terminal compact and scrollable!',
      uz: "Yulduz kemasi terminali koinotdan kelayotgan minglab xabarlar bilan toshib ketdi! overflow-y: auto qo'shib, xabarlarni ixcham skroll qilinadigan qiling!"
    },
    initialCode: `<style>
  .terminal-box {
    width: 320px;
    height: 150px;
    background: #090d16;
    border: 2px solid #38bdf8;
    border-radius: 12px;
    padding: 16px;
    color: #38bdf8;
    font-family: monospace;
    /* Step: Add overflow-y: auto to create a smooth scrolling log! */
  }
  .log-line {
    margin-bottom: 8px;
    padding: 6px 10px;
    background: rgba(56, 189, 248, 0.08);
    border-radius: 6px;
    border-left: 3px solid #38bdf8;
  }
</style>

<div class="terminal-box">
  <div class="log-line">🛰️ [SYS] Satellite Link: Online</div>
  <div class="log-line">⚡ [PWR] Reactor Core at 99%</div>
  <div class="log-line">👾 [WARN] Alien Signal Detected!</div>
  <div class="log-line">🛡️ [DEF] Shield Matrix: Active</div>
  <div class="log-line">🚀 [NAV] Warp Coordinates Locked</div>
  <div class="log-line">🏁 [SYS] Hyperspace Ready!</div>
</div>`,
    targetCode: `<style>
  .terminal-box {
    width: 320px;
    height: 150px;
    background: #090d16;
    border: 2px solid #38bdf8;
    border-radius: 12px;
    padding: 16px;
    color: #38bdf8;
    font-family: monospace;
    overflow-y: auto;
  }
  .log-line {
    margin-bottom: 8px;
    padding: 6px 10px;
    background: rgba(56, 189, 248, 0.08);
    border-radius: 6px;
    border-left: 3px solid #38bdf8;
  }
</style>

<div class="terminal-box">
  <div class="log-line">🛰️ [SYS] Satellite Link: Online</div>
  <div class="log-line">⚡ [PWR] Reactor Core at 99%</div>
  <div class="log-line">👾 [WARN] Alien Signal Detected!</div>
  <div class="log-line">🛡️ [DEF] Shield Matrix: Active</div>
  <div class="log-line">🚀 [NAV] Warp Coordinates Locked</div>
  <div class="log-line">🏁 [SYS] Hyperspace Ready!</div>
</div>`,
    targetDescription: {
      en: 'A high-tech cyberpunk terminal with a neon blue border that neatly scrolls through 6 telemetry logs without spilling!',
      uz: "6 ta telemetriya xabarini toshib ketmasdan chiroyli skroll qiladigan neon ko'k hoshiyali kiber terminal!"
    },
    anatomy: [
      {
        code: 'overflow: hidden;',
        name: { en: 'Overflow Hidden', uz: 'Overflow Hidden' },
        purpose: { en: 'Clips off anything that spills outside the boundaries.', uz: 'Chegaradan toshgan har qanday narsani qirqib yashiradi.' },
        role: { en: 'Laser scissors', uz: 'Lazer qaychi' }
      },
      {
        code: 'overflow-y: auto;',
        name: { en: 'Overflow Vertical Auto', uz: 'Vertikal Avto Skroll' },
        purpose: { en: 'Displays a vertical scrollbar only when content overflows.', uz: 'Faqatgina matn toshganda vertikal skrollbarni chiqaradi.' },
        role: { en: 'Scroll elevator', uz: 'Skroll lifti' }
      }
    ],
    listOfTags: [
      {
        code: 'overflow: hidden',
        name: { en: 'Hidden Overflow', uz: 'Yashirin Toshish' },
        description: { en: 'Hides overflowing content cleanly.', uz: 'Toshgan tarkibni toza yashiradi.' }
      },
      {
        code: 'overflow-y: auto',
        name: { en: 'Auto Scrollbar', uz: 'Avtomatik Skroll' },
        description: { en: 'Adds scrollbar if content exceeds container height.', uz: "Balandlikdan oshganda skrollbar qo'shadi." }
      }
    ],
    quickTags: ['overflow: hidden;', 'overflow-y: auto;', 'overflow: scroll;'],
    challenge: {
      mission: {
        en: 'Add overflow-y: auto; to .terminal-box so all telemetry logs fit inside a scrollable window!',
        uz: ".terminal-box ga overflow-y: auto; qo'shing, shunda barcha telemetriya xabarlari skroll oynasida sig'adi!"
      },
      hint: {
        en: 'Write overflow-y: auto; inside the .terminal-box style block.',
        uz: '.terminal-box uslublar bloki ichiga overflow-y: auto; yozing.'
      },
      rules: [
        {
          type: 'hasCssProperty',
          property: 'overflow-y',
          valuePattern: /auto|scroll/i,
          message: 'Add overflow-y: auto to .terminal-box!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'Overflow is like a toy box. If you stuff too many toys in, overflow: hidden cuts the tops off, while overflow: scroll turns the box into an escalator!',
        uz: "Overflow o'yinchoq qutisiga o'xshaydi. O'yinchoqlar ko'payib ketsa, hidden ularni qirqadi, scroll esa qutini eskalatorga aylantiradi!"
      },
      discussionQuestions: [
        {
          en: 'Why do round avatar cards use overflow: hidden? (So square images get clipped into clean circles!)',
          uz: "Nima uchun yumaloq avatarlar overflow: hidden ishlatadi? (To'rtburchak rasmlar chiroyli aylana bo'lib qirqilishi uchun!)"
        }
      ],
      commonMistakes: [
        {
          en: 'Forgetting to give the container a fixed height or max-height.',
          uz: "Konteynerga aniq height yoki max-height berishni unutib qo'yish."
        }
      ],
      funActivity: {
        en: 'Change height from 150px to 80px to see how fast the scrollbar adapts!',
        uz: "Balandlikni 150px dan 80px ga o'zgartirib, skrollbar qanday moslashishini ko'ring!"
      }
    }
  },

  // ==========================================
  // THEME 26: Gradients
  // ==========================================
  {
    id: 'theme-26-gradients',
    module: 'modern-mastery',
    title: {
      en: 'Theme 26: Gradients (Linear, Radial & Conic Neons)',
      uz: '26-Mavzu: Gradientlar (Linear, Radial va Conic Neonlar)'
    },
    icon: '🌈',
    tag: 'background: linear-gradient() | radial-gradient()',
    humanIntro: {
      whatIsIt: {
        en: 'Why settle for one flat color when you can blend colors together like a neon sunset or a glowing space nebula? In CSS, a **Gradient** smoothly transitions between multiple colors. You can make diagonal rays (**linear-gradient**), glowing cosmic energy orbs (**radial-gradient**), or 360-degree radar sweeps (**conic-gradient**)!',
        uz: "Nega faqat bitta oddiy rang bilan cheklanish kerak, agar quyosh botishi yoki kosmik tumanlik kabi yorqin neon ranglarni bir-biriga qorishtirish mumkin bo'lsa? CSS da **Gradient** ranglar orasidagi silliq o'tishdir. Siz diagonal nurlar (linear), nur taratuvchi sharlar (radial) yoki 360 darajali kiber radarlar (conic) yasashingiz mumkin!"
      },
      whatIsATag: {
        en: '**linear-gradient(135deg, #ff007a, #7928ca)** blends colors at a 135-degree angle. **radial-gradient(circle, #00f2fe, #0b0d13)** radiates light outwards from the center!',
        uz: '**linear-gradient(135deg, #ff007a, #7928ca)** ranglarni 135 gradus burchak ostida qorishtiradi. **radial-gradient(circle, #00f2fe, #0b0d13)** esa markazdan nur taratadi!'
      }
    },
    summary: {
      en: 'Create stunning linear, radial, and multi-stop glowing gradients that make designs look like AAA video games.',
      uz: "Saytlarni AAA video o'yinlardek ko'rsatadigan ajoyib linear, radial va ko'p rangli gradientlar yarating."
    },
    story: {
      en: 'The Galaxy Explorers Club needs two glowing badges: a Nebula Card powered by a diagonal linear gradient and a Cosmic Orb powered by a center radial gradient!',
      uz: "Koinot Tadqiqotchilari Klubiga ikkita yorqin nishon kerak: diagonal linear gradientli Tumanlik Kartasi va markazdan nur taratuvchi Kosmik Shar!"
    },
    initialCode: `<style>
  .gradient-showcase {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 24px;
    background: #090d16;
    border-radius: 14px;
  }
  .nebula-card {
    width: 150px;
    height: 150px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 800;
    box-shadow: 0 8px 24px rgba(255, 0, 122, 0.4);
    /* Step 1: Add background: linear-gradient(135deg, #ff007a, #7928ca); */
    background: #ff007a;
  }
  .cosmic-orb {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 800;
    box-shadow: 0 0 35px #00f2fe;
    /* Step 2: Add background: radial-gradient(circle at 35% 35%, #00f2fe 0%, #0b0d13 80%); */
    background: #00f2fe;
  }
</style>

<div class="gradient-showcase">
  <div class="nebula-card">✨ NEBULA</div>
  <div class="cosmic-orb">🔮 ORB</div>
</div>`,
    targetCode: `<style>
  .gradient-showcase {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 24px;
    background: #090d16;
    border-radius: 14px;
  }
  .nebula-card {
    width: 150px;
    height: 150px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 800;
    box-shadow: 0 8px 24px rgba(255, 0, 122, 0.4);
    background: linear-gradient(135deg, #ff007a, #7928ca);
  }
  .cosmic-orb {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 800;
    box-shadow: 0 0 35px #00f2fe;
    background: radial-gradient(circle at 35% 35%, #00f2fe 0%, #0b0d13 80%);
  }
</style>

<div class="gradient-showcase">
  <div class="nebula-card">✨ NEBULA</div>
  <div class="cosmic-orb">🔮 ORB</div>
</div>`,
    targetDescription: {
      en: 'A neon showcase with a pink-purple diagonal linear gradient card alongside a glowing 3D cyan radial energy sphere!',
      uz: "Pushti-binafsha diagonal linear gradientli karta hamda 3D ko'rinishdagi nur taratuvchi sian radial shar!"
    },
    anatomy: [
      {
        code: 'linear-gradient(135deg, color1, color2)',
        name: { en: 'Linear Gradient', uz: 'Chiziqli Gradient' },
        purpose: { en: 'Blends colors across a directional straight line.', uz: "Ranglarni to'g'ri yo'nalishli chiziq bo'ylab qorishtiradi." },
        role: { en: 'Directional light', uz: "Yo'nalishli nur" }
      },
      {
        code: 'radial-gradient(circle, color1, color2)',
        name: { en: 'Radial Gradient', uz: 'Doiraviy Gradient' },
        purpose: { en: 'Blends colors radiating out from a central focal point.', uz: "Ranglarni markaziy nuqtadan tashqariga doira shaklida qorishtiradi." },
        role: { en: 'Glowing orb', uz: 'Nur taratuvchi shar' }
      }
    ],
    listOfTags: [
      {
        code: 'linear-gradient(deg, c1, c2)',
        name: { en: 'Linear Gradient', uz: 'Linear Gradient' },
        description: { en: 'Transitions colors on an angle.', uz: "Ranglarni burchak bo'yicha o'tkazadi." }
      },
      {
        code: 'radial-gradient(circle, c1, c2)',
        name: { en: 'Radial Gradient', uz: 'Radial Gradient' },
        description: { en: 'Radiates colors outward in circular waves.', uz: "Ranglarni doira bo'ylab to'lqinlantiradi." }
      }
    ],
    quickTags: [
      'background: linear-gradient(135deg, #ff007a, #7928ca);',
      'background: radial-gradient(circle, #00f2fe, #0b0d13);'
    ],
    challenge: {
      mission: {
        en: 'Add background: linear-gradient(135deg, #ff007a, #7928ca); to .nebula-card!',
        uz: ".nebula-card ga background: linear-gradient(135deg, #ff007a, #7928ca); qo'shing!"
      },
      hint: {
        en: 'Replace the flat #ff007a background with linear-gradient(135deg, #ff007a, #7928ca);.',
        uz: "Oddiy #ff007a rangini linear-gradient(135deg, #ff007a, #7928ca); ga almashtiring."
      },
      rules: [
        {
          type: 'hasCssProperty',
          property: 'background',
          valuePattern: /linear-gradient/i,
          message: 'Add linear-gradient background to .nebula-card!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'Think of watercolor paints on wet paper: two colors meet and blend together seamlessly without a sharp border.',
        uz: "Xuddi nam qog'ozdagi akvarel bo'yoqlariga o'xshaydi: ikki rang qattiq chegarasiz silliq aralashib ketadi."
      },
      discussionQuestions: [
        {
          en: 'What happens if you change 135deg to 45deg or 90deg? (The direction of the gradient rotates!)',
          uz: "135deg burchagini 45deg yoki 90deg qilsangiz nima o'zgaradi? (Gradient oqim yo'nalishi aylanadi!)"
        }
      ],
      commonMistakes: [
        {
          en: 'Missing commas between colors or forgetting the closing parenthesis.',
          uz: "Ranglar orasidagi vergulni yoki yopuvchi qavsni unutib qo'yish."
        }
      ],
      funActivity: {
        en: 'Try adding a 3rd color: linear-gradient(90deg, red, yellow, blue);!',
        uz: "3-rangni qo'shib ko'ring: linear-gradient(90deg, red, yellow, blue);!"
      }
    }
  },

  // ==========================================
  // THEME 27: Media Queries
  // ==========================================
  {
    id: 'theme-27-media-queries',
    module: 'modern-mastery',
    title: {
      en: 'Theme 27: Media Queries (Responsive Mobile & Desktop)',
      uz: '27-Mavzu: Media Queries (Mobil va Kompyuterga Moslashuvchanlik)'
    },
    icon: '📱',
    tag: '@media (max-width: 768px)',
    humanIntro: {
      whatIsIt: {
        en: 'People visit web pages on wide desktop monitors and narrow pocket smartphones! If you keep the layout the same, elements get squeezed and unreadable on small screens. **Media Queries** act like a magic sensor that detects screen width and automatically changes styles so your page looks incredible on every device!',
        uz: "Odamlar saytlarga keng kompyuter ekranlaridan ham, tor telefonlardan ham kirishadi! Agar tartib o'zgarmasa, kichik ekranlarda elementlar siqilib xunuk ko'rinadi. **Media Queries** ekran kengligini sezuvchi sehrli sensor kabi ishlaydi va har qanday qurilmada saytni ajoyib ko'rsatadi!"
      },
      whatIsATag: {
        en: '**@media (max-width: 768px)** tells the browser: "If the screen is 768 pixels or narrower, stack columns vertically so thumb-scrolling is effortless!"',
        uz: `**@media (max-width: 768px)** brauzerga aytadi: "Agar ekran 768 piksel yoki undan kichik bo'lsa, ustunlarni vertikal terib ber, shunda barmoq bilan o'qish oson bo'ladi!"`
      }
    },
    summary: {
      en: 'Build responsive mobile-friendly layouts that adapt fluidly between desktop columns and mobile stacks.',
      uz: "Kompyuter ustunlari va mobil terilishlar o'rtasida erkin moslashadigan responsiv dizaynlar quring."
    },
    story: {
      en: 'The Cyber Squad roster displays 3 heroes side-by-side on computers. Add a media query so when viewed on a phone, the heroes stack vertically into comfortable cards!',
      uz: "Kiber Jamoa ro'yxati kompyuterda 3 ta qahramonni yonma-yon ko'rsatadi. Media query qo'shing, shunda telefonda ular qulay vertikal kartalar bo'lib teriladi!"
    },
    initialCode: `<style>
  .squad-dock {
    display: flex;
    gap: 16px;
    padding: 18px;
    background: #0f172a;
    border-radius: 12px;
  }
  .hero-card {
    flex: 1;
    background: #1e293b;
    border: 1px solid #334155;
    padding: 16px;
    border-radius: 10px;
    color: white;
    text-align: center;
  }
  .mobile-tag {
    display: none;
    color: #38bdf8;
    font-weight: bold;
    margin-bottom: 6px;
  }
  /* Step: Add @media (max-width: 768px) { .squad-dock { flex-direction: column; } .mobile-tag { display: block; } } */
</style>

<div class="squad-dock">
  <div class="hero-card">
    <div class="mobile-tag">📱 Phone Stack</div>
    <h3>🥷 Ninja</h3>
    <p>Stealth 100%</p>
  </div>
  <div class="hero-card">
    <div class="mobile-tag">📱 Phone Stack</div>
    <h3>⚡ Mage</h3>
    <p>Mana 100%</p>
  </div>
  <div class="hero-card">
    <div class="mobile-tag">📱 Phone Stack</div>
    <h3>🤖 Mech</h3>
    <p>Armor 100%</p>
  </div>
</div>`,
    targetCode: `<style>
  .squad-dock {
    display: flex;
    gap: 16px;
    padding: 18px;
    background: #0f172a;
    border-radius: 12px;
  }
  .hero-card {
    flex: 1;
    background: #1e293b;
    border: 1px solid #334155;
    padding: 16px;
    border-radius: 10px;
    color: white;
    text-align: center;
  }
  .mobile-tag {
    display: none;
    color: #38bdf8;
    font-weight: bold;
    margin-bottom: 6px;
  }
  @media (max-width: 768px) {
    .squad-dock {
      flex-direction: column;
    }
    .mobile-tag {
      display: block;
    }
  }
</style>

<div class="squad-dock">
  <div class="hero-card">
    <div class="mobile-tag">📱 Phone Stack</div>
    <h3>🥷 Ninja</h3>
    <p>Stealth 100%</p>
  </div>
  <div class="hero-card">
    <div class="mobile-tag">📱 Phone Stack</div>
    <h3>⚡ Mage</h3>
    <p>Mana 100%</p>
  </div>
  <div class="hero-card">
    <div class="mobile-tag">📱 Phone Stack</div>
    <h3>🤖 Mech</h3>
    <p>Armor 100%</p>
  </div>
</div>`,
    targetDescription: {
      en: 'A responsive squad dock that intelligently stacks into single-column mobile cards on screens below 768px wide!',
      uz: "768px dan kichik ekranlarda aqlli ravishda bitta ustunli mobil kartalariga aylanadigan responsiv jamoa paneli!"
    },
    anatomy: [
      {
        code: '@media (max-width: 768px)',
        name: { en: 'Media Query Rule', uz: 'Media Query Qoidasi' },
        purpose: { en: 'Triggers when viewport width is 768px or narrower.', uz: "Ekran kengligi 768px yoki undan kichik bo'lganda ishga tushadi." },
        role: { en: 'Screen width sensor', uz: "Ekran o'lchami sensori" }
      },
      {
        code: 'flex-direction: column;',
        name: { en: 'Column Direction', uz: "Ustun Yo'nalishi" },
        purpose: { en: 'Stacks child elements on top of each other.', uz: "Bolalar elementlarini ustma-ust teradi." },
        role: { en: 'Vertical stacker', uz: 'Vertikal teruvchi' }
      }
    ],
    listOfTags: [
      {
        code: '@media (max-width: ...px)',
        name: { en: 'Media Query', uz: 'Media Query' },
        description: { en: 'Conditional styling for mobile/tablet screen sizes.', uz: "Mobil va planshet ekran o'lchamlari uchun shartli uslublar." }
      }
    ],
    quickTags: [
      '@media (max-width: 768px) { .squad-dock { flex-direction: column; } }'
    ],
    challenge: {
      mission: {
        en: 'Add @media (max-width: 768px) and set .squad-dock to flex-direction: column!',
        uz: "@media (max-width: 768px) qo'shing va .squad-dock ga flex-direction: column bering!"
      },
      hint: {
        en: 'Wrap the responsive CSS inside @media (max-width: 768px) { ... }.',
        uz: 'Moslashuvchan CSS ni @media (max-width: 768px) { ... } ichiga oling.'
      },
      rules: [
        {
          type: 'custom',
          check: code => code.includes('@media') && code.includes('max-width') && code.includes('column'),
          message: 'Add @media (max-width: 768px) and set flex-direction: column!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'Media queries are like an umbrella: you only open it when it starts raining (when the screen gets small)!',
        uz: "Media query xuddi soyabonga o'xshaydi: uni faqat yomg'ir yoqqanda (ekran kichrayganda) ochasiz!"
      },
      discussionQuestions: [
        {
          en: 'Why is 768px commonly used? (It is the standard boundary between tablets/phones and laptop screens!)',
          uz: "Nima uchun 768px ko'p ishlatiladi? (Bu telefon/planshet va noutbuk ekranlari orasidagi standart chegaradir!)"
        }
      ],
      commonMistakes: [
        {
          en: 'Forgetting to close the outer curly brace } of the @media block.',
          uz: "@media blokining tashqi jingalak qavsini } yopishni unutib qo'yish."
        }
      ],
      funActivity: {
        en: 'Resize your browser window narrow and wide to watch the cards snap between 3 columns and 1 stack!',
        uz: "Brauzer oynasini kichraytirib-kattalashtirib, kartalar qanday qilib 3 ustun va 1 ustunga o'tishini ko'ring!"
      }
    }
  },

  // ==========================================
  // THEME 28: Web Fonts & SVG Icons
  // ==========================================
  {
    id: 'theme-28-web-fonts-icons',
    module: 'third-party',
    title: {
      en: 'Theme 28: Web Fonts & SVG Icons (Google Fonts & Vector Badges)',
      uz: '28-Mavzu: Veb Shriftlar va SVG Ikonkalar (Google Fonts & Vektor Nishonlar)'
    },
    icon: '🖋️',
    tag: '<link href="...fonts"> | <svg>',
    humanIntro: {
      whatIsIt: {
        en: 'Default fonts look like homework essays. Real websites connect **Google Fonts** to give their titles futuristic cyber vibes! And instead of blurry photos that pixelate when zoomed, modern sites use **SVG vector graphics** — math-drawn shapes that stay razor-sharp on retina screens!',
        uz: "Standart shriftlar maktab inshosiga o'xshaydi. Haqiqiy veb-saytlar esa sarlavhalarga kinolardagidek kiber ko'rinish berish uchun **Google Fonts** ulaydi! Katta qilganda xiralashadigan rasmlar o'rniga esa matematik aniqlikdagi tiniq **SVG vektor ikonkalardan** foydalaniladi!"
      },
      whatIsATag: {
        en: 'font-family: \'Orbitron\', monospace; applies futuristic letterforms. <svg viewBox="0 0 24 24"> draws crystal-clear vector artwork with code!',
        uz: `font-family: 'Orbitron', monospace; kelajak harflarini beradi. <svg viewBox="0 0 24 24"> esa kod yordamida o'ta tiniq vektor nishonlar chizadi!`
      }
    },
    summary: {
      en: 'Level up typography with Google Fonts aesthetics, letter-spacing, and scalable vector SVG icon badges.',
      uz: "Google Fonts tipografiyasi, letter-spacing va o'lchami o'zgaruvchan SVG vektor ikonkalar bilan dizaynni yuksaltiring."
    },
    story: {
      en: 'The Grand Champion Guild needs an official crest with a glowing gold SVG vector star and wide-spaced futuristic typography!',
      uz: "Oliy Chempionlar Gildiyasiga oltin nurli SVG yulduzi va keng ochilgan kiber shriftli rasmiy nishon kerak!"
    },
    initialCode: `<style>
  .guild-card {
    background: #0f172a;
    border: 2px solid #38bdf8;
    border-radius: 14px;
    padding: 24px;
    color: white;
    max-width: 320px;
    margin: 20px auto;
    text-align: center;
    box-shadow: 0 0 25px rgba(56, 189, 248, 0.25);
  }
  .guild-title {
    /* Step: Add font-family: 'Orbitron', monospace, sans-serif; and letter-spacing: 3px; */
    color: #38bdf8;
    margin: 12px 0 6px;
  }
  .svg-icon {
    width: 44px;
    height: 44px;
    fill: #f59e0b;
    filter: drop-shadow(0 0 10px rgba(245, 158, 11, 0.6));
  }
</style>

<div class="guild-card">
  <svg class="svg-icon" viewBox="0 0 24 24">
    <polygon points="12,2 15,8 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,8" />
  </svg>
  <h2 class="guild-title">CYBER GUILD</h2>
  <p>Grand Champions of CodeCraft ⭐</p>
</div>`,
    targetCode: `<style>
  .guild-card {
    background: #0f172a;
    border: 2px solid #38bdf8;
    border-radius: 14px;
    padding: 24px;
    color: white;
    max-width: 320px;
    margin: 20px auto;
    text-align: center;
    box-shadow: 0 0 25px rgba(56, 189, 248, 0.25);
  }
  .guild-title {
    font-family: 'Orbitron', monospace, sans-serif;
    letter-spacing: 3px;
    color: #38bdf8;
    margin: 12px 0 6px;
  }
  .svg-icon {
    width: 44px;
    height: 44px;
    fill: #f59e0b;
    filter: drop-shadow(0 0 10px rgba(245, 158, 11, 0.6));
  }
</style>

<div class="guild-card">
  <svg class="svg-icon" viewBox="0 0 24 24">
    <polygon points="12,2 15,8 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,8" />
  </svg>
  <h2 class="guild-title">CYBER GUILD</h2>
  <p>Grand Champions of CodeCraft ⭐</p>
</div>`,
    targetDescription: {
      en: 'A high-tech guild card featuring wide letter-spaced cyber typography and a glowing vector gold star badge drawn in SVG code!',
      uz: "Keng oraliqli kiber shrift hamda SVG kodida chizilgan oltin yulduzli vektor nishoniga ega yuqori texnologiyali gildiya kartasi!"
    },
    anatomy: [
      {
        code: 'font-family: "Orbitron", monospace;',
        name: { en: 'Web Font Family', uz: 'Veb Shrift Oilasi' },
        purpose: { en: 'Applies distinctive font aesthetics to text.', uz: "Matnga betakror zamonaviy ko'rinish beradi." },
        role: { en: 'Cyber font', uz: 'Kiber shrift' }
      },
      {
        code: '<svg viewBox="0 0 24 24">',
        name: { en: 'Scalable Vector Graphics', uz: 'Masshtablanuvchi Vektor Grafika' },
        purpose: { en: 'Draws resolution-independent vector shapes with code.', uz: "Har qanday o'lchamda tiniq turuvchi vektor shakllarni chizadi." },
        role: { en: 'Infinite-zoom art', uz: 'Cheksiz tiniq rasm' }
      }
    ],
    listOfTags: [
      {
        code: 'letter-spacing: ...px',
        name: { en: 'Letter Spacing', uz: "Harflar Oralig'i" },
        description: { en: 'Adds cinema-style breathing space between letters.', uz: "Harflar orasiga kino uslubidagi masofa qo'shadi." }
      },
      {
        code: '<svg> ... </svg>',
        name: { en: 'SVG Tag', uz: 'SVG Teg' },
        description: { en: 'Container for crystal-clear vector graphics.', uz: "O'ta tiniq vektor grafikalar konteyneri." }
      }
    ],
    quickTags: [
      "font-family: 'Orbitron', monospace, sans-serif;",
      'letter-spacing: 3px;'
    ],
    challenge: {
      mission: {
        en: "Add font-family: 'Orbitron', monospace, sans-serif; and letter-spacing: 3px; to .guild-title!",
        uz: ".guild-title ga font-family: 'Orbitron', monospace, sans-serif; va letter-spacing: 3px; qo'shing!"
      },
      hint: {
        en: 'Write font-family and letter-spacing inside the .guild-title style block.',
        uz: '.guild-title ichiga font-family va letter-spacing xossalarini yozing.'
      },
      rules: [
        {
          type: 'hasCssProperty',
          property: 'font-family',
          message: 'Set font-family on .guild-title!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'SVG is like origami folded from math formulas: no matter how close you inspect it, it never gets pixelated or blurry.',
        uz: "SVG matematik formulalardan yasalgan origamiga o'xshaydi: qancha yaqinlashtirmang, hech qachon piksellarga bo'linib ketmaydi."
      },
      discussionQuestions: [
        {
          en: 'Why do major websites use Google Fonts instead of only Arial and Times New Roman? (Brand personality and readability!)',
          uz: "Nega saytlar faqat Arial o'rniga Google Fonts ishlatadi? (Brend o'ziga xosligi va o'qish qulayligi uchun!)"
        }
      ],
      commonMistakes: [
        {
          en: 'Forgetting to include fallback font families like monospace or sans-serif.',
          uz: "Zaxira shriftlar (monospace, sans-serif) qo'shishni unutib qo'yish."
        }
      ],
      funActivity: {
        en: 'Change letter-spacing from 3px to 8px to see how dramatic the title becomes!',
        uz: "Harflar oralig'ini 3px dan 8px ga oshirib, sarlavha qanchalik jiddiy tus olishini ko'ring!"
      }
    }
  },

  // ==========================================
  // THEME 29: Third-Party Animations
  // ==========================================
  {
    id: 'theme-29-third-party-animations',
    module: 'third-party',
    title: {
      en: 'Theme 29: Animation Libraries (Animate.css & AOS Scroll Styles)',
      uz: '29-Mavzu: Animatsiya Kutubxonalari (Animate.css va AOS Skroll Effektlari)'
    },
    icon: '🎪',
    tag: 'class="animate__animated animate__bounceIn"',
    humanIntro: {
      whatIsIt: {
        en: 'Instead of typing 50 lines of complex @keyframes by hand every time, top web developers plug in prebuilt animation libraries like **Animate.css** and **AOS**! You just add class names like **animate__animated animate__bounceIn** to an element and it instantly springs to life with professional physics!',
        uz: "Har safar 50 qator murakkab @keyframes yozib o'tirish o'rniga, ilg'or dasturchilar **Animate.css** va **AOS** kabi tayyor kutubxonalardan foydalanishadi! Elementga shunchaki **animate__animated animate__bounceIn** klasslarini yozasiz va u bir lahzada professional fizika bilan sakrab paydo bo'ladi!"
      },
      whatIsATag: {
        en: '**animate__animated** primes the element with 3D hardware acceleration, and **animate__bounceIn** plays an elastic celebration entrance!',
        uz: "**animate__animated** elementni 3D tezlanishga tayyorlaydi, **animate__bounceIn** esa uni bayramona elastik sakrash bilan sahnaga chiqaradi!"
      }
    },
    summary: {
      en: 'Harness battle-tested third-party animation classes like bounceIn and pulse to create explosive interactive game rewards.',
      uz: "bounceIn va pulse kabi tayyor klasslardan foydalanib, ajoyib o'yin mukofotlari va interaktiv effektlar yarating."
    },
    story: {
      en: 'A legendary treasure chest has just been unlocked! Bring it onto the screen with the famous Animate.css bounceIn entrance!',
      uz: "Afsonaviy xazina sandig'i ochildi! Mashhur Animate.css bounceIn effekti yordamida uni ekranga sakratib chiqaring!"
    },
    initialCode: `<style>
  .loot-stage {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }
  .treasure-chest {
    background: linear-gradient(135deg, #1e293b, #0f172a);
    border: 2px solid #f59e0b;
    border-radius: 16px;
    padding: 24px 36px;
    text-align: center;
    color: white;
    box-shadow: 0 0 30px rgba(245, 158, 11, 0.4);
    /* Step: Add classes animate__animated animate__bounceIn to the div below! */
  }
  .chest-icon {
    font-size: 52px;
    display: block;
    margin-bottom: 8px;
  }
</style>

<div class="loot-stage">
  <div class="treasure-chest">
    <span class="chest-icon">💎</span>
    <h3>VICTORY REWARD!</h3>
    <p>+500 Cyber Crystals</p>
  </div>
</div>`,
    targetCode: `<style>
  .loot-stage {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }
  .treasure-chest {
    background: linear-gradient(135deg, #1e293b, #0f172a);
    border: 2px solid #f59e0b;
    border-radius: 16px;
    padding: 24px 36px;
    text-align: center;
    color: white;
    box-shadow: 0 0 30px rgba(245, 158, 11, 0.4);
  }
  .chest-icon {
    font-size: 52px;
    display: block;
    margin-bottom: 8px;
  }
</style>

<div class="loot-stage">
  <div class="treasure-chest animate__animated animate__bounceIn">
    <span class="chest-icon">💎</span>
    <h3>VICTORY REWARD!</h3>
    <p>+500 Cyber Crystals</p>
  </div>
</div>`,
    targetDescription: {
      en: 'A celebration loot card that springs into view with an elastic Animate.css bounceIn pop!',
      uz: "Animate.css ning elastik bounceIn sakrashi bilan paydo bo'ladigan bayramona xazina kartasi!"
    },
    anatomy: [
      {
        code: 'class="animate__animated"',
        name: { en: 'Animated Base Class', uz: 'Asosiy Animatsiya Klassi' },
        purpose: { en: 'Activates animation timing and fill-mode properties.', uz: 'Animatsiya vaqti va holatlarini faollashtiradi.' },
        role: { en: 'Engine starter', uz: 'Dvigatel kaliti' }
      },
      {
        code: 'class="animate__bounceIn"',
        name: { en: 'Bounce In Effect', uz: 'Sakrab Kirish Effekti' },
        purpose: { en: 'Applies cubic-bezier spring physics to pop onto screen.', uz: "Ekranga elastik sakrab chiqish fizikasini qo'llaydi." },
        role: { en: 'Spring acrobat', uz: 'Elastik akrobat' }
      }
    ],
    listOfTags: [
      {
        code: 'animate__animated',
        name: { en: 'Animated Trigger', uz: 'Animatsiya Trigeri' },
        description: { en: 'Prepares element for Animate.css effects.', uz: 'Elementni Animate.css effektlariga tayyorlaydi.' }
      },
      {
        code: 'animate__pulse',
        name: { en: 'Pulse Loop', uz: 'Puls Takrori' },
        description: { en: 'Pulses element size like a beating heart.', uz: "Elementni yurakdek urib turishga majbur qiladi." }
      }
    ],
    quickTags: [
      'class="animate__animated animate__bounceIn"',
      'class="animate__animated animate__pulse"'
    ],
    challenge: {
      mission: {
        en: 'Add classes animate__animated and animate__bounceIn to the .treasure-chest element!',
        uz: ".treasure-chest elementiga animate__animated va animate__bounceIn klasslarini qo'shing!"
      },
      hint: {
        en: 'Change <div class="treasure-chest"> to <div class="treasure-chest animate__animated animate__bounceIn">.',
        uz: `<div class="treasure-chest"> ni <div class="treasure-chest animate__animated animate__bounceIn"> ga o'zgartiring.`
      },
      rules: [
        {
          type: 'custom',
          check: code => code.includes('animate__animated') && code.includes('animate__bounceIn'),
          message: 'Add animate__animated and animate__bounceIn classes!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'Library classes are like cheat codes in a video game: instead of building the car piece by piece, you press the code and drive away!',
        uz: "Kutubxona klasslari video o'yindagi maxfiy kodlarga o'xshaydi: mashinani noldan yig'masdan, bitta kod bilan tayyor mashinani haydab ketasiz!"
      },
      discussionQuestions: [
        {
          en: 'How do utility animation libraries help engineering teams build apps faster? (Consistency, speed, and tested browser compatibility!)',
          uz: "Animatsiya kutubxonalari jamoalarga qanday yordam beradi? (Bir xil sifat, tezlik va barcha brauzerlarda sinovdan o'tganligi!)"
        }
      ],
      commonMistakes: [
        {
          en: 'Spelling with a single underscore instead of double underscores (animate__bounceIn).',
          uz: "Ikkita pastki chiziq o'rniga bittasini yozib qo'yish (animate__bounceIn to'g'ri)."
        }
      ],
      funActivity: {
        en: 'Replace bounceIn with animate__pulse to watch the chest throb continuously!',
        uz: "bounceIn o'rniga animate__pulse yozib, sandiq qanday qilib to'xtovsiz urib turishini ko'ring!"
      }
    }
  },

  // ==========================================
  // THEME 30: Bootstrap Grid
  // ==========================================
  {
    id: 'theme-30-bootstrap-grid',
    module: 'bootstrap',
    title: {
      en: 'Theme 30: Bootstrap 5 Grid System (Container, Row & Col)',
      uz: '30-Mavzu: Bootstrap 5 Setka Tizimi (Container, Row va Col)'
    },
    icon: '📐',
    tag: 'class="container" | class="row" | class="col-md-4"',
    humanIntro: {
      whatIsIt: {
        en: '**Bootstrap** is the most famous CSS framework on planet Earth! Its crowning achievement is the **12-Column Responsive Grid System**. Instead of writing dozens of custom media queries, you wrap elements in a **container**, open a **row**, and assign column fractions like **col-12** (100% on phones) and **col-md-4** (1/3 width on laptops)!',
        uz: "**Bootstrap** — butun dunyoda eng mashhur CSS freymvorkidir! Uning eng zo'r ixtirosi — **12 ustunli moslashuvchan setka (Grid)**. O'nlab media query yozish o'rniga elementlarni **container** ga solasiz, **row** ochasiz va **col-12** (telefonda to'liq) hamda **col-md-4** (kompyuterda 3 ta teng ustun) klasslarini berasiz!"
      },
      whatIsATag: {
        en: 'A row holds 12 total units. Three col-md-4 cards fit together like mathematical perfection (4 + 4 + 4 = 12)!',
        uz: `Bitta row jami 12 birlikni sig'diradi. Uchta col-md-4 qutilar matematik aniqlikda yonma-yon sig'adi (4 + 4 + 4 = 12)!`
      }
    },
    summary: {
      en: 'Build professional multi-column responsive websites in minutes using Bootstrap 5 container, row, and col-md-* classes.',
      uz: 'Bootstrap 5 container, row va col-md-* klasslari bilan bir necha daqiqada professional responsiv saytlar quring.'
    },
    story: {
      en: 'The Cyber Store catalog needs 3 product cards neatly arranged in columns that automatically reflow on small screens!',
      uz: `Kiber Do'kon katalogiga kichik ekranlarda avtomatik qayta teriladigan 3 ta mahsulot kartasi kerak!`
    },
    initialCode: `<!-- Bootstrap 5 Grid System -->
<div class="container">
  <div class="row g-2">
    <!-- Step: Turn these 3 stacked blocks into 3 responsive columns by adding class="col-12 col-md-4" to each div! -->
    <div>
      <div style="background: #3b82f6; padding: 18px; border-radius: 8px; text-align: center; color: white; font-weight: bold;">
        🚀 Card 1 (Col 4)
      </div>
    </div>
    <div>
      <div style="background: #10b981; padding: 18px; border-radius: 8px; text-align: center; color: white; font-weight: bold;">
        ⚡ Card 2 (Col 4)
      </div>
    </div>
    <div>
      <div style="background: #a855f7; padding: 18px; border-radius: 8px; text-align: center; color: white; font-weight: bold;">
        🔮 Card 3 (Col 4)
      </div>
    </div>
  </div>
</div>`,
    targetCode: `<!-- Bootstrap 5 Grid System -->
<div class="container">
  <div class="row g-2">
    <div class="col-12 col-md-4">
      <div style="background: #3b82f6; padding: 18px; border-radius: 8px; text-align: center; color: white; font-weight: bold;">
        🚀 Card 1 (Col 4)
      </div>
    </div>
    <div class="col-12 col-md-4">
      <div style="background: #10b981; padding: 18px; border-radius: 8px; text-align: center; color: white; font-weight: bold;">
        ⚡ Card 2 (Col 4)
      </div>
    </div>
    <div class="col-12 col-md-4">
      <div style="background: #a855f7; padding: 18px; border-radius: 8px; text-align: center; color: white; font-weight: bold;">
        🔮 Card 3 (Col 4)
      </div>
    </div>
  </div>
</div>`,
    targetDescription: {
      en: 'A classic Bootstrap 3-column responsive layout built using .container, .row, and three .col-12 .col-md-4 columns!',
      uz: '.container, .row va uchta .col-12 .col-md-4 ustunlaridan foydalanib qurilgan klassik Bootstrap 3 ustunli responsiv layout!'
    },
    anatomy: [
      {
        code: 'class="container"',
        name: { en: 'Bootstrap Container', uz: 'Bootstrap Konteyneri' },
        purpose: { en: 'Centers page content and adds comfortable responsive margins.', uz: 'Sahifani markazga olib, yon tomonlardan qulay masofa qoldiradi.' },
        role: { en: 'Outer frame', uz: 'Tashqi ramka' }
      },
      {
        code: 'class="row"',
        name: { en: 'Bootstrap Row', uz: 'Bootstrap Qatori' },
        purpose: { en: 'Flexbox wrapper that hosts columns totaling up to 12 units.', uz: "Jami 12 birlikgacha bo'lgan ustunlarni o'z ichiga oluvchi flexbox qatori." },
        role: { en: 'Column holder', uz: 'Ustun ushlagich' }
      },
      {
        code: 'class="col-md-4"',
        name: { en: 'Medium Breakpoint Column', uz: "O'rta Ekran Ustuni" },
        purpose: { en: 'Takes 4 out of 12 columns (1/3rd width) on medium+ screens.', uz: "O'rta va katta ekranlarda 12 ta ustundan 4 tasini (1/3 qismini) egallaydi." },
        role: { en: 'One-third fraction', uz: "Uchdan bir bo'lak" }
      }
    ],
    listOfTags: [
      {
        code: 'container',
        name: { en: 'Container Class', uz: 'Konteyner Klassi' },
        description: { en: 'Standard max-width responsive wrapper.', uz: `Standart maksimal kenglikli responsiv o'rovchi.` }
      },
      {
        code: 'row',
        name: { en: 'Row Class', uz: 'Qator Klassi' },
        description: { en: 'Flex container for 12-column grid tracks.', uz: '12 ustunli setka uchun flex qatori.' }
      },
      {
        code: 'col-md-*',
        name: { en: 'Column Span', uz: 'Ustun Kengligi' },
        description: { en: 'Assigns 1 to 12 column units on medium screens.', uz: "O'rta ekranlarda 1 dan 12 gacha ustun bo'lagini belgilaydi." }
      }
    ],
    quickTags: [
      'class="container"',
      'class="row g-2"',
      'class="col-12 col-md-4"'
    ],
    challenge: {
      mission: {
        en: 'Build the 3-column layout by adding class="col-12 col-md-4" to each of the 3 column boxes!',
        uz: '3 ta ustunli qutilarning har biriga class="col-12 col-md-4" qo\'shib, 3 ustunli tartibni quring!'
      },
      hint: {
        en: 'Add class="col-12 col-md-4" to the three <div> wrappers inside the row.',
        uz: 'row ichidagi uchta <div> ga class="col-12 col-md-4" deb yozing.'
      },
      rules: [
        {
          type: 'custom',
          check: code => (code.match(/col-12\s+col-md-4|col-md-4/g) || []).length >= 3,
          message: 'Add class="col-12 col-md-4" to all 3 cards!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'Bootstrap Grid is like a clock with 12 hours: you divide the 12 hours between your friends (4 + 4 + 4 = 12)!',
        uz: "Bootstrap Grid 12 soatlik soatga o'xshaydi: siz 12 soatni 3 do'stingizga teng bo'lib berasiz (4 + 4 + 4 = 12)!"
      },
      discussionQuestions: [
        {
          en: 'How many col-md-6 boxes fit into one row? (Exactly two, because 6 + 6 = 12!)',
          uz: "Bitta qatorga nechta col-md-6 sig'adi? (Aynan ikkita, chunki 6 + 6 = 12!)"
        }
      ],
      commonMistakes: [
        {
          en: 'Adding col classes without wrapping them inside a .row parent.',
          uz: "col klasslarini .row o'rovisiz ishlatish."
        }
      ],
      funActivity: {
        en: 'Try col-md-6 to make 2 columns, or col-md-3 to make 4 equal columns!',
        uz: "col-md-6 qilib 2 ta, yoki col-md-3 qilib 4 ta teng ustun yasab ko'ring!"
      }
    }
  },

  // ==========================================
  // THEME 31: Bootstrap Components
  // ==========================================
  {
    id: 'theme-31-bootstrap-components',
    module: 'bootstrap',
    title: {
      en: 'Theme 31: Bootstrap Components (Cards, Badges & Alerts)',
      uz: '31-Mavzu: Bootstrap Komponentlari (Kartalar, Nishonlar va Ogohlantirishlar)'
    },
    icon: '🎴',
    tag: 'class="card" | class="btn btn-primary" | class="badge"',
    humanIntro: {
      whatIsIt: {
        en: 'Bootstrap gives you an entire toy chest of pre-styled UI components! With ready-made classes like **card** (container), **badge bg-success rounded-pill** (online indicator), **btn btn-primary** (sleek button), and **alert alert-primary** (notification), you can build polished SaaS and gaming web apps in minutes!',
        uz: "Bootstrap sizga tayyor bezatilgan UI komponentlar xazinasini beradi! Tayyor **card** (karta), **badge bg-success rounded-pill** (yashil nishon), **btn btn-primary** (chiroyli tugma) va **alert alert-primary** (ogohlantirish) klasslari bilan bir necha daqiqada ajoyib ilovalar qurasiz!"
      },
      whatIsATag: {
        en: 'Combine **card** with **card-header**, **card-body**, and Bootstrap utility classes to structure information cleanly!',
        uz: "**card** ni **card-header**, **card-body** va Bootstrap klasslari bilan birlashtirib, ma'lumotlarni chiroyli tartiblang!"
      }
    },
    summary: {
      en: 'Master foundational Bootstrap UI building blocks: structured cards, status pill badges, alerts, and buttons.',
      uz: "Asosiy Bootstrap UI bloklarini o'rganing: tuzilmali kartalar, status nishonlari, ogohlantirishlar va tugmalar."
    },
    story: {
      en: 'Build the Starship Flagship Captain status card featuring a live ONLINE status badge, a mission alert, and a launch button!',
      uz: 'Yulduz kemasi sardorining status kartasini quring: jonli ONLINE nishoni, missiya ogohlantirishi va start tugmasi!'
    },
    initialCode: `<!-- Assemble the Hero Status Card with Bootstrap classes! -->
<!-- Step 1: Add class="card" to the outer box -->
<!-- Step 2: Add class="badge bg-success rounded-pill" to the ONLINE status span -->
<!-- Step 3: Add class="alert alert-primary" to the warp drive notification -->
<!-- Step 4: Add class="btn btn-primary" to the launch button! -->

<div style="max-width: 320px; margin: 20px auto;">
  <div class="card-header d-flex justify-content-between">
    <span>🛡️ HERO STATUS</span>
    <span>ONLINE</span>
  </div>
  <div class="card-body">
    <h5 class="card-title">Commander Nova</h5>
    <p class="card-text">Flagship captain with 100% hyperspace clearance.</p>
    <div>
      ⚡ Warp Drive Ready!
    </div>
    <button>Launch Shuttle 🚀</button>
  </div>
</div>`,
    targetCode: `<!-- Bootstrap 5 Modern Card Component -->
<div class="card" style="max-width: 320px; margin: 20px auto;">
  <div class="card-header d-flex justify-content-between">
    <span>🛡️ HERO STATUS</span>
    <span class="badge bg-success rounded-pill">ONLINE</span>
  </div>
  <div class="card-body">
    <h5 class="card-title">Commander Nova</h5>
    <p class="card-text">Flagship captain with 100% hyperspace clearance.</p>
    <div class="alert alert-primary">
      ⚡ Warp Drive Ready!
    </div>
    <button class="btn btn-primary">Launch Shuttle 🚀</button>
  </div>
</div>`,
    targetDescription: {
      en: 'A polished Bootstrap card complete with a rounded-pill badge, alert box, and action button!',
      uz: "Yumaloq nishon, ogohlantirish qutisi va harakat tugmasiga ega to'liq bezatilgan Bootstrap kartasi!"
    },
    anatomy: [
      {
        code: 'class="card"',
        name: { en: 'Bootstrap Card', uz: 'Bootstrap Kartasi' },
        purpose: { en: 'Flexible container with borders, shadows, and rounded corners.', uz: 'Hoshiyali, soyali va yumaloq burchakli moslashuvchan konteyner.' },
        role: { en: 'Card container', uz: "Karta o'rovi" }
      },
      {
        code: 'class="badge bg-success"',
        name: { en: 'Success Badge', uz: 'Muvaffaqiyat Nishoni' },
        purpose: { en: 'Displays high-visibility status or counter labels.', uz: "Yuqori ko'rinuvchan status yoki hisoblagich yorliqlarini ko'rsatadi." },
        role: { en: 'Status badge', uz: 'Status nishoni' }
      }
    ],
    listOfTags: [
      {
        code: 'card-header / card-body',
        name: { en: 'Card Sections', uz: "Karta Bo'limlari" },
        description: { en: 'Separates titles, content, and actions inside cards.', uz: "Karta ichidagi sarlavha va kontentni ajratadi." }
      },
      {
        code: 'alert alert-*',
        name: { en: 'Alert Box', uz: 'Ogohlantirish Qutisi' },
        description: { en: 'Colored notification banner for user feedback.', uz: 'Foydalanuvchi uchun rangli xabar paneli.' }
      }
    ],
    quickTags: [
      'class="card"',
      'class="badge bg-success rounded-pill"',
      'class="alert alert-primary"',
      'class="btn btn-primary"'
    ],
    challenge: {
      mission: {
        en: 'Add card, badge bg-success, alert alert-primary, and btn btn-primary classes to shape the hero status card!',
        uz: 'Qahramon status kartasini shakllantirish uchun card, badge bg-success, alert alert-primary va btn btn-primary klasslarini qo\'shing!'
      },
      hint: {
        en: 'Add class="card" to the outer div, badge to ONLINE, alert to warp drive, and btn btn-primary to the button.',
        uz: 'Tashqi divga class="card", ONLINE ga badge, xabarga alert va tugmaga btn btn-primary qo\'shing.'
      },
      rules: [
        {
          type: 'custom',
          check: code => code.includes('card'),
          message: 'Add class="card" to the outer card container!'
        },
        {
          type: 'custom',
          check: code => code.includes('badge') && code.includes('bg-success'),
          message: 'Add class="badge bg-success rounded-pill" to the ONLINE badge!'
        },
        {
          type: 'custom',
          check: code => code.includes('alert') && code.includes('alert-primary'),
          message: 'Add class="alert alert-primary" to the notification banner!'
        },
        {
          type: 'custom',
          check: code => code.includes('btn') && code.includes('btn-primary'),
          message: 'Add class="btn btn-primary" to the launch button!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'Bootstrap components are like pre-cut wooden blocks for building a treehouse: everything fits together smoothly on the first try!',
        uz: "Bootstrap komponentlari daraxt uyi qurish uchun oldindan tayyorlab qo'yilgan yog'och bloklarga o'xshaydi: birinchi urinishdayoq hammasi mos tushadi!"
      },
      discussionQuestions: [
        {
          en: 'Why do modern web frameworks use color names like primary, success, and danger? (So semantic meanings are clear to all developers!)',
          uz: "Nega freymvorklar primary, success, danger kabi nomlarni ishlatadi? (Dasturchilar rangning ma'nosini darhol tushunishlari uchun!)"
        }
      ],
      commonMistakes: [
        {
          en: 'Writing class="btn" without specifying a variant like class="btn btn-primary".',
          uz: `btn-primary ni qo'shmasdan faqat class="btn" yozib qo'yish.`
        }
      ],
      funActivity: {
        en: 'Change btn-primary to btn-danger or btn-success to see the color theme transform!',
        uz: "btn-primary ni btn-danger yoki btn-success ga almashtirib ranglar o'zgarishini ko'ring!"
      }
    }
  },

  // ==========================================
  // THEME 32: Bootstrap Responsive Navbar
  // ==========================================
  {
    id: 'theme-32-bootstrap-ui',
    module: 'bootstrap',
    title: {
      en: 'Theme 32: Bootstrap Responsive Navbar (Header & Navigation)',
      uz: '32-Mavzu: Bootstrap Moslashuvchan Navbar (Sarlavha va Menyu)'
    },
    icon: '🧭',
    tag: '<nav class="navbar navbar-dark bg-dark">',
    humanIntro: {
      whatIsIt: {
        en: 'Every major website — from Discord and YouTube to Roblox — has a polished top navigation bar! With Bootstrap\'s **navbar** system, you get a branded logo on the left, interactive menu links in the center, and a call-to-action button on the right!',
        uz: "Discord va YouTube dan tortib Robloxgacha barcha yirik saytlarning yuqorisida ajoyib navigatsiya paneli bo'ladi! Bootstrap ning **navbar** tizimi bilan chapda brend logotipi, o'rtada menyu havolalari va o'ngda harakat tugmasi joylashadi!"
      },
      whatIsATag: {
        en: '<nav class="navbar navbar-dark bg-dark"> sets up a sleek dark header. <a class="navbar-brand"> holds your game logo, and <a class="nav-link active"> highlights current pages!',
        uz: `<nav class="navbar navbar-dark bg-dark"> zamonaviy qorong'u panel ochadi. <a class="navbar-brand"> logotipni, <a class="nav-link active"> esa faol menyuni belgilaydi!`
      }
    },
    summary: {
      en: 'Construct a dark gamer navigation header featuring brand logo, navigation pills, and an action button.',
      uz: "Brend logotipi, menyu tugmalari va harakat tugmasiga ega zamonaviy o'yin sarlavha panelini quring."
    },
    story: {
      en: 'Build the official CodeCraft OS top navigation bar so players can effortlessly switch between Home, Missions, and Leaderboard!',
      uz: "O'yinchilar Home, Missions va Leaderboard bo'limlari orasida qulay o'tishlari uchun CodeCraft OS rasmiy navigatsiya panelini quring!"
    },
    initialCode: `<!-- Step 1: Add class="navbar navbar-dark bg-dark" to the <nav> element -->
<!-- Step 2: Add class="navbar-brand" to the logo link -->
<!-- Step 3: Add class="nav-link active" to the Home link -->
<!-- Step 4: Add class="btn btn-outline-info btn-sm" to the connect button! -->

<nav>
  <a href="#">
    <span>👾</span> CodeCraft OS
  </a>
  <ul class="navbar-nav">
    <li class="nav-item"><a>Home</a></li>
    <li class="nav-item"><a>Missions</a></li>
    <li class="nav-item"><a>Leaderboard</a></li>
  </ul>
  <button>Connect 💳</button>
</nav>`,
    targetCode: `<!-- Bootstrap 5 Dark Gaming Navbar -->
<nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">
    <span>👾</span> CodeCraft OS
  </a>
  <ul class="navbar-nav">
    <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Missions</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Leaderboard</a></li>
  </ul>
  <button class="btn btn-outline-info btn-sm">Connect 💳</button>
</nav>`,
    targetDescription: {
      en: 'A production-grade dark navigation header with an active home pill, navigation links, and a glowing connect button!',
      uz: "Faol home tugmasi, menyu havolalari va ulanish tugmasiga ega professional qorong'u navigatsiya paneli!"
    },
    anatomy: [
      {
        code: '<nav class="navbar navbar-dark bg-dark">',
        name: { en: 'Navbar Container', uz: 'Navbar Konteyneri' },
        purpose: { en: 'Defines the dark responsive navigation bar wrapper.', uz: "Qorong'u moslashuvchan navigatsiya paneli o'rovini belgilaydi." },
        role: { en: 'Header bar', uz: 'Sarlavha paneli' }
      },
      {
        code: '<a class="navbar-brand">',
        name: { en: 'Navbar Brand', uz: 'Navbar Brendi' },
        purpose: { en: 'Displays prominent app logo and name.', uz: "Ilovaning ko'zga tashlanuvchi logotipi va nomini ko'rsatadi." },
        role: { en: 'Logo anchor', uz: 'Logotip havolasi' }
      }
    ],
    listOfTags: [
      {
        code: 'navbar-nav / nav-item / nav-link',
        name: { en: 'Navbar Menu System', uz: 'Navbar Menyu Tizimi' },
        description: { en: 'List structure for organized header links.', uz: "Tartibli sarlavha havolalari uchun ro'yxat tuzilishi." }
      }
    ],
    quickTags: [
      '<nav class="navbar navbar-dark bg-dark">',
      '<a class="navbar-brand" href="#">',
      '<a class="nav-link active" href="#">'
    ],
    challenge: {
      mission: {
        en: 'Add navbar navbar-dark bg-dark, navbar-brand, nav-link active, and button classes to assemble the navigation header!',
        uz: 'Navigatsiya sarlavhasini yig\'ish uchun navbar navbar-dark bg-dark, navbar-brand, nav-link active va tugma klasslarini qo\'shing!'
      },
      hint: {
        en: 'Add class="navbar navbar-dark bg-dark" to <nav>, class="navbar-brand" to the logo, and class="nav-link active" to Home.',
        uz: '<nav> ga class="navbar navbar-dark bg-dark", logotipga class="navbar-brand" va Home havolasiga class="nav-link active" qo\'shing.'
      },
      rules: [
        {
          type: 'custom',
          check: code => /<nav[^>]*class=["'][^"']*navbar\s+navbar-dark\s+bg-dark[^"']*["']/.test(code),
          message: 'Add class="navbar navbar-dark bg-dark" to the <nav> element!'
        },
        {
          type: 'custom',
          check: code => /class=["'][^"']*navbar-brand[^"']*["']/.test(code),
          message: 'Add class="navbar-brand" to the logo link!'
        },
        {
          type: 'custom',
          check: code => /nav-link\s+active/.test(code),
          message: 'Add class="nav-link active" to the Home link!'
        },
        {
          type: 'custom',
          check: code => /btn\s+btn-outline-info/.test(code),
          message: 'Add class="btn btn-outline-info btn-sm" to the connect button!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'The navbar is like the dashboard of an airplane cockpit: you always know where you are and can steer to any destination in one click!',
        uz: "Navbar samolyot kabinasidagi boshqaruv paneliga o'xshaydi: qayerda turganingizni doim bilasiz va bir bosishda istalgan manzilga borasiz!"
      },
      discussionQuestions: [
        {
          en: 'Why do navbars stay at the top of web pages? (Because human eyes naturally scan the top of a page first!)',
          uz: "Nega navbarlar har doim tepada turadi? (Chunki inson ko'zi tabiiy ravishda birinchi bo'lib sahifaning yuqori qismiga qaraydi!)"
        }
      ],
      commonMistakes: [
        {
          en: 'Forgetting the nav-link class on <a> tags so they look like plain blue links.',
          uz: "<a> teglariga nav-link klassini qo'shishni unutib, ularni oddiy ko'k havola qilib qo'yish."
        }
      ],
      funActivity: {
        en: 'Add a new nav-item like "Shop 🛒" or "Settings ⚙️" to the menu!',
        uz: `Menyuga "Shop 🛒" yoki "Settings ⚙️" kabi yangi havola qo'shib ko'ring!`
      }
    }
  }
];

function getLessonById(id) {
  return LESSONS.find(l => l.id === id) || LESSONS[0];
}

function getLessonsByModule(moduleId) {
  return LESSONS.filter(l => l.module === moduleId);
}


  // --- i18n Module ---
  /**
 * Internationalization (i18n) Module: English (EN) & Uzbek (UZ)
 * Provides clean child-friendly translations for interface controls, labels, and modals.
 */

const UI_TEXT = {
  en: {
    appTitle: 'CodeCraft',
    appSubtitle: 'HTML & CSS for Kids',
    startPractice: '🚀 Start Practice',
    resetCode: '🔄 Reset to Start',
    listOfTags: '📋 List of Tags',
    teacherTips: '🧑‍🏫 Teacher Tips',
    soundOn: '🔊 Sound: ON',
    soundOff: '🔇 Sound: OFF',
    freeSandbox: '🚀 Free Sandbox',
    lessonPrefix: 'Theme',
    yourProgress: 'Your Progress',
    completedTag: '✅ Completed!',
    humanLanguageHeader: '💡 In Human Language: What is this?',
    tagSandwichHeader: '🥪 The Secret Tag Sandwich: Opening vs Closing',
    tagShowcaseHeader: '🏷️ Simple Tags to Know:',
    stepBreakdownHeader: '🔍 Step-by-Step Breakdown: What Each Part Does to the Result',
    resultCallout: 'Result:',
    codeEditorTitle: 'Code (Edit Here)',
    tagsLabel: 'Tags:',
    browserPreviewTitle: 'What the Browser Draws',
    yourResultTab: 'Your Result',
    targetGoalTab: '🎯 Target Goal',
    compareTab: '⚖️ Compare',
    targetExplanationTitle: '🎯 What the Result Should Look Like:',
    missionTag: '🎯 Mission',
    hintBtn: '💡 Hint',
    checkCodeBtn: '🚀 Check My Code!',
    copyBtn: '📋 Copy',
    copiedMsg: '✅ Copied!',
    tidyBtn: '🪄 Tidy',
    modalCompleteTitle: 'MISSION COMPLETE!',
    starsEarnedMsg: '+3 STARS EARNED! ⭐⭐⭐',
    stayHereBtn: 'Stay Here',
    nextLessonBtn: 'Next Lesson ➡️',
    tryAgainTitle: 'Almost There!',
    tryAgainBody: 'Take a quick look at your code:',
    retryBtn: 'Let Me Try Again! 💪',
    tagListModalTitle: 'List of Tags & Codes',
    tagListDesc: 'Here are all the codes and tags you learn in this theme. Click any code chip to copy it!',
    colCode: 'Code / Tag',
    colName: 'Name',
    colMeaning: 'Meaning (What It Does)',
    doneBtn: 'Got it!',
    langToggleBtn: '🇺🇿 O\'zbekcha',
    labsBtn: '🧪 Visual Labs',
    readAloudBtn: '🔊 Read Aloud',
    stopSpeechBtn: '⏹️ Stop Voice',
    insertTagHint: 'Click to insert at cursor',
    labBoxModelTitle: '📦 Box Model Playground',
    labFlexboxTitle: '🧩 Flexbox LEGO Playground',
    labColorTitle: '🎨 Color & Gradient Mixer',
    labGridTitle: '🏁 CSS Grid 2D World',
    topicLabBtn: '🧪 Visual Lab',
    topicLabModalTitle: 'Interactive Visual Lab',
    topicLabEffectLabel: 'Effect on Scene:',
    topicLabGeneratedCode: 'Live Generated Code'
  },
  uz: {
    appTitle: 'CodeCraft',
    appSubtitle: 'Bolalar uchun HTML va CSS',
    startPractice: '🚀 Amaliyotni boshlash',
    resetCode: '🔄 Boshlang\'ich kodga qaytish',
    listOfTags: '📋 Teglar ro\'yxati',
    teacherTips: '🧑‍🏫 O\'qituvchi maslahatlari',
    soundOn: '🔊 Ovoz: Yoniq',
    soundOff: '🔇 Ovoz: O\'chiq',
    freeSandbox: '🚀 Erkin laboratoriya',
    lessonPrefix: 'Mavzu',
    yourProgress: 'Sizning natijangiz',
    completedTag: '✅ Bajarildi!',
    humanLanguageHeader: '💡 Oddiy tilda: Bu nima o\'zi?',
    tagSandwichHeader: '🥪 Sehrli Sendvich: Ochuvchi va Yopuvchi teglar',
    tagShowcaseHeader: '🏷️ Bilib olish kerak bo\'lgan oddiy teglar:',
    stepBreakdownHeader: '🔍 Qadamma-qadam tahlil: Har bir belgi natijaga qanday ta\'sir qiladi?',
    resultCallout: 'Natija:',
    codeEditorTitle: 'Kod (Shu yerda tahrirlang)',
    tagsLabel: 'Teglar:',
    browserPreviewTitle: 'Brauzer chizadigan natija',
    yourResultTab: 'Sizning kodingiz',
    targetGoalTab: '🎯 Maqsad natijasi',
    compareTab: '⚖️ Taqqoslash',
    targetExplanationTitle: '🎯 Natija qanday ko\'rinishi kerak:',
    missionTag: '🎯 Vazifa',
    hintBtn: '💡 Maslahat',
    checkCodeBtn: '🚀 Kodimni tekshirish!',
    copyBtn: '📋 Nusxalash',
    copiedMsg: '✅ Nusxalandi!',
    tidyBtn: '🪄 Tartiblash',
    modalCompleteTitle: 'VAZIFA BAJARILDI!',
    starsEarnedMsg: '+3 YULDUZCHA YUTIB OLDINGIZ! ⭐⭐⭐',
    stayHereBtn: 'Shu yerda qolish',
    nextLessonBtn: 'Keyingi dars ➡️',
    tryAgainTitle: 'Juda yaqin keldingiz!',
    tryAgainBody: 'Kodingizga yana bir bor e\'tibor bering:',
    retryBtn: 'Qayta urinib ko\'rish! 💪',
    tagListModalTitle: 'Teglar va Kodlar Ro\'yxati',
    tagListDesc: 'Ushbu mavzuda o\'rganiladigan barcha teglar. Nusxalash uchun istalgan kod ustiga bosing!',
    colCode: 'Kod / Teg',
    colName: 'Nomi',
    colMeaning: 'Vazifasi (Nima ish qiladi)',
    doneBtn: 'Tushundim!',
    langToggleBtn: '🇬🇧 English',
    labsBtn: '🧪 Vizual Laboratoriyalar',
    readAloudBtn: '🔊 Ovozli o\'qish',
    stopSpeechBtn: '⏹️ To\'xtatish',
    insertTagHint: 'Kursorga kiritish uchun bosing',
    labBoxModelTitle: '📦 Box Model Maydonchasi',
    labFlexboxTitle: '🧩 Flexbox Konstruktori',
    labColorTitle: '🎨 Rang va Gradient Mikseri',
    labGridTitle: '🏁 CSS Grid 2D Dunyosi',
    topicLabBtn: '🧪 Vizual Laboratoriya',
    topicLabModalTitle: 'Interaktiv Vizual Laboratoriya',
    topicLabEffectLabel: 'Sahnaga ta\'siri:',
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


  // --- Validator Module ---
  /**
 * CodeCraft Challenge Validator
 * Evaluates whether student HTML/CSS code meets the learning objectives.
 */

function validateChallenge(code, rules = []) {
  const codeStr = (typeof code === 'object' && code !== null)
    ? (code.en || code.uz || Object.values(code)[0] || '')
    : code;

  if (!codeStr || typeof codeStr !== 'string') {
    return {
      passed: false,
      feedback: ['Write some code in the editor to start the challenge!']
    };
  }

  // Strip HTML and CSS comments so instructions inside comments don't trigger false passes
  const codeWithoutComments = codeStr
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');
  const feedback = [];

  for (const rule of rules) {
    let passed = false;

    switch (rule.type) {
      case 'hasTag': {
        const tagRegex = new RegExp(`<\\s*${rule.tag}(\\s+[^>]*)?>`, 'i');
        passed = tagRegex.test(codeWithoutComments);
        break;
      }

      case 'hasAttribute': {
        // Looks for <tag ... attr="..." or attr='...' or attr>
        const attrRegex = new RegExp(`<\\s*${rule.tag}[^>]*\\s+${rule.attribute}(?:\\s*=\\s*["'][^"']*["'])?[^>]*>`, 'i');
        passed = attrRegex.test(codeWithoutComments);
        break;
      }

      case 'hasCssProperty': {
        // Check for style tag or inline style with property: value
        // Matches e.g. color: hotpink; or style="... color: hotpink ..."
        const escapedProp = rule.property.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const cssRegex = new RegExp(`${escapedProp}\\s*:\\s*([^;}"']+)`, 'gi');
        let match;
        while ((match = cssRegex.exec(codeWithoutComments)) !== null) {
          const val = match[1].trim();
          if (!rule.valuePattern) {
            passed = true;
            break;
          }
          if (rule.valuePattern instanceof RegExp && rule.valuePattern.test(val)) {
            passed = true;
            break;
          }
          if (typeof rule.valuePattern === 'string' && val.toLowerCase().includes(rule.valuePattern.toLowerCase())) {
            passed = true;
            break;
          }
        }
        break;
      }

      case 'tagContainsText': {
        // Matches <tag ...>content</tag>
        const tagContentRegex = new RegExp(`<\\s*${rule.tag}[^>]*>([\\s\\S]*?)<\\s*\\/\\s*${rule.tag}\\s*>`, 'i');
        const match = tagContentRegex.exec(codeWithoutComments);
        if (match) {
          const innerText = match[1].replace(/<[^>]+>/g, '').trim();
          if (rule.pattern instanceof RegExp) {
            passed = rule.pattern.test(innerText);
          } else if (typeof rule.pattern === 'string') {
            passed = innerText.toLowerCase().includes(rule.pattern.toLowerCase());
          } else {
            passed = innerText.length > 0;
          }
        }
        break;
      }

      case 'custom': {
        try {
          const fn = rule.check || rule.fn;
          passed = typeof fn === 'function' ? !!fn(codeWithoutComments) : false;
        } catch {
          passed = false;
        }
        break;
      }

      default:
        passed = true;
    }

    if (!passed) {
      feedback.push(rule.message || 'Check this mission requirement!');
    }
  }

  return {
    passed: feedback.length === 0,
    feedback
  };
}


  // --- State Module ---
  /**
 * State Management Module
 * Pure immutable state transitions for progress, badges, preferences,
 * and offline multi-student shift profile management.
 */

const STORAGE_KEY = 'codecraft_kids_v1_state';
const PROFILES_INDEX_KEY = 'codecraft_kids_profiles_index_v2';
const ACTIVE_PROFILE_ID_KEY = 'codecraft_kids_active_profile_id_v2';
const PROFILE_STATE_PREFIX = 'codecraft_kids_profile_state_';

const CLASS_SHIFTS = [
  { id: 'shift-1', labelUz: '1-Smena (10:30 – 12:00)', labelEn: 'Shift 1 (10:30 – 12:00)', value: '1-Smena (10:30 - 12:00)', time: '10:30 - 12:00' },
  { id: 'shift-2', labelUz: '2-Smena (14:00 – 15:30)', labelEn: 'Shift 2 (14:00 – 15:30)', value: '2-Smena (14:00 - 15:30)', time: '14:00 - 15:30' },
  { id: 'shift-3', labelUz: '3-Smena (15:30 – 17:00)', labelEn: 'Shift 3 (15:30 – 17:00)', value: '3-Smena (15:30 - 17:00)', time: '15:30 - 17:00' }
];

function createInitialState() {
  return {
    studentName: 'Code Cadet',
    studentAvatar: '🚀',
    shift: '1-Smena (10:30 - 12:00)',
    profileId: 'prof_default',
    stars: 0,
    completedLessons: [],
    badges: [],
    currentLessonId: 'theme-1-tags',
    teacherMode: false,
    audioEnabled: true,
    lang: 'en', // 'en' | 'uz'
    theme: 'dark',
    customSandboxCode: `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: sans-serif;
        background: #12131a;
        color: #f1f5f9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        margin: 0;
        text-align: center;
      }
      .card {
        background: #1c1e2f;
        padding: 30px;
        border-radius: 16px;
        border: 2px solid #7c6cf7;
        box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        max-width: 320px;
      }
      h1 { color: #2dd4bf; }
      button {
        background: #7c6cf7;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 8px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Hello CodeCraft!</h1>
      <p>Edit this code in the sandbox to build anything you imagine!</p>
      <button onclick="alert('Great job!')">Click Me</button>
    </div>
  </body>
</html>`
  };
}

function completeLesson(state, lessonId, starsEarned = 3) {
  if (state.completedLessons.includes(lessonId)) {
    return state;
  }

  const updatedCompleted = [...state.completedLessons, lessonId];
  const updatedStars = state.stars + starsEarned;

  let updatedBadges = [...state.badges];
  if (updatedCompleted.length >= 1 && !updatedBadges.includes('first-code')) {
    updatedBadges.push('first-code');
  }
  if (updatedCompleted.length >= 5 && !updatedBadges.includes('apprentice')) {
    updatedBadges.push('apprentice');
  }
  if (updatedCompleted.length >= 10 && !updatedBadges.includes('master-crafter')) {
    updatedBadges.push('master-crafter');
  }
  if (updatedCompleted.length >= 24 && !updatedBadges.includes('web-master')) {
    updatedBadges.push('web-master');
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
    lang: state.lang === 'uz' ? 'en' : 'uz'
  };
}

function setLanguage(state, lang) {
  return {
    ...state,
    lang: lang === 'uz' ? 'uz' : 'en'
  };
}

function setTheme(state, theme) {
  return {
    ...state,
    theme
  };
}

function setStudentProfile(state, { name, avatar }) {
  return {
    ...state,
    studentName: name ?? state.studentName,
    studentAvatar: avatar ?? state.studentAvatar
  };
}

// ===================================================================
// Multi-Student Shift Profile & Storage Engine (100% Offline)
// ===================================================================

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
          name: legacy.studentName || 'Code Cadet',
          shift: legacy.shift || '1-Smena (10:30 - 12:00)',
          avatar: legacy.studentAvatar || '🚀',
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

  const cleanName = (name || '').trim() || 'Code Cadet';
  const cleanShift = shift || '1-Smena (10:30 - 12:00)';
  const cleanAvatar = avatar || '🚀';
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

  if (store && store.setItem) {
    const updatedProfiles = [...profiles, newProfile];
    store.setItem(PROFILES_INDEX_KEY, JSON.stringify(updatedProfiles));
    store.setItem(ACTIVE_PROFILE_ID_KEY, id);
    store.setItem(PROFILE_STATE_PREFIX + id, JSON.stringify(freshState));
    store.setItem(STORAGE_KEY, JSON.stringify(freshState)); // sync legacy
  }

  return { profile: newProfile, state: freshState };
}

function loginStudentProfile(profileId, pin = '', storage = null) {
  const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
  const profiles = listStudentProfiles(store);
  const profile = profiles.find(p => p.id === profileId);

  if (!profile) {
    return { success: false, error: 'NOT_FOUND' };
  }

  if (profile.pin && profile.pin !== (pin || '').trim()) {
    return { success: false, error: 'INCORRECT_PIN' };
  }

  profile.lastActiveAt = Date.now();
  if (store && store.setItem) {
    store.setItem(PROFILES_INDEX_KEY, JSON.stringify(profiles));
    store.setItem(ACTIVE_PROFILE_ID_KEY, profileId);
  }

  const state = loadProfileState(profileId, store);
  if (store && store.setItem) {
    store.setItem(STORAGE_KEY, JSON.stringify(state)); // sync legacy
  }

  return { success: true, profile, state };
}

function loadProfileState(profileId, storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.getItem) {
      const data = store.getItem(PROFILE_STATE_PREFIX + profileId);
      if (data) {
        return {
          ...createInitialState(),
          ...JSON.parse(data)
        };
      }
    }
  } catch (e) {
    console.warn('Could not load profile state:', e);
  }
  return createInitialState();
}

function saveProfileState(profileId, state, storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.setItem) {
      store.setItem(PROFILE_STATE_PREFIX + profileId, JSON.stringify(state));
      const activeId = getActiveProfileId(store);
      if (activeId === profileId) {
        store.setItem(STORAGE_KEY, JSON.stringify(state));
      }
    }
  } catch (e) {
    console.warn('Could not save profile state:', e);
  }
}

function deleteStudentProfile(profileId, storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (!store || !store.setItem) return false;

    let profiles = listStudentProfiles(store);
    profiles = profiles.filter(p => p.id !== profileId);
    store.setItem(PROFILES_INDEX_KEY, JSON.stringify(profiles));

    if (store.removeItem) {
      store.removeItem(PROFILE_STATE_PREFIX + profileId);
    }

    const activeId = getActiveProfileId(store);
    if (activeId === profileId) {
      if (profiles.length > 0) {
        store.setItem(ACTIVE_PROFILE_ID_KEY, profiles[0].id);
        const nextState = loadProfileState(profiles[0].id, store);
        store.setItem(STORAGE_KEY, JSON.stringify(nextState));
      } else {
        if (store.removeItem) {
          store.removeItem(ACTIVE_PROFILE_ID_KEY);
          store.removeItem(STORAGE_KEY);
        }
      }
    }
    return true;
  } catch (e) {
    return false;
  }
}

function saveStateToStorage(state, storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.setItem) {
      const profileId = state.profileId || getActiveProfileId(store) || 'prof_default';
      store.setItem(PROFILE_STATE_PREFIX + profileId, JSON.stringify(state));
      store.setItem(STORAGE_KEY, JSON.stringify(state));

      // Update profile metadata if exists
      const raw = store.getItem(PROFILES_INDEX_KEY);
      if (raw) {
        try {
          const profiles = JSON.parse(raw);
          const p = profiles.find(x => x.id === profileId);
          if (p) {
            p.lastActiveAt = Date.now();
            p.name = state.studentName || p.name;
            p.avatar = state.studentAvatar || p.avatar;
            p.shift = state.shift || p.shift;
            store.setItem(PROFILES_INDEX_KEY, JSON.stringify(profiles));
          }
        } catch (err) {}
      }
    }
  } catch (e) {
    console.warn('Could not save state to storage:', e);
  }
}

function loadStateFromStorage(storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.getItem) {
      const activeId = getActiveProfileId(store);
      if (activeId) {
        const profileState = store.getItem(PROFILE_STATE_PREFIX + activeId);
        if (profileState) {
          return {
            ...createInitialState(),
            ...JSON.parse(profileState)
          };
        }
      }

      // Legacy fallback
      const data = store.getItem(STORAGE_KEY);
      if (data) {
        return {
          ...createInitialState(),
          ...JSON.parse(data)
        };
      }
    }
  } catch (e) {
    console.warn('Could not load state from storage:', e);
  }
  return createInitialState();
}

function exportClassroomBackup(storage = null) {
  const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
  const profiles = listStudentProfiles(store);
  const states = {};
  profiles.forEach(p => {
    states[p.id] = loadProfileState(p.id, store);
  });
  return JSON.stringify({
    version: 2,
    exportDate: new Date().toISOString(),
    profiles,
    states
  }, null, 2);
}

function importClassroomBackup(jsonString, storage = null) {
  const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
  if (!store || !store.setItem) return { success: false, error: 'NO_STORAGE' };

  try {
    const parsed = typeof jsonString === 'string' ? JSON.parse(jsonString) : jsonString;
    if (!parsed || !parsed.profiles || !Array.isArray(parsed.profiles)) {
      return { success: false, error: 'INVALID_FORMAT' };
    }

    const existingProfiles = listStudentProfiles(store);
    const existingMap = new Map(existingProfiles.map(p => [p.id, p]));

    let importedCount = 0;
    parsed.profiles.forEach(p => {
      existingMap.set(p.id, p);
      if (parsed.states && parsed.states[p.id]) {
        store.setItem(PROFILE_STATE_PREFIX + p.id, JSON.stringify(parsed.states[p.id]));
      }
      importedCount++;
    });

    const mergedProfiles = Array.from(existingMap.values());
    store.setItem(PROFILES_INDEX_KEY, JSON.stringify(mergedProfiles));

    if (parsed.profiles.length > 0) {
      const firstId = parsed.profiles[0].id;
      store.setItem(ACTIVE_PROFILE_ID_KEY, firstId);
      if (parsed.states && parsed.states[firstId]) {
        store.setItem(STORAGE_KEY, JSON.stringify(parsed.states[firstId]));
      }
    }

    return { success: true, count: importedCount };
  } catch (e) {
    return { success: false, error: e.message };
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
 * Free Sandbox Scratchpad Module
 * Kids can freely build their own websites with starter templates and download their HTML files!
 */

const TEMPLATES = [
  {
    id: 'blank',
    name: '📄 Blank Canvas',
    code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 50px;
        background: #f1f2f6;
      }
      h1 { color: #3742fa; }
    </style>
  </head>
  <body>
    <h1>🌟 My Brand New Web Page!</h1>
    <p>Type your own HTML and CSS here!</p>
  </body>
</html>`
  },
  {
    id: 'superhero',
    name: '🦸 Superhero Card',
    code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background: #0f172a;
        font-family: 'Segoe UI', Tahoma, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        margin: 0;
      }
      .card {
        background: linear-gradient(135deg, #1e293b, #334155);
        color: white;
        padding: 30px;
        border-radius: 24px;
        border: 3px solid #38bdf8;
        box-shadow: 0 0 25px rgba(56, 189, 248, 0.4);
        text-align: center;
        width: 280px;
      }
      .avatar { font-size: 60px; margin-bottom: 10px; }
      h2 { color: #38bdf8; margin: 5px 0; }
      .badge {
        background: #0284c7;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: bold;
      }
      button {
        margin-top: 15px;
        background: #38bdf8;
        color: #0f172a;
        font-weight: bold;
        border: none;
        padding: 10px 20px;
        border-radius: 12px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="avatar">⚡</div>
      <h2>Thunder Boy</h2>
      <span class="badge">Speed: 1000 mph</span>
      <p>Protector of the Cyber City!</p>
      <button onclick="alert('⚡ Lightning Zap Activated!')">Use Special Move</button>
    </div>
  </body>
</html>`
  },
  {
    id: 'birthday',
    name: '🎂 Birthday Party Invitation',
    code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
        font-family: 'Comic Sans MS', cursive, sans-serif;
        text-align: center;
        padding: 40px;
        margin: 0;
      }
      .invite-box {
        background: white;
        max-width: 400px;
        margin: 0 auto;
        padding: 30px;
        border-radius: 25px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        border: 4px dashed #ff6b81;
      }
      h1 { color: #ff4757; }
      .emoji-row { font-size: 40px; }
      .btn-rsvp {
        background: #2ed573;
        color: white;
        border: none;
        padding: 12px 25px;
        font-size: 18px;
        border-radius: 15px;
        cursor: pointer;
        font-weight: bold;
        margin-top: 15px;
      }
    </style>
  </head>
  <body>
    <div class="invite-box">
      <div class="emoji-row">🎉 🎈 🎂</div>
      <h1>YOU ARE INVITED!</h1>
      <p>To the most epic Birthday Pizza & Gaming Party!</p>
      <p><strong>When:</strong> Saturday at 3:00 PM</p>
      <p><strong>Where:</strong> Arcades & Laser Tag</p>
      <button class="btn-rsvp" onclick="alert('Yay! See you at the party! 🍕')">RSVP Yes!</button>
    </div>
  </body>
</html>`
  }
];

function downloadHtmlFile(filename = 'my-webpage.html', content) {
  if (typeof window === 'undefined') return;

  const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


  // --- Classroom Module ---
  /**
 * Classroom Multi-Student & Shift Portal Module
 * 100% Offline LocalStorage student management for computer labs with shifts.
 * Runs on Windows 7, 8, 10 with ZERO internet, servers, or database installations.
 */





function openStudentPortalModal({ state, onProfileSwitched, playSound, defaultTab = 'login' }) {
  playSound?.('click', state.audioEnabled);

  const existing = document.getElementById('student-portal-modal');
  if (existing) existing.remove();

  const isUz = state.lang === 'uz';
  let activeTab = defaultTab;
  let selectedAvatar = '🚀';
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
            <span class="portal-icon">🏫</span>
            <div>
              <h3 class="portal-title">${isUz ? "O'quvchilar & Smenalar Portali" : "Student Profiles & Shifts"}</h3>
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
                    <span class="card-avatar">${escapeHtml(p.avatar || '🚀')}</span>
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
      const avatars = ['🚀', '🤖', '🐱', '🦊', '🦁', '🐼', '💎', '⭐', '🎮', '🦄'];
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
            <p>${isUz ? "Ushbu kompyuterdagi barcha o'quvchilar ro'yxati va ularning bajargan mavzularini fleshkaga fayl qilib saqlab oling. Boshqa kompyuterga bir zumda yuklashingiz mumkin." : "Export all student accounts and their progress into a single file to keep backups on USB or transfer students between offline lab PCs."}</p>
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
                        <td><strong>${escapeHtml(p.avatar || '🚀')} ${escapeHtml(p.name)}</strong></td>
                        <td>${escapeHtml(p.shift || '1-Smena')}</td>
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
      const filename = `codecraft_backup_${dateStr}.json`;

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


  // --- Box Model Lab Module ---
  /**
 * Interactive Box Model Lab
 * A hands-on visual toy where kids can drag sliders for Margin, Border, and Padding
 * and see the layers expand and contract with live CSS output!
 */

function renderBoxModelLab(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="lab-container">
      <div class="lab-header">
        <h3>📦 The Box Model Playground</h3>
        <p>Drag the sliders below to see how Margin, Border, and Padding change the box!</p>
      </div>

      <div class="lab-grid">
        <!-- Controls -->
        <div class="lab-controls">
          <div class="control-group margin-ctrl">
            <label>
              <span class="ctrl-dot dot-margin"></span>
              <strong>Margin (Personal Space)</strong>: <span id="val-margin">24px</span>
            </label>
            <input type="range" id="slider-margin" min="0" max="50" value="24" />
          </div>

          <div class="control-group border-ctrl">
            <label>
              <span class="ctrl-dot dot-border"></span>
              <strong>Border (Cardboard Wall)</strong>: <span id="val-border">6px</span>
            </label>
            <input type="range" id="slider-border" min="0" max="20" value="6" />
          </div>

          <div class="control-group padding-ctrl">
            <label>
              <span class="ctrl-dot dot-padding"></span>
              <strong>Padding (Bubble Wrap)</strong>: <span id="val-padding">24px</span>
            </label>
            <input type="range" id="slider-padding" min="4" max="50" value="24" />
          </div>

          <div class="control-group radius-ctrl">
            <label>
              <span class="ctrl-dot dot-radius"></span>
              <strong>Corner Curve (Radius)</strong>: <span id="val-radius">16px</span>
            </label>
            <input type="range" id="slider-radius" min="0" max="40" value="16" />
          </div>

          <div class="lab-code-output">
            <div class="code-header">
              <span>Generated CSS</span>
              <button id="btn-copy-box-css" class="btn-sm">📋 Copy CSS</button>
            </div>
            <pre><code id="box-css-code">.my-box {
  margin: 24px;
  border: 6px solid #fbc531;
  padding: 24px;
  border-radius: 16px;
}</code></pre>
          </div>
        </div>

        <!-- Visual Box Diagram -->
        <div class="lab-stage">
          <div class="box-layer layer-margin" id="box-margin">
            <span class="layer-tag tag-margin">Margin</span>
            <div class="box-layer layer-border" id="box-border">
              <span class="layer-tag tag-border">Border</span>
              <div class="box-layer layer-padding" id="box-padding">
                <span class="layer-tag tag-padding">Padding</span>
                <div class="box-layer layer-content" id="box-content">
                  <span class="layer-tag tag-content">Content</span>
                  <div class="content-preview">
                    <span style="font-size: 32px;">🎁</span>
                    <p style="margin: 4px 0 0; font-weight: bold;">Super Gift Box</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach interactive listeners
  const sMargin = container.querySelector('#slider-margin');
  const sBorder = container.querySelector('#slider-border');
  const sPadding = container.querySelector('#slider-padding');
  const sRadius = container.querySelector('#slider-radius');

  const vMargin = container.querySelector('#val-margin');
  const vBorder = container.querySelector('#val-border');
  const vPadding = container.querySelector('#val-padding');
  const vRadius = container.querySelector('#val-radius');

  const bMargin = container.querySelector('#box-margin');
  const bBorder = container.querySelector('#box-border');
  const bPadding = container.querySelector('#box-padding');
  const bCode = container.querySelector('#box-css-code');
  const btnCopy = container.querySelector('#btn-copy-box-css');

  function update() {
    const m = sMargin.value;
    const b = sBorder.value;
    const p = sPadding.value;
    const r = sRadius.value;

    vMargin.textContent = `${m}px`;
    vBorder.textContent = `${b}px`;
    vPadding.textContent = `${p}px`;
    vRadius.textContent = `${r}px`;

    bMargin.style.padding = `${m}px`;
    bBorder.style.padding = `${b}px`;
    bPadding.style.padding = `${p}px`;
    bBorder.style.borderRadius = `${r}px`;

    const cssText = `.my-box {\n  margin: ${m}px;\n  border: ${b}px solid #fbc531;\n  padding: ${p}px;\n  border-radius: ${r}px;\n}`;
    bCode.textContent = cssText;
  }

  [sMargin, sBorder, sPadding, sRadius].forEach(slider => {
    slider.addEventListener('input', update);
  });

  btnCopy.addEventListener('click', () => {
    navigator.clipboard?.writeText(bCode.textContent);
    btnCopy.textContent = '✅ Copied!';
    setTimeout(() => {
      btnCopy.textContent = '📋 Copy CSS';
    }, 1500);
  });

  update();
}


  // --- Flexbox Lab Module ---
  /**
 * Interactive Flexbox Lab
 * Kids can click buttons to align cute emoji characters and understand
 * justify-content, align-items, flex-direction, and gap visually!
 */

function renderFlexboxLab(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="lab-container">
      <div class="lab-header">
        <h3>🧩 The Flexbox LEGO Playground</h3>
        <p>Click the buttons below to command your team of cyber-buddies to snap into place!</p>
      </div>

      <div class="lab-grid">
        <!-- Controls -->
        <div class="lab-controls">
          <div class="control-group">
            <label><strong>justify-content (Horizontal Lineup)</strong></label>
            <div class="btn-pill-group" id="group-justify">
              <button class="btn-pill active" data-val="center">center</button>
              <button class="btn-pill" data-val="space-between">space-between</button>
              <button class="btn-pill" data-val="space-around">space-around</button>
              <button class="btn-pill" data-val="flex-start">flex-start</button>
              <button class="btn-pill" data-val="flex-end">flex-end</button>
            </div>
          </div>

          <div class="control-group">
            <label><strong>align-items (Vertical Alignment)</strong></label>
            <div class="btn-pill-group" id="group-align">
              <button class="btn-pill active" data-val="center">center</button>
              <button class="btn-pill" data-val="flex-start">flex-start (top)</button>
              <button class="btn-pill" data-val="flex-end">flex-end (bottom)</button>
            </div>
          </div>

          <div class="control-group">
            <label><strong>flex-direction (Row or Column)</strong></label>
            <div class="btn-pill-group" id="group-dir">
              <button class="btn-pill active" data-val="row">row (horizontal 👉)</button>
              <button class="btn-pill" data-val="column">column (vertical 👇)</button>
              <button class="btn-pill" data-val="row-reverse">row-reverse (👈)</button>
            </div>
          </div>

          <div class="control-group">
            <label><strong>gap (Air Space Between)</strong>: <span id="val-gap">20px</span></label>
            <input type="range" id="slider-gap" min="0" max="50" value="20" />
          </div>

          <div class="lab-code-output">
            <div class="code-header">
              <span>Generated CSS</span>
              <button id="btn-copy-flex-css" class="btn-sm">📋 Copy CSS</button>
            </div>
            <pre><code id="flex-css-code">.parent-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
}</code></pre>
          </div>
        </div>

        <!-- Visual Stage -->
        <div class="lab-stage flex-stage-wrapper">
          <div class="flex-stage" id="flex-stage">
            <div class="flex-creature" style="background: #ff4757;">
              <span class="creature-icon">🤖</span>
              <span class="creature-name">Bot</span>
            </div>
            <div class="flex-creature" style="background: #2ed573;">
              <span class="creature-icon">🐱</span>
              <span class="creature-name">Kitten</span>
            </div>
            <div class="flex-creature" style="background: #1e90ff;">
              <span class="creature-icon">🚀</span>
              <span class="creature-name">Rocket</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  let justify = 'center';
  let align = 'center';
  let direction = 'row';
  let gap = '20px';

  const stage = container.querySelector('#flex-stage');
  const codeEl = container.querySelector('#flex-css-code');
  const sGap = container.querySelector('#slider-gap');
  const vGap = container.querySelector('#val-gap');
  const btnCopy = container.querySelector('#btn-copy-flex-css');

  function update() {
    stage.style.justifyContent = justify;
    stage.style.alignItems = align;
    stage.style.flexDirection = direction;
    stage.style.gap = gap;

    codeEl.textContent = `.parent-container {\n  display: flex;\n  justify-content: ${justify};\n  align-items: ${align};\n  flex-direction: ${direction};\n  gap: ${gap};\n}`;
  }

  function handlePillGroup(groupId, onChange) {
    const pills = container.querySelectorAll(`#${groupId} .btn-pill`);
    pills.forEach(btn => {
      btn.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        onChange(btn.getAttribute('data-val'));
        update();
      });
    });
  }

  handlePillGroup('group-justify', val => { justify = val; });
  handlePillGroup('group-align', val => { align = val; });
  handlePillGroup('group-dir', val => { direction = val; });

  sGap.addEventListener('input', () => {
    gap = `${sGap.value}px`;
    vGap.textContent = gap;
    update();
  });

  btnCopy.addEventListener('click', () => {
    navigator.clipboard?.writeText(codeEl.textContent);
    btnCopy.textContent = '✅ Copied!';
    setTimeout(() => {
      btnCopy.textContent = '📋 Copy CSS';
    }, 1500);
  });

  update();
}


  // --- Color Lab Module ---
  /**
 * Interactive Color & Gradient Lab
 * Kids can mix colors, pick vibrant presets, create gradients,
 * and copy the exact CSS color codes directly into their code editor!
 */

function renderColorLab(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="lab-container">
      <div class="lab-header">
        <h3>🎨 The Magical Color & Gradient Mixer</h3>
        <p>Pick a superhero color preset or mix your own custom gradient with the sliders!</p>
      </div>

      <div class="lab-grid">
        <!-- Controls -->
        <div class="lab-controls">
          <div class="control-group">
            <label><strong>Quick Superhero Color Palettes</strong></label>
            <div class="color-preset-grid" id="preset-grid">
              <button class="preset-btn" data-c1="#ff007f" data-c2="#00f2fe" style="background: linear-gradient(135deg, #ff007f, #00f2fe)">Cyberpunk</button>
              <button class="preset-btn" data-c1="#ff9f43" data-c2="#ee5253" style="background: linear-gradient(135deg, #ff9f43, #ee5253)">Solar Flare</button>
              <button class="preset-btn" data-c1="#10ac84" data-c2="#1dd1a1" style="background: linear-gradient(135deg, #10ac84, #1dd1a1)">Alien Slime</button>
              <button class="preset-btn" data-c1="#5f27cd" data-c2="#341f97" style="background: linear-gradient(135deg, #5f27cd, #341f97)">Cosmic Night</button>
              <button class="preset-btn" data-c1="#ff9ff3" data-c2="#54a0ff" style="background: linear-gradient(135deg, #ff9ff3, #54a0ff)">Cotton Candy</button>
              <button class="preset-btn" data-c1="#feca57" data-c2="#ff6b6b" style="background: linear-gradient(135deg, #feca57, #ff6b6b)">Golden Flame</button>
            </div>
          </div>

          <div class="control-group">
            <label><strong>Color 1 (Start)</strong>: <span id="val-c1">#ff007f</span></label>
            <input type="color" id="input-c1" value="#ff007f" class="color-input" />
          </div>

          <div class="control-group">
            <label><strong>Color 2 (Finish)</strong>: <span id="val-c2">#00f2fe</span></label>
            <input type="color" id="input-c2" value="#00f2fe" class="color-input" />
          </div>

          <div class="control-group">
            <label><strong>Gradient Angle</strong>: <span id="val-angle">135deg</span></label>
            <input type="range" id="slider-angle" min="0" max="360" value="135" />
          </div>

          <div class="lab-code-output">
            <div class="code-header">
              <span>Generated CSS</span>
              <button id="btn-copy-color-css" class="btn-sm">📋 Copy CSS</button>
            </div>
            <pre><code id="color-css-code">background: linear-gradient(135deg, #ff007f, #00f2fe);
color: white;</code></pre>
          </div>
        </div>

        <!-- Preview Card -->
        <div class="lab-stage flex-stage-wrapper">
          <div class="color-preview-card" id="color-card">
            <div class="color-card-badge">SUPER POWER</div>
            <div style="font-size: 55px; margin: 15px 0;">🦄</div>
            <h2 style="margin: 0;">Rainbow Sparkle</h2>
            <p style="opacity: 0.9; margin: 8px 0 0;">This card uses your custom gradient colors!</p>
          </div>
        </div>
      </div>
    </div>
  `;

  let c1 = '#ff007f';
  let c2 = '#00f2fe';
  let angle = 135;

  const inC1 = container.querySelector('#input-c1');
  const inC2 = container.querySelector('#input-c2');
  const sAngle = container.querySelector('#slider-angle');
  const vC1 = container.querySelector('#val-c1');
  const vC2 = container.querySelector('#val-c2');
  const vAngle = container.querySelector('#val-angle');
  const card = container.querySelector('#color-card');
  const codeEl = container.querySelector('#color-css-code');
  const btnCopy = container.querySelector('#btn-copy-color-css');

  function update() {
    vC1.textContent = c1;
    vC2.textContent = c2;
    vAngle.textContent = `${angle}deg`;
    inC1.value = c1;
    inC2.value = c2;
    sAngle.value = angle;

    const grad = `linear-gradient(${angle}deg, ${c1}, ${c2})`;
    card.style.background = grad;
    card.style.boxShadow = `0 15px 35px rgba(0,0,0,0.3), 0 0 25px ${c1}66`;

    codeEl.textContent = `background: ${grad};\ncolor: #ffffff;\nborder-radius: 20px;`;
  }

  inC1.addEventListener('input', (e) => {
    c1 = e.target.value;
    update();
  });

  inC2.addEventListener('input', (e) => {
    c2 = e.target.value;
    update();
  });

  sAngle.addEventListener('input', (e) => {
    angle = e.target.value;
    update();
  });

  const presetBtns = container.querySelectorAll('.preset-btn');
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      c1 = btn.getAttribute('data-c1');
      c2 = btn.getAttribute('data-c2');
      update();
    });
  });

  btnCopy.addEventListener('click', () => {
    navigator.clipboard?.writeText(codeEl.textContent);
    btnCopy.textContent = '✅ Copied!';
    setTimeout(() => {
      btnCopy.textContent = '📋 Copy CSS';
    }, 1500);
  });

  update();
}


  // --- Grid Lab Module ---
  /**
 * Interactive CSS Grid Lab
 * A hands-on visual toy where kids can switch columns and gap
 * and see a 2D game inventory or matrix snap into place with live CSS output!
 */

function renderGridLab(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="lab-container">
      <div class="lab-header">
        <h3>🏁 The CSS Grid 2D World</h3>
        <p>Command your 2D game inventory! Switch columns and slide the gap to watch items snap into place!</p>
      </div>

      <div class="lab-grid">
        <!-- Controls -->
        <div class="lab-controls">
          <div class="control-group">
            <label><strong>grid-template-columns (Columns)</strong></label>
            <div class="btn-pill-group" id="grid-col-group">
              <button class="btn-pill" data-cols="1">1 Column</button>
              <button class="btn-pill" data-cols="2">2 Columns</button>
              <button class="btn-pill active" data-cols="3">3 Columns</button>
              <button class="btn-pill" data-cols="4">4 Columns</button>
            </div>
          </div>

          <div class="control-group">
            <label><strong>gap (Spacing Between Boxes)</strong>: <span id="val-grid-gap">16px</span></label>
            <input type="range" id="slider-grid-gap" min="0" max="40" value="16" />
          </div>

          <div class="control-group">
            <label><strong>Theme Accent Color</strong></label>
            <div class="btn-pill-group" id="grid-theme-group">
              <button class="btn-pill active" data-color="#5b5fc7" style="border-color: #5b5fc7;">Cyber Indigo</button>
              <button class="btn-pill" data-color="#2dd4bf" style="border-color: #2dd4bf;">Emerald Glow</button>
              <button class="btn-pill" data-color="#ff5e7e" style="border-color: #ff5e7e;">Neon Rose</button>
              <button class="btn-pill" data-color="#fbbf24" style="border-color: #fbbf24;">Sun Gold</button>
            </div>
          </div>

          <div class="lab-code-output">
            <div class="code-header">
              <span>Generated CSS</span>
              <button id="btn-copy-grid-css" class="btn-sm">📋 Copy CSS</button>
            </div>
            <pre><code id="grid-css-code">.game-inventory {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}</code></pre>
          </div>
        </div>

        <!-- Stage Preview -->
        <div class="lab-stage">
          <div class="grid-board" id="grid-board">
            <div class="grid-slot"><span class="slot-icon">🗡️</span><span class="slot-label">Sword</span></div>
            <div class="grid-slot"><span class="slot-icon">🛡️</span><span class="slot-label">Shield</span></div>
            <div class="grid-slot"><span class="slot-icon">🧪</span><span class="slot-label">Potion</span></div>
            <div class="grid-slot"><span class="slot-icon">💎</span><span class="slot-label">Diamond</span></div>
            <div class="grid-slot"><span class="slot-icon">🏹</span><span class="slot-label">Bow</span></div>
            <div class="grid-slot"><span class="slot-icon">👑</span><span class="slot-label">Crown</span></div>
            <div class="grid-slot"><span class="slot-icon">🔮</span><span class="slot-label">Crystal</span></div>
            <div class="grid-slot"><span class="slot-icon">🪙</span><span class="slot-label">Coins</span></div>
          </div>
        </div>
      </div>
    </div>
  `;

  let currentCols = 3;
  let currentGap = 16;
  let currentAccent = '#5b5fc7';

  const board = container.querySelector('#grid-board');
  const codeEl = container.querySelector('#grid-css-code');
  const gapVal = container.querySelector('#val-grid-gap');
  const gapSlider = container.querySelector('#slider-grid-gap');
  const copyBtn = container.querySelector('#btn-copy-grid-css');

  function updateGrid() {
    if (!board) return;
    board.style.display = 'grid';
    board.style.gridTemplateColumns = `repeat(${currentCols}, 1fr)`;
    board.style.gap = `${currentGap}px`;

    const slots = board.querySelectorAll('.grid-slot');
    slots.forEach(s => {
      s.style.borderColor = currentAccent;
      s.style.boxShadow = `0 4px 15px ${currentAccent}22`;
    });

    if (codeEl) {
      codeEl.textContent = `.game-inventory {\n  display: grid;\n  grid-template-columns: repeat(${currentCols}, 1fr);\n  gap: ${currentGap}px;\n}`;
    }
  }

  // Column pills
  const colPills = container.querySelectorAll('#grid-col-group .btn-pill');
  colPills.forEach(pill => {
    pill.addEventListener('click', () => {
      colPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCols = parseInt(pill.getAttribute('data-cols'), 10) || 3;
      updateGrid();
    });
  });

  // Gap slider
  gapSlider?.addEventListener('input', (e) => {
    currentGap = e.target.value;
    if (gapVal) gapVal.textContent = `${currentGap}px`;
    updateGrid();
  });

  // Theme accent pills
  const themePills = container.querySelectorAll('#grid-theme-group .btn-pill');
  themePills.forEach(pill => {
    pill.addEventListener('click', () => {
      themePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentAccent = pill.getAttribute('data-color') || '#5b5fc7';
      updateGrid();
    });
  });

  // Copy button
  copyBtn?.addEventListener('click', () => {
    if (codeEl) {
      navigator.clipboard.writeText(codeEl.textContent).then(() => {
        copyBtn.textContent = '✅ Copied!';
        setTimeout(() => { copyBtn.textContent = '📋 Copy CSS'; }, 1800);
      });
    }
  });

  updateGrid();
}


  // --- Topic Labs Module ---
  /**
 * Dedicated Multi-Stage Evolutionary Topic Visual Laboratories
 * Implements the Step-by-Step Pedagogical Lifecycle for all 24 themes:
 * 1. Initial / Empty / Problem state
 * 2. Tag / Attribute introduced (e.g. broken image alt fallback, unstyled container)
 * 3. Applied cause-and-effect (e.g. raw oversized src, visible border, unmoving to moving)
 * 4. Master interactive playground with live sliders and real-time code generation!
 */






// Setup one-click copy listener
function setupCopyBtn(container, codeSelector, btnSelector) {
  const btn = container.querySelector(btnSelector);
  const codeEl = container.querySelector(codeSelector);
  btn?.addEventListener('click', () => {
    if (codeEl) {
      navigator.clipboard?.writeText(codeEl.textContent);
      const old = btn.textContent;
      btn.textContent = '✅ Copied!';
      setTimeout(() => { btn.textContent = old; }, 1500);
    }
  });
}

function safeText(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Universal Stepful Lab Controller
 * Renders the multi-stage stepper and wires previous/next and step clicking.
 */
function createStepfulLab(container, def, isUz) {
  const totalSteps = def.steps.length;
  let currentStep = 0;
  let customState = { ...(def.initialState || {}) };

  // Render outer shell once:
  container.innerHTML = `
    <div class="topic-lab-wrapper">
      <div class="topic-lab-controls">
        <div class="evolution-slider-panel">
          <div class="slider-meta-row">
            <div class="slider-title-tag">
              <span>🎚️</span>
              <span>${isUz ? "Evolyutsiya Slayderi" : "Evolution Slider"}</span>
            </div>
            <div class="slider-current-stage">
              <span class="stage-num-badge" id="badge-stage-num">1 / ${totalSteps}</span>
              <strong class="stage-name" id="badge-stage-name">${safeText(isUz ? def.steps[0].title.uz : def.steps[0].title.en)}</strong>
            </div>
          </div>

          <div class="slider-track-container">
            <input 
              type="range" 
              id="evolution-range-slider" 
              class="evolution-range-input" 
              min="0" 
              max="${totalSteps - 1}" 
              value="0" 
              step="1"
            />
            <div class="slider-stops-bar" id="slider-stops-bar">
              ${def.steps.map((s, idx) => `
                <div class="slider-stop-point ${idx === 0 ? 'active' : ''}" data-step="${idx}">
                  <div class="stop-dot">${idx + 1}</div>
                  <div class="stop-title" title="${safeText(isUz ? s.title.uz : s.title.en)}">${safeText(isUz ? s.title.uz : s.title.en)}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="topic-lab-status" id="lab-status"></div>

        <div id="step-custom-controls"></div>

        <div class="lab-code-output">
          <div class="code-header">
            <span>${isUz ? 'Jonli Kod:' : 'Live Code:'}</span>
            <button id="btn-copy-lab" class="btn-sm">📋 Copy</button>
          </div>
          <pre><code id="lab-code"></code></pre>
        </div>
      </div>

      <div class="topic-lab-stage" id="lab-stage"></div>
    </div>
  `;

  const slider = container.querySelector('#evolution-range-slider');
  const badgeNum = container.querySelector('#badge-stage-num');
  const badgeName = container.querySelector('#badge-stage-name');
  const stopsBar = container.querySelector('#slider-stops-bar');
  const statusEl = container.querySelector('#lab-status');
  const controlsMount = container.querySelector('#step-custom-controls');
  const codeEl = container.querySelector('#lab-code');
  const stageEl = container.querySelector('#lab-stage');

  function update() {
    const step = def.steps[currentStep];

    // 1. Update slider & badges
    slider.value = currentStep;
    badgeNum.textContent = `${currentStep + 1} / ${totalSteps}`;
    badgeName.textContent = isUz ? step.title.uz : step.title.en;

    // 2. Update stop dots
    stopsBar.querySelectorAll('.slider-stop-point').forEach((pt, idx) => {
      pt.classList.toggle('active', idx === currentStep);
      pt.classList.toggle('passed', idx < currentStep);
    });

    // 3. Update status explanation
    statusEl.innerHTML = isUz ? step.explanation.uz : step.explanation.en;

    // 4. Update custom controls if any on this step
    controlsMount.innerHTML = '';
    if (step.renderControls) {
      step.renderControls(controlsMount, customState, updateCodeAndStage, isUz);
    }

    // 5. Update code and stage
    updateCodeAndStage();
  }

  function updateCodeAndStage() {
    const step = def.steps[currentStep];
    const codeStr = typeof step.code === 'function' ? step.code(customState, isUz) : step.code;
    codeEl.textContent = codeStr;
    step.renderStage(stageEl, customState, isUz);
  }

  // Slider input listener (scrubbing)
  slider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val !== currentStep) {
      currentStep = val;
      update();
    }
  });

  // Click on stop point
  stopsBar.querySelectorAll('.slider-stop-point').forEach(pt => {
    pt.addEventListener('click', () => {
      const target = parseInt(pt.getAttribute('data-step'), 10);
      if (!isNaN(target) && target !== currentStep) {
        currentStep = target;
        update();
      }
    });
  });

  setupCopyBtn(container, '#lab-code', '#btn-copy-lab');
  update();
}

// ===================================================================
// 1. Text Tags (b, i, u, s)
// ===================================================================
function renderTagsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { bold: true, italic: false, underline: false, strike: false },
    steps: [
      {
        title: { en: '1. Plain Text', uz: '1. Oddiy Matn' },
        code: 'Salom Kiber Qahramon!',
        explanation: {
          en: 'Step 1: Raw text has no tags. The browser renders it with standard weight and no styling.',
          uz: "1-Qadam: Oddiy matnda hech qanday teg yo'q. Brauzer uni standart oddiy shriftda ko'rsatadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 22px; color: white;">Salom Kiber Qahramon!</div>`;
        }
      },
      {
        title: { en: '2. Bold <b>', uz: '2. Qalin <b>' },
        code: '<b>Salom Kiber Qahramon!</b>',
        explanation: {
          en: 'Step 2: The <b> tag makes the text heavy and bold so important words stand out.',
          uz: "2-Qadam: <b> tegi matnni qalin (bold) qiladi va muhim so'zlarni ajratib ko'rsatadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 22px; font-weight: bold; color: white;">Salom Kiber Qahramon!</div>`;
        }
      },
      {
        title: { en: '3. Italic & Strike', uz: '3. Qiya va Chiziq' },
        code: '<b><i><s>Salom Kiber Qahramon!</s></i></b>',
        explanation: {
          en: 'Step 3: Tags can be nested inside each other! Here <b>, <i> and <s> combine their effects.',
          uz: "3-Qadam: Teglar bir-birining ichiga joylashishi mumkin! <b>, <i> va <s> effektlari birlashdi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 22px; font-weight: bold; font-style: italic; text-decoration: line-through; color: white;">Salom Kiber Qahramon!</div>`;
        }
      },
      {
        title: { en: '4. Interactive Studio', uz: '4. Interaktiv Studiya' },
        code(s) {
          let open = '', close = '';
          if (s.bold) { open += '<b>'; close = '</b>' + close; }
          if (s.italic) { open += '<i>'; close = '</i>' + close; }
          if (s.underline) { open += '<u>'; close = '</u>' + close; }
          if (s.strike) { open += '<s>'; close = '</s>' + close; }
          return `${open}Salom Kiber Qahramon!${close}`;
        },
        explanation: {
          en: 'Step 4: Interactive Master Studio! Toggle the tags below to design your own custom combination.',
          uz: "4-Qadam: Interaktiv Studiya! Tugmalarni bosib, istalgan teglar birikmasini erkin sinab ko'ring."
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group">
              <button class="btn-pill ${s.bold ? 'active' : ''}" id="p-b"><b>&lt;b&gt; Bold</b></button>
              <button class="btn-pill ${s.italic ? 'active' : ''}" id="p-i"><i>&lt;i&gt; Italic</i></button>
              <button class="btn-pill ${s.underline ? 'active' : ''}" id="p-u"><u>&lt;u&gt; Underline</u></button>
              <button class="btn-pill ${s.strike ? 'active' : ''}" id="p-s"><s>&lt;s&gt; Strike</s></button>
            </div>
          `;
          mount.querySelector('#p-b').onclick = (e) => { s.bold = !s.bold; e.target.classList.toggle('active', s.bold); update(); };
          mount.querySelector('#p-i').onclick = (e) => { s.italic = !s.italic; e.target.classList.toggle('active', s.italic); update(); };
          mount.querySelector('#p-u').onclick = (e) => { s.underline = !s.underline; e.target.classList.toggle('active', s.underline); update(); };
          mount.querySelector('#p-s').onclick = (e) => { s.strike = !s.strike; e.target.classList.toggle('active', s.strike); update(); };
        },
        renderStage(stage, s) {
          const decs = [];
          if (s.underline) decs.push('underline');
          if (s.strike) decs.push('line-through');
          stage.innerHTML = `
            <div style="font-size: 22px; font-weight: ${s.bold ? 'bold' : 'normal'}; font-style: ${s.italic ? 'italic' : 'normal'}; text-decoration: ${decs.length ? decs.join(' ') : 'none'}; color: white; padding: 20px; background: #141722; border-radius: 12px; text-align: center;">
              Salom Kiber Qahramon!
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 2. HTML Structure
// ===================================================================
function renderStructureLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { title: 'Mening Saytim', body: 'Salom Dunyo!' },
    steps: [
      {
        title: { en: '1. No Structure', uz: '1. Strukturatsiz' },
        code: 'Salom Dunyo!',
        explanation: {
          en: 'Step 1: Raw text without HTML tags has no document frame or browser tab title.',
          uz: "1-Qadam: Tegi yo'q matnning brauzer sarlavhasi ham, hujjat doirasi ham bo'lmaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="color: #94a3b8; font-family: monospace;">(Untitled Blank Document) Salom Dunyo!</div>`;
        }
      },
      {
        title: { en: '2. <head> & <title>', uz: '2. <head> va <title>' },
        code: '<head>\n  <title>Kiber Sayyoram</title>\n</head>',
        explanation: {
          en: 'Step 2: The <head> holds metadata. <title> sets the name on the browser window tab!',
          uz: "2-Qadam: <head> metama'lumotlarni saqlaydi. <title> brauzer vkladkasi nomini o'rnatadi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div class="mock-browser-window">
              <div class="mock-browser-tab"><span>🌐</span> <strong>Kiber Sayyoram</strong></div>
              <div class="mock-browser-body" style="color: #64748b; font-style: italic;">(Body hali bo'sh / Empty body)</div>
            </div>
          `;
        }
      },
      {
        title: { en: '3. <body> Content', uz: '3. <body> Tarkibi' },
        code: '<html>\n  <head><title>Kiber Sayyoram</title></head>\n  <body>\n    <h1>Salom Dunyo!</h1>\n  </body>\n</html>',
        explanation: {
          en: 'Step 3: Everything visible to users lives inside <body>. Now tab title and page content unite!',
          uz: "3-Qadam: Foydalanuvchi ko'radigan hamma narsa <body> ichida yashaydi. Sahifa to'liq bo'ldi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div class="mock-browser-window">
              <div class="mock-browser-tab"><span>🌐</span> <strong>Kiber Sayyoram</strong></div>
              <div class="mock-browser-body"><h2 style="color: white; margin: 0;">Salom Dunyo!</h2></div>
            </div>
          `;
        }
      },
      {
        title: { en: '4. Interactive Mockup', uz: '4. Interaktiv Brauzer' },
        code(s) {
          return `<!DOCTYPE html>\n<html>\n  <head>\n    <title>${s.title}</title>\n  </head>\n  <body>\n    <h1>${s.body}</h1>\n  </body>\n</html>`;
        },
        explanation: {
          en: 'Step 4: Type below to see your tab title and body canvas update live in the mock browser!',
          uz: "4-Qadam: Quyidagi maydonlarni o'zgartiring va vkladka hamda sahifa qanday jonlanishini ko'ring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <label style="font-size: 11px; color: var(--text-muted);">&lt;title&gt; (Vkladka Nomi):</label>
            <input type="text" id="in-title" value="${s.title}" class="lab-input-text" style="margin-bottom: 8px;" />
            <label style="font-size: 11px; color: var(--text-muted);">&lt;body&gt; (Sahifa Matni):</label>
            <input type="text" id="in-body" value="${s.body}" class="lab-input-text" />
          `;
          mount.querySelector('#in-title').oninput = (e) => { s.title = e.target.value; update(); };
          mount.querySelector('#in-body').oninput = (e) => { s.body = e.target.value; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div class="mock-browser-window">
              <div class="mock-browser-tab"><span>🌐</span> <strong>${s.title || 'Untitled'}</strong></div>
              <div class="mock-browser-body"><h2 style="color: white; margin: 0;">${s.body || '...'}</h2></div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 3. Tables (table, tr, td, th)
// ===================================================================
function renderTablesLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { border: 1, padding: 8 },
    steps: [
      {
        title: { en: '1. Unstructured', uz: '1. Tartibsiz' },
        code: '1st PixelCat 9900 2nd CyberBot 8450',
        explanation: {
          en: 'Step 1: Without a table, rows and columns collapse into a chaotic line of text.',
          uz: "1-Qadam: Jadvallarsiz ma'lumotlar chalkash bitta qatorga aylanib qoladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="color: #94a3b8; font-family: monospace;">1st PixelCat 9900 2nd CyberBot 8450</div>`;
        }
      },
      {
        title: { en: '2. Invisible Grid', uz: '2. Ko\'rinmas Kataklar' },
        code: '<table border="0">\n  <tr><th>Player</th><th>Score</th></tr>\n  <tr><td>PixelCat</td><td>9,900</td></tr>\n</table>',
        explanation: {
          en: 'Step 2: Table rows and data cells organize content, but border="0" leaves grid lines invisible!',
          uz: "2-Qadam: Jadval elementlari saflandi, lekin border='0' bo'lgani uchun chiziqlar ko'rinmaydi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <table style="border-collapse: collapse; color: white;">
              <tr><th style="padding: 4px 12px; color: #38bdf8;">Player</th><th style="padding: 4px 12px; color: #38bdf8;">Score</th></tr>
              <tr><td style="padding: 4px 12px;">PixelCat</td><td style="padding: 4px 12px;">9,900</td></tr>
            </table>
          `;
        }
      },
      {
        title: { en: '3. Visible Border', uz: '3. Chegarali Jadval' },
        code: '<table border="1">\n  <tr><th>Player</th><th>Score</th></tr>\n  <tr><td>PixelCat</td><td>9,900</td></tr>\n</table>',
        explanation: {
          en: 'Step 3: border="1" draws lines around every cell so the table structure becomes crystal clear.',
          uz: "3-Qadam: border='1' barcha kataklarni chiziq bilan o'rab, jadvalni aniq ko'rsatadi."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <table style="border-collapse: collapse; border: 1px solid #5b5fc7; color: white;">
              <tr><th style="border: 1px solid #5b5fc7; padding: 4px 12px; color: #38bdf8;">Player</th><th style="border: 1px solid #5b5fc7; padding: 4px 12px; color: #38bdf8;">Score</th></tr>
              <tr><td style="border: 1px solid #5b5fc7; padding: 4px 12px;">PixelCat</td><td style="border: 1px solid #5b5fc7; padding: 4px 12px;">9,900</td></tr>
            </table>
          `;
        }
      },
      {
        title: { en: '4. Padding & Spacing', uz: '4. Hajm va Bo\'shliq' },
        code(s) {
          return `<table border="${s.border}" cellpadding="${s.padding}">\n  <tr><th>Player</th><th>Score</th></tr>\n  <tr><td>PixelCat</td><td>9,900</td></tr>\n</table>`;
        },
        explanation: {
          en: 'Step 4: Use cellpadding to give text comfortable breathing room inside each box!',
          uz: "4-Qadam: cellpadding yordamida kataklar ichida qulay bo'shliq hosil qiling!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>border:</label><input type="range" id="t-b" min="0" max="6" value="${s.border}"><span class="slider-val" id="t-bv">${s.border}</span></div>
            <div class="slider-row"><label>cellpadding:</label><input type="range" id="t-p" min="2" max="20" value="${s.padding}"><span class="slider-val" id="t-pv">${s.padding}px</span></div>
          `;
          mount.querySelector('#t-b').oninput = (e) => { s.border = e.target.value; mount.querySelector('#t-bv').textContent = s.border; update(); };
          mount.querySelector('#t-p').oninput = (e) => { s.padding = e.target.value; mount.querySelector('#t-pv').textContent = s.padding + 'px'; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <table style="border-collapse: collapse; border: ${s.border}px solid #5b5fc7; color: white;">
              <tr><th style="border: ${s.border}px solid #5b5fc7; padding: ${s.padding}px; color: #38bdf8;">Player</th><th style="border: ${s.border}px solid #5b5fc7; padding: ${s.padding}px; color: #38bdf8;">Score</th></tr>
              <tr><td style="border: ${s.border}px solid #5b5fc7; padding: ${s.padding}px;">PixelCat</td><td style="border: ${s.border}px solid #5b5fc7; padding: ${s.padding}px;">9,900</td></tr>
            </table>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 4. Pictures & Images (Step-by-Step as user explicitly requested!)
// ===================================================================
function renderPicturesLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { width: 180, alt: 'Kiber Explorer Robot' },
    steps: [
      {
        title: { en: '1. Empty State', uz: '1. Bo\'sh Sahifa' },
        code: '<!-- Hali hech qanday rasm tegi yo\'q / No image tag yet -->',
        explanation: {
          en: 'Step 1: There is nothing on stage yet. The browser has not been instructed to render any image.',
          uz: "1-Qadam: Dastlab sahnada hech narsa yo'q. Brauzer hali rasm chizish buyrug'ini olmagan."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="border: 2px dashed rgba(255, 255, 255, 0.2); border-radius: 12px; padding: 40px; color: #64748b; text-align: center;">
              <span>📭</span><br>
              <strong>Sahnada hech qanday rasm yo'q</strong><br>
              <small>Stage is completely empty</small>
            </div>
          `;
        }
      },
      {
        title: { en: '2. Broken + Alt Text', uz: '2. Xato & Alt Matni' },
        code: '<img src="xato_manzil.png" alt="Kiber Explorer Robot">',
        explanation: {
          en: 'Step 2: When the image URL is wrong or missing, the browser displays a broken image icon and displays the alt text! This explains why alt is vital for accessibility and error fallbacks.',
          uz: "2-Qadam: Manzil noto'g'ri bo'lsa yoki rasm yuklanmasa, brauzer xato belgisini va alt matnini chiqaradi! Bu alt matnining xatolik va ko'zi ojizlar uchun nima sababdan o'ta muhimligini ko'rsatadi."
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div class="broken-img-box">
              <span class="broken-img-icon">🖼️❌</span>
              <div>
                <strong style="color: #f87171; display: block; font-size: 11px;">BROKEN IMAGE / XATOLIK</strong>
                <span class="broken-img-text">${s.alt}</span>
              </div>
            </div>
          `;
        }
      },
      {
        title: { en: '3. Raw Oversized src', uz: '3. Cheklovsiz Rasm' },
        code: '<img src="robot.png" alt="Kiber Explorer Robot">',
        explanation: {
          en: 'Step 3: The src URL is connected! But without width/height, the image renders at raw camera resolution, overflowing and breaking the entire page layout!',
          uz: "3-Qadam: Rasm manzili (src) ulandi! Lekin width/height bo'lmagani uchun rasm gigant o'lchamda ochilib, sahifani buzib yubordi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="position: relative; overflow: hidden; width: 100%; height: 260px; border: 2px solid #ef4444; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
              <span class="overflow-badge">⚠️ OVERFLOW / CHIQIB KETDI</span>
              <img src="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>" style="width: 480px; transform: scale(1.4); opacity: 0.9;" />
            </div>
          `;
        }
      },
      {
        title: { en: '4. Fixed Dimension', uz: '4. Aniq O\'lcham' },
        code(s) {
          return `<img src="robot.png" alt="${s.alt}" width="${s.width}">`;
        },
        explanation: {
          en: 'Step 4: Providing width locks the image into an exact, crisp size! Test the slider below to resize responsibly.',
          uz: "4-Qadam: width atributi berilgach, rasm aniq va chiroyli o'lchamga qotirildi! Quyidagi slayder orqali o'lchamni sinab ko'ring."
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>width:</label><input type="range" id="img-w" min="80" max="320" value="${s.width}"><span class="slider-val" id="img-wv">${s.width}px</span></div>
            <label style="font-size: 11px; color: var(--text-muted); margin-top: 6px; display: block;">alt (Yordamchi Matn):</label>
            <input type="text" id="img-a" value="${s.alt}" class="lab-input-text" />
          `;
          mount.querySelector('#img-w').oninput = (e) => { s.width = e.target.value; mount.querySelector('#img-wv').textContent = s.width + 'px'; update(); };
          mount.querySelector('#img-a').oninput = (e) => { s.alt = e.target.value; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="text-align: center;">
              <img src="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>" alt="${s.alt}" style="width: ${s.width}px; transition: width 0.15s ease;" />
              <div style="font-size: 11px; color: #38bdf8; margin-top: 8px;">width="${s.width}" (Fixed & Safe)</div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 5. Basic Divs & 3D Shadow
// ===================================================================
function renderDivsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { border: 4, style: 'solid', shadow: 16 },
    steps: [
      {
        title: { en: '1. Invisible Box', uz: '1. Ko\'rinmas Quti' },
        code: '<div>Cyber Container Box</div>',
        explanation: {
          en: 'Step 1: Without CSS, a div is completely transparent and has no visible borders or depth.',
          uz: "1-Qadam: CSS uslubisiz div mutlaqo ko'rinmas bo'ladi, chegarasi ham yo'q."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="color: #94a3b8; font-size: 14px;">📦 Cyber Container Box (No borders)</div>`;
        }
      },
      {
        title: { en: '2. Background', uz: '2. Orqa Fon' },
        code: 'div {\n  background: #141722;\n  color: white;\n}',
        explanation: {
          en: 'Step 2: Adding background color reveals the rectangular boundaries of the div container.',
          uz: "2-Qadam: Orqa fon rangi qo'shilgach, divning to'rtburchak shakli namoyon bo'ladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="background: #141722; color: white; padding: 20px 24px; border-radius: 8px;">📦 Cyber Container Box</div>`;
        }
      },
      {
        title: { en: '3. Border Outline', uz: '3. Chegara Chizig\'i' },
        code: 'div {\n  background: #141722;\n  border: 4px solid #38bdf8;\n}',
        explanation: {
          en: 'Step 3: A border creates a crisp frame defining the physical perimeter of the element.',
          uz: "3-Qadam: Chegara (border) blok atrofida aniq ramka hosil qilib, uni ajratadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="background: #141722; border: 4px solid #38bdf8; color: white; padding: 20px 24px; border-radius: 8px;">📦 Cyber Container Box</div>`;
        }
      },
      {
        title: { en: '4. 3D Shadow Lift', uz: '4. 3D Soya & Ko\'tarilish' },
        code(s) {
          return `div {\n  background: #141722;\n  border: ${s.border}px ${s.style} #38bdf8;\n  box-shadow: 0 10px ${s.shadow}px rgba(56, 189, 248, 0.4);\n}`;
        },
        explanation: {
          en: 'Step 4: box-shadow lifts the element off the screen in rich 3D space! Adjust sliders below.',
          uz: "4-Qadam: box-shadow blokni ekrandan ko'tarib, 3D hajm bag'ishlaydi! Slayderlarni sinab ko'ring."
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>border:</label><input type="range" id="d-b" min="0" max="12" value="${s.border}"><span class="slider-val" id="d-bv">${s.border}px</span></div>
            <div class="slider-row"><label>box-shadow:</label><input type="range" id="d-sh" min="0" max="40" value="${s.shadow}"><span class="slider-val" id="d-shv">${s.shadow}px</span></div>
          `;
          mount.querySelector('#d-b').oninput = (e) => { s.border = e.target.value; mount.querySelector('#d-bv').textContent = s.border + 'px'; update(); };
          mount.querySelector('#d-sh').oninput = (e) => { s.shadow = e.target.value; mount.querySelector('#d-shv').textContent = s.shadow + 'px'; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="background: #141722; border: ${s.border}px ${s.style} #38bdf8; box-shadow: 0 10px ${s.shadow}px rgba(56, 189, 248, 0.45); color: white; padding: 24px; border-radius: 12px; transition: all 0.15s ease;">
              📦 Cyber Container Box
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 6. Classes
// ===================================================================
function renderClassesLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { c1: true, c2: true, c3: true },
    steps: [
      {
        title: { en: '1. Repeated Styles', uz: '1. Takroriy Kod' },
        code: '<div style="...">1</div>\n<div style="...">2</div>\n<div style="...">3</div>',
        explanation: {
          en: 'Step 1: Without classes, you have to duplicate inline CSS over and over on every element.',
          uz: "1-Qadam: Klasslarsiz har bir elementga bir xil CSS kodini qayta-qayta yozishga to'g'ri keladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: flex; gap: 12px;"><div style="padding: 16px; background: #1e293b; color: white; border-radius: 8px;">Card 1</div><div style="padding: 16px; background: #1e293b; color: white; border-radius: 8px;">Card 2</div><div style="padding: 16px; background: #1e293b; color: white; border-radius: 8px;">Card 3</div></div>`;
        }
      },
      {
        title: { en: '2. Only One Card', uz: '2. Faqat 1-Karta' },
        code: '<div class="hero-glow">1</div>\n<div>2</div>\n<div>3</div>',
        explanation: {
          en: 'Step 2: Giving .hero-glow to just one card leaves the other two unstyled.',
          uz: "2-Qadam: .hero-glow faqat bitta kartaga berilganda, qolgan ikkitasi oddiy qoladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: flex; gap: 12px;"><div style="padding: 16px; background: #1e293b; color: white; border-radius: 8px; border: 2px solid #38bdf8; box-shadow: 0 0 20px rgba(56, 189, 248, 0.5);">Card 1 (Glow)</div><div style="padding: 16px; background: #1e293b; color: white; border-radius: 8px;">Card 2</div><div style="padding: 16px; background: #1e293b; color: white; border-radius: 8px;">Card 3</div></div>`;
        }
      },
      {
        title: { en: '3. Reused Class', uz: '3. Umumiy Klass' },
        code: '<div class="hero-glow">1</div>\n<div class="hero-glow">2</div>\n<div class="hero-glow">3</div>',
        explanation: {
          en: 'Step 3: A single class styles all 3 cards simultaneously! Change the class once to update all.',
          uz: "3-Qadam: Bitta klass bir vaqtning o'zida barcha kartalarni bir xil bezatadi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: flex; gap: 12px;">${[1, 2, 3].map(n => `<div style="padding: 16px; background: #1e293b; color: white; border-radius: 8px; border: 2px solid #38bdf8; box-shadow: 0 0 20px rgba(56, 189, 248, 0.5);">Card ${n}</div>`).join('')}</div>`;
        }
      },
      {
        title: { en: '4. Interactive Toggles', uz: '4. Interaktiv Klasslar' },
        code(s) {
          return `/* .hero-glow ulanishi */\n${s.c1 ? '<div class="hero-glow">Card 1</div>\n' : '<div>Card 1</div>\n'}${s.c2 ? '<div class="hero-glow">Card 2</div>\n' : '<div>Card 2</div>\n'}${s.c3 ? '<div class="hero-glow">Card 3</div>' : '<div>Card 3</div>'}`;
        },
        explanation: {
          en: 'Step 4: Click any card to attach or detach the class and see instant reusability!',
          uz: "4-Qadam: Istalgan kartani bosing va klass ulanishini jonli sinab ko'ring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group">
              <button class="btn-pill ${s.c1 ? 'active' : ''}" id="p-c1">Card 1</button>
              <button class="btn-pill ${s.c2 ? 'active' : ''}" id="p-c2">Card 2</button>
              <button class="btn-pill ${s.c3 ? 'active' : ''}" id="p-c3">Card 3</button>
            </div>
          `;
          mount.querySelector('#p-c1').onclick = () => { s.c1 = !s.c1; update(); };
          mount.querySelector('#p-c2').onclick = () => { s.c2 = !s.c2; update(); };
          mount.querySelector('#p-c3').onclick = () => { s.c3 = !s.c3; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="display: flex; gap: 14px;">
              ${[1, 2, 3].map(n => {
                const active = s['c' + n];
                return `<div style="padding: 18px; background: #1e293b; color: white; border-radius: 10px; cursor: pointer; transition: all 0.2s ease; ${active ? 'border: 2px solid #38bdf8; box-shadow: 0 0 24px rgba(56, 189, 248, 0.6); transform: scale(1.05);' : 'border: 2px solid transparent; opacity: 0.6;'}">Card ${n}</div>`;
              }).join('')}
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 7. Box Model
// ===================================================================
function renderBoxModelTopicLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { margin: 20, border: 6, padding: 24 },
    steps: [
      {
        title: { en: '1. Raw Content', uz: '1. Yassi Matn' },
        code: 'div { margin: 0; border: none; padding: 0; }',
        explanation: {
          en: 'Step 1: Content has 0 padding, 0 border, and 0 margin. Text suffocates against the boundaries.',
          uz: "1-Qadam: Ichki va tashqi bo'shliqlar yo'q. Matn chekkaga yopishib qoladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="background: #3b82f6; color: white; padding: 2px; font-weight: bold;">Content Box</div>`;
        }
      },
      {
        title: { en: '2. Inner Padding', uz: '2. Ichki Padding' },
        code: 'div { padding: 24px; }',
        explanation: {
          en: 'Step 2: Padding adds inner cushion inside the box around the text content.',
          uz: "2-Qadam: Padding quti ichida matn atrofida qulay nafas oladigan masofa ochadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="background: #10b981; padding: 24px;"><div style="background: #3b82f6; color: white; padding: 8px;">Content + Padding</div></div>`;
        }
      },
      {
        title: { en: '3. Border Layer', uz: '3. Chegara Devori' },
        code: 'div { padding: 24px; border: 6px solid #fbbf24; }',
        explanation: {
          en: 'Step 3: Border wraps around the padding, creating the physical perimeter wall.',
          uz: "3-Qadam: Border padding ustidan ramka tortib, tashqi va ichki qavatni ajratadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="border: 6px solid #fbbf24; background: #10b981; padding: 24px;"><div style="background: #3b82f6; color: white; padding: 8px;">Content + Padding + Border</div></div>`;
        }
      },
      {
        title: { en: '4. Outer Margin', uz: '4. Tashqi Masofa' },
        code(s) {
          return `div {\n  margin: ${s.margin}px;\n  border: ${s.border}px solid #fbbf24;\n  padding: ${s.padding}px;\n}`;
        },
        explanation: {
          en: 'Step 4: Margin pushes surrounding elements away! Test the 3 distinct layers below.',
          uz: "4-Qadam: Margin qo'shni bloklarni tashqariga itaradi! 3 ta qavatni slayderda sinab ko'ring."
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>margin:</label><input type="range" id="bm-m" min="0" max="40" value="${s.margin}"><span class="slider-val" id="bm-mv">${s.margin}px</span></div>
            <div class="slider-row"><label>border:</label><input type="range" id="bm-b" min="0" max="15" value="${s.border}"><span class="slider-val" id="bm-bv">${s.border}px</span></div>
            <div class="slider-row"><label>padding:</label><input type="range" id="bm-p" min="4" max="40" value="${s.padding}"><span class="slider-val" id="bm-pv">${s.padding}px</span></div>
          `;
          mount.querySelector('#bm-m').oninput = (e) => { s.margin = e.target.value; mount.querySelector('#bm-mv').textContent = s.margin + 'px'; update(); };
          mount.querySelector('#bm-b').oninput = (e) => { s.border = e.target.value; mount.querySelector('#bm-bv').textContent = s.border + 'px'; update(); };
          mount.querySelector('#bm-p').oninput = (e) => { s.padding = e.target.value; mount.querySelector('#bm-pv').textContent = s.padding + 'px'; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="background: rgba(249, 115, 22, 0.2); border: 2px dashed #f97316; padding: ${s.margin}px; border-radius: 8px;">
              <div style="border: ${s.border}px solid #fbbf24; background: rgba(16, 185, 129, 0.25); padding: ${s.padding}px; border-radius: 6px;">
                <div style="background: #3b82f6; color: white; padding: 12px; border-radius: 4px; text-align: center; font-weight: bold;">
                  CONTENT
                </div>
              </div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 8. Transform (translate, rotate, scale with 3 divs!)
// ===================================================================
function renderTransformLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { target: '1', tx: 30, ty: 0, rot: 20, sc: 1.2 },
    steps: [
      {
        title: { en: '1. 3 Static Divs', uz: '1. 3 Ta Harakatsiz Div' },
        code: '.box-1, .box-2, .box-3 {\n  transform: none;\n}',
        explanation: {
          en: 'Step 1: All 3 divs sit motionless in normal document flow with zero transformation.',
          uz: "1-Qadam: Barcha 3 ta div hech qanday transformsiz o'z joyida tekis turibdi."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="display: flex; gap: 16px;">
              <div style="width: 70px; height: 70px; background: #ef4444; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Div 1</div>
              <div style="width: 70px; height: 70px; background: #a855f7; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Div 2</div>
              <div style="width: 70px; height: 70px; background: #10b981; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Div 3</div>
            </div>
          `;
        }
      },
      {
        title: { en: '2. translateX Shift', uz: '2. Gorizontal Siljish' },
        code: '.box-1 {\n  transform: translateX(45px);\n}',
        explanation: {
          en: 'Step 2: translateX slides Div 1 horizontally across without pushing the other elements out of place!',
          uz: "2-Qadam: translateX Div 1 ni o'ngga suradi, lekin boshqa elementlar joylashuvini buzmaydi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="display: flex; gap: 16px;">
              <div style="width: 70px; height: 70px; background: #ef4444; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; transform: translateX(45px); box-shadow: 0 4px 14px rgba(239, 68, 68, 0.5);">Div 1</div>
              <div style="width: 70px; height: 70px; background: #a855f7; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Div 2</div>
              <div style="width: 70px; height: 70px; background: #10b981; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Div 3</div>
            </div>
          `;
        }
      },
      {
        title: { en: '3. Rotate & Scale', uz: '3. Burish va Masshtab' },
        code: '.box-1 {\n  transform: translateX(45px) rotate(25deg) scale(1.2);\n}',
        explanation: {
          en: 'Step 3: Chaining transforms allows rotating and scaling simultaneously in a single CSS rule!',
          uz: "3-Qadam: Transformlarni birlashtirish orqali bir vaqtning o'zida ham surish, ham burish, ham masshtab beriladi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="display: flex; gap: 16px;">
              <div style="width: 70px; height: 70px; background: #ef4444; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; transform: translateX(45px) rotate(25deg) scale(1.2); box-shadow: 0 6px 18px rgba(239, 68, 68, 0.6); z-index: 2;">Div 1 ⭐</div>
              <div style="width: 70px; height: 70px; background: #a855f7; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Div 2</div>
              <div style="width: 70px; height: 70px; background: #10b981; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Div 3</div>
            </div>
          `;
        }
      },
      {
        title: { en: '4. Master 3-Div Studio', uz: '4. Master Studiya' },
        code(s) {
          const tStr = `translateX(${s.tx}px) translateY(${s.ty}px) rotate(${s.rot}deg) scale(${s.sc})`;
          return s.target === 'all'
            ? `.box-1, .box-2, .box-3 {\n  transform: ${tStr};\n}`
            : `.box-${s.target} {\n  transform: ${tStr};\n}`;
        },
        explanation: {
          en: 'Step 4: Pick which div to move (or all 3) and test translations, rotations, and scales live!',
          uz: "4-Qadam: Qaysi divni siljitishni tanlang (yoki barchasini) va erkin harakatlantiring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group" style="margin-bottom: 8px;">
              <button class="btn-pill ${s.target === '1' ? 'active' : ''}" id="t-d1">🟥 Div 1</button>
              <button class="btn-pill ${s.target === '2' ? 'active' : ''}" id="t-d2">🟪 Div 2</button>
              <button class="btn-pill ${s.target === '3' ? 'active' : ''}" id="t-d3">🟩 Div 3</button>
              <button class="btn-pill ${s.target === 'all' ? 'active' : ''}" id="t-da">⚡ All 3</button>
            </div>
            <div class="slider-row"><label>translateX:</label><input type="range" id="t-tx" min="-80" max="80" value="${s.tx}"><span class="slider-val" id="t-txv">${s.tx}px</span></div>
            <div class="slider-row"><label>translateY:</label><input type="range" id="t-ty" min="-50" max="50" value="${s.ty}"><span class="slider-val" id="t-tyv">${s.ty}px</span></div>
            <div class="slider-row"><label>rotate:</label><input type="range" id="t-r" min="-180" max="180" value="${s.rot}"><span class="slider-val" id="t-rv">${s.rot}°</span></div>
            <div class="slider-row"><label>scale:</label><input type="range" id="t-sc" min="5" max="20" value="${Math.round(s.sc * 10)}"><span class="slider-val" id="t-scv">${s.sc}x</span></div>
            <button class="btn-pill" id="t-reset" style="margin-top: 6px;">🔄 Reset Position</button>
          `;
          mount.querySelector('#t-d1').onclick = () => { s.target = '1'; update(); };
          mount.querySelector('#t-d2').onclick = () => { s.target = '2'; update(); };
          mount.querySelector('#t-d3').onclick = () => { s.target = '3'; update(); };
          mount.querySelector('#t-da').onclick = () => { s.target = 'all'; update(); };
          mount.querySelector('#t-tx').oninput = (e) => { s.tx = e.target.value; mount.querySelector('#t-txv').textContent = s.tx + 'px'; update(); };
          mount.querySelector('#t-ty').oninput = (e) => { s.ty = e.target.value; mount.querySelector('#t-tyv').textContent = s.ty + 'px'; update(); };
          mount.querySelector('#t-r').oninput = (e) => { s.rot = e.target.value; mount.querySelector('#t-rv').textContent = s.rot + '°'; update(); };
          mount.querySelector('#t-sc').oninput = (e) => { s.sc = (e.target.value / 10).toFixed(1); mount.querySelector('#t-scv').textContent = s.sc + 'x'; update(); };
          mount.querySelector('#t-reset').onclick = () => { s.tx = 0; s.ty = 0; s.rot = 0; s.sc = 1.0; update(); };
        },
        renderStage(stage, s) {
          const tStr = `translateX(${s.tx}px) translateY(${s.ty}px) rotate(${s.rot}deg) scale(${s.sc})`;
          stage.innerHTML = `
            <div style="display: flex; gap: 16px;">
              <div style="width: 70px; height: 70px; background: #ef4444; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; transition: transform 0.1s ease; transform: ${(s.target === '1' || s.target === 'all') ? tStr : 'none'};">Div 1</div>
              <div style="width: 70px; height: 70px; background: #a855f7; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; transition: transform 0.1s ease; transform: ${(s.target === '2' || s.target === 'all') ? tStr : 'none'};">Div 2</div>
              <div style="width: 70px; height: 70px; background: #10b981; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; transition: transform 0.1s ease; transform: ${(s.target === '3' || s.target === 'all') ? tStr : 'none'};">Div 3</div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 9. Flexbox
// ===================================================================
function renderFlexboxTopicLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { jc: 'center', gap: 16 },
    steps: [
      {
        title: { en: '1. Default Stack', uz: '1. Vertikal Qator' },
        code: 'div { display: block; }',
        explanation: {
          en: 'Step 1: Standard block elements stack vertically on top of each other.',
          uz: "1-Qadam: Standart blok elementlari bir-birining ostiga vertikal teriladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: block;"><div style="padding: 10px; background: #6366f1; color: white; margin-bottom: 6px; border-radius: 6px;">Item 1</div><div style="padding: 10px; background: #a855f7; color: white; border-radius: 6px;">Item 2</div></div>`;
        }
      },
      {
        title: { en: '2. Flex Row', uz: '2. Flex Qatori' },
        code: '.container { display: flex; }',
        explanation: {
          en: 'Step 2: display: flex aligns children side-by-side into a responsive horizontal track.',
          uz: "2-Qadam: display: flex bolalarni yonma-yon bitta qatorga joylashtiradi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: flex; gap: 8px;"><div style="padding: 12px 18px; background: #6366f1; color: white; border-radius: 6px;">Item 1</div><div style="padding: 12px 18px; background: #a855f7; color: white; border-radius: 6px;">Item 2</div></div>`;
        }
      },
      {
        title: { en: '3. Centered & Gap', uz: '3. Markaz va Gap' },
        code: '.container {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n}',
        explanation: {
          en: 'Step 3: justify-content: center centers items, and gap adds breathing space without margin hacks!',
          uz: "3-Qadam: justify-content markazga tekislaydi, gap esa oraliq masofani o'rnatadi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: flex; justify-content: center; gap: 16px; width: 100%;"><div style="padding: 12px 20px; background: #6366f1; color: white; border-radius: 8px;">Item 1</div><div style="padding: 12px 20px; background: #a855f7; color: white; border-radius: 8px;">Item 2</div><div style="padding: 12px 20px; background: #10b981; color: white; border-radius: 8px;">Item 3</div></div>`;
        }
      },
      {
        title: { en: '4. Interactive Flexbox', uz: '4. Interaktiv Flex' },
        code(s) {
          return `.container {\n  display: flex;\n  justify-content: ${s.jc};\n  gap: ${s.gap}px;\n}`;
        },
        explanation: {
          en: 'Step 4: Switch alignment presets below to see dynamic layout power.',
          uz: "4-Qadam: Quyidagi tugmalar orqali joylashuv tartibini sinab ko'ring."
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group" style="margin-bottom: 8px;">
              <button class="btn-pill ${s.jc === 'flex-start' ? 'active' : ''}" id="fl-s">start</button>
              <button class="btn-pill ${s.jc === 'center' ? 'active' : ''}" id="fl-c">center</button>
              <button class="btn-pill ${s.jc === 'space-between' ? 'active' : ''}" id="fl-sb">space-between</button>
              <button class="btn-pill ${s.jc === 'space-around' ? 'active' : ''}" id="fl-sa">space-around</button>
            </div>
            <div class="slider-row"><label>gap:</label><input type="range" id="fl-g" min="4" max="40" value="${s.gap}"><span class="slider-val" id="fl-gv">${s.gap}px</span></div>
          `;
          mount.querySelector('#fl-s').onclick = () => { s.jc = 'flex-start'; update(); };
          mount.querySelector('#fl-c').onclick = () => { s.jc = 'center'; update(); };
          mount.querySelector('#fl-sb').onclick = () => { s.jc = 'space-between'; update(); };
          mount.querySelector('#fl-sa').onclick = () => { s.jc = 'space-around'; update(); };
          mount.querySelector('#fl-g').oninput = (e) => { s.gap = e.target.value; mount.querySelector('#fl-gv').textContent = s.gap + 'px'; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="display: flex; justify-content: ${s.jc}; gap: ${s.gap}px; width: 100%; border: 2px dashed rgba(255, 255, 255, 0.2); padding: 16px; border-radius: 10px;">
              <div style="padding: 14px 18px; background: #6366f1; color: white; border-radius: 8px;">🚀 1</div>
              <div style="padding: 14px 18px; background: #a855f7; color: white; border-radius: 8px;">⭐ 2</div>
              <div style="padding: 14px 18px; background: #10b981; color: white; border-radius: 8px;">💎 3</div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 10. Buttons & Hover
// ===================================================================
function renderButtonsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { bg: '#6366f1', glow: '#2dd4bf' },
    steps: [
      {
        title: { en: '1. 1995 Gray Button', uz: '1. Eski Kulrang Tugma' },
        code: '<button>Bosing</button>',
        explanation: {
          en: 'Step 1: Default HTML buttons look unstyled, flat, and lack interactivity.',
          uz: "1-Qadam: Standart brauzer tugmasi oddiy va xira ko'rinadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<button style="padding: 4px 10px; font-size: 13px;">Bosing</button>`;
        }
      },
      {
        title: { en: '2. Modern Styled', uz: '2. Zamonaviy Uslub' },
        code: 'button {\n  background: #6366f1;\n  color: white;\n  border-radius: 8px;\n  padding: 12px 24px;\n}',
        explanation: {
          en: 'Step 2: Rich background color, padding, and rounded corners give it modern punch.',
          uz: "2-Qadam: Chiroyli orqa fon, qulay padding va yumaloq burchaklar zamonaviy ko'rk beradi."
        },
        renderStage(stage) {
          stage.innerHTML = `<button style="background: #6366f1; color: white; border-radius: 8px; padding: 12px 24px; border: none; font-weight: bold; cursor: default;">Bosing</button>`;
        }
      },
      {
        title: { en: '3. :hover Glow', uz: '3. :hover Nuri' },
        code: 'button:hover {\n  cursor: pointer;\n  box-shadow: 0 0 20px #2dd4bf;\n  transform: scale(1.05);\n}',
        explanation: {
          en: 'Step 3: :hover and cursor: pointer inform the user that this element is alive and ready to click!',
          uz: "3-Qadam: :hover holati foydalanuvchiga tugma tirik va bosishga tayyor ekanligini bildiradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <button id="btn-glow-demo" style="background: #6366f1; color: white; border-radius: 8px; padding: 12px 24px; border: 2px solid transparent; font-weight: bold; cursor: pointer; transition: all 0.2s ease;">
              ✨ Hover Over Me!
            </button>
          `;
          const btn = stage.querySelector('#btn-glow-demo');
          btn.onmouseenter = () => { btn.style.boxShadow = '0 0 24px #2dd4bf'; btn.style.borderColor = '#2dd4bf'; btn.style.transform = 'scale(1.08)'; };
          btn.onmouseleave = () => { btn.style.boxShadow = 'none'; btn.style.borderColor = 'transparent'; btn.style.transform = 'scale(1)'; };
        }
      },
      {
        title: { en: '4. Interactive Studio', uz: '4. Interaktiv Tugma' },
        code(s) {
          return `button {\n  background: ${s.bg};\n  cursor: pointer;\n}\nbutton:hover {\n  box-shadow: 0 0 24px ${s.glow};\n  transform: scale(1.08);\n}`;
        },
        explanation: {
          en: 'Step 4: Pick your custom palette below and hover over the button to test live physics!',
          uz: "4-Qadam: Ranglarni tanlang va sichqonchani tugma ustiga olib borib sinab ko'ring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>Background:</label><input type="color" id="b-bg" value="${s.bg}" class="color-input"></div>
            <div class="slider-row"><label>Hover Glow:</label><input type="color" id="b-gl" value="${s.glow}" class="color-input"></div>
          `;
          mount.querySelector('#b-bg').oninput = (e) => { s.bg = e.target.value; update(); };
          mount.querySelector('#b-gl').oninput = (e) => { s.glow = e.target.value; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <button id="btn-interactive" style="background: ${s.bg}; color: white; border-radius: 10px; padding: 14px 28px; border: 2px solid transparent; font-size: 16px; font-weight: 800; cursor: pointer; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);">
              🚀 Teleport Launch
            </button>
          `;
          const b = stage.querySelector('#btn-interactive');
          b.onmouseenter = () => { b.style.boxShadow = `0 0 28px ${s.glow}`; b.style.borderColor = s.glow; b.style.transform = 'scale(1.08)'; };
          b.onmouseleave = () => { b.style.boxShadow = 'none'; b.style.borderColor = 'transparent'; b.style.transform = 'scale(1)'; };
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 11. Links (target="_blank" vs target="_self")
// ===================================================================
function renderLinksLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { target: '_blank' },
    steps: [
      {
        title: { en: '1. Plain Text', uz: '1. Oddiy Matn' },
        code: '<span>Teleport to Wikipedia</span>',
        explanation: {
          en: 'Step 1: Text without an <a> tag is not clickable and cannot navigate anywhere.',
          uz: "1-Qadam: <a> tegisiz matn havola bo'la olmaydi va hech qayerga o'tmaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="color: white; font-size: 16px;">Teleport to Wikipedia (Unclickable)</div>`;
        }
      },
      {
        title: { en: '2. href Connected', uz: '2. Havola Ulandi' },
        code: '<a href="https://wikipedia.org">Teleport to Wikipedia</a>',
        explanation: {
          en: 'Step 2: Adding href turns the text into an active portal with underline and pointer cursor.',
          uz: "2-Qadam: href matnni bosiladigan faol havolaga aylantiradi."
        },
        renderStage(stage) {
          stage.innerHTML = `<a href="#" style="color: #38bdf8; font-size: 16px; text-decoration: underline; cursor: pointer;">🌐 Teleport to Wikipedia</a>`;
        }
      },
      {
        title: { en: '3. target="_self"', uz: '3. Xavfli _self' },
        code: '<a href="https://wikipedia.org" target="_self">...</a>',
        explanation: {
          en: 'Step 3: target="_self" replaces your current website, closing your workspace and unsaved progress!',
          uz: "3-Qadam: target='_self' sizning saytingiz o'rniga ochilib, ishingizni yopib yuboradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="border: 2px solid #ef4444; padding: 16px; border-radius: 8px; color: #f87171; text-align: center;">⚠️ target="_self": Hozirgi sahifani yopadi!</div>`;
        }
      },
      {
        title: { en: '4. Safe _blank', uz: '4. Xavfsiz _blank' },
        code(s) {
          return `<a href="https://wikipedia.org" target="${s.target}">\n  🌐 Teleport to Wikipedia\n</a>`;
        },
        explanation: {
          en: 'Step 4: target="_blank" opens a brand new tab, keeping your original site completely safe!',
          uz: "4-Qadam: target='_blank' yangi vkladka ochib, o'quvchi sahifasini xavfsiz saqlaydi!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group">
              <button class="btn-pill ${s.target === '_blank' ? 'active' : ''}" id="l-b">_blank (New Tab 🚀)</button>
              <button class="btn-pill ${s.target === '_self' ? 'active' : ''}" id="l-s">_self (Same Page 🔄)</button>
            </div>
          `;
          mount.querySelector('#l-b').onclick = () => { s.target = '_blank'; update(); };
          mount.querySelector('#l-s').onclick = () => { s.target = '_self'; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="text-align: center;">
              <a href="#" style="color: #38bdf8; font-size: 18px; font-weight: bold; text-decoration: underline;">🌐 Teleport to Wikipedia</a>
              <div style="font-size: 11px; margin-top: 8px; color: ${s.target === '_blank' ? '#10b981' : '#f87171'};">
                ${s.target === '_blank' ? '✅ Opens in safe new browser tab' : '⚠️ Overwrites current page!'}
              </div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 12. Lists (ul vs ol)
// ===================================================================
function renderListsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { type: 'ul' },
    steps: [
      {
        title: { en: '1. Unlisted Words', uz: '1. Tartibsiz Matn' },
        code: 'Olma Nok Banan Shaftoli',
        explanation: {
          en: 'Step 1: Without list markup, grocery items bleed together into an unorganized string.',
          uz: "1-Qadam: Ro'yxat tegisiz so'zlar bir qatorga tartibsiz yig'ilib qoladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="color: #94a3b8;">Olma Nok Banan Shaftoli</div>`;
        }
      },
      {
        title: { en: '2. Bullets <ul>', uz: '2. Belgili <ul>' },
        code: '<ul>\n  <li>Olma</li>\n  <li>Nok</li>\n  <li>Banan</li>\n</ul>',
        explanation: {
          en: 'Step 2: <ul> renders bullet dots (•) where exact ranking sequence does not matter.',
          uz: "2-Qadam: <ul> tartib muhim bo'lmagan belgili (bullet) ro'yxat hosil qiladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<ul style="color: white; padding-left: 20px;"><li>Olma</li><li>Nok</li><li>Banan</li></ul>`;
        }
      },
      {
        title: { en: '3. Numbered <ol>', uz: '3. Raqamli <ol>' },
        code: '<ol>\n  <li>1-O\'rin: Olma</li>\n  <li>2-O\'rin: Nok</li>\n  <li>3-O\'rin: Banan</li>\n</ol>',
        explanation: {
          en: 'Step 3: <ol> automatically computes numbers (1, 2, 3...) for ordered rankings and steps.',
          uz: "3-Qadam: <ol> brauzer orqali avtomatik 1, 2, 3 tartib raqamlarini hisoblab beradi."
        },
        renderStage(stage) {
          stage.innerHTML = `<ol style="color: white; padding-left: 20px;"><li>Olma</li><li>Nok</li><li>Banan</li></ol>`;
        }
      },
      {
        title: { en: '4. Interactive Switcher', uz: '4. Interaktiv Ro\'yxat' },
        code(s) {
          return `<${s.type}>\n  <li>Olma</li>\n  <li>Nok</li>\n  <li>Banan</li>\n</${s.type}>`;
        },
        explanation: {
          en: 'Step 4: Toggle between unordered and ordered lists to watch the browser transform the layout.',
          uz: "4-Qadam: <ul> va <ol> o'rtasida almashib, natijani jonli kuzating."
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group">
              <button class="btn-pill ${s.type === 'ul' ? 'active' : ''}" id="lst-u">&lt;ul&gt; (Bullets •)</button>
              <button class="btn-pill ${s.type === 'ol' ? 'active' : ''}" id="lst-o">&lt;ol&gt; (Numbered 1,2,3)</button>
            </div>
          `;
          mount.querySelector('#lst-u').onclick = () => { s.type = 'ul'; update(); };
          mount.querySelector('#lst-o').onclick = () => { s.type = 'ol'; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = s.type === 'ul'
            ? `<ul style="color: white; padding-left: 24px; font-size: 16px;"><li>🍏 Olma</li><li>🍐 Nok</li><li>🍌 Banan</li></ul>`
            : `<ol style="color: white; padding-left: 24px; font-size: 16px;"><li>🍏 Olma</li><li>🍐 Nok</li><li>🍌 Banan</li></ol>`;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 13. Colors & Gradients
// ===================================================================
function renderColorsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { c1: '#6366f1', c2: '#ec4899', deg: 135 },
    steps: [
      {
        title: { en: '1. Flat Grey', uz: '1. Yassi Kulrang' },
        code: 'div { background: #334155; }',
        explanation: {
          en: 'Step 1: Solid flat colors lack lighting dynamics and visual depth.',
          uz: "1-Qadam: Yassi bir xil ranglar yorug'lik va jonli jilo bermaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 140px; height: 140px; background: #334155; border-radius: 12px;"></div>`;
        }
      },
      {
        title: { en: '2. Solid Brand Color', uz: '2. Sof Rang' },
        code: 'div { background: #6366f1; }',
        explanation: {
          en: 'Step 2: Vibrant single colors improve personality, but lack gradient motion.',
          uz: "2-Qadam: Sof yorqin rang brendni tanitadi, lekin gradientdek jilolanmaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 140px; height: 140px; background: #6366f1; border-radius: 12px;"></div>`;
        }
      },
      {
        title: { en: '3. 2-Color Gradient', uz: '3. Ikki Rangli Gradient' },
        code: 'div {\n  background: linear-gradient(135deg, #6366f1, #ec4899);\n}',
        explanation: {
          en: 'Step 3: linear-gradient smoothly blends between two vibrant colors across a diagonal vector.',
          uz: "3-Qadam: linear-gradient ikkita rangni diagonal bo'yicha silliq bir-biriga ulaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 140px; height: 140px; background: linear-gradient(135deg, #6366f1, #ec4899); border-radius: 12px; box-shadow: 0 10px 25px rgba(236, 72, 153, 0.4);"></div>`;
        }
      },
      {
        title: { en: '4. Interactive Studio', uz: '4. Gradient Studiyasi' },
        code(s) {
          return `div {\n  background: linear-gradient(${s.deg}deg, ${s.c1}, ${s.c2});\n}`;
        },
        explanation: {
          en: 'Step 4: Pick any two colors and adjust the rotation angle slider below live!',
          uz: "4-Qadam: Ikkita rangni tanlang va burchak slayderini o'zgartiring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>Color 1:</label><input type="color" id="g-c1" value="${s.c1}" class="color-input"></div>
            <div class="slider-row"><label>Color 2:</label><input type="color" id="g-c2" value="${s.c2}" class="color-input"></div>
            <div class="slider-row"><label>Angle:</label><input type="range" id="g-d" min="0" max="360" value="${s.deg}"><span class="slider-val" id="g-dv">${s.deg}°</span></div>
          `;
          mount.querySelector('#g-c1').oninput = (e) => { s.c1 = e.target.value; update(); };
          mount.querySelector('#g-c2').oninput = (e) => { s.c2 = e.target.value; update(); };
          mount.querySelector('#g-d').oninput = (e) => { s.deg = e.target.value; mount.querySelector('#g-dv').textContent = s.deg + '°'; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="width: 160px; height: 160px; background: linear-gradient(${s.deg}deg, ${s.c1}, ${s.c2}); border-radius: 16px; box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5); transition: background 0.1s ease;"></div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 14. Fonts & Glow
// ===================================================================
function renderFontsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { size: 36, glow: 18, color: '#2dd4bf' },
    steps: [
      {
        title: { en: '1. Small Text', uz: '1. Kichik Matn' },
        code: 'h1 { font-size: 14px; text-shadow: none; }',
        explanation: {
          en: 'Step 1: Small unstyled text has no visual authority or headline impact.',
          uz: "1-Qadam: Kichik oddiy matn sarlavha vazifasini bajara olmaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 14px; color: white;">CodeCraft Title</div>`;
        }
      },
      {
        title: { en: '2. Big Headline', uz: '2. Katta Sarlavha' },
        code: 'h1 { font-size: 36px; font-weight: 800; }',
        explanation: {
          en: 'Step 2: font-size: 36px establishes bold hierarchy so visitors instantly notice the title.',
          uz: "2-Qadam: font-size: 36px kuchli iyerarxiya hosil qiladi va e'tiborni tortadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 36px; font-weight: 800; color: white;">CodeCraft Title</div>`;
        }
      },
      {
        title: { en: '3. Neon Aura Glow', uz: '3. Neon Nur' },
        code: 'h1 {\n  font-size: 36px;\n  text-shadow: 0 0 18px #2dd4bf;\n}',
        explanation: {
          en: 'Step 3: text-shadow projects a glowing halo radiating behind every character contour!',
          uz: "3-Qadam: text-shadow har bir harf ortidan charaqlab nur taratuvchi neon aura hosil qiladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 36px; font-weight: 800; color: white; text-shadow: 0 0 18px #2dd4bf;">CodeCraft Title</div>`;
        }
      },
      {
        title: { en: '4. Interactive Fonts', uz: '4. Interaktiv Shrift' },
        code(s) {
          return `h1 {\n  font-size: ${s.size}px;\n  text-shadow: 0 0 ${s.glow}px ${s.color};\n}`;
        },
        explanation: {
          en: 'Step 4: Scale the font-size and fine-tune your glowing neon radius below!',
          uz: "4-Qadam: Shrift o'lchamini va neon nur radiusi hamda rangini sozlang!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>font-size:</label><input type="range" id="f-sz" min="18" max="56" value="${s.size}"><span class="slider-val" id="f-szv">${s.size}px</span></div>
            <div class="slider-row"><label>glow radius:</label><input type="range" id="f-gl" min="0" max="40" value="${s.glow}"><span class="slider-val" id="f-glv">${s.glow}px</span></div>
            <div class="slider-row"><label>neon color:</label><input type="color" id="f-c" value="${s.color}" class="color-input"></div>
          `;
          mount.querySelector('#f-sz').oninput = (e) => { s.size = e.target.value; mount.querySelector('#f-szv').textContent = s.size + 'px'; update(); };
          mount.querySelector('#f-gl').oninput = (e) => { s.glow = e.target.value; mount.querySelector('#f-glv').textContent = s.glow + 'px'; update(); };
          mount.querySelector('#f-c').oninput = (e) => { s.color = e.target.value; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="font-size: ${s.size}px; font-weight: 800; color: white; text-shadow: 0 0 ${s.glow}px ${s.color}; transition: all 0.1s ease; text-align: center;">
              ⚡ CodeCraft ⚡
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 15. Shapes (border-radius)
// ===================================================================
function renderShapesLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { radius: 16 },
    steps: [
      {
        title: { en: '1. Sharp Square', uz: '1. O\'tkir Kvadrat' },
        code: 'div { border-radius: 0px; }',
        explanation: {
          en: 'Step 1: border-radius: 0px produces rigid 90-degree industrial corners.',
          uz: "1-Qadam: border-radius: 0px qat'iy o'tkir 90 gradusli burchaklarni hosil qiladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 130px; height: 130px; background: #6366f1; border-radius: 0px;"></div>`;
        }
      },
      {
        title: { en: '2. Rounded Card', uz: '2. Yumshoq Karta' },
        code: 'div { border-radius: 16px; }',
        explanation: {
          en: 'Step 2: 12px to 20px curves harsh corners into smooth, modern, friendly cards.',
          uz: "2-Qadam: 16px radius burchaklarni zamonaviy mobil ilovalardek yumshatadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 130px; height: 130px; background: #6366f1; border-radius: 16px;"></div>`;
        }
      },
      {
        title: { en: '3. Perfect Circle', uz: '3. Mukammal Doira' },
        code: 'div { border-radius: 50%; }',
        explanation: {
          en: 'Step 3: border-radius: 50% turns any square element into a flawless circular avatar!',
          uz: "3-Qadam: border-radius: 50% istalgan kvadrat blokni mukammal doira avatariga aylantiradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 130px; height: 130px; background: #6366f1; border-radius: 50%;"></div>`;
        }
      },
      {
        title: { en: '4. Interactive Morph', uz: '4. Interaktiv Shakl' },
        code(s) {
          return `div {\n  border-radius: ${s.radius}px;\n}`;
        },
        explanation: {
          en: 'Step 4: Slide continuously from 0px (sharp square) to 70px (circle) below!',
          uz: "4-Qadam: Slayderni surib, o'tkir kvadratdan doiragacha bo'lgan shakl evolyutsiyasini boshqaring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>border-radius:</label><input type="range" id="sh-r" min="0" max="70" value="${s.radius}"><span class="slider-val" id="sh-rv">${s.radius}px</span></div>
          `;
          mount.querySelector('#sh-r').oninput = (e) => { s.radius = e.target.value; mount.querySelector('#sh-rv').textContent = s.radius + 'px'; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="width: 140px; height: 140px; background: linear-gradient(135deg, #6366f1, #a855f7); border-radius: ${s.radius}px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 24px; box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4); transition: border-radius 0.1s ease;">
              💎
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 16. Keyframe Animations
// ===================================================================
function renderAnimationsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { dur: 10, running: true },
    steps: [
      {
        title: { en: '1. Stationary Ball', uz: '1. Harakatsiz Koptok' },
        code: '.ball { animation: none; }',
        explanation: {
          en: 'Step 1: Without an animation property, elements remain completely stationary.',
          uz: "1-Qadam: Animatsiyasiz elementlar sahnada harakatsiz to'xtab turadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 48px;">⚽</div>`;
        }
      },
      {
        title: { en: '2. @keyframes Path', uz: '2. @keyframes Yo\'li' },
        code: '@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-70px); }\n}',
        explanation: {
          en: 'Step 2: @keyframes defines the motion path: jumping 70px upwards at the halfway point.',
          uz: "2-Qadam: @keyframes harakat yo'lini belgilaydi: o'rtada 70px yuqoriga sakraydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="border: 2px dashed rgba(255, 255, 255, 0.2); border-radius: 8px; padding: 20px; color: #38bdf8;">Trajectory: 0px ➔ -70px ➔ 0px</div>`;
        }
      },
      {
        title: { en: '3. infinite Loop', uz: '3. Cheksiz Sikl' },
        code: '.ball {\n  animation: bounce 1s infinite ease-in-out;\n}',
        explanation: {
          en: 'Step 3: Attaching the animation with infinite keeps the ball bouncing continuously in rhythm!',
          uz: "3-Qadam: infinite kaliti animatsiyani cheksiz ravishda bir tekis takrorlaydi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <style>@keyframes b1 { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-60px);} }</style>
            <div style="font-size: 48px; animation: b1 1s infinite ease-in-out;">⚽</div>
          `;
        }
      },
      {
        title: { en: '4. Speed Studio', uz: '4. Tezlik Studiyasi' },
        code(s) {
          const d = (s.dur / 10).toFixed(1);
          return `.ball {\n  animation: bounce ${d}s ${s.running ? 'infinite' : 'paused'} ease-in-out;\n}`;
        },
        explanation: {
          en: 'Step 4: Control animation speed and pause/play the bounce physics live!',
          uz: "4-Qadam: Tezlikni o'zgartiring va animatsiyani to'xtatib/yoqib sinab ko'ring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>duration:</label><input type="range" id="an-d" min="3" max="30" value="${s.dur}"><span class="slider-val" id="an-dv">${(s.dur / 10).toFixed(1)}s</span></div>
            <button class="btn-pill" id="an-p" style="margin-top: 6px;">${s.running ? '⏸️ Pause' : '▶️ Play'}</button>
          `;
          mount.querySelector('#an-d').oninput = (e) => { s.dur = e.target.value; mount.querySelector('#an-dv').textContent = (s.dur / 10).toFixed(1) + 's'; update(); };
          mount.querySelector('#an-p').onclick = () => { s.running = !s.running; update(); };
        },
        renderStage(stage, s) {
          const d = (s.dur / 10).toFixed(1);
          stage.innerHTML = `
            <style>@keyframes b2 { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-70px);} }</style>
            <div style="font-size: 54px; animation: b2 ${d}s infinite ease-in-out; animation-play-state: ${s.running ? 'running' : 'paused'};">
              ⚽
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 17. Form Inputs
// ===================================================================
function renderInputsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { type: 'text' },
    steps: [
      {
        title: { en: '1. Plain Text Input', uz: '1. Oddiy Matn Maydoni' },
        code: '<input type="text" placeholder="Ismingizni yozing">',
        explanation: {
          en: 'Step 1: type="text" accepts letters, but cannot pick colors or toggle settings cleanly.',
          uz: "1-Qadam: type='text' so'zlarni qabul qiladi, lekin rang tanlash yoki tugma uchun noqulay."
        },
        renderStage(stage) {
          stage.innerHTML = `<input type="text" placeholder="Ismingizni yozing..." class="lab-input-text" style="max-width: 240px;" />`;
        }
      },
      {
        title: { en: '2. Color Picker', uz: '2. Rang Tanlagich' },
        code: '<input type="color" value="#6366f1">',
        explanation: {
          en: 'Step 2: type="color" invokes the system\'s native palette picker without complex JavaScript!',
          uz: "2-Qadam: type='color' tizimning o'rnatilgan rang tanlash g'ildiragini avtomatik ochadi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<input type="color" value="#6366f1" class="color-input" />`;
        }
      },
      {
        title: { en: '3. Range & Checkbox', uz: '3. Slayder & Belgilash' },
        code: '<input type="range" min="0" max="100">\n<input type="checkbox" checked>',
        explanation: {
          en: 'Step 3: HTML5 input types provide specialized native touch and click widgets.',
          uz: "3-Qadam: HTML5 input turlari qulay boshqaruv moslamalarini beradi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: flex; gap: 14px; align-items: center;"><input type="range" min="0" max="100" value="70"><label style="color: white; display: flex; align-items: center; gap: 6px;"><input type="checkbox" checked> Qabul qilaman</label></div>`;
        }
      },
      {
        title: { en: '4. Interactive Switcher', uz: '4. Interaktiv Forma' },
        code(s) {
          return `<input type="${s.type}">`;
        },
        explanation: {
          en: 'Step 4: Toggle input types below to experience native browser interface diversity!',
          uz: "4-Qadam: Tugmalarni bosib, turli xil input turlarini bevosita sinab ko'ring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group">
              <button class="btn-pill ${s.type === 'text' ? 'active' : ''}" id="i-t">type="text"</button>
              <button class="btn-pill ${s.type === 'color' ? 'active' : ''}" id="i-c">type="color"</button>
              <button class="btn-pill ${s.type === 'checkbox' ? 'active' : ''}" id="i-cb">type="checkbox"</button>
              <button class="btn-pill ${s.type === 'range' ? 'active' : ''}" id="i-r">type="range"</button>
            </div>
          `;
          mount.querySelector('#i-t').onclick = () => { s.type = 'text'; update(); };
          mount.querySelector('#i-c').onclick = () => { s.type = 'color'; update(); };
          mount.querySelector('#i-cb').onclick = () => { s.type = 'checkbox'; update(); };
          mount.querySelector('#i-r').onclick = () => { s.type = 'range'; update(); };
        },
        renderStage(stage, s) {
          let inner = '';
          if (s.type === 'text') inner = '<input type="text" placeholder="Type here..." class="lab-input-text" style="max-width: 240px;">';
          else if (s.type === 'color') inner = '<input type="color" value="#2dd4bf" class="color-input">';
          else if (s.type === 'checkbox') inner = '<label style="color: white; font-size: 16px; display: flex; align-items: center; gap: 8px;"><input type="checkbox" checked style="width: 20px; height: 20px;"> Cyber Explorer</label>';
          else if (s.type === 'range') inner = '<input type="range" min="0" max="100" value="65" style="width: 220px;">';
          stage.innerHTML = `<div style="text-align: center;">${inner}</div>`;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 18. Audio Players
// ===================================================================
function renderAudioLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { controls: true },
    steps: [
      {
        title: { en: '1. Invisible Audio', uz: '1. Ko\'rinmas Audio' },
        code: '<audio src="music.mp3"></audio>',
        explanation: {
          en: 'Step 1: Without the controls attribute, the audio element is completely hidden and invisible!',
          uz: "1-Qadam: controls atributisiz audio elementi sahifada mutlaqo ko'rinmaydi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="border: 2px dashed rgba(255, 255, 255, 0.2); padding: 24px; border-radius: 8px; color: #64748b; text-align: center;">🔇 Audio player is invisible (controls missing)</div>`;
        }
      },
      {
        title: { en: '2. Adding controls', uz: '2. controls Qo\'shildi' },
        code: '<audio src="music.mp3" controls></audio>',
        explanation: {
          en: 'Step 2: Adding controls summons the browser\'s built-in playback widget with play/pause bar!',
          uz: "2-Qadam: controls qo'shilishi bilan brauzerning ijro paneli namoyon bo'ladi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="background: #1e293b; padding: 12px 20px; border-radius: 24px; display: flex; align-items: center; gap: 12px; color: white;"><span>▶️</span><div style="flex:1; height: 4px; background: #64748b; border-radius: 2px;"></div><span>🔊</span></div>`;
        }
      },
      {
        title: { en: '3. Sound Equalizer', uz: '3. Ovoz To\'lqini' },
        code: '<!-- Playing retro synth beats -->',
        explanation: {
          en: 'Step 3: Web Audio synthesizers bring code to life with retro music beats.',
          uz: "3-Qadam: Ovoz to'lqinlari kodni jonlantirib, musiqiy ritm bag'ishlaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: flex; gap: 6px; align-items: flex-end; height: 50px;"><div style="width: 8px; height: 40px; background: #2dd4bf; border-radius: 4px;"></div><div style="width: 8px; height: 25px; background: #38bdf8; border-radius: 4px;"></div><div style="width: 8px; height: 50px; background: #a855f7; border-radius: 4px;"></div><div style="width: 8px; height: 35px; background: #ec4899; border-radius: 4px;"></div></div>`;
        }
      },
      {
        title: { en: '4. Interactive Player', uz: '4. Interaktiv Audio' },
        code(s) {
          return s.controls ? '<audio src="music.mp3" controls></audio>' : '<audio src="music.mp3"></audio>';
        },
        explanation: {
          en: 'Step 4: Toggle the controls flag to see the player appear and disappear!',
          uz: "4-Qadam: controls bayrog'ini yoqib/o'chirib, pleyer paydo bo'lishi va yo'qolishini tekshiring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group">
              <button class="btn-pill ${s.controls ? 'active' : ''}" id="au-t">controls="${s.controls}"</button>
            </div>
          `;
          mount.querySelector('#au-t').onclick = () => { s.controls = !s.controls; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = s.controls
            ? `<div style="background: #1e293b; padding: 12px 20px; border-radius: 24px; display: flex; align-items: center; gap: 12px; color: white; width: 260px;"><span>▶️</span><div style="flex:1; height: 4px; background: #38bdf8; border-radius: 2px;"></div><span>0:42</span></div>`
            : `<div style="color: #f87171; font-size: 13px;">⚠️ controls yo'q: Pleyer yashirindi!</div>`;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 19. Video Players
// ===================================================================
function renderVideoLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { width: 280, controls: true },
    steps: [
      {
        title: { en: '1. No Controls', uz: '1. Boshqaruvsiz' },
        code: '<video src="space.mp4"></video>',
        explanation: {
          en: 'Step 1: Without controls, the user cannot play, pause, or adjust volume.',
          uz: "1-Qadam: controls tegisiz foydalanuvchi videoni yoqa olmaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 220px; height: 130px; background: #0f172a; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #64748b;">(Frozen Video Frame)</div>`;
        }
      },
      {
        title: { en: '2. Controls Added', uz: '2. Boshqaruvli' },
        code: '<video src="space.mp4" controls></video>',
        explanation: {
          en: 'Step 2: controls adds the native playhead, volume, and fullscreen icons.',
          uz: "2-Qadam: controls ijro, ovoz va butun ekran tugmalarini ochadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 220px; height: 130px; background: #0f172a; border-radius: 8px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;"><span style="font-size: 40px;">🎬</span><div style="position: absolute; bottom: 0; inset-inline: 0; height: 24px; background: rgba(0,0,0,0.8); display: flex; align-items: center; padding: 0 8px; gap: 8px; font-size: 10px; color: white;"><span>▶</span><div style="flex:1; height: 2px; background: #38bdf8;"></div><span>⛶</span></div></div>`;
        }
      },
      {
        title: { en: '3. Constrained Size', uz: '3. O\'lcham Berish' },
        code: '<video src="space.mp4" controls width="280"></video>',
        explanation: {
          en: 'Step 3: Setting width prevents the video from exploding across high-res displays.',
          uz: "3-Qadam: width atributi video ekrandan chiqib ketishining oldini oladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 280px; height: 160px; background: #0f172a; border: 2px solid #5b5fc7; border-radius: 10px; display: flex; align-items: center; justify-content: center;"><span style="font-size: 48px;">🚀</span></div>`;
        }
      },
      {
        title: { en: '4. Interactive Video', uz: '4. Interaktiv Video' },
        code(s) {
          return `<video src="space.mp4"${s.controls ? ' controls' : ''} width="${s.width}"></video>`;
        },
        explanation: {
          en: 'Step 4: Resize the video width live to ensure responsive viewport scaling!',
          uz: "4-Qadam: Slayder orqali video kengligini o'zgartirib ko'ring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>width:</label><input type="range" id="vd-w" min="160" max="360" value="${s.width}"><span class="slider-val" id="vd-wv">${s.width}px</span></div>
            <label style="color: white; font-size: 12px; margin-top: 6px; display: flex; align-items: center; gap: 6px;"><input type="checkbox" id="vd-c" ${s.controls ? 'checked' : ''}> controls</label>
          `;
          mount.querySelector('#vd-w').oninput = (e) => { s.width = e.target.value; mount.querySelector('#vd-wv').textContent = s.width + 'px'; update(); };
          mount.querySelector('#vd-c').onchange = (e) => { s.controls = e.target.checked; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="width: ${s.width}px; height: ${Math.round(s.width * 0.58)}px; background: #0f172a; border: 2px solid #5b5fc7; border-radius: 10px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; transition: all 0.15s ease;">
              <span style="font-size: 40px;">🛸</span>
              ${s.controls ? '<div style="position: absolute; bottom: 0; inset-inline: 0; height: 26px; background: rgba(0,0,0,0.85); display: flex; align-items: center; padding: 0 10px; gap: 8px; font-size: 11px; color: white;"><span>▶</span><div style="flex:1; height: 3px; background: #2dd4bf;"></div><span>⛶</span></div>' : ''}
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 20. Secrets & Details (<details>, <summary>)
// ===================================================================
function renderDetailsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { label: '🔍 Maxfiy Javob', secret: 'Kiber xazina paroli: 777-KOD' },
    steps: [
      {
        title: { en: '1. Exposed Spoiler', uz: '1. Ochiq Sir' },
        code: '<p>Maxfiy kod: 777-KOD</p>',
        explanation: {
          en: 'Step 1: Without a spoiler widget, answers are exposed openly to everyone immediately.',
          uz: "1-Qadam: Maxfiylik vidjetisiz javoblar va sirlar darhol hammaga ko'rinib qoladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="background: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; padding: 12px; border-radius: 8px; color: #fca5a5;">⚠️ Ochiq sir: 777-KOD (Spoiler buzildi!)</div>`;
        }
      },
      {
        title: { en: '2. Wrapped in <details>', uz: '2. <details> Pardasi' },
        code: '<details>\n  <p>Maxfiy kod: 777-KOD</p>\n</details>',
        explanation: {
          en: 'Step 2: <details> collapses the secret behind a native clickable arrow disclosure triangle.',
          uz: "2-Qadam: <details> maxfiy javobni bosiladigan uchburchak parda ortiga yashiradi."
        },
        renderStage(stage) {
          stage.innerHTML = `<details style="color: white; background: #1e293b; padding: 12px; border-radius: 8px;"><summary style="cursor: pointer;">Details</summary><p style="margin: 8px 0 0; color: #38bdf8;">Maxfiy kod: 777-KOD</p></details>`;
        }
      },
      {
        title: { en: '3. Custom <summary>', uz: '3. Aniq <summary>' },
        code: '<details>\n  <summary>🔍 Maxfiy Javobni Ko\'rish</summary>\n  <p>777-KOD</p>\n</details>',
        explanation: {
          en: 'Step 3: <summary> replaces the boring generic label with your own enticing trigger prompt!',
          uz: "3-Qadam: <summary> zerikarli nom o'rniga o'zingiz xohlagan qiziqarli yozuvni qo'yadi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<details style="color: white; background: #1e293b; padding: 12px; border-radius: 8px;"><summary style="cursor: pointer; font-weight: bold; color: #fbbf24;">🔍 Maxfiy Javobni Ko'rish</summary><p style="margin: 8px 0 0; color: #2dd4bf;">777-KOD</p></details>`;
        }
      },
      {
        title: { en: '4. Interactive Accordion', uz: '4. Interaktiv Sir' },
        code(s) {
          return `<details>\n  <summary>${s.label}</summary>\n  <p>${s.secret}</p>\n</details>`;
        },
        explanation: {
          en: 'Step 4: Type your own question and hidden answer below, then click to toggle the accordion!',
          uz: "4-Qadam: Savol va yashirin javobni yozing va qutini bosib ochib-yoping!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <label style="font-size: 11px; color: var(--text-muted);">&lt;summary&gt; Tugmasi:</label>
            <input type="text" id="dt-l" value="${s.label}" class="lab-input-text" style="margin-bottom: 6px;">
            <label style="font-size: 11px; color: var(--text-muted);">Yashirin Matn:</label>
            <input type="text" id="dt-s" value="${s.secret}" class="lab-input-text">
          `;
          mount.querySelector('#dt-l').oninput = (e) => { s.label = e.target.value; update(); };
          mount.querySelector('#dt-s').oninput = (e) => { s.secret = e.target.value; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <details style="color: white; background: #141722; border: 1px solid #5b5fc7; padding: 16px; border-radius: 10px; width: 280px;" open>
              <summary style="cursor: pointer; font-weight: bold; color: #fbbf24;">${s.label || 'Details'}</summary>
              <div style="margin-top: 10px; padding: 10px; background: rgba(45, 212, 191, 0.15); border-radius: 6px; color: #2dd4bf;">${s.secret || 'Secret'}</div>
            </details>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 21. CSS Grid (2D Matrix & Gap)
// ===================================================================
function renderGridTopicLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { cols: 3, gap: 12 },
    steps: [
      {
        title: { en: '1. 1-Column Stack', uz: '1. 1 Ustunli Qator' },
        code: '.inventory { display: block; }',
        explanation: {
          en: 'Step 1: Without CSS Grid, inventory items collapse into one clumsy vertical column.',
          uz: "1-Qadam: Gridsiz o'yin inventari noqulay bitta vertikal ustunga aylanadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: flex; flex-direction: column; gap: 4px;"><div style="padding: 6px 14px; background: #1e293b; color: white;">Slot 1</div><div style="padding: 6px 14px; background: #1e293b; color: white;">Slot 2</div></div>`;
        }
      },
      {
        title: { en: '2. 3x2 Grid Matrix', uz: '2. 3x2 Grid Matritsa' },
        code: '.inventory {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}',
        explanation: {
          en: 'Step 2: display: grid snaps elements into clean 2-dimensional rows and columns!',
          uz: "2-Qadam: display: grid elementlarni to'liq 2 o'lchamli matritsaga terib beradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; width: 180px;"><div style="padding: 12px; background: #6366f1; color: white; text-align: center;">🗡️</div><div style="padding: 12px; background: #6366f1; color: white; text-align: center;">🛡️</div><div style="padding: 12px; background: #6366f1; color: white; text-align: center;">🧪</div></div>`;
        }
      },
      {
        title: { en: '3. Adding gap', uz: '3. gap Oralig\'i' },
        code: '.inventory {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}',
        explanation: {
          en: 'Step 3: gap separates every slot with clean breathing space without colliding.',
          uz: "3-Qadam: gap har bir katak orasiga bir xil chiroyli masofa qo'yadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; width: 200px;"><div style="padding: 14px; background: #6366f1; color: white; text-align: center; border-radius: 8px;">🗡️</div><div style="padding: 14px; background: #6366f1; color: white; text-align: center; border-radius: 8px;">🛡️</div><div style="padding: 14px; background: #6366f1; color: white; text-align: center; border-radius: 8px;">🧪</div></div>`;
        }
      },
      {
        title: { en: '4. Interactive Grid', uz: '4. Interaktiv Grid' },
        code(s) {
          return `.inventory {\n  display: grid;\n  grid-template-columns: repeat(${s.cols}, 1fr);\n  gap: ${s.gap}px;\n}`;
        },
        explanation: {
          en: 'Step 4: Switch column counts (1 to 4) and adjust gap slider live!',
          uz: "4-Qadam: Ustunlar soni (1 dan 4 gacha) va oraliq masofani sinab ko'ring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group" style="margin-bottom: 8px;">
              <button class="btn-pill ${s.cols === 2 ? 'active' : ''}" id="g-c2">2 Cols</button>
              <button class="btn-pill ${s.cols === 3 ? 'active' : ''}" id="g-c3">3 Cols</button>
              <button class="btn-pill ${s.cols === 4 ? 'active' : ''}" id="g-c4">4 Cols</button>
            </div>
            <div class="slider-row"><label>gap:</label><input type="range" id="gr-g" min="4" max="24" value="${s.gap}"><span class="slider-val" id="gr-gv">${s.gap}px</span></div>
          `;
          mount.querySelector('#g-c2').onclick = () => { s.cols = 2; update(); };
          mount.querySelector('#g-c3').onclick = () => { s.cols = 3; update(); };
          mount.querySelector('#g-c4').onclick = () => { s.cols = 4; update(); };
          mount.querySelector('#gr-g').oninput = (e) => { s.gap = e.target.value; mount.querySelector('#gr-gv').textContent = s.gap + 'px'; update(); };
        },
        renderStage(stage, s) {
          const items = ['🗡️', '🛡️', '🧪', '💎', '🏹', '📜'];
          stage.innerHTML = `
            <div style="display: grid; grid-template-columns: repeat(${s.cols}, 1fr); gap: ${s.gap}px; width: 100%; max-width: 280px;">
              ${items.map(it => `<div style="padding: 16px; background: #141722; border: 2px solid #5b5fc7; border-radius: 10px; font-size: 24px; text-align: center;">${it}</div>`).join('')}
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 22. Positioning (relative vs absolute)
// ===================================================================
function renderPositionLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { top: 12, right: 12 },
    steps: [
      {
        title: { en: '1. position: static', uz: '1. Oqimda Qadalgan' },
        code: '.badge { position: static; top: 10px; right: 10px; }',
        explanation: {
          en: 'Step 1: With static position, top and right properties are completely ignored by the browser!',
          uz: "1-Qadam: static bo'lganda, top va right buyruqlari brauzer tomonidan mutlaqo inobatga olinmaydi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="background: #1e293b; padding: 20px; border-radius: 8px; color: white; width: 220px;">Card Title <span style="background: #ef4444; padding: 2px 6px; border-radius: 4px; font-size: 11px;">NEW</span></div>`;
        }
      },
      {
        title: { en: '2. Parent: relative', uz: '2. Ota Boshlang\'ich' },
        code: '.card { position: relative; }',
        explanation: {
          en: 'Step 2: Giving position: relative to the parent creates the coordinate anchor frame (0,0).',
          uz: "2-Qadam: Ota blokga position: relative berish (0,0) koordinata chegarasini o'rnatadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="position: relative; border: 2px dashed #38bdf8; padding: 20px; border-radius: 8px; color: white; width: 220px;">Card (Anchor Frame)</div>`;
        }
      },
      {
        title: { en: '3. absolute Snapped', uz: '3. Erkin Qadalgan' },
        code: '.badge {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}',
        explanation: {
          en: 'Step 3: position: absolute lifts the badge and pins it to the exact corner coordinates!',
          uz: "3-Qadam: position: absolute nishonni burchak koordinatasiga erkin va aniq qadab qo'yadi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="position: relative; background: #1e293b; padding: 20px; border-radius: 8px; color: white; width: 220px;">Card Title<span style="position: absolute; top: 10px; right: 10px; background: #ef4444; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: bold;">NEW</span></div>`;
        }
      },
      {
        title: { en: '4. Interactive Pin', uz: '4. Interaktiv Nishon' },
        code(s) {
          return `.card { position: relative; }\n.badge {\n  position: absolute;\n  top: ${s.top}px;\n  right: ${s.right}px;\n}`;
        },
        explanation: {
          en: 'Step 4: Slide top and right coordinates live to watch the pin fly around the card frame!',
          uz: "4-Qadam: top va right koordinatalarini slayderda o'zgartirib, nishon parvozini kuzating!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>top:</label><input type="range" id="pos-t" min="0" max="80" value="${s.top}"><span class="slider-val" id="pos-tv">${s.top}px</span></div>
            <div class="slider-row"><label>right:</label><input type="range" id="pos-r" min="0" max="140" value="${s.right}"><span class="slider-val" id="pos-rv">${s.right}px</span></div>
          `;
          mount.querySelector('#pos-t').oninput = (e) => { s.top = e.target.value; mount.querySelector('#pos-tv').textContent = s.top + 'px'; update(); };
          mount.querySelector('#pos-r').oninput = (e) => { s.right = e.target.value; mount.querySelector('#pos-rv').textContent = s.right + 'px'; update(); };
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="position: relative; width: 240px; height: 140px; background: #1e293b; border: 2px solid #5b5fc7; border-radius: 12px; padding: 16px; color: white;">
              <strong>🎮 Player Card</strong>
              <div style="position: absolute; top: ${s.top}px; right: ${s.right}px; background: #ef4444; color: white; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: bold; box-shadow: 0 4px 10px rgba(239, 68, 68, 0.5); transition: all 0.1s ease;">
                📍 PIN
              </div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 23. Transitions (0s snap vs 0.3s butter smooth)
// ===================================================================
function renderTransitionsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { dur: 3 },
    steps: [
      {
        title: { en: '1. 0s Jarring Snap', uz: '1. 0s Qo\'pol Sakrash' },
        code: '.card { transition: 0s; }\n.card:hover { transform: translateY(-12px); }',
        explanation: {
          en: 'Step 1: Without transition, styling changes teleport abruptly with zero physical motion.',
          uz: "1-Qadam: transitionsiz holat o'zgarishi bir zumda qo'pol sakrab o'tadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div id="t-card-snap" style="padding: 24px; background: #1e293b; border: 2px solid #64748b; border-radius: 10px; color: white; cursor: pointer;">Hover: 0s Abrupt Snap</div>`;
          const c = stage.querySelector('#t-card-snap');
          c.onmouseenter = () => { c.style.transform = 'translateY(-14px)'; c.style.borderColor = '#2dd4bf'; };
          c.onmouseleave = () => { c.style.transform = 'translateY(0)'; c.style.borderColor = '#64748b'; };
        }
      },
      {
        title: { en: '2. The Eye-Strain Problem', uz: '2. Ko\'zni Charchatish' },
        code: '/* Sudden flashes break user immersion */',
        explanation: {
          en: 'Step 2: Abrupt jumps cause visual jarring. Smooth physics make UI feel organic and tactile.',
          uz: "2-Qadam: Birdaniga sakrash foydalanuvchi ko'zini charchatadi. Mayin fizika esa qulaylik beradi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="color: #f87171; border: 2px dashed #ef4444; padding: 20px; border-radius: 8px; text-align: center;">⚠️ 0s Transition feels broken and unnatural</div>`;
        }
      },
      {
        title: { en: '3. 0.3s Butter Smooth', uz: '3. 0.3s Mayin Suzilish' },
        code: '.card {\n  transition: all 0.3s ease;\n}\n.card:hover {\n  transform: translateY(-12px);\n}',
        explanation: {
          en: 'Step 3: transition: all 0.3s ease interpolates intermediate frames like warm butter!',
          uz: "3-Qadam: transition: all 0.3s ease oraliq kadrlarni xuddi asaldek mayin suzdiradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div id="t-card-smooth" style="padding: 24px; background: #1e293b; border: 2px solid #5b5fc7; border-radius: 10px; color: white; cursor: pointer; transition: all 0.3s ease;">✨ Hover Me (0.3s Smooth)</div>`;
          const c = stage.querySelector('#t-card-smooth');
          c.onmouseenter = () => { c.style.transform = 'translateY(-14px)'; c.style.borderColor = '#2dd4bf'; c.style.boxShadow = '0 12px 24px rgba(45, 212, 191, 0.4)'; };
          c.onmouseleave = () => { c.style.transform = 'translateY(0)'; c.style.borderColor = '#5b5fc7'; c.style.boxShadow = 'none'; };
        }
      },
      {
        title: { en: '4. Speed Studio', uz: '4. Vaqt Studiyasi' },
        code(s) {
          const d = (s.dur / 10).toFixed(1);
          return `.card {\n  transition: all ${d}s ease;\n}\n.card:hover {\n  transform: translateY(-14px);\n}`;
        },
        explanation: {
          en: 'Step 4: Test 0s snap vs 0.3s butter smooth vs 1.5s slow-motion below!',
          uz: "4-Qadam: 0s sakrash, 0.3s mayinlik va 1.5s sekin harakatni quyidagi tugmalarda sinab ko'ring!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="btn-pill-group">
              <button class="btn-pill ${s.dur === 0 ? 'active' : ''}" id="tr-0">0s (Snap)</button>
              <button class="btn-pill ${s.dur === 3 ? 'active' : ''}" id="tr-3">0.3s (Smooth)</button>
              <button class="btn-pill ${s.dur === 15 ? 'active' : ''}" id="tr-15">1.5s (Slow-mo)</button>
            </div>
          `;
          mount.querySelector('#tr-0').onclick = () => { s.dur = 0; update(); };
          mount.querySelector('#tr-3').onclick = () => { s.dur = 3; update(); };
          mount.querySelector('#tr-15').onclick = () => { s.dur = 15; update(); };
        },
        renderStage(stage, s) {
          const d = (s.dur / 10).toFixed(1);
          stage.innerHTML = `<div id="t-card-live" style="padding: 24px; background: #1e293b; border: 2px solid #5b5fc7; border-radius: 12px; color: white; cursor: pointer; transition: all ${d}s ease; text-align: center;">🎯 Hover Here (${d}s Physics)</div>`;
          const c = stage.querySelector('#t-card-live');
          c.onmouseenter = () => { c.style.transform = 'translateY(-14px)'; c.style.borderColor = '#2dd4bf'; c.style.boxShadow = '0 14px 28px rgba(45, 212, 191, 0.4)'; };
          c.onmouseleave = () => { c.style.transform = 'translateY(0)'; c.style.borderColor = '#5b5fc7'; c.style.boxShadow = 'none'; };
        }
      }
    ]
  }, isUz);
}

// ===================================================================
// 24. Filters & Neon Auras
// ===================================================================
function renderFiltersLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { shadow: 20, color: '#2dd4bf', blur: 0 },
    steps: [
      {
        title: { en: '1. Sleeping Crystal', uz: '1. Uxlayotgan Olmos' },
        code: '.crystal { filter: none; }',
        explanation: {
          en: 'Step 1: Without filters, the graphic emits no illumination or aura.',
          uz: "1-Qadam: Filtrlarsiz grafik qorong'i va hech qanday nur taratmaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 70px; opacity: 0.6;">💎</div>`;
        }
      },
      {
        title: { en: '2. Neon drop-shadow', uz: '2. Neon drop-shadow' },
        code: '.crystal {\n  filter: drop-shadow(0 0 20px #2dd4bf);\n}',
        explanation: {
          en: 'Step 2: drop-shadow hugs transparent pixel contours, wrapping a radiant neon aura around the crystal!',
          uz: "2-Qadam: drop-shadow shaffof konturlarni taniydi va olmos atrofida charaqlab turuvchi neon aura hosil qiladi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 70px; filter: drop-shadow(0 0 20px #2dd4bf);">💎</div>`;
        }
      },
      {
        title: { en: '3. Frosted blur', uz: '3. Muzdek blur' },
        code: '.crystal {\n  filter: drop-shadow(0 0 20px #2dd4bf) blur(3px);\n}',
        explanation: {
          en: 'Step 3: Combining blur with drop-shadow diffuses light like magical frosted glass.',
          uz: "3-Qadam: blur qo'shilgach, yorug'lik xuddi muzli sehrli oynadek tarqaladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-size: 70px; filter: drop-shadow(0 0 20px #2dd4bf) blur(3px);">💎</div>`;
        }
      },
      {
        title: { en: '4. Interactive VFX', uz: '4. Interaktiv VFX' },
        code(s) {
          const parts = [];
          if (s.shadow > 0) parts.push(`drop-shadow(0 0 ${s.shadow}px ${s.color})`);
          if (s.blur > 0) parts.push(`blur(${s.blur}px)`);
          return `.crystal {\n  filter: ${parts.length ? parts.join(' ') : 'none'};\n}`;
        },
        explanation: {
          en: 'Step 4: Fine-tune aura radius, pick custom neon colors, and adjust blur live!',
          uz: "4-Qadam: Neon aura radiusi, rangi va xiralashtirish darajasini o'zingiz sozlang!"
        },
        renderControls(mount, s, update) {
          mount.innerHTML = `
            <div class="slider-row"><label>glow radius:</label><input type="range" id="fl-sh" min="0" max="40" value="${s.shadow}"><span class="slider-val" id="fl-shv">${s.shadow}px</span></div>
            <div class="slider-row"><label>aura color:</label><input type="color" id="fl-c" value="${s.color}" class="color-input"></div>
            <div class="slider-row"><label>blur:</label><input type="range" id="fl-b" min="0" max="10" value="${s.blur}"><span class="slider-val" id="fl-bv">${s.blur}px</span></div>
          `;
          mount.querySelector('#fl-sh').oninput = (e) => { s.shadow = e.target.value; mount.querySelector('#fl-shv').textContent = s.shadow + 'px'; update(); };
          mount.querySelector('#fl-c').oninput = (e) => { s.color = e.target.value; update(); };
          mount.querySelector('#fl-b').oninput = (e) => { s.blur = e.target.value; mount.querySelector('#fl-bv').textContent = s.blur + 'px'; update(); };
        },
        renderStage(stage, s) {
          const parts = [];
          if (s.shadow > 0) parts.push(`drop-shadow(0 0 ${s.shadow}px ${s.color})`);
          if (s.blur > 0) parts.push(`blur(${s.blur}px)`);
          const filterStr = parts.length ? parts.join(' ') : 'none';
          stage.innerHTML = `
            <div style="font-size: 80px; text-align: center; filter: ${filterStr}; transition: filter 0.1s ease;">
              💎
            </div>
          `;
        }
      }
    ]
  }, isUz);
}


// ==========================================
// THEME 25: Overflow Lab
// ==========================================
function renderOverflowLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { overflowType: 'auto', boxHeight: 140 },
    steps: [
      {
        title: { en: '1. overflow: visible (Spilling Spillover)', uz: '1. overflow: visible (Toshib Ketish)' },
        code: '.terminal-box {\n  height: 100px;\n  overflow: visible;\n}',
        explanation: {
          en: 'Step 1: With overflow: visible, content that is larger than the container spills over and covers other page elements!',
          uz: "1-Qadam: overflow: visible bo'lganda, qutiga sig'magan matn toshib chiqadi va boshqa elementlarni to'sib qo'yadi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="background: #090d16; border: 2px solid #ef4444; border-radius: 10px; width: 260px; height: 90px; padding: 12px; color: #38bdf8; font-family: monospace; font-size: 11px; overflow: visible; position: relative;">
              <div>🛰️ [SYS] Satellite Link: Online</div>
              <div>⚡ [PWR] Reactor Core: 99%</div>
              <div style="color: #ef4444; font-weight: bold;">👾 [SPILL] Alien Signal detected outside!</div>
              <div style="color: #ef4444; font-weight: bold;">🚨 [SPILL] Words exploding across screen!</div>
              <div style="color: #ef4444; font-weight: bold;">🏁 [SPILL] Uncontained telemetry logs!</div>
            </div>
            <div style="margin-top: 50px; background: rgba(239, 68, 68, 0.15); border: 1px dashed #ef4444; padding: 6px 12px; border-radius: 6px; font-size: 11px; color: #fca5a5;">
              ⚠️ Next element is covered by spilled text!
            </div>
          `;
        }
      },
      {
        title: { en: '2. overflow: hidden (Laser Cut)', uz: '2. overflow: hidden (Lazer Qirqish)' },
        code: '.terminal-box {\n  height: 100px;\n  overflow: hidden;\n}',
        explanation: {
          en: 'Step 2: overflow: hidden cleanly chops off anything poking beyond the rounded borders like a laser razor!',
          uz: "2-Qadam: overflow: hidden chegaradan toshgan har qanday narsani lazerdek toza qirqib yashiradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="background: #090d16; border: 2px solid #38bdf8; border-radius: 10px; width: 260px; height: 90px; padding: 12px; color: #38bdf8; font-family: monospace; font-size: 11px; overflow: hidden;">
              <div>🛰️ [SYS] Satellite Link: Online</div>
              <div>⚡ [PWR] Reactor Core: 99%</div>
              <div>👾 [WARN] Alien Signal Detected!</div>
              <div>🛡️ [DEF] Shield Matrix: Active</div>
              <div>🚀 [NAV] Warp Coordinates Locked</div>
            </div>
            <div style="margin-top: 15px; color: #94a3b8; font-size: 11px;">
              ✂️ Extra items are clipped off safely.
            </div>
          `;
        }
      },
      {
        title: { en: '3. overflow-y: scroll (Elevator)', uz: '3. overflow-y: scroll (Skroll Lifti)' },
        code: '.terminal-box {\n  height: 130px;\n  overflow-y: scroll;\n}',
        explanation: {
          en: 'Step 3: overflow-y: scroll adds a vertical scrollbar so users can easily read through all 100+ telemetry logs!',
          uz: "3-Qadam: overflow-y: scroll vertikal skrollbar qo'shib, 100+ xabarlarni erkin o'qish imkonini beradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="background: #090d16; border: 2px solid #38bdf8; border-radius: 10px; width: 260px; height: 130px; padding: 10px; color: #38bdf8; font-family: monospace; font-size: 11px; overflow-y: scroll;" class="custom-cyber-scrollbar">
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">🛰️ [SYS] Sat Link Online</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">⚡ [PWR] Reactor Core 99%</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">👾 [WARN] Signal Detected</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">🛡️ [DEF] Shield Active</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">🚀 [NAV] Warp Locked</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">🏁 [SYS] Ready to Jump!</div>
            </div>
          `;
        }
      },
      {
        title: { en: '4. Interactive Cyber Terminal', uz: '4. Interaktiv Kiber Terminal' },
        code: (s) => `.terminal-box {\n  height: ${s.boxHeight}px;\n  overflow: ${s.overflowType};\n}`,
        explanation: {
          en: 'Step 4: Interactive Master Lab! Change overflow modes and adjust the terminal box height to watch live physics.',
          uz: "4-Qadam: Interaktiv master laboratoriya! Overflow turlarini va balandlikni o'zgartirib jonli fizikani kuzating."
        },
        renderControls(mount, s, onUpdate) {
          mount.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                ${['visible', 'hidden', 'scroll', 'auto'].map(m => `
                  <button class="btn-sm btn-pill ${s.overflowType === m ? 'active' : ''}" data-mode="${m}">
                    overflow: ${m}
                  </button>
                `).join('')}
              </div>
              <div>
                <label style="font-size: 11px; color: #94a3b8; display: flex; justify-content: space-between;">
                  <span>Height:</span>
                  <strong>${s.boxHeight}px</strong>
                </label>
                <input type="range" class="evolution-range-input" min="70" max="200" value="${s.boxHeight}" id="input-height" />
              </div>
            </div>
          `;
          mount.querySelectorAll('[data-mode]').forEach(btn => {
            btn.addEventListener('click', () => {
              onUpdate({ overflowType: btn.getAttribute('data-mode') });
            });
          });
          mount.querySelector('#input-height')?.addEventListener('input', (e) => {
            onUpdate({ boxHeight: parseInt(e.target.value) });
          });
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="background: #090d16; border: 2px solid #38bdf8; border-radius: 12px; width: 280px; height: ${s.boxHeight}px; padding: 12px; color: #38bdf8; font-family: monospace; font-size: 11px; overflow: ${s.overflowType}; transition: height 0.15s ease;" class="custom-cyber-scrollbar">
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">🛰️ [SYS] Sat Link Online</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">⚡ [PWR] Reactor Core 99%</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">👾 [WARN] Alien Signal Detected</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">🛡️ [DEF] Shield Active</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">🚀 [NAV] Warp Locked</div>
              <div style="padding: 4px; background: rgba(56,189,248,0.1); margin-bottom: 4px; border-radius: 4px;">🏁 [SYS] Ready to Jump!</div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ==========================================
// THEME 26: Gradients Lab
// ==========================================
function renderGradientsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { angle: 135, type: 'linear', c1: '#ff007a', c2: '#7928ca' },
    steps: [
      {
        title: { en: '1. Flat Solid Color', uz: '1. Oddiy Yagona Rang' },
        code: '.box { background: #ff007a; }',
        explanation: {
          en: 'Step 1: A flat solid color has zero transition or depth.',
          uz: "1-Qadam: Oddiy yagona rangda chuqurlik yoki o'tishlar yo'q."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 130px; height: 130px; background: #ff007a; border-radius: 12px; box-shadow: 0 4px 14px rgba(0,0,0,0.4);"></div>`;
        }
      },
      {
        title: { en: '2. Linear Gradient (Angle)', uz: '2. Chiziqli Gradient (Burchak)' },
        code: '.box {\n  background: linear-gradient(135deg, #ff007a, #7928ca);\n}',
        explanation: {
          en: 'Step 2: linear-gradient blends colors smoothly along a directional angle (135 degrees)!',
          uz: "2-Qadam: linear-gradient ranglarni diagonal burchak (135 gradus) bo'ylab silliq qorishtiradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 130px; height: 130px; background: linear-gradient(135deg, #ff007a, #7928ca); border-radius: 12px; box-shadow: 0 8px 24px rgba(255,0,122,0.4); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">NEBULA</div>`;
        }
      },
      {
        title: { en: '3. Radial Cosmic Sphere', uz: '3. Radial Kosmik Shar' },
        code: '.orb {\n  background: radial-gradient(circle at 35% 35%, #00f2fe 0%, #0b0d13 80%);\n  border-radius: 50%;\n}',
        explanation: {
          en: 'Step 3: radial-gradient radiates colors outward from a focal point, turning a 2D circle into a glowing 3D energy orb!',
          uz: "3-Qadam: radial-gradient markazdan tashqariga nur sochib, oddiy aylanani 3D energiya shariga aylantiradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="width: 130px; height: 130px; background: radial-gradient(circle at 35% 35%, #00f2fe 0%, #0b0d13 80%); border-radius: 50%; box-shadow: 0 0 30px #00f2fe; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">ORB</div>`;
        }
      },
      {
        title: { en: '4. Master Gradient Mixer', uz: '4. Master Gradient Mikser' },
        code: (s) => s.type === 'linear' 
          ? `.nebula {\n  background: linear-gradient(${s.angle}deg, ${s.c1}, ${s.c2});\n}`
          : `.nebula {\n  background: radial-gradient(circle, ${s.c1} 0%, ${s.c2} 80%);\n}`,
        explanation: {
          en: 'Step 4: Rotate the angle slider and change color shades to discover infinite cosmic palettes!',
          uz: "4-Qadam: Burchak slayderini aylantiring va ranglarni almashtirib cheksiz kosmik palitralarni kashf eting!"
        },
        renderControls(mount, s, onUpdate) {
          mount.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div style="display: flex; gap: 6px;">
                <button class="btn-sm btn-pill ${s.type === 'linear' ? 'active' : ''}" id="btn-linear">Linear</button>
                <button class="btn-sm btn-pill ${s.type === 'radial' ? 'active' : ''}" id="btn-radial">Radial</button>
              </div>
              ${s.type === 'linear' ? `
                <div>
                  <label style="font-size: 11px; color: #94a3b8; display: flex; justify-content: space-between;">
                    <span>Angle:</span>
                    <strong>${s.angle}°</strong>
                  </label>
                  <input type="range" class="evolution-range-input" min="0" max="360" value="${s.angle}" id="input-angle" />
                </div>
              ` : ''}
              <div style="display: flex; gap: 10px;">
                <label style="font-size: 11px; color: #94a3b8;">C1: <input type="color" value="${s.c1}" id="input-c1" style="background: none; border: none; cursor: pointer;" /></label>
                <label style="font-size: 11px; color: #94a3b8;">C2: <input type="color" value="${s.c2}" id="input-c2" style="background: none; border: none; cursor: pointer;" /></label>
              </div>
            </div>
          `;
          mount.querySelector('#btn-linear')?.addEventListener('click', () => onUpdate({ type: 'linear' }));
          mount.querySelector('#btn-radial')?.addEventListener('click', () => onUpdate({ type: 'radial' }));
          mount.querySelector('#input-angle')?.addEventListener('input', (e) => onUpdate({ angle: parseInt(e.target.value) }));
          mount.querySelector('#input-c1')?.addEventListener('input', (e) => onUpdate({ c1: e.target.value }));
          mount.querySelector('#input-c2')?.addEventListener('input', (e) => onUpdate({ c2: e.target.value }));
        },
        renderStage(stage, s) {
          const bg = s.type === 'linear'
            ? `linear-gradient(${s.angle}deg, ${s.c1}, ${s.c2})`
            : `radial-gradient(circle at 35% 35%, ${s.c1} 0%, ${s.c2} 80%)`;
          stage.innerHTML = `
            <div style="width: 140px; height: 140px; background: ${bg}; border-radius: ${s.type === 'radial' ? '50%' : '16px'}; box-shadow: 0 0 35px ${s.c1}; display: flex; align-items: center; justify-content: center; color: white; font-weight: 800; font-size: 13px; letter-spacing: 1px;">
              ${s.type.toUpperCase()}
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ==========================================
// THEME 27: Media Queries Lab
// ==========================================
function renderMediaQueriesLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { simulatedWidth: 850 },
    steps: [
      {
        title: { en: '1. Wide Desktop (3 Columns)', uz: '1. Kompyuter (3 Ustun)' },
        code: '.squad { display: flex; gap: 12px; }',
        explanation: {
          en: 'Step 1: On wide laptop screens, 3 hero cards fit side-by-side with ease.',
          uz: "1-Qadam: Keng kompyuter ekranlarida 3 ta qahramon yonma-yon a'lo darajada sig'adi."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="display: flex; gap: 8px; width: 300px; padding: 10px; background: #0f172a; border-radius: 8px;">
              <div style="flex: 1; background: #1e293b; padding: 8px; text-align: center; border-radius: 6px; font-size: 10px; color: white;">🥷 Ninja</div>
              <div style="flex: 1; background: #1e293b; padding: 8px; text-align: center; border-radius: 6px; font-size: 10px; color: white;">⚡ Mage</div>
              <div style="flex: 1; background: #1e293b; padding: 8px; text-align: center; border-radius: 6px; font-size: 10px; color: white;">🤖 Mech</div>
            </div>
          `;
        }
      },
      {
        title: { en: '2. Squished Phone View', uz: "2. Siqilgan Telefon Ko'rinishi" },
        code: '/* Squeezed on mobile without media queries! */',
        explanation: {
          en: 'Step 2: Without media queries, cards get tiny and unreadable on pocket smartphones!',
          uz: "2-Qadam: Media query bo'lmasa, telefonlarda kartalar siqilib kichiklashib ketadi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="display: flex; gap: 4px; width: 140px; padding: 6px; background: #0f172a; border: 1px dashed #ef4444; border-radius: 8px;">
              <div style="flex: 1; background: #1e293b; padding: 4px; text-align: center; font-size: 7px; color: white;">🥷 Nin</div>
              <div style="flex: 1; background: #1e293b; padding: 4px; text-align: center; font-size: 7px; color: white;">⚡ Mag</div>
              <div style="flex: 1; background: #1e293b; padding: 4px; text-align: center; font-size: 7px; color: white;">🤖 Mec</div>
            </div>
            <div style="margin-top: 8px; font-size: 10px; color: #fca5a5;">⚠️ Text squashed and unreadable!</div>
          `;
        }
      },
      {
        title: { en: '3. @media (max-width: 768px)', uz: '3. @media (max-width: 768px)' },
        code: '@media (max-width: 768px) {\n  .squad { flex-direction: column; }\n}',
        explanation: {
          en: 'Step 3: The media query detects mobile screens and stacks cards vertically for easy scrolling!',
          uz: "3-Qadam: Media query mobil ekranni aniqlaydi va qulay o'qish uchun kartalarni vertikal terib beradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 6px; width: 150px; padding: 10px; background: #0f172a; border-radius: 8px; border: 2px solid #38bdf8;">
              <div style="background: #1e293b; padding: 6px; text-align: center; border-radius: 4px; font-size: 10px; color: white;">🥷 Shadow Ninja</div>
              <div style="background: #1e293b; padding: 6px; text-align: center; border-radius: 4px; font-size: 10px; color: white;">⚡ Thunder Mage</div>
              <div style="background: #1e293b; padding: 6px; text-align: center; border-radius: 4px; font-size: 10px; color: white;">🤖 Mech Knight</div>
            </div>
          `;
        }
      },
      {
        title: { en: '4. Live Screen Width Simulator', uz: '4. Jonli Ekran Kengligi Simulyatori' },
        code: (s) => `/* Simulated Width: ${s.simulatedWidth}px */\n@media (max-width: 768px) {\n  .squad { flex-direction: column; }\n}`,
        explanation: {
          en: 'Step 4: Slide the viewport width below 768px to watch the layout magically transform in real-time!',
          uz: "4-Qadam: Slayderni 768px dan pastga tushiring va kartalar qanday qilib darhol vertikal o'tishini ko'ring!"
        },
        renderControls(mount, s, onUpdate) {
          mount.innerHTML = `
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 4px;">
                <span style="color: #94a3b8;">Screen Width:</span>
                <span style="color: ${s.simulatedWidth < 768 ? '#38bdf8' : '#10b981'}; font-weight: bold;">
                  ${s.simulatedWidth}px ${s.simulatedWidth < 768 ? '📱 MOBILE' : '💻 DESKTOP'}
                </span>
              </div>
              <input type="range" class="evolution-range-input" min="360" max="1100" value="${s.simulatedWidth}" id="sim-width" />
            </div>
          `;
          mount.querySelector('#sim-width')?.addEventListener('input', (e) => onUpdate({ simulatedWidth: parseInt(e.target.value) }));
        },
        renderStage(stage, s) {
          const isMobile = s.simulatedWidth < 768;
          stage.innerHTML = `
            <div style="display: flex; flex-direction: ${isMobile ? 'column' : 'row'}; gap: 8px; width: ${isMobile ? '160px' : '290px'}; padding: 12px; background: #0f172a; border-radius: 10px; border: 2px solid ${isMobile ? '#38bdf8' : '#10b981'}; transition: all 0.2s ease;">
              <div style="flex: 1; background: #1e293b; padding: 8px; text-align: center; border-radius: 6px; font-size: 11px; color: white;">
                <div>🥷</div>
                <strong>Ninja</strong>
              </div>
              <div style="flex: 1; background: #1e293b; padding: 8px; text-align: center; border-radius: 6px; font-size: 11px; color: white;">
                <div>⚡</div>
                <strong>Mage</strong>
              </div>
              <div style="flex: 1; background: #1e293b; padding: 8px; text-align: center; border-radius: 6px; font-size: 11px; color: white;">
                <div>🤖</div>
                <strong>Mech</strong>
              </div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ==========================================
// THEME 28: Web Fonts & SVG Icons Lab
// ==========================================
function renderWebFontsIconsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { font: 'Orbitron', spacing: 3, iconColor: '#f59e0b' },
    steps: [
      {
        title: { en: '1. Default System Font', uz: '1. Standart Shrift' },
        code: '.title { font-family: serif; }',
        explanation: {
          en: 'Step 1: Plain generic browser fonts look ordinary and lack personality.',
          uz: "1-Qadam: Standart brauzer shriftlari oddiy va zerikarli ko'rinadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-family: serif; font-size: 20px; color: white; padding: 20px; background: #0f172a; border-radius: 8px;">CYBER GUILD</div>`;
        }
      },
      {
        title: { en: '2. Google Font (Orbitron)', uz: '2. Google Font (Orbitron)' },
        code: '.title {\n  font-family: \'Orbitron\', monospace;\n  letter-spacing: 3px;\n}',
        explanation: {
          en: 'Step 2: Connecting a cyber web font gives instant cinematic gaming prestige!',
          uz: "2-Qadam: Kiber veb shrift ulash sarlavhaga video o'yinlardek nufuzli ko'rinish beradi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="font-family: 'Orbitron', monospace, sans-serif; letter-spacing: 3px; font-size: 18px; color: #38bdf8; padding: 20px; background: #0f172a; border-radius: 8px;">CYBER GUILD</div>`;
        }
      },
      {
        title: { en: '3. Vector SVG Badge', uz: '3. Vektor SVG Nishon' },
        code: '<svg viewBox="0 0 24 24">\n  <polygon points="12,2 15,8 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,8" />\n</svg>',
        explanation: {
          en: 'Step 3: SVG draws infinite-resolution vector art that never gets blurry.',
          uz: "3-Qadam: SVG cheksiz tiniqlikdagi vektor tasvirlarni chizadi va xiralashmaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="text-align: center; padding: 20px; background: #0f172a; border: 2px solid #38bdf8; border-radius: 12px; width: 220px;">
              <svg style="width: 44px; height: 44px; fill: #f59e0b; filter: drop-shadow(0 0 10px rgba(245,158,11,0.6));" viewBox="0 0 24 24">
                <polygon points="12,2 15,8 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,8" />
              </svg>
              <div style="font-family: 'Orbitron', monospace; letter-spacing: 2px; color: #38bdf8; font-weight: bold; margin-top: 6px;">CYBER GUILD</div>
            </div>
          `;
        }
      },
      {
        title: { en: '4. Interactive Typography & Icon Studio', uz: '4. Tipografiya va Ikonka Studiyasi' },
        code: (s) => `.guild-title {\n  font-family: '${s.font}', monospace;\n  letter-spacing: ${s.spacing}px;\n}\n.svg-star { fill: ${s.iconColor}; }`,
        explanation: {
          en: 'Step 4: Switch fonts, adjust letter spacing, and repaint the vector crest live!',
          uz: "4-Qadam: Shriftlarni almashtiring, harflar oralig'ini sozlang va vektor nishonni qayta bo'yang!"
        },
        renderControls(mount, s, onUpdate) {
          mount.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                ${['Orbitron', 'Press Start 2P', 'Courier New', 'sans-serif'].map(f => `
                  <button class="btn-sm btn-pill ${s.font === f ? 'active' : ''}" data-font="${f}">${f}</button>
                `).join('')}
              </div>
              <div>
                <label style="font-size: 11px; color: #94a3b8; display: flex; justify-content: space-between;">
                  <span>Spacing:</span>
                  <strong>${s.spacing}px</strong>
                </label>
                <input type="range" class="evolution-range-input" min="0" max="8" value="${s.spacing}" id="input-spacing" />
              </div>
            </div>
          `;
          mount.querySelectorAll('[data-font]').forEach(btn => {
            btn.addEventListener('click', () => onUpdate({ font: btn.getAttribute('data-font') }));
          });
          mount.querySelector('#input-spacing')?.addEventListener('input', (e) => onUpdate({ spacing: parseInt(e.target.value) }));
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div style="text-align: center; padding: 20px; background: #0f172a; border: 2px solid #38bdf8; border-radius: 14px; width: 240px; box-shadow: 0 0 25px rgba(56,189,248,0.25);">
              <svg style="width: 44px; height: 44px; fill: ${s.iconColor}; filter: drop-shadow(0 0 10px ${s.iconColor});" viewBox="0 0 24 24">
                <polygon points="12,2 15,8 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,8" />
              </svg>
              <div style="font-family: '${s.font}', monospace, sans-serif; letter-spacing: ${s.spacing}px; color: #38bdf8; font-weight: 800; font-size: 15px; margin-top: 8px;">
                CYBER GUILD
              </div>
              <p style="color: #94a3b8; font-size: 11px; margin: 4px 0 0;">Rank: Grand Champion ⭐</p>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ==========================================
// THEME 29: Third-Party Animations Lab
// ==========================================
function renderThirdPartyAnimationsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { effect: 'animate__bounceIn' },
    steps: [
      {
        title: { en: '1. Static Card', uz: '1. Qimirlamaydigan Karta' },
        code: '<div class="chest">💎 REWARD</div>',
        explanation: {
          en: 'Step 1: Without animation classes, elements appear abruptly without fanfare.',
          uz: "1-Qadam: Animatsiya klasslarisiz elementlar birdaniga jonsiz paydo bo'ladi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="background: #1e293b; padding: 18px 24px; border-radius: 12px; border: 1px solid #334155; text-align: center; color: white;">💎 REWARD</div>`;
        }
      },
      {
        title: { en: '2. animate__bounceIn', uz: '2. animate__bounceIn (Sakrash)' },
        code: '<div class="chest animate__animated animate__bounceIn">\n  💎 REWARD\n</div>',
        explanation: {
          en: 'Step 2: Adding animate__bounceIn gives an elastic superhero pop celebration!',
          uz: "2-Qadam: animate__bounceIn qo'shilsa, element elastik superqahramondek sakrab sahnaga chiqadi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div class="animate__animated animate__bounceIn" style="background: linear-gradient(135deg, #1e293b, #0f172a); border: 2px solid #f59e0b; padding: 18px 24px; border-radius: 12px; text-align: center; color: white; box-shadow: 0 0 25px rgba(245,158,11,0.4);">💎 VICTORY REWARD!</div>`;
        }
      },
      {
        title: { en: '3. animate__pulse (Loop)', uz: '3. animate__pulse (Puls Takrori)' },
        code: '<div class="chest animate__animated animate__pulse">\n  💎 REWARD\n</div>',
        explanation: {
          en: 'Step 3: animate__pulse keeps the element throbbing like a beating power core!',
          uz: "3-Qadam: animate__pulse elementni quvvat o'zagidek to'xtovsiz urib turishga majbur qiladi!"
        },
        renderStage(stage) {
          stage.innerHTML = `<div class="animate__animated animate__pulse" style="background: linear-gradient(135deg, #1e293b, #0f172a); border: 2px solid #f59e0b; padding: 18px 24px; border-radius: 12px; text-align: center; color: white; box-shadow: 0 0 25px rgba(245,158,11,0.4);">💎 +500 CYBER CRYSTALS</div>`;
        }
      },
      {
        title: { en: '4. Interactive Trigger Board', uz: '4. Interaktiv Effekt Doskasi' },
        code: (s) => `<div class="chest animate__animated ${s.effect}">\n  💎 VICTORY!\n</div>`,
        explanation: {
          en: 'Step 4: Click any animation trigger button to test battle-tested Animate.css effects live!',
          uz: "4-Qadam: Istalgan animatsiya tugmasini bosing va Animate.css effektlarini jonli sinab ko'ring!"
        },
        renderControls(mount, s, onUpdate) {
          mount.innerHTML = `
            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
              ${['animate__bounceIn', 'animate__pulse', 'animate__fadeInUp', 'animate__zoomIn', 'animate__glow'].map(fx => `
                <button class="btn-sm btn-pill ${s.effect === fx ? 'active' : ''}" data-fx="${fx}">
                  ${fx.replace('animate__', '')}
                </button>
              `).join('')}
            </div>
          `;
          mount.querySelectorAll('[data-fx]').forEach(btn => {
            btn.addEventListener('click', () => onUpdate({ effect: btn.getAttribute('data-fx') }));
          });
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <div key="${Date.now()}" class="animate__animated ${s.effect}" style="background: linear-gradient(135deg, #1e293b, #0f172a); border: 2px solid #f59e0b; border-radius: 14px; padding: 20px 30px; text-align: center; color: white; box-shadow: 0 0 30px rgba(245,158,11,0.4);">
              <span style="font-size: 40px; display: block; margin-bottom: 6px;">💎</span>
              <strong style="font-size: 15px;">VICTORY REWARD!</strong>
              <div style="color: #cbd5e1; font-size: 12px; margin-top: 4px;">+500 Cyber Crystals</div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ==========================================
// THEME 30: Bootstrap Grid Lab
// ==========================================
function renderBootstrapGridLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { cols: 3 },
    steps: [
      {
        title: { en: '1. Raw Unaligned Divs', uz: '1. Setkasiz Oddiy Divlar' },
        code: '<div>Card 1</div><div>Card 2</div><div>Card 3</div>',
        explanation: {
          en: 'Step 1: Normal divs stack vertically taking 100% width each without columns.',
          uz: "1-Qadam: Oddiy divlar har biri 100% kenglik olib faqat ustma-ust tushadi."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 6px; width: 240px;">
              <div style="background: #334155; padding: 6px; text-align: center; color: white; border-radius: 4px; font-size: 11px;">Box 1</div>
              <div style="background: #334155; padding: 6px; text-align: center; color: white; border-radius: 4px; font-size: 11px;">Box 2</div>
              <div style="background: #334155; padding: 6px; text-align: center; color: white; border-radius: 4px; font-size: 11px;">Box 3</div>
            </div>
          `;
        }
      },
      {
        title: { en: '2. Bootstrap .container & .row', uz: '2. .container va .row' },
        code: '<div class="container">\n  <div class="row">...</div>\n</div>',
        explanation: {
          en: 'Step 2: .container centers the content and .row creates the 12-unit horizontal flex track.',
          uz: "2-Qadam: .container kontentni markazga oladi, .row esa 12 birlikli gorizontal yo'lni ochadi."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="border: 2px dashed #38bdf8; padding: 12px; border-radius: 8px; width: 280px; text-align: center; color: #38bdf8; font-size: 11px;">
              📦 .container > .row (12 units available)
            </div>
          `;
        }
      },
      {
        title: { en: '3. Three .col-md-4 Columns', uz: '3. Uchta .col-md-4 Ustun' },
        code: '<div class="row">\n  <div class="col-12 col-md-4">Card 1</div>\n  <div class="col-12 col-md-4">Card 2</div>\n  <div class="col-12 col-md-4">Card 3</div>\n</div>',
        explanation: {
          en: 'Step 3: 4 + 4 + 4 = 12! Three columns fit perfectly side-by-side on desktop screens.',
          uz: "3-Qadam: 4 + 4 + 4 = 12! Uchta ustun kompyuter ekranida yonma-yon a'lo darajada joylashadi."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div class="container" style="max-width: 300px;">
              <div class="row g-2">
                <div class="col-4"><div style="background: #3b82f6; padding: 10px; border-radius: 6px; text-align: center; color: white; font-size: 11px; font-weight: bold;">Col 4</div></div>
                <div class="col-4"><div style="background: #10b981; padding: 10px; border-radius: 6px; text-align: center; color: white; font-size: 11px; font-weight: bold;">Col 4</div></div>
                <div class="col-4"><div style="background: #a855f7; padding: 10px; border-radius: 6px; text-align: center; color: white; font-size: 11px; font-weight: bold;">Col 4</div></div>
              </div>
            </div>
          `;
        }
      },
      {
        title: { en: '4. Dynamic 12-Column Calculator', uz: '4. Dinamik 12 Ustunli Kalkulyator' },
        code: (s) => `<div class="row">\n  <!-- Each column takes ${12 / s.cols} of 12 units (${s.cols} columns total) -->\n  <div class="col-${12 / s.cols}">...</div>\n</div>`,
        explanation: {
          en: 'Step 4: Switch column configurations to see how Bootstrap mathematically divides the 12-unit row!',
          uz: "4-Qadam: Ustunlar sonini o'zgartiring va Bootstrap 12 birlikni qanday matematik bo'lishini ko'ring!"
        },
        renderControls(mount, s, onUpdate) {
          mount.innerHTML = `
            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
              ${[2, 3, 4, 6].map(n => `
                <button class="btn-sm btn-pill ${s.cols === n ? 'active' : ''}" data-n="${n}">
                  ${n} Columns (col-${12/n})
                </button>
              `).join('')}
            </div>
          `;
          mount.querySelectorAll('[data-n]').forEach(btn => {
            btn.addEventListener('click', () => onUpdate({ cols: parseInt(btn.getAttribute('data-n')) }));
          });
        },
        renderStage(stage, s) {
          const colors = ['#3b82f6', '#10b981', '#a855f7', '#f59e0b', '#ec4899', '#06b6d4'];
          const items = Array.from({ length: s.cols }, (_, i) => `
            <div class="col-${12 / s.cols}">
              <div style="background: ${colors[i % colors.length]}; padding: 10px 4px; border-radius: 6px; text-align: center; color: white; font-size: 10px; font-weight: bold;">
                col-${12 / s.cols}
              </div>
            </div>
          `).join('');
          stage.innerHTML = `
            <div class="container" style="max-width: 320px;">
              <div class="row g-2">
                ${items}
              </div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ==========================================
// THEME 31: Bootstrap Components Lab
// ==========================================
function renderBootstrapComponentsLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { badgeStatus: 'ONLINE', alertType: 'primary' },
    steps: [
      {
        title: { en: '1. Unstyled Box', uz: '1. Bezaklarsiz Quti' },
        code: '<div>Commander Nova</div>',
        explanation: {
          en: 'Step 1: Without UI components, content is just raw text without visual hierarchy.',
          uz: "1-Qadam: UI komponentlarsiz matn shunchaki jonsiz va tekis ko'rinadi."
        },
        renderStage(stage) {
          stage.innerHTML = `<div style="color: white; padding: 15px; background: #0f172a; border-radius: 6px; width: 220px;">Commander Nova - Captain</div>`;
        }
      },
      {
        title: { en: '2. .card & .card-body', uz: '2. .card va .card-body' },
        code: '<div class="card">\n  <div class="card-body">...</div>\n</div>',
        explanation: {
          en: 'Step 2: Bootstrap card adds shadow depth, clean borders, and organized spacing.',
          uz: "2-Qadam: Bootstrap card qutiga soya, chiroyli chegara va toza masofalar qo'shadi."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div class="card" style="width: 240px; margin: 0 auto;">
              <div class="card-body">
                <h5 class="card-title">Commander Nova</h5>
                <p class="card-text">Flagship captain with 100% clearance.</p>
              </div>
            </div>
          `;
        }
      },
      {
        title: { en: '3. Badges, Alerts & Buttons', uz: '3. Nishonlar, Ogohlantirish va Tugma' },
        code: '<span class="badge bg-success rounded-pill">ONLINE</span>\n<div class="alert alert-primary">Ready!</div>\n<button class="btn btn-primary">Launch</button>',
        explanation: {
          en: 'Step 3: Combine status badges, colored alert banners, and action buttons!',
          uz: "3-Qadam: Status nishonlari, rangli ogohlantirish qutilari va start tugmasini birlashtiring!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div class="card" style="width: 250px; margin: 0 auto;">
              <div class="card-header d-flex justify-content-between" style="display: flex; justify-content: space-between;">
                <span>🛡️ STATUS</span>
                <span class="badge bg-success rounded-pill">ONLINE</span>
              </div>
              <div class="card-body">
                <h5 class="card-title" style="margin-top: 0;">Commander Nova</h5>
                <div class="alert alert-primary" style="padding: 6px 10px; font-size: 11px; margin-bottom: 10px;">⚡ Warp Core Ready!</div>
                <button class="btn btn-primary btn-sm">Launch Shuttle 🚀</button>
              </div>
            </div>
          `;
        }
      },
      {
        title: { en: '4. Interactive Component Studio', uz: '4. Interaktiv Komponent Studiyasi' },
        code: (s) => `<div class="card">\n  <div class="card-header">\n    <span class="badge bg-success rounded-pill">${s.badgeStatus}</span>\n  </div>\n  <div class="card-body">\n    <div class="alert alert-${s.alertType}">Alert Active</div>\n  </div>\n</div>`,
        explanation: {
          en: 'Step 4: Customize component badges and alert styles live with one click!',
          uz: "4-Qadam: Nishon va ogohlantirish uslublarini bir bosish bilan jonli o'zgartiring!"
        },
        renderControls(mount, s, onUpdate) {
          mount.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div style="display: flex; gap: 6px;">
                ${['ONLINE', 'AWAY', 'IN BATTLE'].map(status => `
                  <button class="btn-sm btn-pill ${s.badgeStatus === status ? 'active' : ''}" data-status="${status}">${status}</button>
                `).join('')}
              </div>
              <div style="display: flex; gap: 6px;">
                ${['primary', 'success', 'warning', 'danger'].map(type => `
                  <button class="btn-sm btn-pill ${s.alertType === type ? 'active' : ''}" data-type="${type}">alert-${type}</button>
                `).join('')}
              </div>
            </div>
          `;
          mount.querySelectorAll('[data-status]').forEach(btn => {
            btn.addEventListener('click', () => onUpdate({ badgeStatus: btn.getAttribute('data-status') }));
          });
          mount.querySelectorAll('[data-type]').forEach(btn => {
            btn.addEventListener('click', () => onUpdate({ alertType: btn.getAttribute('data-type') }));
          });
        },
        renderStage(stage, s) {
          const badgeClass = s.badgeStatus === 'ONLINE' ? 'bg-success' : s.badgeStatus === 'AWAY' ? 'bg-warning' : 'bg-danger';
          stage.innerHTML = `
            <div class="card" style="width: 250px; margin: 0 auto;">
              <div class="card-header" style="display: flex; justify-content: space-between;">
                <span>🛡️ NOVA</span>
                <span class="badge ${badgeClass} rounded-pill">${s.badgeStatus}</span>
              </div>
              <div class="card-body">
                <h5 class="card-title" style="margin-top: 0; font-size: 15px;">Starship Captain</h5>
                <div class="alert alert-${s.alertType}" style="padding: 6px 10px; font-size: 11px; margin-bottom: 10px;">
                  Status: ${s.alertType.toUpperCase()} mode
                </div>
                <button class="btn btn-${s.alertType === 'warning' ? 'warning' : 'primary'} btn-sm">Take Action 🚀</button>
              </div>
            </div>
          `;
        }
      }
    ]
  }, isUz);
}

// ==========================================
// THEME 32: Bootstrap UI / Navbar Lab
// ==========================================
function renderBootstrapUiLab(container, lesson, isUz) {
  createStepfulLab(container, {
    initialState: { brand: 'CodeCraft OS', activeTab: 'Home' },
    steps: [
      {
        title: { en: '1. Raw Bullet List', uz: "1. Oddiy Nuqtali Ro'yxat" },
        code: '<ul><li>Home</li><li>Missions</li><li>Scores</li></ul>',
        explanation: {
          en: 'Step 1: Standard lists look like documents rather than modern app navigation.',
          uz: "1-Qadam: Oddiy ro'yxatlar ilova menyusiga emas, hujjatga o'xshaydi."
        },
        renderStage(stage) {
          stage.innerHTML = `<ul style="color: white; font-size: 12px; padding-left: 20px;"><li>Home</li><li>Missions</li><li>Scores</li></ul>`;
        }
      },
      {
        title: { en: '2. .navbar .navbar-dark .bg-dark', uz: "2. Qorong'u Navbar Konteyneri" },
        code: '<nav class="navbar navbar-dark bg-dark">\n  ...\n</nav>',
        explanation: {
          en: 'Step 2: .navbar wraps the header in a sleek dark container with built-in flex alignment.',
          uz: "2-Qadam: .navbar sarlavhani zamonaviy qorong'u flex konteyneriga o'raydi."
        },
        renderStage(stage) {
          stage.innerHTML = `
            <div style="background: #0f172a; border: 1px solid #1e293b; padding: 10px 16px; border-radius: 8px; width: 280px; color: #38bdf8; font-weight: bold; font-size: 12px;">
              🧭 Navigation Container (Ready for Links)
            </div>
          `;
        }
      },
      {
        title: { en: '3. Brand & Nav Links', uz: '3. Brend va Menyu Havolalari' },
        code: '<a class="navbar-brand">👾 OS</a>\n<ul class="navbar-nav">\n  <li><a class="nav-link active">Home</a></li>\n</ul>',
        explanation: {
          en: 'Step 3: Brand logo on the left, pill menu links in the middle, and status buttons on the right!',
          uz: "3-Qadam: Chapda logotip, o'rtada menyu havolalari va o'ngda tugma!"
        },
        renderStage(stage) {
          stage.innerHTML = `
            <nav class="navbar navbar-dark bg-dark" style="width: 290px; padding: 8px 12px; margin: 0 auto;">
              <a class="navbar-brand" style="font-size: 13px;" href="#"><span>👾</span> CodeCraft</a>
              <ul class="navbar-nav" style="gap: 4px;">
                <li><a class="nav-link active" style="font-size: 11px;" href="#">Home</a></li>
                <li><a class="nav-link" style="font-size: 11px;" href="#">Quests</a></li>
              </ul>
              <button class="btn btn-outline-info btn-sm" style="font-size: 10px; padding: 2px 6px;">Connect</button>
            </nav>
          `;
        }
      },
      {
        title: { en: '4. Interactive Header Simulator', uz: '4. Interaktiv Sarlavha Simulyatori' },
        code: (s) => `<nav class="navbar navbar-dark bg-dark">\n  <a class="navbar-brand">${s.brand}</a>\n  <a class="nav-link ${s.activeTab === 'Home' ? 'active' : ''}">Home</a>\n  <a class="nav-link ${s.activeTab === 'Quests' ? 'active' : ''}">Quests</a>\n</nav>`,
        explanation: {
          en: 'Step 4: Click nav tabs in the preview to test active state transitions live!',
          uz: "4-Qadam: Prevyudagi menyu tugmalarini bosib faol holat o'tishlarini jonli sinab ko'ring!"
        },
        renderControls(mount, s, onUpdate) {
          mount.innerHTML = `
            <div style="display: flex; gap: 6px;">
              ${['Home', 'Quests', 'Rankings', 'Vault'].map(tab => `
                <button class="btn-sm btn-pill ${s.activeTab === tab ? 'active' : ''}" data-tab="${tab}">${tab}</button>
              `).join('')}
            </div>
          `;
          mount.querySelectorAll('[data-tab]').forEach(btn => {
            btn.addEventListener('click', () => onUpdate({ activeTab: btn.getAttribute('data-tab') }));
          });
        },
        renderStage(stage, s) {
          stage.innerHTML = `
            <nav class="navbar navbar-dark bg-dark" style="width: 300px; padding: 8px 12px; margin: 0 auto;">
              <a class="navbar-brand" style="font-size: 13px;" href="#"><span>👾</span> ${s.brand}</a>
              <ul class="navbar-nav" style="gap: 4px;">
                ${['Home', 'Quests', 'Rankings'].map(tab => `
                  <li>
                    <a class="nav-link ${s.activeTab === tab ? 'active' : ''}" style="font-size: 11px; cursor: pointer;" href="#">
                      ${tab}
                    </a>
                  </li>
                `).join('')}
              </ul>
              <button class="btn btn-outline-info btn-sm" style="font-size: 10px; padding: 2px 6px;">💳</button>
            </nav>
          `;
        }
      }
    ]
  }, isUz);
}

// Fallback Default Lab
function renderDefaultLab(container, lesson, isUz) {
  container.innerHTML = `
    <div style="padding: 20px; color: white;">
      <h4>${isUz ? 'Laboratoriya Tayyorlanmoqda' : 'Lab Initializing'}</h4>
      <p>${isUz ? 'Ushbu mavzu uchun parametrlar yuklanmoqda...' : 'Loading parameters for this theme...'}</p>
    </div>
  `;
}

// Master Dispatcher
function renderTopicLab(container, lesson, lang = 'en') {
  if (!container || !lesson) return;
  const isUz = lang === 'uz';

  const renderers = {
    'theme-1-tags': renderTagsLab,
    'theme-2-structure': renderStructureLab,
    'theme-3-tables': renderTablesLab,
    'theme-4-pictures': renderPicturesLab,
    'theme-5-divs': renderDivsLab,
    'theme-6-classes': renderClassesLab,
    'theme-7-box-model': renderBoxModelTopicLab,
    'theme-8-transform': renderTransformLab,
    'theme-9-flexbox': renderFlexboxTopicLab,
    'theme-10-buttons': renderButtonsLab,
    'theme-11-links': renderLinksLab,
    'theme-12-lists': renderListsLab,
    'theme-13-colors': renderColorsLab,
    'theme-14-fonts': renderFontsLab,
    'theme-15-shapes': renderShapesLab,
    'theme-16-animations': renderAnimationsLab,
    'theme-17-inputs': renderInputsLab,
    'theme-18-audio': renderAudioLab,
    'theme-19-video': renderVideoLab,
    'theme-20-details': renderDetailsLab,
    'theme-21-grid': renderGridTopicLab,
    'theme-22-position': renderPositionLab,
    'theme-23-transitions': renderTransitionsLab,
    'theme-24-filters': renderFiltersLab,
    'theme-25-overflow': renderOverflowLab,
    'theme-26-gradients': renderGradientsLab,
    'theme-27-media-queries': renderMediaQueriesLab,
    'theme-28-web-fonts-icons': renderWebFontsIconsLab,
    'theme-29-third-party-animations': renderThirdPartyAnimationsLab,
    'theme-30-bootstrap-grid': renderBootstrapGridLab,
    'theme-31-bootstrap-components': renderBootstrapComponentsLab,
    'theme-32-bootstrap-ui': renderBootstrapUiLab
  };

  const renderer = renderers[lesson.id] || renderDefaultLab;
  renderer(container, lesson, isUz);
}


  // --- Main App Controller ---
  
/**
 * CodeCraft Kids Main Application Controller
 * Focused, uncluttered, step-by-step educational interface.
 */















// Application State
let state = loadStateFromStorage();
let currentView = 'lesson'; // 'lesson' | 'sandbox' | 'labs'
let currentLab = 'box'; // 'box' | 'flexbox' | 'color' | 'grid'
let activePreviewTab = 'live'; // 'live' | 'target' | 'side'
let currentCode = '';

// DOM Elements Cache
const elements = {};

/**
 * Resolves a bilingual string or object: { en: '...', uz: '...' }
 */
function localize(val, lang = 'en') {
  if (val === null || val === undefined) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'object') {
    return val[lang] || val.en || Object.values(val)[0] || '';
  }
  return String(val);
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

/**
 * Formats educational markdown and escapes dangerous HTML to prevent DOM table corruption.
 * Safely converts `code` to <code class="inline-code">, **bold** to <strong>, *italic* to <em>, and newlines to <br>.
 */
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
  attachGlobalListeners();
  applyStateToUI();
  selectLesson(state.currentLessonId || LESSONS[0].id);
}

function cacheElements() {
  elements.app = document.body;
  elements.starCount = document.getElementById('star-count');
  elements.btnLang = document.getElementById('btn-lang');
  elements.btnLangUz = document.getElementById('btn-lang-uz');
  elements.btnLangEn = document.getElementById('btn-lang-en');
  elements.btnTheme = document.getElementById('btn-theme');
  elements.btnAudio = document.getElementById('btn-audio');
  elements.btnTeacher = document.getElementById('btn-teacher');
  elements.btnLabs = document.getElementById('btn-labs');
  elements.btnSandbox = document.getElementById('btn-sandbox');
  elements.btnStudentProfile = document.getElementById('btn-student-profile');

  elements.sidebarLessonList = document.getElementById('sidebar-lesson-list');
  elements.progressFill = document.getElementById('progress-fill');
  elements.progressText = document.getElementById('progress-text');
  elements.progressTitle = document.getElementById('progress-title');

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
    playSound('click', state.audioEnabled);
    applyStateToUI();

    const lesson = getLessonById(state.currentLessonId);
    if (lesson) {
      const prevStarter = localize(lesson.initialCode, prevLang);
      const newStarter = localize(lesson.initialCode, lang);
      if (!currentCode || currentCode.trim() === prevStarter.trim()) {
        currentCode = newStarter;
      }
    }

    if (currentView === 'sandbox') {
      renderSandboxView();
    } else if (currentView === 'labs') {
      renderLabsView();
    } else {
      renderSidebar();
      renderLessonView();
    }
  }

  // Dual Segmented Switcher
  elements.btnLangUz?.addEventListener('click', () => switchLang('uz'));
  elements.btnLangEn?.addEventListener('click', () => switchLang('en'));

  // Language Toggle (English <-> Uzbek)
  elements.btnLang?.addEventListener('click', () => {
    stopSpeaking();
    const prevLang = state.lang;
    state = toggleLanguage(state);
    saveStateToStorage(state);
    playSound('click', state.audioEnabled);
    applyStateToUI();

    const lesson = getLessonById(state.currentLessonId);
    if (lesson) {
      const prevStarter = localize(lesson.initialCode, prevLang);
      const newStarter = localize(lesson.initialCode, state.lang);
      if (!currentCode || currentCode.trim() === prevStarter.trim()) {
        currentCode = newStarter;
      }
    }

    if (currentView === 'sandbox') {
      renderSandboxView();
    } else if (currentView === 'labs') {
      renderLabsView();
    } else {
      renderSidebar();
      renderLessonView();
    }
  });

  // Theme Toggle (Calm Dark <-> OLED Black)
  elements.btnTheme?.addEventListener('click', () => {
    state.theme = state.theme === 'oled' ? 'dark' : 'oled';
    saveStateToStorage(state);
    applyTheme();
    playSound('click', state.audioEnabled);
  });

  // Audio toggle
  elements.btnAudio?.addEventListener('click', () => {
    state.audioEnabled = !state.audioEnabled;
    saveStateToStorage(state);
    elements.btnAudio.textContent = state.audioEnabled ? '🔊' : '🔇';
    playSound('click', state.audioEnabled);
  });

  // Teacher Mode toggle
  elements.btnTeacher?.addEventListener('click', () => {
    state.teacherMode = !state.teacherMode;
    saveStateToStorage(state);
    elements.btnTeacher.classList.toggle('active', state.teacherMode);
    playSound('click', state.audioEnabled);
    const box = document.getElementById('teacher-playbook-box');
    if (box) {
      box.style.display = state.teacherMode ? 'block' : 'none';
    }
  });

  // Visual Interactive Labs toggle
  elements.btnLabs?.addEventListener('click', () => {
    stopSpeaking();
    currentView = currentView === 'labs' ? 'lesson' : 'labs';
    elements.btnLabs.classList.toggle('active', currentView === 'labs');
    elements.btnSandbox?.classList.remove('active');
    playSound('click', state.audioEnabled);

    if (currentView === 'labs') {
      renderLabsView();
    } else {
      renderLessonView();
    }
  });

  // Free Sandbox toggle
  elements.btnSandbox?.addEventListener('click', () => {
    stopSpeaking();
    currentView = currentView === 'sandbox' ? 'lesson' : 'sandbox';
    elements.btnSandbox.classList.toggle('active', currentView === 'sandbox');
    elements.btnLabs?.classList.remove('active');
    playSound('click', state.audioEnabled);

    if (currentView === 'sandbox') {
      renderSandboxView();
    } else {
      renderLessonView();
    }
  });

  // Brand click -> Return to lessons
  document.querySelector('.brand')?.addEventListener('click', () => {
    stopSpeaking();
    currentView = 'lesson';
    elements.btnSandbox?.classList.remove('active');
    elements.btnLabs?.classList.remove('active');
    playSound('click', state.audioEnabled);
    selectLesson(LESSONS[0].id);
  });
}

function applyTheme() {
  const theme = state.theme || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  if (elements.btnTheme) {
    elements.btnTheme.textContent = theme === 'oled' ? '🌑' : '🌙';
    elements.btnTheme.title = theme === 'oled' ? 'Switch to Calm Dark Mode' : 'Switch to Deep OLED Night';
  }
}

function applyStateToUI() {
  applyTheme();
  const avatarEl = document.getElementById('header-student-avatar');
  if (avatarEl) avatarEl.textContent = state.studentAvatar || '🚀';
  const nameEl = document.getElementById('header-student-name');
  if (nameEl) nameEl.textContent = state.studentName || 'Code Cadet';
  const shiftEl = document.getElementById('header-student-shift');
  if (shiftEl) shiftEl.textContent = state.shift || '1-Smena';

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
  if (elements.btnLang) {
    elements.btnLang.textContent = state.lang === 'uz' ? '🇬🇧 English' : '🇺🇿 O\'zbekcha';
  }
  if (elements.btnTeacher) {
    elements.btnTeacher.classList.toggle('active', state.teacherMode);
  }
  if (elements.btnAudio) {
    elements.btnAudio.textContent = state.audioEnabled ? '🔊' : '🔇';
  }
  if (elements.btnSandbox) {
    elements.btnSandbox.textContent = '🛠️ Sandbox';
  }
  updateProgressUI();
  renderSidebar();
}

function updateProgressUI() {
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
      elements.btnLabs?.classList.remove('active');
      playSound('click', state.audioEnabled);
      selectLesson(lessonId);
    });
  });
}

function selectLesson(lessonId) {
  stopSpeaking();
  currentView = 'lesson';
  elements.btnSandbox?.classList.remove('active');
  elements.btnLabs?.classList.remove('active');
  const lesson = getLessonById(lessonId) || LESSONS[0];
  state.currentLessonId = lesson.id;
  currentCode = localize(lesson.initialCode, state.lang);
  saveStateToStorage(state);

  renderSidebar();
  renderLessonView();
}

/**
 * Wraps bare student snippets cleanly so kids never have to write HTML boilerplate!
 */
function wrapForPreview(snippet) {
  if (snippet.includes('<!DOCTYPE') || snippet.includes('<html')) {
    // If full document does not specify a background, inject dark canvas style to prevent blinding white flashes
    if (!snippet.includes('background:') && !snippet.includes('background-color:')) {
      if (snippet.includes('<head>')) {
        return snippet.replace('<head>', '<head><style>body { background-color: #0b0d13; color: #cbd5e1; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }</style>');
      }
      return `<style>body { background-color: #0b0d13; color: #cbd5e1; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }</style>${snippet}`;
    }
    return snippet;
  }

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 24px;
      background: #0b0d13;
      color: #cbd5e1;
      line-height: 1.6;
    }
    h1, h2, h3, h4 { margin-top: 0; color: #f1f5f9; }
    p { margin-bottom: 16px; color: #cbd5e1; }
    button {
      background: #5b5fc7;
      color: #ffffff;
      border: none;
      padding: 10px 18px;
      font-size: 15px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 700;
      margin-right: 8px;
      margin-bottom: 8px;
      transition: background 0.15s;
    }
    button:hover { background: #4e52b3; }
    ul, ol { padding-left: 24px; margin-bottom: 16px; }
    li { margin-bottom: 6px; }
    a { color: #38bdf8; text-decoration: underline; }
    img { max-width: 100%; height: auto; border-radius: 8px; }
    table {
      border-collapse: collapse;
      color: #cbd5e1;
      margin-bottom: 16px;
    }
    th, td {
      border: 1px solid #334155;
      padding: 8px 12px;
    }
    th {
      background: rgba(91, 95, 199, 0.25);
      color: #f1f5f9;
    }
    /* Offline Bootstrap 5 Essentials */
    *, *::before, *::after { box-sizing: border-box; }
    .container, .container-fluid { width: 100%; padding-right: 12px; padding-left: 12px; margin: 0 auto; max-width: 100%; }
    .row { display: flex; flex-wrap: wrap; margin-right: -8px; margin-left: -8px; }
    .row > * { box-sizing: border-box; flex-shrink: 0; width: 100%; max-width: 100%; padding-right: 8px; padding-left: 8px; }
    .col { flex: 1 0 0%; }
    .col-12 { flex: 0 0 auto; width: 100%; }
    .col-6 { flex: 0 0 auto; width: 50%; }
    .col-4 { flex: 0 0 auto; width: 33.333333%; }
    .col-3 { flex: 0 0 auto; width: 25%; }
    @media (min-width: 768px) {
      .col-md-6 { flex: 0 0 auto; width: 50%; }
      .col-md-4 { flex: 0 0 auto; width: 33.333333%; }
      .col-md-3 { flex: 0 0 auto; width: 25%; }
      .col-md-12 { flex: 0 0 auto; width: 100%; }
    }
    .card { position: relative; display: flex; flex-direction: column; background: #1a1e2d; border: 1px solid #2e384d; border-radius: 12px; overflow: hidden; margin-bottom: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
    .card-header { padding: 10px 14px; background: rgba(255,255,255,0.05); border-bottom: 1px solid #2e384d; font-weight: 700; color: #38bdf8; }
    .card-body { padding: 14px; }
    .card-title { margin-top: 0; margin-bottom: 6px; font-size: 17px; font-weight: 700; color: #fff; }
    .card-text { margin-bottom: 10px; color: #cbd5e1; font-size: 14px; }
    .btn { display: inline-block; font-weight: 600; text-align: center; cursor: pointer; border: 1px solid transparent; padding: 8px 14px; font-size: 13px; border-radius: 8px; transition: all 0.2s; }
    .btn-primary { background: #3b82f6; color: #fff; border-color: #3b82f6; }
    .btn-success { background: #10b981; color: #fff; border-color: #10b981; }
    .btn-danger { background: #ef4444; color: #fff; border-color: #ef4444; }
    .btn-warning { background: #f59e0b; color: #000; border-color: #f59e0b; }
    .btn-outline-primary { background: transparent; color: #38bdf8; border-color: #38bdf8; }
    .badge { display: inline-block; padding: 4px 8px; font-size: 11px; font-weight: 700; border-radius: 6px; color: #fff; }
    .rounded-pill { border-radius: 50rem !important; }
    .bg-primary { background: #3b82f6 !important; color: #fff !important; }
    .bg-success { background: #10b981 !important; color: #fff !important; }
    .bg-danger { background: #ef4444 !important; color: #fff !important; }
    .bg-warning { background: #f59e0b !important; color: #000 !important; }
    .alert { padding: 10px 14px; border-radius: 8px; margin-bottom: 12px; font-size: 13px; }
    .alert-primary { background: rgba(59,130,246,0.15); border: 1px solid #3b82f6; color: #93c5fd; }
    .alert-success { background: rgba(16,185,129,0.15); border: 1px solid #10b981; color: #6ee7b7; }
    .alert-warning { background: rgba(245,158,11,0.15); border: 1px solid #f59e0b; color: #fde047; }
    .navbar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; padding: 8px 14px; border-radius: 8px; margin-bottom: 16px; background: #0f172a; border: 1px solid #1e293b; }
    .navbar-brand { font-size: 16px; font-weight: 800; color: #38bdf8; text-decoration: none; display: flex; align-items: center; gap: 6px; }
    .navbar-nav { display: flex; list-style: none; padding: 0; margin: 0; gap: 6px; }
    .nav-link { padding: 5px 10px; color: #94a3b8; text-decoration: none; font-size: 13px; border-radius: 5px; }
    .nav-link.active, .nav-link:hover { color: #fff; background: rgba(255,255,255,0.08); }
    /* Third Party & Animation Helpers */
    .animate__animated { animation-duration: 1s; animation-fill-mode: both; }
    .animate__bounceIn { animation-name: bounceIn; }
    .animate__pulse { animation-name: pulse; animation-iteration-count: infinite; }
    .animate__fadeInUp { animation-name: fadeInUp; }
    @keyframes bounceIn { 0% { opacity: 0; transform: scale3d(0.3,0.3,0.3); } 20% { transform: scale3d(1.1,1.1,1.1); } 40% { transform: scale3d(0.9,0.9,0.9); } 60% { opacity: 1; transform: scale3d(1.03,1.03,1.03); } 80% { transform: scale3d(0.97,0.97,0.97); } 100% { opacity: 1; transform: scale3d(1,1,1); } }
    @keyframes pulse { 0% { transform: scale3d(1,1,1); } 50% { transform: scale3d(1.08,1.08,1.08); } 100% { transform: scale3d(1,1,1); } }
    @keyframes fadeInUp { 0% { opacity: 0; transform: translate3d(0,30px,0); } 100% { opacity: 1; transform: translate3d(0,0,0); } }
    /* Custom Scrollbar for overflow demos */
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: #07090e; border-radius: 4px; }
    ::-webkit-scrollbar-thumb { background: #38bdf8; border-radius: 4px; }
  </style>
</head>
<body>
  ${snippet}
</body>
</html>`;
}

// ===================================================================
// Lesson View Rendering
// ===================================================================
function renderLessonView() {
  const lesson = getLessonById(state.currentLessonId);
  if (!lesson) return;

  const isCompleted = isLessonCompleted(state, lesson.id);

  elements.workspaceStage.innerHTML = `
    <!-- Lesson Header Banner -->
    <div class="lesson-banner">
      <div class="banner-content-wrap">
        <div class="banner-meta">
          <span class="badge-module">${escapeHtml(lesson.module.toUpperCase())}</span>
          <span class="badge-tags">${escapeHtml(lesson.tag)}</span>
          ${isCompleted ? `<span class="badge-completed">✓ ${escapeHtml(t('completedTag', state.lang))}</span>` : ''}
        </div>
        <h2 class="banner-title">${lesson.icon} ${escapeHtml(localize(lesson.title, state.lang))}</h2>
        <p class="banner-summary">${formatProse(localize(lesson.summary, state.lang))}</p>

        <!-- Dedicated Interactive Study Action Deck -->
        <div class="topic-action-deck">
          <button id="btn-topic-lab" class="btn-deck-item btn-deck-lab" title="${escapeHtml(t('topicLabBtn', state.lang))}">
            <span class="deck-icon">🧪</span>
            <div class="deck-text">
              <span class="deck-label">${escapeHtml(t('topicLabBtn', state.lang))}</span>
              <span class="deck-sub">${state.lang === 'uz' ? 'Evolyutsiya Slayderi' : 'Step-by-Step Evolution Slider'}</span>
            </div>
          </button>
          <button id="btn-tag-list" class="btn-deck-item btn-deck-tags" title="${escapeHtml(t('listOfTags', state.lang))}">
            <span class="deck-icon">📋</span>
            <div class="deck-text">
              <span class="deck-label">${escapeHtml(t('listOfTags', state.lang))}</span>
              <span class="deck-sub">${state.lang === 'uz' ? 'Teglar jadvali va namunalar' : 'Tag Cheat Sheet & Examples'}</span>
            </div>
          </button>
          <button id="btn-start-practice" class="btn-deck-item btn-deck-practice" title="${state.lang === 'uz' ? 'Amaliyotni Boshlash' : 'Start Practice'}">
            <span class="deck-icon">💻</span>
            <div class="deck-text">
              <span class="deck-label">${state.lang === 'uz' ? 'Amaliyotni Boshlash' : 'Start Practice'}</span>
              <span class="deck-sub">${state.lang === 'uz' ? 'Tayyor kod bilan mashq' : 'Jump to Live Editor'}</span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Teacher Coaching Playbook (Toggleable) -->
    <div id="teacher-playbook-box" class="teacher-playbook" style="${state.teacherMode ? 'display:block' : 'display:none'}">
      <h4>${escapeHtml(t('teacherTips', state.lang))}</h4>
      <div class="teacher-playbook-grid">
        <div class="teacher-item">
          <strong>💡 Kid Analogy:</strong>
          <span>${formatProse(localize(lesson.teacherGuide.analogy, state.lang))}</span>
        </div>
        <div class="teacher-item">
          <strong>🗣️ Question to Ask Aloud:</strong>
          <span>${formatProse(localize(lesson.teacherGuide.discussionQuestions?.[0], state.lang))}</span>
        </div>
        <div class="teacher-item">
          <strong>⚠️ Watch Out For:</strong>
          <span>${formatProse(localize(lesson.teacherGuide.commonMistakes?.[0], state.lang))}</span>
        </div>
      </div>
    </div>

    <!-- STEP 1: In Human Language (Plain explanation for kids) -->
    ${renderHumanIntro(lesson)}

    <!-- STEP 2: Step-by-Step Anatomy (Only the pieces of code for this theme & their exact visual results) -->
    ${renderAnatomySection(lesson)}

    <!-- HIGH-VISIBILITY MISSION SPOTLIGHT (Directly Above Code Editor) -->
    <div class="mission-spotlight-card">
      <div class="mission-spotlight-header">
        <div class="mission-spotlight-badge">
          <span class="mission-pulse-dot"></span>
          <span class="mission-badge-text">🎯 ${escapeHtml(t('missionTag', state.lang)).toUpperCase()}</span>
        </div>
        <div class="mission-quick-actions">
          <button id="btn-read-mission" class="btn-mission-read" title="${escapeHtml(t('readAloudBtn', state.lang))}">
            🔊 ${escapeHtml(t('readAloudBtn', state.lang))}
          </button>
          <button id="btn-hint" class="btn-mission-hint" title="${escapeHtml(t('hintBtn', state.lang))}">
            ${escapeHtml(t('hintBtn', state.lang))}
          </button>
          <button id="btn-verify-mission" class="btn-mission-verify" title="${escapeHtml(t('checkCodeBtn', state.lang))}">
            ${escapeHtml(t('checkCodeBtn', state.lang))}
          </button>
        </div>
      </div>
      <div class="mission-spotlight-body">
        <div class="mission-spotlight-text">
          ${formatProse(localize(lesson.challenge.mission, state.lang))}
        </div>
      </div>
    </div>

    <!-- Editor & Live Preview Split -->
    <div class="editor-stage-split">
      <!-- Left: Code Studio -->
      <div class="pane-card">
        <div class="pane-header">
          <div class="pane-title">
            <span>💻</span> ${escapeHtml(t('codeEditorTitle', state.lang))}
          </div>
          <div class="pane-tools">
            <button id="btn-reset-code" class="btn-tool" title="${escapeHtml(t('resetCode', state.lang))}">${escapeHtml(t('resetCode', state.lang))}</button>
            <button id="btn-copy-code" class="btn-tool" title="${escapeHtml(t('copyBtn', state.lang))}">${escapeHtml(t('copyBtn', state.lang))}</button>
          </div>
        </div>

        <!-- Quick Tag Insertion Bar -->
        ${lesson.quickTags && lesson.quickTags.length > 0 ? `
          <div class="editor-quick-tags-bar">
            <span class="quick-tags-label">🏷️ ${escapeHtml(t('tagsLabel', state.lang))}</span>
            <div class="quick-tags-chips">
              ${lesson.quickTags.map(tag => `
                <button class="tag-insert-chip" data-insert="${escapeHtml(tag)}" title="${escapeHtml(t('insertTagHint', state.lang))}">${escapeHtml(tag)}</button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Code Editor -->
        <div class="code-editor-wrapper">
          <div id="line-numbers" class="editor-line-numbers">1</div>
          <textarea id="code-textarea" class="code-textarea" spellcheck="false">${escapeHtml(currentCode)}</textarea>
        </div>
      </div>

      <!-- Right: Preview Stage -->
      <div class="pane-card">
        <div class="pane-header">
          <div class="pane-title">
            <span>👁️</span> ${escapeHtml(t('browserPreviewTitle', state.lang))}
          </div>
          <div class="preview-tabs">
            <button id="tab-live" class="prev-tab-btn active">${escapeHtml(t('yourResultTab', state.lang))}</button>
            <button id="tab-target" class="prev-tab-btn">${escapeHtml(t('targetGoalTab', state.lang))}</button>
          </div>
        </div>

        <div id="preview-container" class="preview-wrapper">
          <iframe id="live-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
        </div>
      </div>
    </div>
  `;

  setupLessonListeners(lesson);
  updateLivePreview();
  updateLineNumbers();
}

function renderHumanIntro(lesson) {
  if (!lesson.humanIntro) return '';

  return `
    <div class="human-intro-card">
      <div class="human-intro-item">
        <h4>${escapeHtml(t('humanLanguageHeader', state.lang))}</h4>
        <p>${formatProse(localize(lesson.humanIntro.whatIsIt, state.lang))}</p>
      </div>
      <div class="human-intro-item">
        <h4>${escapeHtml(t('tagSandwichHeader', state.lang))}</h4>
        <p>${formatProse(localize(lesson.humanIntro.whatIsATag, state.lang))}</p>
      </div>
    </div>
  `;
}

function renderTagShowcase(lesson) {
  if (!lesson.tagShowcase || lesson.tagShowcase.length === 0) return '';

  return `
    <div class="tag-showcase-bar">
      <span class="showcase-label">${escapeHtml(t('tagShowcaseHeader', state.lang))}</span>
      <div class="showcase-chips">
        ${lesson.tagShowcase.map(tItem => {
          const meaningStr = formatProse(localize(tItem.meaning, state.lang));
          return `
          <div class="showcase-chip" title="${escapeHtml(localize(tItem.meaning, state.lang))}">
            <code>${escapeHtml(tItem.tag)}</code>
            <span>${meaningStr}</span>
          </div>
        `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderAnatomySection(lesson) {
  if (!lesson.anatomy || lesson.anatomy.length === 0) return '';

  return `
    <div class="step-breakdown-card">
      <div class="step-card-header">
        <div class="step-header-text">
          <span style="font-size: 16px;">🧩</span>
          <h3>${escapeHtml(t('stepBreakdownHeader', state.lang))}</h3>
        </div>
        <span class="step-count-pill">${lesson.anatomy.length} ${escapeHtml(state.lang === 'uz' ? 'qadam' : 'steps')}</span>
      </div>
      <div class="step-grid">
        ${lesson.anatomy.map((step, idx) => `
          <div class="step-item">
            <div class="step-top-row">
              <span class="step-num-badge">${escapeHtml(state.lang === 'uz' ? (idx + 1) + '-Qadam' : 'Step ' + (idx + 1))}</span>
              <span class="step-role-badge">${escapeHtml(localize(step.role, state.lang))}</span>
            </div>
            <div class="step-code-focus">
              <code class="step-code-chip">${escapeHtml(step.part)}</code>
            </div>
            <div class="step-explanation">${formatProse(localize(step.explanation, state.lang))}</div>
            <div class="step-result-box">
              <div class="step-result-heading">
                <span>👉</span>
                <strong>${escapeHtml(t('resultCallout', state.lang))}</strong>
                <span>${formatProse(localize(step.effect, state.lang))}</span>
              </div>
              ${step.visualPreview ? `<div class="step-visual-render">${step.visualPreview}</div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function setupLessonListeners(lesson) {
  const textarea = document.getElementById('code-textarea');

  textarea?.addEventListener('input', () => {
    currentCode = textarea.value;
    updateLivePreview();
    updateLineNumbers();
  });

  // Tab indent
  textarea?.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, start) + '  ' + textarea.value.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + 2;
      currentCode = textarea.value;
      updateLivePreview();
      updateLineNumbers();
    }
  });

  // Quick Tag chips
  const tagChips = document.querySelectorAll('.tag-chip');
  tagChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const tag = chip.getAttribute('data-tag');
      insertTextAtCursor(textarea, tag);
      playSound('click', state.audioEnabled);
    });
  });

  // Start Practice Button: loads starter code, smoothly scrolls to editor, focuses textarea
  document.getElementById('btn-start-practice')?.addEventListener('click', () => {
    const code = localize(lesson.initialCode, state.lang);
    textarea.value = code;
    currentCode = code;
    updateLivePreview();
    updateLineNumbers();
    playSound('click', state.audioEnabled);
    document.querySelector('.code-editor-wrapper')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    textarea.focus();
  });

  // Reset to initial starter code
  document.getElementById('btn-reset-code')?.addEventListener('click', () => {
    const code = localize(lesson.initialCode, state.lang);
    textarea.value = code;
    currentCode = code;
    updateLivePreview();
    updateLineNumbers();
    playSound('click', state.audioEnabled);
  });

  // Copy
  document.getElementById('btn-copy-code')?.addEventListener('click', () => {
    navigator.clipboard?.writeText(textarea.value);
    const btn = document.getElementById('btn-copy-code');
    btn.textContent = t('copiedMsg', state.lang);
    setTimeout(() => { btn.textContent = t('copyBtn', state.lang); }, 1500);
  });

  // List of Tags Button
  // Dedicated Per-Topic Action Deck Listeners
  document.getElementById('btn-topic-lab')?.addEventListener('click', () => {
    openTopicLabModal(lesson);
  });

  document.getElementById('btn-tag-list')?.addEventListener('click', () => {
    openTagListModal(lesson);
  });

  document.getElementById('btn-start-practice')?.addEventListener('click', () => {
    playSound('click', state.audioEnabled);
    const missionCard = document.querySelector('.mission-spotlight-card');
    const editor = document.getElementById('code-input');
    if (missionCard) {
      missionCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (editor) {
      editor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setTimeout(() => {
      editor?.focus();
    }, 300);
  });


  // Preview Tabs
  setupPreviewTabs(lesson);

  // Hint
  document.getElementById('btn-hint')?.addEventListener('click', () => {
    playSound('click', state.audioEnabled);
    const hintText = localize(lesson.challenge.hint, state.lang);
    alert(`💡 HINT / MASLAHAT:\n\n${hintText}`);
  });

  // Check code
  document.getElementById('btn-verify-mission')?.addEventListener('click', () => {
    handleChallengeVerification(lesson);
  });

  // Quick Tag Insert Chips (1-click insert directly at cursor)
  const insertChips = document.querySelectorAll('.tag-insert-chip');
  insertChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const tag = chip.getAttribute('data-insert');
      insertTextAtCursor(textarea, tag);
      playSound('click', state.audioEnabled);
    });
  });

  // Read Aloud / Voice Narrator
  const btnRead = document.getElementById('btn-read-mission');
  btnRead?.addEventListener('click', () => {
    playSound('click', state.audioEnabled);
    if (isSpeaking()) {
      stopSpeaking();
      btnRead.classList.remove('speaking');
      btnRead.textContent = `🔊 ${t('readAloudBtn', state.lang)}`;
    } else {
      btnRead.classList.add('speaking');
      btnRead.textContent = `⏹️ ${t('stopSpeechBtn', state.lang)}`;
      speakText(localize(lesson.challenge.mission, state.lang), state.lang, () => {
        btnRead.classList.remove('speaking');
        btnRead.textContent = `🔊 ${t('readAloudBtn', state.lang)}`;
      });
    }
  });
}

function insertTextAtCursor(textarea, text) {
  if (!textarea) return;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  textarea.value = textarea.value.substring(0, start) + text + textarea.value.substring(end);
  textarea.selectionStart = textarea.selectionEnd = start + text.length;
  textarea.focus();
  currentCode = textarea.value;
  updateLivePreview();
  updateLineNumbers();
}

function updateLineNumbers() {
  const textarea = document.getElementById('code-textarea');
  const lineNumbers = document.getElementById('line-numbers');
  if (!textarea || !lineNumbers) return;

  const lines = (textarea.value || '').split('\n').length;
  let numbersHtml = '';
  for (let i = 1; i <= Math.max(lines, 1); i++) {
    numbersHtml += `${i}<br>`;
  }
  lineNumbers.innerHTML = numbersHtml;
}

function updateLivePreview() {
  const iframe = document.getElementById('live-iframe');
  if (!iframe) return;

  iframe.srcdoc = wrapForPreview(currentCode);
}

function setupPreviewTabs(lesson) {
  const tabLive = document.getElementById('tab-live');
  const tabTarget = document.getElementById('tab-target');
  const tabSide = document.getElementById('tab-side');
  const previewContainer = document.getElementById('preview-container');

  function resetTabs() {
    [tabLive, tabTarget, tabSide].forEach(t => t?.classList.remove('active'));
  }

  tabLive?.addEventListener('click', () => {
    resetTabs();
    tabLive.classList.add('active');
    activePreviewTab = 'live';
    previewContainer.innerHTML = `<iframe id="live-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>`;
    updateLivePreview();
    playSound('click', state.audioEnabled);
  });

  tabTarget?.addEventListener('click', () => {
    resetTabs();
    tabTarget.classList.add('active');
    activePreviewTab = 'target';
    previewContainer.innerHTML = `
      <div class="target-view-container">
        <div class="target-explanation-box">
          <strong>${escapeHtml(t('targetExplanationTitle', state.lang))}</strong>
          <p style="margin: 4px 0 0; white-space: pre-line;">${formatProse(localize(lesson.targetDescription, state.lang))}</p>
        </div>
        <iframe id="target-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
      </div>
    `;
    const targetIframe = document.getElementById('target-iframe');
    if (targetIframe) {
      targetIframe.srcdoc = wrapForPreview(lesson.targetCode);
    }
    playSound('click', state.audioEnabled);
  });

  tabSide?.addEventListener('click', () => {
    resetTabs();
    tabSide.classList.add('active');
    activePreviewTab = 'side';
    previewContainer.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; width: 100%; height: 100%;">
        <div style="border-right: 1px solid var(--border-color); display: flex; flex-direction: column;">
          <div style="background: var(--bg-surface); padding: 4px 10px; font-size: 10px; font-weight: 800; color: var(--text-muted);">${t('yourResultTab', state.lang).toUpperCase()}</div>
          <iframe id="live-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
        </div>
        <div style="display: flex; flex-direction: column;">
          <div style="background: var(--bg-surface); padding: 4px 10px; font-size: 10px; font-weight: 800; color: var(--text-muted);">${t('targetGoalTab', state.lang).toUpperCase()}</div>
          <iframe id="target-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
        </div>
      </div>
    `;
    updateLivePreview();
    const targetIframe = document.getElementById('target-iframe');
    if (targetIframe) {
      targetIframe.srcdoc = wrapForPreview(lesson.targetCode);
    }
    playSound('click', state.audioEnabled);
  });
}

function openTagListModal(lesson) {
  if (!lesson.listOfTags || lesson.listOfTags.length === 0) return;
  playSound('click', state.audioEnabled);

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card tag-list-modal-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">
        <h3 style="font-size: 16px; font-weight: 800; color: #ffffff; display: flex; align-items: center; gap: 8px;">
          <span>📋</span> ${escapeHtml(t('tagListModalTitle', state.lang))}: ${escapeHtml(localize(lesson.title, state.lang))}
        </h3>
        <button id="btn-close-tag-modal" style="font-size: 16px; background: transparent; border: none; color: var(--text-muted); cursor: pointer; padding: 4px 8px;">✕</button>
      </div>

      <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px; text-align: left;">
        ${formatProse(t('tagListDesc', state.lang))}
      </p>

      <div class="tag-list-table-wrapper">
        <table class="tag-list-table">
          <thead>
            <tr>
              <th style="width: 32%;">${escapeHtml(t('colCode', state.lang))}</th>
              <th style="width: 25%;">${escapeHtml(t('colName', state.lang))}</th>
              <th>${escapeHtml(t('colMeaning', state.lang))}</th>
            </tr>
          </thead>
          <tbody>
            ${lesson.listOfTags.map(tg => `
              <tr>
                <td>
                  <code class="tag-code-pill" title="Click to copy" data-code="${escapeHtml(tg.code)}">${escapeHtml(tg.code)}</code>
                </td>
                <td style="font-weight: 700; color: var(--accent-amber);">${formatProse(localize(tg.name, state.lang))}</td>
                <td style="color: var(--text-main); font-size: 12px;">${formatProse(localize(tg.description, state.lang))}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div style="margin-top: 14px; display: flex; justify-content: flex-end;">
        <button id="btn-close-tag-modal-bottom" class="btn-modal btn-modal-primary">${escapeHtml(t('doneBtn', state.lang))}</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelectorAll('.tag-code-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const code = pill.getAttribute('data-code');
      navigator.clipboard?.writeText(code);
      const originalText = pill.textContent;
      pill.textContent = t('copiedMsg', state.lang);
      setTimeout(() => { pill.textContent = originalText; }, 1200);
      playSound('click', state.audioEnabled);
    });
  });

  const close = () => modal.remove();
  modal.querySelector('#btn-close-tag-modal')?.addEventListener('click', close);
  modal.querySelector('#btn-close-tag-modal-bottom')?.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });
}

function openTopicLabModal(lesson) {
  playSound('click', state.audioEnabled);

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card topic-lab-modal-card">
      <div class="topic-lab-modal-header">
        <h3 class="topic-lab-modal-heading">
          <span>🧪</span> ${escapeHtml(t('topicLabModalTitle', state.lang))}: ${escapeHtml(localize(lesson.title, state.lang))}
        </h3>
        <button id="btn-close-topic-lab-modal" class="btn-close-modal" title="Close">✕</button>
      </div>

      <div class="topic-lab-modal-body" id="topic-lab-mount"></div>

      <div class="topic-lab-modal-footer">
        <button id="btn-close-topic-lab-bottom" class="btn-modal btn-modal-primary">
          🚀 ${escapeHtml(t('doneBtn', state.lang))}
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const mountPoint = modal.querySelector('#topic-lab-mount');
  if (mountPoint) {
    renderTopicLab(mountPoint, lesson, state.lang);
  }

  const close = () => modal.remove();
  modal.querySelector('#btn-close-topic-lab-modal')?.addEventListener('click', close);
  modal.querySelector('#btn-close-topic-lab-bottom')?.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });
}

function handleChallengeVerification(lesson) {
  const result = validateChallenge(currentCode, lesson.challenge.rules);

  if (result.passed) {
    playSound('success', state.audioEnabled);
    triggerConfetti(elements.confettiCanvas);

    const previousCompleted = isLessonCompleted(state, lesson.id);
    state = completeLesson(state, lesson.id, 3);
    saveStateToStorage(state);
    applyStateToUI();

    showCelebrationModal(lesson, previousCompleted);
  } else {
    playSound('tryAgain', state.audioEnabled);
    showTryAgainModal(result.feedback);
  }
}

function showCelebrationModal(lesson, wasAlreadyCompleted) {
  const currentIdx = LESSONS.findIndex(l => l.id === lesson.id);
  const nextLesson = LESSONS[currentIdx + 1];

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card">
      <div class="modal-icon">🎉</div>
      <h3 class="modal-title">${t('modalCompleteTitle', state.lang)}</h3>
      <div class="modal-body">
        <p>${state.lang === 'uz' ? `Ajoyib! Siz <strong>${localize(lesson.title, state.lang)}</strong> mavzusini muvaffaqiyatli o'zlashtirdingiz!` : `Awesome! You mastered <strong>${localize(lesson.title, state.lang)}</strong>!`}</p>
        <p style="margin-top: 8px; font-size: 15px; color: var(--accent-amber); font-weight: 800;">
          ${wasAlreadyCompleted ? (state.lang === 'uz' ? '⭐ Vazifa qayta tasdiqlandi!' : '⭐ Mission verified again!') : t('starsEarnedMsg', state.lang)}
        </p>
      </div>
      <div class="modal-actions">
        <button id="btn-modal-close" class="btn-modal btn-modal-secondary">${t('stayHereBtn', state.lang)}</button>
        ${nextLesson ? `<button id="btn-modal-next" class="btn-modal btn-modal-primary">${t('nextLessonBtn', state.lang)}</button>` : ''}
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector('#btn-modal-close')?.addEventListener('click', () => modal.remove());
  modal.querySelector('#btn-modal-next')?.addEventListener('click', () => {
    modal.remove();
    if (nextLesson) selectLesson(nextLesson.id);
  });
}

function showTryAgainModal(feedback) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card">
      <div class="modal-icon">🧐</div>
      <h3 class="modal-title" style="color: var(--accent-red);">${t('tryAgainTitle', state.lang)}</h3>
      <div class="modal-body">
        <p>${t('tryAgainBody', state.lang)}</p>
        <div style="background: rgba(248, 113, 113, 0.15); border-radius: 8px; padding: 10px; margin-top: 8px; color: var(--accent-red); text-align: left; font-weight: bold; font-size: 12px;">
          ${feedback.map(f => `<div>• ${f}</div>`).join('')}
        </div>
      </div>
      <div class="modal-actions">
        <button id="btn-modal-retry" class="btn-modal btn-modal-primary">${t('retryBtn', state.lang)}</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.querySelector('#btn-modal-retry')?.addEventListener('click', () => modal.remove());
}

// ===================================================================
// Interactive Visual Labs Hub (Box Model, Flexbox, Color, Grid)
// ===================================================================
function renderLabsView() {
  stopSpeaking();
  elements.workspaceStage.innerHTML = `
    <div class="labs-view-wrapper">
      <div class="lesson-banner">
        <div>
          <div class="banner-meta">
            <span class="badge-module">INTERACTIVE PLAYGROUNDS</span>
          </div>
          <h2 class="banner-title">${escapeHtml(t('labsBtn', state.lang))}</h2>
          <p class="banner-summary">
            ${state.lang === 'uz'
              ? 'Tugmalar va slayderlarni surib, CSS qanday ishlashini jonli tomosha qiling va tayyor kodni bitta bosishda nusxalang!'
              : 'Slide controls, click buttons, and watch CSS physics unfold in real-time! Copy generated code with one click.'}
          </p>
        </div>
      </div>

      <!-- Lab Switcher Navigation -->
      <div class="labs-nav-bar">
        <button class="labs-tab-btn ${currentLab === 'box' ? 'active' : ''}" data-lab="box">
          ${escapeHtml(t('labBoxModelTitle', state.lang))}
        </button>
        <button class="labs-tab-btn ${currentLab === 'flexbox' ? 'active' : ''}" data-lab="flexbox">
          ${escapeHtml(t('labFlexboxTitle', state.lang))}
        </button>
        <button class="labs-tab-btn ${currentLab === 'color' ? 'active' : ''}" data-lab="color">
          ${escapeHtml(t('labColorTitle', state.lang))}
        </button>
        <button class="labs-tab-btn ${currentLab === 'grid' ? 'active' : ''}" data-lab="grid">
          ${escapeHtml(t('labGridTitle', state.lang))}
        </button>
      </div>

      <!-- Active Lab Container -->
      <div id="active-lab-stage"></div>
    </div>
  `;

  const stage = document.getElementById('active-lab-stage');
  function loadActiveLab() {
    if (!stage) return;
    if (currentLab === 'box') renderBoxModelLab(stage);
    else if (currentLab === 'flexbox') renderFlexboxLab(stage);
    else if (currentLab === 'color') renderColorLab(stage);
    else if (currentLab === 'grid') renderGridLab(stage);
  }

  const tabBtns = elements.workspaceStage.querySelectorAll('.labs-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLab = btn.getAttribute('data-lab');
      playSound('click', state.audioEnabled);
      loadActiveLab();
    });
  });

  loadActiveLab();
}

// ===================================================================
// Free Sandbox Scratchpad View
// ===================================================================
function renderSandboxView() {
  elements.workspaceStage.innerHTML = `
    <div class="lesson-banner">
      <div>
        <div class="banner-meta">
          <span class="badge-module">FREE PLAY</span>
        </div>
        <h2 class="banner-title">${t('freeSandbox', state.lang)}</h2>
        <p class="banner-summary">${state.lang === 'uz' ? 'Xohlagan narsangizni quring! Ishingiz tugagach haqiqiy .html fayl sifatida yuklab oling.' : 'Build whatever you want! Download your real webpage when you\'re done.'}</p>
      </div>
      <div>
        <button id="btn-download-html" class="btn-header" style="background: var(--accent-green); color: #000; border: none; font-weight: 800;">
          💾 Download .html
        </button>
      </div>
    </div>

    <!-- Template Pills -->
    <div style="background: var(--bg-surface); border-bottom: 1px solid var(--border-color); padding: 8px 24px; display: flex; align-items: center; gap: 8px;">
      <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-muted);">${state.lang === 'uz' ? 'Andozalar:' : 'Templates:'}</span>
      ${TEMPLATES.map(t => `<button class="tag-chip btn-tpl" data-tpl="${t.id}">${t.name}</button>`).join('')}
    </div>

    <!-- Sandbox Split View -->
    <div class="editor-stage-split">
      <div class="pane-card">
        <div class="pane-header">
          <div class="pane-title"><span>💻</span> HTML &amp; CSS Code</div>
          <div class="pane-tools">
            <button id="btn-sb-copy" class="btn-tool">${t('copyBtn', state.lang)}</button>
          </div>
        </div>
        <div class="code-editor-wrapper">
          <div id="sb-line-numbers" class="editor-line-numbers">1</div>
          <textarea id="sb-textarea" class="code-textarea" spellcheck="false">${state.customSandboxCode}</textarea>
        </div>
      </div>

      <div class="pane-card">
        <div class="pane-header">
          <div class="pane-title"><span>👁️</span> ${t('browserPreviewTitle', state.lang)}</div>
        </div>
        <div class="preview-wrapper">
          <iframe id="sb-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
        </div>
      </div>
    </div>
  `;

  const textarea = document.getElementById('sb-textarea');
  const iframe = document.getElementById('sb-iframe');
  const lineNumbers = document.getElementById('sb-line-numbers');

  function updateSbPreview() {
    iframe.srcdoc = wrapForPreview(textarea.value);

    const lines = textarea.value.split('\n').length;
    let numHtml = '';
    for (let i = 1; i <= Math.max(lines, 1); i++) numHtml += `${i}<br>`;
    lineNumbers.innerHTML = numHtml;

    state.customSandboxCode = textarea.value;
    saveStateToStorage(state);
  }

  textarea.addEventListener('input', updateSbPreview);
  textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, start) + '  ' + textarea.value.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + 2;
      updateSbPreview();
    }
  });

  const tplBtns = document.querySelectorAll('.btn-tpl');
  tplBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tplId = btn.getAttribute('data-tpl');
      const tpl = TEMPLATES.find(t => t.id === tplId);
      if (tpl && confirm(`Load the ${tpl.name} template?`)) {
        textarea.value = tpl.code;
        updateSbPreview();
        playSound('click', state.audioEnabled);
      }
    });
  });

  document.getElementById('btn-download-html')?.addEventListener('click', () => {
    downloadHtmlFile('my-creation.html', wrapForPreview(textarea.value));
    playSound('badge', state.audioEnabled);
  });

  document.getElementById('btn-sb-copy')?.addEventListener('click', () => {
    navigator.clipboard?.writeText(textarea.value);
    const btn = document.getElementById('btn-sb-copy');
    btn.textContent = t('copiedMsg', state.lang);
    setTimeout(() => { btn.textContent = t('copyBtn', state.lang); }, 1500);
  });

  updateSbPreview();
}

// Auto-boot on load
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initApp);
}


  // Boot on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
