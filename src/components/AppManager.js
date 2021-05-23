import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { hasValue } from 'helpers/utils';
import { setDevicePixelRatio, setScreenSize } from 'store/screenSlice';
import { useDetectScreenSize } from 'hooks/useMedia';
import useDevicePixelRatio from 'hooks/useDevicePixelRatio';

import Post from 'modules/Post/Post';

Post.propTypes = {
  children: PropTypes.element,
};

function AppManager({ children }) {
  const dispatch = useDispatch();
  const screen = useDetectScreenSize();
  const dpr = useDevicePixelRatio();

  useEffect(() => {
    if (hasValue(dpr)) {
      dispatch(setDevicePixelRatio({ dpr }));
    }
  }, [dpr]);

  useEffect(() => {
    dispatch(setScreenSize(screen));
  }, [screen]);

  return children;
}

export default AppManager;
