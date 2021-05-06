import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';

import { appSelector } from 'store/appSlice';
import SVG from 'assets/unimathLogo.js';

const useStyles = makeStyles((theme) => ({
  titleWrapper: {
    display: 'flex',
    paddingLeft: theme.spacing(1),
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontWeight: 700,
    position: 'relative',
    color: theme.palette.text.primary,
    [theme.breakpoints.up('md')]: {
      color: theme.palette.text.primary,
    },
  },
  subTitle: {
    fontWeight: 500,
    paddingLeft: theme.spacing(2),
    position: 'relative',
  },
}));

function BrandCrest() {
  const [subTitle, setSubTitle] = useState(null);

  const { navigation } = useSelector(appSelector);
  const { routes } = navigation ?? {};
  const theme = useTheme();
  const classes = useStyles(theme);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname?.includes(routes?.policies?.route)) {
      setSubTitle(routes?.policies?.title);
    } else {
      setSubTitle(null);
    }
  }, [pathname]);

  return (
    <div className={classes.titleWrapper}>
      <ButtonBase
        disableRipple
        disableTouchRipple
        component={Link}
        to={'/'}
        // Don't need to do this because need click event
        // to call "to"
        // onClick={(event) => {
        //   event.preventDefault();
        // }}
      >
        <SVG />
        <Typography className={classes.title} variant="h2">
          Unimath
        </Typography>
      </ButtonBase>
      <Typography className={classes.subTitle} variant={'h3'}>
        Unimath
      </Typography>
    </div>
  );
}

export default BrandCrest;
