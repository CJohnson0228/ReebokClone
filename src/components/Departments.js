import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import kids from '../assets/img/cap-g0f83d4000_1920.jpg';
import women from '../assets/img/girl-g243a70558_1920.jpg';
import men from '../assets/img/man-g767790c69_1920.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90vw",
  },
  cardItem: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  title: {
    position: 'absolute',
    textAlign: 'center',
    width: '90%',
    top: '45%',
    color: '#fff',
    textShadow: '2px 1px #000',
  },
  bgimage: {
    position: 'relative',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  imgBox: {
    paddingBottom: '-5px',
  }
}))

function Departments() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container 
        justifyContent='space-between' 
        direction='row' 
        spacing={1}>
          <Grid item 
            className={classes.cardItem} 
            xs={4}>
              <Box 
                boxShadow={3} 
                component='img' 
                src={women} 
                alt="women" 
                className={classes.bgimage}/>
              <Typography variant="h4" className={classes.title}>
                Women
              </Typography>
          </Grid>
          <Grid item 
            className={classes.cardItem} 
            xs={4}>
              <Box 
                boxShadow={3} 
                component='img' 
                src={men} 
                alt="men" 
                className={classes.bgimage}/>
              <Typography variant="h4" className={classes.title}>
                Men
              </Typography>
          </Grid>
          <Grid item 
            className={classes.cardItem} 
            xs={4}>
              <Box 
                boxShadow={3} 
                component='img' 
                src={kids} 
                alt="kids" 
                className={classes.bgimage}/>
              <Typography variant="h4" className={classes.title}>
                Kids
              </Typography>
          </Grid>
      </Grid>
    </Container>
  )
}

export default Departments
