import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import { Typography } from '@material-ui/core';

import FixedImage from 'components/Image/FixedImage';
const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
  },
}));

function Hero() {
  const loading = true;
  const theme = useTheme();
  const classes = useStyles(theme);

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
          alt={'SBC Demo'}
          style={{ width: '100%' }}
        />
      </Box>
      <Box display="flex" alignItems="center">
        <FixedImage
          url={'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'}
          alt={'airplane'}
          style={{ width: '25%', height: '200px' }}
          isFromCMS={false}
        />
      </Box>
    </>
  );
}

export default Hero;
