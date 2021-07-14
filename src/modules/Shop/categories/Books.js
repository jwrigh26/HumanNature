import React, { useState } from 'react';
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

export default function Books() {
  const theme = useTheme();
  const classes = useStyles(theme);
  // const [items, setItems] = useState([]);
  const { books } = useSelector(shopSelector);

  // useCallback(() => setItems(books), [books]);

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Books
      </Typography>
      <Items list={books} />
    </div>
  );
}
