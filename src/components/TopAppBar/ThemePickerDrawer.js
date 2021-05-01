import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import userTheme from 'assets/theme';

ThemePickerDrawer.propTypes = {
  onSetPaletteColor: PropTypes.func,
  onTogglePaletteDrawer: PropTypes.func,
  open: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  presenter: {
    width: 'auto',
  },
}));

function ThemePickerDrawer({
  onSetPaletteColor: handleSetPaletteColor,
  onTogglePaletteDrawer: handleTogglePaletteDrawer,
  open,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  function handleListItemClick(key) {
    return () => {
      handleSetPaletteColor(userTheme.paletteColor[key]);
    };
  }

  return (
    <>
      <Drawer
        anchor="bottom"
        open={open}
        onClose={handleTogglePaletteDrawer(false)}
      >
        <div
          className={classes.presenter}
          role="presentation"
          onClick={handleTogglePaletteDrawer(false)}
          onKeyDown={handleTogglePaletteDrawer(false)}
        >
          <List>
            {Object.keys(userTheme.paletteColor).map((key) => (
              <ListItem button key={key} onClick={handleListItemClick(key)}>
                <ListItemText primary={userTheme.paletteColor[key]} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default ThemePickerDrawer;
