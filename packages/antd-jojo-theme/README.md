<div align="center">

<img src="../../logo.svg" alt="antd-jojo-theme" width="96" height="96" />

# @clawd-cook/antd-jojo-theme

**Ant Design theme — JoJo Part 5 _Vento Aureo_ / Golden Wind**

[![npm version](https://img.shields.io/npm/v/@clawd-cook/antd-jojo-theme?style=flat-square)](https://www.npmjs.com/package/@clawd-cook/antd-jojo-theme)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://github.com/clawd-cook/antd-jojo-theme/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![antd](https://img.shields.io/badge/antd-%3E%3D5-1677ff?style=flat-square)](https://ant.design)
[![Playground](https://img.shields.io/badge/Playground-live-E15FB6?style=flat-square&labelColor=1A1218)](https://clawd-cook.github.io/antd-jojo-theme/)

[Features](#features) • [Install](#installation) • [Usage](#usage) • [API](#api) • [Palette](#palette) • [Playground](#playground)

</div>

Passione couture as UI: Gold Experience pink, antique buckle gold, ladybug-dot fabric, jewelry badge radius, light JOJO pose skew — Hirohiko Araki _Part 5_ energy, not neo-brutal bricks and not soft SaaS chrome.

> [!NOTE]
> **Design keywords:** Vento Aureo · ladybug emblems · zipper / diamond weave · Passione pink + antique gold · Naples haze · thin ink contours · gold/rose stamp shadows · jewelry radius — not neo-brutalism, not soft anime.

## Features

- **Ready-made `ThemeConfig`** — Button, Input, Card, Modal, Layout, Menu, Table, Segmented, Drawer, and more
- **VA / Passione palette** — wine ink, Naples haze, Gold Experience pink, clash rose, buckle gold
- **Jewelry stamp shadows** — gold / rose offsets (`2px` / `3px` / `5px`), not fat black bricks
- **Optional `styles.css`** — pose skew, paper grain, 荒木线, rough ink shells under `.jojo-theme`
- **Manga ink filters** — `jojoInkFilterSvg` for hand-wobbled contours (text stays crisp)
- **Fashion + print textures** — screentone, grain, speed-lines helpers
- **Badge geometry** — radius `4` / `6`; thin contours; focus rings off
- **antd 5+ peer** — `ConfigProvider theme={jojoTheme}`

## Installation

```bash
pnpm add @clawd-cook/antd-jojo-theme antd
```

```bash
npm install @clawd-cook/antd-jojo-theme antd
```

```bash
yarn add @clawd-cook/antd-jojo-theme antd
```

> [!IMPORTANT]
> `antd` `>= 5.0.0` is a peer dependency and must be installed in your app.

## Usage

Pass `jojoTheme`, import the chrome CSS, and inject the manga ink filter SVG once:

```tsx
import { ConfigProvider, Button, Card } from "antd";
import { jojoTheme, jojoRootClass, jojoInkFilterSvg } from "@clawd-cook/antd-jojo-theme";
import "@clawd-cook/antd-jojo-theme/styles.css";

export function App() {
  return (
    <div className={jojoRootClass}>
      <div dangerouslySetInnerHTML={{ __html: jojoInkFilterSvg }} aria-hidden />
      <ConfigProvider theme={jojoTheme}>
        <Card>
          <Button type="primary">ゴゴゴ Ready</Button>
        </Card>
      </ConfigProvider>
    </div>
  );
}
```

Tokens alone still work without `styles.css`. The CSS layer adds paper grain, 荒木线 screentone, rough ink border shells, runway pose motion, and boutique uppercase type. Without `jojoInkFilterSvg`, borders stay sharp (filter simply no-ops).

Default export is the same theme object:

```tsx
import jojoTheme from "@clawd-cook/antd-jojo-theme";
```

Manual fabric / shadow without the CSS file:

```tsx
import { jojoColors, jojoHatch, jojoHatchSize, jojoInkShadow } from "@clawd-cook/antd-jojo-theme";

<div
  style={{
    backgroundImage: jojoHatch,
    backgroundSize: jojoHatchSize,
    boxShadow: jojoInkShadow,
    border: `2px solid ${jojoColors.ink}`,
    borderRadius: 6,
  }}
/>;
```

## API

| Export                                 | Type                        | Description                                     |
| -------------------------------------- | --------------------------- | ----------------------------------------------- |
| `jojoTheme`                            | `ThemeConfig`               | Full Ant Design theme (also the default export) |
| `jojoColors`                           | `Readonly<{ … }>`           | Named palette tokens                            |
| `JojoColorKey`                         | `type`                      | Keys of `jojoColors`                            |
| `jojoRootClass`                        | `"jojo-theme"`              | Root class for scoped `styles.css`              |
| `jojoMotion`                           | `{ fast, mid, slow, ease }` | Pose-snap durations + easing                    |
| `jojoPoseEase`                         | `string`                    | `cubic-bezier(0.22, 1, 0.36, 1)`                |
| `jojoPoseSkew` / `Hover` / `Active`    | `string`                    | Transform strings for custom CSS                |
| `jojoInkShadow`                        | `string`                    | Layered ink + gold stamp                        |
| `jojoInkShadowSm`                      | `string`                    | Smaller ink + gold stamp                        |
| `jojoInkShadowLg`                      | `string`                    | Larger ink + deep gold stamp                    |
| `jojoMagentaShadow` / `jojoGoldShadow` | `string`                    | Jewelry accent stamps                           |
| `jojoInkFilterSvg` / `jojoInkFilterId` | `string`                    | Manga rough-ink SVG filters (inject once)       |
| `jojoPaperGrain` / `Size`              | `string`                    | Printed paper noise                             |
| `jojoSpeedLines`                       | `string`                    | Corner concentration lines                      |
| `jojoHatch`                            | `string`                    | Screentone + 荒木线 `backgroundImage`           |
| `jojoHatchSize`                        | `string`                    | `11px 13px` hatch tile                          |
| `jojoHatchDense`                       | `string`                    | Dense ink hatch                                 |
| `jojoHatchFashion`                     | `string`                    | Fashion flecks + ink tooth                      |
| `jojoHatchFashionSize`                 | `string`                    | `13px 11px`                                     |
| `styles.css`                           | CSS                         | Grain / rough shells / pose / uppercase chrome  |

### Theme highlights

| Token area     | Choice                                 |
| -------------- | -------------------------------------- |
| Primary        | Gold Experience pink `#E15FB6` (VA)    |
| Link / clash   | Rose `#FF39B7`                         |
| Layout / page  | Naples haze `#F4E4A6`                  |
| Containers     | Ivory paper `#FFF9F2`                  |
| Borders        | Wine ink `#1A1218`, `lineWidth: 2`     |
| Focus rings    | Off (`controlOutlineWidth: 0`)         |
| Radius         | `4` / `6` jewelry badge                |
| Shadows        | Layered wine ink + gold stamps         |
| Motion         | Pose snap `0.08s` / `0.12s` / `0.18s`  |
| Control height | `44` / `36` / `52`                     |
| Type           | Condensed editorial sans, weight `900` |

## Palette

| Token        |    Hex    | Role                             |
| ------------ | :-------: | -------------------------------- |
| `ink`        | `#1A1218` | Wine contour / primary text      |
| `inkMuted`   | `#6B4A5E` | Secondary text                   |
| `shade`      | `#301623` | Diavolo / sider night            |
| `sky`        | `#F4E4A6` | Naples haze stage                |
| `skyHot`     | `#E8C547` | Hot stage accent                 |
| `paper`      | `#FFF9F2` | Container surfaces               |
| `paperDeep`  | `#F5E6C8` | Secondary panel / hover          |
| `purple`     | `#E15FB6` | Gold Experience primary (VA)     |
| `purpleHot`  | `#F06BC9` | Primary hover                    |
| `purpleDeep` | `#801B5F` | Primary pressed (VA3)            |
| `magenta`    | `#FF39B7` | Clash accent / links             |
| `gold`       | `#D4BA50` | Buckle / headers / warning (VA2) |
| `goldDeep`   | `#8E7C32` | Deeper metal (VA4)               |
| `crimson`    | `#C41E3A` | Error                            |
| `teal`       | `#2BB5A0` | Success                          |
| `cyan`       | `#0879C2` | Info                             |
| `standAura`  | `#F5C4E0` | Ladybug wash / selected bg       |

Color philosophy: **Passione couture**. Pink + gold clash is intentional — like a Part 5 cover, not product-photo realism.

> [!TIP]
> Prefer `jojoInkShadow*` (gold stamps) over blurred elevation _and_ over fat black neo-brutal offsets.

## Playground

- **Live:** [clawd-cook.github.io/antd-jojo-theme](https://clawd-cook.github.io/antd-jojo-theme/)
- **Local** (monorepo root):

```bash
vp install
vp run playground:dev
```

## Development

This package lives in the [antd-jojo-theme](https://github.com/clawd-cook/antd-jojo-theme) monorepo.

```bash
# from packages/antd-jojo-theme
vp run build
vp test
vp check
```

Design system: repo root [`DESIGN.md`](../../DESIGN.md).
