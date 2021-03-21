import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { hasValue } from 'helpers/utils';
import { appSelector, setSelectedTab } from 'store/appSlice';
import { setScreenSize } from 'store/screenSlice';
import useDetectScreenSize from 'hooks/useMedia';
import Post from 'modules/Post/Post';

Post.propTypes = {
  children: PropTypes.element,
};

function AppManager({ children }) {
  const dispatch = useDispatch();
  const { articles } = useSelector(appSelector)
  const screen = useDetectScreenSize();

  useEffect(() => {
    if (hasValue(articles)) {
      // console.log(articles);
      // dispatch(setSelectedTab({tab: 0}));
    }
  }, [articles]);

  useEffect(() => {
    dispatch(setScreenSize(screen));
  }, [screen]);

  return children;
}

export default AppManager;
