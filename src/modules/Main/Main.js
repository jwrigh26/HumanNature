import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { ScrollTopMarker } from 'components/ScrollTop.js';
import { appSelector } from 'store/appSlice';
import AppBar from 'components/AppBar/AppBar';
import Contact from 'modules/Contact/Contact.js';
import CookieSnackbar from 'components/CookieSnackbar';
import ContentWrapper from 'components/ContentWrapper';
import Calculator from 'modules/Calculator/Calculator';
import ErrorSnackbar from 'components/ErrorSnackbar.js';
import Footer from 'components/Footer/Footer';
import Policies from 'modules/Policies/Policies';
import TopAppBar from 'components/TopAppBar/TopAppBar';
import { hasValue } from 'helpers/utils';

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
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
  },
}));

function App() {
  const {
    navigation: { routes, tabs },
    appBar,
  } = useSelector(appSelector);
  const theme = useTheme();
  const classes = useStyles(theme);
  // Webstorm doesn't play nicely with
  // navigation that originates from a JSON file
  // because the values come from json:
  // noinspection JSUnresolvedVariable

  // Need a way to feed in tabs and name for app bar
  useEffect(() => {
    console.log('Appbar', appBar);
  }, [appBar]);

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.main} component="main">
          <TopAppBar />
          <ScrollTopMarker />
          <ContentWrapper divider={hasValue(appBar)}>
            {hasValue(appBar) && <AppBar name={appBar} tabs={tabs?.[appBar]} />}
            <Switch>
              <Route path={routes?.contact?.route}>
                <Contact />
              </Route>
              <Route path={routes?.policies?.route}>
                <Policies />
              </Route>
              <Route exact path="/">
                <Calculator />
              </Route>
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </ContentWrapper>
        </Box>
        <Footer />
        <CookieSnackbar />
        <ErrorSnackbar />
      </Box>
    </>
  );
}
export default App;
