# @clawd-cook/antd-jojo-theme

Ant Design theme tokens inspired by Hirohiko Araki's _JoJo's Bizarre Adventure_:
bold ink outlines, saturated high-contrast color, sharp angular geometry, hard
dramatic shadows, and a marble/paper ground.

## Install

```bash
pnpm add @clawd-cook/antd-jojo-theme antd
```

## Usage

```tsx
import { ConfigProvider } from "antd";
import { jojoTheme, jojoColors } from "@clawd-cook/antd-jojo-theme";

export function App() {
  return <ConfigProvider theme={jojoTheme}>{/* your UI */}</ConfigProvider>;
}
```

## Palette

| Token                | Color     | Role                   |
| -------------------- | --------- | ---------------------- |
| `jojoColors.ink`     | `#0A0A0A` | Thick outlines / text  |
| `jojoColors.marble`  | `#FFF3E6` | Classical paper ground |
| `jojoColors.purple`  | `#7B1FA2` | Primary stand energy   |
| `jojoColors.gold`    | `#FFC107` | Accent / headers       |
| `jojoColors.crimson` | `#D50000` | Danger                 |
| `jojoColors.teal`    | `#00BFA5` | Success                |
| `jojoColors.cyan`    | `#00BCD4` | Info                   |
