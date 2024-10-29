const lightTheme = {
  primary: '#13C4CE',
  secondary: '#3374CD',
  white: '#fff',
  lightGray: '#dddddd',
  transparent: 'transparent',

  textPrimary: '#3F4F5F',
  textDanger: '#F2596B',
};

export type Theme = typeof lightTheme;

const darkTheme: Theme = {
  primary: '#13C4CE',
  secondary: '#3374CD',
  white: '#fff',
  lightGray: '#dddddd',
  transparent: 'transparent',

  textPrimary: '#3F4F5F',
  textDanger: '#F2596B',
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
