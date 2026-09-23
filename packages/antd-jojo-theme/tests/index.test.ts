import { expect, test } from "vite-plus/test";

import { jojoColors, jojoTheme } from "../src/index.ts";

test("jojoColors exposes Araki ink + stand palette", () => {
  expect(jojoColors.ink).toBe("#0A0A0A");
  expect(jojoColors.purple).toBe("#7B1FA2");
  expect(jojoColors.gold).toBe("#FFC107");
});

test("jojoTheme uses bold outlines and sharp radii", () => {
  expect(jojoTheme.token?.lineWidth).toBe(3);
  expect(jojoTheme.token?.borderRadius).toBe(2);
  expect(jojoTheme.token?.colorPrimary).toBe(jojoColors.purple);
  expect(jojoTheme.token?.colorBorder).toBe(jojoColors.ink);
  expect(jojoTheme.components?.Button?.fontWeight).toBe(800);
});
