import { LOCAL_STORAGE_KEY, THEME_TYPE } from '~/constants/common';
import { TThemeType } from '~/types/theme';
import { getLocalStorage, setLocalStorage } from './storage';

export const savedTheme = (theme: TThemeType) => setLocalStorage(LOCAL_STORAGE_KEY.THEME, theme);

export const checkValidTheme = (themeValue?: string) => {
  const selectedTheme = getLocalStorage(themeValue ?? LOCAL_STORAGE_KEY.THEME);

  if (!selectedTheme) {
    return THEME_TYPE.LIGHT;
  }

  if (selectedTheme !== THEME_TYPE.LIGHT && selectedTheme !== THEME_TYPE.DARK) {
    return THEME_TYPE.LIGHT;
  }

  return selectedTheme;
};
