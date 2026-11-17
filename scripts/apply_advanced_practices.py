import re

with open('html-css/src/modules/curriculum.js', 'r', encoding='utf-8') as f:
    code = f.read()

# -----------------------------------------------------------------------------
# THEME 22: POSITIONS - Comprehensive 6-Rule Challenge
# -----------------------------------------------------------------------------

old_theme22_start = code.find("id: 'theme-22-position',")
old_theme23_start = code.find("id: 'theme-23-transitions',")
assert old_theme22_start != -1 and old_theme23_start != -1

theme22_replacement = """id: 'theme-22-position',
    module: 'full-powers',
    title: {
      en: 'Theme 22: CSS Positioning (Mission Defense SPA & All 5 Positions)',
      uz: '22-Mavzu: CSS Joylashuvi (Mudofaa SPA & Barcha 5 Xil Position Turlari)'
    },
    icon: '📍',
    tag: 'static, relative, absolute, fixed, sticky',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, **CSS Position** is the GPS coordinate system of web design! Real Single Page Applications coordinate **all 5 positions** together:\\n\\n• **static**: The natural default flow. Elements stack normally; top, left, and z-index are ignored.\\n• **relative**: Remains in normal flow, but unlocks top/left offsets and acts as the **GPS fence (anchor)** for child elements.\\n• **absolute**: Lifted completely out of document flow. Flies to exact top/right coordinates inside its nearest relative parent!\\n• **fixed**: Ripped from the page and glued directly to the **screen viewport**. Stays frozen in place even when you scroll!\\n• **sticky**: A magical hybrid! Behaves like relative until you scroll past it, then locks to the screen edge like fixed!',
        uz: 'Oddiy inson tilida, **CSS Position** — bu vebning GPS koordinata tizimidir! Haqiqiy SPA ilovalar **barcha 5 ta joylashuv turini** birgalikda ishlatadi:\\n\\n• **static**: Standart oqim. Elementlar odatdagidek joylashadi; top, left va z-index ishlamaydi.\\n• **relative**: O\\'z o\\'rnida qoladi, lekin siljishlarni yoqadi va ichki bolalar uchun **GPS boshlang\\'ich nuqtasi (devor)** bo\\'ladi.\\n• **absolute**: Oqimdan butunlay chiqadi. Eng yaqin relative ota element burchaklariga aniq top/right bilan mixlanadi!\\n• **fixed**: Sahifadan ajralib, to\\'g\\'ridan-to\\'g\\'ri **ekran oynasiga** mixlanadi. Sahifani pastga aylantirsangiz ham joyidan qimirlamaydi!\\n• **sticky**: Ajoyib gibrid! Odatda o\\'z o\\'rnida turadi, lekin sahifa surilganda ekran chetiga fixed kabi yopishib qoladi!'
      },
      whatIsATag: {
        en: `1. \\`position: sticky;\\` = Scrolls naturally, then locks to top edge.\\n2. \\`position: relative;\\` = Parent GPS anchor frame (use multiple times!).\\n3. \\`position: absolute;\\` = Precision corner pins (top/right, bottom/right).\\n4. \\`position: fixed;\\` = Viewport screen-locked floating drone beacon.\\n5. \\`position: static;\\` = Browser standard document reading flow.`,
        uz: `1. \\`position: sticky;\\` = Tabiiy suriladi va tepa chetga yopishib qoladi.\\n2. \\`position: relative;\\` = Ota GPS chegara ramkasi (bir necha marta ishlatiladi!).\\n3. \\`position: absolute;\\` = Burchakka aniq mixlanuvchi koordinata (top/right, bottom/right).\\n4. \\`position: fixed;\\` = Ekran oynasiga mixlangan erkin uchuvchi dron.\\n5. \\`position: static;\\` = Brauzerning standart matn oqimi.`
      }
    },
    summary: {
      en: 'Master all 5 CSS positions by actively coding sticky headers, multiple relative anchor cards, precision absolute corner badges, and a fixed drone beacon.',
      uz: 'Yopishqoq sarlavha, 2 ta nisbiy chegara kartasi, 2 ta burchakka mixlangan nishon va ekranga qadalgan dronni o\\'z qo\\'lingiz bilan yozib barcha 5 ta position turini o\\'rganing.'
    },
    story: {
      en: 'The Mission Control Defense SPA is incomplete! You must actively configure sticky navigation, relative parent anchors on both cards, absolute corner pins for alerts and radar, and a fixed emergency drone beacon!',
      uz: 'Mudofaa SPA sahifasi to\\'liq emas! Yopishqoq navigatsiyani, har ikkala karta uchun relative GPS devorlarini, signal va radar uchun absolute burchak nishonlarini hamda ekranga mixlangan dronni o\\'zingiz kod yozib ishga tushiring!'
    },
    initialCode: {
      en: `<style>
  * { box-sizing: border-box; }
  .spa-command {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 20px;
    color: white;
    font-family: system-ui, sans-serif;
    min-height: 420px;
    position: relative;
  }

  /* Step 1: Make navbar stick to top edge during scroll: position: sticky; top: 0; */
  .sticky-navbar {
    z-index: 50;
    background: rgba(17, 24, 39, 0.95);
    border: 1px solid #1f2937;
    border-radius: 10px;
    padding: 12px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    backdrop-filter: blur(8px);
  }

  .spa-dashboard-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 20px;
  }

  /* Step 2: Make .shield-card the 1st GPS anchor fence using position: relative; */
  .shield-card {
    background: #1e1b4b;
    border: 2px solid #6366f1;
    border-radius: 12px;
    padding: 24px;
    text-align: center;
  }

  /* Step 3: Pin .alarm-badge to top-right corner: position: absolute; top: -10px; right: -10px; */
  .alarm-badge {
    background: #ef4444;
    color: white;
    font-weight: 800;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 11px;
    box-shadow: 0 0 12px rgba(239, 68, 68, 0.8);
  }

  /* Step 4: Make .radar-panel the 2nd GPS anchor fence using position: relative; */
  .radar-panel {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 24px;
  }

  /* Step 5: Pin .radar-blip to bottom-right corner: position: absolute; bottom: 10px; right: 10px; */
  .radar-blip {
    background: #10b981;
    color: #0b0f19;
    font-weight: 800;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 10px;
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.6);
  }

  /* Step 6: Glue .fixed-drone to viewport screen: position: fixed; bottom: 20px; right: 20px; */
  .fixed-drone {
    z-index: 100;
    background: #38bdf8;
    color: #0b0f19;
    font-weight: 800;
    font-size: 12px;
    padding: 10px 18px;
    border-radius: 999px;
    box-shadow: 0 4px 16px rgba(56, 189, 248, 0.5);
  }
</style>

<div class="spa-command">
  <!-- Sticky Navigation Header -->
  <nav class="sticky-navbar">
    <div style="font-weight: 800; color: #38bdf8;">🛰️ CyberCommand Defense SPA</div>
    <div style="font-size: 12px; color: #10b981;">● ALL SYSTEMS OPERATIONAL</div>
  </nav>

  <div class="spa-dashboard-grid">
    <div class="shield-card">
      <!-- Put 1st absolute badge here: <span class="alarm-badge">🔥 ALERT</span> -->

      <h3 style="margin: 0 0 6px 0; color: #a5b4fc;">Plasma Shield Matrix</h3>
      <p style="margin: 0; font-size: 13px; color: #cbd5e1;">Deflector barrier active at 98.4% capacity.</p>
    </div>

    <div class="radar-panel">
      <!-- Put 2nd absolute badge here: <span class="radar-blip">🟢 ACTIVE SCAN</span> -->

      <h3 style="margin: 0 0 6px 0; color: #38bdf8;">Tactical Sensor Log</h3>
      <p style="margin: 0; font-size: 13px; color: #94a3b8;">Scanning sector 7G. Zero hostile anomalies detected.</p>
    </div>
  </div>

  <!-- Screen-fixed Drone Beacon -->
  <div class="fixed-drone">🛸 DRONE SUPPORT</div>
</div>`,
      uz: `<style>
  * { box-sizing: border-box; }
  .spa-command {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 20px;
    color: white;
    font-family: system-ui, sans-serif;
    min-height: 420px;
    position: relative;
  }

  /* 1-Qadam: .sticky-navbar ni tepaga yopishqoq qilish uchun position: sticky; top: 0; yozing */
  .sticky-navbar {
    z-index: 50;
    background: rgba(17, 24, 39, 0.95);
    border: 1px solid #1f2937;
    border-radius: 10px;
    padding: 12px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    backdrop-filter: blur(8px);
  }

  .spa-dashboard-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 20px;
  }

  /* 2-Qadam: .shield-card ni 1-GPS chegara devori qilish uchun position: relative; bering */
  .shield-card {
    background: #1e1b4b;
    border: 2px solid #6366f1;
    border-radius: 12px;
    padding: 24px;
    text-align: center;
  }

  /* 3-Qadam: .alarm-badge ni burchakka mixlash uchun position: absolute; top: -10px; right: -10px; yozing */
  .alarm-badge {
    background: #ef4444;
    color: white;
    font-weight: 800;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 11px;
    box-shadow: 0 0 12px rgba(239, 68, 68, 0.8);
  }

  /* 4-Qadam: .radar-panel ga ham 2-GPS chegara devori: position: relative; bering */
  .radar-panel {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 24px;
  }

  /* 5-Qadam: .radar-blip ni pastki o'ng burchakka mixlash: position: absolute; bottom: 10px; right: 10px; */
  .radar-blip {
    background: #10b981;
    color: #0b0f19;
    font-weight: 800;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 10px;
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.6);
  }

  /* 6-Qadam: .fixed-drone ni ekran oynasiga mixlash uchun position: fixed; bottom: 20px; right: 20px; yozing */
  .fixed-drone {
    z-index: 100;
    background: #38bdf8;
    color: #0b0f19;
    font-weight: 800;
    font-size: 12px;
    padding: 10px 18px;
    border-radius: 999px;
    box-shadow: 0 4px 16px rgba(56, 189, 248, 0.5);
  }
</style>

<div class="spa-command">
  <!-- Sticky Navigation Header -->
  <nav class="sticky-navbar">
    <div style="font-weight: 800; color: #38bdf8;">🛰️ CyberCommand Defense SPA</div>
    <div style="font-size: 12px; color: #10b981;">● ALL SYSTEMS OPERATIONAL</div>
  </nav>

  <div class="spa-dashboard-grid">
    <div class="shield-card">
      <!-- 1-Nishonni shu yerga qo'ying: <span class="alarm-badge">🔥 ALERT</span> -->

      <h3 style="margin: 0 0 6px 0; color: #a5b4fc;">Plasma Shield Matrix</h3>
      <p style="margin: 0; font-size: 13px; color: #cbd5e1;">Deflector barrier active at 98.4% capacity.</p>
    </div>

    <div class="radar-panel">
      <!-- 2-Nishonni shu yerga qo'ying: <span class="radar-blip">🟢 ACTIVE SCAN</span> -->

      <h3 style="margin: 0 0 6px 0; color: #38bdf8;">Tactical Sensor Log</h3>
      <p style="margin: 0; font-size: 13px; color: #94a3b8;">Scanning sector 7G. Zero hostile anomalies detected.</p>
    </div>
  </div>

  <!-- Screen-fixed Drone Beacon -->
  <div class="fixed-drone">🛸 DRONE SUPPORT</div>
</div>`
    },
    targetCode: {
      en: `<style>
  * { box-sizing: border-box; }
  .spa-command {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 20px;
    color: white;
    font-family: system-ui, sans-serif;
    min-height: 420px;
    position: relative;
  }
  .sticky-navbar {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(17, 24, 39, 0.95);
    border: 1px solid #1f2937;
    border-radius: 10px;
    padding: 12px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    backdrop-filter: blur(8px);
  }
  .spa-dashboard-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 20px;
  }
  .shield-card {
    position: relative;
    background: #1e1b4b;
    border: 2px solid #6366f1;
    border-radius: 12px;
    padding: 24px;
    text-align: center;
  }
  .alarm-badge {
    position: absolute;
    top: -10px;
    right: -10px;
    background: #ef4444;
    color: white;
    font-weight: 800;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 11px;
    box-shadow: 0 0 12px rgba(239, 68, 68, 0.8);
  }
  .radar-panel {
    position: relative;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 24px;
  }
  .radar-blip {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: #10b981;
    color: #0b0f19;
    font-weight: 800;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 10px;
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.6);
  }
  .fixed-drone {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;
    background: #38bdf8;
    color: #0b0f19;
    font-weight: 800;
    font-size: 12px;
    padding: 10px 18px;
    border-radius: 999px;
    box-shadow: 0 4px 16px rgba(56, 189, 248, 0.5);
  }
</style>

<div class="spa-command">
  <nav class="sticky-navbar">
    <div style="font-weight: 800; color: #38bdf8;">🛰️ CyberCommand Defense SPA</div>
    <div style="font-size: 12px; color: #10b981;">● ALL SYSTEMS OPERATIONAL</div>
  </nav>

  <div class="spa-dashboard-grid">
    <div class="shield-card">
      <span class="alarm-badge">🔥 ALERT</span>
      <h3 style="margin: 0 0 6px 0; color: #a5b4fc;">Plasma Shield Matrix</h3>
      <p style="margin: 0; font-size: 13px; color: #cbd5e1;">Deflector barrier active at 98.4% capacity.</p>
    </div>

    <div class="radar-panel">
      <span class="radar-blip">🟢 ACTIVE SCAN</span>
      <h3 style="margin: 0 0 6px 0; color: #38bdf8;">Tactical Sensor Log</h3>
      <p style="margin: 0; font-size: 13px; color: #94a3b8;">Scanning sector 7G. Zero hostile anomalies detected.</p>
    </div>
  </div>

  <div class="fixed-drone">🛸 DRONE SUPPORT</div>
</div>`,
      uz: `<style>
  * { box-sizing: border-box; }
  .spa-command {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 20px;
    color: white;
    font-family: system-ui, sans-serif;
    min-height: 420px;
    position: relative;
  }
  .sticky-navbar {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(17, 24, 39, 0.95);
    border: 1px solid #1f2937;
    border-radius: 10px;
    padding: 12px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    backdrop-filter: blur(8px);
  }
  .spa-dashboard-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 20px;
  }
  .shield-card {
    position: relative;
    background: #1e1b4b;
    border: 2px solid #6366f1;
    border-radius: 12px;
    padding: 24px;
    text-align: center;
  }
  .alarm-badge {
    position: absolute;
    top: -10px;
    right: -10px;
    background: #ef4444;
    color: white;
    font-weight: 800;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 11px;
    box-shadow: 0 0 12px rgba(239, 68, 68, 0.8);
  }
  .radar-panel {
    position: relative;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 24px;
  }
  .radar-blip {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: #10b981;
    color: #0b0f19;
    font-weight: 800;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 10px;
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.6);
  }
  .fixed-drone {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;
    background: #38bdf8;
    color: #0b0f19;
    font-weight: 800;
    font-size: 12px;
    padding: 10px 18px;
    border-radius: 999px;
    box-shadow: 0 4px 16px rgba(56, 189, 248, 0.5);
  }
</style>

<div class="spa-command">
  <nav class="sticky-navbar">
    <div style="font-weight: 800; color: #38bdf8;">🛰️ CyberCommand Defense SPA</div>
    <div style="font-size: 12px; color: #10b981;">● ALL SYSTEMS OPERATIONAL</div>
  </nav>

  <div class="spa-dashboard-grid">
    <div class="shield-card">
      <span class="alarm-badge">🔥 ALERT</span>
      <h3 style="margin: 0 0 6px 0; color: #a5b4fc;">Plasma Shield Matrix</h3>
      <p style="margin: 0; font-size: 13px; color: #cbd5e1;">Deflector barrier active at 98.4% capacity.</p>
    </div>

    <div class="radar-panel">
      <span class="radar-blip">🟢 ACTIVE SCAN</span>
      <h3 style="margin: 0 0 6px 0; color: #38bdf8;">Tactical Sensor Log</h3>
      <p style="margin: 0; font-size: 13px; color: #94a3b8;">Scanning sector 7G. Zero hostile anomalies detected.</p>
    </div>
  </div>

  <div class="fixed-drone">🛸 DRONE SUPPORT</div>
</div>`
    },
    targetDescription: {
      en: 'A high-tech Defense SPA actively utilizing all 5 CSS positions: sticky navbar, 2 relative parent anchor cards, 2 absolute corner badges, and a screen-fixed floating drone beacon.',
      uz: 'Barcha 5 ta CSS position turlarini faol qo\\'llovchi yuqori texnologiyali Mudofaa SPA sahifasi: yopishqoq sarlavha, 2 ta nisbiy ota karta, 2 ta burchakka mixlangan nishon va ekranga qadalgan dron.'
    },
    anatomy: [
      {
        part: 'position: sticky; top: 0;',
        role: { en: 'Sticky Horizon', uz: 'Yopishqoq Ufq' },
        explanation: { en: 'Scrolls naturally with content, then locks securely to the top edge.', uz: 'Sahifa bilan birga suriladi, chegara kelganda tepa chetga yopishib qoladi.' },
        effect: { en: 'Sticky navigation header', uz: 'Tepada qotib turuvchi panel' }
      },
      {
        part: 'position: relative;',
        role: { en: 'Parent GPS Anchor', uz: 'Ota GPS Devori' },
        explanation: { en: 'Establishes a coordinate boundary frame for absolute children. Used on both cards!', uz: 'Ichki absolute bolalar uchun GPS boshlang\\'ich koordinata ramkasini o\\'rnatadi.' },
        effect: { en: 'Boundary fence for pins', uz: 'Ichki nishonlar uchun chegara' }
      },
      {
        part: 'position: absolute;',
        role: { en: 'Precision Pin', uz: 'Aniq Burchak Mixi' },
        explanation: { en: 'Flies to exact top/right or bottom/right corner coordinates of its relative parent.', uz: 'Ota elementning top/right yoki bottom/right burchaklariga aniq mixlanadi.' },
        effect: { en: 'Pins badge over corner', uz: 'Nishonni burchakka mixlaydi' }
      },
      {
        part: 'position: fixed;',
        role: { en: 'Screen Viewport Lock', uz: 'Ekran Oynasiga Mixlash' },
        explanation: { en: 'Glues the element directly to the device screen window. Never moves during scroll.', uz: 'Elementni to\\'g\\'ridan-to\\'g\\'ri ekran oynasiga mixlaydi. Sahifa surilganda ham joyidan qimirlamaydi.' },
        effect: { en: 'Floating screen drone', uz: 'Ekran oynasida qotib turuvchi dron' }
      },
      {
        part: 'position: static;',
        role: { en: 'Default Flow', uz: 'Standart Oqim' },
        explanation: { en: 'Standard document reading order. Top, left, and z-index are ignored.', uz: 'Standart brauzer oqimi. Elementlar odatdagidek ketma-ket joylashadi.' },
        effect: { en: 'Natural document flow', uz: 'Odatiy matn kabi oqim' }
      }
    ],
    listOfTags: [
      { code: 'position: sticky; top: 0;', name: { en: 'Sticky Header', uz: 'Yopishqoq Panel' }, description: { en: 'Locks element to viewport top during scroll', uz: 'Sahifa surilganda tepa chetga yopishib qoladi' } },
      { code: 'position: relative;', name: { en: 'Relative Anchor', uz: 'Nisbiy Chegara' }, description: { en: 'Normal flow, creates anchor frame for absolute children', uz: 'O\\'z o\\'rnida turadi va absolute bolalari uchun GPS chegara bo\\'ladi' } },
      { code: 'position: absolute;', name: { en: 'Absolute Pin', uz: 'Mutlaq Mix' }, description: { en: 'Pins to exact corner coordinates of nearest relative parent', uz: 'Eng yaqin relative ota blokning burchaklariga mixlanadi' } },
      { code: 'position: fixed;', name: { en: 'Fixed Viewport', uz: 'Ekranga Qadalgan' }, description: { en: 'Locks element to screen window regardless of scrolling', uz: 'Sahifa surilishidan qat\\'i nazar ekran oynasiga mixlanadi' } },
      { code: 'position: static;', name: { en: 'Static Default', uz: 'Statik Oqim' }, description: { en: 'Default browser document flow; ignores top/left offsets', uz: 'Brauzerning odatiy oqimi; top va left buyruqlari ishlamaydi' } }
    ],
    tagShowcase: [
      { tag: 'position: sticky;', meaning: { en: 'Scroll then lock', uz: 'Suriladi va yopishadi' } },
      { tag: 'position: relative;', meaning: { en: 'Parent anchor fence', uz: 'Ota chegara devori' } },
      { tag: 'position: absolute;', meaning: { en: 'Corner coordinate pin', uz: 'Aniq burchak mixi' } },
      { tag: 'position: fixed;', meaning: { en: 'Glued to screen window', uz: 'Ekranga mixlangan' } }
    ],
    quickTags: ['position: sticky;', 'top: 0;', 'position: relative;', 'position: absolute;', 'top: -10px;', 'right: -10px;', 'bottom: 10px;', 'position: fixed;', 'bottom: 20px;', 'right: 20px;'],
    challenge: {
      mission: {
        en: 'Deploy all 5 positions in the Defense SPA! 1) Add position: sticky; top: 0; to .sticky-navbar. 2) Add position: relative; to .shield-card and .radar-panel. 3) Add position: absolute; top: -10px; right: -10px; to .alarm-badge. 4) Add position: absolute; bottom: 10px; right: 10px; to .radar-blip. 5) Add position: fixed; bottom: 20px; right: 20px; to .fixed-drone!',
        uz: 'Mudofaa SPA sahifasida barcha 5 ta positionni amalda qo\\'llang! 1) .sticky-navbar ga position: sticky; top: 0; yozing. 2) .shield-card va .radar-panel ga position: relative; bering. 3) .alarm-badge ga position: absolute; top: -10px; right: -10px; yozing. 4) .radar-blip ga position: absolute; bottom: 10px; right: 10px; bering. 5) .fixed-drone ga position: fixed; bottom: 20px; right: 20px; yozing!'
      },
      hint: {
        en: 'Give .sticky-navbar position: sticky; top: 0; Give both .shield-card and .radar-panel position: relative; Give .alarm-badge position: absolute; top: -10px; right: -10px; Give .radar-blip position: absolute; bottom: 10px; right: 10px; Give .fixed-drone position: fixed; bottom: 20px; right: 20px;',
        uz: '.sticky-navbar ga position: sticky; top: 0;, .shield-card va .radar-panel ga position: relative;, .alarm-badge ga position: absolute; top: -10px; right: -10px;, .radar-blip ga position: absolute; bottom: 10px; right: 10px; va .fixed-drone ga position: fixed; bottom: 20px; right: 20px; yozing.'
      },
      rules: [
        {
          type: 'custom',
          check: (code) => /\.sticky-navbar\s*\{[^}]*position\s*:\s*sticky/i.test(code) && /\.sticky-navbar\s*\{[^}]*top\s*:\s*0/i.test(code),
          message: 'Add position: sticky; top: 0; to .sticky-navbar!'
        },
        {
          type: 'custom',
          check: (code) => /\.shield-card\s*\{[^}]*position\s*:\s*relative/i.test(code),
          message: 'Add position: relative; to .shield-card as the 1st GPS anchor boundary!'
        },
        {
          type: 'custom',
          check: (code) => /\.alarm-badge\s*\{[^}]*position\s*:\s*absolute/i.test(code) && /\.alarm-badge\s*\{[^}]*top\s*:\s*-10px/i.test(code),
          message: 'Add position: absolute; top: -10px; right: -10px; to .alarm-badge!'
        },
        {
          type: 'custom',
          check: (code) => /\.radar-panel\s*\{[^}]*position\s*:\s*relative/i.test(code),
          message: 'Add position: relative; to .radar-panel as the 2nd GPS anchor boundary!'
        },
        {
          type: 'custom',
          check: (code) => /\.radar-blip\s*\{[^}]*position\s*:\s*absolute/i.test(code) && /\.radar-blip\s*\{[^}]*bottom\s*:\s*10px/i.test(code),
          message: 'Add position: absolute; bottom: 10px; right: 10px; to .radar-blip!'
        },
        {
          type: 'custom',
          check: (code) => /\.fixed-drone\s*\{[^}]*position\s*:\s*fixed/i.test(code) && /\.fixed-drone\s*\{[^}]*bottom\s*:\s*20px/i.test(code),
          message: 'Add position: fixed; bottom: 20px; right: 20px; to .fixed-drone!'
        },
        {
          type: 'custom',
          check: (code) => /<span[^>]*class="[^"]*alarm-badge[^"]*"[^>]*>/i.test(code),
          message: 'Place the <span class="alarm-badge">🔥 ALERT</span> inside .shield-card!'
        },
        {
          type: 'custom',
          check: (code) => /<span[^>]*class="[^"]*radar-blip[^"]*"[^>]*>/i.test(code),
          message: 'Place the <span class="radar-blip">🟢 ACTIVE SCAN</span> inside .radar-panel!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'A military space station: .sticky-navbar is the radar screen locking to your eye line; .shield-card and .radar-panel are relative command pods; .alarm-badge and .radar-blip are absolute status lights pinned to their pods; and .fixed-drone is the support ship hovering outside your window!',
        uz: 'Harbiy koinot stansiyasi: .sticky-navbar ko\\'z o\\'ngingizda turuvchi yopishqoq panel; .shield-card va .radar-panel nisbiy komandir kabinalari; .alarm-badge va .radar-blip burchakka qadalgan absolute chiroqlar; .fixed-drone esa illyuminator ortida qadalgan yordamchi dron!'
      },
      discussionQuestions: [
        'Why does a child with position: absolute need its parent to have position: relative?',
        'How does position: sticky allow modern apps to keep navigation visible while scrolling?',
        'What is the difference between position: fixed (screen window) and position: absolute (parent container)?'
      ],
      commonMistakes: [
        'Forgetting position: relative on the parent container, causing absolute pins to jump to the page corner',
        'Confusing position: fixed with absolute',
        'Forgetting top: 0 on sticky elements'
      ],
      funActivity: 'Try scrolling inside the defense preview to see the sticky topbar stay locked at the top!'
    }
  },
  
  // ==========================================
  // THEME 23: Transitions & Animations
  // ==========================================
  {
    """

