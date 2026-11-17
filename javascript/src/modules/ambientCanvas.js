/**
 * Ambient Canvas Engine
 * 100% offline, lightweight, high-performance canvas backdrop.
 * Living interactive particle field responding to cursor and adapting colors to active theme.
 */

export function initAmbientCanvas(canvasId = 'ambient-canvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return null;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  const mouse = { x: -9999, y: -9999 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  // 40 Ambient living particles
  const PARTICLE_COUNT = 42;
  const particles = [];
  const matrixChars = ['0', '1', 'λ', 'π', '{', '}', ';', '>', '<', '⚡', '★', '◆', '▲'];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2.2 + 1.2,
      baseAlpha: Math.random() * 0.4 + 0.3,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.02,
      char: matrixChars[Math.floor(Math.random() * matrixChars.length)]
    });
  }

  let currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';

  function getPalette(theme) {
    switch (theme) {
      case 'light':
        return {
          particle: 'rgba(37, 99, 235, 0.45)',
          glow: 'rgba(59, 130, 246, 0.25)',
          line: 'rgba(37, 99, 235, 0.12)',
          accent: 'rgba(16, 185, 129, 0.4)'
        };
      case 'synthwave':
        return {
          particle: 'rgba(192, 132, 252, 0.65)',
          glow: 'rgba(244, 63, 94, 0.35)',
          line: 'rgba(168, 85, 247, 0.18)',
          accent: 'rgba(56, 189, 248, 0.6)'
        };
      case 'matrix':
        return {
          particle: 'rgba(34, 197, 94, 0.75)',
          glow: 'rgba(16, 185, 129, 0.4)',
          line: 'rgba(34, 197, 94, 0.22)',
          accent: 'rgba(74, 222, 128, 0.85)'
        };
      case 'dark':
      default:
        return {
          particle: 'rgba(56, 189, 248, 0.55)',
          glow: 'rgba(99, 102, 241, 0.35)',
          line: 'rgba(56, 189, 248, 0.14)',
          accent: 'rgba(129, 140, 248, 0.55)'
        };
    }
  }

  let animFrameId = null;

  function render() {
    ctx.clearRect(0, 0, width, height);
    const colors = getPalette(currentTheme);

    if (currentTheme === 'matrix') {
      ctx.font = '12px "Fira Code", monospace';
    }

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.pulse += p.pulseSpeed;
      p.x += p.vx;
      p.y += p.vy;

      // Wrap-around viewport edges smoothly
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;

      // Cursor proximity interaction
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.hypot(dx, dy);

      if (dist < 130 && dist > 0) {
        const force = (130 - dist) / 130;
        p.x -= (dx / dist) * force * 1.8;
        p.y -= (dy / dist) * force * 1.8;

        // Draw laser connector to cursor
        ctx.strokeStyle = colors.glow;
        ctx.lineWidth = 1.2 * force;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }

      // Draw particle or matrix glyph
      const dynamicSize = p.size + Math.sin(p.pulse) * 0.6;
      ctx.fillStyle = (i % 3 === 0) ? colors.accent : colors.particle;

      if (currentTheme === 'matrix') {
        ctx.fillText(p.char, p.x, p.y);
        if (Math.random() < 0.015) {
          p.char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        }
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.6, dynamicSize), 0, Math.PI * 2);
        ctx.fill();
      }

      // Constellation connectors
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const pDist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (pDist < 100) {
          ctx.strokeStyle = colors.line;
          ctx.lineWidth = 0.8 * (1 - pDist / 100);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    animFrameId = requestAnimationFrame(render);
  }

  animFrameId = requestAnimationFrame(render);

  return {
    setTheme: (newTheme) => {
      currentTheme = newTheme;
    },
    destroy: () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
    }
  };
}
