import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import SVG from 'assets/unimathLogo.js';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
    position: 'relative',
    top: '6px',
    color: theme.palette.text.primary,
    [theme.breakpoints.up('md')]: {
      top: '8px',
      color: theme.palette.text.primary,
    },
  },
  titleWrapper: {
    display: 'flex',
    paddingLeft: theme.spacing(1),
    flex: 1,
  },
}));

function BrandCrest() {
  const theme = useTheme();
  const classes = useStyles(theme);

  const logoSize = theme.breakpoints.up('md') ? '72px' : '56px';

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
        <SVG />
        <Typography className={classes.title} variant="h2">
          Unimath
        </Typography>
      </ButtonBase>
    </div>
  );
}

export default BrandCrest;
