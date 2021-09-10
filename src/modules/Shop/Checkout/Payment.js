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

// import {} from 'store/paymentSlice';
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


  function paymentFormUpdate(response) {
    console.log(`${JSON.stringify(response, null, 2)}`);
    
  }

  function handleHostedPayment() {
    const authData = {
      clientKey: config.authNetClientKey,
      apiLoginID: config.authNetLoginKey,
    };

    const cardData = {
      cardNumber: '4111111111111111',
      month: '12',
      year: '22',
      cardCode: '123',
      zip: '84905',
      fullName: 'Vanelope VonSweets',
    };

    function responseHandler(response) {
      if (response.messages.resultCode === 'Error') {
        let i = 0;
        while (i < response.messages.message.length) {
          console.log(
            response.messages.message[i].code +
              ': ' +
              response.messages.message[i].text
          );
          i = i + 1;
        }
      } else {
        paymentFormUpdate(response.opaqueData);
      }
    }
    if (typeof window !== 'undefined') {
      window.Accept?.dispatchData({authData, cardData}, responseHandler);
    }
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


