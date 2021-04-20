import { paletteColor } from './const';

export default function (palette) {
  const selectedPalette = paletteColor[palette];
  const palettes = {
    [paletteColor.purpleGrey]: {
      primary: {
        light: '#E1BEE7',
        main: '#9C27B0',
        dark: '#7B1FA2',
        contrastText: '#fff',
      },
      secondary: { main: '#9E9E9E' },
    },
    [paletteColor.pinkGrey]: {
      primary: {
        light: '#F8BBD0',
        main: '#E91E63',
        dark: '#C2185B',
        contrastText: '#fff',
      },
      secondary: { main: '#9E9E9E' },
    },
    [paletteColor.indigoBlue]: {
      primary: {
        light: '#C5CAE9',
        main: '#3F51B5',
        dark: '#303F9F',
        contrastText: '#fff',
      },
      secondary: { main: '#448AFF' },
    },
    [paletteColor.orangeBlue]: {
      primary: {
        light: '#FFE0B2',
        main: '#FF9800',
        dark: '#F57C00',
        contrastText: '#fff',
      },
      secondary: { main: '#448AFF' },
    },
    [paletteColor.blueGreyRed]: {
      primary: {
        light: '#CFD8DC',
        main: '#607D8B',
        dark: '#455A64',
        contrastText: '#fff',
      },
      secondary: { main: '#FF5252' },
    },
    [paletteColor.tealCyan]: {
      primary: {
        light: '#B2DFDB',
        main: '#009688',
        dark: '#00796B',
        contrastText: '#fff',
      },
      secondary: { main: '#00BCD4' },
    },
    [paletteColor.greenLime]: {
      primary: {
        light: '#C8E6C9',
        main: '#4CAF50',
        dark: '#388E3C',
        contrastText: '#fff',
      },
      secondary: { main: '#CDDC39' },
    },
    [paletteColor.deepPurplePink]: {
      primary: {
        light: '#D1C4E9',
        main: '#673AB7',
        dark: '#512DA8',
        contrastText: '#fff',
      },
      secondary: { main: '#FF4081' },
    },
    [paletteColor.lightGreenPink]: {
      primary: {
        light: '#DCEDC8',
        main: '#8BC34A',
        dark: '#689F38',
        contrastText: '#fff',
      },
      secondary: { main: '#FF4081' },
    },
    [paletteColor.tealGrey]: {
      primary: {
        light: '#B2DFDB',
        main: '#009688',
        dark: '#00796B',
        contrastText: '#fff',
      },
      secondary: { main: '#9E9E9E' },
    },
  };

  return palettes[selectedPalette];
}
