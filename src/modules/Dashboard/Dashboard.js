import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import WrapperBox from '../../components/WrapperBox';

function Dashboard() {
  return (
    <WrapperBox>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h1">Hello, UniMath</Typography>
          <Typography variant="body1">
            React doesn’t require using JSX, but most people find it helpful as
            a visual aid when working with UI inside the JavaScript code. It
            also allows React to show more useful error and warning messages.
          </Typography>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </Grid>
      </Grid>
    </WrapperBox>
  );
}

export default Dashboard;
