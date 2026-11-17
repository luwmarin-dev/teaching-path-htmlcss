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

export const MODULES = [
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

export const LESSONS = [
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
    targetDescription: {
      en: 'A complete, well-formed HTML document:\n• Browser tab title set to "My Secret Base"\n• <h1> title inside <body>: "🚀 Welcome to Space Base!"\n• Two paragraphs, with "Ready for Launch" bolded inside the body.',
      uz: 'To\'liq va to\'g\'ri shakllangan HTML hujjati:\n• Brauzer yorlig\'i sarlavhasi "My Secret Base"\n• <body> ichida <h1> sarlavhasi: "🚀 Welcome to Space Base!"\n• Ikkita xatboshi, tana ichida "Ready for Launch" qalinlashtirilgan.'
    },
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
    targetDescription: {
      en: 'A handsome pet card with a puppy photo placed from scratch and resized to width="260".',
      uz: 'Noldan joylashtirilgan va kengligi width="260" qilib belgilangan chiroyli kuchukcha fotosurati kartochkasi.'
    },
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
    targetDescription: {
      en: 'A solid card with a bright mint cyan (4px solid #2dd4bf) border wall neatly wrapping the title and text.',
      uz: 'Sarlavha va matnni chiroyli o\'rab turuvchi yorqin feruza (4px solid #2dd4bf) devor hoshiyasiga ega karta.'
    },
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
    targetDescription: {
      en: 'A player profile containing two purple badge pills ("Level: 99" and "Rank: Master") both sharing the exact same `.badge` class styling.',
      uz: 'Ikkalasi ham bir xil `.badge` klass uslubiga ega ikkita binafsharang nishonli ("Level: 99" va "Rank: Master") o\'yinchi profili.'
    },
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
    targetDescription: {
      en: 'A spacious navy card with cozy 24px padding giving the text room to breathe inside, and generous 30px margin pushing it away from the edges.',
      uz: 'Matnga ichkaridan nafas olishi uchun 24px padding va tashqi chetlardan itarib turish uchun 30px margin berilgan keng to\'q ko\'k kartochka.'
    },
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

export function getLessonById(id) {
  return LESSONS.find(l => l.id === id) || LESSONS[0];
}

export function getLessonsByModule(moduleId) {
  return LESSONS.filter(l => l.module === moduleId);
}
