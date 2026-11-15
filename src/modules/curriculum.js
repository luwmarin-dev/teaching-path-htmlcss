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
      en: '🦴 HTML Core (Themes 1 - 5)',
      uz: '🦴 Asosiy HTML (1 - 5 Mavzular)'
    },
    tagline: {
      en: 'Tags, document structure, tables, images, and basic divs',
      uz: 'Teglar, hujjat tuzilishi, jadvallar, rasmlar va divlar'
    }
  },
  {
    id: 'css-core',
    title: {
      en: '🎨 CSS Styling (Themes 6 - 8)',
      uz: '🎨 CSS Bezaklari (6 - 8 Mavzular)'
    },
    tagline: {
      en: 'Classes, margin & padding, and 2D transforms',
      uz: 'Klasslar, margin va padding, hamda 2D transform'
    }
  },
  {
    id: 'full-powers',
    title: {
      en: '⚡ Advanced Powers (Themes 9 - 16)',
      uz: '⚡ Ilg\'or Qobiliyatlar (9 - 16 Mavzular)'
    },
    tagline: {
      en: 'Flexbox, buttons, links, colors, shapes, and animations',
      uz: 'Flexbox, tugmalar, havolalar, ranglar, shakllar va animatsiyalar'
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
      en: 'Theme 3: Tables & Grids (Rows and Cells)',
      uz: '3-Mavzu: Jadvallar va Kataklar (Qatorlar va Kataklar)'
    },
    icon: '📊',
    tag: '<table>, <tr>, <th>, <td>',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, a **Table** is a neat grid of boxes with rows and columns — just like an Excel spreadsheet or a video game high-score leaderboard!',
        uz: 'Oddiy tilda aytganda, **Jadval** — bu kataklardan iborat toza panjara — xuddi dars jadvali yoki o\'yinlardagi peshqadamlar ro\'yxati kabi!'
      },
      whatIsATag: {
        en: 'HTML builds tables row-by-row:\n1. `<table>` is the outer grid frame.\n2. `<tr>` stands for **Table Row** (a horizontal line across).\n3. `<th>` stands for **Table Header** (bold titles for column headers).\n4. `<td>` stands for **Table Data** (regular boxes holding player names, numbers, or stats)!',
        uz: 'HTML jadvallarni qadamma-qadam quradi:\n1. `<table>` — jadvalning tashqi ramkasi.\n2. `<tr>` — **Table Row** (gorizontal qator).\n3. `<th>` — **Table Header** (ustun sarlavhasi, qalin yozuvda).\n4. `<td>` — **Table Data** (oddiy ma\'lumot katagi)!'
      }
    },
    summary: {
      en: 'Build clean grids and leaderboards using `<table>`, `<tr>` (rows), `<th>` (headers), and `<td>` (data cells).',
      uz: '<table>, <tr> (qatorlar), <th> (sarlavhalar) va <td> (kataklar) yordamida jadvallar va reytinglar tuzing.'
    },
    story: {
      en: 'Think of `<tr>` like a train track. Each track holds train cars: `<th>` for the engine/header cars, and `<td>` for the passenger data cars.',
      uz: '`<tr>` ni poyezd relsiga o\'xshating: `<th>` — boshlovchi lokomotiv vagoni, `<td>` — yo\'lovchilar vagoni.'
    },
    initialCode: `<table border="1" cellpadding="8">
  <tr>
    <th>Rank</th>
    <th>Player</th>
    <th>Score</th>
  </tr>
  <tr>
    <td>🥇 1st</td>
    <td>PixelCat</td>
    <td>9,900</td>
  </tr>
  <tr>
    <td>🥈 2nd</td>
    <td>CyberBot</td>
    <td>8,450</td>
  </tr>
</table>`,
    targetCode: `<table border="1" cellpadding="8">
  <tr>
    <th>Rank</th>
    <th>Player</th>
    <th>Score</th>
  </tr>
  <tr>
    <td>🥇 1st</td>
    <td>PixelCat</td>
    <td>9,900</td>
  </tr>
  <tr>
    <td>🥈 2nd</td>
    <td>CyberBot</td>
    <td>8,450</td>
  </tr>
  <tr>
    <td>🥉 3rd</td>
    <td>DragonBoy</td>
    <td>7,800</td>
  </tr>
</table>`,
    targetDescription: 'A clean 3-column game leaderboard grid with border lines:\n• Header Row (bold): Rank | Player | Score\n• Row 1: 🥇 1st | PixelCat | 9,900\n• Row 2: 🥈 2nd | CyberBot | 8,450\n• Row 3: 🥉 3rd | DragonBoy | 7,800',
    anatomy: [
      {
        part: '<table>',
        role: { en: 'Table Container', uz: 'Jadval qobig\'i' },
        explanation: {
          en: 'Creates the outer grid structure.',
          uz: 'Tashqi jadval panjarasini yaratadi.'
        },
        effect: {
          en: 'Initializes the table grid',
          uz: 'Jadval panjarasini boshlaydi'
        },
        visualPreview: '<div class="mini-canvas">⊞ Outer Grid Table Frame</div>'
      },
      {
        part: '<tr>',
        role: { en: 'Table Row', uz: 'Jadval qatori' },
        explanation: {
          en: 'Short for Table Row. Creates one horizontal row of boxes from left to right.',
          uz: 'Table Row (Jadval qatori). Chapdan o\'ngga bitta gorizontal qator hosil qiladi.'
        },
        effect: {
          en: 'Starts a horizontal row',
          uz: 'Gorizontal qatorni boshlaydi'
        },
        visualPreview: '<div class="mini-canvas">➔ Horizontal Row (Left to Right) ➔</div>'
      },
      {
        part: '<th>',
        role: { en: 'Table Header Cell', uz: 'Sarlavha katagi' },
        explanation: {
          en: 'Short for Table Header. Bold, centered title cell for a column.',
          uz: 'Table Header (Sarlavha katagi). Ustun uchun qalin va markazlashtirilgan nom.'
        },
        effect: {
          en: 'Bold header column title',
          uz: 'Qalin sarlavha katagi'
        },
        visualPreview: '<div class="mini-canvas"><strong>🏷️ Bold Centered Header</strong></div>'
      },
      {
        part: '<td>',
        role: { en: 'Table Data Cell', uz: 'Ma\'lumot katagi' },
        explanation: {
          en: 'Short for Table Data. A regular grid box holding values or text.',
          uz: 'Table Data (Ma\'lumot katagi). Matn yoki raqamni saqlovchi oddiy katak.'
        },
        effect: {
          en: 'Standard data cell box',
          uz: 'Oddiy ma\'lumot katagi'
        },
        visualPreview: '<div class="mini-canvas">📦 Standard Data Cell Box</div>'
      },
      {
        part: 'border="1"',
        role: { en: 'Border Attribute', uz: 'Chegara atributi' },
        explanation: {
          en: 'Draws visible grid lines around every box in the table.',
          uz: 'Jadvaldagi har bir katak atrofida ko\'rinadigan chiziqlar chizadi.'
        },
        effect: {
          en: 'Shows visible grid lines',
          uz: 'Kataklar orasidagi chiziqlarni ko\'rsatadi'
        },
        visualPreview: '<div class="mini-canvas">▦ Visible Grid Lines (border="1")</div>'
      }
    ],
    listOfTags: [
      { code: '<table> ... </table>', name: 'Table', description: 'The outer container frame for a grid/table', exampleHtml: '<table border="1"><tr><td>Cell</td></tr></table>' },
      { code: '<tr> ... </tr>', name: 'Table Row', description: 'Creates one horizontal line of cells across the table', exampleHtml: '<tr><td>A</td><td>B</td></tr>' },
      { code: '<th> ... </th>', name: 'Table Header', description: 'Bold title cell at the top of a column', exampleHtml: '<th>Name</th>' },
      { code: '<td> ... </td>', name: 'Table Data', description: 'Standard data cell box holding facts or numbers', exampleHtml: '<td>100</td>' },
      { code: 'border="1"', name: 'Border Attribute', description: 'Draws solid grid lines around table cells', exampleHtml: 'border="1"' },
      { code: 'cellpadding="8"', name: 'Cell Padding', description: 'Adds breathing room cushion inside each cell box', exampleHtml: 'cellpadding="8"' }
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
        en: 'Add a 3rd place row for "🥉 3rd", player "DragonBoy", and score "7,800"!',
        uz: '"🥉 3rd", o\'yinchi "DragonBoy" va ochko "7,800" uchun 3-o\'rin qatorini qo\'shing!'
      },
      hint: { en: 'Create a new <tr> row before </table>, and add three <td> cells inside for the medal, player, and score.', uz: '</table> oldidan yangi <tr> qator oching va ichiga 3 ta <td> katak qo\'shing.' },
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
          check: (code) => /DragonBoy/i.test(code),
          message: 'Add DragonBoy as the 3rd player in the table!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'A table is like a waffle or an ice cube tray. `<tr>` is one row of ice compartments. `<td>` is each individual ice pocket.',
      discussionQuestions: [
        'What is the difference between `<th>` (header) and `<td>` (data)?',
        'Why do all `<td>` and `<th>` cells have to be wrapped inside a `<tr>` row?'
      ],
      commonMistakes: [
        'Putting `<td>` directly inside `<table>` without wrapping it in a `<tr>` row',
        'Having a different number of `<td>` cells in different rows'
      ],
      funActivity: 'Draw a 2x2 grid on paper and label the rows (`<tr>`) and boxes (`<td>`) with a pencil!'
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
    initialCode: `<img 
  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300" 
  alt="Cute fluffy puppy" 
  width="180"
>`,
    targetCode: `<img 
  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300" 
  alt="Cute fluffy puppy wearing glasses" 
  width="260"
>`,
    targetDescription: 'A sharp, charming photo of a golden puppy wearing glasses, resized to 260 pixels wide.',
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
        part: 'width="180"',
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
        en: 'Change the width of the puppy image to "260" pixels!',
        uz: 'Kuchukcha rasmining kengligini (width) "260" pikselga o\'zgartiring!'
      },
      hint: { en: 'Find the width attribute on the <img> tag and increase its pixel value.', uz: '<img> tegining width atributini toping va son qiymatini oshiring.' },
      rules: [
        {
          type: 'hasTag',
          tag: 'img',
          message: 'Keep the <img> tag!'
        },
        {
          type: 'custom',
          check: (code) => /width\s*=\s*["']?260["']?/i.test(code),
          message: 'Set width="260" on the image!'
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
    initialCode: `<div style="border: 2px dashed #64748b; padding: 16px;">
  <h3>Secret Chest</h3>
  <p>Contains 100 gold coins!</p>
</div>`,
    targetCode: `<div style="border: 4px solid #2dd4bf; padding: 16px;">
  <h3>Secret Chest</h3>
  <p>Contains 100 gold coins!</p>
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
        en: 'Change the border of the div box to "4px solid #2dd4bf" (solid cyan)!',
        uz: 'Div qutisining chegarasini (border) "4px solid #2dd4bf" (och ko\'k chiziq) qilib o\'zgartiring!'
      },
      hint: { en: 'Inside style="...", set border to 4px thickness, solid style, and the #2dd4bf cyan color.', uz: 'style="..." ichida border xususiyatini 4px, solid va #2dd4bf qilib belgilang.' },
      rules: [
        {
          type: 'hasTag',
          tag: 'div',
          message: 'Keep the <div> tag!'
        },
        {
          type: 'hasCssProperty',
          property: 'border',
          valuePattern: /4px.*solid.*#2dd4bf|4px.*solid.*teal/i,
          message: 'Set border to 4px solid #2dd4bf!'
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
      funActivity: 'Try border: 6px dotted pink; to see polka-dot borders!'
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
      en: 'Theme 7: Margin vs Padding (The Secret Cushion)',
      uz: '7-Mavzu: Margin va Padding (Ichki yostiqcha va Tashqi masofa)'
    },
    icon: '📦',
    tag: 'padding: 20px;, margin: 20px;',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, **Padding** is bubble wrap on the inside, and **Margin** is personal space on the outside!',
        uz: 'Oddiy tilda aytganda, **Padding** — bu quti ichidagi yumshoq yostiqcha, **Margin** esa qutidan tashqaridagi shaxsiy masofadir!'
      },
      whatIsATag: {
        en: '• `padding: 24px;` puffs up the inside so text does not bump into walls.\n• `margin: 30px;` pushes neighboring boxes away so nobody bumps into you.',
        uz: '• `padding: 24px;` ichki qismni kengaytiradi, shunda matn devorlarga tegib ketmaydi.\n• `margin: 30px;` qo\'shni qutilarni uzoqlashtiradi, shunda hech kim sizga tegmaydi.'
      }
    },
    summary: {
      en: 'Master the difference between inside breathing room (padding) and outside space (margin).',
      uz: 'Ichki qulay masofa (padding) va tashqi shaxsiy masofa (margin) orasidagi farqni o\'rganing.'
    },
    story: {
      en: 'Padding is thick stuffing inside your coat. Margin is your arms stretched out asking friends for personal space.',
      uz: 'Padding — kiyimingiz ichidagi qalin astar. Margin — do\'stlaringiz bilan oradagi shaxsiy masofa.'
    },
    initialCode: `<style>
  .box {
    background-color: #1e2030;
    color: #ffffff;
    border: 3px solid #2dd4bf;
    /* Inside bubble wrap */
    padding: 8px;
    /* Outside personal space */
    margin: 8px;
  }
</style>

<div class="box">
  <h3>I am in a box!</h3>
  <p>Increase my padding and margin to make me cozy!</p>
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
  <p>Increase my padding and margin to make me cozy!</p>
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
      en: 'Theme 9: Flexbox (Snapping Items in Line)',
      uz: '9-Mavzu: Flexbox (Elementlarni Bir Qatorga Terish)'
    },
    icon: '🧩',
    tag: 'display: flex, justify-content, gap',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, **Flexbox** is the LEGO snap system of web layout! Without it, elements stack vertically like pancakes.',
        uz: 'Oddiy tilda **Flexbox** — bu veb-sahifa elementlarini xuddi LEGO g\'ishtlari kabi bir tekis teruvchi tizimdir! Usiz hamma narsa ustma-ust tushib qoladi.'
      },
      whatIsATag: {
        en: 'When you whisper `display: flex;` to a parent box, all the children inside snap into a neat horizontal row like ducks in a line!',
        uz: 'Katta qutiga `display: flex;` deb yozsangiz, uning ichidagi barcha bolalar bir tekis gorizontal qatorga tiziladi!'
      }
    },
    summary: {
      en: 'Line up buttons, badges, and cards side-by-side with display: flex, justify-content, and gap.',
      uz: 'Tugmalar, nishonlar va kartochkalarni display: flex, justify-content va gap yordamida yonma-yon joylashtiring.'
    },
    story: {
      en: 'Before flexbox, putting items side-by-side was hard. display: flex makes it instant!',
      uz: 'Flexboxdan oldin elementlarni yonma-yon qo\'yish juda qiyin edi. display: flex buni bir zumda osonlashtiradi!'
    },
    initialCode: `<style>
  .badge-row {
    background: #1c1e2f;
    padding: 20px;
    border-radius: 12px;
    /* Add flexbox powers here! */
  }
  .badge {
    background: #7c6cf7;
    color: white;
    padding: 10px 18px;
    border-radius: 20px;
    font-weight: bold;
    text-align: center;
  }
</style>

<div class="badge-row">
  <div class="badge">⭐ Hero</div>
  <div class="badge">⚡ Legend</div>
  <div class="badge">🔥 Master</div>
</div>`,
    targetCode: `<style>
  .badge-row {
    background: #1c1e2f;
    padding: 20px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    gap: 16px;
  }
  .badge {
    background: #7c6cf7;
    color: white;
    padding: 10px 18px;
    border-radius: 20px;
    font-weight: bold;
    text-align: center;
  }
</style>

<div class="badge-row">
  <div class="badge">⭐ Hero</div>
  <div class="badge">⚡ Legend</div>
  <div class="badge">🔥 Master</div>
</div>`,
    targetDescription: {
      en: 'Three hero badges side-by-side centered with neat 16px space between them.',
      uz: 'O\'rtaga chiroyli tekislangan va orasida 16px masofa bo\'lgan 3 ta qahramon nishonlari.'
    },
    anatomy: [
      {
        part: 'display: flex;',
        role: { en: 'Flex Activation', uz: 'Flexni faollashtirish' },
        explanation: { en: 'Tells the parent: "Snap all children into a horizontal row!"', uz: 'Ona qutiga: "Barcha bolalarni gorizontal qatorga tiz!" deb buyuradi.' },
        effect: { en: 'Snaps items side-by-side', uz: 'Elementlarni yonma-yon teradi' }
      },
      {
        part: 'justify-content: center;',
        role: { en: 'Horizontal Alignment', uz: 'Gorizontal tekislash' },
        explanation: { en: 'Centers the group of items in the middle of the screen.', uz: 'Elementlar guruhini sahifaning qoq o\'rtasiga joylashtiradi.' },
        effect: { en: 'Centers items horizontally', uz: 'Markazga tekislaydi' }
      },
      {
        part: 'gap: 16px;',
        role: { en: 'Space Between', uz: 'Oraliq masofa' },
        explanation: { en: 'Puts neat breathing room between each badge without tricky margins.', uz: 'Elementlar orasiga 16px bo\'shliq qo\'yadi.' },
        effect: { en: 'Even spacing between children', uz: 'Elementlar orasida bo\'shliq' }
      }
    ],
    listOfTags: [
      { code: 'display: flex;', name: { en: 'Flex Container', uz: 'Flex Idish' }, description: { en: 'Lines up all child items horizontally in one row', uz: 'Ichidagi bolalarni bir qatorga yonma-yon teradi' } },
      { code: 'justify-content: center;', name: { en: 'Center Alignment', uz: 'Markazga tekislash' }, description: { en: 'Centers items horizontally inside the flex container', uz: 'Elementlarni gorizontal bo\'yicha o\'rtaga suradi' } },
      { code: 'gap: 16px;', name: { en: 'Gap Spacing', uz: 'Oraliq masofa' }, description: { en: 'Adds clean space between all child items', uz: 'Bolalar orasiga bir xil masofa qo\'shadi' } }
    ],
    tagShowcase: [
      { tag: 'display: flex;', meaning: { en: 'Snap into row', uz: 'Qatorga tizish' } },
      { tag: 'gap: 16px;', meaning: { en: 'Space between', uz: 'Oraliq masofa' } },
      { tag: 'justify-content: center;', meaning: { en: 'Center items', uz: 'O\'rtaga joylash' } }
    ],
    quickTags: ['display: flex;', 'gap: 16px;', 'justify-content: center;'],
    challenge: {
      mission: {
        en: 'Add display: flex; and gap: 16px; to .badge-row to arrange the badges side-by-side!',
        uz: '.badge-row ga display: flex; va gap: 16px; qo\'shib nishonlarni yonma-yon qilib tering!'
      },
      hint: {
        en: 'Turn on flexbox with display: flex; and space out the items with gap: 16px;',
        uz: '.badge-row { ... } ichiga display: flex; va gap: 16px; yozing.'
      },
      rules: [
        {
          type: 'hasCssProperty',
          property: 'display',
          valuePattern: /flex/i,
          message: 'Add display: flex; to .badge-row!'
        },
        {
          type: 'hasCssProperty',
          property: 'gap',
          valuePattern: /16px/i,
          message: 'Add gap: 16px; to .badge-row!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'A row of ducklings following their mom in a neat straight line.',
        uz: 'Ona o\'rdak ortidan bitta tekis qatorda yurgan o\'rdakchalar.'
      },
      discussionQuestions: [
        { en: 'What happened to the badges before flex? (They stacked vertically!)', uz: 'Flexdan oldin nishonlar qanday edi? (Ustma-ust tushgan edi!)' }
      ],
      commonMistakes: [
        { en: 'Adding display: flex to the badge instead of badge-row', uz: 'display: flex ni badge-row ga emas, badge ga yozish' }
      ],
      funActivity: {
        en: 'Try justify-content: space-between; to push them to opposite walls!',
        uz: 'justify-content: space-between; qilib ko\'ring va nishonlar chetlarga surilishini tomosha qiling!'
      }
    }
  },

  // ==========================================
  // THEME 10: Buttons & Hover Effects
  // ==========================================
  {
    id: 'theme-10-buttons',
    module: 'full-powers',
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
  /* Add hover power below! */
</style>

<div style="text-align: center; padding: 40px;">
  <button class="magic-btn">✨ Hover Over Me!</button>
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
  <button class="magic-btn">✨ Hover Over Me!</button>
</div>`,
    targetDescription: {
      en: 'A stylish button that turns teal (#2dd4bf) and pops 10% larger (scale(1.1)) when the mouse hovers over it.',
      uz: 'Sichqoncha ustiga borganda yashil-ko\'k (#2dd4bf) rangga kirib, 10% kattalashadigan ajoyib tugma.'
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
      { code: '<button> ... </button>', name: { en: 'Button Tag', uz: 'Tugma tegi' }, description: { en: 'Creates a clickable pressable button', uz: 'Bosiladigan tugma hosil qiladi' } },
      { code: ':hover', name: { en: 'Hover Selector', uz: 'Hover selektori' }, description: { en: 'Styles elements only when mouse hovers over them', uz: 'Sichqoncha kelgandagina elementga ta\'sir qiladi' } },
      { code: 'cursor: pointer;', name: { en: 'Pointer Cursor', uz: 'Qo\'lcha kursor' }, description: { en: 'Turns arrow cursor into a clicking hand', uz: 'Sichqoncha strelkasini bosish qo\'lchasiga aylantiradi' } }
    ],
    tagShowcase: [
      { tag: '<button>', meaning: { en: 'Clickable button', uz: 'Bosiladigan tugma' } },
      { tag: ':hover', meaning: { en: 'React on mouseover', uz: 'Sichqonchaga javob berish' } }
    ],
    quickTags: ['.magic-btn:hover {', 'background: #2dd4bf;', 'transform: scale(1.1);'],
    challenge: {
      mission: {
        en: 'Add a .magic-btn:hover rule with background: #2dd4bf; and transform: scale(1.1);',
        uz: '.magic-btn:hover ga background: #2dd4bf; va transform: scale(1.1); qo\'shing!'
      },
      hint: {
        en: 'Add a :hover selector for the button and set the background and scale transform.',
        uz: '.magic-btn:hover { background: #2dd4bf; transform: scale(1.1); } deb yozing.'
      },
      rules: [
        {
          type: 'hasCssProperty',
          property: 'background',
          valuePattern: /#2dd4bf|rgb\(45,\\s*212,\\s*191\)/i,
          message: 'Set hover background to #2dd4bf!'
        },
        {
          type: 'hasCssProperty',
          property: 'transform',
          valuePattern: /scale/i,
          message: 'Add transform: scale(1.1) on hover!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'An arcade button that lights up when you put your finger near it.',
        uz: 'Qo\'lingizni yaqinlashtirganingizda yonib chiroq beruvchi o\'yin avtomati tugmasi.'
      },
      discussionQuestions: [
        { en: 'Why is visual feedback important on buttons? (So users know it is clickable!)', uz: 'Nega tugmaga effekt berish muhim? (Foydalanuvchi bosilishini bilsin deb!)' }
      ],
      commonMistakes: [
        { en: 'Forgetting the colon : before hover (must be :hover)', uz: 'hover dan oldin ikki nuqta : qo\'yishni unutish' }
      ],
      funActivity: {
        en: 'Try scale(1.5) for a giant cartoon balloon pop!',
        uz: 'scale(1.5) qilib ko\'ring va tugma shar kabi shishishini ko\'ring!'
      }
    }
  },

  // ==========================================
  // THEME 11: Links & Web Portals
  // ==========================================
  {
    id: 'theme-11-links',
    module: 'full-powers',
    title: {
      en: 'Theme 11: Links & Web Portals (<a>)',
      uz: '11-Mavzu: Havolalar va Sayt Portallari (<a>)'
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
    module: 'full-powers',
    title: {
      en: 'Theme 12: Bullet & Numbered Lists (<ul>, <ol>, <li>)',
      uz: '12-Mavzu: Ro\'yxatlar (<ul>, <ol>, <li>)'
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
    module: 'full-powers',
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
    module: 'full-powers',
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
    module: 'full-powers',
    title: {
      en: 'Theme 15: Rounded Corners & 50% Circles',
      uz: '15-Mavzu: Yumaloq Burchaklar va Aylana (50%)'
    },
    icon: '⚪',
    tag: 'border-radius: 12px, border-radius: 50%',
    humanIntro: {
      whatIsIt: {
        en: 'In the real world, sharp corners poke your fingers! Rounded corners make web apps feel smooth, friendly, and modern like an iPhone app.',
        uz: 'Haqiqiy hayotda o\'tkir burchaklar qo\'lni og\'ritadi! Yumaloq burchaklar esa ilovalarni xuddi iPhone kabi muloyim va chiroyli ko\'rsatadi.'
      },
      whatIsATag: {
        en: '`border-radius: 12px;` rounds corners. If you give an exact square `border-radius: 50%;`, it magically morphs into a 100% round circle!',
        uz: '`border-radius: 12px;` burchaklarni sal yumaloqlaydi. Kvadratga `border-radius: 50%;` bersangiz, u bir zumda mukammal aylanaga aylanadi!'
      }
    },
    summary: {
      en: 'Soft-edge your cards with border-radius and turn square avatars into perfect circles with 50%.',
      uz: 'Kartochkalarning burchaklarini yumaloqlang va 50% bilan kvadrat rasmlarni mukammal aylanaga aylantiring.'
    },
    story: {
      en: 'Almost every profile avatar on YouTube, Discord, and Roblox is a square with border-radius: 50%!',
      uz: 'YouTube, Discord va Roblox dagi barcha profil rasmlari aslida border-radius: 50% berilgan kvadratdir!'
    },
    initialCode: `<style>
  .avatar {
    width: 120px;
    height: 120px;
    background: #ff757f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    /* Make this square a circle! */
    border-radius: 0px;
  }
</style>

<div style="display: flex; justify-content: center; padding: 30px;">
  <div class="avatar">🦊</div>
</div>`,
    targetCode: `<style>
  .avatar {
    width: 120px;
    height: 120px;
    background: #ff757f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    border-radius: 50%;
  }
</style>

<div style="display: flex; justify-content: center; padding: 30px;">
  <div class="avatar">🦊</div>
</div>`,
    targetDescription: {
      en: 'The square fox badge transformed into a 100% round circular profile avatar.',
      uz: 'Kvadrat tulki nishoni border-radius: 50% yordamida mukammal aylanaga aylantirilgan.'
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
        en: 'Change border-radius: 0px; to border-radius: 50%; to make the fox avatar a circle!',
        uz: 'border-radius: 0px; ni border-radius: 50%; ga o\'zgartirib tulki belgisini aylanaga aylantiring!'
      },
      hint: {
        en: 'Set border-radius to 50% to turn the square image into a perfect circle.',
        uz: '.avatar ichida border-radius: 50%; deb yozing.'
      },
      rules: [
        {
          type: 'hasCssProperty',
          property: 'border-radius',
          valuePattern: /50%/i,
          message: 'Set border-radius: 50%!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'Sanding down sharp wooden corners until the wood block is round like a ball.',
        uz: 'Yog\'och blok burchaklarini jilvirlab to\'p kabi yumaloqlash.'
      },
      discussionQuestions: [
        { en: 'Why does 50% turn a square into a circle? (Each corner curve reaches the exact center!)', uz: 'Nega 50% kvadratni aylanaga aylantiradi? (Egrilik tomonning qoq o\'rtasiga yetib boradi!)' }
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
    module: 'full-powers',
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
  }
];

export function getLessonById(id) {
  return LESSONS.find(l => l.id === id) || LESSONS[0];
}

export function getLessonsByModule(moduleId) {
  return LESSONS.filter(l => l.module === moduleId);
}
