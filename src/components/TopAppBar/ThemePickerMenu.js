import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ColorSwatch from './ColorSwatch.js';
import userTheme from 'assets/theme';

ThemePickerMenu.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  onSetPaletteColor: PropTypes.func,
};

function ThemePickerMenu({
  anchorEl,
  onClose: handleClose,
  onSetPaletteColor: handleSetPaletteColor,
}) {

  function handleMenuItemClick(key) {
    return () => {
      handleSetPaletteColor(userTheme.paletteColor[key]);
      handleClose();
      console.log('UserTheme');
      console.log(userTheme.color(key));
    };
  }

  return (
    <>
      <Menu
        id="theme-picker"
        anchorEl={anchorEl}
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
            <ListItemText primary={userTheme.displayName[key]} />
            <ColorSwatch palette={userTheme.color(key)}/>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default ThemePickerMenu;
