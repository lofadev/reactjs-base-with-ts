import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_KEY } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { themes } from '~/styles';
import { IThemeState, TThemeType } from '~/types/theme';
import { getLocalStorage } from '~/utils/storage';
import { checkValidTheme, savedTheme } from '~/utils/theme';

const initialState: IThemeState = {
  selected: checkValidTheme(getLocalStorage(LOCAL_STORAGE_KEY.THEME)),
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
