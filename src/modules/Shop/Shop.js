import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router';
import useRoute from 'hooks/useRoute';

import Splash from './Splash';
import Category from './Category';
import Checkout from './Checkout/Checkout';
import HostedPayment from './HostedPayment';

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

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <Splash />
        </Route>
        <Route path={`${path}/receptra-naturals`}>
          <Category id={988858} />
        </Route>
        <Route path={`${path}/ageless-holdings`}>
          <Category id={988962} />
        </Route>
        <Route path={`${path}/vaporizers`}>
          <Category id={988964} />
        </Route>
        <Route path={`${path}/books`}>
          <Category id={988967} />
        </Route>
        <Route path={`${path}/canlock`}>
          <Category id={1029337} />
        </Route>
        <Route path={`${path}/bundles`}>
          <Category id={1036898} />
        </Route>
        <Route path={`${path}/grinders`}>
          <Category id={1057760} />
        </Route>
        <Route path={`${path}/cbd-cba`}>
          <Category id={1060835} />
        </Route>
        <Route path={`${path}/merch`}>
          <Category id={1129991} />
        </Route>
        <Route path={`${path}/cart-test`}>
          <HostedPayment />
        </Route>
        <Route path={`${path}/checkout`}>
          <Checkout />
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

/**
 *
 * Train of thought,
 * Pass id down and find category obj
 * Find items based on id
 * Worry about opt after
 *
 *
 * When done remove shop from components and remove categoreis folder
 */
