import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { authorizePaymentTransaction } from 'store/paymentSlice';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Step from './CheckoutStep';
import TextField from '@material-ui/core/TextField';
import dummyData from 'models/dummy.json';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  button: {
    height: 56,
    width: '100%',
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      width: 196,
    },
  },
  row: {
    width: '100%',
    textAlign: 'left',
    display: 'flex',
    marginTop: theme.spacing(4),
    gap: theme.spacing(4),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: theme.spacing(4),
    },
  },
  text: {
    color: theme.palette.text.secondary,
    textAlign: 'left',
  },
  textfield: {
    flex: 1,
    width: '100%',
  },
  flexSmall: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      flex: 0.3,
    },
  },

  flexMed: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      flex: 0.7,
    },
  },
}));

Payment.propTypes = {
  expanded: PropTypes.string,
  step: PropTypes.string,
};

export default function Payment({ expanded, step }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles(theme);

  async function handleHostedPayment() {
    const cardData = {
      cardNumber: '4111111111111111',
      month: '12',
      year: '22',
      cardCode: '123',
      zip: '84905',
      fullName: 'Scrooge McDuck',
    };

    dispatch(
      authorizePaymentTransaction({ cardData, transactionData: dummyData })
    );
  }

  return (
    <Step expanded={true} label={'Payment'}>
      <>
        <Typography
          className={classes.text}
          gutterBottom
          variant="body1"
          component="p"
        >
          Credit / Debit Cards
        </Typography>
        <form className={classes.form}>
          <div className={classes.row}>
            <TextField
              className={clsx(classes.textfield, classes.flexMed)}
              id="credit-card-number"
              label="Credit Card Number"
              variant="outlined"
            />
            <TextField
              className={clsx(classes.textfield, classes.flexSmall)}
              id="credit-card-expiration"
              label="MM / YY"
              variant="outlined"
            />
          </div>
          <div className={classes.row}>
            <TextField
              className={clsx(classes.textfield, classes.flexMed)}
              id="credit-card-name"
              label="Name on Card"
              variant="outlined"
            />
            <TextField
              className={clsx(classes.textfield, classes.flexSmall)}
              id="credit-card-cvv"
              label="CVV"
              variant="outlined"
            />
          </div>
        </form>
        <Button
          className={classes.button}
          variant="contained"
          onClick={handleHostedPayment}
          disabled
        >
          Pay
        </Button>
      </>
    </Step>
  );
}
