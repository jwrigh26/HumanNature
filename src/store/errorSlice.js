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
  extraReducers: {
    // Note:
    // Reducers for aysnc thunk rejections handled here for all app
    // Error Slice's main role is to feed errors to ErrorBoundary.
    // This is for any rejection that will break the app.
    // [acceptHostedPayment.rejected]: (state, action) => {
    //   state.hasError = true;
    //   state.errorMessage = action.error?.message;
    //   console.log('Error: AcceptHostedPayment Rejected');
    //   console.log(action.error);
      
      
    // },
  },
});

export const { removeError, setError } = errorSlice.actions;

export const errorSelector = R.prop('error');

export default errorSlice.reducer;
