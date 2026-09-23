# @clawd-cook/antd-jojo-theme

Ant Design theme after **Hirohiko Araki / JoJo's Bizarre Adventure** —
especially _Golden Wind_ cover art: sculptural hard edges, thick ink,
crosshatching volume, chiaroscuro block shadows, haute-couture clash color.

## Design keywords

> 雕塑感硬边 · JOJO立张力 · 粗轮廓 + 交叉排线 · 硬阴影明暗对比 ·
> 先锋时装撞色 · 巴洛克金属感 · 平涂波普 · 不要萌系柔阴影

## Install

```bash
pnpm add @clawd-cook/antd-jojo-theme antd
```

## Usage

```tsx
import { ConfigProvider } from "antd";
import { jojoTheme, jojoColors, jojoHatch, jojoInkShadow } from "@clawd-cook/antd-jojo-theme";

export function App() {
  return (
    <ConfigProvider theme={jojoTheme}>
      {/* Optional: hatch a surface */}
      <div style={{ backgroundImage: jojoHatch, boxShadow: jojoInkShadow }}>…</div>
    </ConfigProvider>
  );
}
```

## Palette (cover clash)

| Token           | Hex       | Role                     |
| --------------- | --------- | ------------------------ |
| `ink`           | `#0D0D0D` | Thick contour            |
| `sky`           | `#FFE566` | Yellow stage / Araki sky |
| `purple`        | `#6B1FA0` | Fashion primary          |
| `magenta`       | `#E6007A` | Clash accent             |
| `gold`          | `#F5C518` | Metal / embroidery       |
| `shade`         | `#1A0A2E` | Hard chiaroscuro block   |
| `teal` / `cyan` | …         | Unrealistic complements  |
