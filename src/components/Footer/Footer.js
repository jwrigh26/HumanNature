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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexGrow: 0,
    height: '64px',
    width: '100%',
    padding: theme.spacing(2),
  },
  leading: {
    background: 'red',
    flex: 1,
  },
  trailing: {
    background: 'green',
    flex: 1,
  },
  privacy: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    listStyle: 'none',
  }
}));

function Footer() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <footer className={classes.footer}>
      <section className={classes.leading}>
        <Typography variant="body2">{`© 2021 — Unimath | All Rights Reserved`}</Typography>
      </section>
      <section className={classes.trailing}>
        <ul className={classes.privacy}>
          <li>
            {/*<FooterLink to={'/policies/terms'}>Terms</FooterLink>*/}
          </li>
          <li>
            {/*<FooterLink to={'/policies/privacy'}>Privacy</FooterLink>*/}
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
