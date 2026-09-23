import * as React from "react";

export interface LocaleMap<
  K extends PropertyKey = PropertyKey,
  V extends string | ((...params: any[]) => string) = string,
> {
  cn: Record<K, V>;
  en: Record<K, V>;
}

export type LocaleType = "cn" | "en";

export const LocaleContext = React.createContext<LocaleType>("cn");

const useLocale = <
  K extends PropertyKey = PropertyKey,
  V extends string | ((...params: any[]) => string) = string,
>(
  localeMap?: LocaleMap<K, V>,
): [Record<K, V>, LocaleType] => {
  const localeType = React.use(LocaleContext);
  return [localeMap?.[localeType] ?? ({} as Record<K, V>), localeType] as const;
};

export default useLocale;
