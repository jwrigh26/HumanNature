import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { phoneFormat, postalCodeFormat } from 'helpers/formatHelper';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard';
import states from 'models/states';
import Select from './Select';
import Step from './CheckoutStep';
import TextField from './TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  ['first-name']: yup
    .string()
    .max(50, 'Max value 50.')
    .required('First Name is required.'),
  ['last-name']: yup
    .string()
    .max(50, 'Max value 50.')
    .required('Last Name is required.'),
  ['address-1']: yup
    .string()
    .max(60, 'Max value 60.')
    .required('Address is required.'),
  ['address-2']: yup.string().max(60, 'Max value 60.'),
  ['company']: yup.string().max(50, 'Max value 50.'),
  ['city']: yup.string().max(40, 'Max value 40.').required('City is required'),
  ['postal-code']: yup
    .string()
    .max(20, 'Max value 20.')
    .matches(
      /(^\d{5}$)|(^\d{5}-\d{4}$)/,
      'Postal Code is not valid. ( xxxxx or xxxxx-xxxx )'
    )
    .required('Postal Code is required.'),
  ['phone-number']: yup
    .string()
    .max(25, 'Max value 25.')
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
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
  shippingHintText: {
    color: theme.palette.common.black,
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
}));

ShippingBilling.propTypes = {
  expanded: PropTypes.string,
  step: PropTypes.string,
  isBilling: PropTypes.bool,
};

// TODOs
// Make selector work with form validation
// Fill selector with all states

// Make phone number only take phone digits
// Make postal code validate

// CVV validate
// MM / YY validate

// Hook up steps in proper order
// Billing address checkmark
// Comments text

export default function ShippingBilling({ expanded, step, isBilling = false }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const title = isBilling ? 'Billing' : 'Shipping';

  const [billingSameAsShipping, setBillingSameAsShipping] = useState(false);
  const [stateProvince, setStateProvince] = useState(20);

  const {
    control,
    formState: { errors, isSubmitting, isValid, touchedFields },
    handleSubmit,
    trigger,
  } = useForm({
    defaultValues: {
      ['first-name']: '',
      ['last-name']: '',
      ['address-1']: '',
      ['address-2']: '',
      ['company']: '',
      ['city']: '',
      ['postal-code']: '',
      ['phone-number']: '',
      ['comments']: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
    reValidateMode: 'onBlur',
  });

  function handleBillingSameAsShipping() {
    // const name = event.target.name;
    // const isSame = name === 'billingSameAsShipping';
    // console.log('name', isSame);
    setBillingSameAsShipping(!billingSameAsShipping);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      setBillingSameAsShipping(!billingSameAsShipping);
    }
  }

  function handleStateProvinceSelect(value) {
    setStateProvince(value);
    return value;
  }

  function handlePhoneNumbervalue(value) {
    return phoneFormat(value);
  }

  function handlePostalCodeValue(value) {
    return postalCodeFormat(value);
  }

  const onSubmit = (data) => {
    console.log(`${JSON.stringify(touchedFields, null, 2)}`);
    console.log(`${JSON.stringify(data, null, 2)}`);
  };

  return (
    <Step expanded={true} label={title}>
      <>
        {!expanded && <ReviewCard />}
        {expanded && (
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
                  name="first-name"
                  trigger={trigger}
                />
                <TextField
                  classes={classes.textfield}
                  control={control}
                  errors={errors}
                  label="Last Name"
                  name="last-name"
                  trigger={trigger}
                />
              </div>
              <div className={classes.column}>
                <TextField
                  classes={classes.textfield}
                  control={control}
                  errors={errors}
                  label="Address"
                  name="address-1"
                  trigger={trigger}
                />
                <TextField
                  classes={classes.textfield}
                  control={control}
                  errors={errors}
                  label="Apartment / Suite / Building (Optional)"
                  name="address-2"
                  trigger={trigger}
                />
              </div>
              <div className={classes.column}>
                <TextField
                  classes={classes.textfield}
                  control={control}
                  errors={errors}
                  label="Company (Optional)"
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
                  trigger={trigger}
                />
                <Select
                  classes={classes.flexSmall}
                  control={control}
                  label="State / Province"
                  name="state-province"
                  options={states}
                  setChangeValue={handleStateProvinceSelect}
                />
              </div>
              <div className={classes.row}>
                <TextField
                  classes={clsx(classes.textfield, classes.flexSmall)}
                  control={control}
                  errors={errors}
                  label="Postal Code"
                  name="postal-code"
                  setChangeValue={handlePostalCodeValue}
                  trigger={trigger}
                />
                <TextField
                  classes={clsx(classes.textfield, classes.flexMed)}
                  control={control}
                  errors={errors}
                  label="Phone Number"
                  name="phone-number"
                  setChangeValue={handlePhoneNumbervalue}
                  trigger={trigger}
                />
              </div>
              {isBilling && (
                <Button
                  className={classes.button}
                  color="primary"
                  disabled={isSubmitting || !isValid}
                  variant="contained"
                >
                  Continue
                </Button>
              )}
              {!isBilling && (
                <>
                  <FormControlLabel
                    className={classes.billingSameAsShipping}
                    control={
                      <Checkbox
                        checked={billingSameAsShipping}
                        onChange={handleBillingSameAsShipping}
                        onKeyPress={(e) => handleKeyPress(e)}
                        name="billingSameAsShipping"
                        value={billingSameAsShipping}
                        color="primary"
                      />
                    }
                    label="My billing address is the same as my shipping address."
                  />

                  <div className={classes.shippingContainer}>
                    <Typography
                      className={classes.shippingHintText}
                      gutterBottom
                      variant="body1"
                      component="p"
                    >
                      Please enter a shipping address in order to see shipping
                      quotes
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
                    variant="contained"
                  >
                    Continue
                  </Button>
                </>
              )}
            </form>
          </>
        )}
      </>
    </Step>
  );
}
