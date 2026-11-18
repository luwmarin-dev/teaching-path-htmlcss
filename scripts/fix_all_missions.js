import fs from 'fs';

let content = fs.readFileSync('html-css/src/modules/curriculum.js', 'utf8');

// Function to safely replace challenge.mission inside a theme
function replaceMission(themeId, newEn, newUz) {
  const startIdx = content.indexOf(`id: '${themeId}'`);
  if (startIdx === -1) {
    console.error(`Theme ${themeId} not found!`);
    return;
  }
  const nextThemeIdx = content.indexOf(`id: 'theme-`, startIdx + 10);
  const endIdx = nextThemeIdx !== -1 ? nextThemeIdx : content.length;
  const themeBlock = content.slice(startIdx, endIdx);

  const missionRegex = /mission:\s*\{[\s\S]*?en:\s*['"`]([\s\S]*?)['"`],\s*uz:\s*['"`]([\s\S]*?)['"`]\s*\}/;
  if (!missionRegex.test(themeBlock)) {
    console.error(`Mission regex failed for ${themeId}`);
    return;
  }

  const updatedBlock = themeBlock.replace(missionRegex, `mission: {
        en: '${newEn.replace(/'/g, "\\'")}',
        uz: '${newUz.replace(/'/g, "\\'")}'
      }`);

  content = content.slice(0, startIdx) + updatedBlock + content.slice(endIdx);
  console.log(`Replaced mission for ${themeId}`);
}

replaceMission(
  'theme-22-position',
  'Master spatial placement across the Defense SPA! 1) Make .sticky-navbar stick to the very top edge of the screen as you scroll (0 distance from top). 2) Establish .shield-card and .radar-panel as relative coordinate anchor points for their children. 3) Position the .alarm-badge on the top-right corner of its card (top -10px, right -10px). 4) Position the .radar-blip inside the radar panel\\\'s bottom-right corner (bottom 10px, right 10px). 5) Anchor the .fixed-drone floating in place at the bottom-right corner of the whole browser viewport (bottom 20px, right 20px)!',
  'Mudofaa SPA sahifasida 5 ta elementning joylashuvini to\\\'g\\\'ri boshqaring! 1) .sticky-navbar sahifa pastga aylantirilganda ham ekranning eng yuqori qismida yopishib tursin (tepadan 0 masofada). 2) .shield-card va .radar-panel konteynerlarini ichki koordinata poydevori (o\\\'z turgan joyiga nisbiy asos) qilib belgilang. 3) .alarm-badge ogohlantiruvchi nishonini o\\\'z kartochkasining yuqori o\\\'ng burchagiga chiqarib qo\\\'ying (tepadan -10px, o\\\'ngdan -10px). 4) .radar-blip nishonini radar panelining pastki o\\\'ng burchagiga joylashtiring (pastdan 10px, o\\\'ngdan 10px). 5) .fixed-drone dronini butun ekranning pastki o\\\'ng burchagida muallaq qotirib qo\\\'ying (pastdan 20px, o\\\'ngdan 20px)!'
);

replaceMission(
  'theme-21-grid',
  'Build the 2D layout for CyberStore Gaming Hub! 1) Activate 2D grid layout on .spa-grid with 3 columns (first fixed at 200px, next two sharing space equally at 1fr) and 16px gaps. 2) Stretch .spa-header across all columns from the first grid line to the very last line! 3) Expand .featured-card across 2 columns! 4) Span .spa-footer across the entire width from start to finish line!',
  'CyberStore O\\\'yinlar Do\\\'koni SPA sahifasida 2 o\\\'lchamli to\\\'r quring! 1) .spa-grid konteynerida 2 o\\\'lchamli to\\\'r tizimini yoqing: 3 ta ustun hosil qiling (birinchisi 200px kenglikda, qolgan 2 tasi teng ulushda 1fr), ustun va qatorlar orasida 16px oraliq masofa qoldiring. 2) .spa-header bosh sarlavhasini birinchi chiziqdan eng oxirgi chiziqqacha butun eni bo\\\'ylab yoying! 3) .featured-card maxsus o\\\'yin kartasini 2 ta ustun kengligida yoying! 4) .spa-footer pastki panelini ham to\\\'liq kenglik bo\\\'ylab birinchi chiziqdan oxirigacha yoying!'
);

fs.writeFileSync('html-css/src/modules/curriculum.js', content, 'utf8');
console.log('Saved updated curriculum.js');
