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
      <Typography id={'7'} variant="h5" component="h3" gutterBottom>
        7. Proprietary Materials; Licenses
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>7.1 Proprietary Materials:</span> The
        Services are owned and operated by Unimath. The visual interfaces,
        graphics, design, compilation, information, computer code (including
        source code or object code), software, services, content, educational
        videos and exercises, and all other elements of the Services (the
        "Services Materials") are protected by United States and international
        copyright, patent, and trademark laws, international conventions, and
        other applicable laws governing intellectual property and proprietary
        rights. Except for any User Content provided and owned by Users and
        except as otherwise set forth in this Section 7, all Services Materials,
        and all trademarks, service marks, and trade names, contained on or
        available through the Services are owned by or licensed to Unimath,
        and Unimath reserves all rights therein and thereto not expressly
        granted by these Terms.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>7.2 Licensed Educational Content:</span>{' '}
        Unimath may make available on the Services certain educational
        videos, exercises, and related supplementary materials that are owned by
        Unimath or its third-party licensors (the "Licensed Educational
        Content"). Unimath grants to you a non-exclusive, non-transferable
        right to access and use the Licensed Educational Content as made
        available on the Services by Unimath solely for your personal,
        non-commercial purposes. Unless expressly indicated on the Services that
        a particular item of Licensed Educational Content is made available to
        Users under alternate license terms, you may not download, distribute,
        sell, lease, modify, or otherwise provide access to the Licensed
        Educational Content to any third party.
      </Typography>
      <ol className={classes.listStyleAlpha}>
        <li>
          <Typography variant="body2">
            Alternate Licenses. In certain cases, Unimath or its licensors
            may make available Licensed Educational Content under alternate
            license terms, such as a variant of the Creative Commons License (as
            defined below) (each, an "
            <span className={classes.bold}>Alternate License</span>"). Where
            expressly indicated as such on the Services, and subject to the
            terms and conditions of these Terms, the applicable Licensed
            Educational Content is licensed to you under the terms of the
            Alternate License. By using, downloading, or otherwise accessing
            such Licensed Educational Content, you agree to comply fully with
            all the terms and conditions of such Alternate License.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Creative Commons License. Unless expressly otherwise identified on
            the Services with respect to a particular item of Licensed
            Educational Content, any reference to the "Creative Commons", "CC"
            or similarly-phrased license shall be deemed to be a reference to
            the Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United
            States License (available at{' '}
            <Link
              to={'http://creativecommons.org/licenses/by-nc-sa/3.0/us/'}
              blank
            >
              creativecommons.org/licenses/
            </Link>
            ) (the "
            <span className={classes.bold}>Creative Commons License</span>").
          </Typography>
        </li>
      </ol>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>7.3 Licensed Educational Code:</span>{' '}
        Unimath may make available, or allow Users to create and make
        available, on or through the Services certain educational, user-readable
        source code in connection with the "Computer Science" modules or
        exercises available on the Services (the "
        <span className={classes.bold}>Licensed Educational Code</span>").
        Unless otherwise indicated, all Licensed Educational Code is the
        property of Unimath or third-party licensors and, subject to the
        terms and conditions of these Terms, is licensed to you under the terms
        of the MIT License. By downloading or otherwise accessing such Licensed
        Educational Code, you agree to comply with all the terms of the MIT
        License.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>7.4 Non-Commercial Use:</span> The
        Licensed Educational Content and Licensed Educational Code are intended
        for personal, non-commercial use only. Without limiting the foregoing,
        and notwithstanding the terms of any Alternate License for such Licensed
        Educational Content, the Licensed Educational Content may not be used,
        distributed or otherwise exploited for any commercial purpose,
        commercial advantage or private monetary compensation, unless otherwise
        previously agreed in writing by Unimath.
      </Typography>
      <ol className={classes.listStyleAlpha}>
        <li>
          <Typography variant="body2">
            Impermissible Uses. Without limiting the generality of the
            foregoing, the following are types of uses that Unimath
            expressly defines as falling outside of "non-commercial" use:
          </Typography>
        </li>
        <ol className={classes.listStyleLowerRoman}>
          <li>
            <Typography variant="body2">
              the sale or rental of (1) any part of the Licensed Educational
              Content, (2) any derivative works based at least in part on the
              Licensed Educational Content, or (3) any collective work that
              includes any part of the Licensed Educational Content;
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              providing training, support, or editorial services that use or
              reference the Licensed Educational Content in exchange for a fee;
              and
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              the sale of advertisements, sponsorships, or promotions placed on
              the Licensed Educational Content, or any part thereof, or the sale
              of advertisements, sponsorships, or promotions on any website or
              blog containing any part of the Licensed Educational Material,
              including without limitation any "pop-up advertisements".
            </Typography>
          </li>
        </ol>
        <li>
          <Typography variant="body2">
            Use Characterization. Whether a particular use of the Licensed
            Educational Content is "non-commercial" depends on the use, not the
            user. Thus, a use of the Licensed Educational Content that does not
            require that users pay fees and that does not provide an entity with
            a commercial advantage is "non-commercial," even if this use is by a
            commercial entity. Conversely, any use that involves charging users
            in connection with their access to the Licensed Educational Content
            is not "non-commercial," even if this use is by a non-profit entity.
            As an example, a for-profit corporation's use of the Licensed
            Educational Content for internal professional development or
            training of employees is permitted, so long as the corporation
            charges no fees, directly or indirectly, for such use. Conversely,
            as another example, a non-profit entity's use of the Licensed
            Educational Content in connection with an fee-based training or
            educational program is NOT "non-commercial" and is not permitted.
          </Typography>
        </li>
      </ol>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>7.5 Crediting Unimath:</span> If you
        distribute, publicly perform or display, transmit, publish, or otherwise
        make available any Licensed Educational Content or any derivative works
        thereof, you must also provide the following notice prominently along
        with such Licensed Educational Content or derivative work thereof: "
        <span className={classes.bold}>
          All Unimath content is available for free at www.khanacademy.org
        </span>
        ".
      </Typography>
    </>
  );
}

export default Section;
