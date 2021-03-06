import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { useLocation, useHistory } from 'react-router-dom';

import { appSelector, setAppBar } from 'store/appSlice';
import useRoute from 'hooks/useRoute';
import useTitle from 'hooks/useTitle';
// import { hasValue } from 'helpers/utils';
// import { switchToArticle } from 'store/postSlice';

// import useRoutePost from 'hooks/useRoutePost';
// import useRouteTab from 'hooks/useRouteTab';
import Post from 'modules/Post/Post';

Post.propTypes = {
  children: PropTypes.element,
};

function RouteManager({ children }) {
  const dispatch = useDispatch();
  const { navigation } = useSelector(appSelector);
  // const routedPost = useRoutePost();
  // const routedTab = useRouteTab();

  // Set browser tab name
  const base = 'Human+Nature';
  const { hasPath, paths } = useRoute();
  const title = hasPath ? `${base}-${paths[0]}` : base;
  useTitle(title);

  useEffect(() => {
    // check if home
    if (hasPath) {
      if (paths[0] === 'policies') {
        dispatch(setAppBar({ appBar: 'policies' }));
      }
      if (paths[0] === 'contact') {
        dispatch(setAppBar({ appBar: undefined }));
      }
    } else {
      dispatch(setAppBar({ appBar: 'shop' }));
    }
  }, [paths]);

  // useEffect(() => {
  //   const { key } = routedTab ?? {};
  //   if (hasValue(key) && hasValue(navigation?.routes?.[key])) {
  //     console.log('Routed Tab Key:', key, routedTab);
  //     dispatch(setSelectedTab({ tab: navigation?.routes?.[key]?.id }));
  //   }
  // }, [routedTab]);

  // useEffect(() => {
  //   const { article, key } = routedPost ?? {};
  //   if (hasValue(key)) {
  //     console.log('Article', article);
  //     console.log('Key', key);
  //     dispatch(switchToArticle({ article, key }));
  //   }
  // }, [routedPost]);

  return children;
}

export default RouteManager;
