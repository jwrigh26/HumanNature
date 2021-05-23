import { createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';

const errorSlice = createSlice({
  name: 'error',
  initialState: {
    errorMessage: undefined,
    hasError: false,
  },
  reducers: {
    setError(state, action) {
      state.hasError = true;
      state.errorMessage = action.payload.error?.message;
    },
    removeError(state) {
      state.hasError = false;
      state.errorMessage = undefined;
    },
  },
});

export const { removeError, setError } = errorSlice.actions;

export const errorSelector = R.prop('error');

export default errorSlice.reducer;
