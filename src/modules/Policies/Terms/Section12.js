import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

Section.propTypes = {
  classes: PropTypes.any,
};

function Section({ classes }) {
  return (
    <>
      <Typography id={'12'} variant="h5" component="h3" gutterBottom>
        12. Indemnification
      </Typography>
      <Typography variant="body2" classes={{ body2: classes.body2 }}>
        You agree, to the extent permissible under your state's laws, to
        indemnify, defend, and hold harmless Unimath, and its parent,
        successors, affiliated companies, contractors, officers, directors,
        employees, agents and its third-party suppliers, licensors, and partners
        ("<span className={classes.bold}>Unimath Parties</span>") from and
        against all losses, damages, liabilities, demands, judgments,
        settlements, costs and expenses of any kind (including legal fees and
        expenses), from any claim or demand made by any third-party relating to
        or arising out of (i) your access to, use or misuse of the Services;
        (ii) your breach or alleged breach of these Terms, or any violation of
        the Terms; (iii) any breach of the representations, warranties, and
        covenants made herein, whether by you or by any Child User or School
        User whose account you have approved as a Parent User or School
        Personnel; (iv) your failure to comply with Applicable Laws (including
        any failure to obtain or provide any necessary consent or notice); (v)
        the infringement by you or any third-party using your account of any
        intellectual property, privacy, or other right of any person or entity,
        including in connection with your User Content, or (vi) your breach or
        alleged breach of any interaction, agreement, or policy between you and
        any other Users. Unimath reserves the right, at your expense, to
        assume the exclusive defense and control of any matter for which you are
        required to indemnify Unimath, and you agree to cooperate with Khan
        Academy's defense of these claims. You agree not to settle any such
        matter without the prior written consent of Unimath. Unimath
        will use reasonable efforts to notify you of any such claim, action, or
        proceeding upon becoming aware of it.
      </Typography>
    </>
  );
}

export default Section;
