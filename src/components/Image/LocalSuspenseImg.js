import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useImage } from 'react-image';
import { hasValue, haveValue } from 'helpers/utils';

LocalSuspenseImg.propTypes = {
  alt: PropTypes.string,
  file: PropTypes.string,
  style: PropTypes.object,
};

// Assumes all local files will be stored under 'assets/images'
export default function LocalSuspenseImg({ file, alt, style }) {
  const { src } = useImage({
    srcList: hasValue(file) ? require(`assets/images${file}`) : null,
  });
  return <img src={src} alt={alt} style={style} />;
}
