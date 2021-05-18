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
      <Typography id={'13'} variant="h5" component="h3" gutterBottom>
        13. Disclaimers; No Warranties
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>13.1 No Warranties:</span> THE WEBSITE,
        AND ALL DATA, INFORMATION, SOFTWARE, WEBSITE MATERIALS, CONTENT (WHETHER
        OWNED OR LICENSED), USER CONTENT, REFERENCE SITES, SERVICES, OR
        APPLICATIONS MADE AVAILABLE IN CONJUNCTION WITH OR THROUGH THE WEBSITE
        (THE "<span className={classes.bold}>UNIMATH OFFERINGS</span>"), ARE
        PROVIDED ON AN "AS IS," "AS AVAILABLE," AND "WITH ALL FAULTS" BASIS. TO
        THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, THE KHAN
        ACADEMY PARTIES DISCLAIM ANY AND ALL WARRANTIES AND CONDITIONS OF ANY
        KIND, WHETHER STATUTORY, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED
        TO, ALL IMPLIED WARRANTIES OF MERCHANTABILITY, QUALITY, AVAILABILITY,
        QUIET ENJOYMENT, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
        NON-INFRINGEMENT. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN,
        OBTAINED BY YOU FROM UNIMATH OR THROUGH THE WEBSITE WILL CREATE ANY
        WARRANTY NOT EXPRESSLY STATED HEREIN.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>13.2 Content:</span> UNIMATH, AND THE
        UNIMATH PARTIES, DO NOT WARRANT THAT THE WEBSITE OR ANY DATA, USER
        CONTENT, FUNCTIONS, OR ANY OTHER INFORMATION OFFERED ON OR THROUGH THE
        WEBSITE WILL BE UNINTERRUPTED, OR FREE OF ERRORS, VIRUSES OR OTHER
        HARMFUL COMPONENTS, AND DO NOT WARRANT THAT ANY OF THE FOREGOING WILL BE
        CORRECTED. UNIMATH AND THE UNIMATH PARTIES MAKE NO
        REPRESENTATION OR WARRANTY THAT (1) THE UNIMATH OFFERINGS WILL (A)
        MEET YOUR REQUIREMENTS OR EXPECTATIONS, OR BE TO YOUR LIKING, OR (B)
        WILL BE TIMELY, SECURE, ACCURATE, FREE FROM ERRORS OR LOSS, OR
        UNINTERRUPTED, (2) THAT THE SERVICES ARE FREE FROM VIRUSES OR OTHER
        HARMFUL COMPONENTS, OR (3) THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED.
        SOME FEATURES MAY BE NEW OR EXPERIMENTAL AND MAY NOT HAVE BEEN TESTED IN
        ANY MANNER.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>13.3 Harm to Your Computer:</span> YOU
        UNDERSTAND AND AGREE THAT YOUR USE, ACCESS, DOWNLOAD, OR OTHERWISE
        OBTAINING OF CONTENT, WEBSITE MATERIALS, SOFTWARE, OR DATA THROUGH THE
        WEBSITE (INCLUDING THROUGH ANY API'S) IS AT YOUR OWN DISCRETION AND
        RISK, AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR
        PROPERTY (INCLUDING YOUR COMPUTER SYSTEM) OR LOSS OF DATA THAT RESULTS
        THEREFROM.
      </Typography>
      <Typography
        variant="body2"
        classes={{ body2: classnames(classes.body2, classes.indent) }}
      >
        <span className={classes.bold}>
          13.3 Limitations by Applicable Law:
        </span>{' '}
        OME STATES OR OTHER JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED
        WARRANTIES, SO THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU. YOU MAY ALSO
        HAVE OTHER RIGHTS THAT VARY FROM STATE TO STATE AND JURISDICTION TO
        JURISDICTION.
      </Typography>
    </>
  );
}

export default Section;
