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
              <Flex vertical style={{ minHeight: "100vh" }}>
                <Flex
                  justify="flex-end"
                  align="center"
                  gap={12}
                  style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 10,
                    padding: "12px 24px",
                    background: isDark ? "rgba(0,0,0,0.65)" : "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(8px)",
                    borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
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
                  />
                  <Segmented
                    size="small"
                    value={isDark ? "dark" : "light"}
                    onChange={(value) => setIsDark(value === "dark")}
                    options={[
                      { label: "Light", value: "light" },
                      { label: "Dark", value: "dark" },
                    ]}
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
