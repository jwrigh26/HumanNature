import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Tab from '@material-ui/core/Tab';
import { useTheme } from '@material-ui/core/styles';

LinkTab.propTypes = {
  to: PropTypes.string,
};

const useStyles = makeStyles({
  root: {
    fontWeight: 600,
    textTransform: "capitalize",
  }
})

export default function LinkTab(props) {
  const classes = useStyles();
  return (
    <Tab
      className={classes.root}
      component={Link}

      disableRipple
      onClick={(event) => {
        // event.preventDefault();
        // console.log("This was read", props.to)
      }}

      to={props.to}
      {...props}
    />
  );
}
