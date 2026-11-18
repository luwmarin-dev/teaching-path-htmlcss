import fs from 'fs';

let content = fs.readFileSync('html-css/src/modules/curriculum.js', 'utf8');

// 1. Theme 9: Flexbox
// Replace quickTags:
content = content.replace(
  /quickTags:\s*\['display:\s*flex;',\s*'justify-content:\s*space-between;',\s*'align-items:\s*center;',\s*'gap:\s*12px;'\],/,
  "quickTags: [],"
);

// Replace mission in Theme 9:
content = content.replace(
  /mission:\s*\{\s*en:\s*'Build the CyberPulse Music SPA with 3 Flexbox layouts! 1\) Add display: flex;, justify-content: space-between;, align-items: center; to \.spa-navbar\. 2\) Add display: flex;, gap: 12px; to \.track-row\. 3\) Add display: flex;, justify-content: space-between;, align-items: center; to \.spa-player!',\s*uz:\s*'CyberPulse Musiqa SPA sahifasida 3 ta alohida Flexbox joylashuvini quring! 1\) \.spa-navbar ga display: flex;, justify-content: space-between; va align-items: center; bering\. 2\) \.track-row ga display: flex; va gap: 12px; yozing\. 3\) \.spa-player ga display: flex;, justify-content: space-between; va align-items: center; yozing!'\s*\}/,
  `mission: {
        en: 'Assemble the CyberPulse Music SPA with 3 flexible row layouts! 1) Snap the children inside .spa-navbar into a single horizontal row, distribute them to opposite outer edges across the main X axis, and center them vertically! 2) Arrange the music track cards in .track-row into a horizontal line with 12px clean spacing between each card. 3) Align the .spa-player controls in a horizontal row, push the widgets to opposite ends, and center them vertically!',
        uz: 'CyberPulse Musiqa SPA sahifasida 3 ta alohida moslashuvchan qator joylashuvini yarating! 1) .spa-navbar ichidagi bolalarni chapdan o\\\'ngga bitta gorizontal qatorga joylashtiring (barcha elementlar yonma-yon tizilsin), ularni asosiy X o\\\'qi bo\\\'yicha burchaklardan burchakka (ikki chetga) sochib taqsimlang va vertikal markazlang! 2) .track-row ichidagi qo\\\'shiq kartalarini ham gorizontal qatorga tizib, kartalar orasida 12px oraliq masofa qoldiring. 3) .spa-player boshqaruv qismini ham bitta gorizontal qatorga tizib, elementlarni ikki chekkaga yoying va vertikal markazlang!'
      }`
);

// Replace rule message in Theme 9:
content = content.replace(
  "message: 'Add display: flex; and gap: 12px; to .track-row!'",
  "message: '.track-row ichidagi kartalarni gorizontal qatorga tering va 12px oraliq qoldiring!'"
);

// 2. Theme 22: Position
content = content.replace(
  /quickTags:\s*\[\s*'position:\s*sticky;',\s*'top:\s*0;',\s*'position:\s*relative;',\s*'position:\s*absolute;',\s*'top:\s*-10px;',\s*'right:\s*-10px;',\s*'bottom:\s*10px;',\s*'position:\s*fixed;',\s*'bottom:\s*20px;',\s*'right:\s*20px;'\s*\],/,
  "quickTags: [],"
);

