import { jojoRootClass, jojoTheme } from "@clawd-cook/antd-jojo-theme";

import "@clawd-cook/antd-jojo-theme/styles.css";
import type { ConfigProviderProps } from "antd";
import { useMemo } from "react";

/**
 * Playground wiring for the package theme + scoped JOJO chrome CSS.
 * Manga ink SVG filters are injected once in App.tsx (`jojoInkFilterSvg`).
 */
const useJojoTheme = () =>
  useMemo<ConfigProviderProps>(
    () => ({
      theme: jojoTheme,
      app: {
        className: jojoRootClass,
      },
      tooltip: {
        arrow: false,
      },
      colorPicker: {
        arrow: false,
      },
      wave: {},
      button: {},
      modal: {},
      alert: {},
      card: {},
      input: {},
      inputNumber: {},
      select: {},
      datePicker: {},
      popover: {},
      dropdown: {},
      notification: {},
      progress: {},
      checkbox: {},
      switch: {},
      radio: {},
      segmented: {},
    }),
    [],
  );

export default useJojoTheme;
