import {
  AppleFilled,
  DownOutlined,
  FacebookOutlined,
  GoogleOutlined,
  LoadingOutlined,
  MailOutlined,
  MessageOutlined,
  XOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { jojoPoseEase, jojoPoseFigure, jojoRootClass } from "@clawd-cook/antd-jojo-theme";
import type { StepItem } from "@rc-component/steps/es/Steps";
import {
  App,
  Avatar,
  Badge,
  BorderBeam,
  Button,
  Card,
  Checkbox,
  Collapse,
  ColorPicker,
  ConfigProvider,
  DatePicker,
  Divider,
  Dropdown,
  Flex,
  Input,
  Modal,
  notification,
  Popconfirm,
  Progress,
  QRCode,
  Radio,
  Rate,
  Segmented,
  Select,
  Skeleton,
  Space,
  Spin,
  Steps,
  Switch,
  Tag,
  Typography,
} from "antd";
import type {
  BadgeProps,
  ButtonProps,
  ConfigProviderProps,
  RadioGroupProps,
  SelectProps,
  TagProps,
  ThemeConfig,
} from "antd";
import { createStyles } from "antd-style";
import type { CheckboxGroupProps } from "antd/es/checkbox";
import type { ItemType } from "antd/es/menu/interface";
import { clsx } from "clsx";
import React, { useMemo } from "react";
import useSWR from "swr";
import type { SWRConfiguration } from "swr";

const { Title, Text } = Typography;
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPopconfirm } = Popconfirm;
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = notification;
const { _InternalPanelDoNotUseOrYouWillBeFired: ModalInternalPanel } = Modal;

interface ComponentsBlockProps {
  config?: ConfigProviderProps;
  style?: React.CSSProperties;
  className?: string;
  containerClassName?: string;
  inherit?: boolean;
  isDark?: boolean;
  isDarkTheme?: boolean;
  /** JOJO stage copy when previewing the Araki theme */
  copyFlavor?: "default" | "jojo";
}

