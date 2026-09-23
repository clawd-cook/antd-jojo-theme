import { expect, test } from "vite-plus/test";

import {
  jojoColors,
  jojoHatch,
  jojoHatchFashion,
  jojoMagentaShadow,
  jojoMotion,
  jojoRootClass,
  jojoTheme,
} from "../src/index.ts";

test("jojoColors exposes Araki clash palette", () => {
  expect(jojoColors.ink).toBe("#0D0D0D");
  expect(jojoColors.sky).toBe("#FFE566");
  expect(jojoColors.purple).toBe("#6B1FA0");
  expect(jojoColors.magenta).toBe("#E6007A");
  expect(jojoColors.gold).toBe("#F5C518");
  expect(jojoMagentaShadow).toContain(jojoColors.magenta);
  expect(jojoHatchFashion).toContain("repeating-linear-gradient");
});

test("jojoTheme uses thick ink, zero radius, hard shadows, pose motion", () => {
  expect(jojoTheme.token?.lineWidth).toBe(4);
  expect(jojoTheme.token?.borderRadius).toBe(0);
  expect(jojoTheme.token?.controlOutlineWidth).toBe(0);
  expect(jojoTheme.token?.colorPrimary).toBe(jojoColors.purple);
  expect(jojoTheme.token?.colorBgBase).toBe(jojoColors.sky);
  expect(jojoTheme.token?.colorBorder).toBe(jojoColors.ink);
  expect(jojoTheme.token?.colorLink).toBe(jojoColors.magenta);
  expect(jojoTheme.token?.motionDurationMid).toBe(jojoMotion.mid);
  expect(jojoTheme.token?.motionEaseInOut).toBe(jojoMotion.ease);
  expect(jojoTheme.components?.Button?.fontWeight).toBe(900);
  expect(jojoTheme.components?.Segmented?.itemSelectedBg).toBe(jojoColors.magenta);
  expect(jojoTheme.components?.Layout?.triggerBg).toBe(jojoColors.magenta);
  expect(jojoHatch).toContain("repeating-linear-gradient");
  expect(jojoRootClass).toBe("jojo-theme");
  expect(jojoTheme.cssVar).toEqual({ key: "jojo" });
});
