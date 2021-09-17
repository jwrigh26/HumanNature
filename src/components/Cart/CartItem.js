import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Divider } from '@material-ui/core';

import Content from './Content';
import InlineActions from './InlineActions';
import Meta from './Meta';
import QuantityStepper from './QuantityStepper';
import Thumbnail from './Thumbnail';
import {
  handleAddQuantityforItem,
  handleRemoveFromCart,
  handleSubtractQuantityForItem,
} from 'store/shopSlice';
import './cart.css';

const useStyles = makeStyles((theme) => ({
  root: {
    // borderBottom: `1px solid ${theme.palette.divider}`,
    // '&:not(:last-child)': {
    //   borderBottom: 0,
    // },
    // '&:before': {
    //   display: 'none',
    // },
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  summary: {
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 0,
    paddingBottom: 0,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 'inherit',
    padding: 0,
    marginLeft: 88,
    marginRight: theme.spacing(0),
  },
  vertical: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default function CartItem({ id, item, quantity }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles(theme);
  const [expanded, setExpanded] = useState(false);

  function handleChange() {
    console.log('handleChange', !expanded);
    setExpanded(!expanded);
  }

  function handleRemoveItem(key) {
    return () => {
      dispatch(handleRemoveFromCart(key));
    };
  }

  function handleAdd(key) {
    return () => {
      dispatch(handleAddQuantityforItem(key));
    };
  }

  function handleSubtract(key) {
    return () => {
      dispatch(handleSubtractQuantityForItem(key));
    };
  }

  React.useEffect(() => {
    console.log('Expanded', expanded);
  }, [expanded]);

  return (
    <Accordion
      square
      elevation={0}
      expanded={expanded}
      onChange={handleChange}
      TransitionProps={{ unmountOnExit: true }}
      classes={{ root: classes.root }}
    >
      <AccordionSummary
        classes={{ root: classes.summary }}
        expandIcon={<ExpandMoreIcon />}
      >
        <Thumbnail item={item} />
        <Content expanded={expanded} item={item} quantity={quantity} />
        <InlineActions onRemoveItem={handleRemoveItem(id)} />
      </AccordionSummary>
      <AccordionDetails classes={{ root: classes.details }}>
        <Meta item={item} />
        <Divider className={classes.vertical} orientation="vertical" flexItem />
        <QuantityStepper
          id={id}
          quantity={quantity}
          onAdd={handleAdd}
          onDelete={handleRemoveItem}
          onSubtract={handleSubtract}
        />
      </AccordionDetails>
    </Accordion>
  );
}
