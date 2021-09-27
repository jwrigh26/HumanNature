import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { Controller } from 'react-hook-form';
import { isFunction } from 'helpers/utils';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import clsx from 'clsx';

MUISelect.propTypes = {
  classes: PropTypes.any,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  setChangeValue: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  errorText: {
    color: theme.palette.error.main,
  },
}));

function MUISelect({
  classes: extendedClasses,
  control,
  label,
  name,
  options,
  setChangeValue,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Controller
      control={control}
      id={name}
      name={name} // This matters for defaultValues
      render={({ field: { onChange, ref, value, ...field } }) => {
        return (
          <FormControl
            variant="outlined"
            className={clsx(classes.root, extendedClasses)}
          >
            <InputLabel htmlFor="outlined-age-native-simple">
              {label}
            </InputLabel>
            <Select
              native
              value={value}
              onChange={(e) => {
                if (isFunction(setChangeValue)) {
                  onChange(setChangeValue(e.target.value));
                } else {
                  onChange(e.target.value);
                }
              }}
              label={label}
              inputProps={{
                name: name,
                id: name,
              }}
              {...field}
            >
              <option aria-label="None" value="" />
              {options.map((o, i) => (
                <option key={`${o.name}-${i}`} value={o.value}>
                  {o.name}
                </option>
              ))}
            </Select>
          </FormControl>
        );
      }}
    />
  );
}

export default MUISelect;
