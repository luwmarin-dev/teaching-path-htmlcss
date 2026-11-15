/**
 * CodeCraft Kids Curriculum Data
 * Standardized 5-step pedagogy for every theme:
 * 1. Human Language Explanation (Kids analogy)
 * 2. Anatomy & Tag Breakdown (Opening vs Closing tag difference)
 * 3. Rich Tag Showcase (e.g. <b>, <i>, <u>, <mark>, <s>)
 * 4. Step-by-step "What It Does to the Result"
 * 5. Interactive Practice Mission
 */

export const MODULES = [
  {
    id: 'html',
    title: '🦴 HTML: The Building Blocks',
    tagline: 'Learn tags, text, buttons, and images one piece at a time'
  },
  {
    id: 'css',
    title: '🎨 CSS: The Style & Color',
    tagline: 'Colors, fonts, padding, corners, and alignment'
  },
  {
    id: 'projects',
    title: '🚀 Mini-Projects',
    tagline: 'Put pieces together into real cards and dashboards'
  }
];

export const LESSONS = [
  // ==========================================
  // TOPIC 1: What is HTML & What is a Tag?
  // ==========================================
  {
    id: 'html-intro-tags',
    module: 'html',
    title: 'What is HTML & What is a Tag?',
    icon: '🏷️',
    tag: '<tag> ... </tag>',
    humanIntro: {
      whatIsIt: 'HTML stands for "HyperText Markup Language", but in human language, it is simply the **secret language of web pages**! Just like you build a LEGO castle brick by brick, a web page is built using little instructions called **Tags**.',
      whatIsATag: 'A **Tag** is a special magic sticker that tells the computer how to treat words. Tags almost always come in pairs like a sandwich: an **Opening Tag** at the start, and a **Closing Tag** at the end with a secret slash `/`!'
    },
    summary: 'Learn what HTML is in human language, and discover how opening and closing tags work.',
    story: 'Think of tags like bookends or sandwich buns. The opening bun <tag> says "Start the effect!", your words go in the middle, and the closing bun </tag> with a slash / says "Stop the effect!"',
    initialCode: `<p>
  My pet robot is <b>super strong</b>, <i>lightning fast</i>, and <u>totally waterproof</u>!
</p>`,
    targetCode: `<p>
  My pet robot is <b>super strong</b>, <i>lightning fast</i>, <u>totally waterproof</u>, and loves <mark>golden pizza</mark>!
</p>`,
    targetDescription: 'A sentence where:\n• "super strong" is bolded with <b>\n• "lightning fast" is slanted (italic) with <i>\n• "totally waterproof" is underlined with <u>\n• "golden pizza" is highlighted in bright yellow with <mark>',
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
        explanation: 'Slants words to make them stylish or emphasize them.',
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
    tagShowcase: [
      { tag: '<b>word</b>', meaning: 'Bold (heavy and strong)' },
      { tag: '<i>word</i>', meaning: 'Italic (slanted and fast)' },
      { tag: '<u>word</u>', meaning: 'Underline (line drawn underneath)' },
      { tag: '<mark>word</mark>', meaning: 'Highlighter (bright yellow marker)' },
      { tag: '<s>word</s>', meaning: 'Strikethrough (line crossing through a word)' }
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
  // TOPIC 2: Headings & Megaphones
  // ==========================================
  {
    id: 'html-headings',
    module: 'html',
    title: 'Headings & Sizes (H1 to H6)',
    icon: '👑',
    tag: '<h1> to <h6>',
    humanIntro: {
      whatIsIt: 'In human language, a **Heading** is like a chapter title or a giant newspaper headline. It helps readers know what the topic is about before they read the small words.',
      whatIsATag: 'HTML gives you **6 heading levels**, from <h1> (the loudest megaphone) down to <h6> (a tiny whisper). The number tells the browser how big and important the title is!'
    },
    summary: 'Learn how heading tags change volume and size, from huge <h1> to medium <h2> and small <h3>.',
    story: 'Think of <h1> like a giant billboard on a highway. <h2> is a street sign. <p> is a paragraph in a book.',
    initialCode: `<h1>🦖 T-Rex Valley</h1>
<h2>King of the Prehistoric Jungle</h2>
<p>He has tiny arms, but a giant roar!</p>`,
    targetCode: `<h1>🦖 T-Rex Valley</h1>
<h2>King of the Prehistoric Jungle</h2>
<h3>Top Speed: 25 MPH</h3>
<p>He has tiny arms, but a giant roar!</p>`,
    targetDescription: '1. A huge bold title: "🦖 T-Rex Valley"\n2. A medium subtitle: "King of the Prehistoric Jungle"\n3. A smaller <h3> stat: "Top Speed: 25 MPH"\n4. A normal paragraph describing the dinosaur.',
    anatomy: [
      {
        part: '<h1>',
        role: 'Level 1 Heading',
        explanation: 'The biggest, most important title on the entire page. Use it for the main name.',
        effect: 'Huge, thick, bold text'
      },
      {
        part: '<h2>',
        role: 'Level 2 Subtitle',
        explanation: 'Slightly smaller than <h1>. Perfect for section names or subtitles.',
        effect: 'Medium-large bold text'
      },
      {
        part: '<h3>',
        role: 'Level 3 Heading',
        explanation: 'Smaller still. Great for mini stats, player stats, or sub-topics.',
        effect: 'Small bold headline'
      },
      {
        part: '<p>',
        role: 'Paragraph Tag',
        explanation: 'Short for Paragraph. Regular everyday sentences to read.',
        effect: 'Normal reading text with spacing'
      }
    ],
    tagShowcase: [
      { tag: '<h1>Title</h1>', meaning: 'Giant title (Main billboard)' },
      { tag: '<h2>Subtitle</h2>', meaning: 'Medium title (Chapter headline)' },
      { tag: '<h3>Sub-heading</h3>', meaning: 'Smaller headline (Section badge)' },
      { tag: '<p>Sentence</p>', meaning: 'Normal sentence paragraph' }
    ],
    quickTags: ['<h1>', '</h1>', '<h2>', '</h2>', '<h3>', '</h3>', '<p>', '</p>'],
    challenge: {
      mission: 'Add an <h3> heading that says: "Top Speed: 25 MPH" right under the <h2> line!',
      hint: 'Type <h3>Top Speed: 25 MPH</h3> between <h2> and <p>.',
      rules: [
        {
          type: 'hasTag',
          tag: 'h3',
          message: 'Add an <h3> heading tag!'
        },
        {
          type: 'tagContainsText',
          tag: 'h3',
          pattern: /25\s*mph/i,
          message: 'The <h3> must say "Top Speed: 25 MPH"!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Headings are like volume knobs: 1 is loudest blast, 6 is quietest whisper.',
      discussionQuestions: [
        'Is <h1> bigger or is <h6> bigger? (1 is biggest, 6 is smallest!)',
        'Why shouldn\'t every sentence on a website be an <h1>?'
      ],
      commonMistakes: [
        'Typing <h7> or <h8> (HTML headings only go up to 6)'
      ],
      funActivity: 'Have the kid say the <h1> text in a deep roaring giant voice, and <h6> in a tiny mouse squeak!'
    }
  },

  // ==========================================
  // TOPIC 3: Clickable Action Buttons
  // ==========================================
  {
    id: 'html-buttons',
    module: 'html',
    title: 'Clickable Action Buttons',
    icon: '🔘',
    tag: '<button onclick="...">',
    humanIntro: {
      whatIsIt: 'In human language, a **Button** is the steering wheel and arcade controller of the web! Without buttons, a website is just flat paper. With buttons, you can jump, cast spells, and trigger surprises.',
      whatIsATag: 'The `<button>` tag creates a physical-looking 3D box you can press with your mouse. The special attribute `onclick` tells the computer what reaction to perform when a finger or mouse clicks it!'
    },
    summary: 'Make real clickable buttons and attach fun pop-up reactions using onclick.',
    story: 'Every arcade machine has buttons. In HTML, a button wraps words inside <button>words</button>. Add onclick="alert(\'Boing!\')" to make it react!',
    initialCode: `<button onclick="alert('⚡ Lightning Zap!')">
  ⚡ Cast Spell
</button>`,
    targetCode: `<button onclick="alert('⚡ Lightning Zap!')">
  ⚡ Cast Spell
</button>

<button onclick="alert('🍕 Pizza Delivered!')">
  🍕 Order Food
</button>`,
    targetDescription: 'Two clickable buttons side-by-side. Clicking "Cast Spell" pops up a lightning zap alert. Clicking "Order Food" pops up a pizza delivery alert.',
    anatomy: [
      {
        part: '<button',
        role: 'Button Tag',
        explanation: 'Draws a clickable box with smooth edges that depresses when clicked.',
        effect: 'Creates a clickable button'
      },
      {
        part: 'onclick="..."',
        role: 'Click Action',
        explanation: 'Tells the browser what code to run when a user presses the button.',
        effect: 'Runs code on click'
      },
      {
        part: 'alert(\'...\')',
        role: 'Popup Message',
        explanation: 'Opens a friendly pop-up dialogue box on the screen.',
        effect: 'Displays popup alert'
      },
      {
        part: '⚡ Cast Spell',
        role: 'Button Face',
        explanation: 'The words and emojis visible on the button.',
        effect: 'Labels the button'
      },
      {
        part: '</button>',
        role: 'Closing Tag',
        explanation: 'Finishes the button.',
        effect: 'Ends the button boundary'
      }
    ],
    tagShowcase: [
      { tag: '<button>Click</button>', meaning: 'Standard clickable button' },
      { tag: 'onclick="alert(\'Hi\')"', meaning: 'Reacts with a pop-up alert' }
    ],
    quickTags: ['<button>', '</button>', 'onclick="alert(\'Boing!\')"', '⚡', '🍕'],
    challenge: {
      mission: 'Add a second button that says "🍕 Order Food" and alerts "🍕 Pizza Delivered!" when clicked!',
      hint: '<button onclick="alert(\'🍕 Pizza Delivered!\')">🍕 Order Food</button>',
      rules: [
        {
          type: 'custom',
          check: (code) => (code.match(/<button/gi) || []).length >= 2,
          message: 'Add a second <button> tag!'
        },
        {
          type: 'custom',
          check: (code) => /pizza/i.test(code),
          message: 'One button should mention Pizza!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'A button is like a doorbell. When you push it, the bell rings inside the house.',
      discussionQuestions: [
        'What button in your favorite video game is most important to press?',
        'Can you put an emoji inside a button?'
      ],
      commonMistakes: [
        'Mismatched quotes inside onclick="alert(\'...\')"'
      ],
      funActivity: 'Type a silly secret message into the alert and click it!'
    }
  },

  // ==========================================
  // TOPIC 4: Pictures & Void Tags
  // ==========================================
  {
    id: 'html-images',
    module: 'html',
    title: 'Pictures & The Void Tag Secret',
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
  // TOPIC 5: Lists & Checklists
  // ==========================================
  {
    id: 'html-lists',
    module: 'html',
    title: 'Treasure Lists & Inventories',
    icon: '📜',
    tag: '<ul>, <ol>, <li>',
    humanIntro: {
      whatIsIt: 'In human language, a **List** is how we organize items cleanly — like an RPG backpack inventory, a grocery list, or high score leaderboard.',
      whatIsATag: 'HTML gives you two list containers: `<ul>` for bullet dots (Unordered) and `<ol>` for numbers 1, 2, 3 (Ordered). Every single item inside gets wrapped in `<li>` (List Item)!'
    },
    summary: 'Organize items using bullet dots <ul> or numbered rankings <ol>.',
    story: '<ul> is like your toy box where toys are scattered. <ol> is like a race podium: 1st, 2nd, 3rd place. Each item needs an <li> tag.',
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
    targetDescription: 'A clean bullet-point list showing 4 inventory items: Wooden Sword, Health Potion, Golden Apple, and Dragon Shield.',
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
      },
      {
        part: 'Dragon Shield 🛡️',
        role: 'Item Text',
        explanation: 'The name of the item or quest task.',
        effect: 'Displays next to the bullet'
      },
      {
        part: '</li>',
        role: 'Closing Item Tag',
        explanation: 'Ends this item row so the next item starts on a new line.',
        effect: 'Closes the list row'
      }
    ],
    tagShowcase: [
      { tag: '<ul> ... </ul>', meaning: 'Bullet-point list' },
      { tag: '<ol> ... </ol>', meaning: 'Numbered list (1, 2, 3)' },
      { tag: '<li> ... </li>', meaning: 'Single list item row' }
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
        },
        {
          type: 'custom',
          check: (code) => (code.match(/<li/gi) || []).length >= 4,
          message: 'You need at least 4 <li> items!'
        }
      ]
    },
    teacherGuide: {
      analogy: '<ul> is like ingredients in a salad. <ol> is like steps in a recipe where order matters.',
      discussionQuestions: [
        'What happens if you change <ul> to <ol>?',
        'Can you put an emoji inside an <li>?'
      ],
      commonMistakes: [
        'Typing list text without <li> tags'
      ],
      funActivity: 'Change <ul> to <ol> and watch the bullets magically turn into numbers!'
    }
  },

  // ==========================================
  // TOPIC 6: CSS Colors & Paint
  // ==========================================
  {
    id: 'css-colors',
    module: 'css',
    title: 'CSS Paint: Text Color & Background',
    icon: '🎨',
    tag: 'color, background-color',
    humanIntro: {
      whatIsIt: 'In human language, **CSS** is the clothes, spray paint, and cape you put on your HTML skeleton! Without CSS, pages are plain black and white.',
      whatIsATag: 'In CSS, `color` paints the words themselves, while `background-color` paints the canvas behind the words. You can use color names like `gold` or secret Hex codes like `#2dd4bf`!'
    },
    summary: 'Transform dull words into glowing neon with color and background-color.',
    story: 'h1 { color: #2dd4bf; } tells the browser: "Find all <h1> tags and color their letters cyan!"',
    initialCode: `<style>
  h1 {
    color: #ff757f;
    background-color: #1e2030;
    padding: 12px;
  }
</style>

<h1>✨ Cyber Arcade ✨</h1>`,
    targetCode: `<style>
  h1 {
    color: #2dd4bf;
    background-color: #1e2030;
    padding: 12px;
  }
</style>

<h1>✨ Cyber Arcade ✨</h1>`,
    targetDescription: 'A dark slate card containing the title "✨ Cyber Arcade ✨" glowing in bright mint cyan (#2dd4bf).',
    anatomy: [
      {
        part: 'h1 { ... }',
        role: 'CSS Selector',
        explanation: 'Chooses which HTML element to paint. Here it picks all <h1> tags.',
        effect: 'Applies styles to <h1>'
      },
      {
        part: 'color: #ff757f;',
        role: 'Text Color',
        explanation: 'Paints the actual letters. Hex #ff757f is coral pink.',
        effect: 'Changes the letter color'
      },
      {
        part: 'background-color: #1e2030;',
        role: 'Box Background',
        explanation: 'Paints the background area behind the letters dark navy.',
        effect: 'Paints the card background'
      },
      {
        part: '; (semicolon)',
        role: 'Rule Terminator',
        explanation: 'Like a period at the end of a sentence. Tells CSS this property is finished.',
        effect: 'Separates style rules'
      }
    ],
    tagShowcase: [
      { tag: 'color: hotpink;', meaning: 'Paints the letters' },
      { tag: 'background-color: navy;', meaning: 'Paints the box behind the letters' },
      { tag: 'padding: 12px;', meaning: 'Adds breathing room inside the box' }
    ],
    quickTags: ['color: #2dd4bf;', 'color: #ff757f;', 'color: gold;', 'background-color: #111827;'],
    challenge: {
      mission: 'Change the h1 color to "#2dd4bf" (cyber teal)!',
      hint: 'In h1 { ... }, change color: #ff757f; to color: #2dd4bf;',
      rules: [
        {
          type: 'hasCssProperty',
          property: 'color',
          valuePattern: /#2dd4bf|teal|cyan/i,
          message: 'Set the h1 color to #2dd4bf!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'color is the colored pencil for writing words. background-color is the colored paper you write on.',
      discussionQuestions: [
        'What happens if you type color: gold; instead of a hex code?',
        'Why does every CSS rule need a semicolon ; at the end?'
      ],
      commonMistakes: [
        'Missing the # sign before hex colors',
        'Forgetting the semicolon at the end of the line'
      ],
      funActivity: 'Try color: hotpink; or color: lime; and watch it change immediately!'
    }
  },

  // ==========================================
  // TOPIC 7: The Secret Box Model
  // ==========================================
  {
    id: 'css-box-model',
    module: 'css',
    title: 'The Secret Box Model (Padding & Border)',
    icon: '📦',
    tag: 'padding, border, margin',
    humanIntro: {
      whatIsIt: 'In human language, every single element on a web page lives inside an invisible **3-layer sandwich box**.',
      whatIsATag: '1. **Padding** is bubble wrap on the inside.\n2. **Border** is the cardboard wall.\n3. **Margin** is personal space on the outside!'
    },
    summary: 'Master the 3 layers: inside cushion (padding), wall (border), and personal space (margin).',
    story: 'Padding gives text room to breathe inside. Border draws a solid wall. Margin keeps other boxes away.',
    initialCode: `<style>
  .box {
    background-color: #1e2030;
    color: #ffffff;
    /* Inside bubble wrap */
    padding: 10px;
    /* Cardboard wall */
    border: 2px solid #64748b;
    /* Outside personal space */
    margin: 10px;
  }
</style>

<div class="box">
  <h3>I am in a box!</h3>
  <p>Increase my padding and border to make me cozy!</p>
</div>`,
    targetCode: `<style>
  .box {
    background-color: #1e2030;
    color: #ffffff;
    padding: 24px;
    border: 4px solid #2dd4bf;
    margin: 20px;
  }
</style>

<div class="box">
  <h3>I am in a box!</h3>
  <p>Increase my padding and border to make me cozy!</p>
</div>`,
    targetDescription: 'A centered navy box with a thick 4px bright cyan border and cozy 24px padding giving the text breathing room.',
    anatomy: [
      {
        part: 'padding: 24px;',
        role: 'Inside Cushion',
        explanation: 'Bubble wrap inside the box so text does not bump against the border walls.',
        effect: 'Expands breathing room inside'
      },
      {
        part: 'border: 4px solid #2dd4bf;',
        role: 'The Wall',
        explanation: 'Thickness (4px), pattern (solid), and color (#2dd4bf) of the outer wall.',
        effect: 'Draws a solid cyan wall'
      },
      {
        part: 'margin: 20px;',
        role: 'Outside Space',
        explanation: 'Personal space outside the box so other elements stay away.',
        effect: 'Pushes neighboring elements away'
      }
    ],
    tagShowcase: [
      { tag: 'padding: 20px;', meaning: 'Inside cushion (bubble wrap)' },
      { tag: 'border: 3px solid cyan;', meaning: 'Outer wall (thickness + color)' },
      { tag: 'margin: 20px;', meaning: 'Outside breathing space' }
    ],
    quickTags: ['padding: 24px;', 'border: 4px solid #2dd4bf;', 'margin: 20px;', 'border-radius: 12px;'],
    challenge: {
      mission: 'Set padding to "24px" and change the border to "4px solid #2dd4bf"!',
      hint: 'In .box, set padding: 24px; and border: 4px solid #2dd4bf;',
      rules: [
        {
          type: 'hasCssProperty',
          property: 'padding',
          valuePattern: /24px/i,
          message: 'Set padding to 24px!'
        },
        {
          type: 'hasCssProperty',
          property: 'border',
          valuePattern: /4px.*#2dd4bf|4px.*teal/i,
          message: 'Set border to 4px solid #2dd4bf!'
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
        'Confusing padding (inside) with margin (outside)',
        'Leaving out the word "solid" in the border rule'
      ],
      funActivity: 'Set padding: 60px to watch the box puff up like a marshmallow!'
    }
  },

  // ==========================================
  // TOPIC 8: Rounded Corners & Circles
  // ==========================================
  {
    id: 'css-shapes',
    module: 'css',
    title: 'Rounded Corners & Avatar Circles',
    icon: '🔮',
    tag: 'border-radius: 50%',
    humanIntro: {
      whatIsIt: 'In human language, computers love sharp, pointy corners, but humans love smooth, friendly curves!',
      whatIsATag: '`border-radius` curves the sharp 90-degree corners. If you set `border-radius: 50%` on a square, the corners curve so much it morphs into a **perfect circle**!'
    },
    summary: 'Turn sharp square corners into smooth curved pebbles and circular avatar badges.',
    story: 'border-radius rounds sharp corners. border-radius: 50% turns an exact square into a perfect circle!',
    initialCode: `<style>
  .avatar {
    width: 100px;
    height: 100px;
    background: #ff757f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    /* Turn me into a circle! */
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
    targetDescription: 'A perfectly round coral pink avatar badge with a cute cat emoji in the center.',
    anatomy: [
      {
        part: 'width: 100px; height: 100px;',
        role: 'Square Dimensions',
        explanation: 'Equal width and height makes an exact square.',
        effect: 'Creates a square box'
      },
      {
        part: 'border-radius: 50%;',
        role: 'Circle Spell',
        explanation: 'Curves the 4 corners so much that the square morphs into a circle.',
        effect: 'Turns the square into a circle'
      }
    ],
    tagShowcase: [
      { tag: 'border-radius: 12px;', meaning: 'Gentle phone app icon corner' },
      { tag: 'border-radius: 50%;', meaning: 'Exact circle (on square items)' }
    ],
    quickTags: ['border-radius: 50%;', 'border-radius: 20px;', 'border-radius: 12px;'],
    challenge: {
      mission: 'Set border-radius: 50% on the .avatar to make it a circle!',
      hint: 'Change border-radius: 0px; to border-radius: 50%;',
      rules: [
        {
          type: 'hasCssProperty',
          property: 'border-radius',
          valuePattern: /50%/i,
          message: 'Set border-radius: 50% on .avatar!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Imagine taking sandpaper to the 4 sharp corners of a wooden block until it becomes a ball.',
      discussionQuestions: [
        'Why does 50% make a square into a circle?',
        'What shape happens if the width is 200px and height is 100px?'
      ],
      commonMistakes: [
        'Typing 50px instead of 50% (pixels curve corners slightly; percent makes a circle)'
      ],
      funActivity: 'Try border-radius: 20px to see an iPhone app icon shape!'
    }
  }
];

export function getLessonById(id) {
  return LESSONS.find(l => l.id === id) || LESSONS[0];
}

export function getLessonsByModule(moduleId) {
  return LESSONS.filter(l => l.module === moduleId);
}
