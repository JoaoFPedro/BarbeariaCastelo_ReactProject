import { configureStore } from '@reduxjs/toolkit';
import loggedUserReducer from './slice/loggedUserSlice';

export const store = configureStore({
  reducer: {
    loggedUser: loggedUserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
