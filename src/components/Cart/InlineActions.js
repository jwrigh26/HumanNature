import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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

export default function InlineActions() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <FormControlLabel
        aria-label="Remove"
        classes={{ root: classes.formControl }}
        onClick={(event) => event.stopPropagation()}
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
