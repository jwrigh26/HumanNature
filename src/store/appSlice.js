import { createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';
import articleMeta from './tmp/article-meta.json';
import navigationMeta from './tmp/navigation-meta.json';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    articles: articleMeta,
    navigation: navigationMeta,
    selectedTab: undefined,
  },
  reducers: {
    setFoo(state, action) {
      state.foo = action.payload.foo;
    },
    setSelectedTab(state, action) {
      state.selectedTab = action.payload.tab;
    },
  },
});

export const appSelector = R.prop('app');

export const { setFoo, setSelectedTab } = appSlice.actions;

export default appSlice.reducer;
