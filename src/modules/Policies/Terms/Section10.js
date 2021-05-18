import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Link from '../fragments/Link.js';

Section.propTypes = {
  classes: PropTypes.any,
};

function Section({ classes }) {
  return (
    <>
      <Typography id={'10'} variant="h5" component="h3" gutterBottom>
        10. Term and Termination
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>10.1 Term:</span> These Terms shall
        remain in full force and effect while you use the Services unless your
        account is terminated as provided in these Terms, in which case you no
        longer have the right to use the Services.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>10.2 Termination by Unimath:</span> Khan
        Academy, in its sole discretion, for any or no reason, and without
        penalty, may suspend or terminate any account (or any part thereof) you
        may have with Unimath or your use of the Services and remove and discard
        all or any part of your account, User profile, and User Content, at any
        time. Unimath may also in its sole discretion and at any time
        discontinue providing access to the Services, or any part thereof, with
        or without notice. You agree that any termination of your access to the
        Services or any account you may have, or portion thereof, may be
        affected without prior notice, and you agree that Unimath will not be
        liable to you or any third party for any such termination. Any suspected
        fraudulent, abusive or illegal activity may be referred to appropriate
        law enforcement authorities. These remedies are in addition to any other
        remedies Unimath may have at law or in equity. As discussed herein,
        Unimath does not permit copyright, trademarks, or other intellectual
        property infringing activities on the Services, and will terminate
        access to the Services, and remove all User Content or other content
        submitted, by any Users who are found to be repeat infringers.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>10.3 Termination by You:</span> Your only
        remedy with respect to any dissatisfaction with (i) the Services, (ii)
        any term of these Terms of Service, (iii) Guidelines, (iv) any policy or
        practice of Unimath in operating the Services, or (v) any content or
        information transmitted through the Services, is to terminate the Terms
        and your account. You may terminate these Terms at any time
        (prospectively only) by deleting your login account with the Services
        and discontinuing use of any and all parts of the Services.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>
          10.4 Termination of School Personnel, Child and Student Accounts:
        </span>{' '}
        Certain Users (e.g., Parent Users and School Personnel) may terminate
        these Terms with respect their account or to a Child or Student User
        account that was created by them or at their direction, as provided in
        this Section.
      </Typography>
      <ol className={classes.listStyleAlpha}>
        <li>
          <Typography variant="body2">
            Termination by School Personnel. School Personnel may terminate use
            of the Services individually and/or with respect to School Accounts
            created by such School Personnel at any time by contacting us at
            <Link blank to={'schoolpartnerships@khanacademy.org'}>
              schoolpartnerships@khanacademy.org
            </Link>
            , provided, however, that an Institution may require satisfaction of
            certain requirements before School Personnel can terminate accounts
            created for school use. Prior to termination of School Accounts at
            the direction of School Personnel, Unimath may invite Users, or
            parents or legal guardians of Students, to establish and maintain a
            personal account for purposes of retaining any content generated or
            provided and owned by Users under these Terms (including such User's
            learning activity). Any such Personal accounts will be established
            under Unimath's standard account opening process, including
            parent consent for Users under the age of 13.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            ermination by Parents. As a Parent User, if you created a Child
            account on the Services and have a Parent User account associated
            with the Child account, you can terminate your Child's login account
            through the account profile, or by contacting our support, although
            we may need to verify your identity prior to taking any action with
            respect to the account. Parents of Students who are using School
            Accounts created by or at the direction of your Child's teacher in
            school may first need to contact your child's school to request
            termination.
          </Typography>
        </li>
      </ol>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>
          10.5 Responsibility for Pre-Termination activity:
        </span>{' '}
        Termination of the Terms as to any User account will not limit Unimath's
        rights and remedies regarding any breach of these Terms occurring prior
        to such termination.
      </Typography>
    </>
  );
}

export default Section;
