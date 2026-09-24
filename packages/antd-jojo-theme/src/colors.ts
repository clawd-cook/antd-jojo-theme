/**
 * JOJO tokens — line & volume first (荒木线), color second.
 * Pose lives in motion.ts / playground; here we define ink that sculpts form.
 */
export const jojoColors = {
  /** Heavy manga ink */
  ink: "#0A0A0C",
  inkMuted: "#4A3A58",
  /** Deep shade for rails (can sit under hatch) */
  shade: "#2A1840",
  /** Quiet stage — paper-adjacent, not a color stunt */
  sky: "#E8E4EE",
  skyHot: "#D4CEDD",
  /** Couture white panel */
  paper: "#FFFEF8",
  paperDeep: "#F2EEF6",
  /** Accent pink (secondary to line) */
  purple: "#E8318A",
  purpleHot: "#FF4AA3",
  purpleDeep: "#9B1860",
  magenta: "#FF2D9B",
  gold: "#F0C14A",
  goldDeep: "#C4921E",
  crimson: "#C41E3A",
  teal: "#2BB5A0",
  cyan: "#1E6BDB",
  standAura: "#F5E8F0",
} as const;

export type JojoColorKey = keyof typeof jojoColors;

/** Cast shadow — ink stamp (volume cue, not neo-brutal brick fetish) */
export const jojoInkShadow = `3px 4px 0 ${jojoColors.ink}`;
export const jojoInkShadowLg = `5px 6px 0 ${jojoColors.ink}`;
export const jojoInkShadowSm = `2px 2px 0 ${jojoColors.ink}`;

export const jojoMagentaShadow = `2px 3px 0 ${jojoColors.magenta}`;
export const jojoGoldShadow = `2px 3px 0 ${jojoColors.gold}`;

/** Quiet paper tooth — support for line work, not the hero */
export const jojoPaperGrain = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
    <filter id='g'>
      <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/>
      <feColorMatrix values='0 0 0 0 0.04  0 0 0 0 0.04  0 0 0 0 0.05  0 0 0 0.35 0'/>
    </filter>
    <rect width='100%' height='100%' filter='url(#g)' opacity='0.28'/>
  </svg>`,
)}")`;
export const jojoPaperGrainSize = "140px 140px";

/**
 * 荒木线 — parallel hatch that sculpts shade (faces / folds language).
 * Ink-only. This is the default volume tool.
 */
export const jojoHatch = [
  `repeating-linear-gradient(
    108deg,
    transparent 0,
    transparent 2.5px,
    rgba(10, 10, 12, 0.28) 2.5px,
    rgba(10, 10, 12, 0.28) 3.25px
  )`,
].join(", ");
export const jojoHatchSize = "8px 10px";

/** Dense cross-hatch for deep shade (jaw / under-fold) */
export const jojoHatchDense = [
  `repeating-linear-gradient(
    108deg,
    transparent 0,
    transparent 1.75px,
    rgba(10, 10, 12, 0.42) 1.75px,
    rgba(10, 10, 12, 0.42) 2.5px
  )`,
  `repeating-linear-gradient(
    -18deg,
    transparent 0,
    transparent 3.5px,
    rgba(10, 10, 12, 0.18) 3.5px,
    rgba(10, 10, 12, 0.18) 4.25px
  )`,
].join(", ");

/**
 * Soft hatch wash for panels — light area clear, shade corner lined.
 * Use as background-image with solid paper underneath.
 */
export const jojoHatchVolume = [
  `linear-gradient(
    145deg,
    transparent 0 48%,
    rgba(10, 10, 12, 0.04) 48% 100%
  )`,
  `repeating-linear-gradient(
    108deg,
    transparent 0,
    transparent 3px,
    rgba(10, 10, 12, 0.16) 3px,
    rgba(10, 10, 12, 0.16) 3.6px
  )`,
].join(", ");
export const jojoHatchVolumeSize = "auto, 9px 11px";

/** Optional fashion motifs — accents only, never stage wallpaper */
export const jojoDiamond = [
  `repeating-linear-gradient(
    60deg,
    transparent 0,
    transparent 10px,
    rgba(10, 10, 12, 0.14) 10px,
    rgba(10, 10, 12, 0.14) 11px
  )`,
  `repeating-linear-gradient(
    -60deg,
    transparent 0,
    transparent 10px,
    rgba(10, 10, 12, 0.1) 10px,
    rgba(10, 10, 12, 0.1) 11px
  )`,
].join(", ");
export const jojoDiamondSize = "24px 42px";

export const jojoTeardrop = [
  `radial-gradient(ellipse 2.5px 3.5px at 6px 8px, rgba(10, 10, 12, 0.55) 0 1.8px, transparent 2px)`,
  `radial-gradient(ellipse 2px 3px at 18px 20px, rgba(10, 10, 12, 0.45) 0 1.4px, transparent 1.6px)`,
].join(", ");
export const jojoTeardropSize = "28px 26px";

/** Fashion flecks — sparse, for headers only */
export const jojoHatchFashion = [
  jojoHatch,
  `radial-gradient(circle at 12px 10px, rgba(240, 193, 74, 0.35) 0 1.2px, transparent 1.4px)`,
].join(", ");
export const jojoHatchFashionSize = "14px 12px";

/** Concentration lines — drama panels / alerts (readable ink spokes) */
export const jojoSpeedLines = `repeating-conic-gradient(
  from 205deg at 100% 0%,
  transparent 0deg,
  transparent 5deg,
  rgba(10, 10, 12, 0.28) 5deg,
  rgba(10, 10, 12, 0.28) 6.5deg
)`;

/**
 * Cell shade via line: clear → hatched (no pink slab).
 * Mimics hard light edge + inked shadow.
 */
export const jojoCellShade = [
  `linear-gradient(
    145deg,
    ${jojoColors.paper} 0 46%,
    transparent 46% 100%
  )`,
  `repeating-linear-gradient(
    108deg,
    transparent 0,
    transparent 2.5px,
    rgba(10, 10, 12, 0.2) 2.5px,
    rgba(10, 10, 12, 0.2) 3.2px
  )`,
].join(", ");
