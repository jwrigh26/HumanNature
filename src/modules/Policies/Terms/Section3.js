import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

Section.propTypes = {
  classes: PropTypes.any,
};

function Section({ classes }) {
  return (
    <>
      <Typography id={'3'} variant="h5" component="h3" gutterBottom>
        3. Other Guidelines
      </Typography>
      <Typography variant="body2" classes={{ body2: classes.body2 }}>
        When using the Services, you will be subject to any additional posted
        guidelines or rules applicable to specific services and features which
        may be posted from time to time (the "Guidelines"). All such Guidelines
        are hereby incorporated by reference into the Terms.
      </Typography>
    </>
  );
}

export default Section;
