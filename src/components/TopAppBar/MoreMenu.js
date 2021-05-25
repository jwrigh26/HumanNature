import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

MoreMenu.propTypes = {
  actions: PropTypes.shape({
    modeIcon: PropTypes.string,
    modeLabel: PropTypes.string,
    moreAnchorEl: PropTypes.any,
    handleCloseMore: PropTypes.func,
    handleMail: PropTypes.func,
    handleTogglePaletteDrawer: PropTypes.func,
    handleSetPaletteMode: PropTypes.func,
  }),
};

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.icon.primary,
    [theme.breakpoints.up('md')]: {
      color: theme.palette.icon.primary,
    },
  },
  paper: {
    border: `0px solid ${theme.palette.divider}`,
  },
}));

function MoreMenu({ actions }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  function handleTogglePaletteDrawer(event) {
    actions.handleTogglePaletteDrawer(true)(event);
    actions.handleCloseMore();
  }

  function handleSetPaletteMode() {
    actions.handleSetPaletteMode();
    actions.handleCloseMore();
  }

  function handleMail() {
    actions.handleMail();
    actions.handleCloseMore();
  }

  return (
    <Menu
      id="actions-more-menu"
      anchorEl={actions.moreAnchorEl}
      classes={{ paper: classes.paper }}
      keepMounted
      open={Boolean(actions.moreAnchorEl)}
      onClose={actions.handleCloseMore}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <MenuItem onClick={handleTogglePaletteDrawer}>
        <ListItemIcon>
          <Icon className={classes.icon}>palette</Icon>
        </ListItemIcon>
        <ListItemText primary="Color Theme" />
      </MenuItem>
      <MenuItem onClick={handleSetPaletteMode}>
        <ListItemIcon>
          <Icon className={classes.icon}>{actions.modeIcon}</Icon>
        </ListItemIcon>
        <ListItemText primary={actions.modeLabel} />
      </MenuItem>
      {/*<MenuItem onClick={handleMail}>*/}
      {/*  <ListItemIcon>*/}
      {/*    <Icon className={classes.icon}>mail</Icon>*/}
      {/*  </ListItemIcon>*/}
      {/*  <ListItemText primary="Contact" />*/}
      {/*</MenuItem>*/}
    </Menu>
  );
}

export default MoreMenu;
