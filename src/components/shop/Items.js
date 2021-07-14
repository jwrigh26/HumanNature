import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import Item from 'components/shop/Item';

Items.propTypes = {
  list: PropTypes.array.isRequired,
};

function Items({ list }) {
  return (
    <>
      <Grid container spacing={3}>
        {list.map((item) => {
          return (
            <Grid
              item
              key={`${item.merchantId}-${item.id}`}
              xs={12}
              sm={6}
              md={3}
            >
              <Item item={item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default React.memo(Items);
