import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { shopSelector } from 'store/shopSlice';
import Item from './Item';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '2rem',
    marginTop: '2rem',
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
  const { cart, categories, menuItems } = useSelector(shopSelector);

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

    setItems(menuItems[categoryKey[id]]);
  }, [id, items]);

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        {category?.categoryType}
      </Typography>
      <Grid container spacing={3}>
        {items.map((item) => {
          return (
              <Grid
                item
                key={`${item.merchantId}-${item.id}`}
                xs={12}
                sm={6}
                md={4}
                lg={3}
              >
                <Item item={item} />
              </Grid>
          );
        })}
      </Grid>
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
