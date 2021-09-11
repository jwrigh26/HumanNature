import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { checkoutStep } from '../../../constants';
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
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  grid: {
    padding: '4px',
  },
}));

export default function Checkout() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [expanded, setExpanded] = useState(checkoutStep.payment);

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
        <Paper elevation={1} className={classes.paper}>
          <Summary />
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
        <Grid className={classes.grid} container spacing={0} direction="column">
          <CheckoutSteps />
        </Grid>
        <Grid className={classes.grid} container spacing={0} direction="column">
          <CheckoutSummary />
        </Grid>
      </div>
    </div>
  );
}

/**
 *  <Grid container spacing={12}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={1} className={classes.paper}>
              <Billing expanded={expanded} step={checkoutStep.billing} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={1} className={classes.paper}>
              <Payment expanded={expanded} step={checkoutStep.payment} />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={1} className={classes.paper}>
              <Summary />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
 */
