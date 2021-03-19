import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
    [theme.breakpoints.up('md')]: {
      color: theme.palette.text.primary,
    },
  },
  titleWrapper: {
    display: 'flex',
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(2),
      flex: 1,
    },
  },
}));

function BrandCrest() {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className={classes.titleWrapper}>
      <ButtonBase
        disableRipple
        disableTouchRipple
        component={Link}
        to={'/'}
        // Don't need to do this because need click event
        // to call "to"
        // onClick={(event) => {
        //   event.preventDefault();
        // }}
      >
        <Typography className={classes.title} variant="h4">
          Salt Baked City
        </Typography>
      </ButtonBase>
    </div>
  );
}

export default BrandCrest;
