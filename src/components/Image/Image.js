import React, { useEffect, useState, Suspense } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import * as R from 'ramda';
import { useSelector } from 'react-redux';
import Skeleton from 'components/Image/Skeleton';
import { screenSelector } from 'store/screenSlice';
import SuspenseImg from './SuspenseImg';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

Image.propTypes = {
  alt: PropTypes.string,
  url: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  disableSkeletonAnimation: PropTypes.bool,
};

// currentScreenSize is used to give number
// DevicePixelRatio comes back as a value between 1-4

export default function Image({
  alt,
  url,
  width = '100%',
  height = '100%',
  disableSkeletonAnimation = false,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { devicePixelRatio } = useSelector(screenSelector);
  const style = { width, height };

  return (
    <div className={classes.wrapper} style={style}>
      <Suspense
        fallback={
          <Skeleton disabled={disableSkeletonAnimation} style={style} />
        }
      >
        <SuspenseImg url={url} alt={alt} />
      </Suspense>
    </div>
  );
}
