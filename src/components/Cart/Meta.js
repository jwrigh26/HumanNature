import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
    paddingLeft: theme.spacing(1),
  },
  meta: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 0,
    listStyleType: 'none',
    // '&>li': {
    //   paddingRight: theme.spacing(1),
    // },
    paddingRight: theme.spacing(1),
  },
  label: {
    fontFamily: theme.typography.fontFamlies.secondary,
    fontSize: '0.9rem',
    paddingRight: theme.spacing(0.5),
  },
  value: {
    fontFamily: theme.typography.fontFamlies.secondary,
    fontSize: '0.9rem',
    fontWeight: 700,
  },
}));

Meta.propTypes = {
  item: PropTypes.object.isRequired,
};

export default function Meta({ item }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const data = [
    {
      label: 'Color',
      value: item?.color ?? '',
    },
    {
      label: 'Type',
      value: item?.categoryType ?? '',
    },
  ];

  return (
    <div className={classes.wrapper}>
      {data.map(({ label, value }) => {
        return (
          <div className={classes.meta} key={`${label}-${value}`}>
            <Typography
              classes={{ root: classes.label }}
              variant="subtitle2"
              component="span"
            >
              {`${label}:`}
            </Typography>
            <Typography
              classes={{ root: classes.value }}
              variant="subtitle2"
              component="span"
            >
              {value}
            </Typography>
          </div>
        );
      })}
    </div>
  );
}
