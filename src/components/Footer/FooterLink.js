import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Tab';
import { useTheme } from '@material-ui/core/styles';

FooterLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.any,
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
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

export default function FooterLink(props) {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Button
      className={classes.root}
      component={Link}
      disableRipple
      size={'small'}
      variant={'text'}
      to={props.to}
      {...props}
    >
      {props.children}
    </Button>
  );
}
