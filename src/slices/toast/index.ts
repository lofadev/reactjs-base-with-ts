import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { IToastMessageParams, IToastMessageState } from '~/types/toast';

const name = 'toast';
const initialState: IToastMessageState = {
  toast_message: null,
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setToastMessage: (state, action: PayloadAction<IToastMessageParams>) => {
      state.toast_message = action.payload;
    },
    resetToastMessage: (state) => {
      state.toast_message = null;
    },
  },
});

const { actions, reducer } = slice;

const useToastMessage = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.toast_message);

  const setToastMessage = (payload: IToastMessageParams) => dispatch(actions.setToastMessage(payload));
  const resetToastMessage = () => dispatch(actions.resetToastMessage());

  return {
    ...state,
    setToastMessage,
    resetToastMessage,
  };
};

export { actions, useToastMessage };
export default reducer;
