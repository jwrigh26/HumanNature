import { createSlice } from '@reduxjs/toolkit';
import * as R from "ramda";
import articleMeta from './tmp/article-meta.json';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    articles: articleMeta,
  },
  reducers: {
    setFoo(state, action) {
      state.foo = action.payload.foo;
    },
  },
});

export const appSelector = R.prop('app');

export const { setFoo } = appSlice.actions;

export default appSlice.reducer;
