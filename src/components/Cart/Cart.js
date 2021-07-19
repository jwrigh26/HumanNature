import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import CartItem from './CartItem';

import { setCartOpen, shopSelector } from 'store/shopSlice';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '100%',
    flexShrink: 0,
    [theme.breakpoints.up('sm')]: {
      width: theme.props.cart.drawerWidth,
    },
  },
  drawerPaper: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: theme.props.cart.drawerWidth,
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    height: 88 + 8,
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      height: 96 + 8,
    },
    [theme.breakpoints.down('sm')]: {
      height: 80 + 8,
    },
  },
  footer: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(2)
  },
  subtotal: {
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    display: 'flex',
    alignSelf: 'flex-end',
  },
  subtotalPrice: {
    fontFamily: theme.typography.fontFamlies.secondary,
    fontWeight: 700,
    color: theme.palette.text.primary,
    position: 'relative',
    bottom: 0,
    [theme.breakpoints.up('sm')]: {
      bottom: '3px',
    },
  },
  subtotalTitle: {
    fontFamily: theme.typography.fontFamlies.secondary,
    fontWeight: 700,
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
}));

export default function PersistentDrawerRight() {
  const dispatch = useDispatch();
  const { cart } = useSelector(shopSelector);
  const theme = useTheme();
  const classes = useStyles(theme);

  const handleDrawerClose = () => {
    dispatch(setCartOpen({ open: false }));
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={cart?.open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
        <div className={classes.subtotal}>
          <Typography
            className={classes.subtotalTitle}
            variant="subtitle1"
            component="h3"
          >
            Subtotal:
          </Typography>
          <Typography
            className={classes.subtotalPrice}
            variant="h6"
            component="h3"
          >
            $999.99
          </Typography>
        </div>
      </div>
      <Divider />
      <List>
        {['a', 'b', 'b', 'd'].map((text, index) => (
          <CartItem key={`${text}-${index}`} />
        ))}
      </List>
      <Divider />
      <section className={classes.footer}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className={classes.button}
          startIcon={<ShoppingCartIcon />}
        >
          Checkout
        </Button>
      </section>
    </Drawer>
  );
}
