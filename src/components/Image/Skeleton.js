import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';
import * as R from 'ramda';

SkeletonNode.propTypes = {
  style: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
};

export default function SkeletonNode({ style, disabled = false }) {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    setWidth(style.width);
    setHeight(style.height);
  }, [style]);

  return (
    <>
      {disabled && <div style={{ width, height }} />}
      {!disabled && (
        <Skeleton variant="rect" width={width} height={height}>
          <div style={{ width, height }} />
        </Skeleton>
      )}
    </>
  );
}
