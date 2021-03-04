import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    content: {
      id: null,
    },
  },
  reducers: {
    setContentURL(state, action) {
      state.content = {
        ...state.content,
        ...action.payload,
      };
    },
  },
});

export default appSlice.reducer;
