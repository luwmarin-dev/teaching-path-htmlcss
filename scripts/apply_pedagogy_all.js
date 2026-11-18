import fs from 'fs';

let content = fs.readFileSync('html-css/src/modules/curriculum.js', 'utf8');

// 1. Normalize anatomy objects that use code/name/purpose/role:
// In theme-25-overflow:
content = content.replace(
  `anatomy: [
      {
        code: 'overflow-y: auto;',
        name: { en: 'Vertical Scroll', uz: 'Vertikal Skroll' },
        purpose: { en: 'Scrolls vertically when logs exceed box height.', uz: "Xabarlar balandlikdan oshganda pastga skroll qiladi." },
        role: { en: 'Vertical elevator', uz: 'Vertikal lift' }
      },
      {
        code: 'overflow-x: auto;',
        name: { en: 'Horizontal Scroll', uz: 'Gorizontal Skroll' },
        purpose: { en: 'Scrolls horizontally for weapon cards.', uz: "Keng qurollar karuselini yonga skroll qiladi." },
        role: { en: 'Horizontal slider', uz: 'Gorizontal slayder' }
      },
      {
        code: 'overflow: hidden; text-overflow: ellipsis;',
        name: { en: 'Laser Crop with Ellipsis', uz: "Ko'p nuqta bilan lazerli qirqish" },
        purpose: { en: 'Cuts overflow cleanly and appends ...', uz: "Toshgan uzun matnni qirqib, oxiriga ... qo'yadi." },
        role: { en: 'Laser trimmer', uz: 'Lazer keskich' }
      }
    ],`,
  `anatomy: [
      {
        part: 'overflow-y: auto;',
        code: 'overflow-y: auto;',
        name: { en: 'Vertical Scroll', uz: 'Vertikal Skroll' },
        explanation: { en: 'Adds a vertical scrollbar only when telemetry logs exceed box height.', uz: "Xabarlar balandlikdan oshib ketganda vertikal skrollbar chiqaradi." },
        effect: { en: 'Scrolls vertically to keep logs clean', uz: 'Xabarlarni qutidan toshirmay skroll qiladi' },
        role: { en: 'Vertical elevator', uz: 'Vertikal lift' }
      },
      {
        part: 'overflow-x: auto;',
        code: 'overflow-x: auto;',
        name: { en: 'Horizontal Scroll', uz: 'Gorizontal Skroll' },
        explanation: { en: 'Allows scrolling horizontally when weapon cards line up wider than the container.', uz: "Keng qurol kartalari sig'may qolganda gorizontal skroll qilishga ruxsat beradi." },
        effect: { en: 'Horizontal slider for wide weapon deck', uz: 'Keng qurollar karuselini yonga skroll qiladi' },
        role: { en: 'Horizontal slider', uz: 'Gorizontal slayder' }
      },
      {
        part: 'overflow: hidden; text-overflow: ellipsis;',
        code: 'overflow: hidden; text-overflow: ellipsis;',
        name: { en: 'Laser Crop with Ellipsis', uz: "Ko'p nuqta bilan lazerli qirqish" },
        explanation: { en: 'Cuts overflowing text cleanly and appends ... to secret badge.', uz: "Toshgan uzun matnni lazerdek toza qirqib, oxiriga uch nuqta (...) qo'yadi." },
        effect: { en: 'Clean single-line badge with ellipsis', uz: "Bir qatorli toza agent nishoni va ..." },
        role: { en: 'Laser trimmer', uz: 'Lazer keskich' }
      }
    ],`
);

