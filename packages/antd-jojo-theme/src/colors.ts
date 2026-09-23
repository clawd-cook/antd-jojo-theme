/**
 * Hirohiko Araki / JoJo palette:
 * ink outlines, marble paper, stand-energy purple, gold, crimson, cyan.
 */
export const jojoColors = {
  ink: "#0A0A0A",
  inkMuted: "#2A2A2A",
  marble: "#FFF3E6",
  marbleBright: "#FFFBF5",
  marbleDeep: "#FFE4C4",
  purple: "#7B1FA2",
  purpleHot: "#9C27B0",
  purpleDeep: "#4A148C",
  magenta: "#E91E63",
  gold: "#FFC107",
  goldDeep: "#FF8F00",
  crimson: "#D50000",
  teal: "#00BFA5",
  cyan: "#00BCD4",
  standPink: "#FF4081",
} as const;

export type JojoColorKey = keyof typeof jojoColors;
