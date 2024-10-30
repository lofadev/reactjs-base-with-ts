export type TThemeType = 'light' | 'dark';

export type ThemeType = {
  LIGHT: TThemeType;
  DARK: TThemeType;
};

export interface IThemeState {
  selected: TThemeType;
}
