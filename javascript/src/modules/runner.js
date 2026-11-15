/**
 * JavaScript Code Runner & Virtual Console
 * Safely executes kid JavaScript inside an iframe sandbox, captures console logs,
 * intercepts alerts/prompts gracefully, and returns outputs.
 */

export function executeJsInSandbox(code, outputContainer, livePreviewFrame) {
  const logs = [];

  function appendLog(type, args) {
    const text = args.map(arg => {
      if (typeof arg === 'object' && arg !== null) {
        try { return JSON.stringify(arg); } catch (e) { return String(arg); }
      }
      return String(arg);
    }).join(' ');
    logs.push({ type, text, time: new Date().toLocaleTimeString() });
  }

  // Pre-configured mini HTML environment inside iframe so DOM tasks (querySelector, etc.) work!
  const sandboxHtml = `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #090d16;
      color: #f8fafc;
      padding: 16px;
      margin: 0;
      box-sizing: border-box;
    }
    #box {
      width: 140px;
      height: 70px;
      background: #3b82f6;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      margin: 12px 0;
      transition: all 0.3s ease;
      color: #0f172a;
    }
    button {
      background: #8b5cf6;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
    }
    #count {
      font-size: 28px;
      font-weight: 800;
      color: #38bdf8;
      margin-left: 10px;
    }
    .hud-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <h2 id="title">CodeCraft JS Sandbox ⚡</h2>
  <div id="box">Sehrli Quti</div>
  <div class="hud-row">
    <button id="btn">Meni Bosing!</button>
    <button id="click-btn">O'yin Tugmasi (Clicker)</button>
    <span>Hisob: <span id="count">0</span></span>
  </div>

  <' + 'script>
    // Console interceptor
    window._capturedLogs = [];
    ['log', 'warn', 'error', 'info'].forEach(method => {
      const orig = console[method];
      console[method] = function(...args) {
        window._capturedLogs.push({ method, args: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)) });
        window.parent.postMessage({ type: 'CONSOLE_LOG', method, text: args.join(' ') }, '*');
        if (orig) orig.apply(console, args);
      };
    });

    // Alert & Prompt interceptors
    window.alert = function(msg) {
      window._capturedLogs.push({ method: 'alert', args: [msg] });
      window.parent.postMessage({ type: 'CONSOLE_ALERT', text: String(msg) }, '*');
    };

    window.prompt = function(msg, def) {
      const res = window.parent.prompt ? window.parent.prompt(msg, def || '') : (def || 'Ali');
      window._capturedLogs.push({ method: 'prompt', args: [msg, '->', res] });
      return res;
    };
  <' + '/script>
</body>
</html>`;

  return new Promise((resolve) => {
    if (!livePreviewFrame) {
      // Node or headless test fallback
      try {
        const consoleCapture = [];
        const mockConsole = {
          log: (...a) => consoleCapture.push(a.join(' ')),
          warn: (...a) => consoleCapture.push('[WARN] ' + a.join(' ')),
          error: (...a) => consoleCapture.push('[ERROR] ' + a.join(' '))
        };
        const mockDocument = {
          querySelector: (sel) => ({
            textContent: 'Sample Text',
            style: {},
            addEventListener: () => {}
          })
        };
        const fn = new Function('console', 'document', 'alert', 'prompt', code);
        fn(mockConsole, mockDocument, (m) => consoleCapture.push('[ALERT] ' + m), () => 'Ali');
        return resolve({ success: true, logs: consoleCapture });
      } catch (err) {
        return resolve({ success: false, error: err.message, logs: [] });
      }
    }

    livePreviewFrame.srcdoc = sandboxHtml;
    livePreviewFrame.onload = () => {
      try {
        const win = livePreviewFrame.contentWindow;
        win.eval(code);
        setTimeout(() => {
          resolve({
            success: true,
            logs: win._capturedLogs || []
          });
        }, 50);
      } catch (err) {
        resolve({
          success: false,
          error: err.message,
          logs: []
        });
      }
    };
  });
}
