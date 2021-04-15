import React, { useEffect, useState, Suspense } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { useSelector } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';

import { useImageMediaForScreenSize } from 'hooks/useMedia';
import { screenSelector } from 'store/screenSlice';
import { hasValue } from 'helpers/utils';
import LocalSuspenseImg from './LocalSuspenseImg';
import SuspenseImg from './SuspenseImg';

FixedImage.propTypes = {
  file: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.object.isRequired,
  url: PropTypes.string,
  isFromCMS: PropTypes.bool,
};

function FixedImage({
  alt,
  style: imageStyle,
  file: path = undefined,
  url: route = undefined,
  isFromCMS = true,
}) {
  const { currentScreenSize, devicePixelRatio } = useSelector(screenSelector);
  const [file, setFile] = useState();
  const [url, setURL] = useState();
  const [skeletonStyle, setSkeletonStyle] = useState({});

  const media = useImageMediaForScreenSize(currentScreenSize);

  const getImageWidth = () => '33%';
  const getImageWidthForPercent = () => '33%';
  const getImageHeight = () => '33%';
  const getImageHeightForPercent = () => '330px';

  // This has to be a px or hard value and not a percent for skeleton to work

  useEffect(() => {
    if (hasValue(imageStyle)) {
      // Check for width
      const hasWidth = R.has('width', imageStyle);
      const hasHeight = R.has('height', imageStyle);
      if (hasWidth && hasHeight) {
        setSkeletonStyle({ ...imageStyle });
      }

      if (hasWidth && !hasHeight) {
        // Do stuff here
        const isPercent = imageStyle?.width?.includes('%');
        const height = isPercent ? getImageHeightForPercent() : getImageHeight();
        setSkeletonStyle({ ...imageStyle, height });
      }

      if (hasHeight && !hasWidth) {
        const isPercent = imageStyle?.height?.includes('%');
        const width = isPercent
          ? getImageWidthForPercent()
          : getImageWidth();
        setSkeletonStyle({ ...imageStyle, width });
      }
    }
  }, [imageStyle, media]);

  // TODO: Manage different file type
  // TODO: Manage transition if possible
  useEffect(() => {
    if (hasValue(media) && hasValue(devicePixelRatio)) {
      // For images in the local path
      if (hasValue(path)) {
        console.log('Setting path: ', path);
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
  }, [media, devicePixelRatio]);

  return (
    <Suspense
      fallback={
        <Skeleton
          variant="rect"
          width={skeletonStyle?.width}
          height={skeletonStyle?.height}
        >
          {console.log('Skeleton')}
          {console.log(skeletonStyle)}
          <div style={skeletonStyle} />
        </Skeleton>
      }
    >
      {hasValue(file) && (
        <LocalSuspenseImg file={file} alt={alt} style={imageStyle} />
      )}
      {hasValue(url) && <SuspenseImg url={url} alt={alt} style={imageStyle} />}
    </Suspense>
  );
}

export default FixedImage;
