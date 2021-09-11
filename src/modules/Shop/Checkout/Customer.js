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

Customer.propTypes = {
  expanded: PropTypes.string,
  step: PropTypes.string,
};

export default function Customer({ expanded, step }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Step expanded={true} label={'Customer'}>
      <div className={classes.info}>
        <Typography
          className={classes.text}
          gutterBottom
          variant="body1"
          component="p"
        >
          scrooge.mcduck@human+nature.com
        </Typography>
      </div>
    </Step>
  );
}
