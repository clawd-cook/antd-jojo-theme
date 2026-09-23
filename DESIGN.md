# Design System: Ant Design JOJO Theme

**Project ID:** N/A (local design system — `@clawd-cook/antd-jojo-theme`; no Stitch project linked)

**Anchor:** _JoJo’s Bizarre Adventure_ Part 5 — **Vento Aureo / 黄金之风**, matched to the **fashion group still**: Giorno hot-pink, Mista cerulean diamond lattice, Bucciarati white + black teardrops + gold zippers, Abbacchio violet, hard black cell shade.

## 1. Visual Theme & Atmosphere

**Priority:** Pose (A) → **Line / 荒木线 (B)** → Fashion motifs → Color (last).

Recognition comes from **sculpted volume via ink lines** and **group-portrait composition**. Color is an optional mood filter. Grayscale must still feel like JoJo: hatched shade, rough contours, interlocking panels.

**Avoid:** motif wallpaper as the whole identity, flat dual-tone color slabs posing as “cell shade”, equal SaaS grids, soft blur glass, neo-brutal “thick black box + one accent color”.

## 2. Color Palette & Roles

Pulled from the Golden Wind group still (not a beige brand kit):

| Descriptive name | Hex       | Role                               |
| ---------------- | --------- | ---------------------------------- |
| Manga Ink        | `#0A0A0C` | Thick contours, cell shade         |
| Rose Muted       | `#4A3A58` | Secondary text                     |
| Abbacchio Violet | `#2A1840` | Sider / dark rails                 |
| Lavender Stage   | `#C5BDD4` | Page ground (anime still backdrop) |
| Couture White    | `#FFFEF8` | Panels                             |
| Giorno Pink      | `#E8318A` | Primary                            |
| Hot Pink         | `#FF4AA3` | Primary hover / cell lite          |
| Passione Deep    | `#9B1860` | Primary pressed                    |
| Clash Magenta    | `#FF2D9B` | Links / drama                      |
| Zipper Gold      | `#F0C14A` | Headers / metal                    |
| Mista Blue       | `#1E6BDB` | Diamond lattice + info             |
| Ladybug Wash     | `#FFB3D9` | Soft selected ground               |

Patterns: `jojoDiamond` (Mista lattice), `jojoTeardrop` (Bucciarati spots), `jojoHatch` (荒木线), `jojoCellShade` (hard dual-tone).

## 3. Typography Rules

Two stacks — do not collapse into one Impact shout.

| Role          | Stack                                               | Use                                                            |
| ------------- | --------------------------------------------------- | -------------------------------------------------------------- |
| **Display**   | Georgia / Times / Noto Serif SC — `jojoFontDisplay` | H1–H3, card/modal heads, table headers, stage “JOJO” watermark |
| **UI chrome** | Arial Narrow / Futura Condensed — `jojoFontUi`      | Buttons, tags, tabs, segmented                                 |
| **Body**      | UI stack + system — `jojoFontBody`                  | Default `ThemeConfig.fontFamily`                               |

Rules:

- Display titles: weight 900, tracking ~`0.02em`, **no forced uppercase** (fanbook mixed case / CJK welcome).
- UI chrome: uppercase + wider tracking (`0.08em`) is OK — boutique label, not the hero.
- Avoid rainbow text-shadow; one soft ink offset is enough.
- Watermark “JOJO” behind the cast uses Display stack, low opacity.

## 4. Component Stylings

- **Buttons:** Slight jewelry radius (`4px`). Wine Ink outline with a **rough ink shell** (`::before` + SVG turbulence filter — never filter the text). Depth = layered wine ink + gold stamp. Primary = Gold Experience Pink on ivory type. Uppercase, bold. Resting skew `skewX(-2deg)`; hover strengthens the ink wobble.
- **Cards / Containers:** Soft badge radius (`6px`). Ivory fill with **screentone + 荒木线** and paper grain. Thin ink border + rough shell + gold/ink stamp shadow. Feels like a printed panel on Naples haze.
- **Inputs / Forms:** Same badge language — `4px` radius, paper grain interior. Hover flashes Clash Rose on the border. No soft glow rings.
- **Modals / Popovers / Notifications:** Patterned ivory panels; modal headers on Buckle Gold. Tooltips invert to wine ink with gold type.
- **Progress / Tracks:** Flat rose fill over Diavolo Shade rails with dense ink hatch; rough shell on the track only.
- **Alerts:** Menace pulse + corner **speed / concentration lines**.
- **Chrome (layout):** Naples Haze body with paper grain; gold header; Diavolo Shade sider.

## 5. Layout Principles — Pose first (凹姿势)

Araki: the defining trait is **pose**, not color. UI must pass a **grayscale test**: if you desaturate the screen, it should still read as a group portrait — interlocking figures, not a dashboard tile grid.

### Pose grammar (playground / custom chrome)

