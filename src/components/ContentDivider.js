import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import classnames from 'classnames';
import Divider from '@material-ui/core/Divider';

ContentDivider.propTypes = {
  classes: PropTypes.any,
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));

function ContentDivider({ classes: otherClasses }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <Divider className={classnames(classes.root, otherClasses)} />
    </>
  );
}

export default ContentDivider;
