# 👾 CodeCraft Kids: HTML & CSS Educational Adventure

An interactive, kid-friendly learning platform and visual coding studio designed for parents and teachers to guide kids (ages 7–14) through **HTML & CSS** from their very first tag to creating superhero cards, interactive pizza menus, and cyber space stations!

---

## 🚀 Quick Start (1-Click Launch)

### On Windows:
Double-click **`start.bat`** in this folder!  
It will automatically launch the local server and open your default browser to `http://localhost:3000`.

### Via Terminal:
```bash
npm start
# or
node server.js
```

### Run Automated Tests & Coverage:
```bash
npm test
# To inspect 99%+ code coverage:
node --test --experimental-test-coverage tests/*.test.js
```

---

## 🌟 Key Features Built for Kids & Parents

### 1. 📖 For Every Theme / Subject
- **Kid-Friendly Story & Real-World Analogy**: Explains the concepts in terms kids love (skeletons, lego blocks, megaphone volume, bubble wrap).
- **Cheat Sheet & Quick Tag Chips**: Clickable buttons (e.g. `[+ <h1>]`, `[+ <button>]`, `[+ <img>]`, `[+ color: hotpink]`) so young kids don't struggle finding `<` and `>` on the keyboard.
- **Starter Interactive Code**: Clean, formatted code ready to edit.
- **🎯 "What the Result Should Look Like" Preview**: Kids and parents can switch between **Live Result**, **Target Goal**, and **⚖️ Side-by-Side Comparison** so they always know what success looks like.
- **Target Description**: Plain-language breakdown explaining every visual element in the result.
- **Mission Quest & Automated Checker**: Click *"🚀 Check My Code!"* to test if the required tags/styles are present.
- **Celebration Mode**: Confetti explosion on HTML5 canvas, retro synthesized fanfare sounds, and star awards!

### 2. 🧑‍🏫 Teacher & Parent Secret Playbook (Toggleable)
Click the **"🧑‍🏫 Teacher Mode"** or **"Teacher Tips"** button on any lesson to reveal:
- **How to explain this to a kid** (simple analogies).
- **Questions to ask aloud** to spark curiosity and conversation.
- **Common traps kids fall into** (e.g. spelling `src` as `scr`, forgetting closing tags `</>`, forgetting quotes).
- **Off-screen physical activities** (e.g. acting out headings with deep vs squeaky voices, putting on a coat for padding).

### 3. 🧪 3 Interactive Visual Labs
Accessible from the top navigation bar:
- **📦 The Box Model Toy**: Interactive visualizer with sliders for Margin (personal space), Border (wall), Padding (bubble wrap), and Corner Curve (radius) with live generated CSS!
- **🧩 Flexbox LEGO Lab**: Command 3 cute cyber-buddies (🤖, 🐱, 🚀) to snap into rows, columns, center, or space-between.
- **🎨 Color & Gradient Mixer**: Pick superhero color palettes or slide RGB/Angle to create dazzling backgrounds.

### 4. 🚀 Free Creative Sandbox ("Creative Mode")
- Scratchpad where kids can create anything they want.
- Comes with starter templates:
  - 📄 Blank Canvas
  - 🦸 Superhero Trading Card
  - 🎂 Birthday Party Invitation
- **💾 One-Click Download**: Saves their webpage as a real `.html` file directly to their computer to show friends or grandparents!

### 5. 🔊 Kid Delight Features
- **Retro Sound Synthesizer**: Uses Web Audio API for arcade clicks, star chimes, celebration fanfares, and cartoon boings (100% offline, zero audio files).
- **Speech Narrator ("🔊 Read Aloud")**: Uses Web Speech API to read the lesson stories and missions aloud for young readers.
- **Avatar & Cadet Name Selector**: Kids can choose from 10 avatars (🚀, 🐱, 🤖, 🦖, 🦄, ⚡, 👾, 🍕, 👑, 🦸) and name their profile.
- **Themes**: Switch between *Candy*, *Arcade*, and *Space* color themes.

---

## 📚 Curriculum Structure

### Module 1: The HTML Skeleton 🦴
1. **The Body & The Bones** (`<html>`, `<head>`, `<body>`, `<!DOCTYPE>`)
2. **Gigantic Headings & Secret Words** (`<h1>`–`<h6>`, `<p>`, `<strong>`, `<em>`, `<mark>`)
3. **Super Action Buttons** (`<button>`, `<input>`, `onclick="alert(...)"`)
4. **Pictures, Pets & Monsters** (`<img src="" alt="" width="">`)
5. **Secret Portals (Hyperlinks)** (`<a href="" target="_blank">`)
6. **Treasure Lists & Inventories** (`<ul>`, `<ol>`, `<li>`)
7. **Secret Boxes & Card Containers** (`<div>`, `<span>`, `class=""`)

### Module 2: The CSS Magic Paint 🎨
8. **Color Power & Gradients** (`color`, `background`, Hex `#ff007f`, gradients)
9. **Epic Typography & Text Shadows** (`font-family`, `font-size`, `text-shadow`)
10. **The Secret Box Model** (`margin`, `border`, `padding`, `width`)
11. **Rounded Corners & Magic Badges** (`border-radius: 50%`, pills)
12. **Flexbox: The LEGO Snap System** (`display: flex`, `justify-content`, `gap`)
13. **Hover Powers & Micro-Interactions** (`:hover`, `transform: scale`, `transition`)
14. **Alive & Bouncing: Keyframe Animations** (`@keyframes`, `animation: bounce infinite`)

### Module 3: Epic Mini-Projects 🚀
15. **Project 1: Superhero / Pet ID Card** (Complete trading card with badges and power moves)
16. **Project 2: Yummy Pizza Restaurant** (Restaurant menu with prices and interactive ordering)
17. **Project 3: Cyber Space Station** (Sci-fi telemetry dashboard with progress bars and ignition trigger)

---

## 🛠️ Adding New Lessons

New lessons can be added easily in `src/modules/curriculum.js`. Each lesson object accepts:
```javascript
{
  id: 'my-lesson-id',
  module: 'html', // or 'css' or 'projects'
  title: 'Lesson Title',
  icon: '🌟',
  tag: '<tag>',
  summary: 'Short description',
  story: 'Engaging story for kids',
  tagsExplored: ['<h1>', '<p>'],
  quickTags: ['<h1>', '</h1>'],
  initialCode: `...`,
  targetCode: `...`,
  targetDescription: `Detailed explanation of what the result looks like`,
  challenge: {
    mission: 'What the student needs to do',
    hint: 'Helpful hint if they get stuck',
    rules: [
      { type: 'hasTag', tag: 'h1', message: 'Add an <h1> tag!' }
    ]
  },
  teacherGuide: {
    analogy: 'Real-world analogy',
    discussionQuestions: ['Question 1', 'Question 2'],
    commonMistakes: ['Mistake 1'],
    funActivity: 'Off-screen activity'
  }
}
```

---

## 🧪 Automated Tests
Run:
```bash
npm test
```
- **22 Unit & Integration tests**
- **99.27% Line Coverage**
- Automated validation of all lessons, starter codes, and target codes.
