import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { getCurrencyFromNumber } from 'helpers/formatHelper';
import Typography from '@material-ui/core/Typography';
import Thumbnail from '../../../components/Cart/Thumbnail';

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
  },
  meta: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
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
}));

SummaryItem.propTypes = {
  item: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default function SummaryItem({ item, quantity }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { name, price } = item;

  return (
    <div className={classes.root}>
      <Thumbnail item={item} />
      <div className={classes.content}>
        <div className={classes.details}>
          <Typography className={classes.name} variant="body1" component="h4">
            {name}
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
        <div className={classes.meta}>
          <Typography
            className={classes.quantity}
            variant={'h6'}
            component="h5"
            gutterBottom={false}
          >
            {`Qty: ${quantity}`}
          </Typography>
        </div>
      </div>
    </div>
  );
}
