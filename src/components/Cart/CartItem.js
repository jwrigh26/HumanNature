import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { setCartOpen, shopSelector } from 'store/shopSlice';

const useStyles = makeStyles((theme) => ({
  item: {
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing(4),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },

  primary: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  secondary: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: theme.spacing(1),
  },
  trailing: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  image: {
    width: 72,
    height: 72,
    background: theme.palette.grey[500],
    flexShrink: 0,
  },
  meta: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  metaItem: {
    paddingRight: theme.spacing(2),
    fontFamily: theme.typography.fontFamlies.secondary,
  },
  actions: {
    marginLeft: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexShrink: 0,
    alignItems: 'center',
    width: 96,
  },
  action: {
    width: 56,
    height: 56,
    paddingLeft: 0,
    paddingRight: 0,
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    marginLeft: theme.spacing(1),
  },
  price: {
    fontFamily: theme.typography.fontFamlies.secondary,
  },
}));

export default function CartItem() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.item}>
      <section className={classes.primary}>
        <div className={classes.image}></div>
        <div className={classes.content}>
          <Typography id={'5'} variant="body1" component="h4">
            Product of Name Goes Here
          </Typography>
          <Typography
            className={classes.price}
            variant={'h6'}
            component="h5"
            gutterBottom={false}
          >
            $999.99
          </Typography>
          <div className={classes.meta}>
            <Typography className={classes.metaItem} variant={'subtitle1'}>
              Qty: 99
            </Typography>
            <Typography className={classes.metaItem} variant={'subtitle1'}>
              Orange
            </Typography>
          </div>
        </div>
      </section>

      <section className={classes.secondary}>
        <Divider className={classes.divider} orientation="vertical" flexItem />
        <div className={classes.actions}>
          <ListItem button className={classes.action} disableGutters={false}>
            <ListItemIcon className={classes.icon}>
              <DeleteIcon />
            </ListItemIcon>
          </ListItem>

          <ListItem button className={classes.action} disableGutters={false}>
            <ListItemIcon className={classes.icon}>
              <EditIcon />
            </ListItemIcon>
          </ListItem>
        </div>
      </section>
    </div>
  );
}
