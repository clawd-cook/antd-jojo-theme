import { BgColorsOutlined, CopyOutlined } from "@ant-design/icons";
import { jojoColors, jojoInkShadow, jojoInkShadowSm } from "@clawd-cook/antd-jojo-theme";
import { App, ConfigProvider, Flex, Segmented, theme, Tooltip } from "antd";
import type { ThemeConfig } from "antd";
import { createStyles } from "antd-style";
import copy from "antd/lib/_util/copy";
import { clsx } from "clsx";
import * as React from "react";

import { DarkContext } from "../../adapters/DarkContext";
import useLocale from "../../adapters/useLocale";
import Group from "../Group";
import ComponentsBlock from "../PreviewPane/Components";
import { ThemeDashboard } from "../Theme";
import type { PreviewThemeConfig } from "./previewThemes";
import usePreviewThemes from "./previewThemes";
import { generateFullCopyFile } from "./themeCodeUtils";
import ThemeIcon from "./ThemeIcon";

const PREVIEW_CARD_RADIUS = 16;
const JOJO_POSE_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

const locales = {
  cn: {
    themeTitle: "荒木流 · JOJO 主题",
    themeDesc: "粗黑描边、雕塑解剖、夸张 pose、高饱和非写实配色 — 杂志封面张力，不是柔和 SaaS",
    aiGenerate: "AI 主题生成",
    aiGenerateDesc: "用一句话描述你想要的风格",
    copyTheme: "复制主题代码",
    copySuccess: "已复制 · やれやれ",
    exploreThemes: "探索主题",
    editTheme: "主题编辑",
    contribution: "贡献",
  },
  en: {
    themeTitle: "Araki · JOJO Theme",
    themeDesc:
      "Thick ink outlines, sculptural anatomy, exaggerated poses, saturated non-naturalistic color — magazine-cover tension, not soft SaaS",
    aiGenerate: "AI Theme Generator",
    aiGenerateDesc: "Describe your desired style",
    copyTheme: "Copy theme code",
    copySuccess: "Copied · Yare Yare",
    exploreThemes: "Explore Themes",
    editTheme: "Theme Editor",
    contribution: "Contribution",
  },
};

