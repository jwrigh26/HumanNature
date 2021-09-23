import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { useForm, Controller } from 'react-hook-form';
import { isFunction, isNil } from 'helpers/utils';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

MUITextField.propTypes = {
  classes: PropTypes.any,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object,
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

function MUITextField({ classes: extendedClasses, control, errors, trigger }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  function getErrorText() {
    if (errors.customerEmail) {
      console.log(`${JSON.stringify(errors, null, 2)}`);
      
      return (
        <Typography
          className={classes.errorText}
          gutterBottom
          variant="body1"
          component="span"
        >
          {errors.customerEmail.message}
        </Typography>
      );
    }
    return null;
  }

  return (
    <Controller
      control={control}
      id="customerEmail"
      name="customerEmail" // This matters for defaultValues
      render={({ field: { onChange, onBlur, ref, value, ...field } }) => {
        return (
          <TextField
            className={clsx(classes.root, extendedClasses)}
            inputRef={ref}
            onChange={(e) => {
              // setTextValue(e.target.value);
              if (errors.customerEmail) {
                trigger('customerEmail');
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
