import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoeImage1 from '../assets/img/Classic_Leather_Legacy_AZ_Shoes_Gold_GY2712_01_standard.jpg';
import ShoeImage2 from '../assets/img/Classic_Leather_Legacy_AZ_Shoes_Grey_GX1335_01_standard.jpg';
import ShoeImage3 from '../assets/img/Classic_Leather_Legacy_AZ_Shoes_White_GZ7344_01_standard.jpg';
import ShoeImage4 from '../assets/img/Classic_Leather_Legacy_Shoes_Beige_S24173_01_standard.jpg';
import ShoeImage5 from '../assets/img/Classic_Leather_Legacy_Shoes_Black_FY7377_01_standard.jpg';
import ShoeImage6 from '../assets/img/Classic_Leather_Legacy_Shoes_Black_S24169_01_standard.jpg';
import ShoeImage7 from '../assets/img/Classic_Leather_Legacy_Shoes_Grey_FY7748_01_standard.jpg';

const ShoeArray = [ShoeImage1, ShoeImage2, ShoeImage3, ShoeImage4, ShoeImage5, ShoeImage6, ShoeImage7]

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '255px',
    height: '384px'
  },
  media: {
    height: '276px',
    width: '100%',
  },
  shoeTitle: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: "20px",
  },
  shoeType: {
    fontSize: '.8rem',
  },
  shoeDesc: {
    fontSize: '.8rem',
  },
  recycled: {
    fontWeight: 'bold',
  },
  overlayFavorite: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  overlayPrice: {
    backgroundColor: "#fff",
    position: 'absolute',
    top: '250px',
    left: '15px',
    padding: '5px',
  },
}))

function ShoeCard(props) {
  const classes = useStyles();
  let image = ShoeArray[props.info.index] ;
  
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media}><img src={image} alt="Classic Leather"/></CardMedia>
      <FavoriteBorderIcon className={classes.overlayFavorite} />
      <Typography className={classes.overlayPrice}>$80</Typography>
      <CardContent>
        <Typography variant="body1" className={classes.shoeTitle}>{props.info.title}</Typography>
        <Typography variant="body1" className={classes.shoeType}>{props.info.type}</Typography>
        <Typography variant="body1" className={classes.shoeDesc}>{props.info.description} - <span className={classes.recycled}>recycled materials</span></Typography>
      </CardContent>
    </Card>
  )
}

export default ShoeCard