// 2. Update Theme 25 Mission
content = content.replace(
  `mission: {
        en: 'Configure all 3 overflow modes: add overflow-y: auto to .terminal-box, overflow-x: auto to .weapons-deck, and text-overflow: ellipsis with overflow: hidden to .id-badge!',
        uz: 'Barcha 3 xil overflow turini sozlang: .terminal-box ga overflow-y: auto, .weapons-deck ga overflow-x: auto va .id-badge ga text-overflow: ellipsis hamda overflow: hidden bering!'
      }`,
  `mission: {
        en: 'Control content overflow across the Cyber Lab! 1) Enable vertical scrolling in .terminal-box when logs exceed its height. 2) Enable horizontal scrolling in .weapons-deck when weapons line up wider than the deck. 3) In .id-badge, cleanly clip overflowing text and truncate it with an ellipsis (...)!',
        uz: 'Kiber Laboratoriya panellarida ma\\'lumotlar toshib ketishini boshqaring! 1) .terminal-box ichida server xabarlari balandlikdan oshib ketganda ularni vertikal aylantirish (skroll) imkonini bering. 2) .weapons-deck ichidagi qurol kartalari gorizontal qatorga sig\\'may toshganda yonga surish (skroll) imkonini bering. 3) .id-badge nishonidagi agent kodi qutidan toshib ketmasligi uchun ortiqcha qismini lazerdek toza qirqib yashiring va oxirida uch nuqta (...) bilan qisqartirib ko\\'rsating!'
      }`
);

// 3. Update Theme 13 (Colors) Mission
content = content.replace(
  `mission: {
        en: 'Style the .color-badge: make text color #38bdf8, background rgba(56, 189, 248, 0.12), and add border: 2px solid #38bdf8!',
        uz: '.color-badge ni bezang: color ni #38bdf8 qiling, background ni rgba(56, 189, 248, 0.12) qiling va border ni 2px solid #38bdf8 bering!'
      }`,
  `mission: {
        en: 'Style the .color-badge agent insignia: set its text to bright cyan (#38bdf8), its backdrop to a translucent 12% cyber tint (rgba(56, 189, 248, 0.12)), and encircle it with a solid 2px cyan border (#38bdf8)!',
        uz: '.color-badge agent nishonini kiber uslubda bezang: yozuvini och ko\\'k (#38bdf8) rangda, orqa fonini 12% shaffof kiber moviy tusda (rgba(56, 189, 248, 0.12)) va atrofiga 2 piksel qalinlikdagi to\\'liq moviy (#38bdf8) hoshiya bilan o\\'rang!'
      }`
);

// 4. Update Theme 14 (Fonts) Mission
content = content.replace(
  `mission: {
        en: 'Add text-shadow: 0 0 15px #2dd4bf; to .arcade-title to make it glow like a neon arcade!',
        uz: '.arcade-title ga text-shadow: 0 0 15px #2dd4bf; qo\\'shib uni neon rangida porlating!'
      }`,
  `mission: {
        en: 'Give .arcade-title an eye-catching arcade glow: add a glowing emerald neon text shadow of 15px in #2dd4bf and set the font size to 36px!',
        uz: '.arcade-title o\\'yin sarlavhasiga retro arkada uslubidagi 15 piksel yoyilgan #2dd4bf zumrad neon yorug\\'lik soyasini va 36 piksel kattalikdagi ko\\'zni qamashtiruvchi shrift hajmini bering!'
      }`
);

// 5. Update Theme 15 (Shapes) Mission
content = content.replace(
  `mission: {
        en: 'Add an avatar <div class="avatar">🦊</div> to the profile card and make it a circle with border-radius: 50%;!',
        uz: 'Profil kartochkasiga <div class="avatar">🦊</div> avatarsini qo\\'ying va border-radius: 50%; bilan uni aylanaga aylantiring!'
      }`,
  `mission: {
        en: 'Place the avatar <div class="avatar">🦊</div> inside the profile card and smooth its square corners completely into a perfect circle!',
        uz: 'Profil kartochkasiga <div class="avatar">🦊</div> avatarsini joylashtiring va uning to\\'rtburchak qirralarini to\\'liq yumaloqlab, mukammal aylanaga aylantiring!'
      }`
);

