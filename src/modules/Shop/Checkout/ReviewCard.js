import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Fade from '@material-ui/core/Fade';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { setStep } from 'store/paymentSlice';
import { hasValue } from 'helpers/utils';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    textAlign: 'left',
    width: '100%',
  },
  info: {
    marginTop: theme.spacing(2),
  },
  button: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  buttonDark: {
    color: theme.palette.secondary.main,
  },
  text: {
    color: theme.palette.text.secondary,
  },
}));

ReviewCard.propTypes = {
  expanded: PropTypes.bool,
  info: PropTypes.array,
  step: PropTypes.string,
};

export default function ReviewCard({ expanded, info, step }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const dispatch = useDispatch();

  function renderLine(line, index) {
    console.log('line', line);
    return (
      <Typography
        className={classes.text}
        gutterBottom
        variant="body1"
        component="p"
        key={index}
      >
        {line}
      </Typography>
    );
  }

  return (
    <Fade
      in={!expanded}
      easing={theme.transitions.easing.easeOut}
      timeout={theme.transitions.duration.leavingScreen}
      unmountOnExit={true}
    >
      <div className={clsx(classes.root, { [classes.info]: hasValue(info) })}>
        {info?.map((line, index) => renderLine(line, index))}
        {hasValue(info) && (
          <Button
            className={clsx(classes.button, {
              [classes.buttonDark]: theme?.mode?.isDark,
            })}
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(setStep({ step, displayForm: true }));
            }}
            disabled={false}
          >
            Edit
          </Button>
        )}
      </div>
    </Fade>
  );
}
