<div align="center">

<img src="./logo.svg" alt="antd-jojo-theme logo" width="96" height="96" />

# antd-jojo-theme

[![Playground](https://img.shields.io/badge/Playground-live-6B1FA0?style=flat-square)](https://clawd-cook.github.io/antd-jojo-theme/)
[![npm](https://img.shields.io/npm/v/@clawd-cook/antd-jojo-theme?style=flat-square)](https://www.npmjs.com/package/@clawd-cook/antd-jojo-theme)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D22.18-3c873a?style=flat-square)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

Ant Design theme inspired by Hirohiko Araki / _JoJo's Bizarre Adventure_ —
especially _Golden Wind_ cover art: sculptural hard edges, thick ink,
crosshatching volume, chiaroscuro block shadows, and haute-couture clash color.

[Overview](#overview) • [Install](#install) • [Usage](#usage) • [Playground](#playground) • [Development](#development)

</div>

## Overview

This monorepo ships a drop-in [Ant Design](https://ant.design/) `ThemeConfig` plus supporting tokens (palette, ink shadows, hatch fills) so you can give any Ant Design app a JOJO cover-art look without hand-tuning every component token.

| Package / app                 | Path                                                         | Role                                  |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------- |
| `@clawd-cook/antd-jojo-theme` | [`packages/antd-jojo-theme`](./packages/antd-jojo-theme)     | Publishable theme package             |
| `antd-theme-playground`       | [`apps/antd-theme-playground`](./apps/antd-theme-playground) | Live component gallery (GitHub Pages) |

### Design keywords

> 雕塑感硬边 · JOJO立张力 · 粗轮廓 + 交叉排线 · 硬阴影明暗对比 ·
> 先锋时装撞色 · 巴洛克金属感 · 平涂波普 · 不要萌系柔阴影

### Features

- **Ready-made `ThemeConfig`** — thick ink borders, zero radius, fashion-clash primaries
- **Cover clash palette** — yellow sky, violet, magenta, gold, teal complements
- **Ink shadows & hatch fills** — hard offset shadows and CSS crosshatching helpers
- **Peer on Ant Design 5+** — plug into `ConfigProvider` and go
- **Live playground** — browse components at [clawd-cook.github.io/antd-jojo-theme](https://clawd-cook.github.io/antd-jojo-theme/)

## Install

```bash
pnpm add @clawd-cook/antd-jojo-theme antd
# or: npm / yarn / bun
```

> [!NOTE]
> `antd` is a peer dependency (`>=5.0.0`). You must install it alongside the theme package.

## Usage

```tsx
import { ConfigProvider } from "antd";
import { jojoTheme, jojoColors, jojoHatch, jojoInkShadow } from "@clawd-cook/antd-jojo-theme";

export function App() {
  return (
    <ConfigProvider theme={jojoTheme}>
      <div style={{ backgroundImage: jojoHatch, boxShadow: jojoInkShadow }}>
        {/* your Ant Design UI */}
      </div>
    </ConfigProvider>
  );
}
```

### Exports

| Export                         | Description                                        |
| ------------------------------ | -------------------------------------------------- |
| `jojoTheme`                    | Ant Design `ThemeConfig` (also the default export) |
| `jojoColors`                   | Named cover-art palette hex tokens                 |
| `jojoInkShadow` / `Sm` / `Lg`  | Hard ink offset `box-shadow` strings               |
| `jojoHatch` / `jojoHatchDense` | CSS `background-image` crosshatch layers           |

### Palette

| Token           | Hex       | Role                     |
| --------------- | --------- | ------------------------ |
| `ink`           | `#0D0D0D` | Thick contour            |
| `sky`           | `#FFE566` | Yellow stage / Araki sky |
| `purple`        | `#6B1FA0` | Fashion primary          |
| `magenta`       | `#E6007A` | Clash accent             |
| `gold`          | `#F5C518` | Metal / embroidery       |
| `shade`         | `#1A0A2E` | Hard chiaroscuro block   |
| `teal` / `cyan` | —         | Unrealistic complements  |

## Playground

Try the theme against a full Ant Design component gallery:

**[https://clawd-cook.github.io/antd-jojo-theme/](https://clawd-cook.github.io/antd-jojo-theme/)**

Pushes to `main` that touch the theme or playground are built and deployed to GitHub Pages via [`.github/workflows/deploy-playground-pages.yml`](./.github/workflows/deploy-playground-pages.yml).

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) `>=22.18`
- [Vite+](https://viteplus.dev/guide/) (`vp`) — unified toolchain for install, check, test, and build
- pnpm is managed via Vite+ / `devEngines` (version `12.5.1`)

### Setup

```bash
git clone https://github.com/clawd-cook/antd-jojo-theme.git
cd antd-jojo-theme
vp install
```

### Common commands

```bash
# Format, lint, typecheck, test, and build everything
vp run ready

# Theme package
vp run --filter @clawd-cook/antd-jojo-theme build
vp run --filter @clawd-cook/antd-jojo-theme test
vp run --filter @clawd-cook/antd-jojo-theme check

# Playground (http://localhost:3000)
vp run playground:dev
vp run playground:build
```

> [!TIP]
> Prefer `vp` / `vp run <script>` over calling npm scripts directly. See [`AGENTS.md`](./AGENTS.md) and [Vite+ docs](https://viteplus.dev/guide/) for the toolchain model.

### Monorepo layout

```text
.
├── apps/antd-theme-playground   # Rsbuild + React gallery
├── packages/antd-jojo-theme     # Theme library (published to npm)
├── logo.svg
└── package.json                 # Workspace root (Vite+)
```

## Resources

- [Package README](./packages/antd-jojo-theme/README.md) — install & usage focused on the published package
- [Ant Design Custom Theme](https://ant.design/docs/react/customize-theme)
- [Vite+](https://viteplus.dev/guide/)
- [Rsbuild](https://rsbuild.rs) (playground bundler)
