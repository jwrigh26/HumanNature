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
import SummaryContent from './SummaryContent';

const useStyles = makeStyles((theme) => ({
  summary: {
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
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
  divider: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  canEdit: PropTypes.bool,
};

export default function CartItem({ id, item, quantity, canEdit = true }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles(theme);
  const [isExpanded, setIsExpanded] = useState();

  function handleChange(_, expanded) {
    console.log('Expanded', expanded);
    setIsExpanded(expanded);
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

  return (
    <Accordion
      square
      elevation={0}
      expanded={canEdit ? isExpanded : false}
      onChange={handleChange}
    >
      <AccordionSummary
        classes={{ root: classes.summary }}
        expandIcon={canEdit ? <ExpandMoreIcon /> : undefined}
      >
        <Thumbnail item={item} />
        {canEdit && (
          <>
            <Content expanded={isExpanded} item={item} quantity={quantity} />
            <InlineActions onRemoveItem={handleRemoveItem(id)} />
          </>
        )}
        {!canEdit && <SummaryContent item={item} quantity={quantity} />}
      </AccordionSummary>
      <AccordionDetails classes={{ root: classes.details }}>
        <Meta item={item} />
        <Divider className={classes.divider} orientation="vertical" flexItem />
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
