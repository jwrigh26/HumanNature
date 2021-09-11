import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Step from './Step';

const useStyles = makeStyles((theme) => ({
  info: {
    // marginTop: theme.spacing(2),
    // marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'flex-start',
  },
  text: {
    color: theme.palette.text.secondary,
  },
}));

Billing.propTypes = {
  expanded: PropTypes.string,
  step: PropTypes.string,
};

export default function Billing({ expanded, step }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Step expanded={true} label={'Billing'}>
      <div className={classes.info}>
        <Typography
          className={classes.text}
          gutterBottom
          variant="body1"
          component="p"
        >
          Scrooge McDuck
        </Typography>
        <Typography
          className={classes.text}
          gutterBottom
          variant="body1"
          component="p"
        >
          555-555-5555
        </Typography>
        <Typography
          className={classes.text}
          gutterBottom
          variant="body1"
          component="p"
        >
          5555 N McManor CV
        </Typography>
        <Typography
          className={classes.text}
          gutterBottom
          variant="body1"
          component="p"
        >
          Duckburg, UT, 84095 / United States
        </Typography>
      </div>
    </Step>
  );
}
