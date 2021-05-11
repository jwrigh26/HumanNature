import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import ActionGroup from './ActionGroup';
import BrandCrest from './BrandCrest';
import MuiToolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(1),

    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.background.default,
      marginTop: theme.spacing(2),
    },
  },
  wrapper: {
    flexGrow: 0,
  },
  toolbar: {
    [theme.breakpoints.down('md')]: {
      // minHeight: 128,
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(0),
    },
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      minHeight: theme.mixins.toolbar.minHeight,
      paddingBottom: theme.spacing(1),
    },
  },

  icon: {
    color: theme.palette.icon.primary,
    [theme.breakpoints.up('md')]: {
      color: theme.palette.icon.primary,
    },
  },
}));

function Toolbar() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <MuiToolbar className={classes.toolbar} disableGutters>
        <BrandCrest />
        <ActionGroup />
      </MuiToolbar>
    </>
  );
}

function TopAppBar() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.wrapper}>
      <AppBar
        classes={{
          root: classes.appbar,
        }}
        elevation={0}
        position="static"
      >
        <Toolbar />
      </AppBar>
    </div>
  );
}

export default TopAppBar;
