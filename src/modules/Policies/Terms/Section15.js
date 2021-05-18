import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Link from '../fragments/Link.js';

Section.propTypes = {
  classes: PropTypes.any,
};

function Section({ classes }) {
  return (
    <>
      <Typography id={'15'} variant="h5" component="h3" gutterBottom>
        15. Miscellaneous (Including Dispute Resolution and Arbitration)
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>15.1 Notice:</span>
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>15.2 Waiver:</span>
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>15.3 Governing Law:</span>
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>
          15.4 Dispute Resolution and Arbitration:
        </span>{' '}
        PLEASE READ THIS SECTION CAREFULLY BECAUSE IT AFFECTS YOUR RIGHTS. BY
        AGREEING TO BINDING ARBITRATION, YOU WAIVE YOUR RIGHT TO LITIGATE
        DISPUTES THROUGH A COURT AND TO HAVE A JUDGE OR JURY DECIDE YOUR CASE.
      </Typography>
      <ol className={classes.listStyleAlpha}>
        <li>
          <Typography
            variant="body2"
            classes={{ body2: classnames(classes.body2, classes.indent) }}
          >
            Generally. In order to expedite and control the cost of disputes,
            Unimath and you agree that any legal or equitable claim,
            dispute, action or proceeding arising from or related to your use of
            the Services or these Terms ("
            <span className={classes.bold}>Dispute</span>") will be resolved as
            follows to the fullest extent permitted by law:
          </Typography>
        </li>
        <li>
          <Typography
            variant="body2"
            classes={{ body2: classnames(classes.body2, classes.indent) }}
          >
            Notice of Dispute. In the event of a Dispute, you or Unimath
            must give the other a written statement that sets forth the name,
            address, and contact information of the party giving it, the facts
            giving rise to the Dispute, and a proposed solution (a "
            <span className={classes.bold}>Notice of Dispute</span>"). You must
            send any Notice of Dispute by first class U.S. Mail to Unimath
            at P.O. Box 1630, Mountain View, CA 94042 and also via e-mail to{' '}
            <Link to={'notices@unimath.app'} blank>
              notices@unimath.app
            </Link>
            . Unimath will send any Notice of Dispute to you by first class
            U.S. Mail to your address if Unimath has it, or otherwise to
            your e-mail address. You and Unimath will attempt in good faith
            to resolve any Dispute through informal negotiation within sixty
            (60) days from the date the Notice of Dispute is sent. After sixty
            (60) days, you or Unimath may commence arbitration.
          </Typography>
        </li>
        <li>
          <Typography
            variant="body2"
            classes={{ body2: classnames(classes.body2, classes.indent) }}
          >
            Binding Arbitration. Any Dispute which has not been resolved by
            negotiation as provided herein within sixty (60) days or such time
            period as you and Unimath may otherwise agree, shall be finally
            resolved by binding arbitration as described in this Section 15.4.
            You are giving up the right to litigate (or participate in as a
            party or class member) all Disputes in court before a judge or jury.
            Instead, all Disputes will be resolved before a neutral arbitrator,
            whose decision will be final except for a limited right of appeal
            under the Federal Arbitration Act. The place of arbitration shall be
            Santa Clara County, California. Any court with jurisdiction over the
            parties may enforce the arbitrator's award.
          </Typography>
        </li>
        <li>
          <Typography
            variant="body2"
            classes={{ body2: classnames(classes.body2, classes.indent) }}
          >
            Class Action Waiver. Any proceedings to resolve or litigate any
            Dispute in any forum will be conducted solely on an individual
            basis. Neither you nor Unimath will seek to have any Dispute
            heard as a class action or in any other proceeding in which either
            party acts or proposes to act in a representative capacity. No
            arbitration or proceeding will be combined with another without the
            prior written consent of all parties to all affected arbitrations or
            proceedings.
          </Typography>
        </li>
        <li>
          <Typography
            variant="body2"
            classes={{ body2: classnames(classes.body2, classes.indent) }}
          >
            Arbitration Procedures. Any arbitration will be conducted by JAMS
            under the JAMS Comprehensive Arbitration Rules and Procedures ("
            <span className={classes.bold}>JAMS Rules</span>") in effect at the
            time the Dispute is filed. You may request a telephonic or in-person
            hearing by following the JAMS Rules. In a dispute involving $10,000
            or less, any hearing will be telephonic unless the arbitrator finds
            good cause to hold an in-person hearing instead. To the extent the
            forum provided by JAMS is unavailable, Unimath and you agree to
            select a mutually agreeable alternative dispute resolution service
            and that such alternative dispute resolution service shall apply the
            JAMS Rules. The arbitrator may award the same damages to you
            individually as a court could. The arbitrator may award declaratory
            or injunctive relief to you only individually, and only to the
            extent required to satisfy your individual claim.
          </Typography>
        </li>
        <li>
          <Typography
            variant="body2"
            classes={{ body2: classnames(classes.body2, classes.indent) }}
          >
            Arbitration Fees. Whoever files the arbitration will pay the initial
            filing fee. If Unimath files, then Unimath will pay; if
            you file, then you will pay unless you get a fee waiver under the
            applicable arbitration rules. Each party will bear the expense of
            that party's attorneys, experts, and witnesses, and other expenses,
            regardless of which party prevails, but a party may recover any or
            all expenses from another party if the arbitrator, applying
            applicable law, so determines.
          </Typography>
        </li>
        <li>
          <Typography
            variant="body2"
            classes={{ body2: classnames(classes.body2, classes.indent) }}
          >
            Filing Period. To the extent permitted by law, any Dispute under
            these Terms must be filed within one (1) year in an arbitration
            proceeding. The one-year period begins when the events giving rise
            to the Dispute first occur. If a Dispute is not filed within one
            year, it is permanently barred.
          </Typography>
        </li>
        <li>
          <Typography
            variant="body2"
            classes={{ body2: classnames(classes.body2, classes.indent) }}
          >
            Venue. In the event that any Dispute cannot be resolved by binding
            arbitration in accordance with this Section 15.4, you agree that
            such Dispute will be filed only in the state or federal courts in
            and for Santa Clara County, California, and each of you and Khan
            Academy hereby consent and submit to the personal and exclusive
            jurisdiction of such courts for the purpose of litigating any such
            action. Notwithstanding this, Unimath shall still be allowed to
            apply for injunctive or other equitable relief to protect or enforce
            its intellectual property rights in any court of competent
            jurisdiction.
          </Typography>
        </li>
      </ol>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>15.5 Severability:</span> If any
        provision of the Terms or any Guidelines is held to be unlawful, void,
        or for any reason unenforceable, then that provision will be limited or
        eliminated from the Terms to the minimum extent necessary and will not
        affect the validity and enforceability of any remaining provisions.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>15.6 Assignment:</span> The Terms and
        related Guidelines, and any rights and licenses granted hereunder, may
        not be transferred or assigned by you without Unimath's prior
        written consent, but may be assigned by Unimath without consent or
        any restriction. Any assignment attempted to be made in violation of the
        Terms shall be null and void.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>15.7 Survival:</span> Upon termination of
        the Terms, any provision which, by its nature or express terms should
        survive, will survive such termination or expiration, including, but not
        limited to, Sections 2, 4 through 6, 7.1, 7.4, 7.5, and 8 through 15.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>15.8 Headings:</span> The heading
        references herein are for convenience purposes only, do not constitute a
        part of the Terms, and will not be deemed to limit or affect any of the
        provisions hereof.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>15.9 Entire Agreement:</span> The Terms,
        the Privacy Policy and Guidelines constitute the entire agreement
        between you and Unimath relating to the subject matter herein and
        will not be modified except in writing, signed by both parties, or by a
        change to the Terms, Privacy Policy or Guidelines made by Unimath
        as set forth in Section 4 above.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>15.10 Disclosures:</span> The Services
        are hosted in the United States, and the services provided hereunder are
        offered by Unimath: PO Box TBD;{' '}
        <Link to={''} blank>
          notices@unimath.app
        </Link>
        .
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>15.11 Notice Regarding Apple:</span> You
        acknowledge that these Terms are between you and Unimath only, not
        with Apple, and Apple is not responsible for the Services and the
        content thereof. Apple has no obligation whatsoever to furnish any
        maintenance and support services with respect to the Services. In the
        event of any failure of the Services to conform to any applicable
        warranty, then you may notify Apple and Apple will refund the purchase
        price for the applicable mobile application to you, if any; and, to the
        maximum extent permitted by applicable law, Apple has no other warranty
        obligation whatsoever with respect to the Services. Apple is not
        responsible for addressing any claims by you or any third party relating
        to the Services or your possession and/or use of the Services,
        including, but not limited to: (i) product liability claims; (ii) any
        claim that the Services fail to conform to any applicable legal or
        regulatory requirement; and (iii) claims arising under consumer
        protection or similar legislation. Apple is not responsible for the
        investigation, defense, settlement and discharge of any third-party
        claim that the Services or your possession and use of the Services
        infringes that third party's intellectual property rights. You agree to
        comply with any applicable third-party terms, when using the Services.
        Apple, and Apple's subsidiaries, are third-party beneficiaries of these
        Terms, and upon your acceptance of the Terms, Apple will have the right
        (and will be deemed to have accepted the right) to enforce the Terms
        against you as a third party beneficiary of the Terms. You hereby
        represent and warrant that (i) you are not located in a country that is
        subject to a U.S. Government embargo, or that has been designated by the
        U.S. Government as a "terrorist supporting" country; and (ii) you are
        not listed on any U.S. Government list of prohibited or restricted
        parties.
      </Typography>
    </>
  );
}

export default Section;
