import { createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';
import agelessHoldingsMeta from './tmp/ageless-holdings-meta.json';
import booksMeta from './tmp/books-meta.json';
import bundlesMeta from './tmp/bundles-meta.json';
import canlockMeta from './tmp/canlock-meta.json';
import categoriesMeta from './tmp/categories-meta.json';
import CBDMeta from './tmp/cbd-cba-meta.json';
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
    categories: categoriesMeta,
    items: {
      agelessHoldings: agelessHoldingsMeta,
      books: booksMeta,
      bundles: bundlesMeta,
      canlock: canlockMeta,
      CBD: CBDMeta,
      grinders: grindersMeta,
      merch: merchMeta,
      receptraNaturals: receptraNaturalsMeta,
      vaporizers: vaporizersMeta,
    },
  },
  reducers: {},
});

export function handleCookieReset() {
  return async () => {
    console.log('Cookie Reset');
    helper(cookies.options.key).removeItem(cookies?.options.accepted);
  };
}

export const shopSelector = R.prop('shop');

export const {} = shopSlice.actions;

export default shopSlice.reducer;
