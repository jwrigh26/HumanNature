import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Link from '../fragments/Link.js';

TableOfContents.propTypes = {
  classes: PropTypes.any,
};

function TableOfContents({classes}) {
  return (
    <>
      <Typography variant="h4" component="h2">
        Table of Contents:
      </Typography>
      <ol>
        <li>
          <Link to={'#1'}>Eligibility; Accounts</Link>
        </li>
        <li>
          <Link to={'#2'}>Privacy Policy</Link>
        </li>
        <li>
          <Link to={'#3'}>API Terms; Other Guidelines</Link>
        </li>
        <li>
          <Link to={'#4'}>Modification of the Terms</Link>
        </li>
        <li>
          <Link to={'#5'}>User Content License Grant</Link>
        </li>
        <li>
          <Link to={'#6'}>Digital Millennium Copyright Act</Link>
        </li>
        <li>
          <Link to={'#7'}>Proprietary Materials; Licenses</Link>
        </li>
        <li>
          <Link to={'#8'}>Prohibited Conduct</Link>
        </li>
        <li>
          <Link to={'#9'}>Third-Party Sites, Products and Services; Links</Link>
        </li>
        <li>
          <Link to={'#10'}>Term and Termination</Link>
        </li>
        <li>
          <Link to={'#11'}>Representations and Warranties</Link>
        </li>
        <li>
          <Link to={'#12'}>Indemnification</Link>
        </li>
        <li>
          <Link to={'#13'}>Disclaimers; No Warranties</Link>
        </li>
        <li>
          <Link to={'#14'}>Limitation of Liability and Damages</Link>
        </li>
        <li>
          <Link to={'#15'}>
            Miscellaneous (including Dispute Resolution and Arbitration)
          </Link>
        </li>
      </ol>
    </>
  );
}

export default TableOfContents;