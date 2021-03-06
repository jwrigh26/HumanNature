import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Divider from 'components/Divider';

ContentWrapper.propTypes = {
  classes: PropTypes.any,
  children: PropTypes.any,
  divider: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    position: 'relative',
    width: '100%',
    marginTop: theme.spacing(1),
  },
  children: {
    ...theme.wrapper,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
}));

function ContentWrapper({ classes: otherClasses, children, divider = false }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className={clsx(classes.root, otherClasses)}>
      {divider && <Divider />}
      <div className={classes.children}>{children}</div>
    </div>
  );
}

export default ContentWrapper;
