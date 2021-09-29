import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    textAlign: 'left',
    width: '100%',
  },
  button: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  buttonDark: {
    color: theme.palette.secondary.main,
  },
  text: {
    color: theme.palette.text.secondary,
  },
}));

ReviewCard.propTypes = {
  info: PropTypes.array,
  onEdit: PropTypes.func,
};

export default function ReviewCard({ info = [], onEdit = () => {} }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  function renderLine(line, index) {
    return (
      <Typography
        className={classes.text}
        gutterBottom
        variant="body1"
        component="p"
        key={index}
      >
        {line}
      </Typography>
    );
  }

  return (
    <div className={classes.root}>
      {info.map((line, index) => renderLine(line, index))}
      <Button
        className={clsx(classes.button, {
          [classes.buttonDark]: theme?.mode?.isDark,
        })}
        size="small"
        onClick={(e) => {
          e.stopPropagation();
          onEdit(true);
        }}
        disabled={false}
      >
        Edit
      </Button>
    </div>
  );
}
