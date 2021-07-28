import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { screenSelector } from 'store/screenSlice';
import { cdnBaseURL } from '../../constants';
import Image from 'components/Image/Image';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 56,
    height: 56,
    [theme.breakpoints.up('sm')]: {
      width: 72,
      height: 72,
    },
    background: theme.palette.grey[300],
    flexShrink: 0,
  },
}));

Thumbnail.propTypes = {
  item: PropTypes.object.isRequired,
};

export default function Thumbnail({ item }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { devicePixelRatio } = useSelector(screenSelector);
  const { name, id, categoryId } = item;
  const safeName = `${name
    .replaceAll(' ', '')
    .replaceAll('(', '')
    .replaceAll(')', '')
    .toLowerCase()
    .trim()}`;

  const src = `${cdnBaseURL}/${safeName}-${categoryId}-${id}-01@${devicePixelRatio}x.jpg`;
  const placeholder = require(`assets/images/placeholder/placeholder@${devicePixelRatio}x.jpg`);
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${placeholder})`,
        backgroundPosition: 'center',
      }}
    >
      <Image url={src} />
    </div>
  );
}
