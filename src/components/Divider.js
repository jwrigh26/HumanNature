import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import classnames from 'classnames';
import Divider from '@material-ui/core/Divider';

MUIDivider.propTypes = {
  className: PropTypes.any,
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.mode.isDark
      ? theme.palette.secondary.main
      : theme.divider,
  },
}));

function MUIDivider({ className }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  return <Divider className={classnames(classes.root, className)} />;
}

export default MUIDivider;
