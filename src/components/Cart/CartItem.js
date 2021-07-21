import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
  summary: {
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1.5),
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

export default function CartItem() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [isExpanded, setIsExpanded] = useState();

  function handleChange(_, expanded) {
    console.log('Expanded: ', expanded);
    setIsExpanded(expanded);
  }

  return (
    <Accordion square elevation={0} onChange={handleChange}>
      <AccordionSummary
        classes={{ root: classes.summary }}
        expandIcon={<ExpandMoreIcon />}
      >
        <Thumbnail />
        <Content expanded={isExpanded}/>
        <InlineActions />
      </AccordionSummary>
      <AccordionDetails classes={{ root: classes.details }}>
        <Meta />
        <Divider className={classes.divider} orientation="vertical" flexItem />
        <QuantityStepper />
      </AccordionDetails>
    </Accordion>
  );
}
