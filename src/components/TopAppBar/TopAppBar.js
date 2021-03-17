import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// TopAppBar.propTypes = {
//
// };

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

LinkTab.propTypes = {
  to: PropTypes.string,
};

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      onClick={(event) => {
        // event.preventDefault();
        // console.log("This was read", props.to)
      }}
      to={props.to}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopAppBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
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
