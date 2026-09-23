<div align="center">

<img src="../../logo.svg" alt="antd-jojo-theme" width="96" height="96" />

# @clawd-cook/antd-jojo-theme

**Ant Design theme inspired by Hirohiko Araki / JoJo's Bizarre Adventure**

[![npm version](https://img.shields.io/npm/v/@clawd-cook/antd-jojo-theme?style=flat-square)](https://www.npmjs.com/package/@clawd-cook/antd-jojo-theme)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://github.com/clawd-cook/antd-jojo-theme/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![antd](https://img.shields.io/badge/antd-%3E%3D5-1677ff?style=flat-square)](https://ant.design)
[![Playground](https://img.shields.io/badge/Playground-live-FFE566?style=flat-square&labelColor=0D0D0D)](https://clawd-cook.github.io/antd-jojo-theme/)

[Features](#features) • [Install](#installation) • [Usage](#usage) • [API](#api) • [Palette](#palette) • [Playground](#playground)

</div>

Bold thick black outlines, sculptural anatomy, exaggerated pose tension, and vibrant non-naturalistic clash color — Hirohiko Araki / _JoJo’s Bizarre Adventure_ as UI. Drop it into `ConfigProvider` and your Ant Design app gets magazine-cover tension instead of soft SaaS chrome.

> [!NOTE]
> **Design keywords:** thick black outlines · sharp angular faces / intense eyes · dynamic poses & pointing hands · saturated non-naturalistic color · high-fashion pattern & jewelry · classical sculpture anatomy · dramatic solid-black shading — not soft anime.

## Features

- **Ready-made `ThemeConfig`** — tokens + overrides for Button, Input, Card, Modal, Layout, Menu, Table, Segmented, Drawer, and more
- **Araki clash palette** — ink, yellow sky, fashion violet, magenta, metal gold, unreal teal/cyan
- **Hard ink shadows** — comic-style offset shadows (`3px` / `5px` / `8px`), never soft blur
- **Optional `styles.css`** — pose skew, hatch volume, uppercase chrome under `.jojo-theme`
- **Hatch / pose helpers** — CSS layers + motion constants for custom surfaces
- **Zero border radius** — chiselled geometry throughout
- **antd 5+ peer** — works with `ConfigProvider theme={jojoTheme}`

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

Wrap your app with Ant Design’s `ConfigProvider`, pass `jojoTheme`, and (recommended) import the chrome CSS:

```tsx
import { ConfigProvider, Button, Card } from "antd";
import { jojoTheme, jojoRootClass } from "@clawd-cook/antd-jojo-theme";
import "@clawd-cook/antd-jojo-theme/styles.css";

export function App() {
  return (
    <div className={jojoRootClass}>
      <ConfigProvider theme={jojoTheme}>
        <Card>
          <Button type="primary">ゴゴゴ Ready</Button>
        </Card>
      </ConfigProvider>
    </div>
  );
}
```

Tokens alone still work without `styles.css`. The CSS layer adds pointing-hand pose motion, crosshatch volume, and magazine-cover uppercase type.

Default export is the same theme object:

```tsx
import jojoTheme from "@clawd-cook/antd-jojo-theme";
```

## API

| Export                                 | Type              | Description                                     |
| -------------------------------------- | ----------------- | ----------------------------------------------- |
| `jojoTheme`                            | `ThemeConfig`     | Full Ant Design theme (also the default export) |
| `jojoColors`                           | `Readonly<{ … }>` | Named palette tokens                            |
| `JojoColorKey`                         | `type`            | Keys of `jojoColors`                            |
| `jojoRootClass`                        | `"jojo-theme"`    | Root class for scoped `styles.css`              |
| `jojoMotion` / `jojoPoseEase`          | motion helpers    | Pose-snap durations + easing                    |
| `jojoPoseSkew*`                        | `string`          | Transform strings for custom CSS                |
| `jojoInkShadow`                        | `string`          | Hard offset shadow `5px 5px 0`                  |
| `jojoInkShadowSm`                      | `string`          | Smaller offset `3px 3px 0`                      |
| `jojoInkShadowLg`                      | `string`          | Larger offset `8px 8px 0`                       |
| `jojoMagentaShadow` / `jojoGoldShadow` | `string`          | Jewelry / menace accent shadows                 |
| `jojoHatch`                            | `string`          | Crosshatch `backgroundImage` layers             |
| `jojoHatchDense`                       | `string`          | Denser hatch for dark rails / volume            |
| `jojoHatchFashion`                     | `string`          | Hatch + magenta fashion flecks                  |
| `styles.css`                           | CSS               | Optional pose / hatch / uppercase chrome        |

### Theme highlights

| Token area    | Choice                                              |
| ------------- | --------------------------------------------------- |
| Primary       | Fashion violet `#6B1FA0`                            |
| Link / clash  | Magenta `#E6007A`                                   |
| Layout / page | Araki yellow sky `#FFE566`                          |
| Containers    | Cream paper `#FFF8E7`                               |
| Borders       | Manga ink `#0D0D0D`, `lineWidth: 4`                 |
| Focus rings   | Off (`controlOutlineWidth: 0`)                      |
| Radius        | All `0`                                             |
| Shadows       | Hard ink offsets (no blur)                          |
| Motion        | Pose snap `0.08s` / `0.12s` / `0.18s`               |
| Type          | Condensed editorial sans stack, strong weight `900` |

## Palette

| Token        |    Hex    | Role                            |
| ------------ | :-------: | ------------------------------- |
| `ink`        | `#0D0D0D` | Thick contour / primary text    |
| `inkMuted`   | `#2B2140` | Secondary text                  |
| `shade`      | `#1A0A2E` | Block chiaroscuro / sider       |
| `sky`        | `#FFE566` | Page stage (yellow sky)         |
| `skyHot`     | `#FFD400` | Hot stage accent                |
| `paper`      | `#FFF8E7` | Container surfaces              |
| `paperDeep`  | `#FFE08A` | Secondary panel / hover         |
| `purple`     | `#6B1FA0` | Fashion primary                 |
| `purpleHot`  | `#9B2BC7` | Primary hover                   |
| `purpleDeep` | `#3B0A5C` | Primary pressed                 |
| `magenta`    | `#E6007A` | Clash accent                    |
| `gold`       | `#F5C518` | Metal / headers / warning       |
| `goldDeep`   | `#D4A017` | Deeper metal                    |
| `crimson`    | `#C41E3A` | Error                           |
| `teal`       | `#00C9B1` | Success (unreal complement)     |
| `cyan`       | `#00B7E0` | Info                            |
| `standAura`  | `#B388FF` | Selected wash / soft primary bg |

Color philosophy: **unrealistic local color**. Yellow sky and violet surfaces are intentional — clash like an Araki cover, not product-photo realism.

> [!TIP]
> Prefer `jojoInkShadow*` over CSS `box-shadow` with blur. Depth in this system is a stamped comic offset, not ambient elevation.

## Playground

Compare default Ant Design with this theme side by side:

- **Live:** [clawd-cook.github.io/antd-jojo-theme](https://clawd-cook.github.io/antd-jojo-theme/)
- **Local** (from monorepo root):

```bash
pnpm install
pnpm run playground:dev
```

## Development

This package lives in the [antd-jojo-theme](https://github.com/clawd-cook/antd-jojo-theme) monorepo.

```bash
# from packages/antd-jojo-theme
vp run build
vp test
vp check
```

Design system notes for the whole project live in the repo root [`DESIGN.md`](../../DESIGN.md).