// 6. Update Theme 16 (Animations) Mission
content = content.replace(
  `mission: {
        en: 'Bring the alien to life by adding animation: bounce 1s infinite alternate; to .alien!',
        uz: '.alien ga animation: bounce 1s infinite alternate; qo\\'shib uni jonlantiring!'
      }`,
  `mission: {
        en: 'Animate the alien character using the bounce sequence: make it leap continuously over 1 second, alternating directions seamlessly!',
        uz: '.alien personajiga \\'bounce\\' sakrash harakatini ulang: 1 soniya davomida to\\'xtovsiz, har gal yo\\'nalishini almashtirib mayin sakrab tursin!'
      }`
);

// 7. Update Theme 23 (Transitions) Mission
content = content.replace(
  `mission: {
        en: 'Add transition: all 0.3s ease; to .magic-card so it glides smoothly on hover!',
        uz: '.magic-card ga transition: all 0.3s ease; qo\\'shing, shunda u hover bo\\'lganda mayin suzadi!'
      }`,
  `mission: {
        en: 'Make hover changes on .magic-card transition smoothly over 0.3 seconds instead of snapping abruptly!',
        uz: '.magic-card kartochkasi ustiga sichqoncha kelganda (hover) harakatlar birdan sakrab emas, balki 0.3 soniya davomida mayin (smooth) o\\'tish bilan amalga oshsin!'
      }`
);

// 8. Update Theme 24 (Filters) Mission
content = content.replace(
  `mission: {
        en: 'Add filter: drop-shadow(0 0 20px #2dd4bf); to .crystal so the gem radiates neon energy!',
        uz: '.crystal ga filter: drop-shadow(0 0 20px #2dd4bf); qo\\'shing, shunda olmos neon nur taratadi!'
      }`,
  `mission: {
        en: 'Cast a silhouette-conforming 20px glowing emerald (#2dd4bf) drop shadow filter from .crystal!',
        uz: '.crystal qimmatbaho olmosiga uning siluetini takrorlovchi 20 piksel yoyilgan #2dd4bf zumrad yog\\'duli soya filtrini bering!'
      }`
);

// 9. Update Theme 26 (Gradients) Mission
content = content.replace(
  `mission: {
        en: 'Apply all 5 gradient angles and styles: 45deg linear, 90deg linear, 135deg multicolor, 3D radial sphere, 360deg conic radar, and clip gradient to text with -webkit-background-clip: text!',
        uz: 'Barcha 5 xil gradient burchaklari va turlarini qo\\'llang: 45° linear, 90° linear, 135° ko\\'p rangli linear, 3D radial shar, 360° conic radar va -webkit-background-clip: text bilan harflarga gradient bering!'
      }`,
  `mission: {
        en: 'Deploy all 5 gradient styles across the Cyber Lab: 45° diagonal blend (#ff007a to #7928ca), 90° horizontal blend (#00f2fe to #4facfe), 135° multicolor spectrum, centered 3D radial sphere, 360° circular radar sweep, and fill headline letters directly with the gradient!',
        uz: 'Kiber laboratoriyada barcha 5 xil ranglar jilosini qo\\'llang: 45° qiya chiziqli gradient (#ff007a dan #7928ca gacha), 90° gorizontal gradient (#00f2fe dan #4facfe gacha), 135° ko\\'p rangli gradient, markazdan tarqaluvchi 3D shar, 360° aylanma radar va sarlavha harflarining o\\'zini rangli gradient bilan to\\'ldiring!'
      }`
);

