import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ShoeCard from './ShoeCard';
import ShoeData from "../data/shoes.json";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '10px',
  },
}))

function ShoeCarousel() {
  const classes = useStyles();

  console.log(ShoeData.length);

  return (
    <Grid className={classes.root} container spacing={1} direction="row" justifyContent="center" nowrap>
      {ShoeData.map((data) => {
        console.log(data)
        return <Grid item><ShoeCard info={data} /></Grid>
      })}
    </Grid>
  )
}

export default ShoeCarousel
