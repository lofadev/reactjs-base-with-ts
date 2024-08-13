import { LOCAL_STORAGE_KEY, THEME_TYPE } from '~/constants/common';
import { TThemeType } from '~/types/theme';
import { getLocalStorage, setLocalStorage } from './storage';

export const savedTheme = (theme: TThemeType) => {
  return setLocalStorage(LOCAL_STORAGE_KEY.THEME, JSON.stringify(theme));
};

export const checkValidTheme = () => {
  const selectedTheme = getLocalStorage(LOCAL_STORAGE_KEY.THEME);

  if (!selectedTheme) {
    return THEME_TYPE.LIGHT;
  }

  return selectedTheme === THEME_TYPE.LIGHT ? THEME_TYPE.LIGHT : THEME_TYPE.DARK;
};
