# Design System: Ant Design JOJO Theme
**Project ID:** N/A (local design system — `@clawd-cook/antd-jojo-theme`; no Stitch project linked)

## 1. Visual Theme & Atmosphere

Dramatic, high-tension magazine-cover energy inspired by Hirohiko Araki’s *JoJo’s Bizarre Adventure* — especially *Golden Wind* cover art. The mood is sculptural and fashion-editorial: hard-edged chiaroscuro, thick ink contours, dense crosshatching volume, and surreal pop clash color. Surfaces feel hand-inked and printed, never soft-rendered or “anime cute.” Stage yellow sky replaces muted app gray; panels sit like cut paper on a comic page. Interaction carries slight torsional “JOJO pose” tension (skew, snap motion) rather than gentle ease.

**Avoid:** soft gradients, frosted glass, mellow pastel fills, cute rounded pill UI, smooth 3D gloss, wide soft drop shadows.

## 2. Color Palette & Roles

| Descriptive name | Hex | Role |
| --- | --- | --- |
| Manga Ink Black | `#0D0D0D` | Thick contours, primary text, hard shadow pigment |
| Violet Dusk Mute | `#2B2140` | Secondary text / muted ink |
| Carved Shade Purple | `#1A0A2E` | Block chiaroscuro fills, dark rails, sider ground |
| Araki Yellow Sky | `#FFE566` | Page / layout stage background (cover “yellow sky”) |
| Hot Stage Yellow | `#FFD400` | Intensified sky accent / active gold heat |
| Cream Paper Panel | `#FFF8E7` | Container / elevated surfaces (flat paper, not marble wash) |
| Deep Paper Gold | `#FFE08A` | Secondary panel / hover fill |
| Fashion Violet | `#6B1FA0` | Primary actions, selected controls, brand force |
| Hot Fashion Violet | `#9B2BC7` | Primary hover |
| Deep Stand Violet | `#3B0A5C` | Primary pressed / deep structure |
| Couture Magenta Clash | `#E6007A` | Accent clash (progress, tabs, triggers, drama) |
| Metal Buckle Gold | `#F5C518` | Headers, metal/embroidery accents, warning |
| Antique Metal Gold | `#D4A017` | Gold pressed / deeper metal |
| Crimson Danger Slash | `#C41E3A` | Error / destructive |
| Unreal Teal Complement | `#00C9B1` | Success (surreal complement, not “nature green”) |
| Electric Cyan Info | `#00B7E0` | Informational |
| Stand Aura Lilac | `#B388FF` | Soft primary wash / selected option ground (still flat, not pastel fog) |

Color philosophy: **unrealistic local color**. Yellow sky, violet surfaces, magenta accents — clash is intentional and emotional, like Araki covers, not product-photo realism.

## 3. Typography Rules

- **Family:** Condensed fashion-editorial sans — Arial Narrow / Futura Condensed / Helvetica Neue Condensed / Impact / Gill Sans stack. Narrow, poster-like, not friendly UI Inter.
- **Body:** ~15px, weight 600–700, slight tracking (`0.04em`) for inked editorial density.
- **Strong / UI chrome:** Weight 800–900. Buttons and panel titles use **uppercase** with wide letter-spacing (`0.08em`–`0.1em`) — magazine cover shout, not sentence case.
- **Hierarchy:** Headers feel carved and loud; body stays readable but never soft or rounded in personality.

## 4. Component Stylings

* **Buttons:** Sharp, squared-off edges (no radius). Thick Manga Ink Black outline (~4px). Hard offset ink shadow (`5px 5px 0 #0D0D0D`), not blur. Primary fill Fashion Violet; default fill Cream Paper with gold hover. Uppercase, ultra-bold, wide tracking. Mild skew (`skewX(-2deg)`) suggesting pose tension; hover increases skew and lifts the hard shadow; press stamps down.
* **Cards / Containers:** Zero corner radius. Cream Paper fill with optional crosshatching texture over the surface. Thick ink border + hard ink drop shadow. Feels like a cut panel stuck to yellow sky, not a floating Material card.
* **Inputs / Forms:** Same ink-box language — sharp corners, thick black stroke, Cream Paper interior. Hover may flash Couture Magenta on the border; focus keeps ink contour with a smaller hard shadow. No soft glow rings.
* **Modals / Popovers / Notifications:** Ink-boxed panels with hatch texture; modal headers sit on Metal Buckle Gold with heavy title case. Tooltips invert to ink ground with gold type and a magenta hard shadow accent.
* **Progress / Tracks:** Flat block fills (magenta or violet) over Carved Shade rails with dense hatching — sculpted bars, not rounded pills.
* **Chrome (layout):** Yellow Sky body; gold header band; deep carved violet sider. Menu selection uses magenta-tinted blocks and gold labels — fashion runway contrast, not quiet gray nav.

## 5. Layout Principles

- **Stage first:** Yellow Sky is the theatrical ground; content panels are inked paper props placed on it. Prefer clear figure/ground over nested gray boxes.
- **Hard edges everywhere:** All radii are zero — chiselled sculpture geometry, not soft product UI.
- **Depth = ink offset, not blur:** Elevation is literal comic offset (`3px` / `5px` / `8px` pure black). Never multi-layer soft ambient shadows.
- **Texture for volume:** Crosshatching / screentone replaces gradient modeling. Use hatch on cards, alerts, modals; denser hatch on dark rails.
- **Comparison / editorial framing:** Playground places Default Ant Design left and JOJO right in a splitter — magazine “before/after” cover spread energy. Generous max width (~1600px), panels scroll independently.
- **Spacing:** Controls are slightly tall (42px default) for poster presence; padding stays decisive, not airy SaaS whitespace. Motion is snappy (`~0.14s`, sharp cubic-bezier) — pose snap, not float.

## Prompting Keywords (for Stitch / generative UI)

> Hirohiko Araki, JoJo Golden Wind cover, sculptural hard edges, thick black ink outlines, dense crosshatching, hard chiaroscuro block shadows, haute couture clash color, yellow sky stage, fashion violet + magenta + metal gold, flat pop fills, condensed uppercase editorial type, zero border radius, no soft anime, no frosted glass, no blurred shadows
