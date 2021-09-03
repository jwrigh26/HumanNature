import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { shoppingApi } from '../api';
import * as R from 'ramda';
import { isEqual } from 'lodash';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    token: undefined,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload.token;
    },
  },
});

export function getAuthToken() {
  return async (dispatch, getState) => {
    try {
      const api = shoppingApi();
      const {
        data: { result },
      } = await api.getHostedPaymentAuthToken();
      dispatch(setToken({ token: result?.token }));
    } catch (e) {
      console.log('SHOP ERROR FOR AUTH');
      console.log(e);
    }
  };
}

export const paymentSelector = R.prop('payment');
export const tokenSelector = R.path(['payment', 'token']);

export function useTokenSelector() {
  return useSelector(tokenSelector, isEqual);
}

export const { setToken } = paymentSlice.actions;

export default paymentSlice.reducer;