code = code[:old_theme22_start] + theme22_replacement + code[old_theme23_start:]

# -----------------------------------------------------------------------------
# THEME 9: FLEXBOX - 3-Component Practice
# -----------------------------------------------------------------------------
# In Theme 9, we make student actively write flexbox on .spa-navbar, .track-row, and .spa-player!

old_theme9_start = code.find("id: 'theme-9-flexbox',")
old_theme10_start = code.find("id: 'theme-10-buttons',")
assert old_theme9_start != -1 and old_theme10_start != -1

theme9_replacement = """id: 'theme-9-flexbox',
    module: 'full-powers',
    title: {
      en: 'Theme 9: Flexbox (CyberPulse Music Media SPA)',
      uz: '9-Mavzu: Flexbox (CyberPulse Musiqiy Media SPA)'
    },
    icon: '🧩',
    tag: 'display: flex, justify-content, align-items, gap',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, **Flexbox** is the master 1D layout engine of real Single Page Applications! Without it, navbars, cards, and player controls collapse into a messy vertical pile. Real web applications use Flexbox everywhere: top navigation, track cards row, and bottom player deck!',
        uz: 'Oddiy tilda **Flexbox** — bu haqiqiy SPA ilovalarning 1D terish dvigatelidir! Usiz navigatsiya panellari, kartochkalar va pleyer boshqaruvi bir-birining ustiga yig\\'ilib qoladi. Haqiqiy veb-ilovalarda Flexbox hamma joyda: yuqori menyu, qo\\'shiqlar qatori va pastki pleyerda faol ishlatiladi!'
      },
      whatIsATag: {
        en: '1. `display: flex;` activates the 1D snapping power.\\n2. `justify-content: space-between;` pushes brand to the left and profile controls to the right.\\n3. `align-items: center;` centers all navbar and player items vertically!\\n4. `gap: 12px;` leaves consistent spacing between cards in a flex row!',
        uz: '1. `display: flex;` bir o\\'lchovli qator kuchini yoqadi.\\n2. `justify-content: space-between;` brendni chapga, tugmalarni esa eng o\\'ng chetga suradi.\\n3. `align-items: center;` barcha elementlarni vertikal bo\\'yicha markazga tekislaydi!\\n4. `gap: 12px;` kartochkalar orasida chiroyli toza masofa qoldiradi!'
      }
    },
    summary: {
      en: 'Assemble a complete Spotify-style Music SPA layout by coding Flexbox across 3 distinct components: the topbar navbar, the music tracks row, and the bottom player bar.',
      uz: 'Flexbox qoidalarini 3 ta alohida komponentda (yuqori menyu, qo\\'shiqlar qatori va pastki pleyer paneli) o\\'z qo\\'lingiz bilan yozib to\\'liq musiqiy SPA ilovasini quring.'
    },
    story: {
      en: 'The CyberPulse Music SPA layout is collapsed into a messy vertical stack! Snap the top navbar, the music track cards row, and the bottom player deck into place using Flexbox!',
      uz: 'CyberPulse Musiqa SPA sahifasining sarlavhasi, kartochkalari va pleyeri ustma-ust tushib buzilib yotibdi. Flexbox yordamida barcha 3 ta qismni haqiqiy musiqiy ilova kabi terib chiqing!'
    },
    initialCode: {
      en: `<style>
  * { box-sizing: border-box; }
  .spa-app {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 16px;
    color: #e2e8f0;
    font-family: system-ui, sans-serif;
  }

  /* Step 1: Turn on flexbox in .spa-navbar: display: flex; justify-content: space-between; align-items: center; */
  .spa-navbar {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 14px 20px;
    margin-bottom: 16px;
  }
  .brand { font-size: 16px; font-weight: 800; color: #38bdf8; }
  .nav-menu { display: flex; gap: 16px; font-size: 13px; color: #94a3b8; }
  .nav-menu span:hover { color: #38bdf8; cursor: pointer; }
  .user-deck { display: flex; align-items: center; gap: 10px; font-size: 12px; }
  .vip-pill { background: #38bdf8; color: #0b0f19; font-weight: bold; padding: 4px 10px; border-radius: 6px; }

  .spa-body {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
  }
  .spa-sidebar {
    width: 170px;
    background: #111827;
    border-radius: 12px;
    padding: 14px;
    font-size: 12px;
  }
  .spa-sidebar h4 { margin: 0 0 10px 0; color: #38bdf8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }
  .spa-sidebar div { padding: 6px 0; color: #94a3b8; cursor: pointer; }
  .spa-sidebar div:hover { color: white; }

  .spa-content {
    flex: 1;
    background: #111827;
    border-radius: 12px;
    padding: 16px;
  }
  .hero-banner {
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border: 1px solid #4338ca;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 16px;
  }
  .hero-banner h3 { margin: 0 0 6px 0; color: #a5b4fc; }
  .hero-banner p { margin: 0; font-size: 12px; color: #cbd5e1; }

  /* Step 2: Line up track cards horizontally: display: flex; gap: 12px; */
  .track-row {
    margin-bottom: 16px;
  }
  .track-card {
    flex: 1;
    background: #1e293b;
    border-radius: 8px;
    padding: 12px;
    font-size: 12px;
  }
  .track-card span { display: block; color: #94a3b8; font-size: 10px; margin-top: 4px; }

  /* Step 3: Spread player controls: display: flex; justify-content: space-between; align-items: center; */
  .spa-player {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 12px 20px;
    font-size: 12px;
  }
  .player-track { color: #38bdf8; font-weight: bold; }
  .player-controls { display: flex; gap: 14px; font-size: 14px; cursor: pointer; }
</style>

<div class="spa-app">
  <header class="spa-navbar">
    <div class="brand">🎵 CyberPulse SPA</div>
    <div class="nav-menu">
      <span>Home</span>
      <span>Discover</span>
      <span>Radio</span>
      <span>Library</span>
    </div>
    <div class="user-deck">
      <span class="vip-pill">⭐ VIP PASS</span>
      <span>🎧 Alex</span>
    </div>
  </header>

  <div class="spa-body">
    <aside class="spa-sidebar">
      <h4>Playlists</h4>
      <div>⚡ Synthwave</div>
      <div>🚀 Lo-Fi Chill</div>
      <div>🎮 Gaming OST</div>
      <div>💎 Cyber Beats</div>
    </aside>

    <main class="spa-content">
      <div class="hero-banner">
        <h3>⚡ Live Cyber Station</h3>
        <p>Streaming high-tempo coding synth to 12,400 listeners worldwide.</p>
      </div>

      <div class="track-row">
        <div class="track-card"><b>Neon Horizon</b><span>3:42 • CyberBoy</span></div>
        <div class="track-card"><b>Laser Grid</b><span>4:15 • PixelQueen</span></div>
        <div class="track-card"><b>Dark Orbit</b><span>2:58 • SynthLord</span></div>
      </div>
    </main>
  </div>

  <footer class="spa-player">
    <div class="player-track">▶ Now Playing: Neon Horizon (3:42)</div>
    <div class="player-controls">
      <span>⏮️</span>
      <span>⏯️</span>
      <span>⏭️</span>
    </div>
    <div class="player-vol">🔊 85%</div>
  </footer>
</div>`,
      uz: `<style>
  * { box-sizing: border-box; }
  .spa-app {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 16px;
    color: #e2e8f0;
    font-family: system-ui, sans-serif;
  }

  /* 1-Qadam: .spa-navbar da flexboxni yoqing: display: flex; justify-content: space-between; align-items: center; */
  .spa-navbar {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 14px 20px;
    margin-bottom: 16px;
  }
  .brand { font-size: 16px; font-weight: 800; color: #38bdf8; }
  .nav-menu { display: flex; gap: 16px; font-size: 13px; color: #94a3b8; }
  .nav-menu span:hover { color: #38bdf8; cursor: pointer; }
  .user-deck { display: flex; align-items: center; gap: 10px; font-size: 12px; }
  .vip-pill { background: #38bdf8; color: #0b0f19; font-weight: bold; padding: 4px 10px; border-radius: 6px; }

  .spa-body {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
  }
  .spa-sidebar {
    width: 170px;
    background: #111827;
    border-radius: 12px;
    padding: 14px;
    font-size: 12px;
  }
  .spa-sidebar h4 { margin: 0 0 10px 0; color: #38bdf8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }
  .spa-sidebar div { padding: 6px 0; color: #94a3b8; cursor: pointer; }
  .spa-sidebar div:hover { color: white; }

  .spa-content {
    flex: 1;
    background: #111827;
    border-radius: 12px;
    padding: 16px;
  }
  .hero-banner {
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border: 1px solid #4338ca;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 16px;
  }
  .hero-banner h3 { margin: 0 0 6px 0; color: #a5b4fc; }
  .hero-banner p { margin: 0; font-size: 12px; color: #cbd5e1; }

  /* 2-Qadam: .track-row dagi kartalarni bir qatorga tering: display: flex; gap: 12px; */
  .track-row {
    margin-bottom: 16px;
  }
  .track-card {
    flex: 1;
    background: #1e293b;
    border-radius: 8px;
    padding: 12px;
    font-size: 12px;
  }
  .track-card span { display: block; color: #94a3b8; font-size: 10px; margin-top: 4px; }

  /* 3-Qadam: .spa-player boshqaruvini ikki chetga yoying: display: flex; justify-content: space-between; align-items: center; */
  .spa-player {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 12px 20px;
    font-size: 12px;
  }
  .player-track { color: #38bdf8; font-weight: bold; }
  .player-controls { display: flex; gap: 14px; font-size: 14px; cursor: pointer; }
</style>

<div class="spa-app">
  <header class="spa-navbar">
    <div class="brand">🎵 CyberPulse SPA</div>
    <div class="nav-menu">
      <span>Home</span>
      <span>Discover</span>
      <span>Radio</span>
      <span>Library</span>
    </div>
    <div class="user-deck">
      <span class="vip-pill">⭐ VIP PASS</span>
      <span>🎧 Alex</span>
    </div>
  </header>

  <div class="spa-body">
    <aside class="spa-sidebar">
      <h4>Playlists</h4>
      <div>⚡ Synthwave</div>
      <div>🚀 Lo-Fi Chill</div>
      <div>🎮 Gaming OST</div>
      <div>💎 Cyber Beats</div>
    </aside>

    <main class="spa-content">
      <div class="hero-banner">
        <h3>⚡ Live Cyber Station</h3>
        <p>Streaming high-tempo coding synth to 12,400 listeners worldwide.</p>
      </div>

      <div class="track-row">
        <div class="track-card"><b>Neon Horizon</b><span>3:42 • CyberBoy</span></div>
        <div class="track-card"><b>Laser Grid</b><span>4:15 • PixelQueen</span></div>
        <div class="track-card"><b>Dark Orbit</b><span>2:58 • SynthLord</span></div>
      </div>
    </main>
  </div>

  <footer class="spa-player">
    <div class="player-track">▶ Now Playing: Neon Horizon (3:42)</div>
    <div class="player-controls">
      <span>⏮️</span>
      <span>⏯️</span>
      <span>⏭️</span>
    </div>
    <div class="player-vol">🔊 85%</div>
  </footer>
</div>`
    },
    targetCode: {
      en: `<style>
  * { box-sizing: border-box; }
  .spa-app {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 16px;
    color: #e2e8f0;
    font-family: system-ui, sans-serif;
  }
  .spa-navbar {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 14px 20px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand { font-size: 16px; font-weight: 800; color: #38bdf8; }
  .nav-menu { display: flex; gap: 16px; font-size: 13px; color: #94a3b8; }
  .nav-menu span:hover { color: #38bdf8; cursor: pointer; }
  .user-deck { display: flex; align-items: center; gap: 10px; font-size: 12px; }
  .vip-pill { background: #38bdf8; color: #0b0f19; font-weight: bold; padding: 4px 10px; border-radius: 6px; }

  .spa-body {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
  }
  .spa-sidebar {
    width: 170px;
    background: #111827;
    border-radius: 12px;
    padding: 14px;
    font-size: 12px;
  }
  .spa-sidebar h4 { margin: 0 0 10px 0; color: #38bdf8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }
  .spa-sidebar div { padding: 6px 0; color: #94a3b8; cursor: pointer; }
  .spa-sidebar div:hover { color: white; }

  .spa-content {
    flex: 1;
    background: #111827;
    border-radius: 12px;
    padding: 16px;
  }
  .hero-banner {
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border: 1px solid #4338ca;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 16px;
  }
  .hero-banner h3 { margin: 0 0 6px 0; color: #a5b4fc; }
  .hero-banner p { margin: 0; font-size: 12px; color: #cbd5e1; }

  .track-row {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
  }
  .track-card {
    flex: 1;
    background: #1e293b;
    border-radius: 8px;
    padding: 12px;
    font-size: 12px;
  }
  .track-card span { display: block; color: #94a3b8; font-size: 10px; margin-top: 4px; }

  .spa-player {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
  }
  .player-track { color: #38bdf8; font-weight: bold; }
  .player-controls { display: flex; gap: 14px; font-size: 14px; cursor: pointer; }
</style>

<div class="spa-app">
  <header class="spa-navbar">
    <div class="brand">🎵 CyberPulse SPA</div>
    <div class="nav-menu">
      <span>Home</span>
      <span>Discover</span>
      <span>Radio</span>
      <span>Library</span>
    </div>
    <div class="user-deck">
      <span class="vip-pill">⭐ VIP PASS</span>
      <span>🎧 Alex</span>
    </div>
  </header>

  <div class="spa-body">
    <aside class="spa-sidebar">
      <h4>Playlists</h4>
      <div>⚡ Synthwave</div>
      <div>🚀 Lo-Fi Chill</div>
      <div>🎮 Gaming OST</div>
      <div>💎 Cyber Beats</div>
    </aside>

    <main class="spa-content">
      <div class="hero-banner">
        <h3>⚡ Live Cyber Station</h3>
        <p>Streaming high-tempo coding synth to 12,400 listeners worldwide.</p>
      </div>

      <div class="track-row">
        <div class="track-card"><b>Neon Horizon</b><span>3:42 • CyberBoy</span></div>
        <div class="track-card"><b>Laser Grid</b><span>4:15 • PixelQueen</span></div>
        <div class="track-card"><b>Dark Orbit</b><span>2:58 • SynthLord</span></div>
      </div>
    </main>
  </div>

  <footer class="spa-player">
    <div class="player-track">▶ Now Playing: Neon Horizon (3:42)</div>
    <div class="player-controls">
      <span>⏮️</span>
      <span>⏯️</span>
      <span>⏭️</span>
    </div>
    <div class="player-vol">🔊 85%</div>
  </footer>
</div>`,
      uz: `<style>
  * { box-sizing: border-box; }
  .spa-app {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 16px;
    color: #e2e8f0;
    font-family: system-ui, sans-serif;
  }
  .spa-navbar {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 14px 20px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand { font-size: 16px; font-weight: 800; color: #38bdf8; }
  .nav-menu { display: flex; gap: 16px; font-size: 13px; color: #94a3b8; }
  .nav-menu span:hover { color: #38bdf8; cursor: pointer; }
  .user-deck { display: flex; align-items: center; gap: 10px; font-size: 12px; }
  .vip-pill { background: #38bdf8; color: #0b0f19; font-weight: bold; padding: 4px 10px; border-radius: 6px; }

  .spa-body {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
  }
  .spa-sidebar {
    width: 170px;
    background: #111827;
    border-radius: 12px;
    padding: 14px;
    font-size: 12px;
  }
  .spa-sidebar h4 { margin: 0 0 10px 0; color: #38bdf8; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }
  .spa-sidebar div { padding: 6px 0; color: #94a3b8; cursor: pointer; }
  .spa-sidebar div:hover { color: white; }

  .spa-content {
    flex: 1;
    background: #111827;
    border-radius: 12px;
    padding: 16px;
  }
  .hero-banner {
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border: 1px solid #4338ca;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 16px;
  }
  .hero-banner h3 { margin: 0 0 6px 0; color: #a5b4fc; }
  .hero-banner p { margin: 0; font-size: 12px; color: #cbd5e1; }

  .track-row {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
  }
  .track-card {
    flex: 1;
    background: #1e293b;
    border-radius: 8px;
    padding: 12px;
    font-size: 12px;
  }
  .track-card span { display: block; color: #94a3b8; font-size: 10px; margin-top: 4px; }

  .spa-player {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
  }
  .player-track { color: #38bdf8; font-weight: bold; }
  .player-controls { display: flex; gap: 14px; font-size: 14px; cursor: pointer; }
</style>

<div class="spa-app">
  <header class="spa-navbar">
    <div class="brand">🎵 CyberPulse SPA</div>
    <div class="nav-menu">
      <span>Home</span>
      <span>Discover</span>
      <span>Radio</span>
      <span>Library</span>
    </div>
    <div class="user-deck">
      <span class="vip-pill">⭐ VIP PASS</span>
      <span>🎧 Alex</span>
    </div>
  </header>

  <div class="spa-body">
    <aside class="spa-sidebar">
      <h4>Playlists</h4>
      <div>⚡ Synthwave</div>
      <div>🚀 Lo-Fi Chill</div>
      <div>🎮 Gaming OST</div>
      <div>💎 Cyber Beats</div>
    </aside>

    <main class="spa-content">
      <div class="hero-banner">
        <h3>⚡ Live Cyber Station</h3>
        <p>Streaming high-tempo coding synth to 12,400 listeners worldwide.</p>
      </div>

      <div class="track-row">
        <div class="track-card"><b>Neon Horizon</b><span>3:42 • CyberBoy</span></div>
        <div class="track-card"><b>Laser Grid</b><span>4:15 • PixelQueen</span></div>
        <div class="track-card"><b>Dark Orbit</b><span>2:58 • SynthLord</span></div>
      </div>
    </main>
  </div>

  <footer class="spa-player">
    <div class="player-track">▶ Now Playing: Neon Horizon (3:42)</div>
    <div class="player-controls">
      <span>⏮️</span>
      <span>⏯️</span>
      <span>⏭️</span>
    </div>
    <div class="player-vol">🔊 85%</div>
  </footer>
</div>`
    },
    targetDescription: {
      en: 'A complete CyberPulse Music SPA with 3 flexbox layouts applied: topbar navigation, horizontal track cards with gap, and bottom player controls with space-between.',
      uz: '3 ta joyda Flexbox qoidalari qo\\'llangan to\\'liq CyberPulse musiqiy SPA ilovasi: yuqori navigatsiya paneli, oraliqli qo\\'shiq kartalari va ikki chetga surilgan pastki pleyer.'
    },
    anatomy: [
      {
        part: 'display: flex;',
        role: { en: 'Flex Activation', uz: 'Flexni faollashtirish' },
        explanation: { en: 'Tells the container: "Snap all children into a horizontal row!" Used across navbar, cards, and player!', uz: 'Konteynerga: "Barcha bolalarni gorizontal qatorga tiz!" deb buyuradi. Menyu, kartalar va pleyerda ishlatiladi!' },
        effect: { en: 'Snaps items side-by-side', uz: 'Elementlarni yonma-yon teradi' }
      },
      {
        part: 'justify-content: space-between;',
        role: { en: 'Distribute Across Width', uz: 'Kenglik bo\\'yicha taqsimlash' },
        explanation: { en: 'Pushes first item to start and last item to end with maximum space between.', uz: 'Birinchi elementni chap chetga, oxirgisini o\\'ng chetga suradi.' },
        effect: { en: 'Max separation across horizontal axis', uz: 'Chetlarga surib o\\'rtani bo\\'shatadi' }
      },
      {
        part: 'align-items: center;',
        role: { en: 'Vertical Centering', uz: 'Vertikal tekislash' },
        explanation: { en: 'Centers all children along the cross-axis so tall buttons and short text align smoothly.', uz: 'Barcha elementlarni vertikal markaz chizig\\'iga tekislaydi.' },
        effect: { en: 'Perfect vertical alignment', uz: 'Mukammal vertikal tekislanish' }
      },
      {
        part: 'gap: 12px;',
        role: { en: 'Flex Gutter', uz: 'Flex Oralig\\'i' },
        explanation: { en: 'Leaves consistent spacing between cards in a flex row without messy margins.', uz: 'Kartochkalar orasida toza bir xil masofa qoldiradi.' },
        effect: { en: 'Clean gutters between items', uz: 'Elementlar orasidagi toza masofa' }
      }
    ],
    listOfTags: [
      { code: 'display: flex;', name: { en: 'Flex Container', uz: 'Flex Idish' }, description: { en: 'Lines up child items horizontally in one unified row', uz: 'Ichidagi bolalarni bir qatorga yonma-yon teradi' } },
      { code: 'justify-content: space-between;', name: { en: 'Space Between', uz: 'Chetlarga surish' }, description: { en: 'Distributes items with maximum space between edges', uz: 'Elementlarni chetlarga tarqatadi' } },
      { code: 'align-items: center;', name: { en: 'Center Alignment', uz: 'Markazga tekislash' }, description: { en: 'Vertically aligns items in the exact center line', uz: 'Elementlarni balandlik bo\\'yicha markazga suradi' } },
      { code: 'gap: 12px;', name: { en: 'Flex Gap', uz: 'Flex Oralig\\'i' }, description: { en: 'Even space between flex items in a row', uz: 'Qatordagi elementlar orasidagi masofa' } }
    ],
    tagShowcase: [
      { tag: 'display: flex;', meaning: { en: 'Snap into row', uz: 'Qatorga tizish' } },
      { tag: 'justify-content: space-between;', meaning: { en: 'Push to opposite edges', uz: 'Chetlarga surish' } },
      { tag: 'align-items: center;', meaning: { en: 'Center vertically', uz: 'Vertikal markazlash' } },
      { tag: 'gap: 12px;', meaning: { en: 'Clean spacing', uz: 'Toza oraliq masofa' } }
    ],
    quickTags: ['display: flex;', 'justify-content: space-between;', 'align-items: center;', 'gap: 12px;'],
    challenge: {
      mission: {
        en: 'Build the CyberPulse Music SPA with 3 Flexbox layouts! 1) Add display: flex;, justify-content: space-between;, align-items: center; to .spa-navbar. 2) Add display: flex;, gap: 12px; to .track-row. 3) Add display: flex;, justify-content: space-between;, align-items: center; to .spa-player!',
        uz: 'CyberPulse Musiqa SPA sahifasida 3 ta alohida Flexbox joylashuvini quring! 1) .spa-navbar ga display: flex;, justify-content: space-between; va align-items: center; bering. 2) .track-row ga display: flex; va gap: 12px; yozing. 3) .spa-player ga display: flex;, justify-content: space-between; va align-items: center; yozing!'
      },
      hint: {
        en: 'Apply flexbox to .spa-navbar, .track-row, and .spa-player to assemble all 3 sections of the music app!',
        uz: '.spa-navbar, .track-row va .spa-player qismlariga flexbox qoidalarini qo\\'shib butun ilovani terib chiqing.'
      },
      rules: [
        {
          type: 'custom',
          check: (code) => /\.spa-navbar\s*\{[^}]*display\s*:\s*flex/i.test(code) && /\.spa-navbar\s*\{[^}]*justify-content\s*:\s*space-between/i.test(code) && /\.spa-navbar\s*\{[^}]*align-items\s*:\s*center/i.test(code),
          message: 'Add display: flex; justify-content: space-between; align-items: center; to .spa-navbar!'
        },
        {
          type: 'custom',
          check: (code) => /\.track-row\s*\{[^}]*display\s*:\s*flex/i.test(code) && /\.track-row\s*\{[^}]*gap\s*:\s*12px/i.test(code),
          message: 'Add display: flex; and gap: 12px; to .track-row!'
        },
        {
          type: 'custom',
          check: (code) => /\.spa-player\s*\{[^}]*display\s*:\s*flex/i.test(code) && /\.spa-player\s*\{[^}]*justify-content\s*:\s*space-between/i.test(code) && /\.spa-player\s*\{[^}]*align-items\s*:\s*center/i.test(code),
          message: 'Add display: flex; justify-content: space-between; align-items: center; to .spa-player!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'A music app navbar is like a dashboard in a spaceship: logo on the left, radio stations in the center, and commander status on the right.',
        uz: 'Musiqa ilovasi paneli kosmik kema asboblar paneliga o\\'xshaydi: chapda logotip, o\\'rtada kanallar, o\\'ngda esa komandir ma\\'lumotlari.'
      },
      discussionQuestions: [
        'Why do modern SPAs (Spotify, Netflix, YouTube) use Flexbox for topbars and player rows?',
        'How does align-items: center prevent buttons and logos from looking crooked?'
      ],
      commonMistakes: [
        'Writing display: flex on individual buttons instead of the parent container',
        'Confusing justify-content (horizontal) with align-items (vertical)'
      ],
      funActivity: 'Inspect Spotify or YouTube Web: open DevTools and toggle display: flex on the header!'
    }
  },

  // ==========================================
  // THEME 10: Buttons
  // ==========================================
  {
    """

