import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import ContentDivider from 'components/ContentDivider';
import ContentWrapper from 'components/ContentWrapper.js';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from 'components/TextField.js';
import WrapperBox from 'components/WrapperBox';

import useContactFrom from 'hooks/useContactForm.js';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    minHeight: '280px',
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      maxWidth: '50%',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '50%',
    },
  },
  textfield: {
    marginTop: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    width: '100%',
  },
}));

function Contact() {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { formikBag, isDisabled } = useContactFrom();

  return (
    <WrapperBox>
      <ContentDivider />
      <ContentWrapper>
        <Typography variant="h3" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Paper classes={{ root: classes.paper }} elevation={3}>
          <form noValidate onSubmit={formikBag?.handleSubmit}>
            <TextField
              className={classes.textfield}
              id="user_name"
              name="user_name"
              label="Name"
              formikBag={formikBag}
              helperText="What name do you prefer?"
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              className={classes.textfield}
              id="user_email"
              name="user_email"
              label="Email"
              formikBag={formikBag}
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              className={classes.textfield}
              id="message"
              name="message"
              label="Message"
              formikBag={formikBag}
              helperText="What questions or feedback would you like to share?"
              variant="outlined"
              required
              fullWidth
            />
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              type="submit"
              disabled={isDisabled}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </ContentWrapper>
    </WrapperBox>
  );
}

export default Contact;
