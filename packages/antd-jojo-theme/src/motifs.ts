/**
 * Fashion hardware motifs — zippers, ladybugs, buckles.
 * Accents on seams / headers only — never stage wallpaper.
 */

const svg = (body: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">${body}</svg>`,
  )}")`;

/** Giorno ladybug brooch — 24×24 mark */
export const jojoMotifLadybug = svg(`
  <ellipse cx="32" cy="36" rx="18" ry="20" fill="#E8318A" stroke="#0A0A0C" stroke-width="3"/>
  <ellipse cx="32" cy="22" rx="10" ry="9" fill="#0A0A0C"/>
  <line x1="32" y1="22" x2="32" y2="56" stroke="#0A0A0C" stroke-width="2.5"/>
  <circle cx="24" cy="34" r="3.5" fill="#0A0A0C"/>
  <circle cx="40" cy="34" r="3.5" fill="#0A0A0C"/>
  <circle cx="24" cy="46" r="3" fill="#0A0A0C"/>
  <circle cx="40" cy="46" r="3" fill="#0A0A0C"/>
  <circle cx="32" cy="52" r="2.5" fill="#0A0A0C"/>
`);

/** Gold zipper pull */
export const jojoMotifZipPull = svg(`
  <rect x="26" y="6" width="12" height="22" rx="2" fill="#F0C14A" stroke="#0A0A0C" stroke-width="2.5"/>
  <path d="M20 28 H44 L38 58 H26 Z" fill="#F0C14A" stroke="#0A0A0C" stroke-width="2.5" stroke-linejoin="round"/>
  <circle cx="32" cy="16" r="3" fill="#0A0A0C"/>
`);

/** Horizontal zipper tape (tile) — use as repeating background */
export const jojoMotifZipTape = `url("data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="16" viewBox="0 0 48 16">
  <rect width="48" height="16" fill="#FFFEF8"/>
  <rect x="0" y="6" width="48" height="4" fill="#0A0A0C"/>
  <rect x="2" y="2" width="8" height="5" rx="1" fill="#F0C14A" stroke="#0A0A0C" stroke-width="1"/>
  <rect x="14" y="9" width="8" height="5" rx="1" fill="#F0C14A" stroke="#0A0A0C" stroke-width="1"/>
  <rect x="26" y="2" width="8" height="5" rx="1" fill="#F0C14A" stroke="#0A0A0C" stroke-width="1"/>
  <rect x="38" y="9" width="8" height="5" rx="1" fill="#F0C14A" stroke="#0A0A0C" stroke-width="1"/>
</svg>
`)})")`;

export const jojoMotifZipTapeSize = "48px 16px";

/** Vertical zipper tape */
export const jojoMotifZipTapeY = `url("data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="48" viewBox="0 0 16 48">
  <rect width="16" height="48" fill="#FFFEF8"/>
  <rect x="6" y="0" width="4" height="48" fill="#0A0A0C"/>
  <rect x="2" y="2" width="5" height="8" rx="1" fill="#F0C14A" stroke="#0A0A0C" stroke-width="1"/>
  <rect x="9" y="14" width="5" height="8" rx="1" fill="#F0C14A" stroke="#0A0A0C" stroke-width="1"/>
  <rect x="2" y="26" width="5" height="8" rx="1" fill="#F0C14A" stroke="#0A0A0C" stroke-width="1"/>
  <rect x="9" y="38" width="5" height="8" rx="1" fill="#F0C14A" stroke="#0A0A0C" stroke-width="1"/>
</svg>
`)}")`;

export const jojoMotifZipTapeYSize = "16px 48px";

/** Metal buckle / badge */
export const jojoMotifBuckle = svg(`
  <rect x="8" y="18" width="48" height="28" rx="3" fill="#F0C14A" stroke="#0A0A0C" stroke-width="3"/>
  <rect x="16" y="24" width="32" height="16" rx="2" fill="none" stroke="#0A0A0C" stroke-width="2.5"/>
  <rect x="28" y="12" width="8" height="12" fill="#F0C14A" stroke="#0A0A0C" stroke-width="2"/>
`);

/** Heart cutout mark (Giorno chest) */
export const jojoMotifHeart = svg(`
  <path d="M32 54 C12 38 8 24 18 16 C24 11 30 14 32 20 C34 14 40 11 46 16 C56 24 52 38 32 54Z"
    fill="#E8318A" stroke="#0A0A0C" stroke-width="3"/>
`);

/** CSS class names for opt-in / automatic accents */
export const jojoMotifClass = {
  zip: "jojo-zip",
  zipY: "jojo-zip-y",
  ladybug: "jojo-ladybug",
  buckle: "jojo-buckle",
  heart: "jojo-heart",
} as const;
