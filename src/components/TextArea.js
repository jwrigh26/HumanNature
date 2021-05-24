import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';

import { isFunction, isNil, hasValue } from 'helpers/utils';

MUITextArea.propTypes = {
  className: PropTypes.any,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  formikBag: PropTypes.any.isRequired,
  getValue: PropTypes.func,
  max: PropTypes.number,
  onBlurSetValue: PropTypes.func,
  onChangeSetValue: PropTypes.func,
  onFocus: PropTypes.func,
  required: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    ...theme.typography.body1,
    padding: theme.spacing(1),
    borderRadius: '4px',
  },
  helperText: {
    paddingLeft: theme.spacing(2),
  },
  error: {
    color: theme.palette.error.main,
  },
  warning: {
    color: theme.palette.warning.main,
  },
}));

const inputStyle = { WebkitBoxShadow: '0 0 0 1000px white inset' };

// Notes:
// USAGE: onBlurSetValue={value => value.toLowerCase()}
// Provide a function that returns the next value.
// USAGE: onChangeSetValue={value => findValue(value)}
// Provides a function that returns the next value
// for general input change when the value needs to be
// manipulated or dealing with complex data types like arrays

function MUITextArea({
  className: otherClasses,
  getValue = (obj) => obj[name],
  id,
  name,
  label,
  formikBag,
  max = 99,
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

  const [remaining, setRemaining] = useState(max);
  const [helperText, setHelperText] = useState();

  useEffect(() => {
    const r = max - value.length;
    const text = `${r} characters remaining`;
    setRemaining(r);
    setHelperText(text);
  }, [value]);

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
    <div>
      <TextareaAutosize
        className={classnames(classes.root, otherClasses)}
        key={label}
        label={label}
        name={name}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        required={required}
        {...otherProps}
      />
      <Typography
        className={classnames(classes.helperText, {
          [classes.error]: hasError,
          [classes.error]: hasValue(value) && max - value.length <= 0,
          [classes.warning]:
            hasValue(value) &&
            max - value.length < 10 &&
            max - value.length > 0,
        })}
        variant="caption"
        component="div"
        gutterBottom
      >
        {helperText}
      </Typography>

      {hasError && (
        <Typography
          className={classnames(classes.helperText, classes.error)}
          variant="caption"
          component="div"
          gutterBottom
        >
          {getValue(errors)}
        </Typography>
      )}
    </div>
  );
}

export default MUITextArea;
