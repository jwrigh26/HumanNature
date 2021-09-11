import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { screenSelector } from 'store/screenSlice';
import { setCartOpen, updateCart } from 'store/shopSlice';
import { setError } from 'store/errorSlice';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Image from 'components/Image/Image';
import { cdnBaseURL } from '../../constants';

import {
  getCurrencyFromNumber,
  truncateDescription,
} from 'helpers/formatHelper';
import { getFakeDescription } from './temp.helper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '444px',
    [theme.breakpoints.up('sm')]: {
      height: '480px',
    },
    [theme.breakpoints.up('md')]: {
      height: '512px',
    },

    [theme.breakpoints.up('lg')]: {
      height: '556px',
    },
  },
  actions: {
    flexShrink: 0,
  },
  actionarea: {
    overflow: 'hidden',
    flex: '1',
  },
  content: {
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    height: '100%',
    flex: 1,
  },
  description: {
    color: theme.palette.text.secondary,
  },
  media: {
    height: 212,
    flex: 1,

    [theme.breakpoints.up('sm')]: {
      height: 212,
    },
    [theme.breakpoints.up('md')]: {
      height: 232,
    },

    [theme.breakpoints.up('lg')]: {
      height: 264,
    },
  },

  foo: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: 'white',
    background: 'black',
  },
  price: {
    fontFamily: theme.typography.fontFamlies.secondary,
    paddingBottom: theme.spacing(1),
  },
}));

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

function Item({ item }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles(theme);
  const { devicePixelRatio } = useSelector(screenSelector);
  const isSmall = useMediaQuery(theme.breakpoints.up('sm'));
  const isMed = useMediaQuery(theme.breakpoints.up('md'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const truncateLength = isLarge ? 175 : isMed ? 164 : isSmall ? 190 : 122;
  const { name, price, id, categoryId } = item;

  const safeName = `${name
    .replaceAll(' ', '')
    .replaceAll('(', '')
    .replaceAll(')', '')
    .toLowerCase()
    .trim()}`;

  const src = `${cdnBaseURL}/${safeName}-${categoryId}-${id}-01@${devicePixelRatio}x.jpg`;

  const [copySuccess, setCopySuccess] = useState('');
  const imageRef = useRef(null);

  function copyToClipboard(e) {
    console.log('CopyToClipboard');
    console.log(imageRef.current.innerText);
    // navigator.clipboard.writeText(imageRef.current.innerText);
    // setCopySuccess(`${safeName} -> Copied!`);
  }

  function handleBuyItNow() {
    dispatch(
      setError({
        error: new Error(`Oops, Buy it now is not available for ${name}.`),
      })
    );
  }

  function navigateToDetailsPage() {
    dispatch(
      setError({
        error: new Error(
          `Oops, ${name}'s Detail Page isn't available right now.`
        ),
      })
    );
  }

  function handleAddToCart() {
    dispatch(updateCart(id, item));
    dispatch(setCartOpen({ open: true }));
  }

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea
          className={classes.actionarea}
          onClick={navigateToDetailsPage}
        >
          <div className={classes.media}>
            <Image url={src} fade={true} />
          </div>

          <CardContent className={classes.content}>
            {/* Name */}
            <Typography gutterBottom variant="h5" component="h4">
              {name}
            </Typography>
            <Typography className={classes.price} variant="h6" component="h5">
              {getCurrencyFromNumber(price)}
            </Typography>
            <Typography
              className={classes.description}
              variant="body2"
              component="span"
              ref={imageRef}
            >
              {/* {`${safeName}-${categoryId}-${id}-01`} */}
              {truncateDescription(getFakeDescription(), truncateLength)}
            </Typography>

            {copySuccess}
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions}>
          <Button size="small" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <Button size="small" color="primary" onClick={handleBuyItNow}>
            Buy Now
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default React.memo(Item);
