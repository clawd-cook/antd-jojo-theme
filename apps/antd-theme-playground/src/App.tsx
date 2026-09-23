import { jojoColors, jojoInkFilterSvg, jojoInkShadowSm } from "@clawd-cook/antd-jojo-theme";
import { ConfigProvider, Flex, Segmented, theme } from "antd";
import enUS from "antd/locale/en_US";
import zhCN from "antd/locale/zh_CN";
import * as React from "react";

import { DarkContext } from "./adapters/DarkContext";
import { SiteContextProvider } from "./adapters/SiteContext";
import SiteThemeProvider from "./adapters/SiteThemeProvider";
import { LocaleContext, type LocaleType } from "./adapters/useLocale";
import ThemePreview from "./components/ThemePreview";

const App = () => {
  const [localeType, setLocaleType] = React.useState<LocaleType>("cn");
  const [isDark, setIsDark] = React.useState(false);

  const antdLocale = localeType === "cn" ? zhCN : enUS;
  const algorithm = isDark ? theme.darkAlgorithm : theme.defaultAlgorithm;

  return (
    <ConfigProvider locale={antdLocale} theme={{ algorithm }}>
      <SiteThemeProvider>
        <LocaleContext value={localeType}>
          <DarkContext value={isDark}>
            <SiteContextProvider>
              <div dangerouslySetInnerHTML={{ __html: jojoInkFilterSvg }} aria-hidden />
              <Flex vertical style={{ minHeight: "100vh", background: jojoColors.sky }}>
                <Flex
                  justify="flex-end"
                  align="center"
                  gap={12}
                  style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 10,
                    padding: "12px 24px",
                    background: jojoColors.gold,
                    borderBottom: `3px solid ${jojoColors.ink}`,
                    boxShadow: jojoInkShadowSm,
                    backgroundImage:
                      "repeating-linear-gradient(110deg, transparent 0, transparent 2px, rgba(10,10,12,0.2) 2px, rgba(10,10,12,0.2) 3px)",
                  }}
                >
                  <Segmented
                    size="small"
                    value={localeType}
                    onChange={(value) => setLocaleType(value as LocaleType)}
                    options={[
                      { label: "中文", value: "cn" },
                      { label: "EN", value: "en" },
                    ]}
                    style={{
                      borderRadius: 2,
                      border: `3px solid ${jojoColors.ink}`,
                      background: jojoColors.paper,
                    }}
                  />
                  <Segmented
                    size="small"
                    value={isDark ? "dark" : "light"}
                    onChange={(value) => setIsDark(value === "dark")}
                    options={[
                      { label: "Light", value: "light" },
                      { label: "Dark", value: "dark" },
                    ]}
                    style={{
                      borderRadius: 2,
                      border: `3px solid ${jojoColors.ink}`,
                      background: jojoColors.paper,
                    }}
                  />
                </Flex>
                <ThemePreview />
              </Flex>
            </SiteContextProvider>
          </DarkContext>
        </LocaleContext>
      </SiteThemeProvider>
    </ConfigProvider>
  );
};

export default App;
