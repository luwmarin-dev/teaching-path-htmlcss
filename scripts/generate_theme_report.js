import fs from 'fs';

const content = fs.readFileSync('html-css/src/modules/curriculum.js', 'utf8');

const themeBlocks = content.split(/id:\s*['"](theme-[^'"]+)['"]/);
const report = [];

for (let i = 1; i < themeBlocks.length; i += 2) {
  const themeId = themeBlocks[i];
  const block = themeBlocks[i + 1];

  const qTagsMatch = block.match(/quickTags:\s*\[([\s\S]*?)\]/);
  const missionMatch = block.match(/mission:\s*\{([\s\S]*?)\}/);
  const qTags = qTagsMatch ? qTagsMatch[1].trim() : '';
  const missionUzMatch = missionMatch ? missionMatch[1].match(/uz:\s*['"`]([\s\S]*?)['"`]/) : null;
  const missionEnMatch = missionMatch ? missionMatch[1].match(/en:\s*['"`]([\s\S]*?)['"`]/) : null;

  report.push({
    id: themeId,
    qTags,
    missionUz: missionUzMatch ? missionUzMatch[1] : '',
    missionEn: missionEnMatch ? missionEnMatch[1] : ''
  });
}

fs.writeFileSync('scripts/theme_report.json', JSON.stringify(report, null, 2));
console.log('Report written for', report.length, 'themes');
