import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { shoppingApi } from '../api';
import * as R from 'ramda';
import { isEqual } from 'lodash';

export const getAuthToken = createAsyncThunk(
  'payment/getAuthToken',
  async (_, { rejectWithValue }) => {
    try {
      const api = shoppingApi();
      const {
        data: { result },
      } = await api.getHostedPaymentAuthToken();
      return result.token;
    } catch (error) {
      return rejectWithValue({
        error,
      });
    }
  }
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    token: '',
    canHostPaymentForm: false,
  },
  reducers: {
    resetHostPaymentForm(state) {
      state.canHostPaymentForm = false;
      state.token = '';
    },
    setToken(state, action) {
      state.token = action.payload.token;
    },
  },
  extraReducers: {
    [getAuthToken.fulfilled]: (state, action) => {
      state.canHostPaymentForm = true;
      state.token = action.payload;
    },
  },
});

export const paymentSelector = R.prop('payment');
export const tokenSelector = R.path(['payment', 'token']);
export const canHostPaymentFormSelector = R.path([
  'payment',
  'canHostPaymentForm',
]);

export function useTokenSelector() {
  return useSelector(tokenSelector, isEqual);
}

export function useCanHostPaymentFormSelector() {
  return useSelector(tokenSelector, isEqual);
}

export const { resetHostPaymentForm, setToken } = paymentSlice.actions;

export default paymentSlice.reducer;
