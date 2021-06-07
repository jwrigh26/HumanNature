import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Divider from 'components/Divider';

import Intro from './intro';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';
import Section10 from './Section10';
import Section11 from './Section11';
import Section12 from './Section12';
import Section13 from './Section13';
import Section14 from './Section14';
import Section15 from './Section15';
import TableOfContents from './TableOfContents.js';

const useStyles = makeStyles((theme) => ({
  body1: {
    marginBottom: theme.spacing(2),
  },
  body2: {
    marginBottom: theme.spacing(2),
  },
  bold: {
    fontWeight: 700,
  },
  divider: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  indent: {
    marginLeft: theme.spacing(2),
  },
  marginTop: {
    marginTop: theme.spacing(2),
  },
  listStyleAlpha: {
    listStyleType: 'lower-alpha',
    '& li': {
      marginBottom: theme.spacing(2),
    }
  },
  listStyleLowerRoman: {
    listStyleType: 'lower-roman',
    '& li': {
      marginBottom: theme.spacing(2),
    }
  },
  listStyleCircle: {
    listStyleType: 'circle',
    '& li': {
      marginBottom: theme.spacing(2),
    }
  },
}));

function Terms() {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <>
      <Intro classes={classes} />
      <Divider className={classes.divider} />
      <TableOfContents classes={classes} />
      <Divider className={classes.divider} />
      <Section1 classes={classes} />
      {/*<Section2 classes={classes} />*/}
      {/*<Section3 classes={classes} />*/}
      {/*<Section4 classes={classes} />*/}
      {/*<Section5 classes={classes} />*/}
      {/*<Section6 classes={classes} />*/}
      {/*<Section7 classes={classes} />*/}
      {/*<Section8 classes={classes} />*/}
      {/*<Section9 classes={classes} />*/}
      {/*<Section10 classes={classes} />*/}
      {/*<Section11 classes={classes} />*/}
      {/*<Section12 classes={classes} />*/}
      {/*<Section13 classes={classes} />*/}
      {/*<Section14 classes={classes} />*/}
      {/*<Section15 classes={classes} />*/}
    </>
  );
}

export default Terms;
