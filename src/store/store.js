import { configureStore } from '@reduxjs/toolkit';

export const initializeStore = (rootReducer) => {
  return configureStore({
    reducer: rootReducer,
  });
};
