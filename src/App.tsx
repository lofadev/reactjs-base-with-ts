import React, { useEffect } from 'react';
import useThemeDetector from './hooks/useThemeDetector';
import { RootRoutes } from './routes';
import { useTheme } from './slices/theme';
import { savedTheme } from './utils/theme';
import { useAuth } from './slices/auth';
import { Spin } from 'antd';
import { getLocalStorage } from './utils/storage';
import { LOCAL_STORAGE_KEY } from './constants/common';

const App: React.FC = () => {
  const { changeTheme } = useTheme();
  const { isLoading, getMe } = useAuth();
  const isSystemDark = useThemeDetector();

  useEffect(() => {
    const token = getLocalStorage(LOCAL_STORAGE_KEY.TOKEN);

    if (token) {
      getMe();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isSystemDark) {
      changeTheme('dark');
      savedTheme('dark');
    } else {
      changeTheme('light');
      savedTheme('light');
    }
  }, [isSystemDark, changeTheme]);

  return (
    <Spin spinning={isLoading}>
      <RootRoutes />
    </Spin>
  );
};

export default App;
