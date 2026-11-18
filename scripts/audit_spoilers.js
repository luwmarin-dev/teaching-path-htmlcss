import fs from 'fs';

const content = fs.readFileSync('html-css/src/modules/curriculum.js', 'utf8');

const themeBlocks = content.split(/id:\s*['"](theme-[^'"]+)['"]/);
for (let i = 1; i < themeBlocks.length; i += 2) {
  const themeId = themeBlocks[i];
  const block = themeBlocks[i + 1];
  
  const qTagsMatch = block.match(/quickTags:\s*\[([\s\S]*?)\]/);
  const missionMatch = block.match(/mission:\s*\{([\s\S]*?)\}/);
  const qTags = qTagsMatch ? qTagsMatch[1].trim() : '';
  const mission = missionMatch ? missionMatch[1].trim() : '';
  
  const hasSpoiler = /display\s*:|position\s*:|justify-content|align-items|grid-template/i.test(mission) ||
                     /:\s*[^;]+;/i.test(qTags);
  if (hasSpoiler) {
    console.log('=== ' + themeId + ' ===');
    console.log('  quickTags:', qTags);
    const uzMatch = mission.match(/uz:\s*['"`]([\s\S]*?)['"`]/);
    if (uzMatch) {
      console.log('  mission uz:', uzMatch[1].slice(0, 160).replace(/\n/g, ' '));
    }
  }
}