const useStyle = createStyles(({ css, token }) => {
  return {
    container: css({
      backgroundColor: "transparent",
      padding: 0,
      border: "none",
      boxShadow: "none",
      width: "100%",
    }),
    layoutRow: css({
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      justifyContent: "center",
      margin: "0 auto",
    }),
    /**
     * Soft group portrait — lean + overlap, not spinning rectangles.
     * Grayscale must still read as interlocking figures.
     */
    layoutRowJojo: css({
      gap: 8,
      alignItems: "flex-start",
      position: "relative",
      minHeight: 620,
      padding: "40px 20px 64px",
      overflow: "visible",
      perspective: 1400,
      "&::before": {
        content: '"JOJO"',
        position: "absolute",
        left: "50%",
        top: "6%",
        transform: "translateX(-50%)",
        fontFamily: 'Georgia, "Times New Roman", "Noto Serif", serif',
        fontSize: "clamp(96px, 22vw, 210px)",
        fontWeight: 900,
        letterSpacing: "0.04em",
        lineHeight: 0.85,
        color: "rgba(10, 10, 12, 0.07)",
        pointerEvents: "none",
        zIndex: 0,
        userSelect: "none",
        whiteSpace: "nowrap",
      },
    }),
    colLeft: css({
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: token.paddingLG,
      "@media (max-width: 768px)": {
        display: "none",
      },
    }),
    /* Rear-left — soft settle, overlaps center shoulder */
    colLeftJojo: css({
      flex: "0.95 1 0",
      transform: jojoPoseFigure.left,
      transformOrigin: "70% 20%",
      marginRight: -36,
      zIndex: 2,
      gap: 22,
      position: "relative",
      transition: `transform 0.35s ${jojoPoseEase}`,
      "& > *:nth-child(even)": {
        transform: jojoPoseFigure.childEven,
      },
    }),
    colCenter: css({
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: token.paddingLG,
    }),
    /* Protagonist — quiet presence, sits in front */
    colCenterJojo: css({
      flex: "1.18 1 0",
      transform: jojoPoseFigure.center,
      transformOrigin: "50% 0%",
      zIndex: 5,
      marginTop: 0,
      gap: 26,
      position: "relative",
      "& > *:nth-child(even)": {
        transform: jojoPoseFigure.childEven,
      },
    }),
    colRight: css({
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: token.paddingLG,
      "@media (max-width: 1200px)": {
        display: "none",
      },
    }),
    /* Right — lean-in via shift more than spin */
    colRightJojo: css({
      flex: "0.98 1 0",
      width: "auto",
      transform: jojoPoseFigure.right,
      transformOrigin: "15% 30%",
      marginLeft: -44,
      marginTop: 18,
      zIndex: 3,
      gap: 22,
      position: "relative",
      "& > *:nth-child(even)": {
        transform: jojoPoseFigure.childEven,
      },
    }),
    mainCard: css({
      justifyContent: "center",
      padding: 32,
      borderRadius: 16,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }),
    mainCardJojo: css({
      borderRadius: 2,
      padding: "12px 8px 48px",
      overflow: "visible",
      background: "transparent",
      border: "none",
      boxShadow: "none",
    }),
    avatarGroup: css({
      marginBlockEnd: 16,
    }),
    // ---- Migrated inline styles ----
    selectInput: css({
      flex: "0 0 300px",
    }),
    colorPickerFixed: css({
      flex: "none",
    }),
    datePickerGrow: css({
      flex: 1,
    }),
    controlsRow: css({
      marginBlockStart: 16,
      paddingInline: 4,
    }),
    stepsWrapper: css({
      marginBlockStart: 16,
    }),
    progressWrapper: css({
      marginBlockStart: 8,
    }),
    flexRow12: css({
      padding: 0,
      display: "flex",
      gap: 12,
    }),
    blockCardQr: css({
      flex: "0 0 auto",
    }),
    blockCardQrBody: css({
      padding: 6,
    }),
    blockCardExtraPad: css({
      justifyContent: "center",
      marginBlockEnd: 8,
    }),
    blockCardExtraPadBody: css({
      padding: 6,
    }),
    flexCol1: css({
      flex: 1,
    }),
    rateStyle: css({
      marginBlockEnd: 20,
    }),
    popconfirmFull: css({
      width: "100%",
      margin: 0,
    }),
    blockCardSegmentedBody: css({
      padding: 8,
    }),
    avatarSection: css({
      textAlign: "center",
      position: "relative",
    }),
    avatarExtra: css({
      backgroundColor: "#fff",
      color: "#666",
    }),
    otpWrapper: css({
      marginBlock: 16,
    }),
    dangerBtn: css({
      ".ant-btn": {
        background: "#fff2f0",
        border: "none",
      },
    }),
    profileInfo: css({
      flex: 1,
    }),
    profileTitle: css({
      margin: 0,
    }),
    profileHandle: css({
      fontSize: 13,
    }),
    profileDesc: css({
      marginBlock: 8,
      fontSize: 14,
    }),
    profileStats: css({
      fontSize: 13,
    }),
    signupCard: css({
      textAlign: "center",
    }),
    signupCardBody: css({
      padding: "32px 24px",
    }),
    signupAvatar: css({
      marginBlockEnd: 16,
    }),
    signupText: css({
      display: "block",
      marginBlockEnd: 24,
      fontSize: 14,
    }),
    signupBtn: css({
      marginBlockEnd: 16,
    }),
    signupDivider: css({
      color: token.colorTextSecondary,
      fontSize: 12,
    }),
  };
});

const selectOptions: SelectProps<string>["options"] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "watermelon", label: "Watermelon" },
];

const dropdownMenuItems = Array.from({ length: 5 }).map<ItemType>((_, index) => ({
  key: `opt${index}`,
  label: `Option ${index}`,
}));

const checkboxOptions: CheckboxGroupProps<string>["options"] = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
];

const radioOptions: RadioGroupProps["options"] = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
];

const badgeList: BadgeProps[] = [
  { status: "success", text: "Success" },
  { status: "error", text: "Error" },
  { status: "default", text: "Default" },
  { status: "processing", text: "Processing" },
  { status: "warning", text: "Warning" },
];

const tagList: TagProps[] = [
  { icon: <XOutlined />, color: "#55acee", content: "Twitter" },
  { icon: <YoutubeOutlined />, color: "#cd201f", content: "Youtube" },
  { icon: <FacebookOutlined />, color: "#3b5999", content: "Facebook" },
];

const jojoTagList: TagProps[] = [
  { content: "Passione" },
  { content: "Gold Exp" },
  { content: "Zipper Man" },
];

const buttonList: ButtonProps[] = [
  { type: "primary", children: "Primary button" },
  { danger: true, children: "Danger button" },
  { type: "dashed", variant: "outlined", shape: "round", children: "Outlined button" },
  { danger: true, shape: "round", children: "Round button" },
];

const jojoButtonList: ButtonProps[] = [
  { type: "primary", children: "ゴゴゴ Ready" },
  { danger: true, children: "Ora Ora!" },
  { type: "dashed", variant: "outlined", children: "Pose Snap" },
  { danger: true, children: "Menacing" },
];

