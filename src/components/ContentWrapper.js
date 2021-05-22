import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import classnames from 'classnames';
import Divider from '@material-ui/core/Divider';

ContentWrapper.propTypes = {
  classes: PropTypes.any,
  children: PropTypes.any,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    position: 'relative',
    width: '100%',
    marginTop: theme.spacing(4),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  },
}));

function ContentWrapper({ classes: otherClasses, children }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classnames(classes.root, otherClasses)}>
      {children}
    </div>
  );
}

export default ContentWrapper;