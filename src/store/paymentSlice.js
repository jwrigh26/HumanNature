import { createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {},
  reducers: {},
});

export function runAuthorizeCreditCard() {
  return async () => {
    console.log('authorize credit card');
    // await authorizeCreditCard();
  };
}

export const paymentSelector = R.prop('payment');

export const {} = paymentSlice.actions;

export default paymentSlice.reducer;
