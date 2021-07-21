import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 56,
    height: 56,
    [theme.breakpoints.up('sm')]: {
      width: 72,
      height: 72,
    },
    background: theme.palette.grey[300],
    flexShrink: 0,
  },
}));

export default function Thumbnail() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <div className={classes.root} />;
}
