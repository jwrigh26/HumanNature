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
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AgelessHoldings() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { agelessHoldings } = useSelector(shopSelector);
  console.log('Render: Ageless Holdings');
  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Ageless Holdings
      </Typography>
      <Items list={agelessHoldings} />
    </div>
  );
}
