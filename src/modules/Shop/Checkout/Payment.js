import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

import { authorizePaymentTransaction } from 'store/paymentSlice';
import { getAcceptPaymentNonce } from '../../../helpers/authnetHelper';
import config from 'helpers/config';

const useStyles = makeStyles((theme) => ({
  block: {
    paddingLeft: theme.spacing(2),
  },
  divider: {
    marginBottom: theme.spacing(2),
  },

  accordian: {
    border: '0px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  accordianSummary: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '0px solid rgba(0, 0, 0, .125)',
    marginBottom: 0,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  accordianContent: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
}));

export default function Payment() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles(theme);

  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    event.preventDefault();
    setExpanded(newExpanded ? panel : false);
  };

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
    dispatch(authorizePaymentTransaction({cardData}));
  }

  return (
    <>
      <Accordion
        classes={{ root: classes.accordian }}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          classes={{
            root: classes.accordianSummary,
            content: classes.accordianContent,
          }}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <div className={clsx(classes.block)}>
            <Typography gutterBottom variant="h6" component="h6">
              Payment
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={clsx(classes.block)}>
            <Typography gutterBottom variant="h6" component="h6">
              Tap the Button to test
            </Typography>
            <Divider />
            <Button onClick={handleHostedPayment}>Pay</Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
