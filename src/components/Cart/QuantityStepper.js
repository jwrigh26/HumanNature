import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: theme.spacing(1),
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
  },
}));

QuantityStepper.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSubtract: PropTypes.func.isRequired,
};

export default function QuantityStepper({
  id,
  quantity,
  onAdd: handleAdd,
  onDelete,
  onSubtract,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const value = quantity;

  const MinusIcon = value > 1 ? RemoveIcon : DeleteIcon;

  const handleMinus = value > 1 ? onSubtract : onDelete;

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
        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            handleMinus(id)();
          }}
        >
          <MinusIcon />
        </IconButton>
        <div className={classes.value}>{value}</div>
        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            handleAdd(id)();
          }}
        >
          <AddIcon />
        </IconButton>
      </section>
    </div>
  );
}
