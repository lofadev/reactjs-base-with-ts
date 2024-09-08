import 'styled-components';
import { Theme } from '~/styles/theme';

/* This is the suggested way of declaring theme types */
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export type TThemeType = 'light' | 'dark';
export interface IThemeState {
  selected: TThemeType;
}
