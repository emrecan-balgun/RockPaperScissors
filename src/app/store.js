import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import historySlice from '../features/history/historySlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    history: historySlice
  },
});
