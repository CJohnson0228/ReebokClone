import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/core/styles';

import ShoeCard from './ShoeCard';
import ShoeData from "../data/shoes.json";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '20px',
    paddingBottom: '20px',
    marginTop: "50px",
    display: 'flex',
    flexDirection: 'column',
  },
  carouselWrapper: {
    display: 'flex',
    width: '100%',
    position: 'relative',
  },
  carouselContentWrapper: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  carouselContentShow: {
    display: 'flex',
    transition: 'all 250ms linear',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    '&::*': {
      width: '100%',
      flexGrow: '1',
      flexShrink: '0',
    }
  },
  leftArrow: {
    position: "absolute",
    zIndex: 1,
    top: "50%",
    transform: "translateY(-50%)",
    width: "48px",
    height: "48px",
    borderRadius: 0,
    backgroundColor: "white",
    border: "1px solid #ddd",
    left: "24px",
    '&:hover': {
      backgroundColor: "white",
    }
  },
  rightArrow: {
    position: "absolute",
    zIndex: 1,
    top: "50%",
    transform: "translateY(-50%)",
    width: "48px",
    height: "48px",
    borderRadius: 0,
    backgroundColor: "white",
    border: "1px solid #ddd",
    right: "24px",
    '&:hover': {
      backgroundColor: "white",
    }
  }
}))

function NewArrivals() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [length, setLength] = useState(ShoeData.length);

  useEffect(() => {
    setLength(ShoeData.length)
  }, []);

  const classes = useStyles();

  const next = () => {
    if (currentIndex < (length - 5 )) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }
  
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  console.log(ShoeData.length);

  return (
    <Container className={classes.root}>
      <Grid container justifyContent='space-between'>
        <Grid item><Typography variant="h5">New Arrivals</Typography></Grid>
        <Grid item><Typography variant="body2">View All</Typography></Grid>
      </Grid>
      
      <div className={classes.carouselWrapper}>
        {
          currentIndex > 0 &&
          <IconButton className={classes.leftArrow} onClick={prev}><ArrowBackIosIcon /></IconButton>
        }
        <div className={classes.carouselContentWrapper}>
          <Grid container wrap="nowrap" className={classes.carouselContentShow} style={{transform: `translateX(-${currentIndex * (100 / 5)}%)`}} spacing={2}>
            {ShoeData.map((data) => {
              return <Grid item><ShoeCard info={data} /></Grid>
            })}
          </Grid>
        </div>
        {
          currentIndex < (length - 6) &&
          <IconButton className={classes.rightArrow} onClick={next}><ArrowForwardIosIcon /></IconButton>
        }
      </div>
    </Container>
  )
}

export default NewArrivals
/*
    This still needs some work, but I'm getting sfrustrated with the carousel. I will come back to this.
*/