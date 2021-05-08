import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Hidden from '@material-ui/core/Hidden';

import { appSelector } from 'store/appSlice';
import { hasValue, isNil } from 'helpers/utils';
import SVG from 'assets/unimathLogo.js';

const useStyles = makeStyles((theme) => ({
  titleWrapper: {
    display: 'flex',
    paddingLeft: theme.spacing(1),
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    height: '56px',
    [theme.breakpoints.up('md')]: {
      height: '72px',
    },
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
    paddingLeft: 0,
    paddingRight: theme.spacing(1),
    position: 'relative',
    bottom: 0,
    [theme.breakpoints.up('md')]: {
      bottom: '-3px',
    },
    [theme.breakpoints.up('lg')]: {
      bottom: '-4px',
    },
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

  function renderWithSubtitle() {
    return (
      <div className={classes.titleWrapper}>
        <ButtonBase disableRipple disableTouchRipple component={Link} to={'/'}>
          <SVG />
          <Hidden smDown>
            <Typography className={classes.subTitle} variant={'h3'}>
              Unimath
            </Typography>
          </Hidden>
        </ButtonBase>
        <Hidden xsDown>
          <ButtonBase
            disableRipple
            disableTouchRipple
            component={Link}
            to={routes?.policies?.route}
          >
            <Typography className={classes.title} variant="h2">
              {subTitle}
            </Typography>
          </ButtonBase>
        </Hidden>
      </div>
    );
  }

  function renderDefault() {
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
      </div>
    );
  }

  return (
    <>
      {isNil(subTitle) && renderDefault()}
      {hasValue(subTitle) && renderWithSubtitle()}
    </>
  );
}

export default BrandCrest;
