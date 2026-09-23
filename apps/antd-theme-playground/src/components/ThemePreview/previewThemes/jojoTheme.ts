import { jojoColors, jojoTheme } from "@clawd-cook/antd-jojo-theme";
import type { ConfigProviderProps } from "antd";
import { createStyles } from "antd-style";
import { useMemo } from "react";

const useStyles = createStyles(({ css, cssVar }) => {
  const inkBox = {
    border: `${cssVar.lineWidth} solid ${jojoColors.ink}`,
    boxShadow: `4px 4px 0 ${jojoColors.ink}`,
  };

  return {
    inkBox,
    app: css({
      fontWeight: 600,
      letterSpacing: "0.02em",
    }),
    buttonRoot: css({
      ...inkBox,
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      transition: "transform 0.12s ease, box-shadow 0.12s ease",

      "&:hover": {
        transform: "translate(-2px, -2px)",
        boxShadow: `6px 6px 0 ${jojoColors.ink}`,
      },

      "&:active": {
        transform: "translate(2px, 2px)",
        boxShadow: `2px 2px 0 ${jojoColors.ink}`,
      },
    }),
    modalContainer: css({
      ...inkBox,
      overflow: "hidden",
    }),
    modalHeader: css({
      borderBottom: `3px solid ${jojoColors.ink}`,
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
    }),
    alertRoot: css({
      ...inkBox,
      fontWeight: 600,
    }),
    popupBox: css({
      ...inkBox,
      borderRadius: cssVar.borderRadius,
      backgroundColor: cssVar.colorBgElevated,
    }),
    tooltipRoot: css({
      padding: cssVar.paddingXXS,
    }),
    tooltipContainer: css({
      ...inkBox,
      background: jojoColors.ink,
      color: jojoColors.gold,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    }),
    notificationRoot: css({
      "&.ant-notification-notice, & .ant-notification-notice": {
        ...inkBox,
        background: jojoColors.marbleBright,
      },
    }),
    notificationTitle: css({
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
    }),
    progressRail: css({
      border: `3px solid ${jojoColors.ink}`,
      boxShadow: `3px 3px 0 ${jojoColors.ink}`,
      borderRadius: 0,
    }),
    progressTrack: css({
      borderRadius: 0,
    }),
    inputRoot: css({
      ...inkBox,
    }),
    cardRoot: css({
      ...inkBox,
      background: `linear-gradient(135deg, ${jojoColors.marbleBright} 0%, ${jojoColors.marbleDeep} 100%)`,
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
            height: 16,
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
