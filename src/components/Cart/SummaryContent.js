import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { getCurrencyFromNumber } from 'helpers/formatHelper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(1),
    width: '100%',
  },
  content: {
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

SummaryContent.propTypes = {
  item: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default function SummaryContent({ item, quantity }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { name, price } = item;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
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
  );
}
