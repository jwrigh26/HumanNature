import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { appSelector, setSelectedTab } from 'store/appSlice';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { isNil } from 'helpers/utils';
import LinkTab from './Tab';
import MuiTabs from '@material-ui/core/Tabs';

AppBar.propTypes = {
  name: PropTypes.string,
  tabs: PropTypes.array,
};

const useStyles = makeStyles((theme) => ({
  tabs: {},
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 4,
    '& > span': {
      maxWidth: 64,
      width: '100%',
      backgroundColor: theme.palette.primary.dark,
    },
  },
  wrapper: {
    display: 'flex',
    height: 'inherit',
  },
}));

function AppBar({ name, tabs }) {
  const dispatch = useDispatch();
  const { selectedTab } = useSelector(appSelector);
  const theme = useTheme();
  const classes = useStyles(theme);
  const location = useLocation();
  const [value, setValue] = useState(undefined);

  // We only want to update the value of tabs
  // from the selectedTab if the value has changed
  useEffect(() => {
    if (!isNil(selectedTab) && selectedTab !== value) {
      setValue(selectedTab);
    }
  }, [selectedTab]);

  // Listen for location changes
  useEffect(() => {
    const tabId = tabs.reduce((id, tab) => {
      const isPath = location?.pathname === tab.route;
      return isPath ? tab.id : id;
    }, 0);

    if (value !== tabId) {
      setValue(tabId);
    }
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(setSelectedTab(newValue));
  };

  function a11yProps(index) {
    return {
      id: `${name}-tab-${index}`,
      'aria-controls': `${name}-tabpanel-${index}`,
      value: index,
    };
  }

  return (
    <div className={classes.wrapper}>
      <MuiTabs
        aria-label={`${name} app bar`}
        classes={{
          root: classes.tabs,
          indicator: classes.indicator,
        }}
        component="nav"
        onChange={handleChange}
        TabIndicatorProps={{ children: <span /> }}
        value={isNil(value) ? false : value}
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabs.map((tab) => (
          <LinkTab
            key={tab.id}
            label={tab.title}
            value={tab.id}
            to={tab.route}
            {...a11yProps(tab.id)}
          />
        ))}
      </MuiTabs>
    </div>
  );
}

export default AppBar;
