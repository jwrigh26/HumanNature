import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import WrapperBox from '../../components/WrapperBox';

import { appSelector } from 'store/appSlice';
import PolicyAppBar from './fragments/PolicyAppBar.js';

import { Link } from 'react-router-dom';

function Policies() {
  const { navigation } = useSelector(appSelector);
  const routes = navigation?.routes?.policies?.subRoutes;
  return (
    <WrapperBox>
      <PolicyAppBar />
      <Switch>
        <Route path={routes?.privacyPolicy?.route}>
          <h1>Privacy Policy</h1>
        </Route>
        <Route path={routes?.termsOfService?.route}>
          <h1>Terms of Service</h1>
        </Route>
        <Route path={routes?.legal?.route}>
          <h1>Legal</h1>
        </Route>
        <Route
          render={() => <Redirect to={routes?.privacyPolicy?.route} />}
        />
      </Switch>
    </WrapperBox>
  );
}

export default Policies;
