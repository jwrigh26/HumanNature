import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

LinkButton.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  blank: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  link: {
    fontWeight: 700,
  },
}));

function LinkButton({ children, to, blank = false }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <>
      {blank && (
        <Link
          className={classes.link}
          href={to}
          color="primary"
          component="a"
          underline="hover"
          target={'blank'}
          rel={'noopener noreferrer'}
        >
          {children}
        </Link>
      )}
      {!blank && (
        <Link
          className={classes.link}
          href={to}
          color="primary"
          component="a"
          underline="hover"
        >
          {children}
        </Link>
      )}
    </>
  );
}

export default LinkButton;
