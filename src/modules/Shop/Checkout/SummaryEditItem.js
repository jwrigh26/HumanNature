import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { getCurrencyFromNumber } from 'helpers/formatHelper';
import Typography from '@material-ui/core/Typography';
import Thumbnail from 'components/Cart/Thumbnail';
import Meta from 'components/Cart/Meta';
import QuantityStepper from 'components/Cart/QuantityStepper';
import Divider from '@material-ui/core/Divider';
import {
  handleAddQuantityforItem,
  handleRemoveFromCart,
  handleSubtractQuantityForItem,
} from 'store/shopSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    // '&:not(:last-child)': {
    //   borderBottom: 0,
    // },
    // '&:before': {
    //   display: 'none',
    // },
  },
  content: {
    flex: 1,
    marginLeft: theme.spacing(2),
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: theme.spacing(1),
    paddringRight: theme.spacing(1),
  },
  name: {
    fontSize: '1rem',
  },
  price: {
    fontFamily: theme.typography.fontFamlies.secondary,
    fontSize: '1rem',
    fontWeight: 700,
    marginRight: theme.spacing(2),
  },
  quantity: {
    fontFamily: theme.typography.fontFamlies.secondary,
    fontSize: '1rem',
    fontWeight: 400,
    color: theme.palette.text.secondary,
    opacity: 1,
  },
  vertical: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },

  actions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 'inherit',
    padding: 0,
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(0),
  },
}));

SummaryItem.propTypes = {
  item: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default function SummaryItem({ item, quantity }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles(theme);
  const { name, price } = item;

  function handleRemoveItem(key) {
    return () => {
      dispatch(handleRemoveFromCart(key));
    };
  }

  function handleAdd(key) {
    return () => {
      dispatch(handleAddQuantityforItem(key));
    };
  }

  function handleSubtract(key) {
    return () => {
      dispatch(handleSubtractQuantityForItem(key));
    };
  }

  return (
    <div className={classes.root}>
      <Thumbnail item={item} />
      <div className={classes.content}>
        <div className={classes.details}>
          <Typography className={classes.name} variant="body1" component="h4">
            {`${name} id: ${item.id}`}
          </Typography>
          <Typography
            className={classes.price}
            variant={'h6'}
            component="h5"
            gutterBottom={false}
          >
            {getCurrencyFromNumber(price)}
          </Typography>
        </div>
        <div className={classes.actions}>
          <Meta item={item} />
          <Divider
            className={classes.vertical}
            orientation="vertical"
            flexItem
          />
          <QuantityStepper
            id={item.id}
            quantity={quantity}
            onAdd={handleAdd}
            onDelete={handleRemoveItem}
            onSubtract={handleSubtract}
          />
        </div>
      </div>
    </div>
  );
}
