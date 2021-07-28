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
  addCount,
  removeItem,
  subtractCount,
  shopSelector,
} from 'store/shopSlice';

const useStyles = makeStyles((theme) => ({
  summary: {
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2.5),
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
};

export default function CartItem({ id, item, quantity }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles(theme);
  const [isExpanded, setIsExpanded] = useState();

  function handleChange(_, expanded) {
    setIsExpanded(expanded);
  }

  function handleRemoveItem(key) {
    return () => {
      dispatch(removeItem({key}));
    }
  }

  return (
    <Accordion square elevation={0} onChange={handleChange}>
      <AccordionSummary
        classes={{ root: classes.summary }}
        expandIcon={<ExpandMoreIcon />}
      >
        <Thumbnail item={item} />
        <Content expanded={isExpanded} item={item} quantity={quantity} />
        <InlineActions onRemoveItem={handleRemoveItem(id)}/>
      </AccordionSummary>
      <AccordionDetails classes={{ root: classes.details }}>
        <Meta />
        <Divider className={classes.divider} orientation="vertical" flexItem />
        <QuantityStepper />
      </AccordionDetails>
    </Accordion>
  );
}
