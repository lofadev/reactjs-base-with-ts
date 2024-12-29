import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { IErrorState } from '~/types/error';

const name = 'error';
const initialState: IErrorState = {
  message: null,
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.message = action.payload;
    },
  },
});

const { actions, reducer } = slice;

const useError = () => {
  const dispatch = useAppDispatch();

  const setError = (payload: string | null) => dispatch(actions.setError(payload));

  const state = useAppSelector((state) => state.error);

  return {
    ...state,
    setError,
  };
};

export { actions, useError };
export default reducer;