// 10. Update Theme 27 (Media Queries) Mission
content = content.replace(
  `mission: {
        en: 'Add a responsive @media (max-width: 768px) rule that sets flex-direction: column on .squad-dock!',
        uz: '@media (max-width: 768px) qo\\'shing va .squad-dock ga flex-direction: column bering!'
      }`,
  `mission: {
        en: 'Write a responsive rule for compact screens (768px or narrower) that reorganizes the spaceship horizontal deck into a vertical column!',
        uz: 'Kichik ekranli qurilmalarda (ekran kengligi 768 piksel yoki undan kichik bo\\'lganda) kosmik kemadagi gorizontal qatorni vertikal ustun holatiga moslashtiruvchi ekran qoidasini yozing!'
      }`
);

// 11. Update Theme 28 (Web Fonts & Icons) Mission
content = content.replace(
  `mission: {
        en: 'Add font-family: "Orbitron", monospace, sans-serif; and letter-spacing: 3px; to .guild-title!',
        uz: '.guild-title ga font-family: \\'Orbitron\\', monospace, sans-serif; va letter-spacing: 3px; qo\\'shing!'
      }`,
  `mission: {
        en: 'Apply the futuristic \\'Orbitron\\' typography to .guild-title and add 3px of clean spacing between letters!',
        uz: '.guild-title sarlavhasiga futuristik \\'Orbitron\\' shriftini o\\'rnating va o\\'qilishini osonlashtirish uchun harflar orasida 3 piksel kenglikdagi toza oraliq qoldiring!'
      }`
);

// 12. Update Theme 7 (Box Model) Mission
content = content.replace(
  `mission: {
        en: 'Set padding to "24px" and margin to "30px" on .box!',
        uz: '.box klassida padding ni "24px" va margin ni "30px" qilib belgilang!'
      }`,
  `mission: {
        en: 'Pad the interior of .box with 24px so text does not touch the walls, and leave 30px of exterior margin so it separates cleanly from other cards!',
        uz: '.box qutisining ichki qismidan matn devorga yopishib qolmasligi uchun 24 piksel ichki oraliq qoldiring va qutining tashqi tomonidan boshqa elementlar bilan to\\'qnashmasligi uchun 30 piksel tashqi masofa bering!'
      }`
);

// 13. Update Theme 10 (Buttons) Mission
content = content.replace(
  `mission: {
        en: 'Add a <button class="magic-btn">✨ Turbo Boost</button> to the card, and style .magic-btn:hover with background: #2dd4bf; and transform: scale(1.1); in CSS!',
        uz: 'Kartochkaga <button class="magic-btn">✨ Turbo Boost</button> tugmasini qo\\'ying va CSS da .magic-btn:hover uchun background: #2dd4bf; hamda transform: scale(1.1); yozing!'
      }`,
  `mission: {
        en: 'Insert the ✨ Turbo Boost button inside the card, and on hover, illuminate its background in #2dd4bf while scaling it up to 1.1x size!',
        uz: 'Kartochkaga ✨ Turbo Boost tugmasini joylashtiring va CSS da tugma ustiga sichqoncha kelganda (hover) orqa fonini #2dd4bf zumrad rangiga o\\'zgartirib, hajmini 1.1 barobar kattalashtiring!'
      }`
);

// 14. Update Theme 5 (Divs) Mission
content = content.replace(
  `mission: {
        en: 'Wrap the secret treasure in a <div> box and add style="border: 4px solid #2dd4bf; padding: 16px;"!',
        uz: 'Maxfiy xazinani <div> qutisiga o\\'rang va unga style="border: 4px solid #2dd4bf; padding: 16px;" bezagini bering!'
      }`,
  `mission: {
        en: 'Wrap the secret artifact inside a container box (div) and outline it with a solid 4px #2dd4bf border and 16px internal padding!',
        uz: 'Maxfiy xazinani umumiy ajratuvchi quti (div) ichiga o\\'rang va uning atrofiga 4px qalinlikdagi #2dd4bf moviy hoshiya bilan 16px ichki oraliq bering!'
      }`
);

fs.writeFileSync('html-css/src/modules/curriculum.js', content, 'utf8');
console.log('Successfully updated curriculum.js missions and anatomy!');
