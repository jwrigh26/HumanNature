import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';

WrapperBox.propTypes = {
  children: PropTypes.any,
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'block',
    position: 'relative',
    width: '100%',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      // paddingLeft: theme.spacing(2),
      // paddingRight: theme.spacing(2),
    },
  },
}));

function WrapperBox({ children }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <div className={classes.wrapper}>{children}</div>;
}

export default WrapperBox;
