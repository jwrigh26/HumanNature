import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
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

Category.propTypes = {
  id: PropTypes.number.isRequired,
};

export default function Category({ id }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  // const [items, setItems] = useState([]);
  // useCallback(() => setItems(books), [books]);
  const { categories, items } = useSelector(shopSelector);

  const category = R.find(R.propEq('id', id), categories);
  console.log('Category', category);

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Title Goes Here
      </Typography>
      {/* <Items list={books} /> */}
    </div>
  );
}
