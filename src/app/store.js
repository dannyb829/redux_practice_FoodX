import { configureStore } from '@reduxjs/toolkit';
import foodReducer from './Features/food/foodSlice';

export const store = configureStore({
  reducer: {
    food: foodReducer
  },
});
