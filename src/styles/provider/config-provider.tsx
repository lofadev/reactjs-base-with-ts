import { ConfigProvider as ConfigProviderAnt } from 'antd';
import { PropsWithChildren } from 'react';
import { useTheme } from '~/slices/theme';

export const ConfigProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();

  return <ConfigProviderAnt theme={theme.antd}>{children}</ConfigProviderAnt>;
};
