import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { appSelector, setSelectedTab } from 'store/appSlice';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';

import {backToTopAnchor} from 'components/ScrollTop';
import { isNil } from 'helpers/utils';
import LinkTab from './PolicyLinkTab';
import MuiTabs from '@material-ui/core/Tabs';

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

function Tabs() {
  const dispatch = useDispatch();
  const { navigation, selectedTab } = useSelector(appSelector);
  const routes = navigation?.routes?.policies?.subRoutes;
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

  useEffect(() => {
    const tab = Object.keys(routes).reduce((id, key) => {
      const route = routes[key]?.route;
      if (location?.pathname === route) {
        return routes[key]?.id;
      }
      return id;
    }, 0);
    if (value !== tab) {
      setValue(tab);
    }
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(setSelectedTab(newValue));
  };

  function a11yProps(index) {
    return {
      id: `policy-tab-${index}`,
      'aria-controls': `policy-tabpanel-${index}`,
      value: index,
    };
  }

  return (
    <div className={classes.wrapper} id={backToTopAnchor} >
      <MuiTabs
        aria-label="Policy App Bar"
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
        {Object.keys(routes).map((key) => (
          <LinkTab
            key={routes[key].id}
            label={routes[key].title}
            value={routes[key].id}
            to={routes[key].route}
            {...a11yProps(routes[key].id)}
          />
        ))}
      </MuiTabs>
    </div>
  );
}

export default Tabs;
