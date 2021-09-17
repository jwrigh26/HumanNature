import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { setCanEdit, setCartOpen, shopSelector } from 'store/shopSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  tally: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: theme.spacing(1),
    paddingBottom: 0,
  },
}));

export default function SummaryShipping() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { cart, form } = useSelector(shopSelector);

  return (
    <div className={classes.root}>
      <List>
        <li className={classes.tally}>
          {' '}
          <Typography gutterBottom variant="body1" component="p">
            Subtotal
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {cart.subtotal}
          </Typography>
        </li>
        <li className={classes.tally}>
          {' '}
          <Typography gutterBottom variant="body1" component="p">
            Shipping
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            $10.00
          </Typography>
        </li>
        <li className={classes.tally}>
          {' '}
          <Typography gutterBottom variant="body1" component="p">
            Tax
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            $0.00
          </Typography>
        </li>
      </List>
    </div>
  );
}
