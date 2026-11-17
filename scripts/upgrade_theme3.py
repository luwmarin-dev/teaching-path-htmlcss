with open('html-css/src/modules/curriculum.js', 'r', encoding='utf-8') as f:
    code = f.read()

# -----------------------------------------------------------------------------
# UPGRADE THEME 3: SCRATCH TABLE CONSTRUCTION (Step-by-step from zero)
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
      en: 'Construct a full Esports Championship SPA leaderboard completely from scratch: write the table container, header row with <th> cells, multiple player data rows with <td> cells, and a summary row with colspan.',
      uz: 'Kibersport SPA turnir jadvalini noldan o\\'zingiz quring: jadval ramkasi, <th> li sarlavha qatori, <td> li 3 ta o\\'yinchi qatorlari va colspan li hisobot qatorini bosqichma-bosqich o\\'z qo\\'lingiz bilan yozing.'
    },
    story: {
      en: 'The tournament arena needs its entire standings table built from the ground up: open the table, label the columns with <th>, record all 3 championship player rows with <td>, and crown the grand total with colspan="3"!',
      uz: 'Turnir maydoniga jadvalni noldan boshlab qurish kerak: jadvalni oching, <th> bilan ustunlarni nomlang, <td> bilan 3 ta o\\'yinchi qatorlarini kiriting va colspan="3" bilan umumiy hisobotni chiqaring!'
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
    <!-- Step 1: Open the header row using <tr> and add 4 <th> column titles: -->
    <!-- <th>Rank</th> <th>Player</th> <th>Badge</th> <th>Score</th> -->

    <!-- Step 2: Open 1st player row using <tr class="champion"> with 4 <td> cells: -->
    <!-- <td>🥇 1st</td> <td>ApexDragon</td> <td><span class="badge gold">CHAMPION</span></td> <td>15,400</td> -->

    <!-- Step 3: Open 2nd player row using <tr> with 4 <td> cells: -->
    <!-- <td>🥈 2nd</td> <td>PixelCat</td> <td><span class="badge silver">MASTER</span></td> <td>12,850</td> -->

    <!-- Step 4: Open 3rd player row using <tr> with 4 <td> cells: -->
    <!-- <td>🥉 3rd</td> <td>CyberBot</td> <td><span class="badge bronze">PRO</span></td> <td>10,200</td> -->

    <!-- Step 5: Open tournament total row using <tr class="total-row"> with colspan="3": -->
    <!-- <td colspan="3">Arena Total Score</td> <td>38,450</td> -->
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
    <!-- 1-QADAM: <tr> bilan sarlavha qatorini oching va 4 ta <th> ustun nomlarini yozing: -->
    <!-- <th>O'rin</th> <th>O'yinchi</th> <th>Nishon</th> <th>Ochko</th> -->

    <!-- 2-QADAM: <tr class="champion"> bilan 1-o'rin Chempion qatorini oching va 4 ta <td> yozing: -->
    <!-- <td>🥇 1st</td> <td>ApexDragon</td> <td><span class="badge gold">CHAMPION</span></td> <td>15,400</td> -->

    <!-- 3-QADAM: Yangi <tr> ochib, 2-o'rin uchun 4 ta <td> yozing: -->
    <!-- <td>🥈 2nd</td> <td>PixelCat</td> <td><span class="badge silver">MASTER</span></td> <td>12,850</td> -->

    <!-- 4-QADAM: Yangi <tr> ochib, 3-o'rin uchun 4 ta <td> yozing: -->
    <!-- <td>🥉 3rd</td> <td>CyberBot</td> <td><span class="badge bronze">PRO</span></td> <td>10,200</td> -->

    <!-- 5-QADAM: <tr class="total-row"> ochib, colspan="3" bilan hisobot qatorini yozing: -->
    <!-- <td colspan="3">Arena Jami Ochko</td> <td>38,450</td> -->
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
      <th>O'rin</th>
      <th>O'yinchi</th>
      <th>Nishon</th>
      <th>Ochko</th>
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
      en: 'A grand championship standings table built completely from scratch: header row with 4 <th> cells, 3 player rows with badges, and a summary footer with colspan="3".',
      uz: 'Noldan boshlab to\\'liq qurilgan chempionat jadvali: 4 ta <th> sarlavha kataklari, nishonli 3 ta o\\'yinchi qatori va colspan="3" li umumiy hisobot qatori.'
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
        explanation: { en: 'Creates horizontal rows across the table. Each <tr> is a brand-new row!', uz: 'Gorizontal qatorlar hosil qiladi. Har bir <tr> yangi bitta qator deganidir!' },
        effect: { en: 'Starts a horizontal row', uz: 'Gorizontal qatorni boshlaydi' },
        visualPreview: '<div class="mini-canvas">➔ Horizontal Row ➔</div>'
      },
      {
        part: '<th>',
        role: { en: 'Table Header Cell', uz: 'Sarlavha katagi' },
        explanation: { en: 'Creates bold, centered column title cells. Belongs inside the 1st <tr> row!', uz: 'Ustun nomlari uchun qalin sarlavha katagi hosil qiladi. 1-qator <tr> ichiga qo\\'yiladi!' },
        effect: { en: 'Bold column header', uz: 'Qalin sarlavha katagi' },
        visualPreview: '<div class="mini-canvas"><b>Header: Name | Score</b></div>'
      },
      {
        part: '<td>',
        role: { en: 'Table Data Cell', uz: 'Ma\\'lumot katagi' },
        explanation: { en: 'Regular grid cells holding facts, names, badges, or numbers.', uz: 'Ma\\'lumot, o\\'yinchi nomi, nishon va ochkolarni saqlovchi kataklar.' },
        effect: { en: 'Standard data cell box', uz: 'Oddiy ma\\'lumot katagi' },
        visualPreview: '<div class="mini-canvas">📦 Standard Data Cell Box</div>'
      },
      {
        part: 'colspan="3"',
        role: { en: 'Column Span', uz: 'Ustunlarni Birlashtirish' },
        explanation: { en: 'Merges 3 columns horizontally into one grand banner cell.', uz: '3 ta ustunni gorizontal ravishda bitta keng katakka birlashtiradi.' },
        effect: { en: 'Wide merged cell', uz: 'Birlashtirilgan keng katak' }
      }
    ],
    listOfTags: [
      { code: '<table> ... </table>', name: 'Table Container', description: 'The outer container frame for a data table', exampleHtml: '<table>...</table>' },
      { code: '<tr> ... </tr>', name: 'Table Row', description: 'Creates one horizontal line of cells across the table', exampleHtml: '<tr><td>A</td><td>B</td></tr>' },
      { code: '<th> ... </th>', name: 'Table Header', description: 'Bold title cell at the top of a column', exampleHtml: '<th>Player</th>' },
      { code: '<td> ... </td>', name: 'Table Data', description: 'Standard data cell box holding facts or numbers', exampleHtml: '<td>15,400</td>' },
      { code: 'colspan="3"', name: 'Column Span', description: 'Combines 3 horizontal cells into one wide cell', exampleHtml: '<td colspan="3">Total</td>' }
    ],
    tagShowcase: [
      { tag: '<table>', meaning: 'The whole grid' },
      { tag: '<tr>', meaning: 'One horizontal row' },
      { tag: '<th>', meaning: 'Bold column title' },
      { tag: '<td>', meaning: 'Data cell box' },
      { tag: 'colspan="3"', meaning: 'Merge 3 columns' }
    ],
    quickTags: ['<table>', '</table>', '<tr>', '</tr>', '<th>', '</th>', '<td>', '</td>', 'colspan="3"'],
    challenge: {
      mission: {
        en: 'Construct the full Esports Standings Table from scratch! 1) Create header <tr> with 4 <th> cells. 2) Create 1st place <tr class="champion"> for ApexDragon with 4 <td> cells. 3) Create 2nd place <tr> for PixelCat with 4 <td> cells. 4) Create 3rd place <tr> for CyberBot with 4 <td> cells. 5) Create <tr class="total-row"> with <td colspan="3"> and <td>38,450</td>!',
        uz: 'Kibersport jadvalini noldan o\\'zingiz quring! 1) 4 ta <th> katakli sarlavha <tr> qatorini oching. 2) ApexDragon uchun 4 ta <td> katakli <tr class="champion"> qatorini yozing. 3) PixelCat uchun 4 ta <td> katakli <tr> qatorini yozing. 4) CyberBot uchun 4 ta <td> katakli <tr> qatorini yozing. 5) <td colspan="3"> va <td>38,450</td> ga ega <tr class="total-row"> qatorini qo\\'shing!'
      },
      hint: {
        en: 'Write 5 distinct <tr> rows: row 1 with <th>, rows 2-4 with <td> for players, and row 5 with <td colspan="3">.',
        uz: '5 ta alohida <tr> qatori yozing: 1-qatorda <th>, 2-4 qatorlarda o\\'yinchilar uchun <td>, 5-qatorda esa <td colspan="3"> bo\\'lsin.'
      },
      rules: [
        {
          type: 'hasTag',
          tag: 'table',
          message: 'Keep the <table> container!'
        },
        {
          type: 'custom',
          check: (code) => (code.match(/<th/gi) || []).length >= 4,
          message: 'Add at least 4 <th> header title cells in the first row!'
        },
        {
          type: 'custom',
          check: (code) => (code.match(/<tr/gi) || []).length >= 5,
          message: 'You need at least 5 <tr> rows (header + 3 player rows + summary row)!'
        },
        {
          type: 'custom',
          check: (code) => (code.match(/<td/gi) || []).length >= 13,
          message: 'You need all player data cells (at least 13 <td> cells total across rows)!'
        },
        {
          type: 'custom',
          check: (code) => /ApexDragon/i.test(code),
          message: 'Add ApexDragon as the 1st place champion in the table!'
        },
        {
          type: 'custom',
          check: (code) => /PixelCat/i.test(code),
          message: 'Add PixelCat as the 2nd place master in the table!'
        },
        {
          type: 'custom',
          check: (code) => /CyberBot/i.test(code),
          message: 'Add CyberBot as the 3rd place player in the table!'
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
    code = f.write(code)

print("Successfully upgraded Theme 3 to full from-scratch multi-row table construction!")
