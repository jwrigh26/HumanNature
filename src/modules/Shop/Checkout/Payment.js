import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Step from './Step';
import clsx from 'clsx';

import { authorizePaymentTransaction } from 'store/paymentSlice';
import { getAcceptPaymentNonce } from '../../../helpers/authnetHelper';
import config from 'helpers/config';

const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
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
      fullName: 'Vanelope VonSweets',
    };

    // const { dataDescriptor, dataValue } = await getAcceptPaymentNonce(cardData);
    // console.log(`dataDescriptor ${dataDescriptor}`);
    // console.log(`dataValue ${dataValue}`);
    // console.log('Made it!');

    // TODO:
    // Get nonce in paymentSlice
    // Collect transaction info and make post payload and send to auth payment
    // Get back a response
    dispatch(authorizePaymentTransaction({ cardData }));
  }

  return (
    <Step expanded={expanded} label={'Payment'}>
      <div>
        <Typography gutterBottom variant="body1" component="p">
          Tap the Button to test
        </Typography>
        <Divider className={classes.divider} />
        <Button onClick={handleHostedPayment}>Pay</Button>
      </div>
    </Step>
  );
}
