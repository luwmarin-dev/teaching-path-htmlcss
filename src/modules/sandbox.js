/**
 * Free Sandbox Scratchpad Module
 * Kids can freely build their own websites with starter templates and download their HTML files!
 */

export const TEMPLATES = [
  {
    id: 'blank',
    name: '📄 Blank Canvas',
    code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 50px;
        background: #f1f2f6;
      }
      h1 { color: #3742fa; }
    </style>
  </head>
  <body>
    <h1>🌟 My Brand New Web Page!</h1>
    <p>Type your own HTML and CSS here!</p>
  </body>
</html>`
  },
  {
    id: 'superhero',
    name: '🦸 Superhero Card',
    code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background: #0f172a;
        font-family: 'Segoe UI', Tahoma, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        margin: 0;
      }
      .card {
        background: linear-gradient(135deg, #1e293b, #334155);
        color: white;
        padding: 30px;
        border-radius: 24px;
        border: 3px solid #38bdf8;
        box-shadow: 0 0 25px rgba(56, 189, 248, 0.4);
        text-align: center;
        width: 280px;
      }
      .avatar { font-size: 60px; margin-bottom: 10px; }
      h2 { color: #38bdf8; margin: 5px 0; }
      .badge {
        background: #0284c7;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: bold;
      }
      button {
        margin-top: 15px;
        background: #38bdf8;
        color: #0f172a;
        font-weight: bold;
        border: none;
        padding: 10px 20px;
        border-radius: 12px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="avatar">⚡</div>
      <h2>Thunder Boy</h2>
      <span class="badge">Speed: 1000 mph</span>
      <p>Protector of the Cyber City!</p>
      <button onclick="alert('⚡ Lightning Zap Activated!')">Use Special Move</button>
    </div>
  </body>
</html>`
  },
  {
    id: 'birthday',
    name: '🎂 Birthday Party Invitation',
    code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
        font-family: 'Comic Sans MS', cursive, sans-serif;
        text-align: center;
        padding: 40px;
        margin: 0;
      }
      .invite-box {
        background: white;
        max-width: 400px;
        margin: 0 auto;
        padding: 30px;
        border-radius: 25px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        border: 4px dashed #ff6b81;
      }
      h1 { color: #ff4757; }
      .emoji-row { font-size: 40px; }
      .btn-rsvp {
        background: #2ed573;
        color: white;
        border: none;
        padding: 12px 25px;
        font-size: 18px;
        border-radius: 15px;
        cursor: pointer;
        font-weight: bold;
        margin-top: 15px;
      }
    </style>
  </head>
  <body>
    <div class="invite-box">
      <div class="emoji-row">🎉 🎈 🎂</div>
      <h1>YOU ARE INVITED!</h1>
      <p>To the most epic Birthday Pizza & Gaming Party!</p>
      <p><strong>When:</strong> Saturday at 3:00 PM</p>
      <p><strong>Where:</strong> Arcades & Laser Tag</p>
      <button class="btn-rsvp" onclick="alert('Yay! See you at the party! 🍕')">RSVP Yes!</button>
    </div>
  </body>
</html>`
  }
];

export function downloadHtmlFile(filename = 'my-webpage.html', content) {
  if (typeof window === 'undefined') return;

  const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
