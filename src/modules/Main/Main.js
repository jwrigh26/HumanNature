import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { appSelector } from 'store/appSlice';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import CookieSnackbar from 'components/CookieSnackbar';
import Footer from 'components/Footer/Footer';
import TopAppBar from 'components/TopAppBar/TopAppBar';
import Dashboard from 'modules/Dashboard/Dashboard';
import Post from 'modules/Post/Post';

import config from 'helpers/config';

// noinspection JSCheckFunctionSignatures
const useStyles = makeStyles((theme) => ({
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
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    minHeight: '100vh',
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

  console.log('Config: ', config.projectId);

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Box className={classes.body}>
          <TopAppBar />
          <main className={classes.main}>
            <Switch>
              <Route path={routes?.gsBusiness?.route}>
                <Post meta={routes?.gsBusiness} />
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
    </React.Fragment>
  );
}
export default App;
