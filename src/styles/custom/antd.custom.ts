import { ThemeConfig } from 'antd';

export const antdCustomLight: ThemeConfig = {
  token: {
    // colorPrimary: 'red',
    borderRadius: 4,
  },
  components: {
    Switch: {
      trackHeight: 24,
      handleSize: 20,
      innerMaxMargin: 26,
      innerMinMargin: 4,
    },
  },
};

type ThemeType = typeof antdCustomLight;

export const antdCustomDark: ThemeType = {
  ...antdCustomLight,
};
