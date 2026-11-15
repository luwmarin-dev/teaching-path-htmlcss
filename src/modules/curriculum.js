/**
 * CodeCraft Kids Curriculum Data
 * Comprehensive HTML & CSS topics with stories, code examples, target visualizations,
 * challenge missions, and teacher/parent guides.
 */

export const MODULES = [
  {
    id: 'html',
    title: '🦴 Module 1: The HTML Skeleton',
    tagline: 'Build the bones and structure of your web world',
    color: '#ff4757'
  },
  {
    id: 'css',
    title: '🎨 Module 2: The CSS Magic Paint',
    tagline: 'Add colors, fonts, costumes, and animations',
    color: '#2ed573'
  },
  {
    id: 'projects',
    title: '🚀 Module 3: Epic Mini-Projects',
    tagline: 'Combine your superpowers to build real playable pages',
    color: '#1e90ff'
  }
];

export const LESSONS = [
  // ==========================================
  // HTML LESSON 1: The Skeleton
  // ==========================================
  {
    id: 'html-bones',
    module: 'html',
    title: 'The Body & The Bones',
    icon: '🦴',
    tag: '<html>, <head>, <body>',
    summary: 'Every web page is like a human body: a head for its thoughts and a body for everything you see!',
    story: `Think of a web page like a friendly robot. 
The <html> tag is the robot's metal shell.
The <head> tag is its brain (where it remembers its title and secret instructions).
The <body> tag is where its eyes, arms, and heart live — whatever you put inside the <body> shows up on the screen!`,
    tagsExplored: ['<!DOCTYPE html>', '<html>', '<head>', '<title>', '<body>'],
    quickTags: ['<!DOCTYPE html>', '<html>', '</html>', '<body>', '</body>', '<title>', '</title>'],
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>My First World</title>
  </head>
  <body>
    Hello human! This is inside the robot's body.
  </body>
</html>`,
    targetCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Super Robot Station</title>
  </head>
  <body>
    Hello human! Welcome to the Super Robot Station! Beep boop!
  </body>
</html>`,
    targetDescription: `You will see a clean web page that displays:
"Hello human! Welcome to the Super Robot Station! Beep boop!"
The browser tab at the very top will show the title "Super Robot Station".`,
    challenge: {
      mission: 'Add the words "Beep boop!" inside the <body> so the robot speaks to you!',
      hint: 'Type "Beep boop!" right after the word "body" inside the <body> tag!',
      rules: [
        {
          type: 'hasTag',
          tag: 'body',
          message: 'Make sure you keep the <body> and </body> tags!'
        },
        {
          type: 'tagContainsText',
          tag: 'body',
          pattern: /beep boop/i,
          message: 'Add "Beep boop!" inside the <body> tag.'
        }
      ]
    },
    teacherGuide: {
      analogy: 'HTML is the skeleton bones. CSS is the superhero outfit. JavaScript is the muscles that make it move.',
      discussionQuestions: [
        'What would happen if we put words outside of the <body> tags?',
        'Why does a website need a <title> even though it is not inside the page body?'
      ],
      commonMistakes: [
        'Forgetting the closing slash </tag>. Explain that tags are like open and closed sandwich buns.',
        'Putting visible text inside <head> instead of <body>.'
      ],
      funActivity: 'Ask the kid to touch their head for <head> and their torso for <body>!'
    }
  },

  // ==========================================
  // HTML LESSON 2: Headings & Paragraphs
  // ==========================================
  {
    id: 'html-headings',
    module: 'html',
    title: 'Gigantic Headings & Secret Words',
    icon: '👑',
    tag: '<h1> - <h6>, <p>, <strong>, <em>',
    summary: 'Make bold headlines like a newspaper and write stories with paragraphs!',
    story: `Headings are like megaphone volume! 
<h1> is the loudest, giant megaphone! 
<h2> is a normal megaphone.
<h6> is a quiet mouse whisper!
<p> is for normal paragraph sentences.
You can also make words <strong>SUPER BOLD</strong> or <em>magically slanted (italic)</em>!`,
    tagsExplored: ['<h1>', '<h2>', '<h3>', '<p>', '<strong>', '<em>', '<mark>'],
    quickTags: ['<h1>', '</h1>', '<h2>', '</h2>', '<p>', '</p>', '<strong>', '</strong>', '<em>', '</em>', '<mark>', '</mark>'],
    initialCode: `<h1>Dinosaur Kingdom</h1>
<p>Once upon a time, a T-Rex wanted to learn how to code.</p>
<p>He had tiny arms, but a <strong>big brain</strong>!</p>`,
    targetCode: `<h1>Dinosaur Kingdom</h1>
<h2>The Tale of Rex the Coder</h2>
<p>Once upon a time, a T-Rex wanted to learn how to code.</p>
<p>He had tiny arms, but a <strong>big brain</strong>!</p>
<p>His favorite snack was <mark>cyber pizza</mark>!</p>`,
    targetDescription: `You will see:
1. A huge bold title: "Dinosaur Kingdom"
2. A medium bold subtitle: "The Tale of Rex the Coder"
3. Two paragraphs of text with "big brain" in strong bold and "cyber pizza" highlighted in glowing yellow marker.`,
    challenge: {
      mission: 'Add an <h2> subtitle with the text "The Tale of Rex the Coder" and highlight "cyber pizza" with <mark>!',
      hint: 'Use <h2>The Tale of Rex the Coder</h2> right below the <h1> tag.',
      rules: [
        {
          type: 'hasTag',
          tag: 'h2',
          message: 'Add an <h2> tag for the subtitle!'
        },
        {
          type: 'tagContainsText',
          tag: 'h2',
          pattern: /The Tale of Rex the Coder/i,
          message: 'The <h2> must contain "The Tale of Rex the Coder"!'
        },
        {
          type: 'hasTag',
          tag: 'mark',
          message: 'Use a <mark> tag to highlight cyber pizza!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Headings are like book chapter titles. Paragraphs are the storybook sentences.',
      discussionQuestions: [
        'Can you guess what <h3>, <h4>, and <h5> look like? Try typing them!',
        'Why would you use <strong> instead of just typing in ALL CAPS?'
      ],
      commonMistakes: [
        'Typing <h7> or <h8> (Remind them HTML only goes up to <h6>!).',
        'Forgetting the closing </h1> tag, which makes the whole page gigantic.'
      ],
      funActivity: 'Have the kid say a sentence in their <h1> voice (deep & booming) then in an <h6> voice (tiny squeak)!'
    }
  },

  // ==========================================
  // HTML LESSON 3: Buttons & Clickables
  // ==========================================
  {
    id: 'html-buttons',
    module: 'html',
    title: 'Super Action Buttons',
    icon: '🔘',
    tag: '<button>, <input>',
    summary: 'Make buttons that invite people to press them and click!',
    story: `Buttons are the steering wheel of the internet! 
When you click a button in a game, your hero jumps. 
In HTML, a <button> makes a clickable box. 
You can even add a secret magic trick: onclick="alert('Yay!')" pops up a message!`,
    tagsExplored: ['<button>', '<input type="text">', '<input type="color">'],
    quickTags: ['<button>', '</button>', 'onclick="alert(\'BOOM!\')"', '<input type="text">', '<input type="color">'],
    initialCode: `<h2>The Magic Lab</h2>
<p>What happens when you press the secret button?</p>

<button onclick="alert('⚡ Lightning bolt launched!')">
  Launch Lightning
</button>`,
    targetCode: `<h2>The Magic Lab</h2>
<p>What happens when you press the secret button?</p>

<button onclick="alert('⚡ Lightning bolt launched!')">
  Launch Lightning
</button>

<button onclick="alert('🍕 Free Pizza Delivered!')">
  Order Pizza
</button>`,
    targetDescription: `You will see two clickable buttons:
1. "Launch Lightning" — clicking it triggers a pop-up alert: "⚡ Lightning bolt launched!"
2. "Order Pizza" — clicking it triggers a pop-up alert: "🍕 Free Pizza Delivered!"`,
    challenge: {
      mission: 'Add a second <button> that says "Order Pizza" and alerts "🍕 Free Pizza Delivered!" when clicked!',
      hint: '<button onclick="alert(\'🍕 Free Pizza Delivered!\')">Order Pizza</button>',
      rules: [
        {
          type: 'hasTag',
          tag: 'button',
          message: 'Keep the button tag!'
        },
        {
          type: 'custom',
          check: (code) => (code.match(/<button/gi) || []).length >= 2,
          message: 'You need at least TWO buttons on the page!'
        },
        {
          type: 'custom',
          check: (code) => /pizza/i.test(code),
          message: 'One button should mention "Pizza"!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Buttons are like elevator buttons or arcade buttons. When you press them, something happens!',
      discussionQuestions: [
        'What button in your favorite video game is most important?',
        'How does the browser know what to do when you click it?'
      ],
      commonMistakes: [
        'Mismatched quotes inside the alert (e.g. alert("alert(\'hi\')")). Explain single quotes vs double quotes.',
        'Spelling "button" with one "t".'
      ],
      funActivity: 'Let the kid invent the funniest alert message they can think of and click it.'
    }
  },

  // ==========================================
  // HTML LESSON 4: Pictures & Monsters
  // ==========================================
  {
    id: 'html-images',
    module: 'html',
    title: 'Pictures, Pets & Monsters',
    icon: '🖼️',
    tag: '<img src="" alt="" width="">',
    summary: 'Bring your website to life with photos, drawings, and stickers!',
    story: `A picture is worth a thousand lines of code! 
In HTML, the <img> tag has two superpower attributes:
1. src (Source): Where the photo lives (like an address).
2. alt (Alternative Text): A friendly description for people who cannot see the picture or if the internet is slow.
Fun fact: <img> is a "void" tag! It closes itself — no </img> needed!`,
    tagsExplored: ['<img src="" alt="">', 'width=""', 'height=""'],
    quickTags: ['<img src="" alt="" width="150">', 'src=""', 'alt=""', 'width="200"'],
    initialCode: `<h2>My Virtual Pet</h2>
<p>Meet Pixel the Space Pup!</p>

<img 
  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300" 
  alt="Cute fluffy puppy wearing glasses" 
  width="200"
>`,
    targetCode: `<h2>My Virtual Pet</h2>
<p>Meet Pixel the Space Pup!</p>

<img 
  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300" 
  alt="Cute fluffy puppy wearing glasses" 
  width="250"
>
<p>Favorite trick: Catching floating cyber-bones!</p>`,
    targetDescription: `You will see:
1. Title: "My Virtual Pet"
2. A sharp, adorable photo of a golden puppy looking through glasses.
3. The image has a width of 250 pixels.
4. A caption below: "Favorite trick: Catching floating cyber-bones!"`,
    challenge: {
      mission: 'Change the width of the puppy image to "250" and add a paragraph about his favorite trick!',
      hint: 'Look for width="200" and change it to width="250". Then add <p>Favorite trick: ...</p>',
      rules: [
        {
          type: 'hasTag',
          tag: 'img',
          message: 'Keep the <img> tag!'
        },
        {
          type: 'hasAttribute',
          tag: 'img',
          attribute: 'alt',
          message: 'Always keep an alt attribute on your image!'
        },
        {
          type: 'custom',
          check: (code) => /width\s*=\s*["']?250["']?/i.test(code),
          message: 'Set width="250" on the <img> tag!'
        },
        {
          type: 'custom',
          check: (code) => /favorite trick/i.test(code),
          message: 'Add a sentence mentioning the puppy\'s favorite trick!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'src is like the GPS coordinate of the picture. alt is like telling a friend on the phone what the picture looks like.',
      discussionQuestions: [
        'Why does <img> not have a closing </img> tag like <p> does?',
        'What would happen if the image link was broken? What would the screen show?'
      ],
      commonMistakes: [
        'Spelling src as "scr". This is the #1 kid mistake in HTML!',
        'Leaving out the quotation marks around the URL.'
      ],
      funActivity: 'Intentionally misspell the src link so the kid can see the alt text appear on screen!'
    }
  },

  // ==========================================
  // HTML LESSON 5: Secret Portals (Links)
  // ==========================================
  {
    id: 'html-links',
    module: 'html',
    title: 'Secret Portals (Hyperlinks)',
    icon: '🌐',
    tag: '<a href="" target="_blank">',
    summary: 'Connect your page to the whole world with magical teleportation doors!',
    story: `Why is the web called the "Web"? 
Because billions of pages are tied together with links!
The <a> tag stands for "Anchor".
The href attribute stands for "Hypertext REFerence" (the destination portal).
If you add target="_blank", it opens in a brand new tab!`,
    tagsExplored: ['<a href="">', 'target="_blank"'],
    quickTags: ['<a href="https://wikipedia.org" target="_blank">', '</a>', 'target="_blank"'],
    initialCode: `<h2>Intergalactic Travel Agency</h2>
<p>Choose your destination planet:</p>

<p>
  🚀 Teleport to 
  <a href="https://en.wikipedia.org/wiki/Mars" target="_blank">Planet Mars</a>!
</p>`,
    targetCode: `<h2>Intergalactic Travel Agency</h2>
<p>Choose your destination planet:</p>

<p>
  🚀 Teleport to 
  <a href="https://en.wikipedia.org/wiki/Mars" target="_blank">Planet Mars</a>!
</p>

<p>
  🪐 Teleport to 
  <a href="https://en.wikipedia.org/wiki/Saturn" target="_blank">Planet Saturn</a>!
</p>`,
    targetDescription: `You will see two blue underlined links with spaceship emojis:
1. "Planet Mars" linking to Wikipedia's Mars page in a new tab.
2. "Planet Saturn" linking to Wikipedia's Saturn page in a new tab.`,
    challenge: {
      mission: 'Add a new link to "Planet Saturn" with target="_blank" so astronauts can travel there!',
      hint: '<a href="https://en.wikipedia.org/wiki/Saturn" target="_blank">Planet Saturn</a>',
      rules: [
        {
          type: 'custom',
          check: (code) => (code.match(/<a\s/gi) || []).length >= 2,
          message: 'Add at least TWO links (<a> tags) to the page!'
        },
        {
          type: 'custom',
          check: (code) => /saturn/i.test(code),
          message: 'Make one of your links teleport to Saturn!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Links are like teleportation portals in Minecraft or Roblox. You step into the text and land in another dimension!',
      discussionQuestions: [
        'Why are links blue and underlined by default in almost every browser?',
        'What does href mean?'
      ],
      commonMistakes: [
        'Spelling href as "herf" or "hef".',
        'Putting the words outside the <a> tag so nothing is clickable.'
      ],
      funActivity: 'Show them how hovering over a link changes the mouse cursor into a little pointing hand 👆.'
    }
  },

  // ==========================================
  // HTML LESSON 6: Treasure Lists
  // ==========================================
  {
    id: 'html-lists',
    module: 'html',
    title: 'Treasure Lists & Inventories',
    icon: '📜',
    tag: '<ul>, <ol>, <li>',
    summary: 'Organize your RPG gaming inventory, grocery lists, and top scores!',
    story: `Whenever you make a checklist or gaming inventory, HTML has two special list types:
1. <ul> = Unordered List (bullet points! Great for items where order doesn't matter).
2. <ol> = Ordered List (1, 2, 3! Great for recipes, race rankings, or step-by-step instructions).
Inside either list, every single item gets wrapped in <li> (List Item)!`,
    tagsExplored: ['<ul>', '<ol>', '<li>'],
    quickTags: ['<ul>', '</ul>', '<ol>', '</ol>', '<li>', '</li>'],
    initialCode: `<h2>🎒 Hero Backpack Inventory</h2>
<ul>
  <li>Wooden Sword 🗡️</li>
  <li>Health Potion 🧪</li>
  <li>Golden Apple 🍏</li>
</ul>`,
    targetCode: `<h2>🎒 Hero Backpack Inventory</h2>
<ul>
  <li>Wooden Sword 🗡️</li>
  <li>Health Potion 🧪</li>
  <li>Golden Apple 🍏</li>
  <li>Dragon Shield 🛡️</li>
</ul>

<h3>🏆 Top Quest Rank</h3>
<ol>
  <li>Defeat the Slime King</li>
  <li>Find the Secret Key</li>
</ol>`,
    targetDescription: `You will see:
1. A bulleted list with 4 inventory items (Sword, Potion, Golden Apple, Dragon Shield).
2. A numbered list with 1. Defeat the Slime King and 2. Find the Secret Key.`,
    challenge: {
      mission: 'Add a 4th inventory item "Dragon Shield 🛡️" to the <ul>, then create an <ol> ordered list with at least 2 quest steps!',
      hint: 'Add <li>Dragon Shield 🛡️</li>, then write <ol><li>Step 1</li><li>Step 2</li></ol>',
      rules: [
        {
          type: 'hasTag',
          tag: 'ul',
          message: 'Keep the <ul> tag for the backpack inventory!'
        },
        {
          type: 'hasTag',
          tag: 'ol',
          message: 'Add an <ol> numbered list for the quest steps!'
        },
        {
          type: 'custom',
          check: (code) => /Dragon Shield/i.test(code),
          message: 'Add the Dragon Shield to your inventory list items!'
        },
        {
          type: 'custom',
          check: (code) => (code.match(/<li/gi) || []).length >= 5,
          message: 'Make sure you have at least 5 <li> items in total!'
        }
      ]
    },
    teacherGuide: {
      analogy: '<ul> is like your toy box where everything is mixed in. <ol> is like a race podium (1st place, 2nd place, 3rd place).',
      discussionQuestions: [
        'When would you use numbers instead of bullet points in real life?',
        'Can you put a list inside another list? (Try it!)'
      ],
      commonMistakes: [
        'Putting text directly inside <ul> without an <li> wrapper.',
        'Confusing <ul> (Unordered) with <ol> (Ordered).'
      ],
      funActivity: 'Have the kid write down their top 3 favorite video games as an <ol> list.'
    }
  },

  // ==========================================
  // HTML LESSON 7: Secret Boxes & Divs
  // ==========================================
  {
    id: 'html-boxes',
    module: 'html',
    title: 'Secret Boxes & Card Containers',
    icon: '📦',
    tag: '<div>, <span>, class=""',
    summary: 'Group things together into cards and packages with <div>!',
    story: `How do websites build cards, sidebars, and popup windows? 
With <div>! 
<div> stands for "Division" or "Divider", but you can think of it as an invisible cardboard box. 
You pack a heading, a photo, and a button inside a <div> box, and give it a nickname with class="card". Then CSS can paint the whole box at once!`,
    tagsExplored: ['<div>', '<span>', 'class=""', 'id=""'],
    quickTags: ['<div class="card">', '</div>', '<span>', '</span>', 'class="badge"'],
    initialCode: `<div class="card">
  <h2>⚡ Speedster Flash</h2>
  <p>Power level: <span>Over 9000</span></p>
  <button>Upgrade Hero</button>
</div>`,
    targetCode: `<div class="card">
  <h2>⚡ Speedster Flash</h2>
  <p>Power level: <span class="badge">Over 9000</span></p>
  <p>Element: Fire 🔥</p>
  <button>Upgrade Hero</button>
</div>`,
    targetDescription: `You will see a structured hero profile card containing:
1. Title: "⚡ Speedster Flash"
2. Power level with a badge
3. Element: Fire 🔥
4. An "Upgrade Hero" button, all neatly grouped inside a single container box.`,
    challenge: {
      mission: 'Add a new paragraph inside the <div> box: "<p>Element: Fire 🔥</p>" and give the span class="badge"!',
      hint: 'Type <p>Element: Fire 🔥</p> before the button tag, and add class="badge" to the <span> tag.',
      rules: [
        {
          type: 'hasTag',
          tag: 'div',
          message: 'Keep the <div> wrapper!'
        },
        {
          type: 'custom',
          check: (code) => /fire/i.test(code),
          message: 'Add the Element: Fire inside the card!'
        },
        {
          type: 'custom',
          check: (code) => /class\s*=\s*["']badge["']/i.test(code),
          message: 'Add class="badge" to the <span> tag!'
        }
      ]
    },
    teacherGuide: {
      analogy: '<div> is like a bento lunch box or a LEGO bin. It holds items together so you can carry them as one piece.',
      discussionQuestions: [
        'What is the difference between a <div> (big block box) and a <span> (inline word tag)?',
        'Why do we give classes to elements?'
      ],
      commonMistakes: [
        'Nesting divs without closing them, causing weird layout tangles.',
        'Spelling class as "clas" or "clase".'
      ],
      funActivity: 'Show how moving the <div> moves everything inside it at the same time.'
    }
  },

  // ==========================================
  // CSS LESSON 1: Colors & Magic Paint
  // ==========================================
  {
    id: 'css-colors',
    module: 'css',
    title: 'Color Power & Gradients',
    icon: '🎨',
    tag: 'color, background, hex #ff007f',
    summary: 'Turn dull gray text into blazing neon, rainbow gradients, and dark mode wonders!',
    story: `Welcome to CSS — "Cascading Style Sheets"! 
If HTML is the bones, CSS is the glitter, spray paint, and superhero cape!
With CSS, you can color text with color: hotpink;
And you can paint backgrounds with background: linear-gradient(...)!
Computers understand color names (like crimson or gold) AND secret Hex codes (like #ff4757)!`,
    tagsExplored: ['color', 'background-color', 'background: linear-gradient(...)', 'hex codes'],
    quickTags: ['color: hotpink;', 'color: #2ed573;', 'background-color: #2f3542;', 'background: linear-gradient(45deg, #ff4757, #ff6b81);'],
    initialCode: `<style>
  body {
    background-color: #1e272e;
    color: white;
    font-family: sans-serif;
    text-align: center;
    padding: 20px;
  }
  h1 {
    color: gold;
  }
</style>

<h1>✨ Cyber Arcade ✨</h1>
<p>Choose your glowing token color!</p>`,
    targetCode: `<style>
  body {
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    color: white;
    font-family: sans-serif;
    text-align: center;
    padding: 20px;
  }
  h1 {
    color: #ff007f;
  }
  p {
    color: #00f2fe;
  }
</style>

<h1>✨ Cyber Arcade ✨</h1>
<p>Choose your glowing token color!</p>`,
    targetDescription: `You will see a deep space twilight background with a smooth gradient from midnight blue to teal, a blazing neon magenta title ("✨ Cyber Arcade ✨"), and bright cyan text below.`,
    challenge: {
      mission: 'Change the h1 color to "#ff007f" (hot magenta) and set the paragraph color to "#00f2fe" (cyber cyan)!',
      hint: 'In the <style> section, write h1 { color: #ff007f; } and p { color: #00f2fe; }',
      rules: [
        {
          type: 'hasCssProperty',
          property: 'color',
          valuePattern: /#ff007f|rgb\(255,\s*0,\s*127\)|magenta/i,
          message: 'Set the h1 color to #ff007f!'
        },
        {
          type: 'hasCssProperty',
          property: 'color',
          valuePattern: /#00f2fe|cyan/i,
          message: 'Set the paragraph color to #00f2fe!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Hex codes are like secret recipes for color. The first two letters are Red, next two are Green, last two are Blue (RGB)!',
      discussionQuestions: [
        'What happens if you type color: red; instead of a hex code?',
        'Can you guess what #ffffff and #000000 mean?'
      ],
      commonMistakes: [
        'Forgetting the semicolon ; at the end of each CSS property.',
        'Forgetting the # sign before a hex code.'
      ],
      funActivity: 'Show them how #ff0000 is pure red, #00ff00 is pure green, and #0000ff is pure blue.'
    }
  },

  // ==========================================
  // CSS LESSON 2: Fonts & Typography
  // ==========================================
  {
    id: 'css-fonts',
    module: 'css',
    title: 'Epic Typography & Text Shadows',
    icon: '🔤',
    tag: 'font-family, font-size, text-shadow',
    summary: 'Make words look like comic books, futuristic computer terminals, or neon street signs!',
    story: `Fonts give your words personality! 
A scary haunted house needs a spooky font. 
A sci-fi spaceship needs a sharp, robotic font.
With font-size you can make text gigantic (like 48px).
And with text-shadow, you can make your letters glow like neon lights in the dark!`,
    tagsExplored: ['font-family', 'font-size', 'font-weight', 'text-shadow', 'letter-spacing'],
    quickTags: ['font-family: cursive;', 'font-size: 40px;', 'text-shadow: 0 0 10px #ff4757;', 'letter-spacing: 4px;'],
    initialCode: `<style>
  body {
    background-color: #2f3542;
    text-align: center;
    padding: 30px;
    font-family: sans-serif;
  }
  .neon-title {
    color: #ffffff;
    font-size: 32px;
  }
</style>

<h1 class="neon-title">NEON NIGHTS</h1>
<p style="color: #a4b0be;">Welcome to the cyber boulevard</p>`,
    targetCode: `<style>
  body {
    background-color: #2f3542;
    text-align: center;
    padding: 30px;
    font-family: sans-serif;
  }
  .neon-title {
    color: #ffffff;
    font-size: 48px;
    letter-spacing: 6px;
    text-shadow: 0 0 10px #ff4757, 0 0 20px #ff6b81, 0 0 30px #ff4757;
  }
</style>

<h1 class="neon-title">NEON NIGHTS</h1>
<p style="color: #a4b0be;">Welcome to the cyber boulevard</p>`,
    targetDescription: `You will see a dark slate background with a huge 48px title "NEON NIGHTS" spaced out with 6px letter-spacing, radiating a vivid red-pink glowing neon text shadow!`,
    challenge: {
      mission: 'Make the .neon-title font-size "48px" and give it a glowing text-shadow with "#ff4757"!',
      hint: 'Add font-size: 48px; and text-shadow: 0 0 15px #ff4757; inside the .neon-title rule!',
      rules: [
        {
          type: 'hasCssProperty',
          property: 'font-size',
          valuePattern: /48px/i,
          message: 'Set font-size to 48px in .neon-title!'
        },
        {
          type: 'hasCssProperty',
          property: 'text-shadow',
          message: 'Add a text-shadow property to create a glow!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'text-shadow is like shining a flashlight behind your letters onto a wall.',
      discussionQuestions: [
        'What does px stand for? (Pixels — tiny dots on the screen!)',
        'Why do video games use big, blocky fonts instead of cursive handwriting fonts?'
      ],
      commonMistakes: [
        'Writing "48 px" with a space between 48 and px. CSS units must touch the number!',
        'Missing the blur amount in text-shadow.'
      ],
      funActivity: 'Count how many pixels wide the monitor screen is (e.g. 1920x1080).'
    }
  },

  // ==========================================
  // CSS LESSON 3: The Secret Box Model
  // ==========================================
  {
    id: 'css-box-model',
    module: 'css',
    title: 'The Secret Box Model',
    icon: '📦',
    tag: 'margin, border, padding, width',
    summary: 'Every HTML element lives in an invisible 4-layer box! Learn the secret sandwich.',
    story: `The Box Model is the most important secret in all of web design!
Imagine you are packing a valuable crystal trophy into a shipping box:
1. Content: The crystal trophy itself (your text or picture).
2. Padding: Bubble wrap inside the box to protect the trophy from hitting the walls!
3. Border: The sturdy cardboard walls of the box!
4. Margin: The empty personal space around your box so nobody bumps into it!`,
    tagsExplored: ['margin', 'border', 'padding', 'width', 'box-sizing'],
    quickTags: ['padding: 20px;', 'margin: 30px auto;', 'border: 4px solid #2ed573;', 'border-radius: 16px;'],
    initialCode: `<style>
  body {
    background-color: #f1f2f6;
    padding: 20px;
    font-family: sans-serif;
  }
  .box {
    background-color: white;
    /* Bubble wrap inside */
    padding: 10px;
    /* Wall */
    border: 2px solid #747d8c;
    /* Personal space outside */
    margin: 10px;
  }
</style>

<div class="box">
  <h3>I am in a box!</h3>
  <p>Change my padding and margin to see me grow!</p>
</div>`,
    targetCode: `<style>
  body {
    background-color: #f1f2f6;
    padding: 20px;
    font-family: sans-serif;
  }
  .box {
    background-color: white;
    padding: 30px;
    border: 4px solid #2ed573;
    margin: 40px auto;
    max-width: 350px;
    border-radius: 16px;
  }
</style>

<div class="box">
  <h3>I am in a box!</h3>
  <p>Change my padding and margin to see me grow!</p>
</div>`,
    targetDescription: `You will see a clean card centered on the screen with a bright emerald green border (4px solid), generous cozy padding (30px) giving the text lots of breathing room, and 40px margin spacing it nicely.`,
    challenge: {
      mission: 'Increase the padding to "30px" and change the border to "4px solid #2ed573"!',
      hint: 'In .box, change padding: 30px; and border: 4px solid #2ed573;',
      rules: [
        {
          type: 'hasCssProperty',
          property: 'padding',
          valuePattern: /30px/i,
          message: 'Set padding to 30px on .box!'
        },
        {
          type: 'hasCssProperty',
          property: 'border',
          valuePattern: /4px.*#2ed573|4px.*green/i,
          message: 'Set border to 4px solid #2ed573 on .box!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Padding is inside cushion (fluff in your coat). Margin is personal space outside (arms length so no one touches you).',
      discussionQuestions: [
        'If you want a button to be bigger to click on, do you change padding or margin?',
        'What happens if you set margin to auto?'
      ],
      commonMistakes: [
        'Confusing padding (inside) with margin (outside).',
        'Forgetting "solid" in the border property (e.g. border: 4px #2ed573 won\'t show without solid!).'
      ],
      funActivity: 'Stand up and have the kid put on a thick coat (padding) and stretch arms out (margin)!'
    }
  },

  // ==========================================
  // CSS LESSON 4: Rounded Corners & Shapes
  // ==========================================
  {
    id: 'css-shapes',
    module: 'css',
    title: 'Rounded Corners & Magic Badges',
    icon: '🔮',
    tag: 'border-radius, 50%, pills',
    summary: 'Turn sharp square boxes into smooth pebbles, pills, and perfect round avatar circles!',
    story: `Computers love sharp corners, but humans love smooth, friendly curves!
The secret spell is border-radius.
- border-radius: 8px gives a gentle phone-app curve.
- border-radius: 30px turns a button into a smooth pill shape.
- border-radius: 50% turns an exact square into a PERFECT CIRCLE!`,
    tagsExplored: ['border-radius: 8px', 'border-radius: 50%', 'pill buttons'],
    quickTags: ['border-radius: 50%;', 'border-radius: 25px;', 'overflow: hidden;'],
    initialCode: `<style>
  body {
    background: #dfe4ea;
    text-align: center;
    font-family: sans-serif;
    padding: 30px;
  }
  .avatar {
    width: 120px;
    height: 120px;
    background-color: #ff6b81;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    border: 4px solid white;
    /* Make me a circle! */
    border-radius: 0px;
  }
  .pill-btn {
    display: block;
    margin: 20px auto;
    padding: 12px 28px;
    background: #70a1ff;
    color: white;
    border: none;
    font-size: 16px;
    /* Make me a pill! */
    border-radius: 0px;
  }
</style>

<div class="avatar">🐱</div>
<button class="pill-btn">Add Friend</button>`,
    targetCode: `<style>
  body {
    background: #dfe4ea;
    text-align: center;
    font-family: sans-serif;
    padding: 30px;
  }
  .avatar {
    width: 120px;
    height: 120px;
    background-color: #ff6b81;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    border: 4px solid white;
    border-radius: 50%;
  }
  .pill-btn {
    display: block;
    margin: 20px auto;
    padding: 12px 28px;
    background: #70a1ff;
    color: white;
    border: none;
    font-size: 16px;
    border-radius: 30px;
  }
</style>

<div class="avatar">🐱</div>
<button class="pill-btn">Add Friend</button>`,
    targetDescription: `You will see a perfectly round bubblegum pink circle (border-radius: 50%) with a cute kitten emoji inside, and below it a sleek smooth pill-shaped button (border-radius: 30px) that says "Add Friend".`,
    challenge: {
      mission: 'Make the avatar a perfect circle with border-radius: 50% and make the button a pill with border-radius: 30px!',
      hint: 'In .avatar set border-radius: 50%; and in .pill-btn set border-radius: 30px;',
      rules: [
        {
          type: 'hasCssProperty',
          property: 'border-radius',
          valuePattern: /50%/i,
          message: 'Set border-radius: 50% on .avatar to make it a circle!'
        },
        {
          type: 'hasCssProperty',
          property: 'border-radius',
          valuePattern: /30px|25px/i,
          message: 'Set border-radius: 30px on .pill-btn!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Imagine taking sandpaper to the sharp edges of a wooden block until it becomes smooth and round.',
      discussionQuestions: [
        'Why does 50% make a square into a circle?',
        'Look around at your favorite apps (YouTube, Discord, Roblox). Are buttons sharp or rounded?'
      ],
      commonMistakes: [
        'Using 50px instead of 50% on a square. (Explain the difference between fixed pixels and percentages).',
        'Forgetting the % sign.'
      ],
      funActivity: 'Ask the kid to try setting border-radius: 10px, 20px, 100px to watch it morph.'
    }
  },

  // ==========================================
  // CSS LESSON 5: Flexbox Superpowers
  // ==========================================
  {
    id: 'css-flexbox',
    module: 'css',
    title: 'Flexbox: The LEGO Snap System',
    icon: '🧩',
    tag: 'display: flex, justify-content, gap',
    summary: 'Line up buttons, emojis, and cards side-by-side like magic LEGO blocks!',
    story: `Before Flexbox, putting three items side-by-side was a nightmare! 
Now, all you do is whisper display: flex; to the parent box, and BOOM! 
All the children snap into a neat row like ducks in a line.
- justify-content: center puts them right in the middle!
- justify-content: space-between spreads them across the screen!
- gap: 20px puts equal air space between each block!`,
    tagsExplored: ['display: flex', 'justify-content', 'align-items', 'gap', 'flex-direction'],
    quickTags: ['display: flex;', 'justify-content: center;', 'justify-content: space-between;', 'align-items: center;', 'gap: 20px;'],
    initialCode: `<style>
  body {
    background: #1e272e;
    color: white;
    font-family: sans-serif;
    padding: 30px;
    text-align: center;
  }
  .lego-row {
    background: #485460;
    padding: 20px;
    border-radius: 12px;
    /* Add flex powers here! */
  }
  .block {
    background: #ffa801;
    color: black;
    font-weight: bold;
    font-size: 24px;
    padding: 15px 25px;
    border-radius: 8px;
    margin: 5px;
  }
</style>

<h2>🎮 Arcade Team Roster</h2>
<div class="lego-row">
  <div class="block">🤖 Bot</div>
  <div class="block">🐱 Cat</div>
  <div class="block">🚀 Rocket</div>
</div>`,
    targetCode: `<style>
  body {
    background: #1e272e;
    color: white;
    font-family: sans-serif;
    padding: 30px;
    text-align: center;
  }
  .lego-row {
    background: #485460;
    padding: 20px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .block {
    background: #ffa801;
    color: black;
    font-weight: bold;
    font-size: 24px;
    padding: 15px 25px;
    border-radius: 8px;
  }
</style>

<h2>🎮 Arcade Team Roster</h2>
<div class="lego-row">
  <div class="block">🤖 Bot</div>
  <div class="block">🐱 Cat</div>
  <div class="block">🚀 Rocket</div>
</div>`,
    targetDescription: `Instead of the 3 team member blocks stacking vertically on top of each other, they will snap into a neat horizontal row, perfectly centered side-by-side with a nice 20px gap between them!`,
    challenge: {
      mission: 'Add display: flex;, justify-content: center;, and gap: 20px; inside .lego-row!',
      hint: 'Inside .lego-row { ... }, add display: flex; justify-content: center; gap: 20px;',
      rules: [
        {
          type: 'hasCssProperty',
          property: 'display',
          valuePattern: /flex/i,
          message: 'Set display: flex; on .lego-row!'
        },
        {
          type: 'hasCssProperty',
          property: 'justify-content',
          valuePattern: /center|space-between|space-around/i,
          message: 'Add justify-content (like center) to .lego-row!'
        },
        {
          type: 'hasCssProperty',
          property: 'gap',
          message: 'Add a gap property (e.g. gap: 20px;) to space the blocks!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Flexbox is like a magnetic train track. As soon as you turn the magnet on (display: flex), all the train cars latch together in a line.',
      discussionQuestions: [
        'What happens if you change flex-direction to column?',
        'What does space-between do compared to center?'
      ],
      commonMistakes: [
        'Putting display: flex on the child (.block) instead of the parent container (.lego-row).',
        'Spelling justify-content as "justify-items".'
      ],
      funActivity: 'Have kids line up toys or pencils on the table and show how justify-content rearranges them.'
    }
  },

  // ==========================================
  // CSS LESSON 6: Hover Powers & Transitions
  // ==========================================
  {
    id: 'css-hover',
    module: 'css',
    title: 'Hover Powers & Micro-Interactions',
    icon: '✨',
    tag: ':hover, transform: scale, transition',
    summary: 'Make buttons pop, glow, and spring to life when the mouse hovers over them!',
    story: `Have you ever noticed how in games when your mouse hovers over an item, it shines, jiggles, or grows bigger?
In CSS, we use the magical pseudo-class: :hover!
And to make the movement silky smooth instead of teleporting instantly, we add transition: transform 0.3s ease;!
transform: scale(1.15) makes it grow 15% larger!`,
    tagsExplored: [':hover', 'transform: scale()', 'transition: all 0.3s ease', 'cursor: pointer'],
    quickTags: [':hover', 'transform: scale(1.15);', 'transition: all 0.3s ease;', 'box-shadow: 0 10px 20px rgba(0,0,0,0.2);'],
    initialCode: `<style>
  body {
    background: #2c3e50;
    text-align: center;
    padding: 40px;
    font-family: sans-serif;
  }
  .power-btn {
    background: #e74c3c;
    color: white;
    font-size: 22px;
    padding: 16px 36px;
    border: none;
    border-radius: 14px;
    cursor: pointer;
    /* Add transition here so it grows smoothly! */
    transition: transform 0.2s;
  }
  /* Write the :hover rule here! */
</style>

<button class="power-btn">
  ⚡ Power Up!
</button>`,
    targetCode: `<style>
  body {
    background: #2c3e50;
    text-align: center;
    padding: 40px;
    font-family: sans-serif;
  }
  .power-btn {
    background: #e74c3c;
    color: white;
    font-size: 22px;
    padding: 16px 36px;
    border: none;
    border-radius: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .power-btn:hover {
    transform: scale(1.2);
    background: #ff5252;
    box-shadow: 0 10px 25px rgba(231, 76, 60, 0.6);
  }
</style>

<button class="power-btn">
  ⚡ Power Up!
</button>`,
    targetDescription: `When you move your mouse cursor over the red button, it smoothly zooms 20% bigger (scale 1.2), brightens its shade, and casts a gorgeous neon red glow shadow! When the mouse moves away, it gently shrinks back.`,
    challenge: {
      mission: 'Create a .power-btn:hover rule that sets transform: scale(1.2); and changes the background!',
      hint: '.power-btn:hover { transform: scale(1.2); background: #ff5252; }',
      rules: [
        {
          type: 'custom',
          check: (code) => /:hover/i.test(code),
          message: 'Add the :hover selector to your CSS!'
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
      analogy: ':hover is like a pet that wags its tail when you reach out your hand to pet it.',
      discussionQuestions: [
        'What would happen if you forgot transition? (It would snap instantly without smooth animation!)',
        'Can you rotate a button on hover? Try transform: rotate(10deg);!'
      ],
      commonMistakes: [
        'Putting a space between the class name and the colon (e.g. .power-btn :hover with a space means something else!).',
        'Spelling transition as "transistion".'
      ],
      funActivity: 'Try transform: rotate(-10deg) scale(1.2) to make the button playfully tilt!'
    }
  },

  // ==========================================
  // CSS LESSON 7: Animations & Wobbles
  // ==========================================
  {
    id: 'css-animations',
    module: 'css',
    title: 'Alive & Bouncing: Keyframe Animations',
    icon: '🎈',
    tag: '@keyframes, animation, infinite',
    summary: 'Make elements bounce, float, pulse, and dance on their own continuously!',
    story: `Why wait for a mouse hover when your elements can dance all by themselves?
With @keyframes, you become an animator like at Pixar or Disney!
You define:
- 0%: How the element starts.
- 50%: What it looks like halfway through.
- 100%: How it finishes.
Then you attach it: animation: float 2s infinite ease-in-out;!`,
    tagsExplored: ['@keyframes', 'animation', 'infinite', 'alternate'],
    quickTags: ['@keyframes bounce {', 'animation: bounce 1.5s infinite;', 'transform: translateY(-20px);'],
    initialCode: `<style>
  body {
    background: #0c2461;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    margin: 0;
  }
  .alien {
    font-size: 70px;
    /* Hook up the animation here! */
  }
  /* Write @keyframes bounce here! */
</style>

<div class="alien">👾</div>`,
    targetCode: `<style>
  body {
    background: #0c2461;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    margin: 0;
  }
  .alien {
    font-size: 70px;
    animation: bounce 1s infinite alternate ease-in-out;
  }
  @keyframes bounce {
    0% {
      transform: translateY(0px) scale(1);
    }
    100% {
      transform: translateY(-30px) scale(1.1);
    }
  }
</style>

<div class="alien">👾</div>`,
    targetDescription: `You will see a purple alien invader 👾 continuously floating up and down in space, bouncing smoothly like it is floating in zero gravity!`,
    challenge: {
      mission: 'Add the @keyframes bounce animation and attach animation: bounce 1s infinite alternate; to .alien!',
      hint: 'Define @keyframes bounce { 0% { transform: translateY(0); } 100% { transform: translateY(-30px); } } and set animation on .alien!',
      rules: [
        {
          type: 'custom',
          check: (code) => /@keyframes\s+bounce/i.test(code),
          message: 'Define the @keyframes bounce rule!'
        },
        {
          type: 'hasCssProperty',
          property: 'animation',
          valuePattern: /bounce/i,
          message: 'Attach the bounce animation to .alien!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Keyframes are like flipbook drawings. You draw frame 1, frame 2, frame 3, and flip them super fast to make it move.',
      discussionQuestions: [
        'What does infinite mean in animation? (It loops forever without stopping!)',
        'What happens if you change 1s to 0.2s or 5s?'
      ],
      commonMistakes: [
        'Mismatched animation name in @keyframes and the animation property.',
        'Leaving off the time unit (writing 1 instead of 1s).'
      ],
      funActivity: 'Change 1s to 0.1s and watch the alien vibrate like it drank 5 cups of espresso!'
    }
  },

  // ==========================================
  // PROJECT 1: Superhero / Monster ID Card
  // ==========================================
  {
    id: 'proj-superhero-card',
    module: 'projects',
    title: 'Project 1: Superhero / Pet ID Card',
    icon: '🦸',
    tag: 'Full Mini-Project',
    summary: 'Put all your superpowers together: create a collectible trading card for a superhero or mythical pet!',
    story: `Time to show off your real coding chops! 
In this project, you will build a complete, collectible trading card featuring an avatar, superhero title, power stats badges, and an interactive superpower button.`,
    tagsExplored: ['Full HTML + CSS integration', 'Flexbox layout', 'Card styling', 'Hover glow'],
    quickTags: ['<div class="card">', '<span class="badge">', 'border-radius: 20px;', 'box-shadow: 0 10px 30px rgba(...)'],
    initialCode: `<style>
  body {
    background: #1a1a2e;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
  }
  .card {
    background: #16213e;
    color: white;
    padding: 25px;
    border-radius: 15px;
    text-align: center;
    max-width: 280px;
  }
  .avatar {
    font-size: 60px;
  }
</style>

<div class="card">
  <div class="avatar">⚡</div>
  <h2>Captain Volt</h2>
  <p>Guardian of the Cyber Grid</p>
</div>`,
    targetCode: `<style>
  body {
    background: #1a1a2e;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
  }
  .card {
    background: linear-gradient(145deg, #16213e, #0f3460);
    color: white;
    padding: 30px;
    border-radius: 20px;
    text-align: center;
    max-width: 280px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.5), 0 0 15px rgba(233, 69, 96, 0.4);
    border: 2px solid #e94560;
    transition: transform 0.3s;
  }
  .card:hover {
    transform: translateY(-8px);
  }
  .avatar {
    font-size: 65px;
    background: rgba(233, 69, 96, 0.2);
    width: 100px;
    height: 100px;
    line-height: 100px;
    border-radius: 50%;
    margin: 0 auto 15px;
  }
  .badge {
    background: #e94560;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: bold;
    display: inline-block;
    margin: 5px;
  }
  button {
    background: #e94560;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 12px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 15px;
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
    targetDescription: `You will see a high-tech glowing trading card with rounded corners, a circular avatar container with a lightning bolt, two power stat pills ("Power: 9999" and "Element: Lightning"), and a glowing button that unleashes a superpower alert when clicked!`,
    challenge: {
      mission: 'Add two <span class="badge"> badges for power stats and a button that activates the hero\'s superpower with an alert!',
      hint: 'Add <span class="badge">Power: 9999</span> and <button onclick="alert(\'⚡ Zap!\')">Activate Superpower</button>',
      rules: [
        {
          type: 'custom',
          check: (code) => (code.match(/class\s*=\s*["']badge["']/gi) || []).length >= 2,
          message: 'Add at least TWO <span class="badge"> elements to the card!'
        },
        {
          type: 'hasTag',
          tag: 'button',
          message: 'Add an action button to activate the superpower!'
        },
        {
          type: 'custom',
          check: (code) => /onclick/i.test(code),
          message: 'Add an onclick alert to your button!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Trading cards like Pokémon or sports cards have an image, a rank, HP/power stats, and special moves. That is exactly what we modeled with HTML and CSS!',
      discussionQuestions: [
        'How would you change this into your favorite anime or gaming character?',
        'What colors make a card feel "rare" or "legendary"?'
      ],
      commonMistakes: [
        'Placing the badges outside of the card container.',
        'Not setting display: inline-block or padding on the badge.'
      ],
      funActivity: 'Have the kid customize the hero\'s name, emoji, and superpower shout!'
    }
  },

  // ==========================================
  // PROJECT 2: Yummy Pizza Restaurant Menu
  // ==========================================
  {
    id: 'proj-pizza-menu',
    module: 'projects',
    title: 'Project 2: Yummy Pizza Restaurant',
    icon: '🍕',
    tag: 'Interactive Menu',
    summary: 'Build a restaurant menu with pizza choices, prices, and an order counter!',
    story: `Welcome to Luigi & Pixel\'s Pizzeria! 
People are hungry and want to see the menu with yummy toppings, prices, and a button to place an order.
You will combine lists, borders, flexbox, and buttons!`,
    tagsExplored: ['Lists', 'Flexbox layout', 'Badges', 'Button actions'],
    quickTags: ['<div class="menu-item">', '<span class="price">$12</span>', 'display: flex;', 'justify-content: space-between;'],
    initialCode: `<style>
  body {
    background: #fffa65;
    font-family: 'Comic Sans MS', sans-serif;
    padding: 20px;
  }
  .menu {
    background: white;
    max-width: 320px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 16px;
    border: 4px dashed #ff4d4d;
  }
  h1 { text-align: center; color: #ff4d4d; }
  .item {
    margin: 15px 0;
    padding-bottom: 10px;
    border-bottom: 1px dotted #ccc;
  }
</style>

<div class="menu">
  <h1>🍕 Luigi\'s Pizza</h1>
  <div class="item">
    <strong>Pepperoni Blast</strong>
    <p>Loaded with spicy pepperoni & gooey cheese</p>
  </div>
</div>`,
    targetCode: `<style>
  body {
    background: #fffa65;
    font-family: 'Comic Sans MS', sans-serif;
    padding: 20px;
  }
  .menu {
    background: white;
    max-width: 340px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 16px;
    border: 4px dashed #ff4d4d;
  }
  h1 { text-align: center; color: #ff4d4d; }
  .item {
    margin: 15px 0;
    padding-bottom: 10px;
    border-bottom: 1px dotted #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .order-btn {
    background: #2ed573;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
  }
  .price {
    color: #ff4757;
    font-weight: bold;
  }
</style>

<div class="menu">
  <h1>🍕 Luigi\'s Pizza</h1>
  <div class="item">
    <div>
      <strong>Pepperoni Blast</strong>
      <div class="price">$12</div>
    </div>
    <button class="order-btn" onclick="alert('🍕 1 Pepperoni Pizza added to cart!')">Order</button>
  </div>
  <div class="item">
    <div>
      <strong>Cheese Volcano 🧀</strong>
      <div class="price">$10</div>
    </div>
    <button class="order-btn" onclick="alert('🧀 1 Cheese Volcano added to cart!')">Order</button>
  </div>
</div>`,
    targetDescription: `You will see a cute red-and-white restaurant menu framed with a festive dashed red border. Two pizza items (Pepperoni Blast and Cheese Volcano) with prices ($12, $10) are listed side-by-side with bright green "Order" buttons that trigger cart notifications!`,
    challenge: {
      mission: 'Add a second pizza ("Cheese Volcano") and give each item an Order button with an onclick alert!',
      hint: 'Duplicate the .item div, change the text to Cheese Volcano, and include the <button class="order-btn">Order</button>!',
      rules: [
        {
          type: 'custom',
          check: (code) => (code.match(/class\s*=\s*["']item["']/gi) || []).length >= 2,
          message: 'Have at least two pizza items on the menu!'
        },
        {
          type: 'custom',
          check: (code) => (code.match(/<button/gi) || []).length >= 2,
          message: 'Add an Order button for each pizza item!'
        },
        {
          type: 'custom',
          check: (code) => /Cheese/i.test(code),
          message: 'Add the Cheese Volcano pizza to the menu!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Every online food ordering app (DoorDash, UberEats) is built using these exact same HTML list cards and CSS buttons.',
      discussionQuestions: [
        'How could you add a button to remove a pizza from the cart?',
        'What dessert would you add to this menu?'
      ],
      commonMistakes: [
        'Forgetting to wrap the title and price in a div so flexbox can align the button to the right.',
        'Broken quotation marks in the alert handler.'
      ],
      funActivity: 'Have the kid make up silly pizza toppings like "Marshmallow Gummy Bear Pizza"!'
    }
  },

  // ==========================================
  // PROJECT 3: Cyber Space Station Panel
  // ==========================================
  {
    id: 'proj-space-station',
    module: 'projects',
    title: 'Project 3: Cyber Space Station',
    icon: '🚀',
    tag: 'Sci-Fi Dashboard',
    summary: 'Build a sci-fi rocket control dashboard with status indicators, radar, and launch triggers!',
    story: `Ground control to Major Coder! 
You are programming the cockpit monitor of the starship Artemis. 
It needs glowing telemetry stats, fuel bars, and a big red "IGNITION" launch button.`,
    tagsExplored: ['CSS Gradients', 'Glow effects', 'Status bars', 'Animations'],
    quickTags: ['<div class="gauge">', 'background: #00d2d3;', 'box-shadow: 0 0 15px #00d2d3;', '@keyframes pulse {'],
    initialCode: `<style>
  body {
    background: #0a0a14;
    color: #00d2d3;
    font-family: 'Courier New', monospace;
    padding: 30px;
    text-align: center;
  }
  .dashboard {
    border: 2px solid #00d2d3;
    border-radius: 16px;
    padding: 20px;
    max-width: 320px;
    margin: 0 auto;
    box-shadow: 0 0 20px rgba(0, 210, 211, 0.3);
  }
  .status {
    font-size: 18px;
    margin: 15px 0;
  }
</style>

<div class="dashboard">
  <h2>🚀 STARSHIP APOLLO</h2>
  <div class="status">SYSTEM: ONLINE</div>
</div>`,
    targetCode: `<style>
  body {
    background: #0a0a14;
    color: #00d2d3;
    font-family: 'Courier New', monospace;
    padding: 30px;
    text-align: center;
  }
  .dashboard {
    border: 2px solid #00d2d3;
    border-radius: 16px;
    padding: 25px;
    max-width: 320px;
    margin: 0 auto;
    box-shadow: 0 0 20px rgba(0, 210, 211, 0.4);
    background: rgba(0, 210, 211, 0.05);
  }
  .status {
    font-size: 16px;
    margin: 12px 0;
    color: #54a0ff;
  }
  .progress-bar {
    background: #222f3e;
    height: 16px;
    border-radius: 8px;
    overflow: hidden;
    margin: 15px 0;
  }
  .fill {
    background: #1dd1a1;
    width: 85%;
    height: 100%;
    box-shadow: 0 0 10px #1dd1a1;
  }
  .launch-btn {
    background: #ee5253;
    color: white;
    font-family: inherit;
    font-weight: bold;
    font-size: 18px;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 0 15px #ee5253;
    transition: transform 0.2s;
  }
  .launch-btn:hover {
    transform: scale(1.08);
  }
</style>

<div class="dashboard">
  <h2>🚀 STARSHIP APOLLO</h2>
  <div class="status">WARP DRIVE: READY</div>
  <div class="status">FUEL LEVEL: 85%</div>
  <div class="progress-bar">
    <div class="fill"></div>
  </div>
  <button class="launch-btn" onclick="alert('🚀 BLASTOFF! Entering Hyperspace!')">LAUNCH ROCKET</button>
</div>`,
    targetDescription: `You will see a futuristic sci-fi cockpit control interface:
1. Cyan glowing dashboard frame with monospaced terminal font.
2. Warp drive & Fuel telemetry readout.
3. An emerald green glowing progress bar showing 85% fuel level.
4. A red glowing "LAUNCH ROCKET" button that blasts off with a hyperspace alert!`,
    challenge: {
      mission: 'Add a fuel level progress bar and a red .launch-btn that triggers a BLASTOFF alert!',
      hint: 'Add <div class="progress-bar"><div class="fill"></div></div> and <button class="launch-btn" onclick="alert(\'Blastoff!\')">LAUNCH</button>',
      rules: [
        {
          type: 'custom',
          check: (code) => /progress-bar/i.test(code),
          message: 'Add the progress-bar container for the fuel gauge!'
        },
        {
          type: 'hasTag',
          tag: 'button',
          message: 'Add the LAUNCH ROCKET button!'
        },
        {
          type: 'custom',
          check: (code) => /blastoff|launch/i.test(code),
          message: 'Button should mention Launch or Blastoff!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'Real space shuttle consoles use visual indicators like progress bars and warning lights to help astronauts make decisions fast.',
      discussionQuestions: [
        'How would you change the fuel bar from green to flashing red when fuel is low?',
        'What other spaceship instruments can you build?'
      ],
      commonMistakes: [
        'Setting width on .progress-bar instead of .fill.',
        'Not setting overflow: hidden on the parent bar.'
      ],
      funActivity: 'Do a 5-4-3-2-1 countdown aloud before clicking the LAUNCH button!'
    }
  }
];

export function getLessonById(id) {
  return LESSONS.find(l => l.id === id) || null;
}

export function getLessonsByModule(moduleId) {
  return LESSONS.filter(l => l.module === moduleId);
}
