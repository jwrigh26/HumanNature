import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import { getCurrencyFromNumber } from 'helpers/formatHelper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: theme.spacing(1),
  },
  name: {
    fontSize: '0.8rem',
  },
  meta: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  price: {
    fontFamily: theme.typography.fontFamlies.secondary,
    fontSize: '0.9rem',
    fontWeight: 700,
    marginRight: theme.spacing(2),
  },
  quantity: {
    fontFamily: theme.typography.fontFamlies.secondary,
    fontSize: '0.9rem',
    fontWeight: 400,
    color: theme.palette.text.secondary,
    transition: theme.transitions.create('opacity', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.short,
    }),
    opacity: 1,
  },
  hidden: {
    transition: theme.transitions.create('opacity', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.short,
    }),
    opacity: 0,
  },
}));

Content.propTypes = {
  expanded: PropTypes.bool,
  item: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default function Content({ expanded = false, item, quantity }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { name, price } = item;

  return (
    <div className={classes.root}>
      <Typography className={classes.name} variant="body1" component="h4">
        {name}
      </Typography>
      <div className={classes.meta}>
        <Typography
          className={classes.price}
          variant={'h6'}
          component="h5"
          gutterBottom={false}
        >
          {getCurrencyFromNumber(price)}
        </Typography>
        <Typography
          className={clsx(classes.quantity, { [classes.hidden]: expanded })}
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
