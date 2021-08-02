import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import Hidden from '@material-ui/core/Hidden';
import PaletteIcon from '@material-ui/icons/Palette';
import Icon from '@material-ui/core/Icon';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';

import useActions from 'hooks/useActions';
import MoreMenu from './MoreMenu.js';
import ThemePickerDrawer from './ThemePickerDrawer.js';
import ThemePickerMenu from './ThemePickerMenu.js';
import { shopSelector } from 'store/shopSlice.js';

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
  badgeTopRight: {
    fontFamily: theme.typography.fontFamlies.secondary,
  },
  button: {
    '&:disabled': {
      opacity: 0.35,
    },
  },
}));

export default function ActionGroup() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const actions = useActions();

  const { cart } = useSelector(shopSelector);

  return (
    <>
      <div className={classes.actionsWrapper}>
        <Hidden xsDown>
          <IconButton
            className={classes.button}
            onClick={actions.handleOpenThemePicker}
          >
            <PaletteIcon className={classes.icon} />
          </IconButton>
          <IconButton
            className={classes.button}
            onClick={actions.handleSetPaletteMode}
          >
            <Icon className={classes.icon}>{actions.modeIcon}</Icon>
          </IconButton>
        </Hidden>
        <IconButton
          className={classes.button}
          onClick={actions.handleToggleCart}
          disabled={cart.open}
        >
          <Badge
            badgeContent={cart.totalQuantity ?? 0}
            classes={{ anchorOriginTopRightCircular: classes.badgeTopRight }}
            color="secondary"
            overlap="circular"
            max={99}
          >
            <ShoppingCartIcon className={classes.icon} />
          </Badge>
        </IconButton>
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
