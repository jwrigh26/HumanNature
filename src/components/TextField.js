import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { isNil } from 'helpers/utils';

MUITextField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  formikBag: PropTypes.any.isRequired,
  onBlurSetValue: PropTypes.func,
  onChangeSetValue: PropTypes.func,
  onFocus: PropTypes.func,
  getValue: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    // TOOD: add code
  },
}));

function MUITextField({
  getValue = (obj) => obj[name],
  id,
  name,
  label,
  formikBag,
  onFocus: handleFocus,
  ...otherProps
}) {
  const {
    values,
    handleBlur,
    handleChange,
    touched,
    errors,
    setFieldValue,
    setFieldTouched,
  } = formikBag;
  const theme = useTheme();
  const classes = useStyles(theme);
  const value = isNil(getValue(values)) ? '' : getValue(values);
  const hasError = getValue(touched) && getValue(errors);
  const [labelText, setLabelText] = useState(label);
  return <div></div>;
}

export default MUITextField;
