import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import FooterLink from './FooterLink';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.primary.main,

    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.background.default,
    },
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexGrow: 0,
    height: 'inherits',
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

  return (
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
            <FooterLink to={'/policies/Legal'}>Legal</FooterLink>
          </li>
          <li className={classes.secondaryText}>|</li>
          <li>
            <FooterLink to={'/policies/privacy'}>Privacy</FooterLink>
          </li>
          <li className={classes.secondaryText}>|</li>
          <li>
            <FooterLink to={'/policies/terms'}>Terms</FooterLink>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
