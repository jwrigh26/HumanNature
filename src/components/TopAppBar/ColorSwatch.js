import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';

ColorSwatch.propTypes = {
  className: PropTypes.any,
  palette: PropTypes.shape({
    primary: PropTypes.shape({
      light: PropTypes.string,
      main: PropTypes.string,
      dark: PropTypes.string,
    }),
    secondary: PropTypes.shape({
      main: PropTypes.string,
    }),
  }),
};

const useStyles = makeStyles((theme) => ({
  palette: {
    width: 'inherit',
    height: 'inherit',
    display: 'grid',
    gridTemplateColumns: '24px 24px 24px 24px',
    gridTemplateRows: '24px',
    columnGap: theme.spacing(0.5),
    marginLeft: theme.spacing(2),
  },
  box: {
    width: '24px',
    height: '24px',
    background: 'orange',
  },
}));

function ColorSwatch({ className, palette }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classnames(classes.palette, className)}>
      <span
        className={classes.box}
        style={{ backgroundColor: palette.primary.light }}
      ></span>
      <span
        className={classes.box}
        style={{ backgroundColor: palette.primary.main }}
      ></span>
      <span
        className={classes.box}
        style={{ backgroundColor: palette.primary.dark }}
      ></span>
      <span
        className={classes.box}
        style={{ backgroundColor: palette.secondary.main }}
      ></span>
    </div>
  );
}

export default React.memo(ColorSwatch);
