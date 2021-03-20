import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

GSLifeStyle.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    route: PropTypes.string,
  })
};

function GSLifeStyle({ meta }) {
  return (
    <>
      <Typography variant="h1" component="h2" gutterBottom>
        {meta.title}
      </Typography>
    </>
  );
}

export default GSLifeStyle;
