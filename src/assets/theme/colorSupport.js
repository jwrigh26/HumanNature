export default function (type = 'light') {
  const isDark = type === 'dark';

  return {
    common: {
      black: '#000',
      white: '#fff',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    text: {
      primary: isDark ? '#fff' : 'rgba(0, 0, 0, 0.87)',
      secondary: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.54)',
      disabled: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.38)',
      hint: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.38)',
    },
    divider: isDark ? 'rgba(0, 0, 0, 0.12)' : 'rgba(0, 0, 0, 0.12)',
    background: {
      paper: isDark ? '#303030' : '#fff',
      default: isDark ? '#424242' : '#fafafa',
    },
    action: {
      active: isDark ? '#fff' : 'rgba(0, 0, 0, 0.54)',
      hover: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: isDark ? 'rgba(255, 255, 255, 0.16)' : 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.26)',
      disabledBackground: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: isDark ? 'rgba(0, 0, 0, 0.12)' : 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
    icon: {
      primary: isDark ? '#fff' : '#000',
      reverse: isDark ? '#000' : '#fff',
    },
  };
}
