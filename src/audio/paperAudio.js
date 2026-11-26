// Pure Web Audio API procedural paper foley synthesizer
export function createPaperAudio() {
  let ctx = null;
  let muted = false;
  let noiseBuf = null;
  let lastHoverAt = 0;

  function ensureContext() {
    if (muted) return null;
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      ctx = new AudioCtx();
    }
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    if (!noiseBuf && ctx) {
      const len = ctx.sampleRate * 0.5;
      noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
      const data = noiseBuf.getChannelData(0);
      for (let i = 0; i < len; i++) {
        data[i] = Math.random() * 2 - 1;
      }
    }
    return ctx;
  }

  function playNoiseBurst({ duration = 0.14, freq = 1400, q = 1.6, gain = 0.14, type = 'bandpass', delay = 0 }) {
    const c = ensureContext();
    if (!c || !noiseBuf) return;
    const t0 = c.currentTime + delay;
    const src = c.createBufferSource();
    src.buffer = noiseBuf;

    const filter = c.createBiquadFilter();
    filter.type = type;
    filter.frequency.setValueAtTime(freq, t0);
    filter.Q.setValueAtTime(q, t0);

    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(0.001, gain), t0 + Math.min(0.02, duration * 0.2));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);

    src.connect(filter);
    filter.connect(g);
    g.connect(c.destination);
    src.start(t0);
    src.stop(t0 + duration + 0.02);
  }

  function playTone({ freq = 220, freqEnd = 160, duration = 0.12, gain = 0.08, type = 'triangle', delay = 0 }) {
    const c = ensureContext();
    if (!c) return;
    const t0 = c.currentTime + delay;
    const osc = c.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, freqEnd), t0 + duration);

    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(0.001, gain), t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);

    osc.connect(g);
    g.connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + duration + 0.02);
  }

  return {
    get muted() {
      return muted;
    },
    unlock() {
      ensureContext();
    },
    toggleMute() {
      muted = !muted;
      return muted;
    },
    playHover() {
      const now = performance.now();
      if (now - lastHoverAt < 90) return;
      lastHoverAt = now;
      playNoiseBurst({ duration: 0.055, freq: 1850, q: 2.0, gain: 0.055 });
    },
    playBookPull() {
      playNoiseBurst({ duration: 0.22, freq: 650, q: 1.1, gain: 0.16 });
      playTone({ freq: 135, freqEnd: 82, duration: 0.12, gain: 0.1 });
      playNoiseBurst({ duration: 0.16, freq: 2400, q: 1.8, gain: 0.08, delay: 0.14 });
    },
    playPageTurn() {
      // Paper brush bed + crease crackle grains + stop tick
      playNoiseBurst({ duration: 0.28, freq: 1300, q: 0.95, gain: 0.16 });
      playNoiseBurst({ duration: 0.035, freq: 3400, q: 3.0, gain: 0.09, delay: 0.04 });
      playNoiseBurst({ duration: 0.028, freq: 4100, q: 3.2, gain: 0.07, delay: 0.11 });
      playNoiseBurst({ duration: 0.05, freq: 920, q: 1.5, gain: 0.09, delay: 0.22 });
    },
    playFoldPop(scale = 1) {
      const f = 1900 + Math.random() * 900;
      playNoiseBurst({ duration: 0.09 * scale, freq: f, q: 2.2, gain: 0.075 });
    },
    playFootstep() {
      const pitch = 900 + Math.random() * 450;
      playNoiseBurst({ duration: 0.045, freq: pitch, q: 1.7, gain: 0.04 });
    },
    playStamp() {
      // Tactile wax stamp thud + warm chime
      playTone({ freq: 145, freqEnd: 65, duration: 0.13, gain: 0.18, type: 'sine' });
      playNoiseBurst({ duration: 0.06, freq: 950, q: 1.2, gain: 0.12 });
      playTone({ freq: 523.25, freqEnd: 523.25, duration: 0.32, gain: 0.06, type: 'sine', delay: 0.06 });
      playTone({ freq: 659.25, freqEnd: 659.25, duration: 0.36, gain: 0.05, type: 'sine', delay: 0.13 });
    },
  };
}
