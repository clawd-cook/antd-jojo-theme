import { jojoColors } from "@clawd-cook/antd-jojo-theme";
import type { ConfigProviderProps, ThemeConfig } from "antd";
import { theme } from "antd";
import React from "react";

import useLocale from "../../../adapters/useLocale";
import { JojoIcon } from "../svg-component";
import useJojoTheme from "./jojoTheme";
import jojoThemeSource from "./jojoTheme.ts?raw";

export interface PreviewThemeConfig {
  icon: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  key?: string;
  props?: ConfigProviderProps;
  /** Solid stage color or image URL passed to Group background */
  background?: string;
  bgImg?: string;
  bgImgDark?: boolean;
  copyCode?: string;
  colors?: string[];
}

const locales = {
  cn: {
    default: "Ant Design",
    jojo: "JOJO · 黄金之风",
  },
  en: {
    default: "Ant Design",
    jojo: "JOJO · Golden Wind",
  },
};

export type UseTheme = () => ConfigProviderProps;

export const DEFAULT_COLOR = "#1677FF";
export const PINK_COLOR = "#ED4192";

const previewThemeComponents: NonNullable<ThemeConfig["components"]> = {
  Layout: {
    bodyBg: "#f5f8ff",
    footerBg: "#f5f8ff",
    headerBg: "#ffffff",
    headerColor: "rgba(0, 0, 0, 0.88)",
    siderBg: "#ffffff",
    triggerBg: "#f0f5ff",
    triggerColor: "rgba(0, 0, 0, 0.88)",
  },
  Menu: {
    activeBarBorderWidth: 0,
    itemBg: "transparent",
    subMenuItemBg: "transparent",
  },
  Button: {},
  Alert: {},
  Modal: {},
  Card: {},
  Tooltip: {},
  Checkbox: {},
  Radio: {},
  Select: {},
  Input: {},
  Switch: {},
  Progress: {
    circleTextColor: "rgba(0, 0, 0, 0.88)",
    defaultColor: DEFAULT_COLOR,
    remainingColor: "rgba(0, 0, 0, 0.06)",
  },
  Steps: {},
  Slider: {},
  ColorPicker: {},
  Notification: {},
};

const getBasePreviewThemeProps = (algorithm: ThemeConfig["algorithm"]): ConfigProviderProps => ({
  theme: {
    algorithm,
    components: previewThemeComponents,
  },
  wave: {},
  app: {},
  card: {},
  modal: {},
  button: {},
  alert: {},
  colorPicker: {},
  checkbox: {},
  dropdown: {},
  select: {},
  datePicker: {},
  input: {},
  inputNumber: {},
  popover: {},
  tooltip: {},
  notification: {},
  switch: {},
  radio: {},
  segmented: {},
  progress: {},
});

const usePreviewThemes = () => {
  const [locale] = useLocale(locales);
  const jojoTheme = useJojoTheme();

  return React.useMemo<PreviewThemeConfig[]>(() => {
    return [
      {
        name: locale.jojo,
        icon: JojoIcon,
        key: "jojo",
        background: jojoColors.sky,
        colors: ["#0A0A0C", "#FFFEF8", "#E8E4EE", "#E8318A", "#F0C14A"],
        props: jojoTheme,
        copyCode: jojoThemeSource,
      },
      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
        name: locale.default,
        key: "light",
        bgImg:
          "https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*T8IlRaNez08AAAAARwAAAAgAegCCAQ/original",
        props: getBasePreviewThemeProps(theme.defaultAlgorithm),
      },
    ];
  }, [jojoTheme, locale.default, locale.jojo]);
};

export default usePreviewThemes;
