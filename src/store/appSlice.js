import { createSlice } from '@reduxjs/toolkit';
import * as R from "ramda";
import articleMeta from './tmp/article-meta.json';
import navigation from './tmp/navigation.json';
import navigationArray from './tmp/navigation-array.json';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    articles: articleMeta,
    navigation: {
      dictionary: navigation,
      list: navigationArray,
    },
    selectedTab: undefined,
  },
  reducers: {
    setFoo(state, action) {
      state.foo = action.payload.foo;
    },
    setSelectedTab(state, action) {
      state.selectedTab = action.payload.tab;
    }
  },
});

export const appSelector = R.prop('app');

export const { setFoo, setSelectedTab } = appSlice.actions;

export default appSlice.reducer;
