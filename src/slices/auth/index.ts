import { createSlice } from '@reduxjs/toolkit';
import { useAppSelector } from '~/store/hooks';
import { IAuthState } from '~/types/auth';

const initialState: IAuthState = {
  meInfo: null,
  isLoading: false,
  error: null,
};

const slice = createSlice({ name: 'auth', initialState, reducers: {} });

const { reducer, actions } = slice;
const useAuth = () => {
  const state = useAppSelector((state) => state.auth);

  return { ...state };
};

export { actions, useAuth };
export default reducer;
