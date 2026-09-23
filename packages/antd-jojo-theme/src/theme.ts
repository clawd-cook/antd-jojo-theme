import type { ThemeConfig } from "antd";
import { theme } from "antd";

import { jojoColors } from "./colors.ts";

const inkShadow = `4px 4px 0 ${jojoColors.ink}`;
const inkShadowLg = `6px 6px 0 ${jojoColors.ink}`;

/**
 * Ant Design theme inspired by Hirohiko Araki's JoJo's Bizarre Adventure:
 * bold ink outlines, high-contrast saturated color, sharp angular forms,
 * dramatic hard shadows, and classical marble/paper ground.
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
    colorBgBase: jojoColors.marble,

    colorText: jojoColors.ink,
    colorTextSecondary: jojoColors.inkMuted,
    colorTextTertiary: "#5A5A5A",
    colorTextQuaternary: "#8A8A8A",

    colorBgContainer: jojoColors.marbleBright,
    colorBgElevated: jojoColors.marbleBright,
    colorBgLayout: jojoColors.marble,
    colorBgSpotlight: "rgba(10, 10, 10, 0.92)",
    colorBgMask: "rgba(10, 10, 10, 0.55)",

    colorBorder: jojoColors.ink,
    colorBorderSecondary: jojoColors.inkMuted,

    colorPrimaryBg: "#F3E5F5",
    colorPrimaryBgHover: "#E1BEE7",
    colorPrimaryBorder: jojoColors.purple,
    colorPrimaryBorderHover: jojoColors.purpleHot,
    colorPrimaryHover: jojoColors.purpleHot,
    colorPrimaryActive: jojoColors.purpleDeep,
    colorPrimaryText: jojoColors.purple,
    colorPrimaryTextHover: jojoColors.purpleHot,
    colorPrimaryTextActive: jojoColors.purpleDeep,

    colorSuccessBg: "#E0F7F4",
    colorSuccessBorder: jojoColors.teal,
    colorWarningBg: "#FFF8E1",
    colorWarningBorder: jojoColors.goldDeep,
    colorErrorBg: "#FFEBEE",
    colorErrorBorder: jojoColors.crimson,
    colorInfoBg: "#E0F7FA",
    colorInfoBorder: jojoColors.cyan,

    // Bold thick black outlines
    lineWidth: 3,
    lineWidthBold: 4,
    lineType: "solid",

    // Sharp angular facial / sculpture-like geometry
    borderRadius: 2,
    borderRadiusXS: 0,
    borderRadiusSM: 2,
    borderRadiusLG: 4,
    borderRadiusOuter: 2,

    controlHeight: 40,
    controlHeightSM: 32,
    controlHeightLG: 48,

    fontSize: 15,
    fontSizeLG: 17,
    fontWeightStrong: 800,
    fontFamily: '"Arial Narrow", "Futura", "Helvetica Neue Condensed", "Gill Sans", sans-serif',

    boxShadow: inkShadow,
    boxShadowSecondary: inkShadowLg,
    boxShadowTertiary: `2px 2px 0 ${jojoColors.ink}`,

    motionDurationMid: "0.18s",
    motionEaseInOut: "cubic-bezier(0.2, 0.8, 0.2, 1)",
  },
  components: {
    Button: {
      primaryShadow: inkShadow,
      defaultShadow: inkShadow,
      dangerShadow: inkShadow,
      fontWeight: 800,
      borderColorDisabled: jojoColors.inkMuted,
      defaultBorderColor: jojoColors.ink,
      defaultColor: jojoColors.ink,
      defaultBg: jojoColors.marbleBright,
      defaultHoverBg: jojoColors.gold,
      defaultHoverBorderColor: jojoColors.ink,
      defaultHoverColor: jojoColors.ink,
      defaultActiveBg: jojoColors.goldDeep,
      defaultActiveBorderColor: jojoColors.ink,
      defaultActiveColor: jojoColors.ink,
      borderRadius: 2,
      paddingInline: 20,
      controlHeight: 40,
    },
    Input: {
      activeShadow: `3px 3px 0 ${jojoColors.purple}`,
      hoverBorderColor: jojoColors.purple,
      activeBorderColor: jojoColors.ink,
      borderRadius: 2,
      colorBgContainer: jojoColors.marbleBright,
    },
    InputNumber: {
      activeShadow: `3px 3px 0 ${jojoColors.purple}`,
      hoverBorderColor: jojoColors.purple,
      activeBorderColor: jojoColors.ink,
    },
    Select: {
      optionSelectedBg: "#F3E5F5",
      optionActiveBg: jojoColors.marbleDeep,
      optionSelectedFontWeight: 700,
      borderRadius: 2,
      colorBgContainer: jojoColors.marbleBright,
    },
    Card: {
      borderRadiusLG: 2,
      colorBgContainer: jojoColors.marbleBright,
      boxShadow: inkShadow,
      colorBorderSecondary: jojoColors.ink,
    },
    Modal: {
      borderRadiusLG: 2,
      boxShadow: inkShadowLg,
      contentBg: jojoColors.marbleBright,
      headerBg: jojoColors.gold,
      titleColor: jojoColors.ink,
      footerBg: jojoColors.marble,
    },
    Alert: {
      borderRadiusLG: 2,
      withDescriptionPadding: "12px 16px",
    },
    Tag: {
      borderRadiusSM: 0,
      defaultBg: jojoColors.marbleDeep,
      defaultColor: jojoColors.ink,
    },
    Tooltip: {
      borderRadius: 0,
      colorBgSpotlight: jojoColors.ink,
      colorTextLightSolid: jojoColors.gold,
    },
    Notification: {
      width: 384,
      colorSuccessBg: "#E0F7F4",
      colorErrorBg: "#FFEBEE",
      colorInfoBg: "#E0F7FA",
      colorWarningBg: "#FFF8E1",
    },
    Progress: {
      circleTextColor: jojoColors.ink,
      defaultColor: jojoColors.purple,
      remainingColor: jojoColors.marbleDeep,
      lineBorderRadius: 0,
    },
    Slider: {
      trackBg: jojoColors.purple,
      trackHoverBg: jojoColors.purpleHot,
      handleColor: jojoColors.gold,
      handleActiveColor: jojoColors.goldDeep,
      railBg: jojoColors.marbleDeep,
      railHoverBg: "#FFD59A",
      railSize: 6,
      handleSize: 16,
      handleSizeHover: 18,
      dotBorderColor: jojoColors.ink,
      dotActiveBorderColor: jojoColors.purple,
    },
    Switch: {
      trackHeight: 24,
      trackMinWidth: 48,
      handleSize: 20,
    },
    Checkbox: {
      borderRadiusSM: 0,
    },
    Radio: {
      radioSize: 18,
      dotSize: 10,
    },
    Steps: {
      iconSize: 36,
      titleLineHeight: 1.2,
    },
    Layout: {
      bodyBg: jojoColors.marble,
      footerBg: jojoColors.marble,
      headerBg: jojoColors.gold,
      headerColor: jojoColors.ink,
      headerHeight: 64,
      siderBg: jojoColors.purpleDeep,
      lightSiderBg: jojoColors.purpleDeep,
      triggerBg: jojoColors.purple,
      triggerColor: jojoColors.gold,
    },
    Menu: {
      activeBarBorderWidth: 0,
      activeBarWidth: 4,
      itemBg: "transparent",
      subMenuItemBg: "transparent",
      itemColor: "rgba(255, 243, 230, 0.78)",
      itemHoverColor: jojoColors.gold,
      itemSelectedColor: jojoColors.gold,
      subMenuItemSelectedColor: jojoColors.gold,
      itemHoverBg: "rgba(255, 193, 7, 0.16)",
      itemSelectedBg: "rgba(233, 30, 99, 0.35)",
      itemBorderRadius: 0,
      itemMarginInline: 8,
      itemHeight: 44,
      darkItemBg: "transparent",
      darkItemColor: "rgba(255, 243, 230, 0.78)",
      darkItemHoverBg: "rgba(255, 193, 7, 0.16)",
      darkItemHoverColor: jojoColors.gold,
      darkItemSelectedBg: "rgba(233, 30, 99, 0.35)",
      darkItemSelectedColor: jojoColors.gold,
      darkSubMenuItemBg: "transparent",
      darkPopupBg: jojoColors.purpleDeep,
    },
    Table: {
      headerBg: jojoColors.gold,
      headerColor: jojoColors.ink,
      borderColor: jojoColors.ink,
      rowHoverBg: "#F3E5F5",
      headerBorderRadius: 0,
    },
    Tabs: {
      itemSelectedColor: jojoColors.purple,
      inkBarColor: jojoColors.magenta,
      itemHoverColor: jojoColors.purpleHot,
      titleFontSize: 15,
    },
    Badge: {
      textFontSize: 12,
      textFontWeight: 800,
    },
    Divider: {
      colorSplit: jojoColors.ink,
    },
  },
};

export default jojoTheme;
