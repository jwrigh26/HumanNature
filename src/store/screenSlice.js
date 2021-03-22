import { createSlice } from '@reduxjs/toolkit';
import { screenSize } from 'hooks/useMedia';
import * as R from 'ramda';

const screenSlice = createSlice({
  name: 'screen',
  initialState: {
    isMobile: false,
    currentScreenSize: null,
    devicePixelRatio: 1,
  },
  reducers: {
    setDevicePixelRatio(state, action) {
      state.devicePixelRatio = action.payload.dpr;
    },
    setScreenSize(state, action) {
      const { payload: screen } = action;

      state.isMobile = screen !== screenSize.lg;
      state.currentScreenSize = screen;
    },
  },
});

export const { setDevicePixelRatio, setScreenSize } = screenSlice.actions;

export const screenSelector = R.prop('screen');

export default screenSlice.reducer;
