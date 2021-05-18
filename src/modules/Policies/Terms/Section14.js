import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';

Section.propTypes = {
  classes: PropTypes.any,
};

function Section({ classes }) {
  return (
    <>
      <Typography id={'14'} variant="h5" component="h3" gutterBottom>
        14. Limitation of Liability and Damages
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>14.1 Limitation of Liability:</span>{' '}
        UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, WILL
        UNIMATH OR THE UNIMATH PARTIES BE LIABLE FOR ANY SPECIAL,
        INDIRECT, INCIDENTAL, CONSEQUENTIAL, PUNITIVE, RELIANCE, OR EXEMPLARY
        DAMAGES (INCLUDING WITHOUT LIMITATION DAMAGES ARISING FROM ANY
        UNSUCCESSFUL COURT ACTION OR LEGAL DISPUTE, LOST BUSINESS, LOST REVENUES
        OR PROFITS, LOSS OF DATA, OR ANY OTHER PECUNIARY OR NON-PECUNIARY LOSS
        OR DAMAGE OF ANY NATURE WHATSOEVER) EVEN IF UNIMATH OR A UNIMATH
        PARTIES HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES ARISING OUT
        OF OR RELATING (i) TO THE TERMS; (ii) YOUR USE OF (OR INABILITY TO USE)
        THE WEBSITE OR THE UNIMATH OFFERINGS, OR (iii) ANY OTHER
        INTERACTIONS WITH UNIMATH OR ANY THIRD-PARTY THROUGH OR IN
        CONNECTION WITH THE UNIMATH OFFERINGS, INCLUDING OTHER USERS,.
        APPLICABLE LAW MAY NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY OR
        INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR
        EXCLUSION MAY NOT APPLY TO YOU. IN SUCH CASES, UNIMATH'S LIABILITY
        WILL BE LIMITED TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>14.2 Content:</span> IN NO EVENT WILL
        UNIMATH'S OR THE UNIMATH PARTIES' TOTAL LIABILITY TO YOU FOR ALL
        DAMAGES, LOSSES, AND CAUSES OF ACTION ARISING OUT OF OR RELATING TO THE
        TERMS OR YOUR USE OF THE WEBSITE OR YOUR INTERACTION WITH OTHER WEBSITE
        USERS (WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), WARRANTY, OR
        OTHERWISE), EXCEED THE AMOUNT PAID BY YOU TO UNIMATH, IF ANY, FOR
        ACCESSING THE WEBSITE DURING THE TWELVE MONTHS IMMEDIATELY PRECEDING THE
        DATE OF THE CLAIM OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>14.3 Basis of the Bargain:</span> U
        ACKNOWLEDGE AND AGREE THAT UNIMATH HAS OFFERED THE WEBSITE AND ENTERED
        INTO THE TERMS IN RELIANCE UPON THE DISCLAIMERS AND THE LIMITATIONS OF
        LIABILITY SET FORTH HEREIN, THAT THE DISCLAIMERS AND THE LIMITATIONS OF
        LIABILITY SET FORTH HEREIN REFLECT A REASONABLE AND FAIR ALLOCATION OF
        RISK BETWEEN YOU AND UNIMATH, AND THAT THE DISCLAIMERS AND THE
        LIMITATIONS OF LIABILITY SET FORTH HEREIN FORM AN ESSENTIAL BASIS OF THE
        BARGAIN BETWEEN YOU AND UNIMATH. UNIMATH WOULD NOT BE ABLE TO PROVIDE
        THE WEBSITE TO YOU ON AN ECONOMICALLY REASONABLE BASIS WITHOUT THESE
        LIMITATIONS.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>
          14.4 User Interactions and Release:
        </span>
      </Typography>
      <ol className={classes.listStyleAlpha}>
        <li>
          <Typography variant="body2">
            <span className={classes.bold}>User Disputes:</span> Unimath is not
            responsible for the actions, content, information or data of other
            third parties, including other Users. You are solely responsible for
            your interactions with other users of the Services, and any other
            parties with whom you interact through the Service. You should make
            whatever investigation you feel necessary or appropriate before
            proceeding with any online or offline interaction with any other
            person. We reserve the right, but have no obligation, to become
            involved in any way with these disputes.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <span className={classes.bold}>Release:</span> If you have a dispute
            with one or more Users, you release us (and the Unimath Parties)
            from all claims, demands and damages (actual and consequential) of
            every kind and nature, known and unknown, arising out of or in any
            way connected with such disputes, including damages for loss of
            profits, goodwill, use, privacy or data. If you are a California
            resident, you waive your rights under California Civil Code §1542,
            which says: "A general release does not extend to claims which the
            creditor does not know or suspect to exist in his or her favor at
            the time of executing the release, which if known by him or her must
            have materially affected his settlement with the debtor." And, if
            you are not a California resident, you waive your rights under any
            applicable statutes of a similar effect, to the fullest extent
            permissible under applicable law.
          </Typography>
        </li>
      </ol>
    </>
  );
}

export default Section;
