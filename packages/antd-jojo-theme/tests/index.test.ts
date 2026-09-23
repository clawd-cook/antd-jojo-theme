import { expect, test } from "vite-plus/test";

import {
  jojoColors,
  jojoFontDisplay,
  jojoFontUi,
  jojoHatch,
  jojoHatchVolume,
  jojoInkFilterId,
  jojoInkFilterSvg,
  jojoMotifBuckle,
  jojoMotifClass,
  jojoMotifLadybug,
  jojoMotifZipPull,
  jojoMotifZipTape,
  jojoMotion,
  jojoPoseFigure,
  jojoRootClass,
  jojoTheme,
  jojoType,
} from "../src/index.ts";

test("jojoColors keeps ink-first stage", () => {
  expect(jojoColors.ink).toBe("#0A0A0C");
  expect(jojoColors.sky).toBe("#E8E4EE");
  expect(jojoColors.paper).toBe("#FFFEF8");
  expect(jojoColors.purple).toBe("#E8318A");
});

test("jojoHatch is ink parallel lines for volume", () => {
  expect(jojoHatch).toContain("repeating-linear-gradient");
  expect(jojoHatchVolume).toContain("linear-gradient");
});

test("jojoTheme wires primary and motion", () => {
  expect(jojoTheme.token?.colorPrimary).toBe(jojoColors.purple);
  expect(jojoTheme.token?.colorBgBase).toBe(jojoColors.sky);
  expect(jojoTheme.token?.motionDurationMid).toBe(jojoMotion.mid);
  expect(jojoTheme.token?.fontFamily).toContain("Arial Narrow");
  expect(jojoRootClass).toBe("jojo-theme");
});

test("jojoInkFilterSvg exposes manga rough-ink defs", () => {
  expect(jojoInkFilterId).toBe("jojo-ink-rough");
  expect(jojoInkFilterSvg).toContain(`id="${jojoInkFilterId}"`);
});

test("jojoPoseFigure exposes soft group-portrait leans", () => {
  expect(jojoPoseFigure.left).toContain("translate");
  expect(jojoPoseFigure.center).toContain("scale");
});

test("jojoType exposes display serif and UI sans stacks", () => {
  expect(jojoFontDisplay.toLowerCase()).toContain("georgia");
  expect(jojoFontUi.toLowerCase()).toContain("arial narrow");
  expect(jojoType.display).toBe(jojoFontDisplay);
  expect(jojoType.ui).toBe(jojoFontUi);
});

test("jojoMotifs expose fashion hardware data-URIs", () => {
  expect(jojoMotifLadybug).toContain("data:image/svg+xml");
  expect(jojoMotifZipPull).toContain("data:image/svg+xml");
  expect(jojoMotifZipTape).toContain("data:image/svg+xml");
  expect(jojoMotifBuckle).toContain("data:image/svg+xml");
  expect(jojoMotifClass.ladybug).toBe("jojo-ladybug");
  expect(jojoMotifClass.zip).toBe("jojo-zip");
});
