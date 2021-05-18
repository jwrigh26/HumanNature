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
      <Typography id={'4'} variant="h5" component="h3" gutterBottom>
        4. Modification of the Terms
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>4.1 General:</span> Upon opening an
        account, you accept the Terms in the form posted on our website. Khan
        Academy reserves the right, at our discretion, to change, modify, add,
        or remove portions of the Terms at any time. Please check the Terms and
        any Guidelines periodically for changes that are made after you open
        your account. Your continued use of the Services after the posting of
        changes constitutes your binding acceptance of such changes. For any
        material changes to the Terms, Unimath will make reasonable effort
        to provide notice to you of such amended Terms, such as by an email
        notification to the address associated with your account or by posting a
        notice on the Services, and such amended terms will be effective against
        you on the earlier of (i) your actual notice of such changes and (ii)
        thirty days after Unimath makes reasonable attempt to provide you
        such notice. However, changes addressing new functions for a service or
        changes made for legal reasons will be effective immediately. If you do
        not agree to the modified Terms, you must discontinue your use of the
        Services. Disputes arising under these Terms will be resolved in
        accordance with the version of the Terms in place at the time the
        dispute arose.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>4.2 School Accounts:</span> The following
        provisions apply to School Accounts in addition to the provisions set
        forth in Section 4.1 above. If a change with respect to how personal
        information contained in education records is used or shared has a
        material adverse impact on Student Users or an Institution, and the
        Institution does not agree to the change, the Institution must notify
        Unimath within thirty days of receiving the notice of change as
        described under the "Miscellaneous - Notices" below. If Unimath is
        notified as required, then the School Accounts held by that Institution
        will remain governed by the Terms in effect immediately prior to the
        change until the end of the end of the then current term of the
        Institution's written service agreement with Unimath, or, in the
        absence of such an agreement, the end of the current school term. If the
        Services are renewed or continued after such time, they will be renewed
        or continued under Unimath's then-current Terms.
      </Typography>
    </>
  );
}

export default Section;
