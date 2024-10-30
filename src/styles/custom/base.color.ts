export const baseLightTheme = {
  primary: '#13C4CE',
  secondary: '#3374CD',
  white: '#fff',
  lightGray: '#dddddd',
  transparent: 'transparent',

  bgPrimary: '#F6F6F6',
  bgContent: '#fff',

  textPrimary: '#3F4F5F',
  textDanger: '#F2596B',
};

export type BaseTheme = typeof baseLightTheme;

export const baseDarkTheme: BaseTheme = {
  ...baseLightTheme,
  primary: '#13C4CE',

  bgPrimary: '#0f172a',
  bgContent: '#1b2c49',

  textPrimary: '#fff',
  textDanger: '#F2596B',
};
