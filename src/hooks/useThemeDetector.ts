import { useState, useEffect } from 'react';

function useThemeDetector() {
  const getCurrentTheme = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  useEffect(() => {
    const themeChangeListener = (e: { matches: boolean | ((prevState: boolean) => boolean) }) => {
      setIsDarkTheme(e.matches);
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', themeChangeListener);

    return () => mediaQuery.removeEventListener('change', themeChangeListener);
  }, []);

  return isDarkTheme;
}

export default useThemeDetector;