const stepsItems: StepItem[] = [
  { title: "Finished" },
  { title: "In Process" },
  { title: "Waiting" },
];

const jojoStepsItems: StepItem[] = [{ title: "Stand" }, { title: "Pose" }, { title: "Clash" }];

const botExcludes = [
  "ant-design-bot",
  "github-actions",
  "github-actions[bot]",
  "copilot",
  "renovate",
  "renovate[bot]",
  "dependabot",
  "dependabot[bot]",
  "gemini-code-assist[bot]",
  "dependabot-preview",
  "dependabot-preview[bot]",
  "depfu[bot]",
];

const fallbackAvatarGroupList = [
  "https://avatars.githubusercontent.com/u/507615?v=4",
  "https://avatars.githubusercontent.com/u/5378891?v=4",
  "https://avatars.githubusercontent.com/u/49217418?v=4",
  "https://avatars.githubusercontent.com/u/117748716?v=4",
  "https://avatars.githubusercontent.com/u/59312002?v=4",
  "https://avatars.githubusercontent.com/u/82765353?v=4",
];

interface Contributor {
  avatar_url: string;
  login: string;
  html_url: string;
  type: "User" | "Organization" | "Bot";
}

const fetcher = async (...args: Parameters<typeof fetch>) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`Failed to fetch contributors: ${response.status}`);
  }
  return response.json();
};

const swrConfig: SWRConfiguration<Contributor[], Error> = {
  dedupingInterval: 1000 * 60 * 60 * 12, // 12 hours
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  errorRetryCount: 3,
};

