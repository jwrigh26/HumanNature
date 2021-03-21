import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { hasValue } from 'helpers/utils';

function compare(prev, next) {
  const screenCompare = prev.screenSize === next.screenSize;
  const fileCompare = prev.file === next.file;

  // If returns true the update is skipped
  return screenCompare && fileCompare;
}

Image.propTypes = {
  file: PropTypes.string,
  screenSize: PropTypes.number,
  rezExtensions: PropTypes.object,
};

// Helper method to interpolate and
// resolve a filepath with correct
// resolution extension
function createFileName(path) {
  return (size) => `${path}${size}.jpg`;
}

function Image({ file, screenSize, rezExtensions }) {
  // Goal is to return
  // path/for/name_of_image@xx.jpg
  const getFileNames = useCallback(
    (currentScreenSize, fileName) => {
      return R.chain(
        createFileName(fileName),
        rezExtensions[currentScreenSize]
      );
    },
    [screenSize]
  );

  console.log('File', file);
  console.log('ScreenSize', screenSize);
  console.log('Rez', rezExtensions);

  const hasProps =
    hasValue(file) && hasValue(screenSize) && hasValue(rezExtensions);

  return (
    <>
      {hasProps && (
        <div>
          <Typography variant={'body1'}>Current Media Query:</Typography>
          <Typography variant="h3">{screenSize}</Typography>
          <Typography variant="h4">
            {getFileNames(screenSize, file)[0]}
          </Typography>
        </div>
      )}
      {!hasProps && null}
    </>
  );
}

export default React.memo(Image, compare);
