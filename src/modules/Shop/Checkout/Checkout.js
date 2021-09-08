import React from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import Payment from './Payment';
import Summary from './Summary';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    color: theme.palette.text.secondary,
    // border: '1px solid rgba(0, 0, 0, .125)',
  },
  divider: {
    marginBottom: theme.spacing(4),
  },
}));

export default function Checkout() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h3" component="h3">
        Checkout
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={1} className={classes.paper}>
              <Payment />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={1} className={classes.paper}>
              <Summary />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
