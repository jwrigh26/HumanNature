import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ReviewCard from './ReviewCard';
import Step from './CheckoutStep';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
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

Customer.propTypes = {
  expanded: PropTypes.string,
  step: PropTypes.string,
};

export default function Customer({ expanded, step }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const e = 'scrooge.mcduck@human+nature.com';

  return (
    <Step expanded={true} label={'Customer'}>
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
              Checking out as a Guest? You'll be able to save your details to
              create an account with us later.
            </Typography>
            <form className={classes.form}>
              <TextField
                className={classes.textfield}
                id="email-address"
                label="Email Address"
                variant="outlined"
              />
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
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
              <Button color="primary">Continue as Guest</Button>
            </div>
          </>
        )}
      </>
    </Step>
  );
}
