import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import cookies from 'models/cookies';
import helper from 'helpers/cookieHelper.js';

import userTheme from 'assets/theme';
import { appSelector, setPaletteColor, setPaletteMode } from 'store/appSlice';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.icon.primary,
    [theme.breakpoints.up('md')]: {
      color: theme.palette.icon.primary,
    },
  },
  actionsWrapper: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(2),
    position: 'relative',
    top: '8px',
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(4),
      flex: 0,
      top: '12px',
    },
  },
}));

export default function ActionGroup() {
  const dispatch = useDispatch();
  const {
    themeBag: { color, mode },
  } = useSelector(appSelector);

  const theme = useTheme();
  const classes = useStyles(theme);

  function handleSetPaletteColor(event) {
    console.log('handleSetPaletteColor:', event?.currentTarget?.id);
    // TODO: Open this up to show a list to choose from
  }

  function handleSetPaletteMode(event) {
    const newMode =
      mode === userTheme?.mode?.light
        ? userTheme?.mode?.dark
        : userTheme?.mode?.light;
    dispatch(setPaletteMode({ mode: newMode }));
  }

  function handleCookieRest() {
    helper(cookies.options.key).removeItem(cookies?.options.accepted);
  }

  const modeIcon =
    mode === userTheme?.mode.dark ? 'brightness_3' : 'brightness_7';

  return (
    <div className={classes.actionsWrapper}>
      <IconButton onClick={handleSetPaletteColor}>
        <Icon className={classes.icon}>palette</Icon>
      </IconButton>
      <IconButton onClick={handleSetPaletteMode}>
        <Icon className={classes.icon}>{modeIcon}</Icon>
      </IconButton>
      <IconButton onClick={handleCookieRest}>
        <Icon className={classes.icon}>restart_alt</Icon>
      </IconButton>
    </div>
  );
}
