import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import FooterLink from 'components/Footer/FooterLink.js';

ListItemLink.propTypes = {
  label: PropTypes.string,
};

function ListItemLink(props) {
  return (
    <ListItem button {...props}>
      <ListItemText primary={props.label} />
    </ListItem>
  );
}

function ThemePickerList(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 320,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemLink label="Spam" />
        <ListItemText primary="Brunch this weekend?" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemLink label="Dirp" />
        <ListItemText primary="Herp Dirp Surp" />
      </ListItem>
    </List>
  );
}

export default ThemePickerList;
