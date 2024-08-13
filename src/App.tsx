import React, { useEffect } from 'react';
import useThemeDetector from './hooks/useThemeDetector';
import { RootRoutes } from './routes';
import { useTheme } from './slices/theme';
import { savedTheme } from './utils/theme';

const App: React.FC = () => {
  const { changeTheme } = useTheme();
  const isSystemDark = useThemeDetector();

  useEffect(() => {
    if (isSystemDark) {
      changeTheme('dark');
      savedTheme('dark');
    } else {
      changeTheme('light');
      savedTheme('light');
    }
  }, [isSystemDark, changeTheme]);

  return <RootRoutes />;
};

export default App;
