import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appSelector, setSelectedTab } from 'store/appSlice';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';

import { isNil } from 'helpers/utils';
import LinkTab from './LinkTab';
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
      backgroundColor: theme.palette.common.black,
    },
  },
  wrapper: {
    display: 'flex',
    height: 'inherit',
    paddingRight: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      paddingRight: theme.spacing(0),
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
    },
  },
}));

function Tabs() {
  const dispatch = useDispatch();
  const { navigation, selectedTab } = useSelector(appSelector);
  const theme = useTheme();
  const classes = useStyles(theme);

  const [value, setValue] = useState(undefined);

  // We only want to update the value of tabs
  // from the selectedTab if the value has changed
  useEffect(() => {
    if (!isNil(selectedTab) && selectedTab !== value) {
      console.log('Setting Value via SelectedTab', selectedTab);
      setValue(selectedTab);
    }
  }, [selectedTab]);

  const handleChange = (event, newValue) => {
    console.log('Setting Value: ', newValue);
    setValue(newValue);
    dispatch(setSelectedTab(newValue));
  };

  function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
      value: index,
    };
  }

  return (
    <div className={classes.wrapper}>
      <MuiTabs
        aria-label="Top App Bar"
        classes={{
          root: classes.tabs,
          indicator: classes.indicator,
        }}
        component="nav"
        onChange={handleChange}
        variant="standard"
        TabIndicatorProps={{ children: <span /> }}
        value={isNil(value) ? false : value}
      >
        {navigation?.tabs?.map((navItem) => (
          <LinkTab
            key={navItem.id}
            label={navItem.title}
            value={navItem.id}
            to={navItem.route}
            {...a11yProps(navItem.id)}
          />
        ))}
      </MuiTabs>
    </div>
  );
}

export default Tabs;
