import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Step from './CheckoutStep';

const useStyles = makeStyles((theme) => ({
  info: {
    // marginTop: theme.spacing(2),
    // marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'flex-start',
  },
  text: {
    color: theme.palette.text.secondary,
    paddingRight: '8px',
  },
  bold: {
    color: theme.palette.text.primary,
    fontWeight: 700,
  },
  shipping: {
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'flex-start',
    alignItems: 'center',
  }
}));

Shipping.propTypes = {
  expanded: PropTypes.string,
  step: PropTypes.string,
};

export default function Shipping({ expanded, step }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Step expanded={true} label={'Shipping'}>
      <div className={classes.info}>
        <Typography
          className={classes.text}
          gutterBottom
          variant="body1"
          component="p"
        >
          Scrooge McDuck
        </Typography>
        <Typography
          className={classes.text}
          gutterBottom
          variant="body1"
          component="p"
        >
          555-555-5555
        </Typography>
        <Typography
          className={classes.text}
          gutterBottom
          variant="body1"
          component="p"
        >
          5555 N McManor CV
        </Typography>
        <Typography
          className={classes.text}
          gutterBottom
          variant="body1"
          component="p"
        >
          Duckburg, UT, 84095 / United States
        </Typography>
        
      </div>
      <div className={classes.shipping}>
      <Typography
          className={classes.text}
          gutterBottom
          variant="body1"
          component="p"
        >
          Flat Rate Shipping (4-6 Business days)
        </Typography>
        <Typography
          className={classes.bold}
          gutterBottom
          variant="body1"
          component="p"
        >
          $10.00
        </Typography>
      </div>
    </Step>
  );
}
