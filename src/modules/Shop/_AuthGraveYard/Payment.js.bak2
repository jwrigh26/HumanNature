import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import clsx from 'clsx';

import {
  getAuthToken,
  resetHostPaymentForm,
  useCanHostPaymentFormSelector,
  useTokenSelector,
} from 'store/paymentSlice';
import { hostedPaymentURL } from '../../../constants';

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
  const token = useTokenSelector();
  const canHostPaymentForm = useCanHostPaymentFormSelector();
  const theme = useTheme();
  const classes = useStyles(theme);

  const formRef = useRef();
  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    event.preventDefault();
    // only want to get auth token if not open
    if (panel === 'panel1' && newExpanded) {
      dispatch(getAuthToken());
    } else {
      console.log('Reset');
      dispatch(resetHostPaymentForm());
    }
    setExpanded(newExpanded ? panel : false);
  };

  const style = {
    width: '100%',
    maxWidth: '1000px',
    height: '256px',
    backgroundColor: 'pink',
  };

  useEffect(() => {
    if (canHostPaymentForm && formRef) {
      formRef.current.submit();
    }
  }, [canHostPaymentForm, formRef]);

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
          <form
            id="send_token"
            ref={formRef}
            action={hostedPaymentURL}
            method="post"
            target="hosted_payment"
            style={style}
          >
            <input type="hidden" name="token" value={token} />
            <iframe
              id="hosted_payment"
              name="hosted_payment"
              width="100%"
              frameBorder="0"
              scrolling="no"
              hidden={false}
              style={style}
            ></iframe>
          </form>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
