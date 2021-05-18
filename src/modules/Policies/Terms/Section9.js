import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

Section.propTypes = {
  classes: PropTypes.any,
};

function Section({ classes }) {
  return (
    <>
      <Typography id={'9'} variant="h5" component="h3" gutterBottom>
        9. Third-Party Sites, Products and Services; Links
      </Typography>
      <Typography variant="body2" classes={{ body2: classes.body2 }}>
        The Services may include links or references to other web sites or
        services solely as a convenience to Users ("
        <span className={classes.bold}>Reference Sites</span>"). Unimath
        does not endorse any such Reference Sites or the information, materials,
        products, or services contained on or accessible through Reference
        Sites. ACCESS AND USE OF REFERENCE SITES, INCLUDING THE INFORMATION,
        MATERIALS, PRODUCTS, AND SERVICES ON OR AVAILABLE THROUGH REFERENCE
        SITES, IS SOLELY AT YOUR OWN RISK.
      </Typography>
    </>
  );
}

export default Section;
