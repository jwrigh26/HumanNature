import { createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    content: {
      id: null,
    },
  },
  reducers: {
    setContent(state, action) {
      state.content = {
        ...state.content,
        article: action?.payload.article,
        key: action?.payload.key,
      };
    },
    switchToArticle(state, action) {
      const { article, key } = action.payload ?? {};
      state.content.article = article;
      state.content.key = key;
    },
  },
});

export const { setContent, switchToArticle } = postSlice.actions;

export const postSelector = R.prop('post');

export default postSlice.reducer;
