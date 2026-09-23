/**
 * JOJO pose motion — pointing-hand torsion, snap not float.
 * Pair with ThemeConfig motion tokens and optional styles.css.
 */

export const jojoPoseEase = "cubic-bezier(0.22, 1, 0.36, 1)";

export const jojoMotion = {
  fast: "0.08s",
  mid: "0.12s",
  slow: "0.18s",
  ease: jojoPoseEase,
} as const;

/** Resting “JOJO pose” skew */
export const jojoPoseSkew = "skewX(-3deg)";
export const jojoPoseSkewHover = "skewX(-7deg) translate(-4px, -4px) scale(1.02)";
export const jojoPoseSkewActive = "skewX(2deg) translate(3px, 3px) scale(0.98)";

/** Root class for scoped JOJO chrome CSS (`import '@clawd-cook/antd-jojo-theme/styles.css'`) */
export const jojoRootClass = "jojo-theme";
