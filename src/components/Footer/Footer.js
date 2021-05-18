import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import FooterLink from './FooterLink';

import { appSelector } from 'store/appSlice';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.primary.main,
    width: 'inherit',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexGrow: 0,
    margin: 0,
    maxWidth: theme.breakpoints.values.siteMaxWidth,
    height: 'inherits',
    [theme.breakpoints.up('md')]: {
      // marginLeft: theme.spacing(2),
      // marginRight: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      // marginLeft: theme.spacing(4),
      // marginRight: theme.spacing(4),
    },
    [theme.breakpoints.up('siteMaxWidth')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      height: '64px',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
  },
  leading: {
    flex: 1,
    paddingLeft: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(2),
    },
  },
  trailing: {
    flex: 1,
    paddingRight: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(2),
    },
  },
  info: {
    paddingLeft: theme.spacing(1.5),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(0),
      paddingLeft: theme.spacing(0),
    },
  },
  privacy: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    listStyle: 'none',
    paddingInlineStart: 0,
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
    },
  },
  text: {
    color: theme.palette.common.white,
  },
  secondaryText: {
    color: theme.palette.common.white,
    opacity: 0.8,
  },
}));

function Footer() {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { navigation } = useSelector(appSelector);
  const { subRoutes: routes } = navigation?.routes?.policies ?? {};

  return (
    <div className={classes.wrapper}>
      <footer className={classes.footer}>
        <section className={classes.leading}>
          <div className={classes.info}>
            <Typography
              classes={{ root: classes.text }}
              variant="body2"
            >{`© 2021 — Unimath | All Rights Reserved`}</Typography>
          </div>
        </section>
        <section className={classes.trailing}>
          <ul className={classes.privacy}>
            <li>
              <FooterLink to={`${routes?.privacyPolicy?.route}`}>
                Privacy Policy
              </FooterLink>
            </li>
            <li className={classes.secondaryText}>|</li>
            <li>
              <FooterLink to={`${routes?.termsOfService?.route}`}>
                Terms of Service
              </FooterLink>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
