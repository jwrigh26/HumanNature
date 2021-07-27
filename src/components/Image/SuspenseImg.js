import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useImage } from 'react-image';
import VisibilitySensor from 'react-visibility-sensor';
import Fade from '@material-ui/core/Fade';

SuspenseImg.propTypes = {
  alt: PropTypes.string,
  style: PropTypes.object,
  urls: PropTypes.array,
};

const useStyles = makeStyles((theme) => ({
  img: {},
}));

// TODO: add default placeholder for failed loads
export default function SuspenseImg({ urls, alt, style }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { src } = useImage({
    srcList: urls,
  });

  const duration = theme.transitions.duration.enteringScreen;

  return (
    <VisibilitySensor
      onChange={(e) => {
        // console.log(e);
        // console.log('onChange for ', src);
      }}
    >
      <Fade in={true} timeout={duration}>
        <img classes={classes.img} src={src} alt={alt} style={style} />
      </Fade>
    </VisibilitySensor>
  );
}