content = content.replace(
  /mission:\s*\{\s*en:\s*'Deploy all 5 positions in the Defense SPA! 1\) Add position: sticky; top: 0; to \.sticky-navbar\. 2\) Add position: relative; to \.shield-card and \.radar-panel\. 3\) Add position: absolute; top: -10px; right: -10px; to \.alarm-badge\. 4\) Add position: absolute; bottom: 10px; right: 10px; to \.radar-blip\. 5\) Add position: fixed; bottom: 20px; right: 20px; to \.fixed-drone!',\s*uz:\s*'Mudofaa SPA sahifasida barcha 5 ta positionni amalda qo\\\'llang! 1\) \.sticky-navbar ga position: sticky; va top: 0; bering\. 2\) \.shield-card va \.radar-panel ga position: relative; bering\. 3\) \.alarm-badge ga position: absolute; top: -10px; va right: -10px; bering\. 4\) \.radar-blip ga position: absolute; bottom: 10px; va right: 10px; bering\. 5\) \.fixed-drone ga position: fixed; bottom: 20px; va right: 20px; bering!'\s*\}/,
  `mission: {
        en: 'Master spatial placement across the Defense SPA! 1) Make .sticky-navbar stick to the very top edge of the screen as you scroll (0 distance from top). 2) Establish .shield-card and .radar-panel as relative coordinate anchor points for their children. 3) Position the .alarm-badge on the top-right corner of its card (top -10px, right -10px). 4) Position the .radar-blip inside the radar panel\\\'s bottom-right corner (bottom 10px, right 10px). 5) Anchor the .fixed-drone floating in place at the bottom-right corner of the whole browser viewport (bottom 20px, right 20px)!',
        uz: 'Mudofaa SPA sahifasida 5 ta elementning joylashuvini to\\\'g\\\'ri boshqaring! 1) .sticky-navbar sahifa pastga aylantirilganda ham ekranning eng yuqori qismida yopishib tursin (tepadan 0 masofada). 2) .shield-card va .radar-panel konteynerlarini ichki koordinata poydevori (o\\\'z turgan joyiga nisbiy asos) qilib belgilang. 3) .alarm-badge ogohlantiruvchi nishonini o\\\'z kartochkasining yuqori o\\\'ng burchagiga chiqarib qo\\\'ying (tepadan -10px, o\\\'ngdan -10px). 4) .radar-blip nishonini radar panelining pastki o\\\'ng burchagiga joylashtiring (pastdan 10px, o\\\'ngdan 10px). 5) .fixed-drone dronini butun ekranning pastki o\\\'ng burchagida muallaq qotirib qo\\\'ying (pastdan 20px, o\\\'ngdan 20px)!'
      }`
);

// 3. Theme 21: Grid
content = content.replace(
  /quickTags:\s*\[\s*'display:\s*grid;',\s*'grid-template-columns:\s*200px 1fr 1fr;',\s*'gap:\s*16px;',\s*'grid-column:\s*1 \/ -1;',\s*'grid-column:\s*span 2;'\s*\],/,
  "quickTags: [],"
);

content = content.replace(
  /mission:\s*\{\s*en:\s*'Build the CyberStore Launcher SPA with 4 Grid operations! 1\) Add display: grid;, grid-template-columns: 200px 1fr 1fr;, gap: 16px; to \.spa-grid\. 2\) Add grid-column: 1 \/ -1; to \.spa-header\. 3\) Add grid-column: span 2; to \.featured-card\. 4\) Add grid-column: 1 \/ -1; to \.spa-footer!',\s*uz:\s*'CyberStore O\\\'yinlar Do\\\'koni SPA sahifasida 4 ta Grid xususiyatini qo\\\'llang! 1\) \.spa-grid ga display: grid;, grid-template-columns: 200px 1fr 1fr; va gap: 16px; bering\. 2\) \.spa-header ga grid-column: 1 \/ -1; bering\. 3\) \.featured-card ga grid-column: span 2; bering\. 4\) \.spa-footer ga grid-column: 1 \/ -1; bering!'\s*\}/,
  `mission: {
        en: 'Build the 2D layout for CyberStore Gaming Hub! 1) Activate 2D grid layout on .spa-grid with 3 columns (first fixed at 200px, next two sharing space equally at 1fr) and 16px gaps. 2) Stretch .spa-header across all columns from the first grid line to the very last line! 3) Expand .featured-card across 2 columns! 4) Span .spa-footer across the entire width from start to finish line!',
        uz: 'CyberStore O\\\'yinlar Do\\\'koni SPA sahifasida 2 o\\\'lchamli to\\\'r quring! 1) .spa-grid konteynerida 2 o\\\'lchamli to\\\'r tizimini yoqing: 3 ta ustun hosil qiling (birinchisi 200px kenglikda, qolgan 2 tasi teng ulushda 1fr), ustun va qatorlar orasida 16px oraliq masofa qoldiring. 2) .spa-header bosh sarlavhasini birinchi chiziqdan eng oxirgi chiziqqacha butun eni bo\\\'ylab yoying! 3) .featured-card maxsus o\\\'yin kartasini 2 ta ustun kengligida yoying! 4) .spa-footer pastki panelini ham to\\\'liq kenglik bo\\\'ylab birinchi chiziqdan oxirigacha yoying!'
      }`
);