code = code[:old_theme9_start] + theme9_replacement + code[old_theme10_start:]

# -----------------------------------------------------------------------------
# THEME 21: CSS GRID - Multi-level Spanning & 2D Matrix
# -----------------------------------------------------------------------------
old_theme21_start = code.find("id: 'theme-21-grid',")
old_theme22_start = code.find("id: 'theme-22-position',")
assert old_theme21_start != -1 and old_theme22_start != -1

theme21_replacement = """id: 'theme-21-grid',
    module: 'full-powers',
    title: {
      en: 'Theme 21: CSS Grid (CyberStore 2D Launcher SPA)',
      uz: '21-Mavzu: CSS Grid (CyberStore 2D O\\'yinlar Do\\'koni SPA)'
    },
    icon: '⊞',
    tag: 'display: grid, grid-template-columns, gap, grid-column',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, **CSS Grid** is the master 2D blueprint of modern web design! While Flexbox lines things up in one direction, Grid orchestrates entire Single Page Application (SPA) dashboards controlling both columns and rows at the same time.',
        uz: 'Oddiy inson tilida, **CSS Grid** — bu zamonaviy veb-dizaynning 2D bosh chizmasidir! Flexbox bir yo\\'nalishda ishlasa, Grid bir vaqtning o\\'zida qatorlar va ustunlarni boshqarib to\\'liq SPA boshqaruv panellarini quradi.'
      },
      whatIsATag: {
        en: `1. \\`display: grid;\\` activates the 2D layout matrix.\\n2. \\`grid-template-columns: 200px 1fr 1fr;\\` creates a dedicated sidebar column and two responsive content columns.\\n3. \\`gap: 16px;\\` leaves clean breathing room between all cards.\\n4. \\`grid-column: 1 / -1;\\` stretches headers and footers across the full grid!\\n5. \\`grid-column: span 2;\\` lets a featured hero game banner expand across 2 content columns!`,
        uz: `1. \\`display: grid;\\` — 2D panjara rejimini yoqadi.\\n2. \\`grid-template-columns: 200px 1fr 1fr;\\` — 200px yon panel va 2 ta teng moslashuvchan ustun hosil qiladi.\\n3. \\`gap: 16px;\\` — barcha panellar orasida toza oraliq qoldiradi.\\n4. \\`grid-column: 1 / -1;\\` — sarlavha va futerni butun panjara bo\\'ylab to\\'liq yoyadi!\\n5. \\`grid-column: span 2;\\` — bosh o\\'yin kartasini 2 ta ustunga cho\\'zadi!`
      }
    },
    summary: {
      en: 'Build a full 2D game store launcher SPA with display: grid, multi-column template, full-width header spanning, and hero card column spanning.',
      uz: 'display: grid, ko\\'p ustunli shablon, sarlavhani to\\'liq cho\\'zish (1 / -1) va asosiy banner kartasini kengaytirish (span 2) orqali to\\'liq 2D o\\'yin do\\'koni SPA sahifasini quring.'
    },
    story: {
      en: 'The CyberStore Gaming SPA needs a complete dashboard: structure the 2D matrix, span the header across all columns, span the hero release across 2 columns, and span the footer across all columns!',
      uz: 'CyberStore O\\'yinlar SPA ilovasiga to\\'liq boshqaruv paneli kerak: 2D panjarani yoqing, sarlavhani barcha ustunlarga cho\\'zing, bosh o\\'yin kartasini 2 ta ustunga kengaytiring va futerni to\\'liq yoying!'
    },
    initialCode: {
      en: `<style>
  * { box-sizing: border-box; }

  /* Step 1: Turn into 2D matrix: display: grid; grid-template-columns: 200px 1fr 1fr; gap: 16px; */
  .spa-grid {
    background: #0b0f19;
    padding: 18px;
    border-radius: 16px;
    border: 1px solid #1e293b;
    color: white;
    font-family: system-ui, sans-serif;
  }

  /* Step 2: Span the header across all columns with grid-column: 1 / -1; */
  .spa-header {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 14px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .spa-sidebar {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 16px;
  }

  /* Step 3: Expand featured hero card across 2 columns with grid-column: span 2; */
  .featured-card {
    background: linear-gradient(135deg, #1e1b4b, #3730a3);
    border: 1px solid #6366f1;
    border-radius: 12px;
    padding: 20px;
  }

  .game-card {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 16px;
  }

  /* Step 4: Span the footer across all columns with grid-column: 1 / -1; */
  .spa-footer {
    background: #111827;
    border-radius: 10px;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #94a3b8;
  }
</style>

<div class="spa-grid">
  <header class="spa-header">
    <div style="font-weight: 800; color: #38bdf8;">🎮 CyberStore Launcher SPA</div>
    <div style="font-size: 13px; color: #94a3b8;">Commander Alex • 💎 1,450 XP</div>
  </header>

  <aside class="spa-sidebar">
    <h4 style="margin: 0 0 10px 0; color: #38bdf8; font-size: 12px;">CATEGORIES</h4>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🔥 Action RPG</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🏎️ Sci-Fi Racing</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🧪 Strategy Lab</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🛡️ Tower Defense</div>
  </aside>

  <div class="featured-card">
    <span style="background: #ec4899; color: white; font-size: 10px; padding: 2px 8px; border-radius: 4px; font-weight: bold;">FEATURED RELEASE</span>
    <h2 style="margin: 8px 0 4px 0; color: #ffffff;">Cyber Odyssey 2099</h2>
    <p style="margin: 0 0 12px 0; font-size: 12px; color: #c7d2fe;">Lead your starfleet across infinite procedurally generated galactic frontiers.</p>
    <button style="background: #6366f1; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;">🚀 PLAY NOW</button>
  </div>

  <div class="game-card">
    <h3 style="margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;">🗡️ Shadow Blade</h3>
    <p style="margin: 0; font-size: 12px; color: #94a3b8;">Cyber Ninja Action</p>
  </div>

  <div class="game-card">
    <h3 style="margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;">🏎️ Turbo Horizon</h3>
    <p style="margin: 0; font-size: 12px; color: #94a3b8;">Neon Street Racing</p>
  </div>

  <footer class="spa-footer">
    <span>🟢 Online Players: 14,820</span>
    <span>⚡ Ping: 18ms (Tashkent Central)</span>
    <span>Version 2.4.0 SPA</span>
  </footer>
</div>`,
      uz: `<style>
  * { box-sizing: border-box; }

  /* 1-Qadam: .spa-grid ni 2D panjara qiling: display: grid; grid-template-columns: 200px 1fr 1fr; gap: 16px; */
  .spa-grid {
    background: #0b0f19;
    padding: 18px;
    border-radius: 16px;
    border: 1px solid #1e293b;
    color: white;
    font-family: system-ui, sans-serif;
  }

  /* 2-Qadam: Sarlavhani barcha ustunlar bo'ylab yoying: grid-column: 1 / -1; */
  .spa-header {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 14px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .spa-sidebar {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 16px;
  }

  /* 3-Qadam: Bosh o'yin kartasini 2 ta ustunga cho'zing: grid-column: span 2; */
  .featured-card {
    background: linear-gradient(135deg, #1e1b4b, #3730a3);
    border: 1px solid #6366f1;
    border-radius: 12px;
    padding: 20px;
  }

  .game-card {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 16px;
  }

  /* 4-Qadam: Futerni barcha ustunlar bo'ylab yoying: grid-column: 1 / -1; */
  .spa-footer {
    background: #111827;
    border-radius: 10px;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #94a3b8;
  }
</style>

<div class="spa-grid">
  <header class="spa-header">
    <div style="font-weight: 800; color: #38bdf8;">🎮 CyberStore Launcher SPA</div>
    <div style="font-size: 13px; color: #94a3b8;">Commander Alex • 💎 1,450 XP</div>
  </header>

  <aside class="spa-sidebar">
    <h4 style="margin: 0 0 10px 0; color: #38bdf8; font-size: 12px;">CATEGORIES</h4>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🔥 Action RPG</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🏎️ Sci-Fi Racing</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🧪 Strategy Lab</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🛡️ Tower Defense</div>
  </aside>

  <div class="featured-card">
    <span style="background: #ec4899; color: white; font-size: 10px; padding: 2px 8px; border-radius: 4px; font-weight: bold;">FEATURED RELEASE</span>
    <h2 style="margin: 8px 0 4px 0; color: #ffffff;">Cyber Odyssey 2099</h2>
    <p style="margin: 0 0 12px 0; font-size: 12px; color: #c7d2fe;">Lead your starfleet across infinite procedurally generated galactic frontiers.</p>
    <button style="background: #6366f1; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;">🚀 PLAY NOW</button>
  </div>

  <div class="game-card">
    <h3 style="margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;">🗡️ Shadow Blade</h3>
    <p style="margin: 0; font-size: 12px; color: #94a3b8;">Cyber Ninja Action</p>
  </div>

  <div class="game-card">
    <h3 style="margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;">🏎️ Turbo Horizon</h3>
    <p style="margin: 0; font-size: 12px; color: #94a3b8;">Neon Street Racing</p>
  </div>

  <footer class="spa-footer">
    <span>🟢 Online Players: 14,820</span>
    <span>⚡ Ping: 18ms (Tashkent Central)</span>
    <span>Version 2.4.0 SPA</span>
  </footer>
</div>`
    },
    targetCode: {
      en: `<style>
  * { box-sizing: border-box; }
  .spa-grid {
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
    gap: 16px;
    background: #0b0f19;
    padding: 18px;
    border-radius: 16px;
    border: 1px solid #1e293b;
    color: white;
    font-family: system-ui, sans-serif;
  }
  .spa-header {
    grid-column: 1 / -1;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 14px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .spa-sidebar {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 16px;
  }
  .featured-card {
    grid-column: span 2;
    background: linear-gradient(135deg, #1e1b4b, #3730a3);
    border: 1px solid #6366f1;
    border-radius: 12px;
    padding: 20px;
  }
  .game-card {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 16px;
  }
  .spa-footer {
    grid-column: 1 / -1;
    background: #111827;
    border-radius: 10px;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #94a3b8;
  }
</style>

<div class="spa-grid">
  <header class="spa-header">
    <div style="font-weight: 800; color: #38bdf8;">🎮 CyberStore Launcher SPA</div>
    <div style="font-size: 13px; color: #94a3b8;">Commander Alex • 💎 1,450 XP</div>
  </header>

  <aside class="spa-sidebar">
    <h4 style="margin: 0 0 10px 0; color: #38bdf8; font-size: 12px;">CATEGORIES</h4>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🔥 Action RPG</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🏎️ Sci-Fi Racing</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🧪 Strategy Lab</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🛡️ Tower Defense</div>
  </aside>

  <div class="featured-card">
    <span style="background: #ec4899; color: white; font-size: 10px; padding: 2px 8px; border-radius: 4px; font-weight: bold;">FEATURED RELEASE</span>
    <h2 style="margin: 8px 0 4px 0; color: #ffffff;">Cyber Odyssey 2099</h2>
    <p style="margin: 0 0 12px 0; font-size: 12px; color: #c7d2fe;">Lead your starfleet across infinite procedurally generated galactic frontiers.</p>
    <button style="background: #6366f1; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;">🚀 PLAY NOW</button>
  </div>

  <div class="game-card">
    <h3 style="margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;">🗡️ Shadow Blade</h3>
    <p style="margin: 0; font-size: 12px; color: #94a3b8;">Cyber Ninja Action</p>
  </div>

  <div class="game-card">
    <h3 style="margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;">🏎️ Turbo Horizon</h3>
    <p style="margin: 0; font-size: 12px; color: #94a3b8;">Neon Street Racing</p>
  </div>

  <footer class="spa-footer">
    <span>🟢 Online Players: 14,820</span>
    <span>⚡ Ping: 18ms (Tashkent Central)</span>
    <span>Version 2.4.0 SPA</span>
  </footer>
</div>`,
      uz: `<style>
  * { box-sizing: border-box; }
  .spa-grid {
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
    gap: 16px;
    background: #0b0f19;
    padding: 18px;
    border-radius: 16px;
    border: 1px solid #1e293b;
    color: white;
    font-family: system-ui, sans-serif;
  }
  .spa-header {
    grid-column: 1 / -1;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 14px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .spa-sidebar {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 16px;
  }
  .featured-card {
    grid-column: span 2;
    background: linear-gradient(135deg, #1e1b4b, #3730a3);
    border: 1px solid #6366f1;
    border-radius: 12px;
    padding: 20px;
  }
  .game-card {
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    padding: 16px;
  }
  .spa-footer {
    grid-column: 1 / -1;
    background: #111827;
    border-radius: 10px;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #94a3b8;
  }
</style>

<div class="spa-grid">
  <header class="spa-header">
    <div style="font-weight: 800; color: #38bdf8;">🎮 CyberStore Launcher SPA</div>
    <div style="font-size: 13px; color: #94a3b8;">Commander Alex • 💎 1,450 XP</div>
  </header>

  <aside class="spa-sidebar">
    <h4 style="margin: 0 0 10px 0; color: #38bdf8; font-size: 12px;">CATEGORIES</h4>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🔥 Action RPG</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🏎️ Sci-Fi Racing</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🧪 Strategy Lab</div>
    <div style="padding: 4px 0; color: #cbd5e1; font-size: 12px;">🛡️ Tower Defense</div>
  </aside>

  <div class="featured-card">
    <span style="background: #ec4899; color: white; font-size: 10px; padding: 2px 8px; border-radius: 4px; font-weight: bold;">FEATURED RELEASE</span>
    <h2 style="margin: 8px 0 4px 0; color: #ffffff;">Cyber Odyssey 2099</h2>
    <p style="margin: 0 0 12px 0; font-size: 12px; color: #c7d2fe;">Lead your starfleet across infinite procedurally generated galactic frontiers.</p>
    <button style="background: #6366f1; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;">🚀 PLAY NOW</button>
  </div>

  <div class="game-card">
    <h3 style="margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;">🗡️ Shadow Blade</h3>
    <p style="margin: 0; font-size: 12px; color: #94a3b8;">Cyber Ninja Action</p>
  </div>

  <div class="game-card">
    <h3 style="margin: 0 0 4px 0; color: #38bdf8; font-size: 14px;">🏎️ Turbo Horizon</h3>
    <p style="margin: 0; font-size: 12px; color: #94a3b8;">Neon Street Racing</p>
  </div>

  <footer class="spa-footer">
    <span>🟢 Online Players: 14,820</span>
    <span>⚡ Ping: 18ms (Tashkent Central)</span>
    <span>Version 2.4.0 SPA</span>
  </footer>
</div>`
    },
    targetDescription: {
      en: 'A full-scale CyberStore launcher SPA featuring a 2D grid matrix, full-width header (1 / -1), wide 2-column hero game banner (span 2), and full-width footer.',
      uz: '2D panjara tizimi, to\\'liq cho\\'zilgan sarlavha (1 / -1), 2 ta ustunni egallagan keng banner (span 2) va to\\'liq futerga ega CyberStore o\\'yin do\\'koni SPA sahifasi.'
    },
    anatomy: [
      {
        part: 'display: grid;',
        role: { en: 'Grid Mode', uz: 'Grid rejimi' },
        explanation: { en: 'Transforms the container into a two-dimensional grid system.', uz: 'Konteynerni ikki o\\'lchovli panjara tizimiga aylantiradi.' },
        effect: { en: 'Enables 2D grid rules', uz: '2D panjara qoidalarini yoqadi' }
      },
      {
        part: 'grid-template-columns: 200px 1fr 1fr;',
        role: { en: 'Sidebar + Content Columns', uz: 'Yon panel + Tarkib ustunlari' },
        explanation: { en: 'Creates a fixed 200px sidebar track and two flexible content tracks.', uz: '200px o\\'lchamli yon panel va 2 ta teng moslashuvchan ustun yaratadi.' },
        effect: { en: 'Splits width into 3 columns', uz: 'Enini 3 ta ustunga bo\\'ladi' }
      },
      {
        part: 'grid-column: 1 / -1;',
        role: { en: 'Full Width Span', uz: 'To\\'liq Kenglikka Cho\\'zish' },
        explanation: { en: 'Forces an element to start at line 1 and stretch across the entire grid to the end line.', uz: 'Elementni 1-chiziqdan boshlab eng oxirgi chiziqqacha to\\'liq yoyadi.' },
        effect: { en: 'Full width spanning block', uz: 'To\\'liq eni bo\\'ylab yoyilish' }
      },
      {
        part: 'grid-column: span 2;',
        role: { en: 'Column Span', uz: 'Ustunlarni birlashtirish' },
        explanation: { en: 'Allows a featured card to stretch across 2 columns.', uz: 'Asosiy kartaga 2 ta ustun bo\\'ylab cho\\'zilish imkonini beradi.' },
        effect: { en: 'Wide hero banner expansion', uz: 'Keng banner ko\\'rinishi' }
      }
    ],
    listOfTags: [
      { code: 'display: grid;', name: { en: 'Grid Activation', uz: 'Grid Faollashtirish' }, description: { en: 'Turns on two-dimensional grid layout on a parent container', uz: 'Ota elementda ikki o\\'lchovli panjara rejimini yoqadi' } },
      { code: 'grid-template-columns: 200px 1fr 1fr;', name: { en: 'Column Template', uz: 'Ustunlar Qolipi' }, description: { en: 'Defines sidebar and content columns with responsive fractional units', uz: 'Yon panel va asosiy qism uchun moslashuvchan ustunlar yaratadi' } },
      { code: 'grid-column: 1 / -1;', name: { en: 'Full-Width Span', uz: 'To\\'liq Ustun Cho\\'zish' }, description: { en: 'Stretches an element across all grid tracks from first to last line', uz: 'Elementni butun panjara bo\\'ylab boshidan oxirigacha cho\\'zadi' } },
      { code: 'grid-column: span 2;', name: { en: 'Span 2 Columns', uz: '2 Ustun Egallash' }, description: { en: 'Causes an element to stretch across 2 columns', uz: 'Elementni 2 ta ustun bo\\'ylab cho\\'zadi' } }
    ],
    tagShowcase: [
      { tag: 'display: grid;', meaning: { en: 'Enable 2D Grid', uz: '2D panjarani yoqish' } },
      { tag: 'grid-template-columns: 200px 1fr 1fr;', meaning: { en: 'Sidebar + 2 Columns', uz: 'Yon panel + 2 ta ustun' } },
      { tag: 'grid-column: 1 / -1;', meaning: { en: 'Full Width Span', uz: 'To\\'liq eniga cho\\'zish' } },
      { tag: 'grid-column: span 2;', meaning: { en: 'Span 2 Columns', uz: '2 ta ustunni egallash' } }
    ],
    quickTags: ['display: grid;', 'grid-template-columns: 200px 1fr 1fr;', 'gap: 16px;', 'grid-column: 1 / -1;', 'grid-column: span 2;'],
    challenge: {
      mission: {
        en: 'Build the CyberStore Launcher SPA with 4 Grid operations! 1) Add display: grid;, grid-template-columns: 200px 1fr 1fr;, gap: 16px; to .spa-grid. 2) Add grid-column: 1 / -1; to .spa-header. 3) Add grid-column: span 2; to .featured-card. 4) Add grid-column: 1 / -1; to .spa-footer!',
        uz: 'CyberStore O\\'yinlar Do\\'koni SPA sahifasida 4 ta Grid amalini bajaring! 1) .spa-grid ga display: grid;, grid-template-columns: 200px 1fr 1fr; va gap: 16px; bering. 2) .spa-header ga grid-column: 1 / -1; yozing. 3) .featured-card ga grid-column: span 2; bering. 4) .spa-footer ga grid-column: 1 / -1; yozing!'
      },
      hint: {
        en: 'Configure the grid container on .spa-grid, then span the header with grid-column: 1 / -1;, the hero card with grid-column: span 2;, and the footer with grid-column: 1 / -1;',
        uz: '.spa-grid da panjarani yoqing, .spa-header ga grid-column: 1 / -1;, .featured-card ga grid-column: span 2; va .spa-footer ga grid-column: 1 / -1; bering.'
      },
      rules: [
        {
          type: 'custom',
          check: (code) => /\.spa-grid\s*\{[^}]*display\s*:\s*grid/i.test(code) && /\.spa-grid\s*\{[^}]*grid-template-columns\s*:\s*200px/i.test(code) && /\.spa-grid\s*\{[^}]*gap\s*:\s*16px/i.test(code),
          message: 'Add display: grid;, grid-template-columns: 200px 1fr 1fr;, and gap: 16px; to .spa-grid!'
        },
        {
          type: 'custom',
          check: (code) => /\.spa-header\s*\{[^}]*grid-column\s*:\s*1\s*\/\s*-1/i.test(code),
          message: 'Add grid-column: 1 / -1; to .spa-header to span across all columns!'
        },
        {
          type: 'custom',
          check: (code) => /\.featured-card\s*\{[^}]*grid-column\s*:\s*span\s*2/i.test(code),
          message: 'Add grid-column: span 2; to .featured-card!'
        },
        {
          type: 'custom',
          check: (code) => /\.spa-footer\s*\{[^}]*grid-column\s*:\s*1\s*\/\s*-1/i.test(code),
          message: 'Add grid-column: 1 / -1; to .spa-footer to span across all columns!'
        }
      ]
    },
    teacherGuide: {
      analogy: {
        en: 'CSS Grid turns a web app into a master architectural blueprint: header covers the roof, sidebar guards the entrance, and hero cards span across the living room.',
        uz: 'CSS Grid veb-ilovani me\\'moriy chizmaga aylantiradi: tom qismini sarlavha, kirishni yon panel, mehmonxonani esa keng banner egallaydi.'
      },
      discussionQuestions: [
        'How do gaming dashboards like Discord, Steam, and Xbox Web use 2D Grid systems?',
        'What is the advantage of grid-column: span 2 for hero promotional banners?'
      ],
      commonMistakes: [
        'Confusing grid-column with grid-row',
        'Forgetting display: grid on the outer container before defining column tracks'
      ],
      funActivity: 'Sketch a multi-section dashboard on paper and plan which sections should span 2 columns!'
    }
  },

  // ==========================================
  // THEME 22: Positioning
  // ==========================================
  {
    """

