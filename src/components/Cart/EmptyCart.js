import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: theme.palette.grey[400],
    width: 48,
    height: 48,
  },
  text: {
    color: theme.palette.grey[400],
    marginTop: theme.spacing(2),
  },

  gutter: {
    marginBottom: theme.spacing(8),
  }
}));

export default function EmptyCart() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <Typography className={clsx(classes.text)} variant="h6" component="span">
        Looks like your cart is empty.
      </Typography>
      <Typography className={clsx(classes.text, classes.gutter)} variant="h3" component="h3">
        Let's go shopping!
      </Typography>
      <RemoveShoppingCartIcon className={clsx(classes.icon, classes.gutter)} />
    </div>
  );
}
