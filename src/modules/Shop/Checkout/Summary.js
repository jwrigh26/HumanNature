import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CartItem from 'components/Cart/CartItem';
import { setCartOpen, shopSelector } from 'store/shopSlice';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  summary: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
  buttonDark: {
    color: theme.palette.secondary.main,
  },
  buttonEdit: {
    color: theme.palette.warning.main,
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tally: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: theme.spacing(1),
    paddingBottom: 0,
  },
}));

Checkout.propTypes = {
  cart: PropTypes.object,
  form: PropTypes.object,
  onEdit: PropTypes.func,
};

export default function Checkout({ form, onEdit }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [expanded, setExpanded] = useState(true);
  const [buttonLabel, setButtonLabel] = useState('Edit');
  // const { items, quantity, total } = cart;
  const { cart } = useSelector(shopSelector);

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

  // Make new sep component for SUmmary and edit make a card for each one to edit

  function handleChange() {
    setExpanded(!expanded);
  }

  useEffect(() => {
    setButtonLabel(form.canEdit ? 'Save' : 'Edit');
  }, [form.canEdit]);

  return (
    <Accordion
      defaultExpanded={true}
      expanded={expanded}
      onChange={handleChange}
    >
      <AccordionSummary
        classes={{ root: classes.summary, content: classes.summaryContent }}
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
      >
        <Typography gutterBottom variant="h6" component="h6">
          Order Summary
        </Typography>
        <Button
          className={clsx(classes.button, {
            [classes.buttonDark]: theme?.mode?.isDark,
            [classes.buttonEdit]: form.canEdit,
          })}
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          disabled={false}
        >
          {buttonLabel}
        </Button>
      </AccordionSummary>
      <AccordionDetails className={clsx(classes.content)}>
        <>
          <List>
            {Object.keys(cart.items)
              .sort(compare)
              .map((id) => (
                <CartItem
                  key={id}
                  id={id}
                  item={cart.items[id]}
                  quantity={cart.quanity[id]}
                  canEdit={form.canEdit}
                />
              ))}
          </List>
          <Divider className={classes.divider} />
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
        </>
        <div className={clsx(classes.footer)}>
          <Typography gutterBottom variant="body1" component="p">
            Total (USD)
          </Typography>
          <Typography gutterBottom variant="h4" component="h4">
            {cart.subtotal}
          </Typography>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
