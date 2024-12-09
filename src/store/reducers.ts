import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from '../slices/theme';
import authReducer from '../slices/auth';
import toastMessageReducer from '../slices/toast';

const reducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  toast_message: toastMessageReducer,
});

export default reducer;
