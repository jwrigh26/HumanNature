import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

Section.propTypes = {
  classes: PropTypes.any,
};

function Section({ classes }) {
  return (
    <>
      <Typography id={'1'} variant="h5" component="h3" gutterBottom>
        1. Eligibility; Accounts
      </Typography>
      <Typography variant="body2" classes={{ body2: classes.body2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. In pellentesque
        massa placerat duis ultricies lacus sed turpis tincidunt. A lacus
        vestibulum sed arcu. Nisl tincidunt eget nullam non nisi est. Erat
        imperdiet sed euismod nisi. Sodales ut etiam sit amet nisl purus in
        mollis. Nullam eget felis eget nunc lobortis mattis aliquam faucibus.
        Senectus et netus et malesuada fames ac turpis egestas integer. Lacinia
        quis vel eros donec ac odio. Convallis aenean et tortor at risus. Sit
        amet justo donec enim diam. Ullamcorper velit sed ullamcorper morbi
        tincidunt.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>1.1</span> Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. In pellentesque massa placerat duis ultricies
        lacus sed turpis tincidunt. A lacus vestibulum sed arcu. Nisl tincidunt
        eget nullam non nisi est. Erat imperdiet sed euismod nisi. Sodales ut
        etiam sit amet nisl purus in mollis. Nullam eget felis eget nunc
        lobortis mattis aliquam faucibus. Senectus et netus et malesuada fames
        ac turpis egestas integer. Lacinia quis vel eros donec ac odio.
        Convallis aenean et tortor at risus. Sit amet justo donec enim diam.
        Ullamcorper velit sed ullamcorper morbi tincidunt.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>1.2 Account:</span> Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. In pellentesque massa placerat duis
        ultricies lacus sed turpis tincidunt. A lacus vestibulum sed arcu. Nisl
        tincidunt eget nullam non nisi est. Erat imperdiet sed euismod nisi.
        Sodales ut etiam sit amet nisl purus in mollis. Nullam eget felis eget
        nunc lobortis mattis aliquam faucibus. Senectus et netus et malesuada
        fames ac turpis egestas integer. Lacinia quis vel eros donec ac odio.
        Convallis aenean et tortor at risus. Sit amet justo donec enim diam.
        Ullamcorper velit sed ullamcorper morbi tincidunt.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>1.3 Integrated Service:</span> Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. In pellentesque massa
        placerat duis ultricies lacus sed turpis tincidunt. A lacus vestibulum
        sed arcu. Nisl tincidunt eget nullam non nisi est. Erat imperdiet sed
        euismod nisi. Sodales ut etiam sit amet nisl purus in mollis. Nullam
        eget felis eget nunc lobortis mattis aliquam faucibus. Senectus et netus
        et malesuada fames ac turpis egestas integer. Lacinia quis vel eros
        donec ac odio. Convallis aenean et tortor at risus. Sit amet justo donec
        enim diam. Ullamcorper velit sed ullamcorper morbi tincidunt.
      </Typography>
    </>
  );
}

export default Section;
