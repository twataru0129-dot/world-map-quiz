export function flagEmoji(code) {
  if (!code || code.length !== 2) return "🏳️";
  const upper = code.toUpperCase();
  const points = [...upper].map((c) => 0x1f1e6 - 65 + c.charCodeAt(0));
  return String.fromCodePoint(...points);
}

export function formatSeconds(value) {
  return `${value.toFixed(1)}びょう`;
}
