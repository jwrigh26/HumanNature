import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import classnames from 'classnames';
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
    marginTop: theme.spacing(4),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
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
    <div className={classnames(classes.root, otherClasses)}>
      {divider && <Divider />}
      {children}
    </div>
  );
}

export default ContentWrapper;