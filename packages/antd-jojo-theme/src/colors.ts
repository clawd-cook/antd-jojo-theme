/**
 * Hirohiko Araki / JoJo’s Bizarre Adventure palette.
 * Bold ink outlines, vibrant saturated non-naturalistic clash color,
 * metal gold / jewelry accents, pop flat fills. Sky can be yellow;
 * surfaces can run violet — never product-photo realism.
 */
export const jojoColors = {
  /** Thick manga ink */
  ink: "#0D0D0D",
  inkMuted: "#2B2140",
  /** Chiaroscuro block shade (carved, not soft) */
  shade: "#1A0A2E",
  /** Araki cover yellow sky / stage ground */
  sky: "#FFE566",
  skyHot: "#FFD400",
  paper: "#FFF8E7",
  paperDeep: "#FFE08A",
  /** Fashion violet — primary brand force */
  purple: "#6B1FA0",
  purpleHot: "#9B2BC7",
  purpleDeep: "#3B0A5C",
  /** Haute-couture clash magenta */
  magenta: "#E6007A",
  /** Metal buckle / embroidery gold */
  gold: "#F5C518",
  goldDeep: "#D4A017",
  crimson: "#C41E3A",
  /** Unrealistic complementary teal */
  teal: "#00C9B1",
  cyan: "#00B7E0",
  standAura: "#B388FF",
} as const;

export type JojoColorKey = keyof typeof jojoColors;

/** Hard ink offset shadow — sculptural, not soft blur */
export const jojoInkShadow = `5px 5px 0 ${jojoColors.ink}`;
export const jojoInkShadowLg = `8px 8px 0 ${jojoColors.ink}`;
export const jojoInkShadowSm = `3px 3px 0 ${jojoColors.ink}`;

/** Jewelry / menace accent shadow (magenta stamp) */
export const jojoMagentaShadow = `4px 4px 0 ${jojoColors.magenta}`;
export const jojoGoldShadow = `4px 4px 0 ${jojoColors.gold}`;

/**
 * Crosshatching / screentone as CSS background layers.
 * Mimics dense hatching volume without soft gradients.
 */
export const jojoHatch = [
  `repeating-linear-gradient(
    45deg,
    transparent,
    transparent 3px,
    rgba(13, 13, 13, 0.14) 3px,
    rgba(13, 13, 13, 0.14) 4px
  )`,
  `repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 5px,
    rgba(13, 13, 13, 0.08) 5px,
    rgba(13, 13, 13, 0.08) 6px
  )`,
].join(", ");

export const jojoHatchDense = [
  `repeating-linear-gradient(
    45deg,
    transparent,
    transparent 2px,
    rgba(13, 13, 13, 0.22) 2px,
    rgba(13, 13, 13, 0.22) 3px
  )`,
  `repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 3px,
    rgba(26, 10, 46, 0.18) 3px,
    rgba(26, 10, 46, 0.18) 4px
  )`,
].join(", ");

/** Fashion-fabric pattern hatch (magenta + gold jewelry flecks) */
export const jojoHatchFashion = [
  jojoHatch,
  `repeating-linear-gradient(
    0deg,
    transparent,
    transparent 7px,
    rgba(230, 0, 122, 0.06) 7px,
    rgba(230, 0, 122, 0.06) 8px
  )`,
].join(", ");
