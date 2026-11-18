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
      en: 'Assemble the Cyber Pet Robot ID card: combine bold strengths, italic agility, underlined armor, and highlight its favorite golden pizza power boost!',
      uz: "Kiber Robot-Pet viza kartochkasini yig'ing: qalin kuch, yotiq tezlik, chizilgan zirh va uning sevimli tilla pitsasini yoritib bering!"
    },
    initialCode: {
      en: `<!-- Step 1: We set up the robot profile card -->
<div class="pet-card" style="padding: 20px; background: #141722; border-radius: 12px; color: white;">
  <h2>🤖 Cyber Pet Robot</h2>
  <p>Our robot is <b>super strong</b>, <i>lightning fast</i>, and <u>waterproof</u>!</p>

  <!-- Step 2: Add its favorite power food using <mark>golden pizza</mark> -->
  <p>Favorite power snack: </p>
</div>`,
      uz: `<!-- 1-Qadam: Robot profil kartochkasining asosiy qismini quramiz -->
<div class="pet-card" style="padding: 20px; background: #141722; border-radius: 12px; color: white;">
  <h2>🤖 Cyber Pet Robot</h2>
  <p>Bizning robotimiz <b>super strong</b>, <i>lightning fast</i> va <u>waterproof</u>!</p>

  <!-- 2-Qadam: Sevimli quvvat ovqatini <mark>golden pizza</mark> tegi bilan qo'shing -->
  <p>Favorite power snack: </p>
</div>`
    },
    targetCode: `<div class="pet-card" style="padding: 20px; background: #141722; border-radius: 12px; color: white;">
  <h2>🤖 Cyber Pet Robot</h2>
  <p>Our robot is <b>super strong</b>, <i>lightning fast</i>, and <u>waterproof</u>!</p>
  <p>Favorite power snack: <mark>golden pizza</mark>!</p>
</div>`,
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
    initialCode: {
      en: `<!DOCTYPE html>
<html>
  <head>
    <title>My Secret Base</title>
  </head>
  <body>
    <h1>🚀 Welcome to Space Base!</h1>
    <p>All astronauts report to the cockpit.</p>

    <!-- Step 1: Add a new paragraph below: <p>Mission Status: <b>Ready for Launch</b></p> -->

  </body>
</html>`,
      uz: `<!DOCTYPE html>
<html>
  <head>
    <title>My Secret Base</title>
  </head>
  <body>
    <h1>🚀 Welcome to Space Base!</h1>
    <p>All astronauts report to the cockpit.</p>

    <!-- 1-Qadam: Quyiga yangi xatboshi qo'shing: <p>Mission Status: <b>Ready for Launch</b></p> -->

  </body>
</html>`
    },
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
    tag: '<table>, <tr>, <th>, <td>, colspan',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, a **Table** is a high-tech data grid! Inside real Single Page Applications (SPAs), tables power esports leaderboards, flight schedules, and financial analytics.',
        uz: 'Oddiy tilda aytganda, **Jadval** — bu yuqori texnologiyali ma\'lumotlar panjarasi! Haqiqiy bitta sahifali ilovalarda (SPA) jadvallar kibersport reytinglari, parvoz jadvallari va moliyaviy hisobotlarni tuzadi.'
      },
      whatIsATag: {
        en: 'HTML tables structure complex web applications floor-by-floor:\n1. `<table>` is the outer grid container.\n2. `<tr>` (Table Row) is each horizontal row.\n3. `<th>` (Table Header) is the bold roof sign labeling each column.\n4. `<td>` (Table Data) is each cell holding facts, player names, and medals!\n5. `colspan="3"` merges 3 cells into one wide summary banner!',
        uz: 'HTML jadvallari veb-ilovalarni qavatma-qavat quradi:\n1. `<table>` — jadvalning tashqi ramkasi.\n2. `<tr>` (Table Row) — har bir gorizontal qator.\n3. `<th>` (Table Header) — ustun nomini bildiruvchi qalin sarlavha.\n4. `<td>` (Table Data) — ma\'lumot, o\'yinchi nomi va medallar saqlanuvchi xonalar!\n5. `colspan="3"` — 3 ta katakni bitta keng umumiy hisobot qatoriga birlashtiradi!'
      }
    },
    summary: {
      en: 'Construct a full Esports Championship SPA leaderboard completely from scratch: write the table container, header row with <th> cells, multiple player data rows with <td> cells, and a summary row with colspan.',
      uz: 'Kibersport SPA turnir jadvalini noldan o\'zingiz quring: jadval ramkasi, <th> li sarlavha qatori, <td> li 3 ta o\'yinchi qatorlari va colspan li hisobot qatorini bosqichma-bosqich o\'z qo\'lingiz bilan yozing.'
    },
    story: {
      en: 'The tournament arena needs its entire standings table built from the ground up: open the table, label the columns with <th>, record all 3 championship player rows with <td>, and crown the grand total with colspan="3"!',
      uz: 'Turnir maydoniga jadvalni noldan boshlab qurish kerak: jadvalni oching, <th> bilan ustunlarni nomlang, <td> bilan 3 ta o\'yinchi qatorlarini kiriting va colspan="3" bilan umumiy hisobotni chiqaring!'
    },
    initialCode: {
      en: `<style>
  * { box-sizing: border-box; }
  .spa-esports {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 20px;
    color: #e2e8f0;
    font-family: system-ui, sans-serif;
  }
  .spa-banner {
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border: 1px solid #4338ca;
    border-radius: 12px;
    padding: 16px 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .spa-banner h2 { margin: 0; color: #a5b4fc; font-size: 18px; }
  .spa-banner span { background: #38bdf8; color: #0b0f19; font-weight: bold; font-size: 11px; padding: 4px 10px; border-radius: 6px; }

  .stats-row {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
  }
  .stat-card {
    flex: 1;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 10px;
    padding: 12px;
    text-align: center;
  }
  .stat-card b { display: block; font-size: 16px; color: #38bdf8; }
  .stat-card span { font-size: 11px; color: #94a3b8; }

  table {
    width: 100%;
    border-collapse: collapse;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    overflow: hidden;
  }
  th {
    background: #1e2438;
    color: #38bdf8;
    padding: 14px;
    text-align: left;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  td {
    padding: 12px 14px;
    border-top: 1px solid #1f2937;
    font-size: 13px;
  }
  .champion {
    background: rgba(234, 179, 8, 0.18);
    font-weight: bold;
  }
  .total-row {
    background: #1e293b;
    font-weight: bold;
    color: #38bdf8;
  }
  .badge {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: bold;
  }
  .gold { background: #eab308; color: #000; }
  .silver { background: #94a3b8; color: #000; }
  .bronze { background: #f97316; color: #fff; }
</style>

<div class="spa-esports">
  <div class="spa-banner">
    <div>
      <h2>🏆 Global Cyber Championship 2099</h2>
      <p style="margin: 4px 0 0 0; font-size: 12px; color: #cbd5e1;">Live Arena Standings • Prize Pool: $100,000</p>
    </div>
    <span>🔴 LIVE ARENA</span>
  </div>

  <div class="stats-row">
    <div class="stat-card"><b>32</b><span>Pro Teams</span></div>
    <div class="stat-card"><b>128</b><span>Matches Played</span></div>
    <div class="stat-card"><b>1.4M</b><span>Global Viewers</span></div>
  </div>

  <table>
    <!-- Step 1: Open the header row using <tr> and add 4 <th> column titles: -->
    <!-- <th>Rank</th> <th>Player</th> <th>Badge</th> <th>Score</th> -->

    <!-- Step 2: Open 1st player row using <tr class="champion"> with 4 <td> cells: -->
    <!-- <td>🥇 1st</td> <td>ApexDragon</td> <td><span class="badge gold">CHAMPION</span></td> <td>15,400</td> -->

    <!-- Step 3: Open 2nd player row using <tr> with 4 <td> cells: -->
    <!-- <td>🥈 2nd</td> <td>PixelCat</td> <td><span class="badge silver">MASTER</span></td> <td>12,850</td> -->

    <!-- Step 4: Open 3rd player row using <tr> with 4 <td> cells: -->
    <!-- <td>🥉 3rd</td> <td>CyberBot</td> <td><span class="badge bronze">PRO</span></td> <td>10,200</td> -->

    <!-- Step 5: Open tournament total row using <tr class="total-row"> with colspan="3": -->
    <!-- <td colspan="3">Arena Total Score</td> <td>38,450</td> -->
  </table>
</div>`,
      uz: `<style>
  * { box-sizing: border-box; }
  .spa-esports {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 20px;
    color: #e2e8f0;
    font-family: system-ui, sans-serif;
  }
  .spa-banner {
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border: 1px solid #4338ca;
    border-radius: 12px;
    padding: 16px 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .spa-banner h2 { margin: 0; color: #a5b4fc; font-size: 18px; }
  .spa-banner span { background: #38bdf8; color: #0b0f19; font-weight: bold; font-size: 11px; padding: 4px 10px; border-radius: 6px; }

  .stats-row {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
  }
  .stat-card {
    flex: 1;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 10px;
    padding: 12px;
    text-align: center;
  }
  .stat-card b { display: block; font-size: 16px; color: #38bdf8; }
  .stat-card span { font-size: 11px; color: #94a3b8; }

  table {
    width: 100%;
    border-collapse: collapse;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    overflow: hidden;
  }
  th {
    background: #1e2438;
    color: #38bdf8;
    padding: 14px;
    text-align: left;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  td {
    padding: 12px 14px;
    border-top: 1px solid #1f2937;
    font-size: 13px;
  }
  .champion {
    background: rgba(234, 179, 8, 0.18);
    font-weight: bold;
  }
  .total-row {
    background: #1e293b;
    font-weight: bold;
    color: #38bdf8;
  }
  .badge {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: bold;
  }
  .gold { background: #eab308; color: #000; }
  .silver { background: #94a3b8; color: #000; }
  .bronze { background: #f97316; color: #fff; }
</style>

<div class="spa-esports">
  <div class="spa-banner">
    <div>
      <h2>🏆 Global Cyber Championship 2099</h2>
      <p style="margin: 4px 0 0 0; font-size: 12px; color: #cbd5e1;">Live Arena Standings • Prize Pool: $100,000</p>
    </div>
    <span>🔴 LIVE ARENA</span>
  </div>

  <div class="stats-row">
    <div class="stat-card"><b>32</b><span>Pro Teams</span></div>
    <div class="stat-card"><b>128</b><span>Matches Played</span></div>
    <div class="stat-card"><b>1.4M</b><span>Global Viewers</span></div>
  </div>

  <table>
    <!-- 1-QADAM: <tr> bilan sarlavha qatorini oching va 4 ta <th> ustun nomlarini yozing: -->
    <!-- <th>O'rin</th> <th>O'yinchi</th> <th>Nishon</th> <th>Ochko</th> -->

    <!-- 2-QADAM: <tr class="champion"> bilan 1-o'rin Chempion qatorini oching va 4 ta <td> yozing: -->
    <!-- <td>🥇 1st</td> <td>ApexDragon</td> <td><span class="badge gold">CHAMPION</span></td> <td>15,400</td> -->

    <!-- 3-QADAM: Yangi <tr> ochib, 2-o'rin uchun 4 ta <td> yozing: -->
    <!-- <td>🥈 2nd</td> <td>PixelCat</td> <td><span class="badge silver">MASTER</span></td> <td>12,850</td> -->

    <!-- 4-QADAM: Yangi <tr> ochib, 3-o'rin uchun 4 ta <td> yozing: -->
    <!-- <td>🥉 3rd</td> <td>CyberBot</td> <td><span class="badge bronze">PRO</span></td> <td>10,200</td> -->

    <!-- 5-QADAM: <tr class="total-row"> ochib, colspan="3" bilan hisobot qatorini yozing: -->
    <!-- <td colspan="3">Arena Jami Ochko</td> <td>38,450</td> -->
  </table>
</div>`
    },
    targetCode: {
      en: `<style>
  * { box-sizing: border-box; }
  .spa-esports {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 20px;
    color: #e2e8f0;
    font-family: system-ui, sans-serif;
  }
  .spa-banner {
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border: 1px solid #4338ca;
    border-radius: 12px;
    padding: 16px 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .spa-banner h2 { margin: 0; color: #a5b4fc; font-size: 18px; }
  .spa-banner span { background: #38bdf8; color: #0b0f19; font-weight: bold; font-size: 11px; padding: 4px 10px; border-radius: 6px; }

  .stats-row {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
  }
  .stat-card {
    flex: 1;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 10px;
    padding: 12px;
    text-align: center;
  }
  .stat-card b { display: block; font-size: 16px; color: #38bdf8; }
  .stat-card span { font-size: 11px; color: #94a3b8; }

  table {
    width: 100%;
    border-collapse: collapse;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    overflow: hidden;
  }
  th {
    background: #1e2438;
    color: #38bdf8;
    padding: 14px;
    text-align: left;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  td {
    padding: 12px 14px;
    border-top: 1px solid #1f2937;
    font-size: 13px;
  }
  .champion {
    background: rgba(234, 179, 8, 0.18);
    font-weight: bold;
  }
  .total-row {
    background: #1e293b;
    font-weight: bold;
    color: #38bdf8;
  }
  .badge {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: bold;
  }
  .gold { background: #eab308; color: #000; }
  .silver { background: #94a3b8; color: #000; }
  .bronze { background: #f97316; color: #fff; }
</style>

<div class="spa-esports">
  <div class="spa-banner">
    <div>
      <h2>🏆 Global Cyber Championship 2099</h2>
      <p style="margin: 4px 0 0 0; font-size: 12px; color: #cbd5e1;">Live Arena Standings • Prize Pool: $100,000</p>
    </div>
    <span>🔴 LIVE ARENA</span>
  </div>

  <div class="stats-row">
    <div class="stat-card"><b>32</b><span>Pro Teams</span></div>
    <div class="stat-card"><b>128</b><span>Matches Played</span></div>
    <div class="stat-card"><b>1.4M</b><span>Global Viewers</span></div>
  </div>

  <table>
    <tr>
      <th>Rank</th>
      <th>Player</th>
      <th>Badge</th>
      <th>Score</th>
    </tr>

    <tr class="champion">
      <td>🥇 1st</td>
      <td>ApexDragon</td>
      <td><span class="badge gold">CHAMPION</span></td>
      <td>15,400</td>
    </tr>

    <tr>
      <td>🥈 2nd</td>
      <td>PixelCat</td>
      <td><span class="badge silver">MASTER</span></td>
      <td>12,850</td>
    </tr>

    <tr>
      <td>🥉 3rd</td>
      <td>CyberBot</td>
      <td><span class="badge bronze">PRO</span></td>
      <td>10,200</td>
    </tr>

    <tr class="total-row">
      <td colspan="3">Arena Total Score</td>
      <td>38,450</td>
    </tr>
  </table>
</div>`,
      uz: `<style>
  * { box-sizing: border-box; }
  .spa-esports {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 20px;
    color: #e2e8f0;
    font-family: system-ui, sans-serif;
  }
  .spa-banner {
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border: 1px solid #4338ca;
    border-radius: 12px;
    padding: 16px 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .spa-banner h2 { margin: 0; color: #a5b4fc; font-size: 18px; }
  .spa-banner span { background: #38bdf8; color: #0b0f19; font-weight: bold; font-size: 11px; padding: 4px 10px; border-radius: 6px; }

  .stats-row {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
  }
  .stat-card {
    flex: 1;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 10px;
    padding: 12px;
    text-align: center;
  }
  .stat-card b { display: block; font-size: 16px; color: #38bdf8; }
  .stat-card span { font-size: 11px; color: #94a3b8; }

  table {
    width: 100%;
    border-collapse: collapse;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    overflow: hidden;
  }
  th {
    background: #1e2438;
    color: #38bdf8;
    padding: 14px;
    text-align: left;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  td {
    padding: 12px 14px;
    border-top: 1px solid #1f2937;
    font-size: 13px;
  }
  .champion {
    background: rgba(234, 179, 8, 0.18);
    font-weight: bold;
  }
  .total-row {
    background: #1e293b;
    font-weight: bold;
    color: #38bdf8;
  }
  .badge {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: bold;
  }
  .gold { background: #eab308; color: #000; }
  .silver { background: #94a3b8; color: #000; }
  .bronze { background: #f97316; color: #fff; }
</style>

<div class="spa-esports">
  <div class="spa-banner">
    <div>
      <h2>🏆 Global Cyber Championship 2099</h2>
      <p style="margin: 4px 0 0 0; font-size: 12px; color: #cbd5e1;">Live Arena Standings • Prize Pool: $100,000</p>
    </div>
    <span>🔴 LIVE ARENA</span>
  </div>

  <div class="stats-row">
    <div class="stat-card"><b>32</b><span>Pro Teams</span></div>
    <div class="stat-card"><b>128</b><span>Matches Played</span></div>
    <div class="stat-card"><b>1.4M</b><span>Global Viewers</span></div>
  </div>

  <table>
    <tr>
      <th>O'rin</th>
      <th>O'yinchi</th>
      <th>Nishon</th>
      <th>Ochko</th>
    </tr>

    <tr class="champion">
      <td>🥇 1st</td>
      <td>ApexDragon</td>
      <td><span class="badge gold">CHAMPION</span></td>
      <td>15,400</td>
    </tr>

    <tr>
      <td>🥈 2nd</td>
      <td>PixelCat</td>
      <td><span class="badge silver">MASTER</span></td>
      <td>12,850</td>
    </tr>

    <tr>
      <td>🥉 3rd</td>
      <td>CyberBot</td>
      <td><span class="badge bronze">PRO</span></td>
      <td>10,200</td>
    </tr>

    <tr class="total-row">
      <td colspan="3">Arena Jami Ochko</td>
      <td>38,450</td>
    </tr>
  </table>
</div>`
    },
    targetDescription: {
      en: 'A grand championship standings table built completely from scratch: header row with 4 <th> cells, 3 player rows with badges, and a summary footer with colspan="3".',
      uz: 'Noldan boshlab to\'liq qurilgan chempionat jadvali: 4 ta <th> sarlavha kataklari, nishonli 3 ta o\'yinchi qatori va colspan="3" li umumiy hisobot qatori.'
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
        explanation: { en: 'Creates horizontal rows across the table. Each <tr> is a brand-new row!', uz: 'Gorizontal qatorlar hosil qiladi. Har bir <tr> yangi bitta qator deganidir!' },
        effect: { en: 'Starts a horizontal row', uz: 'Gorizontal qatorni boshlaydi' },
        visualPreview: '<div class="mini-canvas">➔ Horizontal Row ➔</div>'
      },
      {
        part: '<th>',
        role: { en: 'Table Header Cell', uz: 'Sarlavha katagi' },
        explanation: { en: 'Creates bold, centered column title cells. Belongs inside the 1st <tr> row!', uz: 'Ustun nomlari uchun qalin sarlavha katagi hosil qiladi. 1-qator <tr> ichiga qo\'yiladi!' },
        effect: { en: 'Bold column header', uz: 'Qalin sarlavha katagi' },
        visualPreview: '<div class="mini-canvas"><b>Header: Name | Score</b></div>'
      },
      {
        part: '<td>',
        role: { en: 'Table Data Cell', uz: 'Ma\'lumot katagi' },
        explanation: { en: 'Regular grid cells holding facts, names, badges, or numbers.', uz: 'Ma\'lumot, o\'yinchi nomi, nishon va ochkolarni saqlovchi kataklar.' },
        effect: { en: 'Standard data cell box', uz: 'Oddiy ma\'lumot katagi' },
        visualPreview: '<div class="mini-canvas">📦 Standard Data Cell Box</div>'
      },
      {
        part: 'colspan="3"',
        role: { en: 'Column Span', uz: 'Ustunlarni Birlashtirish' },
        explanation: { en: 'Merges 3 columns horizontally into one grand banner cell.', uz: '3 ta ustunni gorizontal ravishda bitta keng katakka birlashtiradi.' },
        effect: { en: 'Wide merged cell', uz: 'Birlashtirilgan keng katak' }
      }
    ],
    listOfTags: [
      { code: '<table> ... </table>', name: 'Table Container', description: 'The outer container frame for a data table', exampleHtml: '<table>...</table>' },
      { code: '<tr> ... </tr>', name: 'Table Row', description: 'Creates one horizontal line of cells across the table', exampleHtml: '<tr><td>A</td><td>B</td></tr>' },
      { code: '<th> ... </th>', name: 'Table Header', description: 'Bold title cell at the top of a column', exampleHtml: '<th>Player</th>' },
      { code: '<td> ... </td>', name: 'Table Data', description: 'Standard data cell box holding facts or numbers', exampleHtml: '<td>15,400</td>' },
      { code: 'colspan="3"', name: 'Column Span', description: 'Combines 3 horizontal cells into one wide cell', exampleHtml: '<td colspan="3">Total</td>' }
    ],
    tagShowcase: [
      { tag: '<table>', meaning: 'The whole grid' },
      { tag: '<tr>', meaning: 'One horizontal row' },
      { tag: '<th>', meaning: 'Bold column title' },
      { tag: '<td>', meaning: 'Data cell box' },
      { tag: 'colspan="3"', meaning: 'Merge 3 columns' }
    ],
    quickTags: ['<table>', '</table>', '<tr>', '</tr>', '<th>', '</th>', '<td>', '</td>', 'colspan="3"'],
    challenge: {
      mission: {
        en: 'Construct the full Esports Standings Table from scratch! 1) Create header <tr> with 4 <th> cells. 2) Create 1st place <tr class="champion"> for ApexDragon with 4 <td> cells. 3) Create 2nd place <tr> for PixelCat with 4 <td> cells. 4) Create 3rd place <tr> for CyberBot with 4 <td> cells. 5) Create <tr class="total-row"> with <td colspan="3"> and <td>38,450</td>!',
        uz: 'Kibersport jadvalini noldan o\'zingiz quring! 1) 4 ta <th> katakli sarlavha <tr> qatorini oching. 2) ApexDragon uchun 4 ta <td> katakli <tr class="champion"> qatorini yozing. 3) PixelCat uchun 4 ta <td> katakli <tr> qatorini yozing. 4) CyberBot uchun 4 ta <td> katakli <tr> qatorini yozing. 5) <td colspan="3"> va <td>38,450</td> ga ega <tr class="total-row"> qatorini qo\'shing!'
      },
      hint: {
        en: 'Write 5 distinct <tr> rows: row 1 with <th>, rows 2-4 with <td> for players, and row 5 with <td colspan="3">.',
        uz: '5 ta alohida <tr> qatori yozing: 1-qatorda <th>, 2-4 qatorlarda o\'yinchilar uchun <td>, 5-qatorda esa <td colspan="3"> bo\'lsin.'
      },
      rules: [
        {
          type: 'hasTag',
          tag: 'table',
          message: 'Keep the <table> container!'
        },
        {
          type: 'custom',
          check: (code) => (code.match(/<th/gi) || []).length >= 4,
          message: 'Add at least 4 <th> header title cells in the first row!'
        },
        {
          type: 'custom',
          check: (code) => (code.match(/<tr/gi) || []).length >= 5,
          message: 'You need at least 5 <tr> rows (header + 3 player rows + summary row)!'
        },
        {
          type: 'custom',
          check: (code) => (code.match(/<td/gi) || []).length >= 13,
          message: 'You need all player data cells (at least 13 <td> cells total across rows)!'
        },
        {
          type: 'custom',
          check: (code) => /ApexDragon/i.test(code),
          message: 'Add ApexDragon as the 1st place champion in the table!'
        },
        {
          type: 'custom',
          check: (code) => /PixelCat/i.test(code),
          message: 'Add PixelCat as the 2nd place master in the table!'
        },
        {
          type: 'custom',
          check: (code) => /CyberBot/i.test(code),
          message: 'Add CyberBot as the 3rd place player in the table!'
        },
        {
          type: 'custom',
          check: (code) => /colspan\s*=\s*["']?3["']?/i.test(code),
          message: 'Add colspan="3" to merge the first 3 columns in the total summary row!'
        },
        {
          type: 'custom',
          check: (code) => /38[,.]?450/i.test(code),
          message: 'Include the total score of 38,450 in the summary row!'
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
      en: 'Theme 4: Pictures & Media Gallery (Figure, Img & Figcaption)',
      uz: '4-Mavzu: Rasmlar va Media Galereyasi (Figure, Img va Figcaption)'
    },
    icon: '🖼️',
    tag: '<figure>, <img src="" alt="" width="">, <figcaption>',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, images bring websites to life! Instead of boring blank cards, professional websites wrap photos inside semantic **<figure>** tags and explain them with **<figcaption>**. You also place circular avatar badges using width, height, and border-radius.',
        uz: "Oddiy inson tilida, rasmlar veb-sahifaga jon bag'ishlaydi! Zerikarli bo'sh qutilar o'rniga zamonaviy saytlar rasmlarni semantik **<figure>** ichiga o'rab, ostiga **<figcaption>** orqali izoh yozadi. Shuningdek, width va height orqali dumaloq kiber avatarlar joylashtiriladi."
      },
      whatIsATag: {
        en: '1. `<img>` is a **Void Tag** (self-closing, no </img>)! It requires `src` (address) and `alt` (description for screen readers).\n2. `<figure>` and `<figcaption>` group the photo and its caption into one neat semantic story.',
        uz: "1. `<img>` — **Bo'sh (Void) teg** (yopiluvchi jufti yo'q)! Unga `src` (manzil) va `alt` (tavsif) atributlari shart.\n2. `<figure>` va `<figcaption>` rasmni va uning ostidagi tushuntirish izohini bitta yaxlit semantik hikoyaga birlashtiradi."
      }
    },
    summary: {
      en: 'Build a high-tech Mars Rover Expedition gallery with semantic <figure>, <figcaption>, hero photos, and circular crew avatars.',
      uz: "Semantik <figure>, <figcaption>, bosh rasm va dumaloq ekipaj avatarlari bilan Mars Rover ekspeditsiya galereyasini quring."
    },
    story: {
      en: 'The Cyber Explorer Agency is launching Rover MK-IV on Mars! Assemble the mission gallery card with the hero rover photo, caption, and crew avatars!',
      uz: "Kiber Ekspeditsiya Agentligi Marsda Rover MK-IV missiyasini boshlamoqda! Bosh rover rasmi, uning izohi va 2 ta ekipaj avatarini joylashtiring!"
    },
    initialCode: {
      en: `<style>
  .expedition-hub {
    background: #080c14;
    border: 1px solid #1e293b;
    border-radius: 18px;
    padding: 20px;
    color: white;
    font-family: system-ui, sans-serif;
    max-width: 480px;
    margin: 0 auto;
  }
  .hero-figure {
    margin: 0 0 16px 0;
  }
  .hero-img {
    width: 100%;
    /* 1-Qadam: aspect-ratio: 16/9; va object-fit: cover; bering */
    border-radius: 14px;
    border: 2px solid #38bdf8;
    display: block;
  }
  .gallery-caption {
    font-size: 13px;
    color: #94a3b8;
    margin: 10px 0 0;
    font-weight: 700;
    text-align: center;
  }
  .fleet-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 16px;
  }
  .fleet-img {
    width: 100%;
    height: 90px;
    object-fit: cover;
    border-radius: 10px;
  }
  .crew-strip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #0f172a;
    border-radius: 12px;
    padding: 10px 16px;
  }
  .crew-avatars {
    display: flex;
    gap: 10px;
  }
  .avatar-badge {
    width: 48px;
    height: 48px;
    /* 3-Qadam: border-radius: 50%; qiling */
  }
</style>

<div class="expedition-hub">
  <!-- 1-Qadam: <figure class="hero-figure"> ichiga rover rasmini qo'ying -->
  <figure class="hero-figure">
    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='440' height='220' viewBox='0 0 440 220'><defs><linearGradient id='marsSky' x1='0' y1='0' x2='0' y2='1'><stop offset='0%' stop-color='%231e1b4b'/><stop offset='60%' stop-color='%234c0519'/><stop offset='100%' stop-color='%23991b1b'/></linearGradient><linearGradient id='roverBody' x1='0' y1='0' x2='1' y2='0'><stop offset='0%' stop-color='%2338bdf8'/><stop offset='100%' stop-color='%230284c7'/></linearGradient></defs><rect width='440' height='220' fill='url(%23marsSky)'/><circle cx='380' cy='45' r='22' fill='%23fbbf24' opacity='0.9'/><path d='M0 160 Q110 130 220 160 T440 150 L440 220 L0 220 Z' fill='%237f1d1d'/><path d='M0 180 Q140 165 280 185 T440 175 L440 220 L0 220 Z' fill='%23450a0a'/><rect x='130' y='110' width='180' height='45' rx='10' fill='%230f172a' stroke='%2338bdf8' stroke-width='3'/><rect x='160' y='80' width='60' height='30' rx='6' fill='%231e293b' stroke='%2338bdf8' stroke-width='2'/><circle cx='180' cy='95' r='8' fill='%2322d3ee'/><circle cx='200' cy='95' r='5' fill='%23f43f5e'/><circle cx='150' cy='165' r='18' fill='%23334155' stroke='%2338bdf8' stroke-width='4'/><circle cx='220' cy='165' r='18' fill='%23334155' stroke='%2338bdf8' stroke-width='4'/><circle cx='290' cy='165' r='18' fill='%23334155' stroke='%2338bdf8' stroke-width='4'/><text x='220' y='138' fill='white' font-family='sans-serif' font-weight='900' font-size='13' letter-spacing='2' text-anchor='middle'>ROVER MK-IV</text></svg>" alt="Mars Rover MK-IV Hero Panoramic" class="hero-img">
    <!-- 2-Qadam: <figcaption class="gallery-caption">...</figcaption> qo'shing -->
  </figure>

  <div class="fleet-grid">
    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120'><rect width='180' height='120' fill='%230b0f19' rx='10'/><circle cx='90' cy='60' r='22' fill='%231e293b' stroke='%2322c55e' stroke-width='2'/><line x1='50' y1='60' x2='130' y2='60' stroke='%23475569' stroke-width='4'/><line x1='90' y1='25' x2='90' y2='95' stroke='%23475569' stroke-width='4'/><circle cx='50' cy='60' r='10' fill='%2322c55e' opacity='0.8'/><circle cx='130' cy='60' r='10' fill='%2322c55e' opacity='0.8'/><circle cx='90' cy='25' r='10' fill='%2322c55e' opacity='0.8'/><circle cx='90' cy='95' r='10' fill='%2322c55e' opacity='0.8'/><text x='90' y='65' fill='%2322c55e' font-family='sans-serif' font-weight='bold' font-size='11' text-anchor='middle'>DRONE X1</text></svg>" alt="Atmosphere Drone Scout X1" class="fleet-img">
    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120'><rect width='180' height='120' fill='%230b0f19' rx='10'/><rect x='70' y='45' width='40' height='30' rx='4' fill='%23eab308' stroke='%23fef08a' stroke-width='2'/><rect x='20' y='50' width='45' height='20' fill='%230284c7' stroke='%2338bdf8' stroke-width='1.5'/><rect x='115' y='50' width='45' height='20' fill='%230284c7' stroke='%2338bdf8' stroke-width='1.5'/><circle cx='90' cy='40' r='12' fill='none' stroke='%23facc15' stroke-width='2'/><text x='90' y='64' fill='%23000' font-family='sans-serif' font-weight='bold' font-size='9' text-anchor='middle'>ORBIT-9</text></svg>" alt="Deep Space Orbital Relay" class="fleet-img">
  </div>

  <div class="crew-strip">
    <span style="font-size: 12px; font-weight: 800; color: #38bdf8;">KOSMIK EKIPAJ:</span>
    <div class="crew-avatars">
      <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><circle cx='30' cy='30' r='28' fill='%23f97316'/><text x='30' y='39' font-size='28' text-anchor='middle'>🦊</text></svg>" alt="Pilot Fox Commander" class="avatar-badge">
      <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><circle cx='30' cy='30' r='28' fill='%2306b6d4'/><text x='30' y='39' font-size='28' text-anchor='middle'>🤖</text></svg>" alt="Scientist Android Prime" class="avatar-badge">
    </div>
  </div>
</div>`,
      uz: `<style>
  .expedition-hub {
    background: #080c14;
    border: 1px solid #1e293b;
    border-radius: 18px;
    padding: 20px;
    color: white;
    font-family: system-ui, sans-serif;
    max-width: 480px;
    margin: 0 auto;
  }
  .hero-figure {
    margin: 0 0 16px 0;
  }
  .hero-img {
    width: 100%;
    /* 1-Qadam: aspect-ratio: 16/9; va object-fit: cover; bering */
    border-radius: 14px;
    border: 2px solid #38bdf8;
    display: block;
  }
  .gallery-caption {
    font-size: 13px;
    color: #94a3b8;
    margin: 10px 0 0;
    font-weight: 700;
    text-align: center;
  }
  .fleet-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 16px;
  }
  .fleet-img {
    width: 100%;
    height: 90px;
    object-fit: cover;
    border-radius: 10px;
  }
  .crew-strip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #0f172a;
    border-radius: 12px;
    padding: 10px 16px;
  }
  .crew-avatars {
    display: flex;
    gap: 10px;
  }
  .avatar-badge {
    width: 48px;
    height: 48px;
    /* 3-Qadam: border-radius: 50%; qiling */
  }
</style>

<div class="expedition-hub">
  <!-- 1-Qadam: <figure class="hero-figure"> ichiga rover rasmini qo'ying -->
  <figure class="hero-figure">
    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='440' height='220' viewBox='0 0 440 220'><defs><linearGradient id='marsSky' x1='0' y1='0' x2='0' y2='1'><stop offset='0%' stop-color='%231e1b4b'/><stop offset='60%' stop-color='%234c0519'/><stop offset='100%' stop-color='%23991b1b'/></linearGradient><linearGradient id='roverBody' x1='0' y1='0' x2='1' y2='0'><stop offset='0%' stop-color='%2338bdf8'/><stop offset='100%' stop-color='%230284c7'/></linearGradient></defs><rect width='440' height='220' fill='url(%23marsSky)'/><circle cx='380' cy='45' r='22' fill='%23fbbf24' opacity='0.9'/><path d='M0 160 Q110 130 220 160 T440 150 L440 220 L0 220 Z' fill='%237f1d1d'/><path d='M0 180 Q140 165 280 185 T440 175 L440 220 L0 220 Z' fill='%23450a0a'/><rect x='130' y='110' width='180' height='45' rx='10' fill='%230f172a' stroke='%2338bdf8' stroke-width='3'/><rect x='160' y='80' width='60' height='30' rx='6' fill='%231e293b' stroke='%2338bdf8' stroke-width='2'/><circle cx='180' cy='95' r='8' fill='%2322d3ee'/><circle cx='200' cy='95' r='5' fill='%23f43f5e'/><circle cx='150' cy='165' r='18' fill='%23334155' stroke='%2338bdf8' stroke-width='4'/><circle cx='220' cy='165' r='18' fill='%23334155' stroke='%2338bdf8' stroke-width='4'/><circle cx='290' cy='165' r='18' fill='%23334155' stroke='%2338bdf8' stroke-width='4'/><text x='220' y='138' fill='white' font-family='sans-serif' font-weight='900' font-size='13' letter-spacing='2' text-anchor='middle'>ROVER MK-IV</text></svg>" alt="Mars Rover MK-IV Hero Panoramic" class="hero-img">
    <!-- 2-Qadam: <figcaption class="gallery-caption">...</figcaption> qo'shing -->
  </figure>

  <div class="fleet-grid">
    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120'><rect width='180' height='120' fill='%230b0f19' rx='10'/><circle cx='90' cy='60' r='22' fill='%231e293b' stroke='%2322c55e' stroke-width='2'/><line x1='50' y1='60' x2='130' y2='60' stroke='%23475569' stroke-width='4'/><line x1='90' y1='25' x2='90' y2='95' stroke='%23475569' stroke-width='4'/><circle cx='50' cy='60' r='10' fill='%2322c55e' opacity='0.8'/><circle cx='130' cy='60' r='10' fill='%2322c55e' opacity='0.8'/><circle cx='90' cy='25' r='10' fill='%2322c55e' opacity='0.8'/><circle cx='90' cy='95' r='10' fill='%2322c55e' opacity='0.8'/><text x='90' y='65' fill='%2322c55e' font-family='sans-serif' font-weight='bold' font-size='11' text-anchor='middle'>DRONE X1</text></svg>" alt="Atmosphere Drone Scout X1" class="fleet-img">
    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120'><rect width='180' height='120' fill='%230b0f19' rx='10'/><rect x='70' y='45' width='40' height='30' rx='4' fill='%23eab308' stroke='%23fef08a' stroke-width='2'/><rect x='20' y='50' width='45' height='20' fill='%230284c7' stroke='%2338bdf8' stroke-width='1.5'/><rect x='115' y='50' width='45' height='20' fill='%230284c7' stroke='%2338bdf8' stroke-width='1.5'/><circle cx='90' cy='40' r='12' fill='none' stroke='%23facc15' stroke-width='2'/><text x='90' y='64' fill='%23000' font-family='sans-serif' font-weight='bold' font-size='9' text-anchor='middle'>ORBIT-9</text></svg>" alt="Deep Space Orbital Relay" class="fleet-img">
  </div>

  <div class="crew-strip">
    <span style="font-size: 12px; font-weight: 800; color: #38bdf8;">KOSMIK EKIPAJ:</span>
    <div class="crew-avatars">
      <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><circle cx='30' cy='30' r='28' fill='%23f97316'/><text x='30' y='39' font-size='28' text-anchor='middle'>🦊</text></svg>" alt="Pilot Fox Commander" class="avatar-badge">
      <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><circle cx='30' cy='30' r='28' fill='%2306b6d4'/><text x='30' y='39' font-size='28' text-anchor='middle'>🤖</text></svg>" alt="Scientist Android Prime" class="avatar-badge">
    </div>
  </div>
</div>`
    },
    targetCode: `<style>
  .expedition-hub {
    background: #080c14;
    border: 1px solid #1e293b;
    border-radius: 18px;
    padding: 20px;
    color: white;
    font-family: system-ui, sans-serif;
    max-width: 480px;
    margin: 0 auto;
  }
  .hero-figure {
    margin: 0 0 16px 0;
  }
  .hero-img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 14px;
    border: 2px solid #38bdf8;
    box-shadow: 0 8px 24px rgba(56, 189, 248, 0.25);
    display: block;
    transition: transform 0.3s ease;
  }
  .hero-img:hover {
    transform: scale(1.02);
  }
  .gallery-caption {
    font-size: 13px;
    color: #94a3b8;
    margin: 10px 0 0;
    font-weight: 700;
    text-align: center;
  }
  .fleet-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 16px;
  }
  .fleet-img {
    width: 100%;
    height: 90px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid #334155;
  }
  .crew-strip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 12px;
    padding: 10px 16px;
  }
  .crew-avatars {
    display: flex;
    gap: 10px;
  }
  .avatar-badge {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid #38bdf8;
    box-shadow: 0 0 12px rgba(56, 189, 248, 0.4);
    object-fit: cover;
  }
</style>

<div class="expedition-hub">
  <figure class="hero-figure">
    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='440' height='220' viewBox='0 0 440 220'><defs><linearGradient id='marsSky' x1='0' y1='0' x2='0' y2='1'><stop offset='0%' stop-color='%231e1b4b'/><stop offset='60%' stop-color='%234c0519'/><stop offset='100%' stop-color='%23991b1b'/></linearGradient><linearGradient id='roverBody' x1='0' y1='0' x2='1' y2='0'><stop offset='0%' stop-color='%2338bdf8'/><stop offset='100%' stop-color='%230284c7'/></linearGradient></defs><rect width='440' height='220' fill='url(%23marsSky)'/><circle cx='380' cy='45' r='22' fill='%23fbbf24' opacity='0.9'/><path d='M0 160 Q110 130 220 160 T440 150 L440 220 L0 220 Z' fill='%237f1d1d'/><path d='M0 180 Q140 165 280 185 T440 175 L440 220 L0 220 Z' fill='%23450a0a'/><rect x='130' y='110' width='180' height='45' rx='10' fill='%230f172a' stroke='%2338bdf8' stroke-width='3'/><rect x='160' y='80' width='60' height='30' rx='6' fill='%231e293b' stroke='%2338bdf8' stroke-width='2'/><circle cx='180' cy='95' r='8' fill='%2322d3ee'/><circle cx='200' cy='95' r='5' fill='%23f43f5e'/><circle cx='150' cy='165' r='18' fill='%23334155' stroke='%2338bdf8' stroke-width='4'/><circle cx='220' cy='165' r='18' fill='%23334155' stroke='%2338bdf8' stroke-width='4'/><circle cx='290' cy='165' r='18' fill='%23334155' stroke='%2338bdf8' stroke-width='4'/><text x='220' y='138' fill='white' font-family='sans-serif' font-weight='900' font-size='13' letter-spacing='2' text-anchor='middle'>ROVER MK-IV</text></svg>" alt="Mars Rover MK-IV Hero Panoramic" class="hero-img">
    <figcaption class="gallery-caption">🚀 Mars Rover MK-IV: Qizil Sayyora Ekspeditsiyasi 2026</figcaption>
  </figure>

  <div class="fleet-grid">
    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120'><rect width='180' height='120' fill='%230b0f19' rx='10'/><circle cx='90' cy='60' r='22' fill='%231e293b' stroke='%2322c55e' stroke-width='2'/><line x1='50' y1='60' x2='130' y2='60' stroke='%23475569' stroke-width='4'/><line x1='90' y1='25' x2='90' y2='95' stroke='%23475569' stroke-width='4'/><circle cx='50' cy='60' r='10' fill='%2322c55e' opacity='0.8'/><circle cx='130' cy='60' r='10' fill='%2322c55e' opacity='0.8'/><circle cx='90' cy='25' r='10' fill='%2322c55e' opacity='0.8'/><circle cx='90' cy='95' r='10' fill='%2322c55e' opacity='0.8'/><text x='90' y='65' fill='%2322c55e' font-family='sans-serif' font-weight='bold' font-size='11' text-anchor='middle'>DRONE X1</text></svg>" alt="Atmosphere Drone Scout X1" class="fleet-img">
    <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120'><rect width='180' height='120' fill='%230b0f19' rx='10'/><rect x='70' y='45' width='40' height='30' rx='4' fill='%23eab308' stroke='%23fef08a' stroke-width='2'/><rect x='20' y='50' width='45' height='20' fill='%230284c7' stroke='%2338bdf8' stroke-width='1.5'/><rect x='115' y='50' width='45' height='20' fill='%230284c7' stroke='%2338bdf8' stroke-width='1.5'/><circle cx='90' cy='40' r='12' fill='none' stroke='%23facc15' stroke-width='2'/><text x='90' y='64' fill='%23000' font-family='sans-serif' font-weight='bold' font-size='9' text-anchor='middle'>ORBIT-9</text></svg>" alt="Deep Space Orbital Relay" class="fleet-img">
  </div>

  <div class="crew-strip">
    <span style="font-size: 12px; font-weight: 800; color: #38bdf8;">KOSMIK EKIPAJ:</span>
    <div class="crew-avatars">
      <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><circle cx='30' cy='30' r='28' fill='%23f97316'/><text x='30' y='39' font-size='28' text-anchor='middle'>🦊</text></svg>" alt="Pilot Fox Commander" class="avatar-badge">
      <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><circle cx='30' cy='30' r='28' fill='%2306b6d4'/><text x='30' y='39' font-size='28' text-anchor='middle'>🤖</text></svg>" alt="Scientist Android Prime" class="avatar-badge">
    </div>
  </div>
</div>`,
    targetDescription: {
      en: 'A high-tech Mars Rover expedition exhibition featuring a responsive hero panorama with object-fit: cover, semantic figcaption, 2 fleet vehicles, and 2 neon circular crew avatar badges.',
      uz: "Responsive rover panoramasi, object-fit: cover, semantik figcaption, 2 ta dron/yo'ldosh va 2 ta dumaloq neon ekipaj avatari jamlangan Mars ekspeditsiya ko'rgazmasi."
    },
    anatomy: [
      {
        part: '<figure>...</figure>',
        role: { en: 'Semantic Figure Container', uz: 'Semantik Rasm Konteyneri' },
        explanation: { en: 'Groups a self-contained image and its caption together.', uz: 'Rasm va uning tushuntirish matnini bitta semantik qutiga birlashtiradi.' },
        effect: { en: 'Semantic media block', uz: 'Yaxlit media bloki' }
      },
      {
        part: '<img src="..." alt="...">',
        role: { en: 'Image Void Tag', uz: 'Rasm Tegi (Void)' },
        explanation: { en: 'Displays the photo from src with an alt description. No closing tag!', uz: "src manzilidan rasmni alt tavsifi bilan ko'rsatadi. Yopiluvchi tegi yo'q!" },
        effect: { en: 'Renders the visual photo', uz: 'Rasmni ekranda chizadi' }
      },
      {
        part: '<figcaption>...</figcaption>',
        role: { en: 'Figure Caption', uz: 'Rasm Izohi' },
        explanation: { en: 'Provides a clean title or description for the figure.', uz: 'Rasm ostiga chiroyli sarlavha yoki tavsif beradi.' },
        effect: { en: 'Caption text under picture', uz: 'Rasm ostidagi matn' }
      }
    ],
    listOfTags: [
      { code: '<figure>', name: 'Figure', description: 'Semantic container for photos and illustrations', exampleHtml: '<figure><img src="rover.svg"><figcaption>Rover</figcaption></figure>' },
      { code: '<img src="" alt="">', name: 'Image', description: 'Displays an image or graphic (self-closing)', exampleHtml: '<img src="avatar.svg" alt="Pilot" width="56">' },
      { code: '<figcaption>', name: 'Caption', description: 'Describes or captions the figure', exampleHtml: '<figcaption>Expedition Map</figcaption>' },
      { code: 'object-fit: cover;', name: 'Object Fit', description: 'Crops image proportionately to fill container', exampleHtml: 'img { object-fit: cover; }' },
      { code: 'border-radius: 50%;', name: 'Circle Crop', description: 'Makes image perfectly circular', exampleHtml: '.avatar { border-radius: 50%; }' }
    ],
    tagShowcase: [
      { tag: '<figure>', meaning: { en: 'Media Container', uz: 'Media Konteyner' } },
      { tag: '<img src="..." alt="...">', meaning: { en: 'Void Image sticker', uz: 'Yopilmas rasm tegi' } },
      { tag: '<figcaption>', meaning: { en: 'Photo description', uz: 'Rasm izohi' } },
      { tag: 'object-fit: cover;', meaning: { en: 'Proportionate crop', uz: 'Chiroyli proporsional qirqish' } }
    ],
    quickTags: [
      '<figure class="hero-figure">',
      '<img src="..." alt="Mars Rover" class="hero-img">',
      '<figcaption class="gallery-caption">',
      'object-fit: cover;',
      'border-radius: 50%;'
    ],
    challenge: {
      mission: {
        en: 'Build the Mars & Drone Fleet Exhibition: add the hero rover photo inside <figure>, with <figcaption>, 2 fleet images, and circular border-radius: 50% crew avatars!',
        uz: "Mars & Dronlar ko'rgazmasini yarating: <figure> ichiga bosh rover rasmi, <figcaption> izohi, 2 ta dron/yo'ldosh rasmlari va dumaloq border-radius: 50% ekipaj avatarlarini joylashtiring!"
      },
      hint: {
        en: 'Use <figure>, <figcaption>, at least 4 <img> tags, alt attributes, object-fit: cover, and border-radius: 50%!',
        uz: "<figure>, <figcaption>, kamida 4 ta <img> tegi, alt atributlari, object-fit: cover va border-radius: 50% qo'llang!"
      },
      rules: [
        {
          type: 'hasTag',
          tag: 'figure',
          message: 'Wrap your main rover photo inside a semantic <figure> tag!'
        },
        {
          type: 'hasTag',
          tag: 'figcaption',
          message: 'Add a <figcaption> describing the expedition under the hero photo!'
        },
        {
          type: 'custom',
          check: (code) => {
            const matches = code.match(/<img\b/gi);
            return matches && matches.length >= 4;
          },
          message: 'Include at least 4 <img> tags: the hero rover, 2 fleet vehicles, and crew avatars!'
        },
        {
          type: 'custom',
          check: (code) => code.includes('alt=') && /alt\s*=\s*['"][^'"]+['"]/i.test(code),
          message: 'Ensure your <img> tags have descriptive alt="" attributes!'
        },
        {
          type: 'hasCssProperty',
          property: 'object-fit',
          valuePattern: /cover/i,
          message: 'Apply object-fit: cover to photos so they crop cleanly!'
        },
        {
          type: 'hasCssProperty',
          property: 'border-radius',
          valuePattern: /50%/i,
          message: 'Make the crew avatars circular using border-radius: 50%!'
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
      funActivity: 'Try setting width to 400 and watch the rover get huge!'
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
    initialCode: {
      en: `<!-- Step 1: Wrap the treasure below inside a <div> container -->
<!-- Step 2: Add style="border: 4px solid #2dd4bf; padding: 16px;" to the <div> -->

<h3>Secret Chest</h3>
<p>Contains 100 gold coins and a magical crystal!</p>`,
      uz: `<!-- 1-Qadam: Quyidagi xazinani <div> konteyneriga oling -->
<!-- 2-Qadam: <div> ga style="border: 4px solid #2dd4bf; padding: 16px;" qo'shing -->

<h3>Secret Chest</h3>
<p>Contains 100 gold coins and a magical crystal!</p>`
    },
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
    initialCode: {
      en: `<style>
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

  <!-- Step 1: Give this span class="badge" -->
  <span>Level: 99</span>
</div>`,
      uz: `<style>
  /* CSS da nuqta . klass belgisidir */
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

  <!-- 1-Qadam: Ushbu span ga class="badge" bering -->
  <span>Level: 99</span>
</div>`
    },
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
    initialCode: {
      en: `<style>
  .box {
    background-color: #1e2030;
    color: #ffffff;
    border: 3px solid #2dd4bf;

    /* Step 1: Change padding to 24px */
    padding: 0px;

    /* Step 2: Change margin to 30px */
    margin: 0px;
  }
</style>

<div class="box">
  <h3>I am in a box!</h3>
  <p>Give me 24px of inside cushion (padding) and 30px of personal space (margin)!</p>
</div>`,
      uz: `<style>
  .box {
    background-color: #1e2030;
    color: #ffffff;
    border: 3px solid #2dd4bf;

    /* 1-Qadam: Padding (ichki masofa) ni 24px qiling */
    padding: 0px;

    /* 2-Qadam: Margin (tashqi masofa) ni 30px qiling */
    margin: 0px;
  }
</style>

<div class="box">
  <h3>I am in a box!</h3>
  <p>Give me 24px of inside cushion (padding) and 30px of personal space (margin)!</p>
</div>`
    },
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
    initialCode: {
      en: `<style>
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

    /* Step 1: Rotate Box 1 by 15 degrees */
    transform: rotate(0deg);
  }

  .box-2 {
    background: #4facfe;

    /* Step 2: Zoom Box 2 20% larger using scale */
    transform: scale(1);
  }

  .box-3 {
    background: #43e97b;

    /* Step 3: Float Box 3 15px upward into the air */
    transform: translateY(0px);
  }
</style>

<div class="box-container">
  <div class="box box-1">1</div>
  <div class="box box-2">2</div>
  <div class="box box-3">3</div>
</div>`,
      uz: `<style>
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

    /* 1-Qadam: 1-qutini 15 daraja buring */
    transform: rotate(0deg);
  }

  .box-2 {
    background: #4facfe;

    /* 2-Qadam: 2-qutini 20% kattalashtiring */
    transform: scale(1);
  }

  .box-3 {
    background: #43e97b;

    /* 3-Qadam: 3-qutini 15px yuqoriga suring */
    transform: translateY(0px);
  }
</style>

<div class="box-container">
  <div class="box box-1">1</div>
  <div class="box box-2">2</div>
  <div class="box box-3">3</div>
</div>`
    },
    targetCode: {
      en: `<style>
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
      uz: `<style>
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
</div>`
    },
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
    tag: 'display: flex, justify-content, align-items, gap',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, **Flexbox** is the master 1D layout engine of real Single Page Applications! Without it, navbars, cards, and player controls collapse into a messy vertical pile. Real web applications use Flexbox everywhere: top navigation, track cards row, and bottom player deck!',
        uz: 'Oddiy tilda **Flexbox** — bu haqiqiy SPA ilovalarning 1D terish dvigatelidir! Usiz navigatsiya panellari, kartochkalar va pleyer boshqaruvi bir-birining ustiga yig\'ilib qoladi. Haqiqiy veb-ilovalarda Flexbox hamma joyda: yuqori menyu, qo\'shiqlar qatori va pastki pleyerda faol ishlatiladi!'
      },
      whatIsATag: {
        en: '1. `display: flex;` activates the 1D snapping power.\n2. `justify-content: space-between;` pushes brand to the left and profile controls to the right.\n3. `align-items: center;` centers all navbar and player items vertically!\n4. `gap: 12px;` leaves consistent spacing between cards in a flex row!',
        uz: '1. `display: flex;` bir o\'lchovli qator kuchini yoqadi.\n2. `justify-content: space-between;` brendni chapga, tugmalarni esa eng o\'ng chetga suradi.\n3. `align-items: center;` barcha elementlarni vertikal bo\'yicha markazga tekislaydi!\n4. `gap: 12px;` kartochkalar orasida chiroyli toza masofa qoldiradi!'
      }
    },
    summary: {
      en: 'Assemble a complete Spotify-style Music SPA layout by coding Flexbox across 3 distinct components: the topbar navbar, the music tracks row, and the bottom player bar.',
      uz: 'Flexbox qoidalarini 3 ta alohida komponentda (yuqori menyu, qo\'shiqlar qatori va pastki pleyer paneli) o\'z qo\'lingiz bilan yozib to\'liq musiqiy SPA ilovasini quring.'
    },
    story: {
      en: 'The CyberPulse Music SPA layout is collapsed into a messy vertical stack! Snap the top navbar, the music track cards row, and the bottom player deck into place using Flexbox!',
      uz: 'CyberPulse Musiqa SPA sahifasining sarlavhasi, kartochkalari va pleyeri ustma-ust tushib buzilib yotibdi. Flexbox yordamida barcha 3 ta qismni haqiqiy musiqiy ilova kabi terib chiqing!'
    },
    initialCode: {
      en: `<style>
  * { box-sizing: border-box; }
  .spa-app {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 16px;
    color: #e2e8f0;
    font-family: system-ui, sans-serif;
  }

  /* Step 1: Turn on flexbox in .spa-navbar: display: flex; justify-content: space-between; align-items: center; */
  .spa-navbar {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 14px 20px;
    margin-bottom: 16px;
  }
  .brand { font-size: 16px; font-weight: 800; color: #38bdf8; }
  .nav-menu { display: flex; gap: 16px; font-size: 13px; color: #94a3b8; }
  .nav-menu span:hover { color: #38bdf8; cursor: pointer; }
  .user-deck { display: flex; align-items: center; gap: 10px; font-size: 12px; }
  .vip-pill { background: #38bdf8; color: #0b0f19; font-weight: bold; padding: 4px 10px; border-radius: 6px; }

  .spa-body {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
  }
  .spa-sidebar {
    width: 170px;
    background: #111827;
    border-radius: 12px;
    padding: 14px;
    font-size: 12px;
  }
  .spa-sidebar h4 { margin: 0 0 10px 0; color: #38bdf8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }
  .spa-sidebar div { padding: 6px 0; color: #94a3b8; cursor: pointer; }
  .spa-sidebar div:hover { color: white; }

  .spa-content {
    flex: 1;
    background: #111827;
    border-radius: 12px;
    padding: 16px;
  }
  .hero-banner {
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border: 1px solid #4338ca;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 16px;
  }
  .hero-banner h3 { margin: 0 0 6px 0; color: #a5b4fc; }
  .hero-banner p { margin: 0; font-size: 12px; color: #cbd5e1; }

  /* Step 2: Line up track cards horizontally: display: flex; gap: 12px; */
  .track-row {
    margin-bottom: 16px;
  }
  .track-card {
    flex: 1;
    background: #1e293b;
    border-radius: 8px;
    padding: 12px;
    font-size: 12px;
  }
  .track-card span { display: block; color: #94a3b8; font-size: 10px; margin-top: 4px; }

  /* Step 3: Spread player controls: display: flex; justify-content: space-between; align-items: center; */
  .spa-player {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 12px 20px;
    font-size: 12px;
  }
  .player-track { color: #38bdf8; font-weight: bold; }
  .player-controls { display: flex; gap: 14px; font-size: 14px; cursor: pointer; }
</style>

<div class="spa-app">
  <header class="spa-navbar">
    <div class="brand">🎵 CyberPulse SPA</div>
    <div class="nav-menu">
      <span>Home</span>
      <span>Discover</span>
      <span>Radio</span>
      <span>Library</span>
    </div>
    <div class="user-deck">
      <span class="vip-pill">⭐ VIP PASS</span>
      <span>🎧 Alex</span>
    </div>
  </header>

  <div class="spa-body">
    <aside class="spa-sidebar">
      <h4>Playlists</h4>
      <div>⚡ Synthwave</div>
      <div>🚀 Lo-Fi Chill</div>
      <div>🎮 Gaming OST</div>
      <div>💎 Cyber Beats</div>
    </aside>

    <main class="spa-content">
      <div class="hero-banner">
        <h3>⚡ Live Cyber Station</h3>
        <p>Streaming high-tempo coding synth to 12,400 listeners worldwide.</p>
      </div>

      <div class="track-row">
        <div class="track-card"><b>Neon Horizon</b><span>3:42 • CyberBoy</span></div>
        <div class="track-card"><b>Laser Grid</b><span>4:15 • PixelQueen</span></div>
        <div class="track-card"><b>Dark Orbit</b><span>2:58 • SynthLord</span></div>
      </div>
    </main>
  </div>

  <footer class="spa-player">
    <div class="player-track">▶ Now Playing: Neon Horizon (3:42)</div>
    <div class="player-controls">
      <span>⏮️</span>
      <span>⏯️</span>
      <span>⏭️</span>
    </div>
    <div class="player-vol">🔊 85%</div>
  </footer>
</div>`,
      uz: `<style>
  * { box-sizing: border-box; }
  .spa-app {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 16px;
    color: #e2e8f0;
    font-family: system-ui, sans-serif;
  }

  /* 1-Qadam: .spa-navbar da flexboxni yoqing: display: flex; justify-content: space-between; align-items: center; */
  .spa-navbar {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 14px 20px;
    margin-bottom: 16px;
  }
  .brand { font-size: 16px; font-weight: 800; color: #38bdf8; }
  .nav-menu { display: flex; gap: 16px; font-size: 13px; color: #94a3b8; }
  .nav-menu span:hover { color: #38bdf8; cursor: pointer; }
  .user-deck { display: flex; align-items: center; gap: 10px; font-size: 12px; }
  .vip-pill { background: #38bdf8; color: #0b0f19; font-weight: bold; padding: 4px 10px; border-radius: 6px; }

  .spa-body {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
  }
  .spa-sidebar {
    width: 170px;
    background: #111827;
    border-radius: 12px;
    padding: 14px;
    font-size: 12px;
  }
  .spa-sidebar h4 { margin: 0 0 10px 0; color: #38bdf8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }
  .spa-sidebar div { padding: 6px 0; color: #94a3b8; cursor: pointer; }
  .spa-sidebar div:hover { color: white; }

  .spa-content {
    flex: 1;
    background: #111827;
    border-radius: 12px;
    padding: 16px;
  }
  .hero-banner {
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border: 1px solid #4338ca;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 16px;
  }
  .hero-banner h3 { margin: 0 0 6px 0; color: #a5b4fc; }
  .hero-banner p { margin: 0; font-size: 12px; color: #cbd5e1; }

  /* 2-Qadam: .track-row dagi kartalarni bir qatorga tering: display: flex; gap: 12px; */
  .track-row {
    margin-bottom: 16px;
  }
  .track-card {
    flex: 1;
    background: #1e293b;
    border-radius: 8px;
    padding: 12px;
    font-size: 12px;
  }
  .track-card span { display: block; color: #94a3b8; font-size: 10px; margin-top: 4px; }

  /* 3-Qadam: .spa-player boshqaruvini ikki chetga yoying: display: flex; justify-content: space-between; align-items: center; */
  .spa-player {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 12px 20px;
    font-size: 12px;
  }
  .player-track { color: #38bdf8; font-weight: bold; }
  .player-controls { display: flex; gap: 14px; font-size: 14px; cursor: pointer; }
</style>

<div class="spa-app">
  <header class="spa-navbar">
    <div class="brand">🎵 CyberPulse SPA</div>
    <div class="nav-menu">
      <span>Home</span>
      <span>Discover</span>
      <span>Radio</span>
      <span>Library</span>
    </div>
    <div class="user-deck">
      <span class="vip-pill">⭐ VIP PASS</span>
      <span>🎧 Alex</span>
    </div>
  </header>

  <div class="spa-body">
    <aside class="spa-sidebar">
      <h4>Playlists</h4>
      <div>⚡ Synthwave</div>
      <div>🚀 Lo-Fi Chill</div>
      <div>🎮 Gaming OST</div>
      <div>💎 Cyber Beats</div>
    </aside>

    <main class="spa-content">
      <div class="hero-banner">
        <h3>⚡ Live Cyber Station</h3>
        <p>Streaming high-tempo coding synth to 12,400 listeners worldwide.</p>
      </div>

      <div class="track-row">
        <div class="track-card"><b>Neon Horizon</b><span>3:42 • CyberBoy</span></div>
        <div class="track-card"><b>Laser Grid</b><span>4:15 • PixelQueen</span></div>
        <div class="track-card"><b>Dark Orbit</b><span>2:58 • SynthLord</span></div>
      </div>
    </main>
  </div>

  <footer class="spa-player">
    <div class="player-track">▶ Now Playing: Neon Horizon (3:42)</div>
    <div class="player-controls">
      <span>⏮️</span>
      <span>⏯️</span>
      <span>⏭️</span>
    </div>
    <div class="player-vol">🔊 85%</div>
  </footer>
</div>`
    },
    targetCode: {
      en: `<style>
  * { box-sizing: border-box; }
  .spa-app {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 16px;
    color: #e2e8f0;
    font-family: system-ui, sans-serif;
  }
  .spa-navbar {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 14px 20px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand { font-size: 16px; font-weight: 800; color: #38bdf8; }
  .nav-menu { display: flex; gap: 16px; font-size: 13px; color: #94a3b8; }
  .nav-menu span:hover { color: #38bdf8; cursor: pointer; }
  .user-deck { display: flex; align-items: center; gap: 10px; font-size: 12px; }
  .vip-pill { background: #38bdf8; color: #0b0f19; font-weight: bold; padding: 4px 10px; border-radius: 6px; }

  .spa-body {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
  }
  .spa-sidebar {
    width: 170px;
    background: #111827;
    border-radius: 12px;
    padding: 14px;
    font-size: 12px;
  }
  .spa-sidebar h4 { margin: 0 0 10px 0; color: #38bdf8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }
  .spa-sidebar div { padding: 6px 0; color: #94a3b8; cursor: pointer; }
  .spa-sidebar div:hover { color: white; }

  .spa-content {
    flex: 1;
    background: #111827;
    border-radius: 12px;
    padding: 16px;
  }
  .hero-banner {
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border: 1px solid #4338ca;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 16px;
  }
  .hero-banner h3 { margin: 0 0 6px 0; color: #a5b4fc; }
  .hero-banner p { margin: 0; font-size: 12px; color: #cbd5e1; }

  .track-row {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
  }
  .track-card {
    flex: 1;
    background: #1e293b;
    border-radius: 8px;
    padding: 12px;
    font-size: 12px;
  }
  .track-card span { display: block; color: #94a3b8; font-size: 10px; margin-top: 4px; }

  .spa-player {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
  }
  .player-track { color: #38bdf8; font-weight: bold; }
  .player-controls { display: flex; gap: 14px; font-size: 14px; cursor: pointer; }
</style>

<div class="spa-app">
  <header class="spa-navbar">
    <div class="brand">🎵 CyberPulse SPA</div>
    <div class="nav-menu">
      <span>Home</span>
      <span>Discover</span>
      <span>Radio</span>
      <span>Library</span>
    </div>
    <div class="user-deck">
      <span class="vip-pill">⭐ VIP PASS</span>
      <span>🎧 Alex</span>
    </div>
  </header>

  <div class="spa-body">
    <aside class="spa-sidebar">
      <h4>Playlists</h4>
      <div>⚡ Synthwave</div>
      <div>🚀 Lo-Fi Chill</div>
      <div>🎮 Gaming OST</div>
      <div>💎 Cyber Beats</div>
    </aside>

    <main class="spa-content">
      <div class="hero-banner">
        <h3>⚡ Live Cyber Station</h3>
        <p>Streaming high-tempo coding synth to 12,400 listeners worldwide.</p>
      </div>

      <div class="track-row">
        <div class="track-card"><b>Neon Horizon</b><span>3:42 • CyberBoy</span></div>
        <div class="track-card"><b>Laser Grid</b><span>4:15 • PixelQueen</span></div>
        <div class="track-card"><b>Dark Orbit</b><span>2:58 • SynthLord</span></div>
      </div>
    </main>
  </div>

  <footer class="spa-player">
    <div class="player-track">▶ Now Playing: Neon Horizon (3:42)</div>
    <div class="player-controls">
      <span>⏮️</span>
      <span>⏯️</span>
      <span>⏭️</span>
    </div>
    <div class="player-vol">🔊 85%</div>
  </footer>
</div>`,
      uz: `<style>
  * { box-sizing: border-box; }
  .spa-app {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 16px;
    color: #e2e8f0;
    font-family: system-ui, sans-serif;
  }
  .spa-navbar {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 14px 20px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand { font-size: 16px; font-weight: 800; color: #38bdf8; }
  .nav-menu { display: flex; gap: 16px; font-size: 13px; color: #94a3b8; }
  .nav-menu span:hover { color: #38bdf8; cursor: pointer; }
  .user-deck { display: flex; align-items: center; gap: 10px; font-size: 12px; }
  .vip-pill { background: #38bdf8; color: #0b0f19; font-weight: bold; padding: 4px 10px; border-radius: 6px; }

  .spa-body {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
  }
  .spa-sidebar {
    width: 170px;
    background: #111827;
    border-radius: 12px;
    padding: 14px;
    font-size: 12px;
  }
  .spa-sidebar h4 { margin: 0 0 10px 0; color: #38bdf8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }
  .spa-sidebar div { padding: 6px 0; color: #94a3b8; cursor: pointer; }
  .spa-sidebar div:hover { color: white; }

  .spa-content {
    flex: 1;
    background: #111827;
    border-radius: 12px;
    padding: 16px;
  }
  .hero-banner {
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border: 1px solid #4338ca;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 16px;
  }
  .hero-banner h3 { margin: 0 0 6px 0; color: #a5b4fc; }
  .hero-banner p { margin: 0; font-size: 12px; color: #cbd5e1; }

  .track-row {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
  }
  .track-card {
    flex: 1;
    background: #1e293b;
    border-radius: 8px;
    padding: 12px;
    font-size: 12px;
  }
  .track-card span { display: block; color: #94a3b8; font-size: 10px; margin-top: 4px; }

  .spa-player {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
  }
  .player-track { color: #38bdf8; font-weight: bold; }
  .player-controls { display: flex; gap: 14px; font-size: 14px; cursor: pointer; }
</style>

<div class="spa-app">
  <header class="spa-navbar">
    <div class="brand">🎵 CyberPulse SPA</div>
    <div class="nav-menu">
      <span>Home</span>
      <span>Discover</span>
      <span>Radio</span>
      <span>Library</span>
    </div>
    <div class="user-deck">
      <span class="vip-pill">⭐ VIP PASS</span>
      <span>🎧 Alex</span>
    </div>
  </header>

  <div class="spa-body">
    <aside class="spa-sidebar">
      <h4>Playlists</h4>
      <div>⚡ Synthwave</div>
      <div>🚀 Lo-Fi Chill</div>
      <div>🎮 Gaming OST</div>
      <div>💎 Cyber Beats</div>
    </aside>

    <main class="spa-content">
      <div class="hero-banner">
        <h3>⚡ Live Cyber Station</h3>
        <p>Streaming high-tempo coding synth to 12,400 listeners worldwide.</p>
      </div>

      <div class="track-row">
        <div class="track-card"><b>Neon Horizon</b><span>3:42 • CyberBoy</span></div>
        <div class="track-card"><b>Laser Grid</b><span>4:15 • PixelQueen</span></div>
        <div class="track-card"><b>Dark Orbit</b><span>2:58 • SynthLord</span></div>
      </div>
    </main>
  </div>

  <footer class="spa-player">
    <div class="player-track">▶ Now Playing: Neon Horizon (3:42)</div>
    <div class="player-controls">
      <span>⏮️</span>
      <span>⏯️</span>
      <span>⏭️</span>
    </div>
    <div class="player-vol">🔊 85%</div>
  </footer>
</div>`
    },
    targetDescription: {
      en: 'A complete CyberPulse Music SPA with 3 flexbox layouts applied: topbar navigation, horizontal track cards with gap, and bottom player controls with space-between.',
      uz: '3 ta joyda Flexbox qoidalari qo\'llangan to\'liq CyberPulse musiqiy SPA ilovasi: yuqori navigatsiya paneli, oraliqli qo\'shiq kartalari va ikki chetga surilgan pastki pleyer.'
    },
    anatomy: [
      {
        part: 'display: flex;',
        role: { en: 'Flex Activation', uz: 'Flexni faollashtirish' },
        explanation: { en: 'Tells the container: "Snap all children into a horizontal row!" Used across navbar, cards, and player!', uz: 'Konteynerga: "Barcha bolalarni gorizontal qatorga tiz!" deb buyuradi. Menyu, kartalar va pleyerda ishlatiladi!' },
        effect: { en: 'Snaps items side-by-side', uz: 'Elementlarni yonma-yon teradi' }
      },
      {
        part: 'justify-content: space-between;',
        role: { en: 'Distribute Across Width', uz: 'Kenglik bo\'yicha taqsimlash' },
        explanation: { en: 'Pushes first item to start and last item to end with maximum space between.', uz: 'Birinchi elementni chap chetga, oxirgisini o\'ng chetga suradi.' },
        effect: { en: 'Max separation across horizontal axis', uz: 'Chetlarga surib o\'rtani bo\'shatadi' }
      },
      {
        part: 'align-items: center;',
        role: { en: 'Vertical Centering', uz: 'Vertikal tekislash' },
        explanation: { en: 'Centers all children along the cross-axis so tall buttons and short text align smoothly.', uz: 'Barcha elementlarni vertikal markaz chizig\'iga tekislaydi.' },
        effect: { en: 'Perfect vertical alignment', uz: 'Mukammal vertikal tekislanish' }
      },
      {
        part: 'gap: 12px;',
        role: { en: 'Flex Gutter', uz: 'Flex Oralig\'i' },
        explanation: { en: 'Leaves consistent spacing between cards in a flex row without messy margins.', uz: 'Kartochkalar orasida toza bir xil masofa qoldiradi.' },
        effect: { en: 'Clean gutters between items', uz: 'Elementlar orasidagi toza masofa' }
      }
    ],
    listOfTags: [
      { code: 'display: flex;', name: { en: 'Flex Container', uz: 'Flex Idish' }, description: { en: 'Lines up child items horizontally in one unified row', uz: 'Ichidagi bolalarni bir qatorga yonma-yon teradi' } },
      { code: 'justify-content: space-between;', name: { en: 'Space Between', uz: 'Chetlarga surish' }, description: { en: 'Distributes items with maximum space between edges', uz: 'Elementlarni chetlarga tarqatadi' } },
      { code: 'align-items: center;', name: { en: 'Center Alignment', uz: 'Markazga tekislash' }, description: { en: 'Vertically aligns items in the exact center line', uz: 'Elementlarni balandlik bo\'yicha markazga suradi' } },
      { code: 'gap: 12px;', name: { en: 'Flex Gap', uz: 'Flex Oralig\'i' }, description: { en: 'Even space between flex items in a row', uz: 'Qatordagi elementlar orasidagi masofa' } }
    ],
    tagShowcase: [
      { tag: 'display: flex;', meaning: { en: 'Snap into row', uz: 'Qatorga tizish' } },
      { tag: 'justify-content: space-between;', meaning: { en: 'Push to opposite edges', uz: 'Chetlarga surish' } },
      { tag: 'align-items: center;', meaning: { en: 'Center vertically', uz: 'Vertikal markazlash' } },
      { tag: 'gap: 12px;', meaning: { en: 'Clean spacing', uz: 'Toza oraliq masofa' } }
    ],
    quickTags: ['display: flex;', 'justify-content: space-between;', 'align-items: center;', 'gap: 12px;'],
    challenge: {
      mission: {
        en: 'Build the CyberPulse Music SPA with 3 Flexbox layouts! 1) Add display: flex;, justify-content: space-between;, align-items: center; to .spa-navbar. 2) Add display: flex;, gap: 12px; to .track-row. 3) Add display: flex;, justify-content: space-between;, align-items: center; to .spa-player!',
        uz: 'CyberPulse Musiqa SPA sahifasida 3 ta alohida Flexbox joylashuvini quring! 1) .spa-navbar ga display: flex;, justify-content: space-between; va align-items: center; bering. 2) .track-row ga display: flex; va gap: 12px; yozing. 3) .spa-player ga display: flex;, justify-content: space-between; va align-items: center; yozing!'
      },
      hint: {
        en: 'Apply flexbox to .spa-navbar, .track-row, and .spa-player to assemble all 3 sections of the music app!',
        uz: '.spa-navbar, .track-row va .spa-player qismlariga flexbox qoidalarini qo\'shib butun ilovani terib chiqing.'
      },
      rules: [
        {
          type: 'custom',
          check: (code) => /\.spa-navbar\s*\{[^}]*display\s*:\s*flex/i.test(code) && /\.spa-navbar\s*\{[^}]*justify-content\s*:\s*space-between/i.test(code) && /\.spa-navbar\s*\{[^}]*align-items\s*:\s*center/i.test(code),
          message: 'Add display: flex; justify-content: space-between; align-items: center; to .spa-navbar!'
        },
        {
          type: 'custom',
          check: (code) => /\.track-row\s*\{[^}]*display\s*:\s*flex/i.test(code) && /\.track-row\s*\{[^}]*gap\s*:\s*12px/i.test(code),
          message: 'Add display: flex; and gap: 12px; to .track-row!'
        },
        {
          type: 'custom',
          check: (code) => /\.spa-player\s*\{[^}]*display\s*:\s*flex/i.test(code) && /\.spa-player\s*\{[^}]*justify-content\s*:\s*space-between/i.test(code) && /\.spa-player\s*\{[^}]*align-items\s*:\s*center/i.test(code),
          message: 'Add display: flex; justify-content: space-between; align-items: center; to .spa-player!'
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
        'Writing display: flex on individual buttons instead of the parent container',
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
    initialCode: {
      en: `<style>
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

  /* Step 2: Add .magic-btn:hover style below */
</style>

<div style="text-align: center; padding: 40px;">
  <!-- Step 1: Add <button class="magic-btn">✨ Turbo Boost</button> below -->

</div>`,
      uz: `<style>
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

  /* 2-Qadam: .magic-btn:hover uslubini pastda yozing */
</style>

<div style="text-align: center; padding: 40px;">
  <!-- 1-Qadam: <button class="magic-btn">✨ Turbo Boost</button> tugmasini qo'ying -->

</div>`
    },
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
    initialCode: {
      en: `<div style="padding: 20px; background: #141722; border-radius: 12px; color: white;">
  <h3>🌌 Galactic Portal Station</h3>
  <p>Welcome to my coding realm! Check out my favorite planetary archive:</p>

  <!-- Step 1: Wrap "Wikipedia" below inside <a href="https://wikipedia.org" target="_blank">Wikipedia</a> -->
  <p>Visit Wikipedia to learn anything!</p>
</div>`,
      uz: `<div style="padding: 20px; background: #141722; border-radius: 12px; color: white;">
  <h3>🌌 Galactic Portal Station</h3>
  <p>Dasturlash olamimga xush kelibsiz! Sevimli sayyoraviy bilimlar arxiviga ulaning:</p>

  <!-- 1-Qadam: Quyidagi "Wikipedia" so'zini <a href="https://wikipedia.org" target="_blank">Wikipedia</a> bilan o'rang -->
  <p>Visit Wikipedia to learn anything!</p>
</div>`
    },
    targetCode: `<div style="padding: 20px; background: #141722; border-radius: 12px; color: white;">
  <h3>🌌 Galactic Portal Station</h3>
  <p>Welcome to my coding realm! Check out my favorite planetary archive:</p>
  <p>Visit <a href="https://wikipedia.org" target="_blank">Wikipedia</a> to learn anything!</p>
</div>`,
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
    initialCode: {
      en: `<div style="padding: 20px; background: #141722; border-radius: 12px; color: white;">
  <h3>🕵️ Secret Agent Inventory</h3>
  <p>Equipped spy gear checklist:</p>

  <!-- Step 1: Wrap the 3 items below inside <ul> with <li> tags -->
  Laser Watch
  Invisible Cloak
  Jetpack Shoes
</div>`,
      uz: `<div style="padding: 20px; background: #141722; border-radius: 12px; color: white;">
  <h3>🕵️ Secret Agent Inventory</h3>
  <p>Ayg'oqchi anjomlari ro'yxati:</p>

  <!-- 1-Qadam: Quyidagi 3 ta anjomni <ul> va <li> teglari orqali ro'yxatga oling -->
  Laser Watch
  Invisible Cloak
  Jetpack Shoes
</div>`
    },
    targetCode: `<div style="padding: 20px; background: #141722; border-radius: 12px; color: white;">
  <h3>🕵️ Secret Agent Inventory</h3>
  <p>Equipped spy gear checklist:</p>
  <ul>
    <li>Laser Watch</li>
    <li>Invisible Cloak</li>
    <li>Jetpack Shoes</li>
  </ul>
</div>`,
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
  // THEME 13: Colors & Styling
  // ==========================================
  {
    id: 'theme-13-colors',
    module: 'css-core',
    title: {
      en: 'Theme 13: CSS Colors (HEX, RGB, Transparency & Accents)',
      uz: '13-Mavzu: CSS Ranglari (HEX, RGB, Shaffoflik va Ranglar Tizimi)'
    },
    icon: '🎨',
    tag: 'color: #hex; background: rgba(); border-color;',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, CSS colors give character and personality to web interfaces! Professional designers never use just one flat color. They combine **HEX codes** (#38bdf8), **transparent RGB alphas** (rgba(56, 189, 248, 0.15)), and glowing borders into harmonious color palettes.',
        uz: "Oddiy inson tilida, CSS ranglari veb-sahifaga joziba va ruh bag'ishlaydi! Tajribali dasturchilar hech qachon bitta oddiy rang bilan cheklanmaydi. Ular **HEX kodlari** (#38bdf8), **shaffof RGB ranglar** (rgba(56, 189, 248, 0.15)) va neon hoshiyalarni bir-biriga moslab mukammal palitra tuzadilar."
      },
      whatIsATag: {
        en: '1. `color: #38bdf8;` changes text font color.\n2. `background: rgba(56, 189, 248, 0.15);` creates a sleek frosted transparent glass background.\n3. `border: 2px solid #38bdf8;` paints a crisp neon perimeter frame.',
        uz: "1. `color: #38bdf8;` matn harflari rangini belgilaydi.\n2. `background: rgba(56, 189, 248, 0.15);` shaffof shishadek zamonaviy fon yaratadi.\n3. `border: 2px solid #38bdf8;` atrofiga yorqin neon ramka chizadi."
      }
    },
    summary: {
      en: 'Master HEX codes, RGBA transparency, and border color palettes on a cyberpunk identity badge.',
      uz: "HEX kodlari, RGBA shaffofligi va hoshiya ranglarini kiber nishon ustida amalda qo'llang."
    },
    story: {
      en: 'The Cyber Badge looks blank and unstyled! Style it using glowing cyan HEX text color, a transparent glass RGBA background, and a sharp solid border!',
      uz: "Kiber nishon rangsiz turibdi! Unga neon moviy HEX matn rangi, shaffof RGBA foni va mustahkam hoshiya rangini berib jonlantiring!"
    },
    initialCode: `<style>
  .color-badge {
    width: 280px;
    padding: 20px;
    border-radius: 14px;
    font-family: system-ui, sans-serif;
    text-align: center;
    margin: 0 auto;

    /* 1-Qadam: Matn rangini moviy HEX qiling: color: #38bdf8; */
    color: white;

    /* 2-Qadam: Shaffof oyna foni bering: background: rgba(56, 189, 248, 0.12); */
    background: #111827;

    /* 3-Qadam: Neon hoshiya bering: border: 2px solid #38bdf8; */
    border: 1px solid #374151;
  }
</style>

<div style="display: flex; justify-content: center; padding: 20px;">
  <div class="color-badge">
    <h3>⚡ CYBER OPERATOR</h3>
    <p>Color Palette: HEX + RGBA Transparency</p>
  </div>
</div>`,
    targetCode: `<style>
  .color-badge {
    width: 280px;
    padding: 20px;
    border-radius: 14px;
    font-family: system-ui, sans-serif;
    text-align: center;
    margin: 0 auto;
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.12);
    border: 2px solid #38bdf8;
  }
</style>

<div style="display: flex; justify-content: center; padding: 20px;">
  <div class="color-badge">
    <h3>⚡ CYBER OPERATOR</h3>
    <p>Color Palette: HEX + RGBA Transparency</p>
  </div>
</div>`,
    targetDescription: {
      en: 'A high-tech cyber operator badge painted with cyan HEX typography (#38bdf8), frosted RGBA background, and neon perimeter border.',
      uz: "Moviy HEX matn (#38bdf8), shaffof RGBA foni va neon hoshiyasi bilan bezatilgan kiber operator nishoni."
    },
    anatomy: [
      {
        part: 'color: #38bdf8;',
        role: { en: 'HEX Font Color', uz: 'HEX Matn Rangi' },
        explanation: { en: 'Sets text color using a 6-digit hex code.', uz: "6 xonali hex kodi orqali harflar rangini belgilaydi." },
        effect: { en: 'Vibrant cyan typography', uz: 'Yorqin moviy harflar' }
      },
      {
        part: 'background: rgba(...);',
        role: { en: 'RGBA Transparency', uz: 'RGBA Shaffofligi' },
        explanation: { en: 'Sets background with an alpha transparency channel.', uz: "Oxirgi alpha qiymati orqali fonni shaffof qilib chizadi." },
        effect: { en: 'Frosted glass look', uz: 'Muzdek shaffof fon' }
      },
      {
        part: 'border: 2px solid #38bdf8;',
        role: { en: 'Border Color', uz: 'Hoshiya Rangi' },
        explanation: { en: 'Paints the enclosing outline in matching neon cyan.', uz: "Tashqi chegarani mos neon rang bilan o'raydi." },
        effect: { en: 'Neon outline', uz: 'Neon hoshiya' }
      }
    ],
    listOfTags: [
      { code: 'color: #hex', name: 'Text Color', description: 'Sets the font color' },
      { code: 'background: rgba(r,g,b,a)', name: 'RGBA Color', description: 'Color with transparency' },
      { code: 'border: 2px solid #hex', name: 'Border Color', description: 'Sets outline color' }
    ],
    tagShowcase: [
      { tag: 'color: #38bdf8;', meaning: { en: 'Font color', uz: 'Matn rangi' } },
      { tag: 'background: rgba(...)', meaning: { en: 'Transparent glass', uz: 'Shaffof shisha' } },
      { tag: 'border: 2px solid ...', meaning: { en: 'Border frame', uz: 'Hoshiya ramkasi' } }
    ],
    quickTags: ['color: #38bdf8;', 'background: rgba(56, 189, 248, 0.12);', 'border: 2px solid #38bdf8;'],
    challenge: {
      mission: {
        en: 'Style .color-badge: set color to #38bdf8, background to rgba(56, 189, 248, 0.12), and border to 2px solid #38bdf8!',
        uz: ".color-badge ni bezang: color ni #38bdf8 qiling, background ni rgba(56, 189, 248, 0.12) qiling va border ni 2px solid #38bdf8 bering!"
      },
      hint: {
        en: 'Write color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 2px solid #38bdf8; inside .color-badge.',
        uz: ".color-badge ichiga color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 2px solid #38bdf8; yozing."
      },
      rules: [
        {
          type: 'hasCssProperty',
          property: 'color',
          valuePattern: /#38bdf8|38bdf8/i,
          message: 'Set color: #38bdf8 on .color-badge!'
        },
        {
          type: 'hasCssProperty',
          property: 'background',
          valuePattern: /rgba/i,
          message: 'Set background with rgba(...) on .color-badge!'
        },
        {
          type: 'hasCssProperty',
          property: 'border',
          valuePattern: /solid/i,
          message: 'Set border: 2px solid #38bdf8 on .color-badge!'
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
    initialCode: {
      en: `<style>
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

    /* Step 2: Shape avatar into circle using border-radius: 50%; */
  }
</style>

<div class="profile-badge">
  <!-- Step 1: Put <div class="avatar">🦊</div> here -->

  <h3 style="color: white; margin: 0;">Fox Champion</h3>
  <p style="color: #94a3b8; font-size: 13px;">Level 50 Master</p>
</div>`,
      uz: `<style>
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

    /* 2-Qadam: border-radius: 50%; bilan avatarni aylana qiling */
  }
</style>

<div class="profile-badge">
  <!-- 1-Qadam: Bu yerga <div class="avatar">🦊</div> avatarni qo'ying -->

  <h3 style="color: white; margin: 0;">Fox Champion</h3>
  <p style="color: #94a3b8; font-size: 13px;">Level 50 Master</p>
</div>`
    },
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
    initialCode: {
      en: `<div style="padding: 24px; background: #141722; border-radius: 12px; color: white;">
  <h3>🎮 Hero Registration</h3>
  <p>Type your player nickname below:</p>

  <!-- Step 1: Add <input type="text" placeholder="Enter Hero Name"> below -->

</div>`,
      uz: `<div style="padding: 24px; background: #141722; border-radius: 12px; color: white;">
  <h3>🎮 Hero Registration</h3>
  <p>Quyida o'yinchi laqabini kiriting:</p>

  <!-- 1-Qadam: Quyiga <input type="text" placeholder="Enter Hero Name"> qo'shing -->

</div>`
    },
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
    initialCode: {
      en: `<div style="padding: 24px; text-align: center; color: white; background: #141722; border-radius: 12px;">
  <h3>🎧 Cyber DJ Sound Deck</h3>
  <p>The cockpit is dead silent! Place an audio player below with controls so the pilot can play the soundtrack!</p>

  <!-- Step 1: Put <audio src="https://actions.google.com/sounds/v1/science_fiction/alien_hum.ogg"> below -->
  <!-- Step 2: Add controls attribute so Play/Pause buttons appear -->

</div>`,
      uz: `<div style="padding: 24px; text-align: center; color: white; background: #141722; border-radius: 12px;">
  <h3>🎧 Cyber DJ Sound Deck</h3>
  <p>Kosmik kabina jimjit bo'lib qoldi! Pilot musiqa tinglashi uchun pleyer qo'ying!</p>

  <!-- 1-Qadam: Quyiga <audio src="https://actions.google.com/sounds/v1/science_fiction/alien_hum.ogg"> qo'ying -->
  <!-- 2-Qadam: controls atributini qo'shing, shunda Play/Pause tugmalari ko'rinadi -->

</div>`
    },
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
        en: `1. \`display: grid;\` activates the 2D layout matrix.\n2. \`grid-template-columns: 200px 1fr 1fr;\` creates a dedicated sidebar column and two responsive content columns.\n3. \`gap: 16px;\` leaves clean breathing room between all cards.\n4. \`grid-column: 1 / -1;\` stretches headers and footers across the full grid!\n5. \`grid-column: span 2;\` lets a featured hero game banner expand across 2 content columns!`,
        uz: `1. \`display: grid;\` — 2D panjara rejimini yoqadi.\n2. \`grid-template-columns: 200px 1fr 1fr;\` — 200px yon panel va 2 ta teng moslashuvchan ustun hosil qiladi.\n3. \`gap: 16px;\` — barcha panellar orasida toza oraliq qoldiradi.\n4. \`grid-column: 1 / -1;\` — sarlavha va futerni butun panjara bo\'ylab to\'liq yoyadi!\n5. \`grid-column: span 2;\` — bosh o\'yin kartasini 2 ta ustunga cho\'zadi!`
      }
    },
    summary: {
      en: 'Build a full 2D game store launcher SPA with display: grid, multi-column template, full-width header spanning, and hero card column spanning.',
      uz: 'display: grid, ko\'p ustunli shablon, sarlavhani to\'liq cho\'zish (1 / -1) va asosiy banner kartasini kengaytirish (span 2) orqali to\'liq 2D o\'yin do\'koni SPA sahifasini quring.'
    },
    story: {
      en: 'The CyberStore Gaming SPA needs a complete dashboard: structure the 2D matrix, span the header across all columns, span the hero release across 2 columns, and span the footer across all columns!',
      uz: 'CyberStore O\'yinlar SPA ilovasiga to\'liq boshqaruv paneli kerak: 2D panjarani yoqing, sarlavhani barcha ustunlarga cho\'zing, bosh o\'yin kartasini 2 ta ustunga kengaytiring va futerni to\'liq yoying!'
    },
    initialCode: {
      en: `<style>
  * { box-sizing: border-box; }

  /* Step 1: Turn into 2D matrix: display: grid; grid-template-columns: 200px 1fr 1fr; gap: 16px; */
  .spa-grid {
    background: #0b0f19;
    padding: 18px;
    border-radius: 16px;
    border: 1px solid #1e293b;
    color: white;
    font-family: system-ui, sans-serif;
  }

  /* Step 2: Span the header across all columns with grid-column: 1 / -1; */
  .spa-header {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 14px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .spa-sidebar {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 16px;
  }

  /* Step 3: Expand featured hero card across 2 columns with grid-column: span 2; */
  .featured-card {
    background: linear-gradient(135deg, #1e1b4b, #3730a3);
    border: 1px solid #6366f1;
    border-radius: 12px;
    padding: 20px;
  }

  .game-card {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 16px;
  }

  /* Step 4: Span the footer across all columns with grid-column: 1 / -1; */
  .spa-footer {
    background: #111827;
    border-radius: 10px;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #94a3b8;
  }
</style>

<div class="spa-grid">
  <header class="spa-header">
    <div style="font-weight: 800; color: #38bdf8;">🎮 CyberStore Launcher SPA</div>
    <div style="font-size: 13px; color: #94a3b8;">Commander Alex • 💎 1,450 XP</div>
  </header>

  <aside class="spa-sidebar">
    <h4 style="margin: 0 0 10px 0; color: #38bdf8; font-size: 12px;">CATEGORIES</h4>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🔥 Action RPG</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🏎️ Sci-Fi Racing</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🧪 Strategy Lab</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🛡️ Tower Defense</div>
  </aside>

  <div class="featured-card">
    <span style="background: #ec4899; color: white; font-size: 10px; padding: 2px 8px; border-radius: 4px; font-weight: bold;">FEATURED RELEASE</span>
    <h2 style="margin: 8px 0 4px 0; color: #ffffff;">Cyber Odyssey 2099</h2>
    <p style="margin: 0 0 12px 0; font-size: 12px; color: #c7d2fe;">Lead your starfleet across infinite procedurally generated galactic frontiers.</p>
    <button style="background: #6366f1; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;">🚀 PLAY NOW</button>
  </div>

  <div class="game-card">
    <h3 style="margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;">🗡️ Shadow Blade</h3>
    <p style="margin: 0; font-size: 12px; color: #94a3b8;">Cyber Ninja Action</p>
  </div>

  <div class="game-card">
    <h3 style="margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;">🏎️ Turbo Horizon</h3>
    <p style="margin: 0; font-size: 12px; color: #94a3b8;">Neon Street Racing</p>
  </div>

  <footer class="spa-footer">
    <span>🟢 Online Players: 14,820</span>
    <span>⚡ Ping: 18ms (Tashkent Central)</span>
    <span>Version 2.4.0 SPA</span>
  </footer>
</div>`,
      uz: `<style>
  * { box-sizing: border-box; }

  /* 1-Qadam: .spa-grid ni 2D panjara qiling: display: grid; grid-template-columns: 200px 1fr 1fr; gap: 16px; */
  .spa-grid {
    background: #0b0f19;
    padding: 18px;
    border-radius: 16px;
    border: 1px solid #1e293b;
    color: white;
    font-family: system-ui, sans-serif;
  }

  /* 2-Qadam: Sarlavhani barcha ustunlar bo'ylab yoying: grid-column: 1 / -1; */
  .spa-header {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 14px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .spa-sidebar {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 16px;
  }

  /* 3-Qadam: Bosh o'yin kartasini 2 ta ustunga cho'zing: grid-column: span 2; */
  .featured-card {
    background: linear-gradient(135deg, #1e1b4b, #3730a3);
    border: 1px solid #6366f1;
    border-radius: 12px;
    padding: 20px;
  }

  .game-card {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 16px;
  }

  /* 4-Qadam: Futerni barcha ustunlar bo'ylab yoying: grid-column: 1 / -1; */
  .spa-footer {
    background: #111827;
    border-radius: 10px;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #94a3b8;
  }
</style>

<div class="spa-grid">
  <header class="spa-header">
    <div style="font-weight: 800; color: #38bdf8;">🎮 CyberStore Launcher SPA</div>
    <div style="font-size: 13px; color: #94a3b8;">Commander Alex • 💎 1,450 XP</div>
  </header>

  <aside class="spa-sidebar">
    <h4 style="margin: 0 0 10px 0; color: #38bdf8; font-size: 12px;">CATEGORIES</h4>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🔥 Action RPG</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🏎️ Sci-Fi Racing</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🧪 Strategy Lab</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🛡️ Tower Defense</div>
  </aside>

  <div class="featured-card">
    <span style="background: #ec4899; color: white; font-size: 10px; padding: 2px 8px; border-radius: 4px; font-weight: bold;">FEATURED RELEASE</span>
    <h2 style="margin: 8px 0 4px 0; color: #ffffff;">Cyber Odyssey 2099</h2>
    <p style="margin: 0 0 12px 0; font-size: 12px; color: #c7d2fe;">Lead your starfleet across infinite procedurally generated galactic frontiers.</p>
    <button style="background: #6366f1; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;">🚀 PLAY NOW</button>
  </div>

  <div class="game-card">
    <h3 style="margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;">🗡️ Shadow Blade</h3>
    <p style="margin: 0; font-size: 12px; color: #94a3b8;">Cyber Ninja Action</p>
  </div>

  <div class="game-card">
    <h3 style="margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;">🏎️ Turbo Horizon</h3>
    <p style="margin: 0; font-size: 12px; color: #94a3b8;">Neon Street Racing</p>
  </div>

  <footer class="spa-footer">
    <span>🟢 Online Players: 14,820</span>
    <span>⚡ Ping: 18ms (Tashkent Central)</span>
    <span>Version 2.4.0 SPA</span>
  </footer>
</div>`
    },
    targetCode: {
      en: `<style>
  * { box-sizing: border-box; }
  .spa-grid {
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
    gap: 16px;
    background: #0b0f19;
    padding: 18px;
    border-radius: 16px;
    border: 1px solid #1e293b;
    color: white;
    font-family: system-ui, sans-serif;
  }
  .spa-header {
    grid-column: 1 / -1;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 14px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .spa-sidebar {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 16px;
  }
  .featured-card {
    grid-column: span 2;
    background: linear-gradient(135deg, #1e1b4b, #3730a3);
    border: 1px solid #6366f1;
    border-radius: 12px;
    padding: 20px;
  }
  .game-card {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 16px;
  }
  .spa-footer {
    grid-column: 1 / -1;
    background: #111827;
    border-radius: 10px;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #94a3b8;
  }
</style>

<div class="spa-grid">
  <header class="spa-header">
    <div style="font-weight: 800; color: #38bdf8;">🎮 CyberStore Launcher SPA</div>
    <div style="font-size: 13px; color: #94a3b8;">Commander Alex • 💎 1,450 XP</div>
  </header>

  <aside class="spa-sidebar">
    <h4 style="margin: 0 0 10px 0; color: #38bdf8; font-size: 12px;">CATEGORIES</h4>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🔥 Action RPG</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🏎️ Sci-Fi Racing</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🧪 Strategy Lab</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🛡️ Tower Defense</div>
  </aside>

  <div class="featured-card">
    <span style="background: #ec4899; color: white; font-size: 10px; padding: 2px 8px; border-radius: 4px; font-weight: bold;">FEATURED RELEASE</span>
    <h2 style="margin: 8px 0 4px 0; color: #ffffff;">Cyber Odyssey 2099</h2>
    <p style="margin: 0 0 12px 0; font-size: 12px; color: #c7d2fe;">Lead your starfleet across infinite procedurally generated galactic frontiers.</p>
    <button style="background: #6366f1; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;">🚀 PLAY NOW</button>
  </div>

  <div class="game-card">
    <h3 style="margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;">🗡️ Shadow Blade</h3>
    <p style="margin: 0; font-size: 12px; color: #94a3b8;">Cyber Ninja Action</p>
  </div>

  <div class="game-card">
    <h3 style="margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;">🏎️ Turbo Horizon</h3>
    <p style="margin: 0; font-size: 12px; color: #94a3b8;">Neon Street Racing</p>
  </div>

  <footer class="spa-footer">
    <span>🟢 Online Players: 14,820</span>
    <span>⚡ Ping: 18ms (Tashkent Central)</span>
    <span>Version 2.4.0 SPA</span>
  </footer>
</div>`,
      uz: `<style>
  * { box-sizing: border-box; }
  .spa-grid {
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
    gap: 16px;
    background: #0b0f19;
    padding: 18px;
    border-radius: 16px;
    border: 1px solid #1e293b;
    color: white;
    font-family: system-ui, sans-serif;
  }
  .spa-header {
    grid-column: 1 / -1;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 14px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .spa-sidebar {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 16px;
  }
  .featured-card {
    grid-column: span 2;
    background: linear-gradient(135deg, #1e1b4b, #3730a3);
    border: 1px solid #6366f1;
    border-radius: 12px;
    padding: 20px;
  }
  .game-card {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 16px;
  }
  .spa-footer {
    grid-column: 1 / -1;
    background: #111827;
    border-radius: 10px;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #94a3b8;
  }
</style>

<div class="spa-grid">
  <header class="spa-header">
    <div style="font-weight: 800; color: #38bdf8;">🎮 CyberStore Launcher SPA</div>
    <div style="font-size: 13px; color: #94a3b8;">Commander Alex • 💎 1,450 XP</div>
  </header>

  <aside class="spa-sidebar">
    <h4 style="margin: 0 0 10px 0; color: #38bdf8; font-size: 12px;">CATEGORIES</h4>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🔥 Action RPG</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🏎️ Sci-Fi Racing</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🧪 Strategy Lab</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🛡️ Tower Defense</div>
  </aside>

  <div class="featured-card">
    <span style="background: #ec4899; color: white; font-size: 10px; padding: 2px 8px; border-radius: 4px; font-weight: bold;">FEATURED RELEASE</span>
    <h2 style="margin: 8px 0 4px 0; color: #ffffff;">Cyber Odyssey 2099</h2>
    <p style="margin: 0 0 12px 0; font-size: 12px; color: #c7d2fe;">Lead your starfleet across infinite procedurally generated galactic frontiers.</p>
    <button style="background: #6366f1; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;">🚀 PLAY NOW</button>
  </div>

  <div class="game-card">
    <h3 style="margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;">🗡️ Shadow Blade</h3>
    <p style="margin: 0; font-size: 12px; color: #94a3b8;">Cyber Ninja Action</p>
  </div>

  <div class="game-card">
    <h3 style="margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;">🏎️ Turbo Horizon</h3>
    <p style="margin: 0; font-size: 12px; color: #94a3b8;">Neon Street Racing</p>
  </div>

  <footer class="spa-footer">
    <span>🟢 Online Players: 14,820</span>
    <span>⚡ Ping: 18ms (Tashkent Central)</span>
    <span>Version 2.4.0 SPA</span>
  </footer>
</div>`
    },
    targetDescription: {
      en: 'A full-scale CyberStore launcher SPA featuring a 2D grid matrix, full-width header (1 / -1), wide 2-column hero game banner (span 2), and full-width footer.',
      uz: '2D panjara tizimi, to\'liq cho\'zilgan sarlavha (1 / -1), 2 ta ustunni egallagan keng banner (span 2) va to\'liq futerga ega CyberStore o\'yin do\'koni SPA sahifasi.'
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
        part: 'grid-column: 1 / -1;',
        role: { en: 'Full Width Span', uz: 'To\'liq Kenglikka Cho\'zish' },
        explanation: { en: 'Forces an element to start at line 1 and stretch across the entire grid to the end line.', uz: 'Elementni 1-chiziqdan boshlab eng oxirgi chiziqqacha to\'liq yoyadi.' },
        effect: { en: 'Full width spanning block', uz: 'To\'liq eni bo\'ylab yoyilish' }
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
      { code: 'grid-column: 1 / -1;', name: { en: 'Full-Width Span', uz: 'To\'liq Ustun Cho\'zish' }, description: { en: 'Stretches an element across all grid tracks from first to last line', uz: 'Elementni butun panjara bo\'ylab boshidan oxirigacha cho\'zadi' } },
      { code: 'grid-column: span 2;', name: { en: 'Span 2 Columns', uz: '2 Ustun Egallash' }, description: { en: 'Causes an element to stretch across 2 columns', uz: 'Elementni 2 ta ustun bo\'ylab cho\'zadi' } }
    ],
    tagShowcase: [
      { tag: 'display: grid;', meaning: { en: 'Enable 2D Grid', uz: '2D panjarani yoqish' } },
      { tag: 'grid-template-columns: 200px 1fr 1fr;', meaning: { en: 'Sidebar + 2 Columns', uz: 'Yon panel + 2 ta ustun' } },
      { tag: 'grid-column: 1 / -1;', meaning: { en: 'Full Width Span', uz: 'To\'liq eniga cho\'zish' } },
      { tag: 'grid-column: span 2;', meaning: { en: 'Span 2 Columns', uz: '2 ta ustunni egallash' } }
    ],
    quickTags: ['display: grid;', 'grid-template-columns: 200px 1fr 1fr;', 'gap: 16px;', 'grid-column: 1 / -1;', 'grid-column: span 2;'],
    challenge: {
      mission: {
        en: 'Build the CyberStore Launcher SPA with 4 Grid operations! 1) Add display: grid;, grid-template-columns: 200px 1fr 1fr;, gap: 16px; to .spa-grid. 2) Add grid-column: 1 / -1; to .spa-header. 3) Add grid-column: span 2; to .featured-card. 4) Add grid-column: 1 / -1; to .spa-footer!',
        uz: 'CyberStore O\'yinlar Do\'koni SPA sahifasida 4 ta Grid amalini bajaring! 1) .spa-grid ga display: grid;, grid-template-columns: 200px 1fr 1fr; va gap: 16px; bering. 2) .spa-header ga grid-column: 1 / -1; yozing. 3) .featured-card ga grid-column: span 2; bering. 4) .spa-footer ga grid-column: 1 / -1; yozing!'
      },
      hint: {
        en: 'Configure the grid container on .spa-grid, then span the header with grid-column: 1 / -1;, the hero card with grid-column: span 2;, and the footer with grid-column: 1 / -1;',
        uz: '.spa-grid da panjarani yoqing, .spa-header ga grid-column: 1 / -1;, .featured-card ga grid-column: span 2; va .spa-footer ga grid-column: 1 / -1; bering.'
      },
      rules: [
        {
          type: 'custom',
          check: (code) => /\.spa-grid\s*\{[^}]*display\s*:\s*grid/i.test(code) && /\.spa-grid\s*\{[^}]*grid-template-columns\s*:\s*200px/i.test(code) && /\.spa-grid\s*\{[^}]*gap\s*:\s*16px/i.test(code),
          message: 'Add display: grid;, grid-template-columns: 200px 1fr 1fr;, and gap: 16px; to .spa-grid!'
        },
        {
          type: 'custom',
          check: (code) => /\.spa-header\s*\{[^}]*grid-column\s*:\s*1\s*\/\s*-1/i.test(code),
          message: 'Add grid-column: 1 / -1; to .spa-header to span across all columns!'
        },
        {
          type: 'custom',
          check: (code) => /\.featured-card\s*\{[^}]*grid-column\s*:\s*span\s*2/i.test(code),
          message: 'Add grid-column: span 2; to .featured-card!'
        },
        {
          type: 'custom',
          check: (code) => /\.spa-footer\s*\{[^}]*grid-column\s*:\s*1\s*\/\s*-1/i.test(code),
          message: 'Add grid-column: 1 / -1; to .spa-footer to span across all columns!'
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
      en: 'Theme 22: CSS Positioning (Mission Defense SPA & All 5 Positions)',
      uz: '22-Mavzu: CSS Joylashuvi (Mudofaa SPA & Barcha 5 Xil Position Turlari)'
    },
    icon: '📍',
    tag: 'static, relative, absolute, fixed, sticky',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, **CSS Position** is the GPS coordinate system of web design! Real Single Page Applications coordinate **all 5 positions** together:\n\n• **static**: The natural default flow. Elements stack normally; top, left, and z-index are ignored.\n• **relative**: Remains in normal flow, but unlocks top/left offsets and acts as the **GPS fence (anchor)** for child elements.\n• **absolute**: Lifted completely out of document flow. Flies to exact top/right coordinates inside its nearest relative parent!\n• **fixed**: Ripped from the page and glued directly to the **screen viewport**. Stays frozen in place even when you scroll!\n• **sticky**: A magical hybrid! Behaves like relative until you scroll past it, then locks to the screen edge like fixed!',
        uz: 'Oddiy inson tilida, **CSS Position** — bu vebning GPS koordinata tizimidir! Haqiqiy SPA ilovalar **barcha 5 ta joylashuv turini** birgalikda ishlatadi:\n\n• **static**: Standart oqim. Elementlar odatdagidek joylashadi; top, left va z-index ishlamaydi.\n• **relative**: O\'z o\'rnida qoladi, lekin siljishlarni yoqadi va ichki bolalar uchun **GPS boshlang\'ich nuqtasi (devor)** bo\'ladi.\n• **absolute**: Oqimdan butunlay chiqadi. Eng yaqin relative ota element burchaklariga aniq top/right bilan mixlanadi!\n• **fixed**: Sahifadan ajralib, to\'g\'ridan-to\'g\'ri **ekran oynasiga** mixlanadi. Sahifani pastga aylantirsangiz ham joyidan qimirlamaydi!\n• **sticky**: Ajoyib gibrid! Odatda o\'z o\'rnida turadi, lekin sahifa surilganda ekran chetiga fixed kabi yopishib qoladi!'
      },
      whatIsATag: {
        en: `1. \`position: sticky;\` = Scrolls naturally, then locks to top edge.\n2. \`position: relative;\` = Parent GPS anchor frame (use multiple times!).\n3. \`position: absolute;\` = Precision corner pins (top/right, bottom/right).\n4. \`position: fixed;\` = Viewport screen-locked floating drone beacon.\n5. \`position: static;\` = Browser standard document reading flow.`,
        uz: `1. \`position: sticky;\` = Tabiiy suriladi va tepa chetga yopishib qoladi.\n2. \`position: relative;\` = Ota GPS chegara ramkasi (bir necha marta ishlatiladi!).\n3. \`position: absolute;\` = Burchakka aniq mixlanuvchi koordinata (top/right, bottom/right).\n4. \`position: fixed;\` = Ekran oynasiga mixlangan erkin uchuvchi dron.\n5. \`position: static;\` = Brauzerning standart matn oqimi.`
      }
    },
    summary: {
      en: 'Master all 5 CSS positions by actively coding sticky headers, multiple relative anchor cards, precision absolute corner badges, and a fixed drone beacon.',
      uz: 'Yopishqoq sarlavha, 2 ta nisbiy chegara kartasi, 2 ta burchakka mixlangan nishon va ekranga qadalgan dronni o\'z qo\'lingiz bilan yozib barcha 5 ta position turini o\'rganing.'
    },
    story: {
      en: 'The Mission Control Defense SPA is incomplete! You must actively configure sticky navigation, relative parent anchors on both cards, absolute corner pins for alerts and radar, and a fixed emergency drone beacon!',
      uz: 'Mudofaa SPA sahifasi to\'liq emas! Yopishqoq navigatsiyani, har ikkala karta uchun relative GPS devorlarini, signal va radar uchun absolute burchak nishonlarini hamda ekranga mixlangan dronni o\'zingiz kod yozib ishga tushiring!'
    },
    initialCode: {
      en: `<style>
  * { box-sizing: border-box; }
  .spa-command {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 20px;
    color: white;
    font-family: system-ui, sans-serif;
    min-height: 420px;
    position: relative;
  }

  /* Step 1: Make navbar stick to top edge during scroll: position: sticky; top: 0; */
  .sticky-navbar {
    z-index: 50;
    background: rgba(17, 24, 39, 0.95);
    border: 1px solid #1f2937;
    border-radius: 10px;
    padding: 12px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    backdrop-filter: blur(8px);
  }

  .spa-dashboard-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 20px;
  }

  /* Step 2: Make .shield-card the 1st GPS anchor fence using position: relative; */
  .shield-card {
    background: #1e1b4b;
    border: 2px solid #6366f1;
    border-radius: 12px;
    padding: 24px;
    text-align: center;
  }

  /* Step 3: Pin .alarm-badge to top-right corner: position: absolute; top: -10px; right: -10px; */
  .alarm-badge {
    background: #ef4444;
    color: white;
    font-weight: 800;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 11px;
    box-shadow: 0 0 12px rgba(239, 68, 68, 0.8);
  }

  /* Step 4: Make .radar-panel the 2nd GPS anchor fence using position: relative; */
  .radar-panel {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 24px;
  }

  /* Step 5: Pin .radar-blip to bottom-right corner: position: absolute; bottom: 10px; right: 10px; */
  .radar-blip {
    background: #10b981;
    color: #0b0f19;
    font-weight: 800;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 10px;
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.6);
  }

  /* Step 6: Glue .fixed-drone to viewport screen: position: fixed; bottom: 20px; right: 20px; */
  .fixed-drone {
    z-index: 100;
    background: #38bdf8;
    color: #0b0f19;
    font-weight: 800;
    font-size: 12px;
    padding: 10px 18px;
    border-radius: 999px;
    box-shadow: 0 4px 16px rgba(56, 189, 248, 0.5);
  }
</style>

<div class="spa-command">
  <!-- Sticky Navigation Header -->
  <nav class="sticky-navbar">
    <div style="font-weight: 800; color: #38bdf8;">🛰️ CyberCommand Defense SPA</div>
    <div style="font-size: 12px; color: #10b981;">● ALL SYSTEMS OPERATIONAL</div>
  </nav>

  <div class="spa-dashboard-grid">
    <div class="shield-card">
      <!-- Put 1st absolute badge here: <span class="alarm-badge">🔥 ALERT</span> -->

      <h3 style="margin: 0 0 6px 0; color: #a5b4fc;">Plasma Shield Matrix</h3>
      <p style="margin: 0; font-size: 13px; color: #cbd5e1;">Deflector barrier active at 98.4% capacity.</p>
    </div>

    <div class="radar-panel">
      <!-- Put 2nd absolute badge here: <span class="radar-blip">🟢 ACTIVE SCAN</span> -->

      <h3 style="margin: 0 0 6px 0; color: #38bdf8;">Tactical Sensor Log</h3>
      <p style="margin: 0; font-size: 13px; color: #94a3b8;">Scanning sector 7G. Zero hostile anomalies detected.</p>
    </div>
  </div>

  <!-- Screen-fixed Drone Beacon -->
  <div class="fixed-drone">🛸 DRONE SUPPORT</div>
</div>`,
      uz: `<style>
  * { box-sizing: border-box; }
  .spa-command {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 20px;
    color: white;
    font-family: system-ui, sans-serif;
    min-height: 420px;
    position: relative;
  }

  /* 1-Qadam: .sticky-navbar ni tepaga yopishqoq qilish uchun position: sticky; top: 0; yozing */
  .sticky-navbar {
    z-index: 50;
    background: rgba(17, 24, 39, 0.95);
    border: 1px solid #1f2937;
    border-radius: 10px;
    padding: 12px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    backdrop-filter: blur(8px);
  }

  .spa-dashboard-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 20px;
  }

  /* 2-Qadam: .shield-card ni 1-GPS chegara devori qilish uchun position: relative; bering */
  .shield-card {
    background: #1e1b4b;
    border: 2px solid #6366f1;
    border-radius: 12px;
    padding: 24px;
    text-align: center;
  }

  /* 3-Qadam: .alarm-badge ni burchakka mixlash uchun position: absolute; top: -10px; right: -10px; yozing */
  .alarm-badge {
    background: #ef4444;
    color: white;
    font-weight: 800;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 11px;
    box-shadow: 0 0 12px rgba(239, 68, 68, 0.8);
  }

  /* 4-Qadam: .radar-panel ga ham 2-GPS chegara devori: position: relative; bering */
  .radar-panel {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 24px;
  }

  /* 5-Qadam: .radar-blip ni pastki o'ng burchakka mixlash: position: absolute; bottom: 10px; right: 10px; */
  .radar-blip {
    background: #10b981;
    color: #0b0f19;
    font-weight: 800;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 10px;
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.6);
  }

  /* 6-Qadam: .fixed-drone ni ekran oynasiga mixlash uchun position: fixed; bottom: 20px; right: 20px; yozing */
  .fixed-drone {
    z-index: 100;
    background: #38bdf8;
    color: #0b0f19;
    font-weight: 800;
    font-size: 12px;
    padding: 10px 18px;
    border-radius: 999px;
    box-shadow: 0 4px 16px rgba(56, 189, 248, 0.5);
  }
</style>

<div class="spa-command">
  <!-- Sticky Navigation Header -->
  <nav class="sticky-navbar">
    <div style="font-weight: 800; color: #38bdf8;">🛰️ CyberCommand Defense SPA</div>
    <div style="font-size: 12px; color: #10b981;">● ALL SYSTEMS OPERATIONAL</div>
  </nav>

  <div class="spa-dashboard-grid">
    <div class="shield-card">
      <!-- 1-Nishonni shu yerga qo'ying: <span class="alarm-badge">🔥 ALERT</span> -->

      <h3 style="margin: 0 0 6px 0; color: #a5b4fc;">Plasma Shield Matrix</h3>
      <p style="margin: 0; font-size: 13px; color: #cbd5e1;">Deflector barrier active at 98.4% capacity.</p>
    </div>

    <div class="radar-panel">
      <!-- 2-Nishonni shu yerga qo'ying: <span class="radar-blip">🟢 ACTIVE SCAN</span> -->

      <h3 style="margin: 0 0 6px 0; color: #38bdf8;">Tactical Sensor Log</h3>
      <p style="margin: 0; font-size: 13px; color: #94a3b8;">Scanning sector 7G. Zero hostile anomalies detected.</p>
    </div>
  </div>

  <!-- Screen-fixed Drone Beacon -->
  <div class="fixed-drone">🛸 DRONE SUPPORT</div>
</div>`
    },
    targetCode: {
      en: `<style>
  * { box-sizing: border-box; }
  .spa-command {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 20px;
    color: white;
    font-family: system-ui, sans-serif;
    min-height: 420px;
    position: relative;
  }
  .sticky-navbar {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(17, 24, 39, 0.95);
    border: 1px solid #1f2937;
    border-radius: 10px;
    padding: 12px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    backdrop-filter: blur(8px);
  }
  .spa-dashboard-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 20px;
  }
  .shield-card {
    position: relative;
    background: #1e1b4b;
    border: 2px solid #6366f1;
    border-radius: 12px;
    padding: 24px;
    text-align: center;
  }
  .alarm-badge {
    position: absolute;
    top: -10px;
    right: -10px;
    background: #ef4444;
    color: white;
    font-weight: 800;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 11px;
    box-shadow: 0 0 12px rgba(239, 68, 68, 0.8);
  }
  .radar-panel {
    position: relative;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 24px;
  }
  .radar-blip {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: #10b981;
    color: #0b0f19;
    font-weight: 800;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 10px;
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.6);
  }
  .fixed-drone {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;
    background: #38bdf8;
    color: #0b0f19;
    font-weight: 800;
    font-size: 12px;
    padding: 10px 18px;
    border-radius: 999px;
    box-shadow: 0 4px 16px rgba(56, 189, 248, 0.5);
  }
</style>

<div class="spa-command">
  <nav class="sticky-navbar">
    <div style="font-weight: 800; color: #38bdf8;">🛰️ CyberCommand Defense SPA</div>
    <div style="font-size: 12px; color: #10b981;">● ALL SYSTEMS OPERATIONAL</div>
  </nav>

  <div class="spa-dashboard-grid">
    <div class="shield-card">
      <span class="alarm-badge">🔥 ALERT</span>
      <h3 style="margin: 0 0 6px 0; color: #a5b4fc;">Plasma Shield Matrix</h3>
      <p style="margin: 0; font-size: 13px; color: #cbd5e1;">Deflector barrier active at 98.4% capacity.</p>
    </div>

    <div class="radar-panel">
      <span class="radar-blip">🟢 ACTIVE SCAN</span>
      <h3 style="margin: 0 0 6px 0; color: #38bdf8;">Tactical Sensor Log</h3>
      <p style="margin: 0; font-size: 13px; color: #94a3b8;">Scanning sector 7G. Zero hostile anomalies detected.</p>
    </div>
  </div>

  <div class="fixed-drone">🛸 DRONE SUPPORT</div>
</div>`,
      uz: `<style>
  * { box-sizing: border-box; }
  .spa-command {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 20px;
    color: white;
    font-family: system-ui, sans-serif;
    min-height: 420px;
    position: relative;
  }
  .sticky-navbar {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(17, 24, 39, 0.95);
    border: 1px solid #1f2937;
    border-radius: 10px;
    padding: 12px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    backdrop-filter: blur(8px);
  }
  .spa-dashboard-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 20px;
  }
  .shield-card {
    position: relative;
    background: #1e1b4b;
    border: 2px solid #6366f1;
    border-radius: 12px;
    padding: 24px;
    text-align: center;
  }
  .alarm-badge {
    position: absolute;
    top: -10px;
    right: -10px;
    background: #ef4444;
    color: white;
    font-weight: 800;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 11px;
    box-shadow: 0 0 12px rgba(239, 68, 68, 0.8);
  }
  .radar-panel {
    position: relative;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 24px;
  }
  .radar-blip {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: #10b981;
    color: #0b0f19;
    font-weight: 800;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 10px;
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.6);
  }
  .fixed-drone {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;
    background: #38bdf8;
    color: #0b0f19;
    font-weight: 800;
    font-size: 12px;
    padding: 10px 18px;
    border-radius: 999px;
    box-shadow: 0 4px 16px rgba(56, 189, 248, 0.5);
  }
</style>

<div class="spa-command">
  <nav class="sticky-navbar">
    <div style="font-weight: 800; color: #38bdf8;">🛰️ CyberCommand Defense SPA</div>
    <div style="font-size: 12px; color: #10b981;">● ALL SYSTEMS OPERATIONAL</div>
  </nav>

  <div class="spa-dashboard-grid">
    <div class="shield-card">
      <span class="alarm-badge">🔥 ALERT</span>
      <h3 style="margin: 0 0 6px 0; color: #a5b4fc;">Plasma Shield Matrix</h3>
      <p style="margin: 0; font-size: 13px; color: #cbd5e1;">Deflector barrier active at 98.4% capacity.</p>
    </div>

    <div class="radar-panel">
      <span class="radar-blip">🟢 ACTIVE SCAN</span>
      <h3 style="margin: 0 0 6px 0; color: #38bdf8;">Tactical Sensor Log</h3>
      <p style="margin: 0; font-size: 13px; color: #94a3b8;">Scanning sector 7G. Zero hostile anomalies detected.</p>
    </div>
  </div>

  <div class="fixed-drone">🛸 DRONE SUPPORT</div>
</div>`
    },
    targetDescription: {
      en: 'A high-tech Defense SPA actively utilizing all 5 CSS positions: sticky navbar, 2 relative parent anchor cards, 2 absolute corner badges, and a screen-fixed floating drone beacon.',
      uz: 'Barcha 5 ta CSS position turlarini faol qo\'llovchi yuqori texnologiyali Mudofaa SPA sahifasi: yopishqoq sarlavha, 2 ta nisbiy ota karta, 2 ta burchakka mixlangan nishon va ekranga qadalgan dron.'
    },
    anatomy: [
      {
        part: 'position: sticky; top: 0;',
        role: { en: 'Sticky Horizon', uz: 'Yopishqoq Ufq' },
        explanation: { en: 'Scrolls naturally with content, then locks securely to the top edge.', uz: 'Sahifa bilan birga suriladi, chegara kelganda tepa chetga yopishib qoladi.' },
        effect: { en: 'Sticky navigation header', uz: 'Tepada qotib turuvchi panel' }
      },
      {
        part: 'position: relative;',
        role: { en: 'Parent GPS Anchor', uz: 'Ota GPS Devori' },
        explanation: { en: 'Establishes a coordinate boundary frame for absolute children. Used on both cards!', uz: 'Ichki absolute bolalar uchun GPS boshlang\'ich koordinata ramkasini o\'rnatadi.' },
        effect: { en: 'Boundary fence for pins', uz: 'Ichki nishonlar uchun chegara' }
      },
      {
        part: 'position: absolute;',
        role: { en: 'Precision Pin', uz: 'Aniq Burchak Mixi' },
        explanation: { en: 'Flies to exact top/right or bottom/right corner coordinates of its relative parent.', uz: 'Ota elementning top/right yoki bottom/right burchaklariga aniq mixlanadi.' },
        effect: { en: 'Pins badge over corner', uz: 'Nishonni burchakka mixlaydi' }
      },
      {
        part: 'position: fixed;',
        role: { en: 'Screen Viewport Lock', uz: 'Ekran Oynasiga Mixlash' },
        explanation: { en: 'Glues the element directly to the device screen window. Never moves during scroll.', uz: 'Elementni to\'g\'ridan-to\'g\'ri ekran oynasiga mixlaydi. Sahifa surilganda ham joyidan qimirlamaydi.' },
        effect: { en: 'Floating screen drone', uz: 'Ekran oynasida qotib turuvchi dron' }
      },
      {
        part: 'position: static;',
        role: { en: 'Default Flow', uz: 'Standart Oqim' },
        explanation: { en: 'Standard document reading order. Top, left, and z-index are ignored.', uz: 'Standart brauzer oqimi. Elementlar odatdagidek ketma-ket joylashadi.' },
        effect: { en: 'Natural document flow', uz: 'Odatiy matn kabi oqim' }
      }
    ],
    listOfTags: [
      { code: 'position: sticky; top: 0;', name: { en: 'Sticky Header', uz: 'Yopishqoq Panel' }, description: { en: 'Locks element to viewport top during scroll', uz: 'Sahifa surilganda tepa chetga yopishib qoladi' } },
      { code: 'position: relative;', name: { en: 'Relative Anchor', uz: 'Nisbiy Chegara' }, description: { en: 'Normal flow, creates anchor frame for absolute children', uz: 'O\'z o\'rnida turadi va absolute bolalari uchun GPS chegara bo\'ladi' } },
      { code: 'position: absolute;', name: { en: 'Absolute Pin', uz: 'Mutlaq Mix' }, description: { en: 'Pins to exact corner coordinates of nearest relative parent', uz: 'Eng yaqin relative ota blokning burchaklariga mixlanadi' } },
      { code: 'position: fixed;', name: { en: 'Fixed Viewport', uz: 'Ekranga Qadalgan' }, description: { en: 'Locks element to screen window regardless of scrolling', uz: 'Sahifa surilishidan qat\'i nazar ekran oynasiga mixlanadi' } },
      { code: 'position: static;', name: { en: 'Static Default', uz: 'Statik Oqim' }, description: { en: 'Default browser document flow; ignores top/left offsets', uz: 'Brauzerning odatiy oqimi; top va left buyruqlari ishlamaydi' } }
    ],
    tagShowcase: [
      { tag: 'position: sticky;', meaning: { en: 'Scroll then lock', uz: 'Suriladi va yopishadi' } },
      { tag: 'position: relative;', meaning: { en: 'Parent anchor fence', uz: 'Ota chegara devori' } },
      { tag: 'position: absolute;', meaning: { en: 'Corner coordinate pin', uz: 'Aniq burchak mixi' } },
      { tag: 'position: fixed;', meaning: { en: 'Glued to screen window', uz: 'Ekranga mixlangan' } }
    ],
    quickTags: ['position: sticky;', 'top: 0;', 'position: relative;', 'position: absolute;', 'top: -10px;', 'right: -10px;', 'bottom: 10px;', 'position: fixed;', 'bottom: 20px;', 'right: 20px;'],
    challenge: {
      mission: {
        en: 'Deploy all 5 positions in the Defense SPA! 1) Add position: sticky; top: 0; to .sticky-navbar. 2) Add position: relative; to .shield-card and .radar-panel. 3) Add position: absolute; top: -10px; right: -10px; to .alarm-badge. 4) Add position: absolute; bottom: 10px; right: 10px; to .radar-blip. 5) Add position: fixed; bottom: 20px; right: 20px; to .fixed-drone!',
        uz: 'Mudofaa SPA sahifasida barcha 5 ta positionni amalda qo\'llang! 1) .sticky-navbar ga position: sticky; top: 0; yozing. 2) .shield-card va .radar-panel ga position: relative; bering. 3) .alarm-badge ga position: absolute; top: -10px; right: -10px; yozing. 4) .radar-blip ga position: absolute; bottom: 10px; right: 10px; bering. 5) .fixed-drone ga position: fixed; bottom: 20px; right: 20px; yozing!'
      },
      hint: {
        en: 'Give .sticky-navbar position: sticky; top: 0; Give both .shield-card and .radar-panel position: relative; Give .alarm-badge position: absolute; top: -10px; right: -10px; Give .radar-blip position: absolute; bottom: 10px; right: 10px; Give .fixed-drone position: fixed; bottom: 20px; right: 20px;',
        uz: '.sticky-navbar ga position: sticky; top: 0;, .shield-card va .radar-panel ga position: relative;, .alarm-badge ga position: absolute; top: -10px; right: -10px;, .radar-blip ga position: absolute; bottom: 10px; right: 10px; va .fixed-drone ga position: fixed; bottom: 20px; right: 20px; yozing.'
      },
      rules: [
        {
          type: 'custom',
          check: (code) => /\.sticky-navbar\s*\{[^}]*position\s*:\s*sticky/i.test(code) && /\.sticky-navbar\s*\{[^}]*top\s*:\s*0/i.test(code),
          message: 'Add position: sticky; top: 0; to .sticky-navbar!'
        },
        {
          type: 'custom',
          check: (code) => /\.shield-card\s*\{[^}]*position\s*:\s*relative/i.test(code),
          message: 'Add position: relative; to .shield-card as the 1st GPS anchor boundary!'
        },
        {
          type: 'custom',
          check: (code) => /\.alarm-badge\s*\{[^}]*position\s*:\s*absolute/i.test(code) && /\.alarm-badge\s*\{[^}]*top\s*:\s*-10px/i.test(code),
          message: 'Add position: absolute; top: -10px; right: -10px; to .alarm-badge!'
        },
        {
          type: 'custom',
          check: (code) => /\.radar-panel\s*\{[^}]*position\s*:\s*relative/i.test(code),
          message: 'Add position: relative; to .radar-panel as the 2nd GPS anchor boundary!'
        },
        {
          type: 'custom',
          check: (code) => /\.radar-blip\s*\{[^}]*position\s*:\s*absolute/i.test(code) && /\.radar-blip\s*\{[^}]*bottom\s*:\s*10px/i.test(code),
          message: 'Add position: absolute; bottom: 10px; right: 10px; to .radar-blip!'
        },
        {
          type: 'custom',
          check: (code) => /\.fixed-drone\s*\{[^}]*position\s*:\s*fixed/i.test(code) && /\.fixed-drone\s*\{[^}]*bottom\s*:\s*20px/i.test(code),
          message: 'Add position: fixed; bottom: 20px; right: 20px; to .fixed-drone!'
        },
        {
          type: 'custom',
          check: (code) => /<span[^>]*class="[^"]*alarm-badge[^"]*"[^>]*>/i.test(code),
          message: 'Place the <span class="alarm-badge">🔥 ALERT</span> inside .shield-card!'
        },
        {
          type: 'custom',
          check: (code) => /<span[^>]*class="[^"]*radar-blip[^"]*"[^>]*>/i.test(code),
          message: 'Place the <span class="radar-blip">🟢 ACTIVE SCAN</span> inside .radar-panel!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'A military space station: .sticky-navbar is the radar screen locking to your eye line; .shield-card and .radar-panel are relative command pods; .alarm-badge and .radar-blip are absolute status lights pinned to their pods; and .fixed-drone is the support ship hovering outside your window!',
        uz: 'Harbiy koinot stansiyasi: .sticky-navbar ko\'z o\'ngingizda turuvchi yopishqoq panel; .shield-card va .radar-panel nisbiy komandir kabinalari; .alarm-badge va .radar-blip burchakka qadalgan absolute chiroqlar; .fixed-drone esa illyuminator ortida qadalgan yordamchi dron!'
      },
      discussionQuestions: [
        'Why does a child with position: absolute need its parent to have position: relative?',
        'How does position: sticky allow modern apps to keep navigation visible while scrolling?',
        'What is the difference between position: fixed (screen window) and position: absolute (parent container)?'
      ],
      commonMistakes: [
        'Forgetting position: relative on the parent container, causing absolute pins to jump to the page corner',
        'Confusing position: fixed with absolute',
        'Forgetting top: 0 on sticky elements'
      ],
      funActivity: 'Try scrolling inside the defense preview to see the sticky topbar stay locked at the top!'
    }
  },
  
  // ==========================================
  // THEME 23: Transitions & Animations
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
  .overflow-lab {
    display: flex;
    gap: 16px;
    background: #090d16;
    border: 1px solid #1e293b;
    border-radius: 14px;
    padding: 18px;
    color: white;
    font-family: system-ui, sans-serif;
  }
  .terminal-box {
    flex: 1;
    height: 140px;
    background: #0b0f19;
    border: 2px solid #38bdf8;
    border-radius: 10px;
    padding: 10px;
    font-size: 11px;
    font-family: monospace;
    /* 1-Qadam: overflow-y: auto; bering */
  }
  .weapons-deck {
    flex: 1;
    height: 140px;
    background: #0b0f19;
    border: 2px solid #a855f7;
    border-radius: 10px;
    padding: 10px;
    white-space: nowrap;
    /* 2-Qadam: overflow-x: auto; bering */
  }
  .id-badge {
    width: 140px;
    background: #111827;
    border: 1px solid #374151;
    border-radius: 8px;
    padding: 10px;
    font-size: 11px;
    white-space: nowrap;
    /* 3-Qadam: overflow: hidden; va text-overflow: ellipsis; bering */
  }
  .log-line {
    margin-bottom: 6px;
    padding: 4px 8px;
    background: rgba(56, 189, 248, 0.08);
    border-radius: 4px;
    border-left: 2px solid #38bdf8;
  }
  .weapon-chip {
    display: inline-block;
    padding: 6px 12px;
    background: rgba(168, 85, 247, 0.15);
    border: 1px solid #a855f7;
    border-radius: 6px;
    margin-right: 8px;
  }
</style>

<div class="overflow-lab">
  <div class="terminal-box">
    <div class="log-line">🛰️ SAT LINK: ON</div>
    <div class="log-line">⚡ REACTOR: 99%</div>
    <div class="log-line">👾 SIGNAL DETECTED</div>
    <div class="log-line">🛡️ SHIELD: ACTIVE</div>
    <div class="log-line">🚀 WARP READY</div>
  </div>

  <div class="weapons-deck">
    <span class="weapon-chip">⚔️ LASER BLADE</span>
    <span class="weapon-chip">⚡ PLASMA CANNON</span>
    <span class="weapon-chip">🛡️ TITAN SHIELD</span>
    <span class="weapon-chip">🌀 QUANTUM DISRUPTOR</span>
  </div>

  <div class="id-badge">
    <strong>AGENT_ALPHA_007_CLASSIFIED_TOP_SECRET</strong>
  </div>
</div>`,
    targetCode: `<style>
  .overflow-lab {
    display: flex;
    gap: 16px;
    background: #090d16;
    border: 1px solid #1e293b;
    border-radius: 14px;
    padding: 18px;
    color: white;
    font-family: system-ui, sans-serif;
  }
  .terminal-box {
    flex: 1;
    height: 140px;
    background: #0b0f19;
    border: 2px solid #38bdf8;
    border-radius: 10px;
    padding: 10px;
    font-size: 11px;
    font-family: monospace;
    overflow-y: auto;
  }
  .weapons-deck {
    flex: 1;
    height: 140px;
    background: #0b0f19;
    border: 2px solid #a855f7;
    border-radius: 10px;
    padding: 10px;
    white-space: nowrap;
    overflow-x: auto;
  }
  .id-badge {
    width: 140px;
    background: #111827;
    border: 1px solid #374151;
    border-radius: 8px;
    padding: 10px;
    font-size: 11px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .log-line {
    margin-bottom: 6px;
    padding: 4px 8px;
    background: rgba(56, 189, 248, 0.08);
    border-radius: 4px;
    border-left: 2px solid #38bdf8;
  }
  .weapon-chip {
    display: inline-block;
    padding: 6px 12px;
    background: rgba(168, 85, 247, 0.15);
    border: 1px solid #a855f7;
    border-radius: 6px;
    margin-right: 8px;
  }
</style>

<div class="overflow-lab">
  <div class="terminal-box">
    <div class="log-line">🛰️ SAT LINK: ON</div>
    <div class="log-line">⚡ REACTOR: 99%</div>
    <div class="log-line">👾 SIGNAL DETECTED</div>
    <div class="log-line">🛡️ SHIELD: ACTIVE</div>
    <div class="log-line">🚀 WARP READY</div>
  </div>

  <div class="weapons-deck">
    <span class="weapon-chip">⚔️ LASER BLADE</span>
    <span class="weapon-chip">⚡ PLASMA CANNON</span>
    <span class="weapon-chip">🛡️ TITAN SHIELD</span>
    <span class="weapon-chip">🌀 QUANTUM DISRUPTOR</span>
  </div>

  <div class="id-badge">
    <strong>AGENT_ALPHA_007_CLASSIFIED_TOP_SECRET</strong>
  </div>
</div>`,
    targetDescription: {
      en: 'A 3-part Cyber Overflow Deck: vertical terminal scrolling, horizontal weapon deck scrolling, and laser-trimmed text ellipsis on the badge!',
      uz: "3 qismli Kiber Overflow Dek: vertikal skroll bo'ladigan terminal, gorizontal qurollar karuseli va lazerdek qirqilgan agent nishoni!"
    },
    anatomy: [
      {
        code: 'overflow-y: auto;',
        name: { en: 'Vertical Scroll', uz: 'Vertikal Skroll' },
        purpose: { en: 'Scrolls vertically when logs exceed box height.', uz: "Xabarlar balandlikdan oshganda pastga skroll qiladi." },
        role: { en: 'Vertical elevator', uz: 'Vertikal lift' }
      },
      {
        code: 'overflow-x: auto;',
        name: { en: 'Horizontal Scroll', uz: 'Gorizontal Skroll' },
        purpose: { en: 'Scrolls horizontally for weapon cards.', uz: "Keng qurollar karuselini yonga skroll qiladi." },
        role: { en: 'Horizontal slider', uz: 'Gorizontal slayder' }
      },
      {
        code: 'overflow: hidden; text-overflow: ellipsis;',
        name: { en: 'Laser Crop with Ellipsis', uz: "Ko'p nuqta bilan lazerli qirqish" },
        purpose: { en: 'Cuts overflow cleanly and appends ...', uz: "Toshgan uzun matnni qirqib, oxiriga ... qo'yadi." },
        role: { en: 'Laser trimmer', uz: 'Lazer keskich' }
      }
    ],
    listOfTags: [
      { code: 'overflow-y: auto', name: 'Vertical Overflow', description: 'Scrolls vertically' },
      { code: 'overflow-x: auto', name: 'Horizontal Overflow', description: 'Scrolls horizontally' },
      { code: 'text-overflow: ellipsis', name: 'Ellipsis Crop', description: 'Appends ... to overflowing single line text' }
    ],
    quickTags: ['overflow-y: auto;', 'overflow-x: auto;', 'overflow: hidden; text-overflow: ellipsis;'],
    challenge: {
      mission: {
        en: 'Configure all 3 overflow modes: add overflow-y: auto to .terminal-box, overflow-x: auto to .weapons-deck, and text-overflow: ellipsis with overflow: hidden to .id-badge!',
        uz: "Barcha 3 xil overflow turini sozlang: .terminal-box ga overflow-y: auto, .weapons-deck ga overflow-x: auto va .id-badge ga text-overflow: ellipsis hamda overflow: hidden bering!"
      },
      hint: {
        en: 'Add overflow-y: auto; to terminal, overflow-x: auto; to weapons, and overflow: hidden; text-overflow: ellipsis; to badge!',
        uz: "Terminalga overflow-y: auto, qurollarga overflow-x: auto, nishonga esa overflow: hidden va text-overflow: ellipsis bering!"
      },
      rules: [
        {
          type: 'hasCssProperty',
          property: 'overflow-y',
          valuePattern: /auto|scroll/i,
          message: 'Add overflow-y: auto to .terminal-box!'
        },
        {
          type: 'hasCssProperty',
          property: 'overflow-x',
          valuePattern: /auto|scroll/i,
          message: 'Add overflow-x: auto to .weapons-deck!'
        },
        {
          type: 'hasCssProperty',
          property: 'text-overflow',
          valuePattern: /ellipsis/i,
          message: 'Add text-overflow: ellipsis to .id-badge!'
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
      en: 'Theme 26: Gradients (Linear 45°/90°/135°, Radial & Conic)',
      uz: '26-Mavzu: Gradientlar (45°/90°/135° Linear, Radial va Conic)'
    },
    icon: '🌈',
    tag: 'linear-gradient(45deg), linear-gradient(90deg), linear-gradient(135deg), radial-gradient(), conic-gradient()',
    humanIntro: {
      whatIsIt: {
        en: 'CSS gradients allow smooth color transitions across any angle: 45° dynamic diagonal, 90° horizontal horizon, 135° multi-stop fusion, 3D radial sphere orb, and 360° rotating radar conic gradients.',
        uz: "CSS gradientlari istalgan burchakda silliq rang o'tishlarini yaratadi: 45° dinamik diagonal, 90° gorizontal gorizont, 135° ko'p rangli o'tish, 3D radial shar va 360° radar aylanasi conic gradientlari."
      },
      whatIsATag: {
        en: '1. `linear-gradient(deg, color1, color2)` flows along a straight angled line.\n2. `radial-gradient(circle at x y, ...)` radiates from a center point into a 3D orb.\n3. `conic-gradient(from deg, ...)` sweeps around like a clock or radar.',
        uz: "1. `linear-gradient(burchak, rang1, rang2)` to'g'ri chiziqli burchak bo'ylab oqadi.\n2. `radial-gradient(circle, ...)` markazdan tashqariga 3D shar kabi nurlanadi.\n3. `conic-gradient(from deg, ...)` soat strelkasi yoki radar kabi doira bo'ylab aylanadi."
      }
    },
    summary: {
      en: 'Master all CSS gradient techniques: 45°, 90°, 135° multi-stop linear, 3D radial sphere, 360° conic radar, and clipped gradient typography.',
      uz: "Barcha CSS gradient uslublarini o'rganing: 45°, 90°, 135° ko'p rangli linear, 3D radial shar, 360° conic radar va gradientli harflar."
    },
    story: {
      en: 'Design the CyberPulse FX Master Console: activate 45°, 90°, and 135° linear angles, a 3D glowing radial orb, a spinning conic radar, and gradient text masking!',
      uz: "CyberPulse FX Master Konsolini loyihalang: 45°, 90° va 135° li burchakli linear gradientlar, 3D radial shar, 360° conic radar va gradientli matnni ishga tushiring!"
    },
    initialCode: {
      en: `<style>
  .fx-matrix {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 20px;
    background: #080c14;
    border: 1px solid #1e293b;
    border-radius: 18px;
    color: white;
    font-family: system-ui, sans-serif;
  }
  .gradient-title {
    grid-column: span 3;
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    margin: 0 0 10px;
    letter-spacing: 2px;
    background: linear-gradient(90deg, #ff007a, #00f2fe);
    /* 5-Qadam: -webkit-background-clip: text; -webkit-text-fill-color: transparent; bering */
  }
  .linear-45 {
    height: 110px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 13px;
    /* 1-Qadam: background: linear-gradient(45deg, #ff007a, #7928ca); */
    background: #1e1b4b;
  }
  .linear-90 {
    height: 110px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 13px;
    /* 2-Qadam: background: linear-gradient(90deg, #00f2fe, #4facfe); */
    background: #0c4a6e;
  }
  .linear-135 {
    height: 110px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 13px;
    /* 3-Qadam: background: linear-gradient(135deg, #f59e0b, #ef4444, #7c3aed); */
    background: #451a03;
  }
  .radial-orb {
    height: 110px;
    width: 110px;
    margin: 0 auto;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 12px;
    box-shadow: 0 0 35px #00f2fe;
    /* 4-Qadam: background: radial-gradient(circle at 35% 35%, #00f2fe, #0284c7, #030712); */
    background: #0369a1;
  }
  .conic-reactor {
    height: 110px;
    width: 110px;
    margin: 0 auto;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 12px;
    background: #3730a3;
  }
</style>

<div class="fx-matrix">
  <div class="gradient-title">⚡ CYBERPULSE FX MASTER ⚡</div>
  <div class="linear-45">✨ 45° LINEAR</div>
  <div class="linear-90">🌊 90° LINEAR</div>
  <div class="linear-135">🔥 135° 3-STOP</div>
  <div class="radial-orb">🔮 3D RADIAL</div>
  <div class="conic-reactor">🌀 CONIC RADAR</div>
</div>`,
      uz: `<style>
  .fx-matrix {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 20px;
    background: #080c14;
    border: 1px solid #1e293b;
    border-radius: 18px;
    color: white;
    font-family: system-ui, sans-serif;
  }
  .gradient-title {
    grid-column: span 3;
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    margin: 0 0 10px;
    letter-spacing: 2px;
    background: linear-gradient(90deg, #ff007a, #00f2fe);
    /* 5-Qadam: -webkit-background-clip: text; -webkit-text-fill-color: transparent; bering */
  }
  .linear-45 {
    height: 110px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 13px;
    /* 1-Qadam: background: linear-gradient(45deg, #ff007a, #7928ca); */
    background: #1e1b4b;
  }
  .linear-90 {
    height: 110px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 13px;
    /* 2-Qadam: background: linear-gradient(90deg, #00f2fe, #4facfe); */
    background: #0c4a6e;
  }
  .linear-135 {
    height: 110px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 13px;
    /* 3-Qadam: background: linear-gradient(135deg, #f59e0b, #ef4444, #7c3aed); */
    background: #451a03;
  }
  .radial-orb {
    height: 110px;
    width: 110px;
    margin: 0 auto;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 12px;
    box-shadow: 0 0 35px #00f2fe;
    /* 4-Qadam: background: radial-gradient(circle at 35% 35%, #00f2fe, #0284c7, #030712); */
    background: #0369a1;
  }
  .conic-reactor {
    height: 110px;
    width: 110px;
    margin: 0 auto;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 12px;
    background: #3730a3;
  }
</style>

<div class="fx-matrix">
  <div class="gradient-title">⚡ CYBERPULSE FX MASTER ⚡</div>
  <div class="linear-45">✨ 45° LINEAR</div>
  <div class="linear-90">🌊 90° LINEAR</div>
  <div class="linear-135">🔥 135° 3-STOP</div>
  <div class="radial-orb">🔮 3D RADIAL</div>
  <div class="conic-reactor">🌀 CONIC RADAR</div>
</div>`
    },
    targetCode: `<style>
  .fx-matrix {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 20px;
    background: #080c14;
    border: 1px solid #1e293b;
    border-radius: 18px;
    color: white;
    font-family: system-ui, sans-serif;
  }
  .gradient-title {
    grid-column: span 3;
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    margin: 0 0 10px;
    letter-spacing: 2px;
    background: linear-gradient(90deg, #ff007a, #00f2fe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .linear-45 {
    height: 110px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 13px;
    box-shadow: 0 8px 20px rgba(255, 0, 122, 0.35);
    background: linear-gradient(45deg, #ff007a, #7928ca);
  }
  .linear-90 {
    height: 110px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 13px;
    box-shadow: 0 8px 20px rgba(0, 242, 254, 0.35);
    background: linear-gradient(90deg, #00f2fe, #4facfe);
  }
  .linear-135 {
    height: 110px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 13px;
    box-shadow: 0 8px 20px rgba(245, 158, 11, 0.35);
    background: linear-gradient(135deg, #f59e0b, #ef4444, #7c3aed);
  }
  .radial-orb {
    height: 110px;
    width: 110px;
    margin: 0 auto;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 12px;
    box-shadow: 0 0 35px #00f2fe;
    background: radial-gradient(circle at 35% 35%, #00f2fe, #0284c7, #030712);
  }
  .conic-reactor {
    height: 110px;
    width: 110px;
    margin: 0 auto;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 12px;
    background: conic-gradient(from 0deg, #ff007a, #7928ca, #00f2fe, #ff007a);
  }
</style>

<div class="fx-matrix">
  <div class="gradient-title">⚡ CYBERPULSE FX MASTER ⚡</div>
  <div class="linear-45">✨ 45° LINEAR</div>
  <div class="linear-90">🌊 90° LINEAR</div>
  <div class="linear-135">🔥 135° 3-STOP</div>
  <div class="radial-orb">🔮 3D RADIAL</div>
  <div class="conic-reactor">🌀 CONIC RADAR</div>
</div>`,
    targetDescription: {
      en: 'A CyberPulse FX matrix featuring 3 distinct linear gradient angles (45°, 90°, 135°), a 3D radial sphere orb, a 360° conic radar reactor, and gradient-clipped typography.',
      uz: "3 xil burchakdagi linear gradientlar (45°, 90°, 135°), 3D radial shar, 360° conic radar va gradient bilan bo'yalgan sarlavha jamlangan CyberPulse FX konsoli."
    },
    anatomy: [
      {
        part: 'linear-gradient(45deg, #ff007a, #7928ca)',
        role: { en: '45° Diagonal Linear Gradient', uz: '45° Diagonal Linear Gradient' },
        explanation: { en: 'Flows colors from bottom-left to top-right at a 45 degree angle.', uz: "Ranglarni 45 daraja burchak ostida pastki chapdan yuqori o'ngga yo'naltiradi." },
        effect: { en: 'Angled color flow', uz: 'Burchakli rang oqimi' }
      },
      {
        part: 'radial-gradient(circle at 35% 35%, ...)',
        role: { en: '3D Radial Sphere', uz: '3D Radial Shar' },
        explanation: { en: 'Radiates light from an offset point to create 3D spherical depth.', uz: "Nurni 35% nuqtadan taratib, 3 o'lchamli shar hajmini hosil qiladi." },
        effect: { en: '3D sphere illusion', uz: '3D shar ko\'rinishi' }
      },
      {
        part: 'conic-gradient(from 0deg, ...)',
        role: { en: '360° Radar Conic Sweep', uz: '360° Radar Doiraviy Gradient' },
        explanation: { en: 'Sweeps color stops around a center circle like a radar beam.', uz: 'Ranglarni markaz atrofida radar nuri kabi doira bo\'ylab aylantiradi.' },
        effect: { en: 'Circular radar sweep', uz: 'Aylanma radar effekti' }
      }
    ],
    listOfTags: [
      { code: 'linear-gradient(45deg, ...)', name: '45° Linear', description: 'Diagonal linear color flow', exampleHtml: 'background: linear-gradient(45deg, #ff007a, #7928ca);' },
      { code: 'linear-gradient(90deg, ...)', name: '90° Linear', description: 'Horizontal linear horizon', exampleHtml: 'background: linear-gradient(90deg, #00f2fe, #4facfe);' },
      { code: 'linear-gradient(135deg, ...)', name: '135° Linear', description: '3-stop angled color fusion', exampleHtml: 'background: linear-gradient(135deg, #f59e0b, #ef4444, #7c3aed);' },
      { code: 'radial-gradient(circle, ...)', name: 'Radial Gradient', description: 'Circular glowing orb from center', exampleHtml: 'background: radial-gradient(circle, #00f2fe, #030712);' },
      { code: 'conic-gradient(...)', name: 'Conic Gradient', description: '360-degree sweep around circle', exampleHtml: 'background: conic-gradient(from 0deg, #ff007a, #00f2fe);' },
      { code: '-webkit-background-clip: text;', name: 'Gradient Text', description: 'Clips background gradient inside font', exampleHtml: 'background-clip: text;' }
    ],
    tagShowcase: [
      { tag: 'linear-gradient(45deg)', meaning: { en: '45° diagonal gradient', uz: '45 darajali burchak' } },
      { tag: 'linear-gradient(90deg)', meaning: { en: '90° horizontal gradient', uz: '90 darajali gorizontal' } },
      { tag: 'radial-gradient()', meaning: { en: '3D sphere glow', uz: '3D shar nuri' } },
      { tag: 'conic-gradient()', meaning: { en: '360° radar sweep', uz: '360° radar aylanasi' } }
    ],
    quickTags: [
      'linear-gradient(45deg, #ff007a, #7928ca)',
      'linear-gradient(90deg, #00f2fe, #4facfe)',
      'linear-gradient(135deg, #f59e0b, #ef4444, #7c3aed)',
      'radial-gradient(circle at 35% 35%, #00f2fe, #0284c7, #030712)',
      'conic-gradient(from 0deg, #ff007a, #7928ca, #00f2fe, #ff007a)',
      '-webkit-background-clip: text;'
    ],
    challenge: {
      mission: {
        en: 'Master all 5 gradient angles and styles: 45° linear, 90° linear, 135° multi-stop linear, 3D radial sphere, 360° conic radar, and text gradient with -webkit-background-clip: text!',
        uz: "Barcha 5 xil gradient burchaklari va turlarini qo'llang: 45° linear, 90° linear, 135° ko'p rangli linear, 3D radial shar, 360° conic radar va -webkit-background-clip: text bilan harflarga gradient bering!"
      },
      hint: {
        en: 'Apply linear-gradient(45deg, ...), linear-gradient(90deg, ...), linear-gradient(135deg, ...), radial-gradient(...), conic-gradient(...), and background-clip: text!',
        uz: "linear-gradient(45deg, ...), linear-gradient(90deg, ...), linear-gradient(135deg, ...), radial-gradient(...), conic-gradient(...) va background-clip: text qo'llang!"
      },
      rules: [
        {
          type: 'hasCssProperty',
          property: 'background',
          valuePattern: /linear-gradient\s*\(\s*45deg/i,
          message: 'Apply linear-gradient(45deg, ...) to .linear-45!'
        },
        {
          type: 'hasCssProperty',
          property: 'background',
          valuePattern: /linear-gradient\s*\(\s*90deg/i,
          message: 'Apply linear-gradient(90deg, ...) to .linear-90!'
        },
        {
          type: 'hasCssProperty',
          property: 'background',
          valuePattern: /linear-gradient\s*\(\s*135deg/i,
          message: 'Apply linear-gradient(135deg, ...) to .linear-135!'
        },
        {
          type: 'hasCssProperty',
          property: 'background',
          valuePattern: /radial-gradient/i,
          message: 'Apply radial-gradient to .radial-orb!'
        },
        {
          type: 'hasCssProperty',
          property: 'background',
          valuePattern: /conic-gradient/i,
          message: 'Apply conic-gradient to .conic-reactor!'
        },
        {
          type: 'custom',
          check: (code) => code.includes('background-clip') && (code.includes('text') || code.includes('-webkit-background-clip')),
          message: 'Clip gradient inside title letters using -webkit-background-clip: text!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Gradients are like mixing paint colors smoothly across a sunset sky or shining a round flashlight onto a ball.',
      discussionQuestions: [
        'How does a 45deg linear gradient differ from a 90deg horizontal gradient?',
        'Where does the light start in a radial gradient?'
      ],
      commonMistakes: [
        'Forgetting commas between color stops',
        'Not setting -webkit-text-fill-color: transparent when clipping text gradients'
      ],
      funActivity: 'Try changing 45deg to 180deg or adding a fourth color stop to the 135deg gradient!'
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
    initialCode: {
      en: `<!-- Step 1: Add class="card" to the outer box -->
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
      uz: `<!-- 1-Qadam: Tashqi qutiga class="card" qo'shing -->
<!-- 2-Qadam: ONLINE status spaniga class="badge bg-success rounded-pill" bering -->
<!-- 3-Qadam: Xabarnomaga class="alert alert-primary" bering -->
<!-- 4-Qadam: Tugmaga class="btn btn-primary" bering! -->

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
</div>`
    },
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
    initialCode: {
      en: `<!-- Step 1: Add class="navbar navbar-dark bg-dark" to the <nav> element -->
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
      uz: `<!-- 1-Qadam: <nav> tegiga class="navbar navbar-dark bg-dark" qo'shing -->
<!-- 2-Qadam: Logotip havolasiga class="navbar-brand" bering -->
<!-- 3-Qadam: Bosh sahifa (Home) havolasiga class="nav-link active" bering -->
<!-- 4-Qadam: Ulanish tugmasiga class="btn btn-outline-info btn-sm" bering! -->

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
</nav>`
    },
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
