import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ReviewCard from './ReviewCard';
import states from 'models/states';
import Select from './Select';
import Step from './CheckoutStep';
import TextField from './TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setPhoneNumber, usePhoneNumberSelector } from 'store/userSlice';
import {
  setBillingSameAsShipping,
  setStep,
  useBillingSameAsShippingSelector,
  useShippingSelector,
  useShipToSelector,
  useStepShippingSelector,
} from 'store/paymentSlice';
import { phoneFormat } from 'helpers/formatHelper';
import { checkoutStep } from '../../../constants';
import { hasValue, removeEmpty, sleep } from 'helpers/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  ['firstName']: yup
    .string()
    .max(50, 'Max value 50.')
    .required('First Name is required.'),
  ['lastName']: yup
    .string()
    .max(50, 'Max value 50.')
    .required('Last Name is required.'),
  ['address']: yup
    .string()
    .max(60, 'Max value 60.')
    .required('Address is required.'),
  ['company']: yup.string().max(50, 'Max value 50.'),
  ['city']: yup.string().max(40, 'Max value 40.').required('City is required'),
  ['zip']: yup
    .string()
    .max(20, 'Max value 20.')
    .matches(
      /(^\d{5}$)|(^\d{5}-\d{4}$)/,
      'Postal Code is not valid. ( xxxxx or xxxxx-xxxx )'
    )
    .required('Postal Code is required.'),
  ['phoneNumber']: yup
    .string()
    .matches(
      /(^$)|(^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$)/,
      'Phone Number is not valid. (xxx) xxx-xxxx'
    ),
  ['state']: yup
    .string()
    .length(2, 'Length is 2.')
    .required('State is required'),
  ['comments']: yup.string().max(256, 'Max value 256.'),
});

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  formControl: {
    flex: 1,
  },
  label: {
    marginRight: theme.spacing(1),
  },
  bold: {
    color: theme.palette.text.primary,
    fontWeight: 700,
  },
  text: {
    color: theme.palette.text.secondary,
    textAlign: 'left',
  },
  textfield: {
    flex: 1,
    width: '100%',
  },
  country: {
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'flex-start',
    alignItems: 'center',
  },
  column: {
    width: '100%',
    textAlign: 'left',
    display: 'flex',
    gap: theme.spacing(4),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: theme.spacing(4),
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
  flexSmall: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      flex: 0.4,
    },
  },

  flexMed: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      flex: 0.6,
    },
  },
  billingSameAsShipping: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  button: {
    height: 56,
    width: '100%',
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      width: 196,
    },
  },
  shippingContainer: {
    width: '100%',
    height: '128px',
    backgroundColor: theme.palette.grey[300],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4),
    boxShadow: 'border-box',
    textAlign: 'center',
  },
  shippingHintText: {
    fontFamily: theme.typography.fontFamlies.secondary,
    color: theme.palette.common.black,
  },
}));

