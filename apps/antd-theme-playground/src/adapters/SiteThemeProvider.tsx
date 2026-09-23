import { theme as antdTheme, ConfigProvider } from "antd";
import type { ThemeConfig } from "antd";
import type { ThemeProviderProps } from "antd-style";
import { ThemeProvider } from "antd-style";
import React from "react";

interface NewToken {
  marginFarXS: number;
  marginFarSM: number;
  marginFar: number;
}

declare module "antd-style" {
  export interface CustomToken extends NewToken {}
}

const SiteThemeProvider: React.FC<ThemeProviderProps<any>> = ({ children, theme, ...rest }) => {
  const { token } = antdTheme.useToken();

  React.useEffect(() => {
    ConfigProvider.config({ theme: theme as ThemeConfig });
  }, [theme]);

  return (
    <ThemeProvider<NewToken>
      {...rest}
      theme={theme}
      customToken={{
        /** 56 */
        marginFarXS: (token.marginXXL / 6) * 7,
        /** 80 */
        marginFarSM: (token.marginXXL / 3) * 5,
        /** 96 */
        marginFar: token.marginXXL * 2,
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default SiteThemeProvider;
