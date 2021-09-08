import React from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import Payment from './Payment';
import Summary from './Summary';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  block: {
    padding: theme.spacing(3),
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  divider: {
    marginBottom: theme.spacing(2),
  },
}));

export default function Checkout() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <div className={clsx(classes.root, classes.block)}>
        <Typography gutterBottom variant="h6" component="h6">
          Order Summary
        </Typography>
        <Button size="small" color="primary" onClick={() => {}}>
          Edit Cart
        </Button>
      </div>
      <Divider className={classes.divider} />
      <div className={clsx(classes.block)}>
        <Typography gutterBottom variant="body1" component="p">
          Stuff goes here
        </Typography>
      </div>
    </>
  );
}
