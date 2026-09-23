<div align="center">

<img src="./logo.svg" alt="antd-jojo-theme logo" width="96" height="96" />

# antd-jojo-theme

[![Playground](https://img.shields.io/badge/Playground-live-FFE566?style=flat-square&labelColor=0D0D0D)](https://clawd-cook.github.io/antd-jojo-theme/)
[![npm](https://img.shields.io/npm/v/@clawd-cook/antd-jojo-theme?style=flat-square)](https://www.npmjs.com/package/@clawd-cook/antd-jojo-theme)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D22.18-3c873a?style=flat-square)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

Ant Design theme inspired by Hirohiko Araki / *JoJo’s Bizarre Adventure* —
thick ink outlines, sculptural anatomy, exaggerated pose tension, and
vibrant non-naturalistic clash color.

[Overview](#overview) • [Install](#install) • [Usage](#usage) • [Playground](#playground) • [Development](#development)

</div>

## Overview

Monorepo for a drop-in [Ant Design](https://ant.design/) `ThemeConfig`, clash palette, ink shadows, hatch fills, and optional pose/hatch chrome CSS — magazine-cover tension instead of soft SaaS chrome.

| Package / app | Path | Role |
| --- | --- | --- |
| `@clawd-cook/antd-jojo-theme` | [`packages/antd-jojo-theme`](./packages/antd-jojo-theme) | Publishable theme package |
| `antd-theme-playground` | [`apps/antd-theme-playground`](./apps/antd-theme-playground) | Live gallery (GitHub Pages) |

### Design keywords

> thick black outlines · sharp angular / sculptural anatomy · dynamic poses & pointing hands · saturated non-naturalistic color · high-fashion pattern & jewelry · dramatic solid-black shading — not soft anime

See [`DESIGN.md`](./DESIGN.md) for the full semantic design system.

### Features

- **Ready-made `ThemeConfig`** — thick ink borders, zero radius, fashion-clash primaries, pose-snap motion
- **Optional `styles.css`** — pointing-hand skew, crosshatch volume, uppercase chrome (scoped under `.jojo-theme`)
- **Clash palette** — yellow sky, fashion violet, magenta, metal gold, unreal teal/cyan
- **Ink shadows & hatch helpers** — hard offsets (`3px` / `5px` / `8px`) and CSS screentone layers
- **Live playground** — [clawd-cook.github.io/antd-jojo-theme](https://clawd-cook.github.io/antd-jojo-theme/)

## Install

```bash
pnpm add @clawd-cook/antd-jojo-theme antd
# or: npm / yarn / bun
```

> [!NOTE]
> `antd` is a peer dependency (`>= 5.0.0`). Install it alongside the theme.

## Usage

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

`jojoTheme` works without `styles.css`. The CSS layer adds pose motion, hatch texture, and uppercase editorial type.

### Exports

| Export | Description |
| --- | --- |
| `jojoTheme` | Ant Design `ThemeConfig` (also the default export) |
| `jojoColors` | Named clash-palette hex tokens |
| `jojoRootClass` | `"jojo-theme"` — root class for scoped chrome CSS |
| `jojoMotion` / `jojoPoseSkew*` | Pose-snap durations, easing, transform strings |
| `jojoInkShadow` / `Sm` / `Lg` | Hard ink offset `box-shadow` strings |
| `jojoMagentaShadow` / `jojoGoldShadow` | Jewelry / menace accent shadows |
| `jojoHatch` / `Dense` / `Fashion` | CSS `background-image` crosshatch layers |
| `styles.css` | Optional pose / hatch / uppercase chrome |

### Palette (highlights)

| Token | Hex | Role |
| --- | --- | --- |
| `ink` | `#0D0D0D` | Thick contour |
| `sky` | `#FFE566` | Yellow stage / Araki sky |
| `purple` | `#6B1FA0` | Fashion primary |
| `magenta` | `#E6007A` | Clash accent / links |
| `gold` | `#F5C518` | Metal / headers |
| `shade` | `#1A0A2E` | Hard chiaroscuro block |

Full token table: [package README](./packages/antd-jojo-theme/README.md#palette).

## Playground

**[https://clawd-cook.github.io/antd-jojo-theme/](https://clawd-cook.github.io/antd-jojo-theme/)**

Compare JOJO vs default Ant Design. Pushes to `main` that touch the theme or playground deploy via [`.github/workflows/deploy-playground-pages.yml`](./.github/workflows/deploy-playground-pages.yml).

```bash
vp install
vp run playground:dev
```

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) `>= 22.18`
- [Vite+](https://viteplus.dev/guide/) (`vp`) — install, check, test, build
- pnpm via Vite+ / `devEngines` (`12.5.1`)

### Setup

```bash
git clone https://github.com/clawd-cook/antd-jojo-theme.git
cd antd-jojo-theme
vp install
```

### Commands

```bash
vp run ready                                          # check + test + build
vp run --filter @clawd-cook/antd-jojo-theme build
vp run --filter @clawd-cook/antd-jojo-theme test
vp run --filter @clawd-cook/antd-jojo-theme check
vp run playground:dev                                 # http://localhost:3000
vp run playground:build
```

> [!TIP]
> Prefer `vp` / `vp run <script>` over raw npm scripts. See [`AGENTS.md`](./AGENTS.md).

### Layout

```text
.
├── apps/antd-theme-playground   # Rsbuild + React gallery
├── packages/antd-jojo-theme     # Theme library → npm
├── DESIGN.md                    # Semantic design system
├── logo.svg
└── package.json
```

## Resources

- [Package README](./packages/antd-jojo-theme/README.md) — published API & palette
- [DESIGN.md](./DESIGN.md) — visual language for prompts & contribution
- [Ant Design Customize Theme](https://ant.design/docs/react/customize-theme)
- [Vite+](https://viteplus.dev/guide/) · [Rsbuild](https://rsbuild.rs)
