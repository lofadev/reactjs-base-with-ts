import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from '../slices/theme';
import authReducer from '../slices/auth';
import toastMessageReducer from '../slices/toast';
import errorReducer from '../slices/error';
import loadingReducer from '../slices/loading';

const reducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  toast_message: toastMessageReducer,
  error: errorReducer,
  loading: loadingReducer,
});

export default reducer;
