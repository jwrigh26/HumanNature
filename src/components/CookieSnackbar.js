import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import {appSelector} from 'store/appSlice.js';
import cookies from 'models/cookies';
import helper from 'helpers/cookieHelper';


const useStyles = makeStyles((theme) => ({
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

function CookieSnackbar() {
  const [open, setOpen] = useState(true);
  const [accepted, setAccepted] = useState(false);
  const theme = useTheme();
  const classes = useStyles(theme);
  const { navigation } = useSelector(appSelector);
  const history = useHistory();


  useEffect(() => {
    const cookie = helper(cookies.options.key).getItem(
      cookies.options.accepted,
    );
    setAccepted(cookie);
  }, []);

  const handleAccepted = () => {
    helper(cookies.options.key).setItem(cookies.options.accepted, true);
    setAccepted(true);
    setOpen(false);
  };

  const handleLearnMore = () => {
    history.push(navigation?.routes?.policies?.route);
  };

  return (
    <>
      {!accepted && (
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          TransitionComponent={TransitionUp}
          message={
            <div className={classes.message}>
              <span className={classes.emoji}>🍪</span>
              We use cookies to enable essential features of our site and to
              help optimize your experience.
            </div>
          }
          key={cookies?.options?.key}
          action={
            <React.Fragment>
              <Button
                className={classes.button}
                color='primary'
                size='small'
                variant='contained'
                onClick={handleAccepted}
              >
                OK
              </Button>
              <IconButton
                aria-label='close'
                color='inherit'
                className={classes.iconButton}
                onClick={handleLearnMore}
              >
                <Icon className={classes.icon}>info</Icon>
              </IconButton>
            </React.Fragment>
          }
        />
      )}
    </>
  );
}

export default CookieSnackbar;
