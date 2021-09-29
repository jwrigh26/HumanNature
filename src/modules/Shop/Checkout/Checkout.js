import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { checkoutStep } from '../../../constants';
import { setCartOpen } from 'store/shopSlice';
import { setEmail, useCustomerEmail } from 'store/userSlice';
import { isNil } from 'helpers/utils';
import clsx from 'clsx';
import Customer from './Customer';
import ShippingBilling from './ShippingBilling';
import Payment from './Payment';
import Summary from './Summary';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  },
  divider: {
    marginBottom: theme.spacing(4),
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  grid: {
    padding: '4px',
  },
  summary: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 420,
    },
    [theme.breakpoints.up('md')]: {
      width: 512,
    },
    [theme.breakpoints.up('lg')]: {
      width: 640,
    },
  },
  checkout: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(8),
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(12),
    },
  },
}));

export default function Checkout() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles(theme);
  const email = useCustomerEmail();

  useEffect(() => {
    dispatch(setCartOpen({ open: false }));
  }, []);

  // Setup defaults for expansion
  // If we don't have a value than it is expanded
  // If we do have a value than it is NOT nil and it's 
  // NOT expanded
  const [expanded, setExpanded] = useState({
    [checkoutStep.customer]: isNil(email),
    [checkoutStep.shipping]: false,
    [checkoutStep.billing]: false,
    [checkoutStep.payment]: false,
  });

  function handleEdit(step) {
    return (value) => {
      setExpanded({ ...expanded, [step]: value });
    };
  }

  function handleCustomer(data) {
    dispatch(setEmail(data));
  }

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h3" component="h3">
        Checkout
      </Typography>
      <Divider className={classes.divider} />
      <div className={classes.wrapper}>
        <Grid
          className={clsx(classes.grid, classes.checkout)}
          container
          spacing={0}
          direction="column"
        >
          <Paper elevation={1} className={classes.paper}>
            <Customer
              email={email}
              expanded={expanded[checkoutStep.customer]}
              onEdit={handleEdit(checkoutStep.customer)}
              onSubmit={handleCustomer}
            />
          </Paper>
          <Paper elevation={1} className={classes.paper}>
            <ShippingBilling
              isBilling={false}
              expanded={expanded[checkoutStep.shipping]}
              onEdit={handleEdit(checkoutStep.shipping)}
            />
          </Paper>
          <Paper elevation={1} className={classes.paper}>
            <ShippingBilling
              isBilling={true}
              expanded={expanded[checkoutStep.billing]}
              onEdit={handleEdit(checkoutStep.billing)}
            />
          </Paper>
          <Paper elevation={1} className={classes.paper}>
            <Payment
              expanded={expanded[checkoutStep.payment]}
              onEdit={handleEdit(checkoutStep.payment)}
            />
          </Paper>
        </Grid>
        <Grid
          className={clsx(classes.grid, classes.summary)}
          container
          spacing={0}
          direction="column"
        >
          <Paper elevation={1} className={clsx(classes.paper, classes.summary)}>
            <Summary />
          </Paper>
        </Grid>
      </div>
    </div>
  );
}
