import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from '../slices/theme';
import authReducer from '../slices/auth';

const reducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
});

export default reducer;
