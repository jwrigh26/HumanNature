import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { shoppingApi } from '../api';
import * as R from 'ramda';
import { v4 as uuidv4 } from 'uuid';
import { checkoutStep } from '../constants';
import { getAcceptPaymentNonce } from 'helpers/authnetHelper';
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

export const authorizePaymentTransaction = createAsyncThunk(
  'payment/authorizePaymentTransaction',
  async (args, { rejectWithValue }) => {
    try {
      // 1. Get card and user information
      const { cardData, transactionData } = args;

      // 2. make call to get handshake or "nonce" from auth.net
      const { dataDescriptor, dataValue } = await getAcceptPaymentNonce(
        cardData
      );

      // 3. assemble the nonce
      const nonce = {
        description: dataDescriptor,
        value: dataValue,
      };

      const api = shoppingApi();
      const {
        data: { result },
      } = await api.createAcceptPaymentTransaction({
        ...transactionData,
        nonce,
      });
      console.log(`${JSON.stringify(result, null, 2)}`);
      return result;
    } catch (error) {
      return rejectWithValue({
        error,
      });
    }
  }
);

const defaultSteps = {
  [checkoutStep.customer]: false,
  [checkoutStep.shipping]: false,
  [checkoutStep.billing]: false,
  [checkoutStep.payment]: false,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    token: '',
    card: {
      cardNumber: undefined,
      month: undefined,
      year: undefined,
      cardCode: undefined,
      zip: undefined,
      fullName: undefined,
    },
    transactionData: {
      nonce: {
        description: 'COMMON.ACCEPT.INAPP.PAYMENT',
        value: 'PLEASE_GET_REAL_VALUE',
      },
      amount: undefined,
      tax: undefined,
      duty: undefined,
      order: {
        invoice: undefined,
        description: undefined,
      },
      shipping: {
        amount: undefined,
        name: undefined,
        description: undefined,
      },
      billTo: {
        firstName: undefined,
        lastName: undefined,
        company: undefined,
        address: undefined,
        city: undefined,
        state: undefined,
        zip: undefined,
        country: undefined,
      },
      shipTo: {
        firstName: undefined,
        lastName: undefined,
        company: undefined,
        address: undefined,
        city: undefined,
        state: undefined,
        zip: undefined,
        country: undefined,
      },
      lineItems: [],
    },
    steps: defaultSteps,
  },
  reducers: {
    resetHostPaymentForm(state) {
      state.canHostPaymentForm = false;
      state.token = '';
    },
    setStep(state, action) {
      console.log('Set step', action.payload);
      state.steps = {
        ...defaultSteps,
        [action.payload.step]: action.payload.displayForm,
      };
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

export const stepCustomerSelector = R.path([
  'payment',
  'steps',
  checkoutStep.customer,
]);

export const paymentSelector = R.prop('payment');
export const tokenSelector = R.path(['payment', 'token']);
export const canHostPaymentFormSelector = R.path([
  'payment',
  'canHostPaymentForm',
]);

export function useStepCustomerSelector() {
  return useSelector(stepCustomerSelector, isEqual);
}

export function useTokenSelector() {
  return useSelector(tokenSelector, isEqual);
}

export function useCanHostPaymentFormSelector() {
  return useSelector(tokenSelector, isEqual);
}

export const { resetHostPaymentForm, setStep, setToken } = paymentSlice.actions;

export default paymentSlice.reducer;

// export function handleRemoveFromCart(id) {
//   return async (dispatch, getState) => {
//     dispatch(removeItem({ key: id }));
//     const { cart } = await getState().shop;
//     dispatch(setCartSubTotal({ total: getCartSubtotal(cart) }));
//     dispatch(setCartTotalQuantity({ total: getTotalQuantity(cart) }));
//   };
// }
