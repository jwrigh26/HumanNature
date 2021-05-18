import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

import { appSelector } from 'store/appSlice';
import ContentPrivacy from './Privacy/Privacy.js';
import PolicyAppBar from './fragments/PolicyAppBar.js';
import ScrollTop from 'components/ScrollTop.js';
import Terms from './Terms/Terms';
import WrapperBox from '../../components/WrapperBox';



function Policies() {
  const { navigation } = useSelector(appSelector);
  const routes = navigation?.routes?.policies?.subRoutes;
  return (
    <WrapperBox>
      <PolicyAppBar/>
      <Switch>
        <Route path={routes?.privacyPolicy?.route}>
          <ContentPrivacy />
        </Route>
        <Route path={routes?.termsOfService?.route}>
          <Terms />
        </Route>
        <Route render={() => <Redirect to={routes?.privacyPolicy?.route} />} />
      </Switch>
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <Icon>keyboard_arrow_up</Icon>
        </Fab>
      </ScrollTop>
    </WrapperBox>
  );
}

export default Policies;
