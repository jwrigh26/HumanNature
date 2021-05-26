import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import ContentWrapper from 'components/ContentWrapper.js';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextArea from 'components/TextArea.js';
import TextField from 'components/TextField.js';
import useContactFrom from 'hooks/useContactForm.js';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
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
  buttonProgress: {
    color: theme.palette.common.black,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  submitted: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  thankyou: {
    width: '100%',
  },
}));

// TODO: Capatcha must be installed.
function Contact() {
  const theme = useTheme();
  const classes = useStyles(theme);

  const {
    goHome,
    formikBag,
    isDisabled,
    isSubmitting,
    submitted,
    textAreaMax,
  } = useContactFrom();


  return (
      <ContentWrapper>
        <Typography variant="h3" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Paper classes={{ root: classes.paper }} elevation={3}>
          {submitted && (
            <div className={classes.submitted}>
              <section className={classes.thankyou}>
                <Typography variant="h4" component="h2" gutterBottom>
                  Thank you for your message!
                </Typography>
                <Typography variant="body2" classes={{ body2: classes.body2 }}>
                  We will be in touch soon.
                </Typography>
              </section>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={goHome}
              >
                Go Home
              </Button>
            </div>
          )}
          {!submitted && (
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
              <TextArea
                className={classes.textfield}
                id="message"
                name="message"
                label="Message"
                formikBag={formikBag}
                placeholder="What questions or feedback would you like to share?"
                variant="outlined"
                required
                rowsMin={7}
                rowsMax={14}
                max={textAreaMax}
              />
              <div className={classes.button}>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  disabled={isDisabled}
                  fullWidth
                >
                  Submit
                  {isSubmitting && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </Button>
              </div>
            </form>
          )}
        </Paper>
      </ContentWrapper>
  );
}

export default Contact;
