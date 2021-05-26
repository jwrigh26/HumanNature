import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 99,
  },
}));

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

// This should be exported and used at the top
// of the application associated with default component.
export function ScrollTopMarker() {
  return <div id={backToTopAnchor} />
}

function ScrollTop({ children }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(`#${backToTopAnchor}`);

    console.log(backToTopAnchor, anchor);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default ScrollTop;

export const backToTopAnchor = 'unimath-back-to-top-anchor';
