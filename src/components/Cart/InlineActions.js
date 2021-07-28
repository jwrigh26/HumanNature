import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { remove } from 'js-cookie';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  formControl: {
    marginLeft: 0,
    marginRight: 0,
  },
}));

InlineActions.propTypes = {
  onRemoveItem: PropTypes.func.isRequired,
};

export default function InlineActions({ onRemoveItem: removeItem }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  function handleRemoveItem(event) {
    event.stopPropagation();
    removeItem();
  }

  return (
    <div className={classes.root}>
      <FormControlLabel
        aria-label="Remove"
        classes={{ root: classes.formControl }}
        onClick={handleRemoveItem}
        onFocus={(event) => event.stopPropagation()}
        control={
          <IconButton>
            <DeleteIcon />
          </IconButton>
        }
      />
    </div>
  );
}
