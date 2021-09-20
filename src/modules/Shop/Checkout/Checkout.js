import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { checkoutStep } from '../../../constants';
import { setCartOpen } from 'store/shopSlice';
import clsx from 'clsx';
import Customer from './Customer';
import Shipping from './ShippingBilling';
import Billing from './BillingRecap';
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

  useEffect(() => {
    dispatch(setCartOpen({ open: false }));
  }, []);

  const expanded = 'All';

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
            <Customer expanded={expanded} step={checkoutStep.customer} />
          </Paper>
          <Paper elevation={1} className={classes.paper}>
            <Shipping expanded={expanded} step={checkoutStep.shipping} />
          </Paper>
          <Paper elevation={1} className={classes.paper}>
            <Billing expanded={expanded} step={checkoutStep.billing} />
          </Paper>
          <Paper elevation={1} className={classes.paper}>
            <Payment expanded={expanded} step={checkoutStep.payment} />
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
