import { Dark, Light } from '~/assets';
import { THEME_TYPE } from '~/constants';
import { useTheme } from '~/slices/theme';
import { Switch } from '../switch';

export const ThemeControl = () => {
  const { selected, changeTheme } = useTheme();

  return (
    <Switch
      checkedChildren={<Light />}
      unCheckedChildren={<Dark />}
      checked={selected === THEME_TYPE.LIGHT}
      onChange={() => {
        const anotherTheme = selected === THEME_TYPE.LIGHT ? THEME_TYPE.DARK : THEME_TYPE.LIGHT;
        changeTheme(anotherTheme);
      }}
    />
  );
};
