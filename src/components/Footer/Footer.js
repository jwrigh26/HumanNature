import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.primary.main,

    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.background.default,
    },
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    flexGrow: 1,
    height: '128px',
    width: '100%',
  },
}));

function Footer() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <footer className={classes.footer}>
      <Typography variant="body2">{`© 2021 — Unimath`}</Typography>
    </footer>
  );
}

export default Footer;
