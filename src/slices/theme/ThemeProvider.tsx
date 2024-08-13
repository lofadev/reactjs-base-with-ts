import { PropsWithChildren } from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { useTheme } from '.';

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();

  return <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>;
};

export default ThemeProvider;
