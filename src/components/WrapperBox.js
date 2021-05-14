import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import classnames from 'classnames';

WrapperBox.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.any,
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

function WrapperBox({ children, classes: classNames }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <div className={classnames(classes.wrapper, classNames)}>{children}</div>;
}

export default WrapperBox;
