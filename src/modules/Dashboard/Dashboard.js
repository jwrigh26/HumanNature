import React from 'react';
import Grid from '@material-ui/core/Grid';

import JumboTron from "modules/Dashboard/components/JumboTron";
import Image from "components/Image/Image";

function Dashboard() {
  console.log('Hey');
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <JumboTron />
          <Image />
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
