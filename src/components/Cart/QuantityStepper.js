import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  quantity: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  label: {
    fontFamily: theme.typography.fontFamlies.secondary,
    fontSize: '0.9rem',
  },
  value: {
    fontFamily: theme.typography.fontFamlies.secondary,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    textAlign: 'center',
  }
}));

export default function QuantityStepper() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.wrapper}>
      <section className={classes.quantity}>
        <Typography
          className={classes.label}
          variant="subtitle1"
          component="span"
        >
          Qty:
        </Typography>
        <IconButton>
          <RemoveIcon />
        </IconButton>
        <div className={classes.value}>99</div>
        <IconButton>
          <AddIcon />
        </IconButton>
      </section>
    </div>
  );
}
