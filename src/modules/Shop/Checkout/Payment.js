import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Step from './CheckoutStep';
import { authorizePaymentTransaction } from 'store/paymentSlice';
import dummyData from 'models/dummy.json';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
    width: 200,
  },
  text: {
    color: theme.palette.text.secondary,
    paddingRight: '8px',
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
          Credit Card Number: 4111111111111111
        </Typography>
        <Typography
          className={classes.text}
          gutterBottom
          variant="body1"
          component="p"
        >
          Expiration: 12 / 22
        </Typography>
        <Typography
          className={classes.text}
          gutterBottom
          variant="body1"
          component="p"
        >
          CSV: 123
        </Typography>
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
