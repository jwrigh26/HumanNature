import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  getAuthToken,
  resetHostPaymentForm,
  useCanHostPaymentFormSelector,
  useTokenSelector,
} from 'store/paymentSlice';
import { hostedPaymentURL } from '../../constants';
import { hasValue } from 'helpers/utils';
import Button from '@material-ui/core/Button';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  payment: {
    height: '100%',
    width: '100%',
    maxWidth: 1000,
    border: `1px solid ${theme.palette.grey[400]}`,
  },
}));

export default function HostedPayment() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles(theme);
  const formRef = useRef();
  const token = useTokenSelector();
  const canHostPaymentForm = useCanHostPaymentFormSelector();
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (canHostPaymentForm && formRef) {
      setHidden(false);
      formRef.current.submit();
    }
  }, [canHostPaymentForm, formRef]);

  useEffect(() => {
    return () => {
      console.log('cleaned up');
      dispatch(resetHostPaymentForm());
    };
  }, []);

  async function handleShowPaymentForm(e) {
    e.preventDefault();
    dispatch(getAuthToken());
  }

  const style = { width: '100%', maxWidth: '1000px', height: '880px' };

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Demo for Authorize.net Hosted Payment Form
      </Typography>
      <div id="iframe_holder" className={classes.payment}>
        <iframe
          id="hosted_payment"
          className="embed-responsive-item panel"
          name="hosted_payment"
          width="100%"
          frameBorder="0"
          scrolling="no"
          hidden={hidden}
          style={style}
        ></iframe>
      </div>
      <form
        onSubmit={handleShowPaymentForm}
        id="send_token"
        ref={formRef}
        action={hostedPaymentURL}
        method="post"
        target="hosted_payment"
      >
        <input type="hidden" name="token" value={token} />
        {!canHostPaymentForm && (
          <>
            <Button
              id="btnOpenAuthorizeNetIFrame"
              variant="contained"
              color="secondary"
              className={classes.button}
              type="submit"
              startIcon={<CreditCardIcon />}
            >
              Check Out
            </Button>
          </>
        )}
      </form>
      
    </div>
  );
}
