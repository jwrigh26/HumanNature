import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import LinkTab from './LinkTab';
import { useTheme } from '@material-ui/core/styles';
import { a11yProps } from 'helpers/materialHelper';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme?.palette?.background?.default,
  },
  wrapper: {
    flexGrow: 1,
  },
}));

export default function TopAppBar() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(theme);

  return (
    <div className={classes.wrapper}>
      <AppBar
        classes={{
          root: classes.root,
        }}
        elevation={0}
        position="static"
      >
        <Toolbar variant="dense">
          <IconButton>
            <Icon>menu</Icon>
          </IconButton>
          <Tabs
            aria-label="Top App Bar"
            component="nav"
            indicatorColor={'primary'}
            onChange={handleChange}
            textColor={'primary'}
            variant="fullWidth"
            value={value}
          >
            <LinkTab
              label="OldSchoolLemons"
              to="/post/old-school-lemons"
              {...a11yProps(0)}
            />
            <LinkTab
              label="LemonCake"
              to="/post/lemon-cake"
              {...a11yProps(1)}
            />
            <LinkTab
              label="StrawberryCake"
              to="/post/strawberry-cake"
              {...a11yProps(2)}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}
