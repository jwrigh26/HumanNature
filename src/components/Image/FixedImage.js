import React, { useEffect, useState, Suspense } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { useSelector } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';

import LocalSuspenseImg from './LocalSuspenseImg';
import SuspenseImg from './SuspenseImg';
import { screenSize } from 'hooks/useMedia';
import { screenSelector } from 'store/screenSlice';
import { hasValue } from 'helpers/utils';

FixedImage.propTypes = {
  file: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.object,
  url: PropTypes.string,
  isFromCMS: PropTypes.bool,
};

function FixedImage({
  alt,
  style,
  file: path = undefined,
  url: route = undefined,
  isFromCMS = true,
}) {
  const { currentScreenSize, devicePixelRatio } = useSelector(screenSelector);
  const [file, setFile] = useState();
  const [url, setURL] = useState();

  // TODO: Manage different file type
  // TODO: Manage transition if possible
  useEffect(() => {
    if (hasValue(currentScreenSize) && hasValue(devicePixelRatio)) {
      const mediaSizes = [
        {
          name: 'mobile',
          isVisible: currentScreenSize <= screenSize.md,
        },
        {
          name: 'tablet',
          isVisible:
            currentScreenSize > screenSize.md &&
            currentScreenSize <= screenSize.lg,
        },
        {
          name: 'desktop',
          isVisible: currentScreenSize > screenSize.lg,
        },
      ];
      const isVisible = R.propEq('isVisible', true);
      const media = R.pipe(R.find(isVisible), R.prop('name'))(mediaSizes);

      // For images in the local path
      if (hasValue(path)) {
        console.log('Setting path: ', path, route);
        setFile(`${path}-${media}@${devicePixelRatio}x.jpg`);
      }

      // For images hosted at a CMS or other URL address
      if (hasValue(route)) {
        console.log('route', route, isFromCMS);
        setURL(
          isFromCMS ? `${route}-${media}@${devicePixelRatio}x.jpg` : route
        );
      }
    }
  }, [currentScreenSize, devicePixelRatio]);

  return (
    <Suspense
      fallback={
        <Skeleton variant="rect" width={style.width} height={style.height}>
          <div style={style} />
        </Skeleton>
      }
    >
      {hasValue(file) && (
        <LocalSuspenseImg file={file} alt={alt} style={style} />
      )}
      {hasValue(url) && <SuspenseImg url={url} alt={alt} style={style} />}
    </Suspense>
  );
}

export default FixedImage;
