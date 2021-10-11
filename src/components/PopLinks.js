import React from 'react';

import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "50px",
    marginTop: '7rem',
    marginBottom: '3rem',
  },
  title: {
    marginBottom: "20px",
  }
}));

function PopLinks() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container justifyContent="center">
        <Grid item className={classes.title}>
          <Typography variant="h4">POPULAR RIGHT NOW</Typography>
        </Grid>
        <Grid item container justifyContent="center" spacing={3} >
          <Grid item><Button variant="outlined">Nano</Button></Grid>
          <Grid item><Button variant="outlined">Club C</Button></Grid>
          <Grid item><Button variant="outlined">Basketball</Button></Grid>
          <Grid item><Button variant="outlined">Classic Leather Legacy AZ</Button></Grid>
          <Grid item><Button variant="outlined">Layering</Button></Grid>
        </Grid>
      </Grid>
      
    </Container>
  )
}

export default PopLinks
