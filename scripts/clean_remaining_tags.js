import fs from 'fs';

let content = fs.readFileSync('html-css/src/modules/curriculum.js', 'utf8');

// theme-4-pictures
content = content.replace(
  /quickTags:\s*\[\s*'<figure class="hero-figure">',\s*'<img src="\.\.\." alt="Mars Rover" class="hero-img">',\s*'<figcaption class="gallery-caption">',\s*'object-fit: cover;',\s*'border-radius: 50%;'\s*\]/,
  `quickTags: ['<figure class="hero-figure">', '<img src="..." alt="Mars Rover" class="hero-img">', '<figcaption class="gallery-caption">']`
);

// theme-5-divs
content = content.replace(
  /quickTags:\s*\[\s*'<div>',\s*'<\/div>',\s*'style="border: 4px solid #2dd4bf;"',\s*'border: 4px solid #2dd4bf;'\s*\]/,
  `quickTags: ['<div>', '</div>']`
);

// theme-10-buttons
content = content.replace(
  /quickTags:\s*\[\s*'<button class="magic-btn">',\s*'<\/button>',\s*':hover \{ background: #2dd4bf; \}',\s*'transform: scale\(1\.1\);'\s*\]/,
  `quickTags: ['<button class="magic-btn">', '</button>']`
);

fs.writeFileSync('html-css/src/modules/curriculum.js', content, 'utf8');
console.log('Cleaned theme-4, theme-5, theme-10 quickTags!');
