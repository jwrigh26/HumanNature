import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { getCurrencyFromNumber } from 'helpers/formatHelper';
import { getFakeDescription } from './fake';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 140,
  },
}));

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

function Item({ item }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { name, price } = item;

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://placekitten.com/640/360"
            title="Contemplative Reptile"
          />
          <CardContent>
            {/* Name */}
            <Typography gutterBottom variant="h5" component="h4">
              {name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h5">
              {getCurrencyFromNumber(price)}
            </Typography>

            {/* Description */}
            <Typography variant="body2" color="textSecondary" component="p">
              {getFakeDescription()}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Add to Cart
          </Button>
          <Button size="small" color="primary">
            Buy Now
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default React.memo(Item);

/**
 * import FALLBACK_IMAGE from 'src/assets/images/fallback_image.png';

const onMediaFallback = event => event.target.src = FALLBACK_IMAGE;
<CardMedia
 component="img"
 className={classes.media}
 image="/static/images/cards/contemplative-reptile.jpg"
 title="Contemplative Reptile"
 onError={onMediaFallback}
/>


<CardMedia>
 <img src={this.props.recipe.thumbnail} alt="recipe thumbnail"/>
</CardMedia>

...
recipe = {
  .
  .
  thumbnail: require('assets/images/img1.jpg'),
  //make sure the path of the image is relative to parent class where you are defining the prop 
  .
  .
}
 */
