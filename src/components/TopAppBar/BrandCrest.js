import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Hidden from '@material-ui/core/Hidden';

import { appSelector } from 'store/appSlice';
import { hasValue, isNil } from 'helpers/utils';
import SVG from 'assets/unimathLogo.js';

const useStyles = makeStyles((theme) => ({
  titleWrapper: {
    display: 'flex',
    marginLeft: theme.spacing(1),
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    height: '56px',
    [theme.breakpoints.up('md')]: {
      marginLeft: 0,
    },
    [theme.breakpoints.up('md')]: {
      height: '72px',
    },
  },
  title: {
    fontWeight: 700,
    position: 'relative',
    color: theme.palette.text.primary,
    bottom: '0px',
    [theme.breakpoints.up('xs')]: {
      bottom: '0px',
    },
    [theme.breakpoints.up('sm')]: {
      bottom: '4px',
    },
    [theme.breakpoints.up('md')]: {
      color: theme.palette.text.primary,
      bottom: '0px',
    },
  },
  subTitle: {
    fontWeight: 500,
    paddingLeft: 0,
    paddingRight: theme.spacing(1),
    position: 'relative',
    bottom: 0,
    color: theme.palette.text.primary,

    [theme.breakpoints.up('md')]: {
      bottom: '-3px',
    },
    [theme.breakpoints.up('lg')]: {
      bottom: '-4px',
    },
  },

  supportingTitle: {
    fontWeight: 700,
    position: 'relative',
    color: theme.palette.text.primary,
    bottom: '2px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.55rem',
    },
    [theme.breakpoints.up('iphone6')]: {
      fontSize: '1.8rem',
    },
    [theme.breakpoints.up('sm')]: {
      bottom: '4px',
      fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      color: theme.palette.text.primary,
      bottom: '0px',
      fontSize: '3.3333rem',
    },
    [theme.breakpoints.up('lg')]: {
      color: theme.palette.text.primary,
      bottom: '0px',
      fontSize: '3.75rem',
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
        <ButtonBase
          disableRipple
          disableTouchRipple
          component={Link}
          to={routes?.policies?.route}
        >
          <Typography className={classes.supportingTitle} variant="h2" noWrap>
            {subTitle}
          </Typography>
        </ButtonBase>
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
      {renderDefault()}
      {/*{isNil(subTitle) && renderDefault()}*/}
      {/*{hasValue(subTitle) && renderWithSubtitle()}*/}
    </>
  );
}

export default BrandCrest;
