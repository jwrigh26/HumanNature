import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  appSelector,
  handleCookieReset,
  setPaletteColor,
  setPaletteMode,
} from 'store/appSlice';
import { hasValue } from 'helpers/utils.js';
import userTheme from 'assets/theme';



export default function useActions() {
  const dispatch = useDispatch();
  const {
    themeBag: { color, mode },
    navigation: { routes },
  } = useSelector(appSelector);

  const history = useHistory();

  const [moreAnchorEl, setMoreAnchorEl] = useState(null);
  const [themeAnchorEl, setThemeAnchorEl] = useState(null);
  const [paletteDrawerOpen, setPaletteDrawerOpen] = useState(false);

  const [modeIcon, setModeIcon] = useState();
  const [modeLabel, setModeLabel] = useState();
  const isDark = mode === userTheme?.mode?.dark;

  useEffect(() => {
    setModeIcon(isDark ? 'brightness_7' : 'brightness_3');
    setModeLabel(isDark ? 'Light Mode' : 'Dark Mode');
  }, [isDark]);

  function openURL(url) {
    const win = window.open(url, '_blank');
    if (win !== null) {
      win.focus();
    }
  }

  function handleTwitter() {
    openURL('https://twitter.com/justin_m_wright');
  }

  function handleLinkedIn() {
    openURL('https://www.linkedin.com/in/justin-wright-00147621/');
  }

  function handleCloseMore() {
    setMoreAnchorEl(null);
  }

  function handleOpenMore(event) {
    setMoreAnchorEl(event.currentTarget);
  }

  function handleCloseThemePicker() {
    setThemeAnchorEl(null);
  }

  function handleMail() {
    history.push(routes?.contact?.route);
  }

  function handleTogglePaletteDrawer(open) {
    return (event) => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
      setPaletteDrawerOpen(open);
    };
  }

  function handleOpenThemePicker(event) {
    setThemeAnchorEl(event.currentTarget);
  }

  function handleRest() {
    dispatch(handleCookieReset());
  }

  function handleSetPaletteMode() {
    const newMode =
      mode === userTheme?.mode?.light
        ? userTheme?.mode?.dark
        : userTheme?.mode?.light;
    dispatch(setPaletteMode({ mode: newMode }));
  }

  function handleSetPaletteColor(value) {
    if (hasValue(value)) {
      dispatch(setPaletteColor({ color: value }));
    }
  }

  function handleFoo() {
    history.push('/policies/terms-of-service');
  }

  function handleHome() {
    history.push('/');
  }

  return {
    handleCloseMore,
    handleOpenMore,
    handleCloseThemePicker,
    handleLinkedIn,
    handleMail,
    handleOpenThemePicker,
    handleTogglePaletteDrawer,
    handleRest,
    handleSetPaletteMode,
    handleSetPaletteColor,
    handleTwitter,
    moreAnchorEl,
    themeAnchorEl,
    modeIcon,
    modeLabel,
    paletteDrawerOpen,
    handleFoo,
    handleHome,
  };
}
