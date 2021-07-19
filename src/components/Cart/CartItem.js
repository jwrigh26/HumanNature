import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Divider } from '@material-ui/core';
import { setCartOpen, shopSelector } from 'store/shopSlice';

const useStyles = makeStyles((theme) => ({
  summary: {
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1.5),
  },
  summaryImage: {
    width: 56,
    height: 56,
    [theme.breakpoints.up('sm')]: {
      width: 72,
      height: 72,
    },
    background: theme.palette.grey[300],
    flexShrink: 0,
  },
  summaryContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: theme.spacing(1),
  },
  summaryName: {
    fontSize: '0.8rem',
  },
  summaryPrice: {
    fontFamily: theme.typography.fontFamlies.secondary,
    fontSize: '0.9rem',
    fontWeight: 700,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 48,
    padding: 0,
  },
  quantity: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: theme.spacing(1),
  },
  quantityLabel: {
    fontFamily: theme.typography.fontFamlies.secondary,
    fontSize: '0.9rem',
  },
  quantityValue: {
    fontFamily: theme.typography.fontFamlies.secondary,
    padding: theme.spacing(1),
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    textAlign: 'center',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
}));

export default function CartItem() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Accordion square elevation={0}>
      <AccordionSummary
        classes={{ root: classes.summary }}
        expandIcon={<ExpandMoreIcon />}
      >
        <div className={classes.summaryImage}></div>
        <div className={classes.summaryContent}>
          <Typography
            className={classes.summaryName}
            variant="body1"
            component="h4"
          >
            Product of Name Goes Here
          </Typography>
          <Typography
            className={classes.summaryPrice}
            variant={'h6'}
            component="h5"
            gutterBottom={false}
          >
            $999.99
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails classes={{ root: classes.details }}>
        <section className={classes.quantity}>
          <Typography
            className={classes.quantityLabel}
            variant="subtitle1"
            component="span"
          >
            Quantity
          </Typography>
          <IconButton>
            <RemoveIcon />
          </IconButton>
          <div className={classes.quantityValue}>99</div>
          <IconButton>
            <AddIcon />
          </IconButton>
        </section>
        <section className={classes.actions}>
          <Divider flexItem={true} orientation="vertical" />
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </section>
      </AccordionDetails>
    </Accordion>
  );
}
