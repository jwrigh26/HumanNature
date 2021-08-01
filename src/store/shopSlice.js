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
import { getCurrencyFromNumber } from 'helpers/formatHelper';
import { removeItem as deleteItem, sleep } from 'helpers/utils';

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    cart: {
      open: true,
      items: {},
      quanity: {},
      total: '$0.00',
      totalQuantity: 0,
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
      const count = state.cart.quanity[key] ?? 0;
      state.cart.quanity = { ...state.cart.quanity, [key]: count + 1 };
    },
    removeItem(state, action) {
      const { key } = action.payload;
      const items = { ...state.cart.items };
      const newItems = deleteItem(key, items);
      state.cart.items = newItems;
      state.cart.quanity = { ...state.cart.quanity, [key]: 0 };
    },
    setCartOpen(state, action) {
      state.cart.open = action.payload.open;
    },
    setCartTotal(state, action) {
      state.cart.total = getCurrencyFromNumber(action.payload.total);
    },
    setCartTotalQuantity(state, action) {
      state.cart.totalQuantity = action.payload.total;
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

function getCartSubtotal(cart) {
  return Object.keys(cart.items).reduce((sum, key) => {
    const { price } = cart.items[key] ?? { price: 0 };
    const count = cart.quanity[key] ?? 0;
    return sum + price * count;
  }, 0);
}

function getTotalQuantity(cart) {
  return Object.keys(cart.quanity).reduce((sum, key) => {
    return sum + cart.quanity[key];
  }, 0);
}

// Note: not sure if I'm a fan of getting state and
// then getting state again. What is the alternative?
export function handleAddToCart(id, item) {
  return async (dispatch, getState) => {
    const { cart } = await getState().shop;
    const order = Object.keys(cart.items).length + 1;
    dispatch(addCount({ key: id }));
    dispatch(addItem({ key: id, item: { ...item, order } }));

    const { cart: newCart } = await getState().shop;
    dispatch(setCartTotalQuantity({ total: getTotalQuantity(newCart) }));
    dispatch(setCartTotal({ total: getCartSubtotal(newCart) }));
  };
}

export function handleRemoveFromCart(id) {
  return async (dispatch, getState) => {
    dispatch(removeItem({ key: id }));
    const { cart } = await getState().shop;
    dispatch(setCartTotal({ total: getCartSubtotal(cart) }));
    dispatch(setCartTotalQuantity({ total: getTotalQuantity(cart) }));
  };
}

export function handleAddQuantityforItem(id) {
  return async (dispatch, getState) => {
    dispatch(addCount({ key: id }));
    const { cart: newCart } = await getState().shop;
    dispatch(setCartTotalQuantity({ total: getTotalQuantity(newCart) }));
    dispatch(setCartTotal({ total: getCartSubtotal(newCart) }));
  };
}

export function handleSubtractQuantityForItem(id) {
  return async (dispatch, getState) => {
    dispatch(subtractCount({ key: id }));
    const { cart: newCart } = await getState().shop;
    dispatch(setCartTotalQuantity({ total: getTotalQuantity(newCart) }));
    dispatch(setCartTotal({ total: getCartSubtotal(newCart) }));
  };
}

export const shopSelector = R.prop('shop');

export const {
  addItem,
  addCount,
  removeItem,
  setCartOpen,
  setCartTotal,
  setCartTotalQuantity,
  subtractCount,
} = shopSlice.actions;

export default shopSlice.reducer;
