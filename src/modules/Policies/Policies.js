import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import WrapperBox from '../../components/WrapperBox';

import { appSelector } from 'store/appSlice';

import { Link } from 'react-router-dom';

function Policies() {
  return (
    <WrapperBox>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h1">Policies</Typography>
          <Typography variant="body1">Policy Stuff goes here.</Typography>
          <Link to={`/`}>Go Home</Link>
        </Grid>
      </Grid>
    </WrapperBox>
  );
}

export default Policies;
