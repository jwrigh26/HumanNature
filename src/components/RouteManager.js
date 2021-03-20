import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import { hasValue } from 'helpers/utils';
import { appSelector, setSelectedTab } from 'store/appSlice';
import { switchToArticle } from 'store/postSlice';

import useRoutePost from 'hooks/useRoutePost';
import useRouteTab from 'hooks/useRouteTab';
import Post from 'modules/Post/Post';

Post.propTypes = {
  children: PropTypes.element,
};

function RouteManager({ children }) {
  const dispatch = useDispatch();
  const { navigation } = useSelector(appSelector);
  const routedPost = useRoutePost();
  const routedTab = useRouteTab();

  console.log('RouteManager');

  if (hasValue(routedTab)) {
    console.log('Tab', routedTab);
  }
  if (hasValue(routedPost)) {
    console.log('Post', routedPost);
  }

  useEffect(() => {
    const { key } = routedTab ?? {};
    if (hasValue(key) && hasValue(navigation?.routes?.[key])) {
      console.log('Key:', key);
      dispatch(setSelectedTab({ tab: navigation?.routes?.[key]?.id }));
    }
  }, [routedTab]);

  useEffect(() => {
    const { article, key } = routedPost ?? {};
    // if (hasValue(key)) {
    //   console.log('Article', article);
    //   console.log('Key', key);
    //   dispatch(switchToArticle({ article, key }));
    // }
  }, [routedPost]);

  return children;
}

export default RouteManager;
