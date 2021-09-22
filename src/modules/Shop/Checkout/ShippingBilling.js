import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import ReviewCard from './ReviewCard';
import Step from './CheckoutStep';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

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
    justifyContent: 'center',
    alignItems: 'flex-start',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: theme.spacing(4),
    },
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

export default function ShippingBilling({ expanded, step, isBilling = false }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const title = isBilling ? 'Billing' : 'Shipping';
  const showSummary = true;

  const [billingSameAsShipping, setBillingSameAsShipping] = useState(false);
  const [stateProvince, setStateProvince] = useState(20);

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

  function handleStateProvinceSelect(event) {
    const value = event.target.value;
    setStateProvince(value);
  }

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
            <form className={classes.form}>
              <div className={classes.row}>
                <TextField
                  className={classes.textfield}
                  id="first-name"
                  label="First Name"
                  variant="outlined"
                />
                <TextField
                  className={classes.textfield}
                  id="last-name"
                  label="Last Name"
                  variant="outlined"
                />
              </div>
              <div className={classes.column}>
                <TextField
                  className={classes.textfield}
                  id="address1"
                  label="Address"
                  variant="outlined"
                />
                <TextField
                  className={classes.textfield}
                  id="address2"
                  label="Apartment / Suite / Building (Optional)"
                  variant="outlined"
                />
              </div>
              <div className={classes.column}>
                <TextField
                  className={classes.textfield}
                  id="company"
                  label="Company (Optional)"
                  variant="outlined"
                />
              </div>
              <div className={classes.row}>
                <TextField
                  className={clsx(classes.textfield, classes.flexMed)}
                  id="city"
                  label="City"
                  variant="outlined"
                />
                <FormControl
                  variant="outlined"
                  className={clsx(classes.formControl, classes.flexSmall)}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    State / Province
                  </InputLabel>
                  <Select
                    native
                    value={stateProvince}
                    onChange={handleStateProvinceSelect}
                    label="State / Province"
                    inputProps={{
                      name: 'state-province',
                      id: 'state-province',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Idaho</option>
                    <option value={20}>Utah</option>
                    <option value={30}>Wyoming</option>
                  </Select>
                </FormControl>
              </div>
              <div className={classes.row}>
                <TextField
                  className={clsx(classes.textfield, classes.flexSmall)}
                  id="postal-code"
                  label="Postal Code"
                  variant="outlined"
                />
                <TextField
                  className={clsx(classes.textfield, classes.flexMed)}
                  id="phone-number"
                  label="Phone Number"
                  variant="outlined"
                />
              </div>
              {isBilling && (
                <Button
                  className={classes.button}
                  color="primary"
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
                      className={classes.textfield}
                      id="comments"
                      label="Order Comments"
                      variant="outlined"
                    />
                  </div>
                  <Button
                    className={classes.button}
                    color="primary"
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
