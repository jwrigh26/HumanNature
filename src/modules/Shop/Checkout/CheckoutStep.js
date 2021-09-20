import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '0px solid',
    borderColor: theme.palette.divider,
    boxShadow: 'none',
    cursor: 'default !important',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  summary: {
    backgroundColor: theme.palette.background.paper,
    cursor: 'default !important',
    marginBottom: theme.spacing(1),
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  expanded: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing(4),
  },
}));

Step.propTypes = {
  children: PropTypes.node,
  expanded: PropTypes.bool,
  label: PropTypes.string,
};

export default function Step({ children, expanded, label }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Accordion classes={{ root: classes.root }} expanded={expanded}>
      <AccordionSummary
        classes={{
          root: clsx(classes.summary, { [classes.expanded]: expanded }),
        }}
        aria-controls="step-content"
        id="step-header"
      >
        <div className={clsx(classes.block)}>
          <Typography variant="h5" component="h5">
            {label}
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails classes={{ root: classes.details }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}
