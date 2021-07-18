import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';

import { setCartOpen, shopSelector } from 'store/shopSlice';

const useStyles = makeStyles((theme) => ({
  item: {
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  trailing: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ListItem className={classes.item}>
      <div className={classes.content}>
        <ListItemText primary={'Something Amazing I guess'} />
        <ListItemText secondary={'something secondary'} />
      </div>
      <div className={classes.trailing}>
        <Typography variant={'subtitle1'}>$999.99</Typography>
      </div>
    </ListItem>
  );
}