export default function Shipping() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles(theme);
  const expanded = useStepShippingSelector();
  const shipping = useShippingSelector();
  const shipTo = useShipToSelector();
  const phoneNumber = usePhoneNumberSelector();
  const billingSameAsShipping = useBillingSameAsShippingSelector();

  const {
    control,
    formState: { errors, isSubmitting, isValid, touchedFields },
    handleSubmit,
    trigger,
  } = useForm({
    defaultValues: {
      ['firstName']: shipTo.firstName || '',
      ['lastName']: shipTo.lastName || '',
      ['address']: shipTo.address || '',
      ['company']: shipTo.company || '',
      ['city']: shipTo.city || '',
      ['zip']: shipTo.zip || '',
      ['phoneNumber']: phoneNumber || '',
      ['state']: shipTo.state || '',
      ['comments']: shipping.description || '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
    reValidateMode: 'onBlur',
  });

  function handleBillingSameAsShipping() {
    dispatch(setBillingSameAsShipping({ same: !billingSameAsShipping }));
  }

  function handleKeyPressCheckBox(event) {
    if (event.key === 'Enter') {
      handleBillingSameAsShipping();
    }
  }

  function handleStateProvinceSelect(value) {
    return value;
  }

  function handlePhoneNumbervalue(value) {
    return phoneFormat(value);
  }

  function handlePostalCodeValue(value) {
    let input = value.replace(/\D/g, '');
    let size = input.length;
    if (size > 5) {
      input = input.slice(0, 5) + '-' + input.slice(5, input.length);
    }
    if (size > 9) {
      input = input.slice(0, 10);
    }
    return input;
  }

  function makeInfoList() {
    const fullName = `${shipTo.firstName} ${shipTo.lastName}`;
    const phone = hasValue(phoneNumber) ? phoneNumber : undefined;
    const company = hasValue(shipTo.company) ? shipTo.company : undefined;
    return Object.values(
      removeEmpty([
        fullName,
        phone,
        company,
        shipTo.address,
        `${shipTo.city} ${shipTo.state}, ${shipTo.zip} / USA`,
        'Flat Rate Shipping (4-6 Business days) 10.00',
      ])
    );
  }

  const onSubmit = async (data) => {
    await sleep(theme.transitions.duration.short);
    console.log(data);
    console.log(`${JSON.stringify(data, null, 2)}`);
    dispatch(setPhoneNumber(data));
    dispatch(
      setStep({
        step: checkoutStep.shipping,
        expanded: false,
      })
    );
    await sleep(theme.transitions.duration.complex);
    const nextStep = billingSameAsShipping
      ? checkoutStep.payment
      : checkoutStep.billing;
    dispatch(setStep({
      step: nextStep,
      expanded: true,
    }))
  };

  // Please enter a shipping address in order to see shipping quotes
  // TODO: Replace shipping text with above ^ and make it work

  return (
    <Step
      expanded={expanded}
      info={makeInfoList()}
      label={'Shipping'}
      step={checkoutStep.shipping}
    >
      <>
        <div className={classes.country}>
          <Typography
            className={clsx(classes.text, classes.label)}
            gutterBottom
            variant="body1"
            component="p"
          >
            Country
          </Typography>
          <Typography
            className={clsx(classes.text, classes.bold)}
            gutterBottom
            variant="body1"
            component="p"
          >
            United States
          </Typography>
        </div>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.row}>
            <TextField
              classes={classes.textfield}
              control={control}
              errors={errors}
              label="First Name"
              name="firstName"
              required={true}
              trigger={trigger}
            />
            <TextField
              classes={classes.textfield}
              control={control}
              errors={errors}
              label="Last Name"
              name="lastName"
              required={true}
              trigger={trigger}
            />
          </div>
          <div className={classes.column}>
            <TextField
              classes={classes.textfield}
              control={control}
              errors={errors}
              label="Address"
              name="address"
              required={true}
              trigger={trigger}
            />
          </div>
          <div className={classes.column}>
            <TextField
              classes={classes.textfield}
              control={control}
              errors={errors}
              label="Company"
              name="company"
              trigger={trigger}
            />
          </div>
          <div className={classes.row}>
            <TextField
              classes={clsx(classes.textfield, classes.flexMed)}
              control={control}
              errors={errors}
              label="City"
              name="city"
              required={true}
              trigger={trigger}
            />
            <Select
              classes={classes.flexSmall}
              control={control}
              label="State"
              name="state"
              options={states}
              required={true}
              setChangeValue={handleStateProvinceSelect}
            />
          </div>
          <div className={classes.row}>
            <TextField
              classes={clsx(classes.textfield, classes.flexSmall)}
              control={control}
              errors={errors}
              label="Postal Code"
              name="zip"
              required={true}
              setChangeValue={handlePostalCodeValue}
              trigger={trigger}
            />
            <TextField
              classes={clsx(classes.textfield, classes.flexMed)}
              control={control}
              errors={errors}
              label="Phone Number"
              name="phoneNumber"
              setChangeValue={handlePhoneNumbervalue}
              trigger={trigger}
            />
          </div>
          <FormControlLabel
            className={classes.billingSameAsShipping}
            control={
              <Checkbox
                checked={billingSameAsShipping}
                onChange={handleBillingSameAsShipping}
                onKeyPress={(e) => {
                  e.preventDefault();
                  handleKeyPressCheckBox(e);
                }}
                name="billingSameAsShipping"
                value={billingSameAsShipping}
                color="primary"
              />
            }
            id="billingSameAsShipping"
            label="My billing address is the same as my shipping address."
          />

          <div className={classes.shippingContainer}>
            <Typography
              className={classes.shippingHintText}
              gutterBottom
              variant="body1"
              component="p"
            >
              For demo, shipping is $5.99.
            </Typography>
          </div>
          <div className={classes.column}>
            <TextField
              classes={classes.textfield}
              control={control}
              errors={errors}
              label="Order Comments"
              name="comments"
              trigger={trigger}
            />
          </div>
          <Button
            className={classes.button}
            color="primary"
            disabled={isSubmitting || !isValid}
            id="submitButton"
            type="submit"
            // onClick={handleSubmit(onSubmit)}
            // onKeyPress={(e) => {
            //   e.preventDefault();
            //   handleKeyPressSubmit(e);
            // }}
            variant="contained"
          >
            Continue
          </Button>
        </form>
      </>
    </Step>
  );
}
