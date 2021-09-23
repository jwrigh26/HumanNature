import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ReviewCard from './ReviewCard';
import Step from './CheckoutStep';
import TextField from './TextField';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  customerEmail: yup.string().min(2).max(10),
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

Customer.propTypes = {
  expanded: PropTypes.string,
  step: PropTypes.string,
};

export default function Customer({ expanded, step }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const e = 'scrooge.mcduck@human+nature.com';
  const {
    handleSubmit,
    control,
    formState: { errors },
    trigger,
  } = useForm({
    criteriaMode: 'firstError',
    defaultValues: {
      customerEmail: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
    reValidateMode: 'onBlur',
  });

  const onSubmit = (data) => {
    console.log(`${JSON.stringify(data, null, 2)}`);
  };

  React.useEffect(() => {
    console.log('Errors', errors);
  }, [errors]);

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
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <TextField
                classes={classes.textfield}
                control={control}
                errors={errors}
                trigger={trigger}
              />
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
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
