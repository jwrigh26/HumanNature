import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.text.secondary,
  },
}));

Card.propTypes = {
  expanded: PropTypes.string,
  step: PropTypes.string,
};

export default function Card({ expanded, step }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  // TODO: Make this dynamic and work with all checkout parts!

  console.log('Step', step);
  return (
      <>
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
      </>
  );
}
