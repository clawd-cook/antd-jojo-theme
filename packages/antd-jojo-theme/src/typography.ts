/**
 * JOJO type — fanbook stage serif for titles; condensed sans for UI chrome.
 * Display must read like the cream “JOJO” lockup, not Impact shout.
 */

/** Heavy classical serif — titles, watermarks, modal/card heads */
export const jojoFontDisplay =
  'Georgia, "Times New Roman", "Noto Serif SC", "Noto Serif", "Songti SC", "Hiragino Mincho ProN", serif';

/** Condensed sans — buttons, tags, segmented labels (boutique UI chrome) */
export const jojoFontUi =
  '"Arial Narrow", "Futura Condensed", "Helvetica Neue Condensed", "Gill Sans", sans-serif';

/** Default theme body stack — readable, slightly condensed */
export const jojoFontBody = `${jojoFontUi}, system-ui, sans-serif`;

export const jojoType = {
  display: jojoFontDisplay,
  ui: jojoFontUi,
  body: jojoFontBody,
  /** Stage watermark / hero lockup */
  watermarkWeight: 900,
  watermarkTracking: "0.04em",
  /** Heading tracking — serifs hate ultra-wide tracking */
  headingTracking: "0.02em",
  /** UI chrome uppercase tracking */
  chromeTracking: "0.08em",
} as const;
