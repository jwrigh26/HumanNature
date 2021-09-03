import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { getAuthToken, useTokenSelector } from 'store/paymentSlice';
import { hostedPaymentURL } from '../../constants';
import { hasValue } from 'helpers/utils';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function HostedPayment() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles(theme);
  const formRef = useRef();
  const token = useTokenSelector();

  const [hidden, setHidden] = useState(true);
  const [canShop, setCanShop] = useState(false);

  useEffect(() => {
    dispatch(getAuthToken());
  }, []);

  useEffect(() => {
    if (hasValue(token)) {
      setCanShop(true);
    }
  }, [token]);

  async function handleShowPaymentForm(e) {
    e.preventDefault();
    if (canShop) {
      setHidden(false);
      if (formRef) {
        formRef.current.submit();
      }
    } else {
      console.log('Cannot shop. Token: ', token);
    }
  }

  const style = { width: '90%', maxWidth: '1000px' };

  return (
    <div className={classes.root}>
      <div>Open Authorize.net in an iframe to complete transaction</div>
      <div id="iframe_holder" className="center-block" style={style}>
        <iframe
          id="hosted_payment"
          className="embed-responsive-item panel"
          name="hosted_payment"
          width="100%"
          frameBorder="0"
          scrolling="no"
          hidden={hidden}
        ></iframe>
      </div>
      {token && (
        <form
          onSubmit={handleShowPaymentForm}
          id="send_token"
          ref={formRef}
          action={hostedPaymentURL}
          method="post"
          target="hosted_payment"
        >
          <input type="hidden" name="token" value={token} />
          <button id="btnOpenAuthorizeNetIFrame" type="submit">
            Show Payment Form
          </button>
        </form>
      )}
    </div>
  );
}
