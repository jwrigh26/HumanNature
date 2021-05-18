import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import WrapperBox from '../../components/WrapperBox';

import { appSelector } from 'store/appSlice';
import PolicyAppBar from './fragments/PolicyAppBar.js';

import ContentPrivacy from './Privacy/Privacy.js';
import Terms from './Terms/Terms';

function Policies() {
  const { navigation } = useSelector(appSelector);
  const routes = navigation?.routes?.policies?.subRoutes;
  return (
    <WrapperBox>
      <PolicyAppBar />
      <Switch>
        <Route path={routes?.privacyPolicy?.route}>
          <ContentPrivacy />
        </Route>
        <Route path={routes?.termsOfService?.route}>
          <Terms />
        </Route>
        <Route
          render={() => <Redirect to={routes?.privacyPolicy?.route} />}
        />
      </Switch>
    </WrapperBox>
  );
}

export default Policies;
