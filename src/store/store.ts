import { configureStore } from '@reduxjs/toolkit';
import idReducer from './slices/idSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    id: idReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
