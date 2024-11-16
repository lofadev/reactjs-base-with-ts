export const baseLightTheme = {
  primary: '#13C4CE',
  secondary: '#3374CD',

  white: '#FFFFFF',
  transparent: 'transparent',

  bgPrimary: '#FFFFFF',
  bgWrapper: '#F6F6F6',

  textPrimary: '#1A1A1A',
  textSecondary: '#667085',
  textDanger: '#F2596B',
};

export type BaseTheme = typeof baseLightTheme;

export const baseDarkTheme: BaseTheme = {
  ...baseLightTheme,
  primary: '#13C4CE',

  bgPrimary: '#090D1F',
  bgWrapper: '#090d1fe3',

  textPrimary: '#FFFFFF',
  textSecondary: '#C0C5D0',
};
