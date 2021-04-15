import React from 'react';
import Grid from '@material-ui/core/Grid';

import Hero from 'modules/Dashboard/components/Hero';

function Dashboard() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Hero />
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
