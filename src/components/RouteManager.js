import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import { hasValue } from 'helpers/utils';
import { switchToArticle } from 'store/postSlice';
import useRoutePost from 'hooks/useRoutePost';
import Post from 'modules/Post/Post';

Post.propTypes = {
  children: PropTypes.element,
};

function RouteManager({ children }) {
  const dispatch = useDispatch();
  const routedPost = useRoutePost();

  useEffect(() => {
    const { article, key } = routedPost ?? {};
    if (hasValue(key)) {
      console.log('Article', article);
      console.log('Key', key);
      dispatch(switchToArticle({ article, key }));
    }
  }, [routedPost]);

  return children;
}

export default RouteManager;
