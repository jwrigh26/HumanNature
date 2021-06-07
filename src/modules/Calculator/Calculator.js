import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { appSelector } from 'store/appSlice';
import AppBar from 'components/AppBar/AppBar';
import ContentWrapper from 'components/ContentWrapper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  body1: {
    marginBottom: theme.spacing(2),
  },
  body2: {
    marginBottom: theme.spacing(2),
  },
}));

function Calculator() {
  const { navigation: { routes, tabs } } = useSelector(appSelector);
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <ContentWrapper divider>
      <AppBar name={'main'} tabs={tabs?.main}/>
        <Typography variant="h3" component="h1" gutterBottom>
          Unimath Home!!
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          This is a test
        </Typography>
        <Typography variant="body2" classes={{ body2: classes.body2 }}>
          Welcome, and thank you for your interest in Unimath, Inc., a
          501(c)(3) organization ("Unimath," "we," "us," or "our"), which
          operates the web site located at http://unimath.app (the "Website")
          and related application programming interfaces ("APIs"), mobile
          applications and online services, including, but not limited to, the
          Duck Duck Moose website and related applications, any Downloadable
          Content (as defined below), and any other products and services that
          Company may provide now or in the future (collectively, the "Services").
          The following Terms of Service are a legal contract between you ("you"
          and "your") and Unimath regarding your use of the Services.
          Visitors and users of the Services are referred to individually as
          "User" and collectively as "Users".
        </Typography>
        {/*<Typography variant="body2" classes={{ body2: classes.body2 }}>*/}
        {/*  PLEASE READ THE FOLLOWING TERMS OF SERVICE CAREFULLY. BY REGISTERING*/}
        {/*  FOR, ACCESSING, BROWSING, OR USING THE WEBSITE, YOU ACKNOWLEDGE THAT YOU*/}
        {/*  HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THE FOLLOWING TERMS AND*/}
        {/*  CONDITIONS, INCLUDING THE UNIMATH PRIVACY POLICY AND ANY ADDITIONAL*/}
        {/*  GUIDELINES (AS DEFINED BELOW) (COLLECTIVELY, THE "TERMS").*/}
        {/*</Typography>*/}
        {/*<Typography variant="body2" classes={{ body2: classes.body2 }}>*/}
        {/*  IF YOU ARE A PARENT OR GUARDIAN AND YOU PROVIDE CONSENT FOR YOUR CHILD TO*/}
        {/*  REGISTER WITH THE WEBSITE, YOU AGREE TO BE BOUND BY THESE TERMS OF*/}
        {/*  SERVICE IN RESPECT OF SUCH CHILD'S USE OF THE WEBSITE. IF YOU ARE SCHOOL*/}
        {/*  PERSONNEL (AS DEFINED BELOW) AND YOU REGISTER A SCHOOL USER (AS DEFINED*/}
        {/*  BELOW), YOU AGREE, ON BEHALF OF YOUR INSTITUTION, THAT THE SCHOOL USER*/}
        {/*  IS BOUND BY THE TERMS, UNLESS YOUR INSTITUTION HAS A SEPARATE WRITTEN*/}
        {/*  SERVICE AGREEMENT WITH UNIMATH THAT ACCEPTS THESE TERMS ON BEHALF*/}
        {/*  OF SCHOOL USERS.*/}
        {/*</Typography>*/}
        {/*<Typography variant="body2" classes={{ body2: classes.body2 }}>*/}
        {/*  PLEASE NOTE THAT THESE TERMS INCLUDE A BINDING ARBITRATION PROVISION,*/}
        {/*  INCLUDING A CLASS ACTION WAIVER. BY AGREEING TO BINDING ARBITRATION, TO*/}
        {/*  THE EXTENT PERMITTED UNDER APPLICABLE LAW, YOU WAIVE YOUR RIGHT TO*/}
        {/*  LITIGATE DISPUTES THROUGH A COURT AND TO HAVE A JUDGE OR JURY DECIDE*/}
        {/*  YOUR CASE.*/}
        {/*</Typography>*/}
        {/*<Typography variant="body2" classes={{ body2: classes.body2 }}>*/}
        {/*  IF YOU ARE A PARENT OR GUARDIAN AND YOU PROVIDE CONSENT FOR YOUR CHILD TO*/}
        {/*  REGISTER WITH THE WEBSITE, YOU AGREE TO BE BOUND BY THESE TERMS OF*/}
        {/*  SERVICE IN RESPECT OF SUCH CHILD'S USE OF THE WEBSITE. IF YOU ARE SCHOOL*/}
        {/*  PERSONNEL (AS DEFINED BELOW) AND YOU REGISTER A SCHOOL USER (AS DEFINED*/}
        {/*  BELOW), YOU AGREE, ON BEHALF OF YOUR INSTITUTION, THAT THE SCHOOL USER*/}
        {/*  IS BOUND BY THE TERMS, UNLESS YOUR INSTITUTION HAS A SEPARATE WRITTEN*/}
        {/*  SERVICE AGREEMENT WITH UNIMATH THAT ACCEPTS THESE TERMS ON BEHALF*/}
        {/*  OF SCHOOL USERS.*/}
        {/*</Typography>*/}
        {/*<Typography variant="body2" classes={{ body2: classes.body2 }}>*/}
        {/*  PLEASE NOTE THAT THESE TERMS INCLUDE A BINDING ARBITRATION PROVISION,*/}
        {/*  INCLUDING A CLASS ACTION WAIVER. BY AGREEING TO BINDING ARBITRATION, TO*/}
        {/*  THE EXTENT PERMITTED UNDER APPLICABLE LAW, YOU WAIVE YOUR RIGHT TO*/}
        {/*  LITIGATE DISPUTES THROUGH A COURT AND TO HAVE A JUDGE OR JURY DECIDE*/}
        {/*  YOUR CASE.*/}
        {/*</Typography>*/}
    </ContentWrapper>
  );
}

export default Calculator;
