import { createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';
import agelessHoldingsMeta from './tmp/ageless-holdings-meta.json';
import booksMeta from './tmp/books-meta.json';
import bundlesMeta from './tmp/bundles-meta.json';
import canlockMeta from './tmp/canlock-meta.json';
import categoriesMeta from './tmp/categories-meta.json';
import CBDCBAMeta from './tmp/cbd-cba-meta.json';
import grindersMeta from './tmp/grinders-meta.json';
import merchMeta from './tmp/merch-meta.json';
import receptraNaturalsMeta from './tmp/receptra-naturals-meta.json';
import vaporizersMeta from './tmp/vaporizers-meta.json';

import cookies from 'models/cookies';
import helper from 'helpers/cookieHelper.js';
import userTheme from '../assets/theme';

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    cart: {
      open: false,
      items: {},
      quanity: {},
    },
    categories: categoriesMeta,
    menuItems: {
      agelessHoldings: agelessHoldingsMeta,
      books: booksMeta,
      bundles: bundlesMeta,
      canlock: canlockMeta,
      CBDCBA: CBDCBAMeta,
      grinders: grindersMeta,
      merch: merchMeta,
      receptraNaturals: receptraNaturalsMeta,
      vaporizers: vaporizersMeta,
    },
  },
  reducers: {
    addItem(state, action) {
      const { key, item } = action.payload;
      state.cart.items = { ...state.cart.items, [key]: item };
    },
    addCount(state, action) {
      const { key } = action.payload;
      console.log(key);
      const count = state.cart.quanity[key] ?? 0;
      state.cart.quanity = { ...state.cart.quanity, [key]: count + 1 };
    },
    removeItem(state, action) {
      const { key } = action.payload;
      state.cart.items = { ...state.cart.items, [key]: null };
      state.cart.quanity = { ...state.cart.quanity, [key]: 0 };
    },
    setCartOpen(state, action) {
      state.cart.open = action.payload.open;
    },
    subtractCount(state, action) {
      const { key } = action.payload;
      const count = state.cart.quanity[key] ?? 0;
      const newValue = count >= 1 ? count - 1 : 0;
      state.cart.quanity = { ...state.cart.quanity, [key]: newValue };
    },
  },
});

export function handleCookieReset() {
  return async () => {
    console.log('Cookie Reset');
    helper(cookies.options.key).removeItem(cookies?.options.accepted);
  };
}

export const shopSelector = R.prop('shop');

export const {
  addItem,
  addCount,
  removeItem,
  setCartOpen,
  subtractCount,
} = shopSlice.actions;

export default shopSlice.reducer;
