import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

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
import TableOfContents from './TableOfContents.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    position: 'relative',
    width: '100%',
    marginTop: theme.spacing(4),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  },
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
    <div className={classes.root}>
      <Intro classes={classes} />
      <Divider className={classes.divider} />
      <TableOfContents classes={classes} />
      <Divider className={classes.divider} />
      <Section1 classes={classes} />
      <Section2 classes={classes} />
      <Section3 classes={classes} />
      <Section4 classes={classes} />
      <Section5 classes={classes} />
      <Section6 classes={classes} />
    </div>
  );
}

export default Terms;
