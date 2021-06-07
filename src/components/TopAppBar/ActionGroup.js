import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import PaletteIcon from '@material-ui/icons/Palette';
import Icon from '@material-ui/core/Icon';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

import useActions from 'hooks/useActions';
import MoreMenu from './MoreMenu.js';
import ThemePickerDrawer from './ThemePickerDrawer.js';
import ThemePickerMenu from './ThemePickerMenu.js';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.icon.primary,
    [theme.breakpoints.up('md')]: {
      color: theme.palette.icon.primary,
    },
  },
  actionsWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 0,
    position: 'relative',
    height: '56px',
    bottom: 0,
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
      flex: 0,
      height: '72px',
      bottom: '-3px',
    },
    [theme.breakpoints.up('lg')]: {
      bottom: '-4px',
    },
  },
}));

export default function ActionGroup() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const actions = useActions();

  return (
    <>
      <div className={classes.actionsWrapper}>
        <Hidden xsDown>
          <IconButton onClick={actions.handleOpenThemePicker}>
            <PaletteIcon className={classes.icon} />
          </IconButton>
          <IconButton onClick={actions.handleSetPaletteMode}>
            <Icon className={classes.icon}>{actions.modeIcon}</Icon>
          </IconButton>
          <IconButton onClick={actions.handleFoo}>
            <Icon className={classes.icon}>adb</Icon>
          </IconButton>
          <IconButton onClick={actions.handleHome}>
            <Icon className={classes.icon}>home</Icon>
          </IconButton>
        </Hidden>
        <Hidden smUp>
          <IconButton onClick={actions.handleOpenMore}>
            <MoreVertIcon className={classes.icon} />
          </IconButton>
        </Hidden>
      </div>
      <MoreMenu actions={actions} />
      <ThemePickerDrawer
        open={actions.paletteDrawerOpen}
        onSetPaletteColor={actions.handleSetPaletteColor}
        onToggle={actions.handleTogglePaletteDrawer}
      />
      <ThemePickerMenu
        anchorEl={actions.themeAnchorEl}
        onClose={actions.handleCloseThemePicker}
        onSetPaletteColor={actions.handleSetPaletteColor}
      />
    </>
  );
}
