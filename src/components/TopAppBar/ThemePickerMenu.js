import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import userTheme from 'assets/theme';

ThemePickerMenu.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  onSetPaletteColor: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  paper: {
    border: `0px solid ${theme.palette.divider}`,
  },
}));

function ThemePickerMenu({
  anchorEl,
  onClose: handleClose,
  onSetPaletteColor: handleSetPaletteColor,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);


  function handleMenuItemClick(key) {
    return () => {
      handleSetPaletteColor(userTheme.paletteColor[key]);
      handleClose();
    };
  }

  return (
    <>
      <Menu
        id="theme-picker"
        anchorEl={anchorEl}
        classes={{ paper: classes.paper }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
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
        {Object.keys(userTheme.paletteColor).map((key) => (
          <MenuItem key={key} onClick={handleMenuItemClick(key)}>
            {userTheme.paletteColor[key]}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default ThemePickerMenu;
