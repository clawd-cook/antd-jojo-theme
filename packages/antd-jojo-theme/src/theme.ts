import type { ThemeConfig } from "antd";
import { theme } from "antd";

import { jojoColors, jojoInkShadow, jojoInkShadowLg, jojoInkShadowSm } from "./colors.ts";

/**
 * Ant Design theme — Hirohiko Araki / JoJo Golden Wind cover art.
 *
 * Keywords: sculptural hard edges, JOJO pose tension (asymmetric weight),
 * thick ink + crosshatching feel, chiaroscuro block shadows, haute couture
 * clash color, Baroque metal detail, pop flat fills — not soft anime.
 */
export const jojoTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: jojoColors.purple,
    colorSuccess: jojoColors.teal,
    colorWarning: jojoColors.gold,
    colorError: jojoColors.crimson,
    colorInfo: jojoColors.cyan,

    colorTextBase: jojoColors.ink,
    colorBgBase: jojoColors.sky,

    colorText: jojoColors.ink,
    colorTextSecondary: jojoColors.inkMuted,
    colorTextTertiary: "#5C4A78",
    colorTextQuaternary: "#8A769E",

    // Flat paper panels — no soft marble gradient feel
    colorBgContainer: jojoColors.paper,
    colorBgElevated: jojoColors.paper,
    colorBgLayout: jojoColors.sky,
    colorBgSpotlight: jojoColors.shade,
    colorBgMask: "rgba(26, 10, 46, 0.62)",

    colorBorder: jojoColors.ink,
    colorBorderSecondary: jojoColors.ink,

    // Flat saturated fills (pop / cover art), not pastel wash
    colorPrimaryBg: jojoColors.standAura,
    colorPrimaryBgHover: "#C9A0FF",
    colorPrimaryBorder: jojoColors.ink,
    colorPrimaryBorderHover: jojoColors.ink,
    colorPrimaryHover: jojoColors.purpleHot,
    colorPrimaryActive: jojoColors.purpleDeep,
    colorPrimaryText: jojoColors.purple,
    colorPrimaryTextHover: jojoColors.purpleHot,
    colorPrimaryTextActive: jojoColors.purpleDeep,

    colorSuccessBg: jojoColors.teal,
    colorSuccessBorder: jojoColors.ink,
    colorWarningBg: jojoColors.gold,
    colorWarningBorder: jojoColors.ink,
    colorErrorBg: jojoColors.crimson,
    colorErrorBorder: jojoColors.ink,
    colorInfoBg: jojoColors.cyan,
    colorInfoBorder: jojoColors.ink,

    // Thick ink contour
    lineWidth: 4,
    lineWidthBold: 5,
    lineType: "solid",

    // Sharp sculpted edges — Michelangelo / chiselled jaw
    borderRadius: 0,
    borderRadiusXS: 0,
    borderRadiusSM: 0,
    borderRadiusLG: 0,
    borderRadiusOuter: 0,

    controlHeight: 42,
    controlHeightSM: 34,
    controlHeightLG: 50,

    fontSize: 15,
    fontSizeLG: 18,
    fontWeightStrong: 900,
    // Condensed fashion-editorial type
    fontFamily:
      '"Arial Narrow", "Futura Condensed", "Helvetica Neue Condensed", Impact, "Gill Sans", sans-serif',

    boxShadow: jojoInkShadow,
    boxShadowSecondary: jojoInkShadowLg,
    boxShadowTertiary: jojoInkShadowSm,

    // Snappy pose — tension, not soft ease
    motionDurationMid: "0.14s",
    motionEaseInOut: "cubic-bezier(0.22, 1, 0.36, 1)",
  },
  components: {
    Button: {
      primaryShadow: jojoInkShadow,
      defaultShadow: jojoInkShadow,
      dangerShadow: jojoInkShadow,
      fontWeight: 900,
      borderColorDisabled: jojoColors.inkMuted,
      defaultBorderColor: jojoColors.ink,
      defaultColor: jojoColors.ink,
      defaultBg: jojoColors.paper,
      defaultHoverBg: jojoColors.gold,
      defaultHoverBorderColor: jojoColors.ink,
      defaultHoverColor: jojoColors.ink,
      defaultActiveBg: jojoColors.goldDeep,
      defaultActiveBorderColor: jojoColors.ink,
      defaultActiveColor: jojoColors.ink,
      borderRadius: 0,
      paddingInline: 22,
      controlHeight: 42,
    },
    Input: {
      activeShadow: jojoInkShadowSm,
      hoverBorderColor: jojoColors.magenta,
      activeBorderColor: jojoColors.ink,
      borderRadius: 0,
      colorBgContainer: jojoColors.paper,
    },
    InputNumber: {
      activeShadow: jojoInkShadowSm,
      hoverBorderColor: jojoColors.magenta,
      activeBorderColor: jojoColors.ink,
    },
    Select: {
      optionSelectedBg: jojoColors.standAura,
      optionActiveBg: jojoColors.paperDeep,
      optionSelectedFontWeight: 800,
      borderRadius: 0,
      colorBgContainer: jojoColors.paper,
    },
    Card: {
      borderRadiusLG: 0,
      colorBgContainer: jojoColors.paper,
      boxShadow: jojoInkShadow,
      colorBorderSecondary: jojoColors.ink,
    },
    Modal: {
      borderRadiusLG: 0,
      boxShadow: jojoInkShadowLg,
      contentBg: jojoColors.paper,
      headerBg: jojoColors.gold,
      titleColor: jojoColors.ink,
      footerBg: jojoColors.sky,
    },
    Alert: {
      borderRadiusLG: 0,
    },
    Tag: {
      borderRadiusSM: 0,
      defaultBg: jojoColors.paperDeep,
      defaultColor: jojoColors.ink,
    },
    Tooltip: {
      borderRadius: 0,
      colorBgSpotlight: jojoColors.ink,
      colorTextLightSolid: jojoColors.gold,
    },
    Notification: {
      width: 384,
      colorSuccessBg: jojoColors.teal,
      colorErrorBg: jojoColors.crimson,
      colorInfoBg: jojoColors.cyan,
      colorWarningBg: jojoColors.gold,
    },
    Progress: {
      circleTextColor: jojoColors.ink,
      defaultColor: jojoColors.magenta,
      remainingColor: jojoColors.shade,
      lineBorderRadius: 0,
    },
    Slider: {
      trackBg: jojoColors.magenta,
      trackHoverBg: jojoColors.purpleHot,
      handleColor: jojoColors.gold,
      handleActiveColor: jojoColors.skyHot,
      railBg: jojoColors.shade,
      railHoverBg: jojoColors.inkMuted,
      railSize: 8,
      handleSize: 18,
      handleSizeHover: 20,
      dotBorderColor: jojoColors.ink,
      dotActiveBorderColor: jojoColors.magenta,
    },
    Switch: {
      trackHeight: 26,
      trackMinWidth: 52,
      handleSize: 22,
    },
    Checkbox: {
      borderRadiusSM: 0,
    },
    Radio: {
      radioSize: 20,
      dotSize: 10,
    },
    Steps: {
      iconSize: 38,
      titleLineHeight: 1.15,
    },
    Layout: {
      bodyBg: jojoColors.sky,
      footerBg: jojoColors.sky,
      headerBg: jojoColors.gold,
      headerColor: jojoColors.ink,
      headerHeight: 64,
      siderBg: jojoColors.shade,
      lightSiderBg: jojoColors.shade,
      triggerBg: jojoColors.magenta,
      triggerColor: jojoColors.gold,
    },
    Menu: {
      activeBarBorderWidth: 0,
      activeBarWidth: 5,
      itemBg: "transparent",
      subMenuItemBg: "transparent",
      itemColor: "rgba(255, 248, 231, 0.72)",
      itemHoverColor: jojoColors.gold,
      itemSelectedColor: jojoColors.gold,
      subMenuItemSelectedColor: jojoColors.gold,
      itemHoverBg: "rgba(245, 197, 24, 0.18)",
      itemSelectedBg: "rgba(230, 0, 122, 0.42)",
      itemBorderRadius: 0,
      itemMarginInline: 8,
      itemHeight: 46,
      darkItemBg: "transparent",
      darkItemColor: "rgba(255, 248, 231, 0.72)",
      darkItemHoverBg: "rgba(245, 197, 24, 0.18)",
      darkItemHoverColor: jojoColors.gold,
      darkItemSelectedBg: "rgba(230, 0, 122, 0.42)",
      darkItemSelectedColor: jojoColors.gold,
      darkSubMenuItemBg: "transparent",
      darkPopupBg: jojoColors.shade,
    },
    Table: {
      headerBg: jojoColors.gold,
      headerColor: jojoColors.ink,
      borderColor: jojoColors.ink,
      rowHoverBg: jojoColors.standAura,
      headerBorderRadius: 0,
    },
    Tabs: {
      itemSelectedColor: jojoColors.magenta,
      inkBarColor: jojoColors.magenta,
      itemHoverColor: jojoColors.purpleHot,
      titleFontSize: 15,
    },
    Badge: {
      textFontSize: 12,
      textFontWeight: 900,
    },
    Divider: {
      colorSplit: jojoColors.ink,
    },
  },
};

export default jojoTheme;
