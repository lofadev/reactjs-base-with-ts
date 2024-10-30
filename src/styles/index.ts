import { ThemeConfig } from 'antd';
import { antdCustomDark, antdCustomLight } from './antd.custom';
import { baseDarkTheme, baseLightTheme, BaseTheme } from './base.color';

export * from './antd.custom';
export * from './base.color';
export * from './config-provider';
export * from './globalStyled';
export * from './media';
export * from './theme-provider';

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