// 4. Theme 8: Transform
content = content.replace(
  /quickTags:\s*\[\s*'transform:\s*rotate\(15deg\);',\s*'transform:\s*scale\(1\.2\);',\s*'transform:\s*translateY\(-15px\);'\s*\],/,
  "quickTags: [],"
);

content = content.replace(
  /mission:\s*\{\s*en:\s*'Move the 3 ready boxes! Rotate \.box-1 by 15deg, zoom \.box-2 with scale\(1\.2\), and float \.box-3 with translateY\(-15px\)!',\s*uz:\s*'Tayyor 3 ta qutini harakatlantiring! \.box-1 ni rotate\(15deg\) bilan buring, \.box-2 ni scale\(1\.2\) bilan kattalashtiring, \.box-3 ni translateY\(-15px\) bilan suring!'\s*\}/,
  `mission: {
        en: 'Transform 3 crates in 2D space! 1) Rotate .box-1 clockwise by 15 degrees! 2) Scale up .box-2 to 1.2 times its original size! 3) Float .box-3 upward by 15 pixels along the vertical axis!',
        uz: 'Tayyor 3 ta qutini 2D fazoda o\\\'zgartiring! 1) .box-1 qutisini soat mili bo\\\'yicha 15 gradusga buring! 2) .box-2 qutisini 1.2 barobar kattalashtirib kattaroq qiling! 3) .box-3 qutisini Y o\\\'qi bo\\\'ylab 15 piksel yuqoriga ko\\\'tarib muallaq qiling!'
      }`
);

// 5. Theme 25: Overflow
content = content.replace(
  /quickTags:\s*\[\s*'overflow-y:\s*auto;',\s*'overflow-x:\s*auto;',\s*'overflow:\s*hidden;\s*text-overflow:\s*ellipsis;'\s*\],/,
  "quickTags: [],"
);

content = content.replace(
  /mission:\s*\{\s*en:\s*'Configure all 3 overflow modes: add overflow-y: auto to \.terminal-box, overflow-x: auto to \.weapons-deck, and text-overflow: ellipsis with overflow: hidden to \.id-badge!',\s*uz:\s*'Barcha 3 xil overflow turini sozlang: \.terminal-box ga overflow-y: auto, \.weapons-deck ga overflow-x: auto va \.id-badge ga text-overflow: ellipsis hamda overflow: hidden bering!'\s*\}/,
  `mission: {
        en: 'Handle overflowing content across 3 panels! 1) Enable automatic vertical scrolling when text overflows in .terminal-box. 2) Enable horizontal scrolling for weapons lined up in .weapons-deck. 3) In .id-badge, clip any overflowing text cleanly and truncate it with an ellipsis (...)!',
        uz: 'Konteynerlarning toshib ketishini to\\\'g\\\'ri boshqaring! 1) .terminal-box ichidagi matn vertikal toshganda avtomatik aylantirish (scroll) imkonini bering. 2) .weapons-deck ichidagi qurollar gorizontal qatorga sig\\\'may toshganda gorizontal aylantirish imkonini bering. 3) .id-badge ichidagi uzun matn sig\\\'may toshsa, ortiqcha qismini yashiring va oxirida uch nuqta (...) bilan qisqartirib ko\\\'rsating!'
      }`
);

// 6. Clean quickTags for remaining CSS-only themes
const cssThemes = [
  'theme-7-box-model',
  'theme-13-colors',
  'theme-14-fonts',
  'theme-15-shapes',
  'theme-16-animations',
  'theme-23-transitions',
  'theme-24-filters',
  'theme-26-gradients',
  'theme-27-media-queries',
  'theme-28-web-fonts-icons'
];

for (const th of cssThemes) {
  const reg = new RegExp(`(id:\\s*['"]${th}['"][\\s\\S]*?quickTags:\\s*)\\[[\\s\\S]*?\\]`);
  content = content.replace(reg, '$1[]');
}

fs.writeFileSync('html-css/src/modules/curriculum.js', content, 'utf8');
console.log('Successfully updated curriculum.js!');