code = code[:old_theme21_start] + theme21_replacement + code[old_theme22_start:]

# -----------------------------------------------------------------------------
# THEME 3: TABLES - Multi-row Construction & Colspan
# -----------------------------------------------------------------------------
old_theme3_start = code.find("id: 'theme-3-tables',")
old_theme4_start = code.find("id: 'theme-4-pictures',")
assert old_theme3_start != -1 and old_theme4_start != -1

theme3_replacement = """id: 'theme-3-tables',
    module: 'html-core',
    title: {
      en: 'Theme 3: Tables & Grids (Esports Championship Arena SPA)',
      uz: '3-Mavzu: Jadvallar va Kataklar (Kibersport Chempionati SPA Sahifasi)'
    },
    icon: '📊',
    tag: '<table>, <tr>, <th>, <td>, colspan',
    humanIntro: {
      whatIsIt: {
        en: 'In human language, a **Table** is a high-tech data grid! Inside real Single Page Applications (SPAs), tables power esports leaderboards, flight schedules, and financial analytics.',
        uz: 'Oddiy tilda aytganda, **Jadval** — bu yuqori texnologiyali ma\\'lumotlar panjarasi! Haqiqiy bitta sahifali ilovalarda (SPA) jadvallar kibersport reytinglari, parvoz jadvallari va moliyaviy hisobotlarni tuzadi.'
      },
      whatIsATag: {
        en: 'HTML tables structure complex web applications floor-by-floor:\\n1. `<table>` is the outer grid container.\\n2. `<tr>` (Table Row) is each horizontal row.\\n3. `<th>` (Table Header) is the bold roof sign labeling each column.\\n4. `<td>` (Table Data) is each cell holding facts, player names, and medals!\\n5. `colspan="3"` merges 3 cells into one wide summary banner!',
        uz: 'HTML jadvallari veb-ilovalarni qavatma-qavat quradi:\\n1. `<table>` — jadvalning tashqi ramkasi.\\n2. `<tr>` (Table Row) — har bir gorizontal qator.\\n3. `<th>` (Table Header) — ustun nomini bildiruvchi qalin sarlavha.\\n4. `<td>` (Table Data) — ma\\'lumot, o\\'yinchi nomi va medallar saqlanuvchi xonalar!\\n5. `colspan="3"` — 3 ta katakni bitta keng umumiy hisobot qatoriga birlashtiradi!'
      }
    },
    summary: {
      en: 'Construct a full Esports Championship SPA leaderboard by coding multiple player rows, champion badges, and a summary footer with colspan.',
      uz: 'Bir nechta o\\'yinchi qatorlari, chempion nishonlari va colspan li hisobot qatorini o\\'z qo\\'lingiz bilan yozib to\\'liq Kibersport SPA jadvalini quring.'
    },
    story: {
      en: 'The Grand Cyber Championship standings table needs its #1 Champion row AND its tournament summary total row constructed!',
      uz: 'Katta Kiber Chempionat SPA jadvalida 1-o\\'rin Chempion qatorini HAMDA butun turnir hisobotini ko\\'rsatuvchi colspan li qatorni o\\'z qo\\'lingiz bilan quring!'
    },
    initialCode: {
      en: `<style>
  * { box-sizing: border-box; }
  .spa-esports {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 20px;
    color: #e2e8f0;
    font-family: system-ui, sans-serif;
  }
  .spa-banner {
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border: 1px solid #4338ca;
    border-radius: 12px;
    padding: 16px 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .spa-banner h2 { margin: 0; color: #a5b4fc; font-size: 18px; }
  .spa-banner span { background: #38bdf8; color: #0b0f19; font-weight: bold; font-size: 11px; padding: 4px 10px; border-radius: 6px; }

  .stats-row {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
  }
  .stat-card {
    flex: 1;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 10px;
    padding: 12px;
    text-align: center;
  }
  .stat-card b { display: block; font-size: 16px; color: #38bdf8; }
  .stat-card span { font-size: 11px; color: #94a3b8; }

  table {
    width: 100%;
    border-collapse: collapse;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    overflow: hidden;
  }
  th {
    background: #1e2438;
    color: #38bdf8;
    padding: 14px;
    text-align: left;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  td {
    padding: 12px 14px;
    border-top: 1px solid #1f2937;
    font-size: 13px;
  }
  .champion {
    background: rgba(234, 179, 8, 0.18);
    font-weight: bold;
  }
  .total-row {
    background: #1e293b;
    font-weight: bold;
    color: #38bdf8;
  }
  .badge {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: bold;
  }
  .gold { background: #eab308; color: #000; }
  .silver { background: #94a3b8; color: #000; }
  .bronze { background: #f97316; color: #fff; }
</style>

<div class="spa-esports">
  <div class="spa-banner">
    <div>
      <h2>🏆 Global Cyber Championship 2099</h2>
      <p style="margin: 4px 0 0 0; font-size: 12px; color: #cbd5e1;">Live Arena Standings • Prize Pool: $100,000</p>
    </div>
    <span>🔴 LIVE ARENA</span>
  </div>

  <div class="stats-row">
    <div class="stat-card"><b>32</b><span>Pro Teams</span></div>
    <div class="stat-card"><b>128</b><span>Matches Played</span></div>
    <div class="stat-card"><b>1.4M</b><span>Global Viewers</span></div>
  </div>

  <table>
    <tr>
      <th>Rank</th>
      <th>Player</th>
      <th>Badge</th>
      <th>Score</th>
    </tr>

    <!-- Step 1: Put the 1st Place Champion row here using <tr class="champion"> -->
    <!-- Add 4 <td> cells: "🥇 1st", "ApexDragon", '<span class="badge gold">CHAMPION</span>', and "15,400" -->

    <tr>
      <td>🥈 2nd</td>
      <td>PixelCat</td>
      <td><span class="badge silver">MASTER</span></td>
      <td>12,850</td>
    </tr>
    <tr>
      <td>🥉 3rd</td>
      <td>CyberBot</td>
      <td><span class="badge bronze">PRO</span></td>
      <td>10,200</td>
    </tr>

    <!-- Step 2: Add a tournament summary row using <tr class="total-row"> -->
    <!-- Inside it, add <td colspan="3">Arena Total Score</td> and <td>38,450</td> -->
  </table>
</div>`,
      uz: `<style>
  * { box-sizing: border-box; }
  .spa-esports {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 20px;
    color: #e2e8f0;
    font-family: system-ui, sans-serif;
  }
  .spa-banner {
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border: 1px solid #4338ca;
    border-radius: 12px;
    padding: 16px 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .spa-banner h2 { margin: 0; color: #a5b4fc; font-size: 18px; }
  .spa-banner span { background: #38bdf8; color: #0b0f19; font-weight: bold; font-size: 11px; padding: 4px 10px; border-radius: 6px; }

  .stats-row {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
  }
  .stat-card {
    flex: 1;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 10px;
    padding: 12px;
    text-align: center;
  }
  .stat-card b { display: block; font-size: 16px; color: #38bdf8; }
  .stat-card span { font-size: 11px; color: #94a3b8; }

  table {
    width: 100%;
    border-collapse: collapse;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    overflow: hidden;
  }
  th {
    background: #1e2438;
    color: #38bdf8;
    padding: 14px;
    text-align: left;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  td {
    padding: 12px 14px;
    border-top: 1px solid #1f2937;
    font-size: 13px;
  }
  .champion {
    background: rgba(234, 179, 8, 0.18);
    font-weight: bold;
  }
  .total-row {
    background: #1e293b;
    font-weight: bold;
    color: #38bdf8;
  }
  .badge {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: bold;
  }
  .gold { background: #eab308; color: #000; }
  .silver { background: #94a3b8; color: #000; }
  .bronze { background: #f97316; color: #fff; }
</style>

<div class="spa-esports">
  <div class="spa-banner">
    <div>
      <h2>🏆 Global Cyber Championship 2099</h2>
      <p style="margin: 4px 0 0 0; font-size: 12px; color: #cbd5e1;">Live Arena Standings • Prize Pool: $100,000</p>
    </div>
    <span>🔴 LIVE ARENA</span>
  </div>

  <div class="stats-row">
    <div class="stat-card"><b>32</b><span>Pro Teams</span></div>
    <div class="stat-card"><b>128</b><span>Matches Played</span></div>
    <div class="stat-card"><b>1.4M</b><span>Global Viewers</span></div>
  </div>

  <table>
    <tr>
      <th>Rank</th>
      <th>Player</th>
      <th>Badge</th>
      <th>Score</th>
    </tr>

    <!-- 1-Qadam: <tr class="champion"> yordamida 1-o'rin Chempion qatorini oching -->
    <!-- Ichiga 4 ta <td> yozing: "🥇 1st", "ApexDragon", '<span class="badge gold">CHAMPION</span>' va "15,400" -->

    <tr>
      <td>🥈 2nd</td>
      <td>PixelCat</td>
      <td><span class="badge silver">MASTER</span></td>
      <td>12,850</td>
    </tr>
    <tr>
      <td>🥉 3rd</td>
      <td>CyberBot</td>
      <td><span class="badge bronze">PRO</span></td>
      <td>10,200</td>
    </tr>

    <!-- 2-Qadam: Turnir jami hisobot qatorini qo'shing: <tr class="total-row"> -->
    <!-- Ichiga <td colspan="3">Arena Jami Ochko</td> va <td>38,450</td> yozing -->
  </table>
</div>`
    },
    targetCode: {
      en: `<style>
  * { box-sizing: border-box; }
  .spa-esports {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 20px;
    color: #e2e8f0;
    font-family: system-ui, sans-serif;
  }
  .spa-banner {
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border: 1px solid #4338ca;
    border-radius: 12px;
    padding: 16px 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .spa-banner h2 { margin: 0; color: #a5b4fc; font-size: 18px; }
  .spa-banner span { background: #38bdf8; color: #0b0f19; font-weight: bold; font-size: 11px; padding: 4px 10px; border-radius: 6px; }

  .stats-row {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
  }
  .stat-card {
    flex: 1;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 10px;
    padding: 12px;
    text-align: center;
  }
  .stat-card b { display: block; font-size: 16px; color: #38bdf8; }
  .stat-card span { font-size: 11px; color: #94a3b8; }

  table {
    width: 100%;
    border-collapse: collapse;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    overflow: hidden;
  }
  th {
    background: #1e2438;
    color: #38bdf8;
    padding: 14px;
    text-align: left;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  td {
    padding: 12px 14px;
    border-top: 1px solid #1f2937;
    font-size: 13px;
  }
  .champion {
    background: rgba(234, 179, 8, 0.18);
    font-weight: bold;
  }
  .total-row {
    background: #1e293b;
    font-weight: bold;
    color: #38bdf8;
  }
  .badge {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: bold;
  }
  .gold { background: #eab308; color: #000; }
  .silver { background: #94a3b8; color: #000; }
  .bronze { background: #f97316; color: #fff; }
</style>

<div class="spa-esports">
  <div class="spa-banner">
    <div>
      <h2>🏆 Global Cyber Championship 2099</h2>
      <p style="margin: 4px 0 0 0; font-size: 12px; color: #cbd5e1;">Live Arena Standings • Prize Pool: $100,000</p>
    </div>
    <span>🔴 LIVE ARENA</span>
  </div>

  <div class="stats-row">
    <div class="stat-card"><b>32</b><span>Pro Teams</span></div>
    <div class="stat-card"><b>128</b><span>Matches Played</span></div>
    <div class="stat-card"><b>1.4M</b><span>Global Viewers</span></div>
  </div>

  <table>
    <tr>
      <th>Rank</th>
      <th>Player</th>
      <th>Badge</th>
      <th>Score</th>
    </tr>

    <tr class="champion">
      <td>🥇 1st</td>
      <td>ApexDragon</td>
      <td><span class="badge gold">CHAMPION</span></td>
      <td>15,400</td>
    </tr>

    <tr>
      <td>🥈 2nd</td>
      <td>PixelCat</td>
      <td><span class="badge silver">MASTER</span></td>
      <td>12,850</td>
    </tr>
    <tr>
      <td>🥉 3rd</td>
      <td>CyberBot</td>
      <td><span class="badge bronze">PRO</span></td>
      <td>10,200</td>
    </tr>

    <tr class="total-row">
      <td colspan="3">Arena Total Score</td>
      <td>38,450</td>
    </tr>
  </table>
</div>`,
      uz: `<style>
  * { box-sizing: border-box; }
  .spa-esports {
    background: #0b0f19;
    border: 1px solid #1e293b;
    border-radius: 16px;
    padding: 20px;
    color: #e2e8f0;
    font-family: system-ui, sans-serif;
  }
  .spa-banner {
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border: 1px solid #4338ca;
    border-radius: 12px;
    padding: 16px 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .spa-banner h2 { margin: 0; color: #a5b4fc; font-size: 18px; }
  .spa-banner span { background: #38bdf8; color: #0b0f19; font-weight: bold; font-size: 11px; padding: 4px 10px; border-radius: 6px; }

  .stats-row {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
  }
  .stat-card {
    flex: 1;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 10px;
    padding: 12px;
    text-align: center;
  }
  .stat-card b { display: block; font-size: 16px; color: #38bdf8; }
  .stat-card span { font-size: 11px; color: #94a3b8; }

  table {
    width: 100%;
    border-collapse: collapse;
    background: #111827;
    border: 1px solid #1f2937;
    border-radius: 12px;
    overflow: hidden;
  }
  th {
    background: #1e2438;
    color: #38bdf8;
    padding: 14px;
    text-align: left;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  td {
    padding: 12px 14px;
    border-top: 1px solid #1f2937;
    font-size: 13px;
  }
  .champion {
    background: rgba(234, 179, 8, 0.18);
    font-weight: bold;
  }
  .total-row {
    background: #1e293b;
    font-weight: bold;
    color: #38bdf8;
  }
  .badge {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: bold;
  }
  .gold { background: #eab308; color: #000; }
  .silver { background: #94a3b8; color: #000; }
  .bronze { background: #f97316; color: #fff; }
</style>

<div class="spa-esports">
  <div class="spa-banner">
    <div>
      <h2>🏆 Global Cyber Championship 2099</h2>
      <p style="margin: 4px 0 0 0; font-size: 12px; color: #cbd5e1;">Live Arena Standings • Prize Pool: $100,000</p>
    </div>
    <span>🔴 LIVE ARENA</span>
  </div>

  <div class="stats-row">
    <div class="stat-card"><b>32</b><span>Pro Teams</span></div>
    <div class="stat-card"><b>128</b><span>Matches Played</span></div>
    <div class="stat-card"><b>1.4M</b><span>Global Viewers</span></div>
  </div>

  <table>
    <tr>
      <th>Rank</th>
      <th>Player</th>
      <th>Badge</th>
      <th>Score</th>
    </tr>

    <tr class="champion">
      <td>🥇 1st</td>
      <td>ApexDragon</td>
      <td><span class="badge gold">CHAMPION</span></td>
      <td>15,400</td>
    </tr>

    <tr>
      <td>🥈 2nd</td>
      <td>PixelCat</td>
      <td><span class="badge silver">MASTER</span></td>
      <td>12,850</td>
    </tr>
    <tr>
      <td>🥉 3rd</td>
      <td>CyberBot</td>
      <td><span class="badge bronze">PRO</span></td>
      <td>10,200</td>
    </tr>

    <tr class="total-row">
      <td colspan="3">Arena Jami Ochko</td>
      <td>38,450</td>
    </tr>
  </table>
</div>`
    },
    targetDescription: {
      en: 'An Esports Championship SPA featuring metric cards, the #1 Champion ApexDragon row, and a summary footer table row with colspan="3".',
      uz: 'Ko\\'rsatkichlar kartalari, oltin nishonli 1-o\\'rin Chempioni ApexDragon qatori hamda colspan="3" li hisobot qatoriga ega to\\'liq Kibersport SPA jadvali.'
    },
    anatomy: [
      {
        part: '<table>',
        role: { en: 'Table Foundation', uz: 'Jadval poydevori' },
        explanation: { en: 'Creates the outer structured grid container.', uz: 'Tashqi jadval panjarasini yaratadi.' },
        effect: { en: 'Initializes the table grid', uz: 'Jadval panjarasini boshlaydi' },
        visualPreview: '<div class="mini-canvas">⊞ Outer Grid Table Frame</div>'
      },
      {
        part: '<tr>',
        role: { en: 'Table Row', uz: 'Jadval qatori' },
        explanation: { en: 'Creates horizontal rows across the table. Used for header, champions, and summaries!', uz: 'Gorizontal qatorlar hosil qiladi. Sarlavha, chempionlar va xulosalarda ishlatiladi!' },
        effect: { en: 'Starts a horizontal row', uz: 'Gorizontal qatorni boshlaydi' },
        visualPreview: '<div class="mini-canvas">➔ Horizontal Row ➔</div>'
      },
      {
        part: '<th>',
        role: { en: 'Table Header Cell', uz: 'Sarlavha katagi' },
        explanation: { en: 'Creates a bold label cell for column titles.', uz: 'Ustun nomlari uchun qalin sarlavha katagi hosil qiladi.' },
        effect: { en: 'Bold column header', uz: 'Qalin sarlavha katagi' },
        visualPreview: '<div class="mini-canvas"><b>Header: Name | Score</b></div>'
      },
      {
        part: '<td>',
        role: { en: 'Table Data Cell', uz: 'Ma\\'lumot katagi' },
        explanation: { en: 'A regular grid box holding values, medals, or text.', uz: 'Matn yoki raqamni saqlovchi oddiy katak.' },
        effect: { en: 'Standard data cell box', uz: 'Oddiy ma\\'lumot katagi' },
        visualPreview: '<div class="mini-canvas">📦 Standard Data Cell Box</div>'
      },
      {
        part: 'colspan="3"',
        role: { en: 'Column Span', uz: 'Ustunlarni Birlashtirish' },
        explanation: { en: 'Merges multiple columns horizontally into one wide cell.', uz: 'Bir nechta ustunni gorizontal ravishda bitta keng katakka birlashtiradi.' },
        effect: { en: 'Wide merged cell', uz: 'Birlashtirilgan keng katak' }
      }
    ],
    listOfTags: [
      { code: '<table> ... </table>', name: 'Table', description: 'The outer container frame for a grid/table', exampleHtml: '<table><tr><td>Cell</td></tr></table>' },
      { code: '<tr> ... </tr>', name: 'Table Row', description: 'Creates one horizontal line of cells across the table', exampleHtml: '<tr><td>A</td><td>B</td></tr>' },
      { code: '<th> ... </th>', name: 'Table Header', description: 'Bold title cell at the top of a column', exampleHtml: '<th>Player</th>' },
      { code: '<td> ... </td>', name: 'Table Data', description: 'Standard data cell box holding facts or numbers', exampleHtml: '<td>15,400</td>' },
      { code: 'colspan="3"', name: 'Column Span', description: 'Combines 3 horizontal cells into one wide cell', exampleHtml: '<td colspan="3">Total</td>' }
    ],
    tagShowcase: [
      { tag: '<table>', meaning: 'The whole grid' },
      { tag: '<tr>', meaning: 'One horizontal row' },
      { tag: '<th>', meaning: 'Bold column title' },
      { tag: '<td>', meaning: 'Data box inside a row' },
      { tag: 'colspan="3"', meaning: 'Merge 3 cells' }
    ],
    quickTags: ['<table>', '</table>', '<tr>', '</tr>', '<th>', '</th>', '<td>', '</td>', 'colspan="3"'],
    challenge: {
      mission: {
        en: 'Build the full Esports table! 1) Add <tr class="champion"> with 4 <td> cells for ApexDragon ("🥇 1st", "ApexDragon", \`<span class="badge gold">CHAMPION</span>\`, "15,400"). 2) Add <tr class="total-row"> with <td colspan="3">Arena Total Score</td> and <td>38,450</td>!',
        uz: 'To\\'liq Kibersport jadvalini quring! 1) ApexDragon uchun 4 ta <td> katakli <tr class="champion"> qatorini qo\\'shing ("🥇 1st", "ApexDragon", \`<span class="badge gold">CHAMPION</span>\`, "15,400"). 2) <td colspan="3">Arena Jami Ochko</td> va <td>38,450</td> ga ega <tr class="total-row"> qatorini qo\\'shing!'
      },
      hint: {
        en: 'Add the champion <tr> row, and at the bottom add a <tr> row with <td colspan="3"> and <td>38,450</td>.',
        uz: 'Chempion <tr> qatorini qo\\'shing va jadval oxirida <td colspan="3"> hamda <td>38,450</td> ga ega hisobot <tr> qatorini yozing.'
      },
      rules: [
        {
          type: 'hasTag',
          tag: 'table',
          message: 'Keep the <table> grid!'
        },
        {
          type: 'custom',
          check: (code) => (code.match(/<tr/gi) || []).length >= 5,
          message: 'You need at least 5 rows (header + 3 player rows + 1 total summary row)!'
        },
        {
          type: 'custom',
          check: (code) => /ApexDragon/i.test(code),
          message: 'Add ApexDragon as the 1st place champion in the table!'
        },
        {
          type: 'custom',
          check: (code) => /CHAMPION/i.test(code),
          message: 'Give ApexDragon the CHAMPION badge!'
        },
        {
          type: 'custom',
          check: (code) => /colspan\s*=\s*["']?3["']?/i.test(code),
          message: 'Add colspan="3" to merge the first 3 columns in the total summary row!'
        },
        {
          type: 'custom',
          check: (code) => /38[,.]?450/i.test(code),
          message: 'Include the total score of 38,450 in the summary row!'
        }
      ]
    },
    teacherGuide: {
      analogy: 'A table in an SPA is like an apartment building: <table> is the building, <tr> is each floor, <th> is the roof penthouse sign, and <td> is each apartment room.',
      discussionQuestions: [
        'How do web apps like ESPN, Steam, and Discord use tables for rankings and match histories?',
        'Why do all <td> and <th> cells have to be wrapped inside a <tr> row?'
      ],
      commonMistakes: [
        'Putting <td> directly inside <table> without wrapping it in a <tr> row',
        'Having a different number of <td> cells in different rows'
      ],
      funActivity: 'Design a championship leaderboard for your classroom with student avatars and stars!'
    }
  },

  // ==========================================
  // THEME 4: Pictures
  // ==========================================
  {
    """

code = code[:old_theme3_start] + theme3_replacement + code[old_theme4_start:]

with open('html-css/src/modules/curriculum.js', 'w', encoding='utf-8') as f:
    f.write(code)

print("Successfully upgraded Theme 22, Theme 9, Theme 21, and Theme 3 in html-css/src/modules/curriculum.js")
