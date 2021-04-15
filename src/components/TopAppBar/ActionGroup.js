import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.icon.primary,
    [theme.breakpoints.up('md')]: {
      color: theme.palette.common.black,
    },
  },
  actionsWrapper: {
    display: 'flex',
    flex: 1,
    // backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      flex: 0,
    },
  },
}));

function ActionGroup() {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className={classes.actionsWrapper}>
      <IconButton>
        <Icon className={classes.icon}>settings</Icon>
      </IconButton>
    </div>
  );
}

export default ActionGroup;
