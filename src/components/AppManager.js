import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { hasValue } from 'helpers/utils';
import { appSelector, setSelectedTab } from 'store/appSlice';
import Post from 'modules/Post/Post';

Post.propTypes = {
  children: PropTypes.element,
};

function AppManager({ children }) {
  const dispatch = useDispatch();
  const { articles } = useSelector(appSelector)

  useEffect(() => {
    if (hasValue(articles)) {
      // console.log(articles);
      // dispatch(setSelectedTab({tab: 0}));
    }
  }, [articles]);


  return children;
}

export default AppManager;
