/**
 * Audio Synthesizer Module
 * Uses Web Audio API to create joyful retro game sound effects.
 * 100% offline, zero audio assets required!
 */

let audioCtx = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playSound(type = 'click', isEnabled = true) {
  if (!isEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;

    switch (type) {
      case 'click': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.06);
        break;
      }

      case 'star': {
        // High sparkling bell chime
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const start = now + (i * 0.06);

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, start);

          gain.gain.setValueAtTime(0.12, start);
          gain.gain.exponentialRampToValueAtTime(0.001, start + 0.3);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(start);
          osc.stop(start + 0.35);
        });
        break;
      }

      case 'success': {
        // Joyful fanfare: C - E - G - high C
        const notes = [
          { f: 523.25, d: 0.1 },  // C5
          { f: 659.25, d: 0.1 },  // E5
          { f: 783.99, d: 0.12 }, // G5
          { f: 1046.5, d: 0.35 }  // C6
        ];
        let offset = 0;
        notes.forEach(({ f, d }) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const t = now + offset;

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, t);

          gain.gain.setValueAtTime(0.2, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + d);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t);
          osc.stop(t + d + 0.05);

          offset += d * 0.85;
        });
        break;
      }

      case 'tryAgain': {
        // Playful cartoon "boing"
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(150, now + 0.25);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.26);
        break;
      }

      case 'badge': {
        // Power-up ascending flourish
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.4);

        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.46);
        break;
      }
    }
  } catch (e) {
    console.debug('Audio error:', e);
  }
}
