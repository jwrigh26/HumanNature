import { createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';
import articleMeta from './tmp/article-meta.json';
import navigationMeta from './tmp/navigation-meta.json';

import userTheme from '../assets/theme';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    articles: articleMeta,
    navigation: navigationMeta,
    themeBag: {
      color: userTheme?.paletteColor.purpleGrey,
      mode: userTheme?.mode?.light,
    },
    selectedTab: undefined,
  },
  reducers: {
    setPaletteColor(state, action) {
      state.themeBag.color = action.payload.color;
    },
    setPaletteMode(state, action) {
      state.themeBag.mode = action.payload.mode;
    },
    setSelectedTab(state, action) {
      state.selectedTab = action.payload.tab;
    },
  },
});

export const appSelector = R.prop('app');

export const { setPaletteColor, setPaletteMode, setSelectedTab } = appSlice.actions;

export default appSlice.reducer;
