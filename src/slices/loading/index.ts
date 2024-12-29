import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { ILoadingState } from '~/types/loading';

export const initialState: ILoadingState = {
  loading: [],
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<string>) => {
      const newLoadings = [...state.loading, action.payload];
      state.loading = newLoadings;
    },

    removeLoading: (state, action: PayloadAction<string>) => {
      const newLoadings = state.loading.filter((loading) => loading !== action.payload);
      state.loading = newLoadings;
    },
  },
});

const { actions, reducer } = loadingSlice;

const useLoading = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.loading);

  const setLoading = (payload: string) => dispatch(actions.setLoading(payload));
  const removeLoading = (payload: string) => dispatch(actions.removeLoading(payload));

  return { ...state, setLoading, removeLoading };
};

export { actions, useLoading };
export default reducer;
