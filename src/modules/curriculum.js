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

export const LESSONS = [
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

export function getLessonById(id) {
  return LESSONS.find(l => l.id === id) || LESSONS[0];
}

export function getLessonsByModule(moduleId) {
  return LESSONS.filter(l => l.module === moduleId);
}
