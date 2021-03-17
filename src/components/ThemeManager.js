import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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

  let theme = createMuiTheme({
    ...colorTheme,
    status: { danger: orange[500] },
    typography: {
      fontFamily: primaryFontFamily,
      h1: {
        fontFamily: secondaryFontFamily,
      },
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
