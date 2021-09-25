import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { authorizePaymentTransaction } from 'store/paymentSlice';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard';
import Step from './CheckoutStep';
import TextField from './TextField';
import Typography from '@material-ui/core/Typography';
import dummyData from 'models/dummy.json';
import clsx from 'clsx';

import valid from 'card-validator'; //import statement
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// TODO: Force entry for month/year and extract those values

const schema = yup.object().shape({
  ['credit-card-code']: yup.string().min(3).max(4).required(),
  ['credit-card-number']: yup
    .string()
    .test(
      'test-number', // this is used internally by yup
      'Credit Card number is invalid', //validation message
      (value) => valid.number(value).isValid
    ) // return true false based on validation
    .required(),
  ['credit-card-expiration']: yup.string().length(5).required(),
  ['credit-card-name']: yup.string().min(1).max(64).required(),
});

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
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

  const {
    control,
    formState: { errors, isSubmitting, isValid, touchedFields },
    handleSubmit,
    trigger,
  } = useForm({
    defaultValues: {
      ['credit-card-code']: '',
      ['credit-card-number']: '',
      ['credit-card-expiration']: '',
      ['credit-card-name']: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
    reValidateMode: 'onBlur',
  });

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

  const onSubmit = async (data) => {
    console.log(`${JSON.stringify(touchedFields, null, 2)}`);
    console.log(`${JSON.stringify(data, null, 2)}`);
  };

  return (
    <Step expanded={true} label={'Payment'}>
      <>
        {!expanded && <ReviewCard />}
        {expanded && (
          <>
            <Typography
              className={classes.text}
              gutterBottom
              variant="body1"
              component="p"
            >
              Credit / Debit Cards
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={classes.row}>
                <TextField
                  classes={clsx(classes.textfield, classes.flexMed)}
                  control={control}
                  errors={errors}
                  label="Credit Card Number"
                  name="credit-card-number"
                  trigger={trigger}
                />
                <TextField
                  classes={clsx(classes.textfield, classes.flexSmall)}
                  control={control}
                  errors={errors}
                  label="MM / YY"
                  name="credit-card-expiration"
                  trigger={trigger}
                />
              </div>
              <div className={classes.row}>
                <TextField
                  classes={clsx(classes.textfield, classes.flexMed)}
                  control={control}
                  errors={errors}
                  label="Name on Card"
                  name="credit-card-name"
                  trigger={trigger}
                />
                <TextField
                  classes={clsx(classes.textfield, classes.flexSmall)}
                  control={control}
                  errors={errors}
                  label="CVV"
                  name="credit-card-code"
                  trigger={trigger}
                />
              </div>
            </form>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              disabled={isSubmitting || !isValid}
              type="submit"
            >
              Pay
            </Button>
          </>
        )}
      </>
    </Step>
  );
}
