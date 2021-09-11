import React from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import Payment from './Payment';
import Summary from './Summary';

const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 72,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  button: {
    color: theme.palette.primary.main,
  },
  buttonDark: {
    color: theme.palette.secondary.main,
  },
  divider: {
    marginBottom: theme.spacing(2),
  },
  content: {
    paddingTop: theme.spacing(2),
    height: 220,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  footer: {
    paddingTop: theme.spacing(2),
    height: 128,
  }
}));

export default function Checkout() {
  const theme = useTheme();
  const classes = useStyles(theme);

  function handleEdit() {
    console.log(theme);
  }

  return (
    <>
      <div className={clsx(classes.header)}>
        <Typography gutterBottom variant="h6" component="h6">
          Order Summary
        </Typography>
        <Button
          className={clsx(classes.button, {
            [classes.buttonDark]: theme?.mode?.isDark,
          })}
          size="small"
          onClick={handleEdit}
        >
          Edit Cart
        </Button>
      </div>
      <div className={clsx(classes.content)}>
        <Typography gutterBottom variant="body1" component="p">
          Stuff goes here
        </Typography>
      </div>
      <div className={clsx(classes.footer)}>
        <Typography gutterBottom variant="body1" component="p">
          Stuff goes here
        </Typography>
      </div>
    </>
  );
}
