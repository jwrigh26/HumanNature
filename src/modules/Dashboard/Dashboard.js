import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';

import ContentWrapper from 'components/ContentWrapper.js';

function Dashboard() {
  return (
    <ContentWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h1">Hello, UniMath</Typography>
          <Typography variant="body1">
            React doesn’t require using JSX.
          </Typography>
          <Button variant="contained" color="primary" component={Link} to={'/policies'}>
            Hello World
          </Button>
        </Grid>
      </Grid>
    </ContentWrapper>
  );
}

export default Dashboard;
