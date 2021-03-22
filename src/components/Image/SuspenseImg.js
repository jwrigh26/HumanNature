import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useImage } from 'react-image';

SuspenseImg.propTypes = {
  alt: PropTypes.string,
  style: PropTypes.object,
  url: PropTypes.string,
};

// TODO: add default placeholder for failed loads
export default function SuspenseImg({ url, alt, style }) {
  const { src } = useImage({
    srcList: [url],
  });
  return <img src={src} alt={alt} style={style} />;
}
