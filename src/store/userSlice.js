import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { isEqual } from 'lodash';
import * as R from 'ramda';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: 'mario+luigi+toad@gmail.com',
    phoneNumber: '(801)-555-4132',
  },
  reducers: {
    setEmail(state, action) {
      state.email = action.payload.email;
    },
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload.phoneNumber;
    },
  },
});

export const { setEmail, setPhoneNumber } = userSlice.actions;

export const userSelector = R.prop('user');
export const emailSelector = R.path(['user', 'email']);
export const phoneSelector = R.path(['user', 'phoneNumber']);

export function useCustomerEmailSelector() {
  return useSelector(emailSelector, isEqual);
}

export function usePhoneNumberSelector() {
  return useSelector(phoneSelector, isEqual);
}

export default userSlice.reducer;
