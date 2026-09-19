let audioCtx = null;
let enabled = true;

function ensureContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

// iPhone Safari の自動再生制限対策。ゲーム開始などユーザー操作の中で必ず一度呼び出す。
export function unlockAudio() {
  const ctx = ensureContext();
  if (!ctx) return;
  const buffer = ctx.createBuffer(1, 1, 22050);
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.connect(ctx.destination);
  source.start(0);
}

export function setSoundEnabled(on) {
  enabled = on;
}

function playTone({ freq, duration, type = "sine", startTime = 0, gain = 0.2, glideTo = null }) {
  const ctx = ensureContext();
  if (!ctx || !enabled) return;
  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);
  if (glideTo) {
    osc.frequency.exponentialRampToValueAtTime(glideTo, ctx.currentTime + startTime + duration);
  }
  gainNode.gain.setValueAtTime(gain, ctx.currentTime + startTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + startTime + duration);
  osc.connect(gainNode);
  gainNode.connect(ctx.destination);
  osc.start(ctx.currentTime + startTime);
  osc.stop(ctx.currentTime + startTime + duration + 0.05);
}

export function playCorrect() {
  playTone({ freq: 523.25, duration: 0.12, type: "triangle", startTime: 0, gain: 0.25 });
  playTone({ freq: 659.25, duration: 0.12, type: "triangle", startTime: 0.1, gain: 0.25 });
  playTone({ freq: 783.99, duration: 0.22, type: "triangle", startTime: 0.2, gain: 0.28 });
}

export function playWrong() {
  playTone({ freq: 220, duration: 0.18, type: "sawtooth", startTime: 0, gain: 0.15, glideTo: 160 });
}

export function playTimeUp() {
  playTone({ freq: 330, duration: 0.18, type: "square", startTime: 0, gain: 0.15 });
  playTone({ freq: 220, duration: 0.3, type: "square", startTime: 0.18, gain: 0.15 });
}

export function playTick() {
  playTone({ freq: 880, duration: 0.05, type: "sine", startTime: 0, gain: 0.08 });
}

export function playTitleGet() {
  playTone({ freq: 659.25, duration: 0.1, type: "triangle", startTime: 0, gain: 0.22 });
  playTone({ freq: 783.99, duration: 0.1, type: "triangle", startTime: 0.1, gain: 0.22 });
  playTone({ freq: 987.77, duration: 0.25, type: "triangle", startTime: 0.2, gain: 0.26 });
}
