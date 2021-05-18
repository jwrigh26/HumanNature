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
  link: {},
}));

function LinkButton({ children, to, blank = false }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <>
      {blank && (
        <Link
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
