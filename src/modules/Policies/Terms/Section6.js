import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import Link from '../fragments/Link';

Section.propTypes = {
  classes: PropTypes.any,
};

function Section({ classes }) {
  return (
    <>
      <Typography id={'6'} variant="h5" component="h3" gutterBottom>
        6. Digital Millenium Copyright Act
      </Typography>
      <Typography variant="body2" classes={{ body2: classes.body2 }}>
        It is Human+Nature's policy to respond to notices of alleged copyright
        infringement that comply with the Digital Millennium Copyright Act. For
        more information, please go to Human+Nature's DMCA Notification
        Guidelines at{' '}
        <Link to={'https://www.khanacademy.org/about/dmca'} blank>
          https://www.khanacademy.org/about/dmca.
        </Link>{' '}
        Human+Nature will promptly terminate without notice your access to the
        Services if you are determined by Human+Nature to be a "repeat
        infringer." A repeat infringer is a User who has been notified by Khan
        Academy of infringing activity violations more than twice and/or who has
        had User Content or any other user-submitted content removed from the
        Services more than twice.
      </Typography>
    </>
  );
}

export default Section;
