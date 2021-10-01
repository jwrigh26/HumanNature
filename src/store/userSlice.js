import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { isEqual } from 'lodash';
import * as R from 'ramda';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: 'jwrgh@gmail.com',
  },
  reducers: {
    setEmail(state, action) {
      state.email = action.payload.email;
    },
  },
});

export const { setEmail } = userSlice.actions;

export const userSelector = R.prop('user');
export const emailSelector = R.path(['user', 'email']);


export function useCustomerEmail() {
  return useSelector(emailSelector, isEqual);
}

export default userSlice.reducer;
