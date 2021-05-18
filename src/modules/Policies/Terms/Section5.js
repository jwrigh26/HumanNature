import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';

import Link from '../fragments/Link';

Section.propTypes = {
  classes: PropTypes.any,
};

function Section({ classes }) {
  return (
    <>
      <Typography id={'5'} variant="h5" component="h3" gutterBottom>
        5. User Content License Grant
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>5.1 User Content and Ownership:</span>{' '}
        Unimath may permit (a) the posting and/or publishing by you and
        other Users of notes, questions, comments, ratings, reviews, images,
        videos and other audio-visual materials and communications
        (collectively, "User Postings") and (b) the posting, creation, or
        modification by you and other users of computer code (including source
        code and object code) ("User Code") (User Postings and User Code,
        collectively, "User Content"). You understand that whether or not such
        User Content is published, Unimath does not guarantee any
        confidentiality with respect to any submissions. Consistent with
        Applicable Law, as between Unimath and you, you retain all
        ownership rights you have in any User Content you post or publish to the
        Services, and Unimath does not claim any ownership rights in or to
        such User Content. You acknowledge that are solely responsible for your
        User Content and the consequences of posting, creating, or publishing
        such User Content.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>5.2 License Grant to Unimath:</span> By
        posting, submitting or distributing User Content on or through the
        Services, you hereby grant to Unimath a worldwide, non-exclusive,
        transferable, assignable, fully paid-up, royalty-free right and license
        to (a) host, transfer, display, perform, reproduce, distribute, prepare
        derivative works of, use, make, have made, import, and otherwise exploit
        your User Content, in whole or in part, in any media formats and through
        any media channels (now known or hereafter developed, to the extent
        consistent with applicable law and Unimath's Privacy Policy). Such
        license is perpetual and irrevocable, except to the extent required to
        comply with Applicable Privacy Law relating to ownership and control of
        your personal information, including education records. With respect to
        School Accounts, consistent with Applicable Privacy Law, as between Khan
        Academy and you, you (or your school, as applicable) retain all
        ownership rights you have in any User Content to the extent such content
        is an education record.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>5.3 License Grant to Users:</span>{' '}
      </Typography>
      <ol className={classes.listStyleAlpha}>
        <li>
          <Typography variant="body2">
            User Postings. By posting, submitting or distributing User Postings
            through the Services, you hereby grant to each User of the Services
            a non-exclusive license to access and use your User Postings in any
            manner permitted or made available by Unimath on or through the
            Services.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            User Code. By posting, submitting or distributing User Code through
            the Services, you hereby grant to each User of the Services a
            non-exclusive license to access, use, reproduce, and distribute your
            User Code as fully permitted under, and in accordance with the terms
            of, the MIT license (currently available at:{' '}
            <Link to={'http://opensource.org/licenses/mit-license.php'} blank>
              the opensource license webpage
            </Link>
            ) (the "MIT License").
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Downloadable Content. The Services may permit you to download mobile
            applications or certain digital educational content ("
            <span className={classes.bold}>Downloadable Content</span>").
            Subject to your complete and ongoing compliance with all the terms
            and conditions set forth herein, Unimath grants you, a limited,
            non-exclusive, non-transferable, non-sublicensable, revocable
            license to download, install, view and use the Downloadable Content,
            in object code form, on devices owned or controlled by you, solely
            for your personal, non-commercial purposes. You agree not to (i)
            modify or create derivative works of the Downloadable Content (ii)
            remove, disable, circumvent or otherwise create or implement any
            workaround to any copy protection, rights management, technical
            limitations or security features in or protecting the Downloadable
            Content, and (iii) remove any copyright and other proprietary
            notices on the Downloadable Content and all copies thereof.
          </Typography>
        </li>
      </ol>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>5.4 Access to Your User Content:</span>{' '}
        Unimath may permit Users to share their User Content with a select
        group of other Users, or make their User Content public for all (even
        non-Services users) to view. You acknowledge and agree that, although
        Unimath may provide certain features intended to allow you to
        restrict some User Content you create from others, Unimath does not
        guarantee that such User Content will never be accessible by others. In
        the event of unauthorized access, Unimath will use reasonable
        efforts to notify you pursuant to Section 15.1 below. UNIMATH
        HEREBY DISCLAIMS ANY AND ALL LIABILITY WITH RESPECT TO ANY UNAUTHORIZED
        ACCESS TO ANY RESTRICTED USER CONTENT.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>5.4 User Content Disclaimer:</span> You
        understand that when using the Services you will be exposed to User
        Content from a variety of sources, and that Unimath is not
        responsible for the accuracy, usefulness, or intellectual property
        rights of or relating to such User Content. You further understand and
        acknowledge that you may be exposed to User Content that is inaccurate,
        offensive, indecent or objectionable, and you agree to waive, and hereby
        do waive, any legal or equitable rights or remedies you have or may have
        against Unimath with respect thereto. Unimath does not endorse
        any User Content or any opinion, recommendation or advice expressed
        therein, and Unimath expressly disclaims any and all liability in
        connection with User Content.
      </Typography>
    </>
  );
}

export default Section;
