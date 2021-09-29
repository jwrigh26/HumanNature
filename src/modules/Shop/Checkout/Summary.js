import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { setCanEdit, setCartOpen, shopSelector } from 'store/shopSlice';
import SummaryItem from './SummaryItem';
import SummaryEditItem from './SummaryEditItem';
import clsx from 'clsx';
import Shipping from './SummaryShipping';
import { getCurrencyFromNumber } from 'helpers/formatHelper';

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
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  divider: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  footer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
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

export default function Checkout() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles(theme);
  const [expanded, setExpanded] = useState(true);
  const [buttonLabel, setButtonLabel] = useState('Edit');
  const { cart, form } = useSelector(shopSelector);
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

  // Make new sep component for SUmmary and edit make a card for each one to edit
  function renderSummaryItems() {
    return (
      <List>
        {Object.keys(cart.items)
          .sort(compare)
          .map((id) => {
            return form.canEdit ? (
              <SummaryEditItem
                key={id}
                id={id}
                item={cart.items[id]}
                quantity={cart.quanity[id]}
              />
            ) : (
              <SummaryItem
                key={id}
                id={id}
                item={cart.items[id]}
                quantity={cart.quanity[id]}
              />
            );
          })}
      </List>
    );
  }

  function handleChange() {
    setExpanded(!expanded);
    if (!expanded) {
      dispatch(setCanEdit({ edit: false }));
    }
  }

  function handleEdit() {
    dispatch(setCanEdit({ edit: !form.canEdit }));
  }

  useEffect(() => {
    setButtonLabel(form.canEdit ? 'Save' : 'Edit');
  }, [form.canEdit]);

  return (
    <>
      <Accordion
        defaultExpanded={true}
        expanded={expanded}
        onChange={handleChange}
        elevation={0}
      >
        <AccordionSummary
          classes={{ root: classes.summary, content: classes.summaryContent }}
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
        >
          <Typography gutterBottom variant="h6" component="h6">
            Order Summary
          </Typography>
          {expanded && (
            <Button
              className={clsx(classes.button, {
                [classes.buttonDark]: theme?.mode?.isDark,
                [classes.buttonEdit]: form.canEdit,
              })}
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                handleEdit();
              }}
              disabled={false}
            >
              {buttonLabel}
            </Button>
          )}
        </AccordionSummary>
        <AccordionDetails className={clsx(classes.content)}>
          { renderSummaryItems() }
        </AccordionDetails>
      </Accordion>
      <Shipping />
      <div className={classes.divider} />
      <div className={clsx(classes.footer)}>
        <Typography gutterBottom variant="body1" component="p">
          Total (USD)
        </Typography>
        <Typography gutterBottom variant="h4" component="h4">
          {getCurrencyFromNumber(cart.subtotal)}
        </Typography>
      </div>
    </>
  );
}

// TODO: Setup a way to traverse Steps
// This is not being used and was for old way of clicking on accordian
// Example how to controll accordian expansion
// const handleChange = (panel) => (event, newExpanded) => {
//   // event.preventDefault();
//   setExpanded(newExpanded ? panel : false);
// };
