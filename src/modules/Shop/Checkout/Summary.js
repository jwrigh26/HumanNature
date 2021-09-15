import React, { useEffect, useState } from 'react';
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
  },
  buttonDark: {
    color: theme.palette.secondary.main,
  },
  divider: {
    marginBottom: theme.spacing(2),
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
}));

export default function Checkout({ cart }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [expanded, setExpanded] = useState(true);
  // const { items, quantity, total } = cart;

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

  Checkout.propTypes = {
    cart: PropTypes.object,
  };

  function handleEdit() {
    console.log(theme);
  }

  function handleChange() {
    setExpanded(!expanded);
  }

  useEffect(() => {
    console.log('Cart', cart);
  }, [cart]);

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
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
          })}
          size="small"
          onClick={(event) => event.stopPropagation()}
          disabled={false}
        >
          Edit Cart
        </Button>
      </AccordionSummary>
      <AccordionDetails className={clsx(classes.content)}>
        <List>
          {Object.keys(cart.items)
            .sort(compare)
            .map((id) => (
              <CartItem
                key={id}
                id={id}
                item={cart.items[id]}
                quantity={cart.quanity[id]}
                canEdit={false}
              />
            ))}
        </List>
        <div className={clsx(classes.footer)}>
          <Typography gutterBottom variant="body1" component="p">
            Total (USD)
          </Typography>
          <Typography gutterBottom variant="h4" component="h4">
            $99.99
          </Typography>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
