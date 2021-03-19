import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import LinkTab from 'components/TopAppBar/LinkTab';
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
  const theme = useTheme();
  const classes = useStyles(theme);

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log('Value: ', value);
  }, [value]);

  useEffect(() => {
    setValue(0);
  }, []);

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
        value={value}
      >
        <LinkTab label="Home" to="/" {...a11yProps(0)} />
        <LinkTab
          label="OldSchoolLemons"
          to="/post/old-school-lemons"
          {...a11yProps(1)}
        />
        <LinkTab label="LemonCake" to="/post/lemon-cake" {...a11yProps(2)} />
        <LinkTab
          label="White 99%"
          to="/post/white-99"
          {...a11yProps(3)}
        />
      </MuiTabs>
    </div>
  );
}

export default Tabs;
