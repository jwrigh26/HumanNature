import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import { useSelector } from 'react-redux';

import { screenSelector } from 'store/screenSlice';
import { screenSize } from 'hooks/useMedia';
import Image from 'components/Image/Image';

// This will come from parent object
const sizes = {
  [screenSize.xl]: ['@2x', '@1x'],
  [screenSize.lg]: ['@1.5x', '@1x'],
  [screenSize.md]: ['@1x', '@0.5'],
  [screenSize.sm]: ['@1x'],
  [screenSize.xs]: ['@0.5x'],
};

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
  },
}));

function JumboTron() {
  const { currentScreenSize } = useSelector(screenSelector);
  const loading = true;
  const theme = useTheme();
  const classes = useStyles(theme);

  const file = 'assets/images/jumbotron/sbc_hero_01/sbc_hero_01';

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
        <Image
          file={file}
          screenSize={currentScreenSize || screenSize.xl}
          rezExtensions={sizes}
        />
      </Box>
    </>
  );
}

export default JumboTron;
