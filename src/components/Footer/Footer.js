import React, { useEffect, useState, useStyle } from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import classnames from 'classnames';
import FooterLink from './FooterLink';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import useActions from 'hooks/useActions.js';
import { appSelector } from 'store/appSlice';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexGrow: 0,
    margin: 0,
    marginBottom: theme.spacing(1),
    maxWidth: theme.breakpoints.values.siteMaxWidth,
    height: 'inherits',

    [theme.breakpoints.up('sm')]: {
      height: '96px',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'flex-end',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    [theme.breakpoints.up('siteMaxWidth')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      minWidth: theme.breakpoints.values.siteMaxWidth,
    },
  },
  leading: {
    flex: 1,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(0),
    },
  },
  trailing: {
    flex: 1,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(2),
    },
  },
  info: {
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '4px',
    },
  },
  privacy: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    listStyle: 'none',
    paddingInlineStart: 0,
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
    },
  },
  text: {
    color: theme.palette.common.white,
  },
  secondaryText: {
    color: theme.palette.common.white,
    opacity: 0.8,
  },
  copyright: {
    paddingLeft: '5px',
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    listStyle: 'none',
    paddingInlineStart: 0,
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
    },
  },
  icon: {
    color: theme.palette.common.white,
    opacity: 0.8,
    '&:hover': {
      opacity: 1.0,
    },
    '&$disabled': {
      opacity: 0.5,
    },
  },

  disabled: {
    opacity: 0.5,
  },
}));

function Footer() {
  const theme = useTheme();
  const classes = useStyles(theme);

  const location = useLocation();
  const { navigation } = useSelector(appSelector);
  const { subRoutes: routes } = navigation?.routes?.policies ?? {};
  const actions = useActions();
  const [isContactPath, setIsContactPath] = useState();

  useEffect(() => {
    setIsContactPath(location?.pathname === navigation?.routes?.contact?.route);
  }, [location]);

  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <section className={classes.leading}>
          <div className={classes.info}>
            <Typography
              classes={{ root: classnames(classes.text, classes.copyright) }}
              variant="body2"
            >{`© 2021 — Unimath | All Rights Reserved`}</Typography>
          </div>
        </section>
        <section className={classes.trailing}>
          <ul className={classes.social}>
            <IconButton onClick={actions.handleTwitter}>
              <TwitterIcon className={classes.icon} />
            </IconButton>
            <IconButton onClick={actions.handleLinkedIn}>
              <LinkedInIcon className={classes.icon} />
            </IconButton>
            <IconButton onClick={actions.handleMail} disabled={isContactPath}>
              <EmailIcon
                className={classnames(classes.icon, {
                  [classes.disabled]: isContactPath,
                })}
              />
            </IconButton>
          </ul>
          <ul className={classes.privacy}>
            <li>
              <FooterLink to={`${routes?.privacyPolicy?.route}`}>
                Privacy Policy
              </FooterLink>
            </li>
            <li className={classes.secondaryText}>|</li>
            <li>
              <FooterLink to={`${routes?.termsOfService?.route}`}>
                Terms of Service
              </FooterLink>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
