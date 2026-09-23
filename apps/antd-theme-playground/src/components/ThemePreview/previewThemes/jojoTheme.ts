import {
  jojoColors,
  jojoHatch,
  jojoHatchDense,
  jojoInkShadow,
  jojoInkShadowLg,
  jojoInkShadowSm,
  jojoTheme,
} from "@clawd-cook/antd-jojo-theme";
import type { ConfigProviderProps } from "antd";
import { createStyles } from "antd-style";
import { useMemo } from "react";

/**
 * Playground polish on top of package tokens:
 * thick ink boxes, crosshatching volume, hard chiaroscuro blocks,
 * fashion-editorial type, pose tension on interaction.
 */
const useStyles = createStyles(({ css, cssVar }) => {
  const inkBox = {
    border: `${cssVar.lineWidth} solid ${jojoColors.ink}`,
    boxShadow: jojoInkShadow,
    borderRadius: 0,
  };

  return {
    inkBox,
    app: css({
      fontWeight: 700,
      letterSpacing: "0.04em",
      // Stage yellow sky — Araki cover ground
      backgroundColor: jojoColors.sky,
    }),
    buttonRoot: css({
      ...inkBox,
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      // Slight torsional tension — JOJO pose hint
      transform: "skewX(-2deg)",
      transition: "transform 0.12s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.12s ease",

      "&:hover": {
        transform: "skewX(-4deg) translate(-3px, -3px)",
        boxShadow: jojoInkShadowLg,
      },

      "&:active": {
        transform: "skewX(1deg) translate(2px, 2px)",
        boxShadow: jojoInkShadowSm,
      },
    }),
    modalContainer: css({
      ...inkBox,
      overflow: "hidden",
      backgroundImage: jojoHatch,
      backgroundColor: jojoColors.paper,
    }),
    modalHeader: css({
      borderBottom: `4px solid ${jojoColors.ink}`,
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      backgroundColor: jojoColors.gold,
      backgroundImage: jojoHatch,
    }),
    alertRoot: css({
      ...inkBox,
      fontWeight: 700,
      backgroundImage: jojoHatch,
    }),
    popupBox: css({
      ...inkBox,
      backgroundColor: jojoColors.paper,
      backgroundImage: jojoHatch,
    }),
    tooltipRoot: css({
      padding: cssVar.paddingXXS,
    }),
    tooltipContainer: css({
      ...inkBox,
      background: jojoColors.ink,
      color: jojoColors.gold,
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      boxShadow: `4px 4px 0 ${jojoColors.magenta}`,
    }),
    notificationRoot: css({
      "&.ant-notification-notice, & .ant-notification-notice": {
        ...inkBox,
        backgroundColor: jojoColors.paper,
        backgroundImage: jojoHatch,
        color: jojoColors.ink,
      },
    }),
    notificationTitle: css({
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
    }),
    progressRail: css({
      border: `4px solid ${jojoColors.ink}`,
      boxShadow: jojoInkShadowSm,
      borderRadius: 0,
      backgroundColor: jojoColors.shade,
      backgroundImage: jojoHatchDense,
    }),
    progressTrack: css({
      borderRadius: 0,
    }),
    inputRoot: css({
      ...inkBox,
      backgroundColor: jojoColors.paper,
    }),
    cardRoot: css({
      ...inkBox,
      // Flat pop panel + hatching volume — no soft gradient wash
      backgroundColor: jojoColors.paper,
      backgroundImage: jojoHatch,
    }),
  };
});

const useJojoTheme = () => {
  const { styles } = useStyles();

  return useMemo<ConfigProviderProps>(
    () => ({
      theme: jojoTheme,
      app: {
        className: styles.app,
      },
      button: {
        classNames: {
          root: styles.buttonRoot,
        },
      },
      modal: {
        classNames: {
          container: styles.modalContainer,
          header: styles.modalHeader,
        },
      },
      alert: {
        className: styles.alertRoot,
      },
      colorPicker: {
        arrow: false,
        classNames: {
          root: styles.inkBox,
        },
      },
      popover: {
        classNames: {
          container: styles.popupBox,
        },
      },
      tooltip: {
        arrow: false,
        classNames: {
          root: styles.tooltipRoot,
          container: styles.tooltipContainer,
        },
      },
      notification: {
        classNames: {
          root: styles.notificationRoot,
          title: styles.notificationTitle,
        },
      },
      dropdown: {
        classNames: {
          root: styles.popupBox,
        },
      },
      select: {
        classNames: {
          root: styles.inputRoot,
          popup: {
            root: styles.popupBox,
          },
        },
      },
      input: {
        classNames: {
          root: styles.inputRoot,
        },
      },
      inputNumber: {
        classNames: {
          root: styles.inputRoot,
        },
      },
      datePicker: {
        classNames: {
          root: styles.inputRoot,
        },
      },
      card: {
        classNames: {
          root: styles.cardRoot,
        },
      },
      progress: {
        classNames: {
          rail: styles.progressRail,
          track: styles.progressTrack,
        },
        styles: {
          rail: {
            height: 18,
          },
          track: {
            height: 10,
          },
        },
      },
      wave: {},
      checkbox: {},
      switch: {},
      radio: {},
      segmented: {},
    }),
    [
      styles.alertRoot,
      styles.app,
      styles.buttonRoot,
      styles.cardRoot,
      styles.inkBox,
      styles.inputRoot,
      styles.modalContainer,
      styles.modalHeader,
      styles.notificationRoot,
      styles.notificationTitle,
      styles.popupBox,
      styles.progressRail,
      styles.progressTrack,
      styles.tooltipContainer,
      styles.tooltipRoot,
    ],
  );
};

export default useJojoTheme;
