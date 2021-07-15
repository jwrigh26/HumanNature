import React, { useEffect, useState } from 'react';
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
  const [items, setItems] = useState([]);
  // useCallback(() => setItems(books), [books]);
  const { categories, menuItems } = useSelector(shopSelector);

  const category = R.find(R.propEq('id', id), categories);

  useEffect(() => {
    const categoryKey = {
      988858: 'receptraNaturals',
      988962: 'agelessHoldings',
      988964: 'vaporizers',
      988967: 'books',
      1029337: 'canlock',
      1036898: 'bundles',
      1057760: 'grinders',
      1060835: 'CBDCBA',
      1129991: 'merch',
    };

    console.log('Key', categoryKey[id]);
    setItems(menuItems[categoryKey[id]]);
  }, [id, items]);

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        {category?.categoryType}
      </Typography>
      <Items list={items} />
    </div>
  );
}

/**
 * 
 *  items: {
      agelessHoldings: agelessHoldingsMeta,
      books: booksMeta,
      bundles: bundlesMeta,
      canlock: canlockMeta,
      CBD: CBDMeta,
      grinders: grindersMeta,
      merch: merchMeta,
      receptraNaturals: receptraNaturalsMeta,
      vaporizers: vaporizersMeta,
    },
 */
