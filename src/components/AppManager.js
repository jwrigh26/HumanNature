import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { hasValue } from 'helpers/utils';
import { appSelector, setFoo } from 'store/appSlice';
import Post from 'modules/Post/Post';

Post.propTypes = {
  children: PropTypes.element,
};

function RouteManager({ children }) {
  const dispatch = useDispatch();
  const { articles } = useSelector(appSelector)

  useEffect(() => {
    if (hasValue(articles)) {
      console.log(articles);
      dispatch(setFoo({foo: 'dirp herp'}));
    }

  }, [articles]);

  return children;
}

export default RouteManager;
