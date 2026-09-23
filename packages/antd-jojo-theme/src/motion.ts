/**
 * JOJO pose motion — soft fashion torsion (凹姿势), not cardboard tilt.
 * Prefer gentle lean + overlap over hard rotate/skew on whole columns.
 */

export const jojoPoseEase = "cubic-bezier(0.33, 1, 0.32, 1)";

export const jojoMotion = {
  fast: "0.1s",
  mid: "0.16s",
  slow: "0.24s",
  ease: jojoPoseEase,
} as const;

/** Single-control resting lean — light, not stamped */
export const jojoPoseSkew = "skewX(-1.5deg)";
export const jojoPoseSkewHover = "skewX(-3deg) translate(-2px, -3px)";
export const jojoPoseSkewActive = "skewX(0.5deg) translate(1px, 2px)";

/**
 * Group-portrait figures — soft lean + displacement.
 * Overlap comes from margin/translate; rotation stays under ~2°.
 */
export const jojoPoseFigure = {
  /** Rear-left: settles lower, slight counter-lean */
  left: "translate(-1.5%, 5%) rotate(-1.25deg)",
  /** Protagonist: presence via scale + lift, almost upright */
  center: "translateY(-2%) scale(1.045)",
  /** Right: leans in across the hip (mostly translate) */
  right: "translate(-7%, 9%) rotate(-1.75deg)",
  /** Cascade inside a figure — vertical stagger only, no extra spin */
  childOdd: "translateY(0)",
  childEven: "translateY(10px)",
} as const;

/** Root class for scoped JOJO chrome CSS */
export const jojoRootClass = "jojo-theme";
