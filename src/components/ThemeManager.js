import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  createMuiTheme,
  responsiveFontSizes,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

import userTheme from 'assets/theme';
import { useSelector } from 'react-redux';
import { appSelector } from '../store/appSlice';

ThemeManager.propTypes = {
  children: PropTypes.any,
};

function ThemeManager({ children }) {
  const {
    themeBag: { color, mode },
  } = useSelector(appSelector);

  const primaryFontFamily = ['"Raleway"', 'sans-serif'].join(',');
  const secondaryFontFamily = ['"Source Sans Pro"', 'sans-serif'].join(',');
  const selectedColor = userTheme.color(color);
  const selectedColorSupport = userTheme.colorSupport(mode);

  let theme = createMuiTheme({
    mode: {
      isDark: mode === userTheme.mode.dark,
      isLight: mode === userTheme.mode.light,
    },
    breakpoints: {
      values: {
        xs: 0,
        iphoneSE: 320,
        iphone6: 375,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
        siteMaxWidth: 1600,
      },
    },
    palette: {
      ...selectedColorSupport,
      ...selectedColor,
      type: mode,
    },
    props: {
      cart: {
        drawerWidth: 512,
      },
      MuiButtonBase: {
        disableRipple: false, // No more ripple, on the whole application 💣
      },
    },
    status: { danger: orange[500] },

    typography: {
      fontFamily: primaryFontFamily,
      h1: {
        fontFamily: secondaryFontFamily,
      },
      h2: {
        fontFamily: secondaryFontFamily,
      },
      h3: {
        fontFamily: secondaryFontFamily,
      },
      h4: {
        fontFamily: secondaryFontFamily,
      },
      fontFamlies: {
        primary: primaryFontFamily,
        secondary: secondaryFontFamily,
      },
    },
  });

  // Make responsive!
  // See: https://material-ui.com/guides/responsive-ui/
  theme = responsiveFontSizes(theme);

  // Add custom wrapper
  theme = {
    ...theme,
    wrapper: {
      maxWidth: theme.breakpoints.values.siteMaxWidth,
      [theme.breakpoints.up('sm')]: {
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
  };

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>{children}</StylesProvider>
    </ThemeProvider>
  );
}

export default ThemeManager;

// https://material-ui.com/customization/components/
// See how to customize nested components and target tags
