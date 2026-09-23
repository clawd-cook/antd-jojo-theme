import * as React from 'react';
import { Grid } from 'antd';

export interface SiteContextProps {
  isMobile: boolean;
}

const SiteContext = React.createContext<SiteContextProps>({
  isMobile: false,
});

export const SiteContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;

  const value = React.useMemo<SiteContextProps>(() => ({ isMobile }), [isMobile]);

  return <SiteContext value={value}>{children}</SiteContext>;
};

export default SiteContext;
