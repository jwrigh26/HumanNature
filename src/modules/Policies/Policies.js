import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

import { appSelector } from 'store/appSlice';
import ContentPrivacy from './Privacy/Privacy';
import AppBar from 'components/AppBar/AppBar';
import ScrollTop from 'components/ScrollTop';
import Terms from './Terms/Terms';
import ContentWrapper from 'components/ContentWrapper';



function Policies() {
  const { navigation } = useSelector(appSelector);
  const routes = navigation?.routes?.policies?.subRoutes;
  return (
    <ContentWrapper divider>
      <AppBar name={'policies'} tabs={navigation?.tabs?.policies}/>
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
    </ContentWrapper>
  );
}

export default Policies;
