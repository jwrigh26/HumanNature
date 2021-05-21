import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import { appSelector } from 'store/appSlice';
import Contact from 'modules/Contact/Contact.js';
import CookieSnackbar from 'components/CookieSnackbar';
import Dashboard from 'modules/Dashboard/Dashboard';
import Footer from 'components/Footer/Footer';
import Policies from 'modules/Policies/Policies';
import TopAppBar from 'components/TopAppBar/TopAppBar';

// noinspection JSCheckFunctionSignatures
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    minHeight: '100vh',
  },
  body: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: 0,
    maxWidth: theme.breakpoints.values.siteMaxWidth,

    height: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    [theme.breakpoints.up('siteMaxWidth')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      minWidth: theme.breakpoints.values.siteMaxWidth,
    },
  },
  main: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
  },
}));

function App() {
  const { navigation } = useSelector(appSelector);
  const { routes } = navigation ?? {};
  const theme = useTheme();
  const classes = useStyles(theme);
  // Webstorm doesn't play nicely with
  // navigation that originates from a JSON file
  // because the values come from json:
  // noinspection JSUnresolvedVariable

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.body}>
          <TopAppBar />
          <main className={classes.main}>
            <Switch>
              <Route path={routes?.contact?.route}>
                <Contact />
              </Route>
              <Route path={routes?.policies?.route}>
                <Policies />
              </Route>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </main>
        </Box>
        <Footer />
        <CookieSnackbar />
      </Box>
    </>
  );
}
export default App;
