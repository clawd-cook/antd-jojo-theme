import { ConfigProvider, type ConfigProviderProps, type ThemeConfig } from "antd";
import { createElement, type CSSProperties, type ReactNode } from "react";

import { jojoInkFilterSvg } from "./inkFilter.ts";
import { jojoRootClass } from "./motion.ts";
import { jojoTheme } from "./theme.ts";

export type JojoProviderProps = Omit<ConfigProviderProps, "theme"> & {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Merge on top of `jojoTheme` (token / components shallow merge). */
  theme?: ThemeConfig;
  /** Inject manga rough-ink SVG filter defs (default true). */
  inkFilter?: boolean;
};

function mergeTheme(override?: ThemeConfig): ThemeConfig {
  if (!override) {
    return jojoTheme;
  }
  return {
    ...jojoTheme,
    ...override,
    token: { ...jojoTheme.token, ...override.token },
    components: { ...jojoTheme.components, ...override.components },
    cssVar: override.cssVar ?? jojoTheme.cssVar,
  };
}

/**
 * One-shot JoJo stage: root class + ink filter + `jojoTheme`.
 * Import `@clawd-cook/antd-jojo-theme/styles.css` once in the app.
 */
export function JojoProvider({
  children,
  className,
  style,
  theme,
  inkFilter = true,
  ...rest
}: JojoProviderProps) {
  const rootClass = [jojoRootClass, className].filter(Boolean).join(" ");

  return createElement(
    "div",
    { className: rootClass, style },
    inkFilter
      ? createElement("div", {
          dangerouslySetInnerHTML: { __html: jojoInkFilterSvg },
          "aria-hidden": true,
          style: { position: "absolute", width: 0, height: 0, overflow: "hidden" },
        })
      : null,
    createElement(ConfigProvider, { theme: mergeTheme(theme), ...rest }, children),
  );
}
