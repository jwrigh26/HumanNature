import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { checkoutStep } from '../../../constants';
import { setCartOpen, shopSelector } from 'store/shopSlice';
import clsx from 'clsx';
import Customer from './Customer';
import Shipping from './Shipping';
import Billing from './Billing';
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
    [theme.breakpoints.up('md')]: {
      width: 420,
    },
    [theme.breakpoints.up('lg')]: {
      width: 512,
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
  const [expanded, setExpanded] = useState(checkoutStep.payment);
  const { cart } = useSelector(shopSelector);

  useEffect(() => {
    dispatch(setCartOpen({ open: false }));
  }, []);

  // TODO: Setup a way to traverse Steps
  // This is not being used and was for old way of clicking on accordian
  // Need to handle this so all show when they need to
  const handleChange = (panel) => (event, newExpanded) => {
    // event.preventDefault();
    setExpanded(newExpanded ? panel : false);
  };

  function CheckoutSteps() {
    return (
      <>
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
      </>
    );
  }

  function CheckoutSummary() {
    return (
      <>
        <Paper elevation={1} className={clsx(classes.paper, classes.summary)}>
          <Summary cart={cart} />
        </Paper>
      </>
    );
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
          <CheckoutSteps />
        </Grid>
        <Grid
          className={clsx(classes.grid, classes.summary)}
          container
          spacing={0}
          direction="column"
        >
          <CheckoutSummary />
        </Grid>
      </div>
    </div>
  );
}