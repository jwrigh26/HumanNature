import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

News.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    route: PropTypes.string,
  }),
};

function News({ meta }) {
  return (
    <>
      <Typography variant="h1" component="h2" gutterBottom>
        {meta.title}
      </Typography>
    </>
  );
}

export default News;
