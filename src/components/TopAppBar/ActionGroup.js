import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import userTheme from 'assets/theme';
import { appSelector, handleCookieReset, setPaletteMode } from 'store/appSlice';

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
    console.log('handleSetPaletteColor:', event);
  }

  function handleSetPaletteMode() {
    const newMode =
      mode === userTheme?.mode?.light
        ? userTheme?.mode?.dark
        : userTheme?.mode?.light;
    dispatch(setPaletteMode({ mode: newMode }));
  }

  function handleRest() {
    dispatch(handleCookieReset());
  }

  const modeIcon =
    mode === userTheme?.mode.dark ? 'brightness_3' : 'brightness_7';

  return (
    <>
      <div className={classes.actionsWrapper}>
        <Hidden xsDown>
          <IconButton onClick={handleSetPaletteColor}>
            <Icon className={classes.icon}>palette</Icon>
          </IconButton>
          <IconButton onClick={handleSetPaletteMode}>
            <Icon className={classes.icon}>{modeIcon}</Icon>
          </IconButton>
          <IconButton onClick={handleRest}>
            <Icon className={classes.icon}>restart_alt</Icon>
          </IconButton>
        </Hidden>
        <Hidden smUp>
          <IconButton onClick={handleRest}>
            <Icon className={classes.icon}>more_vert</Icon>
          </IconButton>
        </Hidden>
      </div>
    </>
  );
}