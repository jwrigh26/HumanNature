import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Step from './CheckoutStep';
import TextField from './TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setStep, useStepCustomerSelector } from 'store/paymentSlice';
import { setEmail, useCustomerEmailSelector } from 'store/userSlice';
import { checkoutStep } from '../../../constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { hasValue, sleep } from 'helpers/utils';
import * as yup from 'yup';

const schema = yup.object().shape({
  ['email']: yup.string().email('Please enter a valid email.').required(),
});

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  text: {
    color: theme.palette.text.secondary,
    textAlign: 'left',
    marginBottom: theme.spacing(2),
  },
  textfield: {
    flex: 1,
    marginRight: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      flex: 1.3,
    },
    [theme.breakpoints.up('xl')]: {
      flex: 1.4,
    },
  },
  button: {
    height: 56,
    width: '100%',
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      flex: 0.7,
      marginTop: theme.spacing(0),
    },
    [theme.breakpoints.up('xl')]: {
      flex: 0.6,
    },
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  footerText: {
    color: theme.palette.text.secondary,
    textAlign: 'left',
    marginRight: theme.spacing(0),
  },
}));

export default function Customer() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const buttonRef = useRef();
  const classes = useStyles(theme);
  const email = useCustomerEmailSelector();
  const expanded = useStepCustomerSelector();

  const {
    control,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    trigger,
  } = useForm({
    criteriaMode: 'firstError',
    defaultValues: {
      ['email']: email || '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data) => {
    console.log(`${JSON.stringify(data, null, 2)}`);
    dispatch(setEmail(data));
    dispatch(
      setStep({
        step: checkoutStep.customer,
        expanded: false,
      })
    );
    await sleep(theme.transitions.duration.complex);
    dispatch(
      setStep({
        step: checkoutStep.shipping,
        expanded: true,
      })
    );
  };

  // Sets the customer form to expanded or collapsed on init
  useEffect(() => {
    dispatch(
      setStep({
        step: checkoutStep.customer,
        expanded: hasValue(email) ? false : true,
      })
    );
  }, []);

  // This is important!
  // Prevents focus from skipping continue
  // because is was prev disabled
  useEffect(() => {
    buttonRef?.current?.focus();
  }, [isValid]);

  return (
    <Step
      expanded={expanded}
      info={[email]}
      label={'Customer'}
      step={checkoutStep.customer}
    >
      <>
        <Typography
          className={classes.text}
          gutterBottom
          variant="body1"
          component="p"
        >
          Checking out as a Guest? You'll be able to save your details to create
          an account with us later.
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            classes={classes.textfield}
            control={control}
            errors={errors}
            label="Email Address"
            name="email"
            trigger={trigger}
          />
          <Button
            className={classes.button}
            color="primary"
            disabled={isSubmitting || !isValid}
            type="submit"
            variant="contained"
            innerRef={buttonRef}
          >
            Continue as Guest
          </Button>
        </form>
        <div className={classes.footer}>
          <Typography
            className={classes.footerText}
            gutterBottom
            variant="body1"
            component="p"
          >
            Already have an account?
          </Typography>
          <Button color="primary">Sign in now</Button>
        </div>
      </>
    </Step>
  );
}