| Rule               | Meaning                       | CSS / layout cue                                                    |
| ------------------ | ----------------------------- | ------------------------------------------------------------------- |
| **Soft lean**      | Fashion lean ≠ spinning boxes | `rotate` ≤ ~2°; overlap mainly from **translate + negative margin** |
| **Protagonist**    | Quiet presence                | Center `scale(~1.04)` + higher z-index — avoid cartoon scale        |
| **Interlock**      | Bodies overlap                | Moderate negative margins; cover neighbors without hard twist       |
| **Cascade**        | Stagger inside a figure       | Even children `translateY` only — **no extra rotate on children**   |
| **Title as stage** | Type behind cast              | Soft “JOJO” watermark, little/no skew                               |
| **Anti-stiffness** | Keep it alive                 | Prefer displacement over skew; transform-origin near “joints”       |

**Anti-patterns:** equal columns; uniform hard `skewX`; child rotate stacked on parent rotate; title safely above a clean card.

Color, hatch, and motifs are secondary layers — applied _after_ pose reads correctly in grayscale.

### Line grammar (B) — 荒木线 / volume by hatch

| Rule                   | Meaning                        | Implementation                                                         |
| ---------------------- | ------------------------------ | ---------------------------------------------------------------------- |
| **Hatch = shade**      | Parallel ink lines sculpt form | `jojoHatch` / `jojoHatchDense` / `jojoHatchVolume`                     |
| **Clear → lined**      | Lit face clean; fold hatched   | Cell shade is **line split**, not pink slab                            |
| **Variable contour**   | Outline weight wobbles         | Rough SVG shell on borders only (text crisp)                           |
| **Motifs are accents** | Diamond / teardrop opt-in      | `.jojo-panel-diamond` / `.jojo-panel-teardrop` — never stage wallpaper |
| **Quiet stage**        | Paper tooth only               | `.jojo-theme` uses grain, not blue lattice                             |

**Anti-patterns:** full-bleed fashion patterns; soft CSS gradients for volume; uniform 4px fortress borders without hatch.

### Fashion grammar (C) — 时装零件 on seams

Hardware is **couture accent**, not wallpaper. Zippers, ladybugs, buckles sit on edges / headers / affordances — never tiled across the stage.

| Rule                  | Meaning                         | Implementation                                                     |
| --------------------- | ------------------------------- | ------------------------------------------------------------------ |
| **Seam = zipper**     | Horizontal cut reads as tape    | `Divider` → `jojoMotifZipTape`; opt-in `.jojo-zip` / `.jojo-zip-y` |
| **Pull = affordance** | Expand control is a zip slider  | `Collapse` expand icon → `jojoMotifZipPull`                        |
| **Brooch = badge**    | One mark on the garment header  | `Card` head / primary `Button` trailing edge → `jojoMotifLadybug`  |
| **Buckle = chip**     | Small metal clasp on tags       | default `Tag` → `jojoMotifBuckle`                                  |
| **Opt-in stamps**     | Heart / ladybug / buckle corner | `.jojo-ladybug` / `.jojo-buckle` / `.jojo-heart`                   |

**Anti-patterns:** repeating ladybugs as background; zipper tiles filling card bodies; motif density competing with pose/hatch.

## 6. Package delivery

| Layer                                             | What it does                                            |
| ------------------------------------------------- | ------------------------------------------------------- |
| `jojoTheme`                                       | Ant Design `ThemeConfig` — tokens + component overrides |
| `jojoColors` / shadows / hatch / grain            | Programmatic tokens for custom surfaces                 |
| `jojoInkFilterSvg` / `jojoInkFilterId`            | Manga rough-ink SVG filters (inject once)               |
| `jojoMotion` / `jojoPoseSkew*` / `jojoPoseFigure` | Pose timing + group-portrait transforms                 |
| `jojoFontDisplay` / `jojoFontUi` / `jojoType`     | Serif stage titles + condensed UI chrome                |
| `jojoMotif*` / `jojoMotifClass`                   | Fashion hardware SVG data-URIs + opt-in class names     |
| `styles.css` + `jojoRootClass`                    | Scoped chrome: grain, hatch, rough shells, type, pose   |

Recommended consumer setup:

```tsx
import { ConfigProvider } from "antd";
import { jojoTheme, jojoRootClass, jojoInkFilterSvg } from "@clawd-cook/antd-jojo-theme";
import "@clawd-cook/antd-jojo-theme/styles.css";

<div className={jojoRootClass}>
  <div dangerouslySetInnerHTML={{ __html: jojoInkFilterSvg }} aria-hidden />
  <ConfigProvider theme={jojoTheme}>{/* … */}</ConfigProvider>
</div>;
```

## Prompting Keywords (for Stitch / generative UI)

> JoJo Part 5 Vento Aureo Golden Wind, hand-inked manga contours, printed paper grain, screentone and Araki hatch lines, rough ink borders, Giorno ladybug emblems, Passione pink and antique gold, Naples warm gold haze, ink bleed titles, concentration speed lines, fashion-editorial condensed type, light JOJO pose skew, not neo-brutalism, not clean vector UI, not soft anime, no frosted glass
