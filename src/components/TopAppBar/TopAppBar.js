import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { useTheme } from '@material-ui/core/styles';

import ActionGroup from './ActionGroup';
import BrandCrest from './BrandCrest';
import Tabs from './Tabs';
import Toolbar from './Toolbar';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.primary.main,

    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.background.default,
    },
  },
  wrapper: {
    flexGrow: 1,
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
