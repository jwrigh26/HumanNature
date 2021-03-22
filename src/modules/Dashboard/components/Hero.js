import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import { useImage } from 'react-image';
import { Typography } from '@material-ui/core';

import FixedImage from 'components/Image/FixedImage';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
  },
}));

function MyImageComponent() {
  const { src } = useImage({
    srcList: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
  });
  return <img src={src} />;
}

function Hero() {
  const loading = true;
  const theme = useTheme();
  const classes = useStyles(theme);

  const file = '';
  const testFile = 'test';

  return (
    <>
      <Box display="flex" alignItems="center">
        {loading ? (
          <Skeleton variant="rect" width="100%">
            <div style={{ paddingTop: '420px' }} />
          </Skeleton>
        ) : (
          <Box />
        )}
      </Box>
      <Box display="flex" alignItems="center">
        <FixedImage
          file={'/hero/JumboTron'}
          alt={'!Moose --- Fixed Image Test --- Moose!'}
        />
      </Box>

      <Box display="flex" alignItems="center">
        <Typography variant="body1"> My Image Component </Typography>
        <Suspense fallback={<div />}>
          <MyImageComponent />
        </Suspense>
      </Box>

      <Box display="flex" alignItems="center">
        <Typography variant="body1"> Test File </Typography>
        <Suspense fallback={<div />}>
          <img src={require(`./${testFile}.jpg`)} />
        </Suspense>
      </Box>
    </>
  );
}

export default Hero;
