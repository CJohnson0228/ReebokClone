import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Fractal from '../assets/img/fractal_copy.png';
import ReebokOverlay from '../assets/img/reebokforimg.png';

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    minHeight: 'calc((80vw * 9) / 16)',
    width: '100vw',
    position: 'relative',
  },
  fractals: {
    color: '#fff',
    position: 'absolute',
    top: '20%',
    left: '100px',
    width: '80vw',
    margin: 'auto',
  },
  button: {
    color: '#000',
    borderRadius: 0,
    backgroundColor: '#fff',
    marginTop: '10px',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: "#ccc",
    }
  },
  reebokImg: {
    height: '60%',
    width: '60%',
  }
}));

function Splash() {
  const classes = useStyles();

  return (
    <Box className={classes.box} style={{backgroundImage: `url(${Fractal})`}}>
      <Grid container justifyContent="space-between" alignItems="center" className={classes.fractals}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h2">REEBOK X</Typography>
          <Typography variant="h2">FRACTALS</Typography>
          <Typography variant="body1">Something strange is about to cross over from the other side</Typography>
          <Button className={classes.button}>Explore Now</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={ReebokOverlay} alt="Reebok" className={classes.reebokImg}/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Splash
