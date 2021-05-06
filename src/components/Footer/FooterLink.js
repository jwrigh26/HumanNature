import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';

FooterLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.any,
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    fontWeight: 600,
    textTransform: 'none',
    [theme.breakpoints.up('lg')]: {
      minWidth: 64,
    },

  },
  text: {
    color: theme.palette.common.white,
    opacity: 0.8,
    '&:hover': {
      opacity: 1,
    },
    '&:active': {
      opacity: 1,
    },
    '&:focus': {
      opacity: 1,
    },
  }
}));

export default function FooterLink(props) {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Button
      classes={{
        root: classes.root,
        text: classes.text,
      }}
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
