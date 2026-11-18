import fs from 'fs';

const content = fs.readFileSync('dino-game-darsi/index.html', 'utf8');
const startTag = 'const STANDALONE_HTML_TEMPLATE = `';
const startIdx = content.indexOf(startTag);
if (startIdx !== -1) {
  const endIdx = content.indexOf('`;', startIdx);
  const standalone = content.slice(startIdx + startTag.length, endIdx);
  fs.writeFileSync('dino-game-darsi/dino-standalone.html', standalone, 'utf8');
  console.log('Saved dino-game-darsi/dino-standalone.html');
}
