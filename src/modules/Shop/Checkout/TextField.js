import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { Controller } from 'react-hook-form';
import { hasValue } from 'helpers/utils';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

MUITextField.propTypes = {
  classes: PropTypes.any,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  trigger: PropTypes.func.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    // TOOD: add code here if needed
  },
  errorText: {
    color: theme.palette.error.main,
  },
}));

function MUITextField({
  classes: extendedClasses,
  control,
  errors,
  label,
  name,
  trigger,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  function getErrorText() {
    if (hasValue(errors[name])) {
      console.log(`${JSON.stringify(errors, null, 2)}`);

      return (
        <Typography
          className={classes.errorText}
          gutterBottom
          variant="body1"
          component="span"
        >
          {errors[name]?.message}
        </Typography>
      );
    }
    return null;
  }
  

  return (
    <Controller
      control={control}
      id={name}
      name={name} // This matters for defaultValues
      render={({ field: { onChange, onBlur, ref, value, ...field } }) => {
        return (
          <TextField
            className={clsx(classes.root, extendedClasses)}
            inputRef={ref}
            label={label}
            onChange={(e) => {
              if (hasValue(errors[name])) {
                trigger(`${name}`);
              }
              onChange(e.target.value);
            }}
            onBlur={onBlur}
            value={value}
            variant="outlined"
            helperText={getErrorText()}
            {...field}
          />
        );
      }}
    />
  );
}

export default MUITextField;
