/**
 * CodeCraft Kids Curriculum Data
 * Focused, bite-sized snippets without boilerplate clutter.
 * Each theme breaks down the code step-by-step and demonstrates exactly what each piece does to the result.
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
  // HTML LESSON 1: Headings & Paragraphs
  // ==========================================
  {
    id: 'html-headings',
    module: 'html',
    title: 'Big Headings & Paragraphs',
    icon: '👑',
    tag: '<h1>, <h2>, <p>',
    summary: 'Make bold headlines and normal story text.',
    story: 'Think of <h1> like a giant newspaper headline. <p> is for normal storybook sentences.',
    // Focused snippet ONLY - no boilerplate!
    initialCode: `<h1>🦖 Dinosaur King</h1>
<p>The mightiest lizard in the whole jungle!</p>`,
    targetCode: `<h1>🦖 Dinosaur King</h1>
<h2>The Ruler of Jurassic Valley</h2>
<p>The mightiest lizard in the whole jungle!</p>`,
    targetDescription: '1. A huge bold title: "🦖 Dinosaur King"\n2. A medium subtitle: "The Ruler of Jurassic Valley"\n3. A normal paragraph describing the dinosaur.',
    anatomy: [
      {
        part: '<h1>',
        role: 'Opening Tag',
        explanation: 'Tells the browser: "Start making text gigantic and bold!"',
        effect: 'Makes text huge & bold'
      },
      {
        part: '🦖 Dinosaur King',
        role: 'Content',
        explanation: 'The actual words and emojis you want the reader to see.',
        effect: 'Appears directly on the screen'
      },
      {
        part: '</h1>',
        role: 'Closing Tag',
        explanation: 'Notice the slash /. It tells the browser: "Stop! The giant heading ends here."',
        effect: 'Prevents the next text from being huge'
      },
      {
        part: '<p> ... </p>',
        role: 'Paragraph Tag',
        explanation: 'Short for Paragraph. Keeps sentences grouped with cozy reading space.',
        effect: 'Normal text size with top & bottom spacing'
      }
    ],
    quickTags: ['<h1>', '</h1>', '<h2>', '</h2>', '<p>', '</p>'],
    challenge: {
      mission: 'Add an <h2> subtitle right below the <h1> that says: "The Ruler of Jurassic Valley"',
      hint: 'Type <h2>The Ruler of Jurassic Valley</h2> under the <h1> line.',
      rules: [
        {
          type: 'hasTag',
          tag: 'h2',
          message: 'Add an <h2> subtitle tag!'
        },
        {
          type: 'tagContainsText',
          tag: 'h2',
          pattern: /Jurassic Valley/i,
          message: 'The <h2> must say "The Ruler of Jurassic Valley"!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Heading tags are like megaphone volume: <h1> is the loudest megaphone, <h2> is normal volume, <p> is normal talking.',
      discussionQuestions: [
        'What would happen if you removed the </h1> closing slash?',
        'When would you use <h2> instead of <h1>?'
      ],
      commonMistakes: [
        'Forgetting the closing slash in </h1>',
        'Typing <h7> (HTML only goes up to <h6>)'
      ],
      funActivity: 'Say a sentence in your <h1> booming voice, then in a normal <p> voice!'
    }
  },

  // ==========================================
  // HTML LESSON 2: Buttons & Clicks
  // ==========================================
  {
    id: 'html-buttons',
    module: 'html',
    title: 'Clickable Action Buttons',
    icon: '🔘',
    tag: '<button onclick="...">',
    summary: 'Make buttons that do things when clicked.',
    story: 'Buttons turn a static page into an interactive game! When you click, something happens.',
    initialCode: `<button onclick="alert('⚡ Lightning Zap!')">
  ⚡ Cast Spell
</button>`,
    targetCode: `<button onclick="alert('⚡ Lightning Zap!')">
  ⚡ Cast Spell
</button>

<button onclick="alert('🍕 Pizza Delivered!')">
  🍕 Order Food
</button>`,
    targetDescription: 'Two clickable buttons side-by-side. Clicking "Cast Spell" pops up a zap alert. Clicking "Order Food" pops up a pizza delivery alert.',
    anatomy: [
      {
        part: '<button>',
        role: 'Button Tag',
        explanation: 'Draws a clickable button box with borders and click feedback.',
        effect: 'Creates a clickable button'
      },
      {
        part: 'onclick="..."',
        role: 'Event Attribute',
        explanation: 'Tells the button what to do when clicked (e.g. alert a message).',
        effect: 'Triggers a pop-up alert'
      },
      {
        part: '⚡ Cast Spell',
        role: 'Label Text',
        explanation: 'The words and icons written on the face of the button.',
        effect: 'Appears inside the button'
      },
      {
        part: '</button>',
        role: 'Closing Tag',
        explanation: 'Closes the button definition.',
        effect: 'Ends the button boundary'
      }
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
      analogy: 'Buttons are like elevator buttons: you push them and an action occurs.',
      discussionQuestions: [
        'What button in your favorite game is your favorite to mash?',
        'What else can a button do besides showing an alert?'
      ],
      commonMistakes: [
        'Mismatched quotes inside onclick="alert(\'...\')"',
        'Spelling "button" with a single "t"'
      ],
      funActivity: 'Invent the funniest alert sound or popup message you can think of!'
    }
  },

  // ==========================================
  // HTML LESSON 3: Images & Pets
  // ==========================================
  {
    id: 'html-images',
    module: 'html',
    title: 'Pictures & Virtual Pets',
    icon: '🖼️',
    tag: '<img src="" alt="" width="">',
    summary: 'Bring your page to life with pictures and drawings.',
    story: 'Pictures need an address (src) to find the file and an alt description in case the image fails to load.',
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
    targetDescription: 'A crisp photo of an adorable golden puppy wearing glasses, resized to 260 pixels wide.',
    anatomy: [
      {
        part: '<img',
        role: 'Image Tag',
        explanation: 'Tells the browser to display an image (it is self-closing, no </img> needed!).',
        effect: 'Places an image on screen'
      },
      {
        part: 'src="..."',
        role: 'Source Attribute',
        explanation: 'Short for Source. The web link or file path where the picture lives.',
        effect: 'Loads the picture from the link'
      },
      {
        part: 'alt="..."',
        role: 'Alternative Text',
        explanation: 'Describes the picture for screen readers and if internet is slow.',
        effect: 'Shows description if image is broken'
      },
      {
        part: 'width="180"',
        role: 'Size Attribute',
        explanation: 'Controls how many pixels wide the image appears on the screen.',
        effect: 'Controls the image size'
      }
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
      analogy: 'src is like the address of your friend\'s house. alt is like telling a friend on the phone what the picture looks like.',
      discussionQuestions: [
        'Why does <img> NOT have a closing </img> tag like <p> does?',
        'What happens if you type the wrong web address in src?'
      ],
      commonMistakes: [
        'Spelling src as "scr"',
        'Forgetting quotes around the link'
      ],
      funActivity: 'Change width to 50 and then 400 to see the puppy shrink and grow!'
    }
  },

  // ==========================================
  // HTML LESSON 4: Links & Portals
  // ==========================================
  {
    id: 'html-links',
    module: 'html',
    title: 'Secret Teleport Links',
    icon: '🌐',
    tag: '<a href="" target="_blank">',
    summary: 'Create clickable doors that take visitors to other websites.',
    story: 'The web is connected by hyperlinks. The <a> tag stands for "Anchor", and href is the destination portal.',
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
    targetDescription: 'Two clickable blue links with space emojis. Clicking "Planet Mars" or "Planet Saturn" opens their Wikipedia page in a new tab.',
    anatomy: [
      {
        part: '<a',
        role: 'Anchor Tag',
        explanation: 'Short for Anchor. Creates a link to another page or site.',
        effect: 'Makes text clickable'
      },
      {
        part: 'href="..."',
        role: 'Destination Portal',
        explanation: 'Hypertext REFerence: the exact website address where the link teleports.',
        effect: 'Points to target URL'
      },
      {
        part: 'target="_blank"',
        role: 'New Tab Flag',
        explanation: 'Tells the browser to open the link in a fresh, new tab.',
        effect: 'Prevents losing current page'
      },
      {
        part: 'Planet Mars',
        role: 'Clickable Words',
        explanation: 'The blue underlined words that the user clicks on.',
        effect: 'Turns blue & underlined'
      }
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
      analogy: 'Links are like teleportation portals in Minecraft: step into the text and land in a new dimension.',
      discussionQuestions: [
        'Why does the mouse cursor turn into a pointing hand 👆 over links?',
        'What does href stand for?'
      ],
      commonMistakes: [
        'Spelling href as "herf"',
        'Putting the words outside of the <a> tag'
      ],
      funActivity: 'Hover over links and watch the pointer hand appear!'
    }
  },

  // ==========================================
  // HTML LESSON 5: Lists & Inventories
  // ==========================================
  {
    id: 'html-lists',
    module: 'html',
    title: 'Treasure Lists & Inventories',
    icon: '📜',
    tag: '<ul>, <ol>, <li>',
    summary: 'Organize items with bullet points or numbers.',
    story: 'Use <ul> for bullet lists (when order does not matter) and <ol> for numbered lists (1, 2, 3). Each item is an <li>.',
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
    targetDescription: 'A clean bullet-point checklist showing 4 adventure inventory items: Sword, Potion, Golden Apple, and Dragon Shield.',
    anatomy: [
      {
        part: '<ul>',
        role: 'Unordered List',
        explanation: 'Short for Unordered List. Creates a list with bullet dots.',
        effect: 'Wraps items in bullet points'
      },
      {
        part: '<li>',
        role: 'List Item',
        explanation: 'Short for List Item. Every single item in the list needs an <li> wrapper.',
        effect: 'Creates a bullet item line'
      },
      {
        part: 'Dragon Shield 🛡️',
        role: 'Item Text',
        explanation: 'The name of the item or task.',
        effect: 'Displays next to the bullet'
      },
      {
        part: '</li>',
        role: 'Closing Item',
        explanation: 'Finishes this item line so the next item starts on a new row.',
        effect: 'Closes the list row'
      }
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
      analogy: '<ul> is like your toy box where toys are scattered. <ol> is like a race podium: 1st, 2nd, 3rd place.',
      discussionQuestions: [
        'What happens if you change <ul> to <ol>? Try it in the editor!',
        'Can you put an emoji inside an <li>?'
      ],
      commonMistakes: [
        'Typing list items without <li> tags',
        'Forgetting the closing </ul>'
      ],
      funActivity: 'Switch <ul> to <ol> and watch the bullets instantly turn into numbers 1, 2, 3!'
    }
  },

  // ==========================================
  // CSS LESSON 1: Text Color & Background
  // ==========================================
  {
    id: 'css-colors',
    module: 'css',
    title: 'Text Color & Backgrounds',
    icon: '🎨',
    tag: 'color, background-color',
    summary: 'Paint your text with vibrant colors and backgrounds.',
    story: 'In CSS, "color" changes the words, while "background-color" paints the box behind the words.',
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
        explanation: 'Chooses which HTML element to paint. Here it chooses all <h1> tags.',
        effect: 'Applies styles to <h1>'
      },
      {
        part: 'color: #ff757f;',
        role: 'Text Color',
        explanation: 'Paints the letters themselves. Hex #ff757f is coral pink.',
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
      analogy: 'color is the crayon for your words. background-color is the colored paper you are drawing on.',
      discussionQuestions: [
        'What happens if you type color: gold; instead of a hex code?',
        'Why does every CSS rule need a semicolon ; at the end?'
      ],
      commonMistakes: [
        'Missing the # sign before hex colors',
        'Forgetting the semicolon at the end of the line'
      ],
      funActivity: 'Try typing color: hotpink; or color: lime; and watch it change immediately!'
    }
  },

  // ==========================================
  // CSS LESSON 2: Font Size & Text Shadows
  // ==========================================
  {
    id: 'css-fonts',
    module: 'css',
    title: 'Font Size & Neon Glow',
    icon: '🔤',
    tag: 'font-size, text-shadow',
    summary: 'Make words gigantic and make them glow like neon lights.',
    story: 'font-size controls how tall letters stand. text-shadow shines a colored glow behind the letters.',
    initialCode: `<style>
  .title {
    font-size: 32px;
    color: #ffffff;
    text-shadow: 0 0 10px #f472b6;
  }
</style>

<div class="title">NEON NIGHTS</div>`,
    targetCode: `<style>
  .title {
    font-size: 48px;
    color: #ffffff;
    text-shadow: 0 0 15px #f472b6, 0 0 30px #f472b6;
  }
</style>

<div class="title">NEON NIGHTS</div>`,
    targetDescription: 'The words "NEON NIGHTS" appear in a gigantic 48px size radiating a vivid hot-pink neon glow in the dark!',
    anatomy: [
      {
        part: '.title',
        role: 'Class Selector',
        explanation: 'Targets any element that has class="title". The dot . stands for class.',
        effect: 'Selects class="title"'
      },
      {
        part: 'font-size: 48px;',
        role: 'Letter Height',
        explanation: 'Sets how many pixels tall the letters are. 48px makes it gigantic!',
        effect: 'Enlarges the letters'
      },
      {
        part: 'text-shadow: 0 0 15px #f472b6;',
        role: 'Neon Glow',
        explanation: 'Horizontal blur, vertical blur, blur radius (15px), and glow color.',
        effect: 'Creates neon halo glow'
      }
    ],
    quickTags: ['font-size: 48px;', 'text-shadow: 0 0 20px #f472b6;', 'letter-spacing: 4px;'],
    challenge: {
      mission: 'Make the .title font-size "48px" and increase the text-shadow glow!',
      hint: 'Change font-size: 32px; to font-size: 48px;',
      rules: [
        {
          type: 'hasCssProperty',
          property: 'font-size',
          valuePattern: /48px/i,
          message: 'Set font-size to 48px!'
        },
        {
          type: 'hasCssProperty',
          property: 'text-shadow',
          message: 'Keep the text-shadow glow!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'text-shadow is like shining a colored flashlight behind your letters onto a bedroom wall.',
      discussionQuestions: [
        'What does "px" stand for? (Pixels — tiny light dots on the screen)',
        'What happens if you increase blur from 10px to 30px?'
      ],
      commonMistakes: [
        'Writing "48 px" with a space between number and px (they must touch!)',
        'Leaving out the dot . in the class selector'
      ],
      funActivity: 'Set font-size: 80px to see words explode across the preview!'
    }
  },

  // ==========================================
  // CSS LESSON 3: The Secret Box Model
  // ==========================================
  {
    id: 'css-box-model',
    module: 'css',
    title: 'Padding vs Border vs Margin',
    icon: '📦',
    tag: 'padding, border, margin',
    summary: 'The secret 3-layer cushion of every web element.',
    story: 'Padding is bubble wrap inside the box. Border is the cardboard wall. Margin is personal space outside.',
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
  // CSS LESSON 4: Rounded Corners & Circles
  // ==========================================
  {
    id: 'css-shapes',
    module: 'css',
    title: 'Rounded Corners & Avatar Circles',
    icon: '🔮',
    tag: 'border-radius: 50%, pills',
    summary: 'Turn sharp square corners into smooth curved pebbles and circles.',
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
  },

  // ==========================================
  // CSS LESSON 5: Flexbox Alignment
  // ==========================================
  {
    id: 'css-flexbox',
    module: 'css',
    title: 'Flexbox: Snapping Items in Line',
    icon: '🧩',
    tag: 'display: flex, justify-content',
    summary: 'Line up buttons and cards side-by-side like LEGO bricks.',
    story: 'Normally elements stack on top of each other. display: flex makes them snap into a horizontal row!',
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
  // CSS LESSON 6: Hover & Zoom
  // ==========================================
  {
    id: 'css-hover',
    module: 'css',
    title: 'Hover Powers & Zoom',
    icon: '✨',
    tag: ':hover, transform: scale',
    summary: 'Make buttons pop and grow bigger when mouse hovers over them.',
    story: 'The :hover pseudo-class activates styles only when the cursor moves over the element.',
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
  // PROJECT 1: Superhero Trading Card
  // ==========================================
  {
    id: 'proj-superhero-card',
    module: 'projects',
    title: 'Project 1: Superhero ID Card',
    icon: '🦸',
    tag: 'Full Mini-Project',
    summary: 'Combine your skills into a collectible hero card.',
    story: 'Build a trading card featuring an avatar, name, power badge, and superpower button.',
    initialCode: `<style>
  .card {
    background: #1e2030;
    color: white;
    padding: 24px;
    border-radius: 16px;
    text-align: center;
    max-width: 260px;
    border: 2px solid #7c6cf7;
  }
  .avatar { font-size: 55px; }
  .badge {
    background: #7c6cf7;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
  }
</style>

<div class="card">
  <div class="avatar">⚡</div>
  <h2>Captain Volt</h2>
  <span class="badge">Power: 9999</span>
  <p>Guardian of the Cyber Grid</p>
</div>`,
    targetCode: `<style>
  .card {
    background: #1e2030;
    color: white;
    padding: 24px;
    border-radius: 16px;
    text-align: center;
    max-width: 260px;
    border: 2px solid #7c6cf7;
  }
  .avatar { font-size: 55px; }
  .badge {
    background: #7c6cf7;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
    display: inline-block;
    margin: 4px;
  }
  button {
    background: #7c6cf7;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 10px;
  }
</style>

<div class="card">
  <div class="avatar">⚡</div>
  <h2>Captain Volt</h2>
  <span class="badge">Power: 9999</span>
  <span class="badge">Element: Lightning</span>
  <p>Guardian of the Cyber Grid</p>
  <button onclick="alert('⚡ 1,000,000 VOLTS UNLEASHED!')">Activate Superpower</button>
</div>`,
    targetDescription: 'A sleek collectible trading card with Captain Volt\'s avatar, two power badges ("Power: 9999" and "Element: Lightning"), and a superpower trigger button.',
    anatomy: [
      {
        part: '.card',
        role: 'Container',
        explanation: 'Groups all hero info inside a single box with padding and rounded corners.',
        effect: 'Frames the entire trading card'
      },
      {
        part: '<span class="badge">',
        role: 'Stat Pill',
        explanation: 'Displays mini power statistics in pill badges.',
        effect: 'Creates a colored stat pill'
      },
      {
        part: '<button onclick="...">',
        role: 'Action Trigger',
        explanation: 'Clickable move button that alerts the superhero battle cry.',
        effect: 'Triggers superpower alert'
      }
    ],
    quickTags: ['<span class="badge">', '<button onclick="alert(\'Zap!\')">', 'border-radius: 16px;'],
    challenge: {
      mission: 'Add a second badge ("Element: Lightning") and a button that unleashes a superpower alert!',
      hint: 'Add <span class="badge">Element: Lightning</span> and <button onclick="alert(\'Zap!\')">Activate Superpower</button>',
      rules: [
        {
          type: 'custom',
          check: (code) => (code.match(/class\s*=\s*["']badge["']/gi) || []).length >= 2,
          message: 'Add at least TWO <span class="badge"> badges!'
        },
        {
          type: 'hasTag',
          tag: 'button',
          message: 'Add an action button!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Like Pokémon or sports cards: an avatar image, power numbers, and signature moves.',
      discussionQuestions: [
        'How would you change this into your pet or favorite anime character?',
        'What color would an Ice or Fire superhero use?'
      ],
      commonMistakes: [
        'Putting the button outside the .card container'
      ],
      funActivity: 'Customize the card with the kid\'s name and their secret superpower!'
    }
  }
];

export function getLessonById(id) {
  return LESSONS.find(l => l.id === id) || LESSONS[0];
}

export function getLessonsByModule(moduleId) {
  return LESSONS.filter(l => l.module === moduleId);
}
