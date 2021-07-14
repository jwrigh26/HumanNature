import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { useSelector } from 'react-redux';
import { shopSelector } from 'store/shopSlice';
import Items from 'components/shop/Items';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Grinders() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { grinders } = useSelector(shopSelector);

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Books
      </Typography>
      <Items list={grinders} />
    </div>
  );
}
