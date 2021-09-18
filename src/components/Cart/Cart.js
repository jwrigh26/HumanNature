import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
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
import { getCurrencyFromNumber } from 'helpers/formatHelper';

import CartItem from './CartItem';
import EmptyCart from './EmptyCart';

import { isEmpty } from 'helpers/utils';
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
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
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
  list: {
    // paddingLeft: theme.spacing(2),
    // paddingRight: theme.spacing(2.5),
  }
}));

export default function PersistentDrawerRight() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cart } = useSelector(shopSelector);
  const theme = useTheme();
  const classes = useStyles(theme);

  const isCartEmpty = isEmpty(cart?.items);

  // ASC if DES swap -1 and 1 place
  function compare(a, b) {
    const aItem = cart.items[a]?.order ?? 0;
    const bItem = cart.items[b]?.order ?? 0;
    if (aItem < bItem) {
      return 1;
    }
    if (aItem > bItem) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }

  function handleCheckout() {
    dispatch(setCartOpen({ open: false }));
    history.push('/shop/checkout');
  }

  function handleDrawerClose() {
    dispatch(setCartOpen({ open: false }));
  }

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
            {getCurrencyFromNumber(cart.subtotal)}
          </Typography>
        </div>
      </div>
      <Divider />
      {isCartEmpty && <EmptyCart />}
      {!isCartEmpty && (
        <List className={classes.list}>
          {Object.keys(cart.items)
            .sort(compare)
            .map((id) => (
              <CartItem
                key={id}
                id={id}
                item={cart.items[id]}
                quantity={cart.quanity[id]}
              />
            ))}
        </List>
      )}
      <section className={classes.footer}>
        <Button
          onClick={handleCheckout}
          variant="contained"
          color="secondary"
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
