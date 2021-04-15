import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import MuiToolbar from '@material-ui/core/Toolbar';

Toolbar.propTypes = {
  actionGroup: PropTypes.any,
  brandCrest: PropTypes.any,
  tabs: PropTypes.any,
};

const useStyles = makeStyles((theme) => ({
  toolbar: {
    [theme.breakpoints.down('md')]: {
      minHeight: 128,
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(0),
    },
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      minHeight: theme.mixins.toolbar.minHeight,
      paddingBottom: theme.spacing(1),
    },
  },

  icon: {
    color: theme.palette.icon.primary,
    [theme.breakpoints.up('md')]: {
      color: theme.palette.common.black,
    },
  },
}));

function Toolbar({
  actionGroup: ActionGroup,
  brandCrest: BrandCrest,
  tabs: Tabs,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <>
      <MuiToolbar className={classes.toolbar} disableGutters>
        {/* Hamburger menu button */}
        {/*<Hidden mdUp>*/}
        {/*  <IconButton>*/}
        {/*    <Icon className={classes.icon}>menu</Icon>*/}
        {/*  </IconButton>*/}
        {/*</Hidden>*/}
        {/* Brand Crest aka Logo */}
        <BrandCrest />
        {/* Tabs */}
        <Hidden smDown>
          <Tabs />
        </Hidden>
        {/* Actions  */}
        <ActionGroup />
      </MuiToolbar>
    </>
  );
}

export default Toolbar;
