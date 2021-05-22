import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { isFunction, isNil } from 'helpers/utils';

MUITextField.propTypes = {
  className: PropTypes.any,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  formikBag: PropTypes.any.isRequired,
  getValue: PropTypes.func,
  helperText: PropTypes.string,
  onBlurSetValue: PropTypes.func,
  onChangeSetValue: PropTypes.func,
  onFocus: PropTypes.func,
  required: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  root: {
    // TOOD: add code here if needed
  },

  // TODO: Learn how to fix this crap
  // input: {
  //   "&:-webkit-autofill": {
  //     // WebkitBoxShadow: "0 0 0 1000px black inset"
  //     backgroundColor: "red !important",
  //     WebkitBoxShadow: "none",
  //     MozBoxShadow: "none",
  //     caretColor: "red !important",
  //   },
  //   "&:-internal-autofill-selected": {
  //     // WebkitBoxShadow: "0 0 0 1000px black inset"
  //     backgroundColor: "red !important",
  //     WebkitBoxShadow: "none",
  //     MozBoxShadow: "none",
  //     WebkitTextFillColor: "red !important"
  //   }
  // },
}));

const inputStyle = { WebkitBoxShadow: '0 0 0 1000px white inset' };

// Notes:
// USAGE: onBlurSetValue={value => value.toLowerCase()}
// Provide a function that returns the next value.
// USAGE: onChangeSetValue={value => findValue(value)}
// Provides a function that returns the next value
// for general input change when the value needs to be
// manipulated or dealing with complex data types like arrays

function MUITextField({
  className: otherClasses,
  getValue = (obj) => obj[name],
  id,
  name,
  label,
  formikBag,
  helperText,
  onBlurSetValue,
  onChangeSetValue,
  onFocus: handleFocus,
  required,
  ...otherProps
}) {
  const {
    values,
    handleBlur: formikHandleBlur,
    handleChange: formikHandleChange,
    touched,
    errors,
    setFieldValue,
    setFieldTouched,
  } = formikBag;

  const theme = useTheme();
  const classes = useStyles(theme);

  const value = isNil(getValue(values)) ? '' : getValue(values);
  const hasError = getValue(touched) && Boolean(getValue(errors));

  function renderHelperText() {
    // Find more details over at:
    // https://material.io/develop/web/components/input-controls/text-field/helper-text
    // Persistent: Makes the helper text permanently visible
    // Validation: Makes the helper text a validation message
    if (hasError) {
      return (
        <span
          className={
            'mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg'
          }
        >
          {getValue(errors).message || getValue(errors)}
        </span>
      );
    } else if (helperText) {
      return (
        <span className={'mdc-text-field-helper-text--persistent'}>
          {helperText}
        </span>
      );
    }
    return null;
  }

  function handleBlur(...args) {
    if (isFunction(onBlurSetValue)) {
      const nextValue = onBlurSetValue(value);
      setFieldTouched(name, true);
      setFieldValue(name, nextValue);
    } else {
      formikHandleBlur(...args);
    }
  }

  function handleChange(event) {
    if (isFunction(onChangeSetValue)) {
      const nextValue = onChangeSetValue(event?.currentTarget?.value);
      setFieldTouched(name, true);
      setFieldValue(name, nextValue);
    } else {
      formikHandleChange(event);
    }
  }

  return (
    <TextField
      classes={{
        root: classnames(classes.root, otherClasses),
      }}
      key={label}
      label={label}
      name={name}
      value={value}
      onBlur={handleBlur}
      onChange={handleChange}
      onFocus={handleFocus}
      required={required}
      helperText={renderHelperText()}
      error={hasError}
      // inputProps={{ className: classes.input }}
      {...otherProps}
    />
  );
}

export default MUITextField;
