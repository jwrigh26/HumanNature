import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  createMuiTheme,
  responsiveFontSizes,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core/styles';
import colorTheme from 'assets/theme-color.json';
import { orange } from '@material-ui/core/colors';

ThemeManager.propTypes = {
  children: PropTypes.any,
};

function ThemeManager({ children }) {
  const primaryFontFamily = ['"Raleway"', 'sans-serif'].join(',');
  const secondaryFontFamily = ['"Source Sans Pro"', 'sans-serif'].join(',');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');

  console.log('prefers', prefersDarkMode);


  let theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
        siteMaxWidth: 1600,
      },
    },
    palette: {
      ...colorTheme.palette,
      icon: { primary: colorTheme.palette.primary.contrastText },
      // type: prefersDarkMode ? 'dark' : 'light',
      type: 'dark',
    },
    props: {
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
      }
    },
  });

  // Make responsive!
  // See: https://material-ui.com/guides/responsive-ui/
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>{children}</StylesProvider>
    </ThemeProvider>
  );
}

export default ThemeManager;

// https://material-ui.com/customization/components/
// See how to customize nested components and target tags
