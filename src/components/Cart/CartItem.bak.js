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
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 0,
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    },
  },

  primary: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
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

  subContent: {
    display: 'flex',
    flexDirection: 'column',
  },

  trailing: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  image: {
    width: 56,
    height: 56,
    [theme.breakpoints.up('sm')]: {
      width: 72,
      height: 72,
    },
    background: theme.palette.grey[500],
    flexShrink: 0,
  },
  itemMain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between',
  },
  itemDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  meta: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexShrink: 0,
    alignItems: 'center',
    width: 80,
  },
  action: {
    width: 40,
    height: 40,
    paddingLeft: 0,
    paddingRight: 0,
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 40,
  },
  divider: {
    marginLeft: theme.spacing(1),
  },
  name: {
    fontSize: '0.8rem',
  },
  price: {
    fontFamily: theme.typography.fontFamlies.secondary,
    fontSize: '0.9rem',
    marginRight: theme.spacing(2),
  },

  metaItem: {
    paddingRight: theme.spacing(2),
    fontFamily: theme.typography.fontFamlies.secondary,
    fontSize: '0.7rem',
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
          <Typography
            className={classes.name}
            id={'5'}
            variant="body1"
            component="h4"
          >
            Product of Name Goes Here
          </Typography>
          <div className={classes.subContent}>
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
