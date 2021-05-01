import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ColorSwatch from './ColorSwatch.js';

import userTheme from 'assets/theme';

ThemePickerDrawer.propTypes = {
  onSetPaletteColor: PropTypes.func,
  onToggle: PropTypes.func,
  open: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  presenter: {
    width: 'auto',
  },
  listItem: {
    flex: 1,
  },
  swatch: {
    flex: 0,
  },
}));

function ThemePickerDrawer({
  onSetPaletteColor: handleSetPaletteColor,
  onToggle: handleToggle,
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
      <Drawer anchor="bottom" open={open} onClose={handleToggle(false)}>
        <div
          className={classes.presenter}
          role="presentation"
          onClick={handleToggle(false)}
          onKeyDown={handleToggle(false)}
        >
          <List>
            {Object.keys(userTheme.paletteColor).map((key) => (
              <ListItem button key={key} onClick={handleListItemClick(key)}>
                <ListItemText
                  classes={{ root: classes.listItem }}
                  primary={userTheme.displayName[key]}
                />
                <ColorSwatch
                  className={classes.swatch}
                  palette={userTheme.color(key)}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default ThemePickerDrawer;
