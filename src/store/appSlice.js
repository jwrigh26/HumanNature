import { createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';
import articleMeta from './tmp/article-meta.json';
import navigationMeta from './tmp/navigation-meta.json';

import cookies from 'models/cookies';
import helper from 'helpers/cookieHelper.js';
import userTheme from '../assets/theme';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    articles: articleMeta,
    navigation: navigationMeta,
    themeBag: {
      color:
        helper(cookies.options.key).getItem(cookies.options.color) ||
        userTheme.paletteColor.purpleGrey,
      mode:
        helper(cookies.options.key).getItem(cookies.options.mode) ||
        userTheme.mode.light,
    },
    selectedTab: undefined,
  },
  reducers: {
    setPaletteColor(state, action) {
      const newColor = action.payload.color;
      helper(cookies.options.key).setItem(cookies.options.color, newColor);
      state.themeBag.color = action.payload.color;
    },
    setPaletteMode(state, action) {
      const newMode = action.payload.mode;
      helper(cookies.options.key).setItem(cookies.options.mode, newMode);
      state.themeBag.mode = newMode;
    },
    setSelectedTab(state, action) {
      state.selectedTab = action.payload.tab;
    },
  },
});

export function handleCookieReset() {
  return async () => {
    console.log('Cookie Reset');
    helper(cookies.options.key).removeItem(cookies?.options.accepted);
  };
}

export const appSelector = R.prop('app');

export const {
  setPaletteColor,
  setPaletteMode,
  setSelectedTab,
} = appSlice.actions;

export default appSlice.reducer;
