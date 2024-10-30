import { ThemeConfig } from 'antd';
import { antdCustomDark, antdCustomLight } from './custom/antd.custom';
import { baseDarkTheme, baseLightTheme, BaseTheme } from './custom/base.color';

export * from './custom/antd.custom';
export * from './custom/base.color';
export * from './provider/config-provider';
export * from './globalStyled';
export * from './media';
export * from './provider/theme-provider';

export type TTheme = {
  base: BaseTheme;
  antd: ThemeConfig;
};

const lightTheme: TTheme = {
  base: baseLightTheme,
  antd: antdCustomLight,
};

const darkTheme: TTheme = {
  base: baseDarkTheme,
  antd: antdCustomDark,
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
