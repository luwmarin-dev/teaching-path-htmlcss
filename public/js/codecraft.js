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
    title: '🦴 HTML Core (Themes 1 - 5)',
    tagline: 'Tags, document structure, tables, images, and basic divs'
  },
  {
    id: 'css-core',
    title: '🎨 CSS Styling (Themes 6 - 8)',
    tagline: 'Classes, margin & padding, and 2D transforms'
  },
  {
    id: 'full-powers',
    title: '⚡ Advanced Powers (Themes 9 - 16)',
    tagline: 'Flexbox, buttons, links, colors, shapes, and animations'
  }
];

const LESSONS = [
  // ==========================================
  // THEME 1: HTML Tags
  // ==========================================
  {
    id: 'theme-1-tags',
    module: 'html-core',
    title: 'Theme 1: HTML Tags & The Sandwich Secret',
    icon: '🏷️',
    tag: '<tag> ... </tag>',
    humanIntro: {
      whatIsIt: 'HTML stands for "HyperText Markup Language", but in human language, it is simply the **secret language of web pages**! Web pages are built using little instructions called **Tags**.',
      whatIsATag: 'A **Tag** is a special magic sticker that tells the computer how to treat words. Tags almost always come in pairs like a sandwich: an **Opening Tag** at the start (<tag>), and a **Closing Tag** at the end with a secret slash (</tag>)!'
    },
    summary: 'Discover what HTML is in human language, how opening and closing tags work, and explore simple everyday tags.',
    story: 'Think of tags like sandwich buns. The opening bun <tag> says "Start the effect!", your words go in the middle, and the closing bun </tag> with a slash / says "Stop the effect!"',
    initialCode: `<p>
  My pet robot is <b>super strong</b>, <i>lightning fast</i>, and <u>waterproof</u>!
</p>`,
    targetCode: `<p>
  My pet robot is <b>super strong</b>, <i>lightning fast</i>, <u>waterproof</u>, and loves <mark>golden pizza</mark>!
</p>`,
    targetDescription: 'A sentence where:\n• "super strong" is bolded with <b>\n• "lightning fast" is slanted (italic) with <i>\n• "waterproof" is underlined with <u>\n• "golden pizza" is highlighted in bright yellow with <mark>',
    anatomy: [
      {
        part: '<b>',
        role: 'Opening Tag',
        explanation: 'Notice the angle brackets < >. Tells the browser: "Start making words BOLD right now!"',
        effect: 'Starts bold text'
      },
      {
        part: 'super strong',
        role: 'Content',
        explanation: 'The actual words sitting inside the tag sandwich.',
        effect: 'Appears as the text'
      },
      {
        part: '</b>',
        role: 'Closing Tag',
        explanation: 'The secret slash / means STOP! Tells the browser: "Stop making text bold; go back to normal."',
        effect: 'Stops bolding from spreading'
      },
      {
        part: '<i> ... </i>',
        role: 'Italic Tag',
        explanation: 'Slants words to make them stylish or emphasize speed.',
        effect: 'Slanted italic text'
      },
      {
        part: '<u> ... </u>',
        role: 'Underline Tag',
        explanation: 'Draws a neat line directly underneath the words.',
        effect: 'Underlined text'
      },
      {
        part: '<mark> ... </mark>',
        role: 'Highlighter Tag',
        explanation: 'Like swiping a neon yellow highlighter marker across your words.',
        effect: 'Yellow highlight background'
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
      mission: 'Add <mark>golden pizza</mark> to the sentence so "golden pizza" is highlighted!',
      hint: 'Type and loves <mark>golden pizza</mark> right before the closing </p> tag!',
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
      analogy: 'Tags are like sandwich buns. Opening <tag> is the top bun, your words are the cheese/patty, closing </tag> is the bottom bun. If you forget the bottom bun, the whole page gets messy!',
      discussionQuestions: [
        'What is the only difference between an opening tag and a closing tag? (The forward slash /!)',
        'What happens if you forget to close a <b> tag? (Everything on the whole page turns bold!)'
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
    title: 'Theme 2: Document Structure (DocType, Head, Body)',
    icon: '🏛️',
    tag: '<!DOCTYPE>, <html>, <head>, <body>',
    humanIntro: {
      whatIsIt: 'In human language, every full web page is like a **Human Body or Robot Blueprint**! It has a declaration of what it is, a head for its brain, and a body for everything you can see.',
      whatIsATag: '1. `<!DOCTYPE html>` tells the browser: "I am a modern HTML5 document!"\n2. `<html>` is the outer container wrapping the whole document.\n3. `<head>` is the brain: stores invisible info like the browser tab `<title>`.\n4. `<body>` is the physical body: holds all visible headings, paragraphs, buttons, and pictures!'
    },
    summary: 'Learn the master skeleton of every real web page: DocType, <html>, <head>, and <body>.',
    story: 'Think of <!DOCTYPE html> as your passport. <html> is your house. <head> is the address plaque on the front door (for title and settings). <body> is the living room where your furniture and guests actually sit!',
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
        role: 'DocType Declaration',
        explanation: 'Tells the browser: "Attention! This document is written in modern HTML5."',
        effect: 'Ensures standards mode'
      },
      {
        part: '<html> ... </html>',
        role: 'Root Container',
        explanation: 'The master container. Every single tag on the page lives inside this shell.',
        effect: 'Wraps the entire webpage'
      },
      {
        part: '<head> ... </head>',
        role: 'Brain / Metadata',
        explanation: 'Invisible head of the page. Holds the page title, fonts, and settings.',
        effect: 'Sets browser tab title'
      },
      {
        part: '<title> ... </title>',
        role: 'Tab Title',
        explanation: 'The name that appears on the browser tab at the very top of your screen.',
        effect: 'Shows title in browser tab'
      },
      {
        part: '<body> ... </body>',
        role: 'Visible Body',
        explanation: 'The visible page! Whatever you put between <body> and </body> appears on the screen.',
        effect: 'Renders all visible content'
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
      mission: 'Add a new paragraph inside the <body> that says: "Mission Status: <b>Ready for Launch</b>"!',
      hint: 'Type <p>Mission Status: <b>Ready for Launch</b></p> right before the closing </body> tag.',
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
      analogy: 'Human anatomy: DocType is your birth certificate. <html> is your skin. <head> is your brain (thoughts inside). <body> is your arms and legs (what people see).',
      discussionQuestions: [
        'Why doesn\'t text inside the <head> show up on the white page?',
        'What would happen if you wrote words outside the <body> tags?'
      ],
      commonMistakes: [
        'Putting visible words inside <head> instead of <body>',
        'Forgetting the closing </body> or </html> tags'
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
    title: 'Theme 3: Tables & Grids (Rows and Cells)',
    icon: '📊',
    tag: '<table>, <tr>, <th>, <td>',
    humanIntro: {
      whatIsIt: 'In human language, a **Table** is a neat grid of boxes with rows and columns — just like an Excel spreadsheet, a school class timetable, or a video game high-score leaderboard!',
      whatIsATag: 'HTML builds tables row-by-row:\n1. `<table>` is the outer grid frame.\n2. `<tr>` stands for **Table Row** (a horizontal line across).\n3. `<th>` stands for **Table Header** (bold titles for column headers).\n4. `<td>` stands for **Table Data** (regular boxes holding player names, numbers, or stats)!'
    },
    summary: 'Build clean grids and leaderboards using <table>, <tr> (rows), <th> (headers), and <td> (data cells).',
    story: 'Think of <tr> like a train track. Each track holds train cars: <th> for the engine/header cars, and <td> for the passenger data cars.',
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
        role: 'Table Container',
        explanation: 'Creates the outer grid structure.',
        effect: 'Initializes the table grid'
      },
      {
        part: '<tr>',
        role: 'Table Row',
        explanation: 'Short for Table Row. Creates one horizontal row of boxes from left to right.',
        effect: 'Starts a horizontal row'
      },
      {
        part: '<th>',
        role: 'Table Header Cell',
        explanation: 'Short for Table Header. Bold, centered title cell for a column.',
        effect: 'Bold header column title'
      },
      {
        part: '<td>',
        role: 'Table Data Cell',
        explanation: 'Short for Table Data. A regular grid box holding values or text.',
        effect: 'Standard data cell box'
      },
      {
        part: 'border="1"',
        role: 'Border Attribute',
        explanation: 'Draws visible grid lines around every box in the table.',
        effect: 'Shows grid lines'
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
      mission: 'Add a 3rd place row for "🥉 3rd", player "DragonBoy", and score "7,800"!',
      hint: 'Add <tr><td>🥉 3rd</td><td>DragonBoy</td><td>7,800</td></tr> right before </table>.',
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
      analogy: 'A table is like a waffle or an ice cube tray. <tr> is one row of ice compartments. <td> is each individual ice pocket.',
      discussionQuestions: [
        'What is the difference between <th> (header) and <td> (data)?',
        'Why do all <td> and <th> cells have to be wrapped inside a <tr> row?'
      ],
      commonMistakes: [
        'Putting <td> directly inside <table> without wrapping it in a <tr> row',
        'Having a different number of <td> cells in different rows'
      ],
      funActivity: 'Draw a 2x2 grid on paper and label the rows (tr) and boxes (td) with a pencil!'
    }
  },

  // ==========================================
  // THEME 4: Pictures
  // ==========================================
  {
    id: 'theme-4-pictures',
    module: 'html-core',
    title: 'Theme 4: Pictures & Void Tags',
    icon: '🖼️',
    tag: '<img src="" alt="" width="">',
    humanIntro: {
      whatIsIt: 'In human language, an **Image** tag is like sticking a sticker onto a poster. Instead of writing text, you show a photo or drawing.',
      whatIsATag: 'Fun secret: `<img>` is a **Void Tag**! It has NO closing `</img>`! Why? Because you cannot put words inside a picture — the picture stands by itself! You tell it where the picture lives using `src` (source).'
    },
    summary: 'Learn how to show pictures on a page and discover why <img> is a self-closing void tag.',
    story: 'Pictures need an address (src) to find the image file, and width to decide how big or small to draw it.',
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
      mission: 'Change the width of the puppy image to "260" pixels!',
      hint: 'Find width="180" and change the number to 260.',
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
    title: 'Theme 5: Basic Divs & Border Style',
    icon: '📦',
    tag: '<div>, style="border: ..."',
    humanIntro: {
      whatIsIt: 'In human language, a `<div>` is an **invisible cardboard box**! It lets you pack words, buttons, and pictures together into one package.',
      whatIsATag: 'By itself, a `<div>` is completely invisible. But when you give it basic styling like `style="border: 3px solid cyan;"`, it draws a sturdy box wall around everything inside!'
    },
    summary: 'Group things together using <div> and draw solid borders to create real cards.',
    story: 'Think of <div> like a lunchbox or bento box. You can pack a sandwich, juice, and fruit inside. When you move the lunchbox, everything inside moves together!',
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
        role: 'Divider Box',
        explanation: 'Short for Division. Creates an invisible container box.',
        effect: 'Groups items together'
      },
      {
        part: 'style="..."',
        role: 'Style Attribute',
        explanation: 'Allows you to write quick CSS styling rules right on the tag.',
        effect: 'Applies inline design'
      },
      {
        part: 'border: 4px solid #2dd4bf;',
        role: 'Border Wall',
        explanation: 'Thickness (4px), line type (solid), and color (#2dd4bf).',
        effect: 'Draws a solid cyan box wall'
      },
      {
        part: '</div>',
        role: 'Closing Box',
        explanation: 'Closes the cardboard box.',
        effect: 'Finishes the container'
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
      mission: 'Change the border of the div box to "4px solid #2dd4bf" (solid cyan)!',
      hint: 'In style="...", change border: 2px dashed #64748b; to border: 4px solid #2dd4bf;',
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
    title: 'Theme 6: Classes for Divs (The Power of .class)',
    icon: '⚡',
    tag: 'class="card", .card { ... }',
    humanIntro: {
      whatIsIt: 'In human language, a **Class** is a nickname or superpower badge you give to elements! Instead of re-typing styles 100 times, you name your style `.card` and give `class="card"` to any box.',
      whatIsATag: 'In HTML, you write `class="super-box"`. In CSS, you target it with a period dot: `.super-box { ... }`. The dot `.` stands for class!'
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
        role: 'Class Name',
        explanation: 'Labels this element with the "badge" nickname.',
        effect: 'Attaches the class'
      },
      {
        part: '.badge { ... }',
        role: 'Class Selector',
        explanation: 'In CSS, the period . tells the browser: "Find every element with class=\'badge\' and paint it!"',
        effect: 'Selects all elements with that class'
      },
      {
        part: 'background: #7c6cf7;',
        role: 'Shared Color',
        explanation: 'Paints all badge elements bright purple at once.',
        effect: 'Styles all badges simultaneously'
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
      mission: 'Add class="badge" to the Level 99 span, and add a second span for "Rank: Master" with class="badge"!',
      hint: '<span class="badge">Level: 99</span> and <span class="badge">Rank: Master</span>',
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
    title: 'Theme 7: Margin vs Padding (The Secret Cushion)',
    icon: '📦',
    tag: 'padding: 20px;, margin: 20px;',
    humanIntro: {
      whatIsIt: 'In human language, **Padding** is bubble wrap on the inside, and **Margin** is personal space on the outside!',
      whatIsATag: '• `padding: 24px;` puffs up the inside so text doesn\'t touch the box walls.\n• `margin: 20px;` pushes neighboring boxes away so nobody bumps into you.'
    },
    summary: 'Master the difference between inside breathing room (padding) and outside space (margin).',
    story: 'Padding is thick stuffing inside your coat. Margin is your arms stretched out asking friends for personal space.',
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
        role: 'Inside Cushion',
        explanation: 'Bubble wrap inside the box so text does not bump against the border walls.',
        effect: 'Expands breathing room inside'
      },
      {
        part: 'border: 3px solid #2dd4bf;',
        role: 'The Wall',
        explanation: 'Draws a solid cyan wall around the box.',
        effect: 'Visible box boundary'
      },
      {
        part: 'margin: 30px;',
        role: 'Outside Space',
        explanation: 'Personal space outside the box pushing other elements away.',
        effect: 'Pushes neighboring elements away'
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
      mission: 'Set padding to "24px" and margin to "30px" on .box!',
      hint: 'Change padding: 8px; to padding: 24px; and margin: 8px; to margin: 30px;',
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
    title: 'Theme 8: Basic Transform (Rotate, Scale, Tilt)',
    icon: '🌀',
    tag: 'transform: rotate(), scale()',
    humanIntro: {
      whatIsIt: 'In human language, **Transform** is the acrobatics spell of CSS! You can spin elements like a wheel, tilt them like a ramp, or zoom them like a magnifying glass.',
      whatIsATag: '1. `transform: rotate(15deg);` spins an element by degrees (e.g. 15deg, 90deg, 180deg).\n2. `transform: scale(1.3);` multiplies the size (1.3 is 30% bigger!).\n3. `transform: translateY(-20px);` makes an element jump up into the air!'
    },
    summary: 'Make elements spin, zoom, and tilt with CSS transform powers.',
    story: 'Transform lets you bend and reshape elements in 2D space without breaking the rest of the page layout.',
    initialCode: `<style>
  .badge {
    background: #ff757f;
    color: white;
    font-size: 28px;
    padding: 16px 28px;
    border-radius: 14px;
    display: inline-block;
    /* Add transform acrobatics here! */
    transform: rotate(0deg);
  }
</style>

<div style="padding: 40px; text-align: center;">
  <div class="badge">🚀 Blast Off!</div>
</div>`,
    targetCode: `<style>
  .badge {
    background: #ff757f;
    color: white;
    font-size: 28px;
    padding: 16px 28px;
    border-radius: 14px;
    display: inline-block;
    transform: rotate(-12deg) scale(1.2);
  }
</style>

<div style="padding: 40px; text-align: center;">
  <div class="badge">🚀 Blast Off!</div>
</div>`,
    targetDescription: 'A coral-pink rocket badge playfully tilted counter-clockwise at -12 degrees and zoomed 20% larger with scale(1.2).',
    anatomy: [
      {
        part: 'transform:',
        role: 'CSS Transform Property',
        explanation: 'Enables 2D geometric transformation spells on the element.',
        effect: 'Activates geometric transformation'
      },
      {
        part: 'rotate(-12deg)',
        role: 'Rotation Angle',
        explanation: 'Spins the element by -12 degrees (tilted counter-clockwise).',
        effect: 'Tilts the element diagonally'
      },
      {
        part: 'scale(1.2)',
        role: 'Zoom Multiplier',
        explanation: 'Scales the element up by 1.2x (20% bigger than normal).',
        effect: 'Enlarges the element'
      }
    ],
    listOfTags: [
      { code: 'transform: rotate(15deg);', name: 'Rotate', description: 'Spins an element clockwise by specified degrees', exampleHtml: '<div style="transform: rotate(15deg); background: #ff757f; color: white; display: inline-block; padding: 4px;">Rotated</div>' },
      { code: 'transform: scale(1.3);', name: 'Scale (Zoom)', description: 'Multiplies size (1.3 is 30% larger, 0.7 is 30% smaller)', exampleHtml: '<div style="transform: scale(1.2); background: #2dd4bf; color: black; display: inline-block; padding: 4px;">Zoomed</div>' },
      { code: 'transform: translateY(-10px);', name: 'Translate Y', description: 'Shifts an element up (-10px) or down (+10px)', exampleHtml: 'transform: translateY(-10px);' },
      { code: 'transform: rotate(10deg) scale(1.2);', name: 'Combined Transform', description: 'Combines multiple transforms together in one rule', exampleHtml: 'rotate(10deg) scale(1.2)' }
    ],
    tagShowcase: [
      { tag: 'transform: rotate(15deg);', meaning: 'Tilt like a badge' },
      { tag: 'transform: scale(1.3);', meaning: 'Zoom 30% larger' },
      { tag: 'transform: translateY(-10px);', meaning: 'Jump into the air' }
    ],
    quickTags: ['transform: rotate(-12deg);', 'transform: scale(1.2);', 'transform: rotate(-12deg) scale(1.2);'],
    challenge: {
      mission: 'Add rotate and scale to the badge: transform: rotate(-12deg) scale(1.2);!',
      hint: 'Change transform: rotate(0deg); to transform: rotate(-12deg) scale(1.2);',
      rules: [
        {
          type: 'hasCssProperty',
          property: 'transform',
          valuePattern: /rotate/i,
          message: 'Use rotate() in transform!'
        },
        {
          type: 'hasCssProperty',
          property: 'transform',
          valuePattern: /scale/i,
          message: 'Use scale() in transform!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'transform is like holding a picture frame in your hands: you can tilt it crooked or hold it closer to your eyes.',
      discussionQuestions: [
        'What does a negative degree do? (Rotates counter-clockwise!)',
        'What happens if you scale by 2? (It doubles in size!)'
      ],
      commonMistakes: [
        'Writing 12 instead of 12deg (degrees must have deg!)'
      ],
      funActivity: 'Try rotate(180deg) to see the rocket turn completely upside down!'
    }
  },

  // ==========================================
  // THEME 9: Flexbox Superpowers
  // ==========================================
  {
    id: 'theme-9-flexbox',
    module: 'full-powers',
    title: 'Theme 9: Flexbox (Snapping Items in Line)',
    icon: '🧩',
    tag: 'display: flex, justify-content, gap',
    humanIntro: {
      whatIsIt: 'In human language, **Flexbox** is the LEGO snap system of web layout! Without it, elements stack vertically like pancakes.',
      whatIsATag: 'When you whisper `display: flex;` to a parent box, all the children inside snap into a neat horizontal row like ducks in a line!'
    },
    summary: 'Line up buttons, badges, and cards side-by-side with display: flex, justify-content, and gap.',
    story: 'Before flexbox, putting items side-by-side was hard. display: flex makes it instant!',
    initialCode: `<style>
  .row {
    background: #1e2030;
    padding: 16px;
    /* Add flex superpowers here! */
  }
  .item {
    background: #fbbf24;
    color: #000000;
    font-weight: bold;
    padding: 10px 18px;
    border-radius: 8px;
    margin: 4px;
  }
</style>

<div class="row">
  <div class="item">🤖 Bot</div>
  <div class="item">🐱 Cat</div>
  <div class="item">🚀 Rocket</div>
</div>`,
    targetCode: `<style>
  .row {
    background: #1e2030;
    padding: 16px;
    display: flex;
    justify-content: center;
    gap: 16px;
  }
  .item {
    background: #fbbf24;
    color: #000000;
    font-weight: bold;
    padding: 10px 18px;
    border-radius: 8px;
  }
</style>

<div class="row">
  <div class="item">🤖 Bot</div>
  <div class="item">🐱 Cat</div>
  <div class="item">🚀 Rocket</div>
</div>`,
    targetDescription: 'The 3 team member badges snap from a vertical column into a horizontal row, neatly centered with 16px gap spacing.',
    anatomy: [
      {
        part: 'display: flex;',
        role: 'Flex Superpower',
        explanation: 'Snaps all child elements into a single horizontal row.',
        effect: 'Puts items side-by-side'
      },
      {
        part: 'justify-content: center;',
        role: 'Lineup Position',
        explanation: 'Centers all the items together in the middle of the row.',
        effect: 'Centers items horizontally'
      },
      {
        part: 'gap: 16px;',
        role: 'Spacer',
        explanation: 'Creates clean breathing room between each item without messy margins.',
        effect: 'Adds equal space between items'
      }
    ],
    listOfTags: [
      { code: 'display: flex;', name: 'Flex Container', description: 'Activates flexbox layout on the parent container', exampleHtml: 'display: flex;' },
      { code: 'justify-content: center;', name: 'Justify Center', description: 'Centers all items horizontally in the middle', exampleHtml: 'justify-content: center;' },
      { code: 'justify-content: space-between;', name: 'Space Between', description: 'Pushes first item to far left, last to far right', exampleHtml: 'space-between' },
      { code: 'align-items: center;', name: 'Align Items', description: 'Centers all items vertically', exampleHtml: 'align-items: center;' },
      { code: 'gap: 16px;', name: 'Flex Gap', description: 'Creates equal spacing between items', exampleHtml: 'gap: 16px;' }
    ],
    tagShowcase: [
      { tag: 'display: flex;', meaning: 'Snap items side-by-side' },
      { tag: 'justify-content: center;', meaning: 'Line up in the middle' },
      { tag: 'gap: 16px;', meaning: 'Equal air space between' }
    ],
    quickTags: ['display: flex;', 'justify-content: center;', 'justify-content: space-between;', 'gap: 16px;'],
    challenge: {
      mission: 'Add display: flex;, justify-content: center;, and gap: 16px; inside .row!',
      hint: 'Inside .row { ... }, write display: flex; justify-content: center; gap: 16px;',
      rules: [
        {
          type: 'hasCssProperty',
          property: 'display',
          valuePattern: /flex/i,
          message: 'Set display: flex; on .row!'
        },
        {
          type: 'hasCssProperty',
          property: 'justify-content',
          valuePattern: /center|space-between|space-around/i,
          message: 'Add justify-content: center; on .row!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Flexbox is like a magnetic train track: cars immediately latch together in a neat row.',
      discussionQuestions: [
        'What happens if you change justify-content to space-between?',
        'Does display: flex go on the parent container or the child item?'
      ],
      commonMistakes: [
        'Putting display: flex on .item instead of the parent .row'
      ],
      funActivity: 'Try justify-content: space-between to push the rocket and robot to opposite walls!'
    }
  },

  // ==========================================
  // THEME 10: Buttons & Hover Effects
  // ==========================================
  {
    id: 'theme-10-buttons',
    module: 'full-powers',
    title: 'Theme 10: Buttons & Hover Glows',
    icon: '✨',
    tag: '<button>, :hover, transition',
    humanIntro: {
      whatIsIt: 'In human language, **Hover** is what makes video games feel responsive and alive! When your mouse pointer passes over an item, it zooms or glows.',
      whatIsATag: '`:hover` is a CSS pseudo-class that triggers styles only when the cursor is over the element. `transition: transform 0.2s;` makes it animate silky smooth!'
    },
    summary: 'Make buttons spring to life with hover zoom and silky smooth transitions.',
    story: 'Hover is like a pet wagging its tail when you reach out your hand.',
    initialCode: `<style>
  .btn {
    background: #f87171;
    color: white;
    font-size: 18px;
    padding: 12px 24px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  /* Add hover rule here! */
</style>

<button class="btn">⚡ Power Up</button>`,
    targetCode: `<style>
  .btn {
    background: #f87171;
    color: white;
    font-size: 18px;
    padding: 12px 24px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  .btn:hover {
    transform: scale(1.15);
    background: #ef4444;
  }
</style>

<button class="btn">⚡ Power Up</button>`,
    targetDescription: 'When your mouse pointer hovers over the red button, it smoothly zooms 15% larger like a video game action button!',
    anatomy: [
      {
        part: '.btn:hover',
        role: 'Hover State',
        explanation: 'Applies these styles only while the mouse is hovering over the button.',
        effect: 'Triggers on mouse over'
      },
      {
        part: 'transform: scale(1.15);',
        role: 'Zoom Scale',
        explanation: 'Multiplies the size by 1.15 (15% larger).',
        effect: 'Makes the button grow'
      },
      {
        part: 'transition: transform 0.2s;',
        role: 'Smooth Animation',
        explanation: 'Makes the growth take 0.2 seconds smoothly instead of jumping instantly.',
        effect: 'Smooths the motion'
      }
    ],
    listOfTags: [
      { code: ':hover', name: 'Hover State', description: 'Styles that trigger only when the mouse cursor is over the element', exampleHtml: '.btn:hover { ... }' },
      { code: 'cursor: pointer;', name: 'Hand Cursor', description: 'Turns the mouse cursor into a clicking hand 👆', exampleHtml: 'cursor: pointer;' },
      { code: 'transition: all 0.3s ease;', name: 'Transition', description: 'Animates changes smoothly over time instead of snapping instantly', exampleHtml: 'transition: all 0.3s;' }
    ],
    tagShowcase: [
      { tag: '.btn:hover', meaning: 'When mouse touches button' },
      { tag: 'transition: 0.2s;', meaning: 'Smooth animation speed' }
    ],
    quickTags: ['.btn:hover {', 'transform: scale(1.15);', 'background: #ef4444;', '}'],
    challenge: {
      mission: 'Add a .btn:hover rule that sets transform: scale(1.15);!',
      hint: 'Write .btn:hover { transform: scale(1.15); }',
      rules: [
        {
          type: 'custom',
          check: (code) => /:hover/i.test(code),
          message: 'Add the :hover selector!'
        },
        {
          type: 'hasCssProperty',
          property: 'transform',
          valuePattern: /scale/i,
          message: 'Add transform: scale(...) inside the :hover rule!'
        }
      ]
    },
    teacherGuide: {
      analogy: ':hover is like a puppy that wags its tail when you reach out your hand.',
      discussionQuestions: [
        'What would happen if you forgot transition? (It would snap abruptly)',
        'What does scale(1.3) do compared to scale(0.9)?'
      ],
      commonMistakes: [
        'Putting a space between .btn and :hover (.btn:hover must touch!)'
      ],
      funActivity: 'Try transform: rotate(10deg) scale(1.2) to make the button tilt playfully!'
    }
  },

  // ==========================================
  // THEME 11: Links & Portals
  // ==========================================
  {
    id: 'theme-11-links',
    module: 'full-powers',
    title: 'Theme 11: Links & Web Portals',
    icon: '🌐',
    tag: '<a href="" target="_blank">',
    humanIntro: {
      whatIsIt: 'In human language, a **Link** is a teleporter door! Click it, and you travel to another web page anywhere on Earth.',
      whatIsATag: '`<a>` stands for Anchor. The attribute `href` is where the teleporter leads. `target="_blank"` tells the browser to open it in a brand new tab!'
    },
    summary: 'Connect pages across the world with clickable hyperlink portals.',
    story: 'The web is called a "web" because billions of pages are linked together by <a> tags.',
    initialCode: `<p>
  🚀 Teleport to 
  <a href="https://en.wikipedia.org/wiki/Mars" target="_blank">Planet Mars</a>!
</p>`,
    targetCode: `<p>
  🚀 Teleport to 
  <a href="https://en.wikipedia.org/wiki/Mars" target="_blank">Planet Mars</a>!
</p>
<p>
  🪐 Teleport to 
  <a href="https://en.wikipedia.org/wiki/Saturn" target="_blank">Planet Saturn</a>!
</p>`,
    targetDescription: 'Two clickable blue links with space emojis. Clicking either link opens its Wikipedia page in a new tab.',
    anatomy: [
      {
        part: '<a',
        role: 'Anchor Tag',
        explanation: 'Short for Anchor. Creates a link to another page.',
        effect: 'Makes text clickable'
      },
      {
        part: 'href="..."',
        role: 'Destination Portal',
        explanation: 'Hypertext REFerence: the exact website address to visit.',
        effect: 'Points to target URL'
      },
      {
        part: 'target="_blank"',
        role: 'New Tab Flag',
        explanation: 'Tells the browser to open the link in a fresh, new tab.',
        effect: 'Prevents losing current page'
      }
    ],
    listOfTags: [
      { code: '<a href="..."> ... </a>', name: 'Hyperlink', description: 'Creates a clickable link to another webpage', exampleHtml: '<a href="https://google.com">Google</a>' },
      { code: 'href="https://..."', name: 'Destination URL', description: 'The web address where the link teleports', exampleHtml: 'href="https://wikipedia.org"' },
      { code: 'target="_blank"', name: 'New Tab', description: 'Opens the clicked link in a brand new browser tab', exampleHtml: 'target="_blank"' }
    ],
    tagShowcase: [
      { tag: '<a href="...">', meaning: 'Teleporter door' },
      { tag: 'target="_blank"', meaning: 'Opens in new tab' }
    ],
    quickTags: ['<a href="" target="_blank">', '</a>', 'target="_blank"'],
    challenge: {
      mission: 'Add a second link teleporting to "Planet Saturn"!',
      hint: '<a href="https://en.wikipedia.org/wiki/Saturn" target="_blank">Planet Saturn</a>',
      rules: [
        {
          type: 'custom',
          check: (code) => (code.match(/<a\s/gi) || []).length >= 2,
          message: 'Add at least TWO <a> link tags!'
        },
        {
          type: 'custom',
          check: (code) => /saturn/i.test(code),
          message: 'One link must mention Saturn!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Links are like portal doors in video games: step through and arrive at a new planet.',
      discussionQuestions: [
        'Why does the cursor turn into a pointing hand 👆 over links?',
        'What does href stand for?'
      ],
      commonMistakes: [
        'Spelling href as "herf"'
      ],
      funActivity: 'Click a link and watch the new tab open!'
    }
  },

  // ==========================================
  // THEME 12: Lists
  // ==========================================
  {
    id: 'theme-12-lists',
    module: 'full-powers',
    title: 'Theme 12: Bullet & Numbered Lists',
    icon: '📜',
    tag: '<ul>, <ol>, <li>',
    humanIntro: {
      whatIsIt: 'In human language, a **List** is how we organize items cleanly — like an RPG backpack inventory, a recipe, or a top score leaderboard.',
      whatIsATag: '`<ul>` makes bullet dots (Unordered). `<ol>` makes numbers 1, 2, 3 (Ordered). Every item gets wrapped in `<li>` (List Item)!'
    },
    summary: 'Organize items with bullet points or sequential numbers.',
    story: '<ul> is like ingredients in a salad. <ol> is like steps in a recipe where order matters.',
    initialCode: `<ul>
  <li>Wooden Sword 🗡️</li>
  <li>Health Potion 🧪</li>
  <li>Golden Apple 🍏</li>
</ul>`,
    targetCode: `<ul>
  <li>Wooden Sword 🗡️</li>
  <li>Health Potion 🧪</li>
  <li>Golden Apple 🍏</li>
  <li>Dragon Shield 🛡️</li>
</ul>`,
    targetDescription: 'A clean 4-item bullet inventory list: Sword, Potion, Golden Apple, and Dragon Shield.',
    anatomy: [
      {
        part: '<ul>',
        role: 'Unordered List',
        explanation: 'Creates a list where items have bullet points.',
        effect: 'Wraps items in bullet points'
      },
      {
        part: '<li>',
        role: 'List Item',
        explanation: 'Short for List Item. Every single item needs its own <li> tag.',
        effect: 'Creates a single bullet row'
      }
    ],
    listOfTags: [
      { code: '<ul> ... </ul>', name: 'Bullet List', description: 'Unordered list (dots before each item)', exampleHtml: '<ul><li>Item</li></ul>' },
      { code: '<ol> ... </ol>', name: 'Numbered List', description: 'Ordered list with automatic 1, 2, 3 numbers', exampleHtml: '<ol><li>Step 1</li></ol>' },
      { code: '<li> ... </li>', name: 'List Item', description: 'A single row/item inside any list', exampleHtml: '<li>Dragon Shield</li>' }
    ],
    tagShowcase: [
      { tag: '<ul>', meaning: 'Bullet list' },
      { tag: '<ol>', meaning: 'Numbered list' },
      { tag: '<li>', meaning: 'Single list item' }
    ],
    quickTags: ['<ul>', '</ul>', '<li>', '</li>', '<ol>', '</ol>'],
    challenge: {
      mission: 'Add a 4th inventory item to the list: "Dragon Shield 🛡️"!',
      hint: 'Add <li>Dragon Shield 🛡️</li> right before </ul>.',
      rules: [
        {
          type: 'hasTag',
          tag: 'ul',
          message: 'Keep the <ul> tag!'
        },
        {
          type: 'custom',
          check: (code) => /Dragon Shield/i.test(code),
          message: 'Add "Dragon Shield 🛡️" as a list item!'
        }
      ]
    },
    teacherGuide: {
      analogy: '<ul> is a shopping cart. <ol> is a race podium.',
      discussionQuestions: [
        'When would you use numbers instead of bullets?'
      ],
      commonMistakes: [
        'Writing list text without <li> tags'
      ],
      funActivity: 'Change <ul> to <ol> and watch bullets turn into numbers!'
    }
  },

  // ==========================================
  // THEME 13: Colors & Gradients
  // ==========================================
  {
    id: 'theme-13-colors',
    module: 'full-powers',
    title: 'Theme 13: Color Codes & Gradients',
    icon: '🎨',
    tag: 'color: #ff007f, background: linear-gradient()',
    humanIntro: {
      whatIsIt: 'In human language, computers understand millions of colors using secret **Hex Codes** (like #2dd4bf) or **Gradients** that melt two colors together!',
      whatIsATag: '`background: linear-gradient(135deg, #ff757f, #2dd4bf);` creates a futuristic sunset blending from coral pink to mint teal.'
    },
    summary: 'Mix hex colors and create multi-color gradients.',
    story: 'A gradient is like watching the sunset sky melt from orange into deep purple.',
    initialCode: `<style>
  .card {
    background: #1e2030;
    color: white;
    padding: 24px;
    border-radius: 12px;
    text-align: center;
  }
</style>

<div class="card">
  <h2>✨ Aurora Station</h2>
  <p>Paints the sky with glowing colors</p>
</div>`,
    targetCode: `<style>
  .card {
    background: linear-gradient(135deg, #ff757f, #7c6cf7);
    color: white;
    padding: 24px;
    border-radius: 12px;
    text-align: center;
  }
</style>

<div class="card">
  <h2>✨ Aurora Station</h2>
  <p>Paints the sky with glowing colors</p>
</div>`,
    targetDescription: 'A glowing card with a smooth gradient background melting from coral pink into rich purple.',
    anatomy: [
      {
        part: 'background: linear-gradient(...)',
        role: 'Gradient Fill',
        explanation: 'Blends two colors across an angle (135deg).',
        effect: 'Smooth color transition'
      }
    ],
    listOfTags: [
      { code: 'color: #...', name: 'Hex Color', description: 'Sets text color using 6-digit hex code', exampleHtml: 'color: #2dd4bf;' },
      { code: 'background: linear-gradient(...)', name: 'Linear Gradient', description: 'Smoothly blends two or more colors at an angle', exampleHtml: 'linear-gradient(45deg, pink, blue)' }
    ],
    tagShowcase: [
      { tag: '#ff757f', meaning: 'Hex color code' },
      { tag: 'linear-gradient()', meaning: 'Two-color sunset melt' }
    ],
    quickTags: ['linear-gradient(135deg, #ff757f, #7c6cf7);', 'background: linear-gradient('],
    challenge: {
      mission: 'Give .card a linear-gradient background from #ff757f to #7c6cf7!',
      hint: 'Set background: linear-gradient(135deg, #ff757f, #7c6cf7);',
      rules: [
        {
          type: 'hasCssProperty',
          property: 'background',
          valuePattern: /linear-gradient/i,
          message: 'Use a linear-gradient background!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'A gradient is like mixing red and yellow paint on a wet canvas.',
      discussionQuestions: [
        'What does 135deg mean? (The angle the colors flow!)'
      ],
      commonMistakes: [
        'Missing commas between the colors in linear-gradient'
      ],
      funActivity: 'Try 3 colors in linear-gradient: red, yellow, blue!'
    }
  },

  // ==========================================
  // THEME 14: Fonts & Typography
  // ==========================================
  {
    id: 'theme-14-fonts',
    module: 'full-powers',
    title: 'Theme 14: Fonts & Neon Glows',
    icon: '🔤',
    tag: 'font-size, text-shadow',
    humanIntro: {
      whatIsIt: 'In human language, fonts give your words character! A scary story needs a spooky font; a spaceship needs a futuristic computer font.',
      whatIsATag: '`font-size` makes letters huge, and `text-shadow` casts a colored neon light behind the words.'
    },
    summary: 'Make words gigantic and add neon light halos behind letters.',
    story: 'text-shadow shines a flashlight behind your text onto the wall.',
    initialCode: `<style>
  .title {
    font-size: 32px;
    color: #ffffff;
    text-shadow: 0 0 10px #f472b6;
    text-align: center;
  }
</style>

<div class="title">NEON NIGHTS</div>`,
    targetCode: `<style>
  .title {
    font-size: 48px;
    color: #ffffff;
    text-shadow: 0 0 15px #f472b6, 0 0 30px #f472b6;
    text-align: center;
  }
</style>

<div class="title">NEON NIGHTS</div>`,
    targetDescription: 'A 48px gigantic title "NEON NIGHTS" radiating a vivid hot-pink neon glow in the dark.',
    anatomy: [
      {
        part: 'font-size: 48px;',
        role: 'Letter Height',
        explanation: 'Sets how tall the letters stand in pixels.',
        effect: 'Enlarges text'
      },
      {
        part: 'text-shadow: 0 0 15px #f472b6;',
        role: 'Neon Glow',
        explanation: 'Horizontal blur, vertical blur, blur radius, and color.',
        effect: 'Creates neon halo'
      }
    ],
    listOfTags: [
      { code: 'font-size: 48px;', name: 'Font Size', description: 'Controls the height of letters in pixels', exampleHtml: 'font-size: 32px;' },
      { code: 'text-shadow: 0 0 10px color;', name: 'Text Shadow', description: 'Creates a glowing halo or drop shadow behind text', exampleHtml: 'text-shadow: 0 0 10px pink;' }
    ],
    tagShowcase: [
      { tag: 'font-size: 48px;', meaning: 'Giant letter size' },
      { tag: 'text-shadow: 0 0 15px color;', meaning: 'Neon light glow' }
    ],
    quickTags: ['font-size: 48px;', 'text-shadow: 0 0 20px #f472b6;'],
    challenge: {
      mission: 'Make the font-size "48px" on .title!',
      hint: 'Change font-size: 32px; to font-size: 48px;',
      rules: [
        {
          type: 'hasCssProperty',
          property: 'font-size',
          valuePattern: /48px/i,
          message: 'Set font-size to 48px!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Shining a flashlight behind letters onto a wall.',
      discussionQuestions: [
        'What does px stand for? (Pixels)'
      ],
      commonMistakes: [
        'Adding a space: "48 px" (must be "48px")'
      ],
      funActivity: 'Set font-size to 72px!'
    }
  },

  // ==========================================
  // THEME 15: Rounded Corners & Circles
  // ==========================================
  {
    id: 'theme-15-shapes',
    module: 'full-powers',
    title: 'Theme 15: Rounded Corners & 50% Circles',
    icon: '🔮',
    tag: 'border-radius: 50%',
    humanIntro: {
      whatIsIt: 'In human language, `border-radius` takes sandpaper to sharp corners until they are smooth curves or circles.',
      whatIsATag: 'On an exact square, `border-radius: 50%` rounds the corners so far that the box turns into a **perfect round circle**!'
    },
    summary: 'Turn sharp square boxes into round avatar badges and pill buttons.',
    story: 'border-radius: 50% turns a square avatar into a round profile badge.',
    initialCode: `<style>
  .avatar {
    width: 100px;
    height: 100px;
    background: #ff757f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    border-radius: 0px;
  }
</style>

<div class="avatar">🐱</div>`,
    targetCode: `<style>
  .avatar {
    width: 100px;
    height: 100px;
    background: #ff757f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    border-radius: 50%;
  }
</style>

<div class="avatar">🐱</div>`,
    targetDescription: 'A round coral-pink avatar badge with a cat emoji in the center.',
    anatomy: [
      {
        part: 'border-radius: 50%;',
        role: 'Circle Spell',
        explanation: 'Curves all 4 corners so much it morphs into a circle.',
        effect: 'Turns square into circle'
      }
    ],
    listOfTags: [
      { code: 'border-radius: 12px;', name: 'Rounded Corner', description: 'Gently rounds corners like an app icon', exampleHtml: 'border-radius: 12px;' },
      { code: 'border-radius: 50%;', name: 'Circle', description: 'Turns an exact square into a 100% round circle', exampleHtml: 'border-radius: 50%;' }
    ],
    tagShowcase: [
      { tag: 'border-radius: 12px;', meaning: 'Rounded app icon' },
      { tag: 'border-radius: 50%;', meaning: 'Perfect circle' }
    ],
    quickTags: ['border-radius: 50%;', 'border-radius: 16px;'],
    challenge: {
      mission: 'Set border-radius: 50% on .avatar to make it a circle!',
      hint: 'Change border-radius: 0px; to border-radius: 50%;',
      rules: [
        {
          type: 'hasCssProperty',
          property: 'border-radius',
          valuePattern: /50%/i,
          message: 'Set border-radius to 50%!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Sanding corners off a wooden block.',
      discussionQuestions: [
        'Why does 50% make a square a circle?'
      ],
      commonMistakes: [
        'Typing 50px instead of 50%'
      ],
      funActivity: 'Set border-radius: 20px for an iPhone app icon look!'
    }
  },

  // ==========================================
  // THEME 16: Animations & Keyframes
  // ==========================================
  {
    id: 'theme-16-animations',
    module: 'full-powers',
    title: 'Theme 16: Keyframe Animations (Alive & Bouncing)',
    icon: '🎈',
    tag: '@keyframes, animation: bounce infinite',
    humanIntro: {
      whatIsIt: 'In human language, `@keyframes` turns you into a cartoon animator like at Disney or Pixar! You draw starting position (0%) and finish position (100%), and the browser animates it forever.',
      whatIsATag: '`@keyframes bounce { 0% { transform: translateY(0); } 100% { transform: translateY(-20px); } }` makes an alien float continuously in zero gravity!'
    },
    summary: 'Make characters and buttons bounce, float, and pulse continuously on their own.',
    story: 'Keyframes are like flipbook drawings: rapid frames that create smooth motion.',
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
    targetDescription: 'A purple alien invader 👾 continuously floating up and down in space smoothly in zero gravity.',
    anatomy: [
      {
        part: '@keyframes bounce { ... }',
        role: 'Animation Timeline',
        explanation: 'Defines the choreography from 0% (start) to 100% (finish).',
        effect: 'Defines the motion path'
      },
      {
        part: 'animation: bounce 1s infinite alternate;',
        role: 'Animation Attachment',
        explanation: 'Name (bounce), speed (1s), loop (infinite), and back-and-forth (alternate).',
        effect: 'Runs the animation continuously'
      }
    ],
    listOfTags: [
      { code: '@keyframes name { ... }', name: 'Keyframe Rule', description: 'Defines the movement timeline for an animation', exampleHtml: '@keyframes bounce { 0% { ... } }' },
      { code: 'animation: name 1s infinite;', name: 'Animation Property', description: 'Attaches the animation timeline to any element to make it dance', exampleHtml: 'animation: bounce 1s infinite;' }
    ],
    tagShowcase: [
      { tag: '@keyframes name', meaning: 'The dance choreography' },
      { tag: 'animation: name 1s infinite;', meaning: 'Loop the dance forever' }
    ],
    quickTags: ['animation: bounce 1s infinite alternate;', '@keyframes bounce {'],
    challenge: {
      mission: 'Add animation: bounce 1s infinite alternate; to the .alien!',
      hint: 'Inside .alien { ... }, write animation: bounce 1s infinite alternate;',
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
      analogy: 'Flipbook drawings flipped fast with your thumb.',
      discussionQuestions: [
        'What does "infinite" mean? (Loops forever without stopping!)',
        'What happens if you change 1s to 0.2s? (It vibrates super fast!)'
      ],
      commonMistakes: [
        'Mismatched animation name in @keyframes and the animation property'
      ],
      funActivity: 'Change 1s to 0.1s to watch the alien buzz like a bee!'
    }
  }
];

function getLessonById(id) {
  return LESSONS.find(l => l.id === id) || LESSONS[0];
}

function getLessonsByModule(moduleId) {
  return LESSONS.filter(l => l.module === moduleId);
}


  // --- Validator Module ---
  /**
 * CodeCraft Challenge Validator
 * Evaluates whether student HTML/CSS code meets the learning objectives.
 */

function validateChallenge(code, rules = []) {
  if (!code || typeof code !== 'string') {
    return {
      passed: false,
      feedback: ['Write some code in the editor to start the challenge!']
    };
  }

  const feedback = [];

  for (const rule of rules) {
    let passed = false;

    switch (rule.type) {
      case 'hasTag': {
        const tagRegex = new RegExp(`<\\s*${rule.tag}(\\s+[^>]*)?>`, 'i');
        passed = tagRegex.test(code);
        break;
      }

      case 'hasAttribute': {
        // Looks for <tag ... attr="..." or attr='...' or attr>
        const attrRegex = new RegExp(`<\\s*${rule.tag}[^>]*\\s+${rule.attribute}(?:\\s*=\\s*["'][^"']*["'])?[^>]*>`, 'i');
        passed = attrRegex.test(code);
        break;
      }

      case 'hasCssProperty': {
        // Check for style tag or inline style with property: value
        // Matches e.g. color: hotpink; or style="... color: hotpink ..."
        const escapedProp = rule.property.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const cssRegex = new RegExp(`${escapedProp}\\s*:\\s*([^;}"']+)`, 'gi');
        let match;
        while ((match = cssRegex.exec(code)) !== null) {
          const val = match[1].trim();
          if (!rule.valuePattern || rule.valuePattern.test(val)) {
            passed = true;
            break;
          }
        }
        break;
      }

      case 'tagContainsText': {
        // Matches <tag ...>content</tag>
        const tagContentRegex = new RegExp(`<\\s*${rule.tag}[^>]*>([\\s\\S]*?)<\\s*\\/\\s*${rule.tag}\\s*>`, 'i');
        const match = tagContentRegex.exec(code);
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
          passed = !!rule.check(code);
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
 * Pure immutable state transitions for progress, badges, and preferences.
 */

const STORAGE_KEY = 'codecraft_kids_v1_state';

function createInitialState() {
  return {
    studentName: 'Code Cadet',
    studentAvatar: '🚀',
    stars: 0,
    completedLessons: [],
    badges: [],
    currentLessonId: 'html-bones',
    teacherMode: false,
    audioEnabled: true,
    theme: 'candy', // 'candy' | 'arcade' | 'space' | 'sunshine'
    customSandboxCode: `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: 'Comic Sans MS', 'Chalkboard SE', cursive, sans-serif;
        background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
        text-align: center;
      }
      .card {
        background: white;
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        max-width: 320px;
      }
      h1 { color: #ff4757; }
      button {
        background: #2ed573;
        color: white;
        border: none;
        padding: 12px 24px;
        font-size: 18px;
        border-radius: 12px;
        cursor: pointer;
        transition: transform 0.2s;
      }
      button:hover {
        transform: scale(1.1);
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>🚀 My Secret Lab!</h1>
      <p>I can build anything here!</p>
      <button onclick="alert('Superpower Activated! ⚡')">Press Me</button>
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

  // Check for auto-unlocked badges
  const updatedBadges = [...state.badges];
  if (updatedCompleted.length >= 1 && !updatedBadges.includes('first-code')) {
    updatedBadges.push('first-code');
  }
  if (updatedCompleted.length >= 5 && !updatedBadges.includes('apprentice')) {
    updatedBadges.push('apprentice');
  }
  if (updatedCompleted.length >= 10 && !updatedBadges.includes('master-crafter')) {
    updatedBadges.push('master-crafter');
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

function saveStateToStorage(state, storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.setItem) {
      store.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  } catch (e) {
    console.warn('Could not save state to storage:', e);
  }
}

function loadStateFromStorage(storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.getItem) {
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

function speakText(text, onEndCallback = null) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this environment');
    return;
  }

  // Stop any ongoing speech
  window.speechSynthesis.cancel();

  if (!text) return;

  // Clean HTML tags or formatting
  const plainText = text.replace(/<[^>]+>/g, '').replace(/[#*`_]/g, '');

  const utterance = new SpeechSynthesisUtterance(plainText);
  utterance.rate = 0.95; // slightly slower, clear for kids
  utterance.pitch = 1.1; // friendly, upbeat

  // Pick a friendly English voice if available
  const voices = window.speechSynthesis.getVoices();
  const friendlyVoice = voices.find(
    v => (v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Natural') || v.name.includes('Zira')) && v.lang.startsWith('en')
  ) || voices.find(v => v.lang.startsWith('en'));

  if (friendlyVoice) {
    utterance.voice = friendlyVoice;
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


  // --- Main App Controller ---
  /**
 * CodeCraft Kids Main Application Controller
 * Focused, uncluttered, step-by-step educational interface.
 */








// Application State
let state = loadStateFromStorage();
let currentView = 'lesson'; // 'lesson' | 'sandbox'
let activePreviewTab = 'live'; // 'live' | 'target' | 'side'
let currentCode = '';

// DOM Elements Cache
const elements = {};

function initApp() {
  cacheElements();
  attachGlobalListeners();
  applyStateToUI();
  selectLesson(state.currentLessonId || LESSONS[0].id);
}

function cacheElements() {
  elements.app = document.body;
  elements.starCount = document.getElementById('star-count');
  elements.btnAudio = document.getElementById('btn-audio');
  elements.btnTeacher = document.getElementById('btn-teacher');
  elements.btnSandbox = document.getElementById('btn-sandbox');

  elements.sidebarLessonList = document.getElementById('sidebar-lesson-list');
  elements.progressFill = document.getElementById('progress-fill');
  elements.progressText = document.getElementById('progress-text');

  elements.workspaceStage = document.getElementById('workspace-stage');
  elements.confettiCanvas = document.getElementById('confetti-canvas');
}

function attachGlobalListeners() {
  // Audio toggle
  elements.btnAudio?.addEventListener('click', () => {
    state.audioEnabled = !state.audioEnabled;
    saveStateToStorage(state);
    elements.btnAudio.textContent = state.audioEnabled ? '🔊 Sound: ON' : '🔇 Sound: OFF';
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

  // Free Sandbox toggle
  elements.btnSandbox?.addEventListener('click', () => {
    currentView = currentView === 'sandbox' ? 'lesson' : 'sandbox';
    elements.btnSandbox.classList.toggle('active', currentView === 'sandbox');
    playSound('click', state.audioEnabled);

    if (currentView === 'sandbox') {
      renderSandboxView();
    } else {
      renderLessonView();
    }
  });

  // Brand click -> Return to lessons
  document.querySelector('.brand')?.addEventListener('click', () => {
    currentView = 'lesson';
    elements.btnSandbox?.classList.remove('active');
    playSound('click', state.audioEnabled);
    selectLesson(LESSONS[0].id);
  });
}

function applyStateToUI() {
  if (elements.starCount) elements.starCount.textContent = `⭐ ${state.stars}`;
  if (elements.btnTeacher) elements.btnTeacher.classList.toggle('active', state.teacherMode);
  if (elements.btnAudio) elements.btnAudio.textContent = state.audioEnabled ? '🔊 Sound: ON' : '🔇 Sound: OFF';
  updateProgressUI();
  renderSidebar();
}

function updateProgressUI() {
  const total = LESSONS.length;
  const completed = state.completedLessons.length;
  const percent = Math.round((completed / total) * 100);

  if (elements.progressFill) elements.progressFill.style.width = `${percent}%`;
  if (elements.progressText) elements.progressText.textContent = `${completed} / ${total} Lessons (${percent}%)`;
}

function renderSidebar() {
  if (!elements.sidebarLessonList) return;

  let html = '';
  MODULES.forEach(mod => {
    const modLessons = LESSONS.filter(l => l.module === mod.id);
    if (modLessons.length === 0) return;

    html += `<div class="nav-section-title">${mod.title}</div>`;
    html += `<ul class="lesson-list">`;
    modLessons.forEach(lesson => {
      const isCompleted = isLessonCompleted(state, lesson.id);
      const isActive = currentView === 'lesson' && state.currentLessonId === lesson.id;
      html += `
        <li class="lesson-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" data-lesson-id="${lesson.id}">
          <span class="lesson-item-icon">${lesson.icon}</span>
          <span class="lesson-item-text">${lesson.title}</span>
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
      currentView = 'lesson';
      elements.btnSandbox?.classList.remove('active');
      playSound('click', state.audioEnabled);
      selectLesson(lessonId);
    });
  });
}

function selectLesson(lessonId) {
  const lesson = getLessonById(lessonId) || LESSONS[0];
  state.currentLessonId = lesson.id;
  currentCode = lesson.initialCode;
  saveStateToStorage(state);

  renderSidebar();
  renderLessonView();
}

/**
 * Wraps bare student snippets cleanly so kids never have to write HTML boilerplate!
 */
function wrapForPreview(snippet) {
  if (snippet.includes('<!DOCTYPE') || snippet.includes('<html')) {
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
      background: #0f1019;
      color: #f1f5f9;
      line-height: 1.6;
    }
    h1, h2, h3, h4 { margin-top: 0; color: #ffffff; }
    p { margin-bottom: 16px; color: #cbd5e1; }
    button {
      background: #7c6cf7;
      color: #ffffff;
      border: none;
      padding: 10px 18px;
      font-size: 15px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 700;
      margin-right: 8px;
      margin-bottom: 8px;
    }
    button:hover { background: #6957ea; }
    ul, ol { padding-left: 24px; margin-bottom: 16px; }
    li { margin-bottom: 6px; }
    a { color: #38bdf8; text-decoration: underline; }
    img { max-width: 100%; height: auto; border-radius: 8px; }
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
      <div>
        <div class="banner-meta">
          <span class="badge-module">${lesson.module.toUpperCase()}</span>
          <span class="badge-tags">${lesson.tag}</span>
          ${isCompleted ? '<span style="color: var(--accent-green); font-weight: 800; font-size: 12px;">✅ Completed!</span>' : ''}
        </div>
        <h2 class="banner-title">${lesson.icon} ${lesson.title}</h2>
        <p class="banner-summary">${lesson.summary}</p>
      </div>
      <div>
        <button id="btn-tag-list" class="btn-header" style="background: rgba(124, 108, 247, 0.2); color: #c8d3f5; border-color: var(--primary); font-weight: 800;">
          📋 List of Tags
        </button>
      </div>
    </div>

    <!-- Teacher Coaching Playbook (Toggleable) -->
    <div id="teacher-playbook-box" class="teacher-playbook" style="${state.teacherMode ? 'display:block' : 'display:none'}">
      <h4>🧑‍🏫 Teacher Coaching Guide</h4>
      <div class="teacher-playbook-grid">
        <div class="teacher-item">
          <strong>💡 Kid Analogy:</strong>
          <span>${lesson.teacherGuide.analogy}</span>
        </div>
        <div class="teacher-item">
          <strong>🗣️ Question to Ask Aloud:</strong>
          <span>${lesson.teacherGuide.discussionQuestions[0] || ''}</span>
        </div>
        <div class="teacher-item">
          <strong>⚠️ Watch Out For:</strong>
          <span>${lesson.teacherGuide.commonMistakes[0] || ''}</span>
        </div>
      </div>
    </div>

    <!-- STEP 1: In Human Language (Plain explanation for kids) -->
    ${renderHumanIntro(lesson)}

    <!-- STEP 2: Tag Showcase (Simple examples: <b>, <i>, <u>, etc.) -->
    ${renderTagShowcase(lesson)}

    <!-- STEP 3: Step-by-Step Anatomy (Opening vs Closing & What each part does to the result) -->
    ${renderAnatomySection(lesson)}

    <!-- Editor & Live Preview Split -->
    <div class="editor-stage-split">
      <!-- Left: Code Studio -->
      <div class="pane-card">
        <div class="pane-header">
          <div class="pane-title">
            <span>💻</span> Code (Edit Here)
          </div>
          <div class="pane-tools">
            <button id="btn-reset-code" class="btn-tool" title="Reset back to example">🔄 Reset</button>
            <button id="btn-copy-code" class="btn-tool" title="Copy code">📋 Copy</button>
          </div>
        </div>

        <!-- Quick Tag Shortcuts -->
        <div class="quick-tags-bar">
          <span class="quick-tag-label">Tags:</span>
          ${lesson.quickTags.map(t => `<button class="tag-chip" data-tag="${t}">${escapeHtml(t)}</button>`).join('')}
        </div>

        <!-- Code Editor -->
        <div class="code-editor-wrapper">
          <div id="line-numbers" class="editor-line-numbers">1</div>
          <textarea id="code-textarea" class="code-textarea" spellcheck="false">${currentCode}</textarea>
        </div>
      </div>

      <!-- Right: Preview Stage -->
      <div class="pane-card">
        <div class="pane-header">
          <div class="pane-title">
            <span>👁️</span> What the Browser Draws
          </div>
          <div class="preview-tabs">
            <button id="tab-live" class="prev-tab-btn active">Your Result</button>
            <button id="tab-target" class="prev-tab-btn">🎯 Target Goal</button>
            <button id="tab-side" class="prev-tab-btn">⚖️ Compare</button>
          </div>
        </div>

        <div id="preview-container" class="preview-wrapper">
          <iframe id="live-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
        </div>
      </div>
    </div>

    <!-- Bottom Action Dock -->
    <div class="mission-dock">
      <div>
        <div class="mission-tag">🎯 Mission</div>
        <div class="mission-text">${lesson.challenge.mission}</div>
      </div>
      <div class="mission-actions">
        <button id="btn-hint" class="btn-hint">💡 Hint</button>
        <button id="btn-verify-mission" class="btn-verify">🚀 Check My Code!</button>
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
        <h4>💡 In Human Language: What is this?</h4>
        <p>${lesson.humanIntro.whatIsIt}</p>
      </div>
      <div class="human-intro-item">
        <h4>🥪 The Secret Tag Sandwich: Opening vs Closing</h4>
        <p>${lesson.humanIntro.whatIsATag}</p>
      </div>
    </div>
  `;
}

function renderTagShowcase(lesson) {
  if (!lesson.tagShowcase || lesson.tagShowcase.length === 0) return '';

  return `
    <div class="tag-showcase-bar">
      <span class="showcase-label">🏷️ Simple Tags to Know:</span>
      <div class="showcase-chips">
        ${lesson.tagShowcase.map(t => `
          <div class="showcase-chip" title="${t.meaning}">
            <code>${escapeHtml(t.tag)}</code>
            <span>${t.meaning}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderAnatomySection(lesson) {
  if (!lesson.anatomy || lesson.anatomy.length === 0) return '';

  return `
    <div class="step-breakdown-card">
      <div class="step-card-header">
        <h3>🔍 Step-by-Step Breakdown: What Each Part Does to the Result</h3>
      </div>
      <div class="step-grid">
        ${lesson.anatomy.map(step => `
          <div class="step-item">
            <div class="step-part-row">
              <span class="step-code-chip">${escapeHtml(step.part)}</span>
              <span class="step-role-badge">${step.role}</span>
            </div>
            <div class="step-explanation">${step.explanation}</div>
            <div class="step-effect">
              <span>👉</span>
              <span><strong>Result:</strong> ${step.effect}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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

  // Reset
  document.getElementById('btn-reset-code')?.addEventListener('click', () => {
    textarea.value = lesson.initialCode;
    currentCode = lesson.initialCode;
    updateLivePreview();
    updateLineNumbers();
    playSound('click', state.audioEnabled);
  });

  // Copy
  document.getElementById('btn-copy-code')?.addEventListener('click', () => {
    navigator.clipboard?.writeText(textarea.value);
    const btn = document.getElementById('btn-copy-code');
    btn.textContent = '✅ Copied!';
    setTimeout(() => { btn.textContent = '📋 Copy'; }, 1500);
  });

  // List of Tags Button
  document.getElementById('btn-tag-list')?.addEventListener('click', () => {
    openTagListModal(lesson);
  });

  // Preview Tabs
  setupPreviewTabs(lesson);

  // Hint
  document.getElementById('btn-hint')?.addEventListener('click', () => {
    playSound('click', state.audioEnabled);
    alert(`💡 HINT:\n\n${lesson.challenge.hint}`);
  });

  // Check code
  document.getElementById('btn-verify-mission')?.addEventListener('click', () => {
    handleChallengeVerification(lesson);
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

  const lines = textarea.value.split('\n').length;
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
          <strong>🎯 What the Result Should Look Like:</strong>
          <p style="margin: 4px 0 0; white-space: pre-line;">${lesson.targetDescription}</p>
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
          <div style="background: var(--bg-surface); padding: 4px 10px; font-size: 10px; font-weight: 800; color: var(--text-muted);">YOUR RESULT</div>
          <iframe id="live-iframe" class="preview-iframe" sandbox="allow-scripts allow-modals"></iframe>
        </div>
        <div style="display: flex; flex-direction: column;">
          <div style="background: var(--bg-surface); padding: 4px 10px; font-size: 10px; font-weight: 800; color: var(--text-muted);">TARGET GOAL</div>
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
          <span>📋</span> List of Tags: ${lesson.title}
        </h3>
        <button id="btn-close-tag-modal" style="font-size: 16px; background: transparent; border: none; color: var(--text-muted); cursor: pointer; padding: 4px 8px;">✕</button>
      </div>

      <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px; text-align: left;">
        Here are all the codes and tags you learn in this theme. Click any code chip to copy it!
      </p>

      <div class="tag-list-table-wrapper">
        <table class="tag-list-table">
          <thead>
            <tr>
              <th style="width: 32%;">Code / Tag</th>
              <th style="width: 25%;">Name</th>
              <th>Meaning (What It Does)</th>
            </tr>
          </thead>
          <tbody>
            ${lesson.listOfTags.map(t => `
              <tr>
                <td>
                  <code class="tag-code-pill" title="Click to copy" data-code="${escapeHtml(t.code)}">${escapeHtml(t.code)}</code>
                </td>
                <td style="font-weight: 700; color: var(--accent-amber);">${t.name}</td>
                <td style="color: var(--text-main); font-size: 12px;">${t.description}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div style="margin-top: 14px; display: flex; justify-content: flex-end;">
        <button id="btn-close-tag-modal-bottom" class="btn-modal btn-modal-primary">Done</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelectorAll('.tag-code-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const code = pill.getAttribute('data-code');
      navigator.clipboard?.writeText(code);
      const originalText = pill.textContent;
      pill.textContent = '✅ Copied!';
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
      <h3 class="modal-title">MISSION COMPLETE!</h3>
      <div class="modal-body">
        <p>Awesome! You mastered <strong>${lesson.title}</strong>!</p>
        <p style="margin-top: 8px; font-size: 15px; color: var(--accent-amber); font-weight: 800;">
          ${wasAlreadyCompleted ? '⭐ Mission verified again!' : '+3 STARS EARNED! ⭐⭐⭐'}
        </p>
      </div>
      <div class="modal-actions">
        <button id="btn-modal-close" class="btn-modal btn-modal-secondary">Stay Here</button>
        ${nextLesson ? `<button id="btn-modal-next" class="btn-modal btn-modal-primary">Next Lesson ➡️</button>` : ''}
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
      <h3 class="modal-title" style="color: var(--accent-red);">Almost There!</h3>
      <div class="modal-body">
        <p>Take a quick look at your code:</p>
        <div style="background: rgba(248, 113, 113, 0.15); border-radius: 8px; padding: 10px; margin-top: 8px; color: var(--accent-red); text-align: left; font-weight: bold; font-size: 12px;">
          ${feedback.map(f => `<div>• ${f}</div>`).join('')}
        </div>
      </div>
      <div class="modal-actions">
        <button id="btn-modal-retry" class="btn-modal btn-modal-primary">Let Me Try Again! 💪</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.querySelector('#btn-modal-retry')?.addEventListener('click', () => modal.remove());
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
        <h2 class="banner-title">🚀 Free Coding Sandbox</h2>
        <p class="banner-summary">Build whatever you want! Download your real webpage when you're done.</p>
      </div>
      <div>
        <button id="btn-download-html" class="btn-header" style="background: var(--accent-green); color: #000; border: none; font-weight: 800;">
          💾 Download .html
        </button>
      </div>
    </div>

    <!-- Template Pills -->
    <div style="background: var(--bg-surface); border-bottom: 1px solid var(--border-color); padding: 8px 24px; display: flex; align-items: center; gap: 8px;">
      <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-muted);">Templates:</span>
      ${TEMPLATES.map(t => `<button class="tag-chip btn-tpl" data-tpl="${t.id}">${t.name}</button>`).join('')}
    </div>

    <!-- Sandbox Split View -->
    <div class="editor-stage-split">
      <div class="pane-card">
        <div class="pane-header">
          <div class="pane-title"><span>💻</span> HTML &amp; CSS Code</div>
          <div class="pane-tools">
            <button id="btn-sb-copy" class="btn-tool">📋 Copy</button>
          </div>
        </div>
        <div class="code-editor-wrapper">
          <div id="sb-line-numbers" class="editor-line-numbers">1</div>
          <textarea id="sb-textarea" class="code-textarea" spellcheck="false">${state.customSandboxCode}</textarea>
        </div>
      </div>

      <div class="pane-card">
        <div class="pane-header">
          <div class="pane-title"><span>👁️</span> Live Webpage Preview</div>
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
    btn.textContent = '✅ Copied!';
    setTimeout(() => { btn.textContent = '📋 Copy'; }, 1500);
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
