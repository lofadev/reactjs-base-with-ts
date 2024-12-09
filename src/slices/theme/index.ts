import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { themes } from '~/styles';
import { IThemeState, TThemeType } from '~/types/theme';
import { checkValidTheme, savedTheme } from '~/utils/theme';

const initialState: IThemeState = {
  selected: checkValidTheme(),
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<TThemeType>) => {
      state.selected = action.payload;
    },
  },
});

const { reducer, actions } = slice;

const useTheme = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.theme);
  const theme = themes[state.selected];

  const changeTheme = (payload: TThemeType) => {
    savedTheme(payload);
    dispatch(actions.changeTheme(payload));
  };

  return {
    ...state,
    changeTheme,
    theme,
  };
};

export { actions, useTheme };
export default reducer;