const ComponentsBlock: React.FC<ComponentsBlockProps> = (props) => {
  const {
    config,
    className,
    containerClassName,
    inherit = false,
    isDark = false,
    isDarkTheme = false,
    copyFlavor = "default",
  } = props;

  const { styles } = useStyle();
  const isJojo = copyFlavor === "jojo";
  const demoButtons = isJojo ? jojoButtonList : buttonList;
  const demoSteps = isJojo ? jojoStepsItems : stepsItems;
  const demoTags = isJojo ? jojoTagList : tagList;

  const {
    data: contributors,
    error,
    isLoading,
  } = useSWR<Contributor[], Error>(
    "https://api.github.com/repos/ant-design/ant-design/contributors?per_page=100",
    fetcher,
    swrConfig,
  );

  const avatarGroupList = useMemo(() => {
    if (error) {
      return fallbackAvatarGroupList.map((src) => ({ src, name: "Ant Design contributor" }));
    }
    if (isLoading) {
      return [];
    }
    if (!Array.isArray(contributors) || !contributors?.length) {
      return [];
    }
    const filtered = contributors.filter((contributor) => {
      const { login, type } = contributor;
      const name = login.toLowerCase();
      if (type === "Bot") {
        return false;
      }
      return !botExcludes.some((item) => name.includes(item));
    });
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 6).map((c) => ({ src: c.avatar_url, name: c.login }));
  }, [contributors, error, isLoading]);

  const { theme, ...restConfig } = config || {};

  const mergedTheme = useMemo<ThemeConfig>(() => ({ ...theme, inherit }), [theme, inherit]);

  const genBackgroundColor = useMemo(() => {
    if (isDarkTheme) {
      return "lab(14% 0 0)";
    }
    if (isDark && !isDarkTheme) {
      return "#f5f5f5";
    }
    return "transparent";
  }, [isDark, isDarkTheme]);

  return (
    <ConfigProvider {...restConfig} theme={mergedTheme}>
      <div className={clsx(containerClassName, styles.container, isJojo && jojoRootClass)}>
        <App style={{ width: "100%" }}>
          {(() => {
            const gallery = (
              <Card
                styles={{
                  root: {
                    backgroundColor: isJojo ? "transparent" : genBackgroundColor,
                    backdropFilter: isJojo ? "none" : "blur(12px)",
                    boxShadow: isJojo
                      ? "none"
                      : "0 4px 12px rgba(0,0,0,.08), 0 12px 32px rgba(0,0,0,.08)",
                    borderRadius: isJojo ? 0 : undefined,
                    border: isJojo ? "none" : undefined,
                  },
                  body: {
                    padding: 0,
                  },
                }}
                className={clsx(className, styles.mainCard, { [styles.mainCardJojo]: isJojo })}
              >
                <div className={clsx(styles.layoutRow, isJojo && styles.layoutRowJojo)}>
                  {/* ================= LEFT COLUMN ================= */}
                  <div className={clsx(styles.colLeft, isJojo && styles.colLeftJojo)}>
                    <div>
                      <Flex vertical gap="middle">
                        <Flex gap="middle">
                          <Input placeholder="hi@example.com" />
                          <Select
                            placeholder="Select one"
                            className={styles.selectInput}
                            mode="multiple"
                            maxTagCount="responsive"
                            defaultValue={["apple", "banana"]}
                            options={selectOptions}
                          />
                        </Flex>
                        <Flex gap="middle">
                          <ColorPicker
                            showText
                            defaultValue="#1677ff"
                            className={styles.colorPickerFixed}
                          />
                          <Space.Compact>
                            <Button>Dropdown</Button>
                            <Dropdown menu={{ items: dropdownMenuItems }}>
                              <Button icon={<DownOutlined />} />
                            </Dropdown>
                          </Space.Compact>
                          <DatePicker className={styles.datePickerGrow} placeholder="Select Date" />
                        </Flex>
                        <Flex align="center" justify="space-between" className={styles.controlsRow}>
                          <Checkbox.Group options={checkboxOptions} defaultValue={["Apple"]} />
                          <Radio.Group block options={radioOptions} defaultValue="Apple" />
                          <Switch defaultChecked />
                          <Progress type="circle" percent={25} size={20} showInfo={false} />
                        </Flex>
                        <div className={styles.stepsWrapper}>
                          <Steps current={1} status="error" items={demoSteps} />
                        </div>
                      </Flex>
                    </div>
                    <div className={styles.progressWrapper}>
                      <Flex gap="middle" vertical>
                        <Progress percent={50} status="active" />
                        <Progress percent={70} status="exception" />
                      </Flex>
                    </div>
                    <div>
                      <Flex justify="space-between" align="center" gap="small">
                        {badgeList.map((badge, index) => (
                          <Badge key={`item-${index}`} {...badge} />
                        ))}
                      </Flex>
                    </div>
                    <div className={styles.flexRow12}>
                      <Card
                        variant="borderless"
                        title={isJojo ? "Stand ID" : undefined}
                        className={styles.blockCardQr}
                        classNames={{ body: styles.blockCardQrBody }}
                      >
                        <QRCode
                          errorLevel="H"
                          value="https://ant.design/"
                          icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                        />
                      </Card>
                      <div className={styles.flexCol1}>
                        <Flex justify="space-around">
                          <Spin indicator={<LoadingOutlined spin />} size="middle" />
                          <Spin size="middle" />
                          <Rate size="middle" value={3} className={styles.rateStyle} />
                        </Flex>
                        <Card
                          variant="borderless"
                          className={styles.blockCardExtraPad}
                          classNames={{ body: styles.blockCardExtraPadBody }}
                        >
                          <Flex gap="small" align="center">
                            {demoTags.map((tag) => {
                              const { content, ...restProps } = tag;
                              return (
                                <Tag key={`item-${content}`} {...restProps}>
                                  {content}
                                </Tag>
                              );
                            })}
                          </Flex>
                        </Card>
                        <InternalPopconfirm
                          title={isJojo ? "Is that a Stand?!" : "Are you OK?"}
                          placement="topRight"
                          className={styles.popconfirmFull}
                        />
                      </div>
                    </div>

                    <Card variant="borderless" classNames={{ body: styles.blockCardSegmentedBody }}>
                      <Segmented block options={["1D", "7D", "1M", "1Y", "All"]} />
                      <Segmented
                        styles={{
                          root: {
                            marginBlockStart: 8,
                          },
                        }}
                        block
                        options={[
                          { label: "Chats", value: "Chats", icon: <MessageOutlined /> },
                          { label: "Emails", value: "Emails", icon: <MailOutlined /> },
                        ]}
                      />
                    </Card>
                  </div>

                  {/* ================= CENTER COLUMN ================= */}
                  <div className={clsx(styles.colCenter, isJojo && styles.colCenterJojo)}>
                    <div className={styles.avatarSection}>
                      <Avatar.Group className={styles.avatarGroup}>
                        {isLoading && !error
                          ? Array.from({ length: 6 }, (_, index) => (
                              <Skeleton.Avatar key={`skeleton-${index}`} active size={46} />
                            ))
                          : avatarGroupList.map(({ src, name }) => (
                              <Avatar
                                key={src}
                                size={46}
                                src={src}
                                draggable={false}
                                alt={`Contributor: ${name}`}
                                aria-label={`Contributor: ${name}`}
                              />
                            ))}
                        <Avatar size={46} draggable={false} className={styles.avatarExtra}>
                          +5
                        </Avatar>
                      </Avatar.Group>
                      <Title level={5}>{isJojo ? "Verify your Stand" : "Verify account"}</Title>
                      <Text type="secondary">
                        {isJojo
                          ? "We've sent a code to a****@passione.mail"
                          : "We've sent a code to a****@gmail.com"}
                      </Text>
                      <div className={styles.otpWrapper}>
                        <Input.OTP size="large" length={6} defaultValue="4320" variant="filled" />
                      </div>
                      <Text type="secondary">
                        Didn't receive a code? <a>Resend</a>
                      </Text>
                    </div>
                    <Flex gap="large" vertical>
                      <Flex gap="middle" justify="center">
                        {demoButtons.slice(0, 2).map((props, idx) => {
                          const { children, ...restProps } = props;
                          return (
                            <Button key={`item-${idx}`} {...restProps}>
                              {children}
                            </Button>
                          );
                        })}
                      </Flex>
                      <Flex gap="middle" justify="center">
                        {demoButtons.slice(-2).map((props, idx) => {
                          const { children, ...restProps } = props;
                          return (
                            <Button key={`item-${idx}`} {...restProps}>
                              {children}
                            </Button>
                          );
                        })}
                      </Flex>
                    </Flex>
                    <Card variant="borderless">
                      <Flex align="flex-start" gap="middle">
                        <Avatar
                          shape="square"
                          size={60}
                          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                          draggable={false}
                        />
                        <div className={styles.profileInfo}>
                          <Title level={5} className={styles.profileTitle}>
                            {isJojo ? "Golden Wind" : "Ant Design"}
                          </Title>
                          <Text type="secondary" className={styles.profileHandle}>
                            {isJojo ? "@araki.jojo" : "@ant-design"}
                          </Text>
                          <p className={styles.profileDesc}>
                            {isJojo
                              ? "Thick ink. Fashion clash. Pose snap — not soft anime."
                              : "Building the future of UI for web & mobile."}
                          </p>
                        </div>
                      </Flex>
                    </Card>
                    <InternalPanel
                      styles={{ root: { width: "100%" } }}
                      title={isJojo ? "Stand Manifested" : "Ant Design"}
                      description={
                        isJojo
                          ? "Sculptural hard edges, solid-black shading, and haute-couture clash color."
                          : "An enterprise-class design system for building modern, intelligent, and delightful user experiences."
                      }
                      type="success"
                    />
                  </div>

                  {/* ================= RIGHT COLUMN ================= */}
                  <div className={clsx(styles.colRight, isJojo && styles.colRightJojo)}>
                    <Card
                      variant="borderless"
                      title={isJojo ? "Passione" : undefined}
                      className={styles.signupCard}
                      classNames={{ body: styles.signupCardBody }}
                    >
                      <Avatar
                        size={50}
                        src="https://github.com/ant-design.png?size=50"
                        className={styles.signupAvatar}
                        draggable={false}
                      />
                      <Title level={4}>{isJojo ? "Awaken your Stand" : "Create an account"}</Title>
                      <Text type="secondary" className={styles.signupText}>
                        {isJojo
                          ? "Seven days of Naples haze. No soft SaaS required."
                          : "Start your free 7-day trial. No credit card required."}
                      </Text>
                      <Button type="primary" block size="large" className={styles.signupBtn}>
                        {isJojo ? "やれやれだぜ" : "Get Started"}
                      </Button>
                      <Divider className={styles.signupDivider}>{isJojo ? "ZIP" : "OR"}</Divider>
                      {isJojo && (
                        <Collapse
                          size="small"
                          style={{ marginBottom: 12, width: "100%" }}
                          items={[
                            {
                              key: "1",
                              label: "Suit seams",
                              children: "Zipper pull on expand — fashion hardware, not wallpaper.",
                            },
                          ]}
                        />
                      )}
                      <Flex vertical gap="small">
                        <Button block size="large" icon={<GoogleOutlined />}>
                          {isJojo ? "Continue with Pose" : "Continue with Google"}
                        </Button>
                        <Button block size="large" icon={<AppleFilled />}>
                          {isJojo ? "Continue with Gold" : "Continue with Apple"}
                        </Button>
                      </Flex>
                    </Card>

                    <ModalInternalPanel title={isJojo ? "JOJO Theme" : "Ant Design"}>
                      <div>
                        {isJojo
                          ? "Pose first: interlocking figures, different axes, protagonist forward — drop into ConfigProvider."
                          : "Ant Design use CSS-in-JS technology to provide dynamic & mix theme ability."}
                      </div>
                    </ModalInternalPanel>
                  </div>
                </div>
              </Card>
            );
            return isJojo ? gallery : <BorderBeam lineWidth={2}>{gallery}</BorderBeam>;
          })()}
        </App>
      </div>
    </ConfigProvider>
  );
};

export default ComponentsBlock;
