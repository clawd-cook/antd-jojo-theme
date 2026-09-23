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
 * fashion-editorial type, exaggerated pose-snap motion.
 */
const useStyles = createStyles(({ css, cssVar }) => {
  const poseEase = "cubic-bezier(0.22, 1, 0.36, 1)";
  const inkBox = {
    border: `${cssVar.lineWidth} solid ${jojoColors.ink}`,
    boxShadow: jojoInkShadow,
    borderRadius: 0,
  };

  // Keyframes live in each rule so css-in-js scopes animation names correctly.
  const poseInKeyframes = {
    "@keyframes jojoPoseIn": {
      "0%": {
        transform: "skewX(10deg) translate(6px, 10px)",
        opacity: 0.35,
      },
      "55%": {
        transform: "skewX(-6deg) translate(-2px, -3px)",
        opacity: 1,
      },
      "100%": {
        transform: "skewX(-3deg)",
        opacity: 1,
      },
    },
  } as const;

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
      ...poseInKeyframes,
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      // Pointing-hand torsional tension — stronger JOJO pose
      transform: "skewX(-3deg)",
      animation: `jojoPoseIn 0.32s ${poseEase} both`,
      transition: `transform 0.12s ${poseEase}, box-shadow 0.12s ${poseEase}, letter-spacing 0.12s ${poseEase}`,

      "&:hover": {
        transform: "skewX(-7deg) translate(-4px, -4px) scale(1.02)",
        boxShadow: jojoInkShadowLg,
        letterSpacing: "0.14em",
      },

      "&:active": {
        transform: "skewX(2deg) translate(3px, 3px) scale(0.98)",
        boxShadow: jojoInkShadowSm,
        letterSpacing: "0.06em",
        transitionDuration: "0.06s",
      },
    }),
    modalContainer: css({
      ...inkBox,
      ...poseInKeyframes,
      overflow: "hidden",
      backgroundImage: jojoHatch,
      backgroundColor: jojoColors.paper,
      animation: `jojoPoseIn 0.28s ${poseEase} both`,
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
      "@keyframes jojoMenacePulse": {
        "0%, 100%": { boxShadow: jojoInkShadow },
        "50%": { boxShadow: `6px 6px 0 ${jojoColors.magenta}` },
      },
      animation: `jojoMenacePulse 1.8s ${poseEase} 2`,
    }),
    popupBox: css({
      ...inkBox,
      ...poseInKeyframes,
      backgroundColor: jojoColors.paper,
      backgroundImage: jojoHatch,
      animation: `jojoPoseIn 0.22s ${poseEase} both`,
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
      transform: "skewX(-2deg)",
    }),
    notificationRoot: css({
      ...poseInKeyframes,
      "&.ant-notification-notice, & .ant-notification-notice": {
        ...inkBox,
        backgroundColor: jojoColors.paper,
        backgroundImage: jojoHatch,
        color: jojoColors.ink,
        animation: `jojoPoseIn 0.26s ${poseEase} both`,
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
      transition: `width 0.14s ${poseEase}`,
    }),
    inputRoot: css({
      ...inkBox,
      backgroundColor: jojoColors.paper,
      transition: `transform 0.12s ${poseEase}, box-shadow 0.12s ${poseEase}`,

      "&:hover, &:focus, &:focus-within": {
        transform: "skewX(-1deg)",
        boxShadow: jojoInkShadowSm,
      },
    }),
    cardRoot: css({
      ...inkBox,
      // Flat pop panel + hatching volume — no soft gradient wash
      backgroundColor: jojoColors.paper,
      backgroundImage: jojoHatch,
      transition: `transform 0.14s ${poseEase}, box-shadow 0.14s ${poseEase}`,

      "&:hover": {
        transform: "skewX(-1.5deg) translate(-2px, -2px)",
        boxShadow: jojoInkShadowLg,
      },
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