const useStyles = createStyles(({ css, cssVar }) => ({
  container: css({
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  }),

  wrapper: css({
    width: "100%",
    maxWidth: 1320,
    flexDirection: "column",
    alignItems: "stretch",
  }),

  // ======= 组件预览区域 =======
  componentsBlockContainer: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }),

  componentsBlock: css({
    width: "100%",
    maxWidth: 1320,
    margin: "0 auto",
  }),
  dashboardBlock: css({
    width: "100%",
    maxWidth: 1320,
    margin: "0 auto",
  }),
  previewTabs: css({
    padding: 3,
    borderRadius: 100,
    background: cssVar.colorFillQuaternary,
    ".ant-segmented-group": {
      gap: 2,
    },
    ".ant-segmented-thumb": {
      borderRadius: 100,
      background: cssVar.colorBgElevated,
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    },
    "@media (max-width: 768px)": {
      width: "60%",
    },
  }),
  previewTabsJojo: css({
    padding: 0,
    borderRadius: 0,
    background: jojoColors.paper,
    border: `3px solid ${jojoColors.ink}`,
    boxShadow: jojoInkShadowSm,
    ".ant-segmented-group": {
      gap: 0,
    },
    ".ant-segmented-thumb": {
      borderRadius: 0,
      background: jojoColors.magenta,
      boxShadow: "none",
    },
  }),
  tabsDark: css({
    backgroundColor: "rgba(255, 255, 255, 0.14)",
    backdropFilter: "blur(18px)",
    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.16)",
    ".ant-segmented-thumb": {
      backgroundColor: "rgba(255, 255, 255, 0.96)",
      boxShadow: "0 8px 18px rgba(0,0,0,0.24)",
    },
  }),
  tabsItem: css({
    minWidth: 112,
    borderRadius: 100,
    color: cssVar.colorTextTertiary,
    "&.ant-segmented-item-selected": {
      color: cssVar.colorText,
    },
    "@media (max-width: 768px)": {
      flex: 1,
      minWidth: 0,
      paddingInline: 12,
      fontSize: 16,
    },
  }),
  tabsItemJojo: css({
    borderRadius: 0,
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: jojoColors.inkMuted,
    transform: "skewX(-2deg)",
    transition: `transform 0.12s ${JOJO_POSE_EASE}, color 0.12s ${JOJO_POSE_EASE}`,
    "&:hover": {
      transform: "skewX(-4deg)",
      color: jojoColors.ink,
    },
    "&.ant-segmented-item-selected": {
      color: jojoColors.gold,
    },
  }),
  tabsItemDark: css({
    color: "rgba(255, 255, 255, 0.78)",
    "&:not(.ant-segmented-item-selected):not(.ant-segmented-item-disabled):hover": {
      color: "#fff",
      background: "rgba(255, 255, 255, 0.08)",
    },
    "&.ant-segmented-item-selected": {
      color: cssVar.colorText,
    },
  }),
  previewTabsLabel: css({
    minHeight: 30,
    lineHeight: "30px",
  }),
  themeBlock: css({
    height: 20,
    width: 20,
    fontSize: 20,
    borderRadius: "100%",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    outline: `2px solid ${cssVar.colorBgLayout}`,
    backgroundColor: cssVar.colorBgLayout,
    transition: ["background-color", "transform", "opacity"]
      .map((prop) => `${prop} ${cssVar.motionDurationFast}`)
      .join(", "),
    "&:hover, &:focus-within": {
      outline: `2px solid ${cssVar.colorPrimaryBorder}`,
      transform: "scale(1.1)",
    },
    "> img": {
      fontSize: 0,
      display: "block",
      width: "100%",
      height: "100%",
      borderRadius: "100%",
    },
  }),
  themeBlockJojo: css({
    borderRadius: 0,
    boxShadow: jojoInkShadowSm,
    outline: `2px solid ${jojoColors.ink}`,
    transition: `transform 0.12s ${JOJO_POSE_EASE}, box-shadow 0.12s ${JOJO_POSE_EASE}`,
    "&:hover, &:focus-within": {
      outline: `2px solid ${jojoColors.ink}`,
      transform: "skewX(-6deg) scale(1.12)",
      boxShadow: jojoInkShadow,
    },
    "> img": {
      borderRadius: 0,
    },
  }),
  active: css({
    outline: `2px solid ${cssVar.colorPrimaryBorder}`,
  }),
  activeJojo: css({
    outline: `3px solid ${jojoColors.magenta}`,
    boxShadow: `3px 3px 0 ${jojoColors.gold}`,
    transform: "skewX(-4deg)",
  }),
  switch: css({
    alignItems: "center",
    gap: 16,
    "@media (max-width: 1200px)": {
      justifyContent: "center",
      flexDirection: "column",
    },
  }),
  buttonBlock: css({
    height: 28,
    width: 28,
    borderRadius: "50%",
    fontSize: 15,
    color: cssVar.colorPrimaryBorder,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: cssVar.colorBgLayout,
    },
    "@media (max-width: 1200px)": {
      display: "none",
    },
  }),
  buttonBlockJojo: css({
    borderRadius: 0,
    color: jojoColors.ink,
    border: `2px solid ${jojoColors.ink}`,
    background: jojoColors.paper,
    boxShadow: jojoInkShadowSm,
    transform: "skewX(-2deg)",
    transition: `transform 0.12s ${JOJO_POSE_EASE}, box-shadow 0.12s ${JOJO_POSE_EASE}`,
    "&:hover": {
      backgroundColor: jojoColors.gold,
      transform: "skewX(-5deg) translate(-2px, -2px)",
      boxShadow: jojoInkShadow,
    },
  }),
  groupTitleJojo: css({
    fontFamily:
      '"Arial Narrow", "Futura Condensed", "Helvetica Neue Condensed", Impact, "Gill Sans", sans-serif',
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    transform: "skewX(-3deg)",
    display: "inline-block",
  }),
  groupDescJojo: css({
    fontWeight: 700,
    letterSpacing: "0.03em",
    maxWidth: 720,
    marginInline: "auto",
  }),
}));

