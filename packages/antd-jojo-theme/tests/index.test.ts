import { expect, test } from "vite-plus/test";

import { jojoColors, jojoHatch, jojoTheme } from "../src/index.ts";

test("jojoColors exposes Araki Golden Wind clash palette", () => {
  expect(jojoColors.ink).toBe("#0D0D0D");
  expect(jojoColors.sky).toBe("#FFE566");
  expect(jojoColors.purple).toBe("#6B1FA0");
  expect(jojoColors.magenta).toBe("#E6007A");
  expect(jojoColors.gold).toBe("#F5C518");
});

test("jojoTheme uses thick ink, zero radius, hard shadows", () => {
  expect(jojoTheme.token?.lineWidth).toBe(4);
  expect(jojoTheme.token?.borderRadius).toBe(0);
  expect(jojoTheme.token?.colorPrimary).toBe(jojoColors.purple);
  expect(jojoTheme.token?.colorBgBase).toBe(jojoColors.sky);
  expect(jojoTheme.token?.colorBorder).toBe(jojoColors.ink);
  expect(jojoTheme.components?.Button?.fontWeight).toBe(900);
  expect(jojoHatch).toContain("repeating-linear-gradient");
});
