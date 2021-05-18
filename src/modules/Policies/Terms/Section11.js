import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

Section.propTypes = {
  classes: PropTypes.any,
};

function Section({ classes }) {
  return (
    <>
      <Typography id={'11'} variant="h5" component="h3" gutterBottom>
        11. Representations and Warranties
      </Typography>
      <Typography variant="body2" classes={{ body2: classes.body2 }}>
        You warrant, represent and agree that you will not provide any User
        Content or otherwise use the Services in a manner that (i) infringes,
        violates or misappropriates another's intellectual property rights,
        rights of publicity or privacy, or other rights; (ii) violates any
        international, federal, state or local law, statute, ordinance or
        regulation or which would render Unimath in violation of any
        applicable laws or regulations, including without limitation, Applicable
        Privacy Laws (collectively, "
        <span className={classes.bold}>Applicable Law</span>"); (iii) is
        harmful, fraudulent, threatening, abusive, harassing, tortuous,
        defamatory, vulgar, obscene, libelous, or otherwise objectionable; or
        (iv) jeopardizes the security of your account or the Services in any
        way, such as allowing someone else access to your account or password or
        submitting User Content that contains viruses. Additionally, you
        represent, warrant and agree that (i) you possess all rights necessary
        to provide your User Content and grant Company the rights in these
        Terms; (ii) you will comply with Applicable Laws in connection with your
        use of the Service; and (iii), if you are School Personnel, you
        understand that you are solely responsible for providing notices and
        obtaining consents required by Applicable Laws for students to use the
        Services or to provide User Content, including compliance with the
        applicable provisions of FERPA and COPPA when using School Consent.
      </Typography>
    </>
  );
}

export default Section;
