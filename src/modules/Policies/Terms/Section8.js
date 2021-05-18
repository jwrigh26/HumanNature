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
      <Typography id={'8'} variant="h5" component="h3" gutterBottom>
        8. Prohibited Conduct
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        YOU AGREE NOT TO:
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>8.1 </span> use the Services for any
        commercial use or purpose unless expressly permitted by Unimath in
        writing, it being understood that the Services and related services are
        intended for personal, non-commercial use only;
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>8.2 </span> except as expressly permitted
        under Sections 5.3 and 7 of these Terms, rent, lease, loan, sell,
        resell, sublicense, distribute or otherwise transfer the licenses for
        any Services Materials;
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>8.3 </span> post, upload, or distribute
        any defamatory, libelous, or inaccurate User Content or other content;
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>8.4 </span> post, upload, or distribute
        any User Content or other content that is unlawful or that a reasonable
        person could deem to be objectionable, offensive, indecent,
        pornographic, harassing, threatening, embarrassing, distressing, vulgar,
        hateful, racially or ethnically offensive, or otherwise inappropriate;
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>8.5 </span> use the Services in any
        manner that is harmful to minors, or in any manner that violates
        Unimath's{' '}
        <Link
          to={
            'https://khanacademy.zendesk.com/hc/en-us/articles/115002941867-What-are-Khan-Academy-s-Community-Guidelines-'
          }
          blank
        >
          Community Guidelines
        </Link>
        ;
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>8.6 </span> impersonate any person or
        entity, falsely claim an affiliation with any person or entity, or
        access the Services accounts of others without permission, or perform
        any other fraudulent activity;
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>8.7 </span> delete the copyright or other
        proprietary rights notices on the Services or on any Licensed
        Educational Content, Licensed Educational Code, or User Content;
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>8.8 </span> assert, or authorize, assist,
        or encourage any third party to assert, against Unimath or any of
        its affiliates or licensors any patent infringement or other
        intellectual property infringement claim regarding any Licensed
        Educational Content, Licensed Educational Code, or User Content you have
        used, submitted, or otherwise made available on or through the Services;
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>8.9 </span> make unsolicited offers,
        advertisements, proposals, or send junk mail or spam to other Users of
        the Services (including, but not limited to, unsolicited advertising,
        promotional materials, or other solicitation material, bulk mailing of
        commercial advertising, chain mail, informational announcements, charity
        requests, and petitions for signatures);
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>8.10 </span> use the Services for any
        illegal purpose, or in violation of any local, state, national, or
        international law, including, without limitation, laws governing
        intellectual property and other proprietary rights, and data protection
        and privacy;
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>8.11 </span> efame, harass, abuse,
        threaten or defraud Users of the Services, or collect, or attempt to
        collect, personal information about Users or third parties without their
        consent;
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>8.12 </span> remove, circumvent, disable,
        damage or otherwise interfere with security-related features of the
        Services, Licensed Educational Content, Licensed Educational Code, or
        User Content, features that prevent or restrict use or copying of any
        content accessible through the Services, or features that enforce
        limitations on the use of the Services, Licensed Educational Content,
        Licensed Educational Code, or User Content;
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>8.13 </span> reverse engineer, decompile,
        disassemble or otherwise attempt to discover the source code of the
        Services or any part thereof, except and only to the extent that such
        activity is expressly permitted by applicable law notwithstanding this
        limitation;
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>8.14 </span> modify, adapt, translate or
        create derivative works based upon the Services or any part thereof,
        except and only to the extent expressly permitted by Unimath herein
        or to the extent the foregoing restriction is expressly prohibited by
        applicable law; or
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>8.15 </span> intentionally interfere with
        or damage operation of the Services or any user's enjoyment of it, by
        any means, including without limitation by participation in any
        denial-of-service type attacks or by uploading or otherwise
        disseminating viruses, adware, spyware, worms, or other malicious code.
      </Typography>
    </>
  );
}

export default Section;