type PreviewPane = "components" | "dashboard";

const getPreviewThemeKey = (previewTheme: PreviewThemeConfig) =>
  previewTheme.key ?? previewTheme.name;

export interface ThemePreviewProps {
  onOpenPromptDrawer?: () => void;
}

const ThemePreviewContent: React.FC<ThemePreviewProps> = (props) => {
  const { onOpenPromptDrawer } = props;
  const [locale, localeType] = useLocale(locales);
  const { styles } = useStyles();
  const isDark = React.use(DarkContext);
  const { message } = App.useApp();

  const previewThemes = usePreviewThemes();

  const [activeThemeKey, setActiveThemeKey] = React.useState("jojo");
  const [activePane, setActivePane] = React.useState<PreviewPane>("components");

  const copyTimerRef = React.useRef<ReturnType<typeof setTimeout>>(null);

  const backgroundPrefetchList = React.useMemo(
    () => previewThemes.map((t) => t.bgImg).filter((img): img is string => !!img),
    [previewThemes],
  );

  const handleThemeClick = (themeKey: string) => setActiveThemeKey(themeKey);

  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    if (!event.target.hasAttribute("data-theme-key")) {
      return;
    }
    const keys = previewThemes.map<string>(getPreviewThemeKey);
    const currentIndex = keys.indexOf(activeThemeKey);
    if (currentIndex === -1) {
      return;
    }

    let nextIndex: number;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextIndex = (currentIndex + 1) % keys.length;
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      nextIndex = (currentIndex - 1 + keys.length) % keys.length;
    } else {
      return;
    }

    const nextKey = keys[nextIndex];
    setActiveThemeKey(nextKey);
    const element = containerRef.current?.querySelector<HTMLDivElement>(
      `[data-theme-key="${nextKey}"]`,
    );
    element?.focus();
  };

  const activeTheme =
    previewThemes.find((previewTheme) => getPreviewThemeKey(previewTheme) === activeThemeKey) ??
    previewThemes[0];

  const handleCopyTheme = async (event: React.MouseEvent) => {
    event.stopPropagation();
    const code = generateFullCopyFile({
      themeConfig: activeTheme?.props?.theme,
      copyCode: activeTheme?.copyCode,
    });
    const success = await copy(code);
    if (success) {
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
      message.success(locale.copySuccess);
    }
  };

  React.useEffect(
    () => () => {
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
    },
    [],
  );

  const editPath =
    localeType === "cn" ? "https://ant.design/theme-editor-cn" : "https://ant.design/theme-editor";

  const isJojo = activeThemeKey === "jojo";

  const background =
    activeTheme?.background ??
    activeTheme?.bgImg ??
    "linear-gradient(180deg, #ffffff 0%, #F5F8FF 100%)";

  const hasDarkBackground = !!activeTheme?.bgImgDark;

  const previewPaneOptionsLocalized: { label: string; value: PreviewPane }[] = [
    {
      label: isJojo ? (localeType === "cn" ? "组件" : "Components") : "Components",
      value: "components",
    },
    {
      label: isJojo ? (localeType === "cn" ? "仪表" : "Dashboard") : "Dashboard",
      value: "dashboard",
    },
  ];

  return (
    <Group
      title={
        isJojo ? (
          <span className={styles.groupTitleJojo}>{locale.themeTitle}</span>
        ) : (
          locale.themeTitle
        )
      }
      description={
        isJojo ? <span className={styles.groupDescJojo}>{locale.themeDesc}</span> : locale.themeDesc
      }
      collapse
      titleColor={hasDarkBackground ? "#fff" : isJojo ? jojoColors.ink : undefined}
      background={background}
      backgroundPrefetchList={backgroundPrefetchList}
    >
      <Flex className={styles.container}>
        <Flex className={styles.wrapper} gap={16}>
          <Flex className={styles.switch} justify="space-between">
            <Segmented<PreviewPane>
              classNames={{
                label: clsx(styles.previewTabsLabel),
                root: clsx(styles.previewTabs, {
                  [styles.tabsDark]: hasDarkBackground && !isJojo,
                  [styles.previewTabsJojo]: isJojo,
                }),
                item: clsx(styles.tabsItem, {
                  [styles.tabsItemDark]: hasDarkBackground && !isJojo,
                  [styles.tabsItemJojo]: isJojo,
                }),
              }}
              options={previewPaneOptionsLocalized}
              value={activePane}
              onChange={setActivePane}
            />
            <Flex align="center" gap={12} ref={containerRef} onKeyDown={handleKeyDown}>
              {previewThemes.map((theme) => {
                const { name, icon: Icon } = theme;
                const themeKey = getPreviewThemeKey(theme);
                const isSelected = activeThemeKey === themeKey;
                return (
                  <Tooltip placement="top" key={`item-${themeKey}`} title={name}>
                    <div
                      role="tab"
                      className={clsx(styles.themeBlock, {
                        [styles.themeBlockJojo]: isJojo,
                        [styles.active]: isSelected && !isJojo,
                        [styles.activeJojo]: isSelected && isJojo,
                      })}
                      tabIndex={isSelected ? 0 : -1}
                      aria-selected={isSelected}
                      data-theme-key={themeKey}
                      onClick={() => handleThemeClick(themeKey)}
                    >
                      {typeof Icon === "string" ? (
                        <img src={Icon} alt={name} title={name} draggable={false} />
                      ) : (
                        <Icon />
                      )}
                    </div>
                  </Tooltip>
                );
              })}
              <Tooltip placement="top" title={locale.copyTheme}>
                <div
                  className={clsx(styles.buttonBlock, { [styles.buttonBlockJojo]: isJojo })}
                  onClick={handleCopyTheme}
                >
                  <CopyOutlined />
                </div>
              </Tooltip>
              <Tooltip placement="top" title={locale.editTheme}>
                <a href={editPath} target="_blank" rel="noreferrer" title="editTheme">
                  <div className={clsx(styles.buttonBlock, { [styles.buttonBlockJojo]: isJojo })}>
                    <BgColorsOutlined />
                  </div>
                </a>
              </Tooltip>
              {onOpenPromptDrawer ? (
                <Tooltip placement="top" title={locale.aiGenerate}>
                  <div
                    className={clsx(styles.buttonBlock, { [styles.buttonBlockJojo]: isJojo })}
                    onClick={onOpenPromptDrawer}
                  >
                    <ThemeIcon />
                  </div>
                </Tooltip>
              ) : null}
            </Flex>
          </Flex>
          {/* ===== 组件预览区域 ===== */}
          {activePane === "components" ? (
            <ComponentsBlock
              isDark={isDark}
              isDarkTheme={hasDarkBackground}
              key={activeThemeKey}
              config={activeTheme?.props}
              className={styles.componentsBlock}
              containerClassName={styles.componentsBlockContainer}
              copyFlavor={isJojo ? "jojo" : "default"}
            />
          ) : (
            <ThemeDashboard
              key={activeThemeKey}
              className={styles.dashboardBlock}
              config={activeTheme?.props}
              activeTheme={activeTheme}
              style={{ borderRadius: isJojo ? 0 : PREVIEW_CARD_RADIUS }}
            />
          )}
        </Flex>
      </Flex>
    </Group>
  );
};

const ThemePreview: React.FC<ThemePreviewProps> = (props) => {
  const memoizedThemeConfig = React.useMemo<ThemeConfig>(() => {
    return { algorithm: theme.defaultAlgorithm };
  }, []);

  return (
    <ConfigProvider theme={memoizedThemeConfig}>
      <App>
        <ThemePreviewContent {...props} />
      </App>
    </ConfigProvider>
  );
};

export default ThemePreview;
