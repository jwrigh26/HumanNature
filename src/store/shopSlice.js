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
import { removeItem as deleteItem, sleep } from 'helpers/utils';

// import { getCurrencyFromNumber } from 'helpers/formatHelper';

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    cart: {
      open: false,
      items: {},
      quanity: {},
      shipping: 0,
      subtotal: 0,
      total: 0,
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
    form: {
      canEdit: false,
    }
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
    setCanEdit(state, action) {
      state.form.canEdit = action.payload.edit;
    },
    setCartOpen(state, action) {
      state.cart.open = action.payload.open;
    },
    setCartSubTotal(state, action) {
      state.cart.subtotal = action.payload.total;
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
export function updateCart(id, item) {
  return async (dispatch, getState) => {
    const { cart } = await getState().shop;
    const order = Object.keys(cart.items).length + 1;
    dispatch(addCount({ key: id }));
    dispatch(addItem({ key: id, item: { ...item, order } }));

    const { cart: newCart } = await getState().shop;
    dispatch(setCartTotalQuantity({ total: getTotalQuantity(newCart) }));
    dispatch(setCartSubTotal({ total: getCartSubtotal(newCart) }));
  };
}

export function handleRemoveFromCart(id) {
  return async (dispatch, getState) => {
    dispatch(removeItem({ key: id }));
    const { cart } = await getState().shop;
    dispatch(setCartSubTotal({ total: getCartSubtotal(cart) }));
    dispatch(setCartTotalQuantity({ total: getTotalQuantity(cart) }));
  };
}

export function handleAddQuantityforItem(id) {
  return async (dispatch, getState) => {
    dispatch(addCount({ key: id }));
    const { cart: newCart } = await getState().shop;
    dispatch(setCartTotalQuantity({ total: getTotalQuantity(newCart) }));
    dispatch(setCartSubTotal({ total: getCartSubtotal(newCart) }));
  };
}

export function handleSubtractQuantityForItem(id) {
  return async (dispatch, getState) => {
    dispatch(subtractCount({ key: id }));
    const { cart: newCart } = await getState().shop;
    dispatch(setCartTotalQuantity({ total: getTotalQuantity(newCart) }));
    dispatch(setCartSubTotal({ total: getCartSubtotal(newCart) }));
  };
}

export const shopSelector = R.prop('shop');


export const {
  addItem,
  addCount,
  removeItem,
  setCanEdit,
  setCartOpen,
  setCartSubTotal,
  setCartTotalQuantity,
  subtractCount,
} = shopSlice.actions;

export default shopSlice.reducer;

// TODO: Add subtotal, shipping, tax and total
// maybe a number and str version