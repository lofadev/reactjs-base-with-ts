import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { themes } from '~/styles/theme';
import { IThemeState, TThemeType } from '~/types/theme';

const initialState: IThemeState = { selected: 'light' };

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

  const changeTheme = (payload: TThemeType) => dispatch(actions.changeTheme(payload));

  return {
    ...state,
    changeTheme,
    theme,
  };
};

export { actions, useTheme };
export default reducer;
