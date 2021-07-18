import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { ScrollTopMarker } from 'components/ScrollTop.js';
import { appSelector } from 'store/appSlice';
import { shopSelector } from 'store/shopSlice';
import AppBar from 'components/AppBar/AppBar';
import Cart from 'components/Cart/Cart';
import Contact from 'modules/Contact/Contact.js';
import CookieSnackbar from 'components/CookieSnackbar';
import ContentWrapper from 'components/ContentWrapper';
import Shop from 'modules/Shop/Shop';
import ErrorSnackbar from 'components/ErrorSnackbar.js';
import Footer from 'components/Footer/Footer';
import Policies from 'modules/Policies/Policies';
import TopAppBar from 'components/TopAppBar/TopAppBar';
import { hasValue } from 'helpers/utils';
import clsx from 'clsx';

// noinspection JSCheckFunctionSignatures
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    minHeight: '100vh',
    alignItems: 'center',
  },
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: 0,
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('lg')]: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  mainShift: {
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${theme.props.cart.drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: theme.props.cart.drawerWidth,
    },
  },
  content: {
    [theme.breakpoints.up('lg')]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -theme.props.cart.drawerWidth,
    },
  },
  contentShift: {
    [theme.breakpoints.up('lg')]: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
  },
}));

function App() {
  const {
    navigation: { routes, tabs },
    appBar,
  } = useSelector(appSelector);
  const { cart } = useSelector(shopSelector);
  const theme = useTheme();
  const classes = useStyles(theme);
  // Webstorm doesn't play nicely with
  // navigation that originates from a JSON file
  // because the values come from json:
  // noinspection JSUnresolvedVariable

  // Need a way to feed in tabs and name for app bar
  // useEffect(() => {
  //   console.log('Appbar', appBar);
  // }, [appBar]);

  return (
    <>
      <Box className={classes.root}>
        <Box
          className={clsx(classes.main, { [classes.mainShift]: cart.open })}
          component="main"
        >
          <TopAppBar />
          <ScrollTopMarker />
          <ContentWrapper
            classes={clsx(classes.content, {
              [classes.contentShift]: cart.open,
            })}
            divider={hasValue(appBar)}
          >
            {hasValue(appBar) && <AppBar name={appBar} tabs={tabs?.[appBar]} />}
            <Switch>
              <Route path={routes?.contact?.route}>
                <Contact />
              </Route>
              <Route path={routes?.policies?.route}>
                <Policies />
              </Route>
              <Route path="/shop">
                <Shop />
              </Route>

              {/* TODO: Enable Home Route */}
              {/* <Route exact path="/">
                <Home />
              </Route> */}
              <Route render={() => <Redirect to="/shop" />} />
            </Switch>
          </ContentWrapper>
        </Box>
        <Footer />
        <Cart />
        <CookieSnackbar />
        <ErrorSnackbar />
      </Box>
    </>
  );
}
export default App;
