import { PropsWithChildren, useEffect } from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { TThemeType } from '~/types/theme';
import { checkValidTheme } from '~/utils/theme';
import { useTheme } from '../slices/theme';

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();
  const { changeTheme } = useTheme();

  useEffect(() => {
    const themeValue = checkValidTheme() as TThemeType;
    changeTheme(themeValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>;
};
