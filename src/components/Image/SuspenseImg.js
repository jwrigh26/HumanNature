import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useImage } from 'react-image';
import Fade from '@material-ui/core/Fade';
import VisibilitySensor from 'react-visibility-sensor';

SuspenseImg.propTypes = {
  alt: PropTypes.string,
  style: PropTypes.object,
  url: PropTypes.string,
};

const useStyles = makeStyles((theme) => ({
  img: {},
}));

// TODO: add default placeholder for failed loads
export default function SuspenseImg({ url, alt, style }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { src } = useImage({
    srcList: [url, 'https://placekitten.com/370/220'],
  });

  const duration = theme.transitions.duration.complex;

  return (
    <VisibilitySensor
      onChange={(e) => {
        console.log(e);
        console.log('onChange for ', src);
      }}
    >
      <Fade in={true} timeout={duration}>
        <img classes={classes.img} src={src} alt={alt} style={style} />
      </Fade>
    </VisibilitySensor>
  );
}
