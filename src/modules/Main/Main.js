import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { appSelector } from 'store/appSlice';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Footer from 'components/Footer/Footer';
import TopAppBar from 'components/TopAppBar/TopAppBar';
import Dashboard from 'modules/Dashboard/Dashboard';
import Post from 'modules/Post/Post';



// noinspection JSCheckFunctionSignatures
const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    maxWidth: theme.breakpoints.values.siteMaxWidth,
    minHeight: '100vh',
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
  }
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
    <React.Fragment>
      <Box className={classes.box}>
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
        <Footer />
      </Box>
    </React.Fragment>
  );
}
export default App;
