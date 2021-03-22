import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import * as R from 'ramda';

import { screenSize } from 'hooks/useMedia';
import { screenSelector } from 'store/screenSlice';
import { hasValue } from 'helpers/utils';

FixedImage.propTypes = {
  file: PropTypes.string,
  alt: PropTypes.string,
};

function FixedImage({ file, alt }) {
  const { currentScreenSize, devicePixelRatio } = useSelector(screenSelector);
  const [src, setSrc] = useState();

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
      setSrc(`${file}-${media}@${devicePixelRatio}x`);
    }
  }, [currentScreenSize, devicePixelRatio]);

  console.log('src', src);
  return src ? (
    <img src={require(`assets/images${src}.jpg`)} alt={alt} />
  ) : null;
}

export default FixedImage;
