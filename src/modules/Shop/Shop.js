import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router';

import AgelessHoldings from './categories/AgelessHoldings';
import ReceptraNaturals from './categories/ReceptraNaturals';
import Splash from './categories/Splash';

import useRoute from 'hooks/useRoute';

const useStyles = makeStyles((theme) => ({
  body1: {
    marginBottom: theme.spacing(2),
  },
  body2: {
    marginBottom: theme.spacing(2),
  },
}));

function Shop() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { hasPath, paths } = useRoute();

  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const { path, url } = useRouteMatch();

  useEffect(() => {
    console.log('Paths');
    console.log(JSON.stringify(paths, null, 2));
  }, [paths]);

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <Splash />
        </Route>
        <Route path={`${path}/receptra-naturals`}>
          <ReceptraNaturals />
        </Route>
        <Route path={`${path}/ageless-holdings`}>
          <AgelessHoldings />
        </Route>
        {/* <Route exact path="/">
          <Splash />
        </Route> */}
        {/* <Route render={() => <Redirect to="/shop" />} /> */}
      </Switch>
    </>
  );
}

export default Shop;
