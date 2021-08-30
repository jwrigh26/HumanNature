import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Paper from '@material-ui/core/Paper';

// import {  } from 'store/paymentSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: 'default',
  },
  images: {
    display: 'flex',
    height: 220,
  },
  body1: {
    marginBottom: theme.spacing(2),
  },
  body2: {
    marginBottom: theme.spacing(2),
  },
  bold: {
    fontWeight: 700,
  },
  divider: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  indent: {
    marginLeft: theme.spacing(2),
  },
  marginTop: {
    marginTop: theme.spacing(2),
  },
  listStyleAlpha: {
    listStyleType: 'lower-alpha',
    '& li': {
      marginBottom: theme.spacing(2),
    },
  },
  listStyleLowerRoman: {
    listStyleType: 'lower-roman',
    '& li': {
      marginBottom: theme.spacing(2),
    },
  },
  listStyleCircle: {
    listStyleType: 'circle',
    '& li': {
      marginBottom: theme.spacing(2),
    },
  },
  api: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    alignItems: 'center',
    justifyItems: 'center',
  },
  button: {
    width: '50%',
  },
}));

export default function AgelessHoldings() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles(theme);

  function handleFoo() {
    //
  }

  return (
    <div className={classes.root}>
      <Paper classes={{ root: classes.paper }}>
        <Typography variant="h3" gutterBottom>
          Demo Page
        </Typography>
        <Typography variant="h4" gutterBottom>
          Welcome to the Human+Nature Shop Demo
        </Typography>
        <section className={classes.api}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={handleFoo}
            startIcon={<CreditCardIcon />}
          >
            Authorize Credit Card
          </Button>
        </section>
        <Typography
          variant="body2"
          classes={{ body2: clsx(classes.body2, classes.indent) }}
        >
          <span className={classes.bold}>
            The following work has been done:
          </span>
        </Typography>
        <ol className={classes.listStyleAlpha}>
          <li>
            <Typography variant="body2">
              Created a simple webpage frame to host shopping app development.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Created a simple CDN powered by Google storage to host shop item
              images
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Created Category pages for shopping
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Created a Shopping cart list that allows a user to add, update,
              and remove items in their cart
            </Typography>
          </li>
        </ol>
        <Typography
          variant="body2"
          classes={{ body2: clsx(classes.body2, classes.indent) }}
        >
          <span className={classes.bold}>Please click on the categories</span>{' '}
          to view items and explore adding items, updating quantity, and
          removing items from the shopping cart.
        </Typography>
        <Typography
          variant="body2"
          classes={{ body2: clsx(classes.body2, classes.indent) }}
        >
          Feel free to try it on a Widescreen PC monitor, Tablet, or Mobile
          device.
        </Typography>
        <Typography
          variant="body2"
          classes={{ body2: clsx(classes.body2, classes.indent) }}
        >
          Please don’t pay attention too much to colors, styles, and the outer
          shell of the website. This is mainly to help me develop the shopping
          experience.
        </Typography>
        <Typography
          variant="body2"
          classes={{ body2: clsx(classes.body2, classes.indent) }}
        >
          <span className={classes.bold}>
            The following is outstanding work:
          </span>
        </Typography>
        <ol className={classes.listStyleAlpha}>
          <li>
            <Typography variant="body2">
              Create a Shopping “Splash” page
            </Typography>
          </li>
          <li>
            <Typography variant="body2">Create Item pages</Typography>
          </li>
          <li>
            <Typography variant="body2">Create the Checkout Wizard</Typography>
          </li>
          <li>
            <Typography variant="body2">
              Implement a shopping api (Authorize.net)
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Calculate shipping costs and sales tax
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Item and inventory management
            </Typography>
          </li>
        </ol>
        <Typography
          variant="body2"
          classes={{ body2: clsx(classes.body2, classes.indent) }}
        >
          Going forward, I believe it would be best to discuss work done,
          remaining work, realistic timeline and what fits inside a MVP or
          minimal viable project, which we agreed upon I would do for free.
          Please reach out with me about thoughts, concerns, and questions.
        </Typography>
      </Paper>
    </div>
  );
}
