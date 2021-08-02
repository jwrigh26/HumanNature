import React, { useEffect, useState, Suspense } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import * as R from 'ramda';
import { useSelector } from 'react-redux';
import Skeleton from 'components/Image/Skeleton';
import { screenSelector } from 'store/screenSlice';
import SuspenseImg from './SuspenseImg';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.grey[300],
  },
}));

Image.propTypes = {
  alt: PropTypes.string,
  url: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  skeletonAnimation: PropTypes.bool,
};

// currentScreenSize is used to give number
// DevicePixelRatio comes back as a value between 1-4

export default function Image({
  alt,
  url,
  width = '100%',
  height = '100%',
  skeletonAnimation = false,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { devicePixelRatio } = useSelector(screenSelector);
  const style = { width, height };

  // const duration = theme.transitions.duration.short;
  const duration = 1000;

  const placeholder = require(`assets/images/placeholder/placeholder@${devicePixelRatio}x.jpg`);

  return (
    <div
      className={classes.wrapper}
      style={{
        ...style,
        backgroundImage: `url(${placeholder})`,
        backgroundPosition: 'center',
      }}
    >
      <Suspense
        fallback={<Skeleton disabled={!skeletonAnimation} style={style} />}
      >
        <SuspenseImg urls={[url, placeholder]} alt={alt} />
      </Suspense>
    </div>
  );
}
