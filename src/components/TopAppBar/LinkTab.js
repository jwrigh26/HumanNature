import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Tab from '@material-ui/core/Tab';
import { useTheme } from '@material-ui/core/styles';

LinkTab.propTypes = {
  to: PropTypes.string,
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    // opacity: 0.54,
    fontWeight: 600,
    textTransform: 'none',
    [theme.breakpoints.up('lg')]: {
      minWidth: 96,
    },
    '&:hover': {
      color: theme.palette.text.primary,
      opacity: 1,
    },
    '&$selected': {
      color: theme.palette.common.black,
      fontWeight: theme.typography.fontWeightMedium,
      // opacity: 1,
    },
    '&:focus': {
      color: theme.palette.text.primary,
      // opacity: 1,
    },
  },
}));



export default function LinkTab(props) {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Tab
      className={classes.root}
      component={Link}
      disableRipple
      to={props.to}
      {...props}
    />
  );
}
