import fs from 'fs';

let content = fs.readFileSync('html-css/src/modules/curriculum.js', 'utf8');

function updateThemeMission(themeId, newEn, newUz) {
  const startIdx = content.indexOf(`id: '${themeId}'`);
  if (startIdx === -1) {
    console.error(`Theme ${themeId} not found!`);
    return;
  }
  const nextThemeIdx = content.indexOf(`id: 'theme-`, startIdx + 10);
  const endIdx = nextThemeIdx !== -1 ? nextThemeIdx : content.length;
  const themeBlock = content.slice(startIdx, endIdx);

  // Match mission: { en: ... uz: ... }
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

// 1. Theme 25: Overflow
updateThemeMission(
  'theme-25-overflow',
  'Control content overflow across the Cyber Lab! 1) Enable vertical scrolling in .terminal-box when logs exceed its height. 2) Enable horizontal scrolling in .weapons-deck when weapons line up wider than the deck. 3) In .id-badge, cleanly clip overflowing text and truncate it with an ellipsis (...)!',
  'Kiber Laboratoriya panellarida ma\\\'lumotlar toshib ketishini boshqaring! 1) .terminal-box ichida server xabarlari balandlikdan oshib ketganda ularni vertikal aylantirish (skroll) imkonini bering. 2) .weapons-deck ichidagi qurol kartalari gorizontal qatorga sig\\\'may toshganda yonga surish (skroll) imkonini bering. 3) .id-badge nishonidagi agent kodi qutidan toshib ketmasligi uchun ortiqcha qismini lazerdek toza qirqib yashiring va oxirida uch nuqta (...) bilan qisqartirib ko\\\'rsating!'
);

// 2. Theme 13: Colors
updateThemeMission(
  'theme-13-colors',
  'Style the .color-badge agent insignia: set its text to bright cyan (#38bdf8), its backdrop to a translucent 12% cyber tint (rgba(56, 189, 248, 0.12)), and encircle it with a solid 2px cyan border (#38bdf8)!',
  '.color-badge agent nishonini kiber uslubda bezang: yozuvini och ko\\\'k (#38bdf8) rangda, orqa fonini 12% shaffof kiber moviy tusda (rgba(56, 189, 248, 0.12)) va atrofiga 2 piksel qalinlikdagi to\\\'liq moviy (#38bdf8) hoshiya bilan o\\\'rang!'
);

// 3. Theme 14: Fonts
updateThemeMission(
  'theme-14-fonts',
  'Give .arcade-title an eye-catching arcade glow: add a glowing emerald neon text shadow of 15px in #2dd4bf and set the font size to 36px!',
  '.arcade-title o\\\'yin sarlavhasiga retro arkada uslubidagi 15 piksel yoyilgan #2dd4bf zumrad neon yorug\\\'lik soyasini va 36 piksel kattalikdagi ko\\\'zni qamashtiruvchi shrift hajmini bering!'
);

// 4. Theme 15: Shapes
updateThemeMission(
  'theme-15-shapes',
  'Place the avatar <div class="avatar">🦊</div> inside the profile card and smooth its square corners completely into a perfect circle!',
  'Profil kartochkasiga <div class="avatar">🦊</div> avatarsini joylashtiring va uning to\\\'rtburchak qirralarini to\\\'liq yumaloqlab, mukammal aylanaga aylantiring!'
);

// 5. Theme 16: Animations
updateThemeMission(
  'theme-16-animations',
  'Animate the alien character using the bounce sequence: make it leap continuously over 1 second, alternating directions seamlessly!',
  '.alien personajiga \\\'bounce\\\' sakrash harakatini ulang: 1 soniya davomida to\\\'xtovsiz, har gal yo\\\'nalishini almashtirib mayin sakrab tursin!'
);

// 6. Theme 23: Transitions
updateThemeMission(
  'theme-23-transitions',
  'Make hover changes on .magic-card transition smoothly over 0.3 seconds instead of snapping abruptly!',
  '.magic-card kartochkasi ustiga sichqoncha kelganda (hover) harakatlar birdan sakrab emas, balki 0.3 soniya davomida mayin (smooth) o\\\'tish bilan amalga oshsin!'
);

// 7. Theme 24: Filters
updateThemeMission(
  'theme-24-filters',
  'Cast a silhouette-conforming 20px glowing emerald (#2dd4bf) drop shadow filter from .crystal!',
  '.crystal qimmatbaho olmosiga uning siluetini takrorlovchi 20 piksel yoyilgan #2dd4bf zumrad yog\\\'duli soya filtrini bering!'
);

// 8. Theme 26: Gradients
updateThemeMission(
  'theme-26-gradients',
  'Deploy all 5 gradient styles across the Cyber Lab: 45° diagonal blend (#ff007a to #7928ca), 90° horizontal blend (#00f2fe to #4facfe), 135° multicolor spectrum, centered 3D radial sphere, 360° circular radar sweep, and fill headline letters directly with the gradient!',
  'Kiber laboratoriyada barcha 5 xil ranglar jilosini qo\\\'llang: 45° qiya chiziqli gradient (#ff007a dan #7928ca gacha), 90° gorizontal gradient (#00f2fe dan #4facfe gacha), 135° ko\\\'p rangli gradient, markazdan tarqaluvchi 3D shar, 360° aylanma radar va sarlavha harflarining o\\\'zini rangli gradient bilan to\\\'ldiring!'
);

// 9. Theme 27: Media Queries
updateThemeMission(
  'theme-27-media-queries',
  'Write a responsive rule for compact screens (768px or narrower) that reorganizes the spaceship horizontal deck into a vertical column!',
  'Kichik ekranli qurilmalarda (ekran kengligi 768 piksel yoki undan kichik bo\\\'lganda) kosmik kemadagi gorizontal qatorni vertikal ustun holatiga moslashtiruvchi ekran qoidasini yozing!'
);

// 10. Theme 28: Web Fonts & Icons
updateThemeMission(
  'theme-28-web-fonts-icons',
  'Apply the futuristic \\\'Orbitron\\\' typography to .guild-title and add 3px of clean spacing between letters!',
  '.guild-title sarlavhasiga futuristik \\\'Orbitron\\\' shriftini o\\\'rnating va o\\\'qilishini osonlashtirish uchun harflar orasida 3 piksel kenglikdagi toza oraliq qoldiring!'
);

// 11. Theme 7: Box Model
updateThemeMission(
  'theme-7-box-model',
  'Pad the interior of .box with 24px so text does not touch the walls, and leave 30px of exterior margin so it separates cleanly from other cards!',
  '.box qutisining ichki qismidan matn devorga yopishib qolmasligi uchun 24 piksel ichki oraliq qoldiring va qutining tashqi tomonidan boshqa elementlar bilan to\\\'qnashmasligi uchun 30 piksel tashqi masofa bering!'
);

// 12. Theme 10: Buttons
updateThemeMission(
  'theme-10-buttons',
  'Insert the ✨ Turbo Boost button inside the card, and on hover, illuminate its background in #2dd4bf while scaling it up to 1.1x size!',
  'Kartochkaga ✨ Turbo Boost tugmasini joylashtiring va CSS da tugma ustiga sichqoncha kelganda (hover) orqa fonini #2dd4bf zumrad rangiga o\\\'zgartirib, hajmini 1.1 barobar kattalashtiring!'
);

// 13. Theme 5: Divs
updateThemeMission(
  'theme-5-divs',
  'Wrap the secret artifact inside a container box (div) and outline it with a solid 4px #2dd4bf border and 16px internal padding!',
  'Maxfiy xazinani umumiy ajratuvchi quti (div) ichiga o\\\'rang va uning atrofiga 4px qalinlikdagi #2dd4bf moviy hoshiya bilan 16px ichki oraliq bering!'
);

// 14. Theme 4: Pictures
updateThemeMission(
  'theme-4-pictures',
  'Assemble the Mars & Drones showcase: place the main rover inside an independent figure, attach a caption underneath, line up 2 drone cards, and shape crew avatars into rounded circles!',
  'Mars & Dronlar ko\\\'rgazmasini yarating: mustaqil rasm bloki ichiga bosh rover rasmi, rasm ostiga izoh sarlavhasi, 2 ta dron rasmlari va to\\\'liq yumaloq aylanaga aylantirilgan ekipaj avatarlarini joylashtiring!'
);

// 15. Normalize Anatomy objects across all lessons
function normalizeAnatomyForTheme(themeId) {
  const startIdx = content.indexOf(`id: '${themeId}'`);
  if (startIdx === -1) return;
  const nextThemeIdx = content.indexOf(`id: 'theme-`, startIdx + 10);
  const endIdx = nextThemeIdx !== -1 ? nextThemeIdx : content.length;
  let themeBlock = content.slice(startIdx, endIdx);

  const anatomyMatch = themeBlock.match(/anatomy:\s*\[([\s\S]*?)\]\s*,/);
  if (!anatomyMatch) return;

  const rawAnatomy = anatomyMatch[1];
  // Replace code: -> part: and purpose: -> explanation: & effect:
  let updatedAnatomy = rawAnatomy.replace(/(\s+)code:\s*(['"`][\s\S]*?['"`]\s*,)/g, '$1part: $2$1code: $2');
  updatedAnatomy = updatedAnatomy.replace(/(\s+)purpose:\s*(\{[\s\S]*?\}\s*,)/g, '$1explanation: $2$1effect: $2$1purpose: $2');

  themeBlock = themeBlock.replace(anatomyMatch[0], `anatomy: [${updatedAnatomy}],`);
  content = content.slice(0, startIdx) + themeBlock + content.slice(endIdx);
  console.log(`Normalized anatomy for ${themeId}`);
}

const allThemesWithAltAnatomy = [
  'theme-25-overflow',
  'theme-27-media-queries',
  'theme-28-web-fonts-icons',
  'theme-29-third-party-animations',
  'theme-30-bootstrap-grid',
  'theme-31-bootstrap-components',
  'theme-32-bootstrap-ui'
];

allThemesWithAltAnatomy.forEach(normalizeAnatomyForTheme);

fs.writeFileSync('html-css/src/modules/curriculum.js', content, 'utf8');
console.log('Saved curriculum.js with updated missions and normalized anatomy!');
