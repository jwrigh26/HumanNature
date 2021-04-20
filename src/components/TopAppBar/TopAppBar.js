import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import ActionGroup from './ActionGroup';
import BrandCrest from './BrandCrest';
import Tabs from './Tabs';
import Toolbar from './Toolbar';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.background.default,

    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.background.default,
    },
  },
  wrapper: {
    flexGrow: 0,
  },
}));

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
        <Toolbar
          actionGroup={ActionGroup}
          brandCrest={BrandCrest}
          tabs={Tabs}
        />
      </AppBar>
    </div>
  );
}

export default TopAppBar;
