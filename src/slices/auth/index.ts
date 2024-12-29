import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from '~/models';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { IAuthState } from '~/types/auth';

const initialState: IAuthState = {
  meInfo: null,
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getMe: () => {},

    getMeSuccess: (state, action: PayloadAction<UserModel>) => {
      state.meInfo = action.payload;
    },
  },
});

const { reducer, actions } = slice;
const useAuth = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth);

  const getMe = () => dispatch(actions.getMe());

  return { ...state, getMe };
};

export { actions, useAuth };
export default reducer;
