import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import useQueue from 'hooks/useQueue';
import { errorSelector, removeError } from 'store/errorSlice';
import { hasValue } from 'helpers/utils.js';

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    color: theme.palette.icon.reverse,
    marginRight: '8px',
  },
  icon: {
    color: theme.palette.icon.reverse,
  },
  iconButton: {
    padding: theme.spacing(0.5),
  },
  message: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  emoji: {
    paddingRight: '8px',
    display: 'inline-block',
  },
}));

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function ErrorSnackbar() {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector(errorSelector);
  const theme = useTheme();
  const classes = useStyles(theme);

  const queue = useQueue();

  function handleClose() {
    // Remove or pop first in queue
    // If another error is in the queue,
    // a new render will be called and get
    // the new item in first place of the queue.
    queue.remove();
    // Remove error from store
    dispatch(removeError());
  }

  useEffect(() => {
    if (hasValue(errorMessage)) {
      // Add error to snackbar queue
      queue.add(errorMessage);
    }
  }, [errorMessage]);

  return (
    <>
      {queue.first() && (
        <Snackbar
          classes={{root: classes.root}}
          open={true}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          TransitionComponent={TransitionUp}
          message={<div className={classes.message}>{queue.first()}</div>}
          key={queue.first()}
          onClose={handleClose}
          action={
            <React.Fragment>
              <Button
                className={classes.button}
                color="primary"
                size="small"
                variant="contained"
                onClick={handleClose}
              >
                Sad
              </Button>
            </React.Fragment>
          }
        />
      )}
    </>
  );
}

export default ErrorSnackbar;
